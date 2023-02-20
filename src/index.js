module.exports = function check(str, bracketsConfig) {
  if((str.length === undefined) || (str.length === 1) || (str.length % 2 !== 0)) {
    return false;
  }

  let stack = [];
  let pairsOfBrackets = new Map(bracketsConfig); 
   
  for (let char of str) { 
    if (pairsOfBrackets.get(stack.at(-1)) === char) { 
      stack.pop(); 
    } else { 
      stack.push(char); 
    }
  }
  return stack.length === 0; 
}
