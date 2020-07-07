(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{39:function(e,t,r){e.exports=r(67)},44:function(e,t,r){},45:function(e,t,r){e.exports=r.p+"static/media/logo.5d5d9eef.svg"},67:function(e,t,r){"use strict";r.r(t);var a,o=r(0),n=r.n(o),i=r(25),c=r.n(i),l=(r(44),r(45),r(5)),d=(a={colors:{text:"#000",textLight:"white",background:"#F4F4F4",primary:"#6A66F2",primaryLight:"A29FFF",dark:"#413BFF",gray:"C4C4C4",warning:"#F26666",warningActive:"#FF6099",active:"#9B66F2",cardBg:"white"},fonts:{body:"'Roboto', sans-serif",heading:"'Roboto', sans-serif",monospace:"Menlo, monospace"},breakpoints:["40em","56em","64em","100em"],fontWeights:{thin:200,body:400,heading:700,bold:700},lineHeights:{body:1.5,heading:1.125},text:{"header-big":{fontSize:5,fontWeight:700}},links:{bold:{fontWeight:"bold",textDecoration:"underline"}},fontSizes:[14,16,20,24,28,48,64],app:{margin:0,width:"100vw",minHeight:"100vh",bg:"background",p:[3,4,5]},cards:{primary:{backgroundColor:"white",padding:[4,5],borderColor:"white",borderWidth:"2px",borderStyle:"solid",borderRadius:"16px",width:["100%","66%","50%","50%","33%"],boxShadow:"4px 4px 16px rgba(0, 0, 0, 0.25)"},tiny:{backgroundColor:"white",padding:2,borderColor:"white",borderWidth:"2px",borderStyle:"solid",borderRadius:"8px"},viewport:{height:["50vh","50vh","100vh"],padding:[2,4]},container:{padding:[3,4]},modal:{padding:2,bg:"background",width:["100%","100%","100%"]},selected:{borderColor:"primary",borderWidth:"4px",borderStyle:"solid",borderRadius:"8px"}},img:{selected:{borderColor:"primary",borderWidth:"1px",borderStyle:"solid",borderRadius:"4px"}}},Object(l.a)(a,"text",{error:{color:"red"}}),Object(l.a)(a,"spacer",{flex:"1 1"}),Object(l.a)(a,"centering",Object(l.a)({flexDirection:"column",justifyContent:"center",alignItems:"center"},"justifyContent","center")),Object(l.a)(a,"vCentering",{justifyContent:"center",alignItems:"center",flexDirection:"column",display:"flex",width:"100%"}),Object(l.a)(a,"forms",{slider:{color:"primary",bg:"background"},input:{borderColor:"primary",backgroundColor:"white",borderRadius:"28px",borderWidth:"2px",outline:"none",padding:"14px",fontSize:1,"&:active":{borderColor:"active",outline:"none"},"&:focus":{borderColor:"active",outline:"none"}},inputTiny:{borderColor:"primary",borderRadius:"28px",borderWidth:"2px",outline:"none",padding:"10px",fontSize:1,"&:active":{borderColor:"active",outline:"none"},"&:focus":{borderColor:"active",outline:"none"}},select:{minWidth:"100px",color:"text",backgroundColor:"bg",borderWidth:"2px",borderColor:"primary","&:active":{borderColor:"active",outline:"none"},"&:focus":{borderColor:"active",outline:"none"}},searchbar:{backgroundColor:"white",color:"text",borderRadius:"28px",outline:"none",padding:"14px",borderWidth:"2px",borderColor:"primary",flex:1,fontSize:1,"&:active":{outline:"none"},"&:focus":{outline:"none"}}}),Object(l.a)(a,"buttons",{primary:{borderRadius:"20px",borderStyle:"solid",borderColor:"primary",borderWidth:"2px",outline:"none","&:active":{backgroundColor:"active",borderColor:"active"}},warning:{borderRadius:"20px",backgroundColor:"warning",borderColor:"warning",borderStyle:"solid",borderWidth:"2px",outline:"none","&:active":{borderColor:"warningActive",backgroundColor:"warningActive"}},action:{borderRadius:"16px",borderStyle:"solid",borderColor:"primary",outline:"none",fontSize:0,"&:active":{backgroundColor:"active",borderColor:"active"}},actionWarning:{borderRadius:"16px",borderStyle:"solid",backgroundColor:"warning",borderColor:"warning",outline:"none",fontSize:0,"&:active":{backgroundColor:"warningActive",borderColor:"warningActive"}},outline:{borderRadius:"20px",backgroundColor:"rgba(0,0,0,0)",borderColor:"primary",color:"primary",borderStyle:"solid",borderWidth:"2px",outline:"none","&:active":{borderColor:"active",color:"active"}},circle:{borderRadius:"50%",outline:"none",bg:"primary","&:active":{backgroundColor:"active",borderColor:"active"}},circleSmall:{borderRadius:"50%",paddingTop:"4px",paddingBottom:"4px",paddingLeft:"4px",paddingRight:"4px",outline:"none",bg:"primary","&:active":{backgroundColor:"active",borderColor:"active"}},icon:{outline:"none","&:active":{opacity:.5},"&:hover":{opacity:.5},static:{"&:active":{opacity:1},"&:hover":{opacity:1}}},close:{position:"absolute",right:[2,3,4],top:[2,3,4],height:"48px",width:"48px",outline:"none","&:active":{opacity:.5},"&:hover":{opacity:.5}}}),a),s=r(69),u=r(68),p=r(10),b=r(15),m=r.n(b),g=r(27),h=r(28),x=r(29),v=r(37),f=r(34),y=r(30),E=r.n(y),C=new(function(e){Object(v.a)(r,e);var t=Object(f.a)(r);function r(){var e;Object(h.a)(this,r);for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).state={gdp:null,data:{year:1985,co2:3,oil:.5,eggs:.003016,meat:.02,urban:32}},e.API_URL="/api/pred",e}return Object(x.a)(r,[{key:"getPrediction",value:function(){var e=Object(g.a)(m.a.mark((function e(t){var r,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.put(this.API_URL,t);case 2:r=e.sent,a=r.data.pred.gdp,this.setState({gdp:a,data:t});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"wipe",value:function(){this.setState({gdp:null})}}]),r}(p.a)),w=r(35),k=r(36),S=r(14),W=function(e){var t=e.title,r=e.subtitle,a=(e.data,e.children),o=void 0===a?void 0:a;return n.a.createElement(u.d,{sx:{flexDirection:"column"}},n.a.createElement(u.g,{sx:{fontSize:3}},t),n.a.createElement(u.a,{m:1}),n.a.createElement(u.g,{sx:{fontSize:1}},r),n.a.createElement(u.a,{m:1}),o&&o)},j=function(e){var t=e.title,r=e.subtitle,a=e.name,o=e.data,i=e.setData,c=e.min,l=void 0===c?0:c,d=e.max,s=void 0===d?2:d,p=e.step,b=void 0===p?.1:p;return n.a.createElement(W,{title:t,subtitle:r},n.a.createElement(u.d,null,n.a.createElement(u.f,{min:l,max:s,step:b,defaultValue:o[a],onChange:function(e){var t=Object(S.a)({},o);t[a]=Number(e.target.value),i(t)}}),n.a.createElement(u.a,{ml:2}),o[a].toFixed(4)))},O=function(e){var t=e.gdp,r=Object(o.useState)(Object(S.a)({},t.state.data)),a=Object(k.a)(r,2),i=a[0],c=a[1];return n.a.createElement(u.a,null,n.a.createElement(u.g,{sx:{fontSize:2,fontWeight:300}},"Define the country's resources"),n.a.createElement(u.a,{mb:3}),n.a.createElement(W,{title:"Year",subtitle:"We could need to hit the 88 miles per hours"},n.a.createElement(u.e,{sx:{width:["100%","66%"]},onChange:function(e){var t=Object(S.a)({},i);t.year=Number(e.target.value),c(t)}},Object(w.a)(Array(40).keys()).map((function(e){return n.a.createElement("option",{key:e},e+1980)})))),n.a.createElement(u.a,{mb:4}),n.a.createElement(j,{title:"C02",subtitle:"How much co2 is producted (tons per cap)",name:"co2",max:4,step:.1,data:i,setData:c}),n.a.createElement(u.a,{mb:4}),n.a.createElement(j,{title:"Oil",subtitle:"How much oil is producted (MW-hours)",name:"oil",step:.01,max:10,data:i,setData:c}),n.a.createElement(u.a,{mb:4}),n.a.createElement(j,{title:"Eggs",subtitle:"How much oil is producted (tons per cap)",name:"eggs",max:.05,step:.001,data:i,setData:c}),n.a.createElement(u.a,{mb:4}),n.a.createElement(j,{title:"Meat",subtitle:"How much meat is produced (tons per cap)",name:"meat",max:.5,step:.001,data:i,setData:c}),n.a.createElement(u.a,{mb:4}),n.a.createElement(j,{title:"Urban",subtitle:"Urbanization of the country (%)",name:"urban",min:0,max:100,step:1,data:i,setData:c}),n.a.createElement(u.a,{mb:6}),n.a.createElement(u.b,{sx:{width:"100%"},onClick:function(){return t.getPrediction(i)}},"GO!"))},R=function(e){var t=e.gdp;return n.a.createElement(u.d,{sx:{minHeight:"450px",flexDirection:"column"}},n.a.createElement(u.a,{variant:"spacer"}),n.a.createElement(u.a,{sx:{textAlign:"center"}},n.a.createElement(u.g,{sx:{fontSize:6,color:"primary"}},t.state.gdp.toFixed(2)),n.a.createElement(u.g,{sx:{fontWeight:300}},"(Int$ per capita)")),n.a.createElement(u.a,{variant:"spacer"}),Object.keys(t.state.data).map((function(e){return n.a.createElement(u.d,{sx:{flexDirection:"row"}},n.a.createElement(u.g,{sx:{fontSize:1,fontWeight:200}},e.toUpperCase(),":"),n.a.createElement(u.a,{ml:1})," ",n.a.createElement(u.g,{sx:{fontSize:1}},t.state.data[e]))})),n.a.createElement(u.a,{variant:"spacer"}),n.a.createElement(u.a,null,n.a.createElement(u.b,{variant:"outline",onClick:function(){return t.wipe()}},"Back")))};function z(e){var t=e.gdp;return n.a.createElement(u.c,null,null!==t.state.gdp?n.a.createElement(R,{gdp:t}):n.a.createElement(O,{gdp:t}))}var D=function(){return n.a.createElement(s.a,{theme:d},n.a.createElement(p.b,null,n.a.createElement(u.a,{variant:"app"},n.a.createElement(u.a,{variant:"vCentering",sx:{height:"100%"}},n.a.createElement(u.g,{sx:{fontSize:5,fontWeight:"body"}},"GDP"),n.a.createElement(u.g,{sx:{fontSize:3}},"Create your amazing country and see its",n.a.createElement(u.g,{sx:{color:"primary"}},"GDP")),n.a.createElement(u.a,{mb:[4,6]}),n.a.createElement(p.c,{to:[C]},(function(e){return n.a.createElement(z,{gdp:e})}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.a09e91c9.chunk.js.map