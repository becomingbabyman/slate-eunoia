goog.provide('lib.plugins.features.header');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('lib.components.core');
goog.require('lib.plugins.helpers.auto_replace');
goog.require('lib.plugins.helpers.hotkey');
lib.plugins.features.header.transform = (function lib$plugins$features$header$transform(var_args){
var G__29042 = arguments.length;
switch (G__29042) {
case 2:
return lib.plugins.features.header.transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return lib.plugins.features.header.transform.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 1:
return lib.plugins.features.header.transform.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lib.plugins.features.header.transform.cljs$core$IFn$_invoke$arity$2 = (function (change,n){

var type = ["header",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
return change.setBlocks(cljs.core.clj__GT_js(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,change.value.anchorBlock.type))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"paragraph"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null))));
});

lib.plugins.features.header.transform.cljs$core$IFn$_invoke$arity$4 = (function (change,event,matches,editor){

var hashes = cljs.core.first(matches.before);
var n = cljs.core.count(hashes);
return lib.plugins.features.header.transform.cljs$core$IFn$_invoke$arity$2(change,n);
});

lib.plugins.features.header.transform.cljs$core$IFn$_invoke$arity$1 = (function (n){

return (function (change){
return lib.plugins.features.header.transform.cljs$core$IFn$_invoke$arity$2(change,n);
});
});

lib.plugins.features.header.transform.cljs$lang$maxFixedArity = 4;

lib.plugins.features.header.render_node = (function lib$plugins$features$header$render_node(props){
var render = (function (h_component){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(h_component,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(props.attributes),props.children);
});
var G__29069 = props.node.type;
switch (G__29069) {
case "header1":
return render(lib.components.core.h1);

break;
case "header2":
return render(lib.components.core.h2);

break;
case "header3":
return render(lib.components.core.h3);

break;
default:
return null;

}
});
/**
 * Adds header support to editor
 */
lib.plugins.features.header.header = (function lib$plugins$features$header$header(var_args){
var G__29072 = arguments.length;
switch (G__29072) {
case 1:
return lib.plugins.features.header.header.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return lib.plugins.features.header.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lib.plugins.features.header.header.cljs$core$IFn$_invoke$arity$1 = (function (options){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plugins","plugins",1900073717),cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib.plugins.helpers.auto_replace.auto_replace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"trigger","trigger",103466139),"space",new cljs.core.Keyword(null,"before","before",-1633692388),/^(\#{1,3})$/,new cljs.core.Keyword(null,"transform","transform",1381301764),lib.plugins.features.header.transform], null)),lib.plugins.helpers.hotkey.hotkey(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"cmd+opt+1",new cljs.core.Keyword(null,"transform","transform",1381301764),lib.plugins.features.header.transform.cljs$core$IFn$_invoke$arity$1((1))], null)),lib.plugins.helpers.hotkey.hotkey(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"cmd+opt+2",new cljs.core.Keyword(null,"transform","transform",1381301764),lib.plugins.features.header.transform.cljs$core$IFn$_invoke$arity$1((2))], null)),lib.plugins.helpers.hotkey.hotkey(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"cmd+opt+3",new cljs.core.Keyword(null,"transform","transform",1381301764),lib.plugins.features.header.transform.cljs$core$IFn$_invoke$arity$1((3))], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"renderNode","renderNode",727218943),lib.plugins.features.header.render_node], null)], null))], null);
});

lib.plugins.features.header.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return lib.plugins.features.header.header.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

lib.plugins.features.header.header.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=lib.plugins.features.header.js.map
