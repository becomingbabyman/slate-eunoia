(ns dev.c-gen.issue1
  (:require [dev.util :refer-macros [defeditor]]))

; (defeditor issue1
;            '(:document
;              {:url "T7"}
;              (:header3
;               {}
;               (:header3
;                {:url "z1"}
;                "02P"
;                (:header2 {} 0)
;                (:link
;                 {:url "L"}
;                 (:link
;                  {:url "0d"}
;                  (:highlight {} "nHyA" (:italic) "C97")
;                  (:link
;                   {:url ""}
;                   (:strikethrough
;                    {:url "FkZ1"}
;                    (:link -1)
;                    (:link
;                     {:url "X"}
;                     (:strikethrough)
;                     "RhA0"
;                     (:italic 0 "e" -1 (:link)))
;                    "g")
;                   (:bold
;                    {:url "U"}
;                    (:bold (:highlight) (:link ""))
;                    (:link
;                     -0.5625
;                     (:bold
;                      {:url "ic"}
;                      (:highlight {} (:italic {:url "Z9n"}) 5 (:link {:url "Do30"}))
;                      ""
;                      "9W")
;                     (:link {:url "emx"})
;                     1)
;                    -1)
;                   (:link {} -5 1.75 (:link))
;                   (:highlight {} "P0"))
;                  -1)
;                 ""
;                 "")))))

; (defeditor issue1
;            '(:document
;              {:url "T7"}
;              (:header3
;               {}
;               (:header3
;                {:url "z1"}
;                "02P"
;                (:header2 {} 0)
;                (:link
;                 {:url "L"}
;                 (:link
;                  {:url "0d"}
;                  (:highlight {} "nHyA" (:italic) "C97")
;                  (:link
;                   {:url ""}
;                   (:strikethrough
;                    {:url "FkZ1"}
;                    (:link -1)
;                    "yolo"
;                    (:bold "bold")
;                    (:link)))))))))
;                  ;    {:url "X"}
;                  ;    (:strikethrough)
;                  ;    "RhA0"
;                  ;    (:italic 0 "e" -1 (:link)))
;                  ;   "g"))))))))
;                ;    (:bold
;                ;     {:url "U"}
;                ;     (:bold (:highlight) (:link ""))
;                ;     (:link
;                ;      -0.5625
;                ;      (:bold
;                ;       {:url "ic"}
;                ;       (:highlight {} (:italic {:url "Z9n"}) 5 (:link {:url "Do30"}))
;                ;       ""
;                ;       "9W")
;                ;      (:link {:url "emx"})
;                ;      1)
;                ;     -1)
;                ;    (:link {} -5 1.75 (:link))
;                ;    (:highlight {} "P0"))
;                ;   -1)
;                ;  ""
;                ;  "")))))


; (defeditor issue1
;            '(:document
;              {:url "T7"}
;              (:header3
;               (:link
;                {:url ""}
;                (:strikethrough
;                 {:url "FkZ1"}
;                 (:link -1)
;                 "yolo"
;                 (:bold "bold")
;                 (:link
;                  (:link
;                   (:link))))))))

(defeditor issue1
           "TODO: remove nested links from the spec. They just should not be generated in the first place.
            TODO: also consider adding a normalizer to the the schema to remove nested links."
           '(:document
             (:paragraph
              (:link
               (:link
                (:link
                 (:link)))))))
