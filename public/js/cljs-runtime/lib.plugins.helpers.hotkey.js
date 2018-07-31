goog.provide('lib.plugins.helpers.hotkey');
goog.require('cljs.core');
var module$node_modules$is_hotkey$lib$index=shadow.js.require("module$node_modules$is_hotkey$lib$index", {});
lib.plugins.helpers.hotkey.hotkey = (function lib$plugins$helpers$hotkey$hotkey(p__26477){
var map__26478 = p__26477;
var map__26478__$1 = ((((!((map__26478 == null)))?(((((map__26478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26478):map__26478);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26478__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26478__$1,new cljs.core.Keyword(null,"transform","transform",1381301764));

var key_QMARK_ = module$node_modules$is_hotkey$lib$index.isKeyHotkey(key);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),((function (key_QMARK_,map__26478,map__26478__$1,key,transform){
return (function (event,change,editor){
if(cljs.core.truth_((key_QMARK_.cljs$core$IFn$_invoke$arity$1 ? key_QMARK_.cljs$core$IFn$_invoke$arity$1(event) : key_QMARK_.call(null,event)))){
return (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(change) : transform.call(null,change));
} else {
return null;
}
});})(key_QMARK_,map__26478,map__26478__$1,key,transform))
], null);
});

//# sourceMappingURL=lib.plugins.helpers.hotkey.js.map
