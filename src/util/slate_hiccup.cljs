(ns util.slate-hiccup
  (:require [clojure.spec.alpha :as s]
            [expound.alpha :as expound]
            [util.slate :as slate]))

; high level SlateJS spec:
;  https://docs.slatejs.org/guides/data-model#documents-and-nodes


(def marks #{:bold :italic :strikethrough :highlight})

(def inlines #{:link :emoji :mention :tag})

(def blocks #{:paragraph :header1 :header2 :header3
              :image :horizontal-rule :blockquote
              :ordered-list :unordered-list :list-item})

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
                {:leaves (concat (:leaves acc) (:leaves iterim-result))
                 :marks (concat (:marks acc) (:marks iterim-result))}))
            initial-mark-result
            nodes)]
       new-result)))
  ([ast result]
   (if (nil? ast)
     result
     (let [[object node] ast
           {:keys [type attrs nodes]} node
           marks (if (= :mark object)
                   (conj (:marks result) {:object :mark
                                          :type type})
                   (:marks result))
           leaves (if (= :text object)
                    (conj (:leaves result) (slateify-text node (:marks result)))
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

; ;
; ; ; ; ; ; ; ; ; ; ; ; ; ; ;
;
(def example-hiccup
  [:document
   [:paragraph]
   [:paragraph
    "some "
    [:bold
     [:link {:src "http://npr.org"} "linked"]
     [:italic " text and the number "]]
    3]
   [:horizontal-rule {:color "red"}]])
;
; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;
;
(def example-hiccup-ast
  [:document
   {:type :document
    :nodes [[:block {:type :paragraph}]
            [:block
             {:type :paragraph
              :nodes [[:text "some "]
                      [:mark
                       {:type :bold
                        :nodes [[:inline
                                 {:type :link
                                  :nodes [[:text "linked"]]
                                  :attrs {:src "http://npr.org"}}]
                                [:mark
                                 {:type :italic
                                  :nodes [[:text
                                           " text and the number "]]}]]}]
                      [:text 3]]}]
            [:block {:type :horizontal-rule, :attrs {:color "red"}}]]}])
;
; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;
;
(def example-slate-edn
  {:document
   {:nodes [{:object "block"
             :type "paragraph"}
            {:object "block"
             :type "paragraph"
             :nodes [{:object "text"
                      :leaves [{:object "leaf"
                                :text "some "
                                :marks []}]}
                     {:object "inline"
                      :type "link"
                      :src "http://npr.org"
                      :nodes [{:object "text"
                               :leaves [{:object "leaf"
                                         :text "linked"
                                         :marks [{:object "mark"
                                                  :type "bold"}]}]}]}
                     {:object "text"
                      :leaves [{:object "leaf"
                                :text "text and the number"
                                :marks [{:object "mark"
                                         :type "bold"}
                                        {:object "mark"
                                         :type "italic"}]}]}
                     {:object "text"
                      :leaves [{:object "leaf"
                                :text "3"
                                :marks []}]}]}
            {:object "block"
             :type "horizontal-rule"
             :color "red"}]}})
;
; ; ; ; ; ; ; ; ; ; ; ; ; ; ;
; ;

;;;
;;; REPL Testing
;;;

; (shadow.cljs.devtools.api/nrepl-select :example)

(ast->slate-edn (make-ast [:document [:paragraph "foo" "bar"]]))

(s/conform ::slate example-hiccup)
(= (ast->slate-edn (make-ast example-hiccup))
   example-slate-edn)
(hiccup->slate example-hiccup)

(def example-mark
  [:mark
   {:type :b
    :nodes [[:text
             "just bold"]
            [:mark
             {:type :i
              :nodes [[:text
                       "bold and italic"]]}]
            [:text
             "more bold"]]}])

(slateify-mark example-mark)
