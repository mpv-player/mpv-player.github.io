/* ========================================================================
 * Bootstrap: transition.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
!function(r){"use strict";function n(){var n=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in t)if(n.style[i]!==undefined)return{end:t[i]};return!1}r.fn.emulateTransitionEnd=function(n){var t=!1,i=this;return r(this).one("bsTransitionEnd",function(){t=!0}),setTimeout(function(){t||r(i).trigger(r.support.transition.end)},n),this},r(function(){r.support.transition=n(),r.support.transition&&(r.event.special.bsTransitionEnd={bindType:r.support.transition.end,delegateType:r.support.transition.end,handle:function(n){if(r(n.target).is(this))return n.handleObj.handler.apply(this,arguments)}})})}(jQuery);