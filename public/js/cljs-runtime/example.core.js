goog.provide('example.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('lib.core');
goog.require('cljss.core');
example.core.root_component = (function example$core$root_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"slate-eunoia editor example"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ddd"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib.core.eunoia_editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null)], null)], null)], null);
});
example.core.mount_on_dom = (function example$core$mount_on_dom(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.core.root_component], null),document.getElementById("root"));
});
example.core.stop = (function example$core$stop(){
console.log("Stopping...");

return cljss.core.remove_styles_BANG_();
});
example.core.start = (function example$core$start(){
console.log("Starting...");

return example.core.mount_on_dom();
});
example.core.init = (function example$core$init(){
return example.core.start();
});
goog.exportSymbol('example.core.init', example.core.init);

//# sourceMappingURL=example.core.js.map
