# [31. Next Permutation](https://leetcode.com/problems/next-permutation/description/)

## Intuition

The intuition behind this algorithm is to find the rightmost pair of two successive numbers a[i] and a[i+1], where a[i] < a[i+1]. This pair marks a decrease in the sequence, and we aim to increase this specific a[i] to the next greater number but in the smallest way possible.

## Approach

1. Traverse the array from right to left to find the first pair where `nums[i] < nums[i+1]`. This `nums[i]` is identified as the pivot.
2. If such a pivot is found, scan the array again from right to left to find the first element that is greater than the pivot, indicating this element can be swapped with the pivot to increase the sequence's value.
3. Swap the pivot with the found element, ensuring the increase is minimal.
4. Reverse the sequence to the right of the pivot's original position to ensure we get the smallest next permutation.

## Complexity

- Time Complexity: O(N), where N is the number of elements in the array. Each step of the algorithm (finding the pivot, finding the element to swap with, and reversing the suffix) is done in linear time.
- Space Complexity: O(1), as the rearrangement is done in place with only a constant amount of extra space used for variables.

## Code

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let pivotIndex = -1;

  // Step 1: Find the pivot, the first element from the end that's smaller than its next.
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      pivotIndex = i;
      break; // Found the pivot, stop searching.
    }
  }

  // Step 2: If a pivot is found, find the smallest element greater than the pivot to swap.
  if (pivotIndex !== -1) {
    for (let i = nums.length - 1; i > pivotIndex; i--) {
      if (nums[i] > nums[pivotIndex]) {
        [nums[pivotIndex], nums[i]] = [nums[i], nums[pivotIndex]]; // Swap the elements.
        break; // Swap done, break the loop.
      }
    }
  }

  // Step 3: Reverse the suffix starting right after the pivot to get the next permutation.
  let start = pivotIndex + 1,
    end = nums.length - 1;
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]]; // Swap elements towards the center.
    start++;
    end--;
  }

  // If no pivot was found, the entire sequence is in descending order. Reverse it to get the smallest permutation.
};
```
