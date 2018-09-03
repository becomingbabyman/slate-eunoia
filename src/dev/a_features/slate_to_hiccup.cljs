(ns dev.a-features.slate-to-hiccup
  (:require [devcards.core :refer-macros [defcard]]
            [dev.util :refer-macros [defeditor]]
            [util.slate-hiccup :as sh]
            [util.slate :as slate]))

(def hiccup
  [:document
   [:paragraph
    "foo"
    [:bold
     [:italic
      [:link
       {:url "https://clojure.org"}
       "bar"
       "baz"]]]]])

(defeditor
 initial-hiccup
 "Here's some example hiccup. We will get back to this by the end. The order of the `mark` and `inline` tags are mostly interchangeable.  (click \"show editor value\" > \"hiccup\")"
 hiccup)

(def ast (sh/make-ast hiccup))

(defcard
 hiccup->ast
 "The hiccup conformed to the `::document` spec."
 ast)

(def edn (sh/ast->slate-edn ast))

(defcard
 ast->edn
 "The ast converted to a Slate doc."
 edn)

(def slate-value (slate/edn->slate edn))

(defcard
 edn->slate-value
 "The edn version of the doc converted to the final JS Slate Value."
 slate-value)

(def re-edn (sh/slate->edn slate-value))

(defcard
 edn<-slate-value
 "Back to edn."
 re-edn)

(def re-ast (sh/edn->ast re-edn))

(defcard
 ast<-edn
 "Back to ast."
 re-ast)

(def re-hiccup (sh/ast->hiccup re-ast))

(defeditor
 hiccup<-ast-as-editor
 "Back to hiccup! This editor should look the same as the one above even though the hiccup is in a different order. Click \"show editor value\" > \"hiccup\" to see the hiccup."
 re-hiccup)
