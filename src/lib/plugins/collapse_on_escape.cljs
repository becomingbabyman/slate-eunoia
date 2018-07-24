(ns lib.plugins.collapse-on-escape)

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
