# [106. Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/)

## Intuition

We can use the last element of postorder as the root of the current subtree, and its index in the inorder array divides the tree into left and right subtrees.

## Approach

1.  If the postorder list is empty, return `null`.
2.  Extract the last item from `postorder` as the current root's value and store it in `rootVal`.
3.  Find the `rootVal` index in the inorder traversal and assign this to `rootIndex`.
4.  Divide `inorder` into `inorderLeft` and `inorderRight` using `rootIndex`.
5.  Similarly, split `postorder` into two: `postorderLeft` (which has the same length as `inorderLeft`) and the rest as `postorderRight`. Exclude the last element when splitting `postorderRight` because it represents the root of the current tree.
6.  Recursively build the left and right subtrees using the split inorder and postorder arrays, then assign them to the current root's left and right pointers, respectively.
7.  Return the built tree's root.

## Complexity

- Time complexity: O(n), where n is the number of nodes in the tree. We visit each node only once.
- Space complexity: O(n), the recursive call stack can go up to O(n) in the worst case if the binary tree is skewed.

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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (postorder.length === 0) return null;

  // Get the root's value
  let rootVal = postorder[postorder.length - 1];
  // Find its index in the inorder array
  let rootIndex = inorder.indexOf(rootVal);

  let root = new TreeNode(rootVal);

  // Split inorder array into left and right subtrees
  let inorderLeft = inorder.slice(0, rootIndex);
  let inorderRight = inorder.slice(rootIndex + 1);

  // Split postorder based on the size of left subtree from inorder
  let postorderLeft = postorder.slice(0, inorderLeft.length);
  let postorderRight = postorder.slice(
    inorderLeft.length,
    postorder.length - 1
  );

  // Construct left and right subtrees recursively
  root.left = buildTree(inorderLeft, postorderLeft);
  root.right = buildTree(inorderRight, postorderRight);

  return root;
};
```
