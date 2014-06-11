(ns lt.plugins.gestalt
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
            [goog.events :as events]
            [goog.string :as string]
            [clojure.string :as clj-string]
            [lt.util.js :as util]
            [lt.util.load :as load])
  (:require-macros [lt.macros :refer [behavior]]))

(def manglsl-root "https://cvs.khronos.org/svn/repos/ogles/trunk/sdk/docs/man3/")

(def manglsl-html-root (str manglsl-root "html/"))

;; (defn perform-xml-search [base-url query handler]
;;   (let [xhr (goog.net.XhrIo.)]
;;     (events/listen xhr "complete" (wrap-handler handler))
;;     (.send xhr (str base-url (string/urlEncode query)))))

;; (defn wrap-handler [handler]
;;   (fn [event]
;;     (let [response (.-target event)]
;;       (if (.isSuccess response)
;;           (handler response)
;;           (notifos/done-working "Failed to connect to handler. Try again")))))

(defn manglsl-page [token]
  (str manglsl-html-root token ".xhtml"))

(manglsl-page "asin")

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

(defn manglsl-browser-doc [editor]
  (let [loc   (ed/->cursor editor)
        token (-> editor find-symbol-at-cursor :string)]
    (if (nil? token)
      (notifos/set-msg! "No docs found" {:class "error"})
      (object/raise editor :editor.doc.show! {:name token
                                              :ns "GLSL 1.00"
                                              :doc (manglsl-page token)
                                              :loc loc}))))

(behavior ::manglsl-browser-doc
          :triggers #{:editor.doc}
          :reaction manglsl-browser-doc)

(defn glsl-doc-exec [query]
  (notifos/working (str "Grabbing doc: " query))
  (util/wait 1000 #(notifos/done-working "Failed to connect to handler. Try again")))

;; how do I specify the client for searching the docs?

;; (notifos/working "hello")
(defn glsl-doc-search [this cur]
  (conj cur {:label "glsl" :trigger glsl-doc-exec
             :file-types #{"Vertex Shader" "Fragment Shader"}}))

(behavior ::glsl-doc-search
          :triggers #{:types+}
          :reaction glsl-doc-search)
