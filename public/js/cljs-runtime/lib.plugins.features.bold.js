goog.provide('lib.plugins.features.bold');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('lib.components.core');
goog.require('lib.plugins.helpers.auto_replace');
goog.require('lib.plugins.helpers.hotkey');
lib.plugins.features.bold.strip_auto_replace_triggers = (function lib$plugins$features$bold$strip_auto_replace_triggers(matched_text){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(matched_text,(2),(cljs.core.count(matched_text) - (1)));
});
lib.plugins.features.bold.transform = (function lib$plugins$features$bold$transform(change,event,matches){
if(cljs.core.truth_(matches)){
var text = cljs.core.first(matches.before);
var clean_text = lib.plugins.features.bold.strip_auto_replace_triggers(text);
return change.insertText(clean_text,cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bold"], null)));
} else {
return change.toggleMark("bold");
}
});
lib.plugins.features.bold.render_mark = (function lib$plugins$features$bold$render_mark(props){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("bold",props.mark.type)){
var G__31279 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(props.attributes);
var G__31280 = props.children;
return (lib.components.core.b.cljs$core$IFn$_invoke$arity$2 ? lib.components.core.b.cljs$core$IFn$_invoke$arity$2(G__31279,G__31280) : lib.components.core.b.call(null,G__31279,G__31280));
} else {
return null;
}
});
/**
 * Adds bold support to editor
 */
lib.plugins.features.bold.bold = (function lib$plugins$features$bold$bold(var_args){
var G__31292 = arguments.length;
switch (G__31292) {
case 1:
return lib.plugins.features.bold.bold.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return lib.plugins.features.bold.bold.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lib.plugins.features.bold.bold.cljs$core$IFn$_invoke$arity$1 = (function (options){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plugins","plugins",1900073717),cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib.plugins.helpers.auto_replace.auto_replace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"trigger","trigger",103466139),/\*/,new cljs.core.Keyword(null,"before","before",-1633692388),/(\*\*.+\*)/,new cljs.core.Keyword(null,"transform","transform",1381301764),lib.plugins.features.bold.transform], null)),lib.plugins.helpers.hotkey.hotkey(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"cmd+b",new cljs.core.Keyword(null,"transform","transform",1381301764),lib.plugins.features.bold.transform], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"renderMark","renderMark",742196658),lib.plugins.features.bold.render_mark], null)], null))], null);
});

lib.plugins.features.bold.bold.cljs$core$IFn$_invoke$arity$0 = (function (){
return lib.plugins.features.bold.bold.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

lib.plugins.features.bold.bold.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=lib.plugins.features.bold.js.map
