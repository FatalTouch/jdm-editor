import{e as O,j as P,J as j,a as _}from"./theme-26331e20.js";import{r as S}from"./index-32a56c20.js";import{s as M}from"./index-d475d2ea.js";import{t as w}from"./chunk-4NMOSTKD-052c8761.js";import"./_commonjsHelpers-042e6b4d.js";import"./v4-a960c1f4.js";import"./extends-b84940d4.js";var k="DARK_MODE";function n(t){"@babel/helpers - typeof";return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},n(t)}var u;function D(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);r&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),e.push.apply(e,a)}return e}function E(t){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?D(Object(e),!0).forEach(function(a){I(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):D(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function I(t,r,e){return r=K(r),r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function K(t){var r=N(t,"string");return n(r)==="symbol"?r:String(r)}function N(t,r){if(n(t)!=="object"||t===null)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var a=e.call(t,r||"default");if(n(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function i(t){return L(t)||J(t)||x(t)||R()}function R(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(t,r){if(t){if(typeof t=="string")return f(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return f(t,r)}}function J(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function L(t){if(Array.isArray(t))return f(t)}function f(t,r){(r==null||r>t.length)&&(r=t.length);for(var e=0,a=new Array(r);e<r;e++)a[e]=t[e];return a}__STORYBOOK_MODULE_CORE_EVENTS__;var T=M,U=T.document,l=T.window,C="sb-addon-themes-3";(u=l.matchMedia)===null||u===void 0||u.call(l,"(prefers-color-scheme: dark)");var m={classTarget:"body",dark:w.dark,darkClass:["dark"],light:w.light,lightClass:["light"],stylePreview:!1,userHasExplicitlySetTheTheme:!1},A=function(r){l.localStorage.setItem(C,JSON.stringify(r))},Y=function(r,e){var a=e.current,o=e.darkClass,p=o===void 0?m.darkClass:o,d=e.lightClass,y=d===void 0?m.lightClass:d;if(a==="dark"){var g,v;(g=r.classList).remove.apply(g,i(s(y))),(v=r.classList).add.apply(v,i(s(p)))}else{var h,b;(h=r.classList).remove.apply(h,i(s(p))),(b=r.classList).add.apply(b,i(s(y)))}},s=function(r){var e=[];return e.concat(r).map(function(a){return a})},B=function(r){var e=U.querySelector(r.classTarget);e&&Y(e,r)},H=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=l.localStorage.getItem(C);if(typeof e=="string"){var a=JSON.parse(e);return r&&(r.dark&&!O(a.dark,r.dark)&&(a.dark=r.dark,A(a)),r.light&&!O(a.light,r.light)&&(a.light=r.light,A(a))),a}return E(E({},m),r)};B(H());__STORYBOOK_MODULE_ADDONS__;const{addons:$}=__STORYBOOK_MODULE_ADDONS__,Q={actions:{argTypesRegex:"^on[A-Z].*"},parameters:{controls:{expanded:!0}},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},c=$.getChannel(),X={decorators:[t=>{const[r,e]=S.useState(!0);return S.useEffect(()=>(c.on(k,e),()=>c.off(k,e)),[c,e]),P(j,{theme:{mode:r?"dark":"light"},children:[_("style",{dangerouslySetInnerHTML:{__html:`html { background-color: ${r?"#1f1f1f":"white"} }`}}),_(t,{})]})}]};export{X as default,Q as parameters};
//# sourceMappingURL=preview-5d91b3ec.js.map
