;; handle the UI for creating programs:
;; links together a vertex shader and a fragment shader

(ns lt.plugins.gestalt.linker
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.statusbar :as statusbar]
            [lt.objs.notifos :as notifos]
            [lt.util.js :as util]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true])
  (:require-macros [lt.macros :refer [behavior defui]]))

(defn file-list [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/h1 nil (:text data)))))

(defui glsl-linker [this]
  "dummy function: the real action is in build-linker-ui"
  [:div#glsl-linker])

;; can set (:content this) as the target.
(defn build-linker-ui [this]
  (om/root file-list {:text "Hello world!"}
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

(create-linker)
