# [797. All Paths From Source to Target](https://leetcode.com/problems/all-paths-from-source-to-target/description/)

## Intuition

By using DFS, we explore all potential paths from the source to the target in a directed acyclic graph, backtracking upon reaching the target or when no further progression is possible.

## Approach

1.  Initialize a `res` array to store the successful paths and a `path` array to keep track of the current exploration path.
2.  Implement a `dfs` function that:
    - Records the current `path` to `res` if the current node (`start`) is the target.
    - Iterates over all the neighbors of the current node, adding each to `path`, and recursively calls `dfs` for each neighbor.
    - Performs backtracking by removing the last node from `path` after all paths through that node have been explored.

3.  Initiate DFS from node 0, adding it to the `path`.
4.  Invoke the `dfs` function with the starting node.
5.  Return the `res` array, which contains all discovered paths from source to target.

## Complexity

- Time complexity: O(2^N \* N), where N is the number of nodes in the graph. In the worst-case scenario, each node could be part of several paths, leading to an exponential number of paths to explore and record.
- Space complexity: O(N \* P), where N is the depth of the recursion stack (which corresponds to the length of the longest path) and P is the number of paths stored in res.

## Code

```javascript
/**
 * @param {number[][]} graph - The adjacency list representation of the graph.
 * @return {number[][]} - All possible paths from node 0 to the last node.
 */
var allPathsSourceTarget = function (graph) {
  let res = [], // Array to store all paths
    path = []; // Array to keep track of the current path

  const dfs = (start) => {
    // If the current node is the target, add the current path to results
    if (start === graph.length - 1) {
      res.push([...path]);
      return;
    }
    // Explore each neighbor of the current node
    for (let i = 0; i < graph[start].length; i++) {
      path.push(graph[start][i]); // Add the neighbor to the current path
      dfs(graph[start][i]); // Recursively explore the neighbor
      path.pop(); // Remove the neighbor from the path to backtrack
    }
  };

  path.push(0); // Start with the first node in the path
  dfs(0); // Begin DFS with the first node
  return res; // Return all paths found
};
```
