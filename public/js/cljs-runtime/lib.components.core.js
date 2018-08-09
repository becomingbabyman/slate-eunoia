goog.provide('lib.components.core');
goog.require('cljs.core');
goog.require('reagent.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$feather_icons$dist$feather=shadow.js.require("module$node_modules$feather_icons$dist$feather", {});
goog.require('cljss.core');
goog.require('cljss.reagent');
(window["React"] = module$node_modules$react$index);
lib.components.core.transparent = "rgba(0,0,0,0)";
lib.components.core.pitch_black = "#000000";
lib.components.core.black = "#1b2733";
lib.components.core.white = "#ffffff";
lib.components.core.dark_white = "#f7f9fa";
lib.components.core.light_grey = "#e6e8eb";
lib.components.core.mid_grey = "#c1c7cd";
lib.components.core.grey = "#637282";
lib.components.core.blue = "#0070e0";
lib.components.core.light_blue = "#d6e8fa";
lib.components.core.fade_in = (function lib$components$core$fade_in(from_opacity,to_opacity){
return cljss.core.css_keyframes("lib_components_core__fade-in","from{opacity:var(1);}to{opacity:var(2);}",[["var(1)",from_opacity],["var(2)",to_opacity]]);
});
lib.components.core.top_level_component = (function (){var G__29304 = "lib_components_core__top-level-component";
var G__29305 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__top-level-component{line-height:26px;font-size:16px;-webkit-print-color-adjust:exact;font-weight:400;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:transparent;font-family:-apple-system, BlinkMacSystemFont, San Francisco, sans-serif;color:var(--var-lib_components_core__top-level-component-0);}",".lib_components_core__top-level-component *{padding:0;margin:0;}",".lib_components_core__top-level-component button:active{position:relative;top:1px;}",".lib_components_core__top-level-component button{background:none;border:none;cursor:pointer;outline:none;}"], null);
var G__29306 = [["--var-lib_components_core__top-level-component-0",lib.components.core.black]];
var G__29307 = [];
var G__29308 = ((function (G__29304,G__29305,G__29306,G__29307){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__29304,G__29305,G__29306,G__29307))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__29304,G__29305,G__29306,G__29307,G__29308) : cljss.reagent.styled.call(null,G__29304,G__29305,G__29306,G__29307,G__29308));
})();

lib.components.core.top_level_component.displayName = "lib.components.core.top-level-component";
lib.components.core.b = (function (){var G__29309 = "lib_components_core__b";
var G__29310 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__b{font-weight:700;}"], null);
var G__29311 = [];
var G__29312 = [];
var G__29313 = ((function (G__29309,G__29310,G__29311,G__29312){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__29309,G__29310,G__29311,G__29312))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__29309,G__29310,G__29311,G__29312,G__29313) : cljss.reagent.styled.call(null,G__29309,G__29310,G__29311,G__29312,G__29313));
})();

lib.components.core.b.displayName = "lib.components.core.b";
lib.components.core.i = (function (){var G__29314 = "lib_components_core__i";
var G__29315 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__i{}"], null);
var G__29316 = [];
var G__29317 = [];
var G__29318 = ((function (G__29314,G__29315,G__29316,G__29317){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"i",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__29314,G__29315,G__29316,G__29317))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__29314,G__29315,G__29316,G__29317,G__29318) : cljss.reagent.styled.call(null,G__29314,G__29315,G__29316,G__29317,G__29318));
})();

lib.components.core.i.displayName = "lib.components.core.i";
lib.components.core.del = (function (){var G__29319 = "lib_components_core__del";
var G__29320 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__del{text-decoration-color:var(--var-lib_components_core__del-0);}"], null);
var G__29321 = [["--var-lib_components_core__del-0",lib.components.core.pitch_black]];
var G__29322 = [];
var G__29323 = ((function (G__29319,G__29320,G__29321,G__29322){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"del",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__29319,G__29320,G__29321,G__29322))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__29319,G__29320,G__29321,G__29322,G__29323) : cljss.reagent.styled.call(null,G__29319,G__29320,G__29321,G__29322,G__29323));
})();

