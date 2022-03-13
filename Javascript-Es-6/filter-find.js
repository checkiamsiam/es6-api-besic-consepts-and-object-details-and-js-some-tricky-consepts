// filter dile array er moddho theke sorto sapekkhe upadan niye akti noton array toire kote 
const ageLIst = [25, 9, 29, 13, 40];
const adultAge = ageLIst.filter(age => age >18);


const phones = [
  {model: 'y11' , brand: 'vivo' , price:'12k'} ,
  {model: 's17' , brand: 'samsung' , price:'13k'} ,
  {model: 'f12' , brand: 'oppo' , price:'22k'} ,
  {model: 'note7' , brand: 'MI' , price:'20k'}
];
const vivo = phones.filter(phone => phone.brand == 'vivo');

//fine dile array er moddho theke sorto sapekkhe upadan niye amerder dey kintu ta kono array er moddhe thake na
const ageLIst2 = [25, 9, 29, 13, 40];
const adultAge2 = ageLIst2.find(age2 => age2 >18);

const phones2 = [
  {model: 'y11' , brand: 'vivo' , price:'12k'} ,
  {model: 's17' , brand: 'samsung' , price:'13k'} ,
  {model: 'f12' , brand: 'oppo' , price:'22k'} ,
  {model: 'note7' , brand: 'vivo' , price:'20k'}
];
const vivo2 = phones2.find(phone => phone.brand == 'vivo');

console.log(vivo2);