(ns lt.plugins.gestalt.docs
  (:use [clojure.java.shell :only [sh]]
        [clojure.pprint :only [pprint]])
  (:require [clojure.string :as str]
            [fs.core :as fs]
            [hickory.core :as h]
            [hickory.select :as s]))

(def manglsl-root "https://cvs.khronos.org/svn/repos/ogles/trunk/sdk/docs/manglsl/docbook4")

(sh "svn" "co" "--non-interactive" "--trust-server-cert"
    "--username" "anonymous"
    "--password" "anonymous"
    manglsl-root)

(def glsl-fns (filter #(.endsWith % ".xml")
                       (fs/list-dir "docbook4")))

(defn extract-params [varlistentry]
  {:name        (-> (s/select (s/tag :parameter) varlistentry)
                    first :content first)
   :description (-> (s/select (s/tag :para) varlistentry)
                    first :content first str/trim)})

(defn extract-relevant-info [fname]
  (let [xml  (slurp (str "docbook4/" fname))
        data (h/as-hickory (h/parse xml))]
    {(-> (s/select (s/tag :refname) data) first :content first)
     {:description (-> (s/select (s/tag :refpurpose) data)
                       first :content first)
      :params (vec (map extract-params
                        (s/select (s/tag :varlistentry) data)))}}))

(pprint (extract-relevant-info "reflect.xml"))

(apply merge (map extract-relevant-info glsl-fns))
