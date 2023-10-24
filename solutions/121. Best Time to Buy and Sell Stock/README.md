# [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)

## Intuition

By iterating through the array, we keep track of the minimum stock price seen, minPrice, and calculate the potential profit that could be obtained by selling at the current price (`prices[i] - minPrice`).

## Approach

1.  Initialize `minPrice` to the first stock price and `maxProfit` to 0. `maxProfit` will store our answer.
2.  Iterate through each stock price.
3.  Update `minPrice` if the current price is lower, ensuring `minPrice` always contains the lowest price seen.
4.  Determine the potential profit by subtracting `minPrice` from the current price. Update `maxProfit` if this potential profit exceeds the current `maxProfit`.
5.  Return `maxProfit`, which represents the maximum profit that can be obtained.

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
