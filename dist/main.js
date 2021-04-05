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

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/navbar.js */ \"./src/modules/navbar.js\");\n/* harmony import */ var _modules_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/main.js */ \"./src/modules/main.js\");\n/* harmony import */ var _modules_footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/footer.js */ \"./src/modules/footer.js\");\n\r\n\r\n\r\n\r\nconst menu = document.querySelector('#mobile-menu');\r\nconst menuLink = document.querySelector('.navbar__menu');\r\n\r\nmenu.addEventListener('click', function () {\r\n  menu.classList.toggle('is-active');\r\n  menuLink.classList.toggle('active');\r\n})\r\n\r\n\r\nconst tabs = document.querySelectorAll('.navbar__item');\r\nconst tabContents = document.querySelectorAll('.thing');\r\n\r\ntabs.forEach(tab => {\r\n  tab.addEventListener('click', () => {\r\n    const target = document.querySelector(tab.dataset.tabTarget);\r\n    console.log(target)\r\n    tabContents.forEach(tabContent => {\r\n      tabContent.classList.remove('active');\r\n    })\r\n    target.classList.add('active');\r\n  })\r\n})\r\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

        /***/
}),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footer\": () => (/* binding */ footer)\n/* harmony export */ });\nconst footer = (() => {\r\n  const content = document.querySelector('#content');\r\n  const footer = document.createElement('div');\r\n  footer.setAttribute('class', 'footer__container');\r\n  footer.innerHTML = `\r\n    <div class=\"footer__links\">\r\n      <div class=\"footer__link--wrapper\">\r\n        <div class=\"footer__link--items\">\r\n          <h2>About Us</h2>\r\n          <a href=\"/index.html\">How it works</a>\r\n          <a href=\"/index.html\">Testimonials</a>\r\n          <a href=\"/index.html\">Careers</a>\r\n          <a href=\"/index.html\">Investments</a>\r\n          <a href=\"/index.html\">Terms of Service</a>\r\n        </div>\r\n        <div class=\"footer__link--items\">\r\n          <h2>Contact Us</h2>\r\n          <a href=\"/index.html\">Contact</a>\r\n          <a href=\"/index.html\">Support</a>\r\n          <a href=\"/index.html\">Destinations</a>\r\n          <a href=\"/index.html\">Sponsorships</a>\r\n        </div>\r\n        <div class=\"footer__link--items\">\r\n          <h2>Videos</h2>\r\n          <a href=\"/index.html\">Submit Video</a>\r\n          <a href=\"/index.html\">Ambassadors</a>\r\n          <a href=\"/index.html\">Agency</a>\r\n          <a href=\"/index.html\">Influencer</a>\r\n        </div>\r\n        <div class=\"footer__link--items\">\r\n          <h2>Social Media</h2>\r\n          <a href=\"/index.html\">Instagram</a>\r\n          <a href=\"/index.html\">Facebook</a>\r\n          <a href=\"/index.html\">Youtube</a>\r\n          <a href=\"/index.html\">Twitter</a>\r\n        </div>\r\n      </div>\r\n      </div>\r\n      <div class=\"social__media\">\r\n        <div class=\"social__media--wrap\">\r\n          <div class=\"footer__logo\">\r\n            <a href=\"/index.html\" id=\"footer__logo\"><i class=\"fas fa-gem\"></i>NEXT</a>\r\n          </div>\r\n          <p class=\"website__right\">© NEXT 2020. All rights reserved</p>\r\n          <div class=\"social__icons\">\r\n            <a href=\"/index.html\" class=\"social__icon--link\" target=\"_blank\">\r\n              <i class=\"fab fa-instagram\"></i>\r\n            </a>\r\n            <a href=\"/index.html\" class=\"social__icon--link\" target=\"_blank\">\r\n              <i class=\"fab fa-facebook\"></i>\r\n            </a>\r\n            <a href=\"/index.html\" class=\"social__icon--link\" target=\"_blank\">\r\n              <i class=\"fab fa-youtube\"></i>\r\n            </a>\r\n            <a href=\"/index.html\" class=\"social__icon--link\" target=\"_blank\">\r\n              <i class=\"fab fa-twitter\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  `;\r\n\r\n  content.appendChild(footer);\r\n})();\r\n\n\n//# sourceURL=webpack://restaurant/./src/modules/footer.js?");

        /***/
}),

