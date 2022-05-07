/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#form-container {\r\n    padding-left: 10px;\r\n    padding-right: 5px;\r\n    height: 100%;\r\n    background: #2c9fd1;\r\n    color: white;\r\n    font-size: 0.9em;\r\n}\r\n\r\n#input-container {\r\n    top: 0px;\r\n    position: sticky;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    display: grid;\r\n    grid-template-columns: 1fr 7fr;\r\n    column-gap: 0px;\r\n    height: 100vh;\r\n}\r\n\r\n#content-display{\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(260px, 300px));\r\n}\r\n.todo-container{\r\n    margin: 20px;\r\n    position: relative;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n    background: white;\r\n    color: #1a6180;\r\n    border: 1px solid black;\r\n\r\n\r\n\r\n    animation: slide-up 0.4s ease;\r\n    transition: all 0.2s ease;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,QAAQ;IACR,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,aAAa;IACb,8BAA8B;IAC9B,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,6DAA6D;AACjE;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,cAAc;IACd,uBAAuB;;;;IAIvB,6BAA6B;IAC7B,yBAAyB;AAC7B","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#form-container {\r\n    padding-left: 10px;\r\n    padding-right: 5px;\r\n    height: 100%;\r\n    background: #2c9fd1;\r\n    color: white;\r\n    font-size: 0.9em;\r\n}\r\n\r\n#input-container {\r\n    top: 0px;\r\n    position: sticky;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    display: grid;\r\n    grid-template-columns: 1fr 7fr;\r\n    column-gap: 0px;\r\n    height: 100vh;\r\n}\r\n\r\n#content-display{\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(260px, 300px));\r\n}\r\n.todo-container{\r\n    margin: 20px;\r\n    position: relative;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n    background: white;\r\n    color: #1a6180;\r\n    border: 1px solid black;\r\n\r\n\r\n\r\n    animation: slide-up 0.4s ease;\r\n    transition: all 0.2s ease;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
//Current status:

//Checkboxes - ensure proper behaviour when editing a ToDo
//Issues:
//1) When checklist elements are edited, the changes are not saved

//Reason: the code used when saving the ToDo currently fetches info from the saved array
//this was mistakenly done to preserve their done/not done status

//Solution: add checkboxes to the edited checklist elements as well, so they can be edited and the correct status fetched from the page

//Status: checkboxes appear, localstorage is not updated when saving the edited changes
//HOWEVER if localstorage is updated though clicking anywhere in the updated todo - it works
//Next step: make sure the saving of the edited todo is coded correctly



//BUGS:
//1) If one Todos in an edited state and others get deleted and then  you save the changes, the deleted todos reappear
//status: check if this still applies

//2)checklist elements have numbered ids, but those can repeat so change it
//status: check if this still applies

//3) when adding checklist elements if you click 'remove', the button to add another element should appear - but does not

//Next steps:
//-1)add a function checking if ToDo ordinal is already used, if it is, skip to next
//0) Replace checkCheckboxStatus with the ternary operator 'element.checked ? ifTrue: ifFalse'
//1) Add restrictions to form input to ensure aesthetic compatibility
//2) Style everything to look nice and neat and clean and super cool
//3) make them draggable to switch places
//4) sort them by different criteria
//5) divide them into projects
//6) limit which parts of toDoArray are exposed




//////////////////////for testing purposes only
/* <button id="checklocalstorage-button">check local storage</button>
<button id="check todos array-button">check array of todos</button> */
document.getElementById('checklocalstorage-button').addEventListener('click', () => {
    console.log(JSON.stringify(localStorage.getItem('toDoArray')))

})
document.getElementById('check todos array-button').addEventListener('click', () => {
    console.log(ToDos.getArrayOfTodos())
})
document.getElementById('clear local storage-button').addEventListener('click', () => {
    localStorage.clear()
})

////////////////

const DOMManipulation = (function () {
    function putElementOnPage(element, description, insertBeforeWhat, innerText, parent) {
        console.log("element putted on page is", element)
        if (typeof element === 'string') {//if element is not object, meaning an already created element
            element = document.createElement(element);
        }
        if (innerText) {
            element.innerText = innerText;
        }

        if (description) {//description is for labelled form elements
            let elementLabel = document.createElement('label');
            elementLabel.setAttribute('for', description);
            elementLabel.innerText = `${description}`;
            element.setAttribute('class', description)
            if (insertBeforeWhat) {
                parent.insertBefore(elementLabel, insertBeforeWhat);
            }
            else {
                parent.appendChild(elementLabel);
            }
        }
        if (insertBeforeWhat) {
            parent.insertBefore(element, insertBeforeWhat);
        }
        else {
            parent.appendChild(element);
        }
    }

    function removeElements(...elements) {
        let counter = elements.length;
        for (let k = 0; k < counter; k++) {
            if (elements[k]) {
                elements[k].remove();
            }
        }
    }
    function removeAllChildren(element) {
        let counter = element.children.length;
        for (let m = 0; m <= counter; m++) {
            console.log('iteration' + m);
            console.log('m is ' + m)
            console.log(element.children);
            console.log(element.children[0]);
            if (element.children[0]) {
                element.children[0].remove();
            }
        }
    }

    return {
        putElementOnPage,
        removeElements,
        removeAllChildren
    }
})();


