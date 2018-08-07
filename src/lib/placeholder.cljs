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
    (c/block-placeholder-bar
    ;  {:content-editable false}
    ;  (c/block-placeholder-button
    ;   {:title "embed a link"}
    ;   (c/icon "youtube"))
    ;  (c/block-placeholder-button
    ;   {:title "upload an image"}
    ;   (c/icon "image"))
    ;  (c/block-placeholder-button
    ;   {:title "make a list"}
    ;   (c/icon "list"))
    ;  (c/block-placeholder-button
    ;   {:title "make a check list"}
    ;   (c/icon "check-square"))
    ;  (c/block-placeholder-button
    ;   {:title "make a code block"}
    ;   (c/icon "code"))
     (c/block-placeholder-button
      {:title "make a blockquote"
       :on-click #(.change props.editor blockquote/transform)}
      (c/icon "chevron-right")))))
