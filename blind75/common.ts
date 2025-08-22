export default function mostCommonElements(
  numbers: number[],
  k: number,
): number[] {
  // let dictionary: { [key: number]: number } = {} // this uses object.prototype
  let dict: Record<number, number> = Object.create(null);
  for (let num of numbers) {
    dict[num] = dict[num] ? dict[num] + 1 : 1;
  }

  if (k <= 0) return [];

  const sortedKeysByFreq = Object.entries(dict)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([key]) => Number(key));

  return sortedKeysByFreq;
}
