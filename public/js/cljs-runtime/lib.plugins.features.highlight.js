goog.provide('lib.plugins.features.highlight');
goog.require('cljs.core');
goog.require('lib.components.core');
goog.require('lib.plugins.helpers.hotkey');
lib.plugins.features.highlight.transform = (function lib$plugins$features$highlight$transform(change,event,matches){
return change.toggleMark("highlight");
});
lib.plugins.features.highlight.render_mark = (function lib$plugins$features$highlight$render_mark(props){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("highlight",props.mark.type)){
var G__36714 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(props.attributes);
var G__36715 = props.children;
return (lib.components.core.mark.cljs$core$IFn$_invoke$arity$2 ? lib.components.core.mark.cljs$core$IFn$_invoke$arity$2(G__36714,G__36715) : lib.components.core.mark.call(null,G__36714,G__36715));
} else {
return null;
}
});
/**
 * Adds highlight support to editor
 */
lib.plugins.features.highlight.highlight = (function lib$plugins$features$highlight$highlight(var_args){
var G__36729 = arguments.length;
switch (G__36729) {
case 1:
return lib.plugins.features.highlight.highlight.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return lib.plugins.features.highlight.highlight.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lib.plugins.features.highlight.highlight.cljs$core$IFn$_invoke$arity$1 = (function (options){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plugins","plugins",1900073717),cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib.plugins.helpers.hotkey.hotkey(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"cmd+e",new cljs.core.Keyword(null,"transform","transform",1381301764),lib.plugins.features.highlight.transform], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"renderMark","renderMark",742196658),lib.plugins.features.highlight.render_mark], null)], null))], null);
});

lib.plugins.features.highlight.highlight.cljs$core$IFn$_invoke$arity$0 = (function (){
return lib.plugins.features.highlight.highlight.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

lib.plugins.features.highlight.highlight.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=lib.plugins.features.highlight.js.map
