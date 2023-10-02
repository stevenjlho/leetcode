# [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)

## Intuition
The key is to use two pointers to traverse the linked list, and to build the new list starting from the back (since we can only traverse the linked list from the front).

## Approach

1. Initialize `prev` to `null`. This will be used to mark the end of the reversed list.
Initialize `current` to the `head` of the original list. This is the node we start with while traversing the list.
2. Traverse the list using `current` until the node is `null`.
   - The variable `next` stores the `current.next` pointer so that it can be assigned to `current` later.
   - Reverse the `next` pointers to point backward.
   - Update prev to current, and move current to the next node in the original linked list.
3. Finally, return the node `prev`, which represents the reverse of linked list. 

## Complexity
- Time complexity: O(n), the algorithm iterates through linked list once.
- Space complexity: O(1), we are not using any extra space.

## Code
```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let current = head;
    while(current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev
};
```
