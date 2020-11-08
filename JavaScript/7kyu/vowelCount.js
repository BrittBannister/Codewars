function getCount(str) {
 let vowelsCount = 0

 str
  .toLowerCase()
  .split('')
  .map((x) => {
   ;/[aeiou]/.test(x) ? (vowelsCount += 1) : (vowelsCount += 0)
  })

 console.log(str.toLowerCase(), vowelsCount)

 return vowelsCount

 return vowelsCount
}
