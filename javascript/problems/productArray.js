// Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
//
// Solve it without division and in O(n).
//
// For example, given [1,2,3,4], return [24,12,8,6].
//
// Follow up:
// Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)

// 1. before array [1, 1, 1 * 2, 1 * 2 * 3];
// 2. after array []
var productExceptSelf = (nums) => {
    var finalArray = [];
    var prod = 1;
    for (var i = 0, j = nums.length; i < j; i++) {
        finalArray[i] = prod;
        prod = prod * nums[i];
    }

    prod = 1;
    for (var a = nums.length - 1; a >= 0; a--) {
        finalArray[a] = finalArray[a] * prod;
        prod = prod * nums[a];
    }
    return finalArray;
};

export default productExceptSelf;
