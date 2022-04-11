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
//DO THIS NOW
//LINE 99 -DEFAULT VALUES FOR EDITED TO DO




//////////////////////for testing purposes only
/* <button id="checklocalstorage-button">check local storage</button>
<button id="check todos array-button">check array of todos</button> */
document.getElementById('checklocalstorage-button').addEventListener('click', () => {
    console.log(JSON.stringify(localStorage.getItem('toDoArray')))

})
document.getElementById('check todos array-button').addEventListener('click', () => {
    console.log(JSON.stringify(ToDos.toDoArray))
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
            element.setAttribute('id', description)
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
            ifChecked();
        }
        else {
            ifUnchecked();
        }
    }
    function createFormToDefineToDo(container, editedToDo) {//the second argument is only used when the form is created to edit an existing todo

        let titleInput = document.createElement('input');
        let descriptionInput = document.createElement('input');
        let deadLineInput = document.createElement('input');
        let dueDateInput = document.createElement('input');
        dueDateInput.type = 'date';
        let prioritySelect = document.createElement('select');

        if (editedToDo) {//finish this now
            console.log(editedToDo)
            console.log(editedToDo.title)
            titleInput.value = editedToDo.title
            descriptionInput.value = editedToDo.description
        }
        let checkListElementCounter = 0;
        let inputContainer = document.createElement('div');
        inputContainer.setAttribute('class', 'input-container');
        container.appendChild(inputContainer);
        let saveButton = document.createElement('button');
        saveButton.setAttribute('id', 'save-button')

        DOMManipulation.putElementOnPage(titleInput, 'Title', undefined, undefined, inputContainer);
        DOMManipulation.putElementOnPage(descriptionInput, 'Description', undefined, undefined, inputContainer);

        DOMManipulation.putElementOnPage(deadLineInput, 'Deadline', undefined, undefined, inputContainer);
        deadLineInput.type = 'checkbox';

        function addDueDateInputOnPage() {
            console.log("add due date on page runs")
            console.log("due date input is", dueDateInput)
            DOMManipulation.putElementOnPage(dueDateInput, 'Due-date', document.querySelector('label[for=Checklist]'), undefined, inputContainer);
        }

        deadLineInput.addEventListener('click', () => {
            checkCheckboxStatus(deadLineInput, addDueDateInputOnPage, () => {
                DOMManipulation.removeElements(document.getElementById("Due-date"), document.querySelector('label[for=Due-date]'));
            });
        });
        let checkListInput = document.createElement('input');
        checkListInput.type = 'checkbox';
        DOMManipulation.putElementOnPage(checkListInput, 'Checklist', undefined, undefined, inputContainer);
        checkListInput.addEventListener('click', () => {


            checkCheckboxStatus(checkListInput, () => {
                let checklistContainer = document.createElement('div');
                DOMManipulation.putElementOnPage(checklistContainer, undefined, document.querySelector('label[for=Priority]'), undefined, inputContainer);
                checklistContainer.setAttribute('id', 'checklist-container');

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

                        createNextItem()
                    })

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
            let checkListValuesArray = Array.from(document.getElementsByClassName('checklist-element')).map((el) => { return { value: el.value, done: false } })
            console.log("checklistvalues")
            console.log(checkListValuesArray);
            ToDos.createToDo(titleInput.value, descriptionInput.value, prioritySelect.value, dueDateInput.value, checkListValuesArray);


            for (let i = 0; i < document.getElementsByTagName("input").length; i++) {//clear the form values
                document.getElementsByTagName("input")[i].value = "";
                prioritySelect.value = "None";
            }
            deadLineInput.checked = false;//uncheck the deadline checkbox
            checkCheckboxStatus(deadLineInput, addDueDateInputOnPage, () => {
                DOMManipulation.removeElements(document.getElementById("Due-date"), document.querySelector('label[for=Due-date]'));
            });
            DisplayingToDos.removeAllDisplayedContent();//remove and display again
            DisplayingToDos.display(ToDos.toDoArray);
        })
    }


    addButton.addEventListener('click', () => {
        console.log('addbutton clicked');

        if (document.getElementById('form-container').getElementsByClassName('input-container').length < 1) {//if form has not been created already
            console.log('there are no forms');
            createFormToDefineToDo(formContainer);
            ///////////////////////
        }
    })


    return {
        checkCheckboxStatus,
        createFormToDefineToDo,
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
        console.log(JSON.stringify(ToDos.toDoArray))

        for (let j = 0; j < arrayOfTodos.length; j++) {
            console.log('the length of array of todos is ' + arrayOfTodos.length)
            let toDoContainer = document.createElement('div');
            toDoContainer.setAttribute('class', 'todo-container')
            toDoContainer.setAttribute('id', `note ${j}`)
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
                DOMManipulation.putElementOnPage(ToDosChecklist, undefined, undefined, 'checklist:', toDoContainer);
                for (let l = 0; l < arrayOfTodos[j].checkList.length; l++) {
                    DOMManipulation.putElementOnPage('p', undefined, undefined, arrayOfTodos[j].checkList[l].value, ToDosChecklist);
                    let statusChecker = document.createElement('input')
                    statusChecker.setAttribute('type', 'checkbox')
                    statusChecker.setAttribute('id', `${arrayOfTodos[j].ordinal}-${l}`)//id is the ToDoOrdinal-checklist element number, e.g. 0-0, 0-1, 1-0 etc.
                    console.log('!CHECK!' + arrayOfTodos[j].checkList[l].done)
                    if (arrayOfTodos[j].checkList[l].done) {
                        console.log('!CHECK! runs')
                        statusChecker.checked = true;
                    }
                    DOMManipulation.putElementOnPage(statusChecker, undefined, undefined, undefined, ToDosChecklist);
                    statusChecker.addEventListener('click', (e) => {
                        form.checkCheckboxStatus(statusChecker,
                            () => {
                                arrayOfTodos[e.target.id[0]].checkList[e.target.id[e.target.id.length - 1]].done = true;
                                console.log(e.target.id + "checked")
                            },
                            () => {
                                arrayOfTodos[e.target.id[0]].checkList[e.target.id[e.target.id.length - 1]].done = false;
                                console.log(e.target.id + "notchecked")
                            })
                        console.log(arrayOfTodos)
                    })
                }

            }
            let noteContainer = document.createElement('div');
            noteContainer.setAttribute('class', 'note-container');
            DOMManipulation.putElementOnPage(noteContainer, undefined, undefined, undefined, toDoContainer);

            let addNotesButton = document.createElement('button');

            let displayedNote = document.createElement('p');
            let notesInputArea = document.createElement('input');
            let saveNotesButton = document.createElement('button');
            let deleteNotesButton = document.createElement('button');
            let editNoteButton = document.createElement('button');

            function noteEditState() {//remove add button, add input field (with the value set, if available), save and remove buttons
                console.log('note edit state runs')
                if (addNotesButton) {
                    addNotesButton.remove()
                }
                if (editNoteButton) {
                    editNoteButton.remove();
                }
                DOMManipulation.putElementOnPage(displayedNote, undefined, undefined, undefined, noteContainer)
                if (arrayOfTodos[j].notes) {
                    notesInputArea.value = arrayOfTodos[j].notes;
                }
                notesInputArea.setAttribute('id', 'note-input-area')
                DOMManipulation.putElementOnPage(notesInputArea, undefined, undefined, undefined, noteContainer);
                DOMManipulation.putElementOnPage(saveNotesButton, undefined, undefined, 'save', noteContainer);
                saveNotesButton.addEventListener('click', () => {
                    displayNoteState(notesInputArea.value);
                })
                DOMManipulation.putElementOnPage(deleteNotesButton, undefined, undefined, 'x', noteContainer);
                deleteNotesButton.addEventListener('click', () => {
                    console.log('delete notes button clicked')
                    console.log(arrayOfTodos[j].notes)
                    noNoteState();
                    console.log('no note state')
                    console.log('todos.note!!!!!!!!!!!!!!!!!!' + arrayOfTodos[j].notes)
                    console.log('notesinputareea.value' + notesInputArea.value)
                })

            }
            function displayNoteState(value) {//display the note, remove input area, remove save button, add edit button
                console.log('display note state')
                arrayOfTodos[j].notes = value;
                displayedNote.innerText = value;
                DOMManipulation.removeElements(notesInputArea, saveNotesButton);
                DOMManipulation.putElementOnPage(editNoteButton, undefined, deleteNotesButton, 'Edit note', noteContainer);
                editNoteButton.addEventListener('click', () => {
                    console.log('edit note button clickerd');
                    noteEditState();
                })
            }
            function noNoteState() {//remove everything from the noteContainer, except the Add note button
                console.log('no note state')
                DOMManipulation.removeAllChildren(noteContainer);
                notesInputArea.value = ""
                arrayOfTodos[j].notes = undefined;
                displayedNote.innerText = ""
                DOMManipulation.putElementOnPage(addNotesButton, undefined, undefined, 'Add notes', noteContainer);
            }
            addNotesButton.addEventListener('click', () => {
                console.log(displayedNote)
                noteEditState();
                console.log('add notes button clicked');
            })
            if (arrayOfTodos[j].notes) {//notes exist at start
                noteEditState();//for buttons to appear
                displayNoteState(arrayOfTodos[j].notes);
            }
            else {
                noNoteState();
            }


            DOMManipulation.putElementOnPage('p', undefined, undefined, `Status: ${arrayOfTodos[j].toDoStatus}`, toDoContainer);
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////current thing to do
            let editToDoButton = document.createElement('button');
            DOMManipulation.putElementOnPage(editToDoButton, undefined, undefined, 'edit', toDoContainer);
            editToDoButton.addEventListener('click', () => {
                console.log('edit todo button clicked');
                DOMManipulation.removeAllChildren(toDoContainer);
                form.createFormToDefineToDo(toDoContainer, arrayOfTodos[j]);


            })

            let deleteToDoButton = document.createElement('button')
            DOMManipulation.putElementOnPage(deleteToDoButton, undefined, undefined, 'delete', toDoContainer);
            deleteToDoButton.addEventListener('click', () => {
                console.log('delete todo clicked')
                arrayOfTodos.splice(j, 1);
                toDoContainer.remove();
                //dealingWithLocalStorage.updateLocalStorage('toDoArray', arrayOfTodos); should not be necessary since clicking on the container
                //already updates local storage
                console.log('to do array after deleting element' + JSON.stringify(arrayOfTodos));
                console.log('attention, this is local storage' + localStorage.getItem('toDoArray'));
            })
            console.log(arrayOfTodos[j])
            console.log(arrayOfTodos[j].checkList)
            console.log('notes' + arrayOfTodos[j].notes)



            toDoContainer.addEventListener('click', () => {
                console.log('to do container clicked')
                dealingWithLocalStorage.updateLocalStorage('toDoArray', arrayOfTodos);
                console.log('to do array after clicking' + JSON.stringify(arrayOfTodos));
                console.log('attention, this is local storage' + localStorage.getItem('toDoArray'));
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
    let toDoArray = [];//if there is something in localStorage these get changed
    let ordinal = 0;
    if (localStorage.getItem('toDoArray')) {
        toDoArray = JSON.parse(localStorage.getItem('toDoArray'));
        ordinal = toDoArray.length;
    }

    class toDo {
        constructor(title, description, priority, dueDate, checkList) {
            this.title = title;
            this.description = description;
            this.priority = priority;
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
        console.log('TODO creation start');
        let newToDo = new toDo(title, description, dueDate, priority, checkList);
        ToDos.toDoArray.push(newToDo);
        dealingWithLocalStorage.updateLocalStorage('toDoArray', ToDos.toDoArray);
        console.log('attention, this is local storage' + localStorage.getItem('toDoArray'));
    }

    return {
        createToDo,
        toDoArray,//restrict it later, to expose only a get of the arrat or perhaps particular properties to be changed, e.g. checklist status or priority
    }
})();

const dealingWithLocalStorage = (function () {

    function updateLocalStorage(keyName, value) {
        localStorage.setItem(keyName, JSON.stringify(value))
    }

    return {
        updateLocalStorage,
    }
})();
console.log('attention, this is local storage' + localStorage.getItem('toDoArray'));
if (localStorage.getItem('toDoArray')) {//if something has been set in the local storage, then retrieve on startup
    ToDos.toDoArray = JSON.parse(localStorage.getItem('toDoArray'))
    console.log(JSON.stringify(ToDos.toDoArray))
    DisplayingToDos.display(JSON.parse(localStorage.getItem('toDoArray')))
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0Esd0NBQXdDLFlBQVk7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGFBQWE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsY0FBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvcm0tY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZDogIzJjOWZkMTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDAuOWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5wdXQtY29udGFpbmVyIHtcXHJcXG4gICAgdG9wOiAwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDdmcjtcXHJcXG4gICAgY29sdW1uLWdhcDogMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudC1kaXNwbGF5e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI2MHB4LCAzMDBweCkpO1xcclxcbn1cXHJcXG4udG9kby1jb250YWluZXJ7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICBjb2xvcjogIzFhNjE4MDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgIGFuaW1hdGlvbjogc2xpZGUtdXAgMC40cyBlYXNlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZEQUE2RDtBQUNqRTtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsdUJBQXVCOzs7O0lBSXZCLDZCQUE2QjtJQUM3Qix5QkFBeUI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvcm0tY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZDogIzJjOWZkMTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDAuOWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5wdXQtY29udGFpbmVyIHtcXHJcXG4gICAgdG9wOiAwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDdmcjtcXHJcXG4gICAgY29sdW1uLWdhcDogMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudC1kaXNwbGF5e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI2MHB4LCAzMDBweCkpO1xcclxcbn1cXHJcXG4udG9kby1jb250YWluZXJ7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICBjb2xvcjogIzFhNjE4MDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgIGFuaW1hdGlvbjogc2xpZGUtdXAgMC40cyBlYXNlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL0RPIFRISVMgTk9XXHJcbi8vTElORSA5OSAtREVGQVVMVCBWQUxVRVMgRk9SIEVESVRFRCBUTyBET1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2ZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHlcclxuLyogPGJ1dHRvbiBpZD1cImNoZWNrbG9jYWxzdG9yYWdlLWJ1dHRvblwiPmNoZWNrIGxvY2FsIHN0b3JhZ2U8L2J1dHRvbj5cclxuPGJ1dHRvbiBpZD1cImNoZWNrIHRvZG9zIGFycmF5LWJ1dHRvblwiPmNoZWNrIGFycmF5IG9mIHRvZG9zPC9idXR0b24+ICovXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVja2xvY2Fsc3RvcmFnZS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvQXJyYXknKSkpXHJcblxyXG59KVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2sgdG9kb3MgYXJyYXktYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShUb0Rvcy50b0RvQXJyYXkpKVxyXG59KVxyXG4vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5jb25zdCBET01NYW5pcHVsYXRpb24gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gcHV0RWxlbWVudE9uUGFnZShlbGVtZW50LCBkZXNjcmlwdGlvbiwgaW5zZXJ0QmVmb3JlV2hhdCwgaW5uZXJUZXh0LCBwYXJlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVsZW1lbnQgcHV0dGVkIG9uIHBhZ2UgaXNcIiwgZWxlbWVudClcclxuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7Ly9pZiBlbGVtZW50IGlzIG5vdCBvYmplY3QsIG1lYW5pbmcgYW4gYWxyZWFkeSBjcmVhdGVkIGVsZW1lbnRcclxuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbm5lclRleHQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5pbm5lclRleHQgPSBpbm5lclRleHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGVzY3JpcHRpb24pIHsvL2Rlc2NyaXB0aW9uIGlzIGZvciBsYWJlbGxlZCBmb3JtIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICBlbGVtZW50TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBkZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIGVsZW1lbnRMYWJlbC5pbm5lclRleHQgPSBgJHtkZXNjcmlwdGlvbn1gO1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbilcclxuICAgICAgICAgICAgaWYgKGluc2VydEJlZm9yZVdoYXQpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoZWxlbWVudExhYmVsLCBpbnNlcnRCZWZvcmVXaGF0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50TGFiZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbnNlcnRCZWZvcmVXaGF0KSB7XHJcbiAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoZWxlbWVudCwgaW5zZXJ0QmVmb3JlV2hhdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnRzKC4uLmVsZW1lbnRzKSB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSBlbGVtZW50cy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBjb3VudGVyOyBrKyspIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRzW2tdKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50c1trXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkcmVuKGVsZW1lbnQpIHtcclxuICAgICAgICBsZXQgY291bnRlciA9IGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IG0gPSAwOyBtIDw9IGNvdW50ZXI7IG0rKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaXRlcmF0aW9uJyArIG0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbSBpcyAnICsgbSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC5jaGlsZHJlbik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQuY2hpbGRyZW5bMF0pO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jaGlsZHJlblswXSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlblswXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHB1dEVsZW1lbnRPblBhZ2UsXHJcbiAgICAgICAgcmVtb3ZlRWxlbWVudHMsXHJcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGRyZW5cclxuICAgIH1cclxufSkoKTtcclxuXHJcblxyXG5jb25zdCBmb3JtID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtYnV0dG9uJyk7XHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY29udGFpbmVyJylcclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0NoZWNrYm94U3RhdHVzKGNoZWNrQm94RWxlbWVudCwgaWZDaGVja2VkLCBpZlVuY2hlY2tlZCkgey8vbWFrZSBzdXJlIHRoZSBwYXJhbWV0ZXJzIGFyZSBmdW5jdGlvbnNcclxuICAgICAgICBpZiAoY2hlY2tCb3hFbGVtZW50LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgaWZDaGVja2VkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZlVuY2hlY2tlZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZvcm1Ub0RlZmluZVRvRG8oY29udGFpbmVyLCBlZGl0ZWRUb0RvKSB7Ly90aGUgc2Vjb25kIGFyZ3VtZW50IGlzIG9ubHkgdXNlZCB3aGVuIHRoZSBmb3JtIGlzIGNyZWF0ZWQgdG8gZWRpdCBhbiBleGlzdGluZyB0b2RvXHJcblxyXG4gICAgICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgbGV0IGRlYWRMaW5lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGR1ZURhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xyXG4gICAgICAgIGxldCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG5cclxuICAgICAgICBpZiAoZWRpdGVkVG9Ebykgey8vZmluaXNoIHRoaXMgbm93XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVkaXRlZFRvRG8pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVkaXRlZFRvRG8udGl0bGUpXHJcbiAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSBlZGl0ZWRUb0RvLnRpdGxlXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBlZGl0ZWRUb0RvLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjaGVja0xpc3RFbGVtZW50Q291bnRlciA9IDA7XHJcbiAgICAgICAgbGV0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaW5wdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbnB1dC1jb250YWluZXInKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRDb250YWluZXIpO1xyXG4gICAgICAgIGxldCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgc2F2ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NhdmUtYnV0dG9uJylcclxuXHJcbiAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UodGl0bGVJbnB1dCwgJ1RpdGxlJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGlucHV0Q29udGFpbmVyKTtcclxuICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShkZXNjcmlwdGlvbklucHV0LCAnRGVzY3JpcHRpb24nLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgaW5wdXRDb250YWluZXIpO1xyXG5cclxuICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShkZWFkTGluZUlucHV0LCAnRGVhZGxpbmUnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgaW5wdXRDb250YWluZXIpO1xyXG4gICAgICAgIGRlYWRMaW5lSW5wdXQudHlwZSA9ICdjaGVja2JveCc7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZER1ZURhdGVJbnB1dE9uUGFnZSgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGQgZHVlIGRhdGUgb24gcGFnZSBydW5zXCIpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZHVlIGRhdGUgaW5wdXQgaXNcIiwgZHVlRGF0ZUlucHV0KVxyXG4gICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShkdWVEYXRlSW5wdXQsICdEdWUtZGF0ZScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1DaGVja2xpc3RdJyksIHVuZGVmaW5lZCwgaW5wdXRDb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVhZExpbmVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY2hlY2tDaGVja2JveFN0YXR1cyhkZWFkTGluZUlucHV0LCBhZGREdWVEYXRlSW5wdXRPblBhZ2UsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5yZW1vdmVFbGVtZW50cyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkR1ZS1kYXRlXCIpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsYWJlbFtmb3I9RHVlLWRhdGVdJykpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgY2hlY2tMaXN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNoZWNrTGlzdElucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKGNoZWNrTGlzdElucHV0LCAnQ2hlY2tsaXN0JywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGlucHV0Q29udGFpbmVyKTtcclxuICAgICAgICBjaGVja0xpc3RJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblxyXG4gICAgICAgICAgICBjaGVja0NoZWNrYm94U3RhdHVzKGNoZWNrTGlzdElucHV0LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShjaGVja2xpc3RDb250YWluZXIsIHVuZGVmaW5lZCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPVByaW9yaXR5XScpLCB1bmRlZmluZWQsIGlucHV0Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIGNoZWNrbGlzdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NoZWNrbGlzdC1jb250YWluZXInKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVOZXh0SXRlbSgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tMaXN0RWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50TnVtYmVyID0gY2hlY2tMaXN0RWxlbWVudENvdW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tMaXN0RWxlbWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgZWxlbWVudE51bWJlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tMaXN0RWxlbWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrbGlzdC1lbGVtZW50LWNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrTGlzdEVsZW1lbnRDb3VudGVyKys7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tMaXN0RWxlbWVudENvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrTGlzdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaGVja2xpc3QtZWxlbWVudCcpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKGNoZWNrTGlzdEVsZW1lbnQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNoZWNrTGlzdEVsZW1lbnRDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgYWRkTmV4dEVsZW1lbnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShhZGROZXh0RWxlbWVudEJ1dHRvbiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiK1wiLCBjaGVja0xpc3RFbGVtZW50Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgICAgICBhZGROZXh0RWxlbWVudEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZC1uZXh0LWVsZW1lbnQtYnV0dG9uJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkTmV4dEVsZW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5yZW1vdmVFbGVtZW50cyhkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhZGQtbmV4dC1lbGVtZW50LWJ1dHRvbicpWzBdKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV4dEl0ZW0oKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZW1vdmVTcGVjaWZpY0VsZW1lbnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShyZW1vdmVTcGVjaWZpY0VsZW1lbnRCdXR0b24sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcInJlbW92ZVwiLCBjaGVja0xpc3RFbGVtZW50Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVTcGVjaWZpY0VsZW1lbnRCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdyZW1vdmUtc3BlY2lmaWMtZWxlbWVudC1idXR0b24nKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVTcGVjaWZpY0VsZW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5yZW1vdmVFbGVtZW50cyhyZW1vdmVTcGVjaWZpY0VsZW1lbnRCdXR0b24ucGFyZW50RWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3JlYXRlTmV4dEl0ZW0oKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2tsaXN0LWNvbnRhaW5lcicpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShwcmlvcml0eVNlbGVjdCwgJ1ByaW9yaXR5JywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGlucHV0Q29udGFpbmVyKTtcclxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVTZWxlY3RPcHRpb24odGV4dCkge1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IHRleHQ7XHJcbiAgICAgICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjcmVhdGVTZWxlY3RPcHRpb24oJ05vbmUnKTtcclxuICAgICAgICBjcmVhdGVTZWxlY3RPcHRpb24oJ0xvdycpO1xyXG4gICAgICAgIGNyZWF0ZVNlbGVjdE9wdGlvbignTWVkaXVtJyk7XHJcbiAgICAgICAgY3JlYXRlU2VsZWN0T3B0aW9uKCdIaWdoJyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xyXG4gICAgICAgIHNhdmVCdXR0b24uaW5uZXJUZXh0ID0gJ3NhdmUnXHJcbiAgICAgICAgc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNoZWNrTGlzdFZhbHVlc0FycmF5ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaGVja2xpc3QtZWxlbWVudCcpKS5tYXAoKGVsKSA9PiB7IHJldHVybiB7IHZhbHVlOiBlbC52YWx1ZSwgZG9uZTogZmFsc2UgfSB9KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrbGlzdHZhbHVlc1wiKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaGVja0xpc3RWYWx1ZXNBcnJheSk7XHJcbiAgICAgICAgICAgIFRvRG9zLmNyZWF0ZVRvRG8odGl0bGVJbnB1dC52YWx1ZSwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgcHJpb3JpdHlTZWxlY3QudmFsdWUsIGR1ZURhdGVJbnB1dC52YWx1ZSwgY2hlY2tMaXN0VmFsdWVzQXJyYXkpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKS5sZW5ndGg7IGkrKykgey8vY2xlYXIgdGhlIGZvcm0gdmFsdWVzXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpW2ldLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHByaW9yaXR5U2VsZWN0LnZhbHVlID0gXCJOb25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVhZExpbmVJbnB1dC5jaGVja2VkID0gZmFsc2U7Ly91bmNoZWNrIHRoZSBkZWFkbGluZSBjaGVja2JveFxyXG4gICAgICAgICAgICBjaGVja0NoZWNrYm94U3RhdHVzKGRlYWRMaW5lSW5wdXQsIGFkZER1ZURhdGVJbnB1dE9uUGFnZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnJlbW92ZUVsZW1lbnRzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRHVlLWRhdGVcIiksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1EdWUtZGF0ZV0nKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBEaXNwbGF5aW5nVG9Eb3MucmVtb3ZlQWxsRGlzcGxheWVkQ29udGVudCgpOy8vcmVtb3ZlIGFuZCBkaXNwbGF5IGFnYWluXHJcbiAgICAgICAgICAgIERpc3BsYXlpbmdUb0Rvcy5kaXNwbGF5KFRvRG9zLnRvRG9BcnJheSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhZGRidXR0b24gY2xpY2tlZCcpO1xyXG5cclxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY29udGFpbmVyJykuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5wdXQtY29udGFpbmVyJykubGVuZ3RoIDwgMSkgey8vaWYgZm9ybSBoYXMgbm90IGJlZW4gY3JlYXRlZCBhbHJlYWR5XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGVyZSBhcmUgbm8gZm9ybXMnKTtcclxuICAgICAgICAgICAgY3JlYXRlRm9ybVRvRGVmaW5lVG9Ebyhmb3JtQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNoZWNrQ2hlY2tib3hTdGF0dXMsXHJcbiAgICAgICAgY3JlYXRlRm9ybVRvRGVmaW5lVG9EbyxcclxuICAgIH1cclxuXHJcbn0pKCk7XHJcblxyXG5jb25zdCBEaXNwbGF5aW5nVG9Eb3MgPSAoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGxldCBjb250ZW50RGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50LWRpc3BsYXknKTtcclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVBbGxEaXNwbGF5ZWRDb250ZW50KCkge1xyXG4gICAgICAgIGxldCBjaGlsZCA9IGNvbnRlbnREaXNwbGF5Lmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgd2hpbGUgKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnREaXNwbGF5LnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuICAgICAgICAgICAgY2hpbGQgPSBjb250ZW50RGlzcGxheS5sYXN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5KGFycmF5T2ZUb2Rvcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkaXNwbGF5IHRvZG8gc3RhcnRzJyk7XHJcblxyXG4gICAgICAgIHJlbW92ZUFsbERpc3BsYXllZENvbnRlbnQoKSAgICAgICAgLy9yZWZyZXNoIHdoZW4gZGlzcGxheWluZ1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KFRvRG9zLnRvRG9BcnJheSkpXHJcblxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyYXlPZlRvZG9zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGUgbGVuZ3RoIG9mIGFycmF5IG9mIHRvZG9zIGlzICcgKyBhcnJheU9mVG9kb3MubGVuZ3RoKVxyXG4gICAgICAgICAgICBsZXQgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0b0RvQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9kby1jb250YWluZXInKVxyXG4gICAgICAgICAgICB0b0RvQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBgbm90ZSAke2p9YClcclxuICAgICAgICAgICAgY29udGVudERpc3BsYXkuYXBwZW5kQ2hpbGQodG9Eb0NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKCdwJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGBUaXRsZTogJHthcnJheU9mVG9kb3Nbal0udGl0bGV9YCwgdG9Eb0NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGlmIChhcnJheU9mVG9kb3Nbal0uZGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKCdwJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGBEZXNjcmlwdGlvbjogJHthcnJheU9mVG9kb3Nbal0uZGVzY3JpcHRpb259YCwgdG9Eb0NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFycmF5T2ZUb2Rvc1tqXS5kdWVEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZSgncCcsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBgRHVlIGRhdGU6ICR7YXJyYXlPZlRvZG9zW2pdLmR1ZURhdGV9YCwgdG9Eb0NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFycmF5T2ZUb2Rvc1tqXS5wcmlvcml0eSAhPT0gJ05vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZSgncCcsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBgUHJpb3JpdHk6ICR7YXJyYXlPZlRvZG9zW2pdLnByaW9yaXR5fWAsIHRvRG9Db250YWluZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhcnJheU9mVG9kb3Nbal0uY2hlY2tMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBUb0Rvc0NoZWNrbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoVG9Eb3NDaGVja2xpc3QsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAnY2hlY2tsaXN0OicsIHRvRG9Db250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbCA9IDA7IGwgPCBhcnJheU9mVG9kb3Nbal0uY2hlY2tMaXN0Lmxlbmd0aDsgbCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoJ3AnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgYXJyYXlPZlRvZG9zW2pdLmNoZWNrTGlzdFtsXS52YWx1ZSwgVG9Eb3NDaGVja2xpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGF0dXNDaGVja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c0NoZWNrZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNDaGVja2VyLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHthcnJheU9mVG9kb3Nbal0ub3JkaW5hbH0tJHtsfWApLy9pZCBpcyB0aGUgVG9Eb09yZGluYWwtY2hlY2tsaXN0IGVsZW1lbnQgbnVtYmVyLCBlLmcuIDAtMCwgMC0xLCAxLTAgZXRjLlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCchQ0hFQ0shJyArIGFycmF5T2ZUb2Rvc1tqXS5jaGVja0xpc3RbbF0uZG9uZSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlPZlRvZG9zW2pdLmNoZWNrTGlzdFtsXS5kb25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCchQ0hFQ0shIHJ1bnMnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNDaGVja2VyLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShzdGF0dXNDaGVja2VyLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBUb0Rvc0NoZWNrbGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ2hlY2tlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uY2hlY2tDaGVja2JveFN0YXR1cyhzdGF0dXNDaGVja2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5T2ZUb2Rvc1tlLnRhcmdldC5pZFswXV0uY2hlY2tMaXN0W2UudGFyZ2V0LmlkW2UudGFyZ2V0LmlkLmxlbmd0aCAtIDFdXS5kb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pZCArIFwiY2hlY2tlZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheU9mVG9kb3NbZS50YXJnZXQuaWRbMF1dLmNoZWNrTGlzdFtlLnRhcmdldC5pZFtlLnRhcmdldC5pZC5sZW5ndGggLSAxXV0uZG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkICsgXCJub3RjaGVja2VkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcnJheU9mVG9kb3MpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IG5vdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgbm90ZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25vdGUtY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKG5vdGVDb250YWluZXIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRvRG9Db250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGFkZE5vdGVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGlzcGxheWVkTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgbGV0IG5vdGVzSW5wdXRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgbGV0IHNhdmVOb3Rlc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBsZXQgZGVsZXRlTm90ZXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgbGV0IGVkaXROb3RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBub3RlRWRpdFN0YXRlKCkgey8vcmVtb3ZlIGFkZCBidXR0b24sIGFkZCBpbnB1dCBmaWVsZCAod2l0aCB0aGUgdmFsdWUgc2V0LCBpZiBhdmFpbGFibGUpLCBzYXZlIGFuZCByZW1vdmUgYnV0dG9uc1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdGUgZWRpdCBzdGF0ZSBydW5zJylcclxuICAgICAgICAgICAgICAgIGlmIChhZGROb3Rlc0J1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZE5vdGVzQnV0dG9uLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZWRpdE5vdGVCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICBlZGl0Tm90ZUJ1dHRvbi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKGRpc3BsYXllZE5vdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIG5vdGVDb250YWluZXIpXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlPZlRvZG9zW2pdLm5vdGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXNJbnB1dEFyZWEudmFsdWUgPSBhcnJheU9mVG9kb3Nbal0ubm90ZXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBub3Rlc0lucHV0QXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25vdGUtaW5wdXQtYXJlYScpXHJcbiAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShub3Rlc0lucHV0QXJlYSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgbm90ZUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShzYXZlTm90ZXNCdXR0b24sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAnc2F2ZScsIG5vdGVDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgc2F2ZU5vdGVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOb3RlU3RhdGUobm90ZXNJbnB1dEFyZWEudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKGRlbGV0ZU5vdGVzQnV0dG9uLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgJ3gnLCBub3RlQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZU5vdGVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGUgbm90ZXMgYnV0dG9uIGNsaWNrZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFycmF5T2ZUb2Rvc1tqXS5ub3RlcylcclxuICAgICAgICAgICAgICAgICAgICBub05vdGVTdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBub3RlIHN0YXRlJylcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndG9kb3Mubm90ZSEhISEhISEhISEhISEhISEhIScgKyBhcnJheU9mVG9kb3Nbal0ubm90ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdGVzaW5wdXRhcmVlYS52YWx1ZScgKyBub3Rlc0lucHV0QXJlYS52YWx1ZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRpc3BsYXlOb3RlU3RhdGUodmFsdWUpIHsvL2Rpc3BsYXkgdGhlIG5vdGUsIHJlbW92ZSBpbnB1dCBhcmVhLCByZW1vdmUgc2F2ZSBidXR0b24sIGFkZCBlZGl0IGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Rpc3BsYXkgbm90ZSBzdGF0ZScpXHJcbiAgICAgICAgICAgICAgICBhcnJheU9mVG9kb3Nbal0ubm90ZXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXllZE5vdGUuaW5uZXJUZXh0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucmVtb3ZlRWxlbWVudHMobm90ZXNJbnB1dEFyZWEsIHNhdmVOb3Rlc0J1dHRvbik7XHJcbiAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShlZGl0Tm90ZUJ1dHRvbiwgdW5kZWZpbmVkLCBkZWxldGVOb3Rlc0J1dHRvbiwgJ0VkaXQgbm90ZScsIG5vdGVDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgZWRpdE5vdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2VkaXQgbm90ZSBidXR0b24gY2xpY2tlcmQnKTtcclxuICAgICAgICAgICAgICAgICAgICBub3RlRWRpdFN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG5vTm90ZVN0YXRlKCkgey8vcmVtb3ZlIGV2ZXJ5dGhpbmcgZnJvbSB0aGUgbm90ZUNvbnRhaW5lciwgZXhjZXB0IHRoZSBBZGQgbm90ZSBidXR0b25cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBub3RlIHN0YXRlJylcclxuICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5yZW1vdmVBbGxDaGlsZHJlbihub3RlQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIG5vdGVzSW5wdXRBcmVhLnZhbHVlID0gXCJcIlxyXG4gICAgICAgICAgICAgICAgYXJyYXlPZlRvZG9zW2pdLm5vdGVzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheWVkTm90ZS5pbm5lclRleHQgPSBcIlwiXHJcbiAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShhZGROb3Rlc0J1dHRvbiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsICdBZGQgbm90ZXMnLCBub3RlQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhZGROb3Rlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRpc3BsYXllZE5vdGUpXHJcbiAgICAgICAgICAgICAgICBub3RlRWRpdFN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWRkIG5vdGVzIGJ1dHRvbiBjbGlja2VkJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmIChhcnJheU9mVG9kb3Nbal0ubm90ZXMpIHsvL25vdGVzIGV4aXN0IGF0IHN0YXJ0XHJcbiAgICAgICAgICAgICAgICBub3RlRWRpdFN0YXRlKCk7Ly9mb3IgYnV0dG9ucyB0byBhcHBlYXJcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOb3RlU3RhdGUoYXJyYXlPZlRvZG9zW2pdLm5vdGVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vTm90ZVN0YXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZSgncCcsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBgU3RhdHVzOiAke2FycmF5T2ZUb2Rvc1tqXS50b0RvU3RhdHVzfWAsIHRvRG9Db250YWluZXIpO1xyXG4gICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vY3VycmVudCB0aGluZyB0byBkb1xyXG4gICAgICAgICAgICBsZXQgZWRpdFRvRG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoZWRpdFRvRG9CdXR0b24sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAnZWRpdCcsIHRvRG9Db250YWluZXIpO1xyXG4gICAgICAgICAgICBlZGl0VG9Eb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlZGl0IHRvZG8gYnV0dG9uIGNsaWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5yZW1vdmVBbGxDaGlsZHJlbih0b0RvQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uY3JlYXRlRm9ybVRvRGVmaW5lVG9Ebyh0b0RvQ29udGFpbmVyLCBhcnJheU9mVG9kb3Nbal0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBsZXQgZGVsZXRlVG9Eb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKGRlbGV0ZVRvRG9CdXR0b24sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAnZGVsZXRlJywgdG9Eb0NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGRlbGV0ZVRvRG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlIHRvZG8gY2xpY2tlZCcpXHJcbiAgICAgICAgICAgICAgICBhcnJheU9mVG9kb3Muc3BsaWNlKGosIDEpO1xyXG4gICAgICAgICAgICAgICAgdG9Eb0NvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIC8vZGVhbGluZ1dpdGhMb2NhbFN0b3JhZ2UudXBkYXRlTG9jYWxTdG9yYWdlKCd0b0RvQXJyYXknLCBhcnJheU9mVG9kb3MpOyBzaG91bGQgbm90IGJlIG5lY2Vzc2FyeSBzaW5jZSBjbGlja2luZyBvbiB0aGUgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAvL2FscmVhZHkgdXBkYXRlcyBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndG8gZG8gYXJyYXkgYWZ0ZXIgZGVsZXRpbmcgZWxlbWVudCcgKyBKU09OLnN0cmluZ2lmeShhcnJheU9mVG9kb3MpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdHRlbnRpb24sIHRoaXMgaXMgbG9jYWwgc3RvcmFnZScgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0FycmF5JykpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcnJheU9mVG9kb3Nbal0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFycmF5T2ZUb2Rvc1tqXS5jaGVja0xpc3QpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3RlcycgKyBhcnJheU9mVG9kb3Nbal0ubm90ZXMpXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHRvRG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndG8gZG8gY29udGFpbmVyIGNsaWNrZWQnKVxyXG4gICAgICAgICAgICAgICAgZGVhbGluZ1dpdGhMb2NhbFN0b3JhZ2UudXBkYXRlTG9jYWxTdG9yYWdlKCd0b0RvQXJyYXknLCBhcnJheU9mVG9kb3MpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvIGRvIGFycmF5IGFmdGVyIGNsaWNraW5nJyArIEpTT04uc3RyaW5naWZ5KGFycmF5T2ZUb2RvcykpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2F0dGVudGlvbiwgdGhpcyBpcyBsb2NhbCBzdG9yYWdlJyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvQXJyYXknKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGlzcGxheSxcclxuICAgICAgICByZW1vdmVBbGxEaXNwbGF5ZWRDb250ZW50XHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5jb25zdCBUb0RvcyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY3JlYXRlIHRvZG8gcnVucycpO1xyXG4gICAgbGV0IHRvRG9BcnJheSA9IFtdOy8vaWYgdGhlcmUgaXMgc29tZXRoaW5nIGluIGxvY2FsU3RvcmFnZSB0aGVzZSBnZXQgY2hhbmdlZFxyXG4gICAgbGV0IG9yZGluYWwgPSAwO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvQXJyYXknKSkge1xyXG4gICAgICAgIHRvRG9BcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9BcnJheScpKTtcclxuICAgICAgICBvcmRpbmFsID0gdG9Eb0FycmF5Lmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyB0b0RvIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCBjaGVja0xpc3QpIHtcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICAgICAgdGhpcy5vcmRpbmFsID0gb3JkaW5hbDtcclxuICAgICAgICAgICAgdGhpcy50b0RvU3RhdHVzID0gXCJvcGVuXCJcclxuICAgICAgICAgICAgb3JkaW5hbCsrO1xyXG4gICAgICAgICAgICBpZiAoZHVlRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2hlY2tMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTGlzdCA9IGNoZWNrTGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVUb0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrTGlzdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUT0RPIGNyZWF0aW9uIHN0YXJ0Jyk7XHJcbiAgICAgICAgbGV0IG5ld1RvRG8gPSBuZXcgdG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVja0xpc3QpO1xyXG4gICAgICAgIFRvRG9zLnRvRG9BcnJheS5wdXNoKG5ld1RvRG8pO1xyXG4gICAgICAgIGRlYWxpbmdXaXRoTG9jYWxTdG9yYWdlLnVwZGF0ZUxvY2FsU3RvcmFnZSgndG9Eb0FycmF5JywgVG9Eb3MudG9Eb0FycmF5KTtcclxuICAgICAgICBjb25zb2xlLmxvZygnYXR0ZW50aW9uLCB0aGlzIGlzIGxvY2FsIHN0b3JhZ2UnICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9BcnJheScpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNyZWF0ZVRvRG8sXHJcbiAgICAgICAgdG9Eb0FycmF5LC8vcmVzdHJpY3QgaXQgbGF0ZXIsIHRvIGV4cG9zZSBvbmx5IGEgZ2V0IG9mIHRoZSBhcnJhdCBvciBwZXJoYXBzIHBhcnRpY3VsYXIgcHJvcGVydGllcyB0byBiZSBjaGFuZ2VkLCBlLmcuIGNoZWNrbGlzdCBzdGF0dXMgb3IgcHJpb3JpdHlcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmNvbnN0IGRlYWxpbmdXaXRoTG9jYWxTdG9yYWdlID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2Uoa2V5TmFtZSwgdmFsdWUpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXlOYW1lLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UsXHJcbiAgICB9XHJcbn0pKCk7XHJcbmNvbnNvbGUubG9nKCdhdHRlbnRpb24sIHRoaXMgaXMgbG9jYWwgc3RvcmFnZScgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0FycmF5JykpO1xyXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9BcnJheScpKSB7Ly9pZiBzb21ldGhpbmcgaGFzIGJlZW4gc2V0IGluIHRoZSBsb2NhbCBzdG9yYWdlLCB0aGVuIHJldHJpZXZlIG9uIHN0YXJ0dXBcclxuICAgIFRvRG9zLnRvRG9BcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9BcnJheScpKVxyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoVG9Eb3MudG9Eb0FycmF5KSlcclxuICAgIERpc3BsYXlpbmdUb0Rvcy5kaXNwbGF5KEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9BcnJheScpKSlcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=