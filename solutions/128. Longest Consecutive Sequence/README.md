# [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/description/)

## Intuition

We first convert the array into a Set to eliminate duplicates and allow for constant-time lookups. Then, we iterate through each number in the set, identifying sequences by checking if the current number is the start of a consecutive sequence

## Approach

1.  If the `nums` array is empty (`nums.length === 0`), return `0` since there's no sequence to consider.
2.  Convert `nums` into a `Set`. This removes duplicates and enables O(1) lookups.
3.  Set a variable `longest` to track the length of the longest consecutive sequence.
4.  Use a `for-of` loop to iterate through each number in the set.
    - Check if `num - 1` is not in the set. If true, it means `num` could be the start of a new sequence.
    - If `num` is the start of a sequence, use a while loop to find the length of this sequence. Keep incrementing `consecutiveNum` and `curLongest` as long as `consecutiveNum + 1` exists in the set.
    - After exiting the while loop, update `longest` if `curLongest` is greater than the current `longest`.
5.  After iterating through the set, return `longest` as the length of the longest consecutive sequence.

## Complexity

- Time complexity: O(N), where N is the number of elements in `nums`. Each element is visited once, and the set operations (creation and lookups) are O(1).
- Space complexity: O(N) for the set. In the worst case, if all elements are unique, the set contains N elements.

## Code

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // Return 0 for empty array
  if (nums.length === 0) return 0;

  // Convert array to set for efficient lookups and to remove duplicates
  nums = new Set(nums);
  let longest = 1; // Initialize longest consecutive sequence length

  // Iterate through each unique number in the set
  for (num of nums) {
    // Check if the current number is the start of a consecutive sequence
    if (!nums.has(num - 1)) {
      let curLongest = 1; // Initialize current sequence length
      let consecutiveNum = num; // Start of the current sequence

      // Count the length of the current consecutive sequence
      while (nums.has(consecutiveNum + 1)) {
        consecutiveNum++;
        curLongest++;
      }

      // Update the longest sequence length if needed
      longest = Math.max(longest, curLongest);
    }
  }

  return longest; // Return the longest consecutive sequence length
};
```
