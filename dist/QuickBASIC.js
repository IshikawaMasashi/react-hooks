!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports.QuickBASIC=e(require("react")):t.QuickBASIC=e(t.react)}(window,(function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(e,n){e.exports=t},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);e.useActive=r.default;var i=n(3);e.useClickOutside=i.default;var o=n(4);e.useFocus=o.default;var u=n(5);e.useHover=u.default;var s=n(6);e.useMousePosition=s.default;var c=n(7);e.useResizeObserver=c.default;var a=n(10);e.useTouch=a.default;var f=n(11);e.useWindowResize=f.default},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(0)),o=n(0);e.default=function(){var t=o.useState(!1),e=t[0],n=t[1];return[e,i.default.useMemo((function(){return{onMouseDown:function(t){n(!0)},onMouseUp:function(t){n(!1)}}}),[])]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0);e.default=function(t,e){var n=r.useState(!1),i=n[0],o=n[1],u=r.useCallback((function(e){return t.map((function(t){return null!==t.current&&!t.current.contains(e.target)})).every(Boolean)}),[t]),s=r.useCallback((function(t){u(t)&&(o(!0),e(t))}),[u,e]),c=r.useCallback((function(t){u(t)&&o(!1)}),[u]);return r.useEffect((function(){return document.addEventListener("mousedown",s),document.addEventListener("mouseup",c),function(){document.removeEventListener("mousedown",s),document.removeEventListener("mouseup",c)}}),[t,e]),[i]}},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(0));e.default=function(){var t=i.default.useState(!1),e=t[0],n=t[1];return[e,i.default.useMemo((function(){return{onFocus:function(t){n(!0)},onBlur:function(t){n(!1)}}}),[])]}},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(0));e.default=function(){var t=i.default.useState(!1),e=t[0],n=t[1];return[e,i.default.useMemo((function(){return{onMouseEnter:function(t){n(!0)},onMouseLeave:function(t){n(!1)}}}),[])]}},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(0));e.default=function(){var t=i.default.useState(0),e=t[0],n=t[1],r=i.default.useState(0),o=r[0],u=r[1];return[e,o,i.default.useMemo((function(){return{onMouseMove:function(t){n(t.nativeEvent.offsetX),u(t.nativeEvent.offsetY)}}}),[])]}},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),o=r(n(8));e.default=function(t){var e=i.useState(0),n=e[0],r=e[1],u=i.useState(0),s=u[0],c=u[1];return i.useLayoutEffect((function(){var e=new o.default((function(t){r(t[0].contentRect.width),c(t[0].contentRect.height)}));return null!==t.current&&e.observe(t.current),function(){e.disconnect()}}),[t]),[n,s]}},function(t,e,n){"use strict";n.r(e),function(t){var n=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return(function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}())}(),r="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,i=void 0!==t&&t.Math===Math?t:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),o="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(i):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var u=["top","right","bottom","left","width","height","size","weight"],s="undefined"!=typeof MutationObserver,c=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function u(){n&&(n=!1,t()),r&&c()}function s(){o(u)}function c(){var t=Date.now();if(n){if(t-i<2)return;r=!0}else n=!0,r=!1,setTimeout(s,e);i=t}return c}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){r&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),s?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){r&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;u.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),a=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},f=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||i},d=b(0,0,0,0);function h(t){return parseFloat(t)||0}function l(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+h(t["border-"+n+"-width"])}),0)}function v(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return d;var r=f(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=h(o)}return e}(r),o=i.left+i.right,u=i.top+i.bottom,s=h(r.width),c=h(r.height);if("border-box"===r.boxSizing&&(Math.round(s+o)!==e&&(s-=l(r,"left","right")+o),Math.round(c+u)!==n&&(c-=l(r,"top","bottom")+u)),!function(t){return t===f(t).document.documentElement}(t)){var a=Math.round(s+o)-e,v=Math.round(c+u)-n;1!==Math.abs(a)&&(s-=a),1!==Math.abs(v)&&(c-=v)}return b(i.left,i.top,s,c)}var p="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof f(t).SVGGraphicsElement}:function(t){return t instanceof f(t).SVGElement&&"function"==typeof t.getBBox};function _(t){return r?p(t)?function(t){var e=t.getBBox();return b(0,0,e.width,e.height)}(t):v(t):d}function b(t,e,n,r){return{x:t,y:e,width:n,height:r}}var m=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=b(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=_(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),y=function(t,e){var n,r,i,o,u,s,c,f=(r=(n=e).x,i=n.y,o=n.width,u=n.height,s="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(s.prototype),a(c,{x:r,y:i,width:o,height:u,top:i,right:r+o,bottom:u+i,left:r}),c);a(this,{target:t,contentRect:f})},w=function(){function t(t,e,r){if(this.activeObservations_=[],this.observations_=new n,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=r}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof f(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new m(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof f(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new y(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),g="undefined"!=typeof WeakMap?new WeakMap:new n,M=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=c.getInstance(),r=new w(e,n,this);g.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){M.prototype[t]=function(){var e;return(e=g.get(this))[t].apply(e,arguments)}}));var O=void 0!==i.ResizeObserver?i.ResizeObserver:M;e.default=O}.call(this,n(9))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(0));e.default=function(){var t=i.default.useState(!1),e=t[0],n=t[1];return[e,i.default.useMemo((function(){return{onTouchStart:function(t){n(!0)},onTouchEnd:function(t){n(!1)}}}),[])]}},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(0));e.default=function(){var t=i.default.useState(window.innerWidth),e=t[0],n=t[1],r=i.default.useState(window.innerHeight),o=r[0],u=r[1],s=i.default.useCallback((function(){n(window.innerWidth),u(window.innerHeight)}),[]);return i.default.useEffect((function(){return window.addEventListener("resize",s),function(){window.removeEventListener("resize",s)}}),[s]),[e,o]}}])}));
//# sourceMappingURL=QuickBASIC.js.map