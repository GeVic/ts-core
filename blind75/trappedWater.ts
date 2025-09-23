export default function maximumWaterBetweenWalls(walls: number[]): number {
  let left = 0;
  let right = walls.length - 1;

  let max = -Infinity;

  while (left < right) {
    let currentArea = Math.min(walls[left], walls[right]) * (right - left);
    max = Math.max(currentArea, max);

    if (walls[left] <= walls[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return max;
}
