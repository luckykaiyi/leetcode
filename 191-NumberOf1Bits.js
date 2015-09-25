// 方法一
var hammingWeight = function(n) {
    if (Math.floor(n/2) == 0) {
        return n%2;
    }
    if (Math.floor(n/2) != 0) {
       var x =  hammingWeight(Math.floor(n/2));
       return n%2 + x;
    }
}
// 方法二
var hammingWeight = function(n) {
    var x = n.toString(2).toString();
    var y = 0;
    for (var i = 0 ; i < x.length; i++) {
        if (x[i] == '1') {
            y ++;
        }
    }
    return y;
}
// 方法三
var hammingWeight = function(n) {
    var x = 0;
    while (n != 0) {
        x += n%2;
        n = Math.floor(n/2);
    } 
    return x;
}
//方法四
var hammingWeight = function(n) {
     var x = 0; 
     while (n != 0) {
         x += n&1;
         n = n >>> 1;
     }
     return x;
}
// 运行
console.log(hammingWeight(11));
