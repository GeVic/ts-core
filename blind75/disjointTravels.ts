/**
 * @param {number[][]} intervals
 * @return {number}
 */
export default function disjointIntervals(intervals) {
  // sort based on x[1]
  intervals.sort((a, b) => a[1] - b[1]);
  let result = 0;
  let minStart = Number.MIN_SAFE_INTEGER;

  for (const interval of intervals) {
    const x = interval[0];
    const y = interval[1];

    if (x >= minStart) {
      minStart = x;
    } else {
      result++;
    }
  }
  return result;
}
