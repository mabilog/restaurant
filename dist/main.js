/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/footer.js */ \"./src/modules/footer.js\");\n/* harmony import */ var _modules_footer_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_hero_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/hero.js */ \"./src/modules/hero.js\");\n/* harmony import */ var _modules_hero_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_hero_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_navbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/navbar.js */ \"./src/modules/navbar.js\");\n/* harmony import */ var _modules_navbar_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_navbar_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_services_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/services.js */ \"./src/modules/services.js\");\n/* harmony import */ var _modules_services_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_services_js__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\n// const content = document.querySelector('#content');\r\nfunction menuToggle() {\r\n\r\n}\r\nconst menu = document.querySelector('#mobile-menu');\r\nconst menuLink = document.querySelector('.navbar__menu');\r\n\r\nmenu.addEventListener('click', function () {\r\n  menu.classList.toggle('is-active');\r\n  menuLink.classList.toggle('active');\r\n})\r\nfunction init() {\r\n  ;(0,_modules_navbar_js__WEBPACK_IMPORTED_MODULE_2__.navbar)();\r\n  (0,_modules_hero_js__WEBPACK_IMPORTED_MODULE_1__.hero)();\r\n  (0,_modules_services_js__WEBPACK_IMPORTED_MODULE_3__.services)();\r\n  (0,_modules_footer_js__WEBPACK_IMPORTED_MODULE_0__.footer)();\r\n  menuToggle();\r\n}\r\ninit();\r\n\r\nconsole.log('hello?')\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/***/ ((module) => {

eval("function footer() {\r\n  const content = document.querySelector('#content');\r\n  const footerContainer = document.createElement('div');\r\n  const footerLinks = document.createElement('div');\r\n  const footerLinkWrapper = document.createElement('div');\r\n  const aboutItems = document.createElement('div');\r\n  const contactItems = document.createElement('div');\r\n  const videoItems = document.createElement('div');\r\n  const socialItems = document.createElement('div');\r\n  const about = document.createElement('h2');\r\n  const contact = document.createElement('h2');\r\n  const videos = document.createElement('h2');\r\n  const socials = document.createElement('h2');\r\n  const socialMedia = document.createElement('div');\r\n  const socialMediaWrap = document.createElement('div');\r\n  const footerLogo = document.createElement('div');\r\n  const footerATag = document.createElement('a');\r\n  const i = document.createElement('i');\r\n  const websiteRight = document.createElement('p');\r\n  const socialIcons = document.createElement('div');\r\n  const iconOne = document.createElement('a');\r\n  const iconTwo = document.createElement('a');\r\n  const iconThree = document.createElement('a');\r\n  const iconFour = document.createElement('a');\r\n  const iIg = document.createElement('i');\r\n  const iFb = document.createElement('i');\r\n  const iYt = document.createElement('i');\r\n  const iTw = document.createElement('i');\r\n\r\n  //About us\r\n  const howItWorks = document.createElement('a').textContent = 'How it works';\r\n  const testimonials = document.createElement('a').textContent = 'Testimonials';\r\n  const careers = document.createElement('a').textContent = 'Careers';\r\n  const investments = document.createElement('a').textContent = 'Investments';\r\n  const tOS = document.createElement('a').textContent = 'Terms of Service';\r\n\r\n  // howItWorks.href = '/index.html';\r\n  // testimonials.href = '/index.html';\r\n  // careers.href = '/index.html';\r\n  // investments.href = '/index.html';\r\n  // tOS.href = '/index.html';\r\n  about.textContent = 'About Us';\r\n\r\n  aboutItems.classList.add('footer__link--items');\r\n  aboutItems.append(about, howItWorks, testimonials, careers, investments, tOS);\r\n\r\n  //Contact us\r\n  const cont = document.createElement('a').textContent = 'Contact';\r\n  const support = document.createElement('a').textContent = 'Support';\r\n  const destination = document.createElement('a').textContent = 'Careers';\r\n  const sponsorship = document.createElement('a').textContent = 'Sponsorship';\r\n\r\n  // cont.href = '/index.html';\r\n  // support.href = '/index.html';\r\n  // destination.href = '/index.html';\r\n  // sponsorship.href = '/index.html';\r\n  // contact.textContent = 'Contact Us';\r\n\r\n  contactItems.append(contact, cont, support, destination, sponsorship);\r\n  contactItems.classList.add('footer__link--items');\r\n  // Videos\r\n  const submit = document.createElement('a').textContent = 'Submit Video';\r\n  const ambassadors = document.createElement('a').textContent = 'Ambassadors';\r\n  const agency = document.createElement('a').textContent = 'Agency';\r\n  const influencer = document.createElement('a').textContent = 'Influencer';;\r\n\r\n  // submit.href = '/index.html';\r\n  // ambassadors.href = '/index.html';\r\n  // agency.href = '/index.html';\r\n  // influencer.href = '/index.html';\r\n  // videos.textContent = 'Videos';\r\n\r\n  videoItems.append(videos, submit, ambassadors, agency, influencer);\r\n  videoItems.classList.add('footer__link--items');\r\n  // Social Media\r\n  const instagram = document.createElement('a').textContent = 'Instagram';\r\n  const facebook = document.createElement('a').textContent = 'Facebook';\r\n  const youtube = document.createElement('a').textContent = 'Youtube';\r\n  const twitter = document.createElement('a').textContent = 'Twitter';\r\n\r\n  // instagram.href = '/index.html';\r\n  // facebook.href = '/index.html';\r\n  // youtube.href = '/index.html';\r\n  // twitter.href = '/index.html';\r\n  socials.textContent = 'Social Media';\r\n\r\n  socialItems.append(socials, instagram, facebook, youtube, twitter);\r\n  socialItems.classList.add('footer__link--items');\r\n  // Footer Link Wrapper\r\n  footerLinkWrapper.append(aboutItems, contactItems, videoItems, socialItems);\r\n\r\n}\r\nmodule.exports.footer;\n\n//# sourceURL=webpack://restaurant/./src/modules/footer.js?");

