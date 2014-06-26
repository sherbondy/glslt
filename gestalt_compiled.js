if(!lt.util.load.provided_QMARK_('goog.ui.IdGenerator')) {
// Copyright 2008 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Generator for unique element IDs.
 *
 */

goog.provide('goog.ui.IdGenerator');



/**
 * Creates a new id generator.
 * @constructor
 * @final
 */
goog.ui.IdGenerator = function() {
};
goog.addSingletonGetter(goog.ui.IdGenerator);


/**
 * Next unique ID to use
 * @type {number}
 * @private
 */
goog.ui.IdGenerator.prototype.nextId_ = 0;


/**
 * Gets the next unique ID.
 * @return {string} The next unique identifier.
 */
goog.ui.IdGenerator.prototype.getNextUniqueId = function() {
  return ':' + (this.nextId_++).toString(36);
};
}
if(!lt.util.load.provided_QMARK_('om.dom')) {
goog.provide('om.dom');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
om.dom.a = (function() { 
var a__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.a.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var a = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return a__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
a.cljs$lang$maxFixedArity = 1;
a.cljs$lang$applyTo = (function (arglist__8931){
var opts__8424__auto__ = cljs.core.first(arglist__8931);
var children__8425__auto__ = cljs.core.rest(arglist__8931);
return a__delegate(opts__8424__auto__,children__8425__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;
/**
* @param {...*} var_args
*/
om.dom.abbr = (function() { 
var abbr__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.abbr.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var abbr = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return abbr__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
abbr.cljs$lang$maxFixedArity = 1;
abbr.cljs$lang$applyTo = (function (arglist__8932){
var opts__8424__auto__ = cljs.core.first(arglist__8932);
var children__8425__auto__ = cljs.core.rest(arglist__8932);
return abbr__delegate(opts__8424__auto__,children__8425__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;
/**
* @param {...*} var_args
*/
om.dom.address = (function() { 
var address__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.address.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var address = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return address__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
address.cljs$lang$maxFixedArity = 1;
address.cljs$lang$applyTo = (function (arglist__8933){
var opts__8424__auto__ = cljs.core.first(arglist__8933);
var children__8425__auto__ = cljs.core.rest(arglist__8933);
return address__delegate(opts__8424__auto__,children__8425__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;
/**
* @param {...*} var_args
*/
om.dom.area = (function() { 
var area__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.area.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var area = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return area__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
area.cljs$lang$maxFixedArity = 1;
area.cljs$lang$applyTo = (function (arglist__8934){
var opts__8424__auto__ = cljs.core.first(arglist__8934);
var children__8425__auto__ = cljs.core.rest(arglist__8934);
return area__delegate(opts__8424__auto__,children__8425__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;
/**
* @param {...*} var_args
*/
om.dom.article = (function() { 
var article__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.article.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var article = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return article__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
article.cljs$lang$maxFixedArity = 1;
article.cljs$lang$applyTo = (function (arglist__8935){
var opts__8424__auto__ = cljs.core.first(arglist__8935);
var children__8425__auto__ = cljs.core.rest(arglist__8935);
return article__delegate(opts__8424__auto__,children__8425__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;
/**
* @param {...*} var_args
*/
om.dom.aside = (function() { 
var aside__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.aside.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var aside = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return aside__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
aside.cljs$lang$maxFixedArity = 1;
aside.cljs$lang$applyTo = (function (arglist__8936){
var opts__8424__auto__ = cljs.core.first(arglist__8936);
var children__8425__auto__ = cljs.core.rest(arglist__8936);
return aside__delegate(opts__8424__auto__,children__8425__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;
/**
* @param {...*} var_args
*/
om.dom.audio = (function() { 
var audio__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.audio.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var audio = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return audio__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
audio.cljs$lang$maxFixedArity = 1;
audio.cljs$lang$applyTo = (function (arglist__8937){
var opts__8424__auto__ = cljs.core.first(arglist__8937);
var children__8425__auto__ = cljs.core.rest(arglist__8937);
return audio__delegate(opts__8424__auto__,children__8425__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;
/**
* @param {...*} var_args
*/
om.dom.b = (function() { 
var b__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.b.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var b = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return b__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
b.cljs$lang$maxFixedArity = 1;
b.cljs$lang$applyTo = (function (arglist__8938){
var opts__8424__auto__ = cljs.core.first(arglist__8938);
var children__8425__auto__ = cljs.core.rest(arglist__8938);
return b__delegate(opts__8424__auto__,children__8425__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;
/**
* @param {...*} var_args
*/
om.dom.base = (function() { 
var base__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.base.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var base = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return base__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
base.cljs$lang$maxFixedArity = 1;
base.cljs$lang$applyTo = (function (arglist__8939){
var opts__8424__auto__ = cljs.core.first(arglist__8939);
var children__8425__auto__ = cljs.core.rest(arglist__8939);
return base__delegate(opts__8424__auto__,children__8425__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;
/**
* @param {...*} var_args
*/
om.dom.bdi = (function() { 
var bdi__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.bdi.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var bdi = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bdi__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
bdi.cljs$lang$maxFixedArity = 1;
bdi.cljs$lang$applyTo = (function (arglist__8940){
var opts__8424__auto__ = cljs.core.first(arglist__8940);
var children__8425__auto__ = cljs.core.rest(arglist__8940);
return bdi__delegate(opts__8424__auto__,children__8425__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;
/**
* @param {...*} var_args
*/
om.dom.bdo = (function() { 
var bdo__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.bdo.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var bdo = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bdo__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
bdo.cljs$lang$maxFixedArity = 1;
bdo.cljs$lang$applyTo = (function (arglist__8941){
var opts__8424__auto__ = cljs.core.first(arglist__8941);
var children__8425__auto__ = cljs.core.rest(arglist__8941);
return bdo__delegate(opts__8424__auto__,children__8425__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;
/**
* @param {...*} var_args
*/
om.dom.big = (function() { 
var big__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.big.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var big = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return big__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
big.cljs$lang$maxFixedArity = 1;
big.cljs$lang$applyTo = (function (arglist__8942){
var opts__8424__auto__ = cljs.core.first(arglist__8942);
var children__8425__auto__ = cljs.core.rest(arglist__8942);
return big__delegate(opts__8424__auto__,children__8425__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;
/**
* @param {...*} var_args
*/
om.dom.blockquote = (function() { 
var blockquote__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.blockquote.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var blockquote = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return blockquote__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
blockquote.cljs$lang$maxFixedArity = 1;
blockquote.cljs$lang$applyTo = (function (arglist__8943){
var opts__8424__auto__ = cljs.core.first(arglist__8943);
var children__8425__auto__ = cljs.core.rest(arglist__8943);
return blockquote__delegate(opts__8424__auto__,children__8425__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;
/**
* @param {...*} var_args
*/
om.dom.body = (function() { 
var body__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.body.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var body = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return body__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
body.cljs$lang$maxFixedArity = 1;
body.cljs$lang$applyTo = (function (arglist__8944){
var opts__8424__auto__ = cljs.core.first(arglist__8944);
var children__8425__auto__ = cljs.core.rest(arglist__8944);
return body__delegate(opts__8424__auto__,children__8425__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;
/**
* @param {...*} var_args
*/
om.dom.br = (function() { 
var br__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.br.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var br = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return br__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
br.cljs$lang$maxFixedArity = 1;
br.cljs$lang$applyTo = (function (arglist__8945){
var opts__8424__auto__ = cljs.core.first(arglist__8945);
var children__8425__auto__ = cljs.core.rest(arglist__8945);
return br__delegate(opts__8424__auto__,children__8425__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;
/**
* @param {...*} var_args
*/
om.dom.button = (function() { 
var button__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.button.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var button = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return button__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
button.cljs$lang$maxFixedArity = 1;
button.cljs$lang$applyTo = (function (arglist__8946){
var opts__8424__auto__ = cljs.core.first(arglist__8946);
var children__8425__auto__ = cljs.core.rest(arglist__8946);
return button__delegate(opts__8424__auto__,children__8425__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;
/**
* @param {...*} var_args
*/
om.dom.canvas = (function() { 
var canvas__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.canvas.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var canvas = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return canvas__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
canvas.cljs$lang$maxFixedArity = 1;
canvas.cljs$lang$applyTo = (function (arglist__8947){
var opts__8424__auto__ = cljs.core.first(arglist__8947);
var children__8425__auto__ = cljs.core.rest(arglist__8947);
return canvas__delegate(opts__8424__auto__,children__8425__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;
/**
* @param {...*} var_args
*/
om.dom.caption = (function() { 
var caption__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.caption.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var caption = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return caption__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
caption.cljs$lang$maxFixedArity = 1;
caption.cljs$lang$applyTo = (function (arglist__8948){
var opts__8424__auto__ = cljs.core.first(arglist__8948);
var children__8425__auto__ = cljs.core.rest(arglist__8948);
return caption__delegate(opts__8424__auto__,children__8425__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;
/**
* @param {...*} var_args
*/
om.dom.cite = (function() { 
var cite__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.cite.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var cite = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return cite__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
cite.cljs$lang$maxFixedArity = 1;
cite.cljs$lang$applyTo = (function (arglist__8949){
var opts__8424__auto__ = cljs.core.first(arglist__8949);
var children__8425__auto__ = cljs.core.rest(arglist__8949);
return cite__delegate(opts__8424__auto__,children__8425__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;
/**
* @param {...*} var_args
*/
om.dom.code = (function() { 
var code__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.code.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var code = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return code__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
code.cljs$lang$maxFixedArity = 1;
code.cljs$lang$applyTo = (function (arglist__8950){
var opts__8424__auto__ = cljs.core.first(arglist__8950);
var children__8425__auto__ = cljs.core.rest(arglist__8950);
return code__delegate(opts__8424__auto__,children__8425__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;
/**
* @param {...*} var_args
*/
om.dom.col = (function() { 
var col__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.col.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var col = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return col__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
col.cljs$lang$maxFixedArity = 1;
col.cljs$lang$applyTo = (function (arglist__8951){
var opts__8424__auto__ = cljs.core.first(arglist__8951);
var children__8425__auto__ = cljs.core.rest(arglist__8951);
return col__delegate(opts__8424__auto__,children__8425__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;
/**
* @param {...*} var_args
*/
om.dom.colgroup = (function() { 
var colgroup__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.colgroup.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var colgroup = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return colgroup__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
colgroup.cljs$lang$maxFixedArity = 1;
colgroup.cljs$lang$applyTo = (function (arglist__8952){
var opts__8424__auto__ = cljs.core.first(arglist__8952);
var children__8425__auto__ = cljs.core.rest(arglist__8952);
return colgroup__delegate(opts__8424__auto__,children__8425__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;
/**
* @param {...*} var_args
*/
om.dom.data = (function() { 
var data__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.data.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var data = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return data__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
data.cljs$lang$maxFixedArity = 1;
data.cljs$lang$applyTo = (function (arglist__8953){
var opts__8424__auto__ = cljs.core.first(arglist__8953);
var children__8425__auto__ = cljs.core.rest(arglist__8953);
return data__delegate(opts__8424__auto__,children__8425__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;
/**
* @param {...*} var_args
*/
om.dom.datalist = (function() { 
var datalist__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.datalist.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var datalist = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return datalist__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
datalist.cljs$lang$maxFixedArity = 1;
datalist.cljs$lang$applyTo = (function (arglist__8954){
var opts__8424__auto__ = cljs.core.first(arglist__8954);
var children__8425__auto__ = cljs.core.rest(arglist__8954);
return datalist__delegate(opts__8424__auto__,children__8425__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;
/**
* @param {...*} var_args
*/
om.dom.dd = (function() { 
var dd__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.dd.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var dd = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dd__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
dd.cljs$lang$maxFixedArity = 1;
dd.cljs$lang$applyTo = (function (arglist__8955){
var opts__8424__auto__ = cljs.core.first(arglist__8955);
var children__8425__auto__ = cljs.core.rest(arglist__8955);
return dd__delegate(opts__8424__auto__,children__8425__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;
/**
* @param {...*} var_args
*/
om.dom.del = (function() { 
var del__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.del.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var del = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return del__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
del.cljs$lang$maxFixedArity = 1;
del.cljs$lang$applyTo = (function (arglist__8956){
var opts__8424__auto__ = cljs.core.first(arglist__8956);
var children__8425__auto__ = cljs.core.rest(arglist__8956);
return del__delegate(opts__8424__auto__,children__8425__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;
/**
* @param {...*} var_args
*/
om.dom.dfn = (function() { 
var dfn__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.dfn.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var dfn = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dfn__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
dfn.cljs$lang$maxFixedArity = 1;
dfn.cljs$lang$applyTo = (function (arglist__8957){
var opts__8424__auto__ = cljs.core.first(arglist__8957);
var children__8425__auto__ = cljs.core.rest(arglist__8957);
return dfn__delegate(opts__8424__auto__,children__8425__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;
/**
* @param {...*} var_args
*/
om.dom.div = (function() { 
var div__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.div.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var div = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return div__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
div.cljs$lang$maxFixedArity = 1;
div.cljs$lang$applyTo = (function (arglist__8958){
var opts__8424__auto__ = cljs.core.first(arglist__8958);
var children__8425__auto__ = cljs.core.rest(arglist__8958);
return div__delegate(opts__8424__auto__,children__8425__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;
/**
* @param {...*} var_args
*/
om.dom.dl = (function() { 
var dl__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.dl.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var dl = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dl__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
dl.cljs$lang$maxFixedArity = 1;
dl.cljs$lang$applyTo = (function (arglist__8959){
var opts__8424__auto__ = cljs.core.first(arglist__8959);
var children__8425__auto__ = cljs.core.rest(arglist__8959);
return dl__delegate(opts__8424__auto__,children__8425__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;
/**
* @param {...*} var_args
*/
om.dom.dt = (function() { 
var dt__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.dt.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var dt = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dt__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
dt.cljs$lang$maxFixedArity = 1;
dt.cljs$lang$applyTo = (function (arglist__8960){
var opts__8424__auto__ = cljs.core.first(arglist__8960);
var children__8425__auto__ = cljs.core.rest(arglist__8960);
return dt__delegate(opts__8424__auto__,children__8425__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;
/**
* @param {...*} var_args
*/
om.dom.em = (function() { 
var em__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.em.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var em = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return em__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
em.cljs$lang$maxFixedArity = 1;
em.cljs$lang$applyTo = (function (arglist__8961){
var opts__8424__auto__ = cljs.core.first(arglist__8961);
var children__8425__auto__ = cljs.core.rest(arglist__8961);
return em__delegate(opts__8424__auto__,children__8425__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;
/**
* @param {...*} var_args
*/
om.dom.embed = (function() { 
var embed__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.embed.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var embed = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return embed__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
embed.cljs$lang$maxFixedArity = 1;
embed.cljs$lang$applyTo = (function (arglist__8962){
var opts__8424__auto__ = cljs.core.first(arglist__8962);
var children__8425__auto__ = cljs.core.rest(arglist__8962);
return embed__delegate(opts__8424__auto__,children__8425__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;
/**
* @param {...*} var_args
*/
om.dom.fieldset = (function() { 
var fieldset__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.fieldset.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var fieldset = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return fieldset__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
fieldset.cljs$lang$maxFixedArity = 1;
fieldset.cljs$lang$applyTo = (function (arglist__8963){
var opts__8424__auto__ = cljs.core.first(arglist__8963);
var children__8425__auto__ = cljs.core.rest(arglist__8963);
return fieldset__delegate(opts__8424__auto__,children__8425__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;
/**
* @param {...*} var_args
*/
om.dom.figcaption = (function() { 
var figcaption__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.figcaption.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var figcaption = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return figcaption__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
figcaption.cljs$lang$maxFixedArity = 1;
figcaption.cljs$lang$applyTo = (function (arglist__8964){
var opts__8424__auto__ = cljs.core.first(arglist__8964);
var children__8425__auto__ = cljs.core.rest(arglist__8964);
return figcaption__delegate(opts__8424__auto__,children__8425__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;
/**
* @param {...*} var_args
*/
om.dom.figure = (function() { 
var figure__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.figure.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var figure = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return figure__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
figure.cljs$lang$maxFixedArity = 1;
figure.cljs$lang$applyTo = (function (arglist__8965){
var opts__8424__auto__ = cljs.core.first(arglist__8965);
var children__8425__auto__ = cljs.core.rest(arglist__8965);
return figure__delegate(opts__8424__auto__,children__8425__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;
/**
* @param {...*} var_args
*/
om.dom.footer = (function() { 
var footer__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.footer.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var footer = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return footer__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
footer.cljs$lang$maxFixedArity = 1;
footer.cljs$lang$applyTo = (function (arglist__8966){
var opts__8424__auto__ = cljs.core.first(arglist__8966);
var children__8425__auto__ = cljs.core.rest(arglist__8966);
return footer__delegate(opts__8424__auto__,children__8425__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;
/**
* @param {...*} var_args
*/
om.dom.form = (function() { 
var form__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.form.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var form = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
form.cljs$lang$maxFixedArity = 1;
form.cljs$lang$applyTo = (function (arglist__8967){
var opts__8424__auto__ = cljs.core.first(arglist__8967);
var children__8425__auto__ = cljs.core.rest(arglist__8967);
return form__delegate(opts__8424__auto__,children__8425__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;
/**
* @param {...*} var_args
*/
om.dom.h1 = (function() { 
var h1__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.h1.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var h1 = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return h1__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
h1.cljs$lang$maxFixedArity = 1;
h1.cljs$lang$applyTo = (function (arglist__8968){
var opts__8424__auto__ = cljs.core.first(arglist__8968);
var children__8425__auto__ = cljs.core.rest(arglist__8968);
return h1__delegate(opts__8424__auto__,children__8425__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;
/**
* @param {...*} var_args
*/
om.dom.h2 = (function() { 
var h2__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.h2.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var h2 = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return h2__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
h2.cljs$lang$maxFixedArity = 1;
h2.cljs$lang$applyTo = (function (arglist__8969){
var opts__8424__auto__ = cljs.core.first(arglist__8969);
var children__8425__auto__ = cljs.core.rest(arglist__8969);
return h2__delegate(opts__8424__auto__,children__8425__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;
/**
* @param {...*} var_args
*/
om.dom.h3 = (function() { 
var h3__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.h3.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var h3 = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return h3__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
h3.cljs$lang$maxFixedArity = 1;
h3.cljs$lang$applyTo = (function (arglist__8970){
var opts__8424__auto__ = cljs.core.first(arglist__8970);
var children__8425__auto__ = cljs.core.rest(arglist__8970);
return h3__delegate(opts__8424__auto__,children__8425__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;
/**
* @param {...*} var_args
*/
om.dom.h4 = (function() { 
var h4__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.h4.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var h4 = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return h4__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
h4.cljs$lang$maxFixedArity = 1;
h4.cljs$lang$applyTo = (function (arglist__8971){
var opts__8424__auto__ = cljs.core.first(arglist__8971);
var children__8425__auto__ = cljs.core.rest(arglist__8971);
return h4__delegate(opts__8424__auto__,children__8425__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;
/**
* @param {...*} var_args
*/
om.dom.h5 = (function() { 
var h5__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.h5.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var h5 = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return h5__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
h5.cljs$lang$maxFixedArity = 1;
h5.cljs$lang$applyTo = (function (arglist__8972){
var opts__8424__auto__ = cljs.core.first(arglist__8972);
var children__8425__auto__ = cljs.core.rest(arglist__8972);
return h5__delegate(opts__8424__auto__,children__8425__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;
/**
* @param {...*} var_args
*/
om.dom.h6 = (function() { 
var h6__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.h6.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var h6 = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return h6__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
h6.cljs$lang$maxFixedArity = 1;
h6.cljs$lang$applyTo = (function (arglist__8973){
var opts__8424__auto__ = cljs.core.first(arglist__8973);
var children__8425__auto__ = cljs.core.rest(arglist__8973);
return h6__delegate(opts__8424__auto__,children__8425__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;
/**
* @param {...*} var_args
*/
om.dom.head = (function() { 
var head__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.head.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var head = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__8974){
var opts__8424__auto__ = cljs.core.first(arglist__8974);
var children__8425__auto__ = cljs.core.rest(arglist__8974);
return head__delegate(opts__8424__auto__,children__8425__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* @param {...*} var_args
*/
om.dom.header = (function() { 
var header__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.header.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var header = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return header__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
header.cljs$lang$maxFixedArity = 1;
header.cljs$lang$applyTo = (function (arglist__8975){
var opts__8424__auto__ = cljs.core.first(arglist__8975);
var children__8425__auto__ = cljs.core.rest(arglist__8975);
return header__delegate(opts__8424__auto__,children__8425__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;
/**
* @param {...*} var_args
*/
om.dom.hr = (function() { 
var hr__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.hr.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var hr = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return hr__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
hr.cljs$lang$maxFixedArity = 1;
hr.cljs$lang$applyTo = (function (arglist__8976){
var opts__8424__auto__ = cljs.core.first(arglist__8976);
var children__8425__auto__ = cljs.core.rest(arglist__8976);
return hr__delegate(opts__8424__auto__,children__8425__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;
/**
* @param {...*} var_args
*/
om.dom.html = (function() { 
var html__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.html.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var html = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return html__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
html.cljs$lang$maxFixedArity = 1;
html.cljs$lang$applyTo = (function (arglist__8977){
var opts__8424__auto__ = cljs.core.first(arglist__8977);
var children__8425__auto__ = cljs.core.rest(arglist__8977);
return html__delegate(opts__8424__auto__,children__8425__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
/**
* @param {...*} var_args
*/
om.dom.i = (function() { 
var i__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.i.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var i = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return i__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
i.cljs$lang$maxFixedArity = 1;
i.cljs$lang$applyTo = (function (arglist__8978){
var opts__8424__auto__ = cljs.core.first(arglist__8978);
var children__8425__auto__ = cljs.core.rest(arglist__8978);
return i__delegate(opts__8424__auto__,children__8425__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;
/**
* @param {...*} var_args
*/
om.dom.iframe = (function() { 
var iframe__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.iframe.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var iframe = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return iframe__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
iframe.cljs$lang$maxFixedArity = 1;
iframe.cljs$lang$applyTo = (function (arglist__8979){
var opts__8424__auto__ = cljs.core.first(arglist__8979);
var children__8425__auto__ = cljs.core.rest(arglist__8979);
return iframe__delegate(opts__8424__auto__,children__8425__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;
/**
* @param {...*} var_args
*/
om.dom.img = (function() { 
var img__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.img.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var img = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return img__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
img.cljs$lang$maxFixedArity = 1;
img.cljs$lang$applyTo = (function (arglist__8980){
var opts__8424__auto__ = cljs.core.first(arglist__8980);
var children__8425__auto__ = cljs.core.rest(arglist__8980);
return img__delegate(opts__8424__auto__,children__8425__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;
/**
* @param {...*} var_args
*/
om.dom.ins = (function() { 
var ins__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.ins.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var ins = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return ins__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
ins.cljs$lang$maxFixedArity = 1;
ins.cljs$lang$applyTo = (function (arglist__8981){
var opts__8424__auto__ = cljs.core.first(arglist__8981);
var children__8425__auto__ = cljs.core.rest(arglist__8981);
return ins__delegate(opts__8424__auto__,children__8425__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;
/**
* @param {...*} var_args
*/
om.dom.kbd = (function() { 
var kbd__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.kbd.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var kbd = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return kbd__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
kbd.cljs$lang$maxFixedArity = 1;
kbd.cljs$lang$applyTo = (function (arglist__8982){
var opts__8424__auto__ = cljs.core.first(arglist__8982);
var children__8425__auto__ = cljs.core.rest(arglist__8982);
return kbd__delegate(opts__8424__auto__,children__8425__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;
/**
* @param {...*} var_args
*/
om.dom.keygen = (function() { 
var keygen__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.keygen.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var keygen = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return keygen__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
keygen.cljs$lang$maxFixedArity = 1;
keygen.cljs$lang$applyTo = (function (arglist__8983){
var opts__8424__auto__ = cljs.core.first(arglist__8983);
var children__8425__auto__ = cljs.core.rest(arglist__8983);
return keygen__delegate(opts__8424__auto__,children__8425__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;
/**
* @param {...*} var_args
*/
om.dom.label = (function() { 
var label__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.label.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var label = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return label__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
label.cljs$lang$maxFixedArity = 1;
label.cljs$lang$applyTo = (function (arglist__8984){
var opts__8424__auto__ = cljs.core.first(arglist__8984);
var children__8425__auto__ = cljs.core.rest(arglist__8984);
return label__delegate(opts__8424__auto__,children__8425__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;
/**
* @param {...*} var_args
*/
om.dom.legend = (function() { 
var legend__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.legend.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var legend = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return legend__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
legend.cljs$lang$maxFixedArity = 1;
legend.cljs$lang$applyTo = (function (arglist__8985){
var opts__8424__auto__ = cljs.core.first(arglist__8985);
var children__8425__auto__ = cljs.core.rest(arglist__8985);
return legend__delegate(opts__8424__auto__,children__8425__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;
/**
* @param {...*} var_args
*/
om.dom.li = (function() { 
var li__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.li.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var li = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return li__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
li.cljs$lang$maxFixedArity = 1;
li.cljs$lang$applyTo = (function (arglist__8986){
var opts__8424__auto__ = cljs.core.first(arglist__8986);
var children__8425__auto__ = cljs.core.rest(arglist__8986);
return li__delegate(opts__8424__auto__,children__8425__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;
/**
* @param {...*} var_args
*/
om.dom.link = (function() { 
var link__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.link.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var link = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
link.cljs$lang$maxFixedArity = 1;
link.cljs$lang$applyTo = (function (arglist__8987){
var opts__8424__auto__ = cljs.core.first(arglist__8987);
var children__8425__auto__ = cljs.core.rest(arglist__8987);
return link__delegate(opts__8424__auto__,children__8425__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;
/**
* @param {...*} var_args
*/
om.dom.main = (function() { 
var main__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.main.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var main = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return main__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
main.cljs$lang$maxFixedArity = 1;
main.cljs$lang$applyTo = (function (arglist__8988){
var opts__8424__auto__ = cljs.core.first(arglist__8988);
var children__8425__auto__ = cljs.core.rest(arglist__8988);
return main__delegate(opts__8424__auto__,children__8425__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;
/**
* @param {...*} var_args
*/
om.dom.map = (function() { 
var map__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.map.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var map = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return map__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
map.cljs$lang$maxFixedArity = 1;
map.cljs$lang$applyTo = (function (arglist__8989){
var opts__8424__auto__ = cljs.core.first(arglist__8989);
var children__8425__auto__ = cljs.core.rest(arglist__8989);
return map__delegate(opts__8424__auto__,children__8425__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;
/**
* @param {...*} var_args
*/
om.dom.mark = (function() { 
var mark__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.mark.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var mark = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mark__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
mark.cljs$lang$maxFixedArity = 1;
mark.cljs$lang$applyTo = (function (arglist__8990){
var opts__8424__auto__ = cljs.core.first(arglist__8990);
var children__8425__auto__ = cljs.core.rest(arglist__8990);
return mark__delegate(opts__8424__auto__,children__8425__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;
/**
* @param {...*} var_args
*/
om.dom.menu = (function() { 
var menu__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.menu.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var menu = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return menu__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
menu.cljs$lang$maxFixedArity = 1;
menu.cljs$lang$applyTo = (function (arglist__8991){
var opts__8424__auto__ = cljs.core.first(arglist__8991);
var children__8425__auto__ = cljs.core.rest(arglist__8991);
return menu__delegate(opts__8424__auto__,children__8425__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;
/**
* @param {...*} var_args
*/
om.dom.menuitem = (function() { 
var menuitem__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.menuitem.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var menuitem = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return menuitem__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
menuitem.cljs$lang$maxFixedArity = 1;
menuitem.cljs$lang$applyTo = (function (arglist__8992){
var opts__8424__auto__ = cljs.core.first(arglist__8992);
var children__8425__auto__ = cljs.core.rest(arglist__8992);
return menuitem__delegate(opts__8424__auto__,children__8425__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;
/**
* @param {...*} var_args
*/
om.dom.meta = (function() { 
var meta__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.meta.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var meta = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return meta__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
meta.cljs$lang$maxFixedArity = 1;
meta.cljs$lang$applyTo = (function (arglist__8993){
var opts__8424__auto__ = cljs.core.first(arglist__8993);
var children__8425__auto__ = cljs.core.rest(arglist__8993);
return meta__delegate(opts__8424__auto__,children__8425__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;
/**
* @param {...*} var_args
*/
om.dom.meter = (function() { 
var meter__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.meter.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var meter = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return meter__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
meter.cljs$lang$maxFixedArity = 1;
meter.cljs$lang$applyTo = (function (arglist__8994){
var opts__8424__auto__ = cljs.core.first(arglist__8994);
var children__8425__auto__ = cljs.core.rest(arglist__8994);
return meter__delegate(opts__8424__auto__,children__8425__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;
/**
* @param {...*} var_args
*/
om.dom.nav = (function() { 
var nav__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.nav.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var nav = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return nav__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
nav.cljs$lang$maxFixedArity = 1;
nav.cljs$lang$applyTo = (function (arglist__8995){
var opts__8424__auto__ = cljs.core.first(arglist__8995);
var children__8425__auto__ = cljs.core.rest(arglist__8995);
return nav__delegate(opts__8424__auto__,children__8425__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;
/**
* @param {...*} var_args
*/
om.dom.noscript = (function() { 
var noscript__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.noscript.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var noscript = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return noscript__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
noscript.cljs$lang$maxFixedArity = 1;
noscript.cljs$lang$applyTo = (function (arglist__8996){
var opts__8424__auto__ = cljs.core.first(arglist__8996);
var children__8425__auto__ = cljs.core.rest(arglist__8996);
return noscript__delegate(opts__8424__auto__,children__8425__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;
/**
* @param {...*} var_args
*/
om.dom.object = (function() { 
var object__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.object.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var object = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return object__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
object.cljs$lang$maxFixedArity = 1;
object.cljs$lang$applyTo = (function (arglist__8997){
var opts__8424__auto__ = cljs.core.first(arglist__8997);
var children__8425__auto__ = cljs.core.rest(arglist__8997);
return object__delegate(opts__8424__auto__,children__8425__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;
/**
* @param {...*} var_args
*/
om.dom.ol = (function() { 
var ol__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.ol.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var ol = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return ol__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
ol.cljs$lang$maxFixedArity = 1;
ol.cljs$lang$applyTo = (function (arglist__8998){
var opts__8424__auto__ = cljs.core.first(arglist__8998);
var children__8425__auto__ = cljs.core.rest(arglist__8998);
return ol__delegate(opts__8424__auto__,children__8425__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;
/**
* @param {...*} var_args
*/
om.dom.optgroup = (function() { 
var optgroup__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.optgroup.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var optgroup = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return optgroup__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
optgroup.cljs$lang$maxFixedArity = 1;
optgroup.cljs$lang$applyTo = (function (arglist__8999){
var opts__8424__auto__ = cljs.core.first(arglist__8999);
var children__8425__auto__ = cljs.core.rest(arglist__8999);
return optgroup__delegate(opts__8424__auto__,children__8425__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;
/**
* @param {...*} var_args
*/
om.dom.output = (function() { 
var output__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.output.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var output = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return output__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
output.cljs$lang$maxFixedArity = 1;
output.cljs$lang$applyTo = (function (arglist__9000){
var opts__8424__auto__ = cljs.core.first(arglist__9000);
var children__8425__auto__ = cljs.core.rest(arglist__9000);
return output__delegate(opts__8424__auto__,children__8425__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;
/**
* @param {...*} var_args
*/
om.dom.p = (function() { 
var p__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.p.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var p = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return p__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
p.cljs$lang$maxFixedArity = 1;
p.cljs$lang$applyTo = (function (arglist__9001){
var opts__8424__auto__ = cljs.core.first(arglist__9001);
var children__8425__auto__ = cljs.core.rest(arglist__9001);
return p__delegate(opts__8424__auto__,children__8425__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;
/**
* @param {...*} var_args
*/
om.dom.param = (function() { 
var param__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.param.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var param = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return param__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
param.cljs$lang$maxFixedArity = 1;
param.cljs$lang$applyTo = (function (arglist__9002){
var opts__8424__auto__ = cljs.core.first(arglist__9002);
var children__8425__auto__ = cljs.core.rest(arglist__9002);
return param__delegate(opts__8424__auto__,children__8425__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;
/**
* @param {...*} var_args
*/
om.dom.pre = (function() { 
var pre__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.pre.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var pre = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return pre__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
pre.cljs$lang$maxFixedArity = 1;
pre.cljs$lang$applyTo = (function (arglist__9003){
var opts__8424__auto__ = cljs.core.first(arglist__9003);
var children__8425__auto__ = cljs.core.rest(arglist__9003);
return pre__delegate(opts__8424__auto__,children__8425__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;
/**
* @param {...*} var_args
*/
om.dom.progress = (function() { 
var progress__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.progress.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var progress = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return progress__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
progress.cljs$lang$maxFixedArity = 1;
progress.cljs$lang$applyTo = (function (arglist__9004){
var opts__8424__auto__ = cljs.core.first(arglist__9004);
var children__8425__auto__ = cljs.core.rest(arglist__9004);
return progress__delegate(opts__8424__auto__,children__8425__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;
/**
* @param {...*} var_args
*/
om.dom.q = (function() { 
var q__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.q.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var q = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return q__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
q.cljs$lang$maxFixedArity = 1;
q.cljs$lang$applyTo = (function (arglist__9005){
var opts__8424__auto__ = cljs.core.first(arglist__9005);
var children__8425__auto__ = cljs.core.rest(arglist__9005);
return q__delegate(opts__8424__auto__,children__8425__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
/**
* @param {...*} var_args
*/
om.dom.rp = (function() { 
var rp__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.rp.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var rp = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return rp__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
rp.cljs$lang$maxFixedArity = 1;
rp.cljs$lang$applyTo = (function (arglist__9006){
var opts__8424__auto__ = cljs.core.first(arglist__9006);
var children__8425__auto__ = cljs.core.rest(arglist__9006);
return rp__delegate(opts__8424__auto__,children__8425__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;
/**
* @param {...*} var_args
*/
om.dom.rt = (function() { 
var rt__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.rt.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var rt = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return rt__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
rt.cljs$lang$maxFixedArity = 1;
rt.cljs$lang$applyTo = (function (arglist__9007){
var opts__8424__auto__ = cljs.core.first(arglist__9007);
var children__8425__auto__ = cljs.core.rest(arglist__9007);
return rt__delegate(opts__8424__auto__,children__8425__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;
/**
* @param {...*} var_args
*/
om.dom.ruby = (function() { 
var ruby__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.ruby.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var ruby = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return ruby__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
ruby.cljs$lang$maxFixedArity = 1;
ruby.cljs$lang$applyTo = (function (arglist__9008){
var opts__8424__auto__ = cljs.core.first(arglist__9008);
var children__8425__auto__ = cljs.core.rest(arglist__9008);
return ruby__delegate(opts__8424__auto__,children__8425__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;
/**
* @param {...*} var_args
*/
om.dom.s = (function() { 
var s__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.s.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var s = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return s__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
s.cljs$lang$maxFixedArity = 1;
s.cljs$lang$applyTo = (function (arglist__9009){
var opts__8424__auto__ = cljs.core.first(arglist__9009);
var children__8425__auto__ = cljs.core.rest(arglist__9009);
return s__delegate(opts__8424__auto__,children__8425__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;
/**
* @param {...*} var_args
*/
om.dom.samp = (function() { 
var samp__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.samp.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var samp = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return samp__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
samp.cljs$lang$maxFixedArity = 1;
samp.cljs$lang$applyTo = (function (arglist__9010){
var opts__8424__auto__ = cljs.core.first(arglist__9010);
var children__8425__auto__ = cljs.core.rest(arglist__9010);
return samp__delegate(opts__8424__auto__,children__8425__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;
/**
* @param {...*} var_args
*/
om.dom.script = (function() { 
var script__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.script.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var script = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return script__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
script.cljs$lang$maxFixedArity = 1;
script.cljs$lang$applyTo = (function (arglist__9011){
var opts__8424__auto__ = cljs.core.first(arglist__9011);
var children__8425__auto__ = cljs.core.rest(arglist__9011);
return script__delegate(opts__8424__auto__,children__8425__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;
/**
* @param {...*} var_args
*/
om.dom.section = (function() { 
var section__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.section.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var section = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return section__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
section.cljs$lang$maxFixedArity = 1;
section.cljs$lang$applyTo = (function (arglist__9012){
var opts__8424__auto__ = cljs.core.first(arglist__9012);
var children__8425__auto__ = cljs.core.rest(arglist__9012);
return section__delegate(opts__8424__auto__,children__8425__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;
/**
* @param {...*} var_args
*/
om.dom.select = (function() { 
var select__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.select.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var select = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return select__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
select.cljs$lang$maxFixedArity = 1;
select.cljs$lang$applyTo = (function (arglist__9013){
var opts__8424__auto__ = cljs.core.first(arglist__9013);
var children__8425__auto__ = cljs.core.rest(arglist__9013);
return select__delegate(opts__8424__auto__,children__8425__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;
/**
* @param {...*} var_args
*/
om.dom.small = (function() { 
var small__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.small.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var small = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return small__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
small.cljs$lang$maxFixedArity = 1;
small.cljs$lang$applyTo = (function (arglist__9014){
var opts__8424__auto__ = cljs.core.first(arglist__9014);
var children__8425__auto__ = cljs.core.rest(arglist__9014);
return small__delegate(opts__8424__auto__,children__8425__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;
/**
* @param {...*} var_args
*/
om.dom.source = (function() { 
var source__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.source.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var source = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return source__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
source.cljs$lang$maxFixedArity = 1;
source.cljs$lang$applyTo = (function (arglist__9015){
var opts__8424__auto__ = cljs.core.first(arglist__9015);
var children__8425__auto__ = cljs.core.rest(arglist__9015);
return source__delegate(opts__8424__auto__,children__8425__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;
/**
* @param {...*} var_args
*/
om.dom.span = (function() { 
var span__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.span.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var span = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return span__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
span.cljs$lang$maxFixedArity = 1;
span.cljs$lang$applyTo = (function (arglist__9016){
var opts__8424__auto__ = cljs.core.first(arglist__9016);
var children__8425__auto__ = cljs.core.rest(arglist__9016);
return span__delegate(opts__8424__auto__,children__8425__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;
/**
* @param {...*} var_args
*/
om.dom.strong = (function() { 
var strong__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.strong.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var strong = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return strong__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
strong.cljs$lang$maxFixedArity = 1;
strong.cljs$lang$applyTo = (function (arglist__9017){
var opts__8424__auto__ = cljs.core.first(arglist__9017);
var children__8425__auto__ = cljs.core.rest(arglist__9017);
return strong__delegate(opts__8424__auto__,children__8425__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;
/**
* @param {...*} var_args
*/
om.dom.style = (function() { 
var style__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.style.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var style = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return style__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
style.cljs$lang$maxFixedArity = 1;
style.cljs$lang$applyTo = (function (arglist__9018){
var opts__8424__auto__ = cljs.core.first(arglist__9018);
var children__8425__auto__ = cljs.core.rest(arglist__9018);
return style__delegate(opts__8424__auto__,children__8425__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;
/**
* @param {...*} var_args
*/
om.dom.sub = (function() { 
var sub__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.sub.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var sub = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return sub__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
sub.cljs$lang$maxFixedArity = 1;
sub.cljs$lang$applyTo = (function (arglist__9019){
var opts__8424__auto__ = cljs.core.first(arglist__9019);
var children__8425__auto__ = cljs.core.rest(arglist__9019);
return sub__delegate(opts__8424__auto__,children__8425__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;
/**
* @param {...*} var_args
*/
om.dom.summary = (function() { 
var summary__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.summary.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var summary = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return summary__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
summary.cljs$lang$maxFixedArity = 1;
summary.cljs$lang$applyTo = (function (arglist__9020){
var opts__8424__auto__ = cljs.core.first(arglist__9020);
var children__8425__auto__ = cljs.core.rest(arglist__9020);
return summary__delegate(opts__8424__auto__,children__8425__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;
/**
* @param {...*} var_args
*/
om.dom.sup = (function() { 
var sup__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.sup.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var sup = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return sup__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
sup.cljs$lang$maxFixedArity = 1;
sup.cljs$lang$applyTo = (function (arglist__9021){
var opts__8424__auto__ = cljs.core.first(arglist__9021);
var children__8425__auto__ = cljs.core.rest(arglist__9021);
return sup__delegate(opts__8424__auto__,children__8425__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;
/**
* @param {...*} var_args
*/
om.dom.table = (function() { 
var table__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.table.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var table = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return table__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
table.cljs$lang$maxFixedArity = 1;
table.cljs$lang$applyTo = (function (arglist__9022){
var opts__8424__auto__ = cljs.core.first(arglist__9022);
var children__8425__auto__ = cljs.core.rest(arglist__9022);
return table__delegate(opts__8424__auto__,children__8425__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;
/**
* @param {...*} var_args
*/
om.dom.tbody = (function() { 
var tbody__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.tbody.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var tbody = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return tbody__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
tbody.cljs$lang$maxFixedArity = 1;
tbody.cljs$lang$applyTo = (function (arglist__9023){
var opts__8424__auto__ = cljs.core.first(arglist__9023);
var children__8425__auto__ = cljs.core.rest(arglist__9023);
return tbody__delegate(opts__8424__auto__,children__8425__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;
/**
* @param {...*} var_args
*/
om.dom.td = (function() { 
var td__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.td.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var td = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return td__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
td.cljs$lang$maxFixedArity = 1;
td.cljs$lang$applyTo = (function (arglist__9024){
var opts__8424__auto__ = cljs.core.first(arglist__9024);
var children__8425__auto__ = cljs.core.rest(arglist__9024);
return td__delegate(opts__8424__auto__,children__8425__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;
/**
* @param {...*} var_args
*/
om.dom.tfoot = (function() { 
var tfoot__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.tfoot.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var tfoot = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return tfoot__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
tfoot.cljs$lang$maxFixedArity = 1;
tfoot.cljs$lang$applyTo = (function (arglist__9025){
var opts__8424__auto__ = cljs.core.first(arglist__9025);
var children__8425__auto__ = cljs.core.rest(arglist__9025);
return tfoot__delegate(opts__8424__auto__,children__8425__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;
/**
* @param {...*} var_args
*/
om.dom.th = (function() { 
var th__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.th.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var th = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return th__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
th.cljs$lang$maxFixedArity = 1;
th.cljs$lang$applyTo = (function (arglist__9026){
var opts__8424__auto__ = cljs.core.first(arglist__9026);
var children__8425__auto__ = cljs.core.rest(arglist__9026);
return th__delegate(opts__8424__auto__,children__8425__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;
/**
* @param {...*} var_args
*/
om.dom.thead = (function() { 
var thead__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.thead.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var thead = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return thead__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
thead.cljs$lang$maxFixedArity = 1;
thead.cljs$lang$applyTo = (function (arglist__9027){
var opts__8424__auto__ = cljs.core.first(arglist__9027);
var children__8425__auto__ = cljs.core.rest(arglist__9027);
return thead__delegate(opts__8424__auto__,children__8425__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;
/**
* @param {...*} var_args
*/
om.dom.time = (function() { 
var time__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.time.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var time = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return time__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
time.cljs$lang$maxFixedArity = 1;
time.cljs$lang$applyTo = (function (arglist__9028){
var opts__8424__auto__ = cljs.core.first(arglist__9028);
var children__8425__auto__ = cljs.core.rest(arglist__9028);
return time__delegate(opts__8424__auto__,children__8425__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;
/**
* @param {...*} var_args
*/
om.dom.title = (function() { 
var title__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.title.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var title = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return title__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
title.cljs$lang$maxFixedArity = 1;
title.cljs$lang$applyTo = (function (arglist__9029){
var opts__8424__auto__ = cljs.core.first(arglist__9029);
var children__8425__auto__ = cljs.core.rest(arglist__9029);
return title__delegate(opts__8424__auto__,children__8425__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;
/**
* @param {...*} var_args
*/
om.dom.tr = (function() { 
var tr__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.tr.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var tr = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return tr__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
tr.cljs$lang$maxFixedArity = 1;
tr.cljs$lang$applyTo = (function (arglist__9030){
var opts__8424__auto__ = cljs.core.first(arglist__9030);
var children__8425__auto__ = cljs.core.rest(arglist__9030);
return tr__delegate(opts__8424__auto__,children__8425__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;
/**
* @param {...*} var_args
*/
om.dom.track = (function() { 
var track__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.track.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var track = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return track__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
track.cljs$lang$maxFixedArity = 1;
track.cljs$lang$applyTo = (function (arglist__9031){
var opts__8424__auto__ = cljs.core.first(arglist__9031);
var children__8425__auto__ = cljs.core.rest(arglist__9031);
return track__delegate(opts__8424__auto__,children__8425__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;
/**
* @param {...*} var_args
*/
om.dom.u = (function() { 
var u__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.u.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var u = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return u__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
u.cljs$lang$maxFixedArity = 1;
u.cljs$lang$applyTo = (function (arglist__9032){
var opts__8424__auto__ = cljs.core.first(arglist__9032);
var children__8425__auto__ = cljs.core.rest(arglist__9032);
return u__delegate(opts__8424__auto__,children__8425__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;
/**
* @param {...*} var_args
*/
om.dom.ul = (function() { 
var ul__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.ul.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var ul = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return ul__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
ul.cljs$lang$maxFixedArity = 1;
ul.cljs$lang$applyTo = (function (arglist__9033){
var opts__8424__auto__ = cljs.core.first(arglist__9033);
var children__8425__auto__ = cljs.core.rest(arglist__9033);
return ul__delegate(opts__8424__auto__,children__8425__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;
/**
* @param {...*} var_args
*/
om.dom.var$ = (function() { 
var var$__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.var$.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var var$ = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return var$__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
var$.cljs$lang$maxFixedArity = 1;
var$.cljs$lang$applyTo = (function (arglist__9034){
var opts__8424__auto__ = cljs.core.first(arglist__9034);
var children__8425__auto__ = cljs.core.rest(arglist__9034);
return var$__delegate(opts__8424__auto__,children__8425__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;
/**
* @param {...*} var_args
*/
om.dom.video = (function() { 
var video__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.video.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var video = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return video__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
video.cljs$lang$maxFixedArity = 1;
video.cljs$lang$applyTo = (function (arglist__9035){
var opts__8424__auto__ = cljs.core.first(arglist__9035);
var children__8425__auto__ = cljs.core.rest(arglist__9035);
return video__delegate(opts__8424__auto__,children__8425__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;
/**
* @param {...*} var_args
*/
om.dom.wbr = (function() { 
var wbr__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.wbr.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var wbr = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wbr__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
wbr.cljs$lang$maxFixedArity = 1;
wbr.cljs$lang$applyTo = (function (arglist__9036){
var opts__8424__auto__ = cljs.core.first(arglist__9036);
var children__8425__auto__ = cljs.core.rest(arglist__9036);
return wbr__delegate(opts__8424__auto__,children__8425__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;
/**
* @param {...*} var_args
*/
om.dom.circle = (function() { 
var circle__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.circle.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var circle = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return circle__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
circle.cljs$lang$maxFixedArity = 1;
circle.cljs$lang$applyTo = (function (arglist__9037){
var opts__8424__auto__ = cljs.core.first(arglist__9037);
var children__8425__auto__ = cljs.core.rest(arglist__9037);
return circle__delegate(opts__8424__auto__,children__8425__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;
/**
* @param {...*} var_args
*/
om.dom.ellipse = (function() { 
var ellipse__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.ellipse.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var ellipse = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return ellipse__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
ellipse.cljs$lang$maxFixedArity = 1;
ellipse.cljs$lang$applyTo = (function (arglist__9038){
var opts__8424__auto__ = cljs.core.first(arglist__9038);
var children__8425__auto__ = cljs.core.rest(arglist__9038);
return ellipse__delegate(opts__8424__auto__,children__8425__auto__);
});
ellipse.cljs$core$IFn$_invoke$arity$variadic = ellipse__delegate;
return ellipse;
})()
;
/**
* @param {...*} var_args
*/
om.dom.g = (function() { 
var g__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.g.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var g = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return g__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
g.cljs$lang$maxFixedArity = 1;
g.cljs$lang$applyTo = (function (arglist__9039){
var opts__8424__auto__ = cljs.core.first(arglist__9039);
var children__8425__auto__ = cljs.core.rest(arglist__9039);
return g__delegate(opts__8424__auto__,children__8425__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;
/**
* @param {...*} var_args
*/
om.dom.line = (function() { 
var line__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.line.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var line = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return line__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
line.cljs$lang$maxFixedArity = 1;
line.cljs$lang$applyTo = (function (arglist__9040){
var opts__8424__auto__ = cljs.core.first(arglist__9040);
var children__8425__auto__ = cljs.core.rest(arglist__9040);
return line__delegate(opts__8424__auto__,children__8425__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;
/**
* @param {...*} var_args
*/
om.dom.path = (function() { 
var path__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.path.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var path = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return path__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
path.cljs$lang$maxFixedArity = 1;
path.cljs$lang$applyTo = (function (arglist__9041){
var opts__8424__auto__ = cljs.core.first(arglist__9041);
var children__8425__auto__ = cljs.core.rest(arglist__9041);
return path__delegate(opts__8424__auto__,children__8425__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* @param {...*} var_args
*/
om.dom.polyline = (function() { 
var polyline__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.polyline.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var polyline = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return polyline__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
polyline.cljs$lang$maxFixedArity = 1;
polyline.cljs$lang$applyTo = (function (arglist__9042){
var opts__8424__auto__ = cljs.core.first(arglist__9042);
var children__8425__auto__ = cljs.core.rest(arglist__9042);
return polyline__delegate(opts__8424__auto__,children__8425__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;
/**
* @param {...*} var_args
*/
om.dom.rect = (function() { 
var rect__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.rect.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var rect = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return rect__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
rect.cljs$lang$maxFixedArity = 1;
rect.cljs$lang$applyTo = (function (arglist__9043){
var opts__8424__auto__ = cljs.core.first(arglist__9043);
var children__8425__auto__ = cljs.core.rest(arglist__9043);
return rect__delegate(opts__8424__auto__,children__8425__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;
/**
* @param {...*} var_args
*/
om.dom.svg = (function() { 
var svg__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.svg.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var svg = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return svg__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
svg.cljs$lang$maxFixedArity = 1;
svg.cljs$lang$applyTo = (function (arglist__9044){
var opts__8424__auto__ = cljs.core.first(arglist__9044);
var children__8425__auto__ = cljs.core.rest(arglist__9044);
return svg__delegate(opts__8424__auto__,children__8425__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;
/**
* @param {...*} var_args
*/
om.dom.text = (function() { 
var text__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.text.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var text = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return text__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
text.cljs$lang$maxFixedArity = 1;
text.cljs$lang$applyTo = (function (arglist__9045){
var opts__8424__auto__ = cljs.core.first(arglist__9045);
var children__8425__auto__ = cljs.core.rest(arglist__9045);
return text__delegate(opts__8424__auto__,children__8425__auto__);
});
text.cljs$core$IFn$_invoke$arity$variadic = text__delegate;
return text;
})()
;
/**
* @param {...*} var_args
*/
om.dom.defs = (function() { 
var defs__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.defs.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var defs = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return defs__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
defs.cljs$lang$maxFixedArity = 1;
defs.cljs$lang$applyTo = (function (arglist__9046){
var opts__8424__auto__ = cljs.core.first(arglist__9046);
var children__8425__auto__ = cljs.core.rest(arglist__9046);
return defs__delegate(opts__8424__auto__,children__8425__auto__);
});
defs.cljs$core$IFn$_invoke$arity$variadic = defs__delegate;
return defs;
})()
;
/**
* @param {...*} var_args
*/
om.dom.linearGradient = (function() { 
var linearGradient__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.linearGradient.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var linearGradient = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return linearGradient__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
linearGradient.cljs$lang$maxFixedArity = 1;
linearGradient.cljs$lang$applyTo = (function (arglist__9047){
var opts__8424__auto__ = cljs.core.first(arglist__9047);
var children__8425__auto__ = cljs.core.rest(arglist__9047);
return linearGradient__delegate(opts__8424__auto__,children__8425__auto__);
});
linearGradient.cljs$core$IFn$_invoke$arity$variadic = linearGradient__delegate;
return linearGradient;
})()
;
/**
* @param {...*} var_args
*/
om.dom.polygon = (function() { 
var polygon__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.polygon.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var polygon = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return polygon__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
polygon.cljs$lang$maxFixedArity = 1;
polygon.cljs$lang$applyTo = (function (arglist__9048){
var opts__8424__auto__ = cljs.core.first(arglist__9048);
var children__8425__auto__ = cljs.core.rest(arglist__9048);
return polygon__delegate(opts__8424__auto__,children__8425__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;
/**
* @param {...*} var_args
*/
om.dom.radialGradient = (function() { 
var radialGradient__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.radialGradient.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var radialGradient = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return radialGradient__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
radialGradient.cljs$lang$maxFixedArity = 1;
radialGradient.cljs$lang$applyTo = (function (arglist__9049){
var opts__8424__auto__ = cljs.core.first(arglist__9049);
var children__8425__auto__ = cljs.core.rest(arglist__9049);
return radialGradient__delegate(opts__8424__auto__,children__8425__auto__);
});
radialGradient.cljs$core$IFn$_invoke$arity$variadic = radialGradient__delegate;
return radialGradient;
})()
;
/**
* @param {...*} var_args
*/
om.dom.stop = (function() { 
var stop__delegate = function (opts__8424__auto__,children__8425__auto__){return React.DOM.stop.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,opts__8424__auto__,children__8425__auto__)));
};
var stop = function (opts__8424__auto__,var_args){
var children__8425__auto__ = null;if (arguments.length > 1) {
  children__8425__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return stop__delegate.call(this,opts__8424__auto__,children__8425__auto__);};
stop.cljs$lang$maxFixedArity = 1;
stop.cljs$lang$applyTo = (function (arglist__9050){
var opts__8424__auto__ = cljs.core.first(arglist__9050);
var children__8425__auto__ = cljs.core.rest(arglist__9050);
return stop__delegate(opts__8424__auto__,children__8425__auto__);
});
stop.cljs$core$IFn$_invoke$arity$variadic = stop__delegate;
return stop;
})()
;
om.dom.wrap_form_element = (function wrap_form_element(ctor,display_name){return React.createClass({"render": (function (){var this$ = this;return this$.transferPropsTo(ctor.call(null,{"children": (this$.props["children"]), "onChange": (this$["onChange"]), "value": (this$.state["value"])}));
}), "componentWillReceiveProps": (function (new_props){var this$ = this;return this$.setState({"value": (new_props["value"])});
}), "onChange": (function (e){var this$ = this;var handler = (this$.props["onChange"]);if((handler == null))
{return null;
} else
{handler.call(null,e);
return this$.setState({"value": e.target.value});
}
}), "getInitialState": (function (){var this$ = this;return {"value": (this$.props["value"])};
}), "getDisplayName": (function (){return display_name;
})});
});
om.dom.input = om.dom.wrap_form_element.call(null,React.DOM.input,"input");
om.dom.textarea = om.dom.wrap_form_element.call(null,React.DOM.textarea,"textarea");
om.dom.option = om.dom.wrap_form_element.call(null,React.DOM.option,"option");
/**
* Equivalent to React.renderComponent
*/
om.dom.render = (function render(component,el){return React.renderComponent(component,el);
});
/**
* Equivalent to React.renderComponentToString
*/
om.dom.render_to_str = (function render_to_str(c){return React.renderComponentToString(c);
});
}
if(!lt.util.load.provided_QMARK_('om.core')) {
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('om.dom');
goog.require('om.dom');
om.core._STAR_read_enabled_STAR_ = false;
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core.IDisplayName = (function (){var obj9062 = {};return obj9062;
})();
om.core.display_name = (function display_name(this$){if((function (){var and__6414__auto__ = this$;if(and__6414__auto__)
{return this$.om$core$IDisplayName$display_name$arity$1;
} else
{return and__6414__auto__;
}
})())
{return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else
{var x__7053__auto__ = (((this$ == null))?null:this$);return (function (){var or__6426__auto__ = (om.core.display_name[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core.display_name["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});
om.core.IInitState = (function (){var obj9064 = {};return obj9064;
})();
om.core.init_state = (function init_state(this$){if((function (){var and__6414__auto__ = this$;if(and__6414__auto__)
{return this$.om$core$IInitState$init_state$arity$1;
} else
{return and__6414__auto__;
}
})())
{return this$.om$core$IInitState$init_state$arity$1(this$);
} else
{var x__7053__auto__ = (((this$ == null))?null:this$);return (function (){var or__6426__auto__ = (om.core.init_state[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core.init_state["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});
om.core.IShouldUpdate = (function (){var obj9066 = {};return obj9066;
})();
om.core.should_update = (function should_update(this$,next_props,next_state){if((function (){var and__6414__auto__ = this$;if(and__6414__auto__)
{return this$.om$core$IShouldUpdate$should_update$arity$3;
} else
{return and__6414__auto__;
}
})())
{return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else
{var x__7053__auto__ = (((this$ == null))?null:this$);return (function (){var or__6426__auto__ = (om.core.should_update[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core.should_update["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IWillMount = (function (){var obj9068 = {};return obj9068;
})();
om.core.will_mount = (function will_mount(this$){if((function (){var and__6414__auto__ = this$;if(and__6414__auto__)
{return this$.om$core$IWillMount$will_mount$arity$1;
} else
{return and__6414__auto__;
}
})())
{return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else
{var x__7053__auto__ = (((this$ == null))?null:this$);return (function (){var or__6426__auto__ = (om.core.will_mount[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core.will_mount["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IDidMount = (function (){var obj9070 = {};return obj9070;
})();
om.core.did_mount = (function did_mount(this$){if((function (){var and__6414__auto__ = this$;if(and__6414__auto__)
{return this$.om$core$IDidMount$did_mount$arity$1;
} else
{return and__6414__auto__;
}
})())
{return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else
{var x__7053__auto__ = (((this$ == null))?null:this$);return (function (){var or__6426__auto__ = (om.core.did_mount[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core.did_mount["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUnmount = (function (){var obj9072 = {};return obj9072;
})();
om.core.will_unmount = (function will_unmount(this$){if((function (){var and__6414__auto__ = this$;if(and__6414__auto__)
{return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else
{return and__6414__auto__;
}
})())
{return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else
{var x__7053__auto__ = (((this$ == null))?null:this$);return (function (){var or__6426__auto__ = (om.core.will_unmount[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core.will_unmount["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUpdate = (function (){var obj9074 = {};return obj9074;
})();
om.core.will_update = (function will_update(this$,next_props,next_state){if((function (){var and__6414__auto__ = this$;if(and__6414__auto__)
{return this$.om$core$IWillUpdate$will_update$arity$3;
} else
{return and__6414__auto__;
}
})())
{return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else
{var x__7053__auto__ = (((this$ == null))?null:this$);return (function (){var or__6426__auto__ = (om.core.will_update[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core.will_update["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IDidUpdate = (function (){var obj9076 = {};return obj9076;
})();
om.core.did_update = (function did_update(this$,prev_props,prev_state){if((function (){var and__6414__auto__ = this$;if(and__6414__auto__)
{return this$.om$core$IDidUpdate$did_update$arity$3;
} else
{return and__6414__auto__;
}
})())
{return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else
{var x__7053__auto__ = (((this$ == null))?null:this$);return (function (){var or__6426__auto__ = (om.core.did_update[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core.did_update["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});
om.core.IWillReceiveProps = (function (){var obj9078 = {};return obj9078;
})();
om.core.will_receive_props = (function will_receive_props(this$,next_props){if((function (){var and__6414__auto__ = this$;if(and__6414__auto__)
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else
{return and__6414__auto__;
}
})())
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else
{var x__7053__auto__ = (((this$ == null))?null:this$);return (function (){var or__6426__auto__ = (om.core.will_receive_props[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core.will_receive_props["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});
om.core.IRender = (function (){var obj9080 = {};return obj9080;
})();
om.core.render = (function render(this$){if((function (){var and__6414__auto__ = this$;if(and__6414__auto__)
{return this$.om$core$IRender$render$arity$1;
} else
{return and__6414__auto__;
}
})())
{return this$.om$core$IRender$render$arity$1(this$);
} else
{var x__7053__auto__ = (((this$ == null))?null:this$);return (function (){var or__6426__auto__ = (om.core.render[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core.render["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});
om.core.IRenderState = (function (){var obj9082 = {};return obj9082;
})();
om.core.render_state = (function render_state(this$,state){if((function (){var and__6414__auto__ = this$;if(and__6414__auto__)
{return this$.om$core$IRenderState$render_state$arity$2;
} else
{return and__6414__auto__;
}
})())
{return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else
{var x__7053__auto__ = (((this$ == null))?null:this$);return (function (){var or__6426__auto__ = (om.core.render_state[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core.render_state["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});
om.core.IOmSwap = (function (){var obj9084 = {};return obj9084;
})();
om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){if((function (){var and__6414__auto__ = this$;if(and__6414__auto__)
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else
{return and__6414__auto__;
}
})())
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else
{var x__7053__auto__ = (((this$ == null))?null:this$);return (function (){var or__6426__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core._om_swap_BANG_["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});
om.core.IGetState = (function (){var obj9086 = {};return obj9086;
})();
om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){if((function (){var and__6414__auto__ = this$;if(and__6414__auto__)
{return this$.om$core$IGetState$_get_state$arity$1;
} else
{return and__6414__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$1(this$);
} else
{var x__7053__auto__ = (((this$ == null))?null:this$);return (function (){var or__6426__auto__ = (om.core._get_state[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core._get_state["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){if((function (){var and__6414__auto__ = this$;if(and__6414__auto__)
{return this$.om$core$IGetState$_get_state$arity$2;
} else
{return and__6414__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else
{var x__7053__auto__ = (((this$ == null))?null:this$);return (function (){var or__6426__auto__ = (om.core._get_state[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core._get_state["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_state__1.call(this,this$);
case 2:
return _get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_state.cljs$core$IFn$_invoke$arity$1 = _get_state__1;
_get_state.cljs$core$IFn$_invoke$arity$2 = _get_state__2;
return _get_state;
})()
;
om.core.IGetRenderState = (function (){var obj9088 = {};return obj9088;
})();
om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){if((function (){var and__6414__auto__ = this$;if(and__6414__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else
{return and__6414__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else
{var x__7053__auto__ = (((this$ == null))?null:this$);return (function (){var or__6426__auto__ = (om.core._get_render_state[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core._get_render_state["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){if((function (){var and__6414__auto__ = this$;if(and__6414__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else
{return and__6414__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else
{var x__7053__auto__ = (((this$ == null))?null:this$);return (function (){var or__6426__auto__ = (om.core._get_render_state[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core._get_render_state["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_render_state__1.call(this,this$);
case 2:
return _get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_render_state.cljs$core$IFn$_invoke$arity$1 = _get_render_state__1;
_get_render_state.cljs$core$IFn$_invoke$arity$2 = _get_render_state__2;
return _get_render_state;
})()
;
om.core.ISetState = (function (){var obj9090 = {};return obj9090;
})();
om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___2 = (function (this$,val){if((function (){var and__6414__auto__ = this$;if(and__6414__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$2;
} else
{return and__6414__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$2(this$,val);
} else
{var x__7053__auto__ = (((this$ == null))?null:this$);return (function (){var or__6426__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,val);
}
});
var _set_state_BANG___3 = (function (this$,ks,val){if((function (){var and__6414__auto__ = this$;if(and__6414__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else
{return and__6414__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,ks,val);
} else
{var x__7053__auto__ = (((this$ == null))?null:this$);return (function (){var or__6426__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val);
}
});
_set_state_BANG_ = function(this$,ks,val){
switch(arguments.length){
case 2:
return _set_state_BANG___2.call(this,this$,ks);
case 3:
return _set_state_BANG___3.call(this,this$,ks,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = _set_state_BANG___2;
_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = _set_state_BANG___3;
return _set_state_BANG_;
})()
;
om.core.IRenderQueue = (function (){var obj9092 = {};return obj9092;
})();
om.core._get_queue = (function _get_queue(this$){if((function (){var and__6414__auto__ = this$;if(and__6414__auto__)
{return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else
{return and__6414__auto__;
}
})())
{return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else
{var x__7053__auto__ = (((this$ == null))?null:this$);return (function (){var or__6426__auto__ = (om.core._get_queue[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core._get_queue["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});
om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){if((function (){var and__6414__auto__ = this$;if(and__6414__auto__)
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else
{return and__6414__auto__;
}
})())
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else
{var x__7053__auto__ = (((this$ == null))?null:this$);return (function (){var or__6426__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core._queue_render_BANG_["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){if((function (){var and__6414__auto__ = this$;if(and__6414__auto__)
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else
{return and__6414__auto__;
}
})())
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else
{var x__7053__auto__ = (((this$ == null))?null:this$);return (function (){var or__6426__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core._empty_queue_BANG_["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});
om.core.IValue = (function (){var obj9094 = {};return obj9094;
})();
om.core._value = (function _value(x){if((function (){var and__6414__auto__ = x;if(and__6414__auto__)
{return x.om$core$IValue$_value$arity$1;
} else
{return and__6414__auto__;
}
})())
{return x.om$core$IValue$_value$arity$1(x);
} else
{var x__7053__auto__ = (((x == null))?null:x);return (function (){var or__6426__auto__ = (om.core._value[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core._value["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
})().call(null,x);
}
});
(om.core.IValue["_"] = true);
(om.core._value["_"] = (function (x){return x;
}));
om.core.ICursor = (function (){var obj9096 = {};return obj9096;
})();
om.core._path = (function _path(cursor){if((function (){var and__6414__auto__ = cursor;if(and__6414__auto__)
{return cursor.om$core$ICursor$_path$arity$1;
} else
{return and__6414__auto__;
}
})())
{return cursor.om$core$ICursor$_path$arity$1(cursor);
} else
{var x__7053__auto__ = (((cursor == null))?null:cursor);return (function (){var or__6426__auto__ = (om.core._path[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core._path["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});
om.core._state = (function _state(cursor){if((function (){var and__6414__auto__ = cursor;if(and__6414__auto__)
{return cursor.om$core$ICursor$_state$arity$1;
} else
{return and__6414__auto__;
}
})())
{return cursor.om$core$ICursor$_state$arity$1(cursor);
} else
{var x__7053__auto__ = (((cursor == null))?null:cursor);return (function (){var or__6426__auto__ = (om.core._state[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core._state["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IToCursor = (function (){var obj9098 = {};return obj9098;
})();
om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){if((function (){var and__6414__auto__ = value;if(and__6414__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$2;
} else
{return and__6414__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else
{var x__7053__auto__ = (((value == null))?null:value);return (function (){var or__6426__auto__ = (om.core._to_cursor[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core._to_cursor["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){if((function (){var and__6414__auto__ = value;if(and__6414__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$3;
} else
{return and__6414__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else
{var x__7053__auto__ = (((value == null))?null:value);return (function (){var or__6426__auto__ = (om.core._to_cursor[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core._to_cursor["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;
om.core.ICursorDerive = (function (){var obj9100 = {};return obj9100;
})();
om.core._derive = (function _derive(cursor,derived,state,path){if((function (){var and__6414__auto__ = cursor;if(and__6414__auto__)
{return cursor.om$core$ICursorDerive$_derive$arity$4;
} else
{return and__6414__auto__;
}
})())
{return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else
{var x__7053__auto__ = (((cursor == null))?null:cursor);return (function (){var or__6426__auto__ = (om.core._derive[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core._derive["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});
(om.core.ICursorDerive["_"] = true);
(om.core._derive["_"] = (function (this$,derived,state,path){return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function path(cursor){return om.core._path.call(null,cursor);
});
om.core.value = (function value(cursor){return om.core._value.call(null,cursor);
});
om.core.state = (function state(cursor){return om.core._state.call(null,cursor);
});
om.core.ITransact = (function (){var obj9102 = {};return obj9102;
})();
om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){if((function (){var and__6414__auto__ = cursor;if(and__6414__auto__)
{return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else
{return and__6414__auto__;
}
})())
{return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else
{var x__7053__auto__ = (((cursor == null))?null:cursor);return (function (){var or__6426__auto__ = (om.core._transact_BANG_[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core._transact_BANG_["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});
om.core.INotify = (function (){var obj9104 = {};return obj9104;
})();
om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){if((function (){var and__6414__auto__ = x;if(and__6414__auto__)
{return x.om$core$INotify$_listen_BANG_$arity$3;
} else
{return and__6414__auto__;
}
})())
{return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else
{var x__7053__auto__ = (((x == null))?null:x);return (function (){var or__6426__auto__ = (om.core._listen_BANG_[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core._listen_BANG_["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});
om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){if((function (){var and__6414__auto__ = x;if(and__6414__auto__)
{return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else
{return and__6414__auto__;
}
})())
{return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else
{var x__7053__auto__ = (((x == null))?null:x);return (function (){var or__6426__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core._unlisten_BANG_["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});
om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){if((function (){var and__6414__auto__ = x;if(and__6414__auto__)
{return x.om$core$INotify$_notify_BANG_$arity$3;
} else
{return and__6414__auto__;
}
})())
{return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else
{var x__7053__auto__ = (((x == null))?null:x);return (function (){var or__6426__auto__ = (om.core._notify_BANG_[goog.typeOf(x__7053__auto__)]);if(or__6426__auto__)
{return or__6426__auto__;
} else
{var or__6426__auto____$1 = (om.core._notify_BANG_["_"]);if(or__6426__auto____$1)
{return or__6426__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});
om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){var old_state = cljs.core.deref.call(null,state);var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);var ret = (((function (){var G__9106 = state;if(G__9106)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9106.om$core$IOmSwap$;
}
})()))
{return true;
} else
{if((!G__9106.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__9106);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__9106);
}
})())?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f):null)));if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",3145885106)))
{return null;
} else
{var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"old-value","old-value",1451216317),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",3626601078),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1449001181),old_state,new cljs.core.Keyword(null,"new-state","new-state",3624385942),cljs.core.deref.call(null,state)], null);if(!((tag == null)))
{return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",1014018828),tag));
} else
{return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){var G__9108 = x;if(G__9108)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9108.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__9108.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__9108);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__9108);
}
});
om.core.children = (function children(node){var c = node.props.children;if(cljs.core.fn_QMARK_.call(null,c))
{return node.props.children = (function (){var _STAR_read_enabled_STAR_9110 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return c.call(null,node);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9110;
}})();
} else
{return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function get_props(x){return (x.props["__om_cursor"]);
});
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){return om.core._get_state.call(null,owner);
});
var get_state__2 = (function (owner,korks){var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_state.call(null,owner,ks);
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){if((owner == null))
{return null;
} else
{return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.get.call(null,get_shared.call(null,owner),korks);
} else
{if(cljs.core.empty_QMARK_.call(null,korks))
{return get_shared.call(null,owner);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get_in.call(null,get_shared.call(null,owner),korks);
} else
{return null;
}
}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){var state = owner.state;var temp__4126__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(temp__4126__auto__))
{var pending_state = temp__4126__auto__;var G__9112 = state;(G__9112["__om_prev_state"] = (state["__om_state"]));
(G__9112["__om_state"] = pending_state);
(G__9112["__om_pending_state"] = null);
return G__9112;
} else
{return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){return merge_props_state.call(null,owner,null);
});
var merge_props_state__2 = (function (owner,props){var props__$1 = (function (){var or__6426__auto__ = props;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return owner.props;
}
})();var temp__4126__auto__ = (props__$1["__om_state"]);if(cljs.core.truth_(temp__4126__auto__))
{var props_state = temp__4126__auto__;var state = owner.state;(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__6426__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return (state["__om_state"]);
}
})(),props_state));
return (props__$1["__om_state"] = null);
} else
{return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",4103164189),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",4147620643),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",2122862542),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",3193956709),new cljs.core.Keyword(null,"render","render",4374279432),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",2086388618),new cljs.core.Keyword(null,"getInitialState","getInitialState",2219830677),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",3877103209),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",2087784617),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",3257856604)],[(function (prev_props,prev_state){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__9113 = c;if(G__9113)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9113.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__9113.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__9113);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__9113);
}
})())
{var state_9219 = this$.state;var _STAR_read_enabled_STAR_9114_9220 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props}),(function (){var or__6426__auto__ = (state_9219["__om_prev_state"]);if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return (state_9219["__om_state"]);
}
})());
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9114_9220;
}} else
{}
return (this$.state["__om_prev_state"] = null);
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__9115 = c;if(G__9115)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9115.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__9115.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__9115);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__9115);
}
})())
{var _STAR_read_enabled_STAR_9116 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.will_unmount.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9116;
}} else
{return null;
}
}),(function (next_props){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__9117 = c;if(G__9117)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9117.om$core$IWillReceiveProps$;
}
})()))
{return true;
} else
{if((!G__9117.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__9117);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__9117);
}
})())
{var _STAR_read_enabled_STAR_9118 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"props": next_props}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9118;
}} else
{return null;
}
}),(function (next_props,next_state){var this$ = this;var _STAR_read_enabled_STAR_9119 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$.props;var state = this$.state;var c = om.core.children.call(null,this$);om.core.merge_props_state.call(null,this$,next_props);
if((function (){var G__9120 = c;if(G__9120)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9120.om$core$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__9120.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__9120);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__9120);
}
})())
{return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props}),om.core._get_state.call(null,this$));
} else
{if(cljs.core.not_EQ_.call(null,om.core._value.call(null,(props["__om_cursor"])),om.core._value.call(null,(next_props["__om_cursor"]))))
{return true;
} else
{if(!(((state["__om_pending_state"]) == null)))
{return true;
} else
{if(!(((props["__om_index"]) === (next_props["__om_index"]))))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
} else
{return null;
}
}
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9119;
}}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var _STAR_read_enabled_STAR_9121 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
if((function (){var G__9122 = c;if(G__9122)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9122.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__9122.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__9122);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__9122);
}
})())
{var _STAR_parent_STAR_9123 = om.core._STAR_parent_STAR_;var _STAR_state_STAR_9124 = om.core._STAR_state_STAR_;var _STAR_instrument_STAR_9125 = om.core._STAR_instrument_STAR_;try{om.core._STAR_parent_STAR_ = this$;
om.core._STAR_state_STAR_ = (props["__om_app_state"]);
om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);
return om.core.render.call(null,c);
}finally {om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_9125;
om.core._STAR_state_STAR_ = _STAR_state_STAR_9124;
om.core._STAR_parent_STAR_ = _STAR_parent_STAR_9123;
}} else
{if((function (){var G__9126 = c;if(G__9126)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9126.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__9126.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__9126);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__9126);
}
})())
{var _STAR_parent_STAR_9127 = om.core._STAR_parent_STAR_;var _STAR_state_STAR_9128 = om.core._STAR_state_STAR_;var _STAR_instrument_STAR_9129 = om.core._STAR_instrument_STAR_;try{om.core._STAR_parent_STAR_ = this$;
om.core._STAR_state_STAR_ = (props["__om_app_state"]);
om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
}finally {om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_9129;
om.core._STAR_state_STAR_ = _STAR_state_STAR_9128;
om.core._STAR_parent_STAR_ = _STAR_parent_STAR_9127;
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return c;
} else
{return null;
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9121;
}}),(function (next_props,next_state){var this$ = this;var c_9221 = om.core.children.call(null,this$);if((function (){var G__9130 = c_9221;if(G__9130)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9130.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__9130.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__9130);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__9130);
}
})())
{var state_9222 = this$.state;var _STAR_read_enabled_STAR_9131_9223 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_update.call(null,c_9221,om.core.get_props.call(null,{"props": next_props}),om.core._get_state.call(null,this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9131_9223;
}} else
{}
return om.core.merge_pending_state.call(null,this$);
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var istate = (function (){var or__6426__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var id = new cljs.core.Keyword("om.core","id","om.core/id",2663181321).cljs$core$IFn$_invoke$arity$1(istate);var ret = {"__om_state": cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",2663181321)),(((function (){var G__9132 = c;if(G__9132)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9132.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__9132.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__9132);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__9132);
}
})())?(function (){var _STAR_read_enabled_STAR_9133 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.init_state.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9133;
}})():null)), "__om_id": (function (){var or__6426__auto__ = id;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};(props["__om_init_state"] = null);
return ret;
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__9134 = c;if(G__9134)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9134.om$core$IDidMount$;
}
})()))
{return true;
} else
{if((!G__9134.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__9134);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__9134);
}
})())
{var _STAR_read_enabled_STAR_9135 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.did_mount.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9135;
}} else
{return null;
}
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__9136 = c;if(G__9136)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9136.om$core$IDisplayName$;
}
})()))
{return true;
} else
{if((!G__9136.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__9136);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__9136);
}
})())
{var _STAR_read_enabled_STAR_9137 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.display_name.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9137;
}} else
{return null;
}
}),(function (){var this$ = this;om.core.merge_props_state.call(null,this$);
var c_9224 = om.core.children.call(null,this$);if((function (){var G__9138 = c_9224;if(G__9138)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9138.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__9138.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__9138);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__9138);
}
})())
{var _STAR_read_enabled_STAR_9139_9225 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_mount.call(null,c_9224);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9139_9225;
}} else
{}
return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){var x9143 = obj;x9143.om$core$IGetState$ = true;
x9143.om$core$IGetState$_get_state$arity$1 = ((function (x9143){
return (function (this$){var this$__$1 = this;var state = this$__$1.state;var or__6426__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return (state["__om_state"]);
}
});})(x9143))
;
x9143.om$core$IGetState$_get_state$arity$2 = ((function (x9143){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x9143))
;
x9143.om$core$IGetRenderState$ = true;
x9143.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x9143){
return (function (this$){var this$__$1 = this;return (this$__$1.state["__om_state"]);
});})(x9143))
;
x9143.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x9143){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x9143))
;
x9143.om$core$ISetState$ = true;
x9143.om$core$ISetState$_set_state_BANG_$arity$2 = ((function (x9143){
return (function (this$,val){var this$__$1 = this;var _STAR_read_enabled_STAR_9144 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$__$1.props;var app_state = (props["__om_app_state"]);(this$__$1.state["__om_pending_state"] = val);
if((app_state == null))
{return null;
} else
{return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9144;
}});})(x9143))
;
x9143.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x9143){
return (function (this$,ks,val){var this$__$1 = this;var _STAR_read_enabled_STAR_9145 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$__$1.props;var state = this$__$1.state;var pstate = om.core._get_state.call(null,this$__$1);var app_state = (props["__om_app_state"]);(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));
if((app_state == null))
{return null;
} else
{return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9145;
}});})(x9143))
;
return x9143;
});
om.core.Pure = React.createClass(om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods)));
om.core.pure = (function pure(obj){return (new om.core.Pure(obj));
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2158397195;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.cljs$lang$type = true;
om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";
om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__6993__auto__,writer__6994__auto__,opt__6995__auto__){return cljs.core._write.call(null,writer__6994__auto__,"om.core/MapCursor");
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{var v = cljs.core._lookup.call(null,self__.value,k,not_found);if(!(cljs.core._EQ_.call(null,v,not_found)))
{return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else
{return not_found;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._pr_writer.call(null,self__.value,writer,opts);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.om$core$ICursor$ = true;
om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.meta.call(null,self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._count.call(null,self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,self__.value,other);
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.om$core$IValue$ = true;
om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.om$core$ITransact$ = true;
om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((cljs.core.count.call(null,self__.value) > 0))
{return cljs.core.map.call(null,((function (this$__$1){
return (function (p__9147){var vec__9148 = p__9147;var k = cljs.core.nth.call(null,vec__9148,0,null);var v = cljs.core.nth.call(null,vec__9148,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else
{return null;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.call = (function() {
var G__9226 = null;
var G__9226__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__9226__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__9226 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__9226__2.call(this,self__,k);
case 3:
return G__9226__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9226;
})()
;
om.core.MapCursor.prototype.apply = (function (self__,args9146){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9146)));
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});
om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){return (new om.core.MapCursor(value,state,path));
});

/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2175181595;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.cljs$lang$type = true;
om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";
om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__6993__auto__,writer__6994__auto__,opt__6995__auto__){return cljs.core._write.call(null,writer__6994__auto__,"om.core/IndexedCursor");
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._nth.call(null,this$__$1,n,null);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._nth.call(null,this$__$1,n,not_found);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((n < cljs.core._count.call(null,self__.value)))
{return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
} else
{return not_found;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._pr_writer.call(null,self__.value,writer,opts);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.om$core$ICursor$ = true;
om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.meta.call(null,self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});
om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._count.call(null,self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,self__.value,other);
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.om$core$IValue$ = true;
om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.IndexedCursor.prototype.om$core$ITransact$ = true;
om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((cljs.core.count.call(null,self__.value) > 0))
{return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else
{return null;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.call = (function() {
var G__9227 = null;
var G__9227__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__9227__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__9227 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__9227__2.call(this,self__,k);
case 3:
return G__9227__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9227;
})()
;
om.core.IndexedCursor.prototype.apply = (function (self__,args9149){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9149)));
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});
om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){return (new om.core.IndexedCursor(value,state,path));
});
om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){var x9151 = cljs.core.clone.call(null,val);x9151.cljs$core$IEquiv$ = true;
x9151.cljs$core$IEquiv$_equiv$arity$2 = ((function (x9151){
return (function (_,other){var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,val,other);
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});})(x9151))
;
x9151.om$core$ITransact$ = true;
x9151.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x9151){
return (function (this$,korks,f,tag){var this$__$1 = this;return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x9151))
;
x9151.om$core$ICursor$ = true;
x9151.om$core$ICursor$_path$arity$1 = ((function (x9151){
return (function (_){var ___$1 = this;return path;
});})(x9151))
;
x9151.om$core$ICursor$_state$arity$1 = ((function (x9151){
return (function (_){var ___$1 = this;return state;
});})(x9151))
;
x9151.cljs$core$IDeref$ = true;
x9151.cljs$core$IDeref$_deref$arity$1 = ((function (x9151){
return (function (this$){var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});})(x9151))
;
return x9151;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){return to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){return to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){if(om.core.cursor_QMARK_.call(null,val))
{return val;
} else
{if((function (){var G__9154 = val;if(G__9154)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9154.om$core$IToCursor$;
}
})()))
{return true;
} else
{if((!G__9154.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__9154);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__9154);
}
})())
{return om.core._to_cursor.call(null,val,state,path);
} else
{if(cljs.core.indexed_QMARK_.call(null,val))
{return (new om.core.IndexedCursor(val,state,path));
} else
{if(cljs.core.map_QMARK_.call(null,val))
{return (new om.core.MapCursor(val,state,path));
} else
{if((function (){var G__9155 = val;if(G__9155)
{var bit__7076__auto__ = (G__9155.cljs$lang$protocol_mask$partition1$ & 8192);if((bit__7076__auto__) || (G__9155.cljs$core$ICloneable$))
{return true;
} else
{if((!G__9155.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__9155);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__9155);
}
})())
{return om.core.to_cursor_STAR_.call(null,val,state,path);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return val;
} else
{return null;
}
}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){var state = om.core._state.call(null,cursor);return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.render_all = (function render_all(){om.core.refresh_queued = false;
var seq__9160 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));var chunk__9161 = null;var count__9162 = 0;var i__9163 = 0;while(true){
if((i__9163 < count__9162))
{var f = cljs.core._nth.call(null,chunk__9161,i__9163);f.call(null);
{
var G__9228 = seq__9160;
var G__9229 = chunk__9161;
var G__9230 = count__9162;
var G__9231 = (i__9163 + 1);
seq__9160 = G__9228;
chunk__9161 = G__9229;
count__9162 = G__9230;
i__9163 = G__9231;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9160);if(temp__4126__auto__)
{var seq__9160__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9160__$1))
{var c__7182__auto__ = cljs.core.chunk_first.call(null,seq__9160__$1);{
var G__9232 = cljs.core.chunk_rest.call(null,seq__9160__$1);
var G__9233 = c__7182__auto__;
var G__9234 = cljs.core.count.call(null,c__7182__auto__);
var G__9235 = 0;
seq__9160 = G__9232;
chunk__9161 = G__9233;
count__9162 = G__9234;
i__9163 = G__9235;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__9160__$1);f.call(null);
{
var G__9236 = cljs.core.next.call(null,seq__9160__$1);
var G__9237 = null;
var G__9238 = 0;
var G__9239 = 0;
seq__9160 = G__9236;
chunk__9161 = G__9237;
count__9162 = G__9238;
i__9163 = G__9239;
continue;
}
}
} else
{return null;
}
}
break;
}
});
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_QMARK_ = (function valid_QMARK_(m){return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"ctor","ctor",1016968582),null,new cljs.core.Keyword(null,"fn","fn",1013907514),null,new cljs.core.Keyword(null,"instrument","instrument",2409387865),null,new cljs.core.Keyword(null,"react-key","react-key",4184082563),null,new cljs.core.Keyword(null,"key","key",1014010321),null,new cljs.core.Keyword(null,"init-state","init-state",4479067398),null,new cljs.core.Keyword(null,"state","state",1123661827),null,new cljs.core.Keyword(null,"opts","opts",1017322386),null,new cljs.core.Keyword("om.core","index","om.core/index",3166146514),null,new cljs.core.Keyword(null,"shared","shared",4405305303),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function id(owner){return (owner.state["__om_id"]);
});
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){return build_STAR_.call(null,f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){if(om.core.valid_QMARK_.call(null,m))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid?","valid?",1830611324,null),new cljs.core.Symbol(null,"m","m",-1640531418,null)))))));
}
if((m == null))
{var shared = (function (){var or__6426__auto__ = new cljs.core.Keyword(null,"shared","shared",4405305303).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();var ctor = (function (){var or__6426__auto__ = new cljs.core.Keyword(null,"ctor","ctor",1016968582).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return om.core.pure;
}
})();var pure__8458__auto__ = ctor.call(null,{"children": ((function (shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_9168 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return f.call(null,cursor,this$);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9168;
}});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_shared": shared, "__om_cursor": cursor});pure__8458__auto__.constructor = goog.getUid(f);
return pure__8458__auto__;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var map__9169 = m;var map__9169__$1 = ((cljs.core.seq_QMARK_.call(null,map__9169))?cljs.core.apply.call(null,cljs.core.hash_map,map__9169):map__9169);var opts = cljs.core.get.call(null,map__9169__$1,new cljs.core.Keyword(null,"opts","opts",1017322386));var init_state = cljs.core.get.call(null,map__9169__$1,new cljs.core.Keyword(null,"init-state","init-state",4479067398));var state = cljs.core.get.call(null,map__9169__$1,new cljs.core.Keyword(null,"state","state",1123661827));var key = cljs.core.get.call(null,map__9169__$1,new cljs.core.Keyword(null,"key","key",1014010321));var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",1013907514));var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",3166146514).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;return dataf.call(null,cursor,i);
} else
{return dataf.call(null,cursor);
}
})():cursor);var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",4184082563)));var shared = (function (){var or__6426__auto__ = new cljs.core.Keyword(null,"shared","shared",4405305303).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();var ctor = (function (){var or__6426__auto__ = new cljs.core.Keyword(null,"ctor","ctor",1016968582).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return om.core.pure;
}
})();var pure__8458__auto__ = ctor.call(null,{"__om_shared": shared, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",3166146514).cljs$core$IFn$_invoke$arity$1(m), "__om_cursor": cursor_SINGLEQUOTE_, "__om_app_state": om.core._STAR_state_STAR_, "key": rkey, "__om_init_state": init_state, "children": (((opts == null))?((function (map__9169,map__9169__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_9170 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return f.call(null,cursor_SINGLEQUOTE_,this$);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9170;
}});})(map__9169,map__9169__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__9169,map__9169__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_9171 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return f.call(null,cursor_SINGLEQUOTE_,this$,opts);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9171;
}});})(map__9169,map__9169__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_instrument": om.core._STAR_instrument_STAR_, "__om_state": state});pure__8458__auto__.constructor = goog.getUid(f);
return pure__8458__auto__;
} else
{return null;
}
}
});
build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return build_STAR___2.call(this,f,cursor);
case 3:
return build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_STAR_.cljs$core$IFn$_invoke$arity$2 = build_STAR___2;
build_STAR_.cljs$core$IFn$_invoke$arity$3 = build_STAR___3;
return build_STAR_;
})()
;
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a cursor, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument will be
* the cursor and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender or IRenderState
* instance, this instance may implement other React life cycle
* protocols.
* 
* cursor - an ICursor instance
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* :ctor       - a function that invokes a React component constructor
* that will back the Om component, defaults to pure.
* 
* Example:
* 
* (build list-of-gadgets cursor
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,cursor){return build.call(null,f,cursor,null);
});
var build__3 = (function (f,cursor,m){if(!((om.core._STAR_instrument_STAR_ == null)))
{var ret = (function (){var _STAR_read_enabled_STAR_9173 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._STAR_instrument_STAR_.call(null,f,cursor,m);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9173;
}})();if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",2667619603)))
{return om.core.build_STAR_.call(null,f,cursor,m);
} else
{return ret;
}
} else
{return om.core.build_STAR_.call(null,f,cursor,m);
}
});
build = function(f,cursor,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,cursor);
case 3:
return build__3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of cursors, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){return build_all.call(null,f,xs,null);
});
var build_all__3 = (function (f,xs,m){return cljs.core.map.call(null,(function (x,i){return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",3166146514),i));
}),xs,cljs.core.range.call(null));
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
om.core.setup = (function setup(state,key,tx_listen){if((function (){var G__9182 = state;if(G__9182)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9182.om$core$INotify$;
}
})()))
{return true;
} else
{if((!G__9182.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__9182);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__9182);
}
})())
{} else
{var listeners_9240 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var render_queue_9241 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var x9183_9242 = state;x9183_9242.om$core$IRenderQueue$ = true;
x9183_9242.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x9183_9242,listeners_9240,render_queue_9241){
return (function (this$){var this$__$1 = this;return cljs.core.deref.call(null,render_queue_9241);
});})(x9183_9242,listeners_9240,render_queue_9241))
;
x9183_9242.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x9183_9242,listeners_9240,render_queue_9241){
return (function (this$,c){var this$__$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_9241),c))
{return null;
} else
{cljs.core.swap_BANG_.call(null,render_queue_9241,cljs.core.conj,c);
return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x9183_9242,listeners_9240,render_queue_9241))
;
x9183_9242.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x9183_9242,listeners_9240,render_queue_9241){
return (function (this$){var this$__$1 = this;return cljs.core.swap_BANG_.call(null,render_queue_9241,cljs.core.empty);
});})(x9183_9242,listeners_9240,render_queue_9241))
;
x9183_9242.om$core$INotify$ = true;
x9183_9242.om$core$INotify$_listen_BANG_$arity$3 = ((function (x9183_9242,listeners_9240,render_queue_9241){
return (function (this$,key__$1,tx_listen__$1){var this$__$1 = this;if((tx_listen__$1 == null))
{} else
{cljs.core.swap_BANG_.call(null,listeners_9240,cljs.core.assoc,key__$1,tx_listen__$1);
}
return this$__$1;
});})(x9183_9242,listeners_9240,render_queue_9241))
;
x9183_9242.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x9183_9242,listeners_9240,render_queue_9241){
return (function (this$,key__$1){var this$__$1 = this;cljs.core.swap_BANG_.call(null,listeners_9240,cljs.core.dissoc,key__$1);
return this$__$1;
});})(x9183_9242,listeners_9240,render_queue_9241))
;
x9183_9242.om$core$INotify$_notify_BANG_$arity$3 = ((function (x9183_9242,listeners_9240,render_queue_9241){
return (function (this$,tx_data,root_cursor){var this$__$1 = this;if((tx_listen == null))
{} else
{var seq__9184_9243 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_9240));var chunk__9185_9244 = null;var count__9186_9245 = 0;var i__9187_9246 = 0;while(true){
if((i__9187_9246 < count__9186_9245))
{var vec__9188_9247 = cljs.core._nth.call(null,chunk__9185_9244,i__9187_9246);var __9248 = cljs.core.nth.call(null,vec__9188_9247,0,null);var f_9249 = cljs.core.nth.call(null,vec__9188_9247,1,null);f_9249.call(null,tx_data,root_cursor);
{
var G__9250 = seq__9184_9243;
var G__9251 = chunk__9185_9244;
var G__9252 = count__9186_9245;
var G__9253 = (i__9187_9246 + 1);
seq__9184_9243 = G__9250;
chunk__9185_9244 = G__9251;
count__9186_9245 = G__9252;
i__9187_9246 = G__9253;
continue;
}
} else
{var temp__4126__auto___9254 = cljs.core.seq.call(null,seq__9184_9243);if(temp__4126__auto___9254)
{var seq__9184_9255__$1 = temp__4126__auto___9254;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9184_9255__$1))
{var c__7182__auto___9256 = cljs.core.chunk_first.call(null,seq__9184_9255__$1);{
var G__9257 = cljs.core.chunk_rest.call(null,seq__9184_9255__$1);
var G__9258 = c__7182__auto___9256;
var G__9259 = cljs.core.count.call(null,c__7182__auto___9256);
var G__9260 = 0;
seq__9184_9243 = G__9257;
chunk__9185_9244 = G__9258;
count__9186_9245 = G__9259;
i__9187_9246 = G__9260;
continue;
}
} else
{var vec__9189_9261 = cljs.core.first.call(null,seq__9184_9255__$1);var __9262 = cljs.core.nth.call(null,vec__9189_9261,0,null);var f_9263 = cljs.core.nth.call(null,vec__9189_9261,1,null);f_9263.call(null,tx_data,root_cursor);
{
var G__9264 = cljs.core.next.call(null,seq__9184_9255__$1);
var G__9265 = null;
var G__9266 = 0;
var G__9267 = 0;
seq__9184_9243 = G__9264;
chunk__9185_9244 = G__9265;
count__9186_9245 = G__9266;
i__9187_9246 = G__9267;
continue;
}
}
} else
{}
}
break;
}
}
return this$__$1;
});})(x9183_9242,listeners_9240,render_queue_9241))
;
}
return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){return om.core._unlisten_BANG_.call(null,state,key);
});
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an IAtom
* instance, and a map of options and installs an Om/React render
* loop.
* 
* f must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take at least two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Options may also include any key allowed by om.core/build to
* customize f. In addition om.core/root supports the following
* special options:
* 
* :target     - (required) a DOM element.
* :shared     - data to be shared by all components, see om.core/get-shared
* :tx-listen  - a function that will listen in in transactions, should
* take 2 arguments - the first a map containing the
* path, old and new state at path, old and new global
* state, and transaction tag if provided.
* :instrument - a function of three arguments that if provided will
* intercept all calls to om.core/build. This function should
* correspond to the three arity version of om.core/build.
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__9190){var map__9205 = p__9190;var map__9205__$1 = ((cljs.core.seq_QMARK_.call(null,map__9205))?cljs.core.apply.call(null,cljs.core.hash_map,map__9205):map__9205);var options = map__9205__$1;var instrument = cljs.core.get.call(null,map__9205__$1,new cljs.core.Keyword(null,"instrument","instrument",2409387865));var path = cljs.core.get.call(null,map__9205__$1,new cljs.core.Keyword(null,"path","path",1017337751));var tx_listen = cljs.core.get.call(null,map__9205__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",666878114));var target = cljs.core.get.call(null,map__9205__$1,new cljs.core.Keyword(null,"target","target",4427965699));if(!((target == null)))
{} else
{throw (new Error(("Assert failed: No target specified to om.core/root\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"target","target",1773529930,null))))))));
}
var roots_SINGLEQUOTE__9268 = cljs.core.deref.call(null,om.core.roots);if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__9268,target))
{cljs.core.get.call(null,roots_SINGLEQUOTE__9268,target).call(null);
} else
{}
var watch_key = cljs.core.gensym.call(null);var state = (((function (){var G__9206 = value;if(G__9206)
{var bit__7076__auto__ = (G__9206.cljs$lang$protocol_mask$partition1$ & 16384);if((bit__7076__auto__) || (G__9206.cljs$core$IAtom$))
{return true;
} else
{if((!G__9206.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__9206);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__9206);
}
})())?value:cljs.core.atom.call(null,value));var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",4427965699),new cljs.core.Keyword(null,"tx-listen","tx-listen",666878114),new cljs.core.Keyword(null,"path","path",1017337751));var rootf = ((function (watch_key,state,state__$1,m,map__9205,map__9205__$1,options,instrument,path,tx_listen,target){
return (function rootf(){cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);
var value__$1 = cljs.core.deref.call(null,state__$1);var cursor = (((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path));om.dom.render.call(null,(function (){var _STAR_instrument_STAR_9213 = om.core._STAR_instrument_STAR_;var _STAR_state_STAR_9214 = om.core._STAR_state_STAR_;try{om.core._STAR_instrument_STAR_ = instrument;
om.core._STAR_state_STAR_ = state__$1;
return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_state_STAR_ = _STAR_state_STAR_9214;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_9213;
}})(),target);
var queue = om.core._get_queue.call(null,state__$1);if(cljs.core.empty_QMARK_.call(null,queue))
{return null;
} else
{var seq__9215_9269 = cljs.core.seq.call(null,queue);var chunk__9216_9270 = null;var count__9217_9271 = 0;var i__9218_9272 = 0;while(true){
if((i__9218_9272 < count__9217_9271))
{var c_9273 = cljs.core._nth.call(null,chunk__9216_9270,i__9218_9272);if(cljs.core.truth_(c_9273.isMounted()))
{c_9273.forceUpdate();
} else
{}
{
var G__9274 = seq__9215_9269;
var G__9275 = chunk__9216_9270;
var G__9276 = count__9217_9271;
var G__9277 = (i__9218_9272 + 1);
seq__9215_9269 = G__9274;
chunk__9216_9270 = G__9275;
count__9217_9271 = G__9276;
i__9218_9272 = G__9277;
continue;
}
} else
{var temp__4126__auto___9278 = cljs.core.seq.call(null,seq__9215_9269);if(temp__4126__auto___9278)
{var seq__9215_9279__$1 = temp__4126__auto___9278;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9215_9279__$1))
{var c__7182__auto___9280 = cljs.core.chunk_first.call(null,seq__9215_9279__$1);{
var G__9281 = cljs.core.chunk_rest.call(null,seq__9215_9279__$1);
var G__9282 = c__7182__auto___9280;
var G__9283 = cljs.core.count.call(null,c__7182__auto___9280);
var G__9284 = 0;
seq__9215_9269 = G__9281;
chunk__9216_9270 = G__9282;
count__9217_9271 = G__9283;
i__9218_9272 = G__9284;
continue;
}
} else
{var c_9285 = cljs.core.first.call(null,seq__9215_9279__$1);if(cljs.core.truth_(c_9285.isMounted()))
{c_9285.forceUpdate();
} else
{}
{
var G__9286 = cljs.core.next.call(null,seq__9215_9279__$1);
var G__9287 = null;
var G__9288 = 0;
var G__9289 = 0;
seq__9215_9269 = G__9286;
chunk__9216_9270 = G__9287;
count__9217_9271 = G__9288;
i__9218_9272 = G__9289;
continue;
}
}
} else
{}
}
break;
}
return om.core._empty_queue_BANG_.call(null,state__$1);
}
});})(watch_key,state,state__$1,m,map__9205,map__9205__$1,options,instrument,path,tx_listen,target))
;cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,m,rootf,map__9205,map__9205__$1,options,instrument,path,tx_listen,target){
return (function (_,___$1,___$2,___$3){if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf))
{} else
{cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}
if(cljs.core.truth_(om.core.refresh_queued))
{return null;
} else
{om.core.refresh_queued = true;
if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame(om.core.render_all);
} else
{return setTimeout(om.core.render_all,16);
}
}
});})(watch_key,state,state__$1,m,rootf,map__9205,map__9205__$1,options,instrument,path,tx_listen,target))
);
cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,m,rootf,map__9205,map__9205__$1,options,instrument,path,tx_listen,target){
return (function (){cljs.core.remove_watch.call(null,state__$1,watch_key);
om.core.tear_down.call(null,state__$1,watch_key);
cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);
return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,m,rootf,map__9205,map__9205__$1,options,instrument,path,tx_listen,target))
);
return rootf.call(null);
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){return transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){return transact_BANG_.call(null,cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null):null)));return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){return om.core.transact_BANG_.call(null,cursor,korks,(function (_){return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){return om.core.transact_BANG_.call(null,cursor,korks,(function (_){return v;
}),tag);
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){var temp__4126__auto__ = owner.refs;if(cljs.core.truth_(temp__4126__auto__))
{var refs = temp__4126__auto__;return (refs[name]).getDOMNode();
} else
{return null;
}
});
get_node = function(owner,name){
switch(arguments.length){
case 1:
return get_node__1.call(this,owner);
case 2:
return get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_node.cljs$core$IFn$_invoke$arity$1 = get_node__1;
get_node.cljs$core$IFn$_invoke$arity$2 = get_node__2;
return get_node;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function() {
var set_state_BANG_ = null;
var set_state_BANG___2 = (function (owner,v){return om.core._set_state_BANG_.call(null,owner,v);
});
var set_state_BANG___3 = (function (owner,korks,v){var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._set_state_BANG_.call(null,owner,ks,v);
});
set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_BANG___2.call(this,owner,korks);
case 3:
return set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_BANG___2;
set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_BANG___3;
return set_state_BANG_;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and a
* function to transition the state of the component. Conceptually
* analagous to React setState. Will schedule an Om re-render.
*/
om.core.update_state_BANG_ = (function() {
var update_state_BANG_ = null;
var update_state_BANG___2 = (function (owner,f){return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_BANG___3 = (function (owner,korks,f){return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_BANG___2.call(this,owner,korks);
case 3:
return update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_BANG___2;
update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_BANG___3;
return update_state_BANG_;
})()
;
/**
* Utility to re-render an owner.
*/
om.core.refresh_BANG_ = (function refresh_BANG_(owner){return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){return om.core._get_render_state.call(null,owner);
});
var get_render_state__2 = (function (owner,korks){var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_render_state.call(null,owner,ks);
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;
/**
* Returns true if in the React render phase.
*/
om.core.rendering_QMARK_ = (function rendering_QMARK_(){return om.core._STAR_read_enabled_STAR_ === true;
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gestalt.state')) {
goog.provide('lt.plugins.gestalt.state');
goog.require('cljs.core');
lt.plugins.gestalt.state.global_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"docs","docs",1016993197),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"vertex-shaders","vertex-shaders",4112853367),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"fragment-shaders","fragment-shaders",2490494499),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"current-vertex","current-vertex",2517362666),"",new cljs.core.Keyword(null,"current-fragment","current-fragment",3062412182),"",new cljs.core.Keyword(null,"errors","errors",4014236381),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"text","text",1017460895),"WHEE"], null));
lt.plugins.gestalt.state.docs_path = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"docs","docs",1016993197)], null);
lt.plugins.gestalt.state.frag_path = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fragment-shaders","fragment-shaders",2490494499)], null);
lt.plugins.gestalt.state.vert_path = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertex-shaders","vertex-shaders",4112853367)], null);
lt.plugins.gestalt.state.error_path = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",4014236381)], null);
lt.plugins.gestalt.state.get_state = (function get_state(state_vec){return cljs.core.get_in.call(null,cljs.core.deref.call(null,lt.plugins.gestalt.state.global_state),state_vec);
});
lt.plugins.gestalt.state.swap_state_fn = (function swap_state_fn(state_vec){return cljs.core.partial.call(null,cljs.core.swap_BANG_,lt.plugins.gestalt.state.global_state,cljs.core.update_in,state_vec);
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gestalt.linker')) {
goog.provide('lt.plugins.gestalt.linker');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.notifos');
goog.require('lt.object');
goog.require('om.dom');
goog.require('om.dom');
goog.require('lt.plugins.gestalt.state');
goog.require('lt.objs.tabs');
goog.require('lt.plugins.gestalt.state');
goog.require('lt.util.js');
goog.require('lt.objs.command');
goog.require('lt.objs.tabs');
goog.require('lt.objs.statusbar');
goog.require('lt.objs.statusbar');
goog.require('lt.util.js');
goog.require('om.core');
goog.require('om.core');
goog.require('lt.objs.notifos');
goog.require('lt.object');
lt.plugins.gestalt.linker.file_list = (function file_list(data,owner){if(typeof lt.plugins.gestalt.linker.t9709 !== 'undefined')
{} else
{
/**
* @constructor
*/
lt.plugins.gestalt.linker.t9709 = (function (owner,data,file_list,meta9710){
this.owner = owner;
this.data = data;
this.file_list = file_list;
this.meta9710 = meta9710;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lt.plugins.gestalt.linker.t9709.cljs$lang$type = true;
lt.plugins.gestalt.linker.t9709.cljs$lang$ctorStr = "lt.plugins.gestalt.linker/t9709";
lt.plugins.gestalt.linker.t9709.cljs$lang$ctorPrWriter = (function (this__6993__auto__,writer__6994__auto__,opt__6995__auto__){return cljs.core._write.call(null,writer__6994__auto__,"lt.plugins.gestalt.linker/t9709");
});
lt.plugins.gestalt.linker.t9709.prototype.om$core$IRender$ = true;
lt.plugins.gestalt.linker.t9709.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.h1(null,(function (){var or__6426__auto__ = cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"text","text",1017460895));if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return "No value for text";
}
})()),React.DOM.h1(null,"Pick a Vertex Shader:"),om.core.build.call(null,lt.plugins.gestalt.linker.shader_list,cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"vertex-shaders","vertex-shaders",4112853367))),React.DOM.h1(null,"Pick a Fragment Shader:"),om.core.build.call(null,lt.plugins.gestalt.linker.shader_list,cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"fragment-shaders","fragment-shaders",2490494499))));
});
lt.plugins.gestalt.linker.t9709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9711){var self__ = this;
var _9711__$1 = this;return self__.meta9710;
});
lt.plugins.gestalt.linker.t9709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9711,meta9710__$1){var self__ = this;
var _9711__$1 = this;return (new lt.plugins.gestalt.linker.t9709(self__.owner,self__.data,self__.file_list,meta9710__$1));
});
lt.plugins.gestalt.linker.__GT_t9709 = (function __GT_t9709(owner__$1,data__$1,file_list__$1,meta9710){return (new lt.plugins.gestalt.linker.t9709(owner__$1,data__$1,file_list__$1,meta9710));
});
}
return (new lt.plugins.gestalt.linker.t9709(owner,data,file_list,null));
});
lt.plugins.gestalt.linker.shader_elem = (function shader_elem(p__9712,owner){var vec__9717 = p__9712;var fname = cljs.core.nth.call(null,vec__9717,0,null);var _ = cljs.core.nth.call(null,vec__9717,1,null);if(typeof lt.plugins.gestalt.linker.t9718 !== 'undefined')
{} else
{
/**
* @constructor
*/
lt.plugins.gestalt.linker.t9718 = (function (_,fname,vec__9717,owner,p__9712,shader_elem,meta9719){
this._ = _;
this.fname = fname;
this.vec__9717 = vec__9717;
this.owner = owner;
this.p__9712 = p__9712;
this.shader_elem = shader_elem;
this.meta9719 = meta9719;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lt.plugins.gestalt.linker.t9718.cljs$lang$type = true;
lt.plugins.gestalt.linker.t9718.cljs$lang$ctorStr = "lt.plugins.gestalt.linker/t9718";
lt.plugins.gestalt.linker.t9718.cljs$lang$ctorPrWriter = ((function (vec__9717,fname,_){
return (function (this__6993__auto__,writer__6994__auto__,opt__6995__auto__){return cljs.core._write.call(null,writer__6994__auto__,"lt.plugins.gestalt.linker/t9718");
});})(vec__9717,fname,_))
;
lt.plugins.gestalt.linker.t9718.prototype.om$core$IRender$ = true;
lt.plugins.gestalt.linker.t9718.prototype.om$core$IRender$render$arity$1 = ((function (vec__9717,fname,_){
return (function (___$2){var self__ = this;
var ___$3 = this;return React.DOM.li(null,self__.fname);
});})(vec__9717,fname,_))
;
lt.plugins.gestalt.linker.t9718.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__9717,fname,_){
return (function (_9720){var self__ = this;
var _9720__$1 = this;return self__.meta9719;
});})(vec__9717,fname,_))
;
lt.plugins.gestalt.linker.t9718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__9717,fname,_){
return (function (_9720,meta9719__$1){var self__ = this;
var _9720__$1 = this;return (new lt.plugins.gestalt.linker.t9718(self__._,self__.fname,self__.vec__9717,self__.owner,self__.p__9712,self__.shader_elem,meta9719__$1));
});})(vec__9717,fname,_))
;
lt.plugins.gestalt.linker.__GT_t9718 = ((function (vec__9717,fname,_){
return (function __GT_t9718(___$1,fname__$1,vec__9717__$1,owner__$1,p__9712__$1,shader_elem__$1,meta9719){return (new lt.plugins.gestalt.linker.t9718(___$1,fname__$1,vec__9717__$1,owner__$1,p__9712__$1,shader_elem__$1,meta9719));
});})(vec__9717,fname,_))
;
}
return (new lt.plugins.gestalt.linker.t9718(_,fname,vec__9717,owner,p__9712,shader_elem,null));
});
lt.plugins.gestalt.linker.shader_list = (function shader_list(shaders,owner){if(typeof lt.plugins.gestalt.linker.t9724 !== 'undefined')
{} else
{
/**
* @constructor
*/
lt.plugins.gestalt.linker.t9724 = (function (owner,shaders,shader_list,meta9725){
this.owner = owner;
this.shaders = shaders;
this.shader_list = shader_list;
this.meta9725 = meta9725;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lt.plugins.gestalt.linker.t9724.cljs$lang$type = true;
lt.plugins.gestalt.linker.t9724.cljs$lang$ctorStr = "lt.plugins.gestalt.linker/t9724";
lt.plugins.gestalt.linker.t9724.cljs$lang$ctorPrWriter = (function (this__6993__auto__,writer__6994__auto__,opt__6995__auto__){return cljs.core._write.call(null,writer__6994__auto__,"lt.plugins.gestalt.linker/t9724");
});
lt.plugins.gestalt.linker.t9724.prototype.om$core$IRender$ = true;
lt.plugins.gestalt.linker.t9724.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,lt.plugins.gestalt.linker.shader_elem,self__.shaders));
});
lt.plugins.gestalt.linker.t9724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9726){var self__ = this;
var _9726__$1 = this;return self__.meta9725;
});
lt.plugins.gestalt.linker.t9724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9726,meta9725__$1){var self__ = this;
var _9726__$1 = this;return (new lt.plugins.gestalt.linker.t9724(self__.owner,self__.shaders,self__.shader_list,meta9725__$1));
});
lt.plugins.gestalt.linker.__GT_t9724 = (function __GT_t9724(owner__$1,shaders__$1,shader_list__$1,meta9725){return (new lt.plugins.gestalt.linker.t9724(owner__$1,shaders__$1,shader_list__$1,meta9725));
});
}
return (new lt.plugins.gestalt.linker.t9724(owner,shaders,shader_list,null));
});
lt.plugins.gestalt.linker.glsl_linker = (function glsl_linker(this$){var e__8642__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.glsl-linker","div.glsl-linker",3152567915)], null));var seq__9733_9739 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9734_9740 = null;var count__9735_9741 = 0;var i__9736_9742 = 0;while(true){
if((i__9736_9742 < count__9735_9741))
{var vec__9737_9743 = cljs.core._nth.call(null,chunk__9734_9740,i__9736_9742);var ev__8643__auto___9744 = cljs.core.nth.call(null,vec__9737_9743,0,null);var func__8644__auto___9745 = cljs.core.nth.call(null,vec__9737_9743,1,null);lt.util.dom.on.call(null,e__8642__auto__,ev__8643__auto___9744,func__8644__auto___9745);
{
var G__9746 = seq__9733_9739;
var G__9747 = chunk__9734_9740;
var G__9748 = count__9735_9741;
var G__9749 = (i__9736_9742 + 1);
seq__9733_9739 = G__9746;
chunk__9734_9740 = G__9747;
count__9735_9741 = G__9748;
i__9736_9742 = G__9749;
continue;
}
} else
{var temp__4126__auto___9750 = cljs.core.seq.call(null,seq__9733_9739);if(temp__4126__auto___9750)
{var seq__9733_9751__$1 = temp__4126__auto___9750;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9733_9751__$1))
{var c__7182__auto___9752 = cljs.core.chunk_first.call(null,seq__9733_9751__$1);{
var G__9753 = cljs.core.chunk_rest.call(null,seq__9733_9751__$1);
var G__9754 = c__7182__auto___9752;
var G__9755 = cljs.core.count.call(null,c__7182__auto___9752);
var G__9756 = 0;
seq__9733_9739 = G__9753;
chunk__9734_9740 = G__9754;
count__9735_9741 = G__9755;
i__9736_9742 = G__9756;
continue;
}
} else
{var vec__9738_9757 = cljs.core.first.call(null,seq__9733_9751__$1);var ev__8643__auto___9758 = cljs.core.nth.call(null,vec__9738_9757,0,null);var func__8644__auto___9759 = cljs.core.nth.call(null,vec__9738_9757,1,null);lt.util.dom.on.call(null,e__8642__auto__,ev__8643__auto___9758,func__8644__auto___9759);
{
var G__9760 = cljs.core.next.call(null,seq__9733_9751__$1);
var G__9761 = null;
var G__9762 = 0;
var G__9763 = 0;
seq__9733_9739 = G__9760;
chunk__9734_9740 = G__9761;
count__9735_9741 = G__9762;
i__9736_9742 = G__9763;
continue;
}
}
} else
{}
}
break;
}
return e__8642__auto__;
});
lt.plugins.gestalt.linker.build_linker_ui = (function build_linker_ui(this$){return om.core.root.call(null,lt.plugins.gestalt.linker.file_list,lt.plugins.gestalt.state.global_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))], null));
});
lt.plugins.gestalt.linker.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4126__auto___9764 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4126__auto___9764))
{var ts_9765 = temp__4126__auto___9764;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_9765))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_9765);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gestalt.linker","on-close-destroy","lt.plugins.gestalt.linker/on-close-destroy",1983701305),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gestalt.linker.__BEH__on_close_destroy);
lt.plugins.gestalt.linker.__BEH__link_on_click = (function __BEH__link_on_click(this$){return lt.objs.notifos.working.call(null,"Whee, clicked");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gestalt.linker","link-on-click","lt.plugins.gestalt.linker/link-on-click",2007768163),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clicked","clicked",1874428825),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gestalt.linker.__BEH__link_on_click);
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gestalt.linker","glsl-linker","lt.plugins.gestalt.linker/glsl-linker",4581330074),new cljs.core.Keyword(null,"name","name",1017277949),"GLSL Program Linker",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gestalt.linker","link-on-click","lt.plugins.gestalt.linker/link-on-click",2007768163),new cljs.core.Keyword("lt.plugins.gestalt.linker","on-close-destroy","lt.plugins.gestalt.linker/on-close-destroy",1983701305)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.gestalt.linker.glsl_linker.call(null,this$);
}));
lt.plugins.gestalt.linker.create_linker = (function create_linker(){var linker_obj = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gestalt.linker","glsl-linker","lt.plugins.gestalt.linker/glsl-linker",4581330074));lt.plugins.gestalt.linker.build_linker_ui.call(null,linker_obj);
lt.objs.tabs.add_BANG_.call(null,linker_obj);
return lt.objs.tabs.active_BANG_.call(null,linker_obj);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"link-shaders","link-shaders",978743757),new cljs.core.Keyword(null,"desc","desc",1016984067),"GLSL: Open shader linker view",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gestalt.linker.create_linker], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gestalt.util')) {
goog.provide('lt.plugins.gestalt.util');
goog.require('cljs.core');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
lt.plugins.gestalt.util.symbol_token_QMARK_ = (function symbol_token_QMARK_(s){return cljs.core.re_seq.call(null,/[\w\$_\-\.\*\+\\/\?\><!]/,s);
});
lt.plugins.gestalt.util.find_symbol_at_cursor = (function find_symbol_at_cursor(editor){var loc = lt.objs.editor.__GT_cursor.call(null,editor);var token_left = lt.objs.editor.__GT_token.call(null,editor,loc);var token_right = lt.objs.editor.__GT_token.call(null,editor,cljs.core.update_in.call(null,loc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc));var or__6426__auto__ = (cljs.core.truth_(lt.plugins.gestalt.util.symbol_token_QMARK_.call(null,new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token_right)))?cljs.core.assoc.call(null,token_right,new cljs.core.Keyword(null,"loc","loc",1014011570),loc):null);if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{if(cljs.core.truth_(lt.plugins.gestalt.util.symbol_token_QMARK_.call(null,new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token_left))))
{return cljs.core.assoc.call(null,token_left,new cljs.core.Keyword(null,"loc","loc",1014011570),loc);
} else
{return null;
}
}
});
lt.plugins.gestalt.util.current_buffer_content = (function current_buffer_content(){var cm = lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null));return cm.getRange({"ch": 0, "line": 0},{"ch": 0, "line": lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null)).lineCount()});
});
lt.plugins.gestalt.util.current_file_name = (function current_file_name(){return new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null))));
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gestalt.core')) {
goog.provide('lt.plugins.gestalt.core');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.notifos');
goog.require('lt.objs.console');
goog.require('lt.plugins.gestalt.util');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.plugins.gestalt.state');
goog.require('lt.plugins.gestalt.linker');
goog.require('lt.objs.files');
goog.require('lt.plugins.gestalt.state');
goog.require('lt.util.js');
goog.require('lt.objs.command');
goog.require('lt.objs.console');
goog.require('lt.plugins.gestalt.linker');
goog.require('lt.util.js');
goog.require('lt.objs.editor');
goog.require('lt.plugins.gestalt.util');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('lt.objs.notifos');
goog.require('lt.objs.files');
lt.plugins.gestalt.core.canvas = document.createElement("CANVAS");
lt.plugins.gestalt.core.gl = lt.plugins.gestalt.core.canvas.getContext("webgl");
lt.plugins.gestalt.core.error__GT_map = (function error__GT_map(error){var parts = clojure.string.split.call(null,error,/:/);var line = parseInt(cljs.core.nth.call(null,parts,2),10);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",1017226086),(cljs.core.truth_(isNaN(line))?0:(line - 1)),new cljs.core.Keyword(null,"operator","operator",513350678),clojure.string.replace.call(null,clojure.string.trim.call(null,cljs.core.nth.call(null,parts,3)),/\'/,""),new cljs.core.Keyword(null,"message","message",1968829305),clojure.string.trim.call(null,cljs.core.nth.call(null,parts,4))], null);
});
lt.plugins.gestalt.core.gl_errors__GT_edn = (function gl_errors__GT_edn(error_str){var errors = clojure.string.split_lines.call(null,error_str);return cljs.core.vec.call(null,cljs.core.map.call(null,lt.plugins.gestalt.core.error__GT_map,errors));
});
lt.plugins.gestalt.core.current_editor = (function current_editor(){return lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null));
});
cljs.core.add_watch.call(null,lt.plugins.gestalt.state.global_state,new cljs.core.Keyword(null,"line-errors","line-errors",4019585750),(function (k,r,o,n){var error_path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",4014236381),lt.plugins.gestalt.util.current_file_name.call(null)], null);var old_errors = cljs.core.get_in.call(null,o,error_path);var new_errors = cljs.core.get_in.call(null,n,error_path);var editor = lt.plugins.gestalt.core.current_editor.call(null);if(cljs.core.not_EQ_.call(null,old_errors,new_errors))
{var seq__10146_10168 = cljs.core.seq.call(null,old_errors);var chunk__10147_10169 = null;var count__10148_10170 = 0;var i__10149_10171 = 0;while(true){
if((i__10149_10171 < count__10148_10170))
{var error_10172 = cljs.core._nth.call(null,chunk__10147_10169,i__10149_10171);lt.objs.editor._line_class.call(null,editor,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(error_10172),"wrap","glsl-error");
{
var G__10173 = seq__10146_10168;
var G__10174 = chunk__10147_10169;
var G__10175 = count__10148_10170;
var G__10176 = (i__10149_10171 + 1);
seq__10146_10168 = G__10173;
chunk__10147_10169 = G__10174;
count__10148_10170 = G__10175;
i__10149_10171 = G__10176;
continue;
}
} else
{var temp__4126__auto___10177 = cljs.core.seq.call(null,seq__10146_10168);if(temp__4126__auto___10177)
{var seq__10146_10178__$1 = temp__4126__auto___10177;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10146_10178__$1))
{var c__7182__auto___10179 = cljs.core.chunk_first.call(null,seq__10146_10178__$1);{
var G__10180 = cljs.core.chunk_rest.call(null,seq__10146_10178__$1);
var G__10181 = c__7182__auto___10179;
var G__10182 = cljs.core.count.call(null,c__7182__auto___10179);
var G__10183 = 0;
seq__10146_10168 = G__10180;
chunk__10147_10169 = G__10181;
count__10148_10170 = G__10182;
i__10149_10171 = G__10183;
continue;
}
} else
{var error_10184 = cljs.core.first.call(null,seq__10146_10178__$1);lt.objs.editor._line_class.call(null,editor,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(error_10184),"wrap","glsl-error");
{
var G__10185 = cljs.core.next.call(null,seq__10146_10178__$1);
var G__10186 = null;
var G__10187 = 0;
var G__10188 = 0;
seq__10146_10168 = G__10185;
chunk__10147_10169 = G__10186;
count__10148_10170 = G__10187;
i__10149_10171 = G__10188;
continue;
}
}
} else
{}
}
break;
}
var seq__10150 = cljs.core.seq.call(null,new_errors);var chunk__10151 = null;var count__10152 = 0;var i__10153 = 0;while(true){
if((i__10153 < count__10152))
{var error = cljs.core._nth.call(null,chunk__10151,i__10153);lt.objs.editor._PLUS_line_class.call(null,editor,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(error),"wrap","glsl-error");
{
var G__10189 = seq__10150;
var G__10190 = chunk__10151;
var G__10191 = count__10152;
var G__10192 = (i__10153 + 1);
seq__10150 = G__10189;
chunk__10151 = G__10190;
count__10152 = G__10191;
i__10153 = G__10192;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10150);if(temp__4126__auto__)
{var seq__10150__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10150__$1))
{var c__7182__auto__ = cljs.core.chunk_first.call(null,seq__10150__$1);{
var G__10193 = cljs.core.chunk_rest.call(null,seq__10150__$1);
var G__10194 = c__7182__auto__;
var G__10195 = cljs.core.count.call(null,c__7182__auto__);
var G__10196 = 0;
seq__10150 = G__10193;
chunk__10151 = G__10194;
count__10152 = G__10195;
i__10153 = G__10196;
continue;
}
} else
{var error = cljs.core.first.call(null,seq__10150__$1);lt.objs.editor._PLUS_line_class.call(null,editor,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(error),"wrap","glsl-error");
{
var G__10197 = cljs.core.next.call(null,seq__10150__$1);
var G__10198 = null;
var G__10199 = 0;
var G__10200 = 0;
seq__10150 = G__10197;
chunk__10151 = G__10198;
count__10152 = G__10199;
i__10153 = G__10200;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
}));
lt.plugins.gestalt.core.compile_shader_type = (function compile_shader_type(fname,source,shader_type){var shader = lt.plugins.gestalt.core.gl.createShader(shader_type);var error_state_fn = lt.plugins.gestalt.state.swap_state_fn.call(null,lt.plugins.gestalt.state.error_path);lt.plugins.gestalt.core.gl.shaderSource(shader,source);
lt.plugins.gestalt.core.gl.compileShader(shader);
if(cljs.core.truth_(lt.plugins.gestalt.core.gl.getShaderParameter(shader,lt.plugins.gestalt.core.gl.COMPILE_STATUS)))
{lt.plugins.gestalt.state.swap_state_fn.call(null,(function (){var pred__10161 = cljs.core._EQ_;var expr__10162 = shader_type;if(cljs.core.truth_(pred__10161.call(null,lt.plugins.gestalt.core.gl.FRAGMENT_SHADER,expr__10162)))
{return lt.plugins.gestalt.state.frag_path;
} else
{if(cljs.core.truth_(pred__10161.call(null,lt.plugins.gestalt.core.gl.VERTEX_SHADER,expr__10162)))
{return lt.plugins.gestalt.state.vert_path;
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__10162))));
}
}
})()).call(null,cljs.core.assoc,fname,shader);
error_state_fn.call(null,cljs.core.assoc,fname,cljs.core.PersistentVector.EMPTY);
return lt.objs.notifos.set_msg_BANG_.call(null,"Successfully compiled shader");
} else
{var errors = lt.plugins.gestalt.core.gl_errors__GT_edn.call(null,lt.plugins.gestalt.core.gl.getShaderInfoLog(shader));var seq__10164_10201 = cljs.core.seq.call(null,errors);var chunk__10165_10202 = null;var count__10166_10203 = 0;var i__10167_10204 = 0;while(true){
if((i__10167_10204 < count__10166_10203))
{var error_10205 = cljs.core._nth.call(null,chunk__10165_10202,i__10167_10204);lt.objs.console.log.call(null,("Error on line "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(error_10205) + 1))+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"operator","operator",513350678).cljs$core$IFn$_invoke$arity$1(error_10205))+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(error_10205))),"error");
{
var G__10206 = seq__10164_10201;
var G__10207 = chunk__10165_10202;
var G__10208 = count__10166_10203;
var G__10209 = (i__10167_10204 + 1);
seq__10164_10201 = G__10206;
chunk__10165_10202 = G__10207;
count__10166_10203 = G__10208;
i__10167_10204 = G__10209;
continue;
}
} else
{var temp__4126__auto___10210 = cljs.core.seq.call(null,seq__10164_10201);if(temp__4126__auto___10210)
{var seq__10164_10211__$1 = temp__4126__auto___10210;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10164_10211__$1))
{var c__7182__auto___10212 = cljs.core.chunk_first.call(null,seq__10164_10211__$1);{
var G__10213 = cljs.core.chunk_rest.call(null,seq__10164_10211__$1);
var G__10214 = c__7182__auto___10212;
var G__10215 = cljs.core.count.call(null,c__7182__auto___10212);
var G__10216 = 0;
seq__10164_10201 = G__10213;
chunk__10165_10202 = G__10214;
count__10166_10203 = G__10215;
i__10167_10204 = G__10216;
continue;
}
} else
{var error_10217 = cljs.core.first.call(null,seq__10164_10211__$1);lt.objs.console.log.call(null,("Error on line "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(error_10217) + 1))+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"operator","operator",513350678).cljs$core$IFn$_invoke$arity$1(error_10217))+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(error_10217))),"error");
{
var G__10218 = cljs.core.next.call(null,seq__10164_10211__$1);
var G__10219 = null;
var G__10220 = 0;
var G__10221 = 0;
seq__10164_10201 = G__10218;
chunk__10165_10202 = G__10219;
count__10166_10203 = G__10220;
i__10167_10204 = G__10221;
continue;
}
}
} else
{}
}
break;
}
error_state_fn.call(null,cljs.core.assoc,fname,errors);
return lt.objs.notifos.set_msg_BANG_.call(null,"Ran into some errors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
});
lt.plugins.gestalt.core.shader_mapping = new cljs.core.PersistentArrayMap(null, 2, ["x-shader/x-fragment",lt.plugins.gestalt.core.gl.FRAGMENT_SHADER,"x-shader/x-vertex",lt.plugins.gestalt.core.gl.VERTEX_SHADER], null);
lt.plugins.gestalt.core.compile_shader = (function compile_shader(fname){var temp__4126__auto__ = lt.objs.files.open_sync.call(null,fname);if(cljs.core.truth_(temp__4126__auto__))
{var file = temp__4126__auto__;return lt.plugins.gestalt.core.compile_shader_type.call(null,fname,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(file),cljs.core.get.call(null,lt.plugins.gestalt.core.shader_mapping,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(file)));
} else
{return null;
}
});
lt.plugins.gestalt.core.compile_shader_buffer = (function compile_shader_buffer(){var fname = lt.plugins.gestalt.util.current_file_name.call(null);var mime = new cljs.core.Keyword(null,"mime","mime",1017255846).cljs$core$IFn$_invoke$arity$1(lt.objs.files.path__GT_type.call(null,fname));var temp__4124__auto__ = cljs.core.get.call(null,lt.plugins.gestalt.core.shader_mapping,mime);if(cljs.core.truth_(temp__4124__auto__))
{var shader_type = temp__4124__auto__;return lt.plugins.gestalt.core.compile_shader_type.call(null,fname,lt.plugins.gestalt.util.current_buffer_content.call(null),shader_type);
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"This file is not a valid shader",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"gestalt.compile-shader","gestalt.compile-shader",1907076373),new cljs.core.Keyword(null,"desc","desc",1016984067),"GLSL: Compile shader",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gestalt.core.compile_shader_buffer], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"create-program","create-program",2679495205),new cljs.core.Keyword(null,"desc","desc",1016984067),"GLSL: Create program",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return null;
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gestalt.docs')) {
goog.provide('lt.plugins.gestalt.docs');
goog.require('cljs.core');
goog.require('lt.objs.notifos');
goog.require('lt.plugins.gestalt.util');
goog.require('lt.plugins.doc');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.plugins.gestalt.util');
goog.require('lt.objs.files');
goog.require('lt.plugins.gestalt.state');
goog.require('lt.plugins.gestalt.state');
goog.require('lt.objs.editor');
goog.require('lt.plugins.doc');
goog.require('lt.objs.notifos');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('lt.objs.files');
goog.require('lt.object');
lt.plugins.gestalt.docs.update_docs_BANG_ = (function update_docs_BANG_(res){if(cljs.core.truth_(new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(res)))
{return lt.plugins.gestalt.state.swap_state_fn.call(null,lt.plugins.gestalt.state.docs_path).call(null,cljs.core.reset_BANG_,cljs.reader.read_string.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(res)));
} else
{return null;
}
});
lt.plugins.gestalt.docs.grab_docs_BANG_ = (function grab_docs_BANG_(){return lt.objs.files.open.call(null,lt.objs.files.lt_home.call(null,"/plugins/gestalt/glsl-docs.edn"),lt.plugins.gestalt.docs.update_docs_BANG_);
});
lt.plugins.gestalt.docs.grab_docs_BANG_.call(null);
lt.plugins.gestalt.docs.manglsl_root = "http://www.khronos.org/opengles/sdk/docs/man3/html/";
lt.plugins.gestalt.docs.param_description = (function param_description(param){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(param))+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(param))+"\n");
});
lt.plugins.gestalt.docs.get_docs = (function get_docs(){return lt.plugins.gestalt.state.get_state.call(null,lt.plugins.gestalt.state.docs_path);
});
lt.plugins.gestalt.docs.get_doc_map = (function get_doc_map(token){var docs = cljs.core.get.call(null,lt.plugins.gestalt.docs.get_docs.call(null),token);var params = cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"params","params",4313443576).cljs$core$IFn$_invoke$arity$1(docs));if(cljs.core.truth_(docs))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)+"("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",params)))+")"),new cljs.core.Keyword(null,"ns","ns",1013907767),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lt.plugins.gestalt.docs.manglsl_root)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)+".xhtml")], null),"GLSL Documentation"], null),new cljs.core.Keyword(null,"doc","doc",1014003882),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(docs))+"\n\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,lt.plugins.gestalt.docs.param_description,new cljs.core.Keyword(null,"params","params",4313443576).cljs$core$IFn$_invoke$arity$1(docs)))))], null);
} else
{return null;
}
});
lt.plugins.gestalt.docs.manglsl_browser_doc = (function manglsl_browser_doc(editor){var loc = lt.objs.editor.__GT_cursor.call(null,editor);var token = new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(lt.plugins.gestalt.util.find_symbol_at_cursor.call(null,editor));var doc_map = lt.plugins.gestalt.docs.get_doc_map.call(null,token);if(cljs.core.truth_(doc_map))
{return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.doc.show!","editor.doc.show!",1417900223),cljs.core.assoc.call(null,doc_map,new cljs.core.Keyword(null,"loc","loc",1014011570),loc));
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"No docs found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
});
lt.plugins.gestalt.docs.doc_matches = (function doc_matches(query,doc_keys){var regex_query = (new RegExp(query,"i"));return cljs.core.filter.call(null,cljs.core.identity,(function (){var iter__7151__auto__ = ((function (regex_query){
return (function iter__9326(s__9327){return (new cljs.core.LazySeq(null,((function (regex_query){
return (function (){var s__9327__$1 = s__9327;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9327__$1);if(temp__4126__auto__)
{var s__9327__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9327__$2))
{var c__7149__auto__ = cljs.core.chunk_first.call(null,s__9327__$2);var size__7150__auto__ = cljs.core.count.call(null,c__7149__auto__);var b__9329 = cljs.core.chunk_buffer.call(null,size__7150__auto__);if((function (){var i__9328 = 0;while(true){
if((i__9328 < size__7150__auto__))
{var doc_key = cljs.core._nth.call(null,c__7149__auto__,i__9328);cljs.core.chunk_append.call(null,b__9329,((cljs.core.empty_QMARK_.call(null,cljs.core.re_find.call(null,regex_query,doc_key)))?null:doc_key));
{
var G__9705 = (i__9328 + 1);
i__9328 = G__9705;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9329),iter__9326.call(null,cljs.core.chunk_rest.call(null,s__9327__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9329),null);
}
} else
{var doc_key = cljs.core.first.call(null,s__9327__$2);return cljs.core.cons.call(null,((cljs.core.empty_QMARK_.call(null,cljs.core.re_find.call(null,regex_query,doc_key)))?null:doc_key),iter__9326.call(null,cljs.core.rest.call(null,s__9327__$2)));
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
lt.plugins.gestalt.docs.glsl_doc_exec = (function glsl_doc_exec(query){var doc_keys = cljs.core.keys.call(null,lt.plugins.gestalt.docs.get_docs.call(null));var matches = lt.plugins.gestalt.docs.doc_matches.call(null,query,doc_keys);var doc_maps = cljs.core.map.call(null,lt.plugins.gestalt.docs.get_doc_map,matches);return lt.object.raise.call(null,lt.plugins.doc.doc_search,new cljs.core.Keyword(null,"doc.search.results","doc.search.results",3363305624),doc_maps);
});
lt.plugins.gestalt.docs.glsl_doc_search = (function glsl_doc_search(this$,cur){return cljs.core.conj.call(null,cur,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"glsl",new cljs.core.Keyword(null,"trigger","trigger",4248979754),lt.plugins.gestalt.docs.glsl_doc_exec,new cljs.core.Keyword(null,"file-types","file-types",1727875162),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Fragment Shader",null,"Vertex Shader",null], null), null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gestalt.docs","manglsl-browser-doc","lt.plugins.gestalt.docs/manglsl-browser-doc",3991275697),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.doc","editor.doc",3751347369),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gestalt.docs.manglsl_browser_doc);
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gestalt.docs","glsl-doc-search","lt.plugins.gestalt.docs/glsl-doc-search",1176033923),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"types+","types+",4450069060),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gestalt.docs.glsl_doc_search);
}

//# sourceMappingURL=gestalt_compiled.js.map