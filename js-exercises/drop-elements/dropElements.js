function dropElements(elements, predicate) {
let resultArray=[];
for(let i in elements){
    if (predicate(elements[i])) {
    resultArray.push(elements[i]);
    }
}
return resultArray;
}
export { dropElements };
