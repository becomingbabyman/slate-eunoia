(ns lib.plugins.features.blockquote
  (:require [reagent.core :as r]
            [lib.components.core :as c]
            [lib.plugins.helpers.auto-replace :refer [auto-replace]]
            [lib.plugins.helpers.hotkey :refer [hotkey]]))

(defn transform [change]
  (.setBlocks change
              (clj->js (if (= "blockquote" change.value.anchorBlock.type)
                         {:type "paragraph"}
                         {:type "blockquote"}))))

(defn render-node [props]
  (when (= "blockquote" props.node.type)
    (c/blockquote
     (js->clj props.attributes)
     props.children)))

(defn blockquote
  "Adds blockquote support to editor"
  ([options]
   {:plugins
    (clj->js
     [(auto-replace
       {:trigger "space"
        :before #"^(>)$"
        :transform transform})
      (hotkey
       {:key "cmd+shift+." ; aka cmd+shift+>
        :transform transform})
      {:renderNode render-node}])})
  ([]
   (blockquote {})))
