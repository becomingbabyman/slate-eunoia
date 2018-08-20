(ns test.browser.core
  "generic browser test runner"
  (:require [shadow.test :as st]
            [shadow.dom :as dom]
            [pjstadig.humane-test-output])) ; NOTE: DO NOT DELETE: just requiring this package pretty prints the test output

;;;;;;;;;
; NOTE: this file is coppied almost verbatim from
;   https://github.com/thheller/shadow-cljs/blob/master/src/main/shadow/test/browser.cljs
; TODO: check back for updates. It looks like shadow-cljs plans to implement custom test reporting
;;;;;;;;;

;; FIXME: implement custom reporter instead
(defonce log-node (dom/by-id "log"))
(when log-node
  (set-print-fn!
   (fn [s]
     (dom/append log-node (str s "\n")))))

(defn start []
  ;; (js/console.log "test env" @st/tests-ref)
  (st/run-all-tests))

(defn stop [done]
  (set! (.-innerText log-node) "")

  ;; FIXME: determine if async tests are still running
  ;; and call done after instead
  ;; otherwise a live reload might interfere with running tests by
  ;; reloading code in the middle
  (done))

;; not sure we need to do something once?
(defn ^:export init []
  (start))
