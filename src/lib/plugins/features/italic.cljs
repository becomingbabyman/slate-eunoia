(ns lib.plugins.features.italic
  (:require [reagent.core :as r]
            [lib.components.core :as c]
            [lib.plugins.helpers.auto-replace :refer [auto-replace]]
            [lib.plugins.helpers.hotkey :refer [hotkey]]))

(defn strip-auto-replace-triggers [matched-text]
  (subs matched-text 1))

(defn transform [change event matches]
  (if matches
    (let [text (first matches.before)
          clean-text (strip-auto-replace-triggers text)]
      (.insertText change clean-text (clj->js ["italic"])))
    (.toggleMark change "italic")))

(defn render-mark [props]
  (when (= "italic" props.mark.type)
    (c/i
     (js->clj props.attributes)
     props.children)))

(defn italic
  "Adds italic support to editor"
  ([options]
   {:plugins
    (clj->js
     [(auto-replace
       {:trigger #"\_"
        :before #"(\_.+)"
        :transform transform})
      (hotkey
       {:key "cmd+i"
        :transform transform})
      {:renderMark render-mark}])})
  ([]
   (italic {})))
