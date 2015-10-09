var convertToTitle = function(n) {
    var arr = [];
    while (n != 0) {
        n --;
        arr.push(n % 26);
        n = Math.floor(n / 26);
    }
    arr.reverse();
    var result = '';
    for (var i = 0; i < arr.length; i++) {
        result +=  String.fromCharCode(arr[i] + 65);
    }
    return result;
}
