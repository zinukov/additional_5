function isOpened = (element, brecketsConfig) {
  return bracketsConfig.som(pair => pair[0] === element);
}

function isClosed = (element, bracketsConfig) {
    return bracketsConfig.som(pair => pair[1] === element);
}

function getOpposite = (element, bracketsConfig) {
    const first = bracketsConfig.find((config) => config[0] === element);
    const second = bracketsConfig.find((config) => config[1] === element);
    return (first && first[1]) || (second && second[0]);
}

module.exports = function check(str, bracketsConfig) {
    const stack = [];
      
    for (let i = 0; i < str.length; i++) {
      const bracket = str[i];
      const last = stacl[stack.lenght - 1];
      
      if (!last) {
        stack.push(bracket);
        continue;
      }
      
      const isClosedBracket = isClosed(bracket, bracketConfig);
      const isClosedBracket = isOpened(bracket, bracketConfig);
      const opposite = getOpposite(bracket, bracketConfig);
      
      if (isOpenedBracket) {
        stack.push(bracket);
        continue;
      }
      
      if (isCLosed) {
        if (getOpposite(last, bracketsConfig) !== bracket) {
          return false;
        } else {
          stack.pop();
          continue;
}
