(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yr="152",nl=0,ha=1,il=2,sc=1,sl=2,cn=3,hn=0,bt=1,Zt=2,Mn=0,pi=1,ua=2,fa=3,ga=4,rl=5,fi=100,al=101,ol=102,pa=103,ma=104,cl=200,ll=201,dl=202,hl=203,rc=204,ac=205,ul=206,fl=207,gl=208,pl=209,ml=210,Al=0,Cl=1,Il=2,Ur=3,_l=4,vl=5,bl=6,xl=7,oc=0,yl=1,Sl=2,dn=0,Ml=1,El=2,Tl=3,Rl=4,wl=5,cc=300,Ii=301,_i=302,Pr=303,Gr=304,Vs=306,vi=1e3,Gt=1001,Gs=1002,nt=1003,Dr=1004,Ns=1005,St=1006,lc=1007,Hn=1008,kn=1009,Ll=1010,Nl=1011,dc=1012,Ul=1013,Bn=1014,yn=1015,ji=1016,Pl=1017,Gl=1018,mi=1020,Dl=1021,Dt=1023,Fl=1024,Bl=1025,Wn=1026,bi=1027,Vl=1028,Wl=1029,Ol=1030,zl=1031,Hl=1033,Js=33776,js=33777,Qs=33778,qs=33779,Aa=35840,Ca=35841,Ia=35842,_a=35843,kl=36196,va=37492,ba=37496,xa=37808,ya=37809,Sa=37810,Ma=37811,Ea=37812,Ta=37813,Ra=37814,wa=37815,La=37816,Na=37817,Ua=37818,Pa=37819,Ga=37820,Da=37821,$s=36492,Zl=36283,Fa=36284,Ba=36285,Va=36286,Qi=2300,xi=2301,er=2302,Wa=2400,Oa=2401,za=2402,Xl=2500,Yl=0,hc=1,Fr=2,uc=3e3,On=3001,Kl=3200,Jl=3201,fc=0,jl=1,zn="",be="srgb",qt="srgb-linear",gc="display-p3",tr=7680,Ql=519,Br=35044,Ha="300 es",Vr=1035;class Ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ka=1234567;const Xi=Math.PI/180,yi=180/Math.PI;function Xt(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gt[s&255]+gt[s>>8&255]+gt[s>>16&255]+gt[s>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]).toLowerCase()}function mt(s,e,t){return Math.max(e,Math.min(t,s))}function Kr(s,e){return(s%e+e)%e}function ql(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function $l(s,e,t){return s!==e?(t-s)/(e-s):0}function Yi(s,e,t){return(1-t)*s+t*e}function ed(s,e,t,n){return Yi(s,e,1-Math.exp(-t*n))}function td(s,e=1){return e-Math.abs(Kr(s,e*2)-e)}function nd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function id(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function sd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function rd(s,e){return s+Math.random()*(e-s)}function ad(s){return s*(.5-Math.random())}function od(s){s!==void 0&&(ka=s);let e=ka+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cd(s){return s*Xi}function ld(s){return s*yi}function Wr(s){return(s&s-1)===0&&s!==0}function pc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function mc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function dd(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),d=a((e+n)/2),h=r((e-n)/2),u=a((e-n)/2),g=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*d,c*h,c*u,o*l);break;case"YZY":s.set(c*u,o*d,c*h,o*l);break;case"ZXZ":s.set(c*h,c*u,o*d,o*l);break;case"XZX":s.set(o*d,c*m,c*g,o*l);break;case"YXY":s.set(c*g,o*d,c*m,o*l);break;case"ZYZ":s.set(c*m,c*g,o*d,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ln(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ye(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const hd={DEG2RAD:Xi,RAD2DEG:yi,generateUUID:Xt,clamp:mt,euclideanModulo:Kr,mapLinear:ql,inverseLerp:$l,lerp:Yi,damp:ed,pingpong:td,smoothstep:nd,smootherstep:id,randInt:sd,randFloat:rd,randFloatSpread:ad,seededRandom:od,degToRad:cd,radToDeg:ld,isPowerOfTwo:Wr,ceilPowerOfTwo:pc,floorPowerOfTwo:mc,setQuaternionFromProperEuler:dd,normalize:Ye,denormalize:ln};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],h=n[7],u=n[2],g=n[5],m=n[8],A=i[0],p=i[3],f=i[6],y=i[1],_=i[4],x=i[7],b=i[2],E=i[5],L=i[8];return r[0]=a*A+o*y+c*b,r[3]=a*p+o*_+c*E,r[6]=a*f+o*x+c*L,r[1]=l*A+d*y+h*b,r[4]=l*p+d*_+h*E,r[7]=l*f+d*x+h*L,r[2]=u*A+g*y+m*b,r[5]=u*p+g*_+m*E,r[8]=u*f+g*x+m*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*r*d+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=d*a-o*l,u=o*c-d*r,g=l*r-a*c,m=t*h+n*u+i*g;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/m;return e[0]=h*A,e[1]=(i*l-d*n)*A,e[2]=(o*n-i*a)*A,e[3]=u*A,e[4]=(d*t-i*c)*A,e[5]=(i*r-o*t)*A,e[6]=g*A,e[7]=(n*c-l*t)*A,e[8]=(a*t-n*r)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(nr.makeScale(e,t)),this}rotate(e){return this.premultiply(nr.makeRotation(-e)),this}translate(e,t){return this.premultiply(nr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nr=new Ge;function Ac(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function qi(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const Za={};function Ki(s){s in Za||(Za[s]=!0,console.warn(s))}function Ai(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ir(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const ud=new Ge().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),fd=new Ge().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function gd(s){return s.convertSRGBToLinear().applyMatrix3(fd)}function pd(s){return s.applyMatrix3(ud).convertLinearToSRGB()}const md={[qt]:s=>s,[be]:s=>s.convertSRGBToLinear(),[gc]:gd},Ad={[qt]:s=>s,[be]:s=>s.convertLinearToSRGB(),[gc]:pd},Vt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return qt},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=md[e],i=Ad[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let Jn;class Cc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Jn===void 0&&(Jn=qi("canvas")),Jn.width=e.width,Jn.height=e.height;const n=Jn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Jn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ai(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ai(t[n]/255)*255):t[n]=Ai(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ic{constructor(e=null){this.isSource=!0,this.uuid=Xt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(sr(i[a].image)):r.push(sr(i[a]))}else r=sr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function sr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Cc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cd=0;class dt extends Ti{constructor(e=dt.DEFAULT_IMAGE,t=dt.DEFAULT_MAPPING,n=Gt,i=Gt,r=St,a=Hn,o=Dt,c=kn,l=dt.DEFAULT_ANISOTROPY,d=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Xt(),this.name="",this.source=new Ic(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===On?be:zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vi:e.x=e.x-Math.floor(e.x);break;case Gt:e.x=e.x<0?0:1;break;case Gs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vi:e.y=e.y-Math.floor(e.y);break;case Gt:e.y=e.y<0?0:1;break;case Gs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===be?On:uc}set encoding(e){Ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===On?be:zn}}dt.DEFAULT_IMAGE=null;dt.DEFAULT_MAPPING=cc;dt.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,t=0,n=0,i=1){Ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],d=c[4],h=c[8],u=c[1],g=c[5],m=c[9],A=c[2],p=c[6],f=c[10];if(Math.abs(d-u)<.01&&Math.abs(h-A)<.01&&Math.abs(m-p)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+A)<.1&&Math.abs(m+p)<.1&&Math.abs(l+g+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,x=(g+1)/2,b=(f+1)/2,E=(d+u)/4,L=(h+A)/4,O=(m+p)/4;return _>x&&_>b?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=E/n,r=L/n):x>b?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=E/i,r=O/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=L/r,i=O/r),this.set(n,i,r,t),this}let y=Math.sqrt((p-m)*(p-m)+(h-A)*(h-A)+(u-d)*(u-d));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(h-A)/y,this.z=(u-d)/y,this.w=Math.acos((l+g+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zn extends Ti{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ki("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===On?be:zn),this.texture=new dt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:St,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ic(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _c extends dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nt,this.minFilter=nt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Id extends dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nt,this.minFilter=nt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],d=n[i+2],h=n[i+3];const u=r[a+0],g=r[a+1],m=r[a+2],A=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h;return}if(o===1){e[t+0]=u,e[t+1]=g,e[t+2]=m,e[t+3]=A;return}if(h!==A||c!==u||l!==g||d!==m){let p=1-o;const f=c*u+l*g+d*m+h*A,y=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const b=Math.sqrt(_),E=Math.atan2(b,f*y);p=Math.sin(p*E)/b,o=Math.sin(o*E)/b}const x=o*y;if(c=c*p+u*x,l=l*p+g*x,d=d*p+m*x,h=h*p+A*x,p===1-o){const b=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=b,l*=b,d*=b,h*=b}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],d=n[i+3],h=r[a],u=r[a+1],g=r[a+2],m=r[a+3];return e[t]=o*m+d*h+c*g-l*u,e[t+1]=c*m+d*u+l*h-o*g,e[t+2]=l*m+d*g+o*u-c*h,e[t+3]=d*m-o*h-c*u-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(i/2),h=o(r/2),u=c(n/2),g=c(i/2),m=c(r/2);switch(a){case"XYZ":this._x=u*d*h+l*g*m,this._y=l*g*h-u*d*m,this._z=l*d*m+u*g*h,this._w=l*d*h-u*g*m;break;case"YXZ":this._x=u*d*h+l*g*m,this._y=l*g*h-u*d*m,this._z=l*d*m-u*g*h,this._w=l*d*h+u*g*m;break;case"ZXY":this._x=u*d*h-l*g*m,this._y=l*g*h+u*d*m,this._z=l*d*m+u*g*h,this._w=l*d*h-u*g*m;break;case"ZYX":this._x=u*d*h-l*g*m,this._y=l*g*h+u*d*m,this._z=l*d*m-u*g*h,this._w=l*d*h+u*g*m;break;case"YZX":this._x=u*d*h+l*g*m,this._y=l*g*h+u*d*m,this._z=l*d*m-u*g*h,this._w=l*d*h-u*g*m;break;case"XZY":this._x=u*d*h-l*g*m,this._y=l*g*h-u*d*m,this._z=l*d*m+u*g*h,this._w=l*d*h+u*g*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){const g=.5/Math.sqrt(u+1);this._w=.25/g,this._x=(d-c)*g,this._y=(r-l)*g,this._z=(a-i)*g}else if(n>o&&n>h){const g=2*Math.sqrt(1+n-o-h);this._w=(d-c)/g,this._x=.25*g,this._y=(i+a)/g,this._z=(r+l)/g}else if(o>h){const g=2*Math.sqrt(1+o-n-h);this._w=(r-l)/g,this._x=(i+a)/g,this._y=.25*g,this._z=(c+d)/g}else{const g=2*Math.sqrt(1+h-n-o);this._w=(a-i)/g,this._x=(r+l)/g,this._y=(c+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+i*l-r*c,this._y=i*d+a*c+r*o-n*l,this._z=r*d+a*l+n*c-i*o,this._w=a*d-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),d=Math.atan2(l,o),h=Math.sin((1-t)*d)/l,u=Math.sin(t*d)/l;return this._w=a*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,n=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*i-o*n,d=c*n+o*t-r*i,h=c*i+r*n-a*t,u=-r*t-a*n-o*i;return this.x=l*c+u*-r+d*-o-h*-a,this.y=d*c+u*-a+h*-r-l*-o,this.z=h*c+u*-o+l*-a-d*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rr.copy(this).projectOnVector(e),this.sub(rr)}reflect(e){return this.sub(rr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rr=new w,Xa=new Tn;class un{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),jn.copy(e.boundingBox),jn.applyMatrix4(e.matrixWorld),this.union(jn);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let a=0,o=r.count;a<o;a++)tn.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(tn)}else i.boundingBox===null&&i.computeBoundingBox(),jn.copy(i.boundingBox),jn.applyMatrix4(e.matrixWorld),this.union(jn)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pi),as.subVectors(this.max,Pi),Qn.subVectors(e.a,Pi),qn.subVectors(e.b,Pi),$n.subVectors(e.c,Pi),mn.subVectors(qn,Qn),An.subVectors($n,qn),Nn.subVectors(Qn,$n);let t=[0,-mn.z,mn.y,0,-An.z,An.y,0,-Nn.z,Nn.y,mn.z,0,-mn.x,An.z,0,-An.x,Nn.z,0,-Nn.x,-mn.y,mn.x,0,-An.y,An.x,0,-Nn.y,Nn.x,0];return!ar(t,Qn,qn,$n,as)||(t=[1,0,0,0,1,0,0,0,1],!ar(t,Qn,qn,$n,as))?!1:(os.crossVectors(mn,An),t=[os.x,os.y,os.z],ar(t,Qn,qn,$n,as))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(en),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const en=[new w,new w,new w,new w,new w,new w,new w,new w],tn=new w,jn=new un,Qn=new w,qn=new w,$n=new w,mn=new w,An=new w,Nn=new w,Pi=new w,as=new w,os=new w,Un=new w;function ar(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Un.fromArray(s,r);const o=i.x*Math.abs(Un.x)+i.y*Math.abs(Un.y)+i.z*Math.abs(Un.z),c=e.dot(Un),l=t.dot(Un),d=n.dot(Un);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const _d=new un,Gi=new w,or=new w;class fn{constructor(e=new w,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_d.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gi.subVectors(e,this.center);const t=Gi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Gi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(or.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gi.copy(e.center).add(or)),this.expandByPoint(Gi.copy(e.center).sub(or))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new w,cr=new w,cs=new w,Cn=new w,lr=new w,ls=new w,dr=new w;class Jr{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nn.copy(this.origin).addScaledVector(this.direction,t),nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){cr.copy(e).add(t).multiplyScalar(.5),cs.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(cr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(cs),o=Cn.dot(this.direction),c=-Cn.dot(cs),l=Cn.lengthSq(),d=Math.abs(1-a*a);let h,u,g,m;if(d>0)if(h=a*c-o,u=a*o-c,m=r*d,h>=0)if(u>=-m)if(u<=m){const A=1/d;h*=A,u*=A,g=h*(h+a*u+2*o)+u*(a*h+u+2*c)+l}else u=r,h=Math.max(0,-(a*u+o)),g=-h*h+u*(u+2*c)+l;else u=-r,h=Math.max(0,-(a*u+o)),g=-h*h+u*(u+2*c)+l;else u<=-m?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-c),r),g=-h*h+u*(u+2*c)+l):u<=m?(h=0,u=Math.min(Math.max(-r,-c),r),g=u*(u+2*c)+l):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-c),r),g=-h*h+u*(u+2*c)+l);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),g=-h*h+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(cr).addScaledVector(cs,u),g}intersectSphere(e,t){nn.subVectors(e.center,this.origin);const n=nn.dot(this.direction),i=nn.dot(nn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),d>=0?(r=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-u.z)*h,c=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,c=(e.min.z-u.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,nn)!==null}intersectTriangle(e,t,n,i,r){lr.subVectors(t,e),ls.subVectors(n,e),dr.crossVectors(lr,ls);let a=this.direction.dot(dr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cn.subVectors(this.origin,e);const c=o*this.direction.dot(ls.crossVectors(Cn,ls));if(c<0)return null;const l=o*this.direction.dot(lr.cross(Cn));if(l<0||c+l>a)return null;const d=-o*Cn.dot(dr);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,o,c,l,d,h,u,g,m,A,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=d,f[10]=h,f[14]=u,f[3]=g,f[7]=m,f[11]=A,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ei.setFromMatrixColumn(e,0).length(),r=1/ei.setFromMatrixColumn(e,1).length(),a=1/ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=a*d,g=a*h,m=o*d,A=o*h;t[0]=c*d,t[4]=-c*h,t[8]=l,t[1]=g+m*l,t[5]=u-A*l,t[9]=-o*c,t[2]=A-u*l,t[6]=m+g*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*d,g=c*h,m=l*d,A=l*h;t[0]=u+A*o,t[4]=m*o-g,t[8]=a*l,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=g*o-m,t[6]=A+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*d,g=c*h,m=l*d,A=l*h;t[0]=u-A*o,t[4]=-a*h,t[8]=m+g*o,t[1]=g+m*o,t[5]=a*d,t[9]=A-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*d,g=a*h,m=o*d,A=o*h;t[0]=c*d,t[4]=m*l-g,t[8]=u*l+A,t[1]=c*h,t[5]=A*l+u,t[9]=g*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,g=a*l,m=o*c,A=o*l;t[0]=c*d,t[4]=A-u*h,t[8]=m*h+g,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=g*h+m,t[10]=u-A*h}else if(e.order==="XZY"){const u=a*c,g=a*l,m=o*c,A=o*l;t[0]=c*d,t[4]=-h,t[8]=l*d,t[1]=u*h+A,t[5]=a*d,t[9]=g*h-m,t[2]=m*h-g,t[6]=o*d,t[10]=A*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vd,e,bd)}lookAt(e,t,n){const i=this.elements;return Tt.subVectors(e,t),Tt.lengthSq()===0&&(Tt.z=1),Tt.normalize(),In.crossVectors(n,Tt),In.lengthSq()===0&&(Math.abs(n.z)===1?Tt.x+=1e-4:Tt.z+=1e-4,Tt.normalize(),In.crossVectors(n,Tt)),In.normalize(),ds.crossVectors(Tt,In),i[0]=In.x,i[4]=ds.x,i[8]=Tt.x,i[1]=In.y,i[5]=ds.y,i[9]=Tt.y,i[2]=In.z,i[6]=ds.z,i[10]=Tt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],h=n[5],u=n[9],g=n[13],m=n[2],A=n[6],p=n[10],f=n[14],y=n[3],_=n[7],x=n[11],b=n[15],E=i[0],L=i[4],O=i[8],C=i[12],M=i[1],K=i[5],Z=i[9],U=i[13],G=i[2],D=i[6],Q=i[10],X=i[14],k=i[3],te=i[7],J=i[11],Ae=i[15];return r[0]=a*E+o*M+c*G+l*k,r[4]=a*L+o*K+c*D+l*te,r[8]=a*O+o*Z+c*Q+l*J,r[12]=a*C+o*U+c*X+l*Ae,r[1]=d*E+h*M+u*G+g*k,r[5]=d*L+h*K+u*D+g*te,r[9]=d*O+h*Z+u*Q+g*J,r[13]=d*C+h*U+u*X+g*Ae,r[2]=m*E+A*M+p*G+f*k,r[6]=m*L+A*K+p*D+f*te,r[10]=m*O+A*Z+p*Q+f*J,r[14]=m*C+A*U+p*X+f*Ae,r[3]=y*E+_*M+x*G+b*k,r[7]=y*L+_*K+x*D+b*te,r[11]=y*O+_*Z+x*Q+b*J,r[15]=y*C+_*U+x*X+b*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],h=e[6],u=e[10],g=e[14],m=e[3],A=e[7],p=e[11],f=e[15];return m*(+r*c*h-i*l*h-r*o*u+n*l*u+i*o*g-n*c*g)+A*(+t*c*g-t*l*u+r*a*u-i*a*g+i*l*d-r*c*d)+p*(+t*l*h-t*o*g-r*a*h+n*a*g+r*o*d-n*l*d)+f*(-i*o*d-t*c*h+t*o*u+i*a*h-n*a*u+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=e[9],u=e[10],g=e[11],m=e[12],A=e[13],p=e[14],f=e[15],y=h*p*l-A*u*l+A*c*g-o*p*g-h*c*f+o*u*f,_=m*u*l-d*p*l-m*c*g+a*p*g+d*c*f-a*u*f,x=d*A*l-m*h*l+m*o*g-a*A*g-d*o*f+a*h*f,b=m*h*c-d*A*c-m*o*u+a*A*u+d*o*p-a*h*p,E=t*y+n*_+i*x+r*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/E;return e[0]=y*L,e[1]=(A*u*r-h*p*r-A*i*g+n*p*g+h*i*f-n*u*f)*L,e[2]=(o*p*r-A*c*r+A*i*l-n*p*l-o*i*f+n*c*f)*L,e[3]=(h*c*r-o*u*r-h*i*l+n*u*l+o*i*g-n*c*g)*L,e[4]=_*L,e[5]=(d*p*r-m*u*r+m*i*g-t*p*g-d*i*f+t*u*f)*L,e[6]=(m*c*r-a*p*r-m*i*l+t*p*l+a*i*f-t*c*f)*L,e[7]=(a*u*r-d*c*r+d*i*l-t*u*l-a*i*g+t*c*g)*L,e[8]=x*L,e[9]=(m*h*r-d*A*r-m*n*g+t*A*g+d*n*f-t*h*f)*L,e[10]=(a*A*r-m*o*r+m*n*l-t*A*l-a*n*f+t*o*f)*L,e[11]=(d*o*r-a*h*r-d*n*l+t*h*l+a*n*g-t*o*g)*L,e[12]=b*L,e[13]=(d*A*i-m*h*i+m*n*u-t*A*u-d*n*p+t*h*p)*L,e[14]=(m*o*i-a*A*i-m*n*c+t*A*c+a*n*p-t*o*p)*L,e[15]=(a*h*i-d*o*i+d*n*c-t*h*c-a*n*u+t*o*u)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,d=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,d*o+n,d*c-i*a,0,l*c-i*o,d*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,d=a+a,h=o+o,u=r*l,g=r*d,m=r*h,A=a*d,p=a*h,f=o*h,y=c*l,_=c*d,x=c*h,b=n.x,E=n.y,L=n.z;return i[0]=(1-(A+f))*b,i[1]=(g+x)*b,i[2]=(m-_)*b,i[3]=0,i[4]=(g-x)*E,i[5]=(1-(u+f))*E,i[6]=(p+y)*E,i[7]=0,i[8]=(m+_)*L,i[9]=(p-y)*L,i[10]=(1-(u+A))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ei.set(i[0],i[1],i[2]).length();const a=ei.set(i[4],i[5],i[6]).length(),o=ei.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Wt.copy(this);const l=1/r,d=1/a,h=1/o;return Wt.elements[0]*=l,Wt.elements[1]*=l,Wt.elements[2]*=l,Wt.elements[4]*=d,Wt.elements[5]*=d,Wt.elements[6]*=d,Wt.elements[8]*=h,Wt.elements[9]*=h,Wt.elements[10]*=h,t.setFromRotationMatrix(Wt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a){const o=this.elements,c=2*r/(t-e),l=2*r/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i),u=-(a+r)/(a-r),g=-2*a*r/(a-r);return o[0]=c,o[4]=0,o[8]=d,o[12]=0,o[1]=0,o[5]=l,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=g,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,a){const o=this.elements,c=1/(t-e),l=1/(n-i),d=1/(a-r),h=(t+e)*c,u=(n+i)*l,g=(a+r)*d;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*d,o[14]=-g,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ei=new w,Wt=new Ne,vd=new w(0,0,0),bd=new w(1,1,1),In=new w,ds=new w,Tt=new w,Ya=new Ne,Ka=new Tn;class Ws{constructor(e=0,t=0,n=0,i=Ws.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],d=i[9],h=i[2],u=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ya.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ya,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ka.setFromEuler(this),this.setFromQuaternion(Ka,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ws.DEFAULT_ORDER="XYZ";class vc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xd=0;const Ja=new w,ti=new Tn,sn=new Ne,hs=new w,Di=new w,yd=new w,Sd=new Tn,ja=new w(1,0,0),Qa=new w(0,1,0),qa=new w(0,0,1),Md={type:"added"},$a={type:"removed"};class je extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Xt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=je.DEFAULT_UP.clone();const e=new w,t=new Ws,n=new Tn,i=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Ge}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new vc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ti.setFromAxisAngle(e,t),this.quaternion.multiply(ti),this}rotateOnWorldAxis(e,t){return ti.setFromAxisAngle(e,t),this.quaternion.premultiply(ti),this}rotateX(e){return this.rotateOnAxis(ja,e)}rotateY(e){return this.rotateOnAxis(Qa,e)}rotateZ(e){return this.rotateOnAxis(qa,e)}translateOnAxis(e,t){return Ja.copy(e).applyQuaternion(this.quaternion),this.position.add(Ja.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ja,e)}translateY(e){return this.translateOnAxis(Qa,e)}translateZ(e){return this.translateOnAxis(qa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hs.copy(e):hs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Di,hs,this.up):sn.lookAt(hs,Di,this.up),this.quaternion.setFromRotationMatrix(sn),i&&(sn.extractRotation(i.matrixWorld),ti.setFromRotationMatrix(sn),this.quaternion.premultiply(ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Md)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($a)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent($a)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,e,yd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,Sd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),g=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),g.length>0&&(n.animations=g),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}je.DEFAULT_UP=new w(0,1,0);je.DEFAULT_MATRIX_AUTO_UPDATE=!0;je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ot=new w,rn=new w,hr=new w,an=new w,ni=new w,ii=new w,eo=new w,ur=new w,fr=new w,gr=new w;let us=!1;class kt{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ot.subVectors(e,t),i.cross(Ot);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ot.subVectors(i,t),rn.subVectors(n,t),hr.subVectors(e,t);const a=Ot.dot(Ot),o=Ot.dot(rn),c=Ot.dot(hr),l=rn.dot(rn),d=rn.dot(hr),h=a*l-o*o;if(h===0)return r.set(-2,-1,-1);const u=1/h,g=(l*c-o*d)*u,m=(a*d-o*c)*u;return r.set(1-g-m,m,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,an),an.x>=0&&an.y>=0&&an.x+an.y<=1}static getUV(e,t,n,i,r,a,o,c){return us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),us=!0),this.getInterpolation(e,t,n,i,r,a,o,c)}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,an),c.setScalar(0),c.addScaledVector(r,an.x),c.addScaledVector(a,an.y),c.addScaledVector(o,an.z),c}static isFrontFacing(e,t,n,i){return Ot.subVectors(n,t),rn.subVectors(e,t),Ot.cross(rn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),Ot.cross(rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),us=!0),kt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return kt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;ni.subVectors(i,n),ii.subVectors(r,n),ur.subVectors(e,n);const c=ni.dot(ur),l=ii.dot(ur);if(c<=0&&l<=0)return t.copy(n);fr.subVectors(e,i);const d=ni.dot(fr),h=ii.dot(fr);if(d>=0&&h<=d)return t.copy(i);const u=c*h-d*l;if(u<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(ni,a);gr.subVectors(e,r);const g=ni.dot(gr),m=ii.dot(gr);if(m>=0&&g<=m)return t.copy(r);const A=g*l-c*m;if(A<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(ii,o);const p=d*m-g*h;if(p<=0&&h-d>=0&&g-m>=0)return eo.subVectors(r,i),o=(h-d)/(h-d+(g-m)),t.copy(i).addScaledVector(eo,o);const f=1/(p+A+u);return a=A*f,o=u*f,t.copy(n).addScaledVector(ni,a).addScaledVector(ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ed=0;class Qt extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Xt(),this.name="",this.type="Material",this.blending=pi,this.side=hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=rc,this.blendDst=ac,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==hn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zt={h:0,s:0,l:0},fs={h:0,s:0,l:0};function pr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ee{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=be){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Vt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Vt.workingColorSpace){if(e=Kr(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=pr(a,r,e+1/3),this.g=pr(a,r,e),this.b=pr(a,r,e-1/3)}return Vt.toWorkingColorSpace(this,i),this}setStyle(e,t=be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=be){const n=bc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=be){return Vt.fromWorkingColorSpace(pt.copy(this),e),Math.round(mt(pt.r*255,0,255))*65536+Math.round(mt(pt.g*255,0,255))*256+Math.round(mt(pt.b*255,0,255))}getHexString(e=be){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vt.workingColorSpace){Vt.fromWorkingColorSpace(pt.copy(this),t);const n=pt.r,i=pt.g,r=pt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=d<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Vt.workingColorSpace){return Vt.fromWorkingColorSpace(pt.copy(this),t),e.r=pt.r,e.g=pt.g,e.b=pt.b,e}getStyle(e=be){Vt.fromWorkingColorSpace(pt.copy(this),e);const t=pt.r,n=pt.g,i=pt.b;return e!==be?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(zt),zt.h+=e,zt.s+=t,zt.l+=n,this.setHSL(zt.h,zt.s,zt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zt),e.getHSL(fs);const n=Yi(zt.h,fs.h,t),i=Yi(zt.s,fs.s,t),r=Yi(zt.l,fs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pt=new Ee;Ee.NAMES=bc;class Sn extends Qt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tt=new w,gs=new Ve;class xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Br,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gs.fromBufferAttribute(this,t),gs.applyMatrix3(e),this.setXY(t,gs.x,gs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix3(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Br&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class xc extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yc extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ft extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Td=0;const Ut=new Ne,mr=new je,si=new w,Rt=new un,Fi=new un,lt=new w;class Yt extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Xt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ac(e)?yc:xc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,n){return Ut.makeTranslation(e,t,n),this.applyMatrix4(Ut),this}scale(e,t,n){return Ut.makeScale(e,t,n),this.applyMatrix4(Ut),this}lookAt(e){return mr.lookAt(e),mr.updateMatrix(),this.applyMatrix4(mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Rt.setFromBufferAttribute(r),this.morphTargetsRelative?(lt.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(lt),lt.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(lt)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Fi.setFromBufferAttribute(o),this.morphTargetsRelative?(lt.addVectors(Rt.min,Fi.min),Rt.expandByPoint(lt),lt.addVectors(Rt.max,Fi.max),Rt.expandByPoint(lt)):(Rt.expandByPoint(Fi.min),Rt.expandByPoint(Fi.max))}Rt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)lt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(lt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)lt.fromBufferAttribute(o,l),c&&(si.fromBufferAttribute(e,l),lt.add(si)),i=Math.max(i,n.distanceToSquared(lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],d=[];for(let M=0;M<o;M++)l[M]=new w,d[M]=new w;const h=new w,u=new w,g=new w,m=new Ve,A=new Ve,p=new Ve,f=new w,y=new w;function _(M,K,Z){h.fromArray(i,M*3),u.fromArray(i,K*3),g.fromArray(i,Z*3),m.fromArray(a,M*2),A.fromArray(a,K*2),p.fromArray(a,Z*2),u.sub(h),g.sub(h),A.sub(m),p.sub(m);const U=1/(A.x*p.y-p.x*A.y);isFinite(U)&&(f.copy(u).multiplyScalar(p.y).addScaledVector(g,-A.y).multiplyScalar(U),y.copy(g).multiplyScalar(A.x).addScaledVector(u,-p.x).multiplyScalar(U),l[M].add(f),l[K].add(f),l[Z].add(f),d[M].add(y),d[K].add(y),d[Z].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let M=0,K=x.length;M<K;++M){const Z=x[M],U=Z.start,G=Z.count;for(let D=U,Q=U+G;D<Q;D+=3)_(n[D+0],n[D+1],n[D+2])}const b=new w,E=new w,L=new w,O=new w;function C(M){L.fromArray(r,M*3),O.copy(L);const K=l[M];b.copy(K),b.sub(L.multiplyScalar(L.dot(K))).normalize(),E.crossVectors(O,K);const U=E.dot(d[M])<0?-1:1;c[M*4]=b.x,c[M*4+1]=b.y,c[M*4+2]=b.z,c[M*4+3]=U}for(let M=0,K=x.length;M<K;++M){const Z=x[M],U=Z.start,G=Z.count;for(let D=U,Q=U+G;D<Q;D+=3)C(n[D+0]),C(n[D+1]),C(n[D+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,g=n.count;u<g;u++)n.setXYZ(u,0,0,0);const i=new w,r=new w,a=new w,o=new w,c=new w,l=new w,d=new w,h=new w;if(e)for(let u=0,g=e.count;u<g;u+=3){const m=e.getX(u+0),A=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,A),a.fromBufferAttribute(t,p),d.subVectors(a,r),h.subVectors(i,r),d.cross(h),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,A),l.fromBufferAttribute(n,p),o.add(d),c.add(d),l.add(d),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(A,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,g=t.count;u<g;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,r),h.subVectors(i,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)lt.fromBufferAttribute(e,t),lt.normalize(),e.setXYZ(t,lt.x,lt.y,lt.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,h=o.normalized,u=new l.constructor(c.length*d);let g=0,m=0;for(let A=0,p=c.length;A<p;A++){o.isInterleavedBufferAttribute?g=c[A]*o.data.stride+o.offset:g=c[A]*d;for(let f=0;f<d;f++)u[m++]=l[g++]}return new xt(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let d=0,h=l.length;d<h;d++){const u=l[d],g=e(u,n);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,u=l.length;h<u;h++){const g=l[h];d.push(g.toJSON(e.data))}d.length>0&&(i[c]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const d=i[l];this.setAttribute(l,d.clone(t))}const r=e.morphAttributes;for(const l in r){const d=[],h=r[l];for(let u=0,g=h.length;u<g;u++)d.push(h[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const to=new Ne,Jt=new Jr,ps=new fn,no=new w,ri=new w,ai=new w,oi=new w,Ar=new w,ms=new w,As=new Ve,Cs=new Ve,Is=new Ve,io=new w,so=new w,ro=new w,_s=new w,vs=new w;class Mt extends je{constructor(e=new Yt,t=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){ms.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=o[c],h=r[c];d!==0&&(Ar.fromBufferAttribute(h,e),a?ms.addScaledVector(Ar,d):ms.addScaledVector(Ar.sub(t),d))}t.add(ms)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(r),Jt.copy(e.ray).recast(e.near),!(ps.containsPoint(Jt.origin)===!1&&(Jt.intersectSphere(ps,no)===null||Jt.origin.distanceToSquared(no)>(e.far-e.near)**2))&&(to.copy(r).invert(),Jt.copy(e.ray).applyMatrix4(to),!(n.boundingBox!==null&&Jt.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const i=this.geometry,r=this.material,a=i.index,o=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,d=i.attributes.normal,h=i.groups,u=i.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,m=h.length;g<m;g++){const A=h[g],p=r[A.materialIndex],f=Math.max(A.start,u.start),y=Math.min(a.count,Math.min(A.start+A.count,u.start+u.count));for(let _=f,x=y;_<x;_+=3){const b=a.getX(_),E=a.getX(_+1),L=a.getX(_+2);n=bs(this,p,e,Jt,c,l,d,b,E,L),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=A.materialIndex,t.push(n))}}else{const g=Math.max(0,u.start),m=Math.min(a.count,u.start+u.count);for(let A=g,p=m;A<p;A+=3){const f=a.getX(A),y=a.getX(A+1),_=a.getX(A+2);n=bs(this,r,e,Jt,c,l,d,f,y,_),n&&(n.faceIndex=Math.floor(A/3),t.push(n))}}else if(o!==void 0)if(Array.isArray(r))for(let g=0,m=h.length;g<m;g++){const A=h[g],p=r[A.materialIndex],f=Math.max(A.start,u.start),y=Math.min(o.count,Math.min(A.start+A.count,u.start+u.count));for(let _=f,x=y;_<x;_+=3){const b=_,E=_+1,L=_+2;n=bs(this,p,e,Jt,c,l,d,b,E,L),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=A.materialIndex,t.push(n))}}else{const g=Math.max(0,u.start),m=Math.min(o.count,u.start+u.count);for(let A=g,p=m;A<p;A+=3){const f=A,y=A+1,_=A+2;n=bs(this,r,e,Jt,c,l,d,f,y,_),n&&(n.faceIndex=Math.floor(A/3),t.push(n))}}}}function Rd(s,e,t,n,i,r,a,o){let c;if(e.side===bt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===hn,o),c===null)return null;vs.copy(o),vs.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(vs);return l<t.near||l>t.far?null:{distance:l,point:vs.clone(),object:s}}function bs(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,ri),s.getVertexPosition(c,ai),s.getVertexPosition(l,oi);const d=Rd(s,e,t,n,ri,ai,oi,_s);if(d){i&&(As.fromBufferAttribute(i,o),Cs.fromBufferAttribute(i,c),Is.fromBufferAttribute(i,l),d.uv=kt.getInterpolation(_s,ri,ai,oi,As,Cs,Is,new Ve)),r&&(As.fromBufferAttribute(r,o),Cs.fromBufferAttribute(r,c),Is.fromBufferAttribute(r,l),d.uv1=kt.getInterpolation(_s,ri,ai,oi,As,Cs,Is,new Ve),d.uv2=d.uv1),a&&(io.fromBufferAttribute(a,o),so.fromBufferAttribute(a,c),ro.fromBufferAttribute(a,l),d.normal=kt.getInterpolation(_s,ri,ai,oi,io,so,ro,new w),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new w,materialIndex:0};kt.getNormal(ri,ai,oi,h.normal),d.face=h}return d}class ns extends Yt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],d=[],h=[];let u=0,g=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(d,3)),this.setAttribute("uv",new Ft(h,2));function m(A,p,f,y,_,x,b,E,L,O,C){const M=x/L,K=b/O,Z=x/2,U=b/2,G=E/2,D=L+1,Q=O+1;let X=0,k=0;const te=new w;for(let J=0;J<Q;J++){const Ae=J*K-U;for(let ne=0;ne<D;ne++){const B=ne*M-Z;te[A]=B*y,te[p]=Ae*_,te[f]=G,l.push(te.x,te.y,te.z),te[A]=0,te[p]=0,te[f]=E>0?1:-1,d.push(te.x,te.y,te.z),h.push(ne/L),h.push(1-J/O),X+=1}}for(let J=0;J<O;J++)for(let Ae=0;Ae<L;Ae++){const ne=u+Ae+D*J,B=u+Ae+D*(J+1),Y=u+(Ae+1)+D*(J+1),re=u+(Ae+1)+D*J;c.push(ne,B,re),c.push(B,Y,re),k+=6}o.addGroup(g,k,C),g+=k,u+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Si(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function _t(s){const e={};for(let t=0;t<s.length;t++){const n=Si(s[t]);for(const i in n)e[i]=n[i]}return e}function wd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Sc(s){return s.getRenderTarget()===null?s.outputColorSpace:qt}const Ld={clone:Si,merge:_t};var Nd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends Qt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nd,this.fragmentShader=Ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Si(e.uniforms),this.uniformsGroups=wd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mc extends je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class vt extends Mc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yi*2*Math.atan(Math.tan(Xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ci=-90,li=1;class Pd extends je{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new vt(ci,li,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new vt(ci,li,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new vt(ci,li,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new vt(ci,li,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const c=new vt(ci,li,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new vt(ci,li,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,c,l]=this.children,d=e.getRenderTarget(),h=e.toneMapping,u=e.xr.enabled;e.toneMapping=dn,e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(d),e.toneMapping=h,e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class Ec extends dt{constructor(e,t,n,i,r,a,o,c,l,d){e=e!==void 0?e:[],t=t!==void 0?t:Ii,super(e,t,n,i,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gd extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ki("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===On?be:zn),this.texture=new Ec(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:St}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ns(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bt,blending:Mn});r.uniforms.tEquirect.value=t;const a=new Mt(i,r),o=t.minFilter;return t.minFilter===Hn&&(t.minFilter=St),new Pd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Cr=new w,Dd=new w,Fd=new Ge;class Gn{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Cr.subVectors(n,t).cross(Dd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Cr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Fd.getNormalMatrix(e),i=this.coplanarPoint(Cr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pn=new fn,xs=new w;class jr{constructor(e=new Gn,t=new Gn,n=new Gn,i=new Gn,r=new Gn,a=new Gn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],o=n[3],c=n[4],l=n[5],d=n[6],h=n[7],u=n[8],g=n[9],m=n[10],A=n[11],p=n[12],f=n[13],y=n[14],_=n[15];return t[0].setComponents(o-i,h-c,A-u,_-p).normalize(),t[1].setComponents(o+i,h+c,A+u,_+p).normalize(),t[2].setComponents(o+r,h+l,A+g,_+f).normalize(),t[3].setComponents(o-r,h-l,A-g,_-f).normalize(),t[4].setComponents(o-a,h-d,A-m,_-y).normalize(),t[5].setComponents(o+a,h+d,A+m,_+y).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(e){return Pn.center.set(0,0,0),Pn.radius=.7071067811865476,Pn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(xs.x=i.normal.x>0?e.max.x:e.min.x,xs.y=i.normal.y>0?e.max.y:e.min.y,xs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tc(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Bd(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,d){const h=l.array,u=l.usage,g=s.createBuffer();s.bindBuffer(d,g),s.bufferData(d,h,u),l.onUploadCallback();let m;if(h instanceof Float32Array)m=s.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)m=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=s.SHORT;else if(h instanceof Uint32Array)m=s.UNSIGNED_INT;else if(h instanceof Int32Array)m=s.INT;else if(h instanceof Int8Array)m=s.BYTE;else if(h instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,d,h){const u=d.array,g=d.updateRange;s.bindBuffer(h,l),g.count===-1?s.bufferSubData(h,0,u):(t?s.bufferSubData(h,g.offset*u.BYTES_PER_ELEMENT,u,g.offset,g.count):s.bufferSubData(h,g.offset*u.BYTES_PER_ELEMENT,u.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d&&(s.deleteBuffer(d.buffer),n.delete(l))}function c(l,d){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,d)):h.version<l.version&&(r(h.buffer,l,d),h.version=l.version)}return{get:a,remove:o,update:c}}class Os extends Yt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,d=c+1,h=e/o,u=t/c,g=[],m=[],A=[],p=[];for(let f=0;f<d;f++){const y=f*u-a;for(let _=0;_<l;_++){const x=_*h-r;m.push(x,-y,0),A.push(0,0,1),p.push(_/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<o;y++){const _=y+l*f,x=y+l*(f+1),b=y+1+l*(f+1),E=y+1+l*f;g.push(_,x,E),g.push(x,b,E)}this.setIndex(g),this.setAttribute("position",new Ft(m,3)),this.setAttribute("normal",new Ft(A,3)),this.setAttribute("uv",new Ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Od=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zd="vec3 transformed = vec3( position );",Xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Kd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ih=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ah=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,oh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ch=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hh="gl_FragColor = linearToOutputTexel( gl_FragColor );",uh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ph=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ah=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ch=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ih=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_h=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Eh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Th=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Rh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Ph=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Bh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Oh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zh=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Hh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,jh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Qh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,qh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,$h=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,su=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ru=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,au=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ou=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,du=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Au=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Iu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_u=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,bu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Su=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Ru=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,wu=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lu=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nu=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Uu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Du=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wu=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ou=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,zu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ku=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ju=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ju=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$u=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ef=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,af=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,of=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,df=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hf=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ff=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Re={alphamap_fragment:Vd,alphamap_pars_fragment:Wd,alphatest_fragment:Od,alphatest_pars_fragment:zd,aomap_fragment:Hd,aomap_pars_fragment:kd,begin_vertex:Zd,beginnormal_vertex:Xd,bsdfs:Yd,iridescence_fragment:Kd,bumpmap_pars_fragment:Jd,clipping_planes_fragment:jd,clipping_planes_pars_fragment:Qd,clipping_planes_pars_vertex:qd,clipping_planes_vertex:$d,color_fragment:eh,color_pars_fragment:th,color_pars_vertex:nh,color_vertex:ih,common:sh,cube_uv_reflection_fragment:rh,defaultnormal_vertex:ah,displacementmap_pars_vertex:oh,displacementmap_vertex:ch,emissivemap_fragment:lh,emissivemap_pars_fragment:dh,encodings_fragment:hh,encodings_pars_fragment:uh,envmap_fragment:fh,envmap_common_pars_fragment:gh,envmap_pars_fragment:ph,envmap_pars_vertex:mh,envmap_physical_pars_fragment:Th,envmap_vertex:Ah,fog_vertex:Ch,fog_pars_vertex:Ih,fog_fragment:_h,fog_pars_fragment:vh,gradientmap_pars_fragment:bh,lightmap_fragment:xh,lightmap_pars_fragment:yh,lights_lambert_fragment:Sh,lights_lambert_pars_fragment:Mh,lights_pars_begin:Eh,lights_toon_fragment:Rh,lights_toon_pars_fragment:wh,lights_phong_fragment:Lh,lights_phong_pars_fragment:Nh,lights_physical_fragment:Uh,lights_physical_pars_fragment:Ph,lights_fragment_begin:Gh,lights_fragment_maps:Dh,lights_fragment_end:Fh,logdepthbuf_fragment:Bh,logdepthbuf_pars_fragment:Vh,logdepthbuf_pars_vertex:Wh,logdepthbuf_vertex:Oh,map_fragment:zh,map_pars_fragment:Hh,map_particle_fragment:kh,map_particle_pars_fragment:Zh,metalnessmap_fragment:Xh,metalnessmap_pars_fragment:Yh,morphcolor_vertex:Kh,morphnormal_vertex:Jh,morphtarget_pars_vertex:jh,morphtarget_vertex:Qh,normal_fragment_begin:qh,normal_fragment_maps:$h,normal_pars_fragment:eu,normal_pars_vertex:tu,normal_vertex:nu,normalmap_pars_fragment:iu,clearcoat_normal_fragment_begin:su,clearcoat_normal_fragment_maps:ru,clearcoat_pars_fragment:au,iridescence_pars_fragment:ou,output_fragment:cu,packing:lu,premultiplied_alpha_fragment:du,project_vertex:hu,dithering_fragment:uu,dithering_pars_fragment:fu,roughnessmap_fragment:gu,roughnessmap_pars_fragment:pu,shadowmap_pars_fragment:mu,shadowmap_pars_vertex:Au,shadowmap_vertex:Cu,shadowmask_pars_fragment:Iu,skinbase_vertex:_u,skinning_pars_vertex:vu,skinning_vertex:bu,skinnormal_vertex:xu,specularmap_fragment:yu,specularmap_pars_fragment:Su,tonemapping_fragment:Mu,tonemapping_pars_fragment:Eu,transmission_fragment:Tu,transmission_pars_fragment:Ru,uv_pars_fragment:wu,uv_pars_vertex:Lu,uv_vertex:Nu,worldpos_vertex:Uu,background_vert:Pu,background_frag:Gu,backgroundCube_vert:Du,backgroundCube_frag:Fu,cube_vert:Bu,cube_frag:Vu,depth_vert:Wu,depth_frag:Ou,distanceRGBA_vert:zu,distanceRGBA_frag:Hu,equirect_vert:ku,equirect_frag:Zu,linedashed_vert:Xu,linedashed_frag:Yu,meshbasic_vert:Ku,meshbasic_frag:Ju,meshlambert_vert:ju,meshlambert_frag:Qu,meshmatcap_vert:qu,meshmatcap_frag:$u,meshnormal_vert:ef,meshnormal_frag:tf,meshphong_vert:nf,meshphong_frag:sf,meshphysical_vert:rf,meshphysical_frag:af,meshtoon_vert:of,meshtoon_frag:cf,points_vert:lf,points_frag:df,shadow_vert:hf,shadow_frag:uf,sprite_vert:ff,sprite_frag:gf},ie={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaTest:{value:0}}},jt={basic:{uniforms:_t([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:_t([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:_t([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:_t([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:_t([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:_t([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:_t([ie.points,ie.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:_t([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:_t([ie.common,ie.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:_t([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:_t([ie.sprite,ie.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:_t([ie.common,ie.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:_t([ie.lights,ie.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};jt.physical={uniforms:_t([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const ys={r:0,b:0,g:0};function pf(s,e,t,n,i,r,a){const o=new Ee(0);let c=r===!0?0:1,l,d,h=null,u=0,g=null;function m(p,f){let y=!1,_=f.isScene===!0?f.background:null;switch(_&&_.isTexture&&(_=(f.backgroundBlurriness>0?t:e).get(_)),_===null?A(o,c):_&&_.isColor&&(A(_,1),y=!0),s.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),y=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),y=!0;break}(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Vs)?(d===void 0&&(d=new Mt(new ns(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Si(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(E,L,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,d.material.toneMapped=_.colorSpace!==be,(h!==_||u!==_.version||g!==s.toneMapping)&&(d.material.needsUpdate=!0,h=_,u=_.version,g=s.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Mt(new Os(2,2),new Xn({name:"BackgroundMaterial",uniforms:Si(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=_.colorSpace!==be,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||g!==s.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,g=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function A(p,f){p.getRGB(ys,Sc(s)),n.buffers.color.setClear(ys.r,ys.g,ys.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),c=f,A(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,A(o,c)},render:m}}function mf(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=p(null);let l=c,d=!1;function h(G,D,Q,X,k){let te=!1;if(a){const J=A(X,Q,D);l!==J&&(l=J,g(l.object)),te=f(G,X,Q,k),te&&y(G,X,Q,k)}else{const J=D.wireframe===!0;(l.geometry!==X.id||l.program!==Q.id||l.wireframe!==J)&&(l.geometry=X.id,l.program=Q.id,l.wireframe=J,te=!0)}k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(te||d)&&(d=!1,O(G,D,Q,X),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function g(G){return n.isWebGL2?s.bindVertexArray(G):r.bindVertexArrayOES(G)}function m(G){return n.isWebGL2?s.deleteVertexArray(G):r.deleteVertexArrayOES(G)}function A(G,D,Q){const X=Q.wireframe===!0;let k=o[G.id];k===void 0&&(k={},o[G.id]=k);let te=k[D.id];te===void 0&&(te={},k[D.id]=te);let J=te[X];return J===void 0&&(J=p(u()),te[X]=J),J}function p(G){const D=[],Q=[],X=[];for(let k=0;k<i;k++)D[k]=0,Q[k]=0,X[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:Q,attributeDivisors:X,object:G,attributes:{},index:null}}function f(G,D,Q,X){const k=l.attributes,te=D.attributes;let J=0;const Ae=Q.getAttributes();for(const ne in Ae)if(Ae[ne].location>=0){const Y=k[ne];let re=te[ne];if(re===void 0&&(ne==="instanceMatrix"&&G.instanceMatrix&&(re=G.instanceMatrix),ne==="instanceColor"&&G.instanceColor&&(re=G.instanceColor)),Y===void 0||Y.attribute!==re||re&&Y.data!==re.data)return!0;J++}return l.attributesNum!==J||l.index!==X}function y(G,D,Q,X){const k={},te=D.attributes;let J=0;const Ae=Q.getAttributes();for(const ne in Ae)if(Ae[ne].location>=0){let Y=te[ne];Y===void 0&&(ne==="instanceMatrix"&&G.instanceMatrix&&(Y=G.instanceMatrix),ne==="instanceColor"&&G.instanceColor&&(Y=G.instanceColor));const re={};re.attribute=Y,Y&&Y.data&&(re.data=Y.data),k[ne]=re,J++}l.attributes=k,l.attributesNum=J,l.index=X}function _(){const G=l.newAttributes;for(let D=0,Q=G.length;D<Q;D++)G[D]=0}function x(G){b(G,0)}function b(G,D){const Q=l.newAttributes,X=l.enabledAttributes,k=l.attributeDivisors;Q[G]=1,X[G]===0&&(s.enableVertexAttribArray(G),X[G]=1),k[G]!==D&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,D),k[G]=D)}function E(){const G=l.newAttributes,D=l.enabledAttributes;for(let Q=0,X=D.length;Q<X;Q++)D[Q]!==G[Q]&&(s.disableVertexAttribArray(Q),D[Q]=0)}function L(G,D,Q,X,k,te){n.isWebGL2===!0&&(Q===s.INT||Q===s.UNSIGNED_INT)?s.vertexAttribIPointer(G,D,Q,k,te):s.vertexAttribPointer(G,D,Q,X,k,te)}function O(G,D,Q,X){if(n.isWebGL2===!1&&(G.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const k=X.attributes,te=Q.getAttributes(),J=D.defaultAttributeValues;for(const Ae in te){const ne=te[Ae];if(ne.location>=0){let B=k[Ae];if(B===void 0&&(Ae==="instanceMatrix"&&G.instanceMatrix&&(B=G.instanceMatrix),Ae==="instanceColor"&&G.instanceColor&&(B=G.instanceColor)),B!==void 0){const Y=B.normalized,re=B.itemSize,oe=t.get(B);if(oe===void 0)continue;const R=oe.buffer,Se=oe.type,xe=oe.bytesPerElement;if(B.isInterleavedBufferAttribute){const se=B.data,_e=se.stride,We=B.offset;if(se.isInstancedInterleavedBuffer){for(let ge=0;ge<ne.locationSize;ge++)b(ne.location+ge,se.meshPerAttribute);G.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ge=0;ge<ne.locationSize;ge++)x(ne.location+ge);s.bindBuffer(s.ARRAY_BUFFER,R);for(let ge=0;ge<ne.locationSize;ge++)L(ne.location+ge,re/ne.locationSize,Se,Y,_e*xe,(We+re/ne.locationSize*ge)*xe)}else{if(B.isInstancedBufferAttribute){for(let se=0;se<ne.locationSize;se++)b(ne.location+se,B.meshPerAttribute);G.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let se=0;se<ne.locationSize;se++)x(ne.location+se);s.bindBuffer(s.ARRAY_BUFFER,R);for(let se=0;se<ne.locationSize;se++)L(ne.location+se,re/ne.locationSize,Se,Y,re*xe,re/ne.locationSize*se*xe)}}else if(J!==void 0){const Y=J[Ae];if(Y!==void 0)switch(Y.length){case 2:s.vertexAttrib2fv(ne.location,Y);break;case 3:s.vertexAttrib3fv(ne.location,Y);break;case 4:s.vertexAttrib4fv(ne.location,Y);break;default:s.vertexAttrib1fv(ne.location,Y)}}}}E()}function C(){Z();for(const G in o){const D=o[G];for(const Q in D){const X=D[Q];for(const k in X)m(X[k].object),delete X[k];delete D[Q]}delete o[G]}}function M(G){if(o[G.id]===void 0)return;const D=o[G.id];for(const Q in D){const X=D[Q];for(const k in X)m(X[k].object),delete X[k];delete D[Q]}delete o[G.id]}function K(G){for(const D in o){const Q=o[D];if(Q[G.id]===void 0)continue;const X=Q[G.id];for(const k in X)m(X[k].object),delete X[k];delete Q[G.id]}}function Z(){U(),d=!0,l!==c&&(l=c,g(l.object))}function U(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:U,dispose:C,releaseStatesOfGeometry:M,releaseStatesOfProgram:K,initAttributes:_,enableAttribute:x,disableUnusedAttributes:E}}function Af(s,e,t,n){const i=n.isWebGL2;let r;function a(l){r=l}function o(l,d){s.drawArrays(r,l,d),t.update(d,r,1)}function c(l,d,h){if(h===0)return;let u,g;if(i)u=s,g="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[g](r,l,d,h),t.update(d,r,h)}this.setMode=a,this.render=o,this.renderInstances=c}function Cf(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),A=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=u>0,x=a||e.has("OES_texture_float"),b=_&&x,E=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:u,maxTextureSize:g,maxCubemapSize:m,maxAttributes:A,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:b,maxSamples:E}}function If(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Gn,o=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const g=h.length!==0||u||n!==0||i;return i=u,n=h.length,g},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,g){const m=h.clippingPlanes,A=h.clipIntersection,p=h.clipShadows,f=s.get(h);if(!i||m===null||m.length===0||r&&!p)r?d(null):l();else{const y=r?0:n,_=y*4;let x=f.clippingState||null;c.value=x,x=d(m,u,_,g);for(let b=0;b!==_;++b)x[b]=t[b];f.clippingState=x,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,g,m){const A=h!==null?h.length:0;let p=null;if(A!==0){if(p=c.value,m!==!0||p===null){const f=g+A*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<f)&&(p=new Float32Array(f));for(let _=0,x=g;_!==A;++_,x+=4)a.copy(h[_]).applyMatrix4(y,o),a.normal.toArray(p,x),p[x+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,p}}function _f(s){let e=new WeakMap;function t(a,o){return o===Pr?a.mapping=Ii:o===Gr&&(a.mapping=_i),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Pr||o===Gr)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Gd(c.height/2);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Qr extends Mc{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gi=4,ao=[.125,.215,.35,.446,.526,.582],Fn=20,Ir=new Qr,oo=new Ee;let _r=null;const Dn=(1+Math.sqrt(5))/2,di=1/Dn,co=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,Dn,di),new w(0,Dn,-di),new w(di,0,Dn),new w(-di,0,Dn),new w(Dn,di,0),new w(-Dn,di,0)];class lo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){_r=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_r),e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===_i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_r=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:St,minFilter:St,generateMipmaps:!1,type:ji,format:Dt,colorSpace:qt,depthBuffer:!1},i=ho(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ho(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vf(r)),this._blurMaterial=bf(r,e,t)}return i}_compileMaterial(e){const t=new Mt(this._lodPlanes[0],e);this._renderer.compile(t,Ir)}_sceneToCubeUV(e,t,n,i){const o=new vt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(oo),d.toneMapping=dn,d.autoClear=!1;const g=new Sn({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1}),m=new Mt(new ns,g);let A=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,A=!0):(g.color.copy(oo),A=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):y===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const _=this._cubeSize;Ss(i,y*_,f>2?_:0,_,_),d.setRenderTarget(i),A&&d.render(m,o),d.render(e,o)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=u,d.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ii||e.mapping===_i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Mt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Ss(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ir)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=co[(i-1)%co.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Mt(this._lodPlanes[i],l),u=l.uniforms,g=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Fn-1),A=r/m,p=isFinite(r)?1+Math.floor(d*A):Fn;p>Fn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fn}`);const f=[];let y=0;for(let L=0;L<Fn;++L){const O=L/A,C=Math.exp(-O*O/2);f.push(C),L===0?y+=C:L<p&&(y+=2*C)}for(let L=0;L<f.length;L++)f[L]=f[L]/y;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=m,u.mipInt.value=_-n;const x=this._sizeLods[i],b=3*x*(i>_-gi?i-_+gi:0),E=4*(this._cubeSize-x);Ss(t,b,E,3*x,2*x),c.setRenderTarget(t),c.render(h,Ir)}}function vf(s){const e=[],t=[],n=[];let i=s;const r=s-gi+1+ao.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-gi?c=ao[a-s+gi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),d=-l,h=1+l,u=[d,d,h,d,h,h,d,d,h,h,d,h],g=6,m=6,A=3,p=2,f=1,y=new Float32Array(A*m*g),_=new Float32Array(p*m*g),x=new Float32Array(f*m*g);for(let E=0;E<g;E++){const L=E%3*2/3-1,O=E>2?0:-1,C=[L,O,0,L+2/3,O,0,L+2/3,O+1,0,L,O,0,L+2/3,O+1,0,L,O+1,0];y.set(C,A*m*E),_.set(u,p*m*E);const M=[E,E,E,E,E,E];x.set(M,f*m*E)}const b=new Yt;b.setAttribute("position",new xt(y,A)),b.setAttribute("uv",new xt(_,p)),b.setAttribute("faceIndex",new xt(x,f)),e.push(b),i>gi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ho(s,e,t){const n=new Zn(s,e,t);return n.texture.mapping=Vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ss(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function bf(s,e,t){const n=new Float32Array(Fn),i=new w(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function uo(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function fo(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function qr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xf(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Pr||c===Gr,d=c===Ii||c===_i;if(l||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new lo(s)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||d&&h&&i(h)){t===null&&(t=new lo(s));const u=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function yf(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Sf(s,e,t,n){const i={},r=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete i[u.id];const g=r.get(u);g&&(e.remove(g),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function c(h){const u=h.attributes;for(const m in u)e.update(u[m],s.ARRAY_BUFFER);const g=h.morphAttributes;for(const m in g){const A=g[m];for(let p=0,f=A.length;p<f;p++)e.update(A[p],s.ARRAY_BUFFER)}}function l(h){const u=[],g=h.index,m=h.attributes.position;let A=0;if(g!==null){const y=g.array;A=g.version;for(let _=0,x=y.length;_<x;_+=3){const b=y[_+0],E=y[_+1],L=y[_+2];u.push(b,E,E,L,L,b)}}else{const y=m.array;A=m.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const b=_+0,E=_+1,L=_+2;u.push(b,E,E,L,L,b)}}const p=new(Ac(u)?yc:xc)(u,1);p.version=A;const f=r.get(h);f&&e.remove(f),r.set(h,p)}function d(h){const u=r.get(h);if(u){const g=h.index;g!==null&&u.version<g.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:d}}function Mf(s,e,t,n){const i=n.isWebGL2;let r;function a(u){r=u}let o,c;function l(u){o=u.type,c=u.bytesPerElement}function d(u,g){s.drawElements(r,g,o,u*c),t.update(g,r,1)}function h(u,g,m){if(m===0)return;let A,p;if(i)A=s,p="drawElementsInstanced";else if(A=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",A===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}A[p](r,g,o,u*c,m),t.update(g,r,m)}this.setMode=a,this.setIndex=l,this.render=d,this.renderInstances=h}function Ef(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Tf(s,e){return s[0]-e[0]}function Rf(s,e){return Math.abs(e[1])-Math.abs(s[1])}function wf(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new Ke,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,d,h){const u=l.morphTargetInfluences;if(e.isWebGL2===!0){const m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,A=m!==void 0?m.length:0;let p=r.get(d);if(p===void 0||p.count!==A){let D=function(){U.dispose(),r.delete(d),d.removeEventListener("dispose",D)};var g=D;p!==void 0&&p.texture.dispose();const _=d.morphAttributes.position!==void 0,x=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,E=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let C=0;_===!0&&(C=1),x===!0&&(C=2),b===!0&&(C=3);let M=d.attributes.position.count*C,K=1;M>e.maxTextureSize&&(K=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const Z=new Float32Array(M*K*4*A),U=new _c(Z,M,K,A);U.type=yn,U.needsUpdate=!0;const G=C*4;for(let Q=0;Q<A;Q++){const X=E[Q],k=L[Q],te=O[Q],J=M*K*4*Q;for(let Ae=0;Ae<X.count;Ae++){const ne=Ae*G;_===!0&&(a.fromBufferAttribute(X,Ae),Z[J+ne+0]=a.x,Z[J+ne+1]=a.y,Z[J+ne+2]=a.z,Z[J+ne+3]=0),x===!0&&(a.fromBufferAttribute(k,Ae),Z[J+ne+4]=a.x,Z[J+ne+5]=a.y,Z[J+ne+6]=a.z,Z[J+ne+7]=0),b===!0&&(a.fromBufferAttribute(te,Ae),Z[J+ne+8]=a.x,Z[J+ne+9]=a.y,Z[J+ne+10]=a.z,Z[J+ne+11]=te.itemSize===4?a.w:1)}}p={count:A,texture:U,size:new Ve(M,K)},r.set(d,p),d.addEventListener("dispose",D)}let f=0;for(let _=0;_<u.length;_++)f+=u[_];const y=d.morphTargetsRelative?1:1-f;h.getUniforms().setValue(s,"morphTargetBaseInfluence",y),h.getUniforms().setValue(s,"morphTargetInfluences",u),h.getUniforms().setValue(s,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const m=u===void 0?0:u.length;let A=n[d.id];if(A===void 0||A.length!==m){A=[];for(let x=0;x<m;x++)A[x]=[x,0];n[d.id]=A}for(let x=0;x<m;x++){const b=A[x];b[0]=x,b[1]=u[x]}A.sort(Rf);for(let x=0;x<8;x++)x<m&&A[x][1]?(o[x][0]=A[x][0],o[x][1]=A[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Tf);const p=d.morphAttributes.position,f=d.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const b=o[x],E=b[0],L=b[1];E!==Number.MAX_SAFE_INTEGER&&L?(p&&d.getAttribute("morphTarget"+x)!==p[E]&&d.setAttribute("morphTarget"+x,p[E]),f&&d.getAttribute("morphNormal"+x)!==f[E]&&d.setAttribute("morphNormal"+x,f[E]),i[x]=L,y+=L):(p&&d.hasAttribute("morphTarget"+x)===!0&&d.deleteAttribute("morphTarget"+x),f&&d.hasAttribute("morphNormal"+x)===!0&&d.deleteAttribute("morphNormal"+x),i[x]=0)}const _=d.morphTargetsRelative?1:1-y;h.getUniforms().setValue(s,"morphTargetBaseInfluence",_),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Lf(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,d=c.geometry,h=e.get(c,d);return i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER)),h}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const Rc=new dt,wc=new _c,Lc=new Id,Nc=new Ec,go=[],po=[],mo=new Float32Array(16),Ao=new Float32Array(9),Co=new Float32Array(4);function Ri(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=go[i];if(r===void 0&&(r=new Float32Array(i),go[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function st(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function rt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function zs(s,e){let t=po[e];t===void 0&&(t=new Int32Array(e),po[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Nf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Uf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;s.uniform2fv(this.addr,e),rt(t,e)}}function Pf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;s.uniform3fv(this.addr,e),rt(t,e)}}function Gf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;s.uniform4fv(this.addr,e),rt(t,e)}}function Df(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),rt(t,e)}else{if(st(t,n))return;Co.set(n),s.uniformMatrix2fv(this.addr,!1,Co),rt(t,n)}}function Ff(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),rt(t,e)}else{if(st(t,n))return;Ao.set(n),s.uniformMatrix3fv(this.addr,!1,Ao),rt(t,n)}}function Bf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),rt(t,e)}else{if(st(t,n))return;mo.set(n),s.uniformMatrix4fv(this.addr,!1,mo),rt(t,n)}}function Vf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Wf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;s.uniform2iv(this.addr,e),rt(t,e)}}function Of(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;s.uniform3iv(this.addr,e),rt(t,e)}}function zf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;s.uniform4iv(this.addr,e),rt(t,e)}}function Hf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function kf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;s.uniform2uiv(this.addr,e),rt(t,e)}}function Zf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;s.uniform3uiv(this.addr,e),rt(t,e)}}function Xf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;s.uniform4uiv(this.addr,e),rt(t,e)}}function Yf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Rc,i)}function Kf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Lc,i)}function Jf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Nc,i)}function jf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||wc,i)}function Qf(s){switch(s){case 5126:return Nf;case 35664:return Uf;case 35665:return Pf;case 35666:return Gf;case 35674:return Df;case 35675:return Ff;case 35676:return Bf;case 5124:case 35670:return Vf;case 35667:case 35671:return Wf;case 35668:case 35672:return Of;case 35669:case 35673:return zf;case 5125:return Hf;case 36294:return kf;case 36295:return Zf;case 36296:return Xf;case 35678:case 36198:case 36298:case 36306:case 35682:return Yf;case 35679:case 36299:case 36307:return Kf;case 35680:case 36300:case 36308:case 36293:return Jf;case 36289:case 36303:case 36311:case 36292:return jf}}function qf(s,e){s.uniform1fv(this.addr,e)}function $f(s,e){const t=Ri(e,this.size,2);s.uniform2fv(this.addr,t)}function eg(s,e){const t=Ri(e,this.size,3);s.uniform3fv(this.addr,t)}function tg(s,e){const t=Ri(e,this.size,4);s.uniform4fv(this.addr,t)}function ng(s,e){const t=Ri(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ig(s,e){const t=Ri(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function sg(s,e){const t=Ri(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function rg(s,e){s.uniform1iv(this.addr,e)}function ag(s,e){s.uniform2iv(this.addr,e)}function og(s,e){s.uniform3iv(this.addr,e)}function cg(s,e){s.uniform4iv(this.addr,e)}function lg(s,e){s.uniform1uiv(this.addr,e)}function dg(s,e){s.uniform2uiv(this.addr,e)}function hg(s,e){s.uniform3uiv(this.addr,e)}function ug(s,e){s.uniform4uiv(this.addr,e)}function fg(s,e,t){const n=this.cache,i=e.length,r=zs(t,i);st(n,r)||(s.uniform1iv(this.addr,r),rt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Rc,r[a])}function gg(s,e,t){const n=this.cache,i=e.length,r=zs(t,i);st(n,r)||(s.uniform1iv(this.addr,r),rt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Lc,r[a])}function pg(s,e,t){const n=this.cache,i=e.length,r=zs(t,i);st(n,r)||(s.uniform1iv(this.addr,r),rt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Nc,r[a])}function mg(s,e,t){const n=this.cache,i=e.length,r=zs(t,i);st(n,r)||(s.uniform1iv(this.addr,r),rt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||wc,r[a])}function Ag(s){switch(s){case 5126:return qf;case 35664:return $f;case 35665:return eg;case 35666:return tg;case 35674:return ng;case 35675:return ig;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return ag;case 35668:case 35672:return og;case 35669:case 35673:return cg;case 5125:return lg;case 36294:return dg;case 36295:return hg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}class Cg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Qf(t.type)}}class Ig{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Ag(t.type)}}class _g{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const vr=/(\w+)(\])?(\[|\.)?/g;function Io(s,e){s.seq.push(e),s.map[e.id]=e}function vg(s,e,t){const n=s.name,i=n.length;for(vr.lastIndex=0;;){const r=vr.exec(n),a=vr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Io(t,l===void 0?new Cg(o,s,e):new Ig(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new _g(o),Io(t,h)),t=h}}}class Us{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);vg(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function _o(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let bg=0;function xg(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function yg(s){switch(s){case qt:return["Linear","( value )"];case be:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function vo(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+xg(s.getShaderSource(e),a)}else return i}function Sg(s,e){const t=yg(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Mg(s,e){let t;switch(e){case Ml:t="Linear";break;case El:t="Reinhard";break;case Tl:t="OptimizedCineon";break;case Rl:t="ACESFilmic";break;case wl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Eg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ki).join(`
`)}function Tg(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rg(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ki(s){return s!==""}function bo(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xo(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Or(s){return s.replace(wg,Lg)}function Lg(s,e){const t=Re[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Or(t)}const Ng=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yo(s){return s.replace(Ng,Ug)}function Ug(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function So(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Pg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===sc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===sl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===cn&&(e="SHADOWMAP_TYPE_VSM"),e}function Gg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ii:case _i:e="ENVMAP_TYPE_CUBE";break;case Vs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dg(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case _i:e="ENVMAP_MODE_REFRACTION";break}return e}function Fg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case oc:e="ENVMAP_BLENDING_MULTIPLY";break;case yl:e="ENVMAP_BLENDING_MIX";break;case Sl:e="ENVMAP_BLENDING_ADD";break}return e}function Bg(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Vg(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Pg(t),l=Gg(t),d=Dg(t),h=Fg(t),u=Bg(t),g=t.isWebGL2?"":Eg(t),m=Tg(r),A=i.createProgram();let p,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[m].filter(ki).join(`
`),p.length>0&&(p+=`
`),f=[g,m].filter(ki).join(`
`),f.length>0&&(f+=`
`)):(p=[So(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ki).join(`
`),f=[g,So(t),"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==dn?"#define TONE_MAPPING":"",t.toneMapping!==dn?Re.tonemapping_pars_fragment:"",t.toneMapping!==dn?Mg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Re.encodings_pars_fragment,Sg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ki).join(`
`)),a=Or(a),a=bo(a,t),a=xo(a,t),o=Or(o),o=bo(o,t),o=xo(o,t),a=yo(a),o=yo(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Ha?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ha?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=y+p+a,x=y+f+o,b=_o(i,i.VERTEX_SHADER,_),E=_o(i,i.FRAGMENT_SHADER,x);if(i.attachShader(A,b),i.attachShader(A,E),t.index0AttributeName!==void 0?i.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(A,0,"position"),i.linkProgram(A),s.debug.checkShaderErrors){const C=i.getProgramInfoLog(A).trim(),M=i.getShaderInfoLog(b).trim(),K=i.getShaderInfoLog(E).trim();let Z=!0,U=!0;if(i.getProgramParameter(A,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,A,b,E);else{const G=vo(i,b,"vertex"),D=vo(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(A,i.VALIDATE_STATUS)+`

Program Info Log: `+C+`
`+G+`
`+D)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(M===""||K==="")&&(U=!1);U&&(this.diagnostics={runnable:Z,programLog:C,vertexShader:{log:M,prefix:p},fragmentShader:{log:K,prefix:f}})}i.deleteShader(b),i.deleteShader(E);let L;this.getUniforms=function(){return L===void 0&&(L=new Us(i,A)),L};let O;return this.getAttributes=function(){return O===void 0&&(O=Rg(i,A)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(A),this.program=void 0},this.name=t.shaderName,this.id=bg++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=b,this.fragmentShader=E,this}let Wg=0;class Og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new zg(e),t.set(e,n)),n}}class zg{constructor(e){this.id=Wg++,this.code=e,this.usedTimes=0}}function Hg(s,e,t,n,i,r,a){const o=new vc,c=new Og,l=[],d=i.isWebGL2,h=i.logarithmicDepthBuffer,u=i.vertexTextures;let g=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(C){return C===1?"uv1":C===2?"uv2":C===3?"uv3":"uv"}function p(C,M,K,Z,U){const G=Z.fog,D=U.geometry,Q=C.isMeshStandardMaterial?Z.environment:null,X=(C.isMeshStandardMaterial?t:e).get(C.envMap||Q),k=X&&X.mapping===Vs?X.image.height:null,te=m[C.type];C.precision!==null&&(g=i.getMaxPrecision(C.precision),g!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",g,"instead."));const J=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Ae=J!==void 0?J.length:0;let ne=0;D.morphAttributes.position!==void 0&&(ne=1),D.morphAttributes.normal!==void 0&&(ne=2),D.morphAttributes.color!==void 0&&(ne=3);let B,Y,re,oe;if(te){const Ze=jt[te];B=Ze.vertexShader,Y=Ze.fragmentShader}else B=C.vertexShader,Y=C.fragmentShader,c.update(C),re=c.getVertexShaderID(C),oe=c.getFragmentShaderID(C);const R=s.getRenderTarget(),Se=U.isInstancedMesh===!0,xe=!!C.map,se=!!C.matcap,_e=!!X,We=!!C.aoMap,ge=!!C.lightMap,Ue=!!C.bumpMap,at=!!C.normalMap,ht=!!C.displacementMap,ot=!!C.emissiveMap,it=!!C.metalnessMap,Oe=!!C.roughnessMap,Qe=C.clearcoat>0,yt=C.iridescence>0,S=C.sheen>0,I=C.transmission>0,F=Qe&&!!C.clearcoatMap,q=Qe&&!!C.clearcoatNormalMap,ee=Qe&&!!C.clearcoatRoughnessMap,ae=yt&&!!C.iridescenceMap,ve=yt&&!!C.iridescenceThicknessMap,de=S&&!!C.sheenColorMap,z=S&&!!C.sheenRoughnessMap,ue=!!C.specularMap,pe=!!C.specularColorMap,Ce=!!C.specularIntensityMap,le=I&&!!C.transmissionMap,fe=I&&!!C.thicknessMap,De=!!C.gradientMap,He=!!C.alphaMap,qe=C.alphaTest>0,T=!!C.extensions,V=!!D.attributes.uv1,j=!!D.attributes.uv2,ce=!!D.attributes.uv3;return{isWebGL2:d,shaderID:te,shaderName:C.type,vertexShader:B,fragmentShader:Y,defines:C.defines,customVertexShaderID:re,customFragmentShaderID:oe,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:g,instancing:Se,instancingColor:Se&&U.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:R===null?s.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:qt,map:xe,matcap:se,envMap:_e,envMapMode:_e&&X.mapping,envMapCubeUVHeight:k,aoMap:We,lightMap:ge,bumpMap:Ue,normalMap:at,displacementMap:u&&ht,emissiveMap:ot,normalMapObjectSpace:at&&C.normalMapType===jl,normalMapTangentSpace:at&&C.normalMapType===fc,metalnessMap:it,roughnessMap:Oe,clearcoat:Qe,clearcoatMap:F,clearcoatNormalMap:q,clearcoatRoughnessMap:ee,iridescence:yt,iridescenceMap:ae,iridescenceThicknessMap:ve,sheen:S,sheenColorMap:de,sheenRoughnessMap:z,specularMap:ue,specularColorMap:pe,specularIntensityMap:Ce,transmission:I,transmissionMap:le,thicknessMap:fe,gradientMap:De,opaque:C.transparent===!1&&C.blending===pi,alphaMap:He,alphaTest:qe,combine:C.combine,mapUv:xe&&A(C.map.channel),aoMapUv:We&&A(C.aoMap.channel),lightMapUv:ge&&A(C.lightMap.channel),bumpMapUv:Ue&&A(C.bumpMap.channel),normalMapUv:at&&A(C.normalMap.channel),displacementMapUv:ht&&A(C.displacementMap.channel),emissiveMapUv:ot&&A(C.emissiveMap.channel),metalnessMapUv:it&&A(C.metalnessMap.channel),roughnessMapUv:Oe&&A(C.roughnessMap.channel),clearcoatMapUv:F&&A(C.clearcoatMap.channel),clearcoatNormalMapUv:q&&A(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&A(C.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&A(C.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&A(C.iridescenceThicknessMap.channel),sheenColorMapUv:de&&A(C.sheenColorMap.channel),sheenRoughnessMapUv:z&&A(C.sheenRoughnessMap.channel),specularMapUv:ue&&A(C.specularMap.channel),specularColorMapUv:pe&&A(C.specularColorMap.channel),specularIntensityMapUv:Ce&&A(C.specularIntensityMap.channel),transmissionMapUv:le&&A(C.transmissionMap.channel),thicknessMapUv:fe&&A(C.thicknessMap.channel),alphaMapUv:He&&A(C.alphaMap.channel),vertexTangents:at&&!!D.attributes.tangent,vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:V,vertexUv2s:j,vertexUv3s:ce,pointsUvs:U.isPoints===!0&&!!D.attributes.uv&&(xe||He),fog:!!G,useFog:C.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:U.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&K.length>0,shadowMapType:s.shadowMap.type,toneMapping:C.toneMapped?s.toneMapping:dn,useLegacyLights:s.useLegacyLights,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Zt,flipSided:C.side===bt,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:T&&C.extensions.derivatives===!0,extensionFragDepth:T&&C.extensions.fragDepth===!0,extensionDrawBuffers:T&&C.extensions.drawBuffers===!0,extensionShaderTextureLOD:T&&C.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),customProgramCacheKey:C.customProgramCacheKey()}}function f(C){const M=[];if(C.shaderID?M.push(C.shaderID):(M.push(C.customVertexShaderID),M.push(C.customFragmentShaderID)),C.defines!==void 0)for(const K in C.defines)M.push(K),M.push(C.defines[K]);return C.isRawShaderMaterial===!1&&(y(M,C),_(M,C),M.push(s.outputColorSpace)),M.push(C.customProgramCacheKey),M.join()}function y(C,M){C.push(M.precision),C.push(M.outputColorSpace),C.push(M.envMapMode),C.push(M.envMapCubeUVHeight),C.push(M.mapUv),C.push(M.alphaMapUv),C.push(M.lightMapUv),C.push(M.aoMapUv),C.push(M.bumpMapUv),C.push(M.normalMapUv),C.push(M.displacementMapUv),C.push(M.emissiveMapUv),C.push(M.metalnessMapUv),C.push(M.roughnessMapUv),C.push(M.clearcoatMapUv),C.push(M.clearcoatNormalMapUv),C.push(M.clearcoatRoughnessMapUv),C.push(M.iridescenceMapUv),C.push(M.iridescenceThicknessMapUv),C.push(M.sheenColorMapUv),C.push(M.sheenRoughnessMapUv),C.push(M.specularMapUv),C.push(M.specularColorMapUv),C.push(M.specularIntensityMapUv),C.push(M.transmissionMapUv),C.push(M.thicknessMapUv),C.push(M.combine),C.push(M.fogExp2),C.push(M.sizeAttenuation),C.push(M.morphTargetsCount),C.push(M.morphAttributeCount),C.push(M.numDirLights),C.push(M.numPointLights),C.push(M.numSpotLights),C.push(M.numSpotLightMaps),C.push(M.numHemiLights),C.push(M.numRectAreaLights),C.push(M.numDirLightShadows),C.push(M.numPointLightShadows),C.push(M.numSpotLightShadows),C.push(M.numSpotLightShadowsWithMaps),C.push(M.shadowMapType),C.push(M.toneMapping),C.push(M.numClippingPlanes),C.push(M.numClipIntersection),C.push(M.depthPacking)}function _(C,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),C.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),C.push(o.mask)}function x(C){const M=m[C.type];let K;if(M){const Z=jt[M];K=Ld.clone(Z.uniforms)}else K=C.uniforms;return K}function b(C,M){let K;for(let Z=0,U=l.length;Z<U;Z++){const G=l[Z];if(G.cacheKey===M){K=G,++K.usedTimes;break}}return K===void 0&&(K=new Vg(s,M,C,r),l.push(K)),K}function E(C){if(--C.usedTimes===0){const M=l.indexOf(C);l[M]=l[l.length-1],l.pop(),C.destroy()}}function L(C){c.remove(C)}function O(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:x,acquireProgram:b,releaseProgram:E,releaseShaderCache:L,programs:l,dispose:O}}function kg(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Zg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Mo(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Eo(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,u,g,m,A,p){let f=s[e];return f===void 0?(f={id:h.id,object:h,geometry:u,material:g,groupOrder:m,renderOrder:h.renderOrder,z:A,group:p},s[e]=f):(f.id=h.id,f.object=h,f.geometry=u,f.material=g,f.groupOrder=m,f.renderOrder=h.renderOrder,f.z=A,f.group=p),e++,f}function o(h,u,g,m,A,p){const f=a(h,u,g,m,A,p);g.transmission>0?n.push(f):g.transparent===!0?i.push(f):t.push(f)}function c(h,u,g,m,A,p){const f=a(h,u,g,m,A,p);g.transmission>0?n.unshift(f):g.transparent===!0?i.unshift(f):t.unshift(f)}function l(h,u){t.length>1&&t.sort(h||Zg),n.length>1&&n.sort(u||Mo),i.length>1&&i.sort(u||Mo)}function d(){for(let h=e,u=s.length;h<u;h++){const g=s[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:d,sort:l}}function Xg(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Eo,s.set(n,[a])):i>=r.length?(a=new Eo,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Yg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new Ee};break;case"SpotLight":t={position:new w,direction:new w,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new w,halfWidth:new w,halfHeight:new w};break}return s[e.id]=t,t}}}function Kg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Jg=0;function jg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Qg(s,e){const t=new Yg,n=Kg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)i.probe.push(new w);const r=new w,a=new Ne,o=new Ne;function c(d,h){let u=0,g=0,m=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let A=0,p=0,f=0,y=0,_=0,x=0,b=0,E=0,L=0,O=0;d.sort(jg);const C=h===!0?Math.PI:1;for(let K=0,Z=d.length;K<Z;K++){const U=d[K],G=U.color,D=U.intensity,Q=U.distance,X=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=G.r*D*C,g+=G.g*D*C,m+=G.b*D*C;else if(U.isLightProbe)for(let k=0;k<9;k++)i.probe[k].addScaledVector(U.sh.coefficients[k],D);else if(U.isDirectionalLight){const k=t.get(U);if(k.color.copy(U.color).multiplyScalar(U.intensity*C),U.castShadow){const te=U.shadow,J=n.get(U);J.shadowBias=te.bias,J.shadowNormalBias=te.normalBias,J.shadowRadius=te.radius,J.shadowMapSize=te.mapSize,i.directionalShadow[A]=J,i.directionalShadowMap[A]=X,i.directionalShadowMatrix[A]=U.shadow.matrix,x++}i.directional[A]=k,A++}else if(U.isSpotLight){const k=t.get(U);k.position.setFromMatrixPosition(U.matrixWorld),k.color.copy(G).multiplyScalar(D*C),k.distance=Q,k.coneCos=Math.cos(U.angle),k.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),k.decay=U.decay,i.spot[f]=k;const te=U.shadow;if(U.map&&(i.spotLightMap[L]=U.map,L++,te.updateMatrices(U),U.castShadow&&O++),i.spotLightMatrix[f]=te.matrix,U.castShadow){const J=n.get(U);J.shadowBias=te.bias,J.shadowNormalBias=te.normalBias,J.shadowRadius=te.radius,J.shadowMapSize=te.mapSize,i.spotShadow[f]=J,i.spotShadowMap[f]=X,E++}f++}else if(U.isRectAreaLight){const k=t.get(U);k.color.copy(G).multiplyScalar(D),k.halfWidth.set(U.width*.5,0,0),k.halfHeight.set(0,U.height*.5,0),i.rectArea[y]=k,y++}else if(U.isPointLight){const k=t.get(U);if(k.color.copy(U.color).multiplyScalar(U.intensity*C),k.distance=U.distance,k.decay=U.decay,U.castShadow){const te=U.shadow,J=n.get(U);J.shadowBias=te.bias,J.shadowNormalBias=te.normalBias,J.shadowRadius=te.radius,J.shadowMapSize=te.mapSize,J.shadowCameraNear=te.camera.near,J.shadowCameraFar=te.camera.far,i.pointShadow[p]=J,i.pointShadowMap[p]=X,i.pointShadowMatrix[p]=U.shadow.matrix,b++}i.point[p]=k,p++}else if(U.isHemisphereLight){const k=t.get(U);k.skyColor.copy(U.color).multiplyScalar(D*C),k.groundColor.copy(U.groundColor).multiplyScalar(D*C),i.hemi[_]=k,_++}}y>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=g,i.ambient[2]=m;const M=i.hash;(M.directionalLength!==A||M.pointLength!==p||M.spotLength!==f||M.rectAreaLength!==y||M.hemiLength!==_||M.numDirectionalShadows!==x||M.numPointShadows!==b||M.numSpotShadows!==E||M.numSpotMaps!==L)&&(i.directional.length=A,i.spot.length=f,i.rectArea.length=y,i.point.length=p,i.hemi.length=_,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+L-O,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=O,M.directionalLength=A,M.pointLength=p,M.spotLength=f,M.rectAreaLength=y,M.hemiLength=_,M.numDirectionalShadows=x,M.numPointShadows=b,M.numSpotShadows=E,M.numSpotMaps=L,i.version=Jg++)}function l(d,h){let u=0,g=0,m=0,A=0,p=0;const f=h.matrixWorldInverse;for(let y=0,_=d.length;y<_;y++){const x=d[y];if(x.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),u++}else if(x.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),m++}else if(x.isRectAreaLight){const b=i.rectArea[A];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(f),o.identity(),a.copy(x.matrixWorld),a.premultiply(f),o.extractRotation(a),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),A++}else if(x.isPointLight){const b=i.point[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(f),g++}else if(x.isHemisphereLight){const b=i.hemi[p];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:i}}function To(s,e){const t=new Qg(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function qg(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let c;return o===void 0?(c=new To(s,e),t.set(r,[c])):a>=o.length?(c=new To(s,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class $g extends Qt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ep extends Qt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,np=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ip(s,e,t){let n=new jr;const i=new Ve,r=new Ve,a=new Ke,o=new $g({depthPacking:Jl}),c=new ep,l={},d=t.maxTextureSize,h={[hn]:bt,[bt]:hn,[Zt]:Zt},u=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:tp,fragmentShader:np}),g=u.clone();g.defines.HORIZONTAL_PASS=1;const m=new Yt;m.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Mt(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc;let f=this.type;this.render=function(b,E,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const O=s.getRenderTarget(),C=s.getActiveCubeFace(),M=s.getActiveMipmapLevel(),K=s.state;K.setBlending(Mn),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const Z=f!==cn&&this.type===cn,U=f===cn&&this.type!==cn;for(let G=0,D=b.length;G<D;G++){const Q=b[G],X=Q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const k=X.getFrameExtents();if(i.multiply(k),r.copy(X.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/k.x),i.x=r.x*k.x,X.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/k.y),i.y=r.y*k.y,X.mapSize.y=r.y)),X.map===null||Z===!0||U===!0){const J=this.type!==cn?{minFilter:nt,magFilter:nt}:{};X.map!==null&&X.map.dispose(),X.map=new Zn(i.x,i.y,J),X.map.texture.name=Q.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const te=X.getViewportCount();for(let J=0;J<te;J++){const Ae=X.getViewport(J);a.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),K.viewport(a),X.updateMatrices(Q,J),n=X.getFrustum(),x(E,L,X.camera,Q,this.type)}X.isPointLightShadow!==!0&&this.type===cn&&y(X,L),X.needsUpdate=!1}f=this.type,p.needsUpdate=!1,s.setRenderTarget(O,C,M)};function y(b,E){const L=e.update(A);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Zn(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(E,null,L,u,A,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(E,null,L,g,A,null)}function _(b,E,L,O){let C=null;const M=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(M!==void 0)C=M;else if(C=L.isPointLight===!0?c:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const K=C.uuid,Z=E.uuid;let U=l[K];U===void 0&&(U={},l[K]=U);let G=U[Z];G===void 0&&(G=C.clone(),U[Z]=G),C=G}if(C.visible=E.visible,C.wireframe=E.wireframe,O===cn?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:h[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaTest,C.map=E.map,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,L.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const K=s.properties.get(C);K.light=L}return C}function x(b,E,L,O,C){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===cn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const Z=e.update(b),U=b.material;if(Array.isArray(U)){const G=Z.groups;for(let D=0,Q=G.length;D<Q;D++){const X=G[D],k=U[X.materialIndex];if(k&&k.visible){const te=_(b,k,O,C);s.renderBufferDirect(L,null,Z,te,b,X)}}}else if(U.visible){const G=_(b,U,O,C);s.renderBufferDirect(L,null,Z,G,b,null)}}const K=b.children;for(let Z=0,U=K.length;Z<U;Z++)x(K[Z],E,L,O,C)}}function sp(s,e,t){const n=t.isWebGL2;function i(){let T=!1;const V=new Ke;let j=null;const ce=new Ke(0,0,0,0);return{setMask:function(he){j!==he&&!T&&(s.colorMask(he,he,he,he),j=he)},setLocked:function(he){T=he},setClear:function(he,Ze,Xe,ft,pn){pn===!0&&(he*=ft,Ze*=ft,Xe*=ft),V.set(he,Ze,Xe,ft),ce.equals(V)===!1&&(s.clearColor(he,Ze,Xe,ft),ce.copy(V))},reset:function(){T=!1,j=null,ce.set(-1,0,0,0)}}}function r(){let T=!1,V=null,j=null,ce=null;return{setTest:function(he){he?R(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(he){V!==he&&!T&&(s.depthMask(he),V=he)},setFunc:function(he){if(j!==he){switch(he){case Al:s.depthFunc(s.NEVER);break;case Cl:s.depthFunc(s.ALWAYS);break;case Il:s.depthFunc(s.LESS);break;case Ur:s.depthFunc(s.LEQUAL);break;case _l:s.depthFunc(s.EQUAL);break;case vl:s.depthFunc(s.GEQUAL);break;case bl:s.depthFunc(s.GREATER);break;case xl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=he}},setLocked:function(he){T=he},setClear:function(he){ce!==he&&(s.clearDepth(he),ce=he)},reset:function(){T=!1,V=null,j=null,ce=null}}}function a(){let T=!1,V=null,j=null,ce=null,he=null,Ze=null,Xe=null,ft=null,pn=null;return{setTest:function($e){T||($e?R(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function($e){V!==$e&&!T&&(s.stencilMask($e),V=$e)},setFunc:function($e,Nt,Kt){(j!==$e||ce!==Nt||he!==Kt)&&(s.stencilFunc($e,Nt,Kt),j=$e,ce=Nt,he=Kt)},setOp:function($e,Nt,Kt){(Ze!==$e||Xe!==Nt||ft!==Kt)&&(s.stencilOp($e,Nt,Kt),Ze=$e,Xe=Nt,ft=Kt)},setLocked:function($e){T=$e},setClear:function($e){pn!==$e&&(s.clearStencil($e),pn=$e)},reset:function(){T=!1,V=null,j=null,ce=null,he=null,Ze=null,Xe=null,ft=null,pn=null}}}const o=new i,c=new r,l=new a,d=new WeakMap,h=new WeakMap;let u={},g={},m=new WeakMap,A=[],p=null,f=!1,y=null,_=null,x=null,b=null,E=null,L=null,O=null,C=!1,M=null,K=null,Z=null,U=null,G=null;const D=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,X=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(k)[1]),Q=X>=1):k.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),Q=X>=2);let te=null,J={};const Ae=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),B=new Ke().fromArray(Ae),Y=new Ke().fromArray(ne);function re(T,V,j,ce){const he=new Uint8Array(4),Ze=s.createTexture();s.bindTexture(T,Ze),s.texParameteri(T,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(T,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xe=0;Xe<j;Xe++)n&&(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)?s.texImage3D(V,0,s.RGBA,1,1,ce,0,s.RGBA,s.UNSIGNED_BYTE,he):s.texImage2D(V+Xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,he);return Ze}const oe={};oe[s.TEXTURE_2D]=re(s.TEXTURE_2D,s.TEXTURE_2D,1),oe[s.TEXTURE_CUBE_MAP]=re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(oe[s.TEXTURE_2D_ARRAY]=re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),oe[s.TEXTURE_3D]=re(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),R(s.DEPTH_TEST),c.setFunc(Ur),ht(!1),ot(ha),R(s.CULL_FACE),Ue(Mn);function R(T){u[T]!==!0&&(s.enable(T),u[T]=!0)}function Se(T){u[T]!==!1&&(s.disable(T),u[T]=!1)}function xe(T,V){return g[T]!==V?(s.bindFramebuffer(T,V),g[T]=V,n&&(T===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=V),T===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=V)),!0):!1}function se(T,V){let j=A,ce=!1;if(T)if(j=m.get(V),j===void 0&&(j=[],m.set(V,j)),T.isWebGLMultipleRenderTargets){const he=T.texture;if(j.length!==he.length||j[0]!==s.COLOR_ATTACHMENT0){for(let Ze=0,Xe=he.length;Ze<Xe;Ze++)j[Ze]=s.COLOR_ATTACHMENT0+Ze;j.length=he.length,ce=!0}}else j[0]!==s.COLOR_ATTACHMENT0&&(j[0]=s.COLOR_ATTACHMENT0,ce=!0);else j[0]!==s.BACK&&(j[0]=s.BACK,ce=!0);ce&&(t.isWebGL2?s.drawBuffers(j):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(j))}function _e(T){return p!==T?(s.useProgram(T),p=T,!0):!1}const We={[fi]:s.FUNC_ADD,[al]:s.FUNC_SUBTRACT,[ol]:s.FUNC_REVERSE_SUBTRACT};if(n)We[pa]=s.MIN,We[ma]=s.MAX;else{const T=e.get("EXT_blend_minmax");T!==null&&(We[pa]=T.MIN_EXT,We[ma]=T.MAX_EXT)}const ge={[cl]:s.ZERO,[ll]:s.ONE,[dl]:s.SRC_COLOR,[rc]:s.SRC_ALPHA,[ml]:s.SRC_ALPHA_SATURATE,[gl]:s.DST_COLOR,[ul]:s.DST_ALPHA,[hl]:s.ONE_MINUS_SRC_COLOR,[ac]:s.ONE_MINUS_SRC_ALPHA,[pl]:s.ONE_MINUS_DST_COLOR,[fl]:s.ONE_MINUS_DST_ALPHA};function Ue(T,V,j,ce,he,Ze,Xe,ft){if(T===Mn){f===!0&&(Se(s.BLEND),f=!1);return}if(f===!1&&(R(s.BLEND),f=!0),T!==rl){if(T!==y||ft!==C){if((_!==fi||E!==fi)&&(s.blendEquation(s.FUNC_ADD),_=fi,E=fi),ft)switch(T){case pi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ua:s.blendFunc(s.ONE,s.ONE);break;case fa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ga:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case pi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ua:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case fa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ga:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}x=null,b=null,L=null,O=null,y=T,C=ft}return}he=he||V,Ze=Ze||j,Xe=Xe||ce,(V!==_||he!==E)&&(s.blendEquationSeparate(We[V],We[he]),_=V,E=he),(j!==x||ce!==b||Ze!==L||Xe!==O)&&(s.blendFuncSeparate(ge[j],ge[ce],ge[Ze],ge[Xe]),x=j,b=ce,L=Ze,O=Xe),y=T,C=!1}function at(T,V){T.side===Zt?Se(s.CULL_FACE):R(s.CULL_FACE);let j=T.side===bt;V&&(j=!j),ht(j),T.blending===pi&&T.transparent===!1?Ue(Mn):Ue(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.premultipliedAlpha),c.setFunc(T.depthFunc),c.setTest(T.depthTest),c.setMask(T.depthWrite),o.setMask(T.colorWrite);const ce=T.stencilWrite;l.setTest(ce),ce&&(l.setMask(T.stencilWriteMask),l.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),l.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),Oe(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?R(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(T){M!==T&&(T?s.frontFace(s.CW):s.frontFace(s.CCW),M=T)}function ot(T){T!==nl?(R(s.CULL_FACE),T!==K&&(T===ha?s.cullFace(s.BACK):T===il?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),K=T}function it(T){T!==Z&&(Q&&s.lineWidth(T),Z=T)}function Oe(T,V,j){T?(R(s.POLYGON_OFFSET_FILL),(U!==V||G!==j)&&(s.polygonOffset(V,j),U=V,G=j)):Se(s.POLYGON_OFFSET_FILL)}function Qe(T){T?R(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function yt(T){T===void 0&&(T=s.TEXTURE0+D-1),te!==T&&(s.activeTexture(T),te=T)}function S(T,V,j){j===void 0&&(te===null?j=s.TEXTURE0+D-1:j=te);let ce=J[j];ce===void 0&&(ce={type:void 0,texture:void 0},J[j]=ce),(ce.type!==T||ce.texture!==V)&&(te!==j&&(s.activeTexture(j),te=j),s.bindTexture(T,V||oe[T]),ce.type=T,ce.texture=V)}function I(){const T=J[te];T!==void 0&&T.type!==void 0&&(s.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function F(){try{s.compressedTexImage2D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ee(){try{s.texSubImage2D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ae(){try{s.texSubImage3D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ve(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function de(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function z(){try{s.texStorage2D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ue(){try{s.texStorage3D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function pe(){try{s.texImage2D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ce(){try{s.texImage3D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function le(T){B.equals(T)===!1&&(s.scissor(T.x,T.y,T.z,T.w),B.copy(T))}function fe(T){Y.equals(T)===!1&&(s.viewport(T.x,T.y,T.z,T.w),Y.copy(T))}function De(T,V){let j=h.get(V);j===void 0&&(j=new WeakMap,h.set(V,j));let ce=j.get(T);ce===void 0&&(ce=s.getUniformBlockIndex(V,T.name),j.set(T,ce))}function He(T,V){const ce=h.get(V).get(T);d.get(V)!==ce&&(s.uniformBlockBinding(V,ce,T.__bindingPointIndex),d.set(V,ce))}function qe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},te=null,J={},g={},m=new WeakMap,A=[],p=null,f=!1,y=null,_=null,x=null,b=null,E=null,L=null,O=null,C=!1,M=null,K=null,Z=null,U=null,G=null,B.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:R,disable:Se,bindFramebuffer:xe,drawBuffers:se,useProgram:_e,setBlending:Ue,setMaterial:at,setFlipSided:ht,setCullFace:ot,setLineWidth:it,setPolygonOffset:Oe,setScissorTest:Qe,activeTexture:yt,bindTexture:S,unbindTexture:I,compressedTexImage2D:F,compressedTexImage3D:q,texImage2D:pe,texImage3D:Ce,updateUBOMapping:De,uniformBlockBinding:He,texStorage2D:z,texStorage3D:ue,texSubImage2D:ee,texSubImage3D:ae,compressedTexSubImage2D:ve,compressedTexSubImage3D:de,scissor:le,viewport:fe,reset:qe}}function rp(s,e,t,n,i,r,a){const o=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,d=i.maxTextureSize,h=i.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let A;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(S,I){return f?new OffscreenCanvas(S,I):qi("canvas")}function _(S,I,F,q){let ee=1;if((S.width>q||S.height>q)&&(ee=q/Math.max(S.width,S.height)),ee<1||I===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const ae=I?mc:Math.floor,ve=ae(ee*S.width),de=ae(ee*S.height);A===void 0&&(A=y(ve,de));const z=F?y(ve,de):A;return z.width=ve,z.height=de,z.getContext("2d").drawImage(S,0,0,ve,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+ve+"x"+de+")."),z}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function x(S){return Wr(S.width)&&Wr(S.height)}function b(S){return o?!1:S.wrapS!==Gt||S.wrapT!==Gt||S.minFilter!==nt&&S.minFilter!==St}function E(S,I){return S.generateMipmaps&&I&&S.minFilter!==nt&&S.minFilter!==St}function L(S){s.generateMipmap(S)}function O(S,I,F,q,ee=!1){if(o===!1)return I;if(S!==null){if(s[S]!==void 0)return s[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ae=I;return I===s.RED&&(F===s.FLOAT&&(ae=s.R32F),F===s.HALF_FLOAT&&(ae=s.R16F),F===s.UNSIGNED_BYTE&&(ae=s.R8)),I===s.RG&&(F===s.FLOAT&&(ae=s.RG32F),F===s.HALF_FLOAT&&(ae=s.RG16F),F===s.UNSIGNED_BYTE&&(ae=s.RG8)),I===s.RGBA&&(F===s.FLOAT&&(ae=s.RGBA32F),F===s.HALF_FLOAT&&(ae=s.RGBA16F),F===s.UNSIGNED_BYTE&&(ae=q===be&&ee===!1?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(ae=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(ae=s.RGB5_A1)),(ae===s.R16F||ae===s.R32F||ae===s.RG16F||ae===s.RG32F||ae===s.RGBA16F||ae===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function C(S,I,F){return E(S,F)===!0||S.isFramebufferTexture&&S.minFilter!==nt&&S.minFilter!==St?Math.log2(Math.max(I.width,I.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?I.mipmaps.length:1}function M(S){return S===nt||S===Dr||S===Ns?s.NEAREST:s.LINEAR}function K(S){const I=S.target;I.removeEventListener("dispose",K),U(I),I.isVideoTexture&&m.delete(I)}function Z(S){const I=S.target;I.removeEventListener("dispose",Z),D(I)}function U(S){const I=n.get(S);if(I.__webglInit===void 0)return;const F=S.source,q=p.get(F);if(q){const ee=q[I.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&G(S),Object.keys(q).length===0&&p.delete(F)}n.remove(S)}function G(S){const I=n.get(S);s.deleteTexture(I.__webglTexture);const F=S.source,q=p.get(F);delete q[I.__cacheKey],a.memory.textures--}function D(S){const I=S.texture,F=n.get(S),q=n.get(I);if(q.__webglTexture!==void 0&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)s.deleteFramebuffer(F.__webglFramebuffer[ee]),F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer[ee]);else{if(s.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&s.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let ee=0;ee<F.__webglColorRenderbuffer.length;ee++)F.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(F.__webglColorRenderbuffer[ee]);F.__webglDepthRenderbuffer&&s.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let ee=0,ae=I.length;ee<ae;ee++){const ve=n.get(I[ee]);ve.__webglTexture&&(s.deleteTexture(ve.__webglTexture),a.memory.textures--),n.remove(I[ee])}n.remove(I),n.remove(S)}let Q=0;function X(){Q=0}function k(){const S=Q;return S>=c&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+c),Q+=1,S}function te(S){const I=[];return I.push(S.wrapS),I.push(S.wrapT),I.push(S.wrapR||0),I.push(S.magFilter),I.push(S.minFilter),I.push(S.anisotropy),I.push(S.internalFormat),I.push(S.format),I.push(S.type),I.push(S.generateMipmaps),I.push(S.premultiplyAlpha),I.push(S.flipY),I.push(S.unpackAlignment),I.push(S.colorSpace),I.join()}function J(S,I){const F=n.get(S);if(S.isVideoTexture&&Qe(S),S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){const q=S.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(F,S,I);return}}t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+I)}function Ae(S,I){const F=n.get(S);if(S.version>0&&F.__version!==S.version){Se(F,S,I);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+I)}function ne(S,I){const F=n.get(S);if(S.version>0&&F.__version!==S.version){Se(F,S,I);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+I)}function B(S,I){const F=n.get(S);if(S.version>0&&F.__version!==S.version){xe(F,S,I);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+I)}const Y={[vi]:s.REPEAT,[Gt]:s.CLAMP_TO_EDGE,[Gs]:s.MIRRORED_REPEAT},re={[nt]:s.NEAREST,[Dr]:s.NEAREST_MIPMAP_NEAREST,[Ns]:s.NEAREST_MIPMAP_LINEAR,[St]:s.LINEAR,[lc]:s.LINEAR_MIPMAP_NEAREST,[Hn]:s.LINEAR_MIPMAP_LINEAR};function oe(S,I,F){if(F?(s.texParameteri(S,s.TEXTURE_WRAP_S,Y[I.wrapS]),s.texParameteri(S,s.TEXTURE_WRAP_T,Y[I.wrapT]),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,Y[I.wrapR]),s.texParameteri(S,s.TEXTURE_MAG_FILTER,re[I.magFilter]),s.texParameteri(S,s.TEXTURE_MIN_FILTER,re[I.minFilter])):(s.texParameteri(S,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(S,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(I.wrapS!==Gt||I.wrapT!==Gt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(S,s.TEXTURE_MAG_FILTER,M(I.magFilter)),s.texParameteri(S,s.TEXTURE_MIN_FILTER,M(I.minFilter)),I.minFilter!==nt&&I.minFilter!==St&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(I.magFilter===nt||I.minFilter!==Ns&&I.minFilter!==Hn||I.type===yn&&e.has("OES_texture_float_linear")===!1||o===!1&&I.type===ji&&e.has("OES_texture_half_float_linear")===!1)return;(I.anisotropy>1||n.get(I).__currentAnisotropy)&&(s.texParameterf(S,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,i.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy)}}function R(S,I){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,I.addEventListener("dispose",K));const q=I.source;let ee=p.get(q);ee===void 0&&(ee={},p.set(q,ee));const ae=te(I);if(ae!==S.__cacheKey){ee[ae]===void 0&&(ee[ae]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ee[ae].usedTimes++;const ve=ee[S.__cacheKey];ve!==void 0&&(ee[S.__cacheKey].usedTimes--,ve.usedTimes===0&&G(I)),S.__cacheKey=ae,S.__webglTexture=ee[ae].texture}return F}function Se(S,I,F){let q=s.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),I.isData3DTexture&&(q=s.TEXTURE_3D);const ee=R(S,I),ae=I.source;t.bindTexture(q,S.__webglTexture,s.TEXTURE0+F);const ve=n.get(ae);if(ae.version!==ve.__version||ee===!0){t.activeTexture(s.TEXTURE0+F),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,I.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,I.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const de=b(I)&&x(I.image)===!1;let z=_(I.image,de,!1,d);z=yt(I,z);const ue=x(z)||o,pe=r.convert(I.format,I.colorSpace);let Ce=r.convert(I.type),le=O(I.internalFormat,pe,Ce,I.colorSpace);oe(q,I,ue);let fe;const De=I.mipmaps,He=o&&I.isVideoTexture!==!0,qe=ve.__version===void 0||ee===!0,T=C(I,z,ue);if(I.isDepthTexture)le=s.DEPTH_COMPONENT,o?I.type===yn?le=s.DEPTH_COMPONENT32F:I.type===Bn?le=s.DEPTH_COMPONENT24:I.type===mi?le=s.DEPTH24_STENCIL8:le=s.DEPTH_COMPONENT16:I.type===yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),I.format===Wn&&le===s.DEPTH_COMPONENT&&I.type!==dc&&I.type!==Bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),I.type=Bn,Ce=r.convert(I.type)),I.format===bi&&le===s.DEPTH_COMPONENT&&(le=s.DEPTH_STENCIL,I.type!==mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),I.type=mi,Ce=r.convert(I.type))),qe&&(He?t.texStorage2D(s.TEXTURE_2D,1,le,z.width,z.height):t.texImage2D(s.TEXTURE_2D,0,le,z.width,z.height,0,pe,Ce,null));else if(I.isDataTexture)if(De.length>0&&ue){He&&qe&&t.texStorage2D(s.TEXTURE_2D,T,le,De[0].width,De[0].height);for(let V=0,j=De.length;V<j;V++)fe=De[V],He?t.texSubImage2D(s.TEXTURE_2D,V,0,0,fe.width,fe.height,pe,Ce,fe.data):t.texImage2D(s.TEXTURE_2D,V,le,fe.width,fe.height,0,pe,Ce,fe.data);I.generateMipmaps=!1}else He?(qe&&t.texStorage2D(s.TEXTURE_2D,T,le,z.width,z.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,z.width,z.height,pe,Ce,z.data)):t.texImage2D(s.TEXTURE_2D,0,le,z.width,z.height,0,pe,Ce,z.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){He&&qe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,T,le,De[0].width,De[0].height,z.depth);for(let V=0,j=De.length;V<j;V++)fe=De[V],I.format!==Dt?pe!==null?He?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,fe.width,fe.height,z.depth,pe,fe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,V,le,fe.width,fe.height,z.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,fe.width,fe.height,z.depth,pe,Ce,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,V,le,fe.width,fe.height,z.depth,0,pe,Ce,fe.data)}else{He&&qe&&t.texStorage2D(s.TEXTURE_2D,T,le,De[0].width,De[0].height);for(let V=0,j=De.length;V<j;V++)fe=De[V],I.format!==Dt?pe!==null?He?t.compressedTexSubImage2D(s.TEXTURE_2D,V,0,0,fe.width,fe.height,pe,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,V,le,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage2D(s.TEXTURE_2D,V,0,0,fe.width,fe.height,pe,Ce,fe.data):t.texImage2D(s.TEXTURE_2D,V,le,fe.width,fe.height,0,pe,Ce,fe.data)}else if(I.isDataArrayTexture)He?(qe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,T,le,z.width,z.height,z.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,pe,Ce,z.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,le,z.width,z.height,z.depth,0,pe,Ce,z.data);else if(I.isData3DTexture)He?(qe&&t.texStorage3D(s.TEXTURE_3D,T,le,z.width,z.height,z.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,pe,Ce,z.data)):t.texImage3D(s.TEXTURE_3D,0,le,z.width,z.height,z.depth,0,pe,Ce,z.data);else if(I.isFramebufferTexture){if(qe)if(He)t.texStorage2D(s.TEXTURE_2D,T,le,z.width,z.height);else{let V=z.width,j=z.height;for(let ce=0;ce<T;ce++)t.texImage2D(s.TEXTURE_2D,ce,le,V,j,0,pe,Ce,null),V>>=1,j>>=1}}else if(De.length>0&&ue){He&&qe&&t.texStorage2D(s.TEXTURE_2D,T,le,De[0].width,De[0].height);for(let V=0,j=De.length;V<j;V++)fe=De[V],He?t.texSubImage2D(s.TEXTURE_2D,V,0,0,pe,Ce,fe):t.texImage2D(s.TEXTURE_2D,V,le,pe,Ce,fe);I.generateMipmaps=!1}else He?(qe&&t.texStorage2D(s.TEXTURE_2D,T,le,z.width,z.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,pe,Ce,z)):t.texImage2D(s.TEXTURE_2D,0,le,pe,Ce,z);E(I,ue)&&L(q),ve.__version=ae.version,I.onUpdate&&I.onUpdate(I)}S.__version=I.version}function xe(S,I,F){if(I.image.length!==6)return;const q=R(S,I),ee=I.source;t.bindTexture(s.TEXTURE_CUBE_MAP,S.__webglTexture,s.TEXTURE0+F);const ae=n.get(ee);if(ee.version!==ae.__version||q===!0){t.activeTexture(s.TEXTURE0+F),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,I.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,I.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const ve=I.isCompressedTexture||I.image[0].isCompressedTexture,de=I.image[0]&&I.image[0].isDataTexture,z=[];for(let V=0;V<6;V++)!ve&&!de?z[V]=_(I.image[V],!1,!0,l):z[V]=de?I.image[V].image:I.image[V],z[V]=yt(I,z[V]);const ue=z[0],pe=x(ue)||o,Ce=r.convert(I.format,I.colorSpace),le=r.convert(I.type),fe=O(I.internalFormat,Ce,le,I.colorSpace),De=o&&I.isVideoTexture!==!0,He=ae.__version===void 0||q===!0;let qe=C(I,ue,pe);oe(s.TEXTURE_CUBE_MAP,I,pe);let T;if(ve){De&&He&&t.texStorage2D(s.TEXTURE_CUBE_MAP,qe,fe,ue.width,ue.height);for(let V=0;V<6;V++){T=z[V].mipmaps;for(let j=0;j<T.length;j++){const ce=T[j];I.format!==Dt?Ce!==null?De?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,j,0,0,ce.width,ce.height,Ce,ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,j,fe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,j,0,0,ce.width,ce.height,Ce,le,ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,j,fe,ce.width,ce.height,0,Ce,le,ce.data)}}}else{T=I.mipmaps,De&&He&&(T.length>0&&qe++,t.texStorage2D(s.TEXTURE_CUBE_MAP,qe,fe,z[0].width,z[0].height));for(let V=0;V<6;V++)if(de){De?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,z[V].width,z[V].height,Ce,le,z[V].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,fe,z[V].width,z[V].height,0,Ce,le,z[V].data);for(let j=0;j<T.length;j++){const he=T[j].image[V].image;De?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,j+1,0,0,he.width,he.height,Ce,le,he.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,j+1,fe,he.width,he.height,0,Ce,le,he.data)}}else{De?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,Ce,le,z[V]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,fe,Ce,le,z[V]);for(let j=0;j<T.length;j++){const ce=T[j];De?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,j+1,0,0,Ce,le,ce.image[V]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,j+1,fe,Ce,le,ce.image[V])}}}E(I,pe)&&L(s.TEXTURE_CUBE_MAP),ae.__version=ee.version,I.onUpdate&&I.onUpdate(I)}S.__version=I.version}function se(S,I,F,q,ee){const ae=r.convert(F.format,F.colorSpace),ve=r.convert(F.type),de=O(F.internalFormat,ae,ve,F.colorSpace);n.get(I).__hasExternalTextures||(ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,0,de,I.width,I.height,I.depth,0,ae,ve,null):t.texImage2D(ee,0,de,I.width,I.height,0,ae,ve,null)),t.bindFramebuffer(s.FRAMEBUFFER,S),Oe(I)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,ee,n.get(F).__webglTexture,0,it(I)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,ee,n.get(F).__webglTexture,0),t.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(S,I,F){if(s.bindRenderbuffer(s.RENDERBUFFER,S),I.depthBuffer&&!I.stencilBuffer){let q=s.DEPTH_COMPONENT16;if(F||Oe(I)){const ee=I.depthTexture;ee&&ee.isDepthTexture&&(ee.type===yn?q=s.DEPTH_COMPONENT32F:ee.type===Bn&&(q=s.DEPTH_COMPONENT24));const ae=it(I);Oe(I)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae,q,I.width,I.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,q,I.width,I.height)}else s.renderbufferStorage(s.RENDERBUFFER,q,I.width,I.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,S)}else if(I.depthBuffer&&I.stencilBuffer){const q=it(I);F&&Oe(I)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,q,s.DEPTH24_STENCIL8,I.width,I.height):Oe(I)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,q,s.DEPTH24_STENCIL8,I.width,I.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,S)}else{const q=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let ee=0;ee<q.length;ee++){const ae=q[ee],ve=r.convert(ae.format,ae.colorSpace),de=r.convert(ae.type),z=O(ae.internalFormat,ve,de,ae.colorSpace),ue=it(I);F&&Oe(I)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,z,I.width,I.height):Oe(I)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue,z,I.width,I.height):s.renderbufferStorage(s.RENDERBUFFER,z,I.width,I.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function We(S,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,S),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(I.depthTexture).__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),J(I.depthTexture,0);const q=n.get(I.depthTexture).__webglTexture,ee=it(I);if(I.depthTexture.format===Wn)Oe(I)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,q,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,q,0);else if(I.depthTexture.format===bi)Oe(I)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,q,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function ge(S){const I=n.get(S),F=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!I.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");We(I.__webglFramebuffer,S)}else if(F){I.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(s.FRAMEBUFFER,I.__webglFramebuffer[q]),I.__webglDepthbuffer[q]=s.createRenderbuffer(),_e(I.__webglDepthbuffer[q],S,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer=s.createRenderbuffer(),_e(I.__webglDepthbuffer,S,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(S,I,F){const q=n.get(S);I!==void 0&&se(q.__webglFramebuffer,S,S.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),F!==void 0&&ge(S)}function at(S){const I=S.texture,F=n.get(S),q=n.get(I);S.addEventListener("dispose",Z),S.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=I.version,a.memory.textures++);const ee=S.isWebGLCubeRenderTarget===!0,ae=S.isWebGLMultipleRenderTargets===!0,ve=x(S)||o;if(ee){F.__webglFramebuffer=[];for(let de=0;de<6;de++)F.__webglFramebuffer[de]=s.createFramebuffer()}else{if(F.__webglFramebuffer=s.createFramebuffer(),ae)if(i.drawBuffers){const de=S.texture;for(let z=0,ue=de.length;z<ue;z++){const pe=n.get(de[z]);pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&Oe(S)===!1){const de=ae?I:[I];F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let z=0;z<de.length;z++){const ue=de[z];F.__webglColorRenderbuffer[z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[z]);const pe=r.convert(ue.format,ue.colorSpace),Ce=r.convert(ue.type),le=O(ue.internalFormat,pe,Ce,ue.colorSpace,S.isXRRenderTarget===!0),fe=it(S);s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,le,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+z,s.RENDERBUFFER,F.__webglColorRenderbuffer[z])}s.bindRenderbuffer(s.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),_e(F.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ee){t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),oe(s.TEXTURE_CUBE_MAP,I,ve);for(let de=0;de<6;de++)se(F.__webglFramebuffer[de],S,I,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de);E(I,ve)&&L(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){const de=S.texture;for(let z=0,ue=de.length;z<ue;z++){const pe=de[z],Ce=n.get(pe);t.bindTexture(s.TEXTURE_2D,Ce.__webglTexture),oe(s.TEXTURE_2D,pe,ve),se(F.__webglFramebuffer,S,pe,s.COLOR_ATTACHMENT0+z,s.TEXTURE_2D),E(pe,ve)&&L(s.TEXTURE_2D)}t.unbindTexture()}else{let de=s.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?de=S.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,q.__webglTexture),oe(de,I,ve),se(F.__webglFramebuffer,S,I,s.COLOR_ATTACHMENT0,de),E(I,ve)&&L(de),t.unbindTexture()}S.depthBuffer&&ge(S)}function ht(S){const I=x(S)||o,F=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let q=0,ee=F.length;q<ee;q++){const ae=F[q];if(E(ae,I)){const ve=S.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,de=n.get(ae).__webglTexture;t.bindTexture(ve,de),L(ve),t.unbindTexture()}}}function ot(S){if(o&&S.samples>0&&Oe(S)===!1){const I=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],F=S.width,q=S.height;let ee=s.COLOR_BUFFER_BIT;const ae=[],ve=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=n.get(S),z=S.isWebGLMultipleRenderTargets===!0;if(z)for(let ue=0;ue<I.length;ue++)t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ue=0;ue<I.length;ue++){ae.push(s.COLOR_ATTACHMENT0+ue),S.depthBuffer&&ae.push(ve);const pe=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(pe===!1&&(S.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),S.stencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),z&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,de.__webglColorRenderbuffer[ue]),pe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ve]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ve])),z){const Ce=n.get(I[ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ce,0)}s.blitFramebuffer(0,0,F,q,0,0,F,q,ee,s.NEAREST),g&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ae)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),z)for(let ue=0;ue<I.length;ue++){t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,de.__webglColorRenderbuffer[ue]);const pe=n.get(I[ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,pe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function it(S){return Math.min(h,S.samples)}function Oe(S){const I=n.get(S);return o&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function Qe(S){const I=a.render.frame;m.get(S)!==I&&(m.set(S,I),S.update())}function yt(S,I){const F=S.colorSpace,q=S.format,ee=S.type;return S.isCompressedTexture===!0||S.format===Vr||F!==qt&&F!==zn&&(F===be?o===!1?e.has("EXT_sRGB")===!0&&q===Dt?(S.format=Vr,S.minFilter=St,S.generateMipmaps=!1):I=Cc.sRGBToLinear(I):(q!==Dt||ee!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),I}this.allocateTextureUnit=k,this.resetTextureUnits=X,this.setTexture2D=J,this.setTexture2DArray=Ae,this.setTexture3D=ne,this.setTextureCube=B,this.rebindTextures=Ue,this.setupRenderTarget=at,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Oe}function ap(s,e,t){const n=t.isWebGL2;function i(r,a=zn){let o;if(r===kn)return s.UNSIGNED_BYTE;if(r===Pl)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Gl)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Ll)return s.BYTE;if(r===Nl)return s.SHORT;if(r===dc)return s.UNSIGNED_SHORT;if(r===Ul)return s.INT;if(r===Bn)return s.UNSIGNED_INT;if(r===yn)return s.FLOAT;if(r===ji)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Dl)return s.ALPHA;if(r===Dt)return s.RGBA;if(r===Fl)return s.LUMINANCE;if(r===Bl)return s.LUMINANCE_ALPHA;if(r===Wn)return s.DEPTH_COMPONENT;if(r===bi)return s.DEPTH_STENCIL;if(r===Vr)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Vl)return s.RED;if(r===Wl)return s.RED_INTEGER;if(r===Ol)return s.RG;if(r===zl)return s.RG_INTEGER;if(r===Hl)return s.RGBA_INTEGER;if(r===Js||r===js||r===Qs||r===qs)if(a===be)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Js)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===js)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Js)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===js)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===qs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Aa||r===Ca||r===Ia||r===_a)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Aa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ca)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ia)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_a)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===kl)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===va||r===ba)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===va)return a===be?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ba)return a===be?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===xa||r===ya||r===Sa||r===Ma||r===Ea||r===Ta||r===Ra||r===wa||r===La||r===Na||r===Ua||r===Pa||r===Ga||r===Da)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===xa)return a===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ya)return a===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Sa)return a===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ma)return a===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ea)return a===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ta)return a===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ra)return a===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wa)return a===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===La)return a===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Na)return a===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ua)return a===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Pa)return a===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ga)return a===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Da)return a===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===$s)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===$s)return a===be?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Zl||r===Fa||r===Ba||r===Va)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===$s)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Fa)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ba)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Va)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===mi?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class op extends vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vn extends je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cp={type:"move"};class br{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const A of e.hand.values()){const p=t.getJointPose(A,n),f=this._getHandJoint(l,A);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=d.position.distanceTo(h.position),g=.02,m=.005;l.inputState.pinching&&u>g+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=g-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cp)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class lp extends dt{constructor(e,t,n,i,r,a,o,c,l,d){if(d=d!==void 0?d:Wn,d!==Wn&&d!==bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Wn&&(n=Bn),n===void 0&&d===bi&&(n=mi),super(null,i,r,a,o,c,d,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:nt,this.minFilter=c!==void 0?c:nt,this.flipY=!1,this.generateMipmaps=!1}}class dp extends Ti{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,h=null,u=null,g=null,m=null;const A=t.getContextAttributes();let p=null,f=null;const y=[],_=[],x=new Set,b=new Map,E=new vt;E.layers.enable(1),E.viewport=new Ke;const L=new vt;L.layers.enable(2),L.viewport=new Ke;const O=[E,L],C=new op;C.layers.enable(1),C.layers.enable(2);let M=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Y=y[B];return Y===void 0&&(Y=new br,y[B]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(B){let Y=y[B];return Y===void 0&&(Y=new br,y[B]=Y),Y.getGripSpace()},this.getHand=function(B){let Y=y[B];return Y===void 0&&(Y=new br,y[B]=Y),Y.getHandSpace()};function Z(B){const Y=_.indexOf(B.inputSource);if(Y===-1)return;const re=y[Y];re!==void 0&&(re.update(B.inputSource,B.frame,l||a),re.dispatchEvent({type:B.type,data:B.inputSource}))}function U(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",G);for(let B=0;B<y.length;B++){const Y=_[B];Y!==null&&(_[B]=null,y[B].disconnect(Y))}M=null,K=null,e.setRenderTarget(p),g=null,u=null,h=null,i=null,f=null,ne.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return u!==null?u:g},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",U),i.addEventListener("inputsourceschange",G),A.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:i.renderState.layers===void 0?A.antialias:!0,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(i,t,Y),i.updateRenderState({baseLayer:g}),f=new Zn(g.framebufferWidth,g.framebufferHeight,{format:Dt,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil})}else{let Y=null,re=null,oe=null;A.depth&&(oe=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=A.stencil?bi:Wn,re=A.stencil?mi:Bn);const R={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(R),i.updateRenderState({layers:[u]}),f=new Zn(u.textureWidth,u.textureHeight,{format:Dt,type:kn,depthTexture:new lp(u.textureWidth,u.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0});const Se=e.properties.get(f);Se.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ne.setContext(i),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function G(B){for(let Y=0;Y<B.removed.length;Y++){const re=B.removed[Y],oe=_.indexOf(re);oe>=0&&(_[oe]=null,y[oe].disconnect(re))}for(let Y=0;Y<B.added.length;Y++){const re=B.added[Y];let oe=_.indexOf(re);if(oe===-1){for(let Se=0;Se<y.length;Se++)if(Se>=_.length){_.push(re),oe=Se;break}else if(_[Se]===null){_[Se]=re,oe=Se;break}if(oe===-1)break}const R=y[oe];R&&R.connect(re)}}const D=new w,Q=new w;function X(B,Y,re){D.setFromMatrixPosition(Y.matrixWorld),Q.setFromMatrixPosition(re.matrixWorld);const oe=D.distanceTo(Q),R=Y.projectionMatrix.elements,Se=re.projectionMatrix.elements,xe=R[14]/(R[10]-1),se=R[14]/(R[10]+1),_e=(R[9]+1)/R[5],We=(R[9]-1)/R[5],ge=(R[8]-1)/R[0],Ue=(Se[8]+1)/Se[0],at=xe*ge,ht=xe*Ue,ot=oe/(-ge+Ue),it=ot*-ge;Y.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(it),B.translateZ(ot),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Oe=xe+ot,Qe=se+ot,yt=at-it,S=ht+(oe-it),I=_e*se/Qe*Oe,F=We*se/Qe*Oe;B.projectionMatrix.makePerspective(yt,S,I,F,Oe,Qe),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function k(B,Y){Y===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Y.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;C.near=L.near=E.near=B.near,C.far=L.far=E.far=B.far,(M!==C.near||K!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),M=C.near,K=C.far);const Y=B.parent,re=C.cameras;k(C,Y);for(let oe=0;oe<re.length;oe++)k(re[oe],Y);re.length===2?X(C,E,L):C.projectionMatrix.copy(E.projectionMatrix),te(B,C,Y)};function te(B,Y,re){re===null?B.matrix.copy(Y.matrixWorld):(B.matrix.copy(re.matrixWorld),B.matrix.invert(),B.matrix.multiply(Y.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0);const oe=B.children;for(let R=0,Se=oe.length;R<Se;R++)oe[R].updateMatrixWorld(!0);B.projectionMatrix.copy(Y.projectionMatrix),B.projectionMatrixInverse.copy(Y.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=yi*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(u===null&&g===null))return c},this.setFoveation=function(B){c=B,u!==null&&(u.fixedFoveation=B),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=B)},this.getPlanes=function(){return x};let J=null;function Ae(B,Y){if(d=Y.getViewerPose(l||a),m=Y,d!==null){const re=d.views;g!==null&&(e.setRenderTargetFramebuffer(f,g.framebuffer),e.setRenderTarget(f));let oe=!1;re.length!==C.cameras.length&&(C.cameras.length=0,oe=!0);for(let R=0;R<re.length;R++){const Se=re[R];let xe=null;if(g!==null)xe=g.getViewport(Se);else{const _e=h.getViewSubImage(u,Se);xe=_e.viewport,R===0&&(e.setRenderTargetTextures(f,_e.colorTexture,u.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(f))}let se=O[R];se===void 0&&(se=new vt,se.layers.enable(R),se.viewport=new Ke,O[R]=se),se.matrix.fromArray(Se.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Se.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(xe.x,xe.y,xe.width,xe.height),R===0&&(C.matrix.copy(se.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),oe===!0&&C.cameras.push(se)}}for(let re=0;re<y.length;re++){const oe=_[re],R=y[re];oe!==null&&R!==void 0&&R.update(oe,Y,l||a)}if(J&&J(B,Y),Y.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Y.detectedPlanes});let re=null;for(const oe of x)Y.detectedPlanes.has(oe)||(re===null&&(re=[]),re.push(oe));if(re!==null)for(const oe of re)x.delete(oe),b.delete(oe),n.dispatchEvent({type:"planeremoved",data:oe});for(const oe of Y.detectedPlanes)if(!x.has(oe))x.add(oe),b.set(oe,Y.lastChangedTime),n.dispatchEvent({type:"planeadded",data:oe});else{const R=b.get(oe);oe.lastChangedTime>R&&(b.set(oe,oe.lastChangedTime),n.dispatchEvent({type:"planechanged",data:oe}))}}m=null}const ne=new Tc;ne.setAnimationLoop(Ae),this.setAnimationLoop=function(B){J=B},this.dispose=function(){}}}function hp(s,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Sc(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,y,_,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),d(p,f)):f.isMeshStandardMaterial?(r(p,f),u(p,f),f.isMeshPhysicalMaterial&&g(p,f,x)):f.isMeshMatcapMaterial?(r(p,f),m(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),A(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,y,_):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===bt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===bt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const y=e.get(f).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const _=s.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*_,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,y,_){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*y,p.scale.value=_*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function d(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function g(p,f,y){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===bt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function A(p,f){const y=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function up(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,_){const x=_.program;n.uniformBlockBinding(y,x)}function l(y,_){let x=i[y.id];x===void 0&&(m(y),x=d(y),i[y.id]=x,y.addEventListener("dispose",p));const b=_.program;n.updateUBOMapping(y,b);const E=e.render.frame;r[y.id]!==E&&(u(y),r[y.id]=E)}function d(y){const _=h();y.__bindingPointIndex=_;const x=s.createBuffer(),b=y.__size,E=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,b,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,x),x}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const _=i[y.id],x=y.uniforms,b=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let E=0,L=x.length;E<L;E++){const O=x[E];if(g(O,E,b)===!0){const C=O.__offset,M=Array.isArray(O.value)?O.value:[O.value];let K=0;for(let Z=0;Z<M.length;Z++){const U=M[Z],G=A(U);typeof U=="number"?(O.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,C+K,O.__data)):U.isMatrix3?(O.__data[0]=U.elements[0],O.__data[1]=U.elements[1],O.__data[2]=U.elements[2],O.__data[3]=U.elements[0],O.__data[4]=U.elements[3],O.__data[5]=U.elements[4],O.__data[6]=U.elements[5],O.__data[7]=U.elements[0],O.__data[8]=U.elements[6],O.__data[9]=U.elements[7],O.__data[10]=U.elements[8],O.__data[11]=U.elements[0]):(U.toArray(O.__data,K),K+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,C,O.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function g(y,_,x){const b=y.value;if(x[_]===void 0){if(typeof b=="number")x[_]=b;else{const E=Array.isArray(b)?b:[b],L=[];for(let O=0;O<E.length;O++)L.push(E[O].clone());x[_]=L}return!0}else if(typeof b=="number"){if(x[_]!==b)return x[_]=b,!0}else{const E=Array.isArray(x[_])?x[_]:[x[_]],L=Array.isArray(b)?b:[b];for(let O=0;O<E.length;O++){const C=E[O];if(C.equals(L[O])===!1)return C.copy(L[O]),!0}}return!1}function m(y){const _=y.uniforms;let x=0;const b=16;let E=0;for(let L=0,O=_.length;L<O;L++){const C=_[L],M={boundary:0,storage:0},K=Array.isArray(C.value)?C.value:[C.value];for(let Z=0,U=K.length;Z<U;Z++){const G=K[Z],D=A(G);M.boundary+=D.boundary,M.storage+=D.storage}if(C.__data=new Float32Array(M.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=x,L>0){E=x%b;const Z=b-E;E!==0&&Z-M.boundary<0&&(x+=b-E,C.__offset=x)}x+=M.storage}return E=x%b,E>0&&(x+=b-E),y.__size=x,y.__cache={},this}function A(y){const _={boundary:0,storage:0};return typeof y=="number"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function p(y){const _=y.target;_.removeEventListener("dispose",p);const x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function f(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:c,update:l,dispose:f}}function fp(){const s=qi("canvas");return s.style.display="block",s}class Uc{constructor(e={}){const{canvas:t=fp(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;let g=null,m=null;const A=[],p=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=be,this.useLegacyLights=!0,this.toneMapping=dn,this.toneMappingExposure=1;const f=this;let y=!1,_=0,x=0,b=null,E=-1,L=null;const O=new Ke,C=new Ke;let M=null,K=t.width,Z=t.height,U=1,G=null,D=null;const Q=new Ke(0,0,K,Z),X=new Ke(0,0,K,Z);let k=!1;const te=new jr;let J=!1,Ae=!1,ne=null;const B=new Ne,Y=new w,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return b===null?U:1}let R=n;function Se(v,P){for(let W=0;W<v.length;W++){const N=v[W],H=t.getContext(N,P);if(H!==null)return H}return null}try{const v={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yr}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",He,!1),R===null){const P=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&P.shift(),R=Se(P,v),R===null)throw Se(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let xe,se,_e,We,ge,Ue,at,ht,ot,it,Oe,Qe,yt,S,I,F,q,ee,ae,ve,de,z,ue,pe;function Ce(){xe=new yf(R),se=new Cf(R,xe,e),xe.init(se),z=new ap(R,xe,se),_e=new sp(R,xe,se),We=new Ef(R),ge=new kg,Ue=new rp(R,xe,_e,ge,se,z,We),at=new _f(f),ht=new xf(f),ot=new Bd(R,se),ue=new mf(R,xe,ot,se),it=new Sf(R,ot,We,ue),Oe=new Lf(R,it,ot,We),ae=new wf(R,se,Ue),F=new If(ge),Qe=new Hg(f,at,ht,xe,se,ue,F),yt=new hp(f,ge),S=new Xg,I=new qg(xe,se),ee=new pf(f,at,ht,_e,Oe,u,c),q=new ip(f,Oe,se),pe=new up(R,We,se,_e),ve=new Af(R,xe,We,se),de=new Mf(R,xe,We,se),We.programs=Qe.programs,f.capabilities=se,f.extensions=xe,f.properties=ge,f.renderLists=S,f.shadowMap=q,f.state=_e,f.info=We}Ce();const le=new dp(f,R);this.xr=le,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const v=xe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=xe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(v){v!==void 0&&(U=v,this.setSize(K,Z,!1))},this.getSize=function(v){return v.set(K,Z)},this.setSize=function(v,P,W=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=v,Z=P,t.width=Math.floor(v*U),t.height=Math.floor(P*U),W===!0&&(t.style.width=v+"px",t.style.height=P+"px"),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(K*U,Z*U).floor()},this.setDrawingBufferSize=function(v,P,W){K=v,Z=P,U=W,t.width=Math.floor(v*W),t.height=Math.floor(P*W),this.setViewport(0,0,v,P)},this.getCurrentViewport=function(v){return v.copy(O)},this.getViewport=function(v){return v.copy(Q)},this.setViewport=function(v,P,W,N){v.isVector4?Q.set(v.x,v.y,v.z,v.w):Q.set(v,P,W,N),_e.viewport(O.copy(Q).multiplyScalar(U).floor())},this.getScissor=function(v){return v.copy(X)},this.setScissor=function(v,P,W,N){v.isVector4?X.set(v.x,v.y,v.z,v.w):X.set(v,P,W,N),_e.scissor(C.copy(X).multiplyScalar(U).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(v){_e.setScissorTest(k=v)},this.setOpaqueSort=function(v){G=v},this.setTransparentSort=function(v){D=v},this.getClearColor=function(v){return v.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(v=!0,P=!0,W=!0){let N=0;v&&(N|=R.COLOR_BUFFER_BIT),P&&(N|=R.DEPTH_BUFFER_BIT),W&&(N|=R.STENCIL_BUFFER_BIT),R.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",He,!1),S.dispose(),I.dispose(),ge.dispose(),at.dispose(),ht.dispose(),Oe.dispose(),ue.dispose(),pe.dispose(),Qe.dispose(),le.dispose(),le.removeEventListener("sessionstart",he),le.removeEventListener("sessionend",Ze),ne&&(ne.dispose(),ne=null),Xe.stop()};function fe(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const v=We.autoReset,P=q.enabled,W=q.autoUpdate,N=q.needsUpdate,H=q.type;Ce(),We.autoReset=v,q.enabled=P,q.autoUpdate=W,q.needsUpdate=N,q.type=H}function He(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function qe(v){const P=v.target;P.removeEventListener("dispose",qe),T(P)}function T(v){V(v),ge.remove(v)}function V(v){const P=ge.get(v).programs;P!==void 0&&(P.forEach(function(W){Qe.releaseProgram(W)}),v.isShaderMaterial&&Qe.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,W,N,H,me){P===null&&(P=re);const Ie=H.isMesh&&H.matrixWorld.determinant()<0,ye=qc(v,P,W,N,H);_e.setMaterial(N,Ie);let Te=W.index,we=1;N.wireframe===!0&&(Te=it.getWireframeAttribute(W),we=2);const Le=W.drawRange,Pe=W.attributes.position;let ke=Le.start*we,At=(Le.start+Le.count)*we;me!==null&&(ke=Math.max(ke,me.start*we),At=Math.min(At,(me.start+me.count)*we)),Te!==null?(ke=Math.max(ke,0),At=Math.min(At,Te.count)):Pe!=null&&(ke=Math.max(ke,0),At=Math.min(At,Pe.count));const Bt=At-ke;if(Bt<0||Bt===1/0)return;ue.setup(H,N,ye,W,Te);let Rn,et=ve;if(Te!==null&&(Rn=ot.get(Te),et=de,et.setIndex(Rn)),H.isMesh)N.wireframe===!0?(_e.setLineWidth(N.wireframeLinewidth*oe()),et.setMode(R.LINES)):et.setMode(R.TRIANGLES);else if(H.isLine){let Fe=N.linewidth;Fe===void 0&&(Fe=1),_e.setLineWidth(Fe*oe()),H.isLineSegments?et.setMode(R.LINES):H.isLineLoop?et.setMode(R.LINE_LOOP):et.setMode(R.LINE_STRIP)}else H.isPoints?et.setMode(R.POINTS):H.isSprite&&et.setMode(R.TRIANGLES);if(H.isInstancedMesh)et.renderInstances(ke,Bt,H.count);else if(W.isInstancedBufferGeometry){const Fe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Zs=Math.min(W.instanceCount,Fe);et.renderInstances(ke,Bt,Zs)}else et.render(ke,Bt)},this.compile=function(v,P){function W(N,H,me){N.transparent===!0&&N.side===Zt&&N.forceSinglePass===!1?(N.side=bt,N.needsUpdate=!0,rs(N,H,me),N.side=hn,N.needsUpdate=!0,rs(N,H,me),N.side=Zt):rs(N,H,me)}m=I.get(v),m.init(),p.push(m),v.traverseVisible(function(N){N.isLight&&N.layers.test(P.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights(f.useLegacyLights),v.traverse(function(N){const H=N.material;if(H)if(Array.isArray(H))for(let me=0;me<H.length;me++){const Ie=H[me];W(Ie,v,N)}else W(H,v,N)}),p.pop(),m=null};let j=null;function ce(v){j&&j(v)}function he(){Xe.stop()}function Ze(){Xe.start()}const Xe=new Tc;Xe.setAnimationLoop(ce),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(v){j=v,le.setAnimationLoop(v),v===null?Xe.stop():Xe.start()},le.addEventListener("sessionstart",he),le.addEventListener("sessionend",Ze),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(P),P=le.getCamera()),v.isScene===!0&&v.onBeforeRender(f,v,P,b),m=I.get(v,p.length),m.init(),p.push(m),B.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),te.setFromProjectionMatrix(B),Ae=this.localClippingEnabled,J=F.init(this.clippingPlanes,Ae),g=S.get(v,A.length),g.init(),A.push(g),ft(v,P,0,f.sortObjects),g.finish(),f.sortObjects===!0&&g.sort(G,D),J===!0&&F.beginShadows();const W=m.state.shadowsArray;if(q.render(W,v,P),J===!0&&F.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(g,v),m.setupLights(f.useLegacyLights),P.isArrayCamera){const N=P.cameras;for(let H=0,me=N.length;H<me;H++){const Ie=N[H];pn(g,v,Ie,Ie.viewport)}}else pn(g,v,P);b!==null&&(Ue.updateMultisampleRenderTarget(b),Ue.updateRenderTargetMipmap(b)),v.isScene===!0&&v.onAfterRender(f,v,P),ue.resetDefaultState(),E=-1,L=null,p.pop(),p.length>0?m=p[p.length-1]:m=null,A.pop(),A.length>0?g=A[A.length-1]:g=null};function ft(v,P,W,N){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)W=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLight)m.pushLight(v),v.castShadow&&m.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||te.intersectsSprite(v)){N&&Y.setFromMatrixPosition(v.matrixWorld).applyMatrix4(B);const Ie=Oe.update(v),ye=v.material;ye.visible&&g.push(v,Ie,ye,W,Y.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||te.intersectsObject(v))){v.isSkinnedMesh&&v.skeleton.frame!==We.render.frame&&(v.skeleton.update(),v.skeleton.frame=We.render.frame);const Ie=Oe.update(v),ye=v.material;if(N&&(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Y.copy(Ie.boundingSphere.center).applyMatrix4(v.matrixWorld).applyMatrix4(B)),Array.isArray(ye)){const Te=Ie.groups;for(let we=0,Le=Te.length;we<Le;we++){const Pe=Te[we],ke=ye[Pe.materialIndex];ke&&ke.visible&&g.push(v,Ie,ke,W,Y.z,Pe)}}else ye.visible&&g.push(v,Ie,ye,W,Y.z,null)}}const me=v.children;for(let Ie=0,ye=me.length;Ie<ye;Ie++)ft(me[Ie],P,W,N)}function pn(v,P,W,N){const H=v.opaque,me=v.transmissive,Ie=v.transparent;m.setupLightsView(W),J===!0&&F.setGlobalState(f.clippingPlanes,W),me.length>0&&$e(H,me,P,W),N&&_e.viewport(O.copy(N)),H.length>0&&Nt(H,P,W),me.length>0&&Nt(me,P,W),Ie.length>0&&Nt(Ie,P,W),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function $e(v,P,W,N){if(ne===null){const ye=se.isWebGL2;ne=new Zn(1024,1024,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?ji:kn,minFilter:Hn,samples:ye&&o===!0?4:0})}const H=f.getRenderTarget();f.setRenderTarget(ne),f.clear();const me=f.toneMapping;f.toneMapping=dn,Nt(v,W,N),Ue.updateMultisampleRenderTarget(ne),Ue.updateRenderTargetMipmap(ne);let Ie=!1;for(let ye=0,Te=P.length;ye<Te;ye++){const we=P[ye],Le=we.object,Pe=we.geometry,ke=we.material,At=we.group;if(ke.side===Zt&&Le.layers.test(N.layers)){const Bt=ke.side;ke.side=bt,ke.needsUpdate=!0,Kt(Le,W,N,Pe,ke,At),ke.side=Bt,ke.needsUpdate=!0,Ie=!0}}Ie===!0&&(Ue.updateMultisampleRenderTarget(ne),Ue.updateRenderTargetMipmap(ne)),f.setRenderTarget(H),f.toneMapping=me}function Nt(v,P,W){const N=P.isScene===!0?P.overrideMaterial:null;for(let H=0,me=v.length;H<me;H++){const Ie=v[H],ye=Ie.object,Te=Ie.geometry,we=N===null?Ie.material:N,Le=Ie.group;ye.layers.test(W.layers)&&Kt(ye,P,W,Te,we,Le)}}function Kt(v,P,W,N,H,me){v.onBeforeRender(f,P,W,N,H,me),v.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),H.onBeforeRender(f,P,W,N,v,me),H.transparent===!0&&H.side===Zt&&H.forceSinglePass===!1?(H.side=bt,H.needsUpdate=!0,f.renderBufferDirect(W,P,N,H,v,me),H.side=hn,H.needsUpdate=!0,f.renderBufferDirect(W,P,N,H,v,me),H.side=Zt):f.renderBufferDirect(W,P,N,H,v,me),v.onAfterRender(f,P,W,N,H,me)}function rs(v,P,W){P.isScene!==!0&&(P=re);const N=ge.get(v),H=m.state.lights,me=m.state.shadowsArray,Ie=H.state.version,ye=Qe.getParameters(v,H.state,me,P,W),Te=Qe.getProgramCacheKey(ye);let we=N.programs;N.environment=v.isMeshStandardMaterial?P.environment:null,N.fog=P.fog,N.envMap=(v.isMeshStandardMaterial?ht:at).get(v.envMap||N.environment),we===void 0&&(v.addEventListener("dispose",qe),we=new Map,N.programs=we);let Le=we.get(Te);if(Le!==void 0){if(N.currentProgram===Le&&N.lightsStateVersion===Ie)return ca(v,ye),Le}else ye.uniforms=Qe.getUniforms(v),v.onBuild(W,ye,f),v.onBeforeCompile(ye,f),Le=Qe.acquireProgram(ye,Te),we.set(Te,Le),N.uniforms=ye.uniforms;const Pe=N.uniforms;(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Pe.clippingPlanes=F.uniform),ca(v,ye),N.needsLights=el(v),N.lightsStateVersion=Ie,N.needsLights&&(Pe.ambientLightColor.value=H.state.ambient,Pe.lightProbe.value=H.state.probe,Pe.directionalLights.value=H.state.directional,Pe.directionalLightShadows.value=H.state.directionalShadow,Pe.spotLights.value=H.state.spot,Pe.spotLightShadows.value=H.state.spotShadow,Pe.rectAreaLights.value=H.state.rectArea,Pe.ltc_1.value=H.state.rectAreaLTC1,Pe.ltc_2.value=H.state.rectAreaLTC2,Pe.pointLights.value=H.state.point,Pe.pointLightShadows.value=H.state.pointShadow,Pe.hemisphereLights.value=H.state.hemi,Pe.directionalShadowMap.value=H.state.directionalShadowMap,Pe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Pe.spotShadowMap.value=H.state.spotShadowMap,Pe.spotLightMatrix.value=H.state.spotLightMatrix,Pe.spotLightMap.value=H.state.spotLightMap,Pe.pointShadowMap.value=H.state.pointShadowMap,Pe.pointShadowMatrix.value=H.state.pointShadowMatrix);const ke=Le.getUniforms(),At=Us.seqWithValue(ke.seq,Pe);return N.currentProgram=Le,N.uniformsList=At,Le}function ca(v,P){const W=ge.get(v);W.outputColorSpace=P.outputColorSpace,W.instancing=P.instancing,W.skinning=P.skinning,W.morphTargets=P.morphTargets,W.morphNormals=P.morphNormals,W.morphColors=P.morphColors,W.morphTargetsCount=P.morphTargetsCount,W.numClippingPlanes=P.numClippingPlanes,W.numIntersection=P.numClipIntersection,W.vertexAlphas=P.vertexAlphas,W.vertexTangents=P.vertexTangents,W.toneMapping=P.toneMapping}function qc(v,P,W,N,H){P.isScene!==!0&&(P=re),Ue.resetTextureUnits();const me=P.fog,Ie=N.isMeshStandardMaterial?P.environment:null,ye=b===null?f.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:qt,Te=(N.isMeshStandardMaterial?ht:at).get(N.envMap||Ie),we=N.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Le=!!N.normalMap&&!!W.attributes.tangent,Pe=!!W.morphAttributes.position,ke=!!W.morphAttributes.normal,At=!!W.morphAttributes.color,Bt=N.toneMapped?f.toneMapping:dn,Rn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,et=Rn!==void 0?Rn.length:0,Fe=ge.get(N),Zs=m.state.lights;if(J===!0&&(Ae===!0||v!==L)){const Et=v===L&&N.id===E;F.setState(N,v,Et)}let ct=!1;N.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Zs.state.version||Fe.outputColorSpace!==ye||H.isInstancedMesh&&Fe.instancing===!1||!H.isInstancedMesh&&Fe.instancing===!0||H.isSkinnedMesh&&Fe.skinning===!1||!H.isSkinnedMesh&&Fe.skinning===!0||Fe.envMap!==Te||N.fog===!0&&Fe.fog!==me||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==F.numPlanes||Fe.numIntersection!==F.numIntersection)||Fe.vertexAlphas!==we||Fe.vertexTangents!==Le||Fe.morphTargets!==Pe||Fe.morphNormals!==ke||Fe.morphColors!==At||Fe.toneMapping!==Bt||se.isWebGL2===!0&&Fe.morphTargetsCount!==et)&&(ct=!0):(ct=!0,Fe.__version=N.version);let wn=Fe.currentProgram;ct===!0&&(wn=rs(N,P,H));let la=!1,Ui=!1,Xs=!1;const Ct=wn.getUniforms(),Ln=Fe.uniforms;if(_e.useProgram(wn.program)&&(la=!0,Ui=!0,Xs=!0),N.id!==E&&(E=N.id,Ui=!0),la||L!==v){if(Ct.setValue(R,"projectionMatrix",v.projectionMatrix),se.logarithmicDepthBuffer&&Ct.setValue(R,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),L!==v&&(L=v,Ui=!0,Xs=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Et=Ct.map.cameraPosition;Et!==void 0&&Et.setValue(R,Y.setFromMatrixPosition(v.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Ct.setValue(R,"isOrthographic",v.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||H.isSkinnedMesh)&&Ct.setValue(R,"viewMatrix",v.matrixWorldInverse)}if(H.isSkinnedMesh){Ct.setOptional(R,H,"bindMatrix"),Ct.setOptional(R,H,"bindMatrixInverse");const Et=H.skeleton;Et&&(se.floatVertexTextures?(Et.boneTexture===null&&Et.computeBoneTexture(),Ct.setValue(R,"boneTexture",Et.boneTexture,Ue),Ct.setValue(R,"boneTextureSize",Et.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ys=W.morphAttributes;if((Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0&&se.isWebGL2===!0)&&ae.update(H,W,wn),(Ui||Fe.receiveShadow!==H.receiveShadow)&&(Fe.receiveShadow=H.receiveShadow,Ct.setValue(R,"receiveShadow",H.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Ln.envMap.value=Te,Ln.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Ui&&(Ct.setValue(R,"toneMappingExposure",f.toneMappingExposure),Fe.needsLights&&$c(Ln,Xs),me&&N.fog===!0&&yt.refreshFogUniforms(Ln,me),yt.refreshMaterialUniforms(Ln,N,U,Z,ne),Us.upload(R,Fe.uniformsList,Ln,Ue)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Us.upload(R,Fe.uniformsList,Ln,Ue),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Ct.setValue(R,"center",H.center),Ct.setValue(R,"modelViewMatrix",H.modelViewMatrix),Ct.setValue(R,"normalMatrix",H.normalMatrix),Ct.setValue(R,"modelMatrix",H.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Et=N.uniformsGroups;for(let Ks=0,tl=Et.length;Ks<tl;Ks++)if(se.isWebGL2){const da=Et[Ks];pe.update(da,wn),pe.bind(da,wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wn}function $c(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function el(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(v,P,W){ge.get(v.texture).__webglTexture=P,ge.get(v.depthTexture).__webglTexture=W;const N=ge.get(v);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=W===void 0,N.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(v,P){const W=ge.get(v);W.__webglFramebuffer=P,W.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,W=0){b=v,_=P,x=W;let N=!0,H=null,me=!1,Ie=!1;if(v){const Te=ge.get(v);Te.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(R.FRAMEBUFFER,null),N=!1):Te.__webglFramebuffer===void 0?Ue.setupRenderTarget(v):Te.__hasExternalTextures&&Ue.rebindTextures(v,ge.get(v.texture).__webglTexture,ge.get(v.depthTexture).__webglTexture);const we=v.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(Ie=!0);const Le=ge.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(H=Le[P],me=!0):se.isWebGL2&&v.samples>0&&Ue.useMultisampledRTT(v)===!1?H=ge.get(v).__webglMultisampledFramebuffer:H=Le,O.copy(v.viewport),C.copy(v.scissor),M=v.scissorTest}else O.copy(Q).multiplyScalar(U).floor(),C.copy(X).multiplyScalar(U).floor(),M=k;if(_e.bindFramebuffer(R.FRAMEBUFFER,H)&&se.drawBuffers&&N&&_e.drawBuffers(v,H),_e.viewport(O),_e.scissor(C),_e.setScissorTest(M),me){const Te=ge.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+P,Te.__webglTexture,W)}else if(Ie){const Te=ge.get(v.texture),we=P||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Te.__webglTexture,W||0,we)}E=-1},this.readRenderTargetPixels=function(v,P,W,N,H,me,Ie){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=ge.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ie!==void 0&&(ye=ye[Ie]),ye){_e.bindFramebuffer(R.FRAMEBUFFER,ye);try{const Te=v.texture,we=Te.format,Le=Te.type;if(we!==Dt&&z.convert(we)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Le===ji&&(xe.has("EXT_color_buffer_half_float")||se.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Le!==kn&&z.convert(Le)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===yn&&(se.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-N&&W>=0&&W<=v.height-H&&R.readPixels(P,W,N,H,z.convert(we),z.convert(Le),me)}finally{const Te=b!==null?ge.get(b).__webglFramebuffer:null;_e.bindFramebuffer(R.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(v,P,W=0){const N=Math.pow(2,-W),H=Math.floor(P.image.width*N),me=Math.floor(P.image.height*N);Ue.setTexture2D(P,0),R.copyTexSubImage2D(R.TEXTURE_2D,W,0,0,v.x,v.y,H,me),_e.unbindTexture()},this.copyTextureToTexture=function(v,P,W,N=0){const H=P.image.width,me=P.image.height,Ie=z.convert(W.format),ye=z.convert(W.type);Ue.setTexture2D(W,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,W.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,W.unpackAlignment),P.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,N,v.x,v.y,H,me,Ie,ye,P.image.data):P.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,N,v.x,v.y,P.mipmaps[0].width,P.mipmaps[0].height,Ie,P.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,N,v.x,v.y,Ie,ye,P.image),N===0&&W.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(v,P,W,N,H=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=v.max.x-v.min.x+1,Ie=v.max.y-v.min.y+1,ye=v.max.z-v.min.z+1,Te=z.convert(N.format),we=z.convert(N.type);let Le;if(N.isData3DTexture)Ue.setTexture3D(N,0),Le=R.TEXTURE_3D;else if(N.isDataArrayTexture)Ue.setTexture2DArray(N,0),Le=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const Pe=R.getParameter(R.UNPACK_ROW_LENGTH),ke=R.getParameter(R.UNPACK_IMAGE_HEIGHT),At=R.getParameter(R.UNPACK_SKIP_PIXELS),Bt=R.getParameter(R.UNPACK_SKIP_ROWS),Rn=R.getParameter(R.UNPACK_SKIP_IMAGES),et=W.isCompressedTexture?W.mipmaps[0]:W.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,et.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,et.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,v.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,v.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,v.min.z),W.isDataTexture||W.isData3DTexture?R.texSubImage3D(Le,H,P.x,P.y,P.z,me,Ie,ye,Te,we,et.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(Le,H,P.x,P.y,P.z,me,Ie,ye,Te,et.data)):R.texSubImage3D(Le,H,P.x,P.y,P.z,me,Ie,ye,Te,we,et),R.pixelStorei(R.UNPACK_ROW_LENGTH,Pe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ke),R.pixelStorei(R.UNPACK_SKIP_PIXELS,At),R.pixelStorei(R.UNPACK_SKIP_ROWS,Bt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Rn),H===0&&N.generateMipmaps&&R.generateMipmap(Le),_e.unbindTexture()},this.initTexture=function(v){v.isCubeTexture?Ue.setTextureCube(v,0):v.isData3DTexture?Ue.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ue.setTexture2DArray(v,0):Ue.setTexture2D(v,0),_e.unbindTexture()},this.resetState=function(){_=0,x=0,b=null,_e.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===be?On:uc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===On?be:qt}}class gp extends Uc{}gp.prototype.isWebGL1Renderer=!0;class pp extends je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class mp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Br,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Xt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const It=new w;class $r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ro=new w,wo=new Ke,Lo=new Ke,Ap=new w,No=new Ne,hi=new w;class Cp extends Mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new un),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)hi.fromBufferAttribute(t,n),this.applyBoneTransform(n,hi),this.boundingBox.expandByPoint(hi)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new fn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)hi.fromBufferAttribute(t,n),this.applyBoneTransform(n,hi),this.boundingSphere.expandByPoint(hi)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ke,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;wo.fromBufferAttribute(i.attributes.skinIndex,e),Lo.fromBufferAttribute(i.attributes.skinWeight,e),Ro.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Lo.getComponent(r);if(a!==0){const o=wo.getComponent(r);No.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Ap.copy(Ro).applyMatrix4(No),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Pc extends je{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ip extends dt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=nt,d=nt,h,u){super(null,a,o,c,l,d,i,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Uo=new Ne,_p=new Ne;class ea{constructor(e=[],t=[]){this.uuid=Xt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ne;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:_p;Uo.multiplyMatrices(o,t[r]),Uo.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ea(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=pc(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ip(t,e,e,Dt,yn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Pc),this.bones.push(a),this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Po extends xt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ui=new Ne,Go=new Ne,Ms=[],Do=new un,vp=new Ne,Bi=new Mt,Vi=new fn;class bp extends Mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Po(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,vp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new un),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ui),Do.copy(e.boundingBox).applyMatrix4(ui),this.boundingBox.union(Do)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ui),Vi.copy(e.boundingSphere).applyMatrix4(ui),this.boundingSphere.union(Vi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Bi.geometry=this.geometry,Bi.material=this.material,Bi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vi.copy(this.boundingSphere),Vi.applyMatrix4(n),e.ray.intersectsSphere(Vi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ui),Go.multiplyMatrices(n,ui),Bi.matrixWorld=Go,Bi.raycast(e,Ms);for(let a=0,o=Ms.length;a<o;a++){const c=Ms[a];c.instanceId=r,c.object=this,t.push(c)}Ms.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Po(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Gc extends Qt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fo=new w,Bo=new w,Vo=new Ne,xr=new Jr,Es=new fn;class ta extends je{constructor(e=new Yt,t=new Gc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Fo.fromBufferAttribute(t,i-1),Bo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Fo.distanceTo(Bo);e.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(i),Es.radius+=r,e.ray.intersectsSphere(Es)===!1)return;Vo.copy(i).invert(),xr.copy(e.ray).applyMatrix4(Vo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new w,d=new w,h=new w,u=new w,g=this.isLineSegments?2:1,m=n.index,p=n.attributes.position;if(m!==null){const f=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let _=f,x=y-1;_<x;_+=g){const b=m.getX(_),E=m.getX(_+1);if(l.fromBufferAttribute(p,b),d.fromBufferAttribute(p,E),xr.distanceSqToSegment(l,d,u,h)>c)continue;u.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(u);O<e.near||O>e.far||t.push({distance:O,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),y=Math.min(p.count,a.start+a.count);for(let _=f,x=y-1;_<x;_+=g){if(l.fromBufferAttribute(p,_),d.fromBufferAttribute(p,_+1),xr.distanceSqToSegment(l,d,u,h)>c)continue;u.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(u);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Wo=new w,Oo=new w;class xp extends ta{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Wo.fromBufferAttribute(t,i),Oo.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Wo.distanceTo(Oo);e.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yp extends ta{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Dc extends Qt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zo=new Ne,zr=new Jr,Ts=new fn,Rs=new w;class Sp extends je{constructor(e=new Yt,t=new Dc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(i),Ts.radius+=r,e.ray.intersectsSphere(Ts)===!1)return;zo.copy(i).invert(),zr.copy(e.ray).applyMatrix4(zo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),g=Math.min(l.count,a.start+a.count);for(let m=u,A=g;m<A;m++){const p=l.getX(m);Rs.fromBufferAttribute(h,p),Ho(Rs,p,c,i,e,t,this)}}else{const u=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let m=u,A=g;m<A;m++)Rs.fromBufferAttribute(h,m),Ho(Rs,m,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ho(s,e,t,n,i,r,a){const o=zr.distanceSqToPoint(s);if(o<t){const c=new w;zr.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class na extends Yt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const d=[],h=new w,u=new w,g=[],m=[],A=[],p=[];for(let f=0;f<=n;f++){const y=[],_=f/n;let x=0;f===0&&a===0?x=.5/t:f===n&&c===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){const E=b/t;h.x=-e*Math.cos(i+E*r)*Math.sin(a+_*o),h.y=e*Math.cos(a+_*o),h.z=e*Math.sin(i+E*r)*Math.sin(a+_*o),m.push(h.x,h.y,h.z),u.copy(h).normalize(),A.push(u.x,u.y,u.z),p.push(E+x,1-_),y.push(l++)}d.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){const _=d[f][y+1],x=d[f][y],b=d[f+1][y],E=d[f+1][y+1];(f!==0||a>0)&&g.push(_,x,E),(f!==n-1||c<Math.PI)&&g.push(x,b,E)}this.setIndex(g),this.setAttribute("position",new Ft(m,3)),this.setAttribute("normal",new Ft(A,3)),this.setAttribute("uv",new Ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Hs extends Qt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kn extends Hs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function _n(s,e,t){return Fc(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function ws(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Fc(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Mp(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ko(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function Bc(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class is{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ep extends is{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wa,endingEnd:Wa}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Oa:r=e,o=2*t-n;break;case za:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Oa:a=e,c=2*n-t;break;case za:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,g=this._weightNext,m=(n-t)/(i-t),A=m*m,p=A*m,f=-u*p+2*u*A-u*m,y=(1+u)*p+(-1.5-2*u)*A+(-.5+u)*m+1,_=(-1-g)*p+(1.5+g)*A+.5*m,x=g*p-g*A;for(let b=0;b!==o;++b)r[b]=f*a[d+b]+y*a[l+b]+_*a[c+b]+x*a[h+b];return r}}class Tp extends is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=(n-t)/(i-t),h=1-d;for(let u=0;u!==o;++u)r[u]=a[l+u]*h+a[c+u]*d;return r}}class Rp extends is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class $t{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ws(t,this.TimeBufferType),this.values=ws(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ws(e.times,Array),values:ws(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Rp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ep(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qi:t=this.InterpolantFactoryMethodDiscrete;break;case xi:t=this.InterpolantFactoryMethodLinear;break;case er:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qi;case this.InterpolantFactoryMethodLinear:return xi;case this.InterpolantFactoryMethodSmooth:return er}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=_n(n,r,a),this.values=_n(this.values,r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Fc(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=_n(this.times),t=_n(this.values),n=this.getValueSize(),i=this.getInterpolation()===er,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],d=e[o+1];if(l!==d&&(o!==1||l!==e[0]))if(i)c=!0;else{const h=o*n,u=h-n,g=h+n;for(let m=0;m!==n;++m){const A=t[h+m];if(A!==t[u+m]||A!==t[g+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,u=a*n;for(let g=0;g!==n;++g)t[u+g]=t[h+g]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=_n(e,0,a),this.values=_n(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=_n(this.times,0),t=_n(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}$t.prototype.TimeBufferType=Float32Array;$t.prototype.ValueBufferType=Float32Array;$t.prototype.DefaultInterpolation=xi;class wi extends $t{}wi.prototype.ValueTypeName="bool";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=Qi;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;class Vc extends $t{}Vc.prototype.ValueTypeName="color";class $i extends $t{}$i.prototype.ValueTypeName="number";class wp extends is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let d=l+o;l!==d;l+=4)Tn.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Yn extends $t{InterpolantFactoryMethodLinear(e){return new wp(this.times,this.values,this.getValueSize(),e)}}Yn.prototype.ValueTypeName="quaternion";Yn.prototype.DefaultInterpolation=xi;Yn.prototype.InterpolantFactoryMethodSmooth=void 0;class Li extends $t{}Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Qi;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;class es extends $t{}es.prototype.ValueTypeName="vector";class Lp{constructor(e,t=-1,n,i=Xl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Xt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Up(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push($t.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const d=Mp(c);c=ko(c,1,d),l=ko(l,1,d),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new $i(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],d=l.name.match(r);if(d&&d.length>1){const h=d[1];let u=i[h];u||(i[h]=u=[]),u.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,g,m,A){if(g.length!==0){const p=[],f=[];Bc(g,p,f,m),p.length!==0&&A.push(new h(u,p,f))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const u=l[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const g={};let m;for(m=0;m<u.length;m++)if(u[m].morphTargets)for(let A=0;A<u[m].morphTargets.length;A++)g[u[m].morphTargets[A]]=-1;for(const A in g){const p=[],f=[];for(let y=0;y!==u[m].morphTargets.length;++y){const _=u[m];p.push(_.time),f.push(_.morphTarget===A?1:0)}i.push(new $i(".morphTargetInfluence["+A+"]",p,f))}c=g.length*a}else{const g=".bones["+t[h].name+"]";n(es,g+".position",u,"pos",i),n(Yn,g+".quaternion",u,"rot",i),n(es,g+".scale",u,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Np(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $i;case"vector":case"vector2":case"vector3":case"vector4":return es;case"color":return Vc;case"quaternion":return Yn;case"bool":case"boolean":return wi;case"string":return Li}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Up(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Np(s.type);if(s.times===void 0){const t=[],n=[];Bc(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Mi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Wc{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){o++,r===!1&&i.onStart!==void 0&&i.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,i.onProgress!==void 0&&i.onProgress(d,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,h){return l.push(d,h),this},this.removeHandler=function(d){const h=l.indexOf(d);return h!==-1&&l.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=l.length;h<u;h+=2){const g=l[h],m=l[h+1];if(g.global&&(g.lastIndex=0),g.test(d))return m}return null}}}const Pp=new Wc;class ss{constructor(e){this.manager=e!==void 0?e:Pp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const on={};class Gp extends Error{constructor(e,t){super(e),this.response=t}}class Oc extends ss{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Mi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(on[e]!==void 0){on[e].push({onLoad:t,onProgress:n,onError:i});return}on[e]=[],on[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const d=on[e],h=l.body.getReader(),u=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),g=u?parseInt(u):0,m=g!==0;let A=0;const p=new ReadableStream({start(f){y();function y(){h.read().then(({done:_,value:x})=>{if(_)f.close();else{A+=x.byteLength;const b=new ProgressEvent("progress",{lengthComputable:m,loaded:A,total:g});for(let E=0,L=d.length;E<L;E++){const O=d[E];O.onProgress&&O.onProgress(b)}f.enqueue(x),y()}})}}});return new Response(p)}else throw new Gp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,g=new TextDecoder(u);return l.arrayBuffer().then(m=>g.decode(m))}}}).then(l=>{Mi.add(e,l);const d=on[e];delete on[e];for(let h=0,u=d.length;h<u;h++){const g=d[h];g.onLoad&&g.onLoad(l)}}).catch(l=>{const d=on[e];if(d===void 0)throw this.manager.itemError(e),l;delete on[e];for(let h=0,u=d.length;h<u;h++){const g=d[h];g.onError&&g.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Dp extends ss{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Mi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=qi("img");function c(){d(),Mi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){d(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class zc extends ss{constructor(e){super(e)}load(e,t,n,i){const r=new dt,a=new Dp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ks extends je{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const yr=new Ne,Zo=new w,Xo=new w;class ia{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jr,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Zo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zo),Xo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xo),t.updateMatrixWorld(),yr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fp extends ia{constructor(){super(new vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=yi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Bp extends ks{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.target=new je,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Fp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Yo=new Ne,Wi=new w,Sr=new w;class Vp extends ia{constructor(){super(new vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Wi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Wi),Sr.copy(n.position),Sr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Sr),n.updateMatrixWorld(),i.makeTranslation(-Wi.x,-Wi.y,-Wi.z),Yo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yo)}}class Wp extends ks{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Vp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Op extends ia{constructor(){super(new Qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zp extends ks{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.target=new je,this.shadow=new Op}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hp extends ks{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hr{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class kp extends ss{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Mi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){Mi.add(e,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){i&&i(c),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}const sa="\\[\\]\\.:\\/",Zp=new RegExp("["+sa+"]","g"),ra="[^"+sa+"]",Xp="[^"+sa.replace("\\.","")+"]",Yp=/((?:WC+[\/:])*)/.source.replace("WC",ra),Kp=/(WCOD+)?/.source.replace("WCOD",Xp),Jp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ra),jp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ra),Qp=new RegExp("^"+Yp+Kp+Jp+jp+"$"),qp=["material","materials","bones","map"];class $p{constructor(e,t,n){const i=n||ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ze{constructor(e,t,n){this.path=t,this.parsedPath=n||ze.parseTrackName(t),this.node=ze.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ze.Composite(e,t,n):new ze(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zp,"")}static parseTrackName(e){const t=Qp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);qp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ze.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ze.Composite=$p;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yr);class Ei{static createButton(e){const t=document.createElement("button");function n(){let c=null;async function l(h){h.addEventListener("end",d),await e.xr.setSession(h),t.textContent="EXIT VR",c=h}function d(){c.removeEventListener("end",d),t.textContent="ENTER VR",c=null}t.style.display="",t.style.cursor="pointer",t.style.left="calc(50% - 50px)",t.style.width="100px",t.textContent="ENTER VR",t.onmouseenter=function(){t.style.opacity="1.0"},t.onmouseleave=function(){t.style.opacity="0.5"},t.onclick=function(){if(c===null){const h={optionalFeatures:["local-floor","bounded-floor","hand-tracking","layers"]};navigator.xr.requestSession("immersive-vr",h).then(l)}else c.end()}}function i(){t.style.display="",t.style.cursor="auto",t.style.left="calc(50% - 75px)",t.style.width="150px",t.onmouseenter=null,t.onmouseleave=null,t.onclick=null}function r(){i(),t.textContent="VR NOT SUPPORTED"}function a(c){i(),console.warn("Exception when trying to call xr.isSessionSupported",c),t.textContent="VR NOT ALLOWED"}function o(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return t.id="VRButton",t.style.display="none",o(t),navigator.xr.isSessionSupported("immersive-vr").then(function(c){c?n():r(),c&&Ei.xrSessionIsGranted&&t.click()}).catch(a),t;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",o(c),c}}static registerSessionGrantedListener(){if("xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{Ei.xrSessionIsGranted=!0})}}}Ei.xrSessionIsGranted=!1;Ei.registerSessionGrantedListener();function Ko(s,e){if(e===Yl)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Fr||e===hc){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Fr)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class em extends ss{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new rm(t)}),this.register(function(t){return new um(t)}),this.register(function(t){return new fm(t)}),this.register(function(t){return new gm(t)}),this.register(function(t){return new om(t)}),this.register(function(t){return new cm(t)}),this.register(function(t){return new lm(t)}),this.register(function(t){return new dm(t)}),this.register(function(t){return new sm(t)}),this.register(function(t){return new hm(t)}),this.register(function(t){return new am(t)}),this.register(function(t){return new nm(t)}),this.register(function(t){return new pm(t)}),this.register(function(t){return new mm(t)})}load(e,t,n,i){const r=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=Hr.extractUrlBase(e),this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Oc(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(d){t(d),r.manager.itemEnd(e)},o)}catch(d){o(d)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Hc){try{a[Be.KHR_BINARY_GLTF]=new Am(e)}catch(h){i&&i(h);return}r=JSON.parse(a[Be.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new wm(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const h=this.pluginCallbacks[d](l);o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const h=r.extensionsUsed[d],u=r.extensionsRequired||[];switch(h){case Be.KHR_MATERIALS_UNLIT:a[h]=new im;break;case Be.KHR_DRACO_MESH_COMPRESSION:a[h]=new Cm(r,this.dracoLoader);break;case Be.KHR_TEXTURE_TRANSFORM:a[h]=new Im;break;case Be.KHR_MESH_QUANTIZATION:a[h]=new _m;break;default:u.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function tm(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Be={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class nm{constructor(e){this.parser=e,this.name=Be.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const d=new Ee(16777215);c.color!==void 0&&d.fromArray(c.color);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new zp(d),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Wp(d),l.distance=h;break;case"spot":l=new Bp(d),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,bn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class im{constructor(){this.name=Be.KHR_MATERIALS_UNLIT}getMaterialType(){return Sn}extendParams(e,t,n){const i=[];e.color=new Ee(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,be))}return Promise.all(i)}}class sm{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class rm{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ve(o,o)}return Promise.all(r)}}class am{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class om{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,be)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class cm{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class lm{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ee(o[0],o[1],o[2]),Promise.all(r)}}class dm{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class hm{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ee(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,be)),Promise.all(r)}}class um{constructor(e){this.parser=e,this.name=Be.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class fm{constructor(e){this.parser=e,this.name=Be.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class gm{constructor(e){this.parser=e,this.name=Be.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class pm{constructor(e){this.name=Be.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,d=i.count,h=i.byteStride,u=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(d,h,u,i.mode,i.filter).then(function(g){return g.buffer}):a.ready.then(function(){const g=new ArrayBuffer(d*h);return a.decodeGltfBuffer(new Uint8Array(g),d,h,u,i.mode,i.filter),g})})}else return null}}class mm{constructor(e){this.name=Be.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Pt.TRIANGLES&&l.mode!==Pt.TRIANGLE_STRIP&&l.mode!==Pt.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(d=>(c[l]=d,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const d=l.pop(),h=d.isGroup?d.children:[d],u=l[0].count,g=[];for(const m of h){const A=new Ne,p=new w,f=new Tn,y=new w(1,1,1),_=new bp(m.geometry,m.material,u);for(let x=0;x<u;x++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,x),c.SCALE&&y.fromBufferAttribute(c.SCALE,x),_.setMatrixAt(x,A.compose(p,f,y));for(const x in c)x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,c[x]);je.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),g.push(_)}return d.isGroup?(d.clear(),d.add(...g),d):g[0]}))}}const Hc="glTF",Oi=12,Jo={JSON:1313821514,BIN:5130562};class Am{constructor(e){this.name=Be.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Oi),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Hc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Oi,r=new DataView(e,Oi);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Jo.JSON){const l=new Uint8Array(e,Oi+a,o);this.content=n.decode(l)}else if(c===Jo.BIN){const l=Oi+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Cm{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Be.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const d in a){const h=kr[d]||d.toLowerCase();o[h]=a[d]}for(const d in e.attributes){const h=kr[d]||d.toLowerCase();if(a[d]!==void 0){const u=n.accessors[e.attributes[d]],g=Ci[u.componentType];l[h]=g.name,c[h]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(h){i.decodeDracoFile(d,function(u){for(const g in u.attributes){const m=u.attributes[g],A=c[g];A!==void 0&&(m.normalized=A)}h(u)},o,l)})})}}class Im{constructor(){this.name=Be.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class _m{constructor(){this.name=Be.KHR_MESH_QUANTIZATION}}class kc extends is{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,d=i-t,h=(n-t)/d,u=h*h,g=u*h,m=e*l,A=m-l,p=-2*g+3*u,f=g-u,y=1-p,_=f-u+h;for(let x=0;x!==o;x++){const b=a[A+x+o],E=a[A+x+c]*d,L=a[m+x+o],O=a[m+x]*d;r[x]=y*b+_*E+p*L+f*O}return r}}const vm=new Tn;class bm extends kc{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return vm.fromArray(r).normalize().toArray(r),r}}const Pt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ci={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jo={9728:nt,9729:St,9984:Dr,9985:lc,9986:Ns,9987:Hn},Qo={33071:Gt,33648:Gs,10497:vi},Mr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},kr={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xm={CUBICSPLINE:void 0,LINEAR:xi,STEP:Qi},Er={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ym(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Hs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:hn})),s.DefaultMaterial}function zi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function bn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Sm(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,d=e.length;l<d;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,d=e.length;l<d;l++){const h=e[l];if(n){const u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(u)}if(i){const u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(u)}if(r){const u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const d=l[0],h=l[1],u=l[2];return n&&(s.morphAttributes.position=d),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function Mm(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Em(s){const e=s.extensions&&s.extensions[Be.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+qo(e.attributes):t=s.indices+":"+qo(s.attributes)+":"+s.mode,t}function qo(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Zr(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Tm(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Rm=new Ne;class wm{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new tm,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new zc(this.options.manager):this.textureLoader=new kp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Oc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};zi(r,o,i),bn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,d]of a.children.entries())r(d,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Be.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Hr.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Mr[i.type],o=Ci[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new xt(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Mr[i.type],l=Ci[i.componentType],d=l.BYTES_PER_ELEMENT,h=d*c,u=i.byteOffset||0,g=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let A,p;if(g&&g!==h){const f=Math.floor(u/g),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let _=t.cache.get(y);_||(A=new l(o,f*g,i.count*g/d),_=new mp(A,g/d),t.cache.add(y,_)),p=new $r(_,c,u%g/d,m)}else o===null?A=new l(i.count*c):A=new l(o,u,i.count*c),p=new xt(A,c,m);if(i.sparse!==void 0){const f=Mr.SCALAR,y=Ci[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,b=new y(a[1],_,i.sparse.count*f),E=new l(a[2],x,i.sparse.count*c);o!==null&&(p=new xt(p.array.slice(),p.itemSize,p.normalized));for(let L=0,O=b.length;L<O;L++){const C=b[L];if(p.setX(C,E[L*c]),c>=2&&p.setY(C,E[L*c+1]),c>=3&&p.setZ(C,E[L*c+2]),c>=4&&p.setW(C,E[L*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=a.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);const u=(r.samplers||{})[a.sampler]||{};return d.magFilter=jo[u.magFilter]||St,d.minFilter=jo[u.minFilter]||Hn,d.wrapS=Qo[u.wrapS]||vi,d.wrapT=Qo[u.wrapT]||vi,i.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const u=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(c).then(function(h){return new Promise(function(u,g){let m=u;t.isImageBitmapLoader===!0&&(m=function(A){const p=new dt(A);p.needsUpdate=!0,u(p)}),t.load(Hr.resolveURL(h,r.path),m,void 0,g)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),h.userData.mimeType=a.mimeType||Tm(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Be.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Be.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[Be.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Dc,Qt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Gc,Qt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Hs}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[Be.KHR_MATERIALS_UNLIT]){const h=i[Be.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Ee(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;o.color.fromArray(u),o.opacity=u[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,be)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Zt);const d=r.alphaMode||Er.OPAQUE;if(d===Er.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===Er.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Sn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ve(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&a!==Sn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Sn&&(o.emissive=new Ee().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&a!==Sn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,be)),Promise.all(l).then(function(){const h=new a(o);return r.name&&(h.name=r.name),bn(h,r),t.associations.set(h,{materials:e}),r.extensions&&zi(i,h,r),h})}createUniqueName(e){const t=ze.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Be.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return $o(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],d=Em(l),h=i[d];if(h)a.push(h.promise);else{let u;l.extensions&&l.extensions[Be.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=$o(new Yt,l,t),i[d]={primitive:l,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const d=a[c].material===void 0?ym(this.cache):this.getDependency("material",a[c].material);o.push(d)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),d=c[c.length-1],h=[];for(let g=0,m=d.length;g<m;g++){const A=d[g],p=a[g];let f;const y=l[g];if(p.mode===Pt.TRIANGLES||p.mode===Pt.TRIANGLE_STRIP||p.mode===Pt.TRIANGLE_FAN||p.mode===void 0)f=r.isSkinnedMesh===!0?new Cp(A,y):new Mt(A,y),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),p.mode===Pt.TRIANGLE_STRIP?f.geometry=Ko(f.geometry,hc):p.mode===Pt.TRIANGLE_FAN&&(f.geometry=Ko(f.geometry,Fr));else if(p.mode===Pt.LINES)f=new xp(A,y);else if(p.mode===Pt.LINE_STRIP)f=new ta(A,y);else if(p.mode===Pt.LINE_LOOP)f=new yp(A,y);else if(p.mode===Pt.POINTS)f=new Sp(A,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(f.geometry.morphAttributes).length>0&&Mm(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),bn(f,r),p.extensions&&zi(i,f,p),t.assignFinalMaterial(f),h.push(f)}for(let g=0,m=h.length;g<m;g++)t.associations.set(h[g],{meshes:e,primitives:g});if(h.length===1)return h[0];const u=new Vn;t.associations.set(u,{meshes:e});for(let g=0,m=h.length;g<m;g++)u.add(h[g]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new vt(hd.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Qr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),bn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,d=a.length;l<d;l++){const h=a[l];if(h){o.push(h);const u=new Ne;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ea(o,c)})}loadAnimation(e){const n=this.json.animations[e],i=n.name?n.name:"animation_"+e,r=[],a=[],o=[],c=[],l=[];for(let d=0,h=n.channels.length;d<h;d++){const u=n.channels[d],g=n.samplers[u.sampler],m=u.target,A=m.node,p=n.parameters!==void 0?n.parameters[g.input]:g.input,f=n.parameters!==void 0?n.parameters[g.output]:g.output;m.node!==void 0&&(r.push(this.getDependency("node",A)),a.push(this.getDependency("accessor",p)),o.push(this.getDependency("accessor",f)),c.push(g),l.push(m))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l)]).then(function(d){const h=d[0],u=d[1],g=d[2],m=d[3],A=d[4],p=[];for(let f=0,y=h.length;f<y;f++){const _=h[f],x=u[f],b=g[f],E=m[f],L=A[f];if(_===void 0)continue;_.updateMatrix();let O;switch(vn[L.path]){case vn.weights:O=$i;break;case vn.rotation:O=Yn;break;case vn.position:case vn.scale:default:O=es;break}const C=_.name?_.name:_.uuid,M=E.interpolation!==void 0?xm[E.interpolation]:xi,K=[];vn[L.path]===vn.weights?_.traverse(function(U){U.morphTargetInfluences&&K.push(U.name?U.name:U.uuid)}):K.push(C);let Z=b.array;if(b.normalized){const U=Zr(Z.constructor),G=new Float32Array(Z.length);for(let D=0,Q=Z.length;D<Q;D++)G[D]=Z[D]*U;Z=G}for(let U=0,G=K.length;U<G;U++){const D=new O(K[U]+"."+vn[L.path],x.array,Z,M);E.interpolation==="CUBICSPLINE"&&(D.createInterpolant=function(X){const k=this instanceof Yn?bm:kc;return new k(this.times,this.values,this.getValueSize()/3,X)},D.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(D)}}return new Lp(i,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,d=o.length;l<d;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const d=l[0],h=l[1],u=l[2];u!==null&&d.traverse(function(g){g.isSkinnedMesh&&g.bind(u,Rm)});for(let g=0,m=h.length;g<m;g++)d.add(h[g]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let d;if(r.isBone===!0?d=new Pc:l.length>1?d=new Vn:l.length===1?d=l[0]:d=new je,d!==l[0])for(let h=0,u=l.length;h<u;h++)d.add(l[h]);if(r.name&&(d.userData.name=r.name,d.name=a),bn(d,r),r.extensions&&zi(n,d,r),r.matrix!==void 0){const h=new Ne;h.fromArray(r.matrix),d.applyMatrix4(h)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);return i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Vn;n.name&&(r.name=i.createUniqueName(n.name)),bn(r,n),n.extensions&&zi(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let d=0,h=c.length;d<h;d++)r.add(c[d]);const l=d=>{const h=new Map;for(const[u,g]of i.associations)(u instanceof Qt||u instanceof dt)&&h.set(u,g);return d.traverse(u=>{const g=i.associations.get(u);g!=null&&h.set(u,g)}),h};return i.associations=l(r),r})}}function Lm(s,e,t){const n=e.attributes,i=new un;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new w(c[0],c[1],c[2]),new w(l[0],l[1],l[2])),o.normalized){const d=Zr(Ci[o.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new w,c=new w;for(let l=0,d=r.length;l<d;l++){const h=r[l];if(h.POSITION!==void 0){const u=t.json.accessors[h.POSITION],g=u.min,m=u.max;if(g!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(g[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(g[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(g[2]),Math.abs(m[2]))),u.normalized){const A=Zr(Ci[u.componentType]);c.multiplyScalar(A)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new fn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function $o(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=kr[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return bn(s,e),Lm(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Sm(s,e.targets,t):s})}const Zc=new Error("Current device does not support microphone API"),Nm=new Error("AppId changed without project login");class aa extends Error{constructor(e,t,n,...i){super(...i),this.name=`WebsocketError code ${t}`,this.message=e,this.code=t,this.wasClean=n}}const ts=16e3;class Um{constructor(e,t){this.isFinalized=!1,this.words=[],this.entities=new Map,this.intent={intent:"",isFinal:!1},this.contextId=e,this.id=t}toSegment(){let e=0;const t=new Array(this.entities.size);return this.entities.forEach(n=>{t[e]=n,e++}),{id:this.id,contextId:this.contextId,isFinal:this.isFinalized,words:this.words,entities:t,intent:this.intent}}toString(){const e=this.toSegment(),t=e.words.filter(i=>i.value),n=Object.assign(Object.assign({},e),{words:t});return JSON.stringify(n,null,2)}updateTranscript(e){return e.forEach(t=>{(!this.isFinalized||t.isFinal)&&(this.words[t.index]=t)}),this}updateEntities(e){return e.forEach(t=>{(!this.isFinalized||t.isFinal)&&this.entities.set(this.entityMapKey(t),t)}),this}updateIntent(e){return(!this.isFinalized||e.isFinal)&&(this.intent=e),this}finalize(){return this.entities.forEach((e,t)=>{e.isFinal||this.entities.delete(t)}),this.words=this.words.filter(e=>e.isFinal),this.intent.isFinal||(this.intent.intent="",this.intent.isFinal=!0),this.isFinalized=!0,this}entityMapKey(e){return`${e.startPosition.toString()}:${e.endPosition.toString()}`}}function Me(s,e,t,n){function i(r){return r instanceof t?r:new t(function(a){a(r)})}return new(t||(t=Promise))(function(r,a){function o(d){try{l(n.next(d))}catch(h){a(h)}}function c(d){try{l(n.throw(d))}catch(h){a(h)}}function l(d){d.done?r(d.value):i(d.value).then(o,c)}l((n=n.apply(s,e||[])).next())})}const Pm=new Error("Microphone consent is not given");var xn;(function(s){s.NoAudioConsent="NoAudioConsent",s.NoBrowserSupport="NoBrowserSupport",s.Stopped="Stopped",s.Starting="Starting",s.Started="Started"})(xn||(xn={}));class Gm{constructor(){this.muted=!1,this.initialized=!1,this.state=xn.Stopped,this.debug=!1,this.stateChangeCbs=[];try{const e=window.navigator.mediaDevices.getSupportedConstraints();this.nativeResamplingSupported=e.sampleRate===!0,this.autoGainControlSupported=e.autoGainControl===!0}catch{this.nativeResamplingSupported=!1,this.autoGainControlSupported=!1}}onStateChange(e){this.stateChangeCbs.push(e)}initialize(){var e;return Me(this,void 0,void 0,function*(){if(this.initialized)return;if(((e=window.navigator)===null||e===void 0?void 0:e.mediaDevices)===void 0)throw this.setState(xn.NoBrowserSupport),Zc;const t={video:!1};this.nativeResamplingSupported||this.autoGainControlSupported?t.audio={sampleRate:ts,autoGainControl:this.autoGainControlSupported}:t.audio=!0;try{this.setState(xn.Starting),this.mediaStream=yield window.navigator.mediaDevices.getUserMedia(t)}catch(n){throw this.setState(xn.NoAudioConsent),console.error(n),Pm}this.initialized=!0,this.muted=!0,this.setState(xn.Started)})}setState(e){this.state!==e&&(this.debug&&console.log("[BrowserMicrophone]",this.state,"->",e),this.state=e,this.stateChangeCbs.forEach(t=>t(e)))}close(){return Me(this,void 0,void 0,function*(){if(!this.initialized)return;this.muted=!0,this.mediaStream.getTracks().forEach(t=>t.stop()),this.mediaStream=void 0,this.initialized=!1,this.setState(xn.Stopped)})}isRecording(){return!this.muted}}var Lt;(function(s){s.Started="started",s.Stopped="stopped",s.SegmentEnd="segment_end",s.Transcript="transcript",s.Entity="entity",s.Intent="intent",s.TentativeTranscript="tentative_transcript",s.TentativeEntities="tentative_entities",s.TentativeIntent="tentative_intent"})(Lt||(Lt={}));var En;(function(s){s.Opened="WEBSOCKET_OPEN",s.Closed="WEBSOCKET_CLOSED",s.AudioProcessorReady="SOURCE_SAMPLE_RATE_SET_SUCCESS",s.VadSignalHigh="VadSignalHigh",s.VadSignalLow="VadSignalLow",s.RequestContextStart="RequestContextStart"})(En||(En={}));var wt;(function(s){s.connect="connect",s.initAudioProcessor="initAudioProcessor",s.adjustAudioProcessor="adjustAudioProcessor",s.SET_SHARED_ARRAY_BUFFERS="SET_SHARED_ARRAY_BUFFERS",s.CLOSE="CLOSE",s.START_CONTEXT="START_CONTEXT",s.SWITCH_CONTEXT="SWITCH_CONTEXT",s.STOP_CONTEXT="STOP_CONTEXT",s.AUDIO="AUDIO",s.startStream="startStream",s.stopStream="stopStream",s.setContextOptions="setContextOptions"})(wt||(wt={}));const Dm={connect:!0,apiUrl:"https://api.speechly.com",sampleRate:ts,debug:!1,logSegments:!1,frameMillis:30,historyFrames:5},Fm={enabled:!1,controlListening:!0,signalToNoiseDb:3,noiseGateDb:-24,noiseLearnHalftimeMillis:400,signalSearchFrames:5,signalActivation:.7,signalRelease:.2,signalSustainMillis:3e3},Xc={preserveSegments:!1,sampleRate:ts,immediate:!1,autoStarted:!1};var Je;(function(s){s[s.Failed=0]="Failed",s[s.Disconnected=1]="Disconnected",s[s.Connected=2]="Connected",s[s.Active=3]="Active"})(Je||(Je={}));class Ht extends Array{addEventListener(e){this.push(e)}removeEventListener(e){const t=this.findIndex(n=>n===e);t>=0&&this.splice(t,1)}}class Bm{constructor(){this.stateChangeCbs=new Ht,this.transcriptCbs=new Ht,this.entityCbs=new Ht,this.intentCbs=new Ht,this.segmentChangeCbs=new Ht,this.tentativeTranscriptCbs=new Ht,this.tentativeEntityCbs=new Ht,this.tentativeIntentCbs=new Ht,this.contextStartedCbs=new Ht,this.contextStoppedCbs=new Ht,this.onVadStateChange=new Ht}}const Vm=new Error("BrowserClient already started"),Wm=new Error("BrowserClient already stopped");function Hi(s){var e;return(e=Om.get(s))!==null&&e!==void 0?e:"unknown"}const Om=new Map([[Je.Failed,"Failed"],[Je.Disconnected,"Disconnected"],[Je.Connected,"Connected"],[Je.Active,"Active"]]);var Ls,zm=new Uint8Array(16);function Hm(){if(!Ls&&(Ls=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!Ls))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ls(zm)}var km=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Zm(s){return typeof s=="string"&&km.test(s)}var ut=[];for(var Tr=0;Tr<256;++Tr)ut.push((Tr+256).toString(16).substr(1));function Xm(s){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=(ut[s[e+0]]+ut[s[e+1]]+ut[s[e+2]]+ut[s[e+3]]+"-"+ut[s[e+4]]+ut[s[e+5]]+"-"+ut[s[e+6]]+ut[s[e+7]]+"-"+ut[s[e+8]]+ut[s[e+9]]+"-"+ut[s[e+10]]+ut[s[e+11]]+ut[s[e+12]]+ut[s[e+13]]+ut[s[e+14]]+ut[s[e+15]]).toLowerCase();if(!Zm(t))throw TypeError("Stringified UUID is invalid");return t}function ec(s,e,t){s=s||{};var n=s.random||(s.rng||Hm)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){t=t||0;for(var i=0;i<16;++i)e[t+i]=n[i];return e}return Xm(n)}var Rr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xr={exports:{}};/*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */(function(s,e){(function(t){var n=e,i=s&&s.exports==n&&s,r=typeof Rr=="object"&&Rr;(r.global===r||r.window===r)&&(t=r);var a=function(m){this.message=m};a.prototype=new Error,a.prototype.name="InvalidCharacterError";var o=function(m){throw new a(m)},c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=/[\t\n\f\r ]/g,d=function(m){m=String(m).replace(l,"");var A=m.length;A%4==0&&(m=m.replace(/==?$/,""),A=m.length),(A%4==1||/[^+a-zA-Z0-9/]/.test(m))&&o("Invalid character: the string to be decoded is not correctly encoded.");for(var p=0,f,y,_="",x=-1;++x<A;)y=c.indexOf(m.charAt(x)),f=p%4?f*64+y:y,p++%4&&(_+=String.fromCharCode(255&f>>(-2*p&6)));return _},h=function(m){m=String(m),/[^\0-\xFF]/.test(m)&&o("The string to be encoded contains characters outside of the Latin1 range.");for(var A=m.length%3,p="",f=-1,y,_,x,b,E=m.length-A;++f<E;)y=m.charCodeAt(f)<<16,_=m.charCodeAt(++f)<<8,x=m.charCodeAt(++f),b=y+_+x,p+=c.charAt(b>>18&63)+c.charAt(b>>12&63)+c.charAt(b>>6&63)+c.charAt(b&63);return A==2?(y=m.charCodeAt(f)<<8,_=m.charCodeAt(++f),b=y+_,p+=c.charAt(b>>10)+c.charAt(b>>4&63)+c.charAt(b<<2&63)+"="):A==1&&(b=m.charCodeAt(f),p+=c.charAt(b>>2)+c.charAt(b<<4&63)+"=="),p},u={encode:h,decode:d,version:"0.1.0"};if(n&&!n.nodeType)if(i)i.exports=u;else for(var g in u)u.hasOwnProperty(g)&&(n[g]=u[g]);else t.base64=u})(Rr)})(Xr,Xr.exports);const Ym=60*60*1e3;function Km(s,e,t,n,i=fetch,r=Date.now){var a;return Me(this,void 0,void 0,function*(){let o;e!==void 0?o={projectId:e,deviceId:n}:o={appId:t,deviceId:n};const c=yield i(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),l=yield c.json();if(c.status!==200)throw Error((a=l.error)!==null&&a!==void 0?a:`Speechly API login request failed with ${c.status}`);if(l.access_token===void 0)throw Error("Invalid login response from Speechly API");if(!Yc(l.access_token,e,t,n,r))throw Error("Invalid token received from Speechly API");return l.access_token})}function Yc(s,e,t,n,i=Date.now){const r=Jm(s);return!(r.expiresAtMs-i()<Ym||r.appId!==t||r.projectId!==e||r.deviceId!==n)}function Jm(s){const e=s.split(".")[1];let t;try{t=JSON.parse(Xr.exports.decode(e))}catch{throw new Error("Error decoding Speechly token!")}return{appId:t.appId,projectId:t.projectId,deviceId:t.deviceId,configId:t.configId,scopes:t.scope.split(" "),issuer:t.iss,audience:t.aud,expiresAtMs:t.exp*1e3}}function jm(s,e){var t=atob(s);if(e){for(var n=new Uint8Array(t.length),i=0,r=t.length;i<r;++i)n[i]=t.charCodeAt(i);return String.fromCharCode.apply(null,new Uint16Array(n.buffer))}return t}function Qm(s,e,t){var n=e===void 0?null:e,i=t===void 0?!1:t,r=jm(s,i),a=r.indexOf(`
`,10)+1,o=r.substring(a)+(n?"//# sourceMappingURL="+n:""),c=new Blob([o],{type:"application/javascript"});return URL.createObjectURL(c)}function qm(s,e,t){var n;return function(r){return n=n||Qm(s,e,t),new Worker(n,r)}}var $m=qm("Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwp2YXIgd29ya2VyX2NvZGUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHsKICAgICd1c2Ugc3RyaWN0JzsKCiAgICAvKioKICAgICAqIEBpbnRlcm5hbAogICAgICovCiAgICBjbGFzcyBBdWRpb1Rvb2xzIHsKICAgICAgICBzdGF0aWMgZG93bnNhbXBsZShzcmMsIGRlc3QsIHNvdXJjZUluZGV4ID0gMCwgc291cmNlTGVuZ3RoID0gLTEsIGRlc3RJbmRleCA9IDAsIGRlc3RMZW5ndGggPSAtMSkgewogICAgICAgICAgICBpZiAoc291cmNlTGVuZ3RoIDwgMCkKICAgICAgICAgICAgICAgIHNvdXJjZUxlbmd0aCA9IHNyYy5sZW5ndGggLSBzb3VyY2VJbmRleDsKICAgICAgICAgICAgaWYgKGRlc3RMZW5ndGggPCAwKQogICAgICAgICAgICAgICAgZGVzdExlbmd0aCA9IGRlc3QubGVuZ3RoIC0gZGVzdEluZGV4OwogICAgICAgICAgICBpZiAoZGVzdExlbmd0aCA+IHNvdXJjZUxlbmd0aCkgewogICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBkb3duc2FtcGxlOiBzb3VyY2UgYXJyYXkgbGVuZ3RoICgke3NvdXJjZUxlbmd0aH0pIGlzIHNob3J0ZXIgdGhhbiBkZXN0aW5hdGlvbiAoJHtkZXN0TGVuZ3RofSlgKTsKICAgICAgICAgICAgfQogICAgICAgICAgICBpZiAoZGVzdExlbmd0aCA9PT0gMCkgewogICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBkb3duc2FtcGxlOiBzb3VyY2UgYXJyYXkgbGVuZ3RoICgke3NvdXJjZUxlbmd0aH0pIGNhbid0IGJlIGRvd25zYW1wbGVkIHRvIHplcm8tbGVuZ3RoIGRlc3RpbmF0aW9uLmApOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGlmIChzb3VyY2VMZW5ndGggPT09IDApIHsKICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigiQ2FuJ3QgZG93bnNhbXBsZTogc291cmNlIHJhbmdlIGNhbid0IGJlIHplcm8gbGVuZ3RoLiIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGlmIChzb3VyY2VMZW5ndGggPT09IDEpIHsKICAgICAgICAgICAgICAgIGRlc3RbMF0gPSBzcmNbMF07CiAgICAgICAgICAgICAgICByZXR1cm47CiAgICAgICAgICAgIH0KICAgICAgICAgICAgbGV0IGRlc3RJbmRleEZyYWN0aW9uID0gMC4wOwogICAgICAgICAgICBjb25zdCBkZXN0U3RlcCA9IChkZXN0TGVuZ3RoIC0gMSkgLyAoc291cmNlTGVuZ3RoIC0gMSk7CiAgICAgICAgICAgIGxldCBzdW0gPSAwOwogICAgICAgICAgICBsZXQgdG90YWxXZWlnaHQgPSAwOwogICAgICAgICAgICBjb25zdCBzb3VyY2VFbmRJbmRleCA9IHNvdXJjZUluZGV4ICsgc291cmNlTGVuZ3RoOwogICAgICAgICAgICBmb3IgKDsgc291cmNlSW5kZXggPCBzb3VyY2VFbmRJbmRleDsgc291cmNlSW5kZXgrKykgewogICAgICAgICAgICAgICAgY29uc3Qgd2VpZ2h0ID0gMC41IC0gTWF0aC5hYnMoZGVzdEluZGV4RnJhY3Rpb24pOwogICAgICAgICAgICAgICAgc3VtICs9IHNyY1tzb3VyY2VJbmRleF0gKiB3ZWlnaHQ7CiAgICAgICAgICAgICAgICB0b3RhbFdlaWdodCArPSB3ZWlnaHQ7CiAgICAgICAgICAgICAgICBkZXN0SW5kZXhGcmFjdGlvbiArPSBkZXN0U3RlcDsKICAgICAgICAgICAgICAgIGlmIChkZXN0SW5kZXhGcmFjdGlvbiA+PSAwLjUpIHsKICAgICAgICAgICAgICAgICAgICBkZXN0SW5kZXhGcmFjdGlvbiAtPSAxOwogICAgICAgICAgICAgICAgICAgIGRlc3RbZGVzdEluZGV4KytdID0gc3VtIC8gdG90YWxXZWlnaHQ7CiAgICAgICAgICAgICAgICAgICAgc3VtID0gMDsKICAgICAgICAgICAgICAgICAgICB0b3RhbFdlaWdodCA9IDA7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgLy8gUHV0IGxhc3QgdmFsdWUgaW4gcGxhY2UKICAgICAgICAgICAgaWYgKHRvdGFsV2VpZ2h0ID4gMCkgewogICAgICAgICAgICAgICAgZGVzdFtkZXN0SW5kZXgrK10gPSBzdW0gLyB0b3RhbFdlaWdodDsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBzdGF0aWMgZ2V0RW5lcmd5KHNhbXBsZXMsIHN0YXJ0ID0gMCwgbGVuZ3RoID0gLTEpIHsKICAgICAgICAgICAgaWYgKGxlbmd0aCA8IDApCiAgICAgICAgICAgICAgICBsZW5ndGggPSBzYW1wbGVzLmxlbmd0aCAtIHN0YXJ0OwogICAgICAgICAgICBpZiAobGVuZ3RoIDw9IDApCiAgICAgICAgICAgICAgICByZXR1cm4gMDsKICAgICAgICAgICAgY29uc3QgZW5kSW5kZXggPSBzdGFydCArIGxlbmd0aDsKICAgICAgICAgICAgbGV0IHN1bUVuZXJneVNxdWFyZWQgPSAwLjA7CiAgICAgICAgICAgIGZvciAoOyBzdGFydCA8IGVuZEluZGV4OyBzdGFydCsrKSB7CiAgICAgICAgICAgICAgICBzdW1FbmVyZ3lTcXVhcmVkICs9IHNhbXBsZXNbc3RhcnRdICogc2FtcGxlc1tzdGFydF07CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydChzdW1FbmVyZ3lTcXVhcmVkIC8gbGVuZ3RoKTsKICAgICAgICB9CiAgICAgICAgc3RhdGljIGdldEF1ZGlvUGVhayhzYW1wbGVzLCBzdGFydCA9IDAsIGxlbmd0aCA9IC0xKSB7CiAgICAgICAgICAgIGlmIChsZW5ndGggPCAwKQogICAgICAgICAgICAgICAgbGVuZ3RoID0gc2FtcGxlcy5sZW5ndGggLSBzdGFydDsKICAgICAgICAgICAgaWYgKGxlbmd0aCA8PSAwKQogICAgICAgICAgICAgICAgcmV0dXJuIDA7CiAgICAgICAgICAgIGNvbnN0IGVuZEluZGV4ID0gc3RhcnQgKyBsZW5ndGg7CiAgICAgICAgICAgIGxldCBwZWFrID0gMDsKICAgICAgICAgICAgZm9yICg7IHN0YXJ0IDwgZW5kSW5kZXg7IHN0YXJ0KyspIHsKICAgICAgICAgICAgICAgIGlmIChzYW1wbGVzW3N0YXJ0XSA+IHBlYWspIHsKICAgICAgICAgICAgICAgICAgICBwZWFrID0gc2FtcGxlc1tzdGFydF07CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIHBlYWs7CiAgICAgICAgfQogICAgICAgIHN0YXRpYyBjb252ZXJ0SW50MTZUb0Zsb2F0KHNyYywgZGVzdCwgc3JjU3RhcnRTYW1wbGUgPSAwLCBsZW5ndGhTYW1wbGVzID0gLTEsIGRzdEluZGV4ID0gMCkgewogICAgICAgICAgICBpZiAobGVuZ3RoU2FtcGxlcyA8IDApCiAgICAgICAgICAgICAgICBsZW5ndGhTYW1wbGVzID0gc3JjLmxlbmd0aCAvIDIgLSBzcmNTdGFydFNhbXBsZTsKICAgICAgICAgICAgY29uc3QgbWF4TGVuID0gTWF0aC5taW4oKHNyYy5sZW5ndGggLyAyKSAtIHNyY1N0YXJ0U2FtcGxlLCBkZXN0Lmxlbmd0aCAtIGRzdEluZGV4KTsKICAgICAgICAgICAgbGVuZ3RoU2FtcGxlcyA9IE1hdGgubWluKGxlbmd0aFNhbXBsZXMsIG1heExlbik7CiAgICAgICAgICAgIGlmIChsZW5ndGhTYW1wbGVzIDw9IDApCiAgICAgICAgICAgICAgICByZXR1cm4gMDsKICAgICAgICAgICAgbGV0IGJ5dGVJbmRleCA9IHNyY1N0YXJ0U2FtcGxlICogMjsKICAgICAgICAgICAgY29uc3QgZW5kQnl0ZSA9IGJ5dGVJbmRleCArIGxlbmd0aFNhbXBsZXMgKiAyOwogICAgICAgICAgICB3aGlsZSAoYnl0ZUluZGV4IDwgZW5kQnl0ZSkgewogICAgICAgICAgICAgICAgZGVzdFtkc3RJbmRleCsrXSA9ICgoc3JjW2J5dGVJbmRleCsrXSArIChzcmNbYnl0ZUluZGV4KytdIDw8IDgpKSkgLyAweDdmZmY7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIGxlbmd0aFNhbXBsZXM7CiAgICAgICAgfQogICAgICAgIHN0YXRpYyBjb252ZXJ0RmxvYXRUb0ludDE2KHNyYywgZGVzdCwgc291cmNlSW5kZXggPSAwLCBzb3VyY2VMZW5ndGggPSAtMSwgZHN0SW5kZXggPSAwKSB7CiAgICAgICAgICAgIGlmIChzb3VyY2VMZW5ndGggPCAwKQogICAgICAgICAgICAgICAgc291cmNlTGVuZ3RoID0gc3JjLmxlbmd0aCAtIHNvdXJjZUluZGV4OwogICAgICAgICAgICBjb25zdCBlbmRJbmRleCA9IHNvdXJjZUluZGV4ICsgc291cmNlTGVuZ3RoOwogICAgICAgICAgICB3aGlsZSAoc291cmNlSW5kZXggPCBlbmRJbmRleCkgewogICAgICAgICAgICAgICAgZGVzdFtkc3RJbmRleCsrXSA9IH5+KHNyY1tzb3VyY2VJbmRleCsrXSAqIDB4N2ZmZik7IC8vIFF1aWNrIHRydW5jYXRlLCBubyByb3VuZGluZwogICAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIHN0YXRpYyBlbmVyZ3lUb0RiKGVuZXJneSkgewogICAgICAgICAgICByZXR1cm4gKDEwLjAgKiBNYXRoLmxvZyhlbmVyZ3kpIC8gQXVkaW9Ub29scy5MT0dfMl9QTFVTX0xPR181KTsKICAgICAgICB9CiAgICAgICAgc3RhdGljIGRiVG9FbmVyZ3koZGIpIHsKICAgICAgICAgICAgcmV0dXJuIE1hdGgucG93KDEwLjAsIGRiIC8gMTAuMCk7CiAgICAgICAgfQogICAgfQogICAgQXVkaW9Ub29scy5MT0dfMl9QTFVTX0xPR181ID0gTWF0aC5sb2coMikgKyBNYXRoLmxvZyg1KTsKCiAgICAvKioKICAgICAqIEBpbnRlcm5hbAogICAgICovCiAgICBjbGFzcyBBdWRpb1Byb2Nlc3NvciB7CiAgICAgICAgY29uc3RydWN0b3IoaW5wdXRTYW1wbGVSYXRlLCBvdXRwdXRTYW1wbGVSYXRlLCBmcmFtZU1pbGxpcywgaGlzdG9yeUZyYW1lcykgewogICAgICAgICAgICAvKioKICAgICAgICAgICAgICogU2VuZGluZyBzdGF0ZS4gSWYgdHJ1ZSwgQXVkaW9Qcm9jZXNzb3IgaXMgY3VycmVudGx5IHNlbmRpbmcgYXVkaW8gdmlhIG9uU2VuZEF1ZGlvIGNhbGxiYWNrCiAgICAgICAgICAgICAqLwogICAgICAgICAgICB0aGlzLmlzU2VuZGluZyA9IGZhbHNlOwogICAgICAgICAgICAvKioKICAgICAgICAgICAgICogQ3VycmVudCBjb3VudCBvZiBkb3duc2FtcGxlZCBhbmQgY29udGludW91c2x5IHByb2Nlc3NlZCBzYW1wbGVzICh0aHJ1IFByb2Nlc3NBdWRpbykgZnJvbSBzdGFydCBvZiBzdHJlYW0KICAgICAgICAgICAgICovCiAgICAgICAgICAgIHRoaXMuc3RyZWFtU2FtcGxlUG9zID0gMDsKICAgICAgICAgICAgdGhpcy5zYW1wbGVzU2VudCA9IDA7CiAgICAgICAgICAgIHRoaXMudXR0ZXJhbmNlU2VyaWFsID0gLTE7CiAgICAgICAgICAgIHRoaXMub25TZW5kQXVkaW8gPSAoc2FtcGxlcywgc3RhcnRJbmRleCwgbGVuZ3RoKSA9PiB7IH07CiAgICAgICAgICAgIHRoaXMub25WYWRTdGF0ZUNoYW5nZSA9IChpc1NpZ25hbERldGVjdGVkKSA9PiB7IH07CiAgICAgICAgICAgIHRoaXMuaW5wdXRTYW1wbGVSYXRlID0gMTYwMDA7CiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxTYW1wbGVSYXRlID0gMTYwMDA7CiAgICAgICAgICAgIHRoaXMuaGlzdG9yeUZyYW1lcyA9IDU7CiAgICAgICAgICAgIHRoaXMuZnJhbWVNaWxsaXMgPSAzMDsKICAgICAgICAgICAgdGhpcy5jdXJyZW50RnJhbWVOdW1iZXIgPSAwOwogICAgICAgICAgICB0aGlzLmZyYW1lU2FtcGxlUG9zID0gMDsKICAgICAgICAgICAgdGhpcy5zdHJlYW1GcmFtZVBvcyA9IDA7CiAgICAgICAgICAgIHRoaXMud2FzU2lnbmFsRGV0ZWN0ZWQgPSBmYWxzZTsKICAgICAgICAgICAgdGhpcy5pbnB1dFNhbXBsZVJhdGUgPSBpbnB1dFNhbXBsZVJhdGU7CiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxTYW1wbGVSYXRlID0gb3V0cHV0U2FtcGxlUmF0ZTsKICAgICAgICAgICAgdGhpcy5mcmFtZU1pbGxpcyA9IGZyYW1lTWlsbGlzOwogICAgICAgICAgICB0aGlzLmhpc3RvcnlGcmFtZXMgPSBoaXN0b3J5RnJhbWVzOwogICAgICAgICAgICB0aGlzLmZyYW1lU2FtcGxlcyA9IH5+KHRoaXMuaW50ZXJuYWxTYW1wbGVSYXRlICogdGhpcy5mcmFtZU1pbGxpcyAvIDEwMDApOwogICAgICAgICAgICB0aGlzLnNhbXBsZVJpbmdCdWZmZXIgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuZnJhbWVTYW1wbGVzICogdGhpcy5oaXN0b3J5RnJhbWVzKTsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICogUHJvY2VzcyBzcGVlY2ggYXVkaW8gc2FtcGxlcyBmcm9tIGEgbWljcm9waG9uZSBvciBvdGhlciBhdWRpbyBzb3VyY2UuCiAgICAgICAgICoKICAgICAgICAgKiBZb3UgY2FuIGNvbnRyb2wgd2hlbiB0byBzdGFydCBhbmQgc3RvcCBwcm9jZXNzIHNwZWVjaCBlaXRoZXIgbWFudWFsbHkgd2l0aCA8c2VlIGNyZWY9IlN0YXJ0Q29udGV4dCIvPiBhbmQgPHNlZSBjcmVmPSJTdG9wQ29udGV4dCIvPiBvcgogICAgICAgICAqIGF1dG9tYXRpY2FsbHkgYnkgcHJvdmlkaW5nIGEgdm9pY2UgYWN0aXZpdHkgZGV0ZWN0aW9uIChWQUQpIGZpZWxkIHRvIDxzZWUgY3JlZj0iU3BlZWNobHlDbGllbnQiLz4uCiAgICAgICAgICoKICAgICAgICAgKiBUaGUgYXVkaW8gaXMgaGFuZGxlZCBhcyBmb2xsb3dzOgogICAgICAgICAqIC0gRG93bnNhbXBsZSB0byAxNmtIeiBpZiBuZWVkZWQKICAgICAgICAgKiAtIEFkZCB0byBoaXN0b3J5IHJpbmdidWZmZXIKICAgICAgICAgKiAtIENhbGN1bGF0ZSBlbmVyZ3kgKFZBRCkKICAgICAgICAgKiAtIEF1dG9tYXRpYyBTdGFydC9TdG9wQ29udGV4dCAoVkFEKQogICAgICAgICAqIC0gU2VuZCB1dHRlcmFuY2UgYXVkaW8gdG8gU3BlZWNobHkgU0xVIGRlY29kZXIKICAgICAgICAgKgogICAgICAgICAqIEBwYXJhbSBmbG9hdHMgLSBBcnJheSBvZiBmbG9hdCBjb250YWluaW5nIHNhbXBsZXMgdG8gZmVlZCB0byB0aGUgYXVkaW8gcGlwZWxpbmUuIEVhY2ggc2FtcGxlIG5lZWRzIHRvIGJlIGluIHJhbmdlIC0xZi4uMWYuCiAgICAgICAgICogQHBhcmFtIHN0YXJ0IC0gU3RhcnQgaW5kZXggb2YgYXVkaW8gdG8gcHJvY2VzcyBpbiBzYW1wbGVzIChkZWZhdWx0OiBgMGApLgogICAgICAgICAqIEBwYXJhbSBsZW5ndGggLSBMZW5ndGggb2YgYXVkaW8gdG8gcHJvY2VzcyBpbiBzYW1wbGVzIG9yIGAtMWAgdG8gcHJvY2VzcyB0aGUgd2hvbGUgYXJyYXkgKGRlZmF1bHQ6IGAtMWApLgogICAgICAgICAqIEBwYXJhbSBlb3NfYXRfZW5kIC0gU3RvcFN0cmVhbSBpbnRlcm5hbGx5IHVzZXMgdGhpcyB0byBmb3JjZSBwcm9jZXNzaW5nIG9mIGxhc3Qgc3ViZnJhbWUgYXQgZW5kIG9mIGF1ZGlvIHN0cmVhbSAoZGVmYXVsdDogYGZhbHNlYCkuCiAgICAgICAgICogQHJldHVybnMKICAgICAgICAgKi8KICAgICAgICBwcm9jZXNzQXVkaW8oZmxvYXRzLCBzdGFydCA9IDAsIGxlbmd0aCA9IC0xLCBlb3NfYXRfZW5kID0gZmFsc2UpIHsKICAgICAgICAgICAgaWYgKGxlbmd0aCA8IDApCiAgICAgICAgICAgICAgICBsZW5ndGggPSBmbG9hdHMubGVuZ3RoOwogICAgICAgICAgICBpZiAobGVuZ3RoID09PSAwKSB7CiAgICAgICAgICAgICAgICBpZiAoZW9zX2F0X2VuZCkgewogICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0VvcygpOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgcmV0dXJuOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGxldCBpID0gc3RhcnQ7CiAgICAgICAgICAgIGNvbnN0IGVuZEluZGV4ID0gc3RhcnQgKyBsZW5ndGg7CiAgICAgICAgICAgIHdoaWxlIChpIDwgZW5kSW5kZXgpIHsKICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lQmFzZSA9IHRoaXMuY3VycmVudEZyYW1lTnVtYmVyICogdGhpcy5mcmFtZVNhbXBsZXM7CiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnB1dFNhbXBsZVJhdGUgPT09IHRoaXMuaW50ZXJuYWxTYW1wbGVSYXRlKSB7CiAgICAgICAgICAgICAgICAgICAgLy8gQ29weSBpbnB1dCBzYW1wbGVzIHRvIGZpbGwgY3VycmVudCByaW5nYnVmZmVyIGZyYW1lCiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2FtcGxlc1RvRmlsbEZyYW1lID0gTWF0aC5taW4oZW5kSW5kZXggLSBpLCB0aGlzLmZyYW1lU2FtcGxlcyAtIHRoaXMuZnJhbWVTYW1wbGVQb3MpOwogICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lRW5kSW5kZXggPSB0aGlzLmZyYW1lU2FtcGxlUG9zICsgc2FtcGxlc1RvRmlsbEZyYW1lOwogICAgICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLmZyYW1lU2FtcGxlUG9zIDwgZnJhbWVFbmRJbmRleCkgewogICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNhbXBsZVJpbmdCdWZmZXJbZnJhbWVCYXNlICsgdGhpcy5mcmFtZVNhbXBsZVBvcysrXSA9IGZsb2F0c1tpKytdOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgICAgICAgIC8vIERvd25zYW1wbGUgaW5wdXQgc2FtcGxlcyB0byBmaWxsIGN1cnJlbnQgcmluZ2J1ZmZlciBmcmFtZQogICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhdGlvID0gMS4wICogdGhpcy5pbnB1dFNhbXBsZVJhdGUgLyB0aGlzLmludGVybmFsU2FtcGxlUmF0ZTsKICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFNhbXBsZXNUb0ZpbGxGcmFtZSA9IE1hdGgubWluKGVuZEluZGV4IC0gaSwgTWF0aC5yb3VuZChyYXRpbyAqICh0aGlzLmZyYW1lU2FtcGxlcyAtIHRoaXMuZnJhbWVTYW1wbGVQb3MpKSk7CiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2FtcGxlc1RvRmlsbEZyYW1lID0gTWF0aC5taW4oTWF0aC5yb3VuZCgoZW5kSW5kZXggLSBpKSAvIHJhdGlvKSwgdGhpcy5mcmFtZVNhbXBsZXMgLSB0aGlzLmZyYW1lU2FtcGxlUG9zKTsKICAgICAgICAgICAgICAgICAgICBpZiAoc2FtcGxlc1RvRmlsbEZyYW1lID4gMCkgewogICAgICAgICAgICAgICAgICAgICAgICBBdWRpb1Rvb2xzLmRvd25zYW1wbGUoZmxvYXRzLCB0aGlzLnNhbXBsZVJpbmdCdWZmZXIsIGksIGlucHV0U2FtcGxlc1RvRmlsbEZyYW1lLCBmcmFtZUJhc2UgKyB0aGlzLmZyYW1lU2FtcGxlUG9zLCBzYW1wbGVzVG9GaWxsRnJhbWUpOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICBpICs9IGlucHV0U2FtcGxlc1RvRmlsbEZyYW1lOwogICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVTYW1wbGVQb3MgKz0gc2FtcGxlc1RvRmlsbEZyYW1lOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgY29uc3QgZW9zID0gaSA9PT0gZW5kSW5kZXggJiYgZW9zX2F0X2VuZDsKICAgICAgICAgICAgICAgIC8vIFByb2Nlc3MgZnJhbWUKICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lU2FtcGxlUG9zID09PSB0aGlzLmZyYW1lU2FtcGxlcyB8fCBlb3MpIHsKICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJGcmFtZVNhbXBsZXMgPSBlb3MgPyB0aGlzLmZyYW1lU2FtcGxlUG9zIDogdGhpcy5mcmFtZVNhbXBsZXM7CiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRnJhbWUodGhpcy5zYW1wbGVSaW5nQnVmZmVyLCBmcmFtZUJhc2UsIHN1YkZyYW1lU2FtcGxlcywgZW9zKTsKICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NlbmRpbmcpIHsKICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2FtcGxlc1NlbnQgPT09IDApIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YXJ0IG9mIHRoZSB1dHRlcmFuY2UgLSBzZW5kIGhpc3RvcnkgZnJhbWVzCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZW5kSGlzdG9yeSA9IE1hdGgubWluKHRoaXMuc3RyZWFtRnJhbWVQb3MsIHRoaXMuaGlzdG9yeUZyYW1lcyAtIDEpOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhpc3RvcnlGcmFtZUluZGV4ID0gKHRoaXMuY3VycmVudEZyYW1lTnVtYmVyICsgdGhpcy5oaXN0b3J5RnJhbWVzIC0gc2VuZEhpc3RvcnkpICUgdGhpcy5oaXN0b3J5RnJhbWVzOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGhpc3RvcnlGcmFtZUluZGV4ICE9PSB0aGlzLmN1cnJlbnRGcmFtZU51bWJlcikgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25TZW5kQXVkaW8odGhpcy5zYW1wbGVSaW5nQnVmZmVyLCBoaXN0b3J5RnJhbWVJbmRleCAqIHRoaXMuZnJhbWVTYW1wbGVzLCB0aGlzLmZyYW1lU2FtcGxlcyk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zYW1wbGVzU2VudCArPSB0aGlzLmZyYW1lU2FtcGxlczsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5RnJhbWVJbmRleCA9IChoaXN0b3J5RnJhbWVJbmRleCArIDEpICUgdGhpcy5oaXN0b3J5RnJhbWVzOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25TZW5kQXVkaW8odGhpcy5zYW1wbGVSaW5nQnVmZmVyLCBmcmFtZUJhc2UsIHN1YkZyYW1lU2FtcGxlcyk7CiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2FtcGxlc1NlbnQgKz0gc3ViRnJhbWVTYW1wbGVzOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICBpZiAoZW9zKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RyZWFtU2FtcGxlUG9zICs9IHN1YkZyYW1lU2FtcGxlczsKICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRW9zKCk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZnJhbWVTYW1wbGVQb3MgPT09IHRoaXMuZnJhbWVTYW1wbGVzKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVTYW1wbGVQb3MgPSAwOwogICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0cmVhbUZyYW1lUG9zICs9IDE7CiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RyZWFtU2FtcGxlUG9zICs9IHN1YkZyYW1lU2FtcGxlczsKICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RnJhbWVOdW1iZXIgPSAodGhpcy5jdXJyZW50RnJhbWVOdW1iZXIgKyAxKSAlIHRoaXMuaGlzdG9yeUZyYW1lczsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICBpZiAodGhpcy52YWQpIHsKICAgICAgICAgICAgICAgICAgICB0aGlzLndhc1NpZ25hbERldGVjdGVkID0gdGhpcy52YWQuaXNTaWduYWxEZXRlY3RlZDsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBzZXRTZW5kQXVkaW8oYWN0aXZlKSB7CiAgICAgICAgICAgIHRoaXMuaXNTZW5kaW5nID0gYWN0aXZlOwogICAgICAgICAgICBpZiAoYWN0aXZlKSB7CiAgICAgICAgICAgICAgICB0aGlzLnNhbXBsZXNTZW50ID0gMDsKICAgICAgICAgICAgICAgIHRoaXMudXR0ZXJhbmNlU2VyaWFsKys7CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgcmVzZXQoaW5wdXRTYW1wbGVSYXRlKSB7CiAgICAgICAgICAgIHZhciBfYTsKICAgICAgICAgICAgdGhpcy5pc1NlbmRpbmcgPSBmYWxzZTsKICAgICAgICAgICAgdGhpcy5zdHJlYW1GcmFtZVBvcyA9IDA7CiAgICAgICAgICAgIHRoaXMuc3RyZWFtU2FtcGxlUG9zID0gMDsKICAgICAgICAgICAgdGhpcy5mcmFtZVNhbXBsZVBvcyA9IDA7CiAgICAgICAgICAgIHRoaXMuY3VycmVudEZyYW1lTnVtYmVyID0gMDsKICAgICAgICAgICAgdGhpcy51dHRlcmFuY2VTZXJpYWwgPSAtMTsKICAgICAgICAgICAgaWYgKGlucHV0U2FtcGxlUmF0ZSkKICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRTYW1wbGVSYXRlID0gaW5wdXRTYW1wbGVSYXRlOwogICAgICAgICAgICB0aGlzLndhc1NpZ25hbERldGVjdGVkID0gZmFsc2U7CiAgICAgICAgICAgIChfYSA9IHRoaXMudmFkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVzZXRWQUQoKTsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICogQHJldHVybnMgY3VycmVudCBwb3NpdGlvbiBpbiBzdHJlYW0gaW4gbWlsbGlzZWNvbmRzCiAgICAgICAgICovCiAgICAgICAgZ2V0U3RyZWFtUG9zaXRpb24oKSB7CiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMuc3RyZWFtU2FtcGxlUG9zIC8gdGhpcy5pbnRlcm5hbFNhbXBsZVJhdGUgKiAxMDAwKTsKICAgICAgICB9CiAgICAgICAgZW9zKCkgewogICAgICAgICAgICB0aGlzLnByb2Nlc3NBdWRpbyh0aGlzLnNhbXBsZVJpbmdCdWZmZXIsIDAsIHRoaXMuZnJhbWVTYW1wbGVQb3MsIHRydWUpOwogICAgICAgIH0KICAgICAgICBwcm9jZXNzRnJhbWUoZmxvYXRzLCBzdGFydCA9IDAsIGxlbmd0aCA9IC0xLCBlb3MgPSBmYWxzZSkgewogICAgICAgICAgICB2YXIgX2E7CiAgICAgICAgICAgIGlmICgoX2EgPSB0aGlzLnZhZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnZhZE9wdGlvbnMuZW5hYmxlZCkgewogICAgICAgICAgICAgICAgdGhpcy52YWQucHJvY2Vzc0ZyYW1lKGZsb2F0cywgc3RhcnQsIGxlbmd0aCwgZW9zKTsKICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhZC5pc1NpZ25hbERldGVjdGVkICE9PSB0aGlzLndhc1NpZ25hbERldGVjdGVkKSB7CiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblZhZFN0YXRlQ2hhbmdlKHRoaXMudmFkLmlzU2lnbmFsRGV0ZWN0ZWQpOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIHByb2Nlc3NFb3MoKSB7CiAgICAgICAgICAgIHZhciBfYTsKICAgICAgICAgICAgaWYgKHRoaXMuaXNTZW5kaW5nICYmICgoX2EgPSB0aGlzLnZhZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnZhZE9wdGlvbnMuZW5hYmxlZCkpIHsKICAgICAgICAgICAgICAgIC8vIEVuc3VyZSBWQUQgc3RhdGUgY2hhbmdlIG9uIGVuZC1vZi1zdHJlYW0KICAgICAgICAgICAgICAgIHRoaXMudmFkLnJlc2V0VkFEKCk7CiAgICAgICAgICAgICAgICB0aGlzLm9uVmFkU3RhdGVDaGFuZ2UoZmFsc2UpOwogICAgICAgICAgICB9CiAgICAgICAgfQogICAgfQoKICAgIC8qKgogICAgICogQWRhcHRpdmUgZW5lcmd5IHRocmVzaG9sZCB2b2ljZSBhY3Rpdml0eSBkZXRlY3Rpb24gKFZBRCkgaW1wbGVtZW50YXRpb24uCiAgICAgKiBJdCBjYW4gYmUgdXNlZCB0byBlbmFibGUgaGFuZHMtZnJlZSBvcGVyYXRpb24gb2YgdGhlIFNMVSBkZWNvZGVyLgogICAgICoKICAgICAqIFdoZW4gZW5vdWdoIGZyYW1lcyB3aXRoIGEgc2lnbmFsIHN0cm9uZ2VyIHRoYW4gU2lnbmFsVG9Ob2lzZURiIGhhdmUgYmVlbiBkZXRlY3RlZCwgSXNTaWduYWxEZXRlY3RlZCBnb2VzIHRydWUuIFdoZW4gZW5vdWdoIHNpbGVudCBmcmFtZXMgaGF2ZSBiZWVuIGRldGVjdGVkLCBJc1NpZ25hbERldGVjdGVkIGdvZXMgZmFsc2UgYWZ0ZXIgdGhlIHN1c3RhaW4gdGltZS4KICAgICAqIFVzZSBpdHMgcHVibGljIGZpZWxkcyB0byBjb25maWd1cmUgdGhlIHN0YXRpYyBub2lzZSBnYXRlIGxldmVsLCBzaWduYWwtdG8tbm9pc2UgbGV2ZWwsIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIHRyZXNob2xkIChyYXRpbyBvZiBzaWduYWwgdG8gc2lsZW50IGZyYW1lcykgYW5kIHRoZSBzaWduYWwgc3VzdGFpbiB0aW1lLgogICAgICogVGhlIGJhY2tncm91bmQgbm9pc2UgbGV2ZWwgZ3JhZHVhbGx5IGFkYXB0cyB3aGVuIG5vIHNpZ25hbCBpcyBkZXRlY3RlZC4KICAgICAqCiAgICAgKiBJc1NpZ25hbERldGVjdGVkIGNhbiBiZSB1c2VkIHRvIGRyaXZlIFNwZWVjaGx5Q2xpZW50J3MgU3RhcnRDb250ZXh0IGFuZCBTdG9wQ29udGV4dCBhdXRvbWF0aWNhbGx5IGJ5IHNldHRpbmcgQ29udHJvbExpc3RlbmluZyB0cnVlLgogICAgICogQGludGVybmFsCiAgICAgKi8KICAgIGNsYXNzIEVuZXJneVRyZXNob2xkVkFEIHsKICAgICAgICBjb25zdHJ1Y3RvcihmcmFtZU1pbGxpcywgdmFkT3B0aW9ucykgewogICAgICAgICAgICB0aGlzLmlzU2lnbmFsRGV0ZWN0ZWQgPSBmYWxzZTsKICAgICAgICAgICAgdGhpcy5zaWduYWxEYiA9IC05MC4wOwogICAgICAgICAgICB0aGlzLm5vaXNlTGV2ZWxEYiA9IC05MC4wOwogICAgICAgICAgICB0aGlzLmZyYW1lTWlsbGlzID0gMzA7CiAgICAgICAgICAgIHRoaXMuZW5lcmd5ID0gMC4wOwogICAgICAgICAgICB0aGlzLmJhc2VsaW5lRW5lcmd5ID0gLTEuMDsKICAgICAgICAgICAgdGhpcy5sb3VkRnJhbWVCaXRzID0gMDsKICAgICAgICAgICAgdGhpcy52YWRTdXN0YWluTWlsbGlzTGVmdCA9IDA7CiAgICAgICAgICAgIHRoaXMuZnJhbWVNaWxsaXMgPSBmcmFtZU1pbGxpczsKICAgICAgICAgICAgdGhpcy52YWRPcHRpb25zID0gdmFkT3B0aW9uczsKICAgICAgICB9CiAgICAgICAgYWRqdXN0VmFkT3B0aW9ucyh2YWRPcHRpb25zKSB7CiAgICAgICAgICAgIHRoaXMudmFkT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy52YWRPcHRpb25zKSwgdmFkT3B0aW9ucyk7CiAgICAgICAgfQogICAgICAgIHJlc2V0VkFEKCkgewogICAgICAgICAgICB0aGlzLmlzU2lnbmFsRGV0ZWN0ZWQgPSBmYWxzZTsKICAgICAgICAgICAgdGhpcy5sb3VkRnJhbWVCaXRzID0gMDsKICAgICAgICAgICAgdGhpcy5lbmVyZ3kgPSAwOwogICAgICAgICAgICB0aGlzLmJhc2VsaW5lRW5lcmd5ID0gLTE7CiAgICAgICAgfQogICAgICAgIHByb2Nlc3NGcmFtZShmbG9hdHMsIHN0YXJ0ID0gMCwgbGVuZ3RoID0gLTEsIGVvcyA9IGZhbHNlKSB7CiAgICAgICAgICAgIGlmICghdGhpcy52YWRPcHRpb25zLmVuYWJsZWQpIHsKICAgICAgICAgICAgICAgIHRoaXMucmVzZXRWQUQoKTsKICAgICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgICAgfQogICAgICAgICAgICBpZiAoZW9zKQogICAgICAgICAgICAgICAgcmV0dXJuOwogICAgICAgICAgICB0aGlzLmVuZXJneSA9IEF1ZGlvVG9vbHMuZ2V0RW5lcmd5KGZsb2F0cywgc3RhcnQsIGxlbmd0aCk7CiAgICAgICAgICAgIGlmICh0aGlzLmJhc2VsaW5lRW5lcmd5IDwgMCkgewogICAgICAgICAgICAgICAgdGhpcy5iYXNlbGluZUVuZXJneSA9IHRoaXMuZW5lcmd5OwogICAgICAgICAgICB9CiAgICAgICAgICAgIGNvbnN0IGlzTG91ZEZyYW1lID0gdGhpcy5lbmVyZ3kgPiBNYXRoLm1heChBdWRpb1Rvb2xzLmRiVG9FbmVyZ3kodGhpcy52YWRPcHRpb25zLm5vaXNlR2F0ZURiKSwgdGhpcy5iYXNlbGluZUVuZXJneSAqIEF1ZGlvVG9vbHMuZGJUb0VuZXJneSh0aGlzLnZhZE9wdGlvbnMuc2lnbmFsVG9Ob2lzZURiKSk7CiAgICAgICAgICAgIHRoaXMucHVzaEZyYW1lSGlzdG9yeShpc0xvdWRGcmFtZSk7CiAgICAgICAgICAgIHRoaXMuaXNTaWduYWxEZXRlY3RlZCA9IHRoaXMuZGV0ZXJtaW5lTmV3U2lnbmFsU3RhdGUodGhpcy5pc1NpZ25hbERldGVjdGVkKTsKICAgICAgICAgICAgdGhpcy5hZGFwdEJhY2tncm91bmROb2lzZSgpOwogICAgICAgICAgICB0aGlzLnNpZ25hbERiID0gQXVkaW9Ub29scy5lbmVyZ3lUb0RiKHRoaXMuZW5lcmd5IC8gdGhpcy5iYXNlbGluZUVuZXJneSk7CiAgICAgICAgICAgIHRoaXMubm9pc2VMZXZlbERiID0gQXVkaW9Ub29scy5lbmVyZ3lUb0RiKHRoaXMuYmFzZWxpbmVFbmVyZ3kpOwogICAgICAgIH0KICAgICAgICBkZXRlcm1pbmVOZXdTaWduYWxTdGF0ZShjdXJyZW50U3RhdGUpIHsKICAgICAgICAgICAgdGhpcy52YWRTdXN0YWluTWlsbGlzTGVmdCA9IE1hdGgubWF4KHRoaXMudmFkU3VzdGFpbk1pbGxpc0xlZnQgLSB0aGlzLmZyYW1lTWlsbGlzLCAwKTsKICAgICAgICAgICAgY29uc3QgbG91ZEZyYW1lcyA9IHRoaXMuY291bnRMb3VkRnJhbWVzKHRoaXMudmFkT3B0aW9ucy5zaWduYWxTZWFyY2hGcmFtZXMpOwogICAgICAgICAgICBjb25zdCBhY3RpdmF0aW9uRnJhbWVzID0gTWF0aC5yb3VuZCh0aGlzLnZhZE9wdGlvbnMuc2lnbmFsQWN0aXZhdGlvbiAqIHRoaXMudmFkT3B0aW9ucy5zaWduYWxTZWFyY2hGcmFtZXMpOwogICAgICAgICAgICBjb25zdCByZWxlYXNlRnJhbWVzID0gTWF0aC5yb3VuZCh0aGlzLnZhZE9wdGlvbnMuc2lnbmFsUmVsZWFzZSAqIHRoaXMudmFkT3B0aW9ucy5zaWduYWxTZWFyY2hGcmFtZXMpOwogICAgICAgICAgICBpZiAobG91ZEZyYW1lcyA+PSBhY3RpdmF0aW9uRnJhbWVzKSB7CiAgICAgICAgICAgICAgICAvLyBSZW5ldyBzdXN0YWluIHRpbWUKICAgICAgICAgICAgICAgIHRoaXMudmFkU3VzdGFpbk1pbGxpc0xlZnQgPSB0aGlzLnZhZE9wdGlvbnMuc2lnbmFsU3VzdGFpbk1pbGxpczsKICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGlmIChsb3VkRnJhbWVzIDw9IHJlbGVhc2VGcmFtZXMgJiYgdGhpcy52YWRTdXN0YWluTWlsbGlzTGVmdCA9PT0gMCkgewogICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiBjdXJyZW50U3RhdGU7CiAgICAgICAgfQogICAgICAgIGFkYXB0QmFja2dyb3VuZE5vaXNlKCkgewogICAgICAgICAgICAvLyBHcmFkdWFsbHkgbGVhcm4gYmFja2dyb3VuZCBub2lzZSBsZXZlbAogICAgICAgICAgICBpZiAoIXRoaXMuaXNTaWduYWxEZXRlY3RlZCkgewogICAgICAgICAgICAgICAgaWYgKHRoaXMudmFkT3B0aW9ucy5ub2lzZUxlYXJuSGFsZnRpbWVNaWxsaXMgPiAwKSB7CiAgICAgICAgICAgICAgICAgICAgdmFyIGRlY2F5ID0gTWF0aC5wb3coMi4wLCAtdGhpcy5mcmFtZU1pbGxpcyAvIHRoaXMudmFkT3B0aW9ucy5ub2lzZUxlYXJuSGFsZnRpbWVNaWxsaXMpOwogICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZWxpbmVFbmVyZ3kgPSAodGhpcy5iYXNlbGluZUVuZXJneSAqIGRlY2F5KSArICh0aGlzLmVuZXJneSAqICgxIC0gZGVjYXkpKTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBwdXNoRnJhbWVIaXN0b3J5KGlzTG91ZCkgewogICAgICAgICAgICB0aGlzLmxvdWRGcmFtZUJpdHMgPSAoaXNMb3VkID8gMSA6IDApIHwgKHRoaXMubG91ZEZyYW1lQml0cyA8PCAxKTsKICAgICAgICB9CiAgICAgICAgY291bnRMb3VkRnJhbWVzKG51bUhpc3RvcnlGcmFtZXMpIHsKICAgICAgICAgICAgbGV0IG51bUFjdGl2ZUZyYW1lcyA9IDA7CiAgICAgICAgICAgIGxldCB0ID0gdGhpcy5sb3VkRnJhbWVCaXRzOwogICAgICAgICAgICB3aGlsZSAobnVtSGlzdG9yeUZyYW1lcyA+IDApIHsKICAgICAgICAgICAgICAgIGlmICgodCAmIDEpID09PSAxKQogICAgICAgICAgICAgICAgICAgIG51bUFjdGl2ZUZyYW1lcysrOwogICAgICAgICAgICAgICAgdCA9IHQgPj4gMTsKICAgICAgICAgICAgICAgIG51bUhpc3RvcnlGcmFtZXMtLTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gbnVtQWN0aXZlRnJhbWVzOwogICAgICAgIH0KICAgIH0KCiAgICAvKioKICAgICAqIEtub3duIFdlYlNvY2tldCByZXNwb25zZSB0eXBlcy4KICAgICAqIEBpbnRlcm5hbAogICAgICovCiAgICB2YXIgV2Vic29ja2V0UmVzcG9uc2VUeXBlOwogICAgKGZ1bmN0aW9uIChXZWJzb2NrZXRSZXNwb25zZVR5cGUpIHsKICAgICAgICBXZWJzb2NrZXRSZXNwb25zZVR5cGVbIlN0YXJ0ZWQiXSA9ICJzdGFydGVkIjsKICAgICAgICBXZWJzb2NrZXRSZXNwb25zZVR5cGVbIlN0b3BwZWQiXSA9ICJzdG9wcGVkIjsKICAgICAgICBXZWJzb2NrZXRSZXNwb25zZVR5cGVbIlNlZ21lbnRFbmQiXSA9ICJzZWdtZW50X2VuZCI7CiAgICAgICAgV2Vic29ja2V0UmVzcG9uc2VUeXBlWyJUcmFuc2NyaXB0Il0gPSAidHJhbnNjcmlwdCI7CiAgICAgICAgV2Vic29ja2V0UmVzcG9uc2VUeXBlWyJFbnRpdHkiXSA9ICJlbnRpdHkiOwogICAgICAgIFdlYnNvY2tldFJlc3BvbnNlVHlwZVsiSW50ZW50Il0gPSAiaW50ZW50IjsKICAgICAgICBXZWJzb2NrZXRSZXNwb25zZVR5cGVbIlRlbnRhdGl2ZVRyYW5zY3JpcHQiXSA9ICJ0ZW50YXRpdmVfdHJhbnNjcmlwdCI7CiAgICAgICAgV2Vic29ja2V0UmVzcG9uc2VUeXBlWyJUZW50YXRpdmVFbnRpdGllcyJdID0gInRlbnRhdGl2ZV9lbnRpdGllcyI7CiAgICAgICAgV2Vic29ja2V0UmVzcG9uc2VUeXBlWyJUZW50YXRpdmVJbnRlbnQiXSA9ICJ0ZW50YXRpdmVfaW50ZW50IjsKICAgIH0pKFdlYnNvY2tldFJlc3BvbnNlVHlwZSB8fCAoV2Vic29ja2V0UmVzcG9uc2VUeXBlID0ge30pKTsKICAgIC8qKgogICAgICogTWVzc2FnZXMgZnJvbSB3b3JrZXIgdG8gY29udHJvbGxlcgogICAgICogQGludGVybmFsCiAgICAgKi8KICAgIHZhciBXb3JrZXJTaWduYWw7CiAgICAoZnVuY3Rpb24gKFdvcmtlclNpZ25hbCkgewogICAgICAgIFdvcmtlclNpZ25hbFsiT3BlbmVkIl0gPSAiV0VCU09DS0VUX09QRU4iOwogICAgICAgIFdvcmtlclNpZ25hbFsiQ2xvc2VkIl0gPSAiV0VCU09DS0VUX0NMT1NFRCI7CiAgICAgICAgV29ya2VyU2lnbmFsWyJBdWRpb1Byb2Nlc3NvclJlYWR5Il0gPSAiU09VUkNFX1NBTVBMRV9SQVRFX1NFVF9TVUNDRVNTIjsKICAgICAgICBXb3JrZXJTaWduYWxbIlZhZFNpZ25hbEhpZ2giXSA9ICJWYWRTaWduYWxIaWdoIjsKICAgICAgICBXb3JrZXJTaWduYWxbIlZhZFNpZ25hbExvdyJdID0gIlZhZFNpZ25hbExvdyI7CiAgICAgICAgV29ya2VyU2lnbmFsWyJSZXF1ZXN0Q29udGV4dFN0YXJ0Il0gPSAiUmVxdWVzdENvbnRleHRTdGFydCI7CiAgICB9KShXb3JrZXJTaWduYWwgfHwgKFdvcmtlclNpZ25hbCA9IHt9KSk7CiAgICAvKioKICAgICAqIE1lc3NhZ2VzIGZyb20gY29udHJvbGxlciB0byB3b3JrZXIKICAgICAqIEBpbnRlcm5hbAogICAgICovCiAgICB2YXIgQ29udHJvbGxlclNpZ25hbDsKICAgIChmdW5jdGlvbiAoQ29udHJvbGxlclNpZ25hbCkgewogICAgICAgIENvbnRyb2xsZXJTaWduYWxbImNvbm5lY3QiXSA9ICJjb25uZWN0IjsKICAgICAgICBDb250cm9sbGVyU2lnbmFsWyJpbml0QXVkaW9Qcm9jZXNzb3IiXSA9ICJpbml0QXVkaW9Qcm9jZXNzb3IiOwogICAgICAgIENvbnRyb2xsZXJTaWduYWxbImFkanVzdEF1ZGlvUHJvY2Vzc29yIl0gPSAiYWRqdXN0QXVkaW9Qcm9jZXNzb3IiOwogICAgICAgIENvbnRyb2xsZXJTaWduYWxbIlNFVF9TSEFSRURfQVJSQVlfQlVGRkVSUyJdID0gIlNFVF9TSEFSRURfQVJSQVlfQlVGRkVSUyI7CiAgICAgICAgQ29udHJvbGxlclNpZ25hbFsiQ0xPU0UiXSA9ICJDTE9TRSI7CiAgICAgICAgQ29udHJvbGxlclNpZ25hbFsiU1RBUlRfQ09OVEVYVCJdID0gIlNUQVJUX0NPTlRFWFQiOwogICAgICAgIENvbnRyb2xsZXJTaWduYWxbIlNXSVRDSF9DT05URVhUIl0gPSAiU1dJVENIX0NPTlRFWFQiOwogICAgICAgIENvbnRyb2xsZXJTaWduYWxbIlNUT1BfQ09OVEVYVCJdID0gIlNUT1BfQ09OVEVYVCI7CiAgICAgICAgQ29udHJvbGxlclNpZ25hbFsiQVVESU8iXSA9ICJBVURJTyI7CiAgICAgICAgQ29udHJvbGxlclNpZ25hbFsic3RhcnRTdHJlYW0iXSA9ICJzdGFydFN0cmVhbSI7CiAgICAgICAgQ29udHJvbGxlclNpZ25hbFsic3RvcFN0cmVhbSJdID0gInN0b3BTdHJlYW0iOwogICAgICAgIENvbnRyb2xsZXJTaWduYWxbInNldENvbnRleHRPcHRpb25zIl0gPSAic2V0Q29udGV4dE9wdGlvbnMiOwogICAgfSkoQ29udHJvbGxlclNpZ25hbCB8fCAoQ29udHJvbGxlclNpZ25hbCA9IHt9KSk7CgogICAgY29uc3QgQ09OVFJPTCA9IHsKICAgICAgICBXUklURV9JTkRFWDogMCwKICAgICAgICBGUkFNRVNfQVZBSUxBQkxFOiAxLAogICAgICAgIExPQ0s6IDIsCiAgICB9OwogICAgLyoqCiAgICAgKiBXZWIgd29ya2VyIHRvIGhhbmRsZSBzdHJlYW1pbmcgYXVkaW8gdG8gY2xvdWQgYW5kIHJlY2VpdmluZyBzcGVlY2ggcHJvY2Vzc2luZyByZXN1bHRzLgogICAgICogQWxzbyBoYW5kbGVzIGF1ZGlvIHByb2Nlc3NpbmcgbGlrZSBtYWludGFpbmluZyBoaXN0b3J5IHJpbmdidWZmZXIgYW5kIHJ1bm5pbmcgdGhlIFZBRAogICAgICogQGludGVybmFsCiAgICAgKi8KICAgIGNsYXNzIFdlYnNvY2tldENsaWVudCB7CiAgICAgICAgY29uc3RydWN0b3IoY3R4KSB7CiAgICAgICAgICAgIHRoaXMudGFyZ2V0U2FtcGxlUmF0ZSA9IDE2MDAwOwogICAgICAgICAgICB0aGlzLmlzQ29udGV4dFN0YXJ0ZWQgPSBmYWxzZTsKICAgICAgICAgICAgdGhpcy5hdWRpb0NvbnRleHRTdGFydFRpbWVzID0gW107CiAgICAgICAgICAgIHRoaXMuaW1tZWRpYXRlTW9kZSA9IGZhbHNlOwogICAgICAgICAgICB0aGlzLmZyYW1lTWlsbGlzID0gMzA7CiAgICAgICAgICAgIHRoaXMub3V0cHV0QXVkaW9GcmFtZSA9IG5ldyBJbnQxNkFycmF5KHRoaXMuZnJhbWVNaWxsaXMgKiB0aGlzLnRhcmdldFNhbXBsZVJhdGUgLyAxMDAwKTsKICAgICAgICAgICAgdGhpcy5kZWJ1ZyA9IGZhbHNlOwogICAgICAgICAgICAvLyBXZWJTb2NrZXQncyBjbG9zZSBoYW5kbGVyLCBjYWxsZWQgd2hlbiBlbmNvdW50ZXJpbmcgYSBub24gdXNlci1pbml0aWF0ZWQgY2xvc2UsIGUuZy4KICAgICAgICAgICAgLy8gLSBuZXR3b3JrIHVucmVhY2hhYmxlIG9yIHVuYWJsZSB0byAocmUpY29ubmVjdCAoY29kZSAxMDA2KQogICAgICAgICAgICAvLyBMaXN0IG9mIENsb3NlRXZlbnQuY29kZSB2YWx1ZXM6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DbG9zZUV2ZW50L2NvZGUKICAgICAgICAgICAgdGhpcy5vbldlYnNvY2tldENsb3NlID0gKGV2ZW50KSA9PiB7CiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZWJ1ZykgewogICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbV2ViU29ja2V0Q2xpZW50XScsICdvbldlYnNvY2tldENsb3NlJyk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlV2Vic29ja2V0KGV2ZW50LmNvZGUsIGV2ZW50LnJlYXNvbiwgZXZlbnQud2FzQ2xlYW4sIGZhbHNlKTsKICAgICAgICAgICAgfTsKICAgICAgICAgICAgdGhpcy5vbldlYnNvY2tldE9wZW4gPSAoX2V2ZW50KSA9PiB7CiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZWJ1ZykgewogICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbV2ViU29ja2V0Q2xpZW50XScsICd3ZWJzb2NrZXQgb3BlbmVkJyk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB0aGlzLndvcmtlckN0eC5wb3N0TWVzc2FnZSh7IHR5cGU6IFdvcmtlclNpZ25hbC5PcGVuZWQgfSk7CiAgICAgICAgICAgIH07CiAgICAgICAgICAgIHRoaXMub25XZWJzb2NrZXRFcnJvciA9IChfZXZlbnQpID0+IHsKICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlYnVnKSB7CiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tXZWJTb2NrZXRDbGllbnRdJywgJ3dlYnNvY2tldCBlcnJvcicpOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9OwogICAgICAgICAgICB0aGlzLm9uV2Vic29ja2V0TWVzc2FnZSA9IChldmVudCkgPT4gewogICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlOwogICAgICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICBjYXRjaCAoZSkgewogICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tXZWJTb2NrZXRDbGllbnRdJywgJ2Vycm9yIHBhcnNpbmcgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyOicsIGUpOwogICAgICAgICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS50eXBlID09PSBXZWJzb2NrZXRSZXNwb25zZVR5cGUuU3RhcnRlZCkgewogICAgICAgICAgICAgICAgICAgIC8vIEFwcGVuZCBjbGllbnQtc2lkZSBtZXRhZGF0YSB0byB0aGUgYmFja2VuZCBtZXNzYWdlCiAgICAgICAgICAgICAgICAgICAgbGV0IGF1ZGlvQ29udGV4dFN0YXJ0VGltZSA9IHRoaXMuYXVkaW9Db250ZXh0U3RhcnRUaW1lcy5zaGlmdCgpOwogICAgICAgICAgICAgICAgICAgIGlmIChhdWRpb0NvbnRleHRTdGFydFRpbWUgPT09IHVuZGVmaW5lZCkgewogICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ05vIHZhbGlkIHZhbHVlIGZvciBjb250ZXh0U3RhcnRNaWxsaXMnKTsKICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW9Db250ZXh0U3RhcnRUaW1lID0gMDsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRDb250ZXh0UGFyYW1zID0gewogICAgICAgICAgICAgICAgICAgICAgICBhdWRpb1N0YXJ0VGltZU1pbGxpczogYXVkaW9Db250ZXh0U3RhcnRUaW1lLAogICAgICAgICAgICAgICAgICAgIH07CiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UucGFyYW1zID0gc3RhcnRDb250ZXh0UGFyYW1zOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgdGhpcy53b3JrZXJDdHgucG9zdE1lc3NhZ2UocmVzcG9uc2UpOwogICAgICAgICAgICB9OwogICAgICAgICAgICB0aGlzLndvcmtlckN0eCA9IGN0eDsKICAgICAgICB9CiAgICAgICAgY29ubmVjdChhcGlVcmwsIGF1dGhUb2tlbiwgdGFyZ2V0U2FtcGxlUmF0ZSwgZGVidWcpIHsKICAgICAgICAgICAgdGhpcy5kZWJ1ZyA9IGRlYnVnOwogICAgICAgICAgICBpZiAodGhpcy5kZWJ1ZykgewogICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tXZWJTb2NrZXRDbGllbnRdJywgJ2Nvbm5lY3RpbmcgdG8gJywgYXBpVXJsKTsKICAgICAgICAgICAgfQogICAgICAgICAgICB0aGlzLnRhcmdldFNhbXBsZVJhdGUgPSB0YXJnZXRTYW1wbGVSYXRlOwogICAgICAgICAgICB0aGlzLmlzQ29udGV4dFN0YXJ0ZWQgPSBmYWxzZTsKICAgICAgICAgICAgdGhpcy53ZWJzb2NrZXQgPSBuZXcgV2ViU29ja2V0KGFwaVVybCwgYXV0aFRva2VuKTsKICAgICAgICAgICAgdGhpcy53ZWJzb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsIHRoaXMub25XZWJzb2NrZXRPcGVuKTsKICAgICAgICAgICAgdGhpcy53ZWJzb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMub25XZWJzb2NrZXRNZXNzYWdlKTsKICAgICAgICAgICAgdGhpcy53ZWJzb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLm9uV2Vic29ja2V0RXJyb3IpOwogICAgICAgICAgICB0aGlzLndlYnNvY2tldC5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMub25XZWJzb2NrZXRDbG9zZSk7CiAgICAgICAgfQogICAgICAgIGluaXRBdWRpb1Byb2Nlc3Nvcihzb3VyY2VTYW1wbGVSYXRlLCBmcmFtZU1pbGxpcywgaGlzdG9yeUZyYW1lcywgdmFkT3B0aW9ucykgewogICAgICAgICAgICB0aGlzLmF1ZGlvUHJvY2Vzc29yID0gbmV3IEF1ZGlvUHJvY2Vzc29yKHNvdXJjZVNhbXBsZVJhdGUsIHRoaXMudGFyZ2V0U2FtcGxlUmF0ZSwgZnJhbWVNaWxsaXMsIGhpc3RvcnlGcmFtZXMpOwogICAgICAgICAgICBpZiAodmFkT3B0aW9ucykgewogICAgICAgICAgICAgICAgdGhpcy5hdWRpb1Byb2Nlc3Nvci52YWQgPSBuZXcgRW5lcmd5VHJlc2hvbGRWQUQoZnJhbWVNaWxsaXMsIHZhZE9wdGlvbnMpOwogICAgICAgICAgICAgICAgdGhpcy5hdWRpb1Byb2Nlc3Nvci5vblZhZFN0YXRlQ2hhbmdlID0gKGlzU2lnbmFsRGV0ZWN0ZWQpID0+IHsKICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iOwogICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWRPcHRpb25zID0gKF9iID0gKF9hID0gdGhpcy5hdWRpb1Byb2Nlc3NvcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnZhZCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnZhZE9wdGlvbnM7CiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50VmFkT3B0aW9ucykKICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuOwogICAgICAgICAgICAgICAgICAgIGlmIChpc1NpZ25hbERldGVjdGVkKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pbW1lZGlhdGVNb2RlKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmtlckN0eC5wb3N0TWVzc2FnZSh7IHR5cGU6IFdvcmtlclNpZ25hbC5WYWRTaWduYWxIaWdoIH0pOwogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnRWYWRPcHRpb25zLmNvbnRyb2xMaXN0ZW5pbmcpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRDb250ZXh0KHRoaXMuZGVmYXVsdENvbnRleHRPcHRpb25zKTsKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICBpZiAoIWlzU2lnbmFsRGV0ZWN0ZWQpIHsKICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmltbWVkaWF0ZU1vZGUpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud29ya2VyQ3R4LnBvc3RNZXNzYWdlKHsgdHlwZTogV29ya2VyU2lnbmFsLlZhZFNpZ25hbExvdyB9KTsKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjdXJyZW50VmFkT3B0aW9ucy5jb250cm9sTGlzdGVuaW5nKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BDb250ZXh0KCk7CiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9OwogICAgICAgICAgICB9CiAgICAgICAgICAgIHRoaXMuYXVkaW9Qcm9jZXNzb3Iub25TZW5kQXVkaW8gPSAoZmxvYXRzLCBzdGFydEluZGV4LCBsZW5ndGgpID0+IHsKICAgICAgICAgICAgICAgIEF1ZGlvVG9vbHMuY29udmVydEZsb2F0VG9JbnQxNihmbG9hdHMsIHRoaXMub3V0cHV0QXVkaW9GcmFtZSwgc3RhcnRJbmRleCwgbGVuZ3RoKTsKICAgICAgICAgICAgICAgIHRoaXMuc2VuZCh0aGlzLm91dHB1dEF1ZGlvRnJhbWUpOwogICAgICAgICAgICB9OwogICAgICAgICAgICBpZiAodGhpcy53b3JrZXJDdHggPT09IHVuZGVmaW5lZCkKICAgICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgICAgdGhpcy53b3JrZXJDdHgucG9zdE1lc3NhZ2UoeyB0eXBlOiBXb3JrZXJTaWduYWwuQXVkaW9Qcm9jZXNzb3JSZWFkeSB9KTsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICogQ29udHJvbCBhdWRpbyBwcm9jZXNzb3IgcGFyYW1ldGVycwogICAgICAgICAqIEBwYXJhbSBhcCAtIEF1ZGlvIHByb2Nlc3NvciBwYXJhbWV0ZXJzIHRvIGFkanVzdAogICAgICAgICAqLwogICAgICAgIGFkanVzdEF1ZGlvUHJvY2Vzc29yKGFwKSB7CiAgICAgICAgICAgIGlmICh0aGlzLmF1ZGlvUHJvY2Vzc29yICYmIGFwLnZhZCkgewogICAgICAgICAgICAgICAgaWYgKCF0aGlzLmF1ZGlvUHJvY2Vzc29yLnZhZCkgewogICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gVkFEIGluIEF1ZGlvUHJvY2Vzc29yLiBEaWQgeW91IGRlZmluZSBgdmFkYCBpbiBCcm93c2VyQ2xpZW50IGNvbnN0cnVjdG9yIHBhcmFtZXRlcnM/Jyk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvUHJvY2Vzc29yLnZhZC5hZGp1c3RWYWRPcHRpb25zKGFwLnZhZCk7CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgc2V0U2hhcmVkQXJyYXlCdWZmZXJzKGNvbnRyb2xTQUIsIGRhdGFTQUIpIHsKICAgICAgICAgICAgdGhpcy5jb250cm9sU0FCID0gbmV3IEludDMyQXJyYXkoY29udHJvbFNBQik7CiAgICAgICAgICAgIHRoaXMuZGF0YVNBQiA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YVNBQik7CiAgICAgICAgICAgIGNvbnN0IGF1ZGlvSGFuZGxlSW50ZXJ2YWwgPSB0aGlzLmRhdGFTQUIubGVuZ3RoIC8gMzI7IC8vIG1zCiAgICAgICAgICAgIGlmICh0aGlzLmRlYnVnKSB7CiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW1dlYlNvY2tldENsaWVudF0nLCAnQXVkaW8gaGFuZGxlIGludGVydmFsJywgYXVkaW9IYW5kbGVJbnRlcnZhbCwgJ21zJyk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgc2V0SW50ZXJ2YWwodGhpcy5wcm9jZXNzQXVkaW9TQUIuYmluZCh0aGlzKSwgYXVkaW9IYW5kbGVJbnRlcnZhbCk7CiAgICAgICAgfQogICAgICAgIHN0YXJ0U3RyZWFtKHN0cmVhbU9wdGlvbnMpIHsKICAgICAgICAgICAgaWYgKCF0aGlzLmF1ZGlvUHJvY2Vzc29yKSB7CiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIEF1ZGlvUHJvY2Vzc29yJyk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgdGhpcy5pbW1lZGlhdGVNb2RlID0gc3RyZWFtT3B0aW9ucy5pbW1lZGlhdGU7CiAgICAgICAgICAgIHRoaXMuYXVkaW9Qcm9jZXNzb3IucmVzZXQoc3RyZWFtT3B0aW9ucy5zYW1wbGVSYXRlKTsKICAgICAgICAgICAgdGhpcy5hdWRpb0NvbnRleHRTdGFydFRpbWVzID0gW107CiAgICAgICAgfQogICAgICAgIHN0b3BTdHJlYW0oKSB7CiAgICAgICAgICAgIGlmICghdGhpcy5hdWRpb1Byb2Nlc3NvcikgewogICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBBdWRpb1Byb2Nlc3NvcicpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIC8vIFNlbmQgRU9TLiBFbnN1cmUgVkFEIHdpbGwgZ28gb2ZmIGF0IGVuZCBvZiBzdHJlYW0gYW5kIHN0b3BDb250ZXh0IGlzIGNhbGxlZCBpbiBpbW1lZGlhdGUgbW9kZQogICAgICAgICAgICB0aGlzLmF1ZGlvUHJvY2Vzc29yLmVvcygpOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiBQcm9jZXNzZXMgYW5kIHNlbmRzIGF1ZGlvCiAgICAgICAgICogQHBhcmFtIGF1ZGlvQ2h1bmsgLSBhdWRpbyBkYXRhIHRvIHByb2Nlc3MKICAgICAgICAgKi8KICAgICAgICBwcm9jZXNzQXVkaW8oYXVkaW9DaHVuaykgewogICAgICAgICAgICBpZiAoIXRoaXMuYXVkaW9Qcm9jZXNzb3IpIHsKICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gQXVkaW9Qcm9jZXNzb3InKTsKICAgICAgICAgICAgfQogICAgICAgICAgICB0aGlzLmF1ZGlvUHJvY2Vzc29yLnByb2Nlc3NBdWRpbyhhdWRpb0NodW5rKTsKICAgICAgICB9CiAgICAgICAgcHJvY2Vzc0F1ZGlvU0FCKCkgewogICAgICAgICAgICBpZiAoIXRoaXMuY29udHJvbFNBQiB8fCAhdGhpcy5kYXRhU0FCKSB7CiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIFNoYXJlZEFycmF5QnVmZmVycycpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGNvbnN0IGZyYW1lc0F2YWlsYWJsZSA9IHRoaXMuY29udHJvbFNBQltDT05UUk9MLkZSQU1FU19BVkFJTEFCTEVdOwogICAgICAgICAgICBjb25zdCBsb2NrID0gdGhpcy5jb250cm9sU0FCW0NPTlRST0wuTE9DS107CiAgICAgICAgICAgIGlmIChsb2NrID09PSAwICYmIGZyYW1lc0F2YWlsYWJsZSA+IDApIHsKICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGFTQUIuc3ViYXJyYXkoMCwgZnJhbWVzQXZhaWxhYmxlKTsKICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbFNBQltDT05UUk9MLkZSQU1FU19BVkFJTEFCTEVdID0gMDsKICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbFNBQltDT05UUk9MLldSSVRFX0lOREVYXSA9IDA7CiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7CiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzQXVkaW8oZGF0YSk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgc3RhcnRDb250ZXh0KGNvbnRleHRPcHRpb25zKSB7CiAgICAgICAgICAgIHZhciBfYTsKICAgICAgICAgICAgaWYgKCF0aGlzLmF1ZGlvUHJvY2Vzc29yKSB7CiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignTm8gQXVkaW9Qcm9jZXNzb3InKTsKICAgICAgICAgICAgfQogICAgICAgICAgICBpZiAodGhpcy5pc0NvbnRleHRTdGFydGVkKSB7CiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbV2ViU29ja2V0Q2xpZW50XScsICJjYW4ndCBzdGFydCBjb250ZXh0OiBhY3RpdmUgY29udGV4dCBleGlzdHMiKTsKICAgICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgICAgfQogICAgICAgICAgICB0aGlzLmF1ZGlvUHJvY2Vzc29yLnNldFNlbmRBdWRpbyh0cnVlKTsKICAgICAgICAgICAgdGhpcy5pc0NvbnRleHRTdGFydGVkID0gdHJ1ZTsKICAgICAgICAgICAgdGhpcy5hdWRpb0NvbnRleHRTdGFydFRpbWVzLnB1c2godGhpcy5hdWRpb1Byb2Nlc3Nvci5nZXRTdHJlYW1Qb3NpdGlvbigpKTsKICAgICAgICAgICAgdGhpcy53b3JrZXJDdHgucG9zdE1lc3NhZ2UoeyB0eXBlOiBXb3JrZXJTaWduYWwuUmVxdWVzdENvbnRleHRTdGFydCB9KTsKICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSAoX2EgPSB0aGlzLmRlZmF1bHRDb250ZXh0T3B0aW9ucykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDoge307CiAgICAgICAgICAgIGlmIChjb250ZXh0T3B0aW9ucyAhPT0gdW5kZWZpbmVkKSB7CiAgICAgICAgICAgICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKSwgY29udGV4dE9wdGlvbnMpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBjb250ZXh0T3B0aW9uc1RvTXNnKG9wdGlvbnMpOwogICAgICAgICAgICBtZXNzYWdlLmV2ZW50ID0gJ3N0YXJ0JzsKICAgICAgICAgICAgdGhpcy5zZW5kKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTsKICAgICAgICB9CiAgICAgICAgc3RvcENvbnRleHQoKSB7CiAgICAgICAgICAgIGlmICghdGhpcy5hdWRpb1Byb2Nlc3NvcikgewogICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ05vIEF1ZGlvUHJvY2Vzc29yJyk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ29udGV4dFN0YXJ0ZWQpIHsKICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tXZWJTb2NrZXRDbGllbnRdJywgImNhbid0IHN0b3AgY29udGV4dDogbm8gYWN0aXZlIGNvbnRleHQiKTsKICAgICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgICAgfQogICAgICAgICAgICB0aGlzLmF1ZGlvUHJvY2Vzc29yLnNldFNlbmRBdWRpbyhmYWxzZSk7CiAgICAgICAgICAgIHRoaXMuaXNDb250ZXh0U3RhcnRlZCA9IGZhbHNlOwogICAgICAgICAgICBjb25zdCBTdG9wRXZlbnRKU09OID0gSlNPTi5zdHJpbmdpZnkoeyBldmVudDogJ3N0b3AnIH0pOwogICAgICAgICAgICB0aGlzLnNlbmQoU3RvcEV2ZW50SlNPTik7CiAgICAgICAgfQogICAgICAgIHN3aXRjaENvbnRleHQoY29udGV4dE9wdGlvbnMpIHsKICAgICAgICAgICAgaWYgKCF0aGlzLndlYnNvY2tldCkgewogICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1dlYlNvY2tldCBpcyB1bmRlZmluZWQnKTsKICAgICAgICAgICAgfQogICAgICAgICAgICBpZiAoIXRoaXMuaXNDb250ZXh0U3RhcnRlZCkgewogICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignW1dlYlNvY2tldENsaWVudF0nLCAiY2FuJ3Qgc3dpdGNoIGNvbnRleHQ6IG5vIGFjdGl2ZSBjb250ZXh0Iik7CiAgICAgICAgICAgICAgICByZXR1cm47CiAgICAgICAgICAgIH0KICAgICAgICAgICAgaWYgKChjb250ZXh0T3B0aW9ucyA9PT0gbnVsbCB8fCBjb250ZXh0T3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGV4dE9wdGlvbnMuYXBwSWQpID09PSB1bmRlZmluZWQpIHsKICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tXZWJTb2NrZXRDbGllbnRdJywgImNhbid0IHN3aXRjaCBjb250ZXh0OiBuZXcgYXBwIGlkIGlzIHVuZGVmaW5lZCIpOwogICAgICAgICAgICAgICAgcmV0dXJuOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGNvbnN0IFN0b3BFdmVudEpTT04gPSBKU09OLnN0cmluZ2lmeSh7IGV2ZW50OiAnc3RvcCcgfSk7CiAgICAgICAgICAgIHRoaXMuc2VuZChTdG9wRXZlbnRKU09OKTsKICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGNvbnRleHRPcHRpb25zVG9Nc2coY29udGV4dE9wdGlvbnMpOwogICAgICAgICAgICBtZXNzYWdlLmV2ZW50ID0gJ3N0YXJ0JzsKICAgICAgICAgICAgdGhpcy5zZW5kKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTsKICAgICAgICB9CiAgICAgICAgY2xvc2VXZWJzb2NrZXQoY29kZSA9IDEwMDUsIHJlYXNvbiA9ICdObyBTdGF0dXMgUmVjZWl2ZWQnLCB3YXNDbGVhbiA9IHRydWUsIHVzZXJJbml0aWF0ZWQgPSB0cnVlKSB7CiAgICAgICAgICAgIHZhciBfYTsKICAgICAgICAgICAgaWYgKCF0aGlzLndlYnNvY2tldCkgewogICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdXZWJTb2NrZXQgYWxyZWFkeSBjbG9zZWQnKTsKICAgICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIGlmICh0aGlzLmRlYnVnKSB7CiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW1dlYlNvY2tldENsaWVudF0nLCB1c2VySW5pdGlhdGVkID8gJ1dlYnNvY2tldCBjbG9zZSByZXF1ZXN0ZWQnIDogJ1dlYnNvY2tldCBjbG9zZWQnKTsKICAgICAgICAgICAgfQogICAgICAgICAgICAvLyBSZXNldCBhdWRpb3Byb2Nlc3NvciBzbyBpdCB3b24ndCB0cnkgdG8gc2VuZCBhdWRpbyB0aGUgZmlyc3QgdGhpbmcgd2hlbiByZWNvbm5lY3QgaGFwcGVucy4gVGhpcyB3aWxsIGxlYWQgdG8gYSByZWNvbm5lY3QgbG9vcC4KICAgICAgICAgICAgKF9hID0gdGhpcy5hdWRpb1Byb2Nlc3NvcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlc2V0KCk7CiAgICAgICAgICAgIC8vIFdlIGRvbid0IHdhbnQgYW55IG1vcmUgbWVzc2FnZXMgZnJvbSB0aGUgY2xvc2luZyB3ZWJzb2NrZXQKICAgICAgICAgICAgdGhpcy53ZWJzb2NrZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3BlbicsIHRoaXMub25XZWJzb2NrZXRPcGVuKTsKICAgICAgICAgICAgdGhpcy53ZWJzb2NrZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMub25XZWJzb2NrZXRNZXNzYWdlKTsKICAgICAgICAgICAgdGhpcy53ZWJzb2NrZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLm9uV2Vic29ja2V0RXJyb3IpOwogICAgICAgICAgICB0aGlzLndlYnNvY2tldC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMub25XZWJzb2NrZXRDbG9zZSk7CiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGhlcmUgZHVlIHRvIGEgY2FsbCB0byBvbldlYlNvY2tldAogICAgICAgICAgICBpZiAodXNlckluaXRpYXRlZCkgewogICAgICAgICAgICAgICAgdGhpcy53ZWJzb2NrZXQuY2xvc2UoY29kZSwgcmVhc29uKTsKICAgICAgICAgICAgfQogICAgICAgICAgICB0aGlzLndlYnNvY2tldCA9IHVuZGVmaW5lZDsKICAgICAgICAgICAgdGhpcy53b3JrZXJDdHgucG9zdE1lc3NhZ2UoewogICAgICAgICAgICAgICAgdHlwZTogV29ya2VyU2lnbmFsLkNsb3NlZCwKICAgICAgICAgICAgICAgIGNvZGUsCiAgICAgICAgICAgICAgICByZWFzb24sCiAgICAgICAgICAgICAgICB3YXNDbGVhbiwKICAgICAgICAgICAgfSk7CiAgICAgICAgfQogICAgICAgIHNlbmQoZGF0YSkgewogICAgICAgICAgICBpZiAoIXRoaXMud2Vic29ja2V0KSB7CiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIFdlYnNvY2tldCcpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGlmICh0aGlzLndlYnNvY2tldC5yZWFkeVN0YXRlICE9PSB0aGlzLndlYnNvY2tldC5PUEVOKSB7CiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEV4cGVjdGVkIE9QRU4gV2Vic29ja2V0IHN0YXRlLCBidXQgZ290ICR7dGhpcy53ZWJzb2NrZXQucmVhZHlTdGF0ZX1gKTsKICAgICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgICAgfQogICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICAgdGhpcy53ZWJzb2NrZXQuc2VuZChkYXRhKTsKICAgICAgICAgICAgfQogICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHsKICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbV2ViU29ja2V0Q2xpZW50XScsICdzZXJ2ZXIgY29ubmVjdGlvbiBlcnJvcicsIGVycm9yKTsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBzZXRDb250ZXh0T3B0aW9ucyhvcHRpb25zKSB7CiAgICAgICAgICAgIHRoaXMuZGVmYXVsdENvbnRleHRPcHRpb25zID0gb3B0aW9uczsKICAgICAgICB9CiAgICB9CiAgICBjb25zdCBjdHggPSBzZWxmOwogICAgY29uc3Qgd2Vic29ja2V0Q2xpZW50ID0gbmV3IFdlYnNvY2tldENsaWVudChjdHgpOwogICAgY3R4Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7CiAgICAgICAgc3dpdGNoIChlLmRhdGEudHlwZSkgewogICAgICAgICAgICBjYXNlIENvbnRyb2xsZXJTaWduYWwuY29ubmVjdDoKICAgICAgICAgICAgICAgIHdlYnNvY2tldENsaWVudC5jb25uZWN0KGUuZGF0YS5hcGlVcmwsIGUuZGF0YS5hdXRoVG9rZW4sIGUuZGF0YS50YXJnZXRTYW1wbGVSYXRlLCBlLmRhdGEuZGVidWcpOwogICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIGNhc2UgQ29udHJvbGxlclNpZ25hbC5pbml0QXVkaW9Qcm9jZXNzb3I6CiAgICAgICAgICAgICAgICB3ZWJzb2NrZXRDbGllbnQuaW5pdEF1ZGlvUHJvY2Vzc29yKGUuZGF0YS5zb3VyY2VTYW1wbGVSYXRlLCBlLmRhdGEuZnJhbWVNaWxsaXMsIGUuZGF0YS5oaXN0b3J5RnJhbWVzLCBlLmRhdGEudmFkT3B0aW9ucyk7CiAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgY2FzZSBDb250cm9sbGVyU2lnbmFsLmFkanVzdEF1ZGlvUHJvY2Vzc29yOgogICAgICAgICAgICAgICAgd2Vic29ja2V0Q2xpZW50LmFkanVzdEF1ZGlvUHJvY2Vzc29yKGUuZGF0YS5wYXJhbXMpOwogICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIGNhc2UgQ29udHJvbGxlclNpZ25hbC5TRVRfU0hBUkVEX0FSUkFZX0JVRkZFUlM6CiAgICAgICAgICAgICAgICB3ZWJzb2NrZXRDbGllbnQuc2V0U2hhcmVkQXJyYXlCdWZmZXJzKGUuZGF0YS5jb250cm9sU0FCLCBlLmRhdGEuZGF0YVNBQik7CiAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgY2FzZSBDb250cm9sbGVyU2lnbmFsLkNMT1NFOgogICAgICAgICAgICAgICAgd2Vic29ja2V0Q2xpZW50LmNsb3NlV2Vic29ja2V0KDEwMDAsICdDbG9zZSByZXF1ZXN0ZWQgYnkgY2xpZW50JywgdHJ1ZSwgdHJ1ZSk7CiAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgY2FzZSBDb250cm9sbGVyU2lnbmFsLnN0YXJ0U3RyZWFtOgogICAgICAgICAgICAgICAgd2Vic29ja2V0Q2xpZW50LnN0YXJ0U3RyZWFtKGUuZGF0YS5zdHJlYW1PcHRpb25zKTsKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICBjYXNlIENvbnRyb2xsZXJTaWduYWwuc3RvcFN0cmVhbToKICAgICAgICAgICAgICAgIHdlYnNvY2tldENsaWVudC5zdG9wU3RyZWFtKCk7CiAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgY2FzZSBDb250cm9sbGVyU2lnbmFsLlNUQVJUX0NPTlRFWFQ6CiAgICAgICAgICAgICAgICB3ZWJzb2NrZXRDbGllbnQuc3RhcnRDb250ZXh0KGUuZGF0YS5vcHRpb25zKTsKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICBjYXNlIENvbnRyb2xsZXJTaWduYWwuU1dJVENIX0NPTlRFWFQ6CiAgICAgICAgICAgICAgICB3ZWJzb2NrZXRDbGllbnQuc3dpdGNoQ29udGV4dChlLmRhdGEub3B0aW9ucyk7CiAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgY2FzZSBDb250cm9sbGVyU2lnbmFsLlNUT1BfQ09OVEVYVDoKICAgICAgICAgICAgICAgIHdlYnNvY2tldENsaWVudC5zdG9wQ29udGV4dCgpOwogICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIGNhc2UgQ29udHJvbGxlclNpZ25hbC5BVURJTzoKICAgICAgICAgICAgICAgIHdlYnNvY2tldENsaWVudC5wcm9jZXNzQXVkaW8oZS5kYXRhLnBheWxvYWQpOwogICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIGNhc2UgQ29udHJvbGxlclNpZ25hbC5zZXRDb250ZXh0T3B0aW9uczoKICAgICAgICAgICAgICAgIHdlYnNvY2tldENsaWVudC5zZXRDb250ZXh0T3B0aW9ucyhlLmRhdGEub3B0aW9ucyk7CiAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgZGVmYXVsdDoKICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXT1JLRVInLCBlKTsKICAgICAgICB9CiAgICB9OwogICAgZnVuY3Rpb24gY29udGV4dE9wdGlvbnNUb01zZyhjb250ZXh0T3B0aW9ucykgewogICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB7CiAgICAgICAgICAgIG9wdGlvbnM6IHsKICAgICAgICAgICAgICAgIHRpbWV6b25lOiBbSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lXSwKICAgICAgICAgICAgfSwKICAgICAgICB9OwogICAgICAgIGlmIChjb250ZXh0T3B0aW9ucyA9PT0gdW5kZWZpbmVkKQogICAgICAgICAgICByZXR1cm4gbWVzc2FnZTsKICAgICAgICBtZXNzYWdlLm9wdGlvbnMudm9jYWJ1bGFyeSA9IGNvbnRleHRPcHRpb25zLnZvY2FidWxhcnk7CiAgICAgICAgbWVzc2FnZS5vcHRpb25zLnZvY2FidWxhcnlfYmlhcyA9IGNvbnRleHRPcHRpb25zLnZvY2FidWxhcnlCaWFzOwogICAgICAgIG1lc3NhZ2Uub3B0aW9ucy5zaWxlbmNlX3RyaWdnZXJlZF9zZWdtZW50YXRpb24gPSBjb250ZXh0T3B0aW9ucy5zaWxlbmNlVHJpZ2dlcmVkU2VnbWVudGF0aW9uOwogICAgICAgIGlmIChjb250ZXh0T3B0aW9ucy5ub25TdHJlYW1pbmdObHUpIHsKICAgICAgICAgICAgbWVzc2FnZS5vcHRpb25zLm5vbl9zdHJlYW1pbmdfbmx1ID0gWyd5ZXMnXTsKICAgICAgICB9CiAgICAgICAgZWxzZSB7CiAgICAgICAgICAgIG1lc3NhZ2Uub3B0aW9ucy5ub25fc3RyZWFtaW5nX25sdSA9IFsnbm8nXTsKICAgICAgICB9CiAgICAgICAgaWYgKChjb250ZXh0T3B0aW9ucyA9PT0gbnVsbCB8fCBjb250ZXh0T3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGV4dE9wdGlvbnMudGltZXpvbmUpICE9PSB1bmRlZmluZWQpIHsKICAgICAgICAgICAgbWVzc2FnZS5vcHRpb25zLnRpbWV6b25lID0gY29udGV4dE9wdGlvbnMgPT09IG51bGwgfHwgY29udGV4dE9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRleHRPcHRpb25zLnRpbWV6b25lOyAvLyBvdmVycmlkZSBicm93c2VyIHRpbWV6b25lCiAgICAgICAgfQogICAgICAgIGlmIChjb250ZXh0T3B0aW9ucy5hcHBJZCAhPT0gdW5kZWZpbmVkKSB7CiAgICAgICAgICAgIG1lc3NhZ2UuYXBwSWQgPSBjb250ZXh0T3B0aW9ucy5hcHBJZDsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7CiAgICB9CgogICAgZXhwb3J0cy5jb250ZXh0T3B0aW9uc1RvTXNnID0gY29udGV4dE9wdGlvbnNUb01zZzsKICAgIGV4cG9ydHNbImRlZmF1bHQiXSA9IFdlYnNvY2tldENsaWVudDsKCiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pOwoKICAgIHJldHVybiBleHBvcnRzOwoKfSkoe30pOwoK",null,!1);class eA{onResponse(e){this.onResponseCb=e}onClose(e){this.onCloseCb=e}constructor(){this.startCbs=[],this.stopCbs=[],this.onResponseCb=()=>{},this.onCloseCb=()=>{},this.onWebsocketMessage=e=>{const t=e.data;switch(t.type){case En.Opened:this.onInitResolve&&this.onInitResolve();break;case En.Closed:const n=new aa(e.data.reason,e.data.code,e.data.wasClean);this.onInitReject?this.onInitReject(n):this.onCloseCb(n);break;case En.AudioProcessorReady:this.resolveSourceSampleRateSet!=null&&this.resolveSourceSampleRateSet();break;case Lt.Started:this.onResponseCb(t),this.startCbs.forEach(i=>{try{i(void 0,t.audio_context)}catch(r){console.error('[SpeechlyClient] Error while invoking "onStart" callback:',r)}}),this.startCbs.length=0;break;case Lt.Stopped:this.onResponseCb(t),this.stopCbs.forEach(i=>{try{i(void 0,t.audio_context)}catch(r){console.error('[SpeechlyClient] Error while invoking "onStop" callback:',r)}}),this.stopCbs.length=0;break;default:this.onResponseCb(t)}},this.worker=new $m,this.worker.addEventListener("message",this.onWebsocketMessage)}initialize(e,t,n,i){return Me(this,void 0,void 0,function*(){return this.worker.postMessage({type:wt.connect,apiUrl:e,authToken:t,targetSampleRate:n,debug:i}),this.startCbs=[],this.stopCbs=[],new Promise((r,a)=>{this.onInitResolve=()=>{this.onInitResolve=void 0,this.onInitReject=void 0,r()},this.onInitReject=o=>{this.onInitResolve=void 0,this.onInitReject=void 0,a(o)}})})}initAudioProcessor(e,t,n,i){return Me(this,void 0,void 0,function*(){return this.worker.postMessage({type:wt.initAudioProcessor,sourceSampleRate:e,frameMillis:t,historyFrames:n,vadOptions:i}),new Promise(r=>{this.resolveSourceSampleRateSet=r})})}adjustAudioProcessor(e){this.worker.postMessage({type:wt.adjustAudioProcessor,params:e})}close(){return Me(this,void 0,void 0,function*(){return new Promise((e,t)=>{this.worker.postMessage({type:wt.CLOSE,code:1e3,message:"Client has ended the session"}),e()})})}startStream(e){return Me(this,void 0,void 0,function*(){this.worker.postMessage({type:wt.startStream,streamOptions:e})})}stopStream(){return Me(this,void 0,void 0,function*(){this.worker.postMessage({type:wt.stopStream})})}startContext(e){return Me(this,void 0,void 0,function*(){return new Promise((t,n)=>{this.startCbs.push((i,r)=>{i!==void 0?n(i):t(r)}),this.worker.postMessage({type:wt.START_CONTEXT,options:e})})})}stopContext(){return Me(this,void 0,void 0,function*(){return new Promise((e,t)=>{this.stopCbs.push((n,i)=>{n!==void 0?t(n):e(i)}),this.worker.postMessage({type:wt.STOP_CONTEXT})})})}switchContext(e){return Me(this,void 0,void 0,function*(){return new Promise((t,n)=>{this.startCbs.push((i,r)=>{i!==void 0?n(i):t(r)}),this.worker.postMessage({type:wt.SWITCH_CONTEXT,options:e})})})}postMessage(e){this.worker.postMessage(e)}sendAudio(e){this.worker.postMessage({type:wt.AUDIO,payload:e})}setContextOptions(e){return Me(this,void 0,void 0,function*(){this.worker.postMessage({type:wt.setContextOptions,options:e})})}}class tA{constructor(){this.storage=window.localStorage}get(e){return this.storage.getItem(e)}set(e,t){this.storage.setItem(e,t)}getOrSet(e,t){let n=this.storage.getItem(e);return n===null&&(n=t(),this.storage.setItem(e,n)),n}}function nA(s,e){return s.words.map(({word:t,index:n,start_timestamp:i,end_timestamp:r})=>({value:t,index:n,startTimestamp:i+e,endTimestamp:r+e,isFinal:!1}))}function iA(s,e){return{value:s.word,index:s.index,startTimestamp:s.start_timestamp+e,endTimestamp:s.end_timestamp+e,isFinal:!0}}function sA(s){return s.entities.map(({entity:e,value:t,start_position:n,end_position:i})=>({type:e,value:t,startPosition:n,endPosition:i,isFinal:!1}))}function rA(s){return{type:s.entity,value:s.value,startPosition:s.start_position,endPosition:s.end_position,isFinal:!0}}function tc(s,e){return{intent:s.intent,isFinal:e}}const aA="speechly-device-id",nc="speechly-auth-token";class oA{constructor(e){var t,n;if(this.streamOptions=Xc,this.activeContexts=0,this.audioContexts=new Map,this.maxReconnectAttemptCount=10,this.connectAttempt=0,this.connectPromise=null,this.cbs=[],this.state=Je.Disconnected,this.handleWebsocketResponse=r=>{var a;switch(this.debug&&console.log("[Decoder]","Received response",r),r.type){case En.VadSignalHigh:this.cbs.forEach(o=>o.onVadStateChange.forEach(c=>c(!0)));break;case En.VadSignalLow:this.cbs.forEach(o=>o.onVadStateChange.forEach(c=>c(!1)));break;case En.RequestContextStart:this.activeContexts++;break;case Lt.Started:{const o=r.params;this.audioContexts.set(r.audio_context,{segments:new Map,audioStartTimeMillis:(a=o==null?void 0:o.audioStartTimeMillis)!==null&&a!==void 0?a:0}),this.cbs.forEach(c=>c.contextStartedCbs.forEach(l=>l(r.audio_context)));break}case Lt.Stopped:{this.activeContexts--,this.cbs.forEach(o=>o.contextStoppedCbs.forEach(c=>c(r.audio_context))),this.streamOptions.preserveSegments||this.audioContexts.delete(r.audio_context),this.resolveStopStream!==void 0&&this.activeContexts===0&&this.resolveStopStream();break}default:this.handleSegmentUpdate(r);break}},this.handleSegmentUpdate=r=>{var a;const{audio_context:o,segment_id:c,type:l}=r;let{data:d}=r;const h=this.audioContexts.get(o);if(h===void 0){console.warn("[Decoder]","Received response for non-existent context",o);return}let u=(a=h.segments.get(c))!==null&&a!==void 0?a:new Um(o,c);switch(l){case Lt.TentativeTranscript:d=d;const g=nA(d,h.audioStartTimeMillis),m=d.transcript;this.cbs.forEach(x=>x.tentativeTranscriptCbs.forEach(b=>b(o,c,g,m))),u=u.updateTranscript(g);break;case Lt.Transcript:d=d;const A=iA(d,h.audioStartTimeMillis);this.cbs.forEach(x=>x.transcriptCbs.forEach(b=>b(o,c,A))),u=u.updateTranscript([A]);break;case Lt.TentativeEntities:d=d;const p=sA(d);this.cbs.forEach(x=>x.tentativeEntityCbs.forEach(b=>b(o,c,p))),u=u.updateEntities(p);break;case Lt.Entity:d=d;const f=rA(d);this.cbs.forEach(x=>x.entityCbs.forEach(b=>b(o,c,f))),u=u.updateEntities([f]);break;case Lt.TentativeIntent:d=d;const y=tc(d,!1);this.cbs.forEach(x=>x.tentativeIntentCbs.forEach(b=>b(o,c,y))),u=u.updateIntent(y);break;case Lt.Intent:d=d;const _=tc(d,!0);this.cbs.forEach(x=>x.intentCbs.forEach(b=>b(o,c,_))),u=u.updateIntent(_);break;case Lt.SegmentEnd:u=u.finalize();break}h.segments.set(c,u),this.audioContexts.set(o,h),this.logSegments&&console.info(u.toString()),this.cbs.forEach(g=>g.segmentChangeCbs.forEach(m=>m(u.toSegment())))},this.handleWebsocketClosure=r=>{if(r.code===1e3)this.debug&&console.log("[Decoder]","Websocket closed",r);else{if(console.error("[Decoder]","Websocket closed due to error",r),this.deviceId===void 0){this.setState(Je.Failed),console.error("[Decoder]","No deviceId. Giving up reconnecting.");return}this.setState(Je.Disconnected),this.activeContexts=0,this.audioContexts.clear(),this.reconnect()}},this.logSegments=e.logSegments,this.appId=e.appId,this.projectId=e.projectId,this.sampleRate=e.sampleRate,this.debug=e.debug,this.appId!==void 0&&this.projectId!==void 0)throw Error("[Decoder] You cannot use both appId and projectId at the same time");if(this.appId===void 0&&this.projectId===void 0)throw Error("[Decoder] Either an appId or a projectId is required");const i=e.apiUrl;this.apiUrl=cA(i.replace("http","ws")+"/ws/v1",this.sampleRate),this.loginUrl=`${i}/login`;try{this.storage=(t=e.storage)!==null&&t!==void 0?t:new tA,this.deviceId=this.storage.getOrSet(aA,ec)}catch{this.deviceId=ec()}this.apiClient=new eA,this.apiClient.onResponse(this.handleWebsocketResponse),this.apiClient.onClose(this.handleWebsocketClosure),(!((n=e.connect)!==null&&n!==void 0)||n)&&this.connect()}getReconnectDelayMs(e){return Math.pow(2,e)*100}sleep(e){return Me(this,void 0,void 0,function*(){return new Promise(t=>setTimeout(t,e))})}connect(){return Me(this,void 0,void 0,function*(){this.connectPromise===null&&(this.connectPromise=(()=>Me(this,void 0,void 0,function*(){var e;this.setState(Je.Disconnected);const t=(e=this.storage)===null||e===void 0?void 0:e.get(nc);if(!t||!Yc(t,this.projectId,this.appId,this.deviceId))try{this.authToken=yield Km(this.loginUrl,this.projectId,this.appId,this.deviceId,fetch),this.storage&&this.storage.set(nc,this.authToken)}catch(n){throw this.connectPromise=null,this.setState(Je.Failed),n}else this.authToken=t;try{yield this.apiClient.initialize(this.apiUrl,this.authToken,this.sampleRate,this.debug)}catch(n){throw this.connectPromise=null,n instanceof aa&&n.code===1e3||this.setState(Je.Failed),n}this.advanceState(Je.Connected)}))()),yield this.connectPromise})}adjustAudioProcessor(e){this.apiClient.adjustAudioProcessor(e)}close(){return Me(this,void 0,void 0,function*(){let e;try{yield this.apiClient.close()}catch(t){e=t.message}if(this.audioContexts.clear(),this.activeContexts=0,this.connectPromise=null,this.setState(Je.Disconnected),e!==void 0)throw Error(e)})}startStream(e){return Me(this,void 0,void 0,function*(){this.debug&&console.log("[Decoder]","startStream"),this.streamOptions=e,this.audioContexts.clear(),this.activeContexts=0,yield this.apiClient.startStream(e)})}stopStream(){return Me(this,void 0,void 0,function*(){this.debug&&console.log("[Decoder]","stopStream"),yield this.apiClient.stopStream(),yield this.waitResults()})}waitResults(){return Me(this,void 0,void 0,function*(){this.activeContexts>0&&(yield new Promise(t=>{this.resolveStopStream=t})),this.resolveStopStream=void 0})}startContext(e){return Me(this,void 0,void 0,function*(){if(this.state===Je.Failed)throw Error("[Decoder] startContext cannot be run in Failed state.");if(this.state<Je.Connected)yield this.connect();else if(this.state>Je.Connected)throw Error("[Decoder] Unable to complete startContext: Expected Connected state, but was in "+Hi(this.state)+".");this.setState(Je.Active);let t;if(this.projectId!=null)if(e!=null&&e.appId)t=yield this.apiClient.startContext(e);else throw new Error("options.appId is required with project login");else{if((e==null?void 0:e.appId)!=null&&this.appId!==(e==null?void 0:e.appId))throw this.setState(Je.Failed),Nm;t=yield this.apiClient.startContext(e)}if(this.state<Je.Active)throw Error("[Decoder] Unable to complete startContext: Problem acquiring contextId");return t})}sendAudio(e){this.apiClient.sendAudio(e)}stopContext(e){return Me(this,void 0,void 0,function*(){if(this.state===Je.Failed)throw Error("[Decoder] stopContext cannot be run in unrecovable error state.");if(this.state!==Je.Active)throw Error("[Decoder] Unable to complete stopContext: Expected Active state, but was in "+Hi(this.state)+".");e>0&&(yield this.sleep(e));const t=yield this.apiClient.stopContext();return this.setState(Je.Connected),t})}switchContext(e){return Me(this,void 0,void 0,function*(){if(this.state!==Je.Active)throw Error("[Decoder] Unable to complete switchContext: Expected Active state, but was in "+Hi(this.state)+".");return yield this.apiClient.switchContext(e)})}registerListener(e){this.cbs.push(e)}initAudioProcessor(e,t,n,i){return Me(this,void 0,void 0,function*(){yield this.apiClient.initAudioProcessor(e,t,n,i)})}useSharedArrayBuffers(e,t){this.apiClient.postMessage({type:"SET_SHARED_ARRAY_BUFFERS",controlSAB:e,dataSAB:t})}setContextOptions(e){return Me(this,void 0,void 0,function*(){yield this.apiClient.setContextOptions(e)})}reconnect(){return Me(this,void 0,void 0,function*(){console.log("Speechly reconnecting"),this.connectPromise=null,this.connectAttempt<this.maxReconnectAttemptCount?(yield this.sleep(this.getReconnectDelayMs(this.connectAttempt++)),yield this.connect()):console.error("[Decoder] Maximum reconnect count reached, giving up automatic reconnect.")})}advanceState(e){this.state>=e||this.setState(e)}setState(e){this.state!==e&&(this.debug&&console.log("[Decoder]",Hi(this.state),"->",Hi(e)),this.state=e,this.cbs.forEach(t=>{var n;return(n=t.stateChangeCbs)===null||n===void 0?void 0:n.forEach(i=>i(e))}))}getSegments(){const e=[];return this.audioContexts.forEach((t,n)=>{t.segments.forEach((i,r)=>{const a=JSON.parse(JSON.stringify(i));e.push(a)})}),e}}function cA(s,e){const t=new URLSearchParams;return t.append("sampleRate",e.toString()),`${s}?${t.toString()}`}var lA=`
// Indices for the Control SAB.
const CONTROL = {
  'WRITE_INDEX': 0,
  'FRAMES_AVAILABLE': 1,
  'LOCK': 2,
};

class SpeechlyProcessor extends AudioWorkletProcessor {
  constructor() {
    super();

    this._initialized = false;
    this.debug = false;
    this.port.onmessage = this._initialize.bind(this);
  }

  _initialize(event) {
    this.controlSAB = new Int32Array(event.data.controlSAB);
    this.dataSAB = new Float32Array(event.data.dataSAB);
    this.debug = event.data.debug;
    if (this.debug) {
      console.log('[BrowserClient AudioWorkletNode]', 'initializing audioworklet');
    }
    this.sharedBufferSize = this.dataSAB.length;
    this.buffer = new Float32Array(0);
    this._initialized = true;
  }

  _transferDataToSharedBuffer(data) {
    this.controlSAB[CONTROL.LOCK] = 1;
    let inputWriteIndex = this.controlSAB[CONTROL.WRITE_INDEX];
    if (this.controlSAB[CONTROL.FRAMES_AVAILABLE] > 0) {
      if (inputWriteIndex + data.length > this.sharedBufferSize) {
        // console.log('buffer overflow')
        inputWriteIndex = 0;
      }
    }
    this.dataSAB.set(data, inputWriteIndex);
    this.controlSAB[CONTROL.WRITE_INDEX] = inputWriteIndex + data.length;
    this.controlSAB[CONTROL.FRAMES_AVAILABLE] = inputWriteIndex + data.length;
    this.controlSAB[CONTROL.LOCK] = 0;
  }

  _pushData(data) {
    if (this.debug) {
      const signalEnergy = getStandardDeviation(data)
      this.port.postMessage({
        type: 'STATS',
        signalEnergy: signalEnergy,
        samples: data.length,
      });
    }

    if (this.buffer.length > this.sharedBufferSize) {
      const dataToTransfer = this.buffer.subarray(0, this.sharedBufferSize);
      this._transferDataToSharedBuffer(dataToTransfer);
      this.buffer = this.buffer.subarray(this.sharedBufferSize);
    }
    let concat = new Float32Array(this.buffer.length + data.length);
    concat.set(this.buffer);
    concat.set(data, this.buffer.length);
    this.buffer = concat;
  }

  process(inputs, outputs, parameters) {
    const inputChannelData = inputs[0][0];
    if (inputChannelData !== undefined) {
      if (this.controlSAB && this.dataSAB) {
        this._pushData(inputChannelData);
      } else {
        this.port.postMessage({
          type: 'DATA',
          frames: inputChannelData
        });
      }
    }

    return true;
  }
}

function getStandardDeviation(array) {
  const n = array.length
  const mean = array.reduce((a, b) => a + b) / n
  return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
}

registerProcessor('speechly-worklet', SpeechlyProcessor);
`;class dA{constructor(e){var t,n;this.contextStopDelay=250,this.debug=!1,this.initialized=!1,this.audioProcessorInitialized=!1,this.isStreaming=!1,this.active=!1,this.listeningPromise=null,this.streamOptions=Object.assign({},Xc),this.stats={maxSignalEnergy:0,sentSamples:0},this.decoderOptions=Object.assign(Object.assign(Object.assign({},Dm),e),{vad:e.vad?Object.assign(Object.assign({},Fm),e.vad):void 0});const i=window.navigator.mediaDevices.getSupportedConstraints();this.nativeResamplingSupported=i.sampleRate===!0,this.isMobileSafari=hA(),this.isSafari=this.isMobileSafari||window.safari!==void 0,this.useSAB=!this.isSafari,this.debug=(t=this.decoderOptions.debug)!==null&&t!==void 0?t:!0,this.callbacks=new Bm,this.callbacks.stateChangeCbs.addEventListener(this.handleStateChange.bind(this)),this.callbacks.onVadStateChange.addEventListener(this.autoControlListening.bind(this)),this.decoder=(n=this.decoderOptions.decoder)!==null&&n!==void 0?n:new oA(this.decoderOptions),this.decoder.registerListener(this.callbacks)}initialize(e){var t,n;return Me(this,void 0,void 0,function*(){if(!this.initialized){this.debug&&console.log("[BrowserClient]","initializing"),this.initialized=!0;try{yield this.decoder.connect()}catch(i){if(this.initialized=!1,i instanceof aa){if(i.code===1e3){this.debug&&console.log("[BrowserClient]","Early close of websocket.");return}throw Error(`Unable to connect. Most likely there is no connection to network. Websocket error code: ${i.code}`)}else throw i}try{const i={};if(this.nativeResamplingSupported&&(i.sampleRate=ts),window.webkitAudioContext!==void 0)try{this.audioContext=new window.webkitAudioContext(i)}catch(r){this.debug&&console.log("[BrowserClient]","creating audioContext without samplerate conversion",r),this.audioContext=new window.webkitAudioContext}else this.audioContext=new window.AudioContext(i),window.webkitAudioContext!==void 0&&(yield this.audioContext.resume())}catch{throw this.initialized=!1,Zc}if(!this.isSafari&&window.AudioWorkletNode!==void 0){this.debug&&console.log("[BrowserClient]","using AudioWorkletNode");const i=new Blob([lA],{type:"text/javascript"}),r=window.URL.createObjectURL(i);if(yield this.audioContext.audioWorklet.addModule(r),this.speechlyNode=new AudioWorkletNode(this.audioContext,"speechly-worklet"),this.speechlyNode.connect(this.audioContext.destination),this.useSAB&&window.SharedArrayBuffer!==void 0){this.debug&&console.log("[BrowserClient]","using SharedArrayBuffer");const a=new window.SharedArrayBuffer(4*Int32Array.BYTES_PER_ELEMENT),o=new window.SharedArrayBuffer(1024*Float32Array.BYTES_PER_ELEMENT);this.decoder.useSharedArrayBuffers(a,o),this.speechlyNode.port.postMessage({type:"SET_SHARED_ARRAY_BUFFERS",controlSAB:a,dataSAB:o,debug:this.debug})}else this.debug&&console.log("[BrowserClient]","can not use SharedArrayBuffer");this.speechlyNode.port.onmessage=a=>{switch(a.data.type){case"STATS":a.data.signalEnergy>this.stats.maxSignalEnergy&&(this.stats.maxSignalEnergy=a.data.signalEnergy),this.stats.sentSamples+=parseInt(a.data.samples);break;case"DATA":this.handleAudio(a.data.frames);break}}}else{if(this.debug&&console.log("[BrowserClient]","using ScriptProcessorNode"),window.webkitAudioContext!==void 0){const i=this.audioContext.sampleRate/ts,r=4096*Math.pow(2,Math.ceil(Math.log(i)/Math.log(2)));this.audioProcessor=this.audioContext.createScriptProcessor(r,1,1)}else this.audioProcessor=this.audioContext.createScriptProcessor(void 0,1,1);this.audioProcessor.connect(this.audioContext.destination),this.audioProcessor.addEventListener("audioprocess",i=>{this.handleAudio(i.inputBuffer.getChannelData(0))})}this.debug&&console.log("[BrowserClient]","audioContext sampleRate is",(t=this.audioContext)===null||t===void 0?void 0:t.sampleRate),this.streamOptions.sampleRate=(n=this.audioContext)===null||n===void 0?void 0:n.sampleRate,yield this.decoder.initAudioProcessor(this.streamOptions.sampleRate,this.decoderOptions.frameMillis,this.decoderOptions.historyFrames,this.decoderOptions.vad),this.audioProcessorInitialized=!0,e!=null&&e.mediaStream&&(yield this.attach(e==null?void 0:e.mediaStream))}})}attach(e){var t,n,i,r,a,o;return Me(this,void 0,void 0,function*(){if(yield this.initialize(),yield this.detach(),this.stream=(t=this.audioContext)===null||t===void 0?void 0:t.createMediaStreamSource(e),((n=this.audioContext)===null||n===void 0?void 0:n.state)!=="running"&&(this.debug&&console.log("[BrowserClient]","audioContext resume required, state is",(i=this.audioContext)===null||i===void 0?void 0:i.state),yield(r=this.audioContext)===null||r===void 0?void 0:r.resume()),this.speechlyNode)(a=this.stream)===null||a===void 0||a.connect(this.speechlyNode);else if(this.audioProcessor)(o=this.stream)===null||o===void 0||o.connect(this.audioProcessor);else throw Error("[BrowserClient] cannot attach to mediaStream, not initialized");yield this.autoControlStream()})}isActive(){return this.active}start(e){return Me(this,void 0,void 0,function*(){if(this.active)throw Vm;return this.active=!0,yield this.queueTask(()=>Me(this,void 0,void 0,function*(){return yield this.initialize(),this.isStreaming||(yield this.startStream({autoStarted:!0})),yield this.decoder.startContext(e)}))})}stop(e=this.contextStopDelay){return Me(this,void 0,void 0,function*(){if(!this.active)throw Wm;return this.active=!1,yield this.queueTask(()=>Me(this,void 0,void 0,function*(){var n;try{const i=yield this.decoder.stopContext(e);return!(!((n=this.decoderOptions.vad)===null||n===void 0)&&n.enabled)&&this.isStreaming&&this.streamOptions.autoStarted&&(yield this.stopStream()),this.stats.sentSamples===0&&console.warn("[BrowserClient]","audioContext contained no audio data"),i}catch(i){console.warn("[BrowserClient]","stop() failed",i)}finally{this.stats.sentSamples=0}}))})}setContextOptions(e){return Me(this,void 0,void 0,function*(){yield this.decoder.setContextOptions(e)})}adjustAudioProcessor(e){var t;if(e.vad)if(this.decoderOptions.vad)this.decoderOptions.vad=Object.assign(Object.assign({},this.decoderOptions.vad),e.vad);else throw Error("Unable to adjust VAD - it was not defined in the constructor");this.decoder.adjustAudioProcessor(e),!((t=this.decoderOptions.vad)===null||t===void 0)&&t.enabled?this.autoControlStream():this.active&&this.stop()}uploadAudioData(e,t){var n,i,r;return Me(this,void 0,void 0,function*(){yield this.initialize();const a=yield(n=this.audioContext)===null||n===void 0?void 0:n.decodeAudioData(e);if(a===void 0)throw Error("Could not decode audioData");const o=a.getChannelData(0);if(a.numberOfChannels>1){const m=a.getChannelData(1);for(let A=0;A<o.length;A++)o[A]=(o[A]+m[A])/2}this.active&&(yield this.stop(0)),this.isStreaming&&(yield this.stopStream()),yield this.startStream({sampleRate:a.sampleRate,preserveSegments:!0,immediate:!0});const c=((i=this.decoderOptions.vad)===null||i===void 0?void 0:i.enabled)&&((r=this.decoderOptions.vad)===null||r===void 0?void 0:r.controlListening),l=1e3;let d=0;if(!c)yield this.start(t);else{if(t&&(yield this.setContextOptions(t)),this.decoderOptions.vad.signalSustainMillis>=l){const f=10/(1e4/this.decoderOptions.vad.signalSustainMillis);d=l/f}else console.warn(`Throttling disabled due to low (<= ${l}) VAD sustain value. Server may disconnect while processing if contexts are created at high rate.`);d=0}let h;const u=Math.round(a.sampleRate*l/1e3);for(let m=0;m<o.length;m+=u){const A=m+u;A>o.length?h=o.slice(m):h=o.slice(m,A),this.handleAudio(h),yield this.sleep(d)}return c||(yield this.stop(0)),yield this.stopStream(),this.decoder.getSegments()})}startStream(e){return Me(this,void 0,void 0,function*(){this.streamOptions=Object.assign(Object.assign(Object.assign({},this.streamOptions),{autoStarted:!1}),e),yield this.decoder.startStream(this.streamOptions),this.isStreaming=!0})}stopStream(){return Me(this,void 0,void 0,function*(){this.isStreaming&&(this.isStreaming=!1,yield this.decoder.stopStream())})}queueTask(e){return Me(this,void 0,void 0,function*(){const t=this.listeningPromise;return this.listeningPromise=(()=>Me(this,void 0,void 0,function*(){return yield t,e()}))(),this.listeningPromise})}autoControlListening(e){var t;this.debug&&console.log("[BrowserClient]","autoControlListening",e),!((t=this.decoderOptions.vad)===null||t===void 0)&&t.controlListening&&(e?this.active||this.start():this.active&&this.stop(0))}autoControlStream(){var e,t;return Me(this,void 0,void 0,function*(){if(this.audioProcessorInitialized&&this.stream){if(!((e=this.decoderOptions.vad)===null||e===void 0)&&e.enabled&&!this.isStreaming){yield this.startStream({autoStarted:!0});return}!(!((t=this.decoderOptions.vad)===null||t===void 0)&&t.enabled)&&this.isStreaming&&this.streamOptions.autoStarted&&(yield this.stopStream())}})}handleStateChange(e){switch(e){case Je.Disconnected:case Je.Failed:this.stopStream(),this.active=!1,this.listeningPromise=null;break}}detach(){return Me(this,void 0,void 0,function*(){this.active&&(yield this.stop(0)),this.stream&&(this.stream.disconnect(),this.stream=void 0)})}close(){var e,t,n;return Me(this,void 0,void 0,function*(){this.debug&&console.log("[BrowserClient]","close"),yield this.detach(),this.speechlyNode!==null&&((e=this.speechlyNode)===null||e===void 0||e.port.close(),(t=this.speechlyNode)===null||t===void 0||t.disconnect()),this.audioProcessor!==void 0&&((n=this.audioProcessor)===null||n===void 0||n.disconnect()),yield this.decoder.close(),this.initialized=!1,this.listeningPromise=null})}sleep(e){return Me(this,void 0,void 0,function*(){return new Promise(t=>setTimeout(t,e))})}handleAudio(e){this.isStreaming&&(this.stats.sentSamples+=e.length,this.decoder.sendAudio(e))}onStart(e){this.callbacks.contextStartedCbs.addEventListener(e)}onStop(e){this.callbacks.contextStoppedCbs.addEventListener(e)}onSegmentChange(e){this.callbacks.segmentChangeCbs.addEventListener(e)}onTranscript(e){this.callbacks.transcriptCbs.addEventListener(e)}onEntity(e){this.callbacks.entityCbs.addEventListener(e)}onIntent(e){this.callbacks.intentCbs.addEventListener(e)}onTentativeTranscript(e){this.callbacks.tentativeTranscriptCbs.addEventListener(e)}onTentativeEntities(e){this.callbacks.tentativeEntityCbs.addEventListener(e)}onTentativeIntent(e){this.callbacks.tentativeIntentCbs.addEventListener(e)}onStateChange(e){this.callbacks.stateChangeCbs.addEventListener(e)}}function hA(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].indexOf(navigator.platform)>=0||navigator.userAgent.includes("Mac")&&"ontouchend"in document}const wr=new Gm,Ds=new dA({appId:"7e7ba4b0-d263-4d44-9f4f-522cd4197557",logSegments:!1,debug:!1,silence_triggered_segmentation:15e3,silenceTriggeredSegmentation:15e3});function uA(s,e){const t=document.createElement("canvas"),n=t.getContext("2d");let i=null;const r=100;n.font="normal "+r+"px Arial",i=n.measureText(s);const a=i.width;t.width=a,t.height=r,n.font="normal "+r+"px Arial",n.textAlign="center",n.textBaseline="middle",n.fillStyle="#8f1b1b",n.fillRect(0,0,t.width,t.height),n.fillStyle="#ffffff",n.fillText(s,a/2,r/2);const o=new dt(t);o.needsUpdate=!0;const c=new Sn({color:16777215,side:Zt,map:o,transparent:!0}),l=new Os(e*a/r,e);return new Mt(l,c)}const fA=new em,gn=new Uc;gn.setSize(window.innerWidth,window.innerHeight);gn.xr.enabled=!0;gn.xr.setReferenceSpaceType("local");gn.setPixelRatio(window.devicePixelRatio);document.body.appendChild(gn.domElement);document.body.appendChild(Ei.createButton(gn));const Ni=new pp;Ni.background=new Ee(1052688);const gA=new vt(70,window.innerWidth/window.innerHeight,1,2e3),pA=new Hp(16119012,1);Ni.add(pA);const mA=new na(6,256,256),AA=new Hs({side:bt,displacementScale:-4}),oa=new Mt(mA,AA),Kc=new Wc,Jc=new zc(Kc);Jc.load("src/kandao3.jpg",function(s){s.colorSpace=be,s.minFilter=nt,s.generateMipmaps=!1,oa.material.map=s});Jc.load("src/kandao3_depthmap.jpg",function(s){s.minFilter=nt,s.generateMipmaps=!1,oa.material.displacementMap=s});fA.load("src/b/scene.gltf",function(s){const e=s.scene;e.traverse(n=>{n.castShadow=!0});const t=.4;e.scale.set(t,t,t),e.position.set(.2,-5,-5),Ni.add(e)});let Ps=[],Zi=0;function Fs(s){const e=s.split(" ");let t=0,n=0,i=12;for(;t<e.length;){const r=e.slice(t,t+i).join(" ");Ps[Zi]=uA(r,.1),Ps[Zi].position.set(0,0-n*.1,-3),Ni.add(Ps[Zi]),Zi++,t+=i,n++}}function Bs(){for(let s=0;s<Zi;s++)Ps[s].position.set(-.5,0,-2223)}Kc.onLoad=function(){Ni.add(oa)};let ic=-1,Lr=!1;for(let s=0;s<2;s++)gn.xr.getControllerGrip(s).addEventListener("connected",t=>{setInterval(async function(){for(let n=0;n<8;n++)if(t.data.gamepad.buttons[n].pressed){if(ic===n)continue;ic=n,Lr=!Lr,Lr&&(Bs(),Fs("recording... talk.")),await jc()}},100)});function CA(){gn.render(Ni,gA)}gn.setAnimationLoop(CA);$(document).keydown(function(s){(s.key==="r"||s.key==="R")&&jc()});let Ji="";Ds.onSegmentChange(s=>{Ji=s.words.map(e=>e.value).join(" "),Bs(),Fs(Ji)});let Nr=!1;async function jc(){Nr?(await Ds.stop(),setTimeout(function(){Bs(),Fs("1 sec..."),Nr=!1,$.post(window.rUrl,{message:Ji},function(e){if(Bs(),e=JSON.parse(e),e.audio){const t=new Audio;t.src="data:audio/mpeg;base64,"+e.audio,t.play()}else responsiveVoice.speak(e.txt,"UK English Female",{rate:1.2});setTimeout(function(){Qc()},2e3),Ji="",Fs(e.txt)}).fail(function(e,t,n){Ji=""})},1e3),document.getElementById("record")&&(document.getElementById("record").innerHTML="press R to record",document.getElementById("record").style.color="white")):(Nr=!0,await IA(),await Ds.start(),document.getElementById("record")&&(document.getElementById("record").innerHTML="recording... press R to stop",document.getElementById("record").style.color="red"))}const IA=async()=>{wr.mediaStream||(await wr.initialize(),await Ds.attach(wr.mediaStream))};function Qc(){var s=document.createElement("iframe");s.src="https://www.youtube.com/embed/1x9uy1qBUfA?autoplay=1&t="+Math.floor(Math.random()*2e3)+1,s.async=!0,s.allow="autoplay",s.width="0",s.height="0",document.getElementById("record").appendChild(s)}setTimeout(function(){Qc()},100);
