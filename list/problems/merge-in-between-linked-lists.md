# 1669. Merge In Between Linked Lists

https://leetcode.com/problems/merge-in-between-linked-lists/

## Solution

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let cur = list1;
  let currentIndex = 0;
  let beforeANode;
  let afterBNode;

  while (cur.next) {
    if (currentIndex + 1 === a) {
      beforeANode = cur;
    }

    if (currentIndex === b) {
      afterBNode = cur.next;
    }

    cur = cur.next;
    currentIndex += 1;
  }

  beforeANode.next = list2;

  let cur2 = list2;
  while (cur2.next) {
    cur2 = cur2.next;
  }

  const lastNode = cur2;
  lastNode.next = afterBNode;

  return list1;
};
```
