(window.webpackJsonp=window.webpackJsonp||[]).push([["register"],{"080d":function(e,t,n){},1269:function(e,t,n){"use strict";n("d550")},"1fbf":function(e,t,n){"use strict";var a=n("7a23");var r={props:{isCheck:Boolean}};n("6ff2");r.render=function(e,t,n,r,c,o){return Object(a.w)(),Object(a.f)("i",{class:Object(a.q)(["checkbox",{active:n.isCheck}])},null,2)},r.__scopeId="data-v-56f25784";t.a=r},2591:function(e,t,n){},3244:function(e,t,n){},4125:function(e,t,n){"use strict";var a=n("7a23");Object(a.z)("data-v-1242ba14");var r={class:"logo_header"};Object(a.x)();var c={props:{title:String}};n("6f03");c.render=function(e,t,n,c,o,i){return Object(a.w)(),Object(a.f)("div",r,Object(a.G)(n.title),1)},c.__scopeId="data-v-1242ba14";t.a=c},"6f03":function(e,t,n){"use strict";n("e984")},"6ff2":function(e,t,n){"use strict";n("2591")},"71ca":function(e,t,n){"use strict";var a=n("7a23");var r={props:{isBlock:{type:Boolean,default:!0},type:String,text:String,size:String},setup:function(e){return{styleClass:function(){var t=e.isBlock?"is_block ":"";switch(e.type){case"cancel":t+="cancel_btn ";break;case"primary":t+="primary_btn "}switch(e.size){case"small":t+="btn_small";break;case"mini":t+="btn_mini"}return t}}}};n("1269");r.render=function(e,t,n,r,c,o){return Object(a.w)(),Object(a.f)("div",{class:Object(a.q)(["btn",r.styleClass()])},Object(a.G)(n.text),3)},r.__scopeId="data-v-149b98a8";t.a=r},"89e5":function(e,t,n){},cbf3:function(e,t,n){"use strict";n.r(t);var a=n("7a23");Object(a.z)("data-v-0ccce24d");var r={class:"register_wrapper"},c={class:"logo_wrapper"},o={class:"logo_content"},i=Object(a.g)("div",{class:"login_title"},"SIGN UP",-1);Object(a.x)();n("d3b7");var l=n("6c02"),u=n("4125"),s=n("dcc8"),d=n("71ca"),p=n("1fbf"),b=n("5502"),f={components:{LogoHeaderVue:u.a,InputItem:s.a,ButtonD:d.a,IconCheckbox:p.a},setup:function(){var e=Object(a.l)().appContext.config.globalProperties,t=Object(l.d)(),n=Object(b.b)(),r=Object(a.A)({nickName:"",phone:"",phoneErrMsg:""});return Object(a.u)((function(){})),{data:r,register:function(){e.$http.post("user/reg",{uid:r.phone,nick_name:r.nickName,avatar:"https://msim-test-1252460681.cos.na-siliconvalley.myqcloud.com/pers/612FA7A3-144E-4978-A75C-9D9277167292.jpeg",gender:1,verified:!0,gold:!0,gold_exp_time:0,approved:!0,disabled:!1,blocked:!1,hold:!1,deleted:!1}).then((function(a){e.$loading.show(),e.$http.post("user/iminit",{uid:r.phone,ctype:1}).then((function(a){var c,o;c=a.data.url,o=a.data.token,window.$msim.login({wsUrl:c,imToken:o,subAppId:1}).then((function(e){n.commit("clear"),window.localStorage.setItem("userId",r.phone),window.localStorage.setItem("wsUrL",c),window.localStorage.setItem("imToken",o),n.commit("setUserId",r.phone),t.push({name:"home"})})).catch((function(a){n.commit("clear"),t.push({name:"login",params:{userId:r.phone}}),e.$message({type:"error",message:(null==a?void 0:a.msg)||a})})).finally((function(){e.$loading.hide()}))})).catch((function(t){e.$loading.hide()}))}))}}}};n("f026");f.render=function(e,t,n,l,u,s){var d=Object(a.E)("LogoHeaderVue"),p=Object(a.E)("InputItem"),b=Object(a.E)("ButtonD");return Object(a.w)(),Object(a.f)("div",r,[Object(a.g)("div",c,[Object(a.j)(d,{title:"MSIM"})]),Object(a.g)("div",o,[i,Object(a.j)(p,{label:"Phone",modelValue:l.data.phone,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.data.phone=e}),modelModifiers:{trim:!0},errMsg:l.data.phoneErrMsg,maxlength:"11",require:!0,onKeyup:Object(a.O)(l.register,["enter"])},null,8,["modelValue","errMsg","onKeyup"]),Object(a.j)(p,{label:"Nick Name",modelValue:l.data.nickName,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.data.nickName=e}),require:!0},null,8,["modelValue"]),Object(a.j)(b,{text:"SIGN UP",onClick:l.register},null,8,["onClick"])])])},f.__scopeId="data-v-0ccce24d";t.default=f},d550:function(e,t,n){},dcc8:function(e,t,n){"use strict";var a=n("7a23");Object(a.z)("data-v-a16997a4");var r={class:"input_item"},c={class:"input_label"},o={class:"err_msg"};Object(a.x)();var i={components:{InputD:n("fb37").a},props:{label:String,require:Boolean,errMsg:String},setup:function(e,t){var n=Object(a.A)({errMsg:null});return{data:n,handleBlur:function(t){e.require&&!t.target.value?n.errMsg="Require":n.errMsg=""}}}};n("efbd");i.render=function(e,t,n,i,l,u){var s=Object(a.E)("InputD");return Object(a.w)(),Object(a.f)("div",r,[Object(a.g)("h4",c,Object(a.G)(n.label),1),Object(a.j)(s,Object(a.o)(e.$attrs,{errMsg:i.data.errMsg,onBlur:i.handleBlur}),null,16,["errMsg","onBlur"]),Object(a.g)("div",o,Object(a.G)(i.data.errMsg||n.errMsg),1)])},i.__scopeId="data-v-a16997a4";t.a=i},e984:function(e,t,n){},efbd:function(e,t,n){"use strict";n("3244")},f026:function(e,t,n){"use strict";n("89e5")},f9d9:function(e,t,n){"use strict";n("080d")},fb37:function(e,t,n){"use strict";var a=n("7a23");Object(a.z)("data-v-6ed82cf2");var r={class:"input_wrapper"},c=["type","disabled","placeholder","maxlength"];Object(a.x)();n("a9e3"),n("a15b"),n("fb6a"),n("a630"),n("3ca3");var o={props:{modelValue:{type:[String,Number],default:""},inputType:{type:String,default:"text"},disabled:Boolean,errMsg:String,maxlength:{type:String,default:null},placeholder:String},setup:function(e,t){return{handleInput:function(n){var a=n.target.value;e.maxlength&&(a=Array.from(a).slice(0,Number(e.maxlength)).join("")),t.emit("update:modelValue",a),t.emit("input",a)},handleBlur:function(e){t.emit("blur",e)},handleChange:function(e){t.emit("change",e.target.value)},handleKeydown:function(e){t.emit("keydown",e)}}}};n("f9d9");o.render=function(e,t,n,o,i,l){return Object(a.w)(),Object(a.f)("div",r,[Object(a.N)(Object(a.g)("input",{class:Object(a.q)(["input_default",{err:n.errMsg,disabled_input:n.disabled}]),type:n.inputType,"onUpdate:modelValue":t[0]||(t[0]=function(e){return n.modelValue=e}),spellcheck:"false",autocapitalize:"off",autocomplete:"off",disabled:n.disabled,placeholder:n.placeholder,maxlength:n.maxlength,onInput:t[1]||(t[1]=function(){return o.handleInput&&o.handleInput.apply(o,arguments)}),onBlur:t[2]||(t[2]=Object(a.P)((function(){return o.handleBlur&&o.handleBlur.apply(o,arguments)}),["prevent"])),onChange:t[3]||(t[3]=function(){return o.handleChange&&o.handleChange.apply(o,arguments)}),onKeydown:t[4]||(t[4]=function(){return o.handleKeydown&&o.handleKeydown.apply(o,arguments)})},null,42,c),[[a.I,n.modelValue]])])},o.__scopeId="data-v-6ed82cf2";t.a=o}}]);