# [155. Min Stack](https://leetcode.com/problems/min-stack/description/)

## Intuition

The key idea is to keep track of the minimum element at each level of the stack, so when elements are popped off, the next minimum can be easily identified without the need to traverse the entire stack.

## Approach

1. MinStack Constructor - `constructor()`
   - Initializes an empty stack by setting the `head` to `null`.
   - The `head` will point to the top of the stack.

2. Push - `push(x)`. This method adds an element to the top of the stack.
   - If the stack is empty (`this.head === null`), create a new node where both the value and minimum are `x`.
   - If the stack is not empty, create a new node where the minimum is the lesser of `x` and the current minimum at the head of the stack (`this.head.min`). This keeps track of the minimum value up to that point.
   - The new node is then set as the new head of the stack.

3. Pop - `pop()`. Removes the top element from the stack.   
   - Sets `this.head` to the next node in the stack (`this.head.next`), effectively removing the top node.
   - Does not handle the case where the stack is empty. Ideally, it should check if the stack is empty before performing the pop operation to prevent errors.

4. Top - `top()`. Returns the value of the top element of the stack.
   - Simply accesses `this.head.val`.
   - Should handle the case of an empty stack to avoid runtime errors.

5. GetMin - `getMin()`. Returns the minimum element in the stack.
   - Since each node tracks the minimum up to that point, `this.head.min` gives the current minimum.
   - As with `top()`, should include handling for an empty stack.

6. Node Class. Auxiliary class used to create nodes of the stack.
   - Each node contains the value (`val`), the minimum value up to that point (`min`), and a reference to the next node (`next`).

## Complexity

- Time Complexity: For `push()`, `pop()`, `top()`, and `getMin()`, the time complexity is O(1) as these operations involve only a few steps of direct access or assignment.
- Space complexity: O(n) where n is the number of elements in the stack. Each element in the stack is stored as a node with additional space to keep track of the minimum element up to that point.

## Code

```javascript
class MinStack {
  constructor() {
    this.head = null; // Initialize an empty stack
  }

  push(x) {
    if (this.head === null) {
      // If the stack is empty, create a new node where value and min are both x
      this.head = new Node(x, x, null);
    } else {
      // If not empty, create a new node where the min is the lesser of x and the current min
      this.head = new Node(x, Math.min(x, this.head.min), this.head);
    }
  }

  pop() {
    // Remove the top element from the stack (ideally check for an empty stack first)
    this.head = this.head.next;
  }

  top() {
    // Return the value at the top of the stack (add empty stack check)
    return this.head.val;
  }

  getMin() {
    // Return the minimum value in the stack (add empty stack check)
    return this.head.min;
  }
}

class Node {
  constructor(val, min, next) {
    this.val = val; // Value of the node
    this.min = min; // Minimum value up to this node
    this.next = next; // Next node in the stack
  }
}
```
