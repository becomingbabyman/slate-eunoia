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
(declare slateify-mark)

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

(defn slateify-mark-child-nodes [nodes result]
  (reduce
   (fn [acc node]
     (let [{:keys [leaves marks]} (slateify-mark node result)]
       {:leaves (vec (concat (:leaves acc) leaves))
        :marks (vec (concat (:marks acc) marks))}))
   initial-mark-result
   nodes))

(defn slateify-mark
  "Marks provide text with style. In the AST marks can wrap
  text and other marks. In SlateJS that relationship is inverted
  and a vector of marks can be added to text. This function walks
  each branch of a :mark tree node, storing the marks it sees and
  finally applying them the the child text nodes which are then
  returned."
  ([ast result]
   (if (nil? ast)
     result
     (let [[object node] ast
           {:keys [marks leaves]} result
           {:keys [type attrs nodes]} node
           new-marks (if (= :mark object)
                       (vec (conj marks (merge (if attrs attrs {})
                                               {:object :mark
                                                :type type})))
                       marks)
           new-leaves (if (= :text object)
                        (vec (conj leaves (slateify-text node marks)))
                        leaves)
           new-result {:leaves new-leaves :marks new-marks}]
       (if nodes
         (slateify-mark-child-nodes nodes new-result)
         new-result))))
  ([node]
   (let [ast [:mark node]
         result (slateify-mark ast initial-mark-result)]
     {:object :text
      :leaves (:leaves result)})))

(defn slateify-block
  "Blocks tend to be higher up in the AST and typically
  contain children nodes. They also map directly to nodes
  in the AST so they do not need to be reduced or trickle
  down any values to their children."
  ([object node]
   (let [{:keys [type attrs nodes]} node]
     (merge (when (some? object) {:object object})
            (when (some? type) {:type type})
            (when (some? attrs) attrs)
            (when (vector? nodes)
              {:nodes (vec (map ast->slate-edn nodes))}))))
  ([node]
   (slateify-block :block node)))

(defn ast->slate-edn
  "Consumes a hiccup based AST and transforms each node
  into a SlateJS compatible node."
  [hiccup-ast]
  (let [[object node] hiccup-ast]
    (case object
      :text (slateify-text node)
      :mark (slateify-mark node)
      ; :inline (slateify-inline node))))
      :block (slateify-block node)
      :document {:document (slateify-block nil (dissoc node :type))}
      nil)))

(defn make-ast [hiccup]
  "Conforms hiccup to an AST based on SlateJS documents and
  the element mapping implemented by slate-eunoia."
  (let [parsed-hiccup (s/conform ::slate hiccup)]
    (if (= ::s/invalid parsed-hiccup)
      (throw (js/Error. (expound/expound ::slate hiccup)))
      parsed-hiccup)))

(defn hiccup->slate
  "Takes a slate-hiccup vector with hiccup-like syntax
  and spits out a SlateJS Value ready to be consumed
  by a SlateJS editor. The mapping of node types is
  specific to the elements implemented by slate-eunoia."
  [hiccup]
  (-> hiccup
      (make-ast)
      (ast->slate-edn)
      (slate/edn->slate)))
