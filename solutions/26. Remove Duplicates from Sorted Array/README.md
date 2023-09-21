# 26. Remove Duplicates from Sorted Array


## Explanation 
The code start iterating from `i = 1` because we need to compare each element with its previous element to check for duplicates.

The main logic is inside the `for` loop:

1. if the current element  `nums[i]`  is not equal to the previous element `nums[i - 1]`, it means we have encountered a new unique element.
2. In this case, we update `nums[j]` with the value of unique element at num[i], and then increment j by 1 to mark the next position for  a new unique element.

Once the loop finishes, the value of `j` represents the length of the resulting array with duplicates removed.

## Code 
```Javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j = 1;
    for(let i = 1; i < nums.length; ++i)
        if(nums[i] != nums[i - 1])  {  
            nums[j] = nums[i]; 
            j++; 
        }
    return j;
};
```
