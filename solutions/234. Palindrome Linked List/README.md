# [234. Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/description/)

## Intuition
We can use two pointers `slow` and `fast` to find the middle node, then reverse the rest of linked list from middle node. Finally, compare the start and reverse end half.

## Approach
1. Initialize two pointers `slow` and `fast`, which are used to traverse the linked list and find the middle node of the linked list.
2. Iterate through the linked list, `slow` moves one step at a time, and `fast` moves two steps at a time. When `fast` reaches the end of the list or goes beyond it, `slow` will be at the middle node.
3. If the number of nodes in the linked list is odd, move `slow` one more step to the next node as it represents the middle node.
4. Reverse the second half of the linked list, starting from the middle node.
5. Compare the first half and the reversed second half of the linked list. Start by iterating through both halves, checking if the values of corresponding nodes match.
6. If a mismatch is encountered at any stage, return `false` as the linked list is not a palindrome.
7. If the entire linked list is traversed without any mismatches, return `true`, indicating that it is a palindrome.

## Complexity
- Time complexity: O(n), the algorithm iterates through linked list once.
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
var isPalindrome = function(head) {
    // Step 1: Find the middle element
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: If the number of nodes is odd, move slow to one point
    if (fast !== null && fast.next === null) {
        slow = slow.next;
    }

    // Step 3: Reverse the end half
    let prev = null;

    while (slow !== null) {
        const next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

    fast = head;
    slow = prev;

    // Step 4: Compare the start half and end half
    while (slow != null) {
        if (fast.val != slow.val) return false;
        fast = fast.next;
        slow = slow.next;
    }
    return true;
};
```