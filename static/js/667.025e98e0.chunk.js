"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[667,337],{7337:function(n,e,t){t.r(e),t.d(e,{MoviesPageStyles:function(){return i},Form:function(){return s},Input:function(){return f}});var r,u,a,c=t(168),o=t(5751),i=o.default.div(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-top: ",";\n  padding-bottom: ",";\n"])),(function(n){return(0,n.theme.spacing)(4)}),(function(n){return(0,n.theme.spacing)(4)})),s=o.default.form(u||(u=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),f=o.default.input(a||(a=(0,c.Z)(["\n  padding-top: ",";\n  padding-bottom: ",";\n  padding-left: ",";\n  padding-right: ",";\n  border-radius: ",";\n  box-shadow: ","; ;\n"])),(function(n){return(0,n.theme.spacing)(1)}),(function(n){return(0,n.theme.spacing)(1)}),(function(n){return(0,n.theme.spacing)(2)}),(function(n){return(0,n.theme.spacing)(2)}),(function(n){return n.theme.options.borderRadius}),(function(n){return n.theme.options.shadowInset}))},2667:function(n,e,t){t.r(e),t.d(e,{MoviesPage:function(){return m}});var r=t(5861),u=t(885),a=t(7757),c=t.n(a),o=t(2791),i=t(6871),s=t(501),f=t(3020),p=t(7337),d=t(3243),l=t(8479),h=t(184),m=function(){var n=(0,o.useRef)(null),e=(0,i.TH)(),t=(0,s.lr)(""),a=(0,u.Z)(t,2),m=a[0],v=a[1],g=m.get("query"),x=(0,o.useState)([]),y=(0,u.Z)(x,2),b=y[0],w=y[1],k=(0,o.useState)(!1),j=(0,u.Z)(k,2),Z=j[0],_=j[1];return(0,o.useEffect)((function(){if(g){_(!0),w([]);try{var n=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.gH(g);case 2:if(0!==(e=n.sent).total_results){n.next=7;break}return l.ZP.error("No movies on query ".concat(g,"!")),_(!1),n.abrupt("return");case 7:w(e.results),_(!1);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}catch(e){console.log(e),_(!1)}}}),[g]),(0,h.jsxs)(p.MoviesPageStyles,{children:[(0,h.jsxs)(p.Form,{onSubmit:function(e){e.preventDefault(),v({query:n.current.value.toLowerCase()}),n.current.value=""},children:[(0,h.jsx)(p.Input,{ref:n,type:"text",placeholder:"Enter title of movie"}),(0,h.jsx)(f.zx,{type:"submit",text:"Search"})]}),Z&&(0,h.jsx)(f.aN,{}),b&&(0,h.jsx)(f.sI,{children:b.map((function(n){return(0,h.jsx)(f.Zb,{children:(0,h.jsx)(s.rU,{to:"".concat(n.id),state:{from:e},children:(0,h.jsx)(f.uA,{details:n})})},n.id)}))}),(0,h.jsx)(l.x7,{})]})}},3243:function(n,e,t){t.d(e,{UF:function(){return s},gH:function(){return f},TP:function(){return p}});var r=t(5861),u=t(7757),a=t.n(u),c=t(1405),o=t.n(c);o().defaults.baseURL="https://api.themoviedb.org/3";var i="c18b6e4daa60e3e4af297dba0629174d",s=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/trending/movie/".concat(e,"?api_key=").concat(i,"&language=en-US&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("search/movie?api_key=".concat(i,"&query=").concat(e,"&language=en-US&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US&append_to_response=credits,reviews"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=667.025e98e0.chunk.js.map