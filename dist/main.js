/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/navbar.js */ \"./src/modules/navbar.js\");\n/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home.js */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_services_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/services.js */ \"./src/modules/services.js\");\n/* harmony import */ var _modules_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/footer.js */ \"./src/modules/footer.js\");\n\r\n\r\n\r\n\r\n\r\nconst menu = document.querySelector('#mobile-menu');\r\nconst menuLink = document.querySelector('.navbar__menu');\r\n\r\nmenu.addEventListener('click', function () {\r\n  menu.classList.toggle('is-active');\r\n  menuLink.classList.toggle('active');\r\n})\r\n\r\n\r\nconst tabs = document.querySelectorAll('[data-tag-target]');\r\nconst tabContent = document.querySelectorAll('[data-tab-content');\r\ntabs.forEach(tab => {\r\n  tab.addEventListener('click', () => {\r\n    const target = document.querySelector(tab.dataset.tabTarget);\r\n    target.classList.add('active');\r\n  })\r\n})\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footer\": () => (/* binding */ footer)\n/* harmony export */ });\nconst footer = (() => {\r\n  const content = document.querySelector('#content');\r\n  const footer = document.createElement('div');\r\n  footer.setAttribute('class', 'footer__container');\r\n  footer.innerHTML = `\r\n    <div class=\"footer__links\">\r\n      <div class=\"footer__link--wrapper\">\r\n        <div class=\"footer__link--items\">\r\n          <h2>About Us</h2>\r\n          <a href=\"/index.html\">How it works</a>\r\n          <a href=\"/index.html\">Testimonials</a>\r\n          <a href=\"/index.html\">Careers</a>\r\n          <a href=\"/index.html\">Investments</a>\r\n          <a href=\"/index.html\">Terms of Service</a>\r\n        </div>\r\n        <div class=\"footer__link--items\">\r\n          <h2>Contact Us</h2>\r\n          <a href=\"/index.html\">Contact</a>\r\n          <a href=\"/index.html\">Support</a>\r\n          <a href=\"/index.html\">Destinations</a>\r\n          <a href=\"/index.html\">Sponsorships</a>\r\n        </div>\r\n        <div class=\"footer__link--items\">\r\n          <h2>Videos</h2>\r\n          <a href=\"/index.html\">Submit Video</a>\r\n          <a href=\"/index.html\">Ambassadors</a>\r\n          <a href=\"/index.html\">Agency</a>\r\n          <a href=\"/index.html\">Influencer</a>\r\n        </div>\r\n        <div class=\"footer__link--items\">\r\n          <h2>Social Media</h2>\r\n          <a href=\"/index.html\">Instagram</a>\r\n          <a href=\"/index.html\">Facebook</a>\r\n          <a href=\"/index.html\">Youtube</a>\r\n          <a href=\"/index.html\">Twitter</a>\r\n        </div>\r\n      </div>\r\n      </div>\r\n      <div class=\"social__media\">\r\n        <div class=\"social__media--wrap\">\r\n          <div class=\"footer__logo\">\r\n            <a href=\"/index.html\" id=\"footer__logo\"><i class=\"fas fa-gem\"></i>NEXT</a>\r\n          </div>\r\n          <p class=\"website__right\">© NEXT 2020. All rights reserved</p>\r\n          <div class=\"social__icons\">\r\n            <a href=\"/index.html\" class=\"social__icon--link\" target=\"_blank\">\r\n              <i class=\"fab fa-instagram\"></i>\r\n            </a>\r\n            <a href=\"/index.html\" class=\"social__icon--link\" target=\"_blank\">\r\n              <i class=\"fab fa-facebook\"></i>\r\n            </a>\r\n            <a href=\"/index.html\" class=\"social__icon--link\" target=\"_blank\">\r\n              <i class=\"fab fa-youtube\"></i>\r\n            </a>\r\n            <a href=\"/index.html\" class=\"social__icon--link\" target=\"_blank\">\r\n              <i class=\"fab fa-twitter\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  `;\r\n\r\n  content.appendChild(footer);\r\n})();\r\n\n\n//# sourceURL=webpack://restaurant/./src/modules/footer.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\nconst home = (() => {\r\n  const content = document.querySelector('#content');\r\n  const home = document.createElement('div');\r\n  home.setAttribute('class', 'main');\r\n  home.innerHTML = `\r\n    <div class=\"main__container\" data-tab-content >\r\n      <div class=\"main main__content\">\r\n        <h2>NEXT GENERATION</h2>\r\n        <h3>TECHNOLOGY</h3>\r\n        <p>See what makes us different</p>\r\n        <button class=\"main__btn\"><a href=\"/index.html\">Get Started</a></button>\r\n      </div>\r\n      <div class=\"main__img--container\">\r\n        <img src=\"../images/pic1.svg\" alt=\"messages\" id=\"main__img\">\r\n      </div>\r\n    </div>\r\n    <div class=\"main menu__container active\" data-tab-content>\r\n      <h2>Whats on the menu!</h2>\r\n      <h3>Kazu</h3>\r\n      <p>This is what we have on the menu</p>\r\n      <div class=\"kazu-logo\">\r\n        <img src=\"../images/kazu-logo.png\" alt=\"kazu-logo\" id=\"kazu__img\">\r\n      </div>\r\n    </div>\r\n  `;\r\n  console.log('brap brap');\r\n  content.appendChild(home);\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/navbar.js":
/*!*******************************!*\
  !*** ./src/modules/navbar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navbar\": () => (/* binding */ navbar)\n/* harmony export */ });\nconst navbar = (() => {\r\n  const content = document.querySelector('#content');\r\n  const nav = document.createElement('nav');\r\n\r\n  nav.setAttribute(\"class\", 'navbar');\r\n  nav.innerHTML = `\r\n    <div class=\"navbar__container\">\r\n      <a href=\"./index.html\" id=\"navbar__logo\"><i class=\"fas fa-gem\"></i> NEXT</a>\r\n      <div class=\"navbar__toggle\" id=\"mobile-menu\">\r\n        <span class=\"bar\"></span>\r\n        <span class=\"bar\"></span>\r\n        <span class=\"bar\"></span>\r\n      </div>\r\n      <ul class=\"navbar__menu\">\r\n        <li class=\"navbar__item\" data-tag-target>\r\n          <p class=\"navbar__links\">Home</p>\r\n        </li>\r\n        <li class=\"navbar__item\" data-tag-target>\r\n          <p class=\"navbar__links\">Menu</p>\r\n        </li>\r\n        <li class=\"navbar__item\" data-tag-target>\r\n          <p class=\"navbar__links\">Chef</a>\r\n        </li>\r\n        <li class=\"navbar__item\" data-tag-target>\r\n          <p class=\"navbar__links\">Reservation</p>\r\n        </li>\r\n        <li class=\"navbar__item\" data-tag-target>\r\n          <p class=\"navbar__links\">Location</p>\r\n        </li>\r\n        <li class=\"navbar__btn\">\r\n          <p class=\"button\">Sign Up</p>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  `;\r\n  content.appendChild(nav);\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/modules/navbar.js?");

/***/ }),

/***/ "./src/modules/services.js":
/*!*********************************!*\
  !*** ./src/modules/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"services\": () => (/* binding */ services)\n/* harmony export */ });\nconst services = (() => {\r\n  const content = document.querySelector('#content');\r\n  const service = document.createElement('div');\r\n  service.setAttribute('class', 'services')\r\n  service.innerHTML = `\r\n  <h1>See what the hype is about</h1>\r\n    <div class=\"services__container\">\r\n      <div class=\"services__card\">\r\n        <h2>Experince Bliss</h2>\r\n        <p>AI Powered Technology</p>\r\n        <button>Get Started</button>\r\n      </div>\r\n      <div class=\"services__card\">\r\n        <h2>Are you Ready?</h2>\r\n        <p>Take the leap</p>\r\n        <button>Get Started</button>\r\n      </div>\r\n    </div>`;\r\n\r\n  content.appendChild(service);\r\n})();\r\n\n\n//# sourceURL=webpack://restaurant/./src/modules/services.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;