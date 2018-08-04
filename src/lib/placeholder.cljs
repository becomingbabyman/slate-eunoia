(ns lib.placeholder
  (:require [reagent.core :as r]
            [lib.components.core :as c]))

(defn render-block-placeholder-bar?
  "Should the bar of icons that shows up in an empty focused paragraph be shown"
  [props]
  (and
   props.isFocused
   (= props.node.object "block")
   (= props.node.type "paragraph")
   (= props.node.text "")))

(defn render-placeholder [props]
  (when (render-block-placeholder-bar? props)
    (c/block-placeholder-bar
     {:content-editable false}
     (c/block-placeholder-button
      (c/icon "youtube"))
     (c/block-placeholder-button
      (c/icon "chevron-right")))))
