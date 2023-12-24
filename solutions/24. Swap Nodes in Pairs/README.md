# [24. Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/description/)

# Iteration

## Intuition

The key strategy is to use pointers to rearrange the links between nodes without altering the data within them.

## Approach

1.  If the list has fewer than two nodes (`head` is null or `head.next` is null), return the head as no swapping is needed.
2.  Create a dummy node to simplify the handling of edge cases.
3.  Initialize `prevNode` to point to `dummyNode`, as a tracker or anchor that always points to the node just before the current pair of nodes that are being processed for swapping.
4.  Initialize `curNode` to point to `head`, as the first node of the pair that is being swapped.
5.  As long as `curNode` and `curNode.next` are not null (ensuring there are two nodes to swap), proceed with the swapping logic.
    - Set `prevNode.next` to `curNode.next`, linking `prevNode` to the second node of the current pair.
    - Set `curNode.next` to the node following its pair (effectively skipping one node), which detaches the first node of the pair from its original next node.
    - Link the second node of the pair back to `curNode`, completing the swap by setting `prevNode.next.next` to `curNode`.
    - Move `prevNode` to `curNode`, positioning it before the next pair to be swapped.
    - Advance `curNode` to its next node, moving to the next pair.
6.  Return `dummyNode.next`, which points to the new head of the swapped list.

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
