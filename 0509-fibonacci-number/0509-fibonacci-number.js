/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const memo = new Map();

    const helper = (n) => {
        if (n <= 1) return n;
        if (memo.has(n)) return memo.get(n);

        const result = helper(n - 1) + helper(n - 2);
        memo.set(n, result);
        return result;
    };

    return helper(n);
};