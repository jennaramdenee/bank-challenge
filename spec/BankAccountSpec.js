describe("Bank Account", function(){

  var bankAccount;

  beforeEach(function(){
    bankAccount = new BankAccount();
  })

  describe("Balance Management", function(){

    it("can store an initial balance of zero", function(){
      expect(bankAccount.balance).toEqual(0)
    })

    it("can show me my balance", function(){
      expect(bankAccount.showBalance()).toEqual(0)
    })

    it("can increase the balance when a defined deposit is made", function(){
      bankAccount.deposit(3)
      expect(bankAccount.balance).toEqual(3)
    })

    it("can decrease the balance when a defined withdrawal is made", function(){
      bankAccount.deposit(10)
      bankAccount.withdraw(4)
      expect(bankAccount.balance).toEqual(6)
    })

    it("can check whether a transaction will reduce the balance below zero", function(){
      expect(bankAccount.makeBalanceNegative(4)).toEqual(true)
    })

    it("can throw an error if a withdrawal reduces balance below zero", function(){
      expect(function(){bankAccount.withdraw(2)}).toThrow(new Error("Not enough funds"))
    })

  })

})
