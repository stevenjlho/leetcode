# [617. Merge Two Binary Trees](https://leetcode.com/problems/merge-two-binary-trees/description/)

## Intuition

We need to merge them such that if two nodes overlap, their values are summed. If one of the nodes is null, we can return the other node as the merged node.

## Approach

1.  If `root1` is null, return `root2`. Conversely, if `root2` is null, return `root1`. These cases handle the situations where one tree has a node at a position while the other does not.
2.  For overlapping nodes of both trees, sum up their values and update `root1.val`.
3.  For subtrees, recursively merge the left subtree of `root1` with the left subtree of `root2` and assign the result to `root1.left`.
4.  Similarly, merge the right subtrees of both `root1` and `root2` and assign the result to `root1.right`. This ensures that the merged tree is constructed correctly.
5.  Return `root1` as the merged tree, since the updates are performed in place.

## Complexity

- Time complexity: O(min(m,n)), where m and n are the number of nodes in the first and second tree respectively. We traverse both trees only once and in parallel.
- Space complexity: O(min(m,n)). The depth of the recursion (i.e., the call stack) will go as deep as the smaller of the two trees.

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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  // If one tree is null, return the other
  if (root1 === null) {
    return root2;
  }
  if (root2 === null) {
    return root1;
  }

  // Merge overlapping nodes by summing up their values
  root1.val += root2.val;

  // Recursively merge left and right subtrees
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);

  // Return the in-place updated tree as the merged tree
  return root1;
};
```
