(ns util.slate-hiccup-test
  (:require [cljs.test :refer-macros (deftest is)]
            [util.slate-hiccup :as slate-hiccup]))

(defn t [hiccup edn]
  (is (= (slate-hiccup/hiccup->slate-edn hiccup)
         edn)))

(deftest a-simple-test
  (t [:document
      [:paragraph "some text"]]
     {:document
      {:nodes
       [{:object "block"
         :type "paragraph"
         :nodes
         [{:object "text"
           :leaves
           [{:text "some text"}]}]}]}}))
