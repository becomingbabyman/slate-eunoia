goog.provide('lib.components.core');
goog.require('cljs.core');
goog.require('reagent.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('cljss.core');
goog.require('cljss.reagent');
(window["React"] = module$node_modules$react$index);
lib.components.core.transparent = "rgba(0,0,0,0)";
lib.components.core.black = "#1b2733";
lib.components.core.blue = "#0070e0";
lib.components.core.grey = "#637282";
lib.components.core.mid_grey = "#e6e8eb";
lib.components.core.light_grey = "#f7f9fa";
lib.components.core.editor_style = (function lib$components$core$editor_style(){
return cljss.core.css("lib_components_core__editor-style",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__editor-style{padding:10px;font-family:-apple-system, BlinkMacSystemFont, San Francisco, sans-serif;-webkit-font-smoothing:antialiased;-webkit-print-color-adjust:exact;color:var(--var-lib_components_core__editor-style-0);-webkit-tap-highlight-color:var(--var-lib_components_core__editor-style-1);}"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-lib_components_core__editor-style-0",lib.components.core.black], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-lib_components_core__editor-style-1",lib.components.core.transparent], null)], null));
});
lib.components.core.h1 = (function (){var G__30838 = "lib_components_core__h1";
var G__30839 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__h1{font-size:30px;line-height:36px;font-weight:600;word-spacing:1px;margin-top:30px;margin-bottom:12px;}"], null);
var G__30840 = [];
var G__30841 = [];
var G__30842 = ((function (G__30838,G__30839,G__30840,G__30841){
return (function (p1__29390__29392__auto__,p2__29391__29393__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h1",cljs.core.clj__GT_js(p1__29390__29392__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__29391__29393__auto__));
});})(G__30838,G__30839,G__30840,G__30841))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__30838,G__30839,G__30840,G__30841,G__30842) : cljss.reagent.styled.call(null,G__30838,G__30839,G__30840,G__30841,G__30842));
})();

lib.components.core.h1.displayName = "lib.components.core.h1";
lib.components.core.h2 = (function (){var G__30843 = "lib_components_core__h2";
var G__30844 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__h2{font-size:21px;line-height:28px;font-weight:600;word-spacing:0.5px;margin-top:18px;margin-bottom:6px;}"], null);
var G__30845 = [];
var G__30846 = [];
var G__30847 = ((function (G__30843,G__30844,G__30845,G__30846){
return (function (p1__29390__29392__auto__,p2__29391__29393__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h2",cljs.core.clj__GT_js(p1__29390__29392__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__29391__29393__auto__));
});})(G__30843,G__30844,G__30845,G__30846))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__30843,G__30844,G__30845,G__30846,G__30847) : cljss.reagent.styled.call(null,G__30843,G__30844,G__30845,G__30846,G__30847));
})();

lib.components.core.h2.displayName = "lib.components.core.h2";
lib.components.core.h3 = (function (){var G__30848 = "lib_components_core__h3";
var G__30849 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__h3{font-size:14px;line-height:22px;font-weight:700;margin-top:0px;margin-bottom:0px;}"], null);
var G__30850 = [];
var G__30851 = [];
var G__30852 = ((function (G__30848,G__30849,G__30850,G__30851){
return (function (p1__29390__29392__auto__,p2__29391__29393__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h3",cljs.core.clj__GT_js(p1__29390__29392__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__29391__29393__auto__));
});})(G__30848,G__30849,G__30850,G__30851))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__30848,G__30849,G__30850,G__30851,G__30852) : cljss.reagent.styled.call(null,G__30848,G__30849,G__30850,G__30851,G__30852));
})();

lib.components.core.h3.displayName = "lib.components.core.h3";

//# sourceMappingURL=lib.components.core.js.map
