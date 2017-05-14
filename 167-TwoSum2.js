var twoSum = function(numbers, target) {
  var obj = {};
  for(var i = 0; i < numbers.length; i++) {
    if(!obj[numbers[i]]) {
      obj[numbers[i]] = {
        diff: target - numbers[i],
        index: i + 1
      }
    } else {
      obj[numbers[i]].isMutiple = true;
    }
  }
  for(var i in obj) {
    if(obj[obj[i].diff]) {
      if(obj[i].diff == i && obj[i].isMutiple) {
        return [obj[i].index, obj[i].index + 1];
      }
      if(obj[i].diff != i) {
        var index1 = Math.min(obj[i].index, obj[obj[i].diff].index);
        var index2 = Math.max(obj[i].index, obj[obj[i].diff].index);
        return [index1, index2];
      }
    }
  }
};
//var numbers = [2, 7, 11, 15];
//var target = 9;
var numbers = [-1, 0];
var target = -1;
console.log(twoSum(numbers, target));

