(ns lib.plugins.features.header
  (:require [reagent.core :as r]
            [lib.components.core :as c]
            [lib.plugins.helpers.auto-replace :refer [auto-replace]]
            [lib.plugins.helpers.hotkey :refer [hotkey]]))

(defn transform
  ([change n]
   "Contextually Transfrom between header(1-3) and paragraph"
   (let [type (str "header" n)]
     (.setBlocks change
                 (clj->js (if (= type change.value.anchorBlock.type)
                            {:type "paragraph"}
                            {:type type})))))
  ([change event matches editor]
   "Handle auto-replace events"
   (let [hashes (first matches.before)
         n (count hashes)]
     (transform change n)))
  ([n]
   "Functor for generating a change handler with a predefined n level"
   (fn [change]
     (transform change n))))

(defn render-node [props]
  (let [render (fn [h-component]
                 (apply h-component
                        (js->clj props.attributes)
                        props.children))]
    (case props.node.type
      "header1" (render c/h1)
      "header2" (render c/h2)
      "header3" (render c/h3)
      nil)))

(defn header
  "Adds header support to editor"
  ([options]
   {:plugins
    (clj->js
     [(auto-replace
       {:trigger "space"
        :before #"^(\#{1,3})$"
        :transform transform})
      (hotkey
       {:key "cmd+opt+1"
        :transform (transform 1)})
      (hotkey
       {:key "cmd+opt+2"
        :transform (transform 2)})
      (hotkey
       {:key "cmd+opt+3"
        :transform (transform 3)})
      {:renderNode render-node}])})
  ([]
   (header {})))
