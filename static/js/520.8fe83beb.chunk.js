"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[520],{520:function(t,n,e){e.r(n),e.d(n,{default:function(){return h}});var r=e(861),a=e(439),u=e(757),c=e.n(u),i=e(192),o=e(791),s=e(87),f=e(390),p="SearchMovie_form__VWPGr",l="SearchMovie_btn__AI5VA",v=e(639),d=e(184),h=function(){var t=(0,s.lr)(),n=(0,a.Z)(t,2),e=n[0],u=n[1],h=(0,o.useState)([]),m=(0,a.Z)(h,2),_=m[0],g=m[1],x=(0,o.useState)(!1),y=(0,a.Z)(x,2),w=y[0],b=y[1],k=e.get("query"),Z=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b(!0),t.next=3,(0,f.qF)(n);case 3:e=t.sent,g(e.data.results),b(!1);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return(0,o.useEffect)((function(){k&&Z(k)}),[k]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("form",{className:p,onSubmit:function(t){t.preventDefault(),u({query:t.target[0].value}),t.target.reset()},children:[(0,d.jsx)("input",{type:"text",name:"Search"}),(0,d.jsx)("button",{className:l,type:"submit",children:"Search"})]}),(0,d.jsx)(i.e,{list:_}),w&&(0,d.jsx)(v.$,{})]})}},192:function(t,n,e){e.d(n,{e:function(){return s}});var r=e(87),a=e(689),u="ListItem_link__twHxh",c=e(184),i=function(t){var n=t.title,e=t.id,i=(0,a.TH)();return(0,c.jsx)("li",{children:(0,c.jsx)(r.rU,{className:u,to:"/movies/".concat(e),state:{from:i},children:n})})},o="MovieList_list__yjDCC",s=function(t){var n=t.list;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("ul",{className:o,children:n.map((function(t){return(0,c.jsx)(i,{id:t.id,title:t.title},t.id)}))})})}},639:function(t,n,e){e.d(n,{$:function(){return c}});var r=e(946),a=e(184),u={position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},c=function(){return(0,a.jsx)("div",{style:u,children:(0,a.jsx)(r.Z,{color:"#36d7b7"})})}},390:function(t,n,e){e.d(n,{Hg:function(){return o},qF:function(){return l},t2:function(){return s},tx:function(){return f},zv:function(){return p}});var r=e(861),a=e(757),u=e.n(a),c=e(243),i="73116bd12aca11956e7ad9f337771b5c";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.Z.get("trending/movie/day?api_key=".concat(i)),t.abrupt("return",n);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.Z.get("movie/".concat(n,"?api_key=").concat(i,"&language=en-US")),t.abrupt("return",e);case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r,a=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,r=c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=").concat(e)),t.abrupt("return",r);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.Z.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US")),t.abrupt("return",e);case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(n,"&include_adult=false")),t.abrupt("return",e);case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=520.8fe83beb.chunk.js.map