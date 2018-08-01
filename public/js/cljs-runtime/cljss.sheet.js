goog.provide('cljss.sheet');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljss.utils');
cljss.sheet.limit = (65534);
cljss.sheet.make_style_tag = (function cljss$sheet$make_style_tag(){
var tag = goog.dom.createElement("style");
var head = (goog.dom.getElementsByTagNameAndClass("head")[(0)]);
goog.object.set(tag,"type","text/css");

var G__26079_26081 = tag;
var G__26080_26082 = goog.dom.createTextNode("");
goog.dom.appendChild(G__26079_26081,G__26080_26082);

goog.dom.appendChild(head,tag);

return tag;
});

/**
 * @interface
 */
cljss.sheet.ISheet = function(){};

cljss.sheet.insert_BANG_ = (function cljss$sheet$insert_BANG_(this$,css,cls_name){
if(((!((this$ == null))) && (!((this$.cljss$sheet$ISheet$insert_BANG_$arity$3 == null))))){
return this$.cljss$sheet$ISheet$insert_BANG_$arity$3(this$,css,cls_name);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (cljss.sheet.insert_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(this$,css,cls_name) : m__4244__auto__.call(null,this$,css,cls_name));
} else {
var m__4244__auto____$1 = (cljss.sheet.insert_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,css,cls_name) : m__4244__auto____$1.call(null,this$,css,cls_name));
} else {
throw cljs.core.missing_protocol("ISheet.insert!",this$);
}
}
}
});

cljss.sheet.flush_BANG_ = (function cljss$sheet$flush_BANG_(this$){
if(((!((this$ == null))) && (!((this$.cljss$sheet$ISheet$flush_BANG_$arity$1 == null))))){
return this$.cljss$sheet$ISheet$flush_BANG_$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (cljss.sheet.flush_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (cljss.sheet.flush_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ISheet.flush!",this$);
}
}
}
});

cljss.sheet.filled_QMARK_ = (function cljss$sheet$filled_QMARK_(this$){
if(((!((this$ == null))) && (!((this$.cljss$sheet$ISheet$filled_QMARK_$arity$1 == null))))){
return this$.cljss$sheet$ISheet$filled_QMARK_$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (cljss.sheet.filled_QMARK_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (cljss.sheet.filled_QMARK_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ISheet.filled?",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljss.sheet.ISheet}
*/
cljss.sheet.Sheet = (function (tag,sheet,cache){
this.tag = tag;
this.sheet = sheet;
this.cache = cache;
});
cljss.sheet.Sheet.prototype.cljss$sheet$ISheet$ = cljs.core.PROTOCOL_SENTINEL;

cljss.sheet.Sheet.prototype.cljss$sheet$ISheet$insert_BANG_$arity$3 = (function (this$,rule,cls_name){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljss.sheet.filled_QMARK_(this$__$1))){
throw (new Error(["A stylesheet can only have ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljss.sheet.limit)," rules"].join('')));
} else {
}

if(cljs.core.truth_((function (){var fexpr__26086 = cljs.core.deref(self__.cache);
return (fexpr__26086.cljs$core$IFn$_invoke$arity$1 ? fexpr__26086.cljs$core$IFn$_invoke$arity$1(cls_name) : fexpr__26086.call(null,cls_name));
})())){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cache,cljs.core.conj,cls_name);

var rule__$1 = ((cljs.core.ifn_QMARK_(rule))?(rule.cljs$core$IFn$_invoke$arity$0 ? rule.cljs$core$IFn$_invoke$arity$0() : rule.call(null)):rule);
var rules_count = (function (){var G__26087 = goog.object.get(self__.sheet,"cssRules");
var G__26088 = "length";
return goog.object.get(G__26087,G__26088);
})();
if(cljss.utils.dev_QMARK_){
var G__26089 = self__.tag;
var G__26090 = goog.dom.createTextNode(rule__$1);
return goog.dom.appendChild(G__26089,G__26090);
} else {
try{return self__.sheet.insertRule(rule__$1,rules_count);
}catch (e26091){var e = e26091;
if(cljss.utils.dev_QMARK_){
return console.warn("Illegal CSS rule",rule__$1);
} else {
return null;
}
}}
}
});

cljss.sheet.Sheet.prototype.cljss$sheet$ISheet$flush_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.tag.parentNode.removeChild(self__.tag);
});

cljss.sheet.Sheet.prototype.cljss$sheet$ISheet$filled_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(self__.cache)),cljss.sheet.limit);
});

cljss.sheet.Sheet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"sheet","sheet",-418624267,null),new cljs.core.Symbol(null,"cache","cache",403508473,null)], null);
});

cljss.sheet.Sheet.cljs$lang$type = true;

cljss.sheet.Sheet.cljs$lang$ctorStr = "cljss.sheet/Sheet";

cljss.sheet.Sheet.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljss.sheet/Sheet");
});

/**
 * Positional factory function for cljss.sheet/Sheet.
 */
cljss.sheet.__GT_Sheet = (function cljss$sheet$__GT_Sheet(tag,sheet,cache){
return (new cljss.sheet.Sheet(tag,sheet,cache));
});

cljss.sheet.create_sheet = (function cljss$sheet$create_sheet(){
var tag = cljss.sheet.make_style_tag();
var sheet = goog.object.get(tag,"sheet");
return (new cljss.sheet.Sheet(tag,sheet,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)));
});

//# sourceMappingURL=cljss.sheet.js.map
