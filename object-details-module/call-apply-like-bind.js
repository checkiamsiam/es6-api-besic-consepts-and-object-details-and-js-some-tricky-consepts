const mySelf = {
  id:559718,
  name: 'Siam Sheikh',
  hobby: ['coding','cricket','pubg','adda'],
  balance: 5000,
  treat: function(amountOfTreat , boksis){//watch carefully 
    this.balance = this.balance - amountOfTreat - boksis;
    return this.balance
  }
}
const herSelf = {
  id:759718,
  name: 'someOne special',
  hobby: ['editing','ludu','freefire','tiktok'],
  balance: 9000,
}

const herTreat = mySelf.treat.call(herSelf , 5000 , 200);//call er kaj blind er motoi kintu blind e akti funcion return kore then oi fuction er moddhe argument pass kore method use korte hoy kintu call er khetre direct method er funciton use kore tar result pawa jay
const herTreat2 = mySelf.treat.apply(herSelf , [5000 , 200]);// call ar apply er kaj same e sudhu calle r khetre argument gulo normally dilei hoy and apply er khetre akti array er moddhe argument gulo pass korte hoy
console.log(herTreat);