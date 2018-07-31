(ns lib.plugins.helpers.auto-replace
  (:require ["slate-auto-replace" :default AutoReplace]))

; docs: https://github.com/ianstormtaylor/slate-plugins/tree/master/packages/slate-auto-replace

(defn auto-replace [options]
  (AutoReplace (clj->js options)))
