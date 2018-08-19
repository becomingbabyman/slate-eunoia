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

(def menu-ref (atom nil))
(def focused-on-link? (r/atom false))
(def last-selection-style (atom {}))
(def link-transform-handler (atom nil))
(def url (r/atom ""))

(defstyled menu :div
           {:position "absolute"
            :display "flex"
            :flex-direction "row"

            :opacity 0
            :left "-1000px"
            :top "-1000px"
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
           {:position "absolute"
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
            "&:hover" {:background "#c1c7cd !important"}})

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
      (let [rect (-> js/window
                     (.getSelection)
                     (.getRangeAt 0)
                     (.getBoundingClientRect))
            top (+ js/window.pageYOffset
                   (- rect.top
                      menu.offsetHeight))
            left (min (- js/window.innerWidth menu.offsetWidth 5)
                      (max 5
                           (- (+ rect.left js/window.pageXOffset (/ rect.width  2))
                              (/ menu.offsetWidth 2))))
            style  {:opacity 1
                    :top (str top "px")
                    :left (str left "px")}
            final-style (if (< top 11)
                          (merge style {:top (str (+ rect.bottom 11) "px")})
                          style)]
        (reset! last-selection-style final-style)
        final-style))))

(defn active-mark? [value mark-type]
  (.some value.activeMarks #(= (aget %1 "type") mark-type)))

(defn transform-handler-handler [value on-change]
  (fn [transform]
    (fn [event]
      (.preventDefault event)
      (-> (.change value) ; Get a new change object
          (transform) ; Perform the curried transformation
          (on-change))))) ; Makes sure to callback to the on-change handler of the editor to propagate the changes

(defn focus-on-link [event transform-handler]
  (.preventDefault event)
  (reset! focused-on-link? true)
  (reset! link-transform-handler transform-handler))

(defn on-submit-url [event]
  (.preventDefault event)
  ((@link-transform-handler (link/transform @url)) event)
  (reset! url ""))

(defn remove-link [event]
  (.preventDefault event)
  (print "TODO: >>>>>>"))

(defn hover-menu [props]
  (let [value (get props :value)
        blurred? value.isBlurred
        empty? (try value.isEmpty (catch :default e false))
        link? (try (= "link" value.anchorInline.type) (catch :default e false))
        active-style (if (or (and (not blurred?) (not empty?))
                             @focused-on-link?)
                       (selection-style @menu-ref) {})
        transform-handler (transform-handler-handler value (get props :on-change))]

    (js/console.log @focused-on-link? blurred? empty? link? props)

    (menu {:ref #(reset! menu-ref %1)
           :class (if @focused-on-link? (menu-light) (menu-dark))
           :style active-style}
          (if @focused-on-link?
            [:<>
             [:form {:on-submit on-submit-url}
              (input {:type "url"
                      :placeholder "Enter link URL"
                      :auto-focus true
                      :default-value @url
                      :on-change (fn [e] (reset! url (.. e -target -value)))
                      :on-focus #(reset! focused-on-link? true)
                      :on-blur #(reset! focused-on-link? false)})]]
             ; (x-button {:on-click remove-link}
             ;           (icon "x"))]
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
             (tooltip "Create Link" "⌘ + K"
                      (button
                        {:on-mouse-down #(focus-on-link % transform-handler)}
                        (icon "link")))
             (divider)
             (tooltip "Large Header" "# Space"
                      (button
                        {:on-mouse-down (transform-handler (header/transform 1))
                         :style {:color (when (= value.anchorBlock.type "header1") c/white)}}
                        "H" (small "1")))
             (tooltip "Small Header" "## Space"
                      (button
                        {:on-mouse-down (transform-handler (header/transform 2))
                         :style {:color (when (= value.anchorBlock.type "header2") c/white)}}
                        (small "H2")))
             (tooltip "TODO:" "..."
                      (button (icon "list")))
             (tooltip "TODO:" "..."
                      (button (icon "check-square")))
             (divider)
             (tooltip "TODO:" "..."
                      (button (icon "message-square")))]))))
