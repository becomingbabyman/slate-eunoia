(ns lib.components.hover-menu
  (:require [reagent.core :as r]
            [lib.components.core :as c]
            [cljss.core :refer-macros [defstyles]]
            [cljss.reagent :refer-macros [defstyled]]
            [lib.plugins.features.bold :as bold]
            [lib.plugins.features.strikethrough :as strikethrough]
            [lib.plugins.features.highlight :as highlight]
            [lib.plugins.features.link :as link]
            [lib.plugins.features.header :as header]))

(def corner-ref (atom nil))
(def menu-ref (atom nil))
(def focused-on-link? (r/atom false))
(def last-selection-style (atom {}))
(def link-transform-handler (atom nil))
(def url (atom ""))

(defstyled menu :div
           {:position "absolute"
            :display "flex"
            :flex-direction "row"
            :z-index 2

            :opacity 0
            :left "-10000px"
            :top "-10000px"
            ; :opacity 1
            ; :left "100px"
            ; :top "100px"

            :margin-top "-6px"
            :border-radius "4px"
            :transition "opacity 0.3s"
            :white-space "nowrap"})

(defstyles menu-dark []
           {:background c/black
            :box-shadow c/dark-box-shadow})

(defstyles menu-light []
           {:background c/white
            :box-shadow c/light-box-shadow})

(defstyled divider :span
           {:background c/pitch-black
            :width "1px"})

(defstyled button :button
           {:color c/mid-grey
            :font-size "20px"
            :line-height "20px"
            :font-weight "500"
            :height "38px"
            :width "38px"
            :padding "9px"
            "&:hover" {:color c/white}})

(defstyled small :small
           {:font-size "14px"
            :font-weight "700"})

(defstyled input :input
           {:font-size "14px"
            :outline "none"
            :padding-top "10px"
            :padding-left "12px"
            :padding-right "12px"
            :padding-bottom "11px"
            :box-sizing "border-box"
            :width "344px"
            :height "100%"
            :font-weight "400"
            :line-height "18px"
            :vertical-align "top"
            :background-color "transparent"
            :border 0
            :color c/blue
            :transition "width 100ms ease-in"})

(defn icon [name]
  (c/icon name {:height 18 :width 18 :stroke-width 3}))

(defn tooltip [title subtitle child]
  (c/tooltip-wrap
   (c/tooltip
    (c/tooltip-title title)
    (when subtitle (c/tooltip-sub-title subtitle)))
   child))

(defn selection-style [menu]
  (if @focused-on-link?
    @last-selection-style
    (when menu
      (let [selection-rect (-> (.getSelection js/window)
                               (.getRangeAt 0)
                               (.getBoundingClientRect))
            corner-rect (.getBoundingClientRect @corner-ref)
            top (- (.. selection-rect -top)
                   (.. menu -offsetHeight)
                   (.. corner-rect -y))
            render-below? (> (+ 11 (.. menu -offsetHeight))
                             (.. selection-rect -top))
            top-contained (if render-below?
                            (+ top 11
                               (.. menu -offsetHeight)
                               (.. selection-rect -height))
                            top)
            left (- (+ (.. selection-rect -left)
                       (.. js/window -pageXOffset)
                       (/ (.. selection-rect -width)  2))
                    (/ (.. menu -offsetWidth) 2)
                    (.. corner-rect -x))
            left-contained
            (min (- (.. js/window -innerWidth) (.. menu -offsetWidth) (.. corner-rect -x) 5)
                 (max left (- 5 (.. corner-rect -x))))
            style {:opacity 1
                   :left (str left-contained "px")
                   :top (str top-contained "px")}]
        (reset! last-selection-style style)
        style))))

(defn active-mark? [value mark-type]
  (.some (.. value -activeMarks) #(= (aget %1 "type") mark-type)))

(defn focus-on-link [event transform-handler]
  (.preventDefault event)
  (reset! focused-on-link? true)
  (reset! link-transform-handler transform-handler))

(defn on-submit-url [event]
  (.preventDefault event)
  ((@link-transform-handler (link/transform @url)) event)
  (reset! url "")
  (.setTimeout js/window #(.empty (.getSelection js/window))))

(defn transform-handler-handler [value on-change]
  (fn [transform]
    (fn [event]
      (.preventDefault event)
      (-> (.change value) ; Get a new change object
          (transform) ; Perform the curried transformation
          (on-change))))) ; Makes sure to callback to the on-change handler of the editor to propagate the changes

(defn hover-menu [props]
  (let [value (get props :value)
        blurred? (.. value -isBlurred)
        empty? (try (.. value -isEmpty) (catch :default e false))
        link? (try (= "link" (.. value -anchorInline -type)) (catch :default e false))
        active-style (if (or (and (not blurred?) (not empty?))
                             @focused-on-link?)
                       (selection-style @menu-ref) {})
        transform-handler (transform-handler-handler value (get props :on-change))]
    [:<>
     [:span {:ref #(reset! corner-ref %)
             :style {:width 0 :height 0 :line-height 0 :font-size 0}}]
     (menu {:ref #(reset! menu-ref %1)
            :class (if @focused-on-link? (menu-light) (menu-dark))
            :style active-style}
           (if @focused-on-link?
             [:<>
              [:form {:on-submit on-submit-url}
               (input {:type "url"
                       :placeholder "Enter link URL"
                       :auto-focus true
                       :on-change (fn [e] (reset! url (.. e -target -value)))
                       :on-focus #(reset! focused-on-link? true)
                       :on-blur #(reset! focused-on-link? false)})]]
             [:<>
              (tooltip "Bold" "⌘ + B"
                       (button
                         {:on-mouse-down (transform-handler bold/transform)
                          :style {:color (when (active-mark? value "bold") c/white)}}
                         (icon "bold")))
              (tooltip "Strikethrough" "⌘ + Opt + S"
                       (button
                         {:on-mouse-down (transform-handler strikethrough/transform)
                          :style {:color (when (active-mark? value "strikethrough") c/white)}}
                         (icon "minus")))
              (tooltip "Highlight" "⌘ + E"
                       (button
                         {:on-mouse-down (transform-handler highlight/transform)
                          :style {:color (when (active-mark? value "highlight") c/white)}}
                         (icon "edit-3")))
              (tooltip "Create Link" nil ; "⌘ + K"
                       (button
                         {:on-mouse-down #(focus-on-link % transform-handler)
                          :style {:color (when link? c/white)}
                          :disabled link?} ; TODO: instead of disabling when the selection is already a link, this should open the link edit tooltip.
                         (icon "link")))
              (divider)
              (tooltip "Large Header" "# Space"
                       (button
                         {:on-mouse-down (transform-handler (header/transform 1))
                          :style {:color (when (= (.. value -anchorBlock -type) "header1") c/white)}}
                         "H" (small "1")))
              (tooltip "Small Header" "## Space"
                       (button
                         {:on-mouse-down (transform-handler (header/transform 2))
                          :style {:color (when (= (.. value -anchorBlock -type) "header2") c/white)}}
                         (small "H2")))
              (tooltip "TODO:" "..."
                       (button (icon "list")))
              (tooltip "TODO:" "..."
                       (button (icon "check-square")))
              (divider)
              (tooltip "TODO:" "..."
                       (button (icon "message-square")))]))]))
