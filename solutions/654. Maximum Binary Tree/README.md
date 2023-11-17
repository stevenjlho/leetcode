# [654. Maximum Binary Tree](https://leetcode.com/problems/maximum-binary-tree/description/)

## Intuition

The problem requires constructing a maximum binary tree where each tree's root is the maximum value in its sublist. We can recursively apply this logic to the left and right sublists to construct the full tree.

## Approach

1. Use the helper function `buildTree` to construct the tree from a sublist of `nums`:
   - The sublist to consider for the tree construction is defined by the indices `left` (inclusive) and `right` (exclusive).
   - If the sublist is empty (i.e., `left` is equal to or greater than `right`), return `null`.
   - Iterate through `nums` from `left` to `right` to find the maximum value and its index within the sublist. This maximum value becomes the root of the current subtree. The index of maximum value is used to partition the list into left and right sublists.
   - Recursively construct the left subtree from elements before the maximum value and the right subtree from elements after the maximum value.
2. Invoke `buildTree` with the entire `nums` list, starting from index 0 to `nums.length`.

## Complexity

- Time complexity: Time complexity: O(n²). In the worst case, we traverse the entire list to find the maximum value for each element.
- Space complexity: O(n). The recursion call stack depth could be as large as the number of list elements in the worst case.

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
  // construct the tree from a sublist
  const buildTree = (nums, left, right) => {
    // if the current sublist is empty
    if (left >= right) {
      return null;
    }

    let maxIndex = left;
    let maxVal = nums[left];

    for (let i = left; i < right; i++) {
      if (nums[i] > maxVal) {
        maxIndex = i;
        maxVal = nums[i];
      }
    }
    // Create a new node with the maximum value
    let root = new TreeNode(maxVal);

    // Construct left subtree from elements before max value
    // and right subtree from elements after max value
    root.left = buildTree(nums, left, maxIndex);
    root.right = buildTree(nums, maxIndex + 1, right);

    return root;
  };

  // Start constructing the tree from the given list
  return buildTree(nums, 0, nums.length);
};
```
