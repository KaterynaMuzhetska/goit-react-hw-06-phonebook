(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={contactListItem:"contactListItem_contactListItem__3W0wA",contact:"contactListItem_contact__3hYuo",buttonDelete:"contactListItem_buttonDelete__3uLoy"}},12:function(t,e,n){t.exports={container:"App_container__1MJfK",title:"App_title__6E8Y8",subtitle:"App_subtitle__24Uei"}},17:function(t,e,n){t.exports={filterLabel:"filter_filterLabel__aO0Vc",filterInput:"filter_filterInput__a8ibb"}},21:function(t,e,n){t.exports={contactList:"contactList_contactList__t8Ev9"}},46:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),i=n(3),s=n(19),l=n(18),u=n(20),b=n.n(u),m=n(4),j={addContact:Object(m.b)("contacts/add",(function(t){var e=t.name,n=t.number;return{payload:{id:b.a.generate(),name:e,number:n}}})),deleteContact:Object(m.b)("contacts/delete"),changeFilter:Object(m.b)("contacts/changeFilter")},d=function(t){return t.contacts.items},f=function(t){return t.contacts.filter},O=function(t){var e=d(t),n=f(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},p=n(6),_=n.n(p),h=n(1);function x(){var t=Object(i.c)(d),e=Object(i.b)(),n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),u=Object(l.a)(s,2),b=u[0],m=u[1],f=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":m(a);break;default:return}};return Object(h.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),a=r,t.some((function(t){return t.name===a})))return alert("".concat(r," is already in contacts!")),o(""),void m("");var a;e(j.addContact({name:r,number:b})),o(""),m("")},className:_.a.form,children:[Object(h.jsxs)("label",{className:_.a.formLabel,children:["Name",Object(h.jsx)("input",{className:_.a.formInput,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:f})]}),Object(h.jsxs)("label",{className:_.a.formLabel,children:["Number",Object(h.jsx)("input",{className:_.a.formInput,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:b,onChange:f})]}),Object(h.jsx)("button",{type:"submit",className:_.a.buttonSubmit,children:"Add contact"})]})}var v,C=n(11),L=n.n(C),g=function(t){var e=t.name,n=t.number,a=t.id,c=t.onDeletContact;return Object(h.jsxs)("li",{className:L.a.contactListItem,children:[Object(h.jsxs)("p",{className:L.a.contact,children:[" ",e,": ",n]}),Object(h.jsx)("button",{className:L.a.buttonDelete,type:"button",onClick:function(){return c(a)},children:"Delete"})]})},N=n(21),y=n.n(N),I=function(){var t=Object(i.c)(O),e=Object(i.b)();return Object(h.jsx)("ul",{className:y.a.contactList,children:t.map((function(t){var n=t.id,a=t.name,c=t.number;return Object(h.jsx)(g,{id:n,name:a,number:c,onDeletContact:function(){return function(t){return e(j.deleteContact(t))}(n)}},n)}))})},k=n(17),A=n.n(k),w=function(){var t=Object(i.c)(f),e=Object(i.b)();return Object(h.jsxs)("label",{className:A.a.filterLabel,children:["Find contacts by name",Object(h.jsx)("input",{className:A.a.filterInput,type:"text",name:"filter",value:t,onChange:function(t){return e(j.changeFilter(t.target.value))}})]})},F=n(12),D=n.n(F),S=function(){return Object(h.jsxs)("div",{className:D.a.container,children:[Object(h.jsx)("h1",{className:D.a.title,children:"Phonebook"}),Object(h.jsx)(x,{}),Object(h.jsx)("h2",{className:D.a.subtitle,children:"Contacts"}),Object(h.jsx)(w,{}),Object(h.jsx)(I,{})]})},z=n(22),J=n.n(z),q=n(5),E=n(23),M=n.n(E),Y=n(13),Z=n(24),B=n(2),K=Object(m.c)([],(v={},Object(Y.a)(v,j.addContact,(function(t,e){var n=e.payload;return[].concat(Object(Z.a)(t),[n])})),Object(Y.a)(v,j.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),v)),P=Object(m.c)("",Object(Y.a)({},j.changeFilter,(function(t,e){return e.payload}))),T=Object(B.b)({items:K,filter:P}),U={key:"contacts",storage:M.a,blacklist:["filter"]},V=Object(m.a)({reducer:{contacts:Object(q.g)(U,T)},middleware:function(t){return t({serializableCheck:{ignoredActions:[q.a,q.f,q.b,q.c,q.d,q.e]}}).concat(J.a)},devTools:!1}),W={store:V,persistor:Object(q.h)(V)};n(45);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(i.a,{store:W.store,children:Object(h.jsx)(s.a,{loading:null,persistor:W.persistor,children:Object(h.jsx)(S,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={form:"ContactForm_form__3quff",formLabel:"ContactForm_formLabel__3xCeI",formInput:"ContactForm_formInput__2vY22",buttonSubmit:"ContactForm_buttonSubmit__1ghy0"}}},[[46,1,2]]]);
//# sourceMappingURL=main.a294b44c.chunk.js.map