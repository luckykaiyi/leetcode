// ref.
var minMoves = function(nums) {
  if(!nums || !nums.length) return 0;
  var sum = min = nums[0];
  for(var i = 1; i < nums.length; i++) {
    sum += nums[i];
    if(nums[i] < min) {
      min = nums[i];
    }
  }
  return sum - nums.length * min;
};
// Time Limit Exeed
//var minMoves = function(nums) {
  //if(!nums || !nums.length) return 0;
  //var count = 0;
  //nums.sort(function(a, b) { return a - b });
  //while(nums[0] != nums[nums.length - 1]) {
    //if(nums[0] == nums[nums.length - 2]) {
      //return count + nums[nums.length - 1] - nums[0];
    //}
    //for(var i = 0; i < nums.length - 1; i++) {
      //nums[i]++;
    //}
    //nums.sort(function(a, b) { return a - b });
    //count++;
  //}
  //return count;
//};
