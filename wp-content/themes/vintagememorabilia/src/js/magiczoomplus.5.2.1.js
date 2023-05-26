/*


   Magic Zoom Plus v5.2.1 
   Copyright 2016 Magic Toolbox
   Buy a license: https://www.magictoolbox.com/magiczoomplus/
   License agreement: https://www.magictoolbox.com/license/


*/

/*! 
 * Master Slider â€“ Responsive Touch Swipe Slider
 * Copyright Â© 2017 All Rights Reserved. 
 *
 * @author Averta [www.averta.net]
 * @version 2.51.0
 * @date Jan 2017
 */
window.averta = {},
function($) {
    function getVendorPrefix() {
        if ("result"in arguments.callee)
            return arguments.callee.result;
        var regex = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/
          , someScript = document.getElementsByTagName("script")[0];
        for (var prop in someScript.style)
            if (regex.test(prop))
                return arguments.callee.result = prop.match(regex)[0];
        return arguments.callee.result = "WebkitOpacity"in someScript.style ? "Webkit" : "KhtmlOpacity"in someScript.style ? "Khtml" : ""
    }
    function checkStyleValue(prop) {
        var b = document.body || document.documentElement
          , s = b.style
          , p = prop;
        if ("string" == typeof s[p])
            return !0;
        v = ["Moz", "Webkit", "Khtml", "O", "ms"],
        p = p.charAt(0).toUpperCase() + p.substr(1);
        for (var i = 0; i < v.length; i++)
            if ("string" == typeof s[v[i] + p])
                return !0;
        return !1
    }
    function supportsTransitions() {
        return checkStyleValue("transition")
    }
    function supportsTransforms() {
        return checkStyleValue("transform")
    }
    function supports3DTransforms() {
        if (!supportsTransforms())
            return !1;
        var has3d, el = document.createElement("i"), transforms = {
            WebkitTransform: "-webkit-transform",
            OTransform: "-o-transform",
            MSTransform: "-ms-transform",
            msTransform: "-ms-transform",
            MozTransform: "-moz-transform",
            Transform: "transform",
            transform: "transform"
        };
        el.style.display = "block",
        document.body.insertBefore(el, null);
        for (var t in transforms)
            void 0 !== el.style[t] && (el.style[t] = "translate3d(1px,1px,1px)",
            has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]));
        return document.body.removeChild(el),
        null != has3d && has3d.length > 0 && "none" !== has3d
    }
    window["package"] = function(name) {
        window[name] || (window[name] = {})
    }
    ;
    var extend = function(target, object) {
        for (var key in object)
            target[key] = object[key]
    };
    Function.prototype.extend = function(superclass) {
        "function" == typeof superclass.prototype.constructor ? (extend(this.prototype, superclass.prototype),
        this.prototype.constructor = this) : (this.prototype.extend(superclass),
        this.prototype.constructor = this)
    }
    ;
    var trans = {
        Moz: "-moz-",
        Webkit: "-webkit-",
        Khtml: "-khtml-",
        O: "-o-",
        ms: "-ms-",
        Icab: "-icab-"
    };
    window._mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    window._touch = "ontouchstart"in document,
    $(document).ready(function() {
        window._jcsspfx = getVendorPrefix(),
        window._csspfx = trans[window._jcsspfx],
        window._cssanim = supportsTransitions(),
        window._css3d = supports3DTransforms(),
        window._css2d = supportsTransforms()
    }),
    window.parseQueryString = function(url) {
        var queryString = {};
        return url.replace(new RegExp("([^?=&]+)(=([^&]*))?","g"), function($0, $1, $2, $3) {
            queryString[$1] = $3
        }),
        queryString
    }
    ;
    var fps60 = 50 / 3;
    if (window.requestAnimationFrame || (window.requestAnimationFrame = function() {
        return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
            window.setTimeout(callback, fps60)
        }
    }()),
    window.getComputedStyle || (window.getComputedStyle = function(el) {
        return this.el = el,
        this.getPropertyValue = function(prop) {
            var re = /(\-([a-z]){1})/g;
            return "float" == prop && (prop = "styleFloat"),
            re.test(prop) && (prop = prop.replace(re, function() {
                return arguments[2].toUpperCase()
            })),
            el.currentStyle[prop] ? el.currentStyle[prop] : null
        }
        ,
        el.currentStyle
    }
    ),
    Array.prototype.indexOf || (Array.prototype.indexOf = function(elt) {
        var len = this.length >>> 0
          , from = Number(arguments[1]) || 0;
        for (from = 0 > from ? Math.ceil(from) : Math.floor(from),
        0 > from && (from += len); len > from; from++)
            if (from in this && this[from] === elt)
                return from;
        return -1
    }
    ),
    window.isMSIE = function(version) {
        if (!$.browser.msie)
            return !1;
        if (!version)
            return !0;
        var ieVer = $.browser.version.slice(0, $.browser.version.indexOf("."));
        return "string" == typeof version ? eval(-1 !== version.indexOf("<") || -1 !== version.indexOf(">") ? ieVer + version : version + "==" + ieVer) : version == ieVer
    }
    ,
    $.removeDataAttrs = function($target, exclude) {
        var i, attrName, dataAttrsToDelete = [], dataAttrs = $target[0].attributes, dataAttrsLen = dataAttrs.length;
        for (exclude = exclude || [],
        i = 0; dataAttrsLen > i; i++)
            attrName = dataAttrs[i].name,
            "data-" === attrName.substring(0, 5) && -1 === exclude.indexOf(attrName) && dataAttrsToDelete.push(dataAttrs[i].name);
        $.each(dataAttrsToDelete, function(index, attrName) {
            $target.removeAttr(attrName)
        })
    }
    ,
    jQuery) {
        $.jqLoadFix = function() {
            if (this.complete) {
                var that = this;
                setTimeout(function() {
                    $(that).trigger("load")
                }, 1)
            }
        }
        ,
        jQuery.uaMatch = jQuery.uaMatch || function(ua) {
            ua = ua.toLowerCase();
            var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
            return {
                browser: match[1] || "",
                version: match[2] || "0"
            }
        }
        ,
        matched = jQuery.uaMatch(navigator.userAgent),
        browser = {},
        matched.browser && (browser[matched.browser] = !0,
        browser.version = matched.version),
        browser.chrome ? browser.webkit = !0 : browser.webkit && (browser.safari = !0);
        var isIE11 = !!navigator.userAgent.match(/Trident\/7\./);
        isIE11 && (browser.msie = "true",
        delete browser.mozilla),
        jQuery.browser = browser,
        $.fn.preloadImg = function(src, _event) {
            return this.each(function() {
                var $this = $(this)
                  , self = this
                  , img = new Image;
                img.onload = function(event) {
                    null == event && (event = {}),
                    $this.attr("src", src),
                    event.width = img.width,
                    event.height = img.height,
                    $this.data("width", img.width),
                    $this.data("height", img.height),
                    setTimeout(function() {
                        _event.call(self, event)
                    }, 50),
                    img = null
                }
                ,
                img.src = src
            }),
            this
        }
    }
}(jQuery),
function() {
    "use strict";
    averta.EventDispatcher = function() {
        this.listeners = {}
    }
    ,
    averta.EventDispatcher.extend = function(_proto) {
        var instance = new averta.EventDispatcher;
        for (var key in instance)
            "constructor" != key && (_proto[key] = averta.EventDispatcher.prototype[key])
    }
    ,
    averta.EventDispatcher.prototype = {
        constructor: averta.EventDispatcher,
        addEventListener: function(event, listener, ref) {
            this.listeners[event] || (this.listeners[event] = []),
            this.listeners[event].push({
                listener: listener,
                ref: ref
            })
        },
        removeEventListener: function(event, listener, ref) {
            if (this.listeners[event]) {
                for (var i = 0; i < this.listeners[event].length; ++i)
                    listener === this.listeners[event][i].listener && ref === this.listeners[event][i].ref && this.listeners[event].splice(i--, 1);
                0 === this.listeners[event].length && (this.listeners[event] = null)
            }
        },
        dispatchEvent: function(event) {
            if (event.target = this,
            this.listeners[event.type])
                for (var i = 0, l = this.listeners[event.type].length; l > i; ++i)
                    this.listeners[event.type][i].listener.call(this.listeners[event.type][i].ref, event)
        }
    }
}(),
function($) {
    "use strict";
    var isTouch = "ontouchstart"in document
      , isPointer = window.navigator.pointerEnabled
      , isMSPoiner = !isPointer && window.navigator.msPointerEnabled
      , usePointer = isPointer || isMSPoiner
      , ev_start = (isPointer ? "pointerdown " : "") + (isMSPoiner ? "MSPointerDown " : "") + (isTouch ? "touchstart " : "") + "mousedown"
      , ev_move = (isPointer ? "pointermove " : "") + (isMSPoiner ? "MSPointerMove " : "") + (isTouch ? "touchmove " : "") + "mousemove"
      , ev_end = (isPointer ? "pointerup " : "") + (isMSPoiner ? "MSPointerUp " : "") + (isTouch ? "touchend " : "") + "mouseup"
      , ev_cancel = (isPointer ? "pointercancel " : "") + (isMSPoiner ? "MSPointerCancel " : "") + "touchcancel";
    averta.TouchSwipe = function($element) {
        this.$element = $element,
        this.enabled = !0,
        $element.bind(ev_start, {
            target: this
        }, this.__touchStart),
        $element[0].swipe = this,
        this.onSwipe = null,
        this.swipeType = "horizontal",
        this.noSwipeSelector = "input, textarea, button, .no-swipe, .ms-no-swipe",
        this.lastStatus = {}
    }
    ;
    var p = averta.TouchSwipe.prototype;
    p.getDirection = function(new_x, new_y) {
        switch (this.swipeType) {
        case "horizontal":
            return new_x <= this.start_x ? "left" : "right";
        case "vertical":
            return new_y <= this.start_y ? "up" : "down";
        case "all":
            return Math.abs(new_x - this.start_x) > Math.abs(new_y - this.start_y) ? new_x <= this.start_x ? "left" : "right" : new_y <= this.start_y ? "up" : "down"
        }
    }
    ,
    p.priventDefultEvent = function(new_x, new_y) {
        var dx = Math.abs(new_x - this.start_x)
          , dy = Math.abs(new_y - this.start_y)
          , horiz = dx > dy;
        return "horizontal" === this.swipeType && horiz || "vertical" === this.swipeType && !horiz
    }
    ,
    p.createStatusObject = function(evt) {
        var temp_x, temp_y, status_data = {};
        return temp_x = this.lastStatus.distanceX || 0,
        temp_y = this.lastStatus.distanceY || 0,
        status_data.distanceX = evt.pageX - this.start_x,
        status_data.distanceY = evt.pageY - this.start_y,
        status_data.moveX = status_data.distanceX - temp_x,
        status_data.moveY = status_data.distanceY - temp_y,
        status_data.distance = parseInt(Math.sqrt(Math.pow(status_data.distanceX, 2) + Math.pow(status_data.distanceY, 2))),
        status_data.duration = (new Date).getTime() - this.start_time,
        status_data.direction = this.getDirection(evt.pageX, evt.pageY),
        status_data
    }
    ,
    p.__reset = function(event, jqevt) {
        this.reset = !1,
        this.lastStatus = {},
        this.start_time = (new Date).getTime();
        var point = this.__getPoint(event, jqevt);
        this.start_x = point.pageX,
        this.start_y = point.pageY
    }
    ,
    p.__touchStart = function(event) {
        var swipe = event.data.target
          , jqevt = event;
        if (swipe.enabled && !($(event.target).closest(swipe.noSwipeSelector, swipe.$element).length > 0)) {
            if (event = event.originalEvent,
            usePointer && $(this).css("-ms-touch-action", "horizontal" === swipe.swipeType ? "pan-y" : "pan-x"),
            !swipe.onSwipe)
                return void $.error("Swipe listener is undefined");
            if (!(swipe.touchStarted || isTouch && swipe.start_time && "mousedown" === event.type && (new Date).getTime() - swipe.start_time < 600)) {
                var point = swipe.__getPoint(event, jqevt);
                swipe.start_x = point.pageX,
                swipe.start_y = point.pageY,
                swipe.start_time = (new Date).getTime(),
                $(document).bind(ev_end, {
                    target: swipe
                }, swipe.__touchEnd).bind(ev_move, {
                    target: swipe
                }, swipe.__touchMove).bind(ev_cancel, {
                    target: swipe
                }, swipe.__touchCancel);
                var status = swipe.createStatusObject(point);
                status.phase = "start",
                swipe.onSwipe.call(null, status),
                isTouch || jqevt.preventDefault(),
                swipe.lastStatus = status,
                swipe.touchStarted = !0
            }
        }
    }
    ,
    p.__touchMove = function(event) {
        var swipe = event.data.target
          , jqevt = event;
        if (event = event.originalEvent,
        swipe.touchStarted) {
            clearTimeout(swipe.timo),
            swipe.timo = setTimeout(function() {
                swipe.__reset(event, jqevt)
            }, 60);
            var point = swipe.__getPoint(event, jqevt)
              , status = swipe.createStatusObject(point);
            swipe.priventDefultEvent(point.pageX, point.pageY) && jqevt.preventDefault(),
            status.phase = "move",
            swipe.lastStatus = status,
            swipe.onSwipe.call(null, status)
        }
    }
    ,
    p.__touchEnd = function(event) {
        var swipe = event.data.target
          , jqevt = event;
        event = event.originalEvent,
        clearTimeout(swipe.timo);
        var status = swipe.lastStatus;
        isTouch || jqevt.preventDefault(),
        status.phase = "end",
        swipe.touchStarted = !1,
        swipe.priventEvt = null,
        $(document).unbind(ev_end, swipe.__touchEnd).unbind(ev_move, swipe.__touchMove).unbind(ev_cancel, swipe.__touchCancel),
        status.speed = status.distance / status.duration,
        swipe.onSwipe.call(null, status)
    }
    ,
    p.__touchCancel = function(event) {
        var swipe = event.data.target;
        swipe.__touchEnd(event)
    }
    ,
    p.__getPoint = function(event, jqEvent) {
        return isTouch && -1 === event.type.indexOf("mouse") ? event.touches[0] : usePointer ? event : jqEvent
    }
    ,
    p.enable = function() {
        this.enabled || (this.enabled = !0)
    }
    ,
    p.disable = function() {
        this.enabled && (this.enabled = !1)
    }
}(jQuery),
function() {
    "use strict";
    averta.Ticker = function() {}
    ;
    var st = averta.Ticker
      , list = []
      , len = 0
      , __stopped = !0;
    st.add = function(listener, ref) {
        return list.push([listener, ref]),
        1 === list.length && st.start(),
        len = list.length
    }
    ,
    st.remove = function(listener, ref) {
        for (var i = 0, l = list.length; l > i; ++i)
            list[i] && list[i][0] === listener && list[i][1] === ref && list.splice(i, 1);
        len = list.length,
        0 === len && st.stop()
    }
    ,
    st.start = function() {
        __stopped && (__stopped = !1,
        __tick())
    }
    ,
    st.stop = function() {
        __stopped = !0
    }
    ;
    var __tick = function() {
        if (!st.__stopped) {
            for (var item, i = 0; i !== len; i++)
                item = list[i],
                item[0].call(item[1]);
            requestAnimationFrame(__tick)
        }
    }
}(),
function() {
    "use strict";
    Date.now || (Date.now = function() {
        return (new Date).getTime()
    }
    ),
    averta.Timer = function(delay, autoStart) {
        this.delay = delay,
        this.currentCount = 0,
        this.paused = !1,
        this.onTimer = null,
        this.refrence = null,
        autoStart && this.start()
    }
    ,
    averta.Timer.prototype = {
        constructor: averta.Timer,
        start: function() {
            this.paused = !1,
            this.lastTime = Date.now(),
            averta.Ticker.add(this.update, this)
        },
        stop: function() {
            this.paused = !0,
            averta.Ticker.remove(this.update, this)
        },
        reset: function() {
            this.currentCount = 0,
            this.paused = !0,
            this.lastTime = Date.now()
        },
        update: function() {
            this.paused || Date.now() - this.lastTime < this.delay || (this.currentCount++,
            this.lastTime = Date.now(),
            this.onTimer && this.onTimer.call(this.refrence, this.getTime()))
        },
        getTime: function() {
            return this.delay * this.currentCount
        }
    }
}(),
function() {
    "use strict";
    window.CSSTween = function(element, duration, delay, ease) {
        this.$element = element,
        this.duration = duration || 1e3,
        this.delay = delay || 0,
        this.ease = ease || "linear"
    }
    ;
    var p = CSSTween.prototype;
    p.to = function(callback, target) {
        return this.to_cb = callback,
        this.to_cb_target = target,
        this
    }
    ,
    p.from = function(callback, target) {
        return this.fr_cb = callback,
        this.fr_cb_target = target,
        this
    }
    ,
    p.onComplete = function(callback, target) {
        return this.oc_fb = callback,
        this.oc_fb_target = target,
        this
    }
    ,
    p.chain = function(csstween) {
        return this.chained_tween = csstween,
        this
    }
    ,
    p.reset = function() {
        clearTimeout(this.start_to),
        clearTimeout(this.end_to)
    }
    ,
    p.start = function() {
        var element = this.$element[0];
        clearTimeout(this.start_to),
        clearTimeout(this.end_to),
        this.fresh = !0,
        this.fr_cb && (element.style[window._jcsspfx + "TransitionDuration"] = "0ms",
        this.fr_cb.call(this.fr_cb_target));
        var that = this;
        return this.onTransComplete = function() {
            that.fresh && (that.reset(),
            element.style[window._jcsspfx + "TransitionDuration"] = "",
            element.style[window._jcsspfx + "TransitionProperty"] = "",
            element.style[window._jcsspfx + "TransitionTimingFunction"] = "",
            element.style[window._jcsspfx + "TransitionDelay"] = "",
            that.fresh = !1,
            that.chained_tween && that.chained_tween.start(),
            that.oc_fb && that.oc_fb.call(that.oc_fb_target))
        }
        ,
        this.start_to = setTimeout(function() {
            that.$element && (element.style[window._jcsspfx + "TransitionDuration"] = that.duration + "ms",
            element.style[window._jcsspfx + "TransitionProperty"] = that.transProperty || "all",
            element.style[window._jcsspfx + "TransitionDelay"] = that.delay > 0 ? that.delay + "ms" : "",
            element.style[window._jcsspfx + "TransitionTimingFunction"] = that.ease,
            that.to_cb && that.to_cb.call(that.to_cb_target),
            that.end_to = setTimeout(function() {
                that.onTransComplete()
            }, that.duration + (that.delay || 0)))
        }, 1),
        this
    }
}(),
function() {
    "use strict";
    function transPos(element, properties) {
        if (void 0 !== properties.x || void 0 !== properties.y)
            if (_cssanim) {
                var trans = window._jcsspfx + "Transform";
                void 0 !== properties.x && (properties[trans] = (properties[trans] || "") + " translateX(" + properties.x + "px)",
                delete properties.x),
                void 0 !== properties.y && (properties[trans] = (properties[trans] || "") + " translateY(" + properties.y + "px)",
                delete properties.y)
            } else {
                if (void 0 !== properties.x) {
                    var posx = "auto" !== element.css("right") ? "right" : "left";
                    properties[posx] = properties.x + "px",
                    delete properties.x
                }
                if (void 0 !== properties.y) {
                    var posy = "auto" !== element.css("bottom") ? "bottom" : "top";
                    properties[posy] = properties.y + "px",
                    delete properties.y
                }
            }
        return properties
    }
    var _cssanim = null;
    window.CTween = {},
    CTween.setPos = function(element, pos) {
        element.css(transPos(element, pos))
    }
    ,
    CTween.animate = function(element, duration, properties, options) {
        if (null == _cssanim && (_cssanim = window._cssanim),
        options = options || {},
        transPos(element, properties),
        _cssanim) {
            var tween = new CSSTween(element,duration,options.delay,EaseDic[options.ease]);
            return options.transProperty && (tween.transProperty = options.transProperty),
            tween.to(function() {
                element.css(properties)
            }),
            options.complete && tween.onComplete(options.complete, options.target),
            tween.start(),
            tween.stop = tween.reset,
            tween
        }
        var onCl;
        return options.delay && element.delay(options.delay),
        options.complete && (onCl = function() {
            options.complete.call(options.target)
        }
        ),
        element.stop(!0).animate(properties, duration, options.ease || "linear", onCl),
        element
    }
    ,
    CTween.fadeOut = function(target, duration, remove) {
        var options = {};
        remove === !0 ? options.complete = function() {
            target.remove()
        }
        : 2 === remove && (options.complete = function() {
            target.css("display", "none")
        }
        ),
        CTween.animate(target, duration || 1e3, {
            opacity: 0
        }, options)
    }
    ,
    CTween.fadeIn = function(target, duration, reset) {
        reset !== !1 && target.css("opacity", 0).css("display", ""),
        CTween.animate(target, duration || 1e3, {
            opacity: 1
        })
    }
}(),
function() {
    window.EaseDic = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        easeInCubic: "cubic-bezier(.55,.055,.675,.19)",
        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
        easeInOutExpo: "cubic-bezier(1,0,0,1)",
        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
        easeInSine: "cubic-bezier(.47,0,.745,.715)",
        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
    }
}(),
function() {
    "use strict";
    window.MSAligner = function(type, $container, $img) {
        this.$container = $container,
        this.$img = $img,
        this.type = type || "stretch",
        this.widthOnly = !1,
        this.heightOnly = !1
    }
    ;
    var p = MSAligner.prototype;
    p.init = function(w, h) {
        switch (this.baseWidth = w,
        this.baseHeight = h,
        this.imgRatio = w / h,
        this.imgRatio2 = h / w,
        this.type) {
        case "tile":
            this.$container.css("background-image", "url(" + this.$img.attr("src") + ")"),
            this.$img.remove();
            break;
        case "center":
            this.$container.css("background-image", "url(" + this.$img.attr("src") + ")"),
            this.$container.css({
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat"
            }),
            this.$img.remove();
            break;
        case "stretch":
            this.$img.css({
                width: "100%",
                height: "100%"
            });
            break;
        case "fill":
        case "fit":
            this.needAlign = !0,
            this.align()
        }
    }
    ,
    p.align = function() {
        if (this.needAlign) {
            var cont_w = this.$container[0].offsetWidth
              , cont_h = this.$container[0].offsetHeight
              , contRatio = cont_w / cont_h;
            "fill" == this.type ? this.imgRatio < contRatio ? (this.$img.width(cont_w),
            this.$img.height(cont_w * this.imgRatio2)) : (this.$img.height(cont_h),
            this.$img.width(cont_h * this.imgRatio)) : "fit" == this.type && (this.imgRatio < contRatio ? (this.$img.height(cont_h),
            this.$img.width(cont_h * this.imgRatio)) : (this.$img.width(cont_w),
            this.$img.height(cont_w * this.imgRatio2))),
            this.setMargin()
        }
    }
    ,
    p.setMargin = function() {
        var cont_w = this.$container[0].offsetWidth
          , cont_h = this.$container[0].offsetHeight;
        this.$img.css("margin-top", (cont_h - this.$img[0].offsetHeight) / 2 + "px"),
        this.$img.css("margin-left", (cont_w - this.$img[0].offsetWidth) / 2 + "px")
    }
}(),
/**
 * CSS pointer-events polyfill
 * Adds support for `pointer-events: none;` for browsers not supporting this property
 * Requires jQuery@~1.9
 *
 * @copyright Sebastian Langer 2016
 * @license MIT
 * @author Sebastian Langer <sl@scn.cx>
 */
