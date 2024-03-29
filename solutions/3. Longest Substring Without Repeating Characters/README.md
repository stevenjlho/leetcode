# [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)

## Intuition

The sliding window dynamically adjusts its size as the iteration progresses, ensuring that it always contains a unique set of characters.

## Approach

1. If `s` is empty (`s.length === 0`), return `0` as there are no substrings to consider.
2. Initialize `map` to store characters and their latest index in the string.
3. Initialize `left` to `0` as the start index of the current substring and `max` to `0` to keep track of maximum length of substring found.
4. Loop through each character in `s` using `right` as the index.
   - If the current character is found in map (indicating a repeating character in the current substring), update `left` to the maximum of its current value or one more than the last index of the repeating character. This effectively moves the start of the substring to exclude the repeated character.
   - Store or update the current character `s[right]` and its index to `map`.
   - Update `max` with the larger of its current value or the length of the current substring (calculated as `right - left + 1`).
5. After the loop, `max` contains the length of the longest substring without repeating characters.

## Complexity

- Time complexity: O(n), where `n` is the length of the string `s`. The loop iterates through each character once.
- Space complexity: O(min(n, m)), where `m` is the size of the character set. The map's size is limited by the smaller of the string length and the character set.

## Code

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0; // Handle empty string

  let map = new Map(); // HashMap to store characters and their indices

  let left = 0; // Start index of current substring
  let max = 0; // Max length of substring found

  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      // If character is repeated, update start of substring
      left = Math.max(left, map.get(s[right]) + 1);
    }
    map.set(s[right], right); // Update or add character's index
    max = Math.max(max, right - left + 1); // Update max length
  }

  return max; // Return the max length found
};
```
