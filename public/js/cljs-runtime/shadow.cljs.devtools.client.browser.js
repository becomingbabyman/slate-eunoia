goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return cljs.core._vreset_BANG_(shadow.cljs.devtools.client.browser.active_modules_ref,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(shadow.cljs.devtools.client.browser.active_modules_ref),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4534__auto__ = [];
var len__4531__auto___35794 = arguments.length;
var i__4532__auto___35795 = (0);
while(true){
if((i__4532__auto___35795 < len__4531__auto___35794)){
args__4534__auto__.push((arguments[i__4532__auto___35795]));

var G__35796 = (i__4532__auto___35795 + (1));
i__4532__auto___35795 = G__35796;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35792){
var G__35793 = cljs.core.first(seq35792);
var seq35792__$1 = cljs.core.next(seq35792);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35793,seq35792__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5455__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__35797){
var map__35798 = p__35797;
var map__35798__$1 = ((((!((map__35798 == null)))?(((((map__35798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35798):map__35798);
var src = map__35798__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35798__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35798__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__3949__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35800 = cljs.core.seq(sources);
var chunk__35801 = null;
var count__35802 = (0);
var i__35803 = (0);
while(true){
if((i__35803 < count__35802)){
var map__35804 = chunk__35801.cljs$core$IIndexed$_nth$arity$2(null,i__35803);
var map__35804__$1 = ((((!((map__35804 == null)))?(((((map__35804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35804):map__35804);
var src = map__35804__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35804__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35804__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35804__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35804__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__35808 = seq__35800;
var G__35809 = chunk__35801;
var G__35810 = count__35802;
var G__35811 = (i__35803 + (1));
seq__35800 = G__35808;
chunk__35801 = G__35809;
count__35802 = G__35810;
i__35803 = G__35811;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__35800);
if(temp__5457__auto__){
var seq__35800__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35800__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__35800__$1);
var G__35812 = cljs.core.chunk_rest(seq__35800__$1);
var G__35813 = c__4351__auto__;
var G__35814 = cljs.core.count(c__4351__auto__);
var G__35815 = (0);
seq__35800 = G__35812;
chunk__35801 = G__35813;
count__35802 = G__35814;
i__35803 = G__35815;
continue;
} else {
var map__35806 = cljs.core.first(seq__35800__$1);
var map__35806__$1 = ((((!((map__35806 == null)))?(((((map__35806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35806):map__35806);
var src = map__35806__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35806__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35806__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35806__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35806__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__35816 = cljs.core.next(seq__35800__$1);
var G__35817 = null;
var G__35818 = (0);
var G__35819 = (0);
seq__35800 = G__35816;
chunk__35801 = G__35817;
count__35802 = G__35818;
i__35803 = G__35819;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35820 = cljs.core.seq(js_requires);
var chunk__35821 = null;
var count__35822 = (0);
var i__35823 = (0);
while(true){
if((i__35823 < count__35822)){
var js_ns = chunk__35821.cljs$core$IIndexed$_nth$arity$2(null,i__35823);
var require_str_35824 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35824);


var G__35825 = seq__35820;
var G__35826 = chunk__35821;
var G__35827 = count__35822;
var G__35828 = (i__35823 + (1));
seq__35820 = G__35825;
chunk__35821 = G__35826;
count__35822 = G__35827;
i__35823 = G__35828;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__35820);
if(temp__5457__auto__){
var seq__35820__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35820__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__35820__$1);
var G__35829 = cljs.core.chunk_rest(seq__35820__$1);
var G__35830 = c__4351__auto__;
var G__35831 = cljs.core.count(c__4351__auto__);
var G__35832 = (0);
seq__35820 = G__35829;
chunk__35821 = G__35830;
count__35822 = G__35831;
i__35823 = G__35832;
continue;
} else {
var js_ns = cljs.core.first(seq__35820__$1);
var require_str_35833 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35833);


var G__35834 = cljs.core.next(seq__35820__$1);
var G__35835 = null;
var G__35836 = (0);
var G__35837 = (0);
seq__35820 = G__35834;
chunk__35821 = G__35835;
count__35822 = G__35836;
i__35823 = G__35837;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__35838 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35838) : callback.call(null,G__35838));
} else {
var G__35839 = shadow.cljs.devtools.client.env.files_url();
var G__35840 = ((function (G__35839){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__35839))
;
var G__35841 = "POST";
var G__35842 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__35843 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35839,G__35840,G__35841,G__35842,G__35843);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35845){
var map__35846 = p__35845;
var map__35846__$1 = ((((!((map__35846 == null)))?(((((map__35846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35846):map__35846);
var msg = map__35846__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35846__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35846__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__35848 = info;
var map__35848__$1 = ((((!((map__35848 == null)))?(((((map__35848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35848):map__35848);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35848__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35848__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (map__35848,map__35848__$1,sources,compiled,map__35846,map__35846__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35850(s__35851){
return (new cljs.core.LazySeq(null,((function (map__35848,map__35848__$1,sources,compiled,map__35846,map__35846__$1,msg,info,reload_info){
return (function (){
var s__35851__$1 = s__35851;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__35851__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__35856 = cljs.core.first(xs__6012__auto__);
var map__35856__$1 = ((((!((map__35856 == null)))?(((((map__35856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35856):map__35856);
var src = map__35856__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35856__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35856__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4320__auto__ = ((function (s__35851__$1,map__35856,map__35856__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__35848,map__35848__$1,sources,compiled,map__35846,map__35846__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35850_$_iter__35852(s__35853){
return (new cljs.core.LazySeq(null,((function (s__35851__$1,map__35856,map__35856__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__35848,map__35848__$1,sources,compiled,map__35846,map__35846__$1,msg,info,reload_info){
return (function (){
var s__35853__$1 = s__35853;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__35853__$1);
if(temp__5457__auto____$1){
var s__35853__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35853__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__35853__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__35855 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__35854 = (0);
while(true){
if((i__35854 < size__4323__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__35854);
cljs.core.chunk_append(b__35855,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35875 = (i__35854 + (1));
i__35854 = G__35875;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35855),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35850_$_iter__35852(cljs.core.chunk_rest(s__35853__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35855),null);
}
} else {
var warning = cljs.core.first(s__35853__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35850_$_iter__35852(cljs.core.rest(s__35853__$2)));
}
} else {
return null;
}
break;
}
});})(s__35851__$1,map__35856,map__35856__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__35848,map__35848__$1,sources,compiled,map__35846,map__35846__$1,msg,info,reload_info))
,null,null));
});})(s__35851__$1,map__35856,map__35856__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__35848,map__35848__$1,sources,compiled,map__35846,map__35846__$1,msg,info,reload_info))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(warnings));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35850(cljs.core.rest(s__35851__$1)));
} else {
var G__35876 = cljs.core.rest(s__35851__$1);
s__35851__$1 = G__35876;
continue;
}
} else {
var G__35877 = cljs.core.rest(s__35851__$1);
s__35851__$1 = G__35877;
continue;
}
} else {
return null;
}
break;
}
});})(map__35848,map__35848__$1,sources,compiled,map__35846,map__35846__$1,msg,info,reload_info))
,null,null));
});})(map__35848,map__35848__$1,sources,compiled,map__35846,map__35846__$1,msg,info,reload_info))
;
return iter__4324__auto__(sources);
})()));
var seq__35858_35878 = cljs.core.seq(warnings);
var chunk__35859_35879 = null;
var count__35860_35880 = (0);
var i__35861_35881 = (0);
while(true){
if((i__35861_35881 < count__35860_35880)){
var map__35862_35882 = chunk__35859_35879.cljs$core$IIndexed$_nth$arity$2(null,i__35861_35881);
var map__35862_35883__$1 = ((((!((map__35862_35882 == null)))?(((((map__35862_35882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35862_35882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35862_35882):map__35862_35882);
var w_35884 = map__35862_35883__$1;
var msg_35885__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35862_35883__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35862_35883__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35862_35883__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35862_35883__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35888)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35886),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35887),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35885__$1)].join(''));


var G__35889 = seq__35858_35878;
var G__35890 = chunk__35859_35879;
var G__35891 = count__35860_35880;
var G__35892 = (i__35861_35881 + (1));
seq__35858_35878 = G__35889;
chunk__35859_35879 = G__35890;
count__35860_35880 = G__35891;
i__35861_35881 = G__35892;
continue;
} else {
var temp__5457__auto___35893 = cljs.core.seq(seq__35858_35878);
if(temp__5457__auto___35893){
var seq__35858_35894__$1 = temp__5457__auto___35893;
if(cljs.core.chunked_seq_QMARK_(seq__35858_35894__$1)){
var c__4351__auto___35895 = cljs.core.chunk_first(seq__35858_35894__$1);
var G__35896 = cljs.core.chunk_rest(seq__35858_35894__$1);
var G__35897 = c__4351__auto___35895;
var G__35898 = cljs.core.count(c__4351__auto___35895);
var G__35899 = (0);
seq__35858_35878 = G__35896;
chunk__35859_35879 = G__35897;
count__35860_35880 = G__35898;
i__35861_35881 = G__35899;
continue;
} else {
var map__35864_35900 = cljs.core.first(seq__35858_35894__$1);
var map__35864_35901__$1 = ((((!((map__35864_35900 == null)))?(((((map__35864_35900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35864_35900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35864_35900):map__35864_35900);
var w_35902 = map__35864_35901__$1;
var msg_35903__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35864_35901__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35864_35901__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35864_35901__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35864_35901__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35906)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35904),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35905),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35903__$1)].join(''));


var G__35907 = cljs.core.next(seq__35858_35894__$1);
var G__35908 = null;
var G__35909 = (0);
var G__35910 = (0);
seq__35858_35878 = G__35907;
chunk__35859_35879 = G__35908;
count__35860_35880 = G__35909;
i__35861_35881 = G__35910;
continue;
}
} else {
}
}
break;
}

if(!(shadow.cljs.devtools.client.env.autoload)){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35848,map__35848__$1,sources,compiled,warnings,map__35846,map__35846__$1,msg,info,reload_info){
return (function (p__35866){
var map__35867 = p__35866;
var map__35867__$1 = ((((!((map__35867 == null)))?(((((map__35867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35867):map__35867);
var src = map__35867__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35867__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35867__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__35848,map__35848__$1,sources,compiled,warnings,map__35846,map__35846__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35848,map__35848__$1,sources,compiled,warnings,map__35846,map__35846__$1,msg,info,reload_info){
return (function (p__35869){
var map__35870 = p__35869;
var map__35870__$1 = ((((!((map__35870 == null)))?(((((map__35870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35870):map__35870);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35870__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__35848,map__35848__$1,sources,compiled,warnings,map__35846,map__35846__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35848,map__35848__$1,sources,compiled,warnings,map__35846,map__35846__$1,msg,info,reload_info){
return (function (p__35872){
var map__35873 = p__35872;
var map__35873__$1 = ((((!((map__35873 == null)))?(((((map__35873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35873):map__35873);
var rc = map__35873__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35873__$1,new cljs.core.Keyword(null,"module","module",1424618191));
var or__3949__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module);
}
});})(map__35848,map__35848__$1,sources,compiled,warnings,map__35846,map__35846__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__35848,map__35848__$1,sources,compiled,warnings,map__35846,map__35846__$1,msg,info,reload_info){
return (function (p1__35844_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35844_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__35848,map__35848__$1,sources,compiled,warnings,map__35846,map__35846__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__35911){
var map__35912 = p__35911;
var map__35912__$1 = ((((!((map__35912 == null)))?(((((map__35912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35912):map__35912);
var msg = map__35912__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35912__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35914 = cljs.core.seq(updates);
var chunk__35916 = null;
var count__35917 = (0);
var i__35918 = (0);
while(true){
if((i__35918 < count__35917)){
var path = chunk__35916.cljs$core$IIndexed$_nth$arity$2(null,i__35918);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35920_35944 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35923_35945 = null;
var count__35924_35946 = (0);
var i__35925_35947 = (0);
while(true){
if((i__35925_35947 < count__35924_35946)){
var node_35948 = chunk__35923_35945.cljs$core$IIndexed$_nth$arity$2(null,i__35925_35947);
var node_uri_35949 = (function (){var G__35928 = node_35948.getAttribute("href");
return goog.Uri.parse(G__35928);
})();
var node_uri_resolved_35950 = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri_35949);
var node_abs_35951 = node_uri_resolved_35950.getPath();
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri_35949))) || (cljs.core.not(node_uri_35949.hasDomain())))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs_35951,path)))){
var new_link_35952 = (function (){var G__35929 = node_35948.cloneNode(true);
G__35929.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35929;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_35952,node_35948);

goog.dom.removeNode(node_35948);


var G__35953 = seq__35920_35944;
var G__35954 = chunk__35923_35945;
var G__35955 = count__35924_35946;
var G__35956 = (i__35925_35947 + (1));
seq__35920_35944 = G__35953;
chunk__35923_35945 = G__35954;
count__35924_35946 = G__35955;
i__35925_35947 = G__35956;
continue;
} else {
var G__35957 = seq__35920_35944;
var G__35958 = chunk__35923_35945;
var G__35959 = count__35924_35946;
var G__35960 = (i__35925_35947 + (1));
seq__35920_35944 = G__35957;
chunk__35923_35945 = G__35958;
count__35924_35946 = G__35959;
i__35925_35947 = G__35960;
continue;
}
} else {
var temp__5457__auto___35961 = cljs.core.seq(seq__35920_35944);
if(temp__5457__auto___35961){
var seq__35920_35962__$1 = temp__5457__auto___35961;
if(cljs.core.chunked_seq_QMARK_(seq__35920_35962__$1)){
var c__4351__auto___35963 = cljs.core.chunk_first(seq__35920_35962__$1);
var G__35964 = cljs.core.chunk_rest(seq__35920_35962__$1);
var G__35965 = c__4351__auto___35963;
var G__35966 = cljs.core.count(c__4351__auto___35963);
var G__35967 = (0);
seq__35920_35944 = G__35964;
chunk__35923_35945 = G__35965;
count__35924_35946 = G__35966;
i__35925_35947 = G__35967;
continue;
} else {
var node_35968 = cljs.core.first(seq__35920_35962__$1);
var node_uri_35969 = (function (){var G__35930 = node_35968.getAttribute("href");
return goog.Uri.parse(G__35930);
})();
var node_uri_resolved_35970 = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri_35969);
var node_abs_35971 = node_uri_resolved_35970.getPath();
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri_35969))) || (cljs.core.not(node_uri_35969.hasDomain())))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs_35971,path)))){
var new_link_35972 = (function (){var G__35931 = node_35968.cloneNode(true);
G__35931.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35931;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_35972,node_35968);

goog.dom.removeNode(node_35968);


var G__35973 = cljs.core.next(seq__35920_35962__$1);
var G__35974 = null;
var G__35975 = (0);
var G__35976 = (0);
seq__35920_35944 = G__35973;
chunk__35923_35945 = G__35974;
count__35924_35946 = G__35975;
i__35925_35947 = G__35976;
continue;
} else {
var G__35977 = cljs.core.next(seq__35920_35962__$1);
var G__35978 = null;
var G__35979 = (0);
var G__35980 = (0);
seq__35920_35944 = G__35977;
chunk__35923_35945 = G__35978;
count__35924_35946 = G__35979;
i__35925_35947 = G__35980;
continue;
}
}
} else {
}
}
break;
}


var G__35981 = seq__35914;
var G__35982 = chunk__35916;
var G__35983 = count__35917;
var G__35984 = (i__35918 + (1));
seq__35914 = G__35981;
chunk__35916 = G__35982;
count__35917 = G__35983;
i__35918 = G__35984;
continue;
} else {
var G__35985 = seq__35914;
var G__35986 = chunk__35916;
var G__35987 = count__35917;
var G__35988 = (i__35918 + (1));
seq__35914 = G__35985;
chunk__35916 = G__35986;
count__35917 = G__35987;
i__35918 = G__35988;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__35914);
if(temp__5457__auto__){
var seq__35914__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35914__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__35914__$1);
var G__35989 = cljs.core.chunk_rest(seq__35914__$1);
var G__35990 = c__4351__auto__;
var G__35991 = cljs.core.count(c__4351__auto__);
var G__35992 = (0);
seq__35914 = G__35989;
chunk__35916 = G__35990;
count__35917 = G__35991;
i__35918 = G__35992;
continue;
} else {
var path = cljs.core.first(seq__35914__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35932_35993 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35935_35994 = null;
var count__35936_35995 = (0);
var i__35937_35996 = (0);
while(true){
if((i__35937_35996 < count__35936_35995)){
var node_35997 = chunk__35935_35994.cljs$core$IIndexed$_nth$arity$2(null,i__35937_35996);
var node_uri_35998 = (function (){var G__35940 = node_35997.getAttribute("href");
return goog.Uri.parse(G__35940);
})();
var node_uri_resolved_35999 = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri_35998);
var node_abs_36000 = node_uri_resolved_35999.getPath();
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri_35998))) || (cljs.core.not(node_uri_35998.hasDomain())))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs_36000,path)))){
var new_link_36001 = (function (){var G__35941 = node_35997.cloneNode(true);
G__35941.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35941;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_36001,node_35997);

goog.dom.removeNode(node_35997);


var G__36002 = seq__35932_35993;
var G__36003 = chunk__35935_35994;
var G__36004 = count__35936_35995;
var G__36005 = (i__35937_35996 + (1));
seq__35932_35993 = G__36002;
chunk__35935_35994 = G__36003;
count__35936_35995 = G__36004;
i__35937_35996 = G__36005;
continue;
} else {
var G__36006 = seq__35932_35993;
var G__36007 = chunk__35935_35994;
var G__36008 = count__35936_35995;
var G__36009 = (i__35937_35996 + (1));
seq__35932_35993 = G__36006;
chunk__35935_35994 = G__36007;
count__35936_35995 = G__36008;
i__35937_35996 = G__36009;
continue;
}
} else {
var temp__5457__auto___36010__$1 = cljs.core.seq(seq__35932_35993);
if(temp__5457__auto___36010__$1){
var seq__35932_36011__$1 = temp__5457__auto___36010__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35932_36011__$1)){
var c__4351__auto___36012 = cljs.core.chunk_first(seq__35932_36011__$1);
var G__36013 = cljs.core.chunk_rest(seq__35932_36011__$1);
var G__36014 = c__4351__auto___36012;
var G__36015 = cljs.core.count(c__4351__auto___36012);
var G__36016 = (0);
seq__35932_35993 = G__36013;
chunk__35935_35994 = G__36014;
count__35936_35995 = G__36015;
i__35937_35996 = G__36016;
continue;
} else {
var node_36017 = cljs.core.first(seq__35932_36011__$1);
var node_uri_36018 = (function (){var G__35942 = node_36017.getAttribute("href");
return goog.Uri.parse(G__35942);
})();
var node_uri_resolved_36019 = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri_36018);
var node_abs_36020 = node_uri_resolved_36019.getPath();
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri_36018))) || (cljs.core.not(node_uri_36018.hasDomain())))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs_36020,path)))){
var new_link_36021 = (function (){var G__35943 = node_36017.cloneNode(true);
G__35943.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35943;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_36021,node_36017);

goog.dom.removeNode(node_36017);


var G__36022 = cljs.core.next(seq__35932_36011__$1);
var G__36023 = null;
var G__36024 = (0);
var G__36025 = (0);
seq__35932_35993 = G__36022;
chunk__35935_35994 = G__36023;
count__35936_35995 = G__36024;
i__35937_35996 = G__36025;
continue;
} else {
var G__36026 = cljs.core.next(seq__35932_36011__$1);
var G__36027 = null;
var G__36028 = (0);
var G__36029 = (0);
seq__35932_35993 = G__36026;
chunk__35935_35994 = G__36027;
count__35936_35995 = G__36028;
i__35937_35996 = G__36029;
continue;
}
}
} else {
}
}
break;
}


var G__36030 = cljs.core.next(seq__35914__$1);
var G__36031 = null;
var G__36032 = (0);
var G__36033 = (0);
seq__35914 = G__36030;
chunk__35916 = G__36031;
count__35917 = G__36032;
i__35918 = G__36033;
continue;
} else {
var G__36034 = cljs.core.next(seq__35914__$1);
var G__36035 = null;
var G__36036 = (0);
var G__36037 = (0);
seq__35914 = G__36034;
chunk__35916 = G__36035;
count__35917 = G__36036;
i__35918 = G__36037;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__36038){
var map__36039 = p__36038;
var map__36039__$1 = ((((!((map__36039 == null)))?(((((map__36039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36039):map__36039);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36039__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36039__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__36039,map__36039__$1,id,js){
return (function (){
return eval(js);
});})(map__36039,map__36039__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__36041){
var map__36042 = p__36041;
var map__36042__$1 = ((((!((map__36042 == null)))?(((((map__36042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36042):map__36042);
var msg = map__36042__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36042__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36042__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36042__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36042__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__36042,map__36042__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__36044){
var map__36045 = p__36044;
var map__36045__$1 = ((((!((map__36045 == null)))?(((((map__36045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36045):map__36045);
var src = map__36045__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36045__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__3938__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__3938__auto__;
}
});})(map__36042,map__36042__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__36042,map__36042__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__36042,map__36042__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__36047){
var map__36048 = p__36047;
var map__36048__$1 = ((((!((map__36048 == null)))?(((((map__36048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36048):map__36048);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36048__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36048__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(repl_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"ns","ns",441598760)], null)));

return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__36048,map__36048__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL init successful");
});})(map__36048,map__36048__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__36050){
var map__36051 = p__36050;
var map__36051__$1 = ((((!((map__36051 == null)))?(((((map__36051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36051):map__36051);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36051__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36051__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,ns);

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__36053){
var map__36054 = p__36053;
var map__36054__$1 = ((((!((map__36054 == null)))?(((((map__36054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36054):map__36054);
var msg = map__36054__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36054__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__36056 = type;
var G__36056__$1 = (((G__36056 instanceof cljs.core.Keyword))?G__36056.fqn:null);
switch (G__36056__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"\" not running"].join(''));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__36058 = ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__36059 = ((function (G__36058){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__36058))
;
var G__36060 = "POST";
var G__36061 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__36062 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__36058,G__36059,G__36060,G__36061,G__36062);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__3949__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___36063 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___36063)){
var s_36064 = temp__5457__auto___36063;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_36064.onclose = ((function (s_36064,temp__5457__auto___36063){
return (function (e){
return null;
});})(s_36064,temp__5457__auto___36063))
;

s_36064.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close();
} else {
return null;
}
}));

shadow.cljs.devtools.client.browser.ws_connect();
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
