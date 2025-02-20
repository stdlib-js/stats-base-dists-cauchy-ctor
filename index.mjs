// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@v0.2.4-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.2.2-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cauchy-entropy@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cauchy-median@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cauchy-mode@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cauchy-cdf@v0.2.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cauchy-logcdf@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cauchy-logpdf@v0.2.2-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cauchy-pdf@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cauchy-quantile@v0.2.2-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function u(){var s,e;if(!(this instanceof u))return 0===arguments.length?new u:new u(arguments[0],arguments[1]);if(arguments.length){if(s=arguments[1],!r(e=arguments[0])||n(e))throw new TypeError(f("0wN8p",e));if(!i(s))throw new TypeError(f("0wN7c",s))}else e=0,s=1;return t(this,"x0",{configurable:!1,enumerable:!0,get:function(){return e},set:function(t){if(!r(t)||n(t))throw new TypeError(f("0wN8d",t));e=t}}),t(this,"gamma",{configurable:!1,enumerable:!0,get:function(){return s},set:function(t){if(!i(t))throw new TypeError(f("0wN8k",t));s=t}}),this}e(u.prototype,"entropy",(function(){return m(this.x0,this.gamma)})),e(u.prototype,"median",(function(){return o(this.x0,this.gamma)})),e(u.prototype,"mode",(function(){return d(this.x0,this.gamma)})),s(u.prototype,"cdf",(function(t){return a(t,this.x0,this.gamma)})),s(u.prototype,"logcdf",(function(t){return h(t,this.x0,this.gamma)})),s(u.prototype,"logpdf",(function(t){return p(t,this.x0,this.gamma)})),s(u.prototype,"pdf",(function(t){return c(t,this.x0,this.gamma)})),s(u.prototype,"quantile",(function(t){return l(t,this.x0,this.gamma)}));export{u as default};
//# sourceMappingURL=index.mjs.map
