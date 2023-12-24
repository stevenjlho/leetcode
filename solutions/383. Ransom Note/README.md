# [383. Ransom Note](https://leetcode.com/problems/ransom-note/description/)

## Intuition

Check if `magazine` contains enough instances of each character in `ransomNote`.

## Approach

1. Initialize a map `chars` to store the frequency of each character in `magazine`.
2. Loop through each character in `magazine`.
   - Increment the frequency count for each character in `chars`. If a character is not already in the map, it is initialized to `1`; otherwise, the existing count is incremented.
3. Loop through each character in `ransomNote` to check if the ransom note can be constructed using the chars map.
   - If it is not in `chars` or its count in `chars` is `0`, return `false`. This condition implies that `magazine` does not have enough instances of the character to construct `ransomNote`.
   - Otherwise, decrement the count of the character in `chars`. This reflects using one instance of the character from `magazine`.
4. If the entire ransom note is processed without issues, return `true`.

## Complexity

- Time complexity: O(m + n), where m is the length of the magazine and n is the length of the ransom note. We iterate through both strings once.
- Space complexity: O(m), where m is the number of unique characters in the magazine.

## Code

```javascript
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let chars = new Map(); // Using Map to store character counts

  // Populate the map with characters from the magazine
  for (const char of magazine) {
    chars.set(char, (chars.get(char) || 0) + 1);
  }

  // Check if the ransom note can be constructed using the chars map
  for (const char of ransomNote) {
    if (!chars.has(char) || chars.get(char) === 0) {
      // If the character is not available or its count is zero, return false
      return false;
    }

    // Decrement the count of the character to reflect its usage
    chars.set(char, chars.get(char) - 1);
  }

  // Ransom note can be successfully constructed
  return true;
};
```
