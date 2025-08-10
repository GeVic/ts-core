interface JQuery {
  css: (
    prop: string,
    value?: boolean | string | number,
  ) => JQuery | string | undefined;
}

class Wrapper {
  private el: HTMLElement | null;
  constructor(el: HTMLElement | null) {
    this.el = el;
  }

  css(prop: string, value?: boolean | string | number) {
    if (value !== undefined) {
      if (this.el === null) {
        return this;
      }
      (this.el.style as any)[prop] = String(value);
      return this;
    } else {
      if (this.el === null) {
        return undefined;
      }
      const ret = (this.el.style as any)[prop];
      if (ret === "") {
        return undefined;
      }
      return ret;
    }
  }
}

export default function $(selector: string): JQuery {
  const el: HTMLElement | null = document.querySelector(selector);
  return new Wrapper(el);
}
