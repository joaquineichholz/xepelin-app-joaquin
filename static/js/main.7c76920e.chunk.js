(this["webpackJsonpjoaquin-app"]=this["webpackJsonpjoaquin-app"]||[]).push([[0],{56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},86:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(36),r=n.n(c),s=(n(56),n(57),n(10)),i=(n(58),n(13)),u=n(1);function o(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(s.a)(r,2),j=o[0],h=o[1];return Object(u.jsxs)("div",{className:"login",children:[Object(u.jsx)("h1",{children:"Login"}),Object(u.jsxs)("form",{method:"post",children:[Object(u.jsx)("input",{type:"text",name:"u",placeholder:"Username",required:"required",value:n,onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("input",{type:"password",name:"p",placeholder:"Password",required:"required",value:j,onChange:function(e){return h(e.target.value)}}),Object(u.jsx)(i.b,{to:"/home",children:Object(u.jsx)("button",{type:"submit",class:"btn btn-primary btn-block btn-large",disabled:!(n.length>0&&j.length>0&&n.includes("@")),children:"Login"})})]})]})}var j=n(39),h=n(11),b=n.n(h),d=n(19),l=n(24),p=n.n(l),O=n(93);n(86);function f(){var e=Object(a.useState)("https://sheet.best/api/sheets/cf930ffe-549e-42d6-a409-7ab7ddab2ba7"),t=Object(s.a)(e,1)[0],n=Object(a.useState)("https://hooks.zapier.com/hooks/catch/6872019/oahrt5g/"),c=Object(s.a)(n,1)[0],r=Object(a.useState)([]),i=Object(s.a)(r,2),o=i[0],h=i[1];Object(a.useEffect)(Object(d.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()({url:t});case 2:n=e.sent,h(n.data);case 4:case"end":return e.stop()}}),e)}))),[]);var l=function(e){return function(t){var n=Object(j.a)(o);t.target.value;n[e].Tasa=t.target.value,h(n),function(e,t){f.apply(this,arguments)}(e,n[e]),function(e){x.apply(this,arguments)}(e)}};function f(){return(f=Object(d.a)(b.a.mark((function e(n,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return fetch(t+"/"+n,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){e.json()})).catch(console.error),e.abrupt("return");case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(d.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={idOp:o[t]["id Op"],tasa:o[t].Tasa,email:o[t].Email},e.next=3,p.a.post(c,JSON.stringify(n));case 3:return e.sent,e.abrupt("return");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.jsxs)(O.a,{fluid:!0,className:"container",children:[Object(u.jsx)("h1",{children:" Sheet "}),Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Id"}),Object(u.jsx)("th",{children:" Tasa"}),Object(u.jsx)("th",{children:"Email"})]})}),Object(u.jsxs)("tbody",{children:[o.map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{children:[" ",e["id Op"]," "]}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"text",name:"name",value:e.Tasa,onChange:l(t)})}),Object(u.jsxs)("td",{children:[" ",e.Email," "]})]},t)})),Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{children:[" ","id Op"]}),Object(u.jsxs)("td",{children:[" ","Tasa"]}),Object(u.jsxs)("td",{children:[" ","Email"]})]},100)]})]})]})}var x=n(2);function m(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(x.a,{exact:!0,path:"/",component:o}),Object(u.jsx)(x.a,{exact:!0,path:"/home",component:f})]})}var v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};r.a.render(Object(u.jsx)(i.a,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),v()}},[[90,1,2]]]);
//# sourceMappingURL=main.7c76920e.chunk.js.map