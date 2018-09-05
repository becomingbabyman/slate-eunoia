(ns dev.core
  (:require [devcards.core :as dc]
            [dev.util :refer-macros [defeditor]]
            [example.core :as example]
            ; [cljss.core :as css]
            ; NOTE: Keep all of these imports.
            ;  They're needed for devcards.
            [dev.a-features.backlog]
            [dev.a-features.completed]
            [dev.a-features.crdt]
            [dev.b-issues.open]
            [dev.b-issues.resolved]
            [dev.b-issues.wontfix]
            [dev.c-gen.crash1]
            [dev.c-gen.exercise]
            [dev.c-gen.slate-hiccup-examples]
            [dev.c-gen.slate-hiccup-roundtrip-example]))

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
