;; I am being silly.
;; Should probably just write a shell script to download the docs

(ns lt.plugins.gestalt.docs
  (:use [clojure.java.shell :only [sh]]
        [clojure.pprint :only [pprint]])
  (:require [clojure.string :as str]
            [fs.core :as fs]
            [hickory.core :as h]
            [hickory.select :as s]))

(def manglsl-root "https://cvs.khronos.org/svn/repos/ogles/trunk/sdk/docs/manglsl/docbook4")
(def dest-dir "glsl-docs")

(sh "svn" "co" "--non-interactive" "--trust-server-cert"
    "--username" "anonymous"
    "--password" "anonymous"
    manglsl-root
    dest-dir)

(def glsl-fns (filter #(.endsWith % ".xml")
                       (fs/list-dir dest-dir)))

(defn extract-params [varlistentry]
  "extracts the parameters to a function, given a hickory varlistentry data structure"
  {:name        (-> (s/select (s/tag :parameter) varlistentry)
                    first :content first)
   :description (-> (s/select (s/tag :para) varlistentry)
                    first :content first str/trim)})

(defn extract-relevant-info [fname]
  "extract all info relevant to generating a nice docstring map for glsl"
  (let [xml  (slurp (str dest-dir "/" fname))
        data (h/as-hickory (h/parse xml))]
    {(-> (s/select (s/tag :refname) data) first :content first)
     {:description (-> (s/select (s/tag :refpurpose) data)
                       first :content first)
      :params (vec (map extract-params
                        (s/select (s/tag :varlistentry) data)))}}))

;; (pprint (extract-relevant-info "reflect.xml"))

(defn gen-glsl-doc-edn []
  (-> (apply merge (map extract-relevant-info glsl-fns))
      (dissoc nil)))

(spit "glsl-docs.edn" (gen-glsl-doc-edn))
