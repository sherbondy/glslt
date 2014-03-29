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

;; need to handle preprocessor macros and comments in a reasonable way
;; maybe comments can be treated as whitespace...

;; performance is a problem for multi-hundred line shaders (on the order of seconds...)
;; the shader chokes on small files with lots of compound expressions. Maybe we
;; can drastically simplify the parsing of compound expressions, since this is not my primary interest
;; in implementing the plugin...

(time
(def example
  (numbers (slurp "samples/test1.vert")
         :start :TRANSLATION_UNIT
         :total true)))

example

(insta/visualize example :output-file "example.png" :options {})

(defn spans [t]
  (if (sequential? t)
    (cons (insta/span t) (map spans (next t)))
    t))

;; use insta/span to get [start-index end-index] for parse tree.
(spans example)

;; merge identifiers and numbers to get rid of baggage...


(defn ast-functions [ast result]
  (if (sequential? ast)
    (if (= (nth ast 0) :FUNCTION_HEADER)
      (ast-functions (next ast)
                     (conj result {:name (get-in ast [2 1])
                                   :type (get-in ast [1 1 1 1 1 1])}))
      (flatten (map #(ast-functions % result) (next ast))))
    result))

(ast-functions example [])

;; Instaparse seems inadequate from a performance perspective,
;; and it is painful to have to insert <whitespace> statements everywhere in the grammar.
;; We really want an incremental parser, and it looks like we should, in fact,
;; do lexing and parsing as separate phases. Essentially, the plugin should,
;; unfortunately, follow the first few steps of the OpenGL ES shader compilation pipeline.
;; Maybe, instead of fighting uphill and trying to reimplement all of this,
;; reinventing the wheel, I should try and gut an actual GLSL compiler.
;; Like, say, the one from Chrome... and then just spit out the AST in edn format...
