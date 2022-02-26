const myAttitude = {
  position: 'joker',
  work: 'web developer',
  isGood: false,
  luckyNumber: 47 
}


const propertyName = Object.keys(myAttitude)//keys dia ojecj er property er name gulo khuje paoya jay

const values = Object.values(myAttitude) // values dia values khuje paoya jay

const couple = Object.entries(myAttitude) // entries diye property name and propery value aksathe akti array er moddhe paoya jay and sobgulo jora abr akti main array er index hisabe paoya jay
/* console.log(couple)
like [
  [ 'position', 'joker' ],
  [ 'work', 'web developer' ],
  [ 'isGood', false ],
  [ 'luckyNumber', 47 ]
] */


Object.freeze(myAttitude)// freez korle oi object kono prokar change sadhon hobe na sudhu property gulo access kora jabe


Object.seal(myAttitude)// seal korle object er property er value change kora jabe kintu property delet kora jabe na and add o kora jabe na
myAttitude.luckyNumber = 4
myAttitude.online = 'nothing'

delete myAttitude.luckyNumber // property delet korar niyom



