(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(6),l=a.n(o),r=a(1),i=a(2),s=a(4),m=a(3),u=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={time:(new Date).toLocaleTimeString()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){e.setState({time:(new Date).toLocaleTimeString()}),console.log(e.state.time)}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this.props.clockName,t=this.state.time;return c.a.createElement("div",{className:"App__clock"},c.a.createElement("h1",{className:"App__title"},"Clock ".concat(e)),c.a.createElement("p",{className:"App__clock-text"},"Current time:"),c.a.createElement("p",{className:"App__clock-time"},t))}}]),a}(c.a.Component),p=(a(12),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={isClockVisible:!0,clockName:1},e.setRandomName=function(){return e.setState((function(e){var t=e.clockName,a=Math.floor(100*Math.random());return console.log("The Clock was renamed from ".concat(t," to ").concat(a)),{clockName:a}}))},e.changeState=function(){e.setState((function(e){return{isClockVisible:!e.isClockVisible}}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.isClockVisible,n=t.clockName;return c.a.createElement("div",{className:"App"},a?c.a.createElement(u,{clockName:n}):c.a.createElement("h1",{className:"App__title animate__animated animate__pulse"},"Have some time for yourself!"),c.a.createElement("div",{className:"App__buttons"},c.a.createElement("button",{type:"button",className:"App__button",onClick:function(){return e.changeState()}},this.state.isClockVisible?"Hide Clock":"Show Clock"),c.a.createElement("button",{type:"button",className:"App__button",onClick:function(){return e.setRandomName()}},"Change Clock Name")))}}]),a}(c.a.Component));l.a.render(c.a.createElement(p,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.9260af02.chunk.js.map