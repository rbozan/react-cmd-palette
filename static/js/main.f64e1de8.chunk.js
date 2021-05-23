(this["webpackJsonpreact-cmd-palette"]=this["webpackJsonpreact-cmd-palette"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},28:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(16),i=n.n(o),a=(n(23),n(3)),s=n(4),l=n(11);function u(){}var d,j,b=Object(c.createContext)({actions:[],addAction:u,removeAction:u,show:u,hide:u,toggle:u,shown:!1}),h=n(18),O=(n(24),n(10));function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},o=Object.keys(e);for(c=0;c<o.length;c++)n=o[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(c=0;c<o.length;c++)n=o[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function x(e,t){var n=e.title,r=e.titleId,o=m(e,["title","titleId"]);return c.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-arrow-up-right",ref:t,"aria-labelledby":r},o),n?c.createElement("title",{id:r},n):null,d||(d=c.createElement("line",{x1:7,y1:17,x2:17,y2:7})),j||(j=c.createElement("polyline",{points:"7 7 17 7 17 17"})))}var p=c.forwardRef(x),v=(n.p,n(1)),g={keys:["title"]},y=function(e){var t=e.children,n=e.InputProps,r=e.FuseOptions,o=Object(c.useState)([]),i=Object(l.a)(o,2),u=i[0],d=i[1],j=Object(c.useState)(!1),f=Object(l.a)(j,2),m=f[0],x=f[1],y=Object(c.useState)(void 0),w=Object(l.a)(y,2),k=w[0],C=w[1],P=function(){return x(!1)},A=Object(c.useMemo)((function(){return Object(a.a)(Object(a.a)({},g),r)}),[r]),E=Object(c.useMemo)((function(){if(!k)return u;var e=new h.a(u,A),t=e.search(k);return console.log("fuse results",e.search(k)),t.sort((function(e,t){var n,c;return(null!==(n=e.score)&&void 0!==n?n:0)-(null!==(c=t.score)&&void 0!==c?c:0)})).map((function(e){return e.item}))}),[u,k,A]);return Object(O.a)("escape",Object(c.useCallback)((function(e){m&&P()}),[m]),{enableOnTags:["INPUT"]}),Object(v.jsxs)(b.Provider,{value:{actions:u,addAction:function(e){return d((function(t){if(t.find((function(t){return t.id===e.id})))throw Error("This action already has been added. Did you forget to remove this action with removeAction beforehand?");return[].concat(Object(s.a)(t),[e])}))},removeAction:function(e){return d((function(t){return t.filter((function(t){return t.id!==e.id}))}))},show:function(){return x(!0)},hide:P,toggle:function(){return x((function(e){return!e}))},shown:m},children:[t,m&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"command-palette--overlay",onClick:P}),Object(v.jsxs)("div",{className:"command-palette",children:[Object(v.jsxs)("header",{className:"command-palette--header",children:[Object(v.jsx)("input",Object(a.a)(Object(a.a)({type:"search"},n),{},{onInput:function(e){var t;t=e.currentTarget.value,C(t)},autoFocus:!0})),Object(v.jsxs)("div",{className:"command-palette--header--help",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("kbd",{children:"\u2191\u2193"})," or ",Object(v.jsx)("kbd",{children:"tab"})," to navigate"]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("kbd",{children:"enter"})," or ",Object(v.jsx)("kbd",{children:"click"})," to select"]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("kbd",{children:"esc"})," to close"]})]})]}),Object(v.jsx)("section",{className:"command-palette--results",children:E.map((function(e){return Object(v.jsxs)("div",{tabIndex:0,onKeyDown:function(t){var n;if("Enter"===t.key)return null===(n=e.onSelect)||void 0===n?void 0:n.call(e)},className:"command-palette--results-result",onClick:e.onSelect,children:[e.leading&&Object(v.jsx)("div",{children:e.leading}),Object(v.jsx)("h6",{className:"command-palette--results-result-title",children:e.title}),Object(v.jsx)("div",{className:"trailing",children:Object(v.jsx)(p,{width:18})})]},e.id)}))})]})]})]})},w=n(2),k=function(){var e=Object(w.g)(),t=Object(c.useContext)(b),n=t.addAction,r=t.removeAction,o=t.show,i=Object(c.useMemo)((function(){return{id:1,title:"Visit keyboard shortcut demo",onSelect:function(){return e("/keyboard-shortcut")}}}),[e]);return Object(c.useEffect)((function(){return n(i),function(){r(i)}}),[n,r,i]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("p",{children:"This is a basic example of the Command Palette"}),Object(v.jsx)("button",{onClick:o,children:"Open command palette"})]})},C=n(6),P=(n(28),function(){var e=Object(c.useContext)(b).show;return Object(v.jsx)("header",{children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("div",{className:"logo",children:Object(v.jsx)("code",{children:"react-cmd-palette"})}),Object(v.jsx)("input",{type:"search",placeholder:"What are you searching for?",onFocus:e}),Object(v.jsxs)("nav",{children:[Object(v.jsx)(C.b,{to:"/basic",children:"Basic example"}),Object(v.jsx)(C.b,{to:"/keyboard-shortcut",children:"Keyboard shortcut"}),Object(v.jsx)(C.b,{to:"/a-lot-of-actions",children:"A lot of actions"})]})]})})}),A={id:"back",title:"Go back"},E=function(){var e=Object(c.useContext)(b),t=e.addAction,n=e.removeAction,r=e.toggle;return Object(O.a)("ctrl+p  ",(function(e){e.preventDefault(),r()}),{}),Object(c.useEffect)((function(){return t(A),function(){n(A)}}),[t,n]),Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("p",{children:"Toggle the command palette by pressing CTRL + P"})})},N=new(n(17).LoremIpsum)({sentencesPerParagraph:{max:8,min:4},wordsPerSentence:{max:16,min:4}}),S=Array.from({length:50},(function(e,t){return{id:t,title:N.generateSentences(1),onSelect:function(){alert("You selected action #"+t)}}})),F=function(){var e=Object(c.useContext)(b),t=e.addAction,n=e.removeAction,r=e.show;return Object(c.useEffect)((function(){return S.forEach((function(e){return t(e)})),function(){S.forEach((function(e){return n(e)}))}}),[t,n]),Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("p",{children:Object(v.jsx)("button",{onClick:r,children:"Open the command palette"})})})};var I=function(){return Object(v.jsx)(y,{InputProps:{placeholder:"What are you searching for?"},children:Object(v.jsxs)(C.a,{children:[Object(v.jsx)(P,{}),Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)(w.c,{children:[Object(v.jsx)(w.a,{path:"/basic",element:Object(v.jsx)(k,{})}),Object(v.jsx)(w.a,{path:"/keyboard-shortcut",element:Object(v.jsx)(E,{})}),Object(v.jsx)(w.a,{path:"/a-lot-of-actions",element:Object(v.jsx)(F,{})})]})})]})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),o(e),i(e)}))};i.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(I,{})}),document.getElementById("root")),T()}},[[41,1,2]]]);
//# sourceMappingURL=main.f64e1de8.chunk.js.map