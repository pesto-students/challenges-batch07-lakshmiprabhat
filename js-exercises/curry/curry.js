function curry(func){
return function curried(...args){
    if (args.length >= func.length) { // (1)
      return func.apply(func, args);
    } else {
      return function(...args2) { // (2)
        return curried.apply(func, args.concat(args2));
      }
    }
  };
}
export {
  curry
};
