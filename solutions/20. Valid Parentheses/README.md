# [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/description/)

## Intuition

Leveraging a stack allows us to validate the sequence of parentheses by ensuring that each closing bracket is preceded by a matching opening bracket in the correct order.

## Approach

1.  Initialize a `stack` to keep track of open brackets.
2.  Create a mapping of open to close bracket types for easy lookup.
3.  Iterate over each character in the string `s`:
    - If an opening bracket is encountered, push its corresponding closing bracket onto the stack.
    - If a closing bracket is encountered, check if it matches the expected bracket at the top of the stack. If it does, pop the stack; otherwise, the sequence is invalid.
4.  After processing all characters, check if the `stack` is empty. An empty stack indicates that all open brackets have been properly matched and closed.

## Complexity

- Time complexity: O(n), where n is the length of the input string. Each character is processed once.
- Space complexity: O(n) in the worst case (when all characters are open brackets), due to the stack storing them.

## Code

```javascript
/**
 * Determines if a string of parentheses is valid.
 * @param {string} s - The input string containing only parentheses.
 * @return {boolean} - True if the string is valid; otherwise, false.
 */
var isValid = function (s) {
  const stack = [];
  const map = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);

  for (const char of s) {
    if (map.has(char)) {
      // If the character is an opening bracket, push its closing counterpart.
      stack.push(map.get(char));
    } else {
      // If the stack is empty or the closing bracket does not match the stack's top, return false.
      if (!stack.length || stack.pop() !== char) {
        return false;
      }
    }
  }

  // If the stack is empty, all brackets were matched; otherwise, return false.
  return stack.length === 0;
};
```
