(ns lib.plugins.helpers.paste-linkify
  (:require ["slate-paste-linkify" :default PasteLinkify]))

; docs: https://github.com/ianstormtaylor/slate-plugins/tree/master/packages/slate-paste-linkify

(defn paste-linkify [options]
  (PasteLinkify (clj->js options)))
