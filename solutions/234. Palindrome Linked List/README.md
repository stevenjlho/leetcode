# [234. Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/description/)

## Intuition

We can use the two-pointer approach to find the middle of the list. Then, we reverse the second half and compare it with the first half.

## Approach

1. Initialize two pointers, `slow` and `fast`, both pointing to the head of the linked list.
2. `slow` moves one step at a time, `fast` moves two steps. When `fast` reaches the end, `slow` will be at the middle. For odd-sized lists, move `slow` one step further.
3. Reverse the second half of the list starting from `slow`. Use a `prev` pointer to facilitate the reversal.
   - Initialize a variable `prev` to `null`.
   - Iterate through the second half of the list (from `slow` to the end):
   - Store the `next` node of `slow`.
   - Update the `next` pointer of `slow` to point to `prev`, effectively reversing the list.
   - Move `prev` to the current `slow` node and move `slow` to the `next`, this can continue reversing the list.
4. Compare the first half with the reversed second half node by node. If any node doesn't match, return `false`.
   - Initialize a loop while `prev` is not `null`:
   - Compare the `val` of the current node in the first half (denoted by `head`) with the `val` of the current node in the reversed second half (denoted by `prev`).
   - If they are not equal, return `false` as it's not a palindrome.
   - Move `head` and `prev` to their respective next nodes.
5. If the loop completes without finding any non-matching elements, return `true` as it's a palindrome.

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
