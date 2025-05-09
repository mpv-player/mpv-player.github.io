/* ========================================================================
 * Bootstrap: alert.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
!function(s){"use strict";function t(a){return this.each(function(){var t=s(this),e=t.data("bs.alert");e||t.data("bs.alert",e=new o(this)),"string"==typeof a&&e[a].call(t)})}var e='[data-dismiss="alert"]',o=function(t){s(t).on("click",e,this.close)};o.VERSION="3.4.1",o.TRANSITION_DURATION=150,o.prototype.close=function(t){function e(){r.detach().trigger("closed.bs.alert").remove()}var a=s(this),n=a.attr("data-target");n||(n=(n=a.attr("href"))&&n.replace(/.*(?=#[^\s]*$)/,"")),n="#"===n?[]:n;var r=s(document).find(n);t&&t.preventDefault(),r.length||(r=a.closest(".alert")),r.trigger(t=s.Event("close.bs.alert")),t.isDefaultPrevented()||(r.removeClass("in"),s.support.transition&&r.hasClass("fade")?r.one("bsTransitionEnd",e).emulateTransitionEnd(o.TRANSITION_DURATION):e())};var a=s.fn.alert;s.fn.alert=t,s.fn.alert.Constructor=o,s.fn.alert.noConflict=function(){return s.fn.alert=a,this},s(document).on("click.bs.alert.data-api",e,o.prototype.close)}(jQuery);