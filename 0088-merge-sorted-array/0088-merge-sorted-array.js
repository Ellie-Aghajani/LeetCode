/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 //Brute force (copy + sort)
// var merge = function(nums1, m, nums2, n) {
//         for (let i = 0; i < n; i++) {
//         nums1[i + m] = nums2[i];
//     }
//     nums1.sort((a, b) => a - b);
// };


//Optimal (three pointers, back to front):
var merge = function(nums1, m, nums2, n) {
    let r1 = m - 1;
    let r2 = n - 1;

    for (let w = m + n - 1; w >= 0; w--) {
        if (r1 >= 0 && r2 >= 0) {
            nums1[w] = nums1[r1] > nums2[r2] ? nums1[r1--] : nums2[r2--];
        } else if (r1 >= 0) {
            nums1[w] = nums1[r1--];
        } else {
            nums1[w] = nums2[r2--];
        }
    }
};