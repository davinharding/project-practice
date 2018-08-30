

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