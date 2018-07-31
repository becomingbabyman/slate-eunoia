goog.provide('lib.plugins.trailing_block');
goog.require('cljs.core');
var module$node_modules$slate$lib$slate=shadow.js.require("module$node_modules$slate$lib$slate", {});
lib.plugins.trailing_block.trailing_block_type = "paragraph";
lib.plugins.trailing_block.make_trailing_block = (function lib$plugins$trailing_block$make_trailing_block(){
return module$node_modules$slate$lib$slate.Block.create(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),lib.plugins.trailing_block.trailing_block_type,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$slate$lib$slate.Text.create()], null)], null)));
});
lib.plugins.trailing_block.trailing_block_inserter = (function lib$plugins$trailing_block$trailing_block_inserter(node){
var last_index = node.nodes.count();
var block = lib.plugins.trailing_block.make_trailing_block();
return ((function (last_index,block){
return (function (change){
return change.insertNodeByKey(node.key,last_index,block);
});
;})(last_index,block))
});
lib.plugins.trailing_block.document_QMARK_ = (function lib$plugins$trailing_block$document_QMARK_(node){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.object,"document");
});
lib.plugins.trailing_block.ends_in_trailing_block_QMARK_ = (function lib$plugins$trailing_block$ends_in_trailing_block_QMARK_(node){
var G__27879 = node.nodes;
var G__27879__$1 = (((G__27879 == null))?null:G__27879.last());
var G__27879__$2 = (((G__27879__$1 == null))?null:(G__27879__$1["type"]));
if((G__27879__$2 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__27879__$2,lib.plugins.trailing_block.trailing_block_type);
}
});
lib.plugins.trailing_block.ends_in_empty_block_QMARK_ = (function lib$plugins$trailing_block$ends_in_empty_block_QMARK_(node){
var G__27880 = node.nodes;
var G__27880__$1 = (((G__27880 == null))?null:G__27880.last());
if((G__27880__$1 == null)){
return null;
} else {
return (G__27880__$1["isEmpty"]);
}
});
lib.plugins.trailing_block.validate_node = (function lib$plugins$trailing_block$validate_node(node){
if(cljs.core.truth_((function (){var and__3938__auto__ = lib.plugins.trailing_block.document_QMARK_(node);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not((function (){var and__3938__auto____$1 = lib.plugins.trailing_block.ends_in_trailing_block_QMARK_(node);
if(cljs.core.truth_(and__3938__auto____$1)){
return lib.plugins.trailing_block.ends_in_empty_block_QMARK_(node);
} else {
return and__3938__auto____$1;
}
})());
} else {
return and__3938__auto__;
}
})())){
return lib.plugins.trailing_block.trailing_block_inserter(node);
} else {
return null;
}
});
/**
 * Ensures there is always an empty block at the end of a doc
 */
lib.plugins.trailing_block.trailing_block = (function lib$plugins$trailing_block$trailing_block(var_args){
var G__27882 = arguments.length;
switch (G__27882) {
case 1:
return lib.plugins.trailing_block.trailing_block.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return lib.plugins.trailing_block.trailing_block.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lib.plugins.trailing_block.trailing_block.cljs$core$IFn$_invoke$arity$1 = (function (options){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"validateNode","validateNode",-1060267609),lib.plugins.trailing_block.validate_node], null);
});

lib.plugins.trailing_block.trailing_block.cljs$core$IFn$_invoke$arity$0 = (function (){
return lib.plugins.trailing_block.trailing_block.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

lib.plugins.trailing_block.trailing_block.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=lib.plugins.trailing_block.js.map
