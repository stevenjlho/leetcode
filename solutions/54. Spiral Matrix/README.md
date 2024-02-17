# [54. Spiral Matrix](https://leetcode.com/problems/spiral-matrix/description/)

## Intuition

This solution capitalizes on the pattern observed in traversing a matrix in a spiral order. It systematically navigates the matrix's perimeter, gradually moving inward, ensuring every element is visited in a clockwise spiral sequence.

## Approach

1. Immediately return an empty array if the matrix is empty to handle edge cases.
2. Set up a result array `res` to store the spiral order elements. Define `top`, `bottom`, `left`, and `right` boundaries to mark the current boundaries of the spiral.
3. Continue the spiral traversal until the `left` boundary crosses the `right` or the `top` boundary crosses the `bottom`, indicating the spiral has been fully traversed.
   - Iterate from `left` to `right` boundaries inclusive, adding elements to `res`. Increment `top` to move the boundary down for the next layer.
   - Iterate from `top` to `bottom` boundaries inclusive, adding elements to `res`. Decrement `right` to move the boundary inward for the next layer.
   - If `top` surpasses `bottom` or `left` exceeds `right`, stop the process to prevent overlap.
   - Iterate from `right` to `left` boundaries inclusive in reverse, adding elements to `res`. Decrement `bottom` to move the boundary upward for the next layer.
   - Iterate from `bottom` to `top` boundaries inclusive in reverse, adding elements to `res`. Increment `left` to move the boundary inward for the next layer.
4. After each traversal, return the collected spiral order elements.

## Complexity

- Time Complexity: O(M \* N), where M is the number of rows and N is the number of columns in the matrix. Each element is visited exactly once.
- Space Complexity: O(1), excluding the space used for the output array `res`. The space used for the output array is O(MN) as it stores every element from the matrix.

## Code

```javascript
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const res = []; // Result array to store spiral order
  if (matrix.length === 0 || matrix[0].length === 0) return res; // Early exit for empty matrix

  // Define boundaries of the current spiral layer
  let top = 0,
    bottom = matrix.length - 1;
  let left = 0,
    right = matrix[0].length - 1;

  // Loop until the spiral is fully traversed
  while (left <= right && top <= bottom) {
    // Traverse the top row from left to right
    for (let i = left; i <= right; i++) res.push(matrix[top][i]);
    top++; // Shrink the top boundary

    // Traverse the right column from top to bottom
    for (let i = top; i <= bottom; i++) res.push(matrix[i][right]);
    right--; // Shrink the right boundary

    // Ensure we haven't crossed boundaries before proceeding
    if (left > right || top > bottom) break;

    // Traverse the bottom row from right to left
    for (let i = right; i >= left; i--) res.push(matrix[bottom][i]);
    bottom--; // Shrink the bottom boundary

    // Traverse the left column from bottom to top
    for (let i = bottom; i >= top; i--) res.push(matrix[i][left]);
    left++; // Shrink the left boundary
  }

  return res; // Return the collected spiral order elements
};
```
