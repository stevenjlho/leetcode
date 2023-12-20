# [142. Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/description/)

## Intuition

The detection of the cycle’s start node involves first confirming the presence of a cycle using two pointers moving at different speeds, and then using the distance properties of these pointers to pinpoint the cycle's start.

## Approach

1.  Start with two pointers `slow` and `fast`, both at the head of the list. `slow` moves one step at a time, while `fast` moves two steps.
2.  Traverse the list with `slow` and `fast`. If `fast` or `fast.next` becomes null, it indicates there's no cycle, so return null.
3.  If `slow` equals `fast` (cycle detected), break out of the loop.
4.  Once a cycle is detected, reset one pointer to the head of the list. Keep the other pointer at the meeting point.
5.  Move both pointers one step at a time. The point where they meet again is the start of the cycle.
6.  Return the node where both pointers meet, which is the start node of the cycle.

## Complexity

- Time complexity: The algorithm has two major phases: detecting a cycle (O(n)) and finding the start node (also O(n)). In total, it remains O(n) as constants are disregarded in Big O notation.
- Space complexity: O(1), the algorithm uses a constant amount of extra space regardless of the input size.

## Code

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let slow = head,
    fast = head;

  // Detecting the cycle using Floyd's Tortoise and Hare algorithm
  while (fast !== null && fast.next !== null) {
    slow = slow.next; // Move slow by one step
    fast = fast.next.next; // Move fast by two steps

    // Check if the cycle is detected
    if (slow === fast) break;
  }

  // If fast pointer reaches the end, there is no cycle
  if (fast === null || fast.next === null) return null;

  // Reset one pointer to the head to find the cycle start
  slow = head;
  while (slow !== fast) {
    // Move both pointers by one step
    slow = slow.next;
    fast = fast.next;
  }

  // Return the start node of the cycle
  return slow;
};
```
