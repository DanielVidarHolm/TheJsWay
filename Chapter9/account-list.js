class Account{
    constructor(name){
        this.name = name;
        this.balance = 0;
    }
    credit(value){
        this.balance += value
    }
    describe(){
        return `owner: ${this.name}, balance: ${this.balance}`
    }
}

let sean = new Account('Sean');
let brad = new Account('Brad');
let georges = new Account('Georges');
const accArr = [sean, brad, georges]

accArr.forEach(acc => {
    acc.credit(1000)
    console.log(acc.describe())
})
