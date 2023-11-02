[14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/description/)

# Sort

## Intuition

The key is sort the array and compare the first and last element, the code is able to find the common prefix that would be shared by all strings in the array.

## Approach

1. Sort the input array of strings to bring lexicographically similar strings together.
2. Initialize `first` to the first element of the sorted array and `last` to the last element.
3. Initialize `ans` as 0, which tracks the length of the longest common prefix.
4. Use a while loop to iterate while `ans` is less than the length of both `first` and `last`.
5. Within the loop, compare the characters at the same index in `first` and `last`. If they are equal, increment `ans` by 1.
6. If characters are not equal, break out of the loop as the common prefix ends here.
7. Return the substring of `first` starting from the first character up to the length of the common prefix `ans`.

## Complexity

- Time complexity: O(Nlog(N) + M)
- Space complexity: O(1), we are not using any extra space.

## Code

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // Sort the input array of strings to bring lexicographically similar strings together.
  strs.sort();

  const first = strs[0];
  const last = strs[strs.length - 1];
  let ans = 0;

  while (ans < first.length && ans < last.length) {
    // Within the loop, compare the characters at the same index in `first` and `last`.
    if (first.charAt(ans) === last.charAt(ans)) {
      ans++;
    } else {
      // If characters are not equal, break out of the loop as the common prefix ends here.
      break;
    }
  }

  // Return the substring of `first` starting from the first character up to the length of the common prefix `ans`.
  return first.substring(0, ans);
};
```

# Horizontal comparison

## Intuition

Our approach is to use the first string as the initial prefix and iteratively update it by comparing it with other strings in the array.

## Approach

1. If it's empty, we return an empty string as there is no common prefix.
2. We initialize the `prefix` with the first string in the `strs` array. This will serve as our starting point.
3. We then iterate through the remaining strings in the array. For each string:
   - We update the `prefix` by determining the LCP of the current `prefix` and the `s[i]` using the helper function `lcp`.
   - If at any point the `prefix` becomes empty, we break out of the loop. An empty `prefix` means no common prefix exists among the strings.
4. The purpose of the `lcp` function is to determine the longest common prefix between two strings, `str1` and `str2`.

   - We begin by determining the minimum length between the two strings to ensure we don't run into an out-of-bounds error during iteration.
   - We then iterate over both strings until we find characters that don't match or until we've checked all characters up to the minimum length.
   - The moment we find non-matching characters or reach the end of our iteration, we know the common prefix between the two strings and can return it.

5. After processing all strings, the `prefix` variable contains the longest common prefix among all the strings in the array, and we return it.

## Complexity

- Time complexity: O(S \* min(N, M)), where N and M are the lengths of the two strings being compared, where S is the number of strings in the array.
- Space complexity: O(1), we are not using any extra space.

## Code

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // Handle the edge case of an empty input array.
  if (strs.length === 0) {
    return "";
  }

  // Initialize the prefix with the first string in the array.
  let prefix = strs[0];

  // Iterate through the remaining strings in the array.
  for (let i = 1; i < strs.length; i++) {
    // Update the prefix by finding the common prefix with the current string.
    prefix = lcp(prefix, strs[i]);

    // If the prefix is empty, there is no common prefix.
    if (prefix === "") break;
  }

  return prefix;
};

/**
 * A helper function to find the longest common prefix between two strings.
 * @param {string} str1
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var lcp = function (str1, str2) {
  // Calculate the minimum length to avoid index out of bounds.
  const length = Math.min(str1.length, str2.length);
  let index = 0;

  // Iterate until a mismatch is found or the end of the shorter string is reached.
  while (index < minLength && str1[index] === str2[index]) {
    index++;
  }

  // Return the common prefix up to the index.
  return str1.substring(0, index);
};
```
