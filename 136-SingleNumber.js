//第一次尝试 通过排序的方法
var singleNumber = function(nums) {
    nums.sort();
    for (var i = 0; i < nums.length; i++) {
        if (0 == i  && nums[i] != nums[i + 1]) {
            return nums[i];
        }
        if ( i > 0 && i < nums.length - 1 && nums[i] != nums[i - 1] && nums[i] != nums[i + 1]) {
            return nums[i];
        }
        if (nums.length - 1 == i && nums[i] != nums[i - 1] ) {
            return nums[i];
        }
    }
}
//改进 神奇的异或
var singleNumber = function(nums) {
    var n = 0; 
    for (var i = 0; i < nums.length; i++) {
        n ^= nums[i];
    }
    return n;
}
// 测试
var nums = [8, 5, 3, 1, 5, 1, 3];
console.log(singleNumber(nums));
