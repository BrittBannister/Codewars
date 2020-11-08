function sumTwoSmallestNumbers(numbers) {
 let answer = 0
 numbers.sort(function (a, b) {
  return a - b
 })
 return numbers[0] + numbers[1]
}
