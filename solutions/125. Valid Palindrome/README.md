# [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/description/)

## Intuition

We disregard non-alphanumeric characters and case sensitivity by iterating from both ends towards the center, comparing characters only when both are alphanumeric.

## Approach

1.  Immediately return true for an empty string since it's trivially a palindrome.
2.  Initialize two pointers, `start` and `last`, at the beginning and end of the string, respectively.
3.  Use a while loop to traverse the string from both ends inward.
4.  Inside the loop, increment `start` if the current character is not alphanumeric; similarly, decrement `last`.
5.  When both pointers are at alphanumeric characters, compare them, ignoring case.
    - If they don't match, return false.
    - If they match, move both pointers closer to the center.
6.  If the entire string is traversed without mismatch, return true as it's a palindrome.

## Complexity

- Time complexity: O(n), where n is the length of the string.
- Space complexity: O(1), since no additional space proportional to the input size is used.

## Code

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s === "") {
    return true; // An empty string is a palindrome.
  }

  let start = 0; // Starting index.
  let last = s.length - 1; // Ending index.

  while (start <= last) {
    if (!isLetterOrDigit(s.charAt(start))) {
      start++; // Skip non-alphanumeric at the start.
    } else if (!isLetterOrDigit(s.charAt(last))) {
      last--; // Skip non-alphanumeric at the end.
    } else {
      // Compare characters in a case-insensitive manner.
      if (s.charAt(start).toLowerCase() !== s.charAt(last).toLowerCase()) {
        return false; // Not a palindrome if mismatch found.
      }
      start++; // Move towards the middle after matching.
      last--;
    }
  }

  return true; // String is a palindrome if no mismatches are found.
};

/**
 * Helper function to check if a character is alphanumeric.
 * @param {char} char - The character to check.
 * @return {boolean}
 */
const isLetterOrDigit = (char) => {
  let code = char.charCodeAt(0);
  // Check if character code is numeric (0-9), uppercase A-Z, or lowercase a-z.
  return (
    (code > 47 && code < 58) ||
    (code > 64 && code < 91) ||
    (code > 96 && code < 123)
  );
};
```