const form = (function () {
    const addButton = document.getElementById('add-button');
    const formContainer = document.getElementById('form-container')

    function checkCheckboxStatus(checkBoxElement, ifChecked, ifUnchecked) {//make sure the parameters are functions
        if (checkBoxElement.checked) {
            return ifChecked();
        }
        else {
            return ifUnchecked();
        }
    }
    function createFormToDefineToDo(container, editedToDo) {//the second argument is only used when the form is created to edit an existing todo
        console.log('edited to do is')
        console.log(editedToDo)
        let titleInput = document.createElement('input');
        let descriptionInput = document.createElement('input');
        let deadLineInput = document.createElement('input');
        let dueDateInput = document.createElement('input');
        dueDateInput.type = 'date';
        let prioritySelect = document.createElement('select');


        let checkListElementCounter = 0;
        let inputContainer = document.createElement('div');
        inputContainer.setAttribute('class', 'input-container');
        container.appendChild(inputContainer);
        let saveButton = document.createElement('button');
        saveButton.setAttribute('class', 'save-button')//changed to class from id, see if it causes issues

        DOMManipulation.putElementOnPage(titleInput, 'Title', undefined, undefined, inputContainer);
        DOMManipulation.putElementOnPage(descriptionInput, 'Description', undefined, undefined, inputContainer);

        DOMManipulation.putElementOnPage(deadLineInput, 'Deadline', undefined, undefined, inputContainer);
        deadLineInput.type = 'checkbox';

        function addDueDateInputOnPage(parent, insertBefore) {
            console.log("add due date on page runs")
            console.log("due date input is", dueDateInput)
            DOMManipulation.putElementOnPage(dueDateInput, 'Due-date', insertBefore, undefined, parent);
        }

        function checkDeadline() {//for the sake of reusability in the form and when editing

            //this should be correct, uncomment it when saving the todo is fixed
            //deadLineInput.checked ? addDueDateInputOnPage(inputContainer, inputContainer.querySelector('label[for=Checklist]')) : DOMManipulation.removeElements(inputContainer.querySelector('input[type="date"]'), inputContainer.querySelector('label[for=Due-date]'))

            checkCheckboxStatus(deadLineInput, () => {
                addDueDateInputOnPage(inputContainer, inputContainer.querySelector('label[for=Checklist]'))
            },
                () => {
                    DOMManipulation.removeElements(inputContainer.querySelector('input[type="date"]'), inputContainer.querySelector('label[for=Due-date]'))
                }
            );

        }

        deadLineInput.addEventListener('click', () => {
            checkDeadline();
        });



        let checkListInput = document.createElement('input');
        checkListInput.type = 'checkbox';
        DOMManipulation.putElementOnPage(checkListInput, 'Checklist', undefined, undefined, inputContainer);

        function controlCheckList(checkListCheckBox) {
            checkCheckboxStatus(checkListCheckBox, () => {
                let checklistContainer = document.createElement('div');
                DOMManipulation.putElementOnPage(checklistContainer, undefined, inputContainer.querySelector('label[for=Priority]'), undefined, inputContainer);
                checklistContainer.setAttribute('id', 'checklist-container');

                let itemCounter = 0;
                function createNextItem() {
                    let checkListElementContainer = document.createElement('div');
                    let elementNumber = checkListElementCounter;
                    checkListElementContainer.setAttribute('id', elementNumber);
                    checkListElementContainer.setAttribute('class', 'checklist-element-container');
                    checkListElementCounter++;

                    DOMManipulation.putElementOnPage(

                        checkListElementContainer,
                        undefined,
                        undefined,
                        undefined,
                        checklistContainer);

                    let checkListElement = document.createElement('input');
                    checkListElement.setAttribute('class', 'checklist-element')


                    DOMManipulation.putElementOnPage(checkListElement, undefined, undefined, undefined, checkListElementContainer);

                    let addNextElementButton = document.createElement('button');
                    DOMManipulation.putElementOnPage(addNextElementButton, undefined, undefined, "+", checkListElementContainer);
                    addNextElementButton.setAttribute('class', 'add-next-element-button')

                    addNextElementButton.addEventListener('click', () => {
                        DOMManipulation.removeElements(document.getElementsByClassName('add-next-element-button')[0])

                        createNextItem();
                    })

                    if (editedToDo && editedToDo.checkList[itemCounter]) {
                        //addCheckListElementCheckBox(DOMelement, ToDoObject, checkListElementOrdinal, particularSetOfTodos)
                        form.addCheckListElementCheckBox(checkListElementContainer, editedToDo, itemCounter, ToDos.toDoArray)
                        checkListElement.value = editedToDo.checkList[itemCounter].value;
                        itemCounter++;
                        if (itemCounter < editedToDo.checkList.length) {
                            createNextItem();
                        }
                    }

                    let removeSpecificElementButton = document.createElement('button');
                    DOMManipulation.putElementOnPage(removeSpecificElementButton, undefined, undefined, "remove", checkListElementContainer);
                    removeSpecificElementButton.setAttribute('class', 'remove-specific-element-button')

                    removeSpecificElementButton.addEventListener('click', () => {
                        DOMManipulation.removeElements(removeSpecificElementButton.parentElement)
                    })
                }
                createNextItem();



            },
                () => {
                    document.getElementById('checklist-container').remove();
                }

            );
        }

        checkListInput.addEventListener('click', () => {
            controlCheckList(checkListInput);
        })
        DOMManipulation.putElementOnPage(prioritySelect, 'Priority', undefined, undefined, inputContainer);
        function createSelectOption(text) {
            let option = document.createElement('option');
            prioritySelect.appendChild(option);
            option.value = text;
            option.innerText = text;
        }
        createSelectOption('None');
        createSelectOption('Low');
        createSelectOption('Medium');
        createSelectOption('High');



        container.appendChild(saveButton);
        saveButton.innerText = 'save'
        saveButton.addEventListener('click', () => {

            let checkListValuesArray = [];

            if (editedToDo && inputContainer.getElementsByClassName('checklist-element').length > 0) {//if there are displayed checklist points, use them

                for (let m = 0; m < inputContainer.getElementsByClassName('checklist-element').length; m++) {
                    let currentContainer = inputContainer.getElementsByClassName('checklist-element-container')[m];
                    let elementValue = currentContainer.getElementsByClassName('checklist-element')[0].value;
                    let elementDone = currentContainer.querySelector('input[type="checkbox"]').checked
                    checkListValuesArray.push({ value: elementValue, done: elementDone })

                }
            }
            else if (inputContainer.getElementsByClassName('checklist-element').length > 0) {
                checkListValuesArray = Array.from(inputContainer.getElementsByClassName('checklist-element')).map((el) => { return { value: el.value, done: false } })
            }
            if (editedToDo) {//if editing
                console.log('editing!')
                console.log(checkListValuesArray)
                //ToDos.redefineToDo(editedToDo, titleInput.value, descriptionInput.value, dueDateInput.value, prioritySelect.value, checkListValuesArray);
                //checking if editedToDo refers to the wrong thing
                ToDos.redefineToDo(editedToDo.ordinal, titleInput.value, descriptionInput.value, dueDateInput.value, prioritySelect.value, checkListValuesArray);

                console.log(editedToDo)
                console.log(ToDos.getArrayOfTodos())
            }
            else {//if filling form for a new to do
                console.log('creating a new todo')
                ToDos.createToDo(titleInput.value, descriptionInput.value, dueDateInput.value, prioritySelect.value, checkListValuesArray);

                console.log(ToDos.getArrayOfTodos());
                for (let i = 0; i < inputContainer.getElementsByTagName('input').length; i++) {//clear the form values
                    inputContainer.getElementsByTagName('input')[i].value = '';
                    prioritySelect.value = 'None';
                }
                deadLineInput.checked = false;//uncheck the deadline checkbox
                checkCheckboxStatus(deadLineInput, addDueDateInputOnPage, () => {
                    DOMManipulation.removeElements(inputContainer.querySelector('input[type="date"]'),
                        inputContainer.querySelector('label[for=Due-date]'));
                });

            }
            DisplayingToDos.removeAllDisplayedContent();//remove and display again
            DisplayingToDos.display(ToDos.getArrayOfTodos());
            dealingWithLocalStorage.updateLocalStorage('toDoArray', ToDos.getArrayOfTodos());
            console.log('checking!')
            console.log(ToDos.getArrayOfTodos())
            console.log(JSON.stringify(localStorage.getItem('toDoArray')))
        })


        if (editedToDo) {//if the user is editing todo, display the current values
            console.log(editedToDo)
            console.log(editedToDo.title)
            titleInput.value = editedToDo.title;
            descriptionInput.value = editedToDo.description;
            if (editedToDo.dueDate) {
                deadLineInput.checked = true;
                checkDeadline()
                dueDateInput.value = editedToDo.dueDate;
            }
            if (editedToDo.checkList.length > 0) {
                console.log('there is a checklist')
                console.log(checkListInput)
                checkListInput.checked = true;
                controlCheckList(checkListInput);
            }
        }
    }

    function determineNoteState(particularToDo, containingElement) {
        let noteContainer = document.createElement('div');
        noteContainer.setAttribute('class', 'note-container');
        DOMManipulation.putElementOnPage(noteContainer, undefined, undefined, undefined, containingElement);

        let addNotesButton = document.createElement('button');

        let displayedNote = document.createElement('p');
        let notesInputArea = document.createElement('input');
        let saveNotesButton = document.createElement('button');
        let deleteNotesButton = document.createElement('button');
        let editNoteButton = document.createElement('button');

        function noteEditState() {//remove add button, add input field (with the value set, if available), save and remove buttons
            console.log('note edit state runs')
            if (addNotesButton) {
                addNotesButton.remove();
            }
            if (editNoteButton) {
                editNoteButton.remove();
            }
            DOMManipulation.putElementOnPage(displayedNote, undefined, undefined, undefined, noteContainer)
            if (particularToDo.notes) {
                notesInputArea.value = particularToDo.notes;
            }
            notesInputArea.setAttribute('id', 'note-input-area')
            DOMManipulation.putElementOnPage(notesInputArea, undefined, undefined, undefined, noteContainer);
            DOMManipulation.putElementOnPage(saveNotesButton, undefined, undefined, 'save', noteContainer);
            saveNotesButton.addEventListener('click', () => {
                displayNoteState(notesInputArea.value);
            })
            DOMManipulation.putElementOnPage(deleteNotesButton, undefined, undefined, 'x', noteContainer);
            deleteNotesButton.addEventListener('click', () => {
                noNoteState();
            })

        }
        function displayNoteState(value) {//display the note, remove input area, remove save button, add edit button
            particularToDo.notes = value;
            displayedNote.innerText = value;
            DOMManipulation.removeElements(notesInputArea, saveNotesButton);
            DOMManipulation.putElementOnPage(editNoteButton, undefined, deleteNotesButton, 'Edit note', noteContainer);
            editNoteButton.addEventListener('click', () => {
                noteEditState();
            })
        }
        function noNoteState() {//remove everything from the noteContainer, except the Add note button
            DOMManipulation.removeAllChildren(noteContainer);
            notesInputArea.value = ""
            particularToDo.notes = undefined;
            displayedNote.innerText = ""
            DOMManipulation.putElementOnPage(addNotesButton, undefined, undefined, 'Add notes', noteContainer);
        }
        addNotesButton.addEventListener('click', () => {
            noteEditState();
        })


        if (particularToDo.notes) {//notes exist at start
            noteEditState();//for buttons to appear
            displayNoteState(particularToDo.notes);
        }
        else {
            noNoteState();
        }
    }

    addButton.addEventListener('click', () => {
        console.log('addbutton clicked');

        if (document.getElementById('form-container').getElementsByClassName('input-container').length < 1) {//if form has not been created already
            console.log('there are no forms');
            createFormToDefineToDo(formContainer);
        }
    })
    function addCheckListElementCheckBox(DOMelement, ToDoObject, checkListElementOrdinal, particularSetOfTodos) {//later put outside and use it also for the edited todo
        let statusChecker = document.createElement('input')
        statusChecker.setAttribute('type', 'checkbox')
        statusChecker.setAttribute('id', `${ToDoObject.ordinal}-${checkListElementOrdinal}`)//id is the ToDoOrdinal-checklist element number, e.g. 0-0, 0-1, 1-0 etc.
        console.log('!CHECK!' + ToDoObject.checkList[checkListElementOrdinal].done)// the [l]!!!!!!
        if (ToDoObject.checkList[checkListElementOrdinal].done) {
            console.log('!CHECK! runs')
            statusChecker.checked = true;
        }
        DOMManipulation.putElementOnPage(statusChecker, undefined, undefined, undefined, DOMelement);
        statusChecker.addEventListener('click', (e) => {
            statusChecker.checked ? ToDoObject.checkList[checkListElementOrdinal].done = true : ToDoObject.checkList[checkListElementOrdinal].done = false
            console.log(particularSetOfTodos)
        })
    }

    return {
        checkCheckboxStatus,
        createFormToDefineToDo,
        determineNoteState,
        addCheckListElementCheckBox,
    }

})();

