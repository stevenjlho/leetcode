# [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/description/)

## Intuition
We can create a dummy node as the starting point for the merged list to avoid edge cases, and iterate over lists using two pointers and append the remaining elements to the merged list.

## Approach
1. Create a dummy node as the starting point for the merged list.
2. Traverse the lists to check if both `list1` and `list2` are non-null.
   - If the value of `list1` is less than the value of 'list2', use `tail.next` to keep track of the current node and assign it to `tail`, then update the `list1` pointer. 
   - If `list2` has the smaller or equal value, do the same with `list2`.
   - Update the `tail` pointer from `tail.next`. 
3. Identify the non-empty list (if any) and append its remaining elements to the merged list.
4. Finally, return the merged list starting from the next node of the dummy node.

## Complexity
- Time complexity: O(n).
- Space complexity: O(1).

## Code
```javascript
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // Create a dummy node as the starting point for the merged list
    var dummy = new ListNode()
    var tail = dummy

    while(list1 !== null && list2 !== null) {
        if(list1.val < list2.val) {
            // If the value in list1 is smaller, append it to the merged list
            tail.next = list1
            list1 = list1.next
        } else {
            tail.next = list2
            list2 = list2.next
        }
        tail = tail.next
    }

    // Append the remaining elements from either list
    if(list1 === null) {
        tail.next = list2
    }
    if(list2 === null) {
        tail.next = list1
    }
    // Return the merged list starting from the dummy node's next
    return dummy.next
};
```