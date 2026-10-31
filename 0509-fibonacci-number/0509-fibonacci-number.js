/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n){
    let dp = [0,1];
    for(let i=2; i<=n; i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}

// var fib = function(n) {
//     const memo = new Map();

//     const helper = (n) => {
//         if (n <= 1) return n;
//         if (memo.has(n)) return memo.get(n);

//         const result = helper(n - 1) + helper(n - 2);
//         memo.set(n, result);
//         return result;
//     };

//     return helper(n);
// };

// const cache = new Map([[0, 0], [1, 1]]);

// var fib = function(N) {
//     if (cache.has(N)) {
//         return cache.get(N);
//     }
//     cache.set(N, fib(N - 1) + fib(N - 2));
//     return cache.get(N);
// };