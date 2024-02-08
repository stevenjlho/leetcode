# [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/description/)

## Intuition

The key idea is to explore consecutive numbers starting from those that are the beginning of a potential sequence by using a `Set`.

## Approach

1. If `nums` is empty, immediately return 0 as there are no elements to form a sequence.
2. Start with a variable `longest` set to 0, which will hold the length of the longest consecutive sequence.
3. Convert the array to a Set to remove duplicates and allow for O(1) lookups.
4. Iterate through each unique number in `numSet`.
   - Check if `num - 1` is not in the set. If it's not, `num` is potentially the start of a new sequence.
   - If it's the start, initialize `length` to `1` for the current sequence. Incrementally check for the presence of each subsequent number in the sequence (`num + length`) and increase the `length` counter for each found.
   - After counting the sequence length for a starting number, compare it with `longest` and update `longest` if the current sequence is longer.
5. After iterating through the set, return `longest` as the length of the longest consecutive sequence.

## Complexity

- Time complexity: O(N), where N is the number of elements in `nums`. Each element is visited once, and the set operations (creation and lookups) are O(1).
- Space complexity: O(N) for the Set that stores all unique elements of the array.

## Code

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0; // No sequence in empty array

  const numSet = new Set(nums); // Use a Set for efficient lookups
  let longest = 0; // Initialize the longest sequence length

  numSet.forEach((num) => {
    // Only start a new sequence if 'num' is the beginning
    if (!numSet.has(num - 1)) {
      let length = 1;

      // Increment the sequence length if consecutive numbers are found
      while (numSet.has(num + length)) {
        length++;
      }

      // Update the longest sequence length if necessary
      longest = Math.max(longest, length);
    }
  });

  return longest; // Return the longest consecutive sequence
};
```
