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

(defn update-docs! [res]
  (reset! glsl-docs
          (reader/read-string (:content res))))

(defn grab-docs []
  (files/open
   (str load/pwd "/plugins/gestalt/glsl-docs.edn")
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

(def canvas (.createElement js/document "CANVAS"))
(def gl (.getContext canvas "webgl"))

(defn error->map [error]
  (let [parts (str/split error #":")]
    {:line (nth parts 2)
     :operator (-> (nth parts 3)
                   str/trim
                   (str/replace #"\'" ""))
     :message (str/trim (nth parts 4))}))

(defn gl-errors->edn [error-str]
  (let [errors (str/split-lines error-str)]
    (vec (map error->map errors))))


;; maintain two maps of filename -> compiled shader objects
(def compiled-frag-shaders (atom {}))
(def compiled-vert-shaders (atom {}))

;; probably need to delete old shader on recompile
(defn compile-shader-type [fname source shader-type]
  (let [shader (.createShader gl shader-type)]
    (.shaderSource gl shader source)
    (.compileShader gl shader)
    (if (.getShaderParameter gl shader gl.COMPILE_STATUS)
      (do
        (swap!
          (condp = shader-type
            gl.FRAGMENT_SHADER compiled-frag-shaders
            gl.VERTEX_SHADER   compiled-vert-shaders)
           assoc fname shader)
        (notifos/set-msg! "Successfully compiled shader"))

      (let [errors (gl-errors->edn (.getShaderInfoLog gl shader))]
        (notifos/set-msg! "Ran into some errors" {:class "error"})))))

(def shader-mapping
  {"x-shader/x-fragment" gl.FRAGMENT_SHADER
   "x-shader/x-vertex" gl.VERTEX_SHADER})

(defn compile-shader [fname]
  "compile given file path as shader"
  (when-let [file (files/open-sync fname)]
    (compile-shader-type
     fname
     (:content file)
     (get shader-mapping (:type file)))))

;; (compile-shader "/Users/ethanis/Code/glslt/samples/test1.vert")

(defn compile-shader-buffer []
  "compile current buffer as shader"
  (let [fname (current-file-name)
        mime  (:mime (files/path->type fname))]
    (if-let [shader-type (get shader-mapping mime)]
      (compile-shader-type
       fname
       (current-buffer-content)
       shader-type)
      (notifos/set-msg! "This file is not a valid shader" {:class "error"}))))

(current-file-name)

(defn current-buffer-content []
  "Returns content of the current buffer"
  (let [cm (ed/->cm-ed (pool/last-active))]
    (.getRange cm
               #js {:line 0 :ch 0}
               #js {:line (.lineCount (ed/->cm-ed (pool/last-active))) :ch 0})))

(defn current-file-name []
  (-> @(pool/last-active) :info :path))

;; (files/path->type (current-file-name))
;; (files/basename (current-file-name))

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

(cmd/command {:command :compile-shader
              :desc "GLSL: Compile shader"
              :exec #(compile-shader-buffer)})
