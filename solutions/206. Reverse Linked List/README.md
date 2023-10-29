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
var reverseList = function (head) {
  let prev = null;
  let current = head;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};
```

# Recursion

## Intuition

Reversing a linked list can be approached recursively by first reaching the end of the list and then rewiring the next pointers from the end towards the start.

## Approach

1. If the `head` is `null` or there is only one node (i.e., `head.next` is `null`), return `head` as the new head of the reversed list.
2. Recursively call `reverseList` starting from the second node.
3. Once we reach the end, `newHead` will represent the head of the reversed list.
4. Each stack unwinds, rewiring the current `head.next` node's `next` pointer back to the `head`.
5. Clear the `head` node's `next` pointer to avoid loops.
6. Finally, we return `newHead`, which represents the new head of the reversed linked list.

## Complexity

- Time complexity: O(n), the algorithm iterates through linked list once.
- Space complexity: O(n), due to the recursion stack holding a function call for each node.

## Code

```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // Base case: if the list is empty or has only one node, return head.
  if (head === null || head.next === null) {
    return head;
  }

  // Recursively reverse the rest of the list starting from the second node.
  let newHead = reverseList(head.next);

  // Rewire the current node's next node's next pointer back to the current node.
  head.next.next = head;

  // Clear the current node's next pointer.
  head.next = null;

  // Return the new head of the reversed list.
  return newHead;
};
```
