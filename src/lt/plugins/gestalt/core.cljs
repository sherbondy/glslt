(ns lt.plugins.gestalt.core
  (:require [lt.plugins.gestalt.linker :as glinker]
            [lt.plugins.gestalt.util :as gutil]
            [lt.plugins.gestalt.state :as gstate]
            [lt.objs.console :as console]
            [lt.objs.editor :as ed]
            [lt.objs.editor.pool :as pool]
            [lt.objs.notifos :as notifos]
            [lt.objs.command :as cmd]
            [lt.objs.files :as files]
            [clojure.string :as str]
            [lt.util.js :as util])
  (:require-macros [lt.macros :refer [behavior]]))

;; a lot of this is copied from / based on the haskell plugin

;; hello global objects floating around
(def canvas (.createElement js/document "CANVAS"))
(def gl (.getContext canvas "webgl"))

(defn error->map [error]
  (let [parts (str/split error #":")
        line  (js/parseInt (nth parts 2) 10)]
    {:line     (if (js/isNaN line) 0 (dec line))
     :operator (-> (nth parts 3)
                   str/trim
                   (str/replace #"\'" ""))
     :message  (str/trim (nth parts 4))}))

(defn gl-errors->edn [error-str]
  (let [errors (str/split-lines error-str)]
    (vec (map error->map errors))))

(defn current-editor []
  (ed/->cm-ed (pool/last-active)))

;; handle adding/removing inline errors
(add-watch gstate/global-state :line-errors
           (fn [k r o n]
             (let [error-path [:errors (gutil/current-file-name)]
                   old-errors (get-in o error-path)
                   new-errors (get-in n error-path)
                   editor     (current-editor)]
               (when (not= old-errors new-errors)
                 (doseq [error old-errors]
                   (ed/-line-class editor (:line error) "wrap" "glsl-error"))
                 (doseq [error new-errors]
                   (ed/+line-class editor (:line error) "wrap" "glsl-error"))))))

;; probably need to delete old shader for a file on recompile
(defn compile-shader-type [fname source shader-type]
  (let [shader (.createShader gl shader-type)
        error-state-fn (gstate/swap-state-fn gstate/error-path)]
    (.shaderSource gl shader source)
    (.compileShader gl shader)
    (if (.getShaderParameter gl shader gl.COMPILE_STATUS)
      (do
        ((gstate/swap-state-fn
          (condp = shader-type
            gl.FRAGMENT_SHADER gstate/frag-path
            gl.VERTEX_SHADER   gstate/vert-path))
           assoc fname shader)
        (error-state-fn assoc fname [])
        (notifos/set-msg! "Successfully compiled shader"))

      ;; handle adding new inline errors
      (let [errors (gl-errors->edn (.getShaderInfoLog gl shader))]
        (doseq [error errors]
          (console/log (str "Error on line "
                            (inc (:line error)) ": "
                            (:operator error) ": "
                            (:message error))
                       "error"))
        (error-state-fn assoc fname errors)
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
       (gutil/current-buffer-content)
       shader-type)
      (notifos/set-msg! "This file is not a valid shader"
                        {:class "error"}))))


;; (files/path->type (gutil/current-file-name))
;; (files/basename (current-file-name))

;; triger recompile on edit...

(cmd/command {:command :gestalt.compile-shader
              :desc "GLSL: Compile shader"
              :exec compile-shader-buffer})

(cmd/command {:command :create-program
              :desc "GLSL: Create program"
              :exec (fn [])})
