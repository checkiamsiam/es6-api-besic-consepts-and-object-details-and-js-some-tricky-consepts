const myAttitude = {
  position: 'joker',
  work: 'web developer',
  isGood: false,
  luckyNumber: 47 
}


// for in diye object ke loop kora jay 
for(const property in myAttitude){
  console.log(property , myAttitude[property]);
}
// for of diye array loop kora jay
for(const [key , value] of Object.entries(myAttitude)){
  console.log(key, value);
}