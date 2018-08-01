goog.provide('lib.components.core');
goog.require('cljs.core');
goog.require('reagent.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('cljss.core');
goog.require('cljss.reagent');
(window["React"] = module$node_modules$react$index);
lib.components.core.transparent = "rgba(0,0,0,0)";
lib.components.core.pitch_black = "#1b2733";
lib.components.core.black = "#1b2733";
lib.components.core.blue = "#0070e0";
lib.components.core.grey = "#637282";
lib.components.core.mid_grey = "#e6e8eb";
lib.components.core.light_grey = "#f7f9fa";
lib.components.core.editor_style = (function lib$components$core$editor_style(){
return cljss.core.css("lib_components_core__editor-style",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__editor-style{line-height:26px;font-size:16px;-webkit-print-color-adjust:exact;font-weight:400;-webkit-font-smoothing:antialiased;padding:10px;font-family:-apple-system, BlinkMacSystemFont, San Francisco, sans-serif;color:var(--var-lib_components_core__editor-style-0);-webkit-tap-highlight-color:var(--var-lib_components_core__editor-style-1);}"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-lib_components_core__editor-style-0",lib.components.core.black], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-lib_components_core__editor-style-1",lib.components.core.transparent], null)], null));
});
lib.components.core.b = (function (){var G__32413 = "lib_components_core__b";
var G__32414 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__b{font-weight:700;}"], null);
var G__32415 = [];
var G__32416 = [];
var G__32417 = ((function (G__32413,G__32414,G__32415,G__32416){
return (function (p1__29390__29392__auto__,p2__29391__29393__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",cljs.core.clj__GT_js(p1__29390__29392__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__29391__29393__auto__));
});})(G__32413,G__32414,G__32415,G__32416))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__32413,G__32414,G__32415,G__32416,G__32417) : cljss.reagent.styled.call(null,G__32413,G__32414,G__32415,G__32416,G__32417));
})();

lib.components.core.b.displayName = "lib.components.core.b";
lib.components.core.i = (function (){var G__32418 = "lib_components_core__i";
var G__32419 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__i{}"], null);
var G__32420 = [];
var G__32421 = [];
var G__32422 = ((function (G__32418,G__32419,G__32420,G__32421){
return (function (p1__29390__29392__auto__,p2__29391__29393__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"i",cljs.core.clj__GT_js(p1__29390__29392__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__29391__29393__auto__));
});})(G__32418,G__32419,G__32420,G__32421))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__32418,G__32419,G__32420,G__32421,G__32422) : cljss.reagent.styled.call(null,G__32418,G__32419,G__32420,G__32421,G__32422));
})();

lib.components.core.i.displayName = "lib.components.core.i";
lib.components.core.del = (function (){var G__32423 = "lib_components_core__del";
var G__32424 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__del{text-decoration-color:var(--var-lib_components_core__del-0);}"], null);
var G__32425 = [["--var-lib_components_core__del-0",lib.components.core.pitch_black]];
var G__32426 = [];
var G__32427 = ((function (G__32423,G__32424,G__32425,G__32426){
return (function (p1__29390__29392__auto__,p2__29391__29393__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"del",cljs.core.clj__GT_js(p1__29390__29392__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__29391__29393__auto__));
});})(G__32423,G__32424,G__32425,G__32426))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__32423,G__32424,G__32425,G__32426,G__32427) : cljss.reagent.styled.call(null,G__32423,G__32424,G__32425,G__32426,G__32427));
})();

lib.components.core.del.displayName = "lib.components.core.del";
lib.components.core.a = (function (){var G__32428 = "lib_components_core__a";
var G__32429 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__a{color:var(--var-lib_components_core__a-0);}"], null);
var G__32430 = [["--var-lib_components_core__a-0",lib.components.core.blue]];
var G__32431 = [];
var G__32432 = ((function (G__32428,G__32429,G__32430,G__32431){
return (function (p1__29390__29392__auto__,p2__29391__29393__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",cljs.core.clj__GT_js(p1__29390__29392__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__29391__29393__auto__));
});})(G__32428,G__32429,G__32430,G__32431))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__32428,G__32429,G__32430,G__32431,G__32432) : cljss.reagent.styled.call(null,G__32428,G__32429,G__32430,G__32431,G__32432));
})();

