(ns dev.components.editor-value
  (:require [reagent.core :as r]
            [dev.components.core :as dc]
            [devcards.core :as devcards]
            [util.slate-hiccup :as slate-hiccup]))

(defn editor-value []
  (let [state (r/atom {:show :nothing})
        meta (atom {:pre-ref nil})]
    (fn [props]
      (when (:pre-ref @meta) ; TODO: only scroll if change is at the end of the doc
        (.setTimeout js/window
                     #(.scrollTo (:pre-ref @meta) 0 1000000)))
      (if (= :nothing (:show @state))
        (dc/button-bar
         (dc/link-button {:on-click #(swap! state assoc :show :hiccup)}
                         "show editor value"))
        [:<>
         (dc/spacer)
         (dc/column
          {:style {:flex 3}}
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
            :edn [dc/md-code-wrap {:ref #(swap! meta assoc :pre-ref %)}
                  (-> (get @props :value)
                      (js/JSON.stringify nil 2)
                      (js/JSON.parse)
                      (js->clj :keywordize-keys true)
                      (devcards/mkdn-pprint-code)
                      (devcards/markdown->react))
                  [:div {:class "bottom"} ""]]
            :json [dc/md-code-wrap {:ref #(swap! meta assoc :pre-ref %)}
                   (as-> (get @props :value) v
                         (js/JSON.stringify v nil 2)
                         (str "```\n" v "\n```")
                         (devcards/markdown->react v))
                   [:div {:class "bottom"} ""]]
            :hiccup [dc/md-code-wrap {:ref #(swap! meta assoc :pre-ref %)}
                     (-> (get @props :value)
                         (slate-hiccup/slate->hiccup)
                         (devcards/mkdn-pprint-code)
                         (devcards/markdown->react))
                     [:div {:class "bottom"} ""]]
            nil))]))))
