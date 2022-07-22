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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(//db.onlinewebfonts.com/c/123c7e674188c97798dd39cd41ff2d85?family=Brown+Regular);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n:root {\r\n  --text-article-todo: hsl(273, 9%, 84%);\r\n  --body-background-color: hsl(0, 0%, 85%);\r\n  --header-color: hsl(273, 9%, 32%);\r\n  --link-color: hsl(216, 37%, 42%);\r\n  --text-background-color: hsl(0, 0%, 94%);\r\n  --image-desc-color: hsl(0, 0%, 50%);\r\n  --text-published-color: hsl(0, 0%, 50%);\r\n  --text-published-date-color: hsl(0, 0%, 38%);\r\n  --text-paragraph-color: hsl(275, 7%, 40%);\r\n  --btn-read-more-background-color: hsl(273, 9%, 32%);\r\n  --btn-read-more-text-color: hsl(44, 11%, 81%);\r\n  --btn-read-more-hover-color: hsl(0, 0%, 100%);\r\n  --nav-background-color: hsl(273, 9%, 24%);\r\n  --nav-background-bright-color: hsl(273, 9%, 34%);\r\n  --nav-link-text-color: hsl(44, 11%, 81%);\r\n  --nav-link-text-hover-color: hsl(44, 11%, 91%);\r\n  --nav-link-text-underline-color: linear-gradient(\r\n    90deg,\r\n    hsl(359, 83%, 71%) 0%,\r\n    hsl(40, 100%, 70%) 30%,\r\n    hsl(180, 50%, 60%) 60%,\r\n    hsl(300, 33%, 70%) 90%\r\n  );\r\n}\r\n\r\nhtml {\r\n  font-size: 10px;\r\n  font-family: 'Brown Regular', sans-serif;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  background-color: var(--body-background-color);\r\n  min-height: 100%;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3 {\r\n  color: var(--header-color);\r\n}\r\n\r\nh1 {\r\n  font-size: 7.2rem;\r\n  line-height: 6.6rem;\r\n}\r\nh2 {\r\n  font-size: 4.8rem;\r\n  line-height: 4.4rem;\r\n}\r\n\r\nh3 {\r\n  font-size: 2.8rem;\r\n  line-height: 2.6rem;\r\n}\r\n\r\na {\r\n  color: var(--link-color);\r\n  text-decoration: none;\r\n}\r\n\r\n#container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nnav {\r\n  background-color: var(--nav-background-color);\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 40px;\r\n  min-height: 80px;\r\n}\r\n\r\n.navlink {\r\n  color: var(--nav-link-text-color);\r\n  font-size: 1.8rem;\r\n  transition: color 0.1s ease-out;\r\n  cursor: pointer;\r\n  user-select: none;\r\n  letter-spacing: 0.1rem;\r\n}\r\n\r\n.navlink:hover {\r\n  color: var(--nav-link-text-hover-color);\r\n}\r\n\r\n.navlink-highlight {\r\n  position: relative;\r\n}\r\n\r\n.navlink-highlight::before {\r\n  background: var(--nav-link-text-underline-color);\r\n  content: '';\r\n  position: absolute;\r\n  top: 28px;\r\n  width: 100%;\r\n  left: 0;\r\n  bottom: 0;\r\n  height: 2px;\r\n  border-radius: 2px;\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 40px;\r\n  padding: 40px 0px;\r\n}\r\n\r\n.project-summary-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  border-radius: 2px;\r\n  height: 400px;\r\n  width: 100%;\r\n  max-width: 980px;\r\n}\r\n\r\n.project-summary-text-container {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 40px;\r\n  gap: 40px;\r\n}\r\n\r\n.project-summary-img-container {\r\n  flex: 1;\r\n  overflow: hidden;\r\n  border-radius: 0px 2px 2px 0px;\r\n}\r\n\r\n.project-summary-header {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.btn-read-more {\r\n  margin-top: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 150px;\r\n  height: 44px;\r\n  border-radius: 2px;\r\n  background: var(--btn-read-more-background-color);\r\n  transition: color 0.1s ease-out;\r\n  cursor: pointer;\r\n  user-select: none;\r\n}\r\n\r\n.btn-read-more-text {\r\n  font-size: 1.8rem;\r\n  color: var(--text-background-color);\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.btn-read-more:hover {\r\n  background-color: var(--nav-background-bright-color);\r\n}\r\n\r\n#project-summary-img-this-site,\r\n#project-summary-img-weather,\r\n#about-img-me {\r\n  height: 500px;\r\n  width: 500px;\r\n  object-fit: cover;\r\n}\r\n\r\n#about-img-me {\r\n  object-fit: scale-down;\r\n}\r\n\r\n#project-summary-img-this-site {\r\n  object-position: top left;\r\n}\r\n\r\n#project-summary-img-weather,\r\n#about-img-me {\r\n  object-position: top right;\r\n}\r\n\r\n.project-summary-text-container,\r\n.article-container {\r\n  background-color: var(--text-background-color);\r\n}\r\n\r\n.article-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  max-width: 980px;\r\n  border-radius: 2px;\r\n  padding: 64px;\r\n  gap: 40px;\r\n}\r\n\r\n.article-header {\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.article-img-container {\r\n  margin-left: -64px;\r\n  margin-right: -64px;\r\n}\r\n\r\n.article-img {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 2px;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.article-img-text {\r\n  color: var(--image-desc-color);\r\n  text-align: center;\r\n}\r\n\r\n.article-text,\r\n.article-text-todo {\r\n  font-size: 1.8rem;\r\n  line-height: 3rem;\r\n  letter-spacing: 0em;\r\n  text-align: left;\r\n}\r\n\r\n.article-text {\r\n  padding: 0px 20px;\r\n}\r\n\r\n.article-text-todo {\r\n  background-color: var(--text-article-todo);\r\n  padding: 64px;\r\n}\r\n\r\n.article-img-text,\r\n.date-published,\r\n.date-date {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.date-published,\r\n.date-date {\r\n  letter-spacing: 0.1rem;\r\n}\r\n\r\n.date-published {\r\n  color: var(--text-published-color);\r\n}\r\n\r\n.date-date {\r\n  color: var(--text-published-date-color);\r\n}\r\n\r\n.project-summary-text,\r\n.article-text,\r\n.article-text-todo {\r\n  color: var(--text-paragraph-color);\r\n}\r\n\r\n.project-summary-text {\r\n  font-size: 1.8rem;\r\n  line-height: 3rem;\r\n  letter-spacing: 0em;\r\n  text-align: left;\r\n}\r\n\r\nul {\r\n  margin-left: 30px;\r\n}\r\nli {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.article-text-todo h3 {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  #content {\r\n    padding: 0px;\r\n    gap: 3px;\r\n  }\r\n  .project-summary-container {\r\n    height: 600px;\r\n    width: 100%;\r\n    max-width: 490px;\r\n    flex-direction: column-reverse;\r\n  }\r\n\r\n  .project-summary-text-container {\r\n    padding: 20px;\r\n    gap: 20px;\r\n  }\r\n\r\n  .article-container {\r\n    padding: 20px 0px;\r\n    gap: 20px;\r\n  }\r\n\r\n  .article-header-container {\r\n    padding: 0px 20px;\r\n  }\r\n\r\n  .article-img-container {\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n  }\r\n\r\n  .article-text {\r\n    padding: 0px 20px;\r\n  }\r\n\r\n  .article-text-todo {\r\n    padding: 20px;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 4.8rem;\r\n    line-height: 4.4rem;\r\n  }\r\n\r\n  .article-header {\r\n    margin-bottom: 10px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 280px) {\r\n  nav {\r\n    flex-direction: column;\r\n    padding: 10px 0px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url(//db.onlinewebfonts.com/c/123c7e674188c97798dd39cd41ff2d85?family=Brown+Regular);\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n:root {\r\n  --text-article-todo: hsl(273, 9%, 84%);\r\n  --body-background-color: hsl(0, 0%, 85%);\r\n  --header-color: hsl(273, 9%, 32%);\r\n  --link-color: hsl(216, 37%, 42%);\r\n  --text-background-color: hsl(0, 0%, 94%);\r\n  --image-desc-color: hsl(0, 0%, 50%);\r\n  --text-published-color: hsl(0, 0%, 50%);\r\n  --text-published-date-color: hsl(0, 0%, 38%);\r\n  --text-paragraph-color: hsl(275, 7%, 40%);\r\n  --btn-read-more-background-color: hsl(273, 9%, 32%);\r\n  --btn-read-more-text-color: hsl(44, 11%, 81%);\r\n  --btn-read-more-hover-color: hsl(0, 0%, 100%);\r\n  --nav-background-color: hsl(273, 9%, 24%);\r\n  --nav-background-bright-color: hsl(273, 9%, 34%);\r\n  --nav-link-text-color: hsl(44, 11%, 81%);\r\n  --nav-link-text-hover-color: hsl(44, 11%, 91%);\r\n  --nav-link-text-underline-color: linear-gradient(\r\n    90deg,\r\n    hsl(359, 83%, 71%) 0%,\r\n    hsl(40, 100%, 70%) 30%,\r\n    hsl(180, 50%, 60%) 60%,\r\n    hsl(300, 33%, 70%) 90%\r\n  );\r\n}\r\n\r\nhtml {\r\n  font-size: 10px;\r\n  font-family: 'Brown Regular', sans-serif;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  background-color: var(--body-background-color);\r\n  min-height: 100%;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3 {\r\n  color: var(--header-color);\r\n}\r\n\r\nh1 {\r\n  font-size: 7.2rem;\r\n  line-height: 6.6rem;\r\n}\r\nh2 {\r\n  font-size: 4.8rem;\r\n  line-height: 4.4rem;\r\n}\r\n\r\nh3 {\r\n  font-size: 2.8rem;\r\n  line-height: 2.6rem;\r\n}\r\n\r\na {\r\n  color: var(--link-color);\r\n  text-decoration: none;\r\n}\r\n\r\n#container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nnav {\r\n  background-color: var(--nav-background-color);\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 40px;\r\n  min-height: 80px;\r\n}\r\n\r\n.navlink {\r\n  color: var(--nav-link-text-color);\r\n  font-size: 1.8rem;\r\n  transition: color 0.1s ease-out;\r\n  cursor: pointer;\r\n  user-select: none;\r\n  letter-spacing: 0.1rem;\r\n}\r\n\r\n.navlink:hover {\r\n  color: var(--nav-link-text-hover-color);\r\n}\r\n\r\n.navlink-highlight {\r\n  position: relative;\r\n}\r\n\r\n.navlink-highlight::before {\r\n  background: var(--nav-link-text-underline-color);\r\n  content: '';\r\n  position: absolute;\r\n  top: 28px;\r\n  width: 100%;\r\n  left: 0;\r\n  bottom: 0;\r\n  height: 2px;\r\n  border-radius: 2px;\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 40px;\r\n  padding: 40px 0px;\r\n}\r\n\r\n.project-summary-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  border-radius: 2px;\r\n  height: 400px;\r\n  width: 100%;\r\n  max-width: 980px;\r\n}\r\n\r\n.project-summary-text-container {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 40px;\r\n  gap: 40px;\r\n}\r\n\r\n.project-summary-img-container {\r\n  flex: 1;\r\n  overflow: hidden;\r\n  border-radius: 0px 2px 2px 0px;\r\n}\r\n\r\n.project-summary-header {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.btn-read-more {\r\n  margin-top: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 150px;\r\n  height: 44px;\r\n  border-radius: 2px;\r\n  background: var(--btn-read-more-background-color);\r\n  transition: color 0.1s ease-out;\r\n  cursor: pointer;\r\n  user-select: none;\r\n}\r\n\r\n.btn-read-more-text {\r\n  font-size: 1.8rem;\r\n  color: var(--text-background-color);\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.btn-read-more:hover {\r\n  background-color: var(--nav-background-bright-color);\r\n}\r\n\r\n#project-summary-img-this-site,\r\n#project-summary-img-weather,\r\n#about-img-me {\r\n  height: 500px;\r\n  width: 500px;\r\n  object-fit: cover;\r\n}\r\n\r\n#about-img-me {\r\n  object-fit: scale-down;\r\n}\r\n\r\n#project-summary-img-this-site {\r\n  object-position: top left;\r\n}\r\n\r\n#project-summary-img-weather,\r\n#about-img-me {\r\n  object-position: top right;\r\n}\r\n\r\n.project-summary-text-container,\r\n.article-container {\r\n  background-color: var(--text-background-color);\r\n}\r\n\r\n.article-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  max-width: 980px;\r\n  border-radius: 2px;\r\n  padding: 64px;\r\n  gap: 40px;\r\n}\r\n\r\n.article-header {\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.article-img-container {\r\n  margin-left: -64px;\r\n  margin-right: -64px;\r\n}\r\n\r\n.article-img {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 2px;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.article-img-text {\r\n  color: var(--image-desc-color);\r\n  text-align: center;\r\n}\r\n\r\n.article-text,\r\n.article-text-todo {\r\n  font-size: 1.8rem;\r\n  line-height: 3rem;\r\n  letter-spacing: 0em;\r\n  text-align: left;\r\n}\r\n\r\n.article-text {\r\n  padding: 0px 20px;\r\n}\r\n\r\n.article-text-todo {\r\n  background-color: var(--text-article-todo);\r\n  padding: 64px;\r\n}\r\n\r\n.article-img-text,\r\n.date-published,\r\n.date-date {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.date-published,\r\n.date-date {\r\n  letter-spacing: 0.1rem;\r\n}\r\n\r\n.date-published {\r\n  color: var(--text-published-color);\r\n}\r\n\r\n.date-date {\r\n  color: var(--text-published-date-color);\r\n}\r\n\r\n.project-summary-text,\r\n.article-text,\r\n.article-text-todo {\r\n  color: var(--text-paragraph-color);\r\n}\r\n\r\n.project-summary-text {\r\n  font-size: 1.8rem;\r\n  line-height: 3rem;\r\n  letter-spacing: 0em;\r\n  text-align: left;\r\n}\r\n\r\nul {\r\n  margin-left: 30px;\r\n}\r\nli {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.article-text-todo h3 {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  #content {\r\n    padding: 0px;\r\n    gap: 3px;\r\n  }\r\n  .project-summary-container {\r\n    height: 600px;\r\n    width: 100%;\r\n    max-width: 490px;\r\n    flex-direction: column-reverse;\r\n  }\r\n\r\n  .project-summary-text-container {\r\n    padding: 20px;\r\n    gap: 20px;\r\n  }\r\n\r\n  .article-container {\r\n    padding: 20px 0px;\r\n    gap: 20px;\r\n  }\r\n\r\n  .article-header-container {\r\n    padding: 0px 20px;\r\n  }\r\n\r\n  .article-img-container {\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n  }\r\n\r\n  .article-text {\r\n    padding: 0px 20px;\r\n  }\r\n\r\n  .article-text-todo {\r\n    padding: 20px;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 4.8rem;\r\n    line-height: 4.4rem;\r\n  }\r\n\r\n  .article-header {\r\n    margin-bottom: 10px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 280px) {\r\n  nav {\r\n    flex-direction: column;\r\n    padding: 10px 0px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/html/about.html":
/*!*****************************!*\
  !*** ./src/html/about.html ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/me.jpg */ "./src/images/me.jpg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<div class=\"project-summary-container\">\r\n    <div class=\"project-summary-text-container\"\">\r\n        <div class=\"project-summary-header-container\">\r\n            <div class=\"project-summary-header\"><h2>Kristoffer Johansson</h2></div>\r\n            <div class=\"date\"><span class=\"date-published\">PUBLISHED: </span><span class=\"date-date\">JULY 1986</span></div>\r\n        </div>\r\n        <div class=\"project-summary-text\">\r\n            <p>The guy behind this personal site is me, Kristoffer. I live in Uppsala, Sweden and am currently working at Atlas Copco as an UX designer. <a href=\"https://www.linkedin.com/in/kristoffer-johansson-5460ba19a/\">Here</a> is my LinkedIn.</p>\r\n        </div>\r\n        <!-- <div id=\"thiswebsite\" class=\"btn-read-more btn-read-more-text\">Read more</div> -->\r\n    </div>\r\n    <div class=\"project-summary-img-container\">\r\n        <img id=\"about-img-me\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"></img>\r\n    </div>\r\n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/html/portfolio.html":
/*!*********************************!*\
  !*** ./src/html/portfolio.html ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/portfolio.jpg */ "./src/images/portfolio.jpg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<div class=\"article-container\">\r\n  <div class=\"article-header-container\">\r\n    <div class=\"article-header\">\r\n      <h1>PORTFOLIO</h1>\r\n    </div>\r\n    <div class=\"date\">\r\n      <span class=\"date-published\">PUBLISHED: </span\r\n      ><span class=\"date-date\">MARS 2022</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"article-img-container\">\r\n        <img class=\"article-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"></img>\r\n        <div class=\"article-img-text\">First page of my wonderful portfolio</div>\r\n  </div>\r\n  <div class=\"article-text\">\r\n    <p>I've designed user interfaces for fighter jets, trucks, buses,\r\n    production line machines and more since 2011. <a href=\"https://knightec-my.sharepoint.com/:b:/r/personal/kristoffer_johansson_knightec_se/Documents/CV%26Portfolio/kristoffer_portfolio_april2022_eng.pdf?csf=1&web=1&e=FIvnXe\" download=\"kristoffer_portfolio\">Download</a> a pdf of my portfolio for more information.\r\n    </p>\r\n  </div>\r\n</div>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/html/projects.html":
/*!********************************!*\
  !*** ./src/html/projects.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/code.jpg */ "./src/images/code.jpg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<div class=\"project-summary-container\">\r\n    <div class=\"project-summary-text-container\"\">\r\n        <div class=\"project-summary-header-container\">\r\n            <div class=\"project-summary-header\"><h2>THIS WEBSITE</h2></div>\r\n            <div class=\"date\"><span class=\"date-published\">PUBLISHED: </span><span class=\"date-date\">MAY 2022</span></div>\r\n        </div>\r\n        <div class=\"project-summary-text\"><p>I did my first webdesign course back in 2003 at IT-gymnasiet in Frolunda, Gothenburg and now 19 years later I'm hungry and back for more.</p></div>\r\n        <div id=\"thiswebsite\" class=\"btn-read-more btn-read-more-text\">Read more</div>\r\n    </div>\r\n    <div class=\"project-summary-img-container\">\r\n        <img id=\"project-summary-img-this-site\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"></img>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"project-summary-container\">\r\n    <div class=\"project-summary-text-container\"\">\r\n        <div class=\"project-summary-header-container\">\r\n            <div class=\"project-summary-header\"><h2>WEATHER APP</h2></div>\r\n            <div class=\"date\"><span class=\"date-published\">PUBLISHED: </span><span class=\"date-date\">MARS 2022</span></div>\r\n        </div>\r\n        <div class=\"project-summary-text\"><p>The time has come to burden the internet with yet another weather app.</p></div>\r\n        <div id=\"weatherapp\" class=\"btn-read-more btn-read-more-text\">Read more</div>\r\n    </div>\r\n    <div class=\"project-summary-img-container\">\r\n        <img id=\"project-summary-img-weather\" src=\"https://lh3.googleusercontent.com/F9KuJsUV9NCWOgPXcX5wdvhRPvfHuRXUnihNk93CScjoIqc-CnMuTVQx7kYLuy9aqRR58OD3o05T1_HZJ5JmhUdDSfn9onZ4xzjlR9AJs9CiNgt2Erxrhz3gniUu7cJqNpo-lX3W-Qw=w2400\"></img>\r\n        <!-- <img id=\"project-summary-img-weather\" src=\"../images/weather.png\"></img> -->\r\n    </div>\r\n</div>\r\n\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/html/thiswebsite.html":
/*!***********************************!*\
  !*** ./src/html/thiswebsite.html ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/code.jpg */ "./src/images/code.jpg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<div class=\"article-container\">\r\n  <div class=\"article-header-container\">\r\n    <div class=\"article-header\">\r\n      <h1>THIS WEBSITE</h1>\r\n    </div>\r\n    <div class=\"date\">\r\n      <span class=\"date-published\">PUBLISHED: </span\r\n      ><span class=\"date-date\">MARS 2022</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"article-img-container\">\r\n        <img class=\"article-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"></img>\r\n        <div class=\"article-img-text\">Should have stayed with the rainbow header</div>\r\n  </div>\r\n  <div class=\"article-text\">\r\n    <p>\r\n      I plan to use this website to publish stuff related to all my wonderful projects. Let's see how it goes.\r\n    </p>\r\n  </div>\r\n  <div class=\"article-text-todo\">\r\n    <h3>To do ✓</h3>\r\n    <p>\r\n      <ul>\r\n        <li><b>Responsive design</b></br>I'm not aiming for full compatibility with Netscape v1.0 on a pager, but one should be able to visit this website on a modern phone without any issues</li>\r\n        <li><b>Project navigation drop-down</b></br>The navigation link at the top of the pages named \"PROJECTS\" needs a dropdown that shows all published projects</li>\r\n        <li><b>Previous page functionality</b></br>So apparently doing the page with javascript has created some unplanned issues, like this one</li>\r\n      </ul>  \r\n    </p> \r\n  </div>\r\n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/html/weatherapp.html":
/*!**********************************!*\
  !*** ./src/html/weatherapp.html ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"article-container\">\r\n  <div class=\"article-header-container\">\r\n    <div class=\"article-header\">\r\n      <h1>WEATHER APP</h1>\r\n    </div>\r\n    <div class=\"date\">\r\n      <span class=\"date-published\">PUBLISHED: </span\r\n      ><span class=\"date-date\">MARS 2022</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"article-img-container\">\r\n        <img class=\"article-img\" src=\"https://lh3.googleusercontent.com/F9KuJsUV9NCWOgPXcX5wdvhRPvfHuRXUnihNk93CScjoIqc-CnMuTVQx7kYLuy9aqRR58OD3o05T1_HZJ5JmhUdDSfn9onZ4xzjlR9AJs9CiNgt2Erxrhz3gniUu7cJqNpo-lX3W-Qw=w2400\"></img>\r\n        <!-- <img class=\"article-img\" src=\"../images/weather.png\"></img> -->\r\n        <div class=\"article-img-text\">A cold rainy day it seems</div>\r\n  </div>\r\n  <div class=\"article-text\">\r\n    <p>\r\n      My weather app can be divided into three parts: the radar map, the chart, and current time & temperature. The radar map visualizes precipitation; where it is located and how much of it there is. The chart shows temperature, wind speed, precipitation and air pressure for the coming 12 hours. Visit <a href=\"https://github.com/odsmal/weather-app\">the GitHub repo</a> to see what the weather app is made of.\r\n    </p>\r\n  </div>\r\n  <div class=\"article-text-todo\">\r\n    <h3>To do ✓</h3>\r\n    <p>\r\n      <ul>\r\n        <li><b>Color mismatch</b></br>When overlapping the wind and temprature colors look horrendous - fix!</li>\r\n        <li><b>More radar images</b></br>Make it possible to select radar images from different time episodes. The app is currently only displaying the latest image fetched from SMHI.</li>\r\n        <li><b>Radar image color scale</b></br>Add a color scale to make sense of the radar data coloring.</li>\r\n        <li><b>Responsive design</b></br>Maybe make the app responsive. It is currently hardcoded for a 1280x720 display.</li>\r\n        <li><b>Set location</b></br>Right now the geolocation is hardcoded to coordinates in the Uppsala region. Would be sweet if the user could choose location of interest.</li>\r\n      </ul>  \r\n    </p> \r\n  </div>\r\n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
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

/***/ }),

