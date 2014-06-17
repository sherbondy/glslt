if(!lt.util.load.provided_QMARK_('lt.plugins.gestalt.core')) {
goog.provide('lt.plugins.gestalt.core');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.notifos');
goog.require('lt.objs.platform');
goog.require('lt.objs.proc');
goog.require('lt.plugins.doc');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.platform');
goog.require('lt.objs.eval');
goog.require('lt.util.load');
goog.require('lt.objs.popup');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.proc');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.clients.tcp');
goog.require('lt.objs.tabs');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.files');
goog.require('lt.objs.clients.tcp');
goog.require('lt.util.js');
goog.require('lt.objs.command');
goog.require('lt.objs.clients');
goog.require('lt.objs.tabs');
goog.require('lt.objs.popup');
goog.require('lt.objs.plugins');
goog.require('lt.util.js');
goog.require('lt.objs.editor');
goog.require('lt.plugins.doc');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.eval');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('lt.objs.notifos');
goog.require('cljs.reader');
goog.require('lt.objs.plugins');
goog.require('lt.objs.clients');
goog.require('cljs.reader');
goog.require('lt.objs.files');
goog.require('lt.object');
goog.require('lt.util.load');
lt.plugins.gestalt.core.glsl_docs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
lt.plugins.gestalt.core.update_docs_BANG_ = (function update_docs_BANG_(err,res){return cljs.core.reset_BANG_.call(null,lt.plugins.gestalt.core.glsl_docs,cljs.reader.read_string.call(null,res));
});
lt.plugins.gestalt.core.grab_docs = (function grab_docs(){return lt.util.load.fs.readFile((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lt.util.load.pwd)+"/plugins/gestalt/glsl-docs.edn"),"utf-8",lt.plugins.gestalt.core.update_docs_BANG_);
});
lt.plugins.gestalt.core.grab_docs.call(null);
lt.plugins.gestalt.core.symbol_token_QMARK_ = (function symbol_token_QMARK_(s){return cljs.core.re_seq.call(null,/[\w\$_\-\.\*\+\\/\?\><!]/,s);
});
lt.plugins.gestalt.core.find_symbol_at_cursor = (function find_symbol_at_cursor(editor){var loc = lt.objs.editor.__GT_cursor.call(null,editor);var token_left = lt.objs.editor.__GT_token.call(null,editor,loc);var token_right = lt.objs.editor.__GT_token.call(null,editor,cljs.core.update_in.call(null,loc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc));var or__6426__auto__ = (cljs.core.truth_(lt.plugins.gestalt.core.symbol_token_QMARK_.call(null,new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token_right)))?cljs.core.assoc.call(null,token_right,new cljs.core.Keyword(null,"loc","loc",1014011570),loc):null);if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{if(cljs.core.truth_(lt.plugins.gestalt.core.symbol_token_QMARK_.call(null,new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token_left))))
{return cljs.core.assoc.call(null,token_left,new cljs.core.Keyword(null,"loc","loc",1014011570),loc);
} else
{return null;
}
}
});
lt.plugins.gestalt.core.manglsl_root = "http://www.khronos.org/opengles/sdk/docs/man3/html/";
lt.plugins.gestalt.core.param_description = (function param_description(param){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(param))+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(param))+"\n");
});
lt.plugins.gestalt.core.get_doc_map = (function get_doc_map(token){var docs = cljs.core.get.call(null,cljs.core.deref.call(null,lt.plugins.gestalt.core.glsl_docs),token);var params = cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"params","params",4313443576).cljs$core$IFn$_invoke$arity$1(docs));if(cljs.core.truth_(docs))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)+"("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",params)))+")"),new cljs.core.Keyword(null,"ns","ns",1013907767),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lt.plugins.gestalt.core.manglsl_root)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)+".xhtml")], null),"GLSL Documentation"], null),new cljs.core.Keyword(null,"doc","doc",1014003882),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(docs))+"\n\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,lt.plugins.gestalt.core.param_description,new cljs.core.Keyword(null,"params","params",4313443576).cljs$core$IFn$_invoke$arity$1(docs)))))], null);
} else
{return null;
}
});
lt.plugins.gestalt.core.manglsl_browser_doc = (function manglsl_browser_doc(editor){var loc = lt.objs.editor.__GT_cursor.call(null,editor);var token = new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(lt.plugins.gestalt.core.find_symbol_at_cursor.call(null,editor));var doc_map = lt.plugins.gestalt.core.get_doc_map.call(null,token);if(cljs.core.truth_(doc_map))
{return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.doc.show!","editor.doc.show!",1417900223),cljs.core.assoc.call(null,doc_map,new cljs.core.Keyword(null,"loc","loc",1014011570),loc));
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"No docs found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gestalt.core","manglsl-browser-doc","lt.plugins.gestalt.core/manglsl-browser-doc",3989168236),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.doc","editor.doc",3751347369),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gestalt.core.manglsl_browser_doc);
lt.plugins.gestalt.core.doc_matches = (function doc_matches(query,doc_keys){var regex_query = (new RegExp(query,"i"));return cljs.core.filter.call(null,cljs.core.identity,(function (){var iter__7151__auto__ = ((function (regex_query){
return (function iter__8051(s__8052){return (new cljs.core.LazySeq(null,((function (regex_query){
return (function (){var s__8052__$1 = s__8052;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8052__$1);if(temp__4126__auto__)
{var s__8052__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8052__$2))
{var c__7149__auto__ = cljs.core.chunk_first.call(null,s__8052__$2);var size__7150__auto__ = cljs.core.count.call(null,c__7149__auto__);var b__8054 = cljs.core.chunk_buffer.call(null,size__7150__auto__);if((function (){var i__8053 = 0;while(true){
if((i__8053 < size__7150__auto__))
{var doc_key = cljs.core._nth.call(null,c__7149__auto__,i__8053);cljs.core.chunk_append.call(null,b__8054,((cljs.core.empty_QMARK_.call(null,cljs.core.re_find.call(null,regex_query,doc_key)))?null:doc_key));
{
var G__8055 = (i__8053 + 1);
i__8053 = G__8055;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8054),iter__8051.call(null,cljs.core.chunk_rest.call(null,s__8052__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8054),null);
}
} else
{var doc_key = cljs.core.first.call(null,s__8052__$2);return cljs.core.cons.call(null,((cljs.core.empty_QMARK_.call(null,cljs.core.re_find.call(null,regex_query,doc_key)))?null:doc_key),iter__8051.call(null,cljs.core.rest.call(null,s__8052__$2)));
}
} else
{return null;
}
break;
}
});})(regex_query))
,null,null));
});})(regex_query))
;return iter__7151__auto__.call(null,doc_keys);
})());
});
lt.plugins.gestalt.core.glsl_doc_exec = (function glsl_doc_exec(query){var doc_keys = cljs.core.keys.call(null,cljs.core.deref.call(null,lt.plugins.gestalt.core.glsl_docs));var matches = lt.plugins.gestalt.core.doc_matches.call(null,query,doc_keys);return lt.object.raise.call(null,lt.plugins.doc.doc_search,new cljs.core.Keyword(null,"doc.search.results","doc.search.results",3363305624),cljs.core.map.call(null,lt.plugins.gestalt.core.get_doc_map,lt.plugins.gestalt.core.maches));
});
lt.plugins.gestalt.core.glsl_doc_search = (function glsl_doc_search(this$,cur){return cljs.core.conj.call(null,cur,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"glsl",new cljs.core.Keyword(null,"trigger","trigger",4248979754),lt.plugins.gestalt.core.glsl_doc_exec,new cljs.core.Keyword(null,"file-types","file-types",1727875162),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Fragment Shader",null,"Vertex Shader",null], null), null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gestalt.core","glsl-doc-search","lt.plugins.gestalt.core/glsl-doc-search",1175882494),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"types+","types+",4450069060),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gestalt.core.glsl_doc_search);
}

//# sourceMappingURL=gestalt_compiled.js.map