lib.components.core.a.displayName = "lib.components.core.a";
lib.components.core.h1 = (function (){var G__32433 = "lib_components_core__h1";
var G__32434 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__h1{font-size:30px;line-height:36px;font-weight:600;word-spacing:1px;margin-top:30px;margin-bottom:12px;}"], null);
var G__32435 = [];
var G__32436 = [];
var G__32437 = ((function (G__32433,G__32434,G__32435,G__32436){
return (function (p1__29390__29392__auto__,p2__29391__29393__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h1",cljs.core.clj__GT_js(p1__29390__29392__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__29391__29393__auto__));
});})(G__32433,G__32434,G__32435,G__32436))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__32433,G__32434,G__32435,G__32436,G__32437) : cljss.reagent.styled.call(null,G__32433,G__32434,G__32435,G__32436,G__32437));
})();

lib.components.core.h1.displayName = "lib.components.core.h1";
lib.components.core.h2 = (function (){var G__32438 = "lib_components_core__h2";
var G__32439 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__h2{font-size:21px;line-height:28px;font-weight:600;word-spacing:0.5px;margin-top:18px;margin-bottom:6px;}"], null);
var G__32440 = [];
var G__32441 = [];
var G__32442 = ((function (G__32438,G__32439,G__32440,G__32441){
return (function (p1__29390__29392__auto__,p2__29391__29393__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h2",cljs.core.clj__GT_js(p1__29390__29392__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__29391__29393__auto__));
});})(G__32438,G__32439,G__32440,G__32441))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__32438,G__32439,G__32440,G__32441,G__32442) : cljss.reagent.styled.call(null,G__32438,G__32439,G__32440,G__32441,G__32442));
})();

lib.components.core.h2.displayName = "lib.components.core.h2";
lib.components.core.h3 = (function (){var G__32443 = "lib_components_core__h3";
var G__32444 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__h3{font-size:16px;line-height:22px;font-weight:700;margin-top:9px;margin-bottom:3px;border-bottom:var(--var-lib_components_core__h3-0);}"], null);
var G__32445 = [["--var-lib_components_core__h3-0",["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib.components.core.light_grey)].join('')]];
var G__32446 = [];
var G__32447 = ((function (G__32443,G__32444,G__32445,G__32446){
return (function (p1__29390__29392__auto__,p2__29391__29393__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h3",cljs.core.clj__GT_js(p1__29390__29392__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__29391__29393__auto__));
});})(G__32443,G__32444,G__32445,G__32446))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__32443,G__32444,G__32445,G__32446,G__32447) : cljss.reagent.styled.call(null,G__32443,G__32444,G__32445,G__32446,G__32447));
})();

lib.components.core.h3.displayName = "lib.components.core.h3";
lib.components.core.blockquote = (function (){var G__32448 = "lib_components_core__blockquote";
var G__32449 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__blockquote{margin:0px;padding-left:23px;border-left:var(--var-lib_components_core__blockquote-0);}"], null);
var G__32450 = [["--var-lib_components_core__blockquote-0",["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib.components.core.grey)].join('')]];
var G__32451 = [];
var G__32452 = ((function (G__32448,G__32449,G__32450,G__32451){
return (function (p1__29390__29392__auto__,p2__29391__29393__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"blockquote",cljs.core.clj__GT_js(p1__29390__29392__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__29391__29393__auto__));
});})(G__32448,G__32449,G__32450,G__32451))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__32448,G__32449,G__32450,G__32451,G__32452) : cljss.reagent.styled.call(null,G__32448,G__32449,G__32450,G__32451,G__32452));
})();

lib.components.core.blockquote.displayName = "lib.components.core.blockquote";
lib.components.core.img = (function (){var G__32453 = "lib_components_core__img";
var G__32454 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__img{}"], null);
var G__32455 = [];
var G__32456 = [];
var G__32457 = ((function (G__32453,G__32454,G__32455,G__32456){
return (function (p1__29390__29392__auto__,p2__29391__29393__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"img",cljs.core.clj__GT_js(p1__29390__29392__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__29391__29393__auto__));
});})(G__32453,G__32454,G__32455,G__32456))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__32453,G__32454,G__32455,G__32456,G__32457) : cljss.reagent.styled.call(null,G__32453,G__32454,G__32455,G__32456,G__32457));
})();

lib.components.core.img.displayName = "lib.components.core.img";

//# sourceMappingURL=lib.components.core.js.map
