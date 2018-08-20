(ns lib.plugins.backspace)

(defn start-of-block? [change]
  (= 0 (.. change -value -startOffset)))

(defn paragraph? [change]
  (= "paragraph" (.. change -value -startBlock -type)))

(defn on-key-down [event change]
  (when (= (.. event -key) "Backspace")
    (when (and (start-of-block? change)
               (not (paragraph? change)))
      (.preventDefault event)
      (.setBlocks change "paragraph"))))

(defn backspace
  "Handles backspace related tranformations. Mostly converting non paragraph blocks back into paragraphs at the appropriate time."
  ([options]
   {:onKeyDown on-key-down})
  ([]
   (backspace {})))
