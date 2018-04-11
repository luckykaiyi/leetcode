var nums = [3,2,1];
var thirdMax = function(nums) {
  var max1 = max2 = max3 = Number.NEGATIVE_INFINITY;
  for(var i = 0; i < nums.length; i++) {
    if(nums[i] > max1) {
      max1 = nums[i];
    }
  }
  for(var i = 0; i < nums.length; i++) {
    if(nums[i] > max2 && nums[i] < max1) {
      max2 = nums[i];
    }
  }
  for(var i = 0; i < nums.length; i++) {
    if(nums[i] > max3 && nums[i] < max2) {
      max3 = nums[i];
    }
  }
  console.log(max1, max2, max3);
  return (max3 == max2 || max3 == Number.NEGATIVE_INFINITY) ? max1 : max3;
}
console.log(thirdMax(nums));