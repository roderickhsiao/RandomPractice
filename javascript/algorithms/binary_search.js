/* jshint node:true */
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

var binarySearch = function binarySearch(target, element) {
    debug('Start Binary Search');
    if (!target ||
        !element ||
        target.constructor !== Array ||
        target.legnth < 0) {
        return -1;
    }
    var start = 0;
    var end = target.length - 1;

    while (start <= end) {
        var index = Math.floor((start + end) / 2);

        if (target[index] === element) {
            debug('Found match');
            return index;
        }

        if (target[index] < element) {
            start = index + 1;
            debug('Swifting end index', start);
        } else if (target[index] > element) {
            end = end - 1;
            debug('Swifting end index', end);
        }
    }

    return -1;
};

module.exports = binarySearch;
