'use strict';

var debug = require('debug')('BUBBLE SORT');

var NULL = null;
/**
 * _isValidArray - Validate if input is array and lenght larger than 1
 * @method _isValidArray
 * @private
 * @return {Boolean}  if it is valid array
 */
function _isValidArray(lists) {
    return (lists && lists.constructor === Array && lists.length > 1);
}

/**
 * Javascript implementaion of bubble sort
 * http://en.wikipedia.org/wiki/Bubble_sort
 * Complexity: O(n^2)
 *
 * @method bubbleSort
 * @params {Array} lists target array to be sort
 * @return {Array} list sorted array
 */
var bubbleSort = function bubbleSort(lists) {
    if (!_isValidArray(lists)) {
        debug('ERROR, INVALID ARRAY');
        return NULL;
    }
    var surface = lists.length - 1;

    for (var i = 0, j = lists.length; i < j - 1; i++) {
        var newSurface = 0;
        for (var a = 0; a < surface; a++) {
            if (lists[a] > lists[a + 1]) {
                // swap
                var temp = lists[a];
                lists[a] = lists[a + 1];
                lists[a + 1] = temp;
                newSurface = a;
            }
        }
        surface = newSurface;
        if (!surface) {
            // already complete sorting
            return lists;
        }
    }

    return lists;
};

module.exports = bubbleSort;
