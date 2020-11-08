function createPhoneNumber(numbers) {
 let number = '(xxx) xxx-xxxx'
 for (let i = 0; i < numbers.length; i++) {
  number = number.replace('x', numbers[i])
 }
 return number
}
