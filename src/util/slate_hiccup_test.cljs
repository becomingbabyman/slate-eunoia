(ns util.slate-hiccup-test
  (:require [cljs.test :refer-macros (deftest is)]
            [util.slate-hiccup :as slate-hiccup]))

(defn is=
  "Flips the parameter order so the actual result can be
  stated before the expectation when writing tests."
  [actual expected]
  (is (= expected actual)))

(defn test-hiccup->slate-edn [{:keys [hiccup slate-edn]}]
  (is= (slate-hiccup/ast->slate-edn
        (slate-hiccup/make-ast hiccup))
       slate-edn))

(deftest hiccup->slate-edn--simple
  (test-hiccup->slate-edn
   {:hiccup [:document
             [:paragraph "some text"]]

    :slate-edn {:document
                {:nodes
                 [{:object :block
                   :type :paragraph
                   :nodes
                   [{:object :text
                     :leaves
                     [{:object :leaf, :text "some text", :marks []}]}]}]}}}))

(deftest hiccup->slate-edn--nested-marks
  (test-hiccup->slate-edn
   {:hiccup [:document
             [:paragraph
              [:bold "bold text"
               [:italic "bold and italic"
                "   "
                [:highlight "bold and italic and highlight"]
                "   "]
               [:strikethrough "bold and strikethrough"]
               "   "
               [:link {:url "https://google.com"} "a bold link"]]]]

    :slate-edn {:document
                {:nodes
                 [{:object :block
                   :type :paragraph
                   :nodes
                   [{:object :text
                     :leaves
                     [{:object :leaf
                       :text "bold text"
                       :marks [{:object :mark, :type :bold}]}]}
                    {:object :text
                     :leaves
                     [{:object :leaf
                       :text "bold and italic"
                       :marks
                       [{:object :mark, :type :bold}
                        {:object :mark, :type :italic}]}]}
                    {:object :text
                     :leaves
                     [{:object :leaf
                       :text "   "
                       :marks
                       [{:object :mark, :type :bold}
                        {:object :mark, :type :italic}]}]}
                    {:object :text
                     :leaves
                     [{:object :leaf
                       :text "bold and italic and highlight"
                       :marks
                       [{:object :mark, :type :bold}
                        {:object :mark, :type :italic}
                        {:object :mark, :type :highlight}]}]}
                    {:object :text
                     :leaves
                     [{:object :leaf
                       :text "   "
                       :marks
                       [{:object :mark, :type :bold}
                        {:object :mark, :type :italic}]}]}
                    {:object :text
                     :leaves
                     [{:object :leaf
                       :text "bold and strikethrough"
                       :marks
                       [{:object :mark, :type :bold}
                        {:object :mark, :type :strikethrough}]}]}
                    {:object :text
                     :leaves
                     [{:object :leaf
                       :text "   "
                       :marks [{:object :mark, :type :bold}]}]}
                    {:object :inline
                     :type :link
                     :data {:url "https://google.com"}
                     :nodes
                     [{:object :text
                       :leaves
                       [{:object :leaf
                         :text "a bold link"
                         :marks [{:object :mark, :type :bold}]}]}]}]}]}}}))

