(ns dev.gen.exercise
  (:require [dev.util :refer-macros [defeditor]]
            [devcards.core :refer-macros [defcard defcard-doc]]
            [util.slate-hiccup :as sh]))

(defcard-doc
 "# Generative Testing

  Generate test data and see how the editor performs.

  If a test reveals an issue copy the test data into a new issue card.")
