(ns lt.plugins.gestalt.core
  (:require [lt.plugins.gestalt.linker :as glinker]
            [lt.plugins.gestalt.util :as gutil]
            [lt.plugins.gestalt.state :as state]
            [lt.objs.notifos :as notifos]
            [lt.objs.command :as cmd]
            [lt.objs.files :as files]
            [clojure.string :as str]
            [lt.util.js :as util]))

;; a lot of this is copied from / based on the haskell plugin

;; hello global objects floating around
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

;; probably need to delete old shader on recompile
(defn compile-shader-type [fname source shader-type]
  (let [shader (.createShader gl shader-type)]
    (.shaderSource gl shader source)
    (.compileShader gl shader)
    (if (.getShaderParameter gl shader gl.COMPILE_STATUS)
      (do
        ((swap-state-fn
          (condp = shader-type
            gl.FRAGMENT_SHADER state/frag-path
            gl.VERTEX_SHADER   state/vert-path))
           assoc fname shader)
        (notifos/set-msg! "Successfully compiled shader"))

      (let [errors (gl-errors->edn (.getShaderInfoLog gl shader))]
        (notifos/set-msg! "Ran into some errors"
                          {:class "error"})))))

(def shader-mapping
  {"x-shader/x-fragment" gl.FRAGMENT_SHADER
   "x-shader/x-vertex"   gl.VERTEX_SHADER})

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
  (let [fname (gutil/current-file-name)
        mime  (:mime (files/path->type fname))]
    (if-let [shader-type (get shader-mapping mime)]
      (compile-shader-type
       fname
       (current-buffer-content)
       shader-type)
      (notifos/set-msg! "This file is not a valid shader"
                        {:class "error"}))))


;; (files/path->type (gutil/current-file-name))
;; (files/basename (current-file-name))

(cmd/command {:command :compile-shader
              :desc "GLSL: Compile shader"
              :exec #(compile-shader-buffer)})

(cmd/command {:command :create-program
              :desc "GLSL: Create program"
              :exec (fn [])})
