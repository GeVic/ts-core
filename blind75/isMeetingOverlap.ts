export default function isMeetingCalendarValid(intervals: number[][]): boolean {
  intervals.sort((a, b) => a[1] - b[1]);

  if (intervals.length <= 1) {
    return true;
  }

  for (let index = 0; index < intervals.length - 1; index++) {
    if (intervals[index][1] > intervals[index + 1][0]) {
      return false;
    }
  }
  return true;
}
