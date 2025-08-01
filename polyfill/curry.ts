export default function curry(func: Function): Function {
  const numArgs = func.length;
  return function curried(this: any, ...args: Array<any>) {
    if (args.length >= numArgs) {
      return func.apply(this, args);
    }
    return (...arg: any) => {
      return curried.apply(this, [...args, ...arg]);
    };
  };
}
