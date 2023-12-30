[13. Roman to Integer](https://leetcode.com/problems/roman-to-integer/description/)

# Intuition

To convert Roman numerals to integers, recognize patterns of subtraction (like "IV" for 4) and sum the corresponding values.

# Approach

1. Create a map (`romanToIntMap`) to associate Roman numerals with their respective integer values.
2. Initializes a variable `ans` to accumulate the total value as you iterate through the string.
3. Iterate through the characters of the input string `s`.
   - The if-condition inside the loop checks if the current numeral should be subtracted rather than added.
   - When true, subtracts the numeral's value from the total. This occurs when a smaller numeral precedes a larger one (like 'IV' or 'IX').
   - Otherwise, add the value of the current character to `ans`.
4. Finally, return the value of `ans`, which represents the integer equivalent of the Roman numeral string.

# Complexity

- Time complexity: O(n), where n is the length of the input string s.
- Space complexity: O(1), as the space used is constant, not dependent on the input size.

# Code

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // Map for Roman numeral to integer conversion
  const romanToIntMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let ans = 0; // Initialize total sum

  for (let i = 0; i < s.length; i++) {
    // Check for subtraction rule (smaller before larger numeral)
    if (
      i < s.length - 1 &&
      romanToIntMap.get(s[i]) < romanToIntMap.get(s[i + 1])
    ) {
      ans -= romanToIntMap.get(s[i]); // Subtract if smaller numeral before larger
    } else {
      ans += romanToIntMap.get(s[i]); // Regular addition for other cases
    }
  }

  return ans; // Final integer value of Roman numeral
};
```
