//递归
var stairs = {
  1: 1,
  2: 2
} 
var climbStairs = function(n) {
    if(n in stairs) {
      return stairs[n];
    } else {
      var output = climbStairs(n - 1) + climbStairs(n - 2);
      stairs[n] = output;
      return output;
    }
}
//for 循环
var climbStairs1 = function(n) {
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
console.log(climbStairs1(44));
