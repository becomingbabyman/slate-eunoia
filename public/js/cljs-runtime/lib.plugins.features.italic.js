goog.provide('lib.plugins.features.italic');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('lib.components.core');
goog.require('lib.plugins.helpers.auto_replace');
goog.require('lib.plugins.helpers.hotkey');
lib.plugins.features.italic.strip_auto_replace_triggers = (function lib$plugins$features$italic$strip_auto_replace_triggers(matched_text){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(matched_text,(1));
});
lib.plugins.features.italic.transform = (function lib$plugins$features$italic$transform(change,event,matches){
if(cljs.core.truth_(matches)){
var text = cljs.core.first(matches.before);
var clean_text = lib.plugins.features.italic.strip_auto_replace_triggers(text);
return change.insertText(clean_text,cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["italic"], null)));
} else {
return change.toggleMark("italic");
}
});
lib.plugins.features.italic.render_mark = (function lib$plugins$features$italic$render_mark(props){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("italic",props.mark.type)){
var G__28966 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(props.attributes);
var G__28967 = props.children;
return (lib.components.core.i.cljs$core$IFn$_invoke$arity$2 ? lib.components.core.i.cljs$core$IFn$_invoke$arity$2(G__28966,G__28967) : lib.components.core.i.call(null,G__28966,G__28967));
} else {
return null;
}
});
/**
 * Adds italic support to editor
 */
lib.plugins.features.italic.italic = (function lib$plugins$features$italic$italic(var_args){
var G__28977 = arguments.length;
switch (G__28977) {
case 1:
return lib.plugins.features.italic.italic.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return lib.plugins.features.italic.italic.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lib.plugins.features.italic.italic.cljs$core$IFn$_invoke$arity$1 = (function (options){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plugins","plugins",1900073717),cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib.plugins.helpers.auto_replace.auto_replace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"trigger","trigger",103466139),/\_/,new cljs.core.Keyword(null,"before","before",-1633692388),/(\_.+)/,new cljs.core.Keyword(null,"transform","transform",1381301764),lib.plugins.features.italic.transform], null)),lib.plugins.helpers.hotkey.hotkey(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"cmd+i",new cljs.core.Keyword(null,"transform","transform",1381301764),lib.plugins.features.italic.transform], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"renderMark","renderMark",742196658),lib.plugins.features.italic.render_mark], null)], null))], null);
});

lib.plugins.features.italic.italic.cljs$core$IFn$_invoke$arity$0 = (function (){
return lib.plugins.features.italic.italic.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

lib.plugins.features.italic.italic.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=lib.plugins.features.italic.js.map
