var twoSum = function(nums, target) {
  var values = {};
  for(var i = 0; i < nums.length; i++) {
    values[nums[i]] = i;
  }
  for(var i = 0; i < nums.length; i++) {
    var value = target - nums[i];
    if(value in values && i != values[value]) {
      return [i, values[value]];
    }
  }
};
