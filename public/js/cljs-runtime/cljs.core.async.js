goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31426 = arguments.length;
switch (G__31426) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31427 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31427 = (function (f,blockable,meta31428){
this.f = f;
this.blockable = blockable;
this.meta31428 = meta31428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31429,meta31428__$1){
var self__ = this;
var _31429__$1 = this;
return (new cljs.core.async.t_cljs$core$async31427(self__.f,self__.blockable,meta31428__$1));
});

cljs.core.async.t_cljs$core$async31427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31429){
var self__ = this;
var _31429__$1 = this;
return self__.meta31428;
});

cljs.core.async.t_cljs$core$async31427.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31427.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31427.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31427.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31427.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31428","meta31428",572797462,null)], null);
});

cljs.core.async.t_cljs$core$async31427.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31427.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31427";

cljs.core.async.t_cljs$core$async31427.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async31427");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31427.
 */
cljs.core.async.__GT_t_cljs$core$async31427 = (function cljs$core$async$__GT_t_cljs$core$async31427(f__$1,blockable__$1,meta31428){
return (new cljs.core.async.t_cljs$core$async31427(f__$1,blockable__$1,meta31428));
});

}

return (new cljs.core.async.t_cljs$core$async31427(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31449 = arguments.length;
switch (G__31449) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31452 = arguments.length;
switch (G__31452) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31464 = arguments.length;
switch (G__31464) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_31478 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31478) : fn1.call(null,val_31478));
} else {
cljs.core.async.impl.dispatch.run(((function (val_31478,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31478) : fn1.call(null,val_31478));
});})(val_31478,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31502 = arguments.length;
switch (G__31502) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___31559 = n;
var x_31560 = (0);
while(true){
if((x_31560 < n__4408__auto___31559)){
(a[x_31560] = (0));

var G__31561 = (x_31560 + (1));
x_31560 = G__31561;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__31570 = (i + (1));
i = G__31570;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31576 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31576 = (function (flag,meta31577){
this.flag = flag;
this.meta31577 = meta31577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31578,meta31577__$1){
var self__ = this;
var _31578__$1 = this;
return (new cljs.core.async.t_cljs$core$async31576(self__.flag,meta31577__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31576.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31578){
var self__ = this;
var _31578__$1 = this;
return self__.meta31577;
});})(flag))
;

cljs.core.async.t_cljs$core$async31576.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31576.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31576.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31576.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31576.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31577","meta31577",-1324187780,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31576.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31576";

cljs.core.async.t_cljs$core$async31576.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async31576");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31576.
 */
cljs.core.async.__GT_t_cljs$core$async31576 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31576(flag__$1,meta31577){
return (new cljs.core.async.t_cljs$core$async31576(flag__$1,meta31577));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31576(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31622 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31622 = (function (flag,cb,meta31623){
this.flag = flag;
this.cb = cb;
this.meta31623 = meta31623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31624,meta31623__$1){
var self__ = this;
var _31624__$1 = this;
return (new cljs.core.async.t_cljs$core$async31622(self__.flag,self__.cb,meta31623__$1));
});

cljs.core.async.t_cljs$core$async31622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31624){
var self__ = this;
var _31624__$1 = this;
return self__.meta31623;
});

cljs.core.async.t_cljs$core$async31622.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31622.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async31622.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31622.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31622.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31623","meta31623",-542846247,null)], null);
});

cljs.core.async.t_cljs$core$async31622.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31622.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31622";

cljs.core.async.t_cljs$core$async31622.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async31622");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31622.
 */
cljs.core.async.__GT_t_cljs$core$async31622 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31622(flag__$1,cb__$1,meta31623){
return (new cljs.core.async.t_cljs$core$async31622(flag__$1,cb__$1,meta31623));
});

}