lib.components.core.del.displayName = "lib.components.core.del";
lib.components.core.mark = (function (){var G__29324 = "lib_components_core__mark";
var G__29325 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__mark{padding-top:0.1em;padding-bottom:0.1em;color:var(--var-lib_components_core__mark-0);background-color:var(--var-lib_components_core__mark-1);}"], null);
var G__29326 = [["--var-lib_components_core__mark-0",lib.components.core.black],["--var-lib_components_core__mark-1",lib.components.core.light_blue]];
var G__29327 = [];
var G__29328 = ((function (G__29324,G__29325,G__29326,G__29327){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"mark",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__29324,G__29325,G__29326,G__29327))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__29324,G__29325,G__29326,G__29327,G__29328) : cljss.reagent.styled.call(null,G__29324,G__29325,G__29326,G__29327,G__29328));
})();

lib.components.core.mark.displayName = "lib.components.core.mark";
lib.components.core.code = (function (){var G__29329 = "lib_components_core__code";
var G__29330 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__code{font-family:Hasklig, SourceCodePro, monospace;background:var(--var-lib_components_core__code-0);border:var(--var-lib_components_core__code-1);}"], null);
var G__29331 = [["--var-lib_components_core__code-0",lib.components.core.dark_white],["--var-lib_components_core__code-1",["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib.components.core.light_grey)].join('')]];
var G__29332 = [];
var G__29333 = ((function (G__29329,G__29330,G__29331,G__29332){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__29329,G__29330,G__29331,G__29332))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__29329,G__29330,G__29331,G__29332,G__29333) : cljss.reagent.styled.call(null,G__29329,G__29330,G__29331,G__29332,G__29333));
})();

lib.components.core.code.displayName = "lib.components.core.code";
lib.components.core.pre = (function (){var G__29334 = "lib_components_core__pre";
var G__29335 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__pre{font-family:Hasklig, SourceCodePro, monospace;padding:5px;border-radius:2px;background:var(--var-lib_components_core__pre-0);border:var(--var-lib_components_core__pre-1);}"], null);
var G__29336 = [["--var-lib_components_core__pre-0",lib.components.core.dark_white],["--var-lib_components_core__pre-1",["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib.components.core.light_grey)].join('')]];
var G__29337 = [];
var G__29338 = ((function (G__29334,G__29335,G__29336,G__29337){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"pre",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__29334,G__29335,G__29336,G__29337))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__29334,G__29335,G__29336,G__29337,G__29338) : cljss.reagent.styled.call(null,G__29334,G__29335,G__29336,G__29337,G__29338));
})();

lib.components.core.pre.displayName = "lib.components.core.pre";
lib.components.core.a = (function (){var G__29339 = "lib_components_core__a";
var G__29340 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__a{color:var(--var-lib_components_core__a-0);}"], null);
var G__29341 = [["--var-lib_components_core__a-0",lib.components.core.blue]];
var G__29342 = [];
var G__29343 = ((function (G__29339,G__29340,G__29341,G__29342){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__29339,G__29340,G__29341,G__29342))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__29339,G__29340,G__29341,G__29342,G__29343) : cljss.reagent.styled.call(null,G__29339,G__29340,G__29341,G__29342,G__29343));
})();

lib.components.core.a.displayName = "lib.components.core.a";
lib.components.core.h1 = (function (){var G__29344 = "lib_components_core__h1";
var G__29345 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__h1{font-size:30px;line-height:36px;font-weight:600;word-spacing:1px;margin-top:30px;margin-bottom:12px;}",".lib_components_core__h1 b{font-weight:800;}"], null);
var G__29346 = [];
var G__29347 = [];
var G__29348 = ((function (G__29344,G__29345,G__29346,G__29347){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h1",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__29344,G__29345,G__29346,G__29347))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__29344,G__29345,G__29346,G__29347,G__29348) : cljss.reagent.styled.call(null,G__29344,G__29345,G__29346,G__29347,G__29348));
})();

lib.components.core.h1.displayName = "lib.components.core.h1";
lib.components.core.h2 = (function (){var G__29349 = "lib_components_core__h2";
var G__29350 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__h2{font-size:21px;line-height:28px;font-weight:600;word-spacing:0.5px;margin-top:18px;margin-bottom:6px;}",".lib_components_core__h2 b{font-weight:800;}"], null);
var G__29351 = [];
var G__29352 = [];
var G__29353 = ((function (G__29349,G__29350,G__29351,G__29352){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h2",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__29349,G__29350,G__29351,G__29352))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__29349,G__29350,G__29351,G__29352,G__29353) : cljss.reagent.styled.call(null,G__29349,G__29350,G__29351,G__29352,G__29353));
})();

lib.components.core.h2.displayName = "lib.components.core.h2";
lib.components.core.h3 = (function (){var G__29354 = "lib_components_core__h3";
var G__29355 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__h3{font-size:16px;line-height:22px;font-weight:700;margin-top:9px;margin-bottom:3px;border-bottom:var(--var-lib_components_core__h3-0);}",".lib_components_core__h3 b{font-weight:800;}"], null);
var G__29356 = [["--var-lib_components_core__h3-0",["2px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib.components.core.dark_white)].join('')]];
var G__29357 = [];
var G__29358 = ((function (G__29354,G__29355,G__29356,G__29357){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h3",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__29354,G__29355,G__29356,G__29357))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__29354,G__29355,G__29356,G__29357,G__29358) : cljss.reagent.styled.call(null,G__29354,G__29355,G__29356,G__29357,G__29358));
})();

lib.components.core.h3.displayName = "lib.components.core.h3";
lib.components.core.blockquote = (function (){var G__29359 = "lib_components_core__blockquote";
var G__29360 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__blockquote{margin:0px;padding-left:23px;font-style:italic;border-left:var(--var-lib_components_core__blockquote-0);}"], null);
var G__29361 = [["--var-lib_components_core__blockquote-0",["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib.components.core.grey)].join('')]];
var G__29362 = [];
var G__29363 = ((function (G__29359,G__29360,G__29361,G__29362){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"blockquote",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__29359,G__29360,G__29361,G__29362))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__29359,G__29360,G__29361,G__29362,G__29363) : cljss.reagent.styled.call(null,G__29359,G__29360,G__29361,G__29362,G__29363));
})();

lib.components.core.blockquote.displayName = "lib.components.core.blockquote";
lib.components.core.img = (function (){var G__29364 = "lib_components_core__img";
var G__29365 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__img{}"], null);
var G__29366 = [];
var G__29367 = [];
var G__29368 = ((function (G__29364,G__29365,G__29366,G__29367){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"img",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__29364,G__29365,G__29366,G__29367))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__29364,G__29365,G__29366,G__29367,G__29368) : cljss.reagent.styled.call(null,G__29364,G__29365,G__29366,G__29367,G__29368));
})();

lib.components.core.img.displayName = "lib.components.core.img";
/**
 * feather svg icon
 *   names: https://feathericons.com/
 *   svg-attrs: https://github.com/feathericons/feather#parameters
 */
lib.components.core.icon = (function lib$components$core$icon(var_args){
var G__29370 = arguments.length;
switch (G__29370) {
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

lib.components.core.block_placeholder_bar = (function (){var G__29372 = "lib_components_core__block-placeholder-bar";
var G__29373 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__block-placeholder-bar{position:absolute;right:0;heith:100%;display:flex;align-items:center;justify-content:center;}"], null);
var G__29374 = [];
var G__29375 = [];
var G__29376 = ((function (G__29372,G__29373,G__29374,G__29375){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__29372,G__29373,G__29374,G__29375))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__29372,G__29373,G__29374,G__29375,G__29376) : cljss.reagent.styled.call(null,G__29372,G__29373,G__29374,G__29375,G__29376));
})();

lib.components.core.block_placeholder_bar.displayName = "lib.components.core.block-placeholder-bar";
lib.components.core.block_placeholder_button = (function (){var G__29377 = "lib_components_core__block-placeholder-button";
var G__29378 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__block-placeholder-button{padding-left:5px;padding-right:5px;height:100%;opacity:0.3;transition:opacity 0.2s;animation:var(--var-lib_components_core__block-placeholder-button-0);}",".lib_components_core__block-placeholder-button:hover{opacity:0.6;}"], null);
var G__29379 = [["--var-lib_components_core__block-placeholder-button-0",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib.components.core.fade_in((0),0.3))," 0.3s ease"].join('')]];
var G__29380 = [];
var G__29381 = ((function (G__29377,G__29378,G__29379,G__29380){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"button",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__29377,G__29378,G__29379,G__29380))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__29377,G__29378,G__29379,G__29380,G__29381) : cljss.reagent.styled.call(null,G__29377,G__29378,G__29379,G__29380,G__29381));
})();

lib.components.core.block_placeholder_button.displayName = "lib.components.core.block-placeholder-button";

//# sourceMappingURL=lib.components.core.js.map
