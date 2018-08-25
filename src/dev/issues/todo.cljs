(ns dev.issues.todo
  (:require [dev.util :refer-macros [defeditor]]))

(defeditor
 hover-menu-position-too-low
 "The **hover menu should be right above the selected text**,
 but it's not. You may need to scroll down to see it."
 [:document
  [:paragraph "select some of this text"]])
