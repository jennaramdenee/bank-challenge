(function(exports){

  function BankStatement(){
    this.transactions = []
  }

  BankStatement.prototype.addTransaction = function(transaction){
    this.transactions.push(transaction)
  }

  BankStatement.prototype.printContents = function(){
    var output = ""
    this.transactions.forEach(function(transaction){
      output += ("           " + transaction.date).slice(-11) + "||"
      if (transaction.credit === true){
        output += ("           " + transaction.value.toFixed(2)).slice(-11) + "||           ||"
      }
      else if (transaction.debit === true){
        output += "           ||" + ("           " + transaction.value.toFixed(2)).slice(-11) + "||"
      }
      output += ("           " + transaction.balance.toFixed(2)).slice(-11) + "\n"
    })
    return output
  }

  BankStatement.prototype.printHeader = function(){
    return header = "Date       ||Credit     ||Debit      ||Balance    \n"
  }

  BankStatement.prototype.printStatement = function(){
    return this.printHeader() + this.printContents()
  }

  exports.BankStatement = BankStatement

})(this);
