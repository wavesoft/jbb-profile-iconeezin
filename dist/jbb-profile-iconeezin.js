/* Iconeezin profile for JBB - https://github.com/wavesoft/jbb-profile-iconeezin */
var JBB = JBB || {}; JBB["Profile"] = JBB["Profile"] || {}; JBB["Profile"]["iconeezin"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Iconeezin = __webpack_require__(1);

	/**
	 * Factory & Initializer of Iconeezin.API.AudioFile
	 */
	var factory_Iconeezin_API_AudioFile = {
		props: 1,
		create: function() {
			return Object.create(Iconeezin.API.AudioFile.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			Iconeezin.API.AudioFile.call(inst,
				props[offset+pagesize*0]);
		}
	}

	/**
	 * Factory & Initializer of Iconeezin.API.ExperimentFile
	 */
	var factory_Iconeezin_API_ExperimentFile = {
		props: 2,
		create: function() {
			return Object.create(Iconeezin.API.ExperimentFile.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			Iconeezin.API.ExperimentFile.call(inst,
				props[offset+pagesize*0],
				props[offset+pagesize*1]);
		}
	}

	module.exports = {
		id: 32,
		size: 2,
		frequent: 0,
		decode: function( id ) {
				if (id < 32) {
					/* No items */
				} else {
					if (id < 33) {
						if (id === 32)
							return factory_Iconeezin_API_AudioFile;
					} else {
						if (id === 33)
							return factory_Iconeezin_API_ExperimentFile;
					}
				}
			}
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = Iconeezin;

/***/ }
/******/ ]);