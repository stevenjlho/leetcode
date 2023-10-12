[1. Two Sum](https://leetcode.com/problems/two-sum/description/)

# Intuition
We can efficiently find two numbers in the `nums` array that add up to the target using a hash map.

# Approach
1. Initialize a hash map (`map`) to store elements as keys and their indices as values.
2. Iterate through the `nums` array. For each element at index `i`, calculate the complement by subtracting the current number from the target: `complement = target - nums[i]`.
3. Check if the `map` contains the complement using `map.has(complement)`. If found, return `[map.get(complement), i]` to indicate the indices of the two numbers that sum to the target.
4. If the complement is not in the `map`, add the current number to the `map` with its index.
5. If the loop completes without finding a valid pair, return an empty array `[]` to indicate no solution.

# Complexity
- Time complexity: O(n), where `n` is the length of the input array `nums`. The solution iterates through the array only once.
- Space complexity: O(n), the space complexity depends on the number of unique elements in the array.

# Code
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Create a hash map to store values and their indices
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      // Return the indices of the two numbers that sum to the target
      return [map.get(complement), i];
    }

    // Add the current number to the map with its index
    map.set(nums[i], i);
  }

  return [];
};
```
