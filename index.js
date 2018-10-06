// add solution here

var array = []

function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i < musicians.length; i ++) {
    array.push(musicians[i] + ' plays ' + instruments[i])
    /* `` characters weren't working. i guess thats a problem
    with needing to update my browser? this works too i guess. */
  }
  return array
}

function johnLennonFacts(facts) {
  let i = 0
  while (i < facts.length) {
    facts[i] = facts[i] + '!!!'
    i ++
  }
  return facts
}
  
  