/***/ "./src/images/code.jpg":
/*!*****************************!*\
  !*** ./src/images/code.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/f0259c2f63d0f305959e.jpg";

/***/ }),

/***/ "./src/images/me.jpg":
/*!***************************!*\
  !*** ./src/images/me.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/49f6b1da5cee86935b1b.jpg";

/***/ }),

/***/ "./src/images/portfolio.jpg":
/*!**********************************!*\
  !*** ./src/images/portfolio.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/e5698238fb6f9f369267.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _html_projects_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html/projects.html */ "./src/html/projects.html");
/* harmony import */ var _html_portfolio_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html/portfolio.html */ "./src/html/portfolio.html");
/* harmony import */ var _html_about_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html/about.html */ "./src/html/about.html");
/* harmony import */ var _html_weatherapp_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html/weatherapp.html */ "./src/html/weatherapp.html");
/* harmony import */ var _html_thiswebsite_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./html/thiswebsite.html */ "./src/html/thiswebsite.html");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");







class DisplayController {
  constructor() {
    this.addGlobalEventListener('click', '.btn-read-more', this.linkSelected);
    this.addGlobalEventListener('click', '.navlink', this.navLinkSelected);
    this.content = document.getElementById('content');
    this.oldHighlight = document.getElementById('projects');
  }

  addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, (e) => {
      if (e.target.matches(selector)) callback(e);
    });
  }

  linkSelected = (e) => {
    main.selectPage(e.target.id);
  };

  navLinkSelected = (e) => {
    this.highlightSelected(e);
    this.linkSelected(e);
  };

  highlightSelected(e) {
    this.oldHighlight.classList.remove('navlink-highlight');
    e.target.classList.add('navlink-highlight');
    this.oldHighlight = e.target;
  }

  showPage(content) {
    this.content.innerHTML = content;
  }
}

class Main {
  constructor() {
    this.htmlPages = {
      projects: _html_projects_html__WEBPACK_IMPORTED_MODULE_0__["default"],
      portfolio: _html_portfolio_html__WEBPACK_IMPORTED_MODULE_1__["default"],
      about: _html_about_html__WEBPACK_IMPORTED_MODULE_2__["default"],
      weatherapp: _html_weatherapp_html__WEBPACK_IMPORTED_MODULE_3__["default"],
      thiswebsite: _html_thiswebsite_html__WEBPACK_IMPORTED_MODULE_4__["default"],
    };
    this.displayController = new DisplayController();
    this.selectPage('projects');
  }

  selectPage(name) {
    if (name in this.htmlPages) {
      this.scrollToTop();
      const content = this.htmlPages[`${name}`];
      this.displayController.showPage(content);
    }
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}

const main = new Main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvLy4vc3JjL2h0bWwvYWJvdXQuaHRtbCIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvLy4vc3JjL2h0bWwvcG9ydGZvbGlvLmh0bWwiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby8uL3NyYy9odG1sL3Byb2plY3RzLmh0bWwiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby8uL3NyYy9odG1sL3RoaXN3ZWJzaXRlLmh0bWwiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby8uL3NyYy9odG1sL3dlYXRoZXJhcHAuaHRtbCIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vYy8xMjNjN2U2NzQxODhjOTc3OThkZDM5Y2Q0MWZmMmQ4NT9mYW1pbHk9QnJvd24rUmVndWxhcik7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLXRleHQtYXJ0aWNsZS10b2RvOiBoc2woMjczLCA5JSwgODQlKTtcXHJcXG4gIC0tYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDg1JSk7XFxyXFxuICAtLWhlYWRlci1jb2xvcjogaHNsKDI3MywgOSUsIDMyJSk7XFxyXFxuICAtLWxpbmstY29sb3I6IGhzbCgyMTYsIDM3JSwgNDIlKTtcXHJcXG4gIC0tdGV4dC1iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk0JSk7XFxyXFxuICAtLWltYWdlLWRlc2MtY29sb3I6IGhzbCgwLCAwJSwgNTAlKTtcXHJcXG4gIC0tdGV4dC1wdWJsaXNoZWQtY29sb3I6IGhzbCgwLCAwJSwgNTAlKTtcXHJcXG4gIC0tdGV4dC1wdWJsaXNoZWQtZGF0ZS1jb2xvcjogaHNsKDAsIDAlLCAzOCUpO1xcclxcbiAgLS10ZXh0LXBhcmFncmFwaC1jb2xvcjogaHNsKDI3NSwgNyUsIDQwJSk7XFxyXFxuICAtLWJ0bi1yZWFkLW1vcmUtYmFja2dyb3VuZC1jb2xvcjogaHNsKDI3MywgOSUsIDMyJSk7XFxyXFxuICAtLWJ0bi1yZWFkLW1vcmUtdGV4dC1jb2xvcjogaHNsKDQ0LCAxMSUsIDgxJSk7XFxyXFxuICAtLWJ0bi1yZWFkLW1vcmUtaG92ZXItY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxyXFxuICAtLW5hdi1iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjczLCA5JSwgMjQlKTtcXHJcXG4gIC0tbmF2LWJhY2tncm91bmQtYnJpZ2h0LWNvbG9yOiBoc2woMjczLCA5JSwgMzQlKTtcXHJcXG4gIC0tbmF2LWxpbmstdGV4dC1jb2xvcjogaHNsKDQ0LCAxMSUsIDgxJSk7XFxyXFxuICAtLW5hdi1saW5rLXRleHQtaG92ZXItY29sb3I6IGhzbCg0NCwgMTElLCA5MSUpO1xcclxcbiAgLS1uYXYtbGluay10ZXh0LXVuZGVybGluZS1jb2xvcjogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICA5MGRlZyxcXHJcXG4gICAgaHNsKDM1OSwgODMlLCA3MSUpIDAlLFxcclxcbiAgICBoc2woNDAsIDEwMCUsIDcwJSkgMzAlLFxcclxcbiAgICBoc2woMTgwLCA1MCUsIDYwJSkgNjAlLFxcclxcbiAgICBoc2woMzAwLCAzMyUsIDcwJSkgOTAlXFxyXFxuICApO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQnJvd24gUmVndWxhcicsIHNhbnMtc2VyaWY7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDcuMnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA2LjZyZW07XFxyXFxufVxcclxcbmgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogNC44cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDQuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgZm9udC1zaXplOiAyLjhyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMi42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yKTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA0MHB4O1xcclxcbiAgbWluLWhlaWdodDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmxpbmsge1xcclxcbiAgY29sb3I6IHZhcigtLW5hdi1saW5rLXRleHQtY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzIGVhc2Utb3V0O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2bGluazpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tbmF2LWxpbmstdGV4dC1ob3Zlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5uYXZsaW5rLWhpZ2hsaWdodCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZsaW5rLWhpZ2hsaWdodDo6YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLW5hdi1saW5rLXRleHQtdW5kZXJsaW5lLWNvbG9yKTtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAyOHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG4gIHBhZGRpbmc6IDQwcHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1zdW1tYXJ5LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIGhlaWdodDogNDAwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogOTgwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXN1bW1hcnktdGV4dC1jb250YWluZXIge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogNDBweDtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qtc3VtbWFyeS1pbWctY29udGFpbmVyIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMHB4IDJweCAycHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1zdW1tYXJ5LWhlYWRlciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXJlYWQtbW9yZSB7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGhlaWdodDogNDRweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJ0bi1yZWFkLW1vcmUtYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzIGVhc2Utb3V0O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5idG4tcmVhZC1tb3JlLXRleHQge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5idG4tcmVhZC1tb3JlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iYWNrZ3JvdW5kLWJyaWdodC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LXN1bW1hcnktaW1nLXRoaXMtc2l0ZSxcXHJcXG4jcHJvamVjdC1zdW1tYXJ5LWltZy13ZWF0aGVyLFxcclxcbiNhYm91dC1pbWctbWUge1xcclxcbiAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gIHdpZHRoOiA1MDBweDtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXQtaW1nLW1lIHtcXHJcXG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LXN1bW1hcnktaW1nLXRoaXMtc2l0ZSB7XFxyXFxuICBvYmplY3QtcG9zaXRpb246IHRvcCBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1zdW1tYXJ5LWltZy13ZWF0aGVyLFxcclxcbiNhYm91dC1pbWctbWUge1xcclxcbiAgb2JqZWN0LXBvc2l0aW9uOiB0b3AgcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXN1bW1hcnktdGV4dC1jb250YWluZXIsXFxyXFxuLmFydGljbGUtY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtYmFja2dyb3VuZC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LXdpZHRoOiA5ODBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIHBhZGRpbmc6IDY0cHg7XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLWhlYWRlciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1pbWctY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtNjRweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogLTY0cHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLWltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLWltZy10ZXh0IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1pbWFnZS1kZXNjLWNvbG9yKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGUtdGV4dCxcXHJcXG4uYXJ0aWNsZS10ZXh0LXRvZG8ge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBsaW5lLWhlaWdodDogM3JlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwZW07XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS10ZXh0IHtcXHJcXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS10ZXh0LXRvZG8ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1hcnRpY2xlLXRvZG8pO1xcclxcbiAgcGFkZGluZzogNjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGUtaW1nLXRleHQsXFxyXFxuLmRhdGUtcHVibGlzaGVkLFxcclxcbi5kYXRlLWRhdGUge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5kYXRlLXB1Ymxpc2hlZCxcXHJcXG4uZGF0ZS1kYXRlIHtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5kYXRlLXB1Ymxpc2hlZCB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1wdWJsaXNoZWQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZS1kYXRlIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXB1Ymxpc2hlZC1kYXRlLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qtc3VtbWFyeS10ZXh0LFxcclxcbi5hcnRpY2xlLXRleHQsXFxyXFxuLmFydGljbGUtdGV4dC10b2RvIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXBhcmFncmFwaC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXN1bW1hcnktdGV4dCB7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbn1cXHJcXG5saSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS10ZXh0LXRvZG8gaDMge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gICNjb250ZW50IHtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICBnYXA6IDNweDtcXHJcXG4gIH1cXHJcXG4gIC5wcm9qZWN0LXN1bW1hcnktY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiA2MDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogNDkwcHg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wcm9qZWN0LXN1bW1hcnktdGV4dC1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYXJ0aWNsZS1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFydGljbGUtaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFydGljbGUtaW1nLWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFydGljbGUtdGV4dCB7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFydGljbGUtdGV4dC10b2RvIHtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiA0LjhyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA0LjRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYXJ0aWNsZS1oZWFkZXIge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyODBweCkge1xcclxcbiAgbmF2IHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMTBweCAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7RUFHRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHNDQUFzQztFQUN0Qyx3Q0FBd0M7RUFDeEMsaUNBQWlDO0VBQ2pDLGdDQUFnQztFQUNoQyx3Q0FBd0M7RUFDeEMsbUNBQW1DO0VBQ25DLHVDQUF1QztFQUN2Qyw0Q0FBNEM7RUFDNUMseUNBQXlDO0VBQ3pDLG1EQUFtRDtFQUNuRCw2Q0FB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QUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTs7O0VBR0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixRQUFRO0VBQ1Y7RUFDQTtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGFBQWE7SUFDYixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsU0FBUztFQUNYOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLGlCQUFpQjtFQUNuQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKC8vZGIub25saW5ld2ViZm9udHMuY29tL2MvMTIzYzdlNjc0MTg4Yzk3Nzk4ZGQzOWNkNDFmZjJkODU/ZmFtaWx5PUJyb3duK1JlZ3VsYXIpO1xcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLXRleHQtYXJ0aWNsZS10b2RvOiBoc2woMjczLCA5JSwgODQlKTtcXHJcXG4gIC0tYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDg1JSk7XFxyXFxuICAtLWhlYWRlci1jb2xvcjogaHNsKDI3MywgOSUsIDMyJSk7XFxyXFxuICAtLWxpbmstY29sb3I6IGhzbCgyMTYsIDM3JSwgNDIlKTtcXHJcXG4gIC0tdGV4dC1iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk0JSk7XFxyXFxuICAtLWltYWdlLWRlc2MtY29sb3I6IGhzbCgwLCAwJSwgNTAlKTtcXHJcXG4gIC0tdGV4dC1wdWJsaXNoZWQtY29sb3I6IGhzbCgwLCAwJSwgNTAlKTtcXHJcXG4gIC0tdGV4dC1wdWJsaXNoZWQtZGF0ZS1jb2xvcjogaHNsKDAsIDAlLCAzOCUpO1xcclxcbiAgLS10ZXh0LXBhcmFncmFwaC1jb2xvcjogaHNsKDI3NSwgNyUsIDQwJSk7XFxyXFxuICAtLWJ0bi1yZWFkLW1vcmUtYmFja2dyb3VuZC1jb2xvcjogaHNsKDI3MywgOSUsIDMyJSk7XFxyXFxuICAtLWJ0bi1yZWFkLW1vcmUtdGV4dC1jb2xvcjogaHNsKDQ0LCAxMSUsIDgxJSk7XFxyXFxuICAtLWJ0bi1yZWFkLW1vcmUtaG92ZXItY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxyXFxuICAtLW5hdi1iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjczLCA5JSwgMjQlKTtcXHJcXG4gIC0tbmF2LWJhY2tncm91bmQtYnJpZ2h0LWNvbG9yOiBoc2woMjczLCA5JSwgMzQlKTtcXHJcXG4gIC0tbmF2LWxpbmstdGV4dC1jb2xvcjogaHNsKDQ0LCAxMSUsIDgxJSk7XFxyXFxuICAtLW5hdi1saW5rLXRleHQtaG92ZXItY29sb3I6IGhzbCg0NCwgMTElLCA5MSUpO1xcclxcbiAgLS1uYXYtbGluay10ZXh0LXVuZGVybGluZS1jb2xvcjogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICA5MGRlZyxcXHJcXG4gICAgaHNsKDM1OSwgODMlLCA3MSUpIDAlLFxcclxcbiAgICBoc2woNDAsIDEwMCUsIDcwJSkgMzAlLFxcclxcbiAgICBoc2woMTgwLCA1MCUsIDYwJSkgNjAlLFxcclxcbiAgICBoc2woMzAwLCAzMyUsIDcwJSkgOTAlXFxyXFxuICApO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQnJvd24gUmVndWxhcicsIHNhbnMtc2VyaWY7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDcuMnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA2LjZyZW07XFxyXFxufVxcclxcbmgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogNC44cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDQuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgZm9udC1zaXplOiAyLjhyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMi42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yKTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA0MHB4O1xcclxcbiAgbWluLWhlaWdodDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmxpbmsge1xcclxcbiAgY29sb3I6IHZhcigtLW5hdi1saW5rLXRleHQtY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzIGVhc2Utb3V0O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2bGluazpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tbmF2LWxpbmstdGV4dC1ob3Zlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5uYXZsaW5rLWhpZ2hsaWdodCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZsaW5rLWhpZ2hsaWdodDo6YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLW5hdi1saW5rLXRleHQtdW5kZXJsaW5lLWNvbG9yKTtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAyOHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG4gIHBhZGRpbmc6IDQwcHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1zdW1tYXJ5LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIGhlaWdodDogNDAwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogOTgwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXN1bW1hcnktdGV4dC1jb250YWluZXIge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogNDBweDtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qtc3VtbWFyeS1pbWctY29udGFpbmVyIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMHB4IDJweCAycHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1zdW1tYXJ5LWhlYWRlciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXJlYWQtbW9yZSB7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGhlaWdodDogNDRweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJ0bi1yZWFkLW1vcmUtYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzIGVhc2Utb3V0O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5idG4tcmVhZC1tb3JlLXRleHQge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5idG4tcmVhZC1tb3JlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iYWNrZ3JvdW5kLWJyaWdodC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LXN1bW1hcnktaW1nLXRoaXMtc2l0ZSxcXHJcXG4jcHJvamVjdC1zdW1tYXJ5LWltZy13ZWF0aGVyLFxcclxcbiNhYm91dC1pbWctbWUge1xcclxcbiAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gIHdpZHRoOiA1MDBweDtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXQtaW1nLW1lIHtcXHJcXG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LXN1bW1hcnktaW1nLXRoaXMtc2l0ZSB7XFxyXFxuICBvYmplY3QtcG9zaXRpb246IHRvcCBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1zdW1tYXJ5LWltZy13ZWF0aGVyLFxcclxcbiNhYm91dC1pbWctbWUge1xcclxcbiAgb2JqZWN0LXBvc2l0aW9uOiB0b3AgcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXN1bW1hcnktdGV4dC1jb250YWluZXIsXFxyXFxuLmFydGljbGUtY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtYmFja2dyb3VuZC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LXdpZHRoOiA5ODBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIHBhZGRpbmc6IDY0cHg7XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLWhlYWRlciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1pbWctY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtNjRweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogLTY0cHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLWltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLWltZy10ZXh0IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1pbWFnZS1kZXNjLWNvbG9yKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGUtdGV4dCxcXHJcXG4uYXJ0aWNsZS10ZXh0LXRvZG8ge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBsaW5lLWhlaWdodDogM3JlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwZW07XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS10ZXh0IHtcXHJcXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS10ZXh0LXRvZG8ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1hcnRpY2xlLXRvZG8pO1xcclxcbiAgcGFkZGluZzogNjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGUtaW1nLXRleHQsXFxyXFxuLmRhdGUtcHVibGlzaGVkLFxcclxcbi5kYXRlLWRhdGUge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5kYXRlLXB1Ymxpc2hlZCxcXHJcXG4uZGF0ZS1kYXRlIHtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5kYXRlLXB1Ymxpc2hlZCB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1wdWJsaXNoZWQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZS1kYXRlIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXB1Ymxpc2hlZC1kYXRlLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qtc3VtbWFyeS10ZXh0LFxcclxcbi5hcnRpY2xlLXRleHQsXFxyXFxuLmFydGljbGUtdGV4dC10b2RvIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXBhcmFncmFwaC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXN1bW1hcnktdGV4dCB7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbn1cXHJcXG5saSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS10ZXh0LXRvZG8gaDMge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gICNjb250ZW50IHtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICBnYXA6IDNweDtcXHJcXG4gIH1cXHJcXG4gIC5wcm9qZWN0LXN1bW1hcnktY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiA2MDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogNDkwcHg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wcm9qZWN0LXN1bW1hcnktdGV4dC1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYXJ0aWNsZS1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFydGljbGUtaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFydGljbGUtaW1nLWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFydGljbGUtdGV4dCB7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFydGljbGUtdGV4dC10b2RvIHtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiA0LjhyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA0LjRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYXJ0aWNsZS1oZWFkZXIge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyODBweCkge1xcclxcbiAgbmF2IHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMTBweCAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvbWUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwicHJvamVjdC1zdW1tYXJ5LWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3Qtc3VtbWFyeS10ZXh0LWNvbnRhaW5lclxcXCJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1zdW1tYXJ5LWhlYWRlci1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3Qtc3VtbWFyeS1oZWFkZXJcXFwiPjxoMj5LcmlzdG9mZmVyIEpvaGFuc3NvbjwvaDI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0ZVxcXCI+PHNwYW4gY2xhc3M9XFxcImRhdGUtcHVibGlzaGVkXFxcIj5QVUJMSVNIRUQ6IDwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiZGF0ZS1kYXRlXFxcIj5KVUxZIDE5ODY8L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3Qtc3VtbWFyeS10ZXh0XFxcIj5cXHJcXG4gICAgICAgICAgICA8cD5UaGUgZ3V5IGJlaGluZCB0aGlzIHBlcnNvbmFsIHNpdGUgaXMgbWUsIEtyaXN0b2ZmZXIuIEkgbGl2ZSBpbiBVcHBzYWxhLCBTd2VkZW4gYW5kIGFtIGN1cnJlbnRseSB3b3JraW5nIGF0IEF0bGFzIENvcGNvIGFzIGFuIFVYIGRlc2lnbmVyLiA8YSBocmVmPVxcXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4va3Jpc3RvZmZlci1qb2hhbnNzb24tNTQ2MGJhMTlhL1xcXCI+SGVyZTwvYT4gaXMgbXkgTGlua2VkSW4uPC9wPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8IS0tIDxkaXYgaWQ9XFxcInRoaXN3ZWJzaXRlXFxcIiBjbGFzcz1cXFwiYnRuLXJlYWQtbW9yZSBidG4tcmVhZC1tb3JlLXRleHRcXFwiPlJlYWQgbW9yZTwvZGl2PiAtLT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3Qtc3VtbWFyeS1pbWctY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgaWQ9XFxcImFib3V0LWltZy1tZVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCI+PC9pbWc+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvcG9ydGZvbGlvLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcImFydGljbGUtY29udGFpbmVyXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImFydGljbGUtaGVhZGVyLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFydGljbGUtaGVhZGVyXFxcIj5cXHJcXG4gICAgICA8aDE+UE9SVEZPTElPPC9oMT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImRhdGVcXFwiPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJkYXRlLXB1Ymxpc2hlZFxcXCI+UFVCTElTSEVEOiA8L3NwYW5cXHJcXG4gICAgICA+PHNwYW4gY2xhc3M9XFxcImRhdGUtZGF0ZVxcXCI+TUFSUyAyMDIyPC9zcGFuPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiYXJ0aWNsZS1pbWctY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgY2xhc3M9XFxcImFydGljbGUtaW1nXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIj48L2ltZz5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFydGljbGUtaW1nLXRleHRcXFwiPkZpcnN0IHBhZ2Ugb2YgbXkgd29uZGVyZnVsIHBvcnRmb2xpbzwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJhcnRpY2xlLXRleHRcXFwiPlxcclxcbiAgICA8cD5JJ3ZlIGRlc2lnbmVkIHVzZXIgaW50ZXJmYWNlcyBmb3IgZmlnaHRlciBqZXRzLCB0cnVja3MsIGJ1c2VzLFxcclxcbiAgICBwcm9kdWN0aW9uIGxpbmUgbWFjaGluZXMgYW5kIG1vcmUgc2luY2UgMjAxMS4gPGEgaHJlZj1cXFwiaHR0cHM6Ly9rbmlnaHRlYy1teS5zaGFyZXBvaW50LmNvbS86Yjovci9wZXJzb25hbC9rcmlzdG9mZmVyX2pvaGFuc3Nvbl9rbmlnaHRlY19zZS9Eb2N1bWVudHMvQ1YlMjZQb3J0Zm9saW8va3Jpc3RvZmZlcl9wb3J0Zm9saW9fYXByaWwyMDIyX2VuZy5wZGY/Y3NmPTEmd2ViPTEmZT1GSXZuWGVcXFwiIGRvd25sb2FkPVxcXCJrcmlzdG9mZmVyX3BvcnRmb2xpb1xcXCI+RG93bmxvYWQ8L2E+IGEgcGRmIG9mIG15IHBvcnRmb2xpbyBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cXHJcXG4gICAgPC9wPlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9jb2RlLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcInByb2plY3Qtc3VtbWFyeS1jb250YWluZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LXN1bW1hcnktdGV4dC1jb250YWluZXJcXFwiXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3Qtc3VtbWFyeS1oZWFkZXItY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LXN1bW1hcnktaGVhZGVyXFxcIj48aDI+VEhJUyBXRUJTSVRFPC9oMj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRlXFxcIj48c3BhbiBjbGFzcz1cXFwiZGF0ZS1wdWJsaXNoZWRcXFwiPlBVQkxJU0hFRDogPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJkYXRlLWRhdGVcXFwiPk1BWSAyMDIyPC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LXN1bW1hcnktdGV4dFxcXCI+PHA+SSBkaWQgbXkgZmlyc3Qgd2ViZGVzaWduIGNvdXJzZSBiYWNrIGluIDIwMDMgYXQgSVQtZ3ltbmFzaWV0IGluIEZyb2x1bmRhLCBHb3RoZW5idXJnIGFuZCBub3cgMTkgeWVhcnMgbGF0ZXIgSSdtIGh1bmdyeSBhbmQgYmFjayBmb3IgbW9yZS48L3A+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJ0aGlzd2Vic2l0ZVxcXCIgY2xhc3M9XFxcImJ0bi1yZWFkLW1vcmUgYnRuLXJlYWQtbW9yZS10ZXh0XFxcIj5SZWFkIG1vcmU8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3Qtc3VtbWFyeS1pbWctY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgaWQ9XFxcInByb2plY3Qtc3VtbWFyeS1pbWctdGhpcy1zaXRlXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIj48L2ltZz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwicHJvamVjdC1zdW1tYXJ5LWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3Qtc3VtbWFyeS10ZXh0LWNvbnRhaW5lclxcXCJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1zdW1tYXJ5LWhlYWRlci1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3Qtc3VtbWFyeS1oZWFkZXJcXFwiPjxoMj5XRUFUSEVSIEFQUDwvaDI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0ZVxcXCI+PHNwYW4gY2xhc3M9XFxcImRhdGUtcHVibGlzaGVkXFxcIj5QVUJMSVNIRUQ6IDwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiZGF0ZS1kYXRlXFxcIj5NQVJTIDIwMjI8L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3Qtc3VtbWFyeS10ZXh0XFxcIj48cD5UaGUgdGltZSBoYXMgY29tZSB0byBidXJkZW4gdGhlIGludGVybmV0IHdpdGggeWV0IGFub3RoZXIgd2VhdGhlciBhcHAuPC9wPjwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwid2VhdGhlcmFwcFxcXCIgY2xhc3M9XFxcImJ0bi1yZWFkLW1vcmUgYnRuLXJlYWQtbW9yZS10ZXh0XFxcIj5SZWFkIG1vcmU8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3Qtc3VtbWFyeS1pbWctY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgaWQ9XFxcInByb2plY3Qtc3VtbWFyeS1pbWctd2VhdGhlclxcXCIgc3JjPVxcXCJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vRjlLdUpzVVY5TkNXT2dQWGNYNXdkdmhSUHZmSHVSWFVuaWhOazkzQ1Njam9JcWMtQ25NdVRWUXg3a1lMdXk5YXFSUjU4T0QzbzA1VDFfSFpKNUptaFVkRFNmbjlvblo0eHpqbFI5QUpzOUNpTmd0MkVyeHJoejNnbmlVdTdjSnFOcG8tbFgzVy1Rdz13MjQwMFxcXCI+PC9pbWc+XFxyXFxuICAgICAgICA8IS0tIDxpbWcgaWQ9XFxcInByb2plY3Qtc3VtbWFyeS1pbWctd2VhdGhlclxcXCIgc3JjPVxcXCIuLi9pbWFnZXMvd2VhdGhlci5wbmdcXFwiPjwvaW1nPiAtLT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9jb2RlLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcImFydGljbGUtY29udGFpbmVyXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImFydGljbGUtaGVhZGVyLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFydGljbGUtaGVhZGVyXFxcIj5cXHJcXG4gICAgICA8aDE+VEhJUyBXRUJTSVRFPC9oMT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImRhdGVcXFwiPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJkYXRlLXB1Ymxpc2hlZFxcXCI+UFVCTElTSEVEOiA8L3NwYW5cXHJcXG4gICAgICA+PHNwYW4gY2xhc3M9XFxcImRhdGUtZGF0ZVxcXCI+TUFSUyAyMDIyPC9zcGFuPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiYXJ0aWNsZS1pbWctY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgY2xhc3M9XFxcImFydGljbGUtaW1nXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIj48L2ltZz5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFydGljbGUtaW1nLXRleHRcXFwiPlNob3VsZCBoYXZlIHN0YXllZCB3aXRoIHRoZSByYWluYm93IGhlYWRlcjwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJhcnRpY2xlLXRleHRcXFwiPlxcclxcbiAgICA8cD5cXHJcXG4gICAgICBJIHBsYW4gdG8gdXNlIHRoaXMgd2Vic2l0ZSB0byBwdWJsaXNoIHN0dWZmIHJlbGF0ZWQgdG8gYWxsIG15IHdvbmRlcmZ1bCBwcm9qZWN0cy4gTGV0J3Mgc2VlIGhvdyBpdCBnb2VzLlxcclxcbiAgICA8L3A+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImFydGljbGUtdGV4dC10b2RvXFxcIj5cXHJcXG4gICAgPGgzPlRvIGRvIOKckzwvaDM+XFxyXFxuICAgIDxwPlxcclxcbiAgICAgIDx1bD5cXHJcXG4gICAgICAgIDxsaT48Yj5SZXNwb25zaXZlIGRlc2lnbjwvYj48L2JyPkknbSBub3QgYWltaW5nIGZvciBmdWxsIGNvbXBhdGliaWxpdHkgd2l0aCBOZXRzY2FwZSB2MS4wIG9uIGEgcGFnZXIsIGJ1dCBvbmUgc2hvdWxkIGJlIGFibGUgdG8gdmlzaXQgdGhpcyB3ZWJzaXRlIG9uIGEgbW9kZXJuIHBob25lIHdpdGhvdXQgYW55IGlzc3VlczwvbGk+XFxyXFxuICAgICAgICA8bGk+PGI+UHJvamVjdCBuYXZpZ2F0aW9uIGRyb3AtZG93bjwvYj48L2JyPlRoZSBuYXZpZ2F0aW9uIGxpbmsgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZXMgbmFtZWQgXFxcIlBST0pFQ1RTXFxcIiBuZWVkcyBhIGRyb3Bkb3duIHRoYXQgc2hvd3MgYWxsIHB1Ymxpc2hlZCBwcm9qZWN0czwvbGk+XFxyXFxuICAgICAgICA8bGk+PGI+UHJldmlvdXMgcGFnZSBmdW5jdGlvbmFsaXR5PC9iPjwvYnI+U28gYXBwYXJlbnRseSBkb2luZyB0aGUgcGFnZSB3aXRoIGphdmFzY3JpcHQgaGFzIGNyZWF0ZWQgc29tZSB1bnBsYW5uZWQgaXNzdWVzLCBsaWtlIHRoaXMgb25lPC9saT5cXHJcXG4gICAgICA8L3VsPiAgXFxyXFxuICAgIDwvcD4gXFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwiYXJ0aWNsZS1jb250YWluZXJcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiYXJ0aWNsZS1oZWFkZXItY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYXJ0aWNsZS1oZWFkZXJcXFwiPlxcclxcbiAgICAgIDxoMT5XRUFUSEVSIEFQUDwvaDE+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkYXRlXFxcIj5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiZGF0ZS1wdWJsaXNoZWRcXFwiPlBVQkxJU0hFRDogPC9zcGFuXFxyXFxuICAgICAgPjxzcGFuIGNsYXNzPVxcXCJkYXRlLWRhdGVcXFwiPk1BUlMgMjAyMjwvc3Bhbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImFydGljbGUtaW1nLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICA8aW1nIGNsYXNzPVxcXCJhcnRpY2xlLWltZ1xcXCIgc3JjPVxcXCJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vRjlLdUpzVVY5TkNXT2dQWGNYNXdkdmhSUHZmSHVSWFVuaWhOazkzQ1Njam9JcWMtQ25NdVRWUXg3a1lMdXk5YXFSUjU4T0QzbzA1VDFfSFpKNUptaFVkRFNmbjlvblo0eHpqbFI5QUpzOUNpTmd0MkVyeHJoejNnbmlVdTdjSnFOcG8tbFgzVy1Rdz13MjQwMFxcXCI+PC9pbWc+XFxyXFxuICAgICAgICA8IS0tIDxpbWcgY2xhc3M9XFxcImFydGljbGUtaW1nXFxcIiBzcmM9XFxcIi4uL2ltYWdlcy93ZWF0aGVyLnBuZ1xcXCI+PC9pbWc+IC0tPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYXJ0aWNsZS1pbWctdGV4dFxcXCI+QSBjb2xkIHJhaW55IGRheSBpdCBzZWVtczwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJhcnRpY2xlLXRleHRcXFwiPlxcclxcbiAgICA8cD5cXHJcXG4gICAgICBNeSB3ZWF0aGVyIGFwcCBjYW4gYmUgZGl2aWRlZCBpbnRvIHRocmVlIHBhcnRzOiB0aGUgcmFkYXIgbWFwLCB0aGUgY2hhcnQsIGFuZCBjdXJyZW50IHRpbWUgJiB0ZW1wZXJhdHVyZS4gVGhlIHJhZGFyIG1hcCB2aXN1YWxpemVzIHByZWNpcGl0YXRpb247IHdoZXJlIGl0IGlzIGxvY2F0ZWQgYW5kIGhvdyBtdWNoIG9mIGl0IHRoZXJlIGlzLiBUaGUgY2hhcnQgc2hvd3MgdGVtcGVyYXR1cmUsIHdpbmQgc3BlZWQsIHByZWNpcGl0YXRpb24gYW5kIGFpciBwcmVzc3VyZSBmb3IgdGhlIGNvbWluZyAxMiBob3Vycy4gVmlzaXQgPGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL29kc21hbC93ZWF0aGVyLWFwcFxcXCI+dGhlIEdpdEh1YiByZXBvPC9hPiB0byBzZWUgd2hhdCB0aGUgd2VhdGhlciBhcHAgaXMgbWFkZSBvZi5cXHJcXG4gICAgPC9wPlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJhcnRpY2xlLXRleHQtdG9kb1xcXCI+XFxyXFxuICAgIDxoMz5UbyBkbyDinJM8L2gzPlxcclxcbiAgICA8cD5cXHJcXG4gICAgICA8dWw+XFxyXFxuICAgICAgICA8bGk+PGI+Q29sb3IgbWlzbWF0Y2g8L2I+PC9icj5XaGVuIG92ZXJsYXBwaW5nIHRoZSB3aW5kIGFuZCB0ZW1wcmF0dXJlIGNvbG9ycyBsb29rIGhvcnJlbmRvdXMgLSBmaXghPC9saT5cXHJcXG4gICAgICAgIDxsaT48Yj5Nb3JlIHJhZGFyIGltYWdlczwvYj48L2JyPk1ha2UgaXQgcG9zc2libGUgdG8gc2VsZWN0IHJhZGFyIGltYWdlcyBmcm9tIGRpZmZlcmVudCB0aW1lIGVwaXNvZGVzLiBUaGUgYXBwIGlzIGN1cnJlbnRseSBvbmx5IGRpc3BsYXlpbmcgdGhlIGxhdGVzdCBpbWFnZSBmZXRjaGVkIGZyb20gU01ISS48L2xpPlxcclxcbiAgICAgICAgPGxpPjxiPlJhZGFyIGltYWdlIGNvbG9yIHNjYWxlPC9iPjwvYnI+QWRkIGEgY29sb3Igc2NhbGUgdG8gbWFrZSBzZW5zZSBvZiB0aGUgcmFkYXIgZGF0YSBjb2xvcmluZy48L2xpPlxcclxcbiAgICAgICAgPGxpPjxiPlJlc3BvbnNpdmUgZGVzaWduPC9iPjwvYnI+TWF5YmUgbWFrZSB0aGUgYXBwIHJlc3BvbnNpdmUuIEl0IGlzIGN1cnJlbnRseSBoYXJkY29kZWQgZm9yIGEgMTI4MHg3MjAgZGlzcGxheS48L2xpPlxcclxcbiAgICAgICAgPGxpPjxiPlNldCBsb2NhdGlvbjwvYj48L2JyPlJpZ2h0IG5vdyB0aGUgZ2VvbG9jYXRpb24gaXMgaGFyZGNvZGVkIHRvIGNvb3JkaW5hdGVzIGluIHRoZSBVcHBzYWxhIHJlZ2lvbi4gV291bGQgYmUgc3dlZXQgaWYgdGhlIHVzZXIgY291bGQgY2hvb3NlIGxvY2F0aW9uIG9mIGludGVyZXN0LjwvbGk+XFxyXFxuICAgICAgPC91bD4gIFxcclxcbiAgICA8L3A+IFxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm1heWJlTmVlZFF1b3RlcyAmJiAvW1xcdFxcblxcZlxcciBcIic9PD5gXS8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IHByb2plY3RzIGZyb20gJy4vaHRtbC9wcm9qZWN0cy5odG1sJztcclxuaW1wb3J0IHBvcnRmb2xpbyBmcm9tICcuL2h0bWwvcG9ydGZvbGlvLmh0bWwnO1xyXG5pbXBvcnQgYWJvdXQgZnJvbSAnLi9odG1sL2Fib3V0Lmh0bWwnO1xyXG5pbXBvcnQgd2VhdGhlcmFwcCBmcm9tICcuL2h0bWwvd2VhdGhlcmFwcC5odG1sJztcclxuaW1wb3J0IHRoaXN3ZWJzaXRlIGZyb20gJy4vaHRtbC90aGlzd2Vic2l0ZS5odG1sJztcclxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5cclxuY2xhc3MgRGlzcGxheUNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5hZGRHbG9iYWxFdmVudExpc3RlbmVyKCdjbGljaycsICcuYnRuLXJlYWQtbW9yZScsIHRoaXMubGlua1NlbGVjdGVkKTtcclxuICAgIHRoaXMuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcignY2xpY2snLCAnLm5hdmxpbmsnLCB0aGlzLm5hdkxpbmtTZWxlY3RlZCk7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgdGhpcy5vbGRIaWdobGlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKTtcclxuICB9XHJcblxyXG4gIGFkZEdsb2JhbEV2ZW50TGlzdGVuZXIodHlwZSwgc2VsZWN0b3IsIGNhbGxiYWNrKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKHNlbGVjdG9yKSkgY2FsbGJhY2soZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxpbmtTZWxlY3RlZCA9IChlKSA9PiB7XHJcbiAgICBtYWluLnNlbGVjdFBhZ2UoZS50YXJnZXQuaWQpO1xyXG4gIH07XHJcblxyXG4gIG5hdkxpbmtTZWxlY3RlZCA9IChlKSA9PiB7XHJcbiAgICB0aGlzLmhpZ2hsaWdodFNlbGVjdGVkKGUpO1xyXG4gICAgdGhpcy5saW5rU2VsZWN0ZWQoZSk7XHJcbiAgfTtcclxuXHJcbiAgaGlnaGxpZ2h0U2VsZWN0ZWQoZSkge1xyXG4gICAgdGhpcy5vbGRIaWdobGlnaHQuY2xhc3NMaXN0LnJlbW92ZSgnbmF2bGluay1oaWdobGlnaHQnKTtcclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ25hdmxpbmstaGlnaGxpZ2h0Jyk7XHJcbiAgICB0aGlzLm9sZEhpZ2hsaWdodCA9IGUudGFyZ2V0O1xyXG4gIH1cclxuXHJcbiAgc2hvd1BhZ2UoY29udGVudCkge1xyXG4gICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBNYWluIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaHRtbFBhZ2VzID0ge1xyXG4gICAgICBwcm9qZWN0cyxcclxuICAgICAgcG9ydGZvbGlvLFxyXG4gICAgICBhYm91dCxcclxuICAgICAgd2VhdGhlcmFwcCxcclxuICAgICAgdGhpc3dlYnNpdGUsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5kaXNwbGF5Q29udHJvbGxlciA9IG5ldyBEaXNwbGF5Q29udHJvbGxlcigpO1xyXG4gICAgdGhpcy5zZWxlY3RQYWdlKCdwcm9qZWN0cycpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0UGFnZShuYW1lKSB7XHJcbiAgICBpZiAobmFtZSBpbiB0aGlzLmh0bWxQYWdlcykge1xyXG4gICAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmh0bWxQYWdlc1tgJHtuYW1lfWBdO1xyXG4gICAgICB0aGlzLmRpc3BsYXlDb250cm9sbGVyLnNob3dQYWdlKGNvbnRlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2Nyb2xsVG9Ub3AoKSB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYWluID0gbmV3IE1haW4oKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9