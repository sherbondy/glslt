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
a.cljs$lang$applyTo = (function (arglist__8862){
var opts__8424__auto__ = cljs.core.first(arglist__8862);
var children__8425__auto__ = cljs.core.rest(arglist__8862);
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
abbr.cljs$lang$applyTo = (function (arglist__8863){
var opts__8424__auto__ = cljs.core.first(arglist__8863);
var children__8425__auto__ = cljs.core.rest(arglist__8863);
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
address.cljs$lang$applyTo = (function (arglist__8864){
var opts__8424__auto__ = cljs.core.first(arglist__8864);
var children__8425__auto__ = cljs.core.rest(arglist__8864);
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
area.cljs$lang$applyTo = (function (arglist__8865){
var opts__8424__auto__ = cljs.core.first(arglist__8865);
var children__8425__auto__ = cljs.core.rest(arglist__8865);
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
article.cljs$lang$applyTo = (function (arglist__8866){
var opts__8424__auto__ = cljs.core.first(arglist__8866);
var children__8425__auto__ = cljs.core.rest(arglist__8866);
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
aside.cljs$lang$applyTo = (function (arglist__8867){
var opts__8424__auto__ = cljs.core.first(arglist__8867);
var children__8425__auto__ = cljs.core.rest(arglist__8867);
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
audio.cljs$lang$applyTo = (function (arglist__8868){
var opts__8424__auto__ = cljs.core.first(arglist__8868);
var children__8425__auto__ = cljs.core.rest(arglist__8868);
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
b.cljs$lang$applyTo = (function (arglist__8869){
var opts__8424__auto__ = cljs.core.first(arglist__8869);
var children__8425__auto__ = cljs.core.rest(arglist__8869);
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
base.cljs$lang$applyTo = (function (arglist__8870){
var opts__8424__auto__ = cljs.core.first(arglist__8870);
var children__8425__auto__ = cljs.core.rest(arglist__8870);
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
bdi.cljs$lang$applyTo = (function (arglist__8871){
var opts__8424__auto__ = cljs.core.first(arglist__8871);
var children__8425__auto__ = cljs.core.rest(arglist__8871);
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
bdo.cljs$lang$applyTo = (function (arglist__8872){
var opts__8424__auto__ = cljs.core.first(arglist__8872);
var children__8425__auto__ = cljs.core.rest(arglist__8872);
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
big.cljs$lang$applyTo = (function (arglist__8873){
var opts__8424__auto__ = cljs.core.first(arglist__8873);
var children__8425__auto__ = cljs.core.rest(arglist__8873);
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
blockquote.cljs$lang$applyTo = (function (arglist__8874){
var opts__8424__auto__ = cljs.core.first(arglist__8874);
var children__8425__auto__ = cljs.core.rest(arglist__8874);
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
body.cljs$lang$applyTo = (function (arglist__8875){
var opts__8424__auto__ = cljs.core.first(arglist__8875);
var children__8425__auto__ = cljs.core.rest(arglist__8875);
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
br.cljs$lang$applyTo = (function (arglist__8876){
var opts__8424__auto__ = cljs.core.first(arglist__8876);
var children__8425__auto__ = cljs.core.rest(arglist__8876);
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
button.cljs$lang$applyTo = (function (arglist__8877){
var opts__8424__auto__ = cljs.core.first(arglist__8877);
var children__8425__auto__ = cljs.core.rest(arglist__8877);
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
canvas.cljs$lang$applyTo = (function (arglist__8878){
var opts__8424__auto__ = cljs.core.first(arglist__8878);
var children__8425__auto__ = cljs.core.rest(arglist__8878);
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
caption.cljs$lang$applyTo = (function (arglist__8879){
var opts__8424__auto__ = cljs.core.first(arglist__8879);
var children__8425__auto__ = cljs.core.rest(arglist__8879);
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
cite.cljs$lang$applyTo = (function (arglist__8880){
var opts__8424__auto__ = cljs.core.first(arglist__8880);
var children__8425__auto__ = cljs.core.rest(arglist__8880);
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
code.cljs$lang$applyTo = (function (arglist__8881){
var opts__8424__auto__ = cljs.core.first(arglist__8881);
var children__8425__auto__ = cljs.core.rest(arglist__8881);
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
col.cljs$lang$applyTo = (function (arglist__8882){
var opts__8424__auto__ = cljs.core.first(arglist__8882);
var children__8425__auto__ = cljs.core.rest(arglist__8882);
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
colgroup.cljs$lang$applyTo = (function (arglist__8883){
var opts__8424__auto__ = cljs.core.first(arglist__8883);
var children__8425__auto__ = cljs.core.rest(arglist__8883);
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
data.cljs$lang$applyTo = (function (arglist__8884){
var opts__8424__auto__ = cljs.core.first(arglist__8884);
var children__8425__auto__ = cljs.core.rest(arglist__8884);
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
datalist.cljs$lang$applyTo = (function (arglist__8885){
var opts__8424__auto__ = cljs.core.first(arglist__8885);
var children__8425__auto__ = cljs.core.rest(arglist__8885);
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
dd.cljs$lang$applyTo = (function (arglist__8886){
var opts__8424__auto__ = cljs.core.first(arglist__8886);
var children__8425__auto__ = cljs.core.rest(arglist__8886);
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
del.cljs$lang$applyTo = (function (arglist__8887){
var opts__8424__auto__ = cljs.core.first(arglist__8887);
var children__8425__auto__ = cljs.core.rest(arglist__8887);
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
dfn.cljs$lang$applyTo = (function (arglist__8888){
var opts__8424__auto__ = cljs.core.first(arglist__8888);
var children__8425__auto__ = cljs.core.rest(arglist__8888);
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
div.cljs$lang$applyTo = (function (arglist__8889){
var opts__8424__auto__ = cljs.core.first(arglist__8889);
var children__8425__auto__ = cljs.core.rest(arglist__8889);
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
dl.cljs$lang$applyTo = (function (arglist__8890){
var opts__8424__auto__ = cljs.core.first(arglist__8890);
var children__8425__auto__ = cljs.core.rest(arglist__8890);
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
dt.cljs$lang$applyTo = (function (arglist__8891){
var opts__8424__auto__ = cljs.core.first(arglist__8891);
var children__8425__auto__ = cljs.core.rest(arglist__8891);
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
em.cljs$lang$applyTo = (function (arglist__8892){
var opts__8424__auto__ = cljs.core.first(arglist__8892);
var children__8425__auto__ = cljs.core.rest(arglist__8892);
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
embed.cljs$lang$applyTo = (function (arglist__8893){
var opts__8424__auto__ = cljs.core.first(arglist__8893);
var children__8425__auto__ = cljs.core.rest(arglist__8893);
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
fieldset.cljs$lang$applyTo = (function (arglist__8894){
var opts__8424__auto__ = cljs.core.first(arglist__8894);
var children__8425__auto__ = cljs.core.rest(arglist__8894);
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
figcaption.cljs$lang$applyTo = (function (arglist__8895){
var opts__8424__auto__ = cljs.core.first(arglist__8895);
var children__8425__auto__ = cljs.core.rest(arglist__8895);
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
figure.cljs$lang$applyTo = (function (arglist__8896){
var opts__8424__auto__ = cljs.core.first(arglist__8896);
var children__8425__auto__ = cljs.core.rest(arglist__8896);
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
footer.cljs$lang$applyTo = (function (arglist__8897){
var opts__8424__auto__ = cljs.core.first(arglist__8897);
var children__8425__auto__ = cljs.core.rest(arglist__8897);
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
form.cljs$lang$applyTo = (function (arglist__8898){
var opts__8424__auto__ = cljs.core.first(arglist__8898);
var children__8425__auto__ = cljs.core.rest(arglist__8898);
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
h1.cljs$lang$applyTo = (function (arglist__8899){
var opts__8424__auto__ = cljs.core.first(arglist__8899);
var children__8425__auto__ = cljs.core.rest(arglist__8899);
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
h2.cljs$lang$applyTo = (function (arglist__8900){
var opts__8424__auto__ = cljs.core.first(arglist__8900);
var children__8425__auto__ = cljs.core.rest(arglist__8900);
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
h3.cljs$lang$applyTo = (function (arglist__8901){
var opts__8424__auto__ = cljs.core.first(arglist__8901);
var children__8425__auto__ = cljs.core.rest(arglist__8901);
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
h4.cljs$lang$applyTo = (function (arglist__8902){
var opts__8424__auto__ = cljs.core.first(arglist__8902);
var children__8425__auto__ = cljs.core.rest(arglist__8902);
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
h5.cljs$lang$applyTo = (function (arglist__8903){
var opts__8424__auto__ = cljs.core.first(arglist__8903);
var children__8425__auto__ = cljs.core.rest(arglist__8903);
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
h6.cljs$lang$applyTo = (function (arglist__8904){
var opts__8424__auto__ = cljs.core.first(arglist__8904);
var children__8425__auto__ = cljs.core.rest(arglist__8904);
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
head.cljs$lang$applyTo = (function (arglist__8905){
var opts__8424__auto__ = cljs.core.first(arglist__8905);
var children__8425__auto__ = cljs.core.rest(arglist__8905);
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
header.cljs$lang$applyTo = (function (arglist__8906){
var opts__8424__auto__ = cljs.core.first(arglist__8906);
var children__8425__auto__ = cljs.core.rest(arglist__8906);
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
hr.cljs$lang$applyTo = (function (arglist__8907){
var opts__8424__auto__ = cljs.core.first(arglist__8907);
var children__8425__auto__ = cljs.core.rest(arglist__8907);
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
html.cljs$lang$applyTo = (function (arglist__8908){
var opts__8424__auto__ = cljs.core.first(arglist__8908);
var children__8425__auto__ = cljs.core.rest(arglist__8908);
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
i.cljs$lang$applyTo = (function (arglist__8909){
var opts__8424__auto__ = cljs.core.first(arglist__8909);
var children__8425__auto__ = cljs.core.rest(arglist__8909);
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
iframe.cljs$lang$applyTo = (function (arglist__8910){
var opts__8424__auto__ = cljs.core.first(arglist__8910);
var children__8425__auto__ = cljs.core.rest(arglist__8910);
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
img.cljs$lang$applyTo = (function (arglist__8911){
var opts__8424__auto__ = cljs.core.first(arglist__8911);
var children__8425__auto__ = cljs.core.rest(arglist__8911);
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
ins.cljs$lang$applyTo = (function (arglist__8912){
var opts__8424__auto__ = cljs.core.first(arglist__8912);
var children__8425__auto__ = cljs.core.rest(arglist__8912);
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
kbd.cljs$lang$applyTo = (function (arglist__8913){
var opts__8424__auto__ = cljs.core.first(arglist__8913);
var children__8425__auto__ = cljs.core.rest(arglist__8913);
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
keygen.cljs$lang$applyTo = (function (arglist__8914){
var opts__8424__auto__ = cljs.core.first(arglist__8914);
var children__8425__auto__ = cljs.core.rest(arglist__8914);
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
label.cljs$lang$applyTo = (function (arglist__8915){
var opts__8424__auto__ = cljs.core.first(arglist__8915);
var children__8425__auto__ = cljs.core.rest(arglist__8915);
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
legend.cljs$lang$applyTo = (function (arglist__8916){
var opts__8424__auto__ = cljs.core.first(arglist__8916);
var children__8425__auto__ = cljs.core.rest(arglist__8916);
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
li.cljs$lang$applyTo = (function (arglist__8917){
var opts__8424__auto__ = cljs.core.first(arglist__8917);
var children__8425__auto__ = cljs.core.rest(arglist__8917);
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
link.cljs$lang$applyTo = (function (arglist__8918){
var opts__8424__auto__ = cljs.core.first(arglist__8918);
var children__8425__auto__ = cljs.core.rest(arglist__8918);
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
main.cljs$lang$applyTo = (function (arglist__8919){
var opts__8424__auto__ = cljs.core.first(arglist__8919);
var children__8425__auto__ = cljs.core.rest(arglist__8919);
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
map.cljs$lang$applyTo = (function (arglist__8920){
var opts__8424__auto__ = cljs.core.first(arglist__8920);
var children__8425__auto__ = cljs.core.rest(arglist__8920);
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
mark.cljs$lang$applyTo = (function (arglist__8921){
var opts__8424__auto__ = cljs.core.first(arglist__8921);
var children__8425__auto__ = cljs.core.rest(arglist__8921);
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
menu.cljs$lang$applyTo = (function (arglist__8922){
var opts__8424__auto__ = cljs.core.first(arglist__8922);
var children__8425__auto__ = cljs.core.rest(arglist__8922);
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
menuitem.cljs$lang$applyTo = (function (arglist__8923){
var opts__8424__auto__ = cljs.core.first(arglist__8923);
var children__8425__auto__ = cljs.core.rest(arglist__8923);
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
meta.cljs$lang$applyTo = (function (arglist__8924){
var opts__8424__auto__ = cljs.core.first(arglist__8924);
var children__8425__auto__ = cljs.core.rest(arglist__8924);
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
meter.cljs$lang$applyTo = (function (arglist__8925){
var opts__8424__auto__ = cljs.core.first(arglist__8925);
var children__8425__auto__ = cljs.core.rest(arglist__8925);
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
nav.cljs$lang$applyTo = (function (arglist__8926){
var opts__8424__auto__ = cljs.core.first(arglist__8926);
var children__8425__auto__ = cljs.core.rest(arglist__8926);
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
noscript.cljs$lang$applyTo = (function (arglist__8927){
var opts__8424__auto__ = cljs.core.first(arglist__8927);
var children__8425__auto__ = cljs.core.rest(arglist__8927);
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
object.cljs$lang$applyTo = (function (arglist__8928){
var opts__8424__auto__ = cljs.core.first(arglist__8928);
var children__8425__auto__ = cljs.core.rest(arglist__8928);
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
ol.cljs$lang$applyTo = (function (arglist__8929){
var opts__8424__auto__ = cljs.core.first(arglist__8929);
var children__8425__auto__ = cljs.core.rest(arglist__8929);
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
optgroup.cljs$lang$applyTo = (function (arglist__8930){
var opts__8424__auto__ = cljs.core.first(arglist__8930);
var children__8425__auto__ = cljs.core.rest(arglist__8930);
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
output.cljs$lang$applyTo = (function (arglist__8931){
var opts__8424__auto__ = cljs.core.first(arglist__8931);
var children__8425__auto__ = cljs.core.rest(arglist__8931);
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
p.cljs$lang$applyTo = (function (arglist__8932){
var opts__8424__auto__ = cljs.core.first(arglist__8932);
var children__8425__auto__ = cljs.core.rest(arglist__8932);
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
param.cljs$lang$applyTo = (function (arglist__8933){
var opts__8424__auto__ = cljs.core.first(arglist__8933);
var children__8425__auto__ = cljs.core.rest(arglist__8933);
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
pre.cljs$lang$applyTo = (function (arglist__8934){
var opts__8424__auto__ = cljs.core.first(arglist__8934);
var children__8425__auto__ = cljs.core.rest(arglist__8934);
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
progress.cljs$lang$applyTo = (function (arglist__8935){
var opts__8424__auto__ = cljs.core.first(arglist__8935);
var children__8425__auto__ = cljs.core.rest(arglist__8935);
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
q.cljs$lang$applyTo = (function (arglist__8936){
var opts__8424__auto__ = cljs.core.first(arglist__8936);
var children__8425__auto__ = cljs.core.rest(arglist__8936);
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
rp.cljs$lang$applyTo = (function (arglist__8937){
var opts__8424__auto__ = cljs.core.first(arglist__8937);
var children__8425__auto__ = cljs.core.rest(arglist__8937);
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
rt.cljs$lang$applyTo = (function (arglist__8938){
var opts__8424__auto__ = cljs.core.first(arglist__8938);
var children__8425__auto__ = cljs.core.rest(arglist__8938);
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
ruby.cljs$lang$applyTo = (function (arglist__8939){
var opts__8424__auto__ = cljs.core.first(arglist__8939);
var children__8425__auto__ = cljs.core.rest(arglist__8939);
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
s.cljs$lang$applyTo = (function (arglist__8940){
var opts__8424__auto__ = cljs.core.first(arglist__8940);
var children__8425__auto__ = cljs.core.rest(arglist__8940);
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
samp.cljs$lang$applyTo = (function (arglist__8941){
var opts__8424__auto__ = cljs.core.first(arglist__8941);
var children__8425__auto__ = cljs.core.rest(arglist__8941);
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
script.cljs$lang$applyTo = (function (arglist__8942){
var opts__8424__auto__ = cljs.core.first(arglist__8942);
var children__8425__auto__ = cljs.core.rest(arglist__8942);
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
section.cljs$lang$applyTo = (function (arglist__8943){
var opts__8424__auto__ = cljs.core.first(arglist__8943);
var children__8425__auto__ = cljs.core.rest(arglist__8943);
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
select.cljs$lang$applyTo = (function (arglist__8944){
var opts__8424__auto__ = cljs.core.first(arglist__8944);
var children__8425__auto__ = cljs.core.rest(arglist__8944);
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
small.cljs$lang$applyTo = (function (arglist__8945){
var opts__8424__auto__ = cljs.core.first(arglist__8945);
var children__8425__auto__ = cljs.core.rest(arglist__8945);
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
source.cljs$lang$applyTo = (function (arglist__8946){
var opts__8424__auto__ = cljs.core.first(arglist__8946);
var children__8425__auto__ = cljs.core.rest(arglist__8946);
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
span.cljs$lang$applyTo = (function (arglist__8947){
var opts__8424__auto__ = cljs.core.first(arglist__8947);
var children__8425__auto__ = cljs.core.rest(arglist__8947);
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
strong.cljs$lang$applyTo = (function (arglist__8948){
var opts__8424__auto__ = cljs.core.first(arglist__8948);
var children__8425__auto__ = cljs.core.rest(arglist__8948);
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
style.cljs$lang$applyTo = (function (arglist__8949){
var opts__8424__auto__ = cljs.core.first(arglist__8949);
var children__8425__auto__ = cljs.core.rest(arglist__8949);
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
sub.cljs$lang$applyTo = (function (arglist__8950){
var opts__8424__auto__ = cljs.core.first(arglist__8950);
var children__8425__auto__ = cljs.core.rest(arglist__8950);
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
summary.cljs$lang$applyTo = (function (arglist__8951){
var opts__8424__auto__ = cljs.core.first(arglist__8951);
var children__8425__auto__ = cljs.core.rest(arglist__8951);
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
sup.cljs$lang$applyTo = (function (arglist__8952){
var opts__8424__auto__ = cljs.core.first(arglist__8952);
var children__8425__auto__ = cljs.core.rest(arglist__8952);
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
table.cljs$lang$applyTo = (function (arglist__8953){
var opts__8424__auto__ = cljs.core.first(arglist__8953);
var children__8425__auto__ = cljs.core.rest(arglist__8953);
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
tbody.cljs$lang$applyTo = (function (arglist__8954){
var opts__8424__auto__ = cljs.core.first(arglist__8954);
var children__8425__auto__ = cljs.core.rest(arglist__8954);
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
td.cljs$lang$applyTo = (function (arglist__8955){
var opts__8424__auto__ = cljs.core.first(arglist__8955);
var children__8425__auto__ = cljs.core.rest(arglist__8955);
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
tfoot.cljs$lang$applyTo = (function (arglist__8956){
var opts__8424__auto__ = cljs.core.first(arglist__8956);
var children__8425__auto__ = cljs.core.rest(arglist__8956);
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
th.cljs$lang$applyTo = (function (arglist__8957){
var opts__8424__auto__ = cljs.core.first(arglist__8957);
var children__8425__auto__ = cljs.core.rest(arglist__8957);
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
thead.cljs$lang$applyTo = (function (arglist__8958){
var opts__8424__auto__ = cljs.core.first(arglist__8958);
var children__8425__auto__ = cljs.core.rest(arglist__8958);
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
time.cljs$lang$applyTo = (function (arglist__8959){
var opts__8424__auto__ = cljs.core.first(arglist__8959);
var children__8425__auto__ = cljs.core.rest(arglist__8959);
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
title.cljs$lang$applyTo = (function (arglist__8960){
var opts__8424__auto__ = cljs.core.first(arglist__8960);
var children__8425__auto__ = cljs.core.rest(arglist__8960);
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
tr.cljs$lang$applyTo = (function (arglist__8961){
var opts__8424__auto__ = cljs.core.first(arglist__8961);
var children__8425__auto__ = cljs.core.rest(arglist__8961);
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
track.cljs$lang$applyTo = (function (arglist__8962){
var opts__8424__auto__ = cljs.core.first(arglist__8962);
var children__8425__auto__ = cljs.core.rest(arglist__8962);
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
u.cljs$lang$applyTo = (function (arglist__8963){
var opts__8424__auto__ = cljs.core.first(arglist__8963);
var children__8425__auto__ = cljs.core.rest(arglist__8963);
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
ul.cljs$lang$applyTo = (function (arglist__8964){
var opts__8424__auto__ = cljs.core.first(arglist__8964);
var children__8425__auto__ = cljs.core.rest(arglist__8964);
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
var$.cljs$lang$applyTo = (function (arglist__8965){
var opts__8424__auto__ = cljs.core.first(arglist__8965);
var children__8425__auto__ = cljs.core.rest(arglist__8965);
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
video.cljs$lang$applyTo = (function (arglist__8966){
var opts__8424__auto__ = cljs.core.first(arglist__8966);
var children__8425__auto__ = cljs.core.rest(arglist__8966);
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
wbr.cljs$lang$applyTo = (function (arglist__8967){
var opts__8424__auto__ = cljs.core.first(arglist__8967);
var children__8425__auto__ = cljs.core.rest(arglist__8967);
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
circle.cljs$lang$applyTo = (function (arglist__8968){
var opts__8424__auto__ = cljs.core.first(arglist__8968);
var children__8425__auto__ = cljs.core.rest(arglist__8968);
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
ellipse.cljs$lang$applyTo = (function (arglist__8969){
var opts__8424__auto__ = cljs.core.first(arglist__8969);
var children__8425__auto__ = cljs.core.rest(arglist__8969);
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
g.cljs$lang$applyTo = (function (arglist__8970){
var opts__8424__auto__ = cljs.core.first(arglist__8970);
var children__8425__auto__ = cljs.core.rest(arglist__8970);
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
line.cljs$lang$applyTo = (function (arglist__8971){
var opts__8424__auto__ = cljs.core.first(arglist__8971);
var children__8425__auto__ = cljs.core.rest(arglist__8971);
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
path.cljs$lang$applyTo = (function (arglist__8972){
var opts__8424__auto__ = cljs.core.first(arglist__8972);
var children__8425__auto__ = cljs.core.rest(arglist__8972);
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
polyline.cljs$lang$applyTo = (function (arglist__8973){
var opts__8424__auto__ = cljs.core.first(arglist__8973);
var children__8425__auto__ = cljs.core.rest(arglist__8973);
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
rect.cljs$lang$applyTo = (function (arglist__8974){
var opts__8424__auto__ = cljs.core.first(arglist__8974);
var children__8425__auto__ = cljs.core.rest(arglist__8974);
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
svg.cljs$lang$applyTo = (function (arglist__8975){
var opts__8424__auto__ = cljs.core.first(arglist__8975);
var children__8425__auto__ = cljs.core.rest(arglist__8975);
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
text.cljs$lang$applyTo = (function (arglist__8976){
var opts__8424__auto__ = cljs.core.first(arglist__8976);
var children__8425__auto__ = cljs.core.rest(arglist__8976);
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
defs.cljs$lang$applyTo = (function (arglist__8977){
var opts__8424__auto__ = cljs.core.first(arglist__8977);
var children__8425__auto__ = cljs.core.rest(arglist__8977);
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
linearGradient.cljs$lang$applyTo = (function (arglist__8978){
var opts__8424__auto__ = cljs.core.first(arglist__8978);
var children__8425__auto__ = cljs.core.rest(arglist__8978);
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
polygon.cljs$lang$applyTo = (function (arglist__8979){
var opts__8424__auto__ = cljs.core.first(arglist__8979);
var children__8425__auto__ = cljs.core.rest(arglist__8979);
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
radialGradient.cljs$lang$applyTo = (function (arglist__8980){
var opts__8424__auto__ = cljs.core.first(arglist__8980);
var children__8425__auto__ = cljs.core.rest(arglist__8980);
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
stop.cljs$lang$applyTo = (function (arglist__8981){
var opts__8424__auto__ = cljs.core.first(arglist__8981);
var children__8425__auto__ = cljs.core.rest(arglist__8981);
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
om.core.IDisplayName = (function (){var obj8983 = {};return obj8983;
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
om.core.IInitState = (function (){var obj8985 = {};return obj8985;
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
om.core.IShouldUpdate = (function (){var obj8987 = {};return obj8987;
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
om.core.IWillMount = (function (){var obj8989 = {};return obj8989;
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
om.core.IDidMount = (function (){var obj8991 = {};return obj8991;
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
om.core.IWillUnmount = (function (){var obj8993 = {};return obj8993;
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
om.core.IWillUpdate = (function (){var obj8995 = {};return obj8995;
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
om.core.IDidUpdate = (function (){var obj8997 = {};return obj8997;
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
om.core.IWillReceiveProps = (function (){var obj8999 = {};return obj8999;
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
om.core.IRender = (function (){var obj9001 = {};return obj9001;
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
om.core.IRenderState = (function (){var obj9003 = {};return obj9003;
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
om.core.IOmSwap = (function (){var obj9005 = {};return obj9005;
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
om.core.IGetState = (function (){var obj9007 = {};return obj9007;
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
om.core.IGetRenderState = (function (){var obj9009 = {};return obj9009;
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
om.core.ISetState = (function (){var obj9011 = {};return obj9011;
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
om.core.IRenderQueue = (function (){var obj9013 = {};return obj9013;
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
om.core.IValue = (function (){var obj9015 = {};return obj9015;
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
om.core.ICursor = (function (){var obj9017 = {};return obj9017;
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
om.core.IToCursor = (function (){var obj9019 = {};return obj9019;
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
om.core.ICursorDerive = (function (){var obj9021 = {};return obj9021;
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
om.core.ITransact = (function (){var obj9023 = {};return obj9023;
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
om.core.INotify = (function (){var obj9025 = {};return obj9025;
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
om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){var old_state = cljs.core.deref.call(null,state);var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);var ret = (((function (){var G__9027 = state;if(G__9027)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9027.om$core$IOmSwap$;
}
})()))
{return true;
} else
{if((!G__9027.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__9027);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__9027);
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
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){var G__9029 = x;if(G__9029)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9029.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__9029.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__9029);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__9029);
}
});
om.core.children = (function children(node){var c = node.props.children;if(cljs.core.fn_QMARK_.call(null,c))
{return node.props.children = (function (){var _STAR_read_enabled_STAR_9031 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return c.call(null,node);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9031;
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
{var pending_state = temp__4126__auto__;var G__9033 = state;(G__9033["__om_prev_state"] = (state["__om_state"]));
(G__9033["__om_state"] = pending_state);
(G__9033["__om_pending_state"] = null);
return G__9033;
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
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",4103164189),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",4147620643),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",2122862542),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",3193956709),new cljs.core.Keyword(null,"render","render",4374279432),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",2086388618),new cljs.core.Keyword(null,"getInitialState","getInitialState",2219830677),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",3877103209),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",2087784617),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",3257856604)],[(function (prev_props,prev_state){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__9034 = c;if(G__9034)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9034.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__9034.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__9034);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__9034);
}
})())
{var state_9140 = this$.state;var _STAR_read_enabled_STAR_9035_9141 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props}),(function (){var or__6426__auto__ = (state_9140["__om_prev_state"]);if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return (state_9140["__om_state"]);
}
})());
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9035_9141;
}} else
{}
return (this$.state["__om_prev_state"] = null);
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__9036 = c;if(G__9036)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9036.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__9036.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__9036);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__9036);
}
})())
{var _STAR_read_enabled_STAR_9037 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.will_unmount.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9037;
}} else
{return null;
}
}),(function (next_props){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__9038 = c;if(G__9038)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9038.om$core$IWillReceiveProps$;
}
})()))
{return true;
} else
{if((!G__9038.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__9038);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__9038);
}
})())
{var _STAR_read_enabled_STAR_9039 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"props": next_props}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9039;
}} else
{return null;
}
}),(function (next_props,next_state){var this$ = this;var _STAR_read_enabled_STAR_9040 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$.props;var state = this$.state;var c = om.core.children.call(null,this$);om.core.merge_props_state.call(null,this$,next_props);
if((function (){var G__9041 = c;if(G__9041)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9041.om$core$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__9041.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__9041);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__9041);
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
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9040;
}}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var _STAR_read_enabled_STAR_9042 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
if((function (){var G__9043 = c;if(G__9043)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9043.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__9043.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__9043);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__9043);
}
})())
{var _STAR_parent_STAR_9044 = om.core._STAR_parent_STAR_;var _STAR_state_STAR_9045 = om.core._STAR_state_STAR_;var _STAR_instrument_STAR_9046 = om.core._STAR_instrument_STAR_;try{om.core._STAR_parent_STAR_ = this$;
om.core._STAR_state_STAR_ = (props["__om_app_state"]);
om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);
return om.core.render.call(null,c);
}finally {om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_9046;
om.core._STAR_state_STAR_ = _STAR_state_STAR_9045;
om.core._STAR_parent_STAR_ = _STAR_parent_STAR_9044;
}} else
{if((function (){var G__9047 = c;if(G__9047)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9047.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__9047.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__9047);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__9047);
}
})())
{var _STAR_parent_STAR_9048 = om.core._STAR_parent_STAR_;var _STAR_state_STAR_9049 = om.core._STAR_state_STAR_;var _STAR_instrument_STAR_9050 = om.core._STAR_instrument_STAR_;try{om.core._STAR_parent_STAR_ = this$;
om.core._STAR_state_STAR_ = (props["__om_app_state"]);
om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
}finally {om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_9050;
om.core._STAR_state_STAR_ = _STAR_state_STAR_9049;
om.core._STAR_parent_STAR_ = _STAR_parent_STAR_9048;
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return c;
} else
{return null;
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9042;
}}),(function (next_props,next_state){var this$ = this;var c_9142 = om.core.children.call(null,this$);if((function (){var G__9051 = c_9142;if(G__9051)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9051.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__9051.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__9051);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__9051);
}
})())
{var state_9143 = this$.state;var _STAR_read_enabled_STAR_9052_9144 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_update.call(null,c_9142,om.core.get_props.call(null,{"props": next_props}),om.core._get_state.call(null,this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9052_9144;
}} else
{}
return om.core.merge_pending_state.call(null,this$);
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var istate = (function (){var or__6426__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var id = new cljs.core.Keyword("om.core","id","om.core/id",2663181321).cljs$core$IFn$_invoke$arity$1(istate);var ret = {"__om_state": cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",2663181321)),(((function (){var G__9053 = c;if(G__9053)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9053.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__9053.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__9053);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__9053);
}
})())?(function (){var _STAR_read_enabled_STAR_9054 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.init_state.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9054;
}})():null)), "__om_id": (function (){var or__6426__auto__ = id;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};(props["__om_init_state"] = null);
return ret;
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__9055 = c;if(G__9055)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9055.om$core$IDidMount$;
}
})()))
{return true;
} else
{if((!G__9055.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__9055);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__9055);
}
})())
{var _STAR_read_enabled_STAR_9056 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.did_mount.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9056;
}} else
{return null;
}
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__9057 = c;if(G__9057)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9057.om$core$IDisplayName$;
}
})()))
{return true;
} else
{if((!G__9057.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__9057);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__9057);
}
})())
{var _STAR_read_enabled_STAR_9058 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.display_name.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9058;
}} else
{return null;
}
}),(function (){var this$ = this;om.core.merge_props_state.call(null,this$);
var c_9145 = om.core.children.call(null,this$);if((function (){var G__9059 = c_9145;if(G__9059)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9059.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__9059.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__9059);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__9059);
}
})())
{var _STAR_read_enabled_STAR_9060_9146 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_mount.call(null,c_9145);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9060_9146;
}} else
{}
return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){var x9064 = obj;x9064.om$core$IGetState$ = true;
x9064.om$core$IGetState$_get_state$arity$1 = ((function (x9064){
return (function (this$){var this$__$1 = this;var state = this$__$1.state;var or__6426__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return (state["__om_state"]);
}
});})(x9064))
;
x9064.om$core$IGetState$_get_state$arity$2 = ((function (x9064){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x9064))
;
x9064.om$core$IGetRenderState$ = true;
x9064.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x9064){
return (function (this$){var this$__$1 = this;return (this$__$1.state["__om_state"]);
});})(x9064))
;
x9064.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x9064){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x9064))
;
x9064.om$core$ISetState$ = true;
x9064.om$core$ISetState$_set_state_BANG_$arity$2 = ((function (x9064){
return (function (this$,val){var this$__$1 = this;var _STAR_read_enabled_STAR_9065 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$__$1.props;var app_state = (props["__om_app_state"]);(this$__$1.state["__om_pending_state"] = val);
if((app_state == null))
{return null;
} else
{return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9065;
}});})(x9064))
;
x9064.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x9064){
return (function (this$,ks,val){var this$__$1 = this;var _STAR_read_enabled_STAR_9066 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$__$1.props;var state = this$__$1.state;var pstate = om.core._get_state.call(null,this$__$1);var app_state = (props["__om_app_state"]);(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));
if((app_state == null))
{return null;
} else
{return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9066;
}});})(x9064))
;
return x9064;
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
return (function (p__9068){var vec__9069 = p__9068;var k = cljs.core.nth.call(null,vec__9069,0,null);var v = cljs.core.nth.call(null,vec__9069,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
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
var G__9147 = null;
var G__9147__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__9147__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__9147 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__9147__2.call(this,self__,k);
case 3:
return G__9147__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9147;
})()
;
om.core.MapCursor.prototype.apply = (function (self__,args9067){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9067)));
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
var G__9148 = null;
var G__9148__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__9148__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__9148 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__9148__2.call(this,self__,k);
case 3:
return G__9148__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9148;
})()
;
om.core.IndexedCursor.prototype.apply = (function (self__,args9070){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9070)));
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
om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){var x9072 = cljs.core.clone.call(null,val);x9072.cljs$core$IEquiv$ = true;
x9072.cljs$core$IEquiv$_equiv$arity$2 = ((function (x9072){
return (function (_,other){var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,val,other);
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});})(x9072))
;
x9072.om$core$ITransact$ = true;
x9072.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x9072){
return (function (this$,korks,f,tag){var this$__$1 = this;return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x9072))
;
x9072.om$core$ICursor$ = true;
x9072.om$core$ICursor$_path$arity$1 = ((function (x9072){
return (function (_){var ___$1 = this;return path;
});})(x9072))
;
x9072.om$core$ICursor$_state$arity$1 = ((function (x9072){
return (function (_){var ___$1 = this;return state;
});})(x9072))
;
x9072.cljs$core$IDeref$ = true;
x9072.cljs$core$IDeref$_deref$arity$1 = ((function (x9072){
return (function (this$){var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});})(x9072))
;
return x9072;
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
{if((function (){var G__9075 = val;if(G__9075)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9075.om$core$IToCursor$;
}
})()))
{return true;
} else
{if((!G__9075.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__9075);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__9075);
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
{if((function (){var G__9076 = val;if(G__9076)
{var bit__7076__auto__ = (G__9076.cljs$lang$protocol_mask$partition1$ & 8192);if((bit__7076__auto__) || (G__9076.cljs$core$ICloneable$))
{return true;
} else
{if((!G__9076.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__9076);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__9076);
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
var seq__9081 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));var chunk__9082 = null;var count__9083 = 0;var i__9084 = 0;while(true){
if((i__9084 < count__9083))
{var f = cljs.core._nth.call(null,chunk__9082,i__9084);f.call(null);
{
var G__9149 = seq__9081;
var G__9150 = chunk__9082;
var G__9151 = count__9083;
var G__9152 = (i__9084 + 1);
seq__9081 = G__9149;
chunk__9082 = G__9150;
count__9083 = G__9151;
i__9084 = G__9152;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9081);if(temp__4126__auto__)
{var seq__9081__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9081__$1))
{var c__7182__auto__ = cljs.core.chunk_first.call(null,seq__9081__$1);{
var G__9153 = cljs.core.chunk_rest.call(null,seq__9081__$1);
var G__9154 = c__7182__auto__;
var G__9155 = cljs.core.count.call(null,c__7182__auto__);
var G__9156 = 0;
seq__9081 = G__9153;
chunk__9082 = G__9154;
count__9083 = G__9155;
i__9084 = G__9156;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__9081__$1);f.call(null);
{
var G__9157 = cljs.core.next.call(null,seq__9081__$1);
var G__9158 = null;
var G__9159 = 0;
var G__9160 = 0;
seq__9081 = G__9157;
chunk__9082 = G__9158;
count__9083 = G__9159;
i__9084 = G__9160;
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
return (function (this$){var _STAR_read_enabled_STAR_9089 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return f.call(null,cursor,this$);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9089;
}});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_shared": shared, "__om_cursor": cursor});pure__8458__auto__.constructor = goog.getUid(f);
return pure__8458__auto__;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var map__9090 = m;var map__9090__$1 = ((cljs.core.seq_QMARK_.call(null,map__9090))?cljs.core.apply.call(null,cljs.core.hash_map,map__9090):map__9090);var opts = cljs.core.get.call(null,map__9090__$1,new cljs.core.Keyword(null,"opts","opts",1017322386));var init_state = cljs.core.get.call(null,map__9090__$1,new cljs.core.Keyword(null,"init-state","init-state",4479067398));var state = cljs.core.get.call(null,map__9090__$1,new cljs.core.Keyword(null,"state","state",1123661827));var key = cljs.core.get.call(null,map__9090__$1,new cljs.core.Keyword(null,"key","key",1014010321));var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",1013907514));var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",3166146514).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4124__auto__))
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
})();var pure__8458__auto__ = ctor.call(null,{"__om_shared": shared, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",3166146514).cljs$core$IFn$_invoke$arity$1(m), "__om_cursor": cursor_SINGLEQUOTE_, "__om_app_state": om.core._STAR_state_STAR_, "key": rkey, "__om_init_state": init_state, "children": (((opts == null))?((function (map__9090,map__9090__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_9091 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return f.call(null,cursor_SINGLEQUOTE_,this$);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9091;
}});})(map__9090,map__9090__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__9090,map__9090__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_9092 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return f.call(null,cursor_SINGLEQUOTE_,this$,opts);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9092;
}});})(map__9090,map__9090__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
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
{var ret = (function (){var _STAR_read_enabled_STAR_9094 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._STAR_instrument_STAR_.call(null,f,cursor,m);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_9094;
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
om.core.setup = (function setup(state,key,tx_listen){if((function (){var G__9103 = state;if(G__9103)
{var bit__7076__auto__ = null;if(cljs.core.truth_((function (){var or__6426__auto__ = bit__7076__auto__;if(cljs.core.truth_(or__6426__auto__))
{return or__6426__auto__;
} else
{return G__9103.om$core$INotify$;
}
})()))
{return true;
} else
{if((!G__9103.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__9103);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__9103);
}
})())
{} else
{var listeners_9161 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var render_queue_9162 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var x9104_9163 = state;x9104_9163.om$core$IRenderQueue$ = true;
x9104_9163.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x9104_9163,listeners_9161,render_queue_9162){
return (function (this$){var this$__$1 = this;return cljs.core.deref.call(null,render_queue_9162);
});})(x9104_9163,listeners_9161,render_queue_9162))
;
x9104_9163.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x9104_9163,listeners_9161,render_queue_9162){
return (function (this$,c){var this$__$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_9162),c))
{return null;
} else
{cljs.core.swap_BANG_.call(null,render_queue_9162,cljs.core.conj,c);
return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x9104_9163,listeners_9161,render_queue_9162))
;
x9104_9163.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x9104_9163,listeners_9161,render_queue_9162){
return (function (this$){var this$__$1 = this;return cljs.core.swap_BANG_.call(null,render_queue_9162,cljs.core.empty);
});})(x9104_9163,listeners_9161,render_queue_9162))
;
x9104_9163.om$core$INotify$ = true;
x9104_9163.om$core$INotify$_listen_BANG_$arity$3 = ((function (x9104_9163,listeners_9161,render_queue_9162){
return (function (this$,key__$1,tx_listen__$1){var this$__$1 = this;if((tx_listen__$1 == null))
{} else
{cljs.core.swap_BANG_.call(null,listeners_9161,cljs.core.assoc,key__$1,tx_listen__$1);
}
return this$__$1;
});})(x9104_9163,listeners_9161,render_queue_9162))
;
x9104_9163.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x9104_9163,listeners_9161,render_queue_9162){
return (function (this$,key__$1){var this$__$1 = this;cljs.core.swap_BANG_.call(null,listeners_9161,cljs.core.dissoc,key__$1);
return this$__$1;
});})(x9104_9163,listeners_9161,render_queue_9162))
;
x9104_9163.om$core$INotify$_notify_BANG_$arity$3 = ((function (x9104_9163,listeners_9161,render_queue_9162){
return (function (this$,tx_data,root_cursor){var this$__$1 = this;if((tx_listen == null))
{} else
{var seq__9105_9164 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_9161));var chunk__9106_9165 = null;var count__9107_9166 = 0;var i__9108_9167 = 0;while(true){
if((i__9108_9167 < count__9107_9166))
{var vec__9109_9168 = cljs.core._nth.call(null,chunk__9106_9165,i__9108_9167);var __9169 = cljs.core.nth.call(null,vec__9109_9168,0,null);var f_9170 = cljs.core.nth.call(null,vec__9109_9168,1,null);f_9170.call(null,tx_data,root_cursor);
{
var G__9171 = seq__9105_9164;
var G__9172 = chunk__9106_9165;
var G__9173 = count__9107_9166;
var G__9174 = (i__9108_9167 + 1);
seq__9105_9164 = G__9171;
chunk__9106_9165 = G__9172;
count__9107_9166 = G__9173;
i__9108_9167 = G__9174;
continue;
}
} else
{var temp__4126__auto___9175 = cljs.core.seq.call(null,seq__9105_9164);if(temp__4126__auto___9175)
{var seq__9105_9176__$1 = temp__4126__auto___9175;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9105_9176__$1))
{var c__7182__auto___9177 = cljs.core.chunk_first.call(null,seq__9105_9176__$1);{
var G__9178 = cljs.core.chunk_rest.call(null,seq__9105_9176__$1);
var G__9179 = c__7182__auto___9177;
var G__9180 = cljs.core.count.call(null,c__7182__auto___9177);
var G__9181 = 0;
seq__9105_9164 = G__9178;
chunk__9106_9165 = G__9179;
count__9107_9166 = G__9180;
i__9108_9167 = G__9181;
continue;
}
} else
{var vec__9110_9182 = cljs.core.first.call(null,seq__9105_9176__$1);var __9183 = cljs.core.nth.call(null,vec__9110_9182,0,null);var f_9184 = cljs.core.nth.call(null,vec__9110_9182,1,null);f_9184.call(null,tx_data,root_cursor);
{
var G__9185 = cljs.core.next.call(null,seq__9105_9176__$1);
var G__9186 = null;
var G__9187 = 0;
var G__9188 = 0;
seq__9105_9164 = G__9185;
chunk__9106_9165 = G__9186;
count__9107_9166 = G__9187;
i__9108_9167 = G__9188;
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
});})(x9104_9163,listeners_9161,render_queue_9162))
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
om.core.root = (function root(f,value,p__9111){var map__9126 = p__9111;var map__9126__$1 = ((cljs.core.seq_QMARK_.call(null,map__9126))?cljs.core.apply.call(null,cljs.core.hash_map,map__9126):map__9126);var options = map__9126__$1;var instrument = cljs.core.get.call(null,map__9126__$1,new cljs.core.Keyword(null,"instrument","instrument",2409387865));var path = cljs.core.get.call(null,map__9126__$1,new cljs.core.Keyword(null,"path","path",1017337751));var tx_listen = cljs.core.get.call(null,map__9126__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",666878114));var target = cljs.core.get.call(null,map__9126__$1,new cljs.core.Keyword(null,"target","target",4427965699));if(!((target == null)))
{} else
{throw (new Error(("Assert failed: No target specified to om.core/root\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"target","target",1773529930,null))))))));
}
var roots_SINGLEQUOTE__9189 = cljs.core.deref.call(null,om.core.roots);if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__9189,target))
{cljs.core.get.call(null,roots_SINGLEQUOTE__9189,target).call(null);
} else
{}
var watch_key = cljs.core.gensym.call(null);var state = (((function (){var G__9127 = value;if(G__9127)
{var bit__7076__auto__ = (G__9127.cljs$lang$protocol_mask$partition1$ & 16384);if((bit__7076__auto__) || (G__9127.cljs$core$IAtom$))
{return true;
} else
{if((!G__9127.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__9127);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__9127);
}
})())?value:cljs.core.atom.call(null,value));var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",4427965699),new cljs.core.Keyword(null,"tx-listen","tx-listen",666878114),new cljs.core.Keyword(null,"path","path",1017337751));var rootf = ((function (watch_key,state,state__$1,m,map__9126,map__9126__$1,options,instrument,path,tx_listen,target){
return (function rootf(){cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);
var value__$1 = cljs.core.deref.call(null,state__$1);var cursor = (((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path));om.dom.render.call(null,(function (){var _STAR_instrument_STAR_9134 = om.core._STAR_instrument_STAR_;var _STAR_state_STAR_9135 = om.core._STAR_state_STAR_;try{om.core._STAR_instrument_STAR_ = instrument;
om.core._STAR_state_STAR_ = state__$1;
return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_state_STAR_ = _STAR_state_STAR_9135;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_9134;
}})(),target);
var queue = om.core._get_queue.call(null,state__$1);if(cljs.core.empty_QMARK_.call(null,queue))
{return null;
} else
{var seq__9136_9190 = cljs.core.seq.call(null,queue);var chunk__9137_9191 = null;var count__9138_9192 = 0;var i__9139_9193 = 0;while(true){
if((i__9139_9193 < count__9138_9192))
{var c_9194 = cljs.core._nth.call(null,chunk__9137_9191,i__9139_9193);if(cljs.core.truth_(c_9194.isMounted()))
{c_9194.forceUpdate();
} else
{}
{
var G__9195 = seq__9136_9190;
var G__9196 = chunk__9137_9191;
var G__9197 = count__9138_9192;
var G__9198 = (i__9139_9193 + 1);
seq__9136_9190 = G__9195;
chunk__9137_9191 = G__9196;
count__9138_9192 = G__9197;
i__9139_9193 = G__9198;
continue;
}
} else
{var temp__4126__auto___9199 = cljs.core.seq.call(null,seq__9136_9190);if(temp__4126__auto___9199)
{var seq__9136_9200__$1 = temp__4126__auto___9199;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9136_9200__$1))
{var c__7182__auto___9201 = cljs.core.chunk_first.call(null,seq__9136_9200__$1);{
var G__9202 = cljs.core.chunk_rest.call(null,seq__9136_9200__$1);
var G__9203 = c__7182__auto___9201;
var G__9204 = cljs.core.count.call(null,c__7182__auto___9201);
var G__9205 = 0;
seq__9136_9190 = G__9202;
chunk__9137_9191 = G__9203;
count__9138_9192 = G__9204;
i__9139_9193 = G__9205;
continue;
}
} else
{var c_9206 = cljs.core.first.call(null,seq__9136_9200__$1);if(cljs.core.truth_(c_9206.isMounted()))
{c_9206.forceUpdate();
} else
{}
{
var G__9207 = cljs.core.next.call(null,seq__9136_9200__$1);
var G__9208 = null;
var G__9209 = 0;
var G__9210 = 0;
seq__9136_9190 = G__9207;
chunk__9137_9191 = G__9208;
count__9138_9192 = G__9209;
i__9139_9193 = G__9210;
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
});})(watch_key,state,state__$1,m,map__9126,map__9126__$1,options,instrument,path,tx_listen,target))
;cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,m,rootf,map__9126,map__9126__$1,options,instrument,path,tx_listen,target){
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
});})(watch_key,state,state__$1,m,rootf,map__9126,map__9126__$1,options,instrument,path,tx_listen,target))
);
cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,m,rootf,map__9126,map__9126__$1,options,instrument,path,tx_listen,target){
return (function (){cljs.core.remove_watch.call(null,state__$1,watch_key);
om.core.tear_down.call(null,state__$1,watch_key);
cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);
return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,m,rootf,map__9126,map__9126__$1,options,instrument,path,tx_listen,target))
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
lt.plugins.gestalt.state.global_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"docs","docs",1016993197),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"fragment-shaders","fragment-shaders",2490494499),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"vertex-shaders","vertex-shaders",4112853367),cljs.core.PersistentArrayMap.EMPTY], null));
lt.plugins.gestalt.state.docs_path = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"docs","docs",1016993197)], null);
lt.plugins.gestalt.state.frag_path = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fragment-shaders","fragment-shaders",2490494499)], null);
lt.plugins.gestalt.state.vert_path = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertex-shaders","vertex-shaders",4112853367)], null);
lt.plugins.gestalt.state.get_state = (function get_state(state_vec){return cljs.core.get_in.call(null,cljs.core.deref.call(null,lt.plugins.gestalt.state.global_state),state_vec);
});
lt.plugins.gestalt.state.swap_state_fn = (function swap_state_fn(state_vec){return cljs.core.partial.call(null,cljs.core.swap_BANG_,lt.plugins.gestalt.state.global_state,cljs.core.update_in,state_vec);
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gestalt.linker')) {
goog.provide('lt.plugins.gestalt.linker');
goog.require('cljs.core');
goog.require('lt.objs.notifos');
goog.require('lt.object');
goog.require('om.dom');
goog.require('om.dom');
goog.require('lt.objs.tabs');
goog.require('lt.util.js');
goog.require('lt.objs.tabs');
goog.require('lt.objs.statusbar');
goog.require('lt.objs.statusbar');
goog.require('lt.util.js');
goog.require('om.core');
goog.require('om.core');
goog.require('lt.objs.notifos');
goog.require('lt.object');
lt.plugins.gestalt.linker.file_list = (function file_list(data,owner){if(typeof lt.plugins.gestalt.linker.t11561 !== 'undefined')
{} else
{
/**
* @constructor
*/
lt.plugins.gestalt.linker.t11561 = (function (owner,data,file_list,meta11562){
this.owner = owner;
this.data = data;
this.file_list = file_list;
this.meta11562 = meta11562;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lt.plugins.gestalt.linker.t11561.cljs$lang$type = true;
lt.plugins.gestalt.linker.t11561.cljs$lang$ctorStr = "lt.plugins.gestalt.linker/t11561";
lt.plugins.gestalt.linker.t11561.cljs$lang$ctorPrWriter = (function (this__6993__auto__,writer__6994__auto__,opt__6995__auto__){return cljs.core._write.call(null,writer__6994__auto__,"lt.plugins.gestalt.linker/t11561");
});
lt.plugins.gestalt.linker.t11561.prototype.om$core$IRender$ = true;
lt.plugins.gestalt.linker.t11561.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.h1(null,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(self__.data));
});
lt.plugins.gestalt.linker.t11561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11563){var self__ = this;
var _11563__$1 = this;return self__.meta11562;
});
lt.plugins.gestalt.linker.t11561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11563,meta11562__$1){var self__ = this;
var _11563__$1 = this;return (new lt.plugins.gestalt.linker.t11561(self__.owner,self__.data,self__.file_list,meta11562__$1));
});
lt.plugins.gestalt.linker.__GT_t11561 = (function __GT_t11561(owner__$1,data__$1,file_list__$1,meta11562){return (new lt.plugins.gestalt.linker.t11561(owner__$1,data__$1,file_list__$1,meta11562));
});
}
return (new lt.plugins.gestalt.linker.t11561(owner,data,file_list,null));
});
lt.plugins.gestalt.linker.glsl_linker = (function glsl_linker(this$){var e__8642__auto__ = crate.core.html.call(null,"dummy function: the real action is in build-linker-ui");var seq__11570_11576 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#glsl-linker","div#glsl-linker",1732658006)], null)], null)));var chunk__11571_11577 = null;var count__11572_11578 = 0;var i__11573_11579 = 0;while(true){
if((i__11573_11579 < count__11572_11578))
{var vec__11574_11580 = cljs.core._nth.call(null,chunk__11571_11577,i__11573_11579);var ev__8643__auto___11581 = cljs.core.nth.call(null,vec__11574_11580,0,null);var func__8644__auto___11582 = cljs.core.nth.call(null,vec__11574_11580,1,null);lt.util.dom.on.call(null,e__8642__auto__,ev__8643__auto___11581,func__8644__auto___11582);
{
var G__11583 = seq__11570_11576;
var G__11584 = chunk__11571_11577;
var G__11585 = count__11572_11578;
var G__11586 = (i__11573_11579 + 1);
seq__11570_11576 = G__11583;
chunk__11571_11577 = G__11584;
count__11572_11578 = G__11585;
i__11573_11579 = G__11586;
continue;
}
} else
{var temp__4126__auto___11587 = cljs.core.seq.call(null,seq__11570_11576);if(temp__4126__auto___11587)
{var seq__11570_11588__$1 = temp__4126__auto___11587;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11570_11588__$1))
{var c__7182__auto___11589 = cljs.core.chunk_first.call(null,seq__11570_11588__$1);{
var G__11590 = cljs.core.chunk_rest.call(null,seq__11570_11588__$1);
var G__11591 = c__7182__auto___11589;
var G__11592 = cljs.core.count.call(null,c__7182__auto___11589);
var G__11593 = 0;
seq__11570_11576 = G__11590;
chunk__11571_11577 = G__11591;
count__11572_11578 = G__11592;
i__11573_11579 = G__11593;
continue;
}
} else
{var vec__11575_11594 = cljs.core.first.call(null,seq__11570_11588__$1);var ev__8643__auto___11595 = cljs.core.nth.call(null,vec__11575_11594,0,null);var func__8644__auto___11596 = cljs.core.nth.call(null,vec__11575_11594,1,null);lt.util.dom.on.call(null,e__8642__auto__,ev__8643__auto___11595,func__8644__auto___11596);
{
var G__11597 = cljs.core.next.call(null,seq__11570_11588__$1);
var G__11598 = null;
var G__11599 = 0;
var G__11600 = 0;
seq__11570_11576 = G__11597;
chunk__11571_11577 = G__11598;
count__11572_11578 = G__11599;
i__11573_11579 = G__11600;
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
lt.plugins.gestalt.linker.build_linker_ui = (function build_linker_ui(this$){return om.core.root.call(null,lt.plugins.gestalt.linker.file_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),"Hello world!"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))], null));
});
lt.plugins.gestalt.linker.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4126__auto___11601 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4126__auto___11601))
{var ts_11602 = temp__4126__auto___11601;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_11602))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_11602);
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
lt.plugins.gestalt.linker.create_linker.call(null);
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
goog.require('lt.plugins.gestalt.util');
goog.require('lt.plugins.gestalt.linker');
goog.require('lt.objs.files');
goog.require('lt.plugins.gestalt.state');
goog.require('lt.util.js');
goog.require('lt.objs.command');
goog.require('lt.plugins.gestalt.linker');
goog.require('lt.plugins.gestalt.state');
goog.require('lt.util.js');
goog.require('lt.plugins.gestalt.util');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('lt.objs.notifos');
goog.require('lt.objs.files');
lt.plugins.gestalt.core.canvas = document.createElement("CANVAS");
lt.plugins.gestalt.core.gl = lt.plugins.gestalt.core.canvas.getContext("webgl");
lt.plugins.gestalt.core.error__GT_map = (function error__GT_map(error){var parts = clojure.string.split.call(null,error,/:/);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",1017226086),cljs.core.nth.call(null,parts,2),new cljs.core.Keyword(null,"operator","operator",513350678),clojure.string.replace.call(null,clojure.string.trim.call(null,cljs.core.nth.call(null,parts,3)),/\'/,""),new cljs.core.Keyword(null,"message","message",1968829305),clojure.string.trim.call(null,cljs.core.nth.call(null,parts,4))], null);
});
lt.plugins.gestalt.core.gl_errors__GT_edn = (function gl_errors__GT_edn(error_str){var errors = clojure.string.split_lines.call(null,error_str);return cljs.core.vec.call(null,cljs.core.map.call(null,lt.plugins.gestalt.core.error__GT_map,errors));
});
lt.plugins.gestalt.core.compile_shader_type = (function compile_shader_type(fname,source,shader_type){var shader = lt.plugins.gestalt.core.gl.createShader(shader_type);lt.plugins.gestalt.core.gl.shaderSource(shader,source);
lt.plugins.gestalt.core.gl.compileShader(shader);
if(cljs.core.truth_(lt.plugins.gestalt.core.gl.getShaderParameter(shader,lt.plugins.gestalt.core.gl.COMPILE_STATUS)))
{lt.plugins.gestalt.core.swap_state_fn.call(null,(function (){var pred__12496 = cljs.core._EQ_;var expr__12497 = shader_type;if(cljs.core.truth_(pred__12496.call(null,lt.plugins.gestalt.core.gl.FRAGMENT_SHADER,expr__12497)))
{return lt.plugins.gestalt.state.frag_path;
} else
{if(cljs.core.truth_(pred__12496.call(null,lt.plugins.gestalt.core.gl.VERTEX_SHADER,expr__12497)))
{return lt.plugins.gestalt.state.vert_path;
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__12497))));
}
}
})()).call(null,cljs.core.assoc,fname,shader);
return lt.objs.notifos.set_msg_BANG_.call(null,"Successfully compiled shader");
} else
{var errors = lt.plugins.gestalt.core.gl_errors__GT_edn.call(null,lt.plugins.gestalt.core.gl.getShaderInfoLog(shader));return lt.objs.notifos.set_msg_BANG_.call(null,"Ran into some errors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
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
{var shader_type = temp__4124__auto__;return lt.plugins.gestalt.core.compile_shader_type.call(null,fname,lt.plugins.gestalt.core.current_buffer_content.call(null),shader_type);
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"This file is not a valid shader",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"compile-shader","compile-shader",1009200177),new cljs.core.Keyword(null,"desc","desc",1016984067),"GLSL: Compile shader",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.gestalt.core.compile_shader_buffer.call(null);
})], null));
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
lt.plugins.gestalt.docs.get_doc_map = (function get_doc_map(token){var docs = cljs.core.get.call(null,lt.plugins.gestalt.state.get_state.call(null,lt.plugins.gestalt.state.docs_path),token);var params = cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"params","params",4313443576).cljs$core$IFn$_invoke$arity$1(docs));if(cljs.core.truth_(docs))
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
return (function iter__12620(s__12621){return (new cljs.core.LazySeq(null,((function (regex_query){
return (function (){var s__12621__$1 = s__12621;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12621__$1);if(temp__4126__auto__)
{var s__12621__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12621__$2))
{var c__7149__auto__ = cljs.core.chunk_first.call(null,s__12621__$2);var size__7150__auto__ = cljs.core.count.call(null,c__7149__auto__);var b__12623 = cljs.core.chunk_buffer.call(null,size__7150__auto__);if((function (){var i__12622 = 0;while(true){
if((i__12622 < size__7150__auto__))
{var doc_key = cljs.core._nth.call(null,c__7149__auto__,i__12622);cljs.core.chunk_append.call(null,b__12623,((cljs.core.empty_QMARK_.call(null,cljs.core.re_find.call(null,regex_query,doc_key)))?null:doc_key));
{
var G__12624 = (i__12622 + 1);
i__12622 = G__12624;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12623),iter__12620.call(null,cljs.core.chunk_rest.call(null,s__12621__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12623),null);
}
} else
{var doc_key = cljs.core.first.call(null,s__12621__$2);return cljs.core.cons.call(null,((cljs.core.empty_QMARK_.call(null,cljs.core.re_find.call(null,regex_query,doc_key)))?null:doc_key),iter__12620.call(null,cljs.core.rest.call(null,s__12621__$2)));
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
lt.plugins.gestalt.docs.glsl_doc_exec = (function glsl_doc_exec(query){var doc_keys = cljs.core.keys.call(null,cljs.core.deref.call(null,lt.plugins.gestalt.docs.glsl_docs));var matches = lt.plugins.gestalt.docs.doc_matches.call(null,query,doc_keys);return lt.object.raise.call(null,lt.plugins.doc.doc_search,new cljs.core.Keyword(null,"doc.search.results","doc.search.results",3363305624),cljs.core.map.call(null,lt.plugins.gestalt.docs.get_doc_map,lt.plugins.gestalt.docs.maches));
});
lt.plugins.gestalt.docs.glsl_doc_search = (function glsl_doc_search(this$,cur){return cljs.core.conj.call(null,cur,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"glsl",new cljs.core.Keyword(null,"trigger","trigger",4248979754),lt.plugins.gestalt.docs.glsl_doc_exec,new cljs.core.Keyword(null,"file-types","file-types",1727875162),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Fragment Shader",null,"Vertex Shader",null], null), null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gestalt.docs","manglsl-browser-doc","lt.plugins.gestalt.docs/manglsl-browser-doc",3991275697),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.doc","editor.doc",3751347369),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gestalt.docs.manglsl_browser_doc);
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gestalt.docs","glsl-doc-search","lt.plugins.gestalt.docs/glsl-doc-search",1176033923),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"types+","types+",4450069060),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gestalt.docs.glsl_doc_search);
}

//# sourceMappingURL=gestalt_compiled.js.map