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
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n:root {\r\n  --text-article-todo: hsl(273, 9%, 84%);\r\n  --body-background-color: hsl(0, 0%, 85%);\r\n  --header-color: hsl(273, 9%, 32%);\r\n  --link-color: hsl(216, 37%, 42%);\r\n  --text-background-color: hsl(0, 0%, 94%);\r\n  --image-desc-color: hsl(0, 0%, 31%);\r\n  --text-published-color: hsl(0, 0%, 51%);\r\n  --text-published-date-color: hsl(0, 0%, 38%);\r\n  --text-paragraph-color: hsl(275, 7%, 30%);\r\n  --btn-read-more-background-color: hsl(273, 9%, 32%);\r\n  --btn-read-more-text-color: hsl(44, 11%, 81%);\r\n  --btn-read-more-hover-color: hsl(0, 0%, 100%);\r\n  --nav-background-color: hsl(273, 9%, 24%);\r\n  --nav-background-bright-color: hsl(273, 9%, 34%);\r\n  --nav-link-text-color: hsl(44, 11%, 81%);\r\n  --nav-link-text-hover-color: hsl(44, 11%, 91%);\r\n  --nav-link-text-underline-color: linear-gradient(\r\n    90deg,\r\n    hsl(359, 83%, 71%) 0%,\r\n    hsl(40, 100%, 70%) 30%,\r\n    hsl(180, 50%, 60%) 60%,\r\n    hsl(300, 33%, 70%) 90%\r\n  );\r\n}\r\n\r\nhtml {\r\n  font-size: 10px;\r\n  font-family: 'Brown Regular', sans-serif;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  background-color: var(--body-background-color);\r\n  min-height: 100%;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3 {\r\n  color: var(--header-color);\r\n}\r\n\r\nh1 {\r\n  font-size: 7.2rem;\r\n  line-height: 6.6rem;\r\n}\r\nh2 {\r\n  font-size: 4.8rem;\r\n  line-height: 4.4rem;\r\n}\r\n\r\nh3 {\r\n  font-size: 2.8rem;\r\n  line-height: 2.6rem;\r\n}\r\n\r\na {\r\n  color: var(--link-color);\r\n  text-decoration: none;\r\n}\r\n\r\n#container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nnav {\r\n  background-color: var(--nav-background-color);\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 40px;\r\n  min-height: 80px;\r\n}\r\n\r\n.navlink {\r\n  color: var(--nav-link-text-color);\r\n  font-size: 1.8rem;\r\n  transition: color 0.1s ease-out;\r\n  cursor: pointer;\r\n  user-select: none;\r\n  letter-spacing: 0.1rem;\r\n}\r\n\r\n.navlink:hover {\r\n  color: var(--nav-link-text-hover-color);\r\n}\r\n\r\n.navlink-highlight {\r\n  position: relative;\r\n}\r\n\r\n.navlink-highlight::before {\r\n  background: var(--nav-link-text-underline-color);\r\n  content: '';\r\n  position: absolute;\r\n  top: 28px;\r\n  width: 100%;\r\n  left: 0;\r\n  bottom: 0;\r\n  height: 2px;\r\n  border-radius: 2px;\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 40px;\r\n  padding: 40px 0px;\r\n}\r\n\r\n.project-summary-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  border-radius: 2px;\r\n  height: 400px;\r\n  width: 100%;\r\n  max-width: 980px;\r\n}\r\n\r\n.project-summary-text-container {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 40px;\r\n  gap: 40px;\r\n}\r\n\r\n.project-summary-img-container {\r\n  flex: 1;\r\n  overflow: hidden;\r\n  border-radius: 0px 2px 2px 0px;\r\n}\r\n\r\n.project-summary-header {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.btn-read-more {\r\n  margin-top: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 150px;\r\n  height: 44px;\r\n  border-radius: 2px;\r\n  background: var(--btn-read-more-background-color);\r\n  transition: color 0.1s ease-out;\r\n  cursor: pointer;\r\n  user-select: none;\r\n}\r\n\r\n.btn-read-more-text {\r\n  font-size: 1.8rem;\r\n  color: var(--text-background-color);\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.btn-read-more:hover {\r\n  background-color: var(--nav-background-bright-color);\r\n}\r\n\r\n#project-summary-img-this-site,\r\n#project-summary-img-weather,\r\n#about-img-me {\r\n  height: 500px;\r\n  width: 500px;\r\n  object-fit: cover;\r\n}\r\n\r\n#about-img-me {\r\n  object-fit: scale-down;\r\n}\r\n\r\n#project-summary-img-this-site {\r\n  object-position: top left;\r\n}\r\n\r\n#project-summary-img-weather,\r\n#about-img-me {\r\n  object-position: top right;\r\n}\r\n\r\n.project-summary-text-container,\r\n.article-container {\r\n  background-color: var(--text-background-color);\r\n}\r\n\r\n.article-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  max-width: 980px;\r\n  border-radius: 2px;\r\n  padding: 64px;\r\n  gap: 40px;\r\n}\r\n\r\n.article-header {\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.article-img-container {\r\n  margin-left: -64px;\r\n  margin-right: -64px;\r\n}\r\n\r\n.article-img {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 2px;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.article-img-text {\r\n  color: var(--image-desc-color);\r\n  text-align: center;\r\n}\r\n\r\n.article-text,\r\n.article-text-todo {\r\n  font-size: 1.8rem;\r\n  line-height: 3rem;\r\n  letter-spacing: 0em;\r\n  text-align: left;\r\n}\r\n\r\n.article-text {\r\n  padding: 0px 20px;\r\n}\r\n\r\n.article-text-todo {\r\n  background-color: var(--text-article-todo);\r\n  padding: 64px;\r\n}\r\n\r\n.article-img-text,\r\n.date-published,\r\n.date-date {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.date-published,\r\n.date-date {\r\n  letter-spacing: 0.1rem;\r\n}\r\n\r\n.date-published {\r\n  color: var(--text-published-color);\r\n}\r\n\r\n.date-date {\r\n  color: var(--text-published-date-color);\r\n}\r\n\r\n.project-summary-text,\r\n.article-text,\r\n.article-text-todo {\r\n  color: var(--text-paragraph-color);\r\n}\r\n\r\n.project-summary-text {\r\n  font-size: 1.8rem;\r\n  line-height: 3rem;\r\n  letter-spacing: 0em;\r\n  text-align: left;\r\n}\r\n\r\nul {\r\n  margin-left: 30px;\r\n}\r\nli {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.article-text-todo h3 {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  #content {\r\n    padding: 0px;\r\n    gap: 3px;\r\n  }\r\n  .project-summary-container {\r\n    height: 600px;\r\n    width: 100%;\r\n    max-width: 490px;\r\n    flex-direction: column-reverse;\r\n  }\r\n\r\n  .project-summary-text-container {\r\n    padding: 20px;\r\n    gap: 20px;\r\n  }\r\n\r\n  .article-container {\r\n    padding: 20px 0px;\r\n    gap: 20px;\r\n  }\r\n\r\n  .article-header-container {\r\n    padding: 0px 20px;\r\n  }\r\n\r\n  .article-img-container {\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n  }\r\n\r\n  .article-text {\r\n    padding: 0px 20px;\r\n  }\r\n\r\n  .article-text-todo {\r\n    padding: 20px;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 4.8rem;\r\n    line-height: 4.4rem;\r\n  }\r\n\r\n  .article-header {\r\n    margin-bottom: 10px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 280px) {\r\n  nav {\r\n    flex-direction: column;\r\n    padding: 10px 0px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url(//db.onlinewebfonts.com/c/123c7e674188c97798dd39cd41ff2d85?family=Brown+Regular);\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n:root {\r\n  --text-article-todo: hsl(273, 9%, 84%);\r\n  --body-background-color: hsl(0, 0%, 85%);\r\n  --header-color: hsl(273, 9%, 32%);\r\n  --link-color: hsl(216, 37%, 42%);\r\n  --text-background-color: hsl(0, 0%, 94%);\r\n  --image-desc-color: hsl(0, 0%, 31%);\r\n  --text-published-color: hsl(0, 0%, 51%);\r\n  --text-published-date-color: hsl(0, 0%, 38%);\r\n  --text-paragraph-color: hsl(275, 7%, 30%);\r\n  --btn-read-more-background-color: hsl(273, 9%, 32%);\r\n  --btn-read-more-text-color: hsl(44, 11%, 81%);\r\n  --btn-read-more-hover-color: hsl(0, 0%, 100%);\r\n  --nav-background-color: hsl(273, 9%, 24%);\r\n  --nav-background-bright-color: hsl(273, 9%, 34%);\r\n  --nav-link-text-color: hsl(44, 11%, 81%);\r\n  --nav-link-text-hover-color: hsl(44, 11%, 91%);\r\n  --nav-link-text-underline-color: linear-gradient(\r\n    90deg,\r\n    hsl(359, 83%, 71%) 0%,\r\n    hsl(40, 100%, 70%) 30%,\r\n    hsl(180, 50%, 60%) 60%,\r\n    hsl(300, 33%, 70%) 90%\r\n  );\r\n}\r\n\r\nhtml {\r\n  font-size: 10px;\r\n  font-family: 'Brown Regular', sans-serif;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  background-color: var(--body-background-color);\r\n  min-height: 100%;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3 {\r\n  color: var(--header-color);\r\n}\r\n\r\nh1 {\r\n  font-size: 7.2rem;\r\n  line-height: 6.6rem;\r\n}\r\nh2 {\r\n  font-size: 4.8rem;\r\n  line-height: 4.4rem;\r\n}\r\n\r\nh3 {\r\n  font-size: 2.8rem;\r\n  line-height: 2.6rem;\r\n}\r\n\r\na {\r\n  color: var(--link-color);\r\n  text-decoration: none;\r\n}\r\n\r\n#container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nnav {\r\n  background-color: var(--nav-background-color);\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 40px;\r\n  min-height: 80px;\r\n}\r\n\r\n.navlink {\r\n  color: var(--nav-link-text-color);\r\n  font-size: 1.8rem;\r\n  transition: color 0.1s ease-out;\r\n  cursor: pointer;\r\n  user-select: none;\r\n  letter-spacing: 0.1rem;\r\n}\r\n\r\n.navlink:hover {\r\n  color: var(--nav-link-text-hover-color);\r\n}\r\n\r\n.navlink-highlight {\r\n  position: relative;\r\n}\r\n\r\n.navlink-highlight::before {\r\n  background: var(--nav-link-text-underline-color);\r\n  content: '';\r\n  position: absolute;\r\n  top: 28px;\r\n  width: 100%;\r\n  left: 0;\r\n  bottom: 0;\r\n  height: 2px;\r\n  border-radius: 2px;\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 40px;\r\n  padding: 40px 0px;\r\n}\r\n\r\n.project-summary-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  border-radius: 2px;\r\n  height: 400px;\r\n  width: 100%;\r\n  max-width: 980px;\r\n}\r\n\r\n.project-summary-text-container {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 40px;\r\n  gap: 40px;\r\n}\r\n\r\n.project-summary-img-container {\r\n  flex: 1;\r\n  overflow: hidden;\r\n  border-radius: 0px 2px 2px 0px;\r\n}\r\n\r\n.project-summary-header {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.btn-read-more {\r\n  margin-top: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 150px;\r\n  height: 44px;\r\n  border-radius: 2px;\r\n  background: var(--btn-read-more-background-color);\r\n  transition: color 0.1s ease-out;\r\n  cursor: pointer;\r\n  user-select: none;\r\n}\r\n\r\n.btn-read-more-text {\r\n  font-size: 1.8rem;\r\n  color: var(--text-background-color);\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.btn-read-more:hover {\r\n  background-color: var(--nav-background-bright-color);\r\n}\r\n\r\n#project-summary-img-this-site,\r\n#project-summary-img-weather,\r\n#about-img-me {\r\n  height: 500px;\r\n  width: 500px;\r\n  object-fit: cover;\r\n}\r\n\r\n#about-img-me {\r\n  object-fit: scale-down;\r\n}\r\n\r\n#project-summary-img-this-site {\r\n  object-position: top left;\r\n}\r\n\r\n#project-summary-img-weather,\r\n#about-img-me {\r\n  object-position: top right;\r\n}\r\n\r\n.project-summary-text-container,\r\n.article-container {\r\n  background-color: var(--text-background-color);\r\n}\r\n\r\n.article-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  max-width: 980px;\r\n  border-radius: 2px;\r\n  padding: 64px;\r\n  gap: 40px;\r\n}\r\n\r\n.article-header {\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.article-img-container {\r\n  margin-left: -64px;\r\n  margin-right: -64px;\r\n}\r\n\r\n.article-img {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 2px;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.article-img-text {\r\n  color: var(--image-desc-color);\r\n  text-align: center;\r\n}\r\n\r\n.article-text,\r\n.article-text-todo {\r\n  font-size: 1.8rem;\r\n  line-height: 3rem;\r\n  letter-spacing: 0em;\r\n  text-align: left;\r\n}\r\n\r\n.article-text {\r\n  padding: 0px 20px;\r\n}\r\n\r\n.article-text-todo {\r\n  background-color: var(--text-article-todo);\r\n  padding: 64px;\r\n}\r\n\r\n.article-img-text,\r\n.date-published,\r\n.date-date {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.date-published,\r\n.date-date {\r\n  letter-spacing: 0.1rem;\r\n}\r\n\r\n.date-published {\r\n  color: var(--text-published-color);\r\n}\r\n\r\n.date-date {\r\n  color: var(--text-published-date-color);\r\n}\r\n\r\n.project-summary-text,\r\n.article-text,\r\n.article-text-todo {\r\n  color: var(--text-paragraph-color);\r\n}\r\n\r\n.project-summary-text {\r\n  font-size: 1.8rem;\r\n  line-height: 3rem;\r\n  letter-spacing: 0em;\r\n  text-align: left;\r\n}\r\n\r\nul {\r\n  margin-left: 30px;\r\n}\r\nli {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.article-text-todo h3 {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  #content {\r\n    padding: 0px;\r\n    gap: 3px;\r\n  }\r\n  .project-summary-container {\r\n    height: 600px;\r\n    width: 100%;\r\n    max-width: 490px;\r\n    flex-direction: column-reverse;\r\n  }\r\n\r\n  .project-summary-text-container {\r\n    padding: 20px;\r\n    gap: 20px;\r\n  }\r\n\r\n  .article-container {\r\n    padding: 20px 0px;\r\n    gap: 20px;\r\n  }\r\n\r\n  .article-header-container {\r\n    padding: 0px 20px;\r\n  }\r\n\r\n  .article-img-container {\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n  }\r\n\r\n  .article-text {\r\n    padding: 0px 20px;\r\n  }\r\n\r\n  .article-text-todo {\r\n    padding: 20px;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 4.8rem;\r\n    line-height: 4.4rem;\r\n  }\r\n\r\n  .article-header {\r\n    margin-bottom: 10px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 280px) {\r\n  nav {\r\n    flex-direction: column;\r\n    padding: 10px 0px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error("Cannot find module '../images/weather.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var code = "<div class=\"project-summary-container\">\r\n    <div class=\"project-summary-text-container\"\">\r\n        <div class=\"project-summary-header-container\">\r\n            <div class=\"project-summary-header\"><h2>THIS WEBSITE</h2></div>\r\n            <div class=\"date\"><span class=\"date-published\">PUBLISHED: </span><span class=\"date-date\">MAY 2022</span></div>\r\n        </div>\r\n        <div class=\"project-summary-text\"><p>I did my first webdesign course back in 2003 at IT-gymnasiet in Frolunda, Gothenburg and now 19 years later I'm hungry and back for more.</p></div>\r\n        <div id=\"thiswebsite\" class=\"btn-read-more btn-read-more-text\">Read more</div>\r\n    </div>\r\n    <div class=\"project-summary-img-container\">\r\n        <img id=\"project-summary-img-this-site\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"></img>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"project-summary-container\">\r\n    <div class=\"project-summary-text-container\"\">\r\n        <div class=\"project-summary-header-container\">\r\n            <div class=\"project-summary-header\"><h2>WEATHER APP</h2></div>\r\n            <div class=\"date\"><span class=\"date-published\">PUBLISHED: </span><span class=\"date-date\">MARS 2022</span></div>\r\n        </div>\r\n        <div class=\"project-summary-text\"><p>The time has come to burden the internet with yet another weather app.</p></div>\r\n        <div id=\"weatherapp\" class=\"btn-read-more btn-read-more-text\">Read more</div>\r\n    </div>\r\n    <div class=\"project-summary-img-container\">\r\n        <img id=\"project-summary-img-weather\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"></img>\r\n    </div>\r\n</div>\r\n\r\n";
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
var code = "<div class=\"article-container\">\r\n  <div class=\"article-header-container\">\r\n    <div class=\"article-header\">\r\n      <h1>THIS WEBSITE</h1>\r\n    </div>\r\n    <div class=\"date\">\r\n      <span class=\"date-published\">PUBLISHED: </span\r\n      ><span class=\"date-date\">MARS 2022</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"article-img-container\">\r\n        <img class=\"article-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"></img>\r\n        <div class=\"article-img-text\">Should have stayed with the rainbow header, right?</div>\r\n  </div>\r\n  <div class=\"article-text\">\r\n    <p>\r\n      My aim is to keep this website very simple and then use it to publish stuff related to all wonderful projects in my pipeline. Let's see how it goes.\r\n    </p>\r\n  </div>\r\n  <div class=\"article-text-todo\">\r\n    <h3>To do ✓</h3>\r\n    <p>\r\n      <ul>\r\n        <li><b>Responsive design</b></br>I'm not aiming for full compatibility with Netscape v1.0 on a pager, but one should be able to visit this website on a modern phone without any issues</li>\r\n        <li><b>Project navigation drop-down</b></br>The navigation link at the top of the pages named \"PROJECTS\" needs a dropdown that shows all published projects</li>\r\n        <li><b>Previous page functionality</b></br>So apparently doing the page with javascript has created some unplanned issues, like this one</li>\r\n      </ul>  \r\n    </p> \r\n  </div>\r\n</div>";
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
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error("Cannot find module '../images/weather.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<div class=\"article-container\">\r\n  <div class=\"article-header-container\">\r\n    <div class=\"article-header\">\r\n      <h1>WEATHER APP</h1>\r\n    </div>\r\n    <div class=\"date\">\r\n      <span class=\"date-published\">PUBLISHED: </span\r\n      ><span class=\"date-date\">MARS 2022</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"article-img-container\">\r\n        <img class=\"article-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"></img>\r\n        <div class=\"article-img-text\">A cold rainy day it seems</div>\r\n  </div>\r\n  <div class=\"article-text\">\r\n    <p>\r\n      I went into this project with a nerdy urge to create something involving precipitation radar images. Who doesn’t visit <a href=\"https://regnradar.se/\">regnradar.se</a> when they see a rain cloud to better understand how much rain they’re looking at?<br /><br />\r\n      Nerdy urges aside, the offical reason for doing the weather app was that my household wanted a place to easily spot time and temperature in the home. That is of course why the two white windows with current temprature and time take up a fair amount of space in the UI; they´re easily visible from different angles and distances even when shown on a small display.<br /><br />\r\n      The graph serves as a serious decision making tool when dressing my young one for the kindergarden and the map with precipitation radar data is just a delight to look at. Visit <a href=\"https://github.com/odsmal/weather-app\">the GitHub repo</a> to see what the weather app is made of.\r\n    </p>\r\n  </div>\r\n  <div class=\"article-text-todo\">\r\n    <h3>To do ✓</h3>\r\n    <p>\r\n      <ul>\r\n        <li><b>Color mismatch</b></br>When overlapping the wind and temprature colors look horrendous - fix!</li>\r\n        <li><b>More radar images</b></br>Make it possible to select radar images from different time episodes. The app is currently only displaying the latest image fetched from SMHI.</li>\r\n        <li><b>Radar image color scale</b></br>Add a color scale to make sense of the radar data coloring.</li>\r\n        <li><b>Responsive design</b></br>Maybe make the app responsive. It is currently hardcoded for a 1280x720 display.</li>\r\n        <li><b>Set location</b></br>Right now the geolocation is hardcoded to coordinates in the Uppsala region. Would be sweet if the user could choose location of interest.</li>\r\n      </ul>  \r\n    </p> \r\n  </div>\r\n</div>";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kc21hbC5naXRodWIuaW8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby8uL3NyYy9odG1sL2Fib3V0Lmh0bWwiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby8uL3NyYy9odG1sL3BvcnRmb2xpby5odG1sIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vLi9zcmMvaHRtbC9wcm9qZWN0cy5odG1sIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vLi9zcmMvaHRtbC90aGlzd2Vic2l0ZS5odG1sIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vLi9zcmMvaHRtbC93ZWF0aGVyYXBwLmh0bWwiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKC8vZGIub25saW5ld2ViZm9udHMuY29tL2MvMTIzYzdlNjc0MTg4Yzk3Nzk4ZGQzOWNkNDFmZjJkODU/ZmFtaWx5PUJyb3duK1JlZ3VsYXIpO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS10ZXh0LWFydGljbGUtdG9kbzogaHNsKDI3MywgOSUsIDg0JSk7XFxyXFxuICAtLWJvZHktYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA4NSUpO1xcclxcbiAgLS1oZWFkZXItY29sb3I6IGhzbCgyNzMsIDklLCAzMiUpO1xcclxcbiAgLS1saW5rLWNvbG9yOiBoc2woMjE2LCAzNyUsIDQyJSk7XFxyXFxuICAtLXRleHQtYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5NCUpO1xcclxcbiAgLS1pbWFnZS1kZXNjLWNvbG9yOiBoc2woMCwgMCUsIDMxJSk7XFxyXFxuICAtLXRleHQtcHVibGlzaGVkLWNvbG9yOiBoc2woMCwgMCUsIDUxJSk7XFxyXFxuICAtLXRleHQtcHVibGlzaGVkLWRhdGUtY29sb3I6IGhzbCgwLCAwJSwgMzglKTtcXHJcXG4gIC0tdGV4dC1wYXJhZ3JhcGgtY29sb3I6IGhzbCgyNzUsIDclLCAzMCUpO1xcclxcbiAgLS1idG4tcmVhZC1tb3JlLWJhY2tncm91bmQtY29sb3I6IGhzbCgyNzMsIDklLCAzMiUpO1xcclxcbiAgLS1idG4tcmVhZC1tb3JlLXRleHQtY29sb3I6IGhzbCg0NCwgMTElLCA4MSUpO1xcclxcbiAgLS1idG4tcmVhZC1tb3JlLWhvdmVyLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcclxcbiAgLS1uYXYtYmFja2dyb3VuZC1jb2xvcjogaHNsKDI3MywgOSUsIDI0JSk7XFxyXFxuICAtLW5hdi1iYWNrZ3JvdW5kLWJyaWdodC1jb2xvcjogaHNsKDI3MywgOSUsIDM0JSk7XFxyXFxuICAtLW5hdi1saW5rLXRleHQtY29sb3I6IGhzbCg0NCwgMTElLCA4MSUpO1xcclxcbiAgLS1uYXYtbGluay10ZXh0LWhvdmVyLWNvbG9yOiBoc2woNDQsIDExJSwgOTElKTtcXHJcXG4gIC0tbmF2LWxpbmstdGV4dC11bmRlcmxpbmUtY29sb3I6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgOTBkZWcsXFxyXFxuICAgIGhzbCgzNTksIDgzJSwgNzElKSAwJSxcXHJcXG4gICAgaHNsKDQwLCAxMDAlLCA3MCUpIDMwJSxcXHJcXG4gICAgaHNsKDE4MCwgNTAlLCA2MCUpIDYwJSxcXHJcXG4gICAgaHNsKDMwMCwgMzMlLCA3MCUpIDkwJVxcclxcbiAgKTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ0Jyb3duIFJlZ3VsYXInLCBzYW5zLXNlcmlmO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyB7XFxyXFxuICBjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiA3LjJyZW07XFxyXFxuICBsaW5lLWhlaWdodDogNi42cmVtO1xcclxcbn1cXHJcXG5oMiB7XFxyXFxuICBmb250LXNpemU6IDQuOHJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA0LjRyZW07XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICBjb2xvcjogdmFyKC0tbGluay1jb2xvcik7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXZsaW5rIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1uYXYtbGluay10ZXh0LWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcyBlYXNlLW91dDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmxpbms6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLW5hdi1saW5rLXRleHQtaG92ZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2bGluay1oaWdobGlnaHQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2bGluay1oaWdobGlnaHQ6OmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1uYXYtbGluay10ZXh0LXVuZGVybGluZS1jb2xvcik7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMjhweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGhlaWdodDogMnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxuICBwYWRkaW5nOiA0MHB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qtc3VtbWFyeS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDk4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1zdW1tYXJ5LXRleHQtY29udGFpbmVyIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDQwcHg7XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXN1bW1hcnktaW1nLWNvbnRhaW5lciB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAycHggMnB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qtc3VtbWFyeS1oZWFkZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1yZWFkLW1vcmUge1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDQ0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1idG4tcmVhZC1tb3JlLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcyBlYXNlLW91dDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXJlYWQtbW9yZS10ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXJlYWQtbW9yZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmFja2dyb3VuZC1icmlnaHQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1zdW1tYXJ5LWltZy10aGlzLXNpdGUsXFxyXFxuI3Byb2plY3Qtc3VtbWFyeS1pbWctd2VhdGhlcixcXHJcXG4jYWJvdXQtaW1nLW1lIHtcXHJcXG4gIGhlaWdodDogNTAwcHg7XFxyXFxuICB3aWR0aDogNTAwcHg7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2Fib3V0LWltZy1tZSB7XFxyXFxuICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1zdW1tYXJ5LWltZy10aGlzLXNpdGUge1xcclxcbiAgb2JqZWN0LXBvc2l0aW9uOiB0b3AgbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3Qtc3VtbWFyeS1pbWctd2VhdGhlcixcXHJcXG4jYWJvdXQtaW1nLW1lIHtcXHJcXG4gIG9iamVjdC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1zdW1tYXJ5LXRleHQtY29udGFpbmVyLFxcclxcbi5hcnRpY2xlLWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWJhY2tncm91bmQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogOTgwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBwYWRkaW5nOiA2NHB4O1xcclxcbiAgZ2FwOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1oZWFkZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGUtaW1nLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tbGVmdDogLTY0cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IC02NHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1pbWctdGV4dCB7XFxyXFxuICBjb2xvcjogdmFyKC0taW1hZ2UtZGVzYy1jb2xvcik7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLXRleHQsXFxyXFxuLmFydGljbGUtdGV4dC10b2RvIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDNyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMGVtO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGUtdGV4dCB7XFxyXFxuICBwYWRkaW5nOiAwcHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGUtdGV4dC10b2RvIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtYXJ0aWNsZS10b2RvKTtcXHJcXG4gIHBhZGRpbmc6IDY0cHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLWltZy10ZXh0LFxcclxcbi5kYXRlLXB1Ymxpc2hlZCxcXHJcXG4uZGF0ZS1kYXRlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZS1wdWJsaXNoZWQsXFxyXFxuLmRhdGUtZGF0ZSB7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZS1wdWJsaXNoZWQge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtcHVibGlzaGVkLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUtZGF0ZSB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1wdWJsaXNoZWQtZGF0ZS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXN1bW1hcnktdGV4dCxcXHJcXG4uYXJ0aWNsZS10ZXh0LFxcclxcbi5hcnRpY2xlLXRleHQtdG9kbyB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1wYXJhZ3JhcGgtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1zdW1tYXJ5LXRleHQge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBsaW5lLWhlaWdodDogM3JlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwZW07XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG59XFxyXFxubGkge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGUtdGV4dC10b2RvIGgzIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAjY29udGVudCB7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gICAgZ2FwOiAzcHg7XFxyXFxuICB9XFxyXFxuICAucHJvamVjdC1zdW1tYXJ5LWNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogNjAwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDQ5MHB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJvamVjdC1zdW1tYXJ5LXRleHQtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFydGljbGUtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMjBweCAwcHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hcnRpY2xlLWhlYWRlci1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hcnRpY2xlLWltZy1jb250YWluZXIge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hcnRpY2xlLXRleHQge1xcclxcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hcnRpY2xlLXRleHQtdG9kbyB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNC44cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogNC40cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFydGljbGUtaGVhZGVyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjgwcHgpIHtcXHJcXG4gIG5hdiB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7O0VBR0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsd0NBQXdDO0VBQ3hDLGlDQUFpQztFQUNqQyxn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Qjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxhQUFhO0FBQ2Y7O0FBRUE7OztFQUdFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7OztFQUdFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osUUFBUTtFQUNWO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsU0FBUztFQUNYOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixpQkFBaUI7RUFDbkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS9jLzEyM2M3ZTY3NDE4OGM5Nzc5OGRkMzljZDQxZmYyZDg1P2ZhbWlseT1Ccm93bitSZWd1bGFyKTtcXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS10ZXh0LWFydGljbGUtdG9kbzogaHNsKDI3MywgOSUsIDg0JSk7XFxyXFxuICAtLWJvZHktYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA4NSUpO1xcclxcbiAgLS1oZWFkZXItY29sb3I6IGhzbCgyNzMsIDklLCAzMiUpO1xcclxcbiAgLS1saW5rLWNvbG9yOiBoc2woMjE2LCAzNyUsIDQyJSk7XFxyXFxuICAtLXRleHQtYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5NCUpO1xcclxcbiAgLS1pbWFnZS1kZXNjLWNvbG9yOiBoc2woMCwgMCUsIDMxJSk7XFxyXFxuICAtLXRleHQtcHVibGlzaGVkLWNvbG9yOiBoc2woMCwgMCUsIDUxJSk7XFxyXFxuICAtLXRleHQtcHVibGlzaGVkLWRhdGUtY29sb3I6IGhzbCgwLCAwJSwgMzglKTtcXHJcXG4gIC0tdGV4dC1wYXJhZ3JhcGgtY29sb3I6IGhzbCgyNzUsIDclLCAzMCUpO1xcclxcbiAgLS1idG4tcmVhZC1tb3JlLWJhY2tncm91bmQtY29sb3I6IGhzbCgyNzMsIDklLCAzMiUpO1xcclxcbiAgLS1idG4tcmVhZC1tb3JlLXRleHQtY29sb3I6IGhzbCg0NCwgMTElLCA4MSUpO1xcclxcbiAgLS1idG4tcmVhZC1tb3JlLWhvdmVyLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcclxcbiAgLS1uYXYtYmFja2dyb3VuZC1jb2xvcjogaHNsKDI3MywgOSUsIDI0JSk7XFxyXFxuICAtLW5hdi1iYWNrZ3JvdW5kLWJyaWdodC1jb2xvcjogaHNsKDI3MywgOSUsIDM0JSk7XFxyXFxuICAtLW5hdi1saW5rLXRleHQtY29sb3I6IGhzbCg0NCwgMTElLCA4MSUpO1xcclxcbiAgLS1uYXYtbGluay10ZXh0LWhvdmVyLWNvbG9yOiBoc2woNDQsIDExJSwgOTElKTtcXHJcXG4gIC0tbmF2LWxpbmstdGV4dC11bmRlcmxpbmUtY29sb3I6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgOTBkZWcsXFxyXFxuICAgIGhzbCgzNTksIDgzJSwgNzElKSAwJSxcXHJcXG4gICAgaHNsKDQwLCAxMDAlLCA3MCUpIDMwJSxcXHJcXG4gICAgaHNsKDE4MCwgNTAlLCA2MCUpIDYwJSxcXHJcXG4gICAgaHNsKDMwMCwgMzMlLCA3MCUpIDkwJVxcclxcbiAgKTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ0Jyb3duIFJlZ3VsYXInLCBzYW5zLXNlcmlmO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyB7XFxyXFxuICBjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiA3LjJyZW07XFxyXFxuICBsaW5lLWhlaWdodDogNi42cmVtO1xcclxcbn1cXHJcXG5oMiB7XFxyXFxuICBmb250LXNpemU6IDQuOHJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA0LjRyZW07XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICBjb2xvcjogdmFyKC0tbGluay1jb2xvcik7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXZsaW5rIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1uYXYtbGluay10ZXh0LWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcyBlYXNlLW91dDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmxpbms6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLW5hdi1saW5rLXRleHQtaG92ZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2bGluay1oaWdobGlnaHQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2bGluay1oaWdobGlnaHQ6OmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1uYXYtbGluay10ZXh0LXVuZGVybGluZS1jb2xvcik7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMjhweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGhlaWdodDogMnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxuICBwYWRkaW5nOiA0MHB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qtc3VtbWFyeS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDk4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1zdW1tYXJ5LXRleHQtY29udGFpbmVyIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDQwcHg7XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXN1bW1hcnktaW1nLWNvbnRhaW5lciB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAycHggMnB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qtc3VtbWFyeS1oZWFkZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1yZWFkLW1vcmUge1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDQ0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1idG4tcmVhZC1tb3JlLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcyBlYXNlLW91dDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXJlYWQtbW9yZS10ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXJlYWQtbW9yZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmFja2dyb3VuZC1icmlnaHQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1zdW1tYXJ5LWltZy10aGlzLXNpdGUsXFxyXFxuI3Byb2plY3Qtc3VtbWFyeS1pbWctd2VhdGhlcixcXHJcXG4jYWJvdXQtaW1nLW1lIHtcXHJcXG4gIGhlaWdodDogNTAwcHg7XFxyXFxuICB3aWR0aDogNTAwcHg7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2Fib3V0LWltZy1tZSB7XFxyXFxuICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1zdW1tYXJ5LWltZy10aGlzLXNpdGUge1xcclxcbiAgb2JqZWN0LXBvc2l0aW9uOiB0b3AgbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3Qtc3VtbWFyeS1pbWctd2VhdGhlcixcXHJcXG4jYWJvdXQtaW1nLW1lIHtcXHJcXG4gIG9iamVjdC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1zdW1tYXJ5LXRleHQtY29udGFpbmVyLFxcclxcbi5hcnRpY2xlLWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWJhY2tncm91bmQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogOTgwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBwYWRkaW5nOiA2NHB4O1xcclxcbiAgZ2FwOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1oZWFkZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGUtaW1nLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tbGVmdDogLTY0cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IC02NHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1pbWctdGV4dCB7XFxyXFxuICBjb2xvcjogdmFyKC0taW1hZ2UtZGVzYy1jb2xvcik7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLXRleHQsXFxyXFxuLmFydGljbGUtdGV4dC10b2RvIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDNyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMGVtO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGUtdGV4dCB7XFxyXFxuICBwYWRkaW5nOiAwcHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGUtdGV4dC10b2RvIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtYXJ0aWNsZS10b2RvKTtcXHJcXG4gIHBhZGRpbmc6IDY0cHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLWltZy10ZXh0LFxcclxcbi5kYXRlLXB1Ymxpc2hlZCxcXHJcXG4uZGF0ZS1kYXRlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZS1wdWJsaXNoZWQsXFxyXFxuLmRhdGUtZGF0ZSB7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZS1wdWJsaXNoZWQge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtcHVibGlzaGVkLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUtZGF0ZSB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1wdWJsaXNoZWQtZGF0ZS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXN1bW1hcnktdGV4dCxcXHJcXG4uYXJ0aWNsZS10ZXh0LFxcclxcbi5hcnRpY2xlLXRleHQtdG9kbyB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1wYXJhZ3JhcGgtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1zdW1tYXJ5LXRleHQge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBsaW5lLWhlaWdodDogM3JlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwZW07XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG59XFxyXFxubGkge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGUtdGV4dC10b2RvIGgzIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAjY29udGVudCB7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gICAgZ2FwOiAzcHg7XFxyXFxuICB9XFxyXFxuICAucHJvamVjdC1zdW1tYXJ5LWNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogNjAwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDQ5MHB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJvamVjdC1zdW1tYXJ5LXRleHQtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFydGljbGUtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMjBweCAwcHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hcnRpY2xlLWhlYWRlci1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hcnRpY2xlLWltZy1jb250YWluZXIge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hcnRpY2xlLXRleHQge1xcclxcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hcnRpY2xlLXRleHQtdG9kbyB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNC44cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogNC40cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFydGljbGUtaGVhZGVyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjgwcHgpIHtcXHJcXG4gIG5hdiB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL21lLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcInByb2plY3Qtc3VtbWFyeS1jb250YWluZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LXN1bW1hcnktdGV4dC1jb250YWluZXJcXFwiXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3Qtc3VtbWFyeS1oZWFkZXItY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LXN1bW1hcnktaGVhZGVyXFxcIj48aDI+S3Jpc3RvZmZlciBKb2hhbnNzb248L2gyPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGVcXFwiPjxzcGFuIGNsYXNzPVxcXCJkYXRlLXB1Ymxpc2hlZFxcXCI+UFVCTElTSEVEOiA8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImRhdGUtZGF0ZVxcXCI+SlVMWSAxOTg2PC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LXN1bW1hcnktdGV4dFxcXCI+XFxyXFxuICAgICAgICAgICAgPHA+VGhlIGd1eSBiZWhpbmQgdGhpcyBwZXJzb25hbCBzaXRlIGlzIG1lLCBLcmlzdG9mZmVyLiBJIGxpdmUgaW4gVXBwc2FsYSwgU3dlZGVuIGFuZCBhbSBjdXJyZW50bHkgd29ya2luZyBhdCBBdGxhcyBDb3BjbyBhcyBhbiBVWCBkZXNpZ25lci4gPGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2tyaXN0b2ZmZXItam9oYW5zc29uLTU0NjBiYTE5YS9cXFwiPkhlcmU8L2E+IGlzIG15IExpbmtlZEluLjwvcD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPCEtLSA8ZGl2IGlkPVxcXCJ0aGlzd2Vic2l0ZVxcXCIgY2xhc3M9XFxcImJ0bi1yZWFkLW1vcmUgYnRuLXJlYWQtbW9yZS10ZXh0XFxcIj5SZWFkIG1vcmU8L2Rpdj4gLS0+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LXN1bW1hcnktaW1nLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICA8aW1nIGlkPVxcXCJhYm91dC1pbWctbWVcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiPjwvaW1nPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3BvcnRmb2xpby5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJhcnRpY2xlLWNvbnRhaW5lclxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJhcnRpY2xlLWhlYWRlci1jb250YWluZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhcnRpY2xlLWhlYWRlclxcXCI+XFxyXFxuICAgICAgPGgxPlBPUlRGT0xJTzwvaDE+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkYXRlXFxcIj5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiZGF0ZS1wdWJsaXNoZWRcXFwiPlBVQkxJU0hFRDogPC9zcGFuXFxyXFxuICAgICAgPjxzcGFuIGNsYXNzPVxcXCJkYXRlLWRhdGVcXFwiPk1BUlMgMjAyMjwvc3Bhbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImFydGljbGUtaW1nLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICA8aW1nIGNsYXNzPVxcXCJhcnRpY2xlLWltZ1xcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCI+PC9pbWc+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhcnRpY2xlLWltZy10ZXh0XFxcIj5GaXJzdCBwYWdlIG9mIG15IHdvbmRlcmZ1bCBwb3J0Zm9saW88L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiYXJ0aWNsZS10ZXh0XFxcIj5cXHJcXG4gICAgPHA+SSd2ZSBkZXNpZ25lZCB1c2VyIGludGVyZmFjZXMgZm9yIGZpZ2h0ZXIgamV0cywgdHJ1Y2tzLCBidXNlcyxcXHJcXG4gICAgcHJvZHVjdGlvbiBsaW5lIG1hY2hpbmVzIGFuZCBtb3JlIHNpbmNlIDIwMTEuIDxhIGhyZWY9XFxcImh0dHBzOi8va25pZ2h0ZWMtbXkuc2hhcmVwb2ludC5jb20vOmI6L3IvcGVyc29uYWwva3Jpc3RvZmZlcl9qb2hhbnNzb25fa25pZ2h0ZWNfc2UvRG9jdW1lbnRzL0NWJTI2UG9ydGZvbGlvL2tyaXN0b2ZmZXJfcG9ydGZvbGlvX2FwcmlsMjAyMl9lbmcucGRmP2NzZj0xJndlYj0xJmU9Rkl2blhlXFxcIiBkb3dubG9hZD1cXFwia3Jpc3RvZmZlcl9wb3J0Zm9saW9cXFwiPkRvd25sb2FkPC9hPiBhIHBkZiBvZiBteSBwb3J0Zm9saW8gZm9yIG1vcmUgaW5mb3JtYXRpb24uXFxyXFxuICAgIDwvcD5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvY29kZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvd2VhdGhlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyk7XG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwicHJvamVjdC1zdW1tYXJ5LWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3Qtc3VtbWFyeS10ZXh0LWNvbnRhaW5lclxcXCJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1zdW1tYXJ5LWhlYWRlci1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3Qtc3VtbWFyeS1oZWFkZXJcXFwiPjxoMj5USElTIFdFQlNJVEU8L2gyPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGVcXFwiPjxzcGFuIGNsYXNzPVxcXCJkYXRlLXB1Ymxpc2hlZFxcXCI+UFVCTElTSEVEOiA8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImRhdGUtZGF0ZVxcXCI+TUFZIDIwMjI8L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3Qtc3VtbWFyeS10ZXh0XFxcIj48cD5JIGRpZCBteSBmaXJzdCB3ZWJkZXNpZ24gY291cnNlIGJhY2sgaW4gMjAwMyBhdCBJVC1neW1uYXNpZXQgaW4gRnJvbHVuZGEsIEdvdGhlbmJ1cmcgYW5kIG5vdyAxOSB5ZWFycyBsYXRlciBJJ20gaHVuZ3J5IGFuZCBiYWNrIGZvciBtb3JlLjwvcD48L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcInRoaXN3ZWJzaXRlXFxcIiBjbGFzcz1cXFwiYnRuLXJlYWQtbW9yZSBidG4tcmVhZC1tb3JlLXRleHRcXFwiPlJlYWQgbW9yZTwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1zdW1tYXJ5LWltZy1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgPGltZyBpZD1cXFwicHJvamVjdC1zdW1tYXJ5LWltZy10aGlzLXNpdGVcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiPjwvaW1nPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LXN1bW1hcnktY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1zdW1tYXJ5LXRleHQtY29udGFpbmVyXFxcIlxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LXN1bW1hcnktaGVhZGVyLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1zdW1tYXJ5LWhlYWRlclxcXCI+PGgyPldFQVRIRVIgQVBQPC9oMj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRlXFxcIj48c3BhbiBjbGFzcz1cXFwiZGF0ZS1wdWJsaXNoZWRcXFwiPlBVQkxJU0hFRDogPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJkYXRlLWRhdGVcXFwiPk1BUlMgMjAyMjwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1zdW1tYXJ5LXRleHRcXFwiPjxwPlRoZSB0aW1lIGhhcyBjb21lIHRvIGJ1cmRlbiB0aGUgaW50ZXJuZXQgd2l0aCB5ZXQgYW5vdGhlciB3ZWF0aGVyIGFwcC48L3A+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJ3ZWF0aGVyYXBwXFxcIiBjbGFzcz1cXFwiYnRuLXJlYWQtbW9yZSBidG4tcmVhZC1tb3JlLXRleHRcXFwiPlJlYWQgbW9yZTwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1zdW1tYXJ5LWltZy1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgPGltZyBpZD1cXFwicHJvamVjdC1zdW1tYXJ5LWltZy13ZWF0aGVyXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyArIFwiXFxcIj48L2ltZz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9jb2RlLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcImFydGljbGUtY29udGFpbmVyXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImFydGljbGUtaGVhZGVyLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFydGljbGUtaGVhZGVyXFxcIj5cXHJcXG4gICAgICA8aDE+VEhJUyBXRUJTSVRFPC9oMT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImRhdGVcXFwiPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJkYXRlLXB1Ymxpc2hlZFxcXCI+UFVCTElTSEVEOiA8L3NwYW5cXHJcXG4gICAgICA+PHNwYW4gY2xhc3M9XFxcImRhdGUtZGF0ZVxcXCI+TUFSUyAyMDIyPC9zcGFuPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiYXJ0aWNsZS1pbWctY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgY2xhc3M9XFxcImFydGljbGUtaW1nXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIj48L2ltZz5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFydGljbGUtaW1nLXRleHRcXFwiPlNob3VsZCBoYXZlIHN0YXllZCB3aXRoIHRoZSByYWluYm93IGhlYWRlciwgcmlnaHQ/PC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImFydGljbGUtdGV4dFxcXCI+XFxyXFxuICAgIDxwPlxcclxcbiAgICAgIE15IGFpbSBpcyB0byBrZWVwIHRoaXMgd2Vic2l0ZSB2ZXJ5IHNpbXBsZSBhbmQgdGhlbiB1c2UgaXQgdG8gcHVibGlzaCBzdHVmZiByZWxhdGVkIHRvIGFsbCB3b25kZXJmdWwgcHJvamVjdHMgaW4gbXkgcGlwZWxpbmUuIExldCdzIHNlZSBob3cgaXQgZ29lcy5cXHJcXG4gICAgPC9wPlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJhcnRpY2xlLXRleHQtdG9kb1xcXCI+XFxyXFxuICAgIDxoMz5UbyBkbyDinJM8L2gzPlxcclxcbiAgICA8cD5cXHJcXG4gICAgICA8dWw+XFxyXFxuICAgICAgICA8bGk+PGI+UmVzcG9uc2l2ZSBkZXNpZ248L2I+PC9icj5JJ20gbm90IGFpbWluZyBmb3IgZnVsbCBjb21wYXRpYmlsaXR5IHdpdGggTmV0c2NhcGUgdjEuMCBvbiBhIHBhZ2VyLCBidXQgb25lIHNob3VsZCBiZSBhYmxlIHRvIHZpc2l0IHRoaXMgd2Vic2l0ZSBvbiBhIG1vZGVybiBwaG9uZSB3aXRob3V0IGFueSBpc3N1ZXM8L2xpPlxcclxcbiAgICAgICAgPGxpPjxiPlByb2plY3QgbmF2aWdhdGlvbiBkcm9wLWRvd248L2I+PC9icj5UaGUgbmF2aWdhdGlvbiBsaW5rIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2VzIG5hbWVkIFxcXCJQUk9KRUNUU1xcXCIgbmVlZHMgYSBkcm9wZG93biB0aGF0IHNob3dzIGFsbCBwdWJsaXNoZWQgcHJvamVjdHM8L2xpPlxcclxcbiAgICAgICAgPGxpPjxiPlByZXZpb3VzIHBhZ2UgZnVuY3Rpb25hbGl0eTwvYj48L2JyPlNvIGFwcGFyZW50bHkgZG9pbmcgdGhlIHBhZ2Ugd2l0aCBqYXZhc2NyaXB0IGhhcyBjcmVhdGVkIHNvbWUgdW5wbGFubmVkIGlzc3VlcywgbGlrZSB0aGlzIG9uZTwvbGk+XFxyXFxuICAgICAgPC91bD4gIFxcclxcbiAgICA8L3A+IFxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy93ZWF0aGVyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcImFydGljbGUtY29udGFpbmVyXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImFydGljbGUtaGVhZGVyLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFydGljbGUtaGVhZGVyXFxcIj5cXHJcXG4gICAgICA8aDE+V0VBVEhFUiBBUFA8L2gxPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZGF0ZVxcXCI+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImRhdGUtcHVibGlzaGVkXFxcIj5QVUJMSVNIRUQ6IDwvc3BhblxcclxcbiAgICAgID48c3BhbiBjbGFzcz1cXFwiZGF0ZS1kYXRlXFxcIj5NQVJTIDIwMjI8L3NwYW4+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJhcnRpY2xlLWltZy1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgPGltZyBjbGFzcz1cXFwiYXJ0aWNsZS1pbWdcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiPjwvaW1nPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYXJ0aWNsZS1pbWctdGV4dFxcXCI+QSBjb2xkIHJhaW55IGRheSBpdCBzZWVtczwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJhcnRpY2xlLXRleHRcXFwiPlxcclxcbiAgICA8cD5cXHJcXG4gICAgICBJIHdlbnQgaW50byB0aGlzIHByb2plY3Qgd2l0aCBhIG5lcmR5IHVyZ2UgdG8gY3JlYXRlIHNvbWV0aGluZyBpbnZvbHZpbmcgcHJlY2lwaXRhdGlvbiByYWRhciBpbWFnZXMuIFdobyBkb2VzbuKAmXQgdmlzaXQgPGEgaHJlZj1cXFwiaHR0cHM6Ly9yZWducmFkYXIuc2UvXFxcIj5yZWducmFkYXIuc2U8L2E+IHdoZW4gdGhleSBzZWUgYSByYWluIGNsb3VkIHRvIGJldHRlciB1bmRlcnN0YW5kIGhvdyBtdWNoIHJhaW4gdGhleeKAmXJlIGxvb2tpbmcgYXQ/PGJyIC8+PGJyIC8+XFxyXFxuICAgICAgTmVyZHkgdXJnZXMgYXNpZGUsIHRoZSBvZmZpY2FsIHJlYXNvbiBmb3IgZG9pbmcgdGhlIHdlYXRoZXIgYXBwIHdhcyB0aGF0IG15IGhvdXNlaG9sZCB3YW50ZWQgYSBwbGFjZSB0byBlYXNpbHkgc3BvdCB0aW1lIGFuZCB0ZW1wZXJhdHVyZSBpbiB0aGUgaG9tZS4gVGhhdCBpcyBvZiBjb3Vyc2Ugd2h5IHRoZSB0d28gd2hpdGUgd2luZG93cyB3aXRoIGN1cnJlbnQgdGVtcHJhdHVyZSBhbmQgdGltZSB0YWtlIHVwIGEgZmFpciBhbW91bnQgb2Ygc3BhY2UgaW4gdGhlIFVJOyB0aGV5wrRyZSBlYXNpbHkgdmlzaWJsZSBmcm9tIGRpZmZlcmVudCBhbmdsZXMgYW5kIGRpc3RhbmNlcyBldmVuIHdoZW4gc2hvd24gb24gYSBzbWFsbCBkaXNwbGF5LjxiciAvPjxiciAvPlxcclxcbiAgICAgIFRoZSBncmFwaCBzZXJ2ZXMgYXMgYSBzZXJpb3VzIGRlY2lzaW9uIG1ha2luZyB0b29sIHdoZW4gZHJlc3NpbmcgbXkgeW91bmcgb25lIGZvciB0aGUga2luZGVyZ2FyZGVuIGFuZCB0aGUgbWFwIHdpdGggcHJlY2lwaXRhdGlvbiByYWRhciBkYXRhIGlzIGp1c3QgYSBkZWxpZ2h0IHRvIGxvb2sgYXQuIFZpc2l0IDxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9vZHNtYWwvd2VhdGhlci1hcHBcXFwiPnRoZSBHaXRIdWIgcmVwbzwvYT4gdG8gc2VlIHdoYXQgdGhlIHdlYXRoZXIgYXBwIGlzIG1hZGUgb2YuXFxyXFxuICAgIDwvcD5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiYXJ0aWNsZS10ZXh0LXRvZG9cXFwiPlxcclxcbiAgICA8aDM+VG8gZG8g4pyTPC9oMz5cXHJcXG4gICAgPHA+XFxyXFxuICAgICAgPHVsPlxcclxcbiAgICAgICAgPGxpPjxiPkNvbG9yIG1pc21hdGNoPC9iPjwvYnI+V2hlbiBvdmVybGFwcGluZyB0aGUgd2luZCBhbmQgdGVtcHJhdHVyZSBjb2xvcnMgbG9vayBob3JyZW5kb3VzIC0gZml4ITwvbGk+XFxyXFxuICAgICAgICA8bGk+PGI+TW9yZSByYWRhciBpbWFnZXM8L2I+PC9icj5NYWtlIGl0IHBvc3NpYmxlIHRvIHNlbGVjdCByYWRhciBpbWFnZXMgZnJvbSBkaWZmZXJlbnQgdGltZSBlcGlzb2Rlcy4gVGhlIGFwcCBpcyBjdXJyZW50bHkgb25seSBkaXNwbGF5aW5nIHRoZSBsYXRlc3QgaW1hZ2UgZmV0Y2hlZCBmcm9tIFNNSEkuPC9saT5cXHJcXG4gICAgICAgIDxsaT48Yj5SYWRhciBpbWFnZSBjb2xvciBzY2FsZTwvYj48L2JyPkFkZCBhIGNvbG9yIHNjYWxlIHRvIG1ha2Ugc2Vuc2Ugb2YgdGhlIHJhZGFyIGRhdGEgY29sb3JpbmcuPC9saT5cXHJcXG4gICAgICAgIDxsaT48Yj5SZXNwb25zaXZlIGRlc2lnbjwvYj48L2JyPk1heWJlIG1ha2UgdGhlIGFwcCByZXNwb25zaXZlLiBJdCBpcyBjdXJyZW50bHkgaGFyZGNvZGVkIGZvciBhIDEyODB4NzIwIGRpc3BsYXkuPC9saT5cXHJcXG4gICAgICAgIDxsaT48Yj5TZXQgbG9jYXRpb248L2I+PC9icj5SaWdodCBub3cgdGhlIGdlb2xvY2F0aW9uIGlzIGhhcmRjb2RlZCB0byBjb29yZGluYXRlcyBpbiB0aGUgVXBwc2FsYSByZWdpb24uIFdvdWxkIGJlIHN3ZWV0IGlmIHRoZSB1c2VyIGNvdWxkIGNob29zZSBsb2NhdGlvbiBvZiBpbnRlcmVzdC48L2xpPlxcclxcbiAgICAgIDwvdWw+ICBcXHJcXG4gICAgPC9wPiBcXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICBpZiAob3B0aW9ucy5tYXliZU5lZWRRdW90ZXMgJiYgL1tcXHRcXG5cXGZcXHIgXCInPTw+YF0vLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBwcm9qZWN0cyBmcm9tICcuL2h0bWwvcHJvamVjdHMuaHRtbCc7XHJcbmltcG9ydCBwb3J0Zm9saW8gZnJvbSAnLi9odG1sL3BvcnRmb2xpby5odG1sJztcclxuaW1wb3J0IGFib3V0IGZyb20gJy4vaHRtbC9hYm91dC5odG1sJztcclxuaW1wb3J0IHdlYXRoZXJhcHAgZnJvbSAnLi9odG1sL3dlYXRoZXJhcHAuaHRtbCc7XHJcbmltcG9ydCB0aGlzd2Vic2l0ZSBmcm9tICcuL2h0bWwvdGhpc3dlYnNpdGUuaHRtbCc7XHJcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuXHJcbmNsYXNzIERpc3BsYXlDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcignY2xpY2snLCAnLmJ0bi1yZWFkLW1vcmUnLCB0aGlzLmxpbmtTZWxlY3RlZCk7XHJcbiAgICB0aGlzLmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgJy5uYXZsaW5rJywgdGhpcy5uYXZMaW5rU2VsZWN0ZWQpO1xyXG4gICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgIHRoaXMub2xkSGlnaGxpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJyk7XHJcbiAgfVxyXG5cclxuICBhZGRHbG9iYWxFdmVudExpc3RlbmVyKHR5cGUsIHNlbGVjdG9yLCBjYWxsYmFjaykge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhzZWxlY3RvcikpIGNhbGxiYWNrKGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsaW5rU2VsZWN0ZWQgPSAoZSkgPT4ge1xyXG4gICAgbWFpbi5zZWxlY3RQYWdlKGUudGFyZ2V0LmlkKTtcclxuICB9O1xyXG5cclxuICBuYXZMaW5rU2VsZWN0ZWQgPSAoZSkgPT4ge1xyXG4gICAgdGhpcy5oaWdobGlnaHRTZWxlY3RlZChlKTtcclxuICAgIHRoaXMubGlua1NlbGVjdGVkKGUpO1xyXG4gIH07XHJcblxyXG4gIGhpZ2hsaWdodFNlbGVjdGVkKGUpIHtcclxuICAgIHRoaXMub2xkSGlnaGxpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoJ25hdmxpbmstaGlnaGxpZ2h0Jyk7XHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCduYXZsaW5rLWhpZ2hsaWdodCcpO1xyXG4gICAgdGhpcy5vbGRIaWdobGlnaHQgPSBlLnRhcmdldDtcclxuICB9XHJcblxyXG4gIHNob3dQYWdlKGNvbnRlbnQpIHtcclxuICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgTWFpbiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmh0bWxQYWdlcyA9IHtcclxuICAgICAgcHJvamVjdHMsXHJcbiAgICAgIHBvcnRmb2xpbyxcclxuICAgICAgYWJvdXQsXHJcbiAgICAgIHdlYXRoZXJhcHAsXHJcbiAgICAgIHRoaXN3ZWJzaXRlLFxyXG4gICAgfTtcclxuICAgIHRoaXMuZGlzcGxheUNvbnRyb2xsZXIgPSBuZXcgRGlzcGxheUNvbnRyb2xsZXIoKTtcclxuICAgIHRoaXMuc2VsZWN0UGFnZSgncHJvamVjdHMnKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFBhZ2UobmFtZSkge1xyXG4gICAgaWYgKG5hbWUgaW4gdGhpcy5odG1sUGFnZXMpIHtcclxuICAgICAgdGhpcy5zY3JvbGxUb1RvcCgpO1xyXG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5odG1sUGFnZXNbYCR7bmFtZX1gXTtcclxuICAgICAgdGhpcy5kaXNwbGF5Q29udHJvbGxlci5zaG93UGFnZShjb250ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNjcm9sbFRvVG9wKCkge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFpbiA9IG5ldyBNYWluKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==