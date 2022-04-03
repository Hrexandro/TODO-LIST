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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#form-container {\r\n    padding-left: 10px;\r\n    padding-right: 5px;\r\n    height: 100%;\r\n    background: #2c9fd1;\r\n    color: white;\r\n    font-size: 0.9em;\r\n}\r\n\r\n#input-container {\r\n    top: 0px;\r\n    position: sticky;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    display: grid;\r\n    grid-template-columns: 1fr 7fr;\r\n    column-gap: 0px;\r\n    height: 100vh;\r\n}\r\n\r\n.todo-container{\r\n    margin: 20px;\r\n    position: relative;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n    background: white;\r\n    color: #1a6180;\r\n    border: 1px solid black;\r\n\r\n\r\n\r\n    animation: slide-up 0.4s ease;\r\n    transition: all 0.2s ease;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,QAAQ;IACR,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,aAAa;IACb,8BAA8B;IAC9B,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,cAAc;IACd,uBAAuB;;;;IAIvB,6BAA6B;IAC7B,yBAAyB;AAC7B","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#form-container {\r\n    padding-left: 10px;\r\n    padding-right: 5px;\r\n    height: 100%;\r\n    background: #2c9fd1;\r\n    color: white;\r\n    font-size: 0.9em;\r\n}\r\n\r\n#input-container {\r\n    top: 0px;\r\n    position: sticky;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    display: grid;\r\n    grid-template-columns: 1fr 7fr;\r\n    column-gap: 0px;\r\n    height: 100vh;\r\n}\r\n\r\n.todo-container{\r\n    margin: 20px;\r\n    position: relative;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n    background: white;\r\n    color: #1a6180;\r\n    border: 1px solid black;\r\n\r\n\r\n\r\n    animation: slide-up 0.4s ease;\r\n    transition: all 0.2s ease;\r\n}\r\n"],"sourceRoot":""}]);
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
/*
//////DO THIS NOW:


- add option to remove todos or mark them as done or something - DO THIS

- make sure the list of todos is updated in local storage whenever they are edited (changing notes and checkbox status etc)

- switch from writing things to do here, to having them in the app itself :P

- set how checklist button works when all the checklist input fields are deleted



-add restrictions to form input to ensure aesthetic compatibility

- style everything to look nice and neat and clean and super cool

- make them draggable to switch places?

- sort them by different criteria

- divide them into projects
*/




//////////////////////for testing purposes only
/* <button id="checklocalstorage-button">check local storage</button>
<button id="check todos array-button">check array of todos</button> */
document.getElementById('checklocalstorage-button').addEventListener('click',()=>{
    console.log(JSON.stringify(localStorage.getItem('toDoArray')))

})
document.getElementById('check todos array-button').addEventListener('click',()=>{
    console.log(JSON.stringify(ToDos.toDoArray))
})
////////////////

