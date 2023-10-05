# [169. Majority Element](https://leetcode.com/problems/majority-element/description/)

## Intuition
If we assume majority element exist, we can use Moore's Voting Algorithm to resolve, otherwise, we should use hash map to resolve. The key of Moore's Voting Algorithm is we increment a count variable every time when current element equals the candidate element and decrement it when current element doesn't equal the candidate element.

## Approach

1. Initialize `count` to `0`. This will be used to determine which element should be marked as majority element.
Initialize `candidate` to an arbitrary value. This will be used to store the majority element.
2. Iterates through the array `nums` and compare each element with the `candidate`.
3. If `count = 0`, a new candidate is chosen from the remaining elements.
4. If the current element equals `candidate`, it means that it reinforces the majority element because it appears again. Therefore, the `count` is incremented by 1.
5. If the current element doesn't equal `candidate`, it means that there might be an equal number of occurrences of the majority element and other elements. Therefore, the `count` is decremented by 1.
6. Finally, return `candidate`, which represents the majority element. 

## Complexity
- Time complexity: O(n), the algorithm iterates through array once.
- Space complexity: O(1), we are not using any extra space.

## Code
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let candidate = 0;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
        }

        if (nums[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
};
```
