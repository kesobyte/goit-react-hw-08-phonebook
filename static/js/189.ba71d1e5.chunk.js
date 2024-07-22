"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[189],{5189:function(e,n,t){t.r(n),t.d(n,{default:function(){return Q}});var s=t(2791),a=t(4420),r=t(3050),c=t(9439),o=t(826),i="Filter_searchBox__-wsOO",l=t(1634),d=t(6351),h=t(3628),u=t(184),m=function(){var e=(0,a.I0)(),n=(0,a.v9)(d.AD);return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(h.DebounceInput,{className:i,type:"text",name:"filter",placeholder:"Search by name",value:n,onChange:function(n){e((0,l.T)(n.target.value.trim()))},debounceTimeout:500})})},x=t(3071),j=t(1022),p=t(9055),f=t(990),C=t(8874),v=t(7552),_=t(5473),b=t(634),g=t(6241),z=t(6935),N=t(7943),w=t(6411),B=t(7685),Z="ContactForm_filter__2gQqh",A="ContactForm_addContact__Q30Jz",S="ContactForm_saveButton__Ua4ZN",y="ContactForm_icon__wGMYw",I="ContactForm_inputGroup__DXBcm",F=function(){var e=(0,a.I0)(),n=(0,a.v9)(d.Af),t=(0,s.useState)(""),r=(0,c.Z)(t,2),i=r[0],l=r[1],h=(0,s.useState)(""),F=(0,c.Z)(h,2),T=F[0],k=F[1],E=(0,j.q)(),q=E.isOpen,D=E.onOpen,M=E.onClose;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:Z,children:[(0,u.jsx)(m,{}),(0,u.jsx)(p.z,{onClick:D,colorScheme:"white",className:A,children:"Add Contact"})]}),(0,u.jsxs)(f.u_,{isOpen:q,onClose:M,isCentered:!0,children:[(0,u.jsx)(C.Z,{}),(0,u.jsxs)(v.h,{children:[(0,u.jsx)(_.x,{children:"Add Contact"}),(0,u.jsx)(b.o,{}),(0,u.jsx)(g.f,{children:(0,u.jsxs)("form",{id:"contact-form",onSubmit:function(t){(t.preventDefault(),""!==i.trim()&&""!==T.trim())&&(n.find((function(e){return e.name.toLowerCase()===i.toLowerCase()}))?alert("".concat(i," is already in contacts.")):(e((0,o.uK)({name:i,number:T})),l(""),k(""),M()))},children:[(0,u.jsxs)("label",{children:[(0,u.jsx)("p",{children:"Name"}),(0,u.jsxs)(z.B,{className:I,children:[(0,u.jsx)(N.Z,{pointerEvents:"none",children:(0,u.jsx)(x.Xws,{className:y})}),(0,u.jsx)(w.I,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",required:!0,value:i,onChange:function(e){l(e.target.value)},focusBorderColor:"#5046e5",placeholder:"Enter contact name"})]})]}),(0,u.jsxs)("label",{children:[(0,u.jsx)("p",{children:"Number"}),(0,u.jsxs)(z.B,{className:I,children:[(0,u.jsx)(N.Z,{children:(0,u.jsx)(x.I7T,{className:y})}),(0,u.jsx)(w.I,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:T,onChange:function(e){k(e.target.value)},focusBorderColor:"#5046e5",placeholder:"Enter contact number"})]})]})]})}),(0,u.jsxs)(B.m,{children:[(0,u.jsx)(p.z,{colorScheme:"white",mr:3,type:"submit",form:"contact-form",className:S,children:"Save"}),(0,u.jsx)(p.z,{variant:"ghost",onClick:M,children:"Cancel"})]})]})]})]})},T=t(8733),k=t(5606),E={deleteBtn:"ContactListItem_deleteBtn__-+XMY"},q=function(e){var n=e.filteredContact,t=(0,a.I0)(),r=(0,a.v9)(d.Af),i=(0,s.useState)(!1),l=(0,c.Z)(i,2),h=l[0],m=l[1],j=(0,s.useState)(n.name),f=(0,c.Z)(j,2),C=f[0],v=f[1],_=(0,s.useState)(n.number),b=(0,c.Z)(_,2),g=b[0],B=b[1],Z=function(){m(!h)};return(0,u.jsxs)(T.Tr,{children:[(0,u.jsx)(k.Td,{children:h?(0,u.jsxs)(z.B,{className:E.inputGroup,children:[(0,u.jsx)(N.Z,{pointerEvents:"none",children:(0,u.jsx)(x.Xws,{className:E.icon})}),(0,u.jsx)(w.I,{htmlSize:15,width:"auto",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",required:!0,value:C,onChange:function(e){return v(e.target.value)},focusBorderColor:"#5046e5",placeholder:"Enter contact name"})]}):n.name}),(0,u.jsx)(k.Td,{children:h?(0,u.jsxs)(z.B,{className:E.inputGroup,children:[(0,u.jsx)(N.Z,{pointerEvents:"none",children:(0,u.jsx)(x.I7T,{className:E.icon})}),(0,u.jsx)(w.I,{htmlSize:15,width:"auto",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:g,onChange:function(e){return B(e.target.value)},focusBorderColor:"#5046e5",placeholder:"Enter contact number"})]}):n.number}),(0,u.jsx)(k.Td,{children:h?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(p.z,{size:"sm",colorScheme:"blue",onClick:function(){r.find((function(e){return e.name.toLowerCase()===C.toLowerCase()&&e.id!==n.id}))?alert("".concat(C," is already in contacts.")):(t((0,o.mP)({contactId:n.id,contact:{name:C,number:g}})),m(!1))},className:E.saveBtn,children:"Save"}),(0,u.jsx)(p.z,{size:"sm",variant:"ghost",onClick:Z,children:"Cancel"})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(p.z,{size:"sm",colorScheme:"red",onClick:function(){t((0,o.GK)(n.id))},className:E.deleteBtn,children:"Delete"}),(0,u.jsx)(p.z,{size:"sm",colorScheme:"blue",onClick:Z,className:E.editBtn,children:"Edit"})]})})]})},D=t(8016),M=function(){return(0,u.jsx)(D.Z,{color:"#5046e5",size:12,speedMultiplier:1})},G=t(824),L=t(1813),O=t(1364),P=t(5802),X=t(7588),J=t(2940),U=function(){var e=(0,a.v9)(d.DI),n=(0,a.v9)(d.zh),t=(0,a.v9)(d.xU),r=(0,a.I0)();return(0,s.useEffect)((function(){r((0,o.yF)())}),[r]),(0,u.jsxs)(G.xu,{className:"css.status",children:[t&&!n&&(0,u.jsx)(M,{}),!t&&!n&&0===e.length&&(0,u.jsx)("p",{children:"No contacts found."}),!t&&!n&&e.length>0&&(0,u.jsx)(L.x,{children:(0,u.jsxs)(O.i,{variant:"striped",size:"md",children:[(0,u.jsx)(P.h,{children:(0,u.jsxs)(T.Tr,{children:[(0,u.jsx)(X.Th,{children:"Name"}),(0,u.jsx)(X.Th,{children:"Number"}),(0,u.jsx)(X.Th,{children:"Actions"})]})}),(0,u.jsx)(J.p,{children:e.map((function(e){return(0,u.jsx)(q,{filteredContact:e},e.id)}))})]})})]})},K="ContactsPage_container__MolT3",Q=function(){var e=(0,a.I0)(),n=(0,a.v9)(d.xU);return(0,s.useEffect)((function(){e((0,o.yF)())}),[e]),(0,u.jsxs)(r.B6,{children:[(0,u.jsx)(r.ql,{children:(0,u.jsx)("title",{children:"Contacts"})}),(0,u.jsxs)("div",{className:K,children:[(0,u.jsx)(F,{}),(0,u.jsx)("div",{children:n&&"Request in progress..."}),(0,u.jsx)("h2",{children:"Contacts"}),(0,u.jsx)(U,{})]})]})}}}]);
//# sourceMappingURL=189.ba71d1e5.chunk.js.map