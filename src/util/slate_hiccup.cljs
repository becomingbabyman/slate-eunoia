(ns util.slate-hiccup
  (:require [clojure.spec.alpha :as s]
            [expound.alpha :as expound]
            [util.slate :as slate]))

; high level SlateJS spec:
;  https://docs.slatejs.org/guides/data-model#documents-and-nodes

(def marks #{:bold :italic :strikethrough :highlight :code})

(def inlines #{:link :emoji :mention :tag})

(def blocks #{:paragraph :header1 :header2 :header3
              :image :horizontal-rule :blockquote
              :ordered-list :unordered-list :list-item
              :code-block})

(defn node [types]
  (s/cat :type (s/and keyword? #(types %))
         :attrs (s/? map?)
         :nodes (s/* ::slate)))

(s/def ::slate (s/or :text string?
                     :text number?
                     :mark (node marks)
                     :inline (node inlines)
                     :block (node blocks)
                     :document (node #{:document})))

(declare ast->slate-edn)

(defn slateify-text
  ([node marks _]
   {:object :text
    :leaves [(slateify-text node marks)]})
  ([node marks]
   {:object :leaf
    :text (str node)
    :marks marks})
  ([node]
   (slateify-text node [] nil)))

(def initial-mark-result {:leaves [] :marks []})

(defn slateify-mark
  ([_ result nodes]
   (if (nil? nodes)
     result
     (let [new-result
           (reduce
            (fn [acc node]
              (let [iterim-result (slateify-mark node result)]
                {:leaves (vec (concat (:leaves acc) (:leaves iterim-result)))
                 :marks (vec (concat (:marks acc) (:marks iterim-result)))}))
            initial-mark-result
            nodes)]
       new-result)))
  ([ast result]
   (if (nil? ast)
     result
     (let [[object node] ast
           {:keys [type attrs nodes]} node
           marks (if (= :mark object)
                   (vec (conj (:marks result) {:object :mark
                                               :type type}))
                   (:marks result))
           leaves (if (= :text object)
                    (vec (conj (:leaves result) (slateify-text node (:marks result))))
                    (:leaves result))
           new-result {:leaves leaves :marks marks}]
       (slateify-mark nil new-result nodes))))
  ([ast]
   (let [result (slateify-mark ast initial-mark-result)]
     {:object :text
      :leaves (:leaves result)})))

(defn slateify-block [object node]
  (let [{:keys [type attrs nodes]} node]
    (merge (when (some? object) {:object object})
           (when (some? type) {:type type})
           (when (some? attrs) attrs)
           (when (vector? nodes)
             {:nodes (->> nodes
                          (map ast->slate-edn)
                          (vec))}))))

(defn ast->slate-edn [hiccup-ast]
  (let [[object node] hiccup-ast]
    (case object
      :text (slateify-text node)
      :mark (slateify-mark hiccup-ast) ;; TODO: switch slateify-mark to accepting a node instead of an ast
      ; :inline (slateify-inline node))))
      :block (slateify-block :block node)
      :document {:document (slateify-block nil (dissoc node :type))}
      nil)))

(defn make-ast [hiccup]
  (let [parsed-hiccup (s/conform ::slate hiccup)]
    (if (= ::s/invalid parsed-hiccup)
      (throw (js/Error. (expound/expound ::slate hiccup)))
      parsed-hiccup)))

(defn hiccup->slate
  "Takes a slate-hiccup vector with reagent-like syntax
  and spits out a Slate Value in edn."
  [hiccup]
  (-> hiccup
      (make-ast)
      (ast->slate-edn)
      (slate/edn->slate)))
