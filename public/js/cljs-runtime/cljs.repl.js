goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31104){
var map__31105 = p__31104;
var map__31105__$1 = ((((!((map__31105 == null)))?(((((map__31105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31105):map__31105);
var m = map__31105__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31105__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31105__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31118_31156 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31119_31157 = null;
var count__31120_31158 = (0);
var i__31121_31159 = (0);
while(true){
if((i__31121_31159 < count__31120_31158)){
var f_31161 = chunk__31119_31157.cljs$core$IIndexed$_nth$arity$2(null,i__31121_31159);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31161], 0));


var G__31162 = seq__31118_31156;
var G__31163 = chunk__31119_31157;
var G__31164 = count__31120_31158;
var G__31165 = (i__31121_31159 + (1));
seq__31118_31156 = G__31162;
chunk__31119_31157 = G__31163;
count__31120_31158 = G__31164;
i__31121_31159 = G__31165;
continue;
} else {
var temp__5457__auto___31166 = cljs.core.seq(seq__31118_31156);
if(temp__5457__auto___31166){
var seq__31118_31167__$1 = temp__5457__auto___31166;
if(cljs.core.chunked_seq_QMARK_(seq__31118_31167__$1)){
var c__4351__auto___31168 = cljs.core.chunk_first(seq__31118_31167__$1);
var G__31169 = cljs.core.chunk_rest(seq__31118_31167__$1);
var G__31170 = c__4351__auto___31168;
var G__31171 = cljs.core.count(c__4351__auto___31168);
var G__31172 = (0);
seq__31118_31156 = G__31169;
chunk__31119_31157 = G__31170;
count__31120_31158 = G__31171;
i__31121_31159 = G__31172;
continue;
} else {
var f_31173 = cljs.core.first(seq__31118_31167__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31173], 0));


var G__31174 = cljs.core.next(seq__31118_31167__$1);
var G__31175 = null;
var G__31176 = (0);
var G__31177 = (0);
seq__31118_31156 = G__31174;
chunk__31119_31157 = G__31175;
count__31120_31158 = G__31176;
i__31121_31159 = G__31177;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31178 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_31178], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_31178)))?cljs.core.second(arglists_31178):arglists_31178)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31128_31186 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31129_31187 = null;
var count__31130_31188 = (0);
var i__31131_31189 = (0);
while(true){
if((i__31131_31189 < count__31130_31188)){
var vec__31132_31192 = chunk__31129_31187.cljs$core$IIndexed$_nth$arity$2(null,i__31131_31189);
var name_31193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31132_31192,(0),null);
var map__31135_31194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31132_31192,(1),null);
var map__31135_31195__$1 = ((((!((map__31135_31194 == null)))?(((((map__31135_31194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31135_31194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31135_31194):map__31135_31194);
var doc_31196 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31135_31195__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31197 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31135_31195__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31193], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31197], 0));

if(cljs.core.truth_(doc_31196)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31196], 0));
} else {
}


var G__31206 = seq__31128_31186;
var G__31207 = chunk__31129_31187;
var G__31208 = count__31130_31188;
var G__31209 = (i__31131_31189 + (1));
seq__31128_31186 = G__31206;
chunk__31129_31187 = G__31207;
count__31130_31188 = G__31208;
i__31131_31189 = G__31209;
continue;
} else {
var temp__5457__auto___31210 = cljs.core.seq(seq__31128_31186);
if(temp__5457__auto___31210){
var seq__31128_31211__$1 = temp__5457__auto___31210;
if(cljs.core.chunked_seq_QMARK_(seq__31128_31211__$1)){
var c__4351__auto___31212 = cljs.core.chunk_first(seq__31128_31211__$1);
var G__31213 = cljs.core.chunk_rest(seq__31128_31211__$1);
var G__31214 = c__4351__auto___31212;
var G__31215 = cljs.core.count(c__4351__auto___31212);
var G__31216 = (0);
seq__31128_31186 = G__31213;
chunk__31129_31187 = G__31214;
count__31130_31188 = G__31215;
i__31131_31189 = G__31216;
continue;
} else {
var vec__31137_31217 = cljs.core.first(seq__31128_31211__$1);
var name_31218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31137_31217,(0),null);
var map__31140_31219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31137_31217,(1),null);
var map__31140_31220__$1 = ((((!((map__31140_31219 == null)))?(((((map__31140_31219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31140_31219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31140_31219):map__31140_31219);
var doc_31221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31140_31220__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31222 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31140_31220__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31218], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31222], 0));

if(cljs.core.truth_(doc_31221)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31221], 0));
} else {
}


var G__31227 = cljs.core.next(seq__31128_31211__$1);
var G__31228 = null;
var G__31229 = (0);
var G__31230 = (0);
seq__31128_31186 = G__31227;
chunk__31129_31187 = G__31228;
count__31130_31188 = G__31229;
i__31131_31189 = G__31230;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__31144 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31145 = null;
var count__31146 = (0);
var i__31147 = (0);
while(true){
if((i__31147 < count__31146)){
var role = chunk__31145.cljs$core$IIndexed$_nth$arity$2(null,i__31147);
var temp__5457__auto___31233__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31233__$1)){
var spec_31234 = temp__5457__auto___31233__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_31234)], 0));
} else {
}


var G__31235 = seq__31144;
var G__31236 = chunk__31145;
var G__31237 = count__31146;
var G__31238 = (i__31147 + (1));
seq__31144 = G__31235;
chunk__31145 = G__31236;
count__31146 = G__31237;
i__31147 = G__31238;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__31144);
if(temp__5457__auto____$1){
var seq__31144__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31144__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__31144__$1);
var G__31239 = cljs.core.chunk_rest(seq__31144__$1);
var G__31240 = c__4351__auto__;
var G__31241 = cljs.core.count(c__4351__auto__);
var G__31242 = (0);
seq__31144 = G__31239;
chunk__31145 = G__31240;
count__31146 = G__31241;
i__31147 = G__31242;
continue;
} else {
var role = cljs.core.first(seq__31144__$1);
var temp__5457__auto___31243__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31243__$2)){
var spec_31244 = temp__5457__auto___31243__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_31244)], 0));
} else {
}


var G__31245 = cljs.core.next(seq__31144__$1);
var G__31246 = null;
var G__31247 = (0);
var G__31248 = (0);
seq__31144 = G__31245;
chunk__31145 = G__31246;
count__31146 = G__31247;
i__31147 = G__31248;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=cljs.repl.js.map
