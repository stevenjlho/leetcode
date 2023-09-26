# [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)


## Intuition
We will iterate through the array and maintain two pointers: `index` and `i`. 
The `index` pointer represents the position where a unique element should be placed, while the `i` pointer iterates through the array elements.

## Approach
1. We initialize the pointer `index` to 1 as the first element in the array is always unique and doesn't need to be changed. 
2. We initialize the pointer `i` to 1 as we need to compare each element with its previous element to check for duplicates.
3. Iterate through each element using the `i` pointer, and check if nums[i] is not equal to the previous element `nums[i - 1]` to identify a new unique element.
   - If `nums[i]` is not equal to `nums[i - 1]`, it means we should set the value of `nums[index]` to `nums[i]`.
	 - Increment `index` by 1 to move to the next position for the next unique element.
4. Finally, return the value of `index`, which represents the length of the modified array.

## Complexity
- Time complexity: O(n).
- Space complexity: O(1).

## Code
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 1;
    for(let i = 1; i < nums.length; ++i)
        if(nums[i] !== nums[i - 1])  {  
            nums[index] = nums[i]; 
            index++; 
        }
    return index;
};
```