const DOMManipulation = (function () {
    function putElementOnPage(element, description, insertBeforeWhat, innerText, parent) {//perhaps make a different type for inputs and non-inputs
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

    function removeElements(...elements) {//elements have to be DOMs, not variables
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

    let titleInput = document.createElement('input');
    let descriptionInput = document.createElement('input');
    let deadLineInput = document.createElement('input');
    let dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    let prioritySelect = document.createElement('select');

    let checkListElementCounter = 0;

    function checkCheckboxStatus(checkBoxElement, ifChecked, ifUnchecked) {//make sure the parameters are functions
        if (checkBoxElement.checked) {
            ifChecked();
        }
        else {
            ifUnchecked();
        }
    }
    addButton.addEventListener('click', () => {
        console.log('addbutton clicked');

        if (document.getElementById('input-container') === null) {//if form has not been created already
            console.log('there are no forms');

            let inputContainer = document.createElement('div');
            inputContainer.id = 'input-container';
            formContainer.appendChild(inputContainer);
            let submitButton = document.createElement('button');
            submitButton.setAttribute('id', 'submit-button')

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
            })

            //
            let checkListInput = document.createElement('input');
            checkListInput.type = 'checkbox';
            DOMManipulation.putElementOnPage(checkListInput, 'Checklist', undefined, undefined, inputContainer);
            //
            //checklist stuff
            checkListInput.addEventListener('click', () => {//check status, add an input page or remove


                checkCheckboxStatus(checkListInput, () => {
                    function createNextItem() {
                        let checkListElementContainer = document.createElement('div');
                        let elementNumber = checkListElementCounter;//perhaps shift numbering to the checklistElement itself
                        checkListElementContainer.setAttribute('id', elementNumber);
                        checkListElementContainer.setAttribute('class', 'checklist-element-container');
                        checkListElementCounter++;

                        DOMManipulation.putElementOnPage(

                            checkListElementContainer,
                            undefined,
                            document.querySelector('label[for=Priority]'),
                            undefined,
                            inputContainer);

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
                        Array.from(document.getElementsByClassName('checklist-element-container')).forEach(DOMManipulation.removeElements);//remove all checklist elements
                        //the above throws an error (Uncaught TypeError: elements[k].remove is not a function) but works, I wonder why
                    }

                );

            })
            //checklist



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



            formContainer.appendChild(submitButton);
            submitButton.innerText = 'Submit'
            document.getElementById('submit-button').addEventListener('click', () => {
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
    })


    return {
        checkCheckboxStatus,
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
            toDoContainer.setAttribute('class','todo-container')
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
            if (arrayOfTodos[j].checkList !== []) {
                let ToDosChecklist = document.createElement('div');
                DOMManipulation.putElementOnPage(ToDosChecklist, undefined, undefined, 'checklist:', toDoContainer);
                for (let l = 0; l < arrayOfTodos[j].checkList.length; l++) {//add the checkable button here later
                    DOMManipulation.putElementOnPage('p', undefined, undefined, arrayOfTodos[j].checkList[l].value, ToDosChecklist);
                    let statusChecker = document.createElement('input')
                    statusChecker.setAttribute('type', 'checkbox')
                    statusChecker.setAttribute('id', `${arrayOfTodos[j].ordinal}-${l}`)//id is the ToDoOrdinal-checklist element number, e.g. 0-0, 0-1, 1-0 etc.
                    DOMManipulation.putElementOnPage(statusChecker, undefined, undefined, undefined, ToDosChecklist);
                    statusChecker.addEventListener('click', (e) => {
                        form.checkCheckboxStatus(statusChecker,
                            () => {
                                ToDos.toDoArray[e.target.id[0]].checkList[e.target.id[e.target.id.length - 1]].done = true;
                                console.log(e.target.id + "checked")
                            },
                            () => {
                                ToDos.toDoArray[e.target.id[0]].checkList[e.target.id[e.target.id.length - 1]].done = false;
                                console.log(e.target.id + "notchecked")
                            })
                        console.log(ToDos.toDoArray)
                    })
                }

            }
            //have it display the notes here


            let noteContainer = document.createElement('div');
            noteContainer.setAttribute('class', 'note-container');
            DOMManipulation.putElementOnPage(noteContainer, undefined, undefined, undefined, toDoContainer);

            let addNotesButton = document.createElement('button');

            let displayedNote = document.createElement('p');//create the note element and insert it, no inner text yet
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
                    displayNoteState();
                })
                DOMManipulation.putElementOnPage(deleteNotesButton, undefined, undefined, 'x', noteContainer);
                deleteNotesButton.addEventListener('click', () => {
                    console.log('delete notes button clicked')
                    console.log(arrayOfTodos[j].notes)


                    console.log(arrayOfTodos[j].notes)
                    noNoteState();
                    console.log('no note state')
                    console.log('todos.note!!!!!!!!!!!!!!!!!!' + arrayOfTodos[j].notes)
                    console.log('notesinputareea.value' + notesInputArea.value)

                    // notesInputArea.remove();
                    // saveNotesButton.remove();
                    // deleteNotesButton.remove();
                    // DOMManipulation.putElementOnPage(addNotesButton, undefined, undefined, 'Add notes', noteContainer);
                })

            }
            function displayNoteState() {//display the note, remove input area, remove save button, add edit button
                //make it save the notes as a property of the ToDo:
                //save the value of notesInputArea
                arrayOfTodos[j].notes = notesInputArea.value;
                //display the value of notes- add displaying it it is already set as well - as a paragraph
                displayedNote.innerText = notesInputArea.value;
                //remove the input area
                //notesInputArea.remove();
                DOMManipulation.removeElements(notesInputArea, saveNotesButton);

                //noteContainer.remove();
                //remove the save button and substitute it with an edit button (remember to remove the edit button if the note is removed)
                DOMManipulation.putElementOnPage(editNoteButton, undefined, deleteNotesButton, 'Edit', noteContainer);
                editNoteButton.addEventListener('click', () => {
                    console.log('edit note button clickerd');
                    noteEditState();
                })
                //leave the remove button
                console.log('save notes button clicked');
                console.log(arrayOfTodos);
                //make sure the old note disappears after editing
            }
            function noNoteState() {//finish this, remove everything from the noteContainer, except the Add note button
                //DOMManipulation.removeElements(Array.from(noteContainer.children));
                console.log('no note state')
                DOMManipulation.removeAllChildren(noteContainer);
                notesInputArea.value = ""
                arrayOfTodos[j].notes = undefined;
                displayedNote.innerText = ""
                DOMManipulation.putElementOnPage(addNotesButton, undefined, undefined, 'Add notes', noteContainer);
                //console.log(Array.from(noteContainer.children));
                //Array.from(document.getElementsByClassName('checklist-element-container')).forEach(DOMManipulation.removeElements);
                //Array.from(noteContainer.children).forEach(DOMManipulation.removeElements)
            }
            addNotesButton.addEventListener('click', () => {
                console.log(displayedNote)
                noteEditState();
                //addNotesButton.remove();
                console.log('add notes button clicked');
            })
            if (arrayOfTodos[j].notes) {//notes at start
                noteEditState();
            }
            else {
                noNoteState();
            }

            DOMManipulation.putElementOnPage('p', undefined, undefined, `Status: ${arrayOfTodos[j].toDoStatus}`, toDoContainer)
            let deleteToDoButton = document.createElement('button')
            DOMManipulation.putElementOnPage(deleteToDoButton, undefined, undefined, 'delete', toDoContainer)
            deleteToDoButton.addEventListener('click', () => {
                console.log('delete todo clicked')
                arrayOfTodos.splice(j, 1);
                toDoContainer.remove();
                dealingWithLocalStorage.updateLocalStorage('toDoArray', arrayOfTodos);
                console.log('to do array after deleting element' + JSON.stringify(arrayOfTodos));
                console.log('attention, this is local storage' + localStorage.getItem('toDoArray'));
            })
            console.log(arrayOfTodos[j])
            console.log(arrayOfTodos[j].checkList)
            console.log('notes' + arrayOfTodos[j].notes)

            toDoContainer.addEventListener('click',()=>{
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

    // function pushElementIntoToDoArray(element){
    //     ToDos.toDoArray.push(element)
    // }
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

// ToDos.createToDo('Finish the ToDo list app', 'Do all the things specified', undefined, 'High', [
//     { value: 'make checklist clickable', done: false },
//     { value: 'improve style', done: false },
//     { value: 'add separate projects', done: false }])
// DisplayingToDos.display(ToDos.toDoArray)


const dealingWithLocalStorage = (function () {

    function updateLocalStorage(keyName, value) {
        localStorage.setItem(keyName, JSON.stringify(value))
    }

    // function getElementFromLocalStorage(keyName) {
    //     if (localStorage.getItem(keyName)) {//if something has been set in the local storage, then retrieve
    //         return JSON.parse(localStorage.getItem(`${keyName}`))//or just keyName?
    //     }
    // }


    return {
        updateLocalStorage,
        // getElementFromLocalStorage
    }
})();
console.log('attention, this is local storage' + localStorage.getItem('toDoArray'));
if (localStorage.getItem('toDoArray')) {//if something has been set in the local storage, then retrieve
    ToDos.toDoArray = JSON.parse(localStorage.getItem('toDoArray'))
    console.log(JSON.stringify(ToDos.toDoArray))
    DisplayingToDos.display(JSON.parse(localStorage.getItem('toDoArray')))
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLFNBQVMsZ0RBQWdEO0FBQ3pELFNBQVMscUNBQXFDO0FBQzlDLFNBQVMsNkNBQTZDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DLHlEQUF5RCxRQUFRO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbiNmb3JtLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMyYzlmZDE7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXHJcXG59XFxyXFxuXFxyXFxuI2lucHV0LWNvbnRhaW5lciB7XFxyXFxuICAgIHRvcDogMHB4O1xcclxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA3ZnI7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGFpbmVye1xcclxcbiAgICBtYXJnaW46IDIwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgY29sb3I6ICMxYTYxODA7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcblxcclxcblxcclxcblxcclxcbiAgICBhbmltYXRpb246IHNsaWRlLXVwIDAuNHMgZWFzZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFFBQVE7SUFDUixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHVCQUF1Qjs7OztJQUl2Qiw2QkFBNkI7SUFDN0IseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbiNmb3JtLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMyYzlmZDE7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXHJcXG59XFxyXFxuXFxyXFxuI2lucHV0LWNvbnRhaW5lciB7XFxyXFxuICAgIHRvcDogMHB4O1xcclxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA3ZnI7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGFpbmVye1xcclxcbiAgICBtYXJnaW46IDIwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgY29sb3I6ICMxYTYxODA7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcblxcclxcblxcclxcblxcclxcbiAgICBhbmltYXRpb246IHNsaWRlLXVwIDAuNHMgZWFzZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLypcclxuLy8vLy8vRE8gVEhJUyBOT1c6XHJcblxyXG5cclxuLSBhZGQgb3B0aW9uIHRvIHJlbW92ZSB0b2RvcyBvciBtYXJrIHRoZW0gYXMgZG9uZSBvciBzb21ldGhpbmcgLSBETyBUSElTXHJcblxyXG4tIG1ha2Ugc3VyZSB0aGUgbGlzdCBvZiB0b2RvcyBpcyB1cGRhdGVkIGluIGxvY2FsIHN0b3JhZ2Ugd2hlbmV2ZXIgdGhleSBhcmUgZWRpdGVkIChjaGFuZ2luZyBub3RlcyBhbmQgY2hlY2tib3ggc3RhdHVzIGV0YylcclxuXHJcbi0gc3dpdGNoIGZyb20gd3JpdGluZyB0aGluZ3MgdG8gZG8gaGVyZSwgdG8gaGF2aW5nIHRoZW0gaW4gdGhlIGFwcCBpdHNlbGYgOlBcclxuXHJcbi0gc2V0IGhvdyBjaGVja2xpc3QgYnV0dG9uIHdvcmtzIHdoZW4gYWxsIHRoZSBjaGVja2xpc3QgaW5wdXQgZmllbGRzIGFyZSBkZWxldGVkXHJcblxyXG5cclxuXHJcbi1hZGQgcmVzdHJpY3Rpb25zIHRvIGZvcm0gaW5wdXQgdG8gZW5zdXJlIGFlc3RoZXRpYyBjb21wYXRpYmlsaXR5XHJcblxyXG4tIHN0eWxlIGV2ZXJ5dGhpbmcgdG8gbG9vayBuaWNlIGFuZCBuZWF0IGFuZCBjbGVhbiBhbmQgc3VwZXIgY29vbFxyXG5cclxuLSBtYWtlIHRoZW0gZHJhZ2dhYmxlIHRvIHN3aXRjaCBwbGFjZXM/XHJcblxyXG4tIHNvcnQgdGhlbSBieSBkaWZmZXJlbnQgY3JpdGVyaWFcclxuXHJcbi0gZGl2aWRlIHRoZW0gaW50byBwcm9qZWN0c1xyXG4qL1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2ZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHlcclxuLyogPGJ1dHRvbiBpZD1cImNoZWNrbG9jYWxzdG9yYWdlLWJ1dHRvblwiPmNoZWNrIGxvY2FsIHN0b3JhZ2U8L2J1dHRvbj5cclxuPGJ1dHRvbiBpZD1cImNoZWNrIHRvZG9zIGFycmF5LWJ1dHRvblwiPmNoZWNrIGFycmF5IG9mIHRvZG9zPC9idXR0b24+ICovXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVja2xvY2Fsc3RvcmFnZS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvQXJyYXknKSkpXHJcblxyXG59KVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2sgdG9kb3MgYXJyYXktYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShUb0Rvcy50b0RvQXJyYXkpKVxyXG59KVxyXG4vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5jb25zdCBET01NYW5pcHVsYXRpb24gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gcHV0RWxlbWVudE9uUGFnZShlbGVtZW50LCBkZXNjcmlwdGlvbiwgaW5zZXJ0QmVmb3JlV2hhdCwgaW5uZXJUZXh0LCBwYXJlbnQpIHsvL3BlcmhhcHMgbWFrZSBhIGRpZmZlcmVudCB0eXBlIGZvciBpbnB1dHMgYW5kIG5vbi1pbnB1dHNcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVsZW1lbnQgcHV0dGVkIG9uIHBhZ2UgaXNcIiwgZWxlbWVudClcclxuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7Ly9pZiBlbGVtZW50IGlzIG5vdCBvYmplY3QsIG1lYW5pbmcgYW4gYWxyZWFkeSBjcmVhdGVkIGVsZW1lbnRcclxuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbm5lclRleHQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5pbm5lclRleHQgPSBpbm5lclRleHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGVzY3JpcHRpb24pIHsvL2Rlc2NyaXB0aW9uIGlzIGZvciBsYWJlbGxlZCBmb3JtIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICBlbGVtZW50TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBkZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIGVsZW1lbnRMYWJlbC5pbm5lclRleHQgPSBgJHtkZXNjcmlwdGlvbn1gO1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbilcclxuICAgICAgICAgICAgaWYgKGluc2VydEJlZm9yZVdoYXQpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoZWxlbWVudExhYmVsLCBpbnNlcnRCZWZvcmVXaGF0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50TGFiZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbnNlcnRCZWZvcmVXaGF0KSB7XHJcbiAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoZWxlbWVudCwgaW5zZXJ0QmVmb3JlV2hhdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnRzKC4uLmVsZW1lbnRzKSB7Ly9lbGVtZW50cyBoYXZlIHRvIGJlIERPTXMsIG5vdCB2YXJpYWJsZXNcclxuICAgICAgICBsZXQgY291bnRlciA9IGVsZW1lbnRzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGNvdW50ZXI7IGsrKykge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudHNba10pIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2tdLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGRyZW4oZWxlbWVudCkge1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gZWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPD0gY291bnRlcjsgbSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpdGVyYXRpb24nICsgbSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtIGlzICcgKyBtKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50LmNoaWxkcmVuKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmNoaWxkcmVuWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHV0RWxlbWVudE9uUGFnZSxcclxuICAgICAgICByZW1vdmVFbGVtZW50cyxcclxuICAgICAgICByZW1vdmVBbGxDaGlsZHJlblxyXG4gICAgfVxyXG59KSgpO1xyXG5jb25zdCBmb3JtID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtYnV0dG9uJyk7XHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY29udGFpbmVyJylcclxuXHJcbiAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBsZXQgZGVhZExpbmVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGR1ZURhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xyXG4gICAgbGV0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcblxyXG4gICAgbGV0IGNoZWNrTGlzdEVsZW1lbnRDb3VudGVyID0gMDtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0NoZWNrYm94U3RhdHVzKGNoZWNrQm94RWxlbWVudCwgaWZDaGVja2VkLCBpZlVuY2hlY2tlZCkgey8vbWFrZSBzdXJlIHRoZSBwYXJhbWV0ZXJzIGFyZSBmdW5jdGlvbnNcclxuICAgICAgICBpZiAoY2hlY2tCb3hFbGVtZW50LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgaWZDaGVja2VkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZlVuY2hlY2tlZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWRkYnV0dG9uIGNsaWNrZWQnKTtcclxuXHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1jb250YWluZXInKSA9PT0gbnVsbCkgey8vaWYgZm9ybSBoYXMgbm90IGJlZW4gY3JlYXRlZCBhbHJlYWR5XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGVyZSBhcmUgbm8gZm9ybXMnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBpbnB1dENvbnRhaW5lci5pZCA9ICdpbnB1dC1jb250YWluZXInO1xyXG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgbGV0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQtYnV0dG9uJylcclxuXHJcbiAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKHRpdGxlSW5wdXQsICdUaXRsZScsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBpbnB1dENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKGRlc2NyaXB0aW9uSW5wdXQsICdEZXNjcmlwdGlvbicsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBpbnB1dENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShkZWFkTGluZUlucHV0LCAnRGVhZGxpbmUnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgaW5wdXRDb250YWluZXIpO1xyXG4gICAgICAgICAgICBkZWFkTGluZUlucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gYWRkRHVlRGF0ZUlucHV0T25QYWdlKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGQgZHVlIGRhdGUgb24gcGFnZSBydW5zXCIpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImR1ZSBkYXRlIGlucHV0IGlzXCIsIGR1ZURhdGVJbnB1dClcclxuICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKGR1ZURhdGVJbnB1dCwgJ0R1ZS1kYXRlJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPUNoZWNrbGlzdF0nKSwgdW5kZWZpbmVkLCBpbnB1dENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRlYWRMaW5lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGVja0NoZWNrYm94U3RhdHVzKGRlYWRMaW5lSW5wdXQsIGFkZER1ZURhdGVJbnB1dE9uUGFnZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5yZW1vdmVFbGVtZW50cyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkR1ZS1kYXRlXCIpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsYWJlbFtmb3I9RHVlLWRhdGVdJykpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBsZXQgY2hlY2tMaXN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBjaGVja0xpc3RJbnB1dC50eXBlID0gJ2NoZWNrYm94JztcclxuICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoY2hlY2tMaXN0SW5wdXQsICdDaGVja2xpc3QnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgaW5wdXRDb250YWluZXIpO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvL2NoZWNrbGlzdCBzdHVmZlxyXG4gICAgICAgICAgICBjaGVja0xpc3RJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsvL2NoZWNrIHN0YXR1cywgYWRkIGFuIGlucHV0IHBhZ2Ugb3IgcmVtb3ZlXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNoZWNrQ2hlY2tib3hTdGF0dXMoY2hlY2tMaXN0SW5wdXQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVOZXh0SXRlbSgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrTGlzdEVsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnROdW1iZXIgPSBjaGVja0xpc3RFbGVtZW50Q291bnRlcjsvL3BlcmhhcHMgc2hpZnQgbnVtYmVyaW5nIHRvIHRoZSBjaGVja2xpc3RFbGVtZW50IGl0c2VsZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja0xpc3RFbGVtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBlbGVtZW50TnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tMaXN0RWxlbWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrbGlzdC1lbGVtZW50LWNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja0xpc3RFbGVtZW50Q291bnRlcisrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tMaXN0RWxlbWVudENvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1Qcmlvcml0eV0nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGVja0xpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tMaXN0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrbGlzdC1lbGVtZW50JylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKGNoZWNrTGlzdEVsZW1lbnQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNoZWNrTGlzdEVsZW1lbnRDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkZE5leHRFbGVtZW50QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKGFkZE5leHRFbGVtZW50QnV0dG9uLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCIrXCIsIGNoZWNrTGlzdEVsZW1lbnRDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGROZXh0RWxlbWVudEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZC1uZXh0LWVsZW1lbnQtYnV0dG9uJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZE5leHRFbGVtZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnJlbW92ZUVsZW1lbnRzKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FkZC1uZXh0LWVsZW1lbnQtYnV0dG9uJylbMF0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV4dEl0ZW0oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlbW92ZVNwZWNpZmljRWxlbWVudEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShyZW1vdmVTcGVjaWZpY0VsZW1lbnRCdXR0b24sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcInJlbW92ZVwiLCBjaGVja0xpc3RFbGVtZW50Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU3BlY2lmaWNFbGVtZW50QnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmVtb3ZlLXNwZWNpZmljLWVsZW1lbnQtYnV0dG9uJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVNwZWNpZmljRWxlbWVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5yZW1vdmVFbGVtZW50cyhyZW1vdmVTcGVjaWZpY0VsZW1lbnRCdXR0b24ucGFyZW50RWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV4dEl0ZW0oKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NoZWNrbGlzdC1lbGVtZW50LWNvbnRhaW5lcicpKS5mb3JFYWNoKERPTU1hbmlwdWxhdGlvbi5yZW1vdmVFbGVtZW50cyk7Ly9yZW1vdmUgYWxsIGNoZWNrbGlzdCBlbGVtZW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoZSBhYm92ZSB0aHJvd3MgYW4gZXJyb3IgKFVuY2F1Z2h0IFR5cGVFcnJvcjogZWxlbWVudHNba10ucmVtb3ZlIGlzIG5vdCBhIGZ1bmN0aW9uKSBidXQgd29ya3MsIEkgd29uZGVyIHdoeVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy9jaGVja2xpc3RcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UocHJpb3JpdHlTZWxlY3QsICdQcmlvcml0eScsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBpbnB1dENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdE9wdGlvbih0ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gdGV4dDtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNyZWF0ZVNlbGVjdE9wdGlvbignTm9uZScpO1xyXG4gICAgICAgICAgICBjcmVhdGVTZWxlY3RPcHRpb24oJ0xvdycpO1xyXG4gICAgICAgICAgICBjcmVhdGVTZWxlY3RPcHRpb24oJ01lZGl1bScpO1xyXG4gICAgICAgICAgICBjcmVhdGVTZWxlY3RPcHRpb24oJ0hpZ2gnKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG4gICAgICAgICAgICBzdWJtaXRCdXR0b24uaW5uZXJUZXh0ID0gJ1N1Ym1pdCdcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGVja0xpc3RWYWx1ZXNBcnJheSA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2hlY2tsaXN0LWVsZW1lbnQnKSkubWFwKChlbCkgPT4geyByZXR1cm4geyB2YWx1ZTogZWwudmFsdWUsIGRvbmU6IGZhbHNlIH0gfSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2tsaXN0dmFsdWVzXCIpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaGVja0xpc3RWYWx1ZXNBcnJheSk7XHJcbiAgICAgICAgICAgICAgICBUb0Rvcy5jcmVhdGVUb0RvKHRpdGxlSW5wdXQudmFsdWUsIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsIHByaW9yaXR5U2VsZWN0LnZhbHVlLCBkdWVEYXRlSW5wdXQudmFsdWUsIGNoZWNrTGlzdFZhbHVlc0FycmF5KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpLmxlbmd0aDsgaSsrKSB7Ly9jbGVhciB0aGUgZm9ybSB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpW2ldLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVNlbGVjdC52YWx1ZSA9IFwiTm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVhZExpbmVJbnB1dC5jaGVja2VkID0gZmFsc2U7Ly91bmNoZWNrIHRoZSBkZWFkbGluZSBjaGVja2JveFxyXG4gICAgICAgICAgICAgICAgY2hlY2tDaGVja2JveFN0YXR1cyhkZWFkTGluZUlucHV0LCBhZGREdWVEYXRlSW5wdXRPblBhZ2UsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucmVtb3ZlRWxlbWVudHMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJEdWUtZGF0ZVwiKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPUR1ZS1kYXRlXScpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgRGlzcGxheWluZ1RvRG9zLnJlbW92ZUFsbERpc3BsYXllZENvbnRlbnQoKTsvL3JlbW92ZSBhbmQgZGlzcGxheSBhZ2FpblxyXG4gICAgICAgICAgICAgICAgRGlzcGxheWluZ1RvRG9zLmRpc3BsYXkoVG9Eb3MudG9Eb0FycmF5KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNoZWNrQ2hlY2tib3hTdGF0dXMsXHJcbiAgICB9XHJcblxyXG59KSgpO1xyXG5cclxuY29uc3QgRGlzcGxheWluZ1RvRG9zID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBsZXQgY29udGVudERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudC1kaXNwbGF5Jyk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsRGlzcGxheWVkQ29udGVudCgpIHtcclxuICAgICAgICBsZXQgY2hpbGQgPSBjb250ZW50RGlzcGxheS5sYXN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgIHdoaWxlIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjb250ZW50RGlzcGxheS5yZW1vdmVDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgICAgIGNoaWxkID0gY29udGVudERpc3BsYXkubGFzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheShhcnJheU9mVG9kb3MpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGlzcGxheSB0b2RvIHN0YXJ0cycpO1xyXG5cclxuICAgICAgICByZW1vdmVBbGxEaXNwbGF5ZWRDb250ZW50KCkgICAgICAgIC8vcmVmcmVzaCB3aGVuIGRpc3BsYXlpbmdcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShUb0Rvcy50b0RvQXJyYXkpKVxyXG5cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFycmF5T2ZUb2Rvcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGhlIGxlbmd0aCBvZiBhcnJheSBvZiB0b2RvcyBpcyAnICsgYXJyYXlPZlRvZG9zLmxlbmd0aClcclxuICAgICAgICAgICAgbGV0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdG9Eb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywndG9kby1jb250YWluZXInKVxyXG4gICAgICAgICAgICBjb250ZW50RGlzcGxheS5hcHBlbmRDaGlsZCh0b0RvQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoJ3AnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgYFRpdGxlOiAke2FycmF5T2ZUb2Rvc1tqXS50aXRsZX1gLCB0b0RvQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgaWYgKGFycmF5T2ZUb2Rvc1tqXS5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoJ3AnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgYERlc2NyaXB0aW9uOiAke2FycmF5T2ZUb2Rvc1tqXS5kZXNjcmlwdGlvbn1gLCB0b0RvQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXJyYXlPZlRvZG9zW2pdLmR1ZURhdGUpIHtcclxuICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKCdwJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGBEdWUgZGF0ZTogJHthcnJheU9mVG9kb3Nbal0uZHVlRGF0ZX1gLCB0b0RvQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXJyYXlPZlRvZG9zW2pdLnByaW9yaXR5ICE9PSAnTm9uZScpIHtcclxuICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKCdwJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGBQcmlvcml0eTogJHthcnJheU9mVG9kb3Nbal0ucHJpb3JpdHl9YCwgdG9Eb0NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFycmF5T2ZUb2Rvc1tqXS5jaGVja0xpc3QgIT09IFtdKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgVG9Eb3NDaGVja2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKFRvRG9zQ2hlY2tsaXN0LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgJ2NoZWNrbGlzdDonLCB0b0RvQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGwgPSAwOyBsIDwgYXJyYXlPZlRvZG9zW2pdLmNoZWNrTGlzdC5sZW5ndGg7IGwrKykgey8vYWRkIHRoZSBjaGVja2FibGUgYnV0dG9uIGhlcmUgbGF0ZXJcclxuICAgICAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZSgncCcsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBhcnJheU9mVG9kb3Nbal0uY2hlY2tMaXN0W2xdLnZhbHVlLCBUb0Rvc0NoZWNrbGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXR1c0NoZWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ2hlY2tlci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c0NoZWNrZXIuc2V0QXR0cmlidXRlKCdpZCcsIGAke2FycmF5T2ZUb2Rvc1tqXS5vcmRpbmFsfS0ke2x9YCkvL2lkIGlzIHRoZSBUb0RvT3JkaW5hbC1jaGVja2xpc3QgZWxlbWVudCBudW1iZXIsIGUuZy4gMC0wLCAwLTEsIDEtMCBldGMuXHJcbiAgICAgICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2Uoc3RhdHVzQ2hlY2tlciwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgVG9Eb3NDaGVja2xpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c0NoZWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmNoZWNrQ2hlY2tib3hTdGF0dXMoc3RhdHVzQ2hlY2tlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb0Rvcy50b0RvQXJyYXlbZS50YXJnZXQuaWRbMF1dLmNoZWNrTGlzdFtlLnRhcmdldC5pZFtlLnRhcmdldC5pZC5sZW5ndGggLSAxXV0uZG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuaWQgKyBcImNoZWNrZWRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9Eb3MudG9Eb0FycmF5W2UudGFyZ2V0LmlkWzBdXS5jaGVja0xpc3RbZS50YXJnZXQuaWRbZS50YXJnZXQuaWQubGVuZ3RoIC0gMV1dLmRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pZCArIFwibm90Y2hlY2tlZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coVG9Eb3MudG9Eb0FycmF5KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vaGF2ZSBpdCBkaXNwbGF5IHRoZSBub3RlcyBoZXJlXHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IG5vdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgbm90ZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25vdGUtY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKG5vdGVDb250YWluZXIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRvRG9Db250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGFkZE5vdGVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGlzcGxheWVkTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTsvL2NyZWF0ZSB0aGUgbm90ZSBlbGVtZW50IGFuZCBpbnNlcnQgaXQsIG5vIGlubmVyIHRleHQgeWV0XHJcbiAgICAgICAgICAgIGxldCBub3Rlc0lucHV0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGxldCBzYXZlTm90ZXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgbGV0IGRlbGV0ZU5vdGVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGxldCBlZGl0Tm90ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBub3RlRWRpdFN0YXRlKCkgey8vcmVtb3ZlIGFkZCBidXR0b24sIGFkZCBpbnB1dCBmaWVsZCAod2l0aCB0aGUgdmFsdWUgc2V0LCBpZiBhdmFpbGFibGUpLCBzYXZlIGFuZCByZW1vdmUgYnV0dG9uc1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdGUgZWRpdCBzdGF0ZSBydW5zJylcclxuICAgICAgICAgICAgICAgIGlmIChhZGROb3Rlc0J1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZE5vdGVzQnV0dG9uLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZWRpdE5vdGVCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICBlZGl0Tm90ZUJ1dHRvbi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKGRpc3BsYXllZE5vdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIG5vdGVDb250YWluZXIpXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlPZlRvZG9zW2pdLm5vdGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXNJbnB1dEFyZWEudmFsdWUgPSBhcnJheU9mVG9kb3Nbal0ubm90ZXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBub3Rlc0lucHV0QXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25vdGUtaW5wdXQtYXJlYScpXHJcbiAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShub3Rlc0lucHV0QXJlYSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgbm90ZUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShzYXZlTm90ZXNCdXR0b24sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAnc2F2ZScsIG5vdGVDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgc2F2ZU5vdGVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOb3RlU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShkZWxldGVOb3Rlc0J1dHRvbiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsICd4Jywgbm90ZUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVOb3Rlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlIG5vdGVzIGJ1dHRvbiBjbGlja2VkJylcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcnJheU9mVG9kb3Nbal0ubm90ZXMpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcnJheU9mVG9kb3Nbal0ubm90ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgbm9Ob3RlU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gbm90ZSBzdGF0ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvZG9zLm5vdGUhISEhISEhISEhISEhISEhISEnICsgYXJyYXlPZlRvZG9zW2pdLm5vdGVzKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3Rlc2lucHV0YXJlZWEudmFsdWUnICsgbm90ZXNJbnB1dEFyZWEudmFsdWUpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vdGVzSW5wdXRBcmVhLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNhdmVOb3Rlc0J1dHRvbi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBkZWxldGVOb3Rlc0J1dHRvbi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShhZGROb3Rlc0J1dHRvbiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsICdBZGQgbm90ZXMnLCBub3RlQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRpc3BsYXlOb3RlU3RhdGUoKSB7Ly9kaXNwbGF5IHRoZSBub3RlLCByZW1vdmUgaW5wdXQgYXJlYSwgcmVtb3ZlIHNhdmUgYnV0dG9uLCBhZGQgZWRpdCBidXR0b25cclxuICAgICAgICAgICAgICAgIC8vbWFrZSBpdCBzYXZlIHRoZSBub3RlcyBhcyBhIHByb3BlcnR5IG9mIHRoZSBUb0RvOlxyXG4gICAgICAgICAgICAgICAgLy9zYXZlIHRoZSB2YWx1ZSBvZiBub3Rlc0lucHV0QXJlYVxyXG4gICAgICAgICAgICAgICAgYXJyYXlPZlRvZG9zW2pdLm5vdGVzID0gbm90ZXNJbnB1dEFyZWEudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAvL2Rpc3BsYXkgdGhlIHZhbHVlIG9mIG5vdGVzLSBhZGQgZGlzcGxheWluZyBpdCBpdCBpcyBhbHJlYWR5IHNldCBhcyB3ZWxsIC0gYXMgYSBwYXJhZ3JhcGhcclxuICAgICAgICAgICAgICAgIGRpc3BsYXllZE5vdGUuaW5uZXJUZXh0ID0gbm90ZXNJbnB1dEFyZWEudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAvL3JlbW92ZSB0aGUgaW5wdXQgYXJlYVxyXG4gICAgICAgICAgICAgICAgLy9ub3Rlc0lucHV0QXJlYS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5yZW1vdmVFbGVtZW50cyhub3Rlc0lucHV0QXJlYSwgc2F2ZU5vdGVzQnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL25vdGVDb250YWluZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAvL3JlbW92ZSB0aGUgc2F2ZSBidXR0b24gYW5kIHN1YnN0aXR1dGUgaXQgd2l0aCBhbiBlZGl0IGJ1dHRvbiAocmVtZW1iZXIgdG8gcmVtb3ZlIHRoZSBlZGl0IGJ1dHRvbiBpZiB0aGUgbm90ZSBpcyByZW1vdmVkKVxyXG4gICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoZWRpdE5vdGVCdXR0b24sIHVuZGVmaW5lZCwgZGVsZXRlTm90ZXNCdXR0b24sICdFZGl0Jywgbm90ZUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICBlZGl0Tm90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZWRpdCBub3RlIGJ1dHRvbiBjbGlja2VyZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVFZGl0U3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvL2xlYXZlIHRoZSByZW1vdmUgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2F2ZSBub3RlcyBidXR0b24gY2xpY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJyYXlPZlRvZG9zKTtcclxuICAgICAgICAgICAgICAgIC8vbWFrZSBzdXJlIHRoZSBvbGQgbm90ZSBkaXNhcHBlYXJzIGFmdGVyIGVkaXRpbmdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBub05vdGVTdGF0ZSgpIHsvL2ZpbmlzaCB0aGlzLCByZW1vdmUgZXZlcnl0aGluZyBmcm9tIHRoZSBub3RlQ29udGFpbmVyLCBleGNlcHQgdGhlIEFkZCBub3RlIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgLy9ET01NYW5pcHVsYXRpb24ucmVtb3ZlRWxlbWVudHMoQXJyYXkuZnJvbShub3RlQ29udGFpbmVyLmNoaWxkcmVuKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gbm90ZSBzdGF0ZScpXHJcbiAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucmVtb3ZlQWxsQ2hpbGRyZW4obm90ZUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICBub3Rlc0lucHV0QXJlYS52YWx1ZSA9IFwiXCJcclxuICAgICAgICAgICAgICAgIGFycmF5T2ZUb2Rvc1tqXS5ub3RlcyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXllZE5vdGUuaW5uZXJUZXh0ID0gXCJcIlxyXG4gICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoYWRkTm90ZXNCdXR0b24sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAnQWRkIG5vdGVzJywgbm90ZUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKEFycmF5LmZyb20obm90ZUNvbnRhaW5lci5jaGlsZHJlbikpO1xyXG4gICAgICAgICAgICAgICAgLy9BcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NoZWNrbGlzdC1lbGVtZW50LWNvbnRhaW5lcicpKS5mb3JFYWNoKERPTU1hbmlwdWxhdGlvbi5yZW1vdmVFbGVtZW50cyk7XHJcbiAgICAgICAgICAgICAgICAvL0FycmF5LmZyb20obm90ZUNvbnRhaW5lci5jaGlsZHJlbikuZm9yRWFjaChET01NYW5pcHVsYXRpb24ucmVtb3ZlRWxlbWVudHMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWRkTm90ZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkaXNwbGF5ZWROb3RlKVxyXG4gICAgICAgICAgICAgICAgbm90ZUVkaXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgLy9hZGROb3Rlc0J1dHRvbi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZGQgbm90ZXMgYnV0dG9uIGNsaWNrZWQnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWYgKGFycmF5T2ZUb2Rvc1tqXS5ub3Rlcykgey8vbm90ZXMgYXQgc3RhcnRcclxuICAgICAgICAgICAgICAgIG5vdGVFZGl0U3RhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vTm90ZVN0YXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKCdwJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGBTdGF0dXM6ICR7YXJyYXlPZlRvZG9zW2pdLnRvRG9TdGF0dXN9YCwgdG9Eb0NvbnRhaW5lcilcclxuICAgICAgICAgICAgbGV0IGRlbGV0ZVRvRG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShkZWxldGVUb0RvQnV0dG9uLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgJ2RlbGV0ZScsIHRvRG9Db250YWluZXIpXHJcbiAgICAgICAgICAgIGRlbGV0ZVRvRG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlIHRvZG8gY2xpY2tlZCcpXHJcbiAgICAgICAgICAgICAgICBhcnJheU9mVG9kb3Muc3BsaWNlKGosIDEpO1xyXG4gICAgICAgICAgICAgICAgdG9Eb0NvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGRlYWxpbmdXaXRoTG9jYWxTdG9yYWdlLnVwZGF0ZUxvY2FsU3RvcmFnZSgndG9Eb0FycmF5JywgYXJyYXlPZlRvZG9zKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0byBkbyBhcnJheSBhZnRlciBkZWxldGluZyBlbGVtZW50JyArIEpTT04uc3RyaW5naWZ5KGFycmF5T2ZUb2RvcykpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2F0dGVudGlvbiwgdGhpcyBpcyBsb2NhbCBzdG9yYWdlJyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvQXJyYXknKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFycmF5T2ZUb2Rvc1tqXSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYXJyYXlPZlRvZG9zW2pdLmNoZWNrTGlzdClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdGVzJyArIGFycmF5T2ZUb2Rvc1tqXS5ub3RlcylcclxuXHJcbiAgICAgICAgICAgIHRvRG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndG8gZG8gY29udGFpbmVyIGNsaWNrZWQnKVxyXG4gICAgICAgICAgICAgICAgZGVhbGluZ1dpdGhMb2NhbFN0b3JhZ2UudXBkYXRlTG9jYWxTdG9yYWdlKCd0b0RvQXJyYXknLCBhcnJheU9mVG9kb3MpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvIGRvIGFycmF5IGFmdGVyIGNsaWNraW5nJyArIEpTT04uc3RyaW5naWZ5KGFycmF5T2ZUb2RvcykpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2F0dGVudGlvbiwgdGhpcyBpcyBsb2NhbCBzdG9yYWdlJyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvQXJyYXknKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGlzcGxheSxcclxuICAgICAgICByZW1vdmVBbGxEaXNwbGF5ZWRDb250ZW50XHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5jb25zdCBUb0RvcyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY3JlYXRlIHRvZG8gcnVucycpO1xyXG4gICAgbGV0IHRvRG9BcnJheSA9IFtdOy8vaWYgdGhlcmUgaXMgc29tZXRoaW5nIGluIGxvY2FsU3RvcmFnZSB0aGVzZSBnZXQgY2hhbmdlZFxyXG4gICAgbGV0IG9yZGluYWwgPSAwO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvQXJyYXknKSkge1xyXG4gICAgICAgIHRvRG9BcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9BcnJheScpKTtcclxuICAgICAgICBvcmRpbmFsID0gdG9Eb0FycmF5Lmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyB0b0RvIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCBjaGVja0xpc3QpIHtcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICAgICAgdGhpcy5vcmRpbmFsID0gb3JkaW5hbDtcclxuICAgICAgICAgICAgdGhpcy50b0RvU3RhdHVzID0gXCJvcGVuXCJcclxuICAgICAgICAgICAgb3JkaW5hbCsrO1xyXG4gICAgICAgICAgICBpZiAoZHVlRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2hlY2tMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTGlzdCA9IGNoZWNrTGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBmdW5jdGlvbiBwdXNoRWxlbWVudEludG9Ub0RvQXJyYXkoZWxlbWVudCl7XHJcbiAgICAvLyAgICAgVG9Eb3MudG9Eb0FycmF5LnB1c2goZWxlbWVudClcclxuICAgIC8vIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2tMaXN0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RPRE8gY3JlYXRpb24gc3RhcnQnKTtcclxuICAgICAgICBsZXQgbmV3VG9EbyA9IG5ldyB0b0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrTGlzdCk7XHJcbiAgICAgICAgVG9Eb3MudG9Eb0FycmF5LnB1c2gobmV3VG9Ebyk7XHJcbiAgICAgICAgZGVhbGluZ1dpdGhMb2NhbFN0b3JhZ2UudXBkYXRlTG9jYWxTdG9yYWdlKCd0b0RvQXJyYXknLCBUb0Rvcy50b0RvQXJyYXkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhdHRlbnRpb24sIHRoaXMgaXMgbG9jYWwgc3RvcmFnZScgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0FycmF5JykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY3JlYXRlVG9EbyxcclxuICAgICAgICB0b0RvQXJyYXksLy9yZXN0cmljdCBpdCBsYXRlciwgdG8gZXhwb3NlIG9ubHkgYSBnZXQgb2YgdGhlIGFycmF0IG9yIHBlcmhhcHMgcGFydGljdWxhciBwcm9wZXJ0aWVzIHRvIGJlIGNoYW5nZWQsIGUuZy4gY2hlY2tsaXN0IHN0YXR1cyBvciBwcmlvcml0eVxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuLy8gVG9Eb3MuY3JlYXRlVG9EbygnRmluaXNoIHRoZSBUb0RvIGxpc3QgYXBwJywgJ0RvIGFsbCB0aGUgdGhpbmdzIHNwZWNpZmllZCcsIHVuZGVmaW5lZCwgJ0hpZ2gnLCBbXHJcbi8vICAgICB7IHZhbHVlOiAnbWFrZSBjaGVja2xpc3QgY2xpY2thYmxlJywgZG9uZTogZmFsc2UgfSxcclxuLy8gICAgIHsgdmFsdWU6ICdpbXByb3ZlIHN0eWxlJywgZG9uZTogZmFsc2UgfSxcclxuLy8gICAgIHsgdmFsdWU6ICdhZGQgc2VwYXJhdGUgcHJvamVjdHMnLCBkb25lOiBmYWxzZSB9XSlcclxuLy8gRGlzcGxheWluZ1RvRG9zLmRpc3BsYXkoVG9Eb3MudG9Eb0FycmF5KVxyXG5cclxuXHJcbmNvbnN0IGRlYWxpbmdXaXRoTG9jYWxTdG9yYWdlID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2Uoa2V5TmFtZSwgdmFsdWUpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXlOYW1lLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gZnVuY3Rpb24gZ2V0RWxlbWVudEZyb21Mb2NhbFN0b3JhZ2Uoa2V5TmFtZSkge1xyXG4gICAgLy8gICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXlOYW1lKSkgey8vaWYgc29tZXRoaW5nIGhhcyBiZWVuIHNldCBpbiB0aGUgbG9jYWwgc3RvcmFnZSwgdGhlbiByZXRyaWV2ZVxyXG4gICAgLy8gICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtrZXlOYW1lfWApKS8vb3IganVzdCBrZXlOYW1lP1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UsXHJcbiAgICAgICAgLy8gZ2V0RWxlbWVudEZyb21Mb2NhbFN0b3JhZ2VcclxuICAgIH1cclxufSkoKTtcclxuY29uc29sZS5sb2coJ2F0dGVudGlvbiwgdGhpcyBpcyBsb2NhbCBzdG9yYWdlJyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvQXJyYXknKSk7XHJcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0FycmF5JykpIHsvL2lmIHNvbWV0aGluZyBoYXMgYmVlbiBzZXQgaW4gdGhlIGxvY2FsIHN0b3JhZ2UsIHRoZW4gcmV0cmlldmVcclxuICAgIFRvRG9zLnRvRG9BcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9BcnJheScpKVxyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoVG9Eb3MudG9Eb0FycmF5KSlcclxuICAgIERpc3BsYXlpbmdUb0Rvcy5kaXNwbGF5KEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9BcnJheScpKSlcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=