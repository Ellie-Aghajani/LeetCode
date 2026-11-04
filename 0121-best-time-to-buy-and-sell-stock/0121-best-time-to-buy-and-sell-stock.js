/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // Cheapest price seen so far: the best day to have bought.
    let minPrice = Infinity;
    // Best profit found so far. Starts at 0 because we may not trade at all.
    let maxProfit = 0;

    for (const price of prices) {
        if (price < minPrice) {
            // A new cheapest day: a better buying day than any before it.
            minPrice = price;
        } else {
            // Profit if we sell today, having bought at the cheapest earlier price.
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
    }

    return maxProfit;
};