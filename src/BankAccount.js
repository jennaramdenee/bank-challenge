function BankAccount(){
  this.INITIAL_BALANCE = 0
  this.balance = this.INITIAL_BALANCE
}

BankAccount.prototype.deposit = function(value){
  this.balance += value
  var transaction = new Transaction(this.balance)
  transaction.setAsCredit()
}

BankAccount.prototype.withdraw = function(value){
  if (!this.makeBalanceNegative(value)){
    this.balance -= value
  }
  else {
    throw new Error("Not enough funds")
  }
  var transaction = new Transaction(this.balance)
  transaction.setAsDebit()
}

BankAccount.prototype.makeBalanceNegative = function(value){
  return this.balance - value < 0
}
