// Need to create an Account class with the properties of accountNumber, current balance, and owner.
// The account should have medtods to withdraw and deposit.
// The withdraw method needs to check if there is enough money to withdraw before withdrawing.

// Implement a child class CheckingAccount and SavingsAccount, each inheriting from the Account class.

// The CheckingAccount will also have an overdraftLimit property. Override the withdraw method to first check if there is enough (+ overdraftLimit) before withdrawing.

// The SavingsAccount will also have an interestRate. Add a method addInterest that will increase the currentBalance by that interest rate.

class Account {

    constructor(accountNumber, currentBalance, owner) {
        this.accountNumber = accountNumber;
        this.currentBalance = currentBalance;
        this.owner = owner;
}

// deposit method should add that amount to the currentBalance
    deposit(amount) {                                 
        this.currentBalance += amount;
}

// withdraw method should first check if there is enough to withdraw before withdrawing
    withdraw(amount) {
        if (this.currentBalance >= amount) {
            this.currentBalance -= amount
        }
    }

}
// Test code for the class and methods which was successful
// const myAccount = new Account('12345678', 1000, 'John Doe');
// console.log(myAccount);

// myAccount.deposit(500);  
// myAccount.withdraw(200); 

// console.log(myAccount);


// Implement child class CheckingAccount inheriting from the Account class.
class CheckingAccount extends Account {
    constructor(accountNumber, currentBalance, owner, overdraftLimit) {
        super(accountNumber, currentBalance, owner);
        this.overdraftLimit = overdraftLimit;
    }

    // Override the withdraw method to first check if there is enough (+ overdraftLimit) before withdrawing.
    withdraw(amount) { 
        const overdraftBuffer = this.currentBalance + this.overdraftLimit;
        if (overdraftBuffer >= amount) {
            this.currentBalance -= amount;
        }
    }
}


// const checkingAccount = new CheckingAccount('12345678', 1000, 'John Doe', 500);
// checkingAccount.withdraw(1400);  // Subtracts 1400 from the balance, even if there is not enough money, as long as overdraftLimit allows it.
// checkingAccount.withdraw(100);   // Subtracts 200 from the balance if there is enough money or overdraftLimit allows it.

// console.log(checkingAccount);


// implement child class SavingsAccount inheriting from the Account class.
class SavingsAccount extends Account {
    constructor(accountNumber, currentBalance, owner, interestRate) {
        super(accountNumber, currentBalance, owner);
        this.interestRate = interestRate;
    }

    // Add a method addInterest that will increase the currentBalance by that interest rate
    addInterest() {
        this.currentBalance += (1 + this.interestRate / 100);
    }
}
//Successful test code for the SavingsAccount class and methods
// const savingsAccount = new SavingsAccount('654321', 5000, 'Jane Smith', 2);
// savingsAccount.addInterest();  // Adds interest to the balance based on the interestRate.

// console.log(savingsAccount);
