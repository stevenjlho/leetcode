# [392. Is Subsequence](https://leetcode.com/problems/is-subsequence/description/)

## Intuition

To determine if `s` is a subsequence of `t`, we iterate through `t` and verify if each character in `s` appears in the same order.

## Approach

1. Return `false` if `s` is longer than `t` (as it cannot be a subsequence), and `true` if `s` is empty (as an empty string is a subsequence of any string).
2. Use a pointer `subsequence` to keep track of the current position in `s`.
3. Iterate through `t`. For each character:
   - Compare it with the character in `s` at the position indicated by `subsequence`.
   - If they match, increment `subsequence` to check the next character in `s`.
4. After the loop, check if `subsequence` equals the length of `s`. If yes, it means all characters of `s` were found in `t` in order, so `s` is a subsequence of `t`.

## Complexity

- Time complexity: O(n), where n is the length of `t`. We iterate through `t` once.
- Space complexity: O(1). We use only a fixed number of variables.

## Code

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  // Early return if s is longer than t
  if (s.length > t.length) return false;

  // An empty string is always a subsequence
  if (s.length === 0) return true;

  let subsequence = 0; // Pointer for the current character in s

  // Iterate through string t
  for (let i = 0; i < t.length; i++) {
    // Compare characters and move pointer in s if they match
    if (s[subsequence] === t[i]) {
      subsequence++;
    }
  }

  // Check if all characters of s were found in t
  return subsequence === s.length;
};
```
