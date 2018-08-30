(ns dev.core
  (:require [devcards.core :as dc]
            ; [cljss.core :as css]
            ; NOTE: Keep all of these imports.
            ;  They're needed for devcards.
            [dev.features.done]
            [dev.features.todo]
            [dev.gen.exercise]
            [dev.gen.issue1]
            [dev.gen.slate-hiccup-examples]
            [dev.issues.resolved]
            [dev.issues.todo]
            [dev.issues.wontfix]))

(defn stop []
  (js/console.log "Stopping..."))
  ; (css/remove-styles!))

(defn start []
  (js/console.log "Starting..."))
  ; (dc/start-devcard-ui!))

(defn ^:export init []
  (dc/start-devcard-ui!))
  ; (start))
