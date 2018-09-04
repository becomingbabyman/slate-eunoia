(ns dev.components.editor-value
  (:require [reagent.core :as r]
            [dev.components.core :as dc]
            [devcards.core :as devcards]
            [util.slate-hiccup :as slate-hiccup]))

(defn editor-value []
  (let [state (r/atom {:show :nothing
                       :scroll false})
        meta (atom {:pre-ref nil})]
    (fn [props]
      (when (and (:scroll @state) (:pre-ref @meta)) ; TODO: only scroll if change is at the end of the doc
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
            [:label {:style {:font-size "14px" :color "#aaa"}
                     :title "auto scrolls to bottom on change"}
             [:input {:type "checkbox" :checked (:scroll @state)
                      :on-click #(swap! state assoc :scroll (not (:scroll @state)))}]
             "auto-scroll"]
            [:span {:style {:color "#ddd"}} " | "]
            (dc/link-button {:disabled (= :hiccup (:show @state))
                             :on-click #(swap! state assoc :show :hiccup)}
                            "hiccup")
            (dc/link-button {:disabled (= :edn (:show @state))
                             :on-click #(swap! state assoc :show :edn)}
                            "edn")
            (dc/link-button {:disabled (= :json (:show @state))
                             :on-click #(swap! state assoc :show :json)}
                            "json")
            [:span {:style {:color "#ddd"}} " | "]
            (dc/link-button {:on-click #(swap! state assoc :show :nothing)}
                            "hide")))
          (when (:show @state)
            [dc/md-code-wrap {:ref #(swap! meta assoc :pre-ref %)}
             (case (:show @state)
               :edn
               (-> (get @props :value)
                   (js/JSON.stringify nil 2)
                   (js/JSON.parse)
                   (js->clj :keywordize-keys true)
                   (devcards/mkdn-pprint-code)
                   (devcards/markdown->react))
               :json
               (as-> (get @props :value) v
                     (js/JSON.stringify v nil 2)
                     (str "```\n" v "\n```")
                     (devcards/markdown->react v))
               :hiccup
               (-> (get @props :value)
                   (slate-hiccup/slate->hiccup)
                   (devcards/mkdn-pprint-code)
                   (devcards/markdown->react)))]))]))))
