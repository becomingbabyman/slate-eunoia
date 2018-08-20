(ns lib.plugins.trailing-block
  (:require ["slate" :as slate]))

; taken from https://github.com/GitbookIO/slate-trailing-block/blob/master/lib/index.js

(def trailing-block-type "paragraph")

(defn make-trailing-block []
  (.create slate/Block
           (clj->js {:type trailing-block-type
                     :nodes [(.create slate/Text)]})))

(defn trailing-block-inserter [node]
  (let [last-index (.count (.. node -nodes))
        block (make-trailing-block)]
    (fn [change]
      (.insertNodeByKey change (.. node -key) last-index block))))

(defn document? [node]
  (= (.. node -object) "document"))

(defn ends-in-trailing-block? [node]
  (some-> (.. node -nodes)
          (.last)
          (aget "type")
          (= trailing-block-type)))

(defn ends-in-empty-block? [node]
  (some-> (.. node -nodes)
          (.last)
          (aget "isEmpty")))

(defn validate-node [node]
  (when (and
         (document? node)
         (not (and
               (ends-in-trailing-block? node)
               (ends-in-empty-block? node))))
    (trailing-block-inserter node)))

(defn trailing-block
  "Ensures there is always an empty block at the end of a doc"
  ([options]
   ; TODO: validateNode only seems to be invoked on enter,
   ;  In order to always have a trailing empty block find a better time to invoke this
   {:validateNode validate-node})
  ([]
   (trailing-block {})))
