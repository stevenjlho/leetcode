# [24. Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/description/)

# Iteration

## Intuition

The intuition is to iterate through the list in pairs and reverse their order by adjusting the next pointers, effectively swapping each pair of adjacent nodes.

## Approach

1. Check if the list is empty or contains only one node. If so, no swap is needed; return the head as is.
2. Create a dummy node and point its next to the head of the list. This dummy node acts as a placeholder to simplify the swapping logic at the head of the list.
3. Use a variable `prev` to keep track of the node immediately before the current pair being swapped. Initialize `prev` with the dummy node.
4. Iterate through the list while the next two nodes in the pair exist.
   - Identify the first and second nodes in the current pair.
   - Perform the swap by adjusting the next pointers: point the first node's next to the second node's next, then link second node back to the first node, and finally point the `prev` node's next to the second node(now first after swap).
   - Update `prev` to the first node of the swapped pair, moving it two positions forward for the next iteration.
5. After the loop, the list's head is effectively the dummy node's next. Return this as the new head of the list.

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

# Recursion

// Todo
