(ns dev.util
  (:require [reagent.core :as r]
            [devcards.core :as dc :refer-macros [defcard defcard-rg deftest]]
            [util.slate-hiccup :as sh]
            [cljss.reagent :refer-macros [defstyled]]
            [cljs.pprint]
            [lib.core]))

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
            :overflow "hidden"})

(defstyled spacer :div
           {:width "10px"})

(defstyled pre :pre
           {:display "flex"
            :padding "5px"
            :background "#f8f8f8"
            :margin 0
            :color "#555"
            :border-radius "3px"
            :font-size "12px"
            :overflow "auto"})

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

(defn make-editor-data [hiccup]
  (let [data (r/atom {})]
    (reset! data
            {:value (sh/hiccup->slate hiccup)
             :on-change #(swap! data assoc :value (.. % -value))})
    data))

(defn editor-value []
  (let [state (r/atom :hide)]
    (fn [props]
      (if (= :hide @state)
        (button-bar
         (link-button {:on-click #(reset! state :edn)}
                      "show editor value"))
        [:<>
         (spacer)
         (column
          (row
           (title "value")
           (button-bar
            (link-button {:disabled (= :edn @state)  :on-click #(reset! state :edn)}
                         "edn")
            (link-button {:disabled (= :json @state) :on-click #(reset! state :json)}
                         "json")
            [:span {:style {:color "#ddd"}} " | "]
            (link-button {:on-click #(reset! state :hide)}
                         "hide")))
          (case @state
            :edn (pre (-> (get @props :value)
                          (js/JSON.stringify nil 2)
                          (js/JSON.parse)
                          (js->clj)
                          (cljs.pprint/pprint)
                          (with-out-str)))
            :json (pre (-> (get @props :value)
                           (js/JSON.stringify nil 2)))
            nil))]))))

(defn render-editor [data]
  (row
   (column
    (title "editor")
    (border [lib.core/eunoia-editor @data]))
   [editor-value data]))
