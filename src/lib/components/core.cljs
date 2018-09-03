(ns lib.components.core
  (:require ["react" :as react]
            ["feather-icons" :as feather]
            [cljss.core :as css :refer-macros [defstyles defkeyframes]]
            [cljss.reagent :refer-macros [defstyled]]))

; make sure js/React is set because cljss.reagent/defstyled expects it
; https://github.com/roman01la/cljss/issues/45
(aset js/window "React" react)

;; Variables

; Colors
(def transparent "rgba(0,0,0,0)")
(def pitch-black "#000000")
(def black "#1b2733")
(def white "#ffffff")
(def dark-white "#f7f9fa")
(def light-grey "#e6e8eb")
(def mid-grey "#c1c7cd")
(def grey "#637282")
(def blue "#0070e0")
(def light-blue "#d6e8fa")
(def yellow "#ffc726")
(def light-yellow "#ffe28f")

; Shadows
(def dark-box-shadow "0 0 0 1px #000, 0 8px 16px rgba(27,39,51,0.16)")
(def light-box-shadow "0 0 0 1px rgba(99,114,130,0.16), 0 8px 16px rgba(27,39,51,0.08)")

;; Animations

(defkeyframes fade-in [from-opacity to-opacity]
              {:from {:opacity from-opacity}
               :to   {:opacity to-opacity}})

(defkeyframes slide [from to]
              {:from {:transform (str "translate(" from ")")}
               :to   {:transform (str "translate(" to ")")}})

;; Top Level Component

(defstyled top-level-component :div
           {:color black
            :position "relative"
            :font-family "-apple-system, BlinkMacSystemFont, San Francisco, sans-serif"
            :font-size "16px"
            :font-weight "400"
            :line-height "26px"
            :-webkit-font-smoothing "antialiased"
            :-webkit-print-color-adjust "exact"
            :-webkit-tap-highlight-color "transparent"
            ; reset css
            "*" {:padding 0
                 :margin 0
                 :-webkit-tap-highlight-color "rgba(0,0,0,0)"
                 :-webkit-font-smoothing "antialiased"
                 :-moz-osx-font-smoothing "grayscale"}
            "button" {:background "none"
                      :border "none"
                      :cursor "pointer"
                      :outline "none"}
            "button:active" {:position "relative" :top "1px"}})

;; Core HTML Components

(defstyled b :b
           {:font-weight "700"})
(defstyled i :i
           {})
(defstyled del :del
           {:text-decoration-color pitch-black})
(defstyled mark :mark
           {:color black
            :background light-yellow
            :padding-top "0.1em"
            :padding-bottom "0.1em"})
(defstyled code :code
           {:background dark-white
            :border-top (str "1px solid " light-grey)
            :border-bottom (str "1px solid " light-grey)
            :font-family "Hasklig, Fira Code, Iosevka Web, SourceCodePro, monospace"})
(defstyled pre :pre
           {:background dark-white
            :border (str "1px solid " light-grey)
            :padding "5px"
            :border-radius "2px"
            :overflow "auto"
            :font-family "Hasklig, Fira Code, Iosevka Web, SourceCodePro, monospace"})

(defstyled a :a
           {:color blue
            :cursor "pointer"
            :text-decoration "none"
            "&:hover" {:text-decoration "underline"}})

(defstyled h1 :h1
           {:font-size "30px"
            :line-height "36px"
            :font-weight "600"
            :word-spacing "1px"
            :margin-top "30px"
            :margin-bottom "12px"
            "b" {:font-weight "800"}})
(defstyled h2 :h2
           {:font-size "21px"
            :line-height "28px"
            :font-weight "600"
            :word-spacing "0.5px"
            :margin-top "18px"
            :margin-bottom "6px"
            "b" {:font-weight "800"}})
(defstyled h3 :h3
           {:font-size "16px"
            :line-height "22px"
            :font-weight "700"
            :margin-top "9px"
            :margin-bottom "3px"
            :border-bottom (str "2px solid " dark-white)
            "b" {:font-weight "800"}})

(defstyled blockquote :blockquote
           {:margin "0px"
            :padding-left "23px"
            :border-left (str "1px solid " grey)
            :font-style "italic"})

(defstyled hr :hr
           {:border-top "none"
            :border-bottom (str "1px solid " mid-grey)
            :margin-top "12px"
            :margin-bottom "12px"})

(defstyled img :img
           {})

;; Shared Helpers

(defn icon
  "feather svg icon
  names: https://feathericons.com/
  svg-attrs: https://github.com/feathericons/feather#parameters"
  ([name svg-attrs style]
   ; TODO: MAYBE: find a way to render the SVG without wrapping it in a superfluous span
   [:span {:style (merge {:display "flex"} style)
           :dangerouslySetInnerHTML
           {:__html (.toSvg (aget feather/icons name)
                            (clj->js svg-attrs))}}])
  ([name svg-attrs]
   (icon name svg-attrs {}))
  ([name]
   (icon name {:color black
               :stroke-width 2})))

;; Shared Components

; NOTE: expects a tooltip to be the first child of this element
(defstyled tooltip-wrap :span
           {:position "relative"
            :display "inline-block"
            "&:hover>:first-child" {:opacity 1
                                    :top "-8px"
                                    :left "50%"
                                    :animation (str (slide "-50%, -85%" "-50%, -100%") " 0.3s ease 0.9s")
                                    :transition "opacity 0.3s 0.9s"}})
(defstyled tooltip :span
           {:display "flex"
            :transform "translate(-50%, -100%)"
            :flex-direction "column"
            :align-items "center"
            :justify-content "center"
            :max-width "300px"
            :z-index 1
            :position "absolute"
            :opacity 0
            :top "-10000px"
            :left "-10000px"
            :color white
            :background pitch-black
            :padding "6px 12px"
            :border-radius "3px"
            :white-space "nowrap"
            :animation (str (slide "-50%, -100%" "-50%, -85%") " 0.15s ease 0s")
            :transition "opacity 0.15s 0s, top 0s 0.15s, left 0s 0.15s"
            "&::after" {:content " "
                        :position "absolute"
                        :top "100%"
                        :left "50%"
                        :transform "translateX(-50%)"
                        :width 0
                        :height 0
                        :border-width "5px"
                        :border-style "solid"
                        :border-color (str pitch-black " transparent transparent transparent")}})
(defstyled tooltip-title :span
           {:display "flex"
            :flex-direction "row"
            :align-items "center"
            :justify-content "center"
            :font-size "14px"
            :font-weight 600
            :line-height "16px"})
(defstyled tooltip-sub-title :span
           {:display "flex"
            :flex-direction "row"
            :align-items "center"
            :justify-content "center"
            :font-size "14px"
            :font-weight 200
            :font-style "italic"
            :line-height "16px"
            :margin-top "4px"})

;; Custom Components

(defstyled block-placeholder-bar :span
           {:position "absolute"
            :right 0
            :heith "100%"
            :display "flex"
            :align-items "center"
            :justify-content "center"})
(defstyled block-placeholder-button :button
           {:padding-left "5px"
            :padding-right "5px"
            :height "100%"
            :opacity 0.3
            :animation (str (fade-in 0 0.3) " 0.3s ease")
            :transition "opacity 0.2s"
            "&:hover" {:opacity 0.6}})
