[14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/description/)

# Intuition

The key is sort the array and compare the first and last element, the code is able to find the common prefix that would be shared by all strings in the array.

# Approach

1. Sort the input array of strings to bring lexicographically similar strings together.
2. Initialize `first` to the first element of the sorted array and `last` to the last element.
3. Initialize `ans` as 0, which tracks the length of the longest common prefix.
4. Use a while loop to iterate while `ans` is less than the length of both `first` and `last`.
5. Within the loop, compare the characters at the same index in `first` and `last`. If they are equal, increment `ans` by 1.
6. If characters are not equal, break out of the loop as the common prefix ends here.
7. Return the substring of `first` starting from the first character up to the length of the common prefix `ans`.

# Complexity

- Time complexity: O(Nlog(N) + M)
- Space complexity: O(1), we are not using any extra space.

# Code

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
