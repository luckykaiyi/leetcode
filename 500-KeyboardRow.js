var input = ['Hello', 'Alaska', 'Dad', 'Peace'];

var findWords= function(words) {
  var output = [];
  var obj = {
    a: 1,
    b: 2,
    c: 2,
    d: 1,
    e: 0,
    f: 1,
    g: 1,
    h: 1,
    i: 0,
    j: 1,
    k: 1,
    l: 1,
    m: 2,
    n: 2,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 1,
    t: 0,
    u: 0,
    v: 2,
    w: 0,
    x: 2,
    y: 0,
    z: 2
  }
  for (var i = 0; i < words.length; i++) {
    var word = words[i].toLowerCase();
    var start =  obj[word[0]];
    var isInSameRow = true;
    for(var j = 1; j < word.length; j++) {
      if(obj[word[j]] != start) {
        isInSameRow = false;
        break;
      }
    }
    if(isInSameRow) {
      output.push(words[i]);
    }
  }
  return output;
}
var output = findWords(input);
console.log(output);
