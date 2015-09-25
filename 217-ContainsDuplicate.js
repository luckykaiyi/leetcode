var containsDuplicate = function(nums) {
    var arr = nums.sort();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i-1] || arr[i] == arr[i+1]) {
            return true;
        }
    }
    return false;
}

var nums = [0, 4, 6, 8, 1];
console.log(containsDuplicate(nums));
