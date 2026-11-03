/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    let candidate = null;
    let count = 0;

    for (const num of nums) {
        // Support dropped to zero: adopt the current element as the new candidate.
        if (count === 0) {
            candidate = num;
        }
        // Same as candidate adds support, different cancels one vote.
        count += (num === candidate) ? 1 : -1;
    }

    // The majority element outnumbers all others combined,
    // so it always survives the cancellation.
    return candidate;
};