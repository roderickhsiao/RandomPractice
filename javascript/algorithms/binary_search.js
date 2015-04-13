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
            // match
            return index;
        }

        if (target[index] < element) {
            start = index + 1;
        } else if (target[index] > element) {
            start = end - 1;
        }
    }

    return -1;
};

module.exports = binarySearch;
