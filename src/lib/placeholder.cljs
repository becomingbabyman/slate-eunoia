(ns lib.placeholder
  (:require [reagent.core :as r]
            [lib.components.core :as c]
            [lib.plugins.features.blockquote :as blockquote]))

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
    (js/console.log props)
    (c/block-placeholder-bar
     {:content-editable false}
     (c/block-placeholder-button
      {:title "TODO: embed a link"}
      (c/icon "youtube"))
     (c/block-placeholder-button
      {:title "TODO: upload an image"}
      (c/icon "image"))
     (c/block-placeholder-button
      {:title "TODO: make a list"}
      (c/icon "list"))
     (c/block-placeholder-button
      {:title "TODO: make a check list"}
      (c/icon "check-square"))
     (c/block-placeholder-button
      {:title "TODO: make a code block"}
      (c/icon "code"))
     (c/block-placeholder-button
      {:title "TODO: REMOVE: make a blockquote"
       :on-click #(.change props.editor blockquote/transform)}
      (c/icon "chevron-right")))))
