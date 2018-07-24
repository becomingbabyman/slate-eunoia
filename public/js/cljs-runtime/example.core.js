goog.provide('example.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('lib.core');
example.core.root_component = (function example$core$root_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"slate-eunoia editor example"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib.core.eunoia_editor], null)], null);
});
example.core.mount_on_dom = (function example$core$mount_on_dom(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.core.root_component], null),document.getElementById("root"));
});
example.core.stop = (function example$core$stop(){
return console.log("Stopping...");
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
