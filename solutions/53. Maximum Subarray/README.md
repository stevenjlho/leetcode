# [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/description/)

## Intuition

The maximum subarray sum can be identified by tracking the current sum of subarrays and updating the maximum whenever a higher sum is found.

## Approach

1. Set `maxSum` to `Number.MIN_SAFE_INTEGER` to capture any subarray sum greater than this initial value.
2. Start with `currentSum` at 0, representing the sum of the current subarray.
3. Loop through each element in `nums`.
   - Add the current element (`nums[i]`) to `currentSum`.
   - Update `maxSum` to `currentSum` if `currentSum` is greater, capturing the highest subarray sum found so far.
   - Reset `currentSum` to 0 if it becomes negative. This is necessary to avoid reducing the overall sum when the current subarray is not contributing positively.
     the start of a new subarray.
4. After processing all elements, `maxSum` holds the maximum subarray sum.

## Complexity

- Time complexity: O(n), the algorithm iterates through the array once.
- Space complexity: O(1), no extra data structures are used.

## Code

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // Initialize maxSum to negative infinity
  let maxSum = Number.MIN_SAFE_INTEGER;
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    // Check if the current subarray sum is greater than the maximum found so far
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }

    // Reset currentSum to 0 if it becomes negative
    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
};
```
