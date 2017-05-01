var findDisappearedNumbers = function(nums) {
  var result = [];
  for(var i = 0; i < nums.length; i++) {
    nums[Math.abs(nums[i]) - 1] = - Math.abs(nums[Math.abs(nums[i]) - 1]);
  }
  for(var i = 0; i < nums.length; i++) {
    if(nums[i] > 0) {
      result.push(i + 1);
    }
  }
  return result;
}
var nums = [4,3,2,7,8,2,3,1];
var result = findDisappearedNumbers(nums);
console.log(result)
