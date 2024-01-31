# [79. Word Search](https://leetcode.com/problems/word-search/description/)

## Intuition

The core idea is to traverse the board, character by character, and backtrack whenever the current path does not lead to the solution, ensuring all possibilities are explored.

## Approach

1. Check if the board is valid. If not, return false immediately.
2. Define a DFS function that will be used to explore the board. This function takes the current position (i, j) on the board and the remaining part of the word to be matched.
   - If the remaining word is empty, it means the entire word has been found, so return true.
   - Validate the current position (i, j) to ensure it's within the board's bounds and matches the current character needed for the word. If not, backtrack by returning false.
   - Temporarily mark the current position on the board as visited (e.g., by setting the cell to "#") to avoid revisiting it in the immediate recursive calls.
   - Recursively call the DFS function for all four directions (up, down, left, right) from the current position, each time with the next character in the word.
   - Restore the original character at the board position to allow for future searches.
   - If any of the recursive calls return true, propagate this result upwards, indicating the word exists on the board.
3. Iterate over each cell in the board as a potential starting point for the DFS search.
   - If the DFS search starting from a particular cell returns true, it means the word can be formed starting from that cell, so return true for the entire function.
4. If none of the starting points lead to a successful search, return false, indicating the word does not exist on the board.## Complexity

- Time Complexity: O(M_N_4^L), where M and N are the dimensions of the board, and L is the length of the word to be matched. For each cell, the algorithm performs a DFS search and, in the worst case, explores all 4 directions repeatedly for each character of the word.
- Space Complexity: O(L) due to the recursive call stack, where L is the length of the word. In the worst case, the depth of recursion could be as deep as the length of the word.

## Code

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var exist = function (board, word) {
  if (!board || !board.length) return false;

  var dfs = function (i, j, remainingWord) {
    // Base case: if no characters left, word is found
    if (remainingWord.length === 0) return true;

    // Check boundaries and character match
    if (
      i < 0 ||
      i >= board.length ||
      j < 0 ||
      j >= board[0].length ||
      remainingWord[0] !== board[i][j]
    )
      return false;

    const originalChar = board[i][j]; // Store original character
    board[i][j] = "#"; // Mark current cell as visited

    // Explore all possible directions
    const res =
      dfs(i + 1, j, remainingWord.slice(1)) ||
      dfs(i - 1, j, remainingWord.slice(1)) ||
      dfs(i, j + 1, remainingWord.slice(1)) ||
      dfs(i, j - 1, remainingWord.slice(1));

    board[i][j] = originalChar; // Restore original character
    return res; // Return result of DFS exploration
  };

  // Try to find the word starting from each cell
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(i, j, word)) return true; // If word is found, return true
    }
  }

  return false; // Word not found
};
```
