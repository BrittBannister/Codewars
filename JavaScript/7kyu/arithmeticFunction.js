function arithmetic(a, b, operator) {
 let result = { add: a + b, subtract: a - b, multiply: a * b, divide: a / b }
 return result[operator]
}
