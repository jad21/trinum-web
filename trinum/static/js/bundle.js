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

	var $ = window.jQuery = window.$ = __webpack_require__(1)

	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);

	__webpack_require__(5);
	__webpack_require__(6);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v1.11.0
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-01-23T21:02Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper window is present,
			// execute the factory and get jQuery
			// For environments that do not inherently posses a window with a document
			// (such as Node.js), expose a jQuery-making factory as module.exports
			// This accentuates the need for the creation of a real window
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Can't do this because several apps including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	// Support: Firefox 18+
	//

	var deletedIds = [];

	var slice = deletedIds.slice;

	var concat = deletedIds.concat;

	var push = deletedIds.push;

	var indexOf = deletedIds.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var trim = "".trim;

	var support = {};



	var
		version = "1.11.0",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {
		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return a 'clean' array
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return just the object
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		// (You can seed the arguments with an array of args, but this is
		// only used internally.)
		each: function( callback, args ) {
			return jQuery.each( this, callback, args );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map(this, function( elem, i ) {
				return callback.call( elem, i, elem );
			}));
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor(null);
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: deletedIds.sort,
		splice: deletedIds.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var src, copyIsArray, copy, name, options, clone,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
			target = {};
		}

		// extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {
			// Only deal with non-null/undefined values
			if ( (options = arguments[ i ]) != null ) {
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend({
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		// See test/unit/core.js for details concerning isFunction.
		// Since version 1.3, DOM methods and functions like alert
		// aren't supported. They return false on IE (#2968).
		isFunction: function( obj ) {
			return jQuery.type(obj) === "function";
		},

		isArray: Array.isArray || function( obj ) {
			return jQuery.type(obj) === "array";
		},

		isWindow: function( obj ) {
			/* jshint eqeqeq: false */
			return obj != null && obj == obj.window;
		},

		isNumeric: function( obj ) {
			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			return obj - parseFloat( obj ) >= 0;
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		isPlainObject: function( obj ) {
			var key;

			// Must be an Object.
			// Because of IE, we also have to check the presence of the constructor property.
			// Make sure that DOM nodes and window objects don't pass through, as well
			if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			try {
				// Not own constructor property must be Object
				if ( obj.constructor &&
					!hasOwn.call(obj, "constructor") &&
					!hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
					return false;
				}
			} catch ( e ) {
				// IE8,9 Will throw exceptions on certain host objects #9897
				return false;
			}

			// Support: IE<9
			// Handle iteration over inherited properties before own properties.
			if ( support.ownLast ) {
				for ( key in obj ) {
					return hasOwn.call( obj, key );
				}
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own.
			for ( key in obj ) {}

			return key === undefined || hasOwn.call( obj, key );
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call(obj) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		// Workarounds based on findings by Jim Driscoll
		// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
		globalEval: function( data ) {
			if ( data && jQuery.trim( data ) ) {
				// We use execScript on Internet Explorer
				// We use an anonymous function so that context is window
				// rather than jQuery in Firefox
				( window.execScript || function( data ) {
					window[ "eval" ].call( window, data );
				} )( data );
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		// args is for internal usage only
		each: function( obj, callback, args ) {
			var value,
				i = 0,
				length = obj.length,
				isArray = isArraylike( obj );

			if ( args ) {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.apply( obj[ i ], args );

						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.apply( obj[ i ], args );

						if ( value === false ) {
							break;
						}
					}
				}

			// A special, fast, case for the most common use of each
			} else {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.call( obj[ i ], i, obj[ i ] );

						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.call( obj[ i ], i, obj[ i ] );

						if ( value === false ) {
							break;
						}
					}
				}
			}

			return obj;
		},

		// Use native String.trim function wherever possible
		trim: trim && !trim.call("\uFEFF\xA0") ?
			function( text ) {
				return text == null ?
					"" :
					trim.call( text );
			} :

			// Otherwise use our own trimming functionality
			function( text ) {
				return text == null ?
					"" :
					( text + "" ).replace( rtrim, "" );
			},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArraylike( Object(arr) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			var len;

			if ( arr ) {
				if ( indexOf ) {
					return indexOf.call( arr, elem, i );
				}

				len = arr.length;
				i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

				for ( ; i < len; i++ ) {
					// Skip accessing in sparse arrays
					if ( i in arr && arr[ i ] === elem ) {
						return i;
					}
				}
			}

			return -1;
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			while ( j < len ) {
				first[ i++ ] = second[ j++ ];
			}

			// Support: IE<9
			// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
			if ( len !== len ) {
				while ( second[j] !== undefined ) {
					first[ i++ ] = second[ j++ ];
				}
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var value,
				i = 0,
				length = elems.length,
				isArray = isArraylike( elems ),
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var args, proxy, tmp;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: function() {
			return +( new Date() );
		},

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	});

	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	});

	function isArraylike( obj ) {
		var length = obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.nodeType === 1 && length ) {
			return true;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v1.10.16
	 * http://sizzlejs.com/
	 *
	 * Copyright 2013 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-01-13
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		compile,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + -(new Date()),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		strundefined = typeof undefined,
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf if we can't use a native one
		indexOf = arr.indexOf || function( elem ) {
			var i = 0,
				len = this.length;
			for ( ; i < len; i++ ) {
				if ( this[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
		// http://www.w3.org/TR/css3-syntax/#characters
		characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Loosely modeled on CSS identifier characters
		// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
		// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = characterEncoding.replace( "w", "w#" ),

		// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
			"*(?:([*^$|!~]?=)" + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",

		// Prefer arguments quoted,
		//   then not containing pseudos/brackets,
		//   then attribute selectors/non-parenthetical expressions,
		//   then anything else
		// These preferences are here to reduce the number of selectors
		//   needing tokenize in the PSEUDO preFilter
		pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace( 3, 8 ) + ")*)|.*)\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + characterEncoding + ")" ),
			"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
			"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var match, elem, m, nodeType,
			// QSA vars
			i, groups, old, nid, newContext, newSelector;

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}

		context = context || document;
		results = results || [];

		if ( !selector || typeof selector !== "string" ) {
			return results;
		}

		if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
			return [];
		}

		if ( documentIsHTML && !seed ) {

			// Shortcuts
			if ( (match = rquickExpr.exec( selector )) ) {
				// Speed-up: Sizzle("#ID")
				if ( (m = match[1]) ) {
					if ( nodeType === 9 ) {
						elem = context.getElementById( m );
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document (jQuery #6963)
						if ( elem && elem.parentNode ) {
							// Handle the case where IE, Opera, and Webkit return items
							// by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}
					} else {
						// Context is not a document
						if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
							contains( context, elem ) && elem.id === m ) {
							results.push( elem );
							return results;
						}
					}

				// Speed-up: Sizzle("TAG")
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Speed-up: Sizzle(".CLASS")
				} else if ( (m = match[3]) && support.getElementsByClassName && context.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// QSA path
			if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
				nid = old = expando;
				newContext = context;
				newSelector = nodeType === 9 && selector;

				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					groups = tokenize( selector );

					if ( (old = context.getAttribute("id")) ) {
						nid = old.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", nid );
					}
					nid = "[id='" + nid + "'] ";

					i = groups.length;
					while ( i-- ) {
						groups[i] = nid + toSelector( groups[i] );
					}
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
					newSelector = groups.join(",");
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch(qsaError) {
					} finally {
						if ( !old ) {
							context.removeAttribute("id");
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = attrs.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== strundefined && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare,
			doc = node ? node.ownerDocument || node : preferredDoc,
			parent = doc.defaultView;

		// If no document and documentElement is available, return
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Set our document
		document = doc;
		docElem = doc.documentElement;

		// Support tests
		documentIsHTML = !isXML( doc );

		// Support: IE>8
		// If iframe document is assigned to "document" variable and if iframe has been reloaded,
		// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
		// IE6-8 do not support the defaultView property so parent will be undefined
		if ( parent && parent !== parent.top ) {
			// IE11 does not have attachEvent, so all must suffer
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", function() {
					setDocument();
				}, false );
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", function() {
					setDocument();
				});
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( doc.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Check if getElementsByClassName can be trusted
		support.getElementsByClassName = rnative.test( doc.getElementsByClassName ) && assert(function( div ) {
			div.innerHTML = "<div class='a'></div><div class='a i'></div>";

			// Support: Safari<4
			// Catch class over-caching
			div.firstChild.className = "i";
			// Support: Opera<10
			// Catch gEBCN failure to find non-leading classes
			return div.getElementsByClassName("i").length === 2;
		});

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== strundefined && documentIsHTML ) {
					var m = context.getElementById( id );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					return m && m.parentNode ? [m] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== strundefined ) {
					return context.getElementsByTagName( tag );
				}
			} :
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== strundefined && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				div.innerHTML = "<select t=''><option selected=''></option></select>";

				// Support: IE8, Opera 10-12
				// Nothing should be selected when empty strings follow ^= or $= or *=
				if ( div.querySelectorAll("[t^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = doc.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully does not implement inclusive descendent
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === doc ? -1 :
					b === doc ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return doc;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch(e) {}
		}

		return Sizzle( expr, document, null, [elem] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[5] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] && match[4] !== undefined ) {
					match[2] = match[4];

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, outerCache, node, diff, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
								// Seek `elem` from a previously-cached index
								outerCache = parent[ expando ] || (parent[ expando ] = {});
								cache = outerCache[ type ] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = cache[0] === dirruns && cache[2];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										outerCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							// Use previously-cached element index if available
							} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
								diff = cache[1];

							// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
							} else {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
										// Cache the index of each encountered element
										if ( useCache ) {
											(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf.call( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	function tokenize( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	}

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
							if ( (oldCache = outerCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								outerCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf.call( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context !== document && context;
				}

				// Add elements passing elementMatchers directly to results
				// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context, xml ) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// Apply set filters to unmatched elements
				matchedCount += i;
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, group /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !group ) {
				group = tokenize( selector );
			}
			i = group.length;
			while ( i-- ) {
				cached = matcherFromTokens( group[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
		}
		return cached;
	};

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function select( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			match = tokenize( selector );

		if ( !seed ) {
			// Try to minimize operations if there is only one group
			if ( match.length === 1 ) {

				// Take a shortcut and set the context if the root selector is an ID
				tokens = match[0] = match[0].slice( 0 );
				if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
						support.getById && context.nodeType === 9 && documentIsHTML &&
						Expr.relative[ tokens[1].type ] ) {

					context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
					if ( !context ) {
						return results;
					}
					selector = selector.slice( tokens.shift().value.length );
				}

				// Fetch a seed set for right-to-left matching
				i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
				while ( i-- ) {
					token = tokens[i];

					// Abort if we hit a combinator
					if ( Expr.relative[ (type = token.type) ] ) {
						break;
					}
					if ( (find = Expr.find[ type ]) ) {
						// Search, expanding context for leading sibling combinators
						if ( (seed = find(
							token.matches[0].replace( runescape, funescape ),
							rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
						)) ) {

							// If seed is empty or no tokens remain, we can return early
							tokens.splice( i, 1 );
							selector = seed.length && toSelector( tokens );
							if ( !selector ) {
								push.apply( results, seed );
								return results;
							}

							break;
						}
					}
				}
			}
		}

		// Compile and execute a filtering function
		// Provide `match` to avoid retokenization if we modified the selector above
		compile( selector, match )(
			seed,
			context,
			!documentIsHTML,
			results,
			rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	}

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome<14
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			});

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			});

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( jQuery.inArray( elem, qualifier ) >= 0 ) !== not;
		});
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			}));
	};

	jQuery.fn.extend({
		find: function( selector ) {
			var i,
				ret = [],
				self = this,
				len = self.length;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter(function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				}) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow(this, selector || [], false) );
		},
		not: function( selector ) {
			return this.pushStack( winnow(this, selector || [], true) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	});


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// Use the correct document accordingly with window argument (sandbox)
		document = window.document,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && (match[1] || !context) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[1] ) {
						context = context instanceof jQuery ? context[0] : context;

						// scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[1],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[2] );

						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if ( elem && elem.parentNode ) {
							// Handle the case where IE and Opera return items
							// by name instead of ID
							if ( elem.id !== match[2] ) {
								return rootjQuery.find( selector );
							}

							// Otherwise, we inject the element directly into the jQuery object
							this.length = 1;
							this[0] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || rootjQuery ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return typeof rootjQuery.ready !== "undefined" ?
					rootjQuery.ready( selector ) :
					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
		// methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.extend({
		dir: function( elem, dir, until ) {
			var matched = [],
				cur = elem[ dir ];

			while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
				if ( cur.nodeType === 1 ) {
					matched.push( cur );
				}
				cur = cur[dir];
			}
			return matched;
		},

		sibling: function( n, elem ) {
			var r = [];

			for ( ; n; n = n.nextSibling ) {
				if ( n.nodeType === 1 && n !== elem ) {
					r.push( n );
				}
			}

			return r;
		}
	});

	jQuery.fn.extend({
		has: function( target ) {
			var i,
				targets = jQuery( target, this ),
				len = targets.length;

			return this.filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( this, targets[i] ) ) {
						return true;
					}
				}
			});
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
					// Always skip document fragments
					if ( cur.nodeType < 11 && (pos ?
						pos.index(cur) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector(cur, selectors)) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
		},

		// Determine the position of an element within
		// the matched set of elements
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
			}

			// index in selector
			if ( typeof elem === "string" ) {
				return jQuery.inArray( this[0], jQuery( elem ) );
			}

			// Locate the position of the desired element
			return jQuery.inArray(
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[0] : elem, this );
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.unique(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter(selector)
			);
		}
	});

	function sibling( cur, dir ) {
		do {
			cur = cur[ dir ];
		} while ( cur && cur.nodeType !== 1 );

		return cur;
	}

	jQuery.each({
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return jQuery.dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return jQuery.dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return jQuery.dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return jQuery.sibling( elem.firstChild );
		},
		contents: function( elem ) {
			return jQuery.nodeName( elem, "iframe" ) ?
				elem.contentDocument || elem.contentWindow.document :
				jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var ret = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				ret = jQuery.filter( selector, ret );
			}

			if ( this.length > 1 ) {
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					ret = jQuery.unique( ret );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					ret = ret.reverse();
				}
			}

			return this.pushStack( ret );
		};
	});
	var rnotwhite = (/\S+/g);



	// String to Object options format cache
	var optionsCache = {};

	// Convert String-formatted options into Object-formatted ones and store in cache
	function createOptions( options ) {
		var object = optionsCache[ options ] = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		});
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			( optionsCache[ options ] || createOptions( options ) ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,
			// Last fire value (for non-forgettable lists)
			memory,
			// Flag to know if list was already fired
			fired,
			// End of the loop when firing
			firingLength,
			// Index of currently firing callback (modified by remove if needed)
			firingIndex,
			// First callback to fire (used internally by add and fireWith)
			firingStart,
			// Actual callback list
			list = [],
			// Stack of fire calls for repeatable lists
			stack = !options.once && [],
			// Fire callbacks
			fire = function( data ) {
				memory = options.memory && data;
				fired = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				firing = true;
				for ( ; list && firingIndex < firingLength; firingIndex++ ) {
					if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
						memory = false; // To prevent further calls using add
						break;
					}
				}
				firing = false;
				if ( list ) {
					if ( stack ) {
						if ( stack.length ) {
							fire( stack.shift() );
						}
					} else if ( memory ) {
						list = [];
					} else {
						self.disable();
					}
				}
			},
			// Actual Callbacks object
			self = {
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
						// First, we save the current length
						var start = list.length;
						(function add( args ) {
							jQuery.each( args, function( _, arg ) {
								var type = jQuery.type( arg );
								if ( type === "function" ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && type !== "string" ) {
									// Inspect recursively
									add( arg );
								}
							});
						})( arguments );
						// Do we need to add the callbacks to the
						// current firing batch?
						if ( firing ) {
							firingLength = list.length;
						// With memory, if we're not firing then
						// we should call right away
						} else if ( memory ) {
							firingStart = start;
							fire( memory );
						}
					}
					return this;
				},
				// Remove a callback from the list
				remove: function() {
					if ( list ) {
						jQuery.each( arguments, function( _, arg ) {
							var index;
							while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
								list.splice( index, 1 );
								// Handle firing indexes
								if ( firing ) {
									if ( index <= firingLength ) {
										firingLength--;
									}
									if ( index <= firingIndex ) {
										firingIndex--;
									}
								}
							}
						});
					}
					return this;
				},
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
				},
				// Remove all callbacks from the list
				empty: function() {
					list = [];
					firingLength = 0;
					return this;
				},
				// Have the list do nothing anymore
				disable: function() {
					list = stack = memory = undefined;
					return this;
				},
				// Is it disabled?
				disabled: function() {
					return !list;
				},
				// Lock the list in its current state
				lock: function() {
					stack = undefined;
					if ( !memory ) {
						self.disable();
					}
					return this;
				},
				// Is it locked?
				locked: function() {
					return !stack;
				},
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( list && ( !fired || stack ) ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						if ( firing ) {
							stack.push( args );
						} else {
							fire( args );
						}
					}
					return this;
				},
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend({

		Deferred: function( func ) {
			var tuples = [
					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks("memory") ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred(function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[1] ](function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.done( newDefer.resolve )
											.fail( newDefer.reject )
											.progress( newDefer.notify );
									} else {
										newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
									}
								});
							});
							fns = null;
						}).promise();
					},
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[1] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(function() {
						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[0] ] = function() {
					deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[0] + "With" ] = list.fireWith;
			});

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );

						} else if ( !(--remaining) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject )
							.progress( updateFunc( i, progressContexts, progressValues ) );
					} else {
						--remaining;
					}
				}
			}

			// if we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	});


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {
		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend({
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
			if ( !document.body ) {
				return setTimeout( jQuery.ready );
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.trigger ) {
				jQuery( document ).trigger("ready").off("ready");
			}
		}
	});

	/**
	 * Clean-up method for dom ready events
	 */
	function detach() {
		if ( document.addEventListener ) {
			document.removeEventListener( "DOMContentLoaded", completed, false );
			window.removeEventListener( "load", completed, false );

		} else {
			document.detachEvent( "onreadystatechange", completed );
			window.detachEvent( "onload", completed );
		}
	}

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		// readyState === "complete" is good enough for us to call the dom ready in oldIE
		if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
			detach();
			jQuery.ready();
		}
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called after the browser event has already occurred.
			// we once tried to use readyState "interactive" here, but it caused issues like the one
			// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
			if ( document.readyState === "complete" ) {
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				setTimeout( jQuery.ready );

			// Standards-based browsers support DOMContentLoaded
			} else if ( document.addEventListener ) {
				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed, false );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed, false );

			// If IE event model is used
			} else {
				// Ensure firing before onload, maybe late but safe also for iframes
				document.attachEvent( "onreadystatechange", completed );

				// A fallback to window.onload, that will always work
				window.attachEvent( "onload", completed );

				// If IE and not a frame
				// continually check to see if the document is ready
				var top = false;

				try {
					top = window.frameElement == null && document.documentElement;
				} catch(e) {}

				if ( top && top.doScroll ) {
					(function doScrollCheck() {
						if ( !jQuery.isReady ) {

							try {
								// Use the trick by Diego Perini
								// http://javascript.nwbox.com/IEContentLoaded/
								top.doScroll("left");
							} catch(e) {
								return setTimeout( doScrollCheck, 50 );
							}

							// detach all dom ready events
							detach();

							// and execute any waiting functions
							jQuery.ready();
						}
					})();
				}
			}
		}
		return readyList.promise( obj );
	};


	var strundefined = typeof undefined;



	// Support: IE<9
	// Iteration over object's inherited properties before its own
	var i;
	for ( i in jQuery( support ) ) {
		break;
	}
	support.ownLast = i !== "0";

	// Note: most support tests are defined in their respective modules.
	// false until the test is run
	support.inlineBlockNeedsLayout = false;

	jQuery(function() {
		// We need to execute this one support test ASAP because we need to know
		// if body.style.zoom needs to be set.

		var container, div,
			body = document.getElementsByTagName("body")[0];

		if ( !body ) {
			// Return for frameset docs that don't have a body
			return;
		}

		// Setup
		container = document.createElement( "div" );
		container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";

		div = document.createElement( "div" );
		body.appendChild( container ).appendChild( div );

		if ( typeof div.style.zoom !== strundefined ) {
			// Support: IE<8
			// Check if natively block-level elements act like inline-block
			// elements when setting their display to 'inline' and giving
			// them layout
			div.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1";

			if ( (support.inlineBlockNeedsLayout = ( div.offsetWidth === 3 )) ) {
				// Prevent IE 6 from affecting layout for positioned elements #11048
				// Prevent IE from shrinking the body in IE 7 mode #12869
				// Support: IE<8
				body.style.zoom = 1;
			}
		}

		body.removeChild( container );

		// Null elements to avoid leaks in IE
		container = div = null;
	});




	(function() {
		var div = document.createElement( "div" );

		// Execute the test only if not already executed in another module.
		if (support.deleteExpando == null) {
			// Support: IE<9
			support.deleteExpando = true;
			try {
				delete div.test;
			} catch( e ) {
				support.deleteExpando = false;
			}
		}

		// Null elements to avoid leaks in IE.
		div = null;
	})();


	/**
	 * Determines whether an object can have data
	 */
	jQuery.acceptData = function( elem ) {
		var noData = jQuery.noData[ (elem.nodeName + " ").toLowerCase() ],
			nodeType = +elem.nodeType || 1;

		// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
		return nodeType !== 1 && nodeType !== 9 ?
			false :

			// Nodes accept data unless otherwise specified; rejection can be conditional
			!noData || noData !== true && elem.getAttribute("classid") === noData;
	};


	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /([A-Z])/g;

	function dataAttr( elem, key, data ) {
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {

			var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch( e ) {}

				// Make sure we set the data so it isn't changed later
				jQuery.data( elem, key, data );

			} else {
				data = undefined;
			}
		}

		return data;
	}

	// checks a cache object for emptiness
	function isEmptyDataObject( obj ) {
		var name;
		for ( name in obj ) {

			// if the public data object is empty, the private is still empty
			if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
				continue;
			}
			if ( name !== "toJSON" ) {
				return false;
			}
		}

		return true;
	}

	function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
		if ( !jQuery.acceptData( elem ) ) {
			return;
		}

		var ret, thisCache,
			internalKey = jQuery.expando,

			// We have to handle DOM nodes and JS objects differently because IE6-7
			// can't GC object references properly across the DOM-JS boundary
			isNode = elem.nodeType,

			// Only DOM nodes need the global jQuery cache; JS object data is
			// attached directly to the object so GC can occur automatically
			cache = isNode ? jQuery.cache : elem,

			// Only defining an ID for JS objects if its cache already exists allows
			// the code to shortcut on the same path as a DOM node with no cache
			id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

		// Avoid doing any more work than we need to when trying to get data on an
		// object that has no data at all
		if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && data === undefined && typeof name === "string" ) {
			return;
		}

		if ( !id ) {
			// Only DOM nodes need a new unique ID for each element since their data
			// ends up in the global cache
			if ( isNode ) {
				id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
			} else {
				id = internalKey;
			}
		}

		if ( !cache[ id ] ) {
			// Avoid exposing jQuery metadata on plain JS objects when the object
			// is serialized using JSON.stringify
			cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
		}

		// An object can be passed to jQuery.data instead of a key/value pair; this gets
		// shallow copied over onto the existing cache
		if ( typeof name === "object" || typeof name === "function" ) {
			if ( pvt ) {
				cache[ id ] = jQuery.extend( cache[ id ], name );
			} else {
				cache[ id ].data = jQuery.extend( cache[ id ].data, name );
			}
		}

		thisCache = cache[ id ];

		// jQuery data() is stored in a separate object inside the object's internal data
		// cache in order to avoid key collisions between internal data and user-defined
		// data.
		if ( !pvt ) {
			if ( !thisCache.data ) {
				thisCache.data = {};
			}

			thisCache = thisCache.data;
		}

		if ( data !== undefined ) {
			thisCache[ jQuery.camelCase( name ) ] = data;
		}

		// Check for both converted-to-camel and non-converted data property names
		// If a data property was specified
		if ( typeof name === "string" ) {

			// First Try to find as-is property data
			ret = thisCache[ name ];

			// Test for null|undefined property data
			if ( ret == null ) {

				// Try to find the camelCased property
				ret = thisCache[ jQuery.camelCase( name ) ];
			}
		} else {
			ret = thisCache;
		}

		return ret;
	}

	function internalRemoveData( elem, name, pvt ) {
		if ( !jQuery.acceptData( elem ) ) {
			return;
		}

		var thisCache, i,
			isNode = elem.nodeType,

			// See jQuery.data for more information
			cache = isNode ? jQuery.cache : elem,
			id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

		// If there is already no cache entry for this object, there is no
		// purpose in continuing
		if ( !cache[ id ] ) {
			return;
		}

		if ( name ) {

			thisCache = pvt ? cache[ id ] : cache[ id ].data;

			if ( thisCache ) {

				// Support array or space separated string names for data keys
				if ( !jQuery.isArray( name ) ) {

					// try the string as a key before any manipulation
					if ( name in thisCache ) {
						name = [ name ];
					} else {

						// split the camel cased version by spaces unless a key with the spaces exists
						name = jQuery.camelCase( name );
						if ( name in thisCache ) {
							name = [ name ];
						} else {
							name = name.split(" ");
						}
					}
				} else {
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = name.concat( jQuery.map( name, jQuery.camelCase ) );
				}

				i = name.length;
				while ( i-- ) {
					delete thisCache[ name[i] ];
				}

				// If there is no data left in the cache, we want to continue
				// and let the cache object itself get destroyed
				if ( pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache) ) {
					return;
				}
			}
		}

		// See jQuery.data for more information
		if ( !pvt ) {
			delete cache[ id ].data;

			// Don't destroy the parent cache unless the internal data object
			// had been the only thing left in it
			if ( !isEmptyDataObject( cache[ id ] ) ) {
				return;
			}
		}

		// Destroy the cache
		if ( isNode ) {
			jQuery.cleanData( [ elem ], true );

		// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
		/* jshint eqeqeq: false */
		} else if ( support.deleteExpando || cache != cache.window ) {
			/* jshint eqeqeq: true */
			delete cache[ id ];

		// When all else fails, null
		} else {
			cache[ id ] = null;
		}
	}

	jQuery.extend({
		cache: {},

		// The following elements (space-suffixed to avoid Object.prototype collisions)
		// throw uncatchable exceptions if you attempt to set expando properties
		noData: {
			"applet ": true,
			"embed ": true,
			// ...but Flash objects (which have this classid) *can* handle expandos
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},

		hasData: function( elem ) {
			elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
			return !!elem && !isEmptyDataObject( elem );
		},

		data: function( elem, name, data ) {
			return internalData( elem, name, data );
		},

		removeData: function( elem, name ) {
			return internalRemoveData( elem, name );
		},

		// For internal use only.
		_data: function( elem, name, data ) {
			return internalData( elem, name, data, true );
		},

		_removeData: function( elem, name ) {
			return internalRemoveData( elem, name, true );
		}
	});

	jQuery.fn.extend({
		data: function( key, value ) {
			var i, name, data,
				elem = this[0],
				attrs = elem && elem.attributes;

			// Special expections of .data basically thwart jQuery.access,
			// so implement the relevant behavior ourselves

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = jQuery.data( elem );

					if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
							name = attrs[i].name;

							if ( name.indexOf("data-") === 0 ) {
								name = jQuery.camelCase( name.slice(5) );

								dataAttr( elem, name, data[ name ] );
							}
						}
						jQuery._data( elem, "parsedAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each(function() {
					jQuery.data( this, key );
				});
			}

			return arguments.length > 1 ?

				// Sets one value
				this.each(function() {
					jQuery.data( this, key, value );
				}) :

				// Gets one value
				// Try to fetch any internally stored data first
				elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
		},

		removeData: function( key ) {
			return this.each(function() {
				jQuery.removeData( this, key );
			});
		}
	});


	jQuery.extend({
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = jQuery._data( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray(data) ) {
						queue = jQuery._data( elem, type, jQuery.makeArray(data) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// not intended for public consumption - generates a queueHooks object, or returns the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return jQuery._data( elem, key ) || jQuery._data( elem, key, {
				empty: jQuery.Callbacks("once memory").add(function() {
					jQuery._removeData( elem, type + "queue" );
					jQuery._removeData( elem, key );
				})
			});
		}
	});

	jQuery.fn.extend({
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[0], type );
			}

			return data === undefined ?
				this :
				this.each(function() {
					var queue = jQuery.queue( this, type, data );

					// ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[0] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				});
		},
		dequeue: function( type ) {
			return this.each(function() {
				jQuery.dequeue( this, type );
			});
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = jQuery._data( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	});
	var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
		};



	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			length = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < length; i++ ) {
					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				length ? fn( elems[0], key ) : emptyGet;
	};
	var rcheckableType = (/^(?:checkbox|radio)$/i);



	(function() {
		var fragment = document.createDocumentFragment(),
			div = document.createElement("div"),
			input = document.createElement("input");

		// Setup
		div.setAttribute( "className", "t" );
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a>";

		// IE strips leading whitespace when .innerHTML is used
		support.leadingWhitespace = div.firstChild.nodeType === 3;

		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		support.tbody = !div.getElementsByTagName( "tbody" ).length;

		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

		// Makes sure cloning an html5 element does not cause problems
		// Where outerHTML is undefined, this still works
		support.html5Clone =
			document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

		// Check if a disconnected checkbox will retain its checked
		// value of true after appended to the DOM (IE6/7)
		input.type = "checkbox";
		input.checked = true;
		fragment.appendChild( input );
		support.appendChecked = input.checked;

		// Make sure textarea (and checkbox) defaultValue is properly cloned
		// Support: IE6-IE11+
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

		// #11217 - WebKit loses check when the name is after the checked attribute
		fragment.appendChild( div );
		div.innerHTML = "<input type='radio' checked='checked' name='t'/>";

		// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
		// old WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<9
		// Opera does not clone events (and typeof div.attachEvent === undefined).
		// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
		support.noCloneEvent = true;
		if ( div.attachEvent ) {
			div.attachEvent( "onclick", function() {
				support.noCloneEvent = false;
			});

			div.cloneNode( true ).click();
		}

		// Execute the test only if not already executed in another module.
		if (support.deleteExpando == null) {
			// Support: IE<9
			support.deleteExpando = true;
			try {
				delete div.test;
			} catch( e ) {
				support.deleteExpando = false;
			}
		}

		// Null elements to avoid leaks in IE.
		fragment = div = input = null;
	})();


	(function() {
		var i, eventName,
			div = document.createElement( "div" );

		// Support: IE<9 (lack submit/change bubble), Firefox 23+ (lack focusin event)
		for ( i in { submit: true, change: true, focusin: true }) {
			eventName = "on" + i;

			if ( !(support[ i + "Bubbles" ] = eventName in window) ) {
				// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
				div.setAttribute( eventName, "t" );
				support[ i + "Bubbles" ] = div.attributes[ eventName ].expando === false;
			}
		}

		// Null elements to avoid leaks in IE.
		div = null;
	})();


	var rformElems = /^(?:input|select|textarea)$/i,
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|contextmenu)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {
			var tmp, events, t, handleObjIn,
				special, eventHandle, handleObj,
				handlers, type, namespaces, origType,
				elemData = jQuery._data( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !(events = elemData.events) ) {
				events = elemData.events = {};
			}
			if ( !(eventHandle = elemData.handle) ) {
				eventHandle = elemData.handle = function( e ) {
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== strundefined && (!e || jQuery.event.triggered !== e.type) ?
						jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
						undefined;
				};
				// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
				eventHandle.elem = elem;
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join(".")
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !(handlers = events[ type ]) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener/attachEvent if the special events handler returns false
					if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
						// Bind the global event handler to the element
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle, false );

						} else if ( elem.attachEvent ) {
							elem.attachEvent( "on" + type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

			// Nullify elem to prevent memory leaks in IE
			elem = null;
		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
			var j, handleObj, tmp,
				origCount, t, events,
				special, handlers, type,
				namespaces, origType,
				elemData = jQuery.hasData( elem ) && jQuery._data( elem );

			if ( !elemData || !(events = elemData.events) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				delete elemData.handle;

				// removeData also checks for emptiness and clears the expando if empty
				// so use it instead of delete
				jQuery._removeData( elem, "events" );
			}
		},

		trigger: function( event, data, elem, onlyHandlers ) {
			var handle, ontype, cur,
				bubbleType, special, tmp, i,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf(".") >= 0 ) {
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.namespace_re = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === (elem.ownerDocument || document) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
					jQuery.acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Can't use an .isFunction() check here because IE6/7 fails that test.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						try {
							elem[ type ]();
						} catch ( e ) {
							// IE<9 dies on focus/blur to hidden element (#1486,#12518)
							// only reproducible on winXP IE8 native, not IE9 in IE8 mode
						}
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, ret, handleObj, matched, j,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or
					// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
								.apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( (event.result = ret) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var sel, handleObj, matches, i,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			// Avoid non-left-click bubbling in Firefox (#3861)
			if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

				/* jshint eqeqeq: false */
				for ( ; cur != this; cur = cur.parentNode || this ) {
					/* jshint eqeqeq: true */

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) >= 0 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push({ elem: cur, handlers: matches });
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
			}

			return handlerQueue;
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: IE<9
			// Fix target property (#1925)
			if ( !event.target ) {
				event.target = originalEvent.srcElement || document;
			}

			// Support: Chrome 23+, Safari?
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			// Support: IE<9
			// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
			event.metaKey = !!event.metaKey;

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function( event, original ) {
				var body, eventDoc, doc,
					button = original.button,
					fromElement = original.fromElement;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add relatedTarget, if necessary
				if ( !event.relatedTarget && fromElement ) {
					event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		special: {
			load: {
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						try {
							this.focus();
							return false;
						} catch ( e ) {
							// Support: IE<9
							// If we error on focus to hidden element (#1486, #12518),
							// let .trigger() run the handlers
						}
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Even when returnValue equals to undefined Firefox will still show alert
					if ( event.result !== undefined ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},

		simulate: function( type, elem, event, bubble ) {
			// Piggyback on a donor event to simulate a different one.
			// Fake originalEvent to avoid donor's stopPropagation, but if the
			// simulated event prevents default then we do the same on the donor.
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true,
					originalEvent: {}
				}
			);
			if ( bubble ) {
				jQuery.event.trigger( e, null, elem );
			} else {
				jQuery.event.dispatch.call( elem, e );
			}
			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	};

	jQuery.removeEvent = document.removeEventListener ?
		function( elem, type, handle ) {
			if ( elem.removeEventListener ) {
				elem.removeEventListener( type, handle, false );
			}
		} :
		function( elem, type, handle ) {
			var name = "on" + type;

			if ( elem.detachEvent ) {

				// #8545, #7054, preventing memory leaks for custom events in IE6-8
				// detachEvent needed property on element, by name of that event, to properly expose it to GC
				if ( typeof elem[ name ] === strundefined ) {
					elem[ name ] = null;
				}

				elem.detachEvent( name, handle );
			}
		};

	jQuery.Event = function( src, props ) {
		// Allow instantiation without the 'new' keyword
		if ( !(this instanceof jQuery.Event) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined && (
					// Support: IE < 9
					src.returnValue === false ||
					// Support: Android < 4.0
					src.getPreventDefault && src.getPreventDefault() ) ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;
			if ( !e ) {
				return;
			}

			// If preventDefault exists, run it on the original event
			if ( e.preventDefault ) {
				e.preventDefault();

			// Support: IE
			// Otherwise set the returnValue property of the original event to false
			} else {
				e.returnValue = false;
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;
			if ( !e ) {
				return;
			}
			// If stopPropagation exists, run it on the original event
			if ( e.stopPropagation ) {
				e.stopPropagation();
			}

			// Support: IE
			// Set the cancelBubble property of the original event to true
			e.cancelBubble = true;
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = returnTrue;
			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mousenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	});

	// IE submit delegation
	if ( !support.submitBubbles ) {

		jQuery.event.special.submit = {
			setup: function() {
				// Only need this for delegated form submit events
				if ( jQuery.nodeName( this, "form" ) ) {
					return false;
				}

				// Lazy-add a submit handler when a descendant form may potentially be submitted
				jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
					// Node name check avoids a VML-related crash in IE (#9807)
					var elem = e.target,
						form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
					if ( form && !jQuery._data( form, "submitBubbles" ) ) {
						jQuery.event.add( form, "submit._submit", function( event ) {
							event._submit_bubble = true;
						});
						jQuery._data( form, "submitBubbles", true );
					}
				});
				// return undefined since we don't need an event listener
			},

			postDispatch: function( event ) {
				// If form was submitted by the user, bubble the event up the tree
				if ( event._submit_bubble ) {
					delete event._submit_bubble;
					if ( this.parentNode && !event.isTrigger ) {
						jQuery.event.simulate( "submit", this.parentNode, event, true );
					}
				}
			},

			teardown: function() {
				// Only need this for delegated form submit events
				if ( jQuery.nodeName( this, "form" ) ) {
					return false;
				}

				// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
				jQuery.event.remove( this, "._submit" );
			}
		};
	}

	// IE change delegation and checkbox/radio fix
	if ( !support.changeBubbles ) {

		jQuery.event.special.change = {

			setup: function() {

				if ( rformElems.test( this.nodeName ) ) {
					// IE doesn't fire change on a check/radio until blur; trigger it on click
					// after a propertychange. Eat the blur-change in special.change.handle.
					// This still fires onchange a second time for check/radio after blur.
					if ( this.type === "checkbox" || this.type === "radio" ) {
						jQuery.event.add( this, "propertychange._change", function( event ) {
							if ( event.originalEvent.propertyName === "checked" ) {
								this._just_changed = true;
							}
						});
						jQuery.event.add( this, "click._change", function( event ) {
							if ( this._just_changed && !event.isTrigger ) {
								this._just_changed = false;
							}
							// Allow triggered, simulated change events (#11500)
							jQuery.event.simulate( "change", this, event, true );
						});
					}
					return false;
				}
				// Delegated event; lazy-add a change handler on descendant inputs
				jQuery.event.add( this, "beforeactivate._change", function( e ) {
					var elem = e.target;

					if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {
						jQuery.event.add( elem, "change._change", function( event ) {
							if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
								jQuery.event.simulate( "change", this.parentNode, event, true );
							}
						});
						jQuery._data( elem, "changeBubbles", true );
					}
				});
			},

			handle: function( event ) {
				var elem = event.target;

				// Swallow native change events from checkbox/radio, we already triggered them above
				if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
					return event.handleObj.handler.apply( this, arguments );
				}
			},

			teardown: function() {
				jQuery.event.remove( this, "._change" );

				return !rformElems.test( this.nodeName );
			}
		};
	}

	// Create "bubbling" focus and blur events
	if ( !support.focusinBubbles ) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
					jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
				};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = jQuery._data( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = jQuery._data( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						jQuery._removeData( doc, fix );
					} else {
						jQuery._data( doc, fix, attaches );
					}
				}
			};
		});
	}

	jQuery.fn.extend({

		on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
			var type, origFn;

			// Types can be a map of types/handlers
			if ( typeof types === "object" ) {
				// ( types-Object, selector, data )
				if ( typeof selector !== "string" ) {
					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for ( type in types ) {
					this.on( type, selector, data, types[ type ], one );
				}
				return this;
			}

			if ( data == null && fn == null ) {
				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if ( fn == null ) {
				if ( typeof selector === "string" ) {
					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {
					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if ( fn === false ) {
				fn = returnFalse;
			} else if ( !fn ) {
				return this;
			}

			if ( one === 1 ) {
				origFn = fn;
				fn = function( event ) {
					// Can use an empty set, since event contains the info
					jQuery().off( event );
					return origFn.apply( this, arguments );
				};
				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
			}
			return this.each( function() {
				jQuery.event.add( this, types, fn, data, selector );
			});
		},
		one: function( types, selector, data, fn ) {
			return this.on( types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each(function() {
				jQuery.event.remove( this, types, fn, selector );
			});
		},

		trigger: function( type, data ) {
			return this.each(function() {
				jQuery.event.trigger( type, data, this );
			});
		},
		triggerHandler: function( type, data ) {
			var elem = this[0];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	});


	function createSafeFragment( document ) {
		var list = nodeNames.split( "|" ),
			safeFrag = document.createDocumentFragment();

		if ( safeFrag.createElement ) {
			while ( list.length ) {
				safeFrag.createElement(
					list.pop()
				);
			}
		}
		return safeFrag;
	}

	var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
			"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
		rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
		rleadingWhitespace = /^\s+/,
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		rtagName = /<([\w:]+)/,
		rtbody = /<tbody/i,
		rhtml = /<|&#?\w+;/,
		rnoInnerhtml = /<(?:script|style|link)/i,
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptType = /^$|\/(?:java|ecma)script/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

		// We have to close these tags to support XHTML (#13200)
		wrapMap = {
			option: [ 1, "<select multiple='multiple'>", "</select>" ],
			legend: [ 1, "<fieldset>", "</fieldset>" ],
			area: [ 1, "<map>", "</map>" ],
			param: [ 1, "<object>", "</object>" ],
			thead: [ 1, "<table>", "</table>" ],
			tr: [ 2, "<table><tbody>", "</tbody></table>" ],
			col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
			td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

			// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
			// unless wrapped in a div with non-breaking characters in front of it.
			_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
		},
		safeFragment = createSafeFragment( document ),
		fragmentDiv = safeFragment.appendChild( document.createElement("div") );

	wrapMap.optgroup = wrapMap.option;
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	function getAll( context, tag ) {
		var elems, elem,
			i = 0,
			found = typeof context.getElementsByTagName !== strundefined ? context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== strundefined ? context.querySelectorAll( tag || "*" ) :
				undefined;

		if ( !found ) {
			for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
				if ( !tag || jQuery.nodeName( elem, tag ) ) {
					found.push( elem );
				} else {
					jQuery.merge( found, getAll( elem, tag ) );
				}
			}
		}

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], found ) :
			found;
	}

	// Used in buildFragment, fixes the defaultChecked property
	function fixDefaultChecked( elem ) {
		if ( rcheckableType.test( elem.type ) ) {
			elem.defaultChecked = elem.checked;
		}
	}

	// Support: IE<8
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName("tbody")[0] ||
				elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = (jQuery.find.attr( elem, "type" ) !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
		if ( match ) {
			elem.type = match[1];
		} else {
			elem.removeAttribute("type");
		}
		return elem;
	}

	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var elem,
			i = 0;
		for ( ; (elem = elems[i]) != null; i++ ) {
			jQuery._data( elem, "globalEval", !refElements || jQuery._data( refElements[i], "globalEval" ) );
		}
	}

	function cloneCopyEvent( src, dest ) {

		if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
			return;
		}

		var type, i, l,
			oldData = jQuery._data( src ),
			curData = jQuery._data( dest, oldData ),
			events = oldData.events;

		if ( events ) {
			delete curData.handle;
			curData.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}

		// make the cloned public data object a copy from the original
		if ( curData.data ) {
			curData.data = jQuery.extend( {}, curData.data );
		}
	}

	function fixCloneNodeIssues( src, dest ) {
		var nodeName, e, data;

		// We do not need to do anything for non-Elements
		if ( dest.nodeType !== 1 ) {
			return;
		}

		nodeName = dest.nodeName.toLowerCase();

		// IE6-8 copies events bound via attachEvent when using cloneNode.
		if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
			data = jQuery._data( dest );

			for ( e in data.events ) {
				jQuery.removeEvent( dest, e, data.handle );
			}

			// Event data gets referenced instead of copied if the expando gets copied too
			dest.removeAttribute( jQuery.expando );
		}

		// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
		if ( nodeName === "script" && dest.text !== src.text ) {
			disableScript( dest ).text = src.text;
			restoreScript( dest );

		// IE6-10 improperly clones children of object elements using classid.
		// IE10 throws NoModificationAllowedError if parent is null, #12132.
		} else if ( nodeName === "object" ) {
			if ( dest.parentNode ) {
				dest.outerHTML = src.outerHTML;
			}

			// This path appears unavoidable for IE9. When cloning an object
			// element in IE9, the outerHTML strategy above is not sufficient.
			// If the src has innerHTML and the destination does not,
			// copy the src.innerHTML into the dest.innerHTML. #10324
			if ( support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) {
				dest.innerHTML = src.innerHTML;
			}

		} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			// IE6-8 fails to persist the checked state of a cloned checkbox
			// or radio button. Worse, IE6-7 fail to give the cloned element
			// a checked appearance if the defaultChecked value isn't also set

			dest.defaultChecked = dest.checked = src.checked;

			// IE6-7 get confused and end up setting the value of a cloned
			// checkbox/radio button to an empty string instead of "on"
			if ( dest.value !== src.value ) {
				dest.value = src.value;
			}

		// IE6-8 fails to return the selected option to the default selected
		// state when cloning options
		} else if ( nodeName === "option" ) {
			dest.defaultSelected = dest.selected = src.defaultSelected;

		// IE6-8 fails to set the defaultValue to the correct value when
		// cloning other types of input fields
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	jQuery.extend({
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var destElements, node, clone, i, srcElements,
				inPage = jQuery.contains( elem.ownerDocument, elem );

			if ( support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
				clone = elem.cloneNode( true );

			// IE<=8 does not properly clone detached, unknown element nodes
			} else {
				fragmentDiv.innerHTML = elem.outerHTML;
				fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
			}

			if ( (!support.noCloneEvent || !support.noCloneChecked) &&
					(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				// Fix all IE cloning issues
				for ( i = 0; (node = srcElements[i]) != null; ++i ) {
					// Ensure that the destination node is not null; Fixes #9587
					if ( destElements[i] ) {
						fixCloneNodeIssues( node, destElements[i] );
					}
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0; (node = srcElements[i]) != null; i++ ) {
						cloneCopyEvent( node, destElements[i] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			destElements = srcElements = node = null;

			// Return the cloned set
			return clone;
		},

		buildFragment: function( elems, context, scripts, selection ) {
			var j, elem, contains,
				tmp, tag, tbody, wrap,
				l = elems.length,

				// Ensure a safe fragment
				safe = createSafeFragment( context ),

				nodes = [],
				i = 0;

			for ( ; i < l; i++ ) {
				elem = elems[ i ];

				if ( elem || elem === 0 ) {

					// Add nodes directly
					if ( jQuery.type( elem ) === "object" ) {
						jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

					// Convert non-html into a text node
					} else if ( !rhtml.test( elem ) ) {
						nodes.push( context.createTextNode( elem ) );

					// Convert html into DOM nodes
					} else {
						tmp = tmp || safe.appendChild( context.createElement("div") );

						// Deserialize a standard representation
						tag = (rtagName.exec( elem ) || [ "", "" ])[ 1 ].toLowerCase();
						wrap = wrapMap[ tag ] || wrapMap._default;

						tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];

						// Descend through wrappers to the right content
						j = wrap[0];
						while ( j-- ) {
							tmp = tmp.lastChild;
						}

						// Manually add leading whitespace removed by IE
						if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
							nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
						}

						// Remove IE's autoinserted <tbody> from table fragments
						if ( !support.tbody ) {

							// String was a <table>, *may* have spurious <tbody>
							elem = tag === "table" && !rtbody.test( elem ) ?
								tmp.firstChild :

								// String was a bare <thead> or <tfoot>
								wrap[1] === "<table>" && !rtbody.test( elem ) ?
									tmp :
									0;

							j = elem && elem.childNodes.length;
							while ( j-- ) {
								if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) {
									elem.removeChild( tbody );
								}
							}
						}

						jQuery.merge( nodes, tmp.childNodes );

						// Fix #12392 for WebKit and IE > 9
						tmp.textContent = "";

						// Fix #12392 for oldIE
						while ( tmp.firstChild ) {
							tmp.removeChild( tmp.firstChild );
						}

						// Remember the top-level container for proper cleanup
						tmp = safe.lastChild;
					}
				}
			}

			// Fix #11356: Clear elements from fragment
			if ( tmp ) {
				safe.removeChild( tmp );
			}

			// Reset defaultChecked for any radios and checkboxes
			// about to be appended to the DOM in IE 6/7 (#8060)
			if ( !support.appendChecked ) {
				jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
			}

			i = 0;
			while ( (elem = nodes[ i++ ]) ) {

				// #4087 - If origin and destination elements are the same, and this is
				// that element, do not do anything
				if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
					continue;
				}

				contains = jQuery.contains( elem.ownerDocument, elem );

				// Append to fragment
				tmp = getAll( safe.appendChild( elem ), "script" );

				// Preserve script evaluation history
				if ( contains ) {
					setGlobalEval( tmp );
				}

				// Capture executables
				if ( scripts ) {
					j = 0;
					while ( (elem = tmp[ j++ ]) ) {
						if ( rscriptType.test( elem.type || "" ) ) {
							scripts.push( elem );
						}
					}
				}
			}

			tmp = null;

			return safe;
		},

		cleanData: function( elems, /* internal */ acceptData ) {
			var elem, type, id, data,
				i = 0,
				internalKey = jQuery.expando,
				cache = jQuery.cache,
				deleteExpando = support.deleteExpando,
				special = jQuery.event.special;

			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( acceptData || jQuery.acceptData( elem ) ) {

					id = elem[ internalKey ];
					data = id && cache[ id ];

					if ( data ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Remove cache only if it was not already removed by jQuery.event.remove
						if ( cache[ id ] ) {

							delete cache[ id ];

							// IE does not allow us to delete expando properties from nodes,
							// nor does it have a removeAttribute function on Document nodes;
							// we must handle all of these cases
							if ( deleteExpando ) {
								delete elem[ internalKey ];

							} else if ( typeof elem.removeAttribute !== strundefined ) {
								elem.removeAttribute( internalKey );

							} else {
								elem[ internalKey ] = null;
							}

							deletedIds.push( id );
						}
					}
				}
			}
		}
	});

	jQuery.fn.extend({
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
			}, null, value, arguments.length );
		},

		append: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			});
		},

		prepend: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			});
		},

		before: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			});
		},

		after: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			});
		},

		remove: function( selector, keepData /* Internal Use Only */ ) {
			var elem,
				elems = selector ? jQuery.filter( selector, this ) : this,
				i = 0;

			for ( ; (elem = elems[i]) != null; i++ ) {

				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem ) );
				}

				if ( elem.parentNode ) {
					if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
						setGlobalEval( getAll( elem, "script" ) );
					}
					elem.parentNode.removeChild( elem );
				}
			}

			return this;
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; (elem = this[i]) != null; i++ ) {
				// Remove element nodes and prevent memory leaks
				if ( elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem, false ) );
				}

				// Remove any remaining nodes
				while ( elem.firstChild ) {
					elem.removeChild( elem.firstChild );
				}

				// If this is a select, ensure that it displays empty (#12336)
				// Support: IE<9
				if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
					elem.options.length = 0;
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map(function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			});
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined ) {
					return elem.nodeType === 1 ?
						elem.innerHTML.replace( rinlinejQuery, "" ) :
						undefined;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
					( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
					!wrapMap[ (rtagName.exec( value ) || [ "", "" ])[ 1 ].toLowerCase() ] ) {

					value = value.replace( rxhtmlTag, "<$1></$2>" );

					try {
						for (; i < l; i++ ) {
							// Remove element nodes and prevent memory leaks
							elem = this[i] || {};
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch(e) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var arg = arguments[ 0 ];

			// Make the changes, replacing each context element with the new content
			this.domManip( arguments, function( elem ) {
				arg = this.parentNode;

				jQuery.cleanData( getAll( this ) );

				if ( arg ) {
					arg.replaceChild( elem, this );
				}
			});

			// Force removal if there was no new content (e.g., from empty arguments)
			return arg && (arg.length || arg.nodeType) ? this : this.remove();
		},

		detach: function( selector ) {
			return this.remove( selector, true );
		},

		domManip: function( args, callback ) {

			// Flatten any nested arrays
			args = concat.apply( [], args );

			var first, node, hasScripts,
				scripts, doc, fragment,
				i = 0,
				l = this.length,
				set = this,
				iNoClone = l - 1,
				value = args[0],
				isFunction = jQuery.isFunction( value );

			// We can't cloneNode fragments that contain checked, in WebKit
			if ( isFunction ||
					( l > 1 && typeof value === "string" &&
						!support.checkClone && rchecked.test( value ) ) ) {
				return this.each(function( index ) {
					var self = set.eq( index );
					if ( isFunction ) {
						args[0] = value.call( this, index, self.html() );
					}
					self.domManip( args, callback );
				});
			}

			if ( l ) {
				fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
				first = fragment.firstChild;

				if ( fragment.childNodes.length === 1 ) {
					fragment = first;
				}

				if ( first ) {
					scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
					hasScripts = scripts.length;

					// Use the original fragment for the last item instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for ( ; i < l; i++ ) {
						node = fragment;

						if ( i !== iNoClone ) {
							node = jQuery.clone( node, true, true );

							// Keep references to cloned scripts for later restoration
							if ( hasScripts ) {
								jQuery.merge( scripts, getAll( node, "script" ) );
							}
						}

						callback.call( this[i], node, i );
					}

					if ( hasScripts ) {
						doc = scripts[ scripts.length - 1 ].ownerDocument;

						// Reenable scripts
						jQuery.map( scripts, restoreScript );

						// Evaluate executable scripts on first document insertion
						for ( i = 0; i < hasScripts; i++ ) {
							node = scripts[ i ];
							if ( rscriptType.test( node.type || "" ) &&
								!jQuery._data( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

								if ( node.src ) {
									// Optional AJAX dependency, but won't run scripts if not present
									if ( jQuery._evalUrl ) {
										jQuery._evalUrl( node.src );
									}
								} else {
									jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || "" ).replace( rcleanScript, "" ) );
								}
							}
						}
					}

					// Fix #11809: Avoid leaking memory
					fragment = first = null;
				}
			}

			return this;
		}
	});

	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				i = 0,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone(true);
				jQuery( insert[i] )[ original ]( elems );

				// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	});


	var iframe,
		elemdisplay = {};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */
	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			// getDefaultComputedStyle might be reliably used only on attached element
			display = window.getDefaultComputedStyle ?

				// Use of this method is a temporary fix (more like optmization) until something better comes along,
				// since it was removed from specification and supported only in FF
				window.getDefaultComputedStyle( elem[ 0 ] ).display : jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}


	(function() {
		var a, shrinkWrapBlocksVal,
			div = document.createElement( "div" ),
			divReset =
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;" +
				"display:block;padding:0;margin:0;border:0";

		// Setup
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
		a = div.getElementsByTagName( "a" )[ 0 ];

		a.style.cssText = "float:left;opacity:.5";

		// Make sure that element opacity exists
		// (IE uses filter instead)
		// Use a regex to work around a WebKit issue. See #5145
		support.opacity = /^0.5/.test( a.style.opacity );

		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		support.cssFloat = !!a.style.cssFloat;

		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		// Null elements to avoid leaks in IE.
		a = div = null;

		support.shrinkWrapBlocks = function() {
			var body, container, div, containerStyles;

			if ( shrinkWrapBlocksVal == null ) {
				body = document.getElementsByTagName( "body" )[ 0 ];
				if ( !body ) {
					// Test fired too early or in an unsupported environment, exit.
					return;
				}

				containerStyles = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px";
				container = document.createElement( "div" );
				div = document.createElement( "div" );

				body.appendChild( container ).appendChild( div );

				// Will be changed later if needed.
				shrinkWrapBlocksVal = false;

				if ( typeof div.style.zoom !== strundefined ) {
					// Support: IE6
					// Check if elements with layout shrink-wrap their children
					div.style.cssText = divReset + ";width:1px;padding:1px;zoom:1";
					div.innerHTML = "<div></div>";
					div.firstChild.style.width = "5px";
					shrinkWrapBlocksVal = div.offsetWidth !== 3;
				}

				body.removeChild( container );

				// Null elements to avoid leaks in IE.
				body = container = div = null;
			}

			return shrinkWrapBlocksVal;
		};

	})();
	var rmargin = (/^margin/);

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );



	var getStyles, curCSS,
		rposition = /^(top|right|bottom|left)$/;

	if ( window.getComputedStyle ) {
		getStyles = function( elem ) {
			return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
		};

		curCSS = function( elem, name, computed ) {
			var width, minWidth, maxWidth, ret,
				style = elem.style;

			computed = computed || getStyles( elem );

			// getPropertyValue is only needed for .css('filter') in IE9, see #12537
			ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

			if ( computed ) {

				if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
					ret = jQuery.style( elem, name );
				}

				// A tribute to the "awesome hack by Dean Edwards"
				// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
				// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
				// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
				if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

					// Remember the original values
					width = style.width;
					minWidth = style.minWidth;
					maxWidth = style.maxWidth;

					// Put in the new values to get a computed value out
					style.minWidth = style.maxWidth = style.width = ret;
					ret = computed.width;

					// Revert the changed values
					style.width = width;
					style.minWidth = minWidth;
					style.maxWidth = maxWidth;
				}
			}

			// Support: IE
			// IE returns zIndex value as an integer.
			return ret === undefined ?
				ret :
				ret + "";
		};
	} else if ( document.documentElement.currentStyle ) {
		getStyles = function( elem ) {
			return elem.currentStyle;
		};

		curCSS = function( elem, name, computed ) {
			var left, rs, rsLeft, ret,
				style = elem.style;

			computed = computed || getStyles( elem );
			ret = computed ? computed[ name ] : undefined;

			// Avoid setting ret to empty string here
			// so we don't default to auto
			if ( ret == null && style && style[ name ] ) {
				ret = style[ name ];
			}

			// From the awesome hack by Dean Edwards
			// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

			// If we're not dealing with a regular pixel number
			// but a number that has a weird ending, we need to convert it to pixels
			// but not position css attributes, as those are proportional to the parent element instead
			// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
			if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

				// Remember the original values
				left = style.left;
				rs = elem.runtimeStyle;
				rsLeft = rs && rs.left;

				// Put in the new values to get a computed value out
				if ( rsLeft ) {
					rs.left = elem.currentStyle.left;
				}
				style.left = name === "fontSize" ? "1em" : ret;
				ret = style.pixelLeft + "px";

				// Revert the changed values
				style.left = left;
				if ( rsLeft ) {
					rs.left = rsLeft;
				}
			}

			// Support: IE
			// IE returns zIndex value as an integer.
			return ret === undefined ?
				ret :
				ret + "" || "auto";
		};
	}




	function addGetHookIf( conditionFn, hookFn ) {
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				var condition = conditionFn();

				if ( condition == null ) {
					// The test was not ready at this point; screw the hook this time
					// but check again when needed next time.
					return;
				}

				if ( condition ) {
					// Hook not needed (or it's not possible to use it due to missing dependency),
					// remove it.
					// Since there are no other hooks for marginRight, remove the whole object.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.

				return (this.get = hookFn).apply( this, arguments );
			}
		};
	}


	(function() {
		var a, reliableHiddenOffsetsVal, boxSizingVal, boxSizingReliableVal,
			pixelPositionVal, reliableMarginRightVal,
			div = document.createElement( "div" ),
			containerStyles = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
			divReset =
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;" +
				"display:block;padding:0;margin:0;border:0";

		// Setup
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
		a = div.getElementsByTagName( "a" )[ 0 ];

		a.style.cssText = "float:left;opacity:.5";

		// Make sure that element opacity exists
		// (IE uses filter instead)
		// Use a regex to work around a WebKit issue. See #5145
		support.opacity = /^0.5/.test( a.style.opacity );

		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		support.cssFloat = !!a.style.cssFloat;

		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		// Null elements to avoid leaks in IE.
		a = div = null;

		jQuery.extend(support, {
			reliableHiddenOffsets: function() {
				if ( reliableHiddenOffsetsVal != null ) {
					return reliableHiddenOffsetsVal;
				}

				var container, tds, isSupported,
					div = document.createElement( "div" ),
					body = document.getElementsByTagName( "body" )[ 0 ];

				if ( !body ) {
					// Return for frameset docs that don't have a body
					return;
				}

				// Setup
				div.setAttribute( "className", "t" );
				div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

				container = document.createElement( "div" );
				container.style.cssText = containerStyles;

				body.appendChild( container ).appendChild( div );

				// Support: IE8
				// Check if table cells still have offsetWidth/Height when they are set
				// to display:none and there are still other visible table cells in a
				// table row; if so, offsetWidth/Height are not reliable for use when
				// determining if an element has been hidden directly using
				// display:none (it is still safe to use offsets if a parent element is
				// hidden; don safety goggles and see bug #4512 for more information).
				div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
				tds = div.getElementsByTagName( "td" );
				tds[ 0 ].style.cssText = "padding:0;margin:0;border:0;display:none";
				isSupported = ( tds[ 0 ].offsetHeight === 0 );

				tds[ 0 ].style.display = "";
				tds[ 1 ].style.display = "none";

				// Support: IE8
				// Check if empty table cells still have offsetWidth/Height
				reliableHiddenOffsetsVal = isSupported && ( tds[ 0 ].offsetHeight === 0 );

				body.removeChild( container );

				// Null elements to avoid leaks in IE.
				div = body = null;

				return reliableHiddenOffsetsVal;
			},

			boxSizing: function() {
				if ( boxSizingVal == null ) {
					computeStyleTests();
				}
				return boxSizingVal;
			},

			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},

			pixelPosition: function() {
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return pixelPositionVal;
			},

			reliableMarginRight: function() {
				var body, container, div, marginDiv;

				// Use window.getComputedStyle because jsdom on node.js will break without it.
				if ( reliableMarginRightVal == null && window.getComputedStyle ) {
					body = document.getElementsByTagName( "body" )[ 0 ];
					if ( !body ) {
						// Test fired too early or in an unsupported environment, exit.
						return;
					}

					container = document.createElement( "div" );
					div = document.createElement( "div" );
					container.style.cssText = containerStyles;

					body.appendChild( container ).appendChild( div );

					// Check if div with explicit width and no margin-right incorrectly
					// gets computed margin-right based on width of container. (#3333)
					// Fails in WebKit before Feb 2011 nightlies
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					marginDiv = div.appendChild( document.createElement( "div" ) );
					marginDiv.style.cssText = div.style.cssText = divReset;
					marginDiv.style.marginRight = marginDiv.style.width = "0";
					div.style.width = "1px";

					reliableMarginRightVal =
						!parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );

					body.removeChild( container );
				}

				return reliableMarginRightVal;
			}
		});

		function computeStyleTests() {
			var container, div,
				body = document.getElementsByTagName( "body" )[ 0 ];

			if ( !body ) {
				// Test fired too early or in an unsupported environment, exit.
				return;
			}

			container = document.createElement( "div" );
			div = document.createElement( "div" );
			container.style.cssText = containerStyles;

			body.appendChild( container ).appendChild( div );

			div.style.cssText =
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
					"position:absolute;display:block;padding:1px;border:1px;width:4px;" +
					"margin-top:1%;top:1%";

			// Workaround failing boxSizing test due to offsetWidth returning wrong value
			// with some non-1 values of body zoom, ticket #13543
			jQuery.swap( body, body.style.zoom != null ? { zoom: 1 } : {}, function() {
				boxSizingVal = div.offsetWidth === 4;
			});

			// Will be changed later if needed.
			boxSizingReliableVal = true;
			pixelPositionVal = false;
			reliableMarginRightVal = true;

			// Use window.getComputedStyle because jsdom on node.js will break without it.
			if ( window.getComputedStyle ) {
				pixelPositionVal = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
				boxSizingReliableVal =
					( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";
			}

			body.removeChild( container );

			// Null elements to avoid leaks in IE.
			div = body = null;
		}

	})();


	// A method for quickly swapping in/out CSS properties to get correct calculations.
	jQuery.swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var
			ralpha = /alpha\([^)]*\)/i,
		ropacity = /opacity\s*=\s*([^)]*)/,

		// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
		// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
		rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: 0,
			fontWeight: 400
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];


	// return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( style, name ) {

		// shortcut for names that are not vendor prefixed
		if ( name in style ) {
			return name;
		}

		// check for vendor prefixed names
		var capName = name.charAt(0).toUpperCase() + name.slice(1),
			origName = name,
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in style ) {
				return name;
			}
		}

		return origName;
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = jQuery._data( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = jQuery._data( elem, "olddisplay", defaultDisplay(elem.nodeName) );
				}
			} else {

				if ( !values[ index ] ) {
					hidden = isHidden( elem );

					if ( display && display !== "none" || !hidden ) {
						jQuery._data( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
					}
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	function setPositiveNumber( elem, value, subtract ) {
		var matches = rnumsplit.exec( value );
		return matches ?
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
			// If we already have the right measurement, avoid augmentation
			4 :
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {
			// both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// at this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
				// at this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// at this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = support.boxSizing() && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test(val) ) {
				return val;
			}

			// we need the check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox && ( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	jQuery.extend({
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"columnCount": true,
			"fillOpacity": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			// normalize float css property
			"float": support.cssFloat ? "cssFloat" : "styleFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// convert relative number strings (+= or -=) to relative numbers. #7345
				if ( type === "string" && (ret = rrelNum.exec( value )) ) {
					value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set. See: #7116
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add 'px' to the (except for certain CSS properties)
				if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
					value += "px";
				}

				// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
				// but it would mean to define eight (for every problematic property) identical functions
				if ( !support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {

					// Support: IE
					// Swallow errors from 'invalid' CSS values (#5509)
					try {
						// Support: Chrome, Safari
						// Setting style to blank string required to delete "style: x !important;"
						style[ name ] = "";
						style[ name ] = value;
					} catch(e) {}
				}

			} else {
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var num, val, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			//convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Return, converting to number if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
			}
			return val;
		}
	});

	jQuery.each([ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
					// certain elements can have dimension info if we invisibly show them
					// however, it must have a current display style that would benefit from this
					return elem.offsetWidth === 0 && rdisplayswap.test( jQuery.css( elem, "display" ) ) ?
						jQuery.swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						}) :
						getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var styles = extra && getStyles( elem );
				return setPositiveNumber( elem, value, extra ?
					augmentWidthOrHeight(
						elem,
						name,
						extra,
						support.boxSizing() && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					) : 0
				);
			}
		};
	});

	if ( !support.opacity ) {
		jQuery.cssHooks.opacity = {
			get: function( elem, computed ) {
				// IE uses filters for opacity
				return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
					( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
					computed ? "1" : "";
			},

			set: function( elem, value ) {
				var style = elem.style,
					currentStyle = elem.currentStyle,
					opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
					filter = currentStyle && currentStyle.filter || style.filter || "";

				// IE has trouble with opacity if it does not have layout
				// Force it by setting the zoom level
				style.zoom = 1;

				// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
				// if value === "", then remove inline opacity #12685
				if ( ( value >= 1 || value === "" ) &&
						jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
						style.removeAttribute ) {

					// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
					// if "filter:" is present at all, clearType is disabled, we want to avoid this
					// style.removeAttribute is IE Only, but so apparently is this code path...
					style.removeAttribute( "filter" );

					// if there is no filter style applied in a css rule or unset inline opacity, we are done
					if ( value === "" || currentStyle && !currentStyle.filter ) {
						return;
					}
				}

				// otherwise, set new filter values
				style.filter = ralpha.test( filter ) ?
					filter.replace( ralpha, opacity ) :
					filter + " " + opacity;
			}
		};
	}

	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// Work around by temporarily setting element display to inline-block
				return jQuery.swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	});

	jQuery.fn.extend({
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each(function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			});
		}
	});


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || "swing";
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				if ( tween.elem[ tween.prop ] != null &&
					(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
					return tween.elem[ tween.prop ];
				}

				// passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails
				// so, simple values such as "10px" are parsed to Float.
				// complex values such as "rotate(1rad)" are returned as is.
				result = jQuery.css( tween.elem, tween.prop, "" );
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
				// use step hook for back compat - use cssHook if its there - use .style if its
				// available and use plain properties where available
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9
	// Panic based approach to setting things on disconnected nodes

	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		}
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
		rrun = /queueHooks$/,
		animationPrefilters = [ defaultPrefilter ],
		tweeners = {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value ),
					target = tween.cur(),
					parts = rfxnum.exec( value ),
					unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

					// Starting value computation is required for potential unit mismatches
					start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
						rfxnum.exec( jQuery.css( tween.elem, prop ) ),
					scale = 1,
					maxIterations = 20;

				if ( start && start[ 3 ] !== unit ) {
					// Trust units reported by jQuery.css
					unit = unit || start[ 3 ];

					// Make sure we update the tween properties later on
					parts = parts || [];

					// Iteratively approximate from a nonzero starting point
					start = +target || 1;

					do {
						// If previous iteration zeroed out, double until we get *something*
						// Use a string for doubling factor so we don't accidentally see scale as unchanged below
						scale = scale || ".5";

						// Adjust and apply
						start = start / scale;
						jQuery.style( tween.elem, prop, start + unit );

					// Update scale, tolerating zero or NaN from tween.cur()
					// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
					} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
				}

				// Update tween properties
				if ( parts ) {
					start = tween.start = +start || +target || 0;
					tween.unit = unit;
					// If a +=/-= token was provided, we're doing a relative animation
					tween.end = parts[ 1 ] ?
						start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
						+parts[ 2 ];
				}

				return tween;
			} ]
		};

	// Animations created synchronously will run synchronously
	function createFxNow() {
		setTimeout(function() {
			fxNow = undefined;
		});
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			attrs = { height: type },
			i = 0;

		// if we include width, step value is 1 to do all cssExpand values,
		// if we don't include width, step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( (tween = collection[ index ].call( animation, prop, value )) ) {

				// we're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, dDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = jQuery._data( elem, "fxshow" );

		// handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always(function() {
				// doing this makes sure that the complete handler will be called
				// before this completes
				anim.always(function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				});
			});
		}

		// height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE does not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );
			dDisplay = defaultDisplay( elem.nodeName );
			if ( display === "none" ) {
				display = dDisplay;
			}
			if ( display === "inline" &&
					jQuery.css( elem, "float" ) === "none" ) {

				// inline-level elements accept inline-block;
				// block-level elements need to be inline with layout
				if ( !support.inlineBlockNeedsLayout || dDisplay === "inline" ) {
					style.display = "inline-block";
				} else {
					style.zoom = 1;
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			if ( !support.shrinkWrapBlocks() ) {
				anim.always(function() {
					style.overflow = opts.overflow[ 0 ];
					style.overflowX = opts.overflow[ 1 ];
					style.overflowY = opts.overflow[ 2 ];
				});
			}
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = jQuery._data( elem, "fxshow", {} );
			}

			// store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done(function() {
					jQuery( elem ).hide();
				});
			}
			anim.done(function() {
				var prop;
				jQuery._removeData( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			});
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// not quite $.extend, this wont overwrite keys already present.
				// also - reusing 'index' from above because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = animationPrefilters.length,
			deferred = jQuery.Deferred().always( function() {
				// don't match elem in the :animated selector
				delete tick.elem;
			}),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
					// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ]);

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise({
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, { specialEasing: {} }, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
						// if we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// resolve when we played the last frame
					// otherwise, reject
					if ( gotoEnd ) {
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			}),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			})
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.split(" ");
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				tweeners[ prop ] = tweeners[ prop ] || [];
				tweeners[ prop ].unshift( callback );
			}
		},

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				animationPrefilters.unshift( callback );
			} else {
				animationPrefilters.push( callback );
			}
		}
	});

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend({
		fadeTo: function( speed, to, easing, callback ) {

			// show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || jQuery._data( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each(function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = jQuery._data( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// start the next in the queue if the last step wasn't forced
				// timers currently will call their complete callbacks, which will dequeue
				// but only if they were gotoEnd
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			});
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each(function() {
				var index,
					data = jQuery._data( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// enable finishing flag on private data
				data.finish = true;

				// empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// turn off finishing flag
				delete data.finish;
			});
		}
	});

	jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	});

	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	});

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			timers = jQuery.timers,
			i = 0;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;

	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		clearInterval( timerId );
		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	};


	(function() {
		var a, input, select, opt,
			div = document.createElement("div" );

		// Setup
		div.setAttribute( "className", "t" );
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
		a = div.getElementsByTagName("a")[ 0 ];

		// First batch of tests.
		select = document.createElement("select");
		opt = select.appendChild( document.createElement("option") );
		input = div.getElementsByTagName("input")[ 0 ];

		a.style.cssText = "top:1px";

		// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
		support.getSetAttribute = div.className !== "t";

		// Get the style information from getAttribute
		// (IE uses .cssText instead)
		support.style = /top/.test( a.getAttribute("style") );

		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		support.hrefNormalized = a.getAttribute("href") === "/a";

		// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
		support.checkOn = !!input.value;

		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		support.optSelected = opt.selected;

		// Tests for enctype support on a form (#6743)
		support.enctype = !!document.createElement("form").enctype;

		// Make sure that the options inside disabled selects aren't marked as disabled
		// (WebKit marks them as disabled)
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE8 only
		// Check if we can trust getAttribute("value")
		input = document.createElement( "input" );
		input.setAttribute( "value", "" );
		support.input = input.getAttribute( "value" ) === "";

		// Check if an input maintains its value after becoming a radio
		input.value = "t";
		input.setAttribute( "type", "radio" );
		support.radioValue = input.value === "t";

		// Null elements to avoid leaks in IE.
		a = input = select = opt = div = null;
	})();


	var rreturn = /\r/g;

	jQuery.fn.extend({
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[0];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?
						// handle most common string cases
						ret.replace(rreturn, "") :
						// handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each(function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
				} else if ( typeof val === "number" ) {
					val += "";
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					});
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			});
		}
	});

	jQuery.extend({
		valHooks: {
			option: {
				get: function( elem ) {
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
						jQuery.text( elem );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// oldIE doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
								( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) >= 0 ) {

							// Support: IE6
							// When new option element is added to select box we need to
							// force reflow of newly added node in order to workaround delay
							// of initialization properties
							try {
								option.selected = optionSet = true;

							} catch ( _ ) {

								// Will be executed only in IE6
								option.scrollHeight;
							}

						} else {
							option.selected = false;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}

					return options;
				}
			}
		}
	});

	// Radios and checkboxes getter/setter
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				// Support: Webkit
				// "" is returned instead of "on" if a value isn't specified
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});




	var nodeHook, boolHook,
		attrHandle = jQuery.expr.attrHandle,
		ruseDefault = /^(?:checked|selected)$/i,
		getSetAttribute = support.getSetAttribute,
		getSetInput = support.input;

	jQuery.fn.extend({
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each(function() {
				jQuery.removeAttr( this, name );
			});
		}
	});

	jQuery.extend({
		attr: function( elem, name, value ) {
			var hooks, ret,
				nType = elem.nodeType;

			// don't get/set attributes on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === strundefined ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
			}

			if ( value !== undefined ) {

				if ( value === null ) {
					jQuery.removeAttr( elem, name );

				} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
					return ret;

				} else {
					elem.setAttribute( name, value + "" );
					return value;
				}

			} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;

			} else {
				ret = jQuery.find.attr( elem, name );

				// Non-existent attributes return null, we normalize to undefined
				return ret == null ?
					undefined :
					ret;
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( (name = attrNames[i++]) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {
						// Set corresponding property to false
						if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
							elem[ propName ] = false;
						// Support: IE<9
						// Also clear defaultChecked/defaultSelected (if appropriate)
						} else {
							elem[ jQuery.camelCase( "default-" + name ) ] =
								elem[ propName ] = false;
						}

					// See #9699 for explanation of this approach (setting first, then removal)
					} else {
						jQuery.attr( elem, name, "" );
					}

					elem.removeAttribute( getSetAttribute ? name : propName );
				}
			}
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
						// Setting the type on a radio button after the value resets the value in IE6-9
						// Reset value to default in case type is set after value during creation
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		}
	});

	// Hook for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
				// IE<8 needs the *property* name
				elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

			// Use defaultChecked and defaultSelected for oldIE
			} else {
				elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
			}

			return name;
		}
	};

	// Retrieve booleans specially
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {

		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = getSetInput && getSetAttribute || !ruseDefault.test( name ) ?
			function( elem, name, isXML ) {
				var ret, handle;
				if ( !isXML ) {
					// Avoid an infinite loop by temporarily removing this function from the getter
					handle = attrHandle[ name ];
					attrHandle[ name ] = ret;
					ret = getter( elem, name, isXML ) != null ?
						name.toLowerCase() :
						null;
					attrHandle[ name ] = handle;
				}
				return ret;
			} :
			function( elem, name, isXML ) {
				if ( !isXML ) {
					return elem[ jQuery.camelCase( "default-" + name ) ] ?
						name.toLowerCase() :
						null;
				}
			};
	});

	// fix oldIE attroperties
	if ( !getSetInput || !getSetAttribute ) {
		jQuery.attrHooks.value = {
			set: function( elem, value, name ) {
				if ( jQuery.nodeName( elem, "input" ) ) {
					// Does not return so that setAttribute is also used
					elem.defaultValue = value;
				} else {
					// Use nodeHook if defined (#1954); otherwise setAttribute is fine
					return nodeHook && nodeHook.set( elem, value, name );
				}
			}
		};
	}

	// IE6/7 do not support getting/setting some attributes with get/setAttribute
	if ( !getSetAttribute ) {

		// Use this for any attribute in IE6/7
		// This fixes almost every IE6/7 issue
		nodeHook = {
			set: function( elem, value, name ) {
				// Set the existing or create a new attribute node
				var ret = elem.getAttributeNode( name );
				if ( !ret ) {
					elem.setAttributeNode(
						(ret = elem.ownerDocument.createAttribute( name ))
					);
				}

				ret.value = value += "";

				// Break association with cloned elements by also using setAttribute (#9646)
				if ( name === "value" || value === elem.getAttribute( name ) ) {
					return value;
				}
			}
		};

		// Some attributes are constructed with empty-string values when not defined
		attrHandle.id = attrHandle.name = attrHandle.coords =
			function( elem, name, isXML ) {
				var ret;
				if ( !isXML ) {
					return (ret = elem.getAttributeNode( name )) && ret.value !== "" ?
						ret.value :
						null;
				}
			};

		// Fixing value retrieval on a button requires this module
		jQuery.valHooks.button = {
			get: function( elem, name ) {
				var ret = elem.getAttributeNode( name );
				if ( ret && ret.specified ) {
					return ret.value;
				}
			},
			set: nodeHook.set
		};

		// Set contenteditable to false on removals(#10429)
		// Setting to empty string throws an error as an invalid value
		jQuery.attrHooks.contenteditable = {
			set: function( elem, value, name ) {
				nodeHook.set( elem, value === "" ? false : value, name );
			}
		};

		// Set width and height to auto instead of 0 on empty string( Bug #8150 )
		// This is for removals
		jQuery.each([ "width", "height" ], function( i, name ) {
			jQuery.attrHooks[ name ] = {
				set: function( elem, value ) {
					if ( value === "" ) {
						elem.setAttribute( name, "auto" );
						return value;
					}
				}
			};
		});
	}

	if ( !support.style ) {
		jQuery.attrHooks.style = {
			get: function( elem ) {
				// Return undefined in the case of empty string
				// Note: IE uppercases css property names, but if we were to .toLowerCase()
				// .cssText, that would destroy case senstitivity in URL's, like in "background"
				return elem.style.cssText || undefined;
			},
			set: function( elem, value ) {
				return ( elem.style.cssText = value + "" );
			}
		};
	}




	var rfocusable = /^(?:input|select|textarea|button|object)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend({
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			name = jQuery.propFix[ name ] || name;
			return this.each(function() {
				// try/catch handles cases where IE balks (such as removing a property on window)
				try {
					this[ name ] = undefined;
					delete this[ name ];
				} catch( e ) {}
			});
		}
	});

	jQuery.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},

		prop: function( elem, name, value ) {
			var ret, hooks, notxml,
				nType = elem.nodeType;

			// don't get/set properties on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

			if ( notxml ) {
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
					ret :
					( elem[ name ] = value );

			} else {
				return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
					ret :
					elem[ name ];
			}
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {
					// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
				}
			}
		}
	});

	// Some attributes require a special call on IE
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !support.hrefNormalized ) {
		// href/src property should get the full normalized URL (#10299/#12915)
		jQuery.each([ "href", "src" ], function( i, name ) {
			jQuery.propHooks[ name ] = {
				get: function( elem ) {
					return elem.getAttribute( name, 4 );
				}
			};
		});
	}

	// Support: Safari, IE9+
	// mis-reports the default selected property of an option
	// Accessing the parent's selectedIndex property fixes it
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;

				if ( parent ) {
					parent.selectedIndex;

					// Make sure that it also works with optgroups, see #5701
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
				return null;
			}
		};
	}

	jQuery.each([
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	});

	// IE6/7 call enctype encoding
	if ( !support.enctype ) {
		jQuery.propFix.enctype = "encoding";
	}




	var rclass = /[\t\r\n\f]/g;

	jQuery.fn.extend({
		addClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				i = 0,
				len = this.length,
				proceed = typeof value === "string" && value;

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).addClass( value.call( this, j, this.className ) );
				});
			}

			if ( proceed ) {
				// The disjunction here is for better compressibility (see removeClass)
				classes = ( value || "" ).match( rnotwhite ) || [];

				for ( ; i < len; i++ ) {
					elem = this[ i ];
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						" "
					);

					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				i = 0,
				len = this.length,
				proceed = arguments.length === 0 || typeof value === "string" && value;

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).removeClass( value.call( this, j, this.className ) );
				});
			}
			if ( proceed ) {
				classes = ( value || "" ).match( rnotwhite ) || [];

				for ( ; i < len; i++ ) {
					elem = this[ i ];
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						""
					);

					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// only assign if different to avoid unneeded rendering.
						finalValue = value ? jQuery.trim( cur ) : "";
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( i ) {
					jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
				});
			}

			return this.each(function() {
				if ( type === "string" ) {
					// toggle individual class names
					var className,
						i = 0,
						self = jQuery( this ),
						classNames = value.match( rnotwhite ) || [];

					while ( (className = classNames[ i++ ]) ) {
						// check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( type === strundefined || type === "boolean" ) {
					if ( this.className ) {
						// store className if set
						jQuery._data( this, "__className__", this.className );
					}

					// If the element has a class name or if we're passed "false",
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
				}
			});
		},

		hasClass: function( selector ) {
			var className = " " + selector + " ",
				i = 0,
				l = this.length;
			for ( ; i < l; i++ ) {
				if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
					return true;
				}
			}

			return false;
		}
	});




	// Return jQuery for attributes-only inclusion


	jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	});

	jQuery.fn.extend({
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		},

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
		}
	});


	var nonce = jQuery.now();

	var rquery = (/\?/);



	var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

	jQuery.parseJSON = function( data ) {
		// Attempt to parse using the native JSON parser first
		if ( window.JSON && window.JSON.parse ) {
			// Support: Android 2.3
			// Workaround failure to string-cast null input
			return window.JSON.parse( data + "" );
		}

		var requireNonComma,
			depth = null,
			str = jQuery.trim( data + "" );

		// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
		// after removing valid tokens
		return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

			// Force termination if we see a misplaced comma
			if ( requireNonComma && comma ) {
				depth = 0;
			}

			// Perform no more replacements after returning to outermost depth
			if ( depth === 0 ) {
				return token;
			}

			// Commas must not follow "[", "{", or ","
			requireNonComma = open || comma;

			// Determine new depth
			// array/object open ("[" or "{"): depth += true - false (increment)
			// array/object close ("]" or "}"): depth += false - true (decrement)
			// other cases ("," or primitive): depth += true - true (numeric cast)
			depth += !close - !open;

			// Remove this token
			return "";
		}) ) ?
			( Function( "return " + str ) )() :
			jQuery.error( "Invalid JSON: " + data );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		try {
			if ( window.DOMParser ) { // Standard
				tmp = new DOMParser();
				xml = tmp.parseFromString( data, "text/xml" );
			} else { // IE
				xml = new ActiveXObject( "Microsoft.XMLDOM" );
				xml.async = "false";
				xml.loadXML( data );
			}
		} catch( e ) {
			xml = undefined;
		}
		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		// Document location
		ajaxLocParts,
		ajaxLocation,

		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat("*");

	// #8138, IE may throw an exception when accessing
	// a field from window.location if document.domain has been set
	try {
		ajaxLocation = location.href;
	} catch( e ) {
		// Use the href attribute of an A element
		// since IE will modify it given document.location
		ajaxLocation = document.createElement( "a" );
		ajaxLocation.href = "";
		ajaxLocation = ajaxLocation.href;
	}

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {
				// For each dataType in the dataTypeExpression
				while ( (dataType = dataTypes[i++]) ) {
					// Prepend if requested
					if ( dataType.charAt( 0 ) === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

					// Otherwise append
					} else {
						(structure[ dataType ] = structure[ dataType ] || []).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			});
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var deep, key,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
		var firstDataType, ct, finalDataType, type,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s[ "throws" ] ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend({

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var // Cross-domain detection vars
				parts,
				// Loop variable
				i,
				// URL without anti-cache param
				cacheURL,
				// Response headers as string
				responseHeadersString,
				// timeout handle
				timeoutTimer,

				// To know if global events are to be dispatched
				fireGlobals,

				transport,
				// Response headers
				responseHeaders,
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
				// Callbacks context
				callbackContext = s.context || s,
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks("once memory"),
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
				// The jqXHR state
				state = 0,
				// Default abort message
				strAbort = "canceled",
				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( (match = rheaders.exec( responseHeadersString )) ) {
									responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if ( s.crossDomain == null ) {
				parts = rurl.exec( s.url.toLowerCase() );
				s.crossDomain = !!( parts &&
					( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
						( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
							( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
				);
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			fireGlobals = s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger("ajaxStart");
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
					s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
				// Abort if not done already and return
				return jqXHR.abort();
			}

			// aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = setTimeout(function() {
						jqXHR.abort("timeout");
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {
					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );
					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
					// We extract error from statusText
					// then normalize statusText and status for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	});

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
			// shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			return jQuery.ajax({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			});
		};
	});

	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	});


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax({
			url: url,
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		});
	};


	jQuery.fn.extend({
		wrapAll: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each(function(i) {
					jQuery(this).wrapAll( html.call(this, i) );
				});
			}

			if ( this[0] ) {
				// The elements to wrap the target around
				var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

				if ( this[0].parentNode ) {
					wrap.insertBefore( this[0] );
				}

				wrap.map(function() {
					var elem = this;

					while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
						elem = elem.firstChild;
					}

					return elem;
				}).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each(function(i) {
					jQuery(this).wrapInner( html.call(this, i) );
				});
			}

			return this.each(function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			});
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each(function(i) {
				jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
			});
		},

		unwrap: function() {
			return this.parent().each(function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			}).end();
		}
	});


	jQuery.expr.filters.hidden = function( elem ) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
			(!support.reliableHiddenOffsets() &&
				((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
	};

	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
					// Treat each array item as a scalar.
					add( prefix, v );

				} else {
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
				}
			});

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {
			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			});

		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend({
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map(function() {
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			})
			.filter(function() {
				var type = this.type;
				// Use .is(":disabled") so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			})
			.map(function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						}) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			}).get();
		}
	});


	// Create the request object
	// (This is still attached to ajaxSettings for backward compatibility)
	jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?
		// Support: IE6+
		function() {

			// XHR cannot access local files, always use ActiveX for that case
			return !this.isLocal &&

				// Support: IE7-8
				// oldIE XHR does not support non-RFC2616 methods (#13240)
				// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
				// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
				// Although this check for six methods instead of eight
				// since IE also does not support "trace" and "connect"
				/^(get|post|head|put|delete|options)$/i.test( this.type ) &&

				createStandardXHR() || createActiveXHR();
		} :
		// For all other browsers, use the standard XMLHttpRequest object
		createStandardXHR;

	var xhrId = 0,
		xhrCallbacks = {},
		xhrSupported = jQuery.ajaxSettings.xhr();

	// Support: IE<10
	// Open requests must be manually aborted on unload (#5280)
	if ( window.ActiveXObject ) {
		jQuery( window ).on( "unload", function() {
			for ( var key in xhrCallbacks ) {
				xhrCallbacks[ key ]( undefined, true );
			}
		});
	}

	// Determine support properties
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	xhrSupported = support.ajax = !!xhrSupported;

	// Create transport if the browser can provide an xhr
	if ( xhrSupported ) {

		jQuery.ajaxTransport(function( options ) {
			// Cross domain only allowed if supported through XMLHttpRequest
			if ( !options.crossDomain || support.cors ) {

				var callback;

				return {
					send: function( headers, complete ) {
						var i,
							xhr = options.xhr(),
							id = ++xhrId;

						// Open the socket
						xhr.open( options.type, options.url, options.async, options.username, options.password );

						// Apply custom fields if provided
						if ( options.xhrFields ) {
							for ( i in options.xhrFields ) {
								xhr[ i ] = options.xhrFields[ i ];
							}
						}

						// Override mime type if needed
						if ( options.mimeType && xhr.overrideMimeType ) {
							xhr.overrideMimeType( options.mimeType );
						}

						// X-Requested-With header
						// For cross-domain requests, seeing as conditions for a preflight are
						// akin to a jigsaw puzzle, we simply never set it to be sure.
						// (it can always be set on a per-request basis or even using ajaxSetup)
						// For same-domain requests, won't change header if already provided.
						if ( !options.crossDomain && !headers["X-Requested-With"] ) {
							headers["X-Requested-With"] = "XMLHttpRequest";
						}

						// Set headers
						for ( i in headers ) {
							// Support: IE<9
							// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
							// request header to a null-value.
							//
							// To keep consistent with other XHR implementations, cast the value
							// to string and ignore `undefined`.
							if ( headers[ i ] !== undefined ) {
								xhr.setRequestHeader( i, headers[ i ] + "" );
							}
						}

						// Do send the request
						// This may raise an exception which is actually
						// handled in jQuery.ajax (so no try/catch here)
						xhr.send( ( options.hasContent && options.data ) || null );

						// Listener
						callback = function( _, isAbort ) {
							var status, statusText, responses;

							// Was never called and is aborted or complete
							if ( callback && ( isAbort || xhr.readyState === 4 ) ) {
								// Clean up
								delete xhrCallbacks[ id ];
								callback = undefined;
								xhr.onreadystatechange = jQuery.noop;

								// Abort manually if needed
								if ( isAbort ) {
									if ( xhr.readyState !== 4 ) {
										xhr.abort();
									}
								} else {
									responses = {};
									status = xhr.status;

									// Support: IE<10
									// Accessing binary-data responseText throws an exception
									// (#11426)
									if ( typeof xhr.responseText === "string" ) {
										responses.text = xhr.responseText;
									}

									// Firefox throws an exception when accessing
									// statusText for faulty cross-domain requests
									try {
										statusText = xhr.statusText;
									} catch( e ) {
										// We normalize with Webkit giving an empty statusText
										statusText = "";
									}

									// Filter status for non standard behaviors

									// If the request is local and we have data: assume a success
									// (success with no data won't get notified, that's the best we
									// can do given current implementations)
									if ( !status && options.isLocal && !options.crossDomain ) {
										status = responses.text ? 200 : 404;
									// IE - #1450: sometimes returns 1223 when it should be 204
									} else if ( status === 1223 ) {
										status = 204;
									}
								}
							}

							// Call complete if needed
							if ( responses ) {
								complete( status, statusText, responses, xhr.getAllResponseHeaders() );
							}
						};

						if ( !options.async ) {
							// if we're in sync mode we fire the callback
							callback();
						} else if ( xhr.readyState === 4 ) {
							// (IE6 & IE7) if it's in cache and has been
							// retrieved directly we need to fire the callback
							setTimeout( callback );
						} else {
							// Add to the list of active xhr callbacks
							xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
						}
					},

					abort: function() {
						if ( callback ) {
							callback( undefined, true );
						}
					}
				};
			}
		});
	}

	// Functions to create xhrs
	function createStandardXHR() {
		try {
			return new window.XMLHttpRequest();
		} catch( e ) {}
	}

	function createActiveXHR() {
		try {
			return new window.ActiveXObject( "Microsoft.XMLHTTP" );
		} catch( e ) {}
	}




	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	});

	// Handle cache's special case and global
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
			s.global = false;
		}
	});

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function(s) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {

			var script,
				head = document.head || jQuery("head")[0] || document.documentElement;

			return {

				send: function( _, callback ) {

					script = document.createElement("script");

					script.async = true;

					if ( s.scriptCharset ) {
						script.charset = s.scriptCharset;
					}

					script.src = s.url;

					// Attach handlers for all browsers
					script.onload = script.onreadystatechange = function( _, isAbort ) {

						if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

							// Handle memory leak in IE
							script.onload = script.onreadystatechange = null;

							// Remove the script
							if ( script.parentNode ) {
								script.parentNode.removeChild( script );
							}

							// Dereference the script
							script = null;

							// Callback if not abort
							if ( !isAbort ) {
								callback( 200, "success" );
							}
						}
					};

					// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					head.insertBefore( script, head.firstChild );
				},

				abort: function() {
					if ( script ) {
						script.onload( undefined, true );
					}
				}
			};
		}
	});




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	});

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always(function() {
				// Restore preexisting value
				window[ callbackName ] = overwritten;

				// Save back as free
				if ( s[ callbackName ] ) {
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			});

			// Delegate to script
			return "script";
		}
	});




	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[1] ) ];
		}

		parsed = jQuery.buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, response, type,
			self = this,
			off = url.indexOf(" ");

		if ( off >= 0 ) {
			selector = url.slice( off, url.length );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax({
				url: url,

				// if "type" variable is undefined, then "GET" method will be used
				type: type,
				dataType: "html",
				data: params
			}).done(function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			}).complete( callback && function( jqXHR, status ) {
				self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
			});
		}

		return this;
	};




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};





	var docElem = window.document.documentElement;

	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ?
			elem :
			elem.nodeType === 9 ?
				elem.defaultView || elem.parentWindow :
				false;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				jQuery.inArray("auto", [ curCSSTop, curCSSLeft ] ) > -1;

			// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {
				options = options.call( elem, i, curOffset );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );
			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend({
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each(function( i ) {
						jQuery.offset.setOffset( this, options, i );
					});
			}

			var docElem, win,
				box = { top: 0, left: 0 },
				elem = this[ 0 ],
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			// If we don't have gBCR, just use 0,0 rather than error
			// BlackBerry 5, iOS 3 (original iPhone)
			if ( typeof elem.getBoundingClientRect !== strundefined ) {
				box = elem.getBoundingClientRect();
			}
			win = getWindow( doc );
			return {
				top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
				left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				parentOffset = { top: 0, left: 0 },
				elem = this[ 0 ];

			// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
				// we assume that getBoundingClientRect is available when computed position is fixed
				offset = elem.getBoundingClientRect();
			} else {
				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			// note: when an element has margin: auto the offsetLeft and marginLeft
			// are the same in Safari causing offset.left to incorrectly be 0
			return {
				top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
			};
		},

		offsetParent: function() {
			return this.map(function() {
				var offsetParent = this.offsetParent || docElem;

				while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
					offsetParent = offsetParent.offsetParent;
				}
				return offsetParent || docElem;
			});
		}
	});

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = /Y/.test( prop );

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? (prop in win) ? win[ prop ] :
						win.document.documentElement[ method ] :
						elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : jQuery( win ).scrollLeft(),
						top ? val : jQuery( win ).scrollTop()
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length, null );
		};
	});

	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// getComputedStyle returns percent when specified for top/left/bottom/right
	// rather than make the css module depend on the offset module, we just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
					// if curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	});


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
			// margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
						// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		});
	});


	// The number of elements contained in the matched element set
	jQuery.fn.size = function() {
		return this.length;
	};

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}




	var
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in
	// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( typeof noGlobal === strundefined ) {
		window.jQuery = window.$ = jQuery;
	}




	return jQuery;

	}));


