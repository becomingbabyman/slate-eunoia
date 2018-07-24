goog.provide('lib.plugins.collapse_on_escape');
goog.require('cljs.core');
lib.plugins.collapse_on_escape.on_key_down = (function lib$plugins$collapse_on_escape$on_key_down(event,change){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"Escape")){
} else {
throw (new Error("Assert failed: (= event.key \"Escape\")"));
}

if(cljs.core.not(change.value.isCollapsed)){
} else {
throw (new Error("Assert failed: (not change.value.isCollapsed)"));
}

return change.collapseToStart();
});
lib.plugins.collapse_on_escape.collapse_on_escape = (function lib$plugins$collapse_on_escape$collapse_on_escape(){
var G__26068 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),lib.plugins.collapse_on_escape.on_key_down], null);
return (lib.plugins.collapse_on_escape.cljs__GT_js.cljs$core$IFn$_invoke$arity$1 ? lib.plugins.collapse_on_escape.cljs__GT_js.cljs$core$IFn$_invoke$arity$1(G__26068) : lib.plugins.collapse_on_escape.cljs__GT_js.call(null,G__26068));
});

//# sourceMappingURL=lib.plugins.collapse-on-escape.js.map
