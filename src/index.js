module.exports = function check(braces, bracketsConfig) {

  let openBreckets = [];
  let brackets = {};
  let closed = [];
  for(let i=0; i<bracketsConfig.length; i++){
    openBreckets.push(bracketsConfig[i][0]);
    brackets[bracketsConfig[i][1]] = bracketsConfig[i][0];
    closed.push(bracketsConfig[i][1]);
  }

  let stack = [];

  for(let i=0; i< braces.length; i++){
    let currentBracket = braces[i];

    if(stack[stack.length - 1] === currentBracket && closed.includes(currentBracket)){
      stack.pop();
    }
    else {
      if(openBreckets.includes(currentBracket)){
        stack.push(currentBracket);
      }
      else {
        if (stack.length === 0){
          return false;
        }
  
        if(brackets[currentBracket] === stack[stack.length - 1]){
          stack.pop();
        }
        else {
          return false;
        }
      }
    }
    
  }
  return stack.length === 0;
}