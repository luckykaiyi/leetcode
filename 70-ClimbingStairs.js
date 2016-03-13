//递归方法 但是时间复杂度为O(2^N) 超时了...
/*
var climbStairs = function(n) {
    if (n == 1) {
        return 1;
    } else if (n == 2) {
        return 2;
    } else {
        return climbStairs(n - 1) + climbStairs(n - 2);
    }
}
*/
//改用 for 循环方式 时间复杂度为O(N) 
var climbStairs = function(n) {
    var r1 = 1;
    var r2 = 2;
    var r;
    if (n == 1) {
        return r1;
    } else if (n == 2) {
        return r2;
    } else {
        for (var i = 3; i <= n; i++) {
            r = r1 + r2;
            r1 = r2;
            r2 = r;
        }
        return  r;
    }
}
console.log(climbStairs(44));
