/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo = {}) {
    if (n <= 2) return n;
    if (n in memo) return memo[n];
    memo[n] = climbStairs(n-1, memo) + climbStairs(n-2, memo)
    return memo[n];
    // let prev = 1;
    // let current = 2;
    // for (let i = 3; i <= n; i++){
    //     const next = prev + current;
    //     prev = current;
    //     current = next;
    // }
    // return current;
};