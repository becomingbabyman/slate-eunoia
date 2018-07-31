goog.provide('lib.plugins.features.blockquote');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('lib.plugins.helpers.auto_replace');
goog.require('lib.plugins.helpers.hotkey');
lib.plugins.features.blockquote.transform = (function lib$plugins$features$blockquote$transform(change){
return change.setBlock(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"blockquote"], null)));
});
lib.plugins.features.blockquote.render_node = (function lib$plugins$features$blockquote$render_node(props){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("blockquote",props.node.type)){
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$3("blockquote",props.attributes,props.children);
} else {
return null;
}
});
/**
 * Adds blockquote support to editor
 */
lib.plugins.features.blockquote.blockquote = (function lib$plugins$features$blockquote$blockquote(var_args){
var G__26481 = arguments.length;
switch (G__26481) {
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
