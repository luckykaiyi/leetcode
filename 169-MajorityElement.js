// 方法一
var majorityElement = function(nums) {
    var record = {};
    for (var i = 0; i < nums.length; i++) {
        if (!record[nums[i]]) {
            record[nums[i]] = 1;
        } else {
            record[nums[i]] ++;
        }
    } 
    var maxValue = 0;
    var maxKey;
    for (i in record) {
        if (Number(record[i]) >= maxValue) {
            maxValue = Number(record[i]);
            maxKey = Number(i);
        }
    }
    return maxKey;
}
// 方法二
var majorityElement = function(nums) {
    var base = Math.floor(nums.length / 2) + 1;
    nums.sort();
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + base - 1]) {
            return nums[i];
        }
    }
}
var nums = [0, 3, 5, 1, 5, 5, 5];
console.log(majorityElement(nums));
