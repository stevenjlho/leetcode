# [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/)

# Intuition

The idea is to use two pointers, `fast` and `slow`, where `fast` advances `n` steps ahead of `slow`. When `fast` reaches the end of the list, `slow` will be at the correct position to remove the Nth node from the end.

# Approach

1.  Starting with `fast` and `slow` at the head is the correct setup for the two-pointer method.
2.  Advance `fast` by `n` Steps. This creates a gap of `n` nodes between `fast` and `slow`, which is crucial for identifying the Nth node from the end.
3.  If `fast` is null after advancing `n` steps, the head is the Nth node from the end. Returning `head.next` effectively removes the head.
4.  Move `fast` and `slow` Until `fast` reaches the end. This ensures that when `fast` reaches the end of the list, `slow` will be just before the Nth node from the end.
5.  Skipping the next node in `slow` correctly removes the targeted node by pointing `slow.next` to `slow.next.next`
6.  Returning `head` provides the updated list.

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
  let fast = head,
    slow = head;

  // Advance 'fast' by 'n' nodes
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // If removing the first node
  if (fast === null) {
    return head.next;
  }

  // Move both 'fast' and 'slow' until 'fast' reaches the end
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // Skip the node after 'slow' - effectively removing it
  slow.next = slow.next.next;

  return head; // Return the modified list
};
```
