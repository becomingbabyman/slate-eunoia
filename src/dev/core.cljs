(ns dev.core
  (:require [devcards.core :as dc]
            ; [cljss.core :as css]
            ; NOTE: Keep all of these imports.
            ;  They're needed for devcards.
            [dev.features.todo]
            [dev.features.done]
            [dev.issues.todo]
            [dev.issues.resolved]
            [dev.issues.wontfix]
            [dev.gen.exercise]
            [dev.gen.slate-hiccup-examples]))

(defn stop []
  (js/console.log "Stopping..."))
  ; (css/remove-styles!))

(defn start []
  (js/console.log "Starting..."))
  ; (dc/start-devcard-ui!))

(defn ^:export init []
  (dc/start-devcard-ui!))
  ; (start))
