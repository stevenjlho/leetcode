# [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)

# Two Pointers

## Intuition

The key is to use two pointers to traverse the linked list, and forward to keep track of nodes to update reverse links.

## Approach

1. Initialize `prev` to `null`. This will be used to mark the end of the reversed list.
   Initialize `current` to the `head` of the original list. This is the node we start with while traversing the list.
2. Traverse the list using `current` until the node is `null`.
3. Save the next node in `next`. This is necessary because reversing the `next` pointer of the `current` node will lose access to the rest of the list.
4. Set `current.next` to `prev`, effectively reversing the link..
5. Move `prev` to `current` (since `current` will now become the previous node in the next iteration), and move `current` to `next` (to proceed with the next node in the list).
6. After the loop, `prev` will point to the new head of the reversed list, which is returned.

## Complexity

- Time complexity: O(n), the algorithm iterates through linked list once.
- Space complexity: O(1), we are not using any extra space.

## Code

```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;       // No previous node at start
  let current = head;    // Begin with the head of the list

  while (current) {      
    const next = current.next; // Save next node
    current.next = prev; // Reverse the link
    prev = current;      // Update previous to current
    current = next;      // Move to next node
  }

  return prev;           // New head of the reversed list
};
```

# Recursion

## Intuition

The idea is to break down the list into smaller sublists, reverse each recursively, and then rewire the connections to achieve the overall reversal.

## Approach

1. If the `head` is `null` or there is only one node (`head.next === null`), return the `head`. This is because a single node or an empty list is already reversed in itself.
2. Recursively reverse the sublist starting from the second node (`head.next`). The call will continue until it reaches the end of the list, where the base case takes effect.
3. After reversing the sublist, the next step is to set the next node of the original head (`head.next`) to point back to the head. This step is crucial as it reverses the direction of the link between the current node and its next node.
4. Set the `next` pointer of the original head node to `null` to avoid cycles in the list (`head.next = null`).
5. Since the head of the input list becomes the tail after reversal, the new head (returned by the recursive call) is returned as the result of the entire function.

## Complexity

- Time complexity: O(n), the algorithm iterates through linked list once.
- Space complexity: O(n), due to the recursion stack holding a function call for each node.

## Code

```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // Base case for empty list or single node
  if (head === null || head.next === null) {
    return head;
  }

  // Recursively reverse from the second node onward
  let newHead = reverseList(head.next);

  // Rewire the link to point back to the current node
  head.next.next = head;

  // Clear the current node's next pointer to avoid a cycle
  head.next = null;

  // Return the new head of the reversed list
  return newHead;
};
```
