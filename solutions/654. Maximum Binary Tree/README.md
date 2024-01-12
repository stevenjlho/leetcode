# [654. Maximum Binary Tree](https://leetcode.com/problems/maximum-binary-tree/description/)

## Intuition

The problem requires constructing a maximum binary tree where each tree's root is the maximum value in its sublist. We can recursively apply this logic to the left and right sublists to construct the full tree.

## Approach

1. Use the helper function `buildTree` to construct the tree from a sublist of `nums`:
   - The sublist to consider for the tree construction is defined by the indices `left` (inclusive) and `right` (exclusive).
   - If the current sublist is empty (`left >= right`), return `null`.
   - Iterate through `nums` from `left` to `right` to find the maximum value and its index in the current sublist.
   - Create a new node with the maximum value.
   - Recursively build the left subtree using elements before the max value and the right subtree using elements after the max value.
   - Return the constructed tree node.
2. The main function `constructMaximumBinaryTree` calls `buildTree` for the entire `nums` array, passing `0` and `nums.length` as the starting and ending indices.

## Complexity

- Time complexity: O(n^2) in the worst case, where n is the length of nums. This occurs when the array is sorted in ascending or descending order, requiring a linear search for the maximum element at each level of recursion.
- Space complexity: O(n) for the recursion stack. The depth of the recursive tree could be at most n (in the case of a skewed tree).

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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  // Recursive function to build the tree from a sublist of nums
  const buildTree = (nums, left, right) => {
    // Base case: return null if sublist is empty
    if (left >= right) {
      return null;
    }

    // Find the maximum element and its index in the sublist
    let maxIndex = left;
    for (let i = left; i < right; i++) {
      if (nums[i] > nums[maxIndex]) {
        maxIndex = i;
      }
    }

    // Create the root node with the maximum value
    let root = new TreeNode(nums[maxIndex]);

    // Recursively build the left and right subtrees
    root.left = buildTree(nums, left, maxIndex);
    root.right = buildTree(nums, maxIndex + 1, right);

    return root; // Return the constructed node
  };

  // Start building the tree from the whole array
  return buildTree(nums, 0, nums.length);
};
```
