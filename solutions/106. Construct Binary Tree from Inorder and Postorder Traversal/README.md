# [106. Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/)

## Intuition

We can use the last element of postorder as the root of the current subtree, and its index in the inorder array divides the tree into left and right subtrees.

## Approach

1. Return `null` if the `postorder` list is empty since there's no tree to build.
2. Identify the root of the current subtree using the last element of `postorder`, and find its index in `inorder`.
3. Create the root node with the identified root value.
4. Split `inorder` into `inorderLeft` (before `rootIndex`) and `inorderRight` (after `rootIndex`) using `rootIndex`. `inorderLeft` lengths will dictate how to split the `postorder` array.
5. Split `postorder` into `postorderLeft` (matching the length of `inorderLeft`) and `postorderRight`, excluding the last element, which is used as the root.
6. Recursively call buildTree for the left and right segments of `inorder` and `postorder` to construct left and right subtrees, respectively.
7. Return the `root`, which now points to a subtree constructed from `inorder` and `postorder`.

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
  // Create the root node
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
