function findOdd(A) {
 let count = 0
 let array = A.sort((a, b) => a - b)
 for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
   if (array[i] == array[j]) {
    count++
   }
  }
  if (count % 2 !== 0) {
   return array[i]
  }
 }
}
