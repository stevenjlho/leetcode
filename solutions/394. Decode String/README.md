# [394. Decode String](https://leetcode.com/problems/decode-string/description/)

## Intuition

The core concept is to use a stack to keep track of previously encountered substrings and their repeat counts, along with a current string and number accumulator.

## Approach

1. Initialize `stack` to keep track of previous substrings and repeat counts.
2. Initialize `curNum` to store the current repeat count.
3. Initialize `curString` to build the current substring.
4. Iterating through each character in the string.
   - When encountering '[', the current string and number are pushed onto the stack, and they are then reset for the next substring.
   - When encountering ']', the function pops the previous string and repeat count from the stack. The current string is repeated according to the popped count and concatenated with the previous string.
   - If the character is a digit, it is added to `curNum`, multiplying the existing `curNum` by 10 to shift it one decimal place left before adding the new digit.
   - If the character is a letter, it is added to the `curString`.
5. After the loop, the array `curString` is joined to form the final decoded string and returned.

## Complexity

- Time complexity: O(n * k), where n is the length of the input string, and k is the average repeat count. The worst-case time complexity can occur due to string concatenation in `curString.join('').repeat(num)`.
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
