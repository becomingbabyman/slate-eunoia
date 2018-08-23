(ns lib.plugins.features.divider
  (:require [lib.components.core :as c]
            [lib.plugins.helpers.auto-replace :refer [auto-replace]]))

(defn transform [change]
  (if (= "divider" (.. change -value -anchorBlock -type))
    (.setBlocks change (clj->js {:type "paragraph"}))
    (-> change
        ; TODO: FIX: this is super buggy when you try to delete it
        (.setBlocks (clj->js {:type "divider" :isVoid true}))
        (.moveToEndOfBlock)
        (.insertBlock (clj->js {:type "paragraph"})))))

(defn render-node [props]
  (when (= "divider" (.. props -node -type))
    (c/hr (js->clj (.. props -attributes)))))

(defn divider
  "Adds divider support to editor"
  ([options]
   {:plugins
    (clj->js
     [(auto-replace
       {:trigger "-"
        :before #"^(--)$"
        :transform transform})
      {:renderNode render-node}])})
  ([]
   (divider {})))
