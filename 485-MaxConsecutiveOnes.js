var findMaxConsecutiveOnes = function(nums) {
  var max = 0;
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      count += nums[i];
    } else {
      if (count > max) {
        max = count;
      }
      count = 0;
    }
  }
  if (count > max) {
    max = count;
  }
  return max;
}
var input = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(input));
