const ageLIst = [25, 9, 29, 13, 40];
// old method
const newArray = [];
/* for(const ages of ageLIst){
  const doubleAge = ages * 2;
  newArray.push(doubleAge)
} */
// in ES6 
const double = ageLIst.map(x => x*2)
// map er khetre always output arti array hobe // je function amra add korbo oi onujai akti array amerder output dibe 

const phones = [
  {model: 'y11' , brand: 'vivo' , price:'12k'} ,
  {model: 's17' , brand: 'samsung' , price:'13k'} ,
  {model: 'f12' , brand: 'oppo' , price:'22k'} ,
  {model: 'note7' , brand: 'MI' , price:'20k'}
];
const brands = phones.map(items => items.brand);


// map er moto aro akta jinijs ase "forEach" foreach kisuta map er motoi sudu halka aktu defrrence ase 
// map ameder output hisabe akta array provide kore kintu forEach kono kisu return kore na
// console.log(brands);