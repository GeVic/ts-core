/**
 * @param {number} n
 * @return {number}
 */
export default function bitReversal(n) {
  let reversed = 0;
  for (let i = 0; i < 32; i++) {
    reversed = reversed << 1;
    const lastBit = n & 1;
    reversed = reversed | lastBit;
    n = n >> 1;
  }
  return reversed >>> 0;
}
