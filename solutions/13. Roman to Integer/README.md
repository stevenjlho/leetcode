[13. Roman to Integer](https://leetcode.com/problems/roman-to-integer/description/)

# Intuition
To convert Roman numerals into integers, we need to analyze the structure of the Roman numeral and add or subtract values accordingly.

# Approach

1. Create a map called `romanToIntMap` that associates Roman numerals with their corresponding integer values.
2. Initialize a variable `ans` to store the final integer result.
3. Iterate through the characters of the input string `s`.
4. Check if the current index is less than `s.length - 1` and if the value of the character at index `i` is less than the value of the character at index `i+1`.
5. If the condition in step 4 is met, subtract the value of the character at index `i` from `ans`. If the condition in step 4 is not met, add the value of the character at index `i` to `ans`.
6. Finally, return the value of `ans`, which represents the integer equivalent of the Roman numeral string.

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
