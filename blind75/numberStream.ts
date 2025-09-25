export default class NumberStream {
  numberStream: number[] = [];

  constructor() {
    this.numberStream = [];
  }

  add(num: number): void {
    if (num) this.numberStream.push(num);
    this.numberStream.sort((a, b) => a - b);
  }

  getMedian(): number {
    if (this.numberStream.length % 2 === 0) {
      const mid = this.numberStream.length / 2;
      return (this.numberStream[mid - 1] + this.numberStream[mid]) / 2;
    } else {
      const mid = Math.floor(this.numberStream.length / 2);
      return this.numberStream[mid];
    }
  }
}
