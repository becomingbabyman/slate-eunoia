(ns util.slate-hiccup
  (:require [clojure.spec.alpha :as s]
            [util.slate :as slate]))

; high level spec https://docs.slatejs.org/guides/data-model#documents-and-nodes

; inspired by https://github.com/reagent-project/reagent/blob/master/src/reagent/impl/component.cljs
; also inspired by https://github.com/ianstormtaylor/slate/blob/master/packages/slate-hyperscript/src/index.js
; mostly by https://gist.github.com/plexus/0f105f590e6bbfa3332e7b4580eeaedb clojure.spec parsing
; and https://gist.github.com/boogie666/8bc464a4b8aa8c3df46b3083edad3333 more hiccup parsing with spec

; TODO: consider switching to use https://github.com/nathanmarz/specter


;;;
;;;

(declare slateify-hiccup)

(def inlines #{:a :emoji :mention :tag})

(def marks #{:b :i :del})

(def blocks #{:p :h1 :h2 :h3
              :img :hr :blockquote
              :ol :ul :li})

(defn node [types]
  (s/cat :type (s/and keyword? #(types %))
         :attrs (s/? map?)
         :nodes (s/* ::slate)))

; TODO: spec nesting rules
;  marks cannot wrap blocks
;  blocks cannot wrap documents...
(s/def ::slate (s/or :text  string?
                     :mark (node marks)
                     :inline (node inlines)
                     :block (node blocks)
                     :document (node #{:document})))

(def example [:document
              [:p]
              [:p "some " [:b [:i "text"]]]
              [:hr]])

(s/conform ::slate example)

(defn slateify-leaf
  ([leaves-acc leaf]
   (println :leaf2 leaf)
   (if (or (string? leaf) (number? leaf))
     (conj leaves-acc {:object :leaf
                       :marks []
                       :text (str leaf)})
     (if (:nodes leaf)
       (reduce slateify-leaf leaves-acc (:nodes leaf))
       leaves-acc)))
  ([leaf]
   (println :leaf leaf)
   {:object :text
    :leaves (reduce slateify-leaf [] [leaf])}))

(defn merge-leaves [nodes]
  (if (:leaves (first nodes))
    [{:object :text
      :leaves (reduce #(concat %1 (:leaves %2)) [] nodes)}]
    nodes))

(defn slateify-node [type node]
  (let [{:keys [nodes]} node]
    (merge (when (map? node) node)
           (when (some? type) {:object type})
           (when (vector? nodes)
             {:nodes (->> nodes
                          (map slateify-hiccup)
                          (merge-leaves)
                          (vec))}))))

(defn slateify-hiccup [hiccup-ast]
  (println :ast hiccup-ast)
  (let [[type node] hiccup-ast]
    (case type
      (:mark :text) (slateify-leaf node)
      :document {:document (slateify-node nil
                                          (dissoc node :type))}
      (slateify-node type node))))

(defn hiccup->slate-edn
  "Takes a slate-hiccup vector with reagent-like syntax
  and spits out a Slate Value in edn."
  [hiccup]
  (let [parsed-hiccup (s/conform ::slate hiccup)]
    (if (= ::s/invalid parsed-hiccup)
      (throw (js/Error. (s/explain-str ::slate hiccup)))
      (slateify-hiccup parsed-hiccup))))

;;;
;;;
;;;

(def ex [:document
         [:p]
         [:p "some " [:b [:i "text"]]]
         [:hr]])

(s/conform ::slate ex)

(hiccup->slate-edn ex)
(hiccup->slate-edn [:document [:p "foo" "bar"]])

(slate/edn->slate (hiccup->slate-edn ex))

; ;
; ; ; ; ; ; ; ; ; ; ; ; ; ; ;
;
[:document
 [:p]
 [:p "some " [:b [:i "text"]]]
 [:hr]]
;
; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;
;
{:document
 {:nodes
  [{:object "block"
    :type "p"}
   {:object "block"
    :type "p"
    :nodes
    [{:object "text"
      :leaves
      [{:object "leaf"
        :text "some "
        :marks []}
       {:object "leaf"
        :text "text"
        :marks
        [{:object "mark"
          :type "bold"}
         {:object "mark"
          :type "italic"}]}]}]}
   {:object "block"}]}}
;     :type "hr"}]}}
;
; ; ; ; ; ; ; ; ; ; ; ; ; ; ;
; ;
