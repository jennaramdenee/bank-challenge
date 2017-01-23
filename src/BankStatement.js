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
      output += transaction.date + " ||"
      console.log(typeof(transaction.date))
      if (transaction.credit === true){
        output += transaction.value.toFixed(2) + "       ||          ||"
      }
      else if (transaction.debit === true){
        output += "          ||" + transaction.value.toFixed(2) + "      ||"
      }
      output += transaction.balance.toFixed(2) + "     \n"
    })
    return output
  }

  BankStatement.prototype.printHeader = function(){
    return "Date       ||Credit    ||Debit    ||Balance   \n"
  }

  BankStatement.prototype.printStatement = function(){
    return this.printHeader() + this.printContents()
  }

  exports.BankStatement = BankStatement

})(this);
