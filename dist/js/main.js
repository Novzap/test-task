/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_slick_carousel_slick_slick_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/slick-carousel/slick/slick.js */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var _node_modules_slick_carousel_slick_slick_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_slick_carousel_slick_slick_js__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  var slickOpts = {
    arrows: false,
    dots: true
  };
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slider').slick(slickOpts);
});

/***/ }),

/***/ "./src/blocks/modules/header/modernizr-custom.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/header/modernizr-custom.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-webpalpha-webplossless_webp_lossless-setclasses !*/
!function (A, e, n) {
  function a(A, e) {
    return _typeof(A) === e;
  }

  function o() {
    var A, e, n, o, s, t, r;

    for (var f in l) {
      if (l.hasOwnProperty(f)) {
        if (A = [], e = l[f], e.name && (A.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length)) for (n = 0; n < e.options.aliases.length; n++) {
          A.push(e.options.aliases[n].toLowerCase());
        }

        for (o = a(e.fn, "function") ? e.fn() : e.fn, s = 0; s < A.length; s++) {
          t = A[s], r = t.split("."), 1 === r.length ? Modernizr[r[0]] = o : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = o), i.push((o ? "" : "no-") + r.join("-"));
        }
      }
    }
  }

  function s(A) {
    var e = u.className,
        n = Modernizr._config.classPrefix || "";

    if (c && (e = e.baseVal), Modernizr._config.enableJSClass) {
      var a = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      e = e.replace(a, "$1" + n + "js$2");
    }

    Modernizr._config.enableClasses && (e += " " + n + A.join(" " + n), c ? u.className.baseVal = e : u.className = e);
  }

  function t(A, e) {
    if ("object" == _typeof(A)) for (var n in A) {
      f(A, n) && t(n, A[n]);
    } else {
      A = A.toLowerCase();
      var a = A.split("."),
          o = Modernizr[a[0]];
      if (2 == a.length && (o = o[a[1]]), "undefined" != typeof o) return Modernizr;
      e = "function" == typeof e ? e() : e, 1 == a.length ? Modernizr[a[0]] = e : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = e), s([(e && 0 != e ? "" : "no-") + a.join("-")]), Modernizr._trigger(A, e);
    }
    return Modernizr;
  }

  var i = [],
      l = [],
      r = {
    _version: "3.6.0",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(A, e) {
      var n = this;
      setTimeout(function () {
        e(n[A]);
      }, 0);
    },
    addTest: function addTest(A, e, n) {
      l.push({
        name: A,
        fn: e,
        options: n
      });
    },
    addAsyncTest: function addAsyncTest(A) {
      l.push({
        name: null,
        fn: A
      });
    }
  },
      Modernizr = function Modernizr() {};

  Modernizr.prototype = r, Modernizr = new Modernizr();
  var f,
      u = e.documentElement,
      c = "svg" === u.nodeName.toLowerCase();
  !function () {
    var A = {}.hasOwnProperty;
    f = a(A, "undefined") || a(A.call, "undefined") ? function (A, e) {
      return e in A && a(A.constructor.prototype[e], "undefined");
    } : function (e, n) {
      return A.call(e, n);
    };
  }(), r._l = {}, r.on = function (A, e) {
    this._l[A] || (this._l[A] = []), this._l[A].push(e), Modernizr.hasOwnProperty(A) && setTimeout(function () {
      Modernizr._trigger(A, Modernizr[A]);
    }, 0);
  }, r._trigger = function (A, e) {
    if (this._l[A]) {
      var n = this._l[A];
      setTimeout(function () {
        var A, a;

        for (A = 0; A < n.length; A++) {
          (a = n[A])(e);
        }
      }, 0), delete this._l[A];
    }
  }, Modernizr._q.push(function () {
    r.addTest = t;
  }), Modernizr.addAsyncTest(function () {
    var A = new Image();
    A.onerror = function () {
      t("webplossless", !1, {
        aliases: ["webp-lossless"]
      });
    }, A.onload = function () {
      t("webplossless", 1 == A.width, {
        aliases: ["webp-lossless"]
      });
    }, A.src = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
  }), Modernizr.addAsyncTest(function () {
    var A = new Image();
    A.onerror = function () {
      t("webpalpha", !1, {
        aliases: ["webp-alpha"]
      });
    }, A.onload = function () {
      t("webpalpha", 1 == A.width, {
        aliases: ["webp-alpha"]
      });
    }, A.src = "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==";
  }), Modernizr.addAsyncTest(function () {
    function A(A, e, n) {
      function a(e) {
        var a = e && "load" === e.type ? 1 == o.width : !1,
            s = "webp" === A;
        t(A, s && a ? new Boolean(a) : a), n && n(e);
      }

      var o = new Image();
      o.onerror = a, o.onload = a, o.src = e;
    }

    var e = [{
      uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
      name: "webp"
    }, {
      uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
      name: "webp.alpha"
    }, {
      uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
      name: "webp.animation"
    }, {
      uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
      name: "webp.lossless"
    }],
        n = e.shift();
    A(n.name, n.uri, function (n) {
      if (n && "load" === n.type) for (var a = 0; a < e.length; a++) {
        A(e[a].name, e[a].uri);
      }
    });
  }), o(), s(i), delete r.addTest, delete r.addAsyncTest;

  for (var p = 0; p < Modernizr._q.length; p++) {
    Modernizr._q[p]();
  }

  A.Modernizr = Modernizr;
}(window, document);

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_modernizr_custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/header/modernizr-custom */ "./src/blocks/modules/header/modernizr-custom.js");
/* harmony import */ var _modules_header_modernizr_custom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_header_modernizr_custom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules.js */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map