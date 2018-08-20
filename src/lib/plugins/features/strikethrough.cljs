(ns lib.plugins.features.strikethrough
  (:require [lib.components.core :as c]
            [lib.plugins.helpers.auto-replace :refer [auto-replace]]
            [lib.plugins.helpers.hotkey :refer [hotkey]]))

(defn strip-auto-replace-triggers [matched-text]
  (subs matched-text 2 (- (count matched-text) 1)))

(defn transform [change event matches]
  (if matches
    (let [text (first (.. matches -before))
          clean-text (strip-auto-replace-triggers text)]
      (.insertText change clean-text (clj->js ["strikethrough"])))
    (.toggleMark change "strikethrough")))

(defn render-mark [props]
  (when (= "strikethrough" (.. props -mark -type))
    (c/del
     (js->clj (.. props -attributes))
     (.. props -children))))

(defn strikethrough
  "Adds strikethrough support to editor"
  ([options]
   {:plugins
    (clj->js
     [(auto-replace
       {:trigger #"\~"
        :before #"(\~\~.+\~)"
        :transform transform})
      (hotkey
       {:key "cmd+opt+s"
        :transform transform})
      {:renderMark render-mark}])})
  ([]
   (strikethrough {})))
