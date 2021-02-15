function balancedBraces (str) {
  let stack = [];

    let openBracesArray = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    let closedBracesArray = {
        '}': true,
        ']': true,
        ')': true
    }

    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (openBracesArray[char]) {
            stack.push(char);
        } else if (closedBracesArray[char]) {
            if (openBracesArray[stack.pop()] !== char) 
            { 
                return false;
            }
        }
    }
    return stack.length === 0;
}

export {
  balancedBraces
};
