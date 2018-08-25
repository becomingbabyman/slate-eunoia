(ns dev.util)

(defn- editor-card
  ([card-name doc hiccup options]
   `(devcards.core/defcard-rg
     ~card-name
     ~doc
     (fn [data# _#] (dev.util/render-editor data#))
     (dev.util/make-editor-data ~hiccup)
     ~options))
  ([card-name arg1 arg2]
   (if (string? arg1)
     (editor-card card-name arg1 arg2 {:inspect-data false})
     (editor-card card-name "" arg1 arg2)))
  ([card-name hiccup]
   (editor-card card-name "" hiccup)))

(defmacro defeditor
  "Slate editor devcard that accepts a hiccup slate doc"
  [& args]
  (apply editor-card args))