/***/ }),

/***/ "./src/modules/hero.js":
/*!*****************************!*\
  !*** ./src/modules/hero.js ***!
  \*****************************/
/***/ ((module) => {

eval("function hero() {\r\n  const content = document.querySelector('#content');\r\n  const mainContainer = document.createElement('div');\r\n  const mainContent = document.createElement('div');\r\n  const hOne = document.createElement('h1');\r\n  const hTwo = document.createElement('h2');\r\n  const pTag = document.createElement('p');\r\n  const button = document.createElement('button');\r\n  const aTag = document.createElement('a');\r\n  const mainImg = document.createElement('div');\r\n  const img = document.createElement('img');\r\n\r\n  hOne.textContent = 'NEXT GENERATION';\r\n  hTwo.textContent = 'TECHNOLOGY';\r\n  pTag.textContent = 'See what makes us different';\r\n  aTag.textContent = 'Get Started';\r\n\r\n  img.src = '../images/pic1.svg';\r\n  img.alt = 'messages';\r\n  img.id = \"main__img\";\r\n  mainImg.classList.add('main__img--container');\r\n  mainImg.append(img);\r\n\r\n  button.append(aTag);\r\n  mainContent.append(hOne, hTwo, pTag, button, mainImg);\r\n  mainContainer.append(mainContent);\r\n  content.appendChild(mainContainer);\r\n}\r\n\r\nmodule.exports.hero;\n\n//# sourceURL=webpack://restaurant/./src/modules/hero.js?");

/***/ }),

/***/ "./src/modules/navbar.js":
/*!*******************************!*\
  !*** ./src/modules/navbar.js ***!
  \*******************************/
