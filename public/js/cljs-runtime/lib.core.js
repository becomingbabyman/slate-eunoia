goog.provide('lib.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('utils.slate');
goog.require('lib.plugins.collapse_on_escape');
goog.require('lib.plugins.trailing_block');
lib.core.editor_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ddd",new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"margin","margin",-995903681),(20)], null);
lib.core.sample_value = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"object","object",1474613949),"block",new cljs.core.Keyword(null,"type","type",1174270348),"paragraph",new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object","object",1474613949),"text",new cljs.core.Keyword(null,"leaves","leaves",-2143630574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"editor example block"], null)], null)], null)], null)], null)], null)], null)], null);
lib.core.slate_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(utils.slate.edn__GT_slate(lib.core.sample_value));
lib.core.on_slate_change = (function lib$core$on_slate_change(change){
return cljs.core.reset_BANG_(lib.core.slate_value,change.value);
});
lib.core.plugins = cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib.plugins.collapse_on_escape.collapse_on_escape.cljs$core$IFn$_invoke$arity$0(),lib.plugins.trailing_block.trailing_block.cljs$core$IFn$_invoke$arity$0()], null));
lib.core.eunoia_editor = (function lib$core$eunoia_editor(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [utils.slate.editor,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),lib.core.editor_style,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(lib.core.slate_value),new cljs.core.Keyword(null,"plugins","plugins",1900073717),lib.core.plugins,new cljs.core.Keyword(null,"on-change","on-change",-732046149),lib.core.on_slate_change], null)], null);
});

//# sourceMappingURL=lib.core.js.map
