//function in variable
const add = function(num1, num2){
  return num1  + num2
}
// arrow functions 
// multiple perameter
const addNumber = (num1, num2) => num1 + num2;
// single perameter // single perameter hoile bracket na dileo hoy dileo hoy 
const addNumber = num1 => num1 + num2;
// anonyms arrow function 
const addNumber = () => num1 + num2;
// if arrow function has multiple line 
const addNumber = () => {
  let sum = 0;
  for (const number of arguments) {
    sum = sum + number;
  }
}
