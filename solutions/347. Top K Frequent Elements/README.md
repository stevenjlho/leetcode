# [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)

## Intuition

The intuition behind this solution is to utilize a "bucket sort" mechanism, where elements are grouped by their frequency, and the most frequent elements are easily retrieved.

## Approach

1. Create a `frequencyMap` to store the frequency of each number in `nums` and a `bucket` array where each index represents a frequency count, and the elements at each index are the numbers that occur with that frequency.
2. Iterate through `nums`, updating `frequencyMap` with the count of each number.
3. Iterate through `frequencyMap`, placing each number into the bucket corresponding to its frequency.
4. Starting from the highest possible frequency (the last bucket), collect numbers until you have gathered `k` elements. Use early termination to break out of the loop once `k` elements have been collected.

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
  // Array to hold 'buckets' of numbers, indexed by frequency
  const bucket = new Array(nums.length + 1);
  // Map to track the frequency of each number
  const frequencyMap = new Map();

  // Fill the frequency map with counts of each number
  nums.forEach((n) => frequencyMap.set(n, (frequencyMap.get(n) || 0) + 1));

  // Place each number in the appropriate 'frequency bucket'
  frequencyMap.forEach((frequency, number) => {
    bucket[frequency] = (bucket[frequency] || []).concat(number);
  });

  // Result array to hold the top k frequent numbers
  const result = [];
  // Start from the highest possible frequency and collect top k frequent numbers
  for (let i = bucket.length - 1; i > 0 && result.length < k; i--) {
    if (bucket[i]) {
      result.push(...bucket[i]);
      // Break early if k elements have been collected
      if (result.length >= k) break;
    }
  }

  return result; // Return the top k frequent numbers
};
```
