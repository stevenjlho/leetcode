# [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/description/)

## Intuition
We can find the maximum sum of a subarray by scanning through the array and keeping track of the current sum of the subarray. If the current sum becomes greater than the maximum, we update the maximum sum.

## Approach 
1. Initialize `maxSum` to the minimum integer value to ensure that any valid subarray sum will be greater than it. Initialize `currentSum` to represent the current sum of the subarray.
2. Iterate through the `nums` array, adding each element to `currentSum`.
   - if the `currentSum` is greater than the `maxSum`, update `maxSum` with the new value of `currentSum`. This means we have found a new maximum subarray sum.
   - If `currentSum` becomes negative, reset it to 0 as we want to avoid reducing the overall sum.
3. Finally, we return the value of `maxSum` as the result, representing the maximum sum of a contiguous subarray within the given array nums

## Complexity
- Time complexity: O(n), the algorithm iterates through the array of nums once.
- Space complexity: O(1) We are not using any extra space.

## Code
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    let currentSum = 0;

    for(let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
        // reset it to 0 to avoid reducing the overall sum.
        if(currentSum < 0) currentSum = 0;
    }

    return maxSum;
};
```