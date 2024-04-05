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








