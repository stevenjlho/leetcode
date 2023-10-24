# [105. Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/)

## Intuition

We can use the first element of preorder as the root of the current subtree, and its index in the inorder array divides the tree into left and right subtrees.

## Approach

1.  If the `preorder` list is empty, return `null`.
2.  Extract the first item from `preorder` as the current root's value and store it in `rootVal`.
3.  Find the `rootVal` index in the inorder traversal and assign this to `rootIndex`.
4.  Divide `inorder` into `inorderLeft` and `inorderRight` using `rootIndex`.
5.  Similarly, split `preorder` into two: `preorderLeft` (which has the same length as `inorderLeft`) and the rest as `preorderRight`. Exclude the first element when splitting `preorderLeft` because it represents the root of the current tree.
6.  Recursively build the left and right subtrees using the split preorder and inorder arrays, then assign them to the current root's left and right pointers, respectively.
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
var buildTree = function(preorder, inorder) {
    // Base case: if no elements, return null.
    if(preorder.length === 0) {
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
