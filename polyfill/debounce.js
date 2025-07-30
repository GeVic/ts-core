export default function debounce(func, wait) { // this is undefined or global
  let timeoutId = null;
  return function (...args) { // this from who ever calls it
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => { // wherever it's defined
      timeoutId = null;
      func.apply(this, args)
    }, wait);
  }
}
