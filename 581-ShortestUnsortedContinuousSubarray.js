var findUnsortedSubarray = function(nums) {
  var arr = nums.slice(0);
  var m = 0;
  var n = nums.length - 1;
  arr.sort(function(a, b) { return a - b;})
  for(var i = 0; i < nums.length; i++) {
    if(nums[i] != arr[i]) {
      m = i;
      break;
    }
  }
  if(i == nums.length) return 0;
  for(var j = nums.length - 1; j > -1; j--) {
    if(nums[j] != arr[j]) {
      n = j;
      break;
    }
  }
  return n - m + 1;
};

// ref.

var findUnsortedSubarray = function(nums) {
  var m = 0, n = nums.length - 1, min = Number.POSITIVE_INFINITY, max = Number.NEGATIVE_INFINITY;
  while(m < n && nums[m] <= nums[m + 1]) m++;
  if(m == n) return 0;
  while(n > m && nums[n] >= nums[n - 1]) n--;
  for(var i = m; i <= n; i++) {
    max = Math.max(max, nums[i]);
    min = Math.min(min, nums[i]);
  }
  while(nums[m] > min) m--;
  while(nums[n] < max) n++;
  return n - m - 1;
};

