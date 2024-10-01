// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,a=n-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(a):e(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var n,e,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!t(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(n),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):a.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,l=/e\+(\d)$/,v=/e-(\d)$/,g=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,d=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,w,"$1e"),e=p.call(e,d,"e"),e=p.call(e,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,l,"e+0$1"),e=p.call(e,v,"e-0$1"),r.alternate&&(e=p.call(e,g,"$1."),e=p.call(e,y,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):c.call(e)}function m(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}var N=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function x(r){var n,t,e,a,o,f,c,s,p,l,v,g,y;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if(e=r[s],"string"==typeof e)f+=e;else{if(n=void 0!==e.precision,!(e=E(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),t=e.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,_(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1,e.arg=String(e.arg);break;case"c":if(!_(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(o)?String(e.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=b(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(l=e.arg,v=e.width,g=e.padRight,y=void 0,(y=v-l.length)<0?l:l=g?l+m(y):m(y)+l)),f+=e.arg||"",c+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function I(r){var n,t,e,i;for(t=[],i=0,e=U.exec(r);e;)(n=r.slice(i,U.lastIndex-e[0].length)).length&&t.push(n),t.push(S(e)),i=U.lastIndex,e=U.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function j(r){var n,t;if("string"!=typeof r)throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[I(r)],t=1;t<arguments.length;t++)n.push(arguments[t]);return x.apply(null,n)}var k=Object.prototype,F=k.toString,O=k.__defineGetter__,T=k.__defineSetter__,V=k.__lookupGetter__,P=k.__lookupSetter__;var $=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(j("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(j("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(r,n)||P.call(r,n)?(e=r.__proto__,r.__proto__=k,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(r,n,t.get),o&&T&&T.call(r,n,t.set),r};function G(r,n,t){$(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function C(r,n,t){$(r,n,{configurable:!1,enumerable:!1,get:t})}function H(r){return"number"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function L(){return W&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;var Z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Z?Z.toStringTag:"";var X=L()?function(r){var n,t,e,i,a;if(null==r)return R.call(r);t=r[q],a=q,n=null!=(i=r)&&M.call(i,a);try{r[q]=void 0}catch(n){return R.call(r)}return e=R.call(r),n?r[q]=t:delete r[q],e}:function(r){return R.call(r)},Y=Number,z=Y.prototype.toString;var B=L();function D(r){return"object"==typeof r&&(r instanceof Y||(B?function(r){try{return z.call(r),!0}catch(r){return!1}}(r):"[object Number]"===X(r)))}function J(r){return H(r)||D(r)}function K(r){return H(r)&&r>0}function Q(r){return D(r)&&r.valueOf()>0}function rr(r){return K(r)||Q(r)}function nr(r){return r!=r}function tr(r){return H(r)&&nr(r)}function er(r){return D(r)&&nr(r.valueOf())}function ir(r){return tr(r)||er(r)}G(J,"isPrimitive",H),G(J,"isObject",D),G(rr,"isPrimitive",K),G(rr,"isObject",Q),G(ir,"isPrimitive",tr),G(ir,"isObject",er);var ar="function"==typeof Uint32Array;var or="function"==typeof Uint32Array?Uint32Array:null;var ur,fr="function"==typeof Uint32Array?Uint32Array:void 0;ur=function(){var r,n,t;if("function"!=typeof or)return!1;try{n=new or(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(ar&&t instanceof Uint32Array||"[object Uint32Array]"===X(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var cr=ur,sr="function"==typeof Float64Array;var pr="function"==typeof Float64Array?Float64Array:null;var lr,vr="function"==typeof Float64Array?Float64Array:void 0;lr=function(){var r,n,t;if("function"!=typeof pr)return!1;try{n=new pr([1,3.14,-3.14,NaN]),t=n,r=(sr&&t instanceof Float64Array||"[object Float64Array]"===X(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var gr=lr,yr="function"==typeof Uint8Array;var hr="function"==typeof Uint8Array?Uint8Array:null;var dr,wr="function"==typeof Uint8Array?Uint8Array:void 0;dr=function(){var r,n,t;if("function"!=typeof hr)return!1;try{n=new hr(n=[1,3.14,-3.14,256,257]),t=n,r=(yr&&t instanceof Uint8Array||"[object Uint8Array]"===X(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var br=dr,mr="function"==typeof Uint16Array;var Nr="function"==typeof Uint16Array?Uint16Array:null;var Ar,_r="function"==typeof Uint16Array?Uint16Array:void 0;Ar=function(){var r,n,t;if("function"!=typeof Nr)return!1;try{n=new Nr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(mr&&t instanceof Uint16Array||"[object Uint16Array]"===X(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Er,xr={uint16:Ar,uint8:br};(Er=new xr.uint16(1))[0]=4660;var Ur=52===new xr.uint8(Er.buffer)[0],Sr=!0===Ur?1:0,Ir=new gr(1),jr=new cr(Ir.buffer);function kr(r){return Ir[0]=r,jr[Sr]}var Fr=!0===Ur?1:0,Or=new gr(1),Tr=new cr(Or.buffer);function Vr(r,n){return Or[0]=r,Tr[Fr]=n>>>0,Or[0]}var Pr=1023,$r=Y.NEGATIVE_INFINITY;var Gr=.6931471803691238,Cr=1.9082149292705877e-10,Hr=0x40000000000000,Wr=.3333333333333333,Lr=1048575,Rr=2146435072,Mr=1048576,Zr=1072693248;function qr(r){var n,t,e,i,a,o,u,f,c,s,p,l;return 0===r?$r:nr(r)||r<0?NaN:(a=0,(t=kr(r))<Mr&&(a-=54,t=kr(r*=Hr)),t>=Rr?r+r:(a+=(t>>20)-Pr|0,a+=(f=(t&=Lr)+614244&1048576|0)>>20|0,u=(r=Vr(r,t|f^Zr))-1,(Lr&2+t)<3?0===u?0===a?0:a*Gr+a*Cr:(o=u*u*(.5-Wr*u),0===a?u-o:a*Gr-(o-a*Cr-u)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=e+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*Gr-(n-(s*(n+o)+a*Cr)-u)):0===a?u-s*(u-o):a*Gr-(s*(u-o)-a*Cr-u))))}var Xr=3.141592653589793;var Yr=Number.POSITIVE_INFINITY;function zr(r){return r===Yr||r===$r}var Br,Dr,Jr=2147483648,Kr=2147483647;!0===Ur?(Br=1,Dr=0):(Br=0,Dr=1);var Qr,rn,nn={HIGH:Br,LOW:Dr},tn=new gr(1),en=new cr(tn.buffer),an=nn.HIGH,on=nn.LOW;function un(r,n,t,e){return tn[0]=r,n[e]=en[an],n[e+t]=en[on],n}function fn(r){return un(r,[0,0],1,0)}G(fn,"assign",un),!0===Ur?(Qr=1,rn=0):(Qr=0,rn=1);var cn={HIGH:Qr,LOW:rn},sn=new gr(1),pn=new cr(sn.buffer),ln=cn.HIGH,vn=cn.LOW;function gn(r,n){return pn[ln]=r,pn[vn]=n,sn[0]}var yn=[0,0];function hn(r,n){var t,e;return fn.assign(r,yn,1,0),t=yn[0],t&=Kr,e=kr(n),gn(t|=e&=Jr,yn[1])}var dn=1.5707963267948966,wn=.7853981633974483;var bn=6123233995736766e-32,mn=2.414213562373095;function Nn(r,n){var t;return nr(n)||nr(r)?NaN:zr(n)?n===Yr?zr(r)?hn(Xr/4,r):hn(0,r):zr(r)?hn(3*Xr/4,r):hn(Xr,r):zr(r)?hn(Xr/2,r):0===r?n>=0&&!function(r){return!!(kr(r)>>>31)}(n)?hn(0,r):hn(Xr,r):0===n?hn(Xr/2,r):(t=function(r){var n,t,e,i;return nr(r)||0===r?r:r===Yr?dn:r===$r?-dn:(r<0&&(t=!0,r=-r),n=0,r>mn?(e=dn,n=1,r=-1/r):r<=.66?e=0:(e=wn,n=2,r=(r-1)/(r+1)),i=(i=r*r)*function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(i)/function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))}(i),i=r*i+r,2===n?i+=.5*bn:1===n&&(i+=bn),e+=i,t?-e:e)}(r/n),n<0?t<=0?t+Xr:t-Xr:t)}var An=.3183098861837907;function _n(r,n,t){return nr(r)||nr(t)||nr(n)||t<=0?NaN:An*Nn(r-n,t)+.5}function En(r){return function(){return r}}G(_n,"factory",(function(r,n){return nr(n)||nr(r)||n<=0?En(NaN):function(t){if(nr(t))return NaN;return.3183098861837907*Nn(t-r,n)+.5}}));var xn=.3183098861837907;function Un(r,n,t){return nr(r)||nr(t)||nr(n)||t<=0?NaN:qr(xn*Nn(r-n,t)+.5)}G(Un,"factory",(function(r,n){return nr(n)||nr(r)||n<=0?En(NaN):function(t){if(nr(t))return NaN;return qr(.3183098861837907*Nn(t-r,n)+.5)}}));var Sn=.6931471803691238,In=1.9082149292705877e-10,jn=.41421356237309503,kn=-.2928932188134525,Fn=1.862645149230957e-9,On=5551115123125783e-32,Tn=9007199254740992,Vn=.6666666666666666;function Pn(r){var n,t,e,i,a,o,u,f,c,s;if(r<-1||nr(r))return NaN;if(-1===r)return $r;if(r===Yr)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<jn){if(e<Fn)return e<On?r:r-r*r*.5;r>kn&&(s=0,i=r,t=1)}return 0!==s&&(e<Tn?(a=(s=((t=kr(c=1+r))>>20)-Pr)>0?1-(c-r):r-(c-1),a/=c):(s=((t=kr(c=r))>>20)-Pr,a=0),(t&=1048575)<434334?c=Vr(c,1072693248|t):(s+=1,c=Vr(c,1071644672|t),t=1048576-t>>2),i=c-1),n=.5*i*i,0===t?0===i?s*Sn+(a+=s*In):s*Sn-((f=n*(1-Vn*i))-(s*In+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(n-o*(n+f)):s*Sn-(n-(o*(n+f)+(s*In+a))-i))}var $n=Math.floor;function Gn(r){return $n(r)===r}function Cn(r){return Gn(r/2)}function Hn(r){return Cn(r>0?r-1:r+1)}var Wn=Math.sqrt;function Ln(r){return Math.abs(r)}var Rn=!0===Ur?0:1,Mn=new gr(1),Zn=new cr(Mn.buffer);function qn(r,n){return Mn[0]=r,Zn[Rn]=n>>>0,Mn[0]}function Xn(r){return 0|r}var Yn=1072693247,zn=1e300,Bn=1e-300;var Dn=1048575,Jn=1048576,Kn=1072693248,Qn=536870912,rt=524288,nt=20,tt=9007199254740992,et=.9617966939259756,it=.9617967009544373,at=-7.028461650952758e-9,ot=[1,1.5],ut=[0,.5849624872207642],ft=[0,1.350039202129749e-8];var ct=1.4426950408889634,st=1.4426950216293335,pt=1.9259629911266175e-8;var lt=1023,vt=-1023,gt=-1074,yt=22250738585072014e-324,ht=4503599627370496;function dt(r,n,t,e){return nr(r)||zr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Ln(r)<yt?(n[e]=r*ht,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}G((function(r){return dt(r,[0,0],1,0)}),"assign",dt);var wt=2146435072;var bt=2220446049250313e-31,mt=2148532223,Nt=[0,0],At=[0,0];function _t(r,n){var t,e;return 0===n||0===r||nr(r)||zr(r)?r:(dt(r,Nt,1,0),r=Nt[0],n+=Nt[1],n+=function(r){var n=kr(r);return(n=(n&wt)>>>20)-Pr|0}(r),n<gt?hn(0,r):n>lt?r<0?$r:Yr:(n<=vt?(n+=52,e=bt):e=1,fn.assign(r,At,1,0),t=At[0],t&=mt,e*gn(t|=n+Pr<<20,At[1])))}var Et=.6931471805599453,xt=1048575;var Ut=1048576,St=1071644672,It=20,jt=.6931471824645996,kt=-1.904654299957768e-9;var Ft=1072693247,Ot=1105199104,Tt=1139802112,Vt=1083179008,Pt=1072693248,$t=1083231232,Gt=3230714880,Ct=31,Ht=1e300,Wt=1e-300,Lt=8008566259537294e-32,Rt=[0,0],Mt=[0,0];function Zt(r,n){var t,e,i,a,o,u,f,c,s,p,l,v,g,y;if(nr(r)||nr(n))return NaN;if(fn.assign(n,Rt,1,0),o=Rt[0],0===Rt[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Wn(r);if(-.5===n)return 1/Wn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(zr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Ln(r)<1==(n===Yr)?0:Yr}(r,n)}if(fn.assign(r,Rt,1,0),a=Rt[0],0===Rt[1]){if(0===a)return function(r,n){return n===$r?Yr:n===Yr?0:n>0?Hn(n)?r:0:Hn(n)?hn(Yr,r):Yr}(r,n);if(1===r)return 1;if(-1===r&&Hn(n))return-1;if(zr(r))return r===$r?Zt(-0,-n):n<0?0:Yr}if(r<0&&!1===Gn(n))return(r-r)/(r-r);if(i=Ln(r),t=a&Kr|0,e=o&Kr|0,f=o>>>Ct|0,u=(u=a>>>Ct|0)&&Hn(n)?-1:1,e>Ot){if(e>Tt)return function(r,n){return(kr(r)&Kr)<=Yn?n<0?zn*zn:Bn*Bn:n>0?zn*zn:Bn*Bn}(r,n);if(t<Ft)return 1===f?u*Ht*Ht:u*Wt*Wt;if(t>Pt)return 0===f?u*Ht*Ht:u*Wt*Wt;l=function(r,n){var t,e,i,a,o,u,f;return a=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),t=(u=i*pt-a*ct)-((e=qn(e=(o=st*i)+u,0))-o),r[0]=e,r[1]=t,r}(Mt,i)}else l=function(r,n,t){var e,i,a,o,u,f,c,s,p,l,v,g,y,h,d,w,b,m,N,A,_;return m=0,t<Jn&&(m-=53,t=kr(n*=tt)),m+=(t>>nt)-Pr|0,t=(N=t&Dn|0)|Kn|0,N<=235662?A=0:N<767610?A=1:(A=0,m+=1,t-=Jn),o=qn(i=(w=(n=Vr(n,t))-(c=ot[A]))*(b=1/(n+c)),0),e=(t>>1|Qn)+rt,f=Vr(0,e+=A<<18),d=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=qn(f=3+(a=o*o)+(d+=(u=b*(w-o*f-o*(n-(f-c))))*(o+i)),0),p=qn(p=(w=o*f)+(b=u*f+(d-(f-3-a))*i),0),l=it*p,y=(v=at*p+(b-(p-w))*et+ft[A])-((g=qn(g=l+v+(s=ut[A])+(h=m),0))-h-s-l),r[0]=g,r[1]=y,r}(Mt,i,t);if(v=(p=(n-(c=qn(n,0)))*l[0]+n*l[1])+(s=c*l[0]),fn.assign(v,Rt,1,0),g=Xn(Rt[0]),y=Xn(Rt[1]),g>=Vt){if(0!=(g-Vt|y))return u*Ht*Ht;if(p+Lt>v-s)return u*Ht*Ht}else if((g&Kr)>=$t){if(0!=(g-Gt|y))return u*Wt*Wt;if(p<=v-s)return u*Wt*Wt}return v=function(r,n,t){var e,i,a,o,u,f,c,s,p,l;return p=((s=r&Kr|0)>>It)-Pr|0,c=0,s>St&&(i=Vr(0,((c=r+(Ut>>p+1)>>>0)&~(xt>>(p=((c&Kr)>>It)-Pr|0)))>>>0),c=(c&xt|Ut)>>It-p>>>0,r<0&&(c=-c),n-=i),r=Xn(r=kr(f=1-((f=(a=(i=qn(i=t+n,0))*jt)+(o=(t-(i-n))*Et+i*kt))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<It>>>0)>>It<=0?_t(f,c):Vr(f,r)}(g,s,p),u*v}var qt=1.1447298858494002;function Xt(r,n,t){return nr(r)||nr(t)||nr(n)||t<=0?NaN:-(qt+qr(t)+Pn(Zt((r-n)/t,2)))}function Yt(r,n,t){return nr(r)||nr(t)||nr(n)||t<=0?NaN:1/(Xr*t*(1+Zt((r-n)/t,2)))}G(Xt,"factory",(function(r,n){return nr(n)||nr(r)||n<=0?En(NaN):function(t){if(nr(t))return NaN;return-(qt+qr(n)+Pn(Zt((t-r)/n,2)))}})),G(Yt,"factory",(function(r,n){var t;return nr(n)||nr(r)||n<=0?En(NaN):(t=n*Xr,function(e){if(nr(e))return NaN;return 1/(t*(1+Zt((e-r)/n,2)))})}));var zt=.7853981633974483,Bt=3061616997868383e-32,Dt=.3333333333333341,Jt=2147483647;function Kt(r,n,t){var e,i,a,o,u,f,c,s,p;return(i=(e=kr(r))&Jt|0)>=1072010280&&(r<0&&(r=-r,n=-n),r=(p=zt-r)+(s=Bt-n),n=0),o=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(s=(p=r*r)*p),c=p*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(s),o=n+p*((u=p*r)*(o+c)+n),s=r+(o+=Dt*u),i>=1072010280?(1-(e>>30&2))*((c=t)-2*(r-(s*s/(s+c)-o))):1===t?s:(c=o-((p=qn(s,0))-r),(f=qn(a=-1/s,0))+a*((u=1+f*p)+f*c))}var Qt=!0===Ur?0:1,re=new gr(1),ne=new cr(re.buffer);function te(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var ee=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ie=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ae=16777216,oe=5.960464477539063e-8,ue=te(20),fe=te(20),ce=te(20),se=te(20);function pe(r,n,t,e,i,a,o,u,f){var c,s,p,l,v,g,y,h,d;for(l=a,d=e[t],h=t,v=0;h>0;v++)s=oe*d|0,se[v]=d-ae*s|0,d=e[h-1]+s,h-=1;if(d=_t(d,i),d-=8*$n(.125*d),d-=y=0|d,p=0,i>0?(y+=v=se[t-1]>>24-i,se[t-1]-=v<<24-i,p=se[t-1]>>23-i):0===i?p=se[t-1]>>23:d>=.5&&(p=2),p>0){for(y+=1,c=0,v=0;v<t;v++)h=se[v],0===c?0!==h&&(c=1,se[v]=16777216-h):se[v]=16777215-h;if(i>0)switch(i){case 1:se[t-1]&=8388607;break;case 2:se[t-1]&=4194303}2===p&&(d=1-d,0!==c&&(d-=_t(1,i)))}if(0===d){for(h=0,v=t-1;v>=a;v--)h|=se[v];if(0===h){for(g=1;0===se[a-g];g++);for(v=t+1;v<=t+g;v++){for(f[u+v]=ee[o+v],s=0,h=0;h<=u;h++)s+=r[h]*f[u+(v-h)];e[v]=s}return pe(r,n,t+=g,e,i,a,o,u,f)}}if(0===d)for(t-=1,i-=24;0===se[t];)t-=1,i-=24;else(d=_t(d,-i))>=ae?(s=oe*d|0,se[t]=d-ae*s|0,i+=24,se[t+=1]=s):se[t]=0|d;for(s=_t(1,i),v=t;v>=0;v--)e[v]=s*se[v],s*=oe;for(v=t;v>=0;v--){for(s=0,g=0;g<=l&&g<=t-v;g++)s+=ie[g]*e[v+g];ce[t-v]=s}for(s=0,v=t;v>=0;v--)s+=ce[v];for(n[0]=0===p?s:-s,s=ce[0]-s,v=1;v<=t;v++)s+=ce[v];return n[1]=0===p?s:-s,7&y}function le(r,n,t,e){var i,a,o,u,f,c,s;for(4,(a=(t-3)/24|0)<0&&(a=0),u=t-24*(a+1),c=a-(o=e-1),s=o+4,f=0;f<=s;f++)ue[f]=c<0?0:ee[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*ue[o+(f-c)];fe[f]=i}return 4,pe(r,n,4,fe,u,4,a,o,ue)}var ve=Math.round,ge=.6366197723675814,ye=1.5707963267341256,he=6077100506506192e-26,de=6077100506303966e-26,we=20222662487959506e-37,be=20222662487111665e-37,me=84784276603689e-45,Ne=2047;function Ae(r,n,t){var e,i,a,o,u;return a=r-(e=ve(r*ge))*ye,o=e*he,u=n>>20|0,t[0]=a-o,u-(kr(t[0])>>20&Ne)>16&&(o=e*we-((i=a)-(a=i-(o=e*de))-o),t[0]=a-o,u-(kr(t[0])>>20&Ne)>49&&(o=e*me-((i=a)-(a=i-(o=e*be))-o),t[0]=a-o)),t[1]=a-t[0]-o,e}var _e=0,Ee=16777216,xe=1.5707963267341256,Ue=6077100506506192e-26,Se=2*Ue,Ie=3*Ue,je=4*Ue,ke=598523,Fe=1072243195,Oe=1073928572,Te=1074752122,Ve=1074977148,Pe=1075183036,$e=1075388923,Ge=1075594811,Ce=1094263291,He=[0,0,0],We=[0,0];function Le(r,n){var t,e,i,a,o,u,f;if((i=kr(r)&Kr|0)<=Fe)return n[0]=r,n[1]=0,0;if(i<=Te)return(i&xt)===ke?Ae(r,i,n):i<=Oe?r>0?(f=r-xe,n[0]=f-Ue,n[1]=f-n[0]-Ue,1):(f=r+xe,n[0]=f+Ue,n[1]=f-n[0]+Ue,-1):r>0?(f=r-2*xe,n[0]=f-Se,n[1]=f-n[0]-Se,2):(f=r+2*xe,n[0]=f+Se,n[1]=f-n[0]+Se,-2);if(i<=Ge)return i<=Pe?i===Ve?Ae(r,i,n):r>0?(f=r-3*xe,n[0]=f-Ie,n[1]=f-n[0]-Ie,3):(f=r+3*xe,n[0]=f+Ie,n[1]=f-n[0]+Ie,-3):i===$e?Ae(r,i,n):r>0?(f=r-4*xe,n[0]=f-je,n[1]=f-n[0]-je,4):(f=r+4*xe,n[0]=f+je,n[1]=f-n[0]+je,-4);if(i<Ce)return Ae(r,i,n);if(i>=wt)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return re[0]=r,ne[Qt]}(r),f=gn(i-((e=(i>>20)-1046)<<20|0),t),o=0;o<2;o++)He[o]=0|f,f=(f-He[o])*Ee;for(He[2]=f,a=3;He[a-1]===_e;)a-=1;return u=le(He,We,e,a),r<0?(n[0]=-We[0],n[1]=-We[1],-u):(n[0]=We[0],n[1]=We[1],u)}var Re=[0,0],Me=2147483647,Ze=1072243195,qe=2146435072,Xe=1044381696;function Ye(r){var n,t;return n=kr(r),(n&=Me)<=Ze?n<Xe?r:Kt(r,0,1):n>=qe?NaN:(t=Le(r,Re),Kt(Re[0],Re[1],1-((1&t)<<1)))}function ze(r,n,t){return nr(n)||nr(t)||t<=0||nr(r)||r<0||r>1?NaN:n+t*Ye(Xr*(r-.5))}function Be(){var r,n=arguments,t="https://stdlib.io/e/"+n[0]+"?";for(r=1;r<n.length;r++)t+="&arg[]="+encodeURIComponent(n[r]);return t}function De(){var r,n;if(!(this instanceof De))return 0===arguments.length?new De:new De(arguments[0],arguments[1]);if(arguments.length){if(r=arguments[1],!H(n=arguments[0])||ir(n))throw new TypeError(Be("0wN8p",n));if(!K(r))throw new TypeError(Be("0wN7c",r))}else n=0,r=1;return $(this,"x0",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!H(r)||ir(r))throw new TypeError(Be("0wN8d",r));n=r}}),$(this,"gamma",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!K(n))throw new TypeError(Be("0wN8k",n));r=n}}),this}G(ze,"factory",(function(r,n){return nr(r)||nr(n)||n<=0?En(NaN):function(t){if(nr(t)||t<0||t>1)return NaN;return r+n*Ye(Xr*(t-.5))}})),C(De.prototype,"entropy",(function(){return r=this.x0,nr(n=this.gamma)||nr(r)||n<=0?NaN:qr(n)+qr(4*Xr);var r,n})),C(De.prototype,"median",(function(){return r=this.x0,nr(n=this.gamma)||nr(r)||n<=0?NaN:r;var r,n})),C(De.prototype,"mode",(function(){return r=this.x0,nr(n=this.gamma)||nr(r)||n<=0?NaN:r;var r,n})),G(De.prototype,"cdf",(function(r){return _n(r,this.x0,this.gamma)})),G(De.prototype,"logcdf",(function(r){return Un(r,this.x0,this.gamma)})),G(De.prototype,"logpdf",(function(r){return Xt(r,this.x0,this.gamma)})),G(De.prototype,"pdf",(function(r){return Yt(r,this.x0,this.gamma)})),G(De.prototype,"quantile",(function(r){return ze(r,this.x0,this.gamma)}));export{De as default};
//# sourceMappingURL=mod.js.map
