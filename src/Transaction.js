function Transaction(){
  this.date
}

Transaction.prototype.generateDate = function(){
  var d = new Date()
  var day = d.getDate().toString()
  var month = (d.getMonth() + 1).toString()
  var year = d.getUTCFullYear().toString()
  return ("0" + day).slice(-2) + "/" + ("0" + month).slice(-2) + "/" + year
}
