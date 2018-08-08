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
lib.components.core.top_level_component = (function (){var G__31201 = "lib_components_core__top-level-component";
var G__31202 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__top-level-component{line-height:26px;font-size:16px;-webkit-print-color-adjust:exact;font-weight:400;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:transparent;font-family:-apple-system, BlinkMacSystemFont, San Francisco, sans-serif;color:var(--var-lib_components_core__top-level-component-0);}",".lib_components_core__top-level-component *{padding:0;margin:0;}",".lib_components_core__top-level-component button:active{position:relative;top:1px;}",".lib_components_core__top-level-component button{background:none;border:none;cursor:pointer;outline:none;}"], null);
var G__31203 = [["--var-lib_components_core__top-level-component-0",lib.components.core.black]];
var G__31204 = [];
var G__31205 = ((function (G__31201,G__31202,G__31203,G__31204){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__31201,G__31202,G__31203,G__31204))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__31201,G__31202,G__31203,G__31204,G__31205) : cljss.reagent.styled.call(null,G__31201,G__31202,G__31203,G__31204,G__31205));
})();

lib.components.core.top_level_component.displayName = "lib.components.core.top-level-component";
lib.components.core.b = (function (){var G__31206 = "lib_components_core__b";
var G__31207 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__b{font-weight:700;}"], null);
var G__31208 = [];
var G__31209 = [];
var G__31210 = ((function (G__31206,G__31207,G__31208,G__31209){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__31206,G__31207,G__31208,G__31209))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__31206,G__31207,G__31208,G__31209,G__31210) : cljss.reagent.styled.call(null,G__31206,G__31207,G__31208,G__31209,G__31210));
})();

lib.components.core.b.displayName = "lib.components.core.b";
lib.components.core.i = (function (){var G__31211 = "lib_components_core__i";
var G__31212 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__i{}"], null);
var G__31213 = [];
var G__31214 = [];
var G__31215 = ((function (G__31211,G__31212,G__31213,G__31214){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"i",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__31211,G__31212,G__31213,G__31214))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__31211,G__31212,G__31213,G__31214,G__31215) : cljss.reagent.styled.call(null,G__31211,G__31212,G__31213,G__31214,G__31215));
})();

lib.components.core.i.displayName = "lib.components.core.i";
lib.components.core.del = (function (){var G__31216 = "lib_components_core__del";
var G__31217 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__del{text-decoration-color:var(--var-lib_components_core__del-0);}"], null);
var G__31218 = [["--var-lib_components_core__del-0",lib.components.core.pitch_black]];
var G__31219 = [];
var G__31220 = ((function (G__31216,G__31217,G__31218,G__31219){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"del",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__31216,G__31217,G__31218,G__31219))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__31216,G__31217,G__31218,G__31219,G__31220) : cljss.reagent.styled.call(null,G__31216,G__31217,G__31218,G__31219,G__31220));
})();

lib.components.core.del.displayName = "lib.components.core.del";
lib.components.core.mark = (function (){var G__31221 = "lib_components_core__mark";
var G__31222 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__mark{padding-top:0.1em;padding-bottom:0.1em;color:var(--var-lib_components_core__mark-0);background-color:var(--var-lib_components_core__mark-1);}"], null);
var G__31223 = [["--var-lib_components_core__mark-0",lib.components.core.black],["--var-lib_components_core__mark-1",lib.components.core.light_blue]];
var G__31224 = [];
var G__31225 = ((function (G__31221,G__31222,G__31223,G__31224){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"mark",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__31221,G__31222,G__31223,G__31224))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__31221,G__31222,G__31223,G__31224,G__31225) : cljss.reagent.styled.call(null,G__31221,G__31222,G__31223,G__31224,G__31225));
})();

lib.components.core.mark.displayName = "lib.components.core.mark";
lib.components.core.a = (function (){var G__31226 = "lib_components_core__a";
var G__31227 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__a{color:var(--var-lib_components_core__a-0);}"], null);
var G__31228 = [["--var-lib_components_core__a-0",lib.components.core.blue]];
var G__31229 = [];
var G__31230 = ((function (G__31226,G__31227,G__31228,G__31229){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__31226,G__31227,G__31228,G__31229))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__31226,G__31227,G__31228,G__31229,G__31230) : cljss.reagent.styled.call(null,G__31226,G__31227,G__31228,G__31229,G__31230));
})();

