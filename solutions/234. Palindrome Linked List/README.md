# [234. Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/description/)

## Intuition

We can use two pointers `slow` and `fast` to find the middle node, then reverse the rest of linked list from middle node. Finally, compare the start and reverse end half.

## Approach

1. Initialize two pointers, `slow` and `fast`, both pointing to the head of the linked list.
2. `slow` will move one step at a time, while `fast` will move two steps at a time. This way, `slow` will reach the middle of the list when `fast` reaches the end.
3. If the number of nodes in the linked list is odd, move `slow` one more step to the next node as it represents the middle node.
4. Reverse the second half of the list. To do this:
   - Initialize a variable `prev` to `null`.
   - Iterate through the second half of the list (from `slow` to the end):
   - Store the `next` node of `slow`.
   - Update the `next` pointer of `slow` to point to `prev`, effectively reversing the list.
   - Move `prev` to the current `slow` node and move `slow` to the `next`, this can continue reversing the list.
5. Compare the original first half and the reversed second half.
   - Initialize a loop while `prev` is not `null`:
   - Compare the `val` of the current node in the first half (denoted by `head`) with the `val` of the current node in the reversed second half (denoted by `prev`).
   - If they are not equal, return `false` as it's not a palindrome.
   - Move `head` and `prev` to their respective next nodes.
6. If the loop completes without finding any non-matching elements, return `true` as it's a palindrome.

## Complexity

- Time complexity: O(n), where n is the number of nodes in the linked list.
- Space complexity: O(1), we are not using any extra space.

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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // Initialize pointers for finding the middle
  let slow = head;
  let fast = head;

  // Move slow and fast pointers to the middle.
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Adjust `slow` for odd-length lists
  if (fast !== null && fast.next === null) {
    slow = slow.next;
  }

  // prev will point to the new head of the reversed half
  let prev = null;

  // Reverse the second half of the list
  while (slow !== null) {
    const next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // Compare the start half and end half
  while (prev != null) {
    if (head.val != prev.val) return false;
    head = head.next;
    prev = prev.next;
  }
  return true;
};
```