return (new cljs.core.async.t_cljs$core$async31622(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31641_SHARP_){
var G__31643 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31641_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31643) : fret.call(null,G__31643));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31642_SHARP_){
var G__31644 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31642_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31644) : fret.call(null,G__31644));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31653 = (i + (1));
i = G__31653;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31671 = arguments.length;
var i__4532__auto___31672 = (0);
while(true){
if((i__4532__auto___31672 < len__4531__auto___31671)){
args__4534__auto__.push((arguments[i__4532__auto___31672]));

var G__31673 = (i__4532__auto___31672 + (1));
i__4532__auto___31672 = G__31673;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31664){
var map__31665 = p__31664;
var map__31665__$1 = ((((!((map__31665 == null)))?(((((map__31665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31665):map__31665);
var opts = map__31665__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31656){
var G__31657 = cljs.core.first(seq31656);
var seq31656__$1 = cljs.core.next(seq31656);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31657,seq31656__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31679 = arguments.length;
switch (G__31679) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31348__auto___31770 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31348__auto___31770){
return (function (){
var f__31349__auto__ = (function (){var switch__30985__auto__ = ((function (c__31348__auto___31770){
return (function (state_31732){
var state_val_31733 = (state_31732[(1)]);
if((state_val_31733 === (7))){
var inst_31725 = (state_31732[(2)]);
var state_31732__$1 = state_31732;
var statearr_31736_31776 = state_31732__$1;
(statearr_31736_31776[(2)] = inst_31725);

(statearr_31736_31776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31733 === (1))){
var state_31732__$1 = state_31732;
var statearr_31737_31777 = state_31732__$1;
(statearr_31737_31777[(2)] = null);

(statearr_31737_31777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31733 === (4))){
var inst_31696 = (state_31732[(7)]);
var inst_31696__$1 = (state_31732[(2)]);
var inst_31700 = (inst_31696__$1 == null);
var state_31732__$1 = (function (){var statearr_31738 = state_31732;
(statearr_31738[(7)] = inst_31696__$1);

return statearr_31738;
})();
if(cljs.core.truth_(inst_31700)){
var statearr_31739_31778 = state_31732__$1;
(statearr_31739_31778[(1)] = (5));

} else {
var statearr_31740_31781 = state_31732__$1;
(statearr_31740_31781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31733 === (13))){
var state_31732__$1 = state_31732;
var statearr_31741_31782 = state_31732__$1;
(statearr_31741_31782[(2)] = null);

(statearr_31741_31782[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31733 === (6))){
var inst_31696 = (state_31732[(7)]);
var state_31732__$1 = state_31732;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31732__$1,(11),to,inst_31696);
} else {
if((state_val_31733 === (3))){
var inst_31729 = (state_31732[(2)]);
var state_31732__$1 = state_31732;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31732__$1,inst_31729);
} else {
if((state_val_31733 === (12))){
var state_31732__$1 = state_31732;
var statearr_31745_31787 = state_31732__$1;
(statearr_31745_31787[(2)] = null);

(statearr_31745_31787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31733 === (2))){
var state_31732__$1 = state_31732;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31732__$1,(4),from);
} else {
if((state_val_31733 === (11))){
var inst_31709 = (state_31732[(2)]);
var state_31732__$1 = state_31732;
if(cljs.core.truth_(inst_31709)){
var statearr_31746_31788 = state_31732__$1;
(statearr_31746_31788[(1)] = (12));

} else {
var statearr_31748_31789 = state_31732__$1;
(statearr_31748_31789[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31733 === (9))){
var state_31732__$1 = state_31732;
var statearr_31750_31790 = state_31732__$1;
(statearr_31750_31790[(2)] = null);

(statearr_31750_31790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31733 === (5))){
var state_31732__$1 = state_31732;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31753_31793 = state_31732__$1;
(statearr_31753_31793[(1)] = (8));

} else {
var statearr_31754_31794 = state_31732__$1;
(statearr_31754_31794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31733 === (14))){
var inst_31723 = (state_31732[(2)]);
var state_31732__$1 = state_31732;
var statearr_31756_31795 = state_31732__$1;
(statearr_31756_31795[(2)] = inst_31723);

(statearr_31756_31795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31733 === (10))){
var inst_31706 = (state_31732[(2)]);
var state_31732__$1 = state_31732;
var statearr_31760_31796 = state_31732__$1;
(statearr_31760_31796[(2)] = inst_31706);

(statearr_31760_31796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31733 === (8))){
var inst_31703 = cljs.core.async.close_BANG_(to);
var state_31732__$1 = state_31732;
var statearr_31762_31797 = state_31732__$1;
(statearr_31762_31797[(2)] = inst_31703);

(statearr_31762_31797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31348__auto___31770))
;
return ((function (switch__30985__auto__,c__31348__auto___31770){
return (function() {
var cljs$core$async$state_machine__30986__auto__ = null;
var cljs$core$async$state_machine__30986__auto____0 = (function (){
var statearr_31765 = [null,null,null,null,null,null,null,null];
(statearr_31765[(0)] = cljs$core$async$state_machine__30986__auto__);

(statearr_31765[(1)] = (1));

return statearr_31765;
});
var cljs$core$async$state_machine__30986__auto____1 = (function (state_31732){
while(true){
var ret_value__30987__auto__ = (function (){try{while(true){
var result__30988__auto__ = switch__30985__auto__(state_31732);
if(cljs.core.keyword_identical_QMARK_(result__30988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30988__auto__;
}
break;
}
}catch (e31766){if((e31766 instanceof Object)){
var ex__30989__auto__ = e31766;
var statearr_31767_31798 = state_31732;
(statearr_31767_31798[(5)] = ex__30989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31766;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31799 = state_31732;
state_31732 = G__31799;
continue;
} else {
return ret_value__30987__auto__;
}
break;
}
});
cljs$core$async$state_machine__30986__auto__ = function(state_31732){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30986__auto____1.call(this,state_31732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30986__auto____0;
cljs$core$async$state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30986__auto____1;
return cljs$core$async$state_machine__30986__auto__;
})()
;})(switch__30985__auto__,c__31348__auto___31770))
})();
var state__31350__auto__ = (function (){var statearr_31768 = (f__31349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31349__auto__.cljs$core$IFn$_invoke$arity$0() : f__31349__auto__.call(null));
(statearr_31768[(6)] = c__31348__auto___31770);

return statearr_31768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31350__auto__);
});})(c__31348__auto___31770))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__31805){
var vec__31806 = p__31805;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31806,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31806,(1),null);
var job = vec__31806;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31348__auto___32024 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31348__auto___32024,res,vec__31806,v,p,job,jobs,results){
return (function (){
var f__31349__auto__ = (function (){var switch__30985__auto__ = ((function (c__31348__auto___32024,res,vec__31806,v,p,job,jobs,results){
return (function (state_31813){
var state_val_31816 = (state_31813[(1)]);
if((state_val_31816 === (1))){
var state_31813__$1 = state_31813;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31813__$1,(2),res,v);
} else {
if((state_val_31816 === (2))){
var inst_31810 = (state_31813[(2)]);
var inst_31811 = cljs.core.async.close_BANG_(res);
var state_31813__$1 = (function (){var statearr_31818 = state_31813;
(statearr_31818[(7)] = inst_31810);

return statearr_31818;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31813__$1,inst_31811);
} else {
return null;
}
}
});})(c__31348__auto___32024,res,vec__31806,v,p,job,jobs,results))
;
return ((function (switch__30985__auto__,c__31348__auto___32024,res,vec__31806,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____0 = (function (){
var statearr_31821 = [null,null,null,null,null,null,null,null];
(statearr_31821[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__);

(statearr_31821[(1)] = (1));

return statearr_31821;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____1 = (function (state_31813){
while(true){
var ret_value__30987__auto__ = (function (){try{while(true){
var result__30988__auto__ = switch__30985__auto__(state_31813);
if(cljs.core.keyword_identical_QMARK_(result__30988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30988__auto__;
}
break;
}
}catch (e31823){if((e31823 instanceof Object)){
var ex__30989__auto__ = e31823;
var statearr_31824_32028 = state_31813;
(statearr_31824_32028[(5)] = ex__30989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31823;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32029 = state_31813;
state_31813 = G__32029;
continue;
} else {
return ret_value__30987__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__ = function(state_31813){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____1.call(this,state_31813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__;
})()
;})(switch__30985__auto__,c__31348__auto___32024,res,vec__31806,v,p,job,jobs,results))
})();
var state__31350__auto__ = (function (){var statearr_31827 = (f__31349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31349__auto__.cljs$core$IFn$_invoke$arity$0() : f__31349__auto__.call(null));
(statearr_31827[(6)] = c__31348__auto___32024);

return statearr_31827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31350__auto__);
});})(c__31348__auto___32024,res,vec__31806,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31830){
var vec__31832 = p__31830;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31832,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31832,(1),null);
var job = vec__31832;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___32033 = n;
var __32034 = (0);
while(true){
if((__32034 < n__4408__auto___32033)){
var G__31835_32035 = type;
var G__31835_32036__$1 = (((G__31835_32035 instanceof cljs.core.Keyword))?G__31835_32035.fqn:null);
switch (G__31835_32036__$1) {
case "compute":
var c__31348__auto___32040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32034,c__31348__auto___32040,G__31835_32035,G__31835_32036__$1,n__4408__auto___32033,jobs,results,process,async){
return (function (){
var f__31349__auto__ = (function (){var switch__30985__auto__ = ((function (__32034,c__31348__auto___32040,G__31835_32035,G__31835_32036__$1,n__4408__auto___32033,jobs,results,process,async){
return (function (state_31848){
var state_val_31849 = (state_31848[(1)]);
if((state_val_31849 === (1))){
var state_31848__$1 = state_31848;
var statearr_31850_32043 = state_31848__$1;
(statearr_31850_32043[(2)] = null);

(statearr_31850_32043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (2))){
var state_31848__$1 = state_31848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31848__$1,(4),jobs);
} else {
if((state_val_31849 === (3))){
var inst_31846 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31848__$1,inst_31846);
} else {
if((state_val_31849 === (4))){
var inst_31838 = (state_31848[(2)]);
var inst_31839 = process(inst_31838);
var state_31848__$1 = state_31848;
if(cljs.core.truth_(inst_31839)){
var statearr_31851_32046 = state_31848__$1;
(statearr_31851_32046[(1)] = (5));

} else {
var statearr_31852_32047 = state_31848__$1;
(statearr_31852_32047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (5))){
var state_31848__$1 = state_31848;
var statearr_31853_32048 = state_31848__$1;
(statearr_31853_32048[(2)] = null);

(statearr_31853_32048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (6))){
var state_31848__$1 = state_31848;
var statearr_31856_32049 = state_31848__$1;
(statearr_31856_32049[(2)] = null);

(statearr_31856_32049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (7))){
var inst_31844 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
var statearr_31858_32050 = state_31848__$1;
(statearr_31858_32050[(2)] = inst_31844);

(statearr_31858_32050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32034,c__31348__auto___32040,G__31835_32035,G__31835_32036__$1,n__4408__auto___32033,jobs,results,process,async))
;
return ((function (__32034,switch__30985__auto__,c__31348__auto___32040,G__31835_32035,G__31835_32036__$1,n__4408__auto___32033,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____0 = (function (){
var statearr_31859 = [null,null,null,null,null,null,null];
(statearr_31859[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__);

(statearr_31859[(1)] = (1));

return statearr_31859;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____1 = (function (state_31848){
while(true){
var ret_value__30987__auto__ = (function (){try{while(true){
var result__30988__auto__ = switch__30985__auto__(state_31848);
if(cljs.core.keyword_identical_QMARK_(result__30988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30988__auto__;
}
break;
}
}catch (e31860){if((e31860 instanceof Object)){
var ex__30989__auto__ = e31860;
var statearr_31861_32051 = state_31848;
(statearr_31861_32051[(5)] = ex__30989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31860;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32052 = state_31848;
state_31848 = G__32052;
continue;
} else {
return ret_value__30987__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__ = function(state_31848){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____1.call(this,state_31848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__;
})()
;})(__32034,switch__30985__auto__,c__31348__auto___32040,G__31835_32035,G__31835_32036__$1,n__4408__auto___32033,jobs,results,process,async))
})();
var state__31350__auto__ = (function (){var statearr_31862 = (f__31349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31349__auto__.cljs$core$IFn$_invoke$arity$0() : f__31349__auto__.call(null));
(statearr_31862[(6)] = c__31348__auto___32040);

return statearr_31862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31350__auto__);
});})(__32034,c__31348__auto___32040,G__31835_32035,G__31835_32036__$1,n__4408__auto___32033,jobs,results,process,async))
);


break;
case "async":
var c__31348__auto___32053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32034,c__31348__auto___32053,G__31835_32035,G__31835_32036__$1,n__4408__auto___32033,jobs,results,process,async){
return (function (){
var f__31349__auto__ = (function (){var switch__30985__auto__ = ((function (__32034,c__31348__auto___32053,G__31835_32035,G__31835_32036__$1,n__4408__auto___32033,jobs,results,process,async){
return (function (state_31875){
var state_val_31876 = (state_31875[(1)]);
if((state_val_31876 === (1))){
var state_31875__$1 = state_31875;
var statearr_31879_32054 = state_31875__$1;
(statearr_31879_32054[(2)] = null);

(statearr_31879_32054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31876 === (2))){
var state_31875__$1 = state_31875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31875__$1,(4),jobs);
} else {
if((state_val_31876 === (3))){
var inst_31873 = (state_31875[(2)]);
var state_31875__$1 = state_31875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31875__$1,inst_31873);
} else {
if((state_val_31876 === (4))){
var inst_31865 = (state_31875[(2)]);
var inst_31866 = async(inst_31865);
var state_31875__$1 = state_31875;
if(cljs.core.truth_(inst_31866)){
var statearr_31883_32055 = state_31875__$1;
(statearr_31883_32055[(1)] = (5));

} else {
var statearr_31884_32056 = state_31875__$1;
(statearr_31884_32056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31876 === (5))){
var state_31875__$1 = state_31875;
var statearr_31885_32057 = state_31875__$1;
(statearr_31885_32057[(2)] = null);

(statearr_31885_32057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31876 === (6))){
var state_31875__$1 = state_31875;
var statearr_31886_32058 = state_31875__$1;
(statearr_31886_32058[(2)] = null);

(statearr_31886_32058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31876 === (7))){
var inst_31871 = (state_31875[(2)]);
var state_31875__$1 = state_31875;
var statearr_31887_32059 = state_31875__$1;
(statearr_31887_32059[(2)] = inst_31871);

(statearr_31887_32059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32034,c__31348__auto___32053,G__31835_32035,G__31835_32036__$1,n__4408__auto___32033,jobs,results,process,async))
;
return ((function (__32034,switch__30985__auto__,c__31348__auto___32053,G__31835_32035,G__31835_32036__$1,n__4408__auto___32033,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____0 = (function (){
var statearr_31890 = [null,null,null,null,null,null,null];
(statearr_31890[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__);

(statearr_31890[(1)] = (1));

return statearr_31890;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____1 = (function (state_31875){
while(true){
var ret_value__30987__auto__ = (function (){try{while(true){
var result__30988__auto__ = switch__30985__auto__(state_31875);
if(cljs.core.keyword_identical_QMARK_(result__30988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30988__auto__;
}
break;
}
}catch (e31891){if((e31891 instanceof Object)){
var ex__30989__auto__ = e31891;
var statearr_31892_32064 = state_31875;
(statearr_31892_32064[(5)] = ex__30989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31891;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32065 = state_31875;
state_31875 = G__32065;
continue;
} else {
return ret_value__30987__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__ = function(state_31875){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____1.call(this,state_31875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__;
})()
;})(__32034,switch__30985__auto__,c__31348__auto___32053,G__31835_32035,G__31835_32036__$1,n__4408__auto___32033,jobs,results,process,async))
})();
var state__31350__auto__ = (function (){var statearr_31895 = (f__31349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31349__auto__.cljs$core$IFn$_invoke$arity$0() : f__31349__auto__.call(null));
(statearr_31895[(6)] = c__31348__auto___32053);

return statearr_31895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31350__auto__);
});})(__32034,c__31348__auto___32053,G__31835_32035,G__31835_32036__$1,n__4408__auto___32033,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31835_32036__$1)].join('')));

}

var G__32066 = (__32034 + (1));
__32034 = G__32066;
continue;
} else {
}
break;
}

var c__31348__auto___32067 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31348__auto___32067,jobs,results,process,async){
return (function (){
var f__31349__auto__ = (function (){var switch__30985__auto__ = ((function (c__31348__auto___32067,jobs,results,process,async){
return (function (state_31921){
var state_val_31922 = (state_31921[(1)]);
if((state_val_31922 === (1))){
var state_31921__$1 = state_31921;
var statearr_31923_32069 = state_31921__$1;
(statearr_31923_32069[(2)] = null);

(statearr_31923_32069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (2))){
var state_31921__$1 = state_31921;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31921__$1,(4),from);
} else {
if((state_val_31922 === (3))){
var inst_31919 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31921__$1,inst_31919);
} else {
if((state_val_31922 === (4))){
var inst_31900 = (state_31921[(7)]);
var inst_31900__$1 = (state_31921[(2)]);
var inst_31901 = (inst_31900__$1 == null);
var state_31921__$1 = (function (){var statearr_31924 = state_31921;
(statearr_31924[(7)] = inst_31900__$1);

return statearr_31924;
})();
if(cljs.core.truth_(inst_31901)){
var statearr_31925_32070 = state_31921__$1;
(statearr_31925_32070[(1)] = (5));

} else {
var statearr_31926_32071 = state_31921__$1;
(statearr_31926_32071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (5))){
var inst_31903 = cljs.core.async.close_BANG_(jobs);
var state_31921__$1 = state_31921;
var statearr_31929_32073 = state_31921__$1;
(statearr_31929_32073[(2)] = inst_31903);

(statearr_31929_32073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (6))){
var inst_31900 = (state_31921[(7)]);
var inst_31905 = (state_31921[(8)]);
var inst_31905__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31906 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31909 = [inst_31900,inst_31905__$1];
var inst_31910 = (new cljs.core.PersistentVector(null,2,(5),inst_31906,inst_31909,null));
var state_31921__$1 = (function (){var statearr_31930 = state_31921;
(statearr_31930[(8)] = inst_31905__$1);

return statearr_31930;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31921__$1,(8),jobs,inst_31910);
} else {
if((state_val_31922 === (7))){
var inst_31917 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
var statearr_31934_32077 = state_31921__$1;
(statearr_31934_32077[(2)] = inst_31917);

(statearr_31934_32077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (8))){
var inst_31905 = (state_31921[(8)]);
var inst_31912 = (state_31921[(2)]);
var state_31921__$1 = (function (){var statearr_31935 = state_31921;
(statearr_31935[(9)] = inst_31912);

return statearr_31935;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31921__$1,(9),results,inst_31905);
} else {
if((state_val_31922 === (9))){
var inst_31914 = (state_31921[(2)]);
var state_31921__$1 = (function (){var statearr_31936 = state_31921;
(statearr_31936[(10)] = inst_31914);

return statearr_31936;
})();
var statearr_31937_32078 = state_31921__$1;
(statearr_31937_32078[(2)] = null);

(statearr_31937_32078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__31348__auto___32067,jobs,results,process,async))
;
return ((function (switch__30985__auto__,c__31348__auto___32067,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____0 = (function (){
var statearr_31938 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31938[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__);

(statearr_31938[(1)] = (1));

return statearr_31938;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____1 = (function (state_31921){
while(true){
var ret_value__30987__auto__ = (function (){try{while(true){
var result__30988__auto__ = switch__30985__auto__(state_31921);
if(cljs.core.keyword_identical_QMARK_(result__30988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30988__auto__;
}
break;
}
}catch (e31939){if((e31939 instanceof Object)){
var ex__30989__auto__ = e31939;
var statearr_31940_32079 = state_31921;
(statearr_31940_32079[(5)] = ex__30989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31939;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32080 = state_31921;
state_31921 = G__32080;
continue;
} else {
return ret_value__30987__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__ = function(state_31921){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____1.call(this,state_31921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__;
})()
;})(switch__30985__auto__,c__31348__auto___32067,jobs,results,process,async))
})();
var state__31350__auto__ = (function (){var statearr_31943 = (f__31349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31349__auto__.cljs$core$IFn$_invoke$arity$0() : f__31349__auto__.call(null));
(statearr_31943[(6)] = c__31348__auto___32067);

return statearr_31943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31350__auto__);
});})(c__31348__auto___32067,jobs,results,process,async))
);


var c__31348__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31348__auto__,jobs,results,process,async){
return (function (){
var f__31349__auto__ = (function (){var switch__30985__auto__ = ((function (c__31348__auto__,jobs,results,process,async){
return (function (state_31986){
var state_val_31987 = (state_31986[(1)]);
if((state_val_31987 === (7))){
var inst_31982 = (state_31986[(2)]);
var state_31986__$1 = state_31986;
var statearr_31990_32081 = state_31986__$1;
(statearr_31990_32081[(2)] = inst_31982);

(statearr_31990_32081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (20))){
var state_31986__$1 = state_31986;
var statearr_31991_32082 = state_31986__$1;
(statearr_31991_32082[(2)] = null);

(statearr_31991_32082[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (1))){
var state_31986__$1 = state_31986;
var statearr_31994_32083 = state_31986__$1;
(statearr_31994_32083[(2)] = null);

(statearr_31994_32083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (4))){
var inst_31946 = (state_31986[(7)]);
var inst_31946__$1 = (state_31986[(2)]);
var inst_31947 = (inst_31946__$1 == null);
var state_31986__$1 = (function (){var statearr_31995 = state_31986;
(statearr_31995[(7)] = inst_31946__$1);

return statearr_31995;
})();
if(cljs.core.truth_(inst_31947)){
var statearr_31996_32084 = state_31986__$1;
(statearr_31996_32084[(1)] = (5));

} else {
var statearr_31997_32085 = state_31986__$1;
(statearr_31997_32085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (15))){
var inst_31960 = (state_31986[(8)]);
var state_31986__$1 = state_31986;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31986__$1,(18),to,inst_31960);
} else {
if((state_val_31987 === (21))){
var inst_31977 = (state_31986[(2)]);
var state_31986__$1 = state_31986;
var statearr_31998_32086 = state_31986__$1;
(statearr_31998_32086[(2)] = inst_31977);

(statearr_31998_32086[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (13))){
var inst_31979 = (state_31986[(2)]);
var state_31986__$1 = (function (){var statearr_31999 = state_31986;
(statearr_31999[(9)] = inst_31979);

return statearr_31999;
})();
var statearr_32000_32087 = state_31986__$1;
(statearr_32000_32087[(2)] = null);

(statearr_32000_32087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (6))){
var inst_31946 = (state_31986[(7)]);
var state_31986__$1 = state_31986;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31986__$1,(11),inst_31946);
} else {
if((state_val_31987 === (17))){
var inst_31972 = (state_31986[(2)]);
var state_31986__$1 = state_31986;
if(cljs.core.truth_(inst_31972)){
var statearr_32001_32088 = state_31986__$1;
(statearr_32001_32088[(1)] = (19));

} else {
var statearr_32002_32089 = state_31986__$1;
(statearr_32002_32089[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (3))){
var inst_31984 = (state_31986[(2)]);
var state_31986__$1 = state_31986;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31986__$1,inst_31984);
} else {
if((state_val_31987 === (12))){
var inst_31957 = (state_31986[(10)]);
var state_31986__$1 = state_31986;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31986__$1,(14),inst_31957);
} else {
if((state_val_31987 === (2))){
var state_31986__$1 = state_31986;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31986__$1,(4),results);
} else {
if((state_val_31987 === (19))){
var state_31986__$1 = state_31986;
var statearr_32003_32090 = state_31986__$1;
(statearr_32003_32090[(2)] = null);

(statearr_32003_32090[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (11))){
var inst_31957 = (state_31986[(2)]);
var state_31986__$1 = (function (){var statearr_32004 = state_31986;
(statearr_32004[(10)] = inst_31957);

return statearr_32004;
})();
var statearr_32005_32091 = state_31986__$1;
(statearr_32005_32091[(2)] = null);

(statearr_32005_32091[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (9))){
var state_31986__$1 = state_31986;
var statearr_32006_32092 = state_31986__$1;
(statearr_32006_32092[(2)] = null);

(statearr_32006_32092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (5))){
var state_31986__$1 = state_31986;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32007_32093 = state_31986__$1;
(statearr_32007_32093[(1)] = (8));

} else {
var statearr_32008_32094 = state_31986__$1;
(statearr_32008_32094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (14))){
var inst_31960 = (state_31986[(8)]);
var inst_31964 = (state_31986[(11)]);
var inst_31960__$1 = (state_31986[(2)]);
var inst_31963 = (inst_31960__$1 == null);
var inst_31964__$1 = cljs.core.not(inst_31963);
var state_31986__$1 = (function (){var statearr_32009 = state_31986;
(statearr_32009[(8)] = inst_31960__$1);

(statearr_32009[(11)] = inst_31964__$1);

return statearr_32009;
})();
if(inst_31964__$1){
var statearr_32012_32095 = state_31986__$1;
(statearr_32012_32095[(1)] = (15));

} else {
var statearr_32013_32096 = state_31986__$1;
(statearr_32013_32096[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (16))){
var inst_31964 = (state_31986[(11)]);
var state_31986__$1 = state_31986;
var statearr_32014_32097 = state_31986__$1;
(statearr_32014_32097[(2)] = inst_31964);

(statearr_32014_32097[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (10))){
var inst_31954 = (state_31986[(2)]);
var state_31986__$1 = state_31986;
var statearr_32016_32098 = state_31986__$1;
(statearr_32016_32098[(2)] = inst_31954);

(statearr_32016_32098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (18))){
var inst_31967 = (state_31986[(2)]);
var state_31986__$1 = state_31986;
var statearr_32017_32100 = state_31986__$1;
(statearr_32017_32100[(2)] = inst_31967);

(statearr_32017_32100[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (8))){
var inst_31951 = cljs.core.async.close_BANG_(to);
var state_31986__$1 = state_31986;
var statearr_32018_32101 = state_31986__$1;
(statearr_32018_32101[(2)] = inst_31951);

(statearr_32018_32101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31348__auto__,jobs,results,process,async))
;
return ((function (switch__30985__auto__,c__31348__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____0 = (function (){
var statearr_32020 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32020[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__);

(statearr_32020[(1)] = (1));

return statearr_32020;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____1 = (function (state_31986){
while(true){
var ret_value__30987__auto__ = (function (){try{while(true){
var result__30988__auto__ = switch__30985__auto__(state_31986);
if(cljs.core.keyword_identical_QMARK_(result__30988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30988__auto__;
}
break;
}
}catch (e32021){if((e32021 instanceof Object)){
var ex__30989__auto__ = e32021;
var statearr_32022_32102 = state_31986;
(statearr_32022_32102[(5)] = ex__30989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32021;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32103 = state_31986;
state_31986 = G__32103;
continue;
} else {
return ret_value__30987__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__ = function(state_31986){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____1.call(this,state_31986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30986__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30986__auto__;
})()
;})(switch__30985__auto__,c__31348__auto__,jobs,results,process,async))
})();
var state__31350__auto__ = (function (){var statearr_32023 = (f__31349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31349__auto__.cljs$core$IFn$_invoke$arity$0() : f__31349__auto__.call(null));
(statearr_32023[(6)] = c__31348__auto__);

return statearr_32023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31350__auto__);
});})(c__31348__auto__,jobs,results,process,async))
);

return c__31348__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32105 = arguments.length;
switch (G__32105) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32108 = arguments.length;
switch (G__32108) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32111 = arguments.length;
switch (G__32111) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__31348__auto___32160 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31348__auto___32160,tc,fc){
return (function (){
var f__31349__auto__ = (function (){var switch__30985__auto__ = ((function (c__31348__auto___32160,tc,fc){
return (function (state_32137){
var state_val_32138 = (state_32137[(1)]);
if((state_val_32138 === (7))){
var inst_32133 = (state_32137[(2)]);
var state_32137__$1 = state_32137;
var statearr_32139_32163 = state_32137__$1;
(statearr_32139_32163[(2)] = inst_32133);

(statearr_32139_32163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (1))){
var state_32137__$1 = state_32137;
var statearr_32140_32165 = state_32137__$1;
(statearr_32140_32165[(2)] = null);

(statearr_32140_32165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (4))){
var inst_32114 = (state_32137[(7)]);
var inst_32114__$1 = (state_32137[(2)]);
var inst_32115 = (inst_32114__$1 == null);
var state_32137__$1 = (function (){var statearr_32141 = state_32137;
(statearr_32141[(7)] = inst_32114__$1);

return statearr_32141;
})();
if(cljs.core.truth_(inst_32115)){
var statearr_32142_32167 = state_32137__$1;
(statearr_32142_32167[(1)] = (5));

} else {
var statearr_32143_32168 = state_32137__$1;
(statearr_32143_32168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (13))){
var state_32137__$1 = state_32137;
var statearr_32144_32170 = state_32137__$1;
(statearr_32144_32170[(2)] = null);

(statearr_32144_32170[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (6))){
var inst_32114 = (state_32137[(7)]);
var inst_32120 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32114) : p.call(null,inst_32114));
var state_32137__$1 = state_32137;
if(cljs.core.truth_(inst_32120)){
var statearr_32145_32171 = state_32137__$1;
(statearr_32145_32171[(1)] = (9));

} else {
var statearr_32146_32172 = state_32137__$1;
(statearr_32146_32172[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (3))){
var inst_32135 = (state_32137[(2)]);
var state_32137__$1 = state_32137;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32137__$1,inst_32135);
} else {
if((state_val_32138 === (12))){
var state_32137__$1 = state_32137;
var statearr_32147_32174 = state_32137__$1;
(statearr_32147_32174[(2)] = null);

(statearr_32147_32174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (2))){
var state_32137__$1 = state_32137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32137__$1,(4),ch);
} else {
if((state_val_32138 === (11))){
var inst_32114 = (state_32137[(7)]);
var inst_32124 = (state_32137[(2)]);
var state_32137__$1 = state_32137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32137__$1,(8),inst_32124,inst_32114);
} else {
if((state_val_32138 === (9))){
var state_32137__$1 = state_32137;
var statearr_32148_32175 = state_32137__$1;
(statearr_32148_32175[(2)] = tc);

(statearr_32148_32175[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (5))){
var inst_32117 = cljs.core.async.close_BANG_(tc);
var inst_32118 = cljs.core.async.close_BANG_(fc);
var state_32137__$1 = (function (){var statearr_32149 = state_32137;
(statearr_32149[(8)] = inst_32117);

return statearr_32149;
})();
var statearr_32150_32180 = state_32137__$1;
(statearr_32150_32180[(2)] = inst_32118);

(statearr_32150_32180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (14))){
var inst_32131 = (state_32137[(2)]);
var state_32137__$1 = state_32137;
var statearr_32151_32181 = state_32137__$1;
(statearr_32151_32181[(2)] = inst_32131);

(statearr_32151_32181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (10))){
var state_32137__$1 = state_32137;
var statearr_32152_32182 = state_32137__$1;
(statearr_32152_32182[(2)] = fc);

(statearr_32152_32182[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (8))){
var inst_32126 = (state_32137[(2)]);
var state_32137__$1 = state_32137;
if(cljs.core.truth_(inst_32126)){
var statearr_32153_32186 = state_32137__$1;
(statearr_32153_32186[(1)] = (12));

} else {
var statearr_32154_32190 = state_32137__$1;
(statearr_32154_32190[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31348__auto___32160,tc,fc))
;
return ((function (switch__30985__auto__,c__31348__auto___32160,tc,fc){
return (function() {
var cljs$core$async$state_machine__30986__auto__ = null;
var cljs$core$async$state_machine__30986__auto____0 = (function (){
var statearr_32155 = [null,null,null,null,null,null,null,null,null];
(statearr_32155[(0)] = cljs$core$async$state_machine__30986__auto__);

(statearr_32155[(1)] = (1));

return statearr_32155;
});
var cljs$core$async$state_machine__30986__auto____1 = (function (state_32137){
while(true){
var ret_value__30987__auto__ = (function (){try{while(true){
var result__30988__auto__ = switch__30985__auto__(state_32137);
if(cljs.core.keyword_identical_QMARK_(result__30988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30988__auto__;
}
break;
}
}catch (e32156){if((e32156 instanceof Object)){
var ex__30989__auto__ = e32156;
var statearr_32157_32195 = state_32137;
(statearr_32157_32195[(5)] = ex__30989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32156;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32196 = state_32137;
state_32137 = G__32196;
continue;
} else {
return ret_value__30987__auto__;
}
break;
}
});
cljs$core$async$state_machine__30986__auto__ = function(state_32137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30986__auto____1.call(this,state_32137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30986__auto____0;
cljs$core$async$state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30986__auto____1;
return cljs$core$async$state_machine__30986__auto__;
})()
;})(switch__30985__auto__,c__31348__auto___32160,tc,fc))
})();
var state__31350__auto__ = (function (){var statearr_32158 = (f__31349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31349__auto__.cljs$core$IFn$_invoke$arity$0() : f__31349__auto__.call(null));
(statearr_32158[(6)] = c__31348__auto___32160);

return statearr_32158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31350__auto__);
});})(c__31348__auto___32160,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31348__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31348__auto__){
return (function (){
var f__31349__auto__ = (function (){var switch__30985__auto__ = ((function (c__31348__auto__){
return (function (state_32218){
var state_val_32219 = (state_32218[(1)]);
if((state_val_32219 === (7))){
var inst_32214 = (state_32218[(2)]);
var state_32218__$1 = state_32218;
var statearr_32220_32251 = state_32218__$1;
(statearr_32220_32251[(2)] = inst_32214);

(statearr_32220_32251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (1))){
var inst_32198 = init;
var state_32218__$1 = (function (){var statearr_32221 = state_32218;
(statearr_32221[(7)] = inst_32198);

return statearr_32221;
})();
var statearr_32223_32252 = state_32218__$1;
(statearr_32223_32252[(2)] = null);

(statearr_32223_32252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (4))){
var inst_32201 = (state_32218[(8)]);
var inst_32201__$1 = (state_32218[(2)]);
var inst_32202 = (inst_32201__$1 == null);
var state_32218__$1 = (function (){var statearr_32224 = state_32218;
(statearr_32224[(8)] = inst_32201__$1);

return statearr_32224;
})();
if(cljs.core.truth_(inst_32202)){
var statearr_32225_32253 = state_32218__$1;
(statearr_32225_32253[(1)] = (5));

} else {
var statearr_32226_32254 = state_32218__$1;
(statearr_32226_32254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (6))){
var inst_32201 = (state_32218[(8)]);
var inst_32205 = (state_32218[(9)]);
var inst_32198 = (state_32218[(7)]);
var inst_32205__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32198,inst_32201) : f.call(null,inst_32198,inst_32201));
var inst_32206 = cljs.core.reduced_QMARK_(inst_32205__$1);
var state_32218__$1 = (function (){var statearr_32227 = state_32218;
(statearr_32227[(9)] = inst_32205__$1);

return statearr_32227;
})();
if(inst_32206){
var statearr_32228_32255 = state_32218__$1;
(statearr_32228_32255[(1)] = (8));

} else {
var statearr_32229_32256 = state_32218__$1;
(statearr_32229_32256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (3))){
var inst_32216 = (state_32218[(2)]);
var state_32218__$1 = state_32218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32218__$1,inst_32216);
} else {
if((state_val_32219 === (2))){
var state_32218__$1 = state_32218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32218__$1,(4),ch);
} else {
if((state_val_32219 === (9))){
var inst_32205 = (state_32218[(9)]);
var inst_32198 = inst_32205;
var state_32218__$1 = (function (){var statearr_32234 = state_32218;
(statearr_32234[(7)] = inst_32198);

return statearr_32234;
})();
var statearr_32235_32257 = state_32218__$1;
(statearr_32235_32257[(2)] = null);

(statearr_32235_32257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (5))){
var inst_32198 = (state_32218[(7)]);
var state_32218__$1 = state_32218;
var statearr_32240_32258 = state_32218__$1;
(statearr_32240_32258[(2)] = inst_32198);

(statearr_32240_32258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (10))){
var inst_32212 = (state_32218[(2)]);
var state_32218__$1 = state_32218;
var statearr_32245_32259 = state_32218__$1;
(statearr_32245_32259[(2)] = inst_32212);

(statearr_32245_32259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (8))){
var inst_32205 = (state_32218[(9)]);
var inst_32208 = cljs.core.deref(inst_32205);
var state_32218__$1 = state_32218;
var statearr_32246_32260 = state_32218__$1;
(statearr_32246_32260[(2)] = inst_32208);

(statearr_32246_32260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__31348__auto__))
;
return ((function (switch__30985__auto__,c__31348__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30986__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30986__auto____0 = (function (){
var statearr_32247 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32247[(0)] = cljs$core$async$reduce_$_state_machine__30986__auto__);

(statearr_32247[(1)] = (1));

return statearr_32247;
});
var cljs$core$async$reduce_$_state_machine__30986__auto____1 = (function (state_32218){
while(true){
var ret_value__30987__auto__ = (function (){try{while(true){
var result__30988__auto__ = switch__30985__auto__(state_32218);
if(cljs.core.keyword_identical_QMARK_(result__30988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30988__auto__;
}
break;
}
}catch (e32248){if((e32248 instanceof Object)){
var ex__30989__auto__ = e32248;
var statearr_32249_32261 = state_32218;
(statearr_32249_32261[(5)] = ex__30989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32248;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32262 = state_32218;
state_32218 = G__32262;
continue;
} else {
return ret_value__30987__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30986__auto__ = function(state_32218){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30986__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30986__auto____1.call(this,state_32218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30986__auto____0;
cljs$core$async$reduce_$_state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30986__auto____1;
return cljs$core$async$reduce_$_state_machine__30986__auto__;
})()
;})(switch__30985__auto__,c__31348__auto__))
})();
var state__31350__auto__ = (function (){var statearr_32250 = (f__31349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31349__auto__.cljs$core$IFn$_invoke$arity$0() : f__31349__auto__.call(null));
(statearr_32250[(6)] = c__31348__auto__);

return statearr_32250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31350__auto__);
});})(c__31348__auto__))
);

return c__31348__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31348__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31348__auto__,f__$1){
return (function (){
var f__31349__auto__ = (function (){var switch__30985__auto__ = ((function (c__31348__auto__,f__$1){
return (function (state_32268){
var state_val_32269 = (state_32268[(1)]);
if((state_val_32269 === (1))){
var inst_32263 = cljs.core.async.reduce(f__$1,init,ch);
var state_32268__$1 = state_32268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32268__$1,(2),inst_32263);
} else {
if((state_val_32269 === (2))){
var inst_32265 = (state_32268[(2)]);
var inst_32266 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32265) : f__$1.call(null,inst_32265));
var state_32268__$1 = state_32268;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32268__$1,inst_32266);
} else {
return null;
}
}
});})(c__31348__auto__,f__$1))
;
return ((function (switch__30985__auto__,c__31348__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30986__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30986__auto____0 = (function (){
var statearr_32270 = [null,null,null,null,null,null,null];
(statearr_32270[(0)] = cljs$core$async$transduce_$_state_machine__30986__auto__);

(statearr_32270[(1)] = (1));

return statearr_32270;
});
var cljs$core$async$transduce_$_state_machine__30986__auto____1 = (function (state_32268){
while(true){
var ret_value__30987__auto__ = (function (){try{while(true){
var result__30988__auto__ = switch__30985__auto__(state_32268);
if(cljs.core.keyword_identical_QMARK_(result__30988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30988__auto__;
}
break;
}
}catch (e32271){if((e32271 instanceof Object)){
var ex__30989__auto__ = e32271;
var statearr_32272_32274 = state_32268;
(statearr_32272_32274[(5)] = ex__30989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32271;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32275 = state_32268;
state_32268 = G__32275;
continue;
} else {
return ret_value__30987__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30986__auto__ = function(state_32268){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30986__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30986__auto____1.call(this,state_32268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30986__auto____0;
cljs$core$async$transduce_$_state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30986__auto____1;
return cljs$core$async$transduce_$_state_machine__30986__auto__;
})()
;})(switch__30985__auto__,c__31348__auto__,f__$1))
})();
var state__31350__auto__ = (function (){var statearr_32273 = (f__31349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31349__auto__.cljs$core$IFn$_invoke$arity$0() : f__31349__auto__.call(null));
(statearr_32273[(6)] = c__31348__auto__);

return statearr_32273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31350__auto__);
});})(c__31348__auto__,f__$1))
);

return c__31348__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32277 = arguments.length;
switch (G__32277) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31348__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31348__auto__){
return (function (){
var f__31349__auto__ = (function (){var switch__30985__auto__ = ((function (c__31348__auto__){
return (function (state_32302){
var state_val_32303 = (state_32302[(1)]);
if((state_val_32303 === (7))){
var inst_32284 = (state_32302[(2)]);
var state_32302__$1 = state_32302;
var statearr_32304_32332 = state_32302__$1;
(statearr_32304_32332[(2)] = inst_32284);

(statearr_32304_32332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32303 === (1))){
var inst_32278 = cljs.core.seq(coll);
var inst_32279 = inst_32278;
var state_32302__$1 = (function (){var statearr_32305 = state_32302;
(statearr_32305[(7)] = inst_32279);

return statearr_32305;
})();
var statearr_32306_32333 = state_32302__$1;
(statearr_32306_32333[(2)] = null);

(statearr_32306_32333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32303 === (4))){
var inst_32279 = (state_32302[(7)]);
var inst_32282 = cljs.core.first(inst_32279);
var state_32302__$1 = state_32302;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32302__$1,(7),ch,inst_32282);
} else {
if((state_val_32303 === (13))){
var inst_32296 = (state_32302[(2)]);
var state_32302__$1 = state_32302;
var statearr_32307_32334 = state_32302__$1;
(statearr_32307_32334[(2)] = inst_32296);

(statearr_32307_32334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32303 === (6))){
var inst_32287 = (state_32302[(2)]);
var state_32302__$1 = state_32302;
if(cljs.core.truth_(inst_32287)){
var statearr_32308_32335 = state_32302__$1;
(statearr_32308_32335[(1)] = (8));

} else {
var statearr_32309_32336 = state_32302__$1;
(statearr_32309_32336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32303 === (3))){
var inst_32300 = (state_32302[(2)]);
var state_32302__$1 = state_32302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32302__$1,inst_32300);
} else {
if((state_val_32303 === (12))){
var state_32302__$1 = state_32302;
var statearr_32312_32337 = state_32302__$1;
(statearr_32312_32337[(2)] = null);

(statearr_32312_32337[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32303 === (2))){
var inst_32279 = (state_32302[(7)]);
var state_32302__$1 = state_32302;
if(cljs.core.truth_(inst_32279)){
var statearr_32313_32338 = state_32302__$1;
(statearr_32313_32338[(1)] = (4));

} else {
var statearr_32314_32339 = state_32302__$1;
(statearr_32314_32339[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32303 === (11))){
var inst_32293 = cljs.core.async.close_BANG_(ch);
var state_32302__$1 = state_32302;
var statearr_32315_32340 = state_32302__$1;
(statearr_32315_32340[(2)] = inst_32293);

(statearr_32315_32340[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32303 === (9))){
var state_32302__$1 = state_32302;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32316_32341 = state_32302__$1;
(statearr_32316_32341[(1)] = (11));

} else {
var statearr_32317_32342 = state_32302__$1;
(statearr_32317_32342[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32303 === (5))){
var inst_32279 = (state_32302[(7)]);
var state_32302__$1 = state_32302;
var statearr_32320_32344 = state_32302__$1;
(statearr_32320_32344[(2)] = inst_32279);

(statearr_32320_32344[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32303 === (10))){
var inst_32298 = (state_32302[(2)]);
var state_32302__$1 = state_32302;
var statearr_32321_32345 = state_32302__$1;
(statearr_32321_32345[(2)] = inst_32298);

(statearr_32321_32345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32303 === (8))){
var inst_32279 = (state_32302[(7)]);
var inst_32289 = cljs.core.next(inst_32279);
var inst_32279__$1 = inst_32289;
var state_32302__$1 = (function (){var statearr_32322 = state_32302;
(statearr_32322[(7)] = inst_32279__$1);

return statearr_32322;
})();
var statearr_32323_32347 = state_32302__$1;
(statearr_32323_32347[(2)] = null);

(statearr_32323_32347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31348__auto__))
;
return ((function (switch__30985__auto__,c__31348__auto__){
return (function() {
var cljs$core$async$state_machine__30986__auto__ = null;
var cljs$core$async$state_machine__30986__auto____0 = (function (){
var statearr_32325 = [null,null,null,null,null,null,null,null];
(statearr_32325[(0)] = cljs$core$async$state_machine__30986__auto__);

(statearr_32325[(1)] = (1));

return statearr_32325;
});
var cljs$core$async$state_machine__30986__auto____1 = (function (state_32302){
while(true){
var ret_value__30987__auto__ = (function (){try{while(true){
var result__30988__auto__ = switch__30985__auto__(state_32302);
if(cljs.core.keyword_identical_QMARK_(result__30988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30988__auto__;
}
break;
}
}catch (e32326){if((e32326 instanceof Object)){
var ex__30989__auto__ = e32326;
var statearr_32327_32349 = state_32302;
(statearr_32327_32349[(5)] = ex__30989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32326;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32350 = state_32302;
state_32302 = G__32350;
continue;
} else {
return ret_value__30987__auto__;
}
break;
}
});
cljs$core$async$state_machine__30986__auto__ = function(state_32302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30986__auto____1.call(this,state_32302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30986__auto____0;
cljs$core$async$state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30986__auto____1;
return cljs$core$async$state_machine__30986__auto__;
})()
;})(switch__30985__auto__,c__31348__auto__))
})();
var state__31350__auto__ = (function (){var statearr_32328 = (f__31349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31349__auto__.cljs$core$IFn$_invoke$arity$0() : f__31349__auto__.call(null));
(statearr_32328[(6)] = c__31348__auto__);

return statearr_32328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31350__auto__);
});})(c__31348__auto__))
);

return c__31348__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto__.call(null,_));
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32373 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32373 = (function (ch,cs,meta32374){
this.ch = ch;
this.cs = cs;
this.meta32374 = meta32374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32375,meta32374__$1){
var self__ = this;
var _32375__$1 = this;
return (new cljs.core.async.t_cljs$core$async32373(self__.ch,self__.cs,meta32374__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32375){
var self__ = this;
var _32375__$1 = this;
return self__.meta32374;
});})(cs))
;

cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32373.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32374","meta32374",-1932036164,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32373.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32373";

cljs.core.async.t_cljs$core$async32373.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async32373");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32373.
 */
cljs.core.async.__GT_t_cljs$core$async32373 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32373(ch__$1,cs__$1,meta32374){
return (new cljs.core.async.t_cljs$core$async32373(ch__$1,cs__$1,meta32374));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32373(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__31348__auto___32620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31348__auto___32620,cs,m,dchan,dctr,done){
return (function (){
var f__31349__auto__ = (function (){var switch__30985__auto__ = ((function (c__31348__auto___32620,cs,m,dchan,dctr,done){
return (function (state_32523){
var state_val_32524 = (state_32523[(1)]);
if((state_val_32524 === (7))){
var inst_32519 = (state_32523[(2)]);
var state_32523__$1 = state_32523;
var statearr_32529_32621 = state_32523__$1;
(statearr_32529_32621[(2)] = inst_32519);

(statearr_32529_32621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (20))){
var inst_32415 = (state_32523[(7)]);
var inst_32427 = cljs.core.first(inst_32415);
var inst_32428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32427,(0),null);
var inst_32429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32427,(1),null);
var state_32523__$1 = (function (){var statearr_32534 = state_32523;
(statearr_32534[(8)] = inst_32428);

return statearr_32534;
})();
if(cljs.core.truth_(inst_32429)){
var statearr_32535_32622 = state_32523__$1;
(statearr_32535_32622[(1)] = (22));

} else {
var statearr_32540_32623 = state_32523__$1;
(statearr_32540_32623[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (27))){
var inst_32459 = (state_32523[(9)]);
var inst_32464 = (state_32523[(10)]);
var inst_32457 = (state_32523[(11)]);
var inst_32384 = (state_32523[(12)]);
var inst_32464__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32457,inst_32459);
var inst_32465 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32464__$1,inst_32384,done);
var state_32523__$1 = (function (){var statearr_32541 = state_32523;
(statearr_32541[(10)] = inst_32464__$1);

return statearr_32541;
})();
if(cljs.core.truth_(inst_32465)){
var statearr_32542_32624 = state_32523__$1;
(statearr_32542_32624[(1)] = (30));

} else {
var statearr_32543_32625 = state_32523__$1;
(statearr_32543_32625[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (1))){
var state_32523__$1 = state_32523;
var statearr_32544_32626 = state_32523__$1;
(statearr_32544_32626[(2)] = null);

(statearr_32544_32626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (24))){
var inst_32415 = (state_32523[(7)]);
var inst_32434 = (state_32523[(2)]);
var inst_32435 = cljs.core.next(inst_32415);
var inst_32393 = inst_32435;
var inst_32394 = null;
var inst_32395 = (0);
var inst_32396 = (0);
var state_32523__$1 = (function (){var statearr_32545 = state_32523;
(statearr_32545[(13)] = inst_32434);

(statearr_32545[(14)] = inst_32394);

(statearr_32545[(15)] = inst_32393);

(statearr_32545[(16)] = inst_32396);

(statearr_32545[(17)] = inst_32395);

return statearr_32545;
})();
var statearr_32546_32627 = state_32523__$1;
(statearr_32546_32627[(2)] = null);

(statearr_32546_32627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (39))){
var state_32523__$1 = state_32523;
var statearr_32550_32628 = state_32523__$1;
(statearr_32550_32628[(2)] = null);

(statearr_32550_32628[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (4))){
var inst_32384 = (state_32523[(12)]);
var inst_32384__$1 = (state_32523[(2)]);
var inst_32385 = (inst_32384__$1 == null);
var state_32523__$1 = (function (){var statearr_32551 = state_32523;
(statearr_32551[(12)] = inst_32384__$1);

return statearr_32551;
})();
if(cljs.core.truth_(inst_32385)){
var statearr_32552_32629 = state_32523__$1;
(statearr_32552_32629[(1)] = (5));

} else {
var statearr_32553_32630 = state_32523__$1;
(statearr_32553_32630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (15))){
var inst_32394 = (state_32523[(14)]);
var inst_32393 = (state_32523[(15)]);
var inst_32396 = (state_32523[(16)]);
var inst_32395 = (state_32523[(17)]);
var inst_32411 = (state_32523[(2)]);
var inst_32412 = (inst_32396 + (1));
var tmp32547 = inst_32394;
var tmp32548 = inst_32393;
var tmp32549 = inst_32395;
var inst_32393__$1 = tmp32548;
var inst_32394__$1 = tmp32547;
var inst_32395__$1 = tmp32549;
var inst_32396__$1 = inst_32412;
var state_32523__$1 = (function (){var statearr_32554 = state_32523;
(statearr_32554[(18)] = inst_32411);

(statearr_32554[(14)] = inst_32394__$1);

(statearr_32554[(15)] = inst_32393__$1);

(statearr_32554[(16)] = inst_32396__$1);

(statearr_32554[(17)] = inst_32395__$1);

return statearr_32554;
})();
var statearr_32555_32631 = state_32523__$1;
(statearr_32555_32631[(2)] = null);

(statearr_32555_32631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (21))){
var inst_32438 = (state_32523[(2)]);
var state_32523__$1 = state_32523;
var statearr_32559_32632 = state_32523__$1;
(statearr_32559_32632[(2)] = inst_32438);

(statearr_32559_32632[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (31))){
var inst_32464 = (state_32523[(10)]);
var inst_32468 = done(null);
var inst_32470 = cljs.core.async.untap_STAR_(m,inst_32464);
var state_32523__$1 = (function (){var statearr_32560 = state_32523;
(statearr_32560[(19)] = inst_32468);

return statearr_32560;
})();
var statearr_32561_32633 = state_32523__$1;
(statearr_32561_32633[(2)] = inst_32470);

(statearr_32561_32633[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (32))){
var inst_32458 = (state_32523[(20)]);
var inst_32459 = (state_32523[(9)]);
var inst_32457 = (state_32523[(11)]);
var inst_32456 = (state_32523[(21)]);
var inst_32472 = (state_32523[(2)]);
var inst_32474 = (inst_32459 + (1));
var tmp32556 = inst_32458;
var tmp32557 = inst_32457;
var tmp32558 = inst_32456;
var inst_32456__$1 = tmp32558;
var inst_32457__$1 = tmp32557;
var inst_32458__$1 = tmp32556;
var inst_32459__$1 = inst_32474;
var state_32523__$1 = (function (){var statearr_32562 = state_32523;
(statearr_32562[(20)] = inst_32458__$1);

(statearr_32562[(9)] = inst_32459__$1);

(statearr_32562[(11)] = inst_32457__$1);

(statearr_32562[(22)] = inst_32472);

(statearr_32562[(21)] = inst_32456__$1);

return statearr_32562;
})();
var statearr_32563_32634 = state_32523__$1;
(statearr_32563_32634[(2)] = null);

(statearr_32563_32634[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (40))){
var inst_32491 = (state_32523[(23)]);
var inst_32495 = done(null);
var inst_32496 = cljs.core.async.untap_STAR_(m,inst_32491);
var state_32523__$1 = (function (){var statearr_32564 = state_32523;
(statearr_32564[(24)] = inst_32495);

return statearr_32564;
})();
var statearr_32565_32635 = state_32523__$1;
(statearr_32565_32635[(2)] = inst_32496);

(statearr_32565_32635[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (33))){
var inst_32478 = (state_32523[(25)]);
var inst_32480 = cljs.core.chunked_seq_QMARK_(inst_32478);
var state_32523__$1 = state_32523;
if(inst_32480){
var statearr_32566_32636 = state_32523__$1;
(statearr_32566_32636[(1)] = (36));

} else {
var statearr_32567_32637 = state_32523__$1;
(statearr_32567_32637[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (13))){
var inst_32405 = (state_32523[(26)]);
var inst_32408 = cljs.core.async.close_BANG_(inst_32405);
var state_32523__$1 = state_32523;
var statearr_32568_32638 = state_32523__$1;
(statearr_32568_32638[(2)] = inst_32408);

(statearr_32568_32638[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (22))){
var inst_32428 = (state_32523[(8)]);
var inst_32431 = cljs.core.async.close_BANG_(inst_32428);
var state_32523__$1 = state_32523;
var statearr_32569_32639 = state_32523__$1;
(statearr_32569_32639[(2)] = inst_32431);

(statearr_32569_32639[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (36))){
var inst_32478 = (state_32523[(25)]);
var inst_32482 = cljs.core.chunk_first(inst_32478);
var inst_32484 = cljs.core.chunk_rest(inst_32478);
var inst_32488 = cljs.core.count(inst_32482);
var inst_32456 = inst_32484;
var inst_32457 = inst_32482;
var inst_32458 = inst_32488;
var inst_32459 = (0);
var state_32523__$1 = (function (){var statearr_32570 = state_32523;
(statearr_32570[(20)] = inst_32458);

(statearr_32570[(9)] = inst_32459);

(statearr_32570[(11)] = inst_32457);

(statearr_32570[(21)] = inst_32456);

return statearr_32570;
})();
var statearr_32571_32640 = state_32523__$1;
(statearr_32571_32640[(2)] = null);

(statearr_32571_32640[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (41))){
var inst_32478 = (state_32523[(25)]);
var inst_32498 = (state_32523[(2)]);
var inst_32499 = cljs.core.next(inst_32478);
var inst_32456 = inst_32499;
var inst_32457 = null;
var inst_32458 = (0);
var inst_32459 = (0);
var state_32523__$1 = (function (){var statearr_32572 = state_32523;
(statearr_32572[(20)] = inst_32458);

(statearr_32572[(27)] = inst_32498);

(statearr_32572[(9)] = inst_32459);

(statearr_32572[(11)] = inst_32457);

(statearr_32572[(21)] = inst_32456);

return statearr_32572;
})();
var statearr_32573_32641 = state_32523__$1;
(statearr_32573_32641[(2)] = null);

(statearr_32573_32641[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (43))){
var state_32523__$1 = state_32523;
var statearr_32574_32642 = state_32523__$1;
(statearr_32574_32642[(2)] = null);

(statearr_32574_32642[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (29))){
var inst_32507 = (state_32523[(2)]);
var state_32523__$1 = state_32523;
var statearr_32575_32643 = state_32523__$1;
(statearr_32575_32643[(2)] = inst_32507);

(statearr_32575_32643[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (44))){
var inst_32516 = (state_32523[(2)]);
var state_32523__$1 = (function (){var statearr_32576 = state_32523;
(statearr_32576[(28)] = inst_32516);

return statearr_32576;
})();
var statearr_32577_32644 = state_32523__$1;
(statearr_32577_32644[(2)] = null);

(statearr_32577_32644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (6))){
var inst_32448 = (state_32523[(29)]);
var inst_32447 = cljs.core.deref(cs);
var inst_32448__$1 = cljs.core.keys(inst_32447);
var inst_32449 = cljs.core.count(inst_32448__$1);
var inst_32450 = cljs.core.reset_BANG_(dctr,inst_32449);
var inst_32455 = cljs.core.seq(inst_32448__$1);
var inst_32456 = inst_32455;
var inst_32457 = null;
var inst_32458 = (0);
var inst_32459 = (0);
var state_32523__$1 = (function (){var statearr_32578 = state_32523;
(statearr_32578[(20)] = inst_32458);

(statearr_32578[(9)] = inst_32459);

(statearr_32578[(29)] = inst_32448__$1);

(statearr_32578[(11)] = inst_32457);

(statearr_32578[(30)] = inst_32450);

(statearr_32578[(21)] = inst_32456);

return statearr_32578;
})();
var statearr_32579_32645 = state_32523__$1;
(statearr_32579_32645[(2)] = null);

(statearr_32579_32645[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (28))){
var inst_32478 = (state_32523[(25)]);
var inst_32456 = (state_32523[(21)]);
var inst_32478__$1 = cljs.core.seq(inst_32456);
var state_32523__$1 = (function (){var statearr_32580 = state_32523;
(statearr_32580[(25)] = inst_32478__$1);

return statearr_32580;
})();
if(inst_32478__$1){
var statearr_32581_32646 = state_32523__$1;
(statearr_32581_32646[(1)] = (33));

} else {
var statearr_32582_32647 = state_32523__$1;
(statearr_32582_32647[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (25))){
var inst_32458 = (state_32523[(20)]);
var inst_32459 = (state_32523[(9)]);
var inst_32461 = (inst_32459 < inst_32458);
var inst_32462 = inst_32461;
var state_32523__$1 = state_32523;
if(cljs.core.truth_(inst_32462)){
var statearr_32583_32648 = state_32523__$1;
(statearr_32583_32648[(1)] = (27));

} else {
var statearr_32584_32649 = state_32523__$1;
(statearr_32584_32649[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (34))){
var state_32523__$1 = state_32523;
var statearr_32585_32650 = state_32523__$1;
(statearr_32585_32650[(2)] = null);

(statearr_32585_32650[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (17))){
var state_32523__$1 = state_32523;
var statearr_32586_32651 = state_32523__$1;
(statearr_32586_32651[(2)] = null);

(statearr_32586_32651[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (3))){
var inst_32521 = (state_32523[(2)]);
var state_32523__$1 = state_32523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32523__$1,inst_32521);
} else {
if((state_val_32524 === (12))){
var inst_32443 = (state_32523[(2)]);
var state_32523__$1 = state_32523;
var statearr_32587_32652 = state_32523__$1;
(statearr_32587_32652[(2)] = inst_32443);

(statearr_32587_32652[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (2))){
var state_32523__$1 = state_32523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32523__$1,(4),ch);
} else {
if((state_val_32524 === (23))){
var state_32523__$1 = state_32523;
var statearr_32588_32653 = state_32523__$1;
(statearr_32588_32653[(2)] = null);

(statearr_32588_32653[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (35))){
var inst_32505 = (state_32523[(2)]);
var state_32523__$1 = state_32523;
var statearr_32589_32654 = state_32523__$1;
(statearr_32589_32654[(2)] = inst_32505);

(statearr_32589_32654[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (19))){
var inst_32415 = (state_32523[(7)]);
var inst_32419 = cljs.core.chunk_first(inst_32415);
var inst_32420 = cljs.core.chunk_rest(inst_32415);
var inst_32421 = cljs.core.count(inst_32419);
var inst_32393 = inst_32420;
var inst_32394 = inst_32419;
var inst_32395 = inst_32421;
var inst_32396 = (0);
var state_32523__$1 = (function (){var statearr_32590 = state_32523;
(statearr_32590[(14)] = inst_32394);

(statearr_32590[(15)] = inst_32393);

(statearr_32590[(16)] = inst_32396);

(statearr_32590[(17)] = inst_32395);

return statearr_32590;
})();
var statearr_32591_32655 = state_32523__$1;
(statearr_32591_32655[(2)] = null);

(statearr_32591_32655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (11))){
var inst_32393 = (state_32523[(15)]);
var inst_32415 = (state_32523[(7)]);
var inst_32415__$1 = cljs.core.seq(inst_32393);
var state_32523__$1 = (function (){var statearr_32592 = state_32523;
(statearr_32592[(7)] = inst_32415__$1);

return statearr_32592;
})();
if(inst_32415__$1){
var statearr_32593_32656 = state_32523__$1;
(statearr_32593_32656[(1)] = (16));

} else {
var statearr_32594_32657 = state_32523__$1;
(statearr_32594_32657[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (9))){
var inst_32445 = (state_32523[(2)]);
var state_32523__$1 = state_32523;
var statearr_32595_32658 = state_32523__$1;
(statearr_32595_32658[(2)] = inst_32445);

(statearr_32595_32658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (5))){
var inst_32391 = cljs.core.deref(cs);
var inst_32392 = cljs.core.seq(inst_32391);
var inst_32393 = inst_32392;
var inst_32394 = null;
var inst_32395 = (0);
var inst_32396 = (0);
var state_32523__$1 = (function (){var statearr_32596 = state_32523;
(statearr_32596[(14)] = inst_32394);

(statearr_32596[(15)] = inst_32393);

(statearr_32596[(16)] = inst_32396);

(statearr_32596[(17)] = inst_32395);

return statearr_32596;
})();
var statearr_32597_32659 = state_32523__$1;
(statearr_32597_32659[(2)] = null);

(statearr_32597_32659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (14))){
var state_32523__$1 = state_32523;
var statearr_32598_32660 = state_32523__$1;
(statearr_32598_32660[(2)] = null);

(statearr_32598_32660[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (45))){
var inst_32513 = (state_32523[(2)]);
var state_32523__$1 = state_32523;
var statearr_32599_32661 = state_32523__$1;
(statearr_32599_32661[(2)] = inst_32513);

(statearr_32599_32661[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (26))){
var inst_32448 = (state_32523[(29)]);
var inst_32509 = (state_32523[(2)]);
var inst_32510 = cljs.core.seq(inst_32448);
var state_32523__$1 = (function (){var statearr_32600 = state_32523;
(statearr_32600[(31)] = inst_32509);

return statearr_32600;
})();
if(inst_32510){
var statearr_32601_32662 = state_32523__$1;
(statearr_32601_32662[(1)] = (42));

} else {
var statearr_32602_32663 = state_32523__$1;
(statearr_32602_32663[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (16))){
var inst_32415 = (state_32523[(7)]);
var inst_32417 = cljs.core.chunked_seq_QMARK_(inst_32415);
var state_32523__$1 = state_32523;
if(inst_32417){
var statearr_32603_32664 = state_32523__$1;
(statearr_32603_32664[(1)] = (19));

} else {
var statearr_32604_32665 = state_32523__$1;
(statearr_32604_32665[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (38))){
var inst_32502 = (state_32523[(2)]);
var state_32523__$1 = state_32523;
var statearr_32605_32666 = state_32523__$1;
(statearr_32605_32666[(2)] = inst_32502);

(statearr_32605_32666[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (30))){
var state_32523__$1 = state_32523;
var statearr_32606_32667 = state_32523__$1;
(statearr_32606_32667[(2)] = null);

(statearr_32606_32667[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (10))){
var inst_32394 = (state_32523[(14)]);
var inst_32396 = (state_32523[(16)]);
var inst_32404 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32394,inst_32396);
var inst_32405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32404,(0),null);
var inst_32406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32404,(1),null);
var state_32523__$1 = (function (){var statearr_32607 = state_32523;
(statearr_32607[(26)] = inst_32405);

return statearr_32607;
})();
if(cljs.core.truth_(inst_32406)){
var statearr_32608_32668 = state_32523__$1;
(statearr_32608_32668[(1)] = (13));

} else {
var statearr_32609_32669 = state_32523__$1;
(statearr_32609_32669[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (18))){
var inst_32441 = (state_32523[(2)]);
var state_32523__$1 = state_32523;
var statearr_32610_32670 = state_32523__$1;
(statearr_32610_32670[(2)] = inst_32441);

(statearr_32610_32670[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (42))){
var state_32523__$1 = state_32523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32523__$1,(45),dchan);
} else {
if((state_val_32524 === (37))){
var inst_32478 = (state_32523[(25)]);
var inst_32491 = (state_32523[(23)]);
var inst_32384 = (state_32523[(12)]);
var inst_32491__$1 = cljs.core.first(inst_32478);
var inst_32492 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32491__$1,inst_32384,done);
var state_32523__$1 = (function (){var statearr_32611 = state_32523;
(statearr_32611[(23)] = inst_32491__$1);

return statearr_32611;
})();
if(cljs.core.truth_(inst_32492)){
var statearr_32612_32671 = state_32523__$1;
(statearr_32612_32671[(1)] = (39));

} else {
var statearr_32613_32672 = state_32523__$1;
(statearr_32613_32672[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (8))){
var inst_32396 = (state_32523[(16)]);
var inst_32395 = (state_32523[(17)]);
var inst_32398 = (inst_32396 < inst_32395);
var inst_32399 = inst_32398;
var state_32523__$1 = state_32523;
if(cljs.core.truth_(inst_32399)){
var statearr_32614_32673 = state_32523__$1;
(statearr_32614_32673[(1)] = (10));

} else {
var statearr_32615_32674 = state_32523__$1;
(statearr_32615_32674[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31348__auto___32620,cs,m,dchan,dctr,done))
;
return ((function (switch__30985__auto__,c__31348__auto___32620,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30986__auto__ = null;
var cljs$core$async$mult_$_state_machine__30986__auto____0 = (function (){
var statearr_32616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32616[(0)] = cljs$core$async$mult_$_state_machine__30986__auto__);

(statearr_32616[(1)] = (1));

return statearr_32616;
});
var cljs$core$async$mult_$_state_machine__30986__auto____1 = (function (state_32523){
while(true){
var ret_value__30987__auto__ = (function (){try{while(true){
var result__30988__auto__ = switch__30985__auto__(state_32523);
if(cljs.core.keyword_identical_QMARK_(result__30988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30988__auto__;
}
break;
}
}catch (e32617){if((e32617 instanceof Object)){
var ex__30989__auto__ = e32617;
var statearr_32618_32675 = state_32523;
(statearr_32618_32675[(5)] = ex__30989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32617;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32676 = state_32523;
state_32523 = G__32676;
continue;
} else {
return ret_value__30987__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30986__auto__ = function(state_32523){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30986__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30986__auto____1.call(this,state_32523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30986__auto____0;
cljs$core$async$mult_$_state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30986__auto____1;
return cljs$core$async$mult_$_state_machine__30986__auto__;
})()
;})(switch__30985__auto__,c__31348__auto___32620,cs,m,dchan,dctr,done))
})();
var state__31350__auto__ = (function (){var statearr_32619 = (f__31349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31349__auto__.cljs$core$IFn$_invoke$arity$0() : f__31349__auto__.call(null));
(statearr_32619[(6)] = c__31348__auto___32620);

return statearr_32619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31350__auto__);
});})(c__31348__auto___32620,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32678 = arguments.length;
switch (G__32678) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto__.call(null,m,state_map));
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto__.call(null,m,mode));
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___32690 = arguments.length;
var i__4532__auto___32691 = (0);
while(true){
if((i__4532__auto___32691 < len__4531__auto___32690)){
args__4534__auto__.push((arguments[i__4532__auto___32691]));

var G__32692 = (i__4532__auto___32691 + (1));
i__4532__auto___32691 = G__32692;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32684){
var map__32685 = p__32684;
var map__32685__$1 = ((((!((map__32685 == null)))?(((((map__32685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32685):map__32685);
var opts = map__32685__$1;
var statearr_32687_32693 = state;
(statearr_32687_32693[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__32685,map__32685__$1,opts){
return (function (val){
var statearr_32688_32694 = state;
(statearr_32688_32694[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__32685,map__32685__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_32689_32695 = state;
(statearr_32689_32695[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32680){
var G__32681 = cljs.core.first(seq32680);
var seq32680__$1 = cljs.core.next(seq32680);
var G__32682 = cljs.core.first(seq32680__$1);
var seq32680__$2 = cljs.core.next(seq32680__$1);
var G__32683 = cljs.core.first(seq32680__$2);
var seq32680__$3 = cljs.core.next(seq32680__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32681,G__32682,G__32683,seq32680__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32696 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32696 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta32697){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta32697 = meta32697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32698,meta32697__$1){
var self__ = this;
var _32698__$1 = this;
return (new cljs.core.async.t_cljs$core$async32696(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta32697__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32696.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32698){
var self__ = this;
var _32698__$1 = this;
return self__.meta32697;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32696.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32696.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32696.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32696.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32696.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32696.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32696.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32696.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32696.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta32697","meta32697",-797394256,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32696.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32696.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32696";

cljs.core.async.t_cljs$core$async32696.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async32696");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32696.
 */
cljs.core.async.__GT_t_cljs$core$async32696 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32696(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32697){
return (new cljs.core.async.t_cljs$core$async32696(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32697));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32696(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31348__auto___32860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31348__auto___32860,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31349__auto__ = (function (){var switch__30985__auto__ = ((function (c__31348__auto___32860,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32800){
var state_val_32801 = (state_32800[(1)]);
if((state_val_32801 === (7))){
var inst_32715 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
var statearr_32802_32861 = state_32800__$1;
(statearr_32802_32861[(2)] = inst_32715);

(statearr_32802_32861[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (20))){
var inst_32727 = (state_32800[(7)]);
var state_32800__$1 = state_32800;
var statearr_32803_32862 = state_32800__$1;
(statearr_32803_32862[(2)] = inst_32727);

(statearr_32803_32862[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (27))){
var state_32800__$1 = state_32800;
var statearr_32804_32863 = state_32800__$1;
(statearr_32804_32863[(2)] = null);

(statearr_32804_32863[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (1))){
var inst_32702 = (state_32800[(8)]);
var inst_32702__$1 = calc_state();
var inst_32704 = (inst_32702__$1 == null);
var inst_32705 = cljs.core.not(inst_32704);
var state_32800__$1 = (function (){var statearr_32805 = state_32800;
(statearr_32805[(8)] = inst_32702__$1);

return statearr_32805;
})();
if(inst_32705){
var statearr_32806_32864 = state_32800__$1;
(statearr_32806_32864[(1)] = (2));

} else {
var statearr_32807_32865 = state_32800__$1;
(statearr_32807_32865[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (24))){
var inst_32751 = (state_32800[(9)]);
var inst_32760 = (state_32800[(10)]);
var inst_32774 = (state_32800[(11)]);
var inst_32774__$1 = (inst_32751.cljs$core$IFn$_invoke$arity$1 ? inst_32751.cljs$core$IFn$_invoke$arity$1(inst_32760) : inst_32751.call(null,inst_32760));
var state_32800__$1 = (function (){var statearr_32808 = state_32800;
(statearr_32808[(11)] = inst_32774__$1);

return statearr_32808;
})();
if(cljs.core.truth_(inst_32774__$1)){
var statearr_32809_32866 = state_32800__$1;
(statearr_32809_32866[(1)] = (29));

} else {
var statearr_32810_32867 = state_32800__$1;
(statearr_32810_32867[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (4))){
var inst_32718 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
if(cljs.core.truth_(inst_32718)){
var statearr_32811_32868 = state_32800__$1;
(statearr_32811_32868[(1)] = (8));

} else {
var statearr_32812_32869 = state_32800__$1;
(statearr_32812_32869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (15))){
var inst_32745 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
if(cljs.core.truth_(inst_32745)){
var statearr_32813_32870 = state_32800__$1;
(statearr_32813_32870[(1)] = (19));

} else {
var statearr_32814_32871 = state_32800__$1;
(statearr_32814_32871[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (21))){
var inst_32750 = (state_32800[(12)]);
var inst_32750__$1 = (state_32800[(2)]);
var inst_32751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32750__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32750__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32750__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32800__$1 = (function (){var statearr_32815 = state_32800;
(statearr_32815[(12)] = inst_32750__$1);

(statearr_32815[(9)] = inst_32751);

(statearr_32815[(13)] = inst_32752);

return statearr_32815;
})();
return cljs.core.async.ioc_alts_BANG_(state_32800__$1,(22),inst_32753);
} else {
if((state_val_32801 === (31))){
var inst_32782 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
if(cljs.core.truth_(inst_32782)){
var statearr_32816_32872 = state_32800__$1;
(statearr_32816_32872[(1)] = (32));

} else {
var statearr_32817_32873 = state_32800__$1;
(statearr_32817_32873[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (32))){
var inst_32759 = (state_32800[(14)]);
var state_32800__$1 = state_32800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32800__$1,(35),out,inst_32759);
} else {
if((state_val_32801 === (33))){
var inst_32750 = (state_32800[(12)]);
var inst_32727 = inst_32750;
var state_32800__$1 = (function (){var statearr_32818 = state_32800;
(statearr_32818[(7)] = inst_32727);

return statearr_32818;
})();
var statearr_32819_32874 = state_32800__$1;
(statearr_32819_32874[(2)] = null);

(statearr_32819_32874[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (13))){
var inst_32727 = (state_32800[(7)]);
var inst_32734 = inst_32727.cljs$lang$protocol_mask$partition0$;
var inst_32735 = (inst_32734 & (64));
var inst_32736 = inst_32727.cljs$core$ISeq$;
var inst_32737 = (cljs.core.PROTOCOL_SENTINEL === inst_32736);
var inst_32738 = ((inst_32735) || (inst_32737));
var state_32800__$1 = state_32800;
if(cljs.core.truth_(inst_32738)){
var statearr_32820_32875 = state_32800__$1;
(statearr_32820_32875[(1)] = (16));

} else {
var statearr_32821_32876 = state_32800__$1;
(statearr_32821_32876[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (22))){
var inst_32759 = (state_32800[(14)]);
var inst_32760 = (state_32800[(10)]);
var inst_32758 = (state_32800[(2)]);
var inst_32759__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32758,(0),null);
var inst_32760__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32758,(1),null);
var inst_32761 = (inst_32759__$1 == null);
var inst_32762 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32760__$1,change);
var inst_32763 = ((inst_32761) || (inst_32762));
var state_32800__$1 = (function (){var statearr_32822 = state_32800;
(statearr_32822[(14)] = inst_32759__$1);

(statearr_32822[(10)] = inst_32760__$1);

return statearr_32822;
})();
if(cljs.core.truth_(inst_32763)){
var statearr_32823_32877 = state_32800__$1;
(statearr_32823_32877[(1)] = (23));

} else {
var statearr_32824_32878 = state_32800__$1;
(statearr_32824_32878[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (36))){
var inst_32750 = (state_32800[(12)]);
var inst_32727 = inst_32750;
var state_32800__$1 = (function (){var statearr_32825 = state_32800;
(statearr_32825[(7)] = inst_32727);

return statearr_32825;
})();
var statearr_32826_32879 = state_32800__$1;
(statearr_32826_32879[(2)] = null);

(statearr_32826_32879[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (29))){
var inst_32774 = (state_32800[(11)]);
var state_32800__$1 = state_32800;
var statearr_32827_32880 = state_32800__$1;
(statearr_32827_32880[(2)] = inst_32774);

(statearr_32827_32880[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (6))){
var state_32800__$1 = state_32800;
var statearr_32828_32881 = state_32800__$1;
(statearr_32828_32881[(2)] = false);

(statearr_32828_32881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (28))){
var inst_32770 = (state_32800[(2)]);
var inst_32771 = calc_state();
var inst_32727 = inst_32771;
var state_32800__$1 = (function (){var statearr_32829 = state_32800;
(statearr_32829[(15)] = inst_32770);

(statearr_32829[(7)] = inst_32727);

return statearr_32829;
})();
var statearr_32830_32882 = state_32800__$1;
(statearr_32830_32882[(2)] = null);

(statearr_32830_32882[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (25))){
var inst_32796 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
var statearr_32831_32883 = state_32800__$1;
(statearr_32831_32883[(2)] = inst_32796);

(statearr_32831_32883[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (34))){
var inst_32794 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
var statearr_32832_32884 = state_32800__$1;
(statearr_32832_32884[(2)] = inst_32794);

(statearr_32832_32884[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (17))){
var state_32800__$1 = state_32800;
var statearr_32833_32885 = state_32800__$1;
(statearr_32833_32885[(2)] = false);

(statearr_32833_32885[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (3))){
var state_32800__$1 = state_32800;
var statearr_32834_32886 = state_32800__$1;
(statearr_32834_32886[(2)] = false);

(statearr_32834_32886[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (12))){
var inst_32798 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32800__$1,inst_32798);
} else {
if((state_val_32801 === (2))){
var inst_32702 = (state_32800[(8)]);
var inst_32707 = inst_32702.cljs$lang$protocol_mask$partition0$;
var inst_32708 = (inst_32707 & (64));
var inst_32709 = inst_32702.cljs$core$ISeq$;
var inst_32710 = (cljs.core.PROTOCOL_SENTINEL === inst_32709);
var inst_32711 = ((inst_32708) || (inst_32710));
var state_32800__$1 = state_32800;
if(cljs.core.truth_(inst_32711)){
var statearr_32835_32887 = state_32800__$1;
(statearr_32835_32887[(1)] = (5));

} else {
var statearr_32836_32888 = state_32800__$1;
(statearr_32836_32888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (23))){
var inst_32759 = (state_32800[(14)]);
var inst_32765 = (inst_32759 == null);
var state_32800__$1 = state_32800;
if(cljs.core.truth_(inst_32765)){
var statearr_32837_32889 = state_32800__$1;
(statearr_32837_32889[(1)] = (26));

} else {
var statearr_32838_32890 = state_32800__$1;
(statearr_32838_32890[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (35))){
var inst_32785 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
if(cljs.core.truth_(inst_32785)){
var statearr_32839_32891 = state_32800__$1;
(statearr_32839_32891[(1)] = (36));

} else {
var statearr_32840_32892 = state_32800__$1;
(statearr_32840_32892[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (19))){
var inst_32727 = (state_32800[(7)]);
var inst_32747 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32727);
var state_32800__$1 = state_32800;
var statearr_32841_32893 = state_32800__$1;
(statearr_32841_32893[(2)] = inst_32747);

(statearr_32841_32893[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (11))){
var inst_32727 = (state_32800[(7)]);
var inst_32731 = (inst_32727 == null);
var inst_32732 = cljs.core.not(inst_32731);
var state_32800__$1 = state_32800;
if(inst_32732){
var statearr_32842_32894 = state_32800__$1;
(statearr_32842_32894[(1)] = (13));

} else {
var statearr_32843_32895 = state_32800__$1;
(statearr_32843_32895[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (9))){
var inst_32702 = (state_32800[(8)]);
var state_32800__$1 = state_32800;
var statearr_32844_32896 = state_32800__$1;
(statearr_32844_32896[(2)] = inst_32702);

(statearr_32844_32896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (5))){
var state_32800__$1 = state_32800;
var statearr_32845_32897 = state_32800__$1;
(statearr_32845_32897[(2)] = true);

(statearr_32845_32897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (14))){
var state_32800__$1 = state_32800;
var statearr_32846_32898 = state_32800__$1;
(statearr_32846_32898[(2)] = false);

(statearr_32846_32898[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (26))){
var inst_32760 = (state_32800[(10)]);
var inst_32767 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32760);
var state_32800__$1 = state_32800;
var statearr_32847_32899 = state_32800__$1;
(statearr_32847_32899[(2)] = inst_32767);

(statearr_32847_32899[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (16))){
var state_32800__$1 = state_32800;
var statearr_32848_32900 = state_32800__$1;
(statearr_32848_32900[(2)] = true);

(statearr_32848_32900[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (38))){
var inst_32790 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
var statearr_32849_32901 = state_32800__$1;
(statearr_32849_32901[(2)] = inst_32790);

(statearr_32849_32901[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (30))){
var inst_32751 = (state_32800[(9)]);
var inst_32760 = (state_32800[(10)]);
var inst_32752 = (state_32800[(13)]);
var inst_32777 = cljs.core.empty_QMARK_(inst_32751);
var inst_32778 = (inst_32752.cljs$core$IFn$_invoke$arity$1 ? inst_32752.cljs$core$IFn$_invoke$arity$1(inst_32760) : inst_32752.call(null,inst_32760));
var inst_32779 = cljs.core.not(inst_32778);
var inst_32780 = ((inst_32777) && (inst_32779));
var state_32800__$1 = state_32800;
var statearr_32850_32902 = state_32800__$1;
(statearr_32850_32902[(2)] = inst_32780);

(statearr_32850_32902[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (10))){
var inst_32702 = (state_32800[(8)]);
var inst_32723 = (state_32800[(2)]);
var inst_32724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32723,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32723,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32723,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32727 = inst_32702;
var state_32800__$1 = (function (){var statearr_32851 = state_32800;
(statearr_32851[(16)] = inst_32725);

(statearr_32851[(17)] = inst_32724);

(statearr_32851[(7)] = inst_32727);

(statearr_32851[(18)] = inst_32726);

return statearr_32851;
})();
var statearr_32852_32903 = state_32800__$1;
(statearr_32852_32903[(2)] = null);

(statearr_32852_32903[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (18))){
var inst_32742 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
var statearr_32853_32904 = state_32800__$1;
(statearr_32853_32904[(2)] = inst_32742);

(statearr_32853_32904[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (37))){
var state_32800__$1 = state_32800;
var statearr_32854_32905 = state_32800__$1;
(statearr_32854_32905[(2)] = null);

(statearr_32854_32905[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (8))){
var inst_32702 = (state_32800[(8)]);
var inst_32720 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32702);
var state_32800__$1 = state_32800;
var statearr_32855_32906 = state_32800__$1;
(statearr_32855_32906[(2)] = inst_32720);

(statearr_32855_32906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31348__auto___32860,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30985__auto__,c__31348__auto___32860,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30986__auto__ = null;
var cljs$core$async$mix_$_state_machine__30986__auto____0 = (function (){
var statearr_32856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32856[(0)] = cljs$core$async$mix_$_state_machine__30986__auto__);

(statearr_32856[(1)] = (1));

return statearr_32856;
});
var cljs$core$async$mix_$_state_machine__30986__auto____1 = (function (state_32800){
while(true){
var ret_value__30987__auto__ = (function (){try{while(true){
var result__30988__auto__ = switch__30985__auto__(state_32800);
if(cljs.core.keyword_identical_QMARK_(result__30988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30988__auto__;
}
break;
}
}catch (e32857){if((e32857 instanceof Object)){
var ex__30989__auto__ = e32857;
var statearr_32858_32907 = state_32800;
(statearr_32858_32907[(5)] = ex__30989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32857;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32908 = state_32800;
state_32800 = G__32908;
continue;
} else {
return ret_value__30987__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30986__auto__ = function(state_32800){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30986__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30986__auto____1.call(this,state_32800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30986__auto____0;
cljs$core$async$mix_$_state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30986__auto____1;
return cljs$core$async$mix_$_state_machine__30986__auto__;
})()
;})(switch__30985__auto__,c__31348__auto___32860,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31350__auto__ = (function (){var statearr_32859 = (f__31349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31349__auto__.cljs$core$IFn$_invoke$arity$0() : f__31349__auto__.call(null));
(statearr_32859[(6)] = c__31348__auto___32860);

return statearr_32859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31350__auto__);
});})(c__31348__auto___32860,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto__.call(null,p,v,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32910 = arguments.length;
switch (G__32910) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto__.call(null,p));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto__.call(null,p,v));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32914 = arguments.length;
switch (G__32914) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3949__auto__,mults){
return (function (p1__32912_SHARP_){
if(cljs.core.truth_((p1__32912_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32912_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32912_SHARP_.call(null,topic)))){
return p1__32912_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32912_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32915 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32915 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32916){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32916 = meta32916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32917,meta32916__$1){
var self__ = this;
var _32917__$1 = this;
return (new cljs.core.async.t_cljs$core$async32915(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32916__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32915.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32917){
var self__ = this;
var _32917__$1 = this;
return self__.meta32916;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32915.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32915.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32915.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32915.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32915.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32915.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32915.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32915.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32916","meta32916",466573641,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32915.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32915.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32915";

cljs.core.async.t_cljs$core$async32915.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async32915");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32915.
 */
cljs.core.async.__GT_t_cljs$core$async32915 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32915(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32916){
return (new cljs.core.async.t_cljs$core$async32915(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32916));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32915(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31348__auto___33035 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31348__auto___33035,mults,ensure_mult,p){
return (function (){
var f__31349__auto__ = (function (){var switch__30985__auto__ = ((function (c__31348__auto___33035,mults,ensure_mult,p){
return (function (state_32989){
var state_val_32990 = (state_32989[(1)]);
if((state_val_32990 === (7))){
var inst_32985 = (state_32989[(2)]);
var state_32989__$1 = state_32989;
var statearr_32991_33036 = state_32989__$1;
(statearr_32991_33036[(2)] = inst_32985);

(statearr_32991_33036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (20))){
var state_32989__$1 = state_32989;
var statearr_32992_33037 = state_32989__$1;
(statearr_32992_33037[(2)] = null);

(statearr_32992_33037[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (1))){
var state_32989__$1 = state_32989;
var statearr_32993_33038 = state_32989__$1;
(statearr_32993_33038[(2)] = null);

(statearr_32993_33038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (24))){
var inst_32968 = (state_32989[(7)]);
var inst_32977 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32968);
var state_32989__$1 = state_32989;
var statearr_32994_33039 = state_32989__$1;
(statearr_32994_33039[(2)] = inst_32977);

(statearr_32994_33039[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (4))){
var inst_32920 = (state_32989[(8)]);
var inst_32920__$1 = (state_32989[(2)]);
var inst_32921 = (inst_32920__$1 == null);
var state_32989__$1 = (function (){var statearr_32995 = state_32989;
(statearr_32995[(8)] = inst_32920__$1);

return statearr_32995;
})();
if(cljs.core.truth_(inst_32921)){
var statearr_32996_33040 = state_32989__$1;
(statearr_32996_33040[(1)] = (5));

} else {
var statearr_32997_33041 = state_32989__$1;
(statearr_32997_33041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (15))){
var inst_32962 = (state_32989[(2)]);
var state_32989__$1 = state_32989;
var statearr_32998_33042 = state_32989__$1;
(statearr_32998_33042[(2)] = inst_32962);

(statearr_32998_33042[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (21))){
var inst_32982 = (state_32989[(2)]);
var state_32989__$1 = (function (){var statearr_32999 = state_32989;
(statearr_32999[(9)] = inst_32982);

return statearr_32999;
})();
var statearr_33000_33043 = state_32989__$1;
(statearr_33000_33043[(2)] = null);

(statearr_33000_33043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (13))){
var inst_32944 = (state_32989[(10)]);
var inst_32946 = cljs.core.chunked_seq_QMARK_(inst_32944);
var state_32989__$1 = state_32989;
if(inst_32946){
var statearr_33001_33044 = state_32989__$1;
(statearr_33001_33044[(1)] = (16));

} else {
var statearr_33002_33045 = state_32989__$1;
(statearr_33002_33045[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (22))){
var inst_32974 = (state_32989[(2)]);
var state_32989__$1 = state_32989;
if(cljs.core.truth_(inst_32974)){
var statearr_33003_33046 = state_32989__$1;
(statearr_33003_33046[(1)] = (23));

} else {
var statearr_33004_33047 = state_32989__$1;
(statearr_33004_33047[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (6))){
var inst_32970 = (state_32989[(11)]);
var inst_32920 = (state_32989[(8)]);
var inst_32968 = (state_32989[(7)]);
var inst_32968__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32920) : topic_fn.call(null,inst_32920));
var inst_32969 = cljs.core.deref(mults);
var inst_32970__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32969,inst_32968__$1);
var state_32989__$1 = (function (){var statearr_33005 = state_32989;
(statearr_33005[(11)] = inst_32970__$1);

(statearr_33005[(7)] = inst_32968__$1);

return statearr_33005;
})();
if(cljs.core.truth_(inst_32970__$1)){
var statearr_33006_33048 = state_32989__$1;
(statearr_33006_33048[(1)] = (19));

} else {
var statearr_33007_33049 = state_32989__$1;
(statearr_33007_33049[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (25))){
var inst_32979 = (state_32989[(2)]);
var state_32989__$1 = state_32989;
var statearr_33008_33050 = state_32989__$1;
(statearr_33008_33050[(2)] = inst_32979);

(statearr_33008_33050[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (17))){
var inst_32944 = (state_32989[(10)]);
var inst_32953 = cljs.core.first(inst_32944);
var inst_32954 = cljs.core.async.muxch_STAR_(inst_32953);
var inst_32955 = cljs.core.async.close_BANG_(inst_32954);
var inst_32956 = cljs.core.next(inst_32944);
var inst_32930 = inst_32956;
var inst_32931 = null;
var inst_32932 = (0);
var inst_32933 = (0);
var state_32989__$1 = (function (){var statearr_33009 = state_32989;
(statearr_33009[(12)] = inst_32932);

(statearr_33009[(13)] = inst_32930);

(statearr_33009[(14)] = inst_32931);

(statearr_33009[(15)] = inst_32933);

(statearr_33009[(16)] = inst_32955);

return statearr_33009;
})();
var statearr_33010_33051 = state_32989__$1;
(statearr_33010_33051[(2)] = null);

(statearr_33010_33051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (3))){
var inst_32987 = (state_32989[(2)]);
var state_32989__$1 = state_32989;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32989__$1,inst_32987);
} else {
if((state_val_32990 === (12))){
var inst_32964 = (state_32989[(2)]);
var state_32989__$1 = state_32989;
var statearr_33011_33052 = state_32989__$1;
(statearr_33011_33052[(2)] = inst_32964);

(statearr_33011_33052[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (2))){
var state_32989__$1 = state_32989;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32989__$1,(4),ch);
} else {
if((state_val_32990 === (23))){
var state_32989__$1 = state_32989;
var statearr_33012_33053 = state_32989__$1;
(statearr_33012_33053[(2)] = null);

(statearr_33012_33053[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (19))){
var inst_32970 = (state_32989[(11)]);
var inst_32920 = (state_32989[(8)]);
var inst_32972 = cljs.core.async.muxch_STAR_(inst_32970);
var state_32989__$1 = state_32989;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32989__$1,(22),inst_32972,inst_32920);
} else {
if((state_val_32990 === (11))){
var inst_32930 = (state_32989[(13)]);
var inst_32944 = (state_32989[(10)]);
var inst_32944__$1 = cljs.core.seq(inst_32930);
var state_32989__$1 = (function (){var statearr_33013 = state_32989;
(statearr_33013[(10)] = inst_32944__$1);

return statearr_33013;
})();
if(inst_32944__$1){
var statearr_33014_33054 = state_32989__$1;
(statearr_33014_33054[(1)] = (13));

} else {
var statearr_33015_33055 = state_32989__$1;
(statearr_33015_33055[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (9))){
var inst_32966 = (state_32989[(2)]);
var state_32989__$1 = state_32989;
var statearr_33016_33056 = state_32989__$1;
(statearr_33016_33056[(2)] = inst_32966);

(statearr_33016_33056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (5))){
var inst_32927 = cljs.core.deref(mults);
var inst_32928 = cljs.core.vals(inst_32927);
var inst_32929 = cljs.core.seq(inst_32928);
var inst_32930 = inst_32929;
var inst_32931 = null;
var inst_32932 = (0);
var inst_32933 = (0);
var state_32989__$1 = (function (){var statearr_33017 = state_32989;
(statearr_33017[(12)] = inst_32932);

(statearr_33017[(13)] = inst_32930);

(statearr_33017[(14)] = inst_32931);

(statearr_33017[(15)] = inst_32933);

return statearr_33017;
})();
var statearr_33018_33057 = state_32989__$1;
(statearr_33018_33057[(2)] = null);

(statearr_33018_33057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (14))){
var state_32989__$1 = state_32989;
var statearr_33022_33058 = state_32989__$1;
(statearr_33022_33058[(2)] = null);

(statearr_33022_33058[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (16))){
var inst_32944 = (state_32989[(10)]);
var inst_32948 = cljs.core.chunk_first(inst_32944);
var inst_32949 = cljs.core.chunk_rest(inst_32944);
var inst_32950 = cljs.core.count(inst_32948);
var inst_32930 = inst_32949;
var inst_32931 = inst_32948;
var inst_32932 = inst_32950;
var inst_32933 = (0);
var state_32989__$1 = (function (){var statearr_33023 = state_32989;
(statearr_33023[(12)] = inst_32932);

(statearr_33023[(13)] = inst_32930);

(statearr_33023[(14)] = inst_32931);

(statearr_33023[(15)] = inst_32933);

return statearr_33023;
})();
var statearr_33024_33059 = state_32989__$1;
(statearr_33024_33059[(2)] = null);

(statearr_33024_33059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (10))){
var inst_32932 = (state_32989[(12)]);
var inst_32930 = (state_32989[(13)]);
var inst_32931 = (state_32989[(14)]);
var inst_32933 = (state_32989[(15)]);
var inst_32938 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32931,inst_32933);
var inst_32939 = cljs.core.async.muxch_STAR_(inst_32938);
var inst_32940 = cljs.core.async.close_BANG_(inst_32939);
var inst_32941 = (inst_32933 + (1));
var tmp33019 = inst_32932;
var tmp33020 = inst_32930;
var tmp33021 = inst_32931;
var inst_32930__$1 = tmp33020;
var inst_32931__$1 = tmp33021;
var inst_32932__$1 = tmp33019;
var inst_32933__$1 = inst_32941;
var state_32989__$1 = (function (){var statearr_33025 = state_32989;
(statearr_33025[(12)] = inst_32932__$1);

(statearr_33025[(13)] = inst_32930__$1);

(statearr_33025[(14)] = inst_32931__$1);

(statearr_33025[(15)] = inst_32933__$1);

(statearr_33025[(17)] = inst_32940);

return statearr_33025;
})();
var statearr_33026_33060 = state_32989__$1;
(statearr_33026_33060[(2)] = null);

(statearr_33026_33060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (18))){
var inst_32959 = (state_32989[(2)]);
var state_32989__$1 = state_32989;
var statearr_33027_33061 = state_32989__$1;
(statearr_33027_33061[(2)] = inst_32959);

(statearr_33027_33061[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (8))){
var inst_32932 = (state_32989[(12)]);
var inst_32933 = (state_32989[(15)]);
var inst_32935 = (inst_32933 < inst_32932);
var inst_32936 = inst_32935;
var state_32989__$1 = state_32989;
if(cljs.core.truth_(inst_32936)){
var statearr_33028_33062 = state_32989__$1;
(statearr_33028_33062[(1)] = (10));

} else {
var statearr_33029_33063 = state_32989__$1;
(statearr_33029_33063[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31348__auto___33035,mults,ensure_mult,p))
;
return ((function (switch__30985__auto__,c__31348__auto___33035,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30986__auto__ = null;
var cljs$core$async$state_machine__30986__auto____0 = (function (){
var statearr_33030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33030[(0)] = cljs$core$async$state_machine__30986__auto__);

(statearr_33030[(1)] = (1));

return statearr_33030;
});
var cljs$core$async$state_machine__30986__auto____1 = (function (state_32989){
while(true){
var ret_value__30987__auto__ = (function (){try{while(true){
var result__30988__auto__ = switch__30985__auto__(state_32989);
if(cljs.core.keyword_identical_QMARK_(result__30988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30988__auto__;
}
break;
}
}catch (e33031){if((e33031 instanceof Object)){
var ex__30989__auto__ = e33031;
var statearr_33032_33064 = state_32989;
(statearr_33032_33064[(5)] = ex__30989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33031;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33065 = state_32989;
state_32989 = G__33065;
continue;
} else {
return ret_value__30987__auto__;
}
break;
}
});
cljs$core$async$state_machine__30986__auto__ = function(state_32989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30986__auto____1.call(this,state_32989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30986__auto____0;
cljs$core$async$state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30986__auto____1;
return cljs$core$async$state_machine__30986__auto__;
})()
;})(switch__30985__auto__,c__31348__auto___33035,mults,ensure_mult,p))
})();
var state__31350__auto__ = (function (){var statearr_33033 = (f__31349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31349__auto__.cljs$core$IFn$_invoke$arity$0() : f__31349__auto__.call(null));
(statearr_33033[(6)] = c__31348__auto___33035);

return statearr_33033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31350__auto__);
});})(c__31348__auto___33035,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33067 = arguments.length;
switch (G__33067) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33070 = arguments.length;
switch (G__33070) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33073 = arguments.length;
switch (G__33073) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__31348__auto___33140 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31348__auto___33140,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31349__auto__ = (function (){var switch__30985__auto__ = ((function (c__31348__auto___33140,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33112){
var state_val_33113 = (state_33112[(1)]);
if((state_val_33113 === (7))){
var state_33112__$1 = state_33112;
var statearr_33114_33141 = state_33112__$1;
(statearr_33114_33141[(2)] = null);

(statearr_33114_33141[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33113 === (1))){
var state_33112__$1 = state_33112;
var statearr_33115_33142 = state_33112__$1;
(statearr_33115_33142[(2)] = null);

(statearr_33115_33142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33113 === (4))){
var inst_33076 = (state_33112[(7)]);
var inst_33078 = (inst_33076 < cnt);
var state_33112__$1 = state_33112;
if(cljs.core.truth_(inst_33078)){
var statearr_33116_33143 = state_33112__$1;
(statearr_33116_33143[(1)] = (6));

} else {
var statearr_33117_33144 = state_33112__$1;
(statearr_33117_33144[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33113 === (15))){
var inst_33108 = (state_33112[(2)]);
var state_33112__$1 = state_33112;
var statearr_33118_33145 = state_33112__$1;
(statearr_33118_33145[(2)] = inst_33108);

(statearr_33118_33145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33113 === (13))){
var inst_33101 = cljs.core.async.close_BANG_(out);
var state_33112__$1 = state_33112;
var statearr_33119_33146 = state_33112__$1;
(statearr_33119_33146[(2)] = inst_33101);

(statearr_33119_33146[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33113 === (6))){
var state_33112__$1 = state_33112;
var statearr_33120_33147 = state_33112__$1;
(statearr_33120_33147[(2)] = null);

(statearr_33120_33147[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33113 === (3))){
var inst_33110 = (state_33112[(2)]);
var state_33112__$1 = state_33112;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33112__$1,inst_33110);
} else {
if((state_val_33113 === (12))){
var inst_33098 = (state_33112[(8)]);
var inst_33098__$1 = (state_33112[(2)]);
var inst_33099 = cljs.core.some(cljs.core.nil_QMARK_,inst_33098__$1);
var state_33112__$1 = (function (){var statearr_33121 = state_33112;
(statearr_33121[(8)] = inst_33098__$1);

return statearr_33121;
})();
if(cljs.core.truth_(inst_33099)){
var statearr_33122_33148 = state_33112__$1;
(statearr_33122_33148[(1)] = (13));

} else {
var statearr_33123_33149 = state_33112__$1;
(statearr_33123_33149[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33113 === (2))){
var inst_33075 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33076 = (0);
var state_33112__$1 = (function (){var statearr_33124 = state_33112;
(statearr_33124[(7)] = inst_33076);

(statearr_33124[(9)] = inst_33075);

return statearr_33124;
})();
var statearr_33125_33150 = state_33112__$1;
(statearr_33125_33150[(2)] = null);

(statearr_33125_33150[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33113 === (11))){
var inst_33076 = (state_33112[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_33112,(10),Object,null,(9));
var inst_33085 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33076) : chs__$1.call(null,inst_33076));
var inst_33086 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33076) : done.call(null,inst_33076));
var inst_33087 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33085,inst_33086);
var state_33112__$1 = state_33112;
var statearr_33126_33151 = state_33112__$1;
(statearr_33126_33151[(2)] = inst_33087);


cljs.core.async.impl.ioc_helpers.process_exception(state_33112__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33113 === (9))){
var inst_33076 = (state_33112[(7)]);
var inst_33089 = (state_33112[(2)]);
var inst_33090 = (inst_33076 + (1));
var inst_33076__$1 = inst_33090;
var state_33112__$1 = (function (){var statearr_33127 = state_33112;
(statearr_33127[(10)] = inst_33089);

(statearr_33127[(7)] = inst_33076__$1);

return statearr_33127;
})();
var statearr_33128_33152 = state_33112__$1;
(statearr_33128_33152[(2)] = null);

(statearr_33128_33152[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33113 === (5))){
var inst_33096 = (state_33112[(2)]);
var state_33112__$1 = (function (){var statearr_33129 = state_33112;
(statearr_33129[(11)] = inst_33096);

return statearr_33129;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33112__$1,(12),dchan);
} else {
if((state_val_33113 === (14))){
var inst_33098 = (state_33112[(8)]);
var inst_33103 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33098);
var state_33112__$1 = state_33112;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33112__$1,(16),out,inst_33103);
} else {
if((state_val_33113 === (16))){
var inst_33105 = (state_33112[(2)]);
var state_33112__$1 = (function (){var statearr_33130 = state_33112;
(statearr_33130[(12)] = inst_33105);

return statearr_33130;
})();
var statearr_33131_33153 = state_33112__$1;
(statearr_33131_33153[(2)] = null);

(statearr_33131_33153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33113 === (10))){
var inst_33080 = (state_33112[(2)]);
var inst_33081 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33112__$1 = (function (){var statearr_33132 = state_33112;
(statearr_33132[(13)] = inst_33080);

return statearr_33132;
})();
var statearr_33133_33154 = state_33112__$1;
(statearr_33133_33154[(2)] = inst_33081);


cljs.core.async.impl.ioc_helpers.process_exception(state_33112__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33113 === (8))){
var inst_33094 = (state_33112[(2)]);
var state_33112__$1 = state_33112;
var statearr_33134_33155 = state_33112__$1;
(statearr_33134_33155[(2)] = inst_33094);

(statearr_33134_33155[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31348__auto___33140,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30985__auto__,c__31348__auto___33140,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30986__auto__ = null;
var cljs$core$async$state_machine__30986__auto____0 = (function (){
var statearr_33135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33135[(0)] = cljs$core$async$state_machine__30986__auto__);

(statearr_33135[(1)] = (1));

return statearr_33135;
});
var cljs$core$async$state_machine__30986__auto____1 = (function (state_33112){
while(true){
var ret_value__30987__auto__ = (function (){try{while(true){
var result__30988__auto__ = switch__30985__auto__(state_33112);
if(cljs.core.keyword_identical_QMARK_(result__30988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30988__auto__;
}
break;
}
}catch (e33136){if((e33136 instanceof Object)){
var ex__30989__auto__ = e33136;
var statearr_33137_33156 = state_33112;
(statearr_33137_33156[(5)] = ex__30989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33136;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33157 = state_33112;
state_33112 = G__33157;
continue;
} else {
return ret_value__30987__auto__;
}
break;
}
});
cljs$core$async$state_machine__30986__auto__ = function(state_33112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30986__auto____1.call(this,state_33112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30986__auto____0;
cljs$core$async$state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30986__auto____1;
return cljs$core$async$state_machine__30986__auto__;
})()
;})(switch__30985__auto__,c__31348__auto___33140,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31350__auto__ = (function (){var statearr_33138 = (f__31349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31349__auto__.cljs$core$IFn$_invoke$arity$0() : f__31349__auto__.call(null));
(statearr_33138[(6)] = c__31348__auto___33140);

return statearr_33138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31350__auto__);
});})(c__31348__auto___33140,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33160 = arguments.length;
switch (G__33160) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31348__auto___33214 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31348__auto___33214,out){
return (function (){
var f__31349__auto__ = (function (){var switch__30985__auto__ = ((function (c__31348__auto___33214,out){
return (function (state_33192){
var state_val_33193 = (state_33192[(1)]);
if((state_val_33193 === (7))){
var inst_33172 = (state_33192[(7)]);
var inst_33171 = (state_33192[(8)]);
var inst_33171__$1 = (state_33192[(2)]);
var inst_33172__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33171__$1,(0),null);
var inst_33173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33171__$1,(1),null);
var inst_33174 = (inst_33172__$1 == null);
var state_33192__$1 = (function (){var statearr_33194 = state_33192;
(statearr_33194[(9)] = inst_33173);

(statearr_33194[(7)] = inst_33172__$1);

(statearr_33194[(8)] = inst_33171__$1);

return statearr_33194;
})();
if(cljs.core.truth_(inst_33174)){
var statearr_33195_33215 = state_33192__$1;
(statearr_33195_33215[(1)] = (8));

} else {
var statearr_33196_33216 = state_33192__$1;
(statearr_33196_33216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (1))){
var inst_33161 = cljs.core.vec(chs);
var inst_33162 = inst_33161;
var state_33192__$1 = (function (){var statearr_33197 = state_33192;
(statearr_33197[(10)] = inst_33162);

return statearr_33197;
})();
var statearr_33198_33217 = state_33192__$1;
(statearr_33198_33217[(2)] = null);

(statearr_33198_33217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (4))){
var inst_33162 = (state_33192[(10)]);
var state_33192__$1 = state_33192;
return cljs.core.async.ioc_alts_BANG_(state_33192__$1,(7),inst_33162);
} else {
if((state_val_33193 === (6))){
var inst_33188 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33199_33218 = state_33192__$1;
(statearr_33199_33218[(2)] = inst_33188);

(statearr_33199_33218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (3))){
var inst_33190 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33192__$1,inst_33190);
} else {
if((state_val_33193 === (2))){
var inst_33162 = (state_33192[(10)]);
var inst_33164 = cljs.core.count(inst_33162);
var inst_33165 = (inst_33164 > (0));
var state_33192__$1 = state_33192;
if(cljs.core.truth_(inst_33165)){
var statearr_33201_33219 = state_33192__$1;
(statearr_33201_33219[(1)] = (4));

} else {
var statearr_33202_33220 = state_33192__$1;
(statearr_33202_33220[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (11))){
var inst_33162 = (state_33192[(10)]);
var inst_33181 = (state_33192[(2)]);
var tmp33200 = inst_33162;
var inst_33162__$1 = tmp33200;
var state_33192__$1 = (function (){var statearr_33203 = state_33192;
(statearr_33203[(11)] = inst_33181);

(statearr_33203[(10)] = inst_33162__$1);

return statearr_33203;
})();
var statearr_33204_33221 = state_33192__$1;
(statearr_33204_33221[(2)] = null);

(statearr_33204_33221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (9))){
var inst_33172 = (state_33192[(7)]);
var state_33192__$1 = state_33192;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33192__$1,(11),out,inst_33172);
} else {
if((state_val_33193 === (5))){
var inst_33186 = cljs.core.async.close_BANG_(out);
var state_33192__$1 = state_33192;
var statearr_33205_33222 = state_33192__$1;
(statearr_33205_33222[(2)] = inst_33186);

(statearr_33205_33222[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (10))){
var inst_33184 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33206_33223 = state_33192__$1;
(statearr_33206_33223[(2)] = inst_33184);

(statearr_33206_33223[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (8))){
var inst_33173 = (state_33192[(9)]);
var inst_33172 = (state_33192[(7)]);
var inst_33171 = (state_33192[(8)]);
var inst_33162 = (state_33192[(10)]);
var inst_33176 = (function (){var cs = inst_33162;
var vec__33167 = inst_33171;
var v = inst_33172;
var c = inst_33173;
return ((function (cs,vec__33167,v,c,inst_33173,inst_33172,inst_33171,inst_33162,state_val_33193,c__31348__auto___33214,out){
return (function (p1__33158_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33158_SHARP_);
});
;})(cs,vec__33167,v,c,inst_33173,inst_33172,inst_33171,inst_33162,state_val_33193,c__31348__auto___33214,out))
})();
var inst_33177 = cljs.core.filterv(inst_33176,inst_33162);
var inst_33162__$1 = inst_33177;
var state_33192__$1 = (function (){var statearr_33207 = state_33192;
(statearr_33207[(10)] = inst_33162__$1);

return statearr_33207;
})();
var statearr_33208_33224 = state_33192__$1;
(statearr_33208_33224[(2)] = null);

(statearr_33208_33224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31348__auto___33214,out))
;
return ((function (switch__30985__auto__,c__31348__auto___33214,out){
return (function() {
var cljs$core$async$state_machine__30986__auto__ = null;
var cljs$core$async$state_machine__30986__auto____0 = (function (){
var statearr_33209 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33209[(0)] = cljs$core$async$state_machine__30986__auto__);

(statearr_33209[(1)] = (1));

return statearr_33209;
});
var cljs$core$async$state_machine__30986__auto____1 = (function (state_33192){
while(true){
var ret_value__30987__auto__ = (function (){try{while(true){
var result__30988__auto__ = switch__30985__auto__(state_33192);
if(cljs.core.keyword_identical_QMARK_(result__30988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30988__auto__;
}
break;
}
}catch (e33210){if((e33210 instanceof Object)){
var ex__30989__auto__ = e33210;
var statearr_33211_33225 = state_33192;
(statearr_33211_33225[(5)] = ex__30989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33210;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33226 = state_33192;
state_33192 = G__33226;
continue;
} else {
return ret_value__30987__auto__;
}
break;
}
});
cljs$core$async$state_machine__30986__auto__ = function(state_33192){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30986__auto____1.call(this,state_33192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30986__auto____0;
cljs$core$async$state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30986__auto____1;
return cljs$core$async$state_machine__30986__auto__;
})()
;})(switch__30985__auto__,c__31348__auto___33214,out))
})();
var state__31350__auto__ = (function (){var statearr_33212 = (f__31349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31349__auto__.cljs$core$IFn$_invoke$arity$0() : f__31349__auto__.call(null));
(statearr_33212[(6)] = c__31348__auto___33214);

return statearr_33212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31350__auto__);
});})(c__31348__auto___33214,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33228 = arguments.length;
switch (G__33228) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31348__auto___33273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31348__auto___33273,out){
return (function (){
var f__31349__auto__ = (function (){var switch__30985__auto__ = ((function (c__31348__auto___33273,out){
return (function (state_33252){
var state_val_33253 = (state_33252[(1)]);
if((state_val_33253 === (7))){
var inst_33234 = (state_33252[(7)]);
var inst_33234__$1 = (state_33252[(2)]);
var inst_33235 = (inst_33234__$1 == null);
var inst_33236 = cljs.core.not(inst_33235);
var state_33252__$1 = (function (){var statearr_33254 = state_33252;
(statearr_33254[(7)] = inst_33234__$1);

return statearr_33254;
})();
if(inst_33236){
var statearr_33255_33274 = state_33252__$1;
(statearr_33255_33274[(1)] = (8));

} else {
var statearr_33256_33275 = state_33252__$1;
(statearr_33256_33275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (1))){
var inst_33229 = (0);
var state_33252__$1 = (function (){var statearr_33257 = state_33252;
(statearr_33257[(8)] = inst_33229);

return statearr_33257;
})();
var statearr_33258_33276 = state_33252__$1;
(statearr_33258_33276[(2)] = null);

(statearr_33258_33276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (4))){
var state_33252__$1 = state_33252;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33252__$1,(7),ch);
} else {
if((state_val_33253 === (6))){
var inst_33247 = (state_33252[(2)]);
var state_33252__$1 = state_33252;
var statearr_33259_33277 = state_33252__$1;
(statearr_33259_33277[(2)] = inst_33247);

(statearr_33259_33277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (3))){
var inst_33249 = (state_33252[(2)]);
var inst_33250 = cljs.core.async.close_BANG_(out);
var state_33252__$1 = (function (){var statearr_33260 = state_33252;
(statearr_33260[(9)] = inst_33249);

return statearr_33260;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33252__$1,inst_33250);
} else {
if((state_val_33253 === (2))){
var inst_33229 = (state_33252[(8)]);
var inst_33231 = (inst_33229 < n);
var state_33252__$1 = state_33252;
if(cljs.core.truth_(inst_33231)){
var statearr_33261_33278 = state_33252__$1;
(statearr_33261_33278[(1)] = (4));

} else {
var statearr_33262_33279 = state_33252__$1;
(statearr_33262_33279[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (11))){
var inst_33229 = (state_33252[(8)]);
var inst_33239 = (state_33252[(2)]);
var inst_33240 = (inst_33229 + (1));
var inst_33229__$1 = inst_33240;
var state_33252__$1 = (function (){var statearr_33263 = state_33252;
(statearr_33263[(8)] = inst_33229__$1);

(statearr_33263[(10)] = inst_33239);

return statearr_33263;
})();
var statearr_33264_33280 = state_33252__$1;
(statearr_33264_33280[(2)] = null);

(statearr_33264_33280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (9))){
var state_33252__$1 = state_33252;
var statearr_33265_33281 = state_33252__$1;
(statearr_33265_33281[(2)] = null);

(statearr_33265_33281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (5))){
var state_33252__$1 = state_33252;
var statearr_33266_33282 = state_33252__$1;
(statearr_33266_33282[(2)] = null);

(statearr_33266_33282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (10))){
var inst_33244 = (state_33252[(2)]);
var state_33252__$1 = state_33252;
var statearr_33267_33283 = state_33252__$1;
(statearr_33267_33283[(2)] = inst_33244);

(statearr_33267_33283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (8))){
var inst_33234 = (state_33252[(7)]);
var state_33252__$1 = state_33252;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33252__$1,(11),out,inst_33234);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31348__auto___33273,out))
;
return ((function (switch__30985__auto__,c__31348__auto___33273,out){
return (function() {
var cljs$core$async$state_machine__30986__auto__ = null;
var cljs$core$async$state_machine__30986__auto____0 = (function (){
var statearr_33268 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33268[(0)] = cljs$core$async$state_machine__30986__auto__);

(statearr_33268[(1)] = (1));

return statearr_33268;
});
var cljs$core$async$state_machine__30986__auto____1 = (function (state_33252){
while(true){
var ret_value__30987__auto__ = (function (){try{while(true){
var result__30988__auto__ = switch__30985__auto__(state_33252);
if(cljs.core.keyword_identical_QMARK_(result__30988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30988__auto__;
}
break;
}
}catch (e33269){if((e33269 instanceof Object)){
var ex__30989__auto__ = e33269;
var statearr_33270_33284 = state_33252;
(statearr_33270_33284[(5)] = ex__30989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33269;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33285 = state_33252;
state_33252 = G__33285;
continue;
} else {
return ret_value__30987__auto__;
}
break;
}
});
cljs$core$async$state_machine__30986__auto__ = function(state_33252){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30986__auto____1.call(this,state_33252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30986__auto____0;
cljs$core$async$state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30986__auto____1;
return cljs$core$async$state_machine__30986__auto__;
})()
;})(switch__30985__auto__,c__31348__auto___33273,out))
})();
var state__31350__auto__ = (function (){var statearr_33271 = (f__31349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31349__auto__.cljs$core$IFn$_invoke$arity$0() : f__31349__auto__.call(null));
(statearr_33271[(6)] = c__31348__auto___33273);

return statearr_33271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31350__auto__);
});})(c__31348__auto___33273,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33287 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33287 = (function (f,ch,meta33288){
this.f = f;
this.ch = ch;
this.meta33288 = meta33288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33289,meta33288__$1){
var self__ = this;
var _33289__$1 = this;
return (new cljs.core.async.t_cljs$core$async33287(self__.f,self__.ch,meta33288__$1));
});

cljs.core.async.t_cljs$core$async33287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33289){
var self__ = this;
var _33289__$1 = this;
return self__.meta33288;
});

cljs.core.async.t_cljs$core$async33287.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33287.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async33287.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async33287.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33287.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33290 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33290 = (function (f,ch,meta33288,_,fn1,meta33291){
this.f = f;
this.ch = ch;
this.meta33288 = meta33288;
this._ = _;
this.fn1 = fn1;
this.meta33291 = meta33291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33292,meta33291__$1){
var self__ = this;
var _33292__$1 = this;
return (new cljs.core.async.t_cljs$core$async33290(self__.f,self__.ch,self__.meta33288,self__._,self__.fn1,meta33291__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33290.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33292){
var self__ = this;
var _33292__$1 = this;
return self__.meta33291;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33290.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33290.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33290.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33290.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33286_SHARP_){
var G__33293 = (((p1__33286_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33286_SHARP_) : self__.f.call(null,p1__33286_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33293) : f1.call(null,G__33293));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33290.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33288","meta33288",472182674,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33287","cljs.core.async/t_cljs$core$async33287",1404912897,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33291","meta33291",763124821,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33290.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33290.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33290";

cljs.core.async.t_cljs$core$async33290.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async33290");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33290.
 */
cljs.core.async.__GT_t_cljs$core$async33290 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33290(f__$1,ch__$1,meta33288__$1,___$2,fn1__$1,meta33291){
return (new cljs.core.async.t_cljs$core$async33290(f__$1,ch__$1,meta33288__$1,___$2,fn1__$1,meta33291));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33290(self__.f,self__.ch,self__.meta33288,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33294 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33294) : self__.f.call(null,G__33294));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33287.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33287.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33288","meta33288",472182674,null)], null);
});

cljs.core.async.t_cljs$core$async33287.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33287";

cljs.core.async.t_cljs$core$async33287.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async33287");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33287.
 */
cljs.core.async.__GT_t_cljs$core$async33287 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33287(f__$1,ch__$1,meta33288){
return (new cljs.core.async.t_cljs$core$async33287(f__$1,ch__$1,meta33288));
});

}

return (new cljs.core.async.t_cljs$core$async33287(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33295 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33295 = (function (f,ch,meta33296){
this.f = f;
this.ch = ch;
this.meta33296 = meta33296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33297,meta33296__$1){
var self__ = this;
var _33297__$1 = this;
return (new cljs.core.async.t_cljs$core$async33295(self__.f,self__.ch,meta33296__$1));
});

cljs.core.async.t_cljs$core$async33295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33297){
var self__ = this;
var _33297__$1 = this;
return self__.meta33296;
});

cljs.core.async.t_cljs$core$async33295.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33295.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async33295.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33295.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33295.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33295.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async33295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33296","meta33296",-891975469,null)], null);
});

cljs.core.async.t_cljs$core$async33295.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33295.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33295";

cljs.core.async.t_cljs$core$async33295.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async33295");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33295.
 */
cljs.core.async.__GT_t_cljs$core$async33295 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33295(f__$1,ch__$1,meta33296){
return (new cljs.core.async.t_cljs$core$async33295(f__$1,ch__$1,meta33296));
});

}

return (new cljs.core.async.t_cljs$core$async33295(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33298 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33298 = (function (p,ch,meta33299){
this.p = p;
this.ch = ch;
this.meta33299 = meta33299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33300,meta33299__$1){
var self__ = this;
var _33300__$1 = this;
return (new cljs.core.async.t_cljs$core$async33298(self__.p,self__.ch,meta33299__$1));
});

cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33300){
var self__ = this;
var _33300__$1 = this;
return self__.meta33299;
});

cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33298.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33299","meta33299",-1730213020,null)], null);
});

cljs.core.async.t_cljs$core$async33298.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33298.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33298";

cljs.core.async.t_cljs$core$async33298.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async33298");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33298.
 */
cljs.core.async.__GT_t_cljs$core$async33298 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33298(p__$1,ch__$1,meta33299){
return (new cljs.core.async.t_cljs$core$async33298(p__$1,ch__$1,meta33299));
});

}

return (new cljs.core.async.t_cljs$core$async33298(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33302 = arguments.length;
switch (G__33302) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31348__auto___33342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31348__auto___33342,out){
return (function (){
var f__31349__auto__ = (function (){var switch__30985__auto__ = ((function (c__31348__auto___33342,out){
return (function (state_33323){
var state_val_33324 = (state_33323[(1)]);
if((state_val_33324 === (7))){
var inst_33319 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
var statearr_33325_33343 = state_33323__$1;
(statearr_33325_33343[(2)] = inst_33319);

(statearr_33325_33343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (1))){
var state_33323__$1 = state_33323;
var statearr_33326_33344 = state_33323__$1;
(statearr_33326_33344[(2)] = null);

(statearr_33326_33344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (4))){
var inst_33305 = (state_33323[(7)]);
var inst_33305__$1 = (state_33323[(2)]);
var inst_33306 = (inst_33305__$1 == null);
var state_33323__$1 = (function (){var statearr_33327 = state_33323;
(statearr_33327[(7)] = inst_33305__$1);

return statearr_33327;
})();
if(cljs.core.truth_(inst_33306)){
var statearr_33328_33345 = state_33323__$1;
(statearr_33328_33345[(1)] = (5));

} else {
var statearr_33329_33346 = state_33323__$1;
(statearr_33329_33346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (6))){
var inst_33305 = (state_33323[(7)]);
var inst_33310 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33305) : p.call(null,inst_33305));
var state_33323__$1 = state_33323;
if(cljs.core.truth_(inst_33310)){
var statearr_33330_33347 = state_33323__$1;
(statearr_33330_33347[(1)] = (8));

} else {
var statearr_33331_33348 = state_33323__$1;
(statearr_33331_33348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (3))){
var inst_33321 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33323__$1,inst_33321);
} else {
if((state_val_33324 === (2))){
var state_33323__$1 = state_33323;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33323__$1,(4),ch);
} else {
if((state_val_33324 === (11))){
var inst_33313 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
var statearr_33332_33349 = state_33323__$1;
(statearr_33332_33349[(2)] = inst_33313);

(statearr_33332_33349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (9))){
var state_33323__$1 = state_33323;
var statearr_33333_33350 = state_33323__$1;
(statearr_33333_33350[(2)] = null);

(statearr_33333_33350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (5))){
var inst_33308 = cljs.core.async.close_BANG_(out);
var state_33323__$1 = state_33323;
var statearr_33334_33351 = state_33323__$1;
(statearr_33334_33351[(2)] = inst_33308);

(statearr_33334_33351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (10))){
var inst_33316 = (state_33323[(2)]);
var state_33323__$1 = (function (){var statearr_33335 = state_33323;
(statearr_33335[(8)] = inst_33316);

return statearr_33335;
})();
var statearr_33336_33352 = state_33323__$1;
(statearr_33336_33352[(2)] = null);

(statearr_33336_33352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (8))){
var inst_33305 = (state_33323[(7)]);
var state_33323__$1 = state_33323;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33323__$1,(11),out,inst_33305);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31348__auto___33342,out))
;
return ((function (switch__30985__auto__,c__31348__auto___33342,out){
return (function() {
var cljs$core$async$state_machine__30986__auto__ = null;
var cljs$core$async$state_machine__30986__auto____0 = (function (){
var statearr_33337 = [null,null,null,null,null,null,null,null,null];
(statearr_33337[(0)] = cljs$core$async$state_machine__30986__auto__);

(statearr_33337[(1)] = (1));

return statearr_33337;
});
var cljs$core$async$state_machine__30986__auto____1 = (function (state_33323){
while(true){
var ret_value__30987__auto__ = (function (){try{while(true){
var result__30988__auto__ = switch__30985__auto__(state_33323);
if(cljs.core.keyword_identical_QMARK_(result__30988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30988__auto__;
}
break;
}
}catch (e33338){if((e33338 instanceof Object)){
var ex__30989__auto__ = e33338;
var statearr_33339_33353 = state_33323;
(statearr_33339_33353[(5)] = ex__30989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33338;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33354 = state_33323;
state_33323 = G__33354;
continue;
} else {
return ret_value__30987__auto__;
}
break;
}
});
cljs$core$async$state_machine__30986__auto__ = function(state_33323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30986__auto____1.call(this,state_33323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30986__auto____0;
cljs$core$async$state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30986__auto____1;
return cljs$core$async$state_machine__30986__auto__;
})()
;})(switch__30985__auto__,c__31348__auto___33342,out))
})();
var state__31350__auto__ = (function (){var statearr_33340 = (f__31349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31349__auto__.cljs$core$IFn$_invoke$arity$0() : f__31349__auto__.call(null));
(statearr_33340[(6)] = c__31348__auto___33342);

return statearr_33340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31350__auto__);
});})(c__31348__auto___33342,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33356 = arguments.length;
switch (G__33356) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31348__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31348__auto__){
return (function (){
var f__31349__auto__ = (function (){var switch__30985__auto__ = ((function (c__31348__auto__){
return (function (state_33419){
var state_val_33420 = (state_33419[(1)]);
if((state_val_33420 === (7))){
var inst_33415 = (state_33419[(2)]);
var state_33419__$1 = state_33419;
var statearr_33421_33459 = state_33419__$1;
(statearr_33421_33459[(2)] = inst_33415);

(statearr_33421_33459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (20))){
var inst_33385 = (state_33419[(7)]);
var inst_33396 = (state_33419[(2)]);
var inst_33397 = cljs.core.next(inst_33385);
var inst_33371 = inst_33397;
var inst_33372 = null;
var inst_33373 = (0);
var inst_33374 = (0);
var state_33419__$1 = (function (){var statearr_33422 = state_33419;
(statearr_33422[(8)] = inst_33396);

(statearr_33422[(9)] = inst_33371);

(statearr_33422[(10)] = inst_33372);

(statearr_33422[(11)] = inst_33373);

(statearr_33422[(12)] = inst_33374);

return statearr_33422;
})();
var statearr_33423_33460 = state_33419__$1;
(statearr_33423_33460[(2)] = null);

(statearr_33423_33460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (1))){
var state_33419__$1 = state_33419;
var statearr_33424_33461 = state_33419__$1;
(statearr_33424_33461[(2)] = null);

(statearr_33424_33461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (4))){
var inst_33360 = (state_33419[(13)]);
var inst_33360__$1 = (state_33419[(2)]);
var inst_33361 = (inst_33360__$1 == null);
var state_33419__$1 = (function (){var statearr_33425 = state_33419;
(statearr_33425[(13)] = inst_33360__$1);

return statearr_33425;
})();
if(cljs.core.truth_(inst_33361)){
var statearr_33426_33462 = state_33419__$1;
(statearr_33426_33462[(1)] = (5));

} else {
var statearr_33427_33463 = state_33419__$1;
(statearr_33427_33463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (15))){
var state_33419__$1 = state_33419;
var statearr_33431_33464 = state_33419__$1;
(statearr_33431_33464[(2)] = null);

(statearr_33431_33464[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (21))){
var state_33419__$1 = state_33419;
var statearr_33432_33465 = state_33419__$1;
(statearr_33432_33465[(2)] = null);

(statearr_33432_33465[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (13))){
var inst_33371 = (state_33419[(9)]);
var inst_33372 = (state_33419[(10)]);
var inst_33373 = (state_33419[(11)]);
var inst_33374 = (state_33419[(12)]);
var inst_33381 = (state_33419[(2)]);
var inst_33382 = (inst_33374 + (1));
var tmp33428 = inst_33371;
var tmp33429 = inst_33372;
var tmp33430 = inst_33373;
var inst_33371__$1 = tmp33428;
var inst_33372__$1 = tmp33429;
var inst_33373__$1 = tmp33430;
var inst_33374__$1 = inst_33382;
var state_33419__$1 = (function (){var statearr_33433 = state_33419;
(statearr_33433[(9)] = inst_33371__$1);

(statearr_33433[(10)] = inst_33372__$1);

(statearr_33433[(11)] = inst_33373__$1);

(statearr_33433[(12)] = inst_33374__$1);

(statearr_33433[(14)] = inst_33381);

return statearr_33433;
})();
var statearr_33434_33466 = state_33419__$1;
(statearr_33434_33466[(2)] = null);

(statearr_33434_33466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (22))){
var state_33419__$1 = state_33419;
var statearr_33435_33467 = state_33419__$1;
(statearr_33435_33467[(2)] = null);

(statearr_33435_33467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (6))){
var inst_33360 = (state_33419[(13)]);
var inst_33369 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33360) : f.call(null,inst_33360));
var inst_33370 = cljs.core.seq(inst_33369);
var inst_33371 = inst_33370;
var inst_33372 = null;
var inst_33373 = (0);
var inst_33374 = (0);
var state_33419__$1 = (function (){var statearr_33436 = state_33419;
(statearr_33436[(9)] = inst_33371);

(statearr_33436[(10)] = inst_33372);

(statearr_33436[(11)] = inst_33373);

(statearr_33436[(12)] = inst_33374);

return statearr_33436;
})();
var statearr_33437_33468 = state_33419__$1;
(statearr_33437_33468[(2)] = null);

(statearr_33437_33468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (17))){
var inst_33385 = (state_33419[(7)]);
var inst_33389 = cljs.core.chunk_first(inst_33385);
var inst_33390 = cljs.core.chunk_rest(inst_33385);
var inst_33391 = cljs.core.count(inst_33389);
var inst_33371 = inst_33390;
var inst_33372 = inst_33389;
var inst_33373 = inst_33391;
var inst_33374 = (0);
var state_33419__$1 = (function (){var statearr_33438 = state_33419;
(statearr_33438[(9)] = inst_33371);

(statearr_33438[(10)] = inst_33372);

(statearr_33438[(11)] = inst_33373);

(statearr_33438[(12)] = inst_33374);

return statearr_33438;
})();
var statearr_33439_33469 = state_33419__$1;
(statearr_33439_33469[(2)] = null);

(statearr_33439_33469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (3))){
var inst_33417 = (state_33419[(2)]);
var state_33419__$1 = state_33419;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33419__$1,inst_33417);
} else {
if((state_val_33420 === (12))){
var inst_33405 = (state_33419[(2)]);
var state_33419__$1 = state_33419;
var statearr_33440_33470 = state_33419__$1;
(statearr_33440_33470[(2)] = inst_33405);

(statearr_33440_33470[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (2))){
var state_33419__$1 = state_33419;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33419__$1,(4),in$);
} else {
if((state_val_33420 === (23))){
var inst_33413 = (state_33419[(2)]);
var state_33419__$1 = state_33419;
var statearr_33441_33471 = state_33419__$1;
(statearr_33441_33471[(2)] = inst_33413);

(statearr_33441_33471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (19))){
var inst_33400 = (state_33419[(2)]);
var state_33419__$1 = state_33419;
var statearr_33442_33472 = state_33419__$1;
(statearr_33442_33472[(2)] = inst_33400);

(statearr_33442_33472[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (11))){
var inst_33371 = (state_33419[(9)]);
var inst_33385 = (state_33419[(7)]);
var inst_33385__$1 = cljs.core.seq(inst_33371);
var state_33419__$1 = (function (){var statearr_33443 = state_33419;
(statearr_33443[(7)] = inst_33385__$1);

return statearr_33443;
})();
if(inst_33385__$1){
var statearr_33444_33473 = state_33419__$1;
(statearr_33444_33473[(1)] = (14));

} else {
var statearr_33445_33474 = state_33419__$1;
(statearr_33445_33474[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (9))){
var inst_33407 = (state_33419[(2)]);
var inst_33408 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33419__$1 = (function (){var statearr_33446 = state_33419;
(statearr_33446[(15)] = inst_33407);

return statearr_33446;
})();
if(cljs.core.truth_(inst_33408)){
var statearr_33447_33475 = state_33419__$1;
(statearr_33447_33475[(1)] = (21));

} else {
var statearr_33448_33476 = state_33419__$1;
(statearr_33448_33476[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (5))){
var inst_33363 = cljs.core.async.close_BANG_(out);
var state_33419__$1 = state_33419;
var statearr_33449_33477 = state_33419__$1;
(statearr_33449_33477[(2)] = inst_33363);

(statearr_33449_33477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (14))){
var inst_33385 = (state_33419[(7)]);
var inst_33387 = cljs.core.chunked_seq_QMARK_(inst_33385);
var state_33419__$1 = state_33419;
if(inst_33387){
var statearr_33450_33478 = state_33419__$1;
(statearr_33450_33478[(1)] = (17));

} else {
var statearr_33451_33479 = state_33419__$1;
(statearr_33451_33479[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (16))){
var inst_33403 = (state_33419[(2)]);
var state_33419__$1 = state_33419;
var statearr_33452_33480 = state_33419__$1;
(statearr_33452_33480[(2)] = inst_33403);

(statearr_33452_33480[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (10))){
var inst_33372 = (state_33419[(10)]);
var inst_33374 = (state_33419[(12)]);
var inst_33379 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33372,inst_33374);
var state_33419__$1 = state_33419;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33419__$1,(13),out,inst_33379);
} else {
if((state_val_33420 === (18))){
var inst_33385 = (state_33419[(7)]);
var inst_33394 = cljs.core.first(inst_33385);
var state_33419__$1 = state_33419;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33419__$1,(20),out,inst_33394);
} else {
if((state_val_33420 === (8))){
var inst_33373 = (state_33419[(11)]);
var inst_33374 = (state_33419[(12)]);
var inst_33376 = (inst_33374 < inst_33373);
var inst_33377 = inst_33376;
var state_33419__$1 = state_33419;
if(cljs.core.truth_(inst_33377)){
var statearr_33453_33481 = state_33419__$1;
(statearr_33453_33481[(1)] = (10));

} else {
var statearr_33454_33482 = state_33419__$1;
(statearr_33454_33482[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31348__auto__))
;
return ((function (switch__30985__auto__,c__31348__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30986__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30986__auto____0 = (function (){
var statearr_33455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33455[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30986__auto__);

(statearr_33455[(1)] = (1));

return statearr_33455;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30986__auto____1 = (function (state_33419){
while(true){
var ret_value__30987__auto__ = (function (){try{while(true){
var result__30988__auto__ = switch__30985__auto__(state_33419);
if(cljs.core.keyword_identical_QMARK_(result__30988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30988__auto__;
}
break;
}
}catch (e33456){if((e33456 instanceof Object)){
var ex__30989__auto__ = e33456;
var statearr_33457_33483 = state_33419;
(statearr_33457_33483[(5)] = ex__30989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33484 = state_33419;
state_33419 = G__33484;
continue;
} else {
return ret_value__30987__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30986__auto__ = function(state_33419){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30986__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30986__auto____1.call(this,state_33419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30986__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30986__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30986__auto__;
})()
;})(switch__30985__auto__,c__31348__auto__))
})();
var state__31350__auto__ = (function (){var statearr_33458 = (f__31349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31349__auto__.cljs$core$IFn$_invoke$arity$0() : f__31349__auto__.call(null));
(statearr_33458[(6)] = c__31348__auto__);

return statearr_33458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31350__auto__);
});})(c__31348__auto__))
);

return c__31348__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33486 = arguments.length;
switch (G__33486) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33489 = arguments.length;
switch (G__33489) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33492 = arguments.length;
switch (G__33492) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31348__auto___33539 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31348__auto___33539,out){
return (function (){
var f__31349__auto__ = (function (){var switch__30985__auto__ = ((function (c__31348__auto___33539,out){
return (function (state_33516){
var state_val_33517 = (state_33516[(1)]);
if((state_val_33517 === (7))){
var inst_33511 = (state_33516[(2)]);
var state_33516__$1 = state_33516;
var statearr_33518_33540 = state_33516__$1;
(statearr_33518_33540[(2)] = inst_33511);

(statearr_33518_33540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (1))){
var inst_33493 = null;
var state_33516__$1 = (function (){var statearr_33519 = state_33516;
(statearr_33519[(7)] = inst_33493);

return statearr_33519;
})();
var statearr_33520_33541 = state_33516__$1;
(statearr_33520_33541[(2)] = null);

(statearr_33520_33541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (4))){
var inst_33496 = (state_33516[(8)]);
var inst_33496__$1 = (state_33516[(2)]);
var inst_33497 = (inst_33496__$1 == null);
var inst_33498 = cljs.core.not(inst_33497);
var state_33516__$1 = (function (){var statearr_33521 = state_33516;
(statearr_33521[(8)] = inst_33496__$1);

return statearr_33521;
})();
if(inst_33498){
var statearr_33522_33542 = state_33516__$1;
(statearr_33522_33542[(1)] = (5));

} else {
var statearr_33523_33543 = state_33516__$1;
(statearr_33523_33543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (6))){
var state_33516__$1 = state_33516;
var statearr_33524_33544 = state_33516__$1;
(statearr_33524_33544[(2)] = null);

(statearr_33524_33544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (3))){
var inst_33513 = (state_33516[(2)]);
var inst_33514 = cljs.core.async.close_BANG_(out);
var state_33516__$1 = (function (){var statearr_33525 = state_33516;
(statearr_33525[(9)] = inst_33513);

return statearr_33525;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33516__$1,inst_33514);
} else {
if((state_val_33517 === (2))){
var state_33516__$1 = state_33516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33516__$1,(4),ch);
} else {
if((state_val_33517 === (11))){
var inst_33496 = (state_33516[(8)]);
var inst_33505 = (state_33516[(2)]);
var inst_33493 = inst_33496;
var state_33516__$1 = (function (){var statearr_33526 = state_33516;
(statearr_33526[(10)] = inst_33505);

(statearr_33526[(7)] = inst_33493);

return statearr_33526;
})();
var statearr_33527_33545 = state_33516__$1;
(statearr_33527_33545[(2)] = null);

(statearr_33527_33545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (9))){
var inst_33496 = (state_33516[(8)]);
var state_33516__$1 = state_33516;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33516__$1,(11),out,inst_33496);
} else {
if((state_val_33517 === (5))){
var inst_33496 = (state_33516[(8)]);
var inst_33493 = (state_33516[(7)]);
var inst_33500 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33496,inst_33493);
var state_33516__$1 = state_33516;
if(inst_33500){
var statearr_33529_33546 = state_33516__$1;
(statearr_33529_33546[(1)] = (8));

} else {
var statearr_33530_33547 = state_33516__$1;
(statearr_33530_33547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (10))){
var inst_33508 = (state_33516[(2)]);
var state_33516__$1 = state_33516;
var statearr_33531_33548 = state_33516__$1;
(statearr_33531_33548[(2)] = inst_33508);

(statearr_33531_33548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (8))){
var inst_33493 = (state_33516[(7)]);
var tmp33528 = inst_33493;
var inst_33493__$1 = tmp33528;
var state_33516__$1 = (function (){var statearr_33532 = state_33516;
(statearr_33532[(7)] = inst_33493__$1);

return statearr_33532;
})();
var statearr_33533_33549 = state_33516__$1;
(statearr_33533_33549[(2)] = null);

(statearr_33533_33549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31348__auto___33539,out))
;
return ((function (switch__30985__auto__,c__31348__auto___33539,out){
return (function() {
var cljs$core$async$state_machine__30986__auto__ = null;
var cljs$core$async$state_machine__30986__auto____0 = (function (){
var statearr_33534 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33534[(0)] = cljs$core$async$state_machine__30986__auto__);

(statearr_33534[(1)] = (1));

return statearr_33534;
});
var cljs$core$async$state_machine__30986__auto____1 = (function (state_33516){
while(true){
var ret_value__30987__auto__ = (function (){try{while(true){
var result__30988__auto__ = switch__30985__auto__(state_33516);
if(cljs.core.keyword_identical_QMARK_(result__30988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30988__auto__;
}
break;
}
}catch (e33535){if((e33535 instanceof Object)){
var ex__30989__auto__ = e33535;
var statearr_33536_33550 = state_33516;
(statearr_33536_33550[(5)] = ex__30989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33535;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33551 = state_33516;
state_33516 = G__33551;
continue;
} else {
return ret_value__30987__auto__;
}
break;
}
});
cljs$core$async$state_machine__30986__auto__ = function(state_33516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30986__auto____1.call(this,state_33516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30986__auto____0;
cljs$core$async$state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30986__auto____1;
return cljs$core$async$state_machine__30986__auto__;
})()
;})(switch__30985__auto__,c__31348__auto___33539,out))
})();
var state__31350__auto__ = (function (){var statearr_33537 = (f__31349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31349__auto__.cljs$core$IFn$_invoke$arity$0() : f__31349__auto__.call(null));
(statearr_33537[(6)] = c__31348__auto___33539);

return statearr_33537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31350__auto__);
});})(c__31348__auto___33539,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33553 = arguments.length;
switch (G__33553) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31348__auto___33619 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31348__auto___33619,out){
return (function (){
var f__31349__auto__ = (function (){var switch__30985__auto__ = ((function (c__31348__auto___33619,out){
return (function (state_33591){
var state_val_33592 = (state_33591[(1)]);
if((state_val_33592 === (7))){
var inst_33587 = (state_33591[(2)]);
var state_33591__$1 = state_33591;
var statearr_33593_33620 = state_33591__$1;
(statearr_33593_33620[(2)] = inst_33587);

(statearr_33593_33620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (1))){
var inst_33554 = (new Array(n));
var inst_33555 = inst_33554;
var inst_33556 = (0);
var state_33591__$1 = (function (){var statearr_33594 = state_33591;
(statearr_33594[(7)] = inst_33555);

(statearr_33594[(8)] = inst_33556);

return statearr_33594;
})();
var statearr_33595_33621 = state_33591__$1;
(statearr_33595_33621[(2)] = null);

(statearr_33595_33621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (4))){
var inst_33559 = (state_33591[(9)]);
var inst_33559__$1 = (state_33591[(2)]);
var inst_33560 = (inst_33559__$1 == null);
var inst_33561 = cljs.core.not(inst_33560);
var state_33591__$1 = (function (){var statearr_33596 = state_33591;
(statearr_33596[(9)] = inst_33559__$1);

return statearr_33596;
})();
if(inst_33561){
var statearr_33597_33622 = state_33591__$1;
(statearr_33597_33622[(1)] = (5));

} else {
var statearr_33598_33623 = state_33591__$1;
(statearr_33598_33623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (15))){
var inst_33581 = (state_33591[(2)]);
var state_33591__$1 = state_33591;
var statearr_33599_33624 = state_33591__$1;
(statearr_33599_33624[(2)] = inst_33581);

(statearr_33599_33624[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (13))){
var state_33591__$1 = state_33591;
var statearr_33600_33625 = state_33591__$1;
(statearr_33600_33625[(2)] = null);

(statearr_33600_33625[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (6))){
var inst_33556 = (state_33591[(8)]);
var inst_33577 = (inst_33556 > (0));
var state_33591__$1 = state_33591;
if(cljs.core.truth_(inst_33577)){
var statearr_33601_33626 = state_33591__$1;
(statearr_33601_33626[(1)] = (12));

} else {
var statearr_33602_33627 = state_33591__$1;
(statearr_33602_33627[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (3))){
var inst_33589 = (state_33591[(2)]);
var state_33591__$1 = state_33591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33591__$1,inst_33589);
} else {
if((state_val_33592 === (12))){
var inst_33555 = (state_33591[(7)]);
var inst_33579 = cljs.core.vec(inst_33555);
var state_33591__$1 = state_33591;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33591__$1,(15),out,inst_33579);
} else {
if((state_val_33592 === (2))){
var state_33591__$1 = state_33591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33591__$1,(4),ch);
} else {
if((state_val_33592 === (11))){
var inst_33571 = (state_33591[(2)]);
var inst_33572 = (new Array(n));
var inst_33555 = inst_33572;
var inst_33556 = (0);
var state_33591__$1 = (function (){var statearr_33603 = state_33591;
(statearr_33603[(10)] = inst_33571);

(statearr_33603[(7)] = inst_33555);

(statearr_33603[(8)] = inst_33556);

return statearr_33603;
})();
var statearr_33604_33628 = state_33591__$1;
(statearr_33604_33628[(2)] = null);

(statearr_33604_33628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (9))){
var inst_33555 = (state_33591[(7)]);
var inst_33569 = cljs.core.vec(inst_33555);
var state_33591__$1 = state_33591;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33591__$1,(11),out,inst_33569);
} else {
if((state_val_33592 === (5))){
var inst_33564 = (state_33591[(11)]);
var inst_33559 = (state_33591[(9)]);
var inst_33555 = (state_33591[(7)]);
var inst_33556 = (state_33591[(8)]);
var inst_33563 = (inst_33555[inst_33556] = inst_33559);
var inst_33564__$1 = (inst_33556 + (1));
var inst_33565 = (inst_33564__$1 < n);
var state_33591__$1 = (function (){var statearr_33605 = state_33591;
(statearr_33605[(12)] = inst_33563);

(statearr_33605[(11)] = inst_33564__$1);

return statearr_33605;
})();
if(cljs.core.truth_(inst_33565)){
var statearr_33606_33629 = state_33591__$1;
(statearr_33606_33629[(1)] = (8));

} else {
var statearr_33607_33630 = state_33591__$1;
(statearr_33607_33630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (14))){
var inst_33584 = (state_33591[(2)]);
var inst_33585 = cljs.core.async.close_BANG_(out);
var state_33591__$1 = (function (){var statearr_33609 = state_33591;
(statearr_33609[(13)] = inst_33584);

return statearr_33609;
})();
var statearr_33610_33631 = state_33591__$1;
(statearr_33610_33631[(2)] = inst_33585);

(statearr_33610_33631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (10))){
var inst_33575 = (state_33591[(2)]);
var state_33591__$1 = state_33591;
var statearr_33611_33632 = state_33591__$1;
(statearr_33611_33632[(2)] = inst_33575);

(statearr_33611_33632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (8))){
var inst_33564 = (state_33591[(11)]);
var inst_33555 = (state_33591[(7)]);
var tmp33608 = inst_33555;
var inst_33555__$1 = tmp33608;
var inst_33556 = inst_33564;
var state_33591__$1 = (function (){var statearr_33612 = state_33591;
(statearr_33612[(7)] = inst_33555__$1);

(statearr_33612[(8)] = inst_33556);

return statearr_33612;
})();
var statearr_33613_33633 = state_33591__$1;
(statearr_33613_33633[(2)] = null);

(statearr_33613_33633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31348__auto___33619,out))
;
return ((function (switch__30985__auto__,c__31348__auto___33619,out){
return (function() {
var cljs$core$async$state_machine__30986__auto__ = null;
var cljs$core$async$state_machine__30986__auto____0 = (function (){
var statearr_33614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33614[(0)] = cljs$core$async$state_machine__30986__auto__);

(statearr_33614[(1)] = (1));

return statearr_33614;
});
var cljs$core$async$state_machine__30986__auto____1 = (function (state_33591){
while(true){
var ret_value__30987__auto__ = (function (){try{while(true){
var result__30988__auto__ = switch__30985__auto__(state_33591);
if(cljs.core.keyword_identical_QMARK_(result__30988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30988__auto__;
}
break;
}
}catch (e33615){if((e33615 instanceof Object)){
var ex__30989__auto__ = e33615;
var statearr_33616_33634 = state_33591;
(statearr_33616_33634[(5)] = ex__30989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33615;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33635 = state_33591;
state_33591 = G__33635;
continue;
} else {
return ret_value__30987__auto__;
}
break;
}
});
cljs$core$async$state_machine__30986__auto__ = function(state_33591){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30986__auto____1.call(this,state_33591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30986__auto____0;
cljs$core$async$state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30986__auto____1;
return cljs$core$async$state_machine__30986__auto__;
})()
;})(switch__30985__auto__,c__31348__auto___33619,out))
})();
var state__31350__auto__ = (function (){var statearr_33617 = (f__31349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31349__auto__.cljs$core$IFn$_invoke$arity$0() : f__31349__auto__.call(null));
(statearr_33617[(6)] = c__31348__auto___33619);

return statearr_33617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31350__auto__);
});})(c__31348__auto___33619,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33637 = arguments.length;
switch (G__33637) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31348__auto___33707 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31348__auto___33707,out){
return (function (){
var f__31349__auto__ = (function (){var switch__30985__auto__ = ((function (c__31348__auto___33707,out){
return (function (state_33679){
var state_val_33680 = (state_33679[(1)]);
if((state_val_33680 === (7))){
var inst_33675 = (state_33679[(2)]);
var state_33679__$1 = state_33679;
var statearr_33681_33708 = state_33679__$1;
(statearr_33681_33708[(2)] = inst_33675);

(statearr_33681_33708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (1))){
var inst_33638 = [];
var inst_33639 = inst_33638;
var inst_33640 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33679__$1 = (function (){var statearr_33682 = state_33679;
(statearr_33682[(7)] = inst_33640);

(statearr_33682[(8)] = inst_33639);

return statearr_33682;
})();
var statearr_33683_33709 = state_33679__$1;
(statearr_33683_33709[(2)] = null);

(statearr_33683_33709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (4))){
var inst_33643 = (state_33679[(9)]);
var inst_33643__$1 = (state_33679[(2)]);
var inst_33644 = (inst_33643__$1 == null);
var inst_33645 = cljs.core.not(inst_33644);
var state_33679__$1 = (function (){var statearr_33684 = state_33679;
(statearr_33684[(9)] = inst_33643__$1);

return statearr_33684;
})();
if(inst_33645){
var statearr_33685_33710 = state_33679__$1;
(statearr_33685_33710[(1)] = (5));

} else {
var statearr_33686_33711 = state_33679__$1;
(statearr_33686_33711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (15))){
var inst_33669 = (state_33679[(2)]);
var state_33679__$1 = state_33679;
var statearr_33687_33712 = state_33679__$1;
(statearr_33687_33712[(2)] = inst_33669);

(statearr_33687_33712[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (13))){
var state_33679__$1 = state_33679;
var statearr_33688_33713 = state_33679__$1;
(statearr_33688_33713[(2)] = null);

(statearr_33688_33713[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (6))){
var inst_33639 = (state_33679[(8)]);
var inst_33664 = inst_33639.length;
var inst_33665 = (inst_33664 > (0));
var state_33679__$1 = state_33679;
if(cljs.core.truth_(inst_33665)){
var statearr_33689_33714 = state_33679__$1;
(statearr_33689_33714[(1)] = (12));

} else {
var statearr_33690_33715 = state_33679__$1;
(statearr_33690_33715[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (3))){
var inst_33677 = (state_33679[(2)]);
var state_33679__$1 = state_33679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33679__$1,inst_33677);
} else {
if((state_val_33680 === (12))){
var inst_33639 = (state_33679[(8)]);
var inst_33667 = cljs.core.vec(inst_33639);
var state_33679__$1 = state_33679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33679__$1,(15),out,inst_33667);
} else {
if((state_val_33680 === (2))){
var state_33679__$1 = state_33679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33679__$1,(4),ch);
} else {
if((state_val_33680 === (11))){
var inst_33647 = (state_33679[(10)]);
var inst_33643 = (state_33679[(9)]);
var inst_33657 = (state_33679[(2)]);
var inst_33658 = [];
var inst_33659 = inst_33658.push(inst_33643);
var inst_33639 = inst_33658;
var inst_33640 = inst_33647;
var state_33679__$1 = (function (){var statearr_33691 = state_33679;
(statearr_33691[(11)] = inst_33659);

(statearr_33691[(12)] = inst_33657);

(statearr_33691[(7)] = inst_33640);

(statearr_33691[(8)] = inst_33639);

return statearr_33691;
})();
var statearr_33692_33716 = state_33679__$1;
(statearr_33692_33716[(2)] = null);

(statearr_33692_33716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (9))){
var inst_33639 = (state_33679[(8)]);
var inst_33655 = cljs.core.vec(inst_33639);
var state_33679__$1 = state_33679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33679__$1,(11),out,inst_33655);
} else {
if((state_val_33680 === (5))){
var inst_33647 = (state_33679[(10)]);
var inst_33643 = (state_33679[(9)]);
var inst_33640 = (state_33679[(7)]);
var inst_33647__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33643) : f.call(null,inst_33643));
var inst_33648 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33647__$1,inst_33640);
var inst_33649 = cljs.core.keyword_identical_QMARK_(inst_33640,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33650 = ((inst_33648) || (inst_33649));
var state_33679__$1 = (function (){var statearr_33693 = state_33679;
(statearr_33693[(10)] = inst_33647__$1);

return statearr_33693;
})();
if(cljs.core.truth_(inst_33650)){
var statearr_33694_33717 = state_33679__$1;
(statearr_33694_33717[(1)] = (8));

} else {
var statearr_33695_33718 = state_33679__$1;
(statearr_33695_33718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (14))){
var inst_33672 = (state_33679[(2)]);
var inst_33673 = cljs.core.async.close_BANG_(out);
var state_33679__$1 = (function (){var statearr_33697 = state_33679;
(statearr_33697[(13)] = inst_33672);

return statearr_33697;
})();
var statearr_33698_33719 = state_33679__$1;
(statearr_33698_33719[(2)] = inst_33673);

(statearr_33698_33719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (10))){
var inst_33662 = (state_33679[(2)]);
var state_33679__$1 = state_33679;
var statearr_33699_33720 = state_33679__$1;
(statearr_33699_33720[(2)] = inst_33662);

(statearr_33699_33720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (8))){
var inst_33647 = (state_33679[(10)]);
var inst_33643 = (state_33679[(9)]);
var inst_33639 = (state_33679[(8)]);
var inst_33652 = inst_33639.push(inst_33643);
var tmp33696 = inst_33639;
var inst_33639__$1 = tmp33696;
var inst_33640 = inst_33647;
var state_33679__$1 = (function (){var statearr_33700 = state_33679;
(statearr_33700[(14)] = inst_33652);

(statearr_33700[(7)] = inst_33640);

(statearr_33700[(8)] = inst_33639__$1);

return statearr_33700;
})();
var statearr_33701_33721 = state_33679__$1;
(statearr_33701_33721[(2)] = null);

(statearr_33701_33721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31348__auto___33707,out))
;
return ((function (switch__30985__auto__,c__31348__auto___33707,out){
return (function() {
var cljs$core$async$state_machine__30986__auto__ = null;
var cljs$core$async$state_machine__30986__auto____0 = (function (){
var statearr_33702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33702[(0)] = cljs$core$async$state_machine__30986__auto__);

(statearr_33702[(1)] = (1));

return statearr_33702;
});
var cljs$core$async$state_machine__30986__auto____1 = (function (state_33679){
while(true){
var ret_value__30987__auto__ = (function (){try{while(true){
var result__30988__auto__ = switch__30985__auto__(state_33679);
if(cljs.core.keyword_identical_QMARK_(result__30988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30988__auto__;
}
break;
}
}catch (e33703){if((e33703 instanceof Object)){
var ex__30989__auto__ = e33703;
var statearr_33704_33722 = state_33679;
(statearr_33704_33722[(5)] = ex__30989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33723 = state_33679;
state_33679 = G__33723;
continue;
} else {
return ret_value__30987__auto__;
}
break;
}
});
cljs$core$async$state_machine__30986__auto__ = function(state_33679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30986__auto____1.call(this,state_33679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30986__auto____0;
cljs$core$async$state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30986__auto____1;
return cljs$core$async$state_machine__30986__auto__;
})()
;})(switch__30985__auto__,c__31348__auto___33707,out))
})();
var state__31350__auto__ = (function (){var statearr_33705 = (f__31349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31349__auto__.cljs$core$IFn$_invoke$arity$0() : f__31349__auto__.call(null));
(statearr_33705[(6)] = c__31348__auto___33707);

return statearr_33705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31350__auto__);
});})(c__31348__auto___33707,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
