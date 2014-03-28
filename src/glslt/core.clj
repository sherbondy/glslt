(ns glslt.core
  (:require [instaparse.core :as insta]))

;; this is a dysfunctional work in progress!
;; what is the root node of a shader program?
;; allow for partial parses! :partial true
;; or maybe a total parse is what we want?
;; maybe should use an incremental parser like parsley if perf is an issue.
;; hopefully can port instaparse to cljs eventually...
;; need to devise a way to map parse back to line/col metadata
;; walk resulting parse tree to regain metadata?
;; need to deal with whitespace...
;; should maybe tokenize first...

;; by default, instaparse assumes that the very first rule is your "starting production",
;; the rule from which parsing initially proceeds.
;; But we can easily set other rules to be the starting production with the :start keyword argument.
;; is STATEMENT_LIST the main unit?


(def numbers
  (insta/parser (slurp "glsl-grammar.bnf")))

(numbers (slurp "samples/test1.vert")
         :start :TRANSLATION_UNIT
         :total true)
