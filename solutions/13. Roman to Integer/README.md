[13. Roman to Integer](https://leetcode.com/problems/roman-to-integer/description/)

# Intuition

To convert Roman numerals to integers, recognize patterns of subtraction (like "IV" for 4) and sum the corresponding values.

# Approach

1. Create a map (`romanToIntMap`) to associate Roman numerals with their integer values.
2. Start with a result variable (`ans`) initialized to 0.
3. Iterate through the characters of the input string `s`.

   - If the current character represents a value less than the next character (indicating subtraction, like "IV" or "IX"), subtract the value of the current character from `ans`.
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
  // Create a map to associate Roman numerals with their integer values.
  const romanToIntMap = new Map();
  romanToIntMap.set("I", 1);
  romanToIntMap.set("V", 5);
  romanToIntMap.set("X", 10);
  romanToIntMap.set("L", 50);
  romanToIntMap.set("C", 100);
  romanToIntMap.set("D", 500);
  romanToIntMap.set("M", 1000);

  // Initialize the variable to store the final result.
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    // Check if the current character represents subtraction (e.g., IV for 4).
    if (
      i < s.length - 1 &&
      romanToIntMap.get(s[i]) < romanToIntMap.get(s[i + 1])
    ) {
      ans -= romanToIntMap.get(s[i]);
    } else {
      ans += romanToIntMap.get(s[i]);
    }
  }

  return ans;
};
```
