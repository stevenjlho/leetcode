# [102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/description/)

## Intuition

Traverse the binary tree level by level and collect the nodes at each level in separate arrays.

## Approach

1. Check if the root node is null. If it is, return an empty array as there are no levels to traverse.
2. Initialize an empty array `result` to store the level order traversal results, and `queue` to keep track of the nodes waiting to be dequeued.
3. Push the root node into the queue.
4. Perform a while loop while the queue is not empty:
   - Get the number of nodes of `queue` in the current level, don't directly use queue.length, because its length is not fixed.
   - Initialize an empty array `curLevel` to store the value of nodes at the current level.
   - Run a for loop for the number of nodes in the current level (based on the `length`):
     - Dequeue a node from the queue.
     - Push the value of the dequeued node into the `curLevel` array.
     - Enqueue the left and right children of the dequeued node into the `queue`, if they exist.
   - Push the `curLevel` array into the `result` array to record the nodes at the current level.
5. Return the `result` array containing the level order traversal of the binary tree.

## Complexity

- Time complexity: O(n) where n is the number of nodes in the binary tree. We visit each node once.
- Space complexity: O(m), where m is the maximum number of nodes at any level in the binary tree. In the worst case, when the tree is a perfect binary tree, m is approximately n/2, making it O(n).

## Code

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) {
    return [];
  }

  // Array to store the final level order traversal result.
  let result = [];
  // Queue to facilitate the traversal.
  let queue = [];

  queue.push(root);

  while (queue.length > 0) {
    // Get the number of nodes in the current level, don't directly use queue.length, because its length is not fixed.
    const length = queue.length;
    // Array to store nodes at the current level.
    let curLevel = [];

    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      // Record the value of the dequeued node.
      curLevel.push(node.val);

      // Enqueue the left and right children, if they exist.
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    // Record nodes at the current level.
    result.push(curLevel);
  }

  return result;
};
```
