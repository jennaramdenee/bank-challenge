# Bank Challenge

### Purpose
Project to create a basic program that allows a user to create a virtual bank account, allowing for withdrawals, deposits and the ability to print a bank statement via a REPL

### User Stories
```
As a user,
So that I can start using my account
I want to be able to open a bank account with zero balance

As a user,
So that I can save my money
I want to be able to make a deposit that increases my balance

As a user,
So that I can use my money
I want to be able to withdraw money that decreases my balance

As a user,
So that I can't use money I don't have
I don't want to be able to withdraw money that is not available

As a user,
So that I can understand my recent transactions
I want to be able to print my statement

As a user,
So that I can see my recent transactions
I want to be able to see dates at which deposits were made on my statement

As a user,
So that I can see my recent transactions
I want to be able to see dates at which withdrawals were made on my statement

As a user,
So that I can differentiate between deposits and withdrawals
I want to be able to clearly see deposits on my statement

As a user,
So that I can differentiate between deposits and withdrawals
I want to be able to clearly see withdrawals on my statement

As a user,
So that I can understand how the amount of money I have left in my account has changed
I want to be able to see my balance at each transaction on my statement
```

### How to Use

##### Option 1: Console

* Fork and clone this repository

* Open `index.html` in your browser

* Create a new bank account in the console
```
acc = new BankAccount()
```

* Deposit some money to get started
```
acc.deposit(45)
```

* Make a withdrawal
```
acc.withdraw(2)
```

* Print statement to see recent transactions
```
acc.statement.printStatement()

Date       ||Credit     ||Debit      ||Balance    
 23/01/2017||           ||       2.00||      43.00
 23/01/2017||      45.00||           ||      45.00
```

##### Option 2:

* Fork and clone this repository

* Open `index.html` in your browser

* Enter type of transaction (debit vs. credit) using drop down menu, and type in value corresponding to the transaction

* Click `Add` to complete the transaction

* Click `Generate Statement` to show recent transactions on the page
