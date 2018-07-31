(ns lib.plugins.features.italic
  (:require [reagent.core :as r]
            [lib.plugins.helpers.auto-replace :refer [auto-replace]]
            [lib.plugins.helpers.hotkey :refer [hotkey]]))

(defn strip-auto-replace-triggers [matched-text]
  (subs matched-text 1))

(defn transform [change event matches]
  (if matches
    (do
      (let [text (first matches.before)
            clean-text (strip-auto-replace-triggers text)]
        (.insertText change clean-text (clj->js ["italic"]))))
    (do
      (.toggleMark change "italic"))))

(defn render-mark [props]
  (when (= "italic" props.mark.type)
    (r/create-element "i"
                      props.attributes
                      props.children)))

(defn italic
  "Adds italic support to editor"
  ([options]
   {:plugins
    (clj->js
     [(auto-replace
       {:trigger #"\*"
        :before #"(\*.+)"
        :transform transform})
      (auto-replace
       {:trigger #"\_"
        :before #"(\_.+)"
        :transform transform})
      (hotkey
       {:key "cmd+i"
        :transform transform})
      {:renderMark render-mark}])})
  ([]
   (italic {})))