/***/ },
/* 2 */
/***/ function(module, exports) {

	/*!
	 * Bootstrap v3.3.1 (http://getbootstrap.com)
	 * Copyright 2011-2014 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 */
	if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.1",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.1",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.1",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c="prev"==a?-1:1,d=this.getItemIndex(b),e=(d+c)%this.$items.length;return this.$items.eq(e)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i="next"==b?"first":"last",j=this;if(!f.length){if(!this.options.wrap)return;f=this.$element.find(".item")[i]()}if(f.hasClass("active"))return this.sliding=!1;var k=f[0],l=a.Event("slide.bs.carousel",{relatedTarget:k,direction:h});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var m=a(this.$indicators.children()[this.getItemIndex(f)]);m&&m.addClass("active")}var n=a.Event("slid.bs.carousel",{relatedTarget:k,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),j.sliding=!1,setTimeout(function(){j.$element.trigger(n)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(n)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a(this.options.trigger).filter('[href="#'+b.id+'"], [data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.1",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.find("> .panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":a.extend({},e.data(),{trigger:this});c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.1",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.1",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.options.backdrop&&d.adjustBackdrop(),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$element.find(".modal-dialog").one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},c.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.tooltip",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.1",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=this.tip(),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.popover",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.1",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.1",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.1",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})
	})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.1",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=i?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a("body").height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);

