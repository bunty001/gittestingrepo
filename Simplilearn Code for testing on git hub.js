
<!DOCTYPE html>
<!--[if lte IE 9]><html class="old-browser"> <![endif]-->
  <!--[if !IE]><!--><script>
if (/*@cc_on!@*/false) {
    document.documentElement.className+=' ie10';
}
</script><!--<![endif]-->
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" lang="en-US">
    <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /><script type="text/javascript">(window.NREUM||(NREUM={})).init={privacy:{cookies_enabled:true},ajax:{deny_list:["bam-cell.nr-data.net"]},distributed_tracing:{enabled:true}};(window.NREUM||(NREUM={})).loader_config={agentID:"1385880195",accountID:"1079757",trustKey:"1079757",xpid:"VQYAWFFWDxABVlRXBwAEUlIA",licenseKey:"ff25e26ed2",applicationID:"1255013461"};window.NREUM||(NREUM={}),__nr_require=function(t,e,n){function r(n){if(!e[n]){var o=e[n]={exports:{}};t[n][0].call(o.exports,function(e){var o=t[n][1][e];return r(o||e)},o,o.exports)}return e[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<n.length;o++)r(n[o]);return r}({1:[function(t,e,n){function r(t){try{s.console&&console.log(t)}catch(e){}}var o,i=t("ee"),a=t(32),s={};try{o=localStorage.getItem("__nr_flags").split(","),console&&"function"==typeof console.log&&(s.console=!0,o.indexOf("dev")!==-1&&(s.dev=!0),o.indexOf("nr_dev")!==-1&&(s.nrDev=!0))}catch(c){}s.nrDev&&i.on("internal-error",function(t){r(t.stack)}),s.dev&&i.on("fn-err",function(t,e,n){r(n.stack)}),s.dev&&(r("NR AGENT IN DEVELOPMENT MODE"),r("flags: "+a(s,function(t,e){return t}).join(", ")))},{}],2:[function(t,e,n){function r(t,e,n,r,s){try{l?l-=1:o(s||new UncaughtException(t,e,n),!0)}catch(f){try{i("ierr",[f,c.now(),!0])}catch(d){}}return"function"==typeof u&&u.apply(this,a(arguments))}function UncaughtException(t,e,n){this.message=t||"Uncaught error with no additional information",this.sourceURL=e,this.line=n}function o(t,e){var n=e?null:c.now();i("err",[t,n])}var i=t("handle"),a=t(33),s=t("ee"),c=t("loader"),f=t("gos"),u=window.onerror,d=!1,p="nr@seenError";if(!c.disabled){var l=0;c.features.err=!0,t(1),window.onerror=r;try{throw new Error}catch(h){"stack"in h&&(t(14),t(13),"addEventListener"in window&&t(7),c.xhrWrappable&&t(15),d=!0)}s.on("fn-start",function(t,e,n){d&&(l+=1)}),s.on("fn-err",function(t,e,n){d&&!n[p]&&(f(n,p,function(){return!0}),this.thrown=!0,o(n))}),s.on("fn-end",function(){d&&!this.thrown&&l>0&&(l-=1)}),s.on("internal-error",function(t){i("ierr",[t,c.now(),!0])})}},{}],3:[function(t,e,n){var r=t("loader");r.disabled||(r.features.ins=!0)},{}],4:[function(t,e,n){function r(){U++,L=g.hash,this[u]=y.now()}function o(){U--,g.hash!==L&&i(0,!0);var t=y.now();this[h]=~~this[h]+t-this[u],this[d]=t}function i(t,e){E.emit("newURL",[""+g,e])}function a(t,e){t.on(e,function(){this[e]=y.now()})}var s="-start",c="-end",f="-body",u="fn"+s,d="fn"+c,p="cb"+s,l="cb"+c,h="jsTime",m="fetch",v="addEventListener",w=window,g=w.location,y=t("loader");if(w[v]&&y.xhrWrappable&&!y.disabled){var x=t(11),b=t(12),E=t(9),R=t(7),O=t(14),T=t(8),P=t(15),S=t(10),M=t("ee"),N=M.get("tracer"),C=t(23);t(17),y.features.spa=!0;var L,U=0;M.on(u,r),b.on(p,r),S.on(p,r),M.on(d,o),b.on(l,o),S.on(l,o),M.buffer([u,d,"xhr-resolved"]),R.buffer([u]),O.buffer(["setTimeout"+c,"clearTimeout"+s,u]),P.buffer([u,"new-xhr","send-xhr"+s]),T.buffer([m+s,m+"-done",m+f+s,m+f+c]),E.buffer(["newURL"]),x.buffer([u]),b.buffer(["propagate",p,l,"executor-err","resolve"+s]),N.buffer([u,"no-"+u]),S.buffer(["new-jsonp","cb-start","jsonp-error","jsonp-end"]),a(T,m+s),a(T,m+"-done"),a(S,"new-jsonp"),a(S,"jsonp-end"),a(S,"cb-start"),E.on("pushState-end",i),E.on("replaceState-end",i),w[v]("hashchange",i,C(!0)),w[v]("load",i,C(!0)),w[v]("popstate",function(){i(0,U>1)},C(!0))}},{}],5:[function(t,e,n){function r(){var t=new PerformanceObserver(function(t,e){var n=t.getEntries();s(v,[n])});try{t.observe({entryTypes:["resource"]})}catch(e){}}function o(t){if(s(v,[window.performance.getEntriesByType(w)]),window.performance["c"+p])try{window.performance[h](m,o,!1)}catch(t){}else try{window.performance[h]("webkit"+m,o,!1)}catch(t){}}function i(t){}if(window.performance&&window.performance.timing&&window.performance.getEntriesByType){var a=t("ee"),s=t("handle"),c=t(14),f=t(13),u=t(6),d=t(23),p="learResourceTimings",l="addEventListener",h="removeEventListener",m="resourcetimingbufferfull",v="bstResource",w="resource",g="-start",y="-end",x="fn"+g,b="fn"+y,E="bstTimer",R="pushState",O=t("loader");if(!O.disabled){O.features.stn=!0,t(9),"addEventListener"in window&&t(7);var T=NREUM.o.EV;a.on(x,function(t,e){var n=t[0];n instanceof T&&(this.bstStart=O.now())}),a.on(b,function(t,e){var n=t[0];n instanceof T&&s("bst",[n,e,this.bstStart,O.now()])}),c.on(x,function(t,e,n){this.bstStart=O.now(),this.bstType=n}),c.on(b,function(t,e){s(E,[e,this.bstStart,O.now(),this.bstType])}),f.on(x,function(){this.bstStart=O.now()}),f.on(b,function(t,e){s(E,[e,this.bstStart,O.now(),"requestAnimationFrame"])}),a.on(R+g,function(t){this.time=O.now(),this.startPath=location.pathname+location.hash}),a.on(R+y,function(t){s("bstHist",[location.pathname+location.hash,this.startPath,this.time])}),u()?(s(v,[window.performance.getEntriesByType("resource")]),r()):l in window.performance&&(window.performance["c"+p]?window.performance[l](m,o,d(!1)):window.performance[l]("webkit"+m,o,d(!1))),document[l]("scroll",i,d(!1)),document[l]("keypress",i,d(!1)),document[l]("click",i,d(!1))}}},{}],6:[function(t,e,n){e.exports=function(){return"PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver}},{}],7:[function(t,e,n){function r(t){for(var e=t;e&&!e.hasOwnProperty(u);)e=Object.getPrototypeOf(e);e&&o(e)}function o(t){s.inPlace(t,[u,d],"-",i)}function i(t,e){return t[1]}var a=t("ee").get("events"),s=t("wrap-function")(a,!0),c=t("gos"),f=XMLHttpRequest,u="addEventListener",d="removeEventListener";e.exports=a,"getPrototypeOf"in Object?(r(document),r(window),r(f.prototype)):f.prototype.hasOwnProperty(u)&&(o(window),o(f.prototype)),a.on(u+"-start",function(t,e){var n=t[1];if(null!==n&&("function"==typeof n||"object"==typeof n)){var r=c(n,"nr@wrapped",function(){function t(){if("function"==typeof n.handleEvent)return n.handleEvent.apply(n,arguments)}var e={object:t,"function":n}[typeof n];return e?s(e,"fn-",null,e.name||"anonymous"):n});this.wrapped=t[1]=r}}),a.on(d+"-start",function(t){t[1]=this.wrapped||t[1]})},{}],8:[function(t,e,n){function r(t,e,n){var r=t[e];"function"==typeof r&&(t[e]=function(){var t=i(arguments),e={};o.emit(n+"before-start",[t],e);var a;e[m]&&e[m].dt&&(a=e[m].dt);var s=r.apply(this,t);return o.emit(n+"start",[t,a],s),s.then(function(t){return o.emit(n+"end",[null,t],s),t},function(t){throw o.emit(n+"end",[t],s),t})})}var o=t("ee").get("fetch"),i=t(33),a=t(32);e.exports=o;var s=window,c="fetch-",f=c+"body-",u=["arrayBuffer","blob","json","text","formData"],d=s.Request,p=s.Response,l=s.fetch,h="prototype",m="nr@context";d&&p&&l&&(a(u,function(t,e){r(d[h],e,f),r(p[h],e,f)}),r(s,"fetch",c),o.on(c+"end",function(t,e){var n=this;if(e){var r=e.headers.get("content-length");null!==r&&(n.rxSize=r),o.emit(c+"done",[null,e],n)}else o.emit(c+"done",[t],n)}))},{}],9:[function(t,e,n){var r=t("ee").get("history"),o=t("wrap-function")(r);e.exports=r;var i=window.history&&window.history.constructor&&window.history.constructor.prototype,a=window.history;i&&i.pushState&&i.replaceState&&(a=i),o.inPlace(a,["pushState","replaceState"],"-")},{}],10:[function(t,e,n){function r(t){function e(){f.emit("jsonp-end",[],l),t.removeEventListener("load",e,c(!1)),t.removeEventListener("error",n,c(!1))}function n(){f.emit("jsonp-error",[],l),f.emit("jsonp-end",[],l),t.removeEventListener("load",e,c(!1)),t.removeEventListener("error",n,c(!1))}var r=t&&"string"==typeof t.nodeName&&"script"===t.nodeName.toLowerCase();if(r){var o="function"==typeof t.addEventListener;if(o){var a=i(t.src);if(a){var d=s(a),p="function"==typeof d.parent[d.key];if(p){var l={};u.inPlace(d.parent,[d.key],"cb-",l),t.addEventListener("load",e,c(!1)),t.addEventListener("error",n,c(!1)),f.emit("new-jsonp",[t.src],l)}}}}}function o(){return"addEventListener"in window}function i(t){var e=t.match(d);return e?e[1]:null}function a(t,e){var n=t.match(l),r=n[1],o=n[3];return o?a(o,e[r]):e[r]}function s(t){var e=t.match(p);return e&&e.length>=3?{key:e[2],parent:a(e[1],window)}:{key:t,parent:window}}var c=t(23),f=t("ee").get("jsonp"),u=t("wrap-function")(f);if(e.exports=f,o()){var d=/[?&](?:callback|cb)=([^&#]+)/,p=/(.*)\.([^.]+)/,l=/^(\w+)(\.|$)(.*)$/,h=["appendChild","insertBefore","replaceChild"];Node&&Node.prototype&&Node.prototype.appendChild?u.inPlace(Node.prototype,h,"dom-"):(u.inPlace(HTMLElement.prototype,h,"dom-"),u.inPlace(HTMLHeadElement.prototype,h,"dom-"),u.inPlace(HTMLBodyElement.prototype,h,"dom-")),f.on("dom-start",function(t){r(t[0])})}},{}],11:[function(t,e,n){var r=t("ee").get("mutation"),o=t("wrap-function")(r),i=NREUM.o.MO;e.exports=r,i&&(window.MutationObserver=function(t){return this instanceof i?new i(o(t,"fn-")):i.apply(this,arguments)},MutationObserver.prototype=i.prototype)},{}],12:[function(t,e,n){function r(t){var e=i.context(),n=s(t,"executor-",e,null,!1),r=new f(n);return i.context(r).getCtx=function(){return e},r}var o=t("wrap-function"),i=t("ee").get("promise"),a=t("ee").getOrSetContext,s=o(i),c=t(32),f=NREUM.o.PR;e.exports=i,f&&(window.Promise=r,["all","race"].forEach(function(t){var e=f[t];f[t]=function(n){function r(t){return function(){i.emit("propagate",[null,!o],a,!1,!1),o=o||!t}}var o=!1;c(n,function(e,n){Promise.resolve(n).then(r("all"===t),r(!1))});var a=e.apply(f,arguments),s=f.resolve(a);return s}}),["resolve","reject"].forEach(function(t){var e=f[t];f[t]=function(t){var n=e.apply(f,arguments);return t!==n&&i.emit("propagate",[t,!0],n,!1,!1),n}}),f.prototype["catch"]=function(t){return this.then(null,t)},f.prototype=Object.create(f.prototype,{constructor:{value:r}}),c(Object.getOwnPropertyNames(f),function(t,e){try{r[e]=f[e]}catch(n){}}),o.wrapInPlace(f.prototype,"then",function(t){return function(){var e=this,n=o.argsToArray.apply(this,arguments),r=a(e);r.promise=e,n[0]=s(n[0],"cb-",r,null,!1),n[1]=s(n[1],"cb-",r,null,!1);var c=t.apply(this,n);return r.nextPromise=c,i.emit("propagate",[e,!0],c,!1,!1),c}}),i.on("executor-start",function(t){t[0]=s(t[0],"resolve-",this,null,!1),t[1]=s(t[1],"resolve-",this,null,!1)}),i.on("executor-err",function(t,e,n){t[1](n)}),i.on("cb-end",function(t,e,n){i.emit("propagate",[n,!0],this.nextPromise,!1,!1)}),i.on("propagate",function(t,e,n){this.getCtx&&!e||(this.getCtx=function(){if(t instanceof Promise)var e=i.context(t);return e&&e.getCtx?e.getCtx():this})}),r.toString=function(){return""+f})},{}],13:[function(t,e,n){var r=t("ee").get("raf"),o=t("wrap-function")(r),i="equestAnimationFrame";e.exports=r,o.inPlace(window,["r"+i,"mozR"+i,"webkitR"+i,"msR"+i],"raf-"),r.on("raf-start",function(t){t[0]=o(t[0],"fn-")})},{}],14:[function(t,e,n){function r(t,e,n){t[0]=a(t[0],"fn-",null,n)}function o(t,e,n){this.method=n,this.timerDuration=isNaN(t[1])?0:+t[1],t[0]=a(t[0],"fn-",this,n)}var i=t("ee").get("timer"),a=t("wrap-function")(i),s="setTimeout",c="setInterval",f="clearTimeout",u="-start",d="-";e.exports=i,a.inPlace(window,[s,"setImmediate"],s+d),a.inPlace(window,[c],c+d),a.inPlace(window,[f,"clearImmediate"],f+d),i.on(c+u,r),i.on(s+u,o)},{}],15:[function(t,e,n){function r(t,e){d.inPlace(e,["onreadystatechange"],"fn-",s)}function o(){var t=this,e=u.context(t);t.readyState>3&&!e.resolved&&(e.resolved=!0,u.emit("xhr-resolved",[],t)),d.inPlace(t,y,"fn-",s)}function i(t){x.push(t),m&&(E?E.then(a):w?w(a):(R=-R,O.data=R))}function a(){for(var t=0;t<x.length;t++)r([],x[t]);x.length&&(x=[])}function s(t,e){return e}function c(t,e){for(var n in t)e[n]=t[n];return e}t(7);var f=t("ee"),u=f.get("xhr"),d=t("wrap-function")(u),p=t(23),l=NREUM.o,h=l.XHR,m=l.MO,v=l.PR,w=l.SI,g="readystatechange",y=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],x=[];e.exports=u;var b=window.XMLHttpRequest=function(t){var e=new h(t);try{u.emit("new-xhr",[e],e),e.addEventListener(g,o,p(!1))}catch(n){try{u.emit("internal-error",[n])}catch(r){}}return e};if(c(h,b),b.prototype=h.prototype,d.inPlace(b.prototype,["open","send"],"-xhr-",s),u.on("send-xhr-start",function(t,e){r(t,e),i(e)}),u.on("open-xhr-start",r),m){var E=v&&v.resolve();if(!w&&!v){var R=1,O=document.createTextNode(R);new m(a).observe(O,{characterData:!0})}}else f.on("fn-end",function(t){t[0]&&t[0].type===g||a()})},{}],16:[function(t,e,n){function r(t){if(!s(t))return null;var e=window.NREUM;if(!e.loader_config)return null;var n=(e.loader_config.accountID||"").toString()||null,r=(e.loader_config.agentID||"").toString()||null,f=(e.loader_config.trustKey||"").toString()||null;if(!n||!r)return null;var h=l.generateSpanId(),m=l.generateTraceId(),v=Date.now(),w={spanId:h,traceId:m,timestamp:v};return(t.sameOrigin||c(t)&&p())&&(w.traceContextParentHeader=o(h,m),w.traceContextStateHeader=i(h,v,n,r,f)),(t.sameOrigin&&!u()||!t.sameOrigin&&c(t)&&d())&&(w.newrelicHeader=a(h,m,v,n,r,f)),w}function o(t,e){return"00-"+e+"-"+t+"-01"}function i(t,e,n,r,o){var i=0,a="",s=1,c="",f="";return o+"@nr="+i+"-"+s+"-"+n+"-"+r+"-"+t+"-"+a+"-"+c+"-"+f+"-"+e}function a(t,e,n,r,o,i){var a="btoa"in window&&"function"==typeof window.btoa;if(!a)return null;var s={v:[0,1],d:{ty:"Browser",ac:r,ap:o,id:t,tr:e,ti:n}};return i&&r!==i&&(s.d.tk=i),btoa(JSON.stringify(s))}function s(t){return f()&&c(t)}function c(t){var e=!1,n={};if("init"in NREUM&&"distributed_tracing"in NREUM.init&&(n=NREUM.init.distributed_tracing),t.sameOrigin)e=!0;else if(n.allowed_origins instanceof Array)for(var r=0;r<n.allowed_origins.length;r++){var o=h(n.allowed_origins[r]);if(t.hostname===o.hostname&&t.protocol===o.protocol&&t.port===o.port){e=!0;break}}return e}function f(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&!!NREUM.init.distributed_tracing.enabled}function u(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&!!NREUM.init.distributed_tracing.exclude_newrelic_header}function d(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&NREUM.init.distributed_tracing.cors_use_newrelic_header!==!1}function p(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&!!NREUM.init.distributed_tracing.cors_use_tracecontext_headers}var l=t(29),h=t(18);e.exports={generateTracePayload:r,shouldGenerateTrace:s}},{}],17:[function(t,e,n){function r(t){var e=this.params,n=this.metrics;if(!this.ended){this.ended=!0;for(var r=0;r<p;r++)t.removeEventListener(d[r],this.listener,!1);e.aborted||(n.duration=a.now()-this.startTime,this.loadCaptureCalled||4!==t.readyState?null==e.status&&(e.status=0):i(this,t),n.cbTime=this.cbTime,s("xhr",[e,n,this.startTime,this.endTime,"xhr"],this))}}function o(t,e){var n=c(e),r=t.params;r.hostname=n.hostname,r.port=n.port,r.protocol=n.protocol,r.host=n.hostname+":"+n.port,r.pathname=n.pathname,t.parsedOrigin=n,t.sameOrigin=n.sameOrigin}function i(t,e){t.params.status=e.status;var n=v(e,t.lastSize);if(n&&(t.metrics.rxSize=n),t.sameOrigin){var r=e.getResponseHeader("X-NewRelic-App-Data");r&&(t.params.cat=r.split(", ").pop())}t.loadCaptureCalled=!0}var a=t("loader");if(a.xhrWrappable&&!a.disabled){var s=t("handle"),c=t(18),f=t(16).generateTracePayload,u=t("ee"),d=["load","error","abort","timeout"],p=d.length,l=t("id"),h=t(24),m=t(22),v=t(19),w=t(23),g=NREUM.o.REQ,y=window.XMLHttpRequest;a.features.xhr=!0,t(15),t(8),u.on("new-xhr",function(t){var e=this;e.totalCbs=0,e.called=0,e.cbTime=0,e.end=r,e.ended=!1,e.xhrGuids={},e.lastSize=null,e.loadCaptureCalled=!1,e.params=this.params||{},e.metrics=this.metrics||{},t.addEventListener("load",function(n){i(e,t)},w(!1)),h&&(h>34||h<10)||t.addEventListener("progress",function(t){e.lastSize=t.loaded},w(!1))}),u.on("open-xhr-start",function(t){this.params={method:t[0]},o(this,t[1]),this.metrics={}}),u.on("open-xhr-end",function(t,e){"loader_config"in NREUM&&"xpid"in NREUM.loader_config&&this.sameOrigin&&e.setRequestHeader("X-NewRelic-ID",NREUM.loader_config.xpid);var n=f(this.parsedOrigin);if(n){var r=!1;n.newrelicHeader&&(e.setRequestHeader("newrelic",n.newrelicHeader),r=!0),n.traceContextParentHeader&&(e.setRequestHeader("traceparent",n.traceContextParentHeader),n.traceContextStateHeader&&e.setRequestHeader("tracestate",n.traceContextStateHeader),r=!0),r&&(this.dt=n)}}),u.on("send-xhr-start",function(t,e){var n=this.metrics,r=t[0],o=this;if(n&&r){var i=m(r);i&&(n.txSize=i)}this.startTime=a.now(),this.listener=function(t){try{"abort"!==t.type||o.loadCaptureCalled||(o.params.aborted=!0),("load"!==t.type||o.called===o.totalCbs&&(o.onloadCalled||"function"!=typeof e.onload))&&o.end(e)}catch(n){try{u.emit("internal-error",[n])}catch(r){}}};for(var s=0;s<p;s++)e.addEventListener(d[s],this.listener,w(!1))}),u.on("xhr-cb-time",function(t,e,n){this.cbTime+=t,e?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof n.onload||this.end(n)}),u.on("xhr-load-added",function(t,e){var n=""+l(t)+!!e;this.xhrGuids&&!this.xhrGuids[n]&&(this.xhrGuids[n]=!0,this.totalCbs+=1)}),u.on("xhr-load-removed",function(t,e){var n=""+l(t)+!!e;this.xhrGuids&&this.xhrGuids[n]&&(delete this.xhrGuids[n],this.totalCbs-=1)}),u.on("xhr-resolved",function(){this.endTime=a.now()}),u.on("addEventListener-end",function(t,e){e instanceof y&&"load"===t[0]&&u.emit("xhr-load-added",[t[1],t[2]],e)}),u.on("removeEventListener-end",function(t,e){e instanceof y&&"load"===t[0]&&u.emit("xhr-load-removed",[t[1],t[2]],e)}),u.on("fn-start",function(t,e,n){e instanceof y&&("onload"===n&&(this.onload=!0),("load"===(t[0]&&t[0].type)||this.onload)&&(this.xhrCbStart=a.now()))}),u.on("fn-end",function(t,e){this.xhrCbStart&&u.emit("xhr-cb-time",[a.now()-this.xhrCbStart,this.onload,e],e)}),u.on("fetch-before-start",function(t){function e(t,e){var n=!1;return e.newrelicHeader&&(t.set("newrelic",e.newrelicHeader),n=!0),e.traceContextParentHeader&&(t.set("traceparent",e.traceContextParentHeader),e.traceContextStateHeader&&t.set("tracestate",e.traceContextStateHeader),n=!0),n}var n,r=t[1]||{};"string"==typeof t[0]?n=t[0]:t[0]&&t[0].url?n=t[0].url:window.URL&&t[0]&&t[0]instanceof URL&&(n=t[0].href),n&&(this.parsedOrigin=c(n),this.sameOrigin=this.parsedOrigin.sameOrigin);var o=f(this.parsedOrigin);if(o&&(o.newrelicHeader||o.traceContextParentHeader))if("string"==typeof t[0]||window.URL&&t[0]&&t[0]instanceof URL){var i={};for(var a in r)i[a]=r[a];i.headers=new Headers(r.headers||{}),e(i.headers,o)&&(this.dt=o),t.length>1?t[1]=i:t.push(i)}else t[0]&&t[0].headers&&e(t[0].headers,o)&&(this.dt=o)}),u.on("fetch-start",function(t,e){this.params={},this.metrics={},this.startTime=a.now(),this.dt=e,t.length>=1&&(this.target=t[0]),t.length>=2&&(this.opts=t[1]);var n,r=this.opts||{},i=this.target;"string"==typeof i?n=i:"object"==typeof i&&i instanceof g?n=i.url:window.URL&&"object"==typeof i&&i instanceof URL&&(n=i.href),o(this,n);var s=(""+(i&&i instanceof g&&i.method||r.method||"GET")).toUpperCase();this.params.method=s,this.txSize=m(r.body)||0}),u.on("fetch-done",function(t,e){this.endTime=a.now(),this.params||(this.params={}),this.params.status=e?e.status:0;var n;"string"==typeof this.rxSize&&this.rxSize.length>0&&(n=+this.rxSize);var r={txSize:this.txSize,rxSize:n,duration:a.now()-this.startTime};s("xhr",[this.params,r,this.startTime,this.endTime,"fetch"],this)})}},{}],18:[function(t,e,n){var r={};e.exports=function(t){if(t in r)return r[t];var e=document.createElement("a"),n=window.location,o={};e.href=t,o.port=e.port;var i=e.href.split("://");!o.port&&i[1]&&(o.port=i[1].split("/")[0].split("@").pop().split(":")[1]),o.port&&"0"!==o.port||(o.port="https"===i[0]?"443":"80"),o.hostname=e.hostname||n.hostname,o.pathname=e.pathname,o.protocol=i[0],"/"!==o.pathname.charAt(0)&&(o.pathname="/"+o.pathname);var a=!e.protocol||":"===e.protocol||e.protocol===n.protocol,s=e.hostname===document.domain&&e.port===n.port;return o.sameOrigin=a&&(!e.hostname||s),"/"===o.pathname&&(r[t]=o),o}},{}],19:[function(t,e,n){function r(t,e){var n=t.responseType;return"json"===n&&null!==e?e:"arraybuffer"===n||"blob"===n||"json"===n?o(t.response):"text"===n||""===n||void 0===n?o(t.responseText):void 0}var o=t(22);e.exports=r},{}],20:[function(t,e,n){function r(){}function o(t,e,n,r){return function(){return u.recordSupportability("API/"+e+"/called"),i(t+e,[f.now()].concat(s(arguments)),n?null:this,r),n?void 0:this}}var i=t("handle"),a=t(32),s=t(33),c=t("ee").get("tracer"),f=t("loader"),u=t(25),d=NREUM;"undefined"==typeof window.newrelic&&(newrelic=d);var p=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],l="api-",h=l+"ixn-";a(p,function(t,e){d[e]=o(l,e,!0,"api")}),d.addPageAction=o(l,"addPageAction",!0),d.setCurrentRouteName=o(l,"routeName",!0),e.exports=newrelic,d.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(t,e){var n={},r=this,o="function"==typeof e;return i(h+"tracer",[f.now(),t,n],r),function(){if(c.emit((o?"":"no-")+"fn-start",[f.now(),r,o],n),o)try{return e.apply(this,arguments)}catch(t){throw c.emit("fn-err",[arguments,this,t],n),t}finally{c.emit("fn-end",[f.now()],n)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,e){m[e]=o(h,e)}),newrelic.noticeError=function(t,e){"string"==typeof t&&(t=new Error(t)),u.recordSupportability("API/noticeError/called"),i("err",[t,f.now(),!1,e])}},{}],21:[function(t,e,n){function r(t){if(NREUM.init){for(var e=NREUM.init,n=t.split("."),r=0;r<n.length-1;r++)if(e=e[n[r]],"object"!=typeof e)return;return e=e[n[n.length-1]]}}e.exports={getConfiguration:r}},{}],22:[function(t,e,n){e.exports=function(t){if("string"==typeof t&&t.length)return t.length;if("object"==typeof t){if("undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer&&t.byteLength)return t.byteLength;if("undefined"!=typeof Blob&&t instanceof Blob&&t.size)return t.size;if(!("undefined"!=typeof FormData&&t instanceof FormData))try{return JSON.stringify(t).length}catch(e){return}}}},{}],23:[function(t,e,n){var r=!1;try{var o=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("testPassive",null,o),window.removeEventListener("testPassive",null,o)}catch(i){}e.exports=function(t){return r?{passive:!0,capture:!!t}:!!t}},{}],24:[function(t,e,n){var r=0,o=navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);o&&(r=+o[1]),e.exports=r},{}],25:[function(t,e,n){function r(t,e){var n=[a,t,{name:t},e];return i("storeMetric",n,null,"api"),n}function o(t,e){var n=[s,t,{name:t},e];return i("storeEventMetrics",n,null,"api"),n}var i=t("handle"),a="sm",s="cm";e.exports={constants:{SUPPORTABILITY_METRIC:a,CUSTOM_METRIC:s},recordSupportability:r,recordCustom:o}},{}],26:[function(t,e,n){function r(){return s.exists&&performance.now?Math.round(performance.now()):(i=Math.max((new Date).getTime(),i))-a}function o(){return i}var i=(new Date).getTime(),a=i,s=t(34);e.exports=r,e.exports.offset=a,e.exports.getLastTimestamp=o},{}],27:[function(t,e,n){function r(t){return!(!t||!t.protocol||"file:"===t.protocol)}e.exports=r},{}],28:[function(t,e,n){function r(t,e){var n=t.getEntries();n.forEach(function(t){"first-paint"===t.name?p("timing",["fp",Math.floor(t.startTime)]):"first-contentful-paint"===t.name&&p("timing",["fcp",Math.floor(t.startTime)])})}function o(t,e){var n=t.getEntries();if(n.length>0){var r=n[n.length-1];if(c&&c<r.startTime)return;p("lcp",[r])}}function i(t){t.getEntries().forEach(function(t){t.hadRecentInput||p("cls",[t])})}function a(t){if(t instanceof v&&!g){var e=Math.round(t.timeStamp),n={type:t.type};e<=l.now()?n.fid=l.now()-e:e>l.offset&&e<=Date.now()?(e-=l.offset,n.fid=l.now()-e):e=l.now(),g=!0,p("timing",["fi",e,n])}}function s(t){"hidden"===t&&(c=l.now(),p("pageHide",[c]))}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var c,f,u,d,p=t("handle"),l=t("loader"),h=t(31),m=t(23),v=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){f=new PerformanceObserver(r);try{f.observe({entryTypes:["paint"]})}catch(w){}u=new PerformanceObserver(o);try{u.observe({entryTypes:["largest-contentful-paint"]})}catch(w){}d=new PerformanceObserver(i);try{d.observe({type:"layout-shift",buffered:!0})}catch(w){}}if("addEventListener"in document){var g=!1,y=["click","keydown","mousedown","pointerdown","touchstart"];y.forEach(function(t){document.addEventListener(t,a,m(!1))})}h(s)}},{}],29:[function(t,e,n){function r(){function t(){return e?15&e[n++]:16*Math.random()|0}var e=null,n=0,r=window.crypto||window.msCrypto;r&&r.getRandomValues&&(e=r.getRandomValues(new Uint8Array(31)));for(var o,i="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",a="",s=0;s<i.length;s++)o=i[s],"x"===o?a+=t().toString(16):"y"===o?(o=3&t()|8,a+=o.toString(16)):a+=o;return a}function o(){return a(16)}function i(){return a(32)}function a(t){function e(){return n?15&n[r++]:16*Math.random()|0}var n=null,r=0,o=window.crypto||window.msCrypto;o&&o.getRandomValues&&Uint8Array&&(n=o.getRandomValues(new Uint8Array(31)));for(var i=[],a=0;a<t;a++)i.push(e().toString(16));return i.join("")}e.exports={generateUuid:r,generateSpanId:o,generateTraceId:i}},{}],30:[function(t,e,n){function r(t,e){if(!o)return!1;if(t!==o)return!1;if(!e)return!0;if(!i)return!1;for(var n=i.split("."),r=e.split("."),a=0;a<r.length;a++)if(r[a]!==n[a])return!1;return!0}var o=null,i=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var s=navigator.userAgent,c=s.match(a);c&&s.indexOf("Chrome")===-1&&s.indexOf("Chromium")===-1&&(o="Safari",i=c[1])}e.exports={agent:o,version:i,match:r}},{}],31:[function(t,e,n){function r(t){function e(){t(s&&document[s]?document[s]:document[i]?"hidden":"visible")}"addEventListener"in document&&a&&document.addEventListener(a,e,o(!1))}var o=t(23);e.exports=r;var i,a,s;"undefined"!=typeof document.hidden?(i="hidden",a="visibilitychange",s="visibilityState"):"undefined"!=typeof document.msHidden?(i="msHidden",a="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(i="webkitHidden",a="webkitvisibilitychange",s="webkitVisibilityState")},{}],32:[function(t,e,n){function r(t,e){var n=[],r="",i=0;for(r in t)o.call(t,r)&&(n[i]=e(r,t[r]),i+=1);return n}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],33:[function(t,e,n){function r(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,o=n-e||0,i=Array(o<0?0:o);++r<o;)i[r]=t[e+r];return i}e.exports=r},{}],34:[function(t,e,n){e.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(t,e,n){function r(){}function o(t){function e(t){return t&&t instanceof r?t:t?f(t,c,a):a()}function n(n,r,o,i,a){if(a!==!1&&(a=!0),!l.aborted||i){t&&a&&t(n,r,o);for(var s=e(o),c=m(n),f=c.length,u=0;u<f;u++)c[u].apply(s,r);var p=d[y[n]];return p&&p.push([x,n,r,s]),s}}function i(t,e){g[t]=m(t).concat(e)}function h(t,e){var n=g[t];if(n)for(var r=0;r<n.length;r++)n[r]===e&&n.splice(r,1)}function m(t){return g[t]||[]}function v(t){return p[t]=p[t]||o(n)}function w(t,e){l.aborted||u(t,function(t,n){e=e||"feature",y[n]=e,e in d||(d[e]=[])})}var g={},y={},x={on:i,addEventListener:i,removeEventListener:h,emit:n,get:v,listeners:m,context:e,buffer:w,abort:s,aborted:!1};return x}function i(t){return f(t,c,a)}function a(){return new r}function s(){(d.api||d.feature)&&(l.aborted=!0,d=l.backlog={})}var c="nr@context",f=t("gos"),u=t(32),d={},p={},l=e.exports=o();e.exports.getOrSetContext=i,l.backlog=d},{}],gos:[function(t,e,n){function r(t,e,n){if(o.call(t,e))return t[e];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return t[e]=r,r}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],handle:[function(t,e,n){function r(t,e,n,r){o.buffer([t],r),o.emit(t,e,n)}var o=t("ee").get("handle");e.exports=r,r.ee=o},{}],id:[function(t,e,n){function r(t){var e=typeof t;return!t||"object"!==e&&"function"!==e?-1:t===window?0:a(t,i,function(){return o++})}var o=1,i="nr@id",a=t("gos");e.exports=r},{}],loader:[function(t,e,n){function r(){if(!P++){var t=T.info=NREUM.info,e=v.getElementsByTagName("script")[0];if(setTimeout(f.abort,3e4),!(t&&t.licenseKey&&t.applicationID&&e))return f.abort();c(R,function(e,n){t[e]||(t[e]=n)});var n=a();s("mark",["onload",n+T.offset],null,"api"),s("timing",["load",n]);var r=v.createElement("script");0===t.agent.indexOf("http://")||0===t.agent.indexOf("https://")?r.src=t.agent:r.src=h+"://"+t.agent,e.parentNode.insertBefore(r,e)}}function o(){"complete"===v.readyState&&i()}function i(){s("mark",["domContent",a()+T.offset],null,"api")}var a=t(26),s=t("handle"),c=t(32),f=t("ee"),u=t(30),d=t(27),p=t(21),l=t(23),h=p.getConfiguration("ssl")===!1?"http":"https",m=window,v=m.document,w="addEventListener",g="attachEvent",y=m.XMLHttpRequest,x=y&&y.prototype,b=!d(m.location);NREUM.o={ST:setTimeout,SI:m.setImmediate,CT:clearTimeout,XHR:y,REQ:m.Request,EV:m.Event,PR:m.Promise,MO:m.MutationObserver};var E=""+location,R={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-spa-1212.min.js"},O=y&&x&&x[w]&&!/CriOS/.test(navigator.userAgent),T=e.exports={offset:a.getLastTimestamp(),now:a,origin:E,features:{},xhrWrappable:O,userAgent:u,disabled:b};if(!b){t(20),t(28),v[w]?(v[w]("DOMContentLoaded",i,l(!1)),m[w]("load",r,l(!1))):(v[g]("onreadystatechange",o),m[g]("onload",r)),s("mark",["firstbyte",a.getLastTimestamp()],null,"api");var P=0}},{}],"wrap-function":[function(t,e,n){function r(t,e){function n(e,n,r,c,f){function nrWrapper(){var i,a,u,p;try{a=this,i=d(arguments),u="function"==typeof r?r(i,a):r||{}}catch(l){o([l,"",[i,a,c],u],t)}s(n+"start",[i,a,c],u,f);try{return p=e.apply(a,i)}catch(h){throw s(n+"err",[i,a,h],u,f),h}finally{s(n+"end",[i,a,p],u,f)}}return a(e)?e:(n||(n=""),nrWrapper[p]=e,i(e,nrWrapper,t),nrWrapper)}function r(t,e,r,o,i){r||(r="");var s,c,f,u="-"===r.charAt(0);for(f=0;f<e.length;f++)c=e[f],s=t[c],a(s)||(t[c]=n(s,u?c+r:r,o,c,i))}function s(n,r,i,a){if(!h||e){var s=h;h=!0;try{t.emit(n,r,i,e,a)}catch(c){o([c,n,r,i],t)}h=s}}return t||(t=u),n.inPlace=r,n.flag=p,n}function o(t,e){e||(e=u);try{e.emit("internal-error",t)}catch(n){}}function i(t,e,n){if(Object.defineProperty&&Object.keys)try{var r=Object.keys(t);return r.forEach(function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e,e}})}),e}catch(i){o([i],n)}for(var a in t)l.call(t,a)&&(e[a]=t[a]);return e}function a(t){return!(t&&t instanceof Function&&t.apply&&!t[p])}function s(t,e){var n=e(t);return n[p]=t,i(t,n,u),n}function c(t,e,n){var r=t[e];t[e]=s(r,n)}function f(){for(var t=arguments.length,e=new Array(t),n=0;n<t;++n)e[n]=arguments[n];return e}var u=t("ee"),d=t(33),p="nr@original",l=Object.prototype.hasOwnProperty,h=!1;e.exports=r,e.exports.wrapFunction=s,e.exports.wrapInPlace=c,e.exports.argsToArray=f},{}]},{},["loader",2,17,5,3,4]);</script>
    <script type="text/javascript">
    ; window.NREUM || (NREUM = {}); NREUM.init = { privacy: { cookies_enabled: true } };
window.NREUM || (NREUM = {}), __nr_require = function (t, e, n) { function r(n) { if (!e[n]) { var i = e[n] = { exports: {} }; t[n][0].call(i.exports, function (e) { var i = t[n][1][e]; return r(i || e) }, i, i.exports) } return e[n].exports } if ("function" == typeof __nr_require) return __nr_require; for (var i = 0; i < n.length; i++)r(n[i]); return r }({ 1: [function (t, e, n) { function r(t) { try { s.console && console.log(t) } catch (e) { } } var i, o = t("ee"), a = t(25), s = {}; try { i = localStorage.getItem("__nr_flags").split(","), console && "function" == typeof console.log && (s.console = !0, i.indexOf("dev") !== -1 && (s.dev = !0), i.indexOf("nr_dev") !== -1 && (s.nrDev = !0)) } catch (c) { } s.nrDev && o.on("internal-error", function (t) { r(t.stack) }), s.dev && o.on("fn-err", function (t, e, n) { r(n.stack) }), s.dev && (r("NR AGENT IN DEVELOPMENT MODE"), r("flags: " + a(s, function (t, e) { return t }).join(", "))) }, {}], 2: [function (t, e, n) { function r(t, e, n, r, s) { try { p ? p -= 1 : i(s || new UncaughtException(t, e, n), !0) } catch (f) { try { o("ierr", [f, c.now(), !0]) } catch (d) { } } return "function" == typeof u && u.apply(this, a(arguments)) } function UncaughtException(t, e, n) { this.message = t || "Uncaught error with no additional information", this.sourceURL = e, this.line = n } function i(t, e) { var n = e ? null : c.now(); o("err", [t, n]) } var o = t("handle"), a = t(26), s = t("ee"), c = t("loader"), f = t("gos"), u = window.onerror, d = !1, l = "nr@seenError"; if (!c.disabled) { var p = 0; c.features.err = !0, t(1), window.onerror = r; try { throw new Error } catch (h) { "stack" in h && (t(9), t(8), "addEventListener" in window && t(5), c.xhrWrappable && t(10), d = !0) } s.on("fn-start", function (t, e, n) { d && (p += 1) }), s.on("fn-err", function (t, e, n) { d && !n[l] && (f(n, l, function () { return !0 }), this.thrown = !0, i(n)) }), s.on("fn-end", function () { d && !this.thrown && p > 0 && (p -= 1) }), s.on("internal-error", function (t) { o("ierr", [t, c.now(), !0]) }) } }, {}], 3: [function (t, e, n) { var r = t("loader"); r.disabled || (r.features.ins = !0) }, {}], 4: [function (t, e, n) { function r(t) { } if (window.performance && window.performance.timing && window.performance.getEntriesByType) { var i = t("ee"), o = t("handle"), a = t(9), s = t(8), c = "learResourceTimings", f = "addEventListener", u = "resourcetimingbufferfull", d = "bstResource", l = "resource", p = "-start", h = "-end", m = "fn" + p, w = "fn" + h, v = "bstTimer", g = "pushState", y = t("loader"); if (!y.disabled) { y.features.stn = !0, t(7), "addEventListener" in window && t(5); var x = NREUM.o.EV; i.on(m, function (t, e) { var n = t[0]; n instanceof x && (this.bstStart = y.now()) }), i.on(w, function (t, e) { var n = t[0]; n instanceof x && o("bst", [n, e, this.bstStart, y.now()]) }), a.on(m, function (t, e, n) { this.bstStart = y.now(), this.bstType = n }), a.on(w, function (t, e) { o(v, [e, this.bstStart, y.now(), this.bstType]) }), s.on(m, function () { this.bstStart = y.now() }), s.on(w, function (t, e) { o(v, [e, this.bstStart, y.now(), "requestAnimationFrame"]) }), i.on(g + p, function (t) { this.time = y.now(), this.startPath = location.pathname + location.hash }), i.on(g + h, function (t) { o("bstHist", [location.pathname + location.hash, this.startPath, this.time]) }), f in window.performance && (window.performance["c" + c] ? window.performance[f](u, function (t) { o(d, [window.performance.getEntriesByType(l)]), window.performance["c" + c]() }, !1) : window.performance[f]("webkit" + u, function (t) { o(d, [window.performance.getEntriesByType(l)]), window.performance["webkitC" + c]() }, !1)), document[f]("scroll", r, { passive: !0 }), document[f]("keypress", r, !1), document[f]("click", r, !1) } } }, {}], 5: [function (t, e, n) { function r(t) { for (var e = t; e && !e.hasOwnProperty(u);)e = Object.getPrototypeOf(e); e && i(e) } function i(t) { s.inPlace(t, [u, d], "-", o) } function o(t, e) { return t[1] } var a = t("ee").get("events"), s = t("wrap-function")(a, !0), c = t("gos"), f = XMLHttpRequest, u = "addEventListener", d = "removeEventListener"; e.exports = a, "getPrototypeOf" in Object ? (r(document), r(window), r(f.prototype)) : f.prototype.hasOwnProperty(u) && (i(window), i(f.prototype)), a.on(u + "-start", function (t, e) { var n = t[1], r = c(n, "nr@wrapped", function () { function t() { if ("function" == typeof n.handleEvent) return n.handleEvent.apply(n, arguments) } var e = { object: t, "function": n }[typeof n]; return e ? s(e, "fn-", null, e.name || "anonymous") : n }); this.wrapped = t[1] = r }), a.on(d + "-start", function (t) { t[1] = this.wrapped || t[1] }) }, {}], 6: [function (t, e, n) { function r(t, e, n) { var r = t[e]; "function" == typeof r && (t[e] = function () { var t = o(arguments), e = {}; i.emit(n + "before-start", [t], e); var a; e[m] && e[m].dt && (a = e[m].dt); var s = r.apply(this, t); return i.emit(n + "start", [t, a], s), s.then(function (t) { return i.emit(n + "end", [null, t], s), t }, function (t) { throw i.emit(n + "end", [t], s), t }) }) } var i = t("ee").get("fetch"), o = t(26), a = t(25); e.exports = i; var s = window, c = "fetch-", f = c + "body-", u = ["arrayBuffer", "blob", "json", "text", "formData"], d = s.Request, l = s.Response, p = s.fetch, h = "prototype", m = "nr@context"; d && l && p && (a(u, function (t, e) { r(d[h], e, f), r(l[h], e, f) }), r(s, "fetch", c), i.on(c + "end", function (t, e) { var n = this; if (e) { var r = e.headers.get("content-length"); null !== r && (n.rxSize = r), i.emit(c + "done", [null, e], n) } else i.emit(c + "done", [t], n) })) }, {}], 7: [function (t, e, n) { var r = t("ee").get("history"), i = t("wrap-function")(r); e.exports = r; var o = window.history && window.history.constructor && window.history.constructor.prototype, a = window.history; o && o.pushState && o.replaceState && (a = o), i.inPlace(a, ["pushState", "replaceState"], "-") }, {}], 8: [function (t, e, n) { var r = t("ee").get("raf"), i = t("wrap-function")(r), o = "equestAnimationFrame"; e.exports = r, i.inPlace(window, ["r" + o, "mozR" + o, "webkitR" + o, "msR" + o], "raf-"), r.on("raf-start", function (t) { t[0] = i(t[0], "fn-") }) }, {}], 9: [function (t, e, n) { function r(t, e, n) { t[0] = a(t[0], "fn-", null, n) } function i(t, e, n) { this.method = n, this.timerDuration = isNaN(t[1]) ? 0 : +t[1], t[0] = a(t[0], "fn-", this, n) } var o = t("ee").get("timer"), a = t("wrap-function")(o), s = "setTimeout", c = "setInterval", f = "clearTimeout", u = "-start", d = "-"; e.exports = o, a.inPlace(window, [s, "setImmediate"], s + d), a.inPlace(window, [c], c + d), a.inPlace(window, [f, "clearImmediate"], f + d), o.on(c + u, r), o.on(s + u, i) }, {}], 10: [function (t, e, n) { function r(t, e) { d.inPlace(e, ["onreadystatechange"], "fn-", s) } function i() { var t = this, e = u.context(t); t.readyState > 3 && !e.resolved && (e.resolved = !0, u.emit("xhr-resolved", [], t)), d.inPlace(t, g, "fn-", s) } function o(t) { y.push(t), h && (b ? b.then(a) : w ? w(a) : (E = -E, R.data = E)) } function a() { for (var t = 0; t < y.length; t++)r([], y[t]); y.length && (y = []) } function s(t, e) { return e } function c(t, e) { for (var n in t) e[n] = t[n]; return e } t(5); var f = t("ee"), u = f.get("xhr"), d = t("wrap-function")(u), l = NREUM.o, p = l.XHR, h = l.MO, m = l.PR, w = l.SI, v = "readystatechange", g = ["onload", "onerror", "onabort", "onloadstart", "onloadend", "onprogress", "ontimeout"], y = []; e.exports = u; var x = window.XMLHttpRequest = function (t) { var e = new p(t); try { u.emit("new-xhr", [e], e), e.addEventListener(v, i, !1) } catch (n) { try { u.emit("internal-error", [n]) } catch (r) { } } return e }; if (c(p, x), x.prototype = p.prototype, d.inPlace(x.prototype, ["open", "send"], "-xhr-", s), u.on("send-xhr-start", function (t, e) { r(t, e), o(e) }), u.on("open-xhr-start", r), h) { var b = m && m.resolve(); if (!w && !m) { var E = 1, R = document.createTextNode(E); new h(a).observe(R, { characterData: !0 }) } } else f.on("fn-end", function (t) { t[0] && t[0].type === v || a() }) }, {}], 11: [function (t, e, n) { function r(t) { if (!s(t)) return null; var e = window.NREUM; if (!e.loader_config) return null; var n = (e.loader_config.accountID || "").toString() || null, r = (e.loader_config.agentID || "").toString() || null, f = (e.loader_config.trustKey || "").toString() || null; if (!n || !r) return null; var h = p.generateSpanId(), m = p.generateTraceId(), w = Date.now(), v = { spanId: h, traceId: m, timestamp: w }; return (t.sameOrigin || c(t) && l()) && (v.traceContextParentHeader = i(h, m), v.traceContextStateHeader = o(h, w, n, r, f)), (t.sameOrigin && !u() || !t.sameOrigin && c(t) && d()) && (v.newrelicHeader = a(h, m, w, n, r, f)), v } function i(t, e) { return "00-" + e + "-" + t + "-01" } function o(t, e, n, r, i) { var o = 0, a = "", s = 1, c = "", f = ""; return i + "@nr=" + o + "-" + s + "-" + n + "-" + r + "-" + t + "-" + a + "-" + c + "-" + f + "-" + e } function a(t, e, n, r, i, o) { var a = "btoa" in window && "function" == typeof window.btoa; if (!a) return null; var s = { v: [0, 1], d: { ty: "Browser", ac: r, ap: i, id: t, tr: e, ti: n } }; return o && r !== o && (s.d.tk = o), btoa(JSON.stringify(s)) } function s(t) { return f() && c(t) } function c(t) { var e = !1, n = {}; if ("init" in NREUM && "distributed_tracing" in NREUM.init && (n = NREUM.init.distributed_tracing), t.sameOrigin) e = !0; else if (n.allowed_origins instanceof Array) for (var r = 0; r < n.allowed_origins.length; r++) { var i = h(n.allowed_origins[r]); if (t.hostname === i.hostname && t.protocol === i.protocol && t.port === i.port) { e = !0; break } } return e } function f() { return "init" in NREUM && "distributed_tracing" in NREUM.init && !!NREUM.init.distributed_tracing.enabled } function u() { return "init" in NREUM && "distributed_tracing" in NREUM.init && !!NREUM.init.distributed_tracing.exclude_newrelic_header } function d() { return "init" in NREUM && "distributed_tracing" in NREUM.init && NREUM.init.distributed_tracing.cors_use_newrelic_header !== !1 } function l() { return "init" in NREUM && "distributed_tracing" in NREUM.init && !!NREUM.init.distributed_tracing.cors_use_tracecontext_headers } var p = t(22), h = t(13); e.exports = { generateTracePayload: r, shouldGenerateTrace: s } }, {}], 12: [function (t, e, n) { function r(t) { var e = this.params, n = this.metrics; if (!this.ended) { this.ended = !0; for (var r = 0; r < l; r++)t.removeEventListener(d[r], this.listener, !1); e.aborted || (n.duration = a.now() - this.startTime, this.loadCaptureCalled || 4 !== t.readyState ? null == e.status && (e.status = 0) : o(this, t), n.cbTime = this.cbTime, u.emit("xhr-done", [t], t), s("xhr", [e, n, this.startTime])) } } function i(t, e) { var n = c(e), r = t.params; r.host = n.hostname + ":" + n.port, r.pathname = n.pathname, t.parsedOrigin = c(e), t.sameOrigin = t.parsedOrigin.sameOrigin } function o(t, e) { t.params.status = e.status; var n = w(e, t.lastSize); if (n && (t.metrics.rxSize = n), t.sameOrigin) { var r = e.getResponseHeader("X-NewRelic-App-Data"); r && (t.params.cat = r.split(", ").pop()) } t.loadCaptureCalled = !0 } var a = t("loader"); if (a.xhrWrappable && !a.disabled) { var s = t("handle"), c = t(13), f = t(11).generateTracePayload, u = t("ee"), d = ["load", "error", "abort", "timeout"], l = d.length, p = t("id"), h = t(18), m = t(17), w = t(14), v = window.XMLHttpRequest; a.features.xhr = !0, t(10), t(6), u.on("new-xhr", function (t) { var e = this; e.totalCbs = 0, e.called = 0, e.cbTime = 0, e.end = r, e.ended = !1, e.xhrGuids = {}, e.lastSize = null, e.loadCaptureCalled = !1, e.params = this.params || {}, e.metrics = this.metrics || {}, t.addEventListener("load", function (n) { o(e, t) }, !1), h && (h > 34 || h < 10) || window.opera || t.addEventListener("progress", function (t) { e.lastSize = t.loaded }, !1) }), u.on("open-xhr-start", function (t) { this.params = { method: t[0] }, i(this, t[1]), this.metrics = {} }), u.on("open-xhr-end", function (t, e) { "loader_config" in NREUM && "xpid" in NREUM.loader_config && this.sameOrigin && e.setRequestHeader("X-NewRelic-ID", NREUM.loader_config.xpid); var n = f(this.parsedOrigin); if (n) { var r = !1; n.newrelicHeader && (e.setRequestHeader("newrelic", n.newrelicHeader), r = !0), n.traceContextParentHeader && (e.setRequestHeader("traceparent", n.traceContextParentHeader), n.traceContextStateHeader && e.setRequestHeader("tracestate", n.traceContextStateHeader), r = !0), r && (this.dt = n) } }), u.on("send-xhr-start", function (t, e) { var n = this.metrics, r = t[0], i = this; if (n && r) { var o = m(r); o && (n.txSize = o) } this.startTime = a.now(), this.listener = function (t) { try { "abort" !== t.type || i.loadCaptureCalled || (i.params.aborted = !0), ("load" !== t.type || i.called === i.totalCbs && (i.onloadCalled || "function" != typeof e.onload)) && i.end(e) } catch (n) { try { u.emit("internal-error", [n]) } catch (r) { } } }; for (var s = 0; s < l; s++)e.addEventListener(d[s], this.listener, !1) }), u.on("xhr-cb-time", function (t, e, n) { this.cbTime += t, e ? this.onloadCalled = !0 : this.called += 1, this.called !== this.totalCbs || !this.onloadCalled && "function" == typeof n.onload || this.end(n) }), u.on("xhr-load-added", function (t, e) { var n = "" + p(t) + !!e; this.xhrGuids && !this.xhrGuids[n] && (this.xhrGuids[n] = !0, this.totalCbs += 1) }), u.on("xhr-load-removed", function (t, e) { var n = "" + p(t) + !!e; this.xhrGuids && this.xhrGuids[n] && (delete this.xhrGuids[n], this.totalCbs -= 1) }), u.on("addEventListener-end", function (t, e) { e instanceof v && "load" === t[0] && u.emit("xhr-load-added", [t[1], t[2]], e) }), u.on("removeEventListener-end", function (t, e) { e instanceof v && "load" === t[0] && u.emit("xhr-load-removed", [t[1], t[2]], e) }), u.on("fn-start", function (t, e, n) { e instanceof v && ("onload" === n && (this.onload = !0), ("load" === (t[0] && t[0].type) || this.onload) && (this.xhrCbStart = a.now())) }), u.on("fn-end", function (t, e) { this.xhrCbStart && u.emit("xhr-cb-time", [a.now() - this.xhrCbStart, this.onload, e], e) }), u.on("fetch-before-start", function (t) { function e(t, e) { var n = !1; return e.newrelicHeader && (t.set("newrelic", e.newrelicHeader), n = !0), e.traceContextParentHeader && (t.set("traceparent", e.traceContextParentHeader), e.traceContextStateHeader && t.set("tracestate", e.traceContextStateHeader), n = !0), n } var n, r = t[1] || {}; "string" == typeof t[0] ? n = t[0] : t[0] && t[0].url ? n = t[0].url : window.URL && t[0] && t[0] instanceof URL && (n = t[0].href), n && (this.parsedOrigin = c(n), this.sameOrigin = this.parsedOrigin.sameOrigin); var i = f(this.parsedOrigin); if (i && (i.newrelicHeader || i.traceContextParentHeader)) if ("string" == typeof t[0] || window.URL && t[0] && t[0] instanceof URL) { var o = {}; for (var a in r) o[a] = r[a]; o.headers = new Headers(r.headers || {}), e(o.headers, i) && (this.dt = i), t.length > 1 ? t[1] = o : t.push(o) } else t[0] && t[0].headers && e(t[0].headers, i) && (this.dt = i) }) } }, {}], 13: [function (t, e, n) { var r = {}; e.exports = function (t) { if (t in r) return r[t]; var e = document.createElement("a"), n = window.location, i = {}; e.href = t, i.port = e.port; var o = e.href.split("://"); !i.port && o[1] && (i.port = o[1].split("/")[0].split("@").pop().split(":")[1]), i.port && "0" !== i.port || (i.port = "https" === o[0] ? "443" : "80"), i.hostname = e.hostname || n.hostname, i.pathname = e.pathname, i.protocol = o[0], "/" !== i.pathname.charAt(0) && (i.pathname = "/" + i.pathname); var a = !e.protocol || ":" === e.protocol || e.protocol === n.protocol, s = e.hostname === document.domain && e.port === n.port; return i.sameOrigin = a && (!e.hostname || s), "/" === i.pathname && (r[t] = i), i } }, {}], 14: [function (t, e, n) { function r(t, e) { var n = t.responseType; return "json" === n && null !== e ? e : "arraybuffer" === n || "blob" === n || "json" === n ? i(t.response) : "text" === n || "" === n || void 0 === n ? i(t.responseText) : void 0 } var i = t(17); e.exports = r }, {}], 15: [function (t, e, n) { function r() { } function i(t, e, n) { return function () { return o(t, [f.now()].concat(s(arguments)), e ? null : this, n), e ? void 0 : this } } var o = t("handle"), a = t(25), s = t(26), c = t("ee").get("tracer"), f = t("loader"), u = NREUM; "undefined" == typeof window.newrelic && (newrelic = u); var d = ["setPageViewName", "setCustomAttribute", "setErrorHandler", "finished", "addToTrace", "inlineHit", "addRelease"], l = "api-", p = l + "ixn-"; a(d, function (t, e) { u[e] = i(l + e, !0, "api") }), u.addPageAction = i(l + "addPageAction", !0), u.setCurrentRouteName = i(l + "routeName", !0), e.exports = newrelic, u.interaction = function () { return (new r).get() }; var h = r.prototype = { createTracer: function (t, e) { var n = {}, r = this, i = "function" == typeof e; return o(p + "tracer", [f.now(), t, n], r), function () { if (c.emit((i ? "" : "no-") + "fn-start", [f.now(), r, i], n), i) try { return e.apply(this, arguments) } catch (t) { throw c.emit("fn-err", [arguments, this, t], n), t } finally { c.emit("fn-end", [f.now()], n) } } } }; a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","), function (t, e) { h[e] = i(p + e) }), newrelic.noticeError = function (t, e) { "string" == typeof t && (t = new Error(t)), o("err", [t, f.now(), !1, e]) } }, {}], 16: [function (t, e, n) { function r(t) { if (NREUM.init) { for (var e = NREUM.init, n = t.split("."), r = 0; r < n.length - 1; r++)if (e = e[n[r]], "object" != typeof e) return; return e = e[n[n.length - 1]] } } e.exports = { getConfiguration: r } }, {}], 17: [function (t, e, n) { e.exports = function (t) { if ("string" == typeof t && t.length) return t.length; if ("object" == typeof t) { if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer && t.byteLength) return t.byteLength; if ("undefined" != typeof Blob && t instanceof Blob && t.size) return t.size; if (!("undefined" != typeof FormData && t instanceof FormData)) try { return JSON.stringify(t).length } catch (e) { return } } } }, {}], 18: [function (t, e, n) { var r = 0, i = navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/); i && (r = +i[1]), e.exports = r }, {}], 19: [function (t, e, n) { function r() { return s.exists && performance.now ? Math.round(performance.now()) : (o = Math.max((new Date).getTime(), o)) - a } function i() { return o } var o = (new Date).getTime(), a = o, s = t(27); e.exports = r, e.exports.offset = a, e.exports.getLastTimestamp = i }, {}], 20: [function (t, e, n) { function r(t) { return !(!t || !t.protocol || "file:" === t.protocol) } e.exports = r }, {}], 21: [function (t, e, n) { function r(t, e) { var n = t.getEntries(); n.forEach(function (t) { "first-paint" === t.name ? d("timing", ["fp", Math.floor(t.startTime)]) : "first-contentful-paint" === t.name && d("timing", ["fcp", Math.floor(t.startTime)]) }) } function i(t, e) { var n = t.getEntries(); n.length > 0 && d("lcp", [n[n.length - 1]]) } function o(t) { t.getEntries().forEach(function (t) { t.hadRecentInput || d("cls", [t]) }) } function a(t) { if (t instanceof h && !w) { var e = Math.round(t.timeStamp), n = { type: t.type }; e <= l.now() ? n.fid = l.now() - e : e > l.offset && e <= Date.now() ? (e -= l.offset, n.fid = l.now() - e) : e = l.now(), w = !0, d("timing", ["fi", e, n]) } } function s(t) { d("pageHide", [l.now(), t]) } if (!("init" in NREUM && "page_view_timing" in NREUM.init && "enabled" in NREUM.init.page_view_timing && NREUM.init.page_view_timing.enabled === !1)) { var c, f, u, d = t("handle"), l = t("loader"), p = t(24), h = NREUM.o.EV; if ("PerformanceObserver" in window && "function" == typeof window.PerformanceObserver) { c = new PerformanceObserver(r); try { c.observe({ entryTypes: ["paint"] }) } catch (m) { } f = new PerformanceObserver(i); try { f.observe({ entryTypes: ["largest-contentful-paint"] }) } catch (m) { } u = new PerformanceObserver(o); try { u.observe({ type: "layout-shift", buffered: !0 }) } catch (m) { } } if ("addEventListener" in document) { var w = !1, v = ["click", "keydown", "mousedown", "pointerdown", "touchstart"]; v.forEach(function (t) { document.addEventListener(t, a, !1) }) } p(s) } }, {}], 22: [function (t, e, n) { function r() { function t() { return e ? 15 & e[n++] : 16 * Math.random() | 0 } var e = null, n = 0, r = window.crypto || window.msCrypto; r && r.getRandomValues && (e = r.getRandomValues(new Uint8Array(31))); for (var i, o = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", a = "", s = 0; s < o.length; s++)i = o[s], "x" === i ? a += t().toString(16) : "y" === i ? (i = 3 & t() | 8, a += i.toString(16)) : a += i; return a } function i() { return a(16) } function o() { return a(32) } function a(t) { function e() { return n ? 15 & n[r++] : 16 * Math.random() | 0 } var n = null, r = 0, i = window.crypto || window.msCrypto; i && i.getRandomValues && Uint8Array && (n = i.getRandomValues(new Uint8Array(31))); for (var o = [], a = 0; a < t; a++)o.push(e().toString(16)); return o.join("") } e.exports = { generateUuid: r, generateSpanId: i, generateTraceId: o } }, {}], 23: [function (t, e, n) { function r(t, e) { if (!i) return !1; if (t !== i) return !1; if (!e) return !0; if (!o) return !1; for (var n = o.split("."), r = e.split("."), a = 0; a < r.length; a++)if (r[a] !== n[a]) return !1; return !0 } var i = null, o = null, a = /Version\/(\S+)\s+Safari/; if (navigator.userAgent) { var s = navigator.userAgent, c = s.match(a); c && s.indexOf("Chrome") === -1 && s.indexOf("Chromium") === -1 && (i = "Safari", o = c[1]) } e.exports = { agent: i, version: o, match: r } }, {}], 24: [function (t, e, n) { function r(t) { function e() { t(a && document[a] ? document[a] : document[i] ? "hidden" : "visible") } "addEventListener" in document && o && document.addEventListener(o, e, !1) } e.exports = r; var i, o, a; "undefined" != typeof document.hidden ? (i = "hidden", o = "visibilitychange", a = "visibilityState") : "undefined" != typeof document.msHidden ? (i = "msHidden", o = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (i = "webkitHidden", o = "webkitvisibilitychange", a = "webkitVisibilityState") }, {}], 25: [function (t, e, n) { function r(t, e) { var n = [], r = "", o = 0; for (r in t) i.call(t, r) && (n[o] = e(r, t[r]), o += 1); return n } var i = Object.prototype.hasOwnProperty; e.exports = r }, {}], 26: [function (t, e, n) { function r(t, e, n) { e || (e = 0), "undefined" == typeof n && (n = t ? t.length : 0); for (var r = -1, i = n - e || 0, o = Array(i < 0 ? 0 : i); ++r < i;)o[r] = t[e + r]; return o } e.exports = r }, {}], 27: [function (t, e, n) { e.exports = { exists: "undefined" != typeof window.performance && window.performance.timing && "undefined" != typeof window.performance.timing.navigationStart } }, {}], ee: [function (t, e, n) { function r() { } function i(t) { function e(t) { return t && t instanceof r ? t : t ? f(t, c, a) : a() } function n(n, r, i, o, a) { if (a !== !1 && (a = !0), !p.aborted || o) { t && a && t(n, r, i); for (var s = e(i), c = m(n), f = c.length, u = 0; u < f; u++)c[u].apply(s, r); var l = d[y[n]]; return l && l.push([x, n, r, s]), s } } function o(t, e) { g[t] = m(t).concat(e) } function h(t, e) { var n = g[t]; if (n) for (var r = 0; r < n.length; r++)n[r] === e && n.splice(r, 1) } function m(t) { return g[t] || [] } function w(t) { return l[t] = l[t] || i(n) } function v(t, e) { p.aborted || u(t, function (t, n) { e = e || "feature", y[n] = e, e in d || (d[e] = []) }) } var g = {}, y = {}, x = { on: o, addEventListener: o, removeEventListener: h, emit: n, get: w, listeners: m, context: e, buffer: v, abort: s, aborted: !1 }; return x } function o(t) { return f(t, c, a) } function a() { return new r } function s() { (d.api || d.feature) && (p.aborted = !0, d = p.backlog = {}) } var c = "nr@context", f = t("gos"), u = t(25), d = {}, l = {}, p = e.exports = i(); e.exports.getOrSetContext = o, p.backlog = d }, {}], gos: [function (t, e, n) { function r(t, e, n) { if (i.call(t, e)) return t[e]; var r = n(); if (Object.defineProperty && Object.keys) try { return Object.defineProperty(t, e, { value: r, writable: !0, enumerable: !1 }), r } catch (o) { } return t[e] = r, r } var i = Object.prototype.hasOwnProperty; e.exports = r }, {}], handle: [function (t, e, n) { function r(t, e, n, r) { i.buffer([t], r), i.emit(t, e, n) } var i = t("ee").get("handle"); e.exports = r, r.ee = i }, {}], id: [function (t, e, n) { function r(t) { var e = typeof t; return !t || "object" !== e && "function" !== e ? -1 : t === window ? 0 : a(t, o, function () { return i++ }) } var i = 1, o = "nr@id", a = t("gos"); e.exports = r }, {}], loader: [function (t, e, n) { function r() { if (!S++) { var t = O.info = NREUM.info, e = m.getElementsByTagName("script")[0]; if (setTimeout(f.abort, 3e4), !(t && t.licenseKey && t.applicationID && e)) return f.abort(); c(E, function (e, n) { t[e] || (t[e] = n) }); var n = a(); s("mark", ["onload", n + O.offset], null, "api"), s("timing", ["load", n]); var r = m.createElement("script"); 0 === t.agent.indexOf("http://") || 0 === t.agent.indexOf("https://") ? r.src = t.agent : r.src = p + "://" + t.agent, e.parentNode.insertBefore(r, e) } } function i() { "complete" === m.readyState && o() } function o() { s("mark", ["domContent", a() + O.offset], null, "api") } var a = t(19), s = t("handle"), c = t(25), f = t("ee"), u = t(23), d = t(20), l = t(16), p = l.getConfiguration("ssl") === !1 ? "http" : "https", h = window, m = h.document, w = "addEventListener", v = "attachEvent", g = h.XMLHttpRequest, y = g && g.prototype, x = !d(h.location); NREUM.o = { ST: setTimeout, SI: h.setImmediate, CT: clearTimeout, XHR: g, REQ: h.Request, EV: h.Event, PR: h.Promise, MO: h.MutationObserver }; var b = "" + location, E = { beacon: "bam.nr-data.net", errorBeacon: "bam.nr-data.net", agent: "js-agent.newrelic.com/nr-1209.min.js" }, R = g && y && y[w] && !/CriOS/.test(navigator.userAgent), O = e.exports = { offset: a.getLastTimestamp(), now: a, origin: b, features: {}, xhrWrappable: R, userAgent: u, disabled: x }; if (!x) { t(15), t(21), m[w] ? (m[w]("DOMContentLoaded", o, !1), h[w]("load", r, !1)) : (m[v]("onreadystatechange", i), h[v]("onload", r)), s("mark", ["firstbyte", a.getLastTimestamp()], null, "api"); var S = 0 } }, {}], "wrap-function": [function (t, e, n) { function r(t, e) { function n(e, n, r, c, f) { function nrWrapper() { var o, a, u, l; try { a = this, o = d(arguments), u = "function" == typeof r ? r(o, a) : r || {} } catch (p) { i([p, "", [o, a, c], u], t) } s(n + "start", [o, a, c], u, f); try { return l = e.apply(a, o) } catch (h) { throw s(n + "err", [o, a, h], u, f), h } finally { s(n + "end", [o, a, l], u, f) } } return a(e) ? e : (n || (n = ""), nrWrapper[l] = e, o(e, nrWrapper, t), nrWrapper) } function r(t, e, r, i, o) { r || (r = ""); var s, c, f, u = "-" === r.charAt(0); for (f = 0; f < e.length; f++)c = e[f], s = t[c], a(s) || (t[c] = n(s, u ? c + r : r, i, c, o)) } function s(n, r, o, a) { if (!h || e) { var s = h; h = !0; try { t.emit(n, r, o, e, a) } catch (c) { i([c, n, r, o], t) } h = s } } return t || (t = u), n.inPlace = r, n.flag = l, n } function i(t, e) { e || (e = u); try { e.emit("internal-error", t) } catch (n) { } } function o(t, e, n) { if (Object.defineProperty && Object.keys) try { var r = Object.keys(t); return r.forEach(function (n) { Object.defineProperty(e, n, { get: function () { return t[n] }, set: function (e) { return t[n] = e, e } }) }), e } catch (o) { i([o], n) } for (var a in t) p.call(t, a) && (e[a] = t[a]); return e } function a(t) { return !(t && t instanceof Function && t.apply && !t[l]) } function s(t, e) { var n = e(t); return n[l] = t, o(t, n, u), n } function c(t, e, n) { var r = t[e]; t[e] = s(r, n) } function f() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; ++n)e[n] = arguments[n]; return e } var u = t("ee"), d = t(26), l = "nr@original", p = Object.prototype.hasOwnProperty, h = !1; e.exports = r, e.exports.wrapFunction = s, e.exports.wrapInPlace = c, e.exports.argsToArray = f }, {}] }, {}, ["loader", 2, 12, 4, 3]);
; NREUM.loader_config = { accountID: "1079757", trustKey: "1079757", agentID: "8117382", licenseKey: "ff25e26ed2", applicationID: "8113489" }
; NREUM.info = { beacon: "bam-cell.nr-data.net", errorBeacon: "bam-cell.nr-data.net", licenseKey: "ff25e26ed2", applicationID: "8113489", sa: 1 }    </script>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Learning on Simplilearn</title>    <link href="https://cfls5.simplicdn.net/frontend/css/font_v2.1630835702.css" rel="stylesheet" type="text/css" />
    <link href="https://cfls5.simplicdn.net/frontend/css/style.1630835702.css" rel="stylesheet" type="text/css" />
    <link rel="shortcut icon" href="https://cfls5.simplicdn.net/frontend/images/favicon.png" />
            <base href="/">
    <!-- Remove hover from touch screen -->
    <script>
        function removeHoverState(){
            $("body").removeClass("no-touch");
        }
    </script>
    <!-- Remove hover from touch screen -->
</head>
</script><!--<![endif]-->
<!--HTML tag is loaded two times-->    
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" lang="en-US">
    <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <script type="text/javascript">
        </script>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Learning on SimplilearnLearning on Simplilearn</title>    <link href="https://cfls5.simplicdn.net/frontend/css/font_v2.1630835702.css" rel="stylesheet" type="text/css" />
    <link href="https://cfls5.simplicdn.net/frontend/css/style.1630835702.css" rel="stylesheet" type="text/css" />
    <link rel="shortcut icon" href="https://cfls5.simplicdn.net/frontend/images/favicon.png" />
            <base href="/">
    <!-- Remove hover from touch screen -->
    <script>
        function removeHoverState(){
            $("body").removeClass("no-touch");
        }
    </script>
    <!-- Remove hover from touch screen -->
</head>
<!--<div style="clear: both;"></div>-->
    <div class="body__container">
        <app-root></app-root>
    <script type="text/javascript">
       function startLearning(e) {
           console.log('evemt');
           const event = new CustomEvent('Gamification', {detail: 'ff'});
           window.dispatchEvent(event);
       }
   </script>    </div>    
<script type='text/javascript'>
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    /*Overridding console.log to enable debug in production on demand (isDebug = ) ---- Start */
    var DEBUG_MODE_ON = 0;
    var isDebug = getParameterByName('isSmplDebug');
    if (!DEBUG_MODE_ON && !isDebug) {
        var console = {};
        console.log = function() {};
        console.error = function() {};
        console.warn = function() {};
        console.info = function() {};
        console.time = function() {};
        console.timeEnd = function() {};
        console.timelog = function() {};
        console.trace = function() {};
        console.assert = function() {};
        console.count = function() {};
        console.debug = function() {};
        console.dir = function() {};
        window.console = console;
    }

    var script = function(url) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = url;
        var x = document.getElementsByTagName('head')[0];
        x.appendChild(s);
    }
    /*Overridding console.log ---- End */

    var debug = 1;
    var baseUrl = "";
    var lrsUrl = "wss://lrs2.simplilearn.com/";
    var lmsUrl = "https://lms.simplilearn.com";
    var accountsUrl = "https://accounts.simplilearn.com";
    var accountsRootUrl = "https://accounts.simplilearn.com";
    const myIp = "103.210.66.96";
    var myIpAddress = myIp;
    const dbUrl = "https://lmsdata2.simplilearn.com/";
    var userKey = "aa57f114a1650e81392e9d9a99e36d88b089c21c7";
    var fToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1hY3VlNUBzaW1wbGlsZWFybmxtcy5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLWFjdWU1QHNpbXBsaWxlYXJubG1zLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwiYXVkIjoiaHR0cHM6XC9cL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbVwvZ29vZ2xlLmlkZW50aXR5LmlkZW50aXR5dG9vbGtpdC52MS5JZGVudGl0eVRvb2xraXQiLCJpYXQiOjE2Mzg5NTM5NjUsImV4cCI6MTYzODk1NzU2NSwidWlkIjoiYWE1N2YxMTRhMTY1MGU4MTM5MmU5ZDlhOTllMzZkODhiMDg5YzIxYzciLCJjbGFpbXMiOnsicHJlbWl1bV9hY2NvdW50IjpmYWxzZX19.gcKBIB33Lq4I-uYkbtxXRgtViTFLoOTR974uBasVG1AdHWKe55Vfqj2V7fQ0MBiw1sA38yNDbgTkEuGOZLJgqH95wIn6PwKXsM3CgZPn6NQYdhhmgWNrcVDitZmiwPo6Up8bOkmTXI2N9XFktmWUo7pz9IDdYYo1mRx-ziaXEAEkxlnzWxvrl0SwCCDxBGwcdDhYFIxBWqGsMJo6ovJ_85vxILl_Mr-CiW6zgoBZRaTBVyiqFSq_pwstiDCOVr_K69AtKr_IbWkGbHdyXJ5nVAh6YuBfC5fec7bcWrb9t9pKcOaXBV3tD5yOj5oOoMKvsiREXEDH97n5btZedUxZCw"; //firebase signin token

    //    var userKey = "a933243c90a09cdda2c60205ed50fb5d242a4038c";
    const loggedInFlag = "1";
    var useremail = "shashankcisen@gmail.com";
    var username = "Shashank Bisen";
    var usid = "1650885";
    const usrl = '{"2":"authenticated user","59":"looper_student"}';
    var userCountry = 'IN';
    // var useremailhash = "8aaf846b98def8ef3c5bc5713037f365";
    var signature = "8e1e760a05dc15f3c9b75d7133fe182e";
    var client_id = "2";
    var client_name = "sl_looper";
    // var allow_course_ratings_push_notifications = "0";
    const monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var trainingTypes = {"CLASSROOM":"1","OSL":"2","LVC":"3","SINGLE_COURSE_LVC":"9","ALL_COURSE_LVC_PASS_COURSE_ID":"503","ALL_COURSE_LVC_PASS_NAME":"All course lvc pass"};
    // var certificateEligibility = 85;
    // var certificateSimtestEligibility = 20;
    var learningHrsintervalSecs = 30;
    // var projectSubmissionStatus = {};
    //      //         projectSubmissionStatus.assessment = 'Under Assessment';
    //     //         projectSubmissionStatus.failed = 'Failed';
    //     //         projectSubmissionStatus.passed = 'Passed';
    //     // var PROJECT_SUBMISSION_ATTEMPT = 3; 
    // var PROJECT_UPLOAD_FILE_LIMIT = "10MB";
    // var PROJECT_REMARKS_LIMIT = 1200;
    // var PROJECT_FILENAME_DSPLAY_LIMIT = 10;
    /* for scorm12 wrapper api js */
    var student_name = "06956fda231af4ff6d67dca9fca52cc2";
    var student_id = "bf67b30c13e2b5d75c8a5e5f6c1f4677";
    var course;
    /* end for scorm12 wrapper api js */
    var is_enterprise_learner = 0;
    var learner_team_id = 0;
    var hasAtpWelcomeNote = 0;
    var siteLogoUrl = "";

    const mainCdnUrl = 'https://cfls5.simplicdn.net';
    const allReferAndEarnImgUrls = {"imgurl":{"ROW":{"colleague":"Colleagues_ROW.jpg","family":"Family_ROW.jpg","friends":"Friends_ROW.jpg","generic":"Generic_ROW.jpg"},"IN":{"colleague":"Colleagues_IN.jpg","family":"Family_IN.jpg","friends":"Friends_IN.jpg","generic":"Generic_IN.jpg"}}};
    var rnr_utmsource = "?utm_source=ReferandEarn&utm_medium=LMS&utm_content=:imageName:&utm_campaign=ReferandEarnWidget";
    var referAndEarnImgObj;
    var gaCode = 'UA-32079340-1';
    const ice9CDNUrl = 'https://cfs9.simplicdn.net';
    var enableCertificateTab = 1;
    var leaderBoardData = {"isLeaderBoardUser":0,"teamNo":0,"boardNo":0,"url":"","boardType":"","arrEId":[]};
    var leaderBoardEId = [];
    /*var leaderBoardData = {boardNo : 1, isLeaderBoardUser : 1, teamNo : 1, url : "http://devlms.simplilearn.com/apachedev/git/paperclip/public"};*/
    var enableLeaderboard = 1;
    const testAllowedAttempts = 3;
    const learningtimeReqQueueCapVal = 50;
    const isCheckCourseUpdateSetting = 0;
    var offeringSetting = {"freemium_enabled":"1","heading":"Upskill. Anytime. Anywhere.","description":"Download the lessons to learn anytime, anywhere from the free courses available on our app","qr_image_url":"https:\/\/www.simplilearn.com\/ice9\/app\/app_install_QR-code.jpg","android_download_url":"https:\/\/simpli.app.link\/IsoEKCasxbb","ios_download_url":"https:\/\/apps.apple.com\/app\/simplilearn\/id963042747","upgrade_utm_dashboard":"utm_source=LMS&utm_medium=dashboard_course_card&utm_campaign=freemium_course_upgrade","upgrade_utm_course_page":"utm_source=LMS&utm_medium=learning_environment&utm_campaign=freemium_course_upgrade","course_upgrade_url":"https:\/\/www.simplilearn.com\/skillup-free-online-courses\/upgrade\/","free_course_heading":"Current Program","free_course_subheading":"Free video lessons that provide basic knowledge","paid_program_heading":"Next Program that you should take","paid_program_subheading":"An immersive online bootcamp to accelerate your learning journey","paid_certification_course_bullet_points_lvc":"Live, online classroom training by top instructors and practitioners::24x7 learner assistance and support::Completion certificate recognized by the industry","paid_certification_course_bullet_points_osl":"Lifetime access to self-paced learning::24x7 learner assistance and support::Completion certificate recognized by the industry","post_graduate_program_bullet_points":"University Certificate::University Alumni Status::Masterclasses from University::Career Support","master_program_logo_url":"https:\/\/www.simplilearn.com\/ice9\/master_program\/masters-badge-1.png","skillup_certificate_rule":"(osl_complete)"};
    var objCourseUpdateOption = {"LEARNERS_CHOICE":"1","SCHEDULED":"2"};
    const cloudlabMaintenance = 0;
    const configElearnings = '["2748","2765","2813"]';
    const jwplayerKey = 'UuGvxEe9w7czLQLuEljjfpeCVfEdbCsfRxNM16r7y5LRFjsC';
    var courseExtensionRequestEnable = '30'
    var courseExtensionRequestDisable = '15'
    var default_user_group_id = '2'

    var pcuser = JSON.parse('{"ckey":"sl_looper","id":"1650885","name":"Shashank Bisen","first_name":"Shashank","last_name":"Bisen","uname":"shashankcisen","email":"shashankcisen@gmail.com","roles":{"2":"authenticated user","59":"looper_student"},"gid":"","lgid":false,"country":"IN","npsSD":"","opts":0,"timezone":"Asia\/Kolkata","userType":"Paid","refCode":null,"fr_usr":false,"siteHomeUrl":"http:\/\/www.simplilearn.com\/","enterprise_name":"Simplilearn LMS","freemium_user":false,"hasSkillupCourse":false,"user_type":"Paid"}');
    var environment = "production";
    var courseProgressDiff = '5';
    var showHelpSupport = 'Yes';
    var helpSupportUrl = 'Yes';
    var imageLogoUrl = 'https://cfls5.simplicdn.net/frontend/images/logo.png';
    var showMyResources = '1';
    var showCommunity = '1';
    var isWhiteLabelingEnabled = '1';
    var helpSupport = ' https://simplilearn.secure.force.com/support/';

    var isScormEnabled = 0;
    const isScormResume = 0;

    var isXapiEnabled = 0; // for xapi from IndexController

    var courseExtensionOsl = 45;
    var courseExtensionLvc = 45;
    var isShowProfile = 'Yes';
    var showProgramLevelCertificates = 'Yes';

    if (typeof is_enterprise_learner === 'number' && is_enterprise_learner == 1) {
        var segment_key = "D0KcFVzFNTPE5CtUYDMb965y6mnACHk6";
    } else {
        var segment_key = "aJQwW6TNSRntd21C9HNaVD1U2kXokgXb";
    }

    var amplitude_key = "c6e1ea69eacf10ce29e8b6489f9e0600";
    var webengage_key = "311c5642";
    var b2c_amplitude_key = "c6e1ea69eacf10ce29e8b6489f9e0600";
    var b2c_webengage_key = "311c5642";
    var b2b_amplitude_key = "e82ad96b75aea7dabe103917aeaa1ce2";
    var b2b_webengage_key = "311c561d";
    var directEvents = '["No Event"]';

    var coachmarkDelayTime = '200';

    script("https://cfls5.simplicdn.net/webengage/dist/main.1638408738.js");

    var ourcontrollers = {
        'dashboardright': 'DashboardRightController',
        'footer': 'FooterController',
        'learning': 'LearningController',
        'loading': 'LoadingController',
        'mycourses': 'MyCoursesController',
        'note': 'NoteController',
        'notifications': 'NotificationsController',
        'oob': 'OobController',
        'quiz': 'QuizController',
        'setfocuscourse': 'SetFocusCourseController',
        'search': 'SearchController',
        'studyplan': 'StudyplanController',
        'test': 'TestController',
        'user': 'UserController',
        'video': 'VideoController',
        'notificationspage': 'NotificationsPageController',
        'nocourse': 'NoCourseController',
        "welcomenote": "WelcomeNote",
        'leaderboard': "LeaderboardController",
        'elearningupdate': "ElearningUpdateController",
        'referencematerial': "ReferenceMaterialController",
        'certificatelist': "CertificateController",
    }

    var defaultPlaceholderImage = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    var ice9Url = 'https://www.simplilearn.com';
    const ice9ExteranlApiUrl = 'https://www.simplilearn.com/api/v1';
    // var mainCdnUrl = 'https://cfls5.simplicdn.net';
    var communityUrl = 'https://community.simplilearn.com/';
    var siteIdFromBackend = parseInt('2');
    var providerIdFromBackend = parseInt('40');
    var courseRatingsEligibility = parseInt('70');
    var docIdFormats = {
        "elearning": "elearning_",
        "studyPlan": "studyplan_s_" + siteIdFromBackend + "_p_" + providerIdFromBackend,
        "elearningProgress": "elearning_progress_",
        "elearningCurriculum": "elearning_curriculum_",
        "studyplanhours": "studyplanhours",
        "courseRatings": "course_ratings",
        "oobData": "oobData",
        "elearningLvcPasses": 'elearning_lvcpasses_',
        "elearningElvcPasses": 'elearning_elvcpasses_',
        "welcomenote": "welcome_note",
        "achievements": "achievements",
        "masterProgramDoc": "master_program_",
        "learningPathDoc": "custom_learning_path_",
        "freeTrialDoc": "free_trial"
    }

    var enableFrontendModules = {
        'oob': '1',
        'focuscourse': '1',
        'enableaccounts': '1',
        'enablefocuscourse': '1',
        //@TODO
        'enablesimplilearnsiteaccess': '1',
    }

    const courseImageCdnUrl = 'https://cfs22.simplicdn.net';

    const couchUrl = 'https://lmsdata2.simplilearn.com/';
    const couchClearCookiesUrl = 'common/_design/clearCookies/_show/clearCookies';
    /* video url for new cloudlab video:abhijit*/
    const cloudLabVideoInstructionUrl = 'https://www.youtube.com/watch?v=saHIgtHjCdo';
    const checkSimTestElearnings = {"elearningids":["2722","2632","1243","2724","1605","864","1748","331","1746","897","308","2168","1615","954"]};
    const projectSubmission = {"1":"Writeup","2":"Screenshots","4":"Source Code"};
    var allowedFilesTypeSubmission = {"0":"csv","1":"scala","2":"txt","3":"doc","4":"docx","5":"pdf","6":"json","7":"xlsx","8":"xls","9":"zip","10":"rar","11":"html","12":"ppt","13":"pptx","14":"png","15":"gif","16":"jpg","17":"jpeg","18":"CSV","19":"SCALA","20":"TXT","21":"DOC","22":"DOCX","23":"PDF","24":"JSON","26":"XLSX","27":"XLS","28":"ZIP","29":"RAR","30":"HTML","31":"PPT","32":"PPTX","33":"PNG","34":"GIF","35":"JPG","36":"JPEG"};
    var nbr_player_windows = 'https://simplilearnsolutions.webex.com/client/T33L/nbr2player.msi';
    var nbr_player_mac = 'https://simplilearnsolutions.webex.com/client/T33L/mac/intel/webexnbrplayer_intel.dmg';
    var learningTimeSessionTimeout = '60';
    var cloudLabsData = '{"2676":{"videoUrl":"https:\/\/www.youtube.com\/watch?v=saHIgtHjCdo","imgUrl":"","description":"<b><u>Services in CloudLab<\/u><\/b><br\/><b><u>Cloudera Manager<\/u>-<\/b>Login to cloudera Manager to view the Hadoop services running, and all the other cluster characteristics.<br\/><b><u>HUE<\/u>-<\/b>Use the File Browser in Hue to get a User interface for the files in HDFS, and the Query editors for Pig, Hive and Impala for writing Pig, Hive and Impala queries.The File Browser here, reflects your files on Hadoop distributed file system (HDFS). When you upload using HUE, it sits inside the Hadoop file system.<br\/><b><u>FTP<\/u>-<\/b>Move files from your computer to the Linux machine. When you use FTP, it resides on the Linux environment file system.<br\/><b><u>Webconsole<\/u>-<\/b>The Linux terminal of the system on which Hadoop is installed. Use the -ls command to access the local files, and the hdfs commands to access the HDFS files.<br\/>Note: Invoke <b>-ls<\/b> from Web Console and you will see what is visible to you on FTP. Invoke <b>hdfs dfs -ls<\/b> on Web Console and you will see what is visible to you on Hue File Browser.<br\/>Here are the introductory commands for different services on CloudLab<br\/><b>1. <u>MySQL<\/u>:<\/b><br\/>Username : labuser<br\/>Password : simplilearn<br\/>Command :mysql -u labuser -p<br\/>Once you hit the above command, it will prompt for a password, then type : simplilearn<br\/><b>2. <u>SQOOP<\/u>:<\/b><br\/>Sample Command:<br\/>sqoop import --connect jdbc:mysql:\/\/ip-10-0-1-10.ec2.internal\/smpldb --username labuser --password simplilearn --table employee --target-dir \/user\/alex_gmail_com\/test --m 1<br\/>Replace the db_name, table_name and path\/results variables and you\u2019re all good to go!<br\/><b>3. <u>Impala shell<\/u>:<\/b><br\/>Command: impala-shell -i ip-10-0-2-13.ec2.internal<br\/><b>4.<u>Beeline Hive<\/u>:<\/b><br\/>Type beeline to invoke the beeline shell. Once you enter, type the following connect command, to connect to Beeline:<br\/>!connect jdbc:hive2:\/\/localhost:10000<br\/>Enter your username and password available on the LAB ACCESS page<br\/><b>5.<u>Apache Spark<\/u>:<\/b><br\/>We have two version of Spark available on our Cloud Lab:<br\/>Version 1.6<br\/>Command: spark-shell<br\/>Version 2.2<br\/>Command: spark2-shell<br\/><b>6.<u>Apache Phoenix<\/u>:<\/b><br\/>Sample Command: phoenix-sqlline.py datanode1:2181<br\/><b>7.<u>URL link<\/u>:<\/b><br\/>Spark History: <u>http:\/\/sln.cloudloka.com:18088<\/u><br\/>Spark2 History: <u>http:\/\/sl.cloudloka.com:18089<\/u><br\/>Namenode: <u>http:\/\/sln.cloudloka.com:50070<\/u><br\/><b>Note:<\/b><br\/>If you are getting \\\"This connection is not Private\\\" error when accessing the web Console then please follow these two steps:<br\/>1. Click on the \\\"ADVANCED\\\" link on the left side of the error page<br\/>2. Click on \\\"Proceed with sl.cloudloka.com(unsafe)\\\" link and then you will be redirected to the Login page for the console.<br\/><u>Permission denied error on trying to create a directory in root level.<\/u><br\/>On Web Console, you are within a Linux environment and a \u2018\/\u2019 means the root directory in Linux. If you are trying to create a directory using the command : mkdir \/simplilearn, you will not be able to create that, as you do not have the required permissions since we do not provide sudo\/root user access to create a folder or to write in root level.<br\/>Kindly remove the \u2018\/\u2019 and use the following command structure to create a directory,<br\/>mkdir &#60;directory_name&#62;<br\/>Sample : mkdir simplilearn<br\/>Note : \u2018\/\u2019 indicates root<br\/>Now you\u2019re all equipped, we wish you all the very best for your hands-on practice and projects."},"2707":{"videoUrl":"","imgUrl":"http:\/\/cfs22.simplicdn.net\/paperclip\/R-labs-img.svgz","description":"An online cloud-based environment for data science participants for practicing data science demos and projects using R. It eliminates all hassles of download and installation and provides a seamless experience to the user."},"2716":{"videoUrl":"","imgUrl":"http:\/\/cfs22.simplicdn.net\/paperclip\/R-labs-img.svgz","description":"An online cloud-based environment for data science participants for practicing data science demos and projects using R. It eliminates all hassles of download and installation and provides a seamless experience to the user."},"2772":{"videoUrl":"","imgUrl":"https:\/\/cfs22.simplicdn.net\/paperclip\/python.png","description":"There is no fun learning data science without actually applying it. So how do we go about it?<br\/>Python environment Lab is the solution. Lab plays an integral part of the course. It not only helps you understand the concepts and algorithms better but also prepares you to implement the concepts at the workplace.<br\/>Its interactive platform will help to reinforce the learning by providing a live environment for you to code and test the concepts.<br\/>Lab is all ready, are you?<br\/>You will have access to Lab throughout the duration you have the access to the course."},"2748":{"videoUrl":"","imgUrl":"https:\/\/cfs22.simplicdn.net\/paperclip\/aws.svgz","description":"<b>Important instructions:<\/b><br\/><b>Resource Limitations:<\/b><br\/><b>- Region:<\/b> Use only US East (N Virginia),us-east-1,us-east-2,ap-southeast-2,EU-West-3. Other Regions will be selectable, but most actions will fail.<br\/><b>- EC2 Instance Types: <\/b><br\/><span style=\\\"labawsClass\\\">- Only t2.micro, t2.nano will be allowed. EBS Optimized must be set of \u2018False\u2019.<\/span><span style=\\\"labawsClass\\\">- You can only launch on-demand instances. Reserved \/ Spot instances are NOT allowed.<\/span><br\/><b>- Block Storage (EBS \/ VS):<\/b> Max size allowed is 30 GB. If size exceeds, launch will fail. Allowed Types: GP2, Standard.<br\/><b>- Security Groups:<\/b> Create new Security Groups for each session. Old ones will get deleted.<br\/><b>- RDS:<\/b> db.t2.micro will be allowed.<br\/><br\/><b>Session Time:<\/b><br\/>- The AWS Portal access duration per session is 240 mins (4 Hrs).<br\/>- The Lab will automatically end after the access duration is complete.<br\/>- You can start a fresh session again if required.<br\/><b><br\/>AWS Resource Usage:<\/b><br\/>- Resources created during the Lab session is for learning purposes only.<br\/>- Please do NOT plan to use the resources for any other personal\/commercial use.<br\/>- All resources created during a session will be terminated automatically once the session ends.<br\/>- Resources created in previous sessions will NOT be available for re-use.<br\/>- Do NOT try to access or perform any actions on resources that were NOT created by you in that session.<br\/>- Give unique names to your resources by using a prefix such as your \\\"username\\\".<br\/>- Protect your instances by using a keypair and appropriate Security Groups.<br\/>- Do NOT run any unknown scripts \/ install unknown software in the instances.<br\/>"},"2765":{"videoUrl":"","imgUrl":"https:\/\/cfs22.simplicdn.net\/paperclip\/aws.svgz","description":"<b>Important instructions:<\/b><br\/><b>Resource Limitations:<\/b><br\/><b>- Region:<\/b> Use only US East (N Virginia),us-east-1,us-east-2,ap-southeast-2,EU-West-3. Other Regions will be selectable, but most actions will fail.<br\/><b>- EC2 Instance Types: <\/b><br\/><span style=\\\"labawsClass\\\">- Only t2.micro, t2.nano will be allowed. EBS Optimized must be set of \u2018False\u2019.<\/span><span style=\\\"labawsClass\\\">- You can only launch on-demand instances. Reserved \/ Spot instances are NOT allowed.<\/span><br\/><b>- Block Storage (EBS \/ VS):<\/b> Max size allowed is 30 GB. If size exceeds, launch will fail. Allowed Types: GP2, Standard.<br\/><b>- Security Groups:<\/b> Create new Security Groups for each session. Old ones will get deleted.<br\/><b>- RDS:<\/b> db.t2.micro will be allowed.<br\/><br\/><b>Session Time:<\/b><br\/>- The AWS Portal access duration per session is 240 mins (4 Hrs).<br\/>- The Lab will automatically end after the access duration is complete.<br\/>- You can start a fresh session again if required.<br\/><b><br\/>AWS Resource Usage:<\/b><br\/>- Resources created during the Lab session is for learning purposes only.<br\/>- Please do NOT plan to use the resources for any other personal\/commercial use.<br\/>- All resources created during a session will be terminated automatically once the session ends.<br\/>- Resources created in previous sessions will NOT be available for re-use.<br\/>- Do NOT try to access or perform any actions on resources that were NOT created by you in that session.<br\/>- Give unique names to your resources by using a prefix such as your \\\"username\\\".<br\/>- Protect your instances by using a keypair and appropriate Security Groups.<br\/>- Do NOT run any unknown scripts \/ install unknown software in the instances.<br\/>"},"2813":{"videoUrl":"","imgUrl":"https:\/\/cfs22.simplicdn.net\/paperclip\/aws.svgz","description":"<b>Important instructions:<\/b><br\/><b>Resource Limitations:<\/b><br\/><b>- Region:<\/b> Use only US East (N Virginia),us-east-1,us-east-2,ap-southeast-2,EU-West-3. Other Regions will be selectable, but most actions will fail.<br\/><b>- EC2 Instance Types: <\/b><br\/><span style=\\\"labawsClass\\\">- Only t2.micro, t2.nano will be allowed. EBS Optimized must be set of \u2018False\u2019.<\/span><span style=\\\"labawsClass\\\">- You can only launch on-demand instances. Reserved \/ Spot instances are NOT allowed.<\/span><br\/><b>- Block Storage (EBS \/ VS):<\/b> Max size allowed is 30 GB. If size exceeds, launch will fail. Allowed Types: GP2, Standard.<br\/><b>- Security Groups:<\/b> Create new Security Groups for each session. Old ones will get deleted.<br\/><b>- RDS:<\/b> db.t2.micro will be allowed.<br\/><br\/><b>Session Time:<\/b><br\/>- The AWS Portal access duration per session is 240 mins (4 Hrs).<br\/>- The Lab will automatically end after the access duration is complete.<br\/>- You can start a fresh session again if required.<br\/><b><br\/>AWS Resource Usage:<\/b><br\/>- Resources created during the Lab session is for learning purposes only.<br\/>- Please do NOT plan to use the resources for any other personal\/commercial use.<br\/>- All resources created during a session will be terminated automatically once the session ends.<br\/>- Resources created in previous sessions will NOT be available for re-use.<br\/>- Do NOT try to access or perform any actions on resources that were NOT created by you in that session.<br\/>- Give unique names to your resources by using a prefix such as your \\\"username\\\".<br\/>- Protect your instances by using a keypair and appropriate Security Groups.<br\/>- Do NOT run any unknown scripts \/ install unknown software in the instances.<br\/>"},"2810":{"videoUrl":"","imgUrl":"https:\/\/cfs22.simplicdn.net\/paperclip\/aws.svgz","description":"<b><u>Services in CloudLab<\/u><\/b><br\/><b><u>Cloudera Manager<\/u>-<\/b>Login to cloudera Manager to view the Hadoop services running, and all the other cluster characteristics.<br\/><b><u>HUE<\/u>-<\/b>Use the File Browser in Hue to get a User interface for the files in HDFS, and the Query editors for Pig, Hive and Impala for writing Pig, Hive and Impala queries.The File Browser here, reflects your files on Hadoop distributed file system (HDFS). When you upload using HUE, it sits inside the Hadoop file system.<br\/><b><u>FTP<\/u>-<\/b>Move files from your computer to the Linux machine. When you use FTP, it resides on the Linux environment file system.<br\/><b><u>Webconsole<\/u>-<\/b>The Linux terminal of the system on which Hadoop is installed. Use the -ls command to access the local files, and the hdfs commands to access the HDFS files.<br\/>Note: Invoke <b>-ls<\/b> from Web Console and you will see what is visible to you on FTP. Invoke <b>hdfs dfs -ls<\/b> on Web Console and you will see what is visible to you on Hue File Browser.<br\/>Here are the introductory commands for different services on CloudLab<br\/><b>1. <u>MySQL<\/u>:<\/b><br\/>Username : labuser<br\/>Password : simplilearn<br\/>Command :mysql -u labuser -p<br\/>Once you hit the above command, it will prompt for a password, then type : simplilearn<br\/><b>2. <u>SQOOP<\/u>:<\/b><br\/>Sample Command:<br\/>sqoop import --connect jdbc:mysql:\/\/ip-10-0-1-10.ec2.internal\/smpldb --username labuser --password simplilearn --table employee --target-dir \/user\/alex_gmail_com\/test --m 1<br\/>Replace the db_name, table_name and path\/results variables and you\u2019re all good to go!<br\/><b>3. <u>Impala shell<\/u>:<\/b><br\/>Command: impala-shell -i ip-10-0-2-13.ec2.internal<br\/><b>4.<u>Beeline Hive<\/u>:<\/b><br\/>Type beeline to invoke the beeline shell. Once you enter, type the following connect command, to connect to Beeline:<br\/>!connect jdbc:hive2:\/\/localhost:10000<br\/>Enter your username and password available on the LAB ACCESS page<br\/><b>5.<u>Apache Spark<\/u>:<\/b><br\/>We have two version of Spark available on our Cloud Lab:<br\/>Version 1.6<br\/>Command: spark-shell<br\/>Version 2.2<br\/>Command: spark2-shell<br\/><b>6.<u>Apache Phoenix<\/u>:<\/b><br\/>Sample Command: phoenix-sqlline.py datanode1:2181<br\/><b>7.<u>URL link<\/u>:<\/b><br\/>Spark History: <u>http:\/\/sln.cloudloka.com:18088<\/u><br\/>Spark2 History: <u>http:\/\/sl.cloudloka.com:18089<\/u><br\/>Namenode: <u>http:\/\/sln.cloudloka.com:50070<\/u><br\/><b>Note:<\/b><br\/>If you are getting \\\"This connection is not Private\\\" error when accessing the web Console then please follow these two steps:<br\/>1. Click on the \\\"ADVANCED\\\" link on the left side of the error page<br\/>2. Click on \\\"Proceed with sl.cloudloka.com(unsafe)\\\" link and then you will be redirected to the Login page for the console.<br\/><u>Permission denied error on trying to create a directory in root level.<\/u><br\/>On Web Console, you are within a Linux environment and a \u2018\/\u2019 means the root directory in Linux. If you are trying to create a directory using the command : mkdir \/simplilearn, you will not be able to create that, as you do not have the required permissions since we do not provide sudo\/root user access to create a folder or to write in root level.<br\/>Kindly remove the \u2018\/\u2019 and use the following command structure to create a directory,<br\/>mkdir &#60;directory_name&#62;<br\/>Sample : mkdir simplilearn<br\/>Note : \u2018\/\u2019 indicates root<br\/>Now you\u2019re all equipped, we wish you all the very best for your hands-on practice and projects."},"2788":{"videoUrl":"","imgUrl":"https:\/\/cfs22.simplicdn.net\/paperclip\/aws.svgz","description":"<b>Important instructions:<\/b><br\/><b>Resource Limitations:<\/b><br\/><b>- Region:<\/b> Use only US East (N Virginia),us-east-1,us-east-2,ap-southeast-2,EU-West-3. Other Regions will be selectable, but most actions will fail.<br\/><b>- EC2 Instance Types: <\/b><br\/><span style=\\\"labawsClass\\\">- Only t2.micro, t2.nano will be allowed. EBS Optimized must be set of \u2018False\u2019.<\/span><span style=\\\"labawsClass\\\">- You can only launch on-demand instances. Reserved \/ Spot instances are NOT allowed.<\/span><br\/><b>- Block Storage (EBS \/ VS):<\/b> Max size allowed is 30 GB. If size exceeds, launch will fail. Allowed Types: GP2, Standard.<br\/><b>- Security Groups:<\/b> Create new Security Groups for each session. Old ones will get deleted.<br\/><b>- RDS:<\/b> db.t2.micro will be allowed.<br\/><br\/><b>Session Time:<\/b><br\/>- The AWS Portal access duration per session is 240 mins (4 Hrs).<br\/>- The Lab will automatically end after the access duration is complete.<br\/>- You can start a fresh session again if required.<br\/><b><br\/>AWS Resource Usage:<\/b><br\/>- Resources created during the Lab session is for learning purposes only.<br\/>- Please do NOT plan to use the resources for any other personal\/commercial use.<br\/>- All resources created during a session will be terminated automatically once the session ends.<br\/>- Resources created in previous sessions will NOT be available for re-use.<br\/>- Do NOT try to access or perform any actions on resources that were NOT created by you in that session.<br\/>- Give unique names to your resources by using a prefix such as your \\\"username\\\".<br\/>- Protect your instances by using a keypair and appropriate Security Groups.<br\/>- Do NOT run any unknown scripts \/ install unknown software in the instances.<br\/>"},"3045":{"videoUrl":"","imgUrl":"https:\/\/cfs22.simplicdn.net\/paperclip\/aws.svgz","description":"<b>Session Time:<\/b><br\/>- There is an idle time set for 30 minutes.<br\/>- The Lab will automatically end after the idle time is complete.<br\/>- You can start a fresh session again if required.<br\/>- Your data will be restored when you start a fresh session<br\/><br\/><b>Lab Usage:<\/b><br\/>- Resources created during the Lab session is for learning purposes only.<br\/>- Please do NOT plan to use the resources for any other personal\/commercial use.<br\/>- Copy\/paste of username and password is not supported.<br\/>- Capslock is not supported<br\/>"},"2789":{"videoUrl":"","imgUrl":"https:\/\/cfs22.simplicdn.net\/paperclip\/aws.svgz","description":"<b>Session Time:<\/b><br\/>- There is an idle time set for 1 hour.<br\/>- The Lab will automatically end after the idle time is complete.<br\/>- You can start a fresh session again if required.<br\/>- Your data will be restored when you start a fresh session<br\/><br\/><b>Lab Usage:<\/b><br\/>- Copy\/paste of username and password is not supported.<br\/>- Capslock is not supported.<br\/>- Resources created during the Lab session is for learning purposes only.<br\/>- Please do NOT plan to use the resources for any other personal\/commercial use.<br\/>"},"3086":{"videoUrl":"","imgUrl":"https:\/\/cfs22.simplicdn.net\/paperclip\/aws.svgz","description":"<b>Session Time:<\/b><br\/>- There is an idle time set for 1 hour.<br\/>- The Lab will automatically end after the idle time is complete.<br\/>- You can start a fresh session again if required.<br\/>- Your data will be restored when you start a fresh session<br\/><br\/><b>Lab Usage:<\/b><br\/>- Copy\/paste of username and password is not supported.<br\/>- Capslock is not supported.<br\/>- Resources created during the Lab session is for learning purposes only.<br\/>- Please do NOT plan to use the resources for any other personal\/commercial use.<br\/>"},"3062":{"videoUrl":"","imgUrl":"https:\/\/cfs22.simplicdn.net\/paperclip\/aws.svgz","description":"<b>Session Time:<\/b><br\/>- There is an idle time set for 1 hour.<br\/>- The Lab will automatically end after the idle time is complete.<br\/>- You can start a fresh session again if required.<br\/>- Your data will be restored when you start a fresh session<br\/><br\/><b>Lab Usage:<\/b><br\/>- Copy\/paste of username and password is not supported.<br\/>- Resources created during the Lab session is for learning purposes only.<br\/>- Please do NOT plan to use the resources for any other personal\/commercial use.<br\/>"},"2866":{"videoUrl":"","imgUrl":"https:\/\/cfs22.simplicdn.net\/paperclip\/aws.svgz","description":"<b>Important instructions:<\/b><br\/><b>Resource Limitations:<\/b><br\/><b>- Region:<\/b> West US,West US2,East US,East US 2,Central India,West India,South India.Other Regions will be selectable, but most actions will fail.<br\/><b>- Virtual Machine Instance Types: <\/b><br\/><span style=\\\"labawsClass\\\">- Only B2.MS and B4.MS will be allowed. You can only launch on-demand instances. Reserved \/ Spot instances are NOT allowed.<\/span><br\/><b>- Resource Groups:<\/b> Create new Resource Groups for each session. Old ones will get deleted.<br\/><b>- Service Disabled:<\/b> HD Insight, SQL Servers, Azure Market Place.<br\/><br\/><b>Session Time:<\/b><br\/>- The Azure Portal access duration per session is 240 mins (4 Hrs).<br\/>- The Lab will automatically end after the access duration is complete.<br\/>- You can start a fresh session again if required.<br\/><b><br\/>Azure Resource Usage:<\/b><br\/>- Resources created during the Lab session is for learning purposes only.<br\/>- Please do NOT plan to use the resources for any other personal\/commercial use.<br\/>- All resources created during a session will be terminated automatically once the session ends.<br\/>- Resources created in previous sessions will NOT be available for re-use.<br\/>- Do NOT try to access or perform any actions on resources that were NOT created by you in that session.<br\/>- Give unique names to your resources by using a prefix such as your \\\"username\\\".<br\/>- Protect your instances by using a keypair and appropriate resource groups.<br\/>- Do NOT run any unknown scripts \/ install unknown software in the instances.<br\/>"},"2792":{"videoUrl":"","imgUrl":"https:\/\/cfs22.simplicdn.net\/paperclip\/aws.svgz","description":"<b>Important instructions:<\/b><br\/><b>Resource Limitations:<\/b><br\/><b>- Region:<\/b> West US,West US2,East US,East US 2,Central India,West India,South India.Other Regions will be selectable, but most actions will fail.<br\/><b>- Virtual Machine Instance Types: <\/b><br\/><span style=\\\"labawsClass\\\">- Only B2.MS and B4.MS will be allowed. You can only launch on-demand instances. Reserved \/ Spot instances are NOT allowed.<\/span><br\/><b>- Resource Groups:<\/b> Create new Resource Groups for each session. Old ones will get deleted.<br\/><b>- Service Disabled:<\/b> HD Insight, SQL Servers, Azure Market Place.<br\/><br\/><b>Session Time:<\/b><br\/>- The Azure Portal access duration per session is 240 mins (4 Hrs).<br\/>- The Lab will automatically end after the access duration is complete.<br\/>- You can start a fresh session again if required.<br\/><b><br\/>Azure Resource Usage:<\/b><br\/>- Resources created during the Lab session is for learning purposes only.<br\/>- Please do NOT plan to use the resources for any other personal\/commercial use.<br\/>- All resources created during a session will be terminated automatically once the session ends.<br\/>- Resources created in previous sessions will NOT be available for re-use.<br\/>- Do NOT try to access or perform any actions on resources that were NOT created by you in that session.<br\/>- Give unique names to your resources by using a prefix such as your \\\"username\\\".<br\/>- Protect your instances by using a keypair and appropriate resource groups.<br\/>- Do NOT run any unknown scripts \/ install unknown software in the instances.<br\/>"},"2791":{"videoUrl":"","imgUrl":"https:\/\/cfs22.simplicdn.net\/paperclip\/aws.svgz","description":"<b>Important instructions:<\/b><br\/><b>Resource Limitations:<\/b><br\/><b>- Region:<\/b> West US,West US2,East US,East US 2,Central India,West India,South India.Other Regions will be selectable, but most actions will fail.<br\/><b>- Virtual Machine Instance Types: <\/b><br\/><span style=\\\"labawsClass\\\">- Only B2.MS and B4.MS will be allowed. You can only launch on-demand instances. Reserved \/ Spot instances are NOT allowed.<\/span><br\/><b>- Resource Groups:<\/b> Create new Resource Groups for each session. Old ones will get deleted.<br\/><b>- Service Disabled:<\/b> HD Insight, SQL Servers, Azure Market Place.<br\/><br\/><b>Session Time:<\/b><br\/>- The Azure Portal access duration per session is 240 mins (4 Hrs).<br\/>- The Lab will automatically end after the access duration is complete.<br\/>- You can start a fresh session again if required.<br\/><b><br\/>Azure Resource Usage:<\/b><br\/>- Resources created during the Lab session is for learning purposes only.<br\/>- Please do NOT plan to use the resources for any other personal\/commercial use.<br\/>- All resources created during a session will be terminated automatically once the session ends.<br\/>- Resources created in previous sessions will NOT be available for re-use.<br\/>- Do NOT try to access or perform any actions on resources that were NOT created by you in that session.<br\/>- Give unique names to your resources by using a prefix such as your \\\"username\\\".<br\/>- Protect your instances by using a keypair and appropriate resource groups.<br\/>- Do NOT run any unknown scripts \/ install unknown software in the instances.<br\/>"},"2790":{"videoUrl":"","imgUrl":"https:\/\/cfs22.simplicdn.net\/paperclip\/aws.svgz","description":"<b>Important instructions:<\/b><br\/><b>Resource Limitations:<\/b><br\/><b>- Region:<\/b> West US,West US2,East US,East US 2,Central India,West India,South India.Other Regions will be selectable, but most actions will fail.<br\/><b>- Virtual Machine Instance Types: <\/b><br\/><span style=\\\"labawsClass\\\">- Only B2.MS and B4.MS will be allowed. You can only launch on-demand instances. Reserved \/ Spot instances are NOT allowed.<\/span><br\/><b>- Resource Groups:<\/b> Create new Resource Groups for each session. Old ones will get deleted.<br\/><b>- Service Disabled:<\/b> HD Insight, SQL Servers, Azure Market Place.<br\/><br\/><b>Session Time:<\/b><br\/>- The Azure Portal access duration per session is 240 mins (4 Hrs).<br\/>- The Lab will automatically end after the access duration is complete.<br\/>- You can start a fresh session again if required.<br\/><b><br\/>Azure Resource Usage:<\/b><br\/>- Resources created during the Lab session is for learning purposes only.<br\/>- Please do NOT plan to use the resources for any other personal\/commercial use.<br\/>- All resources created during a session will be terminated automatically once the session ends.<br\/>- Resources created in previous sessions will NOT be available for re-use.<br\/>- Do NOT try to access or perform any actions on resources that were NOT created by you in that session.<br\/>- Give unique names to your resources by using a prefix such as your \\\"username\\\".<br\/>- Protect your instances by using a keypair and appropriate resource groups.<br\/>- Do NOT run any unknown scripts \/ install unknown software in the instances.<br\/>"},"3300":{"videoUrl":"","imgUrl":"https:\/\/cfs22.simplicdn.net\/paperclip\/aws.svgz","description":"<b>Important instructions:<\/b><br\/>- When you log in to your AWS account for the first time, it may take a few minutes to provide access permissions. In case it takes more than 5 mins, please re-login to the console.<br\/><br\/><b>Session Time:<\/b><br\/>- The AWS Portal access duration per session is 240 mins (4 Hrs).<br\/>- The Lab will automatically end after the access duration is complete.<br\/>- You can start a fresh session again if required.<br\/><br\/><b>Resource Limitations:<\/b><br\/><b>- Region:<\/b> Use only US East (N Virginia),us-east-1,us-east-2,ap-southeast-2,EU-West-3. Other Regions will be selectable, but most actions will fail.<br\/><b>- EC2 Instance Types: <\/b><br\/><span style=\\\"labawsClass\\\">- Only t2.micro, t2.nano will be allowed. EBS Optimized must be set of \u2018False\u2019.<\/span><span style=\\\"labawsClass\\\">- You can only launch on-demand instances. Reserved \/ Spot instances are NOT allowed.<\/span><br\/><b>- Block Storage (EBS \/ VS):<\/b> Max size allowed is 30 GB. If size exceeds, launch will fail. Allowed Types: GP2, Standard.<br\/><b>- Security Groups:<\/b> Create new Security Groups for each session. Old ones will get deleted.<br\/><b>- RDS:<\/b> db.t2.micro will be allowed.<br\/><br\/><b>AWS Resource Usage:<\/b><br\/>- Resources created during the Lab session is for learning purposes only.<br\/>- Please do NOT plan to use the resources for any other personal\/commercial use.<br\/>- All resources created during a session will be terminated automatically once the session ends.<br\/>- Resources created in previous sessions will NOT be available for re-use.<br\/>- Do NOT try to access or perform any actions on resources that were NOT created by you in that session.<br\/>- Give unique names to your resources by using a prefix such as your \\\"username\\\".<br\/>- Protect your instances by using a keypair and appropriate Security Groups.<br\/>- Do NOT run any unknown scripts \/ install unknown software in the instances.<br\/>"}}';
    cloudLabsData = JSON.parse(cloudLabsData);
    // var enableLabsOldUserElearningIds = ["2676","2699","2707","2711","2716","2748","2765","2772","2788","2810","2813","2870","3015","3048","3061","3111","3237","3295","3296","3297","3298","3299","3300","3303","3304","3306","3314","3315","3316","3317","3322","3323","3325","3327","3341","3342","3343","3344","3358","3373","3606","3608","3623","3624","3625","3626","3634","3643","3644","3668","3669","3670","3671","3672","3673","3674","3675","3676","3677","3680","3681","3682","3683","3684","3685","3686","3687","3688","3689","3694","3698","3705","3706","3707","3709","3711","3712","3721","3734","3735","3737","3738","3755","3759","3760","3762","3763","3764","3765","3771","3775","3796","3803","3804","3805","3806","3808","3811","3813","3814","3817","3822","3824","3826","3832","3835","3838","3849","3850","3851","3861","3865","3866","3870","3873","3877","3878","3879","3880","3881","3882","3883","3886","3909","3916","3917","3918","3919","3920","3921","3922","3923","3932","3933","3934","3937","3940","3941","3942","3946","3947","3948","3950","3951","3955","3956","3957","3958","3960","3963","3969","3972","3974","3977","3978","3982","3983","3985","3986","3998","3999","4000","4003","4011","4017","4023","4024","4025","4028","4030","4031","4032","4033","4037","4039","4040","4041","4042","4043","4050","4061","4064","4065","4066","4067","4068","4069","4104","4113","4145","4171","4176","4186","4187","4190","4197","4200","4218","4314","4315","4316","4321","4322","4336","4337","4338","4340","4355","4356","4357","4360","4361","4392","4393","4394","4396","4397","4398","4400","4534","4535","4536","4537","4538","4539","4541","4551","4552","4553","4554","4555","4556","4557","4558","4559","4560","4561","4562","4563","4564","4565","4566","4580","4581","4582","4583","4584","4585","4586","4602","4667","4684","4700","4708","4709","4710","4711","4712"];
    var npsTags = ["Quality of instruction","Technical glitches and performance issues","Learning platform features","Support experience","Other"];
    var lvcRegisterMsg = "Some of the sessions in this class are already over. Please go through the recordings to get a preview of what happened in the earlier sessions";
    var learningTimeThreshold = '1800';
    var isShowLabs = 'Yes';
    var lrsUserName = 0;
    var password = 0;
    var lrsEndPoint = 0;
    var lrsValid = '0';
    var xapiUrl = 'https://xapi.simplilearn.com/';
    var xapiKey = '308ec2e4-b521-4801-88f7-8777654c0a23';
    var maxPassLength = '128';
    var minPassLength = '8';
    var IS_MAINTAINANCE_REDIRECT = '1';
    var IS_MAINTAINANCE_REDIRECT_URL = 'https://www.simplilearn.com/maintenance-page';
    var enterpriseThemeS3Path = 'https://s3.amazonaws.com/atp-data.simplilearn.com/public/uploads/custom-themes//';
</script><script type='text/javascript' src='https://www.google.com/jsapi'></script>

<script type='text/javascript' src='https://cfls5.simplicdn.net/frontend/js/combine.1638802976.js'></script>


<!-- Webengage code : Abhijit -->
<!-- <script id="_webengage_script_tag" type="text/javascript">
var webengage; !function(e,t,n){function o(e,t){e[t[t.length-1]]=function(){r.__queue.push([t.join("."),arguments])}}var i,s,r=e[n],g=" ",l="init options track screen onReady".split(g),a="feedback survey notification".split(g),c="options render clear abort".split(g),p="Open Close Submit Complete View Click".split(g),u="identify login logout setAttribute".split(g);if(!r||!r.__v){for(e[n]=r={__queue:[],__v:"6.0",user:{}},i=0;i<l.length;i++)o(r,[l[i]]);for(i=0;i<a.length;i++){for(r[a[i]]={},s=0;s<c.length;s++)o(r[a[i]],[a[i],c[s]]);for(s=0;s<p.length;s++)o(r[a[i]],[a[i],"on"+p[s]])}for(i=0;i<u.length;i++)o(r.user,["user",u[i]]);setTimeout(function(){var f=t.createElement("script"),d=t.getElementById("_webengage_script_tag");f.type="text/javascript",f.async=!0,f.src=("https:"==t.location.protocol?"https://ssl.widgets.webengage.com":"http://cdn.widgets.webengage.com")+"/js/webengage-min-v-6.0.js",d.parentNode.insertBefore(f,d)},5000)}}(window,document,"webengage");
webengage.init("~47b6596a");
</script> -->

<script type="text/javascript">
    /* setinterval to check whether webengage has loaded. If yes, bind webengage reload function to url hash change : abhijit */
    window.addEventListener("hashchange", function(){
         var webengageChk = setInterval(function(){
            if(webengage.reload != undefined){
                webengage.reload();
                clearInterval(webengageChk);
            }
        },1000);
    }, false);

    window.addEventListener("load", function(){
        initGA();
        initGTM();
    }, false);

    /*GA Code:Abhijit*/
    function initGA(){
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', gaCode]);
        _gaq.push(['_setDomainName', 'simplilearn.com']);
        _gaq.push(['_addIgnoredRef', 'https://lms.simplilearn.com']);
        _gaq.push(['_trackPageview']);
        var ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
    }

    /* Google Tag Manager : Abhijit */

    function initGTM(){
        var headgtm = document.getElementsByTagName('body')[0];
        var noscriptgtm = document.createElement('noscript');
        var iframegtm = document.createElement('iframe');
        var scriptgtm = document.createElement('script');
        iframegtm.src = "//www.googletagmanager.com/ns.html?id=GTM-M9RCQ7";
        iframegtm.height = "0";
        iframegtm.width = "0";
        iframegtm.style.display = 'none';
        iframegtm.style.visibility = 'hidden';
        noscriptgtm.appendChild(iframegtm);
        scriptgtm.innerHTML = "gtmLoadScript()";
        headgtm.appendChild(noscriptgtm);
        headgtm.appendChild(scriptgtm);
    }

    function gtmLoadScript(){
        (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({'gtm.start':
                        new Date().getTime(), event: 'gtm.js'});
            var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';j.async=true;
            j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-M9RCQ7');
    }
    /* End Google Tag Manager */
</script>
<!-- Hotjar Tracking Code for https://lms.simplilearn.com/ -->
<!-- @author - Ganesh -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:871713,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

    function script(url) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = url;
        var x = document.getElementsByTagName('head')[0];
        x.appendChild(s);
    }

        function css(url) {
        var s1 = document.createElement('link');
        s1.rel = 'stylesheet';
        s1.type = 'text/css';
        s1.async = true;
        s1.href = url;
        var y = document.getElementsByTagName('head')[0];
        y.appendChild(s1);
    }

    /** SET MAX AGE (time required to force refresh the cache) FOR ALL STATIC FILES FROM CDN 
     * More info here - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control 
    */
    
    script('https://cfls5.simplicdn.net/frontend/js/learning2/runtime.1638408720.js');
    script('https://cfls5.simplicdn.net/frontend/js/learning2/polyfills.1638408720.js');
    script('https://cfls5.simplicdn.net/frontend/js/learning2/main.1638408720.js');

    /**
     * IMPORTANT UPDATE 12 Nov 2020 : Please DO NOT make changes to this file
     * The JS / CSS Files being loaded are dynmaic, based on the Application Environment
     * Please reach out to pavansb (pavan.sb@simplilearn.net) OR Arun Yadav (arun.yadav@simplilearn.net) for any clarifications
     */
            css('https://cfls5.simplicdn.net/frontend/js/learning2/styles.1638408720.css');
    
</script>
<script type="text/javascript" src="https://cfs9.simplicdn.net/frontend/js/app/CountryData.js"></script>
<link rel="stylesheet" href="https://cfls5.simplicdn.net/frontend/css/help-and-support.1631699906.css" />
<script type='text/javascript' src='https://service.force.com/embeddedservice/5.0/esw.min.js'></script>
<script type='text/javascript'>
        var closeActualChatBot = false;
		var isTimeOutError = false;
		var timeOutErrorOccured = false;
		var isLiveChatTriggered = false;
	var initESW = function(gslbBaseURL) {
		embedded_svc.addEventHandler("afterMaximize", function(data) {
			isTimeOutError = false;
			if (closeActualChatBot == true || isTimeOutError == true) {
			    embedded_svc.liveAgentAPI.endChat();
			    embedded_svc.liveAgentAPI.clearSession();
			    $('#feedbackModal').modal('hide');
				hideComponentlikeDislikeModal();
			}
			if (timeOutErrorOccured == false) {
				setTimeout(function(){
					$("#default-chat-bot").addClass('hidden');
					$(".embeddedServiceSidebar-dummy").removeClass('help-bg-color');
					$('.help_and_support').removeAttr('disabled');
					$('#dummy-text').addClass('hidden');
				}, 1000);
			}	
		});
                
		embedded_svc.addEventHandler("afterDestroy", function(data) {
			isTimeOutError = false;
			if (closeActualChatBot == false) {
				// $("#default-chat-bot").addClass('hidden');
				// $('.help_and_support').removeAttr('disabled');
				window.trackWEevent('slLmsCloseHelpSupport','');
				$('#selectedOption').val('');
				$('#liked').val('');
				//[Disable] Feedback popup after chat transfer to live agent
				if(!isLiveChatTriggered){
					$('#feedbackModal').modal('show');
					$('#feedbackModal .modal-body').empty().append($('#did-you-find-template').html());
				}
                                isLiveChatTriggered = false;
				hideComponentlikeDislikeModal();
			}
			if (timeOutErrorOccured == false) {
				$("#default-chat-bot").addClass('hidden');
				$(".embeddedServiceSidebar-dummy").removeClass('help-bg-color');
				$('.help_and_support').removeAttr('disabled');
				$('#dummy-text').addClass('hidden');
			}
		});
		// embedded_svc.addEventHandler("onInviteAccepted", function(data) {
		// 	alert("onInviteAccepted event was fired.");
		// });
        
		embedded_svc.addEventHandler("onChatTransferSuccessful", function(data) {
			isLiveChatTriggered = true;
		});

		embedded_svc.settings.displayHelpButton = false; //Or false
		embedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'
		embedded_svc.settings.displayHelpButton = false; //Or false
		embedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'

		embedded_svc.settings.autoOpenPostChat = true;
		embedded_svc.settings.defaultMinimizedText = 'Simplilearn Chat'; //(Defaults to Chat with an Expert)
		embedded_svc.settings.disabledMinimizedText = 'Wait for Simplilearn Agent'; //(Defaults to Agent Offline)

		//embedded_svc.settings.defaultMinimizedText = '...'; //(Defaults to Chat with an Expert)
		//embedded_svc.settings.disabledMinimizedText = '...'; //(Defaults to Agent Offline)

		//embedded_svc.settings.loadingText = ''; //(Defaults to Loading)
		//embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)

		// Settings for Chat
		//embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
		// Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
		// Returns a valid button ID.
		//};
		//embedded_svc.settings.prepopulatedPrechatFields = {}; //Sets the auto-population of pre-chat form fields
		//embedded_svc.settings.fallbackRouting = []; //An array of button IDs, user IDs, or userId_buttonId
		//embedded_svc.settings.offlineSupportMinimizedText = '...'; //(Defaults to Contact Us)

		embedded_svc.settings.enabledFeatures = ['LiveAgent'];
		embedded_svc.settings.chatbotAvatarImgURL = "https://cfs22.simplicdn.net/paperclip/simpli-bot.svg";
		embedded_svc.settings.entryFeature = 'LiveAgent';
		embedded_svc.settings.loadingText = 'Simplilearn Help';

		/*Variable that to be pass to the prechat component*/
		var firstnamefromurl = 'Shashank Bisen';
		var lastnamefromurl = '';
		var useremail = "shashankcisen@gmail.com";
		var gid = "2";
		var url = "lms.simplilearn.com";
		var groupName = "";
		/****************************************************/

		embedded_svc.settings.prepopulatedPrechatFields = {
			FirstName: firstnamefromurl,
			LastName: lastnamefromurl,
			Email: useremail,
			Group_Id__c: gid
		};
		embedded_svc.settings.extraPrechatFormDetails = [{
				"label": "First Name",
				"transcriptFields": ["First_Name__c"],
				"value": firstnamefromurl
			},
			{
				"label": "Last Name",
				"transcriptFields": ["Last_Name__c"],
				"value": lastnamefromurl
			},
			{
				"label": "Email",
				"transcriptFields": ["Email_Id__c"],
				"value": useremail
			},
			{
				"label": "URL",
				"transcriptFields": ["URL__c"],
				"value": url
			},
			{
				"label": "Company Name",
				"transcriptFields": ["Company_Name__c"],
				"value": groupName
			},
			{
				"label": "Group Id",
				"transcriptFields": ["group_Id_of_LMS__c"],
				"value": gid
			}
		];

					embedded_svc.init(
				'https://simplilearn.my.salesforce.com',
				'https://simplilearn.secure.force.com/support',
				gslbBaseURL,
				'00D28000000sMrr',
				'Market_Motive_Chat', {
					baseLiveAgentContentURL: 'https://c.la2-c2-hnd.salesforceliveagent.com/content',
					deploymentId: '5722x000000L1bw',
					buttonId: '5732x000000L1cD',
					baseLiveAgentURL: 'https://d.la2-c2-hnd.salesforceliveagent.com/chat',
					eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04I2x000000GnLFEA0_1716d59057f',
					isOfflineSupportEnabled: false
				}
			);
			};

			if (!window.embedded_svc) {
			var s = document.createElement('script');
			s.setAttribute('src', 'https://simplilearn.my.salesforce.com/embeddedservice/5.0/esw.min.js');
			s.onload = function() {
				initESW(null);
			};
			document.body.appendChild(s);
		} else {
			initESW('https://service.force.com');
		}
	
	function callChatbot() {
		$(".embeddedServiceSidebar-dummy").removeClass('help-bg-color');
		closeActualChatBot = false;
		isTimeOutError = false;
		$("#default-chat-bot").removeClass('hidden');
		$("#img-loader").removeClass('hidden');
		$('.help_and_support').attr("disabled","disabled");
		$('#cookie-error-block').addClass('hidden');
		$('#generic-error-block').addClass('hidden');
		if(closeActualChatBot == false){
			/* Initially, we'll assume timeout happens but wait till the settimeout call happens. 
			*  During this interval, the embeddedsvc events afterMaximise and afterDestroy will alter this value based on which we display the error
			*/
			isTimeOutError = true;
			// the 'invite' feature is available only if 3rd party cookies are allowed
			if(window.embedded_svc.availableFeatures.includes('invite')) {
				setTimeout(function(){
					if(isTimeOutError == true){
						logClientError('Timeout/CORS');
						$('#generic-error-block').removeClass('hidden');
						$("#img-loader").addClass('hidden');
						$(".embeddedServiceSidebar-dummy").addClass('help-bg-color');
						embedded_svc.inviteAPI.inviteButton.rejectInvite();
						closeActualChatBot = true;
						timeOutErrorOccured = true;
					}
				}, 20000);
			} else {
				setTimeout(function(){
					logClientError('cookies-blocked');
					$('#cookie-error-block').removeClass('hidden');
					$("#img-loader").addClass('hidden');
					$(".embeddedServiceSidebar-dummy").addClass('help-bg-color');
					isTimeOutError = true;
					closeActualChatBot = true;
					timeOutErrorOccured = true;
				}, 1000);
			}
		}
		embedded_svc.inviteAPI.inviteButton.acceptInvite(); // use this API call to start chat from invitations
	}

	function logClientError(errorType = 'unknown'){
		var data = {};
		//Prepare data to be inserted
		data.user_id = "1650885";
		data.user_email = "shashankcisen@gmail.com";
		data.group_id = "2";
		data.error_type = errorType;
		$.ajax({
			url:baseUrl+'/help-and-support/log-client-error',
			type:"POST",
			data:data,
			dataType:"JSON",
			success:function(res){
				console.log(res);
			}
		});
	}
	function closeDummyChatBot(){
		closeActualChatBot = true;
		timeOutErrorOccured = false;
		if(embedded_svc.inviteAPI && embedded_svc.inviteAPI.inviteButton) {
			embedded_svc.inviteAPI.inviteButton.rejectInvite();
		}
		$("#default-chat-bot").addClass('hidden');
		$(".embeddedServiceSidebar-dummy").removeClass('help-bg-color');
		$('.help_and_support').removeAttr('disabled');
		$('#dummy-text').addClass('hidden');
	}
	
	/*Jquery for feedback support modal*/
	$(document).on('click', '.like-btn', function() {
		$('#liked').attr('value', 1);
		openFeedbackOption();
	});

	$(document).on('click', '.dislike-btn', function() {
		$('#liked').attr('value', 0);
		openFeedbackOption();
	});

	function openFeedbackOption() {
		/*Unhide the footer*/
		$('#feedbackModal .modal-body').html($('#thank-you-for-feedback-template').clone());
		$('#feedbackModal .modal-footer').html($('#thank-you-for-feedback-footer-template').clone());

		hideComponentlikeDislikeModal();

		if ($('#liked').val() !== '0') {
			$('#feedbackModal .modal-body #thank-you-for-feedback-template h3').html('What you like about our "Help" Experience?');
		} else {
			$('#feedbackModal .modal-body #thank-you-for-feedback-template h3').html('What could we do better?');
		}

		$('#feedbackModal .modal-body #thank-you-for-feedback-template').removeClass('hidden');
		$('#feedbackModal .modal-footer #thank-you-for-feedback-footer-template').removeClass('hidden');
		$('#feedbackModal .modal-footer #thank-you-for-feedback-footer-template button').show();
	}

	$(document).on('click', '#thank-you-for-feedback-id li', function() {
		var selectedOption = [];

		if ($(this).attr('checked')) {
			$(this).attr('checked', false);
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
			$(this).attr('checked', true);
		}

		$('#thank-you-for-feedback-id li.active').each(function() {
			selectedOption.push($(this).text());
		});

		$('#selectedOption').val(selectedOption.toString());

		if (selectedOption.length > 0) {
			$('#feedbackModal .modal-footer #thank-you-for-feedback-footer-template button').addClass('submit');
			$('#feedbackModal .modal-footer #thank-you-for-feedback-footer-template button').text('Submit');
			$('#feedbackModal .modal-footer #thank-you-for-feedback-footer-template button').attr('title', 'Submit');
			$('#feedbackModal .modal-footer #thank-you-for-feedback-footer-template button').attr('aria-label', 'Submit');
		} else {
			$('#feedbackModal .modal-footer #thank-you-for-feedback-footer-template button').removeClass('submit');
			$('#feedbackModal .modal-footer #thank-you-for-feedback-footer-template button').text('Skip & Close');
			$('#feedbackModal .modal-footer #thank-you-for-feedback-footer-template button').attr('title', 'Skip & Close');
			$('#feedbackModal .modal-footer #thank-you-for-feedback-footer-template button').attr('aria-label', 'Skip & Close');
		}
	});

	$(document).on('click', '#feedbackModal .modal-header .close', function() {
		var id = $('#feedbackModal .modal-body').children('div').attr('id');
		var action = 'close';
		if (id == 'thank-you-very-much-template') {
			$('#feedbackModal').modal('hide');
		} else {
			submitSupportFeedback(action);
			openthankYouModal();
		}

	});

	$(document).on('click', '#feedbackModal .modal-footer #thank-you-for-feedback-footer-template button', function() {
		var action = 'submit';
		submitSupportFeedback(action);
		openthankYouModal();
	});

	function submitSupportFeedback(action) {
		var data = {};
		//Prepare data to be inseted
		data.user_id = "1650885";
		data.user_email = "shashankcisen@gmail.com";
		data.group_id = "2";
		data.is_satisfied = $('#liked').val();
		if (action == 'submit') {
			data.reasons = $('#selectedOption').val();
		}
		var elearning_id = window['pcdata']['sl_lms_elearning_id'];
		var program_name = window['pcdata']['sl_lms_elearning_name'];
		var location = window.location.href.indexOf("dashboard");

		/*store elearningId and program_name only in courses*/
		if (typeof(elearning_id) !== 'undefined' && elearning_id && location == -1) {
			data.elearning_id = elearning_id;
		}
		if (typeof(program_name) !== 'undefined' && program_name && location == -1) {
			data.program_name = program_name;
		}

		$.ajax({
			url: baseUrl + '/support-feedback/insert-support-feedback',
			type: "POST",
			data: data,
			dataType: "JSON",
			success: function(res) {
				console.log(res);
			}
		});
	}

	function openthankYouModal() {
		$('#feedbackModal .modal-body').html($('#thank-you-very-much-template').clone());
		$('#feedbackModal .modal-footer').html($('#thank-you-very-much-footer-template').clone());
		$('#feedbackModal .modal-body #thank-you-very-much-template').removeClass('hidden');
		$('#feedbackModal .modal-footer #thank-you-very-much-footer-template').removeClass('hidden');
		$('#feedbackModal').modal('show');
	}

	function hideComponentlikeDislikeModal() {
		var id = $('#feedbackModal .modal-body').children('div').attr('id');
		if (id == 'did-you-find-content-id') {
			$('#feedbackModal .modal-header .close').hide();
			$('#feedbackModal .modal-footer').hide();
		} else {
			$('#feedbackModal .modal-header .close').show();
			$('#feedbackModal .modal-footer').show();
		}
	}

</script>
<div class="modal fade" id="feedbackModal" tabindex="-1" role="dialog" aria-labelledby="feedbackModalLabel" aria-hidden="true" data-keyboard="false" data-backdrop="static">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 id="modal-header-h1-id" class="modal-title" id="exampleModalLabel">Feedback for "Help" Experience</h5>
				<button type="button" class="close" aria-label="Close" title="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
			</div>
			<div class="modal-footer" class="hidden">
			</div>
		</div>
	</div>
</div>
<div id="did-you-find-template" class="hidden">
	<div id="did-you-find-content-id">
		<h3>Hey Shashank Bisen!</h3>
		<h3>Did you find what you are looking for?</h3>
		<div class="image-container">
			<button class="dislike-btn" title="Dislike" aria-label="Dislike">
				<img src="https://cfs22.simplicdn.net/paperclip/dislike_2020-07-17/dislike.png" alt="no">
			</button>
			<button class="like-btn" title="Like" aria-label="Like">
				<img src="https://cfs22.simplicdn.net/paperclip/like_2020-07-17/like.png" alt="yes">
			</button>
		</div>
	</div>
</div>
<div id="thank-you-for-feedback-template" class="hidden">
	<div id="thank-you-for-feedback-id">
		<h4>Thank you for your feedback!</h4>
		<h3 class="feedback-que"></h3>
		<p>You can select more than one choice</p>
		<ul>
			<li tabindex="0" title="FAQ/Articles" aria-label="FAQ/Articles"><span class="icon"></span>FAQ/Articles</li>
			<li tabindex="0" title="Arya - The virtual assistant" aria-label="Arya - The virtual assistant"><span class="icon"></span>Arya - The virtual assistant</li>
			<li tabindex="0" title="Support Request" aria-label="Support Request"><span class="icon"></span>Support Request</li>
			<li tabindex="0" title="Overall Help Experience" aria-label="Overall Help Experience"><span class="icon"></span>Overall Help Experience</li>
		</ul>
	</div>
</div>
<div id="thank-you-for-feedback-footer-template" class="hidden">
	<button type="button" class="btn btn-primary" title="Skip & Close" aria-label="Skip & Close">Skip & Close</button>
</div>
<div id="thank-you-very-much-template" class="hidden">
	<div id="thank-you-very-much-id">
		<img src="https://cfs22.simplicdn.net/paperclip/feedback_2020-07-17/feedback3x.png" alt="feedback">
		<div class="thank-you-container">
			<h3>Shashank Bisen, Thank you very much for your feedback</h3>
			<p>Your valuable feedback will help us improve our customer experience.</p>
		</div>
	</div>
</div>
<div id="thank-you-very-much-footer-template" class="hidden">
	<button type="button" class="btn btn-primary" data-dismiss="modal" title="Close" aria-label="Close">Close</button>
</div>

<input type="hidden" name="liked" id="liked" value="0">
<input type="hidden" name="selectedOption" id="selectedOption" value="">

<div class="modalContainer sidebarMaximized layout-docked-dummy embeddedServiceSidebar-dummy hidden" id="default-chat-bot">
   <div class="dummyHelp dummyLayout">
	  <header class="sidebarHeader dummySideBar">
	    <div class="embeddedServiceInvitation" id="snapins_invite" inert="true" aria-live="assertive" role="dialog" aria-atomic="true"></div>
	    <button onclick="closeDummyChatBot()" id="close-dummy-chat-bot">X</button>
	  </header>
	  <div>
	    <img id="img-loader" src="https://cfs22.simplicdn.net/paperclip/shanu_dummy.gif">
	    <!-- <span id="dummy-text" class="icon hidden" style="position: absolute;top: 50%;left: 40%;">Timeout Error<span> -->
		<div id="cookie-error-block" class="error-block">
			<div class="white-bg" >
				<div class="error-communication-image">
					<img src="https://cfs22.simplicdn.net/paperclip/cookies-v2.png" alt="cookies-disabled" border="0">
				</div>
				<div class="error-communication-text">
					<h3>Cookies Disabled</h3>
					<p>Your browser has third-party cookies blocked. Please change your browser settings to allow cookies to use Help.</p>
					<div>&nbsp;</div>
				</div>
			</div>
			<div class="blue-bg">
				<h4>Other things to try:</h4>
				<ul>
					<li>Clear your browser's cache and refresh your page.</li>
					<li>Allow third-party cookies in the browser and refresh the page.</li>
											<li>You can post your concern in the Simplilearn <a href="https://community.simplilearn.com/" target="_blank">support community forum</a></li>
									</ul>
			</div>
		</div>
		<div id="generic-error-block" class="error-block">
			<div class="white-bg" >
				<div class="error-communication-image">
					<img src="https://cfs22.simplicdn.net/paperclip/oops-error-v2.png" alt="generic-error" border="0">
				</div>
				<div class="error-communication-text">
					<h3>OOPS!</h3>
					<p>Something went wrong. Please try again after some time.</p>
					<div>&nbsp;</div>
				</div>
			</div>
			<div class="blue-bg">
				<h4>Other things to try:</h4>
				<ul>
					<li>Clear your browser's cache and refresh your page.</li>
					<li>Allow third-party cookies in the browser and refresh the page.</li>
											<li>You can post your concern in the Simplilearn <a href="https://community.simplilearn.com/" target="_blank">support community forum</a></li>
									</ul>
			</div>
		</div>
	  </div>
   </div>
</div>
