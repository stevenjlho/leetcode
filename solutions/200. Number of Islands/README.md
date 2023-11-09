# [200. Number of Islands](https://leetcode.com/problems/number-of-islands/description/)

## Intuition

We can perform a Depth-First Search (DFS) starting from each unvisited land cell ('1'), marking all connected lands as visited by sinking the islands, hence turning them into '0's.

## Approach

1.  Initialize a counter to keep track of the number of islands.
2.  Traverse the grid row by row and column by column.
3.  When encountering a '1', increment the island counter and invoke the DFS helper function to mark the entire island.
4.  The `DFSMarking` function recursively explores and sinks all connected land cells (marked as '1') by turning them into '0's.
5.  Ensure the recursive DFS calls are within the grid bounds and only continue with cells that contain '1'.
6.  After DFS execution, all cells of the current island are marked as '0', preventing redundant counts.
7.  Continue the grid traversal until all cells have been processed.


## Complexity

- Time Complexity: O(MxN), where M is the number of rows and N is the number of columns in the grid. We potentially visit every cell once during the DFS.
- Space Complexity: O(MxN) in the worst case where the grid is full of land and the call stack grows to MxN. In practice, due to DFS, the space complexity is O(min(M, N)) because of the stack's height.

## Code

```javascript
/**
 * @param {character[][]} grid - The input grid representing the map.
 * @return {number} - The total number of islands.
 */
var numIslands = function (grid) {
  // Base case for empty grid
  if (grid.length === 0) return 0;

  let count = 0; // Counter for number of islands

  // DFS function to mark visited cells
  const DFSMarking = (grid, i, j) => {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[0].length ||
      grid[i][j] !== "1"
    ) {
      // If out of bounds or not land, exit
      return;
    }

    // Sink the land cell to mark it as visited
    grid[i][j] = "0";
    // Recursively call DFS in all four directions
    DFSMarking(grid, i + 1, j);
    DFSMarking(grid, i - 1, j);
    DFSMarking(grid, i, j + 1);
    DFSMarking(grid, i, j - 1);
  };

  // Loop through each cell in the grid
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      // If cell is '1', it is part of an island
      if (grid[i][j] === "1") {
        // Perform DFS to mark all cells of the current island
        DFSMarking(grid, i, j);
        // Increment island count
        count++;
      }
    }
  }

  // Return the total number of islands found
  return count;
};
```
