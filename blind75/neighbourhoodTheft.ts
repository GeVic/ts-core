/**
 * @param {number[]} numbers
 * @return {number}
 */
/// <reference lib="es2015" />
export default function neighborhoodTheft(numbers: number[]): number {
  // using dp
  let dpArray: number[] = new Array(numbers.length).fill(-1);
  let ans: number;

  const robHouse = (i: number) => {
    if (i > numbers.length - 1) return 0;

    if (dpArray[i] > -1) return dpArray[i];

    ans = Math.max(robHouse(i + 2) + numbers[i], robHouse(i + 1));
    dpArray[i] = ans;
    return ans;
  };

  return robHouse(0);
}

console.log(neighborhoodTheft([1, 2, 3, 1]));
