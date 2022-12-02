(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[802],{1802:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return tn}});var r=t(2791),o=t(9434),i=t(3634),c="NOT_FOUND";var u=function(n,e){return n===e};function a(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?u:r,i=t.maxSize,a=void 0===i?1:i,s=t.resultEqualityCheck,l=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),p=1===a?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:c},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return c}return{get:r,put:function(e,o){r(e)===c&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,l);function d(){var e=p.get(arguments);if(e===c){if(e=n.apply(null,arguments),s){var t=p.getEntries(),r=t.find((function(n){return s(n.value,e)}));r&&(e=r.value)}p.put(arguments,e)}return e}return d.clearCache=function(){return p.clear()},d}function s(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function l(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,c=0,u={memoizeOptions:void 0},a=r.pop();if("object"===typeof a&&(u=a,a=r.pop()),"function"!==typeof a)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var l=u,p=l.memoizeOptions,d=void 0===p?t:p,f=Array.isArray(d)?d:[d],h=s(r),m=n.apply(void 0,[function(){return c++,a.apply(null,arguments)}].concat(f)),x=n((function(){for(var n=[],e=h.length,t=0;t<e;t++)n.push(h[t].apply(null,arguments));return i=m.apply(null,n)}));return Object.assign(x,{resultFunc:a,memoizedResultFunc:m,dependencies:h,lastResult:function(){return i},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),x};return o}var p,d,f=l(a),h=function(n){return n.contacts.items},m=function(n){return n.contacts.isLoading},x=function(n){return n.contacts.error},g=function(n){return n.filter},b=f([h,g],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),v=t(7689),y=t(8174),j=t(2007),w=t.n(j),k=t(168),Z=t(6444),C=Z.ZP.h2(p||(p=(0,k.Z)(["\n  margin: 10px 0;\n  color: ",";\n"])),(function(n){return n.theme.colors.accent})),_=Z.ZP.section(d||(d=(0,k.Z)(["\n  padding: 10px;\n"]))),P=t(3329),A=function(n){var e=n.title,t=n.children;return(0,P.jsxs)(_,{children:[e&&(0,P.jsx)(C,{children:e}),t]})};A.propType={title:w().string,children:w().node.isRequired};var E,O,z,S,T,I,R,F,q,L=t(885),N=Z.ZP.form(E||(E=(0,k.Z)(["\n  border: 1px solid ",";\n  width: 500px;\n  padding: 20px;\n  border-radius: 5px;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.blue_ciel})),U=Z.ZP.label(O||(O=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  margin-bottom: 10px;\n"]))),D=Z.ZP.input(z||(z=(0,k.Z)(["\n  height: 25px;\n  margin-top: 3px;\n  font-weight: 400;\n  font-size: 13px;\n  outline: none;\n  border-radius: 5px;\n  border: 1px solid ",";\n  &:focus {\n    border: 1px solid ",";\n  }\n  box-sizing: border-box;\n"])),(function(n){return n.theme.colors.gray}),(function(n){return n.theme.colors.accent})),W=Z.ZP.button(S||(S=(0,k.Z)(["\n  padding: 9px 20px;\n  min-width: 90px;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n  border-radius: 4px;\n  border: 1px solid ",";\n  cursor: pointer;\n  background-color: ",";\n  :hover {\n    background-image: ",";\n  }\n  transition: color 250ms ease-in-out, background-color 250ms ease-in-out,\n    border-color 250ms ease-in-out;\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.hover})),B=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},V=function(){var n=(0,o.I0)(),e=(0,o.v9)(h),t=(0,r.useState)(""),c=(0,L.Z)(t,2),u=c[0],a=c[1],s=(0,r.useState)(""),l=(0,L.Z)(s,2),p=l[0],d=l[1],f=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":a(r);break;case"number":d(r)}};return(0,P.jsxs)(N,{onSubmit:function(t){t.preventDefault();var r=u.toLowerCase();if(e.find((function(n){return n.name.toLowerCase()===r})))return y.Am.error("".concat(u," is already in contacts.")),void a("");n((0,i.uK)({id:B(10),name:u,number:p})),y.Am.success("Contact ".concat(u," is add phonebook")),a(""),d("")},children:[(0,P.jsxs)(U,{htmlFor:"name",children:["Name",(0,P.jsx)(D,{type:"text",name:"name",placeholder:"Enter name",value:u,onChange:f,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,P.jsxs)(U,{htmlFor:"name",children:["Number",(0,P.jsx)(D,{type:"tel",name:"number",placeholder:"Enter number telephone",value:p,onChange:f,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,P.jsx)(W,{type:"submit",children:"Add contact"})]})},Y=Z.ZP.button(T||(T=(0,k.Z)(["\n  margin-left: 10px;\n  margin-right: 10px;\n  padding: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n  border-radius: 4px;\n  border: 1px solid ",";\n  cursor: pointer;\n  background-color: ",";\n  :hover {\n    background-image: ",";\n  }\n  transition: color 250ms ease-in-out, background-color 250ms ease-in-out,\n    border-color 250ms ease-in-out;\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.hover})),H=Z.ZP.li(I||(I=(0,k.Z)(["\n  padding: 3px;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px dotted ",";\n"])),(function(n){return n.theme.colors.accent})),J=Z.ZP.ul(R||(R=(0,k.Z)(["\n  width: 500px;\n  list-style: circle;\n  padding: 20px;\n"]))),K=function(n){var e=n.contact,t=(0,o.I0)();return(0,P.jsxs)(H,{children:[e.name,": ",e.phone,(0,P.jsx)(Y,{onClick:function(){return t((0,i.zY)(e.id))},children:"x"})]})},M=function(){var n=(0,o.v9)(h),e=(0,o.v9)(b);return console.log("contacts",n),(0,P.jsx)(P.Fragment,{children:n.length>0&&e.length>0?(0,P.jsx)(J,{children:e.map((function(n){return(0,P.jsx)(K,{contact:n},n.id)}))}):(0,P.jsx)("h4",{children:"Phonebook is empty"})})},$=Z.ZP.input(F||(F=(0,k.Z)(["\n  height: 25px;\n  width: 300px;\n  margin-top: 3px;\n  font-weight: 400;\n  font-size: 13px;\n  outline: none;\n  border-radius: 5px;\n  border: 1px solid ",";\n  &:focus {\n    border: 1px solid ",";\n  }\n  box-sizing: border-box;\n"])),(function(n){return n.theme.colors.gray}),(function(n){return n.theme.colors.accent})),G=t(4808),Q=function(){var n=(0,o.I0)(),e=(0,o.v9)(g);return(0,P.jsx)($,{type:"text",name:"filter",placeholder:"Enter name for Search Contact",value:e,onChange:function(e){var t=e.target;return n((0,G.l)(t.value.trim()))}})},X=Z.ZP.div(q||(q=(0,k.Z)(["\n  width: 500px;\n  padding: 20px;\n  border: 1px solid ",";\n  border-radius: 5px;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.blue_ciel})),nn=function(n){var e=n.children;return(0,P.jsx)(X,{children:e})};nn.propType={children:w().node.isRequired};var en=t(9649);function tn(){var n=(0,o.I0)(),e=(0,o.v9)(m),t=(0,o.v9)(x);return(0,r.useEffect)((function(){n((0,i.Il)())}),[n]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(A,{title:"Phonebook",children:(0,P.jsx)(V,{})}),(0,P.jsxs)(A,{title:"Contacts",children:[(0,P.jsxs)(nn,{children:[(0,P.jsx)("h4",{children:"Find contacts by name"}),(0,P.jsx)(Q,{}),e&&!t&&(0,P.jsx)(en.a,{}),(0,P.jsx)(M,{})]}),(0,P.jsx)(y.Ix,{autoClose:2e3}),(0,P.jsx)(v.j3,{})]})]})}},888:function(n,e,t){"use strict";var r=t(9047);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,i,c){if(c!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=802.38ccdb72.chunk.js.map