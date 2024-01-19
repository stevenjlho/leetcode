# [142. Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/description/)

## Intuition

Use two pointers (`slow` and `fast`) to move through the linked list at different speeds. If there's a cycle, they will eventually meet inside the cycle.

## Approach

1. Start with two pointers `slow` and `fast` at the head of the list. `slow` moves one step at a time, while `fast` moves two steps.
1. Initialize two pointers, `slow` and `fast`, both at the head of the list.
2. Start a loop as long as `fast` doesn't reach the end of the list. 
   - Move `slow` one step forward (`slow = slow.next`).
   - Move `fast` two steps forward (`fast = fast.next.next`).
   - If `slow` and `fast` meet (`slow === fast`), a cycle is detected and we break out of the loop.
3. If `fast` or `fast.next` is `null`, it means the list has ended, and there is no cycle. Return `null`.
4. Reset `slow` to the head of the list. Keep `fast` at the meeting point.
5. Move both `slow` and `fast` one step at a time while `slow` isn't equal to `fast`.
6. When `slow` and `fast` meet again, the point where they meet is the start of the cycle.

**If you don't know the proof of this approach, you can check out [this answer](https://leetcode.com/problems/linked-list-cycle-ii/solutions/1701128/c-java-python-slow-and-fast-image-explanation-beginner-friendly/).**

## Complexity

- Time complexity: O(N), where N is the number of nodes in the list. In the worst case, each node is visited twice (once to detect the cycle and once to find the cycle start).
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
