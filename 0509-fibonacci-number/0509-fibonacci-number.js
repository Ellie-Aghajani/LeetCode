/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {

  const memo = { 0: 0, 1: 1 };

  function helper(n) {
    if (n in memo) return memo[n];

    memo[n] = helper(n - 1) + helper(n - 2);
    return memo[n];
  }

  return helper(n);
};
