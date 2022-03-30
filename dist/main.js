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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#form-container {\r\n    padding-left: 10px;\r\n    padding-right: 5px;\r\n    height: 100%;\r\n    background: #2c9fd1;\r\n    color: white;\r\n    font-size: 0.9em;\r\n}\r\n\r\n#input-container {\r\n    top: 0px;\r\n    position: sticky;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    display: grid;\r\n    grid-template-columns: 1fr 7fr;\r\n    column-gap: 0px;\r\n    height: 100vh;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,QAAQ;IACR,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,aAAa;IACb,8BAA8B;IAC9B,eAAe;IACf,aAAa;AACjB","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#form-container {\r\n    padding-left: 10px;\r\n    padding-right: 5px;\r\n    height: 100%;\r\n    background: #2c9fd1;\r\n    color: white;\r\n    font-size: 0.9em;\r\n}\r\n\r\n#input-container {\r\n    top: 0px;\r\n    position: sticky;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    display: grid;\r\n    grid-template-columns: 1fr 7fr;\r\n    column-gap: 0px;\r\n    height: 100vh;\r\n}\r\n"],"sourceRoot":""}]);
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
- have added the 'status' property-done

- save the list of todos to local storage and retrieve it as necessary - BUG: when adding new todos they do not update on the screen,
only after refreshing they get retrieved from local storage - the counter based on the todoarray length ends before reaching them

- make sure the list of todos is updated in local storage whenever they are edited

- switch from writing things to do here, to having them in the app itself :P

- set how checklist button works when all the checklist input fields are deleted



-add restrictions to form input to ensure aesthetic compatibility

- style everything to look nice and neat and clean and super cool

- make them draggable to switch places?

- sort them by different criteria

- divide them into projects
*/



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


        removeAllDisplayedContent()        //refresh when displaying
        
        console.log('display todo starts');
        for (let j = 0; j < arrayOfTodos.length; j++) {
            console.log('the length of array of todos is '+arrayOfTodos.length)
            let toDoContainer = document.createElement('div');
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
            console.log(arrayOfTodos[j])
            console.log(arrayOfTodos[j].checkList)
            console.log('notes' + arrayOfTodos[j].notes)
        }
    }

    return {
        display,
        removeAllDisplayedContent
    }
})();

