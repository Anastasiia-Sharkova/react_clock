(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),s=n(5),l=n(4),r=n(1),d=n.n(r),h=(n(12),n(13),n(0)),m=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).timerId=void 0,t.state={date:(new Date).toLocaleTimeString()},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){var e=(new Date).toLocaleTimeString();t.setState({date:e}),console.log(e)}),1e3)}},{key:"componentDidUpdate",value:function(t){this.props.name!==t.name&&console.log("The Clock was renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"Clock",children:[Object(h.jsx)("p",{"data-cy":"time",className:"Clock__title",children:"Current time:"}),Object(h.jsx)("div",{className:"Clock__timer",children:this.state.date})]})}}]),n}(d.a.Component),u=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={clockName:Math.floor(24*Math.random()),isClockVisible:!0},t.showClock=function(){t.setState({isClockVisible:!0})},t.hideClock=function(){t.setState({isClockVisible:!1})},t.randomName=function(){t.setState({clockName:Math.floor(24*Math.random())})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.clockName,n=t.isClockVisible;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{className:"App__title",children:"\u0421lock name is ".concat(e)}),n?Object(h.jsx)(m,{name:e}):Object(h.jsxs)("div",{className:"Show-container",children:[Object(h.jsx)("h1",{className:"App__title Show-container__title",children:"The clock is hidden. Do you want to show it?"}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"button",className:"App__button App__button-show",onClick:this.showClock,children:"Show Clock"})})]}),Object(h.jsxs)("div",{className:"Hide-container",children:[Object(h.jsx)("button",{type:"button",className:"App__button",onClick:this.hideClock,disabled:!n,children:"Hide Clock"}),Object(h.jsx)("button",{type:"button",className:"App__button",onClick:this.randomName,disabled:!n,children:"Set random name (0-24)"})]})]})}}]),n}(d.a.Component);a.a.render(Object(h.jsx)(u,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.dade34b0.chunk.js.map