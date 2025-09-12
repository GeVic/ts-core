// export default function minMeetingRoomsNeeded(intervals: number[][]): number {
//   let overlap = 0,
//     n = intervals.length;
//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   let start = new Array(n);
//   let end = new Array(n);

//   for (let i = 0; i < intervals.length; i++) {
//     start[i] = intervals[i][0];
//     end[i] = intervals[i][1];
//   }

//   start.sort((a, b) => a - b);
//   end.sort((a, b) => a - b);

//   let startPointer = 0,
//     endPointer = 0,
//     usedRooms = 0;

//   while (startPointer < n) {
//     usedRooms += 1;
//     if (start[startPointer] >= end[endPointer]) {
//       usedRooms -= 1;
//       endPointer += 1;
//     }
//     startPointer += 1;
//   }

//   return usedRooms;
// }
//
import { MinPriorityQueue } from "@datastructures-js/priority-queue";
export default function minMeetingRoomsNeeded(intervals: number[][]): number {
  if (intervals.length === 0) {
    return 0;
  }

  const queue = new MinPriorityQueue<number>();

  intervals.sort((a, b) => a[0] - b[0]);

  queue.enqueue(intervals[0][1]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= queue.front()) {
      queue.dequeue();
    }
    queue.enqueue(intervals[i][1]);
  }

  return queue.size();
}
