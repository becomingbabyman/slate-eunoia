goog.provide('lib.components.core');
goog.require('cljs.core');
goog.require('reagent.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$feather_icons$dist$feather=shadow.js.require("module$node_modules$feather_icons$dist$feather", {});
goog.require('cljss.core');
goog.require('cljss.reagent');
(window["React"] = module$node_modules$react$index);
lib.components.core.transparent = "rgba(0,0,0,0)";
lib.components.core.pitch_black = "#1b2733";
lib.components.core.black = "#1b2733";
lib.components.core.blue = "#0070e0";
lib.components.core.light_blue = "#d6e8fa";
lib.components.core.grey = "#637282";
lib.components.core.mid_grey = "#e6e8eb";
lib.components.core.light_grey = "#f7f9fa";
lib.components.core.fade_in = (function lib$components$core$fade_in(from_opacity,to_opacity){
return cljss.core.css_keyframes("lib_components_core__fade-in","from{opacity:var(1);}to{opacity:var(2);}",[["var(1)",from_opacity],["var(2)",to_opacity]]);
});
lib.components.core.editor_style = (function lib$components$core$editor_style(){
return cljss.core.css("lib_components_core__editor-style",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__editor-style{line-height:26px;font-size:16px;-webkit-print-color-adjust:exact;font-weight:400;-webkit-font-smoothing:antialiased;padding:10px;font-family:-apple-system, BlinkMacSystemFont, San Francisco, sans-serif;color:var(--var-lib_components_core__editor-style-0);-webkit-tap-highlight-color:var(--var-lib_components_core__editor-style-1);}",".lib_components_core__editor-style *{padding:0;margin:0;}",".lib_components_core__editor-style button:active{position:relative;top:1px;}",".lib_components_core__editor-style button{background:none;border:none;cursor:pointer;outline:none;}"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-lib_components_core__editor-style-0",lib.components.core.black], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-lib_components_core__editor-style-1",lib.components.core.transparent], null)], null));
});
lib.components.core.b = (function (){var G__28504 = "lib_components_core__b";
var G__28505 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__b{font-weight:700;}"], null);
var G__28506 = [];
var G__28507 = [];
var G__28508 = ((function (G__28504,G__28505,G__28506,G__28507){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__28504,G__28505,G__28506,G__28507))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__28504,G__28505,G__28506,G__28507,G__28508) : cljss.reagent.styled.call(null,G__28504,G__28505,G__28506,G__28507,G__28508));
})();

lib.components.core.b.displayName = "lib.components.core.b";
lib.components.core.i = (function (){var G__28509 = "lib_components_core__i";
var G__28510 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__i{}"], null);
var G__28511 = [];
var G__28512 = [];
var G__28513 = ((function (G__28509,G__28510,G__28511,G__28512){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"i",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__28509,G__28510,G__28511,G__28512))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__28509,G__28510,G__28511,G__28512,G__28513) : cljss.reagent.styled.call(null,G__28509,G__28510,G__28511,G__28512,G__28513));
})();

lib.components.core.i.displayName = "lib.components.core.i";
lib.components.core.del = (function (){var G__28514 = "lib_components_core__del";
var G__28515 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__del{text-decoration-color:var(--var-lib_components_core__del-0);}"], null);
var G__28516 = [["--var-lib_components_core__del-0",lib.components.core.pitch_black]];
var G__28517 = [];
var G__28518 = ((function (G__28514,G__28515,G__28516,G__28517){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"del",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__28514,G__28515,G__28516,G__28517))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__28514,G__28515,G__28516,G__28517,G__28518) : cljss.reagent.styled.call(null,G__28514,G__28515,G__28516,G__28517,G__28518));
})();

lib.components.core.del.displayName = "lib.components.core.del";
lib.components.core.mark = (function (){var G__28519 = "lib_components_core__mark";
var G__28520 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__mark{padding-top:0.1em;padding-bottom:0.1em;color:var(--var-lib_components_core__mark-0);background-color:var(--var-lib_components_core__mark-1);}"], null);
var G__28521 = [["--var-lib_components_core__mark-0",lib.components.core.black],["--var-lib_components_core__mark-1",lib.components.core.light_blue]];
var G__28522 = [];
var G__28523 = ((function (G__28519,G__28520,G__28521,G__28522){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"mark",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__28519,G__28520,G__28521,G__28522))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__28519,G__28520,G__28521,G__28522,G__28523) : cljss.reagent.styled.call(null,G__28519,G__28520,G__28521,G__28522,G__28523));
})();

lib.components.core.mark.displayName = "lib.components.core.mark";
lib.components.core.a = (function (){var G__28524 = "lib_components_core__a";
var G__28525 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__a{color:var(--var-lib_components_core__a-0);}"], null);
var G__28526 = [["--var-lib_components_core__a-0",lib.components.core.blue]];
var G__28527 = [];
var G__28528 = ((function (G__28524,G__28525,G__28526,G__28527){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__28524,G__28525,G__28526,G__28527))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__28524,G__28525,G__28526,G__28527,G__28528) : cljss.reagent.styled.call(null,G__28524,G__28525,G__28526,G__28527,G__28528));
})();

