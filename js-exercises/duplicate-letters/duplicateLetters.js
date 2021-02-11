function duplicateLetters(str) {
  var maximumCount,letter,count,index=0,countsArray =[];
  var counts = {};
  
  for (var i=0;i<str.length;i++){
    letter = str.charAt(i);
    count = counts[letter];
    counts[letter]= count ? count+1 : 1;
  }
  for (const [key, value] of Object.entries(counts)) {
    countsArray[index]= value;
    index+=1;
  }
  maximumCount = Math.max.apply(null,countsArray);
  if (maximumCount==1)
  {
    return false;
  }
  return maximumCount;
  
}

export { duplicateLetters };