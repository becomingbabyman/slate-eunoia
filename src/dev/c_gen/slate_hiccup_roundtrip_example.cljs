(ns dev.c-gen.slate-hiccup-roundtrip-example
  (:require [devcards.core :refer-macros [defcard]]
            [dev.util :refer-macros [defeditor]]
            [util.slate-hiccup :as sh]
            [util.slate :as slate]))

(def hiccup
  [:document
   [:paragraph
    "foo"
    [:bold
     2
     [:italic
      [:link
       {:url "https://clojure.org"}
       "bar"
       3
       [:strikethrough
        "baz"]]]]]])

(defeditor
 initial-hiccup
 "Here's some example hiccup. We will get back to this by the end. The order of the `mark` and `inline` tags are mostly interchangeable.  (click \"show editor value\" > \"hiccup\")"
 hiccup)

(defcard
 hiccup->ast
 "The hiccup conformed to the `::document` spec."
 (sh/make-ast hiccup))

(defcard
 ast->edn
 "The ast converted to a Slate doc."
 (sh/ast->slate-edn
  (sh/make-ast hiccup)))

(defcard
 edn->slate-value
 "The edn version of the doc converted to the final JS Slate Value."
 (slate/edn->slate
  (sh/ast->slate-edn
   (sh/make-ast hiccup))))

(defcard
 edn<-slate-value
 "Back to edn."
 (sh/slate->edn
  (slate/edn->slate
   (sh/ast->slate-edn
    (sh/make-ast hiccup)))))

(defcard
 ast<-edn
 "Back to ast."
 (sh/edn->ast
  (sh/slate->edn
   (slate/edn->slate
    (sh/ast->slate-edn
     (sh/make-ast hiccup))))))

(defeditor
 hiccup<-ast-as-editor
 "Back to hiccup! This editor should look the same as the one above even though the hiccup is in a different order. Click \"show editor value\" > \"hiccup\" to see the hiccup."
 (sh/ast->hiccup
  (sh/edn->ast
   (sh/slate->edn
    (slate/edn->slate
     (sh/ast->slate-edn
      (sh/make-ast hiccup)))))))
