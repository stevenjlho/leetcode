# [222. Count Complete Tree Nodes](https://leetcode.com/problems/count-complete-tree-nodes/)

## Intuition

To count the total nodes in a binary tree, we can traverse each node of the tree once and increment a counter for every node visited.

## Approach

1. If the `root` node is null, return 0 since there are no nodes to count.
2. Invoke the function recursively for the left and right children to count their nodes.
3. The sum of nodes in a tree rooted at root is the count of the root node (which is 1) added to the nodes of the left and right subtrees.

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

  // Count nodes in the left subtree
  const left = countNodes(root.left);

  // Count nodes in the right subtree
  const right = countNodes(root.right);

  // Current tree's node count is 1 (for the root) plus nodes on the left and right
  return 1 + left + right;
};
```
