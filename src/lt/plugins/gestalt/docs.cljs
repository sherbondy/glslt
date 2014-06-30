(ns lt.plugins.gestalt.docs
  (:require [lt.object :as object]
            [lt.objs.editor :as ed]
            [lt.objs.files :as files]
            [lt.objs.notifos :as notifos]
            [lt.plugins.doc :as doc]
            [cljs.reader :as reader]
            [lt.plugins.gestalt.util :as gu]
            [lt.plugins.gestalt.state :as gstate])
  (:require-macros [lt.macros :refer [behavior]]))

(defn update-docs! [res]
  (when (:content res)
    ((gstate/swap-state-fn! gstate/docs-path)
     (reader/read-string (:content res)))))

(defn grab-docs! []
  (files/open
   (files/lt-home "/plugins/gestalt/glsl-docs.edn")
   update-docs!))

(grab-docs!)

(def manglsl-root
     "http://www.khronos.org/opengles/sdk/docs/man3/html/")

(defn param-description [param]
  (str (:name param) ": " (:description param) "\n"))

(defn get-docs []
  (state/get-state state/docs-path))

(defn get-doc-map [token]
  (let [docs   (get (get-docs) token)
        params (map :name (:params docs))]
    (when docs
      {:name (str token "("
                  (apply str (interpose ", " params))
                  ")")
       :ns [:a {:href (str manglsl-root token ".xhtml")} "GLSL Documentation"]
       :doc (str (:description docs) "\n\n"
                 (apply str (map param-description (:params docs))))})))

;; I can use hiccup as a value in the doc map...
(defn manglsl-browser-doc [editor]
  (let [loc     (ed/->cursor editor)
        token   (-> editor gu/find-symbol-at-cursor :string)
        doc-map (get-doc-map token)]
    (if doc-map
      (object/raise editor :editor.doc.show!
                    (assoc doc-map :loc loc))
      (notifos/set-msg! "No docs found" {:class "error"}))))

;; should probably search the description text too
(defn doc-matches [query doc-keys]
  (let [regex-query (js/RegExp. query "i")]
    (filter identity
      (for [doc-key doc-keys]
        (when-not (empty? (re-find regex-query doc-key))
          doc-key)))))

(defn glsl-doc-exec [query]
  (let [doc-keys (keys (get-docs))
        matches  (doc-matches query doc-keys)
        doc-maps (map get-doc-map matches)]
    (object/raise doc/doc-search :doc.search.results
                  doc-maps)))

(defn glsl-doc-search [this cur]
  (conj cur {:label "glsl"
             :trigger glsl-doc-exec
             :file-types #{"Vertex Shader"
                           "Fragment Shader"}}))

;; behaviors...

(behavior ::manglsl-browser-doc
          :triggers #{:editor.doc}
          :reaction manglsl-browser-doc)

(behavior ::glsl-doc-search
          :triggers #{:types+}
          :reaction glsl-doc-search)
