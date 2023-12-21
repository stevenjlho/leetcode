# [148. Sort List](https://leetcode.com/problems/sort-list/description/)

## Intuition

Merge sort involves dividing the list into halves, recursively sorting each half, and then merging the sorted halves.

## Approach

1.  If the list is empty or contains only one node, it is already sorted. Return the head.
2.  Finding the middle using Tortoise and Hare Algorithm.
    - Use the slow and fast pointer approach (Tortoise and Hare algorithm) to find the middle of the list. Move `slow` by one step and `fast` by two steps. When `fast` reaches the end, `slow` will be at the middle.
    - Break the list into two halves by setting the node before `slow` (`temp`) to point to null.
3.  Recursively call `sortList` on the first half (starting from `head`) and the second half (starting from `slow`).
4.  Use the `mergeList` function to merge the two sorted halves into a single sorted list.

## Complexity

- Time complexity: O(n log n). Merge sort achieves this by dividing the list in half at each step (log n divisions), and each division involves traversing the list (n).
- Space complexity: O(1). The space complexity is constant as it only uses two pointers regardless of the size of the input list.

## Code

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
 * @return {ListNode}
 */
var sortList = function (head) {
  // If the list is empty or has a single node, it's already sorted.
  if (head === null || head.next === null) return head;

  // Initialize pointers for finding the middle of the list.
  let temp = null,
    slow = head,
    fast = head;

  // Finding the middle using Tortoise and Hare Algorithm.
  while (fast !== null && fast.next !== null) {
    temp = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  // Split the list into two halves.
  temp.next = null;

  // Recursively sort each half.
  let leftSorted = sortList(head);
  let rightSorted = sortList(slow);

  // Merge the two sorted halves.
  return mergeList(leftSorted, rightSorted);
};

// Merging two sorted linked lists.
function mergeList(l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;

  // Merge the lists by choosing the smaller node from l1 or l2.
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  // Attach any remaining nodes from either list.
  current.next = l1 !== null ? l1 : l2;

  return dummyHead.next;
}
```
