'use strict';

var debug = require('debug')('BINARY SEARCH');

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
var binarySearch = function binarySearch(target, element, start, end) {
    debug('Start Binary Search');
    if (!target ||
        !element ||
        target.constructor !== Array ||
        target.legnth < 0) {
        debug('ERROR, INVALID INPUT');
        return -1;
    }
    var startIndex = start || 0;
    var endIndex = end || target.length - 1;

    if (startIndex <= endIndex) {
        var index = Math.floor((startIndex + endIndex) / 2);

        var currentItem = target[index];
        if (currentItem === element) {
            debug('Found match');
            return index;
        }

        if (currentItem < element) {
            startIndex = index + 1;
        } else {
            // it can be currentItem > element, or any other case like
            // different type comparison
            endIndex = index - 1;
        }
        return binarySearch(target, element, startIndex, endIndex);

    }

    return -1;
};

module.exports = binarySearch;
