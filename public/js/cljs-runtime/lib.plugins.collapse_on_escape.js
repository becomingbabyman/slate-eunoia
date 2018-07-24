goog.provide('lib.plugins.collapse_on_escape');
goog.require('cljs.core');
lib.plugins.collapse_on_escape.on_key_down = (function lib$plugins$collapse_on_escape$on_key_down(event,change){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"Escape")) && (cljs.core.not(change.value.isCollapsed)))){
return change.collapseToStart();
} else {
return null;
}
});
lib.plugins.collapse_on_escape.collapse_on_escape = (function lib$plugins$collapse_on_escape$collapse_on_escape(){

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),lib.plugins.collapse_on_escape.on_key_down], null);
});

//# sourceMappingURL=lib.plugins.collapse_on_escape.js.map
