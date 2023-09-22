# 206. Reverse Linked List

## Intuition
The key is to use two pointers to traverse the linked list, and to build the new list starting from the back (since we can only traverse the linked list from the front).

## Explanation

1. Initialize `prev` to `null`. This will be used to mark the end of the reversed list.
2. Initialize `current` to the `head` of the original list. This is the node we start with while traversing the list.
3. Traverse the list using **`current`**, reversing the **`next`** pointers to point backward.
4. `next` keeps track of the next node in the original list so it can be accessed next, then we would say prev = current, and current = next to move the pointers for the next iteration## Code 

```Javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    let currentSum = 0;

    for(let i = 0; i < nums.length; i++) {
        currentSum += nums[i]
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }

        if(currentSum < 0) currentSum = 0        
    }

    return maxSum;
};
```
