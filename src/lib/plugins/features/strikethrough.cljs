(ns lib.plugins.features.strikethrough
  (:require [reagent.core :as r]
            [lib.plugins.helpers.auto-replace :refer [auto-replace]]
            [lib.plugins.helpers.hotkey :refer [hotkey]]))

(defn strip-auto-replace-triggers [matched-text]
  (subs matched-text 2 (- (count matched-text) 1)))

(defn transform [change event matches]
  (if matches
    (let [text (first matches.before)
          clean-text (strip-auto-replace-triggers text)]
      (.insertText change clean-text (clj->js ["strikethrough"])))
    (.toggleMark change "strikethrough")))

(defn render-mark [props]
  (when (= "strikethrough" props.mark.type)
    (r/create-element "del"
                      props.attributes
                      props.children)))

(defn strikethrough
  "Adds strikethrough support to editor"
  ([options]
   {:plugins
    (clj->js
     [(auto-replace
       {:trigger #"\~"
        :before #"(\~\~.+\~)"
        :transform transform})
      (auto-replace
       {:trigger "-"
        :before #"(--.+-)"
        :transform transform})
      (hotkey
       {:key "cmd+opt+s"
        :transform transform})
      {:renderMark render-mark}])})
  ([]
   (strikethrough {})))
