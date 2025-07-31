interface Array<T> {
  myFilter(
    callbackFn: (value: T, index: number, array: Array<T>) => boolean,
    thisArg?: any,
  ): Array<T>;
}

Array.prototype.myFilter = function (callbackFn, thisArg) {
  let index = 0;
  let results: Array<any> = [];
  while (index < this.length) {
    if (callbackFn.call(thisArg, this[index], index, this)) {
      results.push(this[index]);
    }
    index++;
  }
  return results;
};
