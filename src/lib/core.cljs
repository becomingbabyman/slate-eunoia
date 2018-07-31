(ns lib.core
  (:require [reagent.core :as r]
            [utils.slate :as slate]
            [lib.plugins.features.blockquote :refer [blockquote]]
            [lib.plugins.collapse-on-escape :refer [collapse-on-escape]]
            [lib.plugins.trailing-block :refer [trailing-block]]))

(def editor-style {:border "1px solid #ddd" :padding 10 :margin 20})

(def sample-value-TODO:-rm {:document
                            {:nodes
                             [{:object "block"
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
               (:plugins (blockquote))
               [(collapse-on-escape)
                (trailing-block)])))

(def schema
  (clj->js
   {:document
    {:nodes
     [{:types
       [:paragraph
        :blockquote]
       :min 1}]}
    :blocks
    {:blockquote {:marks [""]}}}))

(defn eunoia-editor []
  [slate/editor {:style editor-style
                 :value @slate-value
                 :plugins plugins
                 :schema schema
                 :on-change on-slate-change}])
