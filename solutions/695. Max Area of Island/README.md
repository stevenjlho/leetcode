# [695. Max Area of Island](https://leetcode.com/problems/max-area-of-island/description/)

## Intuition

We explore each cell marked as '1' (land) using Depth-First Search (DFS), calculating the area of each island and keeping track of the maximum.

## Approach

1.  Initialize `maxArea` to 0 to keep track of the largest island area found.
2.  Loop through each cell in the grid:
    - If the cell value is '1', it's part of an unvisited island.
    - Use DFS (via `getArea`) starting from this cell to calculate the island's area.
    - Update `maxArea` with the maximum of `maxArea` and the area returned by `getArea`.
3.  In the `getArea` function, which performs DFS:
    - Check if the current cell is out of bounds or water ('0'); if so, return 0.
    - Mark the current cell as visited by setting it to '0'.
    - Recursively explore adjacent cells (up, down, left, right) and sum their areas.
    - Return the sum of the areas from all directions plus 1 for the current cell.

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
        // Start DFS from this cell
        let area = getArea(grid, i, j);
        maxArea = Math.max(maxArea, area);
      }
    }
  }
  return maxArea;
};

/**
 * DFS to calculate the area of an island.
 * @param {number[][]} grid - The grid representing the map.
 * @param {number} i - The row index.
 * @param {number} j - The column index.
 * @return {number} - The area of the island.
 */
var getArea = function (grid, i, j) {
  // Boundary check for the grid
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[0].length ||
    grid[i][j] === 0
  )
    return 0;

  // Mark the cell as visited
  grid[i][j] = 0;
  // Count the current cell and recursively explore adjacent cells
  return (
    1 +
    getArea(grid, i + 1, j) +
    getArea(grid, i - 1, j) +
    getArea(grid, i, j + 1) +
    getArea(grid, i, j - 1)
  );
};
```
