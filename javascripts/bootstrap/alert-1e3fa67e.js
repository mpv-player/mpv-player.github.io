/* ========================================================================
 * Bootstrap: alert.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){return this.each(function(){var a=t(this),r=a.data("bs.alert");r||a.data("bs.alert",r=new n(this)),"string"==typeof e&&r[e].call(a)})}var a='[data-dismiss="alert"]',n=function(e){t(e).on("click",a,this.close)};n.VERSION="3.4.1",n.TRANSITION_DURATION=150,n.prototype.close=function(e){function a(){o.detach().trigger("closed.bs.alert").remove()}var r=t(this),s=r.attr("data-target");s||(s=r.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,"")),s="#"===s?[]:s;var o=t(document).find(s);e&&e.preventDefault(),o.length||(o=r.closest(".alert")),o.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(o.removeClass("in"),t.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",a).emulateTransitionEnd(n.TRANSITION_DURATION):a())};var r=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=n,t.fn.alert.noConflict=function(){return t.fn.alert=r,this},t(document).on("click.bs.alert.data-api",a,n.prototype.close)}(jQuery);