(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[934],{7934:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ee}});var r=n(2791),o=n(4420),a=n(3050),i=n(9439),c=n(826),s="Filter_searchBox__-wsOO",u=n(1634),l=n(6351),f=n(3628),d=n(184),p=function(){var e=(0,o.I0)(),t=(0,o.v9)(l.AD);return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(f.DebounceInput,{className:s,type:"text",name:"filter",placeholder:"Search by name",value:t,onChange:function(t){e((0,u.T)(t.target.value.trim()))},debounceTimeout:500})})},m=n(2202),h=n(1413);function v(e,t){var n=(0,r.useId)();return(0,r.useMemo)((function(){return e||[t,n].filter(Boolean).join("-")}),[e,t,n])}function y(e,t){var n=void 0!==e;return[n,n&&"undefined"!==typeof e?e:t]}function b(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}var j=b()?r.useLayoutEffect:r.useEffect;function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=(0,r.useRef)(e);return j((function(){n.current=e})),(0,r.useCallback)((function(){for(var e,t,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return null==(t=n.current)?void 0:(e=t).call.apply(e,[n].concat(o))}),t)}var g=n(1765);var _=n(9055),C=n(990),w=n(8874),N=n(7552),Z=n(5473),O=n(5987),k=n(4934),S=n(6992),B=n(5597),D=["onClick","className"],E=(0,B.G)((function(e,t){var n=e.onClick,r=e.className,o=(0,O.Z)(e,D),a=(0,C.vR)().onClose,i=(0,S.cx)("chakra-modal__close-btn",r),c=(0,C.I_)();return(0,d.jsx)(k.P,(0,h.Z)({ref:t,__css:c.closeButton,className:i,onClick:(0,S.v0)(n,(function(e){e.stopPropagation(),a()}))},o))}));E.displayName="ModalCloseButton";var P=n(6241),I=n(9891),T=n(7943),z=n(7236),L=n(7685),A="ContactForm_filter__2gQqh",F="ContactForm_addContact__Q30Jz",G="ContactForm_saveButton__Ua4ZN",M="ContactForm_icon__wGMYw",R="ContactForm_inputGroup__DXBcm",K=function(){var e=(0,o.I0)(),t=(0,o.v9)(l.Af),n=(0,r.useState)(""),a=(0,i.Z)(n,2),s=a[0],u=a[1],f=(0,r.useState)(""),b=(0,i.Z)(f,2),j=b[0],O=b[1],k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onClose,n=e.onOpen,o=e.isOpen,a=e.id,c=x(n),s=x(t),u=(0,r.useState)(e.defaultIsOpen||!1),l=(0,i.Z)(u,2),f=l[0],d=l[1],p=y(o,f),m=(0,i.Z)(p,2),b=m[0],j=m[1],_=v(a,"disclosure"),C=(0,r.useCallback)((function(){b||d(!1),null==s||s()}),[b,s]),w=(0,r.useCallback)((function(){b||d(!0),null==c||c()}),[b,c]),N=(0,r.useCallback)((function(){(j?C:w)()}),[j,w,C]);return{isOpen:!!j,onOpen:w,onClose:C,onToggle:N,isControlled:b,getButtonProps:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,h.Z)((0,h.Z)({},e),{},{"aria-expanded":j,"aria-controls":_,onClick:(0,g.v0)(e.onClick,N)})},getDisclosureProps:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,h.Z)((0,h.Z)({},e),{},{hidden:!j,id:_})}}}(),S=k.isOpen,B=k.onOpen,D=k.onClose;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:A,children:[(0,d.jsx)(_.z,{onClick:B,colorScheme:"white",className:F,children:"Add Contact"}),(0,d.jsx)(p,{})]}),(0,d.jsxs)(C.u_,{isOpen:S,onClose:D,isCentered:!0,children:[(0,d.jsx)(w.Z,{}),(0,d.jsxs)(N.h,{children:[(0,d.jsx)(Z.x,{children:"Add Contact"}),(0,d.jsx)(E,{}),(0,d.jsx)(P.f,{children:(0,d.jsxs)("form",{id:"contact-form",onSubmit:function(n){(n.preventDefault(),""!==s.trim()&&""!==j.trim())&&(t.find((function(e){return e.name.toLowerCase()===s.toLowerCase()}))?alert("".concat(s," is already in contacts.")):(e((0,c.uK)({name:s,number:j})),u(""),O(""),D()))},children:[(0,d.jsxs)("label",{children:[(0,d.jsx)("p",{children:"Name"}),(0,d.jsxs)(I.B,{className:R,children:[(0,d.jsx)(T.Z,{pointerEvents:"none",children:(0,d.jsx)(m.Xws,{className:M})}),(0,d.jsx)(z.I,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",required:!0,value:s,onChange:function(e){u(e.target.value)},focusBorderColor:"#5046e5",placeholder:"Enter contact name",mb:5})]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("p",{children:"Number"}),(0,d.jsxs)(I.B,{className:R,children:[(0,d.jsx)(T.Z,{children:(0,d.jsx)(m.I7T,{className:M})}),(0,d.jsx)(z.I,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:j,onChange:function(e){O(e.target.value)},focusBorderColor:"#5046e5",placeholder:"Enter contact number"})]})]})]})}),(0,d.jsxs)(L.m,{children:[(0,d.jsx)(_.z,{colorScheme:"white",mr:3,type:"submit",form:"contact-form",className:G,children:"Save"}),(0,d.jsx)(_.z,{variant:"ghost",onClick:D,children:"Cancel"})]})]})]})]})},q=n(2481),X=n(2996),U=n(5113),Y=n(9886),$=["className","layout"],J=(0,Y.k)({name:"TableStylesContext",errorMessage:"useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" "}),Q=(0,i.Z)(J,2),W=Q[0],H=Q[1],V=(0,B.G)((function(e,t){var n=(0,q.jC)("Table",e),r=(0,X.Lr)(e),o=r.className,a=r.layout,i=(0,O.Z)(r,$);return(0,d.jsx)(W,{value:n,children:(0,d.jsx)(U.m.table,(0,h.Z)({ref:t,__css:(0,h.Z)({tableLayout:a},n.table),className:(0,S.cx)("chakra-table",o)},i))})}));V.displayName="Table";var ee=(0,B.G)((function(e,t){var n=H();return(0,d.jsx)(U.m.tr,(0,h.Z)((0,h.Z)({},e),{},{ref:t,__css:n.tr}))})),te=["isNumeric"],ne=(0,B.G)((function(e,t){var n=e.isNumeric,r=(0,O.Z)(e,te),o=H();return(0,d.jsx)(U.m.td,(0,h.Z)((0,h.Z)({},r),{},{ref:t,__css:o.td,"data-is-numeric":n}))})),re=n(6108),oe="ContactListItem_inputGroup__EwYv7",ae="ContactListItem_icon__RyZB1",ie="ContactListItem_saveBtn__9MvzY",ce="ContactListItem_deleteBtn__-+XMY",se="ContactListItem_editBtn__ZfZQc",ue=function(e){var t=e.filteredContact,n=(0,o.I0)(),a=(0,o.v9)(l.Af),s=(0,r.useState)(!1),u=(0,i.Z)(s,2),f=u[0],p=u[1],h=(0,r.useState)(t.name),v=(0,i.Z)(h,2),y=v[0],b=v[1],j=(0,r.useState)(t.number),x=(0,i.Z)(j,2),g=x[0],_=x[1],C=function(){p(!f)};return(0,d.jsxs)(ee,{children:[(0,d.jsx)(ne,{children:f?(0,d.jsxs)(I.B,{className:oe,children:[(0,d.jsx)(T.Z,{pointerEvents:"none",children:(0,d.jsx)(m.Xws,{className:ae})}),(0,d.jsx)(z.I,{htmlSize:15,width:"auto",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",required:!0,value:y,onChange:function(e){return b(e.target.value)},focusBorderColor:"#5046e5",placeholder:"Enter contact name"})]}):t.name}),(0,d.jsx)(ne,{children:f?(0,d.jsxs)(I.B,{className:oe,children:[(0,d.jsx)(T.Z,{pointerEvents:"none",children:(0,d.jsx)(m.I7T,{className:ae})}),(0,d.jsx)(z.I,{htmlSize:15,width:"auto",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:g,onChange:function(e){return _(e.target.value)},focusBorderColor:"#5046e5",placeholder:"Enter contact number"})]}):t.number}),(0,d.jsx)(ne,{children:f?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(re.h,{"aria-label":"Save",icon:(0,d.jsx)(m.TvB,{}),size:"sm",colorScheme:"blue",onClick:function(){a.find((function(e){return e.name.toLowerCase()===y.toLowerCase()&&e.id!==t.id}))?alert("".concat(y," is already in contacts.")):(n((0,c.mP)({contactId:t.id,contact:{name:y,number:g}})),p(!1))},className:ie,mr:2}),(0,d.jsx)(re.h,{"aria-label":"Cancel",icon:(0,d.jsx)(m.aHS,{}),size:"sm",variant:"ghost",onClick:C})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(re.h,{"aria-label":"Delete",icon:(0,d.jsx)(m.AMf,{}),size:"sm",colorScheme:"red",onClick:function(){n((0,c.GK)(t.id))},className:ce,mr:2}),(0,d.jsx)(re.h,{"aria-label":"Edit",icon:(0,d.jsx)(m.fmQ,{}),size:"sm",colorScheme:"blue",onClick:C,className:se})]})})]})},le=n(4942);var fe=n(2554),de=n(1170),pe=["startColor","endColor","isLoaded","fadeDuration","speed","className","fitContent"],me=(0,U.m)("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),he=(0,X.gJ)("skeleton-start-color"),ve=(0,X.gJ)("skeleton-end-color"),ye=(0,fe.F4)({from:{opacity:0},to:{opacity:1}}),be=(0,fe.F4)({from:{borderColor:he.reference,background:he.reference},to:{borderColor:ve.reference,background:ve.reference}}),je=(0,B.G)((function(e,t){var n=(0,h.Z)((0,h.Z)({},e),{},{fadeDuration:"number"===typeof e.fadeDuration?e.fadeDuration:.4,speed:"number"===typeof e.speed?e.speed:.8}),o=(0,q.mq)("Skeleton",n),a=function(){var e=(0,r.useRef)(!0);return(0,r.useEffect)((function(){e.current=!1}),[]),e.current}(),c=(0,X.Lr)(n),s=c.startColor,u=void 0===s?"":s,l=c.endColor,f=void 0===l?"":l,p=c.isLoaded,m=c.fadeDuration,v=c.speed,y=c.className,b=c.fitContent,j=(0,O.Z)(c,pe),x=(0,de.dQ)("colors",[u,f]),g=(0,i.Z)(x,2),_=g[0],C=g[1],w=function(e){var t=(0,r.useRef)();return(0,r.useEffect)((function(){t.current=e}),[e]),t.current}(p),N=(0,S.cx)("chakra-skeleton",y),Z=(0,h.Z)((0,h.Z)({},_&&(0,le.Z)({},he.variable,_)),C&&(0,le.Z)({},ve.variable,C));if(p){var k=a||w?"none":"".concat(ye," ").concat(m,"s");return(0,d.jsx)(U.m.div,(0,h.Z)({ref:t,className:N,__css:{animation:k}},j))}return(0,d.jsx)(me,(0,h.Z)((0,h.Z)({ref:t,className:N},j),{},{__css:(0,h.Z)((0,h.Z)((0,h.Z)({width:b?"fit-content":void 0},o),Z),{},{_dark:(0,h.Z)((0,h.Z)({},o._dark),Z),animation:"".concat(v,"s linear infinite alternate ").concat(be)})}))}));je.displayName="Skeleton";var xe="Loader_loaderContainer__UDDYf",ge=function(){return(0,d.jsxs)("div",{className:xe,children:[(0,d.jsx)(je,{height:"40px",my:"10px"}),(0,d.jsx)(je,{height:"40px",my:"10px"}),(0,d.jsx)(je,{height:"40px",my:"10px"}),(0,d.jsx)(je,{height:"40px",my:"10px"})]})},_e=n(824),Ce=["overflow","overflowX","className"],we=(0,B.G)((function(e,t){var n,r=e.overflow,o=e.overflowX,a=e.className,i=(0,O.Z)(e,Ce);return(0,d.jsx)(U.m.div,(0,h.Z)((0,h.Z)({ref:t,className:(0,S.cx)("chakra-table__container",a)},i),{},{__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:null!=(n=null!=r?r:o)?n:"auto",overflowY:"hidden",maxWidth:"100%"}}))})),Ne=(0,B.G)((function(e,t){var n=H();return(0,d.jsx)(U.m.thead,(0,h.Z)((0,h.Z)({},e),{},{ref:t,__css:n.thead}))})),Ze=["isNumeric"],Oe=(0,B.G)((function(e,t){var n=e.isNumeric,r=(0,O.Z)(e,Ze),o=H();return(0,d.jsx)(U.m.th,(0,h.Z)((0,h.Z)({},r),{},{ref:t,__css:o.th,"data-is-numeric":n}))})),ke=(0,B.G)((function(e,t){var n=H();return(0,d.jsx)(U.m.tbody,(0,h.Z)((0,h.Z)({},e),{},{ref:t,__css:n.tbody}))})),Se=function(){var e=(0,o.v9)(l.DI),t=(0,o.v9)(l.zh),n=(0,o.v9)(l.xU),a=(0,o.I0)();return(0,r.useEffect)((function(){a((0,c.yF)())}),[a]),(0,d.jsxs)(_e.xu,{children:[n&&!t&&(0,d.jsx)(ge,{}),!n&&!t&&0===e.length&&(0,d.jsx)("p",{children:"No contacts found."}),!n&&!t&&e.length>0&&(0,d.jsx)(we,{children:(0,d.jsxs)(V,{variant:"striped",size:"sm",children:[(0,d.jsx)(Ne,{children:(0,d.jsxs)(ee,{children:[(0,d.jsx)(Oe,{children:"Name"}),(0,d.jsx)(Oe,{children:"Number"}),(0,d.jsx)(Oe,{children:"Actions"})]})}),(0,d.jsx)(ke,{children:e.map((function(e){return(0,d.jsx)(ue,{filteredContact:e},e.id)}))})]})})]})},Be="ContactsPage_container__MolT3",De="ContactsPage_header__IHeG+",Ee=function(){var e=(0,o.I0)(),t=(0,o.v9)(l.xU);return(0,r.useEffect)((function(){e((0,c.yF)())}),[e]),(0,d.jsxs)(a.B6,{children:[(0,d.jsx)(a.ql,{children:(0,d.jsx)("title",{children:"Contacts"})}),(0,d.jsxs)("div",{className:Be,children:[(0,d.jsx)("p",{className:De,children:"Contacts"}),(0,d.jsx)(K,{}),(0,d.jsx)("div",{children:t&&""}),(0,d.jsx)(Se,{})]})]})}},5095:function(e,t,n){var r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,u="object"==typeof self&&self&&self.Object===Object&&self,l=s||u||Function("return this")(),f=Object.prototype.toString,d=Math.max,p=Math.min,m=function(){return l.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||i.test(e)?c(e.slice(2),n?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var r,o,a,i,c,s,u=0,l=!1,f=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,a=o;return r=o=void 0,u=t,i=e.apply(a,n)}function j(e){return u=e,c=setTimeout(g,t),l?b(e):i}function x(e){var n=e-s;return void 0===s||n>=t||n<0||f&&e-u>=a}function g(){var e=m();if(x(e))return _(e);c=setTimeout(g,function(e){var n=t-(e-s);return f?p(n,a-(e-u)):n}(e))}function _(e){return c=void 0,y&&r?b(e):(r=o=void 0,i)}function C(){var e=m(),n=x(e);if(r=arguments,o=this,s=e,n){if(void 0===c)return j(s);if(f)return c=setTimeout(g,t),b(s)}return void 0===c&&(c=setTimeout(g,t)),i}return t=v(t)||0,h(n)&&(l=!!n.leading,a=(f="maxWait"in n)?d(v(n.maxWait)||0,t):a,y="trailing"in n?!!n.trailing:y),C.cancel=function(){void 0!==c&&clearTimeout(c),u=0,r=s=o=c=void 0},C.flush=function(){return void 0===c?i:_(m())},C}},6674:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.DebounceInput=void 0;var o=c(n(2791)),a=c(n(5095)),i=["element","onChange","value","minLength","debounceTimeout","forceNotifyByEnter","forceNotifyOnBlur","onKeyDown","onBlur","inputRef"];function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(u,e);var t,n,r,c=p(u);function u(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),y(h(t=c.call(this,e)),"onChange",(function(e){e.persist();var n=t.state.value,r=t.props.minLength;t.setState({value:e.target.value},(function(){var o=t.state.value;o.length>=r?t.notify(e):n.length>o.length&&t.notify(l(l({},e),{},{target:l(l({},e.target),{},{value:""})}))}))})),y(h(t),"onKeyDown",(function(e){"Enter"===e.key&&t.forceNotify(e);var n=t.props.onKeyDown;n&&(e.persist(),n(e))})),y(h(t),"onBlur",(function(e){t.forceNotify(e);var n=t.props.onBlur;n&&(e.persist(),n(e))})),y(h(t),"createNotifier",(function(e){if(e<0)t.notify=function(){return null};else if(0===e)t.notify=t.doNotify;else{var n=(0,a.default)((function(e){t.isDebouncing=!1,t.doNotify(e)}),e);t.notify=function(e){t.isDebouncing=!0,n(e)},t.flush=function(){return n.flush()},t.cancel=function(){t.isDebouncing=!1,n.cancel()}}})),y(h(t),"doNotify",(function(){var e=t.props.onChange;e.apply(void 0,arguments)})),y(h(t),"forceNotify",(function(e){var n=t.props.debounceTimeout;if(t.isDebouncing||!(n>0)){t.cancel&&t.cancel();var r=t.state.value,o=t.props.minLength;r.length>=o?t.doNotify(e):t.doNotify(l(l({},e),{},{target:l(l({},e.target),{},{value:r})}))}})),t.isDebouncing=!1,t.state={value:"undefined"===typeof e.value||null===e.value?"":e.value};var n=t.props.debounceTimeout;return t.createNotifier(n),t}return t=u,(n=[{key:"componentDidUpdate",value:function(e){if(!this.isDebouncing){var t=this.props,n=t.value,r=t.debounceTimeout,o=e.debounceTimeout,a=e.value,i=this.state.value;"undefined"!==typeof n&&a!==n&&i!==n&&this.setState({value:n}),r!==o&&this.createNotifier(r)}}},{key:"componentWillUnmount",value:function(){this.flush&&this.flush()}},{key:"render",value:function(){var e,t,n=this.props,r=n.element,a=(n.onChange,n.value,n.minLength,n.debounceTimeout,n.forceNotifyByEnter),c=n.forceNotifyOnBlur,u=n.onKeyDown,f=n.onBlur,d=n.inputRef,p=s(n,i),m=this.state.value;e=a?{onKeyDown:this.onKeyDown}:u?{onKeyDown:u}:{},t=c?{onBlur:this.onBlur}:f?{onBlur:f}:{};var h=d?{ref:d}:{};return o.default.createElement(r,l(l(l(l({},p),{},{onChange:this.onChange,value:m},e),t),h))}}])&&f(t.prototype,n),r&&f(t,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(o.default.PureComponent);t.DebounceInput=b,y(b,"defaultProps",{element:"input",type:"text",onKeyDown:void 0,onBlur:void 0,value:void 0,minLength:0,debounceTimeout:100,forceNotifyByEnter:!0,forceNotifyOnBlur:!0,inputRef:void 0})},3628:function(e,t,n){"use strict";var r=n(6674).DebounceInput;r.DebounceInput=r,e.exports=r}}]);
//# sourceMappingURL=934.34858fa2.chunk.js.map