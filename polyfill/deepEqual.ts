export const getType = (value: unknown) => {
  return Object.prototype.toString.call(value);
};
export const shouldDeepCompare = (type: string) => {
  return type === "[object Array]" || type === "[object Object]";
};
export default function deepEqual(valueA: unknown, valueB: unknown): boolean {
  const typeA = getType(valueA);
  const typeB = getType(valueB);

  if (typeA === typeB && shouldDeepCompare(typeA) && shouldDeepCompare(typeB)) {
    const enteriesA = Object.entries(valueA as Array<unknown> | Object);
    const enteriesB = Object.entries(valueB as Array<unknown> | Object);

    if (enteriesA.length !== enteriesB.length) {
      return false;
    }

    enteriesA.every(([key, values]) => {
      Object.hasOwn(valueB as Array<unknown> | Object, key) &&
        deepEqual(values, (valueB as any)[key]);
    });
  }

  return Object.is(valueA, valueB);
}
