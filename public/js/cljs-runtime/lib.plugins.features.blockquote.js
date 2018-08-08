goog.provide('lib.plugins.features.blockquote');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('lib.components.core');
goog.require('lib.plugins.helpers.auto_replace');
goog.require('lib.plugins.helpers.hotkey');
lib.plugins.features.blockquote.transform = (function lib$plugins$features$blockquote$transform(change){
return change.setBlocks(cljs.core.clj__GT_js(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("blockquote",change.value.anchorBlock.type))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"paragraph"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"blockquote"], null))));
});
lib.plugins.features.blockquote.render_node = (function lib$plugins$features$blockquote$render_node(props){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("blockquote",props.node.type)){
var G__29226 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(props.attributes);
var G__29227 = props.children;
return (lib.components.core.blockquote.cljs$core$IFn$_invoke$arity$2 ? lib.components.core.blockquote.cljs$core$IFn$_invoke$arity$2(G__29226,G__29227) : lib.components.core.blockquote.call(null,G__29226,G__29227));
} else {
return null;
}
});
/**
 * Adds blockquote support to editor
 */
lib.plugins.features.blockquote.blockquote = (function lib$plugins$features$blockquote$blockquote(var_args){
var G__29234 = arguments.length;
switch (G__29234) {
case 1:
return lib.plugins.features.blockquote.blockquote.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return lib.plugins.features.blockquote.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lib.plugins.features.blockquote.blockquote.cljs$core$IFn$_invoke$arity$1 = (function (options){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plugins","plugins",1900073717),cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib.plugins.helpers.auto_replace.auto_replace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"trigger","trigger",103466139),"space",new cljs.core.Keyword(null,"before","before",-1633692388),/^(>)$/,new cljs.core.Keyword(null,"transform","transform",1381301764),lib.plugins.features.blockquote.transform], null)),lib.plugins.helpers.hotkey.hotkey(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"cmd+shift+.",new cljs.core.Keyword(null,"transform","transform",1381301764),lib.plugins.features.blockquote.transform], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"renderNode","renderNode",727218943),lib.plugins.features.blockquote.render_node], null)], null))], null);
});

lib.plugins.features.blockquote.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return lib.plugins.features.blockquote.blockquote.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

lib.plugins.features.blockquote.blockquote.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=lib.plugins.features.blockquote.js.map
