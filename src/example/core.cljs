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
     [:paragraph
      [:bold "bold"]
      "   "
      [:italic "italic"]
      "   "
      [:strikethrough "strikethrough"]
      "   "
      [:highlight "highlight"]
      "\n"
      [:bold [:italic [:strikethrough [:highlight "ALL THE MARKS!!!"]]]]]
     [:paragraph]
     [:blockquote "blockquote example block"]])))

(defn on-slate-change [change]
  (reset! slate-value change.value))

(defn root-component []
  [:div {:style {:margin 20}}
   [:h3 "slate-eunoia editor example"]
   [:div {:style {:border "1px solid #ddd"}}
    [eunoia-editor {:style {:padding "10px"}
                    :value @slate-value
                    :on-change on-slate-change}]]])

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
