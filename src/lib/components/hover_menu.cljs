(ns lib.components.hover-menu
  (:require [reagent.core :as r]
            [lib.components.core :as c]
            [cljss.reagent :refer-macros [defstyled]]
            [lib.plugins.features.bold :as bold]
            [lib.plugins.features.strikethrough :as strikethrough]
            [lib.plugins.features.highlight :as highlight]
            [lib.plugins.features.header :as header]))

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
            :background c/black
            :border (str "1px solid " c/pitch-black)
            :border-radius "4px"
            :transition "opacity 0.3s"
            :white-space "nowrap"
            :box-shadow c/dark-box-shadow})

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

(defn icon [name]
  (c/icon name {:height 18 :width 18 :stroke-width 3}))

(defn tooltip [title subtitle child]
  (c/tooltip-wrap
   (c/tooltip
    (c/tooltip-title title)
    (when subtitle (c/tooltip-sub-title subtitle)))
   child))

(defn selection-style [menu]
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
                  :left (str left "px")}]
      (if (< top 11)
        (merge style {:top (str (+ rect.bottom 11) "px")})
        style))))

(defn active-mark? [value mark-type]
  (.some value.activeMarks #(= (aget %1 "type") mark-type)))

(def ref (atom nil))

(defn click-handler-handler [value on-change]
  (fn [transform]
    (fn [event]
      (.preventDefault event)
      (on-change (transform (.change value))))))

(defn hover-menu [props]
  (let [value (get props :value)
        blurred? value.isBlurred
        empty? (try value.isEmpty (catch :default e false))
        active-style (if (or blurred? empty?)
                       {} (selection-style @ref))
        click-handler (click-handler-handler value (get props :on-change))]
    (menu {:ref #(reset! ref %1)
           :style active-style}
          (tooltip "Bold" "⌘ + B"
                   (button
                     {:on-mouse-down (click-handler bold/transform)
                      :style {:color (when (active-mark? value "bold") c/white)}}
                     (icon "bold")))
          (tooltip "Strikethrough" "⌘ + Opt + S"
                   (button
                     {:on-mouse-down (click-handler strikethrough/transform)
                      :style {:color (when (active-mark? value "strikethrough") c/white)}}
                     (icon "minus")))
          (tooltip "Highlight" "⌘ + E"
                   (button
                     {:on-mouse-down (click-handler highlight/transform)
                      :style {:color (when (active-mark? value "highlight") c/white)}}
                     (icon "edit-3")))
          (tooltip "Add a Link" "⌘ + K"
                   (button (icon "link")))
          (divider)
          (tooltip "Large Header" "# Space"
                   (button
                     {:on-mouse-down (click-handler (header/transform 1))
                      :style {:color (when (= value.anchorBlock.type "header1") c/white)}}
                     "H" (small "1")))
          (tooltip "Small Header" "## Space"
                   (button
                     {:on-mouse-down (click-handler (header/transform 2))
                      :style {:color (when (= value.anchorBlock.type "header2") c/white)}}
                     (small "H2")))
          ; (button (icon "list"))
          ; (button (icon "check-square"))
          (divider))))
          ; (button (icon "message-square")))))
