function rainAmount(mm) {
 if (mm < 40) {
  //this needs to be mm...not the name of the function.
  return 'You need to give your plant ' + (40 - mm) + 'mm of water'
 } else {
  return 'Your plant has had more than enough water for today!'
 }
}
