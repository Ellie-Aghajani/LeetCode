/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0;
    let writer = 1;
    for (let reader=1; reader < nums.length; reader ++){
        if (nums[reader] !== nums[writer-1]){
            nums[writer++] = nums[reader]
        }
    }
    return writer;
    
};