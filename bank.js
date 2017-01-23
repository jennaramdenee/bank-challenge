$(document).ready(function(){

  var bankAccount = new BankAccount();

  updateView()

  function updateView(){
    $('#show-balance').text(bankAccount.showBalance())
  }


  $('#get-statement').on('click', function(event){
    event.preventDefault();
    $('#show-statement').text(bankAccount.statement.printStatement())
  })

  $('#transaction').on('submit', function(event){
    event.preventDefault();
    var inputs = $(this).serializeArray()
    var type = inputs[0].value
    var value = parseInt(inputs[1].value)

    if (type == "Credit"){
      bankAccount.deposit(value)
    }
    else {
      bankAccount.withdraw(value)
    }
    updateView()
  })

  //type=Credit&value=22

})
