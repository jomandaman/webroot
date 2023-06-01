/* VM Site Version = _v2 / cacheFileExists = YES */ 
	
	
	/*http://getbootstrap.com/getting-started/#support-ie10-width*/(function () { 'use strict'; if (navigator.userAgent.match(/IEMobile\/10\.0/)) { var msViewportStyle = document.createElement('style'); msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}')); document.querySelector('head').appendChild(msViewportStyle); } })();
	
	
	/*
 * TotalStorage
 *
 * Copyright (c) 2012 Jared Novack & Upstatement (upstatement.com)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Total Storage is the conceptual the love child of jStorage by Andris Reinman,
 * and Cookie by Klaus Hartl -- though this is not connected to either project.
 *
 * @name $.totalStorage
 * @cat Plugins/Cookie
 * @author Jared Novack/jared@upstatement.com
 * @version 1.1.2
 * @url http://upstatement.com/blog/2012/01/jquery-local-storage-done-right-and-easy/
 */
 
(function(c,h){var e,d;if("localStorage"in window)try{d="undefined"===typeof window.localStorage?h:window.localStorage,e="undefined"==typeof d||"undefined"==typeof window.JSON?!1:!0}catch(j){e=!1}c.totalStorage=function(b,a){return c.totalStorage.impl.init(b,a)};c.totalStorage.setItem=function(b,a){return c.totalStorage.impl.setItem(b,a)};c.totalStorage.getItem=function(b){return c.totalStorage.impl.getItem(b)};c.totalStorage.getAll=function(){return c.totalStorage.impl.getAll()};c.totalStorage.deleteItem=
function(b){return c.totalStorage.impl.deleteItem(b)};c.totalStorage.impl={init:function(b,a){return"undefined"!=typeof a?this.setItem(b,a):this.getItem(b)},setItem:function(b,a){if(!e)try{return c.cookie(b,a),a}catch(g){console.log("Local Storage not supported by this browser. Install the cookie plugin on your site to take advantage of the same functionality. You can get it at https://github.com/carhartl/jquery-cookie")}var f=JSON.stringify(a);d.setItem(b,f);return this.parseResult(f)},getItem:function(b){if(!e)try{return this.parseResult(c.cookie(b))}catch(a){return null}b=
d.getItem(b);return this.parseResult(b)},deleteItem:function(b){if(!e)try{return c.cookie(b,null),!0}catch(a){return!1}d.removeItem(b);return!0},getAll:function(){var b=[];if(e)for(var a in d)a.length&&b.push({key:a,value:this.parseResult(d.getItem(a))});else try{var g=document.cookie.split(";");for(a=0;a<g.length;a++){var f=g[a].split("=")[0];b.push({key:f,value:this.parseResult(c.cookie(f))})}}catch(h){return null}return b},parseResult:function(b){var a;try{a=JSON.parse(b),"undefined"==typeof a&&
(a=b),"true"==a&&(a=!0),"false"==a&&(a=!1),parseFloat(a)==a&&"object"!=typeof a&&(a=parseFloat(a))}catch(c){a=b}return a}}})(jQuery);

	
	
	
	/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),
b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?
b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,
e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===
d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);

	
	
	
	/*
////////////////////////////////////
VM v2 - Site component
///////////////////////////////////
*/
var VMSite = {
	params: { ajaxNoCache:'' },
	init: function() {
		
		// Initialize navigation
		VMSite.nav.init();
		VMSite.nav.fixed();
		VMSite.nav.colheights();
		VMSite.nav.colheightsInterval = setInterval(function(){ VMSite.nav.colheights(); },750);

		if (window.location.pathname.toLowerCase().indexOf('vmnocache') > -1){
			VMSite.params.ajaxNoCache = '&vmNoCache=1';
		}

		// Homepage
		if($('body').hasClass('Home')) {
			VMSite.home.init();
		}

		// Gallery & Inventory Items
		if ($('body').hasClass('Gallery')) {
			VMSite.gallery.init();
			$(window).resize(function(){
				var openItemsBlock = $('#VMSite').find('.category-items.on .category-links');
				if (openItemsBlock.length) {
					VMSite.gallery.heights(openItemsBlock);
				}
			});
		}

		// Inventory
		if ($('body').hasClass('Inventory')) {
			VMSite.inventory.init();
		}

		// Inventory Items
		if ($('body').hasClass('Inventory-Items')) {
			VMSite.inventoryitems.init();
		}

		// Inventory Items - Detail
		if ($('body').hasClass('Inventory-Item-Detail')) {
			VMSite.itemdetail.init();
		}

		// Blog
		if ($('body').hasClass('Blog')) {
			VMSite.blog.init();
		}

		// Contact
		if ($('body').hasClass('Contact')) {
			VMSite.contact.init();
		}

		// Refer
		if ($('body').hasClass('Refer')) {
			VMSite.refer.init();
		}

		// Get typeahead from cache if it exists and it's recent
		if (VMSite.util.LocalStorage.get('cacheKey') !== VMSiteCacheKey || !VMSite.util.LocalStorage.get('typeahead') || VMSite.util.TimeElapsed({ time:VMSite.util.LocalStorage.get('typeahead.timestamp'), unit:'m' }) > 10) {
			$.get(vmSiteDir + 'incs/ajaxCalls_v2dynamic.cfm?type=typeahead'+VMSite.params.ajaxNoCache,function(json){
				VMSite.util.LocalStorage.set('typeahead',{ items: json.Items, timestamp: new Date().getTime() });
				VMSite.typeahead();
			});
		} else {
			VMSite.typeahead();
		}
		
		// Set localStorage cache key
		VMSite.util.LocalStorage.set('cacheKey',VMSiteCacheKey);
	},
	blog: {
		init: function() {
			VMSite.masterslider.init();
			$('#VMSite')
				.on('click','form.blogSidebar .btn',function(e){
					e.preventDefault;
					var form = $('#VMSite form.blogSidebar');
					if (form.find('[name="search"]').val()) {
						form.submit();
					} else {
						alert('Please enter a search phrase.');
					}					
				})
				.on('change','select.blogSidebar',function(e){
					window.location = $(this).find('option:selected').val();
				});
		}
	},
	contact: {
		init: function() {
			$('body.Contact form').wrapInner('<div class="loading" style="position:relative;width:100%;"></div>');
			VMSite.contact.initUploader();
			$('body.Contact').on('submit','form',function(e) {
				e.preventDefault();
				var form = $(this);
				var formLoading = form.find('.loading');
				var formLabels = form.find('span[rel]');
				var formInputs = form.find('input[type="text"],textarea,select');
				var formErrors = form.find('.error');
				var formSubmit = function() {
					form.find('input[type="submit"]').removeClass('hidden').end().find('span.contactUploadMsg').html('').end();
					formLoading.css({ opacity:'.2'});
					var loader = VMSite.util.Loader({ ele:form, type:'overlay', bgColor:'#000', bgAlpha:'0', color:'rgba(206,169,65,1)', size:'4', spinnerLeft:'50%', spinnerTop:'50%' });
					setTimeout(function() {
						$.post(vmSiteDir+'incs/ajaxCalls_v2dynamic.cfm?type=postContact',form.serialize(),function(data){
							form.find('.alert').remove();
							var msgType = 'success';
							var msgText = '';
							var msgWait = 4000;
							if (data.success) {
								formInputs.val('');
								msgText = '<h4 style="margin-top:0;"><i class="fa fa-check"></i>&nbsp; Thank you - your submission was successful.</h4><p style="margin-bottom:0;">We will be contacting you shortly.';
								if (data.form.itemlink) {
									msgText += ' Click the link above to return to your item.';
								}
								msgText += '</p>';
							} else {
								msgText = '<h4 style="margin-top:0;"><i class="fa fa-exclamation-triangle"></i>&nbsp; There were problems with your submission.</h4>';
								msgWait = 1000;
								msgType = 'danger';
								if (data.errormsg) {
									msgText += '<p>'+data.errormsg+'</p>';
								}
								if (!_.isEmpty(data.errStruct)) {
									 var arrErrKeys = [];
									 _.each(data.errStruct,function(val,key){
										form.find('span[rel="'+key+'"]').text(val).addClass('error');
										arrErrKeys.push(key);
									});
									msgText += '<p>See the fields in red below...</p>';
									$(formInputs.get().reverse()).each(function(){
										var thisName = $(this).attr('name');
										if (_.indexOf(arrErrKeys,thisName) > -1) {
											$(this).focus();
										}
									});
								}
							}
							formLoading.css({ opacity:'1' }).prepend('<div class="alert alert-'+msgType+'">'+msgText+'</div>');
							if (data.success) {
								setTimeout(function(){
									formLoading.find('.alert').slideUp(1000,function(){ $(this).remove(); });
								},msgWait);
								VMSite.contact.initUploader();
								$('html,body').animate({ scrollTop:'100px' },500);
							}
							loader.remove();
						},'json');
					},500);
				};
				// Process form
				form.find('input[type="submit"]').blur();
				formErrors.removeClass('error');
				formLabels.each(function(){ $(this).text($(this).data('origText')); });
				try {
					var uploader = $('#contactUploader').pluploadQueue();
					if (uploader && uploader.total.uploaded == 0 && uploader.files.length > 0) {
						form
							.find('input[type="submit"]').addClass('hidden').end()
							.find('span.contactUploadMsg').html('<div class="alert alert-success" style="margin:0;"><i class="fa fa-spinner fa-pulse"></i>&nbsp; Please wait while your images upload...</div>').end();
						uploader.bind('UploadProgress', function() {
							if (uploader.total.uploaded == uploader.files.length) { }
						});
						uploader.bind('UploadComplete', function() {
							formSubmit();
						});
						uploader.start();
					} else {
						formSubmit();
					}
				} catch(err) {
					$.log(err);
				}
			}).find('span[rel]').each(function(){
				$(this).data('origText',$(this).text());
			});
		},
		initUploader: function() {
			var contactForm = $('body.Contact form');
			$('#contactUploader').html('');
			$('#contactUploader').pluploadQueue({
				// General settings
				runtimes : 'html5,flash,silverlight',
				url : vmSiteDir + 'js/plupload/upload.2.2.1.php',
				max_file_size : '10mb',
				chunk_size : '1mb',
				unique_names : true,
				resize : { width : 1024, height : 1024, quality : 90 },
				filters : [ { title : 'Image files', extensions : 'jpg,jpeg,gif,png' }, { title : 'PDF files', extensions : 'pdf' } ],
				flash_swf_url : vmSiteDir + 'js/plupload/flash.swf',
				silverlight_xap_url : vmSiteDir + 'js/plupload/silverlight.xap',
				preinit : {
					Init: function(up, info) {
						$('#contactUploader .plupload_add').html('<i class="fa fa-plus-circle"></i>&nbsp; Add Files');
						$('#contactUploader .plupload_start').html('<i class="fa fa-cloud-upload"></i>&nbsp; Start Upload');
						VMSite.contact.uploadLog('[Init]', 'Info:', info, 'Features:', up.features);
					},
					UploadFile: function(up, file) {
						VMSite.contact.uploadLog('[UploadFile]', file);
						// You can override settings before the file is uploaded
						// up.settings.url = 'upload.php?id=' + file.id;
						// up.settings.multipart_params = {param1 : 'value1', param2 : 'value2'};
					}
				},
				init : {
					Refresh: function(up) {
						// Called when upload shim is moved
						VMSite.contact.uploadLog('[Refresh]');
					},
					StateChanged: function(up) {
						// Called when the state of the queue is changed
						VMSite.contact.uploadLog('[StateChanged]', up.state == plupload.STARTED ? "STARTED" : "STOPPED");
					},
					QueueChanged: function(up) {
						// Called when the files in queue are changed by adding/removing files
						VMSite.contact.uploadLog('[QueueChanged]');
					},
					UploadProgress: function(up, file) {
						// Called while a file is being uploaded
						VMSite.contact.uploadLog('[UploadProgress]', 'File:', file, "Total:", up.total);
					},
					UploadComplete: function(up,files) {
						var hiddenVal = '';
						for (var i in up.files) {
							hiddenVal += ',' + up.files[i].id + '.' + up.files[i].name.split('.')[1];
						}
						contactForm.find('[name="uploadedFiles"]').val(hiddenVal);
					},
					FilesAdded: function(up, files) {
						// Callced when files are added to queue
						VMSite.contact.uploadLog('[FilesAdded]');
						plupload.each(files, function(file) {
							VMSite.contact.uploadLog('  File:', file);
						});
						$('#contactUploader li.plupload_delete .plupload_file_action a').html('<i class="fa fa-minus-circle" style="color:red;"></i>');
					},
					FilesRemoved: function(up, files) {
						// Called when files where removed from queue
						VMSite.contact.uploadLog('[FilesRemoved]');
						plupload.each(files, function(file) {
							VMSite.contact.uploadLog('  File:', file);
						});
					},
					FileUploaded: function(up, file, info) {
						// Called when a file has finished uploading
						VMSite.contact.uploadLog('[FileUploaded] File:', file, "Info:", info);
						setTimeout(function(){
							$('#contactUploader li.plupload_done .plupload_file_action a')
								.html('<i class="fa fa-check-circle" style="color:green;"></i>')
								.click(function(e){ e.preventDefault(); });
						},500);
					},
					ChunkUploaded: function(up, file, info) {
						// Called when a file chunk has finished uploading
						VMSite.contact.uploadLog('[ChunkUploaded] File:', file, "Info:", info);
					},
					Error: function(up, args) {
						// Called when a error has occured
						VMSite.contact.uploadLog('[error] ', args);
					}
				}
			});
			VMSite.nav.colheights();
		},
		uploadLog: function() {
			var str = '';
			plupload.each(arguments, function(arg) {
				var row = '';
				if (typeof(arg) != 'string') {
					plupload.each(arg, function(value, key) {
						// Convert items in File objects to human readable form
						if (arg instanceof plupload.File) {
							// Convert status to human readable
							switch (value) {
								case plupload.QUEUED:
									value = 'QUEUED';
									break;
								case plupload.UPLOADING:
									value = 'UPLOADING';
									break;
								case plupload.FAILED:
									value = 'FAILED';
									break;
								case plupload.DONE:
									value = 'DONE';
									break;
							}
						}
						if (typeof(value) != "function") {
							row += (row ? ', ' : '') + key + '=' + value;
						}
					});
					str += row + " ";
				} else { 
					str += arg + " ";
				}
			});
			$.log('UPLOADER EVENTS\n\n' + str + '\n\n');
		}
	},
	gallery: {
		heights: function(categorylinks) {
			var device = VMSite.util.Device();
			var $captions = categorylinks.find('.category-links-caption');
			$captions.css({ height:'auto' });
			if (device.view.toLowerCase() !== 'mobile') {
				var maxHeight = Math.max.apply(Math, $captions.map(function(){
					return $(this).height();
				}).get());
				$captions.height(maxHeight);
			}			
		},
		init: function() {
			var $gallery = VMSite.gallery;
			$('#VMSite')
				.on('click','.category-title',function(e){
					e.preventDefault();
					$gallery.load($(this).parent());
				});

			/* Load last expanded gallery */
			$(window).on('load',function(event){
				/*
				$.get(vmSiteDir + 'incs/ajaxCalls_v2dynamic.cfm?type=getGalleryState',function(json){
					if (json.STATE != 'All-Categories') {
						$.scrollTo($('div[data-thiscat="'+json.STATE+'"]'),1000,{ 
							offset: { top: -25 }, 
							onAfter:function(){ 
								$('div[data-thiscat="'+json.STATE+'"] h3 a').eq(0).trigger('click');
							} 
						});
					}
				});
				*/
			});
		},
		load: function(category) {
			var $gallery = VMSite.gallery;
			var categories = $('#VMSite').find('.category-items');
			var title = category.find('.category-title');
			var links = category.find('.category-links');
			if (category.hasClass('on')) {
				category.removeClass('on');
				title.find('h4').removeClass('hidden');
				links.addClass('hidden').html('');
			} else {
				categories.removeClass('on')
					.find('.category-title h4').removeClass('hidden').end()
					.find('.category-links').addClass('hidden').html('').end();
				category.addClass('on');
				title.find('h4').addClass('hidden');
				links.removeClass('hidden');
				VMSite.util.Loader({ ele:links, color:'#444', size:'3' });
				$.get(vmSiteDir + 'incs/ajaxCalls_v2dynamic.cfm?type=setGalleryState&state='+category.data('key')+VMSite.params.ajaxNoCache,function(json){ /* no callback needed yet */ });
				setTimeout(function(){
					$.get(vmSiteDir + 'incs/ajaxCalls_v2dynamic.cfm?type=getGallery&category='+category.data('key')+VMSite.params.ajaxNoCache,function(json){
						var html = '';
						if (json.success) {
							_.each(json.Gallery.items,function(obj){
								var block = json.Gallery.template+'';
								_.each(_.keys(obj),function(key){
									block = block.replace(new RegExp('{{'+key.toLowerCase()+'}}','gi'),obj[key]);
								});
								html += block;
							});
						} else {
							html += '<p>'+json.errormsg+'</p>';
						}
						links.html(html);
						$gallery.heights(links);
					});
				}, 1000);
			}			
		}
	},
	home: {
		init: function() {
			VMSite.masterslider.init();
			$('#VMSite')
				.on('click','.ms-showcase1 .ms-slide-info .ms-info',function(e){
					e.preventDefault();
					window.location = $(this).data('url');
				});
			$.get(vmSiteDir+'incs/ajaxCalls_v2dynamic.cfm?setCat=1'+VMSite.params.ajaxNoCache,function(data){ });
		}
	},
	inventory: {
		init: function() {
			var $inventory = VMSite.inventory;
			$('#VMSite')
				.on('click','.category-title',function(e){
					e.preventDefault();
					$inventory.load($(this).parent());
				});
		},
		load: function(category) {
			var $inventory = VMSite.inventory;
			var categories = $('#VMSite').find('.category-items');
			var title = category.find('.category-title');
			var links = category.find('.category-links');
			if (category.hasClass('on')) {
				category.removeClass('on');
				title.find('h4').removeClass('hidden');
				links.addClass('hidden');
			} else {
				categories.removeClass('on')
					.find('.category-title h4').removeClass('hidden').end()
					.find('.category-links').addClass('hidden').end();
				category.addClass('on');
				title.find('h4').addClass('hidden');
				links.removeClass('hidden');
			}			
		}
	},
	inventoryitems: {
		init: function() {
			var itemLinks = $('.category-links');
			VMSite.gallery.heights(itemLinks);
			$(window).resize(function(){
				VMSite.gallery.heights(itemLinks);
			});
		}
	},
	itemdetail: {
		init: function() {
			// Image click
			$('.product-imgs').on('click','.zoomLink',function(e){
				e.preventDefault();
				$(this).blur();
				var title = $('#detailZoom .linkContainer').data('title');
				if (!VMSite.itemdetail.isZoomed) 
				{
					var domProdImgs = $('.product-imgs');
					var mobileZoom = $('.mobileZoom');

					// Insert mobile preview images
					domProdImgs.addClass('zoomed').removeClass('visible-xs');
					var htmlSm = '';
					htmlSm += '<div class="instructions">';
					htmlSm += 'Hover over images to zoom in place. Click on any image to zoom in full screen.';
					htmlSm += '</div>';
					htmlSm += $('.product-imgs').html();
					mobileZoom.addClass('active').html(htmlSm);
					var topClose = mobileZoom.find('.close-zoom').clone();
					mobileZoom.prepend(topClose);
					mobileZoom.find('.zoomLink').addClass('MagicZoom').each(function(){
						var src = $(this).find('img').attr('src');
						$(this).find('img').attr('src',vmSiteDir+'images/pages/blank_900.png').css({ width:'100%', height:'300px', background:'url('+src.replace('thumbsm','thumblg')+') center center no-repeat' });
						MagicZoom.refresh(this);
						$('body .mz-zoom-window').css({ zIndex:99900 });
					});
				
					// Insert desktop preview images
					var htmlLg = '';
					domProdImgs.find('.zoomLink').each(function(){
						htmlLg += '<a class="MagicZoom" href="'+$(this).attr('href')+'" title="'+title.replace(/"/gi,'&quot;')+'">';
						htmlLg += '<img src="'+vmSiteDir+'images/pages/blank_900.png" border="0" style="width:100%;background-image:url('+$(this).data('preview')+');" />';
						htmlLg += '</a>';
					});
					$('#detailText').addClass('visible-xs');
					$('#detailZoom').removeClass('hidden').find('.linkContainer .zoom-images').html(htmlLg);
					$('#detailZoom .MagicZoom').each(function(){
						MagicZoom.refresh(this);
						$('body .mz-zoom-window').css({ zIndex:99900 });
					});

					VMSite.nav.colheights();
					VMSite.itemdetail.isZoomed = true;
				}
				else 
				{
					VMSite.itemdetail.closeZoom();
				}	
			});
			$('.product-imgs').on('click','.close-zoom a',function(e){
				e.preventDefault();
				VMSite.itemdetail.closeZoom();
			});
			$('.mobileZoom').on('click','.close-zoom a',function(e){
				e.preventDefault();
				VMSite.itemdetail.closeZoom();
			});
			$('#detailZoom').on('click','.close-zoom a',function(e){
				e.preventDefault();
				VMSite.itemdetail.closeZoom();
			});

			$('.actionBar').on('click','.actionLink[href="#formPurchase"],.actionLink[href="#formPriceReduced"]',function(e){
				e.preventDefault();
				$(this).blur();
				$('#detailText').addClass('hidden');
				$('#detailZoom').removeClass('hidden').addClass('formInlinePopup')
					.find('.linkContainer .zoom-images').html($($(this).attr('href')).html()).end()
					.find('.instructions').addClass('hidden').end();
				$('#detailZoom').removeClass('hidden')
					.parent('div').addClass('visible-xs').end()
					.find('form label').each(function(){
						$(this).data('origText',$(this).text());
					});
				VMSite.nav.colheights();
				$('html,body').animate({ scrollTop:($('#detailZoom').offset().top-55)+'px' },500);
			});	

			$('#detailZoom').on('submit','.formPurchase form',function(e){
				e.preventDefault();
				var form = $(this);
				var formLabels = form.find('label');
				var formInputs = form.find('input[type="text"],textarea');
				var formErrors = form.find('.error');
				var formWidth = form.outerWidth();
				var formHeight = form.outerHeight();
				form.find('input[type="submit"]').blur();
				form.find('.alert').remove();
				formErrors.removeClass('error');
				formLabels.each(function(){ $(this).text($(this).data('origText')); });
				var loader = VMSite.util.Loader({ ele:form, type:'overlay', bgColor:'#fff', bgAlpha:'.9', color:'rgba(206,169,65,1)', size:'4', spinnerLeft:'50%', spinnerTop:'85%' });
				setTimeout(function() {
					$.post(vmSiteDir+'incs/ajaxCalls_v2dynamic.cfm?type=postPurchase',form.serialize(),function(data){
						var msgText = '';
						var msgType = 'success';
						var msgWait = 5000;
						if (data.success) {
							formInputs.val('');
							form.find('input[type="checkbox"]').prop('checked',false);
							msgText = '<h4 style="margin:0 0 .5em 0;"><i class="fa fa-check"></i>&nbsp; Thank you - your submission was successful.</h4><span class="byline">We will contact you shortly to complete your purchase. This form will close automatically.</span>';
						} else {
							msgText = '<h4 style="margin:0 0 .5em 0;"><i class="fa fa-exclamation-triangle"></i>&nbsp; There were problems with your submission.</h4>';
							msgType = 'danger';
							msgWait = 3500;
							if (!_.isEmpty(data.errStruct)) {
								_.each(data.errStruct,function(val,key){
									form.find('label[for="'+key+'"]').text(val).addClass('error');
								});								
							}
							if (data.errormsg) {
								msgText += '<span class="byline">'+data.errormsg+'</span>';
								msgWait = 3500;
							}
						}
						form.prepend('<div class="alert alert-'+msgType+'" style="margin:1em 0;background:white !important;box-shadow:none !important;">'+msgText+'</div>');
						var msg = form.find('.alert');
						loader.remove();
						$('html,body').animate({ scrollTop:(msg.offset().top-55)+'px' },500);
						if (data.success) {
							setTimeout(function(){ $('#detailZoom .close-zoom a').eq(0).trigger('click'); },msgWait);
						}
					});
				}, 500);
			});
			
			$('#detailZoom').on('submit','.formPriceReduced form',function(e){
				e.preventDefault();
				var form = $(this);
				var formLabels = form.find('label');
				var formInputs = form.find('input[type="text"]');
				var formErrors = form.find('.error');
				var formWidth = form.outerWidth();
				var formHeight = form.outerHeight();
				form.find('input[type="submit"]').blur();
				form.find('.alert').remove();
				formErrors.removeClass('error');
				formLabels.each(function(){ $(this).text($(this).data('origText')); });
				var loader = VMSite.util.Loader({ ele:form, type:'overlay', bgColor:'#fff', bgAlpha:'.9', color:'rgba(206,169,65,1)', size:'4', spinnerLeft:'50%', spinnerTop:'50%' });
				setTimeout(function() {
					$.post(vmSiteDir+'incs/ajaxCalls_v2dynamic.cfm?type=postPriceChange',form.serialize(),function(data){
						var msgText = '';
						var msgType = 'success';
						var msgWait = 5000;
						if (data.success) {
							formInputs.val('');
							msgText = '<h4 style="margin:0 0 .5em 0;"><i class="fa fa-check"></i>&nbsp; Thank you - your submission was successful.</h4><span class="byline">You will receive Vintage Memorabilia alerts when the price of this item changes. This form will close automatically.</span>';
						} else {
							if (!_.isEmpty(data.errStruct)) {
								_.each(data.errStruct,function(val,key){
									form.find('label[for="'+key+'"]').text(val).addClass('error');
								});
								msgText = '<h4 style="margin:0 0 .5em 0;"><i class="fa fa-exclamation-triangle"></i>&nbsp; There were problems with your submission.</h4>';
								msgType = 'danger';
								msgWait = 1000;
							}
							if (data.errormsg) {
								msgText += '<span class="byline">'+data.errormsg+'</span>';
								msgWait = 3500;
							}
						}
						form.prepend('<div class="alert alert-'+msgType+'" style="margin:1em 0;background:white !important;box-shadow:none !important;">'+msgText+'</div>');
						var msg = form.find('.alert');
						loader.remove();
						$('html,body').animate({ scrollTop:(msg.offset().top-55)+'px' },500);
						if (data.success) {
							setTimeout(function(){ $('#detailZoom .close-zoom a').eq(0).trigger('click'); },msgWait);
						}
					});
				}, 500);
			});
		},
		isZoomed:false,
		closeZoom: function() {
			$('.product-imgs').removeClass('zoomed').addClass('visible-xs');
			$('.mobileZoom').removeClass('active').html('');
			$('#detailText').removeClass('hidden visible-xs');
			$('#detailZoom').addClass('hidden').removeClass('formInlinePopup')
				.find('.instructions').removeClass('hidden').end()
				.find('.zoom-images').html('').end()
				.parent('div').removeClass('visible-xs').end();
			VMSite.nav.colheights();
			VMSite.itemdetail.isZoomed = false;
			$('html,body').animate({ scrollTop:'100px' },500);
		}
	},
	masterslider: {
		init: function(){
			var device = VMSite.util.Device();
			var MSConfig = {
				main: {
					width:1024, height:580, space:0, fillMode:'fit', speed:25, preload:0,
					view:'partialWave', keyboard:true, wheel:true, loop:true, autoplay:true
				}, //basic,fade,mask,wave,flow,stack,scale,focus,parallaxMask,partialWave,fadeBasic,fadeWave,fadeFlow
				slideinfo: {	
					autohide:false, overVideo:true, size:50, inset:false, align:'bottom', margin:0
				},
				timebar: {
					autohide:false, overVideo:true, inset:false, align:'bottom', margin:0, color:'rgba(204,204,204,.1)'
				},
				thumblist: {
					autohide:false, overVideo:true, width:60, height:60, type:'thumbs', dir:'h', 
					speed:17, inset:false, align:'bottom', arrows:true, margin:20, space:10
				}
			};
			var useParallax = ( $('body').hasClass('Home') || ( $('body').hasClass('Blog') && !$('body').hasClass('BlogLanding') ) ) ? true : false;
			$('.master-slider').each(function(){
				var masterslider = new MasterSlider();
				var sliderID = $(this).attr('id');
				if (device.type.toLowerCase() === 'mobile' && device.orientation.toLowerCase() === 'portrait') 
				{
					MSConfig.main.height = 1200;
					MSConfig.main.view = 'focus';
					MSConfig.timebar.color = 'rgba(204,204,204,.3)';
					MSConfig.thumblist.arrows = false;
					masterslider.setup(sliderID,MSConfig.main);
					masterslider.control('slideinfo',MSConfig.slideinfo);
					masterslider.control('timebar',MSConfig.timebar);
					// masterslider.control('thumblist',MSConfig.thumblist);
				}
				else
				{
					masterslider.setup(sliderID,MSConfig.main);
					masterslider.control('arrows');
					// slider.control('bullets');
					masterslider.control('slideinfo',MSConfig.slideinfo);
					masterslider.control('timebar',MSConfig.timebar);
					// masterslider.control('thumblist',MSConfig.thumblist);
					if (useParallax) {
						MSScrollParallax.setup(masterslider,50,80,true);
					}
				}
			});
		}
	},
	nav: {
		open:false,
		maincolContent:null,
		maincolSidebar:null,
		colheights:function() {
			var device = VMSite.util.Device();
			var maincolContent = $('.maincolContent');
			var maincolSidebar = $('.maincolSidebar');
			var $columnsInner = $('.content-left, .content-right');
			$('.maincolContent, .maincolSidebar, .content-left, .content-right').css({ height:'auto' });
			if (device.view.toLowerCase() !== 'mobile') {
				var columnsInnerHeight = Math.max.apply(Math, $columnsInner.map(function(){
					return $(this).height();
				}).get());
				$columnsInner.height(columnsInnerHeight);
			}
			maincolSidebar.height(Math.max(maincolContent.height(),maincolSidebar.height()));
		},
		init: function() {
			var $VMSite = $('#VMSite');
			$VMSite
				.on('click','.navbar.navbar-inverse button.navbar-toggle',function(e){
					e.preventDefault();
					$(this).blur();
					if (!VMSite.nav.open) {
						$VMSite.find('.row-offcanvas').addClass('active');
						$VMSite.find('.maincolSidebar').removeClass('hidden');
						VMSite.nav.open = true;
					} else {
						$VMSite.find('.row-offcanvas').removeClass('active');
						$VMSite.find('.maincolSidebar').addClass('hidden');
						VMSite.nav.open = false;
					}				
				})
				.on('keyup','input[name="sitesearch"]',function(e){
					if (e.which === 13 && _.trim($(this).val())) {
						$('.nav-search .sitesearch-submit[rel="'+$(this).attr('rel')+'"]').trigger('click');
					}
				})
				.on('click','.sitesearch-submit',function(e){
					e.preventDefault();
					$(this).blur();
					var field = $('.nav-search input[name="sitesearch"][rel="'+$(this).attr('rel')+'"]');
					var path = vmRootDir + 'index.cfm/view/search/term/'+field.val().replace(/\s/gi,'%20')+'/category/All%20Categories/'+( window.location.pathname.indexOf('vmNoCache/1') > -1 ? 'vmNoCache/1/' : '' );
					window.open(path,'_top');
				});
		},
		fixed: function() {
			// Initial fixed navbar switcher
			var navFixed = $('.navbar-fixed-top');
			$(window)
				.on('resize',function(){ })
				.on('scroll',function(){
					var pos = Math.round($(document).scrollTop());
					var switchpoint = 100;
					if ( (pos > switchpoint && navFixed.hasClass('hidden')) || (pos < switchpoint && !navFixed.hasClass('hidden')) ) {
						navFixed.toggleClass('hidden');
						if ($(document).innerWidth() > 767 && pos < switchpoint && $('#VMSite .row-offcanvas').hasClass('active')) {
							$('#VMSite .navbar-fixed-top button.navbar-toggle').trigger('click');
						}
					}
				});
		}
	},
	refer: {
		init: function() {
			$('body.Refer form').wrapInner('<div class="loading" style="position:relative;width:100%;"></div>');
			$('body.Refer').on('submit','form',function(e){
				e.preventDefault();
				var form = $(this);
				var formLoading = form.find('.loading');
				var formLabels = form.find('span[rel]');
				var formInputs = form.find('input[type="text"],textarea');
				var formErrors = form.find('.error');
				form.find('input[type="submit"]').blur();
				formErrors.removeClass('error');
				formLabels.each(function(){ $(this).text($(this).data('origText')); });
				formLoading.css({ opacity:'.2'});
				var loader = VMSite.util.Loader({ ele:form, type:'overlay', bgColor:'#000', bgAlpha:'0', color:'rgba(206,169,65,1)', size:'4', spinnerLeft:'50%', spinnerTop:'50%' });
				setTimeout(function() {
					$.post(vmSiteDir+'incs/ajaxCalls_v2dynamic.cfm?type=postRefer',form.serialize(),function(data){
						form.find('.alert').remove();
						var msgType = 'success';
						var msgText = '';
						var msgWait = 4000;
						if (data.success) {
							formInputs.val('');
							msgText = '<h4 style="margin-top:0;"><i class="fa fa-check"></i>&nbsp; Thank you - your submission was successful.</h4><p style="margin-bottom:0;">Your contact will recieve your referral via email, and you will receive a copy at the address you provided.</p>';
						} else {
							msgText = '<h4 style="margin-top:0;"><i class="fa fa-exclamation-triangle"></i>&nbsp; There were problems with your submission.</h4>';
							msgWait = 1000;
							msgType = 'danger';
							if (data.errormsg) {
								msgText += '<p>'+data.errormsg+'</p>';
							}
							if (!_.isEmpty(data.errStruct)) {
								 var arrErrKeys = [];
								 _.each(data.errStruct,function(val,key){
									form.find('span[rel="'+key+'"]').text(val).addClass('error');
									arrErrKeys.push(key);
								});
								msgText += '<p>See the fields in red below...</p>';
								$(formInputs.get().reverse()).each(function(){
									var thisName = $(this).attr('name');
									if (_.indexOf(arrErrKeys,thisName) > -1) {
										$(this).focus();
									}
								});
							}
						}
						formLoading.css({ opacity:'1' }).prepend('<div class="alert alert-'+msgType+'">'+msgText+'</div>');
						if (data.success) {
							setTimeout(function(){
								formLoading.find('.alert').slideUp(1000,function(){ $(this).remove(); });
							},msgWait);
							$('html,body').animate({ scrollTop:'100px' },500);
						}
						loader.remove();
					});
				}, 500);
			}).find('span[rel]').each(function(){
				$(this).data('origText',$(this).text());
			});
		}
	},
	typeahead: function() {
		var arrItems = VMSite.util.LocalStorage.get('typeahead.items');
		var arrStrs = [];
		_.each(arrItems,function(obj){
			arrStrs.push(obj.person + ' ' + obj.title + ( obj.related ? ' ' + obj.related.split(',').join(' ') : '' ));
		});
		$('[name="sitesearch"]').each(function(e){
			$(this)
				.on('keyup',function(e){ if (e.keyCode === 27) { $(this).val(''); } })
				.typeahead({
					source: arrStrs,
					items:10,
					autoSelect:false,
					highlighter: function(item) {
				        var b = arrStrs.indexOf(item);
				        var obj = arrItems[b];
				        var template = '';
				        template += '<span class="item">';
				        template += '<span class="img">';
				        template += '<img src="'+vmSiteDir+'images/pages/blank.gif" border="0" style="background-image:url(' + vmUploadDir + 'images/thumbsm_' + obj.img + ');" />';
				        template += '</span>';
				        template += '<span class="title">'+ obj.person + ': ' + obj.title + ( obj.related ? ' ('+obj.related.split(',').join(', ')+')' : '' ) + '</span>';
				        template += '</span>';
				        return template;
				    },
				    updater: function(item) {
						$(this).focus();
						var obj = arrItems[arrStrs.indexOf(item)];
						window.open('/index.cfm/page/'+obj.url+'/' + ( window.location.pathname.indexOf('vmNoCache/1') > -1 ? 'vmNoCache/1/' : '' ),'_top');
						return false;
						// var b = arrStrs.indexOf(item);
						// return updateSearch(arrItems[b],item);					
					}
				});
		});
	},
	util: {
		DeviceVars: {
			keyWin: 'VMSiteData',
			keyCookie: 'VMSiteUserDevice',
			urlFlag: 'VMSitelogactions',
			domIDMsg: 'VMSiteDeviceAgent'
		},
		Device: function() {
			var $util = VMSite.util;
			var $vars = VMSite.util.DeviceVars;
			window[$vars.keyWin] = (window[$vars.keyWin]) ? window[$vars.keyWin] : { deviceAgent: ( VMSite.util.LocalStorage.get($vars.keyCookie) ? VMSite.util.LocalStorage.get($vars.keyCookie) : 'desktop' ) };
			var devices = {
				Mobile: [0,40],
				Tablet: [40,64],
				Desktop: [64,90],
				HiRes: [90,120],
				SuperHiRes: [120,1000]
			};	
			var deviceKeys = [];
			for (var key in devices) {
			  if (devices.hasOwnProperty(key)) {
			    deviceKeys.push(key);
			  }
			}
			
			var obj = {};
			obj.devices = deviceKeys;
			obj.deviceAgent = window[$vars.keyWin].deviceAgent;
			obj.pixelRatio = (window.devicePixelRatio) ? window.devicePixelRatio : 1;
			obj.fontSize = parseFloat($('body').css('font-size'));
			obj.winWidth = $(window).width();
			obj.winHeight = $(window).height();
			obj.winWidthEms = obj.winWidth / obj.fontSize;
			obj.winHeightEms = obj.winHeight / obj.fontSize;
			obj.screenWidth = screen.width;
			obj.screenWidthEms = screen.width / obj.fontSize;
			obj.screenHeight = screen.height;
			obj.screenHeightEms = screen.height / obj.fontSize;
			obj.orientation = (obj.winWidthEms > obj.winHeightEms) ? 'landscape' : 'portrait';
			for (var type in devices) {
				if (obj.screenWidthEms >= devices[type][0] && obj.screenWidthEms < devices[type][1]) { obj.type = type; }
				if (obj.winWidthEms >= devices[type][0] && obj.winWidthEms < devices[type][1]) { obj.view = type; }
			}
			
			if (obj.deviceAgent === 'tablet') { 
				$('body').attr('data-deviceagent','tablet');
			} else if (obj.deviceAgent === 'mobile') {
				$('body').attr('data-deviceagent','mobile'); 
			} else if (obj.deviceAgent === 'desktop') {
				$('body').attr('data-deviceagent','desktop'); 
			}
	
			$('body').removeClass('mobile').removeClass('tablet').removeClass('desktop');
			if (obj.view === 'Tablet') { 
				$('body').addClass('tablet');
			} else if (obj.view === 'Mobile') {
				$('body').addClass('mobile'); 
			} else {
				$('body').addClass('desktop'); 
			}
	
			$('body').attr('data-deviceview',obj.view).attr('data-devicetype',obj.type);
			
			if (window.location.href.toLowerCase().indexOf($vars.urlFlag) > -1 && $('#'+$vars.domIDMsg).length === 0) {
				$('body').prepend('<div id="'+$vars.domIDMsg+'" style="background:yellow;padding:15px;border:1px red solid;text-align:center;font-weight:bold;">Request.UserDevice = '+window[$vars.keyWin].deviceAgent+'</div>');
			}
			
			return obj;
		},
		EmailCheck: function(email) {
			//Regex found here: http://emailregex.com/
			var emailRegex = /^[^\@\s]+\@[^\@\s\.]+(\.\w{2,}){1,}$/gi;
			var email = ( email || '' );
			email = $.trim(email);
			return (!emailRegex.test(email)) ? false : true;
		},
		Hash: function(str,len,randomize) {
			var str = ( str || VMSite.util.RandomCode() );
			var len = parseInt(( len || 12 ));
			var randomize = (typeof randomize === 'boolean') ? randomize : false;
			var chr = 0;
			for (var i in str) {
				chr += str.charCodeAt(i);
			}
			return (!randomize) ? (chr + Math.floor(chr * eval('1e'+(128+len)))).toString(36).toUpperCase().split('').splice(0,len).join('') : (chr + Math.floor(Math.random() * eval('1e'+(128+len)).toString()) + new Date().getMilliseconds()).toString(36).toUpperCase().split('').splice(0,len).join('');
		},
		Hex2Rgba:function(params) {
			// From http://stackoverflow.com/questions/21646738/convert-hex-to-rgba
			var paramsDefault = { hex:'#fff', alpha:'1', wrap: true, rgbOnly: false };
			var params = (params || paramsDefault);
			params = $.extend({},paramsDefault,params);
			var output = '';
			var c;
		    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(params.hex)) {
		        c = params.hex.substring(1).split('');
		        if (c.length == 3) { c = [ c[0], c[0], c[1], c[1], c[2], c[2] ]; }
		        c = '0x' + c.join('');
				output = [(c>>16)&255, (c>>8)&255, c&255].join(',');
				output = (params.rgbOnly) ? output : output+','+params.alpha;
				return (params.wrap) ? 'rgb' + ( params.rgbOnly ? '' : 'a' ) + '(' + output + ')' : output;
		    }
			return false;
		},
		Loader: function(obj) {
			var defaults = { ele:$('body'), type:'spinner', bgColor:'#fff', bgAlpha:'.85', color:'#666', size:'2', pad:'1em', inline:false, spinnerLeft:'50%', spinnerTop:'50%' };
			var obj = ($.extend({},defaults,obj) || defaults);
			var inline = (obj.inline) ? 'display:inline-block;' : '';
			switch (obj.type) {
				case 'overlay':
					var loader = '<div><i class="fa fa-spinner fa-pulse fa-'+obj.size+'x fa-fw"></i></div>';
					var loaderObj = $(loader);
					loaderObj.css({ position:'absolute', left:'0', top:'0', width:'100%', height:obj.ele.innerHeight()+'px', zIndex:99999, background: VMSite.util.Hex2Rgba({ hex: obj.bgColor, alpha: obj.bgAlpha }), color: obj.color });
					obj.ele.append(loaderObj);
					var spinner = loaderObj.find('i');
					spinner.css({ position:'absolute', display:'block', left:obj.spinnerLeft, top:obj.spinnerTop, margin:'-'+(spinner.outerWidth()/2)+'px 0px 0px -'+(spinner.outerHeight()/2)+'px' });
					return loaderObj;
					break;
				default:
					var loader = '<div style="'+inline+'padding:'+obj.pad+';color:'+obj.color+';"><i class="fa fa-spinner fa-pulse fa-'+obj.size+'x fa-fw"></i></div>';
					obj.ele.html(loader);
					return true;
			}
		},
		LocalStorage: {
			init: function() {
				VMSite.util.LocalStorage.settings = {
					lsObjKey:'VintageMemorabilia',
					lsObjInit: {
						timestamp: new Date().getTime(),
						cacheKey: window.VMSiteCacheKey
					}
				}
			},
			has: function(lsKey) { return this.do('has',lsKey); },
			get: function(lsKey) { return this.do('get',lsKey); },
			set: function(lsKey,lsVal) { return this.do('set',lsKey,lsVal); },
			del: function(lsKey) { return this.do('del',lsKey); },
			do: function(action,lsKey,lsVal) {
				var $util = VMSite.util;
				var $LocalStorage = VMSite.util.LocalStorage;
				var lsObjKey = $LocalStorage.settings.lsObjKey;
				if (lsObjKey !== '') {
					var action = (typeof action !== 'undefined') ? action : 'get';
					var lsKey = (typeof lsKey == 'string') ? lsKey : '';
					var lsVal = (typeof lsVal !== 'undefined') ? lsVal : null;
					var lsObjInit = $LocalStorage.settings.lsObjInit;
					if ($.totalStorage(lsObjKey) === null || action == 'init') { $.totalStorage(lsObjKey,lsObjInit); }
					var lsObj = $.extend(true,{},lsObjInit,$.totalStorage(lsObjKey));
					switch (action) {
						case 'set':
							if (lsKey !== '') { lsObj = _.set(lsObj,lsKey,lsVal); }
							break;
						case 'del':
							if (lsKey !== '') { _.unset(lsObj,lsKey); }
							break;
						case 'has':
							return (lsKey !== '') ? _.has(lsObj,lsKey) : false;
							break;
						default:
							if (lsKey !== '') {
								return (typeof _.get(lsObj,lsKey) !== 'undefined') ? _.get(lsObj,lsKey) : false;
							}
							break;
					}
					if (action !== 'get') { lsObj.timestamp = new Date().getTime(); }
					lsObj = $.extend(true,{},lsObjInit,lsObj);
					$.totalStorage(lsObjKey,lsObj);
					return lsObj;
				} else {
					return null;
				}
			}
		},
		TimeElapsed : function(obj) {
			var defaultObj = { time:0, unit:false, abbr:false };
			var obj = (obj || defaultObj);
			obj = $.extend({},defaultObj,obj);
			var date = new Date();
			time = Math.round(obj.time);
			var time = (time && time !== NaN) ? date.getTime() - parseInt(time) : date.getTime();
			var unit = obj.unit;
			var abbr = obj.abbr;
			var allowedUnits = { s: 1000 };
			allowedUnits.m = allowedUnits.s * 60;
			allowedUnits.h = allowedUnits.m * 60;
			allowedUnits.d = allowedUnits.h * 24;
			allowedUnits.w = allowedUnits.d * 7;
			allowedUnits.mo = allowedUnits.d * 31;
			allowedUnits.y = allowedUnits.d * 365;
			var labels = { s: 'second', m: 'minute', h: 'hour', d: 'day', w: 'week', mo: 'month', y: 'year' };
			var labelsAbbr = { s: 'sec', m: 'min', h: 'hr', d: 'day', w: 'wk', mo: 'mo', y: 'yr' };
			if (unit) {
				unit = (typeof allowedUnits[unit] !== 'undefined') ? unit : 'd';
				return Math.floor(time / allowedUnits[unit]);
			} else {
				var thisVal = 0;
				unit = 'y';
				arrUnits = ['s','m','h','d','w','mo','y'];
				arrLimits = [60,60,24,7,5,12,1000000000000];
				for (i=0; i < arrUnits.length; i++) {
					thisVal = Math.floor(time / allowedUnits[arrUnits[i]]);
					if (thisVal < arrLimits[i]) {
						unit = arrUnits[i];
						break;
					}
				}
				if (abbr) {
					var output = thisVal + ' '  + labelsAbbr[unit];
				} else {
					var output = thisVal + ' '  + labels[unit];
				}
				return (thisVal === 1) ? output : output + 's';
			}
		},
		RandomCode: function(len) {
			var len = ( len || 12 );
			var chars = '23456789ABCDEFHJKLMNPRTVWXYZ';
			var str = '';
			for (var i = 0; i < len; i++) {
				str += chars[_.random(0,chars.length-1)]; //ALT: return Math.floor(Math.random() * (max - min + 1)) + min;
			}
			return str;
		}
	}
};
// Initialize local storage
VMSite.util.LocalStorage.init();

/*
////////////////////////////////////
VM v2 - Initialize jQuery events on doc ready
///////////////////////////////////
*/
$.log = function(msg) { try { console.log('%s [%o]', msg, this); return this; } catch(err) { } }
$(function(){
	
	// Initialize VM component
	VMSite.init();

	/* FANCYBOX */
	$('a[data-fancybox-type="inline"]').fancybox({ maxWidth:1000, maxHeight:768 });
	$('a[data-fancybox-type="iframe"]').fancybox({
		maxWidth	: 1024,
		maxHeight	: 768,
		fitToView	: false,
		width		: '99%',
		height		: '99%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});

	if (VMSiteColorSwitch) {
		$('body').find('.colorSwitch.text, .colorSwitch.border').addClass(VMSiteColorSwitch);
	}
	
});

	
	
