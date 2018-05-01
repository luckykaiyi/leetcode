var containsNearbyDuplicate = function(nums, k) {
  var obj = {};
  for(var i = 0; i < nums.length; i++) {
    if(obj[nums[i]] != undefined  && Math.abs(obj[nums[i]] - i) <= k ) {
      return true;
    } else {
      obj[nums[i]] = i; 
    }
  }
  return false;
};
var nums = [1,3,4,1];
var k = 3;
console.log(containsNearbyDuplicate(nums,k));
