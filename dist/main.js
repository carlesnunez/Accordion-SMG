/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AccordionSMG__ = __webpack_require__(2);

     
/**     
 * We create our instance of accordion object passing the id of the group of 'Accordions' that will handle our actions
 * this will give to us the flexibility to have more than one accordion group
 */
const mainAccordion = new __WEBPACK_IMPORTED_MODULE_0__AccordionSMG__["a" /* default */]('Accordion-1');

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * AccordionSMG is a library that let's you build an accordion menu wherever you want
 */
class AccordionSMG {
    /**
     * @constructor
     * @param {String} accordionContainerId - Id of the div that will wrap all our accordion and elements
     */
    constructor(accordionContainerId) {
        this.accordionContainer = document.getElementById(accordionContainerId);
        this.accordionElements = [...this.accordionContainer.getElementsByClassName('Accordion-handler')];
        this.atachOnClickToAccordionElements();
    }

    /**
     * This function is the responsable to get the accordion element handlers and attach to
     * them the actions to perform on a user click.
     * @function
     */
    atachOnClickToAccordionElements() {
        this.accordionElements.forEach(accordionHandler => {
            accordionHandler.onclick = () => {
                accordionHandler.classList.toggle('Accordion-handler--active');
                const accordionBody = accordionHandler.nextElementSibling;
                accordionBody.classList.toggle('Accordion-body--is-collapsed');
            }
        });
    }

    /**
     * This function will trigger a single accordion given an index.
     * The index must be the number of the desired accordion to be trigged counting from 0
     * 
     * @function
     * @param {Number} index - The index in the same order as are displayed
     */
    triggerAccordionByIndex(index) {
        this.accordionElements[index].click();
    }

    /**
     * Will dispatch all the accordions opening them
     * @function
     */
    openAllAccordions() {
        this.accordionElements.forEach(accordionHandler => {
            accordionHandler.classList.add('Accordion-handler--oppened');
            accordionHandler.nextElementSibling.classList.remove('Accordion-body--is-collapsed')
        });
    }

    /**
     * Will dispatch all the accordions closing them
     * @function
     */
    closeAllAccordions() {
        this.accordionElements.forEach(accordionHandler => {
            accordionHandler.classList.remove('Accordion-handler--oppened');
            accordionHandler.nextElementSibling.classList.add('Accordion-body--is-collapsed')
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AccordionSMG;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);