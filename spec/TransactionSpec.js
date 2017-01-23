describe("Transaction Management", function(){

  var transaction;

  beforeEach(function(){
    transaction = new Transaction(20, 3)
  })

  describe("Balance", function(){

    it("can take balance as argument and store in property", function(){
      expect(transaction.balance).toEqual("20.00")
    })

  })

  describe("Value", function(){

    it("can take value as argument and store in property", function(){
      expect(transaction.value).toEqual("3.00")
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

    it("can store if type of transaction is credit, defaulted to 'null'", function(){
      expect(transaction.credit).toBeDefined()
    })

    it("can store if type of transaction is debit, defaulted to 'null'", function(){
      expect(transaction.debit).toBeDefined()
    })

    it("can set the type of transaction to 'credit'", function(){
      transaction.setAsCredit()
      expect(transaction.credit).toEqual(true)
      expect(transaction.debit).toEqual(false)
    })

    it("can set the type of transaction to 'debit'", function(){
      transaction.setAsDebit()
      expect(transaction.debit).toEqual(true)
      expect(transaction.credit).toEqual(false)
    })

  })

})
