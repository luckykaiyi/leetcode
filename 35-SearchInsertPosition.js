var searchInsert = function(nums, target) {
  if(nums.length == 0 || target <= nums[0]) {
    return 0;
  } 
  if(target > nums[nums.length - 1]) {
    return nums.length;
  }
  for(var i = 1; i < nums.length; i++) {
    if(nums[i - 1] == target) {
      return i - 1;
    }
    if(nums[i - 1] < target && nums[i] >= target) {
      return i;
    }
  }
}

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 0));

