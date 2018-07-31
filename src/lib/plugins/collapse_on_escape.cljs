(ns lib.plugins.collapse-on-escape)

; taken from https://github.com/ianstormtaylor/slate-plugins/blob/master/packages/slate-collapse-on-escape/src/index.js

(defn on-key-down [event change]
  (when (and
         (= event.key "Escape")
         (not change.value.isCollapsed))
    (.collapseToStart change)))

(defn collapse-on-escape
  "Moves the cursor to the start of the selected text when the escape key is pressed."
  ([options]
   {:onKeyDown on-key-down})
  ([]
   (collapse-on-escape {})))
