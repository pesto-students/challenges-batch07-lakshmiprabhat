function bind(inputFunc, object) {
  return function hardBindToContext(...args) {
    return inputFunc.apply(object, args);
  };
}

export { bind };