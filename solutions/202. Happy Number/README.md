# [202. Happy Number](https://leetcode.com/problems/happy-number/description/)

## Intuition

We let `slow` pointer moves one step and `fast` pointer moves two step, if `slow` equals `fast`, it means there is a cycle. Finally, we just check if slow is 1.

## Approach

1. Initialize two pointers, `slow` and `fast`, with the initial value `n`.
2. Create a `square` function to calculate the sum of the squares of the digits of a number:
   - 2.1 Calculate the remainder when `num` is divided by 10. This remainder represents the last digit of the number.
   - 2.2 Square the remainder by multiplying it by itself and add the result to the `ans` variable.
   - 2.3 Update `num` by removing the last digit using integer division (e.g., dividing by 10 and taking the floor to get rid of the last digit).
3. Enter a do-while loop, move the `slow` pointer one step ahead by calculating the square of its digits. Simultaneously, move the `fast` pointer two steps ahead by applying the same operation twice.
4. Continue step 3 until `slow` and `fast` meet or a cycle is detected.
5. After exiting the loop, check whether `slow` is equal to 1. If it is, the number is a happy number, and we return `true`. If `slow` is not equal to 1, it indicates a cycle, and we return `false`.

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

  do {
    //slow moving one step ahead and fast moving two steps ahead
    slow = square(slow);
    fast = square(fast);
    fast = square(fast);
  } while (slow !== fast);

  // if a cycle exists, then the number is not a happy number and slow will have a value other than 1
  return slow === 1;
};

//Finding the square of the digits of a number
var square = function (num) {
  let ans = 0;

  while (num > 0) {
    // Calculate the remainder when dividing by 10 to get the last digit
    const remainder = num % 10;
    ans += remainder * remainder;
    // Remove the last digit using integer division
    num = Math.floor(num / 10);
  }

  return ans;
};
```
