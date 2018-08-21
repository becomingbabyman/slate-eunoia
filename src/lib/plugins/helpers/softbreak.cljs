(ns lib.plugins.helpers.softbreak)

; references: https://github.com/ianstormtaylor/slate-plugins/blob/master/packages/slate-soft-break/src/index.js

(defn softbreak
  "Takes a block0type and inserts \n instead of new blocks on Enter."
  [{:keys [block-type]}]
  {:onKeyDown
   (fn [event change editor]
     (when (and (= "Enter" (.. event -key))
                (not (.. event -shiftKey))
                (= block-type (.. change -value -anchorBlock -type)))
       (.insertText change "\n")))})
