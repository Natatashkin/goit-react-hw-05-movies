"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[667,337],{7337:function(n,e,t){t.r(e),t.d(e,{MoviesPageStyles:function(){return i},Form:function(){return s},Input:function(){return f}});var r,u,a,c=t(168),o=t(5751),i=o.default.div(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-top: ",";\n  padding-bottom: ",";\n"])),(function(n){return(0,n.theme.spacing)(4)}),(function(n){return(0,n.theme.spacing)(4)})),s=o.default.form(u||(u=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),f=o.default.input(a||(a=(0,c.Z)(["\n  padding-top: ",";\n  padding-bottom: ",";\n  padding-left: ",";\n  padding-right: ",";\n  border-radius: ",";\n  box-shadow: ","; ;\n"])),(function(n){return(0,n.theme.spacing)(1)}),(function(n){return(0,n.theme.spacing)(1)}),(function(n){return(0,n.theme.spacing)(2)}),(function(n){return(0,n.theme.spacing)(2)}),(function(n){return n.theme.options.borderRadius}),(function(n){return n.theme.options.shadowInset}))},2667:function(n,e,t){t.r(e),t.d(e,{MoviesPage:function(){return v}});var r=t(2982),u=t(5861),a=t(885),c=t(7757),o=t.n(c),i=t(2791),s=t(6871),f=t(501),p=t(3020),d=t(7337),l=t(3243),h=t(8479),m=t(184),v=function(){var n=(0,i.useRef)(null),e=(0,s.TH)(),t=(0,f.lr)(""),c=(0,a.Z)(t,2),v=c[0],g=c[1],x=v.get("query"),y=(0,i.useState)([]),b=(0,a.Z)(y,2),w=b[0],k=b[1],Z=(0,i.useState)(!1),j=(0,a.Z)(Z,2),_=j[0],S=j[1];return(0,i.useEffect)((function(){if(x){S(!0);try{var n=function(){var n=(0,u.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.gH(x);case 2:if(0!==(e=n.sent).total_results){n.next=7;break}return h.ZP.error("No movies on query ".concat(x,"!")),S(!1),n.abrupt("return");case 7:k((function(n){return[].concat((0,r.Z)(n),(0,r.Z)(e.results))})),S(!1);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}catch(e){console.log(e),S(!1)}}}),[x]),(0,m.jsxs)(d.MoviesPageStyles,{children:[(0,m.jsxs)(d.Form,{onSubmit:function(e){e.preventDefault(),g({query:n.current.value}),n.current.value=""},children:[(0,m.jsx)(d.Input,{ref:n,type:"text",placeholder:"Enter title of movie"}),(0,m.jsx)(p.zx,{type:"submit",text:"Search"})]}),_&&(0,m.jsx)(p.aN,{}),w&&(0,m.jsx)(p.sI,{children:w.map((function(n){return(0,m.jsx)(p.Zb,{children:(0,m.jsx)(f.rU,{to:"".concat(n.id),state:{from:e},children:(0,m.jsx)(p.uA,{details:n})})},n.id)}))}),(0,m.jsx)(h.x7,{})]})}},3243:function(n,e,t){t.d(e,{UF:function(){return s},gH:function(){return f},TP:function(){return p}});var r=t(5861),u=t(7757),a=t.n(u),c=t(1405),o=t.n(c);o().defaults.baseURL="https://api.themoviedb.org/3";var i="c18b6e4daa60e3e4af297dba0629174d",s=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/trending/movie/".concat(e,"?api_key=").concat(i,"&language=en-US&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("search/movie?api_key=".concat(i,"&query=").concat(e,"&language=en-US&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US&append_to_response=credits,reviews"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=667.cbf37d8f.chunk.js.map