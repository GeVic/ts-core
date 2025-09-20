export default function longestUniqueSubstring(str: string): number {
  let map = new Map<string, number>();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < str.length; right++) {
    if (map.has(str[right])) {
      left = Math.max(map.get(str[right])!, left);
    }
    maxLen = Math.max(maxLen, right - left + 1);
    map.set(str[right], right + 1);
  }
  return maxLen;
}
