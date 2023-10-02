# [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/description/)

## Intuition
We can use a stack data structure to keep track of opening brackets and check if they match with the corresponding closing brackets.

## Approach
1. Initialize an empty `stack`. Initialize `map` that maps opening brackets to closing brackets.
2. Iterate through the array `s`.
   - If `s[i]` is an opening bracket, use `map` to map the closing brackets and push it onto the `stack`.
   - If `s[i]` is a closing bracket, use `stack.pop()` to ensure this closing bracket matches the correct opening bracket.
   - If the wrong type of closing bracket is found, exit early and return `false`.
3. Finally, return the result by checking if the length of the `stack` equals 0. If it does, it means that all the opening brackets have been closed.


## Complexity
- Time complexity: O(n), the algorithm iterates through the array of s once.
- Space complexity: O(n) as the stack could store all the opening brackets in the string.

## Code
```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = {
        '{': '}',
        '(': ')',
        '[': ']',
    }

    for(let i = 0; i < s.length; i++) {
        if(s[i] in map) {
            stack.push(s[i])
        } else if(s[i] !== map[stack.pop()]) {
            // check if this closing bracket match recent opening bracket 
            return false;
        }
    }

    return stack.length === 0
};
```