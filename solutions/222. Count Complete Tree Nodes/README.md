# [222. Count Complete Tree Nodes](https://leetcode.com/problems/count-complete-tree-nodes/)

## Intuition

We can traverse each node once and increment the counter for every node encountered.

## Approach

1. Return `0` if the `root` node is null as there are no nodes to count.
2. Invoke the function recursively for the left and right children to count their nodes.
3. Add `1` for the current node to the sum of counts from step 2 and return this as the total count for the subtree rooted at the current node.

## Complexity

- Time complexity: O(n), where n is the number of nodes in the binary tree. In the worst case, we would have to visit all nodes of the tree.
- Space complexity: O(h), where h is the height of the binary tree. In the worst case, the tree is completely unbalanced, and the recursion would go as deep as N, leading to a space complexity of O(N). But in the best case (the tree is completely balanced), the height of the tree would be log(N).

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
 * @return {number}
 */
var countNodes = function (root) {
  // Base case: if the node is null, it doesn't exist, so count it as 0
  if (root === null) {
    return 0;
  }

  // Recursively count nodes in the left subtree
  const leftCount = countNodes(root.left);
  // Recursively count nodes in the right subtree
  const rightCount = countNodes(root.right);

  // Return the total node count: 1 (current node) + left subtree nodes + right subtree nodes
  return 1 + left + right;
};
```
