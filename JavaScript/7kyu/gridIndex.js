const gridIndex = (grid, indices) => {
 let flat = grid.flat(2)
 return indices.map((indice) => flat[indice - 1]).join('')
}
