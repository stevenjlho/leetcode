# [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/description)

## Intuition

We can use two pointers traverse the linked list, `slow` pointer moves forward to one node while `fast` pointer moves forward two node, if `slow` equals `fast`, it means there is a cycle.

## Approach

1. Initialize `slow`, which will keep track of moving forward one node. Initialize `fast`, which will keep track of moving forward two nodes.
2. Traverse the linked list, and at each step, move `slow` one step and `fast` two steps.
3. If at any point `slow` and `fast` meet, it means there is a cycle in the linked list, so we return `true`.
4. If `fast` becomes `null` or `fast.next` becomes `null`, it means there is no cycle, and we return `false`.

## Complexity

- Time complexity: O(n), the algorithm traverse linked list once.
- Space complexity: O(1), we are not using any extra space.

## Code

```javascript
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let slow = head,
    fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};
```
