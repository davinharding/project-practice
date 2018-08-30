
class Person {
    constructor (levelSuck, levelChill) {
        this.levelSuck = levelSuck;
        this.levelChill = levelChill;

    }
    displayLevels() {
        console.log(this.levelSuck);
        console.log(this.levelChill);
    }
}

Pio = new Person(100, 0);

console.log(Pio);



class Davin {
  constructor(name, money = 0){
    this.name = name;
    this.money = money;
  }

  moneyStatus(){
    console.log(`I, ${this.name}, am poor.`)
  }
}


let teammateDavin = new Davin('Davin', 0)

teammateDavin.moneyStatus()



let i = `yo yo yo`

