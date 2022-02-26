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


//onno kono obejct er method onno object e use korar niyom 
//onno bhabe bolte gele  method er this proberty kon obejct theke nibe ta bole dewa
const herTreat = mySelf.treat.bind(herSelf);
console.log(herTreat(500 , 400))