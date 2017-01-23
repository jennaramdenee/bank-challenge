(function(exports){

  function BankStatement(){
    this.transactions = []
  }

  BankStatement.prototype.addTransaction = function(transaction){
    this.transactions.push(transaction)
  }

  BankStatement.prototype.printContents = function(){
    var output = ""
    this.transactions.reverse().forEach(function(transaction){
      output += "<tr><td>" + transaction.date + "</td>"
      if (transaction.type === "Credit"){
        output += "<td>" + transaction.value.toFixed(2) + "</td><td></td>"
      }
      else {
        output += "<td></td><td>" + transaction.value.toFixed(2) + "</td>"
      }
      output += "<td>" + transaction.balance.toFixed(2) + "</td></tr>"
    })
    return output
  }

  BankStatement.prototype.printHeader = function(){
    return header = "<tr><th>Date</th><th>Credit</th><th>Debit</th><th>Balance</th></tr>"
  }

  BankStatement.prototype.printStatement = function(){
    return this.printHeader() + this.printContents()
  }

  exports.BankStatement = BankStatement

})(this);
