// besic class define
class Identity {
  name;
  id;
  role = 'web developer';
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

const mySelf = new Identity('siam' , 559718);
console.log(mySelf);