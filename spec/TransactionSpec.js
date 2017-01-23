describe("Transaction Management", function(){

  var transaction;

  beforeEach(function(){
    transaction = new Transaction(20)
  })

  describe("Balance", function(){

    it("can take balance as argument and store in property", function(){
      expect(transaction.balance).toEqual(20)
    })
    
  })

  describe("Date", function(){

    it("can store date of transaction", function(){
      expect(transaction.date).toBeDefined()
    })

    it("can generate today's date in dd/mm/yyyy format", function(){
      expect(transaction.generateDate().length).toEqual(10)
    })

  })

  describe("Type", function(){

    it("can store type of transaction, defaulted to 'null'", function(){
      expect(transaction.type).toBeDefined()
    })

    it("can set the type of transaction to 'credit'", function(){
      transaction.setAsCredit()
      expect(transaction.type).toEqual("Credit")
    })

    it("can set the type of transaction to 'debit'", function(){
      transaction.setAsDebit()
      expect(transaction.type).toEqual("Debit")
    })

  })

})
