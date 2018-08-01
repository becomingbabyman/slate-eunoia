(ns example.core
  (:require [reagent.core :as r]
            [lib.core :as lib]
            [cljss.core :as css]))

(defn root-component []
  [:div {:style {:margin 20}}
   [:h3 "slate-eunoia editor example"]
   [:div {:style {:border "1px solid #ddd"}}
    [lib/eunoia-editor]]])

(defn mount-on-dom []
  (r/render [root-component]
    (js/document.getElementById "root")))

(defn stop []
  (js/console.log "Stopping...")
  (css/remove-styles!))

(defn start []
  (js/console.log "Starting...")
  (mount-on-dom))

(defn ^:export init []
  (start))
