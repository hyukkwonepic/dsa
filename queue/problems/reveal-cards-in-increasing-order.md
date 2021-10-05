# 950. Reveal Cards In Increasing Order

https://leetcode.com/problems/reveal-cards-in-increasing-order/

## Solution

```js
/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  const queue = [];

  const orderedDeck = deck.sort((a, b) => a - b);

  while (orderedDeck.length > 0) {
    queue.unshift(orderedDeck.pop());
    if (orderedDeck.length > 0) {
      const val = queue.pop();
      queue.unshift(val);
    }
  }

  return queue;
};
```
