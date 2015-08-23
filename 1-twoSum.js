// The first try , but time limit exceeded
var twoSum = function (nums,target) {
    for (var i = 0 ; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (target == nums[i] + nums[j]) {
                var output = [i + 1, j + 1];
                return output;
            }
        }
    }
}

// Try again , still not pass
var twoSum = function (nums,target) {
    var values = [];
    for (var i = 0 ; i < nums.length; i++) {
        var j = nums.indexOf(target - nums[i]);
        if (j != -1) {
            var output = [i + 1, j + 1]
            return output;
        }
    }
}

// Keep trying and done.
var twoSum = function (nums,target) {
    var values = {};
    for (var i = 0 ; i < nums.length; i++) {
        values [nums[i]] = i; 
    }
    for (var i = 0; i < nums.length; i++) {
        if ((target - nums[i]) in values && i != values[(target - nums[i])]) {
            var output = [i + 1, values[(target-nums[i])]+ 1];
            return output;
        }
    }
}

//A little modify  and make it better 
var twoSum = function(nums, target) {
    var values = {};
    for (var i = 0 ; i < nums.length; i++) {
        values [nums[i]] = i;
    }
    for (var i = 0; i < nums.length; i++) {
        var value = target - nums[i];
        if (value in values && i != values[value]) {
            var output = [i + 1, values[value]+ 1];
            return output;
        }
    }
};

