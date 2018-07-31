(ns example.core
  (:require [reagent.core :as r]
            [lib.core :as lib]))

(defn root-component []
  [:div
   [:h3 "slate-eunoia editor example"]
   [lib/eunoia-editor]])

(defn mount-on-dom []
  (r/render [root-component]
    (js/document.getElementById "root")))

(defn stop []
  (js/console.log "Stopping..."))

(defn start []
  (js/console.log "Starting...")
  (mount-on-dom))

(defn ^:export init []
  (start))