const DisplayingToDos = (function () {

    let contentDisplay = document.getElementById('content-display');

    function removeAllDisplayedContent() {
        let child = contentDisplay.lastElementChild;
        while (child) {
            contentDisplay.removeChild(child);
            child = contentDisplay.lastElementChild;
        }
    }

    function display(arrayOfTodos) {
        console.log('display todo starts');

        removeAllDisplayedContent()        //refresh when displaying
        for (let j = 0; j < arrayOfTodos.length; j++) {
            console.log('the length of array of todos is ' + arrayOfTodos.length)
            let toDoContainer = document.createElement('div');
            toDoContainer.setAttribute('class', 'todo-container')
            toDoContainer.setAttribute('id', `ToDo number ${j}`)
            contentDisplay.appendChild(toDoContainer);
            DOMManipulation.putElementOnPage('p', undefined, undefined, `Title: ${arrayOfTodos[j].title}`, toDoContainer);
            if (arrayOfTodos[j].description) {
                DOMManipulation.putElementOnPage('p', undefined, undefined, `Description: ${arrayOfTodos[j].description}`, toDoContainer);
            }
            if (arrayOfTodos[j].dueDate) {
                DOMManipulation.putElementOnPage('p', undefined, undefined, `Due date: ${arrayOfTodos[j].dueDate}`, toDoContainer);
            }
            if (arrayOfTodos[j].priority !== 'None') {
                DOMManipulation.putElementOnPage('p', undefined, undefined, `Priority: ${arrayOfTodos[j].priority}`, toDoContainer);
            }
            if (arrayOfTodos[j].checkList.length > 0) {
                let ToDosChecklist = document.createElement('div');
                ToDosChecklist.setAttribute('class', 'checklist')
                DOMManipulation.putElementOnPage(ToDosChecklist, undefined, undefined, 'checklist:', toDoContainer);
                for (let l = 0; l < arrayOfTodos[j].checkList.length; l++) {

                    let displayedCheckListElementContainer = document.createElement('div');//this is new
                    DOMManipulation.putElementOnPage(displayedCheckListElementContainer, undefined, undefined, undefined, ToDosChecklist);//this is new
                    displayedCheckListElementContainer.setAttribute('class', 'checklist-element-container')//this is new

                    DOMManipulation.putElementOnPage('p', undefined, undefined, arrayOfTodos[j].checkList[l].value, displayedCheckListElementContainer);//label
                    ////////////////////////////////moving this to the functionVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
                    // let statusChecker = document.createElement('input')
                    // statusChecker.setAttribute('type', 'checkbox')
                    // statusChecker.setAttribute('id', `${arrayOfTodos[j].ordinal}-${l}`)//id is the ToDoOrdinal-checklist element number, e.g. 0-0, 0-1, 1-0 etc.
                    // console.log('!CHECK!' + arrayOfTodos[j].checkList[l].done)
                    // if (arrayOfTodos[j].checkList[l].done) {
                    //     console.log('!CHECK! runs')
                    //     statusChecker.checked = true;
                    // }
                    // DOMManipulation.putElementOnPage(statusChecker, undefined, undefined, undefined, displayedCheckListElementContainer);
                    // statusChecker.addEventListener('click', (e) => {
                    //     form.checkCheckboxStatus(statusChecker,
                    //         () => {
                    //             arrayOfTodos[e.target.id[0]].checkList[e.target.id[e.target.id.length - 1]].done = true;
                    //             console.log(e.target.id + "checked")
                    //         },
                    //         () => {
                    //             arrayOfTodos[e.target.id[0]].checkList[e.target.id[e.target.id.length - 1]].done = false;
                    //             console.log(e.target.id + "notchecked")
                    //         })
                    //     console.log(arrayOfTodos)
                    // })
                    ////////////////////////////////moving this to the function^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                    form.addCheckListElementCheckBox(displayedCheckListElementContainer, arrayOfTodos[j], l, arrayOfTodos)//fun function instead of all the code freely

                    //finish this function so that it can apply also to the edited todo's checklist
                    //then move it (to Form? and use it in both places)
                    // function addCheckListElementCheckBox(DOMelement, ToDoObject, checkListElementOrdinal, particularSetOfTodos) {//later put outside and use it also for the edited todo
                    //     let statusChecker = document.createElement('input')
                    //     statusChecker.setAttribute('type', 'checkbox')
                    //     statusChecker.setAttribute('id', `${ToDoObject.ordinal}-${checkListElementOrdinal}`)//id is the ToDoOrdinal-checklist element number, e.g. 0-0, 0-1, 1-0 etc.
                    //     console.log('!CHECK!' + ToDoObject.checkList[checkListElementOrdinal].done)// the [l]!!!!!!
                    //     if (ToDoObject.checkList[checkListElementOrdinal].done) {
                    //         console.log('!CHECK! runs')
                    //         statusChecker.checked = true;
                    //     }
                    //     DOMManipulation.putElementOnPage(statusChecker, undefined, undefined, undefined, DOMelement);
                    //     statusChecker.addEventListener('click', (e) => {
                    //         form.checkCheckboxStatus(statusChecker,
                    //             () => {
                    //                 particularSetOfTodos[e.target.id[0]].checkList[e.target.id[e.target.id.length - 1]].done = true;//change this to the ToDoObject or not?
                    //                 console.log(e.target.id + "checked")
                    //             },
                    //             () => {
                    //                 particularSetOfTodos[e.target.id[0]].checkList[e.target.id[e.target.id.length - 1]].done = false;//change this to the ToDoObject or not?
                    //                 console.log(e.target.id + "notchecked")
                    //             })
                    //         console.log(arrayOfTodos)
                    //     })
                    // }

                }

            }



            DOMManipulation.putElementOnPage('p', undefined, undefined, `Status: ${arrayOfTodos[j].toDoStatus}`, toDoContainer);
            let editToDoButton = document.createElement('button');
            DOMManipulation.putElementOnPage(editToDoButton, undefined, undefined, 'edit', toDoContainer);
            editToDoButton.addEventListener('click', () => {
                console.log('edit todo button clicked');
                DOMManipulation.removeAllChildren(toDoContainer);
                console.log(ToDos.toDoArray[j])
                form.createFormToDefineToDo(toDoContainer, ToDos.toDoArray[j]);


            })

            let deleteToDoButton = document.createElement('button')
            DOMManipulation.putElementOnPage(deleteToDoButton, undefined, undefined, 'delete', toDoContainer);
            deleteToDoButton.addEventListener('click', () => {
                console.log('delete todo clicked')
                arrayOfTodos.splice(j, 1);
                toDoContainer.remove();
                console.log('to do array after deleting element' + JSON.stringify(arrayOfTodos));
                console.log('attention, this is local storage' + localStorage.getItem('toDoArray'));
            })
            console.log(arrayOfTodos[j])
            console.log(arrayOfTodos[j].checkList)
            console.log('notes' + arrayOfTodos[j].notes)

            form.determineNoteState(arrayOfTodos[j], toDoContainer);

            toDoContainer.addEventListener('click', () => {
                console.log('todo container clicked, localstorage updated')
                dealingWithLocalStorage.updateLocalStorage('toDoArray', arrayOfTodos);
                console.log('todoarray is' + JSON.stringify(arrayOfTodos))
                console.log('localstorage after updating:')
                console.log(JSON.stringify(localStorage.getItem('toDoArray')))
            })
        }
    }

    return {
        display,
        removeAllDisplayedContent
    }
})();

const ToDos = (function () {
    console.log('create todo runs');
    let toDoArray = [];//the array is cleared then fetched from LS
    let ordinal = 0;
    if (localStorage.getItem('toDoArray')) {
        toDoArray = JSON.parse(localStorage.getItem('toDoArray'));
        ordinal = toDoArray.length;
    }

    class toDo {
        constructor(title, description, dueDate, priority, checkList) {
            this.title = title;
            this.description = description;
            this.priority = priority;
            while (toDoArray.some((item)=>{return item.ordinal === ordinal})){//ensure ordinals do not duplicate
                ordinal++
                if (ordinal > 9999){
                    alert('Infinite loop error');
                    break;
                }
            }
            this.ordinal = ordinal;
            this.toDoStatus = "open"
            ordinal++;
            if (dueDate) {
                this.dueDate = dueDate;
            }
            if (checkList) {
                this.checkList = checkList;
            }
        }
    }

    function createToDo(title, description, dueDate, priority, checkList) {
        let newToDo = new toDo(title, description, dueDate, priority, checkList);
        toDoArray.push(newToDo);
        dealingWithLocalStorage.updateLocalStorage('toDoArray', toDoArray);
    }

    function redefineToDo(ordinal, title, description, dueDate, priority, checkList) {
        let RedefinedToDo = toDoArray.find(item => item.ordinal === ordinal);
        RedefinedToDo.title = title;
        RedefinedToDo.description = description;
        RedefinedToDo.dueDate = dueDate;
        RedefinedToDo.priority = priority;
        RedefinedToDo.checkList = checkList;
    }

    function getArrayOfTodos() {//use this later
        return toDoArray;
    }

    function replaceArrayOfTodos(arr) {
        toDoArray = arr
    }

    return {
        createToDo,
        redefineToDo,
        getArrayOfTodos,
        replaceArrayOfTodos,
        toDoArray,//restrict it later, to expose only a get of the arrat or perhaps particular properties to be changed, e.g. checklist status or priority
    }
})();

