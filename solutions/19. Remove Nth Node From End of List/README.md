# [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/)

# Intuition

The idea is to use two pointers, `fast` and `slow`, where `fast` advances `n` steps ahead of `slow`. When `fast` reaches the end of the list, `slow` will be at the correct position to remove the Nth node from the end.

# Approach

1. Starting with `fast` and `slow` at the head is the correct setup for the two-pointer method.
2. Advance `fast` by `n` Steps. This creates a gap of `n` nodes between `fast` and `slow`, which is crucial for identifying the Nth node from the end.
3. If `fast` is null after advancing `n` steps, the head is the Nth node from the end. Returning `head.next` effectively removes the head.
4. Move `fast` and `slow` until `fast` reaches the last node. Now, `slow` is just before the node to be removed.
5. Skipping the next node in `slow` correctly removes the targeted node by pointing `slow.next` to `slow.next.next`
6. Return the head of the modified list.

# Complexity

- Time Complexity: O(n), where n is the number of nodes in the list. The algorithm makes a single pass through the list.
- Space Complexity: O(1), as it only uses constant extra space for the pointers.

# Code

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // Initialize two pointers to the head of the list
  let fast = head,
    slow = head;

  // Move 'fast' n steps ahead to create the required gap
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // If 'fast' reached the end, the head needs to be removed
  if (fast === null) {
    return head.next; // Skip the head
  }

  // Move both pointers until 'fast' reaches the last node
  while (fast.next !== null) {
    fast = fast.next; // Advance 'fast'
    slow = slow.next; // Advance 'slow'
  }

  // 'slow' is now just before the node to be removed
  slow.next = slow.next.next; // Skip the target node

  return head; // Return the modified list
};
```
