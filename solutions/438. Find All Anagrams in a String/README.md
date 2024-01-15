# [438. Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/description/)

## Intuition

The solution involves comparing character frequencies within a sliding window of `s` against the frequencies in `p`. If they match, it signifies an anagram of `p` is found in `s`.

## Approach

1. If `s` is shorter than `p`, immediately return an empty array as an anagram is impossible.
2. Create two arrays, `freqP` and `window`, each of size 26 (for each letter in the alphabet), initialized to 0. `freqP` stores the frequency of each character in `p`, and `window` stores the frequency in the current window of `s`.
3. Fill the `freqP` and `window` arrays for the first window of `s` (the first `pLen` characters).
4. If `freqP` matches `window`, add 0 to the result array `ans`, indicating the start of an anagram at index 0.
5. Iterate through `s`, starting from `pLen`.
   - Update the `window` frequency array: decrement the frequency of the outgoing character (the one moving out of the window) and increment the incoming character.
   - Use `arraysEqual` to compare `freqP` and `window`. If they match, add the start index of this window (current index - length of `p` + 1) to `ans`.
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
  let sLen = s.length,
    pLen = p.length;
  if (sLen < pLen) return []; // Anagrams not possible if 's' is shorter than 'p'

  // Frequency arrays for characters in 'p' and the current window in 's'
  let freqP = new Array(26).fill(0);
  let window = new Array(26).fill(0);

  // Initialize the frequency arrays for the first window of size 'pLen'
  for (let i = 0; i < pLen; i++) {
    freqP[p.charCodeAt(i) - "a".charCodeAt(0)]++;
    window[s.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  let ans = []; // Array to store the starting indices of anagrams

  // Compare the frequency arrays for the first window
  if (arraysEqual(freqP, window)) ans.push(0);

  // Sliding the window through 's'
  for (let i = pLen; i < sLen; i++) {
    // Update the window frequencies
    window[s.charCodeAt(i - pLen) - "a".charCodeAt(0)]--;
    window[s.charCodeAt(i) - "a".charCodeAt(0)]++;

    // Check if the current window is an anagram of 'p'
    if (arraysEqual(freqP, window)) ans.push(i - pLen + 1);
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
