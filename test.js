const { loans } = require('./dist')

const moneyDown = loans.downPayment(10, 15)

console.log(moneyDown)