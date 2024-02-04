# [138. Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/description/)

## Intuition

The core strategy is to use a hash map to keep track of already copied nodes, ensuring that each original node corresponds to a new, identical node.

## Approach

1. Check if the head is null. If it is, return null, as there's nothing to copy.
2. Create a `Map` (oldToNew) to store mapping from original to copied nodes
3. Initialize `tail` to `head` to iterate over the original list.
4. Iterate over the original list starting from `head`
   - For each node, create a new node with the same value and store the mapping (original node -> new node) in `oldToNew`.
   - Advance `tail` to `tail.next` for next iteration.
5. Reset `tail` to point to the head of the original list to prepare for setting the next and random pointers of each node.
6. Traverse the list again. For each node in the original list:
   - Set the `next` pointer of its copy to the copy of `tail.next` (or `null` if `tail.next` is `null`).
   - Set the `random` pointer of its copy similarly, based on `tail.random`.
   - Advance `tail` to `tail.next` for next iteration.
7. Return the head of the new list, which is the copy of the original head, retrieved from `oldToNew`.

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
var copyRandomList = function (head) { if (!head) return null; // Return null for an empty list
  const oldToNew = new Map(); // Map to link old nodes to their new copies

  // First pass: create new nodes
  let tail = head;
  while (tail !== null) {
    oldToNew.set(tail, new Node(tail.val)); // Map each old node to a new node with the same value
    tail = tail.next;
  }

  // Second pass: set next and random pointers for copies
  tail = head;
  while (tail !== null) {
    // Get the copied node and set its next and random pointers
    let copiedNode = oldToNew.get(tail);
    copiedNode.next = oldToNew.get(tail.next) || null; // Set next pointer
    copiedNode.random = oldToNew.get(tail.random) || null; // Set random pointer
    tail = tail.next;
  }

  // Return the head of the copied list
  return oldToNew.get(head);
};
```
