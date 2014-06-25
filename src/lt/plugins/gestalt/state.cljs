;; this is where all the state lives.
;; one big happy family
(ns lt.plugins.gestalt.state)

(def global-state
  (atom
   {:docs {}
    :vertex-shaders {} ;; key = absolute filename, value = compiled shader js obj
    :fragment-shaders {}
    :current-vertex "" ;; key = abs filename
    :current-fragment ""
    :errors {} ;; key = abs filename, value = vector of errors (see core.cljs error->map)
    :text "WHEE"}))

;; these are for getting views into the global state
(def docs-path [:docs])
(def frag-path [:fragment-shaders])
(def vert-path [:vertex-shaders])
(def error-path [:errors])

;; poor mind's lenses?

(defn get-state [state-vec]
  (get-in @global-state state-vec))

(defn swap-state-fn [state-vec]
  (partial
   swap! global-state
   update-in state-vec))