/***/ ((module) => {

eval("function navbar() {\r\n  const content = document.querySelector('#content');\r\n  const navbar = document.createElement('nav');\r\n  const container = document.createElement('div');\r\n  const logo = document.createElement('a');\r\n  const i = document.createElement('i');\r\n\r\n  const toggle = document.createElement('div');\r\n  const bar1 = document.createElement('span');\r\n  const bar2 = document.createElement('span');\r\n  const bar3 = document.createElement('span');\r\n\r\n  const menu = document.createElement('ul');\r\n  const item1 = document.createElement('li');\r\n  const item2 = document.createElement('li');\r\n  const item3 = document.createElement('li');\r\n  const item4 = document.createElement('li');\r\n  const item5 = document.createElement('li');\r\n  const btn = document.createElement('li');\r\n  const item1Link = document.createElement('a');\r\n  const item2Link = document.createElement('a');\r\n  const item3Link = document.createElement('a');\r\n  const item4Link = document.createElement('a');\r\n  const item5Link = document.createElement('a');\r\n  const btnLink = document.createElement('a');\r\n\r\n  item1.classList.add('navbar__item');\r\n  item2.classList.add('navbar__item');\r\n  item3.classList.add('navbar__item');\r\n  item4.classList.add('navbar__item');\r\n  item5.classList.add('navbar__item');\r\n  btn.classList.add('navbar__btn');\r\n\r\n  item1Link.classList.add('navbar__links');\r\n  item2Link.classList.add('navbar__links');\r\n  item3Link.classList.add('navbar__links');\r\n  item4Link.classList.add('navbar__links');\r\n  item5Link.classList.add('navbar__links');\r\n  btnLink.classList.add('button');\r\n\r\n  item1Link.textContent = 'Home';\r\n  item2Link.textContent = 'Menu';\r\n  item3Link.textContent = 'Chef';\r\n  item4Link.textContent = 'Reservation';\r\n  item5Link.textContent = 'Loacation';\r\n  btnLink.textContent = 'Sign Up';\r\n\r\n\r\n  navbar.classList.add('navbar__container');\r\n  logo.id = 'navbar__logo';\r\n  i.classList.add('fas', 'fa-gem');\r\n  logo.textContent = 'NEXT';\r\n  toggle.classList.add('navbar__toggle');\r\n  toggle.id = 'mobile-menu';\r\n\r\n  bar1.classList.add('bar');\r\n  bar2.classList.add('bar');\r\n  bar3.classList.add('bar');\r\n\r\n\r\n  toggle.append(bar1, bar2, bar3);\r\n\r\n  item1.append(item1Link);\r\n  item2.append(item2Link);\r\n  item3.append(item3Link);\r\n  item4.append(item4Link);\r\n  item5.append(item5Link);\r\n  btn.append(btnLink);\r\n\r\n  logo.append(i);\r\n  menu.append(item1, item2, item3, item4, item5, btn);\r\n  container.append(logo, menu);\r\n  navbar.append(container);\r\n  content.append(navbar);\r\n}\r\n\r\nmodule.exports.navbar;\n\n//# sourceURL=webpack://restaurant/./src/modules/navbar.js?");

/***/ }),

/***/ "./src/modules/services.js":
/*!*********************************!*\
  !*** ./src/modules/services.js ***!
  \*********************************/
/***/ ((module) => {

eval("function services() {\r\n  const content = document.querySelector('#content');\r\n  const services = document.createElement('div');\r\n  const hOne = document.createElement('h1');\r\n  const servContainer = document.createElement('div');\r\n  const cardOne = document.createElement('div');\r\n  const experience = document.createElement('h2');\r\n  const power = document.createElement('p');\r\n  const btnOne = document.createElement('button');\r\n  const cardTwo = document.createElement('div');\r\n  const ready = document.createElement('h2');\r\n  const leap = document.createElement('p');\r\n  const btnTwo = document.createElement('button');\r\n\r\n  services.classList.add('services');\r\n  servContainer.classList.add('services__container');\r\n\r\n  hOne.textContent = 'See what the hype is about';\r\n\r\n  experience.textContent = 'Experience Bliss';\r\n  power.textContent = 'AI Powered Technology';\r\n  btnOne.textContent = 'Get Started';\r\n  cardOne.classList.add('services__card');\r\n  cardOne.append(experience, power, btnOne);\r\n\r\n  ready.textContent = 'Are you Ready?';\r\n  leap.textContent = 'Take the leap';\r\n  btnTwo.textContent = 'Get Started';\r\n  cardTwo.classList.add('services__card');\r\n  cardTwo.append(ready, leap, btnTwo);\r\n\r\n  servContainer.append(cardOne, cardTwo);\r\n  services.append(hOne, servContainer);\r\n  content.append(services);\r\n}\r\n\r\nmodule.exports.services;\n\n//# sourceURL=webpack://restaurant/./src/modules/services.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;