/**
 * @param {number} n
 * @return {number}
 */
//4
var fib = function(n) {
    if (n <= 1) {
        return n;
    }

    // Declare an array to store Fibonacci numbers
    const f = new Array(n + 1); // 1 extra to handle case, n = 0

    // 0th and 1st numbers of the series are 1
    f[0] = 0;
    f[1] = 1;

    for (let i = 2; i <= n; i++) {
        // Add the previous 2 numbers in the series and store it
        f[i] = f[i - 1] + f[i - 2];
    }

    return f[n];
};

//3
// var fib = function(n){
//     let dp = [0,1];
//     for(let i=2; i<=n; i++){
//         dp[i] = dp[i-1] + dp[i-2];
//     }
//     return dp[n];
// }

//2
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

//1
// const cache = new Map([[0, 0], [1, 1]]);

// var fib = function(N) {
//     if (cache.has(N)) {
//         return cache.get(N);
//     }
//     cache.set(N, fib(N - 1) + fib(N - 2));
//     return cache.get(N);
// };