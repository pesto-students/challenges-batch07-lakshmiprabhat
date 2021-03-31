class Cycled {
  constructor(array) {
    this.arrItems = array;
    this.index = 0;
  }

  * [Symbol.iterator]() {
    for (const item of this.arrItems) {
      yield item;
    }
  }

  [Symbol.iterator]() {
    let count = 0;
    const arr2 = [];
    let start = this.index;
    while (count < this.arrItems.length) {
      arr2.push(this.arrItems[start]);
      if (start === this.arrItems.length - 1) {
        start = 0;
      } else {
        start += 1;
      }
      count += 1;
    }
    return arr2.values();
  }

  next() {
    if (this.index === this.arrItems.length - 1) {
      this.index = 0;
    } else {
      this.index += 1;
    }

    function* nextGenerator(obj) {
      yield obj.arr[obj.index];
    }

    return nextGenerator(this).next().value;
  }

  previous() {
    if (this.index === 0) {
      this.index = this.arrItems.length - 1;
    } else {
      this.index -= 1;
    }

    function* nextGenerator(obj) {
      yield obj.arrItems[obj.index];
    }

    return nextGenerator(this).next().value;
  }

  current() {
    function* currentGenerator(obj) {
      yield obj.arrItems[obj.index];
    }

    return currentGenerator(this).next().value;
  }

  step(stepBy) {
    function* stepGenerator(obj) {
      yield obj.arrItems[obj.index];
    }

    if ((this.index + stepBy) >= this.arrItems.length) {
      this.index -= (this.arrItems.length - stepBy);
    } else {
      this.index += stepBy;
    }
    return stepGenerator(this).next().value;
  }

  get position() {
    return this.index;
  }

  set position(val) {
    if (val >= 0 && val <= this.arrItems.length) {
      this.index = val;
    }
  }

  indexOf(value) {
    return this.arr.indexOf(value);
  }

  * reversed() {
    yield this.arrItems[this.arrItems.length - 1 - this.index];
  }
}
export { Cycled };
