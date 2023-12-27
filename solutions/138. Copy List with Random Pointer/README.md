# [138. Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/description/)

## Intuition

The core strategy is to use a hash map to keep track of already copied nodes, ensuring that each original node corresponds to a new, identical node.

## Approach

1. Check if the head is null. If it is, return null, as there's nothing to copy.
2. Create a `Map` (oldToNew) to maintain a correspondence between nodes in the original list (`head`) and the new list.
3. Initialize `curr` to `head` to iterate over the original list.
4. Iterate over the original list starting from `head`
   - For each node in the original list, create a new node with the same value and store it in the map. This ensures that each original node now has a corresponding new node.
   - Advance `curr` to `curr.next` for next iteration.
5. Reset `curr` to point to the head of the original list.
6. Traverse the list again. For each node in the original list:
   - Use the map to find the corresponding new nodes for the next and random pointers and set the `next` and `random` pointers for the corresponding new node.
   - Advance `curr` to `curr.next` for next iteration.
7. Finally, return the new node that corresponds to the original list's head. This is the head of the new list.

## Complexity

- Time complexity: O(N), where N is the number of nodes in the linked list.
- Space complexity: O(N), as it creates a hash map to store the mapping from old nodes to new nodes, with each node taking up space in the map.

## Code

```javascript
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null; // Return null for an empty list

  const oldToNew = new Map(); // Map to link old nodes to their new copies

  // First pass: create new nodes
  let curr = head;
  while (curr !== null) {
    oldToNew.set(curr, new Node(curr.val)); // Map each old node to a new node with the same value
    curr = curr.next;
  }

  // Second pass: set next and random pointers
  curr = head;
  while (curr !== null) {
    oldToNew.get(curr).next = oldToNew.get(curr.next) || null; // Set next pointer
    oldToNew.get(curr).random = oldToNew.get(curr.random) || null; // Set random pointer
    curr = curr.next;
  }

  return oldToNew.get(head); // Return the deep copied list starting from the new head node
};
```
