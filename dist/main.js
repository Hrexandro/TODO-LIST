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

//Check all kinds of changes:
//checklist checking and unchecking: works
//adding priority: does not stay, UNLESS you additionally click somewhere to update the local storage
//description and title: ??
//deadline: ??
//status:??
//editing the text and adding new checklist items: ??



//BUGS:
//1) If one Todos in an edited state and others get deleted and then  you save the changes, the deleted todos reappear
//status: check if this still applies

//2)checklist elements have numbered ids, but those can repeat so change it
//status: check if this still applies

//3) when adding checklist elements if you click 'remove', the button to add another element should appear - but does not

//Next steps:
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
                console.log(prioritySelect.value)
                console.log(checkListValuesArray)
                //ToDos.redefineToDo(editedToDo, titleInput.value, descriptionInput.value, dueDateInput.value, prioritySelect.value, checkListValuesArray);
                //checking if editedToDo refers to the wrong thing
                ToDos.redefineToDo(editedToDo.ordinal, titleInput.value, descriptionInput.value, dueDateInput.value, prioritySelect.value, checkListValuesArray);
                console.log('to do after saving')
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
                dealingWithLocalStorage.updateLocalStorage('toDoArray', arrayOfTodos);
                console.log('arrayOfTodos')
                console.log(arrayOfTodos)
                console.log('get to do array')
                console.log(ToDos.getArrayOfTodos())
                console.log('localstorage')
                console.log(JSON.stringify(localStorage.getItem('toDoArray')))

                // console.log('to do array after deleting element' + JSON.stringify(arrayOfTodos));
                // console.log('attention, this is local storage' + localStorage.getItem('toDoArray'));
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
            while (toDoArray.some((item) => { return item.ordinal === ordinal })) {//ensure ordinals do not duplicate
                ordinal++
                if (ordinal > 9999) {
                    console.log('Infinite loop error')
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
    DisplayingToDos.display(ToDos.getArrayOfTodos());
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0Esd0NBQXdDLFlBQVk7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGFBQWE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsY0FBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msd0NBQXdDO0FBQ3ZGO0FBQ0EsOENBQThDLHdDQUF3QztBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9ybS1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMmM5ZmQxO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxyXFxufVxcclxcblxcclxcbiNpbnB1dC1jb250YWluZXIge1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgN2ZyO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50LWRpc3BsYXl7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjYwcHgsIDMwMHB4KSk7XFxyXFxufVxcclxcbi50b2RvLWNvbnRhaW5lcntcXHJcXG4gICAgbWFyZ2luOiAyMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIGNvbG9yOiAjMWE2MTgwO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjRzIGVhc2U7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkRBQTZEO0FBQ2pFO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCx1QkFBdUI7Ozs7SUFJdkIsNkJBQTZCO0lBQzdCLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9ybS1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMmM5ZmQxO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxyXFxufVxcclxcblxcclxcbiNpbnB1dC1jb250YWluZXIge1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgN2ZyO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50LWRpc3BsYXl7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjYwcHgsIDMwMHB4KSk7XFxyXFxufVxcclxcbi50b2RvLWNvbnRhaW5lcntcXHJcXG4gICAgbWFyZ2luOiAyMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIGNvbG9yOiAjMWE2MTgwO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjRzIGVhc2U7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vQ3VycmVudCBzdGF0dXM6XHJcblxyXG4vL0NoZWNrYm94ZXMgLSBlbnN1cmUgcHJvcGVyIGJlaGF2aW91ciB3aGVuIGVkaXRpbmcgYSBUb0RvXHJcbi8vSXNzdWVzOlxyXG4vLzEpIFdoZW4gY2hlY2tsaXN0IGVsZW1lbnRzIGFyZSBlZGl0ZWQsIHRoZSBjaGFuZ2VzIGFyZSBub3Qgc2F2ZWRcclxuXHJcbi8vQ2hlY2sgYWxsIGtpbmRzIG9mIGNoYW5nZXM6XHJcbi8vY2hlY2tsaXN0IGNoZWNraW5nIGFuZCB1bmNoZWNraW5nOiB3b3Jrc1xyXG4vL2FkZGluZyBwcmlvcml0eTogZG9lcyBub3Qgc3RheSwgVU5MRVNTIHlvdSBhZGRpdGlvbmFsbHkgY2xpY2sgc29tZXdoZXJlIHRvIHVwZGF0ZSB0aGUgbG9jYWwgc3RvcmFnZVxyXG4vL2Rlc2NyaXB0aW9uIGFuZCB0aXRsZTogPz9cclxuLy9kZWFkbGluZTogPz9cclxuLy9zdGF0dXM6Pz9cclxuLy9lZGl0aW5nIHRoZSB0ZXh0IGFuZCBhZGRpbmcgbmV3IGNoZWNrbGlzdCBpdGVtczogPz9cclxuXHJcblxyXG5cclxuLy9CVUdTOlxyXG4vLzEpIElmIG9uZSBUb2RvcyBpbiBhbiBlZGl0ZWQgc3RhdGUgYW5kIG90aGVycyBnZXQgZGVsZXRlZCBhbmQgdGhlbiAgeW91IHNhdmUgdGhlIGNoYW5nZXMsIHRoZSBkZWxldGVkIHRvZG9zIHJlYXBwZWFyXHJcbi8vc3RhdHVzOiBjaGVjayBpZiB0aGlzIHN0aWxsIGFwcGxpZXNcclxuXHJcbi8vMiljaGVja2xpc3QgZWxlbWVudHMgaGF2ZSBudW1iZXJlZCBpZHMsIGJ1dCB0aG9zZSBjYW4gcmVwZWF0IHNvIGNoYW5nZSBpdFxyXG4vL3N0YXR1czogY2hlY2sgaWYgdGhpcyBzdGlsbCBhcHBsaWVzXHJcblxyXG4vLzMpIHdoZW4gYWRkaW5nIGNoZWNrbGlzdCBlbGVtZW50cyBpZiB5b3UgY2xpY2sgJ3JlbW92ZScsIHRoZSBidXR0b24gdG8gYWRkIGFub3RoZXIgZWxlbWVudCBzaG91bGQgYXBwZWFyIC0gYnV0IGRvZXMgbm90XHJcblxyXG4vL05leHQgc3RlcHM6XHJcbi8vMCkgUmVwbGFjZSBjaGVja0NoZWNrYm94U3RhdHVzIHdpdGggdGhlIHRlcm5hcnkgb3BlcmF0b3IgJ2VsZW1lbnQuY2hlY2tlZCA/IGlmVHJ1ZTogaWZGYWxzZSdcclxuLy8xKSBBZGQgcmVzdHJpY3Rpb25zIHRvIGZvcm0gaW5wdXQgdG8gZW5zdXJlIGFlc3RoZXRpYyBjb21wYXRpYmlsaXR5XHJcbi8vMikgU3R5bGUgZXZlcnl0aGluZyB0byBsb29rIG5pY2UgYW5kIG5lYXQgYW5kIGNsZWFuIGFuZCBzdXBlciBjb29sXHJcbi8vMykgbWFrZSB0aGVtIGRyYWdnYWJsZSB0byBzd2l0Y2ggcGxhY2VzXHJcbi8vNCkgc29ydCB0aGVtIGJ5IGRpZmZlcmVudCBjcml0ZXJpYVxyXG4vLzUpIGRpdmlkZSB0aGVtIGludG8gcHJvamVjdHNcclxuLy82KSBsaW1pdCB3aGljaCBwYXJ0cyBvZiB0b0RvQXJyYXkgYXJlIGV4cG9zZWRcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9mb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5XHJcbi8qIDxidXR0b24gaWQ9XCJjaGVja2xvY2Fsc3RvcmFnZS1idXR0b25cIj5jaGVjayBsb2NhbCBzdG9yYWdlPC9idXR0b24+XHJcbjxidXR0b24gaWQ9XCJjaGVjayB0b2RvcyBhcnJheS1idXR0b25cIj5jaGVjayBhcnJheSBvZiB0b2RvczwvYnV0dG9uPiAqL1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2tsb2NhbHN0b3JhZ2UtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0FycmF5JykpKVxyXG5cclxufSlcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZWNrIHRvZG9zIGFycmF5LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coVG9Eb3MuZ2V0QXJyYXlPZlRvZG9zKCkpXHJcbn0pXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhciBsb2NhbCBzdG9yYWdlLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcclxufSlcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmNvbnN0IERPTU1hbmlwdWxhdGlvbiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBwdXRFbGVtZW50T25QYWdlKGVsZW1lbnQsIGRlc2NyaXB0aW9uLCBpbnNlcnRCZWZvcmVXaGF0LCBpbm5lclRleHQsIHBhcmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZWxlbWVudCBwdXR0ZWQgb24gcGFnZSBpc1wiLCBlbGVtZW50KVxyXG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHsvL2lmIGVsZW1lbnQgaXMgbm90IG9iamVjdCwgbWVhbmluZyBhbiBhbHJlYWR5IGNyZWF0ZWQgZWxlbWVudFxyXG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlubmVyVGV4dCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmlubmVyVGV4dCA9IGlubmVyVGV4dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkZXNjcmlwdGlvbikgey8vZGVzY3JpcHRpb24gaXMgZm9yIGxhYmVsbGVkIGZvcm0gZWxlbWVudHNcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgZWxlbWVudExhYmVsLmlubmVyVGV4dCA9IGAke2Rlc2NyaXB0aW9ufWA7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGRlc2NyaXB0aW9uKVxyXG4gICAgICAgICAgICBpZiAoaW5zZXJ0QmVmb3JlV2hhdCkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShlbGVtZW50TGFiZWwsIGluc2VydEJlZm9yZVdoYXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnRMYWJlbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluc2VydEJlZm9yZVdoYXQpIHtcclxuICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShlbGVtZW50LCBpbnNlcnRCZWZvcmVXaGF0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRWxlbWVudHMoLi4uZWxlbWVudHMpIHtcclxuICAgICAgICBsZXQgY291bnRlciA9IGVsZW1lbnRzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGNvdW50ZXI7IGsrKykge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudHNba10pIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2tdLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGRyZW4oZWxlbWVudCkge1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gZWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPD0gY291bnRlcjsgbSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpdGVyYXRpb24nICsgbSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtIGlzICcgKyBtKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50LmNoaWxkcmVuKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmNoaWxkcmVuWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHV0RWxlbWVudE9uUGFnZSxcclxuICAgICAgICByZW1vdmVFbGVtZW50cyxcclxuICAgICAgICByZW1vdmVBbGxDaGlsZHJlblxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuXHJcbmNvbnN0IGZvcm0gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1idXR0b24nKTtcclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jb250YWluZXInKVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrQ2hlY2tib3hTdGF0dXMoY2hlY2tCb3hFbGVtZW50LCBpZkNoZWNrZWQsIGlmVW5jaGVja2VkKSB7Ly9tYWtlIHN1cmUgdGhlIHBhcmFtZXRlcnMgYXJlIGZ1bmN0aW9uc1xyXG4gICAgICAgIGlmIChjaGVja0JveEVsZW1lbnQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaWZDaGVja2VkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gaWZVbmNoZWNrZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVGb3JtVG9EZWZpbmVUb0RvKGNvbnRhaW5lciwgZWRpdGVkVG9Ebykgey8vdGhlIHNlY29uZCBhcmd1bWVudCBpcyBvbmx5IHVzZWQgd2hlbiB0aGUgZm9ybSBpcyBjcmVhdGVkIHRvIGVkaXQgYW4gZXhpc3RpbmcgdG9kb1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlZGl0ZWQgdG8gZG8gaXMnKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVkaXRlZFRvRG8pXHJcbiAgICAgICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBsZXQgZGVhZExpbmVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XHJcbiAgICAgICAgbGV0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcblxyXG5cclxuICAgICAgICBsZXQgY2hlY2tMaXN0RWxlbWVudENvdW50ZXIgPSAwO1xyXG4gICAgICAgIGxldCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGlucHV0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5wdXQtY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0Q29udGFpbmVyKTtcclxuICAgICAgICBsZXQgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHNhdmVCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdzYXZlLWJ1dHRvbicpLy9jaGFuZ2VkIHRvIGNsYXNzIGZyb20gaWQsIHNlZSBpZiBpdCBjYXVzZXMgaXNzdWVzXHJcblxyXG4gICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKHRpdGxlSW5wdXQsICdUaXRsZScsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBpbnB1dENvbnRhaW5lcik7XHJcbiAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoZGVzY3JpcHRpb25JbnB1dCwgJ0Rlc2NyaXB0aW9uJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGlucHV0Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoZGVhZExpbmVJbnB1dCwgJ0RlYWRsaW5lJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGlucHV0Q29udGFpbmVyKTtcclxuICAgICAgICBkZWFkTGluZUlucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBhZGREdWVEYXRlSW5wdXRPblBhZ2UocGFyZW50LCBpbnNlcnRCZWZvcmUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGQgZHVlIGRhdGUgb24gcGFnZSBydW5zXCIpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZHVlIGRhdGUgaW5wdXQgaXNcIiwgZHVlRGF0ZUlucHV0KVxyXG4gICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShkdWVEYXRlSW5wdXQsICdEdWUtZGF0ZScsIGluc2VydEJlZm9yZSwgdW5kZWZpbmVkLCBwYXJlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tEZWFkbGluZSgpIHsvL2ZvciB0aGUgc2FrZSBvZiByZXVzYWJpbGl0eSBpbiB0aGUgZm9ybSBhbmQgd2hlbiBlZGl0aW5nXHJcblxyXG4gICAgICAgICAgICAvL3RoaXMgc2hvdWxkIGJlIGNvcnJlY3QsIHVuY29tbWVudCBpdCB3aGVuIHNhdmluZyB0aGUgdG9kbyBpcyBmaXhlZFxyXG4gICAgICAgICAgICAvL2RlYWRMaW5lSW5wdXQuY2hlY2tlZCA/IGFkZER1ZURhdGVJbnB1dE9uUGFnZShpbnB1dENvbnRhaW5lciwgaW5wdXRDb250YWluZXIucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPUNoZWNrbGlzdF0nKSkgOiBET01NYW5pcHVsYXRpb24ucmVtb3ZlRWxlbWVudHMoaW5wdXRDb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImRhdGVcIl0nKSwgaW5wdXRDb250YWluZXIucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPUR1ZS1kYXRlXScpKVxyXG5cclxuICAgICAgICAgICAgY2hlY2tDaGVja2JveFN0YXR1cyhkZWFkTGluZUlucHV0LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhZGREdWVEYXRlSW5wdXRPblBhZ2UoaW5wdXRDb250YWluZXIsIGlucHV0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1DaGVja2xpc3RdJykpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnJlbW92ZUVsZW1lbnRzKGlucHV0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJkYXRlXCJdJyksIGlucHV0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1EdWUtZGF0ZV0nKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWFkTGluZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjaGVja0RlYWRsaW5lKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IGNoZWNrTGlzdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjaGVja0xpc3RJbnB1dC50eXBlID0gJ2NoZWNrYm94JztcclxuICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShjaGVja0xpc3RJbnB1dCwgJ0NoZWNrbGlzdCcsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBpbnB1dENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNvbnRyb2xDaGVja0xpc3QoY2hlY2tMaXN0Q2hlY2tCb3gpIHtcclxuICAgICAgICAgICAgY2hlY2tDaGVja2JveFN0YXR1cyhjaGVja0xpc3RDaGVja0JveCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoY2hlY2tsaXN0Q29udGFpbmVyLCB1bmRlZmluZWQsIGlucHV0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1Qcmlvcml0eV0nKSwgdW5kZWZpbmVkLCBpbnB1dENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICBjaGVja2xpc3RDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjaGVja2xpc3QtY29udGFpbmVyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1Db3VudGVyID0gMDtcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZU5leHRJdGVtKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGVja0xpc3RFbGVtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnROdW1iZXIgPSBjaGVja0xpc3RFbGVtZW50Q291bnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja0xpc3RFbGVtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBlbGVtZW50TnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja0xpc3RFbGVtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2tsaXN0LWVsZW1lbnQtY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tMaXN0RWxlbWVudENvdW50ZXIrKztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja0xpc3RFbGVtZW50Q29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tMaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tMaXN0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrbGlzdC1lbGVtZW50JylcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKGNoZWNrTGlzdEVsZW1lbnQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNoZWNrTGlzdEVsZW1lbnRDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgYWRkTmV4dEVsZW1lbnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShhZGROZXh0RWxlbWVudEJ1dHRvbiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiK1wiLCBjaGVja0xpc3RFbGVtZW50Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgICAgICBhZGROZXh0RWxlbWVudEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZC1uZXh0LWVsZW1lbnQtYnV0dG9uJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkTmV4dEVsZW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5yZW1vdmVFbGVtZW50cyhkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhZGQtbmV4dC1lbGVtZW50LWJ1dHRvbicpWzBdKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV4dEl0ZW0oKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWRpdGVkVG9EbyAmJiBlZGl0ZWRUb0RvLmNoZWNrTGlzdFtpdGVtQ291bnRlcl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9hZGRDaGVja0xpc3RFbGVtZW50Q2hlY2tCb3goRE9NZWxlbWVudCwgVG9Eb09iamVjdCwgY2hlY2tMaXN0RWxlbWVudE9yZGluYWwsIHBhcnRpY3VsYXJTZXRPZlRvZG9zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmFkZENoZWNrTGlzdEVsZW1lbnRDaGVja0JveChjaGVja0xpc3RFbGVtZW50Q29udGFpbmVyLCBlZGl0ZWRUb0RvLCBpdGVtQ291bnRlciwgVG9Eb3MudG9Eb0FycmF5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja0xpc3RFbGVtZW50LnZhbHVlID0gZWRpdGVkVG9Eby5jaGVja0xpc3RbaXRlbUNvdW50ZXJdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ291bnRlcisrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbUNvdW50ZXIgPCBlZGl0ZWRUb0RvLmNoZWNrTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5leHRJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZW1vdmVTcGVjaWZpY0VsZW1lbnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShyZW1vdmVTcGVjaWZpY0VsZW1lbnRCdXR0b24sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcInJlbW92ZVwiLCBjaGVja0xpc3RFbGVtZW50Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVTcGVjaWZpY0VsZW1lbnRCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdyZW1vdmUtc3BlY2lmaWMtZWxlbWVudC1idXR0b24nKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVTcGVjaWZpY0VsZW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5yZW1vdmVFbGVtZW50cyhyZW1vdmVTcGVjaWZpY0VsZW1lbnRCdXR0b24ucGFyZW50RWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3JlYXRlTmV4dEl0ZW0oKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2tsaXN0LWNvbnRhaW5lcicpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoZWNrTGlzdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb250cm9sQ2hlY2tMaXN0KGNoZWNrTGlzdElucHV0KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKHByaW9yaXR5U2VsZWN0LCAnUHJpb3JpdHknLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgaW5wdXRDb250YWluZXIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdE9wdGlvbih0ZXh0KSB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gdGV4dDtcclxuICAgICAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNyZWF0ZVNlbGVjdE9wdGlvbignTm9uZScpO1xyXG4gICAgICAgIGNyZWF0ZVNlbGVjdE9wdGlvbignTG93Jyk7XHJcbiAgICAgICAgY3JlYXRlU2VsZWN0T3B0aW9uKCdNZWRpdW0nKTtcclxuICAgICAgICBjcmVhdGVTZWxlY3RPcHRpb24oJ0hpZ2gnKTtcclxuXHJcblxyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XHJcbiAgICAgICAgc2F2ZUJ1dHRvbi5pbm5lclRleHQgPSAnc2F2ZSdcclxuICAgICAgICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IGNoZWNrTGlzdFZhbHVlc0FycmF5ID0gW107XHJcblxyXG4gICAgICAgICAgICBpZiAoZWRpdGVkVG9EbyAmJiBpbnB1dENvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaGVja2xpc3QtZWxlbWVudCcpLmxlbmd0aCA+IDApIHsvL2lmIHRoZXJlIGFyZSBkaXNwbGF5ZWQgY2hlY2tsaXN0IHBvaW50cywgdXNlIHRoZW1cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBtID0gMDsgbSA8IGlucHV0Q29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NoZWNrbGlzdC1lbGVtZW50JykubGVuZ3RoOyBtKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudENvbnRhaW5lciA9IGlucHV0Q29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NoZWNrbGlzdC1lbGVtZW50LWNvbnRhaW5lcicpW21dO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50VmFsdWUgPSBjdXJyZW50Q29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NoZWNrbGlzdC1lbGVtZW50JylbMF0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnREb25lID0gY3VycmVudENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5jaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tMaXN0VmFsdWVzQXJyYXkucHVzaCh7IHZhbHVlOiBlbGVtZW50VmFsdWUsIGRvbmU6IGVsZW1lbnREb25lIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGlucHV0Q29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NoZWNrbGlzdC1lbGVtZW50JykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tMaXN0VmFsdWVzQXJyYXkgPSBBcnJheS5mcm9tKGlucHV0Q29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NoZWNrbGlzdC1lbGVtZW50JykpLm1hcCgoZWwpID0+IHsgcmV0dXJuIHsgdmFsdWU6IGVsLnZhbHVlLCBkb25lOiBmYWxzZSB9IH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVkaXRlZFRvRG8pIHsvL2lmIGVkaXRpbmdcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlZGl0aW5nIScpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcmlvcml0eVNlbGVjdC52YWx1ZSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoZWNrTGlzdFZhbHVlc0FycmF5KVxyXG4gICAgICAgICAgICAgICAgLy9Ub0Rvcy5yZWRlZmluZVRvRG8oZWRpdGVkVG9EbywgdGl0bGVJbnB1dC52YWx1ZSwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgZHVlRGF0ZUlucHV0LnZhbHVlLCBwcmlvcml0eVNlbGVjdC52YWx1ZSwgY2hlY2tMaXN0VmFsdWVzQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgLy9jaGVja2luZyBpZiBlZGl0ZWRUb0RvIHJlZmVycyB0byB0aGUgd3JvbmcgdGhpbmdcclxuICAgICAgICAgICAgICAgIFRvRG9zLnJlZGVmaW5lVG9EbyhlZGl0ZWRUb0RvLm9yZGluYWwsIHRpdGxlSW5wdXQudmFsdWUsIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsIGR1ZURhdGVJbnB1dC52YWx1ZSwgcHJpb3JpdHlTZWxlY3QudmFsdWUsIGNoZWNrTGlzdFZhbHVlc0FycmF5KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0byBkbyBhZnRlciBzYXZpbmcnKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWRpdGVkVG9EbylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFRvRG9zLmdldEFycmF5T2ZUb2RvcygpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Ugey8vaWYgZmlsbGluZyBmb3JtIGZvciBhIG5ldyB0byBkb1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0aW5nIGEgbmV3IHRvZG8nKVxyXG4gICAgICAgICAgICAgICAgVG9Eb3MuY3JlYXRlVG9Ebyh0aXRsZUlucHV0LnZhbHVlLCBkZXNjcmlwdGlvbklucHV0LnZhbHVlLCBkdWVEYXRlSW5wdXQudmFsdWUsIHByaW9yaXR5U2VsZWN0LnZhbHVlLCBjaGVja0xpc3RWYWx1ZXNBcnJheSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coVG9Eb3MuZ2V0QXJyYXlPZlRvZG9zKCkpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dENvbnRhaW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKS5sZW5ndGg7IGkrKykgey8vY2xlYXIgdGhlIGZvcm0gdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbaV0udmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVNlbGVjdC52YWx1ZSA9ICdOb25lJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRlYWRMaW5lSW5wdXQuY2hlY2tlZCA9IGZhbHNlOy8vdW5jaGVjayB0aGUgZGVhZGxpbmUgY2hlY2tib3hcclxuICAgICAgICAgICAgICAgIGNoZWNrQ2hlY2tib3hTdGF0dXMoZGVhZExpbmVJbnB1dCwgYWRkRHVlRGF0ZUlucHV0T25QYWdlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnJlbW92ZUVsZW1lbnRzKGlucHV0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJkYXRlXCJdJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1EdWUtZGF0ZV0nKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgRGlzcGxheWluZ1RvRG9zLnJlbW92ZUFsbERpc3BsYXllZENvbnRlbnQoKTsvL3JlbW92ZSBhbmQgZGlzcGxheSBhZ2FpblxyXG4gICAgICAgICAgICBEaXNwbGF5aW5nVG9Eb3MuZGlzcGxheShUb0Rvcy5nZXRBcnJheU9mVG9kb3MoKSk7XHJcbiAgICAgICAgICAgIGRlYWxpbmdXaXRoTG9jYWxTdG9yYWdlLnVwZGF0ZUxvY2FsU3RvcmFnZSgndG9Eb0FycmF5JywgVG9Eb3MuZ2V0QXJyYXlPZlRvZG9zKCkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2hlY2tpbmchJylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coVG9Eb3MuZ2V0QXJyYXlPZlRvZG9zKCkpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvQXJyYXknKSkpXHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIGlmIChlZGl0ZWRUb0RvKSB7Ly9pZiB0aGUgdXNlciBpcyBlZGl0aW5nIHRvZG8sIGRpc3BsYXkgdGhlIGN1cnJlbnQgdmFsdWVzXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVkaXRlZFRvRG8pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVkaXRlZFRvRG8udGl0bGUpXHJcbiAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSBlZGl0ZWRUb0RvLnRpdGxlO1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gZWRpdGVkVG9Eby5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgaWYgKGVkaXRlZFRvRG8uZHVlRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgZGVhZExpbmVJbnB1dC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNoZWNrRGVhZGxpbmUoKVxyXG4gICAgICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gZWRpdGVkVG9Eby5kdWVEYXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlZGl0ZWRUb0RvLmNoZWNrTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhlcmUgaXMgYSBjaGVja2xpc3QnKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2hlY2tMaXN0SW5wdXQpXHJcbiAgICAgICAgICAgICAgICBjaGVja0xpc3RJbnB1dC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xDaGVja0xpc3QoY2hlY2tMaXN0SW5wdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRldGVybWluZU5vdGVTdGF0ZShwYXJ0aWN1bGFyVG9EbywgY29udGFpbmluZ0VsZW1lbnQpIHtcclxuICAgICAgICBsZXQgbm90ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG5vdGVDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdub3RlLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKG5vdGVDb250YWluZXIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNvbnRhaW5pbmdFbGVtZW50KTtcclxuXHJcbiAgICAgICAgbGV0IGFkZE5vdGVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIGxldCBkaXNwbGF5ZWROb3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGxldCBub3Rlc0lucHV0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgbGV0IHNhdmVOb3Rlc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGxldCBkZWxldGVOb3Rlc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGxldCBlZGl0Tm90ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBub3RlRWRpdFN0YXRlKCkgey8vcmVtb3ZlIGFkZCBidXR0b24sIGFkZCBpbnB1dCBmaWVsZCAod2l0aCB0aGUgdmFsdWUgc2V0LCBpZiBhdmFpbGFibGUpLCBzYXZlIGFuZCByZW1vdmUgYnV0dG9uc1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm90ZSBlZGl0IHN0YXRlIHJ1bnMnKVxyXG4gICAgICAgICAgICBpZiAoYWRkTm90ZXNCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgIGFkZE5vdGVzQnV0dG9uLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlZGl0Tm90ZUJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgZWRpdE5vdGVCdXR0b24ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoZGlzcGxheWVkTm90ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgbm90ZUNvbnRhaW5lcilcclxuICAgICAgICAgICAgaWYgKHBhcnRpY3VsYXJUb0RvLm5vdGVzKSB7XHJcbiAgICAgICAgICAgICAgICBub3Rlc0lucHV0QXJlYS52YWx1ZSA9IHBhcnRpY3VsYXJUb0RvLm5vdGVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5vdGVzSW5wdXRBcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCAnbm90ZS1pbnB1dC1hcmVhJylcclxuICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2Uobm90ZXNJbnB1dEFyZWEsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIG5vdGVDb250YWluZXIpO1xyXG4gICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShzYXZlTm90ZXNCdXR0b24sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAnc2F2ZScsIG5vdGVDb250YWluZXIpO1xyXG4gICAgICAgICAgICBzYXZlTm90ZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5Tm90ZVN0YXRlKG5vdGVzSW5wdXRBcmVhLnZhbHVlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoZGVsZXRlTm90ZXNCdXR0b24sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAneCcsIG5vdGVDb250YWluZXIpO1xyXG4gICAgICAgICAgICBkZWxldGVOb3Rlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIG5vTm90ZVN0YXRlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBkaXNwbGF5Tm90ZVN0YXRlKHZhbHVlKSB7Ly9kaXNwbGF5IHRoZSBub3RlLCByZW1vdmUgaW5wdXQgYXJlYSwgcmVtb3ZlIHNhdmUgYnV0dG9uLCBhZGQgZWRpdCBidXR0b25cclxuICAgICAgICAgICAgcGFydGljdWxhclRvRG8ubm90ZXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgZGlzcGxheWVkTm90ZS5pbm5lclRleHQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnJlbW92ZUVsZW1lbnRzKG5vdGVzSW5wdXRBcmVhLCBzYXZlTm90ZXNCdXR0b24pO1xyXG4gICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShlZGl0Tm90ZUJ1dHRvbiwgdW5kZWZpbmVkLCBkZWxldGVOb3Rlc0J1dHRvbiwgJ0VkaXQgbm90ZScsIG5vdGVDb250YWluZXIpO1xyXG4gICAgICAgICAgICBlZGl0Tm90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIG5vdGVFZGl0U3RhdGUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gbm9Ob3RlU3RhdGUoKSB7Ly9yZW1vdmUgZXZlcnl0aGluZyBmcm9tIHRoZSBub3RlQ29udGFpbmVyLCBleGNlcHQgdGhlIEFkZCBub3RlIGJ1dHRvblxyXG4gICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucmVtb3ZlQWxsQ2hpbGRyZW4obm90ZUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIG5vdGVzSW5wdXRBcmVhLnZhbHVlID0gXCJcIlxyXG4gICAgICAgICAgICBwYXJ0aWN1bGFyVG9Eby5ub3RlcyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgZGlzcGxheWVkTm90ZS5pbm5lclRleHQgPSBcIlwiXHJcbiAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKGFkZE5vdGVzQnV0dG9uLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgJ0FkZCBub3RlcycsIG5vdGVDb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhZGROb3Rlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbm90ZUVkaXRTdGF0ZSgpO1xyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICBpZiAocGFydGljdWxhclRvRG8ubm90ZXMpIHsvL25vdGVzIGV4aXN0IGF0IHN0YXJ0XHJcbiAgICAgICAgICAgIG5vdGVFZGl0U3RhdGUoKTsvL2ZvciBidXR0b25zIHRvIGFwcGVhclxyXG4gICAgICAgICAgICBkaXNwbGF5Tm90ZVN0YXRlKHBhcnRpY3VsYXJUb0RvLm5vdGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG5vTm90ZVN0YXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWRkYnV0dG9uIGNsaWNrZWQnKTtcclxuXHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNvbnRhaW5lcicpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lucHV0LWNvbnRhaW5lcicpLmxlbmd0aCA8IDEpIHsvL2lmIGZvcm0gaGFzIG5vdCBiZWVuIGNyZWF0ZWQgYWxyZWFkeVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGhlcmUgYXJlIG5vIGZvcm1zJyk7XHJcbiAgICAgICAgICAgIGNyZWF0ZUZvcm1Ub0RlZmluZVRvRG8oZm9ybUNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGZ1bmN0aW9uIGFkZENoZWNrTGlzdEVsZW1lbnRDaGVja0JveChET01lbGVtZW50LCBUb0RvT2JqZWN0LCBjaGVja0xpc3RFbGVtZW50T3JkaW5hbCwgcGFydGljdWxhclNldE9mVG9kb3MpIHsvL2xhdGVyIHB1dCBvdXRzaWRlIGFuZCB1c2UgaXQgYWxzbyBmb3IgdGhlIGVkaXRlZCB0b2RvXHJcbiAgICAgICAgbGV0IHN0YXR1c0NoZWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgc3RhdHVzQ2hlY2tlci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxyXG4gICAgICAgIHN0YXR1c0NoZWNrZXIuc2V0QXR0cmlidXRlKCdpZCcsIGAke1RvRG9PYmplY3Qub3JkaW5hbH0tJHtjaGVja0xpc3RFbGVtZW50T3JkaW5hbH1gKS8vaWQgaXMgdGhlIFRvRG9PcmRpbmFsLWNoZWNrbGlzdCBlbGVtZW50IG51bWJlciwgZS5nLiAwLTAsIDAtMSwgMS0wIGV0Yy5cclxuICAgICAgICBjb25zb2xlLmxvZygnIUNIRUNLIScgKyBUb0RvT2JqZWN0LmNoZWNrTGlzdFtjaGVja0xpc3RFbGVtZW50T3JkaW5hbF0uZG9uZSkvLyB0aGUgW2xdISEhISEhXHJcbiAgICAgICAgaWYgKFRvRG9PYmplY3QuY2hlY2tMaXN0W2NoZWNrTGlzdEVsZW1lbnRPcmRpbmFsXS5kb25lKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCchQ0hFQ0shIHJ1bnMnKVxyXG4gICAgICAgICAgICBzdGF0dXNDaGVja2VyLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShzdGF0dXNDaGVja2VyLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBET01lbGVtZW50KTtcclxuICAgICAgICBzdGF0dXNDaGVja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgc3RhdHVzQ2hlY2tlci5jaGVja2VkID8gVG9Eb09iamVjdC5jaGVja0xpc3RbY2hlY2tMaXN0RWxlbWVudE9yZGluYWxdLmRvbmUgPSB0cnVlIDogVG9Eb09iamVjdC5jaGVja0xpc3RbY2hlY2tMaXN0RWxlbWVudE9yZGluYWxdLmRvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJ0aWN1bGFyU2V0T2ZUb2RvcylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2hlY2tDaGVja2JveFN0YXR1cyxcclxuICAgICAgICBjcmVhdGVGb3JtVG9EZWZpbmVUb0RvLFxyXG4gICAgICAgIGRldGVybWluZU5vdGVTdGF0ZSxcclxuICAgICAgICBhZGRDaGVja0xpc3RFbGVtZW50Q2hlY2tCb3gsXHJcbiAgICB9XHJcblxyXG59KSgpO1xyXG5cclxuY29uc3QgRGlzcGxheWluZ1RvRG9zID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBsZXQgY29udGVudERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudC1kaXNwbGF5Jyk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsRGlzcGxheWVkQ29udGVudCgpIHtcclxuICAgICAgICBsZXQgY2hpbGQgPSBjb250ZW50RGlzcGxheS5sYXN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgIHdoaWxlIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjb250ZW50RGlzcGxheS5yZW1vdmVDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgICAgIGNoaWxkID0gY29udGVudERpc3BsYXkubGFzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheShhcnJheU9mVG9kb3MpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGlzcGxheSB0b2RvIHN0YXJ0cycpO1xyXG5cclxuICAgICAgICByZW1vdmVBbGxEaXNwbGF5ZWRDb250ZW50KCkgICAgICAgIC8vcmVmcmVzaCB3aGVuIGRpc3BsYXlpbmdcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFycmF5T2ZUb2Rvcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGhlIGxlbmd0aCBvZiBhcnJheSBvZiB0b2RvcyBpcyAnICsgYXJyYXlPZlRvZG9zLmxlbmd0aClcclxuICAgICAgICAgICAgbGV0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdG9Eb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvZG8tY29udGFpbmVyJylcclxuICAgICAgICAgICAgdG9Eb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgYFRvRG8gbnVtYmVyICR7an1gKVxyXG4gICAgICAgICAgICBjb250ZW50RGlzcGxheS5hcHBlbmRDaGlsZCh0b0RvQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoJ3AnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgYFRpdGxlOiAke2FycmF5T2ZUb2Rvc1tqXS50aXRsZX1gLCB0b0RvQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgaWYgKGFycmF5T2ZUb2Rvc1tqXS5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoJ3AnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgYERlc2NyaXB0aW9uOiAke2FycmF5T2ZUb2Rvc1tqXS5kZXNjcmlwdGlvbn1gLCB0b0RvQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXJyYXlPZlRvZG9zW2pdLmR1ZURhdGUpIHtcclxuICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKCdwJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGBEdWUgZGF0ZTogJHthcnJheU9mVG9kb3Nbal0uZHVlRGF0ZX1gLCB0b0RvQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXJyYXlPZlRvZG9zW2pdLnByaW9yaXR5ICE9PSAnTm9uZScpIHtcclxuICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKCdwJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGBQcmlvcml0eTogJHthcnJheU9mVG9kb3Nbal0ucHJpb3JpdHl9YCwgdG9Eb0NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFycmF5T2ZUb2Rvc1tqXS5jaGVja0xpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IFRvRG9zQ2hlY2tsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBUb0Rvc0NoZWNrbGlzdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrbGlzdCcpXHJcbiAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShUb0Rvc0NoZWNrbGlzdCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsICdjaGVja2xpc3Q6JywgdG9Eb0NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBsID0gMDsgbCA8IGFycmF5T2ZUb2Rvc1tqXS5jaGVja0xpc3QubGVuZ3RoOyBsKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpc3BsYXllZENoZWNrTGlzdEVsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsvL3RoaXMgaXMgbmV3XHJcbiAgICAgICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoZGlzcGxheWVkQ2hlY2tMaXN0RWxlbWVudENvbnRhaW5lciwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgVG9Eb3NDaGVja2xpc3QpOy8vdGhpcyBpcyBuZXdcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5ZWRDaGVja0xpc3RFbGVtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2tsaXN0LWVsZW1lbnQtY29udGFpbmVyJykvL3RoaXMgaXMgbmV3XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKCdwJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGFycmF5T2ZUb2Rvc1tqXS5jaGVja0xpc3RbbF0udmFsdWUsIGRpc3BsYXllZENoZWNrTGlzdEVsZW1lbnRDb250YWluZXIpOy8vbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL21vdmluZyB0aGlzIHRvIHRoZSBmdW5jdGlvblZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgc3RhdHVzQ2hlY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdGF0dXNDaGVja2VyLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RhdHVzQ2hlY2tlci5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7YXJyYXlPZlRvZG9zW2pdLm9yZGluYWx9LSR7bH1gKS8vaWQgaXMgdGhlIFRvRG9PcmRpbmFsLWNoZWNrbGlzdCBlbGVtZW50IG51bWJlciwgZS5nLiAwLTAsIDAtMSwgMS0wIGV0Yy5cclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnIUNIRUNLIScgKyBhcnJheU9mVG9kb3Nbal0uY2hlY2tMaXN0W2xdLmRvbmUpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGFycmF5T2ZUb2Rvc1tqXS5jaGVja0xpc3RbbF0uZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnIUNIRUNLISBydW5zJylcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc3RhdHVzQ2hlY2tlci5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2Uoc3RhdHVzQ2hlY2tlciwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgZGlzcGxheWVkQ2hlY2tMaXN0RWxlbWVudENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RhdHVzQ2hlY2tlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGZvcm0uY2hlY2tDaGVja2JveFN0YXR1cyhzdGF0dXNDaGVja2VyLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGFycmF5T2ZUb2Rvc1tlLnRhcmdldC5pZFswXV0uY2hlY2tMaXN0W2UudGFyZ2V0LmlkW2UudGFyZ2V0LmlkLmxlbmd0aCAtIDFdXS5kb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pZCArIFwiY2hlY2tlZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBhcnJheU9mVG9kb3NbZS50YXJnZXQuaWRbMF1dLmNoZWNrTGlzdFtlLnRhcmdldC5pZFtlLnRhcmdldC5pZC5sZW5ndGggLSAxXV0uZG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkICsgXCJub3RjaGVja2VkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhhcnJheU9mVG9kb3MpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL21vdmluZyB0aGlzIHRvIHRoZSBmdW5jdGlvbl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXlxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0uYWRkQ2hlY2tMaXN0RWxlbWVudENoZWNrQm94KGRpc3BsYXllZENoZWNrTGlzdEVsZW1lbnRDb250YWluZXIsIGFycmF5T2ZUb2Rvc1tqXSwgbCwgYXJyYXlPZlRvZG9zKS8vZnVuIGZ1bmN0aW9uIGluc3RlYWQgb2YgYWxsIHRoZSBjb2RlIGZyZWVseVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2ZpbmlzaCB0aGlzIGZ1bmN0aW9uIHNvIHRoYXQgaXQgY2FuIGFwcGx5IGFsc28gdG8gdGhlIGVkaXRlZCB0b2RvJ3MgY2hlY2tsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGVuIG1vdmUgaXQgKHRvIEZvcm0/IGFuZCB1c2UgaXQgaW4gYm90aCBwbGFjZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZnVuY3Rpb24gYWRkQ2hlY2tMaXN0RWxlbWVudENoZWNrQm94KERPTWVsZW1lbnQsIFRvRG9PYmplY3QsIGNoZWNrTGlzdEVsZW1lbnRPcmRpbmFsLCBwYXJ0aWN1bGFyU2V0T2ZUb2Rvcykgey8vbGF0ZXIgcHV0IG91dHNpZGUgYW5kIHVzZSBpdCBhbHNvIGZvciB0aGUgZWRpdGVkIHRvZG9cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbGV0IHN0YXR1c0NoZWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHN0YXR1c0NoZWNrZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc3RhdHVzQ2hlY2tlci5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7VG9Eb09iamVjdC5vcmRpbmFsfS0ke2NoZWNrTGlzdEVsZW1lbnRPcmRpbmFsfWApLy9pZCBpcyB0aGUgVG9Eb09yZGluYWwtY2hlY2tsaXN0IGVsZW1lbnQgbnVtYmVyLCBlLmcuIDAtMCwgMC0xLCAxLTAgZXRjLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnIUNIRUNLIScgKyBUb0RvT2JqZWN0LmNoZWNrTGlzdFtjaGVja0xpc3RFbGVtZW50T3JkaW5hbF0uZG9uZSkvLyB0aGUgW2xdISEhISEhXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmIChUb0RvT2JqZWN0LmNoZWNrTGlzdFtjaGVja0xpc3RFbGVtZW50T3JkaW5hbF0uZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJyFDSEVDSyEgcnVucycpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBzdGF0dXNDaGVja2VyLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKHN0YXR1c0NoZWNrZXIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIERPTWVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBzdGF0dXNDaGVja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGZvcm0uY2hlY2tDaGVja2JveFN0YXR1cyhzdGF0dXNDaGVja2VyLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgcGFydGljdWxhclNldE9mVG9kb3NbZS50YXJnZXQuaWRbMF1dLmNoZWNrTGlzdFtlLnRhcmdldC5pZFtlLnRhcmdldC5pZC5sZW5ndGggLSAxXV0uZG9uZSA9IHRydWU7Ly9jaGFuZ2UgdGhpcyB0byB0aGUgVG9Eb09iamVjdCBvciBub3Q/XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkICsgXCJjaGVja2VkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHBhcnRpY3VsYXJTZXRPZlRvZG9zW2UudGFyZ2V0LmlkWzBdXS5jaGVja0xpc3RbZS50YXJnZXQuaWRbZS50YXJnZXQuaWQubGVuZ3RoIC0gMV1dLmRvbmUgPSBmYWxzZTsvL2NoYW5nZSB0aGlzIHRvIHRoZSBUb0RvT2JqZWN0IG9yIG5vdD9cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuaWQgKyBcIm5vdGNoZWNrZWRcIilcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coYXJyYXlPZlRvZG9zKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKCdwJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGBTdGF0dXM6ICR7YXJyYXlPZlRvZG9zW2pdLnRvRG9TdGF0dXN9YCwgdG9Eb0NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGxldCBlZGl0VG9Eb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShlZGl0VG9Eb0J1dHRvbiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsICdlZGl0JywgdG9Eb0NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGVkaXRUb0RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2VkaXQgdG9kbyBidXR0b24gY2xpY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnJlbW92ZUFsbENoaWxkcmVuKHRvRG9Db250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coVG9Eb3MudG9Eb0FycmF5W2pdKVxyXG4gICAgICAgICAgICAgICAgZm9ybS5jcmVhdGVGb3JtVG9EZWZpbmVUb0RvKHRvRG9Db250YWluZXIsIFRvRG9zLnRvRG9BcnJheVtqXSk7XHJcblxyXG5cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGxldCBkZWxldGVUb0RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoZGVsZXRlVG9Eb0J1dHRvbiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsICdkZWxldGUnLCB0b0RvQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgZGVsZXRlVG9Eb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGUgdG9kbyBjbGlja2VkJylcclxuICAgICAgICAgICAgICAgIGFycmF5T2ZUb2Rvcy5zcGxpY2UoaiwgMSk7XHJcbiAgICAgICAgICAgICAgICB0b0RvQ29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgZGVhbGluZ1dpdGhMb2NhbFN0b3JhZ2UudXBkYXRlTG9jYWxTdG9yYWdlKCd0b0RvQXJyYXknLCBhcnJheU9mVG9kb3MpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FycmF5T2ZUb2RvcycpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcnJheU9mVG9kb3MpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0IHRvIGRvIGFycmF5JylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFRvRG9zLmdldEFycmF5T2ZUb2RvcygpKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvY2Fsc3RvcmFnZScpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0FycmF5JykpKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0byBkbyBhcnJheSBhZnRlciBkZWxldGluZyBlbGVtZW50JyArIEpTT04uc3RyaW5naWZ5KGFycmF5T2ZUb2RvcykpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2F0dGVudGlvbiwgdGhpcyBpcyBsb2NhbCBzdG9yYWdlJyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvQXJyYXknKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFycmF5T2ZUb2Rvc1tqXSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYXJyYXlPZlRvZG9zW2pdLmNoZWNrTGlzdClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdGVzJyArIGFycmF5T2ZUb2Rvc1tqXS5ub3RlcylcclxuXHJcbiAgICAgICAgICAgIGZvcm0uZGV0ZXJtaW5lTm90ZVN0YXRlKGFycmF5T2ZUb2Rvc1tqXSwgdG9Eb0NvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0b0RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvZG8gY29udGFpbmVyIGNsaWNrZWQsIGxvY2Fsc3RvcmFnZSB1cGRhdGVkJylcclxuICAgICAgICAgICAgICAgIGRlYWxpbmdXaXRoTG9jYWxTdG9yYWdlLnVwZGF0ZUxvY2FsU3RvcmFnZSgndG9Eb0FycmF5JywgYXJyYXlPZlRvZG9zKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2RvYXJyYXkgaXMnICsgSlNPTi5zdHJpbmdpZnkoYXJyYXlPZlRvZG9zKSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2NhbHN0b3JhZ2UgYWZ0ZXIgdXBkYXRpbmc6JylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvQXJyYXknKSkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGlzcGxheSxcclxuICAgICAgICByZW1vdmVBbGxEaXNwbGF5ZWRDb250ZW50XHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5jb25zdCBUb0RvcyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY3JlYXRlIHRvZG8gcnVucycpO1xyXG4gICAgbGV0IHRvRG9BcnJheSA9IFtdOy8vdGhlIGFycmF5IGlzIGNsZWFyZWQgdGhlbiBmZXRjaGVkIGZyb20gTFNcclxuICAgIGxldCBvcmRpbmFsID0gMDtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0FycmF5JykpIHtcclxuICAgICAgICB0b0RvQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvQXJyYXknKSk7XHJcbiAgICAgICAgb3JkaW5hbCA9IHRvRG9BcnJheS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgdG9EbyB7XHJcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2tMaXN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgICAgIHdoaWxlICh0b0RvQXJyYXkuc29tZSgoaXRlbSkgPT4geyByZXR1cm4gaXRlbS5vcmRpbmFsID09PSBvcmRpbmFsIH0pKSB7Ly9lbnN1cmUgb3JkaW5hbHMgZG8gbm90IGR1cGxpY2F0ZVxyXG4gICAgICAgICAgICAgICAgb3JkaW5hbCsrXHJcbiAgICAgICAgICAgICAgICBpZiAob3JkaW5hbCA+IDk5OTkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSW5maW5pdGUgbG9vcCBlcnJvcicpXHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0luZmluaXRlIGxvb3AgZXJyb3InKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5vcmRpbmFsID0gb3JkaW5hbDtcclxuICAgICAgICAgICAgdGhpcy50b0RvU3RhdHVzID0gXCJvcGVuXCJcclxuICAgICAgICAgICAgb3JkaW5hbCsrO1xyXG4gICAgICAgICAgICBpZiAoZHVlRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2hlY2tMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTGlzdCA9IGNoZWNrTGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVUb0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrTGlzdCkge1xyXG4gICAgICAgIGxldCBuZXdUb0RvID0gbmV3IHRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2tMaXN0KTtcclxuICAgICAgICB0b0RvQXJyYXkucHVzaChuZXdUb0RvKTtcclxuICAgICAgICBkZWFsaW5nV2l0aExvY2FsU3RvcmFnZS51cGRhdGVMb2NhbFN0b3JhZ2UoJ3RvRG9BcnJheScsIHRvRG9BcnJheSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVkZWZpbmVUb0RvKG9yZGluYWwsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrTGlzdCkge1xyXG4gICAgICAgIGxldCBSZWRlZmluZWRUb0RvID0gdG9Eb0FycmF5LmZpbmQoaXRlbSA9PiBpdGVtLm9yZGluYWwgPT09IG9yZGluYWwpO1xyXG4gICAgICAgIFJlZGVmaW5lZFRvRG8udGl0bGUgPSB0aXRsZTtcclxuICAgICAgICBSZWRlZmluZWRUb0RvLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgUmVkZWZpbmVkVG9Eby5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICBSZWRlZmluZWRUb0RvLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgUmVkZWZpbmVkVG9Eby5jaGVja0xpc3QgPSBjaGVja0xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QXJyYXlPZlRvZG9zKCkgey8vdXNlIHRoaXMgbGF0ZXJcclxuICAgICAgICByZXR1cm4gdG9Eb0FycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlcGxhY2VBcnJheU9mVG9kb3MoYXJyKSB7XHJcbiAgICAgICAgdG9Eb0FycmF5ID0gYXJyXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjcmVhdGVUb0RvLFxyXG4gICAgICAgIHJlZGVmaW5lVG9EbyxcclxuICAgICAgICBnZXRBcnJheU9mVG9kb3MsXHJcbiAgICAgICAgcmVwbGFjZUFycmF5T2ZUb2RvcyxcclxuICAgICAgICB0b0RvQXJyYXksLy9yZXN0cmljdCBpdCBsYXRlciwgdG8gZXhwb3NlIG9ubHkgYSBnZXQgb2YgdGhlIGFycmF0IG9yIHBlcmhhcHMgcGFydGljdWxhciBwcm9wZXJ0aWVzIHRvIGJlIGNoYW5nZWQsIGUuZy4gY2hlY2tsaXN0IHN0YXR1cyBvciBwcmlvcml0eVxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuY29uc3QgZGVhbGluZ1dpdGhMb2NhbFN0b3JhZ2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gdXBkYXRlTG9jYWxTdG9yYWdlKGtleU5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0aW5nIGxvY2FsIHN0b3JhZ2Ugd2l0aCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHN0b3JhZ2UgYmVmb3JlIHVwZGF0aW5nICR7SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh2YWx1ZSkpfWApXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5TmFtZSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBzdG9yYWdlIGFmdGVyIHVwZGF0aW5nICR7SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh2YWx1ZSkpfWApXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSxcclxuICAgIH1cclxufSkoKTtcclxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvQXJyYXknKSkgey8vaWYgc29tZXRoaW5nIGhhcyBiZWVuIHNldCBpbiB0aGUgbG9jYWwgc3RvcmFnZSwgdGhlbiByZXRyaWV2ZSBvbiBzdGFydHVwXHJcbiAgICBUb0Rvcy5yZXBsYWNlQXJyYXlPZlRvZG9zKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9BcnJheScpKSk7XHJcbiAgICBEaXNwbGF5aW5nVG9Eb3MuZGlzcGxheShUb0Rvcy5nZXRBcnJheU9mVG9kb3MoKSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9