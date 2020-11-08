function tickets(peopleInLine) {
 let arr = [0, 0]
 for (let i = 0; i < peopleInLine.length; i++) {
  switch (peopleInLine[i]) {
   case 25:
    arr[0]++
    break
   case 50:
    ;[arr[0]--, arr[1]++]
    break
   default:
    arr[1] ? arr[1]-- : (arr[0] -= 2)
    arr[0]--
    break
  }
  if (arr[0] < 0) {
   return 'NO'
  }
 }
 return 'YES'
}
