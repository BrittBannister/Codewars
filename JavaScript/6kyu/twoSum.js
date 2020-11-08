function twoSum(number, target) {
 for (let i = 0; i < number.length - 1; i++)
  for (let j = i + 1; j < number.length; j++)
   if (number[i] + number[j] === target) return [i, j]
}
