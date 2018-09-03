(ns util.core
  (:require [clojure.walk :refer [postwalk prewalk]]))

(defn remove-empty-values
  [m]
  (let [f (fn [[k v]] (when (and v (not (empty? v))) [k v]))]
    (postwalk (fn [x] (if (map? x) (into {} (map f x)) x)) m)))
