(ns dev.components.editor-value
  (:require [reagent.core :as r]
            [dev.components.core :as dc]
            [cljs.pprint]))

(defn editor-value []
  (let [state (r/atom {:show :nothing})
        meta (atom {:pre-ref nil})]
    (fn [props]
      (when (:pre-ref @meta)
        (aset (:pre-ref @meta) "scrollTop" 1000000))
      (if (= :nothing (:show @state))
        (dc/button-bar
         (dc/link-button {:on-click #(swap! state assoc :show :edn)}
                         "show editor value"))
        [:<>
         (dc/spacer)
         (dc/column {:style {:flex 3}}
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
                      :edn (dc/pre {:ref #(swap! meta assoc :pre-ref %)}
                             (-> (get @props :value)
                                 (js/JSON.stringify nil 2)
                                 (js/JSON.parse)
                                 (js->clj)
                                 (cljs.pprint/pprint)
                                 (with-out-str)))
                      :json (dc/pre {:ref #(swap! meta assoc :pre-ref %)}
                              (-> (get @props :value)
                                  (js/JSON.stringify nil 2)))
                      :hiccup (dc/pre {:ref #(swap! meta assoc :pre-ref %)}
                                "TODO: make edn->hiccup converter")
                      nil))]))))
