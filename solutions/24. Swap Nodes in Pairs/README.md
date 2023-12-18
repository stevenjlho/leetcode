# [24. Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/description/)

# Iteration

## Intuition

The core idea is to traverse the list and swap each pair of nodes. The task is performed iteratively, ensuring that each adjacent pair of nodes is swapped while maintaining the list's overall structure.

## Approach

1.  If the list has fewer than two nodes (`head` is null or `head.next` is null), return the head as no swapping is needed.
2.  Initialize a dummy node to simplify the handling of the head node and ensure a consistent approach for all node pairs.
3.  Setting up `prevNode` at the dummy node and `currNode` at the head prepares for the iterative traversal and swapping.
4.  Traverse and Swap Pairs: While there are at least two nodes left to process (`currNode` and `currNode.next` are not null):
    - Update `prevNode.next` to point to `currNode.next`, effectively moving the second node of the pair ahead.
    - Set `currNode.next` to the node following the next node, detaching the second node from its original next node.
    - Link the second node of the pair (`prevNode.next`) to `currNode`, completing the swap.
    - Move `prevNode` to `currNode` to progress to the next pair. Advance `currNode` to `currNode.next` to continue the traversal. 
    - Moving `prevNode` and `currNode` after each swap ensures continued progress through the list.
5.  Return `dummyNode.next`, which points to the new head of the swapped list.

## Complexity

- Time complexity: O(n), where n is the number of nodes in the list. The solution iterates through the list once.
- Space complexity: O(1), as the algorithm uses a constant amount of extra space regardless of the size of the input list.

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
  // Edge case: if the list has fewer than 2 nodes
  if (!head || !head.next) return head;

  let dummyNode = new ListNode(0); // Dummy node to handle head operations
  let prevNode = dummyNode; // Previous node, starting at dummy
  let currNode = head; // Current node, starting at head

  // Loop through the list while there are nodes to swap
  while (currNode && currNode.next) {
    prevNode.next = currNode.next; // Point previous node to the second node of the pair
    currNode.next = currNode.next.next; // Detach the first node of the pair
    prevNode.next.next = currNode; // Complete the swap by linking second node to first

    // Move to the next pair
    prevNode = currNode;
    currNode = currNode.next;
  }

  // Return the new head of the list
  return dummyNode.next;
};
```

# Recursion

// Todo
