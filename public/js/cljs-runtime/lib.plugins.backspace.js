goog.provide('lib.plugins.backspace');
goog.require('cljs.core');
lib.plugins.backspace.start_of_block_QMARK_ = (function lib$plugins$backspace$start_of_block_QMARK_(change){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),change.value.startOffset);
});
lib.plugins.backspace.paragraph_QMARK_ = (function lib$plugins$backspace$paragraph_QMARK_(change){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("paragraph",change.value.startBlock.type);
});
lib.plugins.backspace.on_key_down = (function lib$plugins$backspace$on_key_down(event,change){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"Backspace")){
if(cljs.core.truth_((function (){var and__3938__auto__ = lib.plugins.backspace.start_of_block_QMARK_(change);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not(lib.plugins.backspace.paragraph_QMARK_(change));
} else {
return and__3938__auto__;
}
})())){
event.preventDefault();

return change.setBlocks("paragraph");
} else {
return null;
}
} else {
return null;
}
});
/**
 * Handles backspace related tranformations. Mostly converting non paragraph blocks back into paragraphs at the appropriate time.
 */
lib.plugins.backspace.backspace = (function lib$plugins$backspace$backspace(var_args){
var G__26515 = arguments.length;
switch (G__26515) {
case 1:
return lib.plugins.backspace.backspace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return lib.plugins.backspace.backspace.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lib.plugins.backspace.backspace.cljs$core$IFn$_invoke$arity$1 = (function (options){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),lib.plugins.backspace.on_key_down], null);
});

lib.plugins.backspace.backspace.cljs$core$IFn$_invoke$arity$0 = (function (){
return lib.plugins.backspace.backspace.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

lib.plugins.backspace.backspace.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=lib.plugins.backspace.js.map
