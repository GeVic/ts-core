export default function listFormat(
  items: Array<string>,
  options?: { sorted?: boolean; length?: number; unique?: boolean },
): string {
  let result_item: string[] = [];
  let copy_items: Array<string> = [...items];
  copy_items = copy_items.filter((item) => {
    if (item.length) return item;
  });
  let suffix = "";

  if (copy_items.length <= 0) return "";
  if (copy_items.length === 1) return copy_items[0];

  if (options?.sorted) copy_items.sort();

  if (options?.unique) copy_items = [...new Set(copy_items)];

  if (
    options?.length &&
    !(options.length >= copy_items.length) &&
    !(options?.length < 0)
  ) {
    const rem = copy_items.length - options?.length;
    if (rem === 1) {
      for (let i = 0; i < copy_items.length - 1; i++) {
        if (!copy_items[i]) continue;
        result_item.push(copy_items[i]);
      }
      suffix = " and 1 other";
    } else if (rem > 1) {
      for (let i = 0; i < copy_items.length - rem; i++) {
        if (!copy_items[i]) continue;
        result_item.push(copy_items[i]);
      }
      suffix = ` and ${rem} others`;
    }
  } else {
    for (let i = 0; i < copy_items.length - 1; i++) {
      if (!copy_items[i]) continue;
      result_item.push(copy_items[i]);
    }
    suffix = ` and ${copy_items[copy_items.length - 1]}`;
  }

  return result_item.join(", ") + suffix;
}
