var missingNumber = function(nums) {
  var n = 0;
  for(var i = 0; i <= nums.length; i++) {
    n += i;
  }
  for(var i = 0; i < nums.length; i++) {
    n -= nums[i];
  }
  return n;
};
var nums = [0, 1, 3];
console.log(missingNumber(nums));
