(ns lib.plugins.helpers.unwrap-nested-block)

(defn unwrap-nested-block [{:keys [type]}]
  "Disables block nesting for a specific block type.
  Unwrapping it from all parent blocks until it hits
  the top level document object."
  {:schema
   (clj->js
    {:blocks
     {type
      {:parent {:object "document"}
       :normalize
       (fn [change error]
         (when (= "parent_object_invalid" (.. error -code))
           (.unwrapBlockByKey change
                              (.. error -node -key)
                              (.. error -parent -type))))}}})})
