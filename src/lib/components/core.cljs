(ns lib.components.core
  (:require [reagent.core :as r]
            ["react" :as react]
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

;; Animations

(defkeyframes fade-in [from-opacity to-opacity]
              {:from {:opacity from-opacity}
               :to   {:opacity to-opacity}})

;; Top Level Component

(defstyled top-level-component :div
           {:color black
            :font-family "-apple-system, BlinkMacSystemFont, San Francisco, sans-serif"
            :font-size "16px"
            :font-weight "400"
            :line-height "26px"
            :-webkit-font-smoothing "antialiased"
            :-webkit-print-color-adjust "exact"
            :-webkit-tap-highlight-color "transparent"
            ; reset css
            "*" {:padding 0
                 :margin 0}
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
            :background-color light-blue
            :padding-top "0.1em"
            :padding-bottom "0.1em"})
(defstyled code :code
           {:background dark-white
            :border (str "1px solid " light-grey)
            :font-family "Hasklig, SourceCodePro, monospace"})
(defstyled code-block :pre
           {:background dark-white
            :border (str "1px solid " light-grey)
            :font-family "Hasklig, SourceCodePro, monospace"
            :padding "5px"
            :border-radius "2px"})

(defstyled a :a
           {:color blue})

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

(defstyled img :img
           {})

;; Common Helpers

(defn icon
  "feather svg icon
  names: https://feathericons.com/
  svg-attrs: https://github.com/feathericons/feather#parameters"
  ([name svg-attrs]
   ; TODO: find a way to render the SVG without wrapping it in a superfluous span
   [:span {:style {:display "flex"}
           :dangerouslySetInnerHTML
           {:__html (.toSvg (aget feather/icons name)
                            (clj->js svg-attrs))}}])
  ([name]
   (icon name {:color black
               :stroke-width 2})))

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
