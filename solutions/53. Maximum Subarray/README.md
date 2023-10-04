# [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/description/)

## Intuition
We can find the maximum sum of a subarray by scanning through the array and keeping track of the current sum of the subarray. If the current sum becomes greater than the maximum, we update the maximum sum.

## Approach
1. Initialize `maxSum` to `Number.MIN_SAFE_INTEGER` to ensure it's initially smaller than any valid subarray sum.
2. Initialize `currentSum` to 0 to represent the current sum of the subarray.
3. Iterate through the `nums` array using a loop.
4. For each element `nums[i]`, add it to `currentSum`.
5. If `currentSum` becomes greater than `maxSum`, update `maxSum` with the new value of `currentSum`. This step identifies a new maximum subarray sum.
6. If `currentSum` becomes negative, reset it to 0. This is necessary to avoid reducing the overall sum when the current subarray is not contributing positively.
7. Continue the loop until all elements in `nums` are processed.
8. Finally, return `maxSum` as the result, which represents the maximum sum of a contiguous subarray within the given array `nums`.

## Complexity
- Time complexity: O(n), the algorithm iterates through the array once.
- Space complexity: O(1), no extra data structures are used.

## Code
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = Number.MIN_SAFE_INTEGER; // Initialize maxSum to negative infinity
    let currentSum = 0; // Initialize currentSum to 0

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i]; // Add the current element to the current subarray sum
        
        // Check if the current subarray sum is greater than the maximum found so far
        if (currentSum > maxSum) {
            maxSum = currentSum; 
        }
        
        // Reset currentSum to 0 if it becomes negative
        if (currentSum < 0) {
            currentSum = 0;
        }
    }

    return maxSum; // Return the maximum subarray sum
};
```
