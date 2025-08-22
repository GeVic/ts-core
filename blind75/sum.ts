export default function maxSumSubArray(numbers: number[]): number {
  if (numbers.length === 0) return 0;

  let current = 0;
  let maxSum = -Infinity;

  for (let num = 0; num < numbers.length; num++) {
    current = Math.max(numbers[num], current + numbers[num]);
    maxSum = Math.max(maxSum, current);
  }
  return maxSum;
}
