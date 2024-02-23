# [240. Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/description/)

## Intuition

The algorithm is based on leveraging the sorted nature of the 2D matrix's rows and columns. By starting from the top-right corner, the algorithm can eliminate either a row or a column in each step, significantly reducing the search space.

## Approach

1. If the matrix is empty or the first row is empty, return `false`.
2. Start from the top-right corner of the matrix with `col` pointing to the last column and `row` pointing to the first row.
3. Continue a loop until `col` or `row` goes out of the matrix boundaries.
   - If the current element equals the target, return `true` indicating the target is found.
   - If the current element is greater than the target, move left by decrementing `col` since all elements to the right are greater and cannot be the target.
   - If the current element is less than the target, move down by incrementing `row` since all elements above are smaller and cannot be the target.
4. If the loop exits without finding the target, return `false`.

## Complexity

- Time complexity: O(m + n), where m is the number of rows and n is the number of columns in the matrix. In the worst case, the algorithm might traverse an entire row and an entire column.
- Space complexity: O(1), as the algorithm uses a constant amount of space.

## Code

```javascript
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // Early return for an empty matrix
  if (!matrix.length || !matrix[0].length) {
    return false;
  }

  // Initialize pointers for the top-right element
  let col = matrix[0].length - 1;
  let row = 0;

  // Iterate over the matrix
  while (col >= 0 && row < matrix.length) {
    if (matrix[row][col] === target) {
      // Target found
      return true;
    } else if (matrix[row][col] > target) {
      // If current element is larger, target can't be in this column
      col--;
    } else {
      // If current element is smaller, target can't be in this row
      row++;
    }
  }

  // Target not found in the matrix
  return false;
};
```
