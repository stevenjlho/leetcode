# [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)

# Two Pointers
## Intuition
The key is to use two pointers to traverse the linked list, and forward to keep track of nodes to update reverse links.

## Approach

1. Initialize `prev` to `null`. This will be used to mark the end of the reversed list.
Initialize `current` to the `head` of the original list. This is the node we start with while traversing the list.
2. Traverse the list using `current` until the node is `null`.
3. The variable `next` stores the `current.next` pointer so that it can be assigned to `current` later.
4. Reverse the `next` pointers to point backward.
5. Update prev to current, and move current to the next node in the original linked list.
6. Finally, return the node `prev`, which represents the reverse of linked list. 

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
# Recursion
## Intuition
The idea is to reach the last node of the linked list using recursion then start reversing the linked list.

## Approach
1. We begin by checking if the linked list is empty `(head === null)` or has only one element `(head.next === null)`. If either of these conditions is met, it means we don't need to reverse anything, so we return the current `head`.
2. When the base case is not met, we proceed with the recursive call:
3. We call `let newHead = reverseList(head.next)` to reverse the remaining part of the linked list, starting from the node after `head`. The `newHead` variable captures the new head of this reversed portion, which will be used to connect with the current `head` in the next steps.
4. `head.next.next = head`, this line updates the `next` pointer of the next node to point back to the current node.
5. `head.next = prev` updates the next pointer of the current node to point to the previous node, completing the reversal for the current node.
6. Finally, we return `newHead`, which represents the new head of the reversed linked list.


## Complexity
- Time complexity: O(n), the algorithm iterates through linked list once.
- Space complexity: O(n), function call stack space.

## Code
```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // Base case: if the list is empty or has only one element, return the head
    if (head === null || head.next === null) {
        return head;
    }
    
    let prev = null;
    // Recursively reverse the remaining part of the linked list.
    let newHead = reverseList(head.next);
    // Reverse the pointers for the current node.
    head.next.next = head; // Point the next node's next pointer to the current node.
    head.next = prev; // Update the next pointer of the current node to point to the previous node.
    
    return newHead; // Return the new head of the reversed linked list.
};
```