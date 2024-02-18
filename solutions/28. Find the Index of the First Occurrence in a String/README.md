# [28. Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/)

# Brute-Force
## Intuition

To find the first occurrence of `needle` in `haystack`, we can slide a window over `haystack` and compare each substring with `needle`.

## Approach

1.  Loop through `haystack` with an index `i`, but only up to `haystack.length - needle.length`, as going further would mean the remaining substring is shorter than `needle`.
2.  For each position `i`, use another index `j` to compare characters of `haystack` and `needle`. The comparison starts at the current `i`th position of `haystack` and checks if each subsequent character matches with `needle[j]`.
3.  If `j` reaches the length of `needle`, it means a full match of `needle` is found in `haystack` starting at position `i`. Return `i` in this case.
4.  If the loop completes without finding a match, return `-1` to indicate that `needle` is not a substring of `haystack`.

## Complexity

- Time complexity: O(n\*m), where `n` is the length of `haystack` and `m` is the length of `needle`. In the worst case, the algorithm may have to iterate through the entire `haystack` for each character in `needle`.
- Space complexity: O(1), as the space used is constant and does not depend on the size of the input strings.

## Code

```javascript
/**
 * Finds the index of the first occurrence of 'needle' in 'haystack'.
 * @param {string} haystack - The string to search within.
 * @param {string} needle - The substring to search for.
 * @return {number} - The index of the first occurrence of 'needle' in 'haystack', or -1 if 'needle' is not part of 'haystack'.
 */
var strStr = function (haystack, needle) {
  // Loop through haystack but only until there's room for needle to fit
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let j = 0;
    // Compare characters of haystack and needle
    while (j < needle.length && haystack[i + j] === needle[j]) {
      j++;
    }

    // If full needle is found in haystack, return the starting index
    if (j == needle.length) {
      return i;
    }
  }

  // Needle not found in haystack
  return -1;
};
```
# KMP
// Todo