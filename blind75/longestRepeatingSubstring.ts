export default function longestSubstringReplacement(
  str: string,
  k: number,
): number {
  let n = str.length;
  let left = 0;
  let right = 0;
  let freqMap: number[] = new Array(26).fill(0);
  let maxFreq = 0;
  let longestFreqLen = 0;

  while (right < n) {
    let index = str.charCodeAt(right) - "A".charCodeAt(0);
    freqMap[index] += 1;

    maxFreq = Math.max(maxFreq, freqMap[index]);

    let isValid = right + 1 - left - maxFreq <= k;
    if (!isValid) {
      let outIndex = str.charCodeAt(left) - "A".charCodeAt(0);
      freqMap[outIndex] -= 1;
      left += 1;
    }
    longestFreqLen = right + 1 - left;
    right += 1;
  }
  return longestFreqLen;
}
