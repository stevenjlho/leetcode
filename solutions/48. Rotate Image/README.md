# [48. Rotate Image](https://leetcode.com/problems/rotate-image/description/)

## Intuition

The solution leverages two primary steps: transposing the matrix (converting rows to columns) and then reversing each row.

## Approach

1. Iterate through the rows (`i`) and within each row, iterate through the columns (`j`) up to the diagonal (`j <= i`). This prevents re-swapping elements.
2. Swap the element at `[i][j]` with the element at `[j][i]`. This step converts rows into columns, effectively transposing the matrix.
3. Iterate through each row in the matrix.
4. Reverse each row using the built-in `reverse()` function. This step aligns the elements to reflect a 90-degree clockwise rotation.

## Complexity

- Time complexity: O(N^2), where N is the number of rows (or columns) in the matrix. Each element is accessed once during transposition and once during reversal.
- Space complexity: O(1), as the rotation is done in place without using additional space for another matrix.

## Code

```javascript
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length; // Number of rows (and columns)

  // Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      // Swap elements to transpose
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
};
```
