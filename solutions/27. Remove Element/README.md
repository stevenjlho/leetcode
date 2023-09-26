[27. Remove Element](https://leetcode.com/problems/remove-element/description/)

# Intuition
We will iterate through the array and maintain two pointers: `index` and `i`. 
The `index` pointer represents the position where the next non-target element should be placed, while the `i` pointer iterates through the array elements.
	
# Approach
1. Initialize `index = 0` to represent the current position as 0.
2. Iterate through each element using the `i` pointer.
3. For each element `nums[i]`, check if it is equal to the target value `val`.
   - If `nums[i]` is not equal to `val`, it means we should set the value of `nums[index]` to `nums[i]`.
   - Increment `index` by 1 to move to the next position for the next non-target element.
4. Finally, return the value of `index`, which represents the length of the modified array.

# Complexity
- Time complexity: O(n).
- Space complexity: O(1).

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