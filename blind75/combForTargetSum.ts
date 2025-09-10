/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number}
 */
export default function combinationTargetSum(numbers, target) {
  const dp: number[] = new Array(target + 1).fill(0);

  dp[0] = 1;
  for (let i = 1; i <= target; i++) {
    for (let num of numbers) {
      if (i - num >= 0) {
        dp[i] += dp[i - num];
      }
    }
  }
  return dp[target];
}
