(function(exports){

  function Transaction(balance, value){
    this.date = this.generateDate()
    this.credit = null
    this.debit = null
    this.balance = balance.toFixed(2)
    this.value = value.toFixed(2)
  }

  Transaction.prototype.generateDate = function(){
    var d = new Date()
    var day = d.getDate().toString()
    var month = (d.getMonth() + 1).toString()
    var year = d.getUTCFullYear().toString()
    return ("0" + day).slice(-2) + "/" + ("0" + month).slice(-2) + "/" + year
  }

  Transaction.prototype.setAsCredit = function(){
    this.credit = true
    this.debit = false
  }

  Transaction.prototype.setAsDebit = function(){
    this.debit = true
    this.credit = false
  }

  exports.Transaction = Transaction

})(this);
