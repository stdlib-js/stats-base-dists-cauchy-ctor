// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,o=t.__defineSetter__,i=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,s;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,s="set"in a,l&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,a.get),s&&o&&o.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r,n,t){a(r,n,{configurable:!1,enumerable:!1,get:t})}function y(r){return"number"==typeof r}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString,m=Object.prototype.hasOwnProperty,b="function"==typeof Symbol?Symbol.toStringTag:"",N=p()?function(r){var n,t,e,u,o;if(null==r)return v.call(r);t=r[b],o=b,n=null!=(u=r)&&m.call(u,o);try{r[b]=void 0}catch(n){return v.call(r)}return e=v.call(r),n?r[b]=t:delete r[b],e}:function(r){return v.call(r)},h=Number,g=h.prototype.toString,w=p();function d(r){return"object"==typeof r&&(r instanceof h||(w?function(r){try{return g.call(r),!0}catch(r){return!1}}(r):"[object Number]"===N(r)))}function A(r){return y(r)||d(r)}function _(r){return y(r)&&r>0}function j(r){return d(r)&&r.valueOf()>0}function U(r){return _(r)||j(r)}function O(r){return r!=r}function T(r){return y(r)&&O(r)}function E(r){return d(r)&&O(r.valueOf())}function I(r){return T(r)||E(r)}c(A,"isPrimitive",y),c(A,"isObject",d),c(U,"isPrimitive",_),c(U,"isObject",j),c(I,"isPrimitive",T),c(I,"isObject",E);var x,S="function"==typeof Uint32Array,F="function"==typeof Uint32Array?Uint32Array:null,P="function"==typeof Uint32Array?Uint32Array:void 0;x=function(){var r,n,t;if("function"!=typeof F)return!1;try{n=new F(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(S&&t instanceof Uint32Array||"[object Uint32Array]"===N(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var H,G=x,V="function"==typeof Float64Array,M="function"==typeof Float64Array?Float64Array:null,L="function"==typeof Float64Array?Float64Array:void 0;H=function(){var r,n,t;if("function"!=typeof M)return!1;try{n=new M([1,3.14,-3.14,NaN]),t=n,r=(V&&t instanceof Float64Array||"[object Float64Array]"===N(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var W,k=H,C="function"==typeof Uint8Array,q="function"==typeof Uint8Array?Uint8Array:null,Y="function"==typeof Uint8Array?Uint8Array:void 0;W=function(){var r,n,t;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,256,257]),t=n,r=(C&&t instanceof Uint8Array||"[object Uint8Array]"===N(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Y:function(){throw new Error("not implemented")};var R,z=W,B="function"==typeof Uint16Array,D="function"==typeof Uint16Array?Uint16Array:null,J="function"==typeof Uint16Array?Uint16Array:void 0;R=function(){var r,n,t;if("function"!=typeof D)return!1;try{n=new D(n=[1,3.14,-3.14,65536,65537]),t=n,r=(B&&t instanceof Uint16Array||"[object Uint16Array]"===N(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?J:function(){throw new Error("not implemented")};var K,Q={uint16:R,uint8:z};(K=new Q.uint16(1))[0]=4660;var X=52===new Q.uint8(K.buffer)[0],Z=!0===X?1:0,$=new k(1),rr=new G($.buffer);function nr(r){return $[0]=r,rr[Z]}var tr=!0===X?1:0,er=new k(1),ur=new G(er.buffer);function or(r,n){return er[0]=r,ur[tr]=n>>>0,er[0]}var ir=1023,fr=h.NEGATIVE_INFINITY,ar=.6931471803691238,cr=1.9082149292705877e-10,lr=1048575;function yr(r){var n,t,e,u,o,i,f,a,c,l,y,s;return 0===r?fr:O(r)||r<0?NaN:(o=0,(t=nr(r))<1048576&&(o-=54,t=nr(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-ir|0,o+=(a=614244+(t&=lr)&1048576|0)>>20|0,f=(r=or(r,t|1072693248^a))-1,(lr&2+t)<3?0===f?0===o?0:o*ar+o*cr:(i=f*f*(.5-.3333333333333333*f),0===o?f-i:o*ar-(i-o*cr-f)):(a=t-398458|0,c=440401-t|0,u=(y=(s=(l=f/(2+f))*l)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),i=e+u,(a|=c)>0?(n=.5*f*f,0===o?f-(n-l*(n+i)):o*ar-(n-(l*(n+i)+o*cr)-f)):0===o?f-l*(f-i):o*ar-(l*(f-i)-o*cr-f))))}var sr=3.141592653589793,pr=Number.POSITIVE_INFINITY;function vr(r){return r===pr||r===fr}var mr,br,Nr=2147483647;!0===X?(mr=1,br=0):(mr=0,br=1);var hr,gr,wr={HIGH:mr,LOW:br},dr=new k(1),Ar=new G(dr.buffer),_r=wr.HIGH,jr=wr.LOW;function Ur(r,n,t,e){return dr[0]=r,n[e]=Ar[_r],n[e+t]=Ar[jr],n}function Or(r){return Ur(r,[0,0],1,0)}c(Or,"assign",Ur),!0===X?(hr=1,gr=0):(hr=0,gr=1);var Tr={HIGH:hr,LOW:gr},Er=new k(1),Ir=new G(Er.buffer),xr=Tr.HIGH,Sr=Tr.LOW;function Fr(r,n){return Ir[xr]=r,Ir[Sr]=n,Er[0]}var Pr=[0,0];function Hr(r,n){var t,e;return Or.assign(r,Pr,1,0),t=Pr[0],t&=Nr,e=nr(n),Fr(t|=e&=2147483648,Pr[1])}var Gr=1.5707963267948966,Vr=6123233995736766e-32;function Mr(r,n){var t;return O(n)||O(r)?NaN:vr(n)?n===pr?vr(r)?Hr(sr/4,r):Hr(0,r):vr(r)?Hr(3*sr/4,r):Hr(sr,r):vr(r)?Hr(sr/2,r):0===r?n>=0&&!function(r){return!!(nr(r)>>>31)}(n)?Hr(0,r):Hr(sr,r):0===n?Hr(sr/2,r):(t=function(r){var n,t,e,u;return O(r)||0===r?r:r===pr?Gr:r===fr?-Gr:(r<0&&(t=!0,r=-r),n=0,r>2.414213562373095?(e=Gr,n=1,r=-1/r):r<=.66?e=0:(e=.7853981633974483,n=2,r=(r-1)/(r+1)),u=(u=r*r)*function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(u)/function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))}(u),u=r*u+r,2===n?u+=.5*Vr:1===n&&(u+=Vr),e+=u,t?-e:e)}(r/n),n<0?t<=0?t+sr:t-sr:t)}function Lr(r,n,t){return O(r)||O(t)||O(n)||t<=0?NaN:.3183098861837907*Mr(r-n,t)+.5}function Wr(r){return function(){return r}}function kr(r,n,t){return O(r)||O(t)||O(n)||t<=0?NaN:yr(.3183098861837907*Mr(r-n,t)+.5)}c(Lr,"factory",(function(r,n){return O(n)||O(r)||n<=0?Wr(NaN):function(t){return O(t)?NaN:.3183098861837907*Mr(t-r,n)+.5}})),c(kr,"factory",(function(r,n){return O(n)||O(r)||n<=0?Wr(NaN):function(t){return O(t)?NaN:yr(.3183098861837907*Mr(t-r,n)+.5)}}));var Cr=.6931471803691238,qr=1.9082149292705877e-10;function Yr(r){var n,t,e,u,o,i,f,a,c,l;if(r<-1||O(r))return NaN;if(-1===r)return fr;if(r===pr)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,u=r,t=1)}return 0!==l&&(e<9007199254740992?(o=(l=((t=nr(c=1+r))>>20)-ir)>0?1-(c-r):r-(c-1),o/=c):(l=((t=nr(c=r))>>20)-ir,o=0),(t&=1048575)<434334?c=or(c,1072693248|t):(l+=1,c=or(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?l*Cr+(o+=l*qr):l*Cr-((a=n*(1-.6666666666666666*u))-(l*qr+o)-u):(a=(f=(i=u/(2+u))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===l?u-(n-i*(n+a)):l*Cr-(n-(i*(n+a)+(l*qr+o))-u))}var Rr=Math.floor;function zr(r){return Rr(r)===r}function Br(r){return zr(r/2)}function Dr(r){return Br(r>0?r-1:r+1)}var Jr=Math.sqrt;function Kr(r){return Math.abs(r)}var Qr=!0===X?0:1,Xr=new k(1),Zr=new G(Xr.buffer);function $r(r,n){return Xr[0]=r,Zr[Qr]=n>>>0,Xr[0]}function rn(r){return 0|r}var nn=1048576,tn=[1,1.5],en=[0,.5849624872207642],un=[0,1.350039202129749e-8];function on(r,n,t,e){return O(r)||vr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Kr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return on(r,[0,0],1,0)}),"assign",on);var fn=[0,0],an=[0,0];function cn(r,n){var t,e;return 0===n||0===r||O(r)||vr(r)?r:(on(r,fn,1,0),n+=fn[1],n+=function(r){var n=nr(r);return(n=(2146435072&n)>>>20)-ir|0}(r=fn[0]),n<-1074?Hr(0,r):n>1023?r<0?fr:pr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Or.assign(r,an,1,0),t=an[0],t&=2148532223,e*Fr(t|=n+ir<<20,an[1])))}var ln=1048575,yn=1048576,sn=1083179008,pn=1e300,vn=1e-300,mn=[0,0],bn=[0,0];function Nn(r,n){var t,e,u,o,i,f,a,c,l,y,s,p,v,m;if(O(r)||O(n))return NaN;if(Or.assign(n,mn,1,0),i=mn[0],0===mn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Jr(r);if(-.5===n)return 1/Jr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(vr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Kr(r)<1==(n===pr)?0:pr}(r,n)}if(Or.assign(r,mn,1,0),o=mn[0],0===mn[1]){if(0===o)return function(r,n){return n===fr?pr:n===pr?0:n>0?Dr(n)?r:0:Dr(n)?Hr(pr,r):pr}(r,n);if(1===r)return 1;if(-1===r&&Dr(n))return-1;if(vr(r))return r===fr?Nn(-0,-n):n<0?0:pr}if(r<0&&!1===zr(n))return(r-r)/(r-r);if(u=Kr(r),t=o&Nr|0,e=i&Nr|0,a=i>>>31|0,f=(f=o>>>31|0)&&Dr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(nr(r)&Nr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*pn*pn:f*vn*vn;if(t>1072693248)return 0===a?f*pn*pn:f*vn*vn;s=function(r,n){var t,e,u,o,i,f;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=$r(e=(o=1.4426950216293335*u)+i,0))-o),r[0]=e,r[1]=t,r}(bn,u)}else s=function(r,n,t){var e,u,o,i,f,a,c,l,y,s,p,v,m,b,N,h,g,w,d,A,_;return w=0,t<nn&&(w-=53,t=nr(n*=9007199254740992)),w+=(t>>20)-ir|0,t=1072693248|(d=1048575&t|0),d<=235662?A=0:d<767610?A=1:(A=0,w+=1,t-=nn),i=$r(u=(h=(n=or(n,t))-(c=tn[A]))*(g=1/(n+c)),0),e=524288+(t>>1|536870912),a=or(0,e+=A<<18),N=(o=u*u)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=$r(a=3+(o=i*i)+(N+=(f=g*(h-i*a-i*(n-(a-c))))*(i+u)),0),m=(p=-7.028461650952758e-9*(y=$r(y=(h=i*a)+(g=f*a+(N-(a-3-o))*u),0))+.9617966939259756*(g-(y-h))+un[A])-((v=$r(v=(s=.9617967009544373*y)+p+(l=en[A])+(b=w),0))-b-l-s),r[0]=v,r[1]=m,r}(bn,u,t);if(p=(y=(n-(c=$r(n,0)))*s[0]+n*s[1])+(l=c*s[0]),Or.assign(p,mn,1,0),v=rn(mn[0]),m=rn(mn[1]),v>=sn){if(0!=(v-sn|m))return f*pn*pn;if(y+8008566259537294e-32>p-l)return f*pn*pn}else if((v&Nr)>=1083231232){if(0!=(v-3230714880|m))return f*vn*vn;if(y<=p-l)return f*vn*vn}return p=function(r,n,t){var e,u,o,i,f,a,c,l,y,s;return y=((l=r&Nr|0)>>20)-ir|0,c=0,l>1071644672&&(u=or(0,((c=r+(yn>>y+1)>>>0)&~(ln>>(y=((c&Nr)>>20)-ir|0)))>>>0),c=(c&ln|yn)>>20-y>>>0,r<0&&(c=-c),n-=u),r=rn(r=nr(a=1-((a=(o=.6931471824645996*(u=$r(u=t+n,0)))+(i=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(s=u)?.16666666666666602:.16666666666666602+s*(s*(6613756321437934e-20+s*(4.1381367970572385e-8*s-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-o))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?cn(a,c):or(a,r)}(v,l,y),f*p}var hn=1.1447298858494002;function gn(r,n,t){return O(r)||O(t)||O(n)||t<=0?NaN:-(hn+yr(t)+Yr(Nn((r-n)/t,2)))}function wn(r,n,t){return O(r)||O(t)||O(n)||t<=0?NaN:1/(sr*t*(1+Nn((r-n)/t,2)))}function dn(r,n,t){var e,u,o,i,f,a,c,l,y;return(u=2147483647&(e=nr(r))|0)>=1072010280&&(r<0&&(r=-r,n=-n),r=(y=.7853981633974483-r)+(l=3061616997868383e-32-n),n=0),i=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(l=(y=r*r)*y),c=y*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(l),i=n+y*((f=y*r)*(i+c)+n),l=r+(i+=.3333333333333341*f),u>=1072010280?(1-(e>>30&2))*((c=t)-2*(r-(l*l/(l+c)-i))):1===t?l:($r(y=l,0),c=i-(y-r),$r(a=o=-1/l,0),a+o*((f=1+a*y)+a*c))}c(gn,"factory",(function(r,n){return O(n)||O(r)||n<=0?Wr(NaN):function(t){return O(t)?NaN:-(hn+yr(n)+Yr(Nn((t-r)/n,2)))}})),c(wn,"factory",(function(r,n){var t;return O(n)||O(r)||n<=0?Wr(NaN):(t=n*sr,function(e){return O(e)?NaN:1/(t*(1+Nn((e-r)/n,2)))})}));var An=!0===X?0:1,_n=new k(1),jn=new G(_n.buffer);function Un(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var On=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Tn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],En=16777216,In=5.960464477539063e-8,xn=Un(20),Sn=Un(20),Fn=Un(20),Pn=Un(20);function Hn(r,n,t,e,u,o,i,f,a){var c,l,y,s,p,v,m,b,N;for(s=o,N=e[t],b=t,p=0;b>0;p++)l=In*N|0,Pn[p]=N-En*l|0,N=e[b-1]+l,b-=1;if(N=cn(N,u),N-=8*Rr(.125*N),N-=m=0|N,y=0,u>0?(m+=p=Pn[t-1]>>24-u,Pn[t-1]-=p<<24-u,y=Pn[t-1]>>23-u):0===u?y=Pn[t-1]>>23:N>=.5&&(y=2),y>0){for(m+=1,c=0,p=0;p<t;p++)b=Pn[p],0===c?0!==b&&(c=1,Pn[p]=16777216-b):Pn[p]=16777215-b;if(u>0)switch(u){case 1:Pn[t-1]&=8388607;break;case 2:Pn[t-1]&=4194303}2===y&&(N=1-N,0!==c&&(N-=cn(1,u)))}if(0===N){for(b=0,p=t-1;p>=o;p--)b|=Pn[p];if(0===b){for(v=1;0===Pn[o-v];v++);for(p=t+1;p<=t+v;p++){for(a[f+p]=On[i+p],l=0,b=0;b<=f;b++)l+=r[b]*a[f+(p-b)];e[p]=l}return Hn(r,n,t+=v,e,u,o,i,f,a)}}if(0===N)for(t-=1,u-=24;0===Pn[t];)t-=1,u-=24;else(N=cn(N,-u))>=En?(l=In*N|0,Pn[t]=N-En*l|0,u+=24,Pn[t+=1]=l):Pn[t]=0|N;for(l=cn(1,u),p=t;p>=0;p--)e[p]=l*Pn[p],l*=In;for(p=t;p>=0;p--){for(l=0,v=0;v<=s&&v<=t-p;v++)l+=Tn[v]*e[p+v];Fn[t-p]=l}for(l=0,p=t;p>=0;p--)l+=Fn[p];for(n[0]=0===y?l:-l,l=Fn[0]-l,p=1;p<=t;p++)l+=Fn[p];return n[1]=0===y?l:-l,7&m}function Gn(r,n,t,e){var u,o,i,f,a,c,l;for((o=(t-3)/24|0)<0&&(o=0),f=t-24*(o+1),c=o-(i=e-1),l=i+4,a=0;a<=l;a++)xn[a]=c<0?0:On[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*xn[i+(a-c)];Sn[a]=u}return Hn(r,n,4,Sn,f,4,o,i,xn)}var Vn=Math.round;function Mn(r,n,t){var e,u,o,i,f;return o=r-1.5707963267341256*(e=Vn(.6366197723675814*r)),i=6077100506506192e-26*e,f=n>>20|0,t[0]=o-i,f-(nr(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=o)-(o=u-(i=6077100506303966e-26*e))-i),t[0]=o-i,f-(nr(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=o)-(o=u-(i=20222662487111665e-37*e))-i),t[0]=o-i)),t[1]=o-t[0]-i,e}var Ln=1.5707963267341256,Wn=6077100506506192e-26,kn=2*Wn,Cn=3*Wn,qn=4*Wn,Yn=[0,0,0],Rn=[0,0];function zn(r,n){var t,e,u,o,i,f,a;if((u=2147483647&nr(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Mn(r,u,n):u<=1073928572?r>0?(a=r-Ln,n[0]=a-Wn,n[1]=a-n[0]-Wn,1):(a=r+Ln,n[0]=a+Wn,n[1]=a-n[0]+Wn,-1):r>0?(a=r-2*Ln,n[0]=a-kn,n[1]=a-n[0]-kn,2):(a=r+2*Ln,n[0]=a+kn,n[1]=a-n[0]+kn,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Mn(r,u,n):r>0?(a=r-3*Ln,n[0]=a-Cn,n[1]=a-n[0]-Cn,3):(a=r+3*Ln,n[0]=a+Cn,n[1]=a-n[0]+Cn,-3):1075388923===u?Mn(r,u,n):r>0?(a=r-4*Ln,n[0]=a-qn,n[1]=a-n[0]-qn,4):(a=r+4*Ln,n[0]=a+qn,n[1]=a-n[0]+qn,-4);if(u<1094263291)return Mn(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return _n[0]=r,jn[An]}(r),a=Fr(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)Yn[i]=0|a,a=16777216*(a-Yn[i]);for(Yn[2]=a,o=3;0===Yn[o-1];)o-=1;return f=Gn(Yn,Rn,e,o),r<0?(n[0]=-Rn[0],n[1]=-Rn[1],-f):(n[0]=Rn[0],n[1]=Rn[1],f)}var Bn=[0,0];function Dn(r){var n,t;return n=nr(r),(n&=2147483647)<=1072243195?n<1044381696?r:dn(r,0,1):n>=2146435072?NaN:(t=zn(r,Bn),dn(Bn[0],Bn[1],1-((1&t)<<1)))}function Jn(r,n,t){return O(n)||O(t)||t<=0||O(r)||r<0||r>1?NaN:n+t*Dn(sr*(r-.5))}function Kn(){var r,n=arguments,t=n[0],e="https://stdlib.io/e/"+t+"?";for(r=1;r<n.length;r++)e+="&arg[]="+encodeURIComponent(n[r]);return e}function Qn(){var r,n;if(!(this instanceof Qn))return 0===arguments.length?new Qn:new Qn(arguments[0],arguments[1]);if(arguments.length){if(r=arguments[1],!y(n=arguments[0])||I(n))throw new TypeError(Kn("invalid argument. Location parameter must be a number. Value: `%s`.",n));if(!_(r))throw new TypeError(Kn("0T57u",r))}else n=0,r=1;return a(this,"x0",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!y(r)||I(r))throw new TypeError(Kn("invalid assignment. Must be a number. Value: `%s`.",r));n=r}}),a(this,"gamma",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!_(n))throw new TypeError(Kn("invalid assignment. Must be a positive number. Value: `%s`.",n));r=n}}),this}return c(Jn,"factory",(function(r,n){return O(r)||O(n)||n<=0?Wr(NaN):function(t){return O(t)||t<0||t>1?NaN:r+n*Dn(sr*(t-.5))}})),l(Qn.prototype,"entropy",(function(){return r=this.x0,O(n=this.gamma)||O(r)||n<=0?NaN:yr(n)+yr(4*sr);var r,n})),l(Qn.prototype,"median",(function(){return r=this.x0,O(n=this.gamma)||O(r)||n<=0?NaN:r;var r,n})),l(Qn.prototype,"mode",(function(){return r=this.x0,O(n=this.gamma)||O(r)||n<=0?NaN:r;var r,n})),c(Qn.prototype,"cdf",(function(r){return Lr(r,this.x0,this.gamma)})),c(Qn.prototype,"logcdf",(function(r){return kr(r,this.x0,this.gamma)})),c(Qn.prototype,"logpdf",(function(r){return gn(r,this.x0,this.gamma)})),c(Qn.prototype,"pdf",(function(r){return wn(r,this.x0,this.gamma)})),c(Qn.prototype,"quantile",(function(r){return Jn(r,this.x0,this.gamma)})),Qn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).Cauchy=n();
//# sourceMappingURL=browser.js.map
