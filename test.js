const { loans } = require('./dist')

const moneyDown = loans.monthlyPayment(5000, 24, 4.5)

console.log(moneyDown)