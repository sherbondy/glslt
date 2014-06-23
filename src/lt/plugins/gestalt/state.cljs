;; this is where all the state lives.
;; one big happy family
(ns lt.plugins.gestalt.state)

(def global-state
  (atom
   {:docs {}
    :fragment-shaders {}
    :vertex-shaders {}}))

;; these are for getting views into the global state
(def docs-path [:docs])
(def frag-path [:fragment-shaders])
(def vert-path [:vertex-shaders])

;; poor mind's lenses?

(defn get-state [state-vec]
  (get-in @global-state state-vec))

(defn swap-state-fn [state-vec]
  (partial
   swap! global-state
   update-in state-vec))
