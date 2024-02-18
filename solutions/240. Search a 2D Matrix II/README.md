# [240. Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/description/)

## Intuition

Starting from the top-right corner provides a unique position where moving left decreases the value and moving down increases it. This strategic starting point allows for an efficient search by eliminating one row or one column in each step.

## Approach

1. Confirm the matrix isn't empty or malformed, which could lead to invalid access.
2. Set the initial position at the top-right corner of the matrix, which acts as a reference point for comparison with the `target`.
3. Continue moving within the matrix based on the comparison:
   - If the `target` matches the current element, return `true`.
   - If the `target` is less than the current element, move one column to the left (decrease the value).
   - If the `target` is greater than the current element, move one row down (increase the value).
4. If the loop ends without finding the `target`, conclude that the `target` isn't present and return `false`.

## Complexity

- Time complexity: If the loop ends without finding the `target`, conclude that the `target` isn't present and return `false`.
- Space complexity: O(1), as the algorithm uses a constant amount of space.

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
var swapPairs = function (head) {
  if (!head || !head.next) return head; // Base case: no need to swap for empty or single-node list

  let dummy = new ListNode(0); // Dummy node to handle edge case at head
  dummy.next = head;
  let prev = dummy; // `prev` points to the node before the pair being swapped

  // Iterate while there's at least a pair to swap
  while (prev.next && prev.next.next) {
    let first = prev.next; // First node of the pair
    let second = prev.next.next; // Second node of the pair

    // Perform the swap by re-linking the `next` pointers
    first.next = second.next; // Step 1: Link first node to the node after the second
    second.next = first; // Step 2: Link second node back to the first
    prev.next = second; // Step 3: Link `prev` node to the second (now first after swap)

    // Move `prev` two nodes ahead for the next swap
    prev = first;
  }

  return dummy.next; // The head of the modified list is dummy's next
};
```
