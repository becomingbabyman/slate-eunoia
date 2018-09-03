(ns dev.components.core
  (:require [cljss.reagent :refer-macros [defstyled]]))

(defstyled title :h4
           {:font-size "14px"
            :font-weight "400 !important"
            :margin-top "10px"
            :margin-bottom "4px"
            :color "#aaa"
            :letter-spacing "1px"})

(defstyled border :div
           {:border "1px solid #ddd"
            :border-radius "3px"})

(defstyled row :div
           {:display "flex"
            :flex-direction "row"
            :flex 1
            :position "relative"})

(defstyled column :div
           {:display "flex"
            :flex-direction "column"
            :flex 1
            :width 0})

(defstyled spacer :div
           {:width "10px"})

(defstyled md-wrap :div
           {:max-height "400px"
            :overflow "auto"})

(defstyled pre :pre
           {:display "flex"
            :flex-direction "column"
            :padding "5px"
            :background "#f8f8f8"
            :margin 0
            :color "#555"
            :border-radius "3px"
            :font-size "12px"
            :line-height 1.4
            :overflow "auto"
            :max-height "400px"
            :font-family "Hasklig, Fira Code, Iosevka Web, SourceCodePro, monospace"})

(defstyled button-bar :div
           {:position "absolute"
            :top "8px"
            :right 0})

(defstyled link-button :button
           {:background "none"
            :border "none"
            :cursor "pointer"
            :color "#0070e0"
            :opacity "0.6"
            :font-size "14px"
            :padding "2px 4px"
            "&:disabled" {:opacity "1"
                          :cursor "no-drop"}})
