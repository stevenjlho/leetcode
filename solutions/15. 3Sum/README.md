# [15. 3Sum](https://leetcode.com/problems/3sum/)

## Intuition

This problem can be solved by sorting the array and using a combination of fixed-point and two-pointer strategies. By fixing one element and using two pointers to scan the remainder of the array, we can efficiently find triplets that sum to zero.

## Approach

1. Begin by sorting the array. This helps in both identifying duplicates and making the two-pointer strategy effective.
2. If the array has fewer than three elements or if the first element is positive, return an empty array.
3. Initialize `result` to store valid triplets
4. Iterate over the array with a loop.
   - If the current element is positive, break the loop. Beyond this point, it's impossible to find a triplet that sums to zero.
   - If the current element is the same as the previous one, skip it to avoid duplicate triplets.
   - Initialize two pointers: `low` (just right of the current element) and `high` (end of the array).
   - While `low` is less than `high`, calculate the sum of the elements at `i`, `low`, and `high`.
     - If sum is greater than 0, decrement `high` to reduce the sum to make it `0`.
     - If sum is less than 0, increment `low` to increase the sum to make it `0`.
     - If sum equals 0, a triplet is found:
       - Add the triplet to the result.
       - Move `low` and `high` to skip over duplicate values.
5. After completing the iterations, return the list of triplets found.

## Complexity

- Time complexity: OO(n^2). The sorting of the array takes O(n log n) time, and the nested loop for finding triplets takes O(n^2) time. Therefore, the overall time complexity is dominated by the nested loop, which is O(n^2).
- Space complexity: O(log n) to O(n), depending on the sorting algorithm used. The space required for the output is not considered in space complexity analysis.

## Code

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // Sorting the array for easier processing
  nums.sort((a, b) => a - b);

  if (nums.length < 3 || nums[0] > 0) {
    return []; // Return an empty array if no valid triplets can exist
  }

  let result = []; // Initialize result array to store valid triplets

  for (let i = 0; i < nums.length; ++i) {
    // If current number is positive, no further triplets can sum to zero
    if (nums[i] > 0) break;

    if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates

    // Two pointers for remaining elements
    let low = i + 1,
      high = nums.length - 1;

    // Move the two pointers towards each other to find valid triplets
    while (low < high) {
      // Search for valid triplets
      let sum = nums[i] + nums[low] + nums[high];

      if (sum > 0) {
        // If sum is positive, decrement the high pointer to reduce the sum
        high--;
      } else if (sum < 0) {
        // If sum is negative, increment the low pointer to increase the sum
        low++;
      } else {
        // Found a triplet that sums to zero
        result.push([nums[i], nums[low], nums[high]]);

        // Record the current elements at low and high pointers
        let lastLow = nums[low],
          lastHigh = nums[high];

        // Skip over duplicates
        while (low < high && nums[low] === lastLow) low++;
        while (low < high && nums[high] === lastHigh) high--;
      }
    }
  }

  return result; // Return all found triplets
};
```
