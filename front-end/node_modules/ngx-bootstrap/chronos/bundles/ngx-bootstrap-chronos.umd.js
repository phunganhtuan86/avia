(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/chronos', ['exports'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].chronos = {})));
}(this, (function (exports) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} n
     * @param {?} x
     * @return {?}
     */
    function mod(n, x) {
        return (n % x + x) % x;
    }
    /**
     * @param {?} num
     * @return {?}
     */
    function absFloor(num) {
        return num < 0 ? Math.ceil(num) || 0 : Math.floor(num);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} str
     * @return {?}
     */
    function isString(str) {
        return typeof str === 'string';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function isDate(value) {
        return value instanceof Date || Object.prototype.toString.call(value) === '[object Date]';
    }
    /**
     * @param {?} date
     * @return {?}
     */
    function isDateValid(date) {
        return date && date.getTime && !isNaN(date.getTime());
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    function isFunction(fn) {
        return (fn instanceof Function ||
            Object.prototype.toString.call(fn) === '[object Function]');
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    function isNumber(value) {
        return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]';
    }
    /**
     * @template T
     * @param {?=} input
     * @return {?}
     */
    function isArray(input) {
        return (input instanceof Array ||
            Object.prototype.toString.call(input) === '[object Array]');
    }
    /**
     * @template T
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function hasOwnProp(a /*object*/, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }
    /**
     * @template T
     * @param {?} input
     * @return {?}
     */
    function isObject(input /*object*/) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return (input != null && Object.prototype.toString.call(input) === '[object Object]');
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return (Object.getOwnPropertyNames(obj).length === 0);
        }
        var /** @type {?} */ k;
        for (k in obj) {
            if (obj.hasOwnProperty(k)) {
                return false;
            }
        }
        return true;
    }
    /**
     * @param {?} input
     * @return {?}
     */
    function isUndefined(input) {
        return input === void 0;
    }
    /**
     * @template T
     * @param {?} argumentForCoercion
     * @return {?}
     */
    function toInt(argumentForCoercion) {
        var /** @type {?} */ coercedNumber = +argumentForCoercion;
        var /** @type {?} */ value = 0;
        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ aliases = {};
    var /** @type {?} */ _mapUnits = {
        date: 'day',
        hour: 'hours',
        minute: 'minutes',
        second: 'seconds',
        millisecond: 'milliseconds'
    };
    /**
     * @param {?} unit
     * @param {?} shorthand
     * @return {?}
     */
    function addUnitAlias(unit, shorthand) {
        var /** @type {?} */ lowerCase = unit.toLowerCase();
        var /** @type {?} */ _unit = unit;
        if (lowerCase in _mapUnits) {
            _unit = _mapUnits[lowerCase];
        }
        aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = _unit;
    }
    /**
     * @param {?} units
     * @return {?}
     */
    function normalizeUnits(units) {
        return isString(units) ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }
    /**
     * @param {?} inputObject
     * @return {?}
     */
    function normalizeObjectUnits(inputObject) {
        var /** @type {?} */ normalizedInput = {};
        var /** @type {?} */ normalizedProp;
        var /** @type {?} */ prop;
        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }
        return /** @type {?} */ (normalizedInput);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // place in new Date([array])
    var /** @type {?} */ YEAR = 0;
    var /** @type {?} */ MONTH = 1;
    var /** @type {?} */ DATE = 2;
    var /** @type {?} */ HOUR = 3;
    var /** @type {?} */ MINUTE = 4;
    var /** @type {?} */ SECOND = 5;
    var /** @type {?} */ MILLISECOND = 6;
    var /** @type {?} */ WEEK = 7;
    var /** @type {?} */ WEEKDAY = 8;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} num
     * @param {?} targetLength
     * @param {?=} forceSign
     * @return {?}
     */
    function zeroFill(num, targetLength, forceSign) {
        var /** @type {?} */ absNumber = "" + Math.abs(num);
        var /** @type {?} */ zerosToFill = targetLength - absNumber.length;
        var /** @type {?} */ sign = num >= 0;
        var /** @type {?} */ _sign = sign ? (forceSign ? '+' : '') : '-';
        // todo: this is crazy slow
        var /** @type {?} */ _zeros = Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1);
        return (_sign + _zeros + absNumber);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ formatFunctions = {};
    var /** @type {?} */ formatTokenFunctions = {};
    // tslint:disable-next-line
    var /** @type {?} */ formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
    /**
     * @param {?} token
     * @param {?} padded
     * @param {?} ordinal
     * @param {?} callback
     * @return {?}
     */
    function addFormatToken(token, padded, ordinal, callback) {
        if (token) {
            formatTokenFunctions[token] = callback;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(callback.apply(null, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function (date, opts) {
                return opts.locale.ordinal(callback.apply(null, arguments), token);
            };
        }
    }
    /**
     * @param {?} format
     * @return {?}
     */
    function makeFormatFunction(format) {
        var /** @type {?} */ array = format.match(formattingTokens);
        var /** @type {?} */ length = array.length;
        var /** @type {?} */ formatArr = new Array(length);
        for (var /** @type {?} */ i = 0; i < length; i++) {
            formatArr[i] = formatTokenFunctions[array[i]]
                ? formatTokenFunctions[array[i]]
                : removeFormattingTokens(array[i]);
        }
        return function (date, locale, isUTC, offset) {
            if (offset === void 0) {
                offset = 0;
            }
            var /** @type {?} */ output = '';
            for (var /** @type {?} */ j = 0; j < length; j++) {
                output += isFunction(formatArr[j])
                    ? ((formatArr[j])).call(null, date, { format: format, locale: locale, isUTC: isUTC, offset: offset })
                    : formatArr[j];
            }
            return output;
        };
    }
    /**
     * @param {?} input
     * @return {?}
     */
    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?=} y
     * @param {?=} m
     * @param {?=} d
     * @return {?}
     */
    function createUTCDate(y, m, d) {
        var /** @type {?} */ date = new Date(Date.UTC.apply(null, arguments));
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
        }
        return date;
    }
    /**
     * @param {?=} y
     * @param {?=} m
     * @param {?=} d
     * @param {?=} h
     * @param {?=} M
     * @param {?=} s
     * @param {?=} ms
     * @return {?}
     */
    function createDate(y, m, d, h, M, s, ms) {
        if (m === void 0) {
            m = 0;
        }
        if (d === void 0) {
            d = 1;
        }
        if (h === void 0) {
            h = 0;
        }
        if (M === void 0) {
            M = 0;
        }
        if (s === void 0) {
            s = 0;
        }
        if (ms === void 0) {
            ms = 0;
        }
        var /** @type {?} */ date = new Date(y, m, d, h, M, s, ms);
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
            date.setFullYear(y);
        }
        return date;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getHours(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCHours() : date.getHours();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getMinutes(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCMinutes() : date.getMinutes();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getSeconds(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCSeconds() : date.getSeconds();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getMilliseconds(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCMilliseconds() : date.getMilliseconds();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    function getTime(date) {
        return date.getTime();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getDay(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCDay() : date.getDay();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getDate(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCDate() : date.getDate();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getMonth(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCMonth() : date.getMonth();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getFullYear(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCFullYear() : date.getFullYear();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    function unix(date) {
        return Math.floor(date.valueOf() / 1000);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    function getFirstDayOfMonth(date) {
        return createDate(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes(), date.getSeconds());
    }
    /**
     * @param {?} date
     * @param {?} firstDayOfWeek
     * @return {?}
     */
    function isFirstDayOfWeek(date, firstDayOfWeek) {
        return date.getDay() === firstDayOfWeek;
    }
    /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    function isSameMonth(date1, date2) {
        if (!date1 || !date2) {
            return false;
        }
        return isSameYear(date1, date2) && getMonth(date1) === getMonth(date2);
    }
    /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    function isSameYear(date1, date2) {
        if (!date1 || !date2) {
            return false;
        }
        return getFullYear(date1) === getFullYear(date2);
    }
    /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    function isSameDay(date1, date2) {
        if (!date1 || !date2) {
            return false;
        }
        return (isSameYear(date1, date2) &&
            isSameMonth(date1, date2) &&
            getDate(date1) === getDate(date2));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ match1 = /\d/; //       0 - 9
    var /** @type {?} */ match2 = /\d\d/; //      00 - 99
    var /** @type {?} */ match3 = /\d{3}/; //     000 - 999
    var /** @type {?} */ match4 = /\d{4}/; //    0000 - 9999
    var /** @type {?} */ match6 = /[+-]?\d{6}/; // -999999 - 999999
    var /** @type {?} */ match1to2 = /\d\d?/; //       0 - 99
    var /** @type {?} */ match3to4 = /\d\d\d\d?/; //     999 - 9999
    var /** @type {?} */ match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999
    var /** @type {?} */ match1to3 = /\d{1,3}/; //       0 - 999
    var /** @type {?} */ match1to4 = /\d{1,4}/; //       0 - 9999
    var /** @type {?} */ match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999
    var /** @type {?} */ matchUnsigned = /\d+/; //       0 - inf
    var /** @type {?} */ matchSigned = /[+-]?\d+/; //    -inf - inf
    var /** @type {?} */ matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z
    var /** @type {?} */ matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    // tslint:disable-next-line
    var /** @type {?} */ matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
    var /** @type {?} */ regexes = {};
    /**
     * @param {?} token
     * @param {?} regex
     * @param {?=} strictRegex
     * @return {?}
     */
    function addRegexToken(token, regex, strictRegex) {
        if (isFunction(regex)) {
            regexes[token] = regex;
            return;
        }
        regexes[token] = function (isStrict, locale) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }
    /**
     * @param {?} token
     * @param {?} locale
     * @return {?}
     */
    function getParseRegexForToken(token, locale) {
        var /** @type {?} */ _strict = false;
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }
        return regexes[token](_strict, locale);
    }
    /**
     * @param {?} str
     * @return {?}
     */
    function unescapeFormat(str) {
        // tslint:disable-next-line
        return regexEscape(str
            .replace('\\', '')
            .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) { return p1 || p2 || p3 || p4; }));
    }
    /**
     * @param {?} str
     * @return {?}
     */
    function regexEscape(str) {
        return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ tokens = {};
    /**
     * @param {?} token
     * @param {?} callback
     * @return {?}
     */
    function addParseToken(token, callback) {
        var /** @type {?} */ _token = isString(token) ? [token] : token;
        var /** @type {?} */ func = callback;
        if (isNumber(callback)) {
            func = function (input, array, config) {
                array[callback] = toInt(input);
                return config;
            };
        }
        if (isArray(_token) && isFunction(func)) {
            var /** @type {?} */ i = void 0;
            for (i = 0; i < _token.length; i++) {
                tokens[_token[i]] = func;
            }
        }
    }
    /**
     * @param {?} token
     * @param {?} callback
     * @return {?}
     */
    function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, _token) {
            config._w = config._w || {};
            return callback(input, config._w, config, _token);
        });
    }
    /**
     * @param {?} token
     * @param {?} input
     * @param {?} config
     * @return {?}
     */
    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
        return config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /*
    export function getPrioritizedUnits(unitsObj) {
      const units = [];
      let unit;
      for (unit in unitsObj) {
        if (unitsObj.hasOwnProperty(unit)) {
          units.push({ unit, priority: priorities[unit] });
        }
      }
      units.sort(function (a, b) {
        return a.priority - b.priority;
      });

      return units;
    }
    */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // FORMATTING
    addFormatToken('D', ['DD', 2, false], 'Do', function (date, opts) {
        return getDate(date, opts.isUTC).toString(10);
    });
    // ALIASES
    addUnitAlias('date', 'D');
    // PARSING
    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        return locale._dayOfMonthOrdinalParse || locale._ordinalParse;
    });
    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array, config) {
        array[DATE] = toInt(input.match(match1to2)[0]);
        return config;
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false
        };
    }
    /**
     * @param {?} config
     * @return {?}
     */
    function getParsingFlags(config) {
        if (config._pf == null) {
            config._pf = defaultParsingFlags();
        }
        return config._pf;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function getYear(date, opts) {
        return getFullYear(date, opts.isUTC).toString();
    }
    addFormatToken('Y', null, null, function (date, opts) {
        var /** @type {?} */ y = getFullYear(date, opts.isUTC);
        return y <= 9999 ? y.toString(10) : "+" + y;
    });
    addFormatToken(null, ['YY', 2, false], null, function (date, opts) {
        return (getFullYear(date, opts.isUTC) % 100).toString(10);
    });
    addFormatToken(null, ['YYYY', 4, false], null, getYear);
    addFormatToken(null, ['YYYYY', 5, false], null, getYear);
    addFormatToken(null, ['YYYYYY', 6, true], null, getYear);
    // ALIASES
    addUnitAlias('year', 'y');
    // PARSING
    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);
    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array, config) {
        array[YEAR] = input.length === 2 ? parseTwoDigitYear(input) : toInt(input);
        return config;
    });
    addParseToken('YY', function (input, array, config) {
        array[YEAR] = parseTwoDigitYear(input);
        return config;
    });
    addParseToken('Y', function (input, array, config) {
        array[YEAR] = parseInt(input, 10);
        return config;
    });
    /**
     * @param {?} input
     * @return {?}
     */
    function parseTwoDigitYear(input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    }
    /**
     * @param {?} year
     * @return {?}
     */
    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }
    /**
     * @param {?} year
     * @return {?}
     */
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    function daysInMonth$1(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var /** @type {?} */ modMonth = mod(month, 12);
        var /** @type {?} */ _year = year + (month - modMonth) / 12;
        return modMonth === 1
            ? isLeapYear(_year) ? 29 : 28
            : (31 - modMonth % 7 % 2);
    }
    // FORMATTING
    addFormatToken('M', ['MM', 2, false], 'Mo', function (date, opts) {
        return (getMonth(date, opts.isUTC) + 1).toString(10);
    });
    addFormatToken('MMM', null, null, function (date, opts) {
        return opts.locale.monthsShort(date, opts.format, opts.isUTC);
    });
    addFormatToken('MMMM', null, null, function (date, opts) {
        return opts.locale.months(date, opts.format, opts.isUTC);
    });
    // ALIASES
    addUnitAlias('month', 'M');
    // PARSING
    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });
    addParseToken(['M', 'MM'], function (input, array, config) {
        array[MONTH] = toInt(input) - 1;
        return config;
    });
    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var /** @type {?} */ month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        }
        else {
            getParsingFlags(config).invalidMonth = !!input;
        }
        return config;
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ defaultTimeUnit = {
        year: 0,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
        seconds: 0
    };
    /**
     * @param {?} date
     * @param {?} unit
     * @return {?}
     */
    function shiftDate(date, unit) {
        var /** @type {?} */ _unit = Object.assign({}, defaultTimeUnit, unit);
        var /** @type {?} */ year = date.getFullYear() + (_unit.year || 0);
        var /** @type {?} */ month = date.getMonth() + (_unit.month || 0);
        var /** @type {?} */ day = date.getDate() + (_unit.day || 0);
        if (_unit.month && !_unit.day) {
            day = Math.min(day, daysInMonth$1(year, month));
        }
        return createDate(year, month, day, date.getHours() + (_unit.hour || 0), date.getMinutes() + (_unit.minute || 0), date.getSeconds() + (_unit.seconds || 0));
    }
    /**
     * @param {?} date
     * @param {?} unit
     * @return {?}
     */
    function setFullDate(date, unit) {
        return createDate(getNum(date.getFullYear(), unit.year), getNum(date.getMonth(), unit.month), getNum(date.getDate(), unit.day), getNum(date.getHours(), unit.hour), getNum(date.getMinutes(), unit.minute), getNum(date.getSeconds(), unit.seconds), getNum(date.getMilliseconds(), unit.milliseconds));
    }
    /**
     * @param {?} def
     * @param {?=} num
     * @return {?}
     */
    function getNum(def, num) {
        return isNumber(num) ? num : def;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @param {?=} isUTC
     * @return {?}
     */
    function setMonth(date, value, isUTC) {
        var /** @type {?} */ dayOfMonth = Math.min(getDate(date), daysInMonth$1(getFullYear(date), value));
        isUTC ? date.setUTCMonth(value, dayOfMonth) : date.setMonth(value, dayOfMonth);
        return date;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @param {?=} isUTC
     * @return {?}
     */
    function setHours(date, value, isUTC) {
        isUTC ? date.setUTCHours(value) : date.setHours(value);
        return date;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @param {?=} isUTC
     * @return {?}
     */
    function setMinutes(date, value, isUTC) {
        isUTC ? date.setUTCMinutes(value) : date.setMinutes(value);
        return date;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @param {?=} isUTC
     * @return {?}
     */
    function setSeconds(date, value, isUTC) {
        isUTC ? date.setUTCSeconds(value) : date.setSeconds(value);
        return date;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @param {?=} isUTC
     * @return {?}
     */
    function setMilliseconds(date, value, isUTC) {
        isUTC ? date.setUTCMilliseconds(value) : date.setMilliseconds(value);
        return date;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @param {?=} isUTC
     * @return {?}
     */
    function setDate(date, value, isUTC) {
        isUTC ? date.setUTCDate(value) : date.setDate(value);
        return date;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @return {?}
     */
    function setTime(date, value) {
        date.setTime(value);
        return date;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} date
     * @return {?}
     */
    function cloneDate(date) {
        return new Date(date.getTime());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} date
     * @param {?} unit
     * @param {?=} isUTC
     * @return {?}
     */
    function startOf(date, unit, isUTC) {
        var /** @type {?} */ _date = cloneDate(date);
        // the following switch intentionally omits break keywords
        // to utilize falling through the cases.
        switch (unit) {
            case 'year':
                setMonth(_date, 0, isUTC);
            /* falls through */
            case 'quarter':
            case 'month':
                setDate(_date, 1, isUTC);
            /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
            case 'date':
                setHours(_date, 0, isUTC);
            /* falls through */
            case 'hours':
                setMinutes(_date, 0, isUTC);
            /* falls through */
            case 'minutes':
                setSeconds(_date, 0, isUTC);
            /* falls through */
            case 'seconds':
                setMilliseconds(_date, 0, isUTC);
        }
        // weeks are a special case
        if (unit === 'week') {
            setLocaleDayOfWeek(_date, 0, { isUTC: isUTC });
        }
        if (unit === 'isoWeek') {
            setISODayOfWeek(_date, 1);
        }
        // quarters are also special
        if (unit === 'quarter') {
            setMonth(_date, Math.floor(getMonth(_date, isUTC) / 3) * 3, isUTC);
        }
        return _date;
    }
    /**
     * @param {?} date
     * @param {?} unit
     * @param {?=} isUTC
     * @return {?}
     */
    function endOf(date, unit, isUTC) {
        var /** @type {?} */ _unit = unit;
        // 'date' is an alias for 'day', so it should be considered as such.
        if (_unit === 'date') {
            _unit = 'day';
        }
        var /** @type {?} */ start = startOf(date, _unit, isUTC);
        var /** @type {?} */ _step = add(start, 1, _unit === 'isoWeek' ? 'week' : _unit, isUTC);
        var /** @type {?} */ res = subtract(_step, 1, 'milliseconds', isUTC);
        return res;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // FORMATTING
    addFormatToken('DDD', ['DDDD', 3, false], 'DDDo', function (date) {
        return getDayOfYear(date).toString(10);
    });
    // ALIASES
    addUnitAlias('dayOfYear', 'DDD');
    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
        return config;
    });
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getDayOfYear(date, isUTC) {
        var /** @type {?} */ date1 = +startOf(date, 'day', isUTC);
        var /** @type {?} */ date2 = +startOf(date, 'year', isUTC);
        var /** @type {?} */ someDate = date1 - date2;
        var /** @type {?} */ oneDay = 1000 * 60 * 60 * 24;
        return Math.round(someDate / oneDay) + 1;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} year
     * @param {?} dow
     * @param {?} doy
     * @return {?}
     */
    function firstWeekOffset(year, dow, doy) {
        // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        var /** @type {?} */ fwd = dow - doy + 7;
        // first-week day local weekday -- which local weekday is fwd
        var /** @type {?} */ fwdlw = (createUTCDate(year, 0, fwd).getUTCDay() - dow + 7) % 7;
        return -fwdlw + fwd - 1;
    }
    /**
     * @param {?} year
     * @param {?} week
     * @param {?} weekday
     * @param {?} dow
     * @param {?} doy
     * @return {?}
     */
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var /** @type {?} */ localWeekday = (7 + weekday - dow) % 7;
        var /** @type {?} */ weekOffset = firstWeekOffset(year, dow, doy);
        var /** @type {?} */ dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset;
        var /** @type {?} */ resYear;
        var /** @type {?} */ resDayOfYear;
        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        }
        else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        }
        else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }
        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }
    /**
     * @param {?} date
     * @param {?} dow
     * @param {?} doy
     * @param {?=} isUTC
     * @return {?}
     */
    function weekOfYear(date, dow, doy, isUTC) {
        var /** @type {?} */ weekOffset = firstWeekOffset(getFullYear(date, isUTC), dow, doy);
        var /** @type {?} */ week = Math.floor((getDayOfYear(date, isUTC) - weekOffset - 1) / 7) + 1;
        var /** @type {?} */ resWeek;
        var /** @type {?} */ resYear;
        if (week < 1) {
            resYear = getFullYear(date, isUTC) - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        }
        else if (week > weeksInYear(getFullYear(date, isUTC), dow, doy)) {
            resWeek = week - weeksInYear(getFullYear(date, isUTC), dow, doy);
            resYear = getFullYear(date, isUTC) + 1;
        }
        else {
            resYear = getFullYear(date, isUTC);
            resWeek = week;
        }
        return {
            week: resWeek,
            year: resYear
        };
    }
    /**
     * @param {?} year
     * @param {?} dow
     * @param {?} doy
     * @return {?}
     */
    function weeksInYear(year, dow, doy) {
        var /** @type {?} */ weekOffset = firstWeekOffset(year, dow, doy);
        var /** @type {?} */ weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var /** @type {?} */ defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    var /** @type {?} */ defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    var /** @type {?} */ defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    var /** @type {?} */ defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    var /** @type {?} */ defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    var /** @type {?} */ defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A'
    };
    var /** @type {?} */ defaultOrdinal = '%d';
    var /** @type {?} */ defaultDayOfMonthOrdinalParse = /\d{1,2}/;
    var /** @type {?} */ defaultMonthsShortRegex = matchWord;
    var /** @type {?} */ defaultMonthsRegex = matchWord;
    var Locale = (function () {
        function Locale(config) {
            if (!!config) {
                this.set(config);
            }
        }
        /**
         * @param {?} config
         * @return {?}
         */
        Locale.prototype.set = /**
         * @param {?} config
         * @return {?}
         */
            function (config) {
                var /** @type {?} */ confKey;
                for (confKey in config) {
                    if (!config.hasOwnProperty(confKey)) {
                        continue;
                    }
                    var /** @type {?} */ prop = config[(confKey)];
                    var /** @type {?} */ key = ((isFunction(prop) ? confKey : "_" + confKey));
                    this[key] = /** @type {?} */ (prop);
                }
                this._config = config;
            };
        /**
         * @param {?} key
         * @param {?} date
         * @param {?} now
         * @return {?}
         */
        Locale.prototype.calendar = /**
         * @param {?} key
         * @param {?} date
         * @param {?} now
         * @return {?}
         */
            function (key, date, now) {
                var /** @type {?} */ output = this._calendar[key] || this._calendar["sameElse"];
                return isFunction(output) ? output.call(null, date, now) : output;
            };
        /**
         * @param {?} key
         * @return {?}
         */
        Locale.prototype.longDateFormat = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                var /** @type {?} */ format = this._longDateFormat[key];
                var /** @type {?} */ formatUpper = this._longDateFormat[key.toUpperCase()];
                if (format || !formatUpper) {
                    return format;
                }
                this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
                    return val.slice(1);
                });
                return this._longDateFormat[key];
            };
        Object.defineProperty(Locale.prototype, "invalidDate", {
            get: /**
             * @return {?}
             */ function () {
                return this._invalidDate;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._invalidDate = val;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} num
         * @param {?=} token
         * @return {?}
         */
        Locale.prototype.ordinal = /**
         * @param {?} num
         * @param {?=} token
         * @return {?}
         */
            function (num, token) {
                return this._ordinal.replace('%d', num.toString(10));
            };
        /**
         * @param {?} str
         * @return {?}
         */
        Locale.prototype.preparse = /**
         * @param {?} str
         * @return {?}
         */
            function (str) {
                return str;
            };
        /**
         * @param {?} str
         * @return {?}
         */
        Locale.prototype.postformat = /**
         * @param {?} str
         * @return {?}
         */
            function (str) {
                return str;
            };
        /**
         * @param {?} num
         * @param {?} withoutSuffix
         * @param {?} str
         * @param {?} isFuture
         * @return {?}
         */
        Locale.prototype.relativeTime = /**
         * @param {?} num
         * @param {?} withoutSuffix
         * @param {?} str
         * @param {?} isFuture
         * @return {?}
         */
            function (num, withoutSuffix, str, isFuture) {
                var /** @type {?} */ output = this._relativeTime[str];
                return (isFunction(output)) ?
                    output(num, withoutSuffix, str, isFuture) :
                    output.replace(/%d/i, num.toString(10));
            };
        /**
         * @param {?} diff
         * @param {?} output
         * @return {?}
         */
        Locale.prototype.pastFuture = /**
         * @param {?} diff
         * @param {?} output
         * @return {?}
         */
            function (diff, output) {
                var /** @type {?} */ format = this._relativeTime[diff > 0 ? 'future' : 'past'];
                return isFunction(format) ? format(output) : format.replace(/%s/i, output);
            };
        /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
        Locale.prototype.months = /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
            function (date, format, isUTC) {
                if (isUTC === void 0) {
                    isUTC = false;
                }
                if (!date) {
                    return isArray(this._months)
                        ? this._months
                        : this._months.standalone;
                }
                if (isArray(this._months)) {
                    return this._months[getMonth(date, isUTC)];
                }
                var /** @type {?} */ key = (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
                    ? 'format'
                    : 'standalone';
                return this._months[key][getMonth(date, isUTC)];
            };
        /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
        Locale.prototype.monthsShort = /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
            function (date, format, isUTC) {
                if (isUTC === void 0) {
                    isUTC = false;
                }
                if (!date) {
                    return isArray(this._monthsShort)
                        ? this._monthsShort
                        : this._monthsShort.standalone;
                }
                if (isArray(this._monthsShort)) {
                    return this._monthsShort[getMonth(date, isUTC)];
                }
                var /** @type {?} */ key = MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone';
                return this._monthsShort[key][getMonth(date, isUTC)];
            };
        /**
         * @param {?} monthName
         * @param {?=} format
         * @param {?=} strict
         * @return {?}
         */
        Locale.prototype.monthsParse = /**
         * @param {?} monthName
         * @param {?=} format
         * @param {?=} strict
         * @return {?}
         */
            function (monthName, format, strict) {
                var /** @type {?} */ date;
                var /** @type {?} */ regex;
                if (this._monthsParseExact) {
                    return this.handleMonthStrictParse(monthName, format, strict);
                }
                if (!this._monthsParse) {
                    this._monthsParse = [];
                    this._longMonthsParse = [];
                    this._shortMonthsParse = [];
                }
                // TODO: add sorting
                // Sorting makes sure if one month (or abbr) is a prefix of another
                // see sorting in computeMonthsParse
                var /** @type {?} */ i;
                for (i = 0; i < 12; i++) {
                    // make the regex if we don't have it already
                    date = new Date(Date.UTC(2000, i));
                    if (strict && !this._longMonthsParse[i]) {
                        var /** @type {?} */ _months = this.months(date, '', true).replace('.', '');
                        var /** @type {?} */ _shortMonths = this.monthsShort(date, '', true).replace('.', '');
                        this._longMonthsParse[i] = new RegExp("^" + _months + "$", 'i');
                        this._shortMonthsParse[i] = new RegExp("^" + _shortMonths + "$", 'i');
                    }
                    if (!strict && !this._monthsParse[i]) {
                        regex = "^" + this.months(date, '', true) + "|^" + this.monthsShort(date, '', true);
                        this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
                    }
                    // test the regex
                    if (strict && format === 'MMMM' && ((this._longMonthsParse[i])).test(monthName)) {
                        return i;
                    }
                    if (strict && format === 'MMM' && ((this._shortMonthsParse[i])).test(monthName)) {
                        return i;
                    }
                    if (!strict && this._monthsParse[i].test(monthName)) {
                        return i;
                    }
                }
            };
        /**
         * @param {?} isStrict
         * @return {?}
         */
        Locale.prototype.monthsRegex = /**
         * @param {?} isStrict
         * @return {?}
         */
            function (isStrict) {
                if (this._monthsParseExact) {
                    if (!hasOwnProp(this, '_monthsRegex')) {
                        this.computeMonthsParse();
                    }
                    if (isStrict) {
                        return this._monthsStrictRegex;
                    }
                    return this._monthsRegex;
                }
                if (!hasOwnProp(this, '_monthsRegex')) {
                    this._monthsRegex = defaultMonthsRegex;
                }
                return this._monthsStrictRegex && isStrict ?
                    this._monthsStrictRegex : this._monthsRegex;
            };
        /**
         * @param {?} isStrict
         * @return {?}
         */
        Locale.prototype.monthsShortRegex = /**
         * @param {?} isStrict
         * @return {?}
         */
            function (isStrict) {
                if (this._monthsParseExact) {
                    if (!hasOwnProp(this, '_monthsRegex')) {
                        this.computeMonthsParse();
                    }
                    if (isStrict) {
                        return this._monthsShortStrictRegex;
                    }
                    return this._monthsShortRegex;
                }
                if (!hasOwnProp(this, '_monthsShortRegex')) {
                    this._monthsShortRegex = defaultMonthsShortRegex;
                }
                return this._monthsShortStrictRegex && isStrict ?
                    this._monthsShortStrictRegex : this._monthsShortRegex;
            };
        /** Week */
        /**
         * Week
         * @param {?} date
         * @param {?=} isUTC
         * @return {?}
         */
        Locale.prototype.week = /**
         * Week
         * @param {?} date
         * @param {?=} isUTC
         * @return {?}
         */
            function (date, isUTC) {
                return weekOfYear(date, this._week.dow, this._week.doy, isUTC).week;
            };
        /**
         * @return {?}
         */
        Locale.prototype.firstDayOfWeek = /**
         * @return {?}
         */
            function () {
                return this._week.dow;
            };
        /**
         * @return {?}
         */
        Locale.prototype.firstDayOfYear = /**
         * @return {?}
         */
            function () {
                return this._week.doy;
            };
        /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
        Locale.prototype.weekdays = /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
            function (date, format, isUTC) {
                if (!date) {
                    return isArray(this._weekdays)
                        ? this._weekdays
                        : this._weekdays.standalone;
                }
                if (isArray(this._weekdays)) {
                    return this._weekdays[getDay(date, isUTC)];
                }
                var /** @type {?} */ _key = this._weekdays.isFormat.test(format)
                    ? 'format'
                    : 'standalone';
                return this._weekdays[_key][getDay(date, isUTC)];
            };
        /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
        Locale.prototype.weekdaysMin = /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
            function (date, format, isUTC) {
                return date ? this._weekdaysMin[getDay(date, isUTC)] : this._weekdaysMin;
            };
        /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
        Locale.prototype.weekdaysShort = /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
            function (date, format, isUTC) {
                return date ? this._weekdaysShort[getDay(date, isUTC)] : this._weekdaysShort;
            };
        // proto.weekdaysParse  =        localeWeekdaysParse;
        /**
         * @param {?=} weekdayName
         * @param {?=} format
         * @param {?=} strict
         * @return {?}
         */
        Locale.prototype.weekdaysParse = /**
         * @param {?=} weekdayName
         * @param {?=} format
         * @param {?=} strict
         * @return {?}
         */
            function (weekdayName, format, strict) {
                var /** @type {?} */ i;
                var /** @type {?} */ regex;
                if (this._weekdaysParseExact) {
                    return this.handleWeekStrictParse(weekdayName, format, strict);
                }
                if (!this._weekdaysParse) {
                    this._weekdaysParse = [];
                    this._minWeekdaysParse = [];
                    this._shortWeekdaysParse = [];
                    this._fullWeekdaysParse = [];
                }
                for (i = 0; i < 7; i++) {
                    // make the regex if we don't have it already
                    // fix: here is the issue
                    var /** @type {?} */ date = setDayOfWeek(new Date(Date.UTC(2000, 1)), i, null, true);
                    if (strict && !this._fullWeekdaysParse[i]) {
                        this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(date, '', true).replace('.', '\.?') + "$", 'i');
                        this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(date, '', true).replace('.', '\.?') + "$", 'i');
                        this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(date, '', true).replace('.', '\.?') + "$", 'i');
                    }
                    if (!this._weekdaysParse[i]) {
                        regex = "^" + this.weekdays(date, '', true) + "|^" + this.weekdaysShort(date, '', true) + "|^" + this.weekdaysMin(date, '', true);
                        this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
                    }
                    if (!isArray(this._fullWeekdaysParse)
                        || !isArray(this._shortWeekdaysParse)
                        || !isArray(this._minWeekdaysParse)
                        || !isArray(this._weekdaysParse)) {
                        return;
                    }
                    // test the regex
                    if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                        return i;
                    }
                    else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                        return i;
                    }
                    else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                        return i;
                    }
                    else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                        return i;
                    }
                }
            };
        // proto.weekdaysRegex       =        weekdaysRegex;
        /**
         * @param {?} isStrict
         * @return {?}
         */
        Locale.prototype.weekdaysRegex = /**
         * @param {?} isStrict
         * @return {?}
         */
            function (isStrict) {
                if (this._weekdaysParseExact) {
                    if (!hasOwnProp(this, '_weekdaysRegex')) {
                        this.computeWeekdaysParse();
                    }
                    if (isStrict) {
                        return this._weekdaysStrictRegex;
                    }
                    else {
                        return this._weekdaysRegex;
                    }
                }
                else {
                    if (!hasOwnProp(this, '_weekdaysRegex')) {
                        this._weekdaysRegex = matchWord;
                    }
                    return this._weekdaysStrictRegex && isStrict ?
                        this._weekdaysStrictRegex : this._weekdaysRegex;
                }
            };
        // proto.weekdaysShortRegex  =        weekdaysShortRegex;
        // proto.weekdaysMinRegex    =        weekdaysMinRegex;
        /**
         * @param {?=} isStrict
         * @return {?}
         */
        Locale.prototype.weekdaysShortRegex = /**
         * @param {?=} isStrict
         * @return {?}
         */
            function (isStrict) {
                if (this._weekdaysParseExact) {
                    if (!hasOwnProp(this, '_weekdaysRegex')) {
                        this.computeWeekdaysParse();
                    }
                    if (isStrict) {
                        return this._weekdaysShortStrictRegex;
                    }
                    else {
                        return this._weekdaysShortRegex;
                    }
                }
                else {
                    if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                        this._weekdaysShortRegex = matchWord;
                    }
                    return this._weekdaysShortStrictRegex && isStrict ?
                        this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
                }
            };
        /**
         * @param {?=} isStrict
         * @return {?}
         */
        Locale.prototype.weekdaysMinRegex = /**
         * @param {?=} isStrict
         * @return {?}
         */
            function (isStrict) {
                if (this._weekdaysParseExact) {
                    if (!hasOwnProp(this, '_weekdaysRegex')) {
                        this.computeWeekdaysParse();
                    }
                    if (isStrict) {
                        return this._weekdaysMinStrictRegex;
                    }
                    else {
                        return this._weekdaysMinRegex;
                    }
                }
                else {
                    if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                        this._weekdaysMinRegex = matchWord;
                    }
                    return this._weekdaysMinStrictRegex && isStrict ?
                        this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
                }
            };
        /**
         * @param {?} input
         * @return {?}
         */
        Locale.prototype.isPM = /**
         * @param {?} input
         * @return {?}
         */
            function (input) {
                // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
                // Using charAt should be more compatible.
                return input.toLowerCase().charAt(0) === 'p';
            };
        /**
         * @param {?} hours
         * @param {?} minutes
         * @param {?} isLower
         * @return {?}
         */
        Locale.prototype.meridiem = /**
         * @param {?} hours
         * @param {?} minutes
         * @param {?} isLower
         * @return {?}
         */
            function (hours, minutes, isLower) {
                if (hours > 11) {
                    return isLower ? 'pm' : 'PM';
                }
                return isLower ? 'am' : 'AM';
            };
        /**
         * @param {?} key
         * @return {?}
         */
        Locale.prototype.formatLongDate = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                this._longDateFormat = this._longDateFormat ? this._longDateFormat : defaultLongDateFormat;
                var /** @type {?} */ format = this._longDateFormat[key];
                var /** @type {?} */ formatUpper = this._longDateFormat[key.toUpperCase()];
                if (format || !formatUpper) {
                    return format;
                }
                this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
                    return val.slice(1);
                });
                return this._longDateFormat[key];
            };
        /**
         * @param {?} monthName
         * @param {?} format
         * @param {?=} strict
         * @return {?}
         */
        Locale.prototype.handleMonthStrictParse = /**
         * @param {?} monthName
         * @param {?} format
         * @param {?=} strict
         * @return {?}
         */
            function (monthName, format, strict) {
                var /** @type {?} */ llc = monthName.toLocaleLowerCase();
                var /** @type {?} */ i;
                var /** @type {?} */ ii;
                var /** @type {?} */ mom;
                if (!this._monthsParse) {
                    // this is not used
                    this._monthsParse = [];
                    this._longMonthsParse = [];
                    this._shortMonthsParse = [];
                    for (i = 0; i < 12; ++i) {
                        mom = new Date(2000, i);
                        this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                        this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
                    }
                }
                if (strict) {
                    if (format === 'MMM') {
                        ii = ((this._shortMonthsParse)).indexOf(llc);
                        return ii !== -1 ? ii : null;
                    }
                    ii = ((this._longMonthsParse)).indexOf(llc);
                    return ii !== -1 ? ii : null;
                }
                if (format === 'MMM') {
                    ii = ((this._shortMonthsParse)).indexOf(llc);
                    if (ii !== -1) {
                        return ii;
                    }
                    ii = ((this._longMonthsParse)).indexOf(llc);
                    return ii !== -1 ? ii : null;
                }
                ii = ((this._longMonthsParse)).indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = ((this._shortMonthsParse)).indexOf(llc);
                return ii !== -1 ? ii : null;
            };
        /**
         * @param {?} weekdayName
         * @param {?} format
         * @param {?} strict
         * @return {?}
         */
        Locale.prototype.handleWeekStrictParse = /**
         * @param {?} weekdayName
         * @param {?} format
         * @param {?} strict
         * @return {?}
         */
            function (weekdayName, format, strict) {
                var /** @type {?} */ ii;
                var /** @type {?} */ llc = weekdayName.toLocaleLowerCase();
                if (!this._weekdaysParse) {
                    this._weekdaysParse = [];
                    this._shortWeekdaysParse = [];
                    this._minWeekdaysParse = [];
                    var /** @type {?} */ i = void 0;
                    for (i = 0; i < 7; ++i) {
                        var /** @type {?} */ date = setDayOfWeek(new Date(Date.UTC(2000, 1)), i, null, true);
                        this._minWeekdaysParse[i] = this.weekdaysMin(date).toLocaleLowerCase();
                        this._shortWeekdaysParse[i] = this.weekdaysShort(date).toLocaleLowerCase();
                        this._weekdaysParse[i] = this.weekdays(date, '').toLocaleLowerCase();
                    }
                }
                if (!isArray(this._weekdaysParse)
                    || !isArray(this._shortWeekdaysParse)
                    || !isArray(this._minWeekdaysParse)) {
                    return;
                }
                if (strict) {
                    if (format === 'dddd') {
                        ii = this._weekdaysParse.indexOf(llc);
                        return ii !== -1 ? ii : null;
                    }
                    else if (format === 'ddd') {
                        ii = this._shortWeekdaysParse.indexOf(llc);
                        return ii !== -1 ? ii : null;
                    }
                    else {
                        ii = this._minWeekdaysParse.indexOf(llc);
                        return ii !== -1 ? ii : null;
                    }
                }
                else {
                    if (format === 'dddd') {
                        ii = this._weekdaysParse.indexOf(llc);
                        if (ii !== -1) {
                            return ii;
                        }
                        ii = this._shortWeekdaysParse.indexOf(llc);
                        if (ii !== -1) {
                            return ii;
                        }
                        ii = this._minWeekdaysParse.indexOf(llc);
                        return ii !== -1 ? ii : null;
                    }
                    else if (format === 'ddd') {
                        ii = this._shortWeekdaysParse.indexOf(llc);
                        if (ii !== -1) {
                            return ii;
                        }
                        ii = this._weekdaysParse.indexOf(llc);
                        if (ii !== -1) {
                            return ii;
                        }
                        ii = this._minWeekdaysParse.indexOf(llc);
                        return ii !== -1 ? ii : null;
                    }
                    else {
                        ii = this._minWeekdaysParse.indexOf(llc);
                        if (ii !== -1) {
                            return ii;
                        }
                        ii = this._weekdaysParse.indexOf(llc);
                        if (ii !== -1) {
                            return ii;
                        }
                        ii = this._shortWeekdaysParse.indexOf(llc);
                        return ii !== -1 ? ii : null;
                    }
                }
            };
        /**
         * @return {?}
         */
        Locale.prototype.computeMonthsParse = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ shortPieces = [];
                var /** @type {?} */ longPieces = [];
                var /** @type {?} */ mixedPieces = [];
                var /** @type {?} */ date;
                var /** @type {?} */ i;
                for (i = 0; i < 12; i++) {
                    // make the regex if we don't have it already
                    date = new Date(2000, i);
                    shortPieces.push(this.monthsShort(date, ''));
                    longPieces.push(this.months(date, ''));
                    mixedPieces.push(this.months(date, ''));
                    mixedPieces.push(this.monthsShort(date, ''));
                }
                // Sorting makes sure if one month (or abbr) is a prefix of another it
                // will match the longer piece.
                shortPieces.sort(cmpLenRev);
                longPieces.sort(cmpLenRev);
                mixedPieces.sort(cmpLenRev);
                for (i = 0; i < 12; i++) {
                    shortPieces[i] = regexEscape(shortPieces[i]);
                    longPieces[i] = regexEscape(longPieces[i]);
                }
                for (i = 0; i < 24; i++) {
                    mixedPieces[i] = regexEscape(mixedPieces[i]);
                }
                this._monthsRegex = new RegExp("^(" + mixedPieces.join('|') + ")", 'i');
                this._monthsShortRegex = this._monthsRegex;
                this._monthsStrictRegex = new RegExp("^(" + longPieces.join('|') + ")", 'i');
                this._monthsShortStrictRegex = new RegExp("^(" + shortPieces.join('|') + ")", 'i');
            };
        /**
         * @return {?}
         */
        Locale.prototype.computeWeekdaysParse = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ minPieces = [];
                var /** @type {?} */ shortPieces = [];
                var /** @type {?} */ longPieces = [];
                var /** @type {?} */ mixedPieces = [];
                var /** @type {?} */ i;
                for (i = 0; i < 7; i++) {
                    // make the regex if we don't have it already
                    // let mom = createUTC([2000, 1]).day(i);
                    var /** @type {?} */ date = setDayOfWeek(new Date(Date.UTC(2000, 1)), i, null, true);
                    var /** @type {?} */ minp = this.weekdaysMin(date);
                    var /** @type {?} */ shortp = this.weekdaysShort(date);
                    var /** @type {?} */ longp = this.weekdays(date);
                    minPieces.push(minp);
                    shortPieces.push(shortp);
                    longPieces.push(longp);
                    mixedPieces.push(minp);
                    mixedPieces.push(shortp);
                    mixedPieces.push(longp);
                }
                // Sorting makes sure if one weekday (or abbr) is a prefix of another it
                // will match the longer piece.
                minPieces.sort(cmpLenRev);
                shortPieces.sort(cmpLenRev);
                longPieces.sort(cmpLenRev);
                mixedPieces.sort(cmpLenRev);
                for (i = 0; i < 7; i++) {
                    shortPieces[i] = regexEscape(shortPieces[i]);
                    longPieces[i] = regexEscape(longPieces[i]);
                    mixedPieces[i] = regexEscape(mixedPieces[i]);
                }
                this._weekdaysRegex = new RegExp("^(" + mixedPieces.join('|') + ")", 'i');
                this._weekdaysShortRegex = this._weekdaysRegex;
                this._weekdaysMinRegex = this._weekdaysRegex;
                this._weekdaysStrictRegex = new RegExp("^(" + longPieces.join('|') + ")", 'i');
                this._weekdaysShortStrictRegex = new RegExp("^(" + shortPieces.join('|') + ")", 'i');
                this._weekdaysMinStrictRegex = new RegExp("^(" + minPieces.join('|') + ")", 'i');
            };
        return Locale;
    }());
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ defaultInvalidDate = 'Invalid date';
    var /** @type {?} */ defaultLocaleWeek = {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6 // The week that contains Jan 1st is the first week of the year.
    };
    var /** @type {?} */ defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    var /** @type {?} */ defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
    };
    var /** @type {?} */ baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,
        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,
        week: defaultLocaleWeek,
        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,
        meridiemParse: defaultLocaleMeridiemParse
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     * @param {?} array1
     * @param {?} array2
     * @param {?} dontConvert
     * @return {?}
     */
    function compareArrays(array1, array2, dontConvert) {
        var /** @type {?} */ len = Math.min(array1.length, array2.length);
        var /** @type {?} */ lengthDiff = Math.abs(array1.length - array2.length);
        var /** @type {?} */ diffs = 0;
        var /** @type {?} */ i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i])
                || (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ locales = {};
    var /** @type {?} */ localeFamilies = {};
    var /** @type {?} */ globalLocale;
    /**
     * @param {?} key
     * @return {?}
     */
    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }
    /**
     * @param {?} names
     * @return {?}
     */
    function chooseLocale(names) {
        var /** @type {?} */ next;
        var /** @type {?} */ locale;
        var /** @type {?} */ i = 0;
        while (i < names.length) {
            var /** @type {?} */ split = normalizeLocale(names[i]).split('-');
            var /** @type {?} */ j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    // the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }
    /**
     * @param {?} parentConfig
     * @param {?} childConfig
     * @return {?}
     */
    function mergeConfigs(parentConfig, childConfig) {
        var /** @type {?} */ res = Object.assign({}, parentConfig);
        for (var /** @type {?} */ childProp in childConfig) {
            if (!hasOwnProp(childConfig, childProp)) {
                continue;
            }
            if (isObject(parentConfig[childProp]) && isObject(childConfig[childProp])) {
                res[childProp] = {};
                Object.assign(res[childProp], parentConfig[childProp]);
                Object.assign(res[childProp], childConfig[childProp]);
            }
            else if (childConfig[childProp] != null) {
                res[childProp] = childConfig[childProp];
            }
            else {
                delete res[childProp];
            }
        }
        var /** @type {?} */ parentProp;
        for (parentProp in parentConfig) {
            if (hasOwnProp(parentConfig, parentProp) &&
                !hasOwnProp(childConfig, parentProp) &&
                isObject(parentConfig[(parentProp)])) {
                // make sure changes to properties don't modify parent config
                res[(parentProp)] = Object.assign({}, res[(parentProp)]);
            }
        }
        return res;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    function loadLocale(name) {
        // no way!
        /* var oldLocale = null;
           // TODO: Find a better way to register and load all the locales in Node
           if (!locales[name] && (typeof module !== 'undefined') &&
             module && module.exports) {
             try {
               oldLocale = globalLocale._abbr;
               var aliasedRequire = require;
               aliasedRequire('./locale/' + name);
               getSetGlobalLocale(oldLocale);
             } catch (e) {}
           }*/
        if (!locales[name]) {
            // tslint:disable-next-line
            console.error("Khronos locale error: please load locale \"" + name + "\" before using it");
            // throw new Error(`Khronos locale error: please load locale "${name}" before using it`);
        }
        return locales[name];
    }
    /**
     * @param {?=} key
     * @param {?=} values
     * @return {?}
     */
    function getSetGlobalLocale(key, values) {
        var /** @type {?} */ data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            }
            else if (isString(key)) {
                data = defineLocale(key, values);
            }
            if (data) {
                globalLocale = data;
            }
        }
        return globalLocale && globalLocale._abbr;
    }
    /**
     * @param {?} name
     * @param {?=} config
     * @return {?}
     */
    function defineLocale(name, config) {
        if (config === null) {
            // useful for testing
            delete locales[name];
            globalLocale = getLocale('en');
            return null;
        }
        if (!config) {
            return;
        }
        var /** @type {?} */ parentConfig = baseConfig;
        config.abbr = name;
        if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            }
            else {
                if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({ name: name, config: config });
                return null;
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));
        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }
        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);
        return locales[name];
    }
    /**
     * @param {?} name
     * @param {?=} config
     * @return {?}
     */
    function updateLocale(name, config) {
        var /** @type {?} */ _config = config;
        if (_config != null) {
            var /** @type {?} */ parentConfig = baseConfig;
            // MERGE
            var /** @type {?} */ tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            _config = mergeConfigs(parentConfig, _config);
            var /** @type {?} */ locale = new Locale(_config);
            locale.parentLocale = locales[name];
            locales[name] = locale;
            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        }
        else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                }
                else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }
    /**
     * @param {?=} key
     * @return {?}
     */
    function getLocale(key) {
        if (!key) {
            return globalLocale;
        }
        // let locale;
        var /** @type {?} */ _key = isArray(key) ? key : [key];
        return chooseLocale(_key);
    }
    /**
     * @return {?}
     */
    function listLocales() {
        return Object.keys(locales);
    }
    // define default locale
    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: /**
         * @param {?} num
         * @return {?}
         */ function (num) {
            var /** @type {?} */ b = num % 10;
            var /** @type {?} */ output = toInt((num % 100) / 10) === 1
                ? 'th'
                : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
            return num + output;
        }
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ ordering = ['year', 'quarter', 'month', 'week', 'day', 'hours', 'minutes', 'seconds', 'milliseconds'];
    var ɵ0 = function (mem, order) {
        mem[order] = true;
        return mem;
    };
    var /** @type {?} */ orderingHash = ordering.reduce(ɵ0, {});
    /**
     * @param {?} duration
     * @return {?}
     */
    function isDurationValid(duration) {
        var /** @type {?} */ durationKeys = Object.keys(duration);
        if (durationKeys
            .some(function (key) {
            return (key in orderingHash)
                && duration[key] === null
                || isNaN(duration[key]);
        })) {
            return false;
        }
        // for (let key in duration) {
        //   if (!(indexOf.call(ordering, key) !== -1 && (duration[key] == null || !isNaN(duration[key])))) {
        //     return false;
        //   }
        // }
        var /** @type {?} */ unitHasDecimal = false;
        for (var /** @type {?} */ i = 0; i < ordering.length; ++i) {
            if (duration[ordering[i]]) {
                // only allow non-integers for smallest unit
                if (unitHasDecimal) {
                    return false;
                }
                if (duration[ordering[i]] !== toInt(duration[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }
        return true;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} number
     * @return {?}
     */
    function absCeil(number) {
        return number < 0 ? Math.floor(number) : Math.ceil(number);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} dur
     * @return {?}
     */
    function bubble(dur) {
        var /** @type {?} */ milliseconds = dur._milliseconds;
        var /** @type {?} */ days = dur._days;
        var /** @type {?} */ months = dur._months;
        var /** @type {?} */ data = dur._data;
        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }
        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;
        var /** @type {?} */ seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;
        var /** @type {?} */ minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;
        var /** @type {?} */ hours = absFloor(minutes / 60);
        data.hours = hours % 24;
        days += absFloor(hours / 24);
        // convert days to months
        var /** @type {?} */ monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));
        // 12 months -> 1 year
        var /** @type {?} */ years = absFloor(months / 12);
        months %= 12;
        data.day = days;
        data.month = months;
        data.year = years;
        return dur;
    }
    /**
     * @param {?} day
     * @return {?}
     */
    function daysToMonths(day) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return day * 4800 / 146097;
    }
    /**
     * @param {?} month
     * @return {?}
     */
    function monthsToDays(month) {
        // the reverse of daysToMonths
        return month * 146097 / 4800;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ round = Math.round;
    var /** @type {?} */ thresholds = {
        ss: 44,
        // a few seconds to seconds
        s: 45,
        // seconds to minute
        m: 45,
        // minutes to hour
        h: 22,
        // hours to day
        d: 26,
        // days to month
        M: 11 // months to year
    };
    /**
     * @param {?} str
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} isFuture
     * @param {?} locale
     * @return {?}
     */
    function substituteTimeAgo(str, num, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(num || 1, !!withoutSuffix, str, isFuture);
    }
    /**
     * @param {?} posNegDuration
     * @param {?} withoutSuffix
     * @param {?} locale
     * @return {?}
     */
    function relativeTime(posNegDuration, withoutSuffix, locale) {
        var /** @type {?} */ duration = createDuration(posNegDuration).abs();
        var /** @type {?} */ seconds = round(duration.as('s'));
        var /** @type {?} */ minutes = round(duration.as('m'));
        var /** @type {?} */ hours = round(duration.as('h'));
        var /** @type {?} */ days = round(duration.as('d'));
        var /** @type {?} */ months = round(duration.as('M'));
        var /** @type {?} */ years = round(duration.as('y'));
        var /** @type {?} */ a = seconds <= thresholds["ss"] && ['s', seconds] ||
            seconds < thresholds["s"] && ['ss', seconds] ||
            minutes <= 1 && ['m'] ||
            minutes < thresholds["m"] && ['mm', minutes] ||
            hours <= 1 && ['h'] ||
            hours < thresholds["h"] && ['hh', hours] ||
            days <= 1 && ['d'] ||
            days < thresholds["d"] && ['dd', days] ||
            months <= 1 && ['M'] ||
            months < thresholds["M"] && ['MM', months] ||
            years <= 1 && ['y'] || ['yy', years];
        var /** @type {?} */ b = [a[0], a[1], withoutSuffix, +posNegDuration > 0, locale];
        // a[2] = withoutSuffix;
        // a[3] = +posNegDuration > 0;
        // a[4] = locale;
        return substituteTimeAgo.apply(null, b);
    }
    // export function humanize(withSuffix) {
    //   if (!this.isValid()) {
    //     return this.localeData().invalidDate();
    //   }
    //
    //   const locale = this.localeData();
    //   let output = relativeTime(this, !withSuffix, locale);
    //
    //   if (withSuffix) {
    //     output = locale.pastFuture(+this, output);
    //   }
    //
    //   return locale.postformat(output);
    // }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Duration = (function () {
        function Duration(duration, config) {
            if (config === void 0) {
                config = {};
            }
            this._data = {};
            this._locale = getLocale();
            this._locale = config && config._locale || getLocale();
            // const normalizedInput = normalizeObjectUnits(duration);
            var /** @type {?} */ normalizedInput = duration;
            var /** @type {?} */ years = normalizedInput.year || 0;
            var /** @type {?} */ quarters = normalizedInput.quarter || 0;
            var /** @type {?} */ months = normalizedInput.month || 0;
            var /** @type {?} */ weeks = normalizedInput.week || 0;
            var /** @type {?} */ days = normalizedInput.day || 0;
            var /** @type {?} */ hours = normalizedInput.hours || 0;
            var /** @type {?} */ minutes = normalizedInput.minutes || 0;
            var /** @type {?} */ seconds = normalizedInput.seconds || 0;
            var /** @type {?} */ milliseconds = normalizedInput.milliseconds || 0;
            this._isValid = isDurationValid(normalizedInput);
            // representation for dateAddRemove
            this._milliseconds = +milliseconds +
                seconds * 1000 +
                minutes * 60 * 1000 + // 1000 * 60
                // 1000 * 60
                hours * 1000 * 60 * 60; // using 1000 * 60 * 60
            // instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
            // Because of dateAddRemove treats 24 hours as different from a
            // day when working around DST, we need to store them separately
            this._days = +days +
                weeks * 7;
            // It is impossible to translate months into days without knowing
            // which months you are are talking about, so we have to store
            // it separately.
            this._months = +months +
                quarters * 3 +
                years * 12;
            // this._data = {};
            // this._locale = getLocale();
            // this._bubble();
            return bubble(this);
        }
        /**
         * @return {?}
         */
        Duration.prototype.isValid = /**
         * @return {?}
         */
            function () {
                return this._isValid;
            };
        /**
         * @param {?=} withSuffix
         * @return {?}
         */
        Duration.prototype.humanize = /**
         * @param {?=} withSuffix
         * @return {?}
         */
            function (withSuffix) {
                // throw new Error(`TODO: implement`);
                if (!this.isValid()) {
                    return this.localeData().invalidDate;
                }
                var /** @type {?} */ locale = this.localeData();
                var /** @type {?} */ output = relativeTime(this, !withSuffix, locale);
                if (withSuffix) {
                    output = locale.pastFuture(+this, output);
                }
                return locale.postformat(output);
            };
        /**
         * @return {?}
         */
        Duration.prototype.localeData = /**
         * @return {?}
         */
            function () {
                return this._locale;
            };
        /**
         * @param {?=} localeKey
         * @return {?}
         */
        Duration.prototype.locale = /**
         * @param {?=} localeKey
         * @return {?}
         */
            function (localeKey) {
                if (!localeKey) {
                    return this._locale._abbr;
                }
                this._locale = getLocale(localeKey) || this._locale;
                return this;
            };
        /**
         * @return {?}
         */
        Duration.prototype.abs = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ mathAbs = Math.abs;
                var /** @type {?} */ data = this._data;
                this._milliseconds = mathAbs(this._milliseconds);
                this._days = mathAbs(this._days);
                this._months = mathAbs(this._months);
                data.milliseconds = mathAbs(data.milliseconds);
                data.seconds = mathAbs(data.seconds);
                data.minutes = mathAbs(data.minutes);
                data.hours = mathAbs(data.hours);
                data.month = mathAbs(data.month);
                data.year = mathAbs(data.year);
                return this;
            };
        /**
         * @param {?} _units
         * @return {?}
         */
        Duration.prototype.as = /**
         * @param {?} _units
         * @return {?}
         */
            function (_units) {
                if (!this.isValid()) {
                    return NaN;
                }
                var /** @type {?} */ days;
                var /** @type {?} */ months;
                var /** @type {?} */ milliseconds = this._milliseconds;
                var /** @type {?} */ units = normalizeUnits(_units);
                if (units === 'month' || units === 'year') {
                    days = this._days + milliseconds / 864e5;
                    months = this._months + daysToMonths(days);
                    return units === 'month' ? months : months / 12;
                }
                // handle milliseconds separately because of floating point math errors (issue #1867)
                days = this._days + Math.round(monthsToDays(this._months));
                switch (units) {
                    case 'week':
                        return days / 7 + milliseconds / 6048e5;
                    case 'day':
                        return days + milliseconds / 864e5;
                    case 'hours':
                        return days * 24 + milliseconds / 36e5;
                    case 'minutes':
                        return days * 1440 + milliseconds / 6e4;
                    case 'seconds':
                        return days * 86400 + milliseconds / 1000;
                    // Math.floor prevents floating point math errors here
                    case 'milliseconds':
                        return Math.floor(days * 864e5) + milliseconds;
                    default:
                        throw new Error("Unknown unit " + units);
                }
            };
        /**
         * @return {?}
         */
        Duration.prototype.valueOf = /**
         * @return {?}
         */
            function () {
                if (!this.isValid()) {
                    return NaN;
                }
                return (this._milliseconds +
                    this._days * 864e5 +
                    (this._months % 12) * 2592e6 +
                    toInt(this._months / 12) * 31536e6);
            };
        return Duration;
    }());
    /**
     * @param {?} obj
     * @return {?}
     */
    function isDuration(obj) {
        return obj instanceof Duration;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} config
     * @return {?}
     */
    function isValid(config) {
        if (config._isValid == null) {
            var /** @type {?} */ flags = getParsingFlags(config);
            var /** @type {?} */ parsedParts = Array.prototype.some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var /** @type {?} */ isNowValid = !isNaN(config._d && config._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));
            if (config._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }
            if (Object.isFrozen == null || !Object.isFrozen(config)) {
                config._isValid = isNowValid;
            }
            else {
                return isNowValid;
            }
        }
        return config._isValid;
    }
    /**
     * @param {?} config
     * @param {?=} flags
     * @return {?}
     */
    function createInvalid(config, flags) {
        config._d = new Date(NaN);
        Object.assign(getParsingFlags(config), flags || { userInvalidated: true });
        return config;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    function markInvalid(config) {
        config._isValid = false;
        return config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    // tslint:disable-next-line
    var /** @type {?} */ extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    // tslint:disable-next-line
    var /** @type {?} */ basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var /** @type {?} */ tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
    var /** @type {?} */ isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/, true],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/, true],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/, true],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/, true],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/, true],
        ['YYYYMMDD', /\d{8}/, true],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/, true],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/, true]
    ];
    // iso time formats and regexes
    var /** @type {?} */ isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];
    var /** @type {?} */ aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
    var /** @type {?} */ obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };
    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    // tslint:disable-next-line
    var /** @type {?} */ rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
    /**
     * @param {?} config
     * @return {?}
     */
    function configFromISO(config) {
        if (!isString(config._i)) {
            return config;
        }
        var /** @type {?} */ input = config._i;
        var /** @type {?} */ match = extendedIsoRegex.exec(input) || basicIsoRegex.exec(input);
        var /** @type {?} */ allowTime;
        var /** @type {?} */ dateFormat;
        var /** @type {?} */ timeFormat;
        var /** @type {?} */ tzFormat;
        if (!match) {
            config._isValid = false;
            return config;
        }
        // getParsingFlags(config).iso = true;
        var /** @type {?} */ i;
        var /** @type {?} */ l;
        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return config;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return config;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return config;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            }
            else {
                config._isValid = false;
                return config;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        return configFromStringAndFormat(config);
    }
    /**
     * @param {?} yearStr
     * @param {?} monthStr
     * @param {?} dayStr
     * @param {?} hourStr
     * @param {?} minuteStr
     * @param {?} secondStr
     * @return {?}
     */
    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var /** @type {?} */ result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
        ];
        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }
        return result;
    }
    /**
     * @param {?} yearStr
     * @return {?}
     */
    function untruncateYear(yearStr) {
        var /** @type {?} */ year = parseInt(yearStr, 10);
        return year <= 49 ? year + 2000 : year;
    }
    /**
     * @param {?} str
     * @return {?}
     */
    function preprocessRFC2822(str) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return str
            .replace(/\([^)]*\)|[\n\t]/g, ' ')
            .replace(/(\s\s+)/g, ' ').trim();
    }
    /**
     * @param {?} weekdayStr
     * @param {?} parsedInput
     * @param {?} config
     * @return {?}
     */
    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var /** @type {?} */ weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr);
            var /** @type {?} */ weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }
    /**
     * @param {?} obsOffset
     * @param {?} militaryOffset
     * @param {?} numOffset
     * @return {?}
     */
    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        }
        else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        }
        else {
            var /** @type {?} */ hm = parseInt(numOffset, 10);
            var /** @type {?} */ m = hm % 100;
            var /** @type {?} */ h = (hm - m) / 100;
            return h * 60 + m;
        }
    }
    /**
     * @param {?} config
     * @return {?}
     */
    function configFromRFC2822(config) {
        if (!isString(config._i)) {
            return config;
        }
        var /** @type {?} */ match = rfc2822.exec(preprocessRFC2822(config._i));
        if (!match) {
            return markInvalid(config);
        }
        var /** @type {?} */ parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
        if (!checkWeekday(match[1], parsedArray, config)) {
            return config;
        }
        config._a = parsedArray;
        config._tzm = calculateOffset(match[8], match[9], match[10]);
        config._d = createUTCDate.apply(null, config._a);
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        getParsingFlags(config).rfc2822 = true;
        return config;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    function configFromString(config) {
        if (!isString(config._i)) {
            return config;
        }
        var /** @type {?} */ matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return config;
        }
        // todo: update logic processing
        // isISO -> configFromISO
        // isRFC -> configFromRFC
        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        }
        else {
            return config;
        }
        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        }
        else {
            return config;
        }
        // Final attempt, use Input Fallback
        // hooks.createFromInputFallback(config);
        return createInvalid(config);
    }
    // hooks.createFromInputFallback = deprecate(
    //     'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
    //     'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
    //     'discouraged and will be removed in an upcoming major release. Please refer to ' +
    //     'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    //     function (config) {
    //         config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    //     }
    // );

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} date
     * @param {?} format
     * @param {?=} locale
     * @param {?=} isUTC
     * @param {?=} offset
     * @return {?}
     */
    function formatDate(date, format, locale, isUTC, offset) {
        if (offset === void 0) {
            offset = 0;
        }
        var /** @type {?} */ _locale = getLocale(locale || 'en');
        if (!_locale) {
            throw new Error("Locale \"" + locale + "\" is not defined, please add it with \"defineLocale(...)\"");
        }
        var /** @type {?} */ _format = format || (isUTC ? 'YYYY-MM-DDTHH:mm:ss[Z]' : 'YYYY-MM-DDTHH:mm:ssZ');
        var /** @type {?} */ output = formatMoment(date, _format, _locale, isUTC, offset);
        if (!output) {
            return output;
        }
        return _locale.postformat(output);
    }
    /**
     * @param {?} date
     * @param {?} _format
     * @param {?} locale
     * @param {?=} isUTC
     * @param {?=} offset
     * @return {?}
     */
    function formatMoment(date, _format, locale, isUTC, offset) {
        if (offset === void 0) {
            offset = 0;
        }
        if (!isDateValid(date)) {
            return locale.invalidDate;
        }
        var /** @type {?} */ format = expandFormat(_format, locale);
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
        return formatFunctions[format](date, locale, isUTC, offset);
    }
    /**
     * @param {?} _format
     * @param {?} locale
     * @return {?}
     */
    function expandFormat(_format, locale) {
        var /** @type {?} */ format = _format;
        var /** @type {?} */ i = 5;
        var /** @type {?} */ localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
        var /** @type {?} */ replaceLongDateFormatTokens = function (input) {
            return locale.formatLongDate(input) || input;
        };
        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }
        return format;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     * @param {?=} a
     * @param {?=} b
     * @param {?=} c
     * @return {?}
     */
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} config
     * @return {?}
     */
    function currentDateArray(config) {
        var /** @type {?} */ nowValue = new Date();
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }
    /**
     * @param {?} config
     * @return {?}
     */
    function configFromArray(config) {
        var /** @type {?} */ input = [];
        var /** @type {?} */ i;
        var /** @type {?} */ date;
        var /** @type {?} */ currentDate;
        var /** @type {?} */ expectedWeekday;
        var /** @type {?} */ yearToUse;
        if (config._d) {
            return config;
        }
        currentDate = currentDateArray(config);
        // compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }
        // if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }
            date = new Date(Date.UTC(yearToUse, 0, config._dayOfYear));
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }
        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }
        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }
        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }
        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }
        if (config._nextDay) {
            config._a[HOUR] = 24;
        }
        // check for mismatching day of week
        if (config._w && typeof config._w["d"] !== 'undefined' && config._w["d"] !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
        }
        return config;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    function dayOfYearFromWeekInfo(config) {
        var /** @type {?} */ w, /** @type {?} */ weekYear, /** @type {?} */ week, /** @type {?} */ weekday, /** @type {?} */ dow, /** @type {?} */ doy, /** @type {?} */ temp, /** @type {?} */ weekdayOverflow;
        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;
            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(new Date(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        }
        else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;
            var /** @type {?} */ curWeek = weekOfYear(new Date(), dow, doy);
            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
            // Default to current week.
            week = defaults(w.w, curWeek.week);
            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            }
            else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            }
            else {
                // default to begining of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        }
        else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        }
        else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
        return config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} config
     * @return {?}
     */
    function checkOverflow(config) {
        var /** @type {?} */ overflow;
        var /** @type {?} */ a = config._a;
        if (a && getParsingFlags(config).overflow === -2) {
            // todo: fix this sh*t
            overflow =
                a[MONTH] < 0 || a[MONTH] > 11 ? MONTH :
                    a[DATE] < 1 || a[DATE] > daysInMonth$1(a[YEAR], a[MONTH]) ? DATE :
                        a[HOUR] < 0 || a[HOUR] > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                            a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE :
                                a[SECOND] < 0 || a[SECOND] > 59 ? SECOND :
                                    a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                                        -1;
            if (getParsingFlags(config)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(config)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(config)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }
            getParsingFlags(config).overflow = overflow;
        }
        return config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // constant that refers to the ISO standard
    // hooks.ISO_8601 = function () {};
    var /** @type {?} */ ISO_8601 = 'ISO_8601';
    // constant that refers to the RFC 2822 form
    // hooks.RFC_2822 = function () {};
    var /** @type {?} */ RFC_2822 = 'RFC_2822';
    /**
     * @param {?} config
     * @return {?}
     */
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === ISO_8601) {
            return configFromISO(config);
        }
        if (config._f === RFC_2822) {
            return configFromRFC2822(config);
        }
        config._a = [];
        getParsingFlags(config).empty = true;
        if (isArray(config._f) || (!config._i && config._i !== 0)) {
            return config;
        }
        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var /** @type {?} */ input = config._i.toString();
        var /** @type {?} */ totalParsedInputLength = 0;
        var /** @type {?} */ inputLength = input.length;
        var /** @type {?} */ tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
        var /** @type {?} */ i;
        var /** @type {?} */ token;
        var /** @type {?} */ parsedInput;
        var /** @type {?} */ skipped;
        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (input.match(getParseRegexForToken(token, config._locale)) || [])[0];
            if (parsedInput) {
                skipped = input.substr(0, input.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                input = input.slice(input.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }
        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = inputLength - totalParsedInputLength;
        if (input.length > 0) {
            getParsingFlags(config).unusedInput.push(input);
        }
        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = void 0;
        }
        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
        configFromArray(config);
        return checkOverflow(config);
    }
    /**
     * @param {?} locale
     * @param {?} _hour
     * @param {?} meridiem
     * @return {?}
     */
    function meridiemFixWrap(locale, _hour, meridiem) {
        var /** @type {?} */ hour = _hour;
        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        }
        if (locale.isPM == null) {
            // this is not supposed to happen
            return hour;
        }
        // Fallback
        var /** @type {?} */ isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} config
     * @return {?}
     */
    function configFromStringAndArray(config) {
        var /** @type {?} */ tempConfig;
        var /** @type {?} */ bestMoment;
        var /** @type {?} */ scoreToBeat;
        var /** @type {?} */ currentScore;
        if (!config._f || config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            return createInvalid(config);
        }
        var /** @type {?} */ i;
        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = Object.assign({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);
            if (!isValid(tempConfig)) {
                continue;
            }
            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;
            // or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
            getParsingFlags(tempConfig).score = currentScore;
            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }
        return Object.assign(config, bestMoment || tempConfig);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} config
     * @return {?}
     */
    function configFromObject(config) {
        if (config._d) {
            return config;
        }
        var /** @type {?} */ input = config._i;
        if (isObject(input)) {
            var /** @type {?} */ i = normalizeObjectUnits(/** @type {?} */ (input));
            config._a = [i.year, i.month, i.day, i.hours, i.minutes, i.seconds, i.milliseconds]
                .map(function (obj) { return isString(obj) ? parseInt(obj, 10) : obj; });
        }
        return configFromArray(config);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} config
     * @return {?}
     */
    function createFromConfig(config) {
        var /** @type {?} */ res = checkOverflow(prepareConfig(config));
        // todo: remove, in moment.js it's never called cuz of moment constructor
        res._d = new Date(res._d != null ? res._d.getTime() : NaN);
        if (!isValid(Object.assign({}, res, { _isValid: null }))) {
            res._d = new Date(NaN);
        }
        // todo: update offset
        /*if (res._nextDay) {
            // Adding is smart enough around DST
            res._d = add(res._d, 1, 'day');
            res._nextDay = undefined;
          }*/
        return res;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    function prepareConfig(config) {
        var /** @type {?} */ input = config._i;
        var /** @type {?} */ format = config._f;
        config._locale = config._locale || getLocale(config._l);
        if (input === null || (format === undefined && input === '')) {
            return createInvalid(config, { nullInput: true });
        }
        if (isString(input)) {
            config._i = input = config._locale.preparse(input);
        }
        if (isDate(input)) {
            config._d = cloneDate(input);
            return config;
        }
        // todo: add check for recursion
        if (isArray(format)) {
            configFromStringAndArray(config);
        }
        else if (format) {
            configFromStringAndFormat(config);
        }
        else {
            configFromInput(config);
        }
        if (!isValid(config)) {
            config._d = null;
        }
        return config;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    function configFromInput(config) {
        var /** @type {?} */ input = config._i;
        if (isUndefined(input)) {
            config._d = new Date();
        }
        else if (isDate(input)) {
            config._d = cloneDate(input);
        }
        else if (isString(input)) {
            configFromString(config);
        }
        else if (isArray(input) && input.length) {
            var /** @type {?} */ _arr = input.slice(0);
            config._a = _arr.map(function (obj) { return isString(obj) ? parseInt(obj, 10) : obj; });
            configFromArray(config);
        }
        else if (isObject(input)) {
            configFromObject(config);
        }
        else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        }
        else {
            //   hooks.createFromInputFallback(config);
            return createInvalid(config);
        }
        return config;
    }
    /**
     * @param {?} input
     * @param {?=} format
     * @param {?=} localeKey
     * @param {?=} strict
     * @param {?=} isUTC
     * @return {?}
     */
    function createLocalOrUTC(input, format, localeKey, strict, isUTC) {
        var /** @type {?} */ config = {};
        var /** @type {?} */ _input = input;
        // params switch -> skip; test it well
        // if (localeKey === true || localeKey === false) {
        //     strict = localeKey;
        //     localeKey = undefined;
        // }
        // todo: fail fast and return not valid date
        if ((isObject(_input) && isObjectEmpty(_input)) || (isArray(_input) && _input.length === 0)) {
            _input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        // config._isAMomentObject = true;
        config._useUTC = config._isUTC = isUTC;
        config._l = localeKey;
        config._i = _input;
        config._f = format;
        config._strict = strict;
        return createFromConfig(config);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} input
     * @param {?=} format
     * @param {?=} localeKey
     * @param {?=} strict
     * @param {?=} isUTC
     * @return {?}
     */
    function parseDate(input, format, localeKey, strict, isUTC) {
        if (isDate(input)) {
            return input;
        }
        var /** @type {?} */ config = createLocalOrUTC(input, format, localeKey, strict, isUTC);
        return config._d;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} num
     * @return {?}
     */
    function absRound(num) {
        return num < 0 ? Math.round(num * -1) * -1 : Math.round(num);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} token
     * @param {?} separator
     * @return {?}
     */
    function addOffsetFormatToken(token, separator) {
        addFormatToken(token, null, null, function (date, config) {
            var /** @type {?} */ offset = getUTCOffset(date, { _isUTC: config.isUTC, _offset: config.offset });
            var /** @type {?} */ sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }
    addOffsetFormatToken('Z', ':');
    addOffsetFormatToken('ZZ', '');
    // PARSING
    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
        return config;
    });
    // HELPERS
    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var /** @type {?} */ chunkOffset = /([\+\-]|\d\d)/gi;
    /**
     * @param {?} matcher
     * @param {?} str
     * @return {?}
     */
    function offsetFromString(matcher, str) {
        var /** @type {?} */ matches = (str || '').match(matcher);
        if (matches === null) {
            return null;
        }
        var /** @type {?} */ chunk = matches[matches.length - 1];
        var /** @type {?} */ parts = chunk.match(chunkOffset) || ['-', '0', '0'];
        var /** @type {?} */ minutes = parseInt(parts[1], 10) * 60 + toInt(parts[2]);
        var /** @type {?} */ _min = parts[0] === '+' ? minutes : -minutes;
        return minutes === 0 ? 0 : _min;
    }
    /**
     * @param {?} input
     * @param {?} date
     * @param {?=} config
     * @return {?}
     */
    function cloneWithOffset(input, date, config) {
        if (config === void 0) {
            config = {};
        }
        if (!config._isUTC) {
            return input;
        }
        var /** @type {?} */ res = cloneDate(date);
        // todo: input._d - res._d + ((res._offset || 0) - (input._offset || 0))*60000
        var /** @type {?} */ offsetDiff = (config._offset || 0) * 60000;
        var /** @type {?} */ diff = input.valueOf() - res.valueOf() + offsetDiff;
        // Use low-level api, because this fn is low-level api.
        res.setTime(res.valueOf() + diff);
        // todo: add timezone handling
        // hooks.updateOffset(res, false);
        return res;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    function getDateOffset(date) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(date.getTimezoneOffset() / 15) * 15;
    }
    /**
     * @param {?} date
     * @param {?=} config
     * @return {?}
     */
    function getUTCOffset(date, config) {
        if (config === void 0) {
            config = {};
        }
        var /** @type {?} */ _offset = config._offset || 0;
        return config._isUTC ? _offset : getDateOffset(date);
    }
    // DEPRECATED
    /*export function isDaylightSavingTimeShifted() {
      if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
      }

      const c = {};

      copyConfig(c, this);
      c = prepareConfig(c);

      if (c._a) {
        const other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
          compareArrays(c._a, other.toArray()) > 0;
      } else {
        this._isDSTShifted = false;
      }

      return this._isDSTShifted;
    }*/
    // in Khronos
    /*export function isLocal() {
      return this.isValid() ? !this._isUTC : false;
    }

    export function isUtcOffset() {
      return this.isValid() ? this._isUTC : false;
    }

    export function isUtc() {
      return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }*/

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} date1
     * @param {?} date2
     * @param {?=} units
     * @return {?}
     */
    function isAfter(date1, date2, units) {
        if (units === void 0) {
            units = 'milliseconds';
        }
        if (!date1 || !date2) {
            return false;
        }
        if (units === 'milliseconds') {
            return date1.valueOf() > date2.valueOf();
        }
        return date2.valueOf() < startOf(date1, units).valueOf();
    }
    /**
     * @param {?} date1
     * @param {?} date2
     * @param {?=} units
     * @return {?}
     */
    function isBefore(date1, date2, units) {
        if (units === void 0) {
            units = 'milliseconds';
        }
        if (!date1 || !date2) {
            return false;
        }
        if (units === 'milliseconds') {
            return date1.valueOf() < date2.valueOf();
        }
        return endOf(date1, units).valueOf() < date2.valueOf();
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    // tslint:disable-next-line
    var /** @type {?} */ isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    /**
     * @param {?=} input
     * @param {?=} key
     * @param {?=} config
     * @return {?}
     */
    function createDuration(input, key, config) {
        if (config === void 0) {
            config = {};
        }
        var /** @type {?} */ duration = convertDuration(input, key);
        // matching against regexp is expensive, do it on demand
        return new Duration(duration, config);
    }
    /**
     * @param {?} input
     * @param {?} key
     * @return {?}
     */
    function convertDuration(input, key) {
        // checks for null or undefined
        if (input == null) {
            return {};
        }
        if (isDuration(input)) {
            return {
                milliseconds: input._milliseconds,
                day: input._days,
                month: input._months
            };
        }
        if (isNumber(input)) {
            // duration = {};
            return key ? (_a = {}, _a[key] = input, _a) : { milliseconds: input };
        }
        if (isString(input)) {
            var /** @type {?} */ match = aspNetRegex.exec(input);
            if (match) {
                var /** @type {?} */ sign = (match[1] === '-') ? -1 : 1;
                return {
                    year: 0,
                    day: toInt(match[DATE]) * sign,
                    hours: toInt(match[HOUR]) * sign,
                    minutes: toInt(match[MINUTE]) * sign,
                    seconds: toInt(match[SECOND]) * sign,
                    // the millisecond decimal point is included in the match
                    milliseconds: toInt(absRound(toInt(match[MILLISECOND]) * 1000)) * sign
                };
            }
            match = isoRegex.exec(input);
            if (match) {
                var /** @type {?} */ sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;
                return {
                    year: parseIso(match[2], sign),
                    month: parseIso(match[3], sign),
                    week: parseIso(match[4], sign),
                    day: parseIso(match[5], sign),
                    hours: parseIso(match[6], sign),
                    minutes: parseIso(match[7], sign),
                    seconds: parseIso(match[8], sign)
                };
            }
        }
        if (isObject(input) && ('from' in input || 'to' in input)) {
            var /** @type {?} */ diffRes = momentsDifference(parseDate(input.from), parseDate(input.to));
            return {
                milliseconds: diffRes.milliseconds,
                month: diffRes.months
            };
        }
        return input;
        var _a;
    }
    /**
     * @param {?} inp
     * @param {?} sign
     * @return {?}
     */
    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var /** @type {?} */ res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }
    /**
     * @param {?} base
     * @param {?} other
     * @return {?}
     */
    function positiveMomentsDifference(base, other) {
        var /** @type {?} */ res = { milliseconds: 0, months: 0 };
        res.months = getMonth(other) - getMonth(base) +
            (getFullYear(other) - getFullYear(base)) * 12;
        var /** @type {?} */ _basePlus = add(cloneDate(base), res.months, 'month');
        if (isAfter(_basePlus, other)) {
            --res.months;
        }
        res.milliseconds = +other - +(add(cloneDate(base), res.months, 'month'));
        return res;
    }
    /**
     * @param {?} base
     * @param {?} other
     * @return {?}
     */
    function momentsDifference(base, other) {
        if (!(isDateValid(base) && isDateValid(other))) {
            return { milliseconds: 0, months: 0 };
        }
        var /** @type {?} */ res;
        var /** @type {?} */ _other = cloneWithOffset(other, base, { _offset: base.getTimezoneOffset() });
        if (isBefore(base, _other)) {
            res = positiveMomentsDifference(base, _other);
        }
        else {
            res = positiveMomentsDifference(_other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }
        return res;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} date
     * @param {?} val
     * @param {?} period
     * @param {?=} isUTC
     * @return {?}
     */
    function add(date, val, period, isUTC) {
        var /** @type {?} */ dur = createDuration(val, period);
        return addSubtract(date, dur, 1, isUTC);
    }
    /**
     * @param {?} date
     * @param {?} val
     * @param {?} period
     * @param {?=} isUTC
     * @return {?}
     */
    function subtract(date, val, period, isUTC) {
        var /** @type {?} */ dur = createDuration(val, period);
        return addSubtract(date, dur, -1, isUTC);
    }
    /**
     * @param {?} date
     * @param {?} duration
     * @param {?} isAdding
     * @param {?=} isUTC
     * @return {?}
     */
    function addSubtract(date, duration, isAdding, isUTC) {
        var /** @type {?} */ milliseconds = duration._milliseconds;
        var /** @type {?} */ days = absRound(duration._days);
        var /** @type {?} */ months = absRound(duration._months);
        // todo: add timezones support
        // const _updateOffset = updateOffset == null ? true : updateOffset;
        if (months) {
            setMonth(date, getMonth(date, isUTC) + months * isAdding, isUTC);
        }
        if (days) {
            setDate(date, getDate(date, isUTC) + days * isAdding, isUTC);
        }
        if (milliseconds) {
            setTime(date, getTime(date) + milliseconds * isAdding);
        }
        return cloneDate(date);
        // todo: add timezones support
        // if (_updateOffset) {
        //   hooks.updateOffset(date, days || months);
        // }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // FORMATTING
    addFormatToken('d', null, 'do', function (date, opts) {
        return getDay(date, opts.isUTC).toString(10);
    });
    addFormatToken('dd', null, null, function (date, opts) {
        return opts.locale.weekdaysMin(date, opts.format, opts.isUTC);
    });
    addFormatToken('ddd', null, null, function (date, opts) {
        return opts.locale.weekdaysShort(date, opts.format, opts.isUTC);
    });
    addFormatToken('dddd', null, null, function (date, opts) {
        return opts.locale.weekdays(date, opts.format, opts.isUTC);
    });
    addFormatToken('e', null, null, function (date, opts) {
        return getLocaleDayOfWeek(date, opts.locale, opts.isUTC).toString(10);
        // return getDay(date, opts.isUTC).toString(10);
    });
    addFormatToken('E', null, null, function (date, opts) {
        return getISODayOfWeek(date, opts.isUTC).toString(10);
    });
    // ALIASES
    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');
    // PARSING
    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });
    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var /** @type {?} */ weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week["d"] = weekday;
        }
        else {
            getParsingFlags(config).invalidWeekday = !!input;
        }
        return config;
    });
    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
        return config;
    });
    /**
     * @param {?} input
     * @param {?} locale
     * @return {?}
     */
    function parseWeekday(input, locale) {
        if (!isString(input)) {
            return input;
        }
        var /** @type {?} */ _num = parseInt(input, 10);
        if (!isNaN(_num)) {
            return _num;
        }
        var /** @type {?} */ _weekDay = locale.weekdaysParse(input);
        if (isNumber(_weekDay)) {
            return _weekDay;
        }
        return null;
    }
    /**
     * @param {?} input
     * @param {?=} locale
     * @return {?}
     */
    function parseIsoWeekday(input, locale) {
        if (locale === void 0) {
            locale = getLocale();
        }
        if (isString(input)) {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNumber(input) && isNaN(input) ? null : input;
    }
    /**
     * @param {?} date
     * @param {?} input
     * @param {?=} locale
     * @param {?=} isUTC
     * @return {?}
     */
    function setDayOfWeek(date, input, locale, isUTC) {
        if (locale === void 0) {
            locale = getLocale();
        }
        var /** @type {?} */ day = getDay(date, isUTC);
        var /** @type {?} */ _input = parseWeekday(input, locale);
        return add(date, _input - day, 'day');
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getDayOfWeek(date, isUTC) {
        return getDay(date, isUTC);
    }
    /**
     * ****************************************
     * @param {?} date
     * @param {?=} locale
     * @param {?=} isUTC
     * @return {?}
     */
    function getLocaleDayOfWeek(date, locale, isUTC) {
        if (locale === void 0) {
            locale = getLocale();
        }
        return (getDay(date, isUTC) + 7 - locale.firstDayOfWeek()) % 7;
    }
    /**
     * @param {?} date
     * @param {?} input
     * @param {?=} opts
     * @return {?}
     */
    function setLocaleDayOfWeek(date, input, opts) {
        if (opts === void 0) {
            opts = {};
        }
        var /** @type {?} */ weekday = getLocaleDayOfWeek(date, opts.locale, opts.isUTC);
        return add(date, input - weekday, 'day');
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getISODayOfWeek(date, isUTC) {
        return getDay(date, isUTC) || 7;
    }
    /**
     * @param {?} date
     * @param {?} input
     * @param {?=} opts
     * @return {?}
     */
    function setISODayOfWeek(date, input, opts) {
        if (opts === void 0) {
            opts = {};
        }
        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.
        var /** @type {?} */ weekday = parseIsoWeekday(input, opts.locale);
        return setDayOfWeek(date, getDayOfWeek(date) % 7 ? weekday : weekday - 7);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} date
     * @param {?} isUTC
     * @return {?}
     */
    function hFormat(date, isUTC) {
        return getHours(date, isUTC) % 12 || 12;
    }
    /**
     * @param {?} date
     * @param {?} isUTC
     * @return {?}
     */
    function kFormat(date, isUTC) {
        return getHours(date, isUTC) || 24;
    }
    addFormatToken('H', ['HH', 2, false], null, function (date, opts) {
        return getHours(date, opts.isUTC).toString(10);
    });
    addFormatToken('h', ['hh', 2, false], null, function (date, opts) {
        return hFormat(date, opts.isUTC).toString(10);
    });
    addFormatToken('k', ['kk', 2, false], null, function (date, opts) {
        return kFormat(date, opts.isUTC).toString(10);
    });
    addFormatToken('hmm', null, null, function (date, opts) {
        var /** @type {?} */ _h = hFormat(date, opts.isUTC);
        var /** @type {?} */ _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
        return "" + _h + _mm;
    });
    addFormatToken('hmmss', null, null, function (date, opts) {
        var /** @type {?} */ _h = hFormat(date, opts.isUTC);
        var /** @type {?} */ _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
        var /** @type {?} */ _ss = zeroFill(getSeconds(date, opts.isUTC), 2);
        return "" + _h + _mm + _ss;
    });
    addFormatToken('Hmm', null, null, function (date, opts) {
        var /** @type {?} */ _H = getHours(date, opts.isUTC);
        var /** @type {?} */ _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
        return "" + _H + _mm;
    });
    addFormatToken('Hmmss', null, null, function (date, opts) {
        var /** @type {?} */ _H = getHours(date, opts.isUTC);
        var /** @type {?} */ _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
        var /** @type {?} */ _ss = zeroFill(getSeconds(date, opts.isUTC), 2);
        return "" + _H + _mm + _ss;
    });
    /**
     * @param {?} token
     * @param {?} lowercase
     * @return {?}
     */
    function meridiem(token, lowercase) {
        addFormatToken(token, null, null, function (date, opts) {
            return opts.locale.meridiem(getHours(date, opts.isUTC), getMinutes(date, opts.isUTC), lowercase);
        });
    }
    meridiem('a', true);
    meridiem('A', false);
    // ALIASES
    addUnitAlias('hour', 'h');
    /**
     * @param {?} isStrict
     * @param {?} locale
     * @return {?}
     */
    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }
    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);
    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);
    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var /** @type {?} */ kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
        return config;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
        return config;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
        return config;
    });
    addParseToken('hmm', function (input, array, config) {
        var /** @type {?} */ pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
        return config;
    });
    addParseToken('hmmss', function (input, array, config) {
        var /** @type {?} */ pos1 = input.length - 4;
        var /** @type {?} */ pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
        return config;
    });
    addParseToken('Hmm', function (input, array, config) {
        var /** @type {?} */ pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        return config;
    });
    addParseToken('Hmmss', function (input, array, config) {
        var /** @type {?} */ pos1 = input.length - 4;
        var /** @type {?} */ pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        return config;
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    addFormatToken('S', null, null, function (date, opts) {
        return (~~(getMilliseconds(date, opts.isUTC) / 100)).toString(10);
    });
    addFormatToken(null, ['SS', 2, false], null, function (date, opts) {
        return (~~(getMilliseconds(date, opts.isUTC) / 10)).toString(10);
    });
    addFormatToken(null, ['SSS', 3, false], null, function (date, opts) {
        return (getMilliseconds(date, opts.isUTC)).toString(10);
    });
    addFormatToken(null, ['SSSS', 4, false], null, function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 10).toString(10);
    });
    addFormatToken(null, ['SSSSS', 5, false], null, function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 100).toString(10);
    });
    addFormatToken(null, ['SSSSSS', 6, false], null, function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 1000).toString(10);
    });
    addFormatToken(null, ['SSSSSSS', 7, false], null, function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 10000).toString(10);
    });
    addFormatToken(null, ['SSSSSSSS', 8, false], null, function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 100000).toString(10);
    });
    addFormatToken(null, ['SSSSSSSSS', 9, false], null, function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 1000000).toString(10);
    });
    // ALIASES
    addUnitAlias('millisecond', 'ms');
    // PARSING
    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);
    var /** @type {?} */ token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }
    /**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function parseMs(input, array, config) {
        array[MILLISECOND] = toInt(parseFloat("0." + input) * 1000);
        return config;
    }
    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // FORMATTING
    addFormatToken('m', ['mm', 2, false], null, function (date, opts) {
        return getMinutes(date, opts.isUTC).toString(10);
    });
    // ALIASES
    addUnitAlias('minute', 'm');
    // PARSING
    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // FORMATTING
    addFormatToken('Q', null, 'Qo', function (date, opts) {
        return getQuarter(date, opts.isUTC).toString(10);
    });
    // ALIASES
    addUnitAlias('quarter', 'Q');
    // PARSING
    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array, config) {
        array[MONTH] = (toInt(input) - 1) * 3;
        return config;
    });
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getQuarter(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return Math.ceil((getMonth(date, isUTC) + 1) / 3);
    }
    // export function getSetQuarter(input) {
    //   return input == null
    //     ? Math.ceil((this.month() + 1) / 3)
    //     : this.month((input - 1) * 3 + this.month() % 3);
    // }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // FORMATTING
    addFormatToken('s', ['ss', 2, false], null, function (date, opts) {
        return getSeconds(date, opts.isUTC).toString(10);
    });
    // ALIASES
    addUnitAlias('second', 's');
    // PARSING
    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // FORMATTING
    addFormatToken('X', null, null, function (date) {
        return unix(date).toString(10);
    });
    addFormatToken('x', null, null, function (date) {
        return date.valueOf().toString(10);
    });
    // PARSING
    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input) * 1000);
        return config;
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
        return config;
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // FORMATTING
    addFormatToken('w', ['ww', 2, false], 'wo', function (date, opts) {
        return getWeek(date, opts.locale).toString(10);
    });
    addFormatToken('W', ['WW', 2, false], 'Wo', function (date) {
        return getISOWeek(date).toString(10);
    });
    // ALIASES
    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');
    // PARSING
    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);
    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
        return config;
    });
    /**
     * @param {?} date
     * @param {?=} locale
     * @param {?=} isUTC
     * @return {?}
     */
    function getWeek(date, locale, isUTC) {
        if (locale === void 0) {
            locale = getLocale();
        }
        return locale.week(date, isUTC);
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getISOWeek(date, isUTC) {
        return weekOfYear(date, 1, 4, isUTC).week;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // FORMATTING
    addFormatToken(null, ['gg', 2, false], null, function (date, opts) {
        // return this.weekYear() % 100;
        return (getWeekYear(date, opts.locale) % 100).toString();
    });
    addFormatToken(null, ['GG', 2, false], null, function (date) {
        // return this.isoWeekYear() % 100;
        return (getISOWeekYear(date) % 100).toString();
    });
    /**
     * @param {?} token
     * @param {?} getter
     * @return {?}
     */
    function addWeekYearFormatToken(token, getter) {
        addFormatToken(null, [token, token.length, false], null, getter);
    }
    /**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function _getWeekYearFormatCb(date, opts) {
        return getWeekYear(date, opts.locale).toString();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    function _getISOWeekYearFormatCb(date) {
        return getISOWeekYear(date).toString();
    }
    addWeekYearFormatToken('gggg', _getWeekYearFormatCb);
    addWeekYearFormatToken('ggggg', _getWeekYearFormatCb);
    addWeekYearFormatToken('GGGG', _getISOWeekYearFormatCb);
    addWeekYearFormatToken('GGGGG', _getISOWeekYearFormatCb);
    // ALIASES
    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');
    // PARSING
    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);
    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
        return config;
    });
    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = parseTwoDigitYear(input);
        return config;
    });
    /**
     * @param {?} date
     * @param {?=} locale
     * @param {?=} isUTC
     * @return {?}
     */
    function getWeekYear(date, locale, isUTC) {
        if (locale === void 0) {
            locale = getLocale();
        }
        return weekOfYear(date, locale.firstDayOfWeek(), locale.firstDayOfYear(), isUTC).year;
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getISOWeekYear(date, isUTC) {
        return weekOfYear(date, 1, 4, isUTC).year;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    var /** @type {?} */ symbolMap = {
        1: '١',
        2: '٢',
        3: '٣',
        4: '٤',
        5: '٥',
        6: '٦',
        7: '٧',
        8: '٨',
        9: '٩',
        0: '٠'
    };
    var /** @type {?} */ numberMap = {
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9',
        '٠': '0'
    };
    var /** @type {?} */ pluralForm = function (num) {
        return num === 0 ? 0 : num === 1 ? 1 : num === 2 ? 2 : num % 100 >= 3 && num % 100 <= 10 ? 3 : num % 100 >= 11 ? 4 : 5;
    };
    var /** @type {?} */ plurals = {
        s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
        m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
        h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
        d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
        M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
        y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
    };
    var /** @type {?} */ pluralize = function (u) {
        return function (num, withoutSuffix) {
            var /** @type {?} */ f = pluralForm(num);
            var /** @type {?} */ str = plurals[u][pluralForm(num)];
            if (f === 2) {
                str = str[withoutSuffix ? 0 : 1];
            }
            return ((str)).replace(/%d/i, num.toString());
        };
    };
    var /** @type {?} */ months = [
        'يناير',
        'فبراير',
        'مارس',
        'أبريل',
        'مايو',
        'يونيو',
        'يوليو',
        'أغسطس',
        'سبتمبر',
        'أكتوبر',
        'نوفمبر',
        'ديسمبر'
    ];
    var /** @type {?} */ arLocale = {
        abbr: 'ar',
        months: months,
        monthsShort: months,
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'D/\u200FM/\u200FYYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ص|م/,
        isPM: /**
         * @param {?} input
         * @return {?}
         */ function (input) {
            return 'م' === input;
        },
        meridiem: /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} isLower
         * @return {?}
         */ function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ص';
            }
            else {
                return 'م';
            }
        },
        calendar: {
            sameDay: '[اليوم عند الساعة] LT',
            nextDay: '[غدًا عند الساعة] LT',
            nextWeek: 'dddd [عند الساعة] LT',
            lastDay: '[أمس عند الساعة] LT',
            lastWeek: 'dddd [عند الساعة] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'بعد %s',
            past: 'منذ %s',
            s: pluralize('s'),
            ss: pluralize('s'),
            m: pluralize('m'),
            mm: pluralize('m'),
            h: pluralize('h'),
            hh: pluralize('h'),
            d: pluralize('d'),
            dd: pluralize('d'),
            M: pluralize('M'),
            MM: pluralize('M'),
            y: pluralize('y'),
            yy: pluralize('y')
        },
        preparse: /**
         * @param {?} str
         * @return {?}
         */ function (str) {
            return str.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
                return numberMap[match];
            }).replace(/،/g, ',');
        },
        postformat: /**
         * @param {?} str
         * @return {?}
         */ function (str) {
            return str.replace(/\d/g, function (match) {
                return symbolMap[match];
            }).replace(/,/g, '،');
        },
        week: {
            dow: 6,
            // Saturday is the first day of the week.
            doy: 12 // The week that contains Jan 1st is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Czech [cs]
    //! author : petrbela : https://github.com/petrbela
    var /** @type {?} */ months$1 = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_');
    var /** @type {?} */ monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
    /**
     * @param {?} num
     * @return {?}
     */
    function plural(num) {
        return (num > 1) && (num < 5) && (~~(num / 10) !== 1);
    }
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */
    function translate(num, withoutSuffix, key, isFuture) {
        var /** @type {?} */ result = num + ' ';
        switch (key) {
            case 's':
                // a few seconds / in a few seconds / a few seconds ago
                return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
            case 'ss':
                // 9 seconds / in 9 seconds / 9 seconds ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(num) ? 'sekundy' : 'sekund');
                }
                else {
                    return result + 'sekundami';
                }
            // break;
            case 'm':
                // a minute / in a minute / a minute ago
                return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
            case 'mm':
                // 9 minutes / in 9 minutes / 9 minutes ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(num) ? 'minuty' : 'minut');
                }
                else {
                    return result + 'minutami';
                }
            // break;
            case 'h':
                // an hour / in an hour / an hour ago
                return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
            case 'hh':
                // 9 hours / in 9 hours / 9 hours ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(num) ? 'hodiny' : 'hodin');
                }
                else {
                    return result + 'hodinami';
                }
            // break;
            case 'd':
                // a day / in a day / a day ago
                return (withoutSuffix || isFuture) ? 'den' : 'dnem';
            case 'dd':
                // 9 days / in 9 days / 9 days ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(num) ? 'dny' : 'dní');
                }
                else {
                    return result + 'dny';
                }
            // break;
            case 'M':
                // a month / in a month / a month ago
                return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
            case 'MM':
                // 9 months / in 9 months / 9 months ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(num) ? 'měsíce' : 'měsíců');
                }
                else {
                    return result + 'měsíci';
                }
            // break;
            case 'y':
                // a year / in a year / a year ago
                return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
            case 'yy':
                // 9 years / in 9 years / 9 years ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(num) ? 'roky' : 'let');
                }
                else {
                    return result + 'lety';
                }
        }
    }
    var /** @type {?} */ csLocale = {
        abbr: 'cs',
        months: months$1,
        monthsShort: monthsShort,
        monthsParse: (function (months, monthsShort) {
            var /** @type {?} */ i, /** @type {?} */ _monthsParse = [];
            for (i = 0; i < 12; i++) {
                // use custom parser to solve problem with July (červenec)
                _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
            }
            return _monthsParse;
        }(months$1, monthsShort)),
        shortMonthsParse: (function (monthsShort) {
            var /** @type {?} */ i, /** @type {?} */ _shortMonthsParse = [];
            for (i = 0; i < 12; i++) {
                _shortMonthsParse[i] = new RegExp('^' + monthsShort[i] + '$', 'i');
            }
            return _shortMonthsParse;
        }(monthsShort)),
        longMonthsParse: (function (months) {
            var /** @type {?} */ i, /** @type {?} */ _longMonthsParse = [];
            for (i = 0; i < 12; i++) {
                _longMonthsParse[i] = new RegExp('^' + months[i] + '$', 'i');
            }
            return _longMonthsParse;
        }(months$1)),
        weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
        weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
        weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd D. MMMM YYYY H:mm',
            l: 'D. M. YYYY'
        },
        calendar: {
            sameDay: '[dnes v] LT',
            nextDay: '[zítra v] LT',
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[v neděli v] LT';
                    case 1:
                    case 2:
                        return '[v] dddd [v] LT';
                    case 3:
                        return '[ve středu v] LT';
                    case 4:
                        return '[ve čtvrtek v] LT';
                    case 5:
                        return '[v pátek v] LT';
                    case 6:
                        return '[v sobotu v] LT';
                }
            },
            lastDay: '[včera v] LT',
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[minulou neděli v] LT';
                    case 1:
                    case 2:
                        return '[minulé] dddd [v] LT';
                    case 3:
                        return '[minulou středu v] LT';
                    case 4:
                    case 5:
                        return '[minulý] dddd [v] LT';
                    case 6:
                        return '[minulou sobotu v] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'za %s',
            past: 'před %s',
            s: translate,
            ss: translate,
            m: translate,
            mm: translate,
            h: translate,
            hh: translate,
            d: translate,
            dd: translate,
            M: translate,
            MM: translate,
            y: translate,
            yy: translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format
    //! moment.js locale configuration
    //! locale : Danish (Denmark) [da]
    //! author : Per Hansen : https://github.com/perhp
    var /** @type {?} */ daLocale = {
        abbr: 'da',
        months: 'Januar_Februar_Marts_April_Maj_Juni_Juli_August_September_Oktober_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_Maj_Jun_Jul_Aug_Sep_Okt_Nov_Dec'.split('_'),
        weekdays: 'Søndag_Mandag_Tirsdag_Onsdag_Torsdag_Fredag_Lørdag'.split('_'),
        weekdaysShort: 'Søn_Man_Tir_Ons_Tor_Fre_Lør'.split('_'),
        weekdaysMin: 'Sø_Ma_Ti_On_To_Fr_Lø'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY HH:mm',
            LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm'
        },
        calendar: {
            sameDay: '[i dag kl.] LT',
            nextDay: '[i morgen kl.] LT',
            nextWeek: 'på dddd [kl.] LT',
            lastDay: '[i går kl.] LT',
            lastWeek: '[i] dddd[s kl.] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'om %s',
            past: '%s siden',
            s: 'få sekunder',
            m: 'et minut',
            mm: '%d minutter',
            h: 'en time',
            hh: '%d timer',
            d: 'en dag',
            dd: '%d dage',
            M: 'en måned',
            MM: '%d måneder',
            y: 'et år',
            yy: '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    // tslint:disable:object-literal-key-quotes
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */
    function processRelativeTime(num, withoutSuffix, key, isFuture) {
        var /** @type {?} */ format = {
            'm': ['eine Minute', 'einer Minute'],
            'h': ['eine Stunde', 'einer Stunde'],
            'd': ['ein Tag', 'einem Tag'],
            'dd': [num + ' Tage', num + ' Tagen'],
            'M': ['ein Monat', 'einem Monat'],
            'MM': [num + ' Monate', num + ' Monaten'],
            'y': ['ein Jahr', 'einem Jahr'],
            'yy': [num + ' Jahre', num + ' Jahren']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }
    var /** @type {?} */ deLocale = {
        abbr: 'de',
        months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: true,
        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY HH:mm',
            LLLL: 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime: {
            future: 'in %s',
            past: 'vor %s',
            s: 'ein paar Sekunden',
            ss: '%d Sekunden',
            m: processRelativeTime,
            mm: '%d Minuten',
            h: processRelativeTime,
            hh: '%d Stunden',
            d: processRelativeTime,
            dd: processRelativeTime,
            M: processRelativeTime,
            MM: processRelativeTime,
            y: processRelativeTime,
            yy: processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : English (United Kingdom) [en-gb]
    //! author : Chris Gedrim : https://github.com/chrisgedrim
    var /** @type {?} */ enGbLocale = {
        abbr: 'en-gb',
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: /**
         * @param {?} _num
         * @return {?}
         */ function (_num) {
            var /** @type {?} */ num = Number(_num);
            var /** @type {?} */ b = num % 10, /** @type {?} */ output = (~~(num % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                    (b === 2) ? 'nd' :
                        (b === 3) ? 'rd' : 'th';
            return num + output;
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Spanish [es]
    //! author : Julio Napurí : https://github.com/julionc
    var /** @type {?} */ monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'), /** @type {?} */ monthsShort$1 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
    var /** @type {?} */ monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
    var /** @type {?} */ monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
    var /** @type {?} */ esLocale = {
        abbr: 'es',
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort: /**
         * @param {?} date
         * @param {?} format
         * @param {?=} isUTC
         * @return {?}
         */ function (date, format, isUTC) {
            if (!date) {
                return monthsShortDot;
            }
            if (/-MMM-/.test(format)) {
                return monthsShort$1[getMonth(date, isUTC)];
            }
            return monthsShortDot[getMonth(date, isUTC)];
        },
        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY H:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
        },
        calendar: {
            sameDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[hoy a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[mañana a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return 'dddd [a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[ayer a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[el] dddd [pasado a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'en %s',
            past: 'hace %s',
            s: 'unos segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'una hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un año',
            yy: '%d años'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Spanish (Dominican Republic) [es-do]
    var /** @type {?} */ monthsShortDot$1 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'), /** @type {?} */ monthsShort$2 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
    var /** @type {?} */ monthsParse$1 = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
    var /** @type {?} */ monthsRegex$1 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
    var /** @type {?} */ esDoLocale = {
        abbr: 'es-do',
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort: /**
         * @param {?} date
         * @param {?} format
         * @param {?=} isUTC
         * @return {?}
         */ function (date, format, isUTC) {
            if (!date) {
                return monthsShortDot$1;
            }
            else if (/-MMM-/.test(format)) {
                return monthsShort$2[getMonth(date, isUTC)];
            }
            else {
                return monthsShortDot$1[getMonth(date, isUTC)];
            }
        },
        monthsRegex: monthsRegex$1,
        monthsShortRegex: monthsRegex$1,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: monthsParse$1,
        longMonthsParse: monthsParse$1,
        shortMonthsParse: monthsParse$1,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY h:mm A',
            LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A'
        },
        calendar: {
            sameDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[hoy a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[mañana a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return 'dddd [a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[ayer a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[el] dddd [pasado a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'en %s',
            past: 'hace %s',
            s: 'unos segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'una hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un año',
            yy: '%d años'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Spanish (United States) [es-us]
    //! author : bustta : https://github.com/bustta
    var /** @type {?} */ monthsShortDot$2 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
    var /** @type {?} */ monthsShort$3 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
    var /** @type {?} */ esUsLocale = {
        abbr: 'es-us',
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort: /**
         * @param {?} date
         * @param {?} format
         * @param {?=} isUTC
         * @return {?}
         */ function (date, format, isUTC) {
            if (!date) {
                return monthsShortDot$2;
            }
            else if (/-MMM-/.test(format)) {
                return monthsShort$3[getMonth(date, isUTC)];
            }
            else {
                return monthsShortDot$2[getMonth(date, isUTC)];
            }
        },
        monthsParseExact: true,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'MM/DD/YYYY',
            LL: 'MMMM [de] D [de] YYYY',
            LLL: 'MMMM [de] D [de] YYYY h:mm A',
            LLLL: 'dddd, MMMM [de] D [de] YYYY h:mm A'
        },
        calendar: {
            sameDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[hoy a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[mañana a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return 'dddd [a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[ayer a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[el] dddd [pasado a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'en %s',
            past: 'hace %s',
            s: 'unos segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'una hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un año',
            yy: '%d años'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
            dow: 0,
            // Sunday is the first day of the week.
            doy: 6 // The week that contains Jan 1st is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    // https://github.com/moment/moment/blob/develop/locale/fi.js
    var /** @type {?} */ numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '), /** @type {?} */ numbersFuture = [
        'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',
        numbersPast[7], numbersPast[8], numbersPast[9]
    ];
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */
    function translate$1(num, withoutSuffix, key, isFuture) {
        var /** @type {?} */ result = '';
        switch (key) {
            case 's':
                return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
            case 'ss':
                return isFuture ? 'sekunnin' : 'sekuntia';
            case 'm':
                return isFuture ? 'minuutin' : 'minuutti';
            case 'mm':
                result = isFuture ? 'minuutin' : 'minuuttia';
                break;
            case 'h':
                return isFuture ? 'tunnin' : 'tunti';
            case 'hh':
                result = isFuture ? 'tunnin' : 'tuntia';
                break;
            case 'd':
                return isFuture ? 'päivän' : 'päivä';
            case 'dd':
                result = isFuture ? 'päivän' : 'päivää';
                break;
            case 'M':
                return isFuture ? 'kuukauden' : 'kuukausi';
            case 'MM':
                result = isFuture ? 'kuukauden' : 'kuukautta';
                break;
            case 'y':
                return isFuture ? 'vuoden' : 'vuosi';
            case 'yy':
                result = isFuture ? 'vuoden' : 'vuotta';
                break;
        }
        result = verbalNumber(num, isFuture) + ' ' + result;
        return result;
    }
    /**
     * @param {?} num
     * @param {?} isFuture
     * @return {?}
     */
    function verbalNumber(num, isFuture) {
        return num < 10 ? (isFuture ? numbersFuture[num] : numbersPast[num]) : num;
    }
    var /** @type {?} */ fiLocale = {
        abbr: 'fi',
        months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
        monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
        weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
        weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
        weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
        longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD.MM.YYYY',
            LL: 'Do MMMM[ta] YYYY',
            LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
            LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
            l: 'D.M.YYYY',
            ll: 'Do MMM YYYY',
            lll: 'Do MMM YYYY, [klo] HH.mm',
            llll: 'ddd, Do MMM YYYY, [klo] HH.mm'
        },
        calendar: {
            sameDay: '[tänään] [klo] LT',
            nextDay: '[huomenna] [klo] LT',
            nextWeek: 'dddd [klo] LT',
            lastDay: '[eilen] [klo] LT',
            lastWeek: '[viime] dddd[na] [klo] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s päästä',
            past: '%s sitten',
            s: translate$1,
            ss: translate$1,
            m: translate$1,
            mm: translate$1,
            h: translate$1,
            hh: translate$1,
            d: translate$1,
            dd: translate$1,
            M: translate$1,
            MM: translate$1,
            y: translate$1,
            yy: translate$1
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : French [fr]
    //! author : John Fischer : https://github.com/jfroffice
    var /** @type {?} */ frLocale = {
        abbr: 'fr',
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact: true,
        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Aujourd’hui à] LT',
            nextDay: '[Demain à] LT',
            nextWeek: 'dddd [à] LT',
            lastDay: '[Hier à] LT',
            lastWeek: 'dddd [dernier à] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'dans %s',
            past: 'il y a %s',
            s: 'quelques secondes',
            ss: '%d secondes',
            m: 'une minute',
            mm: '%d minutes',
            h: 'une heure',
            hh: '%d heures',
            d: 'un jour',
            dd: '%d jours',
            M: 'un mois',
            MM: '%d mois',
            y: 'un an',
            yy: '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal: /**
         * @param {?} _num
         * @param {?} period
         * @return {?}
         */ function (_num, period) {
            var /** @type {?} */ num = Number(_num);
            switch (period) {
                // TODO: Return 'e' when day of month > 1. Move this case inside
                // block for masculine words below.
                // See https://github.com/moment/moment/issues/3375
                case 'D':
                    return num + (num === 1 ? 'er' : '');
                // Words with masculine grammatical gender: mois, trimestre, jour
                default:
                case 'M':
                case 'Q':
                case 'DDD':
                case 'd':
                    return num + (num === 1 ? 'er' : 'e');
                // Words with feminine grammatical gender: semaine
                case 'w':
                case 'W':
                    return num + (num === 1 ? 're' : 'e');
            }
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Galician [gl]
    //! author : Darío Beiró : https://github.com/quinobravo
    var /** @type {?} */ monthsShortDot$3 = 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'), /** @type {?} */ monthsShort$4 = 'xan_feb_mar_abr_mai_xuñ_xul_ago_set_out_nov_dec'.split('_');
    var /** @type {?} */ monthsParse$2 = [/^xan/i, /^feb/i, /^mar/i, /^abr/i, /^mai/i, /^xuñ/i, /^xul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dec/i];
    var /** @type {?} */ monthsRegex$2 = /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro|xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i;
    var /** @type {?} */ glLocale = {
        abbr: 'gl',
        months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
        monthsShort: /**
         * @param {?} date
         * @param {?} format
         * @param {?=} isUTC
         * @return {?}
         */ function (date, format, isUTC) {
            if (!date) {
                return monthsShortDot$3;
            }
            if (/-MMM-/.test(format)) {
                return monthsShort$4[getMonth(date, isUTC)];
            }
            return monthsShortDot$3[getMonth(date, isUTC)];
        },
        monthsRegex: monthsRegex$2,
        monthsShortRegex: monthsRegex$2,
        monthsStrictRegex: /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro)/i,
        monthsShortStrictRegex: /^(xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i,
        monthsParse: monthsParse$2,
        longMonthsParse: monthsParse$2,
        shortMonthsParse: monthsParse$2,
        weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY H:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
        },
        calendar: {
            sameDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[hoxe á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[mañan á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return 'dddd [á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[onte á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[o] dddd [pasado á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'en %s',
            past: 'fai %s',
            s: 'uns segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'unha hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un ano',
            yy: '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : Hebrew [he]
    //! author : Tomer Cohen : https://github.com/tomer
    //! author : Moshe Simantov : https://github.com/DevelopmentIL
    //! author : Tal Ater : https://github.com/TalAter
    var /** @type {?} */ heLocale = {
        abbr: 'he',
        months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
        monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
        weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
        weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
        weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [ב]MMMM YYYY',
            LLL: 'D [ב]MMMM YYYY HH:mm',
            LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
            l: 'D/M/YYYY',
            ll: 'D MMM YYYY',
            lll: 'D MMM YYYY HH:mm',
            llll: 'ddd, D MMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[היום ב־]LT',
            nextDay: '[מחר ב־]LT',
            nextWeek: 'dddd [בשעה] LT',
            lastDay: '[אתמול ב־]LT',
            lastWeek: '[ביום] dddd [האחרון בשעה] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'בעוד %s',
            past: 'לפני %s',
            s: 'מספר שניות',
            ss: '%d שניות',
            m: 'דקה',
            mm: '%d דקות',
            h: 'שעה',
            hh: /**
             * @param {?} num
             * @return {?}
             */ function (num) {
                if (num === 2) {
                    return 'שעתיים';
                }
                return num + ' שעות';
            },
            d: 'יום',
            dd: /**
             * @param {?} num
             * @return {?}
             */ function (num) {
                if (num === 2) {
                    return 'יומיים';
                }
                return num + ' ימים';
            },
            M: 'חודש',
            MM: /**
             * @param {?} num
             * @return {?}
             */ function (num) {
                if (num === 2) {
                    return 'חודשיים';
                }
                return num + ' חודשים';
            },
            y: 'שנה',
            yy: /**
             * @param {?} num
             * @return {?}
             */ function (num) {
                if (num === 2) {
                    return 'שנתיים';
                }
                else if (num % 10 === 0 && num !== 10) {
                    return num + ' שנה';
                }
                return num + ' שנים';
            }
        },
        meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
        isPM: /**
         * @param {?} input
         * @return {?}
         */ function (input) {
            return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
        },
        meridiem: /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} isLower
         * @return {?}
         */ function (hour, minute, isLower) {
            if (hour < 5) {
                return 'לפנות בוקר';
            }
            else if (hour < 10) {
                return 'בבוקר';
            }
            else if (hour < 12) {
                return isLower ? 'לפנה"צ' : 'לפני הצהריים';
            }
            else if (hour < 18) {
                return isLower ? 'אחה"צ' : 'אחרי הצהריים';
            }
            else {
                return 'בערב';
            }
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    // tslint:disable:no-parameter-reassignment prefer-switch
    //! moment.js locale configuration
    //! locale : Hindi [hi]
    //! author : Mayank Singhal : https://github.com/mayanksinghal
    var /** @type {?} */ symbolMap$1 = {
        1: '१',
        2: '२',
        3: '३',
        4: '४',
        5: '५',
        6: '६',
        7: '७',
        8: '८',
        9: '९',
        0: '०'
    }, /** @type {?} */ numberMap$1 = {
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        '०': '0'
    };
    var /** @type {?} */ hiLocale = {
        abbr: 'hi',
        months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
        monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
        monthsParseExact: true,
        weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
        weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
        weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
        longDateFormat: {
            LT: 'A h:mm बजे',
            LTS: 'A h:mm:ss बजे',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm बजे',
            LLLL: 'dddd, D MMMM YYYY, A h:mm बजे'
        },
        calendar: {
            sameDay: '[आज] LT',
            nextDay: '[कल] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[कल] LT',
            lastWeek: '[पिछले] dddd, LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s में',
            past: '%s पहले',
            s: 'कुछ ही क्षण',
            ss: '%d सेकंड',
            m: 'एक मिनट',
            mm: '%d मिनट',
            h: 'एक घंटा',
            hh: '%d घंटे',
            d: 'एक दिन',
            dd: '%d दिन',
            M: 'एक महीने',
            MM: '%d महीने',
            y: 'एक वर्ष',
            yy: '%d वर्ष'
        },
        preparse: /**
         * @param {?} str
         * @return {?}
         */ function (str) {
            return str.replace(/[१२३४५६७८९०]/g, function (match) {
                return numberMap$1[match];
            });
        },
        postformat: /**
         * @param {?} str
         * @return {?}
         */ function (str) {
            return str.replace(/\d/g, function (match) {
                return symbolMap$1[match];
            });
        },
        // Hindi notation for meridiems are quite fuzzy in practice. While there exists
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
        meridiemParse: /रात|सुबह|दोपहर|शाम/,
        meridiemHour: /**
         * @param {?} hour
         * @param {?} meridiem
         * @return {?}
         */ function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'रात') {
                return hour < 4 ? hour : hour + 12;
            }
            else if (meridiem === 'सुबह') {
                return hour;
            }
            else if (meridiem === 'दोपहर') {
                return hour >= 10 ? hour : hour + 12;
            }
            else if (meridiem === 'शाम') {
                return hour + 12;
            }
        },
        meridiem: /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} isLower
         * @return {?}
         */ function (hour, minute, isLower) {
            if (hour < 4) {
                return 'रात';
            }
            else if (hour < 10) {
                return 'सुबह';
            }
            else if (hour < 17) {
                return 'दोपहर';
            }
            else if (hour < 20) {
                return 'शाम';
            }
            else {
                return 'रात';
            }
        },
        week: {
            dow: 0,
            // Sunday is the first day of the week.
            doy: 6 // The week that contains Jan 1st is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Hungarian [hu]
    //! author : Adam Brunner : https://github.com/adambrunner
    var /** @type {?} */ weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */
    function translate$2(num, withoutSuffix, key, isFuture) {
        switch (key) {
            case 's':
                return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
            case 'ss':
                return num + ((isFuture || withoutSuffix) ? ' másodperc' : ' másodperce');
            case 'm':
                return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
            case 'mm':
                return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
            case 'h':
                return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
            case 'hh':
                return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
            case 'd':
                return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
            case 'dd':
                return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
            case 'M':
                return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
            case 'MM':
                return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
            case 'y':
                return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
            case 'yy':
                return num + (isFuture || withoutSuffix ? ' év' : ' éve');
        }
        return '';
    }
    /**
     * @param {?} date
     * @param {?} isFuture
     * @return {?}
     */
    function week(date, isFuture) {
        return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[getDayOfWeek(date)] + '] LT[-kor]';
    }
    var /** @type {?} */ huLocale = {
        abbr: 'hu',
        months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
        monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
        weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
        weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
        weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'YYYY.MM.DD.',
            LL: 'YYYY. MMMM D.',
            LLL: 'YYYY. MMMM D. H:mm',
            LLLL: 'YYYY. MMMM D., dddd H:mm'
        },
        meridiemParse: /de|du/i,
        isPM: /**
         * @param {?} input
         * @return {?}
         */ function (input) {
            return input.charAt(1).toLowerCase() === 'u';
        },
        meridiem: /**
         * @param {?} hours
         * @param {?} minutes
         * @param {?} isLower
         * @return {?}
         */ function (hours, minutes, isLower) {
            if (hours < 12) {
                return isLower === true ? 'de' : 'DE';
            }
            else {
                return isLower === true ? 'du' : 'DU';
            }
        },
        calendar: {
            sameDay: '[ma] LT[-kor]',
            nextDay: '[holnap] LT[-kor]',
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return week(date, true);
            },
            lastDay: '[tegnap] LT[-kor]',
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return week(date, false);
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s múlva',
            past: '%s',
            s: translate$2,
            ss: translate$2,
            m: translate$2,
            mm: translate$2,
            h: translate$2,
            hh: translate$2,
            d: translate$2,
            dd: translate$2,
            M: translate$2,
            MM: translate$2,
            y: translate$2,
            yy: translate$2
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    // tslint:disable:no-parameter-reassignment prefer-switch
    //! moment.js locale configuration
    //! locale : Indonesia [id]
    //! author : Romy Kusuma : https://github.com/rkusuma
    //! reference: https://github.com/moment/moment/blob/develop/locale/id.js
    var /** @type {?} */ idLocale = {
        abbr: 'id',
        months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
        weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
        weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
        weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [pukul] HH.mm',
            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour: /**
         * @param {?} hour
         * @param {?} meridiem
         * @return {?}
         */ function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'pagi') {
                return hour;
            }
            else if (meridiem === 'siang') {
                return hour >= 11 ? hour : hour + 12;
            }
            else if (meridiem === 'sore' || meridiem === 'malam') {
                return hour + 12;
            }
        },
        meridiem: /**
         * @param {?} hours
         * @param {?} minutes
         * @param {?} isLower
         * @return {?}
         */ function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'pagi';
            }
            else if (hours < 15) {
                return 'siang';
            }
            else if (hours < 19) {
                return 'sore';
            }
            else {
                return 'malam';
            }
        },
        calendar: {
            sameDay: '[Hari ini pukul] LT',
            nextDay: '[Besok pukul] LT',
            nextWeek: 'dddd [pukul] LT',
            lastDay: '[Kemarin pukul] LT',
            lastWeek: 'dddd [lalu pukul] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'dalam %s',
            past: '%s yang lalu',
            s: 'beberapa detik',
            ss: '%d detik',
            m: 'semenit',
            mm: '%d menit',
            h: 'sejam',
            hh: '%d jam',
            d: 'sehari',
            dd: '%d hari',
            M: 'sebulan',
            MM: '%d bulan',
            y: 'setahun',
            yy: '%d tahun'
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Italian [it]
    //! author : Lorenzo : https://github.com/aliem
    //! author: Mattia Larentis: https://github.com/nostalgiaz
    var /** @type {?} */ itLocale = {
        abbr: 'it',
        months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
        monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
        weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
        weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
        weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Oggi alle] LT',
            nextDay: '[Domani alle] LT',
            nextWeek: 'dddd [alle] LT',
            lastDay: '[Ieri alle] LT',
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[la scorsa] dddd [alle] LT';
                    default:
                        return '[lo scorso] dddd [alle] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: /**
             * @param {?} num
             * @return {?}
             */ function (num) {
                return ((/^[0-9].+$/).test(num.toString(10)) ? 'tra' : 'in') + ' ' + num;
            },
            past: '%s fa',
            s: 'alcuni secondi',
            ss: '%d secondi',
            m: 'un minuto',
            mm: '%d minuti',
            h: 'un\'ora',
            hh: '%d ore',
            d: 'un giorno',
            dd: '%d giorni',
            M: 'un mese',
            MM: '%d mesi',
            y: 'un anno',
            yy: '%d anni'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : Japanese [ja]
    //! author : LI Long : https://github.com/baryon
    var /** @type {?} */ jaLocale = {
        abbr: 'ja',
        months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
        weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
        weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日 HH:mm',
            LLLL: 'YYYY年M月D日 HH:mm dddd',
            l: 'YYYY/MM/DD',
            ll: 'YYYY年M月D日',
            lll: 'YYYY年M月D日 HH:mm',
            llll: 'YYYY年M月D日 HH:mm dddd'
        },
        meridiemParse: /午前|午後/i,
        isPM: /**
         * @param {?} input
         * @return {?}
         */ function (input) {
            return input === '午後';
        },
        meridiem: /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} isLower
         * @return {?}
         */ function (hour, minute, isLower) {
            if (hour < 12) {
                return '午前';
            }
            else {
                return '午後';
            }
        },
        calendar: {
            sameDay: '[今日] LT',
            nextDay: '[明日] LT',
            nextWeek: '[来週]dddd LT',
            lastDay: '[昨日] LT',
            lastWeek: '[前週]dddd LT',
            sameElse: 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}日/,
        ordinal: /**
         * @param {?} num
         * @param {?} period
         * @return {?}
         */ function (num, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return num + '日';
                default:
                    return num.toString(10);
            }
        },
        relativeTime: {
            future: '%s後',
            past: '%s前',
            s: '数秒',
            ss: '%d秒',
            m: '1分',
            mm: '%d分',
            h: '1時間',
            hh: '%d時間',
            d: '1日',
            dd: '%d日',
            M: '1ヶ月',
            MM: '%dヶ月',
            y: '1年',
            yy: '%d年'
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    // tslint:disable:object-literal-shorthand
    //! moment.js locale configuration
    //! locale : Korean [ko]
    //! author : Kyungwook, Park : https://github.com/kyungw00k
    //! author : Jeeeyul Lee <jeeeyul@gmail.com>
    var /** @type {?} */ koLocale = {
        abbr: 'ko',
        months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
        weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
        weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
        longDateFormat: {
            LT: 'A h:mm',
            LTS: 'A h:mm:ss',
            L: 'YYYY.MM.DD',
            LL: 'YYYY년 MMMM D일',
            LLL: 'YYYY년 MMMM D일 A h:mm',
            LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
            l: 'YYYY.MM.DD',
            ll: 'YYYY년 MMMM D일',
            lll: 'YYYY년 MMMM D일 A h:mm',
            llll: 'YYYY년 MMMM D일 dddd A h:mm'
        },
        calendar: {
            sameDay: '오늘 LT',
            nextDay: '내일 LT',
            nextWeek: 'dddd LT',
            lastDay: '어제 LT',
            lastWeek: '지난주 dddd LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s 후',
            past: '%s 전',
            s: '몇 초',
            ss: '%d초',
            m: '1분',
            mm: '%d분',
            h: '한 시간',
            hh: '%d시간',
            d: '하루',
            dd: '%d일',
            M: '한 달',
            MM: '%d달',
            y: '일 년',
            yy: '%d년'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
        ordinal: function (num, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return num + '일';
                case 'M':
                    return num + '월';
                case 'w':
                case 'W':
                    return num + '주';
                default:
                    return num.toString(10);
            }
        },
        meridiemParse: /오전|오후/,
        isPM: function (token) {
            return token === '오후';
        },
        meridiem: function (hour, minute, isUpper) {
            return hour < 12 ? '오전' : '오후';
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    // tslint:disable:object-literal-shorthand
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */
    function translate$3(num, withoutSuffix, key, isFuture) {
        switch (key) {
            case 's':
                return withoutSuffix ? 'хэдхэн секунд' : 'хэдхэн секундын';
            case 'ss':
                return num + (withoutSuffix ? ' секунд' : ' секундын');
            case 'm':
            case 'mm':
                return num + (withoutSuffix ? ' минут' : ' минутын');
            case 'h':
            case 'hh':
                return num + (withoutSuffix ? ' цаг' : ' цагийн');
            case 'd':
            case 'dd':
                return num + (withoutSuffix ? ' өдөр' : ' өдрийн');
            case 'M':
            case 'MM':
                return num + (withoutSuffix ? ' сар' : ' сарын');
            case 'y':
            case 'yy':
                return num + (withoutSuffix ? ' жил' : ' жилийн');
            default:
                return num.toString(10);
        }
    }
    var /** @type {?} */ mnLocale = {
        abbr: 'mn',
        months: 'Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар'.split('_'),
        monthsShort: '1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар'.split('_'),
        monthsParseExact: true,
        weekdays: 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
        weekdaysShort: 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
        weekdaysMin: 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'YYYY оны MMMMын D',
            LLL: 'YYYY оны MMMMын D HH:mm',
            LLLL: 'dddd, YYYY оны MMMMын D HH:mm'
        },
        meridiemParse: /ҮӨ|ҮХ/i,
        isPM: function (input) {
            return input === 'ҮХ';
        },
        meridiem: function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ҮӨ';
            }
            else {
                return 'ҮХ';
            }
        },
        calendar: {
            sameDay: '[Өнөөдөр] LT',
            nextDay: '[Маргааш] LT',
            nextWeek: '[Ирэх] dddd LT',
            lastDay: '[Өчигдөр] LT',
            lastWeek: '[Өнгөрсөн] dddd LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s дараа',
            past: '%s өмнө',
            s: translate$3,
            ss: translate$3,
            m: translate$3,
            mm: translate$3,
            h: translate$3,
            hh: translate$3,
            d: translate$3,
            dd: translate$3,
            M: translate$3,
            MM: translate$3,
            y: translate$3,
            yy: translate$3
        },
        dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
        ordinal: function (num, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return num + ' өдөр';
                default:
                    return num.toString(10);
            }
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Dutch [nl]
    //! author : Joris Röling : https://github.com/jorisroling
    //! author : Jacob Middag : https://github.com/middagj
    var /** @type {?} */ monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'), /** @type {?} */ monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
    var /** @type {?} */ monthsParse$3 = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
    var /** @type {?} */ monthsRegex$3 = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    var /** @type {?} */ nlLocale = {
        abbr: 'nl',
        months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort: /**
         * @param {?} date
         * @param {?} format
         * @param {?=} isUTC
         * @return {?}
         */ function (date, format, isUTC) {
            if (!date) {
                return monthsShortWithDots;
            }
            else if (/-MMM-/.test(format)) {
                return monthsShortWithoutDots[getMonth(date, isUTC)];
            }
            else {
                return monthsShortWithDots[getMonth(date, isUTC)];
            }
        },
        monthsRegex: monthsRegex$3,
        monthsShortRegex: monthsRegex$3,
        monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: monthsParse$3,
        longMonthsParse: monthsParse$3,
        shortMonthsParse: monthsParse$3,
        weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD-MM-YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[vandaag om] LT',
            nextDay: '[morgen om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[gisteren om] LT',
            lastWeek: '[afgelopen] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'over %s',
            past: '%s geleden',
            s: 'een paar seconden',
            ss: '%d seconden',
            m: 'één minuut',
            mm: '%d minuten',
            h: 'één uur',
            hh: '%d uur',
            d: 'één dag',
            dd: '%d dagen',
            M: 'één maand',
            MM: '%d maanden',
            y: 'één jaar',
            yy: '%d jaar'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: /**
         * @param {?} _num
         * @return {?}
         */ function (_num) {
            var /** @type {?} */ num = Number(_num);
            return num + ((num === 1 || num === 8 || num >= 20) ? 'ste' : 'de');
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Dutch (Belgium) [nl-be]
    //! author : Joris Röling : https://github.com/jorisroling
    //! author : Jacob Middag : https://github.com/middagj
    var /** @type {?} */ monthsShortWithDots$1 = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_');
    var /** @type {?} */ monthsShortWithoutDots$1 = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
    var /** @type {?} */ monthsParse$4 = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
    var /** @type {?} */ monthsRegex$4 = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    var /** @type {?} */ nlBeLocale = {
        abbr: 'nl-be',
        months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort: /**
         * @param {?} date
         * @param {?} format
         * @param {?=} isUTC
         * @return {?}
         */ function (date, format, isUTC) {
            if (!date) {
                return monthsShortWithDots$1;
            }
            else if (/-MMM-/.test(format)) {
                return monthsShortWithoutDots$1[getMonth(date, isUTC)];
            }
            else {
                return monthsShortWithDots$1[getMonth(date, isUTC)];
            }
        },
        monthsRegex: monthsRegex$4,
        monthsShortRegex: monthsRegex$4,
        monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: monthsParse$4,
        longMonthsParse: monthsParse$4,
        shortMonthsParse: monthsParse$4,
        weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[vandaag om] LT',
            nextDay: '[morgen om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[gisteren om] LT',
            lastWeek: '[afgelopen] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'over %s',
            past: '%s geleden',
            s: 'een paar seconden',
            ss: '%d seconden',
            m: 'één minuut',
            mm: '%d minuten',
            h: 'één uur',
            hh: '%d uur',
            d: 'één dag',
            dd: '%d dagen',
            M: 'één maand',
            MM: '%d maanden',
            y: 'één jaar',
            yy: '%d jaar'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: /**
         * @param {?} _num
         * @return {?}
         */ function (_num) {
            var /** @type {?} */ num = Number(_num);
            return num + ((num === 1 || num === 8 || num >= 20) ? 'ste' : 'de');
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Polish [pl]
    //! author : Rafal Hirsz : https://github.com/evoL
    var /** @type {?} */ monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_');
    var /** @type {?} */ monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
    /**
     * @param {?} num
     * @return {?}
     */
    function plural$1(num) {
        return (num % 10 < 5) && (num % 10 > 1) && ((~~(num / 10) % 10) !== 1);
    }
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @return {?}
     */
    function translate$4(num, withoutSuffix, key) {
        var /** @type {?} */ result = num + ' ';
        switch (key) {
            case 'ss':
                return result + (plural$1(num) ? 'sekundy' : 'sekund');
            case 'm':
                return withoutSuffix ? 'minuta' : 'minutę';
            case 'mm':
                return result + (plural$1(num) ? 'minuty' : 'minut');
            case 'h':
                return withoutSuffix ? 'godzina' : 'godzinę';
            case 'hh':
                return result + (plural$1(num) ? 'godziny' : 'godzin');
            case 'MM':
                return result + (plural$1(num) ? 'miesiące' : 'miesięcy');
            case 'yy':
                return result + (plural$1(num) ? 'lata' : 'lat');
        }
    }
    var /** @type {?} */ plLocale = {
        abbr: 'pl',
        months: /**
         * @param {?} date
         * @param {?} format
         * @param {?=} isUTC
         * @return {?}
         */ function (date, format, isUTC) {
            if (!date) {
                return monthsNominative;
            }
            else if (format === '') {
                // Hack: if format empty we know this is used to generate
                // RegExp by moment. Give then back both valid forms of months
                // in RegExp ready format.
                return '(' + monthsSubjective[getMonth(date, isUTC)] + '|' + monthsNominative[getMonth(date, isUTC)] + ')';
            }
            else if (/D MMMM/.test(format)) {
                return monthsSubjective[getMonth(date, isUTC)];
            }
            else {
                return monthsNominative[getMonth(date, isUTC)];
            }
        },
        monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
        weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
        weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
        weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Dziś o] LT',
            nextDay: '[Jutro o] LT',
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[W niedzielę o] LT';
                    case 2:
                        return '[We wtorek o] LT';
                    case 3:
                        return '[W środę o] LT';
                    case 6:
                        return '[W sobotę o] LT';
                    default:
                        return '[W] dddd [o] LT';
                }
            },
            lastDay: '[Wczoraj o] LT',
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[W zeszłą niedzielę o] LT';
                    case 3:
                        return '[W zeszłą środę o] LT';
                    case 6:
                        return '[W zeszłą sobotę o] LT';
                    default:
                        return '[W zeszły] dddd [o] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'za %s',
            past: '%s temu',
            s: 'kilka sekund',
            ss: translate$4,
            m: translate$4,
            mm: translate$4,
            h: translate$4,
            hh: translate$4,
            d: '1 dzień',
            dd: '%d dni',
            M: 'miesiąc',
            MM: translate$4,
            y: 'rok',
            yy: translate$4
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Portuguese (Brazil) [pt-br]
    //! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
    var /** @type {?} */ ptBrLocale = {
        abbr: 'pt-br',
        months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
        weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
        },
        calendar: {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return (getDayOfWeek(date) === 0 || getDayOfWeek(date) === 6) ?
                    '[Último] dddd [às] LT' : // Saturday + Sunday
                    '[Última] dddd [às] LT'; // Monday - Friday
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'em %s',
            past: '%s atrás',
            s: 'poucos segundos',
            ss: '%d segundos',
            m: 'um minuto',
            mm: '%d minutos',
            h: 'uma hora',
            hh: '%d horas',
            d: 'um dia',
            dd: '%d dias',
            M: 'um mês',
            MM: '%d meses',
            y: 'um ano',
            yy: '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº'
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} word
     * @param {?} num
     * @return {?}
     */
    function plural$2(word, num) {
        var /** @type {?} */ forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
    }
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @return {?}
     */
    function relativeTimeWithPlural(num, withoutSuffix, key) {
        var /** @type {?} */ format = {
            ss: withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
            mm: withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
            hh: 'час_часа_часов',
            dd: 'день_дня_дней',
            MM: 'месяц_месяца_месяцев',
            yy: 'год_года_лет'
        };
        if (key === 'm') {
            return withoutSuffix ? 'минута' : 'минуту';
        }
        return num + ' ' + plural$2(format[key], +num);
    }
    var /** @type {?} */ monthsParse$5 = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
    // http://new.gramota.ru/spravka/rules/139-prop : § 103
    // Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
    // CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
    var /** @type {?} */ ruLocale = {
        abbr: 'ru',
        months: {
            format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
            standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
        },
        monthsShort: {
            // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
            format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
            standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
        },
        weekdays: {
            standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
            format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
        },
        weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        monthsParse: monthsParse$5,
        longMonthsParse: monthsParse$5,
        shortMonthsParse: monthsParse$5,
        // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
        monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        // копия предыдущего
        monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        // полные названия с падежами
        monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
        // Выражение, которое соотвествует только сокращённым формам
        monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY г.',
            LLL: 'D MMMM YYYY г., H:mm',
            LLLL: 'dddd, D MMMM YYYY г., H:mm'
        },
        calendar: {
            sameDay: '[Сегодня в] LT',
            nextDay: '[Завтра в] LT',
            lastDay: '[Вчера в] LT',
            nextWeek: /**
             * @param {?} date
             * @param {?} now
             * @return {?}
             */ function (date, now) {
                if (getWeek(now) !== getWeek(date)) {
                    switch (getDayOfWeek(date)) {
                        case 0:
                            return '[В следующее] dddd [в] LT';
                        case 1:
                        case 2:
                        case 4:
                            return '[В следующий] dddd [в] LT';
                        case 3:
                        case 5:
                        case 6:
                            return '[В следующую] dddd [в] LT';
                    }
                }
                else {
                    if (getDayOfWeek(date) === 2) {
                        return '[Во] dddd [в] LT';
                    }
                    else {
                        return '[В] dddd [в] LT';
                    }
                }
            },
            lastWeek: /**
             * @param {?} date
             * @param {?} now
             * @return {?}
             */ function (date, now) {
                if (getWeek(now) !== getWeek(date)) {
                    switch (getDayOfWeek(date)) {
                        case 0:
                            return '[В прошлое] dddd [в] LT';
                        case 1:
                        case 2:
                        case 4:
                            return '[В прошлый] dddd [в] LT';
                        case 3:
                        case 5:
                        case 6:
                            return '[В прошлую] dddd [в] LT';
                    }
                }
                else {
                    if (getDayOfWeek(date) === 2) {
                        return '[Во] dddd [в] LT';
                    }
                    else {
                        return '[В] dddd [в] LT';
                    }
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'через %s',
            past: '%s назад',
            s: 'несколько секунд',
            ss: relativeTimeWithPlural,
            m: relativeTimeWithPlural,
            mm: relativeTimeWithPlural,
            h: 'час',
            hh: relativeTimeWithPlural,
            d: 'день',
            dd: relativeTimeWithPlural,
            M: 'месяц',
            MM: relativeTimeWithPlural,
            y: 'год',
            yy: relativeTimeWithPlural
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM: /**
         * @param {?} input
         * @return {?}
         */ function (input) {
            return /^(дня|вечера)$/.test(input);
        },
        meridiem: /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} isLower
         * @return {?}
         */ function (hour, minute, isLower) {
            if (hour < 4) {
                return 'ночи';
            }
            else if (hour < 12) {
                return 'утра';
            }
            else if (hour < 17) {
                return 'дня';
            }
            else {
                return 'вечера';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: /**
         * @param {?} _num
         * @param {?} period
         * @return {?}
         */ function (_num, period) {
            var /** @type {?} */ num = Number(_num);
            switch (period) {
                case 'M':
                case 'd':
                case 'DDD':
                    return num + '-й';
                case 'D':
                    return num + '-го';
                case 'w':
                case 'W':
                    return num + '-я';
                default:
                    return num.toString(10);
            }
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @return {?}
     */
    function relativeTimeWithPlural$1(num, withoutSuffix, key) {
        var /** @type {?} */ format = {
            ss: 'secunde',
            mm: 'minute',
            hh: 'ore',
            dd: 'zile',
            MM: 'luni',
            yy: 'ani'
        };
        var /** @type {?} */ separator = ' ';
        if (num % 100 >= 20 || (num >= 100 && num % 100 === 0)) {
            separator = ' de ';
        }
        return num + separator + format[key];
    }
    var /** @type {?} */ roLocale = {
        abbr: 'ro',
        months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
        monthsShort: 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
        weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
        weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY H:mm',
            LLLL: 'dddd, D MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[azi la] LT',
            nextDay: '[mâine la] LT',
            nextWeek: 'dddd [la] LT',
            lastDay: '[ieri la] LT',
            lastWeek: '[fosta] dddd [la] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'peste %s',
            past: '%s în urmă',
            s: 'câteva secunde',
            ss: relativeTimeWithPlural$1,
            m: 'un minut',
            mm: relativeTimeWithPlural$1,
            h: 'o oră',
            hh: relativeTimeWithPlural$1,
            d: 'o zi',
            dd: relativeTimeWithPlural$1,
            M: 'o lună',
            MM: relativeTimeWithPlural$1,
            y: 'un an',
            yy: relativeTimeWithPlural$1
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Slovak [sk]
    //! author : Jozef Pažin : https://github.com/atiris
    var /** @type {?} */ months$2 = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_');
    var /** @type {?} */ monthsShort$5 = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
    /**
     * @param {?} num
     * @return {?}
     */
    function plural$3(num) {
        return (num > 1) && (num < 5) && (~~(num / 10) !== 1);
    }
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */
    function translate$5(num, withoutSuffix, key, isFuture) {
        var /** @type {?} */ result = num + ' ';
        switch (key) {
            case 's':
                // a few seconds / in a few seconds / a few seconds ago
                return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami';
            case 'ss':
                // 9 seconds / in 9 seconds / 9 seconds ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$3(num) ? 'sekundy' : 'sekúnd');
                }
                else {
                    return result + 'sekundami';
                }
            // break;
            case 'm':
                // a minute / in a minute / a minute ago
                return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou');
            case 'mm':
                // 9 minutes / in 9 minutes / 9 minutes ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$3(num) ? 'minúty' : 'minút');
                }
                else {
                    return result + 'minútami';
                }
            // break;
            case 'h':
                // an hour / in an hour / an hour ago
                return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
            case 'hh':
                // 9 hours / in 9 hours / 9 hours ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$3(num) ? 'hodiny' : 'hodín');
                }
                else {
                    return result + 'hodinami';
                }
            // break;
            case 'd':
                // a day / in a day / a day ago
                return (withoutSuffix || isFuture) ? 'deň' : 'dňom';
            case 'dd':
                // 9 days / in 9 days / 9 days ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$3(num) ? 'dni' : 'dní');
                }
                else {
                    return result + 'dňami';
                }
            // break;
            case 'M':
                // a month / in a month / a month ago
                return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom';
            case 'MM':
                // 9 months / in 9 months / 9 months ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$3(num) ? 'mesiace' : 'mesiacov');
                }
                else {
                    return result + 'mesiacmi';
                }
            // break;
            case 'y':
                // a year / in a year / a year ago
                return (withoutSuffix || isFuture) ? 'rok' : 'rokom';
            case 'yy':
                // 9 years / in 9 years / 9 years ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$3(num) ? 'roky' : 'rokov');
                }
                else {
                    return result + 'rokmi';
                }
        }
    }
    var /** @type {?} */ skLocale = {
        abbr: 'sk',
        months: months$2,
        monthsShort: monthsShort$5,
        weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
        weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
        weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd D. MMMM YYYY H:mm',
            l: 'D. M. YYYY'
        },
        calendar: {
            sameDay: '[dnes o] LT',
            nextDay: '[zajtra o] LT',
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[v nedeľu o] LT';
                    case 1:
                    case 2:
                        return '[v] dddd [o] LT';
                    case 3:
                        return '[v stredu o] LT';
                    case 4:
                        return '[vo štvrtok o] LT';
                    case 5:
                        return '[v piatok o] LT';
                    case 6:
                        return '[v sobotu o] LT';
                }
            },
            lastDay: '[včera o] LT',
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[minulú nedeľu o] LT';
                    case 1:
                    case 2:
                        return '[minulý] dddd [o] LT';
                    case 3:
                        return '[minulú stredu o] LT';
                    case 4:
                    case 5:
                        return '[minulý] dddd [o] LT';
                    case 6:
                        return '[minulú sobotu o] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'o %s',
            past: 'pred %s',
            s: translate$5,
            ss: translate$5,
            m: translate$5,
            mm: translate$5,
            h: translate$5,
            hh: translate$5,
            d: translate$5,
            dd: translate$5,
            M: translate$5,
            MM: translate$5,
            y: translate$5,
            yy: translate$5
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} number
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */
    function processRelativeTime$1(number, withoutSuffix, key, isFuture) {
        var /** @type {?} */ result = number + ' ';
        switch (key) {
            case 's':
                return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';
            case 'ss':
                if (number === 1) {
                    result += withoutSuffix ? 'sekundo' : 'sekundi';
                }
                else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'sekundi' : 'sekundah';
                }
                else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'sekunde' : 'sekundah';
                }
                else {
                    result += withoutSuffix || isFuture ? 'sekund' : 'sekund';
                }
                return result;
            case 'm':
                return withoutSuffix ? 'ena minuta' : 'eno minuto';
            case 'mm':
                if (number === 1) {
                    result += withoutSuffix ? 'minuta' : 'minuto';
                }
                else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
                }
                else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'minute' : 'minutami';
                }
                else {
                    result += withoutSuffix || isFuture ? 'minut' : 'minutami';
                }
                return result;
            case 'h':
                return withoutSuffix ? 'ena ura' : 'eno uro';
            case 'hh':
                if (number === 1) {
                    result += withoutSuffix ? 'ura' : 'uro';
                }
                else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'uri' : 'urama';
                }
                else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'ure' : 'urami';
                }
                else {
                    result += withoutSuffix || isFuture ? 'ur' : 'urami';
                }
                return result;
            case 'd':
                return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
            case 'dd':
                if (number === 1) {
                    result += withoutSuffix || isFuture ? 'dan' : 'dnem';
                }
                else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
                }
                else {
                    result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
                }
                return result;
            case 'M':
                return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
            case 'MM':
                if (number === 1) {
                    result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
                }
                else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
                }
                else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
                }
                else {
                    result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
                }
                return result;
            case 'y':
                return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
            case 'yy':
                if (number === 1) {
                    result += withoutSuffix || isFuture ? 'leto' : 'letom';
                }
                else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'leti' : 'letoma';
                }
                else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'leta' : 'leti';
                }
                else {
                    result += withoutSuffix || isFuture ? 'let' : 'leti';
                }
                return result;
        }
    }
    var /** @type {?} */ slLocale = {
        abbr: 'sl',
        months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
        weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
        weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[danes ob] LT',
            nextDay: '[jutri ob] LT',
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[v] [nedeljo] [ob] LT';
                    case 3:
                        return '[v] [sredo] [ob] LT';
                    case 6:
                        return '[v] [soboto] [ob] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[v] dddd [ob] LT';
                }
            },
            lastDay: '[včeraj ob] LT',
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[prejšnjo] [nedeljo] [ob] LT';
                    case 3:
                        return '[prejšnjo] [sredo] [ob] LT';
                    case 6:
                        return '[prejšnjo] [soboto] [ob] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[prejšnji] dddd [ob] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'čez %s',
            past: 'pred %s',
            s: processRelativeTime$1,
            ss: processRelativeTime$1,
            m: processRelativeTime$1,
            mm: processRelativeTime$1,
            h: processRelativeTime$1,
            hh: processRelativeTime$1,
            d: processRelativeTime$1,
            dd: processRelativeTime$1,
            M: processRelativeTime$1,
            MM: processRelativeTime$1,
            y: processRelativeTime$1,
            yy: processRelativeTime$1
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : Swedish [sv]
    //! author : Jens Alm : https://github.com/ulmus
    var /** @type {?} */ svLocale = {
        abbr: 'sv',
        months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
        weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
        weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [kl.] HH:mm',
            LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
            lll: 'D MMM YYYY HH:mm',
            llll: 'ddd D MMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Idag] LT',
            nextDay: '[Imorgon] LT',
            lastDay: '[Igår] LT',
            nextWeek: '[På] dddd LT',
            lastWeek: '[I] dddd[s] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'om %s',
            past: 'för %s sedan',
            s: 'några sekunder',
            ss: '%d sekunder',
            m: 'en minut',
            mm: '%d minuter',
            h: 'en timme',
            hh: '%d timmar',
            d: 'en dag',
            dd: '%d dagar',
            M: 'en månad',
            MM: '%d månader',
            y: 'ett år',
            yy: '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
        ordinal: /**
         * @param {?} _num
         * @return {?}
         */ function (_num) {
            var /** @type {?} */ num = Number(_num);
            var /** @type {?} */ b = num % 10, /** @type {?} */ output = (~~(num % 100 / 10) === 1) ? 'e' :
                (b === 1) ? 'a' :
                    (b === 2) ? 'a' :
                        (b === 3) ? 'e' : 'e';
            return num + output;
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    var /** @type {?} */ thLocale = {
        abbr: 'th',
        months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
        monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
        monthsParseExact: true,
        weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
        weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'),
        // yes, three characters difference
        weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY เวลา H:mm',
            LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm'
        },
        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
        isPM: /**
         * @param {?} input
         * @return {?}
         */ function (input) {
            return input === 'หลังเที่ยง';
        },
        meridiem: /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} isLower
         * @return {?}
         */ function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ก่อนเที่ยง';
            }
            else {
                return 'หลังเที่ยง';
            }
        },
        calendar: {
            sameDay: '[วันนี้ เวลา] LT',
            nextDay: '[พรุ่งนี้ เวลา] LT',
            nextWeek: 'dddd[หน้า เวลา] LT',
            lastDay: '[เมื่อวานนี้ เวลา] LT',
            lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'อีก %s',
            past: '%sที่แล้ว',
            s: 'ไม่กี่วินาที',
            ss: '%d วินาที',
            m: '1 นาที',
            mm: '%d นาที',
            h: '1 ชั่วโมง',
            hh: '%d ชั่วโมง',
            d: '1 วัน',
            dd: '%d วัน',
            M: '1 เดือน',
            MM: '%d เดือน',
            y: '1 ปี',
            yy: '%d ปี'
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : Turkish [tr]
    //! authors : Erhan Gundogan : https://github.com/erhangundogan,
    //!           Burak Yiğit Kaya: https://github.com/BYK
    var /** @type {?} */ suffixes = {
        1: '\'inci',
        5: '\'inci',
        8: '\'inci',
        70: '\'inci',
        80: '\'inci',
        2: '\'nci',
        7: '\'nci',
        20: '\'nci',
        50: '\'nci',
        3: '\'üncü',
        4: '\'üncü',
        100: '\'üncü',
        6: '\'ncı',
        9: '\'uncu',
        10: '\'uncu',
        30: '\'uncu',
        60: '\'ıncı',
        90: '\'ıncı'
    };
    var /** @type {?} */ trLocale = {
        abbr: 'tr',
        months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
        monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
        weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
        weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
        weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[bugün saat] LT',
            nextDay: '[yarın saat] LT',
            nextWeek: '[gelecek] dddd [saat] LT',
            lastDay: '[dün] LT',
            lastWeek: '[geçen] dddd [saat] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s sonra',
            past: '%s önce',
            s: 'birkaç saniye',
            ss: '%d saniye',
            m: 'bir dakika',
            mm: '%d dakika',
            h: 'bir saat',
            hh: '%d saat',
            d: 'bir gün',
            dd: '%d gün',
            M: 'bir ay',
            MM: '%d ay',
            y: 'bir yıl',
            yy: '%d yıl'
        },
        dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
        ordinal: /**
         * @param {?} _num
         * @return {?}
         */ function (_num) {
            var /** @type {?} */ num = Number(_num);
            if (num === 0) {
                // special case for zero
                return num + '\'ıncı';
            }
            var /** @type {?} */ a = num % 10, /** @type {?} */ b = num % 100 - a, /** @type {?} */ c = num >= 100 ? 100 : null;
            return num + (suffixes[a] || suffixes[b] || suffixes[c]);
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    // tslint:disable:no-parameter-reassignment prefer-switch
    //! moment.js locale configuration
    //! locale : Chinese (China) [zh-cn]
    //! author : suupic : https://github.com/suupic
    //! author : Zeno Zeng : https://github.com/zenozeng
    var /** @type {?} */ zhCnLocale = {
        abbr: 'zh-cn',
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日Ah点mm分',
            LLLL: 'YYYY年M月D日ddddAh点mm分',
            l: 'YYYY/M/D',
            ll: 'YYYY年M月D日',
            lll: 'YYYY年M月D日 HH:mm',
            llll: 'YYYY年M月D日dddd HH:mm'
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: /**
         * @param {?} hour
         * @param {?} meridiem
         * @return {?}
         */ function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '凌晨' || meridiem === '早上' ||
                meridiem === '上午') {
                return hour;
            }
            else if (meridiem === '下午' || meridiem === '晚上') {
                return hour + 12;
            }
            else {
                // '中午'
                return hour >= 11 ? hour : hour + 12;
            }
        },
        meridiem: /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} isLower
         * @return {?}
         */ function (hour, minute, isLower) {
            var /** @type {?} */ hm = hour * 100 + minute;
            if (hm < 600) {
                return '凌晨';
            }
            else if (hm < 900) {
                return '早上';
            }
            else if (hm < 1130) {
                return '上午';
            }
            else if (hm < 1230) {
                return '中午';
            }
            else if (hm < 1800) {
                return '下午';
            }
            else {
                return '晚上';
            }
        },
        calendar: {
            sameDay: '[今天]LT',
            nextDay: '[明天]LT',
            nextWeek: '[下]ddddLT',
            lastDay: '[昨天]LT',
            lastWeek: '[上]ddddLT',
            sameElse: 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
        ordinal: /**
         * @param {?} _num
         * @param {?} period
         * @return {?}
         */ function (_num, period) {
            var /** @type {?} */ num = Number(_num);
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return num + '日';
                case 'M':
                    return num + '月';
                case 'w':
                case 'W':
                    return num + '周';
                default:
                    return num.toString();
            }
        },
        relativeTime: {
            future: '%s内',
            past: '%s前',
            s: '几秒',
            ss: '%d 秒',
            m: '1 分钟',
            mm: '%d 分钟',
            h: '1 小时',
            hh: '%d 小时',
            d: '1 天',
            dd: '%d 天',
            M: '1 个月',
            MM: '%d 个月',
            y: '1 年',
            yy: '%d 年'
        },
        week: {
            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.add = add;
    exports.subtract = subtract;
    exports.getDay = getDay;
    exports.isFirstDayOfWeek = isFirstDayOfWeek;
    exports.isSameYear = isSameYear;
    exports.isSameDay = isSameDay;
    exports.isSameMonth = isSameMonth;
    exports.getFullYear = getFullYear;
    exports.getFirstDayOfMonth = getFirstDayOfMonth;
    exports.getMonth = getMonth;
    exports.parseDate = parseDate;
    exports.formatDate = formatDate;
    exports.listLocales = listLocales;
    exports.getLocale = getLocale;
    exports.updateLocale = updateLocale;
    exports.defineLocale = defineLocale;
    exports.getSetGlobalLocale = getSetGlobalLocale;
    exports.isAfter = isAfter;
    exports.isBefore = isBefore;
    exports.isArray = isArray;
    exports.isDateValid = isDateValid;
    exports.isDate = isDate;
    exports.shiftDate = shiftDate;
    exports.setFullDate = setFullDate;
    exports.endOf = endOf;
    exports.startOf = startOf;
    exports.arLocale = arLocale;
    exports.csLocale = csLocale;
    exports.daLocale = daLocale;
    exports.deLocale = deLocale;
    exports.enGbLocale = enGbLocale;
    exports.esLocale = esLocale;
    exports.esDoLocale = esDoLocale;
    exports.esUsLocale = esUsLocale;
    exports.fiLocale = fiLocale;
    exports.frLocale = frLocale;
    exports.glLocale = glLocale;
    exports.heLocale = heLocale;
    exports.hiLocale = hiLocale;
    exports.huLocale = huLocale;
    exports.idLocale = idLocale;
    exports.itLocale = itLocale;
    exports.jaLocale = jaLocale;
    exports.koLocale = koLocale;
    exports.mnLocale = mnLocale;
    exports.nlLocale = nlLocale;
    exports.nlBeLocale = nlBeLocale;
    exports.plLocale = plLocale;
    exports.ptBrLocale = ptBrLocale;
    exports.ruLocale = ruLocale;
    exports.roLocale = roLocale;
    exports.skLocale = skLocale;
    exports.slLocale = slLocale;
    exports.svLocale = svLocale;
    exports.thLocale = thLocale;
    exports.trLocale = trLocale;
    exports.zhCnLocale = zhCnLocale;
    exports.ɵa = createDate;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1jaHJvbm9zLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3V0aWxzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMvdHlwZS1jaGVja3MudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy9hbGlhc2VzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvY29uc3RhbnRzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMvemVyby1maWxsLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvZm9ybWF0L2Zvcm1hdC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2NyZWF0ZS9kYXRlLWZyb20tYXJyYXkudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91dGlscy9kYXRlLWdldHRlcnMudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9wYXJzZS9yZWdleC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3BhcnNlL3Rva2VuLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvcHJpb3JpdGllcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL2RheS1vZi1tb250aC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2NyZWF0ZS9wYXJzaW5nLWZsYWdzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMveWVhci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL21vbnRoLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMvZGF0ZS1zZXR0ZXJzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL2Nsb25lLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMvc3RhcnQtZW5kLW9mLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvZGF5LW9mLXllYXIudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy93ZWVrLWNhbGVuZGFyLXV0aWxzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvbG9jYWxlL2xvY2FsZS5jbGFzcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2xvY2FsZS9jYWxlbmRhci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2xvY2FsZS9sb2NhbGUuZGVmYXVsdHMudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91dGlscy9jb21wYXJlLWFycmF5cy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2xvY2FsZS9sb2NhbGVzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvZHVyYXRpb24vdmFsaWQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91dGlscy9hYnMtY2VpbC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2R1cmF0aW9uL2J1YmJsZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2R1cmF0aW9uL2h1bWFuaXplLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvZHVyYXRpb24vY29uc3RydWN0b3IudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9jcmVhdGUvdmFsaWQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9jcmVhdGUvZnJvbS1zdHJpbmcudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9mb3JtYXQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91dGlscy9kZWZhdWx0cy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2NyZWF0ZS9mcm9tLWFycmF5LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL2NoZWNrLW92ZXJmbG93LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL2Zyb20tc3RyaW5nLWFuZC1mb3JtYXQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9jcmVhdGUvZnJvbS1zdHJpbmctYW5kLWFycmF5LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL2Zyb20tb2JqZWN0LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL2Zyb20tYW55dGhpbmcudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9jcmVhdGUvbG9jYWwudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91dGlscy9hYnMtcm91bmQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy9vZmZzZXQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91dGlscy9kYXRlLWNvbXBhcmUudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9kdXJhdGlvbi9jcmVhdGUudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9tb21lbnQvYWRkLXN1YnRyYWN0LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvZGF5LW9mLXdlZWsudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy9ob3VyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvbWlsbGlzZWNvbmQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy9taW51dGUudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy9xdWFydGVyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvc2Vjb25kLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvdGltZXN0YW1wLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvd2Vlay50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL3dlZWsteWVhci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vYXIudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2NzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9kYS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vZGUudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2VuLWdiLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9lcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vZXMtZG8udHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2VzLXVzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9maS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vZnIudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2dsLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9oZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vaGkudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2h1LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9pZC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vaXQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2phLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9rby50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vbW4udHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL25sLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9ubC1iZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vcGwudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL3B0LWJyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9ydS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vcm8udHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL3NrLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9zbC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vc3YudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL3RoLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi90ci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vemgtY24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBmdW5jdGlvbiBtb2QobjogbnVtYmVyLCB4OiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gKG4gJSB4ICsgeCkgJSB4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWJzRmxvb3IobnVtOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gbnVtIDwgMCA/IE1hdGguY2VpbChudW0pIHx8IDAgOiBNYXRoLmZsb29yKG51bSk7XG59XG5cbiIsImltcG9ydCB7IGFic0Zsb29yIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcoc3RyOiBhbnkpOiBzdHIgaXMgc3RyaW5nIHtcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBEYXRlIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4odmFsdWU6IGFueSk6IHZhbHVlIGlzIGJvb2xlYW4ge1xuICByZXR1cm4gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09IGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlVmFsaWQoZGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xuICByZXR1cm4gZGF0ZSAmJiBkYXRlLmdldFRpbWUgJiYgIWlzTmFOKGRhdGUuZ2V0VGltZSgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24oZm46IGFueSk6IGZuIGlzIEZ1bmN0aW9uIHtcbiAgcmV0dXJuIChcbiAgICBmbiBpbnN0YW5jZW9mIEZ1bmN0aW9uIHx8XG4gICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGZuKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJ1xuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWU/OiBhbnkpOiB2YWx1ZSBpcyBudW1iZXIge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBOdW1iZXJdJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXk8VD4oaW5wdXQ/OiBhbnkpOiBpbnB1dCBpcyBUW10ge1xuICByZXR1cm4gKFxuICAgIGlucHV0IGluc3RhbmNlb2YgQXJyYXkgfHxcbiAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBBcnJheV0nXG4gICk7XG59XG5cbi8vIFRPRE86IHJldHVybmVkIHR5cGUgc2hvdWxkIGJlIGNoYW5nZWQgdG8gXCJiIGlzIEV4dHJhY3Q8a2V5b2YgVCwgc3RyaW5nPlwiXG4vLyBhZnRlciB1cGRhdGUgdG8gdHlwZXNjcmlwdCAzLjEuMSAoaXNzdWUgNDcyOClcbmV4cG9ydCBmdW5jdGlvbiBoYXNPd25Qcm9wPFQ+KGE6IFQgLypvYmplY3QqLywgYjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSwgYik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdDxUPihpbnB1dDogYW55IC8qb2JqZWN0Ki8pOiBpbnB1dCBpcyBUIHtcbiAgLy8gSUU4IHdpbGwgdHJlYXQgdW5kZWZpbmVkIGFuZCBudWxsIGFzIG9iamVjdCBpZiBpdCB3YXNuJ3QgZm9yXG4gIC8vIGlucHV0ICE9IG51bGxcbiAgcmV0dXJuIChcbiAgICBpbnB1dCAhPSBudWxsICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IE9iamVjdF0nXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdEVtcHR5KG9iajogYW55KTogYm9vbGVhbiB7XG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcykge1xuICAgIHJldHVybiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5sZW5ndGggPT09IDApO1xuICB9XG4gIGxldCBrO1xuICBmb3IgKGsgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZChpbnB1dDogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBpbnB1dCA9PT0gdm9pZCAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9JbnQ8VD4oYXJndW1lbnRGb3JDb2VyY2lvbjogc3RyaW5nIHwgbnVtYmVyIHwgVCk6IG51bWJlciB7XG4gIGNvbnN0IGNvZXJjZWROdW1iZXIgPSArYXJndW1lbnRGb3JDb2VyY2lvbjtcbiAgbGV0IHZhbHVlID0gMDtcblxuICBpZiAoY29lcmNlZE51bWJlciAhPT0gMCAmJiBpc0Zpbml0ZShjb2VyY2VkTnVtYmVyKSkge1xuICAgIHZhbHVlID0gYWJzRmxvb3IoY29lcmNlZE51bWJlcik7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG4iLCJpbXBvcnQgeyBoYXNPd25Qcm9wLCBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IERhdGVPYmplY3QsIFVuaXRPZlRpbWUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IGFsaWFzZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuZXhwb3J0IHR5cGUgRXh0ZW5kZWRVbml0T2ZUaW1lID0gVW5pdE9mVGltZSB8ICdkYXRlJyB8ICd3ZWVrJyB8ICdpc29XZWVrJyB8ICdkYXlPZlllYXInIHxcbiAgJ3dlZWtkYXknIHwgJ2lzb1dlZWtkYXknIHwgJ3NlY29uZCcgfCAnbWlsbGlzZWNvbmQnIHwgJ21pbnV0ZScgfCAnaG91cicgfCAncXVhcnRlcicgfCAnd2Vla1llYXInIHwgJ2lzb1dlZWtZZWFyJztcblxuY29uc3QgX21hcFVuaXRzOiB7IFtrZXk6IHN0cmluZ106IFVuaXRPZlRpbWUgfSA9IHtcbiAgZGF0ZTogJ2RheScsXG4gIGhvdXI6ICdob3VycycsXG4gIG1pbnV0ZTogJ21pbnV0ZXMnLFxuICBzZWNvbmQ6ICdzZWNvbmRzJyxcbiAgbWlsbGlzZWNvbmQ6ICdtaWxsaXNlY29uZHMnXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkVW5pdEFsaWFzKHVuaXQ6IEV4dGVuZGVkVW5pdE9mVGltZSwgc2hvcnRoYW5kOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3QgbG93ZXJDYXNlID0gdW5pdC50b0xvd2VyQ2FzZSgpO1xuICBsZXQgX3VuaXQgPSB1bml0O1xuICBpZiAobG93ZXJDYXNlIGluIF9tYXBVbml0cykge1xuICAgIF91bml0ID0gX21hcFVuaXRzW2xvd2VyQ2FzZV07XG4gIH1cbiAgYWxpYXNlc1tsb3dlckNhc2VdID0gYWxpYXNlc1tgJHtsb3dlckNhc2V9c2BdID0gYWxpYXNlc1tzaG9ydGhhbmRdID0gX3VuaXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVVbml0cyh1bml0czogc3RyaW5nIHwgc3RyaW5nW10pOiBzdHJpbmcge1xuICByZXR1cm4gaXNTdHJpbmcodW5pdHMpID8gYWxpYXNlc1t1bml0c10gfHwgYWxpYXNlc1t1bml0cy50b0xvd2VyQ2FzZSgpXSA6IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZU9iamVjdFVuaXRzKGlucHV0T2JqZWN0OiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9KTogRGF0ZU9iamVjdCB7XG4gIGNvbnN0IG5vcm1hbGl6ZWRJbnB1dDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xuICBsZXQgbm9ybWFsaXplZFByb3A7XG4gIGxldCBwcm9wO1xuXG4gIGZvciAocHJvcCBpbiBpbnB1dE9iamVjdCkge1xuICAgIGlmIChoYXNPd25Qcm9wKGlucHV0T2JqZWN0LCBwcm9wKSkge1xuICAgICAgbm9ybWFsaXplZFByb3AgPSBub3JtYWxpemVVbml0cyhwcm9wKTtcbiAgICAgIGlmIChub3JtYWxpemVkUHJvcCkge1xuICAgICAgICBub3JtYWxpemVkSW5wdXRbbm9ybWFsaXplZFByb3BdID0gaW5wdXRPYmplY3RbcHJvcF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vcm1hbGl6ZWRJbnB1dCBhcyBhbnk7XG59XG4iLCIvLyBwbGFjZSBpbiBuZXcgRGF0ZShbYXJyYXldKVxuZXhwb3J0IGNvbnN0IFlFQVIgPSAwO1xuZXhwb3J0IGNvbnN0IE1PTlRIID0gMTtcbmV4cG9ydCBjb25zdCBEQVRFID0gMjtcbmV4cG9ydCBjb25zdCBIT1VSID0gMztcbmV4cG9ydCBjb25zdCBNSU5VVEUgPSA0O1xuZXhwb3J0IGNvbnN0IFNFQ09ORCA9IDU7XG5leHBvcnQgY29uc3QgTUlMTElTRUNPTkQgPSA2O1xuZXhwb3J0IGNvbnN0IFdFRUsgPSA3O1xuZXhwb3J0IGNvbnN0IFdFRUtEQVkgPSA4O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHplcm9GaWxsKG51bTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldExlbmd0aDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlU2lnbj86IGJvb2xlYW4pOiBzdHJpbmcge1xuICBjb25zdCBhYnNOdW1iZXIgPSBgJHtNYXRoLmFicyhudW0pfWA7XG4gIGNvbnN0IHplcm9zVG9GaWxsID0gdGFyZ2V0TGVuZ3RoIC0gYWJzTnVtYmVyLmxlbmd0aDtcbiAgY29uc3Qgc2lnbiA9IG51bSA+PSAwO1xuICBjb25zdCBfc2lnbiA9IHNpZ24gPyAoZm9yY2VTaWduID8gJysnIDogJycpIDogJy0nO1xuICAvLyB0b2RvOiB0aGlzIGlzIGNyYXp5IHNsb3dcbiAgY29uc3QgX3plcm9zID0gTWF0aC5wb3coMTAsIE1hdGgubWF4KDAsIHplcm9zVG9GaWxsKSkudG9TdHJpbmcoKS5zdWJzdHIoMSk7XG5cbiAgcmV0dXJuIChfc2lnbiArIF96ZXJvcyArIGFic051bWJlcik7XG59XG4iLCJpbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IHplcm9GaWxsIH0gZnJvbSAnLi4vdXRpbHMvemVyby1maWxsJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0dGVyT3B0aW9ucywgRGF0ZUZvcm1hdHRlckZuIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgbGV0IGZvcm1hdEZ1bmN0aW9uczoge1xuICBba2V5OiBzdHJpbmddOiAoZGF0ZTogRGF0ZSwgbG9jYWxlOiBMb2NhbGUsIGlzVVRDPzogYm9vbGVhbiwgb2Zmc2V0PzogbnVtYmVyKSA9PiBzdHJpbmc7XG59ID0ge307XG5leHBvcnQgbGV0IGZvcm1hdFRva2VuRnVuY3Rpb25zOiB7IFtrZXk6IHN0cmluZ106IERhdGVGb3JtYXR0ZXJGbiB9ID0ge307XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuZXhwb3J0IGNvbnN0IGZvcm1hdHRpbmdUb2tlbnMgPSAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oW0hoXW1tKHNzKT98TW98TU0/TT9NP3xEb3xERERvfEREP0Q/RD98ZGRkP2Q/fGRvP3x3W298d10/fFdbb3xXXT98UW8/fFlZWVlZWXxZWVlZWXxZWVlZfFlZfGdnKGdnZz8pP3xHRyhHR0c/KT98ZXxFfGF8QXxoaD98SEg/fGtrP3xtbT98c3M/fFN7MSw5fXx4fFh8eno/fFpaP3wuKS9nO1xuXG4vLyB0b2tlbjogICAgJ00nXG4vLyBwYWRkZWQ6ICAgWydNTScsIDJdXG4vLyBvcmRpbmFsOiAgJ01vJ1xuLy8gY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHsgdGhpcy5tb250aCgpICsgMSB9XG5leHBvcnQgZnVuY3Rpb24gYWRkRm9ybWF0VG9rZW4odG9rZW46IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkZWQ6IFtzdHJpbmcsIG51bWJlciwgYm9vbGVhbl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkaW5hbDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBEYXRlRm9ybWF0dGVyRm4pOiB2b2lkIHtcbiAgaWYgKHRva2VuKSB7XG4gICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbdG9rZW5dID0gY2FsbGJhY2s7XG4gIH1cblxuICBpZiAocGFkZGVkKSB7XG4gICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbcGFkZGVkWzBdXSA9IGZ1bmN0aW9uICgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHplcm9GaWxsKGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyksIHBhZGRlZFsxXSwgcGFkZGVkWzJdKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKG9yZGluYWwpIHtcbiAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1tvcmRpbmFsXSA9IGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gb3B0cy5sb2NhbGUub3JkaW5hbChjYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpLCB0b2tlbik7XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUZvcm1hdEZ1bmN0aW9uKGZvcm1hdDogc3RyaW5nKTogKGRhdGU6IERhdGUsIGxvY2FsZTogTG9jYWxlLCBpc1VUQz86IGJvb2xlYW4sIG9mZnNldD86IG51bWJlcikgPT4gc3RyaW5nIHtcbiAgY29uc3QgYXJyYXk6IHN0cmluZ1tdID0gZm9ybWF0Lm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpO1xuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgY29uc3QgZm9ybWF0QXJyOiBzdHJpbmdbXSB8IERhdGVGb3JtYXR0ZXJGbltdID0gbmV3IEFycmF5KGxlbmd0aCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGZvcm1hdEFycltpXSA9IGZvcm1hdFRva2VuRnVuY3Rpb25zW2FycmF5W2ldXVxuICAgICAgPyBmb3JtYXRUb2tlbkZ1bmN0aW9uc1thcnJheVtpXV1cbiAgICAgIDogcmVtb3ZlRm9ybWF0dGluZ1Rva2VucyhhcnJheVtpXSk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGRhdGU6IERhdGUsIGxvY2FsZTogTG9jYWxlLCBpc1VUQzogYm9vbGVhbiwgb2Zmc2V0ID0gMCk6IHN0cmluZyB7XG4gICAgbGV0IG91dHB1dCA9ICcnO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuZ3RoOyBqKyspIHtcbiAgICAgIG91dHB1dCArPSBpc0Z1bmN0aW9uKGZvcm1hdEFycltqXSlcbiAgICAgICAgPyAoZm9ybWF0QXJyW2pdIGFzIERhdGVGb3JtYXR0ZXJGbikuY2FsbChudWxsLCBkYXRlLCB7Zm9ybWF0LCBsb2NhbGUsIGlzVVRDLCBvZmZzZXR9KVxuICAgICAgICA6IGZvcm1hdEFycltqXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9O1xufVxuXG5mdW5jdGlvbiByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoaW5wdXQubWF0Y2goL1xcW1tcXHNcXFNdLykpIHtcbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXlxcW3xcXF0kL2csICcnKTtcbiAgfVxuXG4gIHJldHVybiBpbnB1dC5yZXBsYWNlKC9cXFxcL2csICcnKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVVENEYXRlKHk/OiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtPzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD86IG51bWJlcik6IERhdGUge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMuYXBwbHkobnVsbCwgYXJndW1lbnRzKSk7XG5cbiAgLy8gdGhlIERhdGUuVVRDIGZ1bmN0aW9uIHJlbWFwcyB5ZWFycyAwLTk5IHRvIDE5MDAtMTk5OVxuICBpZiAoeSA8IDEwMCAmJiB5ID49IDAgJiYgaXNGaW5pdGUoZGF0ZS5nZXRVVENGdWxsWWVhcigpKSkge1xuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeSk7XG4gIH1cblxuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURhdGUoeT86IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG0gPSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZCA9IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBoID0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIE0gPSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBtcyA9IDApOiBEYXRlIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHksIG0sIGQsIGgsIE0sIHMsIG1zKTtcblxuICAvLyB0aGUgZGF0ZSBjb25zdHJ1Y3RvciByZW1hcHMgeWVhcnMgMC05OSB0byAxOTAwLTE5OTlcbiAgaWYgKHkgPCAxMDAgJiYgeSA+PSAwICYmIGlzRmluaXRlKGRhdGUuZ2V0RnVsbFllYXIoKSkpIHtcbiAgICBkYXRlLnNldEZ1bGxZZWFyKHkpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGU7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2RhdGUtZnJvbS1hcnJheSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRIb3VycyhkYXRlOiBEYXRlLCBpc1VUQyA9IGZhbHNlKTogbnVtYmVyIHtcbiAgcmV0dXJuIGlzVVRDID8gZGF0ZS5nZXRVVENIb3VycygpIDogZGF0ZS5nZXRIb3VycygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWludXRlcyhkYXRlOiBEYXRlLCBpc1VUQyA9IGZhbHNlKTogbnVtYmVyIHtcbiAgcmV0dXJuIGlzVVRDID8gZGF0ZS5nZXRVVENNaW51dGVzKCkgOiBkYXRlLmdldE1pbnV0ZXMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlY29uZHMoZGF0ZTogRGF0ZSwgaXNVVEMgPSBmYWxzZSk6IG51bWJlciB7XG4gIHJldHVybiBpc1VUQyA/IGRhdGUuZ2V0VVRDU2Vjb25kcygpIDogZGF0ZS5nZXRTZWNvbmRzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNaWxsaXNlY29uZHMoZGF0ZTogRGF0ZSwgaXNVVEMgPSBmYWxzZSk6IG51bWJlciB7XG4gIHJldHVybiBpc1VUQyA/IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkgOiBkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWUoZGF0ZTogRGF0ZSk6IG51bWJlciB7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERheShkYXRlOiBEYXRlLCBpc1VUQyA9IGZhbHNlKTogbnVtYmVyIHtcbiAgcmV0dXJuIGlzVVRDID8gZGF0ZS5nZXRVVENEYXkoKSA6IGRhdGUuZ2V0RGF5KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlKGRhdGU6IERhdGUsIGlzVVRDID0gZmFsc2UpOiBudW1iZXIge1xuICByZXR1cm4gaXNVVEMgPyBkYXRlLmdldFVUQ0RhdGUoKSA6IGRhdGUuZ2V0RGF0ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9udGgoZGF0ZTogRGF0ZSwgaXNVVEMgPSBmYWxzZSk6IG51bWJlciB7XG4gIHJldHVybiBpc1VUQyA/IGRhdGUuZ2V0VVRDTW9udGgoKSA6IGRhdGUuZ2V0TW9udGgoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZ1bGxZZWFyKGRhdGU6IERhdGUsIGlzVVRDID0gZmFsc2UpOiBudW1iZXIge1xuICByZXR1cm4gaXNVVEMgPyBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgOiBkYXRlLmdldEZ1bGxZZWFyKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVbml4VGltZShkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGF0ZS52YWx1ZU9mKCkgLyAxMDAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaXgoZGF0ZTogRGF0ZSk6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLmZsb29yKGRhdGUudmFsdWVPZigpIC8gMTAwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaXJzdERheU9mTW9udGgoZGF0ZTogRGF0ZSk6IERhdGUge1xuICByZXR1cm4gY3JlYXRlRGF0ZShcbiAgICBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgZGF0ZS5nZXRNb250aCgpLFxuICAgIDEsXG4gICAgZGF0ZS5nZXRIb3VycygpLFxuICAgIGRhdGUuZ2V0TWludXRlcygpLFxuICAgIGRhdGUuZ2V0U2Vjb25kcygpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlzSW5Nb250aChkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgcmV0dXJuIF9kYXlzSW5Nb250aChkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZGF5c0luTW9udGgoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIG1vbnRoICsgMSwgMCkpLmdldFVUQ0RhdGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRmlyc3REYXlPZldlZWsoZGF0ZTogRGF0ZSwgZmlyc3REYXlPZldlZWs6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gZGF0ZS5nZXREYXkoKSA9PT0gZmlyc3REYXlPZldlZWs7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVNb250aChkYXRlMTogRGF0ZSwgZGF0ZTI6IERhdGUpIHtcbiAgaWYgKCFkYXRlMSB8fCAhZGF0ZTIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNTYW1lWWVhcihkYXRlMSwgZGF0ZTIpICYmIGdldE1vbnRoKGRhdGUxKSA9PT0gZ2V0TW9udGgoZGF0ZTIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lWWVhcihkYXRlMTogRGF0ZSwgZGF0ZTI6IERhdGUpIHtcbiAgaWYgKCFkYXRlMSB8fCAhZGF0ZTIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZ2V0RnVsbFllYXIoZGF0ZTEpID09PSBnZXRGdWxsWWVhcihkYXRlMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVEYXkoZGF0ZTE6IERhdGUsIGRhdGUyOiBEYXRlKTogYm9vbGVhbiB7XG4gIGlmICghZGF0ZTEgfHwgIWRhdGUyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICBpc1NhbWVZZWFyKGRhdGUxLCBkYXRlMikgJiZcbiAgICBpc1NhbWVNb250aChkYXRlMSwgZGF0ZTIpICYmXG4gICAgZ2V0RGF0ZShkYXRlMSkgPT09IGdldERhdGUoZGF0ZTIpXG4gICk7XG59XG4iLCJpbXBvcnQgeyBoYXNPd25Qcm9wLCBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbmV4cG9ydCBjb25zdCBtYXRjaDEgPSAvXFxkLzsgICAgICAgICAgICAvLyAgICAgICAwIC0gOVxuZXhwb3J0IGNvbnN0IG1hdGNoMiA9IC9cXGRcXGQvOyAgICAgICAgICAvLyAgICAgIDAwIC0gOTlcbmV4cG9ydCBjb25zdCBtYXRjaDMgPSAvXFxkezN9LzsgICAgICAgICAvLyAgICAgMDAwIC0gOTk5XG5leHBvcnQgY29uc3QgbWF0Y2g0ID0gL1xcZHs0fS87ICAgICAgICAgLy8gICAgMDAwMCAtIDk5OTlcbmV4cG9ydCBjb25zdCBtYXRjaDYgPSAvWystXT9cXGR7Nn0vOyAgICAvLyAtOTk5OTk5IC0gOTk5OTk5XG5leHBvcnQgY29uc3QgbWF0Y2gxdG8yID0gL1xcZFxcZD8vOyAgICAgICAgIC8vICAgICAgIDAgLSA5OVxuZXhwb3J0IGNvbnN0IG1hdGNoM3RvNCA9IC9cXGRcXGRcXGRcXGQ/LzsgICAgIC8vICAgICA5OTkgLSA5OTk5XG5leHBvcnQgY29uc3QgbWF0Y2g1dG82ID0gL1xcZFxcZFxcZFxcZFxcZFxcZD8vOyAvLyAgIDk5OTk5IC0gOTk5OTk5XG5leHBvcnQgY29uc3QgbWF0Y2gxdG8zID0gL1xcZHsxLDN9LzsgICAgICAgLy8gICAgICAgMCAtIDk5OVxuZXhwb3J0IGNvbnN0IG1hdGNoMXRvNCA9IC9cXGR7MSw0fS87ICAgICAgIC8vICAgICAgIDAgLSA5OTk5XG5leHBvcnQgY29uc3QgbWF0Y2gxdG82ID0gL1srLV0/XFxkezEsNn0vOyAgLy8gLTk5OTk5OSAtIDk5OTk5OVxuXG5leHBvcnQgY29uc3QgbWF0Y2hVbnNpZ25lZCA9IC9cXGQrLzsgICAgICAgICAgIC8vICAgICAgIDAgLSBpbmZcbmV4cG9ydCBjb25zdCBtYXRjaFNpZ25lZCA9IC9bKy1dP1xcZCsvOyAgICAgIC8vICAgIC1pbmYgLSBpbmZcblxuZXhwb3J0IGNvbnN0IG1hdGNoT2Zmc2V0ID0gL1p8WystXVxcZFxcZDo/XFxkXFxkL2dpOyAvLyArMDA6MDAgLTAwOjAwICswMDAwIC0wMDAwIG9yIFpcbmV4cG9ydCBjb25zdCBtYXRjaFNob3J0T2Zmc2V0ID0gL1p8WystXVxcZFxcZCg/Ojo/XFxkXFxkKT8vZ2k7IC8vICswMCAtMDAgKzAwOjAwIC0wMDowMCArMDAwMCAtMDAwMCBvciBaXG5cbmV4cG9ydCBjb25zdCBtYXRjaFRpbWVzdGFtcCA9IC9bKy1dP1xcZCsoXFwuXFxkezEsM30pPy87IC8vIDEyMzQ1Njc4OSAxMjM0NTY3ODkuMTIzXG5cbi8vIGFueSB3b3JkIChvciB0d28pIGNoYXJhY3RlcnMgb3IgbnVtYmVycyBpbmNsdWRpbmcgdHdvL3RocmVlIHdvcmQgbW9udGggaW4gYXJhYmljLlxuLy8gaW5jbHVkZXMgc2NvdHRpc2ggZ2FlbGljIHR3byB3b3JkIGFuZCBoeXBoZW5hdGVkIG1vbnRoc1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5leHBvcnQgY29uc3QgbWF0Y2hXb3JkID0gL1swLTldezAsMjU2fVsnYS16XFx1MDBBMC1cXHUwNUZGXFx1MDcwMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXXsxLDI1Nn18W1xcdTA2MDAtXFx1MDZGRlxcL117MSwyNTZ9KFxccyo/W1xcdTA2MDAtXFx1MDZGRl17MSwyNTZ9KXsxLDJ9L2k7XG5cbmV4cG9ydCB0eXBlIFJlZ0V4cFRva2VuRm4gPSAoaXNTdHJpY3Q6IGJvb2xlYW4sIGxvY2FsZTogTG9jYWxlKSA9PiBSZWdFeHA7XG5jb25zdCByZWdleGVzOiB7W2tleTogc3RyaW5nXTogUmVnRXhwVG9rZW5Gbn0gPSB7fTtcblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUmVnZXhUb2tlbih0b2tlbjogc3RyaW5nLCByZWdleDogUmVnRXhwIHwgUmVnRXhwVG9rZW5Gbiwgc3RyaWN0UmVnZXg/OiBSZWdFeHApOiB2b2lkIHtcbiAgaWYgKGlzRnVuY3Rpb24ocmVnZXgpKSB7XG4gICAgcmVnZXhlc1t0b2tlbl0gPSByZWdleDtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIHJlZ2V4ZXNbdG9rZW5dID0gZnVuY3Rpb24gKGlzU3RyaWN0OiBib29sZWFuLCBsb2NhbGU6IExvY2FsZSkge1xuICAgIHJldHVybiAoaXNTdHJpY3QgJiYgc3RyaWN0UmVnZXgpID8gc3RyaWN0UmVnZXggOiByZWdleDtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcnNlUmVnZXhGb3JUb2tlbih0b2tlbjogc3RyaW5nLCBsb2NhbGU6IExvY2FsZSk6IFJlZ0V4cCB7XG4gIGNvbnN0IF9zdHJpY3QgPSBmYWxzZTtcbiAgaWYgKCFoYXNPd25Qcm9wKHJlZ2V4ZXMsIHRva2VuKSkge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKHVuZXNjYXBlRm9ybWF0KHRva2VuKSk7XG4gIH1cblxuICByZXR1cm4gcmVnZXhlc1t0b2tlbl0oX3N0cmljdCwgbG9jYWxlKTtcbn1cblxuLy8gQ29kZSBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzU2MTQ5My9pcy10aGVyZS1hLXJlZ2V4cC1lc2NhcGUtZnVuY3Rpb24taW4tamF2YXNjcmlwdFxuZnVuY3Rpb24gdW5lc2NhcGVGb3JtYXQoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgcmV0dXJuIHJlZ2V4RXNjYXBlKHN0clxuICAgIC5yZXBsYWNlKCdcXFxcJywgJycpXG4gICAgLnJlcGxhY2UoL1xcXFwoXFxbKXxcXFxcKFxcXSl8XFxbKFteXFxdXFxbXSopXFxdfFxcXFwoLikvZywgKG1hdGNoZWQsIHAxLCBwMiwgcDMsIHA0KSA9PiBwMSB8fCBwMiB8fCBwMyB8fCBwNClcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2V4RXNjYXBlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bLVxcL1xcXFxeJCorPy4oKXxbXFxde31dL2csICdcXFxcJCYnKTtcbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aFxuaW1wb3J0IHsgaGFzT3duUHJvcCwgaXNBcnJheSwgaXNGdW5jdGlvbiwgaXNOdW1iZXIsIGlzU3RyaW5nLCB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgRGF0ZUFycmF5LCBEYXRlUGFyc2VUb2tlbkZuIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCB0b2tlbnM6IHtba2V5OiBzdHJpbmddOiBEYXRlUGFyc2VUb2tlbkZufSA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkUGFyc2VUb2tlbih0b2tlbjogc3RyaW5nIHwgc3RyaW5nW10sIGNhbGxiYWNrOiBEYXRlUGFyc2VUb2tlbkZuIHwgbnVtYmVyKSB7XG4gIGNvbnN0IF90b2tlbiA9IGlzU3RyaW5nKHRva2VuKSA/IFt0b2tlbl0gOiB0b2tlbjtcbiAgbGV0IGZ1bmMgPSBjYWxsYmFjaztcblxuICBpZiAoaXNOdW1iZXIoY2FsbGJhY2spKSB7XG4gICAgZnVuYyA9IGZ1bmN0aW9uIChpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgICAgYXJyYXlbY2FsbGJhY2tdID0gdG9JbnQoaW5wdXQpO1xuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH07XG4gIH1cblxuICBpZiAoaXNBcnJheTxzdHJpbmc+KF90b2tlbikgJiYgaXNGdW5jdGlvbihmdW5jKSkge1xuICAgIGxldCBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBfdG9rZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRva2Vuc1tfdG9rZW5baV1dID0gZnVuYztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFdlZWtQYXJzZVRva2VuKHRva2VuOiBzdHJpbmdbXSwgY2FsbGJhY2s6IERhdGVQYXJzZVRva2VuRm4pOiB2b2lkIHtcbiAgYWRkUGFyc2VUb2tlbih0b2tlbiwgZnVuY3Rpb24gKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcsIF90b2tlbjogc3RyaW5nKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIGNvbmZpZy5fdyA9IGNvbmZpZy5fdyB8fCB7fTtcblxuICAgIHJldHVybiBjYWxsYmFjayhpbnB1dCwgY29uZmlnLl93LCBjb25maWcsIF90b2tlbik7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUaW1lVG9BcnJheUZyb21Ub2tlbih0b2tlbjogc3RyaW5nLCBpbnB1dDogc3RyaW5nLCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBpZiAoaW5wdXQgIT0gbnVsbCAmJiBoYXNPd25Qcm9wKHRva2VucywgdG9rZW4pKSB7XG4gICAgdG9rZW5zW3Rva2VuXShpbnB1dCwgY29uZmlnLl9hLCBjb25maWcsIHRva2VuKTtcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59XG4iLCJjb25zdCBwcmlvcml0aWVzOiB7W2tleTogc3RyaW5nXTogbnVtYmVyfSA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkVW5pdFByaW9yaXR5KHVuaXQ6IHN0cmluZywgcHJpb3JpdHk6IG51bWJlcik6IHZvaWQge1xuICBwcmlvcml0aWVzW3VuaXRdID0gcHJpb3JpdHk7XG59XG5cbi8qXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJpb3JpdGl6ZWRVbml0cyh1bml0c09iaikge1xuICBjb25zdCB1bml0cyA9IFtdO1xuICBsZXQgdW5pdDtcbiAgZm9yICh1bml0IGluIHVuaXRzT2JqKSB7XG4gICAgaWYgKHVuaXRzT2JqLmhhc093blByb3BlcnR5KHVuaXQpKSB7XG4gICAgICB1bml0cy5wdXNoKHsgdW5pdCwgcHJpb3JpdHk6IHByaW9yaXRpZXNbdW5pdF0gfSk7XG4gICAgfVxuICB9XG4gIHVuaXRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHk7XG4gIH0pO1xuXG4gIHJldHVybiB1bml0cztcbn1cbiovXG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgZ2V0RGF0ZSB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIsIG1hdGNoMiB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBEQVRFIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBEYXRlQXJyYXksIERhdGVGb3JtYXR0ZXJPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignRCcsIFsnREQnLCAyLCBmYWxzZV0sICdEbycsXG4gIGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldERhdGUoZGF0ZSwgb3B0cy5pc1VUQykudG9TdHJpbmcoMTApO1xuICB9KTtcblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ2RhdGUnLCAnRCcpO1xuXG4vLyBQUklPUk9JVFlcbmFkZFVuaXRQcmlvcml0eSgnZGF0ZScsIDkpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ0QnLCBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignREQnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRSZWdleFRva2VuKCdEbycsIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gIHJldHVybiBsb2NhbGUuX2RheU9mTW9udGhPcmRpbmFsUGFyc2UgfHwgbG9jYWxlLl9vcmRpbmFsUGFyc2U7XG59KTtcblxuYWRkUGFyc2VUb2tlbihbJ0QnLCAnREQnXSwgREFURSk7XG5hZGRQYXJzZVRva2VuKCdEbycsXG4gIGZ1bmN0aW9uIChpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIGFycmF5W0RBVEVdID0gdG9JbnQoaW5wdXQubWF0Y2gobWF0Y2gxdG8yKVswXSk7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9KTtcbiIsImltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnLCBEYXRlUGFyc2luZ0ZsYWdzIH0gZnJvbSAnLi9wYXJzaW5nLnR5cGVzJztcblxuZnVuY3Rpb24gZGVmYXVsdFBhcnNpbmdGbGFncygpOiBEYXRlUGFyc2luZ0ZsYWdzIHtcbiAgLy8gV2UgbmVlZCB0byBkZWVwIGNsb25lIHRoaXMgb2JqZWN0LlxuICByZXR1cm4ge1xuICAgIGVtcHR5OiBmYWxzZSxcbiAgICB1bnVzZWRUb2tlbnM6IFtdLFxuICAgIHVudXNlZElucHV0OiBbXSxcbiAgICBvdmVyZmxvdzogLTIsXG4gICAgY2hhcnNMZWZ0T3ZlcjogMCxcbiAgICBudWxsSW5wdXQ6IGZhbHNlLFxuICAgIGludmFsaWRNb250aDogbnVsbCxcbiAgICBpbnZhbGlkRm9ybWF0OiBmYWxzZSxcbiAgICB1c2VySW52YWxpZGF0ZWQ6IGZhbHNlLFxuICAgIGlzbzogZmFsc2UsXG4gICAgcGFyc2VkRGF0ZVBhcnRzOiBbXSxcbiAgICBtZXJpZGllbTogbnVsbCxcbiAgICByZmMyODIyOiBmYWxzZSxcbiAgICB3ZWVrZGF5TWlzbWF0Y2g6IGZhbHNlXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nRmxhZ3Mge1xuICBpZiAoY29uZmlnLl9wZiA9PSBudWxsKSB7XG4gICAgY29uZmlnLl9wZiA9IGRlZmF1bHRQYXJzaW5nRmxhZ3MoKTtcbiAgfVxuXG4gIHJldHVybiBjb25maWcuX3BmO1xufVxuIiwiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGdldEZ1bGxZZWFyIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiwgbWF0Y2gxdG80LCBtYXRjaDF0bzYsIG1hdGNoMiwgbWF0Y2g0LCBtYXRjaDYsIG1hdGNoU2lnbmVkIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IFlFQVIgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuaW1wb3J0IHsgRGF0ZUZvcm1hdHRlck9wdGlvbnMgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8vIEZPUk1BVFRJTkdcblxuZnVuY3Rpb24gZ2V0WWVhcihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gIHJldHVybiBnZXRGdWxsWWVhcihkYXRlLCBvcHRzLmlzVVRDKS50b1N0cmluZygpO1xufVxuXG5hZGRGb3JtYXRUb2tlbignWScsIG51bGwsIG51bGwsXG4gIGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gIGNvbnN0IHkgPSBnZXRGdWxsWWVhcihkYXRlLCBvcHRzLmlzVVRDKTtcblxuICByZXR1cm4geSA8PSA5OTk5ID8geS50b1N0cmluZygxMCkgOiBgKyR7eX1gO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKG51bGwsIFsnWVknLCAyLCBmYWxzZV0sIG51bGwsXG4gIGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gIHJldHVybiAoZ2V0RnVsbFllYXIoZGF0ZSwgb3B0cy5pc1VUQykgJSAxMDApLnRvU3RyaW5nKDEwKTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbihudWxsLCBbJ1lZWVknLCA0LCBmYWxzZV0sIG51bGwsIGdldFllYXIpO1xuYWRkRm9ybWF0VG9rZW4obnVsbCwgWydZWVlZWScsIDUsIGZhbHNlXSwgbnVsbCwgZ2V0WWVhcik7XG5hZGRGb3JtYXRUb2tlbihudWxsLCBbJ1lZWVlZWScsIDYsIHRydWVdLCBudWxsLCBnZXRZZWFyKTtcblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ3llYXInLCAneScpO1xuXG4vLyBQUklPUklUSUVTXG5cbmFkZFVuaXRQcmlvcml0eSgneWVhcicsIDEpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ1knLCBtYXRjaFNpZ25lZCk7XG5hZGRSZWdleFRva2VuKCdZWScsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ1lZWVknLCBtYXRjaDF0bzQsIG1hdGNoNCk7XG5hZGRSZWdleFRva2VuKCdZWVlZWScsIG1hdGNoMXRvNiwgbWF0Y2g2KTtcbmFkZFJlZ2V4VG9rZW4oJ1lZWVlZWScsIG1hdGNoMXRvNiwgbWF0Y2g2KTtcblxuYWRkUGFyc2VUb2tlbihbJ1lZWVlZJywgJ1lZWVlZWSddLCBZRUFSKTtcbmFkZFBhcnNlVG9rZW4oJ1lZWVknLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgYXJyYXlbWUVBUl0gPSBpbnB1dC5sZW5ndGggPT09IDIgPyBwYXJzZVR3b0RpZ2l0WWVhcihpbnB1dCkgOiB0b0ludChpbnB1dCk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn0pO1xuYWRkUGFyc2VUb2tlbignWVknLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgYXJyYXlbWUVBUl0gPSBwYXJzZVR3b0RpZ2l0WWVhcihpbnB1dCk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn0pO1xuYWRkUGFyc2VUb2tlbignWScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICBhcnJheVtZRUFSXSA9IHBhcnNlSW50KGlucHV0LCAxMCk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUd29EaWdpdFllYXIoaW5wdXQ6IHN0cmluZyk6IG51bWJlciB7XG4gIHJldHVybiB0b0ludChpbnB1dCkgKyAodG9JbnQoaW5wdXQpID4gNjggPyAxOTAwIDogMjAwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlzSW5ZZWFyKHllYXI6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBpc0xlYXBZZWFyKHllYXIpID8gMzY2IDogMzY1O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNMZWFwWWVhcih5ZWFyOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuICh5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwKSB8fCB5ZWFyICUgNDAwID09PSAwO1xufVxuIiwiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGlzTGVhcFllYXIgfSBmcm9tICcuL3llYXInO1xuaW1wb3J0IHsgbW9kIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yLCBtYXRjaDIgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgTU9OVEggfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuaW1wb3J0IHsgZ2V0UGFyc2luZ0ZsYWdzIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmctZmxhZ3MnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBEYXRlQXJyYXksIERhdGVGb3JtYXR0ZXJPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vLyB0b2RvOiB0aGlzIGlzIGR1cGxpY2F0ZSwgc291cmNlIGluIGRhdGUtZ2V0dGVycy50c1xuZXhwb3J0IGZ1bmN0aW9uIGRheXNJbk1vbnRoKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcik6IG51bWJlciB7XG4gIGlmIChpc05hTih5ZWFyKSB8fCBpc05hTihtb250aCkpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIGNvbnN0IG1vZE1vbnRoID0gbW9kKG1vbnRoLCAxMik7XG4gIGNvbnN0IF95ZWFyID0geWVhciArIChtb250aCAtIG1vZE1vbnRoKSAvIDEyO1xuXG4gIHJldHVybiBtb2RNb250aCA9PT0gMVxuICAgID8gaXNMZWFwWWVhcihfeWVhcikgPyAyOSA6IDI4XG4gICAgOiAoMzEgLSBtb2RNb250aCAlIDcgJSAyKTtcbn1cblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignTScsIFsnTU0nLCAyLCBmYWxzZV0sICdNbycsXG4gIGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChnZXRNb250aChkYXRlLCBvcHRzLmlzVVRDKSArIDEpLnRvU3RyaW5nKDEwKTtcbiAgfSk7XG5cbmFkZEZvcm1hdFRva2VuKCdNTU0nLCBudWxsLCBudWxsLFxuICBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgIHJldHVybiBvcHRzLmxvY2FsZS5tb250aHNTaG9ydChkYXRlLCBvcHRzLmZvcm1hdCwgb3B0cy5pc1VUQyk7XG4gIH0pO1xuXG5hZGRGb3JtYXRUb2tlbignTU1NTScsIG51bGwsIG51bGwsXG4gIGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG9wdHMubG9jYWxlLm1vbnRocyhkYXRlLCBvcHRzLmZvcm1hdCwgb3B0cy5pc1VUQyk7XG4gIH0pO1xuXG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCdtb250aCcsICdNJyk7XG5cbi8vIFBSSU9SSVRZXG5cbmFkZFVuaXRQcmlvcml0eSgnbW9udGgnLCA4KTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdNJywgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ01NJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignTU1NJywgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgcmV0dXJuIGxvY2FsZS5tb250aHNTaG9ydFJlZ2V4KGlzU3RyaWN0KTtcbn0pO1xuYWRkUmVnZXhUb2tlbignTU1NTScsIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gIHJldHVybiBsb2NhbGUubW9udGhzUmVnZXgoaXNTdHJpY3QpO1xufSk7XG5cbmFkZFBhcnNlVG9rZW4oWydNJywgJ01NJ10sIGZ1bmN0aW9uIChpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBhcnJheVtNT05USF0gPSB0b0ludChpbnB1dCkgLSAxO1xuXG4gIHJldHVybiBjb25maWc7XG59KTtcblxuYWRkUGFyc2VUb2tlbihbJ01NTScsICdNTU1NJ10sXG4gIGZ1bmN0aW9uIChpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnLCB0b2tlbjogc3RyaW5nKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIGNvbnN0IG1vbnRoID0gY29uZmlnLl9sb2NhbGUubW9udGhzUGFyc2UoaW5wdXQsIHRva2VuLCBjb25maWcuX3N0cmljdCk7XG4gICAgLy8gaWYgd2UgZGlkbid0IGZpbmQgYSBtb250aCBuYW1lLCBtYXJrIHRoZSBkYXRlIGFzIGludmFsaWQuXG4gICAgaWYgKG1vbnRoICE9IG51bGwpIHtcbiAgICAgIGFycmF5W01PTlRIXSA9IG1vbnRoO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pbnZhbGlkTW9udGggPSAhIWlucHV0O1xuICAgIH1cblxuICAgIHJldHVybiBjb25maWc7XG4gIH0pO1xuXG4iLCJpbXBvcnQgeyBUaW1lVW5pdCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGRheXNJbk1vbnRoIH0gZnJvbSAnLi4vdW5pdHMvbW9udGgnO1xuaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICcuL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IGdldERhdGUsIGdldEZ1bGxZZWFyLCBnZXRNb250aCB9IGZyb20gJy4vZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IGlzTGVhcFllYXIgfSBmcm9tICcuLi91bml0cy95ZWFyJztcbmltcG9ydCB7IGNyZWF0ZURhdGUgfSBmcm9tICcuLi9jcmVhdGUvZGF0ZS1mcm9tLWFycmF5JztcblxuY29uc3QgZGVmYXVsdFRpbWVVbml0OiBUaW1lVW5pdCA9IHtcbiAgeWVhcjogMCxcbiAgbW9udGg6IDAsXG4gIGRheTogMCxcbiAgaG91cjogMCxcbiAgbWludXRlOiAwLFxuICBzZWNvbmRzOiAwXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2hpZnREYXRlKGRhdGU6IERhdGUsIHVuaXQ6IFRpbWVVbml0KTogRGF0ZSB7XG4gIGNvbnN0IF91bml0ID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFRpbWVVbml0LCB1bml0KTtcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKSArIChfdW5pdC55ZWFyIHx8IDApO1xuICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIChfdW5pdC5tb250aCB8fCAwKTtcbiAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpICsgKF91bml0LmRheSB8fCAwKTtcbiAgaWYgKF91bml0Lm1vbnRoICYmICFfdW5pdC5kYXkpIHtcbiAgICBkYXkgPSBNYXRoLm1pbihkYXksIGRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSk7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlRGF0ZShcbiAgICB5ZWFyLFxuICAgIG1vbnRoLFxuICAgIGRheSxcbiAgICBkYXRlLmdldEhvdXJzKCkgKyAoX3VuaXQuaG91ciB8fCAwKSxcbiAgICBkYXRlLmdldE1pbnV0ZXMoKSArIChfdW5pdC5taW51dGUgfHwgMCksXG4gICAgZGF0ZS5nZXRTZWNvbmRzKCkgKyAoX3VuaXQuc2Vjb25kcyB8fCAwKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RnVsbERhdGUoZGF0ZTogRGF0ZSwgdW5pdDogVGltZVVuaXQpOiBEYXRlIHtcbiAgcmV0dXJuIGNyZWF0ZURhdGUoXG4gICAgZ2V0TnVtKGRhdGUuZ2V0RnVsbFllYXIoKSwgdW5pdC55ZWFyKSxcbiAgICBnZXROdW0oZGF0ZS5nZXRNb250aCgpLCB1bml0Lm1vbnRoKSxcbiAgICBnZXROdW0oZGF0ZS5nZXREYXRlKCksIHVuaXQuZGF5KSxcbiAgICBnZXROdW0oZGF0ZS5nZXRIb3VycygpLCB1bml0LmhvdXIpLFxuICAgIGdldE51bShkYXRlLmdldE1pbnV0ZXMoKSwgdW5pdC5taW51dGUpLFxuICAgIGdldE51bShkYXRlLmdldFNlY29uZHMoKSwgdW5pdC5zZWNvbmRzKSxcbiAgICBnZXROdW0oZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgdW5pdC5taWxsaXNlY29uZHMpXG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldE51bShkZWY6IG51bWJlciwgbnVtPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIGlzTnVtYmVyKG51bSkgPyBudW0gOiBkZWY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRGdWxsWWVhcihkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgY29uc3QgX21vbnRoID0gZ2V0TW9udGgoZGF0ZSwgaXNVVEMpO1xuICBjb25zdCBfZGF0ZSA9IGdldERhdGUoZGF0ZSwgaXNVVEMpO1xuICBjb25zdCBfeWVhciA9IGdldEZ1bGxZZWFyKGRhdGUsIGlzVVRDKTtcbiAgaWYgKGlzTGVhcFllYXIoX3llYXIpICYmIF9tb250aCA9PT0gMSAmJiBfZGF0ZSA9PT0gMjkpIHtcbiAgICBjb25zdCBfZGF5c0luTW9udGggPSBkYXlzSW5Nb250aCh2YWx1ZSwgX21vbnRoKTtcbiAgICBpc1VUQyA/IGRhdGUuc2V0VVRDRnVsbFllYXIodmFsdWUsIF9tb250aCwgX2RheXNJbk1vbnRoKSA6IGRhdGUuc2V0RnVsbFllYXIodmFsdWUsIF9tb250aCwgX2RheXNJbk1vbnRoKTtcbiAgfVxuXG4gIGlzVVRDID8gZGF0ZS5zZXRVVENGdWxsWWVhcih2YWx1ZSkgOiBkYXRlLnNldEZ1bGxZZWFyKHZhbHVlKTtcblxuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE1vbnRoKGRhdGU6IERhdGUsIHZhbHVlOiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBjb25zdCBkYXlPZk1vbnRoID0gTWF0aC5taW4oZ2V0RGF0ZShkYXRlKSwgZGF5c0luTW9udGgoZ2V0RnVsbFllYXIoZGF0ZSksIHZhbHVlKSk7XG4gIGlzVVRDID8gZGF0ZS5zZXRVVENNb250aCh2YWx1ZSwgZGF5T2ZNb250aCkgOiBkYXRlLnNldE1vbnRoKHZhbHVlLCBkYXlPZk1vbnRoKTtcblxuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERheShkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgaXNVVEMgPyBkYXRlLnNldFVUQ0RhdGUodmFsdWUpIDogZGF0ZS5zZXREYXRlKHZhbHVlKTtcblxuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEhvdXJzKGRhdGU6IERhdGUsIHZhbHVlOiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBpc1VUQyA/IGRhdGUuc2V0VVRDSG91cnModmFsdWUpIDogZGF0ZS5zZXRIb3Vycyh2YWx1ZSk7XG5cbiAgcmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRNaW51dGVzKGRhdGU6IERhdGUsIHZhbHVlOiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBpc1VUQyA/IGRhdGUuc2V0VVRDTWludXRlcyh2YWx1ZSkgOiBkYXRlLnNldE1pbnV0ZXModmFsdWUpO1xuXG4gIHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U2Vjb25kcyhkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgaXNVVEMgPyBkYXRlLnNldFVUQ1NlY29uZHModmFsdWUpIDogZGF0ZS5zZXRTZWNvbmRzKHZhbHVlKTtcblxuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE1pbGxpc2Vjb25kcyhkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgaXNVVEMgPyBkYXRlLnNldFVUQ01pbGxpc2Vjb25kcyh2YWx1ZSkgOiBkYXRlLnNldE1pbGxpc2Vjb25kcyh2YWx1ZSk7XG5cbiAgcmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREYXRlKGRhdGU6IERhdGUsIHZhbHVlOiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBpc1VUQyA/IGRhdGUuc2V0VVRDRGF0ZSh2YWx1ZSkgOiBkYXRlLnNldERhdGUodmFsdWUpO1xuXG4gIHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VGltZShkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyKTogRGF0ZSB7XG4gIGRhdGUuc2V0VGltZSh2YWx1ZSk7XG5cbiAgcmV0dXJuIGRhdGU7XG59XG4iLCIvLyBmYXN0ZXN0IHdheSB0byBjbG9uZSBkYXRlXG4vLyBodHRwczovL2pzcGVyZi5jb20vY2xvbmUtZGF0ZS1vYmplY3QyXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVEYXRlKGRhdGU6IERhdGUpOiBEYXRlIHtcbiAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOiBzd2l0Y2gtZGVmYXVsdFxuaW1wb3J0IHsgVGltZVVuaXQsIFVuaXRPZlRpbWUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge1xuICBzZXREYXRlLCBzZXRGdWxsRGF0ZSwgc2V0SG91cnMsIHNldE1pbGxpc2Vjb25kcywgc2V0TWludXRlcywgc2V0TW9udGgsIHNldFNlY29uZHMsXG4gIHNoaWZ0RGF0ZVxufSBmcm9tICcuL2RhdGUtc2V0dGVycyc7XG5pbXBvcnQgeyBjbG9uZURhdGUgfSBmcm9tICcuLi9jcmVhdGUvY2xvbmUnO1xuaW1wb3J0IHsgc2V0SVNPRGF5T2ZXZWVrLCBzZXRMb2NhbGVEYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XG5pbXBvcnQgeyBnZXRNb250aCB9IGZyb20gJy4vZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IGFkZCwgc3VidHJhY3QgfSBmcm9tICcuLi9tb21lbnQvYWRkLXN1YnRyYWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2YoZGF0ZTogRGF0ZSwgdW5pdDogVW5pdE9mVGltZSwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XG4gIGNvbnN0IF9kYXRlID0gY2xvbmVEYXRlKGRhdGUpO1xuICAvLyB0aGUgZm9sbG93aW5nIHN3aXRjaCBpbnRlbnRpb25hbGx5IG9taXRzIGJyZWFrIGtleXdvcmRzXG4gIC8vIHRvIHV0aWxpemUgZmFsbGluZyB0aHJvdWdoIHRoZSBjYXNlcy5cbiAgc3dpdGNoICh1bml0KSB7XG4gICAgY2FzZSAneWVhcic6XG4gICAgICBzZXRNb250aChfZGF0ZSwgMCwgaXNVVEMpO1xuICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICBjYXNlICdxdWFydGVyJzpcbiAgICBjYXNlICdtb250aCc6XG4gICAgICBzZXREYXRlKF9kYXRlLCAxLCBpc1VUQyk7XG4gICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgIGNhc2UgJ3dlZWsnOlxuICAgIGNhc2UgJ2lzb1dlZWsnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZGF0ZSc6XG4gICAgICBzZXRIb3VycyhfZGF0ZSwgMCwgaXNVVEMpO1xuICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICBjYXNlICdob3Vycyc6XG4gICAgICBzZXRNaW51dGVzKF9kYXRlLCAwLCBpc1VUQyk7XG4gICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgICAgc2V0U2Vjb25kcyhfZGF0ZSwgMCwgaXNVVEMpO1xuICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICAgIHNldE1pbGxpc2Vjb25kcyhfZGF0ZSwgMCwgaXNVVEMpO1xuICB9XG5cbiAgLy8gd2Vla3MgYXJlIGEgc3BlY2lhbCBjYXNlXG4gIGlmICh1bml0ID09PSAnd2VlaycpIHtcbiAgICBzZXRMb2NhbGVEYXlPZldlZWsoX2RhdGUsIDAsIHtpc1VUQ30pO1xuICB9XG4gIGlmICh1bml0ID09PSAnaXNvV2VlaycpIHtcbiAgICBzZXRJU09EYXlPZldlZWsoX2RhdGUsIDEpO1xuICB9XG5cbiAgLy8gcXVhcnRlcnMgYXJlIGFsc28gc3BlY2lhbFxuICBpZiAodW5pdCA9PT0gJ3F1YXJ0ZXInKSB7XG4gICAgc2V0TW9udGgoX2RhdGUsIE1hdGguZmxvb3IoZ2V0TW9udGgoX2RhdGUsIGlzVVRDKSAvIDMpICogMywgaXNVVEMpO1xuICB9XG5cbiAgcmV0dXJuIF9kYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5kT2YoZGF0ZTogRGF0ZSwgdW5pdDogVW5pdE9mVGltZSwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XG4gIGxldCBfdW5pdCA9IHVuaXQ7XG4gIC8vICdkYXRlJyBpcyBhbiBhbGlhcyBmb3IgJ2RheScsIHNvIGl0IHNob3VsZCBiZSBjb25zaWRlcmVkIGFzIHN1Y2guXG4gIGlmIChfdW5pdCA9PT0gJ2RhdGUnKSB7XG4gICAgX3VuaXQgPSAnZGF5JztcbiAgfVxuXG4gIGNvbnN0IHN0YXJ0ID0gc3RhcnRPZihkYXRlLCBfdW5pdCwgaXNVVEMpO1xuICBjb25zdCBfc3RlcCA9IGFkZChzdGFydCwgMSwgX3VuaXQgPT09ICdpc29XZWVrJyA/ICd3ZWVrJyA6IF91bml0LCBpc1VUQyk7XG4gIGNvbnN0IHJlcyA9IHN1YnRyYWN0KF9zdGVwLCAxLCAnbWlsbGlzZWNvbmRzJywgaXNVVEMpO1xuXG4gIHJldHVybiByZXM7XG59XG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgc3RhcnRPZiB9IGZyb20gJy4uL3V0aWxzL3N0YXJ0LWVuZC1vZic7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzMsIG1hdGNoMyB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IERhdGVBcnJheSwgRGF0ZUZvcm1hdHRlck9wdGlvbnMgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSAnLi4vbW9tZW50L2FkZC1zdWJ0cmFjdCc7XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ0RERCcsIFsnRERERCcsIDMsIGZhbHNlXSwgJ0RERG8nLFxuICBmdW5jdGlvbiAoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldERheU9mWWVhcihkYXRlKS50b1N0cmluZygxMCk7XG4gIH0pO1xuXG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCdkYXlPZlllYXInLCAnREREJyk7XG5cbi8vIFBSSU9SSVRZXG5cbmFkZFVuaXRQcmlvcml0eSgnZGF5T2ZZZWFyJywgNCk7XG5cbmFkZFJlZ2V4VG9rZW4oJ0RERCcsIG1hdGNoMXRvMyk7XG5hZGRSZWdleFRva2VuKCdEREREJywgbWF0Y2gzKTtcbmFkZFBhcnNlVG9rZW4oWydEREQnLCAnRERERCddLFxuICBmdW5jdGlvbiAoaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICBjb25maWcuX2RheU9mWWVhciA9IHRvSW50KGlucHV0KTtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH0pO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5T2ZZZWFyKGRhdGU6IERhdGUsIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB7XG4gIGNvbnN0IGRhdGUxID0gK3N0YXJ0T2YoZGF0ZSwgJ2RheScsIGlzVVRDKTtcbiAgY29uc3QgZGF0ZTIgPSArc3RhcnRPZihkYXRlLCAneWVhcicsIGlzVVRDKTtcbiAgY29uc3Qgc29tZURhdGUgPSBkYXRlMSAtIGRhdGUyO1xuICBjb25zdCBvbmVEYXkgPSAxMDAwICogNjAgKiA2MCAqIDI0O1xuXG4gIHJldHVybiBNYXRoLnJvdW5kKHNvbWVEYXRlIC8gb25lRGF5KSArIDE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREYXlPZlllYXIoZGF0ZTogRGF0ZSwgaW5wdXQ6IG51bWJlcik6IERhdGUge1xuICBjb25zdCBkYXlPZlllYXIgPSBnZXREYXlPZlllYXIoZGF0ZSk7XG5cbiAgcmV0dXJuIGFkZChkYXRlLCAoaW5wdXQgLSBkYXlPZlllYXIpLCAnZGF5Jyk7XG59XG4iLCIvKipcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0geWVhclxuICogQHBhcmFtIHtudW1iZXJ9IGRvdyAtIHN0YXJ0LW9mLWZpcnN0LXdlZWtcbiAqIEBwYXJhbSB7bnVtYmVyfSBkb3kgLSBzdGFydC1vZi15ZWFyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5pbXBvcnQgeyBjcmVhdGVVVENEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2RhdGUtZnJvbS1hcnJheSc7XG5pbXBvcnQgeyBkYXlzSW5ZZWFyIH0gZnJvbSAnLi95ZWFyJztcbmltcG9ydCB7IGdldERheU9mWWVhciB9IGZyb20gJy4vZGF5LW9mLXllYXInO1xuaW1wb3J0IHsgZ2V0RnVsbFllYXIgfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuXG5mdW5jdGlvbiBmaXJzdFdlZWtPZmZzZXQoeWVhcjogbnVtYmVyLCBkb3c6IG51bWJlciwgZG95OiBudW1iZXIpOiBudW1iZXIge1xuICAvLyBmaXJzdC13ZWVrIGRheSAtLSB3aGljaCBqYW51YXJ5IGlzIGFsd2F5cyBpbiB0aGUgZmlyc3Qgd2VlayAoNCBmb3IgaXNvLCAxIGZvciBvdGhlcilcbiAgY29uc3QgZndkID0gZG93IC0gZG95ICsgNztcbiAgLy8gZmlyc3Qtd2VlayBkYXkgbG9jYWwgd2Vla2RheSAtLSB3aGljaCBsb2NhbCB3ZWVrZGF5IGlzIGZ3ZFxuICBjb25zdCBmd2RsdyA9IChjcmVhdGVVVENEYXRlKHllYXIsIDAsIGZ3ZCkuZ2V0VVRDRGF5KCkgLSBkb3cgKyA3KSAlIDc7XG5cbiAgcmV0dXJuIC1md2RsdyArIGZ3ZCAtIDE7XG59XG5cbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGUjQ2FsY3VsYXRpbmdfYV9kYXRlX2dpdmVuX3RoZV95ZWFyLjJDX3dlZWtfbnVtYmVyX2FuZF93ZWVrZGF5XG5leHBvcnQgZnVuY3Rpb24gZGF5T2ZZZWFyRnJvbVdlZWtzKFxuICB5ZWFyOiBudW1iZXIsXG4gIHdlZWs6IG51bWJlcixcbiAgd2Vla2RheTogbnVtYmVyLFxuICBkb3c6IG51bWJlcixcbiAgZG95OiBudW1iZXJcbik6IHsgeWVhcjogbnVtYmVyOyBkYXlPZlllYXI6IG51bWJlciB9IHtcbiAgY29uc3QgbG9jYWxXZWVrZGF5ID0gKDcgKyB3ZWVrZGF5IC0gZG93KSAlIDc7XG4gIGNvbnN0IHdlZWtPZmZzZXQgPSBmaXJzdFdlZWtPZmZzZXQoeWVhciwgZG93LCBkb3kpO1xuICBjb25zdCBkYXlPZlllYXIgPSAxICsgNyAqICh3ZWVrIC0gMSkgKyBsb2NhbFdlZWtkYXkgKyB3ZWVrT2Zmc2V0O1xuICBsZXQgcmVzWWVhcjogbnVtYmVyO1xuICBsZXQgcmVzRGF5T2ZZZWFyOiBudW1iZXI7XG5cbiAgaWYgKGRheU9mWWVhciA8PSAwKSB7XG4gICAgcmVzWWVhciA9IHllYXIgLSAxO1xuICAgIHJlc0RheU9mWWVhciA9IGRheXNJblllYXIocmVzWWVhcikgKyBkYXlPZlllYXI7XG4gIH0gZWxzZSBpZiAoZGF5T2ZZZWFyID4gZGF5c0luWWVhcih5ZWFyKSkge1xuICAgIHJlc1llYXIgPSB5ZWFyICsgMTtcbiAgICByZXNEYXlPZlllYXIgPSBkYXlPZlllYXIgLSBkYXlzSW5ZZWFyKHllYXIpO1xuICB9IGVsc2Uge1xuICAgIHJlc1llYXIgPSB5ZWFyO1xuICAgIHJlc0RheU9mWWVhciA9IGRheU9mWWVhcjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeWVhcjogcmVzWWVhcixcbiAgICBkYXlPZlllYXI6IHJlc0RheU9mWWVhclxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2Vla09mWWVhcihkYXRlOiBEYXRlLCBkb3c6IG51bWJlciwgZG95OiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IHsgd2VlazogbnVtYmVyOyB5ZWFyOiBudW1iZXIgfSB7XG4gIGNvbnN0IHdlZWtPZmZzZXQgPSBmaXJzdFdlZWtPZmZzZXQoZ2V0RnVsbFllYXIoZGF0ZSwgaXNVVEMpLCBkb3csIGRveSk7XG4gIGNvbnN0IHdlZWsgPSBNYXRoLmZsb29yKChnZXREYXlPZlllYXIoZGF0ZSwgaXNVVEMpIC0gd2Vla09mZnNldCAtIDEpIC8gNykgKyAxO1xuICBsZXQgcmVzV2VlazogbnVtYmVyO1xuICBsZXQgcmVzWWVhcjogbnVtYmVyO1xuXG4gIGlmICh3ZWVrIDwgMSkge1xuICAgIHJlc1llYXIgPSBnZXRGdWxsWWVhcihkYXRlLCBpc1VUQykgLSAxO1xuICAgIHJlc1dlZWsgPSB3ZWVrICsgd2Vla3NJblllYXIocmVzWWVhciwgZG93LCBkb3kpO1xuICB9IGVsc2UgaWYgKHdlZWsgPiB3ZWVrc0luWWVhcihnZXRGdWxsWWVhcihkYXRlLCBpc1VUQyksIGRvdywgZG95KSkge1xuICAgIHJlc1dlZWsgPSB3ZWVrIC0gd2Vla3NJblllYXIoZ2V0RnVsbFllYXIoZGF0ZSwgaXNVVEMpLCBkb3csIGRveSk7XG4gICAgcmVzWWVhciA9IGdldEZ1bGxZZWFyKGRhdGUsIGlzVVRDKSArIDE7XG4gIH0gZWxzZSB7XG4gICAgcmVzWWVhciA9IGdldEZ1bGxZZWFyKGRhdGUsIGlzVVRDKTtcbiAgICByZXNXZWVrID0gd2VlaztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2VlazogcmVzV2VlayxcbiAgICB5ZWFyOiByZXNZZWFyXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWVrc0luWWVhcih5ZWFyOiBudW1iZXIsIGRvdzogbnVtYmVyLCBkb3k6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IHdlZWtPZmZzZXQgPSBmaXJzdFdlZWtPZmZzZXQoeWVhciwgZG93LCBkb3kpO1xuICBjb25zdCB3ZWVrT2Zmc2V0TmV4dCA9IGZpcnN0V2Vla09mZnNldCh5ZWFyICsgMSwgZG93LCBkb3kpO1xuXG4gIHJldHVybiAoZGF5c0luWWVhcih5ZWFyKSAtIHdlZWtPZmZzZXQgKyB3ZWVrT2Zmc2V0TmV4dCkgLyA3O1xufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bWF4LWZpbGUtbGluZS1jb3VudCBtYXgtbGluZS1sZW5ndGggY3ljbG9tYXRpYy1jb21wbGV4aXR5XG5cbmltcG9ydCB7IHdlZWtPZlllYXIgfSBmcm9tICcuLi91bml0cy93ZWVrLWNhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB7IGhhc093blByb3AsIGlzQXJyYXksIGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBnZXREYXksIGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IG1hdGNoV29yZCwgcmVnZXhFc2NhcGUgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBzZXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYWxlT3B0aW9uc0Zvcm1hdCB7XG4gIGZvcm1hdDogc3RyaW5nW107XG4gIHN0YW5kYWxvbmU6IHN0cmluZ1tdO1xuICBpc0Zvcm1hdD86IFJlZ0V4cDtcbn1cblxuZXhwb3J0IHR5cGUgTG9jYWxlT3B0aW9ucyA9IHN0cmluZ1tdIHwgTG9jYWxlT3B0aW9uc0Zvcm1hdDtcblxuY29uc3QgTU9OVEhTX0lOX0ZPUk1BVCA9IC9EW29EXT8oXFxbW15cXFtcXF1dKlxcXXxcXHMpK01NTU0/LztcbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlTW9udGhzID0gJ0phbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXInLnNwbGl0KFxuICAnXydcbik7XG5leHBvcnQgY29uc3QgZGVmYXVsdExvY2FsZU1vbnRoc1Nob3J0ID0gJ0phbl9GZWJfTWFyX0Fwcl9NYXlfSnVuX0p1bF9BdWdfU2VwX09jdF9Ob3ZfRGVjJy5zcGxpdChcbiAgJ18nXG4pO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRMb2NhbGVXZWVrZGF5cyA9ICdTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheScuc3BsaXQoXG4gICdfJ1xuKTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydCA9ICdTdW5fTW9uX1R1ZV9XZWRfVGh1X0ZyaV9TYXQnLnNwbGl0KFxuICAnXydcbik7XG5leHBvcnQgY29uc3QgZGVmYXVsdExvY2FsZVdlZWtkYXlzTWluID0gJ1N1X01vX1R1X1dlX1RoX0ZyX1NhJy5zcGxpdCgnXycpO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRMb25nRGF0ZUZvcm1hdDogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB9ID0ge1xuICBMVFM6ICdoOm1tOnNzIEEnLFxuICBMVDogJ2g6bW0gQScsXG4gIEw6ICdNTS9ERC9ZWVlZJyxcbiAgTEw6ICdNTU1NIEQsIFlZWVknLFxuICBMTEw6ICdNTU1NIEQsIFlZWVkgaDptbSBBJyxcbiAgTExMTDogJ2RkZGQsIE1NTU0gRCwgWVlZWSBoOm1tIEEnXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdE9yZGluYWwgPSAnJWQnO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHREYXlPZk1vbnRoT3JkaW5hbFBhcnNlID0gL1xcZHsxLDJ9LztcblxuY29uc3QgZGVmYXVsdE1vbnRoc1Nob3J0UmVnZXggPSBtYXRjaFdvcmQ7XG5jb25zdCBkZWZhdWx0TW9udGhzUmVnZXggPSBtYXRjaFdvcmQ7XG5cbmV4cG9ydCB0eXBlIE9yZGluYWxEYXRlRm4gPSAobnVtOiBudW1iZXIsIHRva2VuPzogc3RyaW5nKSA9PiBzdHJpbmc7XG5leHBvcnQgdHlwZSBQbHVyYWxpemVEYXRlRm4gPSAobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Pzogc3RyaW5nLCBpc0Z1dHVyZT86IGJvb2xlYW4pID0+IHN0cmluZztcblxuZXhwb3J0IGludGVyZmFjZSBMb2NhbGVEYXRhIHtcbiAgYWJicj86IHN0cmluZztcbiAgcGFyZW50TG9jYWxlPzogc3RyaW5nO1xuXG4gIG1vbnRocz86IExvY2FsZU9wdGlvbnMgfCAoKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pID0+IHN0cmluZyB8IHN0cmluZ1tdKTtcbiAgbW9udGhzU2hvcnQ/OiBMb2NhbGVPcHRpb25zIHwgKChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKSA9PiBzdHJpbmcgfCBzdHJpbmdbXSk7XG4gIG1vbnRoc1BhcnNlRXhhY3Q/OiBib29sZWFuO1xuXG4gIHdlZWtkYXlzPzogTG9jYWxlT3B0aW9ucyB8ICgoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbikgPT4gc3RyaW5nIHwgc3RyaW5nW10pO1xuICB3ZWVrZGF5c1Nob3J0Pzogc3RyaW5nW10gfCAoKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pID0+IHN0cmluZyB8IHN0cmluZ1tdKTtcbiAgd2Vla2RheXNNaW4/OiBzdHJpbmdbXSB8ICgoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbikgPT4gc3RyaW5nIHwgc3RyaW5nW10pO1xuICB3ZWVrZGF5c1BhcnNlRXhhY3Q/OiBib29sZWFuO1xuXG4gIGxvbmdEYXRlRm9ybWF0PzogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB9O1xuICBjYWxlbmRhcj86IHtcbiAgICBba2V5OiBzdHJpbmddOiAoc3RyaW5nXG4gICAgICB8ICgoZGF0ZTogRGF0ZSwgbm93PzogRGF0ZSkgPT4gc3RyaW5nKVxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICB8ICgoZGF5T2ZXZWVrOiBudW1iZXIsIGlzTmV4dFdlZWs6IGJvb2xlYW4pID0+IHN0cmluZykpXG4gIH07XG4gIHJlbGF0aXZlVGltZT86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgUGx1cmFsaXplRGF0ZUZuIH07XG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U/OiBSZWdFeHA7XG4gIG9yZGluYWw/OiBzdHJpbmcgfCBPcmRpbmFsRGF0ZUZuO1xuXG4gIHdlZWs/OiB7IGRvdz86IG51bWJlcjsgZG95PzogbnVtYmVyIH07XG5cbiAgaW52YWxpZERhdGU/OiBzdHJpbmc7XG5cbiAgbW9udGhzUmVnZXg/OiBSZWdFeHA7XG4gIG1vbnRoc1BhcnNlPzogUmVnRXhwW107XG4gIG1vbnRoc1Nob3J0UmVnZXg/OiBSZWdFeHA7XG4gIG1vbnRoc1N0cmljdFJlZ2V4PzogUmVnRXhwO1xuICBtb250aHNTaG9ydFN0cmljdFJlZ2V4PzogUmVnRXhwO1xuICBsb25nTW9udGhzUGFyc2U/OiBSZWdFeHBbXTtcbiAgc2hvcnRNb250aHNQYXJzZT86IFJlZ0V4cFtdO1xuXG4gIG1lcmlkaWVtUGFyc2U/OiBSZWdFeHA7XG5cbiAgbWVyaWRpZW1Ib3VyPyhob3VyOiBudW1iZXIsIG1lcmlkaWVtOiBzdHJpbmcpOiBudW1iZXI7XG5cbiAgcHJlcGFyc2U/KHN0cjogc3RyaW5nKTogc3RyaW5nO1xuXG4gIHBvc3Rmb3JtYXQ/KHN0cjogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nO1xuXG4gIG1lcmlkaWVtPyhob3VyOiBudW1iZXIsIG1pbnV0ZT86IG51bWJlciwgaXNMb3dlcj86IGJvb2xlYW4pOiBzdHJpbmc7XG5cbiAgaXNQTT8oaW5wdXQ6IHN0cmluZyk6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBMb2NhbGUge1xuICBwYXJlbnRMb2NhbGU/OiBMb2NhbGU7XG4gIF9hYmJyOiBzdHJpbmc7XG4gIF9jb25maWc6IExvY2FsZURhdGE7XG4gIG1lcmlkaWVtSG91cjogKGhvdXI6IG51bWJlciwgbWVyaWRpZW06IHN0cmluZykgPT4gbnVtYmVyO1xuXG4gIF9pbnZhbGlkRGF0ZTogc3RyaW5nO1xuICBfd2VlazogeyBkb3c6IG51bWJlcjsgZG95OiBudW1iZXIgfTtcbiAgX2RheU9mTW9udGhPcmRpbmFsUGFyc2U6IFJlZ0V4cDtcbiAgX29yZGluYWxQYXJzZTogUmVnRXhwO1xuICBfbWVyaWRpZW1QYXJzZTogUmVnRXhwO1xuXG4gIHByaXZhdGUgX2NhbGVuZGFyOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBwcml2YXRlIF9yZWxhdGl2ZVRpbWU6IHsgZnV0dXJlOiBzdHJpbmc7IHBhc3Q6IHN0cmluZyB9O1xuICBwcml2YXRlIF9tb250aHM6IExvY2FsZU9wdGlvbnM7XG4gIHByaXZhdGUgX21vbnRoc1Nob3J0OiBMb2NhbGVPcHRpb25zO1xuICBwcml2YXRlIF9tb250aHNSZWdleDogUmVnRXhwO1xuICBwcml2YXRlIF9tb250aHNTaG9ydFJlZ2V4OiBSZWdFeHA7XG4gIHByaXZhdGUgX21vbnRoc1N0cmljdFJlZ2V4OiBSZWdFeHA7XG4gIHByaXZhdGUgX21vbnRoc1Nob3J0U3RyaWN0UmVnZXg6IFJlZ0V4cDtcbiAgcHJpdmF0ZSBfbW9udGhzUGFyc2U6IFJlZ0V4cFtdO1xuICBwcml2YXRlIF9sb25nTW9udGhzUGFyc2U6IHN0cmluZ1tdIHwgUmVnRXhwW107XG4gIHByaXZhdGUgX3Nob3J0TW9udGhzUGFyc2U6IHN0cmluZ1tdIHwgUmVnRXhwW107XG4gIHByaXZhdGUgX21vbnRoc1BhcnNlRXhhY3Q6IFJlZ0V4cDtcbiAgcHJpdmF0ZSBfd2Vla2RheXNQYXJzZUV4YWN0OiBib29sZWFuO1xuICBwcml2YXRlIF93ZWVrZGF5c1JlZ2V4OiBSZWdFeHA7XG4gIHByaXZhdGUgX3dlZWtkYXlzU2hvcnRSZWdleDogUmVnRXhwO1xuICBwcml2YXRlIF93ZWVrZGF5c01pblJlZ2V4OiBSZWdFeHA7XG5cbiAgcHJpdmF0ZSBfd2Vla2RheXNTdHJpY3RSZWdleDogUmVnRXhwO1xuICBwcml2YXRlIF93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXg6IFJlZ0V4cDtcbiAgcHJpdmF0ZSBfd2Vla2RheXNNaW5TdHJpY3RSZWdleDogUmVnRXhwO1xuXG4gIHByaXZhdGUgX3dlZWtkYXlzOiBMb2NhbGVPcHRpb25zO1xuICBwcml2YXRlIF93ZWVrZGF5c1Nob3J0OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfd2Vla2RheXNNaW46IHN0cmluZ1tdO1xuICBwcml2YXRlIF93ZWVrZGF5c1BhcnNlOiBzdHJpbmdbXSB8IFJlZ0V4cFtdO1xuICBwcml2YXRlIF9taW5XZWVrZGF5c1BhcnNlOiBzdHJpbmdbXSB8IFJlZ0V4cFtdO1xuICBwcml2YXRlIF9zaG9ydFdlZWtkYXlzUGFyc2U6IHN0cmluZ1tdIHwgUmVnRXhwW107XG4gIHByaXZhdGUgX2Z1bGxXZWVrZGF5c1BhcnNlOiBSZWdFeHBbXTtcbiAgcHJpdmF0ZSBfbG9uZ0RhdGVGb3JtYXQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG5cbiAgcHJpdmF0ZSBfb3JkaW5hbDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogTG9jYWxlRGF0YSkge1xuICAgIGlmICghIWNvbmZpZykge1xuICAgICAgdGhpcy5zZXQoY29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBzZXQoY29uZmlnOiBMb2NhbGVEYXRhKTogdm9pZCB7XG4gICAgbGV0IGNvbmZLZXk7XG4gICAgZm9yIChjb25mS2V5IGluIGNvbmZpZykge1xuICAgICAgaWYgKCFjb25maWcuaGFzT3duUHJvcGVydHkoY29uZktleSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjb25zdCBwcm9wID0gY29uZmlnW2NvbmZLZXkgYXMga2V5b2YgTG9jYWxlRGF0YV07XG4gICAgICBjb25zdCBrZXkgPSAoaXNGdW5jdGlvbihwcm9wKSA/IGNvbmZLZXkgOiBgXyR7Y29uZktleX1gKSBhcyBrZXlvZiBMb2NhbGU7XG5cbiAgICAgIHRoaXNba2V5XSA9IHByb3AgYXMgYW55O1xuICAgIH1cblxuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIGNhbGVuZGFyKGtleTogc3RyaW5nLCBkYXRlOiBEYXRlLCBub3c6IERhdGUpOiBzdHJpbmcge1xuICAgIGNvbnN0IG91dHB1dCA9IHRoaXMuX2NhbGVuZGFyW2tleV0gfHwgdGhpcy5fY2FsZW5kYXIuc2FtZUVsc2U7XG5cbiAgICByZXR1cm4gaXNGdW5jdGlvbihvdXRwdXQpID8gb3V0cHV0LmNhbGwobnVsbCwgZGF0ZSwgbm93KSA6IG91dHB1dDtcbiAgfVxuXG4gIGxvbmdEYXRlRm9ybWF0KGtleTogc3RyaW5nKSB7XG4gICAgY29uc3QgZm9ybWF0ID0gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XTtcbiAgICBjb25zdCBmb3JtYXRVcHBlciA9IHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleS50b1VwcGVyQ2FzZSgpXTtcblxuICAgIGlmIChmb3JtYXQgfHwgIWZvcm1hdFVwcGVyKSB7XG4gICAgICByZXR1cm4gZm9ybWF0O1xuICAgIH1cblxuICAgIHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV0gPSBmb3JtYXRVcHBlci5yZXBsYWNlKC9NTU1NfE1NfEREfGRkZGQvZywgZnVuY3Rpb24gKHZhbDogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gdmFsLnNsaWNlKDEpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV07XG4gIH1cblxuICBnZXQgaW52YWxpZERhdGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faW52YWxpZERhdGU7XG4gIH1cblxuICBzZXQgaW52YWxpZERhdGUodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnZhbGlkRGF0ZSA9IHZhbDtcbiAgfVxuXG4gIG9yZGluYWwobnVtOiBudW1iZXIsIHRva2VuPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fb3JkaW5hbC5yZXBsYWNlKCclZCcsIG51bS50b1N0cmluZygxMCkpO1xuICB9XG5cbiAgcHJlcGFyc2Uoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgcG9zdGZvcm1hdChzdHI6IHN0cmluZykge1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICByZWxhdGl2ZVRpbWUobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIHN0cjogJ2Z1dHVyZScgfCAncGFzdCcsIGlzRnV0dXJlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBjb25zdCBvdXRwdXQgPSB0aGlzLl9yZWxhdGl2ZVRpbWVbc3RyXTtcblxuICAgIHJldHVybiAoaXNGdW5jdGlvbihvdXRwdXQpKSA/XG4gICAgICBvdXRwdXQobnVtLCB3aXRob3V0U3VmZml4LCBzdHIsIGlzRnV0dXJlKSA6XG4gICAgICBvdXRwdXQucmVwbGFjZSgvJWQvaSwgbnVtLnRvU3RyaW5nKDEwKSk7XG4gIH1cblxuICBwYXN0RnV0dXJlKGRpZmY6IG51bWJlciwgb3V0cHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGZvcm1hdCA9IHRoaXMuX3JlbGF0aXZlVGltZVtkaWZmID4gMCA/ICdmdXR1cmUnIDogJ3Bhc3QnXTtcblxuICAgIHJldHVybiBpc0Z1bmN0aW9uKGZvcm1hdCkgPyBmb3JtYXQob3V0cHV0KSA6IGZvcm1hdC5yZXBsYWNlKC8lcy9pLCBvdXRwdXQpO1xuICB9XG5cbiAgLyoqIE1vbnRocyAqL1xuICBtb250aHMoKTogc3RyaW5nW107XG4gIG1vbnRocyhkYXRlOiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZztcbiAgbW9udGhzKGRhdGU/OiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDID0gZmFsc2UpOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgaWYgKCFkYXRlKSB7XG4gICAgICByZXR1cm4gaXNBcnJheTxzdHJpbmc+KHRoaXMuX21vbnRocylcbiAgICAgICAgPyB0aGlzLl9tb250aHNcbiAgICAgICAgOiB0aGlzLl9tb250aHMuc3RhbmRhbG9uZTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheTxzdHJpbmc+KHRoaXMuX21vbnRocykpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tb250aHNbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgICB9XG5cbiAgICBjb25zdCBrZXkgPSAodGhpcy5fbW9udGhzLmlzRm9ybWF0IHx8IE1PTlRIU19JTl9GT1JNQVQpLnRlc3QoZm9ybWF0KVxuICAgICAgPyAnZm9ybWF0J1xuICAgICAgOiAnc3RhbmRhbG9uZSc7XG5cbiAgICByZXR1cm4gdGhpcy5fbW9udGhzW2tleV1bZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgfVxuXG4gIG1vbnRoc1Nob3J0KCk6IHN0cmluZ1tdO1xuICBtb250aHNTaG9ydChkYXRlPzogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmc7XG4gIG1vbnRoc1Nob3J0KGRhdGU/OiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDID0gZmFsc2UpOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgaWYgKCFkYXRlKSB7XG4gICAgICByZXR1cm4gaXNBcnJheTxzdHJpbmc+KHRoaXMuX21vbnRoc1Nob3J0KVxuICAgICAgICA/IHRoaXMuX21vbnRoc1Nob3J0XG4gICAgICAgIDogdGhpcy5fbW9udGhzU2hvcnQuc3RhbmRhbG9uZTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheTxzdHJpbmc+KHRoaXMuX21vbnRoc1Nob3J0KSkge1xuICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfVxuICAgIGNvbnN0IGtleSA9IE1PTlRIU19JTl9GT1JNQVQudGVzdChmb3JtYXQpID8gJ2Zvcm1hdCcgOiAnc3RhbmRhbG9uZSc7XG5cbiAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRba2V5XVtnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICB9XG5cbiAgbW9udGhzUGFyc2UobW9udGhOYW1lOiBzdHJpbmcsIGZvcm1hdD86IHN0cmluZywgc3RyaWN0PzogYm9vbGVhbik6IG51bWJlciB7XG4gICAgbGV0IGRhdGU7XG4gICAgbGV0IHJlZ2V4O1xuXG4gICAgaWYgKHRoaXMuX21vbnRoc1BhcnNlRXhhY3QpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZU1vbnRoU3RyaWN0UGFyc2UobW9udGhOYW1lLCBmb3JtYXQsIHN0cmljdCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9tb250aHNQYXJzZSkge1xuICAgICAgdGhpcy5fbW9udGhzUGFyc2UgPSBbXTtcbiAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZSA9IFtdO1xuICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZSA9IFtdO1xuICAgIH1cblxuICAgIC8vIFRPRE86IGFkZCBzb3J0aW5nXG4gICAgLy8gU29ydGluZyBtYWtlcyBzdXJlIGlmIG9uZSBtb250aCAob3IgYWJicikgaXMgYSBwcmVmaXggb2YgYW5vdGhlclxuICAgIC8vIHNlZSBzb3J0aW5nIGluIGNvbXB1dGVNb250aHNQYXJzZVxuICAgIGxldCBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQygyMDAwLCBpKSk7XG4gICAgICBpZiAoc3RyaWN0ICYmICF0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0pIHtcbiAgICAgICAgY29uc3QgX21vbnRocyA9IHRoaXMubW9udGhzKGRhdGUsICcnLCB0cnVlKS5yZXBsYWNlKCcuJywgJycpO1xuICAgICAgICBjb25zdCBfc2hvcnRNb250aHMgPSB0aGlzLm1vbnRoc1Nob3J0KGRhdGUsICcnLCB0cnVlKS5yZXBsYWNlKCcuJywgJycpO1xuICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKGBeJHtfbW9udGhzfSRgLCAnaScpO1xuICAgICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cChgXiR7X3Nob3J0TW9udGhzfSRgLCAnaScpO1xuICAgICAgfVxuICAgICAgaWYgKCFzdHJpY3QgJiYgIXRoaXMuX21vbnRoc1BhcnNlW2ldKSB7XG4gICAgICAgIHJlZ2V4ID0gYF4ke3RoaXMubW9udGhzKGRhdGUsICcnLCB0cnVlKX18XiR7dGhpcy5tb250aHNTaG9ydChkYXRlLCAnJywgdHJ1ZSl9YDtcbiAgICAgICAgdGhpcy5fbW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKHJlZ2V4LnJlcGxhY2UoJy4nLCAnJyksICdpJyk7XG4gICAgICB9XG4gICAgICAvLyB0ZXN0IHRoZSByZWdleFxuICAgICAgaWYgKHN0cmljdCAmJiBmb3JtYXQgPT09ICdNTU1NJyAmJiAodGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldIGFzIFJlZ0V4cCkudGVzdChtb250aE5hbWUpKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RyaWN0ICYmIGZvcm1hdCA9PT0gJ01NTScgJiYgKHRoaXMuX3Nob3J0TW9udGhzUGFyc2VbaV0gYXMgUmVnRXhwKS50ZXN0KG1vbnRoTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG5cbiAgICAgIGlmICghc3RyaWN0ICYmIHRoaXMuX21vbnRoc1BhcnNlW2ldLnRlc3QobW9udGhOYW1lKSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb250aHNSZWdleChpc1N0cmljdDogYm9vbGVhbik6IFJlZ0V4cCB7XG4gICAgaWYgKHRoaXMuX21vbnRoc1BhcnNlRXhhY3QpIHtcbiAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1JlZ2V4JykpIHtcbiAgICAgICAgdGhpcy5jb21wdXRlTW9udGhzUGFyc2UoKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU3RyaWN0UmVnZXg7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9tb250aHNSZWdleDtcbiAgICB9XG5cbiAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNSZWdleCcpKSB7XG4gICAgICB0aGlzLl9tb250aHNSZWdleCA9IGRlZmF1bHRNb250aHNSZWdleDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fbW9udGhzU3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xuICAgICAgdGhpcy5fbW9udGhzU3RyaWN0UmVnZXggOiB0aGlzLl9tb250aHNSZWdleDtcbiAgfVxuXG4gIG1vbnRoc1Nob3J0UmVnZXgoaXNTdHJpY3Q6IGJvb2xlYW4pOiBSZWdFeHAge1xuICAgIGlmICh0aGlzLl9tb250aHNQYXJzZUV4YWN0KSB7XG4gICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNSZWdleCcpKSB7XG4gICAgICAgIHRoaXMuY29tcHV0ZU1vbnRoc1BhcnNlKCk7XG4gICAgICB9XG4gICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXg7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFJlZ2V4O1xuICAgIH1cbiAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNTaG9ydFJlZ2V4JykpIHtcbiAgICAgIHRoaXMuX21vbnRoc1Nob3J0UmVnZXggPSBkZWZhdWx0TW9udGhzU2hvcnRSZWdleDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleCAmJiBpc1N0cmljdCA/XG4gICAgICB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4IDogdGhpcy5fbW9udGhzU2hvcnRSZWdleDtcbiAgfVxuXG4gIC8qKiBXZWVrICovXG4gIHdlZWsoZGF0ZTogRGF0ZSwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHtcbiAgICByZXR1cm4gd2Vla09mWWVhcihkYXRlLCB0aGlzLl93ZWVrLmRvdywgdGhpcy5fd2Vlay5kb3ksIGlzVVRDKS53ZWVrO1xuICB9XG5cbiAgZmlyc3REYXlPZldlZWsoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fd2Vlay5kb3c7XG4gIH1cblxuICBmaXJzdERheU9mWWVhcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl93ZWVrLmRveTtcbiAgfVxuXG4gIC8qKiBEYXkgb2YgV2VlayAqL1xuICB3ZWVrZGF5cygpOiBzdHJpbmdbXTtcbiAgd2Vla2RheXMoZGF0ZTogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmc7XG4gIHdlZWtkYXlzKGRhdGU/OiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHJldHVybiBpc0FycmF5PHN0cmluZz4odGhpcy5fd2Vla2RheXMpXG4gICAgICAgID8gdGhpcy5fd2Vla2RheXNcbiAgICAgICAgOiB0aGlzLl93ZWVrZGF5cy5zdGFuZGFsb25lO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5PHN0cmluZz4odGhpcy5fd2Vla2RheXMpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNbZ2V0RGF5KGRhdGUsIGlzVVRDKV07XG4gICAgfVxuXG4gICAgY29uc3QgX2tleSA9IHRoaXMuX3dlZWtkYXlzLmlzRm9ybWF0LnRlc3QoZm9ybWF0KVxuICAgICAgPyAnZm9ybWF0J1xuICAgICAgOiAnc3RhbmRhbG9uZSc7XG5cbiAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNbX2tleV1bZ2V0RGF5KGRhdGUsIGlzVVRDKV07XG4gIH1cblxuICB3ZWVrZGF5c01pbigpOiBzdHJpbmdbXTtcbiAgd2Vla2RheXNNaW4oZGF0ZTogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmc7XG4gIHdlZWtkYXlzTWluKGRhdGU/OiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gZGF0ZSA/IHRoaXMuX3dlZWtkYXlzTWluW2dldERheShkYXRlLCBpc1VUQyldIDogdGhpcy5fd2Vla2RheXNNaW47XG4gIH1cblxuICB3ZWVrZGF5c1Nob3J0KCk6IHN0cmluZ1tdO1xuICB3ZWVrZGF5c1Nob3J0KGRhdGU6IERhdGUsIGZvcm1hdD86IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nO1xuICB3ZWVrZGF5c1Nob3J0KGRhdGU/OiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gZGF0ZSA/IHRoaXMuX3dlZWtkYXlzU2hvcnRbZ2V0RGF5KGRhdGUsIGlzVVRDKV0gOiB0aGlzLl93ZWVrZGF5c1Nob3J0O1xuICB9XG5cblxuICAvLyBwcm90by53ZWVrZGF5c1BhcnNlICA9ICAgICAgICBsb2NhbGVXZWVrZGF5c1BhcnNlO1xuICB3ZWVrZGF5c1BhcnNlKHdlZWtkYXlOYW1lPzogc3RyaW5nLCBmb3JtYXQ/OiBzdHJpbmcsIHN0cmljdD86IGJvb2xlYW4pOiBudW1iZXIge1xuICAgIGxldCBpO1xuICAgIGxldCByZWdleDtcblxuICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVdlZWtTdHJpY3RQYXJzZSh3ZWVrZGF5TmFtZSwgZm9ybWF0LCBzdHJpY3QpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZSkge1xuICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlID0gW107XG4gICAgICB0aGlzLl9mdWxsV2Vla2RheXNQYXJzZSA9IFtdO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuICAgICAgLy8gZml4OiBoZXJlIGlzIHRoZSBpc3N1ZVxuICAgICAgY29uc3QgZGF0ZSA9IHNldERheU9mV2VlayhuZXcgRGF0ZShEYXRlLlVUQygyMDAwLCAxKSksIGksIG51bGwsIHRydWUpO1xuICAgICAgaWYgKHN0cmljdCAmJiAhdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2VbaV0pIHtcbiAgICAgICAgdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKGBeJHt0aGlzLndlZWtkYXlzKGRhdGUsICcnLCB0cnVlKS5yZXBsYWNlKCcuJywgJ1xcLj8nKX0kYCwgJ2knKTtcbiAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChgXiR7dGhpcy53ZWVrZGF5c1Nob3J0KGRhdGUsICcnLCB0cnVlKS5yZXBsYWNlKCcuJywgJ1xcLj8nKX0kYCwgJ2knKTtcbiAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoYF4ke3RoaXMud2Vla2RheXNNaW4oZGF0ZSwgJycsIHRydWUpLnJlcGxhY2UoJy4nLCAnXFwuPycpfSRgLCAnaScpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl93ZWVrZGF5c1BhcnNlW2ldKSB7XG4gICAgICAgIHJlZ2V4ID0gYF4ke3RoaXMud2Vla2RheXMoZGF0ZSwgJycsIHRydWUpfXxeJHt0aGlzLndlZWtkYXlzU2hvcnQoZGF0ZSwgJycsIHRydWUpfXxeJHt0aGlzLndlZWtkYXlzTWluKGRhdGUsICcnLCB0cnVlKX1gO1xuICAgICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChyZWdleC5yZXBsYWNlKCcuJywgJycpLCAnaScpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzQXJyYXk8UmVnRXhwPih0aGlzLl9mdWxsV2Vla2RheXNQYXJzZSlcbiAgICAgICAgfHwgIWlzQXJyYXk8UmVnRXhwPih0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UpXG4gICAgICAgIHx8ICFpc0FycmF5PFJlZ0V4cD4odGhpcy5fbWluV2Vla2RheXNQYXJzZSlcbiAgICAgICAgfHwgIWlzQXJyYXk8UmVnRXhwPih0aGlzLl93ZWVrZGF5c1BhcnNlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHRlc3QgdGhlIHJlZ2V4XG4gICAgICBpZiAoc3RyaWN0ICYmIGZvcm1hdCA9PT0gJ2RkZGQnICYmIHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfSBlbHNlIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnZGRkJyAmJiB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9IGVsc2UgaWYgKHN0cmljdCAmJiBmb3JtYXQgPT09ICdkZCcgJiYgdGhpcy5fbWluV2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH0gZWxzZSBpZiAoIXN0cmljdCAmJiB0aGlzLl93ZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHByb3RvLndlZWtkYXlzUmVnZXggICAgICAgPSAgICAgICAgd2Vla2RheXNSZWdleDtcbiAgd2Vla2RheXNSZWdleChpc1N0cmljdDogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzUmVnZXgnKSkge1xuICAgICAgICB0aGlzLmNvbXB1dGVXZWVrZGF5c1BhcnNlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTdHJpY3RSZWdleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgdGhpcy5fd2Vla2RheXNSZWdleCA9IG1hdGNoV29yZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xuICAgICAgICB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4IDogdGhpcy5fd2Vla2RheXNSZWdleDtcbiAgICB9XG4gIH1cblxuICAvLyBwcm90by53ZWVrZGF5c1Nob3J0UmVnZXggID0gICAgICAgIHdlZWtkYXlzU2hvcnRSZWdleDtcbiAgLy8gcHJvdG8ud2Vla2RheXNNaW5SZWdleCAgICA9ICAgICAgICB3ZWVrZGF5c01pblJlZ2V4O1xuXG5cbiAgd2Vla2RheXNTaG9ydFJlZ2V4KGlzU3RyaWN0PzogYm9vbGVhbik6IFJlZ0V4cCB7XG4gICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xuICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgIHRoaXMuY29tcHV0ZVdlZWtkYXlzUGFyc2UoKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNTaG9ydFJlZ2V4JykpIHtcbiAgICAgICAgdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4ID0gbWF0Y2hXb3JkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4ICYmIGlzU3RyaWN0ID9cbiAgICAgICAgdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4IDogdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4O1xuICAgIH1cbiAgfVxuXG4gIHdlZWtkYXlzTWluUmVnZXgoaXNTdHJpY3Q/OiBib29sZWFuKTogUmVnRXhwIHtcbiAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgdGhpcy5jb21wdXRlV2Vla2RheXNQYXJzZSgpO1xuICAgICAgfVxuICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzTWluUmVnZXg7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzTWluUmVnZXgnKSkge1xuICAgICAgICB0aGlzLl93ZWVrZGF5c01pblJlZ2V4ID0gbWF0Y2hXb3JkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleCAmJiBpc1N0cmljdCA/XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXggOiB0aGlzLl93ZWVrZGF5c01pblJlZ2V4O1xuICAgIH1cbiAgfVxuXG4gIGlzUE0oaW5wdXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIC8vIElFOCBRdWlya3MgTW9kZSAmIElFNyBTdGFuZGFyZHMgTW9kZSBkbyBub3QgYWxsb3cgYWNjZXNzaW5nIHN0cmluZ3MgbGlrZSBhcnJheXNcbiAgICAvLyBVc2luZyBjaGFyQXQgc2hvdWxkIGJlIG1vcmUgY29tcGF0aWJsZS5cbiAgICByZXR1cm4gaW5wdXQudG9Mb3dlckNhc2UoKS5jaGFyQXQoMCkgPT09ICdwJztcbiAgfVxuXG4gIG1lcmlkaWVtKGhvdXJzOiBudW1iZXIsIG1pbnV0ZXM6IG51bWJlciwgaXNMb3dlcjogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgaWYgKGhvdXJzID4gMTEpIHtcbiAgICAgIHJldHVybiBpc0xvd2VyID8gJ3BtJyA6ICdQTSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzTG93ZXIgPyAnYW0nIDogJ0FNJztcbiAgfVxuXG4gIGZvcm1hdExvbmdEYXRlKGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbG9uZ0RhdGVGb3JtYXQgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdCA/IHRoaXMuX2xvbmdEYXRlRm9ybWF0IDogZGVmYXVsdExvbmdEYXRlRm9ybWF0O1xuICAgIGNvbnN0IGZvcm1hdCA9IHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV07XG4gICAgY29uc3QgZm9ybWF0VXBwZXIgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXkudG9VcHBlckNhc2UoKV07XG5cbiAgICBpZiAoZm9ybWF0IHx8ICFmb3JtYXRVcHBlcikge1xuICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICB9XG5cbiAgICB0aGlzLl9sb25nRGF0ZUZvcm1hdFtcbiAgICAgIGtleVxuICAgICAgXSA9IGZvcm1hdFVwcGVyLnJlcGxhY2UoL01NTU18TU18RER8ZGRkZC9nLCAodmFsOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiB2YWwuc2xpY2UoMSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTW9udGhTdHJpY3RQYXJzZShtb250aE5hbWU6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcsIHN0cmljdD86IGJvb2xlYW4pIHtcbiAgICBjb25zdCBsbGMgPSBtb250aE5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICBsZXQgaTtcbiAgICBsZXQgaWk7XG4gICAgbGV0IG1vbTtcbiAgICBpZiAoIXRoaXMuX21vbnRoc1BhcnNlKSB7XG4gICAgICAvLyB0aGlzIGlzIG5vdCB1c2VkXG4gICAgICB0aGlzLl9tb250aHNQYXJzZSA9IFtdO1xuICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlID0gW107XG4gICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlID0gW107XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgMTI7ICsraSkge1xuICAgICAgICBtb20gPSBuZXcgRGF0ZSgyMDAwLCBpKTtcbiAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZVtpXSA9IHRoaXMubW9udGhzU2hvcnQobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldID0gdGhpcy5tb250aHMobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RyaWN0KSB7XG4gICAgICBpZiAoZm9ybWF0ID09PSAnTU1NJykge1xuICAgICAgICBpaSA9ICh0aGlzLl9zaG9ydE1vbnRoc1BhcnNlIGFzIHN0cmluZ1tdKS5pbmRleE9mKGxsYyk7XG5cbiAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgIH1cbiAgICAgIGlpID0gKHRoaXMuX2xvbmdNb250aHNQYXJzZSBhcyBzdHJpbmdbXSkuaW5kZXhPZihsbGMpO1xuXG4gICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQgPT09ICdNTU0nKSB7XG4gICAgICBpaSA9ICh0aGlzLl9zaG9ydE1vbnRoc1BhcnNlIGFzIHN0cmluZ1tdKS5pbmRleE9mKGxsYyk7XG4gICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBpaTtcbiAgICAgIH1cblxuICAgICAgaWkgPSAodGhpcy5fbG9uZ01vbnRoc1BhcnNlIGFzIHN0cmluZ1tdKS5pbmRleE9mKGxsYyk7XG5cbiAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgfVxuXG4gICAgaWkgPSAodGhpcy5fbG9uZ01vbnRoc1BhcnNlIGFzIHN0cmluZ1tdKS5pbmRleE9mKGxsYyk7XG4gICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIGlpO1xuICAgIH1cbiAgICBpaSA9ICh0aGlzLl9zaG9ydE1vbnRoc1BhcnNlIGFzIHN0cmluZ1tdKS5pbmRleE9mKGxsYyk7XG5cbiAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVXZWVrU3RyaWN0UGFyc2Uod2Vla2RheU5hbWU6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcsIHN0cmljdDogYm9vbGVhbik6IG51bWJlciB7XG4gICAgbGV0IGlpO1xuICAgIGNvbnN0IGxsYyA9IHdlZWtkYXlOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgaWYgKCF0aGlzLl93ZWVrZGF5c1BhcnNlKSB7XG4gICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlID0gW107XG4gICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2UgPSBbXTtcblxuICAgICAgbGV0IGk7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgNzsgKytpKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBzZXREYXlPZldlZWsobmV3IERhdGUoRGF0ZS5VVEMoMjAwMCwgMSkpLCBpLCBudWxsLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZVtpXSA9IHRoaXMud2Vla2RheXNNaW4oZGF0ZSkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlW2ldID0gdGhpcy53ZWVrZGF5c1Nob3J0KGRhdGUpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2VbaV0gPSB0aGlzLndlZWtkYXlzKGRhdGUsICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNBcnJheTxzdHJpbmc+KHRoaXMuX3dlZWtkYXlzUGFyc2UpXG4gICAgICB8fCAhaXNBcnJheTxzdHJpbmc+KHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSlcbiAgICAgIHx8ICFpc0FycmF5PHN0cmluZz4odGhpcy5fbWluV2Vla2RheXNQYXJzZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc3RyaWN0KSB7XG4gICAgICBpZiAoZm9ybWF0ID09PSAnZGRkZCcpIHtcbiAgICAgICAgaWkgPSB0aGlzLl93ZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcblxuICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICdkZGQnKSB7XG4gICAgICAgIGlpID0gdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcblxuICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWkgPSB0aGlzLl9taW5XZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcblxuICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZm9ybWF0ID09PSAnZGRkZCcpIHtcbiAgICAgICAgaWkgPSB0aGlzLl93ZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcbiAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgfVxuICAgICAgICBpaSA9IHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XG4gICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgIH1cbiAgICAgICAgaWkgPSB0aGlzLl9taW5XZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcblxuICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICdkZGQnKSB7XG4gICAgICAgIGlpID0gdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcbiAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgfVxuICAgICAgICBpaSA9IHRoaXMuX3dlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xuICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICB9XG4gICAgICAgIGlpID0gdGhpcy5fbWluV2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XG5cbiAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlpID0gdGhpcy5fbWluV2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XG4gICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgIH1cbiAgICAgICAgaWkgPSB0aGlzLl93ZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcbiAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgfVxuICAgICAgICBpaSA9IHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XG5cbiAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVNb250aHNQYXJzZSgpIHtcbiAgICBjb25zdCBzaG9ydFBpZWNlczogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBsb25nUGllY2VzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IG1peGVkUGllY2VzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGxldCBkYXRlO1xuXG4gICAgbGV0IGk7XG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuICAgICAgZGF0ZSA9IG5ldyBEYXRlKDIwMDAsIGkpO1xuICAgICAgc2hvcnRQaWVjZXMucHVzaCh0aGlzLm1vbnRoc1Nob3J0KGRhdGUsICcnKSk7XG4gICAgICBsb25nUGllY2VzLnB1c2godGhpcy5tb250aHMoZGF0ZSwgJycpKTtcbiAgICAgIG1peGVkUGllY2VzLnB1c2godGhpcy5tb250aHMoZGF0ZSwgJycpKTtcbiAgICAgIG1peGVkUGllY2VzLnB1c2godGhpcy5tb250aHNTaG9ydChkYXRlLCAnJykpO1xuICAgIH1cbiAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIG1vbnRoIChvciBhYmJyKSBpcyBhIHByZWZpeCBvZiBhbm90aGVyIGl0XG4gICAgLy8gd2lsbCBtYXRjaCB0aGUgbG9uZ2VyIHBpZWNlLlxuICAgIHNob3J0UGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBsb25nUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBtaXhlZFBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgIHNob3J0UGllY2VzW2ldID0gcmVnZXhFc2NhcGUoc2hvcnRQaWVjZXNbaV0pO1xuICAgICAgbG9uZ1BpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKGxvbmdQaWVjZXNbaV0pO1xuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgICAgbWl4ZWRQaWVjZXNbaV0gPSByZWdleEVzY2FwZShtaXhlZFBpZWNlc1tpXSk7XG4gICAgfVxuXG4gICAgdGhpcy5fbW9udGhzUmVnZXggPSBuZXcgUmVnRXhwKGBeKCR7bWl4ZWRQaWVjZXMuam9pbignfCcpfSlgLCAnaScpO1xuICAgIHRoaXMuX21vbnRoc1Nob3J0UmVnZXggPSB0aGlzLl9tb250aHNSZWdleDtcbiAgICB0aGlzLl9tb250aHNTdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoYF4oJHtsb25nUGllY2VzLmpvaW4oJ3wnKX0pYCwgJ2knKTtcbiAgICB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChgXigke3Nob3J0UGllY2VzLmpvaW4oJ3wnKX0pYCwgJ2knKTtcbiAgfVxuXG4gIHByaXZhdGUgY29tcHV0ZVdlZWtkYXlzUGFyc2UoKSB7XG4gICAgY29uc3QgbWluUGllY2VzID0gW107XG4gICAgY29uc3Qgc2hvcnRQaWVjZXMgPSBbXTtcbiAgICBjb25zdCBsb25nUGllY2VzID0gW107XG4gICAgY29uc3QgbWl4ZWRQaWVjZXMgPSBbXTtcblxuICAgIGxldCBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuICAgICAgLy8gbGV0IG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgMV0pLmRheShpKTtcbiAgICAgIGNvbnN0IGRhdGUgPSBzZXREYXlPZldlZWsobmV3IERhdGUoRGF0ZS5VVEMoMjAwMCwgMSkpLCBpLCBudWxsLCB0cnVlKTtcbiAgICAgIGNvbnN0IG1pbnAgPSB0aGlzLndlZWtkYXlzTWluKGRhdGUpO1xuICAgICAgY29uc3Qgc2hvcnRwID0gdGhpcy53ZWVrZGF5c1Nob3J0KGRhdGUpO1xuICAgICAgY29uc3QgbG9uZ3AgPSB0aGlzLndlZWtkYXlzKGRhdGUpO1xuICAgICAgbWluUGllY2VzLnB1c2gobWlucCk7XG4gICAgICBzaG9ydFBpZWNlcy5wdXNoKHNob3J0cCk7XG4gICAgICBsb25nUGllY2VzLnB1c2gobG9uZ3ApO1xuICAgICAgbWl4ZWRQaWVjZXMucHVzaChtaW5wKTtcbiAgICAgIG1peGVkUGllY2VzLnB1c2goc2hvcnRwKTtcbiAgICAgIG1peGVkUGllY2VzLnB1c2gobG9uZ3ApO1xuICAgIH1cbiAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIHdlZWtkYXkgKG9yIGFiYnIpIGlzIGEgcHJlZml4IG9mIGFub3RoZXIgaXRcbiAgICAvLyB3aWxsIG1hdGNoIHRoZSBsb25nZXIgcGllY2UuXG4gICAgbWluUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBzaG9ydFBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgbG9uZ1BpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgbWl4ZWRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgIHNob3J0UGllY2VzW2ldID0gcmVnZXhFc2NhcGUoc2hvcnRQaWVjZXNbaV0pO1xuICAgICAgbG9uZ1BpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKGxvbmdQaWVjZXNbaV0pO1xuICAgICAgbWl4ZWRQaWVjZXNbaV0gPSByZWdleEVzY2FwZShtaXhlZFBpZWNlc1tpXSk7XG4gICAgfVxuXG4gICAgdGhpcy5fd2Vla2RheXNSZWdleCA9IG5ldyBSZWdFeHAoYF4oJHttaXhlZFBpZWNlcy5qb2luKCd8Jyl9KWAsICdpJyk7XG4gICAgdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4ID0gdGhpcy5fd2Vla2RheXNSZWdleDtcbiAgICB0aGlzLl93ZWVrZGF5c01pblJlZ2V4ID0gdGhpcy5fd2Vla2RheXNSZWdleDtcblxuICAgIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKGBeKCR7bG9uZ1BpZWNlcy5qb2luKCd8Jyl9KWAsICdpJyk7XG4gICAgdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChgXigke3Nob3J0UGllY2VzLmpvaW4oJ3wnKX0pYCwgJ2knKTtcbiAgICB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChgXigke21pblBpZWNlcy5qb2luKCd8Jyl9KWAsICdpJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY21wTGVuUmV2KGE6IHN0cmluZywgYjogc3RyaW5nKTogbnVtYmVyIHtcbiAgcmV0dXJuIGIubGVuZ3RoIC0gYS5sZW5ndGg7XG59XG4iLCJleHBvcnQgY29uc3QgZGVmYXVsdENhbGVuZGFyID0ge1xuICBzYW1lRGF5OiAnW1RvZGF5IGF0XSBMVCcsXG4gIG5leHREYXk6ICdbVG9tb3Jyb3cgYXRdIExUJyxcbiAgbmV4dFdlZWs6ICdkZGRkIFthdF0gTFQnLFxuICBsYXN0RGF5OiAnW1llc3RlcmRheSBhdF0gTFQnLFxuICBsYXN0V2VlazogJ1tMYXN0XSBkZGRkIFthdF0gTFQnLFxuICBzYW1lRWxzZTogJ0wnXG59O1xuIiwiaW1wb3J0IHtcbiAgZGVmYXVsdERheU9mTW9udGhPcmRpbmFsUGFyc2UsXG4gIGRlZmF1bHRMb2NhbGVNb250aHMsXG4gIGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydCxcbiAgZGVmYXVsdExvY2FsZVdlZWtkYXlzLFxuICBkZWZhdWx0TG9jYWxlV2Vla2RheXNNaW4sXG4gIGRlZmF1bHRMb2NhbGVXZWVrZGF5c1Nob3J0LCBkZWZhdWx0TG9uZ0RhdGVGb3JtYXQsIGRlZmF1bHRPcmRpbmFsLFxuICBMb2NhbGVEYXRhXG59IGZyb20gJy4vbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGRlZmF1bHRDYWxlbmRhciB9IGZyb20gJy4vY2FsZW5kYXInO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdEludmFsaWREYXRlID0gJ0ludmFsaWQgZGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlV2VlayA9IHtcbiAgZG93OiAwLCAvLyBTdW5kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgZG95OiA2IC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbn07XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlTWVyaWRpZW1QYXJzZSA9IC9bYXBdXFwuP20/XFwuPy9pO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFJlbGF0aXZlVGltZToge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XG4gIGZ1dHVyZSA6ICdpbiAlcycsXG4gIHBhc3QgICA6ICclcyBhZ28nLFxuICBzICA6ICdhIGZldyBzZWNvbmRzJyxcbiAgc3MgOiAnJWQgc2Vjb25kcycsXG4gIG0gIDogJ2EgbWludXRlJyxcbiAgbW0gOiAnJWQgbWludXRlcycsXG4gIGggIDogJ2FuIGhvdXInLFxuICBoaCA6ICclZCBob3VycycsXG4gIGQgIDogJ2EgZGF5JyxcbiAgZGQgOiAnJWQgZGF5cycsXG4gIE0gIDogJ2EgbW9udGgnLFxuICBNTSA6ICclZCBtb250aHMnLFxuICB5ICA6ICdhIHllYXInLFxuICB5eSA6ICclZCB5ZWFycydcbn07XG5cbmV4cG9ydCBjb25zdCBiYXNlQ29uZmlnOiBMb2NhbGVEYXRhID0ge1xuICBjYWxlbmRhcjogZGVmYXVsdENhbGVuZGFyLFxuICBsb25nRGF0ZUZvcm1hdDogZGVmYXVsdExvbmdEYXRlRm9ybWF0LFxuICBpbnZhbGlkRGF0ZTogZGVmYXVsdEludmFsaWREYXRlLFxuICBvcmRpbmFsOiBkZWZhdWx0T3JkaW5hbCxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogZGVmYXVsdERheU9mTW9udGhPcmRpbmFsUGFyc2UsXG4gIHJlbGF0aXZlVGltZTogZGVmYXVsdFJlbGF0aXZlVGltZSxcblxuICBtb250aHM6IGRlZmF1bHRMb2NhbGVNb250aHMsXG4gIG1vbnRoc1Nob3J0OiBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQsXG5cbiAgd2VlazogZGVmYXVsdExvY2FsZVdlZWssXG5cbiAgd2Vla2RheXM6IGRlZmF1bHRMb2NhbGVXZWVrZGF5cyxcbiAgd2Vla2RheXNNaW46IGRlZmF1bHRMb2NhbGVXZWVrZGF5c01pbixcbiAgd2Vla2RheXNTaG9ydDogZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQsXG5cbiAgbWVyaWRpZW1QYXJzZTogZGVmYXVsdExvY2FsZU1lcmlkaWVtUGFyc2Vcbn07XG4iLCIvLyBjb21wYXJlIHR3byBhcnJheXMsIHJldHVybiB0aGUgbnVtYmVyIG9mIGRpZmZlcmVuY2VzXG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4vdHlwZS1jaGVja3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZUFycmF5czxUPihhcnJheTE6IFRbXSwgYXJyYXkyOiBUW10sIGRvbnRDb252ZXJ0OiBib29sZWFuKSB7XG4gIGNvbnN0IGxlbiA9IE1hdGgubWluKGFycmF5MS5sZW5ndGgsIGFycmF5Mi5sZW5ndGgpO1xuICBjb25zdCBsZW5ndGhEaWZmID0gTWF0aC5hYnMoYXJyYXkxLmxlbmd0aCAtIGFycmF5Mi5sZW5ndGgpO1xuICBsZXQgZGlmZnMgPSAwO1xuICBsZXQgaTtcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKChkb250Q29udmVydCAmJiBhcnJheTFbaV0gIT09IGFycmF5MltpXSlcbiAgICAgIHx8ICghZG9udENvbnZlcnQgJiYgdG9JbnQoYXJyYXkxW2ldKSAhPT0gdG9JbnQoYXJyYXkyW2ldKSkpIHtcbiAgICAgIGRpZmZzKys7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpZmZzICsgbGVuZ3RoRGlmZjtcbn1cbiIsIi8vIGludGVybmFsIHN0b3JhZ2UgZm9yIGxvY2FsZSBjb25maWcgZmlsZXNcbmltcG9ydCB7IExvY2FsZSwgTG9jYWxlRGF0YSB9IGZyb20gJy4vbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGJhc2VDb25maWcgfSBmcm9tICcuL2xvY2FsZS5kZWZhdWx0cyc7XG5pbXBvcnQgeyBoYXNPd25Qcm9wLCBpc0FycmF5LCBpc09iamVjdCwgaXNTdHJpbmcsIGlzVW5kZWZpbmVkLCB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IGNvbXBhcmVBcnJheXMgfSBmcm9tICcuLi91dGlscy9jb21wYXJlLWFycmF5cyc7XG5cbmNvbnN0IGxvY2FsZXM6IHsgW2tleTogc3RyaW5nXTogTG9jYWxlIH0gPSB7fTtcbmNvbnN0IGxvY2FsZUZhbWlsaWVzOiB7IFtrZXk6IHN0cmluZ106IHtuYW1lOiBzdHJpbmc7IGNvbmZpZzogTG9jYWxlRGF0YX1bXSB9ID0ge307XG5sZXQgZ2xvYmFsTG9jYWxlOiBMb2NhbGU7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBrZXkgPyBrZXkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCdfJywgJy0nKSA6IGtleTtcbn1cblxuLy8gcGljayB0aGUgbG9jYWxlIGZyb20gdGhlIGFycmF5XG4vLyB0cnkgWydlbi1hdScsICdlbi1nYiddIGFzICdlbi1hdScsICdlbi1nYicsICdlbicsIGFzIGluIG1vdmUgdGhyb3VnaCB0aGUgbGlzdCB0cnlpbmcgZWFjaFxuLy8gc3Vic3RyaW5nIGZyb20gbW9zdCBzcGVjaWZpYyB0byBsZWFzdCxcbi8vIGJ1dCBtb3ZlIHRvIHRoZSBuZXh0IGFycmF5IGl0ZW0gaWYgaXQncyBhIG1vcmUgc3BlY2lmaWMgdmFyaWFudCB0aGFuIHRoZSBjdXJyZW50IHJvb3RcbmZ1bmN0aW9uIGNob29zZUxvY2FsZShuYW1lczogc3RyaW5nW10pOiBMb2NhbGUge1xuICBsZXQgbmV4dDtcbiAgbGV0IGxvY2FsZTtcbiAgbGV0IGkgPSAwO1xuXG4gIHdoaWxlIChpIDwgbmFtZXMubGVuZ3RoKSB7XG4gICAgY29uc3Qgc3BsaXQgPSBub3JtYWxpemVMb2NhbGUobmFtZXNbaV0pLnNwbGl0KCctJyk7XG4gICAgbGV0IGogPSBzcGxpdC5sZW5ndGg7XG4gICAgbmV4dCA9IG5vcm1hbGl6ZUxvY2FsZShuYW1lc1tpICsgMV0pO1xuICAgIG5leHQgPSBuZXh0ID8gbmV4dC5zcGxpdCgnLScpIDogbnVsbDtcbiAgICB3aGlsZSAoaiA+IDApIHtcbiAgICAgIGxvY2FsZSA9IGxvYWRMb2NhbGUoc3BsaXQuc2xpY2UoMCwgaikuam9pbignLScpKTtcbiAgICAgIGlmIChsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0ICYmIG5leHQubGVuZ3RoID49IGogJiYgY29tcGFyZUFycmF5cyhzcGxpdCwgbmV4dCwgdHJ1ZSkgPj0gaiAtIDEpIHtcbiAgICAgICAgLy8gdGhlIG5leHQgYXJyYXkgaXRlbSBpcyBiZXR0ZXIgdGhhbiBhIHNoYWxsb3dlciBzdWJzdHJpbmcgb2YgdGhpcyBvbmVcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBqLS07XG4gICAgfVxuICAgIGkrKztcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDb25maWdzKHBhcmVudENvbmZpZzogTG9jYWxlRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRDb25maWc6IExvY2FsZURhdGEpIHtcbiAgY29uc3QgcmVzOiBMb2NhbGVEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgcGFyZW50Q29uZmlnKTtcblxuICBmb3IgKGNvbnN0IGNoaWxkUHJvcCBpbiBjaGlsZENvbmZpZykge1xuICAgIGlmICghaGFzT3duUHJvcChjaGlsZENvbmZpZywgY2hpbGRQcm9wKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChpc09iamVjdChwYXJlbnRDb25maWdbY2hpbGRQcm9wXSkgJiYgaXNPYmplY3QoY2hpbGRDb25maWdbY2hpbGRQcm9wXSkpIHtcbiAgICAgIHJlc1tjaGlsZFByb3BdID0ge307XG4gICAgICBPYmplY3QuYXNzaWduKHJlc1tjaGlsZFByb3BdLCBwYXJlbnRDb25maWdbY2hpbGRQcm9wXSk7XG4gICAgICBPYmplY3QuYXNzaWduKHJlc1tjaGlsZFByb3BdLCBjaGlsZENvbmZpZ1tjaGlsZFByb3BdKTtcbiAgICB9IGVsc2UgaWYgKGNoaWxkQ29uZmlnW2NoaWxkUHJvcF0gIT0gbnVsbCkge1xuICAgICAgcmVzW2NoaWxkUHJvcF0gPSBjaGlsZENvbmZpZ1tjaGlsZFByb3BdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgcmVzW2NoaWxkUHJvcF07XG4gICAgfVxuICB9XG4gIGxldCBwYXJlbnRQcm9wO1xuICBmb3IgKHBhcmVudFByb3AgaW4gcGFyZW50Q29uZmlnKSB7XG4gICAgaWYgKFxuICAgICAgaGFzT3duUHJvcChwYXJlbnRDb25maWcsIHBhcmVudFByb3ApICYmXG4gICAgICAhaGFzT3duUHJvcChjaGlsZENvbmZpZywgcGFyZW50UHJvcCkgJiZcbiAgICAgIGlzT2JqZWN0KHBhcmVudENvbmZpZ1twYXJlbnRQcm9wIGFzIGtleW9mIExvY2FsZURhdGFdKVxuICAgICkge1xuICAgICAgLy8gbWFrZSBzdXJlIGNoYW5nZXMgdG8gcHJvcGVydGllcyBkb24ndCBtb2RpZnkgcGFyZW50IGNvbmZpZ1xuICAgICAgcmVzW3BhcmVudFByb3AgYXMga2V5b2YgTG9jYWxlRGF0YV0gPSBPYmplY3QuYXNzaWduKHt9LCByZXNbcGFyZW50UHJvcCBhcyBrZXlvZiBMb2NhbGVEYXRhXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcztcbn1cblxuXG5mdW5jdGlvbiBsb2FkTG9jYWxlKG5hbWU6IHN0cmluZyk6IExvY2FsZSB7XG4gIC8vIG5vIHdheSFcbiAgLyogdmFyIG9sZExvY2FsZSA9IG51bGw7XG4gICAvLyBUT0RPOiBGaW5kIGEgYmV0dGVyIHdheSB0byByZWdpc3RlciBhbmQgbG9hZCBhbGwgdGhlIGxvY2FsZXMgaW4gTm9kZVxuICAgaWYgKCFsb2NhbGVzW25hbWVdICYmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykgJiZcbiAgICAgbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgIHRyeSB7XG4gICAgICAgb2xkTG9jYWxlID0gZ2xvYmFsTG9jYWxlLl9hYmJyO1xuICAgICAgIHZhciBhbGlhc2VkUmVxdWlyZSA9IHJlcXVpcmU7XG4gICAgICAgYWxpYXNlZFJlcXVpcmUoJy4vbG9jYWxlLycgKyBuYW1lKTtcbiAgICAgICBnZXRTZXRHbG9iYWxMb2NhbGUob2xkTG9jYWxlKTtcbiAgICAgfSBjYXRjaCAoZSkge31cbiAgIH0qL1xuICBpZiAoIWxvY2FsZXNbbmFtZV0pIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBjb25zb2xlLmVycm9yKGBLaHJvbm9zIGxvY2FsZSBlcnJvcjogcGxlYXNlIGxvYWQgbG9jYWxlIFwiJHtuYW1lfVwiIGJlZm9yZSB1c2luZyBpdGApO1xuICAgIC8vIHRocm93IG5ldyBFcnJvcihgS2hyb25vcyBsb2NhbGUgZXJyb3I6IHBsZWFzZSBsb2FkIGxvY2FsZSBcIiR7bmFtZX1cIiBiZWZvcmUgdXNpbmcgaXRgKTtcbiAgfVxuXG4gIHJldHVybiBsb2NhbGVzW25hbWVdO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHdpbGwgbG9hZCBsb2NhbGUgYW5kIHRoZW4gc2V0IHRoZSBnbG9iYWwgbG9jYWxlLiAgSWZcbi8vIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkIGluLCBpdCB3aWxsIHNpbXBseSByZXR1cm4gdGhlIGN1cnJlbnQgZ2xvYmFsXG4vLyBsb2NhbGUga2V5LlxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldEdsb2JhbExvY2FsZShrZXk/OiBzdHJpbmcgfCBzdHJpbmdbXSwgdmFsdWVzPzogTG9jYWxlRGF0YSk6IHN0cmluZyB7XG4gIGxldCBkYXRhOiBMb2NhbGU7XG5cbiAgaWYgKGtleSkge1xuICAgIGlmIChpc1VuZGVmaW5lZCh2YWx1ZXMpKSB7XG4gICAgICBkYXRhID0gZ2V0TG9jYWxlKGtleSk7XG4gICAgfSBlbHNlIGlmIChpc1N0cmluZyhrZXkpKSB7XG4gICAgICBkYXRhID0gZGVmaW5lTG9jYWxlKGtleSwgdmFsdWVzKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YSkge1xuICAgICAgZ2xvYmFsTG9jYWxlID0gZGF0YTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2xvYmFsTG9jYWxlICYmIGdsb2JhbExvY2FsZS5fYWJicjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZUxvY2FsZShuYW1lOiBzdHJpbmcsIGNvbmZpZz86IExvY2FsZURhdGEpOiBMb2NhbGUge1xuICBpZiAoY29uZmlnID09PSBudWxsKSB7XG4gICAgLy8gdXNlZnVsIGZvciB0ZXN0aW5nXG4gICAgZGVsZXRlIGxvY2FsZXNbbmFtZV07XG4gICAgZ2xvYmFsTG9jYWxlID0gZ2V0TG9jYWxlKCdlbicpO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoIWNvbmZpZykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBwYXJlbnRDb25maWcgPSBiYXNlQ29uZmlnO1xuICBjb25maWcuYWJiciA9IG5hbWU7XG4gIGlmIChjb25maWcucGFyZW50TG9jYWxlICE9IG51bGwpIHtcbiAgICBpZiAobG9jYWxlc1tjb25maWcucGFyZW50TG9jYWxlXSAhPSBudWxsKSB7XG4gICAgICBwYXJlbnRDb25maWcgPSBsb2NhbGVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdLl9jb25maWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghbG9jYWxlRmFtaWxpZXNbY29uZmlnLnBhcmVudExvY2FsZV0pIHtcbiAgICAgICAgbG9jYWxlRmFtaWxpZXNbY29uZmlnLnBhcmVudExvY2FsZV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdLnB1c2goeyBuYW1lLCBjb25maWcgfSk7XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGxvY2FsZXNbbmFtZV0gPSBuZXcgTG9jYWxlKG1lcmdlQ29uZmlncyhwYXJlbnRDb25maWcsIGNvbmZpZykpO1xuXG4gIGlmIChsb2NhbGVGYW1pbGllc1tuYW1lXSkge1xuICAgIGxvY2FsZUZhbWlsaWVzW25hbWVdLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgIGRlZmluZUxvY2FsZSh4Lm5hbWUsIHguY29uZmlnKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGJhY2t3YXJkcyBjb21wYXQgZm9yIG5vdzogYWxzbyBzZXQgdGhlIGxvY2FsZVxuICAvLyBtYWtlIHN1cmUgd2Ugc2V0IHRoZSBsb2NhbGUgQUZURVIgYWxsIGNoaWxkIGxvY2FsZXMgaGF2ZSBiZWVuXG4gIC8vIGNyZWF0ZWQsIHNvIHdlIHdvbid0IGVuZCB1cCB3aXRoIHRoZSBjaGlsZCBsb2NhbGUgc2V0LlxuICBnZXRTZXRHbG9iYWxMb2NhbGUobmFtZSk7XG5cblxuICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxvY2FsZShuYW1lOiBzdHJpbmcsIGNvbmZpZz86IExvY2FsZURhdGEpOiBMb2NhbGUge1xuICBsZXQgX2NvbmZpZyA9IGNvbmZpZztcblxuICBpZiAoX2NvbmZpZyAhPSBudWxsKSB7XG4gICAgbGV0IHBhcmVudENvbmZpZyA9IGJhc2VDb25maWc7XG4gICAgLy8gTUVSR0VcbiAgICBjb25zdCB0bXBMb2NhbGUgPSBsb2FkTG9jYWxlKG5hbWUpO1xuICAgIGlmICh0bXBMb2NhbGUgIT0gbnVsbCkge1xuICAgICAgcGFyZW50Q29uZmlnID0gdG1wTG9jYWxlLl9jb25maWc7XG4gICAgfVxuICAgIF9jb25maWcgPSBtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnLCBfY29uZmlnKTtcbiAgICBjb25zdCBsb2NhbGUgPSBuZXcgTG9jYWxlKF9jb25maWcpO1xuICAgIGxvY2FsZS5wYXJlbnRMb2NhbGUgPSBsb2NhbGVzW25hbWVdO1xuICAgIGxvY2FsZXNbbmFtZV0gPSBsb2NhbGU7XG5cbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0IGZvciBub3c6IGFsc28gc2V0IHRoZSBsb2NhbGVcbiAgICBnZXRTZXRHbG9iYWxMb2NhbGUobmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gcGFzcyBudWxsIGZvciBjb25maWcgdG8gdW51cGRhdGUsIHVzZWZ1bCBmb3IgdGVzdHNcbiAgICBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsKSB7XG4gICAgICBpZiAobG9jYWxlc1tuYW1lXS5wYXJlbnRMb2NhbGUgIT0gbnVsbCkge1xuICAgICAgICBsb2NhbGVzW25hbWVdID0gbG9jYWxlc1tuYW1lXS5wYXJlbnRMb2NhbGU7XG4gICAgICB9IGVsc2UgaWYgKGxvY2FsZXNbbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgbG9jYWxlc1tuYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcbn1cblxuLy8gcmV0dXJucyBsb2NhbGUgZGF0YVxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsZShrZXk/OiBzdHJpbmcgfCBzdHJpbmdbXSk6IExvY2FsZSB7XG4gIGlmICgha2V5KSB7XG4gICAgcmV0dXJuIGdsb2JhbExvY2FsZTtcbiAgfVxuICAvLyBsZXQgbG9jYWxlO1xuICBjb25zdCBfa2V5ID0gaXNBcnJheShrZXkpID8ga2V5IDogW2tleV07XG5cbiAgcmV0dXJuIGNob29zZUxvY2FsZShfa2V5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RMb2NhbGVzKCk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGxvY2FsZXMpO1xufVxuXG4vLyBkZWZpbmUgZGVmYXVsdCBsb2NhbGVcbmdldFNldEdsb2JhbExvY2FsZSgnZW4nLCB7XG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfSh0aHxzdHxuZHxyZCkvLFxuICBvcmRpbmFsKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBiID0gbnVtICUgMTA7XG4gICAgY29uc3Qgb3V0cHV0ID1cbiAgICAgIHRvSW50KChudW0gJSAxMDApIC8gMTApID09PSAxXG4gICAgICAgID8gJ3RoJ1xuICAgICAgICA6IGIgPT09IDEgPyAnc3QnIDogYiA9PT0gMiA/ICduZCcgOiBiID09PSAzID8gJ3JkJyA6ICd0aCc7XG5cbiAgICByZXR1cm4gbnVtICsgb3V0cHV0O1xuICB9XG59KTtcbiIsImltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgY3JlYXRlRHVyYXRpb24gfSBmcm9tICcuL2NyZWF0ZSc7XG5pbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgRGF0ZU9iamVjdCB9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3Qgb3JkZXJpbmc6IChrZXlvZiBEYXRlT2JqZWN0KVtdID0gWyd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXknLCAnaG91cnMnLCAnbWludXRlcycsICdzZWNvbmRzJywgJ21pbGxpc2Vjb25kcyddO1xuY29uc3Qgb3JkZXJpbmdIYXNoID0gb3JkZXJpbmcucmVkdWNlKChtZW06IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9LCBvcmRlcikgPT4ge1xuICBtZW1bb3JkZXJdID0gdHJ1ZTtcblxuICByZXR1cm4gbWVtO1xufSwge30pO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEdXJhdGlvblZhbGlkKGR1cmF0aW9uOiBQYXJ0aWFsPERhdGVPYmplY3Q+KTogYm9vbGVhbiB7XG4gIGNvbnN0IGR1cmF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGR1cmF0aW9uKTtcbiAgaWYgKGR1cmF0aW9uS2V5c1xuICAgICAgLnNvbWUoKGtleToga2V5b2YgRGF0ZU9iamVjdCkgPT4ge1xuICAgICAgICByZXR1cm4gKGtleSBpbiBvcmRlcmluZ0hhc2gpXG4gICAgICAgICAgJiYgZHVyYXRpb25ba2V5XSA9PT0gbnVsbFxuICAgICAgICAgIHx8IGlzTmFOKGR1cmF0aW9uW2tleV0pO1xuICAgICAgfSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gZm9yIChsZXQga2V5IGluIGR1cmF0aW9uKSB7XG4gIC8vICAgaWYgKCEoaW5kZXhPZi5jYWxsKG9yZGVyaW5nLCBrZXkpICE9PSAtMSAmJiAoZHVyYXRpb25ba2V5XSA9PSBudWxsIHx8ICFpc05hTihkdXJhdGlvbltrZXldKSkpKSB7XG4gIC8vICAgICByZXR1cm4gZmFsc2U7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgbGV0IHVuaXRIYXNEZWNpbWFsID0gZmFsc2U7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb3JkZXJpbmcubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoZHVyYXRpb25bb3JkZXJpbmdbaV1dKSB7XG4gICAgICAvLyBvbmx5IGFsbG93IG5vbi1pbnRlZ2VycyBmb3Igc21hbGxlc3QgdW5pdFxuICAgICAgaWYgKHVuaXRIYXNEZWNpbWFsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChkdXJhdGlvbltvcmRlcmluZ1tpXV0gIT09IHRvSW50KGR1cmF0aW9uW29yZGVyaW5nW2ldXSkpIHtcbiAgICAgICAgdW5pdEhhc0RlY2ltYWwgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gaXNWYWxpZCgpIHtcbi8vICAgcmV0dXJuIHRoaXMuX2lzVmFsaWQ7XG4vLyB9XG4vL1xuLy8gZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUludmFsaWQoKTogRHVyYXRpb24ge1xuLy8gICByZXR1cm4gY3JlYXRlRHVyYXRpb24oTmFOKTtcbi8vIH1cbiIsImV4cG9ydCBmdW5jdGlvbiBhYnNDZWlsIChudW1iZXI6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5mbG9vcihudW1iZXIpIDogTWF0aC5jZWlsKG51bWJlcik7XG59XG4iLCJpbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgYWJzRmxvb3IgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBhYnNDZWlsIH0gZnJvbSAnLi4vdXRpbHMvYWJzLWNlaWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnViYmxlKGR1cjogRHVyYXRpb24pOiBEdXJhdGlvbiB7XG4gIGxldCBtaWxsaXNlY29uZHMgPSBkdXIuX21pbGxpc2Vjb25kcztcbiAgbGV0IGRheXMgPSBkdXIuX2RheXM7XG4gIGxldCBtb250aHMgPSBkdXIuX21vbnRocztcbiAgY29uc3QgZGF0YSA9IGR1ci5fZGF0YTtcblxuICAvLyBpZiB3ZSBoYXZlIGEgbWl4IG9mIHBvc2l0aXZlIGFuZCBuZWdhdGl2ZSB2YWx1ZXMsIGJ1YmJsZSBkb3duIGZpcnN0XG4gIC8vIGNoZWNrOiBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMjE2NlxuICBpZiAoISgobWlsbGlzZWNvbmRzID49IDAgJiYgZGF5cyA+PSAwICYmIG1vbnRocyA+PSAwKSB8fFxuICAgICAgKG1pbGxpc2Vjb25kcyA8PSAwICYmIGRheXMgPD0gMCAmJiBtb250aHMgPD0gMCkpKSB7XG4gICAgbWlsbGlzZWNvbmRzICs9IGFic0NlaWwobW9udGhzVG9EYXlzKG1vbnRocykgKyBkYXlzKSAqIDg2NGU1O1xuICAgIGRheXMgPSAwO1xuICAgIG1vbnRocyA9IDA7XG4gIH1cblxuICAvLyBUaGUgZm9sbG93aW5nIGNvZGUgYnViYmxlcyB1cCB2YWx1ZXMsIHNlZSB0aGUgdGVzdHMgZm9yXG4gIC8vIGV4YW1wbGVzIG9mIHdoYXQgdGhhdCBtZWFucy5cbiAgZGF0YS5taWxsaXNlY29uZHMgPSBtaWxsaXNlY29uZHMgJSAxMDAwO1xuXG4gIGNvbnN0IHNlY29uZHMgPSBhYnNGbG9vcihtaWxsaXNlY29uZHMgLyAxMDAwKTtcbiAgZGF0YS5zZWNvbmRzID0gc2Vjb25kcyAlIDYwO1xuXG4gIGNvbnN0IG1pbnV0ZXMgPSBhYnNGbG9vcihzZWNvbmRzIC8gNjApO1xuICBkYXRhLm1pbnV0ZXMgPSBtaW51dGVzICUgNjA7XG5cbiAgY29uc3QgaG91cnMgPSBhYnNGbG9vcihtaW51dGVzIC8gNjApO1xuICBkYXRhLmhvdXJzID0gaG91cnMgJSAyNDtcblxuICBkYXlzICs9IGFic0Zsb29yKGhvdXJzIC8gMjQpO1xuXG4gIC8vIGNvbnZlcnQgZGF5cyB0byBtb250aHNcbiAgY29uc3QgbW9udGhzRnJvbURheXMgPSBhYnNGbG9vcihkYXlzVG9Nb250aHMoZGF5cykpO1xuICBtb250aHMgKz0gbW9udGhzRnJvbURheXM7XG4gIGRheXMgLT0gYWJzQ2VpbChtb250aHNUb0RheXMobW9udGhzRnJvbURheXMpKTtcblxuICAvLyAxMiBtb250aHMgLT4gMSB5ZWFyXG4gIGNvbnN0IHllYXJzID0gYWJzRmxvb3IobW9udGhzIC8gMTIpO1xuICBtb250aHMgJT0gMTI7XG5cbiAgZGF0YS5kYXkgPSBkYXlzO1xuICBkYXRhLm1vbnRoID0gbW9udGhzO1xuICBkYXRhLnllYXIgPSB5ZWFycztcblxuICByZXR1cm4gZHVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF5c1RvTW9udGhzKGRheTogbnVtYmVyKTogbnVtYmVyIHtcbiAgLy8gNDAwIHllYXJzIGhhdmUgMTQ2MDk3IGRheXMgKHRha2luZyBpbnRvIGFjY291bnQgbGVhcCB5ZWFyIHJ1bGVzKVxuICAvLyA0MDAgeWVhcnMgaGF2ZSAxMiBtb250aHMgPT09IDQ4MDBcbiAgcmV0dXJuIGRheSAqIDQ4MDAgLyAxNDYwOTc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb250aHNUb0RheXMobW9udGg6IG51bWJlcik6IG51bWJlciB7XG4gIC8vIHRoZSByZXZlcnNlIG9mIGRheXNUb01vbnRoc1xuICByZXR1cm4gbW9udGggKiAxNDYwOTcgLyA0ODAwO1xufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y3ljbG9tYXRpYy1jb21wbGV4aXR5XG5pbXBvcnQgeyBjcmVhdGVEdXJhdGlvbiB9IGZyb20gJy4vY3JlYXRlJztcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcblxubGV0IHJvdW5kID0gTWF0aC5yb3VuZDtcbmNvbnN0IHRocmVzaG9sZHM6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7XG4gIHNzOiA0NCwgICAgICAgICAvLyBhIGZldyBzZWNvbmRzIHRvIHNlY29uZHNcbiAgczogNDUsICAgICAgICAgLy8gc2Vjb25kcyB0byBtaW51dGVcbiAgbTogNDUsICAgICAgICAgLy8gbWludXRlcyB0byBob3VyXG4gIGg6IDIyLCAgICAgICAgIC8vIGhvdXJzIHRvIGRheVxuICBkOiAyNiwgICAgICAgICAvLyBkYXlzIHRvIG1vbnRoXG4gIE06IDExICAgICAgICAgIC8vIG1vbnRocyB0byB5ZWFyXG59O1xuXG4vLyBoZWxwZXIgZnVuY3Rpb24gZm9yIG1vbWVudC5mbi5mcm9tLCBtb21lbnQuZm4uZnJvbU5vdywgYW5kIG1vbWVudC5kdXJhdGlvbi5mbi5odW1hbml6ZVxuZnVuY3Rpb24gc3Vic3RpdHV0ZVRpbWVBZ28oc3RyOiAnZnV0dXJlJyB8ICdwYXN0JywgbnVtOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRob3V0U3VmZml4OiBib29sZWFuLCBpc0Z1dHVyZTogYm9vbGVhbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZTogTG9jYWxlKTogc3RyaW5nIHtcbiAgcmV0dXJuIGxvY2FsZS5yZWxhdGl2ZVRpbWUobnVtIHx8IDEsICEhd2l0aG91dFN1ZmZpeCwgc3RyLCBpc0Z1dHVyZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWxhdGl2ZVRpbWUocG9zTmVnRHVyYXRpb246IER1cmF0aW9uLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBsb2NhbGU6IExvY2FsZSk6IHN0cmluZyB7XG4gIGNvbnN0IGR1cmF0aW9uID0gY3JlYXRlRHVyYXRpb24ocG9zTmVnRHVyYXRpb24pLmFicygpO1xuICBjb25zdCBzZWNvbmRzID0gcm91bmQoZHVyYXRpb24uYXMoJ3MnKSk7XG4gIGNvbnN0IG1pbnV0ZXMgPSByb3VuZChkdXJhdGlvbi5hcygnbScpKTtcbiAgY29uc3QgaG91cnMgPSByb3VuZChkdXJhdGlvbi5hcygnaCcpKTtcbiAgY29uc3QgZGF5cyA9IHJvdW5kKGR1cmF0aW9uLmFzKCdkJykpO1xuICBjb25zdCBtb250aHMgPSByb3VuZChkdXJhdGlvbi5hcygnTScpKTtcbiAgY29uc3QgeWVhcnMgPSByb3VuZChkdXJhdGlvbi5hcygneScpKTtcblxuICBjb25zdCBhOiBbc3RyaW5nXSB8IFtzdHJpbmcsIG51bWJlcl0gPVxuICAgIHNlY29uZHMgPD0gdGhyZXNob2xkcy5zcyAmJiBbJ3MnLCBzZWNvbmRzXSB8fFxuICAgIHNlY29uZHMgPCB0aHJlc2hvbGRzLnMgJiYgWydzcycsIHNlY29uZHNdIHx8XG4gICAgbWludXRlcyA8PSAxICYmIFsnbSddIHx8XG4gICAgbWludXRlcyA8IHRocmVzaG9sZHMubSAmJiBbJ21tJywgbWludXRlc10gfHxcbiAgICBob3VycyA8PSAxICYmIFsnaCddIHx8XG4gICAgaG91cnMgPCB0aHJlc2hvbGRzLmggJiYgWydoaCcsIGhvdXJzXSB8fFxuICAgIGRheXMgPD0gMSAmJiBbJ2QnXSB8fFxuICAgIGRheXMgPCB0aHJlc2hvbGRzLmQgJiYgWydkZCcsIGRheXNdIHx8XG4gICAgbW9udGhzIDw9IDEgJiYgWydNJ10gfHxcbiAgICBtb250aHMgPCB0aHJlc2hvbGRzLk0gJiYgWydNTScsIG1vbnRoc10gfHxcbiAgICB5ZWFycyA8PSAxICYmIFsneSddIHx8IFsneXknLCB5ZWFyc107XG5cbiAgY29uc3QgYjogW3N0cmluZywgbnVtYmVyIHwgc3RyaW5nLCBib29sZWFuLCBib29sZWFuLCBMb2NhbGVdID1cbiAgICBbYVswXSwgYVsxXSwgd2l0aG91dFN1ZmZpeCwgK3Bvc05lZ0R1cmF0aW9uID4gMCwgbG9jYWxlXTtcbiAgLy8gYVsyXSA9IHdpdGhvdXRTdWZmaXg7XG4gIC8vIGFbM10gPSArcG9zTmVnRHVyYXRpb24gPiAwO1xuICAvLyBhWzRdID0gbG9jYWxlO1xuXG4gIHJldHVybiBzdWJzdGl0dXRlVGltZUFnby5hcHBseShudWxsLCBiKTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIHNldCB0aGUgcm91bmRpbmcgZnVuY3Rpb24gZm9yIHJlbGF0aXZlIHRpbWUgc3RyaW5nc1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNldFJlbGF0aXZlVGltZVJvdW5kaW5nKHJvdW5kaW5nRnVuY3Rpb246IGFueSk6IGJvb2xlYW4gfCBGdW5jdGlvbiB7XG4gIGlmIChyb3VuZGluZ0Z1bmN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcm91bmQ7XG4gIH1cbiAgaWYgKHR5cGVvZihyb3VuZGluZ0Z1bmN0aW9uKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJvdW5kID0gcm91bmRpbmdGdW5jdGlvbjtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gc2V0IGEgdGhyZXNob2xkIGZvciByZWxhdGl2ZSB0aW1lIHN0cmluZ3NcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRSZWxhdGl2ZVRpbWVUaHJlc2hvbGQodGhyZXNob2xkOiBzdHJpbmcsIGxpbWl0OiBudW1iZXIpOiBib29sZWFuIHwgbnVtYmVyIHtcbiAgaWYgKHRocmVzaG9sZHNbdGhyZXNob2xkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChsaW1pdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRocmVzaG9sZHNbdGhyZXNob2xkXTtcbiAgfVxuICB0aHJlc2hvbGRzW3RocmVzaG9sZF0gPSBsaW1pdDtcbiAgaWYgKHRocmVzaG9sZCA9PT0gJ3MnKSB7XG4gICAgdGhyZXNob2xkcy5zcyA9IGxpbWl0IC0gMTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gaHVtYW5pemUod2l0aFN1ZmZpeCkge1xuLy8gICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4vLyAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4vLyAgIH1cbi8vXG4vLyAgIGNvbnN0IGxvY2FsZSA9IHRoaXMubG9jYWxlRGF0YSgpO1xuLy8gICBsZXQgb3V0cHV0ID0gcmVsYXRpdmVUaW1lKHRoaXMsICF3aXRoU3VmZml4LCBsb2NhbGUpO1xuLy9cbi8vICAgaWYgKHdpdGhTdWZmaXgpIHtcbi8vICAgICBvdXRwdXQgPSBsb2NhbGUucGFzdEZ1dHVyZSgrdGhpcywgb3V0cHV0KTtcbi8vICAgfVxuLy9cbi8vICAgcmV0dXJuIGxvY2FsZS5wb3N0Zm9ybWF0KG91dHB1dCk7XG4vLyB9XG4iLCJpbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IGlzRHVyYXRpb25WYWxpZCB9IGZyb20gJy4vdmFsaWQnO1xuaW1wb3J0IHsgYnViYmxlLCBkYXlzVG9Nb250aHMsIG1vbnRoc1RvRGF5cyB9IGZyb20gJy4vYnViYmxlJztcbmltcG9ydCB7IERhdGVPYmplY3QgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IG5vcm1hbGl6ZVVuaXRzIH0gZnJvbSAnLi4vdW5pdHMvYWxpYXNlcyc7XG5pbXBvcnQgeyByZWxhdGl2ZVRpbWUgfSBmcm9tICcuL2h1bWFuaXplJztcbmltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuXG5leHBvcnQgY2xhc3MgRHVyYXRpb24ge1xuICBfbWlsbGlzZWNvbmRzOiBudW1iZXI7XG4gIF9kYXlzOiBudW1iZXI7XG4gIF9tb250aHM6IG51bWJlcjtcbiAgX2RhdGE6IFBhcnRpYWw8RGF0ZU9iamVjdD4gPSB7fTtcbiAgX2xvY2FsZTogTG9jYWxlID0gZ2V0TG9jYWxlKCk7XG4gIF9pc1ZhbGlkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGR1cmF0aW9uOiBQYXJ0aWFsPERhdGVPYmplY3Q+LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnID0ge30pIHtcbiAgICB0aGlzLl9sb2NhbGUgPSBjb25maWcgJiYgY29uZmlnLl9sb2NhbGUgfHwgZ2V0TG9jYWxlKCk7XG4gICAgLy8gY29uc3Qgbm9ybWFsaXplZElucHV0ID0gbm9ybWFsaXplT2JqZWN0VW5pdHMoZHVyYXRpb24pO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRJbnB1dCA9IGR1cmF0aW9uO1xuICAgIGNvbnN0IHllYXJzID0gbm9ybWFsaXplZElucHV0LnllYXIgfHwgMDtcbiAgICBjb25zdCBxdWFydGVycyA9IG5vcm1hbGl6ZWRJbnB1dC5xdWFydGVyIHx8IDA7XG4gICAgY29uc3QgbW9udGhzID0gbm9ybWFsaXplZElucHV0Lm1vbnRoIHx8IDA7XG4gICAgY29uc3Qgd2Vla3MgPSBub3JtYWxpemVkSW5wdXQud2VlayB8fCAwO1xuICAgIGNvbnN0IGRheXMgPSBub3JtYWxpemVkSW5wdXQuZGF5IHx8IDA7XG4gICAgY29uc3QgaG91cnMgPSBub3JtYWxpemVkSW5wdXQuaG91cnMgfHwgMDtcbiAgICBjb25zdCBtaW51dGVzID0gbm9ybWFsaXplZElucHV0Lm1pbnV0ZXMgfHwgMDtcbiAgICBjb25zdCBzZWNvbmRzID0gbm9ybWFsaXplZElucHV0LnNlY29uZHMgfHwgMDtcbiAgICBjb25zdCBtaWxsaXNlY29uZHMgPSBub3JtYWxpemVkSW5wdXQubWlsbGlzZWNvbmRzIHx8IDA7XG5cbiAgICB0aGlzLl9pc1ZhbGlkID0gaXNEdXJhdGlvblZhbGlkKG5vcm1hbGl6ZWRJbnB1dCk7XG5cbiAgICAvLyByZXByZXNlbnRhdGlvbiBmb3IgZGF0ZUFkZFJlbW92ZVxuICAgIHRoaXMuX21pbGxpc2Vjb25kcyA9ICttaWxsaXNlY29uZHMgK1xuICAgICAgc2Vjb25kcyAqIDEwMDAgK1xuICAgICAgbWludXRlcyAqIDYwICogMTAwMCArIC8vIDEwMDAgKiA2MFxuICAgICAgaG91cnMgKiAxMDAwICogNjAgKiA2MDsgLy8gdXNpbmcgMTAwMCAqIDYwICogNjBcbiAgICAvLyBpbnN0ZWFkIG9mIDM2ZTUgdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgcm91bmRpbmcgZXJyb3JzIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8yOTc4XG4gICAgLy8gQmVjYXVzZSBvZiBkYXRlQWRkUmVtb3ZlIHRyZWF0cyAyNCBob3VycyBhcyBkaWZmZXJlbnQgZnJvbSBhXG4gICAgLy8gZGF5IHdoZW4gd29ya2luZyBhcm91bmQgRFNULCB3ZSBuZWVkIHRvIHN0b3JlIHRoZW0gc2VwYXJhdGVseVxuICAgIHRoaXMuX2RheXMgPSArZGF5cyArXG4gICAgICB3ZWVrcyAqIDc7XG4gICAgLy8gSXQgaXMgaW1wb3NzaWJsZSB0byB0cmFuc2xhdGUgbW9udGhzIGludG8gZGF5cyB3aXRob3V0IGtub3dpbmdcbiAgICAvLyB3aGljaCBtb250aHMgeW91IGFyZSBhcmUgdGFsa2luZyBhYm91dCwgc28gd2UgaGF2ZSB0byBzdG9yZVxuICAgIC8vIGl0IHNlcGFyYXRlbHkuXG4gICAgdGhpcy5fbW9udGhzID0gK21vbnRocyArXG4gICAgICBxdWFydGVycyAqIDMgK1xuICAgICAgeWVhcnMgKiAxMjtcblxuICAgIC8vIHRoaXMuX2RhdGEgPSB7fTtcblxuICAgIC8vIHRoaXMuX2xvY2FsZSA9IGdldExvY2FsZSgpO1xuXG4gICAgLy8gdGhpcy5fYnViYmxlKCk7XG4gICAgcmV0dXJuIGJ1YmJsZSh0aGlzKTtcbiAgfVxuXG4gIGlzVmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzVmFsaWQ7XG4gIH1cblxuICBodW1hbml6ZSh3aXRoU3VmZml4PzogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKGBUT0RPOiBpbXBsZW1lbnRgKTtcblxuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2NhbGUgPSB0aGlzLmxvY2FsZURhdGEoKTtcbiAgICBsZXQgb3V0cHV0ID0gcmVsYXRpdmVUaW1lKHRoaXMsICF3aXRoU3VmZml4LCBsb2NhbGUpO1xuXG4gICAgaWYgKHdpdGhTdWZmaXgpIHtcbiAgICAgIG91dHB1dCA9IGxvY2FsZS5wYXN0RnV0dXJlKCt0aGlzLCBvdXRwdXQpO1xuICAgIH1cblxuICAgIHJldHVybiBsb2NhbGUucG9zdGZvcm1hdChvdXRwdXQpO1xuICB9XG5cbiAgbG9jYWxlRGF0YSgpOiBMb2NhbGUge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG4gIH1cblxuICBsb2NhbGUoKTogc3RyaW5nO1xuICBsb2NhbGUobG9jYWxlS2V5OiBzdHJpbmcpOiBEdXJhdGlvbjtcbiAgbG9jYWxlKGxvY2FsZUtleT86IHN0cmluZyk6IER1cmF0aW9uIHwgc3RyaW5nIHtcbiAgICBpZiAoIWxvY2FsZUtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsZS5fYWJicjtcbiAgICB9XG5cbiAgICB0aGlzLl9sb2NhbGUgPSBnZXRMb2NhbGUobG9jYWxlS2V5KSB8fCB0aGlzLl9sb2NhbGU7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG5cbiAgYWJzKCk6IER1cmF0aW9uIHtcbiAgICBjb25zdCBtYXRoQWJzID0gTWF0aC5hYnM7XG5cbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YTtcblxuICAgIHRoaXMuX21pbGxpc2Vjb25kcyA9IG1hdGhBYnModGhpcy5fbWlsbGlzZWNvbmRzKTtcbiAgICB0aGlzLl9kYXlzID0gbWF0aEFicyh0aGlzLl9kYXlzKTtcbiAgICB0aGlzLl9tb250aHMgPSBtYXRoQWJzKHRoaXMuX21vbnRocyk7XG5cbiAgICBkYXRhLm1pbGxpc2Vjb25kcyA9IG1hdGhBYnMoZGF0YS5taWxsaXNlY29uZHMpO1xuICAgIGRhdGEuc2Vjb25kcyA9IG1hdGhBYnMoZGF0YS5zZWNvbmRzKTtcbiAgICBkYXRhLm1pbnV0ZXMgPSBtYXRoQWJzKGRhdGEubWludXRlcyk7XG4gICAgZGF0YS5ob3VycyA9IG1hdGhBYnMoZGF0YS5ob3Vycyk7XG4gICAgZGF0YS5tb250aCA9IG1hdGhBYnMoZGF0YS5tb250aCk7XG4gICAgZGF0YS55ZWFyID0gbWF0aEFicyhkYXRhLnllYXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhcyhfdW5pdHM6IHN0cmluZyk6IG51bWJlciB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgbGV0IGRheXM7XG4gICAgbGV0IG1vbnRocztcbiAgICBjb25zdCBtaWxsaXNlY29uZHMgPSB0aGlzLl9taWxsaXNlY29uZHM7XG5cbiAgICBjb25zdCB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKF91bml0cyk7XG5cbiAgICBpZiAodW5pdHMgPT09ICdtb250aCcgfHwgdW5pdHMgPT09ICd5ZWFyJykge1xuICAgICAgZGF5cyA9IHRoaXMuX2RheXMgKyBtaWxsaXNlY29uZHMgLyA4NjRlNTtcbiAgICAgIG1vbnRocyA9IHRoaXMuX21vbnRocyArIGRheXNUb01vbnRocyhkYXlzKTtcblxuICAgICAgcmV0dXJuIHVuaXRzID09PSAnbW9udGgnID8gbW9udGhzIDogbW9udGhzIC8gMTI7XG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIG1pbGxpc2Vjb25kcyBzZXBhcmF0ZWx5IGJlY2F1c2Ugb2YgZmxvYXRpbmcgcG9pbnQgbWF0aCBlcnJvcnMgKGlzc3VlICMxODY3KVxuICAgIGRheXMgPSB0aGlzLl9kYXlzICsgTWF0aC5yb3VuZChtb250aHNUb0RheXModGhpcy5fbW9udGhzKSk7XG4gICAgc3dpdGNoICh1bml0cykge1xuICAgICAgY2FzZSAnd2VlaycgICA6XG4gICAgICAgIHJldHVybiBkYXlzIC8gNyArIG1pbGxpc2Vjb25kcyAvIDYwNDhlNTtcbiAgICAgIGNhc2UgJ2RheScgICAgOlxuICAgICAgICByZXR1cm4gZGF5cyArIG1pbGxpc2Vjb25kcyAvIDg2NGU1O1xuICAgICAgY2FzZSAnaG91cnMnICAgOlxuICAgICAgICByZXR1cm4gZGF5cyAqIDI0ICsgbWlsbGlzZWNvbmRzIC8gMzZlNTtcbiAgICAgIGNhc2UgJ21pbnV0ZXMnIDpcbiAgICAgICAgcmV0dXJuIGRheXMgKiAxNDQwICsgbWlsbGlzZWNvbmRzIC8gNmU0O1xuICAgICAgY2FzZSAnc2Vjb25kcycgOlxuICAgICAgICByZXR1cm4gZGF5cyAqIDg2NDAwICsgbWlsbGlzZWNvbmRzIC8gMTAwMDtcbiAgICAgIC8vIE1hdGguZmxvb3IgcHJldmVudHMgZmxvYXRpbmcgcG9pbnQgbWF0aCBlcnJvcnMgaGVyZVxuICAgICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoZGF5cyAqIDg2NGU1KSArIG1pbGxpc2Vjb25kcztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biB1bml0ICR7dW5pdHN9YCk7XG4gICAgfVxuICB9XG5cbiAgdmFsdWVPZiAoKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fbWlsbGlzZWNvbmRzICtcbiAgICAgIHRoaXMuX2RheXMgKiA4NjRlNSArXG4gICAgICAodGhpcy5fbW9udGhzICUgMTIpICogMjU5MmU2ICtcbiAgICAgIHRvSW50KHRoaXMuX21vbnRocyAvIDEyKSAqIDMxNTM2ZTZcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R1cmF0aW9uKG9iajogYW55KTogb2JqIGlzIER1cmF0aW9uIHtcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIER1cmF0aW9uO1xufVxuIiwiaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgZ2V0UGFyc2luZ0ZsYWdzIH0gZnJvbSAnLi9wYXJzaW5nLWZsYWdzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWQoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IGJvb2xlYW4ge1xuICBpZiAoY29uZmlnLl9pc1ZhbGlkID09IG51bGwpIHtcbiAgICBjb25zdCBmbGFncyA9IGdldFBhcnNpbmdGbGFncyhjb25maWcpO1xuICAgIGNvbnN0IHBhcnNlZFBhcnRzID0gQXJyYXkucHJvdG90eXBlLnNvbWUuY2FsbChmbGFncy5wYXJzZWREYXRlUGFydHMsIGZ1bmN0aW9uIChpOiBudW1iZXIpIHtcbiAgICAgIHJldHVybiBpICE9IG51bGw7XG4gICAgfSk7XG4gICAgbGV0IGlzTm93VmFsaWQgPSAhaXNOYU4oY29uZmlnLl9kICYmIGNvbmZpZy5fZC5nZXRUaW1lKCkpICYmXG4gICAgICBmbGFncy5vdmVyZmxvdyA8IDAgJiZcbiAgICAgICFmbGFncy5lbXB0eSAmJlxuICAgICAgIWZsYWdzLmludmFsaWRNb250aCAmJlxuICAgICAgIWZsYWdzLmludmFsaWRXZWVrZGF5ICYmXG4gICAgICAhZmxhZ3Mud2Vla2RheU1pc21hdGNoICYmXG4gICAgICAhZmxhZ3MubnVsbElucHV0ICYmXG4gICAgICAhZmxhZ3MuaW52YWxpZEZvcm1hdCAmJlxuICAgICAgIWZsYWdzLnVzZXJJbnZhbGlkYXRlZCAmJlxuICAgICAgKCFmbGFncy5tZXJpZGllbSB8fCAoZmxhZ3MubWVyaWRpZW0gJiYgcGFyc2VkUGFydHMpKTtcblxuICAgIGlmIChjb25maWcuX3N0cmljdCkge1xuICAgICAgaXNOb3dWYWxpZCA9IGlzTm93VmFsaWQgJiZcbiAgICAgICAgZmxhZ3MuY2hhcnNMZWZ0T3ZlciA9PT0gMCAmJlxuICAgICAgICBmbGFncy51bnVzZWRUb2tlbnMubGVuZ3RoID09PSAwICYmXG4gICAgICAgIGZsYWdzLmJpZ0hvdXIgPT09IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoT2JqZWN0LmlzRnJvemVuID09IG51bGwgfHwgIU9iamVjdC5pc0Zyb3plbihjb25maWcpKSB7XG4gICAgICBjb25maWcuX2lzVmFsaWQgPSBpc05vd1ZhbGlkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaXNOb3dWYWxpZDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLl9pc1ZhbGlkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW52YWxpZChjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnLCBmbGFncz86IHsgbnVsbElucHV0OiBib29sZWFuIH0pOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIGNvbmZpZy5fZCA9IG5ldyBEYXRlKE5hTik7XG4gIE9iamVjdC5hc3NpZ24oZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZyksIGZsYWdzIHx8IHsgdXNlckludmFsaWRhdGVkOiB0cnVlIH0pO1xuXG4gIHJldHVybiBjb25maWc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXJrSW52YWxpZChjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcblxuICByZXR1cm4gY29uZmlnO1xufVxuIiwiLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQsIGRlZmF1bHRMb2NhbGVXZWVrZGF5c1Nob3J0IH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBEYXRlQXJyYXkgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4vcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQgfSBmcm9tICcuL2Zyb20tc3RyaW5nLWFuZC1mb3JtYXQnO1xuaW1wb3J0IHsgY3JlYXRlVVRDRGF0ZSB9IGZyb20gJy4vZGF0ZS1mcm9tLWFycmF5JztcbmltcG9ydCB7IGNyZWF0ZUludmFsaWQsIG1hcmtJbnZhbGlkIH0gZnJvbSAnLi92YWxpZCc7XG5pbXBvcnQgeyBnZXRQYXJzaW5nRmxhZ3MgfSBmcm9tICcuL3BhcnNpbmctZmxhZ3MnO1xuXG4vLyBpc28gODYwMSByZWdleFxuLy8gMDAwMC0wMC0wMCAwMDAwLVcwMCBvciAwMDAwLVcwMC0wICsgVCArIDAwIG9yIDAwOjAwIG9yIDAwOjAwOjAwIG9yIDAwOjAwOjAwLjAwMCArICswMDowMCBvciArMDAwMCBvciArMDApXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmNvbnN0IGV4dGVuZGVkSXNvUmVnZXggPSAvXlxccyooKD86WystXVxcZHs2fXxcXGR7NH0pLSg/OlxcZFxcZC1cXGRcXGR8V1xcZFxcZC1cXGR8V1xcZFxcZHxcXGRcXGRcXGR8XFxkXFxkKSkoPzooVHwgKShcXGRcXGQoPzo6XFxkXFxkKD86OlxcZFxcZCg/OlsuLF1cXGQrKT8pPyk/KShbXFwrXFwtXVxcZFxcZCg/Ojo/XFxkXFxkKT98XFxzKlopPyk/JC87XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmNvbnN0IGJhc2ljSXNvUmVnZXggPSAvXlxccyooKD86WystXVxcZHs2fXxcXGR7NH0pKD86XFxkXFxkXFxkXFxkfFdcXGRcXGRcXGR8V1xcZFxcZHxcXGRcXGRcXGR8XFxkXFxkKSkoPzooVHwgKShcXGRcXGQoPzpcXGRcXGQoPzpcXGRcXGQoPzpbLixdXFxkKyk/KT8pPykoW1xcK1xcLV1cXGRcXGQoPzo6P1xcZFxcZCk/fFxccypaKT8pPyQvO1xuXG5jb25zdCB0elJlZ2V4ID0gL1p8WystXVxcZFxcZCg/Ojo/XFxkXFxkKT8vO1xuXG5jb25zdCBpc29EYXRlczogW3N0cmluZywgUmVnRXhwLCBib29sZWFuXVtdID0gW1xuICBbJ1lZWVlZWS1NTS1ERCcsIC9bKy1dXFxkezZ9LVxcZFxcZC1cXGRcXGQvLCB0cnVlXSxcbiAgWydZWVlZLU1NLUREJywgL1xcZHs0fS1cXGRcXGQtXFxkXFxkLywgdHJ1ZV0sXG4gIFsnR0dHRy1bV11XVy1FJywgL1xcZHs0fS1XXFxkXFxkLVxcZC8sIHRydWVdLFxuICBbJ0dHR0ctW1ddV1cnLCAvXFxkezR9LVdcXGRcXGQvLCBmYWxzZV0sXG4gIFsnWVlZWS1EREQnLCAvXFxkezR9LVxcZHszfS8sIHRydWVdLFxuICBbJ1lZWVktTU0nLCAvXFxkezR9LVxcZFxcZC8sIGZhbHNlXSxcbiAgWydZWVlZWVlNTUREJywgL1srLV1cXGR7MTB9LywgdHJ1ZV0sXG4gIFsnWVlZWU1NREQnLCAvXFxkezh9LywgdHJ1ZV0sXG4gIC8vIFlZWVlNTSBpcyBOT1QgYWxsb3dlZCBieSB0aGUgc3RhbmRhcmRcbiAgWydHR0dHW1ddV1dFJywgL1xcZHs0fVdcXGR7M30vLCB0cnVlXSxcbiAgWydHR0dHW1ddV1cnLCAvXFxkezR9V1xcZHsyfS8sIGZhbHNlXSxcbiAgWydZWVlZREREJywgL1xcZHs3fS8sIHRydWVdXG5dO1xuXG4vLyBpc28gdGltZSBmb3JtYXRzIGFuZCByZWdleGVzXG5jb25zdCBpc29UaW1lczogW3N0cmluZywgUmVnRXhwXVtdID0gW1xuICBbJ0hIOm1tOnNzLlNTU1MnLCAvXFxkXFxkOlxcZFxcZDpcXGRcXGRcXC5cXGQrL10sXG4gIFsnSEg6bW06c3MsU1NTUycsIC9cXGRcXGQ6XFxkXFxkOlxcZFxcZCxcXGQrL10sXG4gIFsnSEg6bW06c3MnLCAvXFxkXFxkOlxcZFxcZDpcXGRcXGQvXSxcbiAgWydISDptbScsIC9cXGRcXGQ6XFxkXFxkL10sXG4gIFsnSEhtbXNzLlNTU1MnLCAvXFxkXFxkXFxkXFxkXFxkXFxkXFwuXFxkKy9dLFxuICBbJ0hIbW1zcyxTU1NTJywgL1xcZFxcZFxcZFxcZFxcZFxcZCxcXGQrL10sXG4gIFsnSEhtbXNzJywgL1xcZFxcZFxcZFxcZFxcZFxcZC9dLFxuICBbJ0hIbW0nLCAvXFxkXFxkXFxkXFxkL10sXG4gIFsnSEgnLCAvXFxkXFxkL11cbl07XG5cbmNvbnN0IGFzcE5ldEpzb25SZWdleCA9IC9eXFwvP0RhdGVcXCgoXFwtP1xcZCspL2k7XG5cbmNvbnN0IG9ic09mZnNldHM6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7XG4gIFVUOiAwLFxuICBHTVQ6IDAsXG4gIEVEVDogLTQgKiA2MCxcbiAgRVNUOiAtNSAqIDYwLFxuICBDRFQ6IC01ICogNjAsXG4gIENTVDogLTYgKiA2MCxcbiAgTURUOiAtNiAqIDYwLFxuICBNU1Q6IC03ICogNjAsXG4gIFBEVDogLTcgKiA2MCxcbiAgUFNUOiAtOCAqIDYwXG59O1xuXG4vLyBSRkMgMjgyMiByZWdleDogRm9yIGRldGFpbHMgc2VlIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyODIyI3NlY3Rpb24tMy4zXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmNvbnN0IHJmYzI4MjIgPSAvXig/OihNb258VHVlfFdlZHxUaHV8RnJpfFNhdHxTdW4pLD9cXHMpPyhcXGR7MSwyfSlcXHMoSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpXFxzKFxcZHsyLDR9KVxccyhcXGRcXGQpOihcXGRcXGQpKD86OihcXGRcXGQpKT9cXHMoPzooVVR8R01UfFtFQ01QXVtTRF1UKXwoW1p6XSl8KFsrLV1cXGR7NH0pKSQvO1xuXG4vLyBkYXRlIGZyb20gaXNvIGZvcm1hdFxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0Zyb21JU08oY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgaWYgKCFpc1N0cmluZyhjb25maWcuX2kpKSB7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIGNvbnN0IGlucHV0ID0gY29uZmlnLl9pO1xuICBjb25zdCBtYXRjaCA9IGV4dGVuZGVkSXNvUmVnZXguZXhlYyhpbnB1dCkgfHwgYmFzaWNJc29SZWdleC5leGVjKGlucHV0KTtcblxuXG4gIGxldCBhbGxvd1RpbWU7XG4gIGxldCBkYXRlRm9ybWF0O1xuICBsZXQgdGltZUZvcm1hdDtcbiAgbGV0IHR6Rm9ybWF0O1xuXG4gIGlmICghbWF0Y2gpIHtcbiAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICAvLyBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pc28gPSB0cnVlO1xuICBsZXQgaTtcbiAgbGV0IGw7XG4gIGZvciAoaSA9IDAsIGwgPSBpc29EYXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoaXNvRGF0ZXNbaV1bMV0uZXhlYyhtYXRjaFsxXSkpIHtcbiAgICAgIGRhdGVGb3JtYXQgPSBpc29EYXRlc1tpXVswXTtcbiAgICAgIGFsbG93VGltZSA9IGlzb0RhdGVzW2ldWzJdICE9PSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRlRm9ybWF0ID09IG51bGwpIHtcbiAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBpZiAobWF0Y2hbM10pIHtcbiAgICBmb3IgKGkgPSAwLCBsID0gaXNvVGltZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoaXNvVGltZXNbaV1bMV0uZXhlYyhtYXRjaFszXSkpIHtcbiAgICAgICAgLy8gbWF0Y2hbMl0gc2hvdWxkIGJlICdUJyBvciBzcGFjZVxuICAgICAgICB0aW1lRm9ybWF0ID0gKG1hdGNoWzJdIHx8ICcgJykgKyBpc29UaW1lc1tpXVswXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRpbWVGb3JtYXQgPT0gbnVsbCkge1xuICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG5cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gIH1cbiAgaWYgKCFhbGxvd1RpbWUgJiYgdGltZUZvcm1hdCAhPSBudWxsKSB7XG4gICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgaWYgKG1hdGNoWzRdKSB7XG4gICAgaWYgKHR6UmVnZXguZXhlYyhtYXRjaFs0XSkpIHtcbiAgICAgIHR6Rm9ybWF0ID0gJ1onO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gIH1cblxuICBjb25maWcuX2YgPSBkYXRlRm9ybWF0ICsgKHRpbWVGb3JtYXQgfHwgJycpICsgKHR6Rm9ybWF0IHx8ICcnKTtcblxuICByZXR1cm4gY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdChjb25maWcpO1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmZ1bmN0aW9uIGV4dHJhY3RGcm9tUkZDMjgyMlN0cmluZ3MoeWVhclN0cjogc3RyaW5nLCBtb250aFN0cjogc3RyaW5nLCBkYXlTdHI6IHN0cmluZywgaG91clN0cjogc3RyaW5nLCBtaW51dGVTdHI6IHN0cmluZywgc2Vjb25kU3RyOiBzdHJpbmcpOiBEYXRlQXJyYXkge1xuICBjb25zdCByZXN1bHQgPSBbXG4gICAgdW50cnVuY2F0ZVllYXIoeWVhclN0ciksXG4gICAgZGVmYXVsdExvY2FsZU1vbnRoc1Nob3J0LmluZGV4T2YobW9udGhTdHIpLFxuICAgIHBhcnNlSW50KGRheVN0ciwgMTApLFxuICAgIHBhcnNlSW50KGhvdXJTdHIsIDEwKSxcbiAgICBwYXJzZUludChtaW51dGVTdHIsIDEwKVxuICBdO1xuXG4gIGlmIChzZWNvbmRTdHIpIHtcbiAgICByZXN1bHQucHVzaChwYXJzZUludChzZWNvbmRTdHIsIDEwKSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiB1bnRydW5jYXRlWWVhcih5ZWFyU3RyOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCB5ZWFyID0gcGFyc2VJbnQoeWVhclN0ciwgMTApO1xuXG4gIHJldHVybiB5ZWFyIDw9IDQ5ID8geWVhciArIDIwMDAgOiB5ZWFyO1xufVxuXG5mdW5jdGlvbiBwcmVwcm9jZXNzUkZDMjgyMihzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIFJlbW92ZSBjb21tZW50cyBhbmQgZm9sZGluZyB3aGl0ZXNwYWNlIGFuZCByZXBsYWNlIG11bHRpcGxlLXNwYWNlcyB3aXRoIGEgc2luZ2xlIHNwYWNlXG4gIHJldHVybiBzdHJcbiAgICAucmVwbGFjZSgvXFwoW14pXSpcXCl8W1xcblxcdF0vZywgJyAnKVxuICAgIC5yZXBsYWNlKC8oXFxzXFxzKykvZywgJyAnKS50cmltKCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrV2Vla2RheSh3ZWVrZGF5U3RyOiBzdHJpbmcsIHBhcnNlZElucHV0OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBib29sZWFuIHtcbiAgaWYgKHdlZWtkYXlTdHIpIHtcbiAgICAvLyBUT0RPOiBSZXBsYWNlIHRoZSB2YW5pbGxhIEpTIERhdGUgb2JqZWN0IHdpdGggYW4gaW5kZXBlbnRlbnQgZGF5LW9mLXdlZWsgY2hlY2suXG4gICAgY29uc3Qgd2Vla2RheVByb3ZpZGVkID0gZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQuaW5kZXhPZih3ZWVrZGF5U3RyKTtcbiAgICBjb25zdCB3ZWVrZGF5QWN0dWFsID0gbmV3IERhdGUocGFyc2VkSW5wdXRbMF0sIHBhcnNlZElucHV0WzFdLCBwYXJzZWRJbnB1dFsyXSkuZ2V0RGF5KCk7XG4gICAgaWYgKHdlZWtkYXlQcm92aWRlZCAhPT0gd2Vla2RheUFjdHVhbCkge1xuICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykud2Vla2RheU1pc21hdGNoID0gdHJ1ZTtcbiAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU9mZnNldChvYnNPZmZzZXQ6IHN0cmluZywgbWlsaXRhcnlPZmZzZXQ6IHN0cmluZywgbnVtT2Zmc2V0OiBzdHJpbmcpIHtcbiAgaWYgKG9ic09mZnNldCkge1xuICAgIHJldHVybiBvYnNPZmZzZXRzW29ic09mZnNldF07XG4gIH0gZWxzZSBpZiAobWlsaXRhcnlPZmZzZXQpIHtcbiAgICAvLyB0aGUgb25seSBhbGxvd2VkIG1pbGl0YXJ5IHR6IGlzIFpcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBobSA9IHBhcnNlSW50KG51bU9mZnNldCwgMTApO1xuICAgIGNvbnN0IG0gPSBobSAlIDEwMDtcbiAgICBjb25zdCBoID0gKGhtIC0gbSkgLyAxMDA7XG5cbiAgICByZXR1cm4gaCAqIDYwICsgbTtcbiAgfVxufVxuXG4vLyBkYXRlIGFuZCB0aW1lIGZyb20gcmVmIDI4MjIgZm9ybWF0XG5leHBvcnQgZnVuY3Rpb24gY29uZmlnRnJvbVJGQzI4MjIoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgaWYgKCFpc1N0cmluZyhjb25maWcuX2kpKSB7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIGNvbnN0IG1hdGNoID0gcmZjMjgyMi5leGVjKHByZXByb2Nlc3NSRkMyODIyKGNvbmZpZy5faSkpO1xuXG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm4gbWFya0ludmFsaWQoY29uZmlnKTtcbiAgfVxuXG4gIGNvbnN0IHBhcnNlZEFycmF5ID0gZXh0cmFjdEZyb21SRkMyODIyU3RyaW5ncyhtYXRjaFs0XSwgbWF0Y2hbM10sIG1hdGNoWzJdLCBtYXRjaFs1XSwgbWF0Y2hbNl0sIG1hdGNoWzddKTtcbiAgaWYgKCFjaGVja1dlZWtkYXkobWF0Y2hbMV0sIHBhcnNlZEFycmF5LCBjb25maWcpKSB7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIGNvbmZpZy5fYSA9IHBhcnNlZEFycmF5O1xuICBjb25maWcuX3R6bSA9IGNhbGN1bGF0ZU9mZnNldChtYXRjaFs4XSwgbWF0Y2hbOV0sIG1hdGNoWzEwXSk7XG5cbiAgY29uZmlnLl9kID0gY3JlYXRlVVRDRGF0ZS5hcHBseShudWxsLCBjb25maWcuX2EpO1xuICBjb25maWcuX2Quc2V0VVRDTWludXRlcyhjb25maWcuX2QuZ2V0VVRDTWludXRlcygpIC0gY29uZmlnLl90em0pO1xuXG4gIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnJmYzI4MjIgPSB0cnVlO1xuXG4gIHJldHVybiBjb25maWc7XG59XG5cbi8vIGRhdGUgZnJvbSBpc28gZm9ybWF0IG9yIGZhbGxiYWNrXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnRnJvbVN0cmluZyhjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBpZiAoIWlzU3RyaW5nKGNvbmZpZy5faSkpIHtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgY29uc3QgbWF0Y2hlZCA9IGFzcE5ldEpzb25SZWdleC5leGVjKGNvbmZpZy5faSk7XG5cbiAgaWYgKG1hdGNoZWQgIT09IG51bGwpIHtcbiAgICBjb25maWcuX2QgPSBuZXcgRGF0ZSgrbWF0Y2hlZFsxXSk7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgLy8gdG9kbzogdXBkYXRlIGxvZ2ljIHByb2Nlc3NpbmdcbiAgLy8gaXNJU08gLT4gY29uZmlnRnJvbUlTT1xuICAvLyBpc1JGQyAtPiBjb25maWdGcm9tUkZDXG5cbiAgY29uZmlnRnJvbUlTTyhjb25maWcpO1xuICBpZiAoY29uZmlnLl9pc1ZhbGlkID09PSBmYWxzZSkge1xuICAgIGRlbGV0ZSBjb25maWcuX2lzVmFsaWQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIGNvbmZpZ0Zyb21SRkMyODIyKGNvbmZpZyk7XG4gIGlmIChjb25maWcuX2lzVmFsaWQgPT09IGZhbHNlKSB7XG4gICAgZGVsZXRlIGNvbmZpZy5faXNWYWxpZDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgLy8gRmluYWwgYXR0ZW1wdCwgdXNlIElucHV0IEZhbGxiYWNrXG4gIC8vIGhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrKGNvbmZpZyk7XG4gIHJldHVybiBjcmVhdGVJbnZhbGlkKGNvbmZpZyk7XG59XG5cbi8vIGhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrID0gZGVwcmVjYXRlKFxuLy8gICAgICd2YWx1ZSBwcm92aWRlZCBpcyBub3QgaW4gYSByZWNvZ25pemVkIFJGQzI4MjIgb3IgSVNPIGZvcm1hdC4gbW9tZW50IGNvbnN0cnVjdGlvbiBmYWxscyBiYWNrIHRvIGpzIERhdGUoKSwgJyArXG4vLyAgICAgJ3doaWNoIGlzIG5vdCByZWxpYWJsZSBhY3Jvc3MgYWxsIGJyb3dzZXJzIGFuZCB2ZXJzaW9ucy4gTm9uIFJGQzI4MjIvSVNPIGRhdGUgZm9ybWF0cyBhcmUgJyArXG4vLyAgICAgJ2Rpc2NvdXJhZ2VkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gYW4gdXBjb21pbmcgbWFqb3IgcmVsZWFzZS4gUGxlYXNlIHJlZmVyIHRvICcgK1xuLy8gICAgICdodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL2pzLWRhdGUvIGZvciBtb3JlIGluZm8uJyxcbi8vICAgICBmdW5jdGlvbiAoY29uZmlnKSB7XG4vLyAgICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGNvbmZpZy5faSArIChjb25maWcuX3VzZVVUQyA/ICcgVVRDJyA6ICcnKSk7XG4vLyAgICAgfVxuLy8gKTtcbiIsIi8vIG1vbWVudC5qc1xuLy8gdmVyc2lvbiA6IDIuMTguMVxuLy8gYXV0aG9ycyA6IFRpbSBXb29kLCBJc2tyZW4gQ2hlcm5ldiwgTW9tZW50LmpzIGNvbnRyaWJ1dG9yc1xuLy8gbGljZW5zZSA6IE1JVFxuLy8gbW9tZW50anMuY29tXG5cbmltcG9ydCAnLi91bml0cy9pbmRleCc7XG5pbXBvcnQgeyBmb3JtYXRGdW5jdGlvbnMsIG1ha2VGb3JtYXRGdW5jdGlvbiB9IGZyb20gJy4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi9sb2NhbGUvbG9jYWxlcyc7XG5pbXBvcnQgeyBpc0RhdGVWYWxpZCB9IGZyb20gJy4vdXRpbHMvdHlwZS1jaGVja3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4sIG9mZnNldCA9IDApOiBzdHJpbmcge1xuICBjb25zdCBfbG9jYWxlID0gZ2V0TG9jYWxlKGxvY2FsZSB8fCAnZW4nKTtcbiAgaWYgKCFfbG9jYWxlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYExvY2FsZSBcIiR7bG9jYWxlfVwiIGlzIG5vdCBkZWZpbmVkLCBwbGVhc2UgYWRkIGl0IHdpdGggXCJkZWZpbmVMb2NhbGUoLi4uKVwiYFxuICAgICk7XG4gIH1cblxuICBjb25zdCBfZm9ybWF0ID0gZm9ybWF0IHx8IChpc1VUQyA/ICAnWVlZWS1NTS1ERFRISDptbTpzc1taXScgOiAnWVlZWS1NTS1ERFRISDptbTpzc1onKTtcblxuICBjb25zdCBvdXRwdXQgPSBmb3JtYXRNb21lbnQoZGF0ZSwgX2Zvcm1hdCwgX2xvY2FsZSwgaXNVVEMsIG9mZnNldCk7XG5cbiAgaWYgKCFvdXRwdXQpIHtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIF9sb2NhbGUucG9zdGZvcm1hdChvdXRwdXQpO1xufVxuXG4vLyBmb3JtYXQgZGF0ZSB1c2luZyBuYXRpdmUgZGF0ZSBvYmplY3RcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRNb21lbnQoZGF0ZTogRGF0ZSwgX2Zvcm1hdDogc3RyaW5nLCBsb2NhbGU6IExvY2FsZSwgaXNVVEM/OiBib29sZWFuLCBvZmZzZXQgPSAwKTogc3RyaW5nIHtcbiAgaWYgKCFpc0RhdGVWYWxpZChkYXRlKSkge1xuICAgIHJldHVybiBsb2NhbGUuaW52YWxpZERhdGU7XG4gIH1cblxuICBjb25zdCBmb3JtYXQgPSBleHBhbmRGb3JtYXQoX2Zvcm1hdCwgbG9jYWxlKTtcbiAgZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0gPSBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XSB8fCBtYWtlRm9ybWF0RnVuY3Rpb24oZm9ybWF0KTtcblxuICByZXR1cm4gZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0oZGF0ZSwgbG9jYWxlLCBpc1VUQywgb2Zmc2V0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cGFuZEZvcm1hdChfZm9ybWF0OiBzdHJpbmcsIGxvY2FsZTogTG9jYWxlKTogc3RyaW5nIHtcbiAgbGV0IGZvcm1hdCA9IF9mb3JtYXQ7XG4gIGxldCBpID0gNTtcbiAgY29uc3QgbG9jYWxGb3JtYXR0aW5nVG9rZW5zID0gLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KExUU3xMVHxMTD9MP0w/fGx7MSw0fSkvZztcblxuICBjb25zdCByZXBsYWNlTG9uZ0RhdGVGb3JtYXRUb2tlbnMgPSAoaW5wdXQ6IGFueSkgPT4ge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0TG9uZ0RhdGUoaW5wdXQpIHx8IGlucHV0O1xuICB9O1xuXG4gIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy5sYXN0SW5kZXggPSAwO1xuICB3aGlsZSAoaSA+PSAwICYmIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy50ZXN0KGZvcm1hdCkpIHtcbiAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZShsb2NhbEZvcm1hdHRpbmdUb2tlbnMsIHJlcGxhY2VMb25nRGF0ZUZvcm1hdFRva2Vucyk7XG4gICAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLmxhc3RJbmRleCA9IDA7XG4gICAgaSAtPSAxO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdDtcbn1cbiIsIi8vIFBpY2sgdGhlIGZpcnN0IGRlZmluZWQgb2YgdHdvIG9yIHRocmVlIGFyZ3VtZW50cy5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0czxUPihhPzogVCwgYj86IFQsIGM/OiBUKTogVCB7XG4gIGlmIChhICE9IG51bGwpIHtcbiAgICByZXR1cm4gYTtcbiAgfVxuICBpZiAoYiAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGI7XG4gIH1cblxuICByZXR1cm4gYztcbn1cbiIsImltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IERhdGVBcnJheSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IERBVEUsIEhPVVIsIE1JTExJU0VDT05ELCBNSU5VVEUsIE1PTlRILCBTRUNPTkQsIFlFQVIgfSBmcm9tICcuLi91bml0cy9jb25zdGFudHMnO1xuaW1wb3J0IHsgZGF5c0luWWVhciB9IGZyb20gJy4uL3VuaXRzL3llYXInO1xuaW1wb3J0IHsgZ2V0UGFyc2luZ0ZsYWdzIH0gZnJvbSAnLi9wYXJzaW5nLWZsYWdzJztcbmltcG9ydCB7IGNyZWF0ZVVUQ0RhdGUgfSBmcm9tICcuL2RhdGUtZnJvbS1hcnJheSc7XG5pbXBvcnQgeyBjcmVhdGVEYXRlIH0gZnJvbSAnLi9kYXRlLWZyb20tYXJyYXknO1xuaW1wb3J0IHsgZGF5T2ZZZWFyRnJvbVdlZWtzLCB3ZWVrT2ZZZWFyLCB3ZWVrc0luWWVhciB9IGZyb20gJy4uL3VuaXRzL3dlZWstY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuLi91dGlscy9kZWZhdWx0cyc7XG5cbmZ1bmN0aW9uIGN1cnJlbnREYXRlQXJyYXkoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVBcnJheSB7XG4gIGNvbnN0IG5vd1ZhbHVlID0gbmV3IERhdGUoKTtcblxuICBpZiAoY29uZmlnLl91c2VVVEMpIHtcbiAgICByZXR1cm4gW25vd1ZhbHVlLmdldFVUQ0Z1bGxZZWFyKCksIG5vd1ZhbHVlLmdldFVUQ01vbnRoKCksIG5vd1ZhbHVlLmdldFVUQ0RhdGUoKV07XG4gIH1cblxuICByZXR1cm4gW25vd1ZhbHVlLmdldEZ1bGxZZWFyKCksIG5vd1ZhbHVlLmdldE1vbnRoKCksIG5vd1ZhbHVlLmdldERhdGUoKV07XG59XG5cbi8vIGNvbnZlcnQgYW4gYXJyYXkgdG8gYSBkYXRlLlxuLy8gdGhlIGFycmF5IHNob3VsZCBtaXJyb3IgdGhlIHBhcmFtZXRlcnMgYmVsb3dcbi8vIG5vdGU6IGFsbCB2YWx1ZXMgcGFzdCB0aGUgeWVhciBhcmUgb3B0aW9uYWwgYW5kIHdpbGwgZGVmYXVsdCB0byB0aGUgbG93ZXN0IHBvc3NpYmxlIHZhbHVlLlxuLy8gW3llYXIsIG1vbnRoLCBkYXkgLCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmRdXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnRnJvbUFycmF5KGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIGNvbnN0IGlucHV0ID0gW107XG4gIGxldCBpO1xuICBsZXQgZGF0ZTtcbiAgbGV0IGN1cnJlbnREYXRlO1xuICBsZXQgZXhwZWN0ZWRXZWVrZGF5O1xuICBsZXQgeWVhclRvVXNlO1xuXG4gIGlmIChjb25maWcuX2QpIHtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgY3VycmVudERhdGUgPSBjdXJyZW50RGF0ZUFycmF5KGNvbmZpZyk7XG5cbiAgLy8gY29tcHV0ZSBkYXkgb2YgdGhlIHllYXIgZnJvbSB3ZWVrcyBhbmQgd2Vla2RheXNcbiAgaWYgKGNvbmZpZy5fdyAmJiBjb25maWcuX2FbREFURV0gPT0gbnVsbCAmJiBjb25maWcuX2FbTU9OVEhdID09IG51bGwpIHtcbiAgICBkYXlPZlllYXJGcm9tV2Vla0luZm8oY29uZmlnKTtcbiAgfVxuXG4gIC8vIGlmIHRoZSBkYXkgb2YgdGhlIHllYXIgaXMgc2V0LCBmaWd1cmUgb3V0IHdoYXQgaXQgaXNcbiAgaWYgKGNvbmZpZy5fZGF5T2ZZZWFyICE9IG51bGwpIHtcbiAgICB5ZWFyVG9Vc2UgPSBkZWZhdWx0cyhjb25maWcuX2FbWUVBUl0sIGN1cnJlbnREYXRlW1lFQVJdKTtcblxuICAgIGlmIChjb25maWcuX2RheU9mWWVhciA+IGRheXNJblllYXIoeWVhclRvVXNlKSB8fCBjb25maWcuX2RheU9mWWVhciA9PT0gMCkge1xuICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93RGF5T2ZZZWFyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoeWVhclRvVXNlLCAwLCBjb25maWcuX2RheU9mWWVhcikpO1xuICAgIGNvbmZpZy5fYVtNT05USF0gPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgY29uZmlnLl9hW0RBVEVdID0gZGF0ZS5nZXRVVENEYXRlKCk7XG4gIH1cblxuICAvLyBEZWZhdWx0IHRvIGN1cnJlbnQgZGF0ZS5cbiAgLy8gKiBpZiBubyB5ZWFyLCBtb250aCwgZGF5IG9mIG1vbnRoIGFyZSBnaXZlbiwgZGVmYXVsdCB0byB0b2RheVxuICAvLyAqIGlmIGRheSBvZiBtb250aCBpcyBnaXZlbiwgZGVmYXVsdCBtb250aCBhbmQgeWVhclxuICAvLyAqIGlmIG1vbnRoIGlzIGdpdmVuLCBkZWZhdWx0IG9ubHkgeWVhclxuICAvLyAqIGlmIHllYXIgaXMgZ2l2ZW4sIGRvbid0IGRlZmF1bHQgYW55dGhpbmdcbiAgZm9yIChpID0gMDsgaSA8IDMgJiYgY29uZmlnLl9hW2ldID09IG51bGw7ICsraSkge1xuICAgIGNvbmZpZy5fYVtpXSA9IGlucHV0W2ldID0gY3VycmVudERhdGVbaV07XG4gIH1cblxuICAvLyBaZXJvIG91dCB3aGF0ZXZlciB3YXMgbm90IGRlZmF1bHRlZCwgaW5jbHVkaW5nIHRpbWVcbiAgZm9yICg7IGkgPCA3OyBpKyspIHtcbiAgICBjb25maWcuX2FbaV0gPSBpbnB1dFtpXSA9IChjb25maWcuX2FbaV0gPT0gbnVsbCkgPyAoaSA9PT0gMiA/IDEgOiAwKSA6IGNvbmZpZy5fYVtpXTtcbiAgfVxuXG4gIC8vIENoZWNrIGZvciAyNDowMDowMC4wMDBcbiAgaWYgKGNvbmZpZy5fYVtIT1VSXSA9PT0gMjQgJiZcbiAgICBjb25maWcuX2FbTUlOVVRFXSA9PT0gMCAmJlxuICAgIGNvbmZpZy5fYVtTRUNPTkRdID09PSAwICYmXG4gICAgY29uZmlnLl9hW01JTExJU0VDT05EXSA9PT0gMCkge1xuICAgIGNvbmZpZy5fbmV4dERheSA9IHRydWU7XG4gICAgY29uZmlnLl9hW0hPVVJdID0gMDtcbiAgfVxuXG4gIGNvbmZpZy5fZCA9IChjb25maWcuX3VzZVVUQyA/IGNyZWF0ZVVUQ0RhdGUgOiBjcmVhdGVEYXRlKS5hcHBseShudWxsLCBpbnB1dCk7XG4gIGV4cGVjdGVkV2Vla2RheSA9IGNvbmZpZy5fdXNlVVRDID8gY29uZmlnLl9kLmdldFVUQ0RheSgpIDogY29uZmlnLl9kLmdldERheSgpO1xuXG4gIC8vIEFwcGx5IHRpbWV6b25lIG9mZnNldCBmcm9tIGlucHV0LiBUaGUgYWN0dWFsIHV0Y09mZnNldCBjYW4gYmUgY2hhbmdlZFxuICAvLyB3aXRoIHBhcnNlWm9uZS5cbiAgaWYgKGNvbmZpZy5fdHptICE9IG51bGwpIHtcbiAgICBjb25maWcuX2Quc2V0VVRDTWludXRlcyhjb25maWcuX2QuZ2V0VVRDTWludXRlcygpIC0gY29uZmlnLl90em0pO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5fbmV4dERheSkge1xuICAgIGNvbmZpZy5fYVtIT1VSXSA9IDI0O1xuICB9XG5cbiAgLy8gY2hlY2sgZm9yIG1pc21hdGNoaW5nIGRheSBvZiB3ZWVrXG4gIGlmIChjb25maWcuX3cgJiYgdHlwZW9mIGNvbmZpZy5fdy5kICE9PSAndW5kZWZpbmVkJyAmJiBjb25maWcuX3cuZCAhPT0gZXhwZWN0ZWRXZWVrZGF5KSB7XG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykud2Vla2RheU1pc21hdGNoID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59XG5cbmZ1bmN0aW9uIGRheU9mWWVhckZyb21XZWVrSW5mbyhjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBsZXQgdywgd2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95LCB0ZW1wLCB3ZWVrZGF5T3ZlcmZsb3c7XG5cbiAgdyA9IGNvbmZpZy5fdztcbiAgaWYgKHcuR0cgIT0gbnVsbCB8fCB3LlcgIT0gbnVsbCB8fCB3LkUgIT0gbnVsbCkge1xuICAgIGRvdyA9IDE7XG4gICAgZG95ID0gNDtcblxuICAgIC8vIFRPRE86IFdlIG5lZWQgdG8gdGFrZSB0aGUgY3VycmVudCBpc29XZWVrWWVhciwgYnV0IHRoYXQgZGVwZW5kcyBvblxuICAgIC8vIGhvdyB3ZSBpbnRlcnByZXQgbm93IChsb2NhbCwgdXRjLCBmaXhlZCBvZmZzZXQpLiBTbyBjcmVhdGVcbiAgICAvLyBhIG5vdyB2ZXJzaW9uIG9mIGN1cnJlbnQgY29uZmlnICh0YWtlIGxvY2FsL3V0Yy9vZmZzZXQgZmxhZ3MsIGFuZFxuICAgIC8vIGNyZWF0ZSBub3cpLlxuICAgIHdlZWtZZWFyID0gZGVmYXVsdHMody5HRywgY29uZmlnLl9hW1lFQVJdLCB3ZWVrT2ZZZWFyKG5ldyBEYXRlKCksIDEsIDQpLnllYXIpO1xuICAgIHdlZWsgPSBkZWZhdWx0cyh3LlcsIDEpO1xuICAgIHdlZWtkYXkgPSBkZWZhdWx0cyh3LkUsIDEpO1xuICAgIGlmICh3ZWVrZGF5IDwgMSB8fCB3ZWVrZGF5ID4gNykge1xuICAgICAgd2Vla2RheU92ZXJmbG93ID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZG93ID0gY29uZmlnLl9sb2NhbGUuX3dlZWsuZG93O1xuICAgIGRveSA9IGNvbmZpZy5fbG9jYWxlLl93ZWVrLmRveTtcblxuICAgIGNvbnN0IGN1cldlZWsgPSB3ZWVrT2ZZZWFyKG5ldyBEYXRlKCksIGRvdywgZG95KTtcblxuICAgIHdlZWtZZWFyID0gZGVmYXVsdHMody5nZywgY29uZmlnLl9hW1lFQVJdLCBjdXJXZWVrLnllYXIpO1xuXG4gICAgLy8gRGVmYXVsdCB0byBjdXJyZW50IHdlZWsuXG4gICAgd2VlayA9IGRlZmF1bHRzKHcudywgY3VyV2Vlay53ZWVrKTtcblxuICAgIGlmICh3LmQgIT0gbnVsbCkge1xuICAgICAgLy8gd2Vla2RheSAtLSBsb3cgZGF5IG51bWJlcnMgYXJlIGNvbnNpZGVyZWQgbmV4dCB3ZWVrXG4gICAgICB3ZWVrZGF5ID0gdy5kO1xuICAgICAgaWYgKHdlZWtkYXkgPCAwIHx8IHdlZWtkYXkgPiA2KSB7XG4gICAgICAgIHdlZWtkYXlPdmVyZmxvdyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh3LmUgIT0gbnVsbCkge1xuICAgICAgLy8gbG9jYWwgd2Vla2RheSAtLSBjb3VudGluZyBzdGFydHMgZnJvbSBiZWdpbmluZyBvZiB3ZWVrXG4gICAgICB3ZWVrZGF5ID0gdy5lICsgZG93O1xuICAgICAgaWYgKHcuZSA8IDAgfHwgdy5lID4gNikge1xuICAgICAgICB3ZWVrZGF5T3ZlcmZsb3cgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBkZWZhdWx0IHRvIGJlZ2luaW5nIG9mIHdlZWtcbiAgICAgIHdlZWtkYXkgPSBkb3c7XG4gICAgfVxuICB9XG4gIGlmICh3ZWVrIDwgMSB8fCB3ZWVrID4gd2Vla3NJblllYXIod2Vla1llYXIsIGRvdywgZG95KSkge1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd1dlZWtzID0gdHJ1ZTtcbiAgfSBlbHNlIGlmICh3ZWVrZGF5T3ZlcmZsb3cgIT0gbnVsbCkge1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd1dlZWtkYXkgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHRlbXAgPSBkYXlPZlllYXJGcm9tV2Vla3Mod2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KTtcbiAgICBjb25maWcuX2FbWUVBUl0gPSB0ZW1wLnllYXI7XG4gICAgY29uZmlnLl9kYXlPZlllYXIgPSB0ZW1wLmRheU9mWWVhcjtcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59XG4iLCJpbXBvcnQgeyBnZXRQYXJzaW5nRmxhZ3MgfSBmcm9tICcuL3BhcnNpbmctZmxhZ3MnO1xuaW1wb3J0IHsgREFURSwgSE9VUiwgTUlMTElTRUNPTkQsIE1JTlVURSwgTU9OVEgsIFNFQ09ORCwgV0VFSywgV0VFS0RBWSwgWUVBUiB9IGZyb20gJy4uL3VuaXRzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBkYXlzSW5Nb250aCB9IGZyb20gJy4uL3VuaXRzL21vbnRoJztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi9wYXJzaW5nLnR5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrT3ZlcmZsb3coY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgbGV0IG92ZXJmbG93O1xuICBjb25zdCBhID0gY29uZmlnLl9hO1xuXG4gIGlmIChhICYmIGdldFBhcnNpbmdGbGFncyhjb25maWcpLm92ZXJmbG93ID09PSAtMikge1xuICAgIC8vIHRvZG86IGZpeCB0aGlzIHNoKnRcbiAgICBvdmVyZmxvdyA9XG4gICAgICBhW01PTlRIXSA8IDAgfHwgYVtNT05USF0gPiAxMSA/IE1PTlRIIDpcbiAgICAgICAgYVtEQVRFXSA8IDEgfHwgYVtEQVRFXSA+IGRheXNJbk1vbnRoKGFbWUVBUl0sIGFbTU9OVEhdKSA/IERBVEUgOlxuICAgICAgICAgIGFbSE9VUl0gPCAwIHx8IGFbSE9VUl0gPiAyNCB8fCAoYVtIT1VSXSA9PT0gMjQgJiYgKGFbTUlOVVRFXSAhPT0gMCB8fCBhW1NFQ09ORF0gIT09IDAgfHwgYVtNSUxMSVNFQ09ORF0gIT09IDApKSA/IEhPVVIgOlxuICAgICAgICAgICAgYVtNSU5VVEVdIDwgMCB8fCBhW01JTlVURV0gPiA1OSA/IE1JTlVURSA6XG4gICAgICAgICAgICAgIGFbU0VDT05EXSA8IDAgfHwgYVtTRUNPTkRdID4gNTkgPyBTRUNPTkQgOlxuICAgICAgICAgICAgICAgIGFbTUlMTElTRUNPTkRdIDwgMCB8fCBhW01JTExJU0VDT05EXSA+IDk5OSA/IE1JTExJU0VDT05EIDpcbiAgICAgICAgICAgICAgICAgIC0xO1xuXG4gICAgaWYgKGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd0RheU9mWWVhciAmJiAob3ZlcmZsb3cgPCBZRUFSIHx8IG92ZXJmbG93ID4gREFURSkpIHtcbiAgICAgIG92ZXJmbG93ID0gREFURTtcbiAgICB9XG4gICAgaWYgKGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd1dlZWtzICYmIG92ZXJmbG93ID09PSAtMSkge1xuICAgICAgb3ZlcmZsb3cgPSBXRUVLO1xuICAgIH1cbiAgICBpZiAoZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93V2Vla2RheSAmJiBvdmVyZmxvdyA9PT0gLTEpIHtcbiAgICAgIG92ZXJmbG93ID0gV0VFS0RBWTtcbiAgICB9XG5cbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5vdmVyZmxvdyA9IG92ZXJmbG93O1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuIiwiaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgY29uZmlnRnJvbUlTTywgY29uZmlnRnJvbVJGQzI4MjIgfSBmcm9tICcuL2Zyb20tc3RyaW5nJztcbmltcG9ydCB7IGV4cGFuZEZvcm1hdCB9IGZyb20gJy4uL2Zvcm1hdCc7XG5pbXBvcnQgeyBmb3JtYXR0aW5nVG9rZW5zLCBmb3JtYXRUb2tlbkZ1bmN0aW9ucyB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgaXNBcnJheSwgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBnZXRQYXJzZVJlZ2V4Rm9yVG9rZW4gfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRUaW1lVG9BcnJheUZyb21Ub2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IEhPVVIgfSBmcm9tICcuLi91bml0cy9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29uZmlnRnJvbUFycmF5IH0gZnJvbSAnLi9mcm9tLWFycmF5JztcbmltcG9ydCB7IGdldFBhcnNpbmdGbGFncyB9IGZyb20gJy4vcGFyc2luZy1mbGFncyc7XG5pbXBvcnQgeyBjaGVja092ZXJmbG93IH0gZnJvbSAnLi9jaGVjay1vdmVyZmxvdyc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8gY29uc3RhbnQgdGhhdCByZWZlcnMgdG8gdGhlIElTTyBzdGFuZGFyZFxuLy8gaG9va3MuSVNPXzg2MDEgPSBmdW5jdGlvbiAoKSB7fTtcbmV4cG9ydCBjb25zdCBJU09fODYwMSA9ICdJU09fODYwMSc7XG5cbi8vIGNvbnN0YW50IHRoYXQgcmVmZXJzIHRvIHRoZSBSRkMgMjgyMiBmb3JtXG4vLyBob29rcy5SRkNfMjgyMiA9IGZ1bmN0aW9uICgpIHt9O1xuZXhwb3J0IGNvbnN0IFJGQ18yODIyID0gJ1JGQ18yODIyJztcblxuLy8gZGF0ZSBmcm9tIHN0cmluZyBhbmQgZm9ybWF0IHN0cmluZ1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgLy8gVE9ETzogTW92ZSB0aGlzIHRvIGFub3RoZXIgcGFydCBvZiB0aGUgY3JlYXRpb24gZmxvdyB0byBwcmV2ZW50IGNpcmN1bGFyIGRlcHNcbiAgaWYgKGNvbmZpZy5fZiA9PT0gSVNPXzg2MDEpIHtcbiAgICByZXR1cm4gY29uZmlnRnJvbUlTTyhjb25maWcpO1xuICB9XG4gIGlmIChjb25maWcuX2YgPT09IFJGQ18yODIyKSB7XG4gICAgcmV0dXJuIGNvbmZpZ0Zyb21SRkMyODIyKGNvbmZpZyk7XG4gIH1cbiAgY29uZmlnLl9hID0gW107XG4gIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmVtcHR5ID0gdHJ1ZTtcblxuICBpZiAoaXNBcnJheShjb25maWcuX2YpIHx8ICghY29uZmlnLl9pICYmIGNvbmZpZy5faSAhPT0gMCkpIHtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgLy8gVGhpcyBhcnJheSBpcyB1c2VkIHRvIG1ha2UgYSBEYXRlLCBlaXRoZXIgd2l0aCBgbmV3IERhdGVgIG9yIGBEYXRlLlVUQ2BcblxuICBsZXQgaW5wdXQgPSBjb25maWcuX2kudG9TdHJpbmcoKTtcbiAgbGV0IHRvdGFsUGFyc2VkSW5wdXRMZW5ndGggPSAwO1xuICBjb25zdCBpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgY29uc3QgdG9rZW5zID0gZXhwYW5kRm9ybWF0KGNvbmZpZy5fZiwgY29uZmlnLl9sb2NhbGUpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpIHx8IFtdO1xuXG4gIGxldCBpO1xuICBsZXQgdG9rZW47XG4gIGxldCBwYXJzZWRJbnB1dDtcbiAgbGV0IHNraXBwZWQ7XG4gIGZvciAoaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICBwYXJzZWRJbnB1dCA9IChpbnB1dC5tYXRjaChnZXRQYXJzZVJlZ2V4Rm9yVG9rZW4odG9rZW4sIGNvbmZpZy5fbG9jYWxlKSkgfHwgW10pWzBdO1xuICAgIGlmIChwYXJzZWRJbnB1dCkge1xuICAgICAgc2tpcHBlZCA9IGlucHV0LnN1YnN0cigwLCBpbnB1dC5pbmRleE9mKHBhcnNlZElucHV0KSk7XG4gICAgICBpZiAoc2tpcHBlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZElucHV0LnB1c2goc2tpcHBlZCk7XG4gICAgICB9XG4gICAgICBpbnB1dCA9IGlucHV0LnNsaWNlKGlucHV0LmluZGV4T2YocGFyc2VkSW5wdXQpICsgcGFyc2VkSW5wdXQubGVuZ3RoKTtcbiAgICAgIHRvdGFsUGFyc2VkSW5wdXRMZW5ndGggKz0gcGFyc2VkSW5wdXQubGVuZ3RoO1xuICAgIH1cbiAgICAvLyBkb24ndCBwYXJzZSBpZiBpdCdzIG5vdCBhIGtub3duIHRva2VuXG4gICAgaWYgKGZvcm1hdFRva2VuRnVuY3Rpb25zW3Rva2VuXSkge1xuICAgICAgaWYgKHBhcnNlZElucHV0KSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmVtcHR5ID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRUb2tlbnMucHVzaCh0b2tlbik7XG4gICAgICB9XG5cbiAgICAgIGFkZFRpbWVUb0FycmF5RnJvbVRva2VuKHRva2VuLCBwYXJzZWRJbnB1dCwgY29uZmlnKTtcbiAgICB9IGVsc2UgaWYgKGNvbmZpZy5fc3RyaWN0ICYmICFwYXJzZWRJbnB1dCkge1xuICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykudW51c2VkVG9rZW5zLnB1c2godG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFkZCByZW1haW5pbmcgdW5wYXJzZWQgaW5wdXQgbGVuZ3RoIHRvIHRoZSBzdHJpbmdcbiAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuY2hhcnNMZWZ0T3ZlciA9IGlucHV0TGVuZ3RoIC0gdG90YWxQYXJzZWRJbnB1dExlbmd0aDtcbiAgaWYgKGlucHV0Lmxlbmd0aCA+IDApIHtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRJbnB1dC5wdXNoKGlucHV0KTtcbiAgfVxuXG4gIC8vIGNsZWFyIF8xMmggZmxhZyBpZiBob3VyIGlzIDw9IDEyXG4gIGlmIChjb25maWcuX2FbSE9VUl0gPD0gMTIgJiZcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID09PSB0cnVlICYmXG4gICAgY29uZmlnLl9hW0hPVVJdID4gMCkge1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPSB2b2lkIDA7XG4gIH1cblxuICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5wYXJzZWREYXRlUGFydHMgPSBjb25maWcuX2Euc2xpY2UoMCk7XG4gIGdldFBhcnNpbmdGbGFncyhjb25maWcpLm1lcmlkaWVtID0gY29uZmlnLl9tZXJpZGllbTtcbiAgLy8gaGFuZGxlIG1lcmlkaWVtXG4gIGNvbmZpZy5fYVtIT1VSXSA9IG1lcmlkaWVtRml4V3JhcChjb25maWcuX2xvY2FsZSwgY29uZmlnLl9hW0hPVVJdLCBjb25maWcuX21lcmlkaWVtKTtcblxuICBjb25maWdGcm9tQXJyYXkoY29uZmlnKTtcblxuICByZXR1cm4gY2hlY2tPdmVyZmxvdyhjb25maWcpO1xufVxuXG5cbmZ1bmN0aW9uIG1lcmlkaWVtRml4V3JhcChsb2NhbGU6IExvY2FsZSwgX2hvdXI6IG51bWJlciwgbWVyaWRpZW06IHN0cmluZyk6IG51bWJlciB7XG4gIGxldCBob3VyID0gX2hvdXI7XG5cbiAgaWYgKG1lcmlkaWVtID09IG51bGwpIHtcbiAgICAvLyBub3RoaW5nIHRvIGRvXG4gICAgcmV0dXJuIGhvdXI7XG4gIH1cblxuICBpZiAobG9jYWxlLm1lcmlkaWVtSG91ciAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5tZXJpZGllbUhvdXIoaG91ciwgbWVyaWRpZW0pO1xuICB9XG5cbiAgaWYgKGxvY2FsZS5pc1BNID09IG51bGwpIHtcbiAgICAvLyB0aGlzIGlzIG5vdCBzdXBwb3NlZCB0byBoYXBwZW5cbiAgICByZXR1cm4gaG91cjtcbiAgfVxuICAvLyBGYWxsYmFja1xuICBjb25zdCBpc1BtID0gbG9jYWxlLmlzUE0obWVyaWRpZW0pO1xuICBpZiAoaXNQbSAmJiBob3VyIDwgMTIpIHtcbiAgICBob3VyICs9IDEyO1xuICB9XG5cbiAgaWYgKCFpc1BtICYmIGhvdXIgPT09IDEyKSB7XG4gICAgaG91ciA9IDA7XG4gIH1cblxuICByZXR1cm4gaG91cjtcbn1cbiIsImltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZUludmFsaWQsIGlzVmFsaWQgfSBmcm9tICcuL3ZhbGlkJztcbmltcG9ydCB7IGdldFBhcnNpbmdGbGFncyB9IGZyb20gJy4vcGFyc2luZy1mbGFncyc7XG5pbXBvcnQgeyBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0IH0gZnJvbSAnLi9mcm9tLXN0cmluZy1hbmQtZm9ybWF0JztcblxuLy8gZGF0ZSBmcm9tIHN0cmluZyBhbmQgYXJyYXkgb2YgZm9ybWF0IHN0cmluZ3NcbmV4cG9ydCBmdW5jdGlvbiBjb25maWdGcm9tU3RyaW5nQW5kQXJyYXkoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgbGV0IHRlbXBDb25maWc7XG4gIGxldCBiZXN0TW9tZW50O1xuICBsZXQgc2NvcmVUb0JlYXQ7XG4gIGxldCBjdXJyZW50U2NvcmU7XG5cbiAgaWYgKCFjb25maWcuX2YgfHwgY29uZmlnLl9mLmxlbmd0aCA9PT0gMCkge1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRGb3JtYXQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGNyZWF0ZUludmFsaWQoY29uZmlnKTtcbiAgfVxuXG4gIGxldCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgY29uZmlnLl9mLmxlbmd0aDsgaSsrKSB7XG4gICAgY3VycmVudFNjb3JlID0gMDtcbiAgICB0ZW1wQ29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnKTtcbiAgICBpZiAoY29uZmlnLl91c2VVVEMgIT0gbnVsbCkge1xuICAgICAgdGVtcENvbmZpZy5fdXNlVVRDID0gY29uZmlnLl91c2VVVEM7XG4gICAgfVxuICAgIHRlbXBDb25maWcuX2YgPSBjb25maWcuX2ZbaV07XG4gICAgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdCh0ZW1wQ29uZmlnKTtcblxuICAgIGlmICghaXNWYWxpZCh0ZW1wQ29uZmlnKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlcmUgaXMgYW55IGlucHV0IHRoYXQgd2FzIG5vdCBwYXJzZWQgYWRkIGEgcGVuYWx0eSBmb3IgdGhhdCBmb3JtYXRcbiAgICBjdXJyZW50U2NvcmUgKz0gZ2V0UGFyc2luZ0ZsYWdzKHRlbXBDb25maWcpLmNoYXJzTGVmdE92ZXI7XG5cbiAgICAvLyBvciB0b2tlbnNcbiAgICBjdXJyZW50U2NvcmUgKz0gZ2V0UGFyc2luZ0ZsYWdzKHRlbXBDb25maWcpLnVudXNlZFRva2Vucy5sZW5ndGggKiAxMDtcblxuICAgIGdldFBhcnNpbmdGbGFncyh0ZW1wQ29uZmlnKS5zY29yZSA9IGN1cnJlbnRTY29yZTtcblxuICAgIGlmIChzY29yZVRvQmVhdCA9PSBudWxsIHx8IGN1cnJlbnRTY29yZSA8IHNjb3JlVG9CZWF0KSB7XG4gICAgICBzY29yZVRvQmVhdCA9IGN1cnJlbnRTY29yZTtcbiAgICAgIGJlc3RNb21lbnQgPSB0ZW1wQ29uZmlnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKGNvbmZpZywgYmVzdE1vbWVudCB8fCB0ZW1wQ29uZmlnKTtcbn1cbiIsImltcG9ydCB7IG5vcm1hbGl6ZU9iamVjdFVuaXRzIH0gZnJvbSAnLi4vdW5pdHMvYWxpYXNlcyc7XG5pbXBvcnQgeyBjb25maWdGcm9tQXJyYXkgfSBmcm9tICcuL2Zyb20tYXJyYXknO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgaXNPYmplY3QsIGlzU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnRnJvbU9iamVjdChjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBpZiAoY29uZmlnLl9kKSB7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIGNvbnN0IGlucHV0ID0gY29uZmlnLl9pO1xuICBpZiAoaXNPYmplY3QoaW5wdXQpKSB7XG4gICAgY29uc3QgaSA9IG5vcm1hbGl6ZU9iamVjdFVuaXRzKGlucHV0IGFzIGFueSk7XG4gICAgY29uZmlnLl9hID0gW2kueWVhciwgaS5tb250aCwgaS5kYXksIGkuaG91cnMsIGkubWludXRlcywgaS5zZWNvbmRzLCBpLm1pbGxpc2Vjb25kc11cbiAgICAvLyB0b2RvOiBvYnNvbGV0ZSAtPiByZW1vdmUgaXRcbiAgICAgIC5tYXAob2JqID0+IGlzU3RyaW5nKG9iaikgPyBwYXJzZUludChvYmosIDEwKSA6IG9iaik7XG4gIH1cblxuICByZXR1cm4gY29uZmlnRnJvbUFycmF5KGNvbmZpZyk7XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcbmltcG9ydCB7IGlzQXJyYXksIGlzRGF0ZSwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc09iamVjdEVtcHR5LCBpc1N0cmluZywgaXNVbmRlZmluZWQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4vcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlcyc7XG5pbXBvcnQgeyBjcmVhdGVJbnZhbGlkLCBpc1ZhbGlkIH0gZnJvbSAnLi92YWxpZCc7XG5pbXBvcnQgeyBjb25maWdGcm9tU3RyaW5nQW5kQXJyYXkgfSBmcm9tICcuL2Zyb20tc3RyaW5nLWFuZC1hcnJheSc7XG5pbXBvcnQgeyBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0IH0gZnJvbSAnLi9mcm9tLXN0cmluZy1hbmQtZm9ybWF0JztcbmltcG9ydCB7IGNsb25lRGF0ZSB9IGZyb20gJy4vY2xvbmUnO1xuaW1wb3J0IHsgY29uZmlnRnJvbVN0cmluZyB9IGZyb20gJy4vZnJvbS1zdHJpbmcnO1xuaW1wb3J0IHsgY29uZmlnRnJvbUFycmF5IH0gZnJvbSAnLi9mcm9tLWFycmF5JztcbmltcG9ydCB7IGNvbmZpZ0Zyb21PYmplY3QgfSBmcm9tICcuL2Zyb20tb2JqZWN0JztcbmltcG9ydCB7IGNoZWNrT3ZlcmZsb3cgfSBmcm9tICcuL2NoZWNrLW92ZXJmbG93JztcbmltcG9ydCB7IERhdGVJbnB1dCB9IGZyb20gJy4uL3Rlc3QvY2hhaW4nO1xuXG5mdW5jdGlvbiBjcmVhdGVGcm9tQ29uZmlnKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIGNvbnN0IHJlcyA9IGNoZWNrT3ZlcmZsb3cocHJlcGFyZUNvbmZpZyhjb25maWcpKTtcbiAgLy8gdG9kbzogcmVtb3ZlLCBpbiBtb21lbnQuanMgaXQncyBuZXZlciBjYWxsZWQgY3V6IG9mIG1vbWVudCBjb25zdHJ1Y3RvclxuICByZXMuX2QgPSBuZXcgRGF0ZShyZXMuX2QgIT0gbnVsbCA/IHJlcy5fZC5nZXRUaW1lKCkgOiBOYU4pO1xuICBpZiAoIWlzVmFsaWQoT2JqZWN0LmFzc2lnbih7fSwgcmVzLCB7X2lzVmFsaWQ6IG51bGx9KSkpIHtcbiAgICByZXMuX2QgPSBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIC8vIHRvZG86IHVwZGF0ZSBvZmZzZXRcbiAgLyppZiAocmVzLl9uZXh0RGF5KSB7XG4gICAgLy8gQWRkaW5nIGlzIHNtYXJ0IGVub3VnaCBhcm91bmQgRFNUXG4gICAgcmVzLl9kID0gYWRkKHJlcy5fZCwgMSwgJ2RheScpO1xuICAgIHJlcy5fbmV4dERheSA9IHVuZGVmaW5lZDtcbiAgfSovXG5cbiAgcmV0dXJuIHJlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVDb25maWcoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgbGV0IGlucHV0ID0gY29uZmlnLl9pO1xuICBjb25zdCBmb3JtYXQgPSBjb25maWcuX2Y7XG5cbiAgY29uZmlnLl9sb2NhbGUgPSBjb25maWcuX2xvY2FsZSB8fCBnZXRMb2NhbGUoY29uZmlnLl9sKTtcblxuICBpZiAoaW5wdXQgPT09IG51bGwgfHwgKGZvcm1hdCA9PT0gdW5kZWZpbmVkICYmIGlucHV0ID09PSAnJykpIHtcbiAgICByZXR1cm4gY3JlYXRlSW52YWxpZChjb25maWcsIHsgbnVsbElucHV0OiB0cnVlIH0pO1xuICB9XG5cbiAgaWYgKGlzU3RyaW5nKGlucHV0KSkge1xuICAgIGNvbmZpZy5faSA9IGlucHV0ID0gY29uZmlnLl9sb2NhbGUucHJlcGFyc2UoaW5wdXQpO1xuICB9XG5cbiAgaWYgKGlzRGF0ZShpbnB1dCkpIHtcbiAgICBjb25maWcuX2QgPSBjbG9uZURhdGUoaW5wdXQpO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIC8vIHRvZG86IGFkZCBjaGVjayBmb3IgcmVjdXJzaW9uXG5cbiAgaWYgKGlzQXJyYXkoZm9ybWF0KSkge1xuICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRBcnJheShjb25maWcpO1xuICB9IGVsc2UgaWYgKGZvcm1hdCkge1xuICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWdGcm9tSW5wdXQoY29uZmlnKTtcbiAgfVxuXG4gIGlmICghaXNWYWxpZChjb25maWcpKSB7XG4gICAgY29uZmlnLl9kID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ0Zyb21JbnB1dChjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBjb25zdCBpbnB1dCA9IGNvbmZpZy5faTtcbiAgaWYgKGlzVW5kZWZpbmVkKGlucHV0KSkge1xuICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKCk7XG4gIH0gZWxzZSBpZiAoaXNEYXRlKGlucHV0KSkge1xuICAgIGNvbmZpZy5fZCA9IGNsb25lRGF0ZShpbnB1dCk7XG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcoaW5wdXQpKSB7XG4gICAgY29uZmlnRnJvbVN0cmluZyhjb25maWcpO1xuICB9IGVsc2UgaWYgKGlzQXJyYXk8c3RyaW5nIHwgbnVtYmVyPihpbnB1dCkgJiYgaW5wdXQubGVuZ3RoKSB7XG4gICAgY29uc3QgX2FycjogKHN0cmluZyB8IG51bWJlcilbXSA9IGlucHV0LnNsaWNlKDApO1xuICAgIGNvbmZpZy5fYSA9IF9hcnIubWFwKG9iaiA9PiBpc1N0cmluZyhvYmopID8gcGFyc2VJbnQob2JqLCAxMCkgOiBvYmopO1xuICAgIGNvbmZpZ0Zyb21BcnJheShjb25maWcpO1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGlucHV0KSkge1xuICAgIGNvbmZpZ0Zyb21PYmplY3QoY29uZmlnKTtcbiAgfSBlbHNlIGlmIChpc051bWJlcihpbnB1dCkpIHtcbiAgICAvLyBmcm9tIG1pbGxpc2Vjb25kc1xuICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGlucHV0KTtcbiAgfSBlbHNlIHtcbiAgICAvLyAgIGhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrKGNvbmZpZyk7XG4gICAgcmV0dXJuIGNyZWF0ZUludmFsaWQoY29uZmlnKTtcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMb2NhbE9yVVRDKGlucHV0OiBEYXRlSW5wdXQsIGZvcm1hdD86IHN0cmluZyB8IHN0cmluZ1tdLCBsb2NhbGVLZXk/OiBzdHJpbmcsIHN0cmljdD86IGJvb2xlYW4sIGlzVVRDPzogYm9vbGVhbik6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgY29uc3QgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyA9IHt9O1xuICBsZXQgX2lucHV0ID0gaW5wdXQ7XG5cbiAgLy8gcGFyYW1zIHN3aXRjaCAtPiBza2lwOyB0ZXN0IGl0IHdlbGxcbiAgLy8gaWYgKGxvY2FsZUtleSA9PT0gdHJ1ZSB8fCBsb2NhbGVLZXkgPT09IGZhbHNlKSB7XG4gIC8vICAgICBzdHJpY3QgPSBsb2NhbGVLZXk7XG4gIC8vICAgICBsb2NhbGVLZXkgPSB1bmRlZmluZWQ7XG4gIC8vIH1cblxuICAvLyB0b2RvOiBmYWlsIGZhc3QgYW5kIHJldHVybiBub3QgdmFsaWQgZGF0ZVxuICBpZiAoKGlzT2JqZWN0KF9pbnB1dCkgJiYgaXNPYmplY3RFbXB0eShfaW5wdXQpKSB8fCAoaXNBcnJheShfaW5wdXQpICYmIF9pbnB1dC5sZW5ndGggPT09IDApKSB7XG4gICAgX2lucHV0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIG9iamVjdCBjb25zdHJ1Y3Rpb24gbXVzdCBiZSBkb25lIHRoaXMgd2F5LlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMTQyM1xuICAvLyBjb25maWcuX2lzQU1vbWVudE9iamVjdCA9IHRydWU7XG4gIGNvbmZpZy5fdXNlVVRDID0gY29uZmlnLl9pc1VUQyA9IGlzVVRDO1xuICBjb25maWcuX2wgPSBsb2NhbGVLZXk7XG4gIGNvbmZpZy5faSA9IF9pbnB1dDtcbiAgY29uZmlnLl9mID0gZm9ybWF0O1xuICBjb25maWcuX3N0cmljdCA9IHN0cmljdDtcblxuICByZXR1cm4gY3JlYXRlRnJvbUNvbmZpZyhjb25maWcpO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlTG9jYWxPclVUQyB9IGZyb20gJy4vZnJvbS1hbnl0aGluZyc7XG5pbXBvcnQgeyBEYXRlQXJyYXksIERhdGVPYmplY3QgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBEYXRlSW5wdXQgfSBmcm9tICcuLi90ZXN0L2NoYWluJztcbmltcG9ydCB7IGlzRGF0ZSB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRGF0ZShpbnB1dDogRGF0ZUlucHV0LCBmb3JtYXQ/OiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlS2V5Pzogc3RyaW5nLCBzdHJpY3Q/OiBib29sZWFuLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgaWYgKGlzRGF0ZShpbnB1dCkpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICBjb25zdCBjb25maWcgPSBjcmVhdGVMb2NhbE9yVVRDKGlucHV0LCBmb3JtYXQsIGxvY2FsZUtleSwgc3RyaWN0LCBpc1VUQyk7XG5cbiAgcmV0dXJuIGNvbmZpZy5fZDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhYnNSb3VuZChudW06IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBudW0gPCAwID8gTWF0aC5yb3VuZChudW0gKiAtMSkgKiAtMSA6IE1hdGgucm91bmQobnVtKTtcbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgbWF4LWxpbmUtbGVuZ3RoXG4vLyBGT1JNQVRUSU5HXG5cbmltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyB6ZXJvRmlsbCB9IGZyb20gJy4uL3V0aWxzL3plcm8tZmlsbCc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IGlzTnVtYmVyLCBpc1N0cmluZywgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaE9mZnNldCwgbWF0Y2hTaG9ydE9mZnNldCB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZCB9IGZyb20gJy4uL21vbWVudC9hZGQtc3VidHJhY3QnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IERhdGVBcnJheSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGNsb25lRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9jbG9uZSc7XG5pbXBvcnQgeyBzZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtc2V0dGVycyc7XG5cbmZ1bmN0aW9uIGFkZE9mZnNldEZvcm1hdFRva2VuKHRva2VuOiBzdHJpbmcsIHNlcGFyYXRvcjogc3RyaW5nKTogdm9pZCB7XG4gIGFkZEZvcm1hdFRva2VuKHRva2VuLCBudWxsLCBudWxsLCBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgY29uZmlnKTogc3RyaW5nIHtcbiAgICBsZXQgb2Zmc2V0ID0gZ2V0VVRDT2Zmc2V0KGRhdGUsIHtfaXNVVEM6IGNvbmZpZy5pc1VUQywgX29mZnNldDogY29uZmlnLm9mZnNldH0pO1xuICAgIGxldCBzaWduID0gJysnO1xuICAgIGlmIChvZmZzZXQgPCAwKSB7XG4gICAgICBvZmZzZXQgPSAtb2Zmc2V0O1xuICAgICAgc2lnbiA9ICctJztcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbiArIHplcm9GaWxsKH5+KG9mZnNldCAvIDYwKSwgMikgKyBzZXBhcmF0b3IgKyB6ZXJvRmlsbCh+fihvZmZzZXQpICUgNjAsIDIpO1xuICB9KTtcbn1cblxuYWRkT2Zmc2V0Rm9ybWF0VG9rZW4oJ1onLCAnOicpO1xuYWRkT2Zmc2V0Rm9ybWF0VG9rZW4oJ1paJywgJycpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ1onLCBtYXRjaFNob3J0T2Zmc2V0KTtcbmFkZFJlZ2V4VG9rZW4oJ1paJywgbWF0Y2hTaG9ydE9mZnNldCk7XG5hZGRQYXJzZVRva2VuKFsnWicsICdaWiddLCBmdW5jdGlvbiAoaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgY29uZmlnLl91c2VVVEMgPSB0cnVlO1xuICBjb25maWcuX3R6bSA9IG9mZnNldEZyb21TdHJpbmcobWF0Y2hTaG9ydE9mZnNldCwgaW5wdXQpO1xuXG4gIHJldHVybiBjb25maWc7XG59KTtcblxuLy8gSEVMUEVSU1xuXG4vLyB0aW1lem9uZSBjaHVua2VyXG4vLyAnKzEwOjAwJyA+IFsnMTAnLCAgJzAwJ11cbi8vICctMTUzMCcgID4gWyctMTUnLCAnMzAnXVxuY29uc3QgY2h1bmtPZmZzZXQgPSAvKFtcXCtcXC1dfFxcZFxcZCkvZ2k7XG5cbmZ1bmN0aW9uIG9mZnNldEZyb21TdHJpbmcobWF0Y2hlcjogUmVnRXhwLCBzdHI6IHN0cmluZyk6IG51bWJlciB7XG4gIGNvbnN0IG1hdGNoZXMgPSAoc3RyIHx8ICcnKS5tYXRjaChtYXRjaGVyKTtcblxuICBpZiAobWF0Y2hlcyA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgY2h1bmsgPSBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV07XG4gIGNvbnN0IHBhcnRzID0gY2h1bmsubWF0Y2goY2h1bmtPZmZzZXQpIHx8IFsnLScsICcwJywgJzAnXTtcbiAgY29uc3QgbWludXRlcyA9IHBhcnNlSW50KHBhcnRzWzFdLCAxMCkgKiA2MCArIHRvSW50KHBhcnRzWzJdKTtcbiAgY29uc3QgX21pbiA9IHBhcnRzWzBdID09PSAnKycgPyBtaW51dGVzIDogLW1pbnV0ZXM7XG5cbiAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgPyAwIDogX21pbjtcbn1cblxuLy8gUmV0dXJuIGEgbW9tZW50IGZyb20gaW5wdXQsIHRoYXQgaXMgbG9jYWwvdXRjL3pvbmUgZXF1aXZhbGVudCB0byBtb2RlbC5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZVdpdGhPZmZzZXQoaW5wdXQ6IERhdGUsIGRhdGU6IERhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcgPSB7fSk6IERhdGUge1xuICBpZiAoIWNvbmZpZy5faXNVVEMpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICBjb25zdCByZXMgPSBjbG9uZURhdGUoZGF0ZSk7XG4gIC8vIHRvZG86IGlucHV0Ll9kIC0gcmVzLl9kICsgKChyZXMuX29mZnNldCB8fCAwKSAtIChpbnB1dC5fb2Zmc2V0IHx8IDApKSo2MDAwMFxuICBjb25zdCBvZmZzZXREaWZmID0gKGNvbmZpZy5fb2Zmc2V0IHx8IDApICogNjAwMDA7XG4gIGNvbnN0IGRpZmYgPSBpbnB1dC52YWx1ZU9mKCkgLSByZXMudmFsdWVPZigpICsgb2Zmc2V0RGlmZjtcbiAgLy8gVXNlIGxvdy1sZXZlbCBhcGksIGJlY2F1c2UgdGhpcyBmbiBpcyBsb3ctbGV2ZWwgYXBpLlxuICByZXMuc2V0VGltZShyZXMudmFsdWVPZigpICsgZGlmZik7XG4gIC8vIHRvZG86IGFkZCB0aW1lem9uZSBoYW5kbGluZ1xuICAvLyBob29rcy51cGRhdGVPZmZzZXQocmVzLCBmYWxzZSk7XG5cbiAgcmV0dXJuIHJlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGVPZmZzZXQoZGF0ZTogRGF0ZSk6IG51bWJlciB7XG4gIC8vIE9uIEZpcmVmb3guMjQgRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIGEgZmxvYXRpbmcgcG9pbnQuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L3B1bGwvMTg3MVxuICByZXR1cm4gLU1hdGgucm91bmQoZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpIC8gMTUpICogMTU7XG59XG5cbi8vIEhPT0tTXG5cbi8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2hlbmV2ZXIgYSBtb21lbnQgaXMgbXV0YXRlZC5cbi8vIEl0IGlzIGludGVuZGVkIHRvIGtlZXAgdGhlIG9mZnNldCBpbiBzeW5jIHdpdGggdGhlIHRpbWV6b25lLlxuLy8gdG9kbzogaXQncyBmcm9tIG1vbWVudCB0aW1lem9uZXNcbi8vIGhvb2tzLnVwZGF0ZU9mZnNldCA9IGZ1bmN0aW9uICgpIHtcbi8vIH07XG5cbi8vIE1PTUVOVFNcblxuLy8ga2VlcExvY2FsVGltZSA9IHRydWUgbWVhbnMgb25seSBjaGFuZ2UgdGhlIHRpbWV6b25lLCB3aXRob3V0XG4vLyBhZmZlY3RpbmcgdGhlIGxvY2FsIGhvdXIuIFNvIDU6MzE6MjYgKzAzMDAgLS1bdXRjT2Zmc2V0KDIsIHRydWUpXS0tPlxuLy8gNTozMToyNiArMDIwMCBJdCBpcyBwb3NzaWJsZSB0aGF0IDU6MzE6MjYgZG9lc24ndCBleGlzdCB3aXRoIG9mZnNldFxuLy8gKzAyMDAsIHNvIHdlIGFkanVzdCB0aGUgdGltZSBhcyBuZWVkZWQsIHRvIGJlIHZhbGlkLlxuLy9cbi8vIEtlZXBpbmcgdGhlIHRpbWUgYWN0dWFsbHkgYWRkcy9zdWJ0cmFjdHMgKG9uZSBob3VyKVxuLy8gZnJvbSB0aGUgYWN0dWFsIHJlcHJlc2VudGVkIHRpbWUuIFRoYXQgaXMgd2h5IHdlIGNhbGwgdXBkYXRlT2Zmc2V0XG4vLyBhIHNlY29uZCB0aW1lLiBJbiBjYXNlIGl0IHdhbnRzIHVzIHRvIGNoYW5nZSB0aGUgb2Zmc2V0IGFnYWluXG4vLyBfY2hhbmdlSW5Qcm9ncmVzcyA9PSB0cnVlIGNhc2UsIHRoZW4gd2UgaGF2ZSB0byBhZGp1c3QsIGJlY2F1c2Vcbi8vIHRoZXJlIGlzIG5vIHN1Y2ggdGltZSBpbiB0aGUgZ2l2ZW4gdGltZXpvbmUuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVRDT2Zmc2V0KGRhdGU6IERhdGUsIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcgPSB7fSk6IG51bWJlciB7XG4gIGNvbnN0IF9vZmZzZXQgPSBjb25maWcuX29mZnNldCB8fCAwO1xuXG4gIHJldHVybiBjb25maWcuX2lzVVRDID8gX29mZnNldCA6IGdldERhdGVPZmZzZXQoZGF0ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRVVENPZmZzZXQoZGF0ZTogRGF0ZSwgaW5wdXQ6IG51bWJlciB8IHN0cmluZywga2VlcExvY2FsVGltZT86IGJvb2xlYW4sIGtlZXBNaW51dGVzPzogYm9vbGVhbiwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyA9IHt9KTogRGF0ZSB7XG4gIGNvbnN0IG9mZnNldCA9IGNvbmZpZy5fb2Zmc2V0IHx8IDA7XG4gIGxldCBsb2NhbEFkanVzdDtcbiAgbGV0IF9pbnB1dCA9IGlucHV0O1xuICBsZXQgX2RhdGUgPSBkYXRlO1xuXG4gIGlmIChpc1N0cmluZyhfaW5wdXQpKSB7XG4gICAgX2lucHV0ID0gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaFNob3J0T2Zmc2V0LCBfaW5wdXQpO1xuICAgIGlmIChfaW5wdXQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBfZGF0ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNOdW1iZXIoX2lucHV0KSAmJiBNYXRoLmFicyhfaW5wdXQpIDwgMTYgJiYgIWtlZXBNaW51dGVzKSB7XG4gICAgX2lucHV0ID0gX2lucHV0ICogNjA7XG4gIH1cblxuICBpZiAoIWNvbmZpZy5faXNVVEMgJiYga2VlcExvY2FsVGltZSkge1xuICAgIGxvY2FsQWRqdXN0ID0gZ2V0RGF0ZU9mZnNldChfZGF0ZSk7XG4gIH1cbiAgY29uZmlnLl9vZmZzZXQgPSBfaW5wdXQ7XG4gIGNvbmZpZy5faXNVVEMgPSB0cnVlO1xuICBpZiAobG9jYWxBZGp1c3QgIT0gbnVsbCkge1xuICAgIF9kYXRlID0gYWRkKF9kYXRlLCBsb2NhbEFkanVzdCwgJ21pbnV0ZXMnKTtcbiAgfVxuICBpZiAob2Zmc2V0ICE9PSBfaW5wdXQpIHtcbiAgICBpZiAoIWtlZXBMb2NhbFRpbWUgfHwgY29uZmlnLl9jaGFuZ2VJblByb2dyZXNzKSB7XG4gICAgICBfZGF0ZSA9IGFkZChfZGF0ZSwgX2lucHV0IC0gb2Zmc2V0LCAnbWludXRlcycsIGNvbmZpZy5faXNVVEMpO1xuICAgICAgLy8gYWRkU3VidHJhY3QodGhpcywgY3JlYXRlRHVyYXRpb24oX2lucHV0IC0gb2Zmc2V0LCAnbScpLCAxLCBmYWxzZSk7XG4gICAgfSBlbHNlIGlmICghY29uZmlnLl9jaGFuZ2VJblByb2dyZXNzKSB7XG4gICAgICBjb25maWcuX2NoYW5nZUluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgLy8gdG9kbzogYWRkIHRpbWV6b25lIGhhbmRsaW5nXG4gICAgICAvLyBob29rcy51cGRhdGVPZmZzZXQodGhpcywgdHJ1ZSk7XG4gICAgICBjb25maWcuX2NoYW5nZUluUHJvZ3Jlc3MgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLypcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRab25lKGlucHV0LCBrZWVwTG9jYWxUaW1lKSB7XG4gIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGlucHV0ID0gLWlucHV0O1xuICAgIH1cblxuICAgIHRoaXMudXRjT2Zmc2V0KGlucHV0LCBrZWVwTG9jYWxUaW1lKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAtdGhpcy51dGNPZmZzZXQoKTtcbiAgfVxufVxuKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE9mZnNldFRvVVRDKGRhdGU6IERhdGUsIGtlZXBMb2NhbFRpbWU/OiBib29sZWFuKTogRGF0ZSB7XG4gIHJldHVybiBzZXRVVENPZmZzZXQoZGF0ZSwgMCwga2VlcExvY2FsVGltZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RheWxpZ2h0U2F2aW5nVGltZShkYXRlOiBEYXRlKTogYm9vbGVhbiB7XG5cbiAgcmV0dXJuIChnZXRVVENPZmZzZXQoZGF0ZSkgPiBnZXRVVENPZmZzZXQoc2V0TW9udGgoY2xvbmVEYXRlKGRhdGUpLCAwKSlcbiAgICB8fCBnZXRVVENPZmZzZXQoZGF0ZSkgPiBnZXRVVENPZmZzZXQoc2V0TW9udGgoY2xvbmVEYXRlKGRhdGUpLCA1KSkpO1xufVxuXG4vKmV4cG9ydCBmdW5jdGlvbiBzZXRPZmZzZXRUb0xvY2FsKGRhdGU6IERhdGUsIGlzVVRDPzogYm9vbGVhbiwga2VlcExvY2FsVGltZT86IGJvb2xlYW4pIHtcbiAgaWYgKHRoaXMuX2lzVVRDKSB7XG4gICAgdGhpcy51dGNPZmZzZXQoMCwga2VlcExvY2FsVGltZSk7XG4gICAgdGhpcy5faXNVVEMgPSBmYWxzZTtcblxuICAgIGlmIChrZWVwTG9jYWxUaW1lKSB7XG4gICAgICB0aGlzLnN1YnRyYWN0KGdldERhdGVPZmZzZXQodGhpcyksICdtJyk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufSovXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRPZmZzZXRUb1BhcnNlZE9mZnNldChkYXRlOiBEYXRlLCBpbnB1dDogc3RyaW5nLCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnID0ge30pOiBEYXRlIHtcbiAgaWYgKGNvbmZpZy5fdHptICE9IG51bGwpIHtcbiAgICByZXR1cm4gc2V0VVRDT2Zmc2V0KGRhdGUsIGNvbmZpZy5fdHptLCBmYWxzZSwgdHJ1ZSwgY29uZmlnKTtcbiAgfVxuXG4gIGlmIChpc1N0cmluZyhpbnB1dCkpIHtcbiAgICBjb25zdCB0Wm9uZSA9IG9mZnNldEZyb21TdHJpbmcobWF0Y2hPZmZzZXQsIGlucHV0KTtcbiAgICBpZiAodFpvbmUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHNldFVUQ09mZnNldChkYXRlLCB0Wm9uZSwgZmFsc2UsIGZhbHNlLCBjb25maWcpO1xuICAgIH1cblxuICAgIHJldHVybiBzZXRVVENPZmZzZXQoZGF0ZSwgMCwgdHJ1ZSwgZmFsc2UsIGNvbmZpZyk7XG4gIH1cblxuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0FsaWduZWRIb3VyT2Zmc2V0KGRhdGU6IERhdGUsIGlucHV0PzogRGF0ZSkge1xuICBjb25zdCBfaW5wdXQgPSBpbnB1dCA/IGdldFVUQ09mZnNldChpbnB1dCwgeyBfaXNVVEM6IGZhbHNlIH0pIDogMDtcblxuICByZXR1cm4gKGdldFVUQ09mZnNldChkYXRlKSAtIF9pbnB1dCkgJSA2MCA9PT0gMDtcbn1cblxuXG4vLyBERVBSRUNBVEVEXG4vKmV4cG9ydCBmdW5jdGlvbiBpc0RheWxpZ2h0U2F2aW5nVGltZVNoaWZ0ZWQoKSB7XG4gIGlmICghaXNVbmRlZmluZWQodGhpcy5faXNEU1RTaGlmdGVkKSkge1xuICAgIHJldHVybiB0aGlzLl9pc0RTVFNoaWZ0ZWQ7XG4gIH1cblxuICBjb25zdCBjID0ge307XG5cbiAgY29weUNvbmZpZyhjLCB0aGlzKTtcbiAgYyA9IHByZXBhcmVDb25maWcoYyk7XG5cbiAgaWYgKGMuX2EpIHtcbiAgICBjb25zdCBvdGhlciA9IGMuX2lzVVRDID8gY3JlYXRlVVRDKGMuX2EpIDogY3JlYXRlTG9jYWwoYy5fYSk7XG4gICAgdGhpcy5faXNEU1RTaGlmdGVkID0gdGhpcy5pc1ZhbGlkKCkgJiZcbiAgICAgIGNvbXBhcmVBcnJheXMoYy5fYSwgb3RoZXIudG9BcnJheSgpKSA+IDA7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5faXNEU1RTaGlmdGVkID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdGhpcy5faXNEU1RTaGlmdGVkO1xufSovXG5cbi8vIGluIEtocm9ub3Ncbi8qZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWwoKSB7XG4gIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/ICF0aGlzLl9pc1VUQyA6IGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNVdGNPZmZzZXQoKSB7XG4gIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXMuX2lzVVRDIDogZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1V0YygpIHtcbiAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gdGhpcy5faXNVVEMgJiYgdGhpcy5fb2Zmc2V0ID09PSAwIDogZmFsc2U7XG59Ki9cbiIsImltcG9ydCB7IFVuaXRPZlRpbWUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBlbmRPZiwgc3RhcnRPZiB9IGZyb20gJy4vc3RhcnQtZW5kLW9mJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQWZ0ZXIoXG4gIGRhdGUxOiBEYXRlLFxuICBkYXRlMjogRGF0ZSxcbiAgdW5pdHM6IFVuaXRPZlRpbWUgPSAnbWlsbGlzZWNvbmRzJ1xuKTogYm9vbGVhbiB7XG4gIGlmICghZGF0ZTEgfHwgIWRhdGUyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHVuaXRzID09PSAnbWlsbGlzZWNvbmRzJykge1xuICAgIHJldHVybiBkYXRlMS52YWx1ZU9mKCkgPiBkYXRlMi52YWx1ZU9mKCk7XG4gIH1cblxuICByZXR1cm4gZGF0ZTIudmFsdWVPZigpIDwgc3RhcnRPZihkYXRlMSwgdW5pdHMpLnZhbHVlT2YoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQmVmb3JlKFxuICBkYXRlMTogRGF0ZSxcbiAgZGF0ZTI6IERhdGUsXG4gIHVuaXRzOiBVbml0T2ZUaW1lID0gJ21pbGxpc2Vjb25kcydcbik6IGJvb2xlYW4ge1xuICBpZiAoIWRhdGUxIHx8ICFkYXRlMikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh1bml0cyA9PT0gJ21pbGxpc2Vjb25kcycpIHtcbiAgICByZXR1cm4gZGF0ZTEudmFsdWVPZigpIDwgZGF0ZTIudmFsdWVPZigpO1xuICB9XG5cbiAgcmV0dXJuIGVuZE9mKGRhdGUxLCB1bml0cykudmFsdWVPZigpIDwgZGF0ZTIudmFsdWVPZigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCZXR3ZWVuKFxuICBkYXRlOiBEYXRlLFxuICBmcm9tOiBEYXRlLFxuICB0bzogRGF0ZSxcbiAgdW5pdHM6IFVuaXRPZlRpbWUsXG4gIGluY2x1c2l2aXR5ID0gJygpJ1xuKTogYm9vbGVhbiB7XG4gIGNvbnN0IGxlZnRCb3VuZCA9XG4gICAgaW5jbHVzaXZpdHlbMF0gPT09ICcoJ1xuICAgICAgPyBpc0FmdGVyKGRhdGUsIGZyb20sIHVuaXRzKVxuICAgICAgOiAhaXNCZWZvcmUoZGF0ZSwgZnJvbSwgdW5pdHMpO1xuICBjb25zdCByaWdodEJvdW5kID1cbiAgICBpbmNsdXNpdml0eVsxXSA9PT0gJyknXG4gICAgICA/IGlzQmVmb3JlKGRhdGUsIHRvLCB1bml0cylcbiAgICAgIDogIWlzQWZ0ZXIoZGF0ZSwgdG8sIHVuaXRzKTtcblxuICByZXR1cm4gbGVmdEJvdW5kICYmIHJpZ2h0Qm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWUoXG4gIGRhdGUxOiBEYXRlLFxuICBkYXRlMjogRGF0ZSxcbiAgdW5pdHM6IFVuaXRPZlRpbWUgPSAnbWlsbGlzZWNvbmRzJ1xuKTogYm9vbGVhbiB7XG4gIGlmICghZGF0ZTEgfHwgIWRhdGUyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHVuaXRzID09PSAnbWlsbGlzZWNvbmRzJykge1xuICAgIHJldHVybiBkYXRlMS52YWx1ZU9mKCkgPT09IGRhdGUyLnZhbHVlT2YoKTtcbiAgfVxuXG4gIGNvbnN0IGlucHV0TXMgPSBkYXRlMi52YWx1ZU9mKCk7XG5cbiAgcmV0dXJuIChcbiAgICBzdGFydE9mKGRhdGUxLCB1bml0cykudmFsdWVPZigpIDw9IGlucHV0TXMgJiZcbiAgICBpbnB1dE1zIDw9IGVuZE9mKGRhdGUxLCB1bml0cykudmFsdWVPZigpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVPckFmdGVyKFxuICBkYXRlMTogRGF0ZSxcbiAgZGF0ZTI6IERhdGUsXG4gIHVuaXRzPzogVW5pdE9mVGltZVxuKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc1NhbWUoZGF0ZTEsIGRhdGUyLCB1bml0cykgfHwgaXNBZnRlcihkYXRlMSwgZGF0ZTIsIHVuaXRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZU9yQmVmb3JlKFxuICBkYXRlMTogRGF0ZSxcbiAgZGF0ZTI6IERhdGUsXG4gIHVuaXRzPzogVW5pdE9mVGltZVxuKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc1NhbWUoZGF0ZTEsIGRhdGUyLCB1bml0cykgfHwgaXNCZWZvcmUoZGF0ZTEsIGRhdGUyLCB1bml0cyk7XG59XG4iLCIvLyBBU1AuTkVUIGpzb24gZGF0ZSBmb3JtYXQgcmVnZXhcbmltcG9ydCB7IER1cmF0aW9uLCBpc0R1cmF0aW9uIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBpc0RhdGVWYWxpZCwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc1N0cmluZywgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBEQVRFLCBIT1VSLCBNSUxMSVNFQ09ORCwgTUlOVVRFLCBTRUNPTkQgfSBmcm9tICcuLi91bml0cy9jb25zdGFudHMnO1xuaW1wb3J0IHsgcGFyc2VEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2xvY2FsJztcbmltcG9ydCB7IGFic1JvdW5kIH0gZnJvbSAnLi4vdXRpbHMvYWJzLXJvdW5kJztcbmltcG9ydCB7IERhdGVPYmplY3QgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IGNsb25lV2l0aE9mZnNldCB9IGZyb20gJy4uL3VuaXRzL29mZnNldCc7XG5pbXBvcnQgeyBpc0FmdGVyLCBpc0JlZm9yZSB9IGZyb20gJy4uL3V0aWxzL2RhdGUtY29tcGFyZSc7XG5pbXBvcnQgeyBnZXRGdWxsWWVhciwgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSAnLi4vbW9tZW50L2FkZC1zdWJ0cmFjdCc7XG5pbXBvcnQgeyBjbG9uZURhdGUgfSBmcm9tICcuLi9jcmVhdGUvY2xvbmUnO1xuXG5jb25zdCBhc3BOZXRSZWdleCA9IC9eKFxcLXxcXCspPyg/OihcXGQqKVsuIF0pPyhcXGQrKVxcOihcXGQrKSg/OlxcOihcXGQrKShcXC5cXGQqKT8pPyQvO1xuXG4vLyBmcm9tIGh0dHA6Ly9kb2NzLmNsb3N1cmUtbGlicmFyeS5nb29nbGVjb2RlLmNvbS9naXQvY2xvc3VyZV9nb29nX2RhdGVfZGF0ZS5qcy5zb3VyY2UuaHRtbFxuLy8gc29tZXdoYXQgbW9yZSBpbiBsaW5lIHdpdGggNC40LjMuMiAyMDA0IHNwZWMsIGJ1dCBhbGxvd3MgZGVjaW1hbCBhbnl3aGVyZVxuLy8gYW5kIGZ1cnRoZXIgbW9kaWZpZWQgdG8gYWxsb3cgZm9yIHN0cmluZ3MgY29udGFpbmluZyBib3RoIHdlZWsgYW5kIGRheVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5jb25zdCBpc29SZWdleCA9IC9eKC18XFwrKT9QKD86KFstK10/WzAtOSwuXSopWSk/KD86KFstK10/WzAtOSwuXSopTSk/KD86KFstK10/WzAtOSwuXSopVyk/KD86KFstK10/WzAtOSwuXSopRCk/KD86VCg/OihbLStdP1swLTksLl0qKUgpPyg/OihbLStdP1swLTksLl0qKU0pPyg/OihbLStdP1swLTksLl0qKVMpPyk/JC87XG5cbmV4cG9ydCB0eXBlIER1cmF0aW9uSW5wdXQgPSBzdHJpbmcgfCBudW1iZXIgfCBEdXJhdGlvbiB8IFBhcnRpYWw8RGF0ZU9iamVjdD4gfCB7IGZyb206IERhdGU7IHRvOiBEYXRlIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEdXJhdGlvbihpbnB1dD86IER1cmF0aW9uSW5wdXQsIGtleT86IHN0cmluZywgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyA9IHt9KSB7XG4gIGNvbnN0IGR1cmF0aW9uID0gY29udmVydER1cmF0aW9uKGlucHV0LCBrZXkpO1xuICAvLyBtYXRjaGluZyBhZ2FpbnN0IHJlZ2V4cCBpcyBleHBlbnNpdmUsIGRvIGl0IG9uIGRlbWFuZFxuXG4gIHJldHVybiBuZXcgRHVyYXRpb24oZHVyYXRpb24sIGNvbmZpZyk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnREdXJhdGlvbihpbnB1dDogYW55LCBrZXk6IHN0cmluZyk6IFBhcnRpYWw8RGF0ZU9iamVjdD4ge1xuICAvLyBjaGVja3MgZm9yIG51bGwgb3IgdW5kZWZpbmVkXG4gIGlmIChpbnB1dCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgaWYgKGlzRHVyYXRpb24oaW5wdXQpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1pbGxpc2Vjb25kczogaW5wdXQuX21pbGxpc2Vjb25kcyxcbiAgICAgIGRheTogaW5wdXQuX2RheXMsXG4gICAgICBtb250aDogaW5wdXQuX21vbnRoc1xuICAgIH07XG4gIH1cbiAgaWYgKGlzTnVtYmVyKGlucHV0KSkge1xuICAgIC8vIGR1cmF0aW9uID0ge307XG4gICAgcmV0dXJuIGtleSA/IHsgW2tleV06IGlucHV0IH0gOiB7IG1pbGxpc2Vjb25kczogaW5wdXQgfTtcbiAgfVxuXG4gIGlmIChpc1N0cmluZyhpbnB1dCkpIHtcbiAgICBsZXQgbWF0Y2ggPSBhc3BOZXRSZWdleC5leGVjKGlucHV0KTtcblxuICAgIGlmIChtYXRjaCkge1xuICAgICAgY29uc3Qgc2lnbiA9IChtYXRjaFsxXSA9PT0gJy0nKSA/IC0xIDogMTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeWVhcjogMCxcbiAgICAgICAgZGF5OiB0b0ludChtYXRjaFtEQVRFXSkgKiBzaWduLFxuICAgICAgICBob3VyczogdG9JbnQobWF0Y2hbSE9VUl0pICogc2lnbixcbiAgICAgICAgbWludXRlczogdG9JbnQobWF0Y2hbTUlOVVRFXSkgKiBzaWduLFxuICAgICAgICBzZWNvbmRzOiB0b0ludChtYXRjaFtTRUNPTkRdKSAqIHNpZ24sXG4gICAgICAgIC8vIHRoZSBtaWxsaXNlY29uZCBkZWNpbWFsIHBvaW50IGlzIGluY2x1ZGVkIGluIHRoZSBtYXRjaFxuICAgICAgICBtaWxsaXNlY29uZHM6IHRvSW50KGFic1JvdW5kKHRvSW50KG1hdGNoW01JTExJU0VDT05EXSkgKiAxMDAwKSkgKiBzaWduXG4gICAgICB9O1xuICAgIH1cblxuICAgIG1hdGNoID0gaXNvUmVnZXguZXhlYyhpbnB1dCk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBjb25zdCBzaWduID0gKG1hdGNoWzFdID09PSAnLScpID8gLTEgOiAobWF0Y2hbMV0gPT09ICcrJykgPyAxIDogMTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeWVhcjogcGFyc2VJc28obWF0Y2hbMl0sIHNpZ24pLFxuICAgICAgICBtb250aDogcGFyc2VJc28obWF0Y2hbM10sIHNpZ24pLFxuICAgICAgICB3ZWVrOiBwYXJzZUlzbyhtYXRjaFs0XSwgc2lnbiksXG4gICAgICAgIGRheTogcGFyc2VJc28obWF0Y2hbNV0sIHNpZ24pLFxuICAgICAgICBob3VyczogcGFyc2VJc28obWF0Y2hbNl0sIHNpZ24pLFxuICAgICAgICBtaW51dGVzOiBwYXJzZUlzbyhtYXRjaFs3XSwgc2lnbiksXG4gICAgICAgIHNlY29uZHM6IHBhcnNlSXNvKG1hdGNoWzhdLCBzaWduKVxuICAgICAgfTtcbiAgICB9XG5cbiAgfVxuXG4gIGlmIChpc09iamVjdDx7ZnJvbTogYW55OyB0bzogYW55fT4oaW5wdXQpICYmICgnZnJvbScgaW4gaW5wdXQgfHwgJ3RvJyBpbiBpbnB1dCkpIHtcbiAgICBjb25zdCBkaWZmUmVzID0gbW9tZW50c0RpZmZlcmVuY2UocGFyc2VEYXRlKGlucHV0LmZyb20pLCBwYXJzZURhdGUoaW5wdXQudG8pKTtcblxuICAgIHJldHVybiB7XG4gICAgICBtaWxsaXNlY29uZHM6IGRpZmZSZXMubWlsbGlzZWNvbmRzLFxuICAgICAgbW9udGg6IGRpZmZSZXMubW9udGhzXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBpbnB1dDtcbn1cblxuLy8gY3JlYXRlRHVyYXRpb24uZm4gPSBEdXJhdGlvbi5wcm90b3R5cGU7XG4vLyBjcmVhdGVEdXJhdGlvbi5pbnZhbGlkID0gaW52YWxpZDtcblxuZnVuY3Rpb24gcGFyc2VJc28oaW5wOiBzdHJpbmcsIHNpZ246IG51bWJlcik6IG51bWJlciB7XG4gIC8vIFdlJ2Qgbm9ybWFsbHkgdXNlIH5+aW5wIGZvciB0aGlzLCBidXQgdW5mb3J0dW5hdGVseSBpdCBhbHNvXG4gIC8vIGNvbnZlcnRzIGZsb2F0cyB0byBpbnRzLlxuICAvLyBpbnAgbWF5IGJlIHVuZGVmaW5lZCwgc28gY2FyZWZ1bCBjYWxsaW5nIHJlcGxhY2Ugb24gaXQuXG4gIGNvbnN0IHJlcyA9IGlucCAmJiBwYXJzZUZsb2F0KGlucC5yZXBsYWNlKCcsJywgJy4nKSk7XG4gIC8vIGFwcGx5IHNpZ24gd2hpbGUgd2UncmUgYXQgaXRcblxuICByZXR1cm4gKGlzTmFOKHJlcykgPyAwIDogcmVzKSAqIHNpZ247XG59XG5cbmZ1bmN0aW9uIHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2UoYmFzZTogRGF0ZSwgb3RoZXI6IERhdGUpOiB7IG1pbGxpc2Vjb25kczogbnVtYmVyOyBtb250aHM6IG51bWJlciB9IHtcbiAgY29uc3QgcmVzID0geyBtaWxsaXNlY29uZHM6IDAsIG1vbnRoczogMCB9O1xuXG4gIHJlcy5tb250aHMgPSBnZXRNb250aChvdGhlcikgLSBnZXRNb250aChiYXNlKSArXG4gICAgKGdldEZ1bGxZZWFyKG90aGVyKSAtIGdldEZ1bGxZZWFyKGJhc2UpKSAqIDEyO1xuICBjb25zdCBfYmFzZVBsdXMgPSBhZGQoY2xvbmVEYXRlKGJhc2UpLCByZXMubW9udGhzLCAnbW9udGgnKTtcbiAgaWYgKGlzQWZ0ZXIoX2Jhc2VQbHVzLCBvdGhlcikpIHtcbiAgICAtLXJlcy5tb250aHM7XG4gIH1cblxuICByZXMubWlsbGlzZWNvbmRzID0gK290aGVyIC0gKyhhZGQoY2xvbmVEYXRlKGJhc2UpLCByZXMubW9udGhzLCAnbW9udGgnKSk7XG5cbiAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gbW9tZW50c0RpZmZlcmVuY2UoYmFzZTogRGF0ZSwgb3RoZXI6IERhdGUpOiB7IG1pbGxpc2Vjb25kczogbnVtYmVyOyBtb250aHM6IG51bWJlciB9IHtcbiAgaWYgKCEoaXNEYXRlVmFsaWQoYmFzZSkgJiYgaXNEYXRlVmFsaWQob3RoZXIpKSkge1xuICAgIHJldHVybiB7IG1pbGxpc2Vjb25kczogMCwgbW9udGhzOiAwIH07XG4gIH1cblxuICBsZXQgcmVzO1xuICBjb25zdCBfb3RoZXIgPSBjbG9uZVdpdGhPZmZzZXQob3RoZXIsIGJhc2UsIHtfb2Zmc2V0OiBiYXNlLmdldFRpbWV6b25lT2Zmc2V0KCl9KTtcbiAgaWYgKGlzQmVmb3JlKGJhc2UsIF9vdGhlcikpIHtcbiAgICByZXMgPSBwb3NpdGl2ZU1vbWVudHNEaWZmZXJlbmNlKGJhc2UsIF9vdGhlcik7XG4gIH0gZWxzZSB7XG4gICAgcmVzID0gcG9zaXRpdmVNb21lbnRzRGlmZmVyZW5jZShfb3RoZXIsIGJhc2UpO1xuICAgIHJlcy5taWxsaXNlY29uZHMgPSAtcmVzLm1pbGxpc2Vjb25kcztcbiAgICByZXMubW9udGhzID0gLXJlcy5tb250aHM7XG4gIH1cblxuICByZXR1cm4gcmVzO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRHVyYXRpb24gfSBmcm9tICcuLi9kdXJhdGlvbi9jcmVhdGUnO1xuaW1wb3J0IHsgYWJzUm91bmQgfSBmcm9tICcuLi91dGlscy9hYnMtcm91bmQnO1xuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tICcuLi9kdXJhdGlvbi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBnZXREYXRlLCBnZXRNb250aCwgZ2V0VGltZSB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBzZXREYXRlLCBzZXRNb250aCwgc2V0VGltZSB9IGZyb20gJy4uL3V0aWxzL2RhdGUtc2V0dGVycyc7XG5pbXBvcnQgeyBjbG9uZURhdGUgfSBmcm9tICcuLi9jcmVhdGUvY2xvbmUnO1xuaW1wb3J0IHsgVW5pdE9mVGltZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZChkYXRlOiBEYXRlLCB2YWw6IG51bWJlciwgcGVyaW9kOiBVbml0T2ZUaW1lLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgY29uc3QgZHVyID0gY3JlYXRlRHVyYXRpb24odmFsLCBwZXJpb2QpO1xuXG4gIHJldHVybiBhZGRTdWJ0cmFjdChkYXRlLCBkdXIsIDEsIGlzVVRDKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KGRhdGU6IERhdGUsIHZhbDogbnVtYmVyLCBwZXJpb2Q6IFVuaXRPZlRpbWUsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBjb25zdCBkdXIgPSBjcmVhdGVEdXJhdGlvbih2YWwsIHBlcmlvZCk7XG5cbiAgcmV0dXJuIGFkZFN1YnRyYWN0KGRhdGUsIGR1ciwgLTEsIGlzVVRDKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFN1YnRyYWN0KGRhdGU6IERhdGUsIGR1cmF0aW9uOiBEdXJhdGlvbiwgaXNBZGRpbmc6IG51bWJlciwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XG4gIGNvbnN0IG1pbGxpc2Vjb25kcyA9IGR1cmF0aW9uLl9taWxsaXNlY29uZHM7XG4gIGNvbnN0IGRheXMgPSBhYnNSb3VuZChkdXJhdGlvbi5fZGF5cyk7XG4gIGNvbnN0IG1vbnRocyA9IGFic1JvdW5kKGR1cmF0aW9uLl9tb250aHMpO1xuXG4gIC8vIHRvZG86IGFkZCB0aW1lem9uZXMgc3VwcG9ydFxuICAvLyBjb25zdCBfdXBkYXRlT2Zmc2V0ID0gdXBkYXRlT2Zmc2V0ID09IG51bGwgPyB0cnVlIDogdXBkYXRlT2Zmc2V0O1xuXG4gIGlmIChtb250aHMpIHtcbiAgICBzZXRNb250aChkYXRlLCBnZXRNb250aChkYXRlLCBpc1VUQykgKyBtb250aHMgKiBpc0FkZGluZywgaXNVVEMpO1xuICB9XG4gIGlmIChkYXlzKSB7XG4gICAgc2V0RGF0ZShkYXRlLCBnZXREYXRlKGRhdGUsIGlzVVRDKSArIGRheXMgKiBpc0FkZGluZywgaXNVVEMpO1xuICB9XG4gIGlmIChtaWxsaXNlY29uZHMpIHtcbiAgICBzZXRUaW1lKGRhdGUsIGdldFRpbWUoZGF0ZSkgKyBtaWxsaXNlY29uZHMgKiBpc0FkZGluZyk7XG4gIH1cblxuICByZXR1cm4gY2xvbmVEYXRlKGRhdGUpO1xuICAvLyB0b2RvOiBhZGQgdGltZXpvbmVzIHN1cHBvcnRcbiAgLy8gaWYgKF91cGRhdGVPZmZzZXQpIHtcbiAgLy8gICBob29rcy51cGRhdGVPZmZzZXQoZGF0ZSwgZGF5cyB8fCBtb250aHMpO1xuICAvLyB9XG59XG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXREYXkgfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBhZGRXZWVrUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IGdldFBhcnNpbmdGbGFncyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLWZsYWdzJztcbmltcG9ydCB7IGlzTnVtYmVyLCBpc1N0cmluZywgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0dGVyT3B0aW9ucywgV2Vla1BhcnNpbmcgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IGFkZCB9IGZyb20gJy4uL21vbWVudC9hZGQtc3VidHJhY3QnO1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZXMnO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdkJywgbnVsbCwgJ2RvJyxcbiAgZnVuY3Rpb24gKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0RGF5KGRhdGUsIG9wdHMuaXNVVEMpLnRvU3RyaW5nKDEwKTtcbiAgfSk7XG5cbmFkZEZvcm1hdFRva2VuKCdkZCcsIG51bGwsIG51bGwsXG4gIGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG9wdHMubG9jYWxlLndlZWtkYXlzTWluKGRhdGUsIG9wdHMuZm9ybWF0LCBvcHRzLmlzVVRDKTtcbiAgfSk7XG5cbmFkZEZvcm1hdFRva2VuKCdkZGQnLCBudWxsLCBudWxsLFxuICBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgIHJldHVybiBvcHRzLmxvY2FsZS53ZWVrZGF5c1Nob3J0KGRhdGUsIG9wdHMuZm9ybWF0LCBvcHRzLmlzVVRDKTtcbiAgfSk7XG5cbmFkZEZvcm1hdFRva2VuKCdkZGRkJywgbnVsbCwgbnVsbCxcbiAgZnVuY3Rpb24gKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gb3B0cy5sb2NhbGUud2Vla2RheXMoZGF0ZSwgb3B0cy5mb3JtYXQsIG9wdHMuaXNVVEMpO1xuICB9KTtcblxuYWRkRm9ybWF0VG9rZW4oJ2UnLCBudWxsLCBudWxsLFxuICBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXRMb2NhbGVEYXlPZldlZWsoZGF0ZSwgb3B0cy5sb2NhbGUsIG9wdHMuaXNVVEMpLnRvU3RyaW5nKDEwKTtcbiAgICAvLyByZXR1cm4gZ2V0RGF5KGRhdGUsIG9wdHMuaXNVVEMpLnRvU3RyaW5nKDEwKTtcbiAgfSk7XG5hZGRGb3JtYXRUb2tlbignRScsIG51bGwsIG51bGwsXG4gIGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldElTT0RheU9mV2VlayhkYXRlLCBvcHRzLmlzVVRDKS50b1N0cmluZygxMCk7XG4gIH0pO1xuXG4vLyBBTElBU0VTXG5cbmFkZFVuaXRBbGlhcygnZGF5JywgJ2QnKTtcbmFkZFVuaXRBbGlhcygnd2Vla2RheScsICdlJyk7XG5hZGRVbml0QWxpYXMoJ2lzb1dlZWtkYXknLCAnRScpO1xuXG4vLyBQUklPUklUWVxuYWRkVW5pdFByaW9yaXR5KCdkYXknLCAxMSk7XG5hZGRVbml0UHJpb3JpdHkoJ3dlZWtkYXknLCAxMSk7XG5hZGRVbml0UHJpb3JpdHkoJ2lzb1dlZWtkYXknLCAxMSk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignZCcsIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdlJywgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ0UnLCBtYXRjaDF0bzIpO1xuXG5hZGRSZWdleFRva2VuKCdkZCcsIGZ1bmN0aW9uIChpc1N0cmljdDogYm9vbGVhbiwgbG9jYWxlOiBMb2NhbGUpOiBSZWdFeHAge1xuICByZXR1cm4gbG9jYWxlLndlZWtkYXlzTWluUmVnZXgoaXNTdHJpY3QpO1xufSk7XG5cbmFkZFJlZ2V4VG9rZW4oJ2RkZCcsIGZ1bmN0aW9uIChpc1N0cmljdDogYm9vbGVhbiwgbG9jYWxlOiBMb2NhbGUpOiBSZWdFeHAge1xuICByZXR1cm4gbG9jYWxlLndlZWtkYXlzU2hvcnRSZWdleChpc1N0cmljdCk7XG59KTtcbmFkZFJlZ2V4VG9rZW4oJ2RkZGQnLCBmdW5jdGlvbiAoaXNTdHJpY3Q6IGJvb2xlYW4sIGxvY2FsZTogTG9jYWxlKTogUmVnRXhwIHtcbiAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c1JlZ2V4KGlzU3RyaWN0KTtcbn0pO1xuXG5hZGRXZWVrUGFyc2VUb2tlbihbJ2RkJywgJ2RkZCcsICdkZGRkJ10sXG4gIGZ1bmN0aW9uIChpbnB1dDogc3RyaW5nLCB3ZWVrOiBXZWVrUGFyc2luZywgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZywgdG9rZW4pIHtcbiAgICBjb25zdCB3ZWVrZGF5ID0gY29uZmlnLl9sb2NhbGUud2Vla2RheXNQYXJzZShpbnB1dCwgdG9rZW4sIGNvbmZpZy5fc3RyaWN0KTtcbiAgICAvLyBpZiB3ZSBkaWRuJ3QgZ2V0IGEgd2Vla2RheSBuYW1lLCBtYXJrIHRoZSBkYXRlIGFzIGludmFsaWRcbiAgICBpZiAod2Vla2RheSAhPSBudWxsKSB7XG4gICAgICB3ZWVrLmQgPSB3ZWVrZGF5O1xuICAgIH0gZWxzZSB7XG4gICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pbnZhbGlkV2Vla2RheSA9ICEhaW5wdXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSk7XG5cbmFkZFdlZWtQYXJzZVRva2VuKFsnZCcsICdlJywgJ0UnXSxcbiAgZnVuY3Rpb24gKGlucHV0OiBzdHJpbmcsIHdlZWs6IFdlZWtQYXJzaW5nLCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnLCB0b2tlbjogc3RyaW5nKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIHdlZWtbdG9rZW5dID0gdG9JbnQoaW5wdXQpO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSk7XG5cbi8vIEhFTFBFUlNcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlV2Vla2RheShpbnB1dDogc3RyaW5nIHwgbnVtYmVyLCBsb2NhbGU6IExvY2FsZSk6IG51bWJlciB7XG4gIGlmICghaXNTdHJpbmcoaW5wdXQpKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG5cbiAgY29uc3QgX251bSA9IHBhcnNlSW50KGlucHV0LCAxMCk7XG4gIGlmICghaXNOYU4oX251bSkpIHtcbiAgICByZXR1cm4gX251bTtcbiAgfVxuXG4gIGNvbnN0IF93ZWVrRGF5ID0gbG9jYWxlLndlZWtkYXlzUGFyc2UoaW5wdXQpO1xuICBpZiAoaXNOdW1iZXIoX3dlZWtEYXkpKSB7XG4gICAgcmV0dXJuIF93ZWVrRGF5O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUlzb1dlZWtkYXkoaW5wdXQ6IHN0cmluZyB8IG51bWJlciwgbG9jYWxlOiBMb2NhbGUgPSBnZXRMb2NhbGUoKSk6IG51bWJlciB7XG4gIGlmIChpc1N0cmluZyhpbnB1dCkpIHtcbiAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzUGFyc2UoaW5wdXQpICUgNyB8fCA3O1xuICB9XG5cbiAgcmV0dXJuIGlzTnVtYmVyKGlucHV0KSAmJiBpc05hTihpbnB1dCkgPyBudWxsIDogaW5wdXQ7XG59XG5cbi8vIE1PTUVOVFNcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldERheU9mV2VlayhkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyLCBvcHRzOiB7IGlzVVRDPzogYm9vbGVhbjsgbG9jYWxlOiBMb2NhbGUgfSk6IERhdGUgfCBudW1iZXIge1xuICBpZiAoIWlucHV0KSB7XG4gICAgcmV0dXJuIGdldERheU9mV2VlayhkYXRlLCBvcHRzLmlzVVRDKTtcbiAgfVxuXG4gIHJldHVybiBzZXREYXlPZldlZWsoZGF0ZSwgaW5wdXQsIG9wdHMubG9jYWxlLCBvcHRzLmlzVVRDKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERheU9mV2VlayhkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyLCBsb2NhbGUgPSBnZXRMb2NhbGUoKSwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XG4gIGNvbnN0IGRheSA9IGdldERheShkYXRlLCBpc1VUQyk7XG4gIGNvbnN0IF9pbnB1dCA9IHBhcnNlV2Vla2RheShpbnB1dCwgbG9jYWxlKTtcblxuICByZXR1cm4gYWRkKGRhdGUsIF9pbnB1dCAtIGRheSwgJ2RheScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5T2ZXZWVrKGRhdGU6IERhdGUsIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB7XG4gIHJldHVybiBnZXREYXkoZGF0ZSwgaXNVVEMpO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIHRvZG86IHV0Y1xuLy8gZ2V0U2V0TG9jYWxlRGF5T2ZXZWVrXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlRGF5T2ZXZWVrKGRhdGU6IERhdGUsIGxvY2FsZSA9IGdldExvY2FsZSgpLCBpc1VUQz86IGJvb2xlYW4pOiBudW1iZXIge1xuICByZXR1cm4gKGdldERheShkYXRlLCBpc1VUQykgKyA3IC0gbG9jYWxlLmZpcnN0RGF5T2ZXZWVrKCkpICUgNztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldExvY2FsZURheU9mV2VlayhkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyLCBvcHRzOiB7IGxvY2FsZT86IExvY2FsZTsgaXNVVEM/OiBib29sZWFuIH0gPSB7fSk6IERhdGUge1xuICBjb25zdCB3ZWVrZGF5ID0gZ2V0TG9jYWxlRGF5T2ZXZWVrKGRhdGUsIG9wdHMubG9jYWxlLCBvcHRzLmlzVVRDKTtcblxuICByZXR1cm4gYWRkKGRhdGUsIGlucHV0IC0gd2Vla2RheSwgJ2RheScpO1xufVxuXG5cbi8vIGdldFNldElTT0RheU9mV2Vla1xuZXhwb3J0IGZ1bmN0aW9uIGdldElTT0RheU9mV2VlayhkYXRlOiBEYXRlLCBpc1VUQz86IGJvb2xlYW4pOiBudW1iZXIge1xuICByZXR1cm4gZ2V0RGF5KGRhdGUsIGlzVVRDKSB8fCA3O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SVNPRGF5T2ZXZWVrKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIgfCBzdHJpbmcsIG9wdHM6IHsgbG9jYWxlPzogTG9jYWxlIH0gPSB7fSk6IERhdGUge1xuICAvLyBiZWhhdmVzIHRoZSBzYW1lIGFzIG1vbWVudCNkYXkgZXhjZXB0XG4gIC8vIGFzIGEgZ2V0dGVyLCByZXR1cm5zIDcgaW5zdGVhZCBvZiAwICgxLTcgcmFuZ2UgaW5zdGVhZCBvZiAwLTYpXG4gIC8vIGFzIGEgc2V0dGVyLCBzdW5kYXkgc2hvdWxkIGJlbG9uZyB0byB0aGUgcHJldmlvdXMgd2Vlay5cblxuICBjb25zdCB3ZWVrZGF5ID0gcGFyc2VJc29XZWVrZGF5KGlucHV0LCBvcHRzLmxvY2FsZSk7XG5cbiAgcmV0dXJuIHNldERheU9mV2VlayhkYXRlLCBnZXREYXlPZldlZWsoZGF0ZSkgJSA3ID8gd2Vla2RheSA6IHdlZWtkYXkgLSA3KTtcbn1cbiIsImltcG9ydCB7IGdldEhvdXJzLCBnZXRNaW51dGVzLCBnZXRTZWNvbmRzIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyB6ZXJvRmlsbCB9IGZyb20gJy4uL3V0aWxzL3plcm8tZmlsbCc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiwgbWF0Y2gyLCBtYXRjaDN0bzQsIG1hdGNoNXRvNiB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBIT1VSLCBNSU5VVEUsIFNFQ09ORCB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgRGF0ZUFycmF5LCBEYXRlRm9ybWF0dGVyT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgZ2V0UGFyc2luZ0ZsYWdzIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmctZmxhZ3MnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5cbi8vIEZPUk1BVFRJTkdcblxuZnVuY3Rpb24gaEZvcm1hdChkYXRlOiBEYXRlLCBpc1VUQzogYm9vbGVhbik6IG51bWJlciB7XG4gIHJldHVybiBnZXRIb3VycyhkYXRlLCBpc1VUQykgJSAxMiB8fCAxMjtcbn1cblxuZnVuY3Rpb24ga0Zvcm1hdChkYXRlOiBEYXRlLCBpc1VUQzogYm9vbGVhbik6IG51bWJlciB7XG4gIHJldHVybiBnZXRIb3VycyhkYXRlLCBpc1VUQykgfHwgMjQ7XG59XG5cbmFkZEZvcm1hdFRva2VuKCdIJywgWydISCcsIDIsIGZhbHNlXSwgbnVsbCxcbiAgZnVuY3Rpb24gKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0SG91cnMoZGF0ZSwgb3B0cy5pc1VUQykudG9TdHJpbmcoMTApO1xuICB9KTtcbmFkZEZvcm1hdFRva2VuKCdoJywgWydoaCcsIDIsIGZhbHNlXSwgbnVsbCxcbiAgZnVuY3Rpb24gKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gaEZvcm1hdChkYXRlLCBvcHRzLmlzVVRDKS50b1N0cmluZygxMCk7XG4gIH0pO1xuYWRkRm9ybWF0VG9rZW4oJ2snLCBbJ2trJywgMiwgZmFsc2VdLCBudWxsLFxuICBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgIHJldHVybiBrRm9ybWF0KGRhdGUsIG9wdHMuaXNVVEMpLnRvU3RyaW5nKDEwKTtcbiAgfSk7XG5cbmFkZEZvcm1hdFRva2VuKCdobW0nLCBudWxsLCBudWxsLFxuICBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgIGNvbnN0IF9oID0gaEZvcm1hdChkYXRlLCBvcHRzLmlzVVRDKTtcbiAgICBjb25zdCBfbW0gPSB6ZXJvRmlsbChnZXRNaW51dGVzKGRhdGUsIG9wdHMuaXNVVEMpLCAyKTtcblxuICAgIHJldHVybiBgJHtfaH0ke19tbX1gO1xuICB9KTtcblxuYWRkRm9ybWF0VG9rZW4oJ2htbXNzJywgbnVsbCwgbnVsbCxcbiAgZnVuY3Rpb24gKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICBjb25zdCBfaCA9IGhGb3JtYXQoZGF0ZSwgb3B0cy5pc1VUQyk7XG4gICAgY29uc3QgX21tID0gemVyb0ZpbGwoZ2V0TWludXRlcyhkYXRlLCBvcHRzLmlzVVRDKSwgMik7XG4gICAgY29uc3QgX3NzID0gemVyb0ZpbGwoZ2V0U2Vjb25kcyhkYXRlLCBvcHRzLmlzVVRDKSwgMik7XG5cbiAgICByZXR1cm4gYCR7X2h9JHtfbW19JHtfc3N9YDtcbiAgfSk7XG5cbmFkZEZvcm1hdFRva2VuKCdIbW0nLCBudWxsLCBudWxsLFxuICBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgIGNvbnN0IF9IID0gZ2V0SG91cnMoZGF0ZSwgb3B0cy5pc1VUQyk7XG4gICAgY29uc3QgX21tID0gemVyb0ZpbGwoZ2V0TWludXRlcyhkYXRlLCBvcHRzLmlzVVRDKSwgMik7XG5cbiAgICByZXR1cm4gYCR7X0h9JHtfbW19YDtcbiAgfSk7XG5cbmFkZEZvcm1hdFRva2VuKCdIbW1zcycsIG51bGwsIG51bGwsXG4gIGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgY29uc3QgX0ggPSBnZXRIb3VycyhkYXRlLCBvcHRzLmlzVVRDKTtcbiAgICBjb25zdCBfbW0gPSB6ZXJvRmlsbChnZXRNaW51dGVzKGRhdGUsIG9wdHMuaXNVVEMpLCAyKTtcbiAgICBjb25zdCBfc3MgPSB6ZXJvRmlsbChnZXRTZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpLCAyKTtcblxuICAgIHJldHVybiBgJHtfSH0ke19tbX0ke19zc31gO1xuICB9KTtcblxuZnVuY3Rpb24gbWVyaWRpZW0odG9rZW46IHN0cmluZywgbG93ZXJjYXNlOiBib29sZWFuKTogdm9pZCB7XG4gIGFkZEZvcm1hdFRva2VuKHRva2VuLCBudWxsLCBudWxsLFxuICAgIGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gb3B0cy5sb2NhbGUubWVyaWRpZW0oZ2V0SG91cnMoZGF0ZSwgb3B0cy5pc1VUQyksIGdldE1pbnV0ZXMoZGF0ZSwgb3B0cy5pc1VUQyksIGxvd2VyY2FzZSk7XG4gICAgfSk7XG59XG5cbm1lcmlkaWVtKCdhJywgdHJ1ZSk7XG5tZXJpZGllbSgnQScsIGZhbHNlKTtcblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ2hvdXInLCAnaCcpO1xuXG4vLyBQUklPUklUWVxuYWRkVW5pdFByaW9yaXR5KCdob3VyJywgMTMpO1xuXG5cbi8vIFBBUlNJTkdcblxuZnVuY3Rpb24gbWF0Y2hNZXJpZGllbShpc1N0cmljdDogYm9vbGVhbiwgbG9jYWxlOiBMb2NhbGUpOiBSZWdFeHAge1xuICByZXR1cm4gbG9jYWxlLl9tZXJpZGllbVBhcnNlO1xufVxuXG5hZGRSZWdleFRva2VuKCdhJywgbWF0Y2hNZXJpZGllbSk7XG5hZGRSZWdleFRva2VuKCdBJywgbWF0Y2hNZXJpZGllbSk7XG5hZGRSZWdleFRva2VuKCdIJywgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ2gnLCBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignaycsIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdISCcsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ2hoJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbigna2snLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5cbmFkZFJlZ2V4VG9rZW4oJ2htbScsIG1hdGNoM3RvNCk7XG5hZGRSZWdleFRva2VuKCdobW1zcycsIG1hdGNoNXRvNik7XG5hZGRSZWdleFRva2VuKCdIbW0nLCBtYXRjaDN0bzQpO1xuYWRkUmVnZXhUb2tlbignSG1tc3MnLCBtYXRjaDV0bzYpO1xuXG5hZGRQYXJzZVRva2VuKFsnSCcsICdISCddLCBIT1VSKTtcbmFkZFBhcnNlVG9rZW4oWydrJywgJ2trJ10sXG4gIGZ1bmN0aW9uIChpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIGNvbnN0IGtJbnB1dCA9IHRvSW50KGlucHV0KTtcbiAgICBhcnJheVtIT1VSXSA9IGtJbnB1dCA9PT0gMjQgPyAwIDoga0lucHV0O1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSk7XG5hZGRQYXJzZVRva2VuKFsnYScsICdBJ10sIGZ1bmN0aW9uIChpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBjb25maWcuX2lzUG0gPSBjb25maWcuX2xvY2FsZS5pc1BNKGlucHV0KTtcbiAgY29uZmlnLl9tZXJpZGllbSA9IGlucHV0O1xuXG4gIHJldHVybiBjb25maWc7XG59KTtcbmFkZFBhcnNlVG9rZW4oWydoJywgJ2hoJ10sIGZ1bmN0aW9uIChpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0KTtcbiAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHRydWU7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn0pO1xuYWRkUGFyc2VUb2tlbignaG1tJywgZnVuY3Rpb24gKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIGNvbnN0IHBvcyA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvcykpO1xuICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvcykpO1xuICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcblxuICByZXR1cm4gY29uZmlnO1xufSk7XG5hZGRQYXJzZVRva2VuKCdobW1zcycsIGZ1bmN0aW9uIChpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBjb25zdCBwb3MxID0gaW5wdXQubGVuZ3RoIC0gNDtcbiAgY29uc3QgcG9zMiA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvczEpKTtcbiAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MxLCAyKSk7XG4gIGFycmF5W1NFQ09ORF0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zMikpO1xuICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcblxuICByZXR1cm4gY29uZmlnO1xufSk7XG5hZGRQYXJzZVRva2VuKCdIbW0nLCBmdW5jdGlvbiAoaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgY29uc3QgcG9zID0gaW5wdXQubGVuZ3RoIC0gMjtcbiAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zKSk7XG4gIGFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zKSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn0pO1xuYWRkUGFyc2VUb2tlbignSG1tc3MnLCBmdW5jdGlvbiAoaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgY29uc3QgcG9zMSA9IGlucHV0Lmxlbmd0aCAtIDQ7XG4gIGNvbnN0IHBvczIgPSBpbnB1dC5sZW5ndGggLSAyO1xuICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0LnN1YnN0cigwLCBwb3MxKSk7XG4gIGFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zMSwgMikpO1xuICBhcnJheVtTRUNPTkRdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczIpKTtcblxuICByZXR1cm4gY29uZmlnO1xufSk7XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlXG4vLyBGT1JNQVRUSU5HXG5cbmltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDEsIG1hdGNoMXRvMywgbWF0Y2gyLCBtYXRjaDMsIG1hdGNoVW5zaWduZWQgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBNSUxMSVNFQ09ORCB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IERhdGVBcnJheSwgRGF0ZUZvcm1hdHRlck9wdGlvbnMsIFdlZWtQYXJzaW5nIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IGdldE1pbGxpc2Vjb25kcyB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5cbmFkZEZvcm1hdFRva2VuKCdTJywgbnVsbCwgbnVsbCxcbiAgZnVuY3Rpb24gKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKH5+KGdldE1pbGxpc2Vjb25kcyhkYXRlLCBvcHRzLmlzVVRDKSAvIDEwMCkpLnRvU3RyaW5nKDEwKTtcbiAgfSk7XG5cbmFkZEZvcm1hdFRva2VuKG51bGwsIFsnU1MnLCAyLCBmYWxzZV0sIG51bGwsXG4gIGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgcmV0dXJuICh+fihnZXRNaWxsaXNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQykgLyAxMCkpLnRvU3RyaW5nKDEwKTtcbiAgfSk7XG5cbmFkZEZvcm1hdFRva2VuKG51bGwsIFsnU1NTJywgMywgZmFsc2VdLCBudWxsLFxuICBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgIHJldHVybiAoZ2V0TWlsbGlzZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpKS50b1N0cmluZygxMCk7XG4gIH0pO1xuYWRkRm9ybWF0VG9rZW4obnVsbCwgWydTU1NTJywgNCwgZmFsc2VdLCBudWxsLFxuICBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgIHJldHVybiAoZ2V0TWlsbGlzZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpICogMTApLnRvU3RyaW5nKDEwKTtcbiAgfSk7XG5hZGRGb3JtYXRUb2tlbihudWxsLCBbJ1NTU1NTJywgNSwgZmFsc2VdLCBudWxsLFxuICBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgIHJldHVybiAoZ2V0TWlsbGlzZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpICogMTAwKS50b1N0cmluZygxMCk7XG4gIH0pO1xuYWRkRm9ybWF0VG9rZW4obnVsbCwgWydTU1NTU1MnLCA2LCBmYWxzZV0sIG51bGwsXG4gIGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChnZXRNaWxsaXNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQykgKiAxMDAwKS50b1N0cmluZygxMCk7XG4gIH0pO1xuYWRkRm9ybWF0VG9rZW4obnVsbCwgWydTU1NTU1NTJywgNywgZmFsc2VdLCBudWxsLFxuICBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgIHJldHVybiAoZ2V0TWlsbGlzZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpICogMTAwMDApLnRvU3RyaW5nKDEwKTtcbiAgfSk7XG5hZGRGb3JtYXRUb2tlbihudWxsLCBbJ1NTU1NTU1NTJywgOCwgZmFsc2VdLCBudWxsLFxuICBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgIHJldHVybiAoZ2V0TWlsbGlzZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpICogMTAwMDAwKS50b1N0cmluZygxMCk7XG4gIH0pO1xuYWRkRm9ybWF0VG9rZW4obnVsbCwgWydTU1NTU1NTU1MnLCA5LCBmYWxzZV0sIG51bGwsXG4gIGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChnZXRNaWxsaXNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQykgKiAxMDAwMDAwKS50b1N0cmluZygxMCk7XG4gIH0pO1xuXG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCdtaWxsaXNlY29uZCcsICdtcycpO1xuXG4vLyBQUklPUklUWVxuXG5hZGRVbml0UHJpb3JpdHkoJ21pbGxpc2Vjb25kJywgMTYpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ1MnLCBtYXRjaDF0bzMsIG1hdGNoMSk7XG5hZGRSZWdleFRva2VuKCdTUycsIG1hdGNoMXRvMywgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ1NTUycsIG1hdGNoMXRvMywgbWF0Y2gzKTtcblxubGV0IHRva2VuO1xuZm9yICh0b2tlbiA9ICdTU1NTJzsgdG9rZW4ubGVuZ3RoIDw9IDk7IHRva2VuICs9ICdTJykge1xuICBhZGRSZWdleFRva2VuKHRva2VuLCBtYXRjaFVuc2lnbmVkKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VNcyhpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBhcnJheVtNSUxMSVNFQ09ORF0gPSB0b0ludChwYXJzZUZsb2F0KGAwLiR7aW5wdXR9YCkgKiAxMDAwKTtcblxuICByZXR1cm4gY29uZmlnO1xufVxuXG5mb3IgKHRva2VuID0gJ1MnOyB0b2tlbi5sZW5ndGggPD0gOTsgdG9rZW4gKz0gJ1MnKSB7XG4gIGFkZFBhcnNlVG9rZW4odG9rZW4sIHBhcnNlTXMpO1xufVxuLy8gTU9NRU5UU1xuXG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgZ2V0TWludXRlcyB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIsIG1hdGNoMiB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBNSU5VVEUgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IERhdGVGb3JtYXR0ZXJPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdtJywgWydtbScsIDIsIGZhbHNlXSwgbnVsbCxcbiAgZnVuY3Rpb24gKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0TWludXRlcyhkYXRlLCBvcHRzLmlzVVRDKS50b1N0cmluZygxMCk7XG4gIH0pO1xuXG4vLyBBTElBU0VTXG5cbmFkZFVuaXRBbGlhcygnbWludXRlJywgJ20nKTtcblxuLy8gUFJJT1JJVFlcblxuYWRkVW5pdFByaW9yaXR5KCdtaW51dGUnLCAxNCk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignbScsIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdtbScsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFBhcnNlVG9rZW4oWydtJywgJ21tJ10sIE1JTlVURSk7XG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IE1PTlRIIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBEYXRlQXJyYXksIERhdGVGb3JtYXR0ZXJPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IHNldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1zZXR0ZXJzJztcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignUScsIG51bGwsICdRbycsXG4gIGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldFF1YXJ0ZXIoZGF0ZSwgb3B0cy5pc1VUQykudG9TdHJpbmcoMTApO1xuICB9KTtcblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ3F1YXJ0ZXInLCAnUScpO1xuXG4vLyBQUklPUklUWVxuXG5hZGRVbml0UHJpb3JpdHkoJ3F1YXJ0ZXInLCA3KTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdRJywgbWF0Y2gxKTtcbmFkZFBhcnNlVG9rZW4oJ1EnLCBmdW5jdGlvbiAoaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgYXJyYXlbTU9OVEhdID0gKHRvSW50KGlucHV0KSAtIDEpICogMztcblxuICByZXR1cm4gY29uZmlnO1xufSk7XG5cbi8vIE1PTUVOVFNcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFF1YXJ0ZXIoZGF0ZTogRGF0ZSwgaXNVVEMgPSBmYWxzZSk6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLmNlaWwoKGdldE1vbnRoKGRhdGUsIGlzVVRDKSArIDEpIC8gMyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRRdWFydGVyKGRhdGU6IERhdGUsIHF1YXJ0ZXI6IG51bWJlciwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XG4gIHJldHVybiBzZXRNb250aChkYXRlLCAocXVhcnRlciAtIDEpICogMyArIGdldE1vbnRoKGRhdGUsIGlzVVRDKSAlIDMsIGlzVVRDKTtcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFNldFF1YXJ0ZXIoaW5wdXQpIHtcbi8vICAgcmV0dXJuIGlucHV0ID09IG51bGxcbi8vICAgICA/IE1hdGguY2VpbCgodGhpcy5tb250aCgpICsgMSkgLyAzKVxuLy8gICAgIDogdGhpcy5tb250aCgoaW5wdXQgLSAxKSAqIDMgKyB0aGlzLm1vbnRoKCkgJSAzKTtcbi8vIH1cbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBnZXRTZWNvbmRzIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiwgbWF0Y2gyIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IFNFQ09ORCB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgRGF0ZUZvcm1hdHRlck9wdGlvbnMgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ3MnLCBbJ3NzJywgMiwgZmFsc2VdLCBudWxsLFxuICBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXRTZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpLnRvU3RyaW5nKDEwKTtcbiAgfSk7XG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCdzZWNvbmQnLCAncycpO1xuXG4vLyBQUklPUklUWVxuXG5hZGRVbml0UHJpb3JpdHkoJ3NlY29uZCcsIDE1KTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdzJywgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ3NzJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUGFyc2VUb2tlbihbJ3MnLCAnc3MnXSwgU0VDT05EKTtcbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyB1bml4IH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoU2lnbmVkLCBtYXRjaFRpbWVzdGFtcCB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW59IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgRGF0ZUFycmF5IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ1gnLCBudWxsLCBudWxsLCBmdW5jdGlvbiAoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gIHJldHVybiB1bml4KGRhdGUpLnRvU3RyaW5nKDEwKTtcbn0pO1xuYWRkRm9ybWF0VG9rZW4oJ3gnLCBudWxsLCBudWxsLCBmdW5jdGlvbiAoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gIHJldHVybiBkYXRlLnZhbHVlT2YoKS50b1N0cmluZygxMCk7XG59KTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCd4JywgbWF0Y2hTaWduZWQpO1xuYWRkUmVnZXhUb2tlbignWCcsIG1hdGNoVGltZXN0YW1wKTtcblxuYWRkUGFyc2VUb2tlbignWCcsIGZ1bmN0aW9uIChpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBjb25maWcuX2QgPSBuZXcgRGF0ZShwYXJzZUZsb2F0KGlucHV0KSAqIDEwMDApO1xuXG4gIHJldHVybiBjb25maWc7XG59KTtcbmFkZFBhcnNlVG9rZW4oJ3gnLCBmdW5jdGlvbiAoaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgY29uZmlnLl9kID0gbmV3IERhdGUodG9JbnQoaW5wdXQpKTtcblxuICByZXR1cm4gY29uZmlnO1xufSk7XG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyB3ZWVrT2ZZZWFyIH0gZnJvbSAnLi93ZWVrLWNhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiwgbWF0Y2gyIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBhZGRXZWVrUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgRGF0ZUZvcm1hdHRlck9wdGlvbnMsIFdlZWtQYXJzaW5nIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlcyc7XG5pbXBvcnQgeyBhZGQgfSBmcm9tICcuLi9tb21lbnQvYWRkLXN1YnRyYWN0JztcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbigndycsIFsnd3cnLCAyLCBmYWxzZV0sICd3bycsXG4gIGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldFdlZWsoZGF0ZSwgb3B0cy5sb2NhbGUpLnRvU3RyaW5nKDEwKTtcbiAgfSk7XG5cbmFkZEZvcm1hdFRva2VuKCdXJywgWydXVycsIDIsIGZhbHNlXSwgJ1dvJyxcbiAgZnVuY3Rpb24gKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXRJU09XZWVrKGRhdGUpLnRvU3RyaW5nKDEwKTtcbiAgfSk7XG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCd3ZWVrJywgJ3cnKTtcbmFkZFVuaXRBbGlhcygnaXNvV2VlaycsICdXJyk7XG5cbi8vIFBSSU9SSVRJRVNcblxuYWRkVW5pdFByaW9yaXR5KCd3ZWVrJywgNSk7XG5hZGRVbml0UHJpb3JpdHkoJ2lzb1dlZWsnLCA1KTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCd3JywgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ3d3JywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignVycsIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdXVycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcblxuYWRkV2Vla1BhcnNlVG9rZW4oWyd3JywgJ3d3JywgJ1cnLCAnV1cnXSxcbiAgZnVuY3Rpb24gKGlucHV0OiBzdHJpbmcsIHdlZWs6IFdlZWtQYXJzaW5nLCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnLCB0b2tlbjogc3RyaW5nKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIHdlZWtbdG9rZW4uc3Vic3RyKDAsIDEpXSA9IHRvSW50KGlucHV0KTtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH0pO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0U2V0V2VlayAoaW5wdXQpIHtcbi8vICAgdmFyIHdlZWsgPSB0aGlzLmxvY2FsZURhdGEoKS53ZWVrKHRoaXMpO1xuLy8gICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IHdlZWsgOiB0aGlzLmFkZCgoaW5wdXQgLSB3ZWVrKSAqIDcsICdkJyk7XG4vLyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRXZWVrKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIsIGxvY2FsZSA9IGdldExvY2FsZSgpKTogRGF0ZSB7XG4gIGNvbnN0IHdlZWsgPSBnZXRXZWVrKGRhdGUsIGxvY2FsZSk7XG5cbiAgcmV0dXJuIGFkZChkYXRlLCAoaW5wdXQgLSB3ZWVrKSAqIDcsICdkYXknKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWsoZGF0ZTogRGF0ZSwgbG9jYWxlID0gZ2V0TG9jYWxlKCksIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB7XG4gIHJldHVybiBsb2NhbGUud2VlayhkYXRlLCBpc1VUQyk7XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRTZXRJU09XZWVrIChpbnB1dCkge1xuLy8gICB2YXIgd2VlayA9IHdlZWtPZlllYXIodGhpcywgMSwgNCkud2Vlaztcbi8vICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB3ZWVrIDogdGhpcy5hZGQoKGlucHV0IC0gd2VlaykgKiA3LCAnZCcpO1xuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SVNPV2VlayhkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyKTogRGF0ZSB7XG4gIGNvbnN0IHdlZWsgPSBnZXRJU09XZWVrKGRhdGUpO1xuXG4gIHJldHVybiBhZGQoZGF0ZSwgKGlucHV0IC0gd2VlaykgKiA3LCAnZGF5Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrKGRhdGU6IERhdGUsIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB7XG4gIHJldHVybiB3ZWVrT2ZZZWFyKGRhdGUsIDEsIDQsIGlzVVRDKS53ZWVrO1xufVxuXG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIsIG1hdGNoMXRvNCwgbWF0Y2gxdG82LCBtYXRjaDIsIG1hdGNoNCwgbWF0Y2g2LCBtYXRjaFNpZ25lZCB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFdlZWtQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBwYXJzZVR3b0RpZ2l0WWVhciB9IGZyb20gJy4veWVhcic7XG5pbXBvcnQgeyBkYXlPZlllYXJGcm9tV2Vla3MsIHdlZWtPZlllYXIsIHdlZWtzSW5ZZWFyIH0gZnJvbSAnLi93ZWVrLWNhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB7IGNyZWF0ZVVUQ0RhdGUgfSBmcm9tICcuLi9jcmVhdGUvZGF0ZS1mcm9tLWFycmF5JztcbmltcG9ydCB7IGdldElTT1dlZWssIGdldFdlZWsgfSBmcm9tICcuL3dlZWsnO1xuaW1wb3J0IHsgZ2V0SVNPRGF5T2ZXZWVrLCBnZXRMb2NhbGVEYXlPZldlZWsgfSBmcm9tICcuL2RheS1vZi13ZWVrJztcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGVzJztcbmltcG9ydCB7IHNldERhdGUsIHNldEZ1bGxZZWFyLCBzZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtc2V0dGVycyc7XG5pbXBvcnQgeyBnZXREYXRlLCBnZXRGdWxsWWVhciwgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0dGVyRm4sIERhdGVGb3JtYXR0ZXJPcHRpb25zLCBXZWVrUGFyc2luZyB9IGZyb20gJy4uL3R5cGVzJztcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbihudWxsLCBbJ2dnJywgMiwgZmFsc2VdLCBudWxsLFxuICBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgIC8vIHJldHVybiB0aGlzLndlZWtZZWFyKCkgJSAxMDA7XG4gICAgcmV0dXJuIChnZXRXZWVrWWVhcihkYXRlLCBvcHRzLmxvY2FsZSkgJSAxMDApLnRvU3RyaW5nKCk7XG4gIH0pO1xuXG5hZGRGb3JtYXRUb2tlbihudWxsLCBbJ0dHJywgMiwgZmFsc2VdLCBudWxsLFxuICBmdW5jdGlvbiAoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgLy8gcmV0dXJuIHRoaXMuaXNvV2Vla1llYXIoKSAlIDEwMDtcbiAgICByZXR1cm4gKGdldElTT1dlZWtZZWFyKGRhdGUpICUgMTAwKS50b1N0cmluZygpO1xuICB9KTtcblxuZnVuY3Rpb24gYWRkV2Vla1llYXJGb3JtYXRUb2tlbih0b2tlbjogc3RyaW5nLCBnZXR0ZXI6IERhdGVGb3JtYXR0ZXJGbik6IHZvaWQge1xuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbdG9rZW4sIHRva2VuLmxlbmd0aCwgZmFsc2VdLCBudWxsLCBnZXR0ZXIpO1xufVxuXG5mdW5jdGlvbiBfZ2V0V2Vla1llYXJGb3JtYXRDYihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gIHJldHVybiBnZXRXZWVrWWVhcihkYXRlLCBvcHRzLmxvY2FsZSkudG9TdHJpbmcoKTtcbn1cblxuZnVuY3Rpb24gX2dldElTT1dlZWtZZWFyRm9ybWF0Q2IoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gIHJldHVybiBnZXRJU09XZWVrWWVhcihkYXRlKS50b1N0cmluZygpO1xufVxuXG5hZGRXZWVrWWVhckZvcm1hdFRva2VuKCdnZ2dnJywgX2dldFdlZWtZZWFyRm9ybWF0Q2IpO1xuYWRkV2Vla1llYXJGb3JtYXRUb2tlbignZ2dnZ2cnLCBfZ2V0V2Vla1llYXJGb3JtYXRDYik7XG5hZGRXZWVrWWVhckZvcm1hdFRva2VuKCdHR0dHJywgX2dldElTT1dlZWtZZWFyRm9ybWF0Q2IpO1xuYWRkV2Vla1llYXJGb3JtYXRUb2tlbignR0dHR0cnLCBfZ2V0SVNPV2Vla1llYXJGb3JtYXRDYik7XG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCd3ZWVrWWVhcicsICdnZycpO1xuYWRkVW5pdEFsaWFzKCdpc29XZWVrWWVhcicsICdHRycpO1xuXG4vLyBQUklPUklUWVxuXG5hZGRVbml0UHJpb3JpdHkoJ3dlZWtZZWFyJywgMSk7XG5hZGRVbml0UHJpb3JpdHkoJ2lzb1dlZWtZZWFyJywgMSk7XG5cblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdHJywgbWF0Y2hTaWduZWQpO1xuYWRkUmVnZXhUb2tlbignZycsIG1hdGNoU2lnbmVkKTtcbmFkZFJlZ2V4VG9rZW4oJ0dHJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignZ2cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRSZWdleFRva2VuKCdHR0dHJywgbWF0Y2gxdG80LCBtYXRjaDQpO1xuYWRkUmVnZXhUb2tlbignZ2dnZycsIG1hdGNoMXRvNCwgbWF0Y2g0KTtcbmFkZFJlZ2V4VG9rZW4oJ0dHR0dHJywgbWF0Y2gxdG82LCBtYXRjaDYpO1xuYWRkUmVnZXhUb2tlbignZ2dnZ2cnLCBtYXRjaDF0bzYsIG1hdGNoNik7XG5cbmFkZFdlZWtQYXJzZVRva2VuKFsnZ2dnZycsICdnZ2dnZycsICdHR0dHJywgJ0dHR0dHJ10sXG4gIGZ1bmN0aW9uIChpbnB1dCwgd2VlazogV2Vla1BhcnNpbmcsIGNvbmZpZywgdG9rZW4pIHtcbiAgICB3ZWVrW3Rva2VuLnN1YnN0cigwLCAyKV0gPSB0b0ludChpbnB1dCk7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9KTtcblxuYWRkV2Vla1BhcnNlVG9rZW4oWydnZycsICdHRyddLCBmdW5jdGlvbiAoaW5wdXQsIHdlZWs6IFdlZWtQYXJzaW5nLCBjb25maWcsIHRva2VuKSB7XG4gIHdlZWtbdG9rZW5dID0gcGFyc2VUd29EaWdpdFllYXIoaW5wdXQpO1xuXG4gIHJldHVybiBjb25maWc7XG59KTtcblxuLy8gTU9NRU5UU1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0V2Vla1llYXIoZGF0ZTogRGF0ZSwgaW5wdXQ6IG51bWJlciwgbG9jYWxlID0gZ2V0TG9jYWxlKCksIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB8IERhdGUge1xuICByZXR1cm4gZ2V0U2V0V2Vla1llYXJIZWxwZXIoZGF0ZSxcbiAgICBpbnB1dCxcbiAgICAvLyB0aGlzLndlZWsoKSxcbiAgICBnZXRXZWVrKGRhdGUsIGxvY2FsZSwgaXNVVEMpLFxuICAgIC8vIHRoaXMud2Vla2RheSgpLFxuICAgIGdldExvY2FsZURheU9mV2VlayhkYXRlLCBsb2NhbGUsIGlzVVRDKSxcbiAgICBsb2NhbGUuZmlyc3REYXlPZldlZWsoKSxcbiAgICBsb2NhbGUuZmlyc3REYXlPZlllYXIoKSxcbiAgICBpc1VUQyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrWWVhcihkYXRlOiBEYXRlLCBsb2NhbGUgPSBnZXRMb2NhbGUoKSwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHtcbiAgcmV0dXJuIHdlZWtPZlllYXIoZGF0ZSwgbG9jYWxlLmZpcnN0RGF5T2ZXZWVrKCksIGxvY2FsZS5maXJzdERheU9mWWVhcigpLCBpc1VUQykueWVhcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldElTT1dlZWtZZWFyKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB8IERhdGUge1xuICByZXR1cm4gZ2V0U2V0V2Vla1llYXJIZWxwZXIoZGF0ZSwgaW5wdXQsIGdldElTT1dlZWsoZGF0ZSwgaXNVVEMpLCBnZXRJU09EYXlPZldlZWsoZGF0ZSwgaXNVVEMpLCAxLCA0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldElTT1dlZWtZZWFyKGRhdGU6IERhdGUsIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB7XG4gIHJldHVybiB3ZWVrT2ZZZWFyKGRhdGUsIDEsIDQsIGlzVVRDKS55ZWFyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPV2Vla3NJblllYXIoZGF0ZTogRGF0ZSwgaXNVVEM/OiBib29sZWFuKSB7XG4gIHJldHVybiB3ZWVrc0luWWVhcihnZXRGdWxsWWVhcihkYXRlLCBpc1VUQyksIDEsIDQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2Vla3NJblllYXIoZGF0ZTogRGF0ZSwgaXNVVEM/OiBib29sZWFuLCBsb2NhbGU6IExvY2FsZSA9IGdldExvY2FsZSgpKTogbnVtYmVyIHtcbiAgcmV0dXJuIHdlZWtzSW5ZZWFyKGdldEZ1bGxZZWFyKGRhdGUsIGlzVVRDKSwgbG9jYWxlLmZpcnN0RGF5T2ZXZWVrKCksIGxvY2FsZS5maXJzdERheU9mWWVhcigpKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2V0V2Vla1llYXJIZWxwZXIoZGF0ZTogRGF0ZSwgaW5wdXQ6IG51bWJlciwgd2VlazogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2RheTogbnVtYmVyLCBkb3c6IG51bWJlciwgZG95OiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB8IERhdGUge1xuICBpZiAoIWlucHV0KSB7XG4gICAgcmV0dXJuIGdldFdlZWtZZWFyKGRhdGUsIHZvaWQgMCwgaXNVVEMpO1xuICB9XG5cbiAgY29uc3Qgd2Vla3NUYXJnZXQgPSB3ZWVrc0luWWVhcihpbnB1dCwgZG93LCBkb3kpO1xuICBjb25zdCBfd2VlayA9IHdlZWsgPiB3ZWVrc1RhcmdldCA/IHdlZWtzVGFyZ2V0IDogd2VlaztcblxuICByZXR1cm4gc2V0V2Vla0FsbChkYXRlLCBpbnB1dCwgX3dlZWssIHdlZWtkYXksIGRvdywgZG95KTtcbn1cblxuZnVuY3Rpb24gc2V0V2Vla0FsbChkYXRlOiBEYXRlLCB3ZWVrWWVhcjogbnVtYmVyLCB3ZWVrOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIHdlZWtkYXk6IG51bWJlciwgZG93OiBudW1iZXIsIGRveTogbnVtYmVyKTogRGF0ZSB7XG4gIGNvbnN0IGRheU9mWWVhckRhdGEgPSBkYXlPZlllYXJGcm9tV2Vla3Mod2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KTtcbiAgY29uc3QgX2RhdGUgPSBjcmVhdGVVVENEYXRlKGRheU9mWWVhckRhdGEueWVhciwgMCwgZGF5T2ZZZWFyRGF0YS5kYXlPZlllYXIpO1xuICBzZXRGdWxsWWVhcihkYXRlLCBnZXRGdWxsWWVhcihfZGF0ZSwgdHJ1ZSksIHRydWUpO1xuICBzZXRNb250aChkYXRlLCBnZXRNb250aChfZGF0ZSwgdHJ1ZSksIHRydWUpO1xuICBzZXREYXRlKGRhdGUsIGdldERhdGUoX2RhdGUsIHRydWUpLCB0cnVlKTtcblxuICByZXR1cm4gZGF0ZTtcbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBBcmFiaWMgW2FyXVxuLy8hIGF1dGhvciA6IEFiZGVsIFNhaWQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9hYmRlbHNhaWRcbi8vISBhdXRob3IgOiBBaG1lZCBFbGtoYXRpYlxuLy8hIGF1dGhvciA6IGZvcmFiaSBodHRwczovL2dpdGh1Yi5jb20vZm9yYWJpXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuY29uc3Qgc3ltYm9sTWFwOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcbiAgMTogJ8OZwqEnLFxuICAyOiAnw5nCoicsXG4gIDM6ICfDmcKjJyxcbiAgNDogJ8OZwqQnLFxuICA1OiAnw5nCpScsXG4gIDY6ICfDmcKmJyxcbiAgNzogJ8OZwqcnLFxuICA4OiAnw5nCqCcsXG4gIDk6ICfDmcKpJyxcbiAgMDogJ8OZwqAnXG59O1xuY29uc3QgbnVtYmVyTWFwOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcbiAgJ8OZwqEnOiAnMScsXG4gICfDmcKiJzogJzInLFxuICAnw5nCoyc6ICczJyxcbiAgJ8OZwqQnOiAnNCcsXG4gICfDmcKlJzogJzUnLFxuICAnw5nCpic6ICc2JyxcbiAgJ8OZwqcnOiAnNycsXG4gICfDmcKoJzogJzgnLFxuICAnw5nCqSc6ICc5JyxcbiAgJ8OZwqAnOiAnMCdcbn07XG5jb25zdCBwbHVyYWxGb3JtID0gZnVuY3Rpb24gKG51bTogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIG51bSA9PT0gMCA/IDAgOiBudW0gPT09IDEgPyAxIDogbnVtID09PSAyID8gMiA6IG51bSAlIDEwMCA+PSAzICYmIG51bSAlIDEwMCA8PSAxMCA/IDMgOiBudW0gJSAxMDAgPj0gMTEgPyA0IDogNTtcbn07XG5jb25zdCBwbHVyYWxzOiB7W2tleTogc3RyaW5nXTogW3N0cmluZywgc3RyaW5nLCBbc3RyaW5nLCBzdHJpbmddLCBzdHJpbmcsIHN0cmluZywgc3RyaW5nXX0gPSB7XG4gIHM6IFsnw5jCo8OZwoLDmcKEIMOZwoXDmcKGIMOYwqvDmMKnw5nChsOZworDmMKpJywgJ8OYwqvDmMKnw5nChsOZworDmMKpIMOZwojDmMKnw5jCrcOYwq/DmMKpJywgWyfDmMKrw5jCp8OZwobDmcKKw5jCqsOYwqfDmcKGJywgJ8OYwqvDmMKnw5nChsOZworDmMKqw5nCisOZwoYnXSwgJyVkIMOYwqvDmcKIw5jCp8OZwoYnLCAnJWQgw5jCq8OYwqfDmcKGw5nCisOYwqknLCAnJWQgw5jCq8OYwqfDmcKGw5nCisOYwqknXSxcbiAgbTogWyfDmMKjw5nCgsOZwoQgw5nChcOZwoYgw5jCr8OZwoLDmcKKw5nCgsOYwqknLCAnw5jCr8OZwoLDmcKKw5nCgsOYwqkgw5nCiMOYwqfDmMKtw5jCr8OYwqknLCBbJ8OYwq/DmcKCw5nCisOZwoLDmMKqw5jCp8OZwoYnLCAnw5jCr8OZwoLDmcKKw5nCgsOYwqrDmcKKw5nChiddLCAnJWQgw5jCr8OZwoLDmMKnw5jCpsOZwoInLCAnJWQgw5jCr8OZwoLDmcKKw5nCgsOYwqknLCAnJWQgw5jCr8OZwoLDmcKKw5nCgsOYwqknXSxcbiAgaDogWyfDmMKjw5nCgsOZwoQgw5nChcOZwoYgw5jCs8OYwqfDmMK5w5jCqScsICfDmMKzw5jCp8OYwrnDmMKpIMOZwojDmMKnw5jCrcOYwq/DmMKpJywgWyfDmMKzw5jCp8OYwrnDmMKqw5jCp8OZwoYnLCAnw5jCs8OYwqfDmMK5w5jCqsOZworDmcKGJ10sICclZCDDmMKzw5jCp8OYwrnDmMKnw5jCqicsICclZCDDmMKzw5jCp8OYwrnDmMKpJywgJyVkIMOYwrPDmMKnw5jCucOYwqknXSxcbiAgZDogWyfDmMKjw5nCgsOZwoQgw5nChcOZwoYgw5nCisOZwojDmcKFJywgJ8OZworDmcKIw5nChSDDmcKIw5jCp8OYwq3DmMKvJywgWyfDmcKKw5nCiMOZwoXDmMKnw5nChicsICfDmcKKw5nCiMOZwoXDmcKKw5nChiddLCAnJWQgw5jCo8OZworDmMKnw5nChScsICclZCDDmcKKw5nCiMOZwoXDmcKLw5jCpycsICclZCDDmcKKw5nCiMOZwoUnXSxcbiAgTTogWyfDmMKjw5nCgsOZwoQgw5nChcOZwoYgw5jCtMOZwofDmMKxJywgJ8OYwrTDmcKHw5jCsSDDmcKIw5jCp8OYwq3DmMKvJywgWyfDmMK0w5nCh8OYwrHDmMKnw5nChicsICfDmMK0w5nCh8OYwrHDmcKKw5nChiddLCAnJWQgw5jCo8OYwrTDmcKHw5jCsScsICclZCDDmMK0w5nCh8OYwrHDmMKnJywgJyVkIMOYwrTDmcKHw5jCsSddLFxuICB5OiBbJ8OYwqPDmcKCw5nChCDDmcKFw5nChiDDmMK5w5jCp8OZwoUnLCAnw5jCucOYwqfDmcKFIMOZwojDmMKnw5jCrcOYwq8nLCBbJ8OYwrnDmMKnw5nChcOYwqfDmcKGJywgJ8OYwrnDmMKnw5nChcOZworDmcKGJ10sICclZCDDmMKjw5jCucOZwojDmMKnw5nChScsICclZCDDmMK5w5jCp8OZwoXDmcKLw5jCpycsICclZCDDmMK5w5jCp8OZwoUnXVxufTtcbmNvbnN0IHBsdXJhbGl6ZSA9IGZ1bmN0aW9uICh1OiBzdHJpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgY29uc3QgZiA9IHBsdXJhbEZvcm0obnVtKTtcbiAgICBsZXQgc3RyID0gcGx1cmFsc1t1XVtwbHVyYWxGb3JtKG51bSldO1xuICAgIGlmIChmID09PSAyKSB7XG4gICAgICBzdHIgPSBzdHJbd2l0aG91dFN1ZmZpeCA/IDAgOiAxXTtcbiAgICB9XG5cbiAgICByZXR1cm4gKHN0ciBhcyBzdHJpbmcpLnJlcGxhY2UoLyVkL2ksIG51bS50b1N0cmluZygpKTtcbiAgfTtcbn07XG5jb25zdCBtb250aHM6IHN0cmluZ1tdID0gW1xuICAnw5nCisOZwobDmMKnw5nCisOYwrEnLFxuICAnw5nCgcOYwqjDmMKxw5jCp8OZworDmMKxJyxcbiAgJ8OZwoXDmMKnw5jCscOYwrMnLFxuICAnw5jCo8OYwqjDmMKxw5nCisOZwoQnLFxuICAnw5nChcOYwqfDmcKKw5nCiCcsXG4gICfDmcKKw5nCiMOZwobDmcKKw5nCiCcsXG4gICfDmcKKw5nCiMOZwoTDmcKKw5nCiCcsXG4gICfDmMKjw5jCusOYwrPDmMK3w5jCsycsXG4gICfDmMKzw5jCqMOYwqrDmcKFw5jCqMOYwrEnLFxuICAnw5jCo8OZwoPDmMKqw5nCiMOYwqjDmMKxJyxcbiAgJ8OZwobDmcKIw5nCgcOZwoXDmMKow5jCsScsXG4gICfDmMKvw5nCisOYwrPDmcKFw5jCqMOYwrEnXG5dO1xuXG5leHBvcnQgY29uc3QgYXJMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdhcicsXG4gIG1vbnRocyxcbiAgbW9udGhzU2hvcnQ6IG1vbnRocyxcbiAgd2Vla2RheXM6ICfDmMKnw5nChMOYwqPDmMKtw5jCr1/DmMKnw5nChMOYwqXDmMKrw5nChsOZworDmcKGX8OYwqfDmcKEw5jCq8OZwoTDmMKnw5jCq8OYwqfDmMKhX8OYwqfDmcKEw5jCo8OYwrHDmMKow5jCucOYwqfDmMKhX8OYwqfDmcKEw5jCrsOZwoXDmcKKw5jCs1/DmMKnw5nChMOYwqzDmcKFw5jCucOYwqlfw5jCp8OZwoTDmMKzw5jCqMOYwqonLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICfDmMKjw5jCrcOYwq9fw5jCpcOYwqvDmcKGw5nCisOZwoZfw5jCq8OZwoTDmMKnw5jCq8OYwqfDmMKhX8OYwqPDmMKxw5jCqMOYwrnDmMKnw5jCoV/DmMKuw5nChcOZworDmMKzX8OYwqzDmcKFw5jCucOYwqlfw5jCs8OYwqjDmMKqJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ8OYwq1fw5nChl/DmMKrX8OYwrFfw5jCrl/DmMKsX8OYwrMnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ0QvXFx1MjAwRk0vXFx1MjAwRllZWVknLFxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCBEIE1NTU0gWVlZWSBISDptbSdcbiAgfSxcbiAgbWVyaWRpZW1QYXJzZTogL8OYwrV8w5nChS8sXG4gIGlzUE0oaW5wdXQpIHtcbiAgICByZXR1cm4gJ8OZwoUnID09PSBpbnB1dDtcbiAgfSxcbiAgbWVyaWRpZW0oaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgaWYgKGhvdXIgPCAxMikge1xuICAgICAgcmV0dXJuICfDmMK1JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICfDmcKFJztcbiAgICB9XG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1vDmMKnw5nChMOZworDmcKIw5nChSDDmMK5w5nChsOYwq8gw5jCp8OZwoTDmMKzw5jCp8OYwrnDmMKpXSBMVCcsXG4gICAgbmV4dERheTogJ1vDmMK6w5jCr8OZwovDmMKnIMOYwrnDmcKGw5jCryDDmMKnw5nChMOYwrPDmMKnw5jCucOYwqldIExUJyxcbiAgICBuZXh0V2VlazogJ2RkZGQgW8OYwrnDmcKGw5jCryDDmMKnw5nChMOYwrPDmMKnw5jCucOYwqldIExUJyxcbiAgICBsYXN0RGF5OiAnW8OYwqPDmcKFw5jCsyDDmMK5w5nChsOYwq8gw5jCp8OZwoTDmMKzw5jCp8OYwrnDmMKpXSBMVCcsXG4gICAgbGFzdFdlZWs6ICdkZGRkIFvDmMK5w5nChsOYwq8gw5jCp8OZwoTDmMKzw5jCp8OYwrnDmMKpXSBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICfDmMKow5jCucOYwq8gJXMnLFxuICAgIHBhc3Q6ICfDmcKFw5nChsOYwrAgJXMnLFxuICAgIHM6IHBsdXJhbGl6ZSgncycpLFxuICAgIHNzOiBwbHVyYWxpemUoJ3MnKSxcbiAgICBtOiBwbHVyYWxpemUoJ20nKSxcbiAgICBtbTogcGx1cmFsaXplKCdtJyksXG4gICAgaDogcGx1cmFsaXplKCdoJyksXG4gICAgaGg6IHBsdXJhbGl6ZSgnaCcpLFxuICAgIGQ6IHBsdXJhbGl6ZSgnZCcpLFxuICAgIGRkOiBwbHVyYWxpemUoJ2QnKSxcbiAgICBNOiBwbHVyYWxpemUoJ00nKSxcbiAgICBNTTogcGx1cmFsaXplKCdNJyksXG4gICAgeTogcGx1cmFsaXplKCd5JyksXG4gICAgeXk6IHBsdXJhbGl6ZSgneScpXG4gIH0sXG4gIHByZXBhcnNlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1vDmcKhw5nCosOZwqPDmcKkw5nCpcOZwqbDmcKnw5nCqMOZwqnDmcKgXS9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiBudW1iZXJNYXBbbWF0Y2hdO1xuICAgIH0pLnJlcGxhY2UoL8OYwowvZywgJywnKTtcbiAgfSxcbiAgcG9zdGZvcm1hdChzdHI6IHN0cmluZykge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxkL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgcmV0dXJuIHN5bWJvbE1hcFttYXRjaF07XG4gICAgfSkucmVwbGFjZSgvLC9nLCAnw5jCjCcpO1xuICB9LFxuICB3ZWVrOiB7XG4gICAgZG93OiA2LCAvLyBTYXR1cmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogMTIgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogQ3plY2ggW2NzXVxuLy8hIGF1dGhvciA6IHBldHJiZWxhIDogaHR0cHM6Ly9naXRodWIuY29tL3BldHJiZWxhXG5cbmNvbnN0IG1vbnRoczogc3RyaW5nW10gPSAnbGVkZW5fw4PCum5vcl9iw4XCmWV6ZW5fZHViZW5fa3bDhMKbdGVuX8OEwo1lcnZlbl/DhMKNZXJ2ZW5lY19zcnBlbl96w4PCocOFwpnDg8KtX8OFwpnDg8KtamVuX2xpc3RvcGFkX3Byb3NpbmVjJy5zcGxpdCgnXycpO1xuY29uc3QgbW9udGhzU2hvcnQ6IHN0cmluZ1tdID0gJ2xlZF/Dg8K6bm9fYsOFwpllX2R1Yl9rdsOEwptfw4TCjXZuX8OEwo12Y19zcnBfesODwqHDhcKZX8OFwpnDg8Ktal9saXNfcHJvJy5zcGxpdCgnXycpO1xuXG5mdW5jdGlvbiBwbHVyYWwobnVtOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIChudW0gPiAxKSAmJiAobnVtIDwgNSkgJiYgKH5+KG51bSAvIDEwKSAhPT0gMSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZShudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgY29uc3QgcmVzdWx0ID0gbnVtICsgJyAnO1xuXG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSAncyc6ICAvLyBhIGZldyBzZWNvbmRzIC8gaW4gYSBmZXcgc2Vjb25kcyAvIGEgZmV3IHNlY29uZHMgYWdvXG4gICAgICByZXR1cm4gKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpID8gJ3DDg8KhciBzZWt1bmQnIDogJ3DDg8KhciBzZWt1bmRhbWknO1xuICAgIGNhc2UgJ3NzJzogLy8gOSBzZWNvbmRzIC8gaW4gOSBzZWNvbmRzIC8gOSBzZWNvbmRzIGFnb1xuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdzZWt1bmR5JyA6ICdzZWt1bmQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnc2VrdW5kYW1pJztcbiAgICAgIH1cbiAgICAvLyBicmVhaztcbiAgICBjYXNlICdtJzogIC8vIGEgbWludXRlIC8gaW4gYSBtaW51dGUgLyBhIG1pbnV0ZSBhZ29cbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ21pbnV0YScgOiAoaXNGdXR1cmUgPyAnbWludXR1JyA6ICdtaW51dG91Jyk7XG4gICAgY2FzZSAnbW0nOiAvLyA5IG1pbnV0ZXMgLyBpbiA5IG1pbnV0ZXMgLyA5IG1pbnV0ZXMgYWdvXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ21pbnV0eScgOiAnbWludXQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnbWludXRhbWknO1xuICAgICAgfVxuICAgIC8vIGJyZWFrO1xuICAgIGNhc2UgJ2gnOiAgLy8gYW4gaG91ciAvIGluIGFuIGhvdXIgLyBhbiBob3VyIGFnb1xuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAnaG9kaW5hJyA6IChpc0Z1dHVyZSA/ICdob2RpbnUnIDogJ2hvZGlub3UnKTtcbiAgICBjYXNlICdoaCc6IC8vIDkgaG91cnMgLyBpbiA5IGhvdXJzIC8gOSBob3VycyBhZ29cbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnaG9kaW55JyA6ICdob2RpbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdob2RpbmFtaSc7XG4gICAgICB9XG4gICAgLy8gYnJlYWs7XG4gICAgY2FzZSAnZCc6ICAvLyBhIGRheSAvIGluIGEgZGF5IC8gYSBkYXkgYWdvXG4gICAgICByZXR1cm4gKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpID8gJ2RlbicgOiAnZG5lbSc7XG4gICAgY2FzZSAnZGQnOiAvLyA5IGRheXMgLyBpbiA5IGRheXMgLyA5IGRheXMgYWdvXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ2RueScgOiAnZG7Dg8KtJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ2RueSc7XG4gICAgICB9XG4gICAgLy8gYnJlYWs7XG4gICAgY2FzZSAnTSc6ICAvLyBhIG1vbnRoIC8gaW4gYSBtb250aCAvIGEgbW9udGggYWdvXG4gICAgICByZXR1cm4gKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpID8gJ23DhMKbc8ODwq1jJyA6ICdtw4TCm3PDg8KtY2VtJztcbiAgICBjYXNlICdNTSc6IC8vIDkgbW9udGhzIC8gaW4gOSBtb250aHMgLyA5IG1vbnRocyBhZ29cbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnbcOEwptzw4PCrWNlJyA6ICdtw4TCm3PDg8KtY8OFwq8nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnbcOEwptzw4PCrWNpJztcbiAgICAgIH1cbiAgICAvLyBicmVhaztcbiAgICBjYXNlICd5JzogIC8vIGEgeWVhciAvIGluIGEgeWVhciAvIGEgeWVhciBhZ29cbiAgICAgIHJldHVybiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkgPyAncm9rJyA6ICdyb2tlbSc7XG4gICAgY2FzZSAneXknOiAvLyA5IHllYXJzIC8gaW4gOSB5ZWFycyAvIDkgeWVhcnMgYWdvXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ3Jva3knIDogJ2xldCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdsZXR5JztcbiAgICAgIH1cbiAgICAvLyBicmVhaztcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY3NMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdjcycsXG4gIG1vbnRocyxcbiAgbW9udGhzU2hvcnQsXG4gIG1vbnRoc1BhcnNlOiAoZnVuY3Rpb24gKG1vbnRocywgbW9udGhzU2hvcnQpIHtcbiAgICBsZXQgaSwgX21vbnRoc1BhcnNlID0gW107XG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgIC8vIHVzZSBjdXN0b20gcGFyc2VyIHRvIHNvbHZlIHByb2JsZW0gd2l0aCBKdWx5ICjDhMKNZXJ2ZW5lYylcbiAgICAgIF9tb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoJ14nICsgbW9udGhzW2ldICsgJyR8XicgKyBtb250aHNTaG9ydFtpXSArICckJywgJ2knKTtcbiAgICB9XG4gICAgcmV0dXJuIF9tb250aHNQYXJzZTtcbiAgfShtb250aHMsIG1vbnRoc1Nob3J0KSksXG4gIHNob3J0TW9udGhzUGFyc2U6IChmdW5jdGlvbiAobW9udGhzU2hvcnQpIHtcbiAgICBsZXQgaSwgX3Nob3J0TW9udGhzUGFyc2UgPSBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgX3Nob3J0TW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKCdeJyArIG1vbnRoc1Nob3J0W2ldICsgJyQnLCAnaScpO1xuICAgIH1cbiAgICByZXR1cm4gX3Nob3J0TW9udGhzUGFyc2U7XG4gIH0obW9udGhzU2hvcnQpKSxcbiAgbG9uZ01vbnRoc1BhcnNlOiAoZnVuY3Rpb24gKG1vbnRocykge1xuICAgIGxldCBpLCBfbG9uZ01vbnRoc1BhcnNlID0gW107XG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgIF9sb25nTW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKCdeJyArIG1vbnRoc1tpXSArICckJywgJ2knKTtcbiAgICB9XG4gICAgcmV0dXJuIF9sb25nTW9udGhzUGFyc2U7XG4gIH0obW9udGhzKSksXG4gIHdlZWtkYXlzOiAnbmVkw4TCm2xlX3BvbmTDhMKbbMODwq1fw4PCunRlcsODwr1fc3TDhcKZZWRhX8OEwo10dnJ0ZWtfcMODwqF0ZWtfc29ib3RhJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnbmVfcG9fw4PCunRfc3Rfw4TCjXRfcMODwqFfc28nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnbmVfcG9fw4PCunRfc3Rfw4TCjXRfcMODwqFfc28nLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdIOm1tJyxcbiAgICBMVFM6ICdIOm1tOnNzJyxcbiAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgTEw6ICdELiBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QuIE1NTU0gWVlZWSBIOm1tJyxcbiAgICBMTExMOiAnZGRkZCBELiBNTU1NIFlZWVkgSDptbScsXG4gICAgbDogJ0QuIE0uIFlZWVknXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1tkbmVzIHZdIExUJyxcbiAgICBuZXh0RGF5OiAnW3rDg8KtdHJhIHZdIExUJyxcbiAgICBuZXh0V2VlayhkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gJ1t2IG5lZMOEwptsaSB2XSBMVCc7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHJldHVybiAnW3ZdIGRkZGQgW3ZdIExUJztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiAnW3ZlIHN0w4XCmWVkdSB2XSBMVCc7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICByZXR1cm4gJ1t2ZSDDhMKNdHZydGVrIHZdIExUJztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHJldHVybiAnW3YgcMODwqF0ZWsgdl0gTFQnO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgcmV0dXJuICdbdiBzb2JvdHUgdl0gTFQnO1xuICAgICAgfVxuICAgIH0sXG4gICAgbGFzdERheTogJ1t2w4TCjWVyYSB2XSBMVCcsXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcmV0dXJuICdbbWludWxvdSBuZWTDhMKbbGkgdl0gTFQnO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICByZXR1cm4gJ1ttaW51bMODwqldIGRkZGQgW3ZdIExUJztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiAnW21pbnVsb3Ugc3TDhcKZZWR1IHZdIExUJztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgcmV0dXJuICdbbWludWzDg8K9XSBkZGRkIFt2XSBMVCc7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICByZXR1cm4gJ1ttaW51bG91IHNvYm90dSB2XSBMVCc7XG4gICAgICB9XG4gICAgfSxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ3phICVzJyxcbiAgICBwYXN0OiAncMOFwpllZCAlcycsXG4gICAgczogdHJhbnNsYXRlLFxuICAgIHNzOiB0cmFuc2xhdGUsXG4gICAgbTogdHJhbnNsYXRlLFxuICAgIG1tOiB0cmFuc2xhdGUsXG4gICAgaDogdHJhbnNsYXRlLFxuICAgIGhoOiB0cmFuc2xhdGUsXG4gICAgZDogdHJhbnNsYXRlLFxuICAgIGRkOiB0cmFuc2xhdGUsXG4gICAgTTogdHJhbnNsYXRlLFxuICAgIE1NOiB0cmFuc2xhdGUsXG4gICAgeTogdHJhbnNsYXRlLFxuICAgIHl5OiB0cmFuc2xhdGVcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcbiAgb3JkaW5hbDogJyVkLicsXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdFxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBEYW5pc2ggKERlbm1hcmspIFtkYV1cbi8vISBhdXRob3IgOiBQZXIgSGFuc2VuIDogaHR0cHM6Ly9naXRodWIuY29tL3BlcmhwXG5cbmV4cG9ydCBjb25zdCBkYUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2RhJyxcbiAgbW9udGhzIDogJ0phbnVhcl9GZWJydWFyX01hcnRzX0FwcmlsX01hal9KdW5pX0p1bGlfQXVndXN0X1NlcHRlbWJlcl9Pa3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydCA6ICdKYW5fRmViX01hcl9BcHJfTWFqX0p1bl9KdWxfQXVnX1NlcF9Pa3RfTm92X0RlYycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXMgOiAnU8ODwrhuZGFnX01hbmRhZ19UaXJzZGFnX09uc2RhZ19Ub3JzZGFnX0ZyZWRhZ19Mw4PCuHJkYWcnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQgOiAnU8ODwrhuX01hbl9UaXJfT25zX1Rvcl9GcmVfTMODwrhyJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbiA6ICdTw4PCuF9NYV9UaV9Pbl9Ub19Gcl9Mw4PCuCcuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgICBMVCA6ICdISDptbScsXG4gICAgICBMVFMgOiAnSEg6bW06c3MnLFxuICAgICAgTCA6ICdERC9NTS9ZWVlZJyxcbiAgICAgIExMIDogJ0QuIE1NTU0gWVlZWScsXG4gICAgICBMTEwgOiAnRC4gTU1NTSBZWVlZIEhIOm1tJyxcbiAgICAgIExMTEwgOiAnZGRkZCBbZC5dIEQuIE1NTU0gWVlZWSBba2wuXSBISDptbSdcbiAgfSxcbiAgY2FsZW5kYXIgOiB7XG4gICAgICBzYW1lRGF5IDogJ1tpIGRhZyBrbC5dIExUJyxcbiAgICAgIG5leHREYXkgOiAnW2kgbW9yZ2VuIGtsLl0gTFQnLFxuICAgICAgbmV4dFdlZWsgOiAncMODwqUgZGRkZCBba2wuXSBMVCcsXG4gICAgICBsYXN0RGF5IDogJ1tpIGfDg8KlciBrbC5dIExUJyxcbiAgICAgIGxhc3RXZWVrIDogJ1tpXSBkZGRkW3Mga2wuXSBMVCcsXG4gICAgICBzYW1lRWxzZSA6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICBmdXR1cmUgOiAnb20gJXMnLFxuICAgICAgcGFzdCA6ICclcyBzaWRlbicsXG4gICAgICBzIDogJ2bDg8KlIHNla3VuZGVyJyxcbiAgICAgIG0gOiAnZXQgbWludXQnLFxuICAgICAgbW0gOiAnJWQgbWludXR0ZXInLFxuICAgICAgaCA6ICdlbiB0aW1lJyxcbiAgICAgIGhoIDogJyVkIHRpbWVyJyxcbiAgICAgIGQgOiAnZW4gZGFnJyxcbiAgICAgIGRkIDogJyVkIGRhZ2UnLFxuICAgICAgTSA6ICdlbiBtw4PCpW5lZCcsXG4gICAgICBNTSA6ICclZCBtw4PCpW5lZGVyJyxcbiAgICAgIHkgOiAnZXQgw4PCpXInLFxuICAgICAgeXkgOiAnJWQgw4PCpXInXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXG4gIG9yZGluYWwgOiAnJWQuJyxcbiAgd2VlayA6IHtcbiAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgZG95IDogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1rZXktcXVvdGVzXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEdlcm1hbiBbZGVdXG4vLyEgYXV0aG9yIDogbGx1Y2hzIDogaHR0cHM6Ly9naXRodWIuY29tL2xsdWNoc1xuLy8hIGF1dGhvcjogTWVuZWxpb24gRWxlbnPDg8K6bGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9PaXJlXG4vLyEgYXV0aG9yIDogTWlrb2xhaiBEYWRlbGEgOiBodHRwczovL2dpdGh1Yi5jb20vbWlrMDFhalxuXG5mdW5jdGlvbiBwcm9jZXNzUmVsYXRpdmVUaW1lKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pOiBzdHJpbmcge1xuICBjb25zdCBmb3JtYXQ6IHsgW2tleTogc3RyaW5nXTogW3N0cmluZywgc3RyaW5nXSB9ID0ge1xuICAgICdtJzogWydlaW5lIE1pbnV0ZScsICdlaW5lciBNaW51dGUnXSxcbiAgICAnaCc6IFsnZWluZSBTdHVuZGUnLCAnZWluZXIgU3R1bmRlJ10sXG4gICAgJ2QnOiBbJ2VpbiBUYWcnLCAnZWluZW0gVGFnJ10sXG4gICAgJ2RkJzogW251bSArICcgVGFnZScsIG51bSArICcgVGFnZW4nXSxcbiAgICAnTSc6IFsnZWluIE1vbmF0JywgJ2VpbmVtIE1vbmF0J10sXG4gICAgJ01NJzogW251bSArICcgTW9uYXRlJywgbnVtICsgJyBNb25hdGVuJ10sXG4gICAgJ3knOiBbJ2VpbiBKYWhyJywgJ2VpbmVtIEphaHInXSxcbiAgICAneXknOiBbbnVtICsgJyBKYWhyZScsIG51bSArICcgSmFocmVuJ11cbiAgfTtcbiAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyBmb3JtYXRba2V5XVswXSA6IGZvcm1hdFtrZXldWzFdO1xufVxuXG5leHBvcnQgY29uc3QgZGVMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdkZScsXG4gIG1vbnRoczogJ0phbnVhcl9GZWJydWFyX03Dg8KkcnpfQXByaWxfTWFpX0p1bmlfSnVsaV9BdWd1c3RfU2VwdGVtYmVyX09rdG9iZXJfTm92ZW1iZXJfRGV6ZW1iZXInLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnSmFuLl9GZWIuX03Dg8KkcnpfQXByLl9NYWlfSnVuaV9KdWxpX0F1Zy5fU2VwLl9Pa3QuX05vdi5fRGV6Licuc3BsaXQoJ18nKSxcbiAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgd2Vla2RheXM6ICdTb25udGFnX01vbnRhZ19EaWVuc3RhZ19NaXR0d29jaF9Eb25uZXJzdGFnX0ZyZWl0YWdfU2Ftc3RhZycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ1NvLl9Nby5fRGkuX01pLl9Eby5fRnIuX1NhLicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdTb19Nb19EaV9NaV9Eb19Gcl9TYScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgTEw6ICdELiBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QuIE1NTU0gWVlZWSBISDptbScsXG4gICAgTExMTDogJ2RkZGQsIEQuIE1NTU0gWVlZWSBISDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW2hldXRlIHVtXSBMVCBbVWhyXScsXG4gICAgc2FtZUVsc2U6ICdMJyxcbiAgICBuZXh0RGF5OiAnW21vcmdlbiB1bV0gTFQgW1Vocl0nLFxuICAgIG5leHRXZWVrOiAnZGRkZCBbdW1dIExUIFtVaHJdJyxcbiAgICBsYXN0RGF5OiAnW2dlc3Rlcm4gdW1dIExUIFtVaHJdJyxcbiAgICBsYXN0V2VlazogJ1tsZXR6dGVuXSBkZGRkIFt1bV0gTFQgW1Vocl0nXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ2luICVzJyxcbiAgICBwYXN0OiAndm9yICVzJyxcbiAgICBzOiAnZWluIHBhYXIgU2VrdW5kZW4nLFxuICAgIHNzOiAnJWQgU2VrdW5kZW4nLFxuICAgIG06IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgbW06ICclZCBNaW51dGVuJyxcbiAgICBoOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIGhoOiAnJWQgU3R1bmRlbicsXG4gICAgZDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBkZDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBNOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIE1NOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIHk6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgeXk6IHByb2Nlc3NSZWxhdGl2ZVRpbWVcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcbiAgb3JkaW5hbDogJyVkLicsXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBFbmdsaXNoIChVbml0ZWQgS2luZ2RvbSkgW2VuLWdiXVxuLy8hIGF1dGhvciA6IENocmlzIEdlZHJpbSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9jaHJpc2dlZHJpbVxuXG5leHBvcnQgY29uc3QgZW5HYkxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2VuLWdiJyxcbiAgbW9udGhzIDogJ0phbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXInLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0IDogJ0phbl9GZWJfTWFyX0Fwcl9NYXlfSnVuX0p1bF9BdWdfU2VwX09jdF9Ob3ZfRGVjJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5cyA6ICdTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydCA6ICdTdW5fTW9uX1R1ZV9XZWRfVGh1X0ZyaV9TYXQnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluIDogJ1N1X01vX1R1X1dlX1RoX0ZyX1NhJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICBMVCA6ICdISDptbScsXG4gICAgTFRTIDogJ0hIOm1tOnNzJyxcbiAgICBMIDogJ0REL01NL1lZWVknLFxuICAgIExMIDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEwgOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgIExMTEwgOiAnZGRkZCwgRCBNTU1NIFlZWVkgSEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyIDoge1xuICAgIHNhbWVEYXkgOiAnW1RvZGF5IGF0XSBMVCcsXG4gICAgbmV4dERheSA6ICdbVG9tb3Jyb3cgYXRdIExUJyxcbiAgICBuZXh0V2VlayA6ICdkZGRkIFthdF0gTFQnLFxuICAgIGxhc3REYXkgOiAnW1llc3RlcmRheSBhdF0gTFQnLFxuICAgIGxhc3RXZWVrIDogJ1tMYXN0XSBkZGRkIFthdF0gTFQnLFxuICAgIHNhbWVFbHNlIDogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZSA6IHtcbiAgICBmdXR1cmUgOiAnaW4gJXMnLFxuICAgIHBhc3QgOiAnJXMgYWdvJyxcbiAgICBzIDogJ2EgZmV3IHNlY29uZHMnLFxuICAgIHNzIDogJyVkIHNlY29uZHMnLFxuICAgIG0gOiAnYSBtaW51dGUnLFxuICAgIG1tIDogJyVkIG1pbnV0ZXMnLFxuICAgIGggOiAnYW4gaG91cicsXG4gICAgaGggOiAnJWQgaG91cnMnLFxuICAgIGQgOiAnYSBkYXknLFxuICAgIGRkIDogJyVkIGRheXMnLFxuICAgIE0gOiAnYSBtb250aCcsXG4gICAgTU0gOiAnJWQgbW9udGhzJyxcbiAgICB5IDogJ2EgeWVhcicsXG4gICAgeXkgOiAnJWQgeWVhcnMnXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfShzdHxuZHxyZHx0aCkvLFxuICBvcmRpbmFsKF9udW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xuICAgIGNvbnN0IGIgPSBudW0gJSAxMCxcbiAgICAgIG91dHB1dCA9ICh+fihudW0gJSAxMDAgLyAxMCkgPT09IDEpID8gJ3RoJyA6XG4gICAgICAgIChiID09PSAxKSA/ICdzdCcgOlxuICAgICAgICAgIChiID09PSAyKSA/ICduZCcgOlxuICAgICAgICAgICAgKGIgPT09IDMpID8gJ3JkJyA6ICd0aCc7XG4gICAgcmV0dXJuIG51bSArIG91dHB1dDtcbiAgfSxcbiAgd2VlayA6IHtcbiAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG5cbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0SG91cnMsIGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFNwYW5pc2ggW2VzXVxuLy8hIGF1dGhvciA6IEp1bGlvIE5hcHVyw4PCrSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9qdWxpb25jXG5cbmxldCBtb250aHNTaG9ydERvdCA9ICdlbmUuX2ZlYi5fbWFyLl9hYnIuX21heS5fanVuLl9qdWwuX2Fnby5fc2VwLl9vY3QuX25vdi5fZGljLicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQgPSAnZW5lX2ZlYl9tYXJfYWJyX21heV9qdW5fanVsX2Fnb19zZXBfb2N0X25vdl9kaWMnLnNwbGl0KCdfJyk7XG5cbmxldCBtb250aHNQYXJzZSA9IFsvXmVuZS9pLCAvXmZlYi9pLCAvXm1hci9pLCAvXmFici9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmFnby9pLCAvXnNlcC9pLCAvXm9jdC9pLCAvXm5vdi9pLCAvXmRpYy9pXTtcbmxldCBtb250aHNSZWdleCA9IC9eKGVuZXJvfGZlYnJlcm98bWFyem98YWJyaWx8bWF5b3xqdW5pb3xqdWxpb3xhZ29zdG98c2VwdGllbWJyZXxvY3R1YnJlfG5vdmllbWJyZXxkaWNpZW1icmV8ZW5lXFwuP3xmZWJcXC4/fG1hclxcLj98YWJyXFwuP3xtYXlcXC4/fGp1blxcLj98anVsXFwuP3xhZ29cXC4/fHNlcFxcLj98b2N0XFwuP3xub3ZcXC4/fGRpY1xcLj8pL2k7XG5cbmV4cG9ydCBjb25zdCBlc0xvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2VzJyxcbiAgbW9udGhzOiAnZW5lcm9fZmVicmVyb19tYXJ6b19hYnJpbF9tYXlvX2p1bmlvX2p1bGlvX2Fnb3N0b19zZXB0aWVtYnJlX29jdHVicmVfbm92aWVtYnJlX2RpY2llbWJyZScuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydERvdDtcbiAgICB9XG5cbiAgICBpZiAoLy1NTU0tLy50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFtnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICAgIH1cblxuICAgIHJldHVybiBtb250aHNTaG9ydERvdFtnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICB9LFxuICBtb250aHNSZWdleCxcbiAgbW9udGhzU2hvcnRSZWdleDogbW9udGhzUmVnZXgsXG4gIG1vbnRoc1N0cmljdFJlZ2V4OiAvXihlbmVyb3xmZWJyZXJvfG1hcnpvfGFicmlsfG1heW98anVuaW98anVsaW98YWdvc3RvfHNlcHRpZW1icmV8b2N0dWJyZXxub3ZpZW1icmV8ZGljaWVtYnJlKS9pLFxuICBtb250aHNTaG9ydFN0cmljdFJlZ2V4OiAvXihlbmVcXC4/fGZlYlxcLj98bWFyXFwuP3xhYnJcXC4/fG1heVxcLj98anVuXFwuP3xqdWxcXC4/fGFnb1xcLj98c2VwXFwuP3xvY3RcXC4/fG5vdlxcLj98ZGljXFwuPykvaSxcbiAgbW9udGhzUGFyc2UsXG4gIGxvbmdNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXG4gIHNob3J0TW9udGhzUGFyc2U6IG1vbnRoc1BhcnNlLFxuICB3ZWVrZGF5czogJ2RvbWluZ29fbHVuZXNfbWFydGVzX21pw4PCqXJjb2xlc19qdWV2ZXNfdmllcm5lc19zw4PCoWJhZG8nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICdkb20uX2x1bi5fbWFyLl9tacODwqkuX2p1ZS5fdmllLl9zw4PCoWIuJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ2RvX2x1X21hX21pX2p1X3ZpX3PDg8KhJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdIOm1tJyxcbiAgICBMVFM6ICdIOm1tOnNzJyxcbiAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgTEw6ICdEIFtkZV0gTU1NTSBbZGVdIFlZWVknLFxuICAgIExMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWSBIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRCBbZGVdIE1NTU0gW2RlXSBZWVlZIEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheShkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ1tob3kgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIG5leHREYXkoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuICdbbWHDg8KxYW5hIGEgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBuZXh0V2VlayhkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ2RkZGQgW2EgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBsYXN0RGF5KGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiAnW2F5ZXIgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiAnW2VsXSBkZGRkIFtwYXNhZG8gYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnZW4gJXMnLFxuICAgIHBhc3Q6ICdoYWNlICVzJyxcbiAgICBzOiAndW5vcyBzZWd1bmRvcycsXG4gICAgc3M6ICclZCBzZWd1bmRvcycsXG4gICAgbTogJ3VuIG1pbnV0bycsXG4gICAgbW06ICclZCBtaW51dG9zJyxcbiAgICBoOiAndW5hIGhvcmEnLFxuICAgIGhoOiAnJWQgaG9yYXMnLFxuICAgIGQ6ICd1biBkw4PCrWEnLFxuICAgIGRkOiAnJWQgZMODwq1hcycsXG4gICAgTTogJ3VuIG1lcycsXG4gICAgTU06ICclZCBtZXNlcycsXG4gICAgeTogJ3VuIGHDg8KxbycsXG4gICAgeXk6ICclZCBhw4PCsW9zJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn3DgsK6LyxcbiAgb3JkaW5hbDogJyVkw4LCuicsXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXRIb3VycywgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogU3BhbmlzaCAoRG9taW5pY2FuIFJlcHVibGljKSBbZXMtZG9dXG5cbmxldCBtb250aHNTaG9ydERvdCA9ICdlbmUuX2ZlYi5fbWFyLl9hYnIuX21heS5fanVuLl9qdWwuX2Fnby5fc2VwLl9vY3QuX25vdi5fZGljLicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQgPSAnZW5lX2ZlYl9tYXJfYWJyX21heV9qdW5fanVsX2Fnb19zZXBfb2N0X25vdl9kaWMnLnNwbGl0KCdfJyk7XG5cbmxldCBtb250aHNQYXJzZSA9IFsvXmVuZS9pLCAvXmZlYi9pLCAvXm1hci9pLCAvXmFici9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmFnby9pLCAvXnNlcC9pLCAvXm9jdC9pLCAvXm5vdi9pLCAvXmRpYy9pXTtcbmxldCBtb250aHNSZWdleCA9IC9eKGVuZXJvfGZlYnJlcm98bWFyem98YWJyaWx8bWF5b3xqdW5pb3xqdWxpb3xhZ29zdG98c2VwdGllbWJyZXxvY3R1YnJlfG5vdmllbWJyZXxkaWNpZW1icmV8ZW5lXFwuP3xmZWJcXC4/fG1hclxcLj98YWJyXFwuP3xtYXlcXC4/fGp1blxcLj98anVsXFwuP3xhZ29cXC4/fHNlcFxcLj98b2N0XFwuP3xub3ZcXC4/fGRpY1xcLj8pL2k7XG5cbmV4cG9ydCBjb25zdCBlc0RvTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnZXMtZG8nLFxuICBtb250aHM6ICdlbmVyb19mZWJyZXJvX21hcnpvX2FicmlsX21heW9fanVuaW9fanVsaW9fYWdvc3RvX3NlcHRpZW1icmVfb2N0dWJyZV9ub3ZpZW1icmVfZGljaWVtYnJlJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIGlmICghZGF0ZSkge1xuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0RG90O1xuICAgIH0gZWxzZSBpZiAoLy1NTU0tLy50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFtnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbW9udGhzU2hvcnREb3RbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgICB9XG4gIH0sXG4gIG1vbnRoc1JlZ2V4LFxuICBtb250aHNTaG9ydFJlZ2V4OiBtb250aHNSZWdleCxcbiAgbW9udGhzU3RyaWN0UmVnZXg6IC9eKGVuZXJvfGZlYnJlcm98bWFyem98YWJyaWx8bWF5b3xqdW5pb3xqdWxpb3xhZ29zdG98c2VwdGllbWJyZXxvY3R1YnJlfG5vdmllbWJyZXxkaWNpZW1icmUpL2ksXG4gIG1vbnRoc1Nob3J0U3RyaWN0UmVnZXg6IC9eKGVuZVxcLj98ZmViXFwuP3xtYXJcXC4/fGFiclxcLj98bWF5XFwuP3xqdW5cXC4/fGp1bFxcLj98YWdvXFwuP3xzZXBcXC4/fG9jdFxcLj98bm92XFwuP3xkaWNcXC4/KS9pLFxuICBtb250aHNQYXJzZSxcbiAgbG9uZ01vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcbiAgc2hvcnRNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXG4gIHdlZWtkYXlzOiAnZG9taW5nb19sdW5lc19tYXJ0ZXNfbWnDg8KpcmNvbGVzX2p1ZXZlc192aWVybmVzX3PDg8KhYmFkbycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ2RvbS5fbHVuLl9tYXIuX21pw4PCqS5fanVlLl92aWUuX3PDg8KhYi4nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnZG9fbHVfbWFfbWlfanVfdmlfc8ODwqEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ2g6bW0gQScsXG4gICAgTFRTOiAnaDptbTpzcyBBJyxcbiAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgTEw6ICdEIFtkZV0gTU1NTSBbZGVdIFlZWVknLFxuICAgIExMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWSBoOm1tIEEnLFxuICAgIExMTEw6ICdkZGRkLCBEIFtkZV0gTU1NTSBbZGVdIFlZWVkgaDptbSBBJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXkoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gJ1tob3kgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIG5leHREYXkoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gJ1ttYcODwrFhbmEgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIG5leHRXZWVrKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICdkZGRkIFthIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbGFzdERheShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnW2F5ZXIgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICdbZWxdIGRkZGQgW3Bhc2FkbyBhIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICdlbiAlcycsXG4gICAgcGFzdDogJ2hhY2UgJXMnLFxuICAgIHM6ICd1bm9zIHNlZ3VuZG9zJyxcbiAgICBzczogJyVkIHNlZ3VuZG9zJyxcbiAgICBtOiAndW4gbWludXRvJyxcbiAgICBtbTogJyVkIG1pbnV0b3MnLFxuICAgIGg6ICd1bmEgaG9yYScsXG4gICAgaGg6ICclZCBob3JhcycsXG4gICAgZDogJ3VuIGTDg8KtYScsXG4gICAgZGQ6ICclZCBkw4PCrWFzJyxcbiAgICBNOiAndW4gbWVzJyxcbiAgICBNTTogJyVkIG1lc2VzJyxcbiAgICB5OiAndW4gYcODwrFvJyxcbiAgICB5eTogJyVkIGHDg8Kxb3MnXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfcOCwrovLFxuICBvcmRpbmFsOiAnJWTDgsK6JyxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldEhvdXJzLCBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBTcGFuaXNoIChVbml0ZWQgU3RhdGVzKSBbZXMtdXNdXG4vLyEgYXV0aG9yIDogYnVzdHRhIDogaHR0cHM6Ly9naXRodWIuY29tL2J1c3R0YVxuXG5sZXQgbW9udGhzU2hvcnREb3QgPSAnZW5lLl9mZWIuX21hci5fYWJyLl9tYXkuX2p1bi5fanVsLl9hZ28uX3NlcC5fb2N0Ll9ub3YuX2RpYy4nLnNwbGl0KCdfJyk7XG5sZXQgbW9udGhzU2hvcnQgPSAnZW5lX2ZlYl9tYXJfYWJyX21heV9qdW5fanVsX2Fnb19zZXBfb2N0X25vdl9kaWMnLnNwbGl0KCdfJyk7XG5cbmV4cG9ydCBjb25zdCBlc1VzTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnZXMtdXMnLFxuICBtb250aHM6ICdlbmVyb19mZWJyZXJvX21hcnpvX2FicmlsX21heW9fanVuaW9fanVsaW9fYWdvc3RvX3NlcHRpZW1icmVfb2N0dWJyZV9ub3ZpZW1icmVfZGljaWVtYnJlJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIGlmICghZGF0ZSkge1xuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0RG90O1xuICAgIH0gZWxzZSBpZiAoLy1NTU0tLy50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFtnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbW9udGhzU2hvcnREb3RbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgICB9XG4gIH0sXG4gIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXG4gIHdlZWtkYXlzOiAnZG9taW5nb19sdW5lc19tYXJ0ZXNfbWnDg8KpcmNvbGVzX2p1ZXZlc192aWVybmVzX3PDg8KhYmFkbycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ2RvbS5fbHVuLl9tYXIuX21pw4PCqS5fanVlLl92aWUuX3PDg8KhYi4nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnZG9fbHVfbWFfbWlfanVfdmlfc8ODwqEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ2g6bW0gQScsXG4gICAgTFRTOiAnaDptbTpzcyBBJyxcbiAgICBMOiAnTU0vREQvWVlZWScsXG4gICAgTEw6ICdNTU1NIFtkZV0gRCBbZGVdIFlZWVknLFxuICAgIExMTDogJ01NTU0gW2RlXSBEIFtkZV0gWVlZWSBoOm1tIEEnLFxuICAgIExMTEw6ICdkZGRkLCBNTU1NIFtkZV0gRCBbZGVdIFlZWVkgaDptbSBBJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXkoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gJ1tob3kgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIG5leHREYXkoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gJ1ttYcODwrFhbmEgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIG5leHRXZWVrKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICdkZGRkIFthIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbGFzdERheShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnW2F5ZXIgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICdbZWxdIGRkZGQgW3Bhc2FkbyBhIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICdlbiAlcycsXG4gICAgcGFzdDogJ2hhY2UgJXMnLFxuICAgIHM6ICd1bm9zIHNlZ3VuZG9zJyxcbiAgICBzczogJyVkIHNlZ3VuZG9zJyxcbiAgICBtOiAndW4gbWludXRvJyxcbiAgICBtbTogJyVkIG1pbnV0b3MnLFxuICAgIGg6ICd1bmEgaG9yYScsXG4gICAgaGg6ICclZCBob3JhcycsXG4gICAgZDogJ3VuIGTDg8KtYScsXG4gICAgZGQ6ICclZCBkw4PCrWFzJyxcbiAgICBNOiAndW4gbWVzJyxcbiAgICBNTTogJyVkIG1lc2VzJyxcbiAgICB5OiAndW4gYcODwrFvJyxcbiAgICB5eTogJyVkIGHDg8Kxb3MnXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfcOCwrovLFxuICBvcmRpbmFsOiAnJWTDgsK6JyxcbiAgd2Vlazoge1xuICAgIGRvdzogMCwgLy8gU3VuZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA2ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvYmxvYi9kZXZlbG9wL2xvY2FsZS9maS5qc1xuXG52YXIgbnVtYmVyc1Bhc3QgPSAnbm9sbGEgeWtzaSBrYWtzaSBrb2xtZSBuZWxqw4PCpCB2aWlzaSBrdXVzaSBzZWl0c2Vtw4PCpG4ga2FoZGVrc2FuIHloZGVrc8ODwqRuJy5zcGxpdCgnICcpLFxuICBudW1iZXJzRnV0dXJlID0gW1xuICAgICdub2xsYScsICd5aGRlbicsICdrYWhkZW4nLCAna29sbWVuJywgJ25lbGrDg8KkbicsICd2aWlkZW4nLCAna3V1ZGVuJyxcbiAgICBudW1iZXJzUGFzdFs3XSwgbnVtYmVyc1Bhc3RbOF0sIG51bWJlcnNQYXN0WzldXG4gIF07XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZShudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIGlzRnV0dXJlID8gJ211dXRhbWFuIHNla3VubmluJyA6ICdtdXV0YW1hIHNla3VudGknO1xuICAgIGNhc2UgJ3NzJzpcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICdzZWt1bm5pbicgOiAnc2VrdW50aWEnO1xuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIGlzRnV0dXJlID8gJ21pbnV1dGluJyA6ICdtaW51dXR0aSc7XG4gICAgY2FzZSAnbW0nOlxuICAgICAgcmVzdWx0ID0gaXNGdXR1cmUgPyAnbWludXV0aW4nIDogJ21pbnV1dHRpYSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICd0dW5uaW4nIDogJ3R1bnRpJztcbiAgICBjYXNlICdoaCc6XG4gICAgICByZXN1bHQgPSBpc0Z1dHVyZSA/ICd0dW5uaW4nIDogJ3R1bnRpYSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICdww4PCpGl2w4PCpG4nIDogJ3DDg8KkaXbDg8KkJztcbiAgICBjYXNlICdkZCc6XG4gICAgICByZXN1bHQgPSBpc0Z1dHVyZSA/ICdww4PCpGl2w4PCpG4nIDogJ3DDg8KkaXbDg8Kkw4PCpCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdNJzpcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICdrdXVrYXVkZW4nIDogJ2t1dWthdXNpJztcbiAgICBjYXNlICdNTSc6XG4gICAgICByZXN1bHQgPSBpc0Z1dHVyZSA/ICdrdXVrYXVkZW4nIDogJ2t1dWthdXR0YSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICd2dW9kZW4nIDogJ3Z1b3NpJztcbiAgICBjYXNlICd5eSc6XG4gICAgICByZXN1bHQgPSBpc0Z1dHVyZSA/ICd2dW9kZW4nIDogJ3Z1b3R0YSc7XG4gICAgICBicmVhaztcbiAgfVxuICByZXN1bHQgPSB2ZXJiYWxOdW1iZXIobnVtLCBpc0Z1dHVyZSkgKyAnICcgKyByZXN1bHQ7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHZlcmJhbE51bWJlcihudW06IG51bWJlciwgaXNGdXR1cmU6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIG51bSA8IDEwID8gKGlzRnV0dXJlID8gbnVtYmVyc0Z1dHVyZVtudW1dIDogbnVtYmVyc1Bhc3RbbnVtXSkgOiBudW07XG59XG5cbmV4cG9ydCBjb25zdCBmaUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2ZpJyxcbiAgbW9udGhzOiAndGFtbWlrdXVfaGVsbWlrdXVfbWFhbGlza3V1X2h1aHRpa3V1X3RvdWtva3V1X2tlc8ODwqRrdXVfaGVpbsODwqRrdXVfZWxva3V1X3N5eXNrdXVfbG9rYWt1dV9tYXJyYXNrdXVfam91bHVrdXUnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAndGFtbWlfaGVsbWlfbWFhbGlzX2h1aHRpX3RvdWtvX2tlc8ODwqRfaGVpbsODwqRfZWxvX3N5eXNfbG9rYV9tYXJyYXNfam91bHUnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzOiAnc3VubnVudGFpX21hYW5hbnRhaV90aWlzdGFpX2tlc2tpdmlpa2tvX3RvcnN0YWlfcGVyamFudGFpX2xhdWFudGFpJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnc3VfbWFfdGlfa2VfdG9fcGVfbGEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnc3VfbWFfdGlfa2VfdG9fcGVfbGEnLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdISC5tbScsXG4gICAgTFRTOiAnSEgubW0uc3MnLFxuICAgIEw6ICdERC5NTS5ZWVlZJyxcbiAgICBMTDogJ0RvIE1NTU1bdGFdIFlZWVknLFxuICAgIExMTDogJ0RvIE1NTU1bdGFdIFlZWVksIFtrbG9dIEhILm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRG8gTU1NTVt0YV0gWVlZWSwgW2tsb10gSEgubW0nLFxuICAgIGw6ICdELk0uWVlZWScsXG4gICAgbGw6ICdEbyBNTU0gWVlZWScsXG4gICAgbGxsOiAnRG8gTU1NIFlZWVksIFtrbG9dIEhILm1tJyxcbiAgICBsbGxsOiAnZGRkLCBEbyBNTU0gWVlZWSwgW2tsb10gSEgubW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1t0w4PCpG7Dg8Kkw4PCpG5dIFtrbG9dIExUJyxcbiAgICBuZXh0RGF5OiAnW2h1b21lbm5hXSBba2xvXSBMVCcsXG4gICAgbmV4dFdlZWs6ICdkZGRkIFtrbG9dIExUJyxcbiAgICBsYXN0RGF5OiAnW2VpbGVuXSBba2xvXSBMVCcsXG4gICAgbGFzdFdlZWs6ICdbdmlpbWVdIGRkZGRbbmFdIFtrbG9dIExUJyxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJyVzIHDDg8Kkw4PCpHN0w4PCpCcsXG4gICAgcGFzdDogJyVzIHNpdHRlbicsXG4gICAgczogdHJhbnNsYXRlLFxuICAgIHNzOiB0cmFuc2xhdGUsXG4gICAgbTogdHJhbnNsYXRlLFxuICAgIG1tOiB0cmFuc2xhdGUsXG4gICAgaDogdHJhbnNsYXRlLFxuICAgIGhoOiB0cmFuc2xhdGUsXG4gICAgZDogdHJhbnNsYXRlLFxuICAgIGRkOiB0cmFuc2xhdGUsXG4gICAgTTogdHJhbnNsYXRlLFxuICAgIE1NOiB0cmFuc2xhdGUsXG4gICAgeTogdHJhbnNsYXRlLFxuICAgIHl5OiB0cmFuc2xhdGVcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcbiAgb3JkaW5hbDogJyVkLicsXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBGcmVuY2ggW2ZyXVxuLy8hIGF1dGhvciA6IEpvaG4gRmlzY2hlciA6IGh0dHBzOi8vZ2l0aHViLmNvbS9qZnJvZmZpY2VcblxuZXhwb3J0IGNvbnN0IGZyTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnZnInLFxuICBtb250aHM6ICdqYW52aWVyX2bDg8KpdnJpZXJfbWFyc19hdnJpbF9tYWlfanVpbl9qdWlsbGV0X2Fvw4PCu3Rfc2VwdGVtYnJlX29jdG9icmVfbm92ZW1icmVfZMODwqljZW1icmUnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnamFudi5fZsODwql2ci5fbWFyc19hdnIuX21haV9qdWluX2p1aWwuX2Fvw4PCu3Rfc2VwdC5fb2N0Ll9ub3YuX2TDg8KpYy4nLnNwbGl0KCdfJyksXG4gIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXG4gIHdlZWtkYXlzOiAnZGltYW5jaGVfbHVuZGlfbWFyZGlfbWVyY3JlZGlfamV1ZGlfdmVuZHJlZGlfc2FtZWRpJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnZGltLl9sdW4uX21hci5fbWVyLl9qZXUuX3Zlbi5fc2FtLicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdkaV9sdV9tYV9tZV9qZV92ZV9zYScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbQXVqb3VyZMOiwoDCmWh1aSDDg8KgXSBMVCcsXG4gICAgbmV4dERheTogJ1tEZW1haW4gw4PCoF0gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCBbw4PCoF0gTFQnLFxuICAgIGxhc3REYXk6ICdbSGllciDDg8KgXSBMVCcsXG4gICAgbGFzdFdlZWs6ICdkZGRkIFtkZXJuaWVyIMODwqBdIExUJyxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ2RhbnMgJXMnLFxuICAgIHBhc3Q6ICdpbCB5IGEgJXMnLFxuICAgIHM6ICdxdWVscXVlcyBzZWNvbmRlcycsXG4gICAgc3M6ICclZCBzZWNvbmRlcycsXG4gICAgbTogJ3VuZSBtaW51dGUnLFxuICAgIG1tOiAnJWQgbWludXRlcycsXG4gICAgaDogJ3VuZSBoZXVyZScsXG4gICAgaGg6ICclZCBoZXVyZXMnLFxuICAgIGQ6ICd1biBqb3VyJyxcbiAgICBkZDogJyVkIGpvdXJzJyxcbiAgICBNOiAndW4gbW9pcycsXG4gICAgTU06ICclZCBtb2lzJyxcbiAgICB5OiAndW4gYW4nLFxuICAgIHl5OiAnJWQgYW5zJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0oZXJ8KS8sXG4gIG9yZGluYWwoX251bTogbnVtYmVyLCBwZXJpb2Q6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xuICAgIHN3aXRjaCAocGVyaW9kKSB7XG4gICAgICAvLyBUT0RPOiBSZXR1cm4gJ2UnIHdoZW4gZGF5IG9mIG1vbnRoID4gMS4gTW92ZSB0aGlzIGNhc2UgaW5zaWRlXG4gICAgICAvLyBibG9jayBmb3IgbWFzY3VsaW5lIHdvcmRzIGJlbG93LlxuICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8zMzc1XG4gICAgICBjYXNlICdEJzpcbiAgICAgICAgcmV0dXJuIG51bSArIChudW0gPT09IDEgPyAnZXInIDogJycpO1xuXG4gICAgICAvLyBXb3JkcyB3aXRoIG1hc2N1bGluZSBncmFtbWF0aWNhbCBnZW5kZXI6IG1vaXMsIHRyaW1lc3RyZSwgam91clxuICAgICAgZGVmYXVsdDpcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnUSc6XG4gICAgICBjYXNlICdEREQnOlxuICAgICAgY2FzZSAnZCc6XG4gICAgICAgIHJldHVybiBudW0gKyAobnVtID09PSAxID8gJ2VyJyA6ICdlJyk7XG5cbiAgICAgIC8vIFdvcmRzIHdpdGggZmVtaW5pbmUgZ3JhbW1hdGljYWwgZ2VuZGVyOiBzZW1haW5lXG4gICAgICBjYXNlICd3JzpcbiAgICAgIGNhc2UgJ1cnOlxuICAgICAgICByZXR1cm4gbnVtICsgKG51bSA9PT0gMSA/ICdyZScgOiAnZScpO1xuICAgIH1cbiAgfSxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG5cbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0SG91cnMsIGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEdhbGljaWFuIFtnbF1cbi8vISBhdXRob3IgOiBEYXLDg8KtbyBCZWlyw4PCsyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9xdWlub2JyYXZvXG5cbmxldCBtb250aHNTaG9ydERvdCA9ICd4YW4uX2ZlYi5fbWFyLl9hYnIuX21haS5feHXDg8KxLl94dWwuX2Fnby5fc2V0Ll9vdXQuX25vdi5fZGVjLicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQgPSAneGFuX2ZlYl9tYXJfYWJyX21haV94dcODwrFfeHVsX2Fnb19zZXRfb3V0X25vdl9kZWMnLnNwbGl0KCdfJyk7XG5cbmxldCBtb250aHNQYXJzZSA9IFsvXnhhbi9pLCAvXmZlYi9pLCAvXm1hci9pLCAvXmFici9pLCAvXm1haS9pLCAvXnh1w4PCsS9pLCAvXnh1bC9pLCAvXmFnby9pLCAvXnNldC9pLCAvXm91dC9pLCAvXm5vdi9pLCAvXmRlYy9pXTtcbmxldCBtb250aHNSZWdleCA9IC9eKHhhbmVpcm98ZmVicmVpcm98bWFyem98YWJyaWx8bWFpb3x4dcODwrFvfHh1bGxvfGFnb3N0b3xzZXRlbWJyb3xvdXR1YnJvfG5vdmVtYnJvfGRlY2VtYnJvfHhhblxcLj98ZmViXFwuP3xtYXJcXC4/fGFiclxcLj98bWFpXFwuP3x4dcODwrFcXC4/fHh1bFxcLj98YWdvXFwuP3xzZXRcXC4/fG91dFxcLj98bm92XFwuP3xkZWNcXC4/KS9pO1xuXG5leHBvcnQgY29uc3QgZ2xMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdnbCcsXG4gIG1vbnRoczogJ3hhbmVpcm9fZmVicmVpcm9fbWFyem9fYWJyaWxfbWFpb194dcODwrFvX3h1bGxvX2Fnb3N0b19zZXRlbWJyb19vdXR1YnJvX25vdmVtYnJvX2RlY2VtYnJvJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIGlmICghZGF0ZSkge1xuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0RG90O1xuICAgIH1cblxuICAgIGlmICgvLU1NTS0vLnRlc3QoZm9ybWF0KSkge1xuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vbnRoc1Nob3J0RG90W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gIH0sXG4gIG1vbnRoc1JlZ2V4LFxuICBtb250aHNTaG9ydFJlZ2V4OiBtb250aHNSZWdleCxcbiAgbW9udGhzU3RyaWN0UmVnZXg6IC9eKHhhbmVpcm98ZmVicmVpcm98bWFyem98YWJyaWx8bWFpb3x4dcODwrFvfHh1bGxvfGFnb3N0b3xzZXRlbWJyb3xvdXR1YnJvfG5vdmVtYnJvfGRlY2VtYnJvKS9pLFxuICBtb250aHNTaG9ydFN0cmljdFJlZ2V4OiAvXih4YW5cXC4/fGZlYlxcLj98bWFyXFwuP3xhYnJcXC4/fG1haVxcLj98eHXDg8KxXFwuP3x4dWxcXC4/fGFnb1xcLj98c2V0XFwuP3xvdXRcXC4/fG5vdlxcLj98ZGVjXFwuPykvaSxcbiAgbW9udGhzUGFyc2UsXG4gIGxvbmdNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXG4gIHNob3J0TW9udGhzUGFyc2U6IG1vbnRoc1BhcnNlLFxuICB3ZWVrZGF5czogJ2RvbWluZ29fbHVuc19tYXJ0ZXNfbcODwqlyY29yZXNfeG92ZXNfdmVucmVzX3PDg8KhYmFkbycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ2RvbS5fbHVuLl9tYXIuX23Dg8Kpci5feG92Ll92ZW4uX3PDg8KhYi4nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnZG9fbHVfbWFfbcODwqlfeG9fdmVfc8ODwqEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0g6bW0nLFxuICAgIExUUzogJ0g6bW06c3MnLFxuICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICBMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWScsXG4gICAgTExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZIEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBEIFtkZV0gTU1NTSBbZGVdIFlZWVkgSDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5KGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiAnW2hveGUgw4PCoScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIG5leHREYXkoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuICdbbWHDg8KxYW4gw4PCoScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIG5leHRXZWVrKGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiAnZGRkZCBbw4PCoScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIGxhc3REYXkoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuICdbb250ZSDDg8KhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuICdbb10gZGRkZCBbcGFzYWRvIMODwqEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ2VuICVzJyxcbiAgICBwYXN0OiAnZmFpICVzJyxcbiAgICBzOiAndW5zIHNlZ3VuZG9zJyxcbiAgICBzczogJyVkIHNlZ3VuZG9zJyxcbiAgICBtOiAndW4gbWludXRvJyxcbiAgICBtbTogJyVkIG1pbnV0b3MnLFxuICAgIGg6ICd1bmhhIGhvcmEnLFxuICAgIGhoOiAnJWQgaG9yYXMnLFxuICAgIGQ6ICd1biBkw4PCrWEnLFxuICAgIGRkOiAnJWQgZMODwq1hcycsXG4gICAgTTogJ3VuIG1lcycsXG4gICAgTU06ICclZCBtZXNlcycsXG4gICAgeTogJ3VuIGFubycsXG4gICAgeXk6ICclZCBhbm9zJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn3DgsK6LyxcbiAgb3JkaW5hbDogJyVkw4LCuicsXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBIZWJyZXcgW2hlXVxuLy8hIGF1dGhvciA6IFRvbWVyIENvaGVuIDogaHR0cHM6Ly9naXRodWIuY29tL3RvbWVyXG4vLyEgYXV0aG9yIDogTW9zaGUgU2ltYW50b3YgOiBodHRwczovL2dpdGh1Yi5jb20vRGV2ZWxvcG1lbnRJTFxuLy8hIGF1dGhvciA6IFRhbCBBdGVyIDogaHR0cHM6Ly9naXRodWIuY29tL1RhbEF0ZXJcblxuZXhwb3J0IGNvbnN0IGhlTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnaGUnLFxuICBtb250aHM6ICfDl8KZw5fCoMOXwpXDl8KQw5fCqF/Dl8Kkw5fCkcOXwqjDl8KVw5fCkMOXwqhfw5fCnsOXwqjDl8KlX8OXwpDDl8Kkw5fCqMOXwpnDl8KcX8OXwp7Dl8KQw5fCmV/Dl8KZw5fClcOXwqDDl8KZX8OXwpnDl8KVw5fCnMOXwplfw5fCkMOXwpXDl8KSw5fClcOXwqHDl8KYX8OXwqHDl8Kkw5fCmMOXwp7Dl8KRw5fCqF/Dl8KQw5fClcOXwqfDl8KYw5fClcOXwpHDl8KoX8OXwqDDl8KVw5fCkcOXwp7Dl8KRw5fCqF/Dl8KTw5fCpsOXwp7Dl8KRw5fCqCcuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICfDl8KZw5fCoMOXwpXDl8KzX8OXwqTDl8KRw5fCqMOXwrNfw5fCnsOXwqjDl8KlX8OXwpDDl8Kkw5fCqMOXwrNfw5fCnsOXwpDDl8KZX8OXwpnDl8KVw5fCoMOXwplfw5fCmcOXwpXDl8Kcw5fCmV/Dl8KQw5fClcOXwpLDl8KzX8OXwqHDl8Kkw5fCmMOXwrNfw5fCkMOXwpXDl8Knw5fCs1/Dl8Kgw5fClcOXwpHDl8KzX8OXwpPDl8Kmw5fCnsOXwrMnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzOiAnw5fCqMOXwpDDl8Kpw5fClcOXwp9fw5fCqcOXwqDDl8KZX8OXwqnDl8Kcw5fCmcOXwqnDl8KZX8OXwqjDl8KRw5fCmcOXwqLDl8KZX8OXwpfDl8Kew5fCmcOXwqnDl8KZX8OXwqnDl8KZw5fCqcOXwplfw5fCqcOXwpHDl8KqJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnw5fCkMOXwrNfw5fCkcOXwrNfw5fCksOXwrNfw5fCk8OXwrNfw5fClMOXwrNfw5fClcOXwrNfw5fCqcOXwrMnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnw5fCkF/Dl8KRX8OXwpJfw5fCk1/Dl8KUX8OXwpVfw5fCqScuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ0REL01NL1lZWVknLFxuICAgIExMOiAnRCBbw5fCkV1NTU1NIFlZWVknLFxuICAgIExMTDogJ0QgW8OXwpFdTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRCBbw5fCkV1NTU1NIFlZWVkgSEg6bW0nLFxuICAgIGw6ICdEL00vWVlZWScsXG4gICAgbGw6ICdEIE1NTSBZWVlZJyxcbiAgICBsbGw6ICdEIE1NTSBZWVlZIEhIOm1tJyxcbiAgICBsbGxsOiAnZGRkLCBEIE1NTSBZWVlZIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbw5fClMOXwpnDl8KVw5fCnSDDl8KRw5bCvl1MVCcsXG4gICAgbmV4dERheTogJ1vDl8Kew5fCl8OXwqggw5fCkcOWwr5dTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCBbw5fCkcOXwqnDl8Kiw5fClF0gTFQnLFxuICAgIGxhc3REYXk6ICdbw5fCkMOXwqrDl8Kew5fClcOXwpwgw5fCkcOWwr5dTFQnLFxuICAgIGxhc3RXZWVrOiAnW8OXwpHDl8KZw5fClcOXwp1dIGRkZGQgW8OXwpTDl8KQw5fCl8OXwqjDl8KVw5fCnyDDl8KRw5fCqcOXwqLDl8KUXSBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICfDl8KRw5fCosOXwpXDl8KTICVzJyxcbiAgICBwYXN0OiAnw5fCnMOXwqTDl8Kgw5fCmSAlcycsXG4gICAgczogJ8OXwp7Dl8Khw5fCpMOXwqggw5fCqcOXwqDDl8KZw5fClcOXwqonLFxuICAgIHNzOiAnJWQgw5fCqcOXwqDDl8KZw5fClcOXwqonLFxuICAgIG06ICfDl8KTw5fCp8OXwpQnLFxuICAgIG1tOiAnJWQgw5fCk8OXwqfDl8KVw5fCqicsXG4gICAgaDogJ8OXwqnDl8Kiw5fClCcsXG4gICAgaGgobnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgaWYgKG51bSA9PT0gMikge1xuICAgICAgICByZXR1cm4gJ8OXwqnDl8Kiw5fCqsOXwpnDl8KZw5fCnSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVtICsgJyDDl8Kpw5fCosOXwpXDl8KqJztcbiAgICB9LFxuICAgIGQ6ICfDl8KZw5fClcOXwp0nLFxuICAgIGRkKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgIGlmIChudW0gPT09IDIpIHtcbiAgICAgICAgcmV0dXJuICfDl8KZw5fClcOXwp7Dl8KZw5fCmcOXwp0nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bSArICcgw5fCmcOXwp7Dl8KZw5fCnSc7XG4gICAgfSxcbiAgICBNOiAnw5fCl8OXwpXDl8KTw5fCqScsXG4gICAgTU0obnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgaWYgKG51bSA9PT0gMikge1xuICAgICAgICByZXR1cm4gJ8OXwpfDl8KVw5fCk8OXwqnDl8KZw5fCmcOXwp0nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bSArICcgw5fCl8OXwpXDl8KTw5fCqcOXwpnDl8KdJztcbiAgICB9LFxuICAgIHk6ICfDl8Kpw5fCoMOXwpQnLFxuICAgIHl5KG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgIGlmIChudW0gPT09IDIpIHtcbiAgICAgICAgcmV0dXJuICfDl8Kpw5fCoMOXwqrDl8KZw5fCmcOXwp0nO1xuICAgICAgfSBlbHNlIGlmIChudW0gJSAxMCA9PT0gMCAmJiBudW0gIT09IDEwKSB7XG4gICAgICAgIHJldHVybiBudW0gKyAnIMOXwqnDl8Kgw5fClCc7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVtICsgJyDDl8Kpw5fCoMOXwpnDl8KdJztcbiAgICB9XG4gIH0sXG4gIG1lcmlkaWVtUGFyc2U6IC/Dl8KQw5fCl8OXwpRcIsOXwqZ8w5fCnMOXwqTDl8Kgw5fClFwiw5fCpnzDl8KQw5fCl8OXwqjDl8KZIMOXwpTDl8Kmw5fClMOXwqjDl8KZw5fCmcOXwp18w5fCnMOXwqTDl8Kgw5fCmSDDl8KUw5fCpsOXwpTDl8Kow5fCmcOXwpnDl8KdfMOXwpzDl8Kkw5fCoMOXwpXDl8KqIMOXwpHDl8KVw5fCp8OXwqh8w5fCkcOXwpHDl8KVw5fCp8OXwqh8w5fCkcOXwqLDl8Kow5fCkS9pLFxuICBpc1BNKGlucHV0KSB7XG4gICAgcmV0dXJuIC9eKMOXwpDDl8KXw5fClFwiw5fCpnzDl8KQw5fCl8OXwqjDl8KZIMOXwpTDl8Kmw5fClMOXwqjDl8KZw5fCmcOXwp18w5fCkcOXwqLDl8Kow5fCkSkkLy50ZXN0KGlucHV0KTtcbiAgfSxcbiAgbWVyaWRpZW0oaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgaWYgKGhvdXIgPCA1KSB7XG4gICAgICByZXR1cm4gJ8OXwpzDl8Kkw5fCoMOXwpXDl8KqIMOXwpHDl8KVw5fCp8OXwqgnO1xuICAgIH0gZWxzZSBpZiAoaG91ciA8IDEwKSB7XG4gICAgICByZXR1cm4gJ8OXwpHDl8KRw5fClcOXwqfDl8KoJztcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAxMikge1xuICAgICAgcmV0dXJuIGlzTG93ZXIgPyAnw5fCnMOXwqTDl8Kgw5fClFwiw5fCpicgOiAnw5fCnMOXwqTDl8Kgw5fCmSDDl8KUw5fCpsOXwpTDl8Kow5fCmcOXwpnDl8KdJztcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAxOCkge1xuICAgICAgcmV0dXJuIGlzTG93ZXIgPyAnw5fCkMOXwpfDl8KUXCLDl8KmJyA6ICfDl8KQw5fCl8OXwqjDl8KZIMOXwpTDl8Kmw5fClMOXwqjDl8KZw5fCmcOXwp0nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ8OXwpHDl8Kiw5fCqMOXwpEnO1xuICAgIH1cbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cbi8vIHRzbGludDpkaXNhYmxlOm5vLXBhcmFtZXRlci1yZWFzc2lnbm1lbnQgcHJlZmVyLXN3aXRjaFxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBIaW5kaSBbaGldXG4vLyEgYXV0aG9yIDogTWF5YW5rIFNpbmdoYWwgOiBodHRwczovL2dpdGh1Yi5jb20vbWF5YW5rc2luZ2hhbFxuXG5sZXQgc3ltYm9sTWFwOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcbiAgICAxOiAnw6DCpcKnJyxcbiAgICAyOiAnw6DCpcKoJyxcbiAgICAzOiAnw6DCpcKpJyxcbiAgICA0OiAnw6DCpcKqJyxcbiAgICA1OiAnw6DCpcKrJyxcbiAgICA2OiAnw6DCpcKsJyxcbiAgICA3OiAnw6DCpcKtJyxcbiAgICA4OiAnw6DCpcKuJyxcbiAgICA5OiAnw6DCpcKvJyxcbiAgICAwOiAnw6DCpcKmJ1xuICB9LFxuICBudW1iZXJNYXA6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICAgICfDoMKlwqcnOiAnMScsXG4gICAgJ8OgwqXCqCc6ICcyJyxcbiAgICAnw6DCpcKpJzogJzMnLFxuICAgICfDoMKlwqonOiAnNCcsXG4gICAgJ8OgwqXCqyc6ICc1JyxcbiAgICAnw6DCpcKsJzogJzYnLFxuICAgICfDoMKlwq0nOiAnNycsXG4gICAgJ8OgwqXCric6ICc4JyxcbiAgICAnw6DCpcKvJzogJzknLFxuICAgICfDoMKlwqYnOiAnMCdcbiAgfTtcblxuZXhwb3J0IGNvbnN0IGhpTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnaGknLFxuICBtb250aHM6ICfDoMKkwpzDoMKkwqjDoMKkwrXDoMKkwrDDoMKlwoBfw6DCpMKrw6DCpMK8w6DCpMKww6DCpMK1w6DCpMKww6DCpcKAX8OgwqTCrsOgwqTCvsOgwqTCsMOgwqXCjcOgwqTCml/DoMKkwoXDoMKkwqrDoMKlwo3DoMKkwrDDoMKlwojDoMKkwrJfw6DCpMKuw6DCpMKIX8OgwqTCnMOgwqXCgsOgwqTCqF/DoMKkwpzDoMKlwoHDoMKkwrLDoMKkwr7DoMKkwohfw6DCpMKFw6DCpMKXw6DCpMK4w6DCpcKNw6DCpMKkX8OgwqTCuMOgwqTCv8OgwqTCpMOgwqTCrsOgwqXCjcOgwqTCrMOgwqTCsF/DoMKkwoXDoMKkwpXDoMKlwo3DoMKkwp/DoMKlwoLDoMKkwqzDoMKkwrBfw6DCpMKow6DCpMK1w6DCpMKuw6DCpcKNw6DCpMKsw6DCpMKwX8OgwqTCpsOgwqTCv8OgwqTCuMOgwqTCrsOgwqXCjcOgwqTCrMOgwqTCsCcuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICfDoMKkwpzDoMKkwqguX8OgwqTCq8OgwqTCvMOgwqTCsC5fw6DCpMKuw6DCpMK+w6DCpMKww6DCpcKNw6DCpMKaX8OgwqTChcOgwqTCqsOgwqXCjcOgwqTCsMOgwqXCiC5fw6DCpMKuw6DCpMKIX8OgwqTCnMOgwqXCgsOgwqTCqF/DoMKkwpzDoMKlwoHDoMKkwrIuX8OgwqTChcOgwqTCly5fw6DCpMK4w6DCpMK/w6DCpMKkLl/DoMKkwoXDoMKkwpXDoMKlwo3DoMKkwp/DoMKlwoIuX8OgwqTCqMOgwqTCtS5fw6DCpMKmw6DCpMK/w6DCpMK4Licuc3BsaXQoJ18nKSxcbiAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgd2Vla2RheXM6ICfDoMKkwrDDoMKkwrXDoMKkwr/DoMKkwrXDoMKkwr7DoMKkwrBfw6DCpMK4w6DCpcKLw6DCpMKuw6DCpMK1w6DCpMK+w6DCpMKwX8OgwqTCrsOgwqTCgsOgwqTCl8OgwqTCssOgwqTCtcOgwqTCvsOgwqTCsF/DoMKkwqzDoMKlwoHDoMKkwqfDoMKkwrXDoMKkwr7DoMKkwrBfw6DCpMKXw6DCpcKBw6DCpMKww6DCpcKCw6DCpMK1w6DCpMK+w6DCpMKwX8OgwqTCtsOgwqXCgcOgwqTClcOgwqXCjcOgwqTCsMOgwqTCtcOgwqTCvsOgwqTCsF/DoMKkwrbDoMKkwqjDoMKkwr/DoMKkwrXDoMKkwr7DoMKkwrAnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICfDoMKkwrDDoMKkwrXDoMKkwr9fw6DCpMK4w6DCpcKLw6DCpMKuX8OgwqTCrsOgwqTCgsOgwqTCl8OgwqTCsl/DoMKkwqzDoMKlwoHDoMKkwqdfw6DCpMKXw6DCpcKBw6DCpMKww6DCpcKCX8OgwqTCtsOgwqXCgcOgwqTClcOgwqXCjcOgwqTCsF/DoMKkwrbDoMKkwqjDoMKkwr8nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnw6DCpMKwX8OgwqTCuMOgwqXCi1/DoMKkwq7DoMKkwoJfw6DCpMKsw6DCpcKBX8OgwqTCl8OgwqXCgV/DoMKkwrbDoMKlwoFfw6DCpMK2Jy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnQSBoOm1tIMOgwqTCrMOgwqTCnMOgwqXChycsXG4gICAgTFRTOiAnQSBoOm1tOnNzIMOgwqTCrMOgwqTCnMOgwqXChycsXG4gICAgTDogJ0REL01NL1lZWVknLFxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZLCBBIGg6bW0gw6DCpMKsw6DCpMKcw6DCpcKHJyxcbiAgICBMTExMOiAnZGRkZCwgRCBNTU1NIFlZWVksIEEgaDptbSDDoMKkwqzDoMKkwpzDoMKlwocnXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1vDoMKkwobDoMKkwpxdIExUJyxcbiAgICBuZXh0RGF5OiAnW8OgwqTClcOgwqTCsl0gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCwgTFQnLFxuICAgIGxhc3REYXk6ICdbw6DCpMKVw6DCpMKyXSBMVCcsXG4gICAgbGFzdFdlZWs6ICdbw6DCpMKqw6DCpMK/w6DCpMKbw6DCpMKyw6DCpcKHXSBkZGRkLCBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICclcyDDoMKkwq7DoMKlwofDoMKkwoInLFxuICAgIHBhc3Q6ICclcyDDoMKkwqrDoMKkwrnDoMKkwrLDoMKlwocnLFxuICAgIHM6ICfDoMKkwpXDoMKlwoHDoMKkwpsgw6DCpMK5w6DCpcKAIMOgwqTClcOgwqXCjcOgwqTCt8OgwqTCoycsXG4gICAgc3M6ICclZCDDoMKkwrjDoMKlwofDoMKkwpXDoMKkwoLDoMKkwqEnLFxuICAgIG06ICfDoMKkwo/DoMKkwpUgw6DCpMKuw6DCpMK/w6DCpMKow6DCpMKfJyxcbiAgICBtbTogJyVkIMOgwqTCrsOgwqTCv8OgwqTCqMOgwqTCnycsXG4gICAgaDogJ8OgwqTCj8OgwqTClSDDoMKkwpjDoMKkwoLDoMKkwp/DoMKkwr4nLFxuICAgIGhoOiAnJWQgw6DCpMKYw6DCpMKCw6DCpMKfw6DCpcKHJyxcbiAgICBkOiAnw6DCpMKPw6DCpMKVIMOgwqTCpsOgwqTCv8OgwqTCqCcsXG4gICAgZGQ6ICclZCDDoMKkwqbDoMKkwr/DoMKkwqgnLFxuICAgIE06ICfDoMKkwo/DoMKkwpUgw6DCpMKuw6DCpMK5w6DCpcKAw6DCpMKow6DCpcKHJyxcbiAgICBNTTogJyVkIMOgwqTCrsOgwqTCucOgwqXCgMOgwqTCqMOgwqXChycsXG4gICAgeTogJ8OgwqTCj8OgwqTClSDDoMKkwrXDoMKkwrDDoMKlwo3DoMKkwrcnLFxuICAgIHl5OiAnJWQgw6DCpMK1w6DCpMKww6DCpcKNw6DCpMK3J1xuICB9LFxuICBwcmVwYXJzZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bw6DCpcKnw6DCpcKow6DCpcKpw6DCpcKqw6DCpcKrw6DCpcKsw6DCpcKtw6DCpcKuw6DCpcKvw6DCpcKmXS9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiBudW1iZXJNYXBbbWF0Y2hdO1xuICAgIH0pO1xuICB9LFxuICBwb3N0Zm9ybWF0KHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcZC9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiBzeW1ib2xNYXBbbWF0Y2hdO1xuICAgIH0pO1xuICB9LFxuICAvLyBIaW5kaSBub3RhdGlvbiBmb3IgbWVyaWRpZW1zIGFyZSBxdWl0ZSBmdXp6eSBpbiBwcmFjdGljZS4gV2hpbGUgdGhlcmUgZXhpc3RzXG4gIC8vIGEgcmlnaWQgbm90aW9uIG9mIGEgJ1BhaGFyJyBpdCBpcyBub3QgdXNlZCBhcyByaWdpZGx5IGluIG1vZGVybiBIaW5kaS5cbiAgbWVyaWRpZW1QYXJzZTogL8OgwqTCsMOgwqTCvsOgwqTCpHzDoMKkwrjDoMKlwoHDoMKkwqzDoMKkwrl8w6DCpMKmw6DCpcKLw6DCpMKqw6DCpMK5w6DCpMKwfMOgwqTCtsOgwqTCvsOgwqTCri8sXG4gIG1lcmlkaWVtSG91cihob3VyLCBtZXJpZGllbSkge1xuICAgIGlmIChob3VyID09PSAxMikge1xuICAgICAgaG91ciA9IDA7XG4gICAgfVxuICAgIGlmIChtZXJpZGllbSA9PT0gJ8OgwqTCsMOgwqTCvsOgwqTCpCcpIHtcbiAgICAgIHJldHVybiBob3VyIDwgNCA/IGhvdXIgOiBob3VyICsgMTI7XG4gICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ8OgwqTCuMOgwqXCgcOgwqTCrMOgwqTCuScpIHtcbiAgICAgIHJldHVybiBob3VyO1xuICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICfDoMKkwqbDoMKlwovDoMKkwqrDoMKkwrnDoMKkwrAnKSB7XG4gICAgICByZXR1cm4gaG91ciA+PSAxMCA/IGhvdXIgOiBob3VyICsgMTI7XG4gICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ8OgwqTCtsOgwqTCvsOgwqTCricpIHtcbiAgICAgIHJldHVybiBob3VyICsgMTI7XG4gICAgfVxuICB9LFxuICBtZXJpZGllbShob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcbiAgICBpZiAoaG91ciA8IDQpIHtcbiAgICAgIHJldHVybiAnw6DCpMKww6DCpMK+w6DCpMKkJztcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAxMCkge1xuICAgICAgcmV0dXJuICfDoMKkwrjDoMKlwoHDoMKkwqzDoMKkwrknO1xuICAgIH0gZWxzZSBpZiAoaG91ciA8IDE3KSB7XG4gICAgICByZXR1cm4gJ8OgwqTCpsOgwqXCi8OgwqTCqsOgwqTCucOgwqTCsCc7XG4gICAgfSBlbHNlIGlmIChob3VyIDwgMjApIHtcbiAgICAgIHJldHVybiAnw6DCpMK2w6DCpMK+w6DCpMKuJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICfDoMKkwrDDoMKkwr7DoMKkwqQnO1xuICAgIH1cbiAgfSxcbiAgd2Vlazoge1xuICAgIGRvdzogMCwgLy8gU3VuZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA2ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEh1bmdhcmlhbiBbaHVdXG4vLyEgYXV0aG9yIDogQWRhbSBCcnVubmVyIDogaHR0cHM6Ly9naXRodWIuY29tL2FkYW1icnVubmVyXG5cbmxldCB3ZWVrRW5kaW5ncyA9ICd2YXPDg8Khcm5hcCBow4PCqXRmw4XCkW4ga2VkZGVuIHN6ZXJkw4PCoW4gY3PDg8K8dMODwrZydMODwrZrw4PCtm4gcMODwqludGVrZW4gc3pvbWJhdG9uJy5zcGxpdCgnICcpO1xuZnVuY3Rpb24gdHJhbnNsYXRlKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pOiBzdHJpbmcge1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4KSA/ICduw4PCqWjDg8KhbnkgbcODwqFzb2RwZXJjJyA6ICduw4PCqWjDg8KhbnkgbcODwqFzb2RwZXJjZSc7XG4gICAgY2FzZSAnc3MnOlxuICAgICAgcmV0dXJuIG51bSArICgoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCkgPyAnIG3Dg8Khc29kcGVyYycgOiAnIG3Dg8Khc29kcGVyY2UnKTtcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBwZXJjJyA6ICcgcGVyY2UnKTtcbiAgICBjYXNlICdtbSc6XG4gICAgICByZXR1cm4gbnVtICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIHBlcmMnIDogJyBwZXJjZScpO1xuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuICdlZ3knICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIMODwrNyYScgOiAnIMODwrNyw4PCoWphJyk7XG4gICAgY2FzZSAnaGgnOlxuICAgICAgcmV0dXJuIG51bSArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyDDg8KzcmEnIDogJyDDg8KzcsODwqFqYScpO1xuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuICdlZ3knICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIG5hcCcgOiAnIG5hcGphJyk7XG4gICAgY2FzZSAnZGQnOlxuICAgICAgcmV0dXJuIG51bSArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBuYXAnIDogJyBuYXBqYScpO1xuICAgIGNhc2UgJ00nOlxuICAgICAgcmV0dXJuICdlZ3knICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIGjDg8KzbmFwJyA6ICcgaMODwrNuYXBqYScpO1xuICAgIGNhc2UgJ01NJzpcbiAgICAgIHJldHVybiBudW0gKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgaMODwrNuYXAnIDogJyBow4PCs25hcGphJyk7XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gJ2VneScgKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgw4PCqXYnIDogJyDDg8KpdmUnKTtcbiAgICBjYXNlICd5eSc6XG4gICAgICByZXR1cm4gbnVtICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIMODwql2JyA6ICcgw4PCqXZlJyk7XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuZnVuY3Rpb24gd2VlayhkYXRlOiBEYXRlLCBpc0Z1dHVyZTogYm9vbGVhbikge1xuICByZXR1cm4gKGlzRnV0dXJlID8gJycgOiAnW23Dg8K6bHRdICcpICsgJ1snICsgd2Vla0VuZGluZ3NbZ2V0RGF5T2ZXZWVrKGRhdGUpXSArICddIExUWy1rb3JdJztcbn1cblxuZXhwb3J0IGNvbnN0IGh1TG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnaHUnLFxuICBtb250aHMgOiAnamFudcODwqFyX2ZlYnJ1w4PCoXJfbcODwqFyY2l1c1/Dg8KhcHJpbGlzX23Dg8KhanVzX2rDg8K6bml1c19qw4PCumxpdXNfYXVndXN6dHVzX3N6ZXB0ZW1iZXJfb2t0w4PCs2Jlcl9ub3ZlbWJlcl9kZWNlbWJlcicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQgOiAnamFuX2ZlYl9tw4PCoXJjX8ODwqFwcl9tw4PCoWpfasODwrpuX2rDg8K6bF9hdWdfc3plcHRfb2t0X25vdl9kZWMnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzIDogJ3Zhc8ODwqFybmFwX2jDg8KpdGbDhcKRX2tlZGRfc3plcmRhX2Nzw4PCvHTDg8K2cnTDg8K2a19ww4PCqW50ZWtfc3pvbWJhdCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydCA6ICd2YXNfaMODwql0X2tlZGRfc3plX2Nzw4PCvHRfcMODwqluX3N6bycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW4gOiAndl9oX2tfc3plX2NzX3Bfc3pvJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICBMVCA6ICdIOm1tJyxcbiAgICBMVFMgOiAnSDptbTpzcycsXG4gICAgTCA6ICdZWVlZLk1NLkRELicsXG4gICAgTEwgOiAnWVlZWS4gTU1NTSBELicsXG4gICAgTExMIDogJ1lZWVkuIE1NTU0gRC4gSDptbScsXG4gICAgTExMTCA6ICdZWVlZLiBNTU1NIEQuLCBkZGRkIEg6bW0nXG4gIH0sXG4gIG1lcmlkaWVtUGFyc2U6IC9kZXxkdS9pLFxuICBpc1BNIChpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC5jaGFyQXQoMSkudG9Mb3dlckNhc2UoKSA9PT0gJ3UnO1xuICB9LFxuICBtZXJpZGllbSAoaG91cnMsIG1pbnV0ZXMsIGlzTG93ZXIpIHtcbiAgICBpZiAoaG91cnMgPCAxMikge1xuICAgICAgcmV0dXJuIGlzTG93ZXIgPT09IHRydWUgPyAnZGUnIDogJ0RFJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGlzTG93ZXIgPT09IHRydWUgPyAnZHUnIDogJ0RVJztcbiAgICB9XG4gIH0sXG4gIGNhbGVuZGFyIDoge1xuICAgIHNhbWVEYXkgOiAnW21hXSBMVFsta29yXScsXG4gICAgbmV4dERheSA6ICdbaG9sbmFwXSBMVFsta29yXScsXG4gICAgbmV4dFdlZWsgKGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiB3ZWVrKGRhdGUsIHRydWUpO1xuICAgIH0sXG4gICAgbGFzdERheSA6ICdbdGVnbmFwXSBMVFsta29yXScsXG4gICAgbGFzdFdlZWsgKGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiB3ZWVrKGRhdGUsIGZhbHNlKTtcbiAgICB9LFxuICAgIHNhbWVFbHNlIDogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZSA6IHtcbiAgICBmdXR1cmUgOiAnJXMgbcODwrpsdmEnLFxuICAgIHBhc3QgOiAnJXMnLFxuICAgIHMgOiB0cmFuc2xhdGUsXG4gICAgc3MgOiB0cmFuc2xhdGUsXG4gICAgbSA6IHRyYW5zbGF0ZSxcbiAgICBtbSA6IHRyYW5zbGF0ZSxcbiAgICBoIDogdHJhbnNsYXRlLFxuICAgIGhoIDogdHJhbnNsYXRlLFxuICAgIGQgOiB0cmFuc2xhdGUsXG4gICAgZGQgOiB0cmFuc2xhdGUsXG4gICAgTSA6IHRyYW5zbGF0ZSxcbiAgICBNTSA6IHRyYW5zbGF0ZSxcbiAgICB5IDogdHJhbnNsYXRlLFxuICAgIHl5IDogdHJhbnNsYXRlXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXG4gIG9yZGluYWwgOiAnJWQuJyxcbiAgd2VlayA6IHtcbiAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1wYXJhbWV0ZXItcmVhc3NpZ25tZW50IHByZWZlci1zd2l0Y2hcblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogSW5kb25lc2lhIFtpZF1cbi8vISBhdXRob3IgOiBSb215IEt1c3VtYSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9ya3VzdW1hXG4vLyEgcmVmZXJlbmNlOiBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9ibG9iL2RldmVsb3AvbG9jYWxlL2lkLmpzXG5cbmV4cG9ydCBjb25zdCBpZExvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2lkJyxcbiAgbW9udGhzIDogJ0phbnVhcmlfRmVicnVhcmlfTWFyZXRfQXByaWxfTWVpX0p1bmlfSnVsaV9BZ3VzdHVzX1NlcHRlbWJlcl9Pa3RvYmVyX05vdmVtYmVyX0Rlc2VtYmVyJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydCA6ICdKYW5fRmViX01hcl9BcHJfTWVpX0p1bl9KdWxfQWdzX1NlcF9Pa3RfTm92X0Rlcycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXMgOiAnTWluZ2d1X1NlbmluX1NlbGFzYV9SYWJ1X0thbWlzX0p1bWF0X1NhYnR1Jy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0IDogJ01pbl9TZW5fU2VsX1JhYl9LYW1fSnVtX1NhYicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW4gOiAnTWdfU25fU2xfUmJfS21fSm1fU2InLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgIExUIDogJ0hILm1tJyxcbiAgICBMVFMgOiAnSEgubW0uc3MnLFxuICAgIEwgOiAnREQvTU0vWVlZWScsXG4gICAgTEwgOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTCA6ICdEIE1NTU0gWVlZWSBbcHVrdWxdIEhILm1tJyxcbiAgICBMTExMIDogJ2RkZGQsIEQgTU1NTSBZWVlZIFtwdWt1bF0gSEgubW0nXG4gIH0sXG4gIG1lcmlkaWVtUGFyc2U6IC9wYWdpfHNpYW5nfHNvcmV8bWFsYW0vLFxuICBtZXJpZGllbUhvdXIoaG91ciwgbWVyaWRpZW0pIHtcbiAgICBpZiAoaG91ciA9PT0gMTIpIHtcbiAgICAgIGhvdXIgPSAwO1xuICAgIH1cbiAgICBpZiAobWVyaWRpZW0gPT09ICdwYWdpJykge1xuICAgICAgcmV0dXJuIGhvdXI7XG4gICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ3NpYW5nJykge1xuICAgICAgcmV0dXJuIGhvdXIgPj0gMTEgPyBob3VyIDogaG91ciArIDEyO1xuICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICdzb3JlJyB8fCBtZXJpZGllbSA9PT0gJ21hbGFtJykge1xuICAgICAgcmV0dXJuIGhvdXIgKyAxMjtcbiAgICB9XG4gIH0sXG4gIG1lcmlkaWVtKGhvdXJzLCBtaW51dGVzLCBpc0xvd2VyKSB7XG4gICAgaWYgKGhvdXJzIDwgMTEpIHtcbiAgICAgIHJldHVybiAncGFnaSc7XG4gICAgfSBlbHNlIGlmIChob3VycyA8IDE1KSB7XG4gICAgICByZXR1cm4gJ3NpYW5nJztcbiAgICB9IGVsc2UgaWYgKGhvdXJzIDwgMTkpIHtcbiAgICAgIHJldHVybiAnc29yZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnbWFsYW0nO1xuICAgIH1cbiAgfSxcbiAgY2FsZW5kYXIgOiB7XG4gICAgc2FtZURheSA6ICdbSGFyaSBpbmkgcHVrdWxdIExUJyxcbiAgICBuZXh0RGF5IDogJ1tCZXNvayBwdWt1bF0gTFQnLFxuICAgIG5leHRXZWVrIDogJ2RkZGQgW3B1a3VsXSBMVCcsXG4gICAgbGFzdERheSA6ICdbS2VtYXJpbiBwdWt1bF0gTFQnLFxuICAgIGxhc3RXZWVrIDogJ2RkZGQgW2xhbHUgcHVrdWxdIExUJyxcbiAgICBzYW1lRWxzZSA6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgZnV0dXJlIDogJ2RhbGFtICVzJyxcbiAgICBwYXN0IDogJyVzIHlhbmcgbGFsdScsXG4gICAgcyA6ICdiZWJlcmFwYSBkZXRpaycsXG4gICAgc3MgOiAnJWQgZGV0aWsnLFxuICAgIG0gOiAnc2VtZW5pdCcsXG4gICAgbW0gOiAnJWQgbWVuaXQnLFxuICAgIGggOiAnc2VqYW0nLFxuICAgIGhoIDogJyVkIGphbScsXG4gICAgZCA6ICdzZWhhcmknLFxuICAgIGRkIDogJyVkIGhhcmknLFxuICAgIE0gOiAnc2VidWxhbicsXG4gICAgTU0gOiAnJWQgYnVsYW4nLFxuICAgIHkgOiAnc2V0YWh1bicsXG4gICAgeXkgOiAnJWQgdGFodW4nXG4gIH0sXG4gIHdlZWsgOiB7XG4gICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95IDogNyAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEl0YWxpYW4gW2l0XVxuLy8hIGF1dGhvciA6IExvcmVuem8gOiBodHRwczovL2dpdGh1Yi5jb20vYWxpZW1cbi8vISBhdXRob3I6IE1hdHRpYSBMYXJlbnRpczogaHR0cHM6Ly9naXRodWIuY29tL25vc3RhbGdpYXpcblxuZXhwb3J0IGNvbnN0IGl0TG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnaXQnLFxuICBtb250aHM6ICdnZW5uYWlvX2ZlYmJyYWlvX21hcnpvX2FwcmlsZV9tYWdnaW9fZ2l1Z25vX2x1Z2xpb19hZ29zdG9fc2V0dGVtYnJlX290dG9icmVfbm92ZW1icmVfZGljZW1icmUnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnZ2VuX2ZlYl9tYXJfYXByX21hZ19naXVfbHVnX2Fnb19zZXRfb3R0X25vdl9kaWMnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzOiAnZG9tZW5pY2FfbHVuZWTDg8KsX21hcnRlZMODwqxfbWVyY29sZWTDg8KsX2dpb3ZlZMODwqxfdmVuZXJkw4PCrF9zYWJhdG8nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICdkb21fbHVuX21hcl9tZXJfZ2lvX3Zlbl9zYWInLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnZG9fbHVfbWFfbWVfZ2lfdmVfc2EnLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdISDptbScsXG4gICAgTFRTOiAnSEg6bW06c3MnLFxuICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSBISDptbScsXG4gICAgTExMTDogJ2RkZGQgRCBNTU1NIFlZWVkgSEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1tPZ2dpIGFsbGVdIExUJyxcbiAgICBuZXh0RGF5OiAnW0RvbWFuaSBhbGxlXSBMVCcsXG4gICAgbmV4dFdlZWs6ICdkZGRkIFthbGxlXSBMVCcsXG4gICAgbGFzdERheTogJ1tJZXJpIGFsbGVdIExUJyxcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKSB7XG4gICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcmV0dXJuICdbbGEgc2NvcnNhXSBkZGRkIFthbGxlXSBMVCc7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICdbbG8gc2NvcnNvXSBkZGRkIFthbGxlXSBMVCc7XG4gICAgICB9XG4gICAgfSxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZShudW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgICByZXR1cm4gKCgvXlswLTldLiskLykudGVzdChudW0udG9TdHJpbmcoMTApKSA/ICd0cmEnIDogJ2luJykgKyAnICcgKyBudW07XG4gICAgfSxcbiAgICBwYXN0OiAnJXMgZmEnLFxuICAgIHM6ICdhbGN1bmkgc2Vjb25kaScsXG4gICAgc3M6ICclZCBzZWNvbmRpJyxcbiAgICBtOiAndW4gbWludXRvJyxcbiAgICBtbTogJyVkIG1pbnV0aScsXG4gICAgaDogJ3VuXFwnb3JhJyxcbiAgICBoaDogJyVkIG9yZScsXG4gICAgZDogJ3VuIGdpb3JubycsXG4gICAgZGQ6ICclZCBnaW9ybmknLFxuICAgIE06ICd1biBtZXNlJyxcbiAgICBNTTogJyVkIG1lc2knLFxuICAgIHk6ICd1biBhbm5vJyxcbiAgICB5eTogJyVkIGFubmknXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfcOCwrovLFxuICBvcmRpbmFsOiAnJWTDgsK6JyxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEphcGFuZXNlIFtqYV1cbi8vISBhdXRob3IgOiBMSSBMb25nIDogaHR0cHM6Ly9naXRodWIuY29tL2JhcnlvblxuXG5leHBvcnQgY29uc3QgamFMb2NhbGU6IExvY2FsZURhdGEgPSAge1xuICBhYmJyOiAnamEnLFxuICBtb250aHMgOiAnMcOmwpzCiF8yw6bCnMKIXzPDpsKcwohfNMOmwpzCiF81w6bCnMKIXzbDpsKcwohfN8OmwpzCiF84w6bCnMKIXznDpsKcwohfMTDDpsKcwohfMTHDpsKcwohfMTLDpsKcwognLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0IDogJzHDpsKcwohfMsOmwpzCiF8zw6bCnMKIXzTDpsKcwohfNcOmwpzCiF82w6bCnMKIXzfDpsKcwohfOMOmwpzCiF85w6bCnMKIXzEww6bCnMKIXzExw6bCnMKIXzEyw6bCnMKIJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5cyA6ICfDpsKXwqXDpsKbwpzDpsKXwqVfw6bCnMKIw6bCm8Kcw6bCl8KlX8OnwoHCq8OmwpvCnMOmwpfCpV/DpsKwwrTDpsKbwpzDpsKXwqVfw6bCnMKow6bCm8Kcw6bCl8KlX8OpwofCkcOmwpvCnMOmwpfCpV/DpcKcwp/DpsKbwpzDpsKXwqUnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQgOiAnw6bCl8KlX8OmwpzCiF/Dp8KBwqtfw6bCsMK0X8OmwpzCqF/DqcKHwpFfw6XCnMKfJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbiA6ICfDpsKXwqVfw6bCnMKIX8OnwoHCq1/DpsKwwrRfw6bCnMKoX8OpwofCkV/DpcKcwp8nLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgIExUIDogJ0hIOm1tJyxcbiAgICBMVFMgOiAnSEg6bW06c3MnLFxuICAgIEwgOiAnWVlZWS9NTS9ERCcsXG4gICAgTEwgOiAnWVlZWcOlwrnCtE3DpsKcwohEw6bCl8KlJyxcbiAgICBMTEwgOiAnWVlZWcOlwrnCtE3DpsKcwohEw6bCl8KlIEhIOm1tJyxcbiAgICBMTExMIDogJ1lZWVnDpcK5wrRNw6bCnMKIRMOmwpfCpSBISDptbSBkZGRkJyxcbiAgICBsIDogJ1lZWVkvTU0vREQnLFxuICAgIGxsIDogJ1lZWVnDpcK5wrRNw6bCnMKIRMOmwpfCpScsXG4gICAgbGxsIDogJ1lZWVnDpcK5wrRNw6bCnMKIRMOmwpfCpSBISDptbScsXG4gICAgbGxsbCA6ICdZWVlZw6XCucK0TcOmwpzCiETDpsKXwqUgSEg6bW0gZGRkZCdcbiAgfSxcbiAgbWVyaWRpZW1QYXJzZTogL8Olwo3CiMOlwonCjXzDpcKNwojDpcK+wowvaSxcbiAgaXNQTSAoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQgPT09ICfDpcKNwojDpcK+wownO1xuICB9LFxuICBtZXJpZGllbSAoaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgaWYgKGhvdXIgPCAxMikge1xuICAgICAgcmV0dXJuICfDpcKNwojDpcKJwo0nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ8Olwo3CiMOlwr7CjCc7XG4gICAgfVxuICB9LFxuICBjYWxlbmRhciA6IHtcbiAgICBzYW1lRGF5IDogJ1vDpMK7worDpsKXwqVdIExUJyxcbiAgICBuZXh0RGF5IDogJ1vDpsKYwo7DpsKXwqVdIExUJyxcbiAgICBuZXh0V2VlayA6ICdbw6bCncKlw6nCgMKxXWRkZGQgTFQnLFxuICAgIGxhc3REYXkgOiAnW8OmwpjCqMOmwpfCpV0gTFQnLFxuICAgIGxhc3RXZWVrIDogJ1vDpcKJwo3DqcKAwrFdZGRkZCBMVCcsXG4gICAgc2FtZUVsc2UgOiAnTCdcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZSA6IC9cXGR7MSwyfcOmwpfCpS8sXG4gIG9yZGluYWwgKG51bTogbnVtYmVyLCBwZXJpb2Q6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgc3dpdGNoIChwZXJpb2QpIHtcbiAgICAgIGNhc2UgJ2QnOlxuICAgICAgY2FzZSAnRCc6XG4gICAgICBjYXNlICdEREQnOlxuICAgICAgICByZXR1cm4gbnVtICsgJ8OmwpfCpSc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gIH0sXG4gIHJlbGF0aXZlVGltZSA6IHtcbiAgICBmdXR1cmUgOiAnJXPDpcK+wownLFxuICAgIHBhc3QgOiAnJXPDpcKJwo0nLFxuICAgIHMgOiAnw6bClcKww6fCp8KSJyxcbiAgICBzcyA6ICclZMOnwqfCkicsXG4gICAgbSA6ICcxw6XCiMKGJyxcbiAgICBtbSA6ICclZMOlwojChicsXG4gICAgaCA6ICcxw6bCmcKCw6nClsKTJyxcbiAgICBoaCA6ICclZMOmwpnCgsOpwpbCkycsXG4gICAgZCA6ICcxw6bCl8KlJyxcbiAgICBkZCA6ICclZMOmwpfCpScsXG4gICAgTSA6ICcxw6PCg8K2w6bCnMKIJyxcbiAgICBNTSA6ICclZMOjwoPCtsOmwpzCiCcsXG4gICAgeSA6ICcxw6XCucK0JyxcbiAgICB5eSA6ICclZMOlwrnCtCdcbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cbi8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNob3J0aGFuZFxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBLb3JlYW4gW2tvXVxuLy8hIGF1dGhvciA6IEt5dW5nd29vaywgUGFyayA6IGh0dHBzOi8vZ2l0aHViLmNvbS9reXVuZ3cwMGtcbi8vISBhdXRob3IgOiBKZWVleXVsIExlZSA8amVlZXl1bEBnbWFpbC5jb20+XG5cbmV4cG9ydCBjb25zdCBrb0xvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2tvJyxcbiAgbW9udGhzIDogJzHDrMKbwpRfMsOswpvClF8zw6zCm8KUXzTDrMKbwpRfNcOswpvClF82w6zCm8KUXzfDrMKbwpRfOMOswpvClF85w6zCm8KUXzEww6zCm8KUXzExw6zCm8KUXzEyw6zCm8KUJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydCA6ICcxw6zCm8KUXzLDrMKbwpRfM8OswpvClF80w6zCm8KUXzXDrMKbwpRfNsOswpvClF83w6zCm8KUXzjDrMKbwpRfOcOswpvClF8xMMOswpvClF8xMcOswpvClF8xMsOswpvClCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXMgOiAnw6zCncK8w6zCmsKUw6zCncK8X8OswpvClMOswprClMOswp3CvF/DrcKZwpTDrMKawpTDrMKdwrxfw6zCiMKYw6zCmsKUw6zCncK8X8OrwqrCqcOswprClMOswp3CvF/DqsK4wojDrMKawpTDrMKdwrxfw63ChsKgw6zCmsKUw6zCncK8Jy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0IDogJ8Oswp3CvF/DrMKbwpRfw63CmcKUX8OswojCmF/Dq8Kqwqlfw6rCuMKIX8OtwobCoCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW4gOiAnw6zCncK8X8OswpvClF/DrcKZwpRfw6zCiMKYX8OrwqrCqV/DqsK4wohfw63ChsKgJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICBMVCA6ICdBIGg6bW0nLFxuICAgIExUUyA6ICdBIGg6bW06c3MnLFxuICAgIEwgOiAnWVlZWS5NTS5ERCcsXG4gICAgTEwgOiAnWVlZWcOrwoXChCBNTU1NIETDrMKdwrwnLFxuICAgIExMTCA6ICdZWVlZw6vChcKEIE1NTU0gRMOswp3CvCBBIGg6bW0nLFxuICAgIExMTEwgOiAnWVlZWcOrwoXChCBNTU1NIETDrMKdwrwgZGRkZCBBIGg6bW0nLFxuICAgIGwgOiAnWVlZWS5NTS5ERCcsXG4gICAgbGwgOiAnWVlZWcOrwoXChCBNTU1NIETDrMKdwrwnLFxuICAgIGxsbCA6ICdZWVlZw6vChcKEIE1NTU0gRMOswp3CvCBBIGg6bW0nLFxuICAgIGxsbGwgOiAnWVlZWcOrwoXChCBNTU1NIETDrMKdwrwgZGRkZCBBIGg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyIDoge1xuICAgIHNhbWVEYXkgOiAnw6zCmMKkw6vCisKYIExUJyxcbiAgICBuZXh0RGF5IDogJ8OrwoLCtMOswp3CvCBMVCcsXG4gICAgbmV4dFdlZWsgOiAnZGRkZCBMVCcsXG4gICAgbGFzdERheSA6ICfDrMKWwrTDrMKgwpwgTFQnLFxuICAgIGxhc3RXZWVrIDogJ8OswqfCgMOrwoLCnMOswqPCvCBkZGRkIExUJyxcbiAgICBzYW1lRWxzZSA6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgZnV0dXJlIDogJyVzIMOtwpvChCcsXG4gICAgcGFzdCA6ICclcyDDrMKgwoQnLFxuICAgIHMgOiAnw6vCqsKHIMOswrTCiCcsXG4gICAgc3MgOiAnJWTDrMK0wognLFxuICAgIG0gOiAnMcOrwrbChCcsXG4gICAgbW0gOiAnJWTDq8K2woQnLFxuICAgIGggOiAnw63ClcKcIMOswovCnMOqwrDChCcsXG4gICAgaGggOiAnJWTDrMKLwpzDqsKwwoQnLFxuICAgIGQgOiAnw63ClcKYw6vCo8KoJyxcbiAgICBkZCA6ICclZMOswp3CvCcsXG4gICAgTSA6ICfDrcKVwpwgw6vCi8KsJyxcbiAgICBNTSA6ICclZMOrwovCrCcsXG4gICAgeSA6ICfDrMKdwrwgw6vChcKEJyxcbiAgICB5eSA6ICclZMOrwoXChCdcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZSA6IC9cXGR7MSwyfSjDrMKdwrx8w6zCm8KUfMOswqPCvCkvLFxuICBvcmRpbmFsIDogZnVuY3Rpb24gKG51bTogbnVtYmVyLCBwZXJpb2Q6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgc3dpdGNoIChwZXJpb2QpIHtcbiAgICAgIGNhc2UgJ2QnOlxuICAgICAgY2FzZSAnRCc6XG4gICAgICBjYXNlICdEREQnOlxuICAgICAgICByZXR1cm4gbnVtICsgJ8Oswp3CvCc7XG4gICAgICBjYXNlICdNJzpcbiAgICAgICAgcmV0dXJuIG51bSArICfDrMKbwpQnO1xuICAgICAgY2FzZSAndyc6XG4gICAgICBjYXNlICdXJzpcbiAgICAgICAgcmV0dXJuIG51bSArICfDrMKjwrwnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bS50b1N0cmluZygxMCk7XG4gICAgfVxuICB9LFxuICBtZXJpZGllbVBhcnNlIDogL8OswpjCpMOswqDChHzDrMKYwqTDrcKbwoQvLFxuICBpc1BNIDogZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgcmV0dXJuIHRva2VuID09PSAnw6zCmMKkw63Cm8KEJztcbiAgfSxcbiAgbWVyaWRpZW0gOiBmdW5jdGlvbiAoaG91ciwgbWludXRlLCBpc1VwcGVyKSB7XG4gICAgcmV0dXJuIGhvdXIgPCAxMiA/ICfDrMKYwqTDrMKgwoQnIDogJ8OswpjCpMOtwpvChCc7XG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zaG9ydGhhbmRcblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogTW9uZ29saWFuIFttbl1cbi8vISBhdXRob3IgOiBKYXZraGxhbnR1Z3MgTnlhbWRvcmogOiBodHRwczovL2dpdGh1Yi5jb20vamF2a2hhYW5qN1xuXG5mdW5jdGlvbiB0cmFuc2xhdGUobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nLCBpc0Z1dHVyZTogYm9vbGVhbikge1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAnw5HChcORwo3DkMK0w5HChcORwo3DkMK9IMORwoHDkMK1w5DCusORwoPDkMK9w5DCtCcgOiAnw5HChcORwo3DkMK0w5HChcORwo3DkMK9IMORwoHDkMK1w5DCusORwoPDkMK9w5DCtMORwovDkMK9JztcbiAgICBjYXNlICdzcyc6XG4gICAgICByZXR1cm4gbnVtICsgKHdpdGhvdXRTdWZmaXggPyAnIMORwoHDkMK1w5DCusORwoPDkMK9w5DCtCcgOiAnIMORwoHDkMK1w5DCusORwoPDkMK9w5DCtMORwovDkMK9Jyk7XG4gICAgY2FzZSAnbSc6XG4gICAgY2FzZSAnbW0nOlxuICAgICAgcmV0dXJuIG51bSArICh3aXRob3V0U3VmZml4ID8gJyDDkMK8w5DCuMOQwr3DkcKDw5HCgicgOiAnIMOQwrzDkMK4w5DCvcORwoPDkcKCw5HCi8OQwr0nKTtcbiAgICBjYXNlICdoJzpcbiAgICBjYXNlICdoaCc6XG4gICAgICByZXR1cm4gbnVtICsgKHdpdGhvdXRTdWZmaXggPyAnIMORwobDkMKww5DCsycgOiAnIMORwobDkMKww5DCs8OQwrjDkMK5w5DCvScpO1xuICAgIGNhc2UgJ2QnOlxuICAgIGNhc2UgJ2RkJzpcbiAgICAgIHJldHVybiBudW0gKyAod2l0aG91dFN1ZmZpeCA/ICcgw5PCqcOQwrTDk8Kpw5HCgCcgOiAnIMOTwqnDkMK0w5HCgMOQwrjDkMK5w5DCvScpO1xuICAgIGNhc2UgJ00nOlxuICAgIGNhc2UgJ01NJzpcbiAgICAgIHJldHVybiBudW0gKyAod2l0aG91dFN1ZmZpeCA/ICcgw5HCgcOQwrDDkcKAJyA6ICcgw5HCgcOQwrDDkcKAw5HCi8OQwr0nKTtcbiAgICBjYXNlICd5JzpcbiAgICBjYXNlICd5eSc6XG4gICAgICByZXR1cm4gbnVtICsgKHdpdGhvdXRTdWZmaXggPyAnIMOQwrbDkMK4w5DCuycgOiAnIMOQwrbDkMK4w5DCu8OQwrjDkMK5w5DCvScpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKDEwKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbW5Mb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdtbicsXG4gIG1vbnRoczogJ8OQwp3DkcKNw5DCs8OQwrTDksKvw5DCs8ORwo3DkcKNw5HCgCDDkcKBw5DCsMORwoBfw5DCpcOQwr7DkcKRw5HCgMOQwrTDkcKDw5DCs8OQwrDDkMKww5HCgCDDkcKBw5DCsMORwoBfw5DCk8ORwoPDkcKAw5DCsMOQwrLDkMK0w5HCg8OQwrPDkMKww5DCsMORwoAgw5HCgcOQwrDDkcKAX8OQwpTDk8Kpw5HCgMOTwqnDkMKyw5DCtMOSwq/DkMKzw5HCjcORwo3DkcKAIMORwoHDkMKww5HCgF/DkMKiw5DCsMOQwrLDkMK0w5HCg8OQwrPDkMKww5DCsMORwoAgw5HCgcOQwrDDkcKAX8OQwpfDkcKDw5HCgMOQwrPDkMKww5DCtMORwoPDkMKzw5DCsMOQwrDDkcKAIMORwoHDkMKww5HCgF/DkMKUw5DCvsOQwrvDkMK0w5HCg8OQwrPDkMKww5DCsMORwoAgw5HCgcOQwrDDkcKAX8OQwp3DkMKww5DCucOQwrzDkMK0w5HCg8OQwrPDkMKww5DCsMORwoAgw5HCgcOQwrDDkcKAX8OQwpXDkcKBw5DCtMOSwq/DkMKzw5HCjcORwo3DkcKAIMORwoHDkMKww5HCgF/DkMKQw5HCgMOQwrDDkMKyw5DCtMORwoPDkMKzw5DCsMOQwrDDkcKAIMORwoHDkMKww5HCgF/DkMKQw5HCgMOQwrLDkMKww5DCvSDDkMK9w5HCjcOQwrPDkMK0w5LCr8OQwrPDkcKNw5HCjcORwoAgw5HCgcOQwrDDkcKAX8OQwpDDkcKAw5DCssOQwrDDkMK9IMORwoXDkMK+w5HCkcORwoDDkMK0w5HCg8OQwrPDkMKww5DCsMORwoAgw5HCgcOQwrDDkcKAJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJzEgw5HCgcOQwrDDkcKAXzIgw5HCgcOQwrDDkcKAXzMgw5HCgcOQwrDDkcKAXzQgw5HCgcOQwrDDkcKAXzUgw5HCgcOQwrDDkcKAXzYgw5HCgcOQwrDDkcKAXzcgw5HCgcOQwrDDkcKAXzggw5HCgcOQwrDDkcKAXzkgw5HCgcOQwrDDkcKAXzEwIMORwoHDkMKww5HCgF8xMSDDkcKBw5DCsMORwoBfMTIgw5HCgcOQwrDDkcKAJy5zcGxpdCgnXycpLFxuICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxuICB3ZWVrZGF5czogJ8OQwp3DkcKPw5DCvF/DkMKUw5DCsMOQwrLDkMKww5DCsF/DkMKcw5HCj8OQwrPDkMK8w5DCsMORwoBfw5DCm8ORwoXDkMKww5DCs8OQwrLDkMKwX8OQwp/DksKvw5HCgMORwo3DkMKyX8OQwpHDkMKww5DCsMORwoHDkMKww5DCvV/DkMKRw5HCj8OQwrzDkMKxw5DCsCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ8OQwp3DkcKPw5DCvF/DkMKUw5DCsMOQwrJfw5DCnMORwo/DkMKzX8OQwpvDkcKFw5DCsF/DkMKfw5LCr8ORwoBfw5DCkcOQwrDDkMKwX8OQwpHDkcKPw5DCvCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICfDkMKdw5HCj1/DkMKUw5DCsF/DkMKcw5HCj1/DkMKbw5HChV/DkMKfw5LCr1/DkMKRw5DCsF/DkMKRw5HCjycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnWVlZWS1NTS1ERCcsXG4gICAgTEw6ICdZWVlZIMOQwr7DkMK9w5HCiyBNTU1Nw5HCi8OQwr0gRCcsXG4gICAgTExMOiAnWVlZWSDDkMK+w5DCvcORwosgTU1NTcORwovDkMK9IEQgSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBZWVlZIMOQwr7DkMK9w5HCiyBNTU1Nw5HCi8OQwr0gRCBISDptbSdcbiAgfSxcbiAgbWVyaWRpZW1QYXJzZTogL8OSwq7Dk8KofMOSwq7DkMKlL2ksXG4gIGlzUE06IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dCA9PT0gJ8OSwq7DkMKlJztcbiAgfSxcbiAgbWVyaWRpZW06IGZ1bmN0aW9uIChob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcbiAgICBpZiAoaG91ciA8IDEyKSB7XG4gICAgICByZXR1cm4gJ8OSwq7Dk8KoJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICfDksKuw5DCpSc7XG4gICAgfVxuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbw5PCqMOQwr3Dk8Kpw5PCqcOQwrTDk8Kpw5HCgF0gTFQnLFxuICAgIG5leHREYXk6ICdbw5DCnMOQwrDDkcKAw5DCs8OQwrDDkMKww5HCiF0gTFQnLFxuICAgIG5leHRXZWVrOiAnW8OQwpjDkcKAw5HCjcORwoVdIGRkZGQgTFQnLFxuICAgIGxhc3REYXk6ICdbw5PCqMORwofDkMK4w5DCs8OQwrTDk8Kpw5HCgF0gTFQnLFxuICAgIGxhc3RXZWVrOiAnW8OTwqjDkMK9w5DCs8OTwqnDkcKAw5HCgcOTwqnDkMK9XSBkZGRkIExUJyxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJyVzIMOQwrTDkMKww5HCgMOQwrDDkMKwJyxcbiAgICBwYXN0OiAnJXMgw5PCqcOQwrzDkMK9w5PCqScsXG4gICAgczogdHJhbnNsYXRlLFxuICAgIHNzOiB0cmFuc2xhdGUsXG4gICAgbTogdHJhbnNsYXRlLFxuICAgIG1tOiB0cmFuc2xhdGUsXG4gICAgaDogdHJhbnNsYXRlLFxuICAgIGhoOiB0cmFuc2xhdGUsXG4gICAgZDogdHJhbnNsYXRlLFxuICAgIGRkOiB0cmFuc2xhdGUsXG4gICAgTTogdHJhbnNsYXRlLFxuICAgIE1NOiB0cmFuc2xhdGUsXG4gICAgeTogdHJhbnNsYXRlLFxuICAgIHl5OiB0cmFuc2xhdGVcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9IMOTwqnDkMK0w5PCqcORwoAvLFxuICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtOiBudW1iZXIsIHBlcmlvZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHBlcmlvZCkge1xuICAgICAgY2FzZSAnZCc6XG4gICAgICBjYXNlICdEJzpcbiAgICAgIGNhc2UgJ0RERCc6XG4gICAgICAgIHJldHVybiBudW0gKyAnIMOTwqnDkMK0w5PCqcORwoAnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bS50b1N0cmluZygxMCk7XG4gICAgfVxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBEdXRjaCBbbmxdXG4vLyEgYXV0aG9yIDogSm9yaXMgUsODwrZsaW5nIDogaHR0cHM6Ly9naXRodWIuY29tL2pvcmlzcm9saW5nXG4vLyEgYXV0aG9yIDogSmFjb2IgTWlkZGFnIDogaHR0cHM6Ly9naXRodWIuY29tL21pZGRhZ2pcblxubGV0IG1vbnRoc1Nob3J0V2l0aERvdHMgPSAnamFuLl9mZWIuX21ydC5fYXByLl9tZWlfanVuLl9qdWwuX2F1Zy5fc2VwLl9va3QuX25vdi5fZGVjLicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnRXaXRob3V0RG90cyA9ICdqYW5fZmViX21ydF9hcHJfbWVpX2p1bl9qdWxfYXVnX3NlcF9va3Rfbm92X2RlYycuc3BsaXQoJ18nKTtcblxubGV0IG1vbnRoc1BhcnNlID0gWy9eamFuL2ksIC9eZmViL2ksIC9ebWFhcnR8bXJ0Lj8kL2ksIC9eYXByL2ksIC9ebWVpJC9pLCAvXmp1bltpLl0/JC9pLCAvXmp1bFtpLl0/JC9pLCAvXmF1Zy9pLCAvXnNlcC9pLCAvXm9rdC9pLCAvXm5vdi9pLCAvXmRlYy9pXTtcbmxldCBtb250aHNSZWdleCA9IC9eKGphbnVhcml8ZmVicnVhcml8bWFhcnR8YXByaWx8bWVpfGFwcmlsfGp1W25sXWl8YXVndXN0dXN8c2VwdGVtYmVyfG9rdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXJ8amFuXFwuP3xmZWJcXC4/fG1ydFxcLj98YXByXFwuP3xqdVtubF1cXC4/fGF1Z1xcLj98c2VwXFwuP3xva3RcXC4/fG5vdlxcLj98ZGVjXFwuPykvaTtcblxuZXhwb3J0IGNvbnN0IG5sTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnbmwnLFxuICBtb250aHMgOiAnamFudWFyaV9mZWJydWFyaV9tYWFydF9hcHJpbF9tZWlfanVuaV9qdWxpX2F1Z3VzdHVzX3NlcHRlbWJlcl9va3RvYmVyX25vdmVtYmVyX2RlY2VtYmVyJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydCAoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFdpdGhEb3RzO1xuICAgIH0gZWxzZSBpZiAoLy1NTU0tLy50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFdpdGhvdXREb3RzW2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFdpdGhEb3RzW2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfVxuICB9LFxuXG4gIG1vbnRoc1JlZ2V4LFxuICBtb250aHNTaG9ydFJlZ2V4OiBtb250aHNSZWdleCxcbiAgbW9udGhzU3RyaWN0UmVnZXg6IC9eKGphbnVhcml8ZmVicnVhcml8bWFhcnR8bWVpfGp1W25sXWl8YXByaWx8YXVndXN0dXN8c2VwdGVtYmVyfG9rdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2ksXG4gIG1vbnRoc1Nob3J0U3RyaWN0UmVnZXg6IC9eKGphblxcLj98ZmViXFwuP3xtcnRcXC4/fGFwclxcLj98bWVpfGp1W25sXVxcLj98YXVnXFwuP3xzZXBcXC4/fG9rdFxcLj98bm92XFwuP3xkZWNcXC4/KS9pLFxuXG4gIG1vbnRoc1BhcnNlLFxuICBsb25nTW9udGhzUGFyc2UgOiBtb250aHNQYXJzZSxcbiAgc2hvcnRNb250aHNQYXJzZSA6IG1vbnRoc1BhcnNlLFxuXG4gIHdlZWtkYXlzIDogJ3pvbmRhZ19tYWFuZGFnX2RpbnNkYWdfd29lbnNkYWdfZG9uZGVyZGFnX3ZyaWpkYWdfemF0ZXJkYWcnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQgOiAnem8uX21hLl9kaS5fd28uX2RvLl92ci5femEuJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbiA6ICd6b19tYV9kaV93b19kb192cl96YScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0IDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgTFQgOiAnSEg6bW0nLFxuICAgIExUUyA6ICdISDptbTpzcycsXG4gICAgTCA6ICdERC1NTS1ZWVlZJyxcbiAgICBMTCA6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMIDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBMTExMIDogJ2RkZGQgRCBNTU1NIFlZWVkgSEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyIDoge1xuICAgIHNhbWVEYXk6ICdbdmFuZGFhZyBvbV0gTFQnLFxuICAgIG5leHREYXk6ICdbbW9yZ2VuIG9tXSBMVCcsXG4gICAgbmV4dFdlZWs6ICdkZGRkIFtvbV0gTFQnLFxuICAgIGxhc3REYXk6ICdbZ2lzdGVyZW4gb21dIExUJyxcbiAgICBsYXN0V2VlazogJ1thZmdlbG9wZW5dIGRkZGQgW29tXSBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgZnV0dXJlIDogJ292ZXIgJXMnLFxuICAgIHBhc3QgOiAnJXMgZ2VsZWRlbicsXG4gICAgcyA6ICdlZW4gcGFhciBzZWNvbmRlbicsXG4gICAgc3MgOiAnJWQgc2Vjb25kZW4nLFxuICAgIG0gOiAnw4PCqcODwqluIG1pbnV1dCcsXG4gICAgbW0gOiAnJWQgbWludXRlbicsXG4gICAgaCA6ICfDg8Kpw4PCqW4gdXVyJyxcbiAgICBoaCA6ICclZCB1dXInLFxuICAgIGQgOiAnw4PCqcODwqluIGRhZycsXG4gICAgZGQgOiAnJWQgZGFnZW4nLFxuICAgIE0gOiAnw4PCqcODwqluIG1hYW5kJyxcbiAgICBNTSA6ICclZCBtYWFuZGVuJyxcbiAgICB5IDogJ8ODwqnDg8KpbiBqYWFyJyxcbiAgICB5eSA6ICclZCBqYWFyJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0oc3RlfGRlKS8sXG4gIG9yZGluYWwgKF9udW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xuICAgIHJldHVybiBudW0gKyAoKG51bSA9PT0gMSB8fCBudW0gPT09IDggfHwgbnVtID49IDIwKSA/ICdzdGUnIDogJ2RlJyk7XG4gIH0sXG4gIHdlZWsgOiB7XG4gICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95IDogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBEdXRjaCAoQmVsZ2l1bSkgW25sLWJlXVxuLy8hIGF1dGhvciA6IEpvcmlzIFLDg8K2bGluZyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9qb3Jpc3JvbGluZ1xuLy8hIGF1dGhvciA6IEphY29iIE1pZGRhZyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9taWRkYWdqXG5cbmxldCBtb250aHNTaG9ydFdpdGhEb3RzID0gJ2phbi5fZmViLl9tcnQuX2Fwci5fbWVpX2p1bi5fanVsLl9hdWcuX3NlcC5fb2t0Ll9ub3YuX2RlYy4nLnNwbGl0KCdfJyk7XG5sZXQgbW9udGhzU2hvcnRXaXRob3V0RG90cyA9ICdqYW5fZmViX21ydF9hcHJfbWVpX2p1bl9qdWxfYXVnX3NlcF9va3Rfbm92X2RlYycuc3BsaXQoJ18nKTtcblxubGV0IG1vbnRoc1BhcnNlID0gWy9eamFuL2ksIC9eZmViL2ksIC9ebWFhcnR8bXJ0Lj8kL2ksIC9eYXByL2ksIC9ebWVpJC9pLCAvXmp1bltpLl0/JC9pLCAvXmp1bFtpLl0/JC9pLCAvXmF1Zy9pLCAvXnNlcC9pLCAvXm9rdC9pLCAvXm5vdi9pLCAvXmRlYy9pXTtcbmxldCBtb250aHNSZWdleCA9IC9eKGphbnVhcml8ZmVicnVhcml8bWFhcnR8YXByaWx8bWVpfGFwcmlsfGp1W25sXWl8YXVndXN0dXN8c2VwdGVtYmVyfG9rdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXJ8amFuXFwuP3xmZWJcXC4/fG1ydFxcLj98YXByXFwuP3xqdVtubF1cXC4/fGF1Z1xcLj98c2VwXFwuP3xva3RcXC4/fG5vdlxcLj98ZGVjXFwuPykvaTtcblxuZXhwb3J0IGNvbnN0IG5sQmVMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdubC1iZScsXG4gIG1vbnRoczogJ2phbnVhcmlfZmVicnVhcmlfbWFhcnRfYXByaWxfbWVpX2p1bmlfanVsaV9hdWd1c3R1c19zZXB0ZW1iZXJfb2t0b2Jlcl9ub3ZlbWJlcl9kZWNlbWJlcicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFdpdGhEb3RzO1xuICAgIH0gZWxzZSBpZiAoLy1NTU0tLy50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFdpdGhvdXREb3RzW2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFdpdGhEb3RzW2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfVxuICB9LFxuXG4gIG1vbnRoc1JlZ2V4LFxuICBtb250aHNTaG9ydFJlZ2V4OiBtb250aHNSZWdleCxcbiAgbW9udGhzU3RyaWN0UmVnZXg6IC9eKGphbnVhcml8ZmVicnVhcml8bWFhcnR8bWVpfGp1W25sXWl8YXByaWx8YXVndXN0dXN8c2VwdGVtYmVyfG9rdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2ksXG4gIG1vbnRoc1Nob3J0U3RyaWN0UmVnZXg6IC9eKGphblxcLj98ZmViXFwuP3xtcnRcXC4/fGFwclxcLj98bWVpfGp1W25sXVxcLj98YXVnXFwuP3xzZXBcXC4/fG9rdFxcLj98bm92XFwuP3xkZWNcXC4/KS9pLFxuXG4gIG1vbnRoc1BhcnNlLFxuICBsb25nTW9udGhzUGFyc2U6IG1vbnRoc1BhcnNlLFxuICBzaG9ydE1vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcblxuICB3ZWVrZGF5czogJ3pvbmRhZ19tYWFuZGFnX2RpbnNkYWdfd29lbnNkYWdfZG9uZGVyZGFnX3ZyaWpkYWdfemF0ZXJkYWcnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICd6by5fbWEuX2RpLl93by5fZG8uX3ZyLl96YS4nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnem9fbWFfZGlfd29fZG9fdnJfemEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ0REL01NL1lZWVknLFxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCBEIE1NTU0gWVlZWSBISDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW3ZhbmRhYWcgb21dIExUJyxcbiAgICBuZXh0RGF5OiAnW21vcmdlbiBvbV0gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCBbb21dIExUJyxcbiAgICBsYXN0RGF5OiAnW2dpc3RlcmVuIG9tXSBMVCcsXG4gICAgbGFzdFdlZWs6ICdbYWZnZWxvcGVuXSBkZGRkIFtvbV0gTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnb3ZlciAlcycsXG4gICAgcGFzdDogJyVzIGdlbGVkZW4nLFxuICAgIHM6ICdlZW4gcGFhciBzZWNvbmRlbicsXG4gICAgc3M6ICclZCBzZWNvbmRlbicsXG4gICAgbTogJ8ODwqnDg8KpbiBtaW51dXQnLFxuICAgIG1tOiAnJWQgbWludXRlbicsXG4gICAgaDogJ8ODwqnDg8KpbiB1dXInLFxuICAgIGhoOiAnJWQgdXVyJyxcbiAgICBkOiAnw4PCqcODwqluIGRhZycsXG4gICAgZGQ6ICclZCBkYWdlbicsXG4gICAgTTogJ8ODwqnDg8KpbiBtYWFuZCcsXG4gICAgTU06ICclZCBtYWFuZGVuJyxcbiAgICB5OiAnw4PCqcODwqluIGphYXInLFxuICAgIHl5OiAnJWQgamFhcidcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KHN0ZXxkZSkvLFxuICBvcmRpbmFsKF9udW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xuICAgIHJldHVybiBudW0gKyAoKG51bSA9PT0gMSB8fCBudW0gPT09IDggfHwgbnVtID49IDIwKSA/ICdzdGUnIDogJ2RlJyk7XG4gIH0sXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBnZXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBQb2xpc2ggW3BsXVxuLy8hIGF1dGhvciA6IFJhZmFsIEhpcnN6IDogaHR0cHM6Ly9naXRodWIuY29tL2V2b0xcblxubGV0IG1vbnRoc05vbWluYXRpdmUgPSAnc3R5Y3plw4XChF9sdXR5X21hcnplY19rd2llY2llw4XChF9tYWpfY3plcndpZWNfbGlwaWVjX3NpZXJwaWXDhcKEX3dyemVzaWXDhcKEX3Bhw4XCumR6aWVybmlrX2xpc3RvcGFkX2dydWR6aWXDhcKEJy5zcGxpdCgnXycpO1xubGV0IG1vbnRoc1N1YmplY3RpdmUgPSAnc3R5Y3puaWFfbHV0ZWdvX21hcmNhX2t3aWV0bmlhX21hamFfY3plcndjYV9saXBjYV9zaWVycG5pYV93cnplw4XCm25pYV9wYcOFwrpkemllcm5pa2FfbGlzdG9wYWRhX2dydWRuaWEnLnNwbGl0KCdfJyk7XG5cbmZ1bmN0aW9uIHBsdXJhbChudW06IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gKG51bSAlIDEwIDwgNSkgJiYgKG51bSAlIDEwID4gMSkgJiYgKCh+fihudW0gLyAxMCkgJSAxMCkgIT09IDEpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGUobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IHJlc3VsdCA9IG51bSArICcgJztcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlICdzcyc6XG4gICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ3Nla3VuZHknIDogJ3Nla3VuZCcpO1xuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAnbWludXRhJyA6ICdtaW51dMOEwpknO1xuICAgIGNhc2UgJ21tJzpcbiAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnbWludXR5JyA6ICdtaW51dCcpO1xuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAnZ29kemluYScgOiAnZ29kemluw4TCmSc7XG4gICAgY2FzZSAnaGgnOlxuICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdnb2R6aW55JyA6ICdnb2R6aW4nKTtcbiAgICBjYXNlICdNTSc6XG4gICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ21pZXNpw4TChWNlJyA6ICdtaWVzacOEwpljeScpO1xuICAgIGNhc2UgJ3l5JzpcbiAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnbGF0YScgOiAnbGF0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBsTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAncGwnLFxuICBtb250aHMoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHJldHVybiBtb250aHNOb21pbmF0aXZlO1xuICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnJykge1xuICAgICAgLy8gSGFjazogaWYgZm9ybWF0IGVtcHR5IHdlIGtub3cgdGhpcyBpcyB1c2VkIHRvIGdlbmVyYXRlXG4gICAgICAvLyBSZWdFeHAgYnkgbW9tZW50LiBHaXZlIHRoZW4gYmFjayBib3RoIHZhbGlkIGZvcm1zIG9mIG1vbnRoc1xuICAgICAgLy8gaW4gUmVnRXhwIHJlYWR5IGZvcm1hdC5cbiAgICAgIHJldHVybiAnKCcgKyBtb250aHNTdWJqZWN0aXZlW2dldE1vbnRoKGRhdGUsIGlzVVRDKV0gKyAnfCcgKyBtb250aHNOb21pbmF0aXZlW2dldE1vbnRoKGRhdGUsIGlzVVRDKV0gKyAnKSc7XG4gICAgfSBlbHNlIGlmICgvRCBNTU1NLy50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHJldHVybiBtb250aHNTdWJqZWN0aXZlW2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtb250aHNOb21pbmF0aXZlW2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfVxuICB9LFxuICBtb250aHNTaG9ydDogJ3N0eV9sdXRfbWFyX2t3aV9tYWpfY3plX2xpcF9zaWVfd3J6X3Bhw4XCul9saXNfZ3J1Jy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5czogJ25pZWR6aWVsYV9wb25pZWR6aWHDhcKCZWtfd3RvcmVrX8OFwptyb2RhX2N6d2FydGVrX3Bpw4TChXRla19zb2JvdGEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICduZHpfcG9uX3d0X8OFwptyX2N6d19wdF9zb2InLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnTmRfUG5fV3Rfw4XCmnJfQ3pfUHRfU28nLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdISDptbScsXG4gICAgTFRTOiAnSEg6bW06c3MnLFxuICAgIEw6ICdERC5NTS5ZWVlZJyxcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSBISDptbScsXG4gICAgTExMTDogJ2RkZGQsIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbRHppw4XCmyBvXSBMVCcsXG4gICAgbmV4dERheTogJ1tKdXRybyBvXSBMVCcsXG4gICAgbmV4dFdlZWsoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcmV0dXJuICdbVyBuaWVkemllbMOEwpkgb10gTFQnO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICByZXR1cm4gJ1tXZSB3dG9yZWsgb10gTFQnO1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICByZXR1cm4gJ1tXIMOFwptyb2TDhMKZIG9dIExUJztcblxuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgcmV0dXJuICdbVyBzb2JvdMOEwpkgb10gTFQnO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICdbV10gZGRkZCBbb10gTFQnO1xuICAgICAgfVxuICAgIH0sXG4gICAgbGFzdERheTogJ1tXY3pvcmFqIG9dIExUJyxcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gJ1tXIHplc3rDhcKCw4TChSBuaWVkemllbMOEwpkgb10gTFQnO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgcmV0dXJuICdbVyB6ZXN6w4XCgsOEwoUgw4XCm3JvZMOEwpkgb10gTFQnO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgcmV0dXJuICdbVyB6ZXN6w4XCgsOEwoUgc29ib3TDhMKZIG9dIExUJztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gJ1tXIHplc3rDhcKCeV0gZGRkZCBbb10gTFQnO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICd6YSAlcycsXG4gICAgcGFzdDogJyVzIHRlbXUnLFxuICAgIHM6ICdraWxrYSBzZWt1bmQnLFxuICAgIHNzOiB0cmFuc2xhdGUsXG4gICAgbTogdHJhbnNsYXRlLFxuICAgIG1tOiB0cmFuc2xhdGUsXG4gICAgaDogdHJhbnNsYXRlLFxuICAgIGhoOiB0cmFuc2xhdGUsXG4gICAgZDogJzEgZHppZcOFwoQnLFxuICAgIGRkOiAnJWQgZG5pJyxcbiAgICBNOiAnbWllc2nDhMKFYycsXG4gICAgTU06IHRyYW5zbGF0ZSxcbiAgICB5OiAncm9rJyxcbiAgICB5eTogdHJhbnNsYXRlXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXG4gIG9yZGluYWw6ICclZC4nLFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogUG9ydHVndWVzZSAoQnJhemlsKSBbcHQtYnJdXG4vLyEgYXV0aG9yIDogQ2FpbyBSaWJlaXJvIFBlcmVpcmEgOiBodHRwczovL2dpdGh1Yi5jb20vY2Fpby1yaWJlaXJvLXBlcmVpcmFcblxuZXhwb3J0IGNvbnN0IHB0QnJMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdwdC1icicsXG4gIG1vbnRoczogJ0phbmVpcm9fRmV2ZXJlaXJvX01hcsODwqdvX0FicmlsX01haW9fSnVuaG9fSnVsaG9fQWdvc3RvX1NldGVtYnJvX091dHVicm9fTm92ZW1icm9fRGV6ZW1icm8nLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnSmFuX0Zldl9NYXJfQWJyX01haV9KdW5fSnVsX0Fnb19TZXRfT3V0X05vdl9EZXonLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzOiAnRG9taW5nb19TZWd1bmRhLWZlaXJhX1RlcsODwqdhLWZlaXJhX1F1YXJ0YS1mZWlyYV9RdWludGEtZmVpcmFfU2V4dGEtZmVpcmFfU8ODwqFiYWRvJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnRG9tX1NlZ19UZXJfUXVhX1F1aV9TZXhfU8ODwqFiJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ0RvXzLDgsKqXzPDgsKqXzTDgsKqXzXDgsKqXzbDgsKqX1PDg8KhJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdISDptbScsXG4gICAgTFRTOiAnSEg6bW06c3MnLFxuICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICBMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWScsXG4gICAgTExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZIFvDg8Kgc10gSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBEIFtkZV0gTU1NTSBbZGVdIFlZWVkgW8ODwqBzXSBISDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW0hvamUgw4PCoHNdIExUJyxcbiAgICBuZXh0RGF5OiAnW0FtYW5ow4PCoyDDg8Kgc10gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCBbw4PCoHNdIExUJyxcbiAgICBsYXN0RGF5OiAnW09udGVtIMODwqBzXSBMVCcsXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuIChnZXREYXlPZldlZWsoZGF0ZSkgPT09IDAgfHwgZ2V0RGF5T2ZXZWVrKGRhdGUpID09PSA2KSA/XG4gICAgICAgICdbw4PCmmx0aW1vXSBkZGRkIFvDg8Kgc10gTFQnIDogLy8gU2F0dXJkYXkgKyBTdW5kYXlcbiAgICAgICAgJ1vDg8KabHRpbWFdIGRkZGQgW8ODwqBzXSBMVCc7IC8vIE1vbmRheSAtIEZyaWRheVxuICAgIH0sXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICdlbSAlcycsXG4gICAgcGFzdDogJyVzIGF0csODwqFzJyxcbiAgICBzOiAncG91Y29zIHNlZ3VuZG9zJyxcbiAgICBzczogJyVkIHNlZ3VuZG9zJyxcbiAgICBtOiAndW0gbWludXRvJyxcbiAgICBtbTogJyVkIG1pbnV0b3MnLFxuICAgIGg6ICd1bWEgaG9yYScsXG4gICAgaGg6ICclZCBob3JhcycsXG4gICAgZDogJ3VtIGRpYScsXG4gICAgZGQ6ICclZCBkaWFzJyxcbiAgICBNOiAndW0gbcODwqpzJyxcbiAgICBNTTogJyVkIG1lc2VzJyxcbiAgICB5OiAndW0gYW5vJyxcbiAgICB5eTogJyVkIGFub3MnXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfcOCwrovLFxuICBvcmRpbmFsOiAnJWTDgsK6J1xufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0V2VlayB9IGZyb20gJy4uL3VuaXRzL3dlZWsnO1xuaW1wb3J0IHsgZ2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogUnVzc2lhbiBbcnVdXG4vLyEgYXV0aG9yIDogVmlrdG9ybWluYXRvciA6IGh0dHBzOi8vZ2l0aHViLmNvbS9WaWt0b3JtaW5hdG9yXG4vLyEgQXV0aG9yIDogTWVuZWxpb24gRWxlbnPDg8K6bGUgOiBodHRwczovL2dpdGh1Yi5jb20vT2lyZVxuLy8hIGF1dGhvciA6IMOQwprDkMK+w5HCgMOQwrXDkMK9w5DCscOQwrXDkcKAw5DCsyDDkMKcw5DCsMORwoDDkMK6IDogaHR0cHM6Ly9naXRodWIuY29tL3NvY2tldHBhaXJcblxuZnVuY3Rpb24gcGx1cmFsKHdvcmQ6IHN0cmluZywgbnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICBsZXQgZm9ybXMgPSB3b3JkLnNwbGl0KCdfJyk7XG4gIHJldHVybiBudW0gJSAxMCA9PT0gMSAmJiBudW0gJSAxMDAgIT09IDExID8gZm9ybXNbMF0gOiAobnVtICUgMTAgPj0gMiAmJiBudW0gJSAxMCA8PSA0ICYmIChudW0gJSAxMDAgPCAxMCB8fCBudW0gJSAxMDAgPj0gMjApID8gZm9ybXNbMV0gOiBmb3Jtc1syXSk7XG59XG5cbmZ1bmN0aW9uIHJlbGF0aXZlVGltZVdpdGhQbHVyYWwobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IGZvcm1hdDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XG4gICAgc3M6IHdpdGhvdXRTdWZmaXggPyAnw5HCgcOQwrXDkMK6w5HCg8OQwr3DkMK0w5DCsF/DkcKBw5DCtcOQwrrDkcKDw5DCvcOQwrTDkcKLX8ORwoHDkMK1w5DCusORwoPDkMK9w5DCtCcgOiAnw5HCgcOQwrXDkMK6w5HCg8OQwr3DkMK0w5HCg1/DkcKBw5DCtcOQwrrDkcKDw5DCvcOQwrTDkcKLX8ORwoHDkMK1w5DCusORwoPDkMK9w5DCtCcsXG4gICAgbW06IHdpdGhvdXRTdWZmaXggPyAnw5DCvMOQwrjDkMK9w5HCg8ORwoLDkMKwX8OQwrzDkMK4w5DCvcORwoPDkcKCw5HCi1/DkMK8w5DCuMOQwr3DkcKDw5HCgicgOiAnw5DCvMOQwrjDkMK9w5HCg8ORwoLDkcKDX8OQwrzDkMK4w5DCvcORwoPDkcKCw5HCi1/DkMK8w5DCuMOQwr3DkcKDw5HCgicsXG4gICAgaGg6ICfDkcKHw5DCsMORwoFfw5HCh8OQwrDDkcKBw5DCsF/DkcKHw5DCsMORwoHDkMK+w5DCsicsXG4gICAgZGQ6ICfDkMK0w5DCtcOQwr3DkcKMX8OQwrTDkMK9w5HCj1/DkMK0w5DCvcOQwrXDkMK5JyxcbiAgICBNTTogJ8OQwrzDkMK1w5HCgcORwo/DkcKGX8OQwrzDkMK1w5HCgcORwo/DkcKGw5DCsF/DkMK8w5DCtcORwoHDkcKPw5HChsOQwrXDkMKyJyxcbiAgICB5eTogJ8OQwrPDkMK+w5DCtF/DkMKzw5DCvsOQwrTDkMKwX8OQwrvDkMK1w5HCgidcbiAgfTtcbiAgaWYgKGtleSA9PT0gJ20nKSB7XG4gICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAnw5DCvMOQwrjDkMK9w5HCg8ORwoLDkMKwJyA6ICfDkMK8w5DCuMOQwr3DkcKDw5HCgsORwoMnO1xuICB9XG4gIHJldHVybiBudW0gKyAnICcgKyBwbHVyYWwoZm9ybWF0W2tleV0sICtudW0pO1xufVxuXG5sZXQgbW9udGhzUGFyc2UgPSBbL17DkcKPw5DCvcOQwrIvaSwgL17DkcKEw5DCtcOQwrIvaSwgL17DkMK8w5DCsMORwoAvaSwgL17DkMKww5DCv8ORwoAvaSwgL17DkMK8w5DCsFvDkMK5w5HCj10vaSwgL17DkMK4w5HCjsOQwr0vaSwgL17DkMK4w5HCjsOQwrsvaSwgL17DkMKww5DCssOQwrMvaSwgL17DkcKBw5DCtcOQwr0vaSwgL17DkMK+w5DCusORwoIvaSwgL17DkMK9w5DCvsORwo8vaSwgL17DkMK0w5DCtcOQwrovaV07XG5cbi8vIGh0dHA6Ly9uZXcuZ3JhbW90YS5ydS9zcHJhdmthL3J1bGVzLzEzOS1wcm9wIDogw4LCpyAxMDNcbi8vIMOQwqHDkMK+w5DCusORwoDDkMKww5HCicOQwrXDkMK9w5DCuMORwo8gw5DCvMOQwrXDkcKBw5HCj8ORwobDkMK1w5DCsjogaHR0cDovL25ldy5ncmFtb3RhLnJ1L3NwcmF2a2EvYnVyby9zZWFyY2gtYW5zd2VyP3M9MjQyNjM3XG4vLyBDTERSIGRhdGE6ICAgICAgICAgIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvY2xkci9jaGFydHMvMjgvc3VtbWFyeS9ydS5odG1sIzE3NTNcbmV4cG9ydCBjb25zdCBydUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ3J1JyxcbiAgbW9udGhzOiB7XG4gICAgZm9ybWF0OiAnw5HCj8OQwr3DkMKyw5DCsMORwoDDkcKPX8ORwoTDkMK1w5DCssORwoDDkMKww5DCu8ORwo9fw5DCvMOQwrDDkcKAw5HCgsOQwrBfw5DCsMOQwr/DkcKAw5DCtcOQwrvDkcKPX8OQwrzDkMKww5HCj1/DkMK4w5HCjsOQwr3DkcKPX8OQwrjDkcKOw5DCu8ORwo9fw5DCsMOQwrLDkMKzw5HCg8ORwoHDkcKCw5DCsF/DkcKBw5DCtcOQwr3DkcKCw5HCj8OQwrHDkcKAw5HCj1/DkMK+w5DCusORwoLDkcKPw5DCscORwoDDkcKPX8OQwr3DkMK+w5HCj8OQwrHDkcKAw5HCj1/DkMK0w5DCtcOQwrrDkMKww5DCscORwoDDkcKPJy5zcGxpdCgnXycpLFxuICAgIHN0YW5kYWxvbmU6ICfDkcKPw5DCvcOQwrLDkMKww5HCgMORwoxfw5HChMOQwrXDkMKyw5HCgMOQwrDDkMK7w5HCjF/DkMK8w5DCsMORwoDDkcKCX8OQwrDDkMK/w5HCgMOQwrXDkMK7w5HCjF/DkMK8w5DCsMOQwrlfw5DCuMORwo7DkMK9w5HCjF/DkMK4w5HCjsOQwrvDkcKMX8OQwrDDkMKyw5DCs8ORwoPDkcKBw5HCgl/DkcKBw5DCtcOQwr3DkcKCw5HCj8OQwrHDkcKAw5HCjF/DkMK+w5DCusORwoLDkcKPw5DCscORwoDDkcKMX8OQwr3DkMK+w5HCj8OQwrHDkcKAw5HCjF/DkMK0w5DCtcOQwrrDkMKww5DCscORwoDDkcKMJy5zcGxpdCgnXycpXG4gIH0sXG4gIG1vbnRoc1Nob3J0OiB7XG4gICAgLy8gw5DCv8OQwr4gQ0xEUiDDkMK4w5DCvMOQwrXDkMK9w5DCvcOQwr4gXCLDkMK4w5HCjsOQwrsuXCIgw5DCuCBcIsOQwrjDkcKOw5DCvS5cIiwgw5DCvcOQwr4gw5DCusOQwrDDkMK6w5DCvsOQwrkgw5HCgcOQwrzDkcKLw5HCgcOQwrsgw5DCvMOQwrXDkMK9w5HCj8ORwoLDkcKMIMOQwrHDkcKDw5DCusOQwrLDkcKDIMOQwr3DkMKwIMORwoLDkMK+w5HCh8OQwrrDkcKDID9cbiAgICBmb3JtYXQ6ICfDkcKPw5DCvcOQwrIuX8ORwoTDkMK1w5DCssORwoAuX8OQwrzDkMKww5HCgC5fw5DCsMOQwr/DkcKALl/DkMK8w5DCsMORwo9fw5DCuMORwo7DkMK9w5HCj1/DkMK4w5HCjsOQwrvDkcKPX8OQwrDDkMKyw5DCsy5fw5HCgcOQwrXDkMK9w5HCgi5fw5DCvsOQwrrDkcKCLl/DkMK9w5DCvsORwo/DkMKxLl/DkMK0w5DCtcOQwrouJy5zcGxpdCgnXycpLFxuICAgIHN0YW5kYWxvbmU6ICfDkcKPw5DCvcOQwrIuX8ORwoTDkMK1w5DCssORwoAuX8OQwrzDkMKww5HCgMORwoJfw5DCsMOQwr/DkcKALl/DkMK8w5DCsMOQwrlfw5DCuMORwo7DkMK9w5HCjF/DkMK4w5HCjsOQwrvDkcKMX8OQwrDDkMKyw5DCsy5fw5HCgcOQwrXDkMK9w5HCgi5fw5DCvsOQwrrDkcKCLl/DkMK9w5DCvsORwo/DkMKxLl/DkMK0w5DCtcOQwrouJy5zcGxpdCgnXycpXG4gIH0sXG4gIHdlZWtkYXlzOiB7XG4gICAgc3RhbmRhbG9uZTogJ8OQwrLDkMK+w5HCgcOQwrrDkcKAw5DCtcORwoHDkMK1w5DCvcORwozDkMK1X8OQwr/DkMK+w5DCvcOQwrXDkMK0w5DCtcOQwrvDkcKMw5DCvcOQwrjDkMK6X8OQwrLDkcKCw5DCvsORwoDDkMK9w5DCuMOQwrpfw5HCgcORwoDDkMK1w5DCtMOQwrBfw5HCh8OQwrXDkcKCw5DCssOQwrXDkcKAw5DCs1/DkMK/w5HCj8ORwoLDkMK9w5DCuMORwobDkMKwX8ORwoHDkcKDw5DCscOQwrHDkMK+w5HCgsOQwrAnLnNwbGl0KCdfJyksXG4gICAgZm9ybWF0OiAnw5DCssOQwr7DkcKBw5DCusORwoDDkMK1w5HCgcOQwrXDkMK9w5HCjMOQwrVfw5DCv8OQwr7DkMK9w5DCtcOQwrTDkMK1w5DCu8ORwozDkMK9w5DCuMOQwrpfw5DCssORwoLDkMK+w5HCgMOQwr3DkMK4w5DCul/DkcKBw5HCgMOQwrXDkMK0w5HCg1/DkcKHw5DCtcORwoLDkMKyw5DCtcORwoDDkMKzX8OQwr/DkcKPw5HCgsOQwr3DkMK4w5HChsORwoNfw5HCgcORwoPDkMKxw5DCscOQwr7DkcKCw5HCgycuc3BsaXQoJ18nKSxcbiAgICBpc0Zvcm1hdDogL1xcWyA/W8OQwpLDkMKyXSA/KD86w5DCv8ORwoDDkMK+w5HCiMOQwrvDkcKDw5HCjnzDkcKBw5DCu8OQwrXDkMK0w5HCg8ORwo7DkcKJw5HCg8ORwo58w5HCjcORwoLDkcKDKT8gP1xcXSA/ZGRkZC9cbiAgfSxcbiAgd2Vla2RheXNTaG9ydDogJ8OQwrLDkcKBX8OQwr/DkMK9X8OQwrLDkcKCX8ORwoHDkcKAX8ORwofDkcKCX8OQwr/DkcKCX8ORwoHDkMKxJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ8OQwrLDkcKBX8OQwr/DkMK9X8OQwrLDkcKCX8ORwoHDkcKAX8ORwofDkcKCX8OQwr/DkcKCX8ORwoHDkMKxJy5zcGxpdCgnXycpLFxuICBtb250aHNQYXJzZSxcbiAgbG9uZ01vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcbiAgc2hvcnRNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXG5cbiAgLy8gw5DCv8OQwr7DkMK7w5DCvcORwovDkMK1IMOQwr3DkMKww5DCt8OQwrLDkMKww5DCvcOQwrjDkcKPIMORwoEgw5DCv8OQwrDDkMK0w5DCtcOQwrbDkMKww5DCvMOQwrgsIMOQwr/DkMK+IMORwoLDkcKAw5DCuCDDkMKxw5HCg8OQwrrDkMKyw5HCiywgw5DCtMOQwrvDkcKPIMOQwr3DkMK1w5DCusOQwr7DkcKCw5DCvsORwoDDkcKLw5HChSwgw5DCv8OQwr4gNCDDkMKxw5HCg8OQwrrDkMKyw5HCiywgw5HCgcOQwr7DkMK6w5HCgMOQwrDDkcKJw5DCtcOQwr3DkMK4w5HCjyDDkcKBIMORwoLDkMK+w5HCh8OQwrrDkMK+w5DCuSDDkMK4IMOQwrHDkMK1w5DCtyDDkcKCw5DCvsORwofDkMK6w5DCuFxuICBtb250aHNSZWdleDogL14ow5HCj8OQwr3DkMKyw5DCsMORwoBbw5HCjMORwo9dfMORwo/DkMK9w5DCslxcLj98w5HChMOQwrXDkMKyw5HCgMOQwrDDkMK7W8ORwozDkcKPXXzDkcKEw5DCtcOQwrLDkcKAP1xcLj98w5DCvMOQwrDDkcKAw5HCgsOQwrA/fMOQwrzDkMKww5HCgFxcLj98w5DCsMOQwr/DkcKAw5DCtcOQwrtbw5HCjMORwo9dfMOQwrDDkMK/w5HCgFxcLj98w5DCvMOQwrBbw5DCucORwo9dfMOQwrjDkcKOw5DCvVvDkcKMw5HCj118w5DCuMORwo7DkMK9XFwuP3zDkMK4w5HCjsOQwrtbw5HCjMORwo9dfMOQwrjDkcKOw5DCu1xcLj98w5DCsMOQwrLDkMKzw5HCg8ORwoHDkcKCw5DCsD98w5DCsMOQwrLDkMKzXFwuP3zDkcKBw5DCtcOQwr3DkcKCw5HCj8OQwrHDkcKAW8ORwozDkcKPXXzDkcKBw5DCtcOQwr3DkcKCP1xcLj98w5DCvsOQwrrDkcKCw5HCj8OQwrHDkcKAW8ORwozDkcKPXXzDkMK+w5DCusORwoJcXC4/fMOQwr3DkMK+w5HCj8OQwrHDkcKAW8ORwozDkcKPXXzDkMK9w5DCvsORwo/DkMKxP1xcLj98w5DCtMOQwrXDkMK6w5DCsMOQwrHDkcKAW8ORwozDkcKPXXzDkMK0w5DCtcOQwrpcXC4/KS9pLFxuXG4gIC8vIMOQwrrDkMK+w5DCv8OQwrjDkcKPIMOQwr/DkcKAw5DCtcOQwrTDkcKLw5DCtMORwoPDkcKJw5DCtcOQwrPDkMK+XG4gIG1vbnRoc1Nob3J0UmVnZXg6IC9eKMORwo/DkMK9w5DCssOQwrDDkcKAW8ORwozDkcKPXXzDkcKPw5DCvcOQwrJcXC4/fMORwoTDkMK1w5DCssORwoDDkMKww5DCu1vDkcKMw5HCj118w5HChMOQwrXDkMKyw5HCgD9cXC4/fMOQwrzDkMKww5HCgMORwoLDkMKwP3zDkMK8w5DCsMORwoBcXC4/fMOQwrDDkMK/w5HCgMOQwrXDkMK7W8ORwozDkcKPXXzDkMKww5DCv8ORwoBcXC4/fMOQwrzDkMKwW8OQwrnDkcKPXXzDkMK4w5HCjsOQwr1bw5HCjMORwo9dfMOQwrjDkcKOw5DCvVxcLj98w5DCuMORwo7DkMK7W8ORwozDkcKPXXzDkMK4w5HCjsOQwrtcXC4/fMOQwrDDkMKyw5DCs8ORwoPDkcKBw5HCgsOQwrA/fMOQwrDDkMKyw5DCs1xcLj98w5HCgcOQwrXDkMK9w5HCgsORwo/DkMKxw5HCgFvDkcKMw5HCj118w5HCgcOQwrXDkMK9w5HCgj9cXC4/fMOQwr7DkMK6w5HCgsORwo/DkMKxw5HCgFvDkcKMw5HCj118w5DCvsOQwrrDkcKCXFwuP3zDkMK9w5DCvsORwo/DkMKxw5HCgFvDkcKMw5HCj118w5DCvcOQwr7DkcKPw5DCsT9cXC4/fMOQwrTDkMK1w5DCusOQwrDDkMKxw5HCgFvDkcKMw5HCj118w5DCtMOQwrXDkMK6XFwuPykvaSxcblxuICAvLyDDkMK/w5DCvsOQwrvDkMK9w5HCi8OQwrUgw5DCvcOQwrDDkMK3w5DCssOQwrDDkMK9w5DCuMORwo8gw5HCgSDDkMK/w5DCsMOQwrTDkMK1w5DCtsOQwrDDkMK8w5DCuFxuICBtb250aHNTdHJpY3RSZWdleDogL14ow5HCj8OQwr3DkMKyw5DCsMORwoBbw5HCj8ORwoxdfMORwoTDkMK1w5DCssORwoDDkMKww5DCu1vDkcKPw5HCjF18w5DCvMOQwrDDkcKAw5HCgsOQwrA/fMOQwrDDkMK/w5HCgMOQwrXDkMK7W8ORwo/DkcKMXXzDkMK8w5DCsFvDkcKPw5DCuV18w5DCuMORwo7DkMK9W8ORwo/DkcKMXXzDkMK4w5HCjsOQwrtbw5HCj8ORwoxdfMOQwrDDkMKyw5DCs8ORwoPDkcKBw5HCgsOQwrA/fMORwoHDkMK1w5DCvcORwoLDkcKPw5DCscORwoBbw5HCj8ORwoxdfMOQwr7DkMK6w5HCgsORwo/DkMKxw5HCgFvDkcKPw5HCjF18w5DCvcOQwr7DkcKPw5DCscORwoBbw5HCj8ORwoxdfMOQwrTDkMK1w5DCusOQwrDDkMKxw5HCgFvDkcKPw5HCjF0pL2ksXG5cbiAgLy8gw5DCksORwovDkcKAw5DCsMOQwrbDkMK1w5DCvcOQwrjDkMK1LCDDkMK6w5DCvsORwoLDkMK+w5HCgMOQwr7DkMK1IMORwoHDkMK+w5DCvsORwoLDkMKyw5DCtcORwoHDkcKCw5DCssORwoPDkMK1w5HCgiDDkcKCw5DCvsOQwrvDkcKMw5DCusOQwr4gw5HCgcOQwr7DkMK6w5HCgMOQwrDDkcKJw5HCkcOQwr3DkMK9w5HCi8OQwrwgw5HChMOQwr7DkcKAw5DCvMOQwrDDkMK8XG4gIG1vbnRoc1Nob3J0U3RyaWN0UmVnZXg6IC9eKMORwo/DkMK9w5DCslxcLnzDkcKEw5DCtcOQwrLDkcKAP1xcLnzDkMK8w5DCsMORwoBbw5HCgi5dfMOQwrDDkMK/w5HCgFxcLnzDkMK8w5DCsFvDkcKPw5DCuV18w5DCuMORwo7DkMK9W8ORwozDkcKPLl18w5DCuMORwo7DkMK7W8ORwozDkcKPLl18w5DCsMOQwrLDkMKzXFwufMORwoHDkMK1w5DCvcORwoI/XFwufMOQwr7DkMK6w5HCglxcLnzDkMK9w5DCvsORwo/DkMKxP1xcLnzDkMK0w5DCtcOQwrpcXC4pL2ksXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdIOm1tJyxcbiAgICBMVFM6ICdIOm1tOnNzJyxcbiAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgTEw6ICdEIE1NTU0gWVlZWSDDkMKzLicsXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgw5DCsy4sIEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSDDkMKzLiwgSDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW8OQwqHDkMK1w5DCs8OQwr7DkMK0w5DCvcORwo8gw5DCsl0gTFQnLFxuICAgIG5leHREYXk6ICdbw5DCl8OQwrDDkMKyw5HCgsORwoDDkMKwIMOQwrJdIExUJyxcbiAgICBsYXN0RGF5OiAnW8OQwpLDkcKHw5DCtcORwoDDkMKwIMOQwrJdIExUJyxcbiAgICBuZXh0V2VlayhkYXRlOiBEYXRlLCBub3c6IERhdGUpIHtcbiAgICAgIGlmIChnZXRXZWVrKG5vdykgIT09IGdldFdlZWsoZGF0ZSkpIHtcbiAgICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gJ1vDkMKSIMORwoHDkMK7w5DCtcOQwrTDkcKDw5HCjsORwonDkMK1w5DCtV0gZGRkZCBbw5DCsl0gTFQnO1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgcmV0dXJuICdbw5DCkiDDkcKBw5DCu8OQwrXDkMK0w5HCg8ORwo7DkcKJw5DCuMOQwrldIGRkZGQgW8OQwrJdIExUJztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIHJldHVybiAnW8OQwpIgw5HCgcOQwrvDkMK1w5DCtMORwoPDkcKOw5HCicORwoPDkcKOXSBkZGRkIFvDkMKyXSBMVCc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChnZXREYXlPZldlZWsoZGF0ZSkgPT09IDIpIHtcbiAgICAgICAgICByZXR1cm4gJ1vDkMKSw5DCvl0gZGRkZCBbw5DCsl0gTFQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnW8OQwpJdIGRkZGQgW8OQwrJdIExUJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSwgbm93OiBEYXRlKSB7XG4gICAgICBpZiAoZ2V0V2Vlayhub3cpICE9PSBnZXRXZWVrKGRhdGUpKSB7XG4gICAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuICdbw5DCkiDDkMK/w5HCgMOQwr7DkcKIw5DCu8OQwr7DkMK1XSBkZGRkIFvDkMKyXSBMVCc7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICByZXR1cm4gJ1vDkMKSIMOQwr/DkcKAw5DCvsORwojDkMK7w5HCi8OQwrldIGRkZGQgW8OQwrJdIExUJztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIHJldHVybiAnW8OQwpIgw5DCv8ORwoDDkMK+w5HCiMOQwrvDkcKDw5HCjl0gZGRkZCBbw5DCsl0gTFQnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZ2V0RGF5T2ZXZWVrKGRhdGUpID09PSAyKSB7XG4gICAgICAgICAgcmV0dXJuICdbw5DCksOQwr5dIGRkZGQgW8OQwrJdIExUJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gJ1vDkMKSXSBkZGRkIFvDkMKyXSBMVCc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnw5HCh8OQwrXDkcKAw5DCtcOQwrcgJXMnLFxuICAgIHBhc3Q6ICclcyDDkMK9w5DCsMOQwrfDkMKww5DCtCcsXG4gICAgczogJ8OQwr3DkMK1w5HCgcOQwrrDkMK+w5DCu8ORwozDkMK6w5DCviDDkcKBw5DCtcOQwrrDkcKDw5DCvcOQwrQnLFxuICAgIHNzOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgIG06IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgbW06IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgaDogJ8ORwofDkMKww5HCgScsXG4gICAgaGg6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgZDogJ8OQwrTDkMK1w5DCvcORwownLFxuICAgIGRkOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgIE06ICfDkMK8w5DCtcORwoHDkcKPw5HChicsXG4gICAgTU06IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgeTogJ8OQwrPDkMK+w5DCtCcsXG4gICAgeXk6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWxcbiAgfSxcbiAgbWVyaWRpZW1QYXJzZTogL8OQwr3DkMK+w5HCh8OQwrh8w5HCg8ORwoLDkcKAw5DCsHzDkMK0w5DCvcORwo98w5DCssOQwrXDkcKHw5DCtcORwoDDkMKwL2ksXG4gIGlzUE0oaW5wdXQpIHtcbiAgICByZXR1cm4gL14ow5DCtMOQwr3DkcKPfMOQwrLDkMK1w5HCh8OQwrXDkcKAw5DCsCkkLy50ZXN0KGlucHV0KTtcbiAgfSxcbiAgbWVyaWRpZW0oaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgaWYgKGhvdXIgPCA0KSB7XG4gICAgICByZXR1cm4gJ8OQwr3DkMK+w5HCh8OQwrgnO1xuICAgIH0gZWxzZSBpZiAoaG91ciA8IDEyKSB7XG4gICAgICByZXR1cm4gJ8ORwoPDkcKCw5HCgMOQwrAnO1xuICAgIH0gZWxzZSBpZiAoaG91ciA8IDE3KSB7XG4gICAgICByZXR1cm4gJ8OQwrTDkMK9w5HCjyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnw5DCssOQwrXDkcKHw5DCtcORwoDDkMKwJztcbiAgICB9XG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfS0ow5DCuXzDkMKzw5DCvnzDkcKPKS8sXG4gIG9yZGluYWwoX251bTogbnVtYmVyLCBwZXJpb2Q6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xuICAgIHN3aXRjaCAocGVyaW9kKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ2QnOlxuICAgICAgY2FzZSAnREREJzpcbiAgICAgICAgcmV0dXJuIG51bSArICctw5DCuSc7XG4gICAgICBjYXNlICdEJzpcbiAgICAgICAgcmV0dXJuIG51bSArICctw5DCs8OQwr4nO1xuICAgICAgY2FzZSAndyc6XG4gICAgICBjYXNlICdXJzpcbiAgICAgICAgcmV0dXJuIG51bSArICctw5HCjyc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gIH0sXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyAhIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8gISBsb2NhbGUgOiBSb21hbmlhbiBbcm9dXG4vLyEgYXV0aG9yIDogVmxhZCBHdXJkaWdhIDogaHR0cHM6Ly9naXRodWIuY29tL2d1cmRpZ2Fcbi8vISBhdXRob3IgOiBWYWxlbnRpbiBBZ2FjaGkgOiBodHRwczovL2dpdGh1Yi5jb20vYXZhbHlcbi8vICEgYXV0aG9yIDogRWFybGUgd2hpdGU6IGh0dHBzOi8vZ2l0aHViLmNvbS81ZWFybGVcblxuZnVuY3Rpb24gcmVsYXRpdmVUaW1lV2l0aFBsdXJhbChudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICBsZXQgZm9ybWF0OiB7W2tleTpzdHJpbmddOiBzdHJpbmd9ID0ge1xuICAgIHNzOiAnc2VjdW5kZScsXG4gICAgbW06ICdtaW51dGUnLFxuICAgIGhoOiAnb3JlJyxcbiAgICBkZDogJ3ppbGUnLFxuICAgIE1NOiAnbHVuaScsXG4gICAgeXk6ICdhbmknXG4gIH07XG5cbiAgbGV0IHNlcGFyYXRvciA9ICcgJztcbiAgaWYgKG51bSAlIDEwMCA+PSAyMCB8fCAobnVtID49IDEwMCAmJiBudW0gJSAxMDAgPT09IDApKSB7XG4gICAgc2VwYXJhdG9yID0gJyBkZSAnO1xuICB9XG4gIHJldHVybiBudW0gKyBzZXBhcmF0b3IgKyBmb3JtYXRba2V5XTtcbn1cblxuXG5leHBvcnQgY29uc3Qgcm9Mb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdybycsXG4gIG1vbnRoczogJ2lhbnVhcmllX2ZlYnJ1YXJpZV9tYXJ0aWVfYXByaWxpZV9tYWlfaXVuaWVfaXVsaWVfYXVndXN0X3NlcHRlbWJyaWVfb2N0b21icmllX25vaWVtYnJpZV9kZWNlbWJyaWUnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnaWFuLl9mZWJyLl9tYXJ0Ll9hcHIuX21haV9pdW4uX2l1bC5fYXVnLl9zZXB0Ll9vY3QuX25vdi5fZGVjLicuc3BsaXQoJ18nKSxcbiAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgd2Vla2RheXM6ICdkdW1pbmljw4TCg19sdW5pX21hcsOIwptpX21pZXJjdXJpX2pvaV92aW5lcmlfc8ODwqJtYsOEwoN0w4TCgycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ0R1bV9MdW5fTWFyX01pZV9Kb2lfVmluX1PDg8KibScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdEdV9MdV9NYV9NaV9Kb19WaV9Tw4PCoicuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0g6bW0nLFxuICAgIExUUzogJ0g6bW06c3MnLFxuICAgIEw6ICdERC5NTS5ZWVlZJyxcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSBIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRCBNTU1NIFlZWVkgSDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW2F6aSBsYV0gTFQnLFxuICAgIG5leHREYXk6ICdbbcODwqJpbmUgbGFdIExUJyxcbiAgICBuZXh0V2VlazogJ2RkZGQgW2xhXSBMVCcsXG4gICAgbGFzdERheTogJ1tpZXJpIGxhXSBMVCcsXG4gICAgbGFzdFdlZWs6ICdbZm9zdGFdIGRkZGQgW2xhXSBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICdwZXN0ZSAlcycsXG4gICAgcGFzdDogJyVzIMODwq5uIHVybcOEwoMnLFxuICAgIHM6ICdjw4PConRldmEgc2VjdW5kZScsXG4gICAgc3M6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgbTogJ3VuIG1pbnV0JyxcbiAgICBtbTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICBoOiAnbyBvcsOEwoMnLFxuICAgIGhoOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgIGQ6ICdvIHppJyxcbiAgICBkZDogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICBNOiAnbyBsdW7DhMKDJyxcbiAgICBNTTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICB5OiAndW4gYW4nLFxuICAgIHl5OiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsXG4gIH0sXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNyAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBTbG92YWsgW3NrXVxuLy8hIGF1dGhvciA6IEpvemVmIFBhw4XCvmluIDogaHR0cHM6Ly9naXRodWIuY29tL2F0aXJpc1xuXG5jb25zdCBtb250aHMgPSAnamFudcODwqFyX2ZlYnJ1w4PCoXJfbWFyZWNfYXByw4PCrWxfbcODwqFqX2rDg8K6bl9qw4PCumxfYXVndXN0X3NlcHRlbWJlcl9va3TDg8KzYmVyX25vdmVtYmVyX2RlY2VtYmVyJy5zcGxpdCgnXycpO1xuY29uc3QgbW9udGhzU2hvcnQgPSAnamFuX2ZlYl9tYXJfYXByX23Dg8Khal9qw4PCum5fasODwrpsX2F1Z19zZXBfb2t0X25vdl9kZWMnLnNwbGl0KCdfJyk7XG5cbmZ1bmN0aW9uIHBsdXJhbChudW06IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gKG51bSA+IDEpICYmIChudW0gPCA1KSAmJiAofn4obnVtIC8gMTApICE9PSAxKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pOiBzdHJpbmcge1xuICBjb25zdCByZXN1bHQgPSBudW0gKyAnICc7XG5cbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlICdzJzovLyBhIGZldyBzZWNvbmRzIC8gaW4gYSBmZXcgc2Vjb25kcyAvIGEgZmV3IHNlY29uZHMgYWdvXG4gICAgICByZXR1cm4gKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpID8gJ3DDg8KhciBzZWvDg8K6bmQnIDogJ3DDg8KhciBzZWt1bmRhbWknO1xuICAgIGNhc2UgJ3NzJzovLyA5IHNlY29uZHMgLyBpbiA5IHNlY29uZHMgLyA5IHNlY29uZHMgYWdvXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ3Nla3VuZHknIDogJ3Nla8ODwrpuZCcpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnc2VrdW5kYW1pJztcbiAgICAgIH1cbiAgICAvLyBicmVhaztcbiAgICBjYXNlICdtJzovLyBhIG1pbnV0ZSAvIGluIGEgbWludXRlIC8gYSBtaW51dGUgYWdvXG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICdtaW7Dg8K6dGEnIDogKGlzRnV0dXJlID8gJ21pbsODwrp0dScgOiAnbWluw4PCunRvdScpO1xuICAgIGNhc2UgJ21tJzovLyA5IG1pbnV0ZXMgLyBpbiA5IG1pbnV0ZXMgLyA5IG1pbnV0ZXMgYWdvXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ21pbsODwrp0eScgOiAnbWluw4PCunQnKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ21pbsODwrp0YW1pJztcbiAgICAgIH1cbiAgICAvLyBicmVhaztcbiAgICBjYXNlICdoJzovLyBhbiBob3VyIC8gaW4gYW4gaG91ciAvIGFuIGhvdXIgYWdvXG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICdob2RpbmEnIDogKGlzRnV0dXJlID8gJ2hvZGludScgOiAnaG9kaW5vdScpO1xuICAgIGNhc2UgJ2hoJzovLyA5IGhvdXJzIC8gaW4gOSBob3VycyAvIDkgaG91cnMgYWdvXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ2hvZGlueScgOiAnaG9kw4PCrW4nKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ2hvZGluYW1pJztcbiAgICAgIH1cbiAgICAvLyBicmVhaztcbiAgICBjYXNlICdkJzovLyBhIGRheSAvIGluIGEgZGF5IC8gYSBkYXkgYWdvXG4gICAgICByZXR1cm4gKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpID8gJ2Rlw4XCiCcgOiAnZMOFwohvbSc7XG4gICAgY2FzZSAnZGQnOi8vIDkgZGF5cyAvIGluIDkgZGF5cyAvIDkgZGF5cyBhZ29cbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnZG5pJyA6ICdkbsODwq0nKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ2TDhcKIYW1pJztcbiAgICAgIH1cbiAgICAvLyBicmVhaztcbiAgICBjYXNlICdNJzovLyBhIG1vbnRoIC8gaW4gYSBtb250aCAvIGEgbW9udGggYWdvXG4gICAgICByZXR1cm4gKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpID8gJ21lc2lhYycgOiAnbWVzaWFjb20nO1xuICAgIGNhc2UgJ01NJzovLyA5IG1vbnRocyAvIGluIDkgbW9udGhzIC8gOSBtb250aHMgYWdvXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ21lc2lhY2UnIDogJ21lc2lhY292Jyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdtZXNpYWNtaSc7XG4gICAgICB9XG4gICAgLy8gYnJlYWs7XG4gICAgY2FzZSAneSc6Ly8gYSB5ZWFyIC8gaW4gYSB5ZWFyIC8gYSB5ZWFyIGFnb1xuICAgICAgcmV0dXJuICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSA/ICdyb2snIDogJ3Jva29tJztcbiAgICBjYXNlICd5eSc6Ly8gOSB5ZWFycyAvIGluIDkgeWVhcnMgLyA5IHllYXJzIGFnb1xuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdyb2t5JyA6ICdyb2tvdicpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAncm9rbWknO1xuICAgICAgfVxuICAgIC8vIGJyZWFrO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBza0xvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ3NrJyxcbiAgbW9udGhzLFxuICBtb250aHNTaG9ydCxcbiAgd2Vla2RheXM6ICduZWRlw4TCvmFfcG9uZGVsb2tfdXRvcm9rX3N0cmVkYV/DhcKhdHZydG9rX3BpYXRva19zb2JvdGEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICduZV9wb191dF9zdF/DhcKhdF9waV9zbycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICduZV9wb191dF9zdF/DhcKhdF9waV9zbycuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0g6bW0nLFxuICAgIExUUzogJ0g6bW06c3MnLFxuICAgIEw6ICdERC5NTS5ZWVlZJyxcbiAgICBMTDogJ0QuIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRC4gTU1NTSBZWVlZIEg6bW0nLFxuICAgIExMTEw6ICdkZGRkIEQuIE1NTU0gWVlZWSBIOm1tJyxcbiAgICBsOiAnRC4gTS4gWVlZWSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW2RuZXMgb10gTFQnLFxuICAgIG5leHREYXk6ICdbemFqdHJhIG9dIExUJyxcbiAgICBuZXh0V2VlayhkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gJ1t2IG5lZGXDhMK+dSBvXSBMVCc7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHJldHVybiAnW3ZdIGRkZGQgW29dIExUJztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiAnW3Ygc3RyZWR1IG9dIExUJztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHJldHVybiAnW3ZvIMOFwqF0dnJ0b2sgb10gTFQnO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgcmV0dXJuICdbdiBwaWF0b2sgb10gTFQnO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgcmV0dXJuICdbdiBzb2JvdHUgb10gTFQnO1xuICAgICAgfVxuICAgIH0sXG4gICAgbGFzdERheTogJ1t2w4TCjWVyYSBvXSBMVCcsXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcmV0dXJuICdbbWludWzDg8K6IG5lZGXDhMK+dSBvXSBMVCc7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHJldHVybiAnW21pbnVsw4PCvV0gZGRkZCBbb10gTFQnO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgcmV0dXJuICdbbWludWzDg8K6IHN0cmVkdSBvXSBMVCc7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHJldHVybiAnW21pbnVsw4PCvV0gZGRkZCBbb10gTFQnO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgcmV0dXJuICdbbWludWzDg8K6IHNvYm90dSBvXSBMVCc7XG4gICAgICB9XG4gICAgfSxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ28gJXMnLFxuICAgIHBhc3Q6ICdwcmVkICVzJyxcbiAgICBzOiB0cmFuc2xhdGUsXG4gICAgc3M6IHRyYW5zbGF0ZSxcbiAgICBtOiB0cmFuc2xhdGUsXG4gICAgbW06IHRyYW5zbGF0ZSxcbiAgICBoOiB0cmFuc2xhdGUsXG4gICAgaGg6IHRyYW5zbGF0ZSxcbiAgICBkOiB0cmFuc2xhdGUsXG4gICAgZGQ6IHRyYW5zbGF0ZSxcbiAgICBNOiB0cmFuc2xhdGUsXG4gICAgTU06IHRyYW5zbGF0ZSxcbiAgICB5OiB0cmFuc2xhdGUsXG4gICAgeXk6IHRyYW5zbGF0ZVxuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxuICBvcmRpbmFsOiAnJWQuJyxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG5cbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cbi8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLWtleS1xdW90ZXNcblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogU2xvdmVuaWFuIFtzbF1cbi8vISBhdXRob3IgOiBtaWhhbiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9taWhhblxuXG5mdW5jdGlvbiBwcm9jZXNzUmVsYXRpdmVUaW1lKG51bWJlcjogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pOiBzdHJpbmcge1xuICB2YXIgcmVzdWx0ID0gbnVtYmVyICsgJyAnO1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbmVrYWogc2VrdW5kJyA6ICduZWthaiBzZWt1bmRhbWknO1xuICAgIGNhc2UgJ3NzJzpcbiAgICAgIGlmIChudW1iZXIgPT09IDEpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggPyAnc2VrdW5kbycgOiAnc2VrdW5kaSc7XG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA9PT0gMikge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdzZWt1bmRpJyA6ICdzZWt1bmRhaCc7XG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA8IDUpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnc2VrdW5kZScgOiAnc2VrdW5kYWgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnc2VrdW5kJyA6ICdzZWt1bmQnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ2VuYSBtaW51dGEnIDogJ2VubyBtaW51dG8nO1xuICAgIGNhc2UgJ21tJzpcbiAgICAgIGlmIChudW1iZXIgPT09IDEpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggPyAnbWludXRhJyA6ICdtaW51dG8nO1xuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPT09IDIpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbWludXRpJyA6ICdtaW51dGFtYSc7XG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA8IDUpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbWludXRlJyA6ICdtaW51dGFtaSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdtaW51dCcgOiAnbWludXRhbWknO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ2VuYSB1cmEnIDogJ2VubyB1cm8nO1xuICAgIGNhc2UgJ2hoJzpcbiAgICAgIGlmIChudW1iZXIgPT09IDEpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggPyAndXJhJyA6ICd1cm8nO1xuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPT09IDIpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAndXJpJyA6ICd1cmFtYSc7XG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA8IDUpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAndXJlJyA6ICd1cmFtaSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICd1cicgOiAndXJhbWknO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2VuIGRhbicgOiAnZW5pbSBkbmVtJztcbiAgICBjYXNlICdkZCc6XG4gICAgICBpZiAobnVtYmVyID09PSAxKSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2RhbicgOiAnZG5lbSc7XG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA9PT0gMikge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdkbmknIDogJ2RuZXZvbWEnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnZG5pJyA6ICdkbmV2aSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIGNhc2UgJ00nOlxuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnZW4gbWVzZWMnIDogJ2VuaW0gbWVzZWNlbSc7XG4gICAgY2FzZSAnTU0nOlxuICAgICAgaWYgKG51bWJlciA9PT0gMSkge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdtZXNlYycgOiAnbWVzZWNlbSc7XG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA9PT0gMikge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdtZXNlY2EnIDogJ21lc2VjZW1hJztcbiAgICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgNSkge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdtZXNlY2UnIDogJ21lc2VjaSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdtZXNlY2V2JyA6ICdtZXNlY2knO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2VubyBsZXRvJyA6ICdlbmltIGxldG9tJztcbiAgICBjYXNlICd5eSc6XG4gICAgICBpZiAobnVtYmVyID09PSAxKSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2xldG8nIDogJ2xldG9tJztcbiAgICAgIH0gZWxzZSBpZiAobnVtYmVyID09PSAyKSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2xldGknIDogJ2xldG9tYSc7XG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA8IDUpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbGV0YScgOiAnbGV0aSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdsZXQnIDogJ2xldGknO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2xMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdzbCcsXG4gIG1vbnRoczogJ2phbnVhcl9mZWJydWFyX21hcmVjX2FwcmlsX21hal9qdW5pal9qdWxpal9hdmd1c3Rfc2VwdGVtYmVyX29rdG9iZXJfbm92ZW1iZXJfZGVjZW1iZXInLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnamFuLl9mZWIuX21hci5fYXByLl9tYWouX2p1bi5fanVsLl9hdmcuX3NlcC5fb2t0Ll9ub3YuX2RlYy4nLnNwbGl0KCdfJyksXG4gIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXG4gIHdlZWtkYXlzOiAnbmVkZWxqYV9wb25lZGVsamVrX3RvcmVrX3NyZWRhX8OEwo1ldHJ0ZWtfcGV0ZWtfc29ib3RhJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnbmVkLl9wb24uX3Rvci5fc3JlLl/DhMKNZXQuX3BldC5fc29iLicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICduZV9wb190b19zcl/DhMKNZV9wZV9zbycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSDptbScsXG4gICAgTFRTOiAnSDptbTpzcycsXG4gICAgTDogJ0RELk1NLllZWVknLFxuICAgIExMOiAnRC4gTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdELiBNTU1NIFlZWVkgSDptbScsXG4gICAgTExMTDogJ2RkZGQsIEQuIE1NTU0gWVlZWSBIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbZGFuZXMgb2JdIExUJyxcbiAgICBuZXh0RGF5OiAnW2p1dHJpIG9iXSBMVCcsXG5cbiAgICBuZXh0V2VlayhkYXRlOiBEYXRlKSB7XG4gICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcmV0dXJuICdbdl0gW25lZGVsam9dIFtvYl0gTFQnO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgcmV0dXJuICdbdl0gW3NyZWRvXSBbb2JdIExUJztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIHJldHVybiAnW3ZdIFtzb2JvdG9dIFtvYl0gTFQnO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgcmV0dXJuICdbdl0gZGRkZCBbb2JdIExUJztcbiAgICAgIH1cbiAgICB9LFxuICAgIGxhc3REYXk6ICdbdsOEwo1lcmFqIG9iXSBMVCcsXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSkge1xuICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHJldHVybiAnW3ByZWrDhcKhbmpvXSBbbmVkZWxqb10gW29iXSBMVCc7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICByZXR1cm4gJ1twcmVqw4XCoW5qb10gW3NyZWRvXSBbb2JdIExUJztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIHJldHVybiAnW3ByZWrDhcKhbmpvXSBbc29ib3RvXSBbb2JdIExUJztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICBjYXNlIDI6XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHJldHVybiAnW3ByZWrDhcKhbmppXSBkZGRkIFtvYl0gTFQnO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICfDhMKNZXogJXMnLFxuICAgIHBhc3Q6ICdwcmVkICVzJyxcbiAgICBzOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIHNzOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIG06IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgbW06IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgaDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBoaDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBkOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIGRkOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIE06IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgTU06IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgeTogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICB5eTogcHJvY2Vzc1JlbGF0aXZlVGltZVxuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxuICBvcmRpbmFsOiAnJWQuJyxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA3ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFN3ZWRpc2ggW3N2XVxuLy8hIGF1dGhvciA6IEplbnMgQWxtIDogaHR0cHM6Ly9naXRodWIuY29tL3VsbXVzXG5cbmV4cG9ydCBjb25zdCBzdkxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ3N2JyxcbiAgbW9udGhzOiAnamFudWFyaV9mZWJydWFyaV9tYXJzX2FwcmlsX21hal9qdW5pX2p1bGlfYXVndXN0aV9zZXB0ZW1iZXJfb2t0b2Jlcl9ub3ZlbWJlcl9kZWNlbWJlcicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICdqYW5fZmViX21hcl9hcHJfbWFqX2p1bl9qdWxfYXVnX3NlcF9va3Rfbm92X2RlYycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXM6ICdzw4PCtm5kYWdfbcODwqVuZGFnX3Rpc2RhZ19vbnNkYWdfdG9yc2RhZ19mcmVkYWdfbMODwrZyZGFnJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnc8ODwrZuX23Dg8Klbl90aXNfb25zX3Rvcl9mcmVfbMODwrZyJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ3PDg8K2X23Dg8KlX3RpX29uX3RvX2ZyX2zDg8K2Jy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnWVlZWS1NTS1ERCcsXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgW2tsLl0gSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkIEQgTU1NTSBZWVlZIFtrbC5dIEhIOm1tJyxcbiAgICBsbGw6ICdEIE1NTSBZWVlZIEhIOm1tJyxcbiAgICBsbGxsOiAnZGRkIEQgTU1NIFlZWVkgSEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1tJZGFnXSBMVCcsXG4gICAgbmV4dERheTogJ1tJbW9yZ29uXSBMVCcsXG4gICAgbGFzdERheTogJ1tJZ8ODwqVyXSBMVCcsXG4gICAgbmV4dFdlZWs6ICdbUMODwqVdIGRkZGQgTFQnLFxuICAgIGxhc3RXZWVrOiAnW0ldIGRkZGRbc10gTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnb20gJXMnLFxuICAgIHBhc3Q6ICdmw4PCtnIgJXMgc2VkYW4nLFxuICAgIHM6ICduw4PCpWdyYSBzZWt1bmRlcicsXG4gICAgc3M6ICclZCBzZWt1bmRlcicsXG4gICAgbTogJ2VuIG1pbnV0JyxcbiAgICBtbTogJyVkIG1pbnV0ZXInLFxuICAgIGg6ICdlbiB0aW1tZScsXG4gICAgaGg6ICclZCB0aW1tYXInLFxuICAgIGQ6ICdlbiBkYWcnLFxuICAgIGRkOiAnJWQgZGFnYXInLFxuICAgIE06ICdlbiBtw4PCpW5hZCcsXG4gICAgTU06ICclZCBtw4PCpW5hZGVyJyxcbiAgICB5OiAnZXR0IMODwqVyJyxcbiAgICB5eTogJyVkIMODwqVyJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0oZXxhKS8sXG4gIG9yZGluYWwoX251bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoX251bSk7XG4gICAgbGV0IGIgPSBudW0gJSAxMCxcbiAgICAgIG91dHB1dCA9ICh+fihudW0gJSAxMDAgLyAxMCkgPT09IDEpID8gJ2UnIDpcbiAgICAgICAgKGIgPT09IDEpID8gJ2EnIDpcbiAgICAgICAgICAoYiA9PT0gMikgPyAnYScgOlxuICAgICAgICAgICAgKGIgPT09IDMpID8gJ2UnIDogJ2UnO1xuICAgIHJldHVybiBudW0gKyBvdXRwdXQ7XG4gIH0sXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG4vLyBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vIGxvY2FsZSA6IFRoYWkgW3RoXVxuLy8gYXV0aG9yIDogV2F0Y2hhcmFwb2wgU2FuaXR3b25nIDogaHR0cHM6Ly9naXRodWIuY29tL3R1bWl0XG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuZXhwb3J0IGNvbnN0IHRoTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAndGgnLFxuICBtb250aHM6ICfDoMK4wqHDoMK4woHDoMK4wqPDoMK4wrLDoMK4woTDoMK4wqFfw6DCuMKBw6DCuMK4w6DCuMKhw6DCuMKgw6DCuMKyw6DCuMKew6DCuMKxw6DCuMKZw6DCuMKYw6DCucKMX8OgwrjCocOgwrjCtcOgwrjCmcOgwrjCssOgwrjChMOgwrjCoV/DoMK5woDDoMK4wqHDoMK4wqnDoMK4wrLDoMK4wqLDoMK4wplfw6DCuMKew6DCuMKkw6DCuMKpw6DCuMKgw6DCuMKyw6DCuMKEw6DCuMKhX8OgwrjCocOgwrjCtMOgwrjClsOgwrjCuMOgwrjCmcOgwrjCssOgwrjCosOgwrjCmV/DoMK4woHDoMK4wqPDoMK4woHDoMK4wo7DoMK4wrLDoMK4woTDoMK4wqFfw6DCuMKqw6DCuMK0w6DCuMKHw6DCuMKrw6DCuMKyw6DCuMKEw6DCuMKhX8OgwrjCgcOgwrjCscOgwrjCmcOgwrjCosOgwrjCssOgwrjCosOgwrjCmV/DoMK4wpXDoMK4wrjDoMK4wqXDoMK4wrLDoMK4woTDoMK4wqFfw6DCuMKew6DCuMKkw6DCuMKow6DCuMKIw6DCuMK0w6DCuMKBw6DCuMKyw6DCuMKiw6DCuMKZX8OgwrjCmMOgwrjCscOgwrjCmcOgwrjCp8OgwrjCssOgwrjChMOgwrjCoScuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICfDoMK4wqEuw6DCuMKELl/DoMK4woEuw6DCuMKeLl/DoMK4wqHDoMK4wrUuw6DCuMKELl/DoMK5woDDoMK4wqEuw6DCuMKiLl/DoMK4wp4uw6DCuMKELl/DoMK4wqHDoMK4wrQuw6DCuMKiLl/DoMK4woEuw6DCuMKELl/DoMK4wqouw6DCuMKELl/DoMK4woEuw6DCuMKiLl/DoMK4wpUuw6DCuMKELl/DoMK4wp4uw6DCuMKiLl/DoMK4wpguw6DCuMKELicuc3BsaXQoJ18nKSxcbiAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgd2Vla2RheXM6ICfDoMK4wq3DoMK4wrLDoMK4wpfDoMK4wrTDoMK4wpXDoMK4wqLDoMK5woxfw6DCuMKIw6DCuMKxw6DCuMKZw6DCuMKXw6DCuMKjw6DCucKMX8OgwrjCrcOgwrjCscOgwrjCh8OgwrjChMOgwrjCssOgwrjCo1/DoMK4wp7DoMK4wrjDoMK4wphfw6DCuMKew6DCuMKkw6DCuMKrw6DCuMKxw6DCuMKqw6DCuMKaw6DCuMKUw6DCuMK1X8OgwrjCqMOgwrjCuMOgwrjCgcOgwrjCo8OgwrnCjF/DoMK5woDDoMK4wqrDoMK4wrLDoMK4wqPDoMK5wownLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICfDoMK4wq3DoMK4wrLDoMK4wpfDoMK4wrTDoMK4wpXDoMK4wqLDoMK5woxfw6DCuMKIw6DCuMKxw6DCuMKZw6DCuMKXw6DCuMKjw6DCucKMX8OgwrjCrcOgwrjCscOgwrjCh8OgwrjChMOgwrjCssOgwrjCo1/DoMK4wp7DoMK4wrjDoMK4wphfw6DCuMKew6DCuMKkw6DCuMKrw6DCuMKxw6DCuMKqX8OgwrjCqMOgwrjCuMOgwrjCgcOgwrjCo8OgwrnCjF/DoMK5woDDoMK4wqrDoMK4wrLDoMK4wqPDoMK5wownLnNwbGl0KCdfJyksIC8vIHllcywgdGhyZWUgY2hhcmFjdGVycyBkaWZmZXJlbmNlXG4gIHdlZWtkYXlzTWluOiAnw6DCuMKtw6DCuMKyLl/DoMK4woguX8OgwrjCrS5fw6DCuMKeLl/DoMK4wp7DoMK4wqQuX8OgwrjCqC5fw6DCuMKqLicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSDptbScsXG4gICAgTFRTOiAnSDptbTpzcycsXG4gICAgTDogJ0REL01NL1lZWVknLFxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZIMOgwrnCgMOgwrjCp8OgwrjCpcOgwrjCsiBIOm1tJyxcbiAgICBMTExMOiAnw6DCuMKnw6DCuMKxw6DCuMKZZGRkZMOgwrjCl8OgwrjCtcOgwrnCiCBEIE1NTU0gWVlZWSDDoMK5woDDoMK4wqfDoMK4wqXDoMK4wrIgSDptbSdcbiAgfSxcbiAgbWVyaWRpZW1QYXJzZTogL8OgwrjCgcOgwrnCiMOgwrjCrcOgwrjCmcOgwrnCgMOgwrjCl8OgwrjCtcOgwrnCiMOgwrjCosOgwrjCh3zDoMK4wqvDoMK4wqXDoMK4wrHDoMK4wofDoMK5woDDoMK4wpfDoMK4wrXDoMK5wojDoMK4wqLDoMK4wocvLFxuICBpc1BNKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0ID09PSAnw6DCuMKrw6DCuMKlw6DCuMKxw6DCuMKHw6DCucKAw6DCuMKXw6DCuMK1w6DCucKIw6DCuMKiw6DCuMKHJztcbiAgfSxcbiAgbWVyaWRpZW0oaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgaWYgKGhvdXIgPCAxMikge1xuICAgICAgcmV0dXJuICfDoMK4woHDoMK5wojDoMK4wq3DoMK4wpnDoMK5woDDoMK4wpfDoMK4wrXDoMK5wojDoMK4wqLDoMK4wocnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ8OgwrjCq8OgwrjCpcOgwrjCscOgwrjCh8OgwrnCgMOgwrjCl8OgwrjCtcOgwrnCiMOgwrjCosOgwrjChyc7XG4gICAgfVxuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbw6DCuMKnw6DCuMKxw6DCuMKZw6DCuMKZw6DCuMK1w6DCucKJIMOgwrnCgMOgwrjCp8OgwrjCpcOgwrjCsl0gTFQnLFxuICAgIG5leHREYXk6ICdbw6DCuMKew6DCuMKjw6DCuMK4w6DCucKIw6DCuMKHw6DCuMKZw6DCuMK1w6DCucKJIMOgwrnCgMOgwrjCp8OgwrjCpcOgwrjCsl0gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZFvDoMK4wqvDoMK4wpnDoMK5wonDoMK4wrIgw6DCucKAw6DCuMKnw6DCuMKlw6DCuMKyXSBMVCcsXG4gICAgbGFzdERheTogJ1vDoMK5woDDoMK4wqHDoMK4wrfDoMK5wojDoMK4wq3DoMK4wqfDoMK4wrLDoMK4wpnDoMK4wpnDoMK4wrXDoMK5wokgw6DCucKAw6DCuMKnw6DCuMKlw6DCuMKyXSBMVCcsXG4gICAgbGFzdFdlZWs6ICdbw6DCuMKnw6DCuMKxw6DCuMKZXWRkZGRbw6DCuMKXw6DCuMK1w6DCucKIw6DCucKBw6DCuMKlw6DCucKJw6DCuMKnIMOgwrnCgMOgwrjCp8OgwrjCpcOgwrjCsl0gTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnw6DCuMKtw6DCuMK1w6DCuMKBICVzJyxcbiAgICBwYXN0OiAnJXPDoMK4wpfDoMK4wrXDoMK5wojDoMK5woHDoMK4wqXDoMK5wonDoMK4wqcnLFxuICAgIHM6ICfDoMK5woTDoMK4wqHDoMK5wojDoMK4woHDoMK4wrXDoMK5wojDoMK4wqfDoMK4wrTDoMK4wpnDoMK4wrLDoMK4wpfDoMK4wrUnLFxuICAgIHNzOiAnJWQgw6DCuMKnw6DCuMK0w6DCuMKZw6DCuMKyw6DCuMKXw6DCuMK1JyxcbiAgICBtOiAnMSDDoMK4wpnDoMK4wrLDoMK4wpfDoMK4wrUnLFxuICAgIG1tOiAnJWQgw6DCuMKZw6DCuMKyw6DCuMKXw6DCuMK1JyxcbiAgICBoOiAnMSDDoMK4worDoMK4wrHDoMK5wojDoMK4wqfDoMK5woLDoMK4wqHDoMK4wocnLFxuICAgIGhoOiAnJWQgw6DCuMKKw6DCuMKxw6DCucKIw6DCuMKnw6DCucKCw6DCuMKhw6DCuMKHJyxcbiAgICBkOiAnMSDDoMK4wqfDoMK4wrHDoMK4wpknLFxuICAgIGRkOiAnJWQgw6DCuMKnw6DCuMKxw6DCuMKZJyxcbiAgICBNOiAnMSDDoMK5woDDoMK4wpTDoMK4wrfDoMK4wq3DoMK4wpknLFxuICAgIE1NOiAnJWQgw6DCucKAw6DCuMKUw6DCuMK3w6DCuMKtw6DCuMKZJyxcbiAgICB5OiAnMSDDoMK4wpvDoMK4wrUnLFxuICAgIHl5OiAnJWQgw6DCuMKbw6DCuMK1J1xuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBUdXJraXNoIFt0cl1cbi8vISBhdXRob3JzIDogRXJoYW4gR3VuZG9nYW4gOiBodHRwczovL2dpdGh1Yi5jb20vZXJoYW5ndW5kb2dhbixcbi8vISAgICAgICAgICAgQnVyYWsgWWnDhMKfaXQgS2F5YTogaHR0cHM6Ly9naXRodWIuY29tL0JZS1xuXG5sZXQgc3VmZml4ZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4gIDE6ICdcXCdpbmNpJyxcbiAgNTogJ1xcJ2luY2knLFxuICA4OiAnXFwnaW5jaScsXG4gIDcwOiAnXFwnaW5jaScsXG4gIDgwOiAnXFwnaW5jaScsXG4gIDI6ICdcXCduY2knLFxuICA3OiAnXFwnbmNpJyxcbiAgMjA6ICdcXCduY2knLFxuICA1MDogJ1xcJ25jaScsXG4gIDM6ICdcXCfDg8K8bmPDg8K8JyxcbiAgNDogJ1xcJ8ODwrxuY8ODwrwnLFxuICAxMDA6ICdcXCfDg8K8bmPDg8K8JyxcbiAgNjogJ1xcJ25jw4TCsScsXG4gIDk6ICdcXCd1bmN1JyxcbiAgMTA6ICdcXCd1bmN1JyxcbiAgMzA6ICdcXCd1bmN1JyxcbiAgNjA6ICdcXCfDhMKxbmPDhMKxJyxcbiAgOTA6ICdcXCfDhMKxbmPDhMKxJ1xufTtcblxuZXhwb3J0IGNvbnN0IHRyTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAndHInLFxuICBtb250aHM6ICdPY2FrX8OFwp51YmF0X01hcnRfTmlzYW5fTWF5w4TCsXNfSGF6aXJhbl9UZW1tdXpfQcOEwp91c3Rvc19FeWzDg8K8bF9Fa2ltX0thc8OEwrFtX0FyYWzDhMKxaycuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICdPY2Ffw4XCnnViX01hcl9OaXNfTWF5X0hhel9UZW1fQcOEwp91X0V5bF9Fa2lfS2FzX0FyYScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXM6ICdQYXphcl9QYXphcnRlc2lfU2Fsw4TCsV/Dg8KHYXLDhcKfYW1iYV9QZXLDhcKfZW1iZV9DdW1hX0N1bWFydGVzaScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ1Bhel9QdHNfU2FsX8ODwodhcl9QZXJfQ3VtX0N0cycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdQel9QdF9TYV/Dg8KHYV9QZV9DdV9DdCcuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ0RELk1NLllZWVknLFxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRCBNTU1NIFlZWVkgSEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1tidWfDg8K8biBzYWF0XSBMVCcsXG4gICAgbmV4dERheTogJ1t5YXLDhMKxbiBzYWF0XSBMVCcsXG4gICAgbmV4dFdlZWs6ICdbZ2VsZWNla10gZGRkZCBbc2FhdF0gTFQnLFxuICAgIGxhc3REYXk6ICdbZMODwrxuXSBMVCcsXG4gICAgbGFzdFdlZWs6ICdbZ2XDg8KnZW5dIGRkZGQgW3NhYXRdIExUJyxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJyVzIHNvbnJhJyxcbiAgICBwYXN0OiAnJXMgw4PCtm5jZScsXG4gICAgczogJ2Jpcmthw4PCpyBzYW5peWUnLFxuICAgIHNzOiAnJWQgc2FuaXllJyxcbiAgICBtOiAnYmlyIGRha2lrYScsXG4gICAgbW06ICclZCBkYWtpa2EnLFxuICAgIGg6ICdiaXIgc2FhdCcsXG4gICAgaGg6ICclZCBzYWF0JyxcbiAgICBkOiAnYmlyIGfDg8K8bicsXG4gICAgZGQ6ICclZCBnw4PCvG4nLFxuICAgIE06ICdiaXIgYXknLFxuICAgIE1NOiAnJWQgYXknLFxuICAgIHk6ICdiaXIgecOEwrFsJyxcbiAgICB5eTogJyVkIHnDhMKxbCdcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9JyhpbmNpfG5jaXzDg8K8bmPDg8K8fG5jw4TCsXx1bmN1fMOEwrFuY8OEwrEpLyxcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihfbnVtKTtcbiAgICBpZiAobnVtID09PSAwKSB7ICAvLyBzcGVjaWFsIGNhc2UgZm9yIHplcm9cbiAgICAgIHJldHVybiBudW0gKyAnXFwnw4TCsW5jw4TCsSc7XG4gICAgfVxuICAgIGxldCBhID0gbnVtICUgMTAsXG4gICAgICBiID0gbnVtICUgMTAwIC0gYSxcbiAgICAgIGMgPSBudW0gPj0gMTAwID8gMTAwIDogbnVsbDtcbiAgICByZXR1cm4gbnVtICsgKHN1ZmZpeGVzW2FdIHx8IHN1ZmZpeGVzW2JdIHx8IHN1ZmZpeGVzW2NdKTtcbiAgfSxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA3ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1wYXJhbWV0ZXItcmVhc3NpZ25tZW50IHByZWZlci1zd2l0Y2hcblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogQ2hpbmVzZSAoQ2hpbmEpIFt6aC1jbl1cbi8vISBhdXRob3IgOiBzdXVwaWMgOiBodHRwczovL2dpdGh1Yi5jb20vc3V1cGljXG4vLyEgYXV0aG9yIDogWmVubyBaZW5nIDogaHR0cHM6Ly9naXRodWIuY29tL3plbm96ZW5nXG5cbmV4cG9ydCBjb25zdCB6aENuTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnemgtY24nLFxuICBtb250aHM6ICfDpMK4woDDpsKcwohfw6TCusKMw6bCnMKIX8OkwrjCicOmwpzCiF/DpcKbwpvDpsKcwohfw6TCusKUw6bCnMKIX8OlwoXCrcOmwpzCiF/DpMK4woPDpsKcwohfw6XChcKrw6bCnMKIX8OkwrnCncOmwpzCiF/DpcKNwoHDpsKcwohfw6XCjcKBw6TCuMKAw6bCnMKIX8Olwo3CgcOkwrrCjMOmwpzCiCcuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICcxw6bCnMKIXzLDpsKcwohfM8OmwpzCiF80w6bCnMKIXzXDpsKcwohfNsOmwpzCiF83w6bCnMKIXzjDpsKcwohfOcOmwpzCiF8xMMOmwpzCiF8xMcOmwpzCiF8xMsOmwpzCiCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXM6ICfDpsKYwp/DpsKcwp/DpsKXwqVfw6bCmMKfw6bCnMKfw6TCuMKAX8OmwpjCn8OmwpzCn8OkwrrCjF/DpsKYwp/DpsKcwp/DpMK4wolfw6bCmMKfw6bCnMKfw6XCm8KbX8OmwpjCn8OmwpzCn8OkwrrClF/DpsKYwp/DpsKcwp/DpcKFwq0nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICfDpcKRwqjDpsKXwqVfw6XCkcKow6TCuMKAX8OlwpHCqMOkwrrCjF/DpcKRwqjDpMK4wolfw6XCkcKow6XCm8KbX8OlwpHCqMOkwrrClF/DpcKRwqjDpcKFwq0nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnw6bCl8KlX8OkwrjCgF/DpMK6woxfw6TCuMKJX8OlwpvCm1/DpMK6wpRfw6XChcKtJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnWVlZWS9NTS9ERCcsXG4gICAgTEw6ICdZWVlZw6XCucK0TcOmwpzCiETDpsKXwqUnLFxuICAgIExMTDogJ1lZWVnDpcK5wrRNw6bCnMKIRMOmwpfCpUFow6fCgsK5bW3DpcKIwoYnLFxuICAgIExMTEw6ICdZWVlZw6XCucK0TcOmwpzCiETDpsKXwqVkZGRkQWjDp8KCwrltbcOlwojChicsXG4gICAgbDogJ1lZWVkvTS9EJyxcbiAgICBsbDogJ1lZWVnDpcK5wrRNw6bCnMKIRMOmwpfCpScsXG4gICAgbGxsOiAnWVlZWcOlwrnCtE3DpsKcwohEw6bCl8KlIEhIOm1tJyxcbiAgICBsbGxsOiAnWVlZWcOlwrnCtE3DpsKcwohEw6bCl8KlZGRkZCBISDptbSdcbiAgfSxcbiAgbWVyaWRpZW1QYXJzZTogL8OlwofCjMOmwpnCqHzDpsKXwqnDpMK4wop8w6TCuMKKw6XCjcKIfMOkwrjCrcOlwo3CiHzDpMK4wovDpcKNwoh8w6bCmcKaw6TCuMKKLyxcbiAgbWVyaWRpZW1Ib3VyKGhvdXIsIG1lcmlkaWVtKSB7XG4gICAgaWYgKGhvdXIgPT09IDEyKSB7XG4gICAgICBob3VyID0gMDtcbiAgICB9XG4gICAgaWYgKG1lcmlkaWVtID09PSAnw6XCh8KMw6bCmcKoJyB8fCBtZXJpZGllbSA9PT0gJ8OmwpfCqcOkwrjCiicgfHxcbiAgICAgIG1lcmlkaWVtID09PSAnw6TCuMKKw6XCjcKIJykge1xuICAgICAgcmV0dXJuIGhvdXI7XG4gICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ8OkwrjCi8Olwo3CiCcgfHwgbWVyaWRpZW0gPT09ICfDpsKZwprDpMK4woonKSB7XG4gICAgICByZXR1cm4gaG91ciArIDEyO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAnw6TCuMKtw6XCjcKIJ1xuICAgICAgcmV0dXJuIGhvdXIgPj0gMTEgPyBob3VyIDogaG91ciArIDEyO1xuICAgIH1cbiAgfSxcbiAgbWVyaWRpZW0oaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgbGV0IGhtID0gaG91ciAqIDEwMCArIG1pbnV0ZTtcbiAgICBpZiAoaG0gPCA2MDApIHtcbiAgICAgIHJldHVybiAnw6XCh8KMw6bCmcKoJztcbiAgICB9IGVsc2UgaWYgKGhtIDwgOTAwKSB7XG4gICAgICByZXR1cm4gJ8OmwpfCqcOkwrjCiic7XG4gICAgfSBlbHNlIGlmIChobSA8IDExMzApIHtcbiAgICAgIHJldHVybiAnw6TCuMKKw6XCjcKIJztcbiAgICB9IGVsc2UgaWYgKGhtIDwgMTIzMCkge1xuICAgICAgcmV0dXJuICfDpMK4wq3DpcKNwognO1xuICAgIH0gZWxzZSBpZiAoaG0gPCAxODAwKSB7XG4gICAgICByZXR1cm4gJ8OkwrjCi8Olwo3CiCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnw6bCmcKaw6TCuMKKJztcbiAgICB9XG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1vDpMK7worDpcKkwqldTFQnLFxuICAgIG5leHREYXk6ICdbw6bCmMKOw6XCpMKpXUxUJyxcbiAgICBuZXh0V2VlazogJ1vDpMK4wotdZGRkZExUJyxcbiAgICBsYXN0RGF5OiAnW8OmwpjCqMOlwqTCqV1MVCcsXG4gICAgbGFzdFdlZWs6ICdbw6TCuMKKXWRkZGRMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0ow6bCl8KlfMOmwpzCiHzDpcKRwqgpLyxcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIsIHBlcmlvZCkge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihfbnVtKTtcbiAgICBzd2l0Y2ggKHBlcmlvZCkge1xuICAgICAgY2FzZSAnZCc6XG4gICAgICBjYXNlICdEJzpcbiAgICAgIGNhc2UgJ0RERCc6XG4gICAgICAgIHJldHVybiBudW0gKyAnw6bCl8KlJztcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgICByZXR1cm4gbnVtICsgJ8OmwpzCiCc7XG4gICAgICBjYXNlICd3JzpcbiAgICAgIGNhc2UgJ1cnOlxuICAgICAgICByZXR1cm4gbnVtICsgJ8OlwpHCqCc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCk7XG4gICAgfVxuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICclc8OlwobChScsXG4gICAgcGFzdDogJyVzw6XCicKNJyxcbiAgICBzOiAnw6XCh8Kgw6fCp8KSJyxcbiAgICBzczogJyVkIMOnwqfCkicsXG4gICAgbTogJzEgw6XCiMKGw6nCksKfJyxcbiAgICBtbTogJyVkIMOlwojChsOpwpLCnycsXG4gICAgaDogJzEgw6XCsMKPw6bCl8K2JyxcbiAgICBoaDogJyVkIMOlwrDCj8OmwpfCticsXG4gICAgZDogJzEgw6XCpMKpJyxcbiAgICBkZDogJyVkIMOlwqTCqScsXG4gICAgTTogJzEgw6TCuMKqw6bCnMKIJyxcbiAgICBNTTogJyVkIMOkwrjCqsOmwpzCiCcsXG4gICAgeTogJzEgw6XCucK0JyxcbiAgICB5eTogJyVkIMOlwrnCtCdcbiAgfSxcbiAgd2Vlazoge1xuICAgIC8vIEdCL1QgNzQwOC0xOTk0w6PCgMKKw6bClcKww6bCjcKuw6XChcKDw6XCksKMw6TCusKkw6bCjcKiw6bCoMK8w6XCvMKPw4LCt8Okwr/CocOmwoHCr8OkwrrCpMOmwo3CosOCwrfDpsKXwqXDpsKcwp/DpcKSwozDpsKXwrbDqcKXwrTDqMKhwqjDp8KkwrrDpsKzwpXDo8KAwovDpMK4wo5JU08gODYwMToxOTg4w6fCrcKJw6bClcKIXG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJkYXlzSW5Nb250aCIsIm1vbnRocyIsIm1vbnRoc1Nob3J0IiwibW9udGhzU2hvcnREb3QiLCJtb250aHNQYXJzZSIsIm1vbnRoc1JlZ2V4IiwidHJhbnNsYXRlIiwic3ltYm9sTWFwIiwibnVtYmVyTWFwIiwibW9udGhzU2hvcnRXaXRoRG90cyIsIm1vbnRoc1Nob3J0V2l0aG91dERvdHMiLCJwbHVyYWwiLCJyZWxhdGl2ZVRpbWVXaXRoUGx1cmFsIiwicHJvY2Vzc1JlbGF0aXZlVGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsaUJBQW9CLENBQVMsRUFBRSxDQUFTO1FBQ3RDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFD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