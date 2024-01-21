# [130. Surrounded Regions](https://leetcode.com/problems/surrounded-regions/)

## Intuition

The core idea is to identify 'O's connected to the boundary of the board since they cannot be surrounded. We use Depth-First Search (DFS) to handle the flipping of the remaining 'O's.

## Approach

1. Immediately return if the board is empty, as there are no regions to process.
2. Store the dimensions of the board in `row` and `col`.
3. Define a recursive DFS function that:
   - Checks if the current cell is within bounds and is an 'O'.
   - Marks the current cell as visited by changing 'O' to '#'.
   - Recursively explores adjacent cells (up, down, left, right).
4. Iterate over the boundary cells (first and last rows, first and last columns) and apply DFS to each 'O' found. This step marks all 'O's that are connected to the boundary with '#'.
5. Iterate over the boundary cells
   - Flip unconnected 'O's (not marked by DFS) to 'X's.
   - Restore the marked '#' cells back to 'O's.

## Complexity

- Time Complexity: O(M*N), where M is the number of rows and N is the number of columns. Each cell is potentially visited during the DFS.
- Space complexity: O(M*N) in the worst case, due to the recursion stack in DFS. This happens when the board is filled with 'O's, and the DFS explores all cells.

## Code

```javascript
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (board.length === 0) return; // Handle empty board

  const row = board.length;    // Number of rows
  const col = board[0].length; // Number of columns

  // DFS function to mark 'O's connected to boundaries
  const DFS = (i, j) => {
    if (i < 0 || j < 0 || i >= row || j >= col || board[i][j] !== "O") return;
    board[i][j] = "#"; // Mark as visited
    DFS(i - 1, j); // Explore up
    DFS(i + 1, j); // Explore down
    DFS(i, j - 1); // Explore left
    DFS(i, j + 1); // Explore right
  };

  // Apply DFS to 'O's on the boundaries
  for (let i = 0; i < row; i++) {
    if (board[i][0] === "O") DFS(i, 0); // Left boundary
    if (board[i][col - 1] === "O") DFS(i, col - 1); // Right boundary
  }
  for (let j = 0; j < col; j++) {
    if (board[0][j] === "O") DFS(0, j); // Top boundary
    if (board[row - 1][j] === "O") DFS(row - 1, j); // Bottom boundary
  }

  // Final pass to flip unconnected 'O's and restore '#' to 'O'
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === "O") board[i][j] = "X"; // Flip to 'X'
      if (board[i][j] === "#") board[i][j] = "O"; // Restore to 'O'
    }
  }
}
```
