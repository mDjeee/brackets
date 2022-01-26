module.exports = function check(braces, bracketsConfig) {
  let brackets = '';
  for(let i=0; i<bracketsConfig.length; i++){
    brackets += bracketsConfig[i][0] + bracketsConfig[i][1];
  }
  let stack = [];
  for(let bracket in braces){
    let bracketIndex = brackets.indexOf(bracket);

    if(bracketIndex === -1){
      continue;
    }

    if(bracketIndex % 2 === 0){
      stack.push(bracketIndex + 1);
    }
    else {
      if(stack.pop() !== bracketIndex){
        return false;
      }
    }
  }
  return stack.length === 0;
}
