# [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)

## Intuition

The intuition behind this solution is to utilize a "bucket sort" mechanism, where elements are grouped by their frequency, and the most frequent elements are easily retrieved.

## Approach

1. If `nums` is empty, immediately return an empty array as there can't be any frequent elements.
2. Iterate through `nums`, populating a map (`frequencyMap`) where each key is a number from `nums` and its value is the frequency of that number.
3. Create an array of empty arrays (`buckets`), with an array for each possible frequency (from 0 to the length of `nums`).
4. Iterate through `frequencyMap`, placing each number into its corresponding frequency bucket in `buckets`.
5. Starting from the highest possible frequency (the last bucket), collect elements from each bucket until you have `k` elements.

## Complexity

- Time Complexity: O(N), where N is the number of elements in `nums`. Each element is visited exactly once to populate the `frequencyMap`, and then each entry in the `frequencyMap` is visited once to populate the `buckets`. The final aggregation step iterates through at most N buckets but will terminate as soon as k elements are found.
- Space Complexity: O(N), as the `frequencyMap` and `bucket` array together may hold at most N unique elements (in the worst case, all elements in `nums` are unique).

## Code

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  if (!nums.length) return []; // Return empty array for empty input

  const frequencyMap = new Map();
  // Count the frequency of each number in nums
  nums.forEach((num) => {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  });

  // Initialize buckets for each frequency level
  const buckets = Array.from({ length: nums.length + 1 }, () => []);

  // Place each number in its corresponding frequency bucket
  frequencyMap.forEach((freq, num) => buckets[freq].push(num));

  const res = [];
  // Iterate over buckets from highest to lowest frequency
  for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
    if (buckets[i]) {
      // Add all elements in the current bucket to the res
      res.push(...buckets[i]);
    }
  }

  return res; // Return the top k frequent elements
};
```
