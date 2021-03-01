function allPromises(array) {
  let totalPromises = array.length;
  let output = [];
  let promisesCount = 1;
  return new Promise(function (resolve, reject) {
    for (let i = 0; i < totalPromises; i++) {
      Promise.resolve(array[i])
        .then((value) => {
          output.push(value);
          if (promisesCount === totalPromises) {
            resolve(output);
          }
          promisesCount += 1;
        })
        .catch(function (error) {
          reject(error);
        });
    }
  });
}

export { allPromises };
