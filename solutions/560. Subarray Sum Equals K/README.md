# [560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/description/)

## Intuition

The solution leverages the concept of cumulative sums to identify subarrays whose elements add up to `k`. By maintaining a running total of sums and using a hashmap to track the frequency of each sum, we can efficiently find the number of subarrays that meet the target sum.

## Approach

1. Initialize `ans` to store the count of subarrays whose sum is equal to `k`.
2. Create a hashmap `map` to keep track of the frequency of cumulative sums. Initialize it with the key `0` having a value of `1`, to handle cases where a subarray starts from the beginning of the array.
3. Initialize a variable `cumulativeSum` to 0 to store the running total of the sums.
4. Iterate through the `nums` array to calculate the cumulative sum.
   - Update `cumulativeSum` by adding the current element.
   - Check if `(cumulativeSum - k)` is present in the hashmap. If it is, add its value to `ans`. This step finds the number of times a subarray with sum `k` has been encountered up to the current index.
   - Update the hashmap with the new `cumulativeSum`. If it already exists, increment its count, otherwise add it with a count of 1.
5. After iterating through the array, return `ans`.

## Complexity

- Time complexity: O(n). The algorithm iterates through the array once, making it linear in the size of the input array `nums`.
- Space complexity: O(n). The hashmap `map` can potentially store each unique cumulative sum, which in the worst case, could be as many as there are elements in `nums`.

## Code

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let ans = 0; // Count of subarrays summing to k
  let map = new Map([[0, 1]]); // Hashmap for frequency of cumulative sums
  let cumulativeSum = 0; // Running total of sums

  for (const num of nums) {
    cumulativeSum += num; // Update cumulative sum
    if (map.has(cumulativeSum - k)) {
      ans += map.get(cumulativeSum - k); // Add count of subarrays ending here that sum to k
    }
    map.set(cumulativeSum, (map.get(cumulativeSum) || 0) + 1); // Update map with the current sum
  }

  return ans; // Return count of valid subarrays
};
```
