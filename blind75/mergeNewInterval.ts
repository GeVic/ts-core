// export default function mergeNewInterval(
//   intervals: number[][],
//   newInterval: number[],
// ): number[][] {
//   let merged: number[][] = [];

//   if (intervals.length === 0) {
//     merged.push(newInterval);
//     return merged;
//   }

//   // binary search
//   let n = intervals.length;
//   let left = 0;
//   let right = n - 1;
//   let target = newInterval[0];

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (target < mid) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }

//   intervals.splice(left, 0, newInterval);

//   for (const interval of intervals) {
//     if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
//       merged.push(interval);
//     } else {
//       merged[merged.length - 1][1] = Math.max(
//         merged[merged.length - 1][1],
//         interval[1],
//       );
//     }
//   }
//   return merged;
// }

export default function mergeNewInterval(
  intervals: number[][],
  newInterval: number[],
): number[][] {
  let n = intervals.length,
    i = 0,
    res = [];

  while (i < n && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i]);
    i++;
  }

  while (i < n && newInterval[1] >= intervals[i][0]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  res.push(newInterval);

  while (i < n) {
    res.push(intervals[i]);
    i++;
  }
  return res;
}
