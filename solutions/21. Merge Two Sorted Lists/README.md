# [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/description/)

## Intuition

Merging two sorted lists can be efficiently done by iteratively comparing the heads of the lists and appending the smaller node to the merged list. A dummy node simplifies handling edge cases.

## Approach

1.  Create a `dummy` node to act as the start of the merged list.
2.  Use a `tail` pointer to keep track of the end of the merged list.
3.  While both `list1` and `list2` have nodes remaining:
    - Determine which node (from `list1` or `list2`) has the smaller value. Attach this node to the `tail` of the merged list.
    - Move the pointer forward in the list from which you took the smaller node. If `list1` had the smaller node, move to the next node in `list1`, and likewise for `list2`.
    - Move the `tail` pointer to this newly added node. This step ensures that `tail` always points to the last node of the merged list.
4.  Once one list is exhausted, append the remaining nodes of the other list to the merged list.
5.  Skip the `dummy` node and return the next node as the head of the merged list, since the `dummy` node was just a placeholder.

## Complexity

- Time complexity: O(m+n), where m and n are the lengths of `list1` and `list2`. Each iteration processes one node from either list.
- Space complexity: O(1), as the space used does not depend on the size of the input lists.

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
 * Merges two sorted linked lists.
 * @param {ListNode} list1 - First sorted linked list.
 * @param {ListNode} list2 - Second sorted linked list.
 * @return {ListNode} - The head of the merged sorted linked list.
 */
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(); // Dummy node to simplify edge cases
  let tail = dummy; // Tail of the merged list

  // Compare and merge nodes from both lists
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next; // Move the tail pointer
  }

  // Append the rest of the nodes from the non-exhausted list
  tail.next = list1 === null ? list2 : list1;

  return dummy.next; // Return the merged list, skipping the dummy node
};
```
