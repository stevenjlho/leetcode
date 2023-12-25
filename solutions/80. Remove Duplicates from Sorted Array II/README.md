# [80. Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/)

## Intuition

A sorted array allows us to find duplicates by simply comparing each element with the previous one, enabling in-place removal.

## Approach

1. Set a pointer `i` to 0, which will track the position in the array where the next unique or allowed second duplicate should be placed.
2. Use a `for` loop to iterate through each element `n` of the array `nums`.
   - If `i` is less than 2, it means we are filling the first two positions, so we can place any element.
   - If `n` (current element) is not equal to `nums[i - 2]`, it means either `n` is a new element or it is the second occurrence of a duplicate (but not a third or more occurrence).
   - If either condition is met, place the current element `n` at `nums[i]` and increment `i` by 1.
3. After the loop, `i` represents the new length of the array with duplicates removed as per the given condition.

## Complexity

- Time complexity: O(n), where n is the number of elements in the array.
- Space complexity: O(1), as the operation is done in-place with no additional data structure used other than variables for iteration and indexing.

## Code

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0; // Pointer to place the next unique/allowed duplicate element

  for (let n of nums) {
    // Iterate over each element in the array
    // Place the element if either it's among the first two elements or it's not a third or more duplicate
    if (i < 2 || n !== nums[i - 2]) {
      nums[i] = n; // Place the element at the current position
      i++; // Increment the position for the next element
    }
  }

  return i; // Return the new length of the array after duplicates removal
};
```
