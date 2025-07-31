export default function promiseAll<T extends readonly unknown[] | []>(
  iterable: T,
): Promise<{ -readonly [P in keyof T]: Awaited<T[P]> }> {
  const len = iterable.length;
  let results = new Array(len);
  let resolved = 0;

  if (len === 0) {
    return Promise.resolve([] as { -readonly [P in keyof T]: Awaited<T[P]> });
  }

  return new Promise((resolve, reject) => {
    for (let index = 0; index < len; index++) {
      if (iterable[index] instanceof Promise) {
        (iterable[index] as Promise<T>)
          .then((result) => {
            results[index] = result;
            resolved++;
            if (resolved === iterable.length) {
              resolve(results as { -readonly [P in keyof T]: Awaited<T[P]> });
              return;
            }
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        results[index] = iterable[index];
        resolved++;
        if (resolved === iterable.length) {
          resolve(results as { -readonly [P in keyof T]: Awaited<T[P]> });
          return;
        }
      }
    }
  });
}
