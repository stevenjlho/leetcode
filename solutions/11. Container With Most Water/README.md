# [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/description/)

## Intuition

Using a two-pointer approach allows us to efficiently explore potential containers and track the one with the maximum area.

## Approach

1. Create `left` pointer at the start (0) and `right` pointer at the end (`height.length - 1`) of the array.
2. Initialize `max` to keep track of the maximum area found so far.
3. Iterate through `height` as long as `left` is less than `right`.
   - The width of the current container is calculated as the difference between the `left` and `right` pointers.
   - The height of the container is the minimum of the two heights at the `left` and `right` pointers, as the water level is limited by the shorter line.
   - The area of the current container is calculated by multiplying its width and height.
   - Update `max` if `current` area is larger.
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
  let left = 0; // Start pointer from the beginning
  let right = height.length - 1; // End pointer from the end
  let max = 0; // To keep track of the maximum area found

  while (left < right) {
    let width = right - left; // Calculate width of the container
    let containerHeight = Math.min(height[left], height[right]); // Determine container height by shorter line

    let current = width * containerHeight; // Calculate current area
    max = Math.max(current, max); // Update max area if current is larger

    // Move the pointer of the shorter line inward
    if (height[left] < height[right]) {
      left++; // Increment left pointer
    } else {
      right--; // Decrement right pointer
    }
  }

  return max; // Return the maximum area found
};
```
