# [230. Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/)

## Intuition

The kth smallest element in a Binary Search Tree (BST) is accessible by performing an in-order traversal, which processes nodes in ascending order.

## Approach

1. Initialize `result` to keep track of the smallest element.
2. Use a recursive function, `findNode`, to traverse the tree in-order (left node, current node, right node).
3. Decrease `k` by 1 each time a node is visited during the traversal.
4. When `k` becomes 0, it means the current node is the kth smallest. Record the value of this node in `result`.
5. Stop the recursion as soon as the kth element is found to optimize the process.

## Complexity

- Time complexity: O(n), where n is the number of nodes in the binary tree. In the worst case, we would have to visit all nodes of the tree.
- Space complexity: O(h), where h is the height of the binary tree. In the worst case, the tree is completely unbalanced, and the recursion would go as deep as N, leading to a space complexity of O(N). But in the best case (the tree is completely balanced), the height of the tree would be log(N).

## Code

```javascript
/**
 * Finds the kth smallest element in a BST.
 * @param {TreeNode} root - The root of the binary tree.
 * @param {number} k - The order of the smallest element to find.
 * @return {number} - The value of the kth smallest element.
 */
var kthSmallest = function (root, k) {
  let result = null;

  let findNode = (node) => {
    if (node === null) {
      return;
    }

    findNode(node.left);

    // Decrement k and check if this node is the kth smallest
    k -= 1;
    if (k === 0) {
      result = node.val;
      return;
    }

    findNode(node.right);
  };

  findNode(root);
  return result;
};
```
