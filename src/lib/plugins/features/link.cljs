(ns lib.plugins.features.link
  (:require [reagent.core :as r]
            [lib.components.core :as c]
            [lib.plugins.helpers.auto-replace :refer [auto-replace]]))

(defn render-node [props]
  (when (= "link" props.node.type)
    (let [url (.get props.node.data "url")]
      (c/tooltip-wrap ; TODO: see if the hover-menu can be used instead of rendering a hidden tooltip with every link.
       (c/tooltip "TODO: ... " url)
       (c/a
        (merge
         (js->clj props.attributes)
         {:href url
          :target "_blank"
          :on-click #(.open js/window url "_blank")})
        props.children)))))

(defn link
  "Adds link support to editor"
  ([options]
   {:plugins
    (clj->js
     [{:renderNode render-node}])})
  ([]
   (link {})))
