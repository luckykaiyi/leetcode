var removeDuplicates1 = function(nums) {
  for(var i = 1; i < nums.length; i++) {
    if(nums[i] == nums[i - 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};
// ref. better
var removeDuplicates2 = function(nums) {
  var count = 0;
  for(var i = 1; i < nums.length; i++) {
    if(nums[i] == nums[i - 1]) {
      count += 1;
    }
    nums[i - count] = nums[i];
  }
  console.log(nums);
  return nums.length - count;
};
var arr = [1, 1, 2];
console.log(removeDuplicates2(arr));