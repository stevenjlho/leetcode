# [74. Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/description/)

## Intuition
The key principle is treating the 2D matrix as a 1D array, thus enabling the use of binary search. The matrix is considered to be sorted from left to right and top to bottom.

## Approach
1. Verify if the matrix is null or empty. If it is, return `false` as the target cannot be found.
2. Determine the number of rows (`rows`) and columns (`cols`) in the matrix.
3. Initialize `start` to 0 and `end` to `rows * cols - 1`, considering the 2D matrix as a 1D array.
4. Continue binary search as long as `start` is less than or equal to `end`.
   - Calculate mid index for the equivalent 1D array.
   - Map the `mid` index back to 2D indices (`row` and `col`) using division and modulo operations.
   - Compare the `midValue` with `target`. 
      - If `midValue` equals `target`, return `true`.
      - If `midValue` is less than `target`, adjust `start` to `mid + 1`.
      - If `midValue` is greater than `target`, adjust `end` to `mid - 1`. 
5. If the loop finishes without finding the target, return `false`.


## Complexity

- Time complexity: O(log(mn)), where `m` is the number of rows and `n` is the number of columns in the matrix. This is because the binary search operates on a virtual array of length `m * n`.
- Space complexity: O(1), as the space used is constant, irrespective of the size of the input matrix.

## Code

```javascript
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // Handle empty matrix case
    if (matrix === null || matrix.length === 0) {
        return false;
    }

    // Get matrix dimensions
    let rows = matrix.length;
    let cols = matrix[0].length;
    
    // Set start and end for binary search
    let start = 0;
    let end = rows * cols - 1;

    // Binary search
    while (start <= end) {
        let mid = Math.floor(start + ((end - start) / 2)); // Calculate middle index
        let midValue = matrix[Math.floor(mid / cols)][mid % cols]; // Convert 1D index to 2D and get value

        // Check if midValue matches target
        if (midValue === target) {
            return true;
        }

        // Adjust search range
        if (midValue < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    // Target not found in matrix
    return false;
};```
