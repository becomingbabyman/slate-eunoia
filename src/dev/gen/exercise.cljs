(ns dev.gen.exercise
  (:require [dev.util :refer-macros [defeditor]]
            [devcards.core :refer-macros [defcard defcard-doc]]
            [clojure.spec.alpha :as s]
            [util.slate-hiccup :as sh]
            [clojure.pprint :refer [pprint]]
            [clojure.test.check.generators]))

(defn gen-hiccup
  ([n-generations]
   (->> (s/exercise ::sh/document n-generations)
        (drop (- n-generations 1))
        (first)
        (first)))
  ([] (gen-hiccup 5)))

(defcard-doc
 "# Generative Testing

  ---

  ### ~~ WIP Crashes a bunch (Refresh to get new data) ~~

  ---

  Generate test data and see how the editor performs.

  If a test reveals an issue copy the test data into a new issue card.")

; (js/console.log ">>>>>")
(def gen-5 (gen-hiccup 5))
; (pprint gen-5)

(try
  (defeditor gen-5-editor gen-5)
  (catch :default e
    (js/console.warn "defeditor gen-5-editor failed to mount" e)
    (js/console.log (.stringify js/JSON (clj->js gen-5) nil 2))))

(defcard-doc "## Hiccup" gen-5)
(defcard-doc "## edn" (sh/ast->slate-edn (sh/make-ast gen-5)))
(defcard-doc
 "## Slate Value"
 (try
   (sh/hiccup->slate gen-5)
   (catch :default e
     (.log js/console e)))

 "## Slate JSON"
 (try
   (str "```\n" (.stringify js/JSON (sh/hiccup->slate gen-5) nil 2) "\n```")
   (catch :default e
     (.log js/console e))))
