# [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)

## Intuition
We can invert a binary tree using a pre-order traversal.

## Approach

1. First, we check if the root is null; if it is, we return null as there's no tree to invert.
2. Swap the left and right children of the current `root`.
3. We recursively call the invertTree function for both the left and right subtrees.
4. Finally, we return the node root, which represents the inverted binary tree.

## Complexity
- Time complexity: O(n)
- Space complexity: O(n) Recursive stack space

```javascript
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    if(root === null) {
        return null ;
    }

    // Swap the nodes
    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);
    return root;
};
```

# [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)

## Intuition
We can invert a binary tree using a pre-order traversal.

## Approach
1. First, we check if the `root` is null; if it is, we return null as there's no tree to invert.
2. Swap the left and right children of the current `root`.
3. We recursively call the invertTree function for both the left and right subtrees.
4. Finally, we return the node `root`, which represents the inverted binary tree.

## Complexity
- Time complexity: O(n) - The algorithm visits each node once.
- Space complexity: O(n) - The space required for the recursive call stack.

## Code
```javascript
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    if(root === null) {
        return null;
    }

    // Swap the nodes
    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    // Recursively invert left and right subtrees
    invertTree(root.left);
    invertTree(root.right);

    return root;
};
```