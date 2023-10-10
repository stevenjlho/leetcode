# [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/description/)

## Intuition
Use a hash map to check for duplicate elements in an array.

## Approach
1. Initialize `map` to keep track of the count of occurrences for each element.
2. Iterate through the `nums` array.
3. We use `map.has(nums[i])` to check if `nums[i]` exists in map before, if it does, it means current element is a duplicate element, so return `true` early.
4. If `nums[i]` doesn't exist in the `map`, set the value of `nums[i]` as a key in the `map` with a value of 1.
5. If we complete the iteration without finding any duplicates, we return false. 

## Complexity
- Time complexity: O(n), the algorithm iterates through array once.
- Space complexity: O(n), the hash map can store all elements of the input array.

## Code
```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // Create a hash map to store the count of each element
    const map = new Map();

    for(let i = 0; i < nums.length; i++) {
         // Check if the element exists in the map
        if(map.has(nums[i]) && map.get(nums[i]) >= 1) {
            // If it exists, it's a duplicate, so return true
            return true;
        } else {
            // If it doesn't exist, add it to the map with a count of 1
            map.set(nums[i], 1)
        }
    }

    return false
};
```
