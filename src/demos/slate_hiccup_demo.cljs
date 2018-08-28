(ns demos.slate-hiccup-demo
  (:require [util.slate-hiccup :as slate-hiccup]))

; Presented at RC 2018-08-17

(shadow.cljs.devtools.api/nrepl-select :dev)

(def example-html-hiccup-AKA-the-inspiration
  [:html {:lang "en"}
   [:head
    [:title "The HTML example"]]
   [:body {:style {:padding 0}}
    [:div
     "This text will show up in a div"
     [:span {:style {:color "red"}}
      " and some will be red."]]]])

(def example-slate-hiccup-AKA-the-goal
  [:document
   [:paragraph "Some paragraph text "
    [:bold "that's bold "
     [:italic "and italic "
      [:link {:url "https://recurse.com/"}
       "and linked to RC!"]]]]
   [:blockquote "A quote about " 1 "+" 1]
   [:code-block "(println \"Math!\" (+ 1 1))"]])

(slate-hiccup/ast->slate-edn
 (slate-hiccup/make-ast
  [:document
   [:paragraph "Hi"]
   [:paragraph "There"]]))

(slate-hiccup/ast->slate-edn
 (slate-hiccup/make-ast
  [:document
   [:paragraph {:style {:color "red"}}
    "I've got attributes"
    " and" " lots" " of" " children."]]))

(slate-hiccup/ast->slate-edn
 (slate-hiccup/make-ast
  [:document
   [:paragraph {:style {:color "red"}} "Hi"
    [:bold "I'm bold"]]]))

(slate-hiccup/ast->slate-edn
 (slate-hiccup/make-ast
  [:bold "bold text"
   [:italic "bold and italic"
    [:link {:url "https://google.com"}
     "bold and italic and a link"]]]))

(slate-hiccup/ast->slate-edn
 (slate-hiccup/make-ast
  [:document
   [:paragraph "Some paragraph text "
    [:bold "that's bold "
     [:italic "and italic "
      [:link {:url "https://recurse.com/"}
       "and linked to RC!"]]]]
   [:blockquote "A quote about " 1 "+" 1]
   [:code-block "(println \"Math!\" (+ 1 1))"]]))

(->> example-slate-hiccup-AKA-the-goal
     (slate-hiccup/hiccup->slate)
     (.stringify js/JSON)
     (print))

;
;
;
;
;
;
;
;
;
;
;
;
;

(slate-hiccup/ast->slate-edn
 (slate-hiccup/make-ast
  [:header1 "Header 1"]))
