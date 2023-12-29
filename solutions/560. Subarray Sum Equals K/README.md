# [560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/description/)

## Intuition

Using a prefix sum approach combined with a hash map tracks the cumulative sum of the elements in the array and uses the map to count how many times each sum minus `k` has occurred, which indicates a subarray that sums to `k`.

## Approach

1. `ans` variable is initialized to store the total count of subarrays that sum to `k`.
2. `preSum`, an array to store prefix sums, is initialized with the first element of `nums`.
3. `map` is used to store the frequency of occurrence of each prefix sum. It's initialized with a key-value pair `(0, 1)` to account for cases where a subarray starts from the beginning.
4. Iterate over the `nums` array starting from the second element to build the `preSum` array.
   - For each element, calculate the cumulative sum and add it to `preSum`.
5. Iterate Over the Prefix Sum Array
   - Check if `sum - k` exists in the map. If it does, it indicates a subarray that sums to `k`. Increment `ans` by the count of `sum - k` in the map.
   - Update the map with the current prefix sum. If the prefix sum already exists, increment its count, otherwise, add it with a count of 1.
6. Return the total count of subarrays (`ans`) that sum to `k`.

## Complexity

- Time complexity: O(n), where n is the length of the input array. This is because the algorithm iterates over the array twice - once to build the prefix sum array and once to find the subarrays that sum to `k`.
- Space complexity: O(n), where n is the length of the input array. The additional space is used for the `preSum` array and the hash map.

## Code

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let ans = 0; // Store the total count of subarrays summing to k
  let preSum = [nums[0]]; // Array to store prefix sums, initialized with first element
  let map = new Map(); // Map to store frequency of each prefix sum
  map.set(0, 1); // Initialize map with sum 0 occurring once

  // Building the prefix sum array
  for (let i = 1; i < nums.length; i++) {
    preSum.push(nums[i] + preSum[preSum.length - 1]); // Add current element to last prefix sum
  }

  // Checking each prefix sum for possible subarrays
  for (let sum of preSum) {
    if (map.has(sum - k)) {
      ans += map.get(sum - k); // If sum-k is in map, it indicates a valid subarray
    }
    map.set(sum, (map.get(sum) || 0) + 1); // Update map with the current sum
  }

  return ans; // Return the count of subarrays
};
```
