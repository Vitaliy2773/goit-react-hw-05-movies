"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[945],{945:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r,a,c=e(861),u=e(439),i=e(687),s=e.n(i),o=e(791),p=e(689),f=e(323),l=e(585),d=e(168),h=e(112),m=h.Z.ul(r||(r=(0,d.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 20px;\n"]))),v=h.Z.li(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n\n  img {\n    width: 100%;\n    max-width: 180px;\n    height: auto;\n    border-radius: 10px;\n    margin-bottom: 10px;\n  }\n\n  p {\n    margin: 5px 0;\n    font-size: 14px;\n    color: #fff;\n\n    span {\n      font-weight: bold;\n    }\n  }\n"]))),g=e(184),x=function(){var n=(0,p.UO)().movieId,t=(0,o.useState)([]),e=(0,u.Z)(t,2),r=e[0],a=e[1];return(0,o.useEffect)((function(){var t=function(){var t=(0,c.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.Eb)(n);case 3:e=t.sent,a(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(m,{children:r.map((function(n){var t=n.id,e=n.profile_path,r=n.original_name,a=n.character;return(0,g.jsxs)(v,{children:[(0,g.jsx)("img",{src:"".concat(e?l.f+e:l.l+"?text="+r),alt:r}),(0,g.jsxs)("p",{children:[(0,g.jsx)("span",{children:" Actor:"})," ",r]}),(0,g.jsxs)("p",{children:[(0,g.jsx)("span",{children:"Character:"})," ",a]})]},t)}))})})}},323:function(n,t,e){e.d(t,{Df:function(){return s},Eb:function(){return f},Hu:function(){return l},Pg:function(){return p},Ph:function(){return o}});var r=e(861),a=e(687),c=e.n(a),u=e(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="aa0f6c6aa0a029f091c2f3c987f61ce0",s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/week?api_key=".concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},585:function(n,t,e){e.d(t,{f:function(){return r},l:function(){return a}});var r="https://image.tmdb.org/t/p/w500/",a="https://via.placeholder.com/182x273"}}]);
//# sourceMappingURL=945.89486569.chunk.js.map