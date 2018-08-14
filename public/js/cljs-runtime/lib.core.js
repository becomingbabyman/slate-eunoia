goog.provide('lib.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('util.slate');
goog.require('lib.components.core');
goog.require('lib.components.hover_menu');
goog.require('lib.placeholder');
goog.require('lib.plugins.features.header');
goog.require('lib.plugins.features.bold');
goog.require('lib.plugins.features.italic');
goog.require('lib.plugins.features.strikethrough');
goog.require('lib.plugins.features.highlight');
goog.require('lib.plugins.features.code');
goog.require('lib.plugins.features.code_block');
goog.require('lib.plugins.features.blockquote');
goog.require('lib.plugins.collapse_on_escape');
goog.require('lib.plugins.trailing_block');
goog.require('lib.plugins.backspace');
lib.core.sample_value_TODO_COLON__rm = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"object","object",1474613949),"block",new cljs.core.Keyword(null,"type","type",1174270348),"header1",new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object","object",1474613949),"text",new cljs.core.Keyword(null,"leaves","leaves",-2143630574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Header1"], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"object","object",1474613949),"block",new cljs.core.Keyword(null,"type","type",1174270348),"header2",new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object","object",1474613949),"text",new cljs.core.Keyword(null,"leaves","leaves",-2143630574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Header2"], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"object","object",1474613949),"block",new cljs.core.Keyword(null,"type","type",1174270348),"header3",new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object","object",1474613949),"text",new cljs.core.Keyword(null,"leaves","leaves",-2143630574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Header3"], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"object","object",1474613949),"block",new cljs.core.Keyword(null,"type","type",1174270348),"paragraph",new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object","object",1474613949),"text",new cljs.core.Keyword(null,"leaves","leaves",-2143630574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"paragraph example block"], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object","object",1474613949),"block",new cljs.core.Keyword(null,"type","type",1174270348),"paragraph"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"object","object",1474613949),"block",new cljs.core.Keyword(null,"type","type",1174270348),"blockquote",new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object","object",1474613949),"text",new cljs.core.Keyword(null,"leaves","leaves",-2143630574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"blockquote example block"], null)], null)], null)], null)], null)], null)], null)], null);
lib.core.slate_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(util.slate.edn__GT_slate(lib.core.sample_value_TODO_COLON__rm));
lib.core.on_slate_change = (function lib$core$on_slate_change(change){
console.log(change.value.toJSON());

return cljs.core.reset_BANG_(lib.core.slate_value,change.value);
});
lib.core.plugins = cljs.core.clj__GT_js(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib.plugins.backspace.backspace.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(lib.plugins.features.header.header.cljs$core$IFn$_invoke$arity$0()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(lib.plugins.features.bold.bold.cljs$core$IFn$_invoke$arity$0()),new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(lib.plugins.features.italic.italic.cljs$core$IFn$_invoke$arity$0()),new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(lib.plugins.features.strikethrough.strikethrough.cljs$core$IFn$_invoke$arity$0()),new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(lib.plugins.features.highlight.highlight.cljs$core$IFn$_invoke$arity$0()),new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(lib.plugins.features.code.code.cljs$core$IFn$_invoke$arity$0()),new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(lib.plugins.features.code_block.code_block.cljs$core$IFn$_invoke$arity$0()),new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(lib.plugins.features.blockquote.blockquote.cljs$core$IFn$_invoke$arity$0()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib.plugins.collapse_on_escape.collapse_on_escape.cljs$core$IFn$_invoke$arity$0(),lib.plugins.trailing_block.trailing_block.cljs$core$IFn$_invoke$arity$0()], null)], 0)));
lib.core.schema = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"paragraph","paragraph",296707709)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"header1","header1",201145393)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"header2","header2",-1154262713)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"header3","header3",323824015)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"code-block","code-block",-2113425141)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"blockquote","blockquote",372264190)], null)], null)], null)], null)], null)], null));
lib.core.eunoia_editor = (function lib$core$eunoia_editor(var_args){
var G__28241 = arguments.length;
switch (G__28241) {
case 1:
return lib.core.eunoia_editor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return lib.core.eunoia_editor.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lib.core.eunoia_editor.cljs$core$IFn$_invoke$arity$1 = (function (passed_in_props){
var initial_props = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(lib.core.slate_value),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Write something...",new cljs.core.Keyword(null,"plugins","plugins",1900073717),lib.core.plugins,new cljs.core.Keyword(null,"schema","schema",-1582001791),lib.core.schema,new cljs.core.Keyword(null,"render-placeholder","render-placeholder",829324561),lib.placeholder.render_placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),lib.core.on_slate_change], null);
var editor_props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial_props,passed_in_props], 0));
var hover_menu_props = cljs.core.select_keys(editor_props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-change","on-change",-732046149)], null));
var G__28242 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [util.slate.editor,editor_props], null);
var G__28243 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib.components.hover_menu.hover_menu,hover_menu_props], null);
return (lib.components.core.top_level_component.cljs$core$IFn$_invoke$arity$2 ? lib.components.core.top_level_component.cljs$core$IFn$_invoke$arity$2(G__28242,G__28243) : lib.components.core.top_level_component.call(null,G__28242,G__28243));
});

lib.core.eunoia_editor.cljs$core$IFn$_invoke$arity$0 = (function (){
return lib.core.eunoia_editor.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

lib.core.eunoia_editor.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=lib.core.js.map
