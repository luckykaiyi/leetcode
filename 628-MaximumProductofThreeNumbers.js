var maximumProduct = function(nums) {
  if(nums.length == 3) return nums[0] * nums[1] * nums[2];
  var max = max1 = max2 = max3 = Number.NEGATIVE_INFINITY;
  var min1 = min2 = Number.POSITIVE_INFINITY;
  for(var i = 0; i < nums.length; i++) {
    if(nums[i] > max1) {
      max3 = max2;
      max2 = max1;
      max1 = nums[i];
    } else if (nums[i] > max2) {
      max3 = max2;
      max2 = nums[i];
    } else if (nums[i] > max3) {
      max3 = nums[i];
    }
    if(nums[i] < min1) {
      min2 = min1;
      min1 = nums[i];
    } else if (nums[i] < min2) {
      min2 = nums[i];
    }
  }
  console.log(max1, max2, max3, min1, min2);
  if(max1 <=0 || min1 >= 0) return max1 * max2 * max3;
  var arr = [max1, max2, max3, min1, min2];
  for(var i = 0; i < arr.length; i++) {
    for(var j = i + 1; j < arr.length; j++) {
      for(var k = j + 1; k < arr.length; k++) {
        max = Math.max(arr[i] * arr[j] * arr[k], max);
      }
    }
  }
  return max;
};

// ref. simplified
var maximumProduct = function(nums) {
  if(nums.length == 3) return nums[0] * nums[1] * nums[2];
  var max1 = max2 = max3 = Number.NEGATIVE_INFINITY;
  var min1 = min2 = Number.POSITIVE_INFINITY;
  for(var i = 0; i < nums.length; i++) {
    if(nums[i] > max1) {
      max3 = max2;
      max2 = max1;
      max1 = nums[i];
    } else if (nums[i] > max2) {
      max3 = max2;
      max2 = nums[i];
    } else if (nums[i] > max3) {
      max3 = nums[i];
    }
    if(nums[i] < min1) {
      min2 = min1;
      min1 = nums[i];
    } else if (nums[i] < min2) {
      min2 = nums[i];
    }
  }
  return Math.max(max1 * max2 * max3, max1 * min1 * min2);
};
