(ns util.slate-hiccup
  (:require [clojure.spec.alpha :as s]
            [expound.alpha :as expound]
            [util.slate :as slate]))

; high level SlateJS spec:
;  https://docs.slatejs.org/guides/data-model#documents-and-nodes

(def marks #{:bold :italic :strikethrough :highlight :code})

(def inlines #{:link}) ;:emoji :mention :tag})

(def blocks #{:paragraph :header1 :header2 :header3
              :blockquote :code-block})
              ; :ordered-list :unordered-list :list-item :image :divider})

; (s/def ::attrs (s/map-of keyword? any? :gen-max 2))
(s/def ::attrs (s/map-of #{:url} string? :gen-max 2))

(s/def ::mark (s/cat :type marks
                     :attrs (s/? ::attrs)
                     :nodes (s/* (s/or :text string?
                                       :text number?
                                       :mark ::mark
                                       :inline ::inline))))

(s/def ::inline (s/cat :type inlines
                       :attrs (s/? ::attrs)
                       :nodes (s/* (s/or :text string?
                                         :text number?
                                         :mark ::mark
                                         :inline ::inline))))

(s/def ::block (s/cat :type blocks
                      :attrs (s/? ::attrs)
                      :nodes (s/* (s/or :text string?
                                        :text number?
                                        :mark ::mark
                                        :inline ::inline
                                        :block ::block))))

(s/def ::document (s/or :document (s/cat :type #{:document}
                                         :attrs (s/? ::attrs)
                                         :nodes (s/+ (s/or :block ::block)))))

(declare ast->slate-edn)
(declare slateify-mark)
(declare slateify-node)

(defn slateify-text
  ([node marks]
   {:object :text
    :leaves [{:object :leaf
              :text (str node)
              :marks marks}]})
  ([node]
   (slateify-text node [])))

(def initial-mark-result {:nodes [] :marks []})

(defn slateify-mark-child-nodes [nodes result]
  (reduce
   (fn [acc node]
     (let [{:keys [nodes marks]} (slateify-mark node result)]
       {:nodes (vec (concat (:nodes acc) nodes))
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
           {:keys [marks nodes]} result
           {:keys [type attrs]} node
           new-marks (if (= :mark object)
                       (vec (conj marks (merge (if attrs {:data attrs} {})
                                               {:object :mark
                                                :type type})))
                       marks)
           new-nodes (case object ; this supports inline and text elements wrappped by marks, but NOT blocks
                       :inline (vec (conj nodes (slateify-node :inline node
                                                               #(:nodes (slateify-mark-child-nodes % result)))))
                       :text (vec (conj nodes (slateify-text node marks)))
                       nodes)
           new-result {:nodes new-nodes :marks new-marks}]
       (if (and (:nodes node) (not= :inline object))
         (slateify-mark-child-nodes (:nodes node) new-result)
         new-result))))
  ([node]
   (let [ast [:mark node]
         result (slateify-mark ast initial-mark-result)]
     ; TODO: returning this
     {:object :inline
      :type :mark-wrapper ; NOTE: this type does not exist and is purely to make the output more human readable
      :nodes (:nodes result)})))

(defn slateify-node
  "Nodes tend to be higher up in the AST and typically
  contain children nodes. They can be documents, blocks
  or inlines. They also map directly to nodes in the AST
  so they 'normaly' do not need to be reduced or trickle
  down any values to their children. But when they do there
  is an arity to pass in a custom child-nodes-transformation-fn
  to recur on."
  ([object node child-nodes-transformation-fn]
   (let [{:keys [type attrs nodes]} node]
     (merge (when (some? object) {:object object})
            (when (some? type) {:type type})
            (when (some? attrs) {:data attrs})
            (when (vector? nodes)
              {:nodes (child-nodes-transformation-fn nodes)}))))
  ([object node]
   (slateify-node object node #(vec (map ast->slate-edn %)))))

(defn ast->slate-edn
  "Consumes a hiccup based AST and transforms each node
  into a SlateJS compatible node."
  [hiccup-ast]
  (let [[object node] hiccup-ast]
    (case object
      :text (slateify-text node)
      :mark (slateify-mark node)
      :inline (slateify-node :inline node)
      :block (slateify-node :block node)
      :document {:document (slateify-node nil (dissoc node :type))})))

(defn make-ast [hiccup]
  "Conforms hiccup to an AST based on SlateJS documents and
  the element mapping implemented by slate-eunoia."
  (let [parsed-hiccup (s/conform ::document hiccup)]
    (if (= ::s/invalid parsed-hiccup)
      (throw (js/Error. (expound/expound ::document hiccup)))
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