const dealingWithLocalStorage = (function () {
    function updateLocalStorage(keyName, value) {
        console.log('updating local storage with');
        console.log(JSON.stringify(value));
        console.log(`storage before updating ${JSON.parse(localStorage.getItem(value))}`)
        localStorage.setItem(keyName, JSON.stringify(value))
        console.log(`storage after updating ${JSON.parse(localStorage.getItem(value))}`)
    }
    return {
        updateLocalStorage,
    }
})();
if (localStorage.getItem('toDoArray')) {//if something has been set in the local storage, then retrieve on startup
    ToDos.replaceArrayOfTodos(JSON.parse(localStorage.getItem('toDoArray')));
    DisplayingToDos.display(JSON.parse(localStorage.getItem('toDoArray')));
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLHdDQUF3QyxZQUFZO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixhQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGNBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msd0NBQXdDO0FBQ3ZGO0FBQ0EsOENBQThDLHdDQUF3QztBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9ybS1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMmM5ZmQxO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxyXFxufVxcclxcblxcclxcbiNpbnB1dC1jb250YWluZXIge1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgN2ZyO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50LWRpc3BsYXl7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjYwcHgsIDMwMHB4KSk7XFxyXFxufVxcclxcbi50b2RvLWNvbnRhaW5lcntcXHJcXG4gICAgbWFyZ2luOiAyMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIGNvbG9yOiAjMWE2MTgwO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjRzIGVhc2U7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkRBQTZEO0FBQ2pFO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCx1QkFBdUI7Ozs7SUFJdkIsNkJBQTZCO0lBQzdCLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9ybS1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMmM5ZmQxO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxyXFxufVxcclxcblxcclxcbiNpbnB1dC1jb250YWluZXIge1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgN2ZyO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50LWRpc3BsYXl7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjYwcHgsIDMwMHB4KSk7XFxyXFxufVxcclxcbi50b2RvLWNvbnRhaW5lcntcXHJcXG4gICAgbWFyZ2luOiAyMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIGNvbG9yOiAjMWE2MTgwO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjRzIGVhc2U7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vQ3VycmVudCBzdGF0dXM6XHJcblxyXG4vL0NoZWNrYm94ZXMgLSBlbnN1cmUgcHJvcGVyIGJlaGF2aW91ciB3aGVuIGVkaXRpbmcgYSBUb0RvXHJcbi8vSXNzdWVzOlxyXG4vLzEpIFdoZW4gY2hlY2tsaXN0IGVsZW1lbnRzIGFyZSBlZGl0ZWQsIHRoZSBjaGFuZ2VzIGFyZSBub3Qgc2F2ZWRcclxuXHJcbi8vUmVhc29uOiB0aGUgY29kZSB1c2VkIHdoZW4gc2F2aW5nIHRoZSBUb0RvIGN1cnJlbnRseSBmZXRjaGVzIGluZm8gZnJvbSB0aGUgc2F2ZWQgYXJyYXlcclxuLy90aGlzIHdhcyBtaXN0YWtlbmx5IGRvbmUgdG8gcHJlc2VydmUgdGhlaXIgZG9uZS9ub3QgZG9uZSBzdGF0dXNcclxuXHJcbi8vU29sdXRpb246IGFkZCBjaGVja2JveGVzIHRvIHRoZSBlZGl0ZWQgY2hlY2tsaXN0IGVsZW1lbnRzIGFzIHdlbGwsIHNvIHRoZXkgY2FuIGJlIGVkaXRlZCBhbmQgdGhlIGNvcnJlY3Qgc3RhdHVzIGZldGNoZWQgZnJvbSB0aGUgcGFnZVxyXG5cclxuLy9TdGF0dXM6IGNoZWNrYm94ZXMgYXBwZWFyLCBsb2NhbHN0b3JhZ2UgaXMgbm90IHVwZGF0ZWQgd2hlbiBzYXZpbmcgdGhlIGVkaXRlZCBjaGFuZ2VzXHJcbi8vSE9XRVZFUiBpZiBsb2NhbHN0b3JhZ2UgaXMgdXBkYXRlZCB0aG91Z2ggY2xpY2tpbmcgYW55d2hlcmUgaW4gdGhlIHVwZGF0ZWQgdG9kbyAtIGl0IHdvcmtzXHJcbi8vTmV4dCBzdGVwOiBtYWtlIHN1cmUgdGhlIHNhdmluZyBvZiB0aGUgZWRpdGVkIHRvZG8gaXMgY29kZWQgY29ycmVjdGx5XHJcblxyXG5cclxuXHJcbi8vQlVHUzpcclxuLy8xKSBJZiBvbmUgVG9kb3MgaW4gYW4gZWRpdGVkIHN0YXRlIGFuZCBvdGhlcnMgZ2V0IGRlbGV0ZWQgYW5kIHRoZW4gIHlvdSBzYXZlIHRoZSBjaGFuZ2VzLCB0aGUgZGVsZXRlZCB0b2RvcyByZWFwcGVhclxyXG4vL3N0YXR1czogY2hlY2sgaWYgdGhpcyBzdGlsbCBhcHBsaWVzXHJcblxyXG4vLzIpY2hlY2tsaXN0IGVsZW1lbnRzIGhhdmUgbnVtYmVyZWQgaWRzLCBidXQgdGhvc2UgY2FuIHJlcGVhdCBzbyBjaGFuZ2UgaXRcclxuLy9zdGF0dXM6IGNoZWNrIGlmIHRoaXMgc3RpbGwgYXBwbGllc1xyXG5cclxuLy8zKSB3aGVuIGFkZGluZyBjaGVja2xpc3QgZWxlbWVudHMgaWYgeW91IGNsaWNrICdyZW1vdmUnLCB0aGUgYnV0dG9uIHRvIGFkZCBhbm90aGVyIGVsZW1lbnQgc2hvdWxkIGFwcGVhciAtIGJ1dCBkb2VzIG5vdFxyXG5cclxuLy9OZXh0IHN0ZXBzOlxyXG4vLy0xKWFkZCBhIGZ1bmN0aW9uIGNoZWNraW5nIGlmIFRvRG8gb3JkaW5hbCBpcyBhbHJlYWR5IHVzZWQsIGlmIGl0IGlzLCBza2lwIHRvIG5leHRcclxuLy8wKSBSZXBsYWNlIGNoZWNrQ2hlY2tib3hTdGF0dXMgd2l0aCB0aGUgdGVybmFyeSBvcGVyYXRvciAnZWxlbWVudC5jaGVja2VkID8gaWZUcnVlOiBpZkZhbHNlJ1xyXG4vLzEpIEFkZCByZXN0cmljdGlvbnMgdG8gZm9ybSBpbnB1dCB0byBlbnN1cmUgYWVzdGhldGljIGNvbXBhdGliaWxpdHlcclxuLy8yKSBTdHlsZSBldmVyeXRoaW5nIHRvIGxvb2sgbmljZSBhbmQgbmVhdCBhbmQgY2xlYW4gYW5kIHN1cGVyIGNvb2xcclxuLy8zKSBtYWtlIHRoZW0gZHJhZ2dhYmxlIHRvIHN3aXRjaCBwbGFjZXNcclxuLy80KSBzb3J0IHRoZW0gYnkgZGlmZmVyZW50IGNyaXRlcmlhXHJcbi8vNSkgZGl2aWRlIHRoZW0gaW50byBwcm9qZWN0c1xyXG4vLzYpIGxpbWl0IHdoaWNoIHBhcnRzIG9mIHRvRG9BcnJheSBhcmUgZXhwb3NlZFxyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2ZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHlcclxuLyogPGJ1dHRvbiBpZD1cImNoZWNrbG9jYWxzdG9yYWdlLWJ1dHRvblwiPmNoZWNrIGxvY2FsIHN0b3JhZ2U8L2J1dHRvbj5cclxuPGJ1dHRvbiBpZD1cImNoZWNrIHRvZG9zIGFycmF5LWJ1dHRvblwiPmNoZWNrIGFycmF5IG9mIHRvZG9zPC9idXR0b24+ICovXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVja2xvY2Fsc3RvcmFnZS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvQXJyYXknKSkpXHJcblxyXG59KVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2sgdG9kb3MgYXJyYXktYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhUb0Rvcy5nZXRBcnJheU9mVG9kb3MoKSlcclxufSlcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyIGxvY2FsIHN0b3JhZ2UtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxyXG59KVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuY29uc3QgRE9NTWFuaXB1bGF0aW9uID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIHB1dEVsZW1lbnRPblBhZ2UoZWxlbWVudCwgZGVzY3JpcHRpb24sIGluc2VydEJlZm9yZVdoYXQsIGlubmVyVGV4dCwgcGFyZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlbGVtZW50IHB1dHRlZCBvbiBwYWdlIGlzXCIsIGVsZW1lbnQpXHJcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykgey8vaWYgZWxlbWVudCBpcyBub3Qgb2JqZWN0LCBtZWFuaW5nIGFuIGFscmVhZHkgY3JlYXRlZCBlbGVtZW50XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5uZXJUZXh0KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gaW5uZXJUZXh0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uKSB7Ly9kZXNjcmlwdGlvbiBpcyBmb3IgbGFiZWxsZWQgZm9ybSBlbGVtZW50c1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgZWxlbWVudExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICBlbGVtZW50TGFiZWwuaW5uZXJUZXh0ID0gYCR7ZGVzY3JpcHRpb259YDtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgZGVzY3JpcHRpb24pXHJcbiAgICAgICAgICAgIGlmIChpbnNlcnRCZWZvcmVXaGF0KSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGVsZW1lbnRMYWJlbCwgaW5zZXJ0QmVmb3JlV2hhdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudExhYmVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5zZXJ0QmVmb3JlV2hhdCkge1xyXG4gICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIGluc2VydEJlZm9yZVdoYXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVFbGVtZW50cyguLi5lbGVtZW50cykge1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gZWxlbWVudHMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgY291bnRlcjsgaysrKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50c1trXSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudHNba10ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZHJlbihlbGVtZW50KSB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSBlbGVtZW50LmNoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBtID0gMDsgbSA8PSBjb3VudGVyOyBtKyspIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2l0ZXJhdGlvbicgKyBtKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ20gaXMgJyArIG0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQuY2hpbGRyZW4pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50LmNoaWxkcmVuWzBdKTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2hpbGRyZW5bMF0pIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwdXRFbGVtZW50T25QYWdlLFxyXG4gICAgICAgIHJlbW92ZUVsZW1lbnRzLFxyXG4gICAgICAgIHJlbW92ZUFsbENoaWxkcmVuXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5cclxuY29uc3QgZm9ybSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWJ1dHRvbicpO1xyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNvbnRhaW5lcicpXHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tDaGVja2JveFN0YXR1cyhjaGVja0JveEVsZW1lbnQsIGlmQ2hlY2tlZCwgaWZVbmNoZWNrZWQpIHsvL21ha2Ugc3VyZSB0aGUgcGFyYW1ldGVycyBhcmUgZnVuY3Rpb25zXHJcbiAgICAgICAgaWYgKGNoZWNrQm94RWxlbWVudC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpZkNoZWNrZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpZlVuY2hlY2tlZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZvcm1Ub0RlZmluZVRvRG8oY29udGFpbmVyLCBlZGl0ZWRUb0RvKSB7Ly90aGUgc2Vjb25kIGFyZ3VtZW50IGlzIG9ubHkgdXNlZCB3aGVuIHRoZSBmb3JtIGlzIGNyZWF0ZWQgdG8gZWRpdCBhbiBleGlzdGluZyB0b2RvXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2VkaXRlZCB0byBkbyBpcycpXHJcbiAgICAgICAgY29uc29sZS5sb2coZWRpdGVkVG9EbylcclxuICAgICAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGxldCBkZWFkTGluZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcclxuICAgICAgICBsZXQgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuXHJcblxyXG4gICAgICAgIGxldCBjaGVja0xpc3RFbGVtZW50Q291bnRlciA9IDA7XHJcbiAgICAgICAgbGV0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaW5wdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbnB1dC1jb250YWluZXInKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRDb250YWluZXIpO1xyXG4gICAgICAgIGxldCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgc2F2ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NhdmUtYnV0dG9uJykvL2NoYW5nZWQgdG8gY2xhc3MgZnJvbSBpZCwgc2VlIGlmIGl0IGNhdXNlcyBpc3N1ZXNcclxuXHJcbiAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UodGl0bGVJbnB1dCwgJ1RpdGxlJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGlucHV0Q29udGFpbmVyKTtcclxuICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShkZXNjcmlwdGlvbklucHV0LCAnRGVzY3JpcHRpb24nLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgaW5wdXRDb250YWluZXIpO1xyXG5cclxuICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShkZWFkTGluZUlucHV0LCAnRGVhZGxpbmUnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgaW5wdXRDb250YWluZXIpO1xyXG4gICAgICAgIGRlYWRMaW5lSW5wdXQudHlwZSA9ICdjaGVja2JveCc7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZER1ZURhdGVJbnB1dE9uUGFnZShwYXJlbnQsIGluc2VydEJlZm9yZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZCBkdWUgZGF0ZSBvbiBwYWdlIHJ1bnNcIilcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkdWUgZGF0ZSBpbnB1dCBpc1wiLCBkdWVEYXRlSW5wdXQpXHJcbiAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKGR1ZURhdGVJbnB1dCwgJ0R1ZS1kYXRlJywgaW5zZXJ0QmVmb3JlLCB1bmRlZmluZWQsIHBhcmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjaGVja0RlYWRsaW5lKCkgey8vZm9yIHRoZSBzYWtlIG9mIHJldXNhYmlsaXR5IGluIHRoZSBmb3JtIGFuZCB3aGVuIGVkaXRpbmdcclxuXHJcbiAgICAgICAgICAgIC8vdGhpcyBzaG91bGQgYmUgY29ycmVjdCwgdW5jb21tZW50IGl0IHdoZW4gc2F2aW5nIHRoZSB0b2RvIGlzIGZpeGVkXHJcbiAgICAgICAgICAgIC8vZGVhZExpbmVJbnB1dC5jaGVja2VkID8gYWRkRHVlRGF0ZUlucHV0T25QYWdlKGlucHV0Q29udGFpbmVyLCBpbnB1dENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdsYWJlbFtmb3I9Q2hlY2tsaXN0XScpKSA6IERPTU1hbmlwdWxhdGlvbi5yZW1vdmVFbGVtZW50cyhpbnB1dENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZGF0ZVwiXScpLCBpbnB1dENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdsYWJlbFtmb3I9RHVlLWRhdGVdJykpXHJcblxyXG4gICAgICAgICAgICBjaGVja0NoZWNrYm94U3RhdHVzKGRlYWRMaW5lSW5wdXQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFkZER1ZURhdGVJbnB1dE9uUGFnZShpbnB1dENvbnRhaW5lciwgaW5wdXRDb250YWluZXIucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPUNoZWNrbGlzdF0nKSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucmVtb3ZlRWxlbWVudHMoaW5wdXRDb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImRhdGVcIl0nKSwgaW5wdXRDb250YWluZXIucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPUR1ZS1kYXRlXScpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlYWRMaW5lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNoZWNrRGVhZGxpbmUoKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICBsZXQgY2hlY2tMaXN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNoZWNrTGlzdElucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKGNoZWNrTGlzdElucHV0LCAnQ2hlY2tsaXN0JywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGlucHV0Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY29udHJvbENoZWNrTGlzdChjaGVja0xpc3RDaGVja0JveCkge1xyXG4gICAgICAgICAgICBjaGVja0NoZWNrYm94U3RhdHVzKGNoZWNrTGlzdENoZWNrQm94LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShjaGVja2xpc3RDb250YWluZXIsIHVuZGVmaW5lZCwgaW5wdXRDb250YWluZXIucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPVByaW9yaXR5XScpLCB1bmRlZmluZWQsIGlucHV0Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIGNoZWNrbGlzdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NoZWNrbGlzdC1jb250YWluZXInKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbUNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlTmV4dEl0ZW0oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrTGlzdEVsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudE51bWJlciA9IGNoZWNrTGlzdEVsZW1lbnRDb3VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrTGlzdEVsZW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIGVsZW1lbnROdW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrTGlzdEVsZW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaGVja2xpc3QtZWxlbWVudC1jb250YWluZXInKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja0xpc3RFbGVtZW50Q291bnRlcisrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrTGlzdEVsZW1lbnRDb250YWluZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGVja0xpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja0xpc3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2tsaXN0LWVsZW1lbnQnKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoY2hlY2tMaXN0RWxlbWVudCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgY2hlY2tMaXN0RWxlbWVudENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhZGROZXh0RWxlbWVudEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKGFkZE5leHRFbGVtZW50QnV0dG9uLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCIrXCIsIGNoZWNrTGlzdEVsZW1lbnRDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZE5leHRFbGVtZW50QnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkLW5leHQtZWxlbWVudC1idXR0b24nKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhZGROZXh0RWxlbWVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnJlbW92ZUVsZW1lbnRzKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FkZC1uZXh0LWVsZW1lbnQtYnV0dG9uJylbMF0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXh0SXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlZGl0ZWRUb0RvICYmIGVkaXRlZFRvRG8uY2hlY2tMaXN0W2l0ZW1Db3VudGVyXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2FkZENoZWNrTGlzdEVsZW1lbnRDaGVja0JveChET01lbGVtZW50LCBUb0RvT2JqZWN0LCBjaGVja0xpc3RFbGVtZW50T3JkaW5hbCwgcGFydGljdWxhclNldE9mVG9kb3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uYWRkQ2hlY2tMaXN0RWxlbWVudENoZWNrQm94KGNoZWNrTGlzdEVsZW1lbnRDb250YWluZXIsIGVkaXRlZFRvRG8sIGl0ZW1Db3VudGVyLCBUb0Rvcy50b0RvQXJyYXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrTGlzdEVsZW1lbnQudmFsdWUgPSBlZGl0ZWRUb0RvLmNoZWNrTGlzdFtpdGVtQ291bnRlcl0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Db3VudGVyKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtQ291bnRlciA8IGVkaXRlZFRvRG8uY2hlY2tMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV4dEl0ZW0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlbW92ZVNwZWNpZmljRWxlbWVudEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKHJlbW92ZVNwZWNpZmljRWxlbWVudEJ1dHRvbiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwicmVtb3ZlXCIsIGNoZWNrTGlzdEVsZW1lbnRDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVNwZWNpZmljRWxlbWVudEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JlbW92ZS1zcGVjaWZpYy1lbGVtZW50LWJ1dHRvbicpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVNwZWNpZmljRWxlbWVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnJlbW92ZUVsZW1lbnRzKHJlbW92ZVNwZWNpZmljRWxlbWVudEJ1dHRvbi5wYXJlbnRFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVOZXh0SXRlbSgpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVja2xpc3QtY29udGFpbmVyJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hlY2tMaXN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRyb2xDaGVja0xpc3QoY2hlY2tMaXN0SW5wdXQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UocHJpb3JpdHlTZWxlY3QsICdQcmlvcml0eScsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBpbnB1dENvbnRhaW5lcik7XHJcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlU2VsZWN0T3B0aW9uKHRleHQpIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSB0ZXh0O1xyXG4gICAgICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3JlYXRlU2VsZWN0T3B0aW9uKCdOb25lJyk7XHJcbiAgICAgICAgY3JlYXRlU2VsZWN0T3B0aW9uKCdMb3cnKTtcclxuICAgICAgICBjcmVhdGVTZWxlY3RPcHRpb24oJ01lZGl1bScpO1xyXG4gICAgICAgIGNyZWF0ZVNlbGVjdE9wdGlvbignSGlnaCcpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcclxuICAgICAgICBzYXZlQnV0dG9uLmlubmVyVGV4dCA9ICdzYXZlJ1xyXG4gICAgICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2hlY2tMaXN0VmFsdWVzQXJyYXkgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlZGl0ZWRUb0RvICYmIGlucHV0Q29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NoZWNrbGlzdC1lbGVtZW50JykubGVuZ3RoID4gMCkgey8vaWYgdGhlcmUgYXJlIGRpc3BsYXllZCBjaGVja2xpc3QgcG9pbnRzLCB1c2UgdGhlbVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgaW5wdXRDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2hlY2tsaXN0LWVsZW1lbnQnKS5sZW5ndGg7IG0rKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50Q29udGFpbmVyID0gaW5wdXRDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2hlY2tsaXN0LWVsZW1lbnQtY29udGFpbmVyJylbbV07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRWYWx1ZSA9IGN1cnJlbnRDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2hlY2tsaXN0LWVsZW1lbnQnKVswXS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudERvbmUgPSBjdXJyZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmNoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICBjaGVja0xpc3RWYWx1ZXNBcnJheS5wdXNoKHsgdmFsdWU6IGVsZW1lbnRWYWx1ZSwgZG9uZTogZWxlbWVudERvbmUgfSlcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaW5wdXRDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2hlY2tsaXN0LWVsZW1lbnQnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja0xpc3RWYWx1ZXNBcnJheSA9IEFycmF5LmZyb20oaW5wdXRDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2hlY2tsaXN0LWVsZW1lbnQnKSkubWFwKChlbCkgPT4geyByZXR1cm4geyB2YWx1ZTogZWwudmFsdWUsIGRvbmU6IGZhbHNlIH0gfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZWRpdGVkVG9Ebykgey8vaWYgZWRpdGluZ1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2VkaXRpbmchJylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoZWNrTGlzdFZhbHVlc0FycmF5KVxyXG4gICAgICAgICAgICAgICAgLy9Ub0Rvcy5yZWRlZmluZVRvRG8oZWRpdGVkVG9EbywgdGl0bGVJbnB1dC52YWx1ZSwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgZHVlRGF0ZUlucHV0LnZhbHVlLCBwcmlvcml0eVNlbGVjdC52YWx1ZSwgY2hlY2tMaXN0VmFsdWVzQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgLy9jaGVja2luZyBpZiBlZGl0ZWRUb0RvIHJlZmVycyB0byB0aGUgd3JvbmcgdGhpbmdcclxuICAgICAgICAgICAgICAgIFRvRG9zLnJlZGVmaW5lVG9EbyhlZGl0ZWRUb0RvLm9yZGluYWwsIHRpdGxlSW5wdXQudmFsdWUsIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsIGR1ZURhdGVJbnB1dC52YWx1ZSwgcHJpb3JpdHlTZWxlY3QudmFsdWUsIGNoZWNrTGlzdFZhbHVlc0FycmF5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlZGl0ZWRUb0RvKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coVG9Eb3MuZ2V0QXJyYXlPZlRvZG9zKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7Ly9pZiBmaWxsaW5nIGZvcm0gZm9yIGEgbmV3IHRvIGRvXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRpbmcgYSBuZXcgdG9kbycpXHJcbiAgICAgICAgICAgICAgICBUb0Rvcy5jcmVhdGVUb0RvKHRpdGxlSW5wdXQudmFsdWUsIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsIGR1ZURhdGVJbnB1dC52YWx1ZSwgcHJpb3JpdHlTZWxlY3QudmFsdWUsIGNoZWNrTGlzdFZhbHVlc0FycmF5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhUb0Rvcy5nZXRBcnJheU9mVG9kb3MoKSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Q29udGFpbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpLmxlbmd0aDsgaSsrKSB7Ly9jbGVhciB0aGUgZm9ybSB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVtpXS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5U2VsZWN0LnZhbHVlID0gJ05vbmUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVhZExpbmVJbnB1dC5jaGVja2VkID0gZmFsc2U7Ly91bmNoZWNrIHRoZSBkZWFkbGluZSBjaGVja2JveFxyXG4gICAgICAgICAgICAgICAgY2hlY2tDaGVja2JveFN0YXR1cyhkZWFkTGluZUlucHV0LCBhZGREdWVEYXRlSW5wdXRPblBhZ2UsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucmVtb3ZlRWxlbWVudHMoaW5wdXRDb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImRhdGVcIl0nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPUR1ZS1kYXRlXScpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBEaXNwbGF5aW5nVG9Eb3MucmVtb3ZlQWxsRGlzcGxheWVkQ29udGVudCgpOy8vcmVtb3ZlIGFuZCBkaXNwbGF5IGFnYWluXHJcbiAgICAgICAgICAgIERpc3BsYXlpbmdUb0Rvcy5kaXNwbGF5KFRvRG9zLmdldEFycmF5T2ZUb2RvcygpKTtcclxuICAgICAgICAgICAgZGVhbGluZ1dpdGhMb2NhbFN0b3JhZ2UudXBkYXRlTG9jYWxTdG9yYWdlKCd0b0RvQXJyYXknLCBUb0Rvcy5nZXRBcnJheU9mVG9kb3MoKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGVja2luZyEnKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhUb0Rvcy5nZXRBcnJheU9mVG9kb3MoKSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9BcnJheScpKSlcclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgaWYgKGVkaXRlZFRvRG8pIHsvL2lmIHRoZSB1c2VyIGlzIGVkaXRpbmcgdG9kbywgZGlzcGxheSB0aGUgY3VycmVudCB2YWx1ZXNcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZWRpdGVkVG9EbylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZWRpdGVkVG9Eby50aXRsZSlcclxuICAgICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IGVkaXRlZFRvRG8udGl0bGU7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBlZGl0ZWRUb0RvLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICBpZiAoZWRpdGVkVG9Eby5kdWVEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBkZWFkTGluZUlucHV0LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tEZWFkbGluZSgpXHJcbiAgICAgICAgICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSBlZGl0ZWRUb0RvLmR1ZURhdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVkaXRlZFRvRG8uY2hlY2tMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGVyZSBpcyBhIGNoZWNrbGlzdCcpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaGVja0xpc3RJbnB1dClcclxuICAgICAgICAgICAgICAgIGNoZWNrTGlzdElucHV0LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29udHJvbENoZWNrTGlzdChjaGVja0xpc3RJbnB1dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGV0ZXJtaW5lTm90ZVN0YXRlKHBhcnRpY3VsYXJUb0RvLCBjb250YWluaW5nRWxlbWVudCkge1xyXG4gICAgICAgIGxldCBub3RlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbm90ZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25vdGUtY29udGFpbmVyJyk7XHJcbiAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2Uobm90ZUNvbnRhaW5lciwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgY29udGFpbmluZ0VsZW1lbnQpO1xyXG5cclxuICAgICAgICBsZXQgYWRkTm90ZXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICAgICAgbGV0IGRpc3BsYXllZE5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgbGV0IG5vdGVzSW5wdXRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBsZXQgc2F2ZU5vdGVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgbGV0IGRlbGV0ZU5vdGVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgbGV0IGVkaXROb3RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG5vdGVFZGl0U3RhdGUoKSB7Ly9yZW1vdmUgYWRkIGJ1dHRvbiwgYWRkIGlucHV0IGZpZWxkICh3aXRoIHRoZSB2YWx1ZSBzZXQsIGlmIGF2YWlsYWJsZSksIHNhdmUgYW5kIHJlbW92ZSBidXR0b25zXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3RlIGVkaXQgc3RhdGUgcnVucycpXHJcbiAgICAgICAgICAgIGlmIChhZGROb3Rlc0J1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgYWRkTm90ZXNCdXR0b24ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVkaXROb3RlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICBlZGl0Tm90ZUJ1dHRvbi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShkaXNwbGF5ZWROb3RlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBub3RlQ29udGFpbmVyKVxyXG4gICAgICAgICAgICBpZiAocGFydGljdWxhclRvRG8ubm90ZXMpIHtcclxuICAgICAgICAgICAgICAgIG5vdGVzSW5wdXRBcmVhLnZhbHVlID0gcGFydGljdWxhclRvRG8ubm90ZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbm90ZXNJbnB1dEFyZWEuc2V0QXR0cmlidXRlKCdpZCcsICdub3RlLWlucHV0LWFyZWEnKVxyXG4gICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShub3Rlc0lucHV0QXJlYSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgbm90ZUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKHNhdmVOb3Rlc0J1dHRvbiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsICdzYXZlJywgbm90ZUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIHNhdmVOb3Rlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOb3RlU3RhdGUobm90ZXNJbnB1dEFyZWEudmFsdWUpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShkZWxldGVOb3Rlc0J1dHRvbiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsICd4Jywgbm90ZUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGRlbGV0ZU5vdGVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9Ob3RlU3RhdGUoKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGRpc3BsYXlOb3RlU3RhdGUodmFsdWUpIHsvL2Rpc3BsYXkgdGhlIG5vdGUsIHJlbW92ZSBpbnB1dCBhcmVhLCByZW1vdmUgc2F2ZSBidXR0b24sIGFkZCBlZGl0IGJ1dHRvblxyXG4gICAgICAgICAgICBwYXJ0aWN1bGFyVG9Eby5ub3RlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICBkaXNwbGF5ZWROb3RlLmlubmVyVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucmVtb3ZlRWxlbWVudHMobm90ZXNJbnB1dEFyZWEsIHNhdmVOb3Rlc0J1dHRvbik7XHJcbiAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKGVkaXROb3RlQnV0dG9uLCB1bmRlZmluZWQsIGRlbGV0ZU5vdGVzQnV0dG9uLCAnRWRpdCBub3RlJywgbm90ZUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGVkaXROb3RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm90ZUVkaXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBub05vdGVTdGF0ZSgpIHsvL3JlbW92ZSBldmVyeXRoaW5nIGZyb20gdGhlIG5vdGVDb250YWluZXIsIGV4Y2VwdCB0aGUgQWRkIG5vdGUgYnV0dG9uXHJcbiAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5yZW1vdmVBbGxDaGlsZHJlbihub3RlQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgbm90ZXNJbnB1dEFyZWEudmFsdWUgPSBcIlwiXHJcbiAgICAgICAgICAgIHBhcnRpY3VsYXJUb0RvLm5vdGVzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBkaXNwbGF5ZWROb3RlLmlubmVyVGV4dCA9IFwiXCJcclxuICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoYWRkTm90ZXNCdXR0b24sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAnQWRkIG5vdGVzJywgbm90ZUNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFkZE5vdGVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBub3RlRWRpdFN0YXRlKCk7XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIGlmIChwYXJ0aWN1bGFyVG9Eby5ub3Rlcykgey8vbm90ZXMgZXhpc3QgYXQgc3RhcnRcclxuICAgICAgICAgICAgbm90ZUVkaXRTdGF0ZSgpOy8vZm9yIGJ1dHRvbnMgdG8gYXBwZWFyXHJcbiAgICAgICAgICAgIGRpc3BsYXlOb3RlU3RhdGUocGFydGljdWxhclRvRG8ubm90ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbm9Ob3RlU3RhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhZGRidXR0b24gY2xpY2tlZCcpO1xyXG5cclxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY29udGFpbmVyJykuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5wdXQtY29udGFpbmVyJykubGVuZ3RoIDwgMSkgey8vaWYgZm9ybSBoYXMgbm90IGJlZW4gY3JlYXRlZCBhbHJlYWR5XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGVyZSBhcmUgbm8gZm9ybXMnKTtcclxuICAgICAgICAgICAgY3JlYXRlRm9ybVRvRGVmaW5lVG9Ebyhmb3JtQ29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgZnVuY3Rpb24gYWRkQ2hlY2tMaXN0RWxlbWVudENoZWNrQm94KERPTWVsZW1lbnQsIFRvRG9PYmplY3QsIGNoZWNrTGlzdEVsZW1lbnRPcmRpbmFsLCBwYXJ0aWN1bGFyU2V0T2ZUb2Rvcykgey8vbGF0ZXIgcHV0IG91dHNpZGUgYW5kIHVzZSBpdCBhbHNvIGZvciB0aGUgZWRpdGVkIHRvZG9cclxuICAgICAgICBsZXQgc3RhdHVzQ2hlY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICBzdGF0dXNDaGVja2VyLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXHJcbiAgICAgICAgc3RhdHVzQ2hlY2tlci5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7VG9Eb09iamVjdC5vcmRpbmFsfS0ke2NoZWNrTGlzdEVsZW1lbnRPcmRpbmFsfWApLy9pZCBpcyB0aGUgVG9Eb09yZGluYWwtY2hlY2tsaXN0IGVsZW1lbnQgbnVtYmVyLCBlLmcuIDAtMCwgMC0xLCAxLTAgZXRjLlxyXG4gICAgICAgIGNvbnNvbGUubG9nKCchQ0hFQ0shJyArIFRvRG9PYmplY3QuY2hlY2tMaXN0W2NoZWNrTGlzdEVsZW1lbnRPcmRpbmFsXS5kb25lKS8vIHRoZSBbbF0hISEhISFcclxuICAgICAgICBpZiAoVG9Eb09iamVjdC5jaGVja0xpc3RbY2hlY2tMaXN0RWxlbWVudE9yZGluYWxdLmRvbmUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJyFDSEVDSyEgcnVucycpXHJcbiAgICAgICAgICAgIHN0YXR1c0NoZWNrZXIuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKHN0YXR1c0NoZWNrZXIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIERPTWVsZW1lbnQpO1xyXG4gICAgICAgIHN0YXR1c0NoZWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBzdGF0dXNDaGVja2VyLmNoZWNrZWQgPyBUb0RvT2JqZWN0LmNoZWNrTGlzdFtjaGVja0xpc3RFbGVtZW50T3JkaW5hbF0uZG9uZSA9IHRydWUgOiBUb0RvT2JqZWN0LmNoZWNrTGlzdFtjaGVja0xpc3RFbGVtZW50T3JkaW5hbF0uZG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcnRpY3VsYXJTZXRPZlRvZG9zKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjaGVja0NoZWNrYm94U3RhdHVzLFxyXG4gICAgICAgIGNyZWF0ZUZvcm1Ub0RlZmluZVRvRG8sXHJcbiAgICAgICAgZGV0ZXJtaW5lTm90ZVN0YXRlLFxyXG4gICAgICAgIGFkZENoZWNrTGlzdEVsZW1lbnRDaGVja0JveCxcclxuICAgIH1cclxuXHJcbn0pKCk7XHJcblxyXG5jb25zdCBEaXNwbGF5aW5nVG9Eb3MgPSAoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGxldCBjb250ZW50RGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50LWRpc3BsYXknKTtcclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVBbGxEaXNwbGF5ZWRDb250ZW50KCkge1xyXG4gICAgICAgIGxldCBjaGlsZCA9IGNvbnRlbnREaXNwbGF5Lmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgd2hpbGUgKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnREaXNwbGF5LnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuICAgICAgICAgICAgY2hpbGQgPSBjb250ZW50RGlzcGxheS5sYXN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5KGFycmF5T2ZUb2Rvcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkaXNwbGF5IHRvZG8gc3RhcnRzJyk7XHJcblxyXG4gICAgICAgIHJlbW92ZUFsbERpc3BsYXllZENvbnRlbnQoKSAgICAgICAgLy9yZWZyZXNoIHdoZW4gZGlzcGxheWluZ1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyYXlPZlRvZG9zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGUgbGVuZ3RoIG9mIGFycmF5IG9mIHRvZG9zIGlzICcgKyBhcnJheU9mVG9kb3MubGVuZ3RoKVxyXG4gICAgICAgICAgICBsZXQgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0b0RvQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9kby1jb250YWluZXInKVxyXG4gICAgICAgICAgICB0b0RvQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBgVG9EbyBudW1iZXIgJHtqfWApXHJcbiAgICAgICAgICAgIGNvbnRlbnREaXNwbGF5LmFwcGVuZENoaWxkKHRvRG9Db250YWluZXIpO1xyXG4gICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZSgncCcsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBgVGl0bGU6ICR7YXJyYXlPZlRvZG9zW2pdLnRpdGxlfWAsIHRvRG9Db250YWluZXIpO1xyXG4gICAgICAgICAgICBpZiAoYXJyYXlPZlRvZG9zW2pdLmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZSgncCcsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBgRGVzY3JpcHRpb246ICR7YXJyYXlPZlRvZG9zW2pdLmRlc2NyaXB0aW9ufWAsIHRvRG9Db250YWluZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhcnJheU9mVG9kb3Nbal0uZHVlRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoJ3AnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgYER1ZSBkYXRlOiAke2FycmF5T2ZUb2Rvc1tqXS5kdWVEYXRlfWAsIHRvRG9Db250YWluZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhcnJheU9mVG9kb3Nbal0ucHJpb3JpdHkgIT09ICdOb25lJykge1xyXG4gICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoJ3AnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgYFByaW9yaXR5OiAke2FycmF5T2ZUb2Rvc1tqXS5wcmlvcml0eX1gLCB0b0RvQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXJyYXlPZlRvZG9zW2pdLmNoZWNrTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgVG9Eb3NDaGVja2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIFRvRG9zQ2hlY2tsaXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2tsaXN0JylcclxuICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKFRvRG9zQ2hlY2tsaXN0LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgJ2NoZWNrbGlzdDonLCB0b0RvQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGwgPSAwOyBsIDwgYXJyYXlPZlRvZG9zW2pdLmNoZWNrTGlzdC5sZW5ndGg7IGwrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlzcGxheWVkQ2hlY2tMaXN0RWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOy8vdGhpcyBpcyBuZXdcclxuICAgICAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShkaXNwbGF5ZWRDaGVja0xpc3RFbGVtZW50Q29udGFpbmVyLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBUb0Rvc0NoZWNrbGlzdCk7Ly90aGlzIGlzIG5ld1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXllZENoZWNrTGlzdEVsZW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaGVja2xpc3QtZWxlbWVudC1jb250YWluZXInKS8vdGhpcyBpcyBuZXdcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoJ3AnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgYXJyYXlPZlRvZG9zW2pdLmNoZWNrTGlzdFtsXS52YWx1ZSwgZGlzcGxheWVkQ2hlY2tMaXN0RWxlbWVudENvbnRhaW5lcik7Ly9sYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vbW92aW5nIHRoaXMgdG8gdGhlIGZ1bmN0aW9uVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBzdGF0dXNDaGVja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0YXR1c0NoZWNrZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdGF0dXNDaGVja2VyLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHthcnJheU9mVG9kb3Nbal0ub3JkaW5hbH0tJHtsfWApLy9pZCBpcyB0aGUgVG9Eb09yZGluYWwtY2hlY2tsaXN0IGVsZW1lbnQgbnVtYmVyLCBlLmcuIDAtMCwgMC0xLCAxLTAgZXRjLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCchQ0hFQ0shJyArIGFycmF5T2ZUb2Rvc1tqXS5jaGVja0xpc3RbbF0uZG9uZSlcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoYXJyYXlPZlRvZG9zW2pdLmNoZWNrTGlzdFtsXS5kb25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCchQ0hFQ0shIHJ1bnMnKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBzdGF0dXNDaGVja2VyLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShzdGF0dXNDaGVja2VyLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBkaXNwbGF5ZWRDaGVja0xpc3RFbGVtZW50Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdGF0dXNDaGVja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZm9ybS5jaGVja0NoZWNrYm94U3RhdHVzKHN0YXR1c0NoZWNrZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgYXJyYXlPZlRvZG9zW2UudGFyZ2V0LmlkWzBdXS5jaGVja0xpc3RbZS50YXJnZXQuaWRbZS50YXJnZXQuaWQubGVuZ3RoIC0gMV1dLmRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkICsgXCJjaGVja2VkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGFycmF5T2ZUb2Rvc1tlLnRhcmdldC5pZFswXV0uY2hlY2tMaXN0W2UudGFyZ2V0LmlkW2UudGFyZ2V0LmlkLmxlbmd0aCAtIDFdXS5kb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuaWQgKyBcIm5vdGNoZWNrZWRcIilcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGFycmF5T2ZUb2RvcylcclxuICAgICAgICAgICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vbW92aW5nIHRoaXMgdG8gdGhlIGZ1bmN0aW9uXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5hZGRDaGVja0xpc3RFbGVtZW50Q2hlY2tCb3goZGlzcGxheWVkQ2hlY2tMaXN0RWxlbWVudENvbnRhaW5lciwgYXJyYXlPZlRvZG9zW2pdLCBsLCBhcnJheU9mVG9kb3MpLy9mdW4gZnVuY3Rpb24gaW5zdGVhZCBvZiBhbGwgdGhlIGNvZGUgZnJlZWx5XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vZmluaXNoIHRoaXMgZnVuY3Rpb24gc28gdGhhdCBpdCBjYW4gYXBwbHkgYWxzbyB0byB0aGUgZWRpdGVkIHRvZG8ncyBjaGVja2xpc3RcclxuICAgICAgICAgICAgICAgICAgICAvL3RoZW4gbW92ZSBpdCAodG8gRm9ybT8gYW5kIHVzZSBpdCBpbiBib3RoIHBsYWNlcylcclxuICAgICAgICAgICAgICAgICAgICAvLyBmdW5jdGlvbiBhZGRDaGVja0xpc3RFbGVtZW50Q2hlY2tCb3goRE9NZWxlbWVudCwgVG9Eb09iamVjdCwgY2hlY2tMaXN0RWxlbWVudE9yZGluYWwsIHBhcnRpY3VsYXJTZXRPZlRvZG9zKSB7Ly9sYXRlciBwdXQgb3V0c2lkZSBhbmQgdXNlIGl0IGFsc28gZm9yIHRoZSBlZGl0ZWQgdG9kb1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgc3RhdHVzQ2hlY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc3RhdHVzQ2hlY2tlci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBzdGF0dXNDaGVja2VyLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtUb0RvT2JqZWN0Lm9yZGluYWx9LSR7Y2hlY2tMaXN0RWxlbWVudE9yZGluYWx9YCkvL2lkIGlzIHRoZSBUb0RvT3JkaW5hbC1jaGVja2xpc3QgZWxlbWVudCBudW1iZXIsIGUuZy4gMC0wLCAwLTEsIDEtMCBldGMuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCchQ0hFQ0shJyArIFRvRG9PYmplY3QuY2hlY2tMaXN0W2NoZWNrTGlzdEVsZW1lbnRPcmRpbmFsXS5kb25lKS8vIHRoZSBbbF0hISEhISFcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKFRvRG9PYmplY3QuY2hlY2tMaXN0W2NoZWNrTGlzdEVsZW1lbnRPcmRpbmFsXS5kb25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnIUNIRUNLISBydW5zJylcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHN0YXR1c0NoZWNrZXIuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2Uoc3RhdHVzQ2hlY2tlciwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgRE9NZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHN0YXR1c0NoZWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgZm9ybS5jaGVja0NoZWNrYm94U3RhdHVzKHN0YXR1c0NoZWNrZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBwYXJ0aWN1bGFyU2V0T2ZUb2Rvc1tlLnRhcmdldC5pZFswXV0uY2hlY2tMaXN0W2UudGFyZ2V0LmlkW2UudGFyZ2V0LmlkLmxlbmd0aCAtIDFdXS5kb25lID0gdHJ1ZTsvL2NoYW5nZSB0aGlzIHRvIHRoZSBUb0RvT2JqZWN0IG9yIG5vdD9cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuaWQgKyBcImNoZWNrZWRcIilcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgcGFydGljdWxhclNldE9mVG9kb3NbZS50YXJnZXQuaWRbMF1dLmNoZWNrTGlzdFtlLnRhcmdldC5pZFtlLnRhcmdldC5pZC5sZW5ndGggLSAxXV0uZG9uZSA9IGZhbHNlOy8vY2hhbmdlIHRoaXMgdG8gdGhlIFRvRG9PYmplY3Qgb3Igbm90P1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pZCArIFwibm90Y2hlY2tlZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhhcnJheU9mVG9kb3MpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoJ3AnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgYFN0YXR1czogJHthcnJheU9mVG9kb3Nbal0udG9Eb1N0YXR1c31gLCB0b0RvQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgbGV0IGVkaXRUb0RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKGVkaXRUb0RvQnV0dG9uLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgJ2VkaXQnLCB0b0RvQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgZWRpdFRvRG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZWRpdCB0b2RvIGJ1dHRvbiBjbGlja2VkJyk7XHJcbiAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucmVtb3ZlQWxsQ2hpbGRyZW4odG9Eb0NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhUb0Rvcy50b0RvQXJyYXlbal0pXHJcbiAgICAgICAgICAgICAgICBmb3JtLmNyZWF0ZUZvcm1Ub0RlZmluZVRvRG8odG9Eb0NvbnRhaW5lciwgVG9Eb3MudG9Eb0FycmF5W2pdKTtcclxuXHJcblxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgbGV0IGRlbGV0ZVRvRG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShkZWxldGVUb0RvQnV0dG9uLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgJ2RlbGV0ZScsIHRvRG9Db250YWluZXIpO1xyXG4gICAgICAgICAgICBkZWxldGVUb0RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZSB0b2RvIGNsaWNrZWQnKVxyXG4gICAgICAgICAgICAgICAgYXJyYXlPZlRvZG9zLnNwbGljZShqLCAxKTtcclxuICAgICAgICAgICAgICAgIHRvRG9Db250YWluZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndG8gZG8gYXJyYXkgYWZ0ZXIgZGVsZXRpbmcgZWxlbWVudCcgKyBKU09OLnN0cmluZ2lmeShhcnJheU9mVG9kb3MpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdHRlbnRpb24sIHRoaXMgaXMgbG9jYWwgc3RvcmFnZScgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0FycmF5JykpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcnJheU9mVG9kb3Nbal0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFycmF5T2ZUb2Rvc1tqXS5jaGVja0xpc3QpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3RlcycgKyBhcnJheU9mVG9kb3Nbal0ubm90ZXMpXHJcblxyXG4gICAgICAgICAgICBmb3JtLmRldGVybWluZU5vdGVTdGF0ZShhcnJheU9mVG9kb3Nbal0sIHRvRG9Db250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdG9Eb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2RvIGNvbnRhaW5lciBjbGlja2VkLCBsb2NhbHN0b3JhZ2UgdXBkYXRlZCcpXHJcbiAgICAgICAgICAgICAgICBkZWFsaW5nV2l0aExvY2FsU3RvcmFnZS51cGRhdGVMb2NhbFN0b3JhZ2UoJ3RvRG9BcnJheScsIGFycmF5T2ZUb2Rvcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndG9kb2FycmF5IGlzJyArIEpTT04uc3RyaW5naWZ5KGFycmF5T2ZUb2RvcykpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9jYWxzdG9yYWdlIGFmdGVyIHVwZGF0aW5nOicpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0FycmF5JykpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRpc3BsYXksXHJcbiAgICAgICAgcmVtb3ZlQWxsRGlzcGxheWVkQ29udGVudFxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuY29uc3QgVG9Eb3MgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2NyZWF0ZSB0b2RvIHJ1bnMnKTtcclxuICAgIGxldCB0b0RvQXJyYXkgPSBbXTsvL3RoZSBhcnJheSBpcyBjbGVhcmVkIHRoZW4gZmV0Y2hlZCBmcm9tIExTXHJcbiAgICBsZXQgb3JkaW5hbCA9IDA7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9BcnJheScpKSB7XHJcbiAgICAgICAgdG9Eb0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0FycmF5JykpO1xyXG4gICAgICAgIG9yZGluYWwgPSB0b0RvQXJyYXkubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIHRvRG8ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrTGlzdCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgICAgICB3aGlsZSAodG9Eb0FycmF5LnNvbWUoKGl0ZW0pPT57cmV0dXJuIGl0ZW0ub3JkaW5hbCA9PT0gb3JkaW5hbH0pKXsvL2Vuc3VyZSBvcmRpbmFscyBkbyBub3QgZHVwbGljYXRlXHJcbiAgICAgICAgICAgICAgICBvcmRpbmFsKytcclxuICAgICAgICAgICAgICAgIGlmIChvcmRpbmFsID4gOTk5OSl7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0luZmluaXRlIGxvb3AgZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm9yZGluYWwgPSBvcmRpbmFsO1xyXG4gICAgICAgICAgICB0aGlzLnRvRG9TdGF0dXMgPSBcIm9wZW5cIlxyXG4gICAgICAgICAgICBvcmRpbmFsKys7XHJcbiAgICAgICAgICAgIGlmIChkdWVEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjaGVja0xpc3QpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tMaXN0ID0gY2hlY2tMaXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2tMaXN0KSB7XHJcbiAgICAgICAgbGV0IG5ld1RvRG8gPSBuZXcgdG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVja0xpc3QpO1xyXG4gICAgICAgIHRvRG9BcnJheS5wdXNoKG5ld1RvRG8pO1xyXG4gICAgICAgIGRlYWxpbmdXaXRoTG9jYWxTdG9yYWdlLnVwZGF0ZUxvY2FsU3RvcmFnZSgndG9Eb0FycmF5JywgdG9Eb0FycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZWRlZmluZVRvRG8ob3JkaW5hbCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2tMaXN0KSB7XHJcbiAgICAgICAgbGV0IFJlZGVmaW5lZFRvRG8gPSB0b0RvQXJyYXkuZmluZChpdGVtID0+IGl0ZW0ub3JkaW5hbCA9PT0gb3JkaW5hbCk7XHJcbiAgICAgICAgUmVkZWZpbmVkVG9Eby50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIFJlZGVmaW5lZFRvRG8uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICBSZWRlZmluZWRUb0RvLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIFJlZGVmaW5lZFRvRG8ucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICBSZWRlZmluZWRUb0RvLmNoZWNrTGlzdCA9IGNoZWNrTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRBcnJheU9mVG9kb3MoKSB7Ly91c2UgdGhpcyBsYXRlclxyXG4gICAgICAgIHJldHVybiB0b0RvQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVwbGFjZUFycmF5T2ZUb2RvcyhhcnIpIHtcclxuICAgICAgICB0b0RvQXJyYXkgPSBhcnJcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNyZWF0ZVRvRG8sXHJcbiAgICAgICAgcmVkZWZpbmVUb0RvLFxyXG4gICAgICAgIGdldEFycmF5T2ZUb2RvcyxcclxuICAgICAgICByZXBsYWNlQXJyYXlPZlRvZG9zLFxyXG4gICAgICAgIHRvRG9BcnJheSwvL3Jlc3RyaWN0IGl0IGxhdGVyLCB0byBleHBvc2Ugb25seSBhIGdldCBvZiB0aGUgYXJyYXQgb3IgcGVyaGFwcyBwYXJ0aWN1bGFyIHByb3BlcnRpZXMgdG8gYmUgY2hhbmdlZCwgZS5nLiBjaGVja2xpc3Qgc3RhdHVzIG9yIHByaW9yaXR5XHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5jb25zdCBkZWFsaW5nV2l0aExvY2FsU3RvcmFnZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2Uoa2V5TmFtZSwgdmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndXBkYXRpbmcgbG9jYWwgc3RvcmFnZSB3aXRoJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgc3RvcmFnZSBiZWZvcmUgdXBkYXRpbmcgJHtKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHZhbHVlKSl9YClcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXlOYW1lLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXHJcbiAgICAgICAgY29uc29sZS5sb2coYHN0b3JhZ2UgYWZ0ZXIgdXBkYXRpbmcgJHtKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHZhbHVlKSl9YClcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlLFxyXG4gICAgfVxyXG59KSgpO1xyXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9BcnJheScpKSB7Ly9pZiBzb21ldGhpbmcgaGFzIGJlZW4gc2V0IGluIHRoZSBsb2NhbCBzdG9yYWdlLCB0aGVuIHJldHJpZXZlIG9uIHN0YXJ0dXBcclxuICAgIFRvRG9zLnJlcGxhY2VBcnJheU9mVG9kb3MoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0FycmF5JykpKTtcclxuICAgIERpc3BsYXlpbmdUb0Rvcy5kaXNwbGF5KEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9BcnJheScpKSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9