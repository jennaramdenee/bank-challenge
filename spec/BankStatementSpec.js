describe("Bank Statement", function(){

  var bankStatement;

  beforeEach(function(){
    bankStatement = new BankStatement()
    TransactionDouble = function(){
      this.date = "23/01/2017"
      this.debit = true
      this.credit = false
      this.balance = 20.00
      this.value = 4.00
    }

    TransactionDouble2 = function(){
      this.date = "22/01/2017"
      this.debit = false
      this.credit = true
      this.balance = 32.00
      this.value = 6.00
    }
  })

  it("can store transactions", function(){
    expect(bankStatement.transcations).toEqual(jasmine.arrayContaining([]))
  })

  it("can add transactions to transactions log", function(){
    var transactionDouble = function(){}
    bankStatement.addTransaction(transactionDouble)
    expect(bankStatement.transactions).toEqual(jasmine.arrayContaining([transactionDouble]))
  })

  it("can print header of statement", function(){
    header = "Date       ||Credit     ||Debit      ||Balance    \n"
    expect(bankStatement.printHeader()).toEqual(header)
  })

  it("can print contents of statements", function(){
    var testTransaction = new TransactionDouble()
    var testTransaction2 = new TransactionDouble2()
    bankStatement.addTransaction(testTransaction)
    bankStatement.addTransaction(testTransaction2)
    content = "23/01/2017 ||           ||4.00       ||20.00      \n"
    content2 = "22/01/2017 ||6.00       ||           ||32.00      \n"
    expect(bankStatement.printContents()).toEqual(content + content2)
  })

  it("can print out full statement", function(){
    var testTransaction = new TransactionDouble()
    bankStatement.addTransaction(testTransaction)
    header = "Date       ||Credit     ||Debit      ||Balance    \n"
    content2 = "22/01/2017 ||6.00       ||           ||32.00      \n"
    expect(bankStatement.printStatement()).toEqual(header + content)
  })


})
