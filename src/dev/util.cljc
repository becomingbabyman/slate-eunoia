(ns dev.util)

(defn- editor-card
  ([name doc hiccup options]
   `(devcards.core/defcard-rg
     ~name
     ~doc
     (fn [data-atom# _#]
       [lib.core/eunoia-editor @data-atom#])
     (dev.util/make-editor-data-atom ~hiccup)
     ~options))
  ([name arg1 arg2]
   (if (string? arg1)
     (editor-card name arg1 arg2 {:inspect-data false})
     (editor-card name "" arg1 arg2)))
  ([name hiccup]
   (editor-card name "" hiccup)))

(defmacro defeditor
  "Slate editor devcard that accepts a hiccup slate doc"
  [& args]
  (apply editor-card args))
