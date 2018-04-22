// ref.
var checkPossibility = function(nums) {
  var count = 0;
  for(var i = 1; i < nums.length; i++) {
    if(nums[i] < nums[i - 1]) {
      count++;
      if(count > 1) return false;
      if(i >= 2 && nums[i - 2] > nums[i]) {
        nums[i] = nums[i - 1];
      } else {
        nums[i - 1] = nums[i];   
      }
    }
  }
  return true;
};