(deftest hiccup->slate-edn--complex
  (test-hiccup->slate-edn
   {:hiccup [:document
             [:header1 "Header 1"]
             [:header2 "Header 2"]
             [:header3 "Header 3"]
             [:paragraph "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis elit augue, vitae tempus elit accumsan ac. Cras tempus metus mi, ut laoreet nisl aliquam sit amet. Nullam in purus id felis vulputate efficitur. Vestibulum eget libero lectus. Maecenas vestibulum sapien at dolor lobortis varius. Aenean consequat augue ipsum, vitae blandit lorem euismod vel. Cras eu porta purus, sit amet hendrerit mi."]
             [:paragraph]
             [:blockquote
              "blockquote example block with a "
              [:link {:url "https://google.com"} "link"]]
             [:paragraph]
             [:paragraph
              [:bold "bold"]
              "   "
              [:italic "italic"]
              "   "
              [:code " code "]
              "   "
              [:strikethrough " strikethrough "]
              "   "
              [:highlight " highlight "]
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
             [:paragraph]]

    :slate-edn {:document
                {:nodes
                 [{:object :block
                   :type :header1
                   :nodes
                   [{:object :text
                     :leaves [{:object :leaf, :text "Header 1", :marks []}]}]}
                  {:object :block
                   :type :header2
                   :nodes
                   [{:object :text
                     :leaves [{:object :leaf, :text "Header 2", :marks []}]}]}
                  {:object :block
                   :type :header3
                   :nodes
                   [{:object :text
                     :leaves [{:object :leaf, :text "Header 3", :marks []}]}]}
                  {:object :block
                   :type :paragraph
                   :nodes
                   [{:object :text
                     :leaves
                     [{:object :leaf
                       :text
                       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis elit augue, vitae tempus elit accumsan ac. Cras tempus metus mi, ut laoreet nisl aliquam sit amet. Nullam in purus id felis vulputate efficitur. Vestibulum eget libero lectus. Maecenas vestibulum sapien at dolor lobortis varius. Aenean consequat augue ipsum, vitae blandit lorem euismod vel. Cras eu porta purus, sit amet hendrerit mi."
                       :marks []}]}]}
                  {:object :block, :type :paragraph}
                  {:object :block
                   :type :blockquote
                   :nodes
                   [{:object :text
                     :leaves
                     [{:object :leaf
                       :text "blockquote example block with a "
                       :marks []}]}
                    {:object :inline
                     :type :link
                     :data {:url "https://google.com"}
                     :nodes
                     [{:object :text
                       :leaves [{:object :leaf, :text "link", :marks []}]}]}]}
                  {:object :block, :type :paragraph}
                  {:object :block
                   :type :paragraph
                   :nodes
                   [{:object :text
                     :leaves
                     [{:object :leaf
                       :text "bold"
                       :marks [{:object :mark, :type :bold}]}]}
                    {:object :text
                     :leaves [{:object :leaf, :text "   ", :marks []}]}
                    {:object :text
                     :leaves
                     [{:object :leaf
                       :text "italic"
                       :marks [{:object :mark, :type :italic}]}]}
                    {:object :text
                     :leaves [{:object :leaf, :text "   ", :marks []}]}
                    {:object :text
                     :leaves
                     [{:object :leaf
                       :text " code "
                       :marks [{:object :mark, :type :code}]}]}
                    {:object :text
                     :leaves [{:object :leaf, :text "   ", :marks []}]}
                    {:object :text
                     :leaves
                     [{:object :leaf
                       :text " strikethrough "
                       :marks [{:object :mark, :type :strikethrough}]}]}
                    {:object :text
                     :leaves [{:object :leaf, :text "   ", :marks []}]}
                    {:object :text
                     :leaves
                     [{:object :leaf
                       :text " highlight "
                       :marks [{:object :mark, :type :highlight}]}]}
                    {:object :text
                     :leaves [{:object :leaf, :text "\n\n", :marks []}]}
                    {:object :text
                     :leaves
                     [{:object :leaf
                       :text "all the marks!!!"
                       :marks
                       [{:object :mark, :type :bold}
                        {:object :mark, :type :italic}
                        {:object :mark, :type :strikethrough}
                        {:object :mark, :type :highlight}
                        {:object :mark, :type :code}]}]}
                    {:object :text
                     :leaves
                     [{:object :leaf
                       :text "   "
                       :marks
                       [{:object :mark, :type :bold}
                        {:object :mark, :type :italic}
                        {:object :mark, :type :strikethrough}
                        {:object :mark, :type :highlight}
                        {:object :mark, :type :code}]}]}
                    {:object :inline
                     :type :link
                     :data {:url "https://google.com"}
                     :nodes
                     [{:object :text
                       :leaves
                       [{:object :leaf
                         :text "and a link"
                         :marks
                         [{:object :mark, :type :bold}
                          {:object :mark, :type :italic}
                          {:object :mark, :type :strikethrough}
                          {:object :mark, :type :highlight}
                          {:object :mark, :type :code}]}]}]}]}
                  {:object :block, :type :paragraph}
                  {:object :block
                   :type :code-block
                   :nodes
                   [{:object :text
                     :leaves
                     [{:object :leaf
                       :text
                       "(def slate-value\n          (r/atom\n           (hiccup->slate\n            [:document\n             [:header1 \"Header 1\"]\n             [:header2 \"Header 2\"]\n             [:header3 \"Header 3\"]\n             [:paragraph\n              (string/replace\n               \"Lorem ipsum dol..."
                       :marks []}]}]}
                  {:object :block, :type :paragraph}]}}}))
