/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `body {
    background-image: linear-gradient(rgb(103, 128, 220), rgb(121, 211, 224));
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#main {
    height: 100vh;
    padding: 2rem;
    max-width: 1000px;
    min-width: 800px;
}

.tabs-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    gap: 10px;
    background-image: linear-gradient( rgb(103, 128, 220), rgb(0, 0, 0));
    border-radius: 10px 10px 0 0;
}

.tab {
    /* border: 3px solid #000; */
    border-radius: 10px 10px 0 0;
    padding: 1rem;
    cursor: pointer;
    display: flex;
    gap: 1rem;
    flex-direction: row;
    margin-bottom: -1px;
    background-image: linear-gradient(transparent, rgb(0, 0, 0));
}

.tab.active {
    background-color: #000;
}

.tasks-container {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    gap: 3rem;
    width: 100%;

}

.task-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-radius: 0 0 10px 10px;
    background-color: #000;
    padding-left: 1rem;
}

.task-header > * {
    width: 25%;
    text-align: center;
}

.task-main, .task-input-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    /* border: 1px solid #000; */
    background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.523));
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
}

.task-input-container {
    background-image: linear-gradient(transparent, rgb(0, 0, 0));
    border-radius: 10px 10px 0 0;
}

.task-main {
    position: relative;
}

.task-element {
    width: 100%;
}

.task-details {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    margin-top: -10px;
    border-radius: 0 0 10px 10px;
    background-color: #000;
    color: #fff;
    border: 3px solid #000;
}

.task-main > span, .task-input {
    width: 25%;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0.5rem;
    border-radius: 10px;
    flex-wrap: wrap;
    /* flex-grow: 0;
    flex-shrink: 0; */
}

.tasks-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.add-task-button {
    width: 100%;
    display: block;
    padding: 0.5rem;
    border-radius: 10px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 0 0 10px 10px;
    cursor: pointer;
}

.task-input {
    width: 100%;
    background-image: transparent;
    border: none;
    color: #fff;
    text-align: center;
}

input {
    font-size: 1rem;
    background-color: transparent;
    border: none;
    color: #fff;
    /* cursor: pointer; */
}

input[type="text"] {
    border: none;
    border-bottom: 1px solid #000;
    height: 100%;
}

input[type="text"]:focus {
    outline: none;
    width: 100%;
}

input[type="checkbox"] {
    width: 2%;
    height: 1rem;
}

select {
    --webkit-appearance: none;
    --moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: none;
    color: #fff;
    text-align: center;
}

select {
    cursor: pointer;
}

input[type="date"] {
    cursor: pointer;
}

.completed {
    text-decoration: line-through;
}

#description-form {
    width: 100%;
}

button {
    font-size: 1rem;
    cursor: pointer;
}

.task-details {
    padding-top: 1rem;
    padding-bottom: 0.5 rem;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,yEAAyE;IACzE,WAAW;IACX,iCAAiC;IACjC,eAAe;IACf,gBAAgB;IAChB,SAAS;IACT,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,aAAa;IACb,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,eAAe;IACf,WAAW;IACX,SAAS;IACT,oEAAoE;IACpE,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;IAC5B,4BAA4B;IAC5B,aAAa;IACb,eAAe;IACf,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,mBAAmB;IACnB,4DAA4D;AAChE;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,uBAAuB;IACvB,SAAS;IACT,WAAW;;AAEf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,6BAA6B;IAC7B,4BAA4B;IAC5B,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,6BAA6B;IAC7B,4BAA4B;IAC5B,oEAAoE;IACpE,mBAAmB;IACnB,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,4DAA4D;IAC5D,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,eAAe;IACf,iBAAiB;IACjB,4BAA4B;IAC5B,sBAAsB;IACtB,WAAW;IACX,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,eAAe;IACf,mBAAmB;IACnB,eAAe;IACf;qBACiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,WAAW;IACX,cAAc;IACd,eAAe;IACf,mBAAmB;IACnB,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,4BAA4B;IAC5B,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,6BAA6B;IAC7B,YAAY;IACZ,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,6BAA6B;IAC7B,YAAY;IACZ,WAAW;IACX,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,sBAAsB;IACtB,gBAAgB;IAChB,6BAA6B;IAC7B,YAAY;IACZ,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,uBAAuB;AAC3B","sourcesContent":["body {\n    background-image: linear-gradient(rgb(103, 128, 220), rgb(121, 211, 224));\n    color: #fff;\n    font-family: 'Roboto', sans-serif;\n    font-size: 16px;\n    line-height: 1.5;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#main {\n    height: 100vh;\n    padding: 2rem;\n    max-width: 1000px;\n    min-width: 800px;\n}\n\n.tabs-container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    flex-wrap: wrap;\n    width: 100%;\n    gap: 10px;\n    background-image: linear-gradient( rgb(103, 128, 220), rgb(0, 0, 0));\n    border-radius: 10px 10px 0 0;\n}\n\n.tab {\n    /* border: 3px solid #000; */\n    border-radius: 10px 10px 0 0;\n    padding: 1rem;\n    cursor: pointer;\n    display: flex;\n    gap: 1rem;\n    flex-direction: row;\n    margin-bottom: -1px;\n    background-image: linear-gradient(transparent, rgb(0, 0, 0));\n}\n\n.tab.active {\n    background-color: #000;\n}\n\n.tasks-container {\n    display: flex;\n    flex-direction: column;\n    /* align-items: center; */\n    justify-content: center;\n    gap: 3rem;\n    width: 100%;\n\n}\n\n.task-header {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n    border-radius: 0 0 10px 10px;\n    background-color: #000;\n    padding-left: 1rem;\n}\n\n.task-header > * {\n    width: 25%;\n    text-align: center;\n}\n\n.task-main, .task-input-container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n    /* border: 1px solid #000; */\n    background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.523));\n    border-radius: 10px;\n    color: #fff;\n    cursor: pointer;\n}\n\n.task-input-container {\n    background-image: linear-gradient(transparent, rgb(0, 0, 0));\n    border-radius: 10px 10px 0 0;\n}\n\n.task-main {\n    position: relative;\n}\n\n.task-element {\n    width: 100%;\n}\n\n.task-details {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    padding: 0.5rem;\n    margin-top: -10px;\n    border-radius: 0 0 10px 10px;\n    background-color: #000;\n    color: #fff;\n    border: 3px solid #000;\n}\n\n.task-main > span, .task-input {\n    width: 25%;\n    text-align: center;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    padding: 0.5rem;\n    border-radius: 10px;\n    flex-wrap: wrap;\n    /* flex-grow: 0;\n    flex-shrink: 0; */\n}\n\n.tasks-list {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.add-task-button {\n    width: 100%;\n    display: block;\n    padding: 0.5rem;\n    border-radius: 10px;\n    background-color: #000;\n    color: #fff;\n    border: none;\n    border-radius: 0 0 10px 10px;\n    cursor: pointer;\n}\n\n.task-input {\n    width: 100%;\n    background-image: transparent;\n    border: none;\n    color: #fff;\n    text-align: center;\n}\n\ninput {\n    font-size: 1rem;\n    background-color: transparent;\n    border: none;\n    color: #fff;\n    /* cursor: pointer; */\n}\n\ninput[type=\"text\"] {\n    border: none;\n    border-bottom: 1px solid #000;\n    height: 100%;\n}\n\ninput[type=\"text\"]:focus {\n    outline: none;\n    width: 100%;\n}\n\ninput[type=\"checkbox\"] {\n    width: 2%;\n    height: 1rem;\n}\n\nselect {\n    --webkit-appearance: none;\n    --moz-appearance: none;\n    appearance: none;\n    background-color: transparent;\n    border: none;\n    color: #fff;\n    text-align: center;\n}\n\nselect {\n    cursor: pointer;\n}\n\ninput[type=\"date\"] {\n    cursor: pointer;\n}\n\n.completed {\n    text-decoration: line-through;\n}\n\n#description-form {\n    width: 100%;\n}\n\nbutton {\n    font-size: 1rem;\n    cursor: pointer;\n}\n\n.task-details {\n    padding-top: 1rem;\n    padding-bottom: 0.5 rem;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ }),

/***/ "./src/functions/projects.js":
/*!***********************************!*\
  !*** ./src/functions/projects.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   editProject: () => (/* binding */ editProject),
/* harmony export */   editTask: () => (/* binding */ editTask),
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
const projects = [
    {
        id: 1,
        name: 'Etap 1',
        tasks: [
            {
                id: 1,
                name: 'Dodaj input do przycisku +',
                description: 'w celu dodania nowego projektu',
                dueDate: '2024-11-24',
                priority: 'low',
                completed: true,
            },
            {
                id: 2,
                name: 'Dodaj przycisk usuwania zadania',
                description: 'hehe',
                dueDate: '2024-12-24',
                priority: 'medium',
                completed: true,
            },
            {
                id: 3,
                name: 'Zmień wygląd checkboxa i przycisków usuwania',
                description: 'do chuja',
                dueDate: '2024-01-24',
                priority: 'high',
                completed: false,
            }
        ]
    },
    {
        id: 2,
        name: 'Etap 2',
        tasks: [
            {
                id: 1,
                name: 'Dodaj zapis do local storage',
                description: 'normalnie fajnie będzie',
                dueDate: '2020-11-24',
                priority: 'high',
                completed: false,
            },
            {
                id: 2,
                name: 'Dodaj tą bibliotekę z datami',
                description: 'Żeby lepiej wyglądało',
                dueDate: '2021-01-20',
                priority: 'low',
                completed: false,
            }
        ]
    }
];

function addProject(newProject) {
    projects.push(newProject);
}

function editProject(project, newName) {
    project.name = newName;
}

function deleteProject(projectToDelete) {
    const index = projects.indexOf(projectToDelete);
    projects.splice(index, 1);
}

function addTask(project, newTaskName, newTaskDescription, newTaskDueDate, newTaskPriority) {
    const task = {
        id: project.tasks.length + 1,
        name: newTaskName,
        description: newTaskDescription,
        dueDate: newTaskDueDate,
        priority: newTaskPriority
    };
    project.tasks.push(task);
}

function editTask(task, newName, newDescription, newDueDate, newPriority) {
    task.name = newName;
    task.description = newDescription;
    task.dueDate = newDueDate;
    task.priority = newPriority;
}

function deleteTask(taskToDelete) {
    const project = projects.find(project => project.tasks.includes(taskToDelete));
    console.log(project)
    project.tasks.splice(project.tasks.indexOf(taskToDelete), 1);
    console.log(project.tasks)
}

/***/ }),

/***/ "./src/functions/tabsDOM.js":
/*!**********************************!*\
  !*** ./src/functions/tabsDOM.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tabsDOM: () => (/* binding */ tabsDOM)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/functions/projects.js");
/* harmony import */ var _tasksDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasksDOM */ "./src/functions/tasksDOM.js");
// tabsDOM.js




const tabsDOM = (() => {

    let currentTab = null;

    // const createForm = (project, tasksContainer, tabsContainer) => {
    //     const form = document.createElement("form");

    //     const inputField = document.createElement("input");
    //     inputField.type = "text";
    //     // inputField.classList.add("task-input");
    //     inputField.placeholder = "Task name";
    //     inputField.value = project ? project.name : "";

    //     inputField.addEventListener("blur", () => {
    //         form.remove();
    //     });

    //     const submitButton = document.createElement("button");
    //     submitButton.textContent = project ? "Edit project" : "Add project";
    //     submitButton.classList.add("add-task-button");

    //     submitButton.addEventListener("click", (event) => {
    //         event.preventDefault();
    //         if (inputField.value) {
    //             if (project) {
    //                 editProject(project, inputField.value);
    //             } else {
    //                 editProject(project, inputField.value);
    //                 // currentTab = newProject;
    //             }
    //             createTabs(tabsContainer, tasksContainer);
    //         }

    //         form.remove();
    //     });

    //     form.appendChild(inputField);
    //     form.appendChild(submitButton);

    //     return form

    // };

    const createTabElement = (project, tabsContainer, tasksContainer) => {
        const tab = document.createElement("div");
        tab.classList.add("tab");

        const tabName = document.createElement("span");
        tabName.textContent = project.name;

        // const changeTabNameForm = createForm(project, tasksContainer, tabsContainer);
        // changeTabNameForm.style.display = "none";

        const changeTabNameForm = document.createElement("form");
        changeTabNameForm.style.display = "none";
        changeTabNameForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const newProjectName = inputField.value;
            if (newProjectName) {
                project.name = newProjectName;
                (0,_projects__WEBPACK_IMPORTED_MODULE_0__.editProject)(project, newProjectName);
                createTabs(tabsContainer, tasksContainer);
                console.log(_projects__WEBPACK_IMPORTED_MODULE_0__.projects)
            }

            tabName.style.display = "block";
            inputField.style.display = "none";
        });

        const inputField = document.createElement("input");
        inputField.classList.add("tab-input");
        inputField.value = project.name;
        inputField.style.display = "none"; // Hide input field by default

        inputField.addEventListener("blur", () => {
            tabName.style.display = "block";
            inputField.style.display = "none";
        });

        changeTabNameForm.appendChild(inputField);
        
        tabName.addEventListener("dblclick", () => {
            tabName.style.display = "none";
            changeTabNameForm.style.display = "block";
            inputField.style.display = "block";
            console.log(changeTabNameForm)
            inputField.focus();
        });

        const deleteButton = document.createElement("button");

        if (project.name !== "+") {
            // Add delete button ("x") only for projects (not for the "+" button)

            deleteButton.textContent = "x";
            deleteButton.addEventListener("click", (event) => {
                event.stopPropagation(); // Prevent tab click event from firing
                if (confirm("Are you sure you want to delete this project?")) {
                    (0,_projects__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(project);
                    createTabs(tabsContainer, tasksContainer);
                }
            });

            tab.appendChild(tabName);
            tab.appendChild(changeTabNameForm);
            tab.appendChild(deleteButton);
        } else {
            tab.appendChild(tabName);
        }

        return tab;
    };

    const createTabs = (tabsContainer, tasksContainer) => {
        // Remove existing tabs
        while (tabsContainer.firstChild) {
            tabsContainer.removeChild(tabsContainer.firstChild);
        }

        _projects__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project, index) => {
            const tab = createTabElement(project, tabsContainer, tasksContainer);

            tab.addEventListener("click", () => {
                currentTab = project;
                _tasksDOM__WEBPACK_IMPORTED_MODULE_1__.tasksDOM.displayTasks(currentTab, tasksContainer);
                tabsContainer.childNodes.forEach((tab) => {
                    tab.classList.remove("active");
                });
                tab.classList.add("active");
            });

            tabsContainer.appendChild(tab);

            if (index === 0) {
                currentTab = project;
                _tasksDOM__WEBPACK_IMPORTED_MODULE_1__.tasksDOM.displayTasks(currentTab, tasksContainer);
                tab.classList.add("active");
            }
        });

        const newTabInput = document.createElement("input");
        newTabInput.type = "text";
        newTabInput.classList.add("tab-input");
        newTabInput.placeholder = "New project name";
        newTabInput.style.display = "none";

        newTabInput.addEventListener("blur", () => {
            newTabInput.style.display = "none";
            newTabForm.style.display = "none";
        }
        );

        const newTabForm = document.createElement("form");
        newTabForm.style.display = "none";

        newTabForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const newProjectName = newTabInput.value;
            if (newProjectName) {
                const newProject = { id: _projects__WEBPACK_IMPORTED_MODULE_0__.projects.length + 1, name: newProjectName, tasks: [] };
                (0,_projects__WEBPACK_IMPORTED_MODULE_0__.addProject)(newProject);
                createTabs(tabsContainer, tasksContainer);
                currentTab = newProject;
                _tasksDOM__WEBPACK_IMPORTED_MODULE_1__.tasksDOM.displayTasks(currentTab, tasksContainer);

                tabsContainer.childNodes.forEach((tab) => {
                    tab.classList.remove("active");
                });
                tabsContainer.lastChild.previousElementSibling.classList.add("active");
            }

            newTabInput.style.display = "none";
        });


        // Add tab for adding new projects
        const addTab = createTabElement({ name: "+" }, tabsContainer, tasksContainer);
        addTab.addEventListener("click", () => {
            newTabInput.style.display = "block";
            newTabForm.style.display = "block";
            newTabInput.focus();
        });

        newTabForm.appendChild(newTabInput);

        addTab.appendChild(newTabForm);

        tabsContainer.appendChild(addTab);
    };

    return { createTabs };
})();


/***/ }),

/***/ "./src/functions/tasksDOM.js":
/*!***********************************!*\
  !*** ./src/functions/tasksDOM.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tasksDOM: () => (/* binding */ tasksDOM)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/functions/projects.js");


const tasksDOM = (() => {


    const getPriorityColor = (priority) => {
        
        switch (priority) {
            case "high":
                return "red";
            case "medium":
                return "orange";
            case "low":
                return "green";
            default:
                return "black";
        }
    };

    const createTaskElement = (task) => {

        const taskElement = document.createElement("div");
        taskElement.classList.add("task-element");

        const taskMain = document.createElement("div");
        taskMain.classList.add("task-main");

        taskMain.addEventListener("click", () => {
            taskDetails.style.display = taskDetails.style.display === "none" ? "flex" : "none";
        });

        const taskDetails = document.createElement("div");
        taskDetails.classList.add("task-details");
        taskDetails.style.display = "none";

        const priorityColor = getPriorityColor(task.priority);
        taskMain.style.backgroundColor = priorityColor;

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.classList.add("task-checkbox");
        checkbox.checked = task.completed;
        checkbox.addEventListener("click", (e) => {
            e.stopPropagation();
        });
        if (task.completed) {
            taskMain.classList.add("completed");
            taskMain.style.backgroundColor = "grey";
        } 
        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked;
            if (task.completed) {
                taskMain.classList.add("completed");
                taskMain.style.backgroundColor = "grey";
            } else {
                taskMain.classList.remove("completed");
                taskMain.style.backgroundColor = priorityColor;
            }
        });
        
        const taskName = document.createElement("span");
        taskName.textContent = task.name;

        const nameForm = document.createElement("form");
        nameForm.style.display = "none";
        nameForm.addEventListener("submit", (event) => {
            event.preventDefault();
    
            const newName = nameInput.value;
            if (newName) {
                task.name = newName;
                (0,_projects__WEBPACK_IMPORTED_MODULE_0__.editTask)(task, newName, task.description, task.dueDate, task.priority);
                taskName.textContent = newName;
            }



            nameForm.style.display = "none";
            nameInput.style.display = "none";
            taskName.style.display = "block";

            console.log(task);
        });

        const nameInput = document.createElement("input");
        nameInput.setAttribute("type", "text");
        nameInput.classList.add("task-input");
        nameInput.value = task.name;
        nameInput.style.display = "none";

        nameForm.appendChild(nameInput);

        nameInput.addEventListener("blur", () => {
            taskName.style.display = "block";
            nameForm.style.display = "none";
            nameInput.style.display = "none";
        });

        taskName.addEventListener("dblclick", () => {
            taskName.style.display = "none";
            nameForm.style.display = "block";
            nameInput.style.display = "block";
            nameInput.focus();
        });

        const descriptionForm = document.createElement("form");
        descriptionForm.setAttribute("id", "description-form")
        descriptionForm.style.display = "none";
        descriptionForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const newDescription = descriptionInput.value;
            if (newDescription) {
                task.description = newDescription;
                (0,_projects__WEBPACK_IMPORTED_MODULE_0__.editTask)(task, task.name, newDescription, task.dueDate, task.priority);
                taskDescription.textContent = "Task Description: " + newDescription;
            }

            descriptionForm.style.display = "none";
            descriptionInput.style.display = "none";
            taskDescription.style.display = "block";
        });

        const descriptionInput = document.createElement("input");
        descriptionInput.setAttribute("type", "text");
        descriptionInput.classList.add("task-input");
        descriptionInput.value = task.description;
        descriptionInput.style.display = "none";

        descriptionForm.appendChild(descriptionInput);
        
        descriptionInput.addEventListener("blur", () => {
            taskDescription.style.display = "block";
            descriptionForm.style.display = "none";
            descriptionInput.style.display = "none";
        });


        const taskDescription = document.createElement("span");
        taskDescription.textContent = task.description;
        if (taskDescription.textContent === "") {
            taskDescription.textContent = "Double click to add task description";
        };

        taskDescription.addEventListener("dblclick", () => {
            taskDescription.style.display = "none";
            descriptionForm.style.display = "block";
            descriptionInput.style.display = "block";
            descriptionInput.focus();
        });

        const dueDateForm = document.createElement("form");
        dueDateForm.style.display = "none";
        dueDateForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const newDueDate = dueDateInput.value;
            if (newDueDate) {
                task.dueDate = newDueDate;
                (0,_projects__WEBPACK_IMPORTED_MODULE_0__.editTask)(task, task.name, task.description, newDueDate, task.priority);
                taskDueDate.textContent = newDueDate;
            }

            console.log(task);

            dueDateForm.style.display = "none";
            dueDateInput.style.display = "none";
            taskDueDate.style.display = "block";
        });

        const dueDateInput = document.createElement("input");
        dueDateInput.setAttribute("type", "date");
        dueDateInput.classList.add("task-input");
        dueDateInput.value = task.dueDate;
        dueDateInput.style.display = "none";

        const dueDateSubmitButton = document.createElement("button");
        dueDateSubmitButton.style.display = "none";
        // dueDateSubmitButton.textContent = "Change due date";

        // dueDateSubmitButton.addEventListener("click", (event) => {
        //     // event.stopPropagation();
        // });

        dueDateInput.addEventListener("blur", () => {

            taskDueDate.style.display = "block";
            dueDateForm.style.display = "none";
            dueDateInput.style.display = "none";
        });

        dueDateForm.appendChild(dueDateInput);
        dueDateForm.appendChild(dueDateSubmitButton);

        const taskDueDate = document.createElement("span");
        taskDueDate.textContent = task.dueDate;

        if (taskDueDate.textContent === "" || taskDueDate.textContent === "undefined") {
            taskDueDate.textContent = "Double click to add date";
        };

        taskDueDate.addEventListener("dblclick", () => {
            taskDueDate.style.display = "none";
            dueDateForm.style.display = "block";
            dueDateInput.style.display = "block";
            dueDateInput.focus();
        });
    
        const taskDeleteButton = document.createElement("button");
        taskDeleteButton.textContent = "x";
        taskDeleteButton.classList.add("task-delete-button");
        taskDeleteButton.addEventListener("click", (event) => {
            if (confirm("Are you sure you want to delete this task?")) {
                event.stopPropagation();
                (0,_projects__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(task);
                taskElement.remove();
            }
        });


        taskMain.appendChild(checkbox);
        taskMain.appendChild(taskName);
        taskMain.appendChild(nameForm);
        taskMain.appendChild(taskDueDate);
        taskMain.appendChild(dueDateForm);
        taskMain.appendChild(taskDeleteButton);

        taskElement.appendChild(taskMain);

        taskDetails.appendChild(taskDescription);
        taskDetails.appendChild(descriptionForm);
        taskElement.appendChild(taskDetails);

        return taskElement;
    };

    const displayTasks = (currentTab, tasksContainer) => {
        // Wyczyść poprzednie zadania

        const tasksList = document.createElement("div");
        tasksList.classList.add("tasks-list");

        while (tasksContainer.firstChild) {
            tasksContainer.removeChild(tasksContainer.firstChild);
        }

        // Dodaj opisy kolumn
        const taskName = document.createElement("span");
        taskName.textContent = "Task name";

        const taskDueDate = document.createElement("span");
        taskDueDate.textContent = "Task due date";

        const tasksHeader = document.createElement("div");
        tasksHeader.classList.add("task-header");

        tasksHeader.appendChild(taskName);
        tasksHeader.appendChild(taskDueDate);

        tasksList.appendChild(tasksHeader);


        // Wyświetl zadania z aktualnej zakładki
        if (currentTab) {
            currentTab.tasks.forEach((task) => {
                const taskElement = createTaskElement(task);
                tasksList.appendChild(taskElement);
            });
        }

        // add input for name, description, dueDate, priority

        const nameInput = document.createElement("input");
        nameInput.setAttribute("type", "text");
        nameInput.setAttribute("placeholder", "New task name");
        nameInput.classList.add("task-input");

        const descriptionInput = document.createElement("input");
        descriptionInput.setAttribute("type", "text");
        descriptionInput.setAttribute("placeholder", "New task description");
        descriptionInput.classList.add("task-input");

        const dueDateInput = document.createElement("input");
        dueDateInput.setAttribute("type", "date");
        dueDateInput.classList.add("task-input");

        const priorityInput = document.createElement("select");
        priorityInput.classList.add("task-input");
        priorityInput.required = true;

        const placeholder = document.createElement("option");
        placeholder.setAttribute("value", "");
        placeholder.textContent = "Click to select priority";

        const highPriority = document.createElement("option");
        highPriority.setAttribute("value", "high");
        highPriority.textContent = "High";

        const mediumPriority = document.createElement("option");
        mediumPriority.setAttribute("value", "medium");
        mediumPriority.textContent = "Medium";

        const lowPriority = document.createElement("option");
        lowPriority.setAttribute("value", "low");
        lowPriority.textContent = "Low";

        priorityInput.appendChild(placeholder);
        priorityInput.appendChild(highPriority);
        priorityInput.appendChild(mediumPriority);
        priorityInput.appendChild(lowPriority);

        const addButton = document.createElement("button");
        addButton.textContent = "Add task";
        addButton.classList.add("add-task-button");

        addButton.addEventListener("click", () => {
            if (nameInput.value && priorityInput.value) {
                (0,_projects__WEBPACK_IMPORTED_MODULE_0__.addTask)(currentTab, nameInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value);
                displayTasks(currentTab, tasksContainer);
            } else {
                alert("Task name and priority are required!");
            }
        });

        const taskInputContainer = document.createElement("div");
        taskInputContainer.classList.add("task-input-container");

        taskInputContainer.appendChild(nameInput);
        taskInputContainer.appendChild(descriptionInput);
        taskInputContainer.appendChild(dueDateInput);
        taskInputContainer.appendChild(priorityInput);

        const addNewTaskContainer = document.createElement("div");
        addNewTaskContainer.classList.add("add-new-task-container");

        addNewTaskContainer.appendChild(taskInputContainer);
        addNewTaskContainer.appendChild(addButton);

        tasksContainer.appendChild(tasksList);
        tasksContainer.appendChild(addNewTaskContainer);

    };


    return { displayTasks };
})();

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _functions_tabsDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/tabsDOM.js */ "./src/functions/tabsDOM.js");



const main = document.querySelector('#main');

const tabsContainer = document.createElement('div');
tabsContainer.classList.add('tabs-container');

const tasksContainer = document.createElement('div');
tasksContainer.classList.add('tasks-container');

main.appendChild(tabsContainer);
main.appendChild(tasksContainer);

_functions_tabsDOM_js__WEBPACK_IMPORTED_MODULE_1__.tabsDOM.createTabs(tabsContainer, tasksContainer);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGNBQWMsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsS0FBSyxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZ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QUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbURBQVE7QUFDeEI7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbURBQVE7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbURBQVE7QUFDeEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFEQUFVO0FBQzFCO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0Isa0RBQU87QUFDdkI7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0EsYUFBYTtBQUNiLENBQUM7Ozs7OztVQ3pWRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUMyQjs7QUFFakQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMERBQU8sMkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2Z1bmN0aW9ucy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9mdW5jdGlvbnMvdGFic0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9mdW5jdGlvbnMvdGFza3NET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMTAzLCAxMjgsIDIyMCksIHJnYigxMjEsIDIxMSwgMjI0KSk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jbWFpbiB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgIG1pbi13aWR0aDogODAwcHg7XG59XG5cbi50YWJzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdhcDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIHJnYigxMDMsIDEyOCwgMjIwKSwgcmdiKDAsIDAsIDApKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xufVxuXG4udGFiIHtcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCAjMDAwOyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgcmdiKDAsIDAsIDApKTtcbn1cblxuLnRhYi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG5cbi50YXNrcy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogM3JlbTtcbiAgICB3aWR0aDogMTAwJTtcblxufVxuXG4udGFzay1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG5cbi50YXNrLWhlYWRlciA+ICoge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFzay1tYWluLCAudGFzay1pbnB1dC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7ICovXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2JhKDAsIDAsIDAsIDAuNTIzKSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrLWlucHV0LWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2IoMCwgMCwgMCkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG59XG5cbi50YXNrLW1haW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRhc2stZWxlbWVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi50YXNrLWRldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAwMDtcbn1cblxuLnRhc2stbWFpbiA+IHNwYW4sIC50YXNrLWlucHV0IHtcbiAgICB3aWR0aDogMjUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIC8qIGZsZXgtZ3JvdzogMDtcbiAgICBmbGV4LXNocmluazogMDsgKi9cbn1cblxuLnRhc2tzLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5hZGQtdGFzay1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzay1pbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgLyogY3Vyc29yOiBwb2ludGVyOyAqL1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgd2lkdGg6IDIlO1xuICAgIGhlaWdodDogMXJlbTtcbn1cblxuc2VsZWN0IHtcbiAgICAtLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC0tbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5zZWxlY3Qge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW5wdXRbdHlwZT1cImRhdGVcIl0ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbXBsZXRlZCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbiNkZXNjcmlwdGlvbi1mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzay1kZXRhaWxzIHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41IHJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUVBQXlFO0lBQ3pFLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXO0lBQ1gsU0FBUztJQUNULG9FQUFvRTtJQUNwRSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixlQUFlO0lBQ2YsYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDREQUE0RDtBQUNoRTs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLG9FQUFvRTtJQUNwRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw0REFBNEQ7SUFDNUQsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7O0lBRXZCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmO3FCQUNpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigxMDMsIDEyOCwgMjIwKSwgcmdiKDEyMSwgMjExLCAyMjQpKTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jbWFpbiB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICBtaW4td2lkdGg6IDgwMHB4O1xcbn1cXG5cXG4udGFicy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggcmdiKDEwMywgMTI4LCAyMjApLCByZ2IoMCwgMCwgMCkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbn1cXG5cXG4udGFiIHtcXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgIzAwMDsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgcmdiKDAsIDAsIDApKTtcXG59XFxuXFxuLnRhYi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG4udGFza3MtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogM3JlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxufVxcblxcbi50YXNrLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcbi50YXNrLWhlYWRlciA+ICoge1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLW1haW4sIC50YXNrLWlucHV0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjMDAwOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIHJnYmEoMCwgMCwgMCwgMC41MjMpKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2staW5wdXQtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2IoMCwgMCwgMCkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbn1cXG5cXG4udGFzay1tYWluIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFzay1lbGVtZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrLWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMDA7XFxufVxcblxcbi50YXNrLW1haW4gPiBzcGFuLCAudGFzay1pbnB1dCB7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIC8qIGZsZXgtZ3JvdzogMDtcXG4gICAgZmxleC1zaHJpbms6IDA7ICovXFxufVxcblxcbi50YXNrcy1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uYWRkLXRhc2stYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2staW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICAvKiBjdXJzb3I6IHBvaW50ZXI7ICovXFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICB3aWR0aDogMiU7XFxuICAgIGhlaWdodDogMXJlbTtcXG59XFxuXFxuc2VsZWN0IHtcXG4gICAgLS13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLS1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuc2VsZWN0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb21wbGV0ZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uLWZvcm0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWRldGFpbHMge1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNSByZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAnRXRhcCAxJyxcbiAgICAgICAgdGFza3M6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnRG9kYWogaW5wdXQgZG8gcHJ6eWNpc2t1ICsnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAndyBjZWx1IGRvZGFuaWEgbm93ZWdvIHByb2pla3R1JyxcbiAgICAgICAgICAgICAgICBkdWVEYXRlOiAnMjAyNC0xMS0yNCcsXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6ICdsb3cnLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0RvZGFqIHByenljaXNrIHVzdXdhbmlhIHphZGFuaWEnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnaGVoZScsXG4gICAgICAgICAgICAgICAgZHVlRGF0ZTogJzIwMjQtMTItMjQnLFxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiAnbWVkaXVtJyxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdabWllxYQgd3lnbMSFZCBjaGVja2JveGEgaSBwcnp5Y2lza8OzdyB1c3V3YW5pYScsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdkbyBjaHVqYScsXG4gICAgICAgICAgICAgICAgZHVlRGF0ZTogJzIwMjQtMDEtMjQnLFxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiAnaGlnaCcsXG4gICAgICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ0V0YXAgMicsXG4gICAgICAgIHRhc2tzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0RvZGFqIHphcGlzIGRvIGxvY2FsIHN0b3JhZ2UnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbm9ybWFsbmllIGZham5pZSBixJlkemllJyxcbiAgICAgICAgICAgICAgICBkdWVEYXRlOiAnMjAyMC0xMS0yNCcsXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgICBuYW1lOiAnRG9kYWogdMSFIGJpYmxpb3Rla8SZIHogZGF0YW1pJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ8W7ZWJ5IGxlcGllaiB3eWdsxIVkYcWCbycsXG4gICAgICAgICAgICAgICAgZHVlRGF0ZTogJzIwMjEtMDEtMjAnLFxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiAnbG93JyxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QobmV3UHJvamVjdCkge1xuICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0UHJvamVjdChwcm9qZWN0LCBuZXdOYW1lKSB7XG4gICAgcHJvamVjdC5uYW1lID0gbmV3TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdFRvRGVsZXRlKSB7XG4gICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKHByb2plY3RUb0RlbGV0ZSk7XG4gICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2socHJvamVjdCwgbmV3VGFza05hbWUsIG5ld1Rhc2tEZXNjcmlwdGlvbiwgbmV3VGFza0R1ZURhdGUsIG5ld1Rhc2tQcmlvcml0eSkge1xuICAgIGNvbnN0IHRhc2sgPSB7XG4gICAgICAgIGlkOiBwcm9qZWN0LnRhc2tzLmxlbmd0aCArIDEsXG4gICAgICAgIG5hbWU6IG5ld1Rhc2tOYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbjogbmV3VGFza0Rlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlOiBuZXdUYXNrRHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHk6IG5ld1Rhc2tQcmlvcml0eVxuICAgIH07XG4gICAgcHJvamVjdC50YXNrcy5wdXNoKHRhc2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRhc2sodGFzaywgbmV3TmFtZSwgbmV3RGVzY3JpcHRpb24sIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5KSB7XG4gICAgdGFzay5uYW1lID0gbmV3TmFtZTtcbiAgICB0YXNrLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgdGFzay5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgICB0YXNrLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrKHRhc2tUb0RlbGV0ZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC50YXNrcy5pbmNsdWRlcyh0YXNrVG9EZWxldGUpKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0KVxuICAgIHByb2plY3QudGFza3Muc3BsaWNlKHByb2plY3QudGFza3MuaW5kZXhPZih0YXNrVG9EZWxldGUpLCAxKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRhc2tzKVxufSIsIi8vIHRhYnNET00uanNcblxuaW1wb3J0IHsgcHJvamVjdHMsIGFkZFByb2plY3QsIGRlbGV0ZVByb2plY3QsIGVkaXRQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IHRhc2tzRE9NIH0gZnJvbSBcIi4vdGFza3NET01cIjtcblxuZXhwb3J0IGNvbnN0IHRhYnNET00gPSAoKCkgPT4ge1xuXG4gICAgbGV0IGN1cnJlbnRUYWIgPSBudWxsO1xuXG4gICAgLy8gY29uc3QgY3JlYXRlRm9ybSA9IChwcm9qZWN0LCB0YXNrc0NvbnRhaW5lciwgdGFic0NvbnRhaW5lcikgPT4ge1xuICAgIC8vICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgICAvLyAgICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAvLyAgICAgaW5wdXRGaWVsZC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgLy8gICAgIC8vIGlucHV0RmllbGQuY2xhc3NMaXN0LmFkZChcInRhc2staW5wdXRcIik7XG4gICAgLy8gICAgIGlucHV0RmllbGQucGxhY2Vob2xkZXIgPSBcIlRhc2sgbmFtZVwiO1xuICAgIC8vICAgICBpbnB1dEZpZWxkLnZhbHVlID0gcHJvamVjdCA/IHByb2plY3QubmFtZSA6IFwiXCI7XG5cbiAgICAvLyAgICAgaW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICBmb3JtLnJlbW92ZSgpO1xuICAgIC8vICAgICB9KTtcblxuICAgIC8vICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIC8vICAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBwcm9qZWN0ID8gXCJFZGl0IHByb2plY3RcIiA6IFwiQWRkIHByb2plY3RcIjtcbiAgICAvLyAgICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1idXR0b25cIik7XG5cbiAgICAvLyAgICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAvLyAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgICAgICBpZiAoaW5wdXRGaWVsZC52YWx1ZSkge1xuICAgIC8vICAgICAgICAgICAgIGlmIChwcm9qZWN0KSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVkaXRQcm9qZWN0KHByb2plY3QsIGlucHV0RmllbGQudmFsdWUpO1xuICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVkaXRQcm9qZWN0KHByb2plY3QsIGlucHV0RmllbGQudmFsdWUpO1xuICAgIC8vICAgICAgICAgICAgICAgICAvLyBjdXJyZW50VGFiID0gbmV3UHJvamVjdDtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgY3JlYXRlVGFicyh0YWJzQ29udGFpbmVyLCB0YXNrc0NvbnRhaW5lcik7XG4gICAgLy8gICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgIGZvcm0ucmVtb3ZlKCk7XG4gICAgLy8gICAgIH0pO1xuXG4gICAgLy8gICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRGaWVsZCk7XG4gICAgLy8gICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuICAgIC8vICAgICByZXR1cm4gZm9ybVxuXG4gICAgLy8gfTtcblxuICAgIGNvbnN0IGNyZWF0ZVRhYkVsZW1lbnQgPSAocHJvamVjdCwgdGFic0NvbnRhaW5lciwgdGFza3NDb250YWluZXIpID0+IHtcbiAgICAgICAgY29uc3QgdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIik7XG5cbiAgICAgICAgY29uc3QgdGFiTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICB0YWJOYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuXG4gICAgICAgIC8vIGNvbnN0IGNoYW5nZVRhYk5hbWVGb3JtID0gY3JlYXRlRm9ybShwcm9qZWN0LCB0YXNrc0NvbnRhaW5lciwgdGFic0NvbnRhaW5lcik7XG4gICAgICAgIC8vIGNoYW5nZVRhYk5hbWVGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgICAgICBjb25zdCBjaGFuZ2VUYWJOYW1lRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgICBjaGFuZ2VUYWJOYW1lRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGNoYW5nZVRhYk5hbWVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBpbnB1dEZpZWxkLnZhbHVlO1xuICAgICAgICAgICAgaWYgKG5ld1Byb2plY3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5uYW1lID0gbmV3UHJvamVjdE5hbWU7XG4gICAgICAgICAgICAgICAgZWRpdFByb2plY3QocHJvamVjdCwgbmV3UHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVRhYnModGFic0NvbnRhaW5lciwgdGFza3NDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0YWJOYW1lLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBpbnB1dEZpZWxkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXRGaWVsZC5jbGFzc0xpc3QuYWRkKFwidGFiLWlucHV0XCIpO1xuICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gcHJvamVjdC5uYW1lO1xuICAgICAgICBpbnB1dEZpZWxkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgLy8gSGlkZSBpbnB1dCBmaWVsZCBieSBkZWZhdWx0XG5cbiAgICAgICAgaW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0YWJOYW1lLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBpbnB1dEZpZWxkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2hhbmdlVGFiTmFtZUZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRGaWVsZCk7XG4gICAgICAgIFxuICAgICAgICB0YWJOYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0YWJOYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGNoYW5nZVRhYk5hbWVGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBpbnB1dEZpZWxkLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaGFuZ2VUYWJOYW1lRm9ybSlcbiAgICAgICAgICAgIGlucHV0RmllbGQuZm9jdXMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgICAgICBpZiAocHJvamVjdC5uYW1lICE9PSBcIitcIikge1xuICAgICAgICAgICAgLy8gQWRkIGRlbGV0ZSBidXR0b24gKFwieFwiKSBvbmx5IGZvciBwcm9qZWN0cyAobm90IGZvciB0aGUgXCIrXCIgYnV0dG9uKVxuXG4gICAgICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcInhcIjtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIFByZXZlbnQgdGFiIGNsaWNrIGV2ZW50IGZyb20gZmlyaW5nXG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcHJvamVjdD9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGFicyh0YWJzQ29udGFpbmVyLCB0YXNrc0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRhYi5hcHBlbmRDaGlsZCh0YWJOYW1lKTtcbiAgICAgICAgICAgIHRhYi5hcHBlbmRDaGlsZChjaGFuZ2VUYWJOYW1lRm9ybSk7XG4gICAgICAgICAgICB0YWIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhYi5hcHBlbmRDaGlsZCh0YWJOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YWI7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZVRhYnMgPSAodGFic0NvbnRhaW5lciwgdGFza3NDb250YWluZXIpID0+IHtcbiAgICAgICAgLy8gUmVtb3ZlIGV4aXN0aW5nIHRhYnNcbiAgICAgICAgd2hpbGUgKHRhYnNDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgdGFic0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0YWJzQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhYiA9IGNyZWF0ZVRhYkVsZW1lbnQocHJvamVjdCwgdGFic0NvbnRhaW5lciwgdGFza3NDb250YWluZXIpO1xuXG4gICAgICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFiID0gcHJvamVjdDtcbiAgICAgICAgICAgICAgICB0YXNrc0RPTS5kaXNwbGF5VGFza3MoY3VycmVudFRhYiwgdGFza3NDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIHRhYnNDb250YWluZXIuY2hpbGROb2Rlcy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGFic0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWIpO1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFiID0gcHJvamVjdDtcbiAgICAgICAgICAgICAgICB0YXNrc0RPTS5kaXNwbGF5VGFza3MoY3VycmVudFRhYiwgdGFza3NDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBuZXdUYWJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgbmV3VGFiSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICBuZXdUYWJJbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFiLWlucHV0XCIpO1xuICAgICAgICBuZXdUYWJJbnB1dC5wbGFjZWhvbGRlciA9IFwiTmV3IHByb2plY3QgbmFtZVwiO1xuICAgICAgICBuZXdUYWJJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAgICAgbmV3VGFiSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbmV3VGFiSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgbmV3VGFiRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBuZXdUYWJGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICAgIG5ld1RhYkZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgICAgIG5ld1RhYkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IG5ld1RhYklucHV0LnZhbHVlO1xuICAgICAgICAgICAgaWYgKG5ld1Byb2plY3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHsgaWQ6IHByb2plY3RzLmxlbmd0aCArIDEsIG5hbWU6IG5ld1Byb2plY3ROYW1lLCB0YXNrczogW10gfTtcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVRhYnModGFic0NvbnRhaW5lciwgdGFza3NDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUYWIgPSBuZXdQcm9qZWN0O1xuICAgICAgICAgICAgICAgIHRhc2tzRE9NLmRpc3BsYXlUYXNrcyhjdXJyZW50VGFiLCB0YXNrc0NvbnRhaW5lcik7XG5cbiAgICAgICAgICAgICAgICB0YWJzQ29udGFpbmVyLmNoaWxkTm9kZXMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRhYnNDb250YWluZXIubGFzdENoaWxkLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV3VGFiSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIC8vIEFkZCB0YWIgZm9yIGFkZGluZyBuZXcgcHJvamVjdHNcbiAgICAgICAgY29uc3QgYWRkVGFiID0gY3JlYXRlVGFiRWxlbWVudCh7IG5hbWU6IFwiK1wiIH0sIHRhYnNDb250YWluZXIsIHRhc2tzQ29udGFpbmVyKTtcbiAgICAgICAgYWRkVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBuZXdUYWJJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgbmV3VGFiRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgbmV3VGFiSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbmV3VGFiRm9ybS5hcHBlbmRDaGlsZChuZXdUYWJJbnB1dCk7XG5cbiAgICAgICAgYWRkVGFiLmFwcGVuZENoaWxkKG5ld1RhYkZvcm0pO1xuXG4gICAgICAgIHRhYnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFiKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgY3JlYXRlVGFicyB9O1xufSkoKTtcbiIsImltcG9ydCB7IGFkZFRhc2ssIGVkaXRUYXNrLCBkZWxldGVUYXNrIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuZXhwb3J0IGNvbnN0IHRhc2tzRE9NID0gKCgpID0+IHtcblxuXG4gICAgY29uc3QgZ2V0UHJpb3JpdHlDb2xvciA9IChwcmlvcml0eSkgPT4ge1xuICAgICAgICBcbiAgICAgICAgc3dpdGNoIChwcmlvcml0eSkge1xuICAgICAgICAgICAgY2FzZSBcImhpZ2hcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJyZWRcIjtcbiAgICAgICAgICAgIGNhc2UgXCJtZWRpdW1cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJvcmFuZ2VcIjtcbiAgICAgICAgICAgIGNhc2UgXCJsb3dcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJncmVlblwiO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJibGFja1wiO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZVRhc2tFbGVtZW50ID0gKHRhc2spID0+IHtcblxuICAgICAgICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWVsZW1lbnRcIik7XG5cbiAgICAgICAgY29uc3QgdGFza01haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrTWFpbi5jbGFzc0xpc3QuYWRkKFwidGFzay1tYWluXCIpO1xuXG4gICAgICAgIHRhc2tNYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0YXNrRGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gdGFza0RldGFpbHMuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIgPyBcImZsZXhcIiA6IFwibm9uZVwiO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHNcIik7XG4gICAgICAgIHRhc2tEZXRhaWxzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgICAgICBjb25zdCBwcmlvcml0eUNvbG9yID0gZ2V0UHJpb3JpdHlDb2xvcih0YXNrLnByaW9yaXR5KTtcbiAgICAgICAgdGFza01haW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcHJpb3JpdHlDb2xvcjtcblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwidGFzay1jaGVja2JveFwiKTtcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suY29tcGxldGVkO1xuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGFzay5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIHRhc2tNYWluLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XG4gICAgICAgICAgICB0YXNrTWFpbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZXlcIjtcbiAgICAgICAgfSBcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0YXNrLmNvbXBsZXRlZCA9IGNoZWNrYm94LmNoZWNrZWQ7XG4gICAgICAgICAgICBpZiAodGFzay5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICB0YXNrTWFpbi5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgICAgICAgICAgICAgIHRhc2tNYWluLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JleVwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXNrTWFpbi5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVkXCIpO1xuICAgICAgICAgICAgICAgIHRhc2tNYWluLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHByaW9yaXR5Q29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XG5cbiAgICAgICAgY29uc3QgbmFtZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgICAgbmFtZUZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBuYW1lRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IG5ld05hbWUgPSBuYW1lSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBpZiAobmV3TmFtZSkge1xuICAgICAgICAgICAgICAgIHRhc2submFtZSA9IG5ld05hbWU7XG4gICAgICAgICAgICAgICAgZWRpdFRhc2sodGFzaywgbmV3TmFtZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5kdWVEYXRlLCB0YXNrLnByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IG5ld05hbWU7XG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICBuYW1lRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBuYW1lSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgdGFza05hbWUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgICAgICAgICAgY29uc29sZS5sb2codGFzayk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICBuYW1lSW5wdXQuY2xhc3NMaXN0LmFkZChcInRhc2staW5wdXRcIik7XG4gICAgICAgIG5hbWVJbnB1dC52YWx1ZSA9IHRhc2submFtZTtcbiAgICAgICAgbmFtZUlucHV0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgICAgICBuYW1lRm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuXG4gICAgICAgIG5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0YXNrTmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgbmFtZUZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgbmFtZUlucHV0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGFza05hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRhc2tOYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIG5hbWVGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBuYW1lSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIG5hbWVJbnB1dC5mb2N1cygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgICAgZGVzY3JpcHRpb25Gb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVzY3JpcHRpb24tZm9ybVwiKVxuICAgICAgICBkZXNjcmlwdGlvbkZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkZXNjcmlwdGlvbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGlmIChuZXdEZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICBlZGl0VGFzayh0YXNrLCB0YXNrLm5hbWUsIG5ld0Rlc2NyaXB0aW9uLCB0YXNrLmR1ZURhdGUsIHRhc2sucHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiVGFzayBEZXNjcmlwdGlvbjogXCIgKyBuZXdEZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVzY3JpcHRpb25Gb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZChcInRhc2staW5wdXRcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgICAgICBkZXNjcmlwdGlvbkZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gICAgICAgIFxuICAgICAgICBkZXNjcmlwdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25Gb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgICAgICBpZiAodGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID09PSBcIlwiKSB7XG4gICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkRvdWJsZSBjbGljayB0byBhZGQgdGFzayBkZXNjcmlwdGlvblwiO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5mb2N1cygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkdWVEYXRlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgICBkdWVEYXRlRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGR1ZURhdGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdEdWVEYXRlID0gZHVlRGF0ZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgaWYgKG5ld0R1ZURhdGUpIHtcbiAgICAgICAgICAgICAgICB0YXNrLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgICAgICAgICAgICAgIGVkaXRUYXNrKHRhc2ssIHRhc2submFtZSwgdGFzay5kZXNjcmlwdGlvbiwgbmV3RHVlRGF0ZSwgdGFzay5wcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSBuZXdEdWVEYXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrKTtcblxuICAgICAgICAgICAgZHVlRGF0ZUZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHRhc2tEdWVEYXRlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgICAgICBkdWVEYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcInRhc2staW5wdXRcIik7XG4gICAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcbiAgICAgICAgZHVlRGF0ZUlucHV0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgICAgICBjb25zdCBkdWVEYXRlU3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZHVlRGF0ZVN1Ym1pdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIC8vIGR1ZURhdGVTdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkNoYW5nZSBkdWUgZGF0ZVwiO1xuXG4gICAgICAgIC8vIGR1ZURhdGVTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAvLyAgICAgLy8gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIGR1ZURhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIHRhc2tEdWVEYXRlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBkdWVEYXRlRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBkdWVEYXRlSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9KTtcblxuICAgICAgICBkdWVEYXRlRm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuICAgICAgICBkdWVEYXRlRm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlU3VibWl0QnV0dG9uKTtcblxuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcblxuICAgICAgICBpZiAodGFza0R1ZURhdGUudGV4dENvbnRlbnQgPT09IFwiXCIgfHwgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gXCJEb3VibGUgY2xpY2sgdG8gYWRkIGRhdGVcIjtcbiAgICAgICAgfTtcblxuICAgICAgICB0YXNrRHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGFza0R1ZURhdGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZHVlRGF0ZUZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGR1ZURhdGVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgZHVlRGF0ZUlucHV0LmZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBjb25zdCB0YXNrRGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgdGFza0RlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwieFwiO1xuICAgICAgICB0YXNrRGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1idXR0b25cIik7XG4gICAgICAgIHRhc2tEZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdGFzaz9cIikpIHtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBkZWxldGVUYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgIHRhc2tFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIHRhc2tNYWluLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgdGFza01haW4uYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuICAgICAgICB0YXNrTWFpbi5hcHBlbmRDaGlsZChuYW1lRm9ybSk7XG4gICAgICAgIHRhc2tNYWluLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcbiAgICAgICAgdGFza01haW4uYXBwZW5kQ2hpbGQoZHVlRGF0ZUZvcm0pO1xuICAgICAgICB0YXNrTWFpbi5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlQnV0dG9uKTtcblxuICAgICAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrTWFpbik7XG5cbiAgICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Gb3JtKTtcbiAgICAgICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0RldGFpbHMpO1xuXG4gICAgICAgIHJldHVybiB0YXNrRWxlbWVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgZGlzcGxheVRhc2tzID0gKGN1cnJlbnRUYWIsIHRhc2tzQ29udGFpbmVyKSA9PiB7XG4gICAgICAgIC8vIFd5Y3p5xZvEhyBwb3ByemVkbmllIHphZGFuaWFcblxuICAgICAgICBjb25zdCB0YXNrc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrc0xpc3QuY2xhc3NMaXN0LmFkZChcInRhc2tzLWxpc3RcIik7XG5cbiAgICAgICAgd2hpbGUgKHRhc2tzQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRhc2tzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2tzQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRG9kYWogb3Bpc3kga29sdW1uXG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gXCJUYXNrIG5hbWVcIjtcblxuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiVGFzayBkdWUgZGF0ZVwiO1xuXG4gICAgICAgIGNvbnN0IHRhc2tzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza3NIZWFkZXIuY2xhc3NMaXN0LmFkZChcInRhc2staGVhZGVyXCIpO1xuXG4gICAgICAgIHRhc2tzSGVhZGVyLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcbiAgICAgICAgdGFza3NIZWFkZXIuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuXG4gICAgICAgIHRhc2tzTGlzdC5hcHBlbmRDaGlsZCh0YXNrc0hlYWRlcik7XG5cblxuICAgICAgICAvLyBXecWbd2lldGwgemFkYW5pYSB6IGFrdHVhbG5laiB6YWvFgmFka2lcbiAgICAgICAgaWYgKGN1cnJlbnRUYWIpIHtcbiAgICAgICAgICAgIGN1cnJlbnRUYWIudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gY3JlYXRlVGFza0VsZW1lbnQodGFzayk7XG4gICAgICAgICAgICAgICAgdGFza3NMaXN0LmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIGlucHV0IGZvciBuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHlcblxuICAgICAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTmV3IHRhc2sgbmFtZVwiKTtcbiAgICAgICAgbmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWlucHV0XCIpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOZXcgdGFzayBkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFzay1pbnB1dFwiKTtcblxuICAgICAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICAgICAgZHVlRGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWlucHV0XCIpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICBwcmlvcml0eUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWlucHV0XCIpO1xuICAgICAgICBwcmlvcml0eUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIHBsYWNlaG9sZGVyLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiXCIpO1xuICAgICAgICBwbGFjZWhvbGRlci50ZXh0Q29udGVudCA9IFwiQ2xpY2sgdG8gc2VsZWN0IHByaW9yaXR5XCI7XG5cbiAgICAgICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiaGlnaFwiKTtcbiAgICAgICAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG5cbiAgICAgICAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBtZWRpdW1Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIm1lZGl1bVwiKTtcbiAgICAgICAgbWVkaXVtUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuXG4gICAgICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJsb3dcIik7XG4gICAgICAgIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJMb3dcIjtcblxuICAgICAgICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyKTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xuICAgICAgICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5KTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSk7XG5cbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgdGFza1wiO1xuICAgICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLWJ1dHRvblwiKTtcblxuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChuYW1lSW5wdXQudmFsdWUgJiYgcHJpb3JpdHlJbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFkZFRhc2soY3VycmVudFRhYiwgbmFtZUlucHV0LnZhbHVlLCBkZXNjcmlwdGlvbklucHV0LnZhbHVlLCBkdWVEYXRlSW5wdXQudmFsdWUsIHByaW9yaXR5SW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlUYXNrcyhjdXJyZW50VGFiLCB0YXNrc0NvbnRhaW5lcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiVGFzayBuYW1lIGFuZCBwcmlvcml0eSBhcmUgcmVxdWlyZWQhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB0YXNrSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrSW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2staW5wdXQtY29udGFpbmVyXCIpO1xuXG4gICAgICAgIHRhc2tJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuICAgICAgICB0YXNrSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gICAgICAgIHRhc2tJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuICAgICAgICB0YXNrSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG5cbiAgICAgICAgY29uc3QgYWRkTmV3VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGFkZE5ld1Rhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFkZC1uZXctdGFzay1jb250YWluZXJcIik7XG5cbiAgICAgICAgYWRkTmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSW5wdXRDb250YWluZXIpO1xuICAgICAgICBhZGROZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG5cbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza3NMaXN0KTtcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkTmV3VGFza0NvbnRhaW5lcik7XG5cbiAgICB9O1xuXG5cbiAgICByZXR1cm4geyBkaXNwbGF5VGFza3MgfTtcbn0pKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgdGFic0RPTSB9IGZyb20gJy4vZnVuY3Rpb25zL3RhYnNET00uanMnO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcblxuY29uc3QgdGFic0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudGFic0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YWJzLWNvbnRhaW5lcicpO1xuXG5jb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudGFza3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFza3MtY29udGFpbmVyJyk7XG5cbm1haW4uYXBwZW5kQ2hpbGQodGFic0NvbnRhaW5lcik7XG5tYWluLmFwcGVuZENoaWxkKHRhc2tzQ29udGFpbmVyKTtcblxudGFic0RPTS5jcmVhdGVUYWJzKHRhYnNDb250YWluZXIsIHRhc2tzQ29udGFpbmVyKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=