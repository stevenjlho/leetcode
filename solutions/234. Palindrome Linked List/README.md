# [234. Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/description/)

## Intuition

We can use the two-pointer approach to find the middle of the list. Then, we reverse the second half and compare it with the first half.

## Approach

1. Initialize two pointers, `slow` and `fast`, both pointing to the head of the linked list.
2. `slow` moves one node at a time, while `fast` moves two nodes. When `fast` reaches the end, `slow` will be at the middle.
3. If the list has an odd number of elements, move `slow` one more step to ensure it starts at the beginning of the second half.
4. Reverse the list starting from `slow` by re-linking the nodes. `prev` points to the new head of the reversed half.
   - Initialize a variable `prev` to `null`.
   - Iterate through the second half of the list (from `slow` to the end):
   - Store the `next` node of `slow`.
   - Update the `next` pointer of `slow` to point to `prev`, effectively reversing the list.
   - Move `prev` to the current `slow` node and move `slow` to the `next`, this can continue reversing the list.
5. Traverse from the start of the list and the start of the reversed half simultaneously, comparing the values. If they differ, the list isn't a palindrome.
   - Initialize a loop while `prev` is not `null`:
   - Compare the `val` of the current node in the first half (denoted by `head`) with the `val` of the current node in the reversed second half (denoted by `prev`).
   - If they are not equal, return `false` as it's not a palindrome.
   - Move `head` and `prev` to their respective next nodes.
6. If the traversal completes without mismatches, the list is a palindrome.

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

  // Finding the middle of the list
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

  // Compare the first and reversed second halves
  while (prev !== null) {
    if (head.val !== prev.val) return false; // Mismatch found
    head = head.next;
    prev = prev.next;
  }

  // List is a palindrome
  return true;
};
```
