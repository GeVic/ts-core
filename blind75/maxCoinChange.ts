/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
export default function minimumCoinsForChange(coins, target) {
  let dp = new Array(target + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= target; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
  }
  return dp[target] === Infinity ? -1 : dp[target];
}
