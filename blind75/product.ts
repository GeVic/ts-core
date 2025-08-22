export default function maxProductSubArray(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  let min = numbers[0];
  let max = numbers[0];
  let result = max;

  for (let num = 1; num < numbers.length; num++) {
    let current = numbers[num];
    let temp_max = Math.max(current, max * current, min * current);
    min = Math.min(current, max * current, min * current);
    max = temp_max;
    result = Math.max(max, result);
  }
  return result;
}
