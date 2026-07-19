/**
 * @param {number} n
 * @return {number}
 next = current + previous
 */
var fib = function(n, memo={}) {
    if(n<=1) return n;
    memo[n] = fib(n-2, memo) + fib(n-1, memo);
    return memo[n]
}



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
