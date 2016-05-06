// Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.
//
// Example:
// For num = 5 you should return [0,1,1,2,1,2].
//
// Follow up:
//
// It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
// Space complexity should be O(n).
// Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.

/**
 * This solution takes O(n*sizeof(integer))
 */

function getOneCounts (num) {
    var count = 0;
    for (var i = 0, j = num.length; i < j; i++) {
        var char = +num[i];
        if (char === 1) {
            count++;
        }
    }
    return count;
}

var countBits = (num) => {
    var returnArray = [];
    for (var i = 0, j = num; i <= j; i++) {
        var baseTwoNum = i.toString(2);
        returnArray[i] = getOneCounts(baseTwoNum);
    }
    return returnArray;
};

export default countBits;
