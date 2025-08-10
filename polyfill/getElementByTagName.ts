export default function getElementsByTagName(
  el: Element,
  tagName: string,
): Array<Element> {
  let results: Array<Element> = [];

  const depthSearch = (newEl: Element) => {
    for (let i = 0; i < newEl.children.length; i++) {
      if (
        newEl.children[i].tagName.toLowerCase() === tagName.toLowerCase() ||
        tagName === "*"
      ) {
        results.push(newEl.children[i]);
      }
      depthSearch(newEl.children[i]);
    }
  };

  depthSearch(el);
  return results;
}
