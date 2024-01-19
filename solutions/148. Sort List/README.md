# [148. Sort List](https://leetcode.com/problems/sort-list/description/)

## Intuition

Merge sort involves dividing the list into halves, recursively sorting each half, and then merging the sorted halves.

## Approach

1. Check if the list is empty (`head === null`) or contains only one node (`head.next === null`).
2. Initialize two pointers, `slow` and `fast`, both starting at `head`, and create `temp` to `null`.
3. Start a loop to find the middle of the list.
   - Use `temp` to track the node before `slow`.
   - The `slow` pointer moves one node at a time, while `fast` moves two nodes at a time. When `fast` reaches the end of the list, `slow` will be at the middle.
4. Set `temp.next` to null to break the list into two parts. This split allows independent sorting of each half.
5. Recursively call `sortList` for both halves. The function will continue splitting and sorting until base cases (single-node lists) are reached.
6. Use the `mergeList` function to merge the sorted halves.
   - Create a dummy node (`dummy`) to simplify the merge process.
   - Use a `current` pointer to point to `dummy`. This pointer is used to construct the merged list.
   - Enter a loop that continues as long as there are nodes left in both `list1` and `list2`.
     - Compare the head nodes of both halves and attach the smaller one to the merged list.
     - Advance the pointer of the list from which the node was taken (`list1` or `list2`) and continue until all nodes are merged.
   - If one list is exhausted before the other, attach the remaining nodes to the merged list.
   - The function returns `dummy.next`, which points to the start of the merged list

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
function mergeList(list1, list2) {
  let dummy = new ListNode(0); // Dummy node as a placeholder
  let current = dummy; // Pointer to build the merged list

  // Iteratively merge the lists
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1; // Attach smaller node from list1
      list1 = list1.next;
    } else {
      current.next = list2; // Attach smaller node from list1
      list2 = list2.next;
    }
    current = current.next; // Advance current to next in merged list
  }

  // Append any remaining nodes
  current.next = list1 !== null ? list1 : list2;

  return dummy.next; // Return merged list, excluding dummy head
}
```
