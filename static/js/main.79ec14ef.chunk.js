(this.webpackJsonpdevdesk_front_end=this.webpackJsonpdevdesk_front_end||[]).push([[0],{124:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(43),l=a.n(c),o=(a(87),a(12)),s=a(9),i=a(125),m=a(126),u=a(127),E=a(128),d=a(134),p=a(133),b=a(129),_=a(17),T=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement(i.a,{tabs:!0},r.a.createElement(m.a,null,r.a.createElement(u.a,{href:"./",active:!0},"Home")),r.a.createElement(E.a,{nav:!0,isOpen:a,toggle:function(){return c(!a)}},r.a.createElement(d.a,{nav:!0,caret:!0},"Menu"),r.a.createElement(p.a,null,r.a.createElement(b.a,{tag:_.b,to:"/login"},"Login"),r.a.createElement(b.a,{tag:_.b,to:"/create_account"},"Create Account"),r.a.createElement(b.a,{tag:_.b,to:"/new_ticket"},"Create New Ticket"),r.a.createElement(b.a,{tag:_.b,to:"/view_tickets"},"View Open Tickets"))),r.a.createElement("h2",{className:"logo"},"DevDesk Queue")))},O=a(19),h=a(35),g=a(16),S=a(28),f=a.n(S),j=function(){var e=localStorage.getItem("token");return f.a.create({baseURL:"https://devdesklambda.herokuapp.com/api",headers:{Authorization:"Bearer ".concat(e)}})},C=g.b().shape({username:g.c().required("Please enter a valid username"),password:g.c().required("Please enter a valid password"),authLevel:g.c().oneOf(["Student","Administrator"])}),v=function(){var e,t,a=Object(n.useState)({username:"",password:"",authLevel:""}),c=Object(s.a)(a,2),l=(c[0],c[1],Object(O.c)({resolver:Object(h.a)(C)})),i=l.register,m=l.handleSubmit,u=l.errors;return r.a.createElement("form",{onSubmit:m((function(e){j().post("/auth/login",e).then((function(e){return console.log("MJM: Login.js: Response from Login",e),localStorage.setItem("token",e.data.token),r.a.createElement(o.a,{to:"/view_tickets"})})).catch((function(e){return console.error("mjm: Login.js: login: err.message: ",e.message)}))}))},r.a.createElement("label",{htmlFor:"username"}),r.a.createElement("input",{placeholder:"Username",id:"username",name:"username","data-cy":"username",type:"text",ref:i({required:!0})}),r.a.createElement("p",null,null===(e=u.username)||void 0===e?void 0:e.message),r.a.createElement("label",{htmlFor:"password"}),r.a.createElement("input",{placeholder:"Password",id:"password",name:"password","data-cy":"password",type:"password",ref:i({required:!0})}),r.a.createElement("p",null,null===(t=u.password)||void 0===t?void 0:t.message),r.a.createElement("label",{htmlFor:"authLevel"},"Login As:"),r.a.createElement("select",{id:"authLevel",name:"authLevel","data-cy":"authLevel",ref:i({})},r.a.createElement("option",null,"Student"),r.a.createElement("option",null,"Administrator")),r.a.createElement("button",{type:"submit","data-cy":"submit"},"Login"))},y=a(37),k=g.b().shape({username:g.c().required("Please enter a valid username"),password:g.c().required("Please enter a valid password"),first_name:g.c().required("Please enter your first name"),last_name:g.c().required("Please enter your last name")}),I=function(e){var t,a,n,c,l=Object(O.c)({resolver:Object(h.a)(k)}),o=l.register,s=l.handleSubmit,i=l.errors;return r.a.createElement("form",{onSubmit:s((function(e){f.a.post("https://devdesklambda.herokuapp.com/api/auth/register",e).then((function(e){console.log("MJM : Create Ticket : Successful",e)})).catch((function(e){console.log("MJM : Create Ticket : Err",e.response)}))}))},r.a.createElement("label",{htmlFor:"username"}),r.a.createElement("input",{placeholder:"Username",id:"username",name:"username","data-cy":"username",type:"text",ref:o({required:!0})}),r.a.createElement("p",null,null===(t=i.username)||void 0===t?void 0:t.message),r.a.createElement("label",{htmlFor:"first_name"}),r.a.createElement("input",{placeholder:"First Name",id:"first_name",name:"first_name","data-cy":"first_name",type:"text",ref:o({required:!0})}),r.a.createElement("p",null,null===(a=i.last_name)||void 0===a?void 0:a.message),r.a.createElement("label",{htmlFor:"last_name"}),r.a.createElement("input",{placeholder:"Last Name",id:"last_name",name:"last_name","data-cy":"last_name",type:"text",ref:o({required:!0})}),r.a.createElement("p",null,null===(n=i.last_name)||void 0===n?void 0:n.message),r.a.createElement("label",{htmlFor:"password"}),r.a.createElement("input",{placeholder:"Password",id:"password",name:"password","data-cy":"password",type:"password",ref:o({required:!0})}),r.a.createElement("p",null,null===(c=i.password)||void 0===c?void 0:c.message),r.a.createElement("label",{htmlFor:"role"},"Create Account For:"),r.a.createElement("select",{id:"role",name:"role","data-cy":"role",ref:o({})},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2")),r.a.createElement("button",{type:"submit","data-cy":"submit"},"Create"))},L=a(4),A=g.b().shape({title:g.c().required("Please enter a title"),description:g.c().required("Please enter a description"),steps_taken:g.c().required("Please enter steps you have taken to resolve the issue yourself"),category:g.c().oneOf(["HTML","CSS","Less / Sass","Javascript","React","IDE Issues","Other"]).required("Please Select a Category"),status:g.c(),creator_id:g.a()}),w=function(){var e,t,a,c=Object(n.useState)({title:"",description:"",steps_taken:"",category:"",status:"Open",creator_id:1}),l=Object(s.a)(c,2),o=l[0],i=l[1];console.log(o);var m=Object(O.c)({resolver:Object(h.a)(A)}),u=m.register,E=m.handleSubmit,d=m.errors;console.log(d);return r.a.createElement("form",{onSubmit:E((function(e){var t=Object(L.a)(Object(L.a)({},o),e);j().post("/tickets/submit",t).then((function(e){console.log(t),i({title:"",description:"",steps_taken:"",category:"",status:"Open",creator_id:1})})).catch((function(e){return console.log("SUBMIT ERROR: ",e.response)}))}))},r.a.createElement("label",{htmlFor:"title"}),r.a.createElement("input",{placeholder:"Title",id:"title",name:"title","data-cy":"title",type:"text",ref:u({required:!0})}),r.a.createElement("p",null,null===(e=d.title)||void 0===e?void 0:e.message),r.a.createElement("label",{htmlFor:"description"}),r.a.createElement("textarea",{placeholder:"Description",id:"description",name:"description","data-cy":"description",type:"text",ref:u({required:!0})}),r.a.createElement("p",null,null===(t=d.description)||void 0===t?void 0:t.message),r.a.createElement("label",{htmlFor:"steps_taken"}),r.a.createElement("textarea",{placeholder:"I've tried...",id:"steps_taken",name:"steps_taken","data-cy":"steps_taken",type:"text",ref:u({required:!0})}),r.a.createElement("p",null,null===(a=d.steps_taken)||void 0===a?void 0:a.message),r.a.createElement("label",{htmlFor:"category"},"Category:"),r.a.createElement("select",{id:"category",name:"category","data-cy":"category",ref:u({})},r.a.createElement("option",null,"--Select a Category--"),r.a.createElement("option",null,"HTML"),r.a.createElement("option",null,"CSS"),r.a.createElement("option",null,"Less / Sass"),r.a.createElement("option",null,"Javascript"),r.a.createElement("option",null,"React"),r.a.createElement("option",null,"IDE Issues"),r.a.createElement("option",null,"Other")),r.a.createElement("button",{type:"submit","data-cy":"submit"},"Submit"))},F=a(130),R=function(){var e=Object(o.g)().params,t=Object(n.useState)({comment:"",user_id:e.creator_id,ticket_id:e.ticket_id}),a=Object(s.a)(t,2),c=a[0],l=a[1],i=Object(O.c)({}),m=i.register,u=i.handleSubmit;i.errors;return r.a.createElement("form",{onSubmit:u((function(t){var a=Object(L.a)(Object(L.a)({},c),{},{comment:t});j().post("/tickets/submit/comment",a).then((function(t){console.log(t),l({comments:"",user_id:e.creator_id,ticket_id:e.ticket_id})})).catch((function(e){return console.log("SUBMIT COMMENT ERROR: ",e.response)}))}))},r.a.createElement("label",{htmlFor:"comment"},"New Comments"),r.a.createElement("textarea",{id:"comment",name:"comment",type:"text",ref:m({required:!1})}),r.a.createElement("button",{type:"submit"},"Submit"))},D=a(73),U=Object(y.b)((function(e){return{tickets:e.tickets}}),{getAllTickets:function(){return function(e){e({type:"FETCH_ALL_TICKETS"}),j().get("/tickets").then((function(t){e({type:"FETCH_ALL_TICKETS_FAILURE",payload:t.data}),console.log(t,"MJM: Index.js: Get Data")})).catch((function(t){e({type:"FETCH_ALL_TICKETS_SUCCESS",payload:t.response}),console.log(t.response,"MJM: Index.js: Err")}))}}})((function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],l=a[1];console.log("TICKES: ",c);return Object(n.useEffect)((function(){j().get("/tickets").then((function(e){l(e.data),console.log("RESPONSE FOR TICKETS: ",e)})).catch((function(e){console.log("ERROR: ",e)}))}),[]),r.a.createElement(F.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Ticket ID"),r.a.createElement("th",null,"Category"),r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Steps Taken"),r.a.createElement("th",null,"Creator"),r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"Comments"))),c.map((function(e){return r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},e.id),r.a.createElement("td",null,e.category),r.a.createElement("td",null,e.title),r.a.createElement("td",null,e.description),r.a.createElement("td",null,e.steps_taken),r.a.createElement("td",null,e.creator_id),r.a.createElement("td",null,e.status),r.a.createElement("td",null,r.a.createElement(D.a,{tag:_.b,to:"/new_comments/".concat(e.id,"/").concat(e.creator_id)},"New"),r.a.createElement(D.a,{tag:_.b,to:"/view_comments/".concat(e.id,"/").concat(e.creator_id)},"View"))))})))})),K=a(131),P=a(132),q=function(){var e=Object(o.g)().params;console.log("TICKET: ",e);var t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){j().get("/tickets/comments").then((function(e){l(e.data)})).catch((function(e){console.log("ERROR: ",e)}))}),[]),console.log("COMMENTS: ",c),r.a.createElement(K.a,null,c.map((function(e){return r.a.createElement(P.a,null,"Ticket ID: ",e.ticket_id," --- Comment:",e.comment)})))},H=a(81),M=function(e){var t=e.component,a=Object(H.a)(e,["component"]);return r.a.createElement(o.b,Object.assign({},a,{render:function(e){return localStorage.getItem("token")?r.a.createElement(t,e):r.a.createElement(o.a,{to:"/login"})}}))};var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(T,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:v}),r.a.createElement(o.b,{path:"/login",component:v}),r.a.createElement(o.b,{path:"/create_account",component:I}),r.a.createElement(M,{path:"/new_ticket",component:w}),r.a.createElement(M,{path:"/view_tickets",component:U}),r.a.createElement(M,{path:"/new_comments/:ticket_id/:creator_id",component:R}),r.a.createElement(M,{path:"/view_comments/:ticket_id/:creator_id",component:q})))},x=(a(123),a(41)),J=a(80),V={ticket:[],error:null};function B(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL_TICKETS":return Object(L.a)({},e);case"FETCH_ALL_TICKETS_FAILURE":return Object(L.a)(Object(L.a)({},e),{},{ticket:t.payload});case"FETCH_ALL_TICKETS_SUCCESS":return Object(L.a)(Object(L.a)({},e),{},{error:t.payload});case"FETCH_RESOLVED_TICKET":return Object(L.a)({},e);case"FETCH_RESOLVED_TICKET_SUCCESS":return Object(L.a)(Object(L.a)({},e),{},{ticket:t.payload});case"FETCH_RESOLVED_TICKET_FAILURE":return Object(L.a)(Object(L.a)({},e),{},{error:t.payload});case"FETCH_UNRESOLVED_TICKET":return Object(L.a)({},e);case"FETCH_UNRESOLVED_TICKET_SUCCESS":return Object(L.a)(Object(L.a)({},e),{},{ticket:t.payload});case"FETCH_UNRESOLVED_TICKET_FAILURE":return Object(L.a)(Object(L.a)({},e),{},{error:t.payload});case"HELP_TICKET_DATA":return Object(L.a)({},e);case"HELP_TICKET_DATA_SUCCESS":return Object(L.a)(Object(L.a)({},e),{},{ticket:t.payload});case"HELP_TICKET_DATA_FAILURE":return Object(L.a)(Object(L.a)({},e),{},{error:t.payload});case"UNHELP_TICKET_DATA":return Object(L.a)({},e);case"UNHELP_TICKET_DATA_FAILURE":return Object(L.a)(Object(L.a)({},e),{},{error:t.payload});case"POST_NEW_TICKET":return Object(L.a)({},e);case"POST_NEW_TICKET_SUCCESS":return Object(L.a)(Object(L.a)({},e),{},{ticket:t.payload});case"POST_NEW_TICKET_FAILURE":return Object(L.a)(Object(L.a)({},e),{},{error:t.payload});case"DELETE_TICKET_DATA":return Object(L.a)({},e);case"DELETE_TICKET_DATA_SUCCESS":return Object(L.a)(Object(L.a)({},e),{},{ticket:t.payload});case"DELETE_TICKET_DATA_FAILURE":return Object(L.a)(Object(L.a)({},e),{},{error:t.payload});case"UPDATE_TICKET_DATA":return Object(L.a)({},e);case"UPDATE_TICKET_DATA_SUCCESS":return Object(L.a)(Object(L.a)({},e),{},{ticket:t.payload});case"UPDATE_TICKET_DATA_FAILURE":return Object(L.a)(Object(L.a)({},e),{},{error:t.payload});default:return e}}var W=Object(x.c)(B,Object(x.a)(J.a));l.a.render(r.a.createElement(y.a,{store:W},r.a.createElement(_.a,null,r.a.createElement(N,null))),document.getElementById("root"))},82:function(e,t,a){e.exports=a(124)},87:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.79ec14ef.chunk.js.map