function tribonacci(signature, n) {
 const trib = [...signature]
 for (var i = 3; i < n; i++) {
  trib[i] = trib[i - 1] + trib[i - 2] + trib[i - 3]
 }
 return n < 3 ? trib.slice(0, n) : trib
}
