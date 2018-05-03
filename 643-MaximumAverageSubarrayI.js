//var findMaxAverage = function(nums, k) {
  //var sum = Number.NEGATIVE_INFINITY;
  //for(var i = 0; i < Math.max(0, nums.length - k + 1); i++) {
    //var tmp = nums[i];
    //for(var j = 1; j < k; j++) {
      //tmp += nums[i + j];
    //}
    //sum = Math.max(tmp, sum);
  //}
  //return sum / k;
//};

// optimized

var findMaxAverage = function(nums, k) {
  var sum = Number.NEGATIVE_INFINITY;
  var tmp = null;
  for(var i = 0; i < Math.max(0, nums.length - k + 1); i++) {
    if(tmp == null) {
      for(var j = 0; j < k; j++) {
        tmp += nums[i + j];
      }   
    } else {
      tmp = tmp - nums[i - 1] + nums[i + k - 1];
    }
    sum = Math.max(tmp, sum);
  }
  return sum / k;
};

