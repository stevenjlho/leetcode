# [160. Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/description/)

# Iteration

## Intuition

The key concept is to equalize the traversal paths of two pointers moving through both lists.

## Approach

1.  Check if either list is empty (`headA` or `headB` is `null`). An intersection is impossible in this scenario, so return `null`.
2.  Start with two pointers, `pA` and `pB`, at the heads of `headA` and `headB`, respectively. These pointers will traverse the lists.
3.  Iterate in a loop while `pA` is not equal to `pB`. This loop continues until the pointers meet (at the intersection or at `null` if no intersection exists).
    - Inside the loop, move `pA` to the next node in its list or to `headB` if it reaches the end of list A. Similarly, move `pB` to the next node in its list or to `headA` if it reaches the end of list B.
    - This clever trick ensures that both pointers traverse the same total distance, making them meet at the intersection node if one exists.
4.  The loop breaks when `pA` and `pB` meet. At this point, either they are both `null` (no intersection), or they are at the intersection node. Return `pA` (or `pB`, as they are the same at this point).

## Complexity

- Time complexity: O(m + n), where m is the length of list A, and n is the length of list B. 
- Space complexity:  O(1), as the algorithm only uses two extra pointers, regardless of the size of the input lists.

## Code

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // Return null if either list is empty
    if (headA === null || headB === null) return null;

    // Initialize two pointers for each list
    let pA = headA;
    let pB = headB;

    // Iterate until the pointers meet
    while (pA !== pB) {
        // If pA reaches the end of list A, switch to headB, else move to the next node
        pA = pA === null ? headB : pA.next;
        // If pB reaches the end of list B, switch to headA, else move to the next node
        pB = pB === null ? headA : pB.next;
    }

    // Return the meeting point (intersection node or null)
    return pA;
};
```