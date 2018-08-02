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
lib.components.core.b = (function (){var G__28751 = "lib_components_core__b";
var G__28752 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__b{font-weight:700;}"], null);
var G__28753 = [];
var G__28754 = [];
var G__28755 = ((function (G__28751,G__28752,G__28753,G__28754){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__28751,G__28752,G__28753,G__28754))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__28751,G__28752,G__28753,G__28754,G__28755) : cljss.reagent.styled.call(null,G__28751,G__28752,G__28753,G__28754,G__28755));
})();

lib.components.core.b.displayName = "lib.components.core.b";
lib.components.core.i = (function (){var G__28756 = "lib_components_core__i";
var G__28757 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__i{}"], null);
var G__28758 = [];
var G__28759 = [];
var G__28760 = ((function (G__28756,G__28757,G__28758,G__28759){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"i",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__28756,G__28757,G__28758,G__28759))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__28756,G__28757,G__28758,G__28759,G__28760) : cljss.reagent.styled.call(null,G__28756,G__28757,G__28758,G__28759,G__28760));
})();

lib.components.core.i.displayName = "lib.components.core.i";
lib.components.core.del = (function (){var G__28761 = "lib_components_core__del";
var G__28762 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__del{text-decoration-color:var(--var-lib_components_core__del-0);}"], null);
var G__28763 = [["--var-lib_components_core__del-0",lib.components.core.pitch_black]];
var G__28764 = [];
var G__28765 = ((function (G__28761,G__28762,G__28763,G__28764){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"del",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__28761,G__28762,G__28763,G__28764))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__28761,G__28762,G__28763,G__28764,G__28765) : cljss.reagent.styled.call(null,G__28761,G__28762,G__28763,G__28764,G__28765));
})();

lib.components.core.del.displayName = "lib.components.core.del";
lib.components.core.a = (function (){var G__28766 = "lib_components_core__a";
var G__28767 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__a{color:var(--var-lib_components_core__a-0);}"], null);
var G__28768 = [["--var-lib_components_core__a-0",lib.components.core.blue]];
var G__28769 = [];
var G__28770 = ((function (G__28766,G__28767,G__28768,G__28769){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__28766,G__28767,G__28768,G__28769))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__28766,G__28767,G__28768,G__28769,G__28770) : cljss.reagent.styled.call(null,G__28766,G__28767,G__28768,G__28769,G__28770));
})();

lib.components.core.a.displayName = "lib.components.core.a";
lib.components.core.h1 = (function (){var G__28771 = "lib_components_core__h1";
var G__28772 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__h1{font-size:30px;line-height:36px;font-weight:600;word-spacing:1px;margin-top:30px;margin-bottom:12px;}",".lib_components_core__h1 b{font-weight:800;}"], null);
var G__28773 = [];
var G__28774 = [];
var G__28775 = ((function (G__28771,G__28772,G__28773,G__28774){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h1",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__28771,G__28772,G__28773,G__28774))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__28771,G__28772,G__28773,G__28774,G__28775) : cljss.reagent.styled.call(null,G__28771,G__28772,G__28773,G__28774,G__28775));
})();

lib.components.core.h1.displayName = "lib.components.core.h1";
lib.components.core.h2 = (function (){var G__28776 = "lib_components_core__h2";
var G__28777 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__h2{font-size:21px;line-height:28px;font-weight:600;word-spacing:0.5px;margin-top:18px;margin-bottom:6px;}",".lib_components_core__h2 b{font-weight:800;}"], null);
var G__28778 = [];
var G__28779 = [];
var G__28780 = ((function (G__28776,G__28777,G__28778,G__28779){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h2",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__28776,G__28777,G__28778,G__28779))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__28776,G__28777,G__28778,G__28779,G__28780) : cljss.reagent.styled.call(null,G__28776,G__28777,G__28778,G__28779,G__28780));
})();

lib.components.core.h2.displayName = "lib.components.core.h2";
lib.components.core.h3 = (function (){var G__28781 = "lib_components_core__h3";
var G__28782 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__h3{font-size:16px;line-height:22px;font-weight:700;margin-top:9px;margin-bottom:3px;border-bottom:var(--var-lib_components_core__h3-0);}",".lib_components_core__h3 b{font-weight:800;}"], null);
var G__28783 = [["--var-lib_components_core__h3-0",["2px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib.components.core.light_grey)].join('')]];
var G__28784 = [];
var G__28785 = ((function (G__28781,G__28782,G__28783,G__28784){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h3",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__28781,G__28782,G__28783,G__28784))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__28781,G__28782,G__28783,G__28784,G__28785) : cljss.reagent.styled.call(null,G__28781,G__28782,G__28783,G__28784,G__28785));
})();

lib.components.core.h3.displayName = "lib.components.core.h3";
lib.components.core.blockquote = (function (){var G__28786 = "lib_components_core__blockquote";
var G__28787 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__blockquote{margin:0px;padding-left:23px;border-left:var(--var-lib_components_core__blockquote-0);}"], null);
var G__28788 = [["--var-lib_components_core__blockquote-0",["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib.components.core.grey)].join('')]];
var G__28789 = [];
var G__28790 = ((function (G__28786,G__28787,G__28788,G__28789){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"blockquote",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__28786,G__28787,G__28788,G__28789))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__28786,G__28787,G__28788,G__28789,G__28790) : cljss.reagent.styled.call(null,G__28786,G__28787,G__28788,G__28789,G__28790));
})();

lib.components.core.blockquote.displayName = "lib.components.core.blockquote";
lib.components.core.img = (function (){var G__28791 = "lib_components_core__img";
var G__28792 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".lib_components_core__img{}"], null);
var G__28793 = [];
var G__28794 = [];
var G__28795 = ((function (G__28791,G__28792,G__28793,G__28794){
return (function (p1__28228__28230__auto__,p2__28229__28231__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"img",cljs.core.clj__GT_js(p1__28228__28230__auto__),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,p2__28229__28231__auto__));
});})(G__28791,G__28792,G__28793,G__28794))
;
return (cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5 ? cljss.reagent.styled.cljs$core$IFn$_invoke$arity$5(G__28791,G__28792,G__28793,G__28794,G__28795) : cljss.reagent.styled.call(null,G__28791,G__28792,G__28793,G__28794,G__28795));
})();

lib.components.core.img.displayName = "lib.components.core.img";

//# sourceMappingURL=lib.components.core.js.map
