;; handle the UI for creating programs:
;; links together a vertex shader and a fragment shader

(ns lt.plugins.gestalt.linker
  (:require [lt.plugins.gestalt.state :as gstate]
            [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.tabs :as tabs]
            [lt.objs.statusbar :as statusbar]
            [lt.objs.notifos :as notifos]
            [lt.util.js :as util]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true])
  (:require-macros [lt.macros :refer [behavior defui]]))

;; maybe everything that has a dom function in it
;; must be a bona fide component for updates to propagate?

;; date => the global state from state.cljs
(defn file-list [data owner]
  (reify
    om/IRender
    (render [this]
     (dom/div
      nil
      (dom/h1 nil (or (get data :text)
                      "No value for text"))
      (dom/h1 nil "Pick a Vertex Shader:")
      (om/build shader-list (get data :vertex-shaders))
      (dom/h1 nil "Pick a Fragment Shader:")
      (om/build shader-list (get data :fragment-shaders))))))

(defn shader-elem [[fname _] owner]
  (reify
    om/IRender
    (render [_]
      (dom/li nil fname))))

(defn shader-list [shaders owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/ul nil
        (om/build-all shader-elem shaders)))))

(defui glsl-linker [this]
  ;; dummy function: the real action is in build-linker-ui
  [:div.glsl-linker])

;; can set (:content @this) as the target.
(defn build-linker-ui [this]
  (om/root
   file-list
   gstate/global-state
   {:target (:content @this)}))

;; I feel like this should be a default method in light table:
;; it is very common: destroy tabset if empty, otherwise just destroy tab.
(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))

(behavior ::link-on-click
          :triggers #{:clicked}
          :reaction (fn [this] (notifos/working "Whee, clicked")))

(object/object* ::glsl-linker
                :name "GLSL Program Linker"
                :behaviors [::link-on-click ::on-close-destroy]
                ;; init is called when the obj is placed in a tab.
                :init (fn [this] (glsl-linker this)))

(defn create-linker []
  "use this instead of the standard object/create"
  (let [linker-obj (object/create ::glsl-linker)]
    (build-linker-ui linker-obj)
    (tabs/add! linker-obj)
    (tabs/active! linker-obj)))


(cmd/command {:command :link-shaders
              :desc "GLSL: Open shader linker view"
              :exec create-linker})
