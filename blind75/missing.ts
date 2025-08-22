export default function findMissingNumberInSequence(numbers: number[]): number {
  let sortedNum = numbers.sort((a, b) => a - b);
  const len = numbers.length;
  for (let n = 0; n < len; n++) {
    if (n !== sortedNum[n]) {
      return n;
    }
  }
}
