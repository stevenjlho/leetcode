# [2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/description/)

# Intuition

The key idea is to iterate through both linked lists simultaneously, adding corresponding digits along with any carry from the previous addition. If one list is shorter, its missing digits are considered as zeros.

# Approach

1.  Initialize a Dummy Head to simplify edge cases, allowing for the easy addition of new nodes.
2.  Iterate Through Lists: Loop through `l1` and `l2` as long as at least one of them has not reached the end, or there is a carry-over.
    - Extract the current digit from each list (`digit1` and `digit2`). If a list has ended, use 0 as its digit.
    - Add the two digits along with the carry from the previous addition. The new digit for the resulting list is `sum % 10`, and the new carry is `Math.floor(sum / 10)`.
    - Create a new node for the digits and append it to `tail.next`. Move tail to the next node to keep track of the next new node.
    - Move to the next node in each list, handling cases where a list may have ended.
3.  Since the first node is a dummy, return `dummyHead.next`.

# Complexity

- Time Complexity: O(max(n, m)), where `n` and `m` are the lengths of the two input lists. The algorithm iterates through both lists in parallel once.
- Space Complexity: O(max(n, m)), as a new list is created to store the result. The length of the resulting list is at most max(n, m) + 1 (due to a possible carry).

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
  let dummyHead = new ListNode(0); // Dummy head to simplify edge cases
  let tail = dummyHead; // Tail to track the end of the resulting list
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

  return dummyHead.next; // Return the result list, excluding the dummy head
};
```
