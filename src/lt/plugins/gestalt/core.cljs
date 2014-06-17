(ns lt.plugins.gestalt.core
  (:require [lt.objs.notifos :as notifos]
            [lt.object :as object]
            [lt.objs.editor :as ed]
            [lt.objs.command :as cmd]
            [lt.objs.files :as files]
            [lt.objs.sidebar.clients :as scl]
            [lt.objs.eval :as eval]
            [lt.objs.dialogs :as dialogs]
            [lt.objs.popup :as popup]
            [lt.objs.proc :as proc]
            [lt.objs.plugins :as plugins]
            [lt.objs.platform :as platform]
            [lt.objs.editor.pool :as pool]
            [lt.objs.clients.tcp :as tcp]
            [lt.objs.tabs :as tabs]
            [lt.plugins.doc :as doc]
            [lt.objs.clients :as clients]
            [clojure.string :as str]
            [lt.util.js :as util]
            [lt.util.load :as load]
            [cljs.reader :as reader])
  (:require-macros [lt.macros :refer [behavior]]))

;; a lot of this is copied from / based on the haskell plugin

(def glsl-docs (atom {}))

(defn update-docs! [err res]
  (reset! glsl-docs
          (reader/read-string res)))

(defn grab-docs []
  (.readFile load/fs
             (str load/pwd "/plugins/gestalt/glsl-docs.edn")
             "utf-8"
             update-docs!))

(grab-docs)

(defn symbol-token? [s]
  (re-seq #"[\w\$_\-\.\*\+\/\?\><!]" s))

(defn find-symbol-at-cursor [editor]
  (let [loc (ed/->cursor editor)
        token-left (ed/->token editor loc)
        token-right (ed/->token editor (update-in loc [:ch] inc))]
    (or (when (symbol-token? (:string token-right))
          (assoc token-right :loc loc))
        (when (symbol-token? (:string token-left))
          (assoc token-left :loc loc)))))

(def manglsl-root "http://www.khronos.org/opengles/sdk/docs/man3/html/")

(defn param-description [param]
  (str (:name param) ": " (:description param) "\n"))

(defn get-doc-map [token]
  (let[docs   (get @glsl-docs token)
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
        token   (-> editor find-symbol-at-cursor :string)
        doc-map (get-doc-map token)]
    (if doc-map
      (object/raise editor :editor.doc.show!
                    (assoc doc-map :loc loc))
      (notifos/set-msg! "No docs found" {:class "error"}))))

(behavior ::manglsl-browser-doc
          :triggers #{:editor.doc}
          :reaction manglsl-browser-doc)

;; should probably search the description text too
(defn doc-matches [query doc-keys]
  (let [regex-query (js/RegExp. query "i")]
    (filter identity
      (for [doc-key doc-keys]
        (when-not (empty? (re-find regex-query doc-key))
          doc-key)))))

(defn glsl-doc-exec [query]
  (let [doc-keys (keys @glsl-docs)
        matches  (doc-matches query doc-keys)]
    (object/raise doc/doc-search :doc.search.results
                  (map get-doc-map maches))))

;; (notifos/working "hello")
(defn glsl-doc-search [this cur]
  (conj cur {:label "glsl"
             :trigger glsl-doc-exec
             :file-types #{"Vertex Shader" "Fragment Shader"}}))

(behavior ::glsl-doc-search
          :triggers #{:types+}
          :reaction glsl-doc-search)
