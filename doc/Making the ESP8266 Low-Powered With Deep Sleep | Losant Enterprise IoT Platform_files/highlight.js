/*! highlight.js v9.2.0 | BSD3 License | git.io/hljslicense */;!function(a){var b="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?a(exports):b&&(b.hljs=a({}),"function"==typeof define&&define.amd&&define([],function(){return b.hljs}))}(function(Q){function I(a){return a.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function C(a){return a.nodeName.toLowerCase()}function F(b,c){var a=b&&b.exec(c);return a&&0==a.index}function V(a){return/^(no-?highlight|plain|text)$/i.test(a)}function L(d){var f,b,c,a=d.className+" ";if(a+=d.parentNode?d.parentNode.className:"",b=/\blang(?:uage)?-([\w-]+)\b/i.exec(a)){return y(b[1])?b[1]:"no-highlight"}for(a=a.split(/\s+/),f=0,c=a.length;c>f;f++){if(y(a[f])||V(a[f])){return a[f]}}}function H(c,d){var a,b={};for(a in c){b[a]=c[a]}if(d){for(a in d){b[a]=d[a]}}return b}function A(b){var c=[];return function a(g,d){for(var f=g.firstChild;f;f=f.nextSibling){3==f.nodeType?d+=f.nodeValue.length:1==f.nodeType&&(c.push({event:"start",offset:d,node:f}),d=a(f,d),C(f).match(/br|hr|img|input/)||c.push({event:"stop",offset:d,node:f}))}return d}(b,0),c}function T(t,b,w){function m(){return t.length&&b.length?t[0].offset!=b[0].offset?t[0].offset<b[0].offset?t:b:"start"==b[0].event?t:b:t.length?t:b}function d(c){function a(f){return" "+f.nodeName+'="'+I(f.value)+'"'}p+="<"+C(c)+Array.prototype.map.call(c.attributes,a).join("")+">"}function x(a){p+="</"+C(a)+">"}function v(a){("start"==a.event?d:x)(a.node)}for(var E=0,p="",h=[];t.length||b.length;){var n=m();if(p+=I(w.substr(E,n[0].offset-E)),E=n[0].offset,n==t){h.reverse().forEach(x);do{v(n.splice(0,1)[0]),n=m()}while(n==t&&n.length&&n[0].offset==E);h.reverse().forEach(d)}else{"start"==n[0].event?h.push(n[0].node):h.pop(),v(n.splice(0,1)[0])}}return p+I(w.substr(E))}function D(c){function d(f){return f&&f.source||f}function a(e,f){return new RegExp(d(e),"m"+(c.cI?"i":"")+(f?"g":""))}function b(e,h){if(!e.compiled){if(e.compiled=!0,e.k=e.k||e.bK,e.k){var g={},n=function(i,f){c.cI&&(f=f.toLowerCase()),f.split(" ").forEach(function(p){var o=p.split("|");g[o[0]]=[i,o[1]?Number(o[1]):1]})};"string"==typeof e.k?n("keyword",e.k):Object.keys(e.k).forEach(function(f){n(f,e.k[f])}),e.k=g}e.lR=a(e.l||/\b\w+\b/,!0),h&&(e.bK&&(e.b="\\b("+e.bK.split(" ").join("|")+")\\b"),e.b||(e.b=/\B|\b/),e.bR=a(e.b),e.e||e.eW||(e.e=/\B|\b/),e.e&&(e.eR=a(e.e)),e.tE=d(e.e)||"",e.eW&&h.tE&&(e.tE+=(e.e?"|":"")+h.tE)),e.i&&(e.iR=a(e.i)),void 0===e.r&&(e.r=1),e.c||(e.c=[]);var l=[];e.c.forEach(function(f){f.v?f.v.forEach(function(i){l.push(H(f,i))}):l.push("self"==f?e:f)}),e.c=l,e.c.forEach(function(f){b(f,e)}),e.starts&&b(e.starts,h);var m=e.c.map(function(f){return f.bK?"\\.?("+f.b+")\\.?":f.b}).concat([e.tE,e.i]).map(d).filter(Boolean);e.t=m.length?a(m.join("|"),!0):{exec:function(){return null}}}}b(c)}function P(ai,X,am,af){function ab(b,c){for(var a=0;a<c.c.length;a++){if(F(c.c[a].bR,b)){return c.c[a]}}}function W(a,b){if(F(a.eR,b)){for(;a.endsParent&&a.parent;){a=a.parent}return a}return a.eW?W(a.parent,b):void 0}function ak(a,b){return !am&&F(b.iR,a)}function ah(b,c){var a=l.cI?c[0].toLowerCase():c[0];return b.k.hasOwnProperty(a)&&b.k[a]}function aa(h,p,d,g){var b=g?"":B.classPrefix,c='<span class="'+b,m=d?"":"</span>";return c+=h+'">',c+p+m}function ag(){if(!ad.k){return I(n)}var g="",c=0;ad.lR.lastIndex=0;for(var d=ad.lR.exec(n);d;){g+=I(n.substr(c,d.index-c));var b=ah(ad,d);b?(Z+=b[1],g+=aa(b[0],I(d[0]))):g+=I(d[0]),c=ad.lR.lastIndex,d=ad.lR.exec(n)}return g+I(n.substr(c))}function aj(){var b="string"==typeof ad.sL;if(b&&!j[ad.sL]){return I(n)}var a=b?P(ad.sL,n,!0,s[ad.sL]):K(n,ad.sL.length?ad.sL:void 0);return ad.r>0&&(Z+=a.r),b&&(s[ad.sL]=a.top),aa(a.language,a.value,!1,!0)}function al(){r+=void 0!==ad.sL?aj():ag(),n=""}function R(a,b){r+=a.cN?aa(a.cN,"",!0):"",ad=Object.create(a,{parent:{value:ad}})}function ac(g,h){if(n+=g,void 0===h){return al(),0}var c=ab(h,ad);if(c){return c.skip?n+=h:(c.eB&&(n+=h),al(),c.rB||c.eB||(n=h)),R(c,h),c.rB?0:h.length}var d=W(ad,h);if(d){var b=ad;b.skip?n+=h:(b.rE||b.eE||(n+=h),al(),b.eE&&(n=h));do{ad.cN&&(r+="</span>"),ad.skip||(Z+=ad.r),ad=ad.parent}while(ad!=d.parent);return d.starts&&R(d.starts,""),b.rE?0:h.length}if(ak(h,ad)){throw new Error('Illegal lexeme "'+h+'" for mode "'+(ad.cN||"<unnamed>")+'"')}return n+=h,h.length||1}var l=y(ai);if(!l){throw new Error('Unknown language: "'+ai+'"')}D(l);var E,ad=af||l,s={},r="";for(E=ad;E!=l;E=E.parent){E.cN&&(r=aa(E.cN,"",!0)+r)}var n="",Z=0;try{for(var Y,ae,w=0;;){if(ad.t.lastIndex=w,Y=ad.t.exec(X),!Y){break}ae=ac(X.substr(w,Y.index-w),Y[0]),w=Y.index+ae}for(ac(X.substr(w)),E=ad;E.parent;E=E.parent){E.cN&&(r+="</span>")}return{r:Z,value:r,language:ai,top:ad}}catch(f){if(-1!=f.message.indexOf("Illegal")){return{r:0,value:I(X)}}throw f}}function K(f,c){c=c||B.languages||Object.keys(j);var d={r:0,value:I(f)},b=d;return c.forEach(function(e){if(y(e)){var a=P(e,f,!1);a.language=e,a.r>b.r&&(b=a),a.r>d.r&&(b=d,d=a)}}),b.language&&(d.second_best=b),d}function O(a){return B.tabReplace&&(a=a.replace(/^((<[^>]+>|\t)+)/gm,function(b,c){return c.replace(/\t/g,B.tabReplace)})),B.useBR&&(a=a.replace(/\n/g,"<br>")),a}function G(f,g,c){var d=g?q[g]:c,b=[f.trim()];return f.match(/\bhljs\b/)||b.push("hljs"),-1===f.indexOf(d)&&b.push(d),b.join(" ").trim()}function M(f){var i=L(f);if(!V(i)){var a;B.useBR?(a=document.createElementNS("http://www.w3.org/1999/xhtml","div"),a.innerHTML=f.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):a=f;var d=a.textContent,g=i?P(i,d,!0):K(d),c=A(a);if(c.length){var b=document.createElementNS("http://www.w3.org/1999/xhtml","div");b.innerHTML=g.value,g.value=T(c,A(b),d)}g.value=O(g.value),f.innerHTML=g.value,f.className=G(f.className,i,g.language),f.result={language:g.language,re:g.r},g.second_best&&(f.second_best={language:g.second_best.language,re:g.second_best.r})}}function S(a){B=H(B,a)}function U(){if(!U.called){U.called=!0;var a=document.querySelectorAll("pre code");Array.prototype.forEach.call(a,M)}}function z(){addEventListener("DOMContentLoaded",U,!1),addEventListener("load",U,!1)}function J(c,a){var b=j[c]=a(Q);b.aliases&&b.aliases.forEach(function(d){q[d]=c})}function k(){return Object.keys(j)}function y(a){return a=(a||"").toLowerCase(),j[a]||j[q[a]]}var B={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},j={},q={};return Q.highlight=P,Q.highlightAuto=K,Q.fixMarkup=O,Q.highlightBlock=M,Q.configure=S,Q.initHighlighting=U,Q.initHighlightingOnLoad=z,Q.registerLanguage=J,Q.listLanguages=k,Q.getLanguage=y,Q.inherit=H,Q.IR="[a-zA-Z]\\w*",Q.UIR="[a-zA-Z_]\\w*",Q.NR="\\b\\d+(\\.\\d+)?",Q.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Q.BNR="\\b(0b[01]+)",Q.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Q.BE={b:"\\\\[\\s\\S]",r:0},Q.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[Q.BE]},Q.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[Q.BE]},Q.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/},Q.C=function(e,c,d){var b=Q.inherit({cN:"comment",b:e,e:c,c:[]},d||{});return b.c.push(Q.PWM),b.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),b},Q.CLCM=Q.C("//","$"),Q.CBCM=Q.C("/\\*","\\*/"),Q.HCM=Q.C("#","$"),Q.NM={cN:"number",b:Q.NR,r:0},Q.CNM={cN:"number",b:Q.CNR,r:0},Q.BNM={cN:"number",b:Q.BNR,r:0},Q.CSSNM={cN:"number",b:Q.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},Q.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[Q.BE,{b:/\[/,e:/\]/,r:0,c:[Q.BE]}]},Q.TM={cN:"title",b:Q.IR,r:0},Q.UTM={cN:"title",b:Q.UIR,r:0},Q.METHOD_GUARD={b:"\\.\\s*"+Q.UIR,r:0},Q});hljs.registerLanguage("json",function(f){var b={literal:"true false null"},h=[f.QSM,f.CNM],d={e:",",eW:!0,eE:!0,c:h,k:b},a={b:"{",e:"}",c:[{cN:"attr",b:/"/,e:/"/,c:[f.BE],i:"\\n"},f.inherit(d,{b:/:/})],i:"\\S"},g={b:"\\[",e:"\\]",c:[f.inherit(d)],i:"\\S"};return h.splice(h.length,0,a,g),{c:h,k:b,i:"\\S"}});hljs.registerLanguage("bash",function(f){var c={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)}/}]},d={cN:"string",b:/"/,e:/"/,c:[f.BE,c,{cN:"variable",b:/\$\(/,e:/\)/,c:[f.BE]}]},b={cN:"string",b:/'/,e:/'/};return{aliases:["sh","zsh"],l:/-?[a-z\.]+/,k:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"meta",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[f.inherit(f.TM,{b:/\w[\w\d_]*/})],r:0},f.HCM,d,b,c]}});hljs.registerLanguage("css",function(b){var d="[a-zA-Z-][a-zA-Z0-9_-]*",a={b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{eW:!0,eE:!0,c:[{b:/[\w-]+\(/,rB:!0,c:[{cN:"built_in",b:/[\w-]+/},{b:/\(/,e:/\)/,c:[b.ASM,b.QSM]}]},b.CSSNM,b.QSM,b.ASM,b.CBCM,{cN:"number",b:"#[0-9A-Fa-f]+"},{cN:"meta",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[b.CBCM,{cN:"selector-id",b:/#[A-Za-z0-9_-]+/},{cN:"selector-class",b:/\.[A-Za-z0-9_-]+/},{cN:"selector-attr",b:/\[/,e:/\]/,i:"$"},{cN:"selector-pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{b:"@",e:"[{;]",c:[{cN:"keyword",b:/\S+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[b.ASM,b.QSM,b.CSSNM]}]},{cN:"selector-tag",b:d,r:0},{b:"{",e:"}",i:/\S/,c:[b.CBCM,a]}]}});hljs.registerLanguage("xml",function(b){var c="[A-Za-z0-9\\._:-]+",a={eW:!0,i:/</,r:0,c:[{cN:"attr",b:c,r:0},{b:"=",r:0,c:[{cN:"string",v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s\/>]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xsl","plist"],cI:!0,c:[{cN:"meta",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},b.C("<!--","-->",{r:10}),{b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{b:/<\?(php)?/,e:/\?>/,sL:"php",c:[{b:"/\\*",e:"\\*/",skip:!0}]},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{name:"style"},c:[a],starts:{e:"</style>",rE:!0,sL:["css","xml"]}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{name:"script"},c:[a],starts:{e:"<\/script>",rE:!0,sL:["actionscript","javascript","handlebars","xml"]}},{cN:"meta",v:[{b:/<\?xml/,e:/\?>/,r:10},{b:/<\?\w+/,e:/\?>/}]},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"name",b:/[^\/><\s]+/,r:0},a]}]}});hljs.registerLanguage("ini",function(c){var a={cN:"string",c:[c.BE],v:[{b:"'''",e:"'''",r:10},{b:'"""',e:'"""',r:10},{b:'"',e:'"'},{b:"'",e:"'"}]};return{aliases:["toml"],cI:!0,i:/\S/,c:[c.C(";","$"),c.HCM,{cN:"section",b:/^\s*\[+/,e:/\]+/},{b:/^[a-z0-9\[\]_-]+\s*=\s*/,e:"$",rB:!0,c:[{cN:"attr",b:/[a-z0-9\[\]_-]+/},{b:/=/,eW:!0,r:0,c:[{cN:"literal",b:/\bon|off|true|false|yes|no\b/},{cN:"variable",v:[{b:/\$[\w\d"][\w\d_]*/},{b:/\$\{(.*?)}/}]},a,{cN:"number",b:/([\+\-]+)?[\d]+_[\d_]+/},c.NM]}]}]}});hljs.registerLanguage("cpp",function(f){var j={cN:"keyword",b:"\\b[a-z\\d_]*_t\\b"},h={cN:"string",v:[f.inherit(f.QSM,{b:'((u8?|U)|L)?"'}),{b:'(u8?|U)?R"',e:'"',c:[f.BE]},{b:"'\\\\?.",e:"'",i:"."}]},d={cN:"number",v:[{b:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},{b:f.CNR}],r:0},g={cN:"meta",b:"#",e:"$",k:{"meta-keyword":"if else elif endif define undef warning error line pragma ifdef ifndef"},c:[{b:/\\\n/,r:0},{bK:"include",e:"$",k:{"meta-keyword":"include"},c:[f.inherit(h,{cN:"meta-string"}),{cN:"meta-string",b:"<",e:">",i:"\\n"}]},h,f.CLCM,f.CBCM]},b=f.IR+"\\s*\\(",k={keyword:"int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong",built_in:"std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",literal:"true false nullptr NULL"};return{aliases:["c","cc","h","c++","h++","hpp"],k:k,i:"</",c:[j,f.CLCM,f.CBCM,d,h,g,{b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:k,c:["self",j]},{b:f.IR+"::",k:k},{bK:"new throw return else",r:0},{cN:"function",b:"("+f.IR+"[\\*&\\s]+)+"+b,rB:!0,e:/[{;=]/,eE:!0,k:k,i:/[^\w\s\*&]/,c:[{b:b,rB:!0,c:[f.TM],r:0},{cN:"params",b:/\(/,e:/\)/,k:k,r:0,c:[f.CLCM,f.CBCM,h,d]},f.CLCM,f.CBCM,g]}]}});hljs.registerLanguage("cs",function(c){var a="abstract as base bool break byte case catch char checked const continue decimal dynamic default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null when object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield",b=c.IR+"(<"+c.IR+">)?";return{aliases:["csharp"],k:a,i:/::/,c:[c.C("///","$",{rB:!0,c:[{cN:"doctag",v:[{b:"///",r:0},{b:"<!--|-->"},{b:"</?",e:">"}]}]}),c.CLCM,c.CBCM,{cN:"meta",b:"#",e:"$",k:{"meta-keyword":"if else elif endif define undef warning error line region endregion pragma checksum"}},{cN:"string",b:'@"',e:'"',c:[{b:'""'}]},c.ASM,c.QSM,c.CNM,{bK:"class interface",e:/[{;=]/,i:/[^\s:]/,c:[c.TM,c.CLCM,c.CBCM]},{bK:"namespace",e:/[{;=]/,i:/[^\s:]/,c:[c.inherit(c.TM,{b:"[a-zA-Z](\\.?\\w)*"}),c.CLCM,c.CBCM]},{bK:"new return throw await",r:0},{cN:"function",b:"("+b+"\\s+)+"+c.IR+"\\s*\\(",rB:!0,e:/[{;=]/,eE:!0,k:a,c:[{b:c.IR+"\\s*\\(",rB:!0,c:[c.TM],r:0},{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,k:a,r:0,c:[c.ASM,c.QSM,c.CNM,c.CBCM]},c.CLCM,c.CBCM]}]}});hljs.registerLanguage("javascript",function(a){return{aliases:["js","jsx"],k:{keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},a.ASM,a.QSM,{cN:"string",b:"`",e:"`",c:[a.BE,{cN:"subst",b:"\\$\\{",e:"\\}"}]},a.CLCM,a.CBCM,{cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:a.CNR}],r:0},{b:"("+a.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[a.CLCM,a.CBCM,a.RM,{b:/</,e:/(\/\w+|\w+\/)>/,sL:"xml",c:[{b:/<\w+\/>/,skip:!0},{b:/<\w+/,e:/(\/\w+|\w+\/)>/,skip:!0,c:["self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[a.inherit(a.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:[a.CLCM,a.CBCM]}],i:/\[|%/},{b:/\$[(.]/},a.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},a.UTM]},{bK:"constructor",e:/\{/,eE:!0}],i:/#(?!!)/}});hljs.registerLanguage("coffeescript",function(g){var k={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off",built_in:"npm require console print module global window document"},j="[A-Za-z$_][0-9A-Za-z$_]*",f={cN:"subst",b:/#\{/,e:/}/,k:k},d=[g.BNM,g.inherit(g.CNM,{starts:{e:"(\\s*/)?",r:0}}),{cN:"string",v:[{b:/'''/,e:/'''/,c:[g.BE]},{b:/'/,e:/'/,c:[g.BE]},{b:/"""/,e:/"""/,c:[g.BE,f]},{b:/"/,e:/"/,c:[g.BE,f]}]},{cN:"regexp",v:[{b:"///",e:"///",c:[f,g.HCM]},{b:"//[gim]*",r:0},{b:/\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/}]},{b:"@"+j},{b:"`",e:"`",eB:!0,eE:!0,sL:"javascript"}];f.c=d;var b=g.inherit(g.TM,{b:j}),a="(\\(.*\\))?\\s*\\B[-=]>",h={cN:"params",b:"\\([^\\(]",rB:!0,c:[{b:/\(/,e:/\)/,k:k,c:["self"].concat(d)}]};return{aliases:["coffee","cson","iced"],k:k,i:/\/\*/,c:d.concat([g.C("###","###"),g.HCM,{cN:"function",b:"^\\s*"+j+"\\s*=\\s*"+a,e:"[-=]>",rB:!0,c:[b,h]},{b:/[:\(,=]\s*/,r:0,c:[{cN:"function",b:a,e:"[-=]>",rB:!0,c:[h]}]},{cN:"class",bK:"class",e:"$",i:/[:="\[\]]/,c:[{bK:"extends",eW:!0,i:/[:="\[\]]/,c:[b]},b]},{b:j+":",e:":",rB:!0,rE:!0,r:0}])}});hljs.registerLanguage("markdown",function(a){return{aliases:["md","mkdown","mkd"],c:[{cN:"section",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[=-]{2,}$"}]},{b:"<",e:">",sL:"xml",r:0},{cN:"bullet",b:"^([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"quote",b:"^>\\s+",e:"$"},{cN:"code",v:[{b:"`.+?`"},{b:"^( {4}|    )",e:"$",r:0}]},{b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].*?[\\)\\]]",rB:!0,c:[{cN:"string",b:"\\[",e:"\\]",eB:!0,rE:!0,r:0},{cN:"link",b:"\\]\\(",e:"\\)",eB:!0,eE:!0},{cN:"symbol",b:"\\]\\[",e:"\\]",eB:!0,eE:!0}],r:10},{b:"^\\[.+\\]:",rB:!0,c:[{cN:"symbol",b:"\\[",e:"\\]:",eB:!0,eE:!0,starts:{cN:"link",e:"$"}}]}]}});