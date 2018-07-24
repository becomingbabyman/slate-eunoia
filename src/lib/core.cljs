(ns lib.core
  (:require [reagent.core :as reagent]
            [utils.slate :as slate]
            [lib.plugins.collapse-on-escape :refer [collapse-on-escape]]
            [lib.plugins.trailing-block :refer [trailing-block]]))

(def editor-style {:border "1px solid #ddd" :padding 10 :margin 20})

(def sample-value {:document
                   {:nodes
                    [{:object "block"
                      :type "paragraph"
                      :nodes
                      [{:object "text"
                        :leaves
                        [{:text "editor example block"}]}]}]}})

(def slate-value (reagent/atom (slate/edn->slate sample-value)))

(defn on-slate-change [change]
  (reset! slate-value change.value))

(def plugins (clj->js
              [(collapse-on-escape)
               (trailing-block)]))

(defn eunoia-editor []
  [slate/editor {:style editor-style
                 :value @slate-value
                 :plugins plugins
                 :on-change on-slate-change}])
