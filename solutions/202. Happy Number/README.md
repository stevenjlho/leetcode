# [202. Happy Number](https://leetcode.com/problems/happy-number/description/)

## Intuition

we use the two-pointer technique with slow and fast pointers. If the two pointers ever meet and slow is not 1, it indicates a cycle and the number isn't happy number.

## Approach

1. Initialize two pointers, `slow` and `fast`, both set to `n`.
2. Create a helper function `square(num)` that calculates and returns the sum of the squares of each digit in `num`.
   - Initialize a variable `ans` to 0 to keep the running sum of squared digits.
   - Extract the last digit of the `num` using modulo 10 operation (`remainder = num % 10`).
   - Using a loop, break the number down digit by digit:
   - Square the extracted digit and add to the sum.
   - Remove the last digit from the `num` using integer division (i.e., `num = Math.floor(num / 10)`).
   - Once all digits are processed, return `ans`.
3. Use a do-while loop to progress the `slow` pointer by one step and the `fast` pointer by two steps (using the `square` function). If a cycle is detected (when `slow` equals `fast`), exit the loop.
4. After the loop, if `slow` is 1, the number is happy, so return `true`. Otherwise, there's a cycle, and return `false`.

## Complexity

- Time complexity: O(n), as it depends on the input number 'n'.
- Space complexity: O(1), we are not using any extra space.

## Code

```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let slow = n;
  let fast = n;

  // Using the two-pointer technique to detect a cycle, if a cycle is detected, exit the loop.
  do {
    slow = square(slow);
    fast = square(fast);
    fast = square(fast);
  } while (slow !== fast);

  // Determine if it's a happy number post-cycle detection
  return slow === 1;
};

// Calculate the sum of squares of digits
var square = function (num) {
  let ans = 0;

  while (num > 0) {
    // Extract the last digit of the number
    const remainder = num % 10;
    // Square the extracted digit and add to the sum
    ans += remainder * remainder;
    // Remove the last digit from the number
    num = Math.floor(num / 10);
  }

  return ans;
};
```
