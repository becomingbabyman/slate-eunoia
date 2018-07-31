(ns lib.plugins.helpers.hotkey
  (:require ["is-hotkey" :refer (isCodeHotkey)]))

; references: https://docs.slatejs.org/guides/plugins#helper-plugins

(defn hotkey [{:keys [key transform]}]
  "Takes a key combo and applies the transform function with a change param to the selection"
  (let [key? (isCodeHotkey key)] ; NOTE: this curries the function so it is only parsed once, improving perf
    {:onKeyDown
     (fn [event change editor]
       (when (key? event)
         (transform change)))}))
