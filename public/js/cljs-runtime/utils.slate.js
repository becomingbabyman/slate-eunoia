goog.provide('utils.slate');
goog.require('cljs.core');
goog.require('reagent.core');
var module$node_modules$slate$lib$slate=shadow.js.require("module$node_modules$slate$lib$slate", {});
var module$node_modules$slate_react$lib$slate_react=shadow.js.require("module$node_modules$slate_react$lib$slate_react", {});
utils.slate.editor = reagent.core.adapt_react_class(module$node_modules$slate_react$lib$slate_react.Editor);
utils.slate.edn__GT_slate = (function utils$slate$edn__GT_slate(edn_slate_document){
var G__26060 = cljs.core.clj__GT_js(edn_slate_document);
return module$node_modules$slate$lib$slate.Value.fromJSON(G__26060);
});

//# sourceMappingURL=utils.slate.js.map
