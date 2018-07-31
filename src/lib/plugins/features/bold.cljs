(ns lib.plugins.features.bold
  (:require [reagent.core :as r]
            [lib.plugins.helpers.auto-replace :refer [auto-replace]]
            [lib.plugins.helpers.hotkey :refer [hotkey]]))

(defn strip-auto-replace-triggers [matched-text]
  (subs text 2 (- (count matched-text) 1)))

(defn transform [change event matches]
  (if matches
    (do
      (let [text (first matches.before)
            clean-text (strip-auto-replace-triggers text)]
        (.insertText change clean-text (clj->js ["bold"]))))
    (do
      (.toggleMark change "bold")
      (.collapseToEnd change))))

(defn render-mark [props]
  (when (= "bold" props.mark.type)
    (r/create-element "b"
                      props.attributes
                      props.children)))

(defn bold
  "Adds bold support to editor"
  ([options]
   {:plugins
    (clj->js
     [(auto-replace
       {:trigger #"\*"
        :before #"(\*\*.+\*)"
        :transform transform})
      (auto-replace
       {:trigger #"\_"
        :before #"(\_\_.+\_)"
        :transform transform})
      (hotkey
       {:key "cmd+b"
        :transform transform})
      {:renderMark render-mark}])})
  ([]
   (bold {})))
