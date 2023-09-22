# 53. Maximum Subarray

## ****Intuition****

We can find the maximum sum of subarray by scanning through the array and keeping track of the current of the subarray

## Explanation

1. **`maxSum`** is initialized to the minimum integer value to ensure that any valid subarray sum will be greater than it. `currentSum` represents the current sum of the subarray.
2. We iterate through the **`nums`** array, adding each element to **`currentSum`**.
3. We check if the current sum `currentSum` is greater than the current maximum sum `maxSum`. If it is, we update `maxSum` with the new value of `currentSum`
4. If **`currentSum`** becomes negative, we reset it to 0 to start a new subarray because we want to avoid reducing the overall sum
5. After iterating, **`maxSum`** contains the maximum subarray sum.

## Code 
```Javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    let currentSum = 0;

    for(let i = 0; i < nums.length; i++) {
        currentSum += nums[i]
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }

        if(currentSum < 0) currentSum = 0        
    }

    return maxSum;
};
```
