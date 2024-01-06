# [155. Min Stack](https://leetcode.com/problems/min-stack/description/)

## Intuition

The key idea is to keep track of the minimum element at each level of the stack, so when elements are popped off, the next minimum can be easily identified without the need to traverse the entire stack.

## Approach

1. Node Class. Auxiliary class used to create nodes of the stack.

   - Each node contains the value (`val`), the minimum value up to that point (`min`), and a reference to the next node (`next`).

2. MinStack Constructor - `constructor()`

   - Initializes an empty stack by setting the `head` to `null`. The `head` will point to the top of the stack.

3. Push - `push(x)`

   - If the stack is empty (`this.head === null`), create a new node where both the value and minimum are `x`.
   - If the stack is not empty, create a new node where `val` is `x` and `min` is the minimum of `x` and the current `min` at the head of the stack. Update `head` to point to this new node.

4. Pop - `pop()`

   - Removes the top element from the stack by setting `this.head` to the next node (`this.head.next`). Ensure to check if the stack is not empty before performing this operation.

5. Top - `top()`.

   - Returns the value (`val`) of the top element of the stack. Ideally, include a check to ensure the stack is not empty.

6. GetMin - `getMin()`
   - Returns the minimum value (`min`) from the top of the stack. Again, an empty stack check is advisable.

## Complexity

- Time Complexity: For `push()`, `pop()`, `top()`, and `getMin()`, the time complexity is O(1) as these operations involve only a few steps of direct access or assignment.
- Space complexity: O(n) where n is the number of elements in the stack. Each element in the stack is stored as a node with additional space to keep track of the minimum element up to that point.

## Code

```javascript
class Node {
  constructor(val, min, next) {
    this.val = val; // Value of the node
    this.min = min; // Minimum value up to this node
    this.next = next; // Next node in the stack
  }
}

class MinStack {
  constructor() {
    this.head = null; // Initialize an empty stack
  }

  push(x) {
    if (this.head === null) {
      this.head = new Node(x, x, null); // Create new node as the first node in the stack
    } else {
      this.head = new Node(x, Math.min(x, this.head.min), this.head); // New node becomes the head with updated min
    }
  }

  pop() {
    if (this.head !== null) {
      this.head = this.head.next; // Remove the top element from the stack
    }
  }

  top() {
    return this.head ? this.head.val : undefined; // Return the top value, with empty stack check
  }

  getMin() {
    return this.head ? this.head.min : undefined; // Return the minimum value, with empty stack check
  }
}
```
