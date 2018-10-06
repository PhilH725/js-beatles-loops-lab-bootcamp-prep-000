// add solution here

var array = []

function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i < musicians.length; i ++) {
    array.push("${musicians[i]} ${instruments[i]")
  }
  return array
}
