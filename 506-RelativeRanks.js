var findRelativeRanks = function(nums) {
  var arr = [];
  var ranksList = {};
  for(var i = 0; i < nums.length; i++) {
    arr.push(nums[i]);
  }
  arr.sort(function(a, b) {
    return b - a;
  })
  for(var i = 0; i < arr.length; i++) {
    switch (i) {
      case 0:
        ranksList[arr[i]] = 'Gold Medal';
        break;
      case 1:
        ranksList[arr[i]] = 'Silver Medal';
        break;
      case 2:
        ranksList[arr[i]] = 'Bronze Medal';
        break;
      default:
        ranksList[arr[i]] = (i + 1).toString();
    }
  }
  for(var i = 0; i < nums.length; i++) {
    arr[i] = ranksList[nums[i]];
  }
  return arr;
};
var nums = [5, 9, 3, 6, 1];
var result = findRelativeRanks(nums);
console.log(result);


