(ns example.core
  (:require [reagent.core :as r]
            [util.slate-hiccup :refer [hiccup->slate]]
            [clojure.string :as string]
            [lib.core :refer [eunoia-editor]]
            [cljss.core :as css]))

(def slate-value
  (r/atom
   (hiccup->slate
    [:document
     [:header1 "Header 1"]
     [:header2 "Header 2"]
     [:header3 "Header 3"]
     [:paragraph
      (string/replace
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam sagittis elit augue, vitae tempus elit accumsan ac.
        Cras tempus metus mi, ut laoreet nisl aliquam sit amet. Nullam
        in purus id felis vulputate efficitur. Vestibulum eget libero
        lectus. Maecenas vestibulum sapien at dolor lobortis varius.
        Aenean consequat augue ipsum, vitae blandit lorem euismod vel.
        Cras eu porta purus, sit amet hendrerit mi."
       #"\s\s" "")]
     [:paragraph]
     [:divider]
     [:paragraph]
     [:paragraph
      [:paragraph
       [:blockquote
        [:code-block
         [:blockquote
          [:code-block "I'm nested way too deep #YOLO #FIXME"]]]]]]
     [:paragraph]
     [:blockquote
      "blockquote with a "
      [:link {:url "https://google.com"} "link"]]
     [:paragraph]
     [:paragraph
      [:bold "bold " [:link {:url "https://google.com"} "link"]]
      "   "
      [:italic "italic " [:link {:url "https://google.com"} "link"]]
      "   "
      [:code " code " [:link {:url "https://google.com"} "link"]]
      "   "
      [:strikethrough " strikethrough " [:link {:url "https://google.com"} "link"]]
      "   "
      [:highlight " highlight " [:link {:url "https://google.com"} "link"]]
      "\n\n"
      [:bold [:italic [:strikethrough [:highlight [:code "all the marks!!!"
                                                   "   "
                                                   [:link {:url "https://google.com"} "and a link"]]]]]]]
     [:paragraph]
     [:code-block "(def slate-value
  (r/atom
   (hiccup->slate
    [:document
     [:header1 \"Header 1\"]
     [:header2 \"Header 2\"]
     [:header3 \"Header 3\"]
     [:paragraph
      (string/replace
       \"Lorem ipsum dol..."]
     [:paragraph]])))

(defn on-slate-change [change]
  (reset! slate-value (.. change -value)))

(def show-json? (r/atom false))

(defn root-component []
  [:div {:style {:margin 20}}
   [:h3 "slate-eunoia editor example"]
   [:div {:style {:float "right" :margin-top "-38px"}}
    (if @show-json?
      [:button {:on-click #(reset! show-json? false)} "Show Editor"]
      [:button {:on-click #(reset! show-json? true)} "Show JSON"])]
   [:div {:style {:border "1px solid #ddd"}}
    (if @show-json?
      [:div>pre (.stringify js/JSON @slate-value nil 2)]
      [eunoia-editor {:style {:padding "10px"}
                      :value @slate-value
                      :on-change on-slate-change}])]])

(defn mount-on-dom []
  (r/render [root-component]
    (js/document.getElementById "root")))

(defn stop []
  (js/console.log "Stopping...")
  (css/remove-styles!))

(defn start []
  (js/console.log "Starting...")
  (mount-on-dom))

(defn ^:export init []
  (start))
