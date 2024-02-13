# [131. Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/description/)

## Intuition

The core concept is to make a decision at every step about where to partition the string and then recursively explore the consequences of that decision.

## Approach

1. Start with an empty list `res` to store all valid palindromic partitions.
2. Define a helper function `isPalindrome` that checks if a given string is a palindrome by comparing it to its reverse.
3. Define the backtracking function `backtrack` with two parameters: `path` (the current list of palindromic substrings) and `start` (the current starting index for exploration in `s`).
   - If `start` equals the length of `s`, it means we've successfully partitioned the entire string, so we add the `path` to our `res`.
   - Iterate over the string from `start` to the end, creating a substring `currentSubstring` at each step.
   - If `currentSubstring` is a palindrome, add it to `path` and recursively call `backtrack` to explore further partitions from the next index.
   - After exploring with `currentSubstring` included, backtrack by removing the last substring from `path` to explore other possibilities.
4. Invoke `backtrack([], 0)` with an empty path and starting index 0 to generate all subsets.
5. After fully exploring all combinations, return the `res` containing all palindromic partitions.
## Complexity

- Time Complexity: O(n * 2^n), where n is the length of the string s. In the worst case, every substring of s is a palindrome, and we have to explore each possibility, leading to 2^n partitions. Additionally, checking if a substring is a palindrome takes O(n) time.
- Space Complexity: O(n), where n is the depth of the recursion stack, which in the worst case equals the length of the string `s`. The space used to store the `res` list is not considered for space complexity analysis as it's part of the output.

## Code

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var partition = function (s) {
  const res = [];

  // Helper function to check if a string is a palindrome
  function isPalindrome(str) {
    return str === str.split("").reverse().join("");
  }

  // Backtracking function to explore palindromic partitions
  function backtrack(path, start) {
    if (start === s.length) {
      // Base case: reached the end of string
      res.push([...path]); // Add current partition to the res
      return;
    }

    for (let i = start; i < s.length; i++) {
      const currentSubstring = s.slice(start, i + 1); // Generate current substring
      if (isPalindrome(currentSubstring)) {
        // Proceed if substring is palindrome
        path.push(currentSubstring); // Add substring to current path
        backtrack(path, i + 1); // Recurse with the current substring included
        path.pop(); // Backtrack to explore other partitions
      }
    }
  }

  backtrack([], 0); // Initialize backtracking
  return res; // Return all palindromic partitions
};
```
