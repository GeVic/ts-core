export default function longestConsecutiveNumberSeq(numbers: number[]): number {
  numbers.sort((a, b) => a - b);
  let count = 1;
  let mem = 1;
  if (numbers.length === 0) {
    return 0;
  }
  for (let num = 1; num < numbers.length; num++) {
    if (
      numbers[num] - numbers[num - 1] <= 1 &&
      numbers[num] - numbers[num - 1] >= 0
    ) {
      count += numbers[num] - numbers[num - 1];
    } else {
      mem = Math.max(mem, count);
      count = 1;
    }
  }
  return Math.max(mem, count);
}

// this takes in nlogn time, we can do better using hash, think
