/**
 * @param {number} n
 * @return {number}
 next = current + previous
 */
// var fib = function(n, memo={}) {
//     if(n<=1) return n;
//     memo[n] = fib(n-1, memo) + fib(n-2, memo); //drill down to base case
//     return memo[n]
// }

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


// var fib = function(n) {
//     if (n <= 1) return n;
//     let prev = 0;
//     let current = 1
//     for (let i = 2; i <= n; i++){
//         const next = prev + current;
//         prev = current;
//         current = next;
//     }
//     return current
// };
