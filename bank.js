$(document).ready(function(){

  var bankAccount = new BankAccount();

  updateView()

  function updateView(){
    $('#show-balance').text(bankAccount.showBalance())
  }

  function getStatement(){
    $('#get-statement').on('click', function(event){
      event.preventDefault();
      $('#show-statement').text(bankAccount.statement.printContents())
    })
  }

  function addTxn(){
    $()
  }

})
