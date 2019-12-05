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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Layout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Layout.js":
/*!***********************!*\
  !*** ./src/Layout.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n/* harmony import */ var _Point2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Point2D */ \"./src/Point2D.js\");\n// repulsive force - Coulomb's Force   F = K * q1 * q2 / r^2\r\n// Traction Force - Hooke's Law  F = K * (x - x0)\r\n\r\n\r\n\r\n\r\nconst nodes = [{\r\n  name: 'a'\r\n}, {\r\n  name: 'b'\r\n}];\r\nconst edges = [{\r\n  source: 'a',\r\n  target: 'b'\r\n}];\r\n\r\nconst getNodesWithCoords = nodes => {\r\n  const MIN = 0;\r\n  const MAX = 10\r\n  return nodes.map(node => {\r\n    const copyNode = JSON.parse(JSON.stringify(node));// object.assign\r\n    copyNode.coord = {\r\n      x: Object(_Utils__WEBPACK_IMPORTED_MODULE_0__[\"randomize\"])(MIN, MAX),\r\n      y: Object(_Utils__WEBPACK_IMPORTED_MODULE_0__[\"randomize\"])(MIN, MAX)\r\n    };\r\n    return copyNode;\r\n  });\r\n};\r\n\r\nconst getConnectedNodes = (edges, nodes, node) => {\r\n  return edges.filter(edge => edge.source === node.name).map(edge => nodes.filter(n => edge.target === n.name)[0])\r\n    .concat(edges.filter(edge => edge.target === node.name).map(edge => nodes.filter(n => edge.source === n.name)[0]));\r\n}\r\n\r\n\r\nconst tempNodes = getNodesWithCoords(nodes);\r\nconst connectedNodes = getConnectedNodes(edges, tempNodes, tempNodes[1]);\r\nconsole.log(connectedNodes);\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/Layout.js?");

/***/ }),

/***/ "./src/Point2D.js":
/*!************************!*\
  !*** ./src/Point2D.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Point2D; });\nclass Point2D {\r\n  constructor(x, y) {\r\n    this.x = x;\r\n    this.y = y;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/Point2D.js?");

/***/ }),

/***/ "./src/Utils.js":
/*!**********************!*\
  !*** ./src/Utils.js ***!
  \**********************/
/*! exports provided: distance, distanceSquare, randomize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"distance\", function() { return distance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"distanceSquare\", function() { return distanceSquare; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomize\", function() { return randomize; });\nfunction distance(point1, point2) {\r\n  return Math.sqrt((point1.x - point2.x) * (point1.x - point2.x) + (point1.y - point2.y) * (point1.y - point2.y));\r\n}\r\n\r\nfunction distanceSquare(point1, point2) {\r\n  return (point1.x - point2.x) * (point1.x = point2.x) + (point1.y - point2.y) * (point1.y - point2.y);\r\n}\r\n\r\nfunction randomize(min, max) {\r\n  return Math.random() * (max - min) + min;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Utils.js?");

/***/ })

/******/ });