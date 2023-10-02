# [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)

## Intuition
We can iterate through the array and keep track of minimum stock price seen `minPrice` and calculated the potential profit that could be obtained by selling at the current price (`prices[i] - minPrice`)

## Approach
1. Initialize `minPrice` to the first stock price in the array, and `maxProfit` to 0, representing the current maximum profit.
2. Iterate through the array of stock prices.
   - Update `minPrice` to the minimum of its current value and the current stock price. This ensures we always have the minimum price seen so far.
   - Calculate the potential profit that could be obtained by selling at the current price, which is `prices[i] - minPrice`.
   - Update `maxProfit` to the maximum of its current value and the calculated profit. This step effectively tracks the maximum profit achievable.
3. Finally, return the value of `maxProfit`, which represents the maximum profit that can be obtained.

## Complexity
- Time complexity: O(n) The algorithm iterates through the array of stock prices once, performing constant-time operations at each step.
- Space complexity: O(1) The algorithm uses a constant amount of extra space to store variables.


## Code
```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for(let i = 0; i < prices.length; i++) {
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        minPrice = Math.min(minPrice, prices[i]);
    } 

    return maxProfit;
};
```