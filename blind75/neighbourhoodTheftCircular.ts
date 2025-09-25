/**
 * @param {number[]} numbers
 * @return {number}
 */
export default function neighborhoodTheftCircular(numbers) {
  if (!numbers.length) return 0;

  const circular = (adjustedArray: number[]) => {
    let dpArray = Array(adjustedArray.length).fill(-1);
    let ans: number;

    const robHouse = (i: number) => {
      if (i > adjustedArray.length - 1) return 0;

      if (dpArray[i] > -1) return dpArray[i];

      ans = Math.max(robHouse(i + 2) + adjustedArray[i], robHouse(i + 1));
      dpArray[i] = ans;
      return ans;
    };
    return robHouse(0);
  };

  return Math.max(circular(numbers.slice(0, numbers.length - 1)), circular(numbers.slice(numbers.length - 2)));
}
