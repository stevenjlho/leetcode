# [695. Max Area of Island](https://leetcode.com/problems/max-area-of-island/description/)

## Intuition

We explore each cell marked as '1' (land) using Depth-First Search (DFS), calculating the area of each island and keeping track of the maximum.

## Approach

1.  Initialize a variable `maxArea` to store the maximum area found.
2.  Loop through each cell in the grid:
    - If a cell contains `1`, it's part of an island. This triggers a DFS call to explore this island fully.
    - After each DFS call, update `maxArea` if the calculated area is larger.
3.  Depth-First Search (DFS) Function - `getArea`:
    - Check for out-of-bounds conditions or if the current cell is water (`0`). If so, return `0` as there's no island area to add.
    - Set the current cell (`grid[i][j]`) to `0` to avoid revisiting.
    - Explore all four directions (up, down, left, right) from the current cell. The sum of `1` (for the current cell) and the areas returned from these recursive calls gives the total area of the island.

## Complexity

- Time complexity: O(MxN), where M is the number of rows and N is the number of columns in the grid. Each cell is visited at most once.
- Space complexity: O(MxN) in the worst case for the recursion stack when the grid is filled with land. The space complexity can be O(min(M,N)) due to the height of the recursion stack in typical cases.

## Code

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let maxArea = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        // Found a new island, start DFS
        let area = getArea(grid, i, j);
        maxArea = Math.max(maxArea, area); // Update max area if necessary
      }
    }
  }
  return maxArea; // Largest island area
};

/**
 * DFS to calculate the area of an island.
 * @param {number[][]} grid - The grid representing the map.
 * @param {number} i - The row index.
 * @param {number} j - The column index.
 * @return {number} - The area of the island.
 */
var getArea = function (grid, i, j) {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[0].length ||
    grid[i][j] === 0
  ) {
    return 0; // Base case: out-of-bounds or water cell
  }

  grid[i][j] = 0; // Mark cell as visited
  // Calculate area by exploring all adjacent cells
  return (
    1 +
    getArea(grid, i + 1, j) +
    getArea(grid, i - 1, j) +
    getArea(grid, i, j + 1) +
    getArea(grid, i, j - 1)
  );
};
```
