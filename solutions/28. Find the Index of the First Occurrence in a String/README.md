# [28. Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/)

# Brute-Force

## Intuition

The approach is straightforward and brute force, checking each potential starting point in `haystack` to see if `needle` matches there.

## Approach

1. If `needle` is an empty string, return `0` as per the problem's convention, since an empty string is always found at the beginning of any string.
2. Loop through `haystack` with an index `i`, but only up to `haystack.length - needle.length`, as going further would mean the remaining substring is shorter than `needle`.
3. For each starting position `i` in `haystack`, iterate through `needle` and compare each character to the corresponding character in `haystack` starting from `i`. Continue as long as characters match.
4. If the end of `needle` is reached (`matchIndex == needle.length`), it means `needle` is fully matched in `haystack` starting at `i`. Return `i` as the starting index.
5. If the loop completes without finding a match, return `-1` to indicate that `needle` is not a substring of `haystack`.

## Complexity

- Time complexity: O((N - M) \* M), where `N` is the length of `haystack` and `M` is the length of `needle`. For each of the `N - M + 1` starting positions, up to `M` comparisons are made.
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
  // Return 0 for an empty needle, as an empty string is found at the beginning of any string
  if (needle === "") return 0;

  // Iterate through each character in haystack until there's enough room for needle to fit
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let matchIndex = 0; // Initialize matchIndex to track matching characters in needle

    // Continue comparing characters in haystack and needle until they mismatch or needle is fully matched
    while (
      matchIndex < needle.length &&
      haystack[i + matchIndex] === needle[matchIndex]
    ) {
      matchIndex++; // Move to the next character in needle
    }

    // If all characters of needle match in haystack starting at index i, return i
    if (matchIndex == needle.length) {
      return i;
    }
  }

  // If needle is not found in haystack, return -1
  return -1;
};
```

# KMP

// Todo
