/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    // The DP table: triangle[row] holds the finished values of that row.
    const triangle = [];

    // Bottom-up: build each row in order, because row i depends only on row i-1.
    for (let row = 0; row < numRows; row++) {
        // Row `row` has row + 1 elements. Filling with 1 handles the base case:
        // the first and last element of every row is always 1.
        const currentRow = new Array(row + 1).fill(1);

        // Fill only the middle elements using the recurrence relation.
        // For row 0 and row 1 this loop does not run, so [1] and [1, 1]
        // are correct without any special-casing.
        for (let col = 1; col < row; col++) {
            // Each value is the sum of the two values directly above it.
            // Both were computed earlier and are reused here, not recomputed.
            currentRow[col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
        }

        triangle.push(currentRow);
    }

    return triangle;
};