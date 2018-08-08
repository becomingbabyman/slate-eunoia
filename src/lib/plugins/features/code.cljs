(ns lib.plugins.features.code
  (:require [reagent.core :as r]
            [lib.components.core :as c]
            [lib.plugins.helpers.auto-replace :refer [auto-replace]]))

(defn strip-auto-replace-triggers [matched-text]
  (subs matched-text 1))

(defn transform [change event matches]
  (if matches
    (let [text (first matches.before)
          clean-text (strip-auto-replace-triggers text)]
      (.insertText change clean-text (clj->js ["code"])))
    (.toggleMark change "code")))

(defn render-mark [props]
  (when (= "code" props.mark.type)
    (c/code
      (js->clj props.attributes)
      props.children)))

(defn code
  "Adds code support to editor"
  ([options]
   {:plugins
    (clj->js
     [(auto-replace
       {:trigger #"\`"
        :before #"(\`.+)"
        :transform transform})
      {:renderMark render-mark}])})
  ([]
   (code {})))
