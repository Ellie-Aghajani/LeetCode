/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let writer = 0;
    const n = nums.length;

    for (let reader = 0; reader < n; reader++) {
        if (nums[reader] !== val) {
            nums[writer++] = nums[reader];
        }
    }

    return writer;
};
