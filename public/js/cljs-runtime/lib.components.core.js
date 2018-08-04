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
return cljss.core.css("lib_components_core__editor-style",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__editor-style{line-height:26px;font-size:16px;-webkit-print-color-adjust:exact;font-weight:400;-webkit-font-smoothing:antialiased;padding:10px;font-family:-apple-system, BlinkMacSystemFont, San Francisco, sans-serif;color:var(--var-lib_components_core__editor-style-0);-webkit-tap-highlight-color:var(--var-lib_components_core__editor-style-1);}"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-lib_components_core__editor-style-0",lib.components.core.black], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-lib_components_core__editor-style-1",lib.components.core.transparent], null)], null));
});
cljss.core.css("*","*{padding:0;margin:0;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css("button","button{background:none;border:none;cursor:pointer;outline:none;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css("button:active","button:active{position:relative;top:1px;}",cljs.core.PersistentVector.EMPTY);
lib.components.core.b = (function (){var G__35741 = "lib_components_core__b";
var G__35742 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__b{font-weight:700;}"], null);
var G__35743 = [];
var G__35744 = [];
var G__35745 = ((function (G__35741,G__35742,G__35743,G__35744){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__35741,G__35742,G__35743,G__35744))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__35741,G__35742,G__35743,G__35744,G__35745) : cljss.reagent.styled.call(null,G__35741,G__35742,G__35743,G__35744,G__35745));
})();

lib.components.core.b.displayName = "lib.components.core.b";
lib.components.core.i = (function (){var G__35746 = "lib_components_core__i";
var G__35747 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__i{}"], null);
var G__35748 = [];
var G__35749 = [];
var G__35750 = ((function (G__35746,G__35747,G__35748,G__35749){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"i",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__35746,G__35747,G__35748,G__35749))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__35746,G__35747,G__35748,G__35749,G__35750) : cljss.reagent.styled.call(null,G__35746,G__35747,G__35748,G__35749,G__35750));
})();

lib.components.core.i.displayName = "lib.components.core.i";
lib.components.core.del = (function (){var G__35751 = "lib_components_core__del";
var G__35752 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__del{text-decoration-color:var(--var-lib_components_core__del-0);}"], null);
var G__35753 = [["--var-lib_components_core__del-0",lib.components.core.pitch_black]];
var G__35754 = [];
var G__35755 = ((function (G__35751,G__35752,G__35753,G__35754){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"del",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__35751,G__35752,G__35753,G__35754))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__35751,G__35752,G__35753,G__35754,G__35755) : cljss.reagent.styled.call(null,G__35751,G__35752,G__35753,G__35754,G__35755));
})();

lib.components.core.del.displayName = "lib.components.core.del";
lib.components.core.mark = (function (){var G__35756 = "lib_components_core__mark";
var G__35757 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__mark{padding-top:0.1em;padding-bottom:0.1em;color:var(--var-lib_components_core__mark-0);background-color:var(--var-lib_components_core__mark-1);}"], null);
var G__35758 = [["--var-lib_components_core__mark-0",lib.components.core.black],["--var-lib_components_core__mark-1",lib.components.core.light_blue]];
var G__35759 = [];
var G__35760 = ((function (G__35756,G__35757,G__35758,G__35759){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"mark",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__35756,G__35757,G__35758,G__35759))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__35756,G__35757,G__35758,G__35759,G__35760) : cljss.reagent.styled.call(null,G__35756,G__35757,G__35758,G__35759,G__35760));
})();

lib.components.core.mark.displayName = "lib.components.core.mark";
lib.components.core.a = (function (){var G__35761 = "lib_components_core__a";
var G__35762 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__a{color:var(--var-lib_components_core__a-0);}"], null);
var G__35763 = [["--var-lib_components_core__a-0",lib.components.core.blue]];
var G__35764 = [];
var G__35765 = ((function (G__35761,G__35762,G__35763,G__35764){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__35761,G__35762,G__35763,G__35764))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__35761,G__35762,G__35763,G__35764,G__35765) : cljss.reagent.styled.call(null,G__35761,G__35762,G__35763,G__35764,G__35765));
})();

