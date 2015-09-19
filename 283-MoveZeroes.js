//1  Accepted啦 不过还有很大的改进空间
var moveZeroes = function(nums) {
  var length = nums.length;
  var n = 0;
  for (var i = 0; i < length; i++) {
      if(nums[i] != 0) {
          nums.push(nums[i]);
      } else {
          n += 1;
      } 
  }
      nums.splice(0,length);
  if (n > 0) {
      for (var i = 0; i < n; i++ ) {
          nums.push(0);
      }
  }
}
//2 改进
var moveZeroes = function(nums) {
    var length = nums.length;
    var n = 0;
    var j = 0;
    for (var i = 0; i < length; i++) {
        if(nums[i] != 0) {
            nums[j] = nums[i];
            j++;
        } else {
            n += 1;
        }
    }
    for (var i = 0; i < n; i++ ) {
        nums[length-1-i] = 0;
    }
};
//3 继续简化
var moveZeroes = function(nums) {
    var j = 0;
    for (var i = 0; i < nums.length; i++) {
        if(nums[i] != 0) {
            nums[j] = nums[i];
            j++;
        } 
    }
    for (var i = 0; i < nums.length-j; i++ ) {
        nums[nums.length - 1 - i] = 0;
    }
};

//4 最终版
var moveZeroes = function(nums) {
    var j = 0;
    for (var i = 0; i < nums.length; i++) {
        if(nums[i] != 0) {
            nums[j] = nums[i];
            j++;
        } 
    }
    for (var i = j; i < nums.length; i++ ) { //主要把这一步改得更直观
        nums[i] = 0;
    }
};

//测试
var nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);//[1, 3, 12, 0, 0]
