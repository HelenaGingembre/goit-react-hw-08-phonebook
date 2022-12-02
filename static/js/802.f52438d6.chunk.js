"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[802],{1802:function(n,e,t){t.r(e),t.d(e,{default:function(){return rn}});var r=t(2791),o=t(9434),i=t(4270),c=t(3634),u="NOT_FOUND";var a=function(n,e){return n===e};function s(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?a:r,i=t.maxSize,c=void 0===i?1:i,s=t.resultEqualityCheck,l=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),d=1===c?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:u},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return u}return{get:r,put:function(e,o){r(e)===u&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,l);function p(){var e=d.get(arguments);if(e===u){if(e=n.apply(null,arguments),s){var t=d.getEntries(),r=t.find((function(n){return s(n.value,e)}));r&&(e=r.value)}d.put(arguments,e)}return e}return p.clearCache=function(){return d.clear()},p}function l(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function d(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,c=0,u={memoizeOptions:void 0},a=r.pop();if("object"===typeof a&&(u=a,a=r.pop()),"function"!==typeof a)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var s=u,d=s.memoizeOptions,p=void 0===d?t:d,f=Array.isArray(p)?p:[p],h=l(r),m=n.apply(void 0,[function(){return c++,a.apply(null,arguments)}].concat(f)),x=n((function(){for(var n=[],e=h.length,t=0;t<e;t++)n.push(h[t].apply(null,arguments));return i=m.apply(null,n)}));return Object.assign(x,{resultFunc:a,memoizedResultFunc:m,dependencies:h,lastResult:function(){return i},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),x};return o}var p,f,h=d(s),m=function(n){return n.contacts.items},x=function(n){return n.contacts.isLoading},g=function(n){return n.contacts.error},v=function(n){return n.filter},b=h([m,v],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),y=t(7689),j=t(8174),w=t(2007),k=t.n(w),Z=t(168),C=t(6444),A=C.ZP.h2(p||(p=(0,Z.Z)(["\n  margin: 10px 0;\n  color: ",";\n"])),(function(n){return n.theme.colors.accent})),P=C.ZP.section(f||(f=(0,Z.Z)(["\n  padding: 10px;\n"]))),z=t(3329),_=function(n){var e=n.title,t=n.children;return(0,z.jsxs)(P,{children:[e&&(0,z.jsx)(A,{children:e}),t]})};_.propType={title:k().string,children:k().node.isRequired};var E,F,S,q,I,R,L,N,O,T=t(885),U=C.ZP.form(E||(E=(0,Z.Z)(["\n  border: 1px solid ",";\n  width: 500px;\n  padding: 20px;\n  border-radius: 5px;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.blue_ciel})),B=C.ZP.label(F||(F=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  margin-bottom: 10px;\n"]))),D=C.ZP.input(S||(S=(0,Z.Z)(["\n  height: 25px;\n  margin-top: 3px;\n  font-weight: 400;\n  font-size: 13px;\n  outline: none;\n  border-radius: 5px;\n  border: 1px solid ",";\n  &:focus {\n    border: 1px solid ",";\n  }\n  box-sizing: border-box;\n"])),(function(n){return n.theme.colors.gray}),(function(n){return n.theme.colors.accent})),Y=C.ZP.button(q||(q=(0,Z.Z)(["\n  padding: 9px 20px;\n  min-width: 90px;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n  border-radius: 4px;\n  border: 1px solid ",";\n  cursor: pointer;\n  background-color: ",";\n  :hover {\n    background-image: ",";\n  }\n  transition: color 250ms ease-in-out, background-color 250ms ease-in-out,\n    border-color 250ms ease-in-out;\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.hover})),J=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},K=function(){var n=(0,o.I0)(),e=(0,o.v9)(m),t=(0,r.useState)(""),i=(0,T.Z)(t,2),u=i[0],a=i[1],s=(0,r.useState)(""),l=(0,T.Z)(s,2),d=l[0],p=l[1],f=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":a(r);break;case"number":p(r)}};return(0,z.jsxs)(U,{onSubmit:function(t){t.preventDefault();var r=u.toLowerCase();if(e.find((function(n){return n.name.toLowerCase()===r})))return j.Am.error("".concat(u," is already in contacts.")),void a("");n((0,c.uK)({id:J(10),name:u,number:d})),j.Am.success("Contact ".concat(u," is add phonebook")),a(""),p("")},children:[(0,z.jsxs)(B,{htmlFor:"name",children:["Name",(0,z.jsx)(D,{type:"text",name:"name",placeholder:"Enter name",value:u,onChange:f,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,z.jsxs)(B,{htmlFor:"name",children:["Number",(0,z.jsx)(D,{type:"tel",name:"number",placeholder:"Enter number telephone",value:d,onChange:f,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,z.jsx)(Y,{type:"submit",children:"Add contact"})]})},M=C.ZP.button(I||(I=(0,Z.Z)(["\n  margin-left: 10px;\n  margin-right: 10px;\n  padding: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n  border-radius: 4px;\n  border: 1px solid ",";\n  cursor: pointer;\n  background-color: ",";\n  :hover {\n    background-image: ",";\n  }\n  transition: color 250ms ease-in-out, background-color 250ms ease-in-out,\n    border-color 250ms ease-in-out;\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.hover})),V=C.ZP.li(R||(R=(0,Z.Z)(["\n  padding: 3px;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px dotted ",";\n"])),(function(n){return n.theme.colors.accent})),$=C.ZP.ul(L||(L=(0,Z.Z)(["\n  width: 500px;\n  list-style: circle;\n  padding: 20px;\n"]))),G=function(n){var e=n.contact,t=(0,o.I0)();return(0,z.jsxs)(V,{children:[e.name,": ",e.number,(0,z.jsx)(M,{onClick:function(){return t((0,c.zY)(e.id))},children:"x"})]})},H=function(){var n=(0,o.v9)(m),e=(0,o.v9)(b);return console.log("contacts",n),(0,z.jsx)(z.Fragment,{children:n.length>0&&e.length>0?(0,z.jsx)($,{children:e.map((function(n){return(0,z.jsx)(G,{contact:n},n.id)}))}):(0,z.jsx)("h4",{children:"Phonebook is empty"})})},Q=C.ZP.input(N||(N=(0,Z.Z)(["\n  height: 25px;\n  width: 300px;\n  margin-top: 3px;\n  font-weight: 400;\n  font-size: 13px;\n  outline: none;\n  border-radius: 5px;\n  border: 1px solid ",";\n  &:focus {\n    border: 1px solid ",";\n  }\n  box-sizing: border-box;\n"])),(function(n){return n.theme.colors.gray}),(function(n){return n.theme.colors.accent})),W=t(4808),X=function(){var n=(0,o.I0)(),e=(0,o.v9)(v);return(0,z.jsx)(Q,{type:"text",name:"filter",placeholder:"Enter name for Search Contact",value:e,onChange:function(e){var t=e.target;return n((0,W.l)(t.value.trim()))}})},nn=C.ZP.div(O||(O=(0,Z.Z)(["\n  width: 500px;\n  padding: 20px;\n  border: 1px solid ",";\n  border-radius: 5px;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.blue_ciel})),en=function(n){var e=n.children;return(0,z.jsx)(nn,{children:e})};en.propType={children:k().node.isRequired};var tn=t(9649);function rn(){var n=(0,o.I0)(),e=(0,o.v9)(x),t=(0,o.v9)(g);return console.log("fetchPhoneBooks ",(0,c.Il)()),(0,r.useEffect)((function(){n((0,c.Il)())}),[n]),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(i.q,{children:(0,z.jsx)("title",{children:"Your tasks"})}),(0,z.jsx)(_,{title:"Phonebook",children:(0,z.jsx)(K,{})}),(0,z.jsxs)(_,{title:"Contacts",children:[(0,z.jsxs)(en,{children:[(0,z.jsx)("h4",{children:"Find contacts by name"}),(0,z.jsx)(X,{}),e&&!t&&(0,z.jsx)(tn.a,{}),(0,z.jsx)(H,{})]}),(0,z.jsx)(j.Ix,{autoClose:2e3}),(0,z.jsx)(y.j3,{})]})]})}}}]);
//# sourceMappingURL=802.f52438d6.chunk.js.map