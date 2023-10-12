# [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/description/)

## Intuition

Use a hash map to check for duplicate elements in an array.

## Approach

1. We initialize a `hashTable` as a Set data structure to allow us to efficiently store and check for unique elements in the `nums` array.
2. We then iterate through the `nums` array.
3. We use the `has()` method to check if the current element `nums[i]` already exists in the `hashTable`
4. If the element is already in the `hashTable`, it means we've encountered a duplicate element in the array. We return `true` early to indicate that the array contains duplicate elements.
5. If the element is not found in the `hashTable` (i.e., it's unique), we add it to the `hashTable` using the `add()` method. This is how we keep track of elements we've seen so far.
6. If we complete the entire loop without finding any duplicates, we return `false` to indicate that there are no duplicate elements in the array.

## Complexity

- Time complexity: O(n), the algorithm iterates through array once.
- Space complexity: O(n), the hash map can store all elements of the input array.

## Code

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const hashTable = new Set();

  for (let i = 0; i < nums.length; i++) {
    // Check if the current element 'nums[i]' already exists in the 'hashTable'.
    if (hashTable.has(nums[i])) {
      // If the element is found, return 'true' to indicate a duplicate element is present.
      return true;
    } else {
      // If the element is not found, add it to the 'hashTable' to keep track of seen elements.
      hashTable.add(nums[i]);
    }
  }

  return false;
};
```
