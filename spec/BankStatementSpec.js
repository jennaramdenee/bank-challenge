describe("Bank Statement", function(){

  var bankStatement;

  beforeEach(function(){
    bankStatement = new BankStatement()
  })

  it("can store transactions", function(){
    expect(bankStatement.transcations).toEqual(jasmine.arrayContaining([]))
  })

  it("can add transactions to transactions log", function(){
    var transactionDouble = function(){}
    bankStatement.addTransaction(transactionDouble)
    expect(bankStatement.transactions).toEqual(jasmine.arrayContaining([transactionDouble]))
  })



})
