var findShortestSubArray = function(nums) {
  var obj = {};
  var max = 0;
  var len = nums.length;
  for(var i = 0; i < nums.length; i++) {
    if(!obj[nums[i]]) {
      obj[nums[i]] = [i];
    } else {
      obj[nums[i]].push(i);
    }
  }
  for(var k in obj) {
    max = Math.max(max, obj[k].length);
  }
  if(max == 1) return 1;
  for(var k in obj) {
    if(obj[k].length == max) {
      len = Math.min(len, obj[k][obj[k].length - 1] - obj[k][0] + 1);     
    }
  }
  return len;
};
