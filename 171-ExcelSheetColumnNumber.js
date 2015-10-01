// 1
var titleToNumber = function(s) {
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var num = 0;
    for (var i = 0; i < s.length; i++) {
        var index = str.indexOf(s[i]) + 1;
        num += index * Math.pow(str.length, s.length - i - 1);
    }
    return num;
}
// 2
var titleToNumber = function(s) {
    var x = {}
    var string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = 0; i < string.length; i++) {
        x[string[i]] = i + 1;
    }
    var num = 0;
    for (var i = 0; i < s.length; i++) {
        var index = x[s[i]];
        num += index * Math.pow(string.length, s.length - i - 1);
    }
    return num;
}
// 3
var titleToNumber = function(s) {
    var num = 0;
    for (var i = 0; i < s.length; i++) {
        var index = s[i].charCodeAt() - 65 + 1;
        num += index * Math.pow(26, s.length - i - 1);
    }
    return num;
}
// 4
var titleToNumber = function(s) {
    var num = 0;
    for (var i = 0; i < s.length; i++) {
        var index = s[i].charCodeAt() - 65 + 1;
        num = num * 26 + index;
    }
    return num;
}
// test
var a = titleToNumber('AAA'); 
console.log(a);
