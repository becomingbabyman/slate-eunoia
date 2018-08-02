(ns lib.components.core
  (:require [reagent.core :as r]
            ["react" :as react]
            [cljss.core :as css :refer-macros [defstyles]]
            [cljss.reagent :refer-macros [defstyled]]))

; make sure js/React is set because cljss.reagent/defstyled expects it
; https://github.com/roman01la/cljss/issues/45
(aset js/window "React" react)

(def transparent "rgba(0,0,0,0)")
(def pitch-black "#1b2733")
(def black "#1b2733")
(def blue "#0070e0")
(def light-blue "#d6e8fa")
(def grey "#637282")
(def mid-grey "#e6e8eb")
(def light-grey "#f7f9fa")

(defstyles editor-style []
           {:padding "10px"
            :color black
            :font-family "-apple-system, BlinkMacSystemFont, San Francisco, sans-serif"
            :font-size "16px"
            :font-weight "400"
            :line-height "26px"
            :-webkit-font-smoothing "antialiased"
            :-webkit-print-color-adjust "exact"
            :-webkit-tap-highlight-color transparent})

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
            :border-bottom (str "2px solid " light-grey)
            "b" {:font-weight "800"}})

(defstyled blockquote :blockquote
           {:margin "0px"
            :padding-left "23px"
            :border-left (str "1px solid " grey)})

(defstyled img :img
           {})
