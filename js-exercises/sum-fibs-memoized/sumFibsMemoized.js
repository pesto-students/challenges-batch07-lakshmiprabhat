function sumFibs(num) {
  var num1=0,num2=1,nextNum, numArray=[],oddFibSum=1;
  nextNum = num1 + num2;
  for (var i=2;nextNum <= num;i++){
   if (nextNum%2 != 0) {
     oddFibSum+= nextNum;
   }
   i = (nextNum%2 == 0) ? i-1 :i;
   num1 = num2;
    num2 = nextNum;
    nextNum = num1 + num2;    
  }
  return oddFibSum;
}

function cacheFunction(func){
  var cache=[];
  return function(num){
    var idx = num.toString();
    if(cache[idx]== undefined){
      cache[idx]=func(num);
    }
    return cache[idx];
  };
}
export {sumFibs, cacheFunction};


