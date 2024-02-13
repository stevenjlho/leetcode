# [228. Summary Ranges](https://leetcode.com/problems/summary-ranges/description/)

## Intuition

This problem is approached by iterating through the array `nums` and identifying continuous ranges. A continuous range is a sequence where each number is one more than the previous number.

## Approach

1. Initialize a Result Array (`res`) to store the formatted range strings.
2. Iterate over each element in the array to find continuous ranges.
   - Setting a variable `start` to mark the beginning of a new range.
   - Using a while loop for this purpose ensures that you only increment `i` when a continuous sequence is found.
   - If a range is found, formatting it as `"start->end"` and adding it to `res`.
   - If no range is found (only a single number), adding the single number as a range.
3. Return the `res` array containing all the formatted ranges.

## Complexity

- Time complexity: O(n), where n is the length of the input array. The algorithm iterates through the array once, making it linear in time.
- Space complexity: O(k), where k is the number of continuous ranges in the array. This is the space used to store the res. In the worst case, if there are no continuous ranges, the space complexity is O(n) (each element is a separate "range").

## Code

```javascript
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        let start = nums[i]; // Initialize the start of a potential range

        // Extend the range as long as consecutive elements are continuous
        while (i + 1 < nums.length && nums[i] + 1 === nums[i + 1]) {
            i++;
        }

        // Check if a range was found
        if (start !== nums[i]) {
            res.push(`${start}->${nums[i]}`); // Add range to res
        } else {
            res.push(`${start}`); // Add single number as a range
        }
    }
    return res; // Return the array of summarized ranges

```
