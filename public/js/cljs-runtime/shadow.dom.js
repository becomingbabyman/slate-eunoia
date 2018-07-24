goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$IElement$_to_dom$arity$1 == null))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (shadow.dom._to_dom["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (shadow.dom._to_svg["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33916 = coll;
var G__33917 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33916,G__33917) : shadow.dom.lazy_native_coll_seq.call(null,G__33916,G__33917));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__3949__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)].join(''));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33947 = arguments.length;
switch (G__33947) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33950 = arguments.length;
switch (G__33950) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33953 = arguments.length;
switch (G__33953) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33959 = arguments.length;
switch (G__33959) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33966 = arguments.length;
switch (G__33966) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__33967 = document;
var G__33968 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33967,G__33968);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__33969 = shadow.dom.dom_node(parent);
var G__33970 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33969,G__33970);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__33973 = shadow.dom.dom_node(el);
var G__33974 = cls;
return goog.dom.classlist.add(G__33973,G__33974);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__33975 = shadow.dom.dom_node(el);
var G__33976 = cls;
return goog.dom.classlist.remove(G__33975,G__33976);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33978 = arguments.length;
switch (G__33978) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__33979 = shadow.dom.dom_node(el);
var G__33980 = cls;
return goog.dom.classlist.toggle(G__33979,G__33980);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__3949__auto__ = !((typeof document !== 'undefined'));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33982){if((e33982 instanceof Object)){
var e = e33982;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33982;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__3949__auto__ = !((typeof document !== 'undefined'));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33983 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33984 = null;
var count__33985 = (0);
var i__33986 = (0);
while(true){
if((i__33986 < count__33985)){
var el = chunk__33984.cljs$core$IIndexed$_nth$arity$2(null,i__33986);
var handler_33993__$1 = ((function (seq__33983,chunk__33984,count__33985,i__33986,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33983,chunk__33984,count__33985,i__33986,el))
;
var G__33987_33994 = el;
var G__33988_33995 = cljs.core.name(ev);
var G__33989_33996 = handler_33993__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33987_33994,G__33988_33995,G__33989_33996) : shadow.dom.dom_listen.call(null,G__33987_33994,G__33988_33995,G__33989_33996));


var G__33997 = seq__33983;
var G__33998 = chunk__33984;
var G__33999 = count__33985;
var G__34000 = (i__33986 + (1));
seq__33983 = G__33997;
chunk__33984 = G__33998;
count__33985 = G__33999;
i__33986 = G__34000;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__33983);
if(temp__5457__auto__){
var seq__33983__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33983__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__33983__$1);
var G__34001 = cljs.core.chunk_rest(seq__33983__$1);
var G__34002 = c__4351__auto__;
var G__34003 = cljs.core.count(c__4351__auto__);
var G__34004 = (0);
seq__33983 = G__34001;
chunk__33984 = G__34002;
count__33985 = G__34003;
i__33986 = G__34004;
continue;
} else {
var el = cljs.core.first(seq__33983__$1);
var handler_34005__$1 = ((function (seq__33983,chunk__33984,count__33985,i__33986,el,seq__33983__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33983,chunk__33984,count__33985,i__33986,el,seq__33983__$1,temp__5457__auto__))
;
var G__33990_34006 = el;
var G__33991_34007 = cljs.core.name(ev);
var G__33992_34008 = handler_34005__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33990_34006,G__33991_34007,G__33992_34008) : shadow.dom.dom_listen.call(null,G__33990_34006,G__33991_34007,G__33992_34008));


var G__34009 = cljs.core.next(seq__33983__$1);
var G__34010 = null;
var G__34011 = (0);
var G__34012 = (0);
seq__33983 = G__34009;
chunk__33984 = G__34010;
count__33985 = G__34011;
i__33986 = G__34012;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34014 = arguments.length;
switch (G__34014) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__34015 = shadow.dom.dom_node(el);
var G__34016 = cljs.core.name(ev);
var G__34017 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__34015,G__34016,G__34017) : shadow.dom.dom_listen.call(null,G__34015,G__34016,G__34017));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__34019 = shadow.dom.dom_node(el);
var G__34020 = cljs.core.name(ev);
var G__34021 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__34019,G__34020,G__34021) : shadow.dom.dom_listen_remove.call(null,G__34019,G__34020,G__34021));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34022 = cljs.core.seq(events);
var chunk__34023 = null;
var count__34024 = (0);
var i__34025 = (0);
while(true){
if((i__34025 < count__34024)){
var vec__34026 = chunk__34023.cljs$core$IIndexed$_nth$arity$2(null,i__34025);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34026,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34026,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34033 = seq__34022;
var G__34034 = chunk__34023;
var G__34035 = count__34024;
var G__34036 = (i__34025 + (1));
seq__34022 = G__34033;
chunk__34023 = G__34034;
count__34024 = G__34035;
i__34025 = G__34036;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__34022);
if(temp__5457__auto__){
var seq__34022__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34022__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__34022__$1);
var G__34037 = cljs.core.chunk_rest(seq__34022__$1);
var G__34038 = c__4351__auto__;
var G__34039 = cljs.core.count(c__4351__auto__);
var G__34040 = (0);
seq__34022 = G__34037;
chunk__34023 = G__34038;
count__34024 = G__34039;
i__34025 = G__34040;
continue;
} else {
var vec__34029 = cljs.core.first(seq__34022__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34029,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34029,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34041 = cljs.core.next(seq__34022__$1);
var G__34042 = null;
var G__34043 = (0);
var G__34044 = (0);
seq__34022 = G__34041;
chunk__34023 = G__34042;
count__34024 = G__34043;
i__34025 = G__34044;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34045 = cljs.core.seq(styles);
var chunk__34046 = null;
var count__34047 = (0);
var i__34048 = (0);
while(true){
if((i__34048 < count__34047)){
var vec__34049 = chunk__34046.cljs$core$IIndexed$_nth$arity$2(null,i__34048);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34049,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34049,(1),null);
var G__34052_34061 = dom;
var G__34053_34062 = cljs.core.name(k);
var G__34054_34063 = (((v == null))?"":v);
goog.style.setStyle(G__34052_34061,G__34053_34062,G__34054_34063);


var G__34064 = seq__34045;
var G__34065 = chunk__34046;
var G__34066 = count__34047;
var G__34067 = (i__34048 + (1));
seq__34045 = G__34064;
chunk__34046 = G__34065;
count__34047 = G__34066;
i__34048 = G__34067;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__34045);
if(temp__5457__auto__){
var seq__34045__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34045__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__34045__$1);
var G__34068 = cljs.core.chunk_rest(seq__34045__$1);
var G__34069 = c__4351__auto__;
var G__34070 = cljs.core.count(c__4351__auto__);
var G__34071 = (0);
seq__34045 = G__34068;
chunk__34046 = G__34069;
count__34047 = G__34070;
i__34048 = G__34071;
continue;
} else {
var vec__34055 = cljs.core.first(seq__34045__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34055,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34055,(1),null);
var G__34058_34072 = dom;
var G__34059_34073 = cljs.core.name(k);
var G__34060_34074 = (((v == null))?"":v);
goog.style.setStyle(G__34058_34072,G__34059_34073,G__34060_34074);


var G__34075 = cljs.core.next(seq__34045__$1);
var G__34076 = null;
var G__34077 = (0);
var G__34078 = (0);
seq__34045 = G__34075;
chunk__34046 = G__34076;
count__34047 = G__34077;
i__34048 = G__34078;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34079_34080 = key;
var G__34079_34081__$1 = (((G__34079_34080 instanceof cljs.core.Keyword))?G__34079_34080.fqn:null);
switch (G__34079_34081__$1) {
case "id":
el.id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "class":
el.className = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34083 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__3949__auto__ = goog.string.startsWith(ks_34083,"data-");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.string.startsWith(ks_34083,"aria-");
}
})())){
el.setAttribute(ks_34083,value);
} else {
(el[ks_34083] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__34084 = shadow.dom.dom_node(el);
var G__34085 = cls;
return goog.dom.classlist.contains(G__34084,G__34085);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34086){
var map__34087 = p__34086;
var map__34087__$1 = ((((!((map__34087 == null)))?(((((map__34087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34087):map__34087);
var props = map__34087__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34087__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34089 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34089,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34089,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34089,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34092 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34092,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34092;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34094 = arguments.length;
switch (G__34094) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34096){
var vec__34097 = p__34096;
var seq__34098 = cljs.core.seq(vec__34097);
var first__34099 = cljs.core.first(seq__34098);
var seq__34098__$1 = cljs.core.next(seq__34098);
var nn = first__34099;
var first__34099__$1 = cljs.core.first(seq__34098__$1);
var seq__34098__$2 = cljs.core.next(seq__34098__$1);
var np = first__34099__$1;
var nc = seq__34098__$2;
var node = vec__34097;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34100 = nn;
var G__34101 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34100,G__34101) : create_fn.call(null,G__34100,G__34101));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34102 = nn;
var G__34103 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34102,G__34103) : create_fn.call(null,G__34102,G__34103));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34104 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34104,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34104,(1),null);
var seq__34107_34123 = cljs.core.seq(node_children);
var chunk__34108_34124 = null;
var count__34109_34125 = (0);
var i__34110_34126 = (0);
while(true){
if((i__34110_34126 < count__34109_34125)){
var child_struct_34127 = chunk__34108_34124.cljs$core$IIndexed$_nth$arity$2(null,i__34110_34126);
var children_34128 = shadow.dom.dom_node(child_struct_34127);
if(cljs.core.seq_QMARK_(children_34128)){
var seq__34111_34129 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34128));
var chunk__34113_34130 = null;
var count__34114_34131 = (0);
var i__34115_34132 = (0);
while(true){
if((i__34115_34132 < count__34114_34131)){
var child_34133 = chunk__34113_34130.cljs$core$IIndexed$_nth$arity$2(null,i__34115_34132);
if(cljs.core.truth_(child_34133)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34133);


var G__34134 = seq__34111_34129;
var G__34135 = chunk__34113_34130;
var G__34136 = count__34114_34131;
var G__34137 = (i__34115_34132 + (1));
seq__34111_34129 = G__34134;
chunk__34113_34130 = G__34135;
count__34114_34131 = G__34136;
i__34115_34132 = G__34137;
continue;
} else {
var G__34138 = seq__34111_34129;
var G__34139 = chunk__34113_34130;
var G__34140 = count__34114_34131;
var G__34141 = (i__34115_34132 + (1));
seq__34111_34129 = G__34138;
chunk__34113_34130 = G__34139;
count__34114_34131 = G__34140;
i__34115_34132 = G__34141;
continue;
}
} else {
var temp__5457__auto___34142 = cljs.core.seq(seq__34111_34129);
if(temp__5457__auto___34142){
var seq__34111_34143__$1 = temp__5457__auto___34142;
if(cljs.core.chunked_seq_QMARK_(seq__34111_34143__$1)){
var c__4351__auto___34144 = cljs.core.chunk_first(seq__34111_34143__$1);
var G__34145 = cljs.core.chunk_rest(seq__34111_34143__$1);
var G__34146 = c__4351__auto___34144;
var G__34147 = cljs.core.count(c__4351__auto___34144);
var G__34148 = (0);
seq__34111_34129 = G__34145;
chunk__34113_34130 = G__34146;
count__34114_34131 = G__34147;
i__34115_34132 = G__34148;
continue;
} else {
var child_34149 = cljs.core.first(seq__34111_34143__$1);
if(cljs.core.truth_(child_34149)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34149);


var G__34150 = cljs.core.next(seq__34111_34143__$1);
var G__34151 = null;
var G__34152 = (0);
var G__34153 = (0);
seq__34111_34129 = G__34150;
chunk__34113_34130 = G__34151;
count__34114_34131 = G__34152;
i__34115_34132 = G__34153;
continue;
} else {
var G__34154 = cljs.core.next(seq__34111_34143__$1);
var G__34155 = null;
var G__34156 = (0);
var G__34157 = (0);
seq__34111_34129 = G__34154;
chunk__34113_34130 = G__34155;
count__34114_34131 = G__34156;
i__34115_34132 = G__34157;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34128);
}


var G__34158 = seq__34107_34123;
var G__34159 = chunk__34108_34124;
var G__34160 = count__34109_34125;
var G__34161 = (i__34110_34126 + (1));
seq__34107_34123 = G__34158;
chunk__34108_34124 = G__34159;
count__34109_34125 = G__34160;
i__34110_34126 = G__34161;
continue;
} else {
var temp__5457__auto___34162 = cljs.core.seq(seq__34107_34123);
if(temp__5457__auto___34162){
var seq__34107_34163__$1 = temp__5457__auto___34162;
if(cljs.core.chunked_seq_QMARK_(seq__34107_34163__$1)){
var c__4351__auto___34164 = cljs.core.chunk_first(seq__34107_34163__$1);
var G__34165 = cljs.core.chunk_rest(seq__34107_34163__$1);
var G__34166 = c__4351__auto___34164;
var G__34167 = cljs.core.count(c__4351__auto___34164);
var G__34168 = (0);
seq__34107_34123 = G__34165;
chunk__34108_34124 = G__34166;
count__34109_34125 = G__34167;
i__34110_34126 = G__34168;
continue;
} else {
var child_struct_34169 = cljs.core.first(seq__34107_34163__$1);
var children_34170 = shadow.dom.dom_node(child_struct_34169);
if(cljs.core.seq_QMARK_(children_34170)){
var seq__34117_34171 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34170));
var chunk__34119_34172 = null;
var count__34120_34173 = (0);
var i__34121_34174 = (0);
while(true){
if((i__34121_34174 < count__34120_34173)){
var child_34175 = chunk__34119_34172.cljs$core$IIndexed$_nth$arity$2(null,i__34121_34174);
if(cljs.core.truth_(child_34175)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34175);


var G__34176 = seq__34117_34171;
var G__34177 = chunk__34119_34172;
var G__34178 = count__34120_34173;
var G__34179 = (i__34121_34174 + (1));
seq__34117_34171 = G__34176;
chunk__34119_34172 = G__34177;
count__34120_34173 = G__34178;
i__34121_34174 = G__34179;
continue;
} else {
var G__34180 = seq__34117_34171;
var G__34181 = chunk__34119_34172;
var G__34182 = count__34120_34173;
var G__34183 = (i__34121_34174 + (1));
seq__34117_34171 = G__34180;
chunk__34119_34172 = G__34181;
count__34120_34173 = G__34182;
i__34121_34174 = G__34183;
continue;
}
} else {
var temp__5457__auto___34184__$1 = cljs.core.seq(seq__34117_34171);
if(temp__5457__auto___34184__$1){
var seq__34117_34185__$1 = temp__5457__auto___34184__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34117_34185__$1)){
var c__4351__auto___34186 = cljs.core.chunk_first(seq__34117_34185__$1);
var G__34187 = cljs.core.chunk_rest(seq__34117_34185__$1);
var G__34188 = c__4351__auto___34186;
var G__34189 = cljs.core.count(c__4351__auto___34186);
var G__34190 = (0);
seq__34117_34171 = G__34187;
chunk__34119_34172 = G__34188;
count__34120_34173 = G__34189;
i__34121_34174 = G__34190;
continue;
} else {
var child_34191 = cljs.core.first(seq__34117_34185__$1);
if(cljs.core.truth_(child_34191)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34191);


var G__34192 = cljs.core.next(seq__34117_34185__$1);
var G__34193 = null;
var G__34194 = (0);
var G__34195 = (0);
seq__34117_34171 = G__34192;
chunk__34119_34172 = G__34193;
count__34120_34173 = G__34194;
i__34121_34174 = G__34195;
continue;
} else {
var G__34196 = cljs.core.next(seq__34117_34185__$1);
var G__34197 = null;
var G__34198 = (0);
var G__34199 = (0);
seq__34117_34171 = G__34196;
chunk__34119_34172 = G__34197;
count__34120_34173 = G__34198;
i__34121_34174 = G__34199;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34170);
}


var G__34200 = cljs.core.next(seq__34107_34163__$1);
var G__34201 = null;
var G__34202 = (0);
var G__34203 = (0);
seq__34107_34123 = G__34200;
chunk__34108_34124 = G__34201;
count__34109_34125 = G__34202;
i__34110_34126 = G__34203;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__34205 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__34205);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if(((!((node == null)))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34207 = cljs.core.seq(node);
var chunk__34208 = null;
var count__34209 = (0);
var i__34210 = (0);
while(true){
if((i__34210 < count__34209)){
var n = chunk__34208.cljs$core$IIndexed$_nth$arity$2(null,i__34210);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34211 = seq__34207;
var G__34212 = chunk__34208;
var G__34213 = count__34209;
var G__34214 = (i__34210 + (1));
seq__34207 = G__34211;
chunk__34208 = G__34212;
count__34209 = G__34213;
i__34210 = G__34214;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__34207);
if(temp__5457__auto__){
var seq__34207__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34207__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__34207__$1);
var G__34215 = cljs.core.chunk_rest(seq__34207__$1);
var G__34216 = c__4351__auto__;
var G__34217 = cljs.core.count(c__4351__auto__);
var G__34218 = (0);
seq__34207 = G__34215;
chunk__34208 = G__34216;
count__34209 = G__34217;
i__34210 = G__34218;
continue;
} else {
var n = cljs.core.first(seq__34207__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34219 = cljs.core.next(seq__34207__$1);
var G__34220 = null;
var G__34221 = (0);
var G__34222 = (0);
seq__34207 = G__34219;
chunk__34208 = G__34220;
count__34209 = G__34221;
i__34210 = G__34222;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__34223 = shadow.dom.dom_node(new$);
var G__34224 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__34223,G__34224);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34226 = arguments.length;
switch (G__34226) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34229 = arguments.length;
switch (G__34229) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34236 = arguments.length;
switch (G__34236) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__3949__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4534__auto__ = [];
var len__4531__auto___34247 = arguments.length;
var i__4532__auto___34248 = (0);
while(true){
if((i__4532__auto___34248 < len__4531__auto___34247)){
args__4534__auto__.push((arguments[i__4532__auto___34248]));

var G__34249 = (i__4532__auto___34248 + (1));
i__4532__auto___34248 = G__34249;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34243_34250 = cljs.core.seq(nodes);
var chunk__34244_34251 = null;
var count__34245_34252 = (0);
var i__34246_34253 = (0);
while(true){
if((i__34246_34253 < count__34245_34252)){
var node_34254 = chunk__34244_34251.cljs$core$IIndexed$_nth$arity$2(null,i__34246_34253);
fragment.appendChild(shadow.dom._to_dom(node_34254));


var G__34255 = seq__34243_34250;
var G__34256 = chunk__34244_34251;
var G__34257 = count__34245_34252;
var G__34258 = (i__34246_34253 + (1));
seq__34243_34250 = G__34255;
chunk__34244_34251 = G__34256;
count__34245_34252 = G__34257;
i__34246_34253 = G__34258;
continue;
} else {
var temp__5457__auto___34259 = cljs.core.seq(seq__34243_34250);
if(temp__5457__auto___34259){
var seq__34243_34260__$1 = temp__5457__auto___34259;
if(cljs.core.chunked_seq_QMARK_(seq__34243_34260__$1)){
var c__4351__auto___34261 = cljs.core.chunk_first(seq__34243_34260__$1);
var G__34262 = cljs.core.chunk_rest(seq__34243_34260__$1);
var G__34263 = c__4351__auto___34261;
var G__34264 = cljs.core.count(c__4351__auto___34261);
var G__34265 = (0);
seq__34243_34250 = G__34262;
chunk__34244_34251 = G__34263;
count__34245_34252 = G__34264;
i__34246_34253 = G__34265;
continue;
} else {
var node_34266 = cljs.core.first(seq__34243_34260__$1);
fragment.appendChild(shadow.dom._to_dom(node_34266));


var G__34267 = cljs.core.next(seq__34243_34260__$1);
var G__34268 = null;
var G__34269 = (0);
var G__34270 = (0);
seq__34243_34250 = G__34267;
chunk__34244_34251 = G__34268;
count__34245_34252 = G__34269;
i__34246_34253 = G__34270;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq34242){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34242));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34271_34285 = cljs.core.seq(scripts);
var chunk__34272_34286 = null;
var count__34273_34287 = (0);
var i__34274_34288 = (0);
while(true){
if((i__34274_34288 < count__34273_34287)){
var vec__34275_34289 = chunk__34272_34286.cljs$core$IIndexed$_nth$arity$2(null,i__34274_34288);
var script_tag_34290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34275_34289,(0),null);
var script_body_34291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34275_34289,(1),null);
eval(script_body_34291);


var G__34294 = seq__34271_34285;
var G__34295 = chunk__34272_34286;
var G__34296 = count__34273_34287;
var G__34297 = (i__34274_34288 + (1));
seq__34271_34285 = G__34294;
chunk__34272_34286 = G__34295;
count__34273_34287 = G__34296;
i__34274_34288 = G__34297;
continue;
} else {
var temp__5457__auto___34298 = cljs.core.seq(seq__34271_34285);
if(temp__5457__auto___34298){
var seq__34271_34299__$1 = temp__5457__auto___34298;
if(cljs.core.chunked_seq_QMARK_(seq__34271_34299__$1)){
var c__4351__auto___34300 = cljs.core.chunk_first(seq__34271_34299__$1);
var G__34301 = cljs.core.chunk_rest(seq__34271_34299__$1);
var G__34302 = c__4351__auto___34300;
var G__34303 = cljs.core.count(c__4351__auto___34300);
var G__34304 = (0);
seq__34271_34285 = G__34301;
chunk__34272_34286 = G__34302;
count__34273_34287 = G__34303;
i__34274_34288 = G__34304;
continue;
} else {
var vec__34278_34307 = cljs.core.first(seq__34271_34299__$1);
var script_tag_34308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34278_34307,(0),null);
var script_body_34309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34278_34307,(1),null);
eval(script_body_34309);


var G__34310 = cljs.core.next(seq__34271_34299__$1);
var G__34311 = null;
var G__34312 = (0);
var G__34313 = (0);
seq__34271_34285 = G__34310;
chunk__34272_34286 = G__34311;
count__34273_34287 = G__34312;
i__34274_34288 = G__34313;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__34281){
var vec__34282 = p__34281;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34282,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34282,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__34320 = shadow.dom.dom_node(el);
var G__34321 = cls;
return goog.dom.getAncestorByClass(G__34320,G__34321);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34324 = arguments.length;
switch (G__34324) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__34329 = shadow.dom.dom_node(el);
var G__34330 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__34329,G__34330);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__34332 = shadow.dom.dom_node(el);
var G__34333 = cljs.core.name(tag);
var G__34334 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__34332,G__34333,G__34334);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__34342 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__34342);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__34348 = shadow.dom.dom_node(dom);
var G__34349 = value;
return goog.dom.forms.setValue(G__34348,G__34349);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34358 = cljs.core.seq(style_keys);
var chunk__34359 = null;
var count__34360 = (0);
var i__34361 = (0);
while(true){
if((i__34361 < count__34360)){
var it = chunk__34359.cljs$core$IIndexed$_nth$arity$2(null,i__34361);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34362 = seq__34358;
var G__34363 = chunk__34359;
var G__34364 = count__34360;
var G__34365 = (i__34361 + (1));
seq__34358 = G__34362;
chunk__34359 = G__34363;
count__34360 = G__34364;
i__34361 = G__34365;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__34358);
if(temp__5457__auto__){
var seq__34358__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34358__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__34358__$1);
var G__34366 = cljs.core.chunk_rest(seq__34358__$1);
var G__34367 = c__4351__auto__;
var G__34368 = cljs.core.count(c__4351__auto__);
var G__34369 = (0);
seq__34358 = G__34366;
chunk__34359 = G__34367;
count__34360 = G__34368;
i__34361 = G__34369;
continue;
} else {
var it = cljs.core.first(seq__34358__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34370 = cljs.core.next(seq__34358__$1);
var G__34371 = null;
var G__34372 = (0);
var G__34373 = (0);
seq__34358 = G__34370;
chunk__34359 = G__34371;
count__34360 = G__34372;
i__34361 = G__34373;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4203__auto____$1,k__4204__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k34375,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__34379 = k34375;
var G__34379__$1 = (((G__34379 instanceof cljs.core.Keyword))?G__34379.fqn:null);
switch (G__34379__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34375,else__4206__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34374){
var self__ = this;
var G__34374__$1 = this;
return (new cljs.core.RecordIter((0),G__34374__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__34382 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__34382(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34376,other34377){
var self__ = this;
var this34376__$1 = this;
return ((!((other34377 == null))) && ((this34376__$1.constructor === other34377.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34376__$1.x,other34377.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34376__$1.y,other34377.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34376__$1.__extmap,other34377.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__34374){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__34383 = cljs.core.keyword_identical_QMARK_;
var expr__34384 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__34386 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__34387 = expr__34384;
return (pred__34383.cljs$core$IFn$_invoke$arity$2 ? pred__34383.cljs$core$IFn$_invoke$arity$2(G__34386,G__34387) : pred__34383.call(null,G__34386,G__34387));
})())){
return (new shadow.dom.Coordinate(G__34374,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34388 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__34389 = expr__34384;
return (pred__34383.cljs$core$IFn$_invoke$arity$2 ? pred__34383.cljs$core$IFn$_invoke$arity$2(G__34388,G__34389) : pred__34383.call(null,G__34388,G__34389));
})())){
return (new shadow.dom.Coordinate(self__.x,G__34374,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__34374),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__34374){
var self__ = this;
var this__4202__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34374,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return cljs.core._assoc(this__4208__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34378){
var extmap__4236__auto__ = (function (){var G__34390 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34378,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34378)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34390);
} else {
return G__34390;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34378),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34378),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__34400 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__34400);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__34404 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__34404);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__34405 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__34405);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4203__auto____$1,k__4204__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k34407,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__34411 = k34407;
var G__34411__$1 = (((G__34411 instanceof cljs.core.Keyword))?G__34411.fqn:null);
switch (G__34411__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34407,else__4206__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#shadow.dom.Size{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34406){
var self__ = this;
var G__34406__$1 = this;
return (new cljs.core.RecordIter((0),G__34406__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__34412 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__34412(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34408,other34409){
var self__ = this;
var this34408__$1 = this;
return ((!((other34409 == null))) && ((this34408__$1.constructor === other34409.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34408__$1.w,other34409.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34408__$1.h,other34409.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34408__$1.__extmap,other34409.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__34406){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__34413 = cljs.core.keyword_identical_QMARK_;
var expr__34414 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__34416 = new cljs.core.Keyword(null,"w","w",354169001);
var G__34417 = expr__34414;
return (pred__34413.cljs$core$IFn$_invoke$arity$2 ? pred__34413.cljs$core$IFn$_invoke$arity$2(G__34416,G__34417) : pred__34413.call(null,G__34416,G__34417));
})())){
return (new shadow.dom.Size(G__34406,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34418 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__34419 = expr__34414;
return (pred__34413.cljs$core$IFn$_invoke$arity$2 ? pred__34413.cljs$core$IFn$_invoke$arity$2(G__34418,G__34419) : pred__34413.call(null,G__34418,G__34419));
})())){
return (new shadow.dom.Size(self__.w,G__34406,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__34406),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__34406){
var self__ = this;
var this__4202__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34406,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return cljs.core._assoc(this__4208__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34410){
var extmap__4236__auto__ = (function (){var G__34420 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34410,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34410)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34420);
} else {
return G__34420;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34410),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34410),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__34438 = shadow.dom.dom_node(el);
return goog.style.getSize(G__34438);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4405__auto__ = opts;
var l__4406__auto__ = a__4405__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4406__auto__)){
var G__34439 = (i + (1));
var G__34440 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34439;
ret = G__34440;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34441){
var vec__34442 = p__34441;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34442,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34442,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34446 = arguments.length;
switch (G__34446) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__34456_34458 = new_node;
var G__34457_34459 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__34456_34458,G__34457_34459);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__34462_34464 = new_node;
var G__34463_34465 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__34462_34464,G__34463_34465);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34469 = ps;
var G__34470 = (i + (1));
el__$1 = G__34469;
i = G__34470;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__34471 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__34471);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__34475 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__34475);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__34481 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__34481);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34483 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34483,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34483,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34483,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34486_34496 = cljs.core.seq(props);
var chunk__34487_34497 = null;
var count__34488_34498 = (0);
var i__34489_34499 = (0);
while(true){
if((i__34489_34499 < count__34488_34498)){
var vec__34490_34500 = chunk__34487_34497.cljs$core$IIndexed$_nth$arity$2(null,i__34489_34499);
var k_34501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34490_34500,(0),null);
var v_34502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34490_34500,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_34501);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34501),v_34502);


var G__34503 = seq__34486_34496;
var G__34504 = chunk__34487_34497;
var G__34505 = count__34488_34498;
var G__34506 = (i__34489_34499 + (1));
seq__34486_34496 = G__34503;
chunk__34487_34497 = G__34504;
count__34488_34498 = G__34505;
i__34489_34499 = G__34506;
continue;
} else {
var temp__5457__auto___34507 = cljs.core.seq(seq__34486_34496);
if(temp__5457__auto___34507){
var seq__34486_34508__$1 = temp__5457__auto___34507;
if(cljs.core.chunked_seq_QMARK_(seq__34486_34508__$1)){
var c__4351__auto___34509 = cljs.core.chunk_first(seq__34486_34508__$1);
var G__34510 = cljs.core.chunk_rest(seq__34486_34508__$1);
var G__34511 = c__4351__auto___34509;
var G__34512 = cljs.core.count(c__4351__auto___34509);
var G__34513 = (0);
seq__34486_34496 = G__34510;
chunk__34487_34497 = G__34511;
count__34488_34498 = G__34512;
i__34489_34499 = G__34513;
continue;
} else {
var vec__34493_34514 = cljs.core.first(seq__34486_34508__$1);
var k_34515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34493_34514,(0),null);
var v_34516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34493_34514,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_34515);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34515),v_34516);


var G__34517 = cljs.core.next(seq__34486_34508__$1);
var G__34518 = null;
var G__34519 = (0);
var G__34520 = (0);
seq__34486_34496 = G__34517;
chunk__34487_34497 = G__34518;
count__34488_34498 = G__34519;
i__34489_34499 = G__34520;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34522 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34522,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34522,(1),null);
var seq__34525_34545 = cljs.core.seq(node_children);
var chunk__34527_34546 = null;
var count__34528_34547 = (0);
var i__34529_34548 = (0);
while(true){
if((i__34529_34548 < count__34528_34547)){
var child_struct_34549 = chunk__34527_34546.cljs$core$IIndexed$_nth$arity$2(null,i__34529_34548);
if(!((child_struct_34549 == null))){
if(typeof child_struct_34549 === 'string'){
var text_34550 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34550),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_34549)].join(''));
} else {
var children_34551 = shadow.dom.svg_node(child_struct_34549);
if(cljs.core.seq_QMARK_(children_34551)){
var seq__34531_34552 = cljs.core.seq(children_34551);
var chunk__34533_34553 = null;
var count__34534_34554 = (0);
var i__34535_34555 = (0);
while(true){
if((i__34535_34555 < count__34534_34554)){
var child_34556 = chunk__34533_34553.cljs$core$IIndexed$_nth$arity$2(null,i__34535_34555);
if(cljs.core.truth_(child_34556)){
node.appendChild(child_34556);


var G__34557 = seq__34531_34552;
var G__34558 = chunk__34533_34553;
var G__34559 = count__34534_34554;
var G__34560 = (i__34535_34555 + (1));
seq__34531_34552 = G__34557;
chunk__34533_34553 = G__34558;
count__34534_34554 = G__34559;
i__34535_34555 = G__34560;
continue;
} else {
var G__34561 = seq__34531_34552;
var G__34562 = chunk__34533_34553;
var G__34563 = count__34534_34554;
var G__34564 = (i__34535_34555 + (1));
seq__34531_34552 = G__34561;
chunk__34533_34553 = G__34562;
count__34534_34554 = G__34563;
i__34535_34555 = G__34564;
continue;
}
} else {
var temp__5457__auto___34565 = cljs.core.seq(seq__34531_34552);
if(temp__5457__auto___34565){
var seq__34531_34566__$1 = temp__5457__auto___34565;
if(cljs.core.chunked_seq_QMARK_(seq__34531_34566__$1)){
var c__4351__auto___34567 = cljs.core.chunk_first(seq__34531_34566__$1);
var G__34568 = cljs.core.chunk_rest(seq__34531_34566__$1);
var G__34569 = c__4351__auto___34567;
var G__34570 = cljs.core.count(c__4351__auto___34567);
var G__34571 = (0);
seq__34531_34552 = G__34568;
chunk__34533_34553 = G__34569;
count__34534_34554 = G__34570;
i__34535_34555 = G__34571;
continue;
} else {
var child_34572 = cljs.core.first(seq__34531_34566__$1);
if(cljs.core.truth_(child_34572)){
node.appendChild(child_34572);


var G__34573 = cljs.core.next(seq__34531_34566__$1);
var G__34574 = null;
var G__34575 = (0);
var G__34576 = (0);
seq__34531_34552 = G__34573;
chunk__34533_34553 = G__34574;
count__34534_34554 = G__34575;
i__34535_34555 = G__34576;
continue;
} else {
var G__34577 = cljs.core.next(seq__34531_34566__$1);
var G__34578 = null;
var G__34579 = (0);
var G__34580 = (0);
seq__34531_34552 = G__34577;
chunk__34533_34553 = G__34578;
count__34534_34554 = G__34579;
i__34535_34555 = G__34580;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34551);
}
}


var G__34581 = seq__34525_34545;
var G__34582 = chunk__34527_34546;
var G__34583 = count__34528_34547;
var G__34584 = (i__34529_34548 + (1));
seq__34525_34545 = G__34581;
chunk__34527_34546 = G__34582;
count__34528_34547 = G__34583;
i__34529_34548 = G__34584;
continue;
} else {
var G__34585 = seq__34525_34545;
var G__34586 = chunk__34527_34546;
var G__34587 = count__34528_34547;
var G__34588 = (i__34529_34548 + (1));
seq__34525_34545 = G__34585;
chunk__34527_34546 = G__34586;
count__34528_34547 = G__34587;
i__34529_34548 = G__34588;
continue;
}
} else {
var temp__5457__auto___34589 = cljs.core.seq(seq__34525_34545);
if(temp__5457__auto___34589){
var seq__34525_34590__$1 = temp__5457__auto___34589;
if(cljs.core.chunked_seq_QMARK_(seq__34525_34590__$1)){
var c__4351__auto___34591 = cljs.core.chunk_first(seq__34525_34590__$1);
var G__34592 = cljs.core.chunk_rest(seq__34525_34590__$1);
var G__34593 = c__4351__auto___34591;
var G__34594 = cljs.core.count(c__4351__auto___34591);
var G__34595 = (0);
seq__34525_34545 = G__34592;
chunk__34527_34546 = G__34593;
count__34528_34547 = G__34594;
i__34529_34548 = G__34595;
continue;
} else {
var child_struct_34596 = cljs.core.first(seq__34525_34590__$1);
if(!((child_struct_34596 == null))){
if(typeof child_struct_34596 === 'string'){
var text_34597 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34597),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_34596)].join(''));
} else {
var children_34598 = shadow.dom.svg_node(child_struct_34596);
if(cljs.core.seq_QMARK_(children_34598)){
var seq__34539_34599 = cljs.core.seq(children_34598);
var chunk__34541_34600 = null;
var count__34542_34601 = (0);
var i__34543_34602 = (0);
while(true){
if((i__34543_34602 < count__34542_34601)){
var child_34603 = chunk__34541_34600.cljs$core$IIndexed$_nth$arity$2(null,i__34543_34602);
if(cljs.core.truth_(child_34603)){
node.appendChild(child_34603);


var G__34604 = seq__34539_34599;
var G__34605 = chunk__34541_34600;
var G__34606 = count__34542_34601;
var G__34607 = (i__34543_34602 + (1));
seq__34539_34599 = G__34604;
chunk__34541_34600 = G__34605;
count__34542_34601 = G__34606;
i__34543_34602 = G__34607;
continue;
} else {
var G__34608 = seq__34539_34599;
var G__34609 = chunk__34541_34600;
var G__34610 = count__34542_34601;
var G__34611 = (i__34543_34602 + (1));
seq__34539_34599 = G__34608;
chunk__34541_34600 = G__34609;
count__34542_34601 = G__34610;
i__34543_34602 = G__34611;
continue;
}
} else {
var temp__5457__auto___34612__$1 = cljs.core.seq(seq__34539_34599);
if(temp__5457__auto___34612__$1){
var seq__34539_34613__$1 = temp__5457__auto___34612__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34539_34613__$1)){
var c__4351__auto___34614 = cljs.core.chunk_first(seq__34539_34613__$1);
var G__34615 = cljs.core.chunk_rest(seq__34539_34613__$1);
var G__34616 = c__4351__auto___34614;
var G__34617 = cljs.core.count(c__4351__auto___34614);
var G__34618 = (0);
seq__34539_34599 = G__34615;
chunk__34541_34600 = G__34616;
count__34542_34601 = G__34617;
i__34543_34602 = G__34618;
continue;
} else {
var child_34619 = cljs.core.first(seq__34539_34613__$1);
if(cljs.core.truth_(child_34619)){
node.appendChild(child_34619);


var G__34620 = cljs.core.next(seq__34539_34613__$1);
var G__34621 = null;
var G__34622 = (0);
var G__34623 = (0);
seq__34539_34599 = G__34620;
chunk__34541_34600 = G__34621;
count__34542_34601 = G__34622;
i__34543_34602 = G__34623;
continue;
} else {
var G__34624 = cljs.core.next(seq__34539_34613__$1);
var G__34625 = null;
var G__34626 = (0);
var G__34627 = (0);
seq__34539_34599 = G__34624;
chunk__34541_34600 = G__34625;
count__34542_34601 = G__34626;
i__34543_34602 = G__34627;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34598);
}
}


var G__34628 = cljs.core.next(seq__34525_34590__$1);
var G__34629 = null;
var G__34630 = (0);
var G__34631 = (0);
seq__34525_34545 = G__34628;
chunk__34527_34546 = G__34629;
count__34528_34547 = G__34630;
i__34529_34548 = G__34631;
continue;
} else {
var G__34632 = cljs.core.next(seq__34525_34590__$1);
var G__34633 = null;
var G__34634 = (0);
var G__34635 = (0);
seq__34525_34545 = G__34632;
chunk__34527_34546 = G__34633;
count__34528_34547 = G__34634;
i__34529_34548 = G__34635;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__34636_34642 = shadow.dom._to_svg;
var G__34637_34643 = "string";
var G__34638_34644 = ((function (G__34636_34642,G__34637_34643){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__34636_34642,G__34637_34643))
;
goog.object.set(G__34636_34642,G__34637_34643,G__34638_34644);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__34639_34645 = shadow.dom._to_svg;
var G__34640_34646 = "null";
var G__34641_34647 = ((function (G__34639_34645,G__34640_34646){
return (function (_){
return null;
});})(G__34639_34645,G__34640_34646))
;
goog.object.set(G__34639_34645,G__34640_34646,G__34641_34647);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4534__auto__ = [];
var len__4531__auto___34650 = arguments.length;
var i__4532__auto___34651 = (0);
while(true){
if((i__4532__auto___34651 < len__4531__auto___34650)){
args__4534__auto__.push((arguments[i__4532__auto___34651]));

var G__34652 = (i__4532__auto___34651 + (1));
i__4532__auto___34651 = G__34652;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq34648){
var G__34649 = cljs.core.first(seq34648);
var seq34648__$1 = cljs.core.next(seq34648);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34649,seq34648__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34659 = arguments.length;
switch (G__34659) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__34664_34687 = shadow.dom.dom_node(el);
var G__34665_34688 = cljs.core.name(event);
var G__34666_34689 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__34664_34687,G__34665_34688,G__34666_34689) : shadow.dom.dom_listen.call(null,G__34664_34687,G__34665_34688,G__34666_34689));

if(cljs.core.truth_((function (){var and__3938__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__3938__auto__)){
return !(once_or_cleanup === true);
} else {
return and__3938__auto__;
}
})())){
var c__31348__auto___34690 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31348__auto___34690,buf,chan,event_fn){
return (function (){
var f__31349__auto__ = (function (){var switch__30985__auto__ = ((function (c__31348__auto___34690,buf,chan,event_fn){
return (function (state_34672){
var state_val_34673 = (state_34672[(1)]);
if((state_val_34673 === (1))){
var state_34672__$1 = state_34672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34672__$1,(2),once_or_cleanup);
} else {
if((state_val_34673 === (2))){
var inst_34669 = (state_34672[(2)]);
var inst_34670 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34672__$1 = (function (){var statearr_34675 = state_34672;
(statearr_34675[(7)] = inst_34669);

return statearr_34675;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34672__$1,inst_34670);
} else {
return null;
}
}
});})(c__31348__auto___34690,buf,chan,event_fn))
;
return ((function (switch__30985__auto__,c__31348__auto___34690,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__30986__auto__ = null;
var shadow$dom$state_machine__30986__auto____0 = (function (){
var statearr_34678 = [null,null,null,null,null,null,null,null];
(statearr_34678[(0)] = shadow$dom$state_machine__30986__auto__);

(statearr_34678[(1)] = (1));

return statearr_34678;
});
var shadow$dom$state_machine__30986__auto____1 = (function (state_34672){
while(true){
var ret_value__30987__auto__ = (function (){try{while(true){
var result__30988__auto__ = switch__30985__auto__(state_34672);
if(cljs.core.keyword_identical_QMARK_(result__30988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30988__auto__;
}
break;
}
}catch (e34679){if((e34679 instanceof Object)){
var ex__30989__auto__ = e34679;
var statearr_34680_34693 = state_34672;
(statearr_34680_34693[(5)] = ex__30989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34679;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34694 = state_34672;
state_34672 = G__34694;
continue;
} else {
return ret_value__30987__auto__;
}
break;
}
});
shadow$dom$state_machine__30986__auto__ = function(state_34672){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30986__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30986__auto____1.call(this,state_34672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30986__auto____0;
shadow$dom$state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30986__auto____1;
return shadow$dom$state_machine__30986__auto__;
})()
;})(switch__30985__auto__,c__31348__auto___34690,buf,chan,event_fn))
})();
var state__31350__auto__ = (function (){var statearr_34681 = (f__31349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31349__auto__.cljs$core$IFn$_invoke$arity$0() : f__31349__auto__.call(null));
(statearr_34681[(6)] = c__31348__auto___34690);

return statearr_34681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31350__auto__);
});})(c__31348__auto___34690,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
