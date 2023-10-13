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

1. We begin by checking for an edge case: when the input array `strs` is empty. If it's empty, we return an empty string as there is no common prefix.
2. We initialize the `prefix` variable with the first string in the array, assuming that this string is the common prefix.
3. We then iterate through the remaining strings in the array, starting from the second string (index 1).
4. In each iteration, we call the `lcp` function to find the common prefix between the current `prefix` and the current string from the array.
5. If the `lcp` function returns an empty string, it means there is no common prefix with the current string, and we break out of the loop because there cannot be a common prefix with other strings either.
6. If the `lcp` function returns a valid common prefix, we update the `prefix` variable with this new common prefix.
7. We repeat steps 4-6 for all strings in the array.
8. Finally, we return the `prefix`, which now contains the longest common prefix shared by all strings in the array.

**_Used charAt instead of indexing with brackets to avoid possible issues with empty strings._**

## Complexity

- Time complexity: O(N\*M), where N is the number of strings (length of strs), and M is the average length of the strings.
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

    // If the prefix becomes empty, there's no common prefix left, so break the loop.
    if (!prefix) {
      break;
    }
  }

  return prefix;
};

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var lcp = function (str1, str2) {
  // Calculate the minimum length to avoid index out of bounds.
  const length = Math.min(str1.length, str2.length);
  let index = 0;

  // Iterate to find the common prefix characters.
  while (index < length && str1.charAt(index) === str2.charAt(index)) {
    index++;
  }

  // Return the common prefix up to the index.
  return str1.slice(0, index);
};
```
