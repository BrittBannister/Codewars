function findLongest(str) {
 var strSplit = str.split(' ') //split into an array of words
 var longestWord = 0 //gotta have a varibale to hold longest word
 for (var i = 0; i < strSplit.length; i++) {
  if (strSplit[i].length > longestWord) {
   longestWord = strSplit[i].length //takes on this value
  }
 }
 return longestWord
}
findLongest('Hi my name is brittney')
