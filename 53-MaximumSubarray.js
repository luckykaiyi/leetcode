// Ref. 
var maxSubArray = function(nums) {
  var maxEnd = nums[0]; 
  var max = nums[0];
  for(var i = 1; i < nums.length; i++) {
    maxEnd = Math.max(nums[i] + maxEnd, nums[i]);
    max = Math.max(max, maxEnd);
  }
  return max;
};
// Time limit exceed
// var maxSubArray = function(nums) {
//   var max = Number.NEGATIVE_INFINITY;
//   for(var i = 0; i < nums.length; i++) {
//     var j = i + 1;
//     for(; j <= nums.length; j++) {
//       var subArray = nums.slice(i, j);
//       var sum = getSum(subArray);
//       max = Math.max(max, sum);
//     }
//   }
//   return max;
// }
// var getSum = function(nums) {
//   var sum = 0;
//   for(var i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   return sum;
// }
var arr = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(arr));
