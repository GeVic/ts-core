/**
 * @param {number} n
 * @return {number[]}
 */
export default function bitCounting(n) {
  let result: Array = [];
  for (let i = 0; i <= n; i++) {
    // easy sol
    //result.push(i.toString(2).split('1').length - 1)
    // trick
    let x = i;
    let count = 0;
    while (x) {
      x = x & (x - 1);
      count += 1;
    }
    result.push(count);
  }
  return result;
}
