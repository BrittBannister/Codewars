function repeatStr(count, string) {
 let ret = ''
 for (let i = 0; i < count; i++) {
  ret += string
 }
 return ret
}
let myString = repeatStr(4, 'hi')
