function BankStatement(){
  this.transactions = []
}

BankStatement.prototype.addTransaction = function(transaction){
  this.transactions.push(transaction)
}
