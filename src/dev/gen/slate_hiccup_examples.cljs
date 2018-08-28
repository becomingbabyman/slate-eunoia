(ns dev.gen.slate-hiccup-examples
  (:require [dev.util :refer-macros [defeditor]]
            [devcards.core :refer-macros [defcard deftest defcard-doc]]
            [cljs.test :refer-macros (is)]
            [util.slate-hiccup :as slate-hiccup]
            [util.slate :as slate]
            [util.slate-hiccup-test :as slate-hiccup-test]))

(def hiccup-example
  [:document
   [:header1 "foo" [:bold 2 "bar"]]
   [:paragraph
    [:strikethrough
     [:link {:url "https://www.lipsum.com/"} "Lorem"]
     " Ipsum"]]])

(defcard-doc
 "# Slate Hiccup
 Transforms a Hiccup-like syntax to a SlateJS Document
 aka the `value` of a slate editor."
 (str "E.g. this `" 'hiccup-example "`")
 `(def ~'hiccup-example
    ~hiccup-example))

(defeditor becomes-this-editor hiccup-example)

;
;
(def expected-slate-edn
  {:document
   {:nodes
    [{:object :block
      :type :header1
      :nodes
      [{:object :text, :leaves [{:object :leaf, :text "foo", :marks []}]}
       {:object :inline
        :type :mark-wrapper
        :nodes
        [{:object :text
          :leaves
          [{:object :leaf
            :text "2"
            :marks [{:object :mark, :type :bold}]}]}
         {:object :text
          :leaves
          [{:object :leaf
            :text "bar"
            :marks [{:object :mark, :type :bold}]}]}]}]}
     {:object :block
      :type :paragraph
      :nodes
      [{:object :inline
        :type :mark-wrapper
        :nodes
        [{:object :inline
          :type :link
          :data {:url "https://www.lipsum.com/"}
          :nodes
          [{:object :text
            :leaves
            [{:object :leaf
              :text "Lorem"
              :marks [{:object :mark, :type :strikethrough}]}]}]}
         {:object :text
          :leaves
          [{:object :leaf
            :text " Ipsum"
            :marks [{:object :mark, :type :strikethrough}]}]}]}]}]}})
(deftest and-passes-this-test
  (is (= expected-slate-edn
         (slate-hiccup/ast->slate-edn
          (slate-hiccup/make-ast
           hiccup-example)))))
;
;

(defcard-doc
 "# Walkthrough"

 (str "in other words this hiccup | *"
      (count (str hiccup-example)) "* chars")
 hiccup-example

 (str "becomes this JSON | *"
      (count (str (slate-hiccup/hiccup->slate hiccup-example))) "* chars")
 (slate-hiccup/hiccup->slate hiccup-example)
 "via"
 '(slate-hiccup/hiccup->slate hiccup-example))

(defcard-doc
 "# Schema
 These blocks, marks, etc are specific to enuoia's schema. They
 can be composed in accordance with the
 [SlateJS Data Model](https://docs.slatejs.org/guides/data-model#documents-and-nodes)"

 "Valid **documents** *(typically the root node)*"
 [:document]

 "Valid **blocks**"
 (vec (sort slate-hiccup/blocks))

 "Valid **inlines**"
 (vec (sort slate-hiccup/inlines))

 "Valid **marks**"
 (vec (sort slate-hiccup/marks))

 "Valid **texts**"
 ["any string or any number" 1234])

(defcard-doc
 "# Transformation pipeline"

 "1. Starts with hiccup"
 hiccup-example

 "2. Then conform that hiccup to an AST of blocks, marks, etc."
 (def ast-example (slate-hiccup/make-ast hiccup-example))

 "3. Then recursively traverse that AST to build a Slate Value in edn"
 (def edn-example (slate-hiccup/ast->slate-edn ast-example))

 "4. Finally convert the edn to JSON and use Slate's Value.fromJSON() function to make it into a Slate Value"
 (slate/edn->slate edn-example)
 "- Here's what that looks like pretty printed and with some of the meta data removed"
 (str "```\n" (.stringify js/JSON (slate-hiccup/hiccup->slate hiccup-example) nil 2) "\n```"))

(defcard-doc
 "# Generators

  Since the schema is defined in Clojure Spec, it's possible to generate valid SlateJS Values for use in property based tests.

  ```
  TODO: add examples...
  ```")

(deftest slate-hiccup-test
  "# Tests
  run the tests from util.slate-hiccup-test"
  (slate-hiccup-test/hiccup->slate-edn--simple)
  (slate-hiccup-test/hiccup->slate-edn--nested-marks)
  (slate-hiccup-test/hiccup->slate-edn--complex))
