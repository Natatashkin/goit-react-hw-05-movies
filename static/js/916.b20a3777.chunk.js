"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[916,637],{916:function(n,e,t){t.r(e),t.d(e,{HomePage:function(){return g}});var r=t(907);var a=t(181);function u(n){return function(n){if(Array.isArray(n))return(0,r.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,a.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=t(5861),o=t(885),i=t(7757),s=t.n(i),f=t(2791),l=t(3243),p=t(9637),d=t(3020),h=t(501),m=t(6871),v=t(8479),y=t(184),g=function(){var n=(0,f.useState)([]),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=(0,f.useState)(!1),i=(0,o.Z)(a,2),g=i[0],x=i[1],b=(0,m.TH)();return(0,f.useEffect)((function(){function n(){return(n=(0,c.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l.UF("day");case 3:e=n.sent,r((function(n){return[].concat(u(n),u(e.results))})),x(!1),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0),x(!1);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}x(!0),function(){n.apply(this,arguments)}()}),[]),(0,y.jsxs)(p.HomeStyles,{children:[(0,y.jsx)(p.Title,{children:"Daily Trending"}),(0,y.jsx)(v.x7,{}),g&&(0,y.jsx)(d.aN,{}),t.length>0&&(0,y.jsx)(d.sI,{children:t.map((function(n){return(0,y.jsx)(d.Zb,{children:(0,y.jsx)(h.rU,{to:"movies/".concat(n.id),state:{from:b},children:(0,y.jsx)(d.uA,{details:n})})},n.id)}))})]})}},9637:function(n,e,t){t.r(e),t.d(e,{HomeStyles:function(){return o},Title:function(){return i}});var r,a,u=t(168),c=t(5751),o=c.default.div(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-top: ",";\n  padding-bottom: ",";\n"])),(function(n){return(0,n.theme.spacing)(4)}),(function(n){return(0,n.theme.spacing)(4)})),i=c.default.h2(a||(a=(0,u.Z)(["\n  padding-bottom: ",";\n  text-align: center;\n"])),(function(n){return(0,n.theme.spacing)(2)}))},3243:function(n,e,t){t.d(e,{UF:function(){return s},gH:function(){return f},TP:function(){return l}});var r=t(5861),a=t(7757),u=t.n(a),c=t(1405),o=t.n(c);o().defaults.baseURL="https://api.themoviedb.org/3";var i="c18b6e4daa60e3e4af297dba0629174d",s=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/trending/movie/".concat(e,"?api_key=").concat(i,"&language=en-US&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("search/movie?api_key=".concat(i,"&query=").concat(e,"&language=en-US&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US&append_to_response=credits,reviews"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=916.b20a3777.chunk.js.map