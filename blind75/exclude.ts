export default function arrayProductExcludingCurrent(
  numbers: number[],
): number[] {
  let len = numbers.length;
  let suffix = Array(len).fill(1);
  let prefix = Array(len).fill(1);
  let result = Array(len).fill(1);

  for (let num = 1; num < len; num++) {
    prefix[num] = prefix[num - 1] * numbers[num - 1];
  }

  for (let num = len - 2; num >= 0; num--) {
    suffix[num] = suffix[num + 1] * numbers[num + 1];
  }

  for (let num = 0; num < len; num++) {
    result[num] = prefix[num] * suffix[num];
  }

  return result;
}
