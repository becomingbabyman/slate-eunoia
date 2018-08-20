(ns lib.plugins.features.bold
  (:require [lib.components.core :as c]
            [lib.plugins.helpers.auto-replace :refer [auto-replace]]
            [lib.plugins.helpers.hotkey :refer [hotkey]]))

(defn strip-auto-replace-triggers [matched-text]
  (subs matched-text 2 (- (count matched-text) 1)))

(defn transform [change event matches]
  (if matches
    (let [text (first (.. matches -before))
          clean-text (strip-auto-replace-triggers text)]
      (.insertText change clean-text (clj->js ["bold"])))
    (.toggleMark change "bold")))

(defn render-mark [props]
  (when (= "bold" (.. props -mark -type))
    (c/b
     (js->clj (.. props -attributes))
     (.. props -children))))

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
