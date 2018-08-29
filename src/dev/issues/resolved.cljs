(ns dev.issues.resolved
  (:require [dev.util :refer-macros [defeditor]]))

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
