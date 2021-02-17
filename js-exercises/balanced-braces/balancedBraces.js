function balancedBraces (str) {
  let stack = [];

    let openBracesObj = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    let closedBracesObj = {
        '}': true,
        ']': true,
        ')': true
    }

    for (let i in str) {

        let char = str[i];

        if (openBracesObj[char]) {
            stack.push(char);
        } else if (closedBracesObj[char]) {
            if (openBracesObj[stack.pop()] !== char) 
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
