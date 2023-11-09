# [108. Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/)

## Intuition

The most balanced binary search tree (BST) can be created by using the middle element of the sorted array as the root and doing this recursively for each subtree.

## Approach

1. Implement a recursive helper function `buildBST` that constructs and returns a balanced BST from the subset of `nums` between `left` and `right`.

   - If `left > right`, return `null` as no BST can be formed.
   - Calculate the middle index `mid` and create a new `TreeNode` with `nums[mid]` as the root.
   - Recursively build the left subtree using elements before `mid` and the right subtree using elements after `mid`.
   - Attach the left and right subtrees to the root and return the root.

2. Invoke `buildBST` initially with the full range of the sorted array `nums`.

## Complexity

- Time complexity: O(n) where n is the number of nodes in the binary tree. We visit each node once.
- Space complexity: O(h), where h is the height of the binary tree. In the worst case, the space complexity is O(n) for a skewed tree, but for a balanced tree, it's O(log n).

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
 * @param {number[]} nums - Sorted array to convert into a balanced BST.
 * @return {TreeNode} - The root node of the balanced BST.
 */
var sortedArrayToBST = function (nums) {
  // Helper function to construct a balanced BST from a subarray.
  const traversal = (nums, left, right) => {
    // Base case: subarray is empty.
    if (left > right) return null;

    // Find the middle index.
    const mid = left + Math.floor((right - left) / 2);

    // Create a new node using the value at index `mid`.
    const root = new TreeNode(nums[mid]);

    // Construct left and right subtrees recursively.
    root.left = traversal(nums, left, mid - 1);
    root.right = traversal(nums, mid + 1, right);

    // Return the root of this subtree.
    return root;
  };

  // Start the recursion with the entire array.
  return traversal(nums, 0, nums.length - 1);
};
```
