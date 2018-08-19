(ns lib.plugins.features.link
  (:require [reagent.core :as r]
            [lib.components.core :as c]
            [lib.plugins.helpers.auto-replace :refer [auto-replace]]))

(defn show-hover-menu [props]
  (fn [event]
    (.change props.editor
             #(.setNodeByKey %
                             props.node.key
                             (clj->js
                              {:data {:hovered true
                                      :url "http://npr.org"}})))
    (js/console.log "TODO: show link hover menu" props)))

(defn hide-hover-menu [props]
  (fn [event]
    (js/console.log "TODO: hide link hover menu")))

(defn transform [url]
  (fn [change]
    (.wrapInline change (clj->js {:type "link"
                                  :data {:url url}}))))

(defn render-node [props]
  (when (= "link" props.node.type)
    (js/console.log props)
    (let [url (.get props.node.data "url")]
      ; (c/tooltip-wrap ; TODO: see if the hover-menu can be used instead of rendering a hidden tooltip with every link.
      ;  (c/tooltip "TODO: ... " url)
      (c/a (merge (js->clj props.attributes)
                  {:href url
                   :target "_blank"
                   :on-click #(.open js/window url "_blank")})
                   ; :on-mouse-over (show-hover-menu props)
                   ; :on-mouse-out (hide-hover-menu props)})
           props.children))))

(defn link
  "Adds link support to editor"
  ([options]
   {:plugins
    (clj->js
     [{:renderNode render-node}])})
  ([]
   (link {})))
