/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/app.js":
/*!**************************!*\
  !*** ./public/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _check_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check.js */ \"./public/js/check.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var checkerElem = document.getElementById('checker-container');\n  var formElem = document.getElementById('form');\n  var inputElem = document.getElementById('bracats-input');\n  var resultElem = document.getElementById('result');\n  formElem.addEventListener('submit', function (e) {\n    e.preventDefault();\n    var result = Object(_check_js__WEBPACK_IMPORTED_MODULE_0__[\"check\"])(inputElem.value);\n    resultElem.style.setProperty(\"--bg-image\", \"\".concat(result ? 'url(http://localhost:8000/img/correct.jpg)' : 'url(http://localhost:8000/img/incorrect.jpg)'));\n    resultElem.ariaLabel = result ? \"image of happy cat\" : \"image of angry cat\";\n    checkerElem.style.setProperty(\"--bg\", \"\".concat(result ? '#85D179' : '#5B5B5B'));\n  });\n  formElem.addEventListener('input', function () {\n    resultElem.style.setProperty(\"--bg-image\", '');\n    resultElem.ariaLabel = \"\";\n    checkerElem.style.setProperty(\"--bg\", '#D4D4D4');\n  });\n}, false);\n\n//# sourceURL=webpack:///./public/js/app.js?");

/***/ }),

/***/ "./public/js/check.js":
/*!****************************!*\
  !*** ./public/js/check.js ***!
  \****************************/
/*! exports provided: check */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"check\", function() { return check; });\nvar check = function check(string) {\n  if (string.length === 0) true; //check validity of the derived 3-letter words\n\n  var checkValidity = function checkValidity(bracats) {\n    var validBracats = {\n      'tac': 'cat',\n      'TAC': 'CAT',\n      'tAc': 'cAt'\n    }; //return the last word to find the closing bracat\n\n    var peek = function peek() {\n      if (checkArr.length === 0) {\n        return null;\n      }\n\n      return checkArr[checkArr.length - 1];\n    };\n\n    var checkArr = [];\n\n    for (var i = 0; i < bracats.length; i++) {\n      //check if current word matches the last one if so delete it\n      if (validBracats[bracats[i]] === peek()) {\n        checkArr.pop();\n      } else {\n        checkArr.push(bracats[i]);\n      }\n\n      ;\n    }\n\n    return checkArr.length === 0;\n  };\n\n  if (string.length % 2 === 0 && string.length % 3 === 0) {\n    var wordsArr = []; //divide a string to get 3-letter words\n\n    for (var i = 0; i < string.length; i += 3) {\n      wordsArr.push(string.substr(i, 3));\n    }\n\n    return checkValidity(wordsArr);\n  } else {\n    return false;\n  }\n};\n\n\n\n//# sourceURL=webpack:///./public/js/check.js?");

/***/ })

/******/ });