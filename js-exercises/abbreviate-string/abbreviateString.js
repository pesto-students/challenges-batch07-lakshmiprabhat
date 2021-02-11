import { isString } from "util";

function abbreviateString(str) {
    var abbreviatedStr='';
    var splitStr;

    try {
    if ( str === "" || !isNaN(str) || typeof str === 'string')
        throw 'Parameter is not valid!';    
    }
    catch(err){
     console.log(err);
    }

    splitStr = str.trim().split(" ");
    
    if (splitStr.length>1){
        abbreviatedStr = splitStr[0].charAt(0).toUpperCase() + splitStr[0].slice(1);
        for (var len=splitStr.length,i=0;i< len;i++)
        {
            if (i= splitStr.length-1) {
               abbreviatedStr += ' ' + splitStr[i].charAt(0).toUpperCase() + '.';
            }
        }
        return abbreviatedStr;
    }
   return str.charAt(0).toUpperCase() + str.slice(1);
}

export { abbreviateString };
