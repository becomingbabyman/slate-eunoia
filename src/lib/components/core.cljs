(ns lib.components.core
  (:require [reagent.core :as r]
            ["react" :as react]
            [cljss.core :as css :refer-macros [defstyles]]
            [cljss.reagent :refer-macros [defstyled]]))

; make sure js/React is set because cljss.reagent/defstyled expects it
; https://github.com/roman01la/cljss/issues/45
(aset js/window "React" react)

; (css/inject-global
;  {:body
;   {:background "blue"}})

(defstyles editor-style []
           {:padding "10px"})

(defstyled h1 :h1
           {:font-weight "600"})
(defstyled h2 :h2
           {:font-weight "600"})
(defstyled h3 :h3
           {:font-weight "600"})
