# [148. Sort List](https://leetcode.com/problems/sort-list/description/)

## Intuition

Merge sort involves dividing the list into halves, recursively sorting each half, and then merging the sorted halves.

## Approach

1.  Check if the list is empty (`head === null`) or contains only one node (`head.next === null`).
2.  Finding the middle using Tortoise and Hare Algorithm.
    - Initialize two pointers, `slow` and `fast`, both starting at `head`. The `slow` pointer moves one node at a time, while `fast` moves two nodes at a time. This way, when `fast` reaches the end of the list, `slow` will be at the middle.
    - `temp` is used to mark the end of the first half. It's initially set to `null` and updated in each iteration of the while loop to point to the node just before `slow`.
3.  After finding the middle, the list is split into two halves. `temp.next` is set to `null` to mark the end of the first half.
4.  Recursively sort each half of the list. `sortList(head)` sorts the first half, and `sortList(slow)` sorts the second half.
5.  Use the `mergeList` function to merge the two sorted halves into a single sorted list and the merged list is returned.
    - A dummy node (`dummyHead`) is created to simplify the merging process, especially when dealing with the head of the new list.
    - A `current` pointer is initialized to point to `dummyHead`. This pointer is used to construct the merged list.
    - Enter a loop that continues as long as there are nodes left in both `l1` and `l2`.
      - In each iteration, it compares the current nodes of `l1` and `l2`.
      - The node with the smaller value is appended to the merged list by setting `current.next` to that node and advance the pointer of the list from which the node was taken (`l1` or `l2`).
      - The `current` pointer is then advanced to `current.next`
    - After the loop, if either `l1` or `l2` still has nodes left (meaning the lists were of unequal lengths), these remaining nodes are appended to the end of the merged list.
    - The function returns `dummyHead.next`, which points to the start of the merged list

## Complexity

- Time complexity: O(n log n). Merge sort achieves this by dividing the list in half at each step (log n divisions), and each division involves traversing the list (n).
- Space complexity: O(1). The space complexity is constant as it only uses two pointers regardless of the size of the input list.

## Code

````javascript
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
  let dummyHead = new ListNode(0); // Dummy node as a placeholder
  let current = dummyHead; // Pointer to build the merged list

  // Iteratively merge the lists
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1; // Attach smaller node from l1
      l1 = l1.next; // Advance l1
    } else {
      current.next = l2; // Attach smaller node from l2
      l2 = l2.next; // Advance l2
    }
    current = current.next; // Advance current to next in merged list
  }

  // Append any remaining nodes
  current.next = l1 !== null ? l1 : l2;

  return dummyHead.next; // Return merged list, excluding dummy head
}
````
