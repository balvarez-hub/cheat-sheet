(this["webpackJsonpcheat-sheet"]=this["webpackJsonpcheat-sheet"]||[]).push([[0],{78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(13),r=n.n(c),i=n(15),s=n(104),o=n(10),u=n.n(o),l=n(20),j=n(114),d=n(115),b=n(116),p=n(103),h=n(113),O=n(2),f="prompt",m="granted",x="denied",v=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.permissions.query({name:"microphone"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(e){var t=e.isAudioPermisionChanged,n=(e.changeAudioPermission,Object(a.useState)(f)),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useCallback)(Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:(null===(t=e.sent)||void 0===t?void 0:t.state)&&s(t.state);case 4:case"end":return e.stop()}}),e)}))),[]);return Object(a.useEffect)((function(){o()}),[t,o]),Object(O.jsxs)(j.a,{component:"fieldset",children:[Object(O.jsx)(d.a,{children:"Permisos del micro"}),Object(O.jsxs)(b.a,{row:!0,"aria-label":"gender",name:"gender1",value:r,children:[Object(O.jsx)(p.a,{disabled:!0,value:f,control:Object(O.jsx)(h.a,{}),label:f}),Object(O.jsx)(p.a,{disabled:!0,value:m,control:Object(O.jsx)(h.a,{}),label:m}),Object(O.jsx)(p.a,{disabled:!0,value:x,control:Object(O.jsx)(h.a,{}),label:x})]})]})},w=n(105),y=n(60),k=n.n(y),C=n(59),P=n.n(C),S=n(57),A=n.n(S),R=n(56),I=n.n(R),L=n(58),E=n.n(L),z="audio/webm",F="codecs=opus",T="inactive",B="recording",U="success",D={audio:!0},G=function(e){var t=e.currentStatus,n=e.setCurrentStatus,c=e.setAudioPlayer,r=e.changeAudioPermission,o=Object(a.useState)(0),j=Object(i.a)(o,2),d=j[0],b=j[1],p=Object(a.useState)(0),h=Object(i.a)(p,2),f=h[0],m=h[1],x=Object(a.useRef)(),v=Object(a.useRef)(),g=Object(a.useRef)(),y=Object(a.useCallback)(Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t===B&&(d+1===60&&m(f+1),b((d+1)%60));case 1:case"end":return e.stop()}}),e)}))),[t,f,d]);Object(a.useEffect)((function(){if(t===B){var e=setInterval(y,1e3);return function(){return clearInterval(e)}}}),[y,t,d,f]);var k=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia(D);case 3:x.current=e.sent,n(B),v.current=new MediaRecorder(x.current,{mimeType:"".concat(z,";").concat(F)}),g.current=[],v.current.addEventListener("dataavailable",(function(e){var t;null===(t=g.current)||void 0===t||t.push(e.data)})),v.current.addEventListener("stop",(function(){var e=new Blob(g.current,{type:"".concat(z,";").concat(F)}),t=URL.createObjectURL(e),n=new Audio(t);c(n)})),v.current.start(),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.error("Error: ".concat(e.t0)),n(T);case 16:r(!0);case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(t=x.current)||void 0===t||t.getTracks().forEach((function(e){return e.stop()})),null===(n=v.current)||void 0===n||n.stop(),m(0),b(0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();switch(t){case B:return Object(O.jsxs)(s.a,{item:!0,container:!0,justify:"center",alignItems:"center",spacing:1,children:[Object(O.jsx)(s.a,{item:!0,children:Object(O.jsx)("div",{children:"".concat(f<10?"0":"").concat(f,":").concat(d<10?"0":"").concat(d)})}),Object(O.jsx)(s.a,{item:!0,children:Object(O.jsx)(w.a,{size:"small",color:"primary","aria-label":"add",onClick:function(){n(T),C()},children:Object(O.jsx)(I.a,{})})}),Object(O.jsx)(s.a,{item:!0,children:Object(O.jsx)(w.a,{size:"small",color:"primary","aria-label":"add",onClick:function(){n(U),C()},children:Object(O.jsx)(A.a,{})})})]});case T:case U:default:return Object(O.jsx)(s.a,{item:!0,children:Object(O.jsx)(w.a,{size:"small",color:"primary","aria-label":"add",onClick:function(){return k()},children:Object(O.jsx)(E.a,{})})})}},J=function(e){var t=e.audioPlayer,n=e.currentStatus;return n===U&&Object(O.jsxs)(s.a,{item:!0,container:!0,spacing:1,children:[Object(O.jsx)(s.a,{item:!0,children:Object(O.jsx)(w.a,{size:"small",color:"primary","aria-label":"add",onClick:function(){n===U&&t.play()},children:Object(O.jsx)(P.a,{})})}),Object(O.jsx)(s.a,{item:!0,children:Object(O.jsx)(w.a,{size:"small",color:"primary","aria-label":"add",onClick:function(){n===U&&t.pause()},children:Object(O.jsx)(k.a,{})})})]})},M=function(){var e=Object(a.useState)(T),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),o=Object(i.a)(r,2),u=o[0],l=o[1],j=Object(a.useState)(null),d=Object(i.a)(j,2),b=d[0],p=d[1];return Object(O.jsxs)(s.a,{container:!0,justify:"center",alignContent:"center",spacing:1,children:[Object(O.jsx)(s.a,{item:!0,children:Object(O.jsx)(g,{isAudioPermisionChanged:u,changeAudioPermission:l})}),Object(O.jsxs)(s.a,{item:!0,container:!0,justify:"center",alignContent:"center",spacing:1,children:[Object(O.jsx)(s.a,{item:!0,children:Object(O.jsx)(G,{currentStatus:n,setCurrentStatus:c,setAudioPlayer:p,changeAudioPermission:l})}),Object(O.jsx)(s.a,{item:!0,children:Object(O.jsx)(J,{audioPlayer:b,currentStatus:n})})]})]})},q=n(109),N=n(112),W=n(110),H=n(81),K=n(111),Q=n(61),V=n.n(Q),X=n(46),Y=n(107),Z=n(106),$=n(11),_=n(108),ee=Object(Z.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(X.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(X.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object($.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object($.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(X.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),te=function(){var e=ee();return Object(O.jsx)(Y.a,{position:"static",children:Object(O.jsx)(_.a,{children:Object(O.jsx)(H.a,{className:e.title,variant:"h6",noWrap:!0,children:"Cheat sheet"})})})},ne=function(e){var t=e.list;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(te,{}),Object(O.jsx)(q.a,{style:{marginTop:"25px"},children:t.map((function(e,t){return Object(O.jsxs)(N.a,{children:[Object(O.jsx)(W.a,{expandIcon:Object(O.jsx)(V.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(O.jsx)(H.a,{children:e.title})}),Object(O.jsx)(K.a,{children:e.details})]},t)}))})]})};n(78);var ae=function(){var e=[{title:"Audio",details:Object(O.jsx)(M,{})}];return Object(O.jsx)(ne,{list:e})},ce=(n(79),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,118)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))});r.a.render(Object(O.jsx)(ae,{}),document.getElementById("root")),ce()}},[[80,1,2]]]);
//# sourceMappingURL=main.41f6608c.chunk.js.map