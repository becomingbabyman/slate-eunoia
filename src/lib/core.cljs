(ns lib.core
  (:require [reagent.core :as r]
            [util.slate :as slate]
            [util.slate-hiccup :refer [hiccup->slate]]
            [lib.components.core :as c]
            [lib.components.hover-menu :refer [hover-menu]]
            [lib.placeholder :refer [render-placeholder]]
            [lib.plugins.features.header :refer [header]]
            [lib.plugins.features.link :refer [link]]
            [lib.plugins.features.bold :refer [bold]]
            [lib.plugins.features.italic :refer [italic]]
            [lib.plugins.features.strikethrough :refer [strikethrough]]
            [lib.plugins.features.highlight :refer [highlight]]
            [lib.plugins.features.code :refer [code]]
            [lib.plugins.features.code-block :refer [code-block]]
            [lib.plugins.features.blockquote :refer [blockquote]]
            [lib.plugins.features.divider :refer [divider]]
            [lib.plugins.collapse-on-escape :refer [collapse-on-escape]]
            [lib.plugins.trailing-block :refer [trailing-block]]
            [lib.plugins.backspace :refer [backspace]]))

(def slate-value (r/atom (hiccup->slate [:document [:paragraph ""]])))

(defn on-slate-change [change]
  (reset! slate-value (.. change -value)))

(def plugins (clj->js
              (concat
               [(backspace)]
               (:plugins (header))
               (:plugins (link))
               (:plugins (bold))
               (:plugins (italic))
               (:plugins (strikethrough))
               (:plugins (highlight))
               (:plugins (code))
               (:plugins (code-block))
               (:plugins (blockquote))
               ; (:plugins (divider)) ; TODO: FIX: this is too buggy to use. Often crashes editor when deleted
               [(collapse-on-escape)
                (trailing-block)])))

(def schema
  (clj->js
   {:document
    {:nodes
     [{:min 1
       :match
       [{:type :paragraph}
        {:type :header1}
        {:type :header2}
        {:type :header3}
        {:type :code-block}
        {:type :blockquote}
        {:type :divider}]}]}}))

(defn eunoia-editor
  ([passed-in-props]
   (let [initial-props {:value @slate-value
                        :placeholder "Write something..."
                        :plugins plugins
                        :schema schema
                        :render-placeholder render-placeholder
                        :on-change on-slate-change}
         editor-props (merge initial-props passed-in-props)
         hover-menu-props (select-keys editor-props [:value :on-change])]
     (c/top-level-component
      [slate/editor editor-props]
      [hover-menu hover-menu-props])))
  ([] (eunoia-editor {})))
