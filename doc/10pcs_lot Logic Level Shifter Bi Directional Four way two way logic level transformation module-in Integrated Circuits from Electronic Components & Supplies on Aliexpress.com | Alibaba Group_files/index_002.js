!function(){var n,t=354,o="isg",i=self,e=!!i.addEventListener,r=document.getElementsByTagName("head")[0],a=navigator.userAgent;!function(n){function t(){return 4294967295*Math.random()>>>0}function o(n){return/native code/.test(n+"")}function i(n){for(var t=0,o=0,i=n.length;o<i;o++)t=(t<<5)-t+n.charCodeAt(o),t>>>=0;return t}function r(n,t){var o=n.indexOf(t);return-1===o?n:n.substr(0,o)}function a(n,t){var o=n.indexOf(t);return-1===o?n:n.substr(o+t.length)}function c(n){var t=n.match(m);if(!t)return null;var o=t[1];return s.test(o)&&(o=a(o,"@"),o=r(o,":")),o}function u(n){for(var t=0,o=n.length-1;o>=0;o--)t=t<<1|0|+n[o];return t}function f(n,t,o,i){e?n.addEventListener(t,o,i):n.attachEvent&&n.attachEvent("on"+t,function(){o(event)})}n.a=t,n.b=o,n.c=i,n.d=Date.now||function(){return+new Date},n.e=r,n.f=a;var m=/^(?:https?:)?\/{2,}([^\/?#\\]+)/i,s=/[@:]/;n.g=c,n.h=u,n.i=f}(n||(n={}));var c,u=function(){function n(n){this.j=new RegExp("(?:^|; )"+n+"=([^;]+)","g"),this.k=n+"=",this.l=""}return n.prototype.m=function(){for(var n,t=document.cookie,o=[];n=this.j.exec(t);)o.push(n[1]);return o},n.prototype.n=function(){return this.m()[0]},n.prototype.o=function(n){if(!this.l){var t="";this.p&&(t+="; domain="+this.p),this.q&&(t+="; path="+this.q),this.r&&(t+="; expires="+this.r),this.l=t}document.cookie=this.k+n+this.l},n.prototype.s=function(){var n=this.r;this.t("Thu, 01 Jan 1970 00:00:00 GMT"),this.o(""),this.t(n)},n.prototype.u=function(n){this.p=n,this.l=""},n.prototype.v=function(n){this.q=n,this.l=""},n.prototype.t=function(n){this.r=n,this.l=""},n}();!function(n){function o(n){i(n.stack||n.message)}function i(n){var o=document._sufei_log;null==o&&(o=.001),Math.random()>o||a({code:1,msg:(n+"").substr(0,1e3),pid:"sufeidata",page:location.href.split(/[#?]/)[0],query:location.search.substr(1),hash:location.hash,referrer:document.referrer,title:document.title,ua:navigator.userAgent,rel:t,c1:r()},"//gm.mmstat.com/fsp.1.1?")}function e(n,t,o){n=(n||"").substr(0,2e3),a({url:n,token:t,cna:r(),ext:o},"https://fourier.alibaba.com/ts?")}function r(){return null==c&&(c=new u("cna").n()||""),c}function a(n,t){var o=[];for(var i in n)o.push(i+"="+encodeURIComponent(n[i]));(new Image).src=t+o.join("&")}n.w=o,n.x=i,n.y=e;var c}(c||(c={}));var f;!function(t){function o(){if(G){var n=R+":"+Y+":"+G.join(",");c.y("",n,4),G=null}}function a(t){if(R++,I=t.isTrusted==undefined||t.isTrusted,D=t.clientX,S=t.clientY,e){var i=t.target,r=i.offsetWidth>>1,a=i.offsetHeight>>1;if(!(r<10&&a<10)){var c=Math.abs(t.offsetX-r),u=Math.abs(t.offsetY-a),f=c<2&&u<2;if(f&&Y++,Y>=3&&(3===Y&&(setTimeout(o,2e4),n.i(window,"unload",o)),G&&G.length<20)){var m=(f?"":"!")+i.tagName;G.push(m)}}}}function u(n){O++}function f(n){W++}function m(n){$++}function s(){var n=screen.availWidth,t=window.outerWidth;null==t&&(t=document.documentElement.clientWidth||document.body.clientWidth),L=n-t<20}function l(n){P=!0,H=!0}function h(n){H=!1}function v(n){U=n.gamma,q||(q=setTimeout(function(n){removeEventListener("deviceorientation",v),setTimeout(d,470)},30))}function d(){q=0,addEventListener("deviceorientation",v)}function g(){n.i(document,"mousemove",u,!0),n.i(document,"touchmove",u,!0),n.i(document,"click",a,!0),n.i(document,"keydown",m,!0);var t="onwheel"in r?"wheel":"onmousewheel"in document?"mousewheel":"DOMMouseScroll";n.i(document,t,f,{capture:!0,passive:!0}),n.i(window,"focus",l),n.i(window,"blur",h),n.i(window,"resize",s),s(),navigator.getBattery&&(X=!0,navigator.getBattery().then(function(n){B=n})["catch"](function(n){})),N&&d()}function p(){return O}function y(){return W}function b(){return R}function w(){return $}function _(){return{F:D,G:S,H:I}}function z(){var n=document.hidden;return null==n&&(n=document.mozHidden),!n}function k(){return H}function x(){return P}function j(){return L}function A(){return X}function T(){return!B||B.charging}function M(){return B?100*B.level:127}function E(){return N}function C(){return N?U+90:255}var L,P,B,O=0,R=0,W=0,$=0,D=0,S=0,I=!0,H=!0,X=!1,N=!!i.DeviceOrientationEvent;/dingtalk/.test(location.hostname)&&(N=!1);var q,U=null,G=[],Y=0;t.z=g,t.A=p,t.B=y,t.C=b,t.D=w,t.I=_,t.J=z,t.K=k,t.L=x,t.M=j,t.N=A,t.O=T,t.P=M,t.Q=E,t.R=C}(f||(f={}));var m;!function(t){function o(){return"$cdc_asdjflasutopfhvcZLmcfl_"in document||navigator.webdriver}function c(){if(u())return!1;try{return!!document.createElement("canvas").getContext("webgl")}catch(n){return!0}}function u(){return"ontouchstart"in document}function m(){return/zh-cn/i.test(navigator.language||navigator.systemLanguage)}function s(){return-480===(new Date).getTimezoneOffset()}function l(){return!0}function h(){return f.Q()}function v(){return f.N()}function d(){return f.O()}function g(){for(var t=0;t<4;t++)_[5+t]=k[t]();return n.h(_)}function p(){for(var n in E)if(E.hasOwnProperty(n)){var t=E[n];if(t())return+n.substr(1)}return 0}function y(n){var t=i.RTCPeerConnection||i.mozRTCPeerConnection||i.webkitRTCPeerConnection;if(!t)return void n(0);var o={optional:[{U:!0}]},e={iceServers:[{urls:"stun:x"}]},r=new t(e,o);setTimeout(function(n){try{r.close()}catch(t){}},5e3),r.onicecandidate=function(t){var o=t.candidate;if(!o)return void n(0);var i=b(o.candidate);null!=i&&(n(i),r.onicecandidate=null)},r.createDataChannel(""),r.createOffer().then(function(n){r.setLocalDescription(n)})["catch"](function(t){n(0)})}function b(n){var t=/(\d+)\.(\d+)\.(\d+)\.(\d+)\D/.exec(n);return t?(+t[1]<<24|+t[2]<<16|+t[3]<<8|+t[4])>>>0:null}function w(){for(var n=0;n<5;n++)_[n]=z[n]()}var _=Array(16),z=[o,c,u,m,s],k=[l,h,v,d];t.S=g;var x=navigator.vendor,j=r.style,A="chrome"in window,T="ActiveXObject"in window,M=n.b(i.WeakMap),E={_13:function(){return"callPhantom"in i||/PhantomJS/i.test(a)},_14:function(){return/python/i.test(navigator.appVersion)},_15:function(){return"sgAppName"in navigator},_16:function(){return/Maxthon/i.test(x)},_17:function(){return"opr"in i},_18:function(){return A&&/BIDUBrowser/i.test(a)},_19:function(){return A&&/LBBROWSER/i.test(a)},_20:function(){return A&&/QQBrowser/.test(a)},_21:function(){return A&&/UBrowser/i.test(a)},_22:function(){return A&&/2345Explorer/.test(a)},_23:function(){return A&&/TheWorld/.test(a)},_24:function(){return A&&"MSGesture"in i},_26:function(){return"aef"in i&&/WW_IMSDK/.test(a)},_25:function(){return"aef"in i},_1:function(){return A},_2:function(){return"mozRTCIceCandidate"in i||"mozInnerScreenY"in i},_3:function(){return"safari"in i},_4:function(){return T&&!("maxHeight"in j)},_5:function(){return T&&!n.b(i.postMessage)},_6:function(){return T&&!e},_7:function(){return T&&!n.b(i.Uint8Array)},_8:function(){return T&&!M},_9:function(){return T&&M},_10:function(){return"Google Inc."===navigator.vendor},_11:function(){return"Apple Computer, Inc."===navigator.vendor},_12:function(){return T}};t.T=p,t.V=y,t.z=w}(m||(m={}));var s;!function(n){function t(){n.W=o("1688.com,95095.com,a-isv.org,aliapp.org,alibaba-inc.com,alibaba.com,alibaba.net,alibabacapital.com,alibabacloud.com,alibabacorp.com,alibabadoctor.com,alibabagroup.com,alicdn.com,alidayu.com,aliexpress.com,alifanyi.com,alihealth.cn,alihealth.com.cn,alihealth.hk,alikmd.com,alimama.com,alimei.com,alios.cn,alipay-corp.com,alipay.com,aliplus.com,alisoft.com,alisports.com,alitianji.com,alitrip.com,alitrip.hk,aliunicorn.com,aliway.com,aliwork.com,alixiaomi.com,aliyun-inc.com,aliyun.com,aliyun.xin,aliyuncs.com,alizhaopin.com,amap.com,antfinancial-corp.com,antsdaq-corp.com,asczwa.com,atatech.org,autonavi.com,b2byao.com,bcvbw.com,cainiao-inc.cn,cainiao-inc.com,cainiao.com,cainiao.com.cn,cainiaoyizhan.com,cheng.xin,cibntv.net,cnzz.com,damai.cn,ddurl.to,dingding.xin,dingtalk.com,dingtalkapps.com,doctoryou.ai,doctoryou.cn,dratio.com,etao.com,feizhu.cn,feizhu.com,fliggy.com,fliggy.hk,freshhema.com,gaode.com,gein.cn,gongyi.xin,guoguo-app.com,hemaos.com,heyi.test,hichina.com,itao.com,jingguan.ai,jiyoujia.com,juhuasuan.com,koubei-corp.com,kumiao.com,laifeng.com,laiwang.com,lazada.co.id,lazada.co.th,lazada.com,lazada.com.my,lazada.com.ph,lazada.sg,lazada.vn,liangxinyao.com,lingshoujia.com,lwurl.to,mashangfangxin.com,mashort.cn,mdeer.com,miaostreet.com,mmstat.com,mshare.cc,mybank-corp.cn,nic.xin,pailitao.com,phpwind.com,phpwind.net,saee.org.cn,shenjing.com,shyhhema.com,sm.cn,soku.com,tanx.com,taobao.com,taobao.org,taopiaopiao.com,tb.cn,tmall.com,tmall.hk,tmall.ru,tmjl.ai,tudou.com,umeng.co,umeng.com,umengcloud.com,umsns.com,umtrack.com,wasu.tv,whalecloud.com,wrating.com,www.net.cn,xiami.com,ykimg.com,youku.com,yowhale.com,yunos-inc.com,yunos.com,yushanfang.com,zmxy-corp.com.cn,zuodao.com"),n.X=o("127.0.0.1,afptrack.alimama.com,aldcdn.tmall.com,delivery.dayu.com,hzapush.aliexpress.com,local.alipcsec.com,localhost.wwbizsrv.alibaba.com,napi.uc.cn,sec.taobao.com,un.alibaba-inc.com,utp.ucweb.com,ynuf.aliapp.org"),n.Y=o("alicdn.com,aliimg.com,alimama.cn,alimmdn.com,alipay.com,alivecdn.com,aliyun.com,aliyuncs.com,amap.com,autonavi.com,cibntv.net,cnzz.com,facebook.com,googleapis.com,greencompute.org,lesiclub.cn,linezing.com,mmcdn.cn,mmstat.com,sm-tc.cn,sm.cn,soku.com,tanx.com,taobaocdn.com,tbcache.com,tbcdn.cn,tudou.com,uczzd.cn,umeng.com,wrating.com,xiami.net,xiaoshuo1-sm.com,ykimg.com,youku.com,zimgs.cn")}function o(n){for(var t={},o=n.split(","),i=0;i<o.length;i++)t[o[i]]=!0;return t}n.z=t}(s||(s={}));var l;!function(n){function t(n,t,o){switch(o.length){case 0:return t();case 1:return t(o[0]);case 2:return t(o[0],o[1]);default:return t(o[0],o[2],o[3])}}function o(n,t){switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);default:return new n(t[0],t[2],t[3])}}function i(i,e,r){return function(){var a,u=arguments;try{a=e(u,this,i)}catch(f){a=u,c.w(f)}if(a){if(a===n.Z)return;u=a}return r?o(i,u):"apply"in i?i.apply(this,u):t(this,i,u)}}function r(n,t,o){if(!n)return!1;var e=n[t];return!!e&&(n[t]=i(e,o,!1),!0)}function a(n,t,o){if(!n)return!1;var e=n[t];return!!e&&(n[t]=i(e,o,!0),!0)}function u(n,t,o){if(!f)return!1;var r=f(n,t);return!(!r||!r.set||(r.set=i(r.set,o,!1),e||(r.get=function(n){return function(){return n.call(this)}}(r.get)),Object.defineProperty(n,t,r),0))}n.Z=-1;var f=Object.getOwnPropertyDescriptor;n.$=r,n._=a,n.aa=u}(l||(l={}));var h,v=function(){function n(n){this.ba=n;for(var t=0,o=n.length;t<o;t++)this[t]=0}return n.prototype.ca=function(){for(var n=this.ba,t=[],o=-1,i=0,e=n.length;i<e;i++)for(var r=this[i],a=n[i],c=o+=a;t[c]=255&r,0!=--a;)--c,r>>=8;return t},n.prototype.da=function(n){for(var t=this.ba,o=0,i=0,e=t.length;i<e;i++){var r=t[i],a=0;do{a=a<<8|n[o++]}while(--r>0);this[i]=a>>>0}},n}();!function(n){function t(n){for(var t=0,o=0,i=n.length;o<i;o++)t=(t<<5)-t+n[o];return 255&t}function o(n,t,o,i,e){for(var r=n.length;t<r;)o[i++]=n[t++]^255&e,e=~(131*e)}function i(n){for(var t=[],o=n.length,i=0;i<o;i+=3){var e=n[i]<<16|n[i+1]<<8|n[i+2];t.push(f.charAt(e>>18),f.charAt(e>>12&63),f.charAt(e>>6&63),f.charAt(63&e))}return t.join("")}function e(n){for(var t=[],o=0;o<n.length;o+=4){var i=m[n.charAt(o)]<<18|m[n.charAt(o+1)]<<12|m[n.charAt(o+2)]<<6|m[n.charAt(o+3)];t.push(i>>16,i>>8&255,255&i)}return t}function r(){for(var n=0;n<64;n++){var t=f.charAt(n);m[t]=n}}function a(n){var e=t(n),r=[u,e];return o(n,0,r,2,e),i(r)}function c(n){var i=e(n),r=i[1],a=[];if(o(i,2,a,0,r),t(a)==r)return a}var u=4,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",m={};n.z=r,n.ea=a,n.fa=c}(h||(h={}));var d;!function(n){function t(){for(var n=navigator.platform,t=0;t<o.length;t++)if(o[t].test(n))return t+1;return 0}var o=[/^Win32/,/^Win64/,/^Linux armv|^Linux aarch64/,/^Android/,/^iPhone/,/^iPad/,/^MacIntel/,/^Linux [ix]\d+/,/^ARM/,/^iPod/,/^BlackBerry/];n.ga=t}(d||(d={}));var g;!function(t){function o(){return n.d()/1e3>>>0}function i(t){if(f.z(),m.z(),t){var o=h.fa(t);o&&r.da(o)}r[1]=n.a(),r[5]=m.T(),r[6]=d.ga(),r[8]=n.c(navigator.userAgent);try{m.V(function(n){r[7]=n})}catch(i){r[7]=0}}function e(t,i){0==r[4]&&(r[4]=n.a(),r[3]=o()),r[2]=o(),r[16]=m.S(),r[9]=f.A(),r[10]=f.B(),r[11]=f.C(),r[12]=f.D(),r[17]=f.R(),r[18]=f.P();var e=f.I();r[13]=e.F,r[14]=e.G;var c=f.K(),u=f.M(),s=f.L(),l=[i,f.J(),t,c,e.H,history.length>1,s,u];t&&a++,r[15]=n.h(l),r[0]=a;var v=r.ca();return h.ea(v)}var r=new v([2,2,4,4,4,1,1,4,4,3,2,2,2,2,2,1,2,1,1,1,1]),a=0;t.z=i,t.ha=e}(g||(g={}));var p;!function(t){function e(n,t){var o=n.split("."),i=o.length-1,e=o[i];if(e in t)return!0;for(var r=i-1;r>=0;r--)if((e=o[r]+"."+e)in t)return!0;return!1}function r(n){var t=location.hostname;if(z.test(t))return w.o(n),t;var o=t.split("."),i=o.length;if(1===i)return w.o(n),t;i>5&&(i=5),t=o.pop();for(var e=2;e<=i&&(t=o.pop()+"."+t,w.u(t),w.o(n),!(t in s.W))&&w.n()!==n;e++);return t}function a(n){var t=r(n),o="(^|\\.)"+t.replace(/\./g,"\\.")+"$";b=new RegExp(o,"i")}function f(){_=null;var n=g.ha(!1,null);w.o(n)}function m(){var n=g.ha(!0);w.o(n),null==_&&(_=setTimeout(f,0))}function l(n,t){/^\/\//.test(n)&&(n=location.protocol+n);var o=g.ha(!0);c.y(n,o,t)}function h(n,t){if(t)for(var o=0;o<t.length;o++)if(t[o].test(n))return!0;return!1}function v(t){var o;if(null!=t&&(t+="",o=n.g(t)),!o)return m(),!0;if(b.test(o))return m(),!0;if(z.test(o))return!1;var r=n.e(t,"?");return h(r,i.__sufei_point_list)?(l(t,0),!1):!(e(o,s.Y)||o in s.X||/\/gw-open\/|\/gw\//.test(r)||h(r,i.__sufei_ignore_list)||(l(t,0),1))}function d(t){var o=document.referrer;if(o){var i=n.g(o);if(i&&e(i,s.W))return}l(o,1)}function p(){w.s();for(var n=location.hostname.split("."),t=n.pop();;){var o=n.pop();if(!o)break;t=o+"."+t,w.u(t),w.s()}}function y(){s.z(),w=new u(o);var t=new Date(n.d()+15552e6).toUTCString();w.t(t),w.v("/");var i=w.m();i.length>1&&(c.x("exist_multi_isg"),p(),w.m().length>0&&c.x("clear_fail"));var e=i[0];g.z(e),e=g.ha(!1,null),a(e),0===i.length&&d(e),n.i(window,"unload",function(n){var t=g.ha(!1,!0);w.o(t)})}var b,w,_,z=/^(\d+\.)*\d+$/;t.ia=m,t.ja=v,t.z=y}(p||(p={}));var y;!function(n){function t(){o()||(e("insertBefore"),e("appendChild"))}function o(){var n=i.HTMLScriptElement;if(!n)return!1;var t=n.prototype,o=/^src$/i;return l.$(t,"setAttribute",function(n){var t=n[0],i=n[1];o.test(t)&&c(i)}),l.aa(t,"src",function(n){c(n[0])})}function e(n){var t=i.Element;t?l.$(t.prototype,n,a):(l.$(r,n,a),l.$(document.body,n,a))}function a(n){var t=n[0];t&&"SCRIPT"===t.tagName&&c(t.src)}function c(n){n+="",u.test(n)&&p.ja(n)}n.z=t;var u=/callback=/}(y||(y={}));var b;!function(t){function o(t){return n.e(t.href,"#")}function e(n){var t=n.target;if(!t){var o=m[0];o&&(t=o.target)}return t}function r(n){if(/^https?\:/.test(n.protocol)){var t=e(n);if((!t||/^_self$/i.test(t))&&o(n)===f&&n.hash)return;p.ja(n.href)}}function a(n){if(!n.defaultPrevented)for(var t=n.target||n.srcElement;t;){var o=t.tagName;if("A"===o||"AREA"===o){r(t);break}t=t.parentNode}}function c(n){var t=n.target||n.srcElement;t[s]!==h&&p.ja(t.action)}function u(){m=document.getElementsByTagName("base"),f=o(location),n.i(document,"click",a),n.i(document,"submit",c);var t=i.HTMLFormElement;t&&l.$(t.prototype,"submit",function(n,t){var o=t;p.ja(o.action),o[s]=++h})}var f,m,s="__sufei_id",h=0;t.z=u}(b||(b={}));var w;!function(t){function o(){e(),/Mobile/.test(a)&&(r(),c()||n.i(document,"DOMContentLoaded",c))}function e(){l.$(i,"fetch",function(n){var t=n[0],o=n[1];"string"==typeof t&&p.ja(t)&&(o=o||{},o.credentials&&"omit"!==o.credentials||(o.credentials="same-origin"),n[1]=o)})}function r(){var n=i.lib;if(n){var t=!/taobao.com$/.test(location.hostname);l.$(n.windvane,"call",function(n){if("MtopWVPlugin"===n[0]&&"send"===n[1]){var o=n[2];t?(o.ext_headers||{})["X-Sufei-Token"]=g.ha(!0):p.ia()}})}}function c(){var n=i.jsbridge;if(n&&(n=n["default"]))return l.$(n,"pushBack",function(n){"native:"===n[0]&&p.ia()}),!0}t.z=o}(w||(w={}));var _;!function(n){function t(){var n=i.XMLHttpRequest;if(n){var t=n.prototype;t?o(t):e()}r()}function o(n){l.$(n,"open",function(n,t){var o=n[1];t[a]=o}),l.$(n,"send",function(n,t){var o=t[a];p.ja(o)})}function e(){l._(i,"XMLHttpRequest",function(){p.ja()})}function r(){var n=/XMLHTTP/i;l._(i,"ActiveXObject",function(t){var o=t[0];o&&n.test(o)&&p.ja()})}var a="__sufei_url";n.z=t}(_||(_={}));var z;!function(n){function o(){h.z(),p.z(),b.z(),_.z(),w.z(),y.z()}var i="_sufei_data2";!function(){if(!document[i]){document[i]=t;try{o()}catch(n){c.w(n)}}}()}(z||(z={}))}();