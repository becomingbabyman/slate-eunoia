(ns dev.a-features.crdt
  (:require [dev.util :refer-macros [defeditor]]
            [devcards.core :refer-macros [defcard defcard-doc]]))

(defcard-doc
 "
# Collaboration via CRDTs
- ☑️ Mock out the dev env on this page
- ⬜️ Actually link the editors on this page
    - See [syncing-operations](https://www.slatejs.org/#/syncing-operations)
- ⬜️ Resolve conflicts with CRDTs
- ⬜️ Add UI to manually simulate different syncing latency
- ⬜️ Add UI to visualize change sets that are accumulating in each editor
    - [This talk on GitHub Teletype CRDTs](https://www.infoq.com/presentations/crdt-tachyon-collaborative-editing) does a great job visualizing CRDTs
- ⬜️ Add some tests of common merge opperations that might not converge
    - [This paper on JSON CRDTs](https://arxiv.org/pdf/1608.03960.pdf) has some good examples
    - Generative [chaos monkey style testing](https://github.com/aslakhellesoy/automerge-codemirror/blob/master/test/AutomergeCodeMirrorTest.js#L165) is also interesting
")

(def hiccup
  [:document
   [:paragraph
    "These two editors are kept "
    [:bold "in sync"]
    " with one another as you type!"]])

(defeditor
 editor-1
 hiccup)

(defeditor
 editor-2
 hiccup)

(defcard
 editor-state-visulization
 "TODO")
