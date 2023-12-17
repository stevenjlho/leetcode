# [169. Majority Element](https://leetcode.com/problems/majority-element/description/)

## Intuition

If we assume majority element exist, we can use Moore's Voting Algorithm to resolve, otherwise, we should use hash map to resolve. The key of Moore's Voting Algorithm is we increment a count variable every time when current element equals the candidate element and decrement it when current element doesn't equal the candidate element.

## Approach

1.  Initialize `count` and `candidate`
    - `count` tracks the presence of a potential majority element.
    - `candidate` stores the current potential majority element.
2.  Iterate through the array `nums` and cover each element of `nums`, checking against the `candidate`.
    - When `count` is zero, a new `candidate` is chosen, indicating the potential start of a new majority candidate.
    - If the current element equals the `candidate`, increment `count`, reinforcing the candidate's majority status.
    - If not, decrement `count`, suggesting a challenge to the candidate's majority status.
3.  The final `candidate` is returned, which is the majority element as per Moore's Voting Algorithm.

## Complexity

- Time complexity: O(n), the algorithm iterates through array once.
- Space complexity: O(1), we are not using any extra space.

## Code

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0;
  let candidate = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i]; // New candidate when count is zero
    }

    // Adjust count based on current element
    if (nums[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
};
```
