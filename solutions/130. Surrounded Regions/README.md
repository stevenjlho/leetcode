# [130. Surrounded Regions](https://leetcode.com/problems/surrounded-regions/)

## Intuition

The key strategy is indeed to first identify and mark 'O's that are connected to the boundaries (as these cannot be flipped) and then handle the flipping of the remaining 'O's. This ensures that only the surrounded regions are flipped.

## Approach

1. Immediately return if the board is empty, as there are no regions to process.
2. Implement a Depth-First Search (DFS) function that marks 'O's connected to the boundary as '#'. This function:
   - Returns immediately if it encounters a boundary or a non-'O' cell.
   - Marks the current 'O' cell as '#' and recursively explores its adjacent cells (up, down, left, right).
3. Perform DFS from 'O's on the boundaries (first and last rows, first and last columns) to protect the regions connected to edges.
4. After DFS, iterate through the board:
   - Flip isolated 'O's (which are not marked as '#') to 'X's.
   - Restore '#' back to 'O' for those connected to the boundary.

## Complexity

- Time Complexity: O(MxN), where M is the number of rows and N is the number of columns in the board. In the worst case, DFS is applied to all cells.
- Space complexity: O(MxN) in the worst case, due to the recursive call stack of DFS. However, it's typically less since not all cells will be part of the recursive calls.

## Code

```javascript
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (board.length === 0) return;

  const m = board.length;
  const n = board[0].length;

  // DFS to mark 'O's connected to boundaries
  const DFS = (i, j) => {
    if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] !== "O") return;
    board[i][j] = "#"; // Mark as visited
    DFS(i - 1, j); // Up
    DFS(i + 1, j); // Down
    DFS(i, j - 1); // Left
    DFS(i, j + 1); // Right
  };

  // Apply DFS to 'O's on the boundaries
  for (let i = 0; i < m; i++) {
    if (board[i][0] === "O") DFS(i, 0);
    if (board[i][n - 1] === "O") DFS(i, n - 1);
  }
  for (let j = 0; j < n; j++) {
    if (board[0][j] === "O") DFS(0, j);
    if (board[m - 1][j] === "O") DFS(m - 1, j);
  }

  // Flip unconnected 'O's to 'X's and restore '#' to 'O'
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "O") board[i][j] = "X";
      if (board[i][j] === "#") board[i][j] = "O";
    }
  }
};
```
