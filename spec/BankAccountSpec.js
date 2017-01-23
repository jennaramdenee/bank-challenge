describe("Bank Account", function(){

  var bankAccount;

  beforeEach(function(){
    bankAccount = new BankAccount()
  })

  it("can store an initial balance of zero", function(){
    expect(bankAccount.balance).toEqual(0)
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

  it("creates a new transaction and sets type as credit every time a deposit is made", function(){
    spyOn(Transaction.prototype, "setAsCredit")
    bankAccount.deposit(10);
    expect(Transaction.prototype.setAsCredit).toHaveBeenCalled();
  })

  it("creates a new transaction and setes type as debit every time a withdrawal is made", function(){
    spyOn(Transaction.prototype, "setAsDebit")
    bankAccount.deposit(10);
    bankAccount.withdraw(4);
    expect(Transaction.prototype.setAsDebit).toHaveBeenCalled();
  })

})
