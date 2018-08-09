(ns lib.core
  (:require [reagent.core :as r]
            [util.slate :as slate]
            [lib.components.core :as c]
            [lib.components.hover-menu :refer [hover-menu]]
            [lib.placeholder :refer [render-placeholder]]
            [lib.plugins.features.header :refer [header]]
            [lib.plugins.features.bold :refer [bold]]
            [lib.plugins.features.italic :refer [italic]]
            [lib.plugins.features.strikethrough :refer [strikethrough]]
            [lib.plugins.features.highlight :refer [highlight]]
            [lib.plugins.features.code :refer [code]]
            [lib.plugins.features.code-block :refer [code-block]]
            [lib.plugins.features.blockquote :refer [blockquote]]
            [lib.plugins.collapse-on-escape :refer [collapse-on-escape]]
            [lib.plugins.trailing-block :refer [trailing-block]]
            [lib.plugins.backspace :refer [backspace]]))

(def sample-value-TODO:-rm {:document
                            {:nodes
                             [{:object "block"
                               :type "header1"
                               :nodes
                               [{:object "text"
                                 :leaves
                                 [{:text "Header1"}]}]}
                              {:object "block"
                               :type "header2"
                               :nodes
                               [{:object "text"
                                 :leaves
                                 [{:text "Header2"}]}]}
                              {:object "block"
                               :type "header3"
                               :nodes
                               [{:object "text"
                                 :leaves
                                 [{:text "Header3"}]}]}
                              {:object "block"
                               :type "paragraph"
                               :nodes
                               [{:object "text"
                                 :leaves
                                 [{:text "paragraph example block"}]}]}
                              {:object "block"
                               :type "paragraph"}
                              {:object "block"
                               :type "blockquote"
                               :nodes
                               [{:object "text"
                                 :leaves
                                 [{:text "blockquote example block"}]}]}]}})

(def slate-value (r/atom (slate/edn->slate sample-value-TODO:-rm)))

(defn on-slate-change [change]
  (reset! slate-value change.value))

(def plugins (clj->js
              (concat
               [(backspace)]
               (:plugins (header))
               (:plugins (bold))
               (:plugins (italic))
               (:plugins (strikethrough))
               (:plugins (highlight))
               (:plugins (code))
               (:plugins (code-block))
               (:plugins (blockquote))
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
        {:type :blockquote}]}]}}))

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
