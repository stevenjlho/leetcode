# [2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/description/)

# Intuition

The key idea is to iterate through both linked lists simultaneously, adding corresponding digits along with any carry from the previous addition. If one list is shorter, its missing digits are considered as zeros.

# Approach

1. Initialize a `dummy` node to simplify handling the head of the result list.
2. Initialize `tail` to keep track of the end of the resulting list.
3. Initialize `carry` to store carry-over values during addition.
4. Iterating through Lists until all digits in both lists are processed and no carry remains.
   - Extract digits from `l1` and `l2`, defaulting to 0 if the list ends.
   - Compute the sum of the two digits and the carry. The new digit for the resulting list is `sum % 10`, and the new carry is `Math.floor(sum / 10)`.
   - Create a new node for the digits and append it to `tail.next`. Move tail to the next node to keep track of the next new node.
   - Move to the next nodes in `l1` and `l2` if available; otherwise, set to `null`.
5. Return the next node of `dummy`, which is the head of the result list.

# Complexity

- Time Complexity: O(max(N, M)), where N and M are the lengths of `l1` and `l2`, respectively. 
- Space Complexity: O(max(N, M)), as a new list is created to store the result. The length of the new list is at most max(N, M) + 1.

# Code

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0); // Dummy head to simplify edge cases
  let tail = dummy; // Tail to track the end of the resulting list
  let carry = 0; // Carry for addition

  // Iterate as long as there is a digit in l1 or l2, or a carry
  while (l1 !== null || l2 !== null || carry !== 0) {
    let digit1 = l1 !== null ? l1.val : 0; // Get digit from l1, or 0 if l1 is null
    let digit2 = l2 !== null ? l2.val : 0; // Get digit from l2, or 0 if l2 is null

    let sum = digit1 + digit2 + carry; // Calculate sum
    let digit = sum % 10; // New digit for the result list
    carry = Math.floor(sum / 10); // Calculate carry for next addition

    let newNode = new ListNode(digit); // Create a new node for the digit
    tail.next = newNode; // Add new node to the result list
    tail = tail.next; // Move tail to the new node

    // Move to next nodes in l1 and l2, or null if at the end
    l1 = l1 !== null ? l1.next : null;
    l2 = l2 !== null ? l2.next : null;
  }

  return dummy.next; // Return the result list, excluding the dummy head
};
```
