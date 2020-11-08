function matrixAddition(a, b) {
 let g = a.slice()
 for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a.length; j++) {
   g[i][j] = a[i][j] + b[i][j]
  }
 }
 return g
}
