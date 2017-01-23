describe("Bank Statement", function(){

  var bankStatement;

  beforeEach(function(){
    bankStatement = new BankStatement()
    TransactionDouble = function(){
      this.date = "23/01/2017"
      this.type = "Debit"
      this.balance = 20.00
      this.value = 4.00
    }

    TransactionDouble2 = function(){
      this.date = "22/01/2017"
      this.type = "Credit"
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
    header = "<tr><th>Date</th><th>Credit</th><th>Debit</th><th>Balance</th></tr>"
    expect(bankStatement.printHeader()).toEqual(header)
  })

  it("can print contents of statements", function(){
    var testTransaction = new TransactionDouble()
    var testTransaction2 = new TransactionDouble2()
    bankStatement.addTransaction(testTransaction)
    bankStatement.addTransaction(testTransaction2)
    content = "<tr><td>23/01/2017</td><td></td><td>4.00</td><td>20.00</td></tr>"
    content2 = "<tr><td>22/01/2017</td><td>6.00</td><td></td><td>32.00</td></tr>"
    expect(bankStatement.printContents()).toEqual(content2 + content)
  })

  it("can print out full statement", function(){
    var testTransaction = new TransactionDouble()
    bankStatement.addTransaction(testTransaction)
    header ="<tr><th>Date</th><th>Credit</th><th>Debit</th><th>Balance</th></tr>"
    content2 = "<tr><td>22/01/2017</td><td>6.00</td><td></td><td>32.00</td></tr>"
    expect(bankStatement.printStatement()).toEqual(header + content)
  })


})
