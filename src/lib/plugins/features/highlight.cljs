(ns lib.plugins.features.highlight
  (:require [lib.components.core :as c]
            [lib.plugins.helpers.hotkey :refer [hotkey]]))

(defn transform [change event matches]
  (.toggleMark change "highlight"))

(defn render-mark [props]
  (when (= "highlight" (.. props -mark -type))
    (c/mark
     (js->clj (.. props -attributes))
     (.. props -children))))

(defn highlight
  "Adds highlight support to editor"
  ([options]
   {:plugins
    (clj->js
     [(hotkey
       {:key "cmd+e"
        :transform transform})
      {:renderMark render-mark}])})
  ([]
   (highlight {})))
