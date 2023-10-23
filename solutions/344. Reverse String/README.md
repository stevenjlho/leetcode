# [344. Reverse String](https://leetcode.com/problems/reverse-string/description/)

## Intuition

To reverse a string in-place, we can use two pointers: one starting at the beginning and another at the end of the array, swapping their elements until they meet in the middle.

## Approach

1.  Initialize two pointers: one (`i`) at the beginning of the array and the other (`j`) at the end.
2.  Use a loop to iterate through the array:
    - Temporarily store the character at the `i`th position in a variable, `temp`.
    - Replace the character at the `i`th position with the character at the `j`th position.
    - Assign the temporarily stored character (`temp`) to the `j`th position.
    - Move `i` one step forward and `j` one step backward.
3.  Stop the iteration once `i` reaches or surpasses the midpoint of the array, ensuring that each pair of characters is swapped only once.

## Complexity

- Time complexity: O(n), where n is the length of the string s.
- Space complexity: O(1), as we are only using a constant amount of space for the temporary variable temp.

## Code

```javascript
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  // Iterate from the beginning (i) and end (j) of the array towards the middle.
  for (let i = 0, j = s.length - 1; i < s.length / 2; i++, j--) {
    // Use a temporary variable (temp) to store the character at index i.
    let temp = s[i];
    // Replace the character at index i with the character at index j.
    s[i] = s[j];
    // Replace the character at index j with the character in the temporary variable (temp).
    s[j] = temp;
  }
};
```
