webpackJsonp([1],{1655:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u,r,a=n(2),i=o(a),c=n(60),d=o(c),f=n(4),s=o(f),l=n(9),p=o(l),h=n(7),v=o(h),m=n(8),_=o(m),w=n(0),g=(o(w),n(288)),y=n(637),b=o(y),k=(u=(0,g.wrapper)(b.default))(r=function(t){function e(){return(0,s.default)(this,e),(0,v.default)(this,(e.__proto__||(0,d.default)(e)).apply(this,arguments))}return(0,_.default)(e,t),(0,p.default)(e,[{key:"render",value:function(){return this.props.monkeyKing((0,i.default)({},this.props,{path:"root"}))}}]),e}(w.Component))||r;e.default=k,t.exports=e.default},1656:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function u(t){var e=new h.action(t),n=new _((0,a.default)({},t,{metaAction:e})),o=(0,a.default)({},e,n);return e.config({metaHandlers:o}),o}Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),a=o(r),i=n(633),c=o(i),d=n(634),f=o(d),s=n(4),l=o(s);e.default=u;var p=n(0),h=(o(p),n(288)),v=n(630),m=o(v),_=function t(e){var n=this;(0,l.default)(this,t),this.onInit=function(t){var e=t.component,o=t.injections;n.component=e,n.injections=o,console.log("test"),o.reduce("init")},this.btnClick=(0,f.default)(c.default.mark(function t(){var e;return c.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.metaAction.modal("show",{title:"devtools",width:900,bodyStyle:{height:600,overflow:"auto"},children:n.metaAction.loadApp("mk-app-devtools",{store:n.component.props.store})});case 2:e=t.sent,console.log(e);case 4:case"end":return t.stop()}},t,n)})),this.metaAction=e.metaAction,this.config=m.default.current};t.exports=e.default},1657:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function u(t){var e=new d.reducer(t),n=new p((0,a.default)({},t,{metaReducer:e}));return(0,a.default)({},e,n)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),a=o(r),i=n(4),c=o(i);e.default=u;var d=(n(188),n(288)),f=n(630),s=o(f),l=n(638),p=function t(e){var n=this;(0,c.default)(this,t),this.init=function(t,e){var o=(0,l.getInitState)();return n.metaReducer.init(t,o)},this.modifyContent=function(t){var e=n.metaReducer.gf(t,"data.content");return n.metaReducer.sf(t,"data.content",e+"!")},this.metaReducer=e.metaReducer,this.config=s.default.current};t.exports=e.default}});