"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[755],{595:function(n,r,e){e.d(r,{Z:function(){return d}});var t,a,c=e(689),o=e(87),u=e(168),i=e(112),s=i.Z.ul(t||(t=(0,u.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 20px;\n"]))),f=i.Z.li(a||(a=(0,u.Z)(["\n  background-color: #f0f0f0;\n  padding: 15px;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n\n  a {\n    text-decoration: none;\n    color: #333;\n    font-weight: bold;\n    &:hover {\n      color: #007bff;\n    }\n  }\n"]))),p=e(184),d=function(n){var r=n.movies,e=(0,c.TH)();return(0,p.jsx)(s,{children:r.map((function(n){var r=n.id,t=n.original_title;return(0,p.jsx)(f,{children:(0,p.jsx)(o.rU,{state:{from:e},to:"/movies/".concat(r),children:t})},r)}))})}},755:function(n,r,e){e.r(r),e.d(r,{default:function(){return m}});var t,a,c=e(861),o=e(439),u=e(687),i=e.n(u),s=e(791),f=e(87),p=e(323),d=e(168),l=e(112),v=l.Z.input(t||(t=(0,d.Z)(["\n  width: 100%;\n  padding: 10px;\n  margin-right: 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n\n  &:focus {\n    outline: none;\n    border-color: #007bff;\n    box-shadow: 0 0 3px #007bff;\n  }\n"]))),h=l.Z.button(a||(a=(0,d.Z)(["\n  padding: 10px 20px;\n  border: none;\n  border-radius: 4px;\n  background-color: #007bff;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n  transition: background-color 0.2s;\n\n  &:hover {\n    background-color: #0056b3;\n  }\n\n  &:disabled {\n    background-color: #cccccc;\n    cursor: default;\n  }\n"]))),g=e(184),x=function(n){var r=n.setSearchParams,e=(0,s.useState)(""),t=(0,o.Z)(e,2),a=t[0],c=t[1];return(0,g.jsxs)("form",{onSubmit:function(n){n.preventDefault(),r({query:a})},children:[(0,g.jsx)(v,{type:"text",placeholder:"Name movie",autoFocus:!0,value:a,onChange:function(n){var r=n.target.value;c(r)}}),(0,g.jsx)(h,{type:"submit",disabled:!a,children:"Search"})]})},b=e(595),m=function(){var n=(0,s.useState)([]),r=(0,o.Z)(n,2),e=r[0],t=r[1],a=(0,f.lr)(),u=(0,o.Z)(a,2),d=u[0],l=u[1];return(0,s.useEffect)((function(){var n=d.get("query");if(n){var r=function(){var r=(0,c.Z)(i().mark((function r(){var e;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,p.Ph)(n);case 3:e=r.sent,t(e),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}}),[d]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(x,{setSearchParams:l}),e.length>0&&(0,g.jsx)(b.Z,{movies:e})]})}},323:function(n,r,e){e.d(r,{Df:function(){return i},Eb:function(){return p},Hu:function(){return d},Pg:function(){return f},Ph:function(){return s}});var t=e(861),a=e(687),c=e.n(a),o=e(340);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="aa0f6c6aa0a029f091c2f3c987f61ce0",i=function(){var n=(0,t.Z)(c().mark((function n(){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/week?api_key=".concat(u));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(u,"&query=").concat(r,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(r,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(r,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.cast);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(r,"/reviews?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=755.b2f792c3.chunk.js.map