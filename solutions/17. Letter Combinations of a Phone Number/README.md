# [17. Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/)

# Backtracking
## Intuition

Explore all potential combinations and backtrack when a complete combination is formed or when no further progress can be made.

## Approach

1. If `index` equals the length of `digits`, a full combination has been formed. Add `path` to `res` and return.
2. Initialize `res` as an empty array to store the generated combinations.
3. Define a recursive function `letterCombinations(index, path)`:
   - If `index` equals the length of `digits`, a full combination has been formed. Add `path` to `res` and return.
   - Get the current digit and its corresponding letters.
   - Iterate through these letters and recursively call `letterCombinations` with an incremented index and the current path concatenated with the letter.
4. If `digits` is empty, return the empty `res` array to signify no combinations can be formed.
5. Start the recursive process by calling `letterCombinations(0, '')`.
6. After exploring all combinations, return the `res` array.

## Complexity

- Time complexity: O(4^N * N), where N is the number of digits in the input. In the worst case, each digit maps to 4 letters (e.g., digit '7' maps to 'pqrs'), leading to 4^N combinations. For each combination, an O(N) operation (string concatenation) is performed.
- Space complexity: O(N), accounting for the recursion call stack depth, which goes as deep as the number of digits in the input.

## Code

```javascript
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const phone = new Map([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]); // Mapping from digits to letters

  const res = []; // Array to store the combinations

  var letterCombinations = function (index, path) {
    if (index === digits.length) {
      res.push(path); // Add the combination to the result
      return;
    }
    const currentDigit = digits[index]; // Get the current digit
    const letters = phone.get(currentDigit); // Get the letters mapped to this digit
    for (const letter of letters) {
      letterCombinations(index + 1, path + letter); // Explore further combinations
    }
  };

  if (digits.length === 0) return res; // Handle empty input

  letterCombinations(0, ""); // Start the recursive process

  return res; // Return the generated combinations
};
```
