# [58. Length of Last Word](https://leetcode.com/problems/length-of-last-word/description/)

## Intuition

We can traverse the string from the end to the start, counting non-space characters until a space is encountered to find the length of the last word.

## Approach

1. Start by initializing a variable `count` to zero, which will store the length of the last word.
2. Traverse the string from its end towards its start.
3. If a space (`' '`) is encountered after counting non-space characters, return the count. This signifies the end of the last word.
4. Increment the `count` for every non-space character.
5. If the loop completes without returning a value (i.e., there were no spaces or the last word is the only word), return `count`.

## Complexity

- Time complexity: O(n), where n is the length of the string. In the worst case, the loop traverses the entire string.
- Space complexity: O(1), since only a constant amount of space (the count variable) is used regardless of the string's length.

## Code

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let count = 0; // Initialize a counter for the length of the last word

  for (let i = s.length - 1; i >= 0; i--) {
    // Return count if a space is encountered after counting non-space characters
    if (s[i] === " " && count > 0) {
      return count;
    }
    if (s[i] !== " ") {
      // Increment count for every non-space character
      count++;
    }
  }

  // If loop completes, return count (either the string has no spaces or the last word is the only word)
  return count;
};
```
