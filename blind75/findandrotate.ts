export default function findInRotatedArray(
  numbers: number[],
  target: number,
): number {
  let right = numbers.length - 1;
  let left = 0;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    if (numbers[mid] === target) return mid;

    // which part is sorted
    if (numbers[left] <= numbers[mid]) {
      if (target >= numbers[left] && target < numbers[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > numbers[mid] && target <= numbers[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}
