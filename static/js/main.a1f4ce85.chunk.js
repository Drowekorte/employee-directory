(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),s=n(13),a=n.n(s),i=n(4),l=n.n(i),o=n(14),j=n(15),h=n(16),m=n(19),d=n(18),u=(n(25),n(0));var b=function(){return Object(u.jsx)("h1",{className:"header",children:"Employee Directory "})};var p=function(e){return Object(u.jsx)("form",{children:Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(u.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search for an employee",id:"search"}),Object(u.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-primary mt-3",children:"Search"})]})})};n(27);var O=function(){return Object(u.jsx)("table",{className:"tableHead",children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:Object(u.jsx)("strong",{})}),Object(u.jsx)("th",{children:Object(u.jsx)("strong",{children:"Name"})}),Object(u.jsx)("th",{children:Object(u.jsx)("strong",{children:"Email"})}),Object(u.jsx)("th",{children:Object(u.jsx)("strong",{children:"Phone"})})]})})};n(28);var x=function(e){return Object(u.jsx)("table",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("img",{className:"employeePhoto",src:e.image,alt:e.name})}),Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:e.email}),Object(u.jsx)("td",{children:e.phone})]})})},f=n(17),y=n.n(f),v=function(){return y.a.get("https://randomuser.me/api/?results=200&nat=us")},g=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={search:"",employees:[]},e.getEmployees=Object(o.a)(l.a.mark((function t(){var n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:n=t.sent,c=n.data,e.setState({employees:c.results}),console.log("updated state employees: ",e.state.employees);case 6:case"end":return t.stop()}}),t)}))),e.filterEmployees=function(t){return!!t.name.includes(e.state.search)||(!!t.email.includes(e.state.search)||void 0)},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getEmployees()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"container-lg",children:[Object(u.jsx)(b,{}),Object(u.jsx)("div",{children:Object(u.jsx)(p,{search:this.state.search})}),Object(u.jsx)(O,{}),Object(u.jsx)("div",{children:this.state.employees.map((function(e){return Object(u.jsx)(x,{image:e.picture.medium,name:e.name.first+" "+e.name.last,phone:e.phone,email:e.email},Math.random())}))})]})}}]),n}(r.a.Component);n(47);a.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.a1f4ce85.chunk.js.map