lib.components.core.a.displayName = "lib.components.core.a";
lib.components.core.h1 = (function (){var G__35766 = "lib_components_core__h1";
var G__35767 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__h1{font-size:30px;line-height:36px;font-weight:600;word-spacing:1px;margin-top:30px;margin-bottom:12px;}",".lib_components_core__h1 b{font-weight:800;}"], null);
var G__35768 = [];
var G__35769 = [];
var G__35770 = ((function (G__35766,G__35767,G__35768,G__35769){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h1",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__35766,G__35767,G__35768,G__35769))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__35766,G__35767,G__35768,G__35769,G__35770) : cljss.reagent.styled.call(null,G__35766,G__35767,G__35768,G__35769,G__35770));
})();

lib.components.core.h1.displayName = "lib.components.core.h1";
lib.components.core.h2 = (function (){var G__35771 = "lib_components_core__h2";
var G__35772 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__h2{font-size:21px;line-height:28px;font-weight:600;word-spacing:0.5px;margin-top:18px;margin-bottom:6px;}",".lib_components_core__h2 b{font-weight:800;}"], null);
var G__35773 = [];
var G__35774 = [];
var G__35775 = ((function (G__35771,G__35772,G__35773,G__35774){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h2",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__35771,G__35772,G__35773,G__35774))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__35771,G__35772,G__35773,G__35774,G__35775) : cljss.reagent.styled.call(null,G__35771,G__35772,G__35773,G__35774,G__35775));
})();

lib.components.core.h2.displayName = "lib.components.core.h2";
lib.components.core.h3 = (function (){var G__35776 = "lib_components_core__h3";
var G__35777 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__h3{font-size:16px;line-height:22px;font-weight:700;margin-top:9px;margin-bottom:3px;border-bottom:var(--var-lib_components_core__h3-0);}",".lib_components_core__h3 b{font-weight:800;}"], null);
var G__35778 = [["--var-lib_components_core__h3-0",["2px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib.components.core.light_grey)].join('')]];
var G__35779 = [];
var G__35780 = ((function (G__35776,G__35777,G__35778,G__35779){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h3",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__35776,G__35777,G__35778,G__35779))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__35776,G__35777,G__35778,G__35779,G__35780) : cljss.reagent.styled.call(null,G__35776,G__35777,G__35778,G__35779,G__35780));
})();

lib.components.core.h3.displayName = "lib.components.core.h3";
lib.components.core.blockquote = (function (){var G__35781 = "lib_components_core__blockquote";
var G__35782 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__blockquote{margin:0px;padding-left:23px;font-style:italic;border-left:var(--var-lib_components_core__blockquote-0);}"], null);
var G__35783 = [["--var-lib_components_core__blockquote-0",["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib.components.core.grey)].join('')]];
var G__35784 = [];
var G__35785 = ((function (G__35781,G__35782,G__35783,G__35784){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"blockquote",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__35781,G__35782,G__35783,G__35784))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__35781,G__35782,G__35783,G__35784,G__35785) : cljss.reagent.styled.call(null,G__35781,G__35782,G__35783,G__35784,G__35785));
})();

lib.components.core.blockquote.displayName = "lib.components.core.blockquote";
lib.components.core.img = (function (){var G__35786 = "lib_components_core__img";
var G__35787 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__img{}"], null);
var G__35788 = [];
var G__35789 = [];
var G__35790 = ((function (G__35786,G__35787,G__35788,G__35789){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"img",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__35786,G__35787,G__35788,G__35789))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__35786,G__35787,G__35788,G__35789,G__35790) : cljss.reagent.styled.call(null,G__35786,G__35787,G__35788,G__35789,G__35790));
})();

lib.components.core.img.displayName = "lib.components.core.img";
/**
 * feather svg icon
 *   names: https://feathericons.com/
 *   svg-attrs: https://github.com/feathericons/feather#parameters
 */
lib.components.core.icon = (function lib$components$core$icon(var_args){
var G__35792 = arguments.length;
switch (G__35792) {
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

lib.components.core.block_placeholder_bar = (function (){var G__35794 = "lib_components_core__block-placeholder-bar";
var G__35795 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__block-placeholder-bar{position:absolute;right:0;heith:100%;display:flex;align-items:center;justify-content:center;}"], null);
var G__35796 = [];
var G__35797 = [];
var G__35798 = ((function (G__35794,G__35795,G__35796,G__35797){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__35794,G__35795,G__35796,G__35797))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__35794,G__35795,G__35796,G__35797,G__35798) : cljss.reagent.styled.call(null,G__35794,G__35795,G__35796,G__35797,G__35798));
})();

lib.components.core.block_placeholder_bar.displayName = "lib.components.core.block-placeholder-bar";
lib.components.core.block_placeholder_button = (function (){var G__35799 = "lib_components_core__block-placeholder-button";
var G__35800 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__block-placeholder-button{padding-left:5px;padding-right:5px;heith:100%;opacity:0.3;transition:opacity 0.2s;animation:var(--var-lib_components_core__block-placeholder-button-0);}",".lib_components_core__block-placeholder-button:hover{opacity:0.6;}"], null);
var G__35801 = [["--var-lib_components_core__block-placeholder-button-0",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib.components.core.fade_in((0),0.3))," 0.3s ease"].join('')]];
var G__35802 = [];
var G__35803 = ((function (G__35799,G__35800,G__35801,G__35802){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"button",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__35799,G__35800,G__35801,G__35802))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__35799,G__35800,G__35801,G__35802,G__35803) : cljss.reagent.styled.call(null,G__35799,G__35800,G__35801,G__35802,G__35803));
})();

lib.components.core.block_placeholder_button.displayName = "lib.components.core.block-placeholder-button";

//# sourceMappingURL=lib.components.core.js.map
