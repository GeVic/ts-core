export default function arrayReachableEnd(numbers: number[]): boolean {
  let farthestReachable = numbers.length - 1;

  for (let current = numbers.length - 1; current >= 0; current--) {
    if (numbers[current] + current >= farthestReachable) {
      farthestReachable = current;
    }
  }

  return farthestReachable === 0;
}
