(window.webpackJsonp=window.webpackJsonp||[]).push([["chatRoom"],{"07de":function(e,t,o){"use strict";o.r(t);var n=o("7a23");Object(n.z)("data-v-6a9e4ac3");var c={class:"chat_room"},a={class:"chat_main_wrapper"};Object(n.x)();o("99af"),o("a15b"),o("4160"),o("159b");var i=o("5d7c"),s=o("54c4"),r=o("24ec"),u=o.n(r);Object(n.z)("data-v-48e6a066");var d={key:0,class:"message_wrapper"},l=Object(n.g)("div",{class:"has_more"},[Object(n.g)("span",{class:"has_more_tip"},"没有更多数据了")],-1),m={key:1,class:"no_chat"},f=[Object(n.g)("img",{src:u.a,alt:""},null,-1),Object(n.g)("div",{class:"tip"},"No messages.",-1),Object(n.g)("div",{class:"des"},"You can search someone and send out a message first!",-1)];Object(n.x)();o("c740");var b=o("5502"),v=o("b4bb"),O=o("23ed"),g={components:{MsgItem:v.a,ScrollWrapper:O.a,SendMessage:s.a},props:{curChat:Object,roomInfo:Object},setup:function(e){var t=Object(b.b)(),o=Object(n.l)().appContext.config.globalProperties,c=Object(n.A)({showImageViewer:!1,imageListIndex:0}),a=Object(n.B)(),i=Object(n.B)(),s=Object(n.b)((function(){return t.state.roomMsgList})),r=Object(n.b)((function(){var e=[];return s.value.forEach((function(t){t.type===o.$IM.TYPES.MSG_TYPE.Img&&e.push({url:t.url,onlyId:t.onlyId})})),e})),u=null,d=null;function l(){Object(n.p)((function(){var e;null===(e=a.value)||void 0===e||e.setScrollBottom()}))}function m(){u.pause(),d.stop(),u=null,d=null}return Object(n.M)((function(){return s.value.length}),(function(e,t){if(0===t)l();else if(e>t){var o,n=null===(o=a.value)||void 0===o?void 0:o.getScrollYData();if(!n||n.scrollHeight<=n.clientHeight)return;n.scrollHeight-n.scrollTop-n.clientHeight<100&&l()}})),{data:c,msgRef:a,sendRef:i,resend:function(e){i.value.sendMsg(e)},revoke:function(e){o.$msim.revokeMessage({conversationID:e.conversationID,gtype:e.gtype,id:e.toUid,msgId:e.msgId}).then((function(t){e.type=31,o.$message({type:"success",message:"撤回成功"})})).catch((function(e){o.$message({type:"error",message:(null==e?void 0:e.msg)||e})}))},deleteMsg:function(e){o.$msim.deleteChatRoomMsgs({roomId:e.toUid,msgIds:[e.msgId]}).then((function(e){o.$message({type:"success",message:"删除成功"})})).catch((function(e){o.$message({type:"error",message:(null==e?void 0:e.msg)||e})}))},scrollBottom:l,showPreview:function(e){e.type===o.$IM.TYPES.MSG_TYPE.Img&&(c.imageListIndex=r.value.findIndex((function(t){return t.onlyId===e.onlyId})),c.showImageViewer=!0)},playSound:function(e){d&&m(),d=e,(u=document.createElement("audio")).src=e.message.url,e.play();var t=u.play();u.addEventListener("ended",(function(){m()})),t&&t.catch((function(){m()}))},stopSound:m,roomMsgList:s,curUserId:Object(n.b)((function(){return t.state.curUserId}))}}};o("ae85");g.render=function(e,t,o,c,a,i){var s,r=Object(n.E)("MsgItem"),u=Object(n.E)("scroll-wrapper"),b=Object(n.E)("SendMessage");return o.roomInfo?(Object(n.w)(),Object(n.f)("div",d,[Object(n.j)(u,{class:"message_list",ref:"msgRef"},{default:Object(n.N)((function(){return[l,(Object(n.w)(!0),Object(n.f)(n.a,null,Object(n.C)(c.roomMsgList,(function(e){var t;return Object(n.w)(),Object(n.d)(r,{key:e.msgId,message:e,isSelf:e.fromUid!==c.curUserId,showRead:!1,isGroup:!0,isDelete:null===(t=o.roomInfo)||void 0===t?void 0:t.actionDelMsg,onShowPreview:function(t){return c.showPreview(e)},onPlaySound:c.playSound,onStopSound:c.stopSound,onRevoke:c.revoke,onResend:function(){return c.resend(e)}},null,8,["message","isSelf","isDelete","onShowPreview","onPlaySound","onStopSound","onRevoke","onResend"])})),128))]})),_:1},512),Object(n.j)(b,{to:null===(s=o.roomInfo)||void 0===s?void 0:s.id,chatType:e.$IM.TYPES.GROUP_TYPE.ChatRoom,onScrollB:c.scrollBottom,ref:"sendRef"},null,8,["to","chatType","onScrollB"])])):(Object(n.w)(),Object(n.f)("div",m,f))},g.__scopeId="data-v-48e6a066";var j=g;Object(n.z)("data-v-2e00c9ce");var h={class:"chat_info_wrapper"},p={class:"info_title"},I={key:0,class:"member_list"},M={class:"info_cont"},E={class:"info_tod"},R=Object(n.i)(" 群公告："),_={class:"info_tod_edit"},T={key:0,class:"room_setting"},$=Object(n.i)(" 聊天室禁言管理： "),w={class:"member_card_wrapper"},y={class:"member_card_item"},V={class:"member_card_item"},S={key:0,class:"member_card_item"},k=Object(n.i)(" 禁言管理： "),D={key:1,class:"member_card_item"},P=Object(n.i)(" 设置管理员： ");Object(n.x)();o("a9e3");var C=o("7a4d"),U=o("71ca");var N={props:{moduleValue:{type:[Number,String,Boolean],default:!1},activeVal:{type:[Number,String,Boolean],default:!0},inactiveVal:{type:[Number,String,Boolean],default:!1}},setup:function(e,t){return{changeVal:function(){var o=e.moduleValue===e.activeVal?e.inactiveVal:e.activeVal;t.emit("update:moduleValue",o),t.emit("change",o)}}}};o("494f");N.render=function(e,t,o,c,a,i){return Object(n.w)(),Object(n.f)("div",{class:Object(n.q)(["switch_wrapper",{active:o.activeVal===o.moduleValue}]),onClick:t[0]||(t[0]=function(){return c.changeVal&&c.changeVal.apply(c,arguments)})},null,2)},N.__scopeId="data-v-3a2eb5cc";var x=N,A=o("2a52");Object(n.z)("data-v-6622b998");var G=["title","src"],L=["title"];Object(n.x)();var B={props:{member:{type:Object,default:{}}},setup:function(e){var t=Object(b.b)();return{userInfo:Object(n.b)((function(){return t.state.profiles.get(e.member.uid)||{}}))}}};o("eef5");B.render=function(e,t,o,c,a,i){return Object(n.w)(),Object(n.f)("div",{class:"member_item",key:o.member.uid},[Object(n.g)("img",{class:"member_avatar",title:0===o.member.role?"群成员":9===o.member.role?"管理员":"临时管理员",src:c.userInfo.avatar,alt:""},null,8,G),Object(n.g)("div",{class:"member_name",title:o.member.uid},Object(n.H)(c.userInfo.nickName),9,L)])},B.__scopeId="data-v-6622b998";var H=B,Y={components:{MsTextArea:C.a,MsSwitch:x,ButtonD:U.a,Dialog:A.a,MemberItem:H},props:{roomId:Number,chatRoomInfo:Object},setup:function(e){var t=Object(n.l)().appContext.config.globalProperties,o=Object(n.A)({text:"",isEditTod:!1,isShowMemberDetail:!1,curMember:null});return{data:o,mute:function(n){t.$msim.muteChatRoom({roomId:e.roomId,isMute:n,reason:o.text}).then((function(e){t.$message({type:"success",message:!0===n?"聊天室设置禁言成功":"聊天室解除禁言成功"})})).catch((function(e){t.$message({type:"error",message:"".concat(!0===n?"聊天室设置禁言失败":"聊天室解除禁言失败","：").concat((null==e?void 0:e.msg)||e)})}))},openTod:function(){var t;o.isEditTod=!0,o.text=null===(t=e.chatRoomInfo)||void 0===t?void 0:t.tod},closeTod:function(){o.isEditTod=!1,o.text=""},editTod:function(){t.$msim.editChatRoomTOD({roomId:e.roomId,tod:o.text}).then((function(e){o.isEditTod=!1,o.text="",t.$message({type:"success",message:"发布公告成功"})})).catch((function(e){t.$message({type:"error",message:"发布公告失败：".concat((null==e?void 0:e.msg)||e)})}))},muteMembers:function(o){var n=o.uid;!1===o.isMute&&(n=-o.uid),t.$msim.muteMembers({roomId:e.roomId,uids:[n],duration:0,reason:"管理成员"}).then((function(e){t.$message({type:"success",message:!0===o.isMute?"禁言".concat(o.uid,"成功"):"解除禁言".concat(o.uid,"成功")})})).catch((function(e){t.$message({type:"error",message:"".concat(!0===o.isMute?"禁言":"解除禁言").concat(o.uid,"失败：").concat((null==e?void 0:e.msg)||e)})}))},setManagers:function(o){var n=o.uid;0===o.role&&(n=-o.uid),t.$msim.editChatRoomManagerAccess({roomId:e.roomId,uids:[n],duration:0,reason:"管理角色"}).then((function(e){t.$message({type:"success",message:0===o.role?"解除管理员成功":"设置管理员成功"})})).catch((function(e){t.$message({type:"error",message:"".concat(0===o.role?"解除管理员成功":"设置管理员成功","：").concat((null==e?void 0:e.msg)||e)})}))},showDetail:function(e){o.curMember=e,o.isShowMemberDetail=!0},closeDetail:function(){o.isShowMemberDetail=!1,o.curMember=null}}}};o("585b");Y.render=function(e,t,o,c,a,i){var s,r,u,d,l,m,f,b,v,O=Object(n.E)("MemberItem"),g=Object(n.E)("MsTextArea"),j=Object(n.E)("ButtonD"),C=Object(n.E)("MsSwitch"),U=Object(n.E)("Dialog");return Object(n.w)(),Object(n.f)("div",h,[Object(n.g)("div",p,"群成员："+Object(n.H)(null===(s=o.chatRoomInfo)||void 0===s||null===(r=s.members)||void 0===r?void 0:r.length),1),(null===(u=o.chatRoomInfo)||void 0===u||null===(d=u.members)||void 0===d?void 0:d.length)>0?(Object(n.w)(),Object(n.f)("div",I,[(Object(n.w)(!0),Object(n.f)(n.a,null,Object(n.C)(null===(l=o.chatRoomInfo)||void 0===l?void 0:l.members,(function(e){return Object(n.w)(),Object(n.d)(O,{key:e.uid,member:e,onClick:function(t){return c.showDetail(e)}},null,8,["member","onClick"])})),128))])):Object(n.e)("",!0),Object(n.g)("div",M,[Object(n.g)("div",E,[R,null!==(m=o.chatRoomInfo)&&void 0!==m&&m.actionTod&&!1===c.data.isEditTod?(Object(n.w)(),Object(n.f)("span",{key:0,class:"tod_edit_btn",onClick:t[0]||(t[0]=function(e){return c.openTod()})},"编辑")):null!==(f=o.chatRoomInfo)&&void 0!==f&&f.actionTod&&!0===c.data.isEditTod?(Object(n.w)(),Object(n.f)("span",{key:1,class:"tod_edit_btn",onClick:t[1]||(t[1]=function(e){return c.closeTod()})},"取消")):Object(n.e)("",!0)]),Object(n.O)(Object(n.g)("div",{class:"info_tod_show"},Object(n.H)((null===(b=o.chatRoomInfo)||void 0===b?void 0:b.tod)||"暂无公告内容"),513),[[n.L,!1===c.data.isEditTod]]),Object(n.O)(Object(n.g)("div",_,[Object(n.j)(g,{class:"edit_tod_input",modelValue:c.data.text,"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.data.text=e}),rows:3,maxLength:300,placeholder:"Please enter announcement",onKeydown:Object(n.P)(Object(n.Q)(c.editTod,["exact","prevent"]),["enter"])},null,8,["modelValue","onKeydown"]),Object(n.j)(j,{size:"mini",text:"保存",onClick:c.editTod},null,8,["onClick"])],512),[[n.L,!0===c.data.isEditTod]]),null!==(v=o.chatRoomInfo)&&void 0!==v&&v.actionMuteAll?(Object(n.w)(),Object(n.f)("div",T,[$,Object(n.j)(C,{modelValue:o.chatRoomInfo.isMute,"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.chatRoomInfo.isMute=e}),onChange:t[4]||(t[4]=function(e){return c.mute(o.chatRoomInfo.isMute)})},null,8,["modelValue"])])):Object(n.e)("",!0),Object(n.j)(j,{class:"leave_btn",type:"danger",size:"mini",text:"退出聊天室",onClick:t[5]||(t[5]=function(t){return e.$emit("leave")})})]),Object(n.j)(U,{title:"成员信息",modelValue:c.data.isShowMemberDetail,"onUpdate:modelValue":t[10]||(t[10]=function(e){return c.data.isShowMemberDetail=e}),showFooter:!1,beforeClose:c.closeDetail,width:"400px"},{default:Object(n.N)((function(){var e,a,i,s,r,u,d;return[Object(n.g)("div",w,[Object(n.g)("div",y,"UID："+Object(n.H)(null===(e=c.data.curMember)||void 0===e?void 0:e.uid),1),Object(n.g)("div",V," role："+Object(n.H)(0===(null===(a=c.data.curMember)||void 0===a?void 0:a.role)?"群成员":9===(null===(i=c.data.curMember)||void 0===i?void 0:i.role)?"管理员":"临时管理员"),1),9!==(null===(s=c.data.curMember)||void 0===s?void 0:s.role)&&null!==(r=o.chatRoomInfo)&&void 0!==r&&r.actionMute?(Object(n.w)(),Object(n.f)("div",S,[k,Object(n.j)(C,{modelValue:c.data.curMember.isMute,"onUpdate:modelValue":t[6]||(t[6]=function(e){return c.data.curMember.isMute=e}),onChange:t[7]||(t[7]=function(e){return c.muteMembers(c.data.curMember)})},null,8,["modelValue"])])):Object(n.e)("",!0),9!==(null===(u=c.data.curMember)||void 0===u?void 0:u.role)&&null!==(d=o.chatRoomInfo)&&void 0!==d&&d.actionAssign?(Object(n.w)(),Object(n.f)("div",D,[P,Object(n.j)(C,{modelValue:c.data.curMember.role,"onUpdate:modelValue":t[8]||(t[8]=function(e){return c.data.curMember.role=e}),activeVal:1,inactiveVal:0,onChange:t[9]||(t[9]=function(e){return c.setManagers(c.data.curMember)})},null,8,["modelValue"])])):Object(n.e)("",!0)])]})),_:1},8,["modelValue","beforeClose"])])},Y.__scopeId="data-v-2e00c9ce";var z=Y,J=o("6c02"),K={components:{MsgHeader:i.a,ChatRoomMsgList:j,SendMessage:s.a,RoomInfo:z},setup:function(){var e=Object(n.l)().appContext.config.globalProperties,t=Object(b.b)(),o=Object(J.d)(),c=Object(n.b)((function(){return t.state.profiles})),a=Object(n.A)({chatRoomInfo:null}),i=Object(n.B)("sendMsg"),s=Object(n.B)("msgListWrapper");function r(){s.value.scrollBottom()}function u(e){}function d(e){a.chatRoomInfo=null,o.push({name:"chat"})}function l(e){t.commit("updateRoomMsgs",e.data)}function m(e){t.commit("revokeRoomMsg",e.data)}function f(e){t.commit("deleteRoomMsgs",e.data)}function v(t){t.data.id===a.chatRoomInfo.id&&t.data.gtype===a.chatRoomInfo.gtype&&(a.chatRoomInfo=null,e.$message.info({message:"聊天室已销毁"}),o.push({name:"chat"}))}function O(e){e.data.tip&&function(e){var o,n,c,a,i,s,r,u,d,l,m,f,b,v;switch(e.event){case 1:v="聊天室已被解散";break;case 2:v="聊天室属性已修改";break;case 3:v="管理员 ".concat(null===(o=e.uids)||void 0===o?void 0:o.shift()," 将本聊天室设为听众模式");break;case 4:v="管理员 ".concat(null===(n=e.uids)||void 0===n?void 0:n.shift()," 恢复聊天室发言功能");break;case 5:v="管理员 ".concat(null===(c=e.uids)||void 0===c?void 0:c.shift()," 上线");break;case 6:v="管理员 ".concat(null===(a=e.uids)||void 0===a?void 0:a.shift()," 下线");break;case 7:v="管理员 ".concat(null===(i=e.uids)||void 0===i?void 0:i.shift()," 将用户 ").concat(null===(s=e.uids)||void 0===s?void 0:s.shift(),"禁言");break;case 8:v="管理员 ".concat(null===(r=e.uids)||void 0===r?void 0:r.shift()," 将用户 ").concat(null===(u=e.uids)||void 0===u?void 0:u.join()," 等人禁言");break;case 9:v="".concat(null===(d=e.uids)||void 0===d?void 0:d.shift()," 成为本聊天室管理员");break;case 10:v="管理员 ".concat(null===(l=e.uids)||void 0===l?void 0:l.shift()," 指派 ").concat(null===(m=e.uids)||void 0===m?void 0:m.shift()," 为临时管理员");break;case 11:v="管理员 ".concat(null===(f=e.uids)||void 0===f?void 0:f.shift()," 指派 ").concat(null===(b=e.uids)||void 0===b?void 0:b.join()," 等人为临时管理员")}t.commit("addRoomMsg",{onlyId:"tip",type:"roomTip",msg:v})}(e.data.tip);var o=e.data.chatRoomInfo;g(o.members),o.id===a.chatRoomInfo.id&&o.gtype===a.chatRoomInfo.gtype&&Object.assign(a.chatRoomInfo,o)}function g(t){if(t&&t.length){var o=[];t.forEach((function(e){var t=c.value.get(e.uid);t&&t.custom||o.push({uid:e.uid})})),o.length>0&&e.$msim.getProfileList(o)}}function j(e){var t;e.data.id===(null===(t=a.chatRoomInfo)||void 0===t?void 0:t.id)&&(a.chatRoomInfo.tod=e.data.tod)}return Object(n.u)((function(){e.$msim.on(e.$IM.EVENT.JOIN_CHAT_ROOM,u),e.$msim.on(e.$IM.EVENT.LEAVE_CHAT_ROOM,d),e.$msim.on(e.$IM.EVENT.MESSAGE_GROUP_RECEIVED,l),e.$msim.on(e.$IM.EVENT.MESSAGE_GROUP_REVOKED,m),e.$msim.on(e.$IM.EVENT.MESSAGE_GROUP_DELETE,f),e.$msim.on(e.$IM.EVENT.GROUP_DESTROY,v),e.$msim.on(e.$IM.EVENT.UPDATE_GROUP_INFO,O),e.$msim.on(e.$IM.EVENT.UPDATE_GROUP_TOD,j),e.$msim.joinChatRoom({roomId:1641525634}).then((function(o){a.chatRoomInfo=o.data,g(a.chatRoomInfo.members),e.$msim.getRoomMsgs({roomId:1641525634}).then((function(e){t.commit("updateRoomMsgs",e.data),r()}))}))})),Object(n.v)((function(){e.$msim.off(e.$IM.EVENT.JOIN_CHAT_ROOM),e.$msim.off(e.$IM.EVENT.LEAVE_CHAT_ROOM),e.$msim.off(e.$IM.EVENT.MESSAGE_GROUP_RECEIVED),e.$msim.off(e.$IM.EVENT.MESSAGE_GROUP_REVOKED),e.$msim.off(e.$IM.EVENT.MESSAGE_GROUP_DELETE),e.$msim.off(e.$IM.EVENT.GROUP_DESTROY),e.$msim.off(e.$IM.EVENT.UPDATE_GROUP_INFO),e.$msim.off(e.$IM.EVENT.UPDATE_GROUP_TOD),t.commit("clearRoomMsgs")})),{sendRef:i,msgListRef:s,roomId:1641525634,scrollB:r,resend:function(e){i.value.sendMsg(e)},leave:function(){e.$msim.leaveChatRoom({roomId:1641525634}).then((function(e){a.chatRoomInfo=null,o.push({name:"chat"})}))},data:a}}};o("804c");K.render=function(e,t,o,i,s,r){var u=Object(n.E)("ChatRoomMsgList"),d=Object(n.E)("RoomInfo");return Object(n.w)(),Object(n.f)("div",c,[Object(n.g)("div",a,[Object(n.j)(u,{roomInfo:i.data.chatRoomInfo,ref:"msgListRef"},null,8,["roomInfo"])]),Object(n.j)(d,{chatRoomInfo:i.data.chatRoomInfo,roomId:i.roomId,onLeave:t[0]||(t[0]=function(e){return i.leave()})},null,8,["chatRoomInfo","roomId"])])},K.__scopeId="data-v-6a9e4ac3";t.default=K},4586:function(e,t,o){},"494f":function(e,t,o){"use strict";o("9ee1")},"4fbf":function(e,t,o){},"585b":function(e,t,o){"use strict";o("e7fa")},7065:function(e,t,o){},"804c":function(e,t,o){"use strict";o("4586")},"9ee1":function(e,t,o){},ae85:function(e,t,o){"use strict";o("7065")},e7fa:function(e,t,o){},eef5:function(e,t,o){"use strict";o("4fbf")}}]);