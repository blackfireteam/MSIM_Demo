!function(e){function t(t){for(var o,i,a=t[0],c=t[1],u=t[2],l=0,m=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(d&&d(t);m.length;)m.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},i={app:0},s={app:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[];i[e]?t.push(i[e]):0!==i[e]&&{home:1,login:1,onlineList:1,register:1,sparks:1,"default~chatRoom~singleChat":1,chatRoom:1,singleChat:1}[e]&&t.push(i[e]=new Promise((function(t,n){for(var o="css/"+({home:"home",login:"login",onlineList:"onlineList",register:"register",sparks:"sparks","vendors~chatRoom~singleChat":"vendors~chatRoom~singleChat","default~chatRoom~singleChat":"default~chatRoom~singleChat",chatRoom:"chatRoom",singleChat:"singleChat"}[e]||e)+"."+{home:"e1d5e50b",login:"cf54fe39",onlineList:"abe0ba63",register:"3cd67074",sparks:"322decfd","vendors~chatRoom~singleChat":"31d6cfe0","default~chatRoom~singleChat":"66817a0d",chatRoom:"d2eb55ee",singleChat:"0f76639e","chunk-5e3a6771":"31d6cfe0"}[e]+".css",s=a.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var u=(d=r[c]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===o||u===s))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){var d;if((u=(d=l[c]).getAttribute("data-href"))===o||u===s)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var o=t&&t.target&&t.target.src||s,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],m.parentNode.removeChild(m),n(r)},m.href=s,document.getElementsByTagName("head")[0].appendChild(m)})).then((function(){i[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=s[e]=[t,o]}));t.push(n[2]=o);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=function(e){return a.p+"js/"+({home:"home",login:"login",onlineList:"onlineList",register:"register",sparks:"sparks","vendors~chatRoom~singleChat":"vendors~chatRoom~singleChat","default~chatRoom~singleChat":"default~chatRoom~singleChat",chatRoom:"chatRoom",singleChat:"singleChat"}[e]||e)+"."+{home:"2cbbe15c",login:"be1e7855",onlineList:"425992bb",register:"dbc78e15",sparks:"c662b58f","vendors~chatRoom~singleChat":"68bee94d","default~chatRoom~singleChat":"a10be82d",chatRoom:"becf5c62",singleChat:"1623d7cc","chunk-5e3a6771":"a1f825c4"}[e]+".js"}(e);var u=new Error;r=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=s[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}s[e]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw e};var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;r.push([0,"vendors~app","chunksSdk~app"]),n()}({0:function(e,t,n){e.exports=n("56d7")},"4de0":function(e,t,n){"use strict";n("80f9")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),i=(n("b0c0"),n("4160"),n("159b"),n("5502")),s=n("6c02"),r={setup:function(e){var t=Object(o.l)().appContext.config.globalProperties,n=t.$IM,r=t.$msim,a=t.$loading,c=t.$http,u=Object(i.b)(),l=Object(s.d)(),d=Object(s.c)(),m=Object(o.A)({isInit:!1});function f(e,t){a.show(),r.login({wsUrl:e,imToken:t,subAppId:1}).then((function(n){window.localStorage.setItem("msim_demo_userId",n.data.uid),window.localStorage.setItem("msim_demo_wsUrL",e),window.localStorage.setItem("msim_demo_imToken",t),u.commit("setUserId",n.data.uid),m.isInit=!0,a.hide()})).catch((function(e){4!==e.code&&3002!==e.code&&(m.isInit=!0,a.hide(),v())}))}function h(e){u.commit("setProfiles",e.data)}function g(e){u.commit("delOnlineUsers",e.data.uid)}function p(e){u.commit("setOnlineUsers",e.data)}function v(){window.localStorage.clear(),u.commit("clear"),l.push({name:"login"})}function b(e){}function C(e){var t=window.localStorage.getItem("msim_demo_userId");t&&(u.commit("setUserId",t),"login"===d.name&&l.push({name:"home"}))}function I(e){v()}function L(e){var t=window.localStorage.getItem("msim_demo_userId");t&&(a.show(),c.post("user/iminit",{uid:t,ctype:1}).then((function(e){f(e.data.url,e.data.token)})).catch((function(e){m.isInit=!0,a.hide(),v()})))}function O(e){}function E(e){var t=[],n=u.state.profiles;e.data.forEach((function(e){n.has(e.uid)||t.push({uid:e.uid})})),t.length>0&&r.getProfileList(t),u.commit("updateChats",e.data),r.getAllUnreadCount().then((function(e){u.commit("setUnread",e.data.unread)}))}return Object(o.u)((function(){if(r.on(n.EVENT.CONNECT_CHANGE,b),r.on(n.EVENT.LOGIN,C),r.on(n.EVENT.LOGOUT,I),r.on(n.EVENT.KICKED_OUT,I),r.on(n.EVENT.LOGIN_FAILED,I),r.on(n.EVENT.TOKEN_NOT_FOUND,L),r.on(n.EVENT.SYNC_CHATS_CHANGE,O),r.on(n.EVENT.CONVERSATION_LIST_UPDATED,E),r.on(n.DEMO_EVENT.PROFILE_UPDATE,h),r.on(n.DEMO_EVENT.USR_ONLINE,p),r.on(n.DEMO_EVENT.USR_OFFFLINE,g),window.localStorage.getItem("msim_demo_userId")){var e=window.localStorage.getItem("msim_demo_wsUrL"),t=window.localStorage.getItem("msim_demo_imToken"),o=window.localStorage.getItem("msim_demo_profiles");o&&u.commit("setProfiles",JSON.parse(o)),f(e,t)}else m.isInit=!0})),function(e,t){var n=Object(o.E)("router-view");return Object(o.I)(m).isInit?(Object(o.w)(),Object(o.d)(n,{key:0})):Object(o.e)("",!0)}}},a=(n("4de0"),r),c=(n("d3b7"),n("3ca3"),n("ddb0"),Object(s.b)()),u=Object(s.a)({history:c,routes:[{path:"/login",name:"login",component:function(){return n.e("login").then(n.bind(null,"dd1d"))}},{path:"/register",name:"register",component:function(){return n.e("register").then(n.bind(null,"cbf3"))}},{path:"/home",name:"home",component:function(){return n.e("home").then(n.bind(null,"d1f2"))},redirect:"singleChat",children:[{path:"/singleChat",name:"singleChat",component:function(){return Promise.all([n.e("vendors~chatRoom~singleChat"),n.e("default~chatRoom~singleChat"),n.e("singleChat")]).then(n.bind(null,"6b86"))}},{path:"/chatRoom",name:"chatRoom",component:function(){return Promise.all([n.e("vendors~chatRoom~singleChat"),n.e("default~chatRoom~singleChat"),n.e("chatRoom")]).then(n.bind(null,"07de"))}},{path:"/onlineList",name:"onlineList",component:function(){return n.e("onlineList").then(n.bind(null,"8fa6"))}},{path:"/sparks",name:"sparks",component:function(){return n.e("sparks").then(n.bind(null,"61f5"))}}]}]});u.beforeEach((function(e,t,n){window.localStorage.getItem("msim_demo_userId")||"login"===e.name||"register"===e.name?e.name?n():n("/home"):n("/login")}));var l=u,d=n("2909"),m=n("5530"),f=(n("4ec9"),n("a630"),n("4de4"),n("7db0"),n("4e82"),n("caad"),n("2532"),n("d81d"),Object(i.a)({state:function(){return{curUserId:null,chatList:[],msgList:[],roomMsgList:[],curChat:null,profiles:new Map,sparks:new Map,onlineUsers:new Map,allUnread:0}},mutations:{clear:function(e){e.curUserId=null,e.chatList=[],e.msgList=[],e.roomMsgList=[],e.sparks=new Map,e.profiles=new Map,e.onlineUsers=new Map,e.curChat=null,e.allUnread=0},setUserId:function(e,t){e.curUserId=t},setSparks:function(e,t){t.forEach((function(t){try{t.custom=JSON.parse(t.custom)}catch(e){t.custom=void 0}e.sparks.set(t.uid,t),e.profiles.set(t.uid,t)}))},updateProfile:function(e,t){var n=e.profiles.get(t.uid);try{t.custom=JSON.parse(t.custom)}catch(e){t.custom=void 0}n&&(e.profiles.set(t.uid,Object(m.a)(Object(m.a)({},n),t)),window.localStorage.setItem("msim_demo_profiles",JSON.stringify(Array.from(e.profiles.values()))))},setProfiles:function(e,t){t.forEach((function(t){try{t.custom=JSON.parse(t.custom)}catch(e){t.custom=void 0}e.profiles.set(t.uid,t)})),window.localStorage.setItem("msim_demo_profiles",JSON.stringify(Array.from(e.profiles.values())))},setOnlineUsers:function(e,t){try{t.custom=JSON.parse(t.custom)}catch(e){t.custom=void 0}e.onlineUsers.set(t.uid,t),e.profiles.has(t.uid)||e.profiles.set(t.uid,t)},delOnlineUsers:function(e,t){e.onlineUsers.delete(t)},setUnread:function(e,t){e.allUnread=t},refreshChats:function(e,t){e.curChat=null,e.msgList=[],e.chatList=t},addChats:function(e,t){var n;(n=e.chatList).push.apply(n,Object(d.a)(t))},addChat:function(e,t){e.chatList.unshift(t)},deleteChat:function(e,t){var n;e.chatList=e.chatList.filter((function(e){return e.conversationID!==t})),(null===(n=e.curChat)||void 0===n?void 0:n.conversationID)===t&&(e.curChat=e.chatList[0]||null)},changeChat:function(e,t){e.curChat=t,e.msgList=[]},updateChats:function(e,t){t.forEach((function(t){if(t.deleted){var n;e.chatList=e.chatList.filter((function(e){return e.conversationID!==t.conversationID})),(null===(n=e.curChat)||void 0===n?void 0:n.conversationID)===t.conversationID&&(e.curChat=e.chatList[0]||null)}else{var o=e.chatList.find((function(e){return e.conversationID===t.conversationID}));o?Object.assign(o,t):e.chatList.unshift(t)}})),e.chatList.sort((function(e,t){return t.showMsgTime-e.showMsgTime})),!e.curChat&&e.chatList.length&&(e.curChat=e.chatList[0],e.msgList=[])},clearMsgs:function(e){e.msgList=[]},addMsg:function(e,t){e.msgList.push(t)},addMsgs:function(e,t){var n;(n=e.msgList).unshift.apply(n,Object(d.a)(t))},updateMsgs:function(e,t){e.curChat&&t.forEach((function(t){if(t.conversationID===e.curChat.conversationID){var n=e.msgList.find((function(e){return e.onlyId===t.onlyId}));n?Object.assign(n,t):e.msgList.push(t)}}))},readFlashMsg:function(e,t){var n;e.curChat&&(null===(n=e.curChat)||void 0===n?void 0:n.conversationID)===t.conversationID&&(e.msgList=e.msgList.filter((function(e){return e.msgId!==t.msgId})))},revokeMsgs:function(e,t){e.curChat&&t.forEach((function(t){if(t.conversationID===e.curChat.conversationID){var n=e.msgList.find((function(e){return e.msgId===t.msgId}));n&&Object.assign(n,t)}}))},deleteMsgs:function(e,t){var n;e.curChat&&(null===(n=e.curChat)||void 0===n?void 0:n.conversationID)===t.conversationID&&(e.msgList=e.msgList.filter((function(e){return!t.msgIds.includes(e.msgId)})))},updateMsg:function(e,t){e.msgList=e.msgList.map((function(e){return e.conversationID===t.conversationID&&e.onlyId===t.onlyId?Object.assign(e,t):e}))},addRoomMsg:function(e,t){e.roomMsgList.push(t)},updateRoomMsgs:function(e,t){var n;0===e.roomMsgList.length?(n=e.roomMsgList).push.apply(n,Object(d.a)(t)):t.forEach((function(t){var n=e.roomMsgList.find((function(e){return e.onlyId===t.onlyId}));n?Object.assign(n,t):e.roomMsgList.push(t)}))},revokeRoomMsg:function(e,t){t.forEach((function(t){var n=e.roomMsgList.find((function(e){return e.msgId===t.msgId}));n&&Object.assign(n,t)}))},deleteRoomMsgs:function(e,t){e.roomMsgList=e.roomMsgList.filter((function(e){return!t.msgIds.includes(e.msgId)}))},updateRoomMsg:function(e,t){e.roomMsgList=e.roomMsgList.map((function(e){return e.conversationID===t.conversationID&&e.onlyId===t.onlyId?Object.assign(e,t):e}))},clearRoomMsgs:function(e){e.roomMsgList=[]}}})),h=n("bc3a"),g=n.n(h);function p(e){var t=document.createElement("div");t.innerText=e.message;var n="ui-message";switch(e.type){case"success":n+=" ui-message-success";break;case"error":n+=" ui-message-error";break;case"info":n+=" ui-message-info"}t.setAttribute("class",n);var o=setTimeout((function(){document.body.removeChild(t),clearTimeout(o)}),3e3);t.addEventListener("mouseenter",(function(){clearTimeout(o)})),t.addEventListener("mouseleave",(function(){o=setTimeout((function(){document.body.removeChild(t),clearTimeout(o)}),3e3)})),document.body.appendChild(t)}var v=n("6199"),b=n.n(v),C=g.a.create({baseURL:"https://im.ekfree.com:18789/"});C.interceptors.request.use((function(e){var t=Math.ceil(1e10*Math.random()),n=1e3*Date.now(),o=b()("asfasdasd123"+t+n);return e.headers.nonce=t,e.headers.timestamp=n,e.headers.sig=o,e.headers.appid=100,e}),(function(e){Promise.reject(e)})),C.interceptors.response.use((function(e){var t=e.data;if(t&&0===t.code)return e.data;var n="接口参数错误";return 2001===t.code?n="图形验证码错误":t&&t.msg&&(n=t.msg),p({type:"error",message:n}),Promise.reject(t)}),(function(e){return Promise.reject(e)}));var I=C,L=n("32f4"),O={show:function(){if(!O.dom){var e=document.createElement("div");e.setAttribute("class","ui-loading");var t=document.createElement("div");t.innerText="Loading",t.setAttribute("class","ui-loading-text"),e.appendChild(t);var n=document.createElement("div");n.setAttribute("class","ui-loading-mask"),e.appendChild(n),O.dom=e,document.body.appendChild(e)}},hide:function(){var e=document.getElementsByClassName("ui-loading");if(!(e.length<1)){for(;null!==(t=e[0])&&void 0!==t&&t.hasChildNodes();){var t;e[0].removeChild(e[0].firstChild)}e[0].parentNode.removeChild(e[0])}}},E=O,w=n("2058"),y=Object(o.c)(a);y.config.globalProperties.$IM=L.a,y.config.globalProperties.$loading=E,y.config.globalProperties.$message=p,y.config.globalProperties.$http=I,y.use(f),y.use(l),y.use(w.a),L.a.create().then((function(e){y.config.globalProperties.$msim=e,y.mount("#app")}))},"80f9":function(e,t,n){}});