function($) {
    var Polyfill = function(userOptions) {
        this.options = $.extend({}, Polyfill.defaultOptions, userOptions),
        this.isEnabled = !1,
        (this.options.forcePolyfill || !this.supportsPointerEvents()) && (this.registerEvents(),
        this.isEnabled = !0)
    };
    Polyfill.defaultOptions = {
        forcePolyfill: !1,
        selector: "*",
        listenOn: ["click", "dblclick", "mousedown", "mouseup"],
        pointerEventsNoneClass: null,
        pointerEventsAllClass: null,
        eventNamespace: "pointer-events-polyfill"
    },
    Polyfill.prototype.registerEvents = function() {
        $(document).on(this.getEventNames(), this.options.selector, $.proxy(this.onElementClick, this))
    }
    ,
    Polyfill.prototype.getEventNames = function() {
        var eventNamespace = this.options.eventNamespace ? "." + this.options.eventNamespace : "";
        return this.options.listenOn.join(eventNamespace + " ") + eventNamespace
    }
    ,
    Polyfill.prototype.supportsPointerEvents = function() {
        var style = document.createElement("a").style;
        return style.cssText = "pointer-events:auto",
        "auto" === style.pointerEvents
    }
    ,
    Polyfill.prototype.isClickThrough = function($el) {
        var elPointerEventsCss = $el.css("pointer-events");
        return 0 === $el.length || "all" === elPointerEventsCss || $el.is(":root") || $el.hasClass(this.options.pointerEventsAllClass) ? !1 : "none" === elPointerEventsCss || $el.hasClass(this.options.pointerEventsNoneClass) || this.isClickThrough($el.parent()) ? !0 : !1
    }
    ,
    Polyfill.prototype.onElementClick = function(e) {
        var $elOrg = $(e.target);
        if (!this.isClickThrough($elOrg))
            return !0;
        $elOrg.hide();
        var elBelow = document.elementFromPoint(e.clientX, e.clientY);
        return e.target = elBelow,
        $(elBelow).trigger(e),
        "A" === elBelow.tagName && (2 === e.which ? window.open(elBelow.getAttribute("href"), "_blank") : elBelow.click()),
        $elOrg.show(),
        !1
    }
    ,
    Polyfill.prototype.destroy = function() {
        $(document).off(this.getEventNames()),
        this.isEnabled = !1
    }
    ,
    window.pointerEventsPolyfill = function(userOptions) {
        return new Polyfill(userOptions)
    }
}(jQuery),
function() {
    "use strict";
    var _options = {
        bouncing: !0,
        snapping: !1,
        snapsize: null,
        friction: .05,
        outFriction: .05,
        outAcceleration: .09,
        minValidDist: .3,
        snappingMinSpeed: 2,
        paging: !1,
        endless: !1,
        maxSpeed: 160
    }
      , Controller = function(min, max, options) {
        if (null === max || null === min)
            throw new Error("Max and Min values are required.");
        this.options = options || {};
        for (var key in _options)
            key in this.options || (this.options[key] = _options[key]);
        this._max_value = max,
        this._min_value = min,
        this.value = min,
        this.end_loc = min,
        this.current_snap = this.getSnapNum(min),
        this.__extrStep = 0,
        this.__extraMove = 0,
        this.__animID = -1
    }
      , p = Controller.prototype;
    p.changeTo = function(value, animate, speed, snap_num, dispatch) {
        if (this.stopped = !1,
        this._internalStop(),
        value = this._checkLimits(value),
        speed = Math.abs(speed || 0),
        this.options.snapping && (snap_num = snap_num || this.getSnapNum(value),
        dispatch !== !1 && this._callsnapChange(snap_num),
        this.current_snap = snap_num),
        animate) {
            this.animating = !0;
            var self = this
              , active_id = ++self.__animID
              , amplitude = value - self.value
              , timeStep = 0
              , targetPosition = value
              , animFrict = 1 - self.options.friction
              , timeconst = animFrict + (speed - 20) * animFrict * 1.3 / self.options.maxSpeed
              , tick = function() {
                if (active_id === self.__animID) {
                    var dis = value - self.value;
                    if (!(Math.abs(dis) > self.options.minValidDist && self.animating))
                        return self.animating && (self.value = value,
                        self._callrenderer()),
                        self.animating = !1,
                        active_id !== self.__animID && (self.__animID = -1),
                        void self._callonComplete("anim");
                    window.requestAnimationFrame(tick),
                    self.value = targetPosition - amplitude * Math.exp(-++timeStep * timeconst),
                    self._callrenderer()
                }
            };
            return void tick()
        }
        this.value = value,
        this._callrenderer()
    }
    ,
    p.drag = function(move) {
        this.start_drag && (this.drag_start_loc = this.value,
        this.start_drag = !1),
        this.animating = !1,
        this._deceleration = !1,
        this.value -= move,
        !this.options.endless && (this.value > this._max_value || this.value < 0) ? this.options.bouncing ? (this.__isout = !0,
        this.value += .6 * move) : this.value = this.value > this._max_value ? this._max_value : 0 : !this.options.endless && this.options.bouncing && (this.__isout = !1),
        this._callrenderer()
    }
    ,
    p.push = function(speed) {
        if (this.stopped = !1,
        this.options.snapping && Math.abs(speed) <= this.options.snappingMinSpeed)
            return void this.cancel();
        if (this.__speed = speed,
        this.__startSpeed = speed,
        this.end_loc = this._calculateEnd(),
        this.options.snapping) {
            var snap_loc = this.getSnapNum(this.value)
              , end_snap = this.getSnapNum(this.end_loc);
            if (this.options.paging)
                return snap_loc = this.getSnapNum(this.drag_start_loc),
                this.__isout = !1,
                void (speed > 0 ? this.gotoSnap(snap_loc + 1, !0, speed) : this.gotoSnap(snap_loc - 1, !0, speed));
            if (snap_loc === end_snap)
                return void this.cancel();
            this._callsnapChange(end_snap),
            this.current_snap = end_snap
        }
        this.animating = !1,
        this.__needsSnap = this.options.endless || this.end_loc > this._min_value && this.end_loc < this._max_value,
        this.options.snapping && this.__needsSnap && (this.__extraMove = this._calculateExtraMove(this.end_loc)),
        this._startDecelaration()
    }
    ,
    p.bounce = function(speed) {
        this.animating || (this.stopped = !1,
        this.animating = !1,
        this.__speed = speed,
        this.__startSpeed = speed,
        this.end_loc = this._calculateEnd(),
        this._startDecelaration())
    }
    ,
    p.stop = function() {
        this.stopped = !0,
        this._internalStop()
    }
    ,
    p.cancel = function() {
        this.start_drag = !0,
        this.__isout ? (this.__speed = 4e-4,
        this._startDecelaration()) : this.options.snapping && this.gotoSnap(this.getSnapNum(this.value), !0)
    }
    ,
    p.renderCallback = function(listener, ref) {
        this.__renderHook = {
            fun: listener,
            ref: ref
        }
    }
    ,
    p.snappingCallback = function(listener, ref) {
        this.__snapHook = {
            fun: listener,
            ref: ref
        }
    }
    ,
    p.snapCompleteCallback = function(listener, ref) {
        this.__compHook = {
            fun: listener,
            ref: ref
        }
    }
    ,
    p.getSnapNum = function(value) {
        return Math.floor((value + this.options.snapsize / 2) / this.options.snapsize)
    }
    ,
    p.nextSnap = function() {
        this._internalStop();
        var curr_snap = this.getSnapNum(this.value);
        !this.options.endless && (curr_snap + 1) * this.options.snapsize > this._max_value ? (this.__speed = 8,
        this.__needsSnap = !1,
        this._startDecelaration()) : this.gotoSnap(curr_snap + 1, !0)
    }
    ,
    p.prevSnap = function() {
        this._internalStop();
        var curr_snap = this.getSnapNum(this.value);
        !this.options.endless && (curr_snap - 1) * this.options.snapsize < this._min_value ? (this.__speed = -8,
        this.__needsSnap = !1,
        this._startDecelaration()) : this.gotoSnap(curr_snap - 1, !0)
    }
    ,
    p.gotoSnap = function(snap_num, animate, speed) {
        this.changeTo(snap_num * this.options.snapsize, animate, speed, snap_num)
    }
    ,
    p.destroy = function() {
        this._internalStop(),
        this.__renderHook = null,
        this.__snapHook = null,
        this.__compHook = null
    }
    ,
    p._internalStop = function() {
        this.start_drag = !0,
        this.animating = !1,
        this._deceleration = !1,
        this.__extrStep = 0
    }
    ,
    p._calculateExtraMove = function(value) {
        var m = value % this.options.snapsize;
        return m < this.options.snapsize / 2 ? -m : this.options.snapsize - m
    }
    ,
    p._calculateEnd = function(step) {
        for (var temp_speed = this.__speed, temp_value = this.value, i = 0; Math.abs(temp_speed) > this.options.minValidDist; )
            temp_value += temp_speed,
            temp_speed *= this.options.friction,
            i++;
        return step ? i : temp_value
    }
    ,
    p._checkLimits = function(value) {
        return this.options.endless ? value : value < this._min_value ? this._min_value : value > this._max_value ? this._max_value : value
    }
    ,
    p._callrenderer = function() {
        this.__renderHook && this.__renderHook.fun.call(this.__renderHook.ref, this, this.value)
    }
    ,
    p._callsnapChange = function(targetSnap) {
        this.__snapHook && targetSnap !== this.current_snap && this.__snapHook.fun.call(this.__snapHook.ref, this, targetSnap, targetSnap - this.current_snap)
    }
    ,
    p._callonComplete = function(type) {
        this.__compHook && !this.stopped && this.__compHook.fun.call(this.__compHook.ref, this, this.current_snap, type)
    }
    ,
    p._computeDeceleration = function() {
        if (this.options.snapping && this.__needsSnap) {
            var xtr_move = (this.__startSpeed - this.__speed) / this.__startSpeed * this.__extraMove;
            this.value += this.__speed + xtr_move - this.__extrStep,
            this.__extrStep = xtr_move
        } else
            this.value += this.__speed;
        if (this.__speed *= this.options.friction,
        this.options.endless || this.options.bouncing || (this.value <= this._min_value ? (this.value = this._min_value,
        this.__speed = 0) : this.value >= this._max_value && (this.value = this._max_value,
        this.__speed = 0)),
        this._callrenderer(),
        !this.options.endless && this.options.bouncing) {
            var out_value = 0;
            this.value < this._min_value ? out_value = this._min_value - this.value : this.value > this._max_value && (out_value = this._max_value - this.value),
            this.__isout = Math.abs(out_value) >= this.options.minValidDist,
            this.__isout && (this.__speed * out_value <= 0 ? this.__speed += out_value * this.options.outFriction : this.__speed = out_value * this.options.outAcceleration)
        }
    }
    ,
    p._startDecelaration = function() {
        if (!this._deceleration) {
            this._deceleration = !0;
            var self = this
              , tick = function() {
                self._deceleration && (self._computeDeceleration(),
                Math.abs(self.__speed) > self.options.minValidDist || self.__isout ? window.requestAnimationFrame(tick) : (self._deceleration = !1,
                self.__isout = !1,
                self.value = self.__needsSnap && self.options.snapping && !self.options.paging ? self._checkLimits(self.end_loc + self.__extraMove) : Math.round(self.value),
                self._callrenderer(),
                self._callonComplete("decel")))
            };
            tick()
        }
    }
    ,
    window.Controller = Controller
}(),
function(window, document, $) {
    window.MSLayerController = function(slide) {
        this.slide = slide,
        this.slider = slide.slider,
        this.layers = [],
        this.layersCount = 0,
        this.preloadCount = 0,
        this.$layers = $("<div></div>").addClass("ms-slide-layers"),
        this.$staticLayers = $("<div></div>").addClass("ms-static-layers"),
        this.$fixedLayers = $("<div></div>").addClass("ms-fixed-layers"),
        this.$animLayers = $("<div></div>").addClass("ms-anim-layers")
    }
    ;
    var p = MSLayerController.prototype;
    p.addLayer = function(layer) {
        switch (layer.slide = this.slide,
        layer.controller = this,
        layer.$element.data("position")) {
        case "static":
            this.hasStaticLayer = !0,
            layer.$element.appendTo(this.$staticLayers);
            break;
        case "fixed":
            this.hasFixedLayer = !0,
            layer.$element.appendTo(this.$fixedLayers);
            break;
        default:
            layer.$element.appendTo(this.$animLayers)
        }
        layer.create(),
        this.layers.push(layer),
        this.layersCount++,
        layer.parallax && (this.hasParallaxLayer = !0),
        layer.needPreload && this.preloadCount++
    }
    ,
    p.create = function() {
        this.slide.$element.append(this.$layers),
        this.$layers.append(this.$animLayers),
        this.hasStaticLayer && this.$layers.append(this.$staticLayers),
        "center" == this.slider.options.layersMode && (this.$layers.css("max-width", this.slider.options.width + "px"),
        this.hasFixedLayer && this.$fixedLayers.css("max-width", this.slider.options.width + "px"))
    }
    ,
    p.loadLayers = function(callback) {
        if (this._onReadyCallback = callback,
        0 === this.preloadCount)
            return void this._onlayersReady();
        for (var i = 0; i !== this.layersCount; ++i)
            this.layers[i].needPreload && this.layers[i].loadImage()
    }
    ,
    p.prepareToShow = function() {
        this.hasParallaxLayer && this._enableParallaxEffect(),
        this.hasFixedLayer && this.$fixedLayers.prependTo(this.slide.view.$element)
    }
    ,
    p.showLayers = function() {
        this.layersHideTween && this.layersHideTween.stop(!0),
        this.fixedLayersHideTween && this.fixedLayersHideTween.stop(!0),
        this._resetLayers(),
        this.$animLayers.css("opacity", "").css("display", ""),
        this.hasFixedLayer && this.$fixedLayers.css("opacity", "").css("display", ""),
        this.ready && (this._initLayers(),
        this._locateLayers(),
        this._startLayers())
    }
    ,
    p.hideLayers = function() {
        if (this.slide.selected || this.slider.options.instantStartLayers) {
            var that = this;
            that.layersHideTween = CTween.animate(this.$animLayers, 500, {
                opacity: 0
            }, {
                complete: function() {
                    that._resetLayers()
                }
            }),
            this.hasFixedLayer && (this.fixedLayersHideTween = CTween.animate(this.$fixedLayers, 500, {
                opacity: 0
            }, {
                complete: function() {
                    that.$fixedLayers.detach()
                }
            })),
            this.hasParallaxLayer && this._disableParallaxEffect()
        }
    }
    ,
    p.animHideLayers = function() {
        if (this.ready)
            for (var i = 0; i !== this.layersCount; ++i)
                this.layers[i].hide()
    }
    ,
    p.setSize = function(width, height, hard) {
        if (this.ready && (this.slide.selected || this.hasStaticLayer) && (hard && this._initLayers(!0),
        this._locateLayers(!this.slide.selected)),
        this.slider.options.autoHeight && this.updateHeight(),
        "center" == this.slider.options.layersMode) {
            var left = Math.max(0, (width - this.slider.options.width) / 2) + "px";
            this.$layers[0].style.left = left,
            this.$fixedLayers[0].style.left = left
        }
    }
    ,
    p.updateHeight = function() {}
    ,
    p._onlayersReady = function() {
        this.ready = !0,
        this.hasStaticLayer && !this.slide.isSleeping && this._initLayers(!1, !0),
        this._onReadyCallback.call(this.slide)
    }
    ,
    p.onSlideSleep = function() {}
    ,
    p.onSlideWakeup = function() {
        this.hasStaticLayer && this.ready && this._initLayers(!1, !0)
    }
    ,
    p.getLayerById = function(layerId) {
        if (!layerId)
            return null;
        for (var i = 0; i < this.layersCount; ++i)
            if (this.layers[i].id === layerId)
                return this.layers[i];
        return null
    }
    ,
    p.destroy = function() {
        this.slide.selected && this.hasParallaxLayer && this._disableParallaxEffect();
        for (var i = 0; i < this.layersCount; ++i)
            this.layers[i].$element.stop(!0).remove();
        this.$layers.remove(),
        this.$staticLayers.remove(),
        this.$fixedLayers.remove(),
        this.$animLayers.remove()
    }
    ,
    p._startLayers = function() {
        for (var i = 0; i !== this.layersCount; ++i) {
            var layer = this.layers[i];
            layer.waitForAction || layer.start()
        }
    }
    ,
    p._initLayers = function(force, onlyStatics) {
        if (!(this.init && !force || this.slider.init_safemode)) {
            this.init = onlyStatics !== !0;
            var i = 0;
            if (onlyStatics && !this.staticsInit)
                for (this.staticsInit = !0; i !== this.layersCount; ++i)
                    this.layers[i].staticLayer && this.layers[i].init();
            else if (this.staticsInit && !force)
                for (; i !== this.layersCount; ++i)
                    this.layers[i].staticLayer || this.layers[i].init();
            else
                for (; i !== this.layersCount; ++i)
                    this.layers[i].init()
        }
    }
    ,
    p._locateLayers = function(onlyStatics) {
        var i = 0;
        if (onlyStatics)
            for (; i !== this.layersCount; ++i)
                this.layers[i].staticLayer && this.layers[i].locate();
        else
            for (; i !== this.layersCount; ++i)
                this.layers[i].locate()
    }
    ,
    p._resetLayers = function() {
        this.$animLayers.css("display", "none").css("opacity", 1);
        for (var i = 0; i !== this.layersCount; ++i)
            this.layers[i].reset()
    }
    ,
    p._applyParallax = function(x, y, fast) {
        for (var i = 0; i !== this.layersCount; ++i)
            null != this.layers[i].parallax && this.layers[i].moveParallax(x, y, fast)
    }
    ,
    p._enableParallaxEffect = function() {
        "swipe" === this.slider.options.parallaxMode ? this.slide.view.addEventListener(MSViewEvents.SCROLL, this._swipeParallaxMove, this) : this.slide.$element.on("mousemove", {
            that: this
        }, this._mouseParallaxMove).on("mouseleave", {
            that: this
        }, this._resetParalax)
    }
    ,
    p._disableParallaxEffect = function() {
        "swipe" === this.slider.options.parallaxMode ? this.slide.view.removeEventListener(MSViewEvents.SCROLL, this._swipeParallaxMove, this) : this.slide.$element.off("mousemove", this._mouseParallaxMove).off("mouseleave", this._resetParalax)
    }
    ,
    p._resetParalax = function(e) {
        var that = e.data.that;
        that._applyParallax(0, 0)
    }
    ,
    p._mouseParallaxMove = function(e) {
        var that = e.data.that
          , os = that.slide.$element.offset()
          , slider = that.slider;
        if ("mouse:y-only" !== slider.options.parallaxMode)
            var x = e.pageX - os.left - that.slide.__width / 2;
        else
            var x = 0;
        if ("mouse:x-only" !== slider.options.parallaxMode)
            var y = e.pageY - os.top - that.slide.__height / 2;
        else
            var y = 0;
        that._applyParallax(-x, -y)
    }
    ,
    p._swipeParallaxMove = function() {
        var value = this.slide.position - this.slide.view.__contPos;
        "v" === this.slider.options.dir ? this._applyParallax(0, value, !0) : this._applyParallax(value, 0, !0)
    }
}(window, document, jQuery),
function($, window) {
    "use strict";
    window.MSOverlayLayerController = function() {
        MSLayerController.apply(this, arguments)
    }
    ,
    MSOverlayLayerController.extend(MSLayerController);
    var p = MSOverlayLayerController.prototype
      , _super = MSLayerController.prototype;
    p.addLayer = function(layer) {
        var showOnSlides = layer.$element.data("show-on")
          , hideOnSlides = layer.$element.data("hide-on");
        hideOnSlides && (layer.hideOnSlides = hideOnSlides.replace(/\s+/g, "").split(",")),
        showOnSlides && (layer.showOnSlides = showOnSlides.replace(/\s+/g, "").split(",")),
        _super.addLayer.apply(this, arguments)
    }
    ,
    p.create = function() {
        _super.create.apply(this, arguments),
        this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.checkLayers.bind(this))
    }
    ,
    p.checkLayers = function() {
        if (this.ready)
            for (var i = 0; i !== this.layersCount; ++i) {
                var layer = this.layers[i];
                layer.waitForAction || (this._checkForShow(layer) ? layer.start() : layer.hide())
            }
    }
    ,
    p._enableParallaxEffect = function() {
        this.slider.view.$element.on("mousemove", {
            that: this
        }, this._mouseParallaxMove).on("mouseleave", {
            that: this
        }, this._resetParalax)
    }
    ,
    p._disableParallaxEffect = function() {
        this.slider.view.$element.off("mousemove", this._mouseParallaxMove).off("mouseleave", this._resetParalax)
    }
    ,
    p._startLayers = function() {
        for (var i = 0; i !== this.layersCount; ++i) {
            var layer = this.layers[i];
            this._checkForShow(layer) && !layer.waitForAction && layer.start()
        }
    }
    ,
    p._checkForShow = function(layer) {
        var slideId = this.slider.api.currentSlide.id
          , layerHideOn = layer.hideOnSlides
          , layerShowOn = layer.showOnSlides;
        return layerShowOn ? !!slideId && -1 !== layerShowOn.indexOf(slideId) : !slideId || !layerHideOn || layerHideOn.length && -1 === layerHideOn.indexOf(slideId)
    }
}(jQuery, window, document),
function($, window) {
    "use strict";
    window.MSOverlayLayers = function(slider) {
        this.slider = slider
    }
    ;
    var p = MSOverlayLayers.prototype;
    p.setupLayerController = function() {
        this.layerController = new MSOverlayLayerController(this),
        this.slider.api.addEventListener(MSSliderEvent.RESIZE, this.setSize.bind(this)),
        this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.setSize.bind(this)),
        this.setSize()
    }
    ,
    p.setSize = function() {
        this.__width = this.$element.width(),
        this.__height = this.$element.height(),
        this.layerController.setSize(this.__width, this.__height)
    }
    ,
    p.create = function() {
        this.layerController.create(),
        this.layerController.loadLayers(this._onLayersLoad),
        this.layerController.prepareToShow(),
        window.pointerEventsPolyfill && window.pointerEventsPolyfill({
            selector: "#" + this.slider.$element.attr("id") + " .ms-overlay-layers",
            forcePolyfill: !1
        })
    }
    ,
    p.getHeight = function() {
        return this.slider.api.currentSlide.getHeight()
    }
    ,
    p.destroy = function() {
        this.layerController.destroy()
    }
    ,
    p._onLayersLoad = function() {
        this.ready = !0,
        this.selected = !0,
        this.layersLoaded = !0,
        this.setSize(),
        this.layerController.showLayers()
    }
}(jQuery, window, document),
function($) {
    window.MSLayerEffects = {};
    var installed, _fade = {
        opacity: 0
    };
    MSLayerEffects.setup = function() {
        if (!installed) {
            installed = !0;
            var st = MSLayerEffects
              , transform_css = window._jcsspfx + "Transform"
              , transform_orig_css = window._jcsspfx + "TransformOrigin"
              , o = $.browser.opera;
            _2d = window._css2d && window._cssanim && !o,
            st.defaultValues = {
                left: 0,
                top: 0,
                opacity: isMSIE("<=9") ? 1 : "",
                right: 0,
                bottom: 0
            },
            st.defaultValues[transform_css] = "",
            st.rf = 1,
            st.presetEffParams = {
                random: "30|300",
                "long": 300,
                "short": 30,
                "false": !1,
                "true": !0,
                tl: "top left",
                bl: "bottom left",
                tr: "top right",
                br: "bottom right",
                rt: "top right",
                lb: "bottom left",
                lt: "top left",
                rb: "bottom right",
                t: "top",
                b: "bottom",
                r: "right",
                l: "left",
                c: "center"
            },
            st.fade = function() {
                return _fade
            }
            ,
            st.left = _2d ? function(dist, fade) {
                var r = fade === !1 ? {} : {
                    opacity: 0
                };
                return r[transform_css] = "translateX(" + -dist * st.rf + "px)",
                r
            }
            : function(dist, fade) {
                var r = fade === !1 ? {} : {
                    opacity: 0
                };
                return r.left = -dist * st.rf + "px",
                r
            }
            ,
            st.right = _2d ? function(dist, fade) {
                var r = fade === !1 ? {} : {
                    opacity: 0
                };
                return r[transform_css] = "translateX(" + dist * st.rf + "px)",
                r
            }
            : function(dist, fade) {
                var r = fade === !1 ? {} : {
                    opacity: 0
                };
                return r.left = dist * st.rf + "px",
                r
            }
            ,
            st.top = _2d ? function(dist, fade) {
                var r = fade === !1 ? {} : {
                    opacity: 0
                };
                return r[transform_css] = "translateY(" + -dist * st.rf + "px)",
                r
            }
            : function(dist, fade) {
                var r = fade === !1 ? {} : {
                    opacity: 0
                };
                return r.top = -dist * st.rf + "px",
                r
            }
            ,
            st.bottom = _2d ? function(dist, fade) {
                var r = fade === !1 ? {} : {
                    opacity: 0
                };
                return r[transform_css] = "translateY(" + dist * st.rf + "px)",
                r
            }
            : function(dist, fade) {
                var r = fade === !1 ? {} : {
                    opacity: 0
                };
                return r.top = dist * st.rf + "px",
                r
            }
            ,
            st.from = _2d ? function(leftdis, topdis, fade) {
                var r = fade === !1 ? {} : {
                    opacity: 0
                };
                return r[transform_css] = "translateX(" + leftdis * st.rf + "px) translateY(" + topdis * st.rf + "px)",
                r
            }
            : function(leftdis, topdis, fade) {
                var r = fade === !1 ? {} : {
                    opacity: 0
                };
                return r.top = topdis * st.rf + "px",
                r.left = leftdis * st.rf + "px",
                r
            }
            ,
            st.rotate = _2d ? function(deg, orig) {
                var r = {
                    opacity: 0
                };
                return r[transform_css] = " rotate(" + deg + "deg)",
                orig && (r[transform_orig_css] = orig),
                r
            }
            : function() {
                return _fade
            }
            ,
            st.rotateleft = _2d ? function(deg, dist, orig, fade) {
                var r = st.left(dist, fade);
                return r[transform_css] += " rotate(" + deg + "deg)",
                orig && (r[transform_orig_css] = orig),
                r
            }
            : function(deg, dist, orig, fade) {
                return st.left(dist, fade)
            }
            ,
            st.rotateright = _2d ? function(deg, dist, orig, fade) {
                var r = st.right(dist, fade);
                return r[transform_css] += " rotate(" + deg + "deg)",
                orig && (r[transform_orig_css] = orig),
                r
            }
            : function(deg, dist, orig, fade) {
                return st.right(dist, fade)
            }
            ,
            st.rotatetop = _2d ? function(deg, dist, orig, fade) {
                var r = st.top(dist, fade);
                return r[transform_css] += " rotate(" + deg + "deg)",
                orig && (r[transform_orig_css] = orig),
                r
            }
            : function(deg, dist, orig, fade) {
                return st.top(dist, fade)
            }
            ,
            st.rotatebottom = _2d ? function(deg, dist, orig, fade) {
                var r = st.bottom(dist, fade);
                return r[transform_css] += " rotate(" + deg + "deg)",
                orig && (r[transform_orig_css] = orig),
                r
            }
            : function(deg, dist, orig, fade) {
                return st.bottom(dist, fade)
            }
            ,
            st.rotatefrom = _2d ? function(deg, leftdis, topdis, orig, fade) {
                var r = st.from(leftdis, topdis, fade);
                return r[transform_css] += " rotate(" + deg + "deg)",
                orig && (r[transform_orig_css] = orig),
                r
            }
            : function(deg, leftdis, topdis, orig, fade) {
                return st.from(leftdis, topdis, fade)
            }
            ,
            st.skewleft = _2d ? function(deg, dist, fade) {
                var r = st.left(dist, fade);
                return r[transform_css] += " skewX(" + deg + "deg)",
                r
            }
            : function(deg, dist, fade) {
                return st.left(dist, fade)
            }
            ,
            st.skewright = _2d ? function(deg, dist, fade) {
                var r = st.right(dist, fade);
                return r[transform_css] += " skewX(" + -deg + "deg)",
                r
            }
            : function(deg, dist, fade) {
                return st.right(dist, fade)
            }
            ,
            st.skewtop = _2d ? function(deg, dist, fade) {
                var r = st.top(dist, fade);
                return r[transform_css] += " skewY(" + deg + "deg)",
                r
            }
            : function(deg, dist, fade) {
                return st.top(dist, fade)
            }
            ,
            st.skewbottom = _2d ? function(deg, dist, fade) {
                var r = st.bottom(dist, fade);
                return r[transform_css] += " skewY(" + -deg + "deg)",
                r
            }
            : function(deg, dist, fade) {
                return st.bottom(dist, fade)
            }
            ,
            st.scale = _2d ? function(x, y, orig, fade) {
                var r = fade === !1 ? {} : {
                    opacity: 0
                };
                return r[transform_css] = " scaleX(" + x + ") scaleY(" + y + ")",
                orig && (r[transform_orig_css] = orig),
                r
            }
            : function(x, y, orig, fade) {
                return fade === !1 ? {} : {
                    opacity: 0
                }
            }
            ,
            st.scaleleft = _2d ? function(x, y, dist, orig, fade) {
                var r = st.left(dist, fade);
                return r[transform_css] = " scaleX(" + x + ") scaleY(" + y + ")",
                orig && (r[transform_orig_css] = orig),
                r
            }
            : function(x, y, dist, orig, fade) {
                return st.left(dist, fade)
            }
            ,
            st.scaleright = _2d ? function(x, y, dist, orig, fade) {
                var r = st.right(dist, fade);
                return r[transform_css] = " scaleX(" + x + ") scaleY(" + y + ")",
                orig && (r[transform_orig_css] = orig),
                r
            }
            : function(x, y, dist, orig, fade) {
                return st.right(dist, fade)
            }
            ,
            st.scaletop = _2d ? function(x, y, dist, orig, fade) {
                var r = st.top(dist, fade);
                return r[transform_css] = " scaleX(" + x + ") scaleY(" + y + ")",
                orig && (r[transform_orig_css] = orig),
                r
            }
            : function(x, y, dist, orig, fade) {
                return st.top(dist, fade)
            }
            ,
            st.scalebottom = _2d ? function(x, y, dist, orig, fade) {
                var r = st.bottom(dist, fade);
                return r[transform_css] = " scaleX(" + x + ") scaleY(" + y + ")",
                orig && (r[transform_orig_css] = orig),
                r
            }
            : function(x, y, dist, orig, fade) {
                return st.bottom(dist, fade)
            }
            ,
            st.scalefrom = _2d ? function(x, y, leftdis, topdis, orig, fade) {
                var r = st.from(leftdis, topdis, fade);
                return r[transform_css] += " scaleX(" + x + ") scaleY(" + y + ")",
                orig && (r[transform_orig_css] = orig),
                r
            }
            : function(x, y, leftdis, topdis, orig, fade) {
                return st.from(leftdis, topdis, fade)
            }
            ,
            st.rotatescale = _2d ? function(deg, x, y, orig, fade) {
                var r = st.scale(x, y, orig, fade);
                return r[transform_css] += " rotate(" + deg + "deg)",
                orig && (r[transform_orig_css] = orig),
                r
            }
            : function(deg, x, y, orig, fade) {
                return st.scale(x, y, orig, fade)
            }
            ,
            st.front = window._css3d ? function(dist, fade) {
                var r = fade === !1 ? {} : {
                    opacity: 0
                };
                return r[transform_css] = "perspective(2000px) translate3d(0 , 0 ," + dist + "px ) rotate(0.001deg)",
                r
            }
            : function() {
                return _fade
            }
            ,
            st.back = window._css3d ? function(dist, fade) {
                var r = fade === !1 ? {} : {
                    opacity: 0
                };
                return r[transform_css] = "perspective(2000px) translate3d(0 , 0 ," + -dist + "px ) rotate(0.001deg)",
                r
            }
            : function() {
                return _fade
            }
            ,
            st.rotatefront = window._css3d ? function(deg, dist, orig, fade) {
                var r = fade === !1 ? {} : {
                    opacity: 0
                };
                return r[transform_css] = "perspective(2000px) translate3d(0 , 0 ," + dist + "px ) rotate(" + (deg || .001) + "deg)",
                orig && (r[transform_orig_css] = orig),
                r
            }
            : function() {
                return _fade
            }
            ,
            st.rotateback = window._css3d ? function(deg, dist, orig, fade) {
                var r = fade === !1 ? {} : {
                    opacity: 0
                };
                return r[transform_css] = "perspective(2000px) translate3d(0 , 0 ," + -dist + "px ) rotate(" + (deg || .001) + "deg)",
                orig && (r[transform_orig_css] = orig),
                r
            }
            : function() {
                return _fade
            }
            ,
            st.rotate3dleft = window._css3d ? function(x, y, z, dist, orig, fade) {
                var r = st.left(dist, fade);
                return r[transform_css] += (x ? " rotateX(" + x + "deg)" : " ") + (y ? " rotateY(" + y + "deg)" : "") + (z ? " rotateZ(" + z + "deg)" : ""),
                orig && (r[transform_orig_css] = orig),
                r
            }
            : function(x, y, z, dist, orig, fade) {
                return st.left(dist, fade)
            }
            ,
            st.rotate3dright = window._css3d ? function(x, y, z, dist, orig, fade) {
                var r = st.right(dist, fade);
                return r[transform_css] += (x ? " rotateX(" + x + "deg)" : " ") + (y ? " rotateY(" + y + "deg)" : "") + (z ? " rotateZ(" + z + "deg)" : ""),
                orig && (r[transform_orig_css] = orig),
                r
            }
            : function(x, y, z, dist, orig, fade) {
                return st.right(dist, fade)
            }
            ,
            st.rotate3dtop = window._css3d ? function(x, y, z, dist, orig, fade) {
                var r = st.top(dist, fade);
                return r[transform_css] += (x ? " rotateX(" + x + "deg)" : " ") + (y ? " rotateY(" + y + "deg)" : "") + (z ? " rotateZ(" + z + "deg)" : ""),
                orig && (r[transform_orig_css] = orig),
                r
            }
            : function(x, y, z, dist, orig, fade) {
                return st.top(dist, fade)
            }
            ,
            st.rotate3dbottom = window._css3d ? function(x, y, z, dist, orig, fade) {
                var r = st.bottom(dist, fade);
                return r[transform_css] += (x ? " rotateX(" + x + "deg)" : " ") + (y ? " rotateY(" + y + "deg)" : "") + (z ? " rotateZ(" + z + "deg)" : ""),
                orig && (r[transform_orig_css] = orig),
                r
            }
            : function(x, y, z, dist, orig, fade) {
                return st.bottom(dist, fade)
            }
            ,
            st.rotate3dfront = window._css3d ? function(x, y, z, dist, orig, fade) {
                var r = st.front(dist, fade);
                return r[transform_css] += (x ? " rotateX(" + x + "deg)" : " ") + (y ? " rotateY(" + y + "deg)" : "") + (z ? " rotateZ(" + z + "deg)" : ""),
                orig && (r[transform_orig_css] = orig),
                r
            }
            : function(x, y, z, dist, orig, fade) {
                return st.front(dist, fade)
            }
            ,
            st.rotate3dback = window._css3d ? function(x, y, z, dist, orig, fade) {
                var r = st.back(dist, fade);
                return r[transform_css] += (x ? " rotateX(" + x + "deg)" : " ") + (y ? " rotateY(" + y + "deg)" : "") + (z ? " rotateZ(" + z + "deg)" : ""),
                orig && (r[transform_orig_css] = orig),
                r
            }
            : function(x, y, z, dist, orig, fade) {
                return st.back(dist, fade)
            }
            ,
            st.t = window._css3d ? function(fade, tx, ty, tz, r, rx, ry, rz, scx, scy, skx, sky, ox, oy, oz) {
                var _r = fade === !1 ? {} : {
                    opacity: 0
                }
                  , transform = "perspective(2000px) ";
                "n" !== tx && (transform += "translateX(" + tx * st.rf + "px) "),
                "n" !== ty && (transform += "translateY(" + ty * st.rf + "px) "),
                "n" !== tz && (transform += "translateZ(" + tz * st.rf + "px) "),
                "n" !== r && (transform += "rotate(" + r + "deg) "),
                "n" !== rx && (transform += "rotateX(" + rx + "deg) "),
                "n" !== ry && (transform += "rotateY(" + ry + "deg) "),
                "n" !== rz && (transform += "rotateZ(" + rz + "deg) "),
                "n" !== skx && (transform += "skewX(" + skx + "deg) "),
                "n" !== sky && (transform += "skewY(" + sky + "deg) "),
                "n" !== scx && (transform += "scaleX(" + scx + ") "),
                "n" !== scy && (transform += "scaleY(" + scy + ")"),
                _r[transform_css] = transform;
                var trans_origin = "";
                return trans_origin += "n" !== ox ? ox + "% " : "50% ",
                trans_origin += "n" !== oy ? oy + "% " : "50% ",
                trans_origin += "n" !== oz ? oz + "px" : "",
                _r[transform_orig_css] = trans_origin,
                _r
            }
            : function(fade, tx, ty, tz, r) {
                var r = fade === !1 ? {} : {
                    opacity: 0
                };
                return "n" !== tx && (r.left = tx * st.rf + "px"),
                "n" !== ty && (r.top = ty * st.rf + "px"),
                r
            }
        }
    }
}(jQuery),
function($) {
    window.MSLayerElement = function() {
        this.start_anim = {
            name: "fade",
            duration: 1e3,
            ease: "linear",
            delay: 0
        },
        this.end_anim = {
            duration: 1e3,
            ease: "linear"
        },
        this.type = "text",
        this.resizable = !0,
        this.minWidth = -1,
        this.isVisible = !0,
        this.__cssConfig = ["margin-top", "padding-top", "margin-bottom", "padding-left", "margin-right", "padding-right", "margin-left", "padding-bottom", "font-size", "line-height", "width", "left", "right", "top", "bottom"],
        this.baseStyle = {}
    }
    ;
    var p = MSLayerElement.prototype;
    p.setStartAnim = function(anim) {
        $.extend(this.start_anim, anim),
        $.extend(this.start_anim, this._parseEff(this.start_anim.name)),
        this.$element.css("visibility", "hidden")
    }
    ,
    p.setEndAnim = function(anim) {
        $.extend(this.end_anim, anim)
    }
    ,
    p.create = function() {
        if (this.$element.css("display", "none"),
        this.resizable = this.$element.data("resize") !== !1,
        this.fixed = this.$element.data("fixed") === !0,
        void 0 !== this.$element.data("widthlimit") && (this.minWidth = this.$element.data("widthlimit")),
        this.end_anim.name || (this.end_anim.name = this.start_anim.name),
        this.end_anim.time && (this.autoHide = !0),
        this.staticLayer = "static" === this.$element.data("position"),
        this.fixedLayer = "fixed" === this.$element.data("position"),
        this.layersCont = this.controller.$layers,
        this.staticLayer && this.$element.css("display", "").css("visibility", ""),
        void 0 !== this.$element.data("action")) {
            var slideController = this.slide.slider.slideController;
            this.$element.on(this.$element.data("action-event") || "click", function(event) {
                slideController.runAction($(this).data("action")),
                event.preventDefault()
            }).addClass("ms-action-layer")
        }
        $.extend(this.end_anim, this._parseEff(this.end_anim.name)),
        this.slider = this.slide.slider,
        this.masked && (this.$mask = $("<div></div>").addClass("ms-layer-mask"),
        this.link ? (this.link.wrap(this.$mask),
        this.$mask = this.link.parent()) : (this.$element.wrap(this.$mask),
        this.$mask = this.$element.parent()),
        this.maskWidth && this.$mask.width(this.maskWidth),
        this.maskHeight && (this.$mask.height(this.maskHeight),
        -1 === this.__cssConfig.indexOf("height") && this.__cssConfig.push("height")));
        var layerOrigin = this.layerOrigin = this.$element.data("origin");
        if (layerOrigin) {
            var vOrigin = layerOrigin.charAt(0)
              , hOrigin = layerOrigin.charAt(1)
              , offsetX = this.$element.data("offset-x")
              , offsetY = this.$element.data("offset-y")
              , layerEle = this.masked ? this.$mask[0] : this.$element[0];
            switch (void 0 === offsetY && (offsetY = 0),
            vOrigin) {
            case "t":
                layerEle.style.top = offsetY + "px";
                break;
            case "b":
                layerEle.style.bottom = offsetY + "px";
                break;
            case "m":
                layerEle.style.top = offsetY + "px",
                this.middleAlign = !0
            }
            switch (void 0 === offsetX && (offsetX = 0),
            hOrigin) {
            case "l":
                layerEle.style.left = offsetX + "px";
                break;
            case "r":
                layerEle.style.right = offsetX + "px";
                break;
            case "c":
                layerEle.style.left = offsetX + "px",
                this.centerAlign = !0
            }
        }
        this.parallax = this.$element.data("parallax"),
        null != this.parallax && (this.parallax /= 100,
        this.$parallaxElement = $("<div></div>").addClass("ms-parallax-layer"),
        this.masked ? (this.$mask.wrap(this.$parallaxElement),
        this.$parallaxElement = this.$mask.parent()) : this.link ? (this.link.wrap(this.$parallaxElement),
        this.$parallaxElement = this.link.parent()) : (this.$element.wrap(this.$parallaxElement),
        this.$parallaxElement = this.$element.parent()),
        this._lastParaX = 0,
        this._lastParaY = 0,
        this._paraX = 0,
        this._paraY = 0,
        this.alignedToBot = this.layerOrigin && -1 !== this.layerOrigin.indexOf("b"),
        this.alignedToBot && this.$parallaxElement.css("bottom", 0),
        this.parallaxRender = window._css3d ? this._parallaxCSS3DRenderer : window._css2d ? this._parallaxCSS2DRenderer : this._parallax2DRenderer,
        "swipe" !== this.slider.options.parallaxMode && averta.Ticker.add(this.parallaxRender, this)),
        $.removeDataAttrs(this.$element, ["data-src"])
    }
    ,
    p.init = function() {
        this.initialized = !0;
        var value;
        this.$element.css("visibility", "");
        for (var i = 0, l = this.__cssConfig.length; l > i; i++) {
            var key = this.__cssConfig[i];
            if (this._isPosition(key) && this.masked)
                value = this.$mask.css(key);
            else if ("text" !== this.type || "width" !== key || this.masked || this.maskWidth) {
                value = this.$element.css(key);
                var isSize = "width" === key || "height" === key;
                isSize && this.masked && (this.maskWidth && "width" === key ? value = this.maskWidth + "px" : this.maskHeight && "height" === key && (value = this.maskHeight + "px")),
                isSize && "0px" === value && (value = this.$element.data(key) + "px")
            } else
                value = this.$element[0].style.width;
            this.layerOrigin && ("top" === key && -1 === this.layerOrigin.indexOf("t") && -1 === this.layerOrigin.indexOf("m") || "bottom" === key && -1 === this.layerOrigin.indexOf("b") || "left" === key && -1 === this.layerOrigin.indexOf("l") && -1 === this.layerOrigin.indexOf("c") || "right" === key && -1 === this.layerOrigin.indexOf("r")) || "auto" != value && "" != value && "normal" != value && (this.baseStyle[key] = parseInt(value))
        }
        this.middleAlign && (this.baseHeight = this.$element.outerHeight(!1)),
        this.centerAlign && (this.baseWidth = this.$element.outerWidth(!1))
    }
    ,
    p.locate = function() {
        if (this.slide.ready) {
            var factor, isPosition, isSize, width = parseFloat(this.layersCont.css("width")), height = parseFloat(this.layersCont.css("height"));
            !this.staticLayer && "none" === this.$element.css("display") && this.isVisible && this.$element.css("display", "").css("visibility", "hidden"),
            this.staticLayer && this.$element.addClass("ms-hover-active"),
            factor = this.resizeFactor = width / this.slide.slider.options.width;
            var $layerEle = this.masked ? this.$mask : this.$element;
            for (var key in this.baseStyle)
                isPosition = this._isPosition(key),
                isSize = "width" === key || "height" === key,
                factor = this.fixed && isPosition ? 1 : this.resizeFactor,
                (this.resizable || isPosition) && ("top" === key && this.middleAlign ? ($layerEle[0].style.top = "0px",
                this.baseHeight = $layerEle.outerHeight(!1),
                $layerEle[0].style.top = this.baseStyle.top * factor + (height - this.baseHeight) / 2 + "px") : "left" === key && this.centerAlign ? ($layerEle[0].style.left = "0px",
                this.baseWidth = $layerEle.outerWidth(!1),
                $layerEle[0].style.left = this.baseStyle.left * factor + (width - this.baseWidth) / 2 + "px") : isPosition && this.masked ? $layerEle[0].style[key] = this.baseStyle[key] * factor + "px" : isSize && ("width" === key && this.maskWidth || "height" === key && this.maskHeight) ? $layerEle[0].style[key] = this.baseStyle[key] * factor + "px" : this.$element.css(key, this.baseStyle[key] * factor + "px"));
            this.visible(this.minWidth < width)
        }
    }
    ,
    p.start = function() {
        if (!this.isShowing && !this.staticLayer) {
            this.isShowing = !0,
            this.$element.removeClass("ms-hover-active");
            var key, base;
            MSLayerEffects.rf = this.resizeFactor;
            var effect_css = MSLayerEffects[this.start_anim.eff_name].apply(null, this._parseEffParams(this.start_anim.eff_params))
              , start_css_eff = {};
            for (key in effect_css)
                this._checkPosKey(key, effect_css) || (null != MSLayerEffects.defaultValues[key] && (start_css_eff[key] = MSLayerEffects.defaultValues[key]),
                key in this.baseStyle && (base = this.baseStyle[key],
                this.middleAlign && "top" === key && (base += (parseInt(this.layersCont.height()) - this.$element.outerHeight(!1)) / 2),
                this.centerAlign && "left" === key && (base += (parseInt(this.layersCont.width()) - this.$element.outerWidth(!1)) / 2),
                effect_css[key] = base + parseFloat(effect_css[key]) + "px",
                start_css_eff[key] = base + "px"),
                this.$element.css(key, effect_css[key]));
            var that = this;
            clearTimeout(this.to),
            clearTimeout(this.clHide),
            this.to = setTimeout(function() {
                that.$element.css("visibility", ""),
                that._playAnimation(that.start_anim, start_css_eff)
            }, that.start_anim.delay || .01),
            this.clTo = setTimeout(function() {
                that.show_cl = !0,
                that.$element.addClass("ms-hover-active")
            }, (this.start_anim.delay || .01) + this.start_anim.duration + 1),
            this.autoHide && (clearTimeout(this.hto),
            this.hto = setTimeout(function() {
                that.hide()
            }, that.end_anim.time))
        }
    }
    ,
    p.hide = function() {
        if (!this.staticLayer) {
            this.$element.removeClass("ms-hover-active"),
            this.isShowing = !1;
            var effect_css = MSLayerEffects[this.end_anim.eff_name].apply(null, this._parseEffParams(this.end_anim.eff_params));
            for (key in effect_css)
                this._checkPosKey(key, effect_css) || (key === window._jcsspfx + "TransformOrigin" && this.$element.css(key, effect_css[key]),
                key in this.baseStyle && (effect_css[key] = this.baseStyle[key] + parseFloat(effect_css[key]) + "px"));
            this._playAnimation(this.end_anim, effect_css),
            clearTimeout(this.clHide),
            0 === effect_css.opacity && (this.clHide = setTimeout(function() {
                this.$element.css("visibility", "hidden")
            }
            .bind(this), this.end_anim.duration + 1)),
            clearTimeout(this.to),
            clearTimeout(this.hto),
            clearTimeout(this.clTo)
        }
    }
    ,
    p.reset = function() {
        this.staticLayer || (this.isShowing = !1,
        this.$element[0].style.display = "none",
        this.$element.css("opacity", ""),
        this.$element[0].style.transitionDuration = "",
        this.show_tween && this.show_tween.stop(!0),
        clearTimeout(this.to),
        clearTimeout(this.hto))
    }
    ,
    p.destroy = function() {
        this.reset(),
        this.$element.remove()
    }
    ,
    p.visible = function(value) {
        this.isVisible != value && (this.isVisible = value,
        this.$element.css("display", value ? "" : "none"))
    }
    ,
    p.moveParallax = function(x, y, fast) {
        this._paraX = x,
        this._paraY = y,
        fast && (this._lastParaX = x,
        this._lastParaY = y,
        this.parallaxRender())
    }
    ,
    p._playAnimation = function(animation, css) {
        var options = {};
        animation.ease && (options.ease = animation.ease),
        options.transProperty = window._csspfx + "transform,opacity",
        this.show_tween && this.show_tween.stop(!0),
        this.show_tween = CTween.animate(this.$element, animation.duration, css, options)
    }
    ,
    p._randomParam = function(value) {
        var min = Number(value.slice(0, value.indexOf("|")))
          , max = Number(value.slice(value.indexOf("|") + 1));
        return min + Math.random() * (max - min)
    }
    ,
    p._parseEff = function(eff_name) {
        var eff_params = [];
        if (-1 !== eff_name.indexOf("(")) {
            var value, temp = eff_name.slice(0, eff_name.indexOf("(")).toLowerCase();
            eff_params = eff_name.slice(eff_name.indexOf("(") + 1, -1).replace(/\"|\'|\s/g, "").split(","),
            eff_name = temp;
            for (var i = 0, l = eff_params.length; l > i; ++i)
                value = eff_params[i],
                value in MSLayerEffects.presetEffParams && (value = MSLayerEffects.presetEffParams[value]),
                eff_params[i] = value
        }
        return {
            eff_name: eff_name,
            eff_params: eff_params
        }
    }
    ,
    p._parseEffParams = function(params) {
        for (var eff_params = [], i = 0, l = params.length; l > i; ++i) {
            var value = params[i];
            "string" == typeof value && -1 !== value.indexOf("|") && (value = this._randomParam(value)),
            eff_params[i] = value
        }
        return eff_params
    }
    ,
    p._checkPosKey = function(key, style) {
        return "left" === key && !(key in this.baseStyle) && "right"in this.baseStyle ? (style.right = -parseInt(style.left) + "px",
        delete style.left,
        !0) : "top" === key && !(key in this.baseStyle) && "bottom"in this.baseStyle ? (style.bottom = -parseInt(style.top) + "px",
        delete style.top,
        !0) : !1
    }
    ,
    p._isPosition = function(key) {
        return "top" === key || "left" === key || "bottom" === key || "right" === key
    }
    ,
    p._parallaxCalc = function() {
        var x_def = this._paraX - this._lastParaX
          , y_def = this._paraY - this._lastParaY;
        this._lastParaX += x_def / 12,
        this._lastParaY += y_def / 12,
        Math.abs(x_def) < .019 && (this._lastParaX = this._paraX),
        Math.abs(y_def) < .019 && (this._lastParaY = this._paraY)
    }
    ,
    p._parallaxCSS3DRenderer = function() {
        this._parallaxCalc(),
        this.$parallaxElement[0].style[window._jcsspfx + "Transform"] = "translateX(" + this._lastParaX * this.parallax + "px) translateY(" + this._lastParaY * this.parallax + "px) translateZ(0)"
    }
    ,
    p._parallaxCSS2DRenderer = function() {
        this._parallaxCalc(),
        this.$parallaxElement[0].style[window._jcsspfx + "Transform"] = "translateX(" + this._lastParaX * this.parallax + "px) translateY(" + this._lastParaY * this.parallax + "px)"
    }
    ,
    p._parallax2DRenderer = function() {
        this._parallaxCalc(),
        this.alignedToBot ? this.$parallaxElement[0].style.bottom = this._lastParaY * this.parallax + "px" : this.$parallaxElement[0].style.top = this._lastParaY * this.parallax + "px",
        this.$parallaxElement[0].style.left = this._lastParaX * this.parallax + "px"
    }
}(jQuery),
function($) {
    window.MSImageLayerElement = function() {
        MSLayerElement.call(this),
        this.needPreload = !0,
        this.__cssConfig = ["width", "height", "margin-top", "padding-top", "margin-bottom", "padding-left", "margin-right", "padding-right", "margin-left", "padding-bottom", "left", "right", "top", "bottom"],
        this.type = "image"
    }
    ,
    MSImageLayerElement.extend(MSLayerElement);
    var p = MSImageLayerElement.prototype
      , _super = MSLayerElement.prototype;
    p.create = function() {
        if (this.link) {
            var p = this.$element.parent();
            p.append(this.link),
            this.link.append(this.$element),
            this.link.removeClass("ms-layer"),
            this.$element.addClass("ms-layer"),
            p = null
        }
        if (_super.create.call(this),
        void 0 != this.$element.data("src"))
            this.img_src = this.$element.data("src"),
            this.$element.removeAttr("data-src");
        else {
            var that = this;
            this.$element.on("load", function() {
                that.controller.preloadCount--,
                0 === that.controller.preloadCount && that.controller._onlayersReady()
            }).each($.jqLoadFix)
        }
        $.browser.msie && this.$element.on("dragstart", function(event) {
            event.preventDefault()
        })
    }
    ,
    p.loadImage = function() {
        var that = this;
        this.$element.preloadImg(this.img_src, function() {
            that.controller.preloadCount--,
            0 === that.controller.preloadCount && that.controller._onlayersReady()
        })
    }
}(jQuery),
function($) {
    window.MSVideoLayerElement = function() {
        MSLayerElement.call(this),
        this.__cssConfig.push("height"),
        this.type = "video"
    }
    ,
    MSVideoLayerElement.extend(MSLayerElement);
    var p = MSVideoLayerElement.prototype
      , _super = MSLayerElement.prototype;
    p.__playVideo = function() {
        this.img && CTween.fadeOut(this.img, 500, 2),
        CTween.fadeOut(this.video_btn, 500, 2),
        this.video_frame.attr("src", "about:blank").css("display", "block"),
        -1 == this.video_url.indexOf("?") && (this.video_url += "?"),
        this.video_frame.attr("src", this.video_url + "&autoplay=1")
    }
    ,
    p.start = function() {
        _super.start.call(this),
        this.$element.data("autoplay") && this.__playVideo()
    }
    ,
    p.reset = function() {
        return _super.reset.call(this),
        (this.needPreload || this.$element.data("btn")) && (this.video_btn.css("opacity", 1).css("display", "block"),
        this.video_frame.attr("src", "about:blank").css("display", "none")),
        this.needPreload ? void this.img.css("opacity", 1).css("display", "block") : void this.video_frame.attr("src", this.video_url)
    }
    ,
    p.create = function() {
        _super.create.call(this),
        this.video_frame = this.$element.find("iframe").css({
            width: "100%",
            height: "100%"
        }),
        this.video_url = this.video_frame.attr("src");
        var has_img = 0 != this.$element.has("img").length;
        if (has_img || this.$element.data("btn")) {
            this.video_frame.attr("src", "about:blank").css("display", "none");
            var that = this;
            if (this.video_btn = $("<div></div>").appendTo(this.$element).addClass("ms-video-btn").click(function() {
                that.__playVideo()
            }),
            has_img) {
                if (this.needPreload = !0,
                this.img = this.$element.find("img:first").addClass("ms-video-img"),
                void 0 !== this.img.data("src"))
                    this.img_src = this.img.data("src"),
                    this.img.removeAttr("data-src");
                else {
                    var that = this;
                    this.img.attr("src", this.img_src).on("load", function() {
                        that.controller.preloadCount--,
                        0 === that.controller.preloadCount && that.controller._onlayersReady()
                    }).each($.jqLoadFix)
                }
                $.browser.msie && this.img.on("dragstart", function(event) {
                    event.preventDefault()
                })
            }
        }
    }
    ,
    p.loadImage = function() {
        var that = this;
        this.img.preloadImg(this.img_src, function() {
            that.controller.preloadCount--,
            0 === that.controller.preloadCount && that.controller._onlayersReady()
        })
    }
}(jQuery),
function($) {
    "use strict";
    window.MSHotspotLayer = function() {
        MSLayerElement.call(this),
        this.__cssConfig = ["margin-top", "padding-top", "margin-bottom", "padding-left", "margin-right", "padding-right", "margin-left", "padding-bottom", "left", "right", "top", "bottom"],
        this.ease = "Expo",
        this.hide_start = !0,
        this.type = "hotspot"
    }
    ,
    MSHotspotLayer.extend(MSLayerElement);
    var p = MSHotspotLayer.prototype
      , _super = MSLayerElement.prototype;
    p._showTT = function() {
        this.show_cl && (clearTimeout(this.hto),
        this._tween && this._tween.stop(!0),
        this.hide_start && (this.align = this._orgAlign,
        this._locateTT(),
        this.tt.css({
            display: "block"
        }),
        this._tween = CTween.animate(this.tt, 900, this.to, {
            ease: "easeOut" + this.ease
        }),
        this.hide_start = !1))
    }
    ,
    p._hideTT = function() {
        if (this.show_cl) {
            this._tween && this._tween.stop(!0);
            var that = this;
            clearTimeout(this.hto),
            this.hto = setTimeout(function() {
                that.hide_start = !0,
                that._tween = CTween.animate(that.tt, 900, that.from, {
                    ease: "easeOut" + that.ease,
                    complete: function() {
                        that.tt.css("display", "none")
                    }
                })
            }, 200)
        }
    }
    ,
    p._updateClassName = function(name) {
        this._lastClass && this.tt.removeClass(this._lastClass),
        this.tt.addClass(name),
        this._lastClass = name
    }
    ,
    p._alignPolicy = function() {
        {
            var w = (this.tt.outerHeight(!1),
            Math.max(this.tt.outerWidth(!1), parseInt(this.tt.css("max-width"))))
              , ww = window.innerWidth;
            window.innerHeight
        }
        switch (this.align) {
        case "top":
            if (this.base_t < 0)
                return "bottom";
            break;
        case "right":
            if (this.base_l + w > ww || this.base_t < 0)
                return "bottom";
            break;
        case "left":
            if (this.base_l < 0 || this.base_t < 0)
                return "bottom"
        }
        return null
    }
    ,
    p._locateTT = function() {
        var os = this.$element.offset()
          , os2 = this.slide.slider.$element.offset()
          , dist = 50
          , space = 15;
        this.pos_x = os.left - os2.left - this.slide.slider.$element.scrollLeft(),
        this.pos_y = os.top - os2.top - this.slide.slider.$element.scrollTop(),
        this.from = {
            opacity: 0
        },
        this.to = {
            opacity: 1
        },
        this._updateClassName("ms-tooltip-" + this.align),
        this.tt_arrow.css("margin-left", "");
        var arrow_w = 15
          , arrow_h = 15;
        switch (this.align) {
        case "top":
            var w = Math.min(this.tt.outerWidth(!1), parseInt(this.tt.css("max-width")));
            this.base_t = this.pos_y - this.tt.outerHeight(!1) - arrow_h - space,
            this.base_l = this.pos_x - w / 2,
            this.base_l + w > window.innerWidth && (this.tt_arrow.css("margin-left", -arrow_w / 2 + this.base_l + w - window.innerWidth + "px"),
            this.base_l = window.innerWidth - w),
            this.base_l < 0 && (this.base_l = 0,
            this.tt_arrow.css("margin-left", -arrow_w / 2 + this.pos_x - this.tt.outerWidth(!1) / 2 + "px")),
            window._css3d ? (this.from[window._jcsspfx + "Transform"] = "translateY(-" + dist + "px)",
            this.to[window._jcsspfx + "Transform"] = "") : (this.from.top = this.base_t - dist + "px",
            this.to.top = this.base_t + "px");
            break;
        case "bottom":
            var w = Math.min(this.tt.outerWidth(!1), parseInt(this.tt.css("max-width")));
            this.base_t = this.pos_y + arrow_h + space,
            this.base_l = this.pos_x - w / 2,
            this.base_l + w > window.innerWidth && (this.tt_arrow.css("margin-left", -arrow_w / 2 + this.base_l + w - window.innerWidth + "px"),
            this.base_l = window.innerWidth - w),
            this.base_l < 0 && (this.base_l = 0,
            this.tt_arrow.css("margin-left", -arrow_w / 2 + this.pos_x - this.tt.outerWidth(!1) / 2 + "px")),
            window._css3d ? (this.from[window._jcsspfx + "Transform"] = "translateY(" + dist + "px)",
            this.to[window._jcsspfx + "Transform"] = "") : (this.from.top = this.base_t + dist + "px",
            this.to.top = this.base_t + "px");
            break;
        case "right":
            this.base_l = this.pos_x + arrow_w + space,
            this.base_t = this.pos_y - this.tt.outerHeight(!1) / 2,
            window._css3d ? (this.from[window._jcsspfx + "Transform"] = "translateX(" + dist + "px)",
            this.to[window._jcsspfx + "Transform"] = "") : (this.from.left = this.base_l + dist + "px",
            this.to.left = this.base_l + "px");
            break;
        case "left":
            this.base_l = this.pos_x - arrow_w - this.tt.outerWidth(!1) - space,
            this.base_t = this.pos_y - this.tt.outerHeight(!1) / 2,
            window._css3d ? (this.from[window._jcsspfx + "Transform"] = "translateX(-" + dist + "px)",
            this.to[window._jcsspfx + "Transform"] = "") : (this.from.left = this.base_l - dist + "px",
            this.to.left = this.base_l + "px")
        }
        var policyAlign = this._alignPolicy();
        return null !== policyAlign ? (this.align = policyAlign,
        void this._locateTT()) : (this.tt.css("top", parseInt(this.base_t) + "px").css("left", parseInt(this.base_l) + "px"),
        void this.tt.css(this.from))
    }
    ,
    p.start = function() {
        _super.start.call(this),
        this.tt.appendTo(this.slide.slider.$element),
        this.tt.css("display", "none")
    }
    ,
    p.reset = function() {
        _super.reset.call(this),
        this.tt.detach()
    }
    ,
    p.create = function() {
        var that = this;
        this._orgAlign = this.align = void 0 !== this.$element.data("align") ? this.$element.data("align") : "top",
        this.data = this.$element.html(),
        this.$element.html("").on("mouseenter", function() {
            that._showTT()
        }).on("mouseleave", function() {
            that._hideTT()
        }),
        this.point = $('<div><div class="ms-point-center"></div><div class="ms-point-border"></div></div>').addClass("ms-tooltip-point").appendTo(this.$element);
        var link = this.$element.data("link")
          , target = this.$element.data("target");
        link && this.point.on("click", function() {
            window.open(link, target || "_self")
        }),
        this.tt = $("<div></div>").addClass("ms-tooltip").css("display", "hidden").css("opacity", 0),
        void 0 !== this.$element.data("width") && this.tt.css("width", this.$element.data("width")).css("max-width", this.$element.data("width")),
        this.tt_arrow = $("<div></div>").addClass("ms-tooltip-arrow").appendTo(this.tt),
        this._updateClassName("ms-tooltip-" + this.align),
        this.ttcont = $("<div></div>").addClass("ms-tooltip-cont").html(this.data).appendTo(this.tt),
        this.$element.data("stay-hover") === !0 && this.tt.on("mouseenter", function() {
            that.hide_start || (clearTimeout(that.hto),
            that._tween.stop(!0),
            that._showTT())
        }).on("mouseleave", function() {
            that._hideTT()
        }),
        _super.create.call(this)
    }
}(jQuery),
function() {
    window.MSButtonLayer = function() {
        MSLayerElement.call(this),
        this.type = "button"
    }
    ,
    MSButtonLayer.extend(MSLayerElement);
    var p = MSButtonLayer.prototype
      , _super = MSLayerElement.prototype
      , positionKies = ["top", "left", "bottom", "right"];
    p.create = function() {
        _super.create.call(this),
        this.$element.wrap('<div class="ms-btn-container"></div>').css("position", "relative"),
        this.$container = this.$element.parent()
    }
    ,
    p.locate = function() {
        _super.locate.call(this);
        for (var key, tempValue, i = 0; 4 > i; i++)
            key = positionKies[i],
            key in this.baseStyle && (tempValue = this.$element.css(key),
            this.$element.css(key, ""),
            this.$container.css(key, tempValue));
        this.$container.width(this.$element.outerWidth(!0)).height(this.$element.outerHeight(!0))
    }
}(jQuery),
window.MSSliderEvent = function(type) {
    this.type = type
}
,
MSSliderEvent.CHANGE_START = "ms_changestart",
MSSliderEvent.CHANGE_END = "ms_changeend",
MSSliderEvent.WAITING = "ms_waiting",
MSSliderEvent.AUTOPLAY_CHANGE = "ms_autoplaychange",
MSSliderEvent.VIDEO_PLAY = "ms_videoPlay",
MSSliderEvent.VIDEO_CLOSE = "ms_videoclose",
MSSliderEvent.INIT = "ms_init",
MSSliderEvent.HARD_UPDATE = "ms_hard_update",
MSSliderEvent.RESIZE = "ms_resize",
MSSliderEvent.RESERVED_SPACE_CHANGE = "ms_rsc",
MSSliderEvent.DESTROY = "ms_destroy",
function(window, document, $) {
    "use strict";
    window.MSSlide = function() {
        this.$element = null,
        this.$loading = $("<div></div>").addClass("ms-slide-loading"),
        this.view = null,
        this.index = -1,
        this.__width = 0,
        this.__height = 0,
        this.fillMode = "fill",
        this.selected = !1,
        this.pselected = !1,
        this.autoAppend = !0,
        this.isSleeping = !0,
        this.moz = $.browser.mozilla
    }
    ;
    var p = MSSlide.prototype;
    p.onSwipeStart = function() {
        this.link && (this.linkdis = !0),
        this.video && (this.videodis = !0)
    }
    ,
    p.onSwipeMove = function(e) {
        var move = Math.max(Math.abs(e.data.distanceX), Math.abs(e.data.distanceY));
        this.swipeMoved = move > 4
    }
    ,
    p.onSwipeCancel = function() {
        return this.swipeMoved ? void (this.swipeMoved = !1) : (this.link && (this.linkdis = !1),
        void (this.video && (this.videodis = !1)))
    }
    ,
    p.setupLayerController = function() {
        this.hasLayers = !0,
        this.layerController = new MSLayerController(this)
    }
    ,
    p.assetsLoaded = function() {
        this.ready = !0,
        this.slider.api._startTimer(),
        (this.selected || this.pselected && this.slider.options.instantStartLayers) && (this.hasLayers && this.layerController.showLayers(),
        this.vinit && (this.bgvideo.play(),
        this.autoPauseBgVid || (this.bgvideo.currentTime = 0))),
        this.isSleeping || this.setupBG(),
        CTween.fadeOut(this.$loading, 300, !0),
        (0 === this.slider.options.preload || "all" === this.slider.options.preload) && this.index < this.view.slideList.length - 1 ? this.view.slideList[this.index + 1].loadImages() : "all" === this.slider.options.preload && this.index === this.view.slideList.length - 1 && this.slider._removeLoading()
    }
    ,
    p.setBG = function(img) {
        this.hasBG = !0;
        var that = this;
        this.$imgcont = $("<div></div>").addClass("ms-slide-bgcont"),
        this.$element.append(this.$loading).append(this.$imgcont),
        this.$bg_img = $(img).css("visibility", "hidden"),
        this.$imgcont.append(this.$bg_img),
        this.bgAligner = new MSAligner(that.fillMode,that.$imgcont,that.$bg_img),
        this.bgAligner.widthOnly = this.slider.options.autoHeight,
        that.slider.options.autoHeight && (that.pselected || that.selected) && that.slider.setHeight(that.slider.options.height),
        void 0 !== this.$bg_img.data("src") ? (this.bg_src = this.$bg_img.data("src"),
        this.$bg_img.removeAttr("data-src")) : this.$bg_img.one("load", function(event) {
            that._onBGLoad(event)
        }).each($.jqLoadFix)
    }
    ,
    p.setupBG = function() {
        !this.initBG && this.bgLoaded && (this.initBG = !0,
        this.$bg_img.css("visibility", ""),
        this.bgWidth = this.bgNatrualWidth || this.$bg_img.width(),
        this.bgHeight = this.bgNatrualHeight || this.$bg_img.height(),
        CTween.fadeIn(this.$imgcont, 300),
        this.slider.options.autoHeight && this.$imgcont.height(this.bgHeight * this.ratio),
        this.bgAligner.init(this.bgWidth, this.bgHeight),
        this.setSize(this.__width, this.__height),
        this.slider.options.autoHeight && (this.pselected || this.selected) && this.slider.setHeight(this.getHeight()))
    }
    ,
    p.loadImages = function() {
        if (!this.ls) {
            if (this.ls = !0,
            this.bgvideo && this.bgvideo.load(),
            this.hasBG && this.bg_src) {
                var that = this;
                this.$bg_img.preloadImg(this.bg_src, function(event) {
                    that._onBGLoad(event)
                })
            }
            this.hasLayers && this.layerController.loadLayers(this._onLayersLoad),
            this.hasBG || this.hasLayers || this.assetsLoaded()
        }
    }
    ,
    p._onLayersLoad = function() {
        this.layersLoaded = !0,
        (!this.hasBG || this.bgLoaded) && this.assetsLoaded()
    }
    ,
    p._onBGLoad = function(event) {
        this.bgNatrualWidth = event.width,
        this.bgNatrualHeight = event.height,
        this.bgLoaded = !0,
        $.browser.msie && this.$bg_img.on("dragstart", function(event) {
            event.preventDefault()
        }),
        (!this.hasLayers || this.layerController.ready) && this.assetsLoaded()
    }
    ,
    p.setBGVideo = function($video) {
        if ($video[0].play) {
            if (window._mobile && !this.slider.options.mobileBGVideo)
                return void $video.remove();
            this.bgvideo = $video[0];
            var that = this;
            $video.addClass("ms-slide-bgvideo"),
            $video.data("loop") !== !1 && this.bgvideo.addEventListener("ended", function() {
                that.bgvideo.play()
            }),
            $video.data("mute") !== !1 && (this.bgvideo.muted = !0),
            $video.data("autopause") === !0 && (this.autoPauseBgVid = !0),
            this.bgvideo_fillmode = $video.data("fill-mode") || "fill",
            "none" !== this.bgvideo_fillmode && (this.bgVideoAligner = new MSAligner(this.bgvideo_fillmode,this.$element,$video),
            this.bgvideo.addEventListener("loadedmetadata", function() {
                that.vinit || (that.vinit = !0,
                that.video_aspect = that.bgVideoAligner.baseHeight / that.bgVideoAligner.baseWidth,
                that.bgVideoAligner.init(that.bgvideo.videoWidth, that.bgvideo.videoHeight),
                that._alignBGVideo(),
                CTween.fadeIn($(that.bgvideo), 200),
                that.selected && that.bgvideo.play())
            })),
            $video.css("opacity", 0),
            this.$bgvideocont = $("<div></div>").addClass("ms-slide-bgvideocont").append($video),
            this.hasBG ? this.$imgcont.before(this.$bgvideocont) : this.$bgvideocont.appendTo(this.$element)
        }
    }
    ,
    p._alignBGVideo = function() {
        this.bgvideo_fillmode && "none" !== this.bgvideo_fillmode && this.bgVideoAligner.align()
    }
    ,
    p.setSize = function(width, height, hard) {
        this.__width = width,
        this.slider.options.autoHeight && (this.bgLoaded ? (this.ratio = this.__width / this.bgWidth,
        height = Math.floor(this.ratio * this.bgHeight),
        this.$imgcont.height(height)) : (this.ratio = width / this.slider.options.width,
        height = this.slider.options.height * this.ratio)),
        this.__height = height,
        this.$element.width(width).height(height),
        this.hasBG && this.bgLoaded && this.bgAligner.align(),
        this._alignBGVideo(),
        this.hasLayers && this.layerController.setSize(width, height, hard)
    }
    ,
    p.getHeight = function() {
        return this.hasBG && this.bgLoaded ? this.bgHeight * this.ratio : Math.max(this.$element[0].clientHeight, this.slider.options.height * this.ratio)
    }
    ,
    p.__playVideo = function() {
        this.vplayed || this.videodis || (this.vplayed = !0,
        this.slider.api.paused || (this.slider.api.pause(),
        this.roc = !0),
        this.vcbtn.css("display", ""),
        CTween.fadeOut(this.vpbtn, 500, !1),
        CTween.fadeIn(this.vcbtn, 500),
        CTween.fadeIn(this.vframe, 500),
        this.vframe.css("display", "block").attr("src", this.video + "&autoplay=1"),
        this.view.$element.addClass("ms-def-cursor"),
        this.moz && this.view.$element.css("perspective", "none"),
        this.view.swipeControl && this.view.swipeControl.disable(),
        this.slider.slideController.dispatchEvent(new MSSliderEvent(MSSliderEvent.VIDEO_PLAY)))
    }
    ,
    p.__closeVideo = function() {
        if (this.vplayed) {
            this.vplayed = !1,
            this.roc && this.slider.api.resume();
            var that = this;
            CTween.fadeIn(this.vpbtn, 500),
            CTween.animate(this.vcbtn, 500, {
                opacity: 0
            }, {
                complete: function() {
                    that.vcbtn.css("display", "none")
                }
            }),
            CTween.animate(this.vframe, 500, {
                opacity: 0
            }, {
                complete: function() {
                    that.vframe.attr("src", "about:blank").css("display", "none")
                }
            }),
            this.moz && this.view.$element.css("perspective", ""),
            this.view.swipeControl && this.view.swipeControl.enable(),
            this.view.$element.removeClass("ms-def-cursor"),
            this.slider.slideController.dispatchEvent(new MSSliderEvent(MSSliderEvent.VIDEO_CLOSE))
        }
    }
    ,
    p.create = function() {
        var that = this;
        this.hasLayers && this.layerController.create(),
        this.link && this.link.addClass("ms-slide-link").html("").click(function(e) {
            that.linkdis && e.preventDefault()
        }),
        this.video && (-1 === this.video.indexOf("?") && (this.video += "?"),
        this.vframe = $("<iframe></iframe>").addClass("ms-slide-video").css({
            width: "100%",
            height: "100%",
            display: "none"
        }).attr("src", "about:blank").attr("allowfullscreen", "true").appendTo(this.$element),
        this.vpbtn = $("<div></div>").addClass("ms-slide-vpbtn").click(function() {
            that.__playVideo()
        }).appendTo(this.$element),
        this.vcbtn = $("<div></div>").addClass("ms-slide-vcbtn").click(function() {
            that.__closeVideo()
        }).appendTo(this.$element).css("display", "none"),
        window._touch && this.vcbtn.removeClass("ms-slide-vcbtn").addClass("ms-slide-vcbtn-mobile").append('<div class="ms-vcbtn-txt">Close video</div>').appendTo(this.view.$element.parent())),
        !this.slider.options.autoHeight && this.hasBG && (this.$imgcont.css("height", "100%"),
        ("center" === this.fillMode || "stretch" === this.fillMode) && (this.fillMode = "fill")),
        this.slider.options.autoHeight && this.$element.addClass("ms-slide-auto-height"),
        this.sleep(!0)
    }
    ,
    p.destroy = function() {
        this.hasLayers && (this.layerController.destroy(),
        this.layerController = null),
        this.$element.remove(),
        this.$element = null
    }
    ,
    p.prepareToSelect = function() {
        this.pselected || this.selected || (this.pselected = !0,
        (this.link || this.video) && (this.view.addEventListener(MSViewEvents.SWIPE_START, this.onSwipeStart, this),
        this.view.addEventListener(MSViewEvents.SWIPE_MOVE, this.onSwipeMove, this),
        this.view.addEventListener(MSViewEvents.SWIPE_CANCEL, this.onSwipeCancel, this),
        this.linkdis = !1,
        this.swipeMoved = !1),
        this.loadImages(),
        this.hasLayers && this.layerController.prepareToShow(),
        this.ready && (this.bgvideo && this.bgvideo.play(),
        this.hasLayers && this.slider.options.instantStartLayers && this.layerController.showLayers()),
        this.moz && this.$element.css("margin-top", ""))
    }
    ,
    p.select = function() {
        this.selected || (this.selected = !0,
        this.pselected = !1,
        this.$element.addClass("ms-sl-selected"),
        this.hasLayers && (this.slider.options.autoHeight && this.layerController.updateHeight(),
        this.slider.options.instantStartLayers || this.layerController.showLayers()),
        this.ready && this.bgvideo && this.bgvideo.play(),
        this.videoAutoPlay && (this.videodis = !1,
        this.vpbtn.trigger("click")))
    }
    ,
    p.unselect = function() {
        this.pselected = !1,
        this.moz && this.$element.css("margin-top", "0.1px"),
        (this.link || this.video) && (this.view.removeEventListener(MSViewEvents.SWIPE_START, this.onSwipeStart, this),
        this.view.removeEventListener(MSViewEvents.SWIPE_MOVE, this.onSwipeMove, this),
        this.view.removeEventListener(MSViewEvents.SWIPE_CANCEL, this.onSwipeCancel, this)),
        this.bgvideo && (this.bgvideo.pause(),
        !this.autoPauseBgVid && this.vinit && (this.bgvideo.currentTime = 0)),
        this.hasLayers && this.layerController.hideLayers(),
        this.selected && (this.selected = !1,
        this.$element.removeClass("ms-sl-selected"),
        this.video && this.vplayed && (this.__closeVideo(),
        this.roc = !1))
    }
    ,
    p.sleep = function(force) {
        (!this.isSleeping || force) && (this.isSleeping = !0,
        this.autoAppend && this.$element.detach(),
        this.hasLayers && this.layerController.onSlideSleep())
    }
    ,
    p.wakeup = function() {
        this.isSleeping && (this.isSleeping = !1,
        this.autoAppend && this.view.$slideCont.append(this.$element),
        this.moz && this.$element.css("margin-top", "0.1px"),
        this.setupBG(),
        this.hasBG && this.bgAligner.align(),
        this.hasLayers && this.layerController.onSlideWakeup())
    }
}(window, document, jQuery),
function($) {
    "use strict";
    var SliderViewList = {};
    window.MSSlideController = function(slider) {
        this._delayProgress = 0,
        this._timer = new averta.Timer(100),
        this._timer.onTimer = this.onTimer,
        this._timer.refrence = this,
        this.currentSlide = null,
        this.slider = slider,
        this.so = slider.options,
        averta.EventDispatcher.call(this)
    }
    ,
    MSSlideController.registerView = function(name, _class) {
        if (name in SliderViewList)
            throw new Error(name + ", is already registered.");
        SliderViewList[name] = _class
    }
    ,
    MSSlideController.SliderControlList = {},
    MSSlideController.registerControl = function(name, _class) {
        if (name in MSSlideController.SliderControlList)
            throw new Error(name + ", is already registered.");
        MSSlideController.SliderControlList[name] = _class
    }
    ;
    var p = MSSlideController.prototype;
    p.setupView = function() {
        var that = this;
        this.resize_listener = function() {
            that.__resize()
        }
        ;
        var viewOptions = {
            spacing: this.so.space,
            mouseSwipe: this.so.mouse,
            loop: this.so.loop,
            autoHeight: this.so.autoHeight,
            swipe: this.so.swipe,
            speed: this.so.speed,
            dir: this.so.dir,
            viewNum: this.so.inView,
            critMargin: this.so.critMargin
        };
        this.so.viewOptions && $.extend(viewOptions, this.so.viewOptions),
        this.so.autoHeight && (this.so.heightLimit = !1);
        var viewClass = SliderViewList[this.slider.options.view] || MSBasicView;
        if (!viewClass._3dreq || window._css3d && !$.browser.msie || (viewClass = viewClass._fallback || MSBasicView),
        this.view = new viewClass(viewOptions),
        this.so.overPause) {
            var that = this;
            this.slider.$element.mouseenter(function() {
                that.is_over = !0,
                that._stopTimer()
            }).mouseleave(function() {
                that.is_over = !1,
                that._startTimer()
            })
        }
    }
    ,
    p.onChangeStart = function() {
        this.change_started = !0,
        this.currentSlide && this.currentSlide.unselect(),
        this.currentSlide = this.view.currentSlide,
        this.currentSlide.prepareToSelect(),
        this.so.endPause && this.currentSlide.index === this.slider.slides.length - 1 && (this.pause(),
        this.skipTimer()),
        this.so.autoHeight && this.slider.setHeight(this.currentSlide.getHeight()),
        this.so.deepLink && this.__updateWindowHash(),
        this.dispatchEvent(new MSSliderEvent(MSSliderEvent.CHANGE_START))
    }
    ,
    p.onChangeEnd = function() {
        if (this.change_started = !1,
        this._startTimer(),
        this.currentSlide.select(),
        this.so.preload > 1) {
            var loc, i, slide, l = this.so.preload - 1;
            for (i = 1; l >= i; ++i) {
                if (loc = this.view.index + i,
                loc >= this.view.slideList.length) {
                    if (!this.so.loop) {
                        i = l;
                        continue
                    }
                    loc -= this.view.slideList.length
                }
                slide = this.view.slideList[loc],
                slide && slide.loadImages()
            }
            for (l > this.view.slideList.length / 2 && (l = Math.floor(this.view.slideList.length / 2)),
            i = 1; l >= i; ++i) {
                if (loc = this.view.index - i,
                0 > loc) {
                    if (!this.so.loop) {
                        i = l;
                        continue
                    }
                    loc = this.view.slideList.length + loc
                }
                slide = this.view.slideList[loc],
                slide && slide.loadImages()
            }
        }
        this.dispatchEvent(new MSSliderEvent(MSSliderEvent.CHANGE_END))
    }
    ,
    p.onSwipeStart = function() {
        this.skipTimer()
    }
    ,
    p.skipTimer = function() {
        this._timer.reset(),
        this._delayProgress = 0,
        this.dispatchEvent(new MSSliderEvent(MSSliderEvent.WAITING))
    }
    ,
    p.onTimer = function() {
        if (this._timer.getTime() >= 1e3 * this.view.currentSlide.delay && (this.skipTimer(),
        this.view.next(),
        this.hideCalled = !1),
        this._delayProgress = this._timer.getTime() / (10 * this.view.currentSlide.delay),
        this.so.hideLayers && !this.hideCalled && 1e3 * this.view.currentSlide.delay - this._timer.getTime() <= 300) {
            var currentSlide = this.view.currentSlide;
            currentSlide.hasLayers && currentSlide.layerController.animHideLayers(),
            this.hideCalled = !0
        }
        this.dispatchEvent(new MSSliderEvent(MSSliderEvent.WAITING))
    }
    ,
    p._stopTimer = function() {
        this._timer && this._timer.stop()
    }
    ,
    p._startTimer = function() {
        this.paused || this.is_over || !this.currentSlide || !this.currentSlide.ready || this.change_started || this._timer.start()
    }
    ,
    p.__appendSlides = function() {
        var slide, loc, i = 0, l = this.view.slideList.length - 1;
        for (i; l > i; ++i)
            slide = this.view.slideList[i],
            slide.detached || (slide.$element.detach(),
            slide.detached = !0);
        for (this.view.appendSlide(this.view.slideList[this.view.index]),
        l = 3,
        i = 1; l >= i; ++i) {
            if (loc = this.view.index + i,
            loc >= this.view.slideList.length) {
                if (!this.so.loop) {
                    i = l;
                    continue
                }
                loc -= this.view.slideList.length
            }
            slide = this.view.slideList[loc],
            slide.detached = !1,
            this.view.appendSlide(slide)
        }
        for (l > this.view.slideList.length / 2 && (l = Math.floor(this.view.slideList.length / 2)),
        i = 1; l >= i; ++i) {
            if (loc = this.view.index - i,
            0 > loc) {
                if (!this.so.loop) {
                    i = l;
                    continue
                }
                loc = this.view.slideList.length + loc
            }
            slide = this.view.slideList[loc],
            slide.detached = !1,
            this.view.appendSlide(slide)
        }
    }
    ,
    p.__resize = function(hard) {
        this.created && (this.width = this.slider.$element[0].clientWidth || this.so.width,
        this.so.fullwidth || (this.width = Math.min(this.width, this.so.width)),
        this.so.fullheight ? (this.so.heightLimit = !1,
        this.so.autoHeight = !1,
        this.height = this.slider.$element[0].clientHeight) : this.height = this.width / this.slider.aspect,
        this.so.autoHeight ? (this.currentSlide.setSize(this.width, null, hard),
        this.view.setSize(this.width, this.currentSlide.getHeight(), hard)) : this.view.setSize(this.width, Math.max(this.so.minHeight, this.so.heightLimit ? Math.min(this.height, this.so.height) : this.height), hard),
        this.slider.$controlsCont && this.so.centerControls && this.so.fullwidth && this.view.$element.css("left", Math.min(0, -(this.slider.$element[0].clientWidth - this.so.width) / 2) + "px"),
        this.dispatchEvent(new MSSliderEvent(MSSliderEvent.RESIZE)))
    }
    ,
    p.__dispatchInit = function() {
        this.dispatchEvent(new MSSliderEvent(MSSliderEvent.INIT))
    }
    ,
    p.__updateWindowHash = function() {
        var hash = window.location.hash
          , dl = this.so.deepLink
          , dlt = this.so.deepLinkType
          , eq = "path" === dlt ? "/" : "="
          , sep = "path" === dlt ? "/" : "&"
          , sliderHash = dl + eq + (this.view.index + 1)
          , regTest = new RegExp(dl + eq + "[0-9]+","g");
        window.location.hash = "" === hash ? sep + sliderHash : regTest.test(hash) ? hash.replace(regTest, sliderHash) : hash + sep + sliderHash
    }
    ,
    p.__curentSlideInHash = function() {
        var hash = window.location.hash
          , dl = this.so.deepLink
          , dlt = this.so.deepLinkType
          , eq = "path" === dlt ? "/" : "="
          , regTest = new RegExp(dl + eq + "[0-9]+","g");
        if (regTest.test(hash)) {
            var index = Number(hash.match(regTest)[0].match(/[0-9]+/g).pop());
            if (!isNaN(index))
                return index - 1
        }
        return -1
    }
    ,
    p.__onHashChanged = function() {
        var index = this.__curentSlideInHash();
        -1 !== index && this.gotoSlide(index)
    }
    ,
    p.__findLayerById = function(layerId) {
        if (!this.currentSlide)
            return null;
        var layer;
        return this.currentSlide.layerController && (layer = this.currentSlide.layerController.getLayerById(layerId)),
        !layer && this.slider.overlayLayers ? this.slider.overlayLayers.layerController.getLayerById(layerId) : layer
    }
    ,
    p.setup = function() {
        this.created = !0,
        this.paused = !this.so.autoplay,
        this.view.addEventListener(MSViewEvents.CHANGE_START, this.onChangeStart, this),
        this.view.addEventListener(MSViewEvents.CHANGE_END, this.onChangeEnd, this),
        this.view.addEventListener(MSViewEvents.SWIPE_START, this.onSwipeStart, this),
        this.currentSlide = this.view.slideList[this.so.start - 1],
        this.__resize();
        var slideInHash = this.__curentSlideInHash()
          , startSlide = -1 !== slideInHash ? slideInHash : this.so.start - 1;
        if (this.view.create(startSlide),
        0 === this.so.preload && this.view.slideList[0].loadImages(),
        this.scroller = this.view.controller,
        this.so.wheel) {
            var that = this
              , last_time = (new Date).getTime();
            this.wheellistener = function(event) {
                var e = window.event || event.orginalEvent || event;
                e.preventDefault();
                var current_time = (new Date).getTime();
                if (!(400 > current_time - last_time)) {
                    last_time = current_time;
                    var delta = Math.abs(e.detail || e.wheelDelta);
                    $.browser.mozilla && (delta *= 100);
                    var scrollThreshold = 15;
                    return e.detail < 0 || e.wheelDelta > 0 ? delta >= scrollThreshold && that.previous(!0) : delta >= scrollThreshold && that.next(!0),
                    !1
                }
            }
            ,
            $.browser.mozilla ? this.slider.$element[0].addEventListener("DOMMouseScroll", this.wheellistener) : this.slider.$element.bind("mousewheel", this.wheellistener)
        }
        0 === this.slider.$element[0].clientWidth && (this.slider.init_safemode = !0),
        this.__resize();
        var that = this;
        this.so.deepLink && $(window).on("hashchange", function() {
            that.__onHashChanged()
        })
    }
    ,
    p.index = function() {
        return this.view.index
    }
    ,
    p.count = function() {
        return this.view.slidesCount
    }
    ,
    p.next = function(checkLoop) {
        this.skipTimer(),
        this.view.next(checkLoop)
    }
    ,
    p.previous = function(checkLoop) {
        this.skipTimer(),
        this.view.previous(checkLoop)
    }
    ,
    p.gotoSlide = function(index) {
        index = Math.min(index, this.count() - 1),
        this.skipTimer(),
        this.view.gotoSlide(index)
    }
    ,
    p.destroy = function(reset) {
        this.dispatchEvent(new MSSliderEvent(MSSliderEvent.DESTROY)),
        this.slider.destroy(reset)
    }
    ,
    p._destroy = function() {
        this._timer.reset(),
        this._timer = null,
        $(window).unbind("resize", this.resize_listener),
        this.view.destroy(),
        this.view = null,
        this.so.wheel && ($.browser.mozilla ? this.slider.$element[0].removeEventListener("DOMMouseScroll", this.wheellistener) : this.slider.$element.unbind("mousewheel", this.wheellistener),
        this.wheellistener = null),
        this.so = null
    }
    ,
    p.runAction = function(action) {
        var actionParams = [];
        if (-1 !== action.indexOf("(")) {
            var temp = action.slice(0, action.indexOf("("));
            actionParams = action.slice(action.indexOf("(") + 1, -1).replace(/\"|\'|\s/g, "").split(","),
            action = temp
        }
        action in this ? this[action].apply(this, actionParams) : console
    }
    ,
    p.update = function(hard) {
        this.slider.init_safemode && hard && (this.slider.init_safemode = !1),
        this.__resize(hard),
        hard && this.dispatchEvent(new MSSliderEvent(MSSliderEvent.HARD_UPDATE))
    }
    ,
    p.locate = function() {
        this.__resize()
    }
    ,
    p.resume = function() {
        this.paused && (this.paused = !1,
        this._startTimer())
    }
    ,
    p.pause = function() {
        this.paused || (this.paused = !0,
        this._stopTimer())
    }
    ,
    p.currentTime = function() {
        return this._delayProgress
    }
    ,
    p.showLayer = function(layerId, delay) {
        var layer = this.__findLayerById(layerId);
        layer && (delay ? (clearTimeout(layer.actionTimeout),
        layer.actionTimeout = setTimeout(this.showLayer, delay, layerId, 0)) : layer.start())
    }
    ,
    p.hideLayer = function(layerId, delay) {
        var layer = this.__findLayerById(layerId);
        layer && (delay ? (clearTimeout(layer.actionTimeout),
        layer.actionTimeout = setTimeout(this.hideLayer, delay, layerId, 0)) : layer.hide())
    }
    ,
    p.toggleLayer = function(layerId, delay) {
        var layer = this.__findLayerById(layerId);
        layer && (delay ? (clearTimeout(layer.actionTimeout),
        layer.actionTimeout = setTimeout(this.toggleLayer, delay, layerId, 0)) : layer.isShowing ? layer.hide() : layer.start())
    }
    ,
    p.showLayers = function(layerIds, delay) {
        var self = this;
        $.each(layerIds.replace(/\s+/g, "").split("|"), function(index, layerId) {
            self.showLayer(layerId, delay)
        })
    }
    ,
    p.hideLayers = function(layerIds, delay) {
        var self = this;
        $.each(layerIds.replace(/\s+/g, "").split("|"), function(index, layerId) {
            self.hideLayer(layerId, delay)
        })
    }
    ,
    p.toggleLayers = function(layerIds, delay) {
        var self = this;
        $.each(layerIds.replace(/\s+/g, "").split("|"), function(index, layerId) {
            self.toggleLayer(layerId, delay)
        })
    }
    ,
    averta.EventDispatcher.extend(p)
}(jQuery),
function($) {
    "use strict";
    var LayerTypes = {
        image: MSImageLayerElement,
        text: MSLayerElement,
        video: MSVideoLayerElement,
        hotspot: MSHotspotLayer,
        button: MSButtonLayer
    };
    window.MasterSlider = function() {
        this.options = {
            forceInit: !0,
            autoplay: !1,
            loop: !1,
            mouse: !0,
            swipe: !0,
            grabCursor: !0,
            space: 0,
            fillMode: "fill",
            start: 1,
            view: "basic",
            width: 300,
            height: 150,
            inView: 15,
            critMargin: 1,
            mobileBGVideo: !1,
            heightLimit: !0,
            smoothHeight: !0,
            autoHeight: !1,
            minHeight: -1,
            fullwidth: !1,
            fullheight: !1,
            autofill: !1,
            layersMode: "center",
            hideLayers: !1,
            endPause: !1,
            centerControls: !0,
            overPause: !0,
            shuffle: !1,
            speed: 17,
            dir: "h",
            preload: 0,
            wheel: !1,
            layout: "boxed",
            autofillTarget: null,
            fullscreenMargin: 0,
            instantStartLayers: !1,
            parallaxMode: "mouse",
            rtl: !1,
            deepLink: null,
            deepLinkType: "path",
            disablePlugins: []
        },
        this.slides = [],
        this.activePlugins = [],
        this.$element = null,
        this.lastMargin = 0,
        this.leftSpace = 0,
        this.topSpace = 0,
        this.rightSpace = 0,
        this.bottomSpace = 0,
        this._holdOn = 0;
        var that = this;
        this.resize_listener = function() {
            that._resize()
        }
        ,
        $(window).bind("resize", this.resize_listener)
    }
    ,
    MasterSlider.author = "Averta Ltd. (www.averta.net)",
    MasterSlider.version = "2.51.0",
    MasterSlider.releaseDate = "Jan 2017",
    MasterSlider._plugins = [];
    var MS = MasterSlider;
    MS.registerPlugin = function(plugin) {
        -1 === MS._plugins.indexOf(plugin) && MS._plugins.push(plugin)
    }
    ;
    var p = MasterSlider.prototype;
    p.__setupSlides = function() {
        var new_slide, that = this, ind = 0;
        this.$element.children(".ms-slide").each(function() {
            var $slide_ele = $(this);
            new_slide = new MSSlide,
            new_slide.$element = $slide_ele,
            new_slide.slider = that,
            new_slide.delay = void 0 !== $slide_ele.data("delay") ? $slide_ele.data("delay") : 3,
            new_slide.fillMode = void 0 !== $slide_ele.data("fill-mode") ? $slide_ele.data("fill-mode") : that.options.fillMode,
            new_slide.index = ind++,
            new_slide.id = $slide_ele.data("id");
            var slide_img = $slide_ele.children("img:not(.ms-layer)");
            slide_img.length > 0 && new_slide.setBG(slide_img[0]);
            var slide_video = $slide_ele.children("video");
            if (slide_video.length > 0 && new_slide.setBGVideo(slide_video),
            that.controls)
                for (var i = 0, l = that.controls.length; l > i; ++i)
                    that.controls[i].slideAction(new_slide);
            $slide_ele.children("a").each(function() {
                var $this = $(this);
                "video" === this.getAttribute("data-type") ? (new_slide.video = this.getAttribute("href"),
                new_slide.videoAutoPlay = $this.data("autoplay"),
                $this.remove()) : $this.hasClass("ms-layer") || (new_slide.link = $(this))
            });
            that.__createSlideLayers(new_slide, $slide_ele.find(".ms-layer")),
            that.slides.push(new_slide),
            that.slideController.view.addSlide(new_slide)
        })
    }
    ,
    p._setupOverlayLayers = function() {
        var self = this
          , $ollayers = this.$element.children(".ms-overlay-layers").eq(0);
        if ($ollayers.length) {
            var overlayLayers = new MSOverlayLayers(this);
            overlayLayers.$element = $ollayers,
            self.__createSlideLayers(overlayLayers, $ollayers.find(".ms-layer")),
            this.view.$element.prepend($ollayers),
            this.overlayLayers = overlayLayers,
            overlayLayers.create()
        }
    }
    ,
    p.__createSlideLayers = function(slide, layers) {
        0 != layers.length && (slide.setupLayerController(),
        layers.each(function(index, domEle) {
            var $parent_ele, $layer_element = $(this);
            "A" === domEle.nodeName && "image" === $layer_element.find(">img").data("type") && ($parent_ele = $(this),
            $layer_element = $parent_ele.find("img"));
            var layer = new (LayerTypes[$layer_element.data("type") || "text"]);
            layer.$element = $layer_element,
            layer.link = $parent_ele,
            layer.id = layer.$element.data("id"),
            layer.waitForAction = layer.$element.data("wait"),
            layer.masked = layer.$element.data("masked"),
            layer.maskWidth = layer.$element.data("mask-width"),
            layer.maskHeight = layer.$element.data("mask-height");
            var eff_parameters = {}
              , end_eff_parameters = {};
            void 0 !== $layer_element.data("effect") && (eff_parameters.name = $layer_element.data("effect")),
            void 0 !== $layer_element.data("ease") && (eff_parameters.ease = $layer_element.data("ease")),
            void 0 !== $layer_element.data("duration") && (eff_parameters.duration = $layer_element.data("duration")),
            void 0 !== $layer_element.data("delay") && (eff_parameters.delay = $layer_element.data("delay")),
            $layer_element.data("hide-effect") && (end_eff_parameters.name = $layer_element.data("hide-effect")),
            $layer_element.data("hide-ease") && (end_eff_parameters.ease = $layer_element.data("hide-ease")),
            void 0 !== $layer_element.data("hide-duration") && (end_eff_parameters.duration = $layer_element.data("hide-duration")),
            void 0 !== $layer_element.data("hide-time") && (end_eff_parameters.time = $layer_element.data("hide-time")),
            layer.setStartAnim(eff_parameters),
            layer.setEndAnim(end_eff_parameters),
            slide.layerController.addLayer(layer)
        }))
    }
    ,
    p._removeLoading = function() {
        $(window).unbind("resize", this.resize_listener),
        this.$element.removeClass("before-init").css("visibility", "visible").css("height", "").css("opacity", 0),
        CTween.fadeIn(this.$element),
        this.$loading.remove(),
        this.slideController && this.slideController.__resize()
    }
    ,
    p._resize = function() {
        if (this.$loading) {
            var h = this.$loading[0].clientWidth / this.aspect;
            h = this.options.heightLimit ? Math.min(h, this.options.height) : h,
            this.$loading.height(h),
            this.$element.height(h)
        }
    }
    ,
    p._shuffleSlides = function() {
        for (var r, slides = this.$element.children(".ms-slide"), i = 0, l = slides.length; l > i; ++i)
            r = Math.floor(Math.random() * (l - 1)),
            i != r && (this.$element[0].insertBefore(slides[i], slides[r]),
            slides = this.$element.children(".ms-slide"))
    }
    ,
    p._setupSliderLayout = function() {
        this._updateSideMargins(),
        this.lastMargin = this.leftSpace;
        var lo = this.options.layout;
        "boxed" !== lo && "partialview" !== lo && (this.options.fullwidth = !0),
        ("fullscreen" === lo || "autofill" === lo) && (this.options.fullheight = !0,
        "autofill" === lo && (this.$autofillTarget = $(this.options.autofillTarget),
        0 === this.$autofillTarget.length && (this.$autofillTarget = this.$element.parent()))),
        "partialview" === lo && this.$element.addClass("ms-layout-partialview"),
        ("fullscreen" === lo || "fullwidth" === lo || "autofill" === lo) && ($(window).bind("resize", {
            that: this
        }, this._updateLayout),
        this._updateLayout()),
        $(window).bind("resize", this.slideController.resize_listener)
    }
    ,
    p._updateLayout = function(event) {
        var that = event ? event.data.that : this
          , lo = that.options.layout
          , $element = that.$element
          , $win = $(window);
        if ("fullscreen" === lo)
            document.body.style.overflow = "hidden",
            $element.height($win.height() - that.options.fullscreenMargin - that.topSpace - that.bottomSpace),
            document.body.style.overflow = "";
        else if ("autofill" === lo)
            return void $element.height(that.$autofillTarget.height() - that.options.fullscreenMargin - that.topSpace - that.bottomSpace).width(that.$autofillTarget.width() - that.leftSpace - that.rightSpace);
        $element.width($win.width() - that.leftSpace - that.rightSpace);
        var margin = -$element.offset().left + that.leftSpace + that.lastMargin;
        $element.css("margin-left", margin),
        that.lastMargin = margin
    }
    ,
    p._init = function() {
        if (!(this._holdOn > 0) && this._docReady) {
            if (this.initialized = !0,
            "all" !== this.options.preload && this._removeLoading(),
            this.options.shuffle && this._shuffleSlides(),
            MSLayerEffects.setup(),
            this.slideController.setupView(),
            this.view = this.slideController.view,
            this.$controlsCont = $("<div></div>").addClass("ms-inner-controls-cont"),
            this.options.centerControls && this.$controlsCont.css("max-width", this.options.width + "px"),
            this.$controlsCont.prepend(this.view.$element),
            this.$msContainer = $("<div></div>").addClass("ms-container").prependTo(this.$element).append(this.$controlsCont),
            this.controls)
                for (var i = 0, l = this.controls.length; l > i; ++i)
                    this.controls[i].setup();
            if (this._setupSliderLayout(),
            this.__setupSlides(),
            this.slideController.setup(),
            this._setupOverlayLayers(),
            this.controls)
                for (i = 0,
                l = this.controls.length; l > i; ++i)
                    this.controls[i].create();
            if (this.options.autoHeight && this.slideController.view.$element.height(this.slideController.currentSlide.getHeight()),
            this.options.swipe && !window._touch && this.options.grabCursor && this.options.mouse) {
                var $view = this.view.$element;
                $view.mousedown(function() {
                    $view.removeClass("ms-grab-cursor"),
                    $view.addClass("ms-grabbing-cursor"),
                    $.browser.msie && window.ms_grabbing_curosr && ($view[0].style.cursor = "url(" + window.ms_grabbing_curosr + "), move")
                }).addClass("ms-grab-cursor"),
                $(document).mouseup(function() {
                    $view.removeClass("ms-grabbing-cursor"),
                    $view.addClass("ms-grab-cursor"),
                    $.browser.msie && window.ms_grab_curosr && ($view[0].style.cursor = "url(" + window.ms_grab_curosr + "), move")
                })
            }
            this.slideController.__dispatchInit()
        }
    }
    ,
    p.setHeight = function(value) {
        this.options.smoothHeight ? (this.htween && (this.htween.reset ? this.htween.reset() : this.htween.stop(!0)),
        this.htween = CTween.animate(this.slideController.view.$element, 500, {
            height: value
        }, {
            ease: "easeOutQuart"
        })) : this.slideController.view.$element.height(value)
    }
    ,
    p.reserveSpace = function(side, space) {
        var sideSpace = side + "Space"
          , pos = this[sideSpace];
        return this[sideSpace] += space,
        this._updateSideMargins(),
        pos
    }
    ,
    p._updateSideMargins = function() {
        this.$element.css("margin", this.topSpace + "px " + this.rightSpace + "px " + this.bottomSpace + "px " + this.leftSpace + "px")
    }
    ,
    p._realignControls = function() {
        this.rightSpace = this.leftSpace = this.topSpace = this.bottomSpace = 0,
        this._updateSideMargins(),
        this.api.dispatchEvent(new MSSliderEvent(MSSliderEvent.RESERVED_SPACE_CHANGE))
    }
    ,
    p.control = function(control, options) {
        if (control in MSSlideController.SliderControlList) {
            this.controls || (this.controls = []);
            var ins = new MSSlideController.SliderControlList[control](options);
            return ins.slider = this,
            this.controls.push(ins),
            this
        }
    }
    ,
    p.holdOn = function() {
        this._holdOn++
    }
    ,
    p.release = function() {
        this._holdOn--,
        this._init()
    }
    ,
    p.setup = function(target, options) {
        if (this.$element = "string" == typeof target ? $("#" + target) : target.eq(0),
        this.setupMarkup = this.$element.html(),
        0 !== this.$element.length) {
            this.$element.addClass("master-slider").addClass("before-init"),
            $.browser.msie ? this.$element.addClass("ms-ie").addClass("ms-ie" + $.browser.version.slice(0, $.browser.version.indexOf("."))) : $.browser.webkit ? this.$element.addClass("ms-wk") : $.browser.mozilla && this.$element.addClass("ms-moz");
            var ua = navigator.userAgent.toLowerCase()
              , isAndroid = ua.indexOf("android") > -1;
            isAndroid && this.$element.addClass("ms-android");
            var that = this;
            $.extend(this.options, options),
            this.aspect = this.options.width / this.options.height,
            this.$loading = $("<div></div>").addClass("ms-loading-container").insertBefore(this.$element).append($("<div></div>").addClass("ms-loading")),
            this.$loading.parent().css("position", "relative"),
            this.options.autofill && (this.options.fullwidth = !0,
            this.options.fullheight = !0),
            this.options.fullheight && this.$element.addClass("ms-fullheight"),
            this._resize(),
            this.slideController = new MSSlideController(this),
            this.api = this.slideController;
            for (var i = 0, l = MS._plugins.length; i !== l; i++) {
                var plugin = MS._plugins[i];
                -1 === this.options.disablePlugins.indexOf(plugin.name) && this.activePlugins.push(new plugin(this))
            }
            return this.options.forceInit && MasterSlider.addJQReadyErrorCheck(this),
            $(document).ready(function() {
                that.initialized || (that._docReady = !0,
                that._init())
            }),
            this
        }
    }
    ,
    p.destroy = function(insertMarkup) {
        for (var i = 0, l = this.activePlugins.length; i !== l; i++)
            this.activePlugins[i].destroy();
        if (this.controls)
            for (i = 0,
            l = this.controls.length; i !== l; i++)
                this.controls[i].destroy();
        this.slideController && this.slideController._destroy(),
        this.$loading && this.$loading.remove(),
        insertMarkup ? this.$element.html(this.setupMarkup).css("visibility", "hidden") : this.$element.remove();
        var lo = this.options.layout;
        ("fullscreen" === lo || "fullwidth" === lo) && $(window).unbind("resize", this._updateLayout),
        this.view = null,
        this.slides = null,
        this.options = null,
        this.slideController = null,
        this.api = null,
        this.resize_listener = null,
        this.activePlugins = null
    }
}(jQuery),
function($, window, document, undefined) {
    function MasterSliderPlugin(element, options) {
        this.element = element,
        this.$element = $(element),
        this.settings = $.extend({}, defaults, options),
        this._defaults = defaults,
        this._name = pluginName,
        this.init()
    }
    var pluginName = "masterslider"
      , defaults = {
        controls: {}
    };
    $.extend(MasterSliderPlugin.prototype, {
        init: function() {
            var self = this;
            this._slider = new MasterSlider;
            for (var control in this.settings.controls)
                this._slider.control(control, this.settings.controls[control]);
            this._slider.setup(this.$element, this.settings);
            var _superDispatch = this._slider.api.dispatchEvent;
            this._slider.api.dispatchEvent = function(event) {
                self.$element.trigger(event.type),
                _superDispatch.call(this, event)
            }
        },
        api: function() {
            return this._slider.api
        },
        slider: function() {
            return this._slider
        }
    }),
    $.fn[pluginName] = function(options) {
        var args = arguments
          , plugin = "plugin_" + pluginName;
        if (options === undefined || "object" == typeof options)
            return this.each(function() {
                $.data(this, plugin) || $.data(this, plugin, new MasterSliderPlugin(this,options))
            });
        if ("string" == typeof options && "_" !== options[0] && "init" !== options) {
            var returns;
            return this.each(function() {
                var instance = $.data(this, plugin);
                instance instanceof MasterSliderPlugin && "function" == typeof instance[options] && (returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1))),
                instance instanceof MasterSliderPlugin && "function" == typeof instance._slider.api[options] && (returns = instance._slider.api[options].apply(instance._slider.api, Array.prototype.slice.call(args, 1))),
                "destroy" === options && $.data(this, plugin, null)
            }),
            returns !== undefined ? returns : this
        }
    }
}(jQuery, window, document),
function($, window) {
    "use strict";
    var sliderInstances = [];
    MasterSlider.addJQReadyErrorCheck = function(slider) {
        sliderInstances.push(slider)
    }
    ;
    var _ready = $.fn.ready
      , _onerror = window.onerror;
    $.fn.ready = function() {
        return window.onerror = function() {
            if (0 !== sliderInstances.length)
                for (var i = 0, l = sliderInstances.length; i !== l; i++) {
                    var slider = sliderInstances[i];
                    slider.initialized || (slider._docReady = !0,
                    slider._init())
                }
            return _onerror ? _onerror.apply(this, arguments) : !1
        }
        ,
        _ready.apply(this, arguments)
    }
}(jQuery, window, document),
window.MSViewEvents = function(type, data) {
    this.type = type,
    this.data = data
}
,
MSViewEvents.SWIPE_START = "swipeStart",
MSViewEvents.SWIPE_END = "swipeEnd",
MSViewEvents.SWIPE_MOVE = "swipeMove",
MSViewEvents.SWIPE_CANCEL = "swipeCancel",
MSViewEvents.SCROLL = "scroll",
MSViewEvents.CHANGE_START = "slideChangeStart",
MSViewEvents.CHANGE_END = "slideChangeEnd",
function($) {
    "use strict";
    window.MSBasicView = function(options) {
        this.options = {
            loop: !1,
            dir: "h",
            autoHeight: !1,
            spacing: 5,
            mouseSwipe: !0,
            swipe: !0,
            speed: 17,
            minSlideSpeed: 2,
            viewNum: 20,
            critMargin: 1
        },
        $.extend(this.options, options),
        this.dir = this.options.dir,
        this.loop = this.options.loop,
        this.spacing = this.options.spacing,
        this.__width = 0,
        this.__height = 0,
        this.__cssProb = "h" === this.dir ? "left" : "top",
        this.__offset = "h" === this.dir ? "offsetLeft" : "offsetTop",
        this.__dimension = "h" === this.dir ? "__width" : "__height",
        this.__translate_end = window._css3d ? " translateZ(0px)" : "",
        this.$slideCont = $("<div></div>").addClass("ms-slide-container"),
        this.$element = $("<div></div>").addClass("ms-view").addClass("ms-basic-view").append(this.$slideCont),
        this.currentSlide = null,
        this.index = -1,
        this.slidesCount = 0,
        this.slides = [],
        this.slideList = [],
        this.viewSlidesList = [],
        this.css3 = window._cssanim,
        this.start_buffer = 0,
        this.firstslide_snap = 0,
        this.slideChanged = !1,
        this.controller = new Controller(0,0,{
            snapping: !0,
            snapsize: 100,
            paging: !0,
            snappingMinSpeed: this.options.minSlideSpeed,
            friction: (100 - .5 * this.options.speed) / 100,
            endless: this.loop
        }),
        this.controller.renderCallback("h" === this.dir ? this._horizUpdate : this._vertiUpdate, this),
        this.controller.snappingCallback(this.__snapUpdate, this),
        this.controller.snapCompleteCallback(this.__snapCompelet, this),
        averta.EventDispatcher.call(this)
    }
    ;
    var p = MSBasicView.prototype;
    p.__snapCompelet = function() {
        this.slideChanged && (this.slideChanged = !1,
        this.__locateSlides(),
        this.start_buffer = 0,
        this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_END)))
    }
    ,
    p.__snapUpdate = function(controller, snap, change) {
        if (this.loop) {
            var target_index = this.index + change;
            this.updateLoop(target_index),
            target_index >= this.slidesCount && (target_index -= this.slidesCount),
            0 > target_index && (target_index = this.slidesCount + target_index),
            this.index = target_index
        } else {
            if (0 > snap || snap >= this.slidesCount)
                return;
            this.index = snap
        }
        this._checkCritMargins(),
        $.browser.mozilla && (this.slideList[this.index].$element[0].style.marginTop = "0.1px",
        this.currentSlide && (this.currentSlide.$element[0].style.marginTop = ""));
        var new_slide = this.slideList[this.index];
        new_slide !== this.currentSlide && (this.currentSlide = new_slide,
        this.autoUpdateZIndex && this.__updateSlidesZindex(),
        this.slideChanged = !0,
        this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_START)))
    }
    ,
    p._checkCritMargins = function() {
        if (!this.normalMode) {
            var hlf = Math.floor(this.options.viewNum / 2)
              , inView = this.viewSlidesList.indexOf(this.slideList[this.index])
              , size = this[this.__dimension] + this.spacing
              , cm = this.options.critMargin;
            return this.loop ? void ((cm >= inView || inView >= this.viewSlidesList.length - cm) && (size *= inView - hlf,
            this.__locateSlides(!1, size + this.start_buffer),
            this.start_buffer += size)) : void ((cm > inView && this.index >= cm || inView >= this.viewSlidesList.length - cm && this.index < this.slidesCount - cm) && this.__locateSlides(!1))
        }
    }
    ,
    p._vertiUpdate = function(controller, value) {
        return this.__contPos = value,
        this.dispatchEvent(new MSViewEvents(MSViewEvents.SCROLL)),
        this.css3 ? void (this.$slideCont[0].style[window._jcsspfx + "Transform"] = "translateY(" + -value + "px)" + this.__translate_end) : void (this.$slideCont[0].style.top = -value + "px")
    }
    ,
    p._horizUpdate = function(controller, value) {
        return this.__contPos = value,
        this.dispatchEvent(new MSViewEvents(MSViewEvents.SCROLL)),
        this.css3 ? void (this.$slideCont[0].style[window._jcsspfx + "Transform"] = "translateX(" + -value + "px)" + this.__translate_end) : void (this.$slideCont[0].style.left = -value + "px")
    }
    ,
    p.__updateViewList = function() {
        if (this.normalMode)
            return void (this.viewSlidesList = this.slides);
        var temp = this.viewSlidesList.slice();
        this.viewSlidesList = [];
        var l, i = 0, hlf = Math.floor(this.options.viewNum / 2);
        if (this.loop)
            for (; i !== this.options.viewNum; i++)
                this.viewSlidesList.push(this.slides[this.currentSlideLoc - hlf + i]);
        else {
            for (i = 0; i !== hlf && this.index - i !== -1; i++)
                this.viewSlidesList.unshift(this.slideList[this.index - i]);
            for (i = 1; i !== hlf && this.index + i !== this.slidesCount; i++)
                this.viewSlidesList.push(this.slideList[this.index + i])
        }
        for (i = 0,
        l = temp.length; i !== l; i++)
            -1 === this.viewSlidesList.indexOf(temp[i]) && temp[i].sleep();
        temp = null,
        this.currentSlide && this.__updateSlidesZindex()
    }
    ,
    p.__locateSlides = function(move, start) {
        this.__updateViewList(),
        start = this.loop ? start || 0 : this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing);
        for (var slide, l = this.viewSlidesList.length, i = 0; i !== l; i++) {
            var pos = start + i * (this[this.__dimension] + this.spacing);
            slide = this.viewSlidesList[i],
            slide.wakeup(),
            slide.position = pos,
            slide.$element[0].style[this.__cssProb] = pos + "px"
        }
        move !== !1 && this.controller.changeTo(this.slideList[this.index].position, !1, null, null, !1)
    }
    ,
    p.__createLoopList = function() {
        var return_arr = []
          , i = 0
          , count = this.slidesCount / 2
          , before_count = this.slidesCount % 2 === 0 ? count - 1 : Math.floor(count)
          , after_count = this.slidesCount % 2 === 0 ? count : Math.floor(count);
        for (this.currentSlideLoc = before_count,
        i = 1; before_count >= i; ++i)
            return_arr.unshift(this.slideList[this.index - i < 0 ? this.slidesCount - i + this.index : this.index - i]);
        for (return_arr.push(this.slideList[this.index]),
        i = 1; after_count >= i; ++i)
            return_arr.push(this.slideList[this.index + i >= this.slidesCount ? this.index + i - this.slidesCount : this.index + i]);
        return return_arr
    }
    ,
    p.__getSteps = function(index, target) {
        var right = index > target ? this.slidesCount - index + target : target - index
          , left = Math.abs(this.slidesCount - right);
        return left > right ? right : -left
    }
    ,
    p.__pushEnd = function() {
        var first_slide = this.slides.shift()
          , last_slide = this.slides[this.slidesCount - 2];
        if (this.slides.push(first_slide),
        this.normalMode) {
            var pos = last_slide.$element[0][this.__offset] + this.spacing + this[this.__dimension];
            first_slide.$element[0].style[this.__cssProb] = pos + "px",
            first_slide.position = pos
        }
    }
    ,
    p.__pushStart = function() {
        var last_slide = this.slides.pop()
          , first_slide = this.slides[0];
        if (this.slides.unshift(last_slide),
        this.normalMode) {
            var pos = first_slide.$element[0][this.__offset] - this.spacing - this[this.__dimension];
            last_slide.$element[0].style[this.__cssProb] = pos + "px",
            last_slide.position = pos
        }
    }
    ,
    p.__updateSlidesZindex = function() {
        {
            var slide, l = this.viewSlidesList.length;
            Math.floor(l / 2)
        }
        if (this.loop)
            for (var loc = this.viewSlidesList.indexOf(this.currentSlide), i = 0; i !== l; i++)
                slide = this.viewSlidesList[i],
                this.viewSlidesList[i].$element.css("z-index", loc >= i ? i + 1 : l - i);
        else {
            for (var beforeNum = this.currentSlide.index - this.viewSlidesList[0].index, i = 0; i !== l; i++)
                this.viewSlidesList[i].$element.css("z-index", beforeNum >= i ? i + 1 : l - i);
            this.currentSlide.$element.css("z-index", l)
        }
    }
    ,
    p.addSlide = function(slide) {
        slide.view = this,
        this.slides.push(slide),
        this.slideList.push(slide),
        this.slidesCount++
    }
    ,
    p.appendSlide = function(slide) {
        this.$slideCont.append(slide.$element)
    }
    ,
    p.updateLoop = function(index) {
        if (this.loop)
            for (var steps = this.__getSteps(this.index, index), i = 0, l = Math.abs(steps); l > i; ++i)
                0 > steps ? this.__pushStart() : this.__pushEnd()
    }
    ,
    p.gotoSlide = function(index, fast) {
        this.updateLoop(index),
        this.index = index;
        var target_slide = this.slideList[index];
        this._checkCritMargins(),
        this.controller.changeTo(target_slide.position, !fast, null, null, !1),
        target_slide !== this.currentSlide && (this.slideChanged = !0,
        this.currentSlide = target_slide,
        this.autoUpdateZIndex && this.__updateSlidesZindex(),
        this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_START)),
        fast && this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_END)))
    }
    ,
    p.next = function(checkLoop) {
        return checkLoop && !this.loop && this.index + 1 >= this.slidesCount ? void this.controller.bounce(10) : void this.gotoSlide(this.index + 1 >= this.slidesCount ? 0 : this.index + 1)
    }
    ,
    p.previous = function(checkLoop) {
        return checkLoop && !this.loop && this.index - 1 < 0 ? void this.controller.bounce(-10) : void this.gotoSlide(this.index - 1 < 0 ? this.slidesCount - 1 : this.index - 1)
    }
    ,
    p.setupSwipe = function() {
        this.swipeControl = new averta.TouchSwipe(this.$element),
        this.swipeControl.swipeType = "h" === this.dir ? "horizontal" : "vertical";
        var that = this;
        this.swipeControl.onSwipe = "h" === this.dir ? function(status) {
            that.horizSwipeMove(status)
        }
        : function(status) {
            that.vertSwipeMove(status)
        }
    }
    ,
    p.vertSwipeMove = function(status) {
        var phase = status.phase;
        if ("start" === phase)
            this.controller.stop(),
            this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_START,status));
        else if ("move" === phase && (!this.loop || Math.abs(this.currentSlide.position - this.controller.value + status.moveY) < this.cont_size / 2))
            this.controller.drag(status.moveY),
            this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_MOVE,status));
        else if ("end" === phase || "cancel" === phase) {
            var speed = status.distanceY / status.duration * 50 / 3
              , speedh = Math.abs(status.distanceY / status.duration * 50 / 3);
            Math.abs(speed) > .1 && Math.abs(speed) >= speedh ? (this.controller.push(-speed),
            speed > this.controller.options.snappingMinSpeed && this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_END,status))) : (this.controller.cancel(),
            this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_CANCEL,status)))
        }
    }
    ,
    p.horizSwipeMove = function(status) {
        var phase = status.phase;
        if ("start" === phase)
            this.controller.stop(),
            this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_START,status));
        else if ("move" === phase && (!this.loop || Math.abs(this.currentSlide.position - this.controller.value + status.moveX) < this.cont_size / 2))
            this.controller.drag(status.moveX),
            this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_MOVE,status));
        else if ("end" === phase || "cancel" === phase) {
            var speed = status.distanceX / status.duration * 50 / 3
              , speedv = Math.abs(status.distanceY / status.duration * 50 / 3);
            Math.abs(speed) > .1 && Math.abs(speed) >= speedv ? (this.controller.push(-speed),
            speed > this.controller.options.snappingMinSpeed && this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_END,status))) : (this.controller.cancel(),
            this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_CANCEL,status)))
        }
    }
    ,
    p.setSize = function(width, height, hard) {
        if (this.lastWidth !== width || height !== this.lastHeight || hard) {
            this.$element.width(width).height(height);
            for (var i = 0; i < this.slidesCount; ++i)
                this.slides[i].setSize(width, height, hard);
            this.__width = width,
            this.__height = height,
            this.__created && (this.__locateSlides(),
            this.cont_size = (this.slidesCount - 1) * (this[this.__dimension] + this.spacing),
            this.loop || (this.controller._max_value = this.cont_size),
            this.controller.options.snapsize = this[this.__dimension] + this.spacing,
            this.controller.changeTo(this.currentSlide.position, !1, null, null, !1),
            this.controller.cancel(),
            this.lastWidth = width,
            this.lastHeight = height)
        }
    }
    ,
    p.create = function(index) {
        this.__created = !0,
        this.index = Math.min(index || 0, this.slidesCount - 1),
        this.lastSnap = this.index,
        this.loop && (this.slides = this.__createLoopList()),
        this.normalMode = this.slidesCount <= this.options.viewNum;
        for (var i = 0; i < this.slidesCount; ++i)
            this.slides[i].create();
        this.__locateSlides(),
        this.controller.options.snapsize = this[this.__dimension] + this.spacing,
        this.loop || (this.controller._max_value = (this.slidesCount - 1) * (this[this.__dimension] + this.spacing)),
        this.gotoSlide(this.index, !0),
        this.options.swipe && (window._touch || this.options.mouseSwipe) && this.setupSwipe()
    }
    ,
    p.destroy = function() {
        if (this.__created) {
            for (var i = 0; i < this.slidesCount; ++i)
                this.slides[i].destroy();
            this.slides = null,
            this.slideList = null,
            this.$element.remove(),
            this.controller.destroy(),
            this.controller = null
        }
    }
    ,
    averta.EventDispatcher.extend(p),
    MSSlideController.registerView("basic", MSBasicView)
}(jQuery),
function() {
    "use strict";
    window.MSWaveView = function(options) {
        MSBasicView.call(this, options),
        this.$element.removeClass("ms-basic-view").addClass("ms-wave-view"),
        this.$slideCont.css(window._csspfx + "transform-style", "preserve-3d"),
        this.autoUpdateZIndex = !0
    }
    ,
    MSWaveView.extend(MSBasicView),
    MSWaveView._3dreq = !0,
    MSWaveView._fallback = MSBasicView;
    var p = MSWaveView.prototype
      , _super = MSBasicView.prototype;
    p._horizUpdate = function(controller, value) {
        _super._horizUpdate.call(this, controller, value);
        for (var slide, distance, cont_scroll = -value, i = 0; i < this.slidesCount; ++i)
            slide = this.slideList[i],
            distance = -cont_scroll - slide.position,
            this.__updateSlidesHoriz(slide, distance)
    }
    ,
    p._vertiUpdate = function(controller, value) {
        _super._vertiUpdate.call(this, controller, value);
        for (var slide, distance, cont_scroll = -value, i = 0; i < this.slidesCount; ++i)
            slide = this.slideList[i],
            distance = -cont_scroll - slide.position,
            this.__updateSlidesVertic(slide, distance)
    }
    ,
    p.__updateSlidesHoriz = function(slide, distance) {
        var value = Math.abs(100 * distance / this.__width);
        slide.$element[0].style[window._csspfx + "transform"] = "translateZ(" + 3 * -value + "px) rotateY(0.01deg)"
    }
    ,
    p.__updateSlidesVertic = function(slide, distance) {
        this.__updateSlidesHoriz(slide, distance)
    }
    ,
    MSSlideController.registerView("wave", MSWaveView)
}(jQuery),
function() {
    window.MSFadeBasicView = function(options) {
        MSWaveView.call(this, options),
        this.$element.removeClass("ms-wave-view").addClass("ms-fade-basic-view")
    }
    ,
    MSFadeBasicView.extend(MSWaveView);
    {
        var p = MSFadeBasicView.prototype;
        MSFadeBasicView.prototype
    }
    p.__updateSlidesHoriz = function(slide, distance) {
        var value = Math.abs(.6 * distance / this.__width);
        value = 1 - Math.min(value, .6),
        slide.$element.css("opacity", value)
    }
    ,
    p.__updateSlidesVertic = function(slide, distance) {
        this.__updateSlidesHoriz(slide, distance)
    }
    ,
    MSSlideController.registerView("fadeBasic", MSFadeBasicView),
    MSWaveView._fallback = MSFadeBasicView
}(),
function() {
    window.MSFadeWaveView = function(options) {
        MSWaveView.call(this, options),
        this.$element.removeClass("ms-wave-view").addClass("ms-fade-wave-view")
    }
    ,
    MSFadeWaveView.extend(MSWaveView),
    MSFadeWaveView._3dreq = !0,
    MSFadeWaveView._fallback = MSFadeBasicView;
    {
        var p = MSFadeWaveView.prototype;
        MSWaveView.prototype
    }
    p.__updateSlidesHoriz = function(slide, distance) {
        var value = Math.abs(100 * distance / this.__width);
        value = Math.min(value, 100),
        slide.$element.css("opacity", 1 - value / 300),
        slide.$element[0].style[window._jcsspfx + "Transform"] = "scale(" + (1 - value / 800) + ") rotateY(0.01deg) "
    }
    ,
    p.__updateSlidesVertic = function(slide, distance) {
        this.__updateSlidesHoriz(slide, distance)
    }
    ,
    MSSlideController.registerView("fadeWave", MSFadeWaveView)
}(),
function() {
    "use strict";
    window.MSFlowView = function(options) {
        MSWaveView.call(this, options),
        this.$element.removeClass("ms-wave-view").addClass("ms-flow-view")
    }
    ,
    MSFlowView.extend(MSWaveView),
    MSFlowView._3dreq = !0,
    MSFlowView._fallback = MSFadeBasicView;
    {
        var p = MSFlowView.prototype;
        MSWaveView.prototype
    }
    p.__updateSlidesHoriz = function(slide, distance) {
        var value = Math.abs(100 * distance / this.__width)
          , rvalue = Math.min(.3 * value, 30) * (0 > distance ? -1 : 1)
          , zvalue = 1.2 * value;
        slide.$element[0].style[window._jcsspfx + "Transform"] = "translateZ(" + 5 * -zvalue + "px) rotateY(" + rvalue + "deg) "
    }
    ,
    p.__updateSlidesVertic = function(slide, distance) {
        var value = Math.abs(100 * distance / this.__width)
          , rvalue = Math.min(.3 * value, 30) * (0 > distance ? -1 : 1)
          , zvalue = 1.2 * value;
        slide.$element[0].style[window._jcsspfx + "Transform"] = "translateZ(" + 5 * -zvalue + "px) rotateX(" + -rvalue + "deg) "
    }
    ,
    MSSlideController.registerView("flow", MSFlowView)
}(jQuery),
function() {
    window.MSFadeFlowView = function(options) {
        MSWaveView.call(this, options),
        this.$element.removeClass("ms-wave-view").addClass("ms-fade-flow-view")
    }
    ,
    MSFadeFlowView.extend(MSWaveView),
    MSFadeFlowView._3dreq = !0;
    {
        var p = MSFadeFlowView.prototype;
        MSWaveView.prototype
    }
    p.__calculate = function(distance) {
        var value = Math.min(Math.abs(100 * distance / this.__width), 100)
          , rvalue = Math.min(.5 * value, 50) * (0 > distance ? -1 : 1);
        return {
            value: value,
            rvalue: rvalue
        }
    }
    ,
    p.__updateSlidesHoriz = function(slide, distance) {
        var clc = this.__calculate(distance);
        slide.$element.css("opacity", 1 - clc.value / 300),
        slide.$element[0].style[window._jcsspfx + "Transform"] = "translateZ(" + -clc.value + "px) rotateY(" + clc.rvalue + "deg) "
    }
    ,
    p.__updateSlidesVertic = function(slide, distance) {
        var clc = this.__calculate(distance);
        slide.$element.css("opacity", 1 - clc.value / 300),
        slide.$element[0].style[window._jcsspfx + "Transform"] = "translateZ(" + -clc.value + "px) rotateX(" + -clc.rvalue + "deg) "
    }
    ,
    MSSlideController.registerView("fadeFlow", MSFadeFlowView)
}(),
function($) {
    "use strict";
    window.MSMaskView = function(options) {
        MSBasicView.call(this, options),
        this.$element.removeClass("ms-basic-view").addClass("ms-mask-view")
    }
    ,
    MSMaskView.extend(MSBasicView);
    var p = MSMaskView.prototype
      , _super = MSBasicView.prototype;
    p.addSlide = function(slide) {
        slide.view = this,
        slide.$frame = $("<div></div>").addClass("ms-mask-frame").append(slide.$element),
        slide.$element[0].style.position = "relative",
        slide.autoAppend = !1,
        this.slides.push(slide),
        this.slideList.push(slide),
        this.slidesCount++
    }
    ,
    p.setSize = function(width, height) {
        for (var slider = this.slides[0].slider, i = 0; i < this.slidesCount; ++i)
            this.slides[i].$frame[0].style.width = width + "px",
            slider.options.autoHeight || (this.slides[i].$frame[0].style.height = height + "px");
        _super.setSize.call(this, width, height)
    }
    ,
    p._horizUpdate = function(controller, value) {
        _super._horizUpdate.call(this, controller, value);
        var i = 0;
        if (this.css3)
            for (i = 0; i < this.slidesCount; ++i)
                this.slideList[i].$element[0].style[window._jcsspfx + "Transform"] = "translateX(" + (value - this.slideList[i].position) + "px)" + this.__translate_end;
        else
            for (i = 0; i < this.slidesCount; ++i)
                this.slideList[i].$element[0].style.left = value - this.slideList[i].position + "px"
    }
    ,
    p._vertiUpdate = function(controller, value) {
        _super._vertiUpdate.call(this, controller, value);
        var i = 0;
        if (this.css3)
            for (i = 0; i < this.slidesCount; ++i)
                this.slideList[i].$element[0].style[window._jcsspfx + "Transform"] = "translateY(" + (value - this.slideList[i].position) + "px)" + this.__translate_end;
        else
            for (i = 0; i < this.slidesCount; ++i)
                this.slideList[i].$element[0].style.top = value - this.slideList[i].position + "px"
    }
    ,
    p.__pushEnd = function() {
        var first_slide = this.slides.shift()
          , last_slide = this.slides[this.slidesCount - 2];
        if (this.slides.push(first_slide),
        this.normalMode) {
            var pos = last_slide.$frame[0][this.__offset] + this.spacing + this[this.__dimension];
            first_slide.$frame[0].style[this.__cssProb] = pos + "px",
            first_slide.position = pos
        }
    }
    ,
    p.__pushStart = function() {
        var last_slide = this.slides.pop()
          , first_slide = this.slides[0];
        if (this.slides.unshift(last_slide),
        this.normalMode) {
            var pos = first_slide.$frame[0][this.__offset] - this.spacing - this[this.__dimension];
            last_slide.$frame[0].style[this.__cssProb] = pos + "px",
            last_slide.position = pos
        }
    }
    ,
    p.__updateViewList = function() {
        if (this.normalMode)
            return void (this.viewSlidesList = this.slides);
        var temp = this.viewSlidesList.slice();
        this.viewSlidesList = [];
        var l, i = 0, hlf = Math.floor(this.options.viewNum / 2);
        if (this.loop)
            for (; i !== this.options.viewNum; i++)
                this.viewSlidesList.push(this.slides[this.currentSlideLoc - hlf + i]);
        else {
            for (i = 0; i !== hlf && this.index - i !== -1; i++)
                this.viewSlidesList.unshift(this.slideList[this.index - i]);
            for (i = 1; i !== hlf && this.index + i !== this.slidesCount; i++)
                this.viewSlidesList.push(this.slideList[this.index + i])
        }
        for (i = 0,
        l = temp.length; i !== l; i++)
            -1 === this.viewSlidesList.indexOf(temp[i]) && (temp[i].sleep(),
            temp[i].$frame.detach());
        temp = null
    }
    ,
    p.__locateSlides = function(move, start) {
        this.__updateViewList(),
        start = this.loop ? start || 0 : this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing);
        for (var slide, l = this.viewSlidesList.length, i = 0; i !== l; i++) {
            var pos = start + i * (this[this.__dimension] + this.spacing);
            if (slide = this.viewSlidesList[i],
            this.$slideCont.append(slide.$frame),
            slide.wakeup(!1),
            slide.position = pos,
            slide.selected && slide.bgvideo)
                try {
                    slide.bgvideo.play()
                } catch (e) {}
            slide.$frame[0].style[this.__cssProb] = pos + "px"
        }
        move !== !1 && this.controller.changeTo(this.slideList[this.index].position, !1, null, null, !1)
    }
    ,
    MSSlideController.registerView("mask", MSMaskView)
}(jQuery),
function() {
    "use strict";
    window.MSParallaxMaskView = function(options) {
        MSMaskView.call(this, options),
        this.$element.removeClass("ms-basic-view").addClass("ms-parallax-mask-view")
    }
    ,
    MSParallaxMaskView.extend(MSMaskView),
    MSParallaxMaskView.parallaxAmount = .5;
    var p = MSParallaxMaskView.prototype
      , _super = MSBasicView.prototype;
    p._horizUpdate = function(controller, value) {
        _super._horizUpdate.call(this, controller, value);
        var i = 0;
        if (this.css3)
            for (i = 0; i < this.slidesCount; ++i)
                this.slideList[i].$element[0].style[window._jcsspfx + "Transform"] = "translateX(" + (value - this.slideList[i].position) * MSParallaxMaskView.parallaxAmount + "px)" + this.__translate_end;
        else
            for (i = 0; i < this.slidesCount; ++i)
                this.slideList[i].$element[0].style.left = (value - this.slideList[i].position) * MSParallaxMaskView.parallaxAmount + "px"
    }
    ,
    p._vertiUpdate = function(controller, value) {
        _super._vertiUpdate.call(this, controller, value);
        var i = 0;
        if (this.css3)
            for (i = 0; i < this.slidesCount; ++i)
                this.slideList[i].$element[0].style[window._jcsspfx + "Transform"] = "translateY(" + (value - this.slideList[i].position) * MSParallaxMaskView.parallaxAmount + "px)" + this.__translate_end;
        else
            for (i = 0; i < this.slidesCount; ++i)
                this.slideList[i].$element[0].style.top = (value - this.slideList[i].position) * MSParallaxMaskView.parallaxAmount + "px"
    }
    ,
    MSSlideController.registerView("parallaxMask", MSParallaxMaskView)
}(jQuery),
function() {
    "use strict";
    window.MSFadeView = function(options) {
        MSBasicView.call(this, options),
        this.$element.removeClass("ms-basic-view").addClass("ms-fade-view"),
        this.controller.renderCallback(this.__update, this)
    }
    ,
    MSFadeView.extend(MSBasicView);
    var p = MSFadeView.prototype
      , _super = MSBasicView.prototype;
    p.__update = function(controller, value) {
        for (var slide, distance, cont_scroll = -value, i = 0; i < this.slidesCount; ++i)
            slide = this.slideList[i],
            distance = -cont_scroll - slide.position,
            this.__updateSlides(slide, distance)
    }
    ,
    p.__updateSlides = function(slide, distance) {
        var value = Math.abs(distance / this[this.__dimension]);
        0 >= 1 - value ? slide.$element.fadeTo(0, 0).css("visibility", "hidden") : slide.$element.fadeTo(0, 1 - value).css("visibility", "")
    }
    ,
    p.__locateSlides = function(move, start) {
        this.__updateViewList(),
        start = this.loop ? start || 0 : this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing);
        for (var slide, l = this.viewSlidesList.length, i = 0; i !== l; i++) {
            var pos = start + i * this[this.__dimension];
            slide = this.viewSlidesList[i],
            slide.wakeup(),
            slide.position = pos
        }
        move !== !1 && this.controller.changeTo(this.slideList[this.index].position, !1, null, null, !1)
    }
    ,
    p.__pushEnd = function() {
        var first_slide = this.slides.shift()
          , last_slide = this.slides[this.slidesCount - 2];
        this.slides.push(first_slide),
        first_slide.position = last_slide.position + this[this.__dimension]
    }
    ,
    p.__pushStart = function() {
        var last_slide = this.slides.pop()
          , first_slide = this.slides[0];
        this.slides.unshift(last_slide),
        last_slide.position = first_slide.position - this[this.__dimension]
    }
    ,
    p.create = function(index) {
        _super.create.call(this, index),
        this.spacing = 0,
        this.controller.options.minValidDist = 10
    }
    ,
    MSSlideController.registerView("fade", MSFadeView)
}(jQuery),
function() {
    "use strict";
    window.MSScaleView = function(options) {
        MSBasicView.call(this, options),
        this.$element.removeClass("ms-basic-view").addClass("ms-scale-view"),
        this.controller.renderCallback(this.__update, this)
    }
    ,
    MSScaleView.extend(MSFadeView);
    var p = MSScaleView.prototype
      , _super = MSFadeView.prototype;
    p.__updateSlides = function(slide, distance) {
        var value = Math.abs(distance / this[this.__dimension])
          , element = slide.$element[0];
        0 >= 1 - value ? (element.style.opacity = 0,
        element.style.visibility = "hidden",
        element.style[window._jcsspfx + "Transform"] = "") : (element.style.opacity = 1 - value,
        element.style.visibility = "",
        element.style[window._jcsspfx + "Transform"] = "perspective(2000px) translateZ(" + value * (0 > distance ? -.5 : .5) * 300 + "px)")
    }
    ,
    p.create = function(index) {
        _super.create.call(this, index),
        this.controller.options.minValidDist = .03
    }
    ,
    MSSlideController.registerView("scale", MSScaleView)
}(jQuery),
function() {
    "use strict";
    window.MSStackView = function(options) {
        MSBasicView.call(this, options),
        this.$element.removeClass("ms-basic-view").addClass("ms-stack-view"),
        this.controller.renderCallback(this.__update, this),
        this.autoUpdateZIndex = !0
    }
    ,
    MSStackView.extend(MSFadeView),
    MSStackView._3dreq = !0,
    MSStackView._fallback = MSFadeView;
    var p = MSStackView.prototype
      , _super = MSFadeView.prototype;
    p.__updateSlidesZindex = function() {
        for (var slide, l = this.viewSlidesList.length, i = 0; i !== l; i++)
            slide = this.viewSlidesList[i],
            this.viewSlidesList[i].$element.css("z-index", l - i)
    }
    ,
    p.__updateSlides = function(slide, distance) {
        var value = Math.abs(distance / this[this.__dimension])
          , element = slide.$element[0];
        0 >= 1 - value ? (element.style.opacity = 1,
        element.style.visibility = "hidden",
        element.style[window._jcsspfx + "Transform"] = "") : (element.style.visibility = "",
        element.style[window._jcsspfx + "Transform"] = 0 > distance ? "perspective(2000px) translateZ(" + -300 * value + "px)" : this.__translate + "(" + -value * this[this.__dimension] + "px)")
    }
    ,
    p.create = function(index) {
        _super.create.call(this, index),
        this.controller.options.minValidDist = .03,
        this.__translate = "h" === this.dir ? "translateX" : "translateY"
    }
    ,
    MSSlideController.registerView("stack", MSStackView)
}(jQuery),
function() {
    "use strict";
    var perspective = 2e3;
    window.MSFocusView = function(options) {
        MSWaveView.call(this, options),
        this.$element.removeClass("ms-wave-view").addClass("ms-focus-view"),
        this.options.centerSpace = this.options.centerSpace || 1
    }
    ,
    MSFocusView.extend(MSWaveView),
    MSFocusView._3dreq = !0,
    MSFocusView._fallback = MSFadeBasicView;
    {
        var p = MSFocusView.prototype;
        MSWaveView.prototype
    }
    p.__calcview = function(z, w) {
        var a = w / 2 * z / (z + perspective);
        return a * (z + perspective) / perspective
    }
    ,
    p.__updateSlidesHoriz = function(slide, distance) {
        var value = Math.abs(100 * distance / this.__width);
        value = 15 * -Math.min(value, 100),
        slide.$element.css(window._csspfx + "transform", "translateZ(" + (value + 1) + "px) rotateY(0.01deg) translateX(" + (0 > distance ? 1 : -1) * -this.__calcview(value, this.__width) * this.options.centerSpace + "px)")
    }
    ,
    p.__updateSlidesVertic = function(slide, distance) {
        var value = Math.abs(100 * distance / this.__width);
        value = 15 * -Math.min(value, 100),
        slide.$element.css(window._csspfx + "transform", "translateZ(" + (value + 1) + "px) rotateY(0.01deg) translateY(" + (0 > distance ? 1 : -1) * -this.__calcview(value, this.__width) * this.options.centerSpace + "px)")
    }
    ,
    MSSlideController.registerView("focus", MSFocusView)
}(),
function() {
    window.MSPartialWaveView = function(options) {
        MSWaveView.call(this, options),
        this.$element.removeClass("ms-wave-view").addClass("ms-partial-wave-view")
    }
    ,
    MSPartialWaveView.extend(MSWaveView),
    MSPartialWaveView._3dreq = !0,
    MSPartialWaveView._fallback = MSFadeBasicView;
    {
        var p = MSPartialWaveView.prototype;
        MSWaveView.prototype
    }
    p.__updateSlidesHoriz = function(slide, distance) {
        var value = Math.abs(100 * distance / this.__width);
        slide.hasBG && slide.$bg_img.css("opacity", (100 - Math.abs(120 * distance / this.__width / 3)) / 100),
        slide.$element.css(window._csspfx + "transform", "translateZ(" + 3 * -value + "px) rotateY(0.01deg) translateX(" + .75 * distance + "px)")
    }
    ,
    p.__updateSlidesVertic = function(slide, distance) {
        var value = Math.abs(100 * distance / this.__width);
        slide.hasBG && slide.$bg_img.css("opacity", (100 - Math.abs(120 * distance / this.__width / 3)) / 100),
        slide.$element.css(window._csspfx + "transform", "translateZ(" + 3 * -value + "px) rotateY(0.01deg) translateY(" + .75 * distance + "px)")
    }
    ,
    MSSlideController.registerView("partialWave", MSPartialWaveView)
}(),
function() {
    "use strict";
    window.MSBoxView = function(options) {
        MSBasicView.call(this, options),
        this.$element.removeClass("ms-basic-view").addClass("ms-box-view"),
        this.controller.renderCallback(this.__update, this)
    }
    ,
    MSBoxView.extend(MSFadeView),
    MSBoxView._3dreq = !0;
    var p = MSBoxView.prototype
      , _super = MSFadeView.prototype;
    p.__updateSlides = function(slide, distance) {
        var value = Math.abs(distance / this[this.__dimension])
          , element = slide.$element[0];
        0 >= 1 - value ? (element.style.visibility = "hidden",
        element.style[window._jcsspfx + "Transform"] = "") : (element.style.visibility = "",
        element.style[window._jcsspfx + "Transform"] = "rotate" + this._rotateDir + "(" + value * (0 > distance ? 1 : -1) * 90 * this._calcFactor + "deg)",
        element.style[window._jcsspfx + "TransformOrigin"] = "50% 50% -" + slide[this.__dimension] / 2 + "px",
        element.style.zIndex = Math.ceil(2 * (1 - value)))
    }
    ,
    p.create = function(index) {
        _super.create.call(this, index),
        this.controller.options.minValidDist = .03,
        this._rotateDir = "h" === this.options.dir ? "Y" : "X",
        this._calcFactor = "h" === this.options.dir ? 1 : -1
    }
    ,
    MSSlideController.registerView("box", MSBoxView)
}(jQuery),
function($) {
    "use strict";
    var BaseControl = function() {
        this.options = {
            prefix: "ms-",
            autohide: !0,
            overVideo: !0,
            customClass: null
        }
    }
      , p = BaseControl.prototype;
    p.slideAction = function() {}
    ,
    p.setup = function() {
        this.cont = this.options.insertTo ? $(this.options.insertTo) : this.slider.$controlsCont,
        this.options.overVideo || this._hideOnvideoStarts()
    }
    ,
    p.checkHideUnder = function() {
        this.options.hideUnder && (this.needsRealign = !this.options.insetTo && ("left" === this.options.align || "right" === this.options.align) && this.options.inset === !1,
        $(window).bind("resize", {
            that: this
        }, this.onResize),
        this.onResize())
    }
    ,
    p.onResize = function(event) {
        var that = event && event.data.that || this
          , w = window.innerWidth;
        w <= that.options.hideUnder && !that.detached ? (that.hide(!0),
        that.detached = !0,
        that.onDetach()) : w >= that.options.hideUnder && that.detached && (that.detached = !1,
        that.visible(),
        that.onAppend())
    }
    ,
    p.create = function() {
        this.options.autohide && (this.hide(!0),
        this.slider.$controlsCont.mouseenter($.proxy(this._onMouseEnter, this)).mouseleave($.proxy(this._onMouseLeave, this)).mousedown($.proxy(this._onMouseDown, this)),
        this.$element && this.$element.mouseenter($.proxy(this._onMouseEnter, this)).mouseleave($.proxy(this._onMouseLeave, this)).mousedown($.proxy(this._onMouseDown, this)),
        $(document).mouseup($.proxy(this._onMouseUp, this))),
        this.options.align && this.$element.addClass("ms-align-" + this.options.align),
        this.options.customClass && this.$element && this.$element.addClass(this.options.customClass)
    }
    ,
    p._onMouseEnter = function() {
        this._disableAH || this.mdown || this.visible(),
        this.mleave = !1
    }
    ,
    p._onMouseLeave = function() {
        this.mdown || this.hide(),
        this.mleave = !0
    }
    ,
    p._onMouseDown = function() {
        this.mdown = !0
    }
    ,
    p._onMouseUp = function() {
        this.mdown && this.mleave && this.hide(),
        this.mdown = !1
    }
    ,
    p.onAppend = function() {
        this.needsRealign && this.slider._realignControls()
    }
    ,
    p.onDetach = function() {
        this.needsRealign && this.slider._realignControls()
    }
    ,
    p._hideOnvideoStarts = function() {
        var that = this;
        this.slider.api.addEventListener(MSSliderEvent.VIDEO_PLAY, function() {
            that._disableAH = !0,
            that.hide()
        }),
        this.slider.api.addEventListener(MSSliderEvent.VIDEO_CLOSE, function() {
            that._disableAH = !1,
            that.visible()
        })
    }
    ,
    p.hide = function(fast) {
        if (fast)
            this.$element.css("opacity", 0),
            this.$element.css("display", "none");
        else {
            clearTimeout(this.hideTo);
            var $element = this.$element;
            this.hideTo = setTimeout(function() {
                CTween.fadeOut($element, 400, !1)
            }, 20)
        }
        this.$element.addClass("ms-ctrl-hide")
    }
    ,
    p.visible = function() {
        this.detached || (clearTimeout(this.hideTo),
        this.$element.css("display", ""),
        CTween.fadeIn(this.$element, 400, !1),
        this.$element.removeClass("ms-ctrl-hide"))
    }
    ,
    p.destroy = function() {
        this.options && this.options.hideUnder && $(window).unbind("resize", this.onResize)
    }
    ,
    window.BaseControl = BaseControl
}(jQuery),
function($) {
    "use strict";
    var MSArrows = function(options) {
        BaseControl.call(this),
        $.extend(this.options, options)
    };
    MSArrows.extend(BaseControl);
    var p = MSArrows.prototype
      , _super = BaseControl.prototype;
    p.setup = function() {
        var that = this;
        this.$next = $("<div></div>").addClass(this.options.prefix + "nav-next").bind("click", function() {
            that.slider.api.next(!0)
        }),
        this.$prev = $("<div></div>").addClass(this.options.prefix + "nav-prev").bind("click", function() {
            that.slider.api.previous(!0)
        }),
        _super.setup.call(this),
        this.cont.append(this.$next),
        this.cont.append(this.$prev),
        this.checkHideUnder()
    }
    ,
    p.hide = function(fast) {
        return fast ? (this.$prev.css("opacity", 0).css("display", "none"),
        void this.$next.css("opacity", 0).css("display", "none")) : (CTween.fadeOut(this.$prev, 400, !1),
        CTween.fadeOut(this.$next, 400, !1),
        this.$prev.addClass("ms-ctrl-hide"),
        void this.$next.addClass("ms-ctrl-hide"))
    }
    ,
    p.visible = function() {
        this.detached || (CTween.fadeIn(this.$prev, 400),
        CTween.fadeIn(this.$next, 400),
        this.$prev.removeClass("ms-ctrl-hide").css("display", ""),
        this.$next.removeClass("ms-ctrl-hide").css("display", ""))
    }
    ,
    p.destroy = function() {
        _super.destroy(),
        this.$next.remove(),
        this.$prev.remove()
    }
    ,
    window.MSArrows = MSArrows,
    MSSlideController.registerControl("arrows", MSArrows)
}(jQuery),
function($) {
    "use strict";
    var MSThumblist = function(options) {
        BaseControl.call(this),
        this.options.dir = "h",
        this.options.wheel = "v" === options.dir,
        this.options.arrows = !1,
        this.options.speed = 17,
        this.options.align = null,
        this.options.inset = !1,
        this.options.margin = 10,
        this.options.space = 10,
        this.options.width = 100,
        this.options.height = 100,
        this.options.type = "thumbs",
        this.options.hover = !1,
        $.extend(this.options, options),
        this.thumbs = [],
        this.index_count = 0,
        this.__dimen = "h" === this.options.dir ? "width" : "height",
        this.__alignsize = "h" === this.options.dir ? "height" : "width",
        this.__jdimen = "h" === this.options.dir ? "outerWidth" : "outerHeight",
        this.__pos = "h" === this.options.dir ? "left" : "top",
        this.click_enable = !0
    };
    MSThumblist.extend(BaseControl);
    var p = MSThumblist.prototype
      , _super = BaseControl.prototype;
    p.setup = function() {
        if (this.$element = $("<div></div>").addClass(this.options.prefix + "thumb-list"),
        "tabs" === this.options.type && this.$element.addClass(this.options.prefix + "tabs"),
        this.$element.addClass("ms-dir-" + this.options.dir),
        _super.setup.call(this),
        this.$element.appendTo(this.slider.$controlsCont === this.cont ? this.slider.$element : this.cont),
        this.$thumbscont = $("<div></div>").addClass("ms-thumbs-cont").appendTo(this.$element),
        this.options.arrows) {
            var that = this;
            this.$fwd = $("<div></div>").addClass("ms-thumblist-fwd").appendTo(this.$element).click(function() {
                that.controller.push(-15)
            }),
            this.$bwd = $("<div></div>").addClass("ms-thumblist-bwd").appendTo(this.$element).click(function() {
                that.controller.push(15)
            })
        }
        if (!this.options.insetTo && this.options.align) {
            var align = this.options.align;
            this.options.inset ? this.$element.css(align, this.options.margin) : "top" === align ? this.$element.detach().prependTo(this.slider.$element).css({
                "margin-bottom": this.options.margin,
                position: "relative"
            }) : "bottom" === align ? this.$element.css({
                "margin-top": this.options.margin,
                position: "relative"
            }) : (this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this),
            this.align()),
            "v" === this.options.dir ? this.$element.width(this.options.width) : this.$element.height(this.options.height)
        }
        this.checkHideUnder()
    }
    ,
    p.align = function() {
        if (!this.detached) {
            var align = this.options.align
              , pos = this.slider.reserveSpace(align, this.options[this.__alignsize] + 2 * this.options.margin);
            this.$element.css(align, -pos - this.options[this.__alignsize] - this.options.margin)
        }
    }
    ,
    p.slideAction = function(slide) {
        var thumb_ele = slide.$element.find(".ms-thumb")
          , that = this
          , thumb_frame = $("<div></div>").addClass("ms-thumb-frame").append(thumb_ele).append($('<div class="ms-thumb-ol"></div>')).bind(this.options.hover ? "hover" : "click", function() {
            that.changeSlide(thumb_frame)
        });
        if (this.options.align && thumb_frame.width(this.options.width - ("v" === this.options.dir && "tabs" === this.options.type ? 12 : 0)).height(this.options.height).css("margin-" + ("v" === this.options.dir ? "bottom" : "right"), this.options.space),
        thumb_frame[0].index = this.index_count++,
        this.$thumbscont.append(thumb_frame),
        this.options.fillMode && thumb_ele.is("img")) {
            var aligner = new window.MSAligner(this.options.fillMode,thumb_frame,thumb_ele);
            thumb_ele[0].aligner = aligner,
            thumb_ele.one("load", function() {
                var $this = $(this);
                $this[0].aligner.init($this.width(), $this.height()),
                $this[0].aligner.align()
            }).each($.jqLoadFix)
        }
        $.browser.msie && thumb_ele.on("dragstart", function(event) {
            event.preventDefault()
        }),
        this.thumbs.push(thumb_frame)
    }
    ,
    p.create = function() {
        _super.create.call(this),
        this.__translate_end = window._css3d ? " translateZ(0px)" : "",
        this.controller = new Controller(0,0,{
            snappingMinSpeed: 2,
            friction: (100 - .5 * this.options.speed) / 100
        }),
        this.controller.renderCallback("h" === this.options.dir ? this._hMove : this._vMove, this);
        var that = this;
        this.resize_listener = function() {
            that.__resize()
        }
        ,
        $(window).bind("resize", this.resize_listener),
        this.thumbSize = this.thumbs[0][this.__jdimen](!0),
        this.setupSwipe(),
        this.__resize();
        var that = this;
        this.options.wheel && (this.wheellistener = function(event) {
            var e = window.event || event.orginalEvent || event
              , delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
            return that.controller.push(10 * -delta),
            !1
        }
        ,
        $.browser.mozilla ? this.$element[0].addEventListener("DOMMouseScroll", this.wheellistener) : this.$element.bind("mousewheel", this.wheellistener)),
        this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.update, this),
        this.slider.api.addEventListener(MSSliderEvent.HARD_UPDATE, this.realignThumbs, this),
        this.cindex = this.slider.api.index(),
        this.select(this.thumbs[this.cindex])
    }
    ,
    p._hMove = function(controller, value) {
        return this.__contPos = value,
        window._cssanim ? void (this.$thumbscont[0].style[window._jcsspfx + "Transform"] = "translateX(" + -value + "px)" + this.__translate_end) : void (this.$thumbscont[0].style.left = -value + "px")
    }
    ,
    p._vMove = function(controller, value) {
        return this.__contPos = value,
        window._cssanim ? void (this.$thumbscont[0].style[window._jcsspfx + "Transform"] = "translateY(" + -value + "px)" + this.__translate_end) : void (this.$thumbscont[0].style.top = -value + "px")
    }
    ,
    p.setupSwipe = function() {
        this.swipeControl = new averta.TouchSwipe(this.$element),
        this.swipeControl.swipeType = "h" === this.options.dir ? "horizontal" : "vertical";
        var that = this;
        this.swipeControl.onSwipe = "h" === this.options.dir ? function(status) {
            that.horizSwipeMove(status)
        }
        : function(status) {
            that.vertSwipeMove(status)
        }
    }
    ,
    p.vertSwipeMove = function(status) {
        if (!this.dTouch) {
            var phase = status.phase;
            if ("start" === phase)
                this.controller.stop();
            else if ("move" === phase)
                this.controller.drag(status.moveY);
            else if ("end" === phase || "cancel" === phase) {
                var speed = Math.abs(status.distanceY / status.duration * 50 / 3);
                speed > .1 ? this.controller.push(-status.distanceY / status.duration * 50 / 3) : (this.click_enable = !0,
                this.controller.cancel())
            }
        }
    }
    ,
    p.horizSwipeMove = function(status) {
        if (!this.dTouch) {
            var phase = status.phase;
            if ("start" === phase)
                this.controller.stop(),
                this.click_enable = !1;
            else if ("move" === phase)
                this.controller.drag(status.moveX);
            else if ("end" === phase || "cancel" === phase) {
                var speed = Math.abs(status.distanceX / status.duration * 50 / 3);
                speed > .1 ? this.controller.push(-status.distanceX / status.duration * 50 / 3) : (this.click_enable = !0,
                this.controller.cancel())
            }
        }
    }
    ,
    p.update = function() {
        var nindex = this.slider.api.index();
        this.cindex !== nindex && (null != this.cindex && this.unselect(this.thumbs[this.cindex]),
        this.cindex = nindex,
        this.select(this.thumbs[this.cindex]),
        this.dTouch || this.updateThumbscroll())
    }
    ,
    p.realignThumbs = function() {
        this.$element.find(".ms-thumb").each(function(index, thumb) {
            thumb.aligner && thumb.aligner.align()
        })
    }
    ,
    p.updateThumbscroll = function() {
        var pos = this.thumbSize * this.cindex;
        if (0 / 0 == this.controller.value && (this.controller.value = 0),
        pos - this.controller.value < 0)
            return void this.controller.gotoSnap(this.cindex, !0);
        if (pos + this.thumbSize - this.controller.value > this.$element[this.__dimen]()) {
            var first_snap = this.cindex - Math.floor(this.$element[this.__dimen]() / this.thumbSize) + 1;
            return void this.controller.gotoSnap(first_snap, !0)
        }
    }
    ,
    p.changeSlide = function(thumb) {
        this.click_enable && this.cindex !== thumb[0].index && this.slider.api.gotoSlide(thumb[0].index)
    }
    ,
    p.unselect = function(ele) {
        ele.removeClass("ms-thumb-frame-selected")
    }
    ,
    p.select = function(ele) {
        ele.addClass("ms-thumb-frame-selected")
    }
    ,
    p.__resize = function() {
        var size = this.$element[this.__dimen]();
        if (this.ls !== size) {
            this.ls = size,
            this.thumbSize = this.thumbs[0][this.__jdimen](!0);
            var len = this.slider.api.count() * this.thumbSize;
            this.$thumbscont[0].style[this.__dimen] = len + "px",
            size >= len ? (this.dTouch = !0,
            this.controller.stop(),
            this.$thumbscont[0].style[this.__pos] = .5 * (size - len) + "px",
            this.$thumbscont[0].style[window._jcsspfx + "Transform"] = "") : (this.dTouch = !1,
            this.click_enable = !0,
            this.$thumbscont[0].style[this.__pos] = "",
            this.controller._max_value = len - size,
            this.controller.options.snapsize = this.thumbSize,
            this.updateThumbscroll())
        }
    }
    ,
    p.destroy = function() {
        _super.destroy(),
        this.options.wheel && ($.browser.mozilla ? this.$element[0].removeEventListener("DOMMouseScroll", this.wheellistener) : this.$element.unbind("mousewheel", this.wheellistener),
        this.wheellistener = null),
        $(window).unbind("resize", this.resize_listener),
        this.$element.remove(),
        this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this),
        this.slider.api.removeEventListener(MSSliderEvent.CHANGE_START, this.update, this)
    }
    ,
    window.MSThumblist = MSThumblist,
    MSSlideController.registerControl("thumblist", MSThumblist)
}(jQuery),
function($) {
    "use strict";
    var MSBulltes = function(options) {
        BaseControl.call(this),
        this.options.dir = "h",
        this.options.inset = !0,
        this.options.margin = 10,
        this.options.space = 10,
        $.extend(this.options, options),
        this.bullets = []
    };
    MSBulltes.extend(BaseControl);
    var p = MSBulltes.prototype
      , _super = BaseControl.prototype;
    p.setup = function() {
        if (_super.setup.call(this),
        this.$element = $("<div></div>").addClass(this.options.prefix + "bullets").addClass("ms-dir-" + this.options.dir).appendTo(this.cont),
        this.$bullet_cont = $("<div></div>").addClass("ms-bullets-count").appendTo(this.$element),
        !this.options.insetTo && this.options.align) {
            var align = this.options.align;
            this.options.inset && this.$element.css(align, this.options.margin)
        }
        this.checkHideUnder()
    }
    ,
    p.create = function() {
        _super.create.call(this);
        var that = this;
        this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.update, this),
        this.cindex = this.slider.api.index();
        for (var i = 0; i < this.slider.api.count(); ++i) {
            var bullet = $("<div></div>").addClass("ms-bullet");
            bullet[0].index = i,
            bullet.on("click", function() {
                that.changeSlide(this.index)
            }),
            this.$bullet_cont.append(bullet),
            this.bullets.push(bullet),
            "h" === this.options.dir ? bullet.css("margin", this.options.space / 2) : bullet.css("margin", this.options.space)
        }
        "h" === this.options.dir ? this.$element.width(bullet.outerWidth(!0) * this.slider.api.count()) : this.$element.css("margin-top", -this.$element.outerHeight(!0) / 2),
        this.select(this.bullets[this.cindex])
    }
    ,
    p.update = function() {
        var nindex = this.slider.api.index();
        this.cindex !== nindex && (null != this.cindex && this.unselect(this.bullets[this.cindex]),
        this.cindex = nindex,
        this.select(this.bullets[this.cindex]))
    }
    ,
    p.changeSlide = function(index) {
        this.cindex !== index && this.slider.api.gotoSlide(index)
    }
    ,
    p.unselect = function(ele) {
        ele.removeClass("ms-bullet-selected")
    }
    ,
    p.select = function(ele) {
        ele.addClass("ms-bullet-selected")
    }
    ,
    p.destroy = function() {
        _super.destroy(),
        this.slider.api.removeEventListener(MSSliderEvent.CHANGE_START, this.update, this),
        this.$element.remove()
    }
    ,
    window.MSBulltes = MSBulltes,
    MSSlideController.registerControl("bullets", MSBulltes)
}(jQuery),
function($) {
    "use strict";
    var MSScrollbar = function(options) {
        BaseControl.call(this),
        this.options.dir = "h",
        this.options.autohide = !0,
        this.options.width = 4,
        this.options.color = "#3D3D3D",
        this.options.margin = 10,
        $.extend(this.options, options),
        this.__dimen = "h" === this.options.dir ? "width" : "height",
        this.__jdimen = "h" === this.options.dir ? "outerWidth" : "outerHeight",
        this.__pos = "h" === this.options.dir ? "left" : "top",
        this.__translate_end = window._css3d ? " translateZ(0px)" : "",
        this.__translate_start = "h" === this.options.dir ? " translateX(" : "translateY("
    };
    MSScrollbar.extend(BaseControl);
    var p = MSScrollbar.prototype
      , _super = BaseControl.prototype;
    p.setup = function() {
        if (this.$element = $("<div></div>").addClass(this.options.prefix + "sbar").addClass("ms-dir-" + this.options.dir),
        _super.setup.call(this),
        this.$element.appendTo(this.slider.$controlsCont === this.cont ? this.slider.$element : this.cont),
        this.$bar = $("<div></div>").addClass(this.options.prefix + "bar").appendTo(this.$element),
        this.slider.options.loop && (this.disable = !0,
        this.$element.remove()),
        "v" === this.options.dir ? this.$bar.width(this.options.width) : this.$bar.height(this.options.width),
        this.$bar.css("background-color", this.options.color),
        !this.options.insetTo && this.options.align) {
            this.$element.css("v" === this.options.dir ? {
                right: "auto",
                left: "auto"
            } : {
                top: "auto",
                bottom: "auto"
            });
            var align = this.options.align;
            this.options.inset ? this.$element.css(align, this.options.margin) : "top" === align ? this.$element.prependTo(this.slider.$element).css({
                "margin-bottom": this.options.margin,
                position: "relative"
            }) : "bottom" === align ? this.$element.css({
                "margin-top": this.options.margin,
                position: "relative"
            }) : (this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this),
            this.align())
        }
        this.checkHideUnder()
    }
    ,
    p.align = function() {
        if (!this.detached) {
            var align = this.options.align
              , pos = this.slider.reserveSpace(align, 2 * this.options.margin + this.options.width);
            this.$element.css(align, -pos - this.options.margin - this.options.width)
        }
    }
    ,
    p.create = function() {
        if (!this.disable) {
            this.scroller = this.slider.api.scroller,
            this.slider.api.view.addEventListener(MSViewEvents.SCROLL, this._update, this),
            this.slider.api.addEventListener(MSSliderEvent.RESIZE, this._resize, this),
            this._resize(),
            this.options.autohide && this.$bar.css("opacity", "0")
        }
    }
    ,
    p._resize = function() {
        this.vdimen = this.$element[this.__dimen](),
        this.bar_dimen = this.slider.api.view["__" + this.__dimen] * this.vdimen / this.scroller._max_value,
        this.$bar[this.__dimen](this.bar_dimen)
    }
    ,
    p._update = function() {
        var value = this.scroller.value * (this.vdimen - this.bar_dimen) / this.scroller._max_value;
        if (this.lvalue !== value) {
            if (this.lvalue = value,
            this.options.autohide) {
                clearTimeout(this.hto),
                this.$bar.css("opacity", "1");
                var that = this;
                this.hto = setTimeout(function() {
                    that.$bar.css("opacity", "0")
                }, 150)
            }
            return 0 > value ? void (this.$bar[0].style[this.__dimen] = this.bar_dimen + value + "px") : (value > this.vdimen - this.bar_dimen && (this.$bar[0].style[this.__dimen] = this.vdimen - value + "px"),
            window._cssanim ? void (this.$bar[0].style[window._jcsspfx + "Transform"] = this.__translate_start + value + "px)" + this.__translate_end) : void (this.$bar[0].style[this.__pos] = value + "px"))
        }
    }
    ,
    p.destroy = function() {
        _super.destroy(),
        this.slider.api.view.removeEventListener(MSViewEvents.SCROLL, this._update, this),
        this.slider.api.removeEventListener(MSSliderEvent.RESIZE, this._resize, this),
        this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this),
        this.$element.remove()
    }
    ,
    window.MSScrollbar = MSScrollbar,
    MSSlideController.registerControl("scrollbar", MSScrollbar)
}(jQuery),
function($) {
    "use strict";
    var MSTimerbar = function(options) {
        BaseControl.call(this),
        this.options.autohide = !1,
        this.options.width = 4,
        this.options.color = "#FFFFFF",
        this.options.inset = !0,
        this.options.margin = 0,
        $.extend(this.options, options)
    };
    MSTimerbar.extend(BaseControl);
    var p = MSTimerbar.prototype
      , _super = BaseControl.prototype;
    p.setup = function() {
        if (_super.setup.call(this),
        this.$element = $("<div></div>").addClass(this.options.prefix + "timerbar"),
        _super.setup.call(this),
        this.$element.appendTo(this.slider.$controlsCont === this.cont ? this.slider.$element : this.cont),
        this.$bar = $("<div></div>").addClass("ms-time-bar").appendTo(this.$element),
        "v" === this.options.dir ? (this.$bar.width(this.options.width),
        this.$element.width(this.options.width)) : (this.$bar.height(this.options.width),
        this.$element.height(this.options.width)),
        this.$bar.css("background-color", this.options.color),
        !this.options.insetTo && this.options.align) {
            this.$element.css({
                top: "auto",
                bottom: "auto"
            });
            var align = this.options.align;
            this.options.inset ? this.$element.css(align, this.options.margin) : "top" === align ? this.$element.prependTo(this.slider.$element).css({
                "margin-bottom": this.options.margin,
                position: "relative"
            }) : "bottom" === align ? this.$element.css({
                "margin-top": this.options.margin,
                position: "relative"
            }) : (this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this),
            this.align())
        }
        this.checkHideUnder()
    }
    ,
    p.align = function() {
        if (!this.detached) {
            var align = this.options.align
              , pos = this.slider.reserveSpace(align, 2 * this.options.margin + this.options.width);
            this.$element.css(align, -pos - this.options.margin - this.options.width)
        }
    }
    ,
    p.create = function() {
        _super.create.call(this),
        this.slider.api.addEventListener(MSSliderEvent.WAITING, this._update, this),
        this._update()
    }
    ,
    p._update = function() {
        this.$bar[0].style.width = this.slider.api._delayProgress + "%"
    }
    ,
    p.destroy = function() {
        _super.destroy(),
        this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this),
        this.slider.api.removeEventListener(MSSliderEvent.WAITING, this._update, this),
        this.$element.remove()
    }
    ,
    window.MSTimerbar = MSTimerbar,
    MSSlideController.registerControl("timebar", MSTimerbar)
}(jQuery),
function($) {
    "use strict";
    var MSCircleTimer = function(options) {
        BaseControl.call(this),
        this.options.color = "#A2A2A2",
        this.options.stroke = 10,
        this.options.radius = 4,
        this.options.autohide = !1,
        $.extend(this.options, options)
    };
    MSCircleTimer.extend(BaseControl);
    var p = MSCircleTimer.prototype
      , _super = BaseControl.prototype;
    p.setup = function() {
        return _super.setup.call(this),
        this.$element = $("<div></div>").addClass(this.options.prefix + "ctimer").appendTo(this.cont),
        this.$canvas = $("<canvas></canvas>").addClass("ms-ctimer-canvas").appendTo(this.$element),
        this.$bar = $("<div></div>").addClass("ms-ctimer-bullet").appendTo(this.$element),
        this.$canvas[0].getContext ? (this.ctx = this.$canvas[0].getContext("2d"),
        this.prog = 0,
        this.__w = 2 * (this.options.radius + this.options.stroke / 2),
        this.$canvas[0].width = this.__w,
        this.$canvas[0].height = this.__w,
        void this.checkHideUnder()) : (this.destroy(),
        void (this.disable = !0))
    }
    ,
    p.create = function() {
        if (!this.disable) {
            _super.create.call(this),
            this.slider.api.addEventListener(MSSliderEvent.WAITING, this._update, this);
            var that = this;
            this.$element.click(function() {
                that.slider.api.paused ? that.slider.api.resume() : that.slider.api.pause()
            }),
            this._update()
        }
    }
    ,
    p._update = function() {
        var that = this;
        $(this).stop(!0).animate({
            prog: .01 * this.slider.api._delayProgress
        }, {
            duration: 200,
            step: function() {
                that._draw()
            }
        })
    }
    ,
    p._draw = function() {
        this.ctx.clearRect(0, 0, this.__w, this.__w),
        this.ctx.beginPath(),
        this.ctx.arc(.5 * this.__w, .5 * this.__w, this.options.radius, 1.5 * Math.PI, 1.5 * Math.PI + 2 * Math.PI * this.prog, !1),
        this.ctx.strokeStyle = this.options.color,
        this.ctx.lineWidth = this.options.stroke,
        this.ctx.stroke()
    }
    ,
    p.destroy = function() {
        _super.destroy(),
        this.disable || ($(this).stop(!0),
        this.slider.api.removeEventListener(MSSliderEvent.WAITING, this._update, this),
        this.$element.remove())
    }
    ,
    window.MSCircleTimer = MSCircleTimer,
    MSSlideController.registerControl("circletimer", MSCircleTimer)
}(jQuery),
function($) {
    "use strict";
    window.MSLightbox = function(options) {
        BaseControl.call(this, options),
        this.options.autohide = !1,
        $.extend(this.options, options),
        this.data_list = []
    }
    ,
    MSLightbox.fadeDuratation = 400,
    MSLightbox.extend(BaseControl);
    var p = MSLightbox.prototype
      , _super = BaseControl.prototype;
    p.setup = function() {
        _super.setup.call(this),
        this.$element = $("<div></div>").addClass(this.options.prefix + "lightbox-btn").appendTo(this.cont),
        this.checkHideUnder()
    }
    ,
    p.slideAction = function(slide) {
        $("<div></div>").addClass(this.options.prefix + "lightbox-btn").appendTo(slide.$element).append($(slide.$element.find(".ms-lightbox")))
    }
    ,
    p.create = function() {
        _super.create.call(this)
    }
    ,
    MSSlideController.registerControl("lightbox", MSLightbox)
}(jQuery),
function($) {
    "use strict";
    window.MSSlideInfo = function(options) {
        BaseControl.call(this, options),
        this.options.autohide = !1,
        this.options.align = null,
        this.options.inset = !1,
        this.options.margin = 10,
        this.options.size = 100,
        this.options.dir = "h",
        $.extend(this.options, options),
        this.data_list = []
    }
    ,
    MSSlideInfo.fadeDuratation = 400,
    MSSlideInfo.extend(BaseControl);
    var p = MSSlideInfo.prototype
      , _super = BaseControl.prototype;
    p.setup = function() {
        if (this.$element = $("<div></div>").addClass(this.options.prefix + "slide-info").addClass("ms-dir-" + this.options.dir),
        _super.setup.call(this),
        this.$element.appendTo(this.slider.$controlsCont === this.cont ? this.slider.$element : this.cont),
        !this.options.insetTo && this.options.align) {
            var align = this.options.align;
            this.options.inset ? this.$element.css(align, this.options.margin) : "top" === align ? this.$element.prependTo(this.slider.$element).css({
                "margin-bottom": this.options.margin,
                position: "relative"
            }) : "bottom" === align ? this.$element.css({
                "margin-top": this.options.margin,
                position: "relative"
            }) : (this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this),
            this.align()),
            "v" === this.options.dir ? this.$element.width(this.options.size) : this.$element.css("min-height", this.options.size)
        }
        this.checkHideUnder()
    }
    ,
    p.align = function() {
        if (!this.detached) {
            var align = this.options.align
              , pos = this.slider.reserveSpace(align, this.options.size + 2 * this.options.margin);
            this.$element.css(align, -pos - this.options.size - this.options.margin)
        }
    }
    ,
    p.slideAction = function(slide) {
        var info_ele = $(slide.$element.find(".ms-info"));
        info_ele.detach(),
        this.data_list[slide.index] = info_ele
    }
    ,
    p.create = function() {
        _super.create.call(this),
        this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.update, this),
        this.cindex = this.slider.api.index(),
        this.switchEle(this.data_list[this.cindex])
    }
    ,
    p.update = function() {
        var nindex = this.slider.api.index();
        this.switchEle(this.data_list[nindex]),
        this.cindex = nindex
    }
    ,
    p.switchEle = function(ele) {
        if (this.current_ele) {
            this.current_ele[0].tween && this.current_ele[0].tween.stop(!0),
            this.current_ele[0].tween = CTween.animate(this.current_ele, MSSlideInfo.fadeDuratation, {
                opacity: 0
            }, {
                complete: function() {
                    this.detach(),
                    this[0].tween = null,
                    ele.css("position", "relative")
                },
                target: this.current_ele
            }),
            ele.css("position", "absolute")
        }
        this.__show(ele)
    }
    ,
    p.__show = function(ele) {
        ele.appendTo(this.$element).css("opacity", "0"),
        this.current_ele && ele.height(Math.max(ele.height(), this.current_ele.height())),
        clearTimeout(this.tou),
        this.tou = setTimeout(function() {
            CTween.fadeIn(ele, MSSlideInfo.fadeDuratation),
            ele.css("height", "")
        }, MSSlideInfo.fadeDuratation),
        ele[0].tween && ele[0].tween.stop(!0),
        this.current_ele = ele
    }
    ,
    p.destroy = function() {
        _super.destroy(),
        clearTimeout(this.tou),
        this.current_ele && this.current_ele[0].tween && this.current_ele[0].tween.stop("true"),
        this.$element.remove(),
        this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this),
        this.slider.api.removeEventListener(MSSliderEvent.CHANGE_START, this.update, this)
    }
    ,
    MSSlideController.registerControl("slideinfo", MSSlideInfo)
}(jQuery),
function($) {
    window.MSGallery = function(id, slider) {
        this.id = id,
        this.slider = slider,
        this.telement = $("#" + id),
        this.botcont = $("<div></div>").addClass("ms-gallery-botcont").appendTo(this.telement),
        this.thumbcont = $("<div></div>").addClass("ms-gal-thumbcont hide-thumbs").appendTo(this.botcont),
        this.playbtn = $("<div></div>").addClass("ms-gal-playbtn").appendTo(this.botcont),
        this.thumbtoggle = $("<div></div>").addClass("ms-gal-thumbtoggle").appendTo(this.botcont),
        slider.control("thumblist", {
            insertTo: this.thumbcont,
            autohide: !1,
            dir: "h"
        }),
        slider.control("slidenum", {
            insertTo: this.botcont,
            autohide: !1
        }),
        slider.control("slideinfo", {
            insertTo: this.botcont,
            autohide: !1
        }),
        slider.control("timebar", {
            insertTo: this.botcont,
            autohide: !1
        }),
        slider.control("bullets", {
            insertTo: this.botcont,
            autohide: !1
        })
    }
    ;
    var p = MSGallery.prototype;
    p._init = function() {
        var that = this;
        this.slider.api.paused || this.playbtn.addClass("btn-pause"),
        this.playbtn.click(function() {
            that.slider.api.paused ? (that.slider.api.resume(),
            that.playbtn.addClass("btn-pause")) : (that.slider.api.pause(),
            that.playbtn.removeClass("btn-pause"))
        }),
        this.thumbtoggle.click(function() {
            that.vthumbs ? (that.thumbtoggle.removeClass("btn-hide"),
            that.vthumbs = !1,
            that.thumbcont.addClass("hide-thumbs")) : (that.thumbtoggle.addClass("btn-hide"),
            that.thumbcont.removeClass("hide-thumbs"),
            that.vthumbs = !0)
        })
    }
    ,
    p.setup = function() {
        var that = this;
        $(document).ready(function() {
            that._init()
        })
    }
}(jQuery),
function($) {
    var getPhotosetURL = function(key, id, count) {
        return "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=" + key + "&photoset_id=" + id + "&per_page=" + count + "&extras=url_o,description,date_taken,owner_name,views&format=json&jsoncallback=?"
    }
      , getUserPublicURL = function(key, id, count) {
        return "https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=" + key + "&user_id=" + id + "&per_page=" + count + "&extras=url_o,description,date_taken,owner_name,views&format=json&jsoncallback=?"
    }
      , getImageSource = function(fid, server, id, secret, size, data) {
        return "_o" === size && data ? data.url_o : "https://farm" + fid + ".staticflickr.com/" + server + "/" + id + "_" + secret + size + ".jpg"
    };
    window.MSFlickrV2 = function(slider, options) {
        var _options = {
            count: 10,
            type: "photoset",
            thumbSize: "q",
            imgSize: "c"
        };
        if (this.slider = slider,
        this.slider.holdOn(),
        !options.key)
            return void this.errMsg("Flickr API Key required. Please add it in settings.");
        $.extend(_options, options),
        this.options = _options;
        var that = this;
        "photoset" === this.options.type ? $.getJSON(getPhotosetURL(this.options.key, this.options.id, this.options.count), function(data) {
            that._photosData(data)
        }) : $.getJSON(getUserPublicURL(this.options.key, this.options.id, this.options.count), function(data) {
            that.options.type = "photos",
            that._photosData(data)
        }),
        "" !== this.options.imgSize && "-" !== this.options.imgSize && (this.options.imgSize = "_" + this.options.imgSize),
        this.options.thumbSize = "_" + this.options.thumbSize,
        this.slideTemplate = this.slider.$element.find(".ms-slide")[0].outerHTML,
        this.slider.$element.find(".ms-slide").remove()
    }
    ;
    var p = MSFlickrV2.prototype;
    p._photosData = function(data) {
        if ("fail" === data.stat)
            return void this.errMsg("Flickr API ERROR#" + data.code + ": " + data.message);
        {
            var that = this;
            this.options.author || this.options.desc
        }
        $.each(data[this.options.type].photo, function(i, item) {
            var slide_cont = that.slideTemplate.replace(/{{[\w-]+}}/g, function(match) {
                return match = match.replace(/{{|}}/g, ""),
                shortCodes[match] ? shortCodes[match](item, that) : "{{" + match + "}}"
            });
            $(slide_cont).appendTo(that.slider.$element)
        }),
        that._initSlider()
    }
    ,
    p.errMsg = function(msg) {
        this.slider.$element.css("display", "block"),
        this.errEle || (this.errEle = $('<div style="font-family:Arial; color:red; font-size:12px; position:absolute; top:10px; left:10px"></div>').appendTo(this.slider.$loading)),
        this.errEle.html(msg)
    }
    ,
    p._initSlider = function() {
        this.slider.release()
    }
    ;
    var shortCodes = {
        image: function(data, that) {
            return getImageSource(data.farm, data.server, data.id, data.secret, that.options.imgSize, data)
        },
        thumb: function(data, that) {
            return getImageSource(data.farm, data.server, data.id, data.secret, that.options.thumbSize)
        },
        title: function(data) {
            return data.title
        },
        "owner-name": function(data) {
            return data.ownername
        },
        "date-taken": function(data) {
            return data.datetaken
        },
        views: function(data) {
            return data.views
        },
        description: function(data) {
            return data.description._content
        }
    }
}(jQuery),
function($) {
    window.MSFacebookGallery = function(slider, options) {
        var _options = {
            count: 10,
            type: "photostream",
            thumbSize: "320",
            imgSize: "orginal",
            https: !1,
            token: ""
        };
        this.slider = slider,
        this.slider.holdOn(),
        $.extend(_options, options),
        this.options = _options,
        this.graph = "https://graph.facebook.com";
        var that = this;
        "photostream" === this.options.type ? $.getJSON(this.graph + "/" + this.options.username + "/photos/uploaded/?fields=source,name,link,images,from&limit=" + this.options.count + "&access_token=" + this.options.token, function(data) {
            that._photosData(data)
        }) : $.getJSON(this.graph + "/" + this.options.albumId + "/photos?fields=source,name,link,images,from&limit=" + this.options.count + "&access_token=" + this.options.token, function(data) {
            that._photosData(data)
        }),
        this.slideTemplate = this.slider.$element.find(".ms-slide")[0].outerHTML,
        this.slider.$element.find(".ms-slide").remove()
    }
    ;
    var p = MSFacebookGallery.prototype;
    p._photosData = function(content) {
        if (content.error)
            return void this.errMsg("Facebook API ERROR#" + content.error.code + "(" + content.error.type + "): " + content.error.message);
        for (var that = this, i = (this.options.author || this.options.desc,
        0), l = content.data.length; i !== l; i++) {
            var slide_cont = that.slideTemplate.replace(/{{[\w-]+}}/g, function(match) {
                return match = match.replace(/{{|}}/g, ""),
                shortCodes[match] ? shortCodes[match](content.data[i], that) : "{{" + match + "}}"
            });
            $(slide_cont).appendTo(that.slider.$element)
        }
        that._initSlider()
    }
    ,
    p.errMsg = function(msg) {
        this.slider.$element.css("display", "block"),
        this.errEle || (this.errEle = $('<div style="font-family:Arial; color:red; font-size:12px; position:absolute; top:10px; left:10px"></div>').appendTo(this.slider.$loading)),
        this.errEle.html(msg)
    }
    ,
    p._initSlider = function() {
        this.slider.release()
    }
    ;
    var getImageSource = function(images, size) {
        if ("orginal" === size)
            return images[0].source;
        for (var i = 0, l = images.length; i !== l; i++)
            if (-1 !== images[i].source.indexOf(size + "x" + size))
                return images[i].source;
        return images[0].source
    }
      , shortCodes = {
        image: function(data, that) {
            return getImageSource(data.images, that.options.imgSize)
        },
        thumb: function(data, that) {
            return getImageSource(data.images, that.options.thumbSize)
        },
        name: function(data) {
            return data.name
        },
        "owner-name": function(data) {
            return data.from.name
        },
        link: function(data) {
            return data.link
        }
    }
}(jQuery),
function($) {
    "use strict";
    window.MSScrollParallax = function(slider, parallax, bgparallax, fade) {
        this.fade = fade,
        this.slider = slider,
        this.parallax = parallax / 100,
        this.bgparallax = bgparallax / 100,
        slider.api.addEventListener(MSSliderEvent.INIT, this.init, this),
        slider.api.addEventListener(MSSliderEvent.DESTROY, this.destory, this),
        slider.api.addEventListener(MSSliderEvent.CHANGE_END, this.resetLayers, this),
        slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.updateCurrentSlide, this)
    }
    ,
    window.MSScrollParallax.setup = function(slider, parallax, bgparallax, fade) {
        return window._mobile ? void 0 : (null == parallax && (parallax = 50),
        null == bgparallax && (bgparallax = 40),
        new MSScrollParallax(slider,parallax,bgparallax,fade))
    }
    ;
    var p = window.MSScrollParallax.prototype;
    p.init = function() {
        this.slider.$element.addClass("ms-scroll-parallax"),
        this.sliderOffset = this.slider.$element.offset().top,
        this.updateCurrentSlide();
        for (var slide, slides = this.slider.api.view.slideList, i = 0, l = slides.length; i !== l; i++)
            slide = slides[i],
            slide.hasLayers && (slide.layerController.$layers.wrap('<div class="ms-scroll-parallax-cont"></div>'),
            slide.$scrollParallaxCont = slide.layerController.$layers.parent());
        $(window).on("scroll", {
            that: this
        }, this.moveParallax).trigger("scroll")
    }
    ,
    p.resetLayers = function() {
        if (this.lastSlide) {
            var layers = this.lastSlide.$scrollParallaxCont;
            window._css2d ? (layers && (layers[0].style[window._jcsspfx + "Transform"] = ""),
            this.lastSlide.hasBG && (this.lastSlide.$imgcont[0].style[window._jcsspfx + "Transform"] = "")) : (layers && (layers[0].style.top = ""),
            this.lastSlide.hasBG && (this.lastSlide.$imgcont[0].style.top = "0px"))
        }
    }
    ,
    p.updateCurrentSlide = function() {
        this.lastSlide = this.currentSlide,
        this.currentSlide = this.slider.api.currentSlide,
        this.moveParallax({
            data: {
                that: this
            }
        })
    }
    ,
    p.moveParallax = function(e) {
        var that = e.data.that
          , slider = that.slider
          , offset = that.sliderOffset
          , scrollTop = $(window).scrollTop()
          , layers = that.currentSlide.$scrollParallaxCont
          , out = offset - scrollTop;
        0 >= out ? (layers && (window._css3d ? layers[0].style[window._jcsspfx + "Transform"] = "translateY(" + -out * that.parallax + "px) translateZ(0.4px)" : window._css2d ? layers[0].style[window._jcsspfx + "Transform"] = "translateY(" + -out * that.parallax + "px)" : layers[0].style.top = -out * that.parallax + "px"),
        that.updateSlidesBG(-out * that.bgparallax + "px", !0),
        layers && that.fade && layers.css("opacity", 1 - Math.min(1, -out / slider.api.height))) : (layers && (window._css2d ? layers[0].style[window._jcsspfx + "Transform"] = "" : layers[0].style.top = ""),
        that.updateSlidesBG("0px", !1),
        layers && that.fade && layers.css("opacity", 1))
    }
    ,
    p.updateSlidesBG = function(pos, fixed) {
        for (var slides = this.slider.api.view.slideList, position = !fixed || $.browser.msie || $.browser.opera ? "" : "fixed", i = 0, l = slides.length; i !== l; i++)
            slides[i].hasBG && (slides[i].$imgcont[0].style.position = position,
            slides[i].$imgcont[0].style.top = pos),
            slides[i].$bgvideocont && (slides[i].$bgvideocont[0].style.position = position,
            slides[i].$bgvideocont[0].style.top = pos)
    }
    ,
    p.destory = function() {
        slider.api.removeEventListener(MSSliderEvent.INIT, this.init, this),
        slider.api.removeEventListener(MSSliderEvent.DESTROY, this.destory, this),
        slider.api.removeEventListener(MSSliderEvent.CHANGE_END, this.resetLayers, this),
        slider.api.removeEventListener(MSSliderEvent.CHANGE_START, this.updateCurrentSlide, this),
        $(window).off("scroll", this.moveParallax)
    }
}(jQuery),
function($, document, window) {
    var PId = 0;
    if (window.MasterSlider) {
        var KeyboardNav = function(slider) {
            this.slider = slider,
            this.PId = PId++,
            this.slider.options.keyboard && slider.api.addEventListener(MSSliderEvent.INIT, this.init, this)
        };
        KeyboardNav.name = "MSKeyboardNav";
        var p = KeyboardNav.prototype;
        p.init = function() {
            var api = this.slider.api;
            $(document).on("keydown.kbnav" + this.PId, function(event) {
                var which = event.which;
                37 === which || 40 === which ? api.previous(!0) : (38 === which || 39 === which) && api.next(!0)
            })
        }
        ,
        p.destroy = function() {
            $(document).off("keydown.kbnav" + this.PId),
            this.slider.api.removeEventListener(MSSliderEvent.INIT, this.init, this)
        }
        ,
        MasterSlider.registerPlugin(KeyboardNav)
    }
}(jQuery, document, window),
function($, document, window) {
    var PId = 0
      , $window = $(window)
      , $doc = $(document);
    if (window.MasterSlider) {
        var StartOnAppear = function(slider) {
            this.PId = PId++,
            this.slider = slider,
            this.$slider = slider.$element,
            this.slider.options.startOnAppear && (slider.holdOn(),
            $doc.ready($.proxy(this.init, this)))
        };
        StartOnAppear.name = "MSStartOnAppear";
        var p = StartOnAppear.prototype;
        p.init = function() {
            this.slider.api;
            $window.on("scroll.soa" + this.PId, $.proxy(this._onScroll, this)).trigger("scroll")
        }
        ,
        p._onScroll = function() {
            var vpBottom = $window.scrollTop() + $window.height()
              , top = this.$slider.offset().top;
            vpBottom > top && ($window.off("scroll.soa" + this.PId),
            this.slider.release())
        }
        ,
        p.destroy = function() {}
        ,
        MasterSlider.registerPlugin(StartOnAppear)
    }
}(jQuery, document, window),
function(document, window) {
    var filterUnits = {
        "hue-rotate": "deg",
        blur: "px"
    }
      , initialValues = {
        opacity: 1,
        contrast: 1,
        brightness: 1,
        saturate: 1,
        "hue-rotate": 0,
        invert: 0,
        sepia: 0,
        blur: 0,
        grayscale: 0
    };
    if (window.MasterSlider) {
        var Filters = function(slider) {
            this.slider = slider,
            this.slider.options.filters && slider.api.addEventListener(MSSliderEvent.INIT, this.init, this)
        };
        Filters.name = "MSFilters";
        var p = Filters.prototype;
        p.init = function() {
            var api = this.slider.api
              , view = api.view;
            this.filters = this.slider.options.filters,
            this.slideList = view.slideList,
            this.slidesCount = view.slidesCount,
            this.dimension = view[view.__dimension],
            this.target = "slide" === this.slider.options.filterTarget ? "$element" : "$bg_img",
            this.filterName = $.browser.webkit ? "WebkitFilter" : "filter";
            var superFun = view.controller.__renderHook.fun
              , superRef = view.controller.__renderHook.ref;
            view.controller.renderCallback(function(controller, value) {
                superFun.call(superRef, controller, value),
                this.applyEffect(value)
            }, this),
            this.applyEffect(view.controller.value)
        }
        ,
        p.applyEffect = function(value) {
            for (var factor, slide, i = 0; i < this.slidesCount; ++i)
                slide = this.slideList[i],
                factor = Math.min(1, Math.abs(value - slide.position) / this.dimension),
                slide[this.target] && ($.browser.msie ? null != this.filters.opacity && slide[this.target].opacity(1 - this.filters.opacity * factor) : slide[this.target][0].style[this.filterName] = this.generateStyle(factor))
        }
        ,
        p.generateStyle = function(factor) {
            var unit, style = "";
            for (var filter in this.filters)
                unit = filterUnits[filter] || "",
                style += filter + "(" + (initialValues[filter] + (this.filters[filter] - initialValues[filter]) * factor) + ") ";
            return style
        }
        ,
        p.destroy = function() {
            this.slider.api.removeEventListener(MSSliderEvent.INIT, this.init, this)
        }
        ,
        MasterSlider.registerPlugin(Filters)
    }
}(document, window, jQuery),
function($, document, window) {
    if (window.MasterSlider) {
        var ScrollToAction = function(slider) {
            this.slider = slider,
            slider.api.addEventListener(MSSliderEvent.INIT, this.init, this)
        };
        ScrollToAction.name = "MSScrollToAction";
        var p = ScrollToAction.prototype;
        p.init = function() {
            var api = this.slider.api;
            api.scrollToEnd = _scrollToEnd,
            api.scrollTo = _scrollTo
        }
        ,
        p.destroy = function() {}
        ;
        var _scrollTo = function(target, duration) {
            var target = (this.slider.$element,
            $(target).eq(0));
            0 !== target.length && (null == duration && (duration = 1.4),
            $("html, body").animate({
                scrollTop: target.offset().top
            }, 1e3 * duration, "easeInOutQuad"))
        }
          , _scrollToEnd = function(duration) {
            var sliderEle = this.slider.$element;
            null == duration && (duration = 1.4),
            $("html, body").animate({
                scrollTop: sliderEle.offset().top + sliderEle.outerHeight(!1)
            }, 1e3 * duration, "easeInOutQuad")
        };
        MasterSlider.registerPlugin(ScrollToAction)
    }
}(jQuery, document, window),
function($, window) {
    "use strict";
    if (window.MSReady)
        for (var i = 0, l = MSReady.length; i !== l; i++)
            MSReady[i].call(null, $)
}(jQuery, window, document);
//# sourceMappingURL=masterslider.min.js.map
