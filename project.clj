(defproject glslt "0.0.2"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2227"]
                 [om "0.6.4"]
                 [prismatic/om-tools "0.2.2"]
                 [hickory "0.5.2"]
                 [me.raynes/fs "1.4.4"]
                 [rhizome "0.2.0"]]
  :cljsbuild
  {:builds
   {:main
    {:compiler
      {:externs ["react/react-externs.js"]}}}})
