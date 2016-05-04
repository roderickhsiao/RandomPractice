// Given a pattern and a string str, find if str follows the same pattern.
//
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.
//
// Examples:
// pattern = "abba", str = "dog cat cat dog" should return true.
// pattern = "abba", str = "dog cat cat fish" should return false.
// pattern = "aaaa", str = "dog cat cat dog" should return false.
// pattern = "abba", str = "dog dog dog dog" should return false.
// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var hash = {};
    var strHash = {};

    var patternArray = pattern.split('');
    var strArray = str.split(' ');
    if (patternArray.length !== strArray.length) {
        return false;
    }
    for (var i = 0, j = patternArray.length; i < j; i++) {
        var patternItem = patternArray[i];
        var strItem = strArray[i]
        if (!hash[patternItem]) {
            hash[patternItem] = strItem;
        } else if (hash[patternItem] && hash[patternItem] !== strItem) {
            return false;
        }
    }
    var keys = Object.keys(hash);
    for (var a = 0, b = keys.length; a < b; a++) {
        var key = keys[a];
        var value = hash[key];

        if (!strHash[value]) {
            strHash[value] = key;
        } else if (strHash[value] && strHash[value] !== key) {
            return false;
        }
    }

    return true;
};

export default wordPattern;
