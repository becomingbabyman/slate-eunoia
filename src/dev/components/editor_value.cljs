(ns dev.components.editor-value
  (:require [reagent.core :as r]
            [dev.components.core :as dc]
            [devcards.core :as devcards]))

(defn editor-value []
  (let [state (r/atom {:show :nothing})
        meta (atom {:pre-ref nil})]
    (fn [props]
      (when (:pre-ref @meta) ; TODO: only scroll if change is at the end of the doc
        (.setTimeout js/window
                     #(.scrollIntoView
                       (.querySelector (:pre-ref @meta) ".bottom")
                       (clj->js {:behavior "smooth"
                                 :block "end"}))))
      (if (= :nothing (:show @state))
        (dc/button-bar
         (dc/link-button {:on-click #(swap! state assoc :show :edn)}
                         "show editor value"))
        [:<>
         (dc/spacer)
         (dc/column {:style {:flex 3 :overflow "hidden"}}
                    (dc/row
                     (dc/title "value")
                     (dc/button-bar
                      (dc/link-button {:disabled (= :edn (:show @state))
                                       :on-click #(swap! state assoc :show :edn)}
                                      "edn")
                      (dc/link-button {:disabled (= :json (:show @state))
                                       :on-click #(swap! state assoc :show :json)}
                                      "json")
                      (dc/link-button {:disabled (= :hiccup (:show @state))
                                       :on-click #(swap! state assoc :show :hiccup)}
                                      "hiccup")
                      [:span {:style {:color "#ddd"}} " | "]
                      (dc/link-button {:on-click #(swap! state assoc :show :nothing)}
                                      "hide")))
                    (case (:show @state)
                      :edn [:div {:ref #(swap! meta assoc :pre-ref %)
                                  :style {:max-height "400px"
                                          :overflow "auto"}}
                            (-> (get @props :value)
                                (js/JSON.stringify nil 2)
                                (js/JSON.parse)
                                (js->clj :keywordize-keys true)
                                (devcards/mkdn-pprint-code)
                                (devcards/markdown->react))
                            [:div {:class "bottom"} ""]]
                      :json (dc/pre {:ref #(swap! meta assoc :pre-ref %)}
                              (-> (get @props :value)
                                  (js/JSON.stringify nil 2))
                              [:div {:class "bottom"} ""])
                      :hiccup (dc/pre {:ref #(swap! meta assoc :pre-ref %)}
                                "TODO: make edn->hiccup converter"
                                [:div {:class "bottom"} ""])
                      nil))]))))
