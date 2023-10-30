# [383. Ransom Note](https://leetcode.com/problems/ransom-note/description/)

## Intuition

We can check if a ransom note can be constructed from a magazine by using a map to track how often each letter appears in the magazine. By comparing these counts with the frequency of each letter in the ransom note, we can determine if the magazine contains all the necessary letters.

## Approach

1. Initialize a map `chars` to store the frequency of each unique letter found in the magazine.
2. Iterate through the magazine's letters, updating the frequency count in `chars` for each letter encountered.
3. Iterate through the letters of the ransom note to check if each letter can be matched in the `chars` hashmap.
4. When a letter from the ransom note is found in `chars`, decrement its frequency by 1 to simulate using that letter.
5. If at any point a required letter is not found or is equal to `0`, return `false`, as the ransom note cannot be constructed.
6. If the entire ransom note is processed without issues, return `true`.

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
      // Character not available or count is zero
      return false;
    }

    // Use one occurrence of the character
    chars.set(char, chars.get(char) - 1);
  }

  // Ransom note can be successfully constructed
  return true;
};
```
