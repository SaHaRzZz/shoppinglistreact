(this.webpackJsonpbuildtestsl=this.webpackJsonpbuildtestsl||[]).push([[0],{53:function(t,e,n){},54:function(t,e,n){},85:function(t,e,n){"use strict";n.r(e);var a,r=n(1),c=n(0),i=n.n(c),s=n(18),o=n.n(s),l=(n(53),n.p,n(54),n(24)),A=n(25),u=n.n(A),d=n(30),g=n(15),f=n(10),j=n(9),b=n(19),p=n(21),O=n(88),m=n(89),h=n(16),x=n(90),v=n(14),y=n.n(v),I=n(6),C=n(2),B="SET_TEXT_TO_FILTER",D="SET_TYPE_TO_FILTER",E="SET_CATEGORY_TO_FILTER",Q="SET_FINAL",U="SET_LIST_LENGTH",F="FETCH_REQUEST",S="FETCH_SUCCESS",T="FETCH_FAILURE",w="SET_ONLINE",N="SET_ID",z="SET_LAST_CONNECTED",R=function(t){return{type:S,payload:t}},L=function(t){return{type:z,payload:t}},M=function(){return function(t){y.a.get("https://raw.githubusercontent.com/SaHaRzZz/test/main/json/Data.json").then((function(e){var n=e.data;return n=JSON.stringify(n),localStorage.setItem("items-database",n),t(R(e.data))})).catch((function(e){if(localStorage.getItem("items-database")){var n=localStorage.getItem("items-database");return n=JSON.parse(n),t(R(n))}return t(function(t){return{type:T,payload:t}}(e.message))}))}},k="ADD_ITEM_TO_LIST",H="REMOVE_ITEM_FROM_LIST",K="CREATE_ITEM_IN_LIST",q="RESET_ITEM_FROM_LIST",P="SET_LIST",V="SET_NOTE",J="SET_IMAGES_SIZE",G="SET_TITLES_SIZE",X="SET_LANGAUGE",Z=function(t){return{type:J,payload:t}},W=function(t){return{type:G,payload:t}},Y=function(t){return{type:X,payload:t}},_=n(45),$=(n(79),"data:image/png;base64,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"),tt={};y.a.defaults.headers.post["Access-Control-Allow-Origin"]="*";var et=function(t,e,n,r,c,i,s){e[t]?80==e[t][0]?alert("\u05de\u05e7\u05e1\u05d9\u05de\u05d5\u05dd 80 \u05d9\u05d7\u05d9\u05d3\u05d5\u05ea \u05dc\u05de\u05d5\u05e6\u05e8!"):(n(t),i&&mt(c,Object(C.a)(Object(C.a)({},e),{},Object(I.a)({},t,[e[t][0]+1,e[t][1]])),s),function(t,e){tt[t.id]?tt[t.id]+=1:tt[t.id]=1,a&&clearTimeout(a),a=setTimeout((function(){y.a.put("".concat(e.general.server,"/analytics"),tt),a=void 0,tt={}}),2e3)}({id:t},s)):(r(t),i&&mt(c,Object(C.a)(Object(C.a)({},e),{},Object(I.a)({},t,[1,""])),s))},nt=function(t,e,n,a,r,c,i){t(e,n),r&&mt(a,Object(C.a)(Object(C.a)({},c),{},Object(I.a)({},e,[c[e][0],n])),i)},at=function(t){switch(t){case 0:return"A";case 1:return"B";case 2:return"C";case 3:return"D";case 4:return"E";case 5:return"F";case 6:return"G";case 7:return"H";case 8:return"I";case 9:return"J";case 10:return"K";case 11:return"L";case 12:return"M";case 13:return"N";case 14:return"O";case 15:return"P";case 16:return"Q";case 17:return"R";case 18:return"S";case 19:return"T";case 20:return"U";case 21:return"V";case 22:return"W";case 23:return"X";case 24:return"Y";case 25:return"Z";case 26:return"8";case 27:return"9";case 28:return":";case 29:return";";case 30:return"<";case 31:return"=";case 32:return"a";case 33:return"b";case 34:return"c";case 35:return"d";case 36:return"e";case 37:return"f";case 38:return"g";case 39:return"h";case 40:return"i";case 41:return"j";case 42:return"k";case 43:return"l";case 44:return"m";case 45:return"n";case 46:return"o";case 47:return"p";case 48:return"q";case 49:return"r";case 50:return"s";case 51:return"t";case 52:return"u";case 53:return"v";case 54:return"w";case 55:return"x";case 56:return"y";case 57:return"z";case 58:return"4";case 59:return"5";case 60:return"6";case 61:return"7";case 62:return"!";case 63:return'"';case 64:return"#";case 65:return"$";case 66:return"%";case 67:return"&";case 68:return"'";case 69:return"(";case 70:return")";case 71:return"*";case 72:return"+";case 73:return",";case 74:return"-";case 75:return".";case 76:return"/";case 77:return"0";case 78:return"1";case 79:return"2";case 80:return"3"}};var rt=Object(g.b)((function(t){return{list:t.list,options:t.options,isOnline:t.api.isOnline,apiID:t.api.id,fetchData:t.api.data}}),(function(t){return{addItemToList:function(e){return t({type:k,item:e})},removeItemFromList:function(e){return t({type:H,item:e})},createItemInList:function(e){return t({type:K,item:e})},resetItemFromList:function(e){return t({type:q,item:e})},setNote:function(e,n){return t({type:V,item:e,payload:n})}}}))((function(t){var e=Object(c.useState)(!1),n=Object(l.a)(e,2),a=n[0],i=n[1];return Object(r.jsxs)("div",{className:"card flex-row my-1 shadow text-center",style:{backgroundColor:t.list[t.id]?"rgb(0, 0, 255, 0.5)":"rgb(255, 0, 0, 0.5)"},children:[Object(r.jsxs)("div",{className:"card-header border-0",style:{height:"".concat(parseInt(t.options.imagesSize.split("").reverse().join("").slice(2).split("").reverse().join(""))+24,"px")},children:[Object(r.jsx)("img",{src:$,onLoad:function(){return i(!0)},className:"user-select-none",style:{width:t.options.imagesSize,display:a?"none":"block"}}),Object(r.jsx)("img",{src:"".concat(t.fetchData.general.images).concat(t.logo),onError:function(t){return t.target.src=$},className:"user-select-none",style:{width:t.options.imagesSize,display:a?"block":"none"}})]}),Object(r.jsxs)("div",{className:"card-body row p-0 m-0 text-wrap",children:[Object(r.jsx)("div",{className:"card-title text-decoration-underline font-weight-bold col-5 h5 m-0 user-select-none align-self-center text-capitalize",style:{fontSize:t.options.titlesSize},children:t.title}),t.list[t.id]?[Object(r.jsxs)("div",{className:"align-self-center",children:[Object(r.jsx)("div",{className:"col-1",style:{zIndex:3},onClick:function(){return et(t.id,t.list,t.addItemToList,t.createItemInList,t.apiID,t.isOnline,t.fetchData)},children:Object(r.jsx)(j.a,{size:"2x",icon:f.g})}),Object(r.jsx)("div",{className:"col-1",style:{zIndex:3},onClick:function(){return e=t.id,n=t.list,a=t.removeItemFromList,r=t.resetItemFromList,c=t.apiID,i=t.isOnline,s=t.fetchData,void(1==n[e][0]?(r(e),i&&mt(c,Object(C.a)(Object(C.a)({},n),{},Object(I.a)({},e,"")),s)):n[e][0]&&(a(e),i&&mt(c,Object(C.a)(Object(C.a)({},n),{},Object(I.a)({},e,[n[e][0]-1,n[e][1]])),s)));var e,n,a,r,c,i,s},children:Object(r.jsx)(j.a,{size:"2x",icon:f.f})})]}),Object(r.jsx)("div",{className:"mx-2 font-italic user-select-none align-self-center",style:{fontSize:"2rem",zIndex:3,fontFamily:"numberpile"},onClick:function(){return window.confirm("\u05dc\u05d0\u05e4\u05e1 \u05d0\u05ea \u05d4\u05de\u05d5\u05e6\u05e8?")&&(e=t.resetItemFromList,n=t.id,a=t.apiID,r=t.isOnline,c=t.list,i=t.fetchData,e(n),void(r&&mt(a,Object(C.a)(Object(C.a)({},c),{},Object(I.a)({},n,"")),i)));var e,n,a,r,c,i},children:at(t.list[t.id][0])}),Object(r.jsx)(h.a,{trigger:Object(r.jsx)("div",{className:"align-self-center mx-2",style:{zIndex:4},children:Object(r.jsx)(j.a,{icon:t.list[t.id][1]?f.h:_.a,size:"2x"})}),position:"left center",children:Object(r.jsxs)("div",{className:"text-center",children:[Object(r.jsx)("div",{className:"font-weight-bold",children:t.title}),Object(r.jsx)("div",{dir:"".concat("en"==t.options.lang?"ltr":"rtl"),children:t.list[t.id][1]}),t.list[t.id][1]?[Object(r.jsx)("button",{className:"btn btn-primary rounded-0",onClick:function(){return nt(t.setNote,t.id,prompt("\u05d4\u05e2\u05e8\u05d4 \u05dc".concat(t.title,":"),t.list[t.id][1]),t.apiID,t.isOnline,t.list,t.fetchData)},children:"\u05e9\u05e0\u05d4"}),Object(r.jsx)("button",{className:"btn btn-danger rounded-0",onClick:function(){return nt(t.setNote,t.id,"",t.apiID,t.isOnline,t.list,t.fetchData)},children:"\u05de\u05d7\u05e7"})]:Object(r.jsx)("button",{className:"btn btn-primary rounded-0",onClick:function(){return nt(t.setNote,t.id,prompt("\u05d4\u05e2\u05e8\u05d4 \u05dc".concat(t.title,":")),t.apiID,t.isOnline,t.list,t.fetchData)},children:"\u05d4\u05db\u05df \u05d4\u05e2\u05e8\u05d4"})]})})]:"",Object(r.jsx)("div",{className:"text-center h5 font-italic align-self-center",children:t.list[t.id]?[""]:Object(r.jsx)("div",{className:"rounded-circle shadow-lg col-1 font-italic mx-2",children:Object(r.jsx)("div",{className:"mr-2 position-absolute",style:{transform:"translate(-50%, -40%)"},onClick:function(){return et(t.id,t.list,t.addItemToList,t.createItemInList,t.apiID,t.isOnline,t.fetchData)},children:Object(r.jsx)(j.a,{size:"2x",icon:f.g})})})}),Object(r.jsx)("div",{className:"card-title h-100 text-muted m-0 user-select-none align-self-center position-absolute text-capitalize",style:{right:"10px"},children:t.category})]})]})})),ct="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAhFBMVEUAAADw8PDw8PDw8PDp6enw8PDw8PDu7u7w8PDw8PDx8fHw8PDw8PBIgcbv7+/w8PA5eMLn6u5QiMg8ecNRiMhnlczH1uXU4OePr9Xw8PAAUrSlvt3o6+4XYbpDfsXW3+rI1ua6zOORsdjh5uycudt9pNN3oNJpl85YjMo6eMMucMAlar12YEIvAAAAGXRSTlMA13JmC79NHPjy5cu2raSK7Ove1clqV0EwOOHeewAAAXRJREFUWMOc09mSglAMBNCwKyC4a1ovAu76//83UsMslgnbeeu3pFMhjevbaeJZ47HlJantu9RL4MQjfjOKnYA6cu2IRZHdaQ4nZFXoUBvf4kaW37y7x628gFSb2b6D2YYUE3Q0IdESnS1JMEcPc/qwQC8Ldf+BPazQ24r+2Rr0Zrb0Z4oBpvRrvRtkTT8sHsSimsMDOfX/h6wrCtaFLlVsbvB4cAObKhHrSqBkXUQvAeuOBjBH1gUtFV7xcm2pMWZVDhgD5KyKidwRqzKgLIGMVSOXfP50h+jOn3zxiAVEhXjIlAU3wGQGeGYvzzrcWJBSwoIDgNwAhzqYHFUQJOSx5IzK5TtcUDmzxFM+cW8AmP17kFg0ZtEOwIlrJwA7Fo2/Sq8DGgBgGIZh/FkbhAlc+r+1SR/QV+hH7G/sQepR7mXqdd5A6UjrUN1Y72Lpatty3XpvwFjEachazFvQXNRt2H7cf+F45Xnpeu178Xz1fflu/QcSVT5kR34r5QAAAABJRU5ErkJggg==",it="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA+VBMVEUAAADw8PDaEzfl1tbdJkfw8PDx8fHu7u4fZ7zbGj3eMFDx7+/gSWTw8PAla77w8PDhT2nw8PDccIDeOVjx8fFHgMbiWnLhTmru6OpQicvkN1Lw8PDv7+/iaoHiXXXkj5/eRF/hX3dDf8U1dcLhUGvw8PDfRmJbjsvhWnLjboJVispmlc68zeNgkcukvd2LrtjmkKClvt7qx83w8PDYACcAUrTgUmzfSmXonavopbEXYrsNW7jv6OpSiMjo6+6kvt0yc8Eobb/V3+q9z+RNhMjM2Oisw+B3odLf5ey2yeKZt9uRstl+pdRllc1bjstDf8U6eMNtms+FqtaYG5KvAAAAM3RSTlMAZf0M9L+MHfz86umxcfDXqU0W1bOyiEI9Fw7ypH9vMOrc2tjUy7mwsKWMdnI97dbNoVeKw+ZFAAACvElEQVRYw6WU53ajMBBGB/feYztO32zaZrvQFmlpxj1O7OT9H2aFRSCODQJ0f3B0OHx3hDQSBHF4f3BZqxF6VM8e56rNNMTiy0GNYg5y6Sh5iMjhTY0Fn4gr8LmqRprHAa89efIEPmUFRHxyC1M0cQXb1JsQRj6LxibGZI42LH2BTzZkLfpltOA/MGVfDteY8W+Hch8C+MxSpvsHOkLGZqTuoQF7+TC2n2ZLLtD0Z0OnQQL14968xcLkgQumFtvIFRdENFzi/aj7ae/sPnZY+0GThgrUCmxxjx2I7QseVuEC9XSr93m5R0Q8wexBIEidgc83p/kNY4hsw3AaaWHM0cwwpmECtfSmf+mmvu51T8FGjBfn9d9gfnrHz12vZxay/EZa8LMQTN3rQMyZ6BP0yIdrNB8ORQKkuBP4uuJVbQtrBhe8TDGZmCJBmd8PN5jwTaTOA/Ox90BhVMGhgD3I9lAouAJG3vRCdOELppZQwMgzgbL0QiOdeuPxVChwl7Ez1LQR+3KlaRO01DRWmWjaIxrz139C+Q6QdrrHxN499kJfe2pzu2E1nBY0EbKpe35YaMSHFjPMKRYLTqCqozF+FeivggIb2jiCoAI/rNXMXfDhMzEWblfbhdGMRBC0oYYxWfOqzi9rXOBMhJgRBCUo4BDEggwQOUEKqJxAhSMkxRHU5QR1yMoJsnAsJziGnJwgB1U5QRWacoImpOUEaYCLXxJcAEBFlaDCBD0ZQQ8YmeT5DDjcJhfcgkMrlTSfasGGRlJBAziDVMIJDMCl+zsRXfDIJjvJPvly/Hw5D2/oxxf0YQslbl6Bd+TiXiQ7dOLkO7CHnET9mOugQACnRTUCxVMI5OxcnD8/gzC6KUH/d0HAoFEMmX1jAGLSd5mA++cuDRHpVUrv06VKD2LROrlulzJFNu1MqX190oIA/gP8qY8JPhZ/1QAAAABJRU5ErkJggg==",st=function(t,e){t(e),localStorage.setItem("options-images-size",e)},ot=function(t,e){t(e),localStorage.setItem("options-titles-size",e)};var lt,At,ut,dt=Object(g.b)((function(t){return{options:t.options,lang:t.options.lang,fetchData:t.api.data}}),(function(t){return{setImagesSize:function(e){return t(Z(e))},setTitlesSize:function(e){return t(W(e))},setLangauge:function(e){return t(Y(e))},setLastConnected:function(e){return t(L(e))}}}))((function(t){return Object(r.jsxs)("div",{className:"text-center",children:[Object(r.jsx)(b.b,{to:"/ShoppingListReact",children:Object(r.jsx)(j.a,{type:"button",icon:f.d,size:"4x",className:"position-absolute border-right border-bottom",style:{left:0,zIndex:1}})}),Object(r.jsx)("img",{type:"button",onClick:function(){return e=t.setLangauge,n="en"==t.lang?"he":"en",e(n),void localStorage.setItem("options-langauge",n);var e,n},src:"en"==t.lang?it:ct,className:"position-absolute",style:{right:0,zIndex:1}}),Object(r.jsxs)("div",{className:"mb-2",children:[Object(r.jsxs)("div",{className:"dropdown",children:[Object(r.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"".concat(t.fetchData[t.lang].strings[23],": ").concat("64px"==t.options.imagesSize?t.fetchData[t.lang].strings[19]:"96px"==t.options.imagesSize?t.fetchData[t.lang].strings[20]:t.fetchData[t.lang].strings[21])}),Object(r.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton",children:[Object(r.jsx)("a",{className:"dropdown-item",onClick:function(){return st(t.setImagesSize,"64px")},children:t.fetchData[t.lang].strings[19]}),Object(r.jsx)("a",{className:"dropdown-item",onClick:function(){return st(t.setImagesSize,"96px")},children:t.fetchData[t.lang].strings[20]}),Object(r.jsx)("a",{className:"dropdown-item",onClick:function(){return st(t.setImagesSize,"128px")},children:t.fetchData[t.lang].strings[21]})]})]}),Object(r.jsx)("img",{src:$,style:{width:t.options.imagesSize}})]}),Object(r.jsxs)("div",{className:"my-2",children:[Object(r.jsxs)("div",{className:"dropdown",children:[Object(r.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton2","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"".concat(t.fetchData[t.lang].strings[24],": ").concat("2vw"==t.options.titlesSize?t.fetchData[t.lang].strings[18]:"3vw"==t.options.titlesSize?t.fetchData[t.lang].strings[19]:"4vw"==t.options.titlesSize?t.fetchData[t.lang].strings[20]:"5vw"==t.options.titlesSize?t.fetchData[t.lang].strings[21]:t.fetchData[t.lang].strings[22])}),Object(r.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton2",children:[Object(r.jsx)("a",{className:"dropdown-item",onClick:function(){return ot(t.setTitlesSize,"2vw")},children:t.fetchData[t.lang].strings[18]}),Object(r.jsx)("a",{className:"dropdown-item",onClick:function(){return ot(t.setTitlesSize,"3vw")},children:t.fetchData[t.lang].strings[19]}),Object(r.jsx)("a",{className:"dropdown-item",onClick:function(){return ot(t.setTitlesSize,"4vw")},children:t.fetchData[t.lang].strings[20]}),Object(r.jsx)("a",{className:"dropdown-item",onClick:function(){return ot(t.setTitlesSize,"5vw")},children:t.fetchData[t.lang].strings[21]}),Object(r.jsx)("a",{className:"dropdown-item",onClick:function(){return ot(t.setTitlesSize,"6vw")},children:t.fetchData[t.lang].strings[22]})]})]}),Object(r.jsx)("div",{className:"h5",style:{fontSize:t.options.titlesSize},children:t.fetchData[t.lang].strings[25]})]}),Object(r.jsx)("div",{className:"h2 font-weight-bold position-absolute",style:{bottom:1},children:"Ver 5"})]})})),gt=n.p+"static/media/loading.1fd154df.svg";y.a.defaults.headers.post["Access-Control-Allow-Origin"]="*";var ft=function(t,e,n,a,c,i,s,o,l,A,u){if(a&&(n=n.filter((function(t){return t.filter==a}))),""!=t)if(t=t.toLowerCase(),e)n=n.filter((function(e){return e.title.includes(t)}));else for(var d=function(e){n=n.filter((function(n){return n.title[e]==t[e]}))},g=0;g<t.length;g++)d(g);return n=n.sort((function(t,e){return"".concat(t.order).concat(t.title)<"".concat(e.order).concat(e.title)?-1:1})),c&&(n=n.filter((function(t){return i[t.img.split("").reverse().join("").slice(8).split("").reverse().join("")]}))),n.length<=o+s*o&&!A?l(!0):n.length<=o+s*o||!A||l(!1),n.length<=s*o&&s>0&&u(s-1),n=n.map((function(t,e){return e<o+s*o&&e>=s*o?Object(r.jsx)(rt,{logo:t.img,title:t.title,category:t.category,id:t.img.split("").reverse().join("").slice(8).split("").reverse().join("")}):void 0}))},jt=function(t){var e=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return lt=t,lt=JSON.stringify(lt),lt=Object(p.b)(lt),e.abrupt("return",lt);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)(O.a,{url:e,children:Object(r.jsx)(m.a,{size:60})})},bt=function(t,e,n){var a=function(){var a=Object(d.a)(u.a.mark((function a(){var r,c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r=Object.keys(t),c=Object.values(t).map((function(t){return void 0!=t[0]?t[0]:t})),!(r=r.map((function(a,r){var i=e.find((function(t){return t.img.split("").reverse().join("").slice(8).split("").reverse().join("")==a}));if(i&&c[r]){i.title=i.title.replace(/(^\w{1})|(\s{1}\w{1})/g,(function(t){return t.toUpperCase()}));var s=t[i.img.split("").reverse().join("").slice(8).split("").reverse().join("")][1];return"".concat(i.title,": ").concat(c[r]).concat(s?", ".concat(n,": ").concat(s):"")}})))){a.next=6;break}return r=r.join("\n"),a.abrupt("return",r);case 6:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(r.jsx)(O.a,{url:a,children:Object(r.jsx)(m.a,{size:60})})},pt=function(t,e,n,a,r,c,i,s){y.a.get("".concat(s.general.server,"/dlist?id=").concat(t)).then((function(o){e(o.data,n,a),c(t),r(!0),i(t),localStorage.setItem("options-last-connected",t),At=setTimeout((function(){return Ot(t,e,n,a,s)}),1e3)}))},Ot=function(t,e,n,a,r){y.a.get("".concat(r.general.server,"/dlist?id=").concat(t)).then((function(t){e(t.data,n,a)}))},mt=function(t,e,n){ut&&clearTimeout(ut),ut=setTimeout((function(){y.a.post("".concat(n.general.server,"/dlist?id=").concat(t),e),ut=void 0}),500)},ht=function(t){var e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)},xt=function t(e,n){t.list||(t.list=[]);for(var a=t.list,r=0;r<e.length;r++){var c=new Image;c.onload=function(){var t=a.indexOf(this);-1!==t&&a.splice(t,1)},a.push(c),c.src="".concat(n).concat(e[r].img)}};var vt=Object(g.b)((function(t){return{filterText:t.filtering.filterText,filterType:t.filtering.filterType,filterCategory:t.filtering.filterCategory,final:t.filtering.final,listLength:t.filtering.listLength,fetchLoading:t.api.loading,fetchData:t.api.data,fetchError:t.api.error,isOnline:t.api.isOnline,id:t.api.id,lastConnected:t.api.lastConnected,list:t.list,notes:t.notes,lang:t.options.lang}}),(function(t){return{setFilterText:function(e){return t({type:B,payload:e})},setFilterType:function(e){return t({type:D,payload:e})},fetch:function(){return t(M())},setFilterCategory:function(e){return t({type:E,payload:e})},setFinal:function(e){return t({type:Q,payload:e})},setList:function(e){return t({type:P,payload:e})},setImagesSize:function(e){return t(Z(e))},setTitlesSize:function(e){return t(W(e))},setLangauge:function(e){return t(Y(e))},setOnline:function(e){return t({type:w,payload:e})},setId:function(e){return t({type:N,payload:e})},setLastConnected:function(e){return t(L(e))},setListLength:function(e){return t({type:U,payload:e})}}}))((function(t){Object(c.useEffect)(t.fetch,[]),Object(c.useEffect)((function(){return e=t.setImagesSize,n=t.setTitlesSize,a=t.setLangauge,r=t.setLastConnected,localStorage.getItem("options-images-size")&&e(localStorage.getItem("options-images-size")),localStorage.getItem("options-titles-size")&&n(localStorage.getItem("options-titles-size")),localStorage.getItem("options-langauge")?a(localStorage.getItem("options-langauge")):(a("en"),localStorage.setItem("options-langauge","en")),void(localStorage.getItem("options-last-connected")&&r(localStorage.getItem("options-last-connected")));var e,n,a,r}),[]),Object(c.useEffect)((function(){localStorage.getItem("saved-list")?(lt=localStorage.getItem("saved-list"),lt=Object(p.a)(lt),lt=JSON.parse(lt),t.setList(lt)):localStorage.setItem("saved-list",{})}),[]),Object(c.useEffect)((function(){lt=t.list,lt=JSON.stringify(lt),lt=Object(p.b)(lt),localStorage.setItem("saved-list",lt),function(t){for(var e in t)""==t[e]&&delete t[e]}(t.list)})),Object(c.useEffect)((function(){At&&(clearInterval(At),At=setTimeout((function(){return Ot(t.id,t.setList,t.fetchData[t.lang].strings[15],t.fetchData[t.lang].strings[16],t.fetchData)}),ut?1500:1e3))}),[t.list]);var e=Object(c.useState)(0),n=Object(l.a)(e,2),a=n[0],i=n[1],s=Object(c.useState)(!1),o=Object(l.a)(s,2),A=o[0],u=o[1];return Object(c.useEffect)((function(){i(0)}),[t.filterText,t.filterCategory,t.final,t.filterType]),Object(c.useEffect)((function(){return t.fetchLoading?"":xt(t.fetchData.he.items,t.fetchData.general.images)}),[t.fetchLoading]),t.fetchLoading?Object(r.jsx)("div",{className:"text-center display-2",children:Object(r.jsx)("img",{src:gt})}):Object(r.jsxs)("div",{className:"text-center",children:[Object(r.jsx)(b.b,{to:"/options",children:Object(r.jsx)(j.a,{type:"button",icon:f.a,size:"4x",className:"position-absolute border-right border-bottom",style:{left:0,zIndex:1}})}),Object(r.jsx)("img",{type:"button",onClick:function(){return e=t.setLangauge,n="en"==t.lang?"he":"en",e(n),void localStorage.setItem("options-langauge",n);var e,n},src:"en"==t.lang?it:ct,className:"position-absolute",style:{right:0,zIndex:1}}),Object(r.jsx)("input",{placeholder:"".concat(t.fetchData[t.lang].strings[0],": ").concat(t.filterType?t.fetchData[t.lang].strings[2]:t.fetchData[t.lang].strings[1]),className:"text-center",onChange:function(e){return t.setFilterText(e.target.value)}}),Object(r.jsxs)("div",{className:"dropdown mt-2",children:[Object(r.jsx)("button",{className:"btn btn-primary rounded-0 dropdown-toggle",dir:"rtl",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:t.fetchData[t.lang].strings[10+t.filterCategory]}),Object(r.jsx)("button",{className:"btn btn-primary rounded-0",type:"button",onClick:function(e){e.target.blur(),t.setFinal(!t.final)},children:"".concat(t.final?t.fetchData[t.lang].strings[3]:t.fetchData[t.lang].strings[4])}),Object(r.jsx)("div",{children:Object(r.jsx)("div",{children:Object(r.jsx)(h.a,{closeOnDocumentClick:!1,trigger:Object(r.jsx)("div",{className:"btn btn-info rounded-0",children:Object(r.jsx)(j.a,{icon:f.e,size:"1x"})}),children:Object(r.jsxs)("div",{className:"col text-center",children:[Object(r.jsx)("button",{className:"btn btn-secondary rounded-0 col-12",onClick:function(e){e.target.blur(),function(t,e,n,a,r,c,i,s,o){try{var l=prompt("".concat(e));if(null==l)return;x.a(l)?(At&&(clearInterval(At),At=void 0,a(!1)),pt(l,t,e,n,a,r,s,o)):(l=Object(p.a)(l),l=JSON.parse(l),i&&mt(c,l,o),t(l))}catch(A){alert("".concat(n,"!"))}}(t.setList,t.fetchData[t.lang].strings[15],t.fetchData[t.lang].strings[16],t.setOnline,t.setId,t.id,t.isOnline,t.setLastConnected,t.fetchData)},children:t.fetchData[t.lang].strings[5]}),Object(r.jsxs)(h.a,{closeOnDocumentClick:!1,trigger:Object(r.jsx)("div",{className:"btn btn-primary rounded-0 col-12",children:t.fetchData[t.lang].strings[6]}),children:[Object(r.jsx)(h.a,{closeOnDocumentClick:!0,trigger:Object(r.jsx)("div",{className:"btn btn-secondary rounded-0 col-12",children:t.fetchData[t.lang].strings[7]}),children:Object(r.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(r.jsx)("button",{className:"btn btn-secondary rounded-0",onClick:function(e){e.target.blur(),function(t,e,n,a){var r=Object.keys(t),c=Object.values(t).map((function(t){return void 0!=t[0]?t[0]:t}));(r=r.map((function(n,r){try{var i=e.find((function(t){return t.img.split("").reverse().join("").slice(8).split("").reverse().join("")==n}));if(i&&c[r]){i.title=i.title.replace(/(^\w{1})|(\s{1}\w{1})/g,(function(t){return t.toUpperCase()}));var s=t[i.img.split("").reverse().join("").slice(8).split("").reverse().join("")][1];return"".concat(i.title,": ").concat(c[r]).concat(s?", ".concat(a,": ").concat(s):"")}}catch(o){return}})))&&(r=r.join("\n"),ht(r),alert("".concat(n,"!")))}(t.list,t.fetchData[t.lang].items,t.fetchData[t.lang].strings[14],t.fetchData[t.lang].strings[26])},children:Object(r.jsx)(j.a,{icon:f.b,size:"2x"})}),bt(t.list,t.fetchData[t.lang].items,t.fetchData[t.lang].strings[26])]})}),Object(r.jsx)(h.a,{closeOnDocumentClick:!0,trigger:Object(r.jsx)("div",{className:"btn btn-secondary rounded-0 col-12",children:t.fetchData[t.lang].strings[8]}),children:Object(r.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(r.jsx)("button",{className:"btn btn-secondary rounded-0",onClick:function(e){var n,a;e.target.blur(),n=t.list,a=t.fetchData[t.lang].strings[14],n=JSON.stringify(n),n=Object(p.b)(n),ht(n),alert("".concat(a,"!"))},children:Object(r.jsx)(j.a,{icon:f.b,size:"2x"})}),jt(t.list)]})})]}),Object(r.jsx)("button",{className:"btn btn-danger rounded-0 col-12",onClick:function(e){e.target.blur(),window.confirm("".concat(t.fetchData[t.lang].strings[17],"?"))&&function(t,e,n,a,r){n&&mt(e,{},a),t(JSON.parse(atob("e30="))),r(0)}(t.setList,t.id,t.isOnline,t.fetchData,i)},children:t.fetchData[t.lang].strings[9]})]})})})}),Object(r.jsxs)("div",{className:"dropdown-menu bg-secondary","aria-labelledby":"dropdownMenuButton",children:[Object(r.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(){return t.setFilterCategory(0)},children:t.fetchData[t.lang].strings[10]}),Object(r.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(){return t.setFilterCategory(1)},children:t.fetchData[t.lang].strings[11]}),Object(r.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(){return t.setFilterCategory(2)},children:t.fetchData[t.lang].strings[12]}),Object(r.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(){return t.setFilterCategory(3)},children:t.fetchData[t.lang].strings[13]})]})]}),Object(r.jsx)("button",{onClick:function(e){e.target.blur(),t.setFilterType(!t.filterType)},className:"btn btn-danger my-2",children:"".concat(t.fetchData[t.lang].strings[0],": ").concat(t.filterType?t.fetchData[t.lang].strings[2]:t.fetchData[t.lang].strings[1])}),t.isOnline?Object(r.jsxs)("div",{dir:"".concat("en"==t.lang?"ltr":"rtl"),className:"btn d-block",onClick:function(){window.confirm("".concat(t.fetchData[t.lang].strings[28],"?"))&&(clearInterval(At),At=void 0,t.setOnline(!1))},children:[Object(r.jsx)(j.a,{icon:f.c,size:"2x"}),Object(r.jsx)("div",{children:t.fetchData[t.lang].strings[27]})]}):t.lastConnected?[Object(r.jsx)("br",{}),Object(r.jsx)("btn",{dir:"".concat("en"==t.lang?"ltr":"rtl"),className:"btn btn-info",onClick:function(){return pt(t.lastConnected,t.setList,t.fetchData[t.lang].strings[15],t.fetchData[t.lang].strings[16],t.setOnline,t.setId,t.setLastConnected,t.fetchData)},children:"".concat(t.fetchData[t.lang].strings[29],": ").concat(t.lastConnected)})]:"",ft(t.filterText,t.filterType,t.fetchData[t.lang].items,t.filterCategory,t.final,t.list,a,t.listLength,u,A,i),Object(r.jsxs)("div",{className:"d-block",children:[Object(r.jsx)("div",{className:"btn btn-primary col-6 rounded-0 ".concat(A?"disabled":""),onClick:function(){return A?"":i(a+1)},children:t.fetchData[t.lang].strings[30]}),Object(r.jsx)("div",{className:"btn btn-primary col-6 rounded-0 ".concat(a?"":"disabled"),onClick:function(){return a?i(a-1):""},children:t.fetchData[t.lang].strings[31]})]})]})})),yt=n(47),It=n(20),Ct={filterText:"",filterType:!1,filterCategory:0,final:!1,listLength:8},Bt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ct,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case B:return Object(C.a)(Object(C.a)({},t),{},{filterText:e.payload});case D:return Object(C.a)(Object(C.a)({},t),{},{filterType:e.payload});case E:return Object(C.a)(Object(C.a)({},t),{},{filterCategory:e.payload});case Q:return Object(C.a)(Object(C.a)({},t),{},{final:e.payload});case U:return Object(C.a)(Object(C.a)({},t),{},{listLength:e.payload});default:return t}},Dt={loading:!0,data:"",error:"",isOnline:!1,id:"",lastConnected:""},Et=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Dt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case F:return Object(C.a)(Object(C.a)({},t),{},{loading:!0});case S:return Object(C.a)(Object(C.a)({},t),{},{loading:!1,data:e.payload,error:""});case T:return Object(C.a)(Object(C.a)({},t),{},{loading:!1,data:"",error:e.payload});case w:return Object(C.a)(Object(C.a)({},t),{},{isOnline:e.payload});case N:return Object(C.a)(Object(C.a)({},t),{},{id:e.payload});case z:return Object(C.a)(Object(C.a)({},t),{},{lastConnected:e.payload});default:return t}},Qt={},Ut=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qt,e=arguments.length>1?arguments[1]:void 0;if(t)switch(e.type){case k:return Object(C.a)(Object(C.a)({},t),{},Object(I.a)({},e.item,[t[e.item][0]+1,t[e.item][1]]));case H:return Object(C.a)(Object(C.a)({},t),{},Object(I.a)({},e.item,[t[e.item][0]-1,t[e.item][1]]));case K:return Object(C.a)(Object(C.a)({},t),{},Object(I.a)({},e.item,[1,""]));case q:return Object(C.a)(Object(C.a)({},t),{},Object(I.a)({},e.item,""));case P:return Object(C.a)({},e.payload);case V:return Object(C.a)(Object(C.a)({},t),{},Object(I.a)({},e.item,[t[e.item][0],e.payload]));default:return t}},Ft={imagesSize:"96px",titlesSize:"4vw",lang:""},St=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ft,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case J:return Object(C.a)(Object(C.a)({},t),{},{imagesSize:e.payload});case G:return Object(C.a)(Object(C.a)({},t),{},{titlesSize:e.payload});case X:return Object(C.a)(Object(C.a)({},t),{},{lang:e.payload});default:return t}},Tt=Object(It.c)({filtering:Bt,api:Et,list:Ut,options:St}),wt=Object(It.d)(Tt,Object(It.a)(yt.a)),Nt=n(5);var zt=function(){return Object(r.jsx)(g.a,{store:wt,children:Object(r.jsxs)(b.a,{children:[Object(r.jsx)(Nt.a,{component:dt,path:"/options",exact:!0}),Object(r.jsx)(Nt.a,{component:vt,path:"/ShoppingListReact",exact:!0})]})})},Rt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),c(t),i(t)}))};n(81),n(82),n(84);o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(zt,{})}),document.getElementById("root")),Rt()}},[[85,1,2]]]);
//# sourceMappingURL=main.11842963.chunk.js.map