describe("Transaction Management", function(){

  var transaction;

  beforeEach(function(){
    transaction = new Transaction()
  })

  it("can store date of transaction", function(){
    expect(bankAccount.date).toBeDefined()
  })

  it("can generate today's date in dd/mm/yyyy format", function(){
    expect(transaction.generateDate().length).toEqual(10)
  })

})
