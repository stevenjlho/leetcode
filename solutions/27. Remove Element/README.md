[27. Remove Element](https://leetcode.com/problems/remove-element/description/)

# Intuition
We will iterate through the array and maintain two pointers: `index` and `i`. 
The `index` pointer represents the position where the next non-target element should be placed, while the `i` pointer iterates through the array elements.
	
# Approach
1. We initialize index to 0, representing the current position.
2. We iterate through each element of the array using the i pointer, we check if `nums[i]` is equal to the target value val.
  - If nums[i] is not equal to val, it means we should keep this element. So, we set the value of nums[index] to nums[i].
  - We then increment index by 1 to move to the next position for the next non-target element.
3. Finally, we return the value of index, which represents the length of the modified array.

# Complexity
- Time complexity: O(n), where n is the length of the input array nums.
- Space complexity: O(1), as we use a constant amount of extra space for the index variable.

# Code
```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
      if(nums[i] !== val) {
        nums[index] = nums[i];
        index++;
      }
    }

    return index;
};
```