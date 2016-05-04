// Given a non-empty array of integers, return the k most frequent elements.
//
// For example,
// Given [1,1,1,2,2,3] and k = 2, return [1,2].
//
// Note:
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = (nums, k) => {
    var hash = {};
    var order = [];
    nums.forEach((num) => {
        if (hash[num]) {
            hash[num]++;
        } else {
            hash[num] = 1;
        }
    });
    // sort
    var keys = Object.keys(hash).sort((a, b) => {
        var hashA = hash[a];
        var hashB = hash[b];
        return hash[b] - hash[a] || (a - b);
    });
    return keys.splice(0, k).map((key) => {
        return +key;
    });
};

export default topKFrequent;
