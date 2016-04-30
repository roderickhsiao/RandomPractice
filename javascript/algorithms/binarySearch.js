import Debug from 'debug';
let debug = Debug('BINARY SEARCH');

/**
 *
 * @method binarySearch
 * @params {Array} target array to be searched
 * @params {Number|String} element to be found
 *
 * @return {Boolean}
 */
var binarySearch = (target, element) => {
    debug('Start Binary Search');
    if (!target || !target.length || !element) {
        return -1;
    }
    let start = 0;
    let end = target.length - 1;
    let mid = Math.floor((start + end) / 2);

    while (start < end) {
        let value = target[mid];
        if (value === element) {
            return mid;
        }
        if (value < element) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
        mid = Math.floor((start + end) / 2);
    }

    return target[mid] === element ? mid : -1;
};

export default binarySearch;
