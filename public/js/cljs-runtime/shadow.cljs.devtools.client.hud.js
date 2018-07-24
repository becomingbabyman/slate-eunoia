goog.provide('shadow.cljs.devtools.client.hud');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.xhr');
goog.require('shadow.animate');
goog.require('shadow.cljs.devtools.client.env');
goog.require('cljs.core.async');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
shadow.cljs.devtools.client.hud.open_file = (function shadow$cljs$devtools$client$hud$open_file(file,line,column){
console.log("opening file",file,line,column);

var req = shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"POST","POST",110456857),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.get_url_base()),"/api/open-file"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false,new cljs.core.Keyword(null,"body-only","body-only",-698120682),true], null));
var c__31348__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31348__auto__,req){
return (function (){
var f__31349__auto__ = (function (){var switch__30985__auto__ = ((function (c__31348__auto__,req){
return (function (state_35668){
var state_val_35669 = (state_35668[(1)]);
if((state_val_35669 === (7))){
var state_35668__$1 = state_35668;
var statearr_35670_35696 = state_35668__$1;
(statearr_35670_35696[(2)] = false);

(statearr_35670_35696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35669 === (1))){
var state_35668__$1 = state_35668;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35668__$1,(2),req);
} else {
if((state_val_35669 === (4))){
var inst_35632 = (state_35668[(7)]);
var inst_35638 = (inst_35632 == null);
var inst_35639 = cljs.core.not(inst_35638);
var state_35668__$1 = state_35668;
if(inst_35639){
var statearr_35671_35697 = state_35668__$1;
(statearr_35671_35697[(1)] = (6));

} else {
var statearr_35672_35698 = state_35668__$1;
(statearr_35672_35698[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35669 === (15))){
var state_35668__$1 = state_35668;
var statearr_35673_35699 = state_35668__$1;
(statearr_35673_35699[(2)] = null);

(statearr_35673_35699[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35669 === (13))){
var inst_35632 = (state_35668[(7)]);
var state_35668__$1 = state_35668;
var statearr_35674_35700 = state_35668__$1;
(statearr_35674_35700[(2)] = inst_35632);

(statearr_35674_35700[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35669 === (6))){
var inst_35632 = (state_35668[(7)]);
var inst_35641 = inst_35632.cljs$lang$protocol_mask$partition0$;
var inst_35642 = (inst_35641 & (64));
var inst_35643 = inst_35632.cljs$core$ISeq$;
var inst_35644 = (cljs.core.PROTOCOL_SENTINEL === inst_35643);
var inst_35645 = ((inst_35642) || (inst_35644));
var state_35668__$1 = state_35668;
if(cljs.core.truth_(inst_35645)){
var statearr_35675_35701 = state_35668__$1;
(statearr_35675_35701[(1)] = (9));

} else {
var statearr_35676_35702 = state_35668__$1;
(statearr_35676_35702[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35669 === (17))){
var inst_35664 = (state_35668[(2)]);
var state_35668__$1 = state_35668;
var statearr_35677_35703 = state_35668__$1;
(statearr_35677_35703[(2)] = inst_35664);

(statearr_35677_35703[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35669 === (3))){
var state_35668__$1 = state_35668;
var statearr_35678_35704 = state_35668__$1;
(statearr_35678_35704[(2)] = null);

(statearr_35678_35704[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35669 === (12))){
var inst_35632 = (state_35668[(7)]);
var inst_35654 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35632);
var state_35668__$1 = state_35668;
var statearr_35679_35705 = state_35668__$1;
(statearr_35679_35705[(2)] = inst_35654);

(statearr_35679_35705[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35669 === (2))){
var inst_35632 = (state_35668[(7)]);
var inst_35632__$1 = (state_35668[(2)]);
var inst_35633 = (inst_35632__$1 == null);
var state_35668__$1 = (function (){var statearr_35680 = state_35668;
(statearr_35680[(7)] = inst_35632__$1);

return statearr_35680;
})();
if(cljs.core.truth_(inst_35633)){
var statearr_35681_35706 = state_35668__$1;
(statearr_35681_35706[(1)] = (3));

} else {
var statearr_35682_35707 = state_35668__$1;
(statearr_35682_35707[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35669 === (11))){
var inst_35649 = (state_35668[(2)]);
var state_35668__$1 = state_35668;
var statearr_35683_35708 = state_35668__$1;
(statearr_35683_35708[(2)] = inst_35649);

(statearr_35683_35708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35669 === (9))){
var state_35668__$1 = state_35668;
var statearr_35684_35709 = state_35668__$1;
(statearr_35684_35709[(2)] = true);

(statearr_35684_35709[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35669 === (5))){
var inst_35666 = (state_35668[(2)]);
var state_35668__$1 = state_35668;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35668__$1,inst_35666);
} else {
if((state_val_35669 === (14))){
var inst_35657 = (state_35668[(8)]);
var inst_35657__$1 = (state_35668[(2)]);
var inst_35658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35657__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var inst_35659 = (inst_35658 === (0));
var state_35668__$1 = (function (){var statearr_35685 = state_35668;
(statearr_35685[(8)] = inst_35657__$1);

return statearr_35685;
})();
if(cljs.core.truth_(inst_35659)){
var statearr_35686_35710 = state_35668__$1;
(statearr_35686_35710[(1)] = (15));

} else {
var statearr_35687_35711 = state_35668__$1;
(statearr_35687_35711[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35669 === (16))){
var inst_35657 = (state_35668[(8)]);
var inst_35662 = console.warn("file open failed",inst_35657);
var state_35668__$1 = state_35668;
var statearr_35688_35712 = state_35668__$1;
(statearr_35688_35712[(2)] = inst_35662);

(statearr_35688_35712[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35669 === (10))){
var state_35668__$1 = state_35668;
var statearr_35689_35713 = state_35668__$1;
(statearr_35689_35713[(2)] = false);

(statearr_35689_35713[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35669 === (8))){
var inst_35652 = (state_35668[(2)]);
var state_35668__$1 = state_35668;
if(cljs.core.truth_(inst_35652)){
var statearr_35690_35714 = state_35668__$1;
(statearr_35690_35714[(1)] = (12));

} else {
var statearr_35691_35715 = state_35668__$1;
(statearr_35691_35715[(1)] = (13));

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
});})(c__31348__auto__,req))
;
return ((function (switch__30985__auto__,c__31348__auto__,req){
return (function() {
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__30986__auto__ = null;
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__30986__auto____0 = (function (){
var statearr_35692 = [null,null,null,null,null,null,null,null,null];
(statearr_35692[(0)] = shadow$cljs$devtools$client$hud$open_file_$_state_machine__30986__auto__);

(statearr_35692[(1)] = (1));

return statearr_35692;
});
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__30986__auto____1 = (function (state_35668){
while(true){
var ret_value__30987__auto__ = (function (){try{while(true){
var result__30988__auto__ = switch__30985__auto__(state_35668);
if(cljs.core.keyword_identical_QMARK_(result__30988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30988__auto__;
}
break;
}
}catch (e35693){if((e35693 instanceof Object)){
var ex__30989__auto__ = e35693;
var statearr_35694_35716 = state_35668;
(statearr_35694_35716[(5)] = ex__30989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35693;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35717 = state_35668;
state_35668 = G__35717;
continue;
} else {
return ret_value__30987__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$open_file_$_state_machine__30986__auto__ = function(state_35668){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__30986__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__30986__auto____1.call(this,state_35668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$open_file_$_state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__30986__auto____0;
shadow$cljs$devtools$client$hud$open_file_$_state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__30986__auto____1;
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__30986__auto__;
})()
;})(switch__30985__auto__,c__31348__auto__,req))
})();
var state__31350__auto__ = (function (){var statearr_35695 = (f__31349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31349__auto__.cljs$core$IFn$_invoke$arity$0() : f__31349__auto__.call(null));
(statearr_35695[(6)] = c__31348__auto__);

return statearr_35695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31350__auto__);
});})(c__31348__auto__,req))
);

return c__31348__auto__;
});
shadow.cljs.devtools.client.hud.dom_insert = (function shadow$cljs$devtools$client$hud$dom_insert(var_args){
var G__35719 = arguments.length;
switch (G__35719) {
case 1:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1 = (function (node){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2(document.body,node);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2 = (function (where,node){
var el = shadow.dom.dom_node(node);
var id = el.id;
if(cljs.core.seq(id)){
} else {
throw (new Error("Assert failed: (seq id)"));
}

var temp__5461__auto___35721 = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(id);
if((temp__5461__auto___35721 == null)){
} else {
var x_35722 = temp__5461__auto___35721;
shadow.dom.remove(x_35722);
}

return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(where,el);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.hud_id = "shadow-hud-container";
shadow.cljs.devtools.client.hud.load_id = "shadow-hud-loading-container";
shadow.cljs.devtools.client.hud.logo_svg = (new cljs.core.Delay((function (){
var s_path = "M247.183941,141.416413 C247.183941,74.7839971 148.383423,78.9723529 148.383423,141.416413 C148.383423,203.860473 265.090698,171.864644 265.090698,248.900057 C265.090698,325.93547 135,325.851749 135,251.708304";
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"shadow-cljs-logo",new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 400 400",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"shadow-cljs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mask#shadow-cljs-logo-mask","mask#shadow-cljs-logo-mask",1690487509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"mask","mask",-585748447),"url(#shadow-cljs-logo-mask)"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.circles","g.circles",374463200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.blue","circle.blue",1902916291),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200",new cljs.core.Keyword(null,"fill","fill",883462889),"#4F80DF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-blue","circle.light-blue",438137342),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"71.5",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"370",new cljs.core.Keyword(null,"fill","fill",883462889),"#89B4FF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.dark-green","circle.dark-green",608465767),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"180",new cljs.core.Keyword(null,"cy","cy",755331060),"360",new cljs.core.Keyword(null,"cx","cx",1272694324),"60",new cljs.core.Keyword(null,"fill","fill",883462889),"#40B400"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-green","circle.light-green",-1663041285),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"129",new cljs.core.Keyword(null,"cy","cy",755331060),"320",new cljs.core.Keyword(null,"cx","cx",1272694324),"280",new cljs.core.Keyword(null,"fill","fill",883462889),"#76E013"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animateTransform","animateTransform",759329815),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"attributeType","attributeType",1055561918),"xml",new cljs.core.Keyword(null,"attributeName","attributeName",-400177890),"transform",new cljs.core.Keyword(null,"type","type",1174270348),"rotate",new cljs.core.Keyword(null,"from","from",1815293044),"0 200 200",new cljs.core.Keyword(null,"to","to",192099007),"360 200 200",new cljs.core.Keyword(null,"dur","dur",1464522452),"3s",new cljs.core.Keyword(null,"repeatCount","repeatCount",1447663848),"indefinite"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(10,10)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#aaa",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FFFFFF",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null)], 0));
}),null));
shadow.cljs.devtools.client.hud.load_start = (function shadow$cljs$devtools$client$hud$load_start(){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.load_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),"40px",new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),"40px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"2px 2px 10px #aaa",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),cljs.core.deref(shadow.cljs.devtools.client.hud.logo_svg)], null)], null));
});
shadow.cljs.devtools.client.hud.load_end_success = (function shadow$cljs$devtools$client$hud$load_end_success(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var container_el = temp__5461__auto__;
var el = container_el.firstChild;
shadow.animate.start((500),cljs.core.PersistentArrayMap.createAsIfByAssoc([el,shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"background","background",-863952629),"#eee","#40B400","ease-out")]));

var c__31348__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31348__auto__,el,container_el,temp__5461__auto__){
return (function (){
var f__31349__auto__ = (function (){var switch__30985__auto__ = ((function (c__31348__auto__,el,container_el,temp__5461__auto__){
return (function (state_35735){
var state_val_35736 = (state_35735[(1)]);
if((state_val_35736 === (1))){
var inst_35723 = cljs.core.async.timeout((250));
var state_35735__$1 = state_35735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35735__$1,(2),inst_35723);
} else {
if((state_val_35736 === (2))){
var inst_35725 = (state_35735[(2)]);
var inst_35726 = [el];
var inst_35727 = shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0","ease-in");
var inst_35728 = [inst_35727];
var inst_35729 = cljs.core.PersistentHashMap.fromArrays(inst_35726,inst_35728);
var inst_35730 = shadow.animate.start((250),inst_35729);
var state_35735__$1 = (function (){var statearr_35737 = state_35735;
(statearr_35737[(7)] = inst_35725);

return statearr_35737;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35735__$1,(3),inst_35730);
} else {
if((state_val_35736 === (3))){
var inst_35732 = (state_35735[(2)]);
var inst_35733 = shadow.dom.remove(container_el);
var state_35735__$1 = (function (){var statearr_35738 = state_35735;
(statearr_35738[(8)] = inst_35732);

return statearr_35738;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35735__$1,inst_35733);
} else {
return null;
}
}
}
});})(c__31348__auto__,el,container_el,temp__5461__auto__))
;
return ((function (switch__30985__auto__,c__31348__auto__,el,container_el,temp__5461__auto__){
return (function() {
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__30986__auto__ = null;
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__30986__auto____0 = (function (){
var statearr_35739 = [null,null,null,null,null,null,null,null,null];
(statearr_35739[(0)] = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__30986__auto__);

(statearr_35739[(1)] = (1));

return statearr_35739;
});
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__30986__auto____1 = (function (state_35735){
while(true){
var ret_value__30987__auto__ = (function (){try{while(true){
var result__30988__auto__ = switch__30985__auto__(state_35735);
if(cljs.core.keyword_identical_QMARK_(result__30988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30988__auto__;
}
break;
}
}catch (e35740){if((e35740 instanceof Object)){
var ex__30989__auto__ = e35740;
var statearr_35741_35743 = state_35735;
(statearr_35741_35743[(5)] = ex__30989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35740;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35744 = state_35735;
state_35735 = G__35744;
continue;
} else {
return ret_value__30987__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__30986__auto__ = function(state_35735){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__30986__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__30986__auto____1.call(this,state_35735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__30986__auto____0;
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__30986__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__30986__auto____1;
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__30986__auto__;
})()
;})(switch__30985__auto__,c__31348__auto__,el,container_el,temp__5461__auto__))
})();
var state__31350__auto__ = (function (){var statearr_35742 = (f__31349__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31349__auto__.cljs$core$IFn$_invoke$arity$0() : f__31349__auto__.call(null));
(statearr_35742[(6)] = c__31348__auto__);

return statearr_35742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31350__auto__);
});})(c__31348__auto__,el,container_el,temp__5461__auto__))
);

return c__31348__auto__;
}
});
shadow.cljs.devtools.client.hud.load_end = (function shadow$cljs$devtools$client$hud$load_end(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var el = temp__5461__auto__;
return shadow.dom.remove(el);
}
});
shadow.cljs.devtools.client.hud.hud_hide = (function shadow$cljs$devtools$client$hud$hud_hide(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.hud_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var d = temp__5461__auto__;
return shadow.dom.remove(d);
}
});
shadow.cljs.devtools.client.hud.source_line_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null);
shadow.cljs.devtools.client.hud.source_highlight_styles = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.hud.source_line_styles,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
shadow.cljs.devtools.client.hud.source_line_html = (function shadow$cljs$devtools$client$hud$source_line_html(start_idx,lines,styles){
var iter__4324__auto__ = (function shadow$cljs$devtools$client$hud$source_line_html_$_iter__35745(s__35746){
return (new cljs.core.LazySeq(null,(function (){
var s__35746__$1 = s__35746;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__35746__$1);
if(temp__5457__auto__){
var s__35746__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35746__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__35746__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__35748 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__35747 = (0);
while(true){
if((i__35747 < size__4323__auto__)){
var vec__35749 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__35747);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35749,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35749,(1),null);
cljs.core.chunk_append(b__35748,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__35752 = "%4d | %s";
var G__35753 = (((1) + idx) + start_idx);
var G__35754 = text;
return goog.string.format(G__35752,G__35753,G__35754);
})()], null));

var G__35761 = (i__35747 + (1));
i__35747 = G__35761;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35748),shadow$cljs$devtools$client$hud$source_line_html_$_iter__35745(cljs.core.chunk_rest(s__35746__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35748),null);
}
} else {
var vec__35755 = cljs.core.first(s__35746__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35755,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35755,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__35758 = "%4d | %s";
var G__35759 = (((1) + idx) + start_idx);
var G__35760 = text;
return goog.string.format(G__35758,G__35759,G__35760);
})()], null),shadow$cljs$devtools$client$hud$source_line_html_$_iter__35745(cljs.core.rest(s__35746__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,lines));
});
shadow.cljs.devtools.client.hud.sep_length = (80);
shadow.cljs.devtools.client.hud.sep_line = (function shadow$cljs$devtools$client$hud$sep_line(var_args){
var G__35763 = arguments.length;
switch (G__35763) {
case 0:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("",(0));
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2 = (function (label,offset){
var sep_len = Math.max(shadow.cljs.devtools.client.hud.sep_length,offset);
var len = cljs.core.count(label);
var sep = ((function (sep_len,len){
return (function (c){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(c,"-"));
});})(sep_len,len))
;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep(offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep((sep_len - (offset + len))))].join('');
});

shadow.cljs.devtools.client.hud.sep_line.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.file_link = (function shadow$cljs$devtools$client$hud$file_link(p__35765){
var map__35766 = p__35765;
var map__35766__$1 = ((((!((map__35766 == null)))?(((((map__35766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35766):map__35766);
var warning = map__35766__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35766__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35766__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35766__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35766__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.not(file)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),resource_name], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline",new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (map__35766,map__35766__$1,warning,resource_name,file,line,column){
return (function (e){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return shadow.cljs.devtools.client.hud.open_file(file,line,column);
});})(map__35766,map__35766__$1,warning,resource_name,file,line,column))
], null)], null),resource_name], null);
}
});
shadow.cljs.devtools.client.hud.html_for_warning = (function shadow$cljs$devtools$client$hud$html_for_warning(p__35768){
var map__35769 = p__35768;
var map__35769__$1 = ((((!((map__35769 == null)))?(((((map__35769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35769):map__35769);
var warning = map__35769__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35769__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35769__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35769__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35769__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35769__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var source_excerpt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35769__$1,new cljs.core.Keyword(null,"source-excerpt","source-excerpt",5665576));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"16px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fadb64",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"WARNING in "], null),shadow.cljs.devtools.client.hud.file_link(warning)], null),(cljs.core.truth_(source_excerpt)?(function (){var map__35771 = source_excerpt;
var map__35771__$1 = ((((!((map__35771 == null)))?(((((map__35771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35771):map__35771);
var start_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35771__$1,new cljs.core.Keyword(null,"start-idx","start-idx",-1600773745));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35771__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var line__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35771__$1,new cljs.core.Keyword(null,"line","line",212345235));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35771__$1,new cljs.core.Keyword(null,"after","after",594996914));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc"], null)], null),shadow.cljs.devtools.client.hud.source_line_html(start_idx,before,shadow.cljs.devtools.client.hud.source_line_styles),shadow.cljs.devtools.client.hud.source_line_html((start_idx + cljs.core.count(before)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line__$1], null),shadow.cljs.devtools.client.hud.source_highlight_styles),(function (){var arrow_idx = ((6) + (function (){var or__3949__auto__ = column;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (1);
}
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("^",arrow_idx)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 0"], null)], null),msg], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0()], null),shadow.cljs.devtools.client.hud.source_line_html(((start_idx + cljs.core.count(before)) + (1)),after,shadow.cljs.devtools.client.hud.source_line_styles)], null);
})():null)], null);
});
shadow.cljs.devtools.client.hud.hud_warnings = (function shadow$cljs$devtools$client$hud$hud_warnings(p__35774){
var map__35775 = p__35774;
var map__35775__$1 = ((((!((map__35775 == null)))?(((((map__35775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35775):map__35775);
var msg = map__35775__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35775__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35775__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var map__35777 = info;
var map__35777__$1 = ((((!((map__35777 == null)))?(((((map__35777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35777):map__35777);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35777__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var sources_with_warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35777,map__35777__$1,sources,map__35775,map__35775__$1,msg,type,info){
return (function (p1__35773_SHARP_){
return cljs.core.seq(new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(p1__35773_SHARP_));
});})(map__35777,map__35777__$1,sources,map__35775,map__35775__$1,msg,type,info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827),sources)));
if(cljs.core.seq(sources_with_warnings)){
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"left","left",-399115937)],["0px","12px","10000","0px","flex","fixed","monospace","column","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"flex-end",new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"0px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"-2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),shadow.cljs.devtools.client.hud.hud_hide], null)], null),"Close"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"300px",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px 0",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),(function (){var iter__4324__auto__ = ((function (map__35777,map__35777__$1,sources,sources_with_warnings,map__35775,map__35775__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__35779(s__35780){
return (new cljs.core.LazySeq(null,((function (map__35777,map__35777__$1,sources,sources_with_warnings,map__35775,map__35775__$1,msg,type,info){
return (function (){
var s__35780__$1 = s__35780;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__35780__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__35785 = cljs.core.first(xs__6012__auto__);
var map__35785__$1 = ((((!((map__35785 == null)))?(((((map__35785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35785):map__35785);
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35785__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var iterys__4320__auto__ = ((function (s__35780__$1,map__35785,map__35785__$1,warnings,xs__6012__auto__,temp__5457__auto__,map__35777,map__35777__$1,sources,sources_with_warnings,map__35775,map__35775__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__35779_$_iter__35781(s__35782){
return (new cljs.core.LazySeq(null,((function (s__35780__$1,map__35785,map__35785__$1,warnings,xs__6012__auto__,temp__5457__auto__,map__35777,map__35777__$1,sources,sources_with_warnings,map__35775,map__35775__$1,msg,type,info){
return (function (){
var s__35782__$1 = s__35782;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__35782__$1);
if(temp__5457__auto____$1){
var s__35782__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35782__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__35782__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__35784 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__35783 = (0);
while(true){
if((i__35783 < size__4323__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__35783);
cljs.core.chunk_append(b__35784,shadow.cljs.devtools.client.hud.html_for_warning(warning));

var G__35787 = (i__35783 + (1));
i__35783 = G__35787;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35784),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__35779_$_iter__35781(cljs.core.chunk_rest(s__35782__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35784),null);
}
} else {
var warning = cljs.core.first(s__35782__$2);
return cljs.core.cons(shadow.cljs.devtools.client.hud.html_for_warning(warning),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__35779_$_iter__35781(cljs.core.rest(s__35782__$2)));
}
} else {
return null;
}
break;
}
});})(s__35780__$1,map__35785,map__35785__$1,warnings,xs__6012__auto__,temp__5457__auto__,map__35777,map__35777__$1,sources,sources_with_warnings,map__35775,map__35775__$1,msg,type,info))
,null,null));
});})(s__35780__$1,map__35785,map__35785__$1,warnings,xs__6012__auto__,temp__5457__auto__,map__35777,map__35777__$1,sources,sources_with_warnings,map__35775,map__35775__$1,msg,type,info))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(warnings));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,shadow$cljs$devtools$client$hud$hud_warnings_$_iter__35779(cljs.core.rest(s__35780__$1)));
} else {
var G__35788 = cljs.core.rest(s__35780__$1);
s__35780__$1 = G__35788;
continue;
}
} else {
return null;
}
break;
}
});})(map__35777,map__35777__$1,sources,sources_with_warnings,map__35775,map__35775__$1,msg,type,info))
,null,null));
});})(map__35777,map__35777__$1,sources,sources_with_warnings,map__35775,map__35775__$1,msg,type,info))
;
return iter__4324__auto__(sources_with_warnings);
})()], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.hud_error = (function shadow$cljs$devtools$client$hud$hud_error(p__35789){
var map__35790 = p__35789;
var map__35790__$1 = ((((!((map__35790 == null)))?(((((map__35790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35790):map__35790);
var msg = map__35790__$1;
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35790__$1,new cljs.core.Keyword(null,"report","report",1394055010));
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","0px","auto","#fff","10000","20px","0px","fixed","5px solid red","monospace","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: red; margin-bottom: 10px; font-size: 2em;"], null),"Compilation failed!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),report], null)], null));
});
shadow.cljs.devtools.client.hud.connection_error_id = "shadow-connection-error";
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_ = (function shadow$cljs$devtools$client$hud$connection_error_clear_BANG_(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.connection_error_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var x = temp__5461__auto__;
return shadow.dom.remove(x);
}
});
shadow.cljs.devtools.client.hud.connection_error = (function shadow$cljs$devtools$client$hud$connection_error(msg){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.connection_error_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["2px 2px 10px #aaa","#fff","14px","bold","40px","#c00","10px","40px","monospace"])], null),["shadow-cljs - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null)], null));
});
shadow.cljs.devtools.client.hud.load_failure = (function shadow$cljs$devtools$client$hud$load_failure(error,task,remaining){
shadow.cljs.devtools.client.hud.load_end();

console.error("reload-failed",error);

return shadow.cljs.devtools.client.hud.connection_error(["[reload failed] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message)].join(''));
});

//# sourceMappingURL=shadow.cljs.devtools.client.hud.js.map
