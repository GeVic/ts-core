/**
 * @param {number} num
 * @return {number}
 */
export default function countOnesInBinary(num) {
  let count = 0;
  while (num) {
    num = num & (num - 1);
    count += 1;
  }
  return count;
}
