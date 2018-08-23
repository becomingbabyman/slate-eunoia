(ns lib.plugins.features.link
  (:require [lib.components.core :as c]
            [reagent.core :as r]
            [cljss.reagent :refer-macros [defstyled]]
            [lib.plugins.helpers.paste-linkify :refer [paste-linkify]]
            [lib.plugins.helpers.auto-replace :refer [auto-replace]]))

(defstyled link-tooltip-wrap :span
           {:position "relative"
            :display "inline-block"
            "&:hover:not(:focus-within)>:first-child"
            {:opacity 1
             :top "0px"
             :left "50%"
             :animation (str (c/slide "-50%, -85%" "-50%, -100%") " 0.3s ease 0.2s")
             :transition "opacity 0.3s 0.2s"}
            "&:focus-within>:first-child"
            {:opacity 1
             :top "0px"
             :left "50%"}})
(defstyled link-tooltip :span
           {:display "flex"
            :flex-direction "row"
            :position "absolute"
            :top "-10000px"
            :left "-10000px"
            :opacity 0
            :transform "translate(-50%, -100%)"
            :z-index 1
            :background c/white
            :box-shadow c/light-box-shadow
            :border-radius "4px"
            :white-space "nowrap"
            :transition "opacity 0.15s 0.1s, top 0s 1.25s, left 0s 1.25s"
            "&:after" {:content ""
                       :width "100%"
                       :height "10px"
                       :background "transparent"
                       :position "absolute"
                       :left 0
                       :bottom 0
                       :transform "translateY(100%)"}})
(defstyled input :input
           {:font-size "14px"
            :outline "none"
            :padding-top "10px"
            :padding-left "12px"
            :padding-bottom "11px"
            :box-sizing "border-box"
            :width "300px"
            :margin-right "38px"
            :font-weight "400"
            :height "100%"
            :line-height "18px"
            :vertical-align "top"
            :background-color "transparent"
            :border 0
            :color c/blue
            :transition "width 100ms ease-in"})
(defstyled x-button :button
           {:position "absolute !important"
            :top 0
            :right 0
            :color c/black
            :background "#e6e8eb !important"
            :font-size "20px"
            :line-height "20px"
            :font-weight "500"
            :height "38px"
            :width "38px"
            :padding "9px"
            "&:hover" {:background "#c1c7cd !important"}
            "&:active" {:left "auto !important"}})

(defn js-tooltip
  "Uses JS to only render the tooltip when hovered or focused."
  []
  (let [focused? (r/atom false)
        hovered? (r/atom false)
        timeout (r/atom nil)
        style (r/atom {})
        ref (r/atom nil)
        after-timeout
        (fn [ms callback]
          (fn []
            (.clearTimeout js/window @timeout)
            (reset! timeout (.setTimeout js/window callback ms))))]
    (fn [props child]
      (link-tooltip-wrap
       (merge (dissoc props :tooltip)
              {:on-focus (after-timeout 200 #(reset! focused? true))
               :on-blur (after-timeout 250 #(reset! focused? false))
               :on-mouse-over (after-timeout 200 #(reset! hovered? true))
               :on-mouse-out (after-timeout 250 #(reset! hovered? false))
               :on-key-press #(when (= "Enter" (.. % -key))
                                (reset! focused? false)
                                (reset! hovered? false))})
       (if (or @focused? @hovered?)
         (link-tooltip {:style @style
                        :ref (fn [comp]
                               (reset! ref comp)
                               (when comp
                                 (let [rect (.getBoundingClientRect comp)
                                       x (.. rect -x)
                                       width (.. rect -width)
                                       window-width (.. js/window -innerWidth)
                                       right (- (- window-width 10) (+ x width))]
                                   (when (< x 10)
                                     (reset! style {:left (str "calc(50% + " (Math/abs x) "px + 10px )")}))
                                   (when (< right 10)
                                     (reset! style {:left (str "calc(50% - " (Math/abs right) "px - 10px)")})))))}
                       (:tooltip props))
         [:span])
       child))))

(def new-url (atom ""))

(defn remove-link [props]
  (fn [event]
    (.preventDefault event)
    (.change (.. props -editor)
             #(.unwrapInlineByKey % (.. props -node -key) "link"))))

(defn on-submit-url [props]
  (fn [event]
    (.preventDefault event)
    (when (> (count @new-url) 0)
      (.change (.. props -editor)
               #(.setNodeByKey %
                               (.. props -node -key)
                               (clj->js
                                {:data {:url @new-url}})))
      (reset! new-url ""))))

(defn transform
  ([change url]
   (.wrapInline change (clj->js {:type "link"
                                 :data {:url url}})))
  ([change event matches editor]
   (when matches
     (let [url (first (.. matches -before))]
       (-> change
           (.insertText url)
           (.extend (- (count url)))
           (transform url)
           (.collapseToEnd)))))
  ([url]
   (fn [change]
     (transform change url))))

(defn render-node [props]
  (when (= "link" (.. props -node -type))
    (let [url (.get (.. props -node -data) "url")]
      (r/as-element
       [js-tooltip
        (merge
         (js->clj (.. props -attributes))
         {:tooltip
          [:<>
           [:form {:on-submit (on-submit-url props) :content-editable false}
            (input {:type "url"
                    :placeholder "Enter link URL"
                    :default-value url
                    :on-change (fn [e] (reset! new-url (.. e -target -value)))})]
           (x-button {:on-click (remove-link props)}
                     (c/icon "x" {:height 18 :width 18 :stroke-width 3}))]})
        (c/a {:href url
              :target "_blank"
              :on-click #(.open js/window url "_blank")}
             (.. props -children))]))))

(defn link
  "Adds link support to editor"
  ([options]
   {:plugins
    (clj->js
     [(paste-linkify ; TODO: FIX: pasting a link throws an error unless you're already selecting some text
       {:type "link"
        :hrefProperty "url"
        :collapseTo "end"})
      (auto-replace ; TODO: reimplment this to run after every char. slate-auto-replace does not seem to match partial inline/text. Something like this https://github.com/enzoferey/slate-instant-replace/blob/master/examples/urls-example/src/Slate.js
       {:trigger "space"
        :before #"(https?://\S*)"
        :transform transform})
      {:renderNode render-node}])})
  ([]
   (link {})))
