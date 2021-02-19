function chunkArrayInGroups(array, chunkSize) {
    let resultArray = [];
    for (let i=0;i<array.length; i+=chunkSize){
    resultArray.push(array.slice(i,i+chunkSize));
    }
    return resultArray;
  }

export {
  chunkArrayInGroups,
};
