"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[692],{3639:function(e,n,t){t.d(n,{$:function(){return u}});var r=t(946),a=t(184),c={position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},u=function(){return(0,a.jsx)("div",{style:c,children:(0,a.jsx)(r.Z,{color:"#36d7b7"})})}},5692:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(5861),a=t(9439),c=t(7757),u=t.n(c),i=t(3654),s=t(184),o=function(e){var n=e.toParse,t={__html:i.TU.parse(n)};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{dangerouslySetInnerHTML:t})})},f="ReviewsList_list__o8e+8",p="ReviewsList_item__5RN78",v="ReviewsList_author__CzLio",l="ReviewsList_review__s-q1A",d=function(e){var n=e.reviews,t=e.movieId;return(0,s.jsx)("ul",{className:f,children:n.map((function(e,n){return(0,s.jsxs)("li",{className:p,children:[(0,s.jsx)("h4",{className:v,children:e.author}),(0,s.jsx)("div",{className:l,children:(0,s.jsx)(o,{toParse:e.content})})]},"".concat(t,"r").concat(n+1))}))})},h=t(3639),m=t(2791),_=t(7689),w=t(4390),g=function(){var e=(0,_.UO)().movieId,n=(0,m.useState)([]),t=(0,a.Z)(n,2),c=t[0],i=t[1],o=(0,m.useState)(!1),f=(0,a.Z)(o,2),p=f[0],v=f[1],l=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,(0,w.tx)(n);case 3:t=e.sent,i(t.data.results),v(!1);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,m.useEffect)((function(){l(e)}),[e]),(0,s.jsxs)(s.Fragment,{children:[0===c.length?(0,s.jsx)("p",{children:"There is no review for this movie"}):(0,s.jsx)(d,{reviews:c,movieId:e}),p&&(0,s.jsx)(h.$,{})]})}},4390:function(e,n,t){t.d(n,{Hg:function(){return s},qF:function(){return v},t2:function(){return o},tx:function(){return f},zv:function(){return p}});var r=t(5861),a=t(7757),c=t.n(a),u=t(1243),i="73116bd12aca11956e7ad9f337771b5c";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.Z.get("trending/movie/day?api_key=".concat(i)),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.Z.get("movie/".concat(n,"?api_key=").concat(i,"&language=en-US")),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,r=u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=").concat(t)),e.abrupt("return",r);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.Z.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US")),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(n,"&include_adult=false")),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=692.d12370bc.chunk.js.map