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
lib.components.core.top_level_component = (function (){var G__29156 = "lib_components_core__top-level-component";
var G__29157 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__top-level-component{line-height:26px;font-size:16px;-webkit-print-color-adjust:exact;font-weight:400;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:transparent;position:relative;font-family:-apple-system, BlinkMacSystemFont, San Francisco, sans-serif;color:var(--var-lib_components_core__top-level-component-0);}",".lib_components_core__top-level-component *{padding:0;margin:0;}",".lib_components_core__top-level-component button:active{position:relative;top:1px;}",".lib_components_core__top-level-component button{background:none;border:none;cursor:pointer;outline:none;}"], null);
var G__29158 = [["--var-lib_components_core__top-level-component-0",lib.components.core.black]];
var G__29159 = [];
var G__29160 = ((function (G__29156,G__29157,G__29158,G__29159){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__29156,G__29157,G__29158,G__29159))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__29156,G__29157,G__29158,G__29159,G__29160) : cljss.reagent.styled.call(null,G__29156,G__29157,G__29158,G__29159,G__29160));
})();

lib.components.core.top_level_component.displayName = "lib.components.core.top-level-component";
lib.components.core.b = (function (){var G__29161 = "lib_components_core__b";
var G__29162 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__b{font-weight:700;}"], null);
var G__29163 = [];
var G__29164 = [];
var G__29165 = ((function (G__29161,G__29162,G__29163,G__29164){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__29161,G__29162,G__29163,G__29164))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__29161,G__29162,G__29163,G__29164,G__29165) : cljss.reagent.styled.call(null,G__29161,G__29162,G__29163,G__29164,G__29165));
})();

lib.components.core.b.displayName = "lib.components.core.b";
lib.components.core.i = (function (){var G__29166 = "lib_components_core__i";
var G__29167 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__i{}"], null);
var G__29168 = [];
var G__29169 = [];
var G__29170 = ((function (G__29166,G__29167,G__29168,G__29169){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"i",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__29166,G__29167,G__29168,G__29169))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__29166,G__29167,G__29168,G__29169,G__29170) : cljss.reagent.styled.call(null,G__29166,G__29167,G__29168,G__29169,G__29170));
})();

lib.components.core.i.displayName = "lib.components.core.i";
lib.components.core.del = (function (){var G__29171 = "lib_components_core__del";
var G__29172 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__del{text-decoration-color:var(--var-lib_components_core__del-0);}"], null);
var G__29173 = [["--var-lib_components_core__del-0",lib.components.core.pitch_black]];
var G__29174 = [];
var G__29175 = ((function (G__29171,G__29172,G__29173,G__29174){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"del",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__29171,G__29172,G__29173,G__29174))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__29171,G__29172,G__29173,G__29174,G__29175) : cljss.reagent.styled.call(null,G__29171,G__29172,G__29173,G__29174,G__29175));
})();

lib.components.core.del.displayName = "lib.components.core.del";
lib.components.core.mark = (function (){var G__29176 = "lib_components_core__mark";
var G__29177 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__mark{padding-top:0.1em;padding-bottom:0.1em;color:var(--var-lib_components_core__mark-0);background-color:var(--var-lib_components_core__mark-1);}"], null);
var G__29178 = [["--var-lib_components_core__mark-0",lib.components.core.black],["--var-lib_components_core__mark-1",lib.components.core.light_blue]];
var G__29179 = [];
var G__29180 = ((function (G__29176,G__29177,G__29178,G__29179){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"mark",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__29176,G__29177,G__29178,G__29179))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__29176,G__29177,G__29178,G__29179,G__29180) : cljss.reagent.styled.call(null,G__29176,G__29177,G__29178,G__29179,G__29180));
})();

lib.components.core.mark.displayName = "lib.components.core.mark";
lib.components.core.a = (function (){var G__29181 = "lib_components_core__a";
var G__29182 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__a{color:var(--var-lib_components_core__a-0);}"], null);
var G__29183 = [["--var-lib_components_core__a-0",lib.components.core.blue]];
var G__29184 = [];
var G__29185 = ((function (G__29181,G__29182,G__29183,G__29184){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__29181,G__29182,G__29183,G__29184))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__29181,G__29182,G__29183,G__29184,G__29185) : cljss.reagent.styled.call(null,G__29181,G__29182,G__29183,G__29184,G__29185));
})();

