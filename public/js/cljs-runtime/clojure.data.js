goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__31432){
var vec__31433 = p__31432;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31433,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31433,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__31438 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31438,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31438,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31438,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__31445 = arguments.length;
switch (G__31445) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4037__auto__ = cljs.core.count(a);
var y__4038__auto__ = cljs.core.count(b);
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if(((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4243__auto__ = (((x == null))?null:x);
var m__4244__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto__.call(null,x));
} else {
var m__4244__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if(((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4243__auto__ = (((a == null))?null:a);
var m__4244__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto__.call(null,a,b));
} else {
var m__4244__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__31466_31505 = clojure.data.equality_partition;
var G__31467_31506 = "null";
var G__31468_31507 = ((function (G__31466_31505,G__31467_31506){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__31466_31505,G__31467_31506))
;
goog.object.set(G__31466_31505,G__31467_31506,G__31468_31507);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__31469_31508 = clojure.data.equality_partition;
var G__31470_31509 = "string";
var G__31471_31510 = ((function (G__31469_31508,G__31470_31509){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__31469_31508,G__31470_31509))
;
goog.object.set(G__31469_31508,G__31470_31509,G__31471_31510);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__31479_31512 = clojure.data.equality_partition;
var G__31480_31513 = "number";
var G__31481_31514 = ((function (G__31479_31512,G__31480_31513){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__31479_31512,G__31480_31513))
;
goog.object.set(G__31479_31512,G__31480_31513,G__31481_31514);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__31485_31515 = clojure.data.equality_partition;
var G__31486_31516 = "array";
var G__31487_31517 = ((function (G__31485_31515,G__31486_31516){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__31485_31515,G__31486_31516))
;
goog.object.set(G__31485_31515,G__31486_31516,G__31487_31517);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__31489_31519 = clojure.data.equality_partition;
var G__31490_31520 = "function";
var G__31491_31521 = ((function (G__31489_31519,G__31490_31520){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__31489_31519,G__31490_31520))
;
goog.object.set(G__31489_31519,G__31490_31520,G__31491_31521);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__31492_31524 = clojure.data.equality_partition;
var G__31493_31525 = "boolean";
var G__31494_31526 = ((function (G__31492_31524,G__31493_31525){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__31492_31524,G__31493_31525))
;
goog.object.set(G__31492_31524,G__31493_31525,G__31494_31526);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__31496_31528 = clojure.data.equality_partition;
var G__31497_31529 = "_";
var G__31498_31530 = ((function (G__31496_31528,G__31497_31529){
return (function (x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__31496_31528,G__31497_31529))
;
goog.object.set(G__31496_31528,G__31497_31529,G__31498_31530);
goog.object.set(clojure.data.Diff,"null",true);

var G__31543_31588 = clojure.data.diff_similar;
var G__31544_31589 = "null";
var G__31545_31590 = ((function (G__31543_31588,G__31544_31589){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__31543_31588,G__31544_31589))
;
goog.object.set(G__31543_31588,G__31544_31589,G__31545_31590);

goog.object.set(clojure.data.Diff,"string",true);

var G__31549_31592 = clojure.data.diff_similar;
var G__31551_31593 = "string";
var G__31553_31594 = ((function (G__31549_31592,G__31551_31593){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__31549_31592,G__31551_31593))
;
goog.object.set(G__31549_31592,G__31551_31593,G__31553_31594);

goog.object.set(clojure.data.Diff,"number",true);

var G__31556_31597 = clojure.data.diff_similar;
var G__31557_31598 = "number";
var G__31558_31599 = ((function (G__31556_31597,G__31557_31598){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__31556_31597,G__31557_31598))
;
goog.object.set(G__31556_31597,G__31557_31598,G__31558_31599);

goog.object.set(clojure.data.Diff,"array",true);

var G__31562_31601 = clojure.data.diff_similar;
var G__31563_31602 = "array";
var G__31564_31603 = ((function (G__31562_31601,G__31563_31602){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__31562_31601,G__31563_31602))
;
goog.object.set(G__31562_31601,G__31563_31602,G__31564_31603);

goog.object.set(clojure.data.Diff,"function",true);

var G__31567_31605 = clojure.data.diff_similar;
var G__31568_31606 = "function";
var G__31569_31607 = ((function (G__31567_31605,G__31568_31606){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__31567_31605,G__31568_31606))
;
goog.object.set(G__31567_31605,G__31568_31606,G__31569_31607);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__31573_31610 = clojure.data.diff_similar;
var G__31574_31611 = "boolean";
var G__31575_31612 = ((function (G__31573_31610,G__31574_31611){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__31573_31610,G__31574_31611))
;
goog.object.set(G__31573_31610,G__31574_31611,G__31575_31612);

goog.object.set(clojure.data.Diff,"_",true);

var G__31579_31614 = clojure.data.diff_similar;
var G__31580_31615 = "_";
var G__31581_31616 = ((function (G__31579_31614,G__31580_31615){
return (function (a,b){
var fexpr__31586 = (function (){var G__31587 = clojure.data.equality_partition(a);
var G__31587__$1 = (((G__31587 instanceof cljs.core.Keyword))?G__31587.fqn:null);
switch (G__31587__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31587__$1)].join('')));

}
})();
return (fexpr__31586.cljs$core$IFn$_invoke$arity$2 ? fexpr__31586.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__31586.call(null,a,b));
});})(G__31579_31614,G__31580_31615))
;
goog.object.set(G__31579_31614,G__31580_31615,G__31581_31616);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
