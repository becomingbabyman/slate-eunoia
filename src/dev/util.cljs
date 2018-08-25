(ns dev.util
  (:require [reagent.core :as r]
            [devcards.core :as dc :refer-macros [defcard defcard-rg deftest]]
            [util.slate-hiccup :as sh :refer [hiccup->slate]]
            [lib.core]))

(defn make-editor-data-atom [hiccup]
  (let [data (r/atom {})]
    (reset! data
            {:value (hiccup->slate hiccup)
             :on-change #(swap! data assoc :value (.. % -value))
             :style {:border "1px dotted #ddd"
                     :border-radius "3px"}})
    data))
