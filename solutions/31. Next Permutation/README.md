# [31. Next Permutation](https://leetcode.com/problems/next-permutation/description/)

## Intuition

For any given sequence that is not in its last permutation, we can increase it to the next permutation by following a specific process: find the first pair of two successive numbers `a[i]` and `a[i+1]`, from the right, which satisfy `a[i] < a[i+1]`. Then, find the smallest number on the right side of `a[i]` that is greater than `a[i]`, swap them, and finally reverse the sequence after the original index `i` to get the next permutation.

## Approach

1. Iterate from right to left, find the first element (`pivot`) that is smaller than its next element. This step determines the part of the sequence that can be rearranged to get the next permutation.
2. If a pivot is found, search for the smallest element greater than the pivot to its right. This ensures the increment to the next permutation is minimal.
3. Swap the pivot with the identified element to increase the sequence.
4. Reverse the elements to the right of the pivot's original position to get the lowest permutation of these numbers, completing the transition to the next permutation.
5. If no pivot is found, the array is in descending order, and reversing it gives the lowest permutation.

## Complexity

- Time Complexity: O(n), where n is the number of elements in the array. Each step (finding the pivot, finding the element to swap with the pivot, and reversing the suffix) involves a single pass through the array or a portion of it.
- Space Complexity: O(1), as the rearrangement is done in place with only a constant amount of extra space used for variables.

## Code

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let pivotIndex = -1;

  // Step 1: Find the pivot
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      pivotIndex = i;
      break; // Pivot found, no need to continue
    }
  }

  // If pivot is found, find the smallest number greater than the pivot
  if (pivotIndex !== -1) {
    for (let i = nums.length - 1; i > pivotIndex; i--) {
      if (nums[i] > nums[pivotIndex]) {
        // Step 2: Swap with pivot
        [nums[pivotIndex], nums[i]] = [nums[i], nums[pivotIndex]];
        break; // Swap complete, break the loop
      }
    }
  }

  // Step 3: Reverse the suffix
  let start = pivotIndex + 1,
    end = nums.length - 1;
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]]; // Swap elements to reverse
    start++;
    end--;
  }

  // No pivot found means the array is in descending order, reverse it to get the lowest permutation
};
```
