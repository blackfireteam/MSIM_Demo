(window.webpackJsonp=window.webpackJsonp||[]).push([["sparks"],{"0afd":function(e,t,c){"use strict";c("ab16")},"0c85":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABBVJREFUWEfVmF1oXEUUgL+5/qRNavwNaTTxQaxENlFrTaBKrWAtLQrSbptC8cFk7ZOIkW70QVAUfNBsMT4JtpsFQdSkVaSIthZqLaj0L/40WqpCbZvG0B9rtPqi98jk7t3sz+ydu3cbjAMLuztnzvnuuXPOnDOKWT7ULOejasBURlqVS8yFFqWon3pgxW+uy0nHYTTZrY5U44RIgP1pWaYU64DHQhrfIsK7fQm1K6R8TqwiwFfSEncUzwILKzWUlR9xhZeeTqhtYdeHAnw5Ldc7DgNKWBtWcZCcUgz/7dL7TEKdsumzAmZf5yc2RVHmRXjA9toDAVMZWY0Q+nVEgUQRT3ar98qtLQs4k54rhgnypBFQ77lLFGORPBJx0T/CDaY9aQTclJEhqTIg6udB24JS2poa2P1l6f+iGO7rVl3FMyWA2VSyNaIjcsvuXgiL7zBr+XwEvviqdM4V1hSnoBLA1KAcqiLPFVhtmT/9M7YAYjd7vzWchjSMkWSPujP//wLAmQoM35ujP3qQAYAUB0wBYGpQNldwfIXaBT6chjoxDl0rgwGBLcketcFXXgwooayGFNJ7UAP6HtOvPAQgyR6V48p90VUJwvchbVvFiuH0grCAKG71q6AcYCXRWzsXGq6Ghmtg8g84e977+MME589pjx7+wVtXbihhzcZsQZHvwScRBmyuWRSD+zpLpcZPw94D0NLkpZegQLDZEOGpvoSaYpkGHJTngBeCFificFU9fH0ETk7AsTGor4Pm+dDRDvNqrWnExubPP5/sUS9WBLh2BdzYBJuHYPKC2c66lR5s5n04l/fKw1LlyZUC9qelVyleNSlrvwWW3wP7voG9B4PNPboKfr8A23ZGwJrOLb3JbvVagQc3pSUuCuMRt2KJ5703huxG72qDpR3w5gdw+pxd3iSRf+SFSjPaKzpKt++2G2xqgPUPwUefwXc/2eWNEqY0owVTg2JM1E88At8ehU/32Q3OqYHH18Oe/XDgsF3eJGFM1FlA41EXXw6XXwZvf2g32HoTPLgUtu6An60dh1Ff+aOuXLFwbwd0tMHwDjhuMbpsMdzeCq+/A3/+ZX+gYonAYiHrxZJySxef/j58a3t5ozonbujytsLB0crhgOByS6ssd+TpMklH89Fj3ilx5tdCgCWLoPM2OD8J6YhtVqiCVZvtz8iQqQduboSH7wcdCBNn4dQE1NWCjtwr6uD4OAx/HMlz6F55Y5iSX6sPaprmzoHOdmi8Dhqv9ZLyL2dgbMKL9KijoqZpyove/cuMNOy2wMif//827v5TzKQnq7768CH1nrzUYaDaXtnXp3tg92JdHuXvh1l7/Va8qWftBaYphehmy3WJOQ7NCFdqGREmHTgh/9UVcNRcF2Wd9QIzitKLueZfqISXOHZ92pYAAAAASUVORK5CYII="},"23ed":function(e,t,c){"use strict";var n=c("7a23");c("caad");var r={props:{},setup:function(e,t){var c=Object(n.B)(),r=Object(n.B)(),l=Object(n.B)(),a=Object(n.A)({isShowScrollY:!1,isScrollYThumbDown:!1,scrollYBarStyle:""}),o=null;function s(){var e=c.value;if(e){var t=e.clientHeight/e.scrollHeight*e.clientHeight,n=e.scrollTop/e.scrollHeight*e.clientHeight;t<6&&(t=6,n>e.clientHeight-6&&(n=e.clientHeight-6)),n<0&&(n=0),a.scrollYBarStyle={height:t+"px",top:n+"px"}}}var i=function(e){e.stopImmediatePropagation(),document.addEventListener("mousemove",u),document.addEventListener("mouseup",p),o=document.onselectstart,document.onselectstart=function(){return!1}},u=function(e){a.isScrollYThumbDown=!0;var t=e.clientY,n=r.value.getBoundingClientRect();t>n.bottom?t=n.bottom:t<n.top&&(t=n.top);var l=c.value.scrollHeight/n.height*(t-n.top);c.value.scrollTop=l},p=function e(){a.isScrollYThumbDown=!1,document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",e),document.onselectstart=o};return{scrollWrapper:c,instance:r,thumb:l,data:a,mouseenterWrapper:function(){var e=c.value;!e||e.scrollHeight<=e.clientHeight||(a.isShowScrollY=!0,s())},mouseleaveWrapper:function(){a.isShowScrollY=!1},mouseWheelWrapper:function(e){var t=e||window.event,n=c.value;!n||n.scrollHeight<=n.clientHeight||t.wheelDeltaY>0&&n.scrollTop<=0||t.wheelDeltaY<0&&n.scrollTop>=n.scrollHeight-n.clientHeight||(t.preventDefault&&t.preventDefault(),n.scrollTop-=t.wheelDeltaY)},scrollY:function(e){var c=e.target;t.emit("scroll",{scrollTop:c.scrollTop,clientHeight:c.clientHeight,scrollHeight:c.scrollHeight}),s()},clickTrackHandler:function(e){e.stopPropagation();var t=c.value;if(t){var n=l.value.getBoundingClientRect();e.clientY>n.top?t.scrollTop+=t.clientHeight:t.scrollTop-=t.clientHeight}},clickThumbHandler:function(e){var t;e.stopPropagation(),e.ctrlKey||[1,2].includes(e.button)||(null===(t=window.getSelection())||void 0===t||t.removeAllRanges(),i(e))},setScrollTop:function(e){c.value.scrollTop=e},setScrollBottom:function(){Object(n.p)((function(){c.value.scrollTop=c.value.scrollHeight}))},getScrollYData:function(){var e=c.value;return{scrollHeight:e.scrollHeight,clientHeight:e.clientHeight,scrollTop:e.scrollTop}}}}};c("0afd");r.render=function(e,t,c,r,l,a){return Object(n.w)(),Object(n.f)("div",{class:"scroll_wrapper",onMouseenter:t[3]||(t[3]=function(){return r.mouseenterWrapper&&r.mouseenterWrapper.apply(r,arguments)}),onMouseleave:t[4]||(t[4]=function(){return r.mouseleaveWrapper&&r.mouseleaveWrapper.apply(r,arguments)}),onWheel:t[5]||(t[5]=Object(n.Q)((function(){return r.mouseWheelWrapper&&r.mouseWheelWrapper.apply(r,arguments)}),["stop"]))},[Object(n.g)("div",{class:"scroll_cont",ref:"scrollWrapper",onScrollPassive:t[0]||(t[0]=function(){return r.scrollY&&r.scrollY.apply(r,arguments)})},[Object(n.D)(e.$slots,"default",{},void 0,!0)],544),Object(n.O)(Object(n.g)("div",{ref:"instance",class:"scroll_y",onMousedown:t[2]||(t[2]=function(){return r.clickTrackHandler&&r.clickTrackHandler.apply(r,arguments)})},[Object(n.g)("div",{ref:"thumb",class:"scroll_y_bar",style:Object(n.r)(r.data.scrollYBarStyle),onMousedown:t[1]||(t[1]=function(){return r.clickThumbHandler&&r.clickThumbHandler.apply(r,arguments)})},null,36)],544),[[n.L,r.data.isScrollYThumbDown||r.data.isShowScrollY]])],32)},r.__scopeId="data-v-f1bd2ce6";t.a=r},"61f5":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),r=c("7b3a"),l=c.n(r),a=c("0c85"),o=c.n(a);Object(n.z)("data-v-e6aa33a8");var s={class:"spark_wrapper"},i={class:"user_list"},u=["onClick"],p={class:"user_avatar"},d={class:"avatar_img"},g={class:"user_info_item flex"},b={class:"user_name"},v={key:0,class:"gender_icon",src:l.a,alt:""},h={key:1,class:"gender_icon",src:o.a,alt:""},f={class:"user_info_item"},A={class:"user_uid"},m={class:"user_info_item"},j={class:"wrap"},O={class:"user_info_item"},w={class:"more_btn"},H={class:"more_btn_text"};Object(n.x)();c("a630"),c("3ca3"),c("d3b7"),c("ddb0"),c("fb6a"),c("7db0");var T=c("6c02"),S=c("5502"),Y=c("c73c"),k={components:{ScrollWrapper:c("23ed").a},props:{},setup:function(){var e=Object(n.l)().appContext.config.globalProperties,t=Object(S.b)(),c=Object(T.d)(),r=Object(n.B)(1),l=Object(n.b)((function(){return Array.from(t.state.sparks.values())})),a=Object(n.b)((function(){return l.value.slice(0,20*r.value)}));return Object(n.u)((function(){e.$msim.getSpark().then((function(e){e.data.sparks&&e.data.sparks.length>0&&t.commit("setSparks",e.data.sparks)}))})),{sparkScroll:function(){r.value+=1},sparks:l,showSparks:a,Gender:Y.a,jump:function(e){var r;if(e.uid!==(null===(r=t.state.curChat)||void 0===r?void 0:r.uid)){var l=t.state.chatList.find((function(t){return t.uid==e.uid}));l||(l={conversationID:"C2C_"+e.uid,uid:e.uid},t.commit("addChat",l)),t.commit("changeChat",l)}Object(n.p)((function(){c.push({name:"singleChat"})}))}}}};c("c8a3");k.render=function(e,t,c,r,l,a){var o=Object(n.F)("lazy");return Object(n.w)(),Object(n.f)("div",s,[Object(n.g)("div",i,[(Object(n.w)(!0),Object(n.f)(n.a,null,Object(n.C)(r.showSparks,(function(e){var t,c;return Object(n.w)(),Object(n.f)("dl",{class:"user_item",onClick:function(t){return r.jump(e)}},[Object(n.g)("dt",p,[Object(n.O)(Object(n.g)("img",d,null,512),[[o,e.avatar]])]),Object(n.g)("dd",g,[Object(n.g)("span",b,Object(n.H)(e.nickName),1),e.gender===r.Gender.girl?(Object(n.w)(),Object(n.f)("img",v)):e.gender===r.Gender.boy?(Object(n.w)(),Object(n.f)("img",h)):Object(n.e)("",!0)]),Object(n.g)("dd",f,[Object(n.g)("span",A,"Uid: "+Object(n.H)(e.uid),1)]),Object(n.g)("dd",m,[Object(n.g)("span",j,"Dept: "+Object(n.H)((null===(t=e.custom)||void 0===t?void 0:t.department)||"Not yet"),1)]),Object(n.g)("dd",O,[Object(n.g)("span",null,"Addr: "+Object(n.H)((null===(c=e.custom)||void 0===c?void 0:c.workplace)||"Not yet"),1)])],8,u)})),256))]),Object(n.g)("div",w,[Object(n.O)(Object(n.g)("span",{class:"more_btn_text",onClick:t[0]||(t[0]=function(){return r.sparkScroll&&r.sparkScroll.apply(r,arguments)})}," 查看更多推荐 ",512),[[n.L,r.showSparks.length<r.sparks.length]]),Object(n.O)(Object(n.g)("span",H," 没有更多推荐了 ",512),[[n.L,r.showSparks.length>=r.sparks.length]])])])},k.__scopeId="data-v-e6aa33a8";t.default=k},"756a":function(e,t,c){},"7b3a":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABG5JREFUWEfNmE1oVFcUx39nISIqgjEKiiKlUZRE0USNmiCkKbrQ1Iho8QvajRbFrwYpbgWhkCLBWHCTGG2hUYw0CkZMI0qURC2axJVGFy4EPxL8QEVFbjnvzpu8mcybuS928Q68gZl7Pv5z7jn/e94VYi7yf+AzxkwE9MlL+BsABkVk8Ev9jwigMaYYqAw82XC0Am1Ap4j0RQUcCaAxpgLYBVRHDZTQPwfUi0iHq70TQGNMIbAf+CHF8YsX8PgxPH8Ob9/aR2XsWPtMmQIzZsBE3f0UaQTqRKQnF9CcAI0xZUAT8JXn7MMH6OqCnh4LzEUUaFERlJbC6NG+hRrvE5E/s7nICtAYsxH4K+ng5k0LzhVYeuT8fAty8eLgSo2I/BYGMhSgMeZnoDZp2NYG16+75Cu3TmEhbNT/npTvRaQ5k2FGgMaYzcAfSYP6enj6NHfgKBoTJkBNTdCiXEQ6010MA2iMmQ9cBvI95dpaePUqSmh3Xa3NXUoKnjwCvhORe0EHmQA2JLu1uRnupei7B3fVXL4cVq3ytRtF5MdQgAme+8dT0IY4f941zJDemDGWYsaPh9ev4c0b+Pgxu581a4KN802QJ1MyaIxp8UhYqeT48ejdun49zNcKSZNr1+CyVk2IaHdv3+5T0DkRWedrJgEaY4qAXm/h6lVob4+WvYMHQbMXJg8fwokT4euVlbBihb9eIiL/6pcgwJ+A3z2NqF0b3KJbt+D2bXjyBKZOhZISWLTIBtaS0dLJJJrF3bv9lV9E5Nd0gH8DVQwOwpEj7tnTE2LDBqvf3Q0XLgy3Xb0aliyxvzc1QX9/Zv979sCkSbrWLiLfpgM0ntXdu3D2rDtAP/inT1BXl5mSlPM0+KhRtha1JjNJdTUsXOitiIi3u95HYp7TGQ4uXYLOYXwZDnjbNigosESupREmO3bAtGnQ1wenT2fWKiuDlSv9tTydJ32AXwMPvJWWFrhzxz2DVVW2xp49g6NHw+327oW8POjthTNnMustWADrkg1cICL9PkAtkC7P6tQpuH8/PFBFBcycCdoMmo3iYli71uqfPAkP7P9MEc2wZlrl4kW4cSOz/1mzYOtWf61URLqjA9yyBWbPtk5aWy3QQ4fs94EBOHYMtB590brbudNm7907aGgIP9ezAHTf4vRJRPly3jyYPNlCUpLXbdTsaofrmj8DNjbCIz1yQyTLFuvI694kw8el8KD+ikvzhTWJ+jDGRKOZdJA6WCgzLF0K06cPAdbJW6krjPuCfy2MZhIA3Yk6LIN+TY4bZ4eFly/h/fvc2fU1chC121GngQ8cGAp65QosWzZUZ1qTepZHFYejzm1YULJV0lVRcB0dMGcObNpkf9OMHT4cFR7kGhYS25x73FLamDsXPn9OHWbLy0GHTyVspZIo4jJuJQDqi/mXDaxRgPm6rgNrAmR8R/4EwHi/NCVAxve10y+LWL+4B0DG9+ojADK+l0cBkPG9fgvSWmwvMNO5N7ZXwGGHROwu0Udymo3U5j+sufI481guIAAAAABJRU5ErkJggg=="},ab16:function(e,t,c){},c73c:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var n={girl:2,boy:1}},c8a3:function(e,t,c){"use strict";c("756a")}}]);