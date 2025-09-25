export default function optimalStockTrading(prices: number[]): number {
  let maxProfit = 0;
  let min = Infinity;

  for (const price of prices) {
    min = Math.min(min, price);
    let profit = price - min;
    maxProfit = Math.max(maxProfit, profit);
  }
  return maxProfit;
}
