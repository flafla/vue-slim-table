(function(c,ee){typeof exports=="object"&&typeof module!="undefined"?module.exports=ee(require("vue")):typeof define=="function"&&define.amd?define(["vue"],ee):(c=typeof globalThis!="undefined"?globalThis:c||self,c.VueSlimTable=ee(c.Vue))})(this,function(c){"use strict";var ee="";function ar(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach(function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})}),e}var or=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},t=Symbol("test"),n=Object(t);if(typeof t=="string"||Object.prototype.toString.call(t)!=="[object Symbol]"||Object.prototype.toString.call(n)!=="[object Symbol]")return!1;var o=42;e[t]=o;for(t in e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var a=Object.getOwnPropertySymbols(e);if(a.length!==1||a[0]!==t||!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var i=Object.getOwnPropertyDescriptor(e,t);if(i.value!==o||i.enumerable!==!0)return!1}return!0},Me=typeof Symbol!="undefined"&&Symbol,ir=or,lr=function(){return typeof Me!="function"||typeof Symbol!="function"||typeof Me("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:ir()},fr="Function.prototype.bind called on incompatible ",ce=Array.prototype.slice,cr=Object.prototype.toString,ur="[object Function]",pr=function(e){var t=this;if(typeof t!="function"||cr.call(t)!==ur)throw new TypeError(fr+t);for(var n=ce.call(arguments,1),o,a=function(){if(this instanceof o){var s=t.apply(this,n.concat(ce.call(arguments)));return Object(s)===s?s:this}else return t.apply(e,n.concat(ce.call(arguments)))},i=Math.max(0,t.length-n.length),l=[],u=0;u<i;u++)l.push("$"+u);if(o=Function("binder","return function ("+l.join(",")+"){ return binder.apply(this,arguments); }")(a),t.prototype){var f=function(){};f.prototype=t.prototype,o.prototype=new f,f.prototype=null}return o},sr=pr,ue=Function.prototype.bind||sr,yr=ue,dr=yr.call(Function.call,Object.prototype.hasOwnProperty),v,z=SyntaxError,De=Function,M=TypeError,pe=function(r){try{return De('"use strict"; return ('+r+").constructor;")()}catch{}},F=Object.getOwnPropertyDescriptor;if(F)try{F({},"")}catch{F=null}var se=function(){throw new M},mr=F?function(){try{return arguments.callee,se}catch{try{return F(arguments,"callee").get}catch{return se}}}():se,D=lr(),P=Object.getPrototypeOf||function(r){return r.__proto__},T={},vr=typeof Uint8Array=="undefined"?v:P(Uint8Array),_={"%AggregateError%":typeof AggregateError=="undefined"?v:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer=="undefined"?v:ArrayBuffer,"%ArrayIteratorPrototype%":D?P([][Symbol.iterator]()):v,"%AsyncFromSyncIteratorPrototype%":v,"%AsyncFunction%":T,"%AsyncGenerator%":T,"%AsyncGeneratorFunction%":T,"%AsyncIteratorPrototype%":T,"%Atomics%":typeof Atomics=="undefined"?v:Atomics,"%BigInt%":typeof BigInt=="undefined"?v:BigInt,"%Boolean%":Boolean,"%DataView%":typeof DataView=="undefined"?v:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array=="undefined"?v:Float32Array,"%Float64Array%":typeof Float64Array=="undefined"?v:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry=="undefined"?v:FinalizationRegistry,"%Function%":De,"%GeneratorFunction%":T,"%Int8Array%":typeof Int8Array=="undefined"?v:Int8Array,"%Int16Array%":typeof Int16Array=="undefined"?v:Int16Array,"%Int32Array%":typeof Int32Array=="undefined"?v:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":D?P(P([][Symbol.iterator]())):v,"%JSON%":typeof JSON=="object"?JSON:v,"%Map%":typeof Map=="undefined"?v:Map,"%MapIteratorPrototype%":typeof Map=="undefined"||!D?v:P(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise=="undefined"?v:Promise,"%Proxy%":typeof Proxy=="undefined"?v:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect=="undefined"?v:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set=="undefined"?v:Set,"%SetIteratorPrototype%":typeof Set=="undefined"||!D?v:P(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer=="undefined"?v:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":D?P(""[Symbol.iterator]()):v,"%Symbol%":D?Symbol:v,"%SyntaxError%":z,"%ThrowTypeError%":mr,"%TypedArray%":vr,"%TypeError%":M,"%Uint8Array%":typeof Uint8Array=="undefined"?v:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray=="undefined"?v:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array=="undefined"?v:Uint16Array,"%Uint32Array%":typeof Uint32Array=="undefined"?v:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap=="undefined"?v:WeakMap,"%WeakRef%":typeof WeakRef=="undefined"?v:WeakRef,"%WeakSet%":typeof WeakSet=="undefined"?v:WeakSet},gr=function r(e){var t;if(e==="%AsyncFunction%")t=pe("async function () {}");else if(e==="%GeneratorFunction%")t=pe("function* () {}");else if(e==="%AsyncGeneratorFunction%")t=pe("async function* () {}");else if(e==="%AsyncGenerator%"){var n=r("%AsyncGeneratorFunction%");n&&(t=n.prototype)}else if(e==="%AsyncIteratorPrototype%"){var o=r("%AsyncGenerator%");o&&(t=P(o.prototype))}return _[e]=t,t},Te={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},re=ue,te=dr,hr=re.call(Function.call,Array.prototype.concat),Sr=re.call(Function.apply,Array.prototype.splice),_e=re.call(Function.call,String.prototype.replace),ne=re.call(Function.call,String.prototype.slice),br=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,Or=/\\(\\)?/g,Ar=function(e){var t=ne(e,0,1),n=ne(e,-1);if(t==="%"&&n!=="%")throw new z("invalid intrinsic syntax, expected closing `%`");if(n==="%"&&t!=="%")throw new z("invalid intrinsic syntax, expected opening `%`");var o=[];return _e(e,br,function(a,i,l,u){o[o.length]=l?_e(u,Or,"$1"):i||a}),o},wr=function(e,t){var n=e,o;if(te(Te,n)&&(o=Te[n],n="%"+o[0]+"%"),te(_,n)){var a=_[n];if(a===T&&(a=gr(n)),typeof a=="undefined"&&!t)throw new M("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:o,name:n,value:a}}throw new z("intrinsic "+e+" does not exist!")},ye=function(e,t){if(typeof e!="string"||e.length===0)throw new M("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof t!="boolean")throw new M('"allowMissing" argument must be a boolean');var n=Ar(e),o=n.length>0?n[0]:"",a=wr("%"+o+"%",t),i=a.name,l=a.value,u=!1,f=a.alias;f&&(o=f[0],Sr(n,hr([0,1],f)));for(var s=1,y=!0;s<n.length;s+=1){var d=n[s],p=ne(d,0,1),m=ne(d,-1);if((p==='"'||p==="'"||p==="`"||m==='"'||m==="'"||m==="`")&&p!==m)throw new z("property names with quotes must have matching quotes");if((d==="constructor"||!y)&&(u=!0),o+="."+d,i="%"+o+"%",te(_,i))l=_[i];else if(l!=null){if(!(d in l)){if(!t)throw new M("base intrinsic for "+e+" exists, but the property is not available.");return}if(F&&s+1>=n.length){var h=F(l,d);y=!!h,y&&"get"in h&&!("originalValue"in h.get)?l=h.get:l=l[d]}else y=te(l,d),l=l[d];y&&!u&&(_[i]=l)}}return l},We={exports:{}};(function(r){var e=ue,t=ye,n=t("%Function.prototype.apply%"),o=t("%Function.prototype.call%"),a=t("%Reflect.apply%",!0)||e.call(o,n),i=t("%Object.getOwnPropertyDescriptor%",!0),l=t("%Object.defineProperty%",!0),u=t("%Math.max%");if(l)try{l({},"a",{value:1})}catch{l=null}r.exports=function(y){var d=a(e,o,arguments);if(i&&l){var p=i(d,"length");p.configurable&&l(d,"length",{value:1+u(0,y.length-(arguments.length-1))})}return d};var f=function(){return a(e,n,arguments)};l?l(r.exports,"apply",{value:f}):r.exports.apply=f})(We);var Ue=ye,Ve=We.exports,Er=Ve(Ue("String.prototype.indexOf")),Pr=function(e,t){var n=Ue(e,!!t);return typeof n=="function"&&Er(e,".prototype.")>-1?Ve(n):n},Nr={},Fr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Nr}),$r=ar(Fr),de=typeof Map=="function"&&Map.prototype,me=Object.getOwnPropertyDescriptor&&de?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,ae=de&&me&&typeof me.get=="function"?me.get:null,xr=de&&Map.prototype.forEach,ve=typeof Set=="function"&&Set.prototype,ge=Object.getOwnPropertyDescriptor&&ve?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,oe=ve&&ge&&typeof ge.get=="function"?ge.get:null,Ir=ve&&Set.prototype.forEach,kr=typeof WeakMap=="function"&&WeakMap.prototype,j=kr?WeakMap.prototype.has:null,Br=typeof WeakSet=="function"&&WeakSet.prototype,H=Br?WeakSet.prototype.has:null,Rr=typeof WeakRef=="function"&&WeakRef.prototype,Le=Rr?WeakRef.prototype.deref:null,Cr=Boolean.prototype.valueOf,Mr=Object.prototype.toString,Dr=Function.prototype.toString,Tr=String.prototype.match,he=typeof BigInt=="function"?BigInt.prototype.valueOf:null,Se=Object.getOwnPropertySymbols,be=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,q=typeof Symbol=="function"&&typeof Symbol.iterator=="object",_r=Object.prototype.propertyIsEnumerable,Ge=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(r){return r.__proto__}:null),Oe=$r.custom,Ae=Oe&&je(Oe)?Oe:null,O=typeof Symbol=="function"&&typeof Symbol.toStringTag!="undefined"?Symbol.toStringTag:null,Wr=function r(e,t,n,o){var a=t||{};if($(a,"quoteStyle")&&a.quoteStyle!=="single"&&a.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if($(a,"maxStringLength")&&(typeof a.maxStringLength=="number"?a.maxStringLength<0&&a.maxStringLength!==1/0:a.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var i=$(a,"customInspect")?a.customInspect:!0;if(typeof i!="boolean"&&i!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if($(a,"indent")&&a.indent!==null&&a.indent!=="	"&&!(parseInt(a.indent,10)===a.indent&&a.indent>0))throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');if(typeof e=="undefined")return"undefined";if(e===null)return"null";if(typeof e=="boolean")return e?"true":"false";if(typeof e=="string")return qe(e,a);if(typeof e=="number")return e===0?1/0/e>0?"0":"-0":String(e);if(typeof e=="bigint")return String(e)+"n";var l=typeof a.depth=="undefined"?5:a.depth;if(typeof n=="undefined"&&(n=0),n>=l&&l>0&&typeof e=="object")return we(e)?"[Array]":"[Object]";var u=at(a,n);if(typeof o=="undefined")o=[];else if(He(o,e)>=0)return"[Circular]";function f(A,C,Z){if(C&&(o=o.slice(),o.push(C)),Z){var E={depth:a.depth};return $(a,"quoteStyle")&&(E.quoteStyle=a.quoteStyle),r(A,E,n+1,o)}return r(A,a,n+1,o)}if(typeof e=="function"){var s=Jr(e),y=ie(e,f);return"[Function"+(s?": "+s:" (anonymous)")+"]"+(y.length>0?" { "+y.join(", ")+" }":"")}if(je(e)){var d=q?String(e).replace(/^(Symbol\(.*\))_[^)]*$/,"$1"):be.call(e);return typeof e=="object"&&!q?Q(d):d}if(rt(e)){for(var p="<"+String(e.nodeName).toLowerCase(),m=e.attributes||[],h=0;h<m.length;h++)p+=" "+m[h].name+"="+ze(Ur(m[h].value),"double",a);return p+=">",e.childNodes&&e.childNodes.length&&(p+="..."),p+="</"+String(e.nodeName).toLowerCase()+">",p}if(we(e)){if(e.length===0)return"[]";var g=ie(e,f);return u&&!nt(g)?"["+Pe(g,u)+"]":"[ "+g.join(", ")+" ]"}if(Gr(e)){var k=ie(e,f);return k.length===0?"["+String(e)+"]":"{ ["+String(e)+"] "+k.join(", ")+" }"}if(typeof e=="object"&&i){if(Ae&&typeof e[Ae]=="function")return e[Ae]();if(i!=="symbol"&&typeof e.inspect=="function")return e.inspect()}if(Kr(e)){var B=[];return xr.call(e,function(A,C){B.push(f(C,e,!0)+" => "+f(A,e))}),Qe("Map",ae.call(e),B,u)}if(Zr(e)){var K=[];return Ir.call(e,function(A){K.push(f(A,e))}),Qe("Set",oe.call(e),K,u)}if(Yr(e))return Ee("WeakMap");if(et(e))return Ee("WeakSet");if(Xr(e))return Ee("WeakRef");if(jr(e))return Q(f(Number(e)));if(qr(e))return Q(f(he.call(e)));if(Hr(e))return Q(Cr.call(e));if(zr(e))return Q(f(String(e)));if(!Vr(e)&&!Lr(e)){var V=ie(e,f),Y=Ge?Ge(e)===Object.prototype:e instanceof Object||e.constructor===Object,L=e instanceof Object?"":"null prototype",X=!Y&&O&&Object(e)===e&&O in e?N(e).slice(8,-1):L?"Object":"",G=Y||typeof e.constructor!="function"?"":e.constructor.name?e.constructor.name+" ":"",R=G+(X||L?"["+[].concat(X||[],L||[]).join(": ")+"] ":"");return V.length===0?R+"{}":u?R+"{"+Pe(V,u)+"}":R+"{ "+V.join(", ")+" }"}return String(e)};function ze(r,e,t){var n=(t.quoteStyle||e)==="double"?'"':"'";return n+r+n}function Ur(r){return String(r).replace(/"/g,"&quot;")}function we(r){return N(r)==="[object Array]"&&(!O||!(typeof r=="object"&&O in r))}function Vr(r){return N(r)==="[object Date]"&&(!O||!(typeof r=="object"&&O in r))}function Lr(r){return N(r)==="[object RegExp]"&&(!O||!(typeof r=="object"&&O in r))}function Gr(r){return N(r)==="[object Error]"&&(!O||!(typeof r=="object"&&O in r))}function zr(r){return N(r)==="[object String]"&&(!O||!(typeof r=="object"&&O in r))}function jr(r){return N(r)==="[object Number]"&&(!O||!(typeof r=="object"&&O in r))}function Hr(r){return N(r)==="[object Boolean]"&&(!O||!(typeof r=="object"&&O in r))}function je(r){if(q)return r&&typeof r=="object"&&r instanceof Symbol;if(typeof r=="symbol")return!0;if(!r||typeof r!="object"||!be)return!1;try{return be.call(r),!0}catch{}return!1}function qr(r){if(!r||typeof r!="object"||!he)return!1;try{return he.call(r),!0}catch{}return!1}var Qr=Object.prototype.hasOwnProperty||function(r){return r in this};function $(r,e){return Qr.call(r,e)}function N(r){return Mr.call(r)}function Jr(r){if(r.name)return r.name;var e=Tr.call(Dr.call(r),/^function\s*([\w$]+)/);return e?e[1]:null}function He(r,e){if(r.indexOf)return r.indexOf(e);for(var t=0,n=r.length;t<n;t++)if(r[t]===e)return t;return-1}function Kr(r){if(!ae||!r||typeof r!="object")return!1;try{ae.call(r);try{oe.call(r)}catch{return!0}return r instanceof Map}catch{}return!1}function Yr(r){if(!j||!r||typeof r!="object")return!1;try{j.call(r,j);try{H.call(r,H)}catch{return!0}return r instanceof WeakMap}catch{}return!1}function Xr(r){if(!Le||!r||typeof r!="object")return!1;try{return Le.call(r),!0}catch{}return!1}function Zr(r){if(!oe||!r||typeof r!="object")return!1;try{oe.call(r);try{ae.call(r)}catch{return!0}return r instanceof Set}catch{}return!1}function et(r){if(!H||!r||typeof r!="object")return!1;try{H.call(r,H);try{j.call(r,j)}catch{return!0}return r instanceof WeakSet}catch{}return!1}function rt(r){return!r||typeof r!="object"?!1:typeof HTMLElement!="undefined"&&r instanceof HTMLElement?!0:typeof r.nodeName=="string"&&typeof r.getAttribute=="function"}function qe(r,e){if(r.length>e.maxStringLength){var t=r.length-e.maxStringLength,n="... "+t+" more character"+(t>1?"s":"");return qe(r.slice(0,e.maxStringLength),e)+n}var o=r.replace(/(['\\])/g,"\\$1").replace(/[\x00-\x1f]/g,tt);return ze(o,"single",e)}function tt(r){var e=r.charCodeAt(0),t={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return t?"\\"+t:"\\x"+(e<16?"0":"")+e.toString(16).toUpperCase()}function Q(r){return"Object("+r+")"}function Ee(r){return r+" { ? }"}function Qe(r,e,t,n){var o=n?Pe(t,n):t.join(", ");return r+" ("+e+") {"+o+"}"}function nt(r){for(var e=0;e<r.length;e++)if(He(r[e],`
`)>=0)return!1;return!0}function at(r,e){var t;if(r.indent==="	")t="	";else if(typeof r.indent=="number"&&r.indent>0)t=Array(r.indent+1).join(" ");else return null;return{base:t,prev:Array(e+1).join(t)}}function Pe(r,e){if(r.length===0)return"";var t=`
`+e.prev+e.base;return t+r.join(","+t)+`
`+e.prev}function ie(r,e){var t=we(r),n=[];if(t){n.length=r.length;for(var o=0;o<r.length;o++)n[o]=$(r,o)?e(r[o],r):""}var a=typeof Se=="function"?Se(r):[],i;if(q){i={};for(var l=0;l<a.length;l++)i["$"+a[l]]=a[l]}for(var u in r)!$(r,u)||t&&String(Number(u))===u&&u<r.length||q&&i["$"+u]instanceof Symbol||(/[^\w$]/.test(u)?n.push(e(u,r)+": "+e(r[u],r)):n.push(u+": "+e(r[u],r)));if(typeof Se=="function")for(var f=0;f<a.length;f++)_r.call(r,a[f])&&n.push("["+e(a[f])+"]: "+e(r[a[f]],r));return n}var Ne=ye,W=Pr,ot=Wr,it=Ne("%TypeError%"),le=Ne("%WeakMap%",!0),fe=Ne("%Map%",!0),lt=W("WeakMap.prototype.get",!0),ft=W("WeakMap.prototype.set",!0),ct=W("WeakMap.prototype.has",!0),ut=W("Map.prototype.get",!0),pt=W("Map.prototype.set",!0),st=W("Map.prototype.has",!0),Fe=function(r,e){for(var t=r,n;(n=t.next)!==null;t=n)if(n.key===e)return t.next=n.next,n.next=r.next,r.next=n,n},yt=function(r,e){var t=Fe(r,e);return t&&t.value},dt=function(r,e,t){var n=Fe(r,e);n?n.value=t:r.next={key:e,next:r.next,value:t}},mt=function(r,e){return!!Fe(r,e)},vt=function(){var e,t,n,o={assert:function(a){if(!o.has(a))throw new it("Side channel does not contain "+ot(a))},get:function(a){if(le&&a&&(typeof a=="object"||typeof a=="function")){if(e)return lt(e,a)}else if(fe){if(t)return ut(t,a)}else if(n)return yt(n,a)},has:function(a){if(le&&a&&(typeof a=="object"||typeof a=="function")){if(e)return ct(e,a)}else if(fe){if(t)return st(t,a)}else if(n)return mt(n,a);return!1},set:function(a,i){le&&a&&(typeof a=="object"||typeof a=="function")?(e||(e=new le),ft(e,a,i)):fe?(t||(t=new fe),pt(t,a,i)):(n||(n={key:{},next:null}),dt(n,a,i))}};return o},gt=String.prototype.replace,ht=/%20/g,$e={RFC1738:"RFC1738",RFC3986:"RFC3986"},xe={default:$e.RFC3986,formatters:{RFC1738:function(r){return gt.call(r,ht,"+")},RFC3986:function(r){return String(r)}},RFC1738:$e.RFC1738,RFC3986:$e.RFC3986},St=xe,Ie=Object.prototype.hasOwnProperty,x=Array.isArray,w=function(){for(var r=[],e=0;e<256;++e)r.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return r}(),bt=function(e){for(;e.length>1;){var t=e.pop(),n=t.obj[t.prop];if(x(n)){for(var o=[],a=0;a<n.length;++a)typeof n[a]!="undefined"&&o.push(n[a]);t.obj[t.prop]=o}}},Je=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)typeof e[o]!="undefined"&&(n[o]=e[o]);return n},Ot=function r(e,t,n){if(!t)return e;if(typeof t!="object"){if(x(e))e.push(t);else if(e&&typeof e=="object")(n&&(n.plainObjects||n.allowPrototypes)||!Ie.call(Object.prototype,t))&&(e[t]=!0);else return[e,t];return e}if(!e||typeof e!="object")return[e].concat(t);var o=e;return x(e)&&!x(t)&&(o=Je(e,n)),x(e)&&x(t)?(t.forEach(function(a,i){if(Ie.call(e,i)){var l=e[i];l&&typeof l=="object"&&a&&typeof a=="object"?e[i]=r(l,a,n):e.push(a)}else e[i]=a}),e):Object.keys(t).reduce(function(a,i){var l=t[i];return Ie.call(a,i)?a[i]=r(a[i],l,n):a[i]=l,a},o)},At=function(e,t){return Object.keys(t).reduce(function(n,o){return n[o]=t[o],n},e)},wt=function(r,e,t){var n=r.replace(/\+/g," ");if(t==="iso-8859-1")return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch{return n}},Et=function(e,t,n,o,a){if(e.length===0)return e;var i=e;if(typeof e=="symbol"?i=Symbol.prototype.toString.call(e):typeof e!="string"&&(i=String(e)),n==="iso-8859-1")return escape(i).replace(/%u[0-9a-f]{4}/gi,function(s){return"%26%23"+parseInt(s.slice(2),16)+"%3B"});for(var l="",u=0;u<i.length;++u){var f=i.charCodeAt(u);if(f===45||f===46||f===95||f===126||f>=48&&f<=57||f>=65&&f<=90||f>=97&&f<=122||a===St.RFC1738&&(f===40||f===41)){l+=i.charAt(u);continue}if(f<128){l=l+w[f];continue}if(f<2048){l=l+(w[192|f>>6]+w[128|f&63]);continue}if(f<55296||f>=57344){l=l+(w[224|f>>12]+w[128|f>>6&63]+w[128|f&63]);continue}u+=1,f=65536+((f&1023)<<10|i.charCodeAt(u)&1023),l+=w[240|f>>18]+w[128|f>>12&63]+w[128|f>>6&63]+w[128|f&63]}return l},Pt=function(e){for(var t=[{obj:{o:e},prop:"o"}],n=[],o=0;o<t.length;++o)for(var a=t[o],i=a.obj[a.prop],l=Object.keys(i),u=0;u<l.length;++u){var f=l[u],s=i[f];typeof s=="object"&&s!==null&&n.indexOf(s)===-1&&(t.push({obj:i,prop:f}),n.push(s))}return bt(t),e},Nt=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},Ft=function(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},$t=function(e,t){return[].concat(e,t)},xt=function(e,t){if(x(e)){for(var n=[],o=0;o<e.length;o+=1)n.push(t(e[o]));return n}return t(e)},Ke={arrayToObject:Je,assign:At,combine:$t,compact:Pt,decode:wt,encode:Et,isBuffer:Ft,isRegExp:Nt,maybeMap:xt,merge:Ot},Ye=vt,ke=Ke,J=xe,It=Object.prototype.hasOwnProperty,Xe={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},I=Array.isArray,kt=String.prototype.split,Bt=Array.prototype.push,Ze=function(r,e){Bt.apply(r,I(e)?e:[e])},Rt=Date.prototype.toISOString,er=J.default,b={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:ke.encode,encodeValuesOnly:!1,format:er,formatter:J.formatters[er],indices:!1,serializeDate:function(e){return Rt.call(e)},skipNulls:!1,strictNullHandling:!1},Ct=function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"},Be={},Mt=function r(e,t,n,o,a,i,l,u,f,s,y,d,p,m,h){for(var g=e,k=h,B=0,K=!1;(k=k.get(Be))!==void 0&&!K;){var V=k.get(e);if(B+=1,typeof V!="undefined"){if(V===B)throw new RangeError("Cyclic object value");K=!0}typeof k.get(Be)=="undefined"&&(B=0)}if(typeof l=="function"?g=l(t,g):g instanceof Date?g=s(g):n==="comma"&&I(g)&&(g=ke.maybeMap(g,function(Ce){return Ce instanceof Date?s(Ce):Ce})),g===null){if(o)return i&&!p?i(t,b.encoder,m,"key",y):t;g=""}if(Ct(g)||ke.isBuffer(g)){if(i){var Y=p?t:i(t,b.encoder,m,"key",y);if(n==="comma"&&p){for(var L=kt.call(String(g),","),X="",G=0;G<L.length;++G)X+=(G===0?"":",")+d(i(L[G],b.encoder,m,"value",y));return[d(Y)+"="+X]}return[d(Y)+"="+d(i(g,b.encoder,m,"value",y))]}return[d(t)+"="+d(String(g))]}var R=[];if(typeof g=="undefined")return R;var A;if(n==="comma"&&I(g))A=[{value:g.length>0?g.join(",")||null:void 0}];else if(I(l))A=l;else{var C=Object.keys(g);A=u?C.sort(u):C}for(var Z=0;Z<A.length;++Z){var E=A[Z],tr=typeof E=="object"&&E.value!==void 0?E.value:g[E];if(!(a&&tr===null)){var ln=I(g)?typeof n=="function"?n(t,E):t:t+(f?"."+E:"["+E+"]");h.set(e,B);var nr=Ye();nr.set(Be,h),Ze(R,r(tr,ln,n,o,a,i,l,u,f,s,y,d,p,m,nr))}}return R},Dt=function(e){if(!e)return b;if(e.encoder!==null&&e.encoder!==void 0&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");var t=e.charset||b.charset;if(typeof e.charset!="undefined"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=J.default;if(typeof e.format!="undefined"){if(!It.call(J.formatters,e.format))throw new TypeError("Unknown format option provided.");n=e.format}var o=J.formatters[n],a=b.filter;return(typeof e.filter=="function"||I(e.filter))&&(a=e.filter),{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:b.addQueryPrefix,allowDots:typeof e.allowDots=="undefined"?b.allowDots:!!e.allowDots,charset:t,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:b.charsetSentinel,delimiter:typeof e.delimiter=="undefined"?b.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:b.encode,encoder:typeof e.encoder=="function"?e.encoder:b.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:b.encodeValuesOnly,filter:a,format:n,formatter:o,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:b.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:b.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:b.strictNullHandling}},Tt=function(r,e){var t=r,n=Dt(e),o,a;typeof n.filter=="function"?(a=n.filter,t=a("",t)):I(n.filter)&&(a=n.filter,o=a);var i=[];if(typeof t!="object"||t===null)return"";var l;e&&e.arrayFormat in Xe?l=e.arrayFormat:e&&"indices"in e?l=e.indices?"indices":"repeat":l="indices";var u=Xe[l];o||(o=Object.keys(t)),n.sort&&o.sort(n.sort);for(var f=Ye(),s=0;s<o.length;++s){var y=o[s];n.skipNulls&&t[y]===null||Ze(i,Mt(t[y],y,u,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.format,n.formatter,n.encodeValuesOnly,n.charset,f))}var d=i.join(n.delimiter),p=n.addQueryPrefix===!0?"?":"";return n.charsetSentinel&&(n.charset==="iso-8859-1"?p+="utf8=%26%2310003%3B&":p+="utf8=%E2%9C%93&"),d.length>0?p+d:""},U=Ke,Re=Object.prototype.hasOwnProperty,_t=Array.isArray,S={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:U.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},Wt=function(r){return r.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},rr=function(r,e){return r&&typeof r=="string"&&e.comma&&r.indexOf(",")>-1?r.split(","):r},Ut="utf8=%26%2310003%3B",Vt="utf8=%E2%9C%93",Lt=function(e,t){var n={},o=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,a=t.parameterLimit===1/0?void 0:t.parameterLimit,i=o.split(t.delimiter,a),l=-1,u,f=t.charset;if(t.charsetSentinel)for(u=0;u<i.length;++u)i[u].indexOf("utf8=")===0&&(i[u]===Vt?f="utf-8":i[u]===Ut&&(f="iso-8859-1"),l=u,u=i.length);for(u=0;u<i.length;++u)if(u!==l){var s=i[u],y=s.indexOf("]="),d=y===-1?s.indexOf("="):y+1,p,m;d===-1?(p=t.decoder(s,S.decoder,f,"key"),m=t.strictNullHandling?null:""):(p=t.decoder(s.slice(0,d),S.decoder,f,"key"),m=U.maybeMap(rr(s.slice(d+1),t),function(h){return t.decoder(h,S.decoder,f,"value")})),m&&t.interpretNumericEntities&&f==="iso-8859-1"&&(m=Wt(m)),s.indexOf("[]=")>-1&&(m=_t(m)?[m]:m),Re.call(n,p)?n[p]=U.combine(n[p],m):n[p]=m}return n},Gt=function(r,e,t,n){for(var o=n?e:rr(e,t),a=r.length-1;a>=0;--a){var i,l=r[a];if(l==="[]"&&t.parseArrays)i=[].concat(o);else{i=t.plainObjects?Object.create(null):{};var u=l.charAt(0)==="["&&l.charAt(l.length-1)==="]"?l.slice(1,-1):l,f=parseInt(u,10);!t.parseArrays&&u===""?i={0:o}:!isNaN(f)&&l!==u&&String(f)===u&&f>=0&&t.parseArrays&&f<=t.arrayLimit?(i=[],i[f]=o):i[u]=o}o=i}return o},zt=function(e,t,n,o){if(!!e){var a=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/,l=/(\[[^[\]]*])/g,u=n.depth>0&&i.exec(a),f=u?a.slice(0,u.index):a,s=[];if(f){if(!n.plainObjects&&Re.call(Object.prototype,f)&&!n.allowPrototypes)return;s.push(f)}for(var y=0;n.depth>0&&(u=l.exec(a))!==null&&y<n.depth;){if(y+=1,!n.plainObjects&&Re.call(Object.prototype,u[1].slice(1,-1))&&!n.allowPrototypes)return;s.push(u[1])}return u&&s.push("["+a.slice(u.index)+"]"),Gt(s,t,n,o)}},jt=function(e){if(!e)return S;if(e.decoder!==null&&e.decoder!==void 0&&typeof e.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof e.charset!="undefined"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=typeof e.charset=="undefined"?S.charset:e.charset;return{allowDots:typeof e.allowDots=="undefined"?S.allowDots:!!e.allowDots,allowPrototypes:typeof e.allowPrototypes=="boolean"?e.allowPrototypes:S.allowPrototypes,allowSparse:typeof e.allowSparse=="boolean"?e.allowSparse:S.allowSparse,arrayLimit:typeof e.arrayLimit=="number"?e.arrayLimit:S.arrayLimit,charset:t,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:S.charsetSentinel,comma:typeof e.comma=="boolean"?e.comma:S.comma,decoder:typeof e.decoder=="function"?e.decoder:S.decoder,delimiter:typeof e.delimiter=="string"||U.isRegExp(e.delimiter)?e.delimiter:S.delimiter,depth:typeof e.depth=="number"||e.depth===!1?+e.depth:S.depth,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities=="boolean"?e.interpretNumericEntities:S.interpretNumericEntities,parameterLimit:typeof e.parameterLimit=="number"?e.parameterLimit:S.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects=="boolean"?e.plainObjects:S.plainObjects,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:S.strictNullHandling}},Ht=function(r,e){var t=jt(e);if(r===""||r===null||typeof r=="undefined")return t.plainObjects?Object.create(null):{};for(var n=typeof r=="string"?Lt(r,t):r,o=t.plainObjects?Object.create(null):{},a=Object.keys(n),i=0;i<a.length;++i){var l=a[i],u=zt(l,n[l],t,typeof r=="string");o=U.merge(o,u,t)}return t.allowSparse===!0?o:U.compact(o)},qt=Tt,Qt=Ht,Jt=xe,Kt={formats:Jt,parse:Qt,stringify:qt};const Yt=["colspan"],Xt=[c.createElementVNode("div",null,null,-1)],Zt=c.defineComponent({props:{columnsLength:{type:Number,required:!0}},setup(r){const e=Math.floor(Math.random()*10)+1;return(t,n)=>(c.openBlock(),c.createElementBlock("tr",null,[c.createElementVNode("td",{colspan:r.columnsLength,class:c.normalizeClass(["vst-loading-row",`vst-loading-row-${e}`])},Xt,10,Yt)]))}}),en={class:"vst"},rn={key:0},tn=["onClick"],nn=["colspan"],an=["colspan"],on={key:0,class:"vst-pagination mt-3"};return c.defineComponent({props:{columns:{type:Array,required:!0},source:{type:[String,Function],required:!0},perPage:{type:Number,default:25}},setup(r,{expose:e}){const t=r,n=c.ref(1),o=c.ref([]),a=c.ref("initial"),i=c.ref({}),l=async function(d=1){const p={per_page:t.perPage,page:d},m=Object.keys(i.value);m.length&&(p.order=m.map(g=>({field:g,direction:i.value[g]}))),a.value="syncing",o.value=[];let h;typeof t.source=="string"?h=await(await fetch(`${t.source}?${Kt.stringify(p,{arrayFormat:"brackets"})}`)).json():h=await t.source(p),o.value=h,a.value="fetched"},u=y=>{i.value[y]==="asc"?i.value={[y]:"desc"}:i.value[y]==="desc"?i.value={}:i.value={[y]:"asc"}},f=()=>{n.value===1?l(1):n.value=1},s=()=>{l(n.value)};return c.watch(n,l),c.watch(i,f),c.watch(()=>t.perPage,f),l(),e({refetch:f,reload:s,rows:o}),(y,d)=>(c.openBlock(),c.createElementBlock("table",en,[r.columns.length?(c.openBlock(),c.createElementBlock("thead",rn,[c.createElementVNode("tr",null,[(c.openBlock(!0),c.createElementBlock(c.Fragment,null,c.renderList(r.columns,p=>(c.openBlock(),c.createElementBlock("th",{key:p.key,class:c.normalizeClass(["vst-th",{"vst-orderable":p.orderable}]),onClick:c.withModifiers(m=>p.orderable?u(p.key):null,["prevent"])},[c.renderSlot(y.$slots,`head:${p.key}`,{column:p},()=>[c.createTextVNode(c.toDisplayString(p.title),1)]),p.orderable?(c.openBlock(),c.createElementBlock("a",{key:0,href:"#",class:c.normalizeClass(`vst-orderable-toggle ${i.value[p.key]||""}`)},null,2)):c.createCommentVNode("",!0)],10,tn))),128))])])):c.createCommentVNode("",!0),c.createElementVNode("tbody",null,[(c.openBlock(!0),c.createElementBlock(c.Fragment,null,c.renderList(o.value,(p,m)=>c.renderSlot(y.$slots,"row",{row:p,index:m,columns:r.columns},()=>[(c.openBlock(),c.createElementBlock("tr",{key:p.id||m},[(c.openBlock(!0),c.createElementBlock(c.Fragment,null,c.renderList(r.columns,h=>(c.openBlock(),c.createElementBlock("td",{key:h.key},[c.renderSlot(y.$slots,`cell:${h.key}`,{row:p,value:p[h.key],column:h,index:m},()=>[c.createTextVNode(c.toDisplayString(p[h.key]),1)])]))),128))]))])),256)),a.value==="fetched"&&o.value.length===0?c.renderSlot(y.$slots,"row:empty",{key:0},()=>[c.createElementVNode("tr",null,[c.createElementVNode("td",{colspan:r.columns.length}," No records found ",8,nn)])]):c.createCommentVNode("",!0),a.value==="syncing"?c.renderSlot(y.$slots,"row:loading",{key:1},()=>[(c.openBlock(!0),c.createElementBlock(c.Fragment,null,c.renderList(r.perPage,(p,m)=>(c.openBlock(),c.createBlock(Zt,{key:`loadingRow${m}`,"columns-length":r.columns.length},null,8,["columns-length"]))),128))]):c.createCommentVNode("",!0)]),c.createElementVNode("tfoot",null,[c.createElementVNode("tr",null,[c.createElementVNode("td",{colspan:r.columns.length},[c.renderSlot(y.$slots,"pagination",{page:n.value,rows:o.value},()=>[n.value>1||o.value.length===r.perPage||a.value==="syncing"?(c.openBlock(),c.createElementBlock("ul",on,[c.createElementVNode("li",{class:c.normalizeClass(["vst-page-item",{disabled:n.value===1||a.value==="syncing"}])},[c.createElementVNode("a",{class:"vst-page-link",onClick:d[0]||(d[0]=c.withModifiers(p=>n.value-=1,["prevent"]))},"\u2190")],2),c.createElementVNode("li",{class:c.normalizeClass(["vst-page-item",{disabled:o.value.length<r.perPage||a.value==="syncing"}])},[c.createElementVNode("a",{class:"vst-page-link",onClick:d[1]||(d[1]=c.withModifiers(p=>n.value+=1,["prevent"]))},"\u2192")],2)])):c.createCommentVNode("",!0)])],8,an)])])]))}})});