function BankAccount(){
  this.INITIAL_BALANCE = 0
  this.balance = this.INITIAL_BALANCE
  this.statement = new BankStatement()
}

BankAccount.prototype.showBalance = function(){
  return this.balance
}

BankAccount.prototype.deposit = function(value){
  this.balance += value
  var transaction = new Transaction(this.balance, value)
  transaction.setAsCredit()
  this.finishTransaction(transaction)
}

BankAccount.prototype.withdraw = function(value){
  if (!this.makeBalanceNegative(value)){
    this.balance -= value
  }
  else {
    throw new Error("Not enough funds")
  }
  var transaction = new Transaction(this.balance, value)
  transaction.setAsDebit()
  this.finishTransaction(transaction)
}

BankAccount.prototype.makeBalanceNegative = function(value){
  return this.balance - value < 0
}

BankAccount.prototype.finishTransaction = function(transaction){
  this.statement.addTransaction(transaction)
}
