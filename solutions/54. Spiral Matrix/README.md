# [54. Spiral Matrix](https://leetcode.com/problems/spiral-matrix/description/)

## Intuition

This solution capitalizes on the pattern observed in traversing a matrix in a spiral order. It systematically navigates the matrix's perimeter, gradually moving inward, ensuring every element is visited in a clockwise spiral sequence.

## Approach

1. Immediately return an empty array if the matrix is empty to handle edge cases.
2. Set `top`, `bottom`, `left`, and `right` boundaries to enclose the outer layer of the matrix.
3. Move from left to right along the top row, pushing each element into the result array, then increment the `top` boundary to move inward.
4. Move from top to bottom along the right column, then decrement the `right` boundary.
5. Move from right to left along the bottom row, then decrement the `bottom` boundary.
6. Move from bottom to top along the left column, then increment the `left` boundary.
7. After each traversal, check if the boundaries have overlapped, indicating completion of the spiral traversal.

## Complexity
- Time Complexity: O(MN), where M is the number of rows and N is the number of columns in the matrix. Each element is accessed exactly once.
- Space Complexity: O(1), excluding the space used for the output array `res`. The space used for the output array is O(MN) as it stores every element from the matrix.

## Code

```javascript
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const res = [];
  // Return an empty array for an empty matrix
  if (matrix.length === 0 || matrix[0].length === 0) return res;

  // Define the initial boundaries of the spiral
  let top = 0,
    bottom = matrix.length - 1;
  let left = 0,
    right = matrix[0].length - 1;

  // Continue the spiral until the boundaries overlap
  while (true) {
    // Traverse the top row from left to right
    for (let i = left; i <= right; i++) res.push(matrix[top][i]);
    if (++top > bottom) break; // Move the top boundary down and check for overlap

    // Traverse the right column from top to bottom
    for (let i = top; i <= bottom; i++) res.push(matrix[i][right]);
    if (--right < left) break; // Move the right boundary left and check for overlap

    // Traverse the bottom row from right to left
    for (let i = right; i >= left; i--) res.push(matrix[bottom][i]);
    if (--bottom < top) break; // Move the bottom boundary up and check for overlap

    // Traverse the left column from bottom to top
    for (let i = bottom; i >= top; i--) res.push(matrix[i][left]);
    if (++left > right) break; // Move the left boundary right and check for overlap
  }

  // Return the collected elements in spiral order
  return res;
};
```
