class Bankaccount {
    #balance;
    #accountnumber;

    constructor(balance, accountnumber){
        this.#balance = balance;
        this.#accountnumber = accountnumber;
    }

    deposit(amount){
        this.#balance += amount;
    }
    withdraw(amount){
        if(this.#balance < amount){
            console.log("Transaction failed! Insufficient balance.")
        }
        else{
            this.#balance -= amount;
        }
    }
    getBalance(){
        return this.#balance;
    }
}

// Example Usage
const acc1 = new Bankaccount(200, 24253644653);

acc1.deposit(100);  // Deposited: 100. New Balance: 300
acc1.withdraw(150); // Withdrawn: 150. New Balance: 150
acc1.withdraw(200); // Transaction failed!

console.log(acc1.getBalance());
