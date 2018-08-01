goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__28750__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__28747 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__28748 = cljs.core.seq(vec__28747);
var first__28749 = cljs.core.first(seq__28748);
var seq__28748__$1 = cljs.core.next(seq__28748);
var tag = first__28749;
var body = seq__28748__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__28750 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28751__i = 0, G__28751__a = new Array(arguments.length -  0);
while (G__28751__i < G__28751__a.length) {G__28751__a[G__28751__i] = arguments[G__28751__i + 0]; ++G__28751__i;}
  args = new cljs.core.IndexedSeq(G__28751__a,0,null);
} 
return G__28750__delegate.call(this,args);};
G__28750.cljs$lang$maxFixedArity = 0;
G__28750.cljs$lang$applyTo = (function (arglist__28752){
var args = cljs.core.seq(arglist__28752);
return G__28750__delegate(args);
});
G__28750.cljs$core$IFn$_invoke$arity$variadic = G__28750__delegate;
return G__28750;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4324__auto__ = (function sablono$core$update_arglists_$_iter__28753(s__28754){
return (new cljs.core.LazySeq(null,(function (){
var s__28754__$1 = s__28754;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__28754__$1);
if(temp__5457__auto__){
var s__28754__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28754__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__28754__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__28756 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__28755 = (0);
while(true){
if((i__28755 < size__4323__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__28755);
cljs.core.chunk_append(b__28756,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__28757 = (i__28755 + (1));
i__28755 = G__28757;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28756),sablono$core$update_arglists_$_iter__28753(cljs.core.chunk_rest(s__28754__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28756),null);
}
} else {
var args = cljs.core.first(s__28754__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__28753(cljs.core.rest(s__28754__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4534__auto__ = [];
var len__4531__auto___28763 = arguments.length;
var i__4532__auto___28764 = (0);
while(true){
if((i__4532__auto___28764 < len__4531__auto___28763)){
args__4534__auto__.push((arguments[i__4532__auto___28764]));

var G__28765 = (i__4532__auto___28764 + (1));
i__4532__auto___28764 = G__28765;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4324__auto__ = (function sablono$core$iter__28759(s__28760){
return (new cljs.core.LazySeq(null,(function (){
var s__28760__$1 = s__28760;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__28760__$1);
if(temp__5457__auto__){
var s__28760__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28760__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__28760__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__28762 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__28761 = (0);
while(true){
if((i__28761 < size__4323__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__28761);
cljs.core.chunk_append(b__28762,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__28766 = (i__28761 + (1));
i__28761 = G__28766;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28762),sablono$core$iter__28759(cljs.core.chunk_rest(s__28760__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28762),null);
}
} else {
var style = cljs.core.first(s__28760__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__28759(cljs.core.rest(s__28760__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq28758){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28758));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__28767 = goog.dom.getDocument().body;
var G__28768 = (function (){var G__28769 = "script";
var G__28770 = ({"src": src});
return goog.dom.createDom(G__28769,G__28770);
})();
return goog.dom.appendChild(G__28767,G__28768);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to28771 = (function sablono$core$link_to28771(var_args){
var args__4534__auto__ = [];
var len__4531__auto___28774 = arguments.length;
var i__4532__auto___28775 = (0);
while(true){
if((i__4532__auto___28775 < len__4531__auto___28774)){
args__4534__auto__.push((arguments[i__4532__auto___28775]));

var G__28776 = (i__4532__auto___28775 + (1));
i__4532__auto___28775 = G__28776;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to28771.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.link_to28771.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
});

sablono.core.link_to28771.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to28771.cljs$lang$applyTo = (function (seq28772){
var G__28773 = cljs.core.first(seq28772);
var seq28772__$1 = cljs.core.next(seq28772);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28773,seq28772__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to28771);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to28777 = (function sablono$core$mail_to28777(var_args){
var args__4534__auto__ = [];
var len__4531__auto___28784 = arguments.length;
var i__4532__auto___28785 = (0);
while(true){
if((i__4532__auto___28785 < len__4531__auto___28784)){
args__4534__auto__.push((arguments[i__4532__auto___28785]));

var G__28786 = (i__4532__auto___28785 + (1));
i__4532__auto___28785 = G__28786;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to28777.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.mail_to28777.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__28780){
var vec__28781 = p__28780;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28781,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3949__auto__ = content;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to28777.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to28777.cljs$lang$applyTo = (function (seq28778){
var G__28779 = cljs.core.first(seq28778);
var seq28778__$1 = cljs.core.next(seq28778);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28779,seq28778__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to28777);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list28787 = (function sablono$core$unordered_list28787(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4324__auto__ = (function sablono$core$unordered_list28787_$_iter__28788(s__28789){
return (new cljs.core.LazySeq(null,(function (){
var s__28789__$1 = s__28789;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__28789__$1);
if(temp__5457__auto__){
var s__28789__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28789__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__28789__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__28791 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__28790 = (0);
while(true){
if((i__28790 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__28790);
cljs.core.chunk_append(b__28791,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__28792 = (i__28790 + (1));
i__28790 = G__28792;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28791),sablono$core$unordered_list28787_$_iter__28788(cljs.core.chunk_rest(s__28789__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28791),null);
}
} else {
var x = cljs.core.first(s__28789__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list28787_$_iter__28788(cljs.core.rest(s__28789__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list28787);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list28793 = (function sablono$core$ordered_list28793(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4324__auto__ = (function sablono$core$ordered_list28793_$_iter__28794(s__28795){
return (new cljs.core.LazySeq(null,(function (){
var s__28795__$1 = s__28795;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__28795__$1);
if(temp__5457__auto__){
var s__28795__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28795__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__28795__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__28797 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__28796 = (0);
while(true){
if((i__28796 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__28796);
cljs.core.chunk_append(b__28797,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__28798 = (i__28796 + (1));
i__28796 = G__28798;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28797),sablono$core$ordered_list28793_$_iter__28794(cljs.core.chunk_rest(s__28795__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28797),null);
}
} else {
var x = cljs.core.first(s__28795__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list28793_$_iter__28794(cljs.core.rest(s__28795__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list28793);
/**
 * Create an image element.
 */
sablono.core.image28799 = (function sablono$core$image28799(var_args){
var G__28801 = arguments.length;
switch (G__28801) {
case 1:
return sablono.core.image28799.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image28799.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image28799.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
});

sablono.core.image28799.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image28799.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image28799);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__28803_SHARP_,p2__28804_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28803_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__28804_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__28805_SHARP_,p2__28806_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28805_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__28806_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__28808 = arguments.length;
switch (G__28808) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field28810 = (function sablono$core$color_field28810(var_args){
var G__28812 = arguments.length;
switch (G__28812) {
case 1:
return sablono.core.color_field28810.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field28810.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field28810.cljs$core$IFn$_invoke$arity$1 = (function (name__28739__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__28739__auto__);
});

sablono.core.color_field28810.cljs$core$IFn$_invoke$arity$2 = (function (name__28739__auto__,value__28740__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__28739__auto__,value__28740__auto__);
});

sablono.core.color_field28810.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field28810);

/**
 * Creates a date input field.
 */
sablono.core.date_field28813 = (function sablono$core$date_field28813(var_args){
var G__28815 = arguments.length;
switch (G__28815) {
case 1:
return sablono.core.date_field28813.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field28813.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field28813.cljs$core$IFn$_invoke$arity$1 = (function (name__28739__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__28739__auto__);
});

sablono.core.date_field28813.cljs$core$IFn$_invoke$arity$2 = (function (name__28739__auto__,value__28740__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__28739__auto__,value__28740__auto__);
});

sablono.core.date_field28813.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field28813);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field28816 = (function sablono$core$datetime_field28816(var_args){
var G__28818 = arguments.length;
switch (G__28818) {
case 1:
return sablono.core.datetime_field28816.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field28816.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field28816.cljs$core$IFn$_invoke$arity$1 = (function (name__28739__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__28739__auto__);
});

sablono.core.datetime_field28816.cljs$core$IFn$_invoke$arity$2 = (function (name__28739__auto__,value__28740__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__28739__auto__,value__28740__auto__);
});

sablono.core.datetime_field28816.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field28816);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field28819 = (function sablono$core$datetime_local_field28819(var_args){
var G__28821 = arguments.length;
switch (G__28821) {
case 1:
return sablono.core.datetime_local_field28819.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field28819.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field28819.cljs$core$IFn$_invoke$arity$1 = (function (name__28739__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__28739__auto__);
});

sablono.core.datetime_local_field28819.cljs$core$IFn$_invoke$arity$2 = (function (name__28739__auto__,value__28740__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__28739__auto__,value__28740__auto__);
});

sablono.core.datetime_local_field28819.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field28819);

/**
 * Creates a email input field.
 */
sablono.core.email_field28822 = (function sablono$core$email_field28822(var_args){
var G__28824 = arguments.length;
switch (G__28824) {
case 1:
return sablono.core.email_field28822.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field28822.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field28822.cljs$core$IFn$_invoke$arity$1 = (function (name__28739__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__28739__auto__);
});

sablono.core.email_field28822.cljs$core$IFn$_invoke$arity$2 = (function (name__28739__auto__,value__28740__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__28739__auto__,value__28740__auto__);
});

sablono.core.email_field28822.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field28822);

/**
 * Creates a file input field.
 */
sablono.core.file_field28825 = (function sablono$core$file_field28825(var_args){
var G__28827 = arguments.length;
switch (G__28827) {
case 1:
return sablono.core.file_field28825.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field28825.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field28825.cljs$core$IFn$_invoke$arity$1 = (function (name__28739__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__28739__auto__);
});

sablono.core.file_field28825.cljs$core$IFn$_invoke$arity$2 = (function (name__28739__auto__,value__28740__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__28739__auto__,value__28740__auto__);
});

sablono.core.file_field28825.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field28825);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field28828 = (function sablono$core$hidden_field28828(var_args){
var G__28830 = arguments.length;
switch (G__28830) {
case 1:
return sablono.core.hidden_field28828.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field28828.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field28828.cljs$core$IFn$_invoke$arity$1 = (function (name__28739__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__28739__auto__);
});

sablono.core.hidden_field28828.cljs$core$IFn$_invoke$arity$2 = (function (name__28739__auto__,value__28740__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__28739__auto__,value__28740__auto__);
});

sablono.core.hidden_field28828.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field28828);

/**
 * Creates a month input field.
 */
sablono.core.month_field28831 = (function sablono$core$month_field28831(var_args){
var G__28833 = arguments.length;
switch (G__28833) {
case 1:
return sablono.core.month_field28831.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field28831.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field28831.cljs$core$IFn$_invoke$arity$1 = (function (name__28739__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__28739__auto__);
});

sablono.core.month_field28831.cljs$core$IFn$_invoke$arity$2 = (function (name__28739__auto__,value__28740__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__28739__auto__,value__28740__auto__);
});

sablono.core.month_field28831.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field28831);

/**
 * Creates a number input field.
 */
sablono.core.number_field28834 = (function sablono$core$number_field28834(var_args){
var G__28836 = arguments.length;
switch (G__28836) {
case 1:
return sablono.core.number_field28834.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field28834.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field28834.cljs$core$IFn$_invoke$arity$1 = (function (name__28739__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__28739__auto__);
});

sablono.core.number_field28834.cljs$core$IFn$_invoke$arity$2 = (function (name__28739__auto__,value__28740__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__28739__auto__,value__28740__auto__);
});

sablono.core.number_field28834.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field28834);

/**
 * Creates a password input field.
 */
sablono.core.password_field28837 = (function sablono$core$password_field28837(var_args){
var G__28839 = arguments.length;
switch (G__28839) {
case 1:
return sablono.core.password_field28837.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field28837.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field28837.cljs$core$IFn$_invoke$arity$1 = (function (name__28739__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__28739__auto__);
});

sablono.core.password_field28837.cljs$core$IFn$_invoke$arity$2 = (function (name__28739__auto__,value__28740__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__28739__auto__,value__28740__auto__);
});

sablono.core.password_field28837.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field28837);

/**
 * Creates a range input field.
 */
sablono.core.range_field28840 = (function sablono$core$range_field28840(var_args){
var G__28842 = arguments.length;
switch (G__28842) {
case 1:
return sablono.core.range_field28840.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field28840.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field28840.cljs$core$IFn$_invoke$arity$1 = (function (name__28739__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__28739__auto__);
});

sablono.core.range_field28840.cljs$core$IFn$_invoke$arity$2 = (function (name__28739__auto__,value__28740__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__28739__auto__,value__28740__auto__);
});

sablono.core.range_field28840.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field28840);

/**
 * Creates a search input field.
 */
sablono.core.search_field28843 = (function sablono$core$search_field28843(var_args){
var G__28845 = arguments.length;
switch (G__28845) {
case 1:
return sablono.core.search_field28843.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field28843.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field28843.cljs$core$IFn$_invoke$arity$1 = (function (name__28739__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__28739__auto__);
});

sablono.core.search_field28843.cljs$core$IFn$_invoke$arity$2 = (function (name__28739__auto__,value__28740__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__28739__auto__,value__28740__auto__);
});

sablono.core.search_field28843.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field28843);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field28846 = (function sablono$core$tel_field28846(var_args){
var G__28848 = arguments.length;
switch (G__28848) {
case 1:
return sablono.core.tel_field28846.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field28846.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field28846.cljs$core$IFn$_invoke$arity$1 = (function (name__28739__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__28739__auto__);
});

sablono.core.tel_field28846.cljs$core$IFn$_invoke$arity$2 = (function (name__28739__auto__,value__28740__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__28739__auto__,value__28740__auto__);
});

sablono.core.tel_field28846.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field28846);

/**
 * Creates a text input field.
 */
sablono.core.text_field28849 = (function sablono$core$text_field28849(var_args){
var G__28851 = arguments.length;
switch (G__28851) {
case 1:
return sablono.core.text_field28849.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field28849.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field28849.cljs$core$IFn$_invoke$arity$1 = (function (name__28739__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__28739__auto__);
});

sablono.core.text_field28849.cljs$core$IFn$_invoke$arity$2 = (function (name__28739__auto__,value__28740__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__28739__auto__,value__28740__auto__);
});

sablono.core.text_field28849.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field28849);

/**
 * Creates a time input field.
 */
sablono.core.time_field28852 = (function sablono$core$time_field28852(var_args){
var G__28854 = arguments.length;
switch (G__28854) {
case 1:
return sablono.core.time_field28852.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field28852.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field28852.cljs$core$IFn$_invoke$arity$1 = (function (name__28739__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__28739__auto__);
});

sablono.core.time_field28852.cljs$core$IFn$_invoke$arity$2 = (function (name__28739__auto__,value__28740__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__28739__auto__,value__28740__auto__);
});

sablono.core.time_field28852.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field28852);

/**
 * Creates a url input field.
 */
sablono.core.url_field28855 = (function sablono$core$url_field28855(var_args){
var G__28857 = arguments.length;
switch (G__28857) {
case 1:
return sablono.core.url_field28855.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field28855.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field28855.cljs$core$IFn$_invoke$arity$1 = (function (name__28739__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__28739__auto__);
});

sablono.core.url_field28855.cljs$core$IFn$_invoke$arity$2 = (function (name__28739__auto__,value__28740__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__28739__auto__,value__28740__auto__);
});

sablono.core.url_field28855.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field28855);

/**
 * Creates a week input field.
 */
sablono.core.week_field28858 = (function sablono$core$week_field28858(var_args){
var G__28860 = arguments.length;
switch (G__28860) {
case 1:
return sablono.core.week_field28858.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field28858.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field28858.cljs$core$IFn$_invoke$arity$1 = (function (name__28739__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__28739__auto__);
});

sablono.core.week_field28858.cljs$core$IFn$_invoke$arity$2 = (function (name__28739__auto__,value__28740__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__28739__auto__,value__28740__auto__);
});

sablono.core.week_field28858.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field28858);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box28878 = (function sablono$core$check_box28878(var_args){
var G__28880 = arguments.length;
switch (G__28880) {
case 1:
return sablono.core.check_box28878.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box28878.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box28878.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box28878.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
});

sablono.core.check_box28878.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box28878.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box28878.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box28878);
/**
 * Creates a radio button.
 */
sablono.core.radio_button28882 = (function sablono$core$radio_button28882(var_args){
var G__28884 = arguments.length;
switch (G__28884) {
case 1:
return sablono.core.radio_button28882.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button28882.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button28882.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button28882.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
});

sablono.core.radio_button28882.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button28882.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button28882.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button28882);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__28886 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__28886);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options28887 = (function sablono$core$select_options28887(coll){
var iter__4324__auto__ = (function sablono$core$select_options28887_$_iter__28888(s__28889){
return (new cljs.core.LazySeq(null,(function (){
var s__28889__$1 = s__28889;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__28889__$1);
if(temp__5457__auto__){
var s__28889__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28889__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__28889__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__28891 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__28890 = (0);
while(true){
if((i__28890 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__28890);
cljs.core.chunk_append(b__28891,((cljs.core.sequential_QMARK_(x))?(function (){var vec__28892 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28892,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28892,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28892,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options28887.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options28887.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options28887.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__28898 = (i__28890 + (1));
i__28890 = G__28898;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28891),sablono$core$select_options28887_$_iter__28888(cljs.core.chunk_rest(s__28889__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28891),null);
}
} else {
var x = cljs.core.first(s__28889__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__28895 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28895,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28895,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28895,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options28887.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options28887.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options28887.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options28887_$_iter__28888(cljs.core.rest(s__28889__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options28887);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down28899 = (function sablono$core$drop_down28899(var_args){
var G__28901 = arguments.length;
switch (G__28901) {
case 2:
return sablono.core.drop_down28899.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down28899.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down28899.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down28899.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down28899.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down28899.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down28899);
/**
 * Creates a text area element.
 */
sablono.core.text_area28903 = (function sablono$core$text_area28903(var_args){
var G__28905 = arguments.length;
switch (G__28905) {
case 1:
return sablono.core.text_area28903.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area28903.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area28903.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
});

sablono.core.text_area28903.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area28903.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area28903);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label28907 = (function sablono$core$label28907(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label28907);
/**
 * Creates a submit button.
 */
sablono.core.submit_button28908 = (function sablono$core$submit_button28908(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button28908);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button28909 = (function sablono$core$reset_button28909(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button28909);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to28910 = (function sablono$core$form_to28910(var_args){
var args__4534__auto__ = [];
var len__4531__auto___28920 = arguments.length;
var i__4532__auto___28921 = (0);
while(true){
if((i__4532__auto___28921 < len__4531__auto___28920)){
args__4534__auto__.push((arguments[i__4532__auto___28921]));

var G__28922 = (i__4532__auto___28921 + (1));
i__4532__auto___28921 = G__28922;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to28910.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.form_to28910.cljs$core$IFn$_invoke$arity$variadic = (function (p__28913,body){
var vec__28914 = p__28913;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28914,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28914,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__28917 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__28918 = "_method";
var G__28919 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__28917,G__28918,G__28919) : sablono.core.hidden_field.call(null,G__28917,G__28918,G__28919));
})()], null)),body));
});

sablono.core.form_to28910.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to28910.cljs$lang$applyTo = (function (seq28911){
var G__28912 = cljs.core.first(seq28911);
var seq28911__$1 = cljs.core.next(seq28911);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28912,seq28911__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to28910);

//# sourceMappingURL=sablono.core.js.map
