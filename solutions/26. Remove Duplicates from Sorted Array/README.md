# [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)

## Intuition

A sorted array allows us to find duplicates by simply comparing each element with the previous one, enabling in-place removal.

## Approach

1. Start with two pointers: `index` for the position to place the next unique element, and `i` for the current element being checked.
2. Initialize `index` at 1, as the first element is unique by default.
3. From the second element (i = 1), iterate over the array.
   - If `nums[i]` is different from its predecessor (`nums[i - 1]`), it is unique and should be moved to the position at `index`.
   - Update `nums[index]` with `nums[i]` and increment `index` by 1.
4. Return the final value of `index` as the count of unique elements.

## Complexity

- Time complexity: O(n), the algorithm iterates through the array of nums once.
- Space complexity: O(1), the algorithm modifies the array in-place and does not use any additional data structures.

## Code

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // The first element is always unique
  let index = 1;

  // Start from the second element
  for (let i = 1; i < nums.length; ++i) {
    // When a unique element is found (not equal to the previous element),
    // move it to the position at 'index' and increment 'index'.
    if (nums[i] !== nums[i - 1]) {
      nums[index] = nums[i];
      index++;
    }
  }

  // 'index' now points to the length of the array with unique elements
  return index;
};
```
