# [79. Word Search](https://leetcode.com/problems/word-search/description/)

## Intuition

The core idea is to traverse the board, character by character, and backtrack whenever the current path does not lead to the solution, ensuring all possibilities are explored.

## Approach

1. Check if the `board` is empty or null, return false immediately as the word cannot be found.
2. Define a DFS function that takes the current position (`row`, `col`) on the board and the current index in the word we are matching.
   - If the current index equals the length of the word, we have found the word, return true.
   - Validate the current position (row, col) to ensure it's within the board and the character matches the current character of the word.
   - Store the current character before marking the cell as visited, which ensures that the DFS algorithm can revert the board to its original state after exploring each path, allowing for accurate and independent path explorations.
   - Temporarily mark the current cell as visited by changing its value to avoid revisiting it in the immediate recursive calls.
   - Recursively call DFS for the next character in all four directions.
   - Restore the original character at the board position to allow for future searches.
   - If any of the recursive calls return true, propagate this result upwards, indicating the word exists on the board.
3. Iterate over each cell of the board, using it as the starting point for DFS.
   - If DFS returns true from any starting point, the word exists on the board, so return true.
4. If none of the starting points lead to a successful search, return false, indicating the word does not exist on the board.

## Complexity
- Time Complexity: O(M\*N\*4^L), where M and N are the dimensions of the board, and L is the length of the word to be matched.  In the worst case, the algorithm might explore all 4 directions for each character of the word.
- Space Complexity: O(L), due to the maximum depth of the recursion call stack being the length of the word. In the worst case, the recursion goes as deep as the number of characters in the word.

## Code

```javascript
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function (board, word) {
  if (!board || !board.length) return false; // Early exit if board is empty

  const dfs = function (row, col, index) {
    if (index === word.length) return true; // Word found
    if (
      row < 0 ||
      row >= board.length ||
      col < 0 ||
      col >= board[0].length ||
      board[row][col] !== word[index]
    )
      return false; // Out of bounds or character mismatch

    let temp = board[row][col]; // Store current character
    board[row][col] = "#"; // Mark as visited

    // Explore all four directions
    let found =
      dfs(row + 1, col, index + 1) ||
      dfs(row - 1, col, index + 1) ||
      dfs(row, col + 1, index + 1) ||
      dfs(row, col - 1, index + 1);

    board[row][col] = temp; // Restore character (backtrack)
    return found; // Return result
  };

  // Try to find the word starting from each cell
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(i, j, 0)) return true; // Word found
    }
  }

  return false; // Word not found on the board
};
```
