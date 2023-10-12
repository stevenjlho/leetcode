# [219. Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/description/)

## Intuition
Use a hash map to check for duplicate elements in an array.

## Approach
1. Initialize a hash map named `map` to keep track of elements and their indices.
2. Iterate through the `nums` array. For each element `nums[i]`, check if it already exists in the `map` using `map.has(nums[i])`.
3. If it exists, calculate the absolute difference between the current index `i` and the index stored in the `map` for the same element. 
4. If the difference is less than or equal to `k`, return `true` because we have found a duplicate within the allowed range of `k`.
5. If no duplicate is found within `k` distance, update the `map` with the current element and its index using `map.set(nums[i], i)`.
6. If we complete the iteration without finding any duplicates within `k` distance, return `false`.


## Complexity
- Time complexity: O(n), the algorithm iterates through array once.
- Space complexity: O(n), the hash map can store all elements of the input array.

## Code
```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    // Initialize a hash map to store elements and their indices.
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        // Check if the current element already exists in the map.
        if (map.has(nums[i])) {
            // Calculate the distance between the current index and the stored index.
            if (Math.abs(i - map.get(nums[i])) <= k) {
                return true;
            }
        }
        
        // Update the map with the current element and its index.
        map.set(nums[i], i);
    }

    // No duplicates within the allowed range were found.
    return false;
};
```
