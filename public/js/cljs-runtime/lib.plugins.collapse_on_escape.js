goog.provide('lib.plugins.collapse_on_escape');
goog.require('cljs.core');
lib.plugins.collapse_on_escape.on_key_down = (function lib$plugins$collapse_on_escape$on_key_down(event,change){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"Escape")) && (cljs.core.not(change.value.isCollapsed)))){
return change.collapseToStart();
} else {
return null;
}
});
/**
 * Moves the cursor to the start of the selected text when the escape key is pressed.
 */
lib.plugins.collapse_on_escape.collapse_on_escape = (function lib$plugins$collapse_on_escape$collapse_on_escape(var_args){
var G__27877 = arguments.length;
switch (G__27877) {
case 1:
return lib.plugins.collapse_on_escape.collapse_on_escape.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return lib.plugins.collapse_on_escape.collapse_on_escape.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lib.plugins.collapse_on_escape.collapse_on_escape.cljs$core$IFn$_invoke$arity$1 = (function (options){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),lib.plugins.collapse_on_escape.on_key_down], null);
});

lib.plugins.collapse_on_escape.collapse_on_escape.cljs$core$IFn$_invoke$arity$0 = (function (){
return lib.plugins.collapse_on_escape.collapse_on_escape.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

lib.plugins.collapse_on_escape.collapse_on_escape.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=lib.plugins.collapse_on_escape.js.map
