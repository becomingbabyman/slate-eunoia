(ns lib.components.core
  (:require [reagent.core :as r]
            ["react" :as react]
            [cljss.core :as css :refer-macros [defstyles]]
            [cljss.reagent :refer-macros [defstyled]]))

; make sure js/React is set because cljss.reagent/defstyled expects it
; https://github.com/roman01la/cljss/issues/45
(aset js/window "React" react)

(def transparent "rgba(0,0,0,0)")
(def black "#1b2733")
(def blue "#0070e0")
(def grey "#637282")
(def mid-grey "#e6e8eb")
(def light-grey "#f7f9fa")

(defstyles editor-style []
           {:padding "10px"
            :color black
            :font-family "-apple-system, BlinkMacSystemFont, San Francisco, sans-serif"
            :-webkit-font-smoothing "antialiased"
            :-webkit-print-color-adjust "exact"
            :-webkit-tap-highlight-color transparent})

(defstyled h1 :h1
           {:font-size "30px"
            :line-height "36px"
            :font-weight "600"
            :word-spacing "1px"
            :margin-top "30px"
            :margin-bottom "12px"})
(defstyled h2 :h2
           {:font-size "21px"
            :line-height "28px"
            :font-weight "600"
            :word-spacing "0.5px"
            :margin-top "18px"
            :margin-bottom "6px"})
(defstyled h3 :h3
           {:font-size "14px"
            :line-height "22px"
            :font-weight "700"
            :margin-top "0px"
            :margin-bottom "0px"})
