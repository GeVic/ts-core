interface Array<T> {
  myReduce<U>(
    callbackFn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: T[],
    ) => U,
    initialValue?: U,
  ): U;
}

Array.prototype.myReduce = function (callbackFn, initialValue) {
  let accum;
  let index;
  if (arguments.length >= 2) {
    accum = initialValue;
    index = 0;
  } else {
    if (this.length == 0) {
      throw new Error("Empty array");
    }
    index = 1;
    accum = this[0];
  }

  while (index < this.length) {
    if (index in this) {
      accum = callbackFn(accum, this[index], index, this);
    }
    index++;
  }
  return accum;
};
