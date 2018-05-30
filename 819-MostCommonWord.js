var mostCommonWord = function(paragraph, banned) {
  var arr = paragraph.split(' ');
  var obj = {};
  var min = 0;
  var word = '';
  console.log('arr', arr);
  for(var i = 0; i < arr.length; i++) {
    var s = arr[i].replace(/^[^a-zA-Z]+|[^a-zA-Z]+$/g, '').toLowerCase();
    if(!s || banned.indexOf(s) != -1) continue;
    obj[s] = obj[s] ? obj[s] + 1 : 1;
  }
  console.log('obj', obj);
  for(var k in obj) {
    if(obj[k] > min) {
      min = obj[k];
      word = k;
    }
  }
  return word;
};
