goog.provide('sablono.interpreter');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('sablono.normalize');
goog.require('sablono.util');

/**
 * @interface
 */
sablono.interpreter.IInterpreter = function(){};

/**
 * Interpret a Clojure data structure as a React fn call.
 */
sablono.interpreter.interpret = (function sablono$interpreter$interpret(this$){
if(((!((this$ == null))) && (!((this$.sablono$interpreter$IInterpreter$interpret$arity$1 == null))))){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (sablono.interpreter.interpret[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (sablono.interpreter.interpret["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IInterpreter.interpret",this$);
}
}
}
});

/**
 * Updates the state of the wrapped input element.
 */
sablono.interpreter.update_state = (function sablono$interpreter$update_state(component,next_props,property,value){
var on_change = goog.object.getValueByKeys(component,"state","onChange");
var next_state = ({});
var G__28539_28542 = next_state;
var G__28540_28543 = next_props;
var G__28541_28544 = ({"onChange": on_change});
goog.object.extend(G__28539_28542,G__28540_28543,G__28541_28544);

goog.object.set(next_state,property,value);

return component.setState(next_state);
});
sablono.interpreter.wrap_form_element = (function sablono$interpreter$wrap_form_element(element,property){
var ctor = (function (props){
var this$ = this;
this$.state = (function (){var state = ({});
var G__28545_28553 = state;
var G__28546_28554 = props;
var G__28547_28555 = ({"onChange": (function (){var G__28548 = goog.object.get(this$,"onChange");
var G__28549 = this$;
return goog.bind(G__28548,G__28549);
})()});
goog.object.extend(G__28545_28553,G__28546_28554,G__28547_28555);

return state;
})();

return React.Component.call(this$,props);
});
ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join('');

goog.inherits(ctor,React.Component);

var x28550_28556 = ctor.prototype;
x28550_28556.onChange = ((function (x28550_28556,ctor){
return (function (event){
var this$ = this;
var temp__5457__auto__ = this$.props.onChange;
if(cljs.core.truth_(temp__5457__auto__)){
var handler = temp__5457__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return sablono.interpreter.update_state(this$,this$.props,property,goog.object.getValueByKeys(event,"target",property));
} else {
return null;
}
});})(x28550_28556,ctor))
;

x28550_28556.componentWillReceiveProps = ((function (x28550_28556,ctor){
return (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state",property);
var element_value = (function (){var G__28551 = ReactDOM.findDOMNode(this$);
var G__28552 = property;
return goog.object.get(G__28551,G__28552);
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return sablono.interpreter.update_state(this$,new_props,property,element_value);
} else {
return sablono.interpreter.update_state(this$,new_props,property,goog.object.get(new_props,property));
}
});})(x28550_28556,ctor))
;

x28550_28556.render = ((function (x28550_28556,ctor){
return (function (){
var this$ = this;
return React.createElement(element,this$.state);
});})(x28550_28556,ctor))
;


return ctor;
});
sablono.interpreter.lazy_load_wrappers = (function sablono$interpreter$lazy_load_wrappers(){
if(cljs.core.truth_(sablono.interpreter.wrapped_textarea)){
return null;
} else {
sablono.interpreter.wrapped_input = sablono.interpreter.wrap_form_element("input","value");

sablono.interpreter.wrapped_checked = sablono.interpreter.wrap_form_element("input","checked");

sablono.interpreter.wrapped_select = sablono.interpreter.wrap_form_element("select","value");

return sablono.interpreter.wrapped_textarea = sablono.interpreter.wrap_form_element("textarea","value");
}
});
/**
 * Returns true if `type` and `props` are used a controlled input,
 *   otherwise false.
 */
sablono.interpreter.controlled_input_QMARK_ = (function sablono$interpreter$controlled_input_QMARK_(type,props){
var and__3938__auto__ = cljs.core.object_QMARK_(props);
if(and__3938__auto__){
var G__28558 = type;
switch (G__28558) {
case "input":
return ((!((props.checked == null))) || (!((props.value == null))));

break;
case "select":
return !((props.value == null));

break;
case "textarea":
return !((props.value == null));

break;
default:
return false;

}
} else {
return and__3938__auto__;
}
});
/**
 * Returns either `type` or a wrapped element for controlled
 *   inputs.
 */
sablono.interpreter.element_class = (function sablono$interpreter$element_class(type,props){
if(sablono.interpreter.controlled_input_QMARK_(type,props)){
sablono.interpreter.lazy_load_wrappers();

var G__28560 = type;
switch (G__28560) {
case "input":
var G__28561 = (function (){var and__3938__auto__ = cljs.core.object_QMARK_(props);
if(and__3938__auto__){
return props.type;
} else {
return and__3938__auto__;
}
})();
switch (G__28561) {
case "radio":
return sablono.interpreter.wrapped_checked;

break;
case "checkbox":
return sablono.interpreter.wrapped_checked;

break;
default:
return sablono.interpreter.wrapped_input;

}

break;
case "select":
return sablono.interpreter.wrapped_select;

break;
case "textarea":
return sablono.interpreter.wrapped_textarea;

break;
default:
return type;

}
} else {
return type;
}
});
/**
 * Create a React element. Returns a JavaScript object when running
 *   under ClojureScript, and a om.dom.Element record in Clojure.
 */
sablono.interpreter.create_element = (function sablono$interpreter$create_element(var_args){
var args__4534__auto__ = [];
var len__4531__auto___28567 = arguments.length;
var i__4532__auto___28568 = (0);
while(true){
if((i__4532__auto___28568 < len__4531__auto___28567)){
args__4534__auto__.push((arguments[i__4532__auto___28568]));

var G__28569 = (i__4532__auto___28568 + (1));
i__4532__auto___28568 = G__28569;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,sablono.interpreter.element_class(type,props),props,children);
});

sablono.interpreter.create_element.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
sablono.interpreter.create_element.cljs$lang$applyTo = (function (seq28564){
var G__28565 = cljs.core.first(seq28564);
var seq28564__$1 = cljs.core.next(seq28564);
var G__28566 = cljs.core.first(seq28564__$1);
var seq28564__$2 = cljs.core.next(seq28564__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28565,G__28566,seq28564__$2);
});

sablono.interpreter.attributes = (function sablono$interpreter$attributes(attrs){
var temp__5457__auto__ = cljs.core.clj__GT_js(sablono.util.html_to_dom_attrs(attrs));
if(cljs.core.truth_(temp__5457__auto__)){
var js_attrs = temp__5457__auto__;
var class$ = js_attrs.className;
var class$__$1 = ((cljs.core.array_QMARK_(class$))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",class$):class$);
if(clojure.string.blank_QMARK_(class$__$1)){
delete js_attrs["className"];
} else {
js_attrs.className = class$__$1;
}

return js_attrs;
} else {
return null;
}
});
/**
 * Eagerly interpret the seq `x` as HTML elements.
 */
sablono.interpreter.interpret_seq = (function sablono$interpreter$interpret_seq(x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(sablono.interpreter.interpret),x);
});
/**
 * Render an element vector as a HTML element.
 */
sablono.interpreter.element = (function sablono$interpreter$element(element){
var vec__28571 = sablono.normalize.element(element);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28571,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28571,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28571,(2),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.interpreter.create_element,type,sablono.interpreter.attributes(attrs),sablono.interpreter.interpret_seq(content));
});
/**
 * Interpret the vector `x` as an HTML element or a the children of an
 *   element.
 */
sablono.interpreter.interpret_vec = (function sablono$interpreter$interpret_vec(x){
if(cljs.core.truth_(sablono.util.element_QMARK_(x))){
return sablono.interpreter.element(x);
} else {
return sablono.interpreter.interpret_seq(x);
}
});
goog.object.set(sablono.interpreter.IInterpreter,"null",true);

var G__28574_28580 = sablono.interpreter.interpret;
var G__28575_28581 = "null";
var G__28576_28582 = ((function (G__28574_28580,G__28575_28581){
return (function (this$){
return null;
});})(G__28574_28580,G__28575_28581))
;
goog.object.set(G__28574_28580,G__28575_28581,G__28576_28582);

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec(this$__$1);
});

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

goog.object.set(sablono.interpreter.IInterpreter,"_",true);

var G__28577_28583 = sablono.interpreter.interpret;
var G__28578_28584 = "_";
var G__28579_28585 = ((function (G__28577_28583,G__28578_28584){
return (function (this$){
return this$;
});})(G__28577_28583,G__28578_28584))
;
goog.object.set(G__28577_28583,G__28578_28584,G__28579_28585);

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec(this$__$1);
});

cljs.core.List.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.ChunkedCons.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedCons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

//# sourceMappingURL=sablono.interpreter.js.map
