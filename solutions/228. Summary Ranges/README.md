# [228. Summary Ranges](https://leetcode.com/problems/summary-ranges/description/)

## Intuition

A range is defined by a sequence of consecutive integers. The solution leverages the concept of pointers (or indices in this case) to track the start and end of each range as we progress through the array.

## Approach

1. Initialize array `ranges` to store the result in the desired format, either as individual numbers or ranges denoted by "start->end".
2. Iterate over each element in the array to find continuous ranges.
   - Define `start` to mark the beginning of a new range and `end` to mark the end of a new range. Both initially set to the same value, the current element at index `i`.
   - Use a while loop checks if the current element (`nums[i]`) and the next element (`nums[i + 1]`) form a consecutive sequence (`nums[i] + 1 === nums[i + 1]`). If they do, `end` is updated to `nums[i + 1]`, and `i` is incremented to continue checking the next element. 
   - After determining the extent of the current range, it's formatted as a string. If `start` equals `end`, only a single number is added. If they differ, a range in the format "start->end" is added.
3. Once all elements have been processed, the `ranges` array is returned, containing all identified ranges in the desired format.
    
## Complexity

- Time complexity: O(n), where n is the length of the input array. The algorithm iterates through the array once, making it linear in time.
- Space complexity: O(k), where k is the number of continuous ranges in the array. This is the space used to store the res. In the worst case, if there are no continuous ranges, the space complexity is O(n) (each element is a separate "range").

## Code

```javascript
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let ranges = []; // Stores the summarized ranges or individual numbers

  for (let i = 0; i < nums.length; i++) {
    let start = nums[i]; // Start of the current range
    let end = start; // End of the current range, initially the same as start

    // Extend the range to include all consecutive numbers
    while (i + 1 < nums.length && nums[i] + 1 === nums[i + 1]) {
      end = nums[i + 1]; // Update the end to the last consecutive number
      i++; // Move to the next number to check for further continuity
    }

    // Format the range or single number and add to the result
    ranges.push(start === end ? `${start}` : `${start}->${end}`);
  }

  return ranges; // Return the summarized ranges
};
```
