[14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/description/)

# Sort

## Intuition

The key is sort the array and compare the first and last element, the code is able to find the common prefix that would be shared by all strings in the array.

## Approach

1. Sort the input array of strings to bring lexicographically similar strings together.
2. Initialize `first` with the first string and `last` with the last string from the sorted array.
3. Set `ans` to zero, representing the length of the longest common prefix found so far.
4. Use a while loop to iterate while `ans` is less than the length of both `first` and `last`.
5. Compare the characters at the current index from `first` and `last`. If they match, increment `ans`.
6. Break the loop when a mismatch is encountered, indicating the end of the common prefix.
7. Return the substring of `first` starting from the first character up to the length of the common prefix `ans`.

## Complexity

- Time complexity: O(NlogN + M), where N is the number of strings and M is the length of the longest common prefix. The sort operation dominates the time complexity.
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

   - Utilize a helper function `lcp` to compute the LCP between two strings.
   - If the prefix is ever reduced to an empty string, we exit the loop early as this indicates there is no common prefix.

4. The purpose of the `lcp` function is to determine the longest common prefix between two strings, `str1` and `str2`.

   - Calculating the shortest length between the two to avoid exceeding string bounds during comparison.
   - Comparing characters of both strings up to the shortest length and stopping at the first mismatch. If they match, increment `index`.
   - Return the common prefix up to the index.

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
 * Helper function to find the longest common prefix between two strings. * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var lcp = function (str1, str2) {
  // Calculate the minimum length to avoid index out of bounds.
  const minLength = Math.min(str1.length, str2.length);
  let index = 0;

  // Iterate until a mismatch is found or the end of the shorter string is reached.
  while (index < minLength && str1.charAt(index) === str2.charAt(index)) {
    index++;
  }

  // Return the common prefix up to the index.
  return str1.substring(0, index);
};
```
