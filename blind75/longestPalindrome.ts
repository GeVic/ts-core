// export default function longestPalindromeSubstring(str: string): string {
//   let n = str.length;
//   let dp: boolean[][] = Array.from(Array(n), () => Array(n).fill(false));
//   let ans = [0, 0];

//   // for len of 1
//   for (let i = 0; i < n; i++) {
//     dp[i][i] = true;
//   }

//   // for len of 2
//   for (let i = 0; i < n; i++) {
//     if (str[i] === str[i + 1]) {
//       dp[i][i + 1] = true;
//       ans = [i, i + 1];
//     }
//   }

//   // for greater than 2
//   for (let i = 2; i < n; i++) {
//     for (let j = 0; j < n - i; j--) {
//       let end = j + i;
//       if (str[i] === str[end] && dp[i + 1][end - 1]) {
//         dp[i][end] = true;
//         ans = [i, end];
//       }
//     }
//   }
//   return str.substring(ans[0], ans[1] + 1);
// }
export default function longestPalindromeSubstring(str: string): string {
  const expand = (i: number, j: number): string => {
    let left: number = i;
    let right: number = j;

    while (left >= 0 && right <= str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    return str.substring(left + 1, right);
  };

  let ans: string = "";

  for (let i = 0; i < str.length; i++) {
    let odd: string = expand(i, i);
    let even: string = expand(i, i + 1);

    if (even.length > ans.length) {
      ans = even;
    }

    if (odd.length > ans.length) {
      ans = odd;
    }
  }
  return ans;
}
