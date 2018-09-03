(ns dev.core
  (:require [devcards.core :as dc]
            [dev.util :refer-macros [defeditor]]
            [example.core :as example]
            ; [cljss.core :as css]
            ; NOTE: Keep all of these imports.
            ;  They're needed for devcards.
            [dev.a-features.done]
            [dev.a-features.slate-to-hiccup]
            [dev.a-features.todo]
            [dev.b-issues.resolved]
            [dev.b-issues.todo]
            [dev.b-issues.wontfix]
            [dev.c-gen.exercise]
            [dev.c-gen.issue1]
            [dev.c-gen.slate-hiccup-examples]))

(defeditor example-editor
           "This is the same hiccup used in the example namespace."
           example/hiccup)

(defn stop []
  (js/console.log "Stopping..."))
  ; (css/remove-styles!))

(defn start []
  (js/console.log "Starting..."))
  ; (dc/start-devcard-ui!))

(defn ^:export init []
  (dc/start-devcard-ui!))
  ; (start))
