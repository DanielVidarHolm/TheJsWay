const account = {
    name: 'Alex',
    balance: 0,
    credit(x) {
        this.balance += x;
    },
    describe() {
        return `Owner: ${this.name} \nBalance ${this.balance}$`;
    }
};
console.log(account.describe());
account.credit(250);
account.credit(-80);
console.log(account.describe());