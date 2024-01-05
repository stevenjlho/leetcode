# [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/description/)

## Intuition

Sorting the characters of each word allows us to use the sorted string as a key in a map, effectively grouping anagrams together.

## Approach

1. Create a map (`anagramMap`) to store groups of anagrams. The keys are sorted strings, and the values are arrays containing the original strings that match this sorted key.
2. Loop through each word in the input array `strs`.
   - Split each word into characters, sort them alphabetically, and then rejoin to form a key.
   - Check if the sorted word key is already in the map. If not present, initialize a new group (array) for this key.
   - Append the original word to the array associated with the sorted word key.
3. Extract the arrays of grouped anagrams from the map and return them as an array of arrays.

## Complexity

- Time complexity: O(NKlogK), where N is the number of strings in `strs`, and K is the maximum length of a string in `strs`. Each string is sorted in O(KlogK) time.
- Space complexity: O(NK), as in the worst case, the map needs to store all the words. Each word can be up to K characters long.

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
