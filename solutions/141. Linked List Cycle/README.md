# [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/description)

## Intuition
We can use two pointers traverse the linked list, `slow` pointer moves one step while `fast` pointer moves two steps, if `slow` equals `fast`, it means there is a cycle.

## Approach
1.  Initialize two pointers, `slow` and `fast`, both initially pointing to the head of the linked list.
2.  Traverse the linked list while moving `slow` one step at a time and `fast` two steps at a time.
3.  If there is no cycle in the linked list, `fast` will reach the end (`fast` or `fast.next` becomes `null`) before `slow`.
4.  If there is a cycle, `fast` will eventually catch up to `slow` inside the cycle, as each step reduces the gap between them by one node. This leads to them meeting at the same node.
5.  If a cycle is present, return `true`; otherwise, return `false`.

## Complexity
- Time complexity: O(n), where "n" is the number of nodes in the linked list.
- Space complexity: O(1), the algorithm uses a constant amount of extra space regardless of the input size.

## Code
```javascript
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // Initialize two pointers, both starting at the head of the list
  let slow = head;
  let fast = head;

  // Traverse the list until 'fast' reaches the end
  while (fast !== null && fast.next !== null) {
    // Move slow by one step and fast by two steps.
    slow = slow.next;
    fast = fast.next.next;

    // If the two pointers meet, there is a cycle.
    if (slow === fast) {
      return true;
    }
  }

  return false;
};
```