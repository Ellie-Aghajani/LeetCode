/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Modifies nums1 in place.
 */
var merge = function (nums1, m, nums2, n) {
    // r1 reads from the end of the real elements in nums1,
    // r2 reads from the end of nums2.
    let r1 = m - 1;
    let r2 = n - 1;

    // w is the write position. We fill nums1 from the back so we never
    // overwrite a value we still need to read (the back of nums1 is empty).
    for (let w = m + n - 1; w >= 0; w--) {
        // Once nums2 is exhausted, the remaining nums1 elements are
        // already in their correct positions, so we can stop.
        if (r2 < 0) {
            break;
        }

        // Write the larger of the two current elements.
        // If nums1 is exhausted (r1 < 0), we fall through to nums2.
        if (r1 >= 0 && nums1[r1] > nums2[r2]) {
            nums1[w] = nums1[r1--];
        } else {
            nums1[w] = nums2[r2--];
        }
    }
};