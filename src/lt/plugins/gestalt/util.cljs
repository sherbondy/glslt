(ns lt.plugins.gestalt.util
  (:require [lt.objs.editor :as ed]
            [lt.objs.editor.pool :as pool]))

(defn symbol-token? [s]
  (re-seq #"[\w\$_\-\.\*\+\/\?\><!]" s))

(defn find-symbol-at-cursor [editor]
  (let [loc         (ed/->cursor editor)
        token-left  (ed/->token editor loc)
        token-right (ed/->token editor (update-in loc [:ch] inc))]
    (or (when (symbol-token? (:string token-right))
          (assoc token-right :loc loc))
        (when (symbol-token? (:string token-left))
          (assoc token-left :loc loc)))))

(defn current-buffer-content []
  "Returns content of the current buffer"
  (let [cm (ed/->cm-ed (pool/last-active))]
    (.getRange cm
               #js {:line 0 :ch 0}
               #js {:line (.lineCount (ed/->cm-ed (pool/last-active)))
                    :ch 0})))

(defn current-file-name []
  (-> @(pool/last-active) :info :path))
