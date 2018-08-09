(ns lib.plugins.features.code-block
  (:require [reagent.core :as r]
            [lib.components.core :as c]
            [lib.plugins.helpers.auto-replace :refer [auto-replace]]
            [lib.plugins.helpers.hotkey :refer [hotkey]]))

(defn transform [change]
  (.setBlocks change
              (clj->js (if (= "code-block" change.value.anchorBlock.type)
                         {:type "paragraph"}
                         {:type "code-block"}))))

(defn render-node [props]
  (when (= "code-block" props.node.type)
    (c/code-block
     (js->clj props.attributes)
     props.children)))

(defn code-block
  "Adds code-block support to editor"
  ([options]
   {:plugins
    (clj->js
     [(auto-replace
       {:trigger "space"
        :before #"^(\`\`\`)$"
        :transform transform})
      {:renderNode render-node}])})
  ([]
   (code-block {})))
