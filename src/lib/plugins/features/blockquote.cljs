(ns lib.plugins.features.blockquote
  (:require [reagent.core :as r]
            [lib.plugins.helpers.auto-replace :refer [auto-replace]]
            [lib.plugins.helpers.hotkey :refer [hotkey]]))

(defn transform [change]
  (.setBlock change
             (clj->js {:type "blockquote"})))

(defn render-node [props]
  (when (= "blockquote" props.node.type)
    (r/create-element "blockquote"
                      props.attributes
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
