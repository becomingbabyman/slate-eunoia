(ns lib.core
  (:require [reagent.core :as r]
            [utils.slate :as slate]
            [lib.components.core :as c]
            [lib.plugins.features.header :refer [header]]
            [lib.plugins.features.bold :refer [bold]]
            [lib.plugins.features.italic :refer [italic]]
            [lib.plugins.features.strikethrough :refer [strikethrough]]
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
               (:plugins (blockquote))
               [(collapse-on-escape)
                (trailing-block)])))

(def schema
  (clj->js
   {:document
    {:nodes
     [{:types
       [:paragraph
        :header1
        :header2
        :header3
        :blockquote]
       :min 1}]}
    :blocks
    {:header1 {:marks [""]}
     :header2 {:marks [""]}
     :header3 {:marks [""]}
     :blockquote {:marks [""]}}}))

(defn eunoia-editor []
  [slate/editor {:class (c/editor-style)
                 :value @slate-value
                 :plugins plugins
                 :schema schema
                 :on-change on-slate-change}])
