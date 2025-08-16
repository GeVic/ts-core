export type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | null
  | boolean
  | undefined;
export type ClassDictionary = Record<string, any>;
export type ClassArray = Array<ClassValue>;

export default function classNames(...args: Array<ClassValue>): string {
  let classNames: string[] = [];

  const travel = (node: ClassValue) => {
    if (node === null || node === undefined) {
      return;
    }

    if (Array.isArray(node)) {
      for (const el of node) {
        travel(el);
      }
      return;
    }

    if (typeof node === "object" && node !== null && !Array.isArray(node)) {
      for (const [key, value] of Object.entries(node)) {
        if (value) classNames.push(key);
      }
      return;
    }

    if (typeof node === "string") {
      if (node) classNames.push(node);
      return;
    }

    if (typeof node === "number" && node) {
      classNames.push(String(node));
      return;
    }
  };

  for (const arg of args) {
    travel(arg);
  }

  return classNames.join(" ");
}