lib.components.core.a.displayName = "lib.components.core.a";
lib.components.core.h1 = (function (){var G__31231 = "lib_components_core__h1";
var G__31232 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__h1{font-size:30px;line-height:36px;font-weight:600;word-spacing:1px;margin-top:30px;margin-bottom:12px;}",".lib_components_core__h1 b{font-weight:800;}"], null);
var G__31233 = [];
var G__31234 = [];
var G__31235 = ((function (G__31231,G__31232,G__31233,G__31234){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h1",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__31231,G__31232,G__31233,G__31234))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__31231,G__31232,G__31233,G__31234,G__31235) : cljss.reagent.styled.call(null,G__31231,G__31232,G__31233,G__31234,G__31235));
})();

lib.components.core.h1.displayName = "lib.components.core.h1";
lib.components.core.h2 = (function (){var G__31236 = "lib_components_core__h2";
var G__31237 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__h2{font-size:21px;line-height:28px;font-weight:600;word-spacing:0.5px;margin-top:18px;margin-bottom:6px;}",".lib_components_core__h2 b{font-weight:800;}"], null);
var G__31238 = [];
var G__31239 = [];
var G__31240 = ((function (G__31236,G__31237,G__31238,G__31239){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h2",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__31236,G__31237,G__31238,G__31239))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__31236,G__31237,G__31238,G__31239,G__31240) : cljss.reagent.styled.call(null,G__31236,G__31237,G__31238,G__31239,G__31240));
})();

lib.components.core.h2.displayName = "lib.components.core.h2";
lib.components.core.h3 = (function (){var G__31241 = "lib_components_core__h3";
var G__31242 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__h3{font-size:16px;line-height:22px;font-weight:700;margin-top:9px;margin-bottom:3px;border-bottom:var(--var-lib_components_core__h3-0);}",".lib_components_core__h3 b{font-weight:800;}"], null);
var G__31243 = [["--var-lib_components_core__h3-0",["2px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib.components.core.dark_white)].join('')]];
var G__31244 = [];
var G__31245 = ((function (G__31241,G__31242,G__31243,G__31244){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h3",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__31241,G__31242,G__31243,G__31244))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__31241,G__31242,G__31243,G__31244,G__31245) : cljss.reagent.styled.call(null,G__31241,G__31242,G__31243,G__31244,G__31245));
})();

lib.components.core.h3.displayName = "lib.components.core.h3";
lib.components.core.blockquote = (function (){var G__31246 = "lib_components_core__blockquote";
var G__31247 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__blockquote{margin:0px;padding-left:23px;font-style:italic;border-left:var(--var-lib_components_core__blockquote-0);}"], null);
var G__31248 = [["--var-lib_components_core__blockquote-0",["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib.components.core.grey)].join('')]];
var G__31249 = [];
var G__31250 = ((function (G__31246,G__31247,G__31248,G__31249){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"blockquote",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__31246,G__31247,G__31248,G__31249))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__31246,G__31247,G__31248,G__31249,G__31250) : cljss.reagent.styled.call(null,G__31246,G__31247,G__31248,G__31249,G__31250));
})();

lib.components.core.blockquote.displayName = "lib.components.core.blockquote";
lib.components.core.img = (function (){var G__31251 = "lib_components_core__img";
var G__31252 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__img{}"], null);
var G__31253 = [];
var G__31254 = [];
var G__31255 = ((function (G__31251,G__31252,G__31253,G__31254){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"img",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__31251,G__31252,G__31253,G__31254))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__31251,G__31252,G__31253,G__31254,G__31255) : cljss.reagent.styled.call(null,G__31251,G__31252,G__31253,G__31254,G__31255));
})();

lib.components.core.img.displayName = "lib.components.core.img";
/**
 * feather svg icon
 *   names: https://feathericons.com/
 *   svg-attrs: https://github.com/feathericons/feather#parameters
 */
lib.components.core.icon = (function lib$components$core$icon(var_args){
var G__31257 = arguments.length;
switch (G__31257) {
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

lib.components.core.block_placeholder_bar = (function (){var G__31259 = "lib_components_core__block-placeholder-bar";
var G__31260 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__block-placeholder-bar{position:absolute;right:0;heith:100%;display:flex;align-items:center;justify-content:center;}"], null);
var G__31261 = [];
var G__31262 = [];
var G__31263 = ((function (G__31259,G__31260,G__31261,G__31262){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__31259,G__31260,G__31261,G__31262))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__31259,G__31260,G__31261,G__31262,G__31263) : cljss.reagent.styled.call(null,G__31259,G__31260,G__31261,G__31262,G__31263));
})();

lib.components.core.block_placeholder_bar.displayName = "lib.components.core.block-placeholder-bar";
lib.components.core.block_placeholder_button = (function (){var G__31264 = "lib_components_core__block-placeholder-button";
var G__31265 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__block-placeholder-button{padding-left:5px;padding-right:5px;height:100%;opacity:0.3;transition:opacity 0.2s;animation:var(--var-lib_components_core__block-placeholder-button-0);}",".lib_components_core__block-placeholder-button:hover{opacity:0.6;}"], null);
var G__31266 = [["--var-lib_components_core__block-placeholder-button-0",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib.components.core.fade_in((0),0.3))," 0.3s ease"].join('')]];
var G__31267 = [];
var G__31268 = ((function (G__31264,G__31265,G__31266,G__31267){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"button",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__31264,G__31265,G__31266,G__31267))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__31264,G__31265,G__31266,G__31267,G__31268) : cljss.reagent.styled.call(null,G__31264,G__31265,G__31266,G__31267,G__31268));
})();

lib.components.core.block_placeholder_button.displayName = "lib.components.core.block-placeholder-button";

//# sourceMappingURL=lib.components.core.js.map
