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
console.log(mySelf.treat(500 , 50));

//kono object er propery hisabe akti function diclare kora jay tohon oi function er moddhe oi object er moddhe kono property access korte caile [this.propertyName] dite hoy....