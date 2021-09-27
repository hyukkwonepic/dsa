# 1008. Construct Binary Search Tree from Preorder Traversal

https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/

## Solution

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  const stack = [];

  const root = new TreeNode(preorder.shift());
  stack.push(root);

  preorder.forEach((val) => {
    if (stack[stack.length - 1].val > val) {
      const node = new TreeNode(val);
      stack[stack.length - 1].left = node;
      stack.push(node);
    }

    if (stack[stack.length - 1].val < val) {
      let last;
      while (stack.length > 0 && stack[stack.length - 1].val < val) {
        last = stack.pop();
      }

      const node = new TreeNode(val);
      last.right = node;
      stack.push(node);
    }
  });

  return root;
};
```
