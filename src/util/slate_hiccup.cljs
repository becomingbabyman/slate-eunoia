(ns util.slate-hiccup
  (:require [clojure.spec.alpha :as s]))
            ; [util.slate :as slate]))

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

; TODO: reduce nested text, inline, mark nodes into
;  flat vectors of leaves with all syntax
; TODO: spec nesting rules
;  texts cannot wrap inlines or marks
;  only documents and other blocks can wrap blocks
(s/def ::slate (s/or :text string?
                     :text number?
                     :mark (node marks)
                     :inline (node inlines)
                     :block (node blocks)
                     :document (node #{:document})))

(s/conform ::slate example)

(defmulti slate first)

(defmethod slate :document [[_ data]]
  {:document (slate [:node data])})

(defmethod slate :node [[_ {:keys [type attrs nodes]}]]
  {:nodes (vec (map slate nodes))})

(defmethod slate :block [[_ data]]
  (slate [:node data]))

(defmethod slate :inline [[_ data]]
  (slate [:node data]))

(defmethod slate :mark [[_ data]]
  (slate [:node data]))

(defmethod slate :text [[_ text]]
  (str text))

(def example [:document
              [:p]
              [:p
               "some "
               [:a {:src "http://npr.org"} "linked"]
               [:b [:i " text and the number "]]
               3]
              [:hr {:color "red"}]])
(s/conform ::slate example)
(slate (s/conform ::slate example))

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
      (:mark :text :inline) (slateify-leaf node)
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
(hiccup->slate-edn example)
(hiccup->slate-edn [:document [:p "foo" "bar"]])

; (slate/edn->slate (hiccup->slate-edn ex))

; ;
; ; ; ; ; ; ; ; ; ; ; ; ; ; ;
;
[:document
 [:p]
 [:p
  "some "
  [:a {:src "http://npr.org"} "linked"]
  [:b [:i " text and the number "]]
  3]
 [:hr {:color "red"}]]
;
; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;
;
{:document
 {:nodes [{:object "block"
           :type "p"}
          {:object "block"
           :type "p"
           :nodes [{:object "text"
                    :leaves [{:object "leaf"
                              :text "some "
                              :marks []}]}
                   {:object "inline"
                    :type "a"
                    :src "http://npr.org"
                    :nodes [{:object "text"
                             :leaves [{:object "leaf"
                                       :text "linked"
                                       :marks []}]}]}
                   {:object "text"
                    :leaves [{:object "leaf"
                              :text "text and the number"
                              :marks [{:object "mark"
                                       :type "b"}
                                      {:object "mark"
                                       :type "i"}]}]}
                   {:object "text"
                    :leaves [{:object "leaf"
                              :text "3"
                              :marks []}]}]}
          {:object "block"
           :type "hr"
           :color "red"}]}}
;
; ; ; ; ; ; ; ; ; ; ; ; ; ; ;
; ;
