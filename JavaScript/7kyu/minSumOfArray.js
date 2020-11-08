function minSum(arr) {
 arr = arr.sort((a, b) => a - b)
 let temp = 0
 for (let i = 0; i < arr.length / 2; i++)
  temp += arr[i] * arr[arr.length - i - 1]
 return temp
}
