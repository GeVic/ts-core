export default function pairSum(numbers: number[], target: number): number[] {
  let dict = {};

  for (let i = 0; i < numbers.length; i++) {
    let complement = target - numbers[i];
    if (dict[complement] !== undefined) {
      return [dict[complement], i];
    }
    dict[numbers[i]] = i;
  }
  return [];
}
