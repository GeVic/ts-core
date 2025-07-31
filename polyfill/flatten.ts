type ArrayValue = any | Array<ArrayValue>;

export default function flatten(value: Array<ArrayValue>): Array<any> {
  let res: any[] = [];
  let length = value.length;
  for (let i = 0; i < length; i++) {
    if (value[i] instanceof Array) {
      res = res.concat(flatten(value[i]));
    } else {
      res = res.concat(value[i]);
    }
  }
  return res;
}
