# [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)

## Intuition

By iterating through the array, we keep track of the minimum stock price seen, minPrice, and calculate the potential profit that could be obtained by selling at the current price (`prices[i] - minPrice`).

## Approach

1.  Initialize `minPrice` to the first stock price and `maxProfit` to 0. `maxProfit` will store our answer.
2.  Iterate through each stock price to examine all potential buying points.
3.  Update `minPrice` to the current price if it's lower than the existing `minPrice`.This step is crucial as buying at the lowest possible price is key to maximizing profit.
4.  Calculate potential profit (`prices[i] - minPrice`) and update `maxProfit` if this profit exceeds the current `maxProfit`. This step ensures that you are always keeping track of the highest possible profit.
5.  Finally, `maxProfit` is returned, which represents the maximum profit obtainable from the stock prices.

## Complexity

- Time complexity: O(n) The algorithm iterates through the array of stock prices once, performing constant-time operations at each step.
- Space complexity: O(1) The algorithm uses a constant amount of extra space to store variables.

## Code

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    // Update minPrice with the minimum of current price and minPrice
    minPrice = Math.min(minPrice, prices[i]);
    // Update maxProfit with the maximum of current maxProfit and potential profit
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  return maxProfit;
};
```