lib.components.core.a.displayName = "lib.components.core.a";
lib.components.core.h1 = (function (){var G__28529 = "lib_components_core__h1";
var G__28530 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__h1{font-size:30px;line-height:36px;font-weight:600;word-spacing:1px;margin-top:30px;margin-bottom:12px;}",".lib_components_core__h1 b{font-weight:800;}"], null);
var G__28531 = [];
var G__28532 = [];
var G__28533 = ((function (G__28529,G__28530,G__28531,G__28532){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h1",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__28529,G__28530,G__28531,G__28532))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__28529,G__28530,G__28531,G__28532,G__28533) : cljss.reagent.styled.call(null,G__28529,G__28530,G__28531,G__28532,G__28533));
})();

lib.components.core.h1.displayName = "lib.components.core.h1";
lib.components.core.h2 = (function (){var G__28534 = "lib_components_core__h2";
var G__28535 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__h2{font-size:21px;line-height:28px;font-weight:600;word-spacing:0.5px;margin-top:18px;margin-bottom:6px;}",".lib_components_core__h2 b{font-weight:800;}"], null);
var G__28536 = [];
var G__28537 = [];
var G__28538 = ((function (G__28534,G__28535,G__28536,G__28537){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h2",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__28534,G__28535,G__28536,G__28537))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__28534,G__28535,G__28536,G__28537,G__28538) : cljss.reagent.styled.call(null,G__28534,G__28535,G__28536,G__28537,G__28538));
})();

lib.components.core.h2.displayName = "lib.components.core.h2";
lib.components.core.h3 = (function (){var G__28539 = "lib_components_core__h3";
var G__28540 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__h3{font-size:16px;line-height:22px;font-weight:700;margin-top:9px;margin-bottom:3px;border-bottom:var(--var-lib_components_core__h3-0);}",".lib_components_core__h3 b{font-weight:800;}"], null);
var G__28541 = [["--var-lib_components_core__h3-0",["2px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib.components.core.light_grey)].join('')]];
var G__28542 = [];
var G__28543 = ((function (G__28539,G__28540,G__28541,G__28542){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h3",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__28539,G__28540,G__28541,G__28542))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__28539,G__28540,G__28541,G__28542,G__28543) : cljss.reagent.styled.call(null,G__28539,G__28540,G__28541,G__28542,G__28543));
})();

lib.components.core.h3.displayName = "lib.components.core.h3";
lib.components.core.blockquote = (function (){var G__28544 = "lib_components_core__blockquote";
var G__28545 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__blockquote{margin:0px;padding-left:23px;font-style:italic;border-left:var(--var-lib_components_core__blockquote-0);}"], null);
var G__28546 = [["--var-lib_components_core__blockquote-0",["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib.components.core.grey)].join('')]];
var G__28547 = [];
var G__28548 = ((function (G__28544,G__28545,G__28546,G__28547){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"blockquote",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__28544,G__28545,G__28546,G__28547))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__28544,G__28545,G__28546,G__28547,G__28548) : cljss.reagent.styled.call(null,G__28544,G__28545,G__28546,G__28547,G__28548));
})();

lib.components.core.blockquote.displayName = "lib.components.core.blockquote";
lib.components.core.img = (function (){var G__28549 = "lib_components_core__img";
var G__28550 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__img{}"], null);
var G__28551 = [];
var G__28552 = [];
var G__28553 = ((function (G__28549,G__28550,G__28551,G__28552){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"img",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__28549,G__28550,G__28551,G__28552))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__28549,G__28550,G__28551,G__28552,G__28553) : cljss.reagent.styled.call(null,G__28549,G__28550,G__28551,G__28552,G__28553));
})();

lib.components.core.img.displayName = "lib.components.core.img";
/**
 * feather svg icon
 *   names: https://feathericons.com/
 *   svg-attrs: https://github.com/feathericons/feather#parameters
 */
lib.components.core.icon = (function lib$components$core$icon(var_args){
var G__28555 = arguments.length;
switch (G__28555) {
case 2:
return lib.components.core.icon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return lib.components.core.icon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lib.components.core.icon.cljs$core$IFn$_invoke$arity$2 = (function (name,svg_attrs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),(module$node_modules$feather_icons$dist$feather.icons[name]).toSvg(cljs.core.clj__GT_js(svg_attrs))], null)], null)], null);
});

lib.components.core.icon.cljs$core$IFn$_invoke$arity$1 = (function (name){
return lib.components.core.icon.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),lib.components.core.black,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2)], null));
});

lib.components.core.icon.cljs$lang$maxFixedArity = 2;

lib.components.core.block_placeholder_bar = (function (){var G__28557 = "lib_components_core__block-placeholder-bar";
var G__28558 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__block-placeholder-bar{position:absolute;right:0;heith:100%;display:flex;align-items:center;justify-content:center;}"], null);
var G__28559 = [];
var G__28560 = [];
var G__28561 = ((function (G__28557,G__28558,G__28559,G__28560){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__28557,G__28558,G__28559,G__28560))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__28557,G__28558,G__28559,G__28560,G__28561) : cljss.reagent.styled.call(null,G__28557,G__28558,G__28559,G__28560,G__28561));
})();

lib.components.core.block_placeholder_bar.displayName = "lib.components.core.block-placeholder-bar";
lib.components.core.block_placeholder_button = (function (){var G__28562 = "lib_components_core__block-placeholder-button";
var G__28563 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__block-placeholder-button{padding-left:5px;padding-right:5px;height:100%;opacity:0.3;transition:opacity 0.2s;animation:var(--var-lib_components_core__block-placeholder-button-0);}",".lib_components_core__block-placeholder-button:hover{opacity:0.6;}"], null);
var G__28564 = [["--var-lib_components_core__block-placeholder-button-0",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib.components.core.fade_in((0),0.3))," 0.3s ease"].join('')]];
var G__28565 = [];
var G__28566 = ((function (G__28562,G__28563,G__28564,G__28565){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"button",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__28562,G__28563,G__28564,G__28565))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__28562,G__28563,G__28564,G__28565,G__28566) : cljss.reagent.styled.call(null,G__28562,G__28563,G__28564,G__28565,G__28566));
})();

lib.components.core.block_placeholder_button.displayName = "lib.components.core.block-placeholder-button";

//# sourceMappingURL=lib.components.core.js.map
