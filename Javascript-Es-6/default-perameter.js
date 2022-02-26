// old methods 
function sumOf(num1 , num2){
  //old method 1
  // if(num2 == undefined){
  //   num2 = 0;
  // }
  //old method 2
  //num2 = num2 || 0;
  let sum = 0;
  sum = num1 + num2;
  return sum
}

// in ES6 
function sumOf(num1 , num2 = 0){
  let sum = 0;
  sum = num1 + num2;
  return sum
}


console.log(sumOf(2,5,5,5));