/***/ "./src/modules/main.js":
/*!*****************************!*\
  !*** ./src/modules/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\nconst main = (() => {\r\n  /***********************************************************************  HOME TAB ***********************************************************************/\r\n  const content = document.querySelector('#content');\r\n  const homeContainer = document.createElement('div');\r\n  const homeContent = document.createElement('div');\r\n  const title = document.createElement('h2');\r\n  const desc = document.createElement('h3');\r\n  const para = document.createElement('p');\r\n  const btn = document.createElement('button');\r\n  const link = document.createElement('a');\r\n  const homeImg = document.createElement('div');\r\n  const img = document.createElement('img');\r\n\r\n  // adding classes\r\n  homeContainer.classList.add('home__container', 'thing', 'active');\r\n  // homeContainer.id = 'home__container';\r\n  homeContent.classList.add('home__content');\r\n  btn.classList.add('home__btn');\r\n  homeImg.classList.add('home__img--container');\r\n\r\n\r\n  // home container\r\n  title.innerHTML = `NEXT GENERATION`;\r\n  desc.innerHTML = `TECHNOLOGY`;\r\n  para.innerHTML = `See what makes us different`;\r\n\r\n  // Get Stared link to append into button\r\n  link.href = '/index.html';\r\n  link.innerHTML = `Get Started`;\r\n\r\n\r\n  // home image container\r\n  img.src = '../images/pic1.svg';\r\n  img.alt = 'message';\r\n  img.id = 'home__img';\r\n\r\n  btn.appendChild(link);\r\n  homeContent.append(title, desc, btn);\r\n  homeImg.appendChild(img);\r\n  homeContainer.append(homeContent, homeImg);\r\n  content.appendChild(homeContainer);\r\n\r\n  /***********************************************************************  MENU TAB ***********************************************************************/\r\n  // const menuContainer = document.createElement('div');\r\n  // const menuTitle = document.createElement('h2');\r\n  // const menuSubtitle = document.createElement('h3');\r\n  // const menuLogo = document.createElement('div');\r\n  // const menuImg = document.createElement('img');\r\n\r\n  // menuContainer.classList.add('menu__container', 'thing');\r\n  // menuLogo.classList.add('kazu-logo');\r\n\r\n  // menuTitle.innerHTM = `What's on the menu!`;\r\n  // menuSubtitle.innerHTML = `This is what's on the menu beech`;\r\n\r\n  // menuImg.src = '../images/kazu-logo.png';\r\n  // menuImg.alt = `kazu-logo`;\r\n  // menuImg.id = 'kazu__img';\r\n\r\n  // menuLogo.appendChild(menuImg);\r\n  // menuContainer.append(menuTitle, menuSubtitle, menuLogo);\r\n  // content.append(menuContainer);\r\n  /****************************************************************  SERVICES TAB ***********************************************************/\r\n\r\n  const menuContainer = document.createElement('div');\r\n  menuContainer.classList.add('menu__container', 'thing');\r\n\r\n  const menuTitle = document.createElement('h2');\r\n  menuTitle.innerHTML = `Menu`;\r\n\r\n  const menuCards = document.createElement('div');\r\n  menuCards.classList.add('menu__cards');\r\n\r\n  // Card One\r\n  const menuCardOne = document.createElement('div');\r\n  const cardOneTitle = document.createElement('h3');\r\n  const cardOnePara = document.createElement('p');\r\n  const cardOneBtn = document.createElement('button');\r\n\r\n  menuCardOne.classList.add('menu__card');\r\n  cardOneBtn.classList.add('menuBtn');\r\n\r\n  cardOneTitle.innerHTML = `Experience Bliss`;\r\n  cardOnePara.innerHTML = `AI Powered Technology`;\r\n  cardOneBtn.innerHTML = `Get Started`;\r\n\r\n  menuCardOne.append(cardOneTitle, cardOnePara, cardOneBtn);\r\n\r\n  // Card Two\r\n  const menuCardTwo = document.createElement('div');\r\n  const cardTwoTitle = document.createElement('h3');\r\n  const cardTwoPara = document.createElement('p');\r\n  const cardTwoBtn = document.createElement('button');\r\n\r\n  menuCardTwo.classList.add('menu__card');\r\n  // cardTwoBtn.classList.add('button');\r\n  cardTwoBtn.classList.add('serviceBtn');\r\n  cardTwoTitle.innerHTML = `Are you Ready?`;\r\n  cardTwoPara.innerHTML = `Take the leap`;\r\n  cardTwoBtn.innerHTML = `Get Started`;\r\n\r\n  menuCardTwo.append(cardTwoTitle, cardTwoPara, cardTwoBtn);\r\n  menuCards.append(menuCardOne, menuCardTwo)\r\n  menuContainer.append(menuTitle, menuCards);\r\n  content.append(menuContainer);\r\n\r\n  /****************************************************************  LOCATIONS TAB ***********************************************************/\r\n\r\n  // const locationsContainer = document.createElement('div');\r\n  // locationsContainer.classList.add('location__container', 'thing');\r\n  // locationsContainer.innerHTML = `\r\n  // <iframe width=\"600\" height=\"450\" style=\"border:0\" loading=\"lazy\" allowfullscreen src=\"\"></iframe>\r\n  // `;\r\n  // content.append(locationsContainer);\r\n\r\n\r\n})();\r\n\n\n//# sourceURL=webpack://restaurant/./src/modules/main.js?");

        /***/
}),

/***/ "./src/modules/navbar.js":
/*!*******************************!*\
  !*** ./src/modules/navbar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navbar\": () => (/* binding */ navbar)\n/* harmony export */ });\nconst navbar = (() => {\r\n  const content = document.querySelector('#content');\r\n  const nav = document.createElement('nav');\r\n\r\n  nav.setAttribute(\"class\", 'navbar');\r\n  nav.innerHTML = `\r\n    <div class=\"navbar__container\">\r\n      <a href=\"./index.html\" id=\"navbar__logo\"><i class=\"fas fa-gem\"></i> NEXT</a>\r\n      <div class=\"navbar__toggle\" id=\"mobile-menu\">\r\n        <span class=\"bar\"></span>\r\n        <span class=\"bar\"></span>\r\n        <span class=\"bar\"></span>\r\n      </div>\r\n      <ul class=\"navbar__menu\">\r\n        <li class=\"navbar__item navbar__links tab\" data-tab-target=\".home__container\">Home</li>\r\n        <li class=\"navbar__item navbar__links tab\" data-tab-target=\".menu__container\">Menu</li>\r\n      </ul>\r\n    </div>\r\n  `;\r\n  content.appendChild(nav);\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/modules/navbar.js?");

        /***/
})

    /******/
});
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
      /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
      /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
    /******/
}
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
}
        /******/
}
      /******/
};
    /******/
})();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    /******/
})();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
      /******/
};
    /******/
})();
/******/
/************************************************************************/
/******/
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})()
  ;