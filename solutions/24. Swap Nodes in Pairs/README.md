# [24. Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/description/)

# Iteration

## Intuition

The core idea is to traverse the list and swap each pair of nodes. The task is performed iteratively, ensuring that each adjacent pair of nodes is swapped while maintaining the list's overall structure.

## Approach

1.  If the list has fewer than two nodes (`head` is null or `head.next` is null), return the head as no swapping is needed.
2.  Initialize a dummy node to simplify the handling of the head node and ensure a consistent approach for all node pairs.
3.  Setting up `prevNode` at the dummy node and `curNode` at the head prepares for the iterative traversal and swapping.
4.  Traverse and Swap Pairs: While there are at least two nodes left to process (`curNode` and `curNode.next` are not null):
    - Update `prevNode.next` to point to `curNode.next`, effectively moving the second node of the pair ahead.
    - Set `curNode.next` to the node after its pair (skip one node)
    - Link the second node of the pair (`prevNode.next`) to `curNode`, completing the swap.
    - Move `prevNode` to `curNode` and advance `curNode` to `curNode.next` to continue the traversal through the list.
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
  // Handle cases where the list is empty or has only one node
  if (!head || !head.next) return head;

  // Initialize a dummy node to act as a placeholder before the head
  let dummyNode = new ListNode(0);
  // Set prevNode to dummyNode; it will always point to the node before the current pair
  let prevNode = dummyNode;
  // Start curNode at the head; it represents the first node of the current pair
  let curNode = head;

  // Iterate through the list, swapping pairs of nodes
  while (curNode && curNode.next) {
    // Step 1: Link prevNode to the second node of the current pair
    prevNode.next = curNode.next;
    // Step 2: Link curNode to the node after its pair (skip one node)
    curNode.next = curNode.next.next;
    // Step 3: Link the second node of the pair (now first) back to curNode
    prevNode.next.next = curNode;

    // Move to the next pair: set prevNode to curNode, and advance curNode
    prevNode = curNode;
    curNode = curNode.next;
  }

  // Return the new head of the list, which follows the dummy node
  return dummyNode.next;
};
```

# Recursion

// Todo
