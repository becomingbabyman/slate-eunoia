goog.provide('util.slate');
goog.require('cljs.core');
goog.require('reagent.core');
var module$node_modules$slate$lib$slate=shadow.js.require("module$node_modules$slate$lib$slate", {});
var module$node_modules$slate_react$lib$slate_react=shadow.js.require("module$node_modules$slate_react$lib$slate_react", {});
util.slate.editor = reagent.core.adapt_react_class(module$node_modules$slate_react$lib$slate_react.Editor);
util.slate.edn__GT_slate = (function util$slate$edn__GT_slate(edn_slate_document){
var G__28824 = cljs.core.clj__GT_js(edn_slate_document);
return module$node_modules$slate$lib$slate.Value.fromJSON(G__28824);
});

//# sourceMappingURL=util.slate.js.map