const ToDos = (function () {
    console.log('create todo runs')
    let toDoArray = [];//if there is something in localStorage these get changed
    let ordinal = 0;
    if (localStorage.getItem('toDoArray')) {
        toDoArray = JSON.parse(localStorage.getItem('toDoArray'))
        ordinal = toDoArray.length-1
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
        console.log('TODO creation start')
        let newToDo = new toDo(title, description, dueDate, priority, checkList)
        toDoArray.push(newToDo)
        console.log('to do array after pushing the new to do is'+JSON.stringify(toDoArray))
        dealingWithLocalStorage.updateLocalStorage('toDoArray', toDoArray)
        console.log('attention, this is local storage'+localStorage.getItem('toDoArray'))
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
if (localStorage.getItem('toDoArray')) {//if something has been set in the local storage, then retrieve
    ToDos.toDoArray = JSON.parse(localStorage.getItem('toDoArray'))
    console.log(JSON.stringify(ToDos.toDoArray))
    DisplayingToDos.display(JSON.parse(localStorage.getItem('toDoArray')))
}
console.log('attention, this is local storage'+localStorage.getItem('toDoArray'))
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2Isd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1GQUFtRiwyQkFBMkI7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLFNBQVMsZ0RBQWdEO0FBQ3pELFNBQVMscUNBQXFDO0FBQzlDLFNBQVMsNkNBQTZDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DLHlEQUF5RCxRQUFRO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbiNmb3JtLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMyYzlmZDE7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXHJcXG59XFxyXFxuXFxyXFxuI2lucHV0LWNvbnRhaW5lciB7XFxyXFxuICAgIHRvcDogMHB4O1xcclxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA3ZnI7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFFBQVE7SUFDUixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9ybS1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMmM5ZmQxO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxyXFxufVxcclxcblxcclxcbiNpbnB1dC1jb250YWluZXIge1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgN2ZyO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qXHJcbi8vLy8vL0RPIFRISVMgTk9XOlxyXG4tIGhhdmUgYWRkZWQgdGhlICdzdGF0dXMnIHByb3BlcnR5LWRvbmVcclxuXHJcbi0gc2F2ZSB0aGUgbGlzdCBvZiB0b2RvcyB0byBsb2NhbCBzdG9yYWdlIGFuZCByZXRyaWV2ZSBpdCBhcyBuZWNlc3NhcnkgLSBCVUc6IHdoZW4gYWRkaW5nIG5ldyB0b2RvcyB0aGV5IGRvIG5vdCB1cGRhdGUgb24gdGhlIHNjcmVlbixcclxub25seSBhZnRlciByZWZyZXNoaW5nIHRoZXkgZ2V0IHJldHJpZXZlZCBmcm9tIGxvY2FsIHN0b3JhZ2UgLSB0aGUgY291bnRlciBiYXNlZCBvbiB0aGUgdG9kb2FycmF5IGxlbmd0aCBlbmRzIGJlZm9yZSByZWFjaGluZyB0aGVtXHJcblxyXG4tIG1ha2Ugc3VyZSB0aGUgbGlzdCBvZiB0b2RvcyBpcyB1cGRhdGVkIGluIGxvY2FsIHN0b3JhZ2Ugd2hlbmV2ZXIgdGhleSBhcmUgZWRpdGVkXHJcblxyXG4tIHN3aXRjaCBmcm9tIHdyaXRpbmcgdGhpbmdzIHRvIGRvIGhlcmUsIHRvIGhhdmluZyB0aGVtIGluIHRoZSBhcHAgaXRzZWxmIDpQXHJcblxyXG4tIHNldCBob3cgY2hlY2tsaXN0IGJ1dHRvbiB3b3JrcyB3aGVuIGFsbCB0aGUgY2hlY2tsaXN0IGlucHV0IGZpZWxkcyBhcmUgZGVsZXRlZFxyXG5cclxuXHJcblxyXG4tYWRkIHJlc3RyaWN0aW9ucyB0byBmb3JtIGlucHV0IHRvIGVuc3VyZSBhZXN0aGV0aWMgY29tcGF0aWJpbGl0eVxyXG5cclxuLSBzdHlsZSBldmVyeXRoaW5nIHRvIGxvb2sgbmljZSBhbmQgbmVhdCBhbmQgY2xlYW4gYW5kIHN1cGVyIGNvb2xcclxuXHJcbi0gbWFrZSB0aGVtIGRyYWdnYWJsZSB0byBzd2l0Y2ggcGxhY2VzP1xyXG5cclxuLSBzb3J0IHRoZW0gYnkgZGlmZmVyZW50IGNyaXRlcmlhXHJcblxyXG4tIGRpdmlkZSB0aGVtIGludG8gcHJvamVjdHNcclxuKi9cclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgRE9NTWFuaXB1bGF0aW9uID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIHB1dEVsZW1lbnRPblBhZ2UoZWxlbWVudCwgZGVzY3JpcHRpb24sIGluc2VydEJlZm9yZVdoYXQsIGlubmVyVGV4dCwgcGFyZW50KSB7Ly9wZXJoYXBzIG1ha2UgYSBkaWZmZXJlbnQgdHlwZSBmb3IgaW5wdXRzIGFuZCBub24taW5wdXRzXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlbGVtZW50IHB1dHRlZCBvbiBwYWdlIGlzXCIsIGVsZW1lbnQpXHJcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykgey8vaWYgZWxlbWVudCBpcyBub3Qgb2JqZWN0LCBtZWFuaW5nIGFuIGFscmVhZHkgY3JlYXRlZCBlbGVtZW50XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5uZXJUZXh0KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gaW5uZXJUZXh0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uKSB7Ly9kZXNjcmlwdGlvbiBpcyBmb3IgbGFiZWxsZWQgZm9ybSBlbGVtZW50c1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgZWxlbWVudExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICBlbGVtZW50TGFiZWwuaW5uZXJUZXh0ID0gYCR7ZGVzY3JpcHRpb259YDtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb24pXHJcbiAgICAgICAgICAgIGlmIChpbnNlcnRCZWZvcmVXaGF0KSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGVsZW1lbnRMYWJlbCwgaW5zZXJ0QmVmb3JlV2hhdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudExhYmVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5zZXJ0QmVmb3JlV2hhdCkge1xyXG4gICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIGluc2VydEJlZm9yZVdoYXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVFbGVtZW50cyguLi5lbGVtZW50cykgey8vZWxlbWVudHMgaGF2ZSB0byBiZSBET01zLCBub3QgdmFyaWFibGVzXHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSBlbGVtZW50cy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBjb3VudGVyOyBrKyspIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRzW2tdKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50c1trXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkcmVuKGVsZW1lbnQpIHtcclxuICAgICAgICBsZXQgY291bnRlciA9IGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IG0gPSAwOyBtIDw9IGNvdW50ZXI7IG0rKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaXRlcmF0aW9uJyArIG0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbSBpcyAnICsgbSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC5jaGlsZHJlbik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQuY2hpbGRyZW5bMF0pO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jaGlsZHJlblswXSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlblswXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHB1dEVsZW1lbnRPblBhZ2UsXHJcbiAgICAgICAgcmVtb3ZlRWxlbWVudHMsXHJcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGRyZW5cclxuICAgIH1cclxufSkoKTtcclxuY29uc3QgZm9ybSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWJ1dHRvbicpO1xyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNvbnRhaW5lcicpXHJcblxyXG4gICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbGV0IGRlYWRMaW5lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcclxuICAgIGxldCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG5cclxuICAgIGxldCBjaGVja0xpc3RFbGVtZW50Q291bnRlciA9IDA7XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tDaGVja2JveFN0YXR1cyhjaGVja0JveEVsZW1lbnQsIGlmQ2hlY2tlZCwgaWZVbmNoZWNrZWQpIHsvL21ha2Ugc3VyZSB0aGUgcGFyYW1ldGVycyBhcmUgZnVuY3Rpb25zXHJcbiAgICAgICAgaWYgKGNoZWNrQm94RWxlbWVudC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGlmQ2hlY2tlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWZVbmNoZWNrZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FkZGJ1dHRvbiBjbGlja2VkJyk7XHJcblxyXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtY29udGFpbmVyJykgPT09IG51bGwpIHsvL2lmIGZvcm0gaGFzIG5vdCBiZWVuIGNyZWF0ZWQgYWxyZWFkeVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGhlcmUgYXJlIG5vIGZvcm1zJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgaW5wdXRDb250YWluZXIuaWQgPSAnaW5wdXQtY29udGFpbmVyJztcclxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGxldCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0LWJ1dHRvbicpXHJcblxyXG4gICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZSh0aXRsZUlucHV0LCAnVGl0bGUnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgaW5wdXRDb250YWluZXIpO1xyXG4gICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShkZXNjcmlwdGlvbklucHV0LCAnRGVzY3JpcHRpb24nLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgaW5wdXRDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoZGVhZExpbmVJbnB1dCwgJ0RlYWRsaW5lJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGlucHV0Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgZGVhZExpbmVJbnB1dC50eXBlID0gJ2NoZWNrYm94JztcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZER1ZURhdGVJbnB1dE9uUGFnZSgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRkIGR1ZSBkYXRlIG9uIHBhZ2UgcnVuc1wiKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkdWUgZGF0ZSBpbnB1dCBpc1wiLCBkdWVEYXRlSW5wdXQpXHJcbiAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShkdWVEYXRlSW5wdXQsICdEdWUtZGF0ZScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1DaGVja2xpc3RdJyksIHVuZGVmaW5lZCwgaW5wdXRDb250YWluZXIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkZWFkTGluZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tDaGVja2JveFN0YXR1cyhkZWFkTGluZUlucHV0LCBhZGREdWVEYXRlSW5wdXRPblBhZ2UsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucmVtb3ZlRWxlbWVudHMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJEdWUtZGF0ZVwiKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPUR1ZS1kYXRlXScpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgbGV0IGNoZWNrTGlzdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgY2hlY2tMaXN0SW5wdXQudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKGNoZWNrTGlzdElucHV0LCAnQ2hlY2tsaXN0JywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGlucHV0Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy9jaGVja2xpc3Qgc3R1ZmZcclxuICAgICAgICAgICAgY2hlY2tMaXN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7Ly9jaGVjayBzdGF0dXMsIGFkZCBhbiBpbnB1dCBwYWdlIG9yIHJlbW92ZVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjaGVja0NoZWNrYm94U3RhdHVzKGNoZWNrTGlzdElucHV0LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlTmV4dEl0ZW0oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGVja0xpc3RFbGVtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50TnVtYmVyID0gY2hlY2tMaXN0RWxlbWVudENvdW50ZXI7Ly9wZXJoYXBzIHNoaWZ0IG51bWJlcmluZyB0byB0aGUgY2hlY2tsaXN0RWxlbWVudCBpdHNlbGZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tMaXN0RWxlbWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgZWxlbWVudE51bWJlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrTGlzdEVsZW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaGVja2xpc3QtZWxlbWVudC1jb250YWluZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tMaXN0RWxlbWVudENvdW50ZXIrKztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrTGlzdEVsZW1lbnRDb250YWluZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsYWJlbFtmb3I9UHJpb3JpdHldJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tMaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrTGlzdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaGVja2xpc3QtZWxlbWVudCcpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShjaGVja0xpc3RFbGVtZW50LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjaGVja0xpc3RFbGVtZW50Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZGROZXh0RWxlbWVudEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShhZGROZXh0RWxlbWVudEJ1dHRvbiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiK1wiLCBjaGVja0xpc3RFbGVtZW50Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkTmV4dEVsZW1lbnRCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGQtbmV4dC1lbGVtZW50LWJ1dHRvbicpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGROZXh0RWxlbWVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5yZW1vdmVFbGVtZW50cyhkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhZGQtbmV4dC1lbGVtZW50LWJ1dHRvbicpWzBdKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5leHRJdGVtKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZW1vdmVTcGVjaWZpY0VsZW1lbnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UocmVtb3ZlU3BlY2lmaWNFbGVtZW50QnV0dG9uLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJyZW1vdmVcIiwgY2hlY2tMaXN0RWxlbWVudENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVNwZWNpZmljRWxlbWVudEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JlbW92ZS1zcGVjaWZpYy1lbGVtZW50LWJ1dHRvbicpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVTcGVjaWZpY0VsZW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucmVtb3ZlRWxlbWVudHMocmVtb3ZlU3BlY2lmaWNFbGVtZW50QnV0dG9uLnBhcmVudEVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5leHRJdGVtKCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaGVja2xpc3QtZWxlbWVudC1jb250YWluZXInKSkuZm9yRWFjaChET01NYW5pcHVsYXRpb24ucmVtb3ZlRWxlbWVudHMpOy8vcmVtb3ZlIGFsbCBjaGVja2xpc3QgZWxlbWVudHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGUgYWJvdmUgdGhyb3dzIGFuIGVycm9yIChVbmNhdWdodCBUeXBlRXJyb3I6IGVsZW1lbnRzW2tdLnJlbW92ZSBpcyBub3QgYSBmdW5jdGlvbikgYnV0IHdvcmtzLCBJIHdvbmRlciB3aHlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vY2hlY2tsaXN0XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKHByaW9yaXR5U2VsZWN0LCAnUHJpb3JpdHknLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgaW5wdXRDb250YWluZXIpO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVTZWxlY3RPcHRpb24odGV4dCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IHRleHQ7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjcmVhdGVTZWxlY3RPcHRpb24oJ05vbmUnKTtcclxuICAgICAgICAgICAgY3JlYXRlU2VsZWN0T3B0aW9uKCdMb3cnKTtcclxuICAgICAgICAgICAgY3JlYXRlU2VsZWN0T3B0aW9uKCdNZWRpdW0nKTtcclxuICAgICAgICAgICAgY3JlYXRlU2VsZWN0T3B0aW9uKCdIaWdoJyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcclxuICAgICAgICAgICAgc3VibWl0QnV0dG9uLmlubmVyVGV4dCA9ICdTdWJtaXQnXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tMaXN0VmFsdWVzQXJyYXkgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NoZWNrbGlzdC1lbGVtZW50JykpLm1hcCgoZWwpID0+IHsgcmV0dXJuIHsgdmFsdWU6IGVsLnZhbHVlLCBkb25lOiBmYWxzZSB9IH0pXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrbGlzdHZhbHVlc1wiKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2hlY2tMaXN0VmFsdWVzQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgVG9Eb3MuY3JlYXRlVG9Ebyh0aXRsZUlucHV0LnZhbHVlLCBkZXNjcmlwdGlvbklucHV0LnZhbHVlLCBwcmlvcml0eVNlbGVjdC52YWx1ZSwgZHVlRGF0ZUlucHV0LnZhbHVlLCBjaGVja0xpc3RWYWx1ZXNBcnJheSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKS5sZW5ndGg7IGkrKykgey8vY2xlYXIgdGhlIGZvcm0gdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVtpXS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlTZWxlY3QudmFsdWUgPSBcIk5vbmVcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRlYWRMaW5lSW5wdXQuY2hlY2tlZCA9IGZhbHNlOy8vdW5jaGVjayB0aGUgZGVhZGxpbmUgY2hlY2tib3hcclxuICAgICAgICAgICAgICAgIGNoZWNrQ2hlY2tib3hTdGF0dXMoZGVhZExpbmVJbnB1dCwgYWRkRHVlRGF0ZUlucHV0T25QYWdlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnJlbW92ZUVsZW1lbnRzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRHVlLWRhdGVcIiksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1EdWUtZGF0ZV0nKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIERpc3BsYXlpbmdUb0Rvcy5yZW1vdmVBbGxEaXNwbGF5ZWRDb250ZW50KCk7Ly9yZW1vdmUgYW5kIGRpc3BsYXkgYWdhaW5cclxuICAgICAgICAgICAgICAgIERpc3BsYXlpbmdUb0Rvcy5kaXNwbGF5KFRvRG9zLnRvRG9BcnJheSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjaGVja0NoZWNrYm94U3RhdHVzLFxyXG4gICAgfVxyXG5cclxufSkoKTtcclxuXHJcbmNvbnN0IERpc3BsYXlpbmdUb0RvcyA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgbGV0IGNvbnRlbnREaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQtZGlzcGxheScpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbERpc3BsYXllZENvbnRlbnQoKSB7XHJcbiAgICAgICAgbGV0IGNoaWxkID0gY29udGVudERpc3BsYXkubGFzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICB3aGlsZSAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY29udGVudERpc3BsYXkucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgICAgICBjaGlsZCA9IGNvbnRlbnREaXNwbGF5Lmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXkoYXJyYXlPZlRvZG9zKSB7XHJcblxyXG5cclxuICAgICAgICByZW1vdmVBbGxEaXNwbGF5ZWRDb250ZW50KCkgICAgICAgIC8vcmVmcmVzaCB3aGVuIGRpc3BsYXlpbmdcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZygnZGlzcGxheSB0b2RvIHN0YXJ0cycpO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyYXlPZlRvZG9zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGUgbGVuZ3RoIG9mIGFycmF5IG9mIHRvZG9zIGlzICcrYXJyYXlPZlRvZG9zLmxlbmd0aClcclxuICAgICAgICAgICAgbGV0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY29udGVudERpc3BsYXkuYXBwZW5kQ2hpbGQodG9Eb0NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKCdwJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGBUaXRsZTogJHthcnJheU9mVG9kb3Nbal0udGl0bGV9YCwgdG9Eb0NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGlmIChhcnJheU9mVG9kb3Nbal0uZGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKCdwJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGBEZXNjcmlwdGlvbjogJHthcnJheU9mVG9kb3Nbal0uZGVzY3JpcHRpb259YCwgdG9Eb0NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFycmF5T2ZUb2Rvc1tqXS5kdWVEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZSgncCcsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBgRHVlIGRhdGU6ICR7YXJyYXlPZlRvZG9zW2pdLmR1ZURhdGV9YCwgdG9Eb0NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFycmF5T2ZUb2Rvc1tqXS5wcmlvcml0eSAhPT0gJ05vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZSgncCcsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBgUHJpb3JpdHk6ICR7YXJyYXlPZlRvZG9zW2pdLnByaW9yaXR5fWAsIHRvRG9Db250YWluZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhcnJheU9mVG9kb3Nbal0uY2hlY2tMaXN0ICE9PSBbXSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IFRvRG9zQ2hlY2tsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShUb0Rvc0NoZWNrbGlzdCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsICdjaGVja2xpc3Q6JywgdG9Eb0NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBsID0gMDsgbCA8IGFycmF5T2ZUb2Rvc1tqXS5jaGVja0xpc3QubGVuZ3RoOyBsKyspIHsvL2FkZCB0aGUgY2hlY2thYmxlIGJ1dHRvbiBoZXJlIGxhdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoJ3AnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgYXJyYXlPZlRvZG9zW2pdLmNoZWNrTGlzdFtsXS52YWx1ZSwgVG9Eb3NDaGVja2xpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGF0dXNDaGVja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c0NoZWNrZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNDaGVja2VyLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHthcnJheU9mVG9kb3Nbal0ub3JkaW5hbH0tJHtsfWApLy9pZCBpcyB0aGUgVG9Eb09yZGluYWwtY2hlY2tsaXN0IGVsZW1lbnQgbnVtYmVyLCBlLmcuIDAtMCwgMC0xLCAxLTAgZXRjLlxyXG4gICAgICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKHN0YXR1c0NoZWNrZXIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFRvRG9zQ2hlY2tsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNDaGVja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5jaGVja0NoZWNrYm94U3RhdHVzKHN0YXR1c0NoZWNrZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9Eb3MudG9Eb0FycmF5W2UudGFyZ2V0LmlkWzBdXS5jaGVja0xpc3RbZS50YXJnZXQuaWRbZS50YXJnZXQuaWQubGVuZ3RoIC0gMV1dLmRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkICsgXCJjaGVja2VkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvRG9zLnRvRG9BcnJheVtlLnRhcmdldC5pZFswXV0uY2hlY2tMaXN0W2UudGFyZ2V0LmlkW2UudGFyZ2V0LmlkLmxlbmd0aCAtIDFdXS5kb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuaWQgKyBcIm5vdGNoZWNrZWRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFRvRG9zLnRvRG9BcnJheSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2hhdmUgaXQgZGlzcGxheSB0aGUgbm90ZXMgaGVyZVxyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBub3RlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIG5vdGVDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdub3RlLWNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShub3RlQ29udGFpbmVyLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0b0RvQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBhZGROb3Rlc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRpc3BsYXllZE5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7Ly9jcmVhdGUgdGhlIG5vdGUgZWxlbWVudCBhbmQgaW5zZXJ0IGl0LCBubyBpbm5lciB0ZXh0IHlldFxyXG4gICAgICAgICAgICBsZXQgbm90ZXNJbnB1dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBsZXQgc2F2ZU5vdGVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGxldCBkZWxldGVOb3Rlc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBsZXQgZWRpdE5vdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gbm90ZUVkaXRTdGF0ZSgpIHsvL3JlbW92ZSBhZGQgYnV0dG9uLCBhZGQgaW5wdXQgZmllbGQgKHdpdGggdGhlIHZhbHVlIHNldCwgaWYgYXZhaWxhYmxlKSwgc2F2ZSBhbmQgcmVtb3ZlIGJ1dHRvbnNcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3RlIGVkaXQgc3RhdGUgcnVucycpXHJcbiAgICAgICAgICAgICAgICBpZiAoYWRkTm90ZXNCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGROb3Rlc0J1dHRvbi5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGVkaXROb3RlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdE5vdGVCdXR0b24ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZShkaXNwbGF5ZWROb3RlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBub3RlQ29udGFpbmVyKVxyXG4gICAgICAgICAgICAgICAgaWYgKGFycmF5T2ZUb2Rvc1tqXS5ub3Rlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVzSW5wdXRBcmVhLnZhbHVlID0gYXJyYXlPZlRvZG9zW2pdLm5vdGVzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbm90ZXNJbnB1dEFyZWEuc2V0QXR0cmlidXRlKCdpZCcsICdub3RlLWlucHV0LWFyZWEnKVxyXG4gICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2Uobm90ZXNJbnB1dEFyZWEsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIG5vdGVDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2Uoc2F2ZU5vdGVzQnV0dG9uLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgJ3NhdmUnLCBub3RlQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIHNhdmVOb3Rlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Tm90ZVN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoZGVsZXRlTm90ZXNCdXR0b24sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAneCcsIG5vdGVDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlTm90ZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZSBub3RlcyBidXR0b24gY2xpY2tlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJyYXlPZlRvZG9zW2pdLm5vdGVzKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJyYXlPZlRvZG9zW2pdLm5vdGVzKVxyXG4gICAgICAgICAgICAgICAgICAgIG5vTm90ZVN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIG5vdGUgc3RhdGUnKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2Rvcy5ub3RlISEhISEhISEhISEhISEhISEhJyArIGFycmF5T2ZUb2Rvc1tqXS5ub3RlcylcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm90ZXNpbnB1dGFyZWVhLnZhbHVlJyArIG5vdGVzSW5wdXRBcmVhLnZhbHVlKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBub3Rlc0lucHV0QXJlYS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzYXZlTm90ZXNCdXR0b24ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVsZXRlTm90ZXNCdXR0b24ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRE9NTWFuaXB1bGF0aW9uLnB1dEVsZW1lbnRPblBhZ2UoYWRkTm90ZXNCdXR0b24sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAnQWRkIG5vdGVzJywgbm90ZUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBkaXNwbGF5Tm90ZVN0YXRlKCkgey8vZGlzcGxheSB0aGUgbm90ZSwgcmVtb3ZlIGlucHV0IGFyZWEsIHJlbW92ZSBzYXZlIGJ1dHRvbiwgYWRkIGVkaXQgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAvL21ha2UgaXQgc2F2ZSB0aGUgbm90ZXMgYXMgYSBwcm9wZXJ0eSBvZiB0aGUgVG9EbzpcclxuICAgICAgICAgICAgICAgIC8vc2F2ZSB0aGUgdmFsdWUgb2Ygbm90ZXNJbnB1dEFyZWFcclxuICAgICAgICAgICAgICAgIGFycmF5T2ZUb2Rvc1tqXS5ub3RlcyA9IG5vdGVzSW5wdXRBcmVhLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgLy9kaXNwbGF5IHRoZSB2YWx1ZSBvZiBub3Rlcy0gYWRkIGRpc3BsYXlpbmcgaXQgaXQgaXMgYWxyZWFkeSBzZXQgYXMgd2VsbCAtIGFzIGEgcGFyYWdyYXBoXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5ZWROb3RlLmlubmVyVGV4dCA9IG5vdGVzSW5wdXRBcmVhLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgLy9yZW1vdmUgdGhlIGlucHV0IGFyZWFcclxuICAgICAgICAgICAgICAgIC8vbm90ZXNJbnB1dEFyZWEucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucmVtb3ZlRWxlbWVudHMobm90ZXNJbnB1dEFyZWEsIHNhdmVOb3Rlc0J1dHRvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9ub3RlQ29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgLy9yZW1vdmUgdGhlIHNhdmUgYnV0dG9uIGFuZCBzdWJzdGl0dXRlIGl0IHdpdGggYW4gZWRpdCBidXR0b24gKHJlbWVtYmVyIHRvIHJlbW92ZSB0aGUgZWRpdCBidXR0b24gaWYgdGhlIG5vdGUgaXMgcmVtb3ZlZClcclxuICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKGVkaXROb3RlQnV0dG9uLCB1bmRlZmluZWQsIGRlbGV0ZU5vdGVzQnV0dG9uLCAnRWRpdCcsIG5vdGVDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgZWRpdE5vdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2VkaXQgbm90ZSBidXR0b24gY2xpY2tlcmQnKTtcclxuICAgICAgICAgICAgICAgICAgICBub3RlRWRpdFN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy9sZWF2ZSB0aGUgcmVtb3ZlIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NhdmUgbm90ZXMgYnV0dG9uIGNsaWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFycmF5T2ZUb2Rvcyk7XHJcbiAgICAgICAgICAgICAgICAvL21ha2Ugc3VyZSB0aGUgb2xkIG5vdGUgZGlzYXBwZWFycyBhZnRlciBlZGl0aW5nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gbm9Ob3RlU3RhdGUoKSB7Ly9maW5pc2ggdGhpcywgcmVtb3ZlIGV2ZXJ5dGhpbmcgZnJvbSB0aGUgbm90ZUNvbnRhaW5lciwgZXhjZXB0IHRoZSBBZGQgbm90ZSBidXR0b25cclxuICAgICAgICAgICAgICAgIC8vRE9NTWFuaXB1bGF0aW9uLnJlbW92ZUVsZW1lbnRzKEFycmF5LmZyb20obm90ZUNvbnRhaW5lci5jaGlsZHJlbikpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIG5vdGUgc3RhdGUnKVxyXG4gICAgICAgICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnJlbW92ZUFsbENoaWxkcmVuKG5vdGVDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgbm90ZXNJbnB1dEFyZWEudmFsdWUgPSBcIlwiXHJcbiAgICAgICAgICAgICAgICBhcnJheU9mVG9kb3Nbal0ubm90ZXMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5ZWROb3RlLmlubmVyVGV4dCA9IFwiXCJcclxuICAgICAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5wdXRFbGVtZW50T25QYWdlKGFkZE5vdGVzQnV0dG9uLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgJ0FkZCBub3RlcycsIG5vdGVDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhBcnJheS5mcm9tKG5vdGVDb250YWluZXIuY2hpbGRyZW4pKTtcclxuICAgICAgICAgICAgICAgIC8vQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaGVja2xpc3QtZWxlbWVudC1jb250YWluZXInKSkuZm9yRWFjaChET01NYW5pcHVsYXRpb24ucmVtb3ZlRWxlbWVudHMpO1xyXG4gICAgICAgICAgICAgICAgLy9BcnJheS5mcm9tKG5vdGVDb250YWluZXIuY2hpbGRyZW4pLmZvckVhY2goRE9NTWFuaXB1bGF0aW9uLnJlbW92ZUVsZW1lbnRzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFkZE5vdGVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGlzcGxheWVkTm90ZSlcclxuICAgICAgICAgICAgICAgIG5vdGVFZGl0U3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIC8vYWRkTm90ZXNCdXR0b24ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWRkIG5vdGVzIGJ1dHRvbiBjbGlja2VkJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmIChhcnJheU9mVG9kb3Nbal0ubm90ZXMpIHsvL25vdGVzIGF0IHN0YXJ0XHJcbiAgICAgICAgICAgICAgICBub3RlRWRpdFN0YXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub05vdGVTdGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBET01NYW5pcHVsYXRpb24ucHV0RWxlbWVudE9uUGFnZSgncCcsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBgU3RhdHVzOiAke2FycmF5T2ZUb2Rvc1tqXS50b0RvU3RhdHVzfWAsIHRvRG9Db250YWluZXIpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFycmF5T2ZUb2Rvc1tqXSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYXJyYXlPZlRvZG9zW2pdLmNoZWNrTGlzdClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdGVzJyArIGFycmF5T2ZUb2Rvc1tqXS5ub3RlcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkaXNwbGF5LFxyXG4gICAgICAgIHJlbW92ZUFsbERpc3BsYXllZENvbnRlbnRcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmNvbnN0IFRvRG9zID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjcmVhdGUgdG9kbyBydW5zJylcclxuICAgIGxldCB0b0RvQXJyYXkgPSBbXTsvL2lmIHRoZXJlIGlzIHNvbWV0aGluZyBpbiBsb2NhbFN0b3JhZ2UgdGhlc2UgZ2V0IGNoYW5nZWRcclxuICAgIGxldCBvcmRpbmFsID0gMDtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0FycmF5JykpIHtcclxuICAgICAgICB0b0RvQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvQXJyYXknKSlcclxuICAgICAgICBvcmRpbmFsID0gdG9Eb0FycmF5Lmxlbmd0aC0xXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNsYXNzIHRvRG8ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUsIGNoZWNrTGlzdCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgICAgICB0aGlzLm9yZGluYWwgPSBvcmRpbmFsO1xyXG4gICAgICAgICAgICB0aGlzLnRvRG9TdGF0dXMgPSBcIm9wZW5cIlxyXG4gICAgICAgICAgICBvcmRpbmFsKys7XHJcbiAgICAgICAgICAgIGlmIChkdWVEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjaGVja0xpc3QpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tMaXN0ID0gY2hlY2tMaXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVja0xpc3QpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVE9ETyBjcmVhdGlvbiBzdGFydCcpXHJcbiAgICAgICAgbGV0IG5ld1RvRG8gPSBuZXcgdG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVja0xpc3QpXHJcbiAgICAgICAgdG9Eb0FycmF5LnB1c2gobmV3VG9EbylcclxuICAgICAgICBjb25zb2xlLmxvZygndG8gZG8gYXJyYXkgYWZ0ZXIgcHVzaGluZyB0aGUgbmV3IHRvIGRvIGlzJytKU09OLnN0cmluZ2lmeSh0b0RvQXJyYXkpKVxyXG4gICAgICAgIGRlYWxpbmdXaXRoTG9jYWxTdG9yYWdlLnVwZGF0ZUxvY2FsU3RvcmFnZSgndG9Eb0FycmF5JywgdG9Eb0FycmF5KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhdHRlbnRpb24sIHRoaXMgaXMgbG9jYWwgc3RvcmFnZScrbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9BcnJheScpKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY3JlYXRlVG9EbyxcclxuICAgICAgICB0b0RvQXJyYXksLy9yZXN0cmljdCBpdCBsYXRlciwgdG8gZXhwb3NlIG9ubHkgYSBnZXQgb2YgdGhlIGFycmF0IG9yIHBlcmhhcHMgcGFydGljdWxhciBwcm9wZXJ0aWVzIHRvIGJlIGNoYW5nZWQsIGUuZy4gY2hlY2tsaXN0IHN0YXR1cyBvciBwcmlvcml0eVxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuLy8gVG9Eb3MuY3JlYXRlVG9EbygnRmluaXNoIHRoZSBUb0RvIGxpc3QgYXBwJywgJ0RvIGFsbCB0aGUgdGhpbmdzIHNwZWNpZmllZCcsIHVuZGVmaW5lZCwgJ0hpZ2gnLCBbXHJcbi8vICAgICB7IHZhbHVlOiAnbWFrZSBjaGVja2xpc3QgY2xpY2thYmxlJywgZG9uZTogZmFsc2UgfSxcclxuLy8gICAgIHsgdmFsdWU6ICdpbXByb3ZlIHN0eWxlJywgZG9uZTogZmFsc2UgfSxcclxuLy8gICAgIHsgdmFsdWU6ICdhZGQgc2VwYXJhdGUgcHJvamVjdHMnLCBkb25lOiBmYWxzZSB9XSlcclxuLy8gRGlzcGxheWluZ1RvRG9zLmRpc3BsYXkoVG9Eb3MudG9Eb0FycmF5KVxyXG5cclxuXHJcbmNvbnN0IGRlYWxpbmdXaXRoTG9jYWxTdG9yYWdlID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2Uoa2V5TmFtZSwgdmFsdWUpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXlOYW1lLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gZnVuY3Rpb24gZ2V0RWxlbWVudEZyb21Mb2NhbFN0b3JhZ2Uoa2V5TmFtZSkge1xyXG4gICAgLy8gICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXlOYW1lKSkgey8vaWYgc29tZXRoaW5nIGhhcyBiZWVuIHNldCBpbiB0aGUgbG9jYWwgc3RvcmFnZSwgdGhlbiByZXRyaWV2ZVxyXG4gICAgLy8gICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtrZXlOYW1lfWApKS8vb3IganVzdCBrZXlOYW1lP1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UsXHJcbiAgICAgICAgLy8gZ2V0RWxlbWVudEZyb21Mb2NhbFN0b3JhZ2VcclxuICAgIH1cclxufSkoKTtcclxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvQXJyYXknKSkgey8vaWYgc29tZXRoaW5nIGhhcyBiZWVuIHNldCBpbiB0aGUgbG9jYWwgc3RvcmFnZSwgdGhlbiByZXRyaWV2ZVxyXG4gICAgVG9Eb3MudG9Eb0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0FycmF5JykpXHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShUb0Rvcy50b0RvQXJyYXkpKVxyXG4gICAgRGlzcGxheWluZ1RvRG9zLmRpc3BsYXkoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0FycmF5JykpKVxyXG59XHJcbmNvbnNvbGUubG9nKCdhdHRlbnRpb24sIHRoaXMgaXMgbG9jYWwgc3RvcmFnZScrbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9BcnJheScpKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==