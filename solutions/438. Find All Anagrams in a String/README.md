# [438. Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/description/)

## Intuition

By comparing the frequency of characters in the current window of `s` with the frequency in `p`, we can identify if an anagram of `p` exists in that window.

## Approach

1. If the length of `s` is less than `p`, return an empty array as no anagrams are possible.
2. Create two frequency arrays, `patternFreq` and `currentWindowFreq`, each with a length of 26 (for each lowercase English letter), initialized to 0.
3. Populate these arrays with the frequency of characters in `p` and the first window in `s` (first `pLength` characters).
4. Use the `arraysEqual` function to compare `patternFreq` with `currentWindowFreq`. If they match, add the index `0` to `ans`.
5. Slide the window through `s`, starting from index `pLength` because the first window (from index 0 to pLength - 1) has already been analyzed.
   - Update `currentWindowFreq` by decrementing the frequency of the character going out of the window and incrementing the frequency of the incoming character.
   - Compare `patternFreq` with `currentWindowFreq`. If they match, add the start index of the current window (`i - pLength + 1`) to `ans`.
6. Return the `ans` array containing the starting indices of all anagrams of `p` in `s`.

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
  if (sLength < pLength) return []; // No anagrams if 's' is shorter than 'p'

  let patternFreq = new Array(26).fill(0); // Frequency of characters in 'p'
  let currentWindowFreq = new Array(26).fill(0); // Frequency in current window of 's'

  // Fill the frequency arrays for the first window
  for (let i = 0; i < pLength; i++) {
    patternFreq[p.charCodeAt(i) - "a".charCodeAt(0)]++;
    currentWindowFreq[s.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  let ans = []; // Store starting indices of anagrams

  // Check for anagram in the first window
  if (arraysEqual(patternFreq, currentWindowFreq)) ans.push(0);

  // Slide the window through 's'
  for (let i = pLength; i < sLength; i++) {
    // Update frequencies for the new window
    currentWindowFreq[s.charCodeAt(i - pLength) - "a".charCodeAt(0)]--;
    currentWindowFreq[s.charCodeAt(i) - "a".charCodeAt(0)]++;

    // Check for anagram in the current window
    if (arraysEqual(patternFreq, currentWindowFreq)) ans.push(i - pLength + 1);
  }

  return ans; // Return the list of starting indices
};

// Compare two frequency arrays
function arraysEqual(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
```
