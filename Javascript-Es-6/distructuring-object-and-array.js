//object 
const myPhone = { price: 20000, color: 'red', hight: '6inch', width: '360px', model: 'y11' };
// const color = myPhone.color; // old proccec
// in ES6
const { color, width, mode } = myPhone; // object er moddher property gulore variable hisabe rakhar niyon 



//array 
const ageLIst = [25, 9, 29, 13, 40];
const [myAge, brotherAge, herAge] = ageLIst; // array distructuring o object er motoi kintu object e obeject er property name er moto same name dia vaiable diclare korte hoy and js compiler e object er moddho theke oi property er value khuje ber kore niye ase kintu array er khetre index onujai var er name dite hoy sei index onujai variable er name set hoy...........


//nested  object 

const company = {
  title: "babel", ceo: {
    main: 'joon-woo', assistant: 'han', work: {
      first: 'development',
      second: 'jami harapna',
      third: 'duplicate medicine'
    }
  }
};

// var thirdWork = company.do.work.third; // cant fine property name error // karon company object e 'do' kono property nei
var thirdWork = company?.do?.work?.third // airokom dile error asbe na undefined dekhabe .