/***/ },
/* 3 */
/***/ function(module, exports) {

	/* jquery.nicescroll
	-- version 3.5.0 BETA5
	-- copyright 2011-12-13 InuYaksa*2013
	-- licensed under the MIT
	--
	-- http://areaaperta.com/nicescroll
	-- https://github.com/inuyaksa/jquery.nicescroll
	--
	*/

	(function(jQuery){

	  // globals
	  var domfocus = false;
	  var mousefocus = false;
	  var zoomactive = false;
	  var tabindexcounter = 5000;
	  var ascrailcounter = 2000;
	  var globalmaxzindex = 0;
	  
	  var $ = jQuery;  // sandbox
	 
	  // http://stackoverflow.com/questions/2161159/get-script-path
	  function getScriptPath() {
	    var scripts=document.getElementsByTagName('script');
	    var path=scripts[scripts.length-1].src.split('?')[0];
	    return (path.split('/').length>0) ? path.split('/').slice(0,-1).join('/')+'/' : '';
	  }
	  var scriptpath = getScriptPath();
	  
	  var vendors = ['ms','moz','webkit','o'];
	  
	  var setAnimationFrame = window.requestAnimationFrame||false;
	  var clearAnimationFrame = window.cancelAnimationFrame||false;

	  if (!setAnimationFrame) {
	    for(var vx in vendors) {
	      var v = vendors[vx];
	      if (!setAnimationFrame) setAnimationFrame = window[v+'RequestAnimationFrame'];
	      if (!clearAnimationFrame) clearAnimationFrame = window[v+'CancelAnimationFrame']||window[v+'CancelRequestAnimationFrame'];
	    }
	  }
	  
	  var clsMutationObserver = window.MutationObserver || window.WebKitMutationObserver || false;
	  
	  var _globaloptions = {
	      zindex:"auto",
	      cursoropacitymin:0,
	      cursoropacitymax:1,
	      cursorcolor:"#424242",
	      cursorwidth:"5px",
	      cursorborder:"1px solid #fff",
	      cursorborderradius:"5px",
	      scrollspeed:60,
	      mousescrollstep:8*3,
	      touchbehavior:false,
	      hwacceleration:true,
	      usetransition:true,
	      boxzoom:false,
	      dblclickzoom:true,
	      gesturezoom:true,
	      grabcursorenabled:true,
	      autohidemode:true,
	      background:"",
	      iframeautoresize:true,
	      cursorminheight:32,
	      preservenativescrolling:true,
	      railoffset:false,
	      bouncescroll:true,
	      spacebarenabled:true,
	      railpadding:{top:0,right:0,left:0,bottom:0},
	      disableoutline:true,
	      horizrailenabled:true,
	      railalign:"right",
	      railvalign:"bottom",
	      enabletranslate3d:true,
	      enablemousewheel:true,
	      enablekeyboard:true,
	      smoothscroll:true,
	      sensitiverail:true,
	      enablemouselockapi:true,
	//      cursormaxheight:false,
	      cursorfixedheight:false,      
	      directionlockdeadzone:6,
	      hidecursordelay:400,
	      nativeparentscrolling:true,
	      enablescrollonselection:true,
	      overflowx:true,
	      overflowy:true,
	      cursordragspeed:0.3,
	      rtlmode:false,
	      cursordragontouch:false,
	      oneaxismousemode:"auto"
	  }
	  
	  var browserdetected = false;
	  
	  var getBrowserDetection = function() {
	  
	    if (browserdetected) return browserdetected;
	  
	    var domtest = document.createElement('DIV');

	    var d = {};
	    
			d.haspointerlock = "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document;
			
	    d.isopera = ("opera" in window);
	    d.isopera12 = (d.isopera&&("getUserMedia" in navigator));
	    d.isoperamini = (Object.prototype.toString.call(window.operamini) === "[object OperaMini]");
	    
	    d.isie = (("all" in document) && ("attachEvent" in domtest) && !d.isopera);
	    d.isieold = (d.isie && !("msInterpolationMode" in domtest.style));  // IE6 and older
	    d.isie7 = d.isie&&!d.isieold&&(!("documentMode" in document)||(document.documentMode==7));
	    d.isie8 = d.isie&&("documentMode" in document)&&(document.documentMode==8);
	    d.isie9 = d.isie&&("performance" in window)&&(document.documentMode>=9);
	    d.isie10 = d.isie&&("performance" in window)&&(document.documentMode>=10);
	    
	    d.isie9mobile = /iemobile.9/i.test(navigator.userAgent);  //wp 7.1 mango
	    if (d.isie9mobile) d.isie9 = false;
	    d.isie7mobile = (!d.isie9mobile&&d.isie7) && /iemobile/i.test(navigator.userAgent);  //wp 7.0
	    
	    d.ismozilla = ("MozAppearance" in domtest.style);
			
	    d.iswebkit = ("WebkitAppearance" in domtest.style);
	    
	    d.ischrome = ("chrome" in window);
			d.ischrome22 = (d.ischrome&&d.haspointerlock);
	    d.ischrome26 = (d.ischrome&&("transition" in domtest.style));  // issue with transform detection (maintain prefix)
	    
	    d.cantouch = ("ontouchstart" in document.documentElement)||("ontouchstart" in window);  // detection for Chrome Touch Emulation
	    d.hasmstouch = (window.navigator.msPointerEnabled||false);  // IE10+ pointer events
			
	    d.ismac = /^mac$/i.test(navigator.platform);
	    
	    d.isios = (d.cantouch && /iphone|ipad|ipod/i.test(navigator.platform));
	    d.isios4 = ((d.isios)&&!("seal" in Object));
	    
	    d.isandroid = (/android/i.test(navigator.userAgent));
	    
	    d.trstyle = false;
	    d.hastransform = false;
	    d.hastranslate3d = false;
	    d.transitionstyle = false;
	    d.hastransition = false;
	    d.transitionend = false;
	    
	    var check = ['transform','msTransform','webkitTransform','MozTransform','OTransform'];
	    for(var a=0;a<check.length;a++){
	      if (typeof domtest.style[check[a]] != "undefined") {
	        d.trstyle = check[a];
	        break;
	      }
	    }
	    d.hastransform = (d.trstyle != false);
	    if (d.hastransform) {
	      domtest.style[d.trstyle] = "translate3d(1px,2px,3px)";
	      d.hastranslate3d = /translate3d/.test(domtest.style[d.trstyle]);
	    }
	    
	    d.transitionstyle = false;
	    d.prefixstyle = '';
	    d.transitionend = false;
	    var check = ['transition','webkitTransition','MozTransition','OTransition','OTransition','msTransition','KhtmlTransition'];
	    var prefix = ['','-webkit-','-moz-','-o-','-o','-ms-','-khtml-'];
	    var evs = ['transitionend','webkitTransitionEnd','transitionend','otransitionend','oTransitionEnd','msTransitionEnd','KhtmlTransitionEnd'];
	    for(var a=0;a<check.length;a++) {
	      if (check[a] in domtest.style) {
	        d.transitionstyle = check[a];
	        d.prefixstyle = prefix[a];
	        d.transitionend = evs[a];
	        break;
	      }
	    }
	    if (d.ischrome26) {  // use always prefix
	      d.prefixstyle = prefix[1];
	    }
	    
	    d.hastransition = (d.transitionstyle);
	    
	    function detectCursorGrab() {      
	      var lst = ['-moz-grab','-webkit-grab','grab'];
	      if ((d.ischrome&&!d.ischrome22)||d.isie) lst=[];  // force setting for IE returns false positive and chrome cursor bug
	      for(var a=0;a<lst.length;a++) {
	        var p = lst[a];
	        domtest.style['cursor']=p;
	        if (domtest.style['cursor']==p) return p;
	      }
	      return 'url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize';  // thank you google for custom cursor!
	    }
	    d.cursorgrabvalue = detectCursorGrab();

	    d.hasmousecapture = ("setCapture" in domtest);
	    
	    d.hasMutationObserver = (clsMutationObserver !== false);
	    
	    domtest = null;  //memory released

	    browserdetected = d;
	    
	    return d;  
	  }
	  
	  var NiceScrollClass = function(myopt,me) {

	    var self = this;

	    this.version = '3.5.0 BETA5';
	    this.name = 'nicescroll';
	    
	    this.me = me;
	    
	    this.opt = {
	      doc:$("body"),
	      win:false
	    };
	    
	    $.extend(this.opt,_globaloptions);
	    
	// Options for internal use
	    this.opt.snapbackspeed = 80;
	    
	    if (myopt||false) {
	      for(var a in self.opt) {
	        if (typeof myopt[a] != "undefined") self.opt[a] = myopt[a];
	      }
	    }
	    
	    this.doc = self.opt.doc;
	    this.iddoc = (this.doc&&this.doc[0])?this.doc[0].id||'':'';    
	    this.ispage = /BODY|HTML/.test((self.opt.win)?self.opt.win[0].nodeName:this.doc[0].nodeName);
	    this.haswrapper = (self.opt.win!==false);
	    this.win = self.opt.win||(this.ispage?$(window):this.doc);
	    this.docscroll = (this.ispage&&!this.haswrapper)?$(window):this.win;
	    this.body = $("body");
	    this.viewport = false;
	    
	    this.isfixed = false;
	    
	    this.iframe = false;
	    this.isiframe = ((this.doc[0].nodeName == 'IFRAME') && (this.win[0].nodeName == 'IFRAME'));
	    
	    this.istextarea = (this.win[0].nodeName == 'TEXTAREA');
	    
	    this.forcescreen = false; //force to use screen position on events

	    this.canshowonmouseevent = (self.opt.autohidemode!="scroll");
	    
	// Events jump table    
	    this.onmousedown = false;
	    this.onmouseup = false;
	    this.onmousemove = false;
	    this.onmousewheel = false;
	    this.onkeypress = false;
	    this.ongesturezoom = false;
	    this.onclick = false;
	    
	// Nicescroll custom events
	    this.onscrollstart = false;
	    this.onscrollend = false;
	    this.onscrollcancel = false;    
	    
	    this.onzoomin = false;
	    this.onzoomout = false;
	    
	// Let's start!  
	    this.view = false;
	    this.page = false;
	    
	    this.scroll = {x:0,y:0};
	    this.scrollratio = {x:0,y:0};    
	    this.cursorheight = 20;
	    this.scrollvaluemax = 0;
	    
	    this.checkrtlmode = false;
	    
	    this.scrollrunning = false;
	    
	    this.scrollmom = false;
	    
	    this.observer = false;
	    this.observerremover = false;  // observer on parent for remove detection
	    
	    do {
	      this.id = "ascrail"+(ascrailcounter++);
	    } while (document.getElementById(this.id));
	    
	    this.rail = false;
	    this.cursor = false;
	    this.cursorfreezed = false;  
	    this.selectiondrag = false;
	    
	    this.zoom = false;
	    this.zoomactive = false;
	    
	    this.hasfocus = false;
	    this.hasmousefocus = false;
	    
	    this.visibility = true;
	    this.locked = false;
	    this.hidden = false; // rails always hidden
	    this.cursoractive = true; // user can interact with cursors
	    
	    this.overflowx = self.opt.overflowx;
	    this.overflowy = self.opt.overflowy;
	    
	    this.nativescrollingarea = false;
	    this.checkarea = 0;
	    
	    this.events = [];  // event list for unbind
	    
	    this.saved = {};
	    
	    this.delaylist = {};
	    this.synclist = {};
	    
	    this.lastdeltax = 0;
	    this.lastdeltay = 0;
	    
	    this.detected = getBrowserDetection(); 
	    
	    var cap = $.extend({},this.detected);
	 
	    this.canhwscroll = (cap.hastransform&&self.opt.hwacceleration);
	    this.ishwscroll = (this.canhwscroll&&self.haswrapper);
	    
	    this.istouchcapable = false;  // desktop devices with touch screen support
	    
	//## Check Chrome desktop with touch support
	    if (cap.cantouch&&cap.ischrome&&!cap.isios&&!cap.isandroid) {
	      this.istouchcapable = true;
	      cap.cantouch = false;  // parse normal desktop events
	    }    

	//## Firefox 18 nightly build (desktop) false positive (or desktop with touch support)
	    if (cap.cantouch&&cap.ismozilla&&!cap.isios&&!cap.isandroid) {
	      this.istouchcapable = true;
	      cap.cantouch = false;  // parse normal desktop events
	    }    
	    
	//## disable MouseLock API on user request

	    if (!self.opt.enablemouselockapi) {
	      cap.hasmousecapture = false;
	      cap.haspointerlock = false;
	    }
	    
	    this.delayed = function(name,fn,tm,lazy) {
	      var dd = self.delaylist[name];
	      var nw = (new Date()).getTime();
	      if (!lazy&&dd&&dd.tt) return false;
	      if (dd&&dd.tt) clearTimeout(dd.tt);
	      if (dd&&dd.last+tm>nw&&!dd.tt) {      
	        self.delaylist[name] = {
	          last:nw+tm,
	          tt:setTimeout(function(){self.delaylist[name].tt=0;fn.call();},tm)
	        }
	      }
	      else if (!dd||!dd.tt) {
	        self.delaylist[name] = {
	          last:nw,
	          tt:0
	        }
	        setTimeout(function(){fn.call();},0);
	      }
	    };
	    
	    this.debounced = function(name,fn,tm) {
	      var dd = self.delaylist[name];
	      var nw = (new Date()).getTime();      
	      self.delaylist[name] = fn;
	      if (!dd) {        
	        setTimeout(function(){var fn=self.delaylist[name];self.delaylist[name]=false;fn.call();},tm);
	      }
	    }
	    
	    this.synched = function(name,fn) {
	    
	      function requestSync() {
	        if (self.onsync) return;
	        setAnimationFrame(function(){
	          self.onsync = false;
	          for(name in self.synclist){
	            var fn = self.synclist[name];
	            if (fn) fn.call(self);
	            self.synclist[name] = false;
	          }
	        });
	        self.onsync = true;
	      };    
	    
	      self.synclist[name] = fn;
	      requestSync();
	      return name;
	    };
	    
	    this.unsynched = function(name) {
	      if (self.synclist[name]) self.synclist[name] = false;
	    }
	    
	    this.css = function(el,pars) {  // save & set
	      for(var n in pars) {
	        self.saved.css.push([el,n,el.css(n)]);
	        el.css(n,pars[n]);
	      }
	    };
	    
	    this.scrollTop = function(val) {
	      return (typeof val == "undefined") ? self.getScrollTop() : self.setScrollTop(val);
	    };

	    this.scrollLeft = function(val) {
	      return (typeof val == "undefined") ? self.getScrollLeft() : self.setScrollLeft(val);
	    };
	    
	// derived by by Dan Pupius www.pupius.net
	    BezierClass = function(st,ed,spd,p1,p2,p3,p4) {
	      this.st = st;
	      this.ed = ed;
	      this.spd = spd;
	      
	      this.p1 = p1||0;
	      this.p2 = p2||1;
	      this.p3 = p3||0;
	      this.p4 = p4||1;
	      
	      this.ts = (new Date()).getTime();
	      this.df = this.ed-this.st;
	    };
	    BezierClass.prototype = {
	      B2:function(t){ return 3*t*t*(1-t) },
	      B3:function(t){ return 3*t*(1-t)*(1-t) },
	      B4:function(t){ return (1-t)*(1-t)*(1-t) },
	      getNow:function(){
	        var nw = (new Date()).getTime();
	        var pc = 1-((nw-this.ts)/this.spd);
	        var bz = this.B2(pc) + this.B3(pc) + this.B4(pc);
	        return (pc<0) ? this.ed : this.st+Math.round(this.df*bz);
	      },
	      update:function(ed,spd){
	        this.st = this.getNow();
	        this.ed = ed;
	        this.spd = spd;
	        this.ts = (new Date()).getTime();
	        this.df = this.ed-this.st;
	        return this;
	      }
	    };
	    
	    if (this.ishwscroll) {  
	    // hw accelerated scroll
	      this.doc.translate = {x:0,y:0,tx:"0px",ty:"0px"};
	      
	      //this one can help to enable hw accel on ios6 http://indiegamr.com/ios6-html-hardware-acceleration-changes-and-how-to-fix-them/
	      if (cap.hastranslate3d&&cap.isios) this.doc.css("-webkit-backface-visibility","hidden");  // prevent flickering http://stackoverflow.com/questions/3461441/      
	      
	      //derived from http://stackoverflow.com/questions/11236090/
	      function getMatrixValues() {
	        var tr = self.doc.css(cap.trstyle);
	        if (tr&&(tr.substr(0,6)=="matrix")) {
	          return tr.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g,'').split(/, +/);
	        }
	        return false;
	      }
	      
	      this.getScrollTop = function(last) {
	        if (!last) {
	          var mtx = getMatrixValues();
	          if (mtx) return (mtx.length==16) ? -mtx[13] : -mtx[5];  //matrix3d 16 on IE10
	          if (self.timerscroll&&self.timerscroll.bz) return self.timerscroll.bz.getNow();
	        }
	        return self.doc.translate.y;
	      };

	      this.getScrollLeft = function(last) {
	        if (!last) {
	          var mtx = getMatrixValues();          
	          if (mtx) return (mtx.length==16) ? -mtx[12] : -mtx[4];  //matrix3d 16 on IE10
	          if (self.timerscroll&&self.timerscroll.bh) return self.timerscroll.bh.getNow();
	        }
	        return self.doc.translate.x;
	      };
	      
	      if (document.createEvent) {
	        this.notifyScrollEvent = function(el) {
	          var e = document.createEvent("UIEvents");
	          e.initUIEvent("scroll", false, true, window, 1);
	          el.dispatchEvent(e);
	        };
	      }
	      else if (document.fireEvent) {
	        this.notifyScrollEvent = function(el) {
	          var e = document.createEventObject();
	          el.fireEvent("onscroll");
	          e.cancelBubble = true; 
	        };
	      }
	      else {
	        this.notifyScrollEvent = function(el,add) {}; //NOPE
	      }
	      
	      if (cap.hastranslate3d&&self.opt.enabletranslate3d) {
	        this.setScrollTop = function(val,silent) {
	          self.doc.translate.y = val;
	          self.doc.translate.ty = (val*-1)+"px";
	          self.doc.css(cap.trstyle,"translate3d("+self.doc.translate.tx+","+self.doc.translate.ty+",0px)");          
	          if (!silent) self.notifyScrollEvent(self.win[0]);
	        };
	        this.setScrollLeft = function(val,silent) {          
	          self.doc.translate.x = val;
	          self.doc.translate.tx = (val*-1)+"px";
	          self.doc.css(cap.trstyle,"translate3d("+self.doc.translate.tx+","+self.doc.translate.ty+",0px)");          
	          if (!silent) self.notifyScrollEvent(self.win[0]);
	        };
	      } else {
	        this.setScrollTop = function(val,silent) {
	          self.doc.translate.y = val;
	          self.doc.translate.ty = (val*-1)+"px";
	          self.doc.css(cap.trstyle,"translate("+self.doc.translate.tx+","+self.doc.translate.ty+")");
	          if (!silent) self.notifyScrollEvent(self.win[0]);          
	        };
	        this.setScrollLeft = function(val,silent) {        
	          self.doc.translate.x = val;
	          self.doc.translate.tx = (val*-1)+"px";
	          self.doc.css(cap.trstyle,"translate("+self.doc.translate.tx+","+self.doc.translate.ty+")");
	          if (!silent) self.notifyScrollEvent(self.win[0]);
	        };
	      }
	    } else {
	    // native scroll
	      this.getScrollTop = function() {
	        return self.docscroll.scrollTop();
	      };
	      this.setScrollTop = function(val) {        
	        return self.docscroll.scrollTop(val);
	      };
	      this.getScrollLeft = function() {
	        return self.docscroll.scrollLeft();
	      };
	      this.setScrollLeft = function(val) {
	        return self.docscroll.scrollLeft(val);
	      };
	    }
	    
	    this.getTarget = function(e) {
	      if (!e) return false;
	      if (e.target) return e.target;
	      if (e.srcElement) return e.srcElement;
	      return false;
	    };
	    
	    this.hasParent = function(e,id) {
	      if (!e) return false;
	      var el = e.target||e.srcElement||e||false;
	      while (el && el.id != id) {
	        el = el.parentNode||false;
	      }
	      return (el!==false);
	    };
	    
	    function getZIndex() {
	      var dom = self.win;
	      if ("zIndex" in dom) return dom.zIndex();  // use jQuery UI method when available
	      while (dom.length>0) {        
	        if (dom[0].nodeType==9) return false;
	        var zi = dom.css('zIndex');        
	        if (!isNaN(zi)&&zi!=0) return parseInt(zi);
	        dom = dom.parent();
	      }
	      return false;
	    };
	    
	//inspired by http://forum.jquery.com/topic/width-includes-border-width-when-set-to-thin-medium-thick-in-ie
	    var _convertBorderWidth = {"thin":1,"medium":3,"thick":5};
	    function getWidthToPixel(dom,prop,chkheight) {
	      var wd = dom.css(prop);
	      var px = parseFloat(wd);
	      if (isNaN(px)) {
	        px = _convertBorderWidth[wd]||0;
	        var brd = (px==3) ? ((chkheight)?(self.win.outerHeight() - self.win.innerHeight()):(self.win.outerWidth() - self.win.innerWidth())) : 1; //DON'T TRUST CSS
	        if (self.isie8&&px) px+=1;
	        return (brd) ? px : 0; 
	      }
	      return px;
	    };
	    
	    this.getOffset = function() {
	      if (self.isfixed) return {top:parseFloat(self.win.css('top')),left:parseFloat(self.win.css('left'))};
	      if (!self.viewport) return self.win.offset();
	      var ww = self.win.offset();
	      var vp = self.viewport.offset();
	      return {top:ww.top-vp.top+self.viewport.scrollTop(),left:ww.left-vp.left+self.viewport.scrollLeft()};
	    };
	    
	    this.updateScrollBar = function(len) {
	      if (self.ishwscroll) {
	        self.rail.css({height:self.win.innerHeight()});
	        if (self.railh) self.railh.css({width:self.win.innerWidth()});
	      } else {
	        var wpos = self.getOffset();
	        var pos = {top:wpos.top,left:wpos.left};
	        pos.top+= getWidthToPixel(self.win,'border-top-width',true);
	        var brd = (self.win.outerWidth() - self.win.innerWidth())/2;
	        pos.left+= (self.rail.align) ? self.win.outerWidth() - getWidthToPixel(self.win,'border-right-width') - self.rail.width : getWidthToPixel(self.win,'border-left-width');
	        
	        var off = self.opt.railoffset;
	        if (off) {
	          if (off.top) pos.top+=off.top;
	          if (self.rail.align&&off.left) pos.left+=off.left;
	        }
	        
					if (!self.locked) self.rail.css({top:pos.top,left:pos.left,height:(len)?len.h:self.win.innerHeight()});
					
					if (self.zoom) {				  
					  self.zoom.css({top:pos.top+1,left:(self.rail.align==1) ? pos.left-20 : pos.left+self.rail.width+4});
				  }
					
					if (self.railh&&!self.locked) {
						var pos = {top:wpos.top,left:wpos.left};
						var y = (self.railh.align) ? pos.top + getWidthToPixel(self.win,'border-top-width',true) + self.win.innerHeight() - self.railh.height : pos.top + getWidthToPixel(self.win,'border-top-width',true);
						var x = pos.left + getWidthToPixel(self.win,'border-left-width');
						self.railh.css({top:y,left:x,width:self.railh.width});
					}
			
					
	      }
	    };
	    
	    this.doRailClick = function(e,dbl,hr) {

	      var fn,pg,cur,pos;
	      
	//      if (self.rail.drag&&self.rail.drag.pt!=1) return;
	      if (self.locked) return;
	//      if (self.rail.drag) return;

	//      self.cancelScroll();       
	      
	      self.cancelEvent(e);
	      
	      if (dbl) {
	        fn = (hr) ? self.doScrollLeft : self.doScrollTop;
	        cur = (hr) ? ((e.pageX - self.railh.offset().left - (self.cursorwidth/2)) * self.scrollratio.x) : ((e.pageY - self.rail.offset().top - (self.cursorheight/2)) * self.scrollratio.y);
	        fn(cur);
	      } else {
	//        console.log(e.pageY);
	        fn = (hr) ? self.doScrollLeftBy : self.doScrollBy;
	        cur = (hr) ? self.scroll.x : self.scroll.y;
	        pos = (hr) ? e.pageX - self.railh.offset().left : e.pageY - self.rail.offset().top;
	        pg = (hr) ? self.view.w : self.view.h;        
	        (cur>=pos) ? fn(pg) : fn(-pg);
	      }
	    
	    }
	    
	    self.hasanimationframe = (setAnimationFrame);
	    self.hascancelanimationframe = (clearAnimationFrame);
	    
	    if (!self.hasanimationframe) {
	      setAnimationFrame=function(fn){return setTimeout(fn,15-Math.floor((+new Date)/1000)%16)}; // 1000/60)};
	      clearAnimationFrame=clearInterval;
	    } 
	    else if (!self.hascancelanimationframe) clearAnimationFrame=function(){self.cancelAnimationFrame=true};
	    
	    this.init = function() {

	      self.saved.css = [];
	      
	      if (cap.isie7mobile) return true; // SORRY, DO NOT WORK!
	      if (cap.isoperamini) return true; // SORRY, DO NOT WORK!
	      
	      if (cap.hasmstouch) self.css((self.ispage)?$("html"):self.win,{'-ms-touch-action':'none'});
	      
	      self.zindex = "auto";
	      if (!self.ispage&&self.opt.zindex=="auto") {
	        self.zindex = getZIndex()||"auto";
	      } else {
	        self.zindex = self.opt.zindex;
	      }
	      
	      if (!self.ispage&&self.zindex!="auto") {
	        if (self.zindex>globalmaxzindex) globalmaxzindex=self.zindex;
	      }
	      
	      if (self.isie&&self.zindex==0&&self.opt.zindex=="auto") {  // fix IE auto == 0
	        self.zindex="auto";
	      }
	      
	/*      
	      self.ispage = true;
	      self.haswrapper = true;
	//      self.win = $(window);
	      self.docscroll = $("body");
	//      self.doc = $("body");
	*/
	      
	      if (!self.ispage || (!cap.cantouch && !cap.isieold && !cap.isie9mobile)) {
	      
	        var cont = self.docscroll;
	        if (self.ispage) cont = (self.haswrapper)?self.win:self.doc;
	        
	        if (!cap.isie9mobile) self.css(cont,{'overflow-y':'hidden'});      
	        
	        if (self.ispage&&cap.isie7) {
	          if (self.doc[0].nodeName=='BODY') self.css($("html"),{'overflow-y':'hidden'});  //IE7 double scrollbar issue
	          else if (self.doc[0].nodeName=='HTML') self.css($("body"),{'overflow-y':'hidden'});  //IE7 double scrollbar issue
	        }
	        
	        if (cap.isios&&!self.ispage&&!self.haswrapper) self.css($("body"),{"-webkit-overflow-scrolling":"touch"});  //force hw acceleration
	        
	        var cursor = $(document.createElement('div'));
	        cursor.css({
	          position:"relative",top:0,"float":"right",width:self.opt.cursorwidth,height:"0px",
	          'background-color':self.opt.cursorcolor,
	          border:self.opt.cursorborder,
	          'background-clip':'padding-box',
	          '-webkit-border-radius':self.opt.cursorborderradius,
	          '-moz-border-radius':self.opt.cursorborderradius,
	          'border-radius':self.opt.cursorborderradius
	        });   
	        
	        cursor.hborder = parseFloat(cursor.outerHeight() - cursor.innerHeight());        
	        self.cursor = cursor;        
	        
	        var rail = $(document.createElement('div'));
	        rail.attr('id',self.id);
	        rail.addClass('nicescroll-rails');
	        
	        var v,a,kp = ["left","right"];  //"top","bottom"
	        for(var n in kp) {
	          a=kp[n];
	          v = self.opt.railpadding[a];
	          (v) ? rail.css("padding-"+a,v+"px") : self.opt.railpadding[a] = 0;
	        }
	        
	        rail.append(cursor);
	        
	        rail.width = Math.max(parseFloat(self.opt.cursorwidth),cursor.outerWidth()) + self.opt.railpadding['left'] + self.opt.railpadding['right'];
	        rail.css({width:rail.width+"px",'zIndex':self.zindex,"background":self.opt.background,cursor:"default"});        
	        
	        rail.visibility = true;
	        rail.scrollable = true;
	        
	        rail.align = (self.opt.railalign=="left") ? 0 : 1;
	        
	        self.rail = rail;
	        
	        self.rail.drag = false;
	        
	        var zoom = false;
	        if (self.opt.boxzoom&&!self.ispage&&!cap.isieold) {
	          zoom = document.createElement('div');          
	          self.bind(zoom,"click",self.doZoom);
	          self.zoom = $(zoom);
	          self.zoom.css({"cursor":"pointer",'z-index':self.zindex,'backgroundImage':'url('+scriptpath+'zoomico.png)','height':18,'width':18,'backgroundPosition':'0px 0px'});
	          if (self.opt.dblclickzoom) self.bind(self.win,"dblclick",self.doZoom);
	          if (cap.cantouch&&self.opt.gesturezoom) {
	            self.ongesturezoom = function(e) {
	              if (e.scale>1.5) self.doZoomIn(e);
	              if (e.scale<0.8) self.doZoomOut(e);
	              return self.cancelEvent(e);
	            };
	            self.bind(self.win,"gestureend",self.ongesturezoom);             
	          }
	        }
	        
	// init HORIZ

	        self.railh = false;

	        if (self.opt.horizrailenabled) {

	          self.css(cont,{'overflow-x':'hidden'});

	          var cursor = $(document.createElement('div'));
	          cursor.css({
	            position:"relative",top:0,height:self.opt.cursorwidth,width:"0px",
	            'background-color':self.opt.cursorcolor,
	            border:self.opt.cursorborder,
	            'background-clip':'padding-box',
	            '-webkit-border-radius':self.opt.cursorborderradius,
	            '-moz-border-radius':self.opt.cursorborderradius,
	            'border-radius':self.opt.cursorborderradius
	          });   
	          
	          cursor.wborder = parseFloat(cursor.outerWidth() - cursor.innerWidth());
	          self.cursorh = cursor;
	          
	          var railh = $(document.createElement('div'));
	          railh.attr('id',self.id+'-hr');
	          railh.addClass('nicescroll-rails');
	          railh.height = Math.max(parseFloat(self.opt.cursorwidth),cursor.outerHeight());
	          railh.css({height:railh.height+"px",'zIndex':self.zindex,"background":self.opt.background});
	          
	          railh.append(cursor);
	          
	          railh.visibility = true;
	          railh.scrollable = true;
	          
	          railh.align = (self.opt.railvalign=="top") ? 0 : 1;
	          
	          self.railh = railh;
	          
	          self.railh.drag = false;
	          
	        }
	        
	//        
	        
	        if (self.ispage) {
	          rail.css({position:"fixed",top:"0px",height:"100%"});
	          (rail.align) ? rail.css({right:"0px"}) : rail.css({left:"0px"});
	          self.body.append(rail);
	          if (self.railh) {
	            railh.css({position:"fixed",left:"0px",width:"100%"});
	            (railh.align) ? railh.css({bottom:"0px"}) : railh.css({top:"0px"});
	            self.body.append(railh);
	          }
	        } else {          
	          if (self.ishwscroll) {
	            if (self.win.css('position')=='static') self.css(self.win,{'position':'relative'});
	            var bd = (self.win[0].nodeName == 'HTML') ? self.body : self.win;
	            if (self.zoom) {
	              self.zoom.css({position:"absolute",top:1,right:0,"margin-right":rail.width+4});
	              bd.append(self.zoom);
	            }
	            rail.css({position:"absolute",top:0});
	            (rail.align) ? rail.css({right:0}) : rail.css({left:0});
	            bd.append(rail);
	            if (railh) {
	              railh.css({position:"absolute",left:0,bottom:0});
	              (railh.align) ? railh.css({bottom:0}) : railh.css({top:0});
	              bd.append(railh);
	            }
	          } else {
	            self.isfixed = (self.win.css("position")=="fixed");
	            var rlpos = (self.isfixed) ? "fixed" : "absolute";
	            
	            if (!self.isfixed) self.viewport = self.getViewport(self.win[0]);
	            if (self.viewport) {
	              self.body = self.viewport;              
	              if ((/relative|absolute/.test(self.viewport.css("position")))==false) self.css(self.viewport,{"position":"relative"});
	            }            
	            
	            rail.css({position:rlpos});
	            if (self.zoom) self.zoom.css({position:rlpos});
	            self.updateScrollBar();
	            self.body.append(rail);
	            if (self.zoom) self.body.append(self.zoom);
	            if (self.railh) {
	              railh.css({position:rlpos});
	              self.body.append(railh);           
	            }
	          }
	          
	          if (cap.isios) self.css(self.win,{'-webkit-tap-highlight-color':'rgba(0,0,0,0)','-webkit-touch-callout':'none'});  // prevent grey layer on click
	          
						if (cap.isie&&self.opt.disableoutline) self.win.attr("hideFocus","true");  // IE, prevent dotted rectangle on focused div
						if (cap.iswebkit&&self.opt.disableoutline) self.win.css({"outline":"none"});
	//          if (cap.isopera&&self.opt.disableoutline) self.win.css({"outline":"0"});  // Opera to test [TODO]
	          
	        }
	        
	        if (self.opt.autohidemode===false) {
	          self.autohidedom = false;
	          self.rail.css({opacity:self.opt.cursoropacitymax});          
	          if (self.railh) self.railh.css({opacity:self.opt.cursoropacitymax});
	        }
	        else if (self.opt.autohidemode===true) {
	          self.autohidedom = $().add(self.rail);          
	          if (cap.isie8) self.autohidedom=self.autohidedom.add(self.cursor);
	          if (self.railh) self.autohidedom=self.autohidedom.add(self.railh);
	          if (self.railh&&cap.isie8) self.autohidedom=self.autohidedom.add(self.cursorh);
	        }
	        else if (self.opt.autohidemode=="scroll") {
	          self.autohidedom = $().add(self.rail);
	          if (self.railh) self.autohidedom=self.autohidedom.add(self.railh);
	        }
	        else if (self.opt.autohidemode=="cursor") {
	          self.autohidedom = $().add(self.cursor);
	          if (self.railh) self.autohidedom=self.autohidedom.add(self.cursorh);
	        }
	        else if (self.opt.autohidemode=="hidden") {
	          self.autohidedom = false;
	          self.hide();
	          self.locked = false;
	        }
	        
	        if (cap.isie9mobile) {

	          self.scrollmom = new ScrollMomentumClass2D(self);        

	          /*
	          var trace = function(msg) {
	            var db = $("#debug");
	            if (isNaN(msg)&&(typeof msg != "string")) {
	              var x = [];
	              for(var a in msg) {
	                x.push(a+":"+msg[a]);
	              }
	              msg ="{"+x.join(",")+"}";
	            }
	            if (db.children().length>0) {
	              db.children().eq(0).before("<div>"+msg+"</div>");
	            } else {
	              db.append("<div>"+msg+"</div>");
	            }
	          }
	          window.onerror = function(msg,url,ln) {
	            trace("ERR: "+msg+" at "+ln);
	          }
	*/          
	  
	          self.onmangotouch = function(e) {
	            var py = self.getScrollTop();
	            var px = self.getScrollLeft();
	            
	            if ((py == self.scrollmom.lastscrolly)&&(px == self.scrollmom.lastscrollx)) return true;
	//            $("#debug").html('DRAG:'+py);

	            var dfy = py-self.mangotouch.sy;
	            var dfx = px-self.mangotouch.sx;            
	            var df = Math.round(Math.sqrt(Math.pow(dfx,2)+Math.pow(dfy,2)));            
	            if (df==0) return;
	            
	            var dry = (dfy<0)?-1:1;
	            var drx = (dfx<0)?-1:1;
	            
	            var tm = +new Date();
	            if (self.mangotouch.lazy) clearTimeout(self.mangotouch.lazy);
	            
	            if (((tm-self.mangotouch.tm)>80)||(self.mangotouch.dry!=dry)||(self.mangotouch.drx!=drx)) {
	//              trace('RESET+'+(tm-self.mangotouch.tm));
	              self.scrollmom.stop();
	              self.scrollmom.reset(px,py);
	              self.mangotouch.sy = py;
	              self.mangotouch.ly = py;
	              self.mangotouch.sx = px;
	              self.mangotouch.lx = px;
	              self.mangotouch.dry = dry;
	              self.mangotouch.drx = drx;
	              self.mangotouch.tm = tm;
	            } else {
	              
	              self.scrollmom.stop();
	              self.scrollmom.update(self.mangotouch.sx-dfx,self.mangotouch.sy-dfy);
	              var gap = tm - self.mangotouch.tm;              
	              self.mangotouch.tm = tm;
	              
	//              trace('MOVE:'+df+" - "+gap);
	              
	              var ds = Math.max(Math.abs(self.mangotouch.ly-py),Math.abs(self.mangotouch.lx-px));
	              self.mangotouch.ly = py;
	              self.mangotouch.lx = px;
	              
	              if (ds>2) {
	                self.mangotouch.lazy = setTimeout(function(){
	//                  trace('END:'+ds+'+'+gap);                  
	                  self.mangotouch.lazy = false;
	                  self.mangotouch.dry = 0;
	                  self.mangotouch.drx = 0;
	                  self.mangotouch.tm = 0;                  
	                  self.scrollmom.doMomentum(30);
	                },100);
	              }
	            }
	          }
	          
	          var top = self.getScrollTop();
	          var lef = self.getScrollLeft();
	          self.mangotouch = {sy:top,ly:top,dry:0,sx:lef,lx:lef,drx:0,lazy:false,tm:0};
	          
	          self.bind(self.docscroll,"scroll",self.onmangotouch);
	        
	        } else {
	        
	          if (cap.cantouch||self.istouchcapable||self.opt.touchbehavior||cap.hasmstouch) {
	          
	            self.scrollmom = new ScrollMomentumClass2D(self);
	          
	            self.ontouchstart = function(e) {
	              if (e.pointerType&&e.pointerType!=2) return false;
	              
	              if (!self.locked) {
	              
	                if (cap.hasmstouch) {
	                  var tg = (e.target) ? e.target : false;
	                  while (tg) {
	                    var nc = $(tg).getNiceScroll();
	                    if ((nc.length>0)&&(nc[0].me == self.me)) break;
	                    if (nc.length>0) return false;
	                    if ((tg.nodeName=='DIV')&&(tg.id==self.id)) break;
	                    tg = (tg.parentNode) ? tg.parentNode : false;
	                  }
	                }
	              
	                self.cancelScroll();
	                
	                var tg = self.getTarget(e);
	                
	                if (tg) {
	                  var skp = (/INPUT/i.test(tg.nodeName))&&(/range/i.test(tg.type));
	                  if (skp) return self.stopPropagation(e);
	                }
	                
	                if (!("clientX" in e) && ("changedTouches" in e)) {
	                  e.clientX = e.changedTouches[0].clientX;
	                  e.clientY = e.changedTouches[0].clientY;
	                }
	                
	                if (self.forcescreen) {
	                  var le = e;
	                  var e = {"original":(e.original)?e.original:e};
	                  e.clientX = le.screenX;
	                  e.clientY = le.screenY;    
	                }
	                
	                self.rail.drag = {x:e.clientX,y:e.clientY,sx:self.scroll.x,sy:self.scroll.y,st:self.getScrollTop(),sl:self.getScrollLeft(),pt:2,dl:false};
	                
	                if (self.ispage||!self.opt.directionlockdeadzone) {
	                  self.rail.drag.dl = "f";
	                } else {
	                
	                  var view = {
	                    w:$(window).width(),
	                    h:$(window).height()
	                  };
	                  
	                  var page = {
	                    w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),
	                    h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)
	                  }
	                  
	                  var maxh = Math.max(0,page.h - view.h);
	                  var maxw = Math.max(0,page.w - view.w);                
	                
	                  if (!self.rail.scrollable&&self.railh.scrollable) self.rail.drag.ck = (maxh>0) ? "v" : false;
	                  else if (self.rail.scrollable&&!self.railh.scrollable) self.rail.drag.ck = (maxw>0) ? "h" : false;
	                  else self.rail.drag.ck = false;
	                  if (!self.rail.drag.ck) self.rail.drag.dl = "f";
	                }
	                
	                if (self.opt.touchbehavior&&self.isiframe&&cap.isie) {
	                  var wp = self.win.position();
	                  self.rail.drag.x+=wp.left;
	                  self.rail.drag.y+=wp.top;
	                }
	                
	                self.hasmoving = false;
	                self.lastmouseup = false;
	                self.scrollmom.reset(e.clientX,e.clientY);
	                if (!cap.cantouch&&!this.istouchcapable&&!cap.hasmstouch) {
	                  
	                  var ip = (tg)?/INPUT|SELECT|TEXTAREA/i.test(tg.nodeName):false;
	                  if (!ip) {
	                    if (!self.ispage&&cap.hasmousecapture) tg.setCapture();                   
	//                  return self.cancelEvent(e);
	                    return (self.opt.touchbehavior) ? self.cancelEvent(e) : self.stopPropagation(e);
	                  }
	                  if (/SUBMIT|CANCEL|BUTTON/i.test($(tg).attr('type'))) {
	                    pc = {"tg":tg,"click":false};
	                    self.preventclick = pc;
	                  }
	                  
	                }
	              }
	              
	            };
	            
	            self.ontouchend = function(e) {
	              if (e.pointerType&&e.pointerType!=2) return false;
	              if (self.rail.drag&&(self.rail.drag.pt==2)) {
	                self.scrollmom.doMomentum();
	                self.rail.drag = false;
	                if (self.hasmoving) {
	                  self.hasmoving = false;
	                  self.lastmouseup = true;
	                  self.hideCursor();
	                  if (cap.hasmousecapture) document.releaseCapture();
	                  if (!cap.cantouch) return self.cancelEvent(e);
	                }                            
	              }                        
	              
	            };
	            
	            var moveneedoffset = (self.opt.touchbehavior&&self.isiframe&&!cap.hasmousecapture);
	            
	            self.ontouchmove = function(e,byiframe) {
	              
	              if (e.pointerType&&e.pointerType!=2) return false;
	    
	              if (self.rail.drag&&(self.rail.drag.pt==2)) {
	                if (cap.cantouch&&(typeof e.original == "undefined")) return true;  // prevent ios "ghost" events by clickable elements
	              
	                self.hasmoving = true;

	                if (self.preventclick&&!self.preventclick.click) {
	                  self.preventclick.click = self.preventclick.tg.onclick||false;                
	                  self.preventclick.tg.onclick = self.onpreventclick;
	                }

	                var ev = $.extend({"original":e},e);
	                e = ev;
	                
	                if (("changedTouches" in e)) {
	                  e.clientX = e.changedTouches[0].clientX;
	                  e.clientY = e.changedTouches[0].clientY;
	                }                
	                
	                if (self.forcescreen) {
	                  var le = e;
	                  var e = {"original":(e.original)?e.original:e};
	                  e.clientX = le.screenX;
	                  e.clientY = le.screenY;      
	                }
	                
	                var ofx = ofy = 0;
	                
	                if (moveneedoffset&&!byiframe) {
	                  var wp = self.win.position();
	                  ofx=-wp.left;
	                  ofy=-wp.top;
	                }                
	                
	                var fy = e.clientY + ofy;
	                var my = (fy-self.rail.drag.y);
	                var fx = e.clientX + ofx;
	                var mx = (fx-self.rail.drag.x);
	                
	                var ny = self.rail.drag.st-my;
	                
	                if (self.ishwscroll&&self.opt.bouncescroll) {
	                  if (ny<0) {
	                    ny = Math.round(ny/2);
	//                    fy = 0;
	                  }
	                  else if (ny>self.page.maxh) {
	                    ny = self.page.maxh+Math.round((ny-self.page.maxh)/2);
	//                    fy = 0;
	                  }
	                } else {
	                  if (ny<0) {ny=0;fy=0}
	                  if (ny>self.page.maxh) {ny=self.page.maxh;fy=0}
	                }
	                  
	                if (self.railh&&self.railh.scrollable) {
	                  var nx = self.rail.drag.sl-mx;
	                  
	                  if (self.ishwscroll&&self.opt.bouncescroll) {                  
	                    if (nx<0) {
	                      nx = Math.round(nx/2);
	//                      fx = 0;
	                    }
	                    else if (nx>self.page.maxw) {
	                      nx = self.page.maxw+Math.round((nx-self.page.maxw)/2);
	//                      fx = 0;
	                    }
	                  } else {
	                    if (nx<0) {nx=0;fx=0}
	                    if (nx>self.page.maxw) {nx=self.page.maxw;fx=0}
	                  }
	                
	                }
	                
	                var grabbed = false;
	                if (self.rail.drag.dl) {
	                  grabbed = true;
	                  if (self.rail.drag.dl=="v") nx = self.rail.drag.sl;
	                  else if (self.rail.drag.dl=="h") ny = self.rail.drag.st;                  
	                } else {
	                  var ay = Math.abs(my);
	                  var ax = Math.abs(mx);
	                  var dz = self.opt.directionlockdeadzone;
	                  if (self.rail.drag.ck=="v") {    
	                    if (ay>dz&&(ax<=(ay*0.3))) {
	                      self.rail.drag = false;                      
	                      return true;
	                    }
	                    else if (ax>dz) {
	                      self.rail.drag.dl="f";                      
	                      $("body").scrollTop($("body").scrollTop());  // stop iOS native scrolling (when active javascript has blocked)
	                    }
	                  }
	                  else if (self.rail.drag.ck=="h") {
	                    if (ax>dz&&(ay<=(ax*0.3))) {
	                      self.rail.drag = false;                      
	                      return true;
	                    }
	                    else if (ay>dz) {                      
	                      self.rail.drag.dl="f";
	                      $("body").scrollLeft($("body").scrollLeft());  // stop iOS native scrolling (when active javascript has blocked)
	                    }
	                  }  
	                }
	                
	                self.synched("touchmove",function(){
	                  if (self.rail.drag&&(self.rail.drag.pt==2)) {
	                    if (self.prepareTransition) self.prepareTransition(0);
	                    if (self.rail.scrollable) self.setScrollTop(ny);
	                    self.scrollmom.update(fx,fy);
	                    if (self.railh&&self.railh.scrollable) {
	                      self.setScrollLeft(nx);
	                      self.showCursor(ny,nx);
	                    } else {
	                      self.showCursor(ny);
	                    }
	                    if (cap.isie10) document.selection.clear();
	                  }
	                });
	                
	                if (cap.ischrome&&self.istouchcapable) grabbed=false;  //chrome touch emulation doesn't like!
	                if (grabbed) return self.cancelEvent(e);
	              }
	              
	            };
	          
	          }
	          
	          self.onmousedown = function(e,hronly) {    
	            if (self.rail.drag&&self.rail.drag.pt!=1) return;
	            if (self.locked) return self.cancelEvent(e);            
	            self.cancelScroll();              
	            self.rail.drag = {x:e.clientX,y:e.clientY,sx:self.scroll.x,sy:self.scroll.y,pt:1,hr:(!!hronly)};
	            var tg = self.getTarget(e);
	            if (!self.ispage&&cap.hasmousecapture) tg.setCapture();
	            if (self.isiframe&&!cap.hasmousecapture) {
	              self.saved["csspointerevents"] = self.doc.css("pointer-events");
	              self.css(self.doc,{"pointer-events":"none"});
	            }
	            return self.cancelEvent(e);
	          };
	          
	          self.onmouseup = function(e) {
	            if (self.rail.drag) {
	              if (cap.hasmousecapture) document.releaseCapture();
	              if (self.isiframe&&!cap.hasmousecapture) self.doc.css("pointer-events",self.saved["csspointerevents"]);
	              if(self.rail.drag.pt!=1)return;
	              self.rail.drag = false;
	              //if (!self.rail.active) self.hideCursor();
	              return self.cancelEvent(e);
	            }
	          };        
	          
	          self.onmousemove = function(e) {
	            if (self.rail.drag) {
	              if(self.rail.drag.pt!=1)return;
	              
	              if (cap.ischrome&&e.which==0) return self.onmouseup(e);
	              
	              self.cursorfreezed = true;
	                  
	              if (self.rail.drag.hr) {
	                self.scroll.x = self.rail.drag.sx + (e.clientX-self.rail.drag.x);
	                if (self.scroll.x<0) self.scroll.x=0;
	                var mw = self.scrollvaluemaxw;
	                if (self.scroll.x>mw) self.scroll.x=mw;
	              } else {                
	                self.scroll.y = self.rail.drag.sy + (e.clientY-self.rail.drag.y);
	                if (self.scroll.y<0) self.scroll.y=0;
	                var my = self.scrollvaluemax;
	                if (self.scroll.y>my) self.scroll.y=my;
	              }
	              
	              self.synched('mousemove',function(){
	                if (self.rail.drag&&(self.rail.drag.pt==1)) {
	                  self.showCursor();
	                  if (self.rail.drag.hr) self.doScrollLeft(Math.round(self.scroll.x*self.scrollratio.x),self.opt.cursordragspeed);
	                  else self.doScrollTop(Math.round(self.scroll.y*self.scrollratio.y),self.opt.cursordragspeed);
	                }
	              });
	              
	              return self.cancelEvent(e);
	            } 
	/*              
	            else {
	              self.checkarea = true;
	            }
	*/              
	          };          
	         
	          if (cap.cantouch||self.opt.touchbehavior) {
	          
	            self.onpreventclick = function(e) {
	              if (self.preventclick) {
	                self.preventclick.tg.onclick = self.preventclick.click;
	                self.preventclick = false;            
	                return self.cancelEvent(e);
	              }
	            }
	          
	//            self.onmousedown = self.ontouchstart;            
	//            self.onmouseup = self.ontouchend;
	//            self.onmousemove = self.ontouchmove;

	            self.bind(self.win,"mousedown",self.ontouchstart);  // control content dragging

	            self.onclick = (cap.isios) ? false : function(e) { 
	              if (self.lastmouseup) {
	                self.lastmouseup = false;
	                return self.cancelEvent(e);
	              } else {
	                return true;
	              }
	            }; 
	            
	            if (self.opt.grabcursorenabled&&cap.cursorgrabvalue) {
	              self.css((self.ispage)?self.doc:self.win,{'cursor':cap.cursorgrabvalue});            
	              self.css(self.rail,{'cursor':cap.cursorgrabvalue});
	            }
	            
	          } else {

	            function checkSelectionScroll(e) {
	              if (!self.selectiondrag) return;
	              
	              if (e) {
	                var ww = self.win.outerHeight();
	                var df = (e.pageY - self.selectiondrag.top);
	                if (df>0&&df<ww) df=0;
	                if (df>=ww) df-=ww;
	                self.selectiondrag.df = df;                
	              }
	              if (self.selectiondrag.df==0) return;
	              
	              var rt = -Math.floor(self.selectiondrag.df/6)*2;              
	//              self.doScrollTop(self.getScrollTop(true)+rt);
	              self.doScrollBy(rt);
	              
	              self.debounced("doselectionscroll",function(){checkSelectionScroll()},50);
	            }
	            
	            if ("getSelection" in document) {  // A grade - Major browsers
	              self.hasTextSelected = function() {  
	                return (document.getSelection().rangeCount>0);
	              }
	            } 
	            else if ("selection" in document) {  //IE9-
	              self.hasTextSelected = function() {
	                return (document.selection.type != "None");
	              }
	            } 
	            else {
	              self.hasTextSelected = function() {  // no support
	                return false;
	              }
	            }            
	            
	            self.onselectionstart = function(e) {
	              if (self.ispage) return;
	              self.selectiondrag = self.win.offset();
	            }
	            self.onselectionend = function(e) {
	              self.selectiondrag = false;
	            }
	            self.onselectiondrag = function(e) {              
	              if (!self.selectiondrag) return;
	              if (self.hasTextSelected()) self.debounced("selectionscroll",function(){checkSelectionScroll(e)},250);
	            }
	            
	            
	          }
	          
	          if (cap.hasmstouch) {
	            self.css(self.rail,{'-ms-touch-action':'none'});
	            self.css(self.cursor,{'-ms-touch-action':'none'});
	            
	            self.bind(self.win,"MSPointerDown",self.ontouchstart);
	            self.bind(document,"MSPointerUp",self.ontouchend);
	            self.bind(document,"MSPointerMove",self.ontouchmove);
	            self.bind(self.cursor,"MSGestureHold",function(e){e.preventDefault()});
	            self.bind(self.cursor,"contextmenu",function(e){e.preventDefault()});
	          }

	          if (this.istouchcapable) {  //desktop with screen touch enabled
	            self.bind(self.win,"touchstart",self.ontouchstart);
	            self.bind(document,"touchend",self.ontouchend);
	            self.bind(document,"touchcancel",self.ontouchend);
	            self.bind(document,"touchmove",self.ontouchmove);            
	          }
	          
	          self.bind(self.cursor,"mousedown",self.onmousedown);
	          self.bind(self.cursor,"mouseup",self.onmouseup);

	          if (self.railh) {
	            self.bind(self.cursorh,"mousedown",function(e){self.onmousedown(e,true)});
	            self.bind(self.cursorh,"mouseup",function(e){
	              if (self.rail.drag&&self.rail.drag.pt==2) return;
	              self.rail.drag = false;
	              self.hasmoving = false;
	              self.hideCursor();
	              if (cap.hasmousecapture) document.releaseCapture();
	              return self.cancelEvent(e);
	            });
	          }
			
	          if (self.opt.cursordragontouch||!cap.cantouch&&!self.opt.touchbehavior) {

	            self.rail.css({"cursor":"default"});
	            self.railh&&self.railh.css({"cursor":"default"});          
	          
	            self.jqbind(self.rail,"mouseenter",function() {
	              if (self.canshowonmouseevent) self.showCursor();
	              self.rail.active = true;
	            });
	            self.jqbind(self.rail,"mouseleave",function() { 
	              self.rail.active = false;
	              if (!self.rail.drag) self.hideCursor();
	            });
	            
	            if (self.opt.sensitiverail) {
	              self.bind(self.rail,"click",function(e){self.doRailClick(e,false,false)});
	              self.bind(self.rail,"dblclick",function(e){self.doRailClick(e,true,false)});
	              self.bind(self.cursor,"click",function(e){self.cancelEvent(e)});
	              self.bind(self.cursor,"dblclick",function(e){self.cancelEvent(e)});
	            }

	            if (self.railh) {
	              self.jqbind(self.railh,"mouseenter",function() {
	                if (self.canshowonmouseevent) self.showCursor();
	                self.rail.active = true;
	              });          
	              self.jqbind(self.railh,"mouseleave",function() { 
	                self.rail.active = false;
	                if (!self.rail.drag) self.hideCursor();
	              });
	              
	              if (self.opt.sensitiverail) {
	                self.bind(self.railh, "click", function(e){self.doRailClick(e,false,true)});
	                self.bind(self.railh, "dblclick", function(e){self.doRailClick(e, true, true) });
	                self.bind(self.cursorh, "click", function (e) { self.cancelEvent(e) });
	                self.bind(self.cursorh, "dblclick", function (e) { self.cancelEvent(e) });
	              }
	              
	            }
	          
	          }
	    
	          if (!cap.cantouch&&!self.opt.touchbehavior) {

	            self.bind((cap.hasmousecapture)?self.win:document,"mouseup",self.onmouseup);            
	            self.bind(document,"mousemove",self.onmousemove);
	            if (self.onclick) self.bind(document,"click",self.onclick);
	            
	            if (!self.ispage&&self.opt.enablescrollonselection) {
	              self.bind(self.win[0],"mousedown",self.onselectionstart);
	              self.bind(document,"mouseup",self.onselectionend);
	              self.bind(self.cursor,"mouseup",self.onselectionend);
	              if (self.cursorh) self.bind(self.cursorh,"mouseup",self.onselectionend);
	              self.bind(document,"mousemove",self.onselectiondrag);
	            }

							if (self.zoom) {
								self.jqbind(self.zoom,"mouseenter",function() {
									if (self.canshowonmouseevent) self.showCursor();
									self.rail.active = true;
								});          
								self.jqbind(self.zoom,"mouseleave",function() { 
									self.rail.active = false;
									if (!self.rail.drag) self.hideCursor();
								});
							}

	          } else {
	            
	            self.bind((cap.hasmousecapture)?self.win:document,"mouseup",self.ontouchend);
	            self.bind(document,"mousemove",self.ontouchmove);
	            if (self.onclick) self.bind(document,"click",self.onclick);
	            
	            if (self.opt.cursordragontouch) {
	              self.bind(self.cursor,"mousedown",self.onmousedown);
	              self.bind(self.cursor,"mousemove",self.onmousemove);
	              self.cursorh&&self.bind(self.cursorh,"mousedown",self.onmousedown);
	              self.cursorh&&self.bind(self.cursorh,"mousemove",self.onmousemove);
	            }
	          
	          }
							
						if (self.opt.enablemousewheel) {
							if (!self.isiframe) self.bind((cap.isie&&self.ispage) ? document : self.win /*self.docscroll*/ ,"mousewheel",self.onmousewheel);
							self.bind(self.rail,"mousewheel",self.onmousewheel);
							if (self.railh) self.bind(self.railh,"mousewheel",self.onmousewheelhr);
						}						
							
	          if (!self.ispage&&!cap.cantouch&&!(/HTML|BODY/.test(self.win[0].nodeName))) {
	            if (!self.win.attr("tabindex")) self.win.attr({"tabindex":tabindexcounter++});
	            
	            self.jqbind(self.win,"focus",function(e) {
	              domfocus = (self.getTarget(e)).id||true;
	              self.hasfocus = true;
	              if (self.canshowonmouseevent) self.noticeCursor();
	            });
	            self.jqbind(self.win,"blur",function(e) {
	              domfocus = false;
	              self.hasfocus = false;
	            });
	            
	            self.jqbind(self.win,"mouseenter",function(e) {
	              mousefocus = (self.getTarget(e)).id||true;
	              self.hasmousefocus = true;
	              if (self.canshowonmouseevent) self.noticeCursor();
	            });
	            self.jqbind(self.win,"mouseleave",function() {
	              mousefocus = false;
	              self.hasmousefocus = false;
	            });
	            
	          };
	          
	        }  // !ie9mobile
	        
	        //Thanks to http://www.quirksmode.org !!
	        self.onkeypress = function(e) {
	          if (self.locked&&self.page.maxh==0) return true;
	          
	          e = (e) ? e : window.e;
	          var tg = self.getTarget(e);
	          if (tg&&/INPUT|TEXTAREA|SELECT|OPTION/.test(tg.nodeName)) {
	            var tp = tg.getAttribute('type')||tg.type||false;            
	            if ((!tp)||!(/submit|button|cancel/i.tp)) return true;
	          }
	          
	          if (self.hasfocus||(self.hasmousefocus&&!domfocus)||(self.ispage&&!domfocus&&!mousefocus)) {
	            var key = e.keyCode;
	            
	            if (self.locked&&key!=27) return self.cancelEvent(e);

	            var ctrl = e.ctrlKey||false;
	            var shift = e.shiftKey || false;
	            
	            var ret = false;
	            switch (key) {
	              case 38:
	              case 63233: //safari
	                self.doScrollBy(24*3);
	                ret = true;
	                break;
	              case 40:
	              case 63235: //safari
	                self.doScrollBy(-24*3);
	                ret = true;
	                break;
	              case 37:
	              case 63232: //safari
	                if (self.railh) {
	                  (ctrl) ? self.doScrollLeft(0) : self.doScrollLeftBy(24*3);
	                  ret = true;
	                }
	                break;
	              case 39:
	              case 63234: //safari
	                if (self.railh) {
	                  (ctrl) ? self.doScrollLeft(self.page.maxw) : self.doScrollLeftBy(-24*3);
	                  ret = true;
	                }
	                break;
	              case 33:
	              case 63276: // safari
	                self.doScrollBy(self.view.h);
	                ret = true;
	                break;
	              case 34:
	              case 63277: // safari
	                self.doScrollBy(-self.view.h);
	                ret = true;
	                break;
	              case 36:
	              case 63273: // safari                
	                (self.railh&&ctrl) ? self.doScrollPos(0,0) : self.doScrollTo(0);
	                ret = true;
	                break;
	              case 35:
	              case 63275: // safari
	                (self.railh&&ctrl) ? self.doScrollPos(self.page.maxw,self.page.maxh) : self.doScrollTo(self.page.maxh);
	                ret = true;
	                break;
	              case 32:
	                if (self.opt.spacebarenabled) {
	                  (shift) ? self.doScrollBy(self.view.h) : self.doScrollBy(-self.view.h);
	                  ret = true;
	                }
	                break;
	              case 27: // ESC
	                if (self.zoomactive) {
	                  self.doZoom();
	                  ret = true;
	                }
	                break;
	            }
	            if (ret) return self.cancelEvent(e);
	          }
	        };
	        
	        if (self.opt.enablekeyboard) self.bind(document,(cap.isopera&&!cap.isopera12)?"keypress":"keydown",self.onkeypress);
	        
	        self.bind(window,'resize',self.lazyResize);
	        self.bind(window,'orientationchange',self.lazyResize);
	        
	        self.bind(window,"load",self.lazyResize);
			
	        if (cap.ischrome&&!self.ispage&&!self.haswrapper) { //chrome void scrollbar bug - it persists in version 26
	          var tmp=self.win.attr("style");
						var ww = parseFloat(self.win.css("width"))+1;
	          self.win.css('width',ww);
	          self.synched("chromefix",function(){self.win.attr("style",tmp)});
	        }
	        
	        
	// Trying a cross-browser implementation - good luck!

	        self.onAttributeChange = function(e) {
	          self.lazyResize(250);
	        }
	        
	        if (!self.ispage&&!self.haswrapper) {
	          // redesigned MutationObserver for Chrome18+/Firefox14+/iOS6+ with support for: remove div, add/remove content
	          if (clsMutationObserver !== false) {
	            self.observer = new clsMutationObserver(function(mutations) {            
	              mutations.forEach(self.onAttributeChange);
	            });
	            self.observer.observe(self.win[0],{childList: true, characterData: false, attributes: true, subtree: false});
	            
	            self.observerremover = new clsMutationObserver(function(mutations) {
	               mutations.forEach(function(mo){
	                 if (mo.removedNodes.length>0) {
	                   for (var dd in mo.removedNodes) {
	                     if (mo.removedNodes[dd]==self.win[0]) return self.remove();
	                   }
	                 }
	               });
	            });
	            self.observerremover.observe(self.win[0].parentNode,{childList: true, characterData: false, attributes: false, subtree: false});
	            
	          } else {        
	            self.bind(self.win,(cap.isie&&!cap.isie9)?"propertychange":"DOMAttrModified",self.onAttributeChange);            
	            if (cap.isie9) self.win[0].attachEvent("onpropertychange",self.onAttributeChange); //IE9 DOMAttrModified bug
	            self.bind(self.win,"DOMNodeRemoved",function(e){
	              if (e.target==self.win[0]) self.remove();
	            });
	          }
	        }
	        
	//

	        if (!self.ispage&&self.opt.boxzoom) self.bind(window,"resize",self.resizeZoom);
	        if (self.istextarea) self.bind(self.win,"mouseup",self.lazyResize);
	        
	        self.checkrtlmode = true;
	        self.lazyResize(30);
	        
	      }
	      
	      if (this.doc[0].nodeName == 'IFRAME') {
	        function oniframeload(e) {
	          self.iframexd = false;
	          try {
	            var doc = 'contentDocument' in this ? this.contentDocument : this.contentWindow.document;
	            var a = doc.domain;            
	          } catch(e){self.iframexd = true;doc=false};
	          
	          if (self.iframexd) {
	            if ("console" in window) console.log('NiceScroll error: policy restriced iframe');
	            return true;  //cross-domain - I can't manage this        
	          }
	          
	          self.forcescreen = true;
	          
	          if (self.isiframe) {            
	            self.iframe = {
	              "doc":$(doc),
	              "html":self.doc.contents().find('html')[0],
	              "body":self.doc.contents().find('body')[0]
	            };
	            self.getContentSize = function(){
	              return {
	                w:Math.max(self.iframe.html.scrollWidth,self.iframe.body.scrollWidth),
	                h:Math.max(self.iframe.html.scrollHeight,self.iframe.body.scrollHeight)
	              }
	            }            
	            self.docscroll = $(self.iframe.body);//$(this.contentWindow);
	          }
	          
	          if (!cap.isios&&self.opt.iframeautoresize&&!self.isiframe) {
	            self.win.scrollTop(0); // reset position
	            self.doc.height("");  //reset height to fix browser bug
	            var hh=Math.max(doc.getElementsByTagName('html')[0].scrollHeight,doc.body.scrollHeight);
	            self.doc.height(hh);          
	          }
	          self.lazyResize(30);
	          
	          if (cap.isie7) self.css($(self.iframe.html),{'overflow-y':'hidden'});
	          //self.css($(doc.body),{'overflow-y':'hidden'});
	          self.css($(self.iframe.body),{'overflow-y':'hidden'});
	          
	          if (cap.isios&&self.haswrapper) {
	            self.css($(doc.body),{'-webkit-transform':'translate3d(0,0,0)'});  // avoid iFrame content clipping - thanks to http://blog.derraab.com/2012/04/02/avoid-iframe-content-clipping-with-css-transform-on-ios/
	            
	            console.log(1);
	            
	          }
	          
	          if ('contentWindow' in this) {
	            self.bind(this.contentWindow,"scroll",self.onscroll);  //IE8 & minor
	          } else {          
	            self.bind(doc,"scroll",self.onscroll);
	          }                    
	          
	          if (self.opt.enablemousewheel) {
	            self.bind(doc,"mousewheel",self.onmousewheel);
	          }
	          
	          if (self.opt.enablekeyboard) self.bind(doc,(cap.isopera)?"keypress":"keydown",self.onkeypress);
	          
	          if (cap.cantouch||self.opt.touchbehavior) {
	            self.bind(doc,"mousedown",self.ontouchstart);
	            self.bind(doc,"mousemove",function(e){self.ontouchmove(e,true)});
	            if (self.opt.grabcursorenabled&&cap.cursorgrabvalue) self.css($(doc.body),{'cursor':cap.cursorgrabvalue});
	          }
	          
	          self.bind(doc,"mouseup",self.ontouchend);
	          
	          if (self.zoom) {
	            if (self.opt.dblclickzoom) self.bind(doc,'dblclick',self.doZoom);
	            if (self.ongesturezoom) self.bind(doc,"gestureend",self.ongesturezoom);             
	          }
	        };
	        
	        if (this.doc[0].readyState&&this.doc[0].readyState=="complete"){
	          setTimeout(function(){oniframeload.call(self.doc[0],false)},500);
	        }
	        self.bind(this.doc,"load",oniframeload);
	        
	      }
	      
	    };
	    
	    this.showCursor = function(py,px) {
	      if (self.cursortimeout) {
	        clearTimeout(self.cursortimeout);
	        self.cursortimeout = 0;
	      }
	      if (!self.rail) return;
	      if (self.autohidedom) {
	        self.autohidedom.stop().css({opacity:self.opt.cursoropacitymax});
	        self.cursoractive = true;
	      }
	      
	      if (!self.rail.drag||self.rail.drag.pt!=1) {      
	        if ((typeof py != "undefined")&&(py!==false)) {
	          self.scroll.y = Math.round(py * 1/self.scrollratio.y);
	        }
	        if (typeof px != "undefined") {
	          self.scroll.x = Math.round(px * 1/self.scrollratio.x);
	        }
	      }
	      
	      self.cursor.css({height:self.cursorheight,top:self.scroll.y}); 
	      if (self.cursorh) {
	        (!self.rail.align&&self.rail.visibility) ? self.cursorh.css({width:self.cursorwidth,left:self.scroll.x+self.rail.width}) : self.cursorh.css({width:self.cursorwidth,left:self.scroll.x});
	        self.cursoractive = true;
	      }
	      
	      if (self.zoom) self.zoom.stop().css({opacity:self.opt.cursoropacitymax});      
	    };
	    
	    this.hideCursor = function(tm) {
	      if (self.cursortimeout) return;
	      if (!self.rail) return;
	      if (!self.autohidedom) return;
	      self.cursortimeout = setTimeout(function() {
	         if (!self.rail.active||!self.showonmouseevent) {
	           self.autohidedom.stop().animate({opacity:self.opt.cursoropacitymin});
	           if (self.zoom) self.zoom.stop().animate({opacity:self.opt.cursoropacitymin});
	           self.cursoractive = false;
	         }
	         self.cursortimeout = 0;
	      },tm||self.opt.hidecursordelay);
	    };
	    
	    this.noticeCursor = function(tm,py,px) {
	      self.showCursor(py,px);
	      if (!self.rail.active) self.hideCursor(tm);
	    };
	        
	    this.getContentSize = 
	      (self.ispage) ?
	        function(){
	          return {
	            w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),
	            h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)
	          }
	        }
	      : (self.haswrapper) ?
	        function(){
	          return {
	            w:self.doc.outerWidth()+parseInt(self.win.css('paddingLeft'))+parseInt(self.win.css('paddingRight')),
	            h:self.doc.outerHeight()+parseInt(self.win.css('paddingTop'))+parseInt(self.win.css('paddingBottom'))
	          }
	        }
	      : function() {        
	        return {
	          w:self.docscroll[0].scrollWidth,
	          h:self.docscroll[0].scrollHeight
	        }
	      };
	  
	    this.onResize = function(e,page) {
	    
		  if (!self.win) return false;
		
	      if (!self.haswrapper&&!self.ispage) {
	        if (self.win.css('display')=='none') {
	          if (self.visibility) self.hideRail().hideRailHr();
	          return false;
	        } else {          
	          if (!self.hidden&&!self.visibility) self.showRail().showRailHr();
	        }        
	      }
	    
	      var premaxh = self.page.maxh;
	      var premaxw = self.page.maxw;

	      var preview = {h:self.view.h,w:self.view.w};   
	      
	      self.view = {
	        w:(self.ispage) ? self.win.width() : parseInt(self.win[0].clientWidth),
	        h:(self.ispage) ? self.win.height() : parseInt(self.win[0].clientHeight)
	      };
	      
	      self.page = (page) ? page : self.getContentSize();
	      
	      self.page.maxh = Math.max(0,self.page.h - self.view.h);
	      self.page.maxw = Math.max(0,self.page.w - self.view.w);
	      
	      if ((self.page.maxh==premaxh)&&(self.page.maxw==premaxw)&&(self.view.w==preview.w)) {
	        // test position        
	        if (!self.ispage) {
	          var pos = self.win.offset();
	          if (self.lastposition) {
	            var lst = self.lastposition;
	            if ((lst.top==pos.top)&&(lst.left==pos.left)) return self; //nothing to do            
	          }
	          self.lastposition = pos;
	        } else {
	          return self; //nothing to do
	        }
	      }
	      
	      if (self.page.maxh==0) {
	        self.hideRail();        
	        self.scrollvaluemax = 0;
	        self.scroll.y = 0;
	        self.scrollratio.y = 0;
	        self.cursorheight = 0;
	        self.setScrollTop(0);
	        self.rail.scrollable = false;
	      } else {       
	        self.rail.scrollable = true;
	      }
	      
	      if (self.page.maxw==0) {
	        self.hideRailHr();
	        self.scrollvaluemaxw = 0;
	        self.scroll.x = 0;
	        self.scrollratio.x = 0;
	        self.cursorwidth = 0;
	        self.setScrollLeft(0);
	        self.railh.scrollable = false;
	      } else {        
	        self.railh.scrollable = true;
	      }
	  
	      self.locked = (self.page.maxh==0)&&(self.page.maxw==0);
	      if (self.locked) {
					if (!self.ispage) self.updateScrollBar(self.view);
				  return false;
			  }

	      if (!self.hidden&&!self.visibility) {
	        self.showRail().showRailHr();
	      }      
	      else if (!self.hidden&&!self.railh.visibility) self.showRailHr();
	      
	      if (self.istextarea&&self.win.css('resize')&&self.win.css('resize')!='none') self.view.h-=20;      

	      self.cursorheight = Math.min(self.view.h,Math.round(self.view.h * (self.view.h / self.page.h)));
	      self.cursorheight = (self.opt.cursorfixedheight) ? self.opt.cursorfixedheight : Math.max(self.opt.cursorminheight,self.cursorheight);

	      self.cursorwidth = Math.min(self.view.w,Math.round(self.view.w * (self.view.w / self.page.w)));
	      self.cursorwidth = (self.opt.cursorfixedheight) ? self.opt.cursorfixedheight : Math.max(self.opt.cursorminheight,self.cursorwidth);
	      
	      self.scrollvaluemax = self.view.h-self.cursorheight-self.cursor.hborder;
	      
	      if (self.railh) {
	        self.railh.width = (self.page.maxh>0) ? (self.view.w-self.rail.width) : self.view.w;
	        self.scrollvaluemaxw = self.railh.width-self.cursorwidth-self.cursorh.wborder;
	      }
	      
	      if (self.checkrtlmode&&self.railh) {
	        self.checkrtlmode = false;
	        if (self.opt.rtlmode&&self.scroll.x==0) self.setScrollLeft(self.page.maxw);
	      }
	      
	      if (!self.ispage) self.updateScrollBar(self.view);
	      
	      self.scrollratio = {
	        x:(self.page.maxw/self.scrollvaluemaxw),
	        y:(self.page.maxh/self.scrollvaluemax)
	      };
	     
	      var sy = self.getScrollTop();
	      if (sy>self.page.maxh) {
	        self.doScrollTop(self.page.maxh);
	      } else {     
	        self.scroll.y = Math.round(self.getScrollTop() * (1/self.scrollratio.y));
	        self.scroll.x = Math.round(self.getScrollLeft() * (1/self.scrollratio.x));
	        if (self.cursoractive) self.noticeCursor();     
	      }      
	      
	      if (self.scroll.y&&(self.getScrollTop()==0)) self.doScrollTo(Math.floor(self.scroll.y*self.scrollratio.y));
	      
	      return self;
	    };
	    
	    this.resize = self.onResize;
	    
	    this.lazyResize = function(tm) {   // event debounce
	      tm = (isNaN(tm)) ? 30 : tm;
	      self.delayed('resize',self.resize,tm);
	      return self;
	    }
	   
	// modified by MDN https://developer.mozilla.org/en-US/docs/DOM/Mozilla_event_reference/wheel
	    function _modernWheelEvent(dom,name,fn,bubble) {      
	      self._bind(dom,name,function(e){
	        var  e = (e) ? e : window.event;
	        var event = {
	          original: e,
	          target: e.target || e.srcElement,
	          type: "wheel",
	          deltaMode: e.type == "MozMousePixelScroll" ? 0 : 1,
	          deltaX: 0,
	          deltaZ: 0,
	          preventDefault: function() {
	            e.preventDefault ? e.preventDefault() : e.returnValue = false;
	            return false;
	          },
	          stopImmediatePropagation: function() {
	            (e.stopImmediatePropagation) ? e.stopImmediatePropagation() : e.cancelBubble = true;
	          }
	        };
	            
	        if (name=="mousewheel") {
	          event.deltaY = - 1/40 * e.wheelDelta;
	          e.wheelDeltaX && (event.deltaX = - 1/40 * e.wheelDeltaX);
	        } else {
	          event.deltaY = e.detail;
	        }

	        return fn.call(dom,event);      
	      },bubble);
	    };     
	   
	    this._bind = function(el,name,fn,bubble) {  // primitive bind
	      self.events.push({e:el,n:name,f:fn,b:bubble,q:false});
	      if (el.addEventListener) {
	        el.addEventListener(name,fn,bubble||false);
	      }
	      else if (el.attachEvent) {
	        el.attachEvent("on"+name,fn);
	      }
	      else {
	        el["on"+name] = fn;        
	      }        
	    };
	   
	    this.jqbind = function(dom,name,fn) {  // use jquery bind for non-native events (mouseenter/mouseleave)
	      self.events.push({e:dom,n:name,f:fn,q:true});
	      $(dom).bind(name,fn);
	    }
	   
	    this.bind = function(dom,name,fn,bubble) {  // touch-oriented & fixing jquery bind
	      var el = ("jquery" in dom) ? dom[0] : dom;
	      
	      if (name=='mousewheel') {
	        if ("onwheel" in self.win) {            
	          self._bind(el,"wheel",fn,bubble||false);
	        } else {            
	          var wname = (typeof document.onmousewheel != "undefined") ? "mousewheel" : "DOMMouseScroll";  // older IE/Firefox
	          _modernWheelEvent(el,wname,fn,bubble||false);
	          if (wname=="DOMMouseScroll") _modernWheelEvent(el,"MozMousePixelScroll",fn,bubble||false);  // Firefox legacy
	        }
	      } 
	      else if (el.addEventListener) {
	        if (cap.cantouch && /mouseup|mousedown|mousemove/.test(name)) {  // touch device support
	          var tt=(name=='mousedown')?'touchstart':(name=='mouseup')?'touchend':'touchmove';
	          self._bind(el,tt,function(e){
	            if (e.touches) {
	              if (e.touches.length<2) {var ev=(e.touches.length)?e.touches[0]:e;ev.original=e;fn.call(this,ev);}
	            } 
	            else if (e.changedTouches) {var ev=e.changedTouches[0];ev.original=e;fn.call(this,ev);}  //blackberry
	          },bubble||false);
	        }
	        self._bind(el,name,fn,bubble||false);
	        if (cap.cantouch && name=="mouseup") self._bind(el,"touchcancel",fn,bubble||false);
	      }
	      else {
	        self._bind(el,name,function(e) {
	          e = e||window.event||false;
	          if (e) {
	            if (e.srcElement) e.target=e.srcElement;
	          }
	          if (!("pageY" in e)) {
	            e.pageX = e.clientX + document.documentElement.scrollLeft;
	            e.pageY = e.clientY + document.documentElement.scrollTop; 
	          }
	          return ((fn.call(el,e)===false)||bubble===false) ? self.cancelEvent(e) : true;
	        });
	      } 
	    };
	    
	    this._unbind = function(el,name,fn,bub) {  // primitive unbind
	      if (el.removeEventListener) {
	        el.removeEventListener(name,fn,bub);
	      }
	      else if (el.detachEvent) {
	        el.detachEvent('on'+name,fn);
	      } else {
	        el['on'+name] = false;
	      }
	    };
	    
	    this.unbindAll = function() {
	      for(var a=0;a<self.events.length;a++) {
	        var r = self.events[a];        
	        (r.q) ? r.e.unbind(r.n,r.f) : self._unbind(r.e,r.n,r.f,r.b);
	      }
	    };
	    
	    // Thanks to http://www.switchonthecode.com !!
	    this.cancelEvent = function(e) {
	      var e = (e.original) ? e.original : (e) ? e : window.event||false;
	      if (!e) return false;      
	      if(e.preventDefault) e.preventDefault();
	      if(e.stopPropagation) e.stopPropagation();
	      if(e.preventManipulation) e.preventManipulation();  //IE10
	      e.cancelBubble = true;
	      e.cancel = true;
	      e.returnValue = false;
	      return false;
	    };

	    this.stopPropagation = function(e) {
	      var e = (e.original) ? e.original : (e) ? e : window.event||false;
	      if (!e) return false;
	      if (e.stopPropagation) return e.stopPropagation();
	      if (e.cancelBubble) e.cancelBubble=true;
	      return false;
	    }
	    
	    this.showRail = function() {
	      if ((self.page.maxh!=0)&&(self.ispage||self.win.css('display')!='none')) {
	        self.visibility = true;
	        self.rail.visibility = true;
	        self.rail.css('display','block');
	      }
	      return self;
	    };

	    this.showRailHr = function() {
	      if (!self.railh) return self;
	      if ((self.page.maxw!=0)&&(self.ispage||self.win.css('display')!='none')) {
	        self.railh.visibility = true;
	        self.railh.css('display','block');
	      }
	      return self;
	    };
	    
	    this.hideRail = function() {
	      self.visibility = false;
	      self.rail.visibility = false;
	      self.rail.css('display','none');
	      return self;
	    };

	    this.hideRailHr = function() {
	      if (!self.railh) return self;
	      self.railh.visibility = false;
	      self.railh.css('display','none');
	      return self;
	    };
	    
	    this.show = function() {
	      self.hidden = false;
	      self.locked = false;
	      return self.showRail().showRailHr();
	    };

	    this.hide = function() {
	      self.hidden = true;
	      self.locked = true;
	      return self.hideRail().hideRailHr();
	    };
	    
	    this.toggle = function() {
	      return (self.hidden) ? self.show() : self.hide();
	    };
	    
	    this.remove = function() {
	      self.stop();
	      if (self.cursortimeout) clearTimeout(self.cursortimeout);
	      self.doZoomOut();
	      self.unbindAll();     

	      if (cap.isie9) self.win[0].detachEvent("onpropertychange",self.onAttributeChange); //IE9 DOMAttrModified bug
	      
	      if (self.observer !== false) self.observer.disconnect();
	      if (self.observerremover !== false) self.observerremover.disconnect();      
	      
	      self.events = null;
	      
	      if (self.cursor) {
	        self.cursor.remove();
	      }
	      if (self.cursorh) {
	        self.cursorh.remove();
	      }
	      if (self.rail) {
	        self.rail.remove();
	      }
	      if (self.railh) {
	        self.railh.remove();
	      }
	      if (self.zoom) {
	        self.zoom.remove();
	      }
	      for(var a=0;a<self.saved.css.length;a++) {
	        var d=self.saved.css[a];
	        d[0].css(d[1],(typeof d[2]=="undefined") ? '' : d[2]);
	      }
	      self.saved = false;      
	      self.me.data('__nicescroll',''); //erase all traces
	      
	      // memory leak fixed by GianlucaGuarini - thanks a lot!
	      // remove the current nicescroll from the $.nicescroll array & normalize array
	      var lst = $.nicescroll;
	      lst.each(function(i){
	        if (!this) return;
	        if(this.id === self.id) {
	          delete lst[i];          
	          for(var b=++i;b<lst.length;b++,i++) lst[i]=lst[b];
	          lst.length--;
	          if (lst.length) delete lst[lst.length];
	        }
	      });      
	      
	      for (var i in self) {
	        self[i] = null;
	        delete self[i];
	      }
	      
	      self = null;
	      
	    };
	    
	    this.scrollstart = function(fn) {
	      this.onscrollstart = fn;
	      return self;
	    }
	    this.scrollend = function(fn) {
	      this.onscrollend = fn;
	      return self;
	    }
	    this.scrollcancel = function(fn) {
	      this.onscrollcancel = fn;
	      return self;
	    }
	    
	    this.zoomin = function(fn) {
	      this.onzoomin = fn;
	      return self;
	    }
	    this.zoomout = function(fn) {
	      this.onzoomout = fn;
	      return self;
	    }
	    
	    this.isScrollable = function(e) {      
	      var dom = (e.target) ? e.target : e;
	      if (dom.nodeName == 'OPTION') return true;
	      while (dom&&(dom.nodeType==1)&&!(/BODY|HTML/.test(dom.nodeName))) {
	        var dd = $(dom);
	        var ov = dd.css('overflowY')||dd.css('overflowX')||dd.css('overflow')||'';
	        if (/scroll|auto/.test(ov)) return (dom.clientHeight!=dom.scrollHeight);
	        dom = (dom.parentNode) ? dom.parentNode : false;        
	      }
	      return false;
	    };

	    this.getViewport = function(me) {      
	      var dom = (me&&me.parentNode) ? me.parentNode : false;
	      while (dom&&(dom.nodeType==1)&&!(/BODY|HTML/.test(dom.nodeName))) {
	        var dd = $(dom);
	        var ov = dd.css('overflowY')||dd.css('overflowX')||dd.css('overflow')||'';
	        if ((/scroll|auto/.test(ov))&&(dom.clientHeight!=dom.scrollHeight)) return dd;
	        if (dd.getNiceScroll().length>0) return dd;
	        dom = (dom.parentNode) ? dom.parentNode : false;
	      }
	      return false;
	    };
	    
	    function execScrollWheel(e,hr,chkscroll) {
	      var px,py;
	      var rt = 1;
	      
	      if (e.deltaMode==0) {  // PIXEL
	        px = -Math.floor(e.deltaX*(self.opt.mousescrollstep/(18*3)));
	        py = -Math.floor(e.deltaY*(self.opt.mousescrollstep/(18*3)));
	      }
	      else if (e.deltaMode==1) {  // LINE
	        px = -Math.floor(e.deltaX*self.opt.mousescrollstep);
	        py = -Math.floor(e.deltaY*self.opt.mousescrollstep);
	      }
	      
	      if (hr&&self.opt.oneaxismousemode&&(px==0)&&py) {  // classic vertical-only mousewheel + browser with x/y support 
	        px = py;
	        py = 0;
	      }

	      if (px) {
	        if (self.scrollmom) {self.scrollmom.stop()}
	        self.lastdeltax+=px;
	        self.debounced("mousewheelx",function(){var dt=self.lastdeltax;self.lastdeltax=0;if(!self.rail.drag){self.doScrollLeftBy(dt)}},120);
	      }
	      if (py) {
	        if (self.opt.nativeparentscrolling&&chkscroll&&!self.ispage&&!self.zoomactive) {
	          if (py<0) {
	            if (self.getScrollTop()>=self.page.maxh) return true;
	          } else {
	            if (self.getScrollTop()<=0) return true;
	          }
	        }
	        if (self.scrollmom) {self.scrollmom.stop()}
	        self.lastdeltay+=py;
	        self.debounced("mousewheely",function(){var dt=self.lastdeltay;self.lastdeltay=0;if(!self.rail.drag){self.doScrollBy(dt)}},120);
	      }
	      
	      e.stopImmediatePropagation();
	      return e.preventDefault();
	//      return self.cancelEvent(e);
	    };
	    
	    this.onmousewheel = function(e) {          
	      if (self.locked) {
	        self.debounced("checkunlock",self.resize,250);
	        return true;
	      }
	      if (self.rail.drag) return self.cancelEvent(e);
	      
	      if (self.opt.oneaxismousemode=="auto"&&e.deltaX!=0) self.opt.oneaxismousemode = false;  // check two-axis mouse support (not very elegant)
	      
	      if (self.opt.oneaxismousemode&&e.deltaX==0) {
	        if (!self.rail.scrollable) {
	          if (self.railh&&self.railh.scrollable) {
	            return self.onmousewheelhr(e);
	          } else {          
	            return true;
	          }
	        }
	      }
	      
	      var nw = +(new Date());
	      var chk = false;
	      if (self.opt.preservenativescrolling&&((self.checkarea+600)<nw)) {
	//        self.checkarea = false;
	        self.nativescrollingarea = self.isScrollable(e);
	        chk = true;
	      }
	      self.checkarea = nw;
	      if (self.nativescrollingarea) return true; // this isn't my business
	//      if (self.locked) return self.cancelEvent(e);
	      var ret = execScrollWheel(e,false,chk);
	      if (ret) self.checkarea = 0;
	      return ret;
	    };

	    this.onmousewheelhr = function(e) {
	      if (self.locked||!self.railh.scrollable) return true;
	      if (self.rail.drag) return self.cancelEvent(e);
	      
	      var nw = +(new Date());
	      var chk = false;
	      if (self.opt.preservenativescrolling&&((self.checkarea+600)<nw)) {
	//        self.checkarea = false;
	        self.nativescrollingarea = self.isScrollable(e); 
	        chk = true;
	      }
	      self.checkarea = nw;
	      if (self.nativescrollingarea) return true; // this isn't my business
	      if (self.locked) return self.cancelEvent(e);

	      return execScrollWheel(e,true,chk);
	    };
	    
	    this.stop = function() {
	      self.cancelScroll();
	      if (self.scrollmon) self.scrollmon.stop();
	      self.cursorfreezed = false;
	      self.scroll.y = Math.round(self.getScrollTop() * (1/self.scrollratio.y));      
	      self.noticeCursor();
	      return self;
	    };
	    
	    this.getTransitionSpeed = function(dif) {
	      var sp = Math.round(self.opt.scrollspeed*10);
	      var ex = Math.min(sp,Math.round((dif / 20) * self.opt.scrollspeed));
	      return (ex>20) ? ex : 0;
	    }
	    
	    if (!self.opt.smoothscroll) {
	      this.doScrollLeft = function(x,spd) {  //direct
	        var y = self.getScrollTop();
	        self.doScrollPos(x,y,spd);
	      }      
	      this.doScrollTop = function(y,spd) {   //direct
	        var x = self.getScrollLeft();
	        self.doScrollPos(x,y,spd);
	      }
	      this.doScrollPos = function(x,y,spd) {  //direct
	        var nx = (x>self.page.maxw) ? self.page.maxw : x;
	        if (nx<0) nx=0;
	        var ny = (y>self.page.maxh) ? self.page.maxh : y;
	        if (ny<0) ny=0;
	        self.synched('scroll',function(){
	          self.setScrollTop(ny);
	          self.setScrollLeft(nx);
	        });
	      }
	      this.cancelScroll = function() {}; // direct
	    } 
	    else if (self.ishwscroll&&cap.hastransition&&self.opt.usetransition) {
	      this.prepareTransition = function(dif,istime) {
	        var ex = (istime) ? ((dif>20)?dif:0) : self.getTransitionSpeed(dif);        
	        var trans = (ex) ? cap.prefixstyle+'transform '+ex+'ms ease-out' : '';
	        if (!self.lasttransitionstyle||self.lasttransitionstyle!=trans) {
	          self.lasttransitionstyle = trans;
	          self.doc.css(cap.transitionstyle,trans);
	        }
	        return ex;
	      };
	      
	      this.doScrollLeft = function(x,spd) {  //trans
	        var y = (self.scrollrunning) ? self.newscrolly : self.getScrollTop();
	        self.doScrollPos(x,y,spd);
	      }      
	      
	      this.doScrollTop = function(y,spd) {   //trans
	        var x = (self.scrollrunning) ? self.newscrollx : self.getScrollLeft();
	        self.doScrollPos(x,y,spd);
	      }
	      
	      this.doScrollPos = function(x,y,spd) {  //trans
	   
	        var py = self.getScrollTop();
	        var px = self.getScrollLeft();        
	      
	        if (((self.newscrolly-py)*(y-py)<0)||((self.newscrollx-px)*(x-px)<0)) self.cancelScroll();  //inverted movement detection      
	        
	        if (self.opt.bouncescroll==false) {
	          if (y<0) y=0;
	          else if (y>self.page.maxh) y=self.page.maxh;
	          if (x<0) x=0;
	          else if (x>self.page.maxw) x=self.page.maxw;
	        }
	        
	        if (self.scrollrunning&&x==self.newscrollx&&y==self.newscrolly) return false;
	        
	        self.newscrolly = y;
	        self.newscrollx = x;
	        
	        self.newscrollspeed = spd||false;
	        
	        if (self.timer) return false;
	        
	        self.timer = setTimeout(function(){
	        
	          var top = self.getScrollTop();
	          var lft = self.getScrollLeft();
	          
	          var dst = {};
	          dst.x = x-lft;
	          dst.y = y-top;
	          dst.px = lft;
	          dst.py = top;
	          
	          var dd = Math.round(Math.sqrt(Math.pow(dst.x,2)+Math.pow(dst.y,2)));          
	          
	//          var df = (self.newscrollspeed) ? self.newscrollspeed : dd;
	          
	          var ms = (self.newscrollspeed && self.newscrollspeed>1) ? self.newscrollspeed : self.getTransitionSpeed(dd);
	          if (self.newscrollspeed&&self.newscrollspeed<=1) ms*=self.newscrollspeed;
	          
	          self.prepareTransition(ms,true);
	          
	          if (self.timerscroll&&self.timerscroll.tm) clearInterval(self.timerscroll.tm);    
	          
	          if (ms>0) {
	          
	            if (!self.scrollrunning&&self.onscrollstart) {
	              var info = {"type":"scrollstart","current":{"x":lft,"y":top},"request":{"x":x,"y":y},"end":{"x":self.newscrollx,"y":self.newscrolly},"speed":ms};
	              self.onscrollstart.call(self,info);
	            }
	            
	            if (cap.transitionend) {
	              if (!self.scrollendtrapped) {
	                self.scrollendtrapped = true;
	                self.bind(self.doc,cap.transitionend,self.onScrollEnd,false); //I have got to do something usefull!!
	              }
	            } else {              
	              if (self.scrollendtrapped) clearTimeout(self.scrollendtrapped);
	              self.scrollendtrapped = setTimeout(self.onScrollEnd,ms);  // simulate transitionend event
	            }
	            
	            var py = top;
	            var px = lft;
	            self.timerscroll = {
	              bz: new BezierClass(py,self.newscrolly,ms,0,0,0.58,1),
	              bh: new BezierClass(px,self.newscrollx,ms,0,0,0.58,1)
	            };            
	            if (!self.cursorfreezed) self.timerscroll.tm=setInterval(function(){self.showCursor(self.getScrollTop(),self.getScrollLeft())},60);
	            
	          }
	          
	          self.synched("doScroll-set",function(){
	            self.timer = 0;
	            if (self.scrollendtrapped) self.scrollrunning = true;
	            self.setScrollTop(self.newscrolly);
	            self.setScrollLeft(self.newscrollx);
	            if (!self.scrollendtrapped) self.onScrollEnd();
	          });
	          
	          
	        },50);
	        
	      };
	      
	      this.cancelScroll = function() {
	        if (!self.scrollendtrapped) return true;        
	        var py = self.getScrollTop();
	        var px = self.getScrollLeft();
	        self.scrollrunning = false;
	        if (!cap.transitionend) clearTimeout(cap.transitionend);
	        self.scrollendtrapped = false;
	        self._unbind(self.doc,cap.transitionend,self.onScrollEnd);        
	        self.prepareTransition(0);
	        self.setScrollTop(py); // fire event onscroll
	        if (self.railh) self.setScrollLeft(px);
	        if (self.timerscroll&&self.timerscroll.tm) clearInterval(self.timerscroll.tm);
	        self.timerscroll = false;
	        
	        self.cursorfreezed = false;

	        //self.noticeCursor(false,py,px);
	        self.showCursor(py,px);
	        return self;
	      };
	      this.onScrollEnd = function() {                
	        if (self.scrollendtrapped) self._unbind(self.doc,cap.transitionend,self.onScrollEnd);
	        self.scrollendtrapped = false;        
	        self.prepareTransition(0);
	        if (self.timerscroll&&self.timerscroll.tm) clearInterval(self.timerscroll.tm);
	        self.timerscroll = false;        
	        var py = self.getScrollTop();
	        var px = self.getScrollLeft();
	        self.setScrollTop(py);  // fire event onscroll        
	        if (self.railh) self.setScrollLeft(px);  // fire event onscroll left
	        
	        self.noticeCursor(false,py,px);     
	        
	        self.cursorfreezed = false;
	        
	        if (py<0) py=0
	        else if (py>self.page.maxh) py=self.page.maxh;
	        if (px<0) px=0
	        else if (px>self.page.maxw) px=self.page.maxw;
	        if((py!=self.newscrolly)||(px!=self.newscrollx)) return self.doScrollPos(px,py,self.opt.snapbackspeed);
	        
	        if (self.onscrollend&&self.scrollrunning) {
	          var info = {"type":"scrollend","current":{"x":px,"y":py},"end":{"x":self.newscrollx,"y":self.newscrolly}};
	          self.onscrollend.call(self,info);
	        } 
	        self.scrollrunning = false;
	        
	      };

	    } else {

	      this.doScrollLeft = function(x,spd) {  //no-trans
	        var y = (self.scrollrunning) ? self.newscrolly : self.getScrollTop();
	        self.doScrollPos(x,y,spd);
	      }

	      this.doScrollTop = function(y,spd) {  //no-trans
	        var x = (self.scrollrunning) ? self.newscrollx : self.getScrollLeft();
	        self.doScrollPos(x,y,spd);
	      }

	      this.doScrollPos = function(x,y,spd) {  //no-trans
	        var y = ((typeof y == "undefined")||(y===false)) ? self.getScrollTop(true) : y;
	      
	        if  ((self.timer)&&(self.newscrolly==y)&&(self.newscrollx==x)) return true;
	      
	        if (self.timer) clearAnimationFrame(self.timer);
	        self.timer = 0;      

	        var py = self.getScrollTop();
	        var px = self.getScrollLeft();
	        
	        if (((self.newscrolly-py)*(y-py)<0)||((self.newscrollx-px)*(x-px)<0)) self.cancelScroll();  //inverted movement detection
	        
	        self.newscrolly = y;
	        self.newscrollx = x;
	        
	        if (!self.bouncescroll||!self.rail.visibility) {
	          if (self.newscrolly<0) {
	            self.newscrolly = 0;
	          }
	          else if (self.newscrolly>self.page.maxh) {
	            self.newscrolly = self.page.maxh;
	          }
	        }
	        if (!self.bouncescroll||!self.railh.visibility) {
	          if (self.newscrollx<0) {
	            self.newscrollx = 0;
	          }
	          else if (self.newscrollx>self.page.maxw) {
	            self.newscrollx = self.page.maxw;
	          }
	        }

	        self.dst = {};
	        self.dst.x = x-px;
	        self.dst.y = y-py;
	        self.dst.px = px;
	        self.dst.py = py;
	        
	        var dst = Math.round(Math.sqrt(Math.pow(self.dst.x,2)+Math.pow(self.dst.y,2)));
	        
	        self.dst.ax = self.dst.x / dst;
	        self.dst.ay = self.dst.y / dst;
	        
	        var pa = 0;
	        var pe = dst;
	        
	        if (self.dst.x==0) {
	          pa = py;
	          pe = y;
	          self.dst.ay = 1;
	          self.dst.py = 0;
	        } else if (self.dst.y==0) {
	          pa = px;
	          pe = x;
	          self.dst.ax = 1;
	          self.dst.px = 0;
	        }

	        var ms = self.getTransitionSpeed(dst);
	        if (spd&&spd<=1) ms*=spd;
	        if (ms>0) {
	          self.bzscroll = (self.bzscroll) ? self.bzscroll.update(pe,ms) : new BezierClass(pa,pe,ms,0,1,0,1);
	        } else {
	          self.bzscroll = false;
	        }
	        
	        if (self.timer) return;
	        
	        if ((py==self.page.maxh&&y>=self.page.maxh)||(px==self.page.maxw&&x>=self.page.maxw)) self.checkContentSize();
	        
	        var sync = 1;
	        
	        function scrolling() {          
	          if (self.cancelAnimationFrame) return true;
	          
	          self.scrollrunning = true;
	          
	          sync = 1-sync;
	          if (sync) return (self.timer = setAnimationFrame(scrolling)||1);

	          var done = 0;
	          
	          var sc = sy = self.getScrollTop();
	          if (self.dst.ay) {            
	            sc = (self.bzscroll) ? self.dst.py + (self.bzscroll.getNow()*self.dst.ay) : self.newscrolly;
	            var dr=sc-sy;          
	            if ((dr<0&&sc<self.newscrolly)||(dr>0&&sc>self.newscrolly)) sc = self.newscrolly;
	            self.setScrollTop(sc);
	            if (sc == self.newscrolly) done=1;
	          } else {
	            done=1;
	          }
	          
	          var scx = sx = self.getScrollLeft();
	          if (self.dst.ax) {            
	            scx = (self.bzscroll) ? self.dst.px + (self.bzscroll.getNow()*self.dst.ax) : self.newscrollx;            
	            var dr=scx-sx;
	            if ((dr<0&&scx<self.newscrollx)||(dr>0&&scx>self.newscrollx)) scx = self.newscrollx;
	            self.setScrollLeft(scx);
	            if (scx == self.newscrollx) done+=1;
	          } else {
	            done+=1;
	          }
	          
	          if (done==2) {
	            self.timer = 0;
	            self.cursorfreezed = false;
	            self.bzscroll = false;
	            self.scrollrunning = false;
	            if (sc<0) sc=0;
	            else if (sc>self.page.maxh) sc=self.page.maxh;
	            if (scx<0) scx=0;
	            else if (scx>self.page.maxw) scx=self.page.maxw;
	            if ((scx!=self.newscrollx)||(sc!=self.newscrolly)) self.doScrollPos(scx,sc);
	            else {
	              if (self.onscrollend) {
	                var info = {"type":"scrollend","current":{"x":sx,"y":sy},"end":{"x":self.newscrollx,"y":self.newscrolly}};
	                self.onscrollend.call(self,info);
	              }             
	            } 
	          } else {
	            self.timer = setAnimationFrame(scrolling)||1;
	          }
	        };
	        self.cancelAnimationFrame=false;
	        self.timer = 1;

	        if (self.onscrollstart&&!self.scrollrunning) {
	          var info = {"type":"scrollstart","current":{"x":px,"y":py},"request":{"x":x,"y":y},"end":{"x":self.newscrollx,"y":self.newscrolly},"speed":ms};
	          self.onscrollstart.call(self,info);
	        }        

	        scrolling();
	        
	        if ((py==self.page.maxh&&y>=py)||(px==self.page.maxw&&x>=px)) self.checkContentSize();
	        
	        self.noticeCursor();
	      };
	  
	      this.cancelScroll = function() {        
	        if (self.timer) clearAnimationFrame(self.timer);
	        self.timer = 0;
	        self.bzscroll = false;
	        self.scrollrunning = false;
	        return self;
	      };
	      
	    }
	    
	    this.doScrollBy = function(stp,relative) {
	      var ny = 0;
	      if (relative) {
	        ny = Math.floor((self.scroll.y-stp)*self.scrollratio.y)
	      } else {        
	        var sy = (self.timer) ? self.newscrolly : self.getScrollTop(true);
	        ny = sy-stp;
	      }
	      if (self.bouncescroll) {
	        var haf = Math.round(self.view.h/2);
	        if (ny<-haf) ny=-haf
	        else if (ny>(self.page.maxh+haf)) ny = (self.page.maxh+haf);
	      }
	      self.cursorfreezed = false;      

	      py = self.getScrollTop(true);
	      if (ny<0&&py<=0) return self.noticeCursor();      
	      else if (ny>self.page.maxh&&py>=self.page.maxh) {
	        self.checkContentSize();
	        return self.noticeCursor();
	      }
	      
	      self.doScrollTop(ny);
	    };

	    this.doScrollLeftBy = function(stp,relative) {
	      var nx = 0;
	      if (relative) {
	        nx = Math.floor((self.scroll.x-stp)*self.scrollratio.x)
	      } else {
	        var sx = (self.timer) ? self.newscrollx : self.getScrollLeft(true);
	        nx = sx-stp;
	      }
	      if (self.bouncescroll) {
	        var haf = Math.round(self.view.w/2);
	        if (nx<-haf) nx=-haf
	        else if (nx>(self.page.maxw+haf)) nx = (self.page.maxw+haf);
	      }
	      self.cursorfreezed = false;    

	      px = self.getScrollLeft(true);
	      if (nx<0&&px<=0) return self.noticeCursor();      
	      else if (nx>self.page.maxw&&px>=self.page.maxw) return self.noticeCursor();
	      
	      self.doScrollLeft(nx);
	    };
	    
	    this.doScrollTo = function(pos,relative) {
	      var ny = (relative) ? Math.round(pos*self.scrollratio.y) : pos;
	      if (ny<0) ny=0
	      else if (ny>self.page.maxh) ny = self.page.maxh;
	      self.cursorfreezed = false;
	      self.doScrollTop(pos);
	    };
	    
	    this.checkContentSize = function() {      
	      var pg = self.getContentSize();
	      if ((pg.h!=self.page.h)||(pg.w!=self.page.w)) self.resize(false,pg);
	    };
	    
	    self.onscroll = function(e) {    
	      if (self.rail.drag) return;
	      if (!self.cursorfreezed) {
	        self.synched('scroll',function(){
	          self.scroll.y = Math.round(self.getScrollTop() * (1/self.scrollratio.y));
	          if (self.railh) self.scroll.x = Math.round(self.getScrollLeft() * (1/self.scrollratio.x));
	          self.noticeCursor();
	        });
	      }
	    };
	    self.bind(self.docscroll,"scroll",self.onscroll);
	    
	    this.doZoomIn = function(e) {
	      if (self.zoomactive) return;
	      self.zoomactive = true;
	      
	      self.zoomrestore = {
	        style:{}
	      };
	      var lst = ['position','top','left','zIndex','backgroundColor','marginTop','marginBottom','marginLeft','marginRight'];
	      var win = self.win[0].style;
	      for(var a in lst) {
	        var pp = lst[a];
	        self.zoomrestore.style[pp] = (typeof win[pp] != "undefined") ? win[pp] : '';        
	      }
	      
	      self.zoomrestore.style.width = self.win.css('width');
	      self.zoomrestore.style.height = self.win.css('height');
	      
	      self.zoomrestore.padding = {
	        w:self.win.outerWidth()-self.win.width(),
	        h:self.win.outerHeight()-self.win.height()
	      };
	      
	      if (cap.isios4) {
	        self.zoomrestore.scrollTop = $(window).scrollTop();
	        $(window).scrollTop(0);
	      }
	      
	      self.win.css({
	        "position":(cap.isios4)?"absolute":"fixed",
	        "top":0,
	        "left":0,
	        "z-index":globalmaxzindex+100,
	        "margin":"0px"
	      });
	      var bkg = self.win.css("backgroundColor");      
	      if (bkg==""||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(bkg)) self.win.css("backgroundColor","#fff");
	      self.rail.css({"z-index":globalmaxzindex+101});
	      self.zoom.css({"z-index":globalmaxzindex+102});      
	      self.zoom.css('backgroundPosition','0px -18px');
	      self.resizeZoom();
	      
	      if (self.onzoomin) self.onzoomin.call(self);
	      
	      return self.cancelEvent(e);
	    };

	    this.doZoomOut = function(e) {
	      if (!self.zoomactive) return;
	      self.zoomactive = false;
	      
	      self.win.css("margin","");
	      self.win.css(self.zoomrestore.style);
	      
	      if (cap.isios4) {
	        $(window).scrollTop(self.zoomrestore.scrollTop);
	      }
	      
	      self.rail.css({"z-index":self.zindex});
	      self.zoom.css({"z-index":self.zindex});
	      self.zoomrestore = false;
	      self.zoom.css('backgroundPosition','0px 0px');
	      self.onResize();
	      
	      if (self.onzoomout) self.onzoomout.call(self);
	      
	      return self.cancelEvent(e);
	    };
	    
	    this.doZoom = function(e) {
	      return (self.zoomactive) ? self.doZoomOut(e) : self.doZoomIn(e);
	    };
	    
	    this.resizeZoom = function() {
	      if (!self.zoomactive) return;

	      var py = self.getScrollTop(); //preserve scrolling position
	      self.win.css({
	        width:$(window).width()-self.zoomrestore.padding.w+"px",
	        height:$(window).height()-self.zoomrestore.padding.h+"px"
	      });
	      self.onResize();
	      
	      self.setScrollTop(Math.min(self.page.maxh,py));
	    };
	   
	    this.init();
	    
	    $.nicescroll.push(this);

	  };
	  
	// Inspired by the work of Kin Blas
	// http://webpro.host.adobe.com/people/jblas/momentum/includes/jquery.momentum.0.7.js  
	  
	  
	  var ScrollMomentumClass2D = function(nc) {
	    var self = this;
	    this.nc = nc;
	    
	    this.lastx = 0;
	    this.lasty = 0;
	    this.speedx = 0;
	    this.speedy = 0;
	    this.lasttime = 0;
	    this.steptime = 0;
	    this.snapx = false;
	    this.snapy = false;
	    this.demulx = 0;
	    this.demuly = 0;
	    
	    this.lastscrollx = -1;
	    this.lastscrolly = -1;
	    
	    this.chkx = 0;
	    this.chky = 0;
	    
	    this.timer = 0;
	    
	    this.time = function() {
	      return +new Date();//beautifull hack
	    };
	    
	    this.reset = function(px,py) {
	      self.stop();
	      var now = self.time();
	      self.steptime = 0;
	      self.lasttime = now;
	      self.speedx = 0;
	      self.speedy = 0;
	      self.lastx = px;
	      self.lasty = py;
	      self.lastscrollx = -1;
	      self.lastscrolly = -1;
	    };
	    
	    this.update = function(px,py) {
	      var now = self.time();
	      self.steptime = now - self.lasttime;
	      self.lasttime = now;      
	      var dy = py - self.lasty;
	      var dx = px - self.lastx;
	      var sy = self.nc.getScrollTop();
	      var sx = self.nc.getScrollLeft();
	      var newy = sy + dy;
	      var newx = sx + dx;
	      self.snapx = (newx<0)||(newx>self.nc.page.maxw);
	      self.snapy = (newy<0)||(newy>self.nc.page.maxh);
	      self.speedx = dx;
	      self.speedy = dy;
	      self.lastx = px;
	      self.lasty = py;
	    };
	    
	    this.stop = function() {
	      self.nc.unsynched("domomentum2d");
	      if (self.timer) clearTimeout(self.timer);
	      self.timer = 0;
	      self.lastscrollx = -1;
	      self.lastscrolly = -1;
	    };
	    
	    this.doSnapy = function(nx,ny) {
	      var snap = false;
	      
	      if (ny<0) {
	        ny=0;
	        snap=true;        
	      } 
	      else if (ny>self.nc.page.maxh) {
	        ny=self.nc.page.maxh;
	        snap=true;
	      }

	      if (nx<0) {
	        nx=0;
	        snap=true;        
	      } 
	      else if (nx>self.nc.page.maxw) {
	        nx=self.nc.page.maxw;
	        snap=true;
	      }
	      
	      if (snap) self.nc.doScrollPos(nx,ny,self.nc.opt.snapbackspeed);
	    };
	    
	    this.doMomentum = function(gp) {
	      var t = self.time();
	      var l = (gp) ? t+gp : self.lasttime;

	      var sl = self.nc.getScrollLeft();
	      var st = self.nc.getScrollTop();
	      
	      var pageh = self.nc.page.maxh;
	      var pagew = self.nc.page.maxw;
	      
	      self.speedx = (pagew>0) ? Math.min(60,self.speedx) : 0;
	      self.speedy = (pageh>0) ? Math.min(60,self.speedy) : 0;
	      
	      var chk = l && (t - l) <= 60;
	      
	      if ((st<0)||(st>pageh)||(sl<0)||(sl>pagew)) chk = false;
	      
	      var sy = (self.speedy && chk) ? self.speedy : false;
	      var sx = (self.speedx && chk) ? self.speedx : false;
	      
	      if (sy||sx) {
	        var tm = Math.max(16,self.steptime); //timeout granularity
	        
	        if (tm>50) {  // do smooth
	          var xm = tm/50;
	          self.speedx*=xm;
	          self.speedy*=xm;
	          tm = 50;
	        }
	        
	        self.demulxy = 0;

	        self.lastscrollx = self.nc.getScrollLeft();
	        self.chkx = self.lastscrollx;
	        self.lastscrolly = self.nc.getScrollTop();
	        self.chky = self.lastscrolly;
	        
	        var nx = self.lastscrollx;
	        var ny = self.lastscrolly;
	        
	        var onscroll = function(){
	          var df = ((self.time()-t)>600) ? 0.04 : 0.02;
	        
	          if (self.speedx) {
	            nx = Math.floor(self.lastscrollx - (self.speedx*(1-self.demulxy)));
	            self.lastscrollx = nx;
	            if ((nx<0)||(nx>pagew)) df=0.10;
	          }

	          if (self.speedy) {
	            ny = Math.floor(self.lastscrolly - (self.speedy*(1-self.demulxy)));
	            self.lastscrolly = ny;
	            if ((ny<0)||(ny>pageh)) df=0.10;
	          }
	          
	          self.demulxy = Math.min(1,self.demulxy+df);
	          
	          self.nc.synched("domomentum2d",function(){

	            if (self.speedx) {
	              var scx = self.nc.getScrollLeft();
	              if (scx!=self.chkx) self.stop();
	              self.chkx=nx;
	              self.nc.setScrollLeft(nx);
	            }
	          
	            if (self.speedy) {
	              var scy = self.nc.getScrollTop();
	              if (scy!=self.chky) self.stop();          
	              self.chky=ny;
	              self.nc.setScrollTop(ny);
	            }
	            
	            if(!self.timer) {
	              self.nc.hideCursor();
	              self.doSnapy(nx,ny);
	            }
	            
	          });
	          
	          if (self.demulxy<1) {            
	            self.timer = setTimeout(onscroll,tm);
	          } else {
	            self.stop();
	            self.nc.hideCursor();
	            self.doSnapy(nx,ny);
	          }
	        };
	        
	        onscroll();
	        
	      } else {
	        self.doSnapy(self.nc.getScrollLeft(),self.nc.getScrollTop());
	      }      
	      
	    }
	    
	  };

	  
	// override jQuery scrollTop
	 
	  var _scrollTop = jQuery.fn.scrollTop; // preserve original function
	   
	  jQuery.cssHooks["pageYOffset"] = {
	    get: function(elem,computed,extra) {      
	      var nice = $.data(elem,'__nicescroll')||false;
	      return (nice&&nice.ishwscroll) ? nice.getScrollTop() : _scrollTop.call(elem);
	    },
	    set: function(elem,value) {
	      var nice = $.data(elem,'__nicescroll')||false;    
	      (nice&&nice.ishwscroll) ? nice.setScrollTop(parseInt(value)) : _scrollTop.call(elem,value);
	      return this;
	    }
	  };
	  
	/*  
	  $.fx.step["scrollTop"] = function(fx){    
	    $.cssHooks["scrollTop"].set( fx.elem, fx.now + fx.unit );
	  };
	*/  
	  
	  jQuery.fn.scrollTop = function(value) {    
	    if (typeof value == "undefined") {
	      var nice = (this[0]) ? $.data(this[0],'__nicescroll')||false : false;
	      return (nice&&nice.ishwscroll) ? nice.getScrollTop() : _scrollTop.call(this);
	    } else {      
	      return this.each(function() {
	        var nice = $.data(this,'__nicescroll')||false;
	        (nice&&nice.ishwscroll) ? nice.setScrollTop(parseInt(value)) : _scrollTop.call($(this),value);
	      });
	    }
	  }

	// override jQuery scrollLeft
	 
	  var _scrollLeft = jQuery.fn.scrollLeft; // preserve original function
	   
	  $.cssHooks.pageXOffset = {
	    get: function(elem,computed,extra) {
	      var nice = $.data(elem,'__nicescroll')||false;
	      return (nice&&nice.ishwscroll) ? nice.getScrollLeft() : _scrollLeft.call(elem);
	    },
	    set: function(elem,value) {
	      var nice = $.data(elem,'__nicescroll')||false;    
	      (nice&&nice.ishwscroll) ? nice.setScrollLeft(parseInt(value)) : _scrollLeft.call(elem,value);
	      return this;
	    }
	  };
	  
	/*  
	  $.fx.step["scrollLeft"] = function(fx){
	    $.cssHooks["scrollLeft"].set( fx.elem, fx.now + fx.unit );
	  };  
	*/  
	 
	  jQuery.fn.scrollLeft = function(value) {    
	    if (typeof value == "undefined") {
	      var nice = (this[0]) ? $.data(this[0],'__nicescroll')||false : false;
	      return (nice&&nice.ishwscroll) ? nice.getScrollLeft() : _scrollLeft.call(this);
	    } else {
	      return this.each(function() {     
	        var nice = $.data(this,'__nicescroll')||false;
	        (nice&&nice.ishwscroll) ? nice.setScrollLeft(parseInt(value)) : _scrollLeft.call($(this),value);
	      });
	    }
	  }
	  
	  var NiceScrollArray = function(doms) {
	    var self = this;
	    this.length = 0;
	    this.name = "nicescrollarray";
	  
	    this.each = function(fn) {
	      for(var a=0,i=0;a<self.length;a++) fn.call(self[a],i++);
	      return self;
	    };
	    
	    this.push = function(nice) {
	      self[self.length]=nice;
	      self.length++;
	    };
	    
	    this.eq = function(idx) {
	      return self[idx];
	    };
	    
	    if (doms) {
	      for(a=0;a<doms.length;a++) {
	        var nice = $.data(doms[a],'__nicescroll')||false;
	        if (nice) {
	          this[this.length]=nice;
	          this.length++;
	        }
	      };
	    }
	    
	    return this;
	  };
	  
	  function mplex(el,lst,fn) {
	    for(var a=0;a<lst.length;a++) fn(el,lst[a]);
	  };  
	  mplex(
	    NiceScrollArray.prototype,
	    ['show','hide','toggle','onResize','resize','remove','stop','doScrollPos'],
	    function(e,n) {
	      e[n] = function(){
	        var args = arguments;
	        return this.each(function(){          
	          this[n].apply(this,args);
	        });
	      };
	    }
	  );  
	  
	  jQuery.fn.getNiceScroll = function(index) {
	    if (typeof index == "undefined") {
	      return new NiceScrollArray(this);
	    } else {      
	      var nice = this[index]&&$.data(this[index],'__nicescroll')||false;
	      return nice;
	    }
	  };
	  
	  jQuery.extend(jQuery.expr[':'], {
	    nicescroll: function(a) {
	      return ($.data(a,'__nicescroll'))?true:false;
	    }
	  });  
	  
	  $.fn.niceScroll = function(wrapper,opt) {        
	    if (typeof opt=="undefined") {
	      if ((typeof wrapper=="object")&&!("jquery" in wrapper)) {
	        opt = wrapper;
	        wrapper = false;        
	      }
	    }
	    var ret = new NiceScrollArray();
	    if (typeof opt=="undefined") opt = {};
	    
	    if (wrapper||false) {      
	      opt.doc = $(wrapper);
	      opt.win = $(this);
	    }    
	    var docundef = !("doc" in opt);   
	    if (!docundef&&!("win" in opt)) opt.win = $(this);    
	    
	    this.each(function() {
	      var nice = $(this).data('__nicescroll')||false;
	      if (!nice) {
	        opt.doc = (docundef) ? $(this) : opt.doc;
	        nice = new NiceScrollClass(opt,$(this));        
	        $(this).data('__nicescroll',nice);
	      }
	      ret.push(nice);
	    });
	    return (ret.length==1) ? ret[0] : ret;
	  };
	  
	  window.NiceScroll = {
	    getjQuery:function(){return jQuery}
	  };
	  
	  if (!$.nicescroll) {
	   $.nicescroll = new NiceScrollArray();
	   $.nicescroll.options = _globaloptions;
	  }
	  
	})( jQuery );
	  

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Owl carousel
	 * @version 2.0.0
	 * @author Bartosz Wojciechowski
	 * @license The MIT License (MIT)
	 * @todo Lazy Load Icon
	 * @todo prevent animationend bubling
	 * @todo itemsScaleUp
	 * @todo Test Zepto
	 * @todo stagePadding calculate wrong active classes
	 */
	;(function($, window, document, undefined) {

		var drag, state, e;

		/**
		 * Template for status information about drag and touch events.
		 * @private
		 */
		drag = {
			start: 0,
			startX: 0,
			startY: 0,
			current: 0,
			currentX: 0,
			currentY: 0,
			offsetX: 0,
			offsetY: 0,
			distance: null,
			startTime: 0,
			endTime: 0,
			updatedX: 0,
			targetEl: null
		};

		/**
		 * Template for some status informations.
		 * @private
		 */
		state = {
			isTouch: false,
			isScrolling: false,
			isSwiping: false,
			direction: false,
			inMotion: false
		};

		/**
		 * Event functions references.
		 * @private
		 */
		e = {
			_onDragStart: null,
			_onDragMove: null,
			_onDragEnd: null,
			_transitionEnd: null,
			_resizer: null,
			_responsiveCall: null,
			_goToLoop: null,
			_checkVisibile: null
		};

		/**
		 * Creates a carousel.
		 * @class The Owl Carousel.
		 * @public
		 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
		 * @param {Object} [options] - The options
		 */
		function Owl(element, options) {

			/**
			 * Current settings for the carousel.
			 * @public
			 */
			this.settings = null;

			/**
			 * Current options set by the caller including defaults.
			 * @public
			 */
			this.options = $.extend({}, Owl.Defaults, options);

			/**
			 * Plugin element.
			 * @public
			 */
			this.$element = $(element);

			/**
			 * Caches informations about drag and touch events.
			 */
			this.drag = $.extend({}, drag);

			/**
			 * Caches some status informations.
			 * @protected
			 */
			this.state = $.extend({}, state);

			/**
			 * @protected
			 * @todo Must be documented
			 */
			this.e = $.extend({}, e);

			/**
			 * References to the running plugins of this carousel.
			 * @protected
			 */
			this._plugins = {};

			/**
			 * Currently suppressed events to prevent them from beeing retriggered.
			 * @protected
			 */
			this._supress = {};

			/**
			 * Absolute current position.
			 * @protected
			 */
			this._current = null;

			/**
			 * Animation speed in milliseconds.
			 * @protected
			 */
			this._speed = null;

			/**
			 * Coordinates of all items in pixel.
			 * @todo The name of this member is missleading.
			 * @protected
			 */
			this._coordinates = [];

			/**
			 * Current breakpoint.
			 * @todo Real media queries would be nice.
			 * @protected
			 */
			this._breakpoint = null;

			/**
			 * Current width of the plugin element.
			 */
			this._width = null;

			/**
			 * All real items.
			 * @protected
			 */
			this._items = [];

			/**
			 * All cloned items.
			 * @protected
			 */
			this._clones = [];

			/**
			 * Merge values of all items.
			 * @todo Maybe this could be part of a plugin.
			 * @protected
			 */
			this._mergers = [];

			/**
			 * Invalidated parts within the update process.
			 * @protected
			 */
			this._invalidated = {};

			/**
			 * Ordered list of workers for the update process.
			 * @protected
			 */
			this._pipe = [];

			$.each(Owl.Plugins, $.proxy(function(key, plugin) {
				this._plugins[key[0].toLowerCase() + key.slice(1)]
					= new plugin(this);
			}, this));

			$.each(Owl.Pipe, $.proxy(function(priority, worker) {
				this._pipe.push({
					'filter': worker.filter,
					'run': $.proxy(worker.run, this)
				});
			}, this));

			this.setup();
			this.initialize();
		}

		/**
		 * Default options for the carousel.
		 * @public
		 */
		Owl.Defaults = {
			items: 3,
			loop: false,
			center: false,

			mouseDrag: true,
			touchDrag: true,
			pullDrag: true,
			freeDrag: false,

			margin: 0,
			stagePadding: 0,

			merge: false,
			mergeFit: true,
			autoWidth: false,

			startPosition: 0,
			rtl: false,

			smartSpeed: 250,
			fluidSpeed: false,
			dragEndSpeed: false,

			responsive: {},
			responsiveRefreshRate: 200,
			responsiveBaseElement: window,
			responsiveClass: false,

			fallbackEasing: 'swing',

			info: false,

			nestedItemSelector: false,
			itemElement: 'div',
			stageElement: 'div',

			// Classes and Names
			themeClass: 'owl-theme',
			baseClass: 'owl-carousel',
			itemClass: 'owl-item',
			centerClass: 'center',
			activeClass: 'active'
		};

		/**
		 * Enumeration for width.
		 * @public
		 * @readonly
		 * @enum {String}
		 */
		Owl.Width = {
			Default: 'default',
			Inner: 'inner',
			Outer: 'outer'
		};

		/**
		 * Contains all registered plugins.
		 * @public
		 */
		Owl.Plugins = {};

		/**
		 * Update pipe.
		 */
		Owl.Pipe = [ {
			filter: [ 'width', 'items', 'settings' ],
			run: function(cache) {
				cache.current = this._items && this._items[this.relative(this._current)];
			}
		}, {
			filter: [ 'items', 'settings' ],
			run: function() {
				var cached = this._clones,
					clones = this.$stage.children('.cloned');

				if (clones.length !== cached.length || (!this.settings.loop && cached.length > 0)) {
					this.$stage.children('.cloned').remove();
					this._clones = [];
				}
			}
		}, {
			filter: [ 'items', 'settings' ],
			run: function() {
				var i, n,
					clones = this._clones,
					items = this._items,
					delta = this.settings.loop ? clones.length - Math.max(this.settings.items * 2, 4) : 0;

				for (i = 0, n = Math.abs(delta / 2); i < n; i++) {
					if (delta > 0) {
						this.$stage.children().eq(items.length + clones.length - 1).remove();
						clones.pop();
						this.$stage.children().eq(0).remove();
						clones.pop();
					} else {
						clones.push(clones.length / 2);
						this.$stage.append(items[clones[clones.length - 1]].clone().addClass('cloned'));
						clones.push(items.length - 1 - (clones.length - 1) / 2);
						this.$stage.prepend(items[clones[clones.length - 1]].clone().addClass('cloned'));
					}
				}
			}
		}, {
			filter: [ 'width', 'items', 'settings' ],
			run: function() {
				var rtl = (this.settings.rtl ? 1 : -1),
					width = (this.width() / this.settings.items).toFixed(3),
					coordinate = 0, merge, i, n;

				this._coordinates = [];
				for (i = 0, n = this._clones.length + this._items.length; i < n; i++) {
					merge = this._mergers[this.relative(i)];
					merge = (this.settings.mergeFit && Math.min(merge, this.settings.items)) || merge;
					coordinate += (this.settings.autoWidth ? this._items[this.relative(i)].width() + this.settings.margin : width * merge) * rtl;

					this._coordinates.push(coordinate);
				}
			}
		}, {
			filter: [ 'width', 'items', 'settings' ],
			run: function() {
				var i, n, width = (this.width() / this.settings.items).toFixed(3), css = {
					'width': Math.abs(this._coordinates[this._coordinates.length - 1]) + this.settings.stagePadding * 2,
					'padding-left': this.settings.stagePadding || '',
					'padding-right': this.settings.stagePadding || ''
				};

				this.$stage.css(css);

				css = { 'width': this.settings.autoWidth ? 'auto' : width - this.settings.margin };
				css[this.settings.rtl ? 'margin-left' : 'margin-right'] = this.settings.margin;

				if (!this.settings.autoWidth && $.grep(this._mergers, function(v) { return v > 1 }).length > 0) {
					for (i = 0, n = this._coordinates.length; i < n; i++) {
						css.width = Math.abs(this._coordinates[i]) - Math.abs(this._coordinates[i - 1] || 0) - this.settings.margin;
						this.$stage.children().eq(i).css(css);
					}
				} else {
					this.$stage.children().css(css);
				}
			}
		}, {
			filter: [ 'width', 'items', 'settings' ],
			run: function(cache) {
				cache.current && this.reset(this.$stage.children().index(cache.current));
			}
		}, {
			filter: [ 'position' ],
			run: function() {
				this.animate(this.coordinates(this._current));
			}
		}, {
			filter: [ 'width', 'position', 'items', 'settings' ],
			run: function() {
				var rtl = this.settings.rtl ? 1 : -1,
					padding = this.settings.stagePadding * 2,
					begin = this.coordinates(this.current()) + padding,
					end = begin + this.width() * rtl,
					inner, outer, matches = [], i, n;

				for (i = 0, n = this._coordinates.length; i < n; i++) {
					inner = this._coordinates[i - 1] || 0;
					outer = Math.abs(this._coordinates[i]) + padding * rtl;

					if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
						|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
						matches.push(i);
					}
				}

				this.$stage.children('.' + this.settings.activeClass).removeClass(this.settings.activeClass);
				this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass(this.settings.activeClass);

				if (this.settings.center) {
					this.$stage.children('.' + this.settings.centerClass).removeClass(this.settings.centerClass);
					this.$stage.children().eq(this.current()).addClass(this.settings.centerClass);
				}
			}
		} ];

		/**
		 * Initializes the carousel.
		 * @protected
		 */
		Owl.prototype.initialize = function() {
			this.trigger('initialize');

			this.$element
				.addClass(this.settings.baseClass)
				.addClass(this.settings.themeClass)
				.toggleClass('owl-rtl', this.settings.rtl);

			// check support
			this.browserSupport();

			if (this.settings.autoWidth && this.state.imagesLoaded !== true) {
				var imgs, nestedSelector, width;
				imgs = this.$element.find('img');
				nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
				width = this.$element.children(nestedSelector).width();

				if (imgs.length && width <= 0) {
					this.preloadAutoWidthImages(imgs);
					return false;
				}
			}

			this.$element.addClass('owl-loading');

			// create stage
			this.$stage = $('<' + this.settings.stageElement + ' class="owl-stage"/>')
				.wrap('<div class="owl-stage-outer">');

			// append stage
			this.$element.append(this.$stage.parent());

			// append content
			this.replace(this.$element.children().not(this.$stage.parent()));

			// set view width
			this._width = this.$element.width();

			// update view
			this.refresh();

			this.$element.removeClass('owl-loading').addClass('owl-loaded');

			// attach generic events
			this.eventsCall();

			// attach generic events
			this.internalEvents();

			// attach custom control events
			this.addTriggerableEvents();

			this.trigger('initialized');
		};

		/**
		 * Setups the current settings.
		 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
		 * @todo Support for media queries by using `matchMedia` would be nice.
		 * @public
		 */
		Owl.prototype.setup = function() {
			var viewport = this.viewport(),
				overwrites = this.options.responsive,
				match = -1,
				settings = null;

			if (!overwrites) {
				settings = $.extend({}, this.options);
			} else {
				$.each(overwrites, function(breakpoint) {
					if (breakpoint <= viewport && breakpoint > match) {
						match = Number(breakpoint);
					}
				});

				settings = $.extend({}, this.options, overwrites[match]);
				delete settings.responsive;

				// responsive class
				if (settings.responsiveClass) {
					this.$element.attr('class', function(i, c) {
						return c.replace(/\b owl-responsive-\S+/g, '');
					}).addClass('owl-responsive-' + match);
				}
			}

			if (this.settings === null || this._breakpoint !== match) {
				this.trigger('change', { property: { name: 'settings', value: settings } });
				this._breakpoint = match;
				this.settings = settings;
				this.invalidate('settings');
				this.trigger('changed', { property: { name: 'settings', value: this.settings } });
			}
		};

		/**
		 * Updates option logic if necessery.
		 * @protected
		 */
		Owl.prototype.optionsLogic = function() {
			// Toggle Center class
			this.$element.toggleClass('owl-center', this.settings.center);

			// if items number is less than in body
			if (this.settings.loop && this._items.length < this.settings.items) {
				this.settings.loop = false;
			}

			if (this.settings.autoWidth) {
				this.settings.stagePadding = false;
				this.settings.merge = false;
			}
		};

		/**
		 * Prepares an item before add.
		 * @todo Rename event parameter `content` to `item`.
		 * @protected
		 * @returns {jQuery|HTMLElement} - The item container.
		 */
		Owl.prototype.prepare = function(item) {
			var event = this.trigger('prepare', { content: item });

			if (!event.data) {
				event.data = $('<' + this.settings.itemElement + '/>')
					.addClass(this.settings.itemClass).append(item)
			}

			this.trigger('prepared', { content: event.data });

			return event.data;
		};

		/**
		 * Updates the view.
		 * @public
		 */
		Owl.prototype.update = function() {
			var i = 0,
				n = this._pipe.length,
				filter = $.proxy(function(p) { return this[p] }, this._invalidated),
				cache = {};

			while (i < n) {
				if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
					this._pipe[i].run(cache);
				}
				i++;
			}

			this._invalidated = {};
		};

		/**
		 * Gets the width of the view.
		 * @public
		 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
		 * @returns {Number} - The width of the view in pixel.
		 */
		Owl.prototype.width = function(dimension) {
			dimension = dimension || Owl.Width.Default;
			switch (dimension) {
				case Owl.Width.Inner:
				case Owl.Width.Outer:
					return this._width;
				default:
					return this._width - this.settings.stagePadding * 2 + this.settings.margin;
			}
		};

		/**
		 * Refreshes the carousel primarily for adaptive purposes.
		 * @public
		 */
		Owl.prototype.refresh = function() {
			if (this._items.length === 0) {
				return false;
			}

			var start = new Date().getTime();

			this.trigger('refresh');

			this.setup();

			this.optionsLogic();

			// hide and show methods helps here to set a proper widths,
			// this prevents scrollbar to be calculated in stage width
			this.$stage.addClass('owl-refresh');

			this.update();

			this.$stage.removeClass('owl-refresh');

			this.state.orientation = window.orientation;

			this.watchVisibility();

			this.trigger('refreshed');
		};

		/**
		 * Save internal event references and add event based functions.
		 * @protected
		 */
		Owl.prototype.eventsCall = function() {
			// Save events references
			this.e._onDragStart = $.proxy(function(e) {
				this.onDragStart(e);
			}, this);
			this.e._onDragMove = $.proxy(function(e) {
				this.onDragMove(e);
			}, this);
			this.e._onDragEnd = $.proxy(function(e) {
				this.onDragEnd(e);
			}, this);
			this.e._onResize = $.proxy(function(e) {
				this.onResize(e);
			}, this);
			this.e._transitionEnd = $.proxy(function(e) {
				this.transitionEnd(e);
			}, this);
			this.e._preventClick = $.proxy(function(e) {
				this.preventClick(e);
			}, this);
		};

		/**
		 * Checks window `resize` event.
		 * @protected
		 */
		Owl.prototype.onThrottledResize = function() {
			window.clearTimeout(this.resizeTimer);
			this.resizeTimer = window.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate);
		};

		/**
		 * Checks window `resize` event.
		 * @protected
		 */
		Owl.prototype.onResize = function() {
			if (!this._items.length) {
				return false;
			}

			if (this._width === this.$element.width()) {
				return false;
			}

			if (this.trigger('resize').isDefaultPrevented()) {
				return false;
			}

			this._width = this.$element.width();

			this.invalidate('width');

			this.refresh();

			this.trigger('resized');
		};

		/**
		 * Checks for touch/mouse drag event type and add run event handlers.
		 * @protected
		 */
		Owl.prototype.eventsRouter = function(event) {
			var type = event.type;

			if (type === "mousedown" || type === "touchstart") {
				this.onDragStart(event);
			} else if (type === "mousemove" || type === "touchmove") {
				this.onDragMove(event);
			} else if (type === "mouseup" || type === "touchend") {
				this.onDragEnd(event);
			} else if (type === "touchcancel") {
				this.onDragEnd(event);
			}
		};

		/**
		 * Checks for touch/mouse drag options and add necessery event handlers.
		 * @protected
		 */
		Owl.prototype.internalEvents = function() {
			var isTouch = isTouchSupport(),
				isTouchIE = isTouchSupportIE();

			if (this.settings.mouseDrag){
				this.$stage.on('mousedown', $.proxy(function(event) { this.eventsRouter(event) }, this));
				this.$stage.on('dragstart', function() { return false });
				this.$stage.get(0).onselectstart = function() { return false };
			} else {
				this.$element.addClass('owl-text-select-on');
			}

			if (this.settings.touchDrag && !isTouchIE){
				this.$stage.on('touchstart touchcancel', $.proxy(function(event) { this.eventsRouter(event) }, this));
			}

			// catch transitionEnd event
			if (this.transitionEndVendor) {
				this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, false);
			}

			// responsive
			if (this.settings.responsive !== false) {
				this.on(window, 'resize', $.proxy(this.onThrottledResize, this));
			}
		};

		/**
		 * Handles touchstart/mousedown event.
		 * @protected
		 * @param {Event} event - The event arguments.
		 */
		Owl.prototype.onDragStart = function(event) {
			var ev, isTouchEvent, pageX, pageY, animatedPos;

			ev = event.originalEvent || event || window.event;

			// prevent right click
			if (ev.which === 3 || this.state.isTouch) {
				return false;
			}

			if (ev.type === 'mousedown') {
				this.$stage.addClass('owl-grab');
			}

			this.trigger('drag');
			this.drag.startTime = new Date().getTime();
			this.speed(0);
			this.state.isTouch = true;
			this.state.isScrolling = false;
			this.state.isSwiping = false;
			this.drag.distance = 0;

			pageX = getTouches(ev).x;
			pageY = getTouches(ev).y;

			// get stage position left
			this.drag.offsetX = this.$stage.position().left;
			this.drag.offsetY = this.$stage.position().top;

			if (this.settings.rtl) {
				this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width()
					+ this.settings.margin;
			}

			// catch position // ie to fix
			if (this.state.inMotion && this.support3d) {
				animatedPos = this.getTransformProperty();
				this.drag.offsetX = animatedPos;
				this.animate(animatedPos);
				this.state.inMotion = true;
			} else if (this.state.inMotion && !this.support3d) {
				this.state.inMotion = false;
				return false;
			}

			this.drag.startX = pageX - this.drag.offsetX;
			this.drag.startY = pageY - this.drag.offsetY;

			this.drag.start = pageX - this.drag.startX;
			this.drag.targetEl = ev.target || ev.srcElement;
			this.drag.updatedX = this.drag.start;

			// to do/check
			// prevent links and images dragging;
			if (this.drag.targetEl.tagName === "IMG" || this.drag.targetEl.tagName === "A") {
				this.drag.targetEl.draggable = false;
			}

			$(document).on('mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents', $.proxy(function(event) {this.eventsRouter(event)},this));
		};

		/**
		 * Handles the touchmove/mousemove events.
		 * @todo Simplify
		 * @protected
		 * @param {Event} event - The event arguments.
		 */
		Owl.prototype.onDragMove = function(event) {
			var ev, isTouchEvent, pageX, pageY, minValue, maxValue, pull;

			if (!this.state.isTouch) {
				return;
			}

			if (this.state.isScrolling) {
				return;
			}

			ev = event.originalEvent || event || window.event;

			pageX = getTouches(ev).x;
			pageY = getTouches(ev).y;

			// Drag Direction
			this.drag.currentX = pageX - this.drag.startX;
			this.drag.currentY = pageY - this.drag.startY;
			this.drag.distance = this.drag.currentX - this.drag.offsetX;

			// Check move direction
			if (this.drag.distance < 0) {
				this.state.direction = this.settings.rtl ? 'right' : 'left';
			} else if (this.drag.distance > 0) {
				this.state.direction = this.settings.rtl ? 'left' : 'right';
			}
			// Loop
			if (this.settings.loop) {
				if (this.op(this.drag.currentX, '>', this.coordinates(this.minimum())) && this.state.direction === 'right') {
					this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
				} else if (this.op(this.drag.currentX, '<', this.coordinates(this.maximum())) && this.state.direction === 'left') {
					this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
				}
			} else {
				// pull
				minValue = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
				maxValue = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
				pull = this.settings.pullDrag ? this.drag.distance / 5 : 0;
				this.drag.currentX = Math.max(Math.min(this.drag.currentX, minValue + pull), maxValue + pull);
			}

			// Lock browser if swiping horizontal

			if ((this.drag.distance > 8 || this.drag.distance < -8)) {
				if (ev.preventDefault !== undefined) {
					ev.preventDefault();
				} else {
					ev.returnValue = false;
				}
				this.state.isSwiping = true;
			}

			this.drag.updatedX = this.drag.currentX;

			// Lock Owl if scrolling
			if ((this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === false) {
				this.state.isScrolling = true;
				this.drag.updatedX = this.drag.start;
			}

			this.animate(this.drag.updatedX);
		};

		/**
		 * Handles the touchend/mouseup events.
		 * @protected
		 */
		Owl.prototype.onDragEnd = function(event) {
			var compareTimes, distanceAbs, closest;

			if (!this.state.isTouch) {
				return;
			}

			if (event.type === 'mouseup') {
				this.$stage.removeClass('owl-grab');
			}

			this.trigger('dragged');

			// prevent links and images dragging;
			this.drag.targetEl.removeAttribute("draggable");

			// remove drag event listeners

			this.state.isTouch = false;
			this.state.isScrolling = false;
			this.state.isSwiping = false;

			// to check
			if (this.drag.distance === 0 && this.state.inMotion !== true) {
				this.state.inMotion = false;
				return false;
			}

			// prevent clicks while scrolling

			this.drag.endTime = new Date().getTime();
			compareTimes = this.drag.endTime - this.drag.startTime;
			distanceAbs = Math.abs(this.drag.distance);

			// to test
			if (distanceAbs > 3 || compareTimes > 300) {
				this.removeClick(this.drag.targetEl);
			}

			closest = this.closest(this.drag.updatedX);

			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(closest);
			this.invalidate('position');
			this.update();

			// if pullDrag is off then fire transitionEnd event manually when stick
			// to border
			if (!this.settings.pullDrag && this.drag.updatedX === this.coordinates(closest)) {
				this.transitionEnd();
			}

			this.drag.distance = 0;

			$(document).off('.owl.dragEvents');
		};

		/**
		 * Attaches `preventClick` to disable link while swipping.
		 * @protected
		 * @param {HTMLElement} [target] - The target of the `click` event.
		 */
		Owl.prototype.removeClick = function(target) {
			this.drag.targetEl = target;
			$(target).on('click.preventClick', this.e._preventClick);
			// to make sure click is removed:
			window.setTimeout(function() {
				$(target).off('click.preventClick');
			}, 300);
		};

		/**
		 * Suppresses click event.
		 * @protected
		 * @param {Event} ev - The event arguments.
		 */
		Owl.prototype.preventClick = function(ev) {
			if (ev.preventDefault) {
				ev.preventDefault();
			} else {
				ev.returnValue = false;
			}
			if (ev.stopPropagation) {
				ev.stopPropagation();
			}
			$(ev.target).off('click.preventClick');
		};

		/**
		 * Catches stage position while animate (only CSS3).
		 * @protected
		 * @returns
		 */
		Owl.prototype.getTransformProperty = function() {
			var transform, matrix3d;

			transform = window.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + 'transform');
			// var transform = this.$stage.css(this.vendorName + 'transform')
			transform = transform.replace(/matrix(3d)?\(|\)/g, '').split(',');
			matrix3d = transform.length === 16;

			return matrix3d !== true ? transform[4] : transform[12];
		};

		/**
		 * Gets absolute position of the closest item for a coordinate.
		 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
		 * @protected
		 * @param {Number} coordinate - The coordinate in pixel.
		 * @return {Number} - The absolute position of the closest item.
		 */
		Owl.prototype.closest = function(coordinate) {
			var position = -1, pull = 30, width = this.width(), coordinates = this.coordinates();

			if (!this.settings.freeDrag) {
				// check closest item
				$.each(coordinates, $.proxy(function(index, value) {
					if (coordinate > value - pull && coordinate < value + pull) {
						position = index;
					} else if (this.op(coordinate, '<', value)
						&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
						position = this.state.direction === 'left' ? index + 1 : index;
					}
					return position === -1;
				}, this));
			}

			if (!this.settings.loop) {
				// non loop boundries
				if (this.op(coordinate, '>', coordinates[this.minimum()])) {
					position = coordinate = this.minimum();
				} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
					position = coordinate = this.maximum();
				}
			}

			return position;
		};

		/**
		 * Animates the stage.
		 * @public
		 * @param {Number} coordinate - The coordinate in pixels.
		 */
		Owl.prototype.animate = function(coordinate) {
			this.trigger('translate');
			this.state.inMotion = this.speed() > 0;

			if (this.support3d) {
				this.$stage.css({
					transform: 'translate3d(' + coordinate + 'px' + ',0px, 0px)',
					transition: (this.speed() / 1000) + 's'
				});
			} else if (this.state.isTouch) {
				this.$stage.css({
					left: coordinate + 'px'
				});
			} else {
				this.$stage.animate({
					left: coordinate
				}, this.speed() / 1000, this.settings.fallbackEasing, $.proxy(function() {
					if (this.state.inMotion) {
						this.transitionEnd();
					}
				}, this));
			}
		};

		/**
		 * Sets the absolute position of the current item.
		 * @public
		 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
		 * @returns {Number} - The absolute position of the current item.
		 */
		Owl.prototype.current = function(position) {
			if (position === undefined) {
				return this._current;
			}

			if (this._items.length === 0) {
				return undefined;
			}

			position = this.normalize(position);

			if (this._current !== position) {
				var event = this.trigger('change', { property: { name: 'position', value: position } });

				if (event.data !== undefined) {
					position = this.normalize(event.data);
				}

				this._current = position;

				this.invalidate('position');

				this.trigger('changed', { property: { name: 'position', value: this._current } });
			}

			return this._current;
		};

		/**
		 * Invalidates the given part of the update routine.
		 * @param {String} part - The part to invalidate.
		 */
		Owl.prototype.invalidate = function(part) {
			this._invalidated[part] = true;
		}

		/**
		 * Resets the absolute position of the current item.
		 * @public
		 * @param {Number} position - The absolute position of the new item.
		 */
		Owl.prototype.reset = function(position) {
			position = this.normalize(position);

			if (position === undefined) {
				return;
			}

			this._speed = 0;
			this._current = position;

			this.suppress([ 'translate', 'translated' ]);

			this.animate(this.coordinates(position));

			this.release([ 'translate', 'translated' ]);
		};

		/**
		 * Normalizes an absolute or a relative position for an item.
		 * @public
		 * @param {Number} position - The absolute or relative position to normalize.
		 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
		 * @returns {Number} - The normalized position.
		 */
		Owl.prototype.normalize = function(position, relative) {
			var n = (relative ? this._items.length : this._items.length + this._clones.length);

			if (!$.isNumeric(position) || n < 1) {
				return undefined;
			}

			if (this._clones.length) {
				position = ((position % n) + n) % n;
			} else {
				position = Math.max(this.minimum(relative), Math.min(this.maximum(relative), position));
			}

			return position;
		};

		/**
		 * Converts an absolute position for an item into a relative position.
		 * @public
		 * @param {Number} position - The absolute position to convert.
		 * @returns {Number} - The converted position.
		 */
		Owl.prototype.relative = function(position) {
			position = this.normalize(position);
			position = position - this._clones.length / 2;
			return this.normalize(position, true);
		};

		/**
		 * Gets the maximum position for an item.
		 * @public
		 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
		 * @returns {Number}
		 */
		Owl.prototype.maximum = function(relative) {
			var maximum, width, i = 0, coordinate,
				settings = this.settings;

			if (relative) {
				return this._items.length - 1;
			}

			if (!settings.loop && settings.center) {
				maximum = this._items.length - 1;
			} else if (!settings.loop && !settings.center) {
				maximum = this._items.length - settings.items;
			} else if (settings.loop || settings.center) {
				maximum = this._items.length + settings.items;
			} else if (settings.autoWidth || settings.merge) {
				revert = settings.rtl ? 1 : -1;
				width = this.$stage.width() - this.$element.width();
				while (coordinate = this.coordinates(i)) {
					if (coordinate * revert >= width) {
						break;
					}
					maximum = ++i;
				}
			} else {
				throw 'Can not detect maximum absolute position.'
			}

			return maximum;
		};

		/**
		 * Gets the minimum position for an item.
		 * @public
		 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
		 * @returns {Number}
		 */
		Owl.prototype.minimum = function(relative) {
			if (relative) {
				return 0;
			}

			return this._clones.length / 2;
		};

		/**
		 * Gets an item at the specified relative position.
		 * @public
		 * @param {Number} [position] - The relative position of the item.
		 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
		 */
		Owl.prototype.items = function(position) {
			if (position === undefined) {
				return this._items.slice();
			}

			position = this.normalize(position, true);
			return this._items[position];
		};

		/**
		 * Gets an item at the specified relative position.
		 * @public
		 * @param {Number} [position] - The relative position of the item.
		 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
		 */
		Owl.prototype.mergers = function(position) {
			if (position === undefined) {
				return this._mergers.slice();
			}

			position = this.normalize(position, true);
			return this._mergers[position];
		};

		/**
		 * Gets the absolute positions of clones for an item.
		 * @public
		 * @param {Number} [position] - The relative position of the item.
		 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
		 */
		Owl.prototype.clones = function(position) {
			var odd = this._clones.length / 2,
				even = odd + this._items.length,
				map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

			if (position === undefined) {
				return $.map(this._clones, function(v, i) { return map(i) });
			}

			return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
		};

		/**
		 * Sets the current animation speed.
		 * @public
		 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
		 * @returns {Number} - The current animation speed in milliseconds.
		 */
		Owl.prototype.speed = function(speed) {
			if (speed !== undefined) {
				this._speed = speed;
			}

			return this._speed;
		};

		/**
		 * Gets the coordinate of an item.
		 * @todo The name of this method is missleanding.
		 * @public
		 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
		 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
		 */
		Owl.prototype.coordinates = function(position) {
			var coordinate = null;

			if (position === undefined) {
				return $.map(this._coordinates, $.proxy(function(coordinate, index) {
					return this.coordinates(index);
				}, this));
			}

			if (this.settings.center) {
				coordinate = this._coordinates[position];
				coordinate += (this.width() - coordinate + (this._coordinates[position - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1);
			} else {
				coordinate = this._coordinates[position - 1] || 0;
			}

			return coordinate;
		};

		/**
		 * Calculates the speed for a translation.
		 * @protected
		 * @param {Number} from - The absolute position of the start item.
		 * @param {Number} to - The absolute position of the target item.
		 * @param {Number} [factor=undefined] - The time factor in milliseconds.
		 * @returns {Number} - The time in milliseconds for the translation.
		 */
		Owl.prototype.duration = function(from, to, factor) {
			return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
		};

		/**
		 * Slides to the specified item.
		 * @public
		 * @param {Number} position - The position of the item.
		 * @param {Number} [speed] - The time in milliseconds for the transition.
		 */
		Owl.prototype.to = function(position, speed) {
			if (this.settings.loop) {
				var distance = position - this.relative(this.current()),
					revert = this.current(),
					before = this.current(),
					after = this.current() + distance,
					direction = before - after < 0 ? true : false,
					items = this._clones.length + this._items.length;

				if (after < this.settings.items && direction === false) {
					revert = before + this._items.length;
					this.reset(revert);
				} else if (after >= items - this.settings.items && direction === true) {
					revert = before - this._items.length;
					this.reset(revert);
				}
				window.clearTimeout(this.e._goToLoop);
				this.e._goToLoop = window.setTimeout($.proxy(function() {
					this.speed(this.duration(this.current(), revert + distance, speed));
					this.current(revert + distance);
					this.update();
				}, this), 30);
			} else {
				this.speed(this.duration(this.current(), position, speed));
				this.current(position);
				this.update();
			}
		};

		/**
		 * Slides to the next item.
		 * @public
		 * @param {Number} [speed] - The time in milliseconds for the transition.
		 */
		Owl.prototype.next = function(speed) {
			speed = speed || false;
			this.to(this.relative(this.current()) + 1, speed);
		};

		/**
		 * Slides to the previous item.
		 * @public
		 * @param {Number} [speed] - The time in milliseconds for the transition.
		 */
		Owl.prototype.prev = function(speed) {
			speed = speed || false;
			this.to(this.relative(this.current()) - 1, speed);
		};

		/**
		 * Handles the end of an animation.
		 * @protected
		 * @param {Event} event - The event arguments.
		 */
		Owl.prototype.transitionEnd = function(event) {

			// if css2 animation then event object is undefined
			if (event !== undefined) {
				event.stopPropagation();

				// Catch only owl-stage transitionEnd event
				if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
					return false;
				}
			}

			this.state.inMotion = false;
			this.trigger('translated');
		};

		/**
		 * Gets viewport width.
		 * @protected
		 * @return {Number} - The width in pixel.
		 */
		Owl.prototype.viewport = function() {
			var width;
			if (this.options.responsiveBaseElement !== window) {
				width = $(this.options.responsiveBaseElement).width();
			} else if (window.innerWidth) {
				width = window.innerWidth;
			} else if (document.documentElement && document.documentElement.clientWidth) {
				width = document.documentElement.clientWidth;
			} else {
				throw 'Can not detect viewport width.';
			}
			return width;
		};

		/**
		 * Replaces the current content.
		 * @public
		 * @param {HTMLElement|jQuery|String} content - The new content.
		 */
		Owl.prototype.replace = function(content) {
			this.$stage.empty();
			this._items = [];

			if (content) {
				content = (content instanceof jQuery) ? content : $(content);
			}

			if (this.settings.nestedItemSelector) {
				content = content.find('.' + this.settings.nestedItemSelector);
			}

			content.filter(function() {
				return this.nodeType === 1;
			}).each($.proxy(function(index, item) {
				item = this.prepare(item);
				this.$stage.append(item);
				this._items.push(item);
				this._mergers.push(item.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
			}, this));

			this.reset($.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

			this.invalidate('items');
		};

		/**
		 * Adds an item.
		 * @todo Use `item` instead of `content` for the event arguments.
		 * @public
		 * @param {HTMLElement|jQuery|String} content - The item content to add.
		 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
		 */
		Owl.prototype.add = function(content, position) {
			position = position === undefined ? this._items.length : this.normalize(position, true);

			this.trigger('add', { content: content, position: position });

			if (this._items.length === 0 || position === this._items.length) {
				this.$stage.append(content);
				this._items.push(content);
				this._mergers.push(content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
			} else {
				this._items[position].before(content);
				this._items.splice(position, 0, content);
				this._mergers.splice(position, 0, content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
			}

			this.invalidate('items');

			this.trigger('added', { content: content, position: position });
		};

		/**
		 * Removes an item by its position.
		 * @todo Use `item` instead of `content` for the event arguments.
		 * @public
		 * @param {Number} position - The relative position of the item to remove.
		 */
		Owl.prototype.remove = function(position) {
			position = this.normalize(position, true);

			if (position === undefined) {
				return;
			}

			this.trigger('remove', { content: this._items[position], position: position });

			this._items[position].remove();
			this._items.splice(position, 1);
			this._mergers.splice(position, 1);

			this.invalidate('items');

			this.trigger('removed', { content: null, position: position });
		};

		/**
		 * Adds triggerable events.
		 * @protected
		 */
		Owl.prototype.addTriggerableEvents = function() {
			var handler = $.proxy(function(callback, event) {
				return $.proxy(function(e) {
					if (e.relatedTarget !== this) {
						this.suppress([ event ]);
						callback.apply(this, [].slice.call(arguments, 1));
						this.release([ event ]);
					}
				}, this);
			}, this);

			$.each({
				'next': this.next,
				'prev': this.prev,
				'to': this.to,
				'destroy': this.destroy,
				'refresh': this.refresh,
				'replace': this.replace,
				'add': this.add,
				'remove': this.remove
			}, $.proxy(function(event, callback) {
				this.$element.on(event + '.owl.carousel', handler(callback, event + '.owl.carousel'));
			}, this));

		};

		/**
		 * Watches the visibility of the carousel element.
		 * @protected
		 */
		Owl.prototype.watchVisibility = function() {

			// test on zepto
			if (!isElVisible(this.$element.get(0))) {
				this.$element.addClass('owl-hidden');
				window.clearInterval(this.e._checkVisibile);
				this.e._checkVisibile = window.setInterval($.proxy(checkVisible, this), 500);
			}

			function isElVisible(el) {
				return el.offsetWidth > 0 && el.offsetHeight > 0;
			}

			function checkVisible() {
				if (isElVisible(this.$element.get(0))) {
					this.$element.removeClass('owl-hidden');
					this.refresh();
					window.clearInterval(this.e._checkVisibile);
				}
			}
		};

		/**
		 * Preloads images with auto width.
		 * @protected
		 * @todo Still to test
		 */
		Owl.prototype.preloadAutoWidthImages = function(imgs) {
			var loaded, that, $el, img;

			loaded = 0;
			that = this;
			imgs.each(function(i, el) {
				$el = $(el);
				img = new Image();

				img.onload = function() {
					loaded++;
					$el.attr('src', img.src);
					$el.css('opacity', 1);
					if (loaded >= imgs.length) {
						that.state.imagesLoaded = true;
						that.initialize();
					}
				};

				img.src = $el.attr('src') || $el.attr('data-src') || $el.attr('data-src-retina');
			});
		};

		/**
		 * Destroys the carousel.
		 * @public
		 */
		Owl.prototype.destroy = function() {

			if (this.$element.hasClass(this.settings.themeClass)) {
				this.$element.removeClass(this.settings.themeClass);
			}

			if (this.settings.responsive !== false) {
				$(window).off('resize.owl.carousel');
			}

			if (this.transitionEndVendor) {
				this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
			}

			for ( var i in this._plugins) {
				this._plugins[i].destroy();
			}

			if (this.settings.mouseDrag || this.settings.touchDrag) {
				this.$stage.off('mousedown touchstart touchcancel');
				$(document).off('.owl.dragEvents');
				this.$stage.get(0).onselectstart = function() {};
				this.$stage.off('dragstart', function() { return false });
			}

			// remove event handlers in the ".owl.carousel" namespace
			this.$element.off('.owl');

			this.$stage.children('.cloned').remove();
			this.e = null;
			this.$element.removeData('owlCarousel');

			this.$stage.children().contents().unwrap();
			this.$stage.children().unwrap();
			this.$stage.unwrap();
		};

		/**
		 * Operators to calculate right-to-left and left-to-right.
		 * @protected
		 * @param {Number} [a] - The left side operand.
		 * @param {String} [o] - The operator.
		 * @param {Number} [b] - The right side operand.
		 */
		Owl.prototype.op = function(a, o, b) {
			var rtl = this.settings.rtl;
			switch (o) {
				case '<':
					return rtl ? a > b : a < b;
				case '>':
					return rtl ? a < b : a > b;
				case '>=':
					return rtl ? a <= b : a >= b;
				case '<=':
					return rtl ? a >= b : a <= b;
				default:
					break;
			}
		};

		/**
		 * Attaches to an internal event.
		 * @protected
		 * @param {HTMLElement} element - The event source.
		 * @param {String} event - The event name.
		 * @param {Function} listener - The event handler to attach.
		 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
		 */
		Owl.prototype.on = function(element, event, listener, capture) {
			if (element.addEventListener) {
				element.addEventListener(event, listener, capture);
			} else if (element.attachEvent) {
				element.attachEvent('on' + event, listener);
			}
		};

		/**
		 * Detaches from an internal event.
		 * @protected
		 * @param {HTMLElement} element - The event source.
		 * @param {String} event - The event name.
		 * @param {Function} listener - The attached event handler to detach.
		 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
		 */
		Owl.prototype.off = function(element, event, listener, capture) {
			if (element.removeEventListener) {
				element.removeEventListener(event, listener, capture);
			} else if (element.detachEvent) {
				element.detachEvent('on' + event, listener);
			}
		};

		/**
		 * Triggers an public event.
		 * @protected
		 * @param {String} name - The event name.
		 * @param {*} [data=null] - The event data.
		 * @param {String} [namespace=.owl.carousel] - The event namespace.
		 * @returns {Event} - The event arguments.
		 */
		Owl.prototype.trigger = function(name, data, namespace) {
			var status = {
				item: { count: this._items.length, index: this.current() }
			}, handler = $.camelCase(
				$.grep([ 'on', name, namespace ], function(v) { return v })
					.join('-').toLowerCase()
			), event = $.Event(
				[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
				$.extend({ relatedTarget: this }, status, data)
			);

			if (!this._supress[name]) {
				$.each(this._plugins, function(name, plugin) {
					if (plugin.onTrigger) {
						plugin.onTrigger(event);
					}
				});

				this.$element.trigger(event);

				if (this.settings && typeof this.settings[handler] === 'function') {
					this.settings[handler].apply(this, event);
				}
			}

			return event;
		};

		/**
		 * Suppresses events.
		 * @protected
		 * @param {Array.<String>} events - The events to suppress.
		 */
		Owl.prototype.suppress = function(events) {
			$.each(events, $.proxy(function(index, event) {
				this._supress[event] = true;
			}, this));
		}

		/**
		 * Releases suppressed events.
		 * @protected
		 * @param {Array.<String>} events - The events to release.
		 */
		Owl.prototype.release = function(events) {
			$.each(events, $.proxy(function(index, event) {
				delete this._supress[event];
			}, this));
		}

		/**
		 * Checks the availability of some browser features.
		 * @protected
		 */
		Owl.prototype.browserSupport = function() {
			this.support3d = isPerspective();

			if (this.support3d) {
				this.transformVendor = isTransform();

				// take transitionend event name by detecting transition
				var endVendors = [ 'transitionend', 'webkitTransitionEnd', 'transitionend', 'oTransitionEnd' ];
				this.transitionEndVendor = endVendors[isTransition()];

				// take vendor name from transform name
				this.vendorName = this.transformVendor.replace(/Transform/i, '');
				this.vendorName = this.vendorName !== '' ? '-' + this.vendorName.toLowerCase() + '-' : '';
			}

			this.state.orientation = window.orientation;
		};

		/**
		 * Get touch/drag coordinats.
		 * @private
		 * @param {event} - mousedown/touchstart event
		 * @returns {object} - Contains X and Y of current mouse/touch position
		 */

		function getTouches(event) {
			if (event.touches !== undefined) {
				return {
					x: event.touches[0].pageX,
					y: event.touches[0].pageY
				};
			}

			if (event.touches === undefined) {
				if (event.pageX !== undefined) {
					return {
						x: event.pageX,
						y: event.pageY
					};
				}

			if (event.pageX === undefined) {
				return {
						x: event.clientX,
						y: event.clientY
					};
				}
			}
		}

		/**
		 * Checks for CSS support.
		 * @private
		 * @param {Array} array - The CSS properties to check for.
		 * @returns {Array} - Contains the supported CSS property name and its index or `false`.
		 */
		function isStyleSupported(array) {
			var p, s, fake = document.createElement('div'), list = array;
			for (p in list) {
				s = list[p];
				if (typeof fake.style[s] !== 'undefined') {
					fake = null;
					return [ s, p ];
				}
			}
			return [ false ];
		}

		/**
		 * Checks for CSS transition support.
		 * @private
		 * @todo Realy bad design
		 * @returns {Number}
		 */
		function isTransition() {
			return isStyleSupported([ 'transition', 'WebkitTransition', 'MozTransition', 'OTransition' ])[1];
		}

		/**
		 * Checks for CSS transform support.
		 * @private
		 * @returns {String} The supported property name or false.
		 */
		function isTransform() {
			return isStyleSupported([ 'transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform' ])[0];
		}

		/**
		 * Checks for CSS perspective support.
		 * @private
		 * @returns {String} The supported property name or false.
		 */
		function isPerspective() {
			return isStyleSupported([ 'perspective', 'webkitPerspective', 'MozPerspective', 'OPerspective', 'MsPerspective' ])[0];
		}

		/**
		 * Checks wether touch is supported or not.
		 * @private
		 * @returns {Boolean}
		 */
		function isTouchSupport() {
			return 'ontouchstart' in window || !!(navigator.msMaxTouchPoints);
		}

		/**
		 * Checks wether touch is supported or not for IE.
		 * @private
		 * @returns {Boolean}
		 */
		function isTouchSupportIE() {
			return window.navigator.msPointerEnabled;
		}

		/**
		 * The jQuery Plugin for the Owl Carousel
		 * @public
		 */
		$.fn.owlCarousel = function(options) {
			return this.each(function() {
				if (!$(this).data('owlCarousel')) {
					$(this).data('owlCarousel', new Owl(this, options));
				}
			});
		};

		/**
		 * The constructor for the jQuery Plugin
		 * @public
		 */
		$.fn.owlCarousel.Constructor = Owl;

	})(window.Zepto || window.jQuery, window, document);

	/**
	 * Lazy Plugin
	 * @version 2.0.0
	 * @author Bartosz Wojciechowski
	 * @license The MIT License (MIT)
	 */
	;(function($, window, document, undefined) {

		/**
		 * Creates the lazy plugin.
		 * @class The Lazy Plugin
		 * @param {Owl} carousel - The Owl Carousel
		 */
		var Lazy = function(carousel) {

			/**
			 * Reference to the core.
			 * @protected
			 * @type {Owl}
			 */
			this._core = carousel;

			/**
			 * Already loaded items.
			 * @protected
			 * @type {Array.<jQuery>}
			 */
			this._loaded = [];

			/**
			 * Event handlers.
			 * @protected
			 * @type {Object}
			 */
			this._handlers = {
				'initialized.owl.carousel change.owl.carousel': $.proxy(function(e) {
					if (!e.namespace) {
						return;
					}

					if (!this._core.settings || !this._core.settings.lazyLoad) {
						return;
					}

					if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
						var settings = this._core.settings,
							n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
							i = ((settings.center && n * -1) || 0),
							position = ((e.property && e.property.value) || this._core.current()) + i,
							clones = this._core.clones().length,
							load = $.proxy(function(i, v) { this.load(v) }, this);

						while (i++ < n) {
							this.load(clones / 2 + this._core.relative(position));
							clones && $.each(this._core.clones(this._core.relative(position++)), load);
						}
					}
				}, this)
			};

			// set the default options
			this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

			// register event handler
			this._core.$element.on(this._handlers);
		}

		/**
		 * Default options.
		 * @public
		 */
		Lazy.Defaults = {
			lazyLoad: false
		}

		/**
		 * Loads all resources of an item at the specified position.
		 * @param {Number} position - The absolute position of the item.
		 * @protected
		 */
		Lazy.prototype.load = function(position) {
			var $item = this._core.$stage.children().eq(position),
				$elements = $item && $item.find('.owl-lazy');

			if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
				return;
			}

			$elements.each($.proxy(function(index, element) {
				var $element = $(element), image,
					url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

				this._core.trigger('load', { element: $element, url: url }, 'lazy');

				if ($element.is('img')) {
					$element.one('load.owl.lazy', $.proxy(function() {
						$element.css('opacity', 1);
						this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
					}, this)).attr('src', url);
				} else {
					image = new Image();
					image.onload = $.proxy(function() {
						$element.css({
							'background-image': 'url(' + url + ')',
							'opacity': '1'
						});
						this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
					}, this);
					image.src = url;
				}
			}, this));

			this._loaded.push($item.get(0));
		}

		/**
		 * Destroys the plugin.
		 * @public
		 */
		Lazy.prototype.destroy = function() {
			var handler, property;

			for (handler in this.handlers) {
				this._core.$element.off(handler, this.handlers[handler]);
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		}

		$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

	})(window.Zepto || window.jQuery, window, document);

	/**
	 * AutoHeight Plugin
	 * @version 2.0.0
	 * @author Bartosz Wojciechowski
	 * @license The MIT License (MIT)
	 */
	;(function($, window, document, undefined) {

		/**
		 * Creates the auto height plugin.
		 * @class The Auto Height Plugin
		 * @param {Owl} carousel - The Owl Carousel
		 */
		var AutoHeight = function(carousel) {
			/**
			 * Reference to the core.
			 * @protected
			 * @type {Owl}
			 */
			this._core = carousel;

			/**
			 * All event handlers.
			 * @protected
			 * @type {Object}
			 */
			this._handlers = {
				'initialized.owl.carousel': $.proxy(function() {
					if (this._core.settings.autoHeight) {
						this.update();
					}
				}, this),
				'changed.owl.carousel': $.proxy(function(e) {
					if (this._core.settings.autoHeight && e.property.name == 'position'){
						this.update();
					}
				}, this),
				'loaded.owl.lazy': $.proxy(function(e) {
					if (this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass)
						=== this._core.$stage.children().eq(this._core.current())) {
						this.update();
					}
				}, this)
			};

			// set default options
			this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

			// register event handlers
			this._core.$element.on(this._handlers);
		};

		/**
		 * Default options.
		 * @public
		 */
		AutoHeight.Defaults = {
			autoHeight: false,
			autoHeightClass: 'owl-height'
		};

		/**
		 * Updates the view.
		 */
		AutoHeight.prototype.update = function() {
			this._core.$stage.parent()
				.height(this._core.$stage.children().eq(this._core.current()).height())
				.addClass(this._core.settings.autoHeightClass);
		};

		AutoHeight.prototype.destroy = function() {
			var handler, property;

			for (handler in this._handlers) {
				this._core.$element.off(handler, this._handlers[handler]);
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		};

		$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

	})(window.Zepto || window.jQuery, window, document);

	/**
	 * Video Plugin
	 * @version 2.0.0
	 * @author Bartosz Wojciechowski
	 * @license The MIT License (MIT)
	 */
	;(function($, window, document, undefined) {

		/**
		 * Creates the video plugin.
		 * @class The Video Plugin
		 * @param {Owl} carousel - The Owl Carousel
		 */
		var Video = function(carousel) {
			/**
			 * Reference to the core.
			 * @protected
			 * @type {Owl}
			 */
			this._core = carousel;

			/**
			 * Cache all video URLs.
			 * @protected
			 * @type {Object}
			 */
			this._videos = {};

			/**
			 * Current playing item.
			 * @protected
			 * @type {jQuery}
			 */
			this._playing = null;

			/**
			 * Whether this is in fullscreen or not.
			 * @protected
			 * @type {Boolean}
			 */
			this._fullscreen = false;

			/**
			 * All event handlers.
			 * @protected
			 * @type {Object}
			 */
			this._handlers = {
				'resize.owl.carousel': $.proxy(function(e) {
					if (this._core.settings.video && !this.isInFullScreen()) {
						e.preventDefault();
					}
				}, this),
				'refresh.owl.carousel changed.owl.carousel': $.proxy(function(e) {
					if (this._playing) {
						this.stop();
					}
				}, this),
				'prepared.owl.carousel': $.proxy(function(e) {
					var $element = $(e.content).find('.owl-video');
					if ($element.length) {
						$element.css('display', 'none');
						this.fetch($element, $(e.content));
					}
				}, this)
			};

			// set default options
			this._core.options = $.extend({}, Video.Defaults, this._core.options);

			// register event handlers
			this._core.$element.on(this._handlers);

			this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
				this.play(e);
			}, this));
		};

		/**
		 * Default options.
		 * @public
		 */
		Video.Defaults = {
			video: false,
			videoHeight: false,
			videoWidth: false
		};

		/**
		 * Gets the video ID and the type (YouTube/Vimeo only).
		 * @protected
		 * @param {jQuery} target - The target containing the video data.
		 * @param {jQuery} item - The item containing the video.
		 */
		Video.prototype.fetch = function(target, item) {

			var type = target.attr('data-vimeo-id') ? 'vimeo' : 'youtube',
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');

			if (url) {
				id = url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

				if (id[3].indexOf('youtu') > -1) {
					type = 'youtube';
				} else if (id[3].indexOf('vimeo') > -1) {
					type = 'vimeo';
				} else {
					throw new Error('Video URL not supported.');
				}
				id = id[6];
			} else {
				throw new Error('Missing video URL.');
			}

			this._videos[url] = {
				type: type,
				id: id,
				width: width,
				height: height
			};

			item.attr('data-video', url);

			this.thumbnail(target, this._videos[url]);
		};

		/**
		 * Creates video thumbnail.
		 * @protected
		 * @param {jQuery} target - The target containing the video data.
		 * @param {Object} info - The video info object.
		 * @see `fetch`
		 */
		Video.prototype.thumbnail = function(target, video) {

			var tnLink,
				icon,
				path,
				dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
				customTn = target.find('img'),
				srcType = 'src',
				lazyClass = '',
				settings = this._core.settings,
				create = function(path) {
					icon = '<div class="owl-video-play-icon"></div>';

					if (settings.lazyLoad) {
						tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
					} else {
						tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
					}
					target.after(tnLink);
					target.after(icon);
				};

			// wrap video content into owl-video-wrapper div
			target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

			if (this._core.settings.lazyLoad) {
				srcType = 'data-src';
				lazyClass = 'owl-lazy';
			}

			// custom thumbnail
			if (customTn.length) {
				create(customTn.attr(srcType));
				customTn.remove();
				return false;
			}

			if (video.type === 'youtube') {
				path = "http://img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
				create(path);
			} else if (video.type === 'vimeo') {
				$.ajax({
					type: 'GET',
					url: 'http://vimeo.com/api/v2/video/' + video.id + '.json',
					jsonp: 'callback',
					dataType: 'jsonp',
					success: function(data) {
						path = data[0].thumbnail_large;
						create(path);
					}
				});
			}
		};

		/**
		 * Stops the current video.
		 * @public
		 */
		Video.prototype.stop = function() {
			this._core.trigger('stop', null, 'video');
			this._playing.find('.owl-video-frame').remove();
			this._playing.removeClass('owl-video-playing');
			this._playing = null;
		};

		/**
		 * Starts the current video.
		 * @public
		 * @param {Event} ev - The event arguments.
		 */
		Video.prototype.play = function(ev) {
			this._core.trigger('play', null, 'video');

			if (this._playing) {
				this.stop();
			}

			var target = $(ev.target || ev.srcElement),
				item = target.closest('.' + this._core.settings.itemClass),
				video = this._videos[item.attr('data-video')],
				width = video.width || '100%',
				height = video.height || this._core.$stage.height(),
				html, wrap;

			if (video.type === 'youtube') {
				html = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/'
					+ video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
			} else if (video.type === 'vimeo') {
				html = '<iframe src="http://player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + width
					+ '" height="' + height
					+ '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
			}

			item.addClass('owl-video-playing');
			this._playing = item;

			wrap = $('<div style="height:' + height + 'px; width:' + width + 'px" class="owl-video-frame">'
				+ html + '</div>');
			target.after(wrap);
		};

		/**
		 * Checks whether an video is currently in full screen mode or not.
		 * @todo Bad style because looks like a readonly method but changes members.
		 * @protected
		 * @returns {Boolean}
		 */
		Video.prototype.isInFullScreen = function() {

			// if Vimeo Fullscreen mode
			var element = document.fullscreenElement || document.mozFullScreenElement
				|| document.webkitFullscreenElement;

			if (element && $(element).parent().hasClass('owl-video-frame')) {
				this._core.speed(0);
				this._fullscreen = true;
			}

			if (element && this._fullscreen && this._playing) {
				return false;
			}

			// comming back from fullscreen
			if (this._fullscreen) {
				this._fullscreen = false;
				return false;
			}

			// check full screen mode and window orientation
			if (this._playing) {
				if (this._core.state.orientation !== window.orientation) {
					this._core.state.orientation = window.orientation;
					return false;
				}
			}

			return true;
		};

		/**
		 * Destroys the plugin.
		 */
		Video.prototype.destroy = function() {
			var handler, property;

			this._core.$element.off('click.owl.video');

			for (handler in this._handlers) {
				this._core.$element.off(handler, this._handlers[handler]);
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		};

		$.fn.owlCarousel.Constructor.Plugins.Video = Video;

	})(window.Zepto || window.jQuery, window, document);

	/**
	 * Animate Plugin
	 * @version 2.0.0
	 * @author Bartosz Wojciechowski
	 * @license The MIT License (MIT)
	 */
	;(function($, window, document, undefined) {

		/**
		 * Creates the animate plugin.
		 * @class The Navigation Plugin
		 * @param {Owl} scope - The Owl Carousel
		 */
		var Animate = function(scope) {
			this.core = scope;
			this.core.options = $.extend({}, Animate.Defaults, this.core.options);
			this.swapping = true;
			this.previous = undefined;
			this.next = undefined;

			this.handlers = {
				'change.owl.carousel': $.proxy(function(e) {
					if (e.property.name == 'position') {
						this.previous = this.core.current();
						this.next = e.property.value;
					}
				}, this),
				'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
					this.swapping = e.type == 'translated';
				}, this),
				'translate.owl.carousel': $.proxy(function(e) {
					if (this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
						this.swap();
					}
				}, this)
			};

			this.core.$element.on(this.handlers);
		};

		/**
		 * Default options.
		 * @public
		 */
		Animate.Defaults = {
			animateOut: false,
			animateIn: false
		};

		/**
		 * Toggles the animation classes whenever an translations starts.
		 * @protected
		 * @returns {Boolean|undefined}
		 */
		Animate.prototype.swap = function() {

			if (this.core.settings.items !== 1 || !this.core.support3d) {
				return;
			}

			this.core.speed(0);

			var left,
				clear = $.proxy(this.clear, this),
				previous = this.core.$stage.children().eq(this.previous),
				next = this.core.$stage.children().eq(this.next),
				incoming = this.core.settings.animateIn,
				outgoing = this.core.settings.animateOut;

			if (this.core.current() === this.previous) {
				return;
			}

			if (outgoing) {
				left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
				previous.css( { 'left': left + 'px' } )
					.addClass('animated owl-animated-out')
					.addClass(outgoing)
					.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
			}

			if (incoming) {
				next.addClass('animated owl-animated-in')
					.addClass(incoming)
					.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
			}
		};

		Animate.prototype.clear = function(e) {
			$(e.target).css( { 'left': '' } )
				.removeClass('animated owl-animated-out owl-animated-in')
				.removeClass(this.core.settings.animateIn)
				.removeClass(this.core.settings.animateOut);
			this.core.transitionEnd();
		}

		/**
		 * Destroys the plugin.
		 * @public
		 */
		Animate.prototype.destroy = function() {
			var handler, property;

			for (handler in this.handlers) {
				this.core.$element.off(handler, this.handlers[handler]);
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		};

		$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

	})(window.Zepto || window.jQuery, window, document);

	/**
	 * Autoplay Plugin
	 * @version 2.0.0
	 * @author Bartosz Wojciechowski
	 * @license The MIT License (MIT)
	 */
	;(function($, window, document, undefined) {

		/**
		 * Creates the autoplay plugin.
		 * @class The Autoplay Plugin
		 * @param {Owl} scope - The Owl Carousel
		 */
		var Autoplay = function(scope) {
			this.core = scope;
			this.core.options = $.extend({}, Autoplay.Defaults, this.core.options);

			this.handlers = {
				'translated.owl.carousel refreshed.owl.carousel': $.proxy(function() {
					this.autoplay();
				}, this),
				'play.owl.autoplay': $.proxy(function(e, t, s) {
					this.play(t, s);
				}, this),
				'stop.owl.autoplay': $.proxy(function() {
					this.stop();
				}, this),
				'mouseover.owl.autoplay': $.proxy(function() {
					if (this.core.settings.autoplayHoverPause) {
						this.pause();
					}
				}, this),
				'mouseleave.owl.autoplay': $.proxy(function() {
					if (this.core.settings.autoplayHoverPause) {
						this.autoplay();
					}
				}, this)
			};

			this.core.$element.on(this.handlers);
		};

		/**
		 * Default options.
		 * @public
		 */
		Autoplay.Defaults = {
			autoplay: false,
			autoplayTimeout: 5000,
			autoplayHoverPause: false,
			autoplaySpeed: false
		};

		/**
		 * @protected
		 * @todo Must be documented.
		 */
		Autoplay.prototype.autoplay = function() {
			if (this.core.settings.autoplay && !this.core.state.videoPlay) {
				window.clearInterval(this.interval);

				this.interval = window.setInterval($.proxy(function() {
					this.play();
				}, this), this.core.settings.autoplayTimeout);
			} else {
				window.clearInterval(this.interval);
			}
		};

		/**
		 * Starts the autoplay.
		 * @public
		 * @param {Number} [timeout] - ...
		 * @param {Number} [speed] - ...
		 * @returns {Boolean|undefined} - ...
		 * @todo Must be documented.
		 */
		Autoplay.prototype.play = function(timeout, speed) {
			// if tab is inactive - doesnt work in <IE10
			if (document.hidden === true) {
				return;
			}

			if (this.core.state.isTouch || this.core.state.isScrolling
				|| this.core.state.isSwiping || this.core.state.inMotion) {
				return;
			}

			if (this.core.settings.autoplay === false) {
				window.clearInterval(this.interval);
				return;
			}

			this.core.next(this.core.settings.autoplaySpeed);
		};

		/**
		 * Stops the autoplay.
		 * @public
		 */
		Autoplay.prototype.stop = function() {
			window.clearInterval(this.interval);
		};

		/**
		 * Pauses the autoplay.
		 * @public
		 */
		Autoplay.prototype.pause = function() {
			window.clearInterval(this.interval);
		};

		/**
		 * Destroys the plugin.
		 */
		Autoplay.prototype.destroy = function() {
			var handler, property;

			window.clearInterval(this.interval);

			for (handler in this.handlers) {
				this.core.$element.off(handler, this.handlers[handler]);
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		};

		$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

	})(window.Zepto || window.jQuery, window, document);

	/**
	 * Navigation Plugin
	 * @version 2.0.0
	 * @author Artus Kolanowski
	 * @license The MIT License (MIT)
	 */
	;(function($, window, document, undefined) {
		'use strict';

		/**
		 * Creates the navigation plugin.
		 * @class The Navigation Plugin
		 * @param {Owl} carousel - The Owl Carousel.
		 */
		var Navigation = function(carousel) {
			/**
			 * Reference to the core.
			 * @protected
			 * @type {Owl}
			 */
			this._core = carousel;

			/**
			 * Indicates whether the plugin is initialized or not.
			 * @protected
			 * @type {Boolean}
			 */
			this._initialized = false;

			/**
			 * The current paging indexes.
			 * @protected
			 * @type {Array}
			 */
			this._pages = [];

			/**
			 * All DOM elements of the user interface.
			 * @protected
			 * @type {Object}
			 */
			this._controls = {};

			/**
			 * Markup for an indicator.
			 * @protected
			 * @type {Array.<String>}
			 */
			this._templates = [];

			/**
			 * The carousel element.
			 * @type {jQuery}
			 */
			this.$element = this._core.$element;

			/**
			 * Overridden methods of the carousel.
			 * @protected
			 * @type {Object}
			 */
			this._overrides = {
				next: this._core.next,
				prev: this._core.prev,
				to: this._core.to
			};

			/**
			 * All event handlers.
			 * @protected
			 * @type {Object}
			 */
			this._handlers = {
				'prepared.owl.carousel': $.proxy(function(e) {
					if (this._core.settings.dotsData) {
						this._templates.push($(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
					}
				}, this),
				'add.owl.carousel': $.proxy(function(e) {
					if (this._core.settings.dotsData) {
						this._templates.splice(e.position, 0, $(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
					}
				}, this),
				'remove.owl.carousel prepared.owl.carousel': $.proxy(function(e) {
					if (this._core.settings.dotsData) {
						this._templates.splice(e.position, 1);
					}
				}, this),
				'change.owl.carousel': $.proxy(function(e) {
					if (e.property.name == 'position') {
						if (!this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
							var current = this._core.current(),
								maximum = this._core.maximum(),
								minimum = this._core.minimum();
							e.data = e.property.value > maximum
								? current >= maximum ? minimum : maximum
								: e.property.value < minimum ? maximum : e.property.value;
						}
					}
				}, this),
				'changed.owl.carousel': $.proxy(function(e) {
					if (e.property.name == 'position') {
						this.draw();
					}
				}, this),
				'refreshed.owl.carousel': $.proxy(function() {
					if (!this._initialized) {
						this.initialize();
						this._initialized = true;
					}
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}, this)
			};

			// set default options
			this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

			// register event handlers
			this.$element.on(this._handlers);
		}

		/**
		 * Default options.
		 * @public
		 * @todo Rename `slideBy` to `navBy`
		 */
		Navigation.Defaults = {
			nav: false,
			navRewind: true,
			navText: [ 'prev', 'next' ],
			navSpeed: false,
			navElement: 'div',
			navContainer: false,
			navContainerClass: 'owl-nav',
			navClass: [ 'owl-prev', 'owl-next' ],
			slideBy: 1,
			dotClass: 'owl-dot',
			dotsClass: 'owl-dots',
			dots: true,
			dotsEach: false,
			dotData: false,
			dotsSpeed: false,
			dotsContainer: false,
			controlsClass: 'owl-controls'
		}

		/**
		 * Initializes the layout of the plugin and extends the carousel.
		 * @protected
		 */
		Navigation.prototype.initialize = function() {
			var $container, override,
				options = this._core.settings;

			// create the indicator template
			if (!options.dotsData) {
				this._templates = [ $('<div>')
					.addClass(options.dotClass)
					.append($('<span>'))
					.prop('outerHTML') ];
			}

			// create controls container if needed
			if (!options.navContainer || !options.dotsContainer) {
				this._controls.$container = $('<div>')
					.addClass(options.controlsClass)
					.appendTo(this.$element);
			}

			// create DOM structure for absolute navigation
			this._controls.$indicators = options.dotsContainer ? $(options.dotsContainer)
				: $('<div>').hide().addClass(options.dotsClass).appendTo(this._controls.$container);

			this._controls.$indicators.on('click', 'div', $.proxy(function(e) {
				var index = $(e.target).parent().is(this._controls.$indicators)
					? $(e.target).index() : $(e.target).parent().index();

				e.preventDefault();

				this.to(index, options.dotsSpeed);
			}, this));

			// create DOM structure for relative navigation
			$container = options.navContainer ? $(options.navContainer)
				: $('<div>').addClass(options.navContainerClass).prependTo(this._controls.$container);

			this._controls.$next = $('<' + options.navElement + '>');
			this._controls.$previous = this._controls.$next.clone();

			this._controls.$previous
				.addClass(options.navClass[0])
				.html(options.navText[0])
				.hide()
				.prependTo($container)
				.on('click', $.proxy(function(e) {
					this.prev(options.navSpeed);
				}, this));
			this._controls.$next
				.addClass(options.navClass[1])
				.html(options.navText[1])
				.hide()
				.appendTo($container)
				.on('click', $.proxy(function(e) {
					this.next(options.navSpeed);
				}, this));

			// override public methods of the carousel
			for (override in this._overrides) {
				this._core[override] = $.proxy(this[override], this);
			}
		}

		/**
		 * Destroys the plugin.
		 * @protected
		 */
		Navigation.prototype.destroy = function() {
			var handler, control, property, override;

			for (handler in this._handlers) {
				this.$element.off(handler, this._handlers[handler]);
			}
			for (control in this._controls) {
				this._controls[control].remove();
			}
			for (override in this.overides) {
				this._core[override] = this._overrides[override];
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		}

		/**
		 * Updates the internal state.
		 * @protected
		 */
		Navigation.prototype.update = function() {
			var i, j, k,
				options = this._core.settings,
				lower = this._core.clones().length / 2,
				upper = lower + this._core.items().length,
				size = options.center || options.autoWidth || options.dotData
					? 1 : options.dotsEach || options.items;

			if (options.slideBy !== 'page') {
				options.slideBy = Math.min(options.slideBy, options.items);
			}

			if (options.dots || options.slideBy == 'page') {
				this._pages = [];

				for (i = lower, j = 0, k = 0; i < upper; i++) {
					if (j >= size || j === 0) {
						this._pages.push({
							start: i - lower,
							end: i - lower + size - 1
						});
						j = 0, ++k;
					}
					j += this._core.mergers(this._core.relative(i));
				}
			}
		}

		/**
		 * Draws the user interface.
		 * @todo The option `dotData` wont work.
		 * @protected
		 */
		Navigation.prototype.draw = function() {
			var difference, i, html = '',
				options = this._core.settings,
				$items = this._core.$stage.children(),
				index = this._core.relative(this._core.current());

			if (options.nav && !options.loop && !options.navRewind) {
				this._controls.$previous.toggleClass('disabled', index <= 0);
				this._controls.$next.toggleClass('disabled', index >= this._core.maximum());
			}

			this._controls.$previous.toggle(options.nav);
			this._controls.$next.toggle(options.nav);

			if (options.dots) {
				difference = this._pages.length - this._controls.$indicators.children().length;

				if (options.dotData && difference !== 0) {
					for (i = 0; i < this._controls.$indicators.children().length; i++) {
						html += this._templates[this._core.relative(i)];
					}
					this._controls.$indicators.html(html);
				} else if (difference > 0) {
					html = new Array(difference + 1).join(this._templates[0]);
					this._controls.$indicators.append(html);
				} else if (difference < 0) {
					this._controls.$indicators.children().slice(difference).remove();
				}

				this._controls.$indicators.find('.active').removeClass('active');
				this._controls.$indicators.children().eq($.inArray(this.current(), this._pages)).addClass('active');
			}

			this._controls.$indicators.toggle(options.dots);
		}

		/**
		 * Extends event data.
		 * @protected
		 * @param {Event} event - The event object which gets thrown.
		 */
		Navigation.prototype.onTrigger = function(event) {
			var settings = this._core.settings;

			event.page = {
				index: $.inArray(this.current(), this._pages),
				count: this._pages.length,
				size: settings && (settings.center || settings.autoWidth || settings.dotData
					? 1 : settings.dotsEach || settings.items)
			};
		}

		/**
		 * Gets the current page position of the carousel.
		 * @protected
		 * @returns {Number}
		 */
		Navigation.prototype.current = function() {
			var index = this._core.relative(this._core.current());
			return $.grep(this._pages, function(o) {
				return o.start <= index && o.end >= index;
			}).pop();
		}

		/**
		 * Gets the current succesor/predecessor position.
		 * @protected
		 * @returns {Number}
		 */
		Navigation.prototype.getPosition = function(successor) {
			var position, length,
				options = this._core.settings;

			if (options.slideBy == 'page') {
				position = $.inArray(this.current(), this._pages);
				length = this._pages.length;
				successor ? ++position : --position;
				position = this._pages[((position % length) + length) % length].start;
			} else {
				position = this._core.relative(this._core.current());
				length = this._core.items().length;
				successor ? position += options.slideBy : position -= options.slideBy;
			}
			return position;
		}

		/**
		 * Slides to the next item or page.
		 * @public
		 * @param {Number} [speed=false] - The time in milliseconds for the transition.
		 */
		Navigation.prototype.next = function(speed) {
			$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
		}

		/**
		 * Slides to the previous item or page.
		 * @public
		 * @param {Number} [speed=false] - The time in milliseconds for the transition.
		 */
		Navigation.prototype.prev = function(speed) {
			$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
		}

		/**
		 * Slides to the specified item or page.
		 * @public
		 * @param {Number} position - The position of the item or page.
		 * @param {Number} [speed] - The time in milliseconds for the transition.
		 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
		 */
		Navigation.prototype.to = function(position, speed, standard) {
			var length;

			if (!standard) {
				length = this._pages.length;
				$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
			} else {
				$.proxy(this._overrides.to, this._core)(position, speed);
			}
		}

		$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

	})(window.Zepto || window.jQuery, window, document);

	/**
	 * Hash Plugin
	 * @version 2.0.0
	 * @author Artus Kolanowski
	 * @license The MIT License (MIT)
	 */
	;(function($, window, document, undefined) {
		'use strict';

		/**
		 * Creates the hash plugin.
		 * @class The Hash Plugin
		 * @param {Owl} carousel - The Owl Carousel
		 */
		var Hash = function(carousel) {
			/**
			 * Reference to the core.
			 * @protected
			 * @type {Owl}
			 */
			this._core = carousel;

			/**
			 * Hash table for the hashes.
			 * @protected
			 * @type {Object}
			 */
			this._hashes = {};

			/**
			 * The carousel element.
			 * @type {jQuery}
			 */
			this.$element = this._core.$element;

			/**
			 * All event handlers.
			 * @protected
			 * @type {Object}
			 */
			this._handlers = {
				'initialized.owl.carousel': $.proxy(function() {
					if (this._core.settings.startPosition == 'URLHash') {
						$(window).trigger('hashchange.owl.navigation');
					}
				}, this),
				'prepared.owl.carousel': $.proxy(function(e) {
					var hash = $(e.content).find('[data-hash]').andSelf('[data-hash]').attr('data-hash');
					this._hashes[hash] = e.content;
				}, this)
			};

			// set default options
			this._core.options = $.extend({}, Hash.Defaults, this._core.options);

			// register the event handlers
			this.$element.on(this._handlers);

			// register event listener for hash navigation
			$(window).on('hashchange.owl.navigation', $.proxy(function() {
				var hash = window.location.hash.substring(1),
					items = this._core.$stage.children(),
					position = this._hashes[hash] && items.index(this._hashes[hash]) || 0;

				if (!hash) {
					return false;
				}

				this._core.to(position, false, true);
			}, this));
		}

		/**
		 * Default options.
		 * @public
		 */
		Hash.Defaults = {
			URLhashListener: false
		}

		/**
		 * Destroys the plugin.
		 * @public
		 */
		Hash.prototype.destroy = function() {
			var handler, property;

			$(window).off('hashchange.owl.navigation');

			for (handler in this._handlers) {
				this._core.$element.off(handler, this._handlers[handler]);
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		}

		$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

	})(window.Zepto || window.jQuery, window, document);


/***/ },
/* 5 */
/***/ function(module, exports) {

	/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

	window.onload = function() {
		function addIcon(el, entity) {
			var html = el.innerHTML;
			el.innerHTML = '<span style="font-family: \'et-line\'">' + entity + '</span>' + html;
		}
		var icons = {
				'icon-mobile' : '&#xe000;',
				'icon-laptop' : '&#xe001;',
				'icon-desktop' : '&#xe002;',
				'icon-tablet' : '&#xe003;',
				'icon-phone' : '&#xe004;',
				'icon-document' : '&#xe005;',
				'icon-documents' : '&#xe006;',
				'icon-search' : '&#xe007;',
				'icon-clipboard' : '&#xe008;',
				'icon-newspaper' : '&#xe009;',
				'icon-notebook' : '&#xe00a;',
				'icon-book-open' : '&#xe00b;',
				'icon-browser' : '&#xe00c;',
				'icon-calendar' : '&#xe00d;',
				'icon-presentation' : '&#xe00e;',
				'icon-picture' : '&#xe00f;',
				'icon-pictures' : '&#xe010;',
				'icon-video' : '&#xe011;',
				'icon-camera' : '&#xe012;',
				'icon-printer' : '&#xe013;',
				'icon-toolbox' : '&#xe014;',
				'icon-briefcase' : '&#xe015;',
				'icon-wallet' : '&#xe016;',
				'icon-gift' : '&#xe017;',
				'icon-bargraph' : '&#xe018;',
				'icon-grid' : '&#xe019;',
				'icon-expand' : '&#xe01a;',
				'icon-focus' : '&#xe01b;',
				'icon-edit' : '&#xe01c;',
				'icon-adjustments' : '&#xe01d;',
				'icon-ribbon' : '&#xe01e;',
				'icon-hourglass' : '&#xe01f;',
				'icon-lock' : '&#xe020;',
				'icon-megaphone' : '&#xe021;',
				'icon-shield' : '&#xe022;',
				'icon-trophy' : '&#xe023;',
				'icon-flag' : '&#xe024;',
				'icon-map' : '&#xe025;',
				'icon-puzzle' : '&#xe026;',
				'icon-basket' : '&#xe027;',
				'icon-envelope' : '&#xe028;',
				'icon-streetsign' : '&#xe029;',
				'icon-telescope' : '&#xe02a;',
				'icon-gears' : '&#xe02b;',
				'icon-key' : '&#xe02c;',
				'icon-paperclip' : '&#xe02d;',
				'icon-attachment' : '&#xe02e;',
				'icon-pricetags' : '&#xe02f;',
				'icon-lightbulb' : '&#xe030;',
				'icon-layers' : '&#xe031;',
				'icon-pencil' : '&#xe032;',
				'icon-tools' : '&#xe033;',
				'icon-tools-2' : '&#xe034;',
				'icon-scissors' : '&#xe035;',
				'icon-paintbrush' : '&#xe036;',
				'icon-magnifying-glass' : '&#xe037;',
				'icon-circle-compass' : '&#xe038;',
				'icon-linegraph' : '&#xe039;',
				'icon-mic' : '&#xe03a;',
				'icon-strategy' : '&#xe03b;',
				'icon-beaker' : '&#xe03c;',
				'icon-caution' : '&#xe03d;',
				'icon-recycle' : '&#xe03e;',
				'icon-anchor' : '&#xe03f;',
				'icon-profile-male' : '&#xe040;',
				'icon-profile-female' : '&#xe041;',
				'icon-bike' : '&#xe042;',
				'icon-wine' : '&#xe043;',
				'icon-hotairballoon' : '&#xe044;',
				'icon-globe' : '&#xe045;',
				'icon-genius' : '&#xe046;',
				'icon-map-pin' : '&#xe047;',
				'icon-dial' : '&#xe048;',
				'icon-chat' : '&#xe049;',
				'icon-heart' : '&#xe04a;',
				'icon-cloud' : '&#xe04b;',
				'icon-upload' : '&#xe04c;',
				'icon-download' : '&#xe04d;',
				'icon-target' : '&#xe04e;',
				'icon-hazardous' : '&#xe04f;',
				'icon-piechart' : '&#xe050;',
				'icon-speedometer' : '&#xe051;',
				'icon-global' : '&#xe052;',
				'icon-compass' : '&#xe053;',
				'icon-lifesaver' : '&#xe054;',
				'icon-clock' : '&#xe055;',
				'icon-aperture' : '&#xe056;',
				'icon-quote' : '&#xe057;',
				'icon-scope' : '&#xe058;',
				'icon-alarmclock' : '&#xe059;',
				'icon-refresh' : '&#xe05a;',
				'icon-happy' : '&#xe05b;',
				'icon-sad' : '&#xe05c;',
				'icon-facebook' : '&#xe05d;',
				'icon-twitter' : '&#xe05e;',
				'icon-googleplus' : '&#xe05f;',
				'icon-rss' : '&#xe060;',
				'icon-tumblr' : '&#xe061;',
				'icon-linkedin' : '&#xe062;',
				'icon-dribbble' : '&#xe063;'
			},
			els = document.getElementsByTagName('*'),
			i, attr, c, el;
		for (i = 0; ; i += 1) {
			el = els[i];
			if(!el) {
				break;
			}
			attr = el.getAttribute('data-icon');
			if (attr) {
				addIcon(el, attr);
			}
			c = el.className;
			c = c.match(/icon-[^\s'"]+/);
			if (c && icons[c[0]]) {
				addIcon(el, icons[c[0]]);
			}
		}
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var WOW = __webpack_require__(7)

	//SMOOTH PAGE SCROLL
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});


	//OWL CAROSEL TESTIMONIAL
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:false,
	    dots:true,
	    dotsEach:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})

	$(document).ready(

	  function() { 

	    $("html").niceScroll({
	    	cursorcolor:"#00DCB1",
	    	scrollspeed :"100",
	    	cursorborder:"1px solid #00DCB1",
	    	horizrailenabled: "false",
	    	cursorborderradius: "0px"
	    });

	  }

	);

	new WOW().init();


	    
	/*Preloader*/
	//<![CDATA[
	$(window).load(function() { // makes sure the whole site is loaded
	  $('#status').fadeOut(); // will first fade out the loading animation
	  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	  $('body').delay(350).css({'overflow':'visible'});
	})
	//]]>




/***/ },
/* 7 */
/***/ function(module, exports) {

	(function() {
	  var MutationObserver, Util, WeakMap, getComputedStyle, getComputedStyleRX,
	    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

	  Util = (function() {
	    function Util() {}

	    Util.prototype.extend = function(custom, defaults) {
	      var key, value;
	      for (key in defaults) {
	        value = defaults[key];
	        if (custom[key] == null) {
	          custom[key] = value;
	        }
	      }
	      return custom;
	    };

	    Util.prototype.isMobile = function(agent) {
	      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
	    };

	    Util.prototype.addEvent = function(elem, event, fn) {
	      if (elem.addEventListener != null) {
	        return elem.addEventListener(event, fn, false);
	      } else if (elem.attachEvent != null) {
	        return elem.attachEvent("on" + event, fn);
	      } else {
	        return elem[event] = fn;
	      }
	    };

	    Util.prototype.removeEvent = function(elem, event, fn) {
	      if (elem.removeEventListener != null) {
	        return elem.removeEventListener(event, fn, false);
	      } else if (elem.detachEvent != null) {
	        return elem.detachEvent("on" + event, fn);
	      } else {
	        return delete elem[event];
	      }
	    };

	    Util.prototype.innerHeight = function() {
	      if ('innerHeight' in window) {
	        return window.innerHeight;
	      } else {
	        return document.documentElement.clientHeight;
	      }
	    };

	    return Util;

	  })();

	  WeakMap = this.WeakMap || this.MozWeakMap || (WeakMap = (function() {
	    function WeakMap() {
	      this.keys = [];
	      this.values = [];
	    }

	    WeakMap.prototype.get = function(key) {
	      var i, item, _i, _len, _ref;
	      _ref = this.keys;
	      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
	        item = _ref[i];
	        if (item === key) {
	          return this.values[i];
	        }
	      }
	    };

	    WeakMap.prototype.set = function(key, value) {
	      var i, item, _i, _len, _ref;
	      _ref = this.keys;
	      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
	        item = _ref[i];
	        if (item === key) {
	          this.values[i] = value;
	          return;
	        }
	      }
	      this.keys.push(key);
	      return this.values.push(value);
	    };

	    return WeakMap;

	  })());

	  MutationObserver = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (MutationObserver = (function() {
	    function MutationObserver() {
	      if (typeof console !== "undefined" && console !== null) {
	        console.warn('MutationObserver is not supported by your browser.');
	      }
	      if (typeof console !== "undefined" && console !== null) {
	        console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
	      }
	    }

	    MutationObserver.notSupported = true;

	    MutationObserver.prototype.observe = function() {};

	    return MutationObserver;

	  })());

	  getComputedStyle = this.getComputedStyle || function(el, pseudo) {
	    this.getPropertyValue = function(prop) {
	      var _ref;
	      if (prop === 'float') {
	        prop = 'styleFloat';
	      }
	      if (getComputedStyleRX.test(prop)) {
	        prop.replace(getComputedStyleRX, function(_, _char) {
	          return _char.toUpperCase();
	        });
	      }
	      return ((_ref = el.currentStyle) != null ? _ref[prop] : void 0) || null;
	    };
	    return this;
	  };

	  getComputedStyleRX = /(\-([a-z]){1})/g;

	  this.WOW = (function() {
	    WOW.prototype.defaults = {
	      boxClass: 'wow',
	      animateClass: 'animated',
	      offset: 0,
	      mobile: true,
	      live: true,
	      callback: null
	    };

	    function WOW(options) {
	      if (options == null) {
	        options = {};
	      }
	      this.scrollCallback = __bind(this.scrollCallback, this);
	      this.scrollHandler = __bind(this.scrollHandler, this);
	      this.start = __bind(this.start, this);
	      this.scrolled = true;
	      this.config = this.util().extend(options, this.defaults);
	      this.animationNameCache = new WeakMap();
	    }

	    WOW.prototype.init = function() {
	      var _ref;
	      this.element = window.document.documentElement;
	      if ((_ref = document.readyState) === "interactive" || _ref === "complete") {
	        this.start();
	      } else {
	        this.util().addEvent(document, 'DOMContentLoaded', this.start);
	      }
	      return this.finished = [];
	    };

	    WOW.prototype.start = function() {
	      var box, _i, _len, _ref;
	      this.stopped = false;
	      this.boxes = (function() {
	        var _i, _len, _ref, _results;
	        _ref = this.element.querySelectorAll("." + this.config.boxClass);
	        _results = [];
	        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	          box = _ref[_i];
	          _results.push(box);
	        }
	        return _results;
	      }).call(this);
	      this.all = (function() {
	        var _i, _len, _ref, _results;
	        _ref = this.boxes;
	        _results = [];
	        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	          box = _ref[_i];
	          _results.push(box);
	        }
	        return _results;
	      }).call(this);
	      if (this.boxes.length) {
	        if (this.disabled()) {
	          this.resetStyle();
	        } else {
	          _ref = this.boxes;
	          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	            box = _ref[_i];
	            this.applyStyle(box, true);
	          }
	        }
	      }
	      if (!this.disabled()) {
	        this.util().addEvent(window, 'scroll', this.scrollHandler);
	        this.util().addEvent(window, 'resize', this.scrollHandler);
	        this.interval = setInterval(this.scrollCallback, 50);
	      }
	      if (this.config.live) {
	        return new MutationObserver((function(_this) {
	          return function(records) {
	            var node, record, _j, _len1, _results;
	            _results = [];
	            for (_j = 0, _len1 = records.length; _j < _len1; _j++) {
	              record = records[_j];
	              _results.push((function() {
	                var _k, _len2, _ref1, _results1;
	                _ref1 = record.addedNodes || [];
	                _results1 = [];
	                for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
	                  node = _ref1[_k];
	                  _results1.push(this.doSync(node));
	                }
	                return _results1;
	              }).call(_this));
	            }
	            return _results;
	          };
	        })(this)).observe(document.body, {
	          childList: true,
	          subtree: true
	        });
	      }
	    };

	    WOW.prototype.stop = function() {
	      this.stopped = true;
	      this.util().removeEvent(window, 'scroll', this.scrollHandler);
	      this.util().removeEvent(window, 'resize', this.scrollHandler);
	      if (this.interval != null) {
	        return clearInterval(this.interval);
	      }
	    };

	    WOW.prototype.sync = function(element) {
	      if (MutationObserver.notSupported) {
	        return this.doSync(this.element);
	      }
	    };

	    WOW.prototype.doSync = function(element) {
	      var box, _i, _len, _ref, _results;
	      if (element == null) {
	        element = this.element;
	      }
	      if (element.nodeType !== 1) {
	        return;
	      }
	      element = element.parentNode || element;
	      _ref = element.querySelectorAll("." + this.config.boxClass);
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        box = _ref[_i];
	        if (__indexOf.call(this.all, box) < 0) {
	          this.boxes.push(box);
	          this.all.push(box);
	          if (this.stopped || this.disabled()) {
	            this.resetStyle();
	          } else {
	            this.applyStyle(box, true);
	          }
	          _results.push(this.scrolled = true);
	        } else {
	          _results.push(void 0);
	        }
	      }
	      return _results;
	    };

	    WOW.prototype.show = function(box) {
	      this.applyStyle(box);
	      box.className = "" + box.className + " " + this.config.animateClass;
	      if (this.config.callback != null) {
	        return this.config.callback(box);
	      }
	    };

	    WOW.prototype.applyStyle = function(box, hidden) {
	      var delay, duration, iteration;
	      duration = box.getAttribute('data-wow-duration');
	      delay = box.getAttribute('data-wow-delay');
	      iteration = box.getAttribute('data-wow-iteration');
	      return this.animate((function(_this) {
	        return function() {
	          return _this.customStyle(box, hidden, duration, delay, iteration);
	        };
	      })(this));
	    };

	    WOW.prototype.animate = (function() {
	      if ('requestAnimationFrame' in window) {
	        return function(callback) {
	          return window.requestAnimationFrame(callback);
	        };
	      } else {
	        return function(callback) {
	          return callback();
	        };
	      }
	    })();

	    WOW.prototype.resetStyle = function() {
	      var box, _i, _len, _ref, _results;
	      _ref = this.boxes;
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        box = _ref[_i];
	        _results.push(box.style.visibility = 'visible');
	      }
	      return _results;
	    };

	    WOW.prototype.customStyle = function(box, hidden, duration, delay, iteration) {
	      if (hidden) {
	        this.cacheAnimationName(box);
	      }
	      box.style.visibility = hidden ? 'hidden' : 'visible';
	      if (duration) {
	        this.vendorSet(box.style, {
	          animationDuration: duration
	        });
	      }
	      if (delay) {
	        this.vendorSet(box.style, {
	          animationDelay: delay
	        });
	      }
	      if (iteration) {
	        this.vendorSet(box.style, {
	          animationIterationCount: iteration
	        });
	      }
	      this.vendorSet(box.style, {
	        animationName: hidden ? 'none' : this.cachedAnimationName(box)
	      });
	      return box;
	    };

	    WOW.prototype.vendors = ["moz", "webkit"];

	    WOW.prototype.vendorSet = function(elem, properties) {
	      var name, value, vendor, _results;
	      _results = [];
	      for (name in properties) {
	        value = properties[name];
	        elem["" + name] = value;
	        _results.push((function() {
	          var _i, _len, _ref, _results1;
	          _ref = this.vendors;
	          _results1 = [];
	          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	            vendor = _ref[_i];
	            _results1.push(elem["" + vendor + (name.charAt(0).toUpperCase()) + (name.substr(1))] = value);
	          }
	          return _results1;
	        }).call(this));
	      }
	      return _results;
	    };

	    WOW.prototype.vendorCSS = function(elem, property) {
	      var result, style, vendor, _i, _len, _ref;
	      style = getComputedStyle(elem);
	      result = style.getPropertyCSSValue(property);
	      _ref = this.vendors;
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        vendor = _ref[_i];
	        result = result || style.getPropertyCSSValue("-" + vendor + "-" + property);
	      }
	      return result;
	    };

	    WOW.prototype.animationName = function(box) {
	      var animationName;
	      try {
	        animationName = this.vendorCSS(box, 'animation-name').cssText;
	      } catch (_error) {
	        animationName = getComputedStyle(box).getPropertyValue('animation-name');
	      }
	      if (animationName === 'none') {
	        return '';
	      } else {
	        return animationName;
	      }
	    };

	    WOW.prototype.cacheAnimationName = function(box) {
	      return this.animationNameCache.set(box, this.animationName(box));
	    };

	    WOW.prototype.cachedAnimationName = function(box) {
	      return this.animationNameCache.get(box);
	    };

	    WOW.prototype.scrollHandler = function() {
	      return this.scrolled = true;
	    };

	    WOW.prototype.scrollCallback = function() {
	      var box;
	      if (this.scrolled) {
	        this.scrolled = false;
	        this.boxes = (function() {
	          var _i, _len, _ref, _results;
	          _ref = this.boxes;
	          _results = [];
	          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	            box = _ref[_i];
	            if (!(box)) {
	              continue;
	            }
	            if (this.isVisible(box)) {
	              this.show(box);
	              continue;
	            }
	            _results.push(box);
	          }
	          return _results;
	        }).call(this);
	        if (!(this.boxes.length || this.config.live)) {
	          return this.stop();
	        }
	      }
	    };

	    WOW.prototype.offsetTop = function(element) {
	      var top;
	      while (element.offsetTop === void 0) {
	        element = element.parentNode;
	      }
	      top = element.offsetTop;
	      while (element = element.offsetParent) {
	        top += element.offsetTop;
	      }
	      return top;
	    };

	    WOW.prototype.isVisible = function(box) {
	      var bottom, offset, top, viewBottom, viewTop;
	      offset = box.getAttribute('data-wow-offset') || this.config.offset;
	      viewTop = window.pageYOffset;
	      viewBottom = viewTop + Math.min(this.element.clientHeight, this.util().innerHeight()) - offset;
	      top = this.offsetTop(box);
	      bottom = top + box.clientHeight;
	      return top <= viewBottom && bottom >= viewTop;
	    };

	    WOW.prototype.util = function() {
	      return this._util != null ? this._util : this._util = new Util();
	    };

	    WOW.prototype.disabled = function() {
	      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
	    };

	    return WOW;

	  })();

	}).call(this);

	module.exports = this.WOW

/***/ }
/******/ ]);