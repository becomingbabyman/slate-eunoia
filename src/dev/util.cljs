(ns dev.util
  (:require [reagent.core :as r]
            [util.slate-hiccup :as sh]
            [dev.components.editor-value :refer [editor-value]]
            [dev.components.core :as dc]
            ; NOTE: Keep these imports.
            ;  They're used in utl.cljc but must be imported here.
            [devcards.core]
            [lib.core]))

(defn make-editor-data [hiccup]
  (let [data (r/atom {})]
    (reset! data
            {:value (sh/hiccup->slate hiccup)
             :on-change #(swap! data assoc :value (.. % -value))})
    data))

(defn render-editor [data]
  (dc/row
   (dc/column {:style {:flex 2}}
              (dc/title "editor")
              (dc/border [lib.core/eunoia-editor @data]))
   [editor-value data]))
