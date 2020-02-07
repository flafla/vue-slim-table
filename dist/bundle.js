!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueSlimTable=t():e.VueSlimTable=t()}(window,(function(){return(()=>{var e={56:(e,t,r)=>{"use strict";r.r(t);r(145);var n=r(129),a=r.n(n),i=r(582);const s=function(e,t,r,n,a,i,s,o){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=r,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=l):a&&(l=o?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:c}}({props:{columns:{type:Array,required:!0},remoteUrl:String,perPage:{type:Number,default:25},customFilters:{type:Object,default:()=>({})},onFetchedCallback:Function,wrapperClass:String,tableClass:String,emptyRowsClass:String,emptyRowsText:{type:String,default:"No records found"},totalRowsCountKey:{type:String,default:"totalCount"}},data:()=>({page:1,rows:[],rowsTotalCount:0,syncState:"initial"}),methods:{fetchData(e){const t=a().stringify({per_page:this.perPage,page:e,...this.customFilters},{arrayFormat:"brackets"});this.syncState="syncing",this.rows=[],fetch(`${this.remoteUrl}?${t}`).then(e=>e.json()).then(e=>{this.rows=e.rows,this.rowsTotalCount=Math.ceil(e[this.totalRowsCountKey]/this.perPage),this.onFetchedCallback&&this.onFetchedCallback(e),this.syncState="fetched"})}},watch:{page(e){this.fetchData(e)},customFilters(){1===this.page?this.fetchData(1):this.page=1}},components:{paginate:r.n(i)()},mounted(){this.fetchData(this.page)}},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.wrapperClass},[r("table",{class:e.tableClass},[r("thead",[r("tr",e._l(e.columns,(function(t){return r("th",[e._v(e._s(t.title))])})),0)]),e._v(" "),r("tbody",[e._l(e.rows,(function(t){return r("tr",e._l(e.columns,(function(n){return r("td",[n.component?r(n.component,{tag:"component",attrs:{params:t,value:t[n.key]}}):[e._v(e._s(t[n.key]))]],2)})),0)})),e._v(" "),"fetched"==e.syncState&&0===e.rows.length?r("tr",[r("td",{staticClass:"text-center ",class:e.emptyRowsClass,attrs:{colspan:e.columns.length}},[e._v("\n          "+e._s(e.emptyRowsText)+"\n        ")])]):e._e(),e._v(" "),"syncing"==e.syncState?e._l(e.perPage,(function(t){return r("tr",[r("td",{staticClass:"vue-slim-tables-loading-row",attrs:{colspan:e.columns.length}},[r("div")])])})):e._e()],2)]),e._v(" "),e.rowsTotalCount>1?r("paginate",{attrs:{"page-count":e.rowsTotalCount,"container-class":"pagination mt-3","page-class":"page-item","page-link-class":"page-link","prev-class":"page-item","prev-link-class":"page-link","next-class":"page-item","next-link-class":"page-link","prev-text":"<-","next-text":"->"},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}}):e._e()],1)}),[],!1,null,null,null).exports;r.d(t,{default:()=>o});const o=s},145:()=>{},798:e=>{"use strict";var t=String.prototype.replace,r=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return t.call(e,r,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},129:(e,t,r)=>{"use strict";var n=r(261),a=r(235),i=r(798);e.exports={formats:i,parse:a,stringify:n}},235:(e,t,r)=>{"use strict";var n=r(769),a=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},s=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},o=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/g,s=/(\[[^[\]]*])/.exec(n),o=s?n.slice(0,s.index):n,l=[];if(o){if(!r.plainObjects&&a.call(Object.prototype,o)&&!r.allowPrototypes)return;l.push(o)}for(var c=0;null!==(s=i.exec(n))&&c<r.depth;){if(c+=1,!r.plainObjects&&a.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(s[1])}return s&&l.push("["+n.slice(s.index)+"]"),function(e,t,r){for(var n=t,a=e.length-1;a>=0;--a){var i,s=e[a];if("[]"===s&&r.parseArrays)i=[].concat(n);else{i=r.plainObjects?Object.create(null):{};var o="["===s.charAt(0)&&"]"===s.charAt(s.length-1)?s.slice(1,-1):s,l=parseInt(o,10);r.parseArrays||""!==o?!isNaN(l)&&s!==o&&String(l)===o&&l>=0&&r.parseArrays&&l<=r.arrayLimit?(i=[])[l]=n:i[o]=n:i={0:n}}n=i}return n}(l,t,r)}};e.exports=function(e,t){var r=function(e){if(!e)return i;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?i.charset:e.charset;return{allowDots:void 0===e.allowDots?i.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:i.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:i.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:i.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:i.comma,decoder:"function"==typeof e.decoder?e.decoder:i.decoder,delimiter:"string"==typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:i.delimiter,depth:"number"==typeof e.depth?e.depth:i.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:i.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:i.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:i.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:i.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var l="string"==typeof e?function(e,t){var r,o={},l=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,c=t.parameterLimit===1/0?void 0:t.parameterLimit,u=l.split(t.delimiter,c),d=-1,p=t.charset;if(t.charsetSentinel)for(r=0;r<u.length;++r)0===u[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===u[r]?p="utf-8":"utf8=%26%2310003%3B"===u[r]&&(p="iso-8859-1"),d=r,r=u.length);for(r=0;r<u.length;++r)if(r!==d){var f,g,h=u[r],y=h.indexOf("]="),v=-1===y?h.indexOf("="):y+1;-1===v?(f=t.decoder(h,i.decoder,p),g=t.strictNullHandling?null:""):(f=t.decoder(h.slice(0,v),i.decoder,p),g=t.decoder(h.slice(v+1),i.decoder,p)),g&&t.interpretNumericEntities&&"iso-8859-1"===p&&(g=s(g)),g&&t.comma&&g.indexOf(",")>-1&&(g=g.split(",")),a.call(o,f)?o[f]=n.combine(o[f],g):o[f]=g}return o}(e,r):e,c=r.plainObjects?Object.create(null):{},u=Object.keys(l),d=0;d<u.length;++d){var p=u[d],f=o(p,l[p],r);c=n.merge(c,f,r)}return n.compact(c)}},261:(e,t,r)=>{"use strict";var n=r(769),a=r(798),i=Object.prototype.hasOwnProperty,s={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},o=Array.isArray,l=Array.prototype.push,c=function(e,t){l.apply(e,o(t)?t:[t])},u=Date.prototype.toISOString,d={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,formatter:a.formatters[a.default],indices:!1,serializeDate:function(e){return u.call(e)},skipNulls:!1,strictNullHandling:!1},p=function e(t,r,a,i,s,l,u,p,f,g,h,y,v){var m=t;if("function"==typeof u?m=u(r,m):m instanceof Date?m=g(m):"comma"===a&&o(m)&&(m=m.join(",")),null===m){if(i)return l&&!y?l(r,d.encoder,v):r;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||n.isBuffer(m))return l?[h(y?r:l(r,d.encoder,v))+"="+h(l(m,d.encoder,v))]:[h(r)+"="+h(String(m))];var b,C=[];if(void 0===m)return C;if(o(u))b=u;else{var x=Object.keys(m);b=p?x.sort(p):x}for(var k=0;k<b.length;++k){var P=b[k];s&&null===m[P]||(o(m)?c(C,e(m[P],"function"==typeof a?a(r,P):r,a,i,s,l,u,p,f,g,h,y,v)):c(C,e(m[P],r+(f?"."+P:"["+P+"]"),a,i,s,l,u,p,f,g,h,y,v)))}return C};e.exports=function(e,t){var r,n=e,l=function(e){if(!e)return d;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||d.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=a.default;if(void 0!==e.format){if(!i.call(a.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=a.formatters[r],s=d.filter;return("function"==typeof e.filter||o(e.filter))&&(s=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:d.addQueryPrefix,allowDots:void 0===e.allowDots?d.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:d.charsetSentinel,delimiter:void 0===e.delimiter?d.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:d.encode,encoder:"function"==typeof e.encoder?e.encoder:d.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:d.encodeValuesOnly,filter:s,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:d.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:d.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:d.strictNullHandling}}(t);"function"==typeof l.filter?n=(0,l.filter)("",n):o(l.filter)&&(r=l.filter);var u,f=[];if("object"!=typeof n||null===n)return"";u=t&&t.arrayFormat in s?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var g=s[u];r||(r=Object.keys(n)),l.sort&&r.sort(l.sort);for(var h=0;h<r.length;++h){var y=r[h];l.skipNulls&&null===n[y]||c(f,p(n[y],y,g,l.strictNullHandling,l.skipNulls,l.encode?l.encoder:null,l.filter,l.sort,l.allowDots,l.serializeDate,l.formatter,l.encodeValuesOnly,l.charset))}var v=f.join(l.delimiter),m=!0===l.addQueryPrefix?"?":"";return l.charsetSentinel&&("iso-8859-1"===l.charset?m+="utf8=%26%2310003%3B&":m+="utf8=%E2%9C%93&"),v.length>0?m+v:""}},769:e=>{"use strict";var t=Object.prototype.hasOwnProperty,r=Array.isArray,n=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:a,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],n=[],a=0;a<t.length;++a)for(var i=t[a],s=i.obj[i.prop],o=Object.keys(s),l=0;l<o.length;++l){var c=o[l],u=s[c];"object"==typeof u&&null!==u&&-1===n.indexOf(u)&&(t.push({obj:s,prop:c}),n.push(u))}return function(e){for(;e.length>1;){var t=e.pop(),n=t.obj[t.prop];if(r(n)){for(var a=[],i=0;i<n.length;++i)void 0!==n[i]&&a.push(n[i]);t.obj[t.prop]=a}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r){if(0===e.length)return e;var a="string"==typeof e?e:String(e);if("iso-8859-1"===r)return escape(a).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var i="",s=0;s<a.length;++s){var o=a.charCodeAt(s);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?i+=a.charAt(s):o<128?i+=n[o]:o<2048?i+=n[192|o>>6]+n[128|63&o]:o<55296||o>=57344?i+=n[224|o>>12]+n[128|o>>6&63]+n[128|63&o]:(s+=1,o=65536+((1023&o)<<10|1023&a.charCodeAt(s)),i+=n[240|o>>18]+n[128|o>>12&63]+n[128|o>>6&63]+n[128|63&o])}return i},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(n,i,s){if(!i)return n;if("object"!=typeof i){if(r(n))n.push(i);else{if(!n||"object"!=typeof n)return[n,i];(s&&(s.plainObjects||s.allowPrototypes)||!t.call(Object.prototype,i))&&(n[i]=!0)}return n}if(!n||"object"!=typeof n)return[n].concat(i);var o=n;return r(n)&&!r(i)&&(o=a(n,s)),r(n)&&r(i)?(i.forEach((function(r,a){if(t.call(n,a)){var i=n[a];i&&"object"==typeof i&&r&&"object"==typeof r?n[a]=e(i,r,s):n.push(r)}else n[a]=r})),n):Object.keys(i).reduce((function(r,n){var a=i[n];return t.call(r,n)?r[n]=e(r[n],a,s):r[n]=a,r}),o)}}},582:function(e){e.exports=function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";var n=function(e){return e&&e.__esModule?e:{default:e}}(r(1));e.exports=n.default},function(e,t,r){r(2);var n=r(6)(r(7),r(8),"data-v-82963a40",null);e.exports=n.exports},function(e,t,r){var n=r(3);"string"==typeof n&&(n=[[e.id,n,""]]),r(5)(n,{}),n.locals&&(e.exports=n.locals)},function(e,t,r){(e.exports=r(4)()).push([e.id,"a[data-v-82963a40]{cursor:pointer}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(n[i]=!0)}for(a=0;a<t.length;a++){var s=t[a];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),e.push(s))}},e}},function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],a=c[n.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](n.parts[i]);for(;i<n.parts.length;i++)a.parts.push(s(n.parts[i],t))}else{var o=[];for(i=0;i<n.parts.length;i++)o.push(s(n.parts[i],t));c[n.id]={id:n.id,refs:1,parts:o}}}}function a(e){for(var t=[],r={},n=0;n<e.length;n++){var a=e[n],i=a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):t.push(r[i]={id:i,parts:[s]})}return t}function i(e){var t=document.createElement("style");return t.type="text/css",function(e,t){var r=p(),n=h[h.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),h.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}(e,t),t}function s(e,t){var r,n,a;if(t.singleton){var s=g++;r=f||(f=i(t)),n=o.bind(null,r,s,!1),a=o.bind(null,r,s,!0)}else r=i(t),n=l.bind(null,r),a=function(){!function(e){e.parentNode.removeChild(e);var t=h.indexOf(e);t>=0&&h.splice(t,1)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else a()}}function o(e,t,r,n){var a=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,a);else{var i=document.createTextNode(a),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function l(e,t){var r=t.css,n=t.media,a=t.sourceMap;if(n&&e.setAttribute("media",n),a&&(r+="\n/*# sourceURL="+a.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var c={},u=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}},d=u((function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())})),p=u((function(){return document.head||document.getElementsByTagName("head")[0]})),f=null,g=0,h=[];e.exports=function(e,t){void 0===(t=t||{}).singleton&&(t.singleton=d()),void 0===t.insertAt&&(t.insertAt="bottom");var r=a(e);return n(r,t),function(e){for(var i=[],s=0;s<r.length;s++){var o=r[s];(l=c[o.id]).refs--,i.push(l)}for(e&&n(a(e),t),s=0;s<i.length;s++){var l;if(0===(l=i[s]).refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete c[l.id]}}}};var y=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,r,n){var a,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(a=e,i=e.default);var o="function"==typeof i?i.options:i;if(t&&(o.render=t.render,o.staticRenderFns=t.staticRenderFns),r&&(o._scopeId=r),n){var l=o.computed||(o.computed={});Object.keys(n).forEach((function(e){var t=n[e];l[e]=function(){return t}}))}return{esModule:a,exports:i,options:o}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{value:{type:Number},pageCount:{type:Number,required:!0},forcePage:{type:Number},clickHandler:{type:Function,default:function(){}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},breakViewText:{type:String,default:"…"},containerClass:{type:String},pageClass:{type:String},pageLinkClass:{type:String},prevClass:{type:String},prevLinkClass:{type:String},nextClass:{type:String},nextLinkClass:{type:String},breakViewClass:{type:String},breakViewLinkClass:{type:String},activeClass:{type:String,default:"active"},disabledClass:{type:String,default:"disabled"},noLiSurround:{type:Boolean,default:!1},firstLastButton:{type:Boolean,default:!1},firstButtonText:{type:String,default:"First"},lastButtonText:{type:String,default:"Last"},hidePrevNext:{type:Boolean,default:!1}},beforeUpdate:function(){void 0!==this.forcePage&&this.forcePage!==this.selected&&(this.selected=this.forcePage)},computed:{selected:{get:function(){return this.value||this.innerValue},set:function(e){this.innerValue=e}},pages:function(){var e=this,t={};if(this.pageCount<=this.pageRange)for(var r=0;r<this.pageCount;r++){var n={index:r,content:r+1,selected:r===this.selected-1};t[r]=n}else{for(var a=Math.floor(this.pageRange/2),i=function(r){var n={index:r,content:r+1,selected:r===e.selected-1};t[r]=n},s=function(e){t[e]={disabled:!0,breakView:!0}},o=0;o<this.marginPages;o++)i(o);var l=0;this.selected-a>0&&(l=this.selected-1-a);var c=l+this.pageRange-1;c>=this.pageCount&&(l=(c=this.pageCount-1)-this.pageRange+1);for(var u=l;u<=c&&u<=this.pageCount-1;u++)i(u);l>this.marginPages&&s(l-1),c+1<this.pageCount-this.marginPages&&s(c+1);for(var d=this.pageCount-1;d>=this.pageCount-this.marginPages;d--)i(d)}return t}},data:function(){return{innerValue:1}},methods:{handlePageSelected:function(e){this.selected!==e&&(this.innerValue=e,this.$emit("input",e),this.clickHandler(e))},prevPage:function(){this.selected<=1||this.handlePageSelected(this.selected-1)},nextPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.selected+1)},firstPageSelected:function(){return 1===this.selected},lastPageSelected:function(){return this.selected===this.pageCount||0===this.pageCount},selectFirstPage:function(){this.selected<=1||this.handlePageSelected(1)},selectLastPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.pageCount)}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.noLiSurround?r("div",{class:e.containerClass},[e.firstLastButton?r("a",{class:[e.pageLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(t){e.selectFirstPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.selectFirstPage():null}}}):e._e(),e._v(" "),e.firstPageSelected()&&e.hidePrevNext?e._e():r("a",{class:[e.prevLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(t){e.prevPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.prevPage():null}}}),e._v(" "),e._l(e.pages,(function(t){return[t.breakView?r("a",{class:[e.pageLinkClass,e.breakViewLinkClass,t.disabled?e.disabledClass:""],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):t.disabled?r("a",{class:[e.pageLinkClass,t.selected?e.activeClass:"",e.disabledClass],attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):r("a",{class:[e.pageLinkClass,t.selected?e.activeClass:""],attrs:{tabindex:"0"},on:{click:function(r){e.handlePageSelected(t.index+1)},keyup:function(r){return"button"in r||!e._k(r.keyCode,"enter",13)?void e.handlePageSelected(t.index+1):null}}},[e._v(e._s(t.content))])]})),e._v(" "),e.lastPageSelected()&&e.hidePrevNext?e._e():r("a",{class:[e.nextLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(t){e.nextPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.nextPage():null}}}),e._v(" "),e.firstLastButton?r("a",{class:[e.pageLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(t){e.selectLastPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.selectLastPage():null}}}):e._e()],2):r("ul",{class:e.containerClass},[e.firstLastButton?r("li",{class:[e.pageClass,e.firstPageSelected()?e.disabledClass:""]},[r("a",{class:e.pageLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(t){e.selectFirstPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.selectFirstPage():null}}})]):e._e(),e._v(" "),e.firstPageSelected()&&e.hidePrevNext?e._e():r("li",{class:[e.prevClass,e.firstPageSelected()?e.disabledClass:""]},[r("a",{class:e.prevLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(t){e.prevPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.prevPage():null}}})]),e._v(" "),e._l(e.pages,(function(t){return r("li",{class:[e.pageClass,t.selected?e.activeClass:"",t.disabled?e.disabledClass:"",t.breakView?e.breakViewClass:""]},[t.breakView?r("a",{class:[e.pageLinkClass,e.breakViewLinkClass],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):t.disabled?r("a",{class:e.pageLinkClass,attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):r("a",{class:e.pageLinkClass,attrs:{tabindex:"0"},on:{click:function(r){e.handlePageSelected(t.index+1)},keyup:function(r){return"button"in r||!e._k(r.keyCode,"enter",13)?void e.handlePageSelected(t.index+1):null}}},[e._v(e._s(t.content))])])})),e._v(" "),e.lastPageSelected()&&e.hidePrevNext?e._e():r("li",{class:[e.nextClass,e.lastPageSelected()?e.disabledClass:""]},[r("a",{class:e.nextLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(t){e.nextPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.nextPage():null}}})]),e._v(" "),e.firstLastButton?r("li",{class:[e.pageClass,e.lastPageSelected()?e.disabledClass:""]},[r("a",{class:e.pageLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(t){e.selectLastPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.selectLastPage():null}}})]):e._e()],2)},staticRenderFns:[]}}])}},t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}return r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(56)})()}));