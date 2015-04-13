'use strict';

var debug = require('debug')('BINARY SEARCH');


/**
 * validateType - validate if type match
 *
 * @param  {Number|String} a input a
 * @param  {Number|String} b input b
 * @return {Boolean}
 */
function validateType(a, b) {
    return typeof a === typeof b;
}

/**
 * Javascript implementaion of binary search
 * http://en.wikipedia.org/wiki/Binary_search_algorithm
 *
 * @method binarySearch
 * @params {Array} target array to be searched
 * @params {Number|String} element to be found
 *
 * @return {Boolean}
 */
var binarySearch = function binarySearch(target, element) {
    debug('Start Binary Search');
    if (!target ||
        !element ||
        target.constructor !== Array ||
        target.legnth < 0) {
        debug('ERROR, INVALID INPUT');
        return -1;
    }
    var start = 0;
    var end = target.length - 1;

    while (start <= end) {
        var index = Math.floor((start + end) / 2);

        var currentItem = target[index];
        if (currentItem === element) {
            debug('Found match');
            return index;
        }

        if (currentItem < element) {
            start = index + 1;
            debug('Shifting start index', start);
        } else {
            // it can be currentItem > element, or any other case like
            // different type comparison
            end = index - 1;
            debug('Shifting end index', end);
        }
    }

    return -1;
};

module.exports = binarySearch;
