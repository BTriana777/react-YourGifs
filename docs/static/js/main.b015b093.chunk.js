(this["webpackJsonpgif-experte-app"]=this["webpackJsonpgif-experte-app"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),i=n.n(c),r=(n(15),n(2)),s=n(9),d=n(0),u=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(r.a)(n,2),i=c[0],u=c[1];return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(s.a)(e))})),u(""))},className:"animate__animated animate__fadeIn",children:[Object(d.jsx)("input",{type:"text",placeholder:"Write It",value:i,onChange:function(e){u(e.target.value)}}),Object(d.jsx)("div",{className:"line"})]})},o=function(){return Object(d.jsxs)("div",{className:"created",children:[Object(d.jsx)("h3",{children:"Created By "}),Object(d.jsx)("a",{href:"https://www.instagram.com/b_trianap/",children:"Brandon"})]})},j=n(10),l=n(6),m=n.n(l),b=n(8),f=function(){var e=Object(b.a)(m.a.mark((function e(t){var n,a,c,i,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=cnrc6Ly55FQH0sinLkWRFXceFQ6fJwuz"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,i=c.data,r=i.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.title,n=e.url;return Object(d.jsxs)("div",{className:"card animate__animated animate__fadeInDown",children:[Object(d.jsx)("img",{src:n,alt:t}),Object(d.jsx)("p",{children:t})]})},p=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(r.a)(t,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){setTimeout((function(){i({data:e,loading:!1})}),3e3)}))}),[e]),c}(t),c=n.data,i=n.loading;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"titleCategory animate__animated animate__slideInLeft",children:Object(d.jsx)("h3",{children:t})}),i&&Object(d.jsx)("p",{className:"loading animate__animated animate__flash animate__repeat-3",children:"Loading..."}),Object(d.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(d.jsx)(h,Object(j.a)({},e),e.id)}))})]})},O=function(){var e=Object(a.useState)(["Hello Word!"]),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"header animate__animated animate__slideInDown",children:Object(d.jsx)("h2",{children:"Your Gifs"})}),Object(d.jsx)(u,{setCategories:c}),Object(d.jsx)("div",{className:"containerGridCards",children:n.map((function(e){return Object(d.jsx)(p,{category:e},e)}))}),Object(d.jsx)(o,{})]})};i.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b015b093.chunk.js.map