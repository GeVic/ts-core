const brackets = {
  ")": "(",
  "]": "[",
  "}": "{",
};

export default function isBalancedBrackets(str: string): boolean {
  let left = 0;
  let right = str.length - 1;
  let track: string[] = [];

  if (str.length % 2 !== 0) {
    return false;
  }

  for (const s of str) {
    if (brackets[s]) {
      let popped = track.pop();
      if (popped !== brackets[s]) {
        return false;
      }
    } else {
      track.push(s);
    }
  }
  if (track.length === 0) {
    return true;
  }
  return false;
}
