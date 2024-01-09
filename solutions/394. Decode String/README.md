# [394. Decode String](https://leetcode.com/problems/decode-string/description/)

## Intuition

The idea is to build substrings as we encounter brackets and repeat them based on the preceding number, managing the nested structures via the stack.

## Approach

1. Initialize `stack` to keep track of previous substrings and repeat counts.
2. Initialize `curNum` to store the current number (repeat count).
3. Initialize `curString` to build the current substring.
4. Iterating through the string. We perform actions based on the type of `c` (digit, bracket, or letter).
    - If `c` is `'['`, push `curString` and `curNum` onto the stack and reset them for the next substring.
    - If `c` is `']'`, pop `num` (repeat count) and `prevString` from the stack. Repeat `curString` `num` times and concatenate with `prevString`.
    - If `c` is a digit, update `curNum` by shifting the current value by one decimal place to the left and adding the new digit.
    - If `c` is a letter, append it to `curString`.

5. After the loop, curString contains the fully decoded string, which is returned.

## Complexity

- Time complexity: O(n * k), where n is the length of the string and k is the average repeat count. Each character is processed once, and the repeated concatenation can be O(k) in the worst case.
- Space complexity: O(n), where n is the number of characters stored in the stack. This occurs when the input string contains nested encoded patterns.

## Code

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = []; // Stack for storing previous strings and repeat counts
  let curNum = 0; // Current repeat count
  let curString = ""; // Current substring being built

  for (let c of s) {
    if (c === "[") {
      // Start of a new encoded substring
      stack.push(curString);
      stack.push(curNum);
      
      // Reset them for the next substring
      curString = "";
      curNum = 0;
    } else if (c === "]") {
      // End of the current encoded substring
      let num = stack.pop(); // Repeat count for the current substring
      let prevString = stack.pop(); // Previous substring
      curString = prevString + curString.repeat(num); // Build the repeated substring
    } else if (isDigit(c)) {
      // Current character is a digit, update curNum
      curNum = curNum * 10 + parseInt(c);
    } else {
      // Current character is a letter, append to curString
      curString += c;
    }
  }
  return curString; // Return the fully decoded string
};

// Helper function to check if a character is a digit
function isDigit(ch) {
  return !isNaN(parseInt(ch));
}
```
