(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReduxForm"] = factory(require("react"));
	else
		root["ReduxForm"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_11__) {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.untouchWithKey = exports.untouch = exports.touchWithKey = exports.touch = exports.swapArrayValues = exports.stopSubmit = exports.stopAsyncValidation = exports.startSubmit = exports.startAsyncValidation = exports.reset = exports.propTypes = exports.initializeWithKey = exports.initialize = exports.getValues = exports.removeArrayValue = exports.reduxForm = exports.reducer = exports.focus = exports.destroy = exports.changeWithKey = exports.change = exports.blur = exports.autofillWithKey = exports.autofill = exports.addArrayValue = exports.actionTypes = undefined;

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(90);

	var _createAll2 = __webpack_require__(38);

	var _createAll3 = _interopRequireDefault(_createAll2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isNative = typeof window !== 'undefined' && window.navigator && window.navigator.product && window.navigator.product === 'ReactNative';

	var _createAll = (0, _createAll3.default)(isNative, _react2.default, _reactRedux.connect);

	var actionTypes = _createAll.actionTypes,
	    addArrayValue = _createAll.addArrayValue,
	    autofill = _createAll.autofill,
	    autofillWithKey = _createAll.autofillWithKey,
	    blur = _createAll.blur,
	    change = _createAll.change,
	    changeWithKey = _createAll.changeWithKey,
	    destroy = _createAll.destroy,
	    focus = _createAll.focus,
	    reducer = _createAll.reducer,
	    reduxForm = _createAll.reduxForm,
	    removeArrayValue = _createAll.removeArrayValue,
	    getValues = _createAll.getValues,
	    initialize = _createAll.initialize,
	    initializeWithKey = _createAll.initializeWithKey,
	    propTypes = _createAll.propTypes,
	    reset = _createAll.reset,
	    startAsyncValidation = _createAll.startAsyncValidation,
	    startSubmit = _createAll.startSubmit,
	    stopAsyncValidation = _createAll.stopAsyncValidation,
	    stopSubmit = _createAll.stopSubmit,
	    swapArrayValues = _createAll.swapArrayValues,
	    touch = _createAll.touch,
	    touchWithKey = _createAll.touchWithKey,
	    untouch = _createAll.untouch,
	    untouchWithKey = _createAll.untouchWithKey;
	exports.actionTypes = actionTypes;
	exports.addArrayValue = addArrayValue;
	exports.autofill = autofill;
	exports.autofillWithKey = autofillWithKey;
	exports.blur = blur;
	exports.change = change;
	exports.changeWithKey = changeWithKey;
	exports.destroy = destroy;
	exports.focus = focus;
	exports.reducer = reducer;
	exports.reduxForm = reduxForm;
	exports.removeArrayValue = removeArrayValue;
	exports.getValues = getValues;
	exports.initialize = initialize;
	exports.initializeWithKey = initializeWithKey;
	exports.propTypes = propTypes;
	exports.reset = reset;
	exports.startAsyncValidation = startAsyncValidation;
	exports.startSubmit = startSubmit;
	exports.stopAsyncValidation = stopAsyncValidation;
	exports.stopSubmit = stopSubmit;
	exports.swapArrayValues = swapArrayValues;
	exports.touch = touch;
	exports.touchWithKey = touchWithKey;
	exports.untouch = untouch;
	exports.untouchWithKey = untouchWithKey;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.makeFieldValue = makeFieldValue;
	exports.isFieldValue = isFieldValue;
	var flag = '_isFieldValue';
	var isObject = function isObject(object) {
	  return typeof object === 'object';
	};

	function makeFieldValue(object) {
	  if (object && isObject(object)) {
	    Object.defineProperty(object, flag, { value: true });
	  }
	  return object;
	}

	function isFieldValue(object) {
	  return !!(object && isObject(object) && object[flag]);
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (true) {
	  var ReactIs = __webpack_require__(10);

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(84)(ReactIs.isElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = require('./factoryWithThrowingShims')();
	}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = isValid;
	function isValid(error) {
	  if (Array.isArray(error)) {
	    return error.reduce(function (valid, errorValue) {
	      return valid && isValid(errorValue);
	    }, true);
	  }
	  if (error && typeof error === 'object') {
	    return Object.keys(error).reduce(function (valid, key) {
	      return valid && isValid(error[key]);
	    }, true);
	  }
	  return !error;
	}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var ADD_ARRAY_VALUE = exports.ADD_ARRAY_VALUE = 'redux-form/ADD_ARRAY_VALUE';
	var AUTOFILL = exports.AUTOFILL = 'redux-form/AUTOFILL';
	var BLUR = exports.BLUR = 'redux-form/BLUR';
	var CHANGE = exports.CHANGE = 'redux-form/CHANGE';
	var DESTROY = exports.DESTROY = 'redux-form/DESTROY';
	var FOCUS = exports.FOCUS = 'redux-form/FOCUS';
	var INITIALIZE = exports.INITIALIZE = 'redux-form/INITIALIZE';
	var REMOVE_ARRAY_VALUE = exports.REMOVE_ARRAY_VALUE = 'redux-form/REMOVE_ARRAY_VALUE';
	var RESET = exports.RESET = 'redux-form/RESET';
	var START_ASYNC_VALIDATION = exports.START_ASYNC_VALIDATION = 'redux-form/START_ASYNC_VALIDATION';
	var START_SUBMIT = exports.START_SUBMIT = 'redux-form/START_SUBMIT';
	var STOP_ASYNC_VALIDATION = exports.STOP_ASYNC_VALIDATION = 'redux-form/STOP_ASYNC_VALIDATION';
	var STOP_SUBMIT = exports.STOP_SUBMIT = 'redux-form/STOP_SUBMIT';
	var SUBMIT_FAILED = exports.SUBMIT_FAILED = 'redux-form/SUBMIT_FAILED';
	var SWAP_ARRAY_VALUES = exports.SWAP_ARRAY_VALUES = 'redux-form/SWAP_ARRAY_VALUES';
	var TOUCH = exports.TOUCH = 'redux-form/TOUCH';
	var UNTOUCH = exports.UNTOUCH = 'redux-form/UNTOUCH';

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = mapValues;
	/**
	 * Maps all the values in the given object through the given function and saves them, by key, to a result object
	 */
	function mapValues(obj, fn) {
	  return obj ? Object.keys(obj).reduce(function (accumulator, key) {
	    var _extends2;

	    return _extends({}, accumulator, (_extends2 = {}, _extends2[key] = fn(obj[key], key), _extends2));
	  }, {}) : obj;
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var keys = __webpack_require__(26);
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

	var toStr = Object.prototype.toString;
	var concat = Array.prototype.concat;
	var origDefineProperty = Object.defineProperty;

	var isFunction = function (fn) {
		return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
	};

	var arePropertyDescriptorsSupported = function () {
		var obj = {};
		try {
			origDefineProperty(obj, 'x', { enumerable: false, value: obj });
			// eslint-disable-next-line no-unused-vars, no-restricted-syntax
			for (var _ in obj) { // jscs:ignore disallowUnusedVariables
				return false;
			}
			return obj.x === obj;
		} catch (e) { /* this is IE 8. */
			return false;
		}
	};
	var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

	var defineProperty = function (object, name, value, predicate) {
		if (name in object && (!isFunction(predicate) || !predicate())) {
			return;
		}
		if (supportsDescriptors) {
			origDefineProperty(object, name, {
				configurable: true,
				enumerable: false,
				value: value,
				writable: true
			});
		} else {
			object[name] = value;
		}
	};

	var defineProperties = function (object, map) {
		var predicates = arguments.length > 2 ? arguments[2] : {};
		var props = keys(map);
		if (hasSymbols) {
			props = concat.call(props, Object.getOwnPropertySymbols(map));
		}
		for (var i = 0; i < props.length; i += 1) {
			defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
		}
	};

	defineProperties.supportsDescriptors = !!supportsDescriptors;

	module.exports = defineProperties;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var implementation = __webpack_require__(63);

	module.exports = Function.prototype.bind || implementation;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = isPromise;

	function isPromise(obj) {
	  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
	}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(72),
	    getPrototype = __webpack_require__(74),
	    isObjectLike = __webpack_require__(79);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	if (false) {
	  module.exports = require('./cjs/react-is.production.min.js');
	} else {
	  module.exports = __webpack_require__(85);
	}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.untouch = exports.touch = exports.swapArrayValues = exports.submitFailed = exports.stopSubmit = exports.stopAsyncValidation = exports.startSubmit = exports.startAsyncValidation = exports.reset = exports.removeArrayValue = exports.initialize = exports.focus = exports.destroy = exports.change = exports.blur = exports.autofill = exports.addArrayValue = undefined;

	var _actionTypes = __webpack_require__(4);

	var addArrayValue = exports.addArrayValue = function addArrayValue(path, value, index, fields) {
	  return { type: _actionTypes.ADD_ARRAY_VALUE, path: path, value: value, index: index, fields: fields };
	};

	var autofill = exports.autofill = function autofill(field, value) {
	  return { type: _actionTypes.AUTOFILL, field: field, value: value };
	};

	var blur = exports.blur = function blur(field, value) {
	  return { type: _actionTypes.BLUR, field: field, value: value };
	};

	var change = exports.change = function change(field, value) {
	  return { type: _actionTypes.CHANGE, field: field, value: value };
	};

	var destroy = exports.destroy = function destroy() {
	  return { type: _actionTypes.DESTROY };
	};

	var focus = exports.focus = function focus(field) {
	  return { type: _actionTypes.FOCUS, field: field };
	};

	var initialize = exports.initialize = function initialize(data, fields) {
	  var overwriteValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

	  if (!Array.isArray(fields)) {
	    throw new Error('must provide fields array to initialize() action creator');
	  }
	  return { type: _actionTypes.INITIALIZE, data: data, fields: fields, overwriteValues: overwriteValues };
	};

	var removeArrayValue = exports.removeArrayValue = function removeArrayValue(path, index) {
	  return { type: _actionTypes.REMOVE_ARRAY_VALUE, path: path, index: index };
	};

	var reset = exports.reset = function reset() {
	  return { type: _actionTypes.RESET };
	};

	var startAsyncValidation = exports.startAsyncValidation = function startAsyncValidation(field) {
	  return { type: _actionTypes.START_ASYNC_VALIDATION, field: field };
	};

	var startSubmit = exports.startSubmit = function startSubmit() {
	  return { type: _actionTypes.START_SUBMIT };
	};

	var stopAsyncValidation = exports.stopAsyncValidation = function stopAsyncValidation(errors) {
	  return { type: _actionTypes.STOP_ASYNC_VALIDATION, errors: errors };
	};

	var stopSubmit = exports.stopSubmit = function stopSubmit(errors) {
	  return { type: _actionTypes.STOP_SUBMIT, errors: errors };
	};

	var submitFailed = exports.submitFailed = function submitFailed() {
	  return { type: _actionTypes.SUBMIT_FAILED };
	};

	var swapArrayValues = exports.swapArrayValues = function swapArrayValues(path, indexA, indexB) {
	  return { type: _actionTypes.SWAP_ARRAY_VALUES, path: path, indexA: indexA, indexB: indexB };
	};

	var touch = exports.touch = function touch() {
	  for (var _len = arguments.length, fields = Array(_len), _key = 0; _key < _len; _key++) {
	    fields[_key] = arguments[_key];
	  }

	  return { type: _actionTypes.TOUCH, fields: fields };
	};

	var untouch = exports.untouch = function untouch() {
	  for (var _len2 = arguments.length, fields = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    fields[_key2] = arguments[_key2];
	  }

	  return { type: _actionTypes.UNTOUCH, fields: fields };
	};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = bindActionData;

	var _mapValues = __webpack_require__(5);

	var _mapValues2 = _interopRequireDefault(_mapValues);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Adds additional properties to the results of the function or map of functions passed
	 */
	function bindActionData(action, data) {
	  if (typeof action === 'function') {
	    return function () {
	      return _extends({}, action.apply(undefined, arguments), data);
	    };
	  }
	  if (typeof action === 'object') {
	    return (0, _mapValues2.default)(action, function (value) {
	      return bindActionData(value, data);
	    });
	  }
	  return action;
	}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var dataKey = exports.dataKey = 'value';
	var createOnDragStart = function createOnDragStart(name, getValue) {
	  return function (event) {
	    event.dataTransfer.setData(dataKey, getValue());
	  };
	};

	exports.default = createOnDragStart;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _isEvent = __webpack_require__(16);

	var _isEvent2 = _interopRequireDefault(_isEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getSelectedValues = function getSelectedValues(options) {
	  var result = [];
	  if (options) {
	    for (var index = 0; index < options.length; index++) {
	      var option = options[index];
	      if (option.selected) {
	        result.push(option.value);
	      }
	    }
	  }
	  return result;
	};

	var getValue = function getValue(event, isReactNative) {
	  if ((0, _isEvent2.default)(event)) {
	    if (!isReactNative && event.nativeEvent && event.nativeEvent.text !== undefined) {
	      return event.nativeEvent.text;
	    }
	    if (isReactNative && event.nativeEvent !== undefined) {
	      return event.nativeEvent.text;
	    }
	    var _event$target = event.target,
	        type = _event$target.type,
	        value = _event$target.value,
	        checked = _event$target.checked,
	        files = _event$target.files,
	        dataTransfer = event.dataTransfer;

	    if (type === 'checkbox') {
	      return checked;
	    }
	    if (type === 'file') {
	      return files || dataTransfer && dataTransfer.files;
	    }
	    if (type === 'select-multiple') {
	      return getSelectedValues(event.target.options);
	    }
	    return value;
	  }
	  // not an event, so must be either our value or an object containing our value in the 'value' key
	  return event && typeof event === 'object' && event.value !== undefined ? event.value : // extract value from { value: value } structure. https://github.com/nikgraf/belle/issues/58
	  event;
	};

	exports.default = getValue;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var isEvent = function isEvent(candidate) {
	  return !!(candidate && candidate.stopPropagation && candidate.preventDefault);
	};

	exports.default = isEvent;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _isEvent = __webpack_require__(16);

	var _isEvent2 = _interopRequireDefault(_isEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var silenceEvent = function silenceEvent(event) {
	  var is = (0, _isEvent2.default)(event);
	  if (is) {
	    event.preventDefault();
	  }
	  return is;
	};

	exports.default = silenceEvent;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = getDisplayName;
	function getDisplayName(Comp) {
	  return Comp.displayName || Comp.name || 'Component';
	}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	/**
	 * Given a state[field], get the value.
	 *  Fallback to .initialValue when .value is undefined to prevent double render/initialize cycle.
	 *  See {@link https://github.com/erikras/redux-form/issues/621}.
	 */
	var itemToValue = function itemToValue(_ref) {
	  var value = _ref.value,
	      initialValue = _ref.initialValue;
	  return typeof value !== 'undefined' ? value : initialValue;
	};

	var getValue = function getValue(field, state, dest) {
	  var dotIndex = field.indexOf('.');
	  var openIndex = field.indexOf('[');
	  var closeIndex = field.indexOf(']');
	  if (openIndex > 0 && closeIndex !== openIndex + 1) {
	    throw new Error('found [ not followed by ]');
	  }
	  if (openIndex > 0 && (dotIndex < 0 || openIndex < dotIndex)) {
	    // array field
	    var key = field.substring(0, openIndex);
	    var rest = field.substring(closeIndex + 1);
	    if (rest[0] === '.') {
	      rest = rest.substring(1);
	    }
	    var array = state && state[key] || [];
	    if (rest) {
	      if (!dest[key]) {
	        dest[key] = [];
	      }
	      array.forEach(function (item, index) {
	        if (!dest[key][index]) {
	          dest[key][index] = {};
	        }
	        getValue(rest, item, dest[key][index]);
	      });
	    } else {
	      dest[key] = array.map(itemToValue);
	    }
	  } else if (dotIndex > 0) {
	    // subobject field
	    var _key = field.substring(0, dotIndex);
	    var _rest = field.substring(dotIndex + 1);
	    if (!dest[_key]) {
	      dest[_key] = {};
	    }
	    getValue(_rest, state && state[_key] || {}, dest[_key]);
	  } else {
	    dest[field] = state[field] && itemToValue(state[field]);
	  }
	};

	var getValues = function getValues(fields, state) {
	  return fields.reduce(function (accumulator, field) {
	    getValue(field, state, accumulator);
	    return accumulator;
	  }, {});
	};

	exports.default = getValues;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _fieldValue = __webpack_require__(1);

	/**
	 * A different version of getValues() that does not need the fields array
	 */
	var getValuesFromState = function getValuesFromState(state) {
	  if (!state) {
	    return state;
	  }
	  var keys = Object.keys(state);
	  if (!keys.length) {
	    return undefined;
	  }
	  return keys.reduce(function (accumulator, key) {
	    var field = state[key];
	    if (field) {
	      if ((0, _fieldValue.isFieldValue)(field)) {
	        if (field.value !== undefined) {
	          accumulator[key] = field.value;
	        }
	      } else if (Array.isArray(field)) {
	        accumulator[key] = field.map(function (arrayField) {
	          return (0, _fieldValue.isFieldValue)(arrayField) ? arrayField.value : getValuesFromState(arrayField);
	        });
	      } else if (typeof field === 'object') {
	        var result = getValuesFromState(field);

	        if (result && Object.keys(result).length > 0) {
	          accumulator[key] = result;
	        }
	      }
	    }
	    return accumulator;
	  }, {});
	};

	exports.default = getValuesFromState;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	/**
	 * Reads any potentially deep value from an object using dot and array syntax
	 */
	var read = function read(path, object) {
	  if (!path || !object) {
	    return object;
	  }
	  var dotIndex = path.indexOf('.');
	  if (dotIndex === 0) {
	    return read(path.substring(1), object);
	  }
	  var openIndex = path.indexOf('[');
	  var closeIndex = path.indexOf(']');
	  if (dotIndex >= 0 && (openIndex < 0 || dotIndex < openIndex)) {
	    // iterate down object tree
	    return read(path.substring(dotIndex + 1), object[path.substring(0, dotIndex)]);
	  }
	  if (openIndex >= 0 && (dotIndex < 0 || openIndex < dotIndex)) {
	    if (closeIndex < 0) {
	      throw new Error('found [ but no ]');
	    }
	    var key = path.substring(0, openIndex);
	    var index = path.substring(openIndex + 1, closeIndex);
	    if (!index.length) {
	      return object[key];
	    }
	    if (openIndex === 0) {
	      return read(path.substring(closeIndex + 1), object[index]);
	    }
	    if (!object[key]) {
	      return undefined;
	    }
	    return read(path.substring(closeIndex + 1), object[key][index]);
	  }
	  return object[path];
	};

	exports.default = read;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.initialState = exports.globalErrorKey = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _initialState, _behaviors;

	var _actionTypes = __webpack_require__(4);

	var _mapValues = __webpack_require__(5);

	var _mapValues2 = _interopRequireDefault(_mapValues);

	var _read = __webpack_require__(21);

	var _read2 = _interopRequireDefault(_read);

	var _write = __webpack_require__(23);

	var _write2 = _interopRequireDefault(_write);

	var _getValuesFromState = __webpack_require__(20);

	var _getValuesFromState2 = _interopRequireDefault(_getValuesFromState);

	var _initializeState = __webpack_require__(49);

	var _initializeState2 = _interopRequireDefault(_initializeState);

	var _resetState = __webpack_require__(55);

	var _resetState2 = _interopRequireDefault(_resetState);

	var _setErrors = __webpack_require__(56);

	var _setErrors2 = _interopRequireDefault(_setErrors);

	var _fieldValue = __webpack_require__(1);

	var _normalizeFields = __webpack_require__(51);

	var _normalizeFields2 = _interopRequireDefault(_normalizeFields);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var globalErrorKey = exports.globalErrorKey = '_error';

	var initialState = exports.initialState = (_initialState = {
	  _active: undefined,
	  _asyncValidating: false
	}, _initialState[globalErrorKey] = undefined, _initialState._initialized = false, _initialState._submitting = false, _initialState._submitFailed = false, _initialState);

	var behaviors = (_behaviors = {}, _behaviors[_actionTypes.ADD_ARRAY_VALUE] = function (state, _ref) {
	  var path = _ref.path,
	      index = _ref.index,
	      value = _ref.value,
	      fields = _ref.fields;

	  var array = (0, _read2.default)(path, state);
	  var stateCopy = _extends({}, state);
	  var arrayCopy = array ? [].concat(array) : [];
	  var newValue = value !== null && typeof value === 'object' ? (0, _initializeState2.default)(value, fields || Object.keys(value)) : (0, _fieldValue.makeFieldValue)({ value: value });
	  if (index === undefined) {
	    arrayCopy.push(newValue);
	  } else {
	    arrayCopy.splice(index, 0, newValue);
	  }
	  return (0, _write2.default)(path, arrayCopy, stateCopy);
	}, _behaviors[_actionTypes.AUTOFILL] = function (state, _ref2) {
	  var field = _ref2.field,
	      value = _ref2.value;

	  return (0, _write2.default)(field, function (previous) {
	    var _previous$value$autof = _extends({}, previous, { value: value, autofilled: true }),
	        asyncError = _previous$value$autof.asyncError,
	        submitError = _previous$value$autof.submitError,
	        result = _objectWithoutProperties(_previous$value$autof, ['asyncError', 'submitError']);

	    return (0, _fieldValue.makeFieldValue)(result);
	  }, state);
	}, _behaviors[_actionTypes.BLUR] = function (state, _ref3) {
	  var field = _ref3.field,
	      value = _ref3.value,
	      touch = _ref3.touch;

	  // remove _active from state
	  var _active = state._active,
	      stateCopy = _objectWithoutProperties(state, ['_active']); // eslint-disable-line prefer-const


	  return (0, _write2.default)(field, function (previous) {
	    var result = _extends({}, previous);
	    if (value !== undefined) {
	      result.value = value;
	    }
	    if (touch) {
	      result.touched = true;
	    }
	    return (0, _fieldValue.makeFieldValue)(result);
	  }, stateCopy);
	}, _behaviors[_actionTypes.CHANGE] = function (state, _ref4) {
	  var field = _ref4.field,
	      value = _ref4.value,
	      touch = _ref4.touch;

	  return (0, _write2.default)(field, function (previous) {
	    var _previous$value = _extends({}, previous, { value: value }),
	        asyncError = _previous$value.asyncError,
	        submitError = _previous$value.submitError,
	        autofilled = _previous$value.autofilled,
	        result = _objectWithoutProperties(_previous$value, ['asyncError', 'submitError', 'autofilled']);

	    if (touch) {
	      result.touched = true;
	    }
	    return (0, _fieldValue.makeFieldValue)(result);
	  }, state);
	}, _behaviors[_actionTypes.DESTROY] = function () {
	  return undefined;
	}, _behaviors[_actionTypes.FOCUS] = function (state, _ref5) {
	  var field = _ref5.field;

	  var stateCopy = (0, _write2.default)(field, function (previous) {
	    return (0, _fieldValue.makeFieldValue)(_extends({}, previous, { visited: true }));
	  }, state);
	  stateCopy._active = field;
	  return stateCopy;
	}, _behaviors[_actionTypes.INITIALIZE] = function (state, _ref6) {
	  var _extends2;

	  var data = _ref6.data,
	      fields = _ref6.fields,
	      overwriteValues = _ref6.overwriteValues;

	  return _extends({}, (0, _initializeState2.default)(data, fields, state, overwriteValues), (_extends2 = {
	    _asyncValidating: false,
	    _active: undefined
	  }, _extends2[globalErrorKey] = undefined, _extends2._initialized = true, _extends2._submitting = false, _extends2._submitFailed = false, _extends2));
	}, _behaviors[_actionTypes.REMOVE_ARRAY_VALUE] = function (state, _ref7) {
	  var path = _ref7.path,
	      index = _ref7.index;

	  var array = (0, _read2.default)(path, state);
	  var stateCopy = _extends({}, state);
	  var arrayCopy = array ? [].concat(array) : [];
	  if (index === undefined) {
	    arrayCopy.pop();
	  } else if (isNaN(index)) {
	    delete arrayCopy[index];
	  } else {
	    arrayCopy.splice(index, 1);
	  }
	  return (0, _write2.default)(path, arrayCopy, stateCopy);
	}, _behaviors[_actionTypes.RESET] = function (state) {
	  var _extends3;

	  return _extends({}, (0, _resetState2.default)(state), (_extends3 = {
	    _active: undefined,
	    _asyncValidating: false
	  }, _extends3[globalErrorKey] = undefined, _extends3._initialized = state._initialized, _extends3._submitting = false, _extends3._submitFailed = false, _extends3));
	}, _behaviors[_actionTypes.START_ASYNC_VALIDATION] = function (state, _ref8) {
	  var field = _ref8.field;

	  return _extends({}, state, {
	    _asyncValidating: field || true
	  });
	}, _behaviors[_actionTypes.START_SUBMIT] = function (state) {
	  return _extends({}, state, {
	    _submitting: true
	  });
	}, _behaviors[_actionTypes.STOP_ASYNC_VALIDATION] = function (state, _ref9) {
	  var _extends4;

	  var errors = _ref9.errors;

	  return _extends({}, (0, _setErrors2.default)(state, errors, 'asyncError'), (_extends4 = {
	    _asyncValidating: false
	  }, _extends4[globalErrorKey] = errors && errors[globalErrorKey], _extends4));
	}, _behaviors[_actionTypes.STOP_SUBMIT] = function (state, _ref10) {
	  var _extends5;

	  var errors = _ref10.errors;

	  return _extends({}, (0, _setErrors2.default)(state, errors, 'submitError'), (_extends5 = {}, _extends5[globalErrorKey] = errors && errors[globalErrorKey], _extends5._submitting = false, _extends5._submitFailed = !!(errors && Object.keys(errors).length), _extends5));
	}, _behaviors[_actionTypes.SUBMIT_FAILED] = function (state) {
	  return _extends({}, state, {
	    _submitFailed: true
	  });
	}, _behaviors[_actionTypes.SWAP_ARRAY_VALUES] = function (state, _ref11) {
	  var path = _ref11.path,
	      indexA = _ref11.indexA,
	      indexB = _ref11.indexB;

	  var array = (0, _read2.default)(path, state);
	  var arrayLength = array.length;
	  if (indexA === indexB || isNaN(indexA) || isNaN(indexB) || indexA >= arrayLength || indexB >= arrayLength) {
	    return state; // do nothing
	  }
	  var stateCopy = _extends({}, state);
	  var arrayCopy = [].concat(array);
	  arrayCopy[indexA] = array[indexB];
	  arrayCopy[indexB] = array[indexA];
	  return (0, _write2.default)(path, arrayCopy, stateCopy);
	}, _behaviors[_actionTypes.TOUCH] = function (state, _ref12) {
	  var fields = _ref12.fields;

	  return _extends({}, state, fields.reduce(function (accumulator, field) {
	    return (0, _write2.default)(field, function (value) {
	      return (0, _fieldValue.makeFieldValue)(_extends({}, value, { touched: true }));
	    }, accumulator);
	  }, state));
	}, _behaviors[_actionTypes.UNTOUCH] = function (state, _ref13) {
	  var fields = _ref13.fields;

	  return _extends({}, state, fields.reduce(function (accumulator, field) {
	    return (0, _write2.default)(field, function (value) {
	      if (value) {
	        var touched = value.touched,
	            rest = _objectWithoutProperties(value, ['touched']);

	        return (0, _fieldValue.makeFieldValue)(rest);
	      }
	      return (0, _fieldValue.makeFieldValue)(value);
	    }, accumulator);
	  }, state));
	}, _behaviors);

	var reducer = function reducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  var behavior = behaviors[action.type];
	  return behavior ? behavior(state, action) : state;
	};

	function formReducer() {
	  var _extends11;

	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  var form = action.form,
	      key = action.key,
	      rest = _objectWithoutProperties(action, ['form', 'key']); // eslint-disable-line no-redeclare


	  if (!form) {
	    return state;
	  }
	  if (key) {
	    var _extends8, _extends9;

	    if (action.type === _actionTypes.DESTROY) {
	      var _extends7;

	      return _extends({}, state, (_extends7 = {}, _extends7[form] = state[form] && Object.keys(state[form]).reduce(function (accumulator, stateKey) {
	        var _extends6;

	        return stateKey === key ? accumulator : _extends({}, accumulator, (_extends6 = {}, _extends6[stateKey] = state[form][stateKey], _extends6));
	      }, {}), _extends7));
	    }
	    return _extends({}, state, (_extends9 = {}, _extends9[form] = _extends({}, state[form], (_extends8 = {}, _extends8[key] = reducer((state[form] || {})[key], rest), _extends8)), _extends9));
	  }
	  if (action.type === _actionTypes.DESTROY) {
	    return Object.keys(state).reduce(function (accumulator, formName) {
	      var _extends10;

	      return formName === form ? accumulator : _extends({}, accumulator, (_extends10 = {}, _extends10[formName] = state[formName], _extends10));
	    }, {});
	  }
	  return _extends({}, state, (_extends11 = {}, _extends11[form] = reducer(state[form], rest), _extends11));
	}

	/**
	 * Adds additional functionality to the reducer
	 */
	function decorate(target) {
	  target.plugin = function plugin(reducers) {
	    var _this = this;

	    // use 'function' keyword to enable 'this'
	    return decorate(function () {
	      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var result = _this(state, action);
	      return _extends({}, result, (0, _mapValues2.default)(reducers, function (pluginReducer, key) {
	        return pluginReducer(result[key] || initialState, action);
	      }));
	    });
	  };

	  target.normalize = function normalize(normalizers) {
	    var _this2 = this;

	    // use 'function' keyword to enable 'this'
	    return decorate(function () {
	      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var result = _this2(state, action);
	      return _extends({}, result, (0, _mapValues2.default)(normalizers, function (formNormalizers, form) {
	        var runNormalize = function runNormalize(previous, currentResult) {
	          var previousValues = (0, _getValuesFromState2.default)(_extends({}, initialState, previous));
	          var formResult = _extends({}, initialState, currentResult);
	          var values = (0, _getValuesFromState2.default)(formResult);
	          return (0, _normalizeFields2.default)(formNormalizers, formResult, previous, values, previousValues);
	        };
	        if (action.key) {
	          var _extends12;

	          return _extends({}, result[form], (_extends12 = {}, _extends12[action.key] = runNormalize(state[form][action.key], result[form][action.key]), _extends12));
	        }
	        return runNormalize(state[form], result[form]);
	      }));
	    });
	  };

	  return target;
	}

	exports.default = decorate(formReducer);

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	/**
	 * Writes any potentially deep value from an object using dot and array syntax,
	 * and returns a new copy of the object.
	 */
	var write = function write(path, value, object) {
	  var _extends7;

	  var dotIndex = path.indexOf('.');
	  if (dotIndex === 0) {
	    return write(path.substring(1), value, object);
	  }
	  var openIndex = path.indexOf('[');
	  var closeIndex = path.indexOf(']');
	  if (dotIndex >= 0 && (openIndex < 0 || dotIndex < openIndex)) {
	    var _extends2;

	    // is dot notation
	    var key = path.substring(0, dotIndex);
	    return _extends({}, object, (_extends2 = {}, _extends2[key] = write(path.substring(dotIndex + 1), value, object[key] || {}), _extends2));
	  }
	  if (openIndex >= 0 && (dotIndex < 0 || openIndex < dotIndex)) {
	    var _extends6;

	    // is array notation
	    if (closeIndex < 0) {
	      throw new Error('found [ but no ]');
	    }
	    var _key = path.substring(0, openIndex);
	    var index = path.substring(openIndex + 1, closeIndex);
	    var array = object[_key] || [];
	    var rest = path.substring(closeIndex + 1);
	    if (index) {
	      var _extends4;

	      // indexed array
	      if (rest.length) {
	        var _extends3;

	        // need to keep recursing
	        var dest = array[index] || {};
	        var arrayCopy = [].concat(array);
	        arrayCopy[index] = write(rest, value, dest);
	        return _extends({}, object || {}, (_extends3 = {}, _extends3[_key] = arrayCopy, _extends3));
	      }
	      var copy = [].concat(array);
	      copy[index] = typeof value === 'function' ? value(copy[index]) : value;
	      return _extends({}, object || {}, (_extends4 = {}, _extends4[_key] = copy, _extends4));
	    }
	    // indexless array
	    if (rest.length) {
	      var _extends5;

	      // need to keep recursing
	      if ((!array || !array.length) && typeof value === 'function') {
	        return object; // don't even set a value under [key]
	      }
	      var _arrayCopy = array.map(function (dest) {
	        return write(rest, value, dest);
	      });
	      return _extends({}, object || {}, (_extends5 = {}, _extends5[_key] = _arrayCopy, _extends5));
	    }
	    var result = void 0;
	    if (Array.isArray(value)) {
	      result = value;
	    } else if (object[_key]) {
	      result = array.map(function (dest) {
	        return typeof value === 'function' ? value(dest) : value;
	      });
	    } else if (typeof value === 'function') {
	      return object; // don't even set a value under [key]
	    } else {
	      result = value;
	    }
	    return _extends({}, object || {}, (_extends6 = {}, _extends6[_key] = result, _extends6));
	  }
	  return _extends({}, object, (_extends7 = {}, _extends7[path] = typeof value === 'function' ? value(object[path]) : value, _extends7));
	};

	exports.default = write;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var objectKeys = __webpack_require__(26);
	var isArguments = __webpack_require__(69);
	var is = __webpack_require__(81);
	var isRegex = __webpack_require__(71);
	var flags = __webpack_require__(97);
	var isDate = __webpack_require__(70);

	var getTime = Date.prototype.getTime;

	function deepEqual(actual, expected, options) {
	  var opts = options || {};

	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (opts.strict ? is(actual, expected) : actual === expected) {
	    return true;
	  }

	  // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.
	  if (!actual || !expected || (typeof actual !== 'object' && typeof expected !== 'object')) {
	    return opts.strict ? is(actual, expected) : actual == expected;
	  }

	  /*
	   * 7.4. For all other Object pairs, including Array objects, equivalence is
	   * determined by having the same number of owned properties (as verified
	   * with Object.prototype.hasOwnProperty.call), the same set of keys
	   * (although not necessarily the same order), equivalent values for every
	   * corresponding key, and an identical 'prototype' property. Note: this
	   * accounts for both named and indexed properties on Arrays.
	   */
	  // eslint-disable-next-line no-use-before-define
	  return objEquiv(actual, expected, opts);
	}

	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}

	function isBuffer(x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {
	    return false;
	  }
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') {
	    return false;
	  }
	  return true;
	}

	function objEquiv(a, b, opts) {
	  /* eslint max-statements: [2, 50] */
	  var i, key;
	  if (typeof a !== typeof b) { return false; }
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) { return false; }

	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) { return false; }

	  if (isArguments(a) !== isArguments(b)) { return false; }

	  var aIsRegex = isRegex(a);
	  var bIsRegex = isRegex(b);
	  if (aIsRegex !== bIsRegex) { return false; }
	  if (aIsRegex || bIsRegex) {
	    return a.source === b.source && flags(a) === flags(b);
	  }

	  if (isDate(a) && isDate(b)) {
	    return getTime.call(a) === getTime.call(b);
	  }

	  var aIsBuffer = isBuffer(a);
	  var bIsBuffer = isBuffer(b);
	  if (aIsBuffer !== bIsBuffer) { return false; }
	  if (aIsBuffer || bIsBuffer) { // && would work too, because both are true or both false here
	    if (a.length !== b.length) { return false; }
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) { return false; }
	    }
	    return true;
	  }

	  if (typeof a !== typeof b) { return false; }

	  try {
	    var ka = objectKeys(a);
	    var kb = objectKeys(b);
	  } catch (e) { // happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates hasOwnProperty)
	  if (ka.length !== kb.length) { return false; }

	  // the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  // ~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i]) { return false; }
	  }
	  // equivalent values for every corresponding key, and ~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) { return false; }
	  }

	  return true;
	}

	module.exports = deepEqual;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(78);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var slice = Array.prototype.slice;
	var isArgs = __webpack_require__(27);

	var origKeys = Object.keys;
	var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(82);

	var originalKeys = Object.keys;

	keysShim.shim = function shimObjectKeys() {
		if (Object.keys) {
			var keysWorksWithArguments = (function () {
				// Safari 5.0 bug
				var args = Object.keys(arguments);
				return args && args.length === arguments.length;
			}(1, 2));
			if (!keysWorksWithArguments) {
				Object.keys = function keys(object) { // eslint-disable-line func-name-matching
					if (isArgs(object)) {
						return originalKeys(slice.call(object));
					}
					return originalKeys(object);
				};
			}
		} else {
			Object.keys = keysShim;
		}
		return Object.keys || keysShim;
	};

	module.exports = keysShim;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';

	var toStr = Object.prototype.toString;

	module.exports = function isArguments(value) {
		var str = toStr.call(value);
		var isArgs = str === '[object Arguments]';
		if (!isArgs) {
			isArgs = str !== '[object Array]' &&
				value !== null &&
				typeof value === 'object' &&
				typeof value.length === 'number' &&
				value.length >= 0 &&
				toStr.call(value.callee) === '[object Function]';
		}
		return isArgs;
	};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _propTypes2["default"].shape({
	  subscribe: _propTypes2["default"].func.isRequired,
	  dispatch: _propTypes2["default"].func.isRequired,
	  getState: _propTypes2["default"].func.isRequired
	});

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  return funcs.reduce(function (a, b) {
	    return function () {
	      return a(b.apply(undefined, arguments));
	    };
	  });
	}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;

	var _isPlainObject = __webpack_require__(9);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(99);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'

	  /**
	   * Creates a Redux store that holds the state tree.
	   * The only way to change the data in the store is to call `dispatch()` on it.
	   *
	   * There should only be a single store in your app. To specify how different
	   * parts of the state tree respond to actions, you may combine several reducers
	   * into a single reducer function by using `combineReducers`.
	   *
	   * @param {Function} reducer A function that returns the next state tree, given
	   * the current state tree and the action to handle.
	   *
	   * @param {any} [preloadedState] The initial state. You may optionally specify it
	   * to hydrate the state from the server in universal apps, or to restore a
	   * previously serialized user session.
	   * If you use `combineReducers` to produce the root reducer function, this must be
	   * an object with the same shape as `combineReducers` keys.
	   *
	   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
	   * to enhance the store with third-party capabilities such as middleware,
	   * time travel, persistence, etc. The only store enhancer that ships with Redux
	   * is `applyMiddleware()`.
	   *
	   * @returns {Store} A Redux store that lets you read the state, dispatch actions
	   * and subscribe to changes.
	   */
	};function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      var listener = listeners[i];
	      listener();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/tc39/proposal-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(32);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(96);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(95);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(94);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(31);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(34);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (("development") !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	'use strict';

	var $Object = Object;
	var $TypeError = TypeError;

	module.exports = function flags() {
		if (this != null && this !== $Object(this)) {
			throw new $TypeError('RegExp.prototype.flags getter called on non-object');
		}
		var result = '';
		if (this.global) {
			result += 'g';
		}
		if (this.ignoreCase) {
			result += 'i';
		}
		if (this.multiline) {
			result += 'm';
		}
		if (this.dotAll) {
			result += 's';
		}
		if (this.unicode) {
			result += 'u';
		}
		if (this.sticky) {
			result += 'y';
		}
		return result;
	};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var implementation = __webpack_require__(35);

	var supportsDescriptors = __webpack_require__(6).supportsDescriptors;
	var $gOPD = Object.getOwnPropertyDescriptor;
	var $TypeError = TypeError;

	module.exports = function getPolyfill() {
		if (!supportsDescriptors) {
			throw new $TypeError('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
		}
		if ((/a/mig).flags === 'gim') {
			var descriptor = $gOPD(RegExp.prototype, 'flags');
			if (descriptor && typeof descriptor.get === 'function' && typeof (/a/).dotAll === 'boolean') {
				return descriptor.get;
			}
		}
		return implementation;
	};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _isPromise = __webpack_require__(8);

	var _isPromise2 = _interopRequireDefault(_isPromise);

	var _isValid = __webpack_require__(3);

	var _isValid2 = _interopRequireDefault(_isValid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var asyncValidation = function asyncValidation(fn, start, stop, field) {
	  start(field);
	  var promise = fn();
	  if (!(0, _isPromise2.default)(promise)) {
	    throw new Error('asyncValidate function passed to reduxForm must return a promise');
	  }
	  var handleErrors = function handleErrors(rejected) {
	    return function (errors) {
	      if (!(0, _isValid2.default)(errors)) {
	        stop(errors);
	        return Promise.reject();
	      } else if (rejected) {
	        stop();
	        throw new Error('Asynchronous validation promise was rejected without errors.');
	      }
	      stop();
	      return Promise.resolve();
	    };
	  };
	  return promise.then(handleErrors(false), handleErrors(true));
	};

	exports.default = asyncValidation;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = createAll;

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reducer = __webpack_require__(22);

	var _reducer2 = _interopRequireDefault(_reducer);

	var _createReduxForm = __webpack_require__(41);

	var _createReduxForm2 = _interopRequireDefault(_createReduxForm);

	var _mapValues = __webpack_require__(5);

	var _mapValues2 = _interopRequireDefault(_mapValues);

	var _bindActionData = __webpack_require__(13);

	var _bindActionData2 = _interopRequireDefault(_bindActionData);

	var _actions = __webpack_require__(12);

	var actions = _interopRequireWildcard(_actions);

	var _actionTypes = __webpack_require__(4);

	var actionTypes = _interopRequireWildcard(_actionTypes);

	var _createPropTypes = __webpack_require__(40);

	var _createPropTypes2 = _interopRequireDefault(_createPropTypes);

	var _getValuesFromState = __webpack_require__(20);

	var _getValuesFromState2 = _interopRequireDefault(_getValuesFromState);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// bind form as first parameter of action creators
	var boundActions = _extends({}, (0, _mapValues2.default)(_extends({}, actions, {
	  autofillWithKey: function autofillWithKey(key) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    return (0, _bindActionData2.default)(actions.autofill, { key: key }).apply(undefined, args);
	  },
	  changeWithKey: function changeWithKey(key) {
	    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	      args[_key2 - 1] = arguments[_key2];
	    }

	    return (0, _bindActionData2.default)(actions.change, { key: key }).apply(undefined, args);
	  },
	  initializeWithKey: function initializeWithKey(key) {
	    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	      args[_key3 - 1] = arguments[_key3];
	    }

	    return (0, _bindActionData2.default)(actions.initialize, { key: key }).apply(undefined, args);
	  },
	  reset: function reset(key) {
	    return (0, _bindActionData2.default)(actions.reset, { key: key })();
	  },
	  touchWithKey: function touchWithKey(key) {
	    for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	      args[_key4 - 1] = arguments[_key4];
	    }

	    return (0, _bindActionData2.default)(actions.touch, { key: key }).apply(undefined, args);
	  },
	  untouchWithKey: function untouchWithKey(key) {
	    for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
	      args[_key5 - 1] = arguments[_key5];
	    }

	    return (0, _bindActionData2.default)(actions.untouch, { key: key }).apply(undefined, args);
	  },
	  destroy: function destroy(key) {
	    return (0, _bindActionData2.default)(actions.destroy, { key: key })();
	  }
	}), function (action) {
	  return function (form) {
	    for (var _len6 = arguments.length, args = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
	      args[_key6 - 1] = arguments[_key6];
	    }

	    return (0, _bindActionData2.default)(action, { form: form }).apply(undefined, args);
	  };
	}));

	var addArrayValue = boundActions.addArrayValue;
	var autofill = boundActions.autofill;
	var autofillWithKey = boundActions.autofillWithKey;
	var blur = boundActions.blur;
	var change = boundActions.change;
	var changeWithKey = boundActions.changeWithKey;
	var destroy = boundActions.destroy;
	var focus = boundActions.focus;
	var initialize = boundActions.initialize;
	var initializeWithKey = boundActions.initializeWithKey;
	var removeArrayValue = boundActions.removeArrayValue;
	var reset = boundActions.reset;
	var startAsyncValidation = boundActions.startAsyncValidation;
	var startSubmit = boundActions.startSubmit;
	var stopAsyncValidation = boundActions.stopAsyncValidation;
	var stopSubmit = boundActions.stopSubmit;
	var submitFailed = boundActions.submitFailed;
	var swapArrayValues = boundActions.swapArrayValues;
	var touch = boundActions.touch;
	var touchWithKey = boundActions.touchWithKey;
	var untouch = boundActions.untouch;
	var untouchWithKey = boundActions.untouchWithKey;

	function createAll(isReactNative, React, connect) {
	  return {
	    actionTypes: actionTypes,
	    addArrayValue: addArrayValue,
	    autofill: autofill,
	    autofillWithKey: autofillWithKey,
	    blur: blur,
	    change: change,
	    changeWithKey: changeWithKey,
	    destroy: destroy,
	    focus: focus,
	    getValues: _getValuesFromState2.default,
	    initialize: initialize,
	    initializeWithKey: initializeWithKey,
	    propTypes: (0, _createPropTypes2.default)(_propTypes2.default),
	    reduxForm: (0, _createReduxForm2.default)(isReactNative, React, connect),
	    reducer: _reducer2.default,
	    removeArrayValue: removeArrayValue,
	    reset: reset,
	    startAsyncValidation: startAsyncValidation,
	    startSubmit: startSubmit,
	    stopAsyncValidation: stopAsyncValidation,
	    stopSubmit: stopSubmit,
	    submitFailed: submitFailed,
	    swapArrayValues: swapArrayValues,
	    touch: touch,
	    touchWithKey: touchWithKey,
	    untouch: untouch,
	    untouchWithKey: untouchWithKey
	  };
	}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _actions = __webpack_require__(12);

	var importedActions = _interopRequireWildcard(_actions);

	var _getDisplayName = __webpack_require__(18);

	var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

	var _reducer = __webpack_require__(22);

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _deepEqual = __webpack_require__(24);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _bindActionData = __webpack_require__(13);

	var _bindActionData2 = _interopRequireDefault(_bindActionData);

	var _getValues = __webpack_require__(19);

	var _getValues2 = _interopRequireDefault(_getValues);

	var _isValid = __webpack_require__(3);

	var _isValid2 = _interopRequireDefault(_isValid);

	var _readFields = __webpack_require__(53);

	var _readFields2 = _interopRequireDefault(_readFields);

	var _handleSubmit2 = __webpack_require__(48);

	var _handleSubmit3 = _interopRequireDefault(_handleSubmit2);

	var _asyncValidation = __webpack_require__(37);

	var _asyncValidation2 = _interopRequireDefault(_asyncValidation);

	var _silenceEvents = __webpack_require__(47);

	var _silenceEvents2 = _interopRequireDefault(_silenceEvents);

	var _silenceEvent = __webpack_require__(17);

	var _silenceEvent2 = _interopRequireDefault(_silenceEvent);

	var _wrapMapDispatchToProps = __webpack_require__(59);

	var _wrapMapDispatchToProps2 = _interopRequireDefault(_wrapMapDispatchToProps);

	var _wrapMapStateToProps = __webpack_require__(60);

	var _wrapMapStateToProps2 = _interopRequireDefault(_wrapMapStateToProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Creates a HOC that knows how to create redux-connected sub-components.
	 */
	var createHigherOrderComponent = function createHigherOrderComponent(config, isReactNative, React, connect, WrappedComponent, mapStateToProps, mapDispatchToProps, mergeProps, options) {
	  var Component = React.Component;

	  return function (reduxMountPoint, formName, formKey, getFormState) {
	    var ReduxForm = function (_Component) {
	      _inherits(ReduxForm, _Component);

	      function ReduxForm(props) {
	        _classCallCheck(this, ReduxForm);

	        // bind functions
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	        _this.asyncValidate = _this.asyncValidate.bind(_this);
	        _this.handleSubmit = _this.handleSubmit.bind(_this);
	        _this.fields = (0, _readFields2.default)(props, {}, {}, _this.asyncValidate, isReactNative);
	        var submitPassback = _this.props.submitPassback;

	        submitPassback(function () {
	          return _this.handleSubmit();
	        }); // wrapped in function to disallow params
	        return _this;
	      }

	      ReduxForm.prototype.componentWillMount = function componentWillMount() {
	        var _props = this.props,
	            fields = _props.fields,
	            form = _props.form,
	            initialize = _props.initialize,
	            initialValues = _props.initialValues;

	        if (initialValues && !form._initialized) {
	          initialize(initialValues, fields);
	        }
	      };

	      ReduxForm.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!(0, _deepEqual2.default)(this.props.fields, nextProps.fields) || !(0, _deepEqual2.default)(this.props.form, nextProps.form, { strict: true })) {
	          this.fields = (0, _readFields2.default)(nextProps, this.props, this.fields, this.asyncValidate, isReactNative);
	        }
	        if (!(0, _deepEqual2.default)(this.props.initialValues, nextProps.initialValues)) {
	          this.props.initialize(nextProps.initialValues, nextProps.fields, this.props.overwriteOnInitialValuesChange || !this.props.form._initialized);
	        }
	      };

	      ReduxForm.prototype.componentWillUnmount = function componentWillUnmount() {
	        if (config.destroyOnUnmount) {
	          this.props.destroy();
	        }
	      };

	      ReduxForm.prototype.asyncValidate = function asyncValidate(name, value) {
	        var _this2 = this;

	        var _props2 = this.props,
	            alwaysAsyncValidate = _props2.alwaysAsyncValidate,
	            asyncValidate = _props2.asyncValidate,
	            dispatch = _props2.dispatch,
	            fields = _props2.fields,
	            form = _props2.form,
	            startAsyncValidation = _props2.startAsyncValidation,
	            stopAsyncValidation = _props2.stopAsyncValidation,
	            validate = _props2.validate;

	        var isSubmitting = !name;
	        if (asyncValidate) {
	          var values = (0, _getValues2.default)(fields, form);
	          if (name) {
	            values[name] = value;
	          }
	          var syncErrors = validate(values, this.props);
	          var allPristine = this.fields._meta.allPristine;

	          var initialized = form._initialized;

	          // if blur validating, only run async validate if sync validation passes
	          // and submitting (not blur validation) or form is dirty or form was never initialized
	          // unless alwaysAsyncValidate is true
	          var syncValidationPasses = isSubmitting || (0, _isValid2.default)(syncErrors[name]);
	          if (alwaysAsyncValidate || syncValidationPasses && (isSubmitting || !allPristine || !initialized)) {
	            return (0, _asyncValidation2.default)(function () {
	              return asyncValidate(values, dispatch, _this2.props);
	            }, startAsyncValidation, stopAsyncValidation, name);
	          }
	        }
	      };

	      ReduxForm.prototype.handleSubmit = function handleSubmit(submitOrEvent) {
	        var _this3 = this;

	        var _props3 = this.props,
	            onSubmit = _props3.onSubmit,
	            fields = _props3.fields,
	            form = _props3.form;

	        var check = function check(submit) {
	          if (!submit || typeof submit !== 'function') {
	            throw new Error('You must either pass handleSubmit() an onSubmit function or pass onSubmit as a prop');
	          }
	          return submit;
	        };
	        return !submitOrEvent || (0, _silenceEvent2.default)(submitOrEvent) ?
	        // submitOrEvent is an event: fire submit
	        (0, _handleSubmit3.default)(check(onSubmit), (0, _getValues2.default)(fields, form), this.props, this.asyncValidate) :
	        // submitOrEvent is the submit function: return deferred submit thunk
	        (0, _silenceEvents2.default)(function () {
	          return (0, _handleSubmit3.default)(check(submitOrEvent), (0, _getValues2.default)(fields, form), _this3.props, _this3.asyncValidate);
	        });
	      };

	      ReduxForm.prototype.render = function render() {
	        var _this4 = this,
	            _ref;

	        var allFields = this.fields;

	        var _props4 = this.props,
	            addArrayValue = _props4.addArrayValue,
	            asyncBlurFields = _props4.asyncBlurFields,
	            autofill = _props4.autofill,
	            blur = _props4.blur,
	            change = _props4.change,
	            destroy = _props4.destroy,
	            focus = _props4.focus,
	            fields = _props4.fields,
	            form = _props4.form,
	            initialValues = _props4.initialValues,
	            initialize = _props4.initialize,
	            onSubmit = _props4.onSubmit,
	            propNamespace = _props4.propNamespace,
	            reset = _props4.reset,
	            removeArrayValue = _props4.removeArrayValue,
	            returnRejectedSubmitPromise = _props4.returnRejectedSubmitPromise,
	            startAsyncValidation = _props4.startAsyncValidation,
	            startSubmit = _props4.startSubmit,
	            stopAsyncValidation = _props4.stopAsyncValidation,
	            stopSubmit = _props4.stopSubmit,
	            submitFailed = _props4.submitFailed,
	            swapArrayValues = _props4.swapArrayValues,
	            touch = _props4.touch,
	            untouch = _props4.untouch,
	            validate = _props4.validate,
	            passableProps = _objectWithoutProperties(_props4, ['addArrayValue', 'asyncBlurFields', 'autofill', 'blur', 'change', 'destroy', 'focus', 'fields', 'form', 'initialValues', 'initialize', 'onSubmit', 'propNamespace', 'reset', 'removeArrayValue', 'returnRejectedSubmitPromise', 'startAsyncValidation', 'startSubmit', 'stopAsyncValidation', 'stopSubmit', 'submitFailed', 'swapArrayValues', 'touch', 'untouch', 'validate']); // eslint-disable-line no-redeclare


	        var _allFields$_meta = allFields._meta,
	            allPristine = _allFields$_meta.allPristine,
	            allValid = _allFields$_meta.allValid,
	            errors = _allFields$_meta.errors,
	            formError = _allFields$_meta.formError,
	            values = _allFields$_meta.values;


	        var props = {
	          // State:
	          active: form._active,
	          asyncValidating: form._asyncValidating,
	          dirty: !allPristine,
	          error: formError,
	          errors: errors,
	          fields: allFields,
	          formKey: formKey,
	          invalid: !allValid,
	          pristine: allPristine,
	          submitting: form._submitting,
	          submitFailed: form._submitFailed,
	          valid: allValid,
	          values: values,

	          // Actions:
	          asyncValidate: (0, _silenceEvents2.default)(function () {
	            return _this4.asyncValidate();
	          }),
	          // ^ doesn't just pass this.asyncValidate to disallow values passing
	          destroyForm: (0, _silenceEvents2.default)(destroy),
	          handleSubmit: this.handleSubmit,
	          initializeForm: (0, _silenceEvents2.default)(function (initValues) {
	            return initialize(initValues, fields);
	          }),
	          resetForm: (0, _silenceEvents2.default)(reset),
	          touch: (0, _silenceEvents2.default)(function () {
	            return touch.apply(undefined, arguments);
	          }),
	          touchAll: (0, _silenceEvents2.default)(function () {
	            return touch.apply(undefined, fields);
	          }),
	          untouch: (0, _silenceEvents2.default)(function () {
	            return untouch.apply(undefined, arguments);
	          }),
	          untouchAll: (0, _silenceEvents2.default)(function () {
	            return untouch.apply(undefined, fields);
	          })
	        };
	        var passedProps = propNamespace ? (_ref = {}, _ref[propNamespace] = props, _ref) : props;
	        return React.createElement(WrappedComponent, _extends({}, passableProps, passedProps));
	      };

	      return ReduxForm;
	    }(Component);

	    ReduxForm.displayName = 'ReduxForm(' + (0, _getDisplayName2.default)(WrappedComponent) + ')';
	    ReduxForm.WrappedComponent = WrappedComponent;
	    ReduxForm.propTypes = {
	      // props:
	      alwaysAsyncValidate: _propTypes2.default.bool,
	      asyncBlurFields: _propTypes2.default.arrayOf(_propTypes2.default.string),
	      asyncValidate: _propTypes2.default.func,
	      dispatch: _propTypes2.default.func.isRequired,
	      fields: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
	      form: _propTypes2.default.object,
	      initialValues: _propTypes2.default.any,
	      onSubmit: _propTypes2.default.func,
	      onSubmitSuccess: _propTypes2.default.func,
	      onSubmitFail: _propTypes2.default.func,
	      overwriteOnInitialValuesChange: _propTypes2.default.bool.isRequired,
	      propNamespace: _propTypes2.default.string,
	      readonly: _propTypes2.default.bool,
	      returnRejectedSubmitPromise: _propTypes2.default.bool,
	      submitPassback: _propTypes2.default.func.isRequired,
	      validate: _propTypes2.default.func,

	      // actions:
	      addArrayValue: _propTypes2.default.func.isRequired,
	      autofill: _propTypes2.default.func.isRequired,
	      blur: _propTypes2.default.func.isRequired,
	      change: _propTypes2.default.func.isRequired,
	      destroy: _propTypes2.default.func.isRequired,
	      focus: _propTypes2.default.func.isRequired,
	      initialize: _propTypes2.default.func.isRequired,
	      removeArrayValue: _propTypes2.default.func.isRequired,
	      reset: _propTypes2.default.func.isRequired,
	      startAsyncValidation: _propTypes2.default.func.isRequired,
	      startSubmit: _propTypes2.default.func.isRequired,
	      stopAsyncValidation: _propTypes2.default.func.isRequired,
	      stopSubmit: _propTypes2.default.func.isRequired,
	      submitFailed: _propTypes2.default.func.isRequired,
	      swapArrayValues: _propTypes2.default.func.isRequired,
	      touch: _propTypes2.default.func.isRequired,
	      untouch: _propTypes2.default.func.isRequired
	    };
	    ReduxForm.defaultProps = {
	      asyncBlurFields: [],
	      form: _reducer.initialState,
	      readonly: false,
	      returnRejectedSubmitPromise: false,
	      validate: function validate() {
	        return {};
	      }
	    };

	    // bind touch flags to blur and change
	    var unboundActions = _extends({}, importedActions, {
	      blur: (0, _bindActionData2.default)(importedActions.blur, {
	        touch: !!config.touchOnBlur
	      }),
	      change: (0, _bindActionData2.default)(importedActions.change, {
	        touch: !!config.touchOnChange
	      })
	    });

	    // make redux connector with or without form key
	    var decorate = formKey !== undefined && formKey !== null ? connect((0, _wrapMapStateToProps2.default)(mapStateToProps, function (state) {
	      var formState = getFormState(state, reduxMountPoint);
	      if (!formState) {
	        throw new Error('You need to mount the redux-form reducer at "' + reduxMountPoint + '"');
	      }
	      return formState && formState[formName] && formState[formName][formKey];
	    }), (0, _wrapMapDispatchToProps2.default)(mapDispatchToProps, (0, _bindActionData2.default)(unboundActions, {
	      form: formName,
	      key: formKey
	    })), mergeProps, options) : connect((0, _wrapMapStateToProps2.default)(mapStateToProps, function (state) {
	      var formState = getFormState(state, reduxMountPoint);
	      if (!formState) {
	        throw new Error('You need to mount the redux-form reducer at "' + reduxMountPoint + '"');
	      }
	      return formState && formState[formName];
	    }), (0, _wrapMapDispatchToProps2.default)(mapDispatchToProps, (0, _bindActionData2.default)(unboundActions, { form: formName })), mergeProps, options);

	    return decorate(ReduxForm);
	  };
	};

	exports.default = createHigherOrderComponent;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var createPropTypes = function createPropTypes(_ref) {
	  var any = _ref.any,
	      bool = _ref.bool,
	      string = _ref.string,
	      func = _ref.func,
	      object = _ref.object;
	  return {
	    // State:
	    active: string, // currently active field
	    asyncValidating: bool.isRequired, // true if async validation is running
	    autofilled: bool, // true if set programmatically by autofill
	    dirty: bool.isRequired, // true if any values are different from initialValues
	    error: any, // form-wide error from '_error' key in validation result
	    errors: object, // a map of errors corresponding to structure of form data (result of validation)
	    fields: object.isRequired, // the map of fields
	    formKey: any, // the form key if one was provided (used when doing multirecord forms)
	    invalid: bool.isRequired, // true if there are any validation errors
	    pristine: bool.isRequired, // true if the values are the same as initialValues
	    submitting: bool.isRequired, // true if the form is in the process of being submitted
	    submitFailed: bool.isRequired, // true if the form was submitted and failed for any reason
	    valid: bool.isRequired, // true if there are no validation errors
	    values: object.isRequired, // the values of the form as they will be submitted

	    // Actions:
	    asyncValidate: func.isRequired, // function to trigger async validation
	    destroyForm: func.isRequired, // action to destroy the form's data in Redux
	    handleSubmit: func.isRequired, // function to submit the form
	    initializeForm: func.isRequired, // action to initialize form data
	    resetForm: func.isRequired, // action to reset the form data to previously initialized values
	    touch: func.isRequired, // action to mark fields as touched
	    touchAll: func.isRequired, // action to mark ALL fields as touched
	    untouch: func.isRequired, // action to mark fields as untouched
	    untouchAll: func.isRequired // action to mark ALL fields as untouched
	  };
	};

	exports.default = createPropTypes;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createReduxFormConnector = __webpack_require__(42);

	var _createReduxFormConnector2 = _interopRequireDefault(_createReduxFormConnector);

	var _hoistNonReactStatics = __webpack_require__(67);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The decorator that is the main API to redux-form
	 */
	var createReduxForm = function createReduxForm(isReactNative, React, connect) {
	  var Component = React.Component;

	  var reduxFormConnector = (0, _createReduxFormConnector2.default)(isReactNative, React, connect);
	  return function (config, mapStateToProps, mapDispatchToProps, mergeProps, options) {
	    return function (WrappedComponent) {
	      var ReduxFormConnector = reduxFormConnector(WrappedComponent, mapStateToProps, mapDispatchToProps, mergeProps, options);
	      var configWithDefaults = _extends({
	        overwriteOnInitialValuesChange: true,
	        touchOnBlur: true,
	        touchOnChange: false,
	        destroyOnUnmount: true
	      }, config);

	      var ConnectedForm = function (_Component) {
	        _inherits(ConnectedForm, _Component);

	        function ConnectedForm(props) {
	          _classCallCheck(this, ConnectedForm);

	          var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	          _this.handleSubmitPassback = _this.handleSubmitPassback.bind(_this);
	          return _this;
	        }

	        ConnectedForm.prototype.handleSubmitPassback = function handleSubmitPassback(submit) {
	          this.submit = submit;
	        };

	        ConnectedForm.prototype.render = function render() {
	          return React.createElement(ReduxFormConnector, _extends({}, configWithDefaults, this.props, {
	            submitPassback: this.handleSubmitPassback }));
	        };

	        return ConnectedForm;
	      }(Component);

	      return (0, _hoistNonReactStatics2.default)(ConnectedForm, WrappedComponent);
	    };
	  };
	};

	exports.default = createReduxForm;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _noGetters = __webpack_require__(87);

	var _noGetters2 = _interopRequireDefault(_noGetters);

	var _getDisplayName = __webpack_require__(18);

	var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

	var _createHigherOrderComponent = __webpack_require__(39);

	var _createHigherOrderComponent2 = _interopRequireDefault(_createHigherOrderComponent);

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * This component tracks props that affect how the form is mounted to the store. Normally these should not change,
	 * but if they do, the connected components below it need to be redefined.
	 */
	var createReduxFormConnector = function createReduxFormConnector(isReactNative, React, connect) {
	  return function (WrappedComponent, mapStateToProps, mapDispatchToProps, mergeProps, options) {
	    var Component = React.Component;

	    var ReduxFormConnector = function (_Component) {
	      _inherits(ReduxFormConnector, _Component);

	      function ReduxFormConnector(props) {
	        _classCallCheck(this, ReduxFormConnector);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	        _this.cache = new _noGetters2.default(_this, {
	          ReduxForm: {
	            params: [
	            // props that effect how redux-form connects to the redux store
	            'reduxMountPoint', 'form', 'formKey', 'getFormState'],
	            fn: (0, _createHigherOrderComponent2.default)(props, isReactNative, React, connect, WrappedComponent, mapStateToProps, mapDispatchToProps, mergeProps, options)
	          }
	        });
	        return _this;
	      }

	      ReduxFormConnector.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.cache.componentWillReceiveProps(nextProps);
	      };

	      ReduxFormConnector.prototype.render = function render() {
	        var ReduxForm = this.cache.get('ReduxForm');
	        // remove some redux-form config-only props

	        var _props = this.props,
	            reduxMountPoint = _props.reduxMountPoint,
	            destroyOnUnmount = _props.destroyOnUnmount,
	            form = _props.form,
	            getFormState = _props.getFormState,
	            touchOnBlur = _props.touchOnBlur,
	            touchOnChange = _props.touchOnChange,
	            passableProps = _objectWithoutProperties(_props, ['reduxMountPoint', 'destroyOnUnmount', 'form', 'getFormState', 'touchOnBlur', 'touchOnChange']); // eslint-disable-line no-redeclare


	        return React.createElement(ReduxForm, passableProps);
	      };

	      return ReduxFormConnector;
	    }(Component);

	    ReduxFormConnector.displayName = 'ReduxFormConnector(' + (0, _getDisplayName2.default)(WrappedComponent) + ')';
	    ReduxFormConnector.WrappedComponent = WrappedComponent;
	    ReduxFormConnector.propTypes = {
	      destroyOnUnmount: _propTypes2.default.bool,
	      reduxMountPoint: _propTypes2.default.string,
	      form: _propTypes2.default.string.isRequired,
	      formKey: _propTypes2.default.string,
	      getFormState: _propTypes2.default.func,
	      touchOnBlur: _propTypes2.default.bool,
	      touchOnChange: _propTypes2.default.bool
	    };
	    ReduxFormConnector.defaultProps = {
	      reduxMountPoint: 'form',
	      getFormState: function getFormState(state, reduxMountPoint) {
	        return state[reduxMountPoint];
	      }
	    };
	    return ReduxFormConnector;
	  };
	};

	exports.default = createReduxFormConnector;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _getValue = __webpack_require__(15);

	var _getValue2 = _interopRequireDefault(_getValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createOnBlur = function createOnBlur(name, blur, isReactNative, afterBlur) {
	  return function (event) {
	    var value = (0, _getValue2.default)(event, isReactNative);
	    blur(name, value);
	    if (afterBlur) {
	      afterBlur(name, value);
	    }
	  };
	};
	exports.default = createOnBlur;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _getValue = __webpack_require__(15);

	var _getValue2 = _interopRequireDefault(_getValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createOnChange = function createOnChange(name, change, isReactNative) {
	  return function (event) {
	    return change(name, (0, _getValue2.default)(event, isReactNative));
	  };
	};
	exports.default = createOnChange;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createOnDragStart = __webpack_require__(14);

	var createOnDrop = function createOnDrop(name, change) {
	  return function (event) {
	    change(name, event.dataTransfer.getData(_createOnDragStart.dataKey));
	  };
	};
	exports.default = createOnDrop;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var createOnFocus = function createOnFocus(name, focus) {
	  return function () {
	    return focus(name);
	  };
	};
	exports.default = createOnFocus;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _silenceEvent = __webpack_require__(17);

	var _silenceEvent2 = _interopRequireDefault(_silenceEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var silenceEvents = function silenceEvents(fn) {
	  return function (event) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    return (0, _silenceEvent2.default)(event) ? fn.apply(undefined, args) : fn.apply(undefined, [event].concat(args));
	  };
	};

	exports.default = silenceEvents;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _isPromise = __webpack_require__(8);

	var _isPromise2 = _interopRequireDefault(_isPromise);

	var _isValid = __webpack_require__(3);

	var _isValid2 = _interopRequireDefault(_isValid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var handleSubmit = function handleSubmit(submit, values, props, asyncValidate) {
	  var dispatch = props.dispatch,
	      fields = props.fields,
	      onSubmitSuccess = props.onSubmitSuccess,
	      onSubmitFail = props.onSubmitFail,
	      startSubmit = props.startSubmit,
	      stopSubmit = props.stopSubmit,
	      submitFailed = props.submitFailed,
	      returnRejectedSubmitPromise = props.returnRejectedSubmitPromise,
	      touch = props.touch,
	      validate = props.validate;

	  var syncErrors = validate(values, props);
	  touch.apply(undefined, fields); // touch all fields
	  if ((0, _isValid2.default)(syncErrors)) {
	    var doSubmit = function doSubmit() {
	      var result = submit(values, dispatch);
	      if ((0, _isPromise2.default)(result)) {
	        startSubmit();
	        return result.then(function (submitResult) {
	          stopSubmit();
	          if (onSubmitSuccess) {
	            onSubmitSuccess(submitResult);
	          }
	          return submitResult;
	        }, function (submitError) {
	          stopSubmit(submitError);
	          if (onSubmitFail) {
	            onSubmitFail(submitError);
	          }
	          if (returnRejectedSubmitPromise) {
	            return Promise.reject(submitError);
	          }
	        });
	      }
	      if (onSubmitSuccess) {
	        onSubmitSuccess(result);
	      }
	      return result;
	    };
	    var asyncValidateResult = asyncValidate();
	    return (0, _isPromise2.default)(asyncValidateResult) ?
	    // asyncValidateResult will be rejected if async validation failed
	    asyncValidateResult.then(doSubmit, function () {
	      submitFailed();
	      if (onSubmitFail) {
	        onSubmitFail();
	      }
	      return returnRejectedSubmitPromise ? Promise.reject() : Promise.resolve();
	    }) : doSubmit(); // no async validation, so submit
	  }
	  submitFailed();

	  if (onSubmitFail) {
	    onSubmitFail(syncErrors);
	  }

	  if (returnRejectedSubmitPromise) {
	    return Promise.reject(syncErrors);
	  }
	};

	exports.default = handleSubmit;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _fieldValue = __webpack_require__(1);

	var makeEntry = function makeEntry(value, previousValue, overwriteValues) {
	  return (0, _fieldValue.makeFieldValue)(value === undefined ? {} : {
	    initial: value,
	    value: overwriteValues ? value : previousValue
	  });
	};

	/**
	 * Sets the initial values into the state and returns a new copy of the state
	 */
	var initializeState = function initializeState(values, fields) {
	  var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var overwriteValues = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

	  if (!fields) {
	    throw new Error('fields must be passed when initializing state');
	  }
	  if (!values || !fields.length) {
	    return state;
	  }
	  var initializeField = function initializeField(path, src, dest) {
	    var dotIndex = path.indexOf('.');
	    if (dotIndex === 0) {
	      return initializeField(path.substring(1), src, dest);
	    }
	    var openIndex = path.indexOf('[');
	    var closeIndex = path.indexOf(']');
	    var result = _extends({}, dest) || {};
	    if (dotIndex >= 0 && (openIndex < 0 || dotIndex < openIndex)) {
	      // is dot notation
	      var key = path.substring(0, dotIndex);
	      result[key] = src[key] && initializeField(path.substring(dotIndex + 1), src[key], result[key] || {});
	    } else if (openIndex >= 0 && (dotIndex < 0 || openIndex < dotIndex)) {
	      // is array notation
	      if (closeIndex < 0) {
	        throw new Error('found \'[\' but no \']\': \'' + path + '\'');
	      }
	      var _key = path.substring(0, openIndex);
	      var srcArray = src[_key];
	      var destArray = result[_key];
	      var rest = path.substring(closeIndex + 1);
	      if (Array.isArray(srcArray)) {
	        if (rest.length) {
	          // need to keep recursing
	          result[_key] = srcArray.map(function (srcValue, srcIndex) {
	            return initializeField(rest, srcValue, destArray && destArray[srcIndex]);
	          });
	        } else {
	          result[_key] = srcArray.map(function (srcValue, srcIndex) {
	            return makeEntry(srcValue, destArray && destArray[srcIndex] && destArray[srcIndex].value, overwriteValues);
	          });
	        }
	      } else {
	        result[_key] = [];
	      }
	    } else {
	      result[path] = makeEntry(src && src[path], dest && dest[path] && dest[path].value, overwriteValues);
	    }
	    return result;
	  };
	  return fields.reduce(function (accumulator, field) {
	    return initializeField(field, values, accumulator);
	  }, _extends({}, state));
	};

	exports.default = initializeState;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = isPristine;
	function isPristine(initial, data) {
	  if (initial === data) {
	    return true;
	  }
	  if (typeof initial === 'boolean' || typeof data === 'boolean') {
	    return initial === data;
	  } else if (initial instanceof Date && data instanceof Date) {
	    return initial.getTime() === data.getTime();
	  } else if (initial && typeof initial === 'object') {
	    if (!data || typeof data !== 'object') {
	      return false;
	    }
	    var initialKeys = Object.keys(initial);
	    var dataKeys = Object.keys(data);
	    if (initialKeys.length !== dataKeys.length) {
	      return false;
	    }
	    for (var index = 0; index < dataKeys.length; index++) {
	      var key = dataKeys[index];
	      if (!isPristine(initial[key], data[key])) {
	        return false;
	      }
	    }
	  } else if (initial || data) {
	    // allow '' to equate to undefined or null
	    return initial === data;
	  }
	  return true;
	}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = normalizeFields;

	var _fieldValue = __webpack_require__(1);

	function extractKey(field) {
	  var dotIndex = field.indexOf('.');
	  var openIndex = field.indexOf('[');
	  var closeIndex = field.indexOf(']');

	  if (openIndex > 0 && closeIndex !== openIndex + 1) {
	    throw new Error('found [ not followed by ]');
	  }

	  var isArray = openIndex > 0 && (dotIndex < 0 || openIndex < dotIndex);
	  var key = void 0;
	  var nestedPath = void 0;

	  if (isArray) {
	    key = field.substring(0, openIndex);
	    nestedPath = field.substring(closeIndex + 1);

	    if (nestedPath[0] === '.') {
	      nestedPath = nestedPath.substring(1);
	    }
	  } else if (dotIndex > 0) {
	    key = field.substring(0, dotIndex);
	    nestedPath = field.substring(dotIndex + 1);
	  } else {
	    key = field;
	  }

	  return { isArray: isArray, key: key, nestedPath: nestedPath };
	}

	function normalizeField(field, fullFieldPath, state, previousState, values, previousValues, normalizers) {
	  if (field.isArray) {
	    if (field.nestedPath) {
	      var array = state && state[field.key] || [];
	      var previousArray = previousState && previousState[field.key] || [];
	      var nestedField = extractKey(field.nestedPath);

	      return array.map(function (nestedState, i) {
	        nestedState[nestedField.key] = normalizeField(nestedField, fullFieldPath, nestedState, previousArray[i], values, previousValues, normalizers);

	        return nestedState;
	      });
	    }

	    var _normalizer = normalizers[fullFieldPath];

	    var result = _normalizer(state && state[field.key], previousState && previousState[field.key], values, previousValues);
	    return field.isArray ? result && result.map(_fieldValue.makeFieldValue) : result;
	  } else if (field.nestedPath) {
	    var nestedState = state && state[field.key] || {};
	    var _nestedField = extractKey(field.nestedPath);

	    nestedState[_nestedField.key] = normalizeField(_nestedField, fullFieldPath, nestedState, previousState && previousState[field.key], values, previousValues, normalizers);

	    return nestedState;
	  }

	  var finalField = state && state[field.key] || {};
	  var normalizer = normalizers[fullFieldPath];

	  finalField.value = normalizer(finalField.value, previousState && previousState[field.key] && previousState[field.key].value, values, previousValues);

	  return (0, _fieldValue.makeFieldValue)(finalField);
	}

	function normalizeFields(normalizers, state, previousState, values, previousValues) {
	  var newState = Object.keys(normalizers).reduce(function (accumulator, field) {
	    var extracted = extractKey(field);

	    accumulator[extracted.key] = normalizeField(extracted, field, state, previousState, values, previousValues, normalizers);

	    return accumulator;
	  }, {});

	  return _extends({}, state, newState);
	}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createOnBlur = __webpack_require__(43);

	var _createOnBlur2 = _interopRequireDefault(_createOnBlur);

	var _createOnChange = __webpack_require__(44);

	var _createOnChange2 = _interopRequireDefault(_createOnChange);

	var _createOnDragStart = __webpack_require__(14);

	var _createOnDragStart2 = _interopRequireDefault(_createOnDragStart);

	var _createOnDrop = __webpack_require__(45);

	var _createOnDrop2 = _interopRequireDefault(_createOnDrop);

	var _createOnFocus = __webpack_require__(46);

	var _createOnFocus2 = _interopRequireDefault(_createOnFocus);

	var _silencePromise = __webpack_require__(57);

	var _silencePromise2 = _interopRequireDefault(_silencePromise);

	var _read = __webpack_require__(21);

	var _read2 = _interopRequireDefault(_read);

	var _updateField = __webpack_require__(58);

	var _updateField2 = _interopRequireDefault(_updateField);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getSuffix(input, closeIndex) {
	  var suffix = input.substring(closeIndex + 1);
	  if (suffix[0] === '.') {
	    suffix = suffix.substring(1);
	  }
	  return suffix;
	}

	var getNextKey = function getNextKey(path) {
	  var dotIndex = path.indexOf('.');
	  var openIndex = path.indexOf('[');
	  if (openIndex > 0 && (dotIndex < 0 || openIndex < dotIndex)) {
	    return path.substring(0, openIndex);
	  }
	  return dotIndex > 0 ? path.substring(0, dotIndex) : path;
	};

	var shouldAsyncValidate = function shouldAsyncValidate(name, asyncBlurFields) {
	  return (
	    // remove array indices
	    ~asyncBlurFields.indexOf(name.replace(/\[[0-9]+\]/g, '[]'))
	  );
	};

	var readField = function readField(state, fieldName) {
	  var pathToHere = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	  var fields = arguments[3];
	  var syncErrors = arguments[4];
	  var asyncValidate = arguments[5];
	  var isReactNative = arguments[6];
	  var props = arguments[7];
	  var callback = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : function () {
	    return null;
	  };
	  var prefix = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : '';
	  var asyncBlurFields = props.asyncBlurFields,
	      autofill = props.autofill,
	      blur = props.blur,
	      change = props.change,
	      focus = props.focus,
	      form = props.form,
	      initialValues = props.initialValues,
	      readonly = props.readonly,
	      addArrayValue = props.addArrayValue,
	      removeArrayValue = props.removeArrayValue,
	      swapArrayValues = props.swapArrayValues;

	  var dotIndex = fieldName.indexOf('.');
	  var openIndex = fieldName.indexOf('[');
	  var closeIndex = fieldName.indexOf(']');
	  if (openIndex > 0 && closeIndex !== openIndex + 1) {
	    throw new Error('found [ not followed by ]');
	  }

	  if (openIndex > 0 && (dotIndex < 0 || openIndex < dotIndex)) {
	    // array field
	    var key = fieldName.substring(0, openIndex);
	    var rest = getSuffix(fieldName, closeIndex);
	    var stateArray = state && state[key] || [];
	    var fullPrefix = prefix + fieldName.substring(0, closeIndex + 1);
	    var subfields = props.fields.reduce(function (accumulator, field) {
	      if (field.indexOf(fullPrefix) === 0) {
	        accumulator.push(field);
	      }
	      return accumulator;
	    }, []).map(function (field) {
	      return getSuffix(field, prefix.length + closeIndex);
	    });
	    var addMethods = function addMethods(dest) {
	      Object.defineProperty(dest, 'addField', {
	        value: function value(_value, index) {
	          return addArrayValue(pathToHere + key, _value, index, subfields);
	        }
	      });
	      Object.defineProperty(dest, 'removeField', {
	        value: function value(index) {
	          return removeArrayValue(pathToHere + key, index);
	        }
	      });
	      Object.defineProperty(dest, 'swapFields', {
	        value: function value(indexA, indexB) {
	          return swapArrayValues(pathToHere + key, indexA, indexB);
	        }
	      });
	      return dest;
	    };
	    if (!fields[key] || fields[key].length !== stateArray.length) {
	      fields[key] = fields[key] ? [].concat(fields[key]) : [];
	      addMethods(fields[key]);
	    }
	    var fieldArray = fields[key];
	    var changed = false;
	    stateArray.forEach(function (fieldState, index) {
	      if (rest && !fieldArray[index]) {
	        fieldArray[index] = {};
	        changed = true;
	      }
	      var dest = rest ? fieldArray[index] : {};
	      var nextPath = '' + pathToHere + key + '[' + index + ']' + (rest ? '.' : '');
	      var nextPrefix = '' + prefix + key + '[]' + (rest ? '.' : '');

	      var result = readField(fieldState, rest, nextPath, dest, syncErrors, asyncValidate, isReactNative, props, callback, nextPrefix);
	      if (!rest && fieldArray[index] !== result) {
	        // if nothing after [] in field name, assign directly to array
	        fieldArray[index] = result;
	        changed = true;
	      }
	    });
	    if (fieldArray.length > stateArray.length) {
	      // remove extra items that aren't in state array
	      fieldArray.splice(stateArray.length, fieldArray.length - stateArray.length);
	    }
	    return changed ? addMethods([].concat(fieldArray)) : fieldArray;
	  }
	  if (dotIndex > 0) {
	    // subobject field
	    var _key = fieldName.substring(0, dotIndex);
	    var _rest = fieldName.substring(dotIndex + 1);
	    var subobject = fields[_key] || {};
	    var nextPath = pathToHere + _key + '.';
	    var nextKey = getNextKey(_rest);
	    var previous = subobject[nextKey];
	    var result = readField(state[_key] || {}, _rest, nextPath, subobject, syncErrors, asyncValidate, isReactNative, props, callback, nextPath);
	    if (result !== previous) {
	      var _extends2;

	      subobject = _extends({}, subobject, (_extends2 = {}, _extends2[nextKey] = result, _extends2));
	    }
	    fields[_key] = subobject;
	    return subobject;
	  }
	  var name = pathToHere + fieldName;
	  var field = fields[fieldName] || {};
	  if (field.name !== name) {
	    var onChange = (0, _createOnChange2.default)(name, change, isReactNative);
	    var initialFormValue = (0, _read2.default)(name + '.initial', form);
	    var initialValue = initialFormValue || (0, _read2.default)(name, initialValues);
	    field.name = name;
	    field.checked = initialValue === true || undefined;
	    field.value = initialValue;
	    field.initialValue = initialValue;
	    if (!readonly) {
	      field.autofill = function (value) {
	        return autofill(name, value);
	      };
	      field.onBlur = (0, _createOnBlur2.default)(name, blur, isReactNative, shouldAsyncValidate(name, asyncBlurFields) && function (blurName, blurValue) {
	        return (0, _silencePromise2.default)(asyncValidate(blurName, blurValue));
	      });
	      field.onChange = onChange;
	      field.onDragStart = (0, _createOnDragStart2.default)(name, function () {
	        return field.value;
	      });
	      field.onDrop = (0, _createOnDrop2.default)(name, change);
	      field.onFocus = (0, _createOnFocus2.default)(name, focus);
	      field.onUpdate = onChange; // alias to support belle. https://github.com/nikgraf/belle/issues/58
	    }
	    field.valid = true;
	    field.invalid = false;
	    Object.defineProperty(field, '_isField', { value: true });
	  }

	  var fieldState = (fieldName ? state[fieldName] : state) || {};
	  var syncError = (0, _read2.default)(name, syncErrors);
	  var updated = (0, _updateField2.default)(field, fieldState, name === form._active, syncError);
	  if (fieldName || fields[fieldName] !== updated) {
	    fields[fieldName] = updated;
	  }
	  callback(updated);
	  return updated;
	};

	exports.default = readField;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _readField = __webpack_require__(52);

	var _readField2 = _interopRequireDefault(_readField);

	var _write = __webpack_require__(23);

	var _write2 = _interopRequireDefault(_write);

	var _getValues = __webpack_require__(19);

	var _getValues2 = _interopRequireDefault(_getValues);

	var _removeField = __webpack_require__(54);

	var _removeField2 = _interopRequireDefault(_removeField);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Reads props and generates (or updates) field structure
	 */
	var readFields = function readFields(props, previousProps, myFields, asyncValidate, isReactNative) {
	  var fields = props.fields,
	      form = props.form,
	      validate = props.validate;

	  var previousFields = previousProps.fields;
	  var values = (0, _getValues2.default)(fields, form);
	  var syncErrors = validate(values, props) || {};
	  var errors = {};
	  var formError = syncErrors._error || form._error;
	  var allValid = !formError;
	  var allPristine = true;
	  var tally = function tally(field) {
	    if (field.error) {
	      errors = (0, _write2.default)(field.name, field.error, errors);
	      allValid = false;
	    }
	    if (field.dirty) {
	      allPristine = false;
	    }
	  };
	  var fieldObjects = previousFields ? previousFields.reduce(function (accumulator, previousField) {
	    return ~fields.indexOf(previousField) ? accumulator : (0, _removeField2.default)(accumulator, previousField);
	  }, _extends({}, myFields)) : _extends({}, myFields);
	  fields.forEach(function (name) {
	    (0, _readField2.default)(form, name, undefined, fieldObjects, syncErrors, asyncValidate, isReactNative, props, tally);
	  });
	  Object.defineProperty(fieldObjects, '_meta', {
	    value: {
	      allPristine: allPristine,
	      allValid: allValid,
	      values: values,
	      errors: errors,
	      formError: formError
	    }
	  });
	  return fieldObjects;
	};
	exports.default = readFields;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var without = function without(object, key) {
	  var copy = _extends({}, object);
	  delete copy[key];
	  return copy;
	};

	var removeField = function removeField(fields, path) {
	  var dotIndex = path.indexOf('.');
	  var openIndex = path.indexOf('[');
	  var closeIndex = path.indexOf(']');
	  if (openIndex > 0 && closeIndex !== openIndex + 1) {
	    throw new Error('found [ not followed by ]');
	  }
	  if (openIndex > 0 && (dotIndex < 0 || openIndex < dotIndex)) {
	    // array field
	    var key = path.substring(0, openIndex);
	    if (!Array.isArray(fields[key])) {
	      return without(fields, key);
	    }
	    var rest = path.substring(closeIndex + 1);
	    if (rest[0] === '.') {
	      rest = rest.substring(1);
	    }
	    if (rest) {
	      var _extends2;

	      var copy = [];
	      fields[key].forEach(function (item, index) {
	        var result = removeField(item, rest);
	        if (Object.keys(result).length) {
	          copy[index] = result;
	        }
	      });
	      return copy.length ? _extends({}, fields, (_extends2 = {}, _extends2[key] = copy, _extends2)) : without(fields, key);
	    }
	    return without(fields, key);
	  }
	  if (dotIndex > 0) {
	    var _extends3;

	    // subobject field
	    var _key = path.substring(0, dotIndex);
	    var _rest = path.substring(dotIndex + 1);
	    if (!fields[_key]) {
	      return fields;
	    }
	    var result = removeField(fields[_key], _rest);
	    return Object.keys(result).length ? _extends({}, fields, (_extends3 = {}, _extends3[_key] = removeField(fields[_key], _rest), _extends3)) : without(fields, _key);
	  }
	  return without(fields, path);
	};

	exports.default = removeField;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _fieldValue = __webpack_require__(1);

	var reset = function reset(value) {
	  return (0, _fieldValue.makeFieldValue)(value === undefined || value && value.initial === undefined ? {} : { initial: value.initial, value: value.initial });
	};

	/**
	 * Sets the initial values into the state and returns a new copy of the state
	 */
	var resetState = function resetState(values) {
	  return values ? Object.keys(values).reduce(function (accumulator, key) {
	    var value = values[key];
	    if (Array.isArray(value)) {
	      accumulator[key] = value.map(function (item) {
	        return (0, _fieldValue.isFieldValue)(item) ? reset(item) : resetState(item);
	      });
	    } else if (value) {
	      if ((0, _fieldValue.isFieldValue)(value)) {
	        accumulator[key] = reset(value);
	      } else if (typeof value === 'object' && value !== null) {
	        accumulator[key] = resetState(value);
	      } else {
	        accumulator[key] = value;
	      }
	    }
	    return accumulator;
	  }, {}) : values;
	};

	exports.default = resetState;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _fieldValue = __webpack_require__(1);

	var isMetaKey = function isMetaKey(key) {
	  return key[0] === '_';
	};

	/**
	 * Sets an error on a field deep in the tree, returning a new copy of the state
	 */
	var setErrors = function setErrors(state, errors, destKey) {
	  var clear = function clear() {
	    if (Array.isArray(state)) {
	      return state.map(function (stateItem, index) {
	        return setErrors(stateItem, errors && errors[index], destKey);
	      });
	    }
	    if (state && typeof state === 'object') {
	      var result = Object.keys(state).reduce(function (accumulator, key) {
	        var _extends2;

	        return isMetaKey(key) ? accumulator : _extends({}, accumulator, (_extends2 = {}, _extends2[key] = setErrors(state[key], errors && errors[key], destKey), _extends2));
	      }, state);
	      if ((0, _fieldValue.isFieldValue)(state)) {
	        (0, _fieldValue.makeFieldValue)(result);
	      }
	      return result;
	    }
	    return (0, _fieldValue.makeFieldValue)(state);
	  };
	  if (state instanceof File) {
	    return state;
	  }
	  if (!errors) {
	    if (!state) {
	      return state;
	    }
	    if (state[destKey]) {
	      var copy = _extends({}, state);
	      delete copy[destKey];
	      return (0, _fieldValue.makeFieldValue)(copy);
	    }
	    return clear();
	  }
	  if (typeof errors === 'string') {
	    var _extends3;

	    return (0, _fieldValue.makeFieldValue)(_extends({}, state, (_extends3 = {}, _extends3[destKey] = errors, _extends3)));
	  }
	  if (Array.isArray(errors)) {
	    if (!state || Array.isArray(state)) {
	      var _copy = (state || []).map(function (stateItem, index) {
	        return setErrors(stateItem, errors[index], destKey);
	      });
	      errors.forEach(function (errorItem, index) {
	        return _copy[index] = setErrors(_copy[index], errorItem, destKey);
	      });
	      return _copy;
	    }
	    return setErrors(state, errors[0], destKey); // use first error
	  }
	  if ((0, _fieldValue.isFieldValue)(state)) {
	    var _extends4;

	    return (0, _fieldValue.makeFieldValue)(_extends({}, state, (_extends4 = {}, _extends4[destKey] = errors, _extends4)));
	  }
	  var errorKeys = Object.keys(errors);
	  if (!errorKeys.length && !state) {
	    return state;
	  }
	  return errorKeys.reduce(function (accumulator, key) {
	    var _extends5;

	    return isMetaKey(key) ? accumulator : _extends({}, accumulator, (_extends5 = {}, _extends5[key] = setErrors(state && state[key], errors[key], destKey), _extends5));
	  }, clear() || {});
	};

	exports.default = setErrors;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _isPromise = __webpack_require__(8);

	var _isPromise2 = _interopRequireDefault(_isPromise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var noop = function noop() {
	  return undefined;
	};

	var silencePromise = function silencePromise(promise) {
	  return (0, _isPromise2.default)(promise) ? promise.then(noop, noop) : promise;
	};

	exports.default = silencePromise;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _isPristine = __webpack_require__(50);

	var _isPristine2 = _interopRequireDefault(_isPristine);

	var _isValid = __webpack_require__(3);

	var _isValid2 = _interopRequireDefault(_isValid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Updates a field object from the store values
	 */
	var updateField = function updateField(field, formField, active, syncError) {
	  var diff = {};
	  var formFieldValue = formField.value === undefined ? '' : formField.value;

	  // update field value
	  if (field.value !== formFieldValue) {
	    diff.value = formFieldValue;
	    diff.checked = typeof formFieldValue === 'boolean' ? formFieldValue : undefined;
	  }

	  // update dirty/pristine
	  var pristine = (0, _isPristine2.default)(formFieldValue, formField.initial);
	  if (field.pristine !== pristine) {
	    diff.dirty = !pristine;
	    diff.pristine = pristine;
	  }

	  // update field error
	  var error = syncError || formField.submitError || formField.asyncError;
	  if (error !== field.error) {
	    diff.error = error;
	  }
	  var valid = (0, _isValid2.default)(error);
	  if (field.valid !== valid) {
	    diff.invalid = !valid;
	    diff.valid = valid;
	  }

	  if (active !== field.active) {
	    diff.active = active;
	  }
	  var touched = !!formField.touched;
	  if (touched !== field.touched) {
	    diff.touched = touched;
	  }
	  var visited = !!formField.visited;
	  if (visited !== field.visited) {
	    diff.visited = visited;
	  }
	  var autofilled = !!formField.autofilled;
	  if (autofilled !== field.autofilled) {
	    diff.autofilled = autofilled;
	  }

	  if ('initial' in formField && formField.initial !== field.initialValue) {
	    field.initialValue = formField.initial;
	  }

	  return Object.keys(diff).length ? _extends({}, field, diff) : field;
	};
	exports.default = updateField;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _redux = __webpack_require__(33);

	var wrapMapDispatchToProps = function wrapMapDispatchToProps(mapDispatchToProps, actionCreators) {
	  if (mapDispatchToProps) {
	    if (typeof mapDispatchToProps === 'function') {
	      if (mapDispatchToProps.length > 1) {
	        return function (dispatch, ownProps) {
	          return _extends({
	            dispatch: dispatch
	          }, mapDispatchToProps(dispatch, ownProps), (0, _redux.bindActionCreators)(actionCreators, dispatch));
	        };
	      }
	      return function (dispatch) {
	        return _extends({
	          dispatch: dispatch
	        }, mapDispatchToProps(dispatch), (0, _redux.bindActionCreators)(actionCreators, dispatch));
	      };
	    }
	    return function (dispatch) {
	      return _extends({
	        dispatch: dispatch
	      }, (0, _redux.bindActionCreators)(mapDispatchToProps, dispatch), (0, _redux.bindActionCreators)(actionCreators, dispatch));
	    };
	  }
	  return function (dispatch) {
	    return _extends({
	      dispatch: dispatch
	    }, (0, _redux.bindActionCreators)(actionCreators, dispatch));
	  };
	};

	exports.default = wrapMapDispatchToProps;

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var wrapMapStateToProps = function wrapMapStateToProps(mapStateToProps, getForm) {
	  if (mapStateToProps) {
	    if (typeof mapStateToProps !== 'function') {
	      throw new Error('mapStateToProps must be a function');
	    }
	    if (mapStateToProps.length > 1) {
	      return function (state, ownProps) {
	        return _extends({}, mapStateToProps(state, ownProps), {
	          form: getForm(state)
	        });
	      };
	    }
	    return function (state) {
	      return _extends({}, mapStateToProps(state), {
	        form: getForm(state)
	      });
	    };
	  }
	  return function (state) {
	    return {
	      form: getForm(state)
	    };
	  };
	};

	exports.default = wrapMapStateToProps;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/* globals
		Atomics,
		SharedArrayBuffer,
	*/

	var undefined;

	var $TypeError = TypeError;

	var $gOPD = Object.getOwnPropertyDescriptor;
	if ($gOPD) {
		try {
			$gOPD({}, '');
		} catch (e) {
			$gOPD = null; // this is IE 8, which has a broken gOPD
		}
	}

	var throwTypeError = function () { throw new $TypeError(); };
	var ThrowTypeError = $gOPD
		? (function () {
			try {
				// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
				arguments.callee; // IE 8 does not throw here
				return throwTypeError;
			} catch (calleeThrows) {
				try {
					// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
					return $gOPD(arguments, 'callee').get;
				} catch (gOPDthrows) {
					return throwTypeError;
				}
			}
		}())
		: throwTypeError;

	var hasSymbols = __webpack_require__(64)();

	var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

	var generator; // = function * () {};
	var generatorFunction = generator ? getProto(generator) : undefined;
	var asyncFn; // async function() {};
	var asyncFunction = asyncFn ? asyncFn.constructor : undefined;
	var asyncGen; // async function * () {};
	var asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;
	var asyncGenIterator = asyncGen ? asyncGen() : undefined;

	var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

	var INTRINSICS = {
		'%Array%': Array,
		'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
		'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,
		'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
		'%ArrayPrototype%': Array.prototype,
		'%ArrayProto_entries%': Array.prototype.entries,
		'%ArrayProto_forEach%': Array.prototype.forEach,
		'%ArrayProto_keys%': Array.prototype.keys,
		'%ArrayProto_values%': Array.prototype.values,
		'%AsyncFromSyncIteratorPrototype%': undefined,
		'%AsyncFunction%': asyncFunction,
		'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,
		'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,
		'%AsyncGeneratorFunction%': asyncGenFunction,
		'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,
		'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,
		'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
		'%Boolean%': Boolean,
		'%BooleanPrototype%': Boolean.prototype,
		'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
		'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,
		'%Date%': Date,
		'%DatePrototype%': Date.prototype,
		'%decodeURI%': decodeURI,
		'%decodeURIComponent%': decodeURIComponent,
		'%encodeURI%': encodeURI,
		'%encodeURIComponent%': encodeURIComponent,
		'%Error%': Error,
		'%ErrorPrototype%': Error.prototype,
		'%eval%': eval, // eslint-disable-line no-eval
		'%EvalError%': EvalError,
		'%EvalErrorPrototype%': EvalError.prototype,
		'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
		'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,
		'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
		'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,
		'%Function%': Function,
		'%FunctionPrototype%': Function.prototype,
		'%Generator%': generator ? getProto(generator()) : undefined,
		'%GeneratorFunction%': generatorFunction,
		'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,
		'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
		'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,
		'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
		'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,
		'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
		'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,
		'%isFinite%': isFinite,
		'%isNaN%': isNaN,
		'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
		'%JSON%': typeof JSON === 'object' ? JSON : undefined,
		'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,
		'%Map%': typeof Map === 'undefined' ? undefined : Map,
		'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
		'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,
		'%Math%': Math,
		'%Number%': Number,
		'%NumberPrototype%': Number.prototype,
		'%Object%': Object,
		'%ObjectPrototype%': Object.prototype,
		'%ObjProto_toString%': Object.prototype.toString,
		'%ObjProto_valueOf%': Object.prototype.valueOf,
		'%parseFloat%': parseFloat,
		'%parseInt%': parseInt,
		'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
		'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,
		'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,
		'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,
		'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,
		'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,
		'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
		'%RangeError%': RangeError,
		'%RangeErrorPrototype%': RangeError.prototype,
		'%ReferenceError%': ReferenceError,
		'%ReferenceErrorPrototype%': ReferenceError.prototype,
		'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
		'%RegExp%': RegExp,
		'%RegExpPrototype%': RegExp.prototype,
		'%Set%': typeof Set === 'undefined' ? undefined : Set,
		'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
		'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,
		'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
		'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,
		'%String%': String,
		'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
		'%StringPrototype%': String.prototype,
		'%Symbol%': hasSymbols ? Symbol : undefined,
		'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,
		'%SyntaxError%': SyntaxError,
		'%SyntaxErrorPrototype%': SyntaxError.prototype,
		'%ThrowTypeError%': ThrowTypeError,
		'%TypedArray%': TypedArray,
		'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,
		'%TypeError%': $TypeError,
		'%TypeErrorPrototype%': $TypeError.prototype,
		'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
		'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,
		'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
		'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,
		'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
		'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,
		'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
		'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,
		'%URIError%': URIError,
		'%URIErrorPrototype%': URIError.prototype,
		'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
		'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,
		'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
		'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype
	};

	var bind = __webpack_require__(7);
	var $replace = bind.call(Function.call, String.prototype.replace);

	/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
	var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
	var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
	var stringToPath = function stringToPath(string) {
		var result = [];
		$replace(string, rePropName, function (match, number, quote, subString) {
			result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);
		});
		return result;
	};
	/* end adaptation */

	var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
		if (!(name in INTRINSICS)) {
			throw new SyntaxError('intrinsic ' + name + ' does not exist!');
		}

		// istanbul ignore if // hopefully this is impossible to test :-)
		if (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return INTRINSICS[name];
	};

	module.exports = function GetIntrinsic(name, allowMissing) {
		if (typeof name !== 'string' || name.length === 0) {
			throw new TypeError('intrinsic name must be a non-empty string');
		}
		if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
			throw new TypeError('"allowMissing" argument must be a boolean');
		}

		var parts = stringToPath(name);

		var value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);
		for (var i = 1; i < parts.length; i += 1) {
			if (value != null) {
				if ($gOPD && (i + 1) >= parts.length) {
					var desc = $gOPD(value, parts[i]);
					if (!allowMissing && !(parts[i] in value)) {
						throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
					}
					value = desc ? (desc.get || desc.value) : value[parts[i]];
				} else {
					value = value[parts[i]];
				}
			}
		}
		return value;
	};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var bind = __webpack_require__(7);

	var GetIntrinsic = __webpack_require__(61);

	var $Function = GetIntrinsic('%Function%');
	var $apply = $Function.apply;
	var $call = $Function.call;

	module.exports = function callBind() {
		return bind.apply($call, arguments);
	};

	module.exports.apply = function applyBind() {
		return bind.apply($apply, arguments);
	};


/***/ }),
/* 63 */
/***/ (function(module, exports) {

	'use strict';

	/* eslint no-invalid-this: 1 */

	var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
	var slice = Array.prototype.slice;
	var toStr = Object.prototype.toString;
	var funcType = '[object Function]';

	module.exports = function bind(that) {
	    var target = this;
	    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
	        throw new TypeError(ERROR_MESSAGE + target);
	    }
	    var args = slice.call(arguments, 1);

	    var bound;
	    var binder = function () {
	        if (this instanceof bound) {
	            var result = target.apply(
	                this,
	                args.concat(slice.call(arguments))
	            );
	            if (Object(result) === result) {
	                return result;
	            }
	            return this;
	        } else {
	            return target.apply(
	                that,
	                args.concat(slice.call(arguments))
	            );
	        }
	    };

	    var boundLength = Math.max(0, target.length - args.length);
	    var boundArgs = [];
	    for (var i = 0; i < boundLength; i++) {
	        boundArgs.push('$' + i);
	    }

	    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

	    if (target.prototype) {
	        var Empty = function Empty() {};
	        Empty.prototype = target.prototype;
	        bound.prototype = new Empty();
	        Empty.prototype = null;
	    }

	    return bound;
	};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var origSymbol = global.Symbol;
	var hasSymbolSham = __webpack_require__(65);

	module.exports = function hasNativeSymbols() {
		if (typeof origSymbol !== 'function') { return false; }
		if (typeof Symbol !== 'function') { return false; }
		if (typeof origSymbol('foo') !== 'symbol') { return false; }
		if (typeof Symbol('bar') !== 'symbol') { return false; }

		return hasSymbolSham();
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 65 */
/***/ (function(module, exports) {

	'use strict';

	/* eslint complexity: [2, 18], max-statements: [2, 33] */
	module.exports = function hasSymbols() {
		if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
		if (typeof Symbol.iterator === 'symbol') { return true; }

		var obj = {};
		var sym = Symbol('test');
		var symObj = Object(sym);
		if (typeof sym === 'string') { return false; }

		if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
		if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

		// temp disabled per https://github.com/ljharb/object.assign/issues/17
		// if (sym instanceof Symbol) { return false; }
		// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
		// if (!(symObj instanceof Symbol)) { return false; }

		// if (typeof Symbol.prototype.toString !== 'function') { return false; }
		// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

		var symVal = 42;
		obj[sym] = symVal;
		for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
		if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

		if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

		var syms = Object.getOwnPropertySymbols(obj);
		if (syms.length !== 1 || syms[0] !== sym) { return false; }

		if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

		if (typeof Object.getOwnPropertyDescriptor === 'function') {
			var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
			if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
		}

		return true;
	};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var bind = __webpack_require__(7);

	module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),
/* 67 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (true) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ }),
/* 69 */
/***/ (function(module, exports) {

	'use strict';

	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	var toStr = Object.prototype.toString;

	var isStandardArguments = function isArguments(value) {
		if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
			return false;
		}
		return toStr.call(value) === '[object Arguments]';
	};

	var isLegacyArguments = function isArguments(value) {
		if (isStandardArguments(value)) {
			return true;
		}
		return value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value) !== '[object Array]' &&
			toStr.call(value.callee) === '[object Function]';
	};

	var supportsStandardArguments = (function () {
		return isStandardArguments(arguments);
	}());

	isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

	module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

	'use strict';

	var getDay = Date.prototype.getDay;
	var tryDateObject = function tryDateGetDayCall(value) {
		try {
			getDay.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};

	var toStr = Object.prototype.toString;
	var dateClass = '[object Date]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

	module.exports = function isDateObject(value) {
		if (typeof value !== 'object' || value === null) {
			return false;
		}
		return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
	};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var has = __webpack_require__(66);
	var regexExec = RegExp.prototype.exec;
	var gOPD = Object.getOwnPropertyDescriptor;

	var tryRegexExecCall = function tryRegexExec(value) {
		try {
			var lastIndex = value.lastIndex;
			value.lastIndex = 0; // eslint-disable-line no-param-reassign

			regexExec.call(value);
			return true;
		} catch (e) {
			return false;
		} finally {
			value.lastIndex = lastIndex; // eslint-disable-line no-param-reassign
		}
	};
	var toStr = Object.prototype.toString;
	var regexClass = '[object RegExp]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

	module.exports = function isRegex(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}
		if (!hasToStringTag) {
			return toStr.call(value) === regexClass;
		}

		var descriptor = gOPD(value, 'lastIndex');
		var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
		if (!hasLastIndexDataProperty) {
			return false;
		}

		return tryRegexExecCall(value);
	};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(25),
	    getRawTag = __webpack_require__(75),
	    objectToString = __webpack_require__(76);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ }),
/* 73 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(77);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(25);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(73);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ }),
/* 79 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 81 */
/***/ (function(module, exports) {

	'use strict';

	// http://www.ecma-international.org/ecma-262/6.0/#sec-object.is

	var numberIsNaN = function (value) {
		return value !== value;
	};

	module.exports = function is(a, b) {
		if (a === 0 && b === 0) {
			return 1 / a === 1 / b;
		}
		if (a === b) {
			return true;
		}
		if (numberIsNaN(a) && numberIsNaN(b)) {
			return true;
		}
		return false;
	};



/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var keysShim;
	if (!Object.keys) {
		// modified from https://github.com/es-shims/es5-shim
		var has = Object.prototype.hasOwnProperty;
		var toStr = Object.prototype.toString;
		var isArgs = __webpack_require__(27); // eslint-disable-line global-require
		var isEnumerable = Object.prototype.propertyIsEnumerable;
		var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
		var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
		var dontEnums = [
			'toString',
			'toLocaleString',
			'valueOf',
			'hasOwnProperty',
			'isPrototypeOf',
			'propertyIsEnumerable',
			'constructor'
		];
		var equalsConstructorPrototype = function (o) {
			var ctor = o.constructor;
			return ctor && ctor.prototype === o;
		};
		var excludedKeys = {
			$applicationCache: true,
			$console: true,
			$external: true,
			$frame: true,
			$frameElement: true,
			$frames: true,
			$innerHeight: true,
			$innerWidth: true,
			$onmozfullscreenchange: true,
			$onmozfullscreenerror: true,
			$outerHeight: true,
			$outerWidth: true,
			$pageXOffset: true,
			$pageYOffset: true,
			$parent: true,
			$scrollLeft: true,
			$scrollTop: true,
			$scrollX: true,
			$scrollY: true,
			$self: true,
			$webkitIndexedDB: true,
			$webkitStorageInfo: true,
			$window: true
		};
		var hasAutomationEqualityBug = (function () {
			/* global window */
			if (typeof window === 'undefined') { return false; }
			for (var k in window) {
				try {
					if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
						try {
							equalsConstructorPrototype(window[k]);
						} catch (e) {
							return true;
						}
					}
				} catch (e) {
					return true;
				}
			}
			return false;
		}());
		var equalsConstructorPrototypeIfNotBuggy = function (o) {
			/* global window */
			if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
				return equalsConstructorPrototype(o);
			}
			try {
				return equalsConstructorPrototype(o);
			} catch (e) {
				return false;
			}
		};

		keysShim = function keys(object) {
			var isObject = object !== null && typeof object === 'object';
			var isFunction = toStr.call(object) === '[object Function]';
			var isArguments = isArgs(object);
			var isString = isObject && toStr.call(object) === '[object String]';
			var theKeys = [];

			if (!isObject && !isFunction && !isArguments) {
				throw new TypeError('Object.keys called on a non-object');
			}

			var skipProto = hasProtoEnumBug && isFunction;
			if (isString && object.length > 0 && !has.call(object, 0)) {
				for (var i = 0; i < object.length; ++i) {
					theKeys.push(String(i));
				}
			}

			if (isArguments && object.length > 0) {
				for (var j = 0; j < object.length; ++j) {
					theKeys.push(String(j));
				}
			} else {
				for (var name in object) {
					if (!(skipProto && name === 'prototype') && has.call(object, name)) {
						theKeys.push(String(name));
					}
				}
			}

			if (hasDontEnumBug) {
				var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

				for (var k = 0; k < dontEnums.length; ++k) {
					if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
						theKeys.push(dontEnums[k]);
					}
				}
			}
			return theKeys;
		};
	}
	module.exports = keysShim;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var printWarning = function() {};

	if (true) {
	  var ReactPropTypesSecret = __webpack_require__(28);
	  var loggedTypeFailures = {};
	  var has = Function.call.bind(Object.prototype.hasOwnProperty);

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (true) {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (true) {
	    loggedTypeFailures = {};
	  }
	}

	module.exports = checkPropTypes;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactIs = __webpack_require__(10);
	var assign = __webpack_require__(80);

	var ReactPropTypesSecret = __webpack_require__(28);
	var checkPropTypes = __webpack_require__(83);

	var has = Function.call.bind(Object.prototype.hasOwnProperty);
	var printWarning = function() {};

	if (true) {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (true) {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (("development") !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (true) {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	/** @license React v16.13.0
	 * react-is.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';



	if (true) {
	  (function() {
	'use strict';

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	exports.AsyncMode = AsyncMode;
	exports.ConcurrentMode = ConcurrentMode;
	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Lazy = Lazy;
	exports.Memo = Memo;
	exports.Portal = Portal;
	exports.Profiler = Profiler;
	exports.StrictMode = StrictMode;
	exports.Suspense = Suspense;
	exports.isAsyncMode = isAsyncMode;
	exports.isConcurrentMode = isConcurrentMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isLazy = isLazy;
	exports.isMemo = isMemo;
	exports.isPortal = isPortal;
	exports.isProfiler = isProfiler;
	exports.isStrictMode = isStrictMode;
	exports.isSuspense = isSuspense;
	exports.isValidElementType = isValidElementType;
	exports.typeOf = typeOf;
	  })();
	}


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _deepEqual = __webpack_require__(24);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	function intersects(array1, array2) {
	  return !!(array1 && array2 && array1.some(function (item) {
	    return ~array2.indexOf(item);
	  }));
	}

	var LazyCache = (function () {
	  function LazyCache(component, calculators) {
	    var _this = this;

	    _classCallCheck(this, LazyCache);

	    this.component = component;
	    this.allProps = [];
	    this.cache = Object.keys(calculators).reduce(function (accumulator, key) {
	      var _extends2;

	      var calculator = calculators[key];
	      var fn = calculator.fn;
	      var paramNames = calculator.params;
	      paramNames.forEach(function (param) {
	        if (! ~_this.allProps.indexOf(param)) {
	          _this.allProps.push(param);
	        }
	      });
	      return _extends({}, accumulator, (_extends2 = {}, _extends2[key] = {
	        value: undefined,
	        props: paramNames,
	        fn: fn
	      }, _extends2));
	    }, {});
	  }

	  LazyCache.prototype.get = function get(key) {
	    var component = this.component;
	    var _cache$key = this.cache[key];
	    var value = _cache$key.value;
	    var fn = _cache$key.fn;
	    var props = _cache$key.props;

	    if (value !== undefined) {
	      return value;
	    }
	    var params = props.map(function (prop) {
	      return component.props[prop];
	    });
	    var result = fn.apply(undefined, params);
	    this.cache[key].value = result;
	    return result;
	  };

	  LazyCache.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var _this2 = this;

	    var component = this.component;

	    var diffProps = [];
	    this.allProps.forEach(function (prop) {
	      if (!_deepEqual2['default'](component.props[prop], nextProps[prop])) {
	        diffProps.push(prop);
	      }
	    });
	    if (diffProps.length) {
	      Object.keys(this.cache).forEach(function (key) {
	        if (intersects(diffProps, _this2.cache[key].props)) {
	          delete _this2.cache[key].value; // uncache value
	        }
	      });
	    }
	  };

	  return LazyCache;
	})();

	exports['default'] = LazyCache;
	module.exports = exports['default'];

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(86);


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = undefined;

	var _react = __webpack_require__(11);

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _storeShape = __webpack_require__(29);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _warning = __webpack_require__(30);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    return _react.Children.only(this.props.children);
	  };

	  return Provider;
	}(_react.Component);

	exports["default"] = Provider;


	if (true) {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;


	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _propTypes2["default"].element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports["default"] = connect;

	var _react = __webpack_require__(11);

	var _storeShape = __webpack_require__(29);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _shallowEqual = __webpack_require__(91);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _wrapActionCreators = __webpack_require__(92);

	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

	var _warning = __webpack_require__(30);

	var _warning2 = _interopRequireDefault(_warning);

	var _isPlainObject = __webpack_require__(9);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _hoistNonReactStatics = __webpack_require__(93);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(68);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	var errorObject = { value: null };
	function tryCatch(fn, ctx) {
	  try {
	    return fn.apply(ctx);
	  } catch (e) {
	    errorObject.value = e;
	    return errorObject;
	  }
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;

	  var mapDispatch = void 0;
	  if (typeof mapDispatchToProps === 'function') {
	    mapDispatch = mapDispatchToProps;
	  } else if (!mapDispatchToProps) {
	    mapDispatch = defaultMapDispatchToProps;
	  } else {
	    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
	  }

	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var _options$pure = options.pure,
	      pure = _options$pure === undefined ? true : _options$pure,
	      _options$withRef = options.withRef,
	      withRef = _options$withRef === undefined ? false : _options$withRef;

	  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

	  // Helps track hot reloading.
	  var version = nextVersion++;

	  return function wrapWithConnect(WrappedComponent) {
	    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

	    function checkStateShape(props, methodName) {
	      if (!(0, _isPlainObject2["default"])(props)) {
	        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
	      }
	    }

	    function computeMergedProps(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      if (true) {
	        checkStateShape(mergedProps, 'mergeProps');
	      }
	      return mergedProps;
	    }

	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.store = props.store || context.store;

	        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }

	      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	        if (!this.finalMapStateToProps) {
	          return this.configureFinalMapState(store, props);
	        }

	        var state = store.getState();
	        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

	        if (true) {
	          checkStateShape(stateProps, 'mapStateToProps');
	        }
	        return stateProps;
	      };

	      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	        var mappedState = mapState(store.getState(), props);
	        var isFactory = typeof mappedState === 'function';

	        this.finalMapStateToProps = isFactory ? mappedState : mapState;
	        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

	        if (isFactory) {
	          return this.computeStateProps(store, props);
	        }

	        if (true) {
	          checkStateShape(mappedState, 'mapStateToProps');
	        }
	        return mappedState;
	      };

	      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	        if (!this.finalMapDispatchToProps) {
	          return this.configureFinalMapDispatch(store, props);
	        }

	        var dispatch = store.dispatch;

	        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

	        if (true) {
	          checkStateShape(dispatchProps, 'mapDispatchToProps');
	        }
	        return dispatchProps;
	      };

	      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	        var mappedDispatch = mapDispatch(store.dispatch, props);
	        var isFactory = typeof mappedDispatch === 'function';

	        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

	        if (isFactory) {
	          return this.computeDispatchProps(store, props);
	        }

	        if (true) {
	          checkStateShape(mappedDispatch, 'mapDispatchToProps');
	        }
	        return mappedDispatch;
	      };

	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = this.computeStateProps(this.store, this.props);
	        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	          return false;
	        }

	        this.stateProps = nextStateProps;
	        return true;
	      };

	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }

	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };

	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	          return false;
	        }

	        this.mergedProps = nextMergedProps;
	        return true;
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };

	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };

	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };

	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	        this.renderedElement = null;
	        this.finalMapDispatchToProps = null;
	        this.finalMapStateToProps = null;
	      };

	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }

	        var storeState = this.store.getState();
	        var prevStoreState = this.state.storeState;
	        if (pure && prevStoreState === storeState) {
	          return;
	        }

	        if (pure && !this.doStatePropsDependOnOwnProps) {
	          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
	          if (!haveStatePropsChanged) {
	            return;
	          }
	          if (haveStatePropsChanged === errorObject) {
	            this.statePropsPrecalculationError = errorObject.value;
	          }
	          this.haveStatePropsBeenPrecalculated = true;
	        }

	        this.hasStoreStateChanged = true;
	        this.setState({ storeState: storeState });
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

	        return this.refs.wrappedInstance;
	      };

	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged,
	            hasStoreStateChanged = this.hasStoreStateChanged,
	            haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated,
	            statePropsPrecalculationError = this.statePropsPrecalculationError,
	            renderedElement = this.renderedElement;


	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;

	        if (statePropsPrecalculationError) {
	          throw statePropsPrecalculationError;
	        }

	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	        }

	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (haveStatePropsBeenPrecalculated) {
	          haveStatePropsChanged = true;
	        } else if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }

	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	        } else {
	          haveMergedPropsChanged = false;
	        }

	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }

	        if (withRef) {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
	        }

	        return this.renderedElement;
	      };

	      return Connect;
	    }(_react.Component);

	    Connect.displayName = connectDisplayName;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _storeShape2["default"]
	    };
	    Connect.propTypes = {
	      store: _storeShape2["default"]
	    };

	    if (true) {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }

	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }

	    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	  };
	}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;

	var _Provider = __webpack_require__(88);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connect = __webpack_require__(89);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ }),
/* 91 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = wrapActionCreators;

	var _redux = __webpack_require__(33);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var reactIs = __webpack_require__(10);

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	var REACT_STATICS = {
	  childContextTypes: true,
	  contextType: true,
	  contextTypes: true,
	  defaultProps: true,
	  displayName: true,
	  getDefaultProps: true,
	  getDerivedStateFromError: true,
	  getDerivedStateFromProps: true,
	  mixins: true,
	  propTypes: true,
	  type: true
	};
	var KNOWN_STATICS = {
	  name: true,
	  length: true,
	  prototype: true,
	  caller: true,
	  callee: true,
	  arguments: true,
	  arity: true
	};
	var FORWARD_REF_STATICS = {
	  '$$typeof': true,
	  render: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true
	};
	var MEMO_STATICS = {
	  '$$typeof': true,
	  compare: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true,
	  type: true
	};
	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
	TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

	function getStatics(component) {
	  // React v16.11 and below
	  if (reactIs.isMemo(component)) {
	    return MEMO_STATICS;
	  } // React v16.12 and above


	  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
	}

	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = Object.prototype;
	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	  if (typeof sourceComponent !== 'string') {
	    // don't hoist over string (html) components
	    if (objectPrototype) {
	      var inheritedComponent = getPrototypeOf(sourceComponent);

	      if (inheritedComponent && inheritedComponent !== objectPrototype) {
	        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	      }
	    }

	    var keys = getOwnPropertyNames(sourceComponent);

	    if (getOwnPropertySymbols) {
	      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	    }

	    var targetStatics = getStatics(targetComponent);
	    var sourceStatics = getStatics(sourceComponent);

	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i];

	      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
	        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

	        try {
	          // Avoid failures from read-only properties
	          defineProperty(targetComponent, key, descriptor);
	        } catch (e) {}
	      }
	    }
	  }

	  return targetComponent;
	}

	module.exports = hoistNonReactStatics;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	var _compose = __webpack_require__(31);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ }),
/* 95 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	var _createStore = __webpack_require__(32);

	var _isPlainObject = __webpack_require__(9);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(34);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });

	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerShape(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];

	    if (true) {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }

	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  var unexpectedKeyCache = void 0;
	  if (true) {
	    unexpectedKeyCache = {};
	  }

	  var shapeAssertionError = void 0;
	  try {
	    assertReducerShape(finalReducers);
	  } catch (e) {
	    shapeAssertionError = e;
	  }

	  return function combination() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];

	    if (shapeAssertionError) {
	      throw shapeAssertionError;
	    }

	    if (true) {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
	      var _key = finalReducerKeys[_i];
	      var reducer = finalReducers[_key];
	      var previousStateForKey = state[_key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(_key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[_key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var define = __webpack_require__(6);
	var callBind = __webpack_require__(62);

	var implementation = __webpack_require__(35);
	var getPolyfill = __webpack_require__(36);
	var shim = __webpack_require__(98);

	var flagsBound = callBind(implementation);

	define(flagsBound, {
		getPolyfill: getPolyfill,
		implementation: implementation,
		shim: shim
	});

	module.exports = flagsBound;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var supportsDescriptors = __webpack_require__(6).supportsDescriptors;
	var getPolyfill = __webpack_require__(36);
	var gOPD = Object.getOwnPropertyDescriptor;
	var defineProperty = Object.defineProperty;
	var TypeErr = TypeError;
	var getProto = Object.getPrototypeOf;
	var regex = /a/;

	module.exports = function shimFlags() {
		if (!supportsDescriptors || !getProto) {
			throw new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
		}
		var polyfill = getPolyfill();
		var proto = getProto(regex);
		var descriptor = gOPD(proto, 'flags');
		if (!descriptor || descriptor.get !== polyfill) {
			defineProperty(proto, 'flags', {
				configurable: true,
				enumerable: false,
				get: polyfill
			});
		}
		return polyfill;
	};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ponyfill = __webpack_require__(100);

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var root; /* global window */


	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(101)(module)))

/***/ }),
/* 100 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};

/***/ }),
/* 101 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ })
/******/ ])
});
;