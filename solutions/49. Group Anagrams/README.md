# [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/description/)

## Intuition

The key idea is to explore consecutive numbers starting from those that are the beginning of a potential sequence by using a `Set`.

## Approach

1. Create a map (`anagramMap`) is created to store groups of anagrams. The keys are the sorted versions of the words, ensuring all anagrams have the same key.
2. Iterate through the `strs`
   - For each word in the input array `strs`, it's split into characters, sorted, and then joined back. This sorted word serves as the key in `anagramMap`.
   - If the sorted word is not already a key in `anagramMap`, it's added with an empty array to store words that are anagrams of each other.
   - The original word is added to the array corresponding to its sorted key in the map.
3. The function returns an array of values from `anagramMap`, which are arrays of grouped anagrams.

## Complexity

- Time complexity: O(NKlogK), where N is the number of strings in `strs`, and K is the maximum length of a string in `strs`. Each string is sorted in O(KlogK) time.
- Space complexity: O(NK), as the map needs to store each string. In the worst case, all strings are different, requiring space proportional to the total number of characters across all strings.

## Code

```javascript
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let anagramMap = new Map();

  for (let word of strs) {
    // Sort the characters of the word to create a key for the anagrams
    let sortedWord = word.split("").sort().join("");

    // If the sorted word isn't in the map, add it with an empty array
    if (!anagramMap.has(sortedWord)) {
      anagramMap.set(sortedWord, []);
    }

    // Add the original word to the array for this sorted key
    anagramMap.get(sortedWord).push(word);
  }

  // Convert the map values (arrays of anagrams) into an array
  return Array.from(anagramMap.values());
};
```
