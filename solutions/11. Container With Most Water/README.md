# [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/description/)

## Intuition

Use a two-pointer approach starting from both ends of the array to maximize the area between the two lines,

## Approach

1. `left` and `right` are initialized to point to the start and end of the array, respectively.
2. Initialize `maxArea` to keep track of the maximum area found so far.
3. Iterate through `height` as long as `left` is less than `right`.
   - The width of the current container is calculated as the difference between the `left` and `right` pointers.
   - The height of the container is the minimum of the two heights at the `left` and `right` pointers, as the water level is limited by the shorter line.
   - The area of the current container is calculated by multiplying its width and height.
   - Update `maxArea` if `currentArea` is larger than the current `maxArea`.
   - Move the pointer pointing to the shorter line inward (`left++` or `right--`) since moving the taller line won't increase the area.
4. Once the loop is complete, return `maxArea` as the maximum area found.

## Complexity

- Time complexity: O(n), where n is the length of the `height` array.
- Space complexity: O(1), as the space used does not depend on the size of the input array.

## Code

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0; // Initialize left pointer to start
  let right = height.length - 1; // Initialize right pointer to end
  let maxArea = 0; // Max area initialized to 0

  while (left < right) {
    // Width of the container
    let width = right - left;

    // Height is determined by the shorter line
    let containerHeight = Math.min(height[left], height[right]);

    // Calculate current area and update maxArea if larger
    let currentArea = width * containerHeight;
    maxArea = Math.max(maxArea, currentArea);

    // Move the shorter line inward to potentially find a larger area
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea; // Final maximum area
};
```
