# [230. Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/)

## Intuition

The solution utilizes the in-order traversal of a Binary Search Tree (BST), which results in elements being processed in ascending order. By tracking the `kth` element during this traversal, we can find the `kth` smallest element efficiently.

## Approach

1. Start with `res` as `null`, which will eventually hold the `kth` smallest value.
2. Implement `findNode` function to perform in-order((left node, current node, right node)) traversal recursively.
   - Return immediately if the current node is `null`.
   - Recursively call `findNode` on the left child to explore all smaller values first.
   - Decrement `k` as we've found a smaller element. If `k` becomes 0, it means the current node is the `kth` smallest, so store its value in `res`.
   - Recursively call `findNode` on the right child to explore the next larger elements.
3. Begin the in-order traversal from the `root`.
4. After the traversal, `res` will hold the `kth` smallest element.

## Complexity

- Time complexity: O(n), where n is the number of nodes in the binary tree. In the worst case, we would have to visit all nodes of the tree.
- Space complexity: O(H), due to the recursive stack used for in-order traversal. In the worst case (a skewed tree), the space complexity can become O(N).

## Code

```javascript
/**
 * Finds the kth smallest element in a BST.
 * @param {TreeNode} root - The root of the binary tree.
 * @param {number} k - The order of the smallest element to find.
 * @return {number} - The value of the kth smallest element.
 */
var kthSmallest = function (root, k) {
  let res = null;

  let findNode = (node) => {
    if (node === null) {
      return;
    }

    findNode(node.left);

    // Decrement k and check if this node is the kth smallest
    k -= 1;
    if (k === 0) {
      res = node.val;
      return;
    }

    findNode(node.right);
  };

  findNode(root);
  return res;
};
```
