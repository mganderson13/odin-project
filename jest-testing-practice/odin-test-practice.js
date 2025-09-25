function sum(a, b) {
  return a + b;
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function reverse(string) {
  return string.split("").reverse().join("");
}

function calculator() {
  return {
  add(a, b) {
    return a + b
  },

  subtract(a, b) {
    return a - b;
  }, 

  multiply(a, b) {
    return a * b;
  },

  divide(a, b) {
    return (b!==0)? a/b : NaN;
  }
}
}

function caesarCipher(string, shift) {
const alphaArray = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
]
const upperAlphaArray = [
 "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]
//separate string, if letter, find index in array, replace with index + shift 
const newWord = []
const stringArray = string.split('');
stringArray.forEach(element => {
  if(alphaArray.includes(element)){
const index = alphaArray.findIndex((e) => e === element)
  const newIndex = index + shift;
  if (newIndex < 26){
    newWord.push(alphaArray[newIndex])
  }else {
    wrapIndex = newIndex - 26;
    newWord.push(alphaArray[wrapIndex]);
  }
  }else if (upperAlphaArray.includes(element)){
    const index = upperAlphaArray.findIndex((e) => e === element)
  const newIndex = index + shift;
  if (newIndex < 26){
    newWord.push(upperAlphaArray[newIndex])
  }else {
    wrapIndex = newIndex - 26;
    newWord.push(upperAlphaArray[wrapIndex]);
  }
}else {
  newWord.push(element);
}
});
return newWord.join("");
}

function analyzeArray(array) {

  const sum = array.reduce((acc, curr) => acc + curr, 0);
  const average = sum / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;


  const object = {
    average: average,
    min: min,
    max: max,
    length: length
  };
  return object;
}

module.exports = { sum, capitalize, reverse, calculator, caesarCipher, analyzeArray };
