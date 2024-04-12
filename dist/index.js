"use strict";var h=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var p=h(function(L,f){
var o=require('@stdlib/utils-define-property/dist'),n=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),m=require('@stdlib/assert-is-positive-number/dist').isPrimitive,c=require('@stdlib/assert-is-number/dist').isPrimitive,g=require('@stdlib/assert-is-nan/dist'),y=require('@stdlib/stats-base-dists-cauchy-entropy/dist'),l=require('@stdlib/stats-base-dists-cauchy-median/dist'),v=require('@stdlib/stats-base-dists-cauchy-mode/dist'),d=require('@stdlib/stats-base-dists-cauchy-cdf/dist'),q=require('@stdlib/stats-base-dists-cauchy-logcdf/dist'),b=require('@stdlib/stats-base-dists-cauchy-logpdf/dist'),x=require('@stdlib/stats-base-dists-cauchy-pdf/dist'),w=require('@stdlib/stats-base-dists-cauchy-quantile/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist');function P(e){return d(e,this.x0,this.gamma)}function D(e){return q(e,this.x0,this.gamma)}function E(e){return b(e,this.x0,this.gamma)}function F(e){return x(e,this.x0,this.gamma)}function T(e){return w(e,this.x0,this.gamma)}function t(){var e,r;if(!(this instanceof t))return arguments.length===0?new t:new t(arguments[0],arguments[1]);if(arguments.length){if(r=arguments[0],e=arguments[1],!c(r)||g(r))throw new TypeError(a('0wN8p',r));if(!m(e))throw new TypeError(a('0wN7c',e))}else r=0,e=1;return o(this,"x0",{configurable:!1,enumerable:!0,get:function(){return r},set:function(i){if(!c(i)||g(i))throw new TypeError(a('0wN8d',i));r=i}}),o(this,"gamma",{configurable:!1,enumerable:!0,get:function(){return e},set:function(i){if(!m(i))throw new TypeError(a('0wN8k',i));e=i}}),this;}s(t.prototype,"entropy",function(){return y(this.x0,this.gamma)});s(t.prototype,"median",function(){return l(this.x0,this.gamma)});s(t.prototype,"mode",function(){return v(this.x0,this.gamma)});n(t.prototype,"cdf",P);n(t.prototype,"logcdf",D);n(t.prototype,"logpdf",E);n(t.prototype,"pdf",F);n(t.prototype,"quantile",T);f.exports=t
});var V=p();module.exports=V;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map