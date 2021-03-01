function allSettled(array) {
  const output = [];
  const promisesArr = array.map((p) =>
    Promise.resolve(p).then(
      (resolvedValue) => ({ status: "fulfilled", value: resolvedValue }),
      (rejectedError) => ({ status: "rejected", reason: rejectedError })
    )
  );
  return new Promise((resolve, reject) => {
    let promiseCount = 0;
    let totalPromises = array.length;
    for (let i = 0; i < totalPromises; i++) {
      Promise.resolve(promisesArr[i])
        .then((value) => {
          output.push(value);
          promiseCount += 1;
          if (promiseCount === promisesArr.length) {
            resolve(output);
          }
        })
        .catch(function (error) {
          reject(error);
        });
    }
  });
}

export { allSettled };
