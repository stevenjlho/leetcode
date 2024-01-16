# [438. Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/description/)

## Intuition

The solution involves comparing character frequencies within a sliding currentWindowFreq of `s` against the frequencies in `p`. If they match, it signifies an anagram of `p` is found in `s`.

## Approach

1. If `s` is shorter than `p`, immediately return an empty array as an anagram is impossible.
2. Create two arrays, `patternFreq` and `currentWindowFreq`, each of size 26 (for each letter in the alphabet), initialized to 0. `patternFreq` stores the frequency of each character in `p`, and `currentWindowFreq` stores the frequency in the current currentWindowFreq of `s`.
3. Fill the `patternFreq` and `currentWindowFreq` arrays for the first currentWindowFreq of `s` (the first `pLength` characters).
4. If `patternFreq` matches `currentWindowFreq`, add 0 to the result array `ans`, indicating the start of an anagram at index 0.
5. Iterate through `s`, starting from `pLength`.
   - Update the `currentWindowFreq` frequency array: decrement the frequency of the outgoing character (the one moving out of the currentWindowFreq) and increment the incoming character.
   - Use `arraysEqual` to compare `patternFreq` and `currentWindowFreq`. If they match, add the start index of this currentWindowFreq (current index - length of `p` + 1) to `ans`.
6. Return the list of starting indices.
 

## Complexity

- Time complexity: O(n). The main loop iterates through the string `s`, where `n` is the length of `s`. 
- Space complexity: O(1). The space used by the algorithm is constant, as it only requires two fixed-size arrays (for the 26 lowercase English letters), regardless of the input size.

## Code

```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let sLength = s.length,
    pLength = p.length;
  if (sLength < pLength) return []; // Anagrams not possible if 's' is shorter than 'p'

  // Frequency arrays for characters in 'p' and the current currentWindowFreq in 's'
  let patternFreq = new Array(26).fill(0);
  let currentWindowFreq = new Array(26).fill(0);

  // Initialize the frequency arrays for the first currentWindowFreq of size 'pLength'
  for (let i = 0; i < pLength; i++) {
    patternFreq[p.charCodeAt(i) - "a".charCodeAt(0)]++;
    currentWindowFreq[s.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  let ans = []; // Array to store the starting indices of anagrams

  // Compare the frequency arrays for the first currentWindowFreq
  if (arraysEqual(patternFreq, currentWindowFreq)) ans.push(0);

  // Sliding the currentWindowFreq through 's'
  for (let i = pLength; i < sLength; i++) {
    // Update the currentWindowFreq frequencies
    currentWindowFreq[s.charCodeAt(i - pLength) - "a".charCodeAt(0)]--;
    currentWindowFreq[s.charCodeAt(i) - "a".charCodeAt(0)]++;

    // Check if the current currentWindowFreq is an anagram of 'p'
    if (arraysEqual(patternFreq, currentWindowFreq)) ans.push(i - pLength + 1);
  }

  return ans; // Return the list of starting indices
};

// Helper function to compare two frequency arrays
function arraysEqual(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
```
