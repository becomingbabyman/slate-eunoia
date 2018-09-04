(ns dev.b-issues.resolved
  (:require [dev.util :refer-macros [defeditor]]))

; NOTE: add recently resolved issues to the top. Right below this line.

(defeditor
 nested-block-nodes-should-not-be-allowed-in-the-schema
 "Nested block nodes are never valid except maybe lists. The default
  behaviour of the schema should be to disallow. If nested blocks are
  encountered everything but the bottom level block should be removed."
 [:document
  [:blockquote
   [:code-block
    [:paragraph
     [:paragraph
      "I'm a `blockquote -> code-block -> paragraph`. But I should just be a `paragraph`."]]]]
  [:paragraph [:blockquote [:code-block "tryhis is also too much block nesting. Should be `code-block`."]]]
  [:blockquote [:blockquote [:blockquote "And so is this. Should be just one `blockquote`."]]]
  [:blockquote [:header2 [:header2 "Should be just one `header2`."]]]])

(defeditor
 hover-menu-position-too-low
 "The hover menu should be right above the selected text,
 but it's not always. You may need to scroll down to see it.

 ---
 ### Solution
 Position the whole eunoia-editor relative and calulate the
 hover-menu position relative to the eunoia-editor.
 "
 [:document
  [:paragraph "select some of this text"]])

(defeditor
 hover-menu-type-null
 "### Solution
  The hover menu was trying to query value.anchorBlock.type, when
  anchorBlock was null. Adding a catch fixed it."
 '(:document
   (:paragraph
    (:link))))
