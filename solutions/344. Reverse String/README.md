# [344. Reverse String](https://leetcode.com/problems/reverse-string/description/)

## Intuition

To reverse a string in-place, we can use two pointers: one starting at the beginning and another at the end of the array, swapping their elements until they meet in the middle.

## Approach

1. Start with two pointers, `i` at the beginning (index 0) and `j` at the end (index `s.length - 1`) of the string array.
2. Use a loop where `i` increments and `j` decrements after each iteration.
   - Temporarily store the character at the `i`th position in a variable, `temp`.
   - Swap the elements at the `i`th and `j`th positions using a temporary variable.
   - Continue swapping until `i` is less than `j`. Once `i` equals or surpasses `j`, every character pair has been swapped, and the string is reversed.

## Complexity

- Time complexity: O(n/2) ≈ O(n), where n is the length of the string s. Each element is visited once, but only half the iterations are needed as two elements are processed per iteration.
- Space complexity: O(1), as the space used is constant and does not depend on the input string's size.

## Code

```javascript
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  // Use two pointers, starting from the beginning and end of the array.
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    // Temporary variable to hold the character at the start pointer.
    let temp = s[i];
    // Swap characters at the start and end pointers.
    s[i] = s[j];
    s[j] = temp;
  }
  // The array 's' is modified in-place to be the reversed string.
};
```
