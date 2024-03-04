# [80. Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/)

## Intuition

Maintain a slow-moving pointer (`insertPos`) that tracks the position where the next non-duplicate or allowed duplicate element should be placed.

## Approach

1. Check if the input array is empty. If it is, return `0` immediately as there are no elements to process.
2. Start with a pointer (`insertPos`) at `0`, which will track the position in the array where the next non-duplicate element should be placed.
3. Loop through each element in the array with an index `i`.
   - If the current element is not a duplicate (i.e., it is either the first or second occurrence), copy it to the position indicated by `insertPos`.
   - Increment `insertPos` to prepare for the next unique or second duplicate element.
4. Once the loop completes, `insertPos` will indicate the length of the array without extra duplicates, and the function returns `insertPos`.

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
  // Handle the edge case of an empty array
  if (nums.length === 0) return 0;

  // Pointer for the next insert position for a non-duplicate element
  let insertPos = 0;

  // Iterate through each element in the array
  for (let i = 0; i < nums.length; i++) {
    // If the current element is not a duplicate (allowed to be the first or second occurrence)
    if (insertPos < 2 || nums[i] !== nums[insertPos - 2]) {
      // Copy the element to the insert position
      nums[insertPos] = nums[i];
      // Move the insert position forward
      insertPos++;
    }
  }

  // The new length of the array, without extra duplicates, is insertPos
  return insertPos;
};
```
