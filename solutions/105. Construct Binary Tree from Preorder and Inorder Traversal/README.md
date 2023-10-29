# [105. Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/)

## Intuition

We can use the first element of preorder as the root of the current subtree, and its index in the inorder array divides the tree into left and right subtrees.

## Approach

1. Return `null` if the `preorder` list is empty since there's no tree to build.
2. Identify the root of the current subtree using the first element of `preorder`, and find its index in `inorder`.
3. Create the root node with the identified root value.
4. Split `inorder` into `inorderLeft` (before `rootIndex`) and `inorderRight` (after `rootIndex`) using `rootIndex`. `inorderLeft` lengths will dictate how to split the `preorder` array.
5. Split `preorder` into `preorderLeft` (matching the length of `inorderLeft`) and `postorderRight`, excluding the first element, which is used as the root.
6. Recursively call buildTree for the left and right segments of `preorder` and `inorder` to construct left and right subtrees, respectively.
7. Return the `root`, which now points to a subtree constructed from `preorder` and `inorder`.

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
var buildTree = function (preorder, inorder) {
  // Base case: if no elements, return null.
  if (preorder.length === 0) {
    return null;
  }

  // The first element of preorder is the current root.
  let rootVal = preorder[0];
  // Finding the index of root in inorder to divide the tree.
  let rootIndex = inorder.indexOf(rootVal);

  let root = new TreeNode(rootVal);

  // Dividing inorder traversal into left and right subtrees.
  let inorderLeft = inorder.slice(0, rootIndex);
  let inorderRight = inorder.slice(rootIndex + 1);

  // Dividing preorder traversal based on the inorder division.
  let preorderLeft = preorder.slice(1, inorderLeft.length + 1);
  let preorderRight = preorder.slice(inorderLeft.length + 1);

  // Recursive calls to construct left and right subtrees.
  root.left = buildTree(preorderLeft, inorderLeft);
  root.right = buildTree(preorderRight, inorderRight);

  return root;
};
```
