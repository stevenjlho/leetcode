# [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/description/)

## Intuition

The key idea is to explore consecutive numbers starting from those that are the beginning of a potential sequence by using a `Set`.

## Approach

1. If `nums` is empty, immediately return 0 as there are no elements to form a sequence.
2. `longest` is set to `1` to track the longest sequence found.
3. `numSet` is created from `nums` to facilitate quick lookups and eliminate duplicates.
4. Start with a variable `longest` set to 1, which will hold the length of the longest consecutive sequence.
5. Iterate through each unique number in `nums`.
   - Check if `num - 1` is not in the set. If it's not, `num` is potentially the start of a new sequence.
   - Initialize `curLongest` to `1` for the current sequence.
   -  Use a `while` loop to increment `curLongest` as long as `num + curLongest` exists in `numSet`.
   - Update `longest` if `curLongest` is greater than the current `longest`.
6. After iterating through the set, return `longest` as the length of the longest consecutive sequence.

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
  if (nums.length === 0) return 0; // No sequence in empty array

  nums = new Set(nums); // Remove duplicates and allow efficient lookups
  let longest = 1; // Initialize the length of the longest sequence

  for (num of nums) {
    // Only start counting if 'num' is the start of a sequence
    if (!nums.has(num - 1)) {
      let curLongest = 1; // Start a new sequence
      let consecutiveNum = num; // Current number in the sequence

      // Count consecutive numbers in the sequence
      while (nums.has(consecutiveNum + 1)) {
        consecutiveNum++; // Move to the next consecutive number
        curLongest++; // Increase the length of the current sequence
      }

      // Update the longest sequence if necessary
      longest = Math.max(longest, curLongest);
    }
  }

  return longest; // Return the longest consecutive sequence
};
```
