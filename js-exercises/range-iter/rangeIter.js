function rangeIter(lb, ub) {
  if (lb.length === 0 || ub.length === 0) {
    throw new TypeError('Parameters are required');
  }
  if (typeof ub !== 'number' || typeof lb !== 'number') {
    throw new TypeError('Parameter is not a number');
  }
  const obj = [];
  if (lb < ub) {
    const range = { from: lb, to: ub };
    range[Symbol.iterator] = function () {
      return {
        current: this.from,
        last: this.to,
        next() {
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          }
          return { done: true };
        },
      };
    };
    for (const num of range) {
      obj.push(num);
    }
  } else if (lb === ub) {
    obj.push(lb);
  }
  return obj;
}

export { rangeIter };
