var nextGreaterElement = function(findNums, nums) {
  var output = [];
  var obj = {};
  for (var i = 0; i < nums.length; i++) {
    obj[nums[i]] = i;
  }
  for (var i = 0; i < findNums.length; i++) {
    var index = obj[findNums[i]];
    if (index == nums.length - 1) {
      output.push(-1);
    } else {
      for (var j = index + 1; j < nums.length; j++) {
        if (nums[index] < nums[j]) {
          output.push(nums[j]);
          break;
        }
      }
      if (j == nums.length) {
        output.push(-1);
      }
    }
  }
  return output;
}
var nums1 = [4, 1, 2];
var nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2));
