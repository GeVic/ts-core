export default function findDuplicates(numbers: number[]): boolean {
  let count = {};
  for (let n of numbers) {
    if (!count[n]) {
      count[n] = 1;
    } else {
      return false;
    }
  }
  return true;
}
