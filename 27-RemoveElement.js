var removeElement = function(nums, val) {
  for(var i = 0; i < nums.length; i++) {
    if(nums[i] == val) {
      for(var j = i + 1; j < nums.length; j++) {
        nums[j - 1] = nums[j];
      }
      nums.length -= 1;
      i--;
    }
  }
  return nums.length;
}
var nums = [3,3];
var n = removeElement(nums, 3);
console.log(nums,n);
