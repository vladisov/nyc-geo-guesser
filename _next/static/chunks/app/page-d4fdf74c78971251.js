(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6376:function(e,t,n){Promise.resolve().then(n.bind(n,935))},935:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return page}});var l=n(7437),r=n(2265),player_setup=e=>{let{players:t,attempts:n,setPlayers:r,setAttempts:a,setGameSet:u}=e;return(0,l.jsxs)("div",{className:"flex flex-col items-center justify-center h-screen font-nunito",children:[(0,l.jsx)("h1",{className:"text-3xl font-bold mb-6",children:"NYC Game Setup"}),(0,l.jsxs)("div",{className:"text-xl",children:[(0,l.jsxs)("div",{className:"mb-4 mt-4",children:[(0,l.jsx)("label",{className:"mr-2",children:"Number of Players:"}),(0,l.jsx)("input",{type:"number",value:t,max:"5",onChange:e=>r(parseInt(e.target.value)),min:"1"})]}),(0,l.jsxs)("div",{className:"mb-8",children:[(0,l.jsx)("label",{className:"mr-2",children:"Number of Attempts:"}),(0,l.jsx)("input",{type:"number",value:n,max:"10",onChange:e=>a(parseInt(e.target.value)),min:"1"})]})]}),(0,l.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",onClick:()=>u(!0),children:"Start game"})]})},a=n(8811),u=n.n(a);let o=u()(()=>Promise.all([n.e(212),n.e(555)]).then(n.bind(n,6555)),{loadableGenerated:{webpack:()=>[6555]},ssr:!1});var page=()=>{let[e,t]=(0,r.useState)(2),[n,a]=(0,r.useState)(5),[u,s]=(0,r.useState)(!1);return u?(0,l.jsx)(o,{numPlayers:e,numAttempts:n,restart:()=>{s(!1),t(2),a(5)},isGameSet:u}):(0,l.jsx)(player_setup,{players:e,attempts:n,setPlayers:t,setGameSet:s,setAttempts:a})}},8811:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return dynamic}});let l=n(1024);n(2265);let r=l._(n(7075));function convertModule(e){return{default:(null==e?void 0:e.default)||e}}function dynamic(e,t){let n=r.default,l={loading:e=>{let{error:t,isLoading:n,pastDelay:l}=e;return null}};"function"==typeof e&&(l.loader=e),Object.assign(l,t);let a=l.loader;return n({...l,loader:()=>null!=a?a().then(convertModule):Promise.resolve(convertModule(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9167:function(e,t,n){"use strict";function NoSSR(e){let{children:t}=e;return t}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NoSSR",{enumerable:!0,get:function(){return NoSSR}}),n(1283)},7075:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let l=n(1024),r=l._(n(2265)),a=n(9167);function Loadable(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function LoadableComponent(e){let n=t.loading,l=r.default.createElement(n,{isLoading:!0,pastDelay:!0,error:null}),u=t.ssr?r.default.Fragment:a.NoSSR,o=t.lazy;return r.default.createElement(r.default.Suspense,{fallback:l},r.default.createElement(u,null,r.default.createElement(o,e)))}return t.lazy=r.default.lazy(t.loader),LoadableComponent.displayName="LoadableComponent",LoadableComponent}let u=Loadable},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=n(2265),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,o=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,n){var l,a={},d=null,i=null;for(l in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(i=t.ref),t)u.call(t,l)&&!s.hasOwnProperty(l)&&(a[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps)void 0===a[l]&&(a[l]=t[l]);return{$$typeof:r,type:e,key:d,ref:i,props:a,_owner:o.current}}t.Fragment=a,t.jsx=q,t.jsxs=q},7437:function(e,t,n){"use strict";e.exports=n(622)}},function(e){e.O(0,[971,472,744],function(){return e(e.s=6376)}),_N_E=e.O()}]);