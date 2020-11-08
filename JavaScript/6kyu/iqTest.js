function iqTest(numbers) {
 numbers = numbers.split(' ')
 const evens = []
 const odd = []
 for (let i = 0; i < numbers.length; i++) {
  numbers[i] & 1 ? odd.push(i + 1) : evens.push(i + 1)
 }
 return evens.length === 1 ? evens[0] : odd[0]
}