lib.components.core.a.displayName = "lib.components.core.a";
lib.components.core.h1 = (function (){var G__29186 = "lib_components_core__h1";
var G__29187 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__h1{font-size:30px;line-height:36px;font-weight:600;word-spacing:1px;margin-top:30px;margin-bottom:12px;}",".lib_components_core__h1 b{font-weight:800;}"], null);
var G__29188 = [];
var G__29189 = [];
var G__29190 = ((function (G__29186,G__29187,G__29188,G__29189){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h1",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__29186,G__29187,G__29188,G__29189))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__29186,G__29187,G__29188,G__29189,G__29190) : cljss.reagent.styled.call(null,G__29186,G__29187,G__29188,G__29189,G__29190));
})();

lib.components.core.h1.displayName = "lib.components.core.h1";
lib.components.core.h2 = (function (){var G__29191 = "lib_components_core__h2";
var G__29192 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__h2{font-size:21px;line-height:28px;font-weight:600;word-spacing:0.5px;margin-top:18px;margin-bottom:6px;}",".lib_components_core__h2 b{font-weight:800;}"], null);
var G__29193 = [];
var G__29194 = [];
var G__29195 = ((function (G__29191,G__29192,G__29193,G__29194){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h2",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__29191,G__29192,G__29193,G__29194))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__29191,G__29192,G__29193,G__29194,G__29195) : cljss.reagent.styled.call(null,G__29191,G__29192,G__29193,G__29194,G__29195));
})();

lib.components.core.h2.displayName = "lib.components.core.h2";
lib.components.core.h3 = (function (){var G__29196 = "lib_components_core__h3";
var G__29197 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__h3{font-size:16px;line-height:22px;font-weight:700;margin-top:9px;margin-bottom:3px;border-bottom:var(--var-lib_components_core__h3-0);}",".lib_components_core__h3 b{font-weight:800;}"], null);
var G__29198 = [["--var-lib_components_core__h3-0",["2px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib.components.core.light_grey)].join('')]];
var G__29199 = [];
var G__29200 = ((function (G__29196,G__29197,G__29198,G__29199){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h3",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__29196,G__29197,G__29198,G__29199))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__29196,G__29197,G__29198,G__29199,G__29200) : cljss.reagent.styled.call(null,G__29196,G__29197,G__29198,G__29199,G__29200));
})();

lib.components.core.h3.displayName = "lib.components.core.h3";
lib.components.core.blockquote = (function (){var G__29201 = "lib_components_core__blockquote";
var G__29202 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__blockquote{margin:0px;padding-left:23px;font-style:italic;border-left:var(--var-lib_components_core__blockquote-0);}"], null);
var G__29203 = [["--var-lib_components_core__blockquote-0",["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib.components.core.grey)].join('')]];
var G__29204 = [];
var G__29205 = ((function (G__29201,G__29202,G__29203,G__29204){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"blockquote",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__29201,G__29202,G__29203,G__29204))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__29201,G__29202,G__29203,G__29204,G__29205) : cljss.reagent.styled.call(null,G__29201,G__29202,G__29203,G__29204,G__29205));
})();

lib.components.core.blockquote.displayName = "lib.components.core.blockquote";
lib.components.core.img = (function (){var G__29206 = "lib_components_core__img";
var G__29207 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__img{}"], null);
var G__29208 = [];
var G__29209 = [];
var G__29210 = ((function (G__29206,G__29207,G__29208,G__29209){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"img",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__29206,G__29207,G__29208,G__29209))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__29206,G__29207,G__29208,G__29209,G__29210) : cljss.reagent.styled.call(null,G__29206,G__29207,G__29208,G__29209,G__29210));
})();

lib.components.core.img.displayName = "lib.components.core.img";
/**
 * feather svg icon
 *   names: https://feathericons.com/
 *   svg-attrs: https://github.com/feathericons/feather#parameters
 */
lib.components.core.icon = (function lib$components$core$icon(var_args){
var G__29212 = arguments.length;
switch (G__29212) {
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

lib.components.core.block_placeholder_bar = (function (){var G__29214 = "lib_components_core__block-placeholder-bar";
var G__29215 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__block-placeholder-bar{position:absolute;right:0;heith:100%;display:flex;align-items:center;justify-content:center;}"], null);
var G__29216 = [];
var G__29217 = [];
var G__29218 = ((function (G__29214,G__29215,G__29216,G__29217){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__29214,G__29215,G__29216,G__29217))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__29214,G__29215,G__29216,G__29217,G__29218) : cljss.reagent.styled.call(null,G__29214,G__29215,G__29216,G__29217,G__29218));
})();

lib.components.core.block_placeholder_bar.displayName = "lib.components.core.block-placeholder-bar";
lib.components.core.block_placeholder_button = (function (){var G__29219 = "lib_components_core__block-placeholder-button";
var G__29220 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__block-placeholder-button{padding-left:5px;padding-right:5px;height:100%;opacity:0.3;transition:opacity 0.2s;animation:var(--var-lib_components_core__block-placeholder-button-0);}",".lib_components_core__block-placeholder-button:hover{opacity:0.6;}"], null);
var G__29221 = [["--var-lib_components_core__block-placeholder-button-0",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib.components.core.fade_in((0),0.3))," 0.3s ease"].join('')]];
var G__29222 = [];
var G__29223 = ((function (G__29219,G__29220,G__29221,G__29222){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"button",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__29219,G__29220,G__29221,G__29222))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__29219,G__29220,G__29221,G__29222,G__29223) : cljss.reagent.styled.call(null,G__29219,G__29220,G__29221,G__29222,G__29223));
})();

lib.components.core.block_placeholder_button.displayName = "lib.components.core.block-placeholder-button";

//# sourceMappingURL=lib.components.core.js.map
