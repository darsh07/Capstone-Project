(this["webpackJsonpmessaging-app"]=this["webpackJsonpmessaging-app"]||[]).push([[0],{58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},72:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c.n(s),n=c(20),i=c.n(n),r=(c(58),c(17)),j=(c(59),c(43)),d=(c(60),c(37)),b=(d.a.initializeApp({apiKey:"AIzaSyD8mpTPhNRfxavlRHpZXRiXkQ49fsdussQ",authDomain:"capstone-project-19b.firebaseapp.com",projectId:"capstone-project-19b",storageBucket:"capstone-project-19b.appspot.com",messagingSenderId:"1038592443157",appId:"1:1038592443157:web:cc64111a4e4ec677e75f1c"}).firestore(),d.a.auth()),o=new d.a.auth.GoogleAuthProvider,l=c(40),h="SET_USER",O=function(e,t){switch(console.log(t),t.type){case h:return Object(l.a)(Object(l.a)({},e),{},{user:t.user});default:return e}},u=c(3),x=Object(s.createContext)(),p=function(e){var t=e.reducer,c=e.initialState,a=e.children;return Object(u.jsx)(x.Provider,{value:Object(s.useReducer)(t,c),children:a})},m=function(){return Object(s.useContext)(x)};var v=function(){var e=m(),t=Object(r.a)(e,2);Object(j.a)(t[0]);var c=t[1];return Object(u.jsx)("div",{className:"login",children:Object(u.jsxs)("div",{className:"login__container",children:[Object(u.jsx)("img",{src:"",alt:""}),Object(u.jsx)("div",{className:"login__text",children:Object(u.jsx)("h1",{children:" Welcome to our messaging App"})}),Object(u.jsx)("div",{className:"signup_btn",children:Object(u.jsx)("button",{type:"submit",onClick:function(){b.signInWithPopup(o).then((function(e){c({type:h,user:e.user})})).catch((function(e){return alert(e.message)}))},children:"Sign In using Google"})})]})})},f=(c(65),c(89));c(66);var g=function(e){var t=e.addNewChat,c=Object(s.useState)(""),a=Object(r.a)(c,2),n=a[0],i=a[1];return Object(s.useEffect)((function(){i(Math.floor(5e3*Math.random()))}),[]),t?Object(u.jsx)("div",{onClick:function(){prompt("Please enter name for chat")},className:"sidebarChat",children:Object(u.jsx)("h2",{children:" Add New Chat "})}):Object(u.jsxs)("div",{className:"sidebarChat",children:[Object(u.jsx)(f.a,{src:"https://avatars.dicebear.com/4.5/api/male/".concat(n,".svg")}),Object(u.jsxs)("div",{className:"sidebarChat__info",children:[Object(u.jsx)("h2",{children:" Room name"}),Object(u.jsx)("p",{children:" Last message ..."})]})]})},_=c(88),N=c(49),C=c.n(N),S=c(50),w=c.n(S),y=c(35),I=c.n(y),R=c(36),P=c.n(R);var k=function(){return Object(u.jsxs)("div",{className:"sidebar",children:[Object(u.jsxs)("div",{className:"sidebar__header",children:[Object(u.jsx)(f.a,{}),Object(u.jsxs)("div",{className:"sidebar__headerRight",children:[Object(u.jsxs)(_.a,{children:[" ",Object(u.jsx)(C.a,{})," "]}),Object(u.jsxs)(_.a,{children:[" ",Object(u.jsx)(w.a,{})," "]}),Object(u.jsxs)(_.a,{children:[" ",Object(u.jsx)(I.a,{})," "]})]})]}),Object(u.jsx)("div",{className:"sidebar_search",children:Object(u.jsxs)("div",{className:"sidebar__searchContainer",children:[Object(u.jsx)(P.a,{}),Object(u.jsx)("input",{placeholder:"Search or Start new chat",type:"text"})]})}),Object(u.jsxs)("div",{className:"sidebar__chats",children:[Object(u.jsx)(g,{addNewChat:!0}),Object(u.jsx)(g,{}),Object(u.jsx)(g,{}),Object(u.jsx)(g,{}),Object(u.jsx)(g,{})]})]})},A=(c(72),c(51)),E=c.n(A);var M=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){a(Math.floor(5e3*Math.random()))}),[]),Object(u.jsxs)("div",{className:"chat",children:[Object(u.jsxs)("div",{className:"chat__header",children:[Object(u.jsx)(f.a,{src:"https://avatars.dicebear.com/4.5/api/male/".concat(c,".svg")}),Object(u.jsxs)("div",{className:"chat__headerInfo",children:[Object(u.jsx)("h3",{children:" Room name "}),Object(u.jsx)("p",{children:" Last seen at ... "})]}),Object(u.jsxs)("div",{className:"chat_headerRight",children:[Object(u.jsxs)(_.a,{children:[" ",Object(u.jsx)(P.a,{})," "]}),Object(u.jsxs)(_.a,{children:[" ",Object(u.jsx)(E.a,{})," "]}),Object(u.jsxs)(_.a,{children:[" ",Object(u.jsx)(I.a,{})," "]})]})]}),Object(u.jsx)("div",{className:"chat__body"}),Object(u.jsx)("div",{className:"chat__footer"})]})};var F=function(){var e=m(),t=Object(r.a)(e,2),c=t[0].user;return t[1],Object(u.jsx)("div",{className:"app",children:c?Object(u.jsxs)("div",{className:"app__body",children:[Object(u.jsx)(k,{}),Object(u.jsx)(M,{})]}):Object(u.jsx)(v,{})})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,90)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(p,{initialState:{user:null},reducer:O,children:Object(u.jsx)(F,{})})}),document.getElementById("root")),L()}},[[74,1,2]]]);
//# sourceMappingURL=main.10f5c646.chunk.js.map