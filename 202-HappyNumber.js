var isHappy = function(n) {
    var obj = {};
    var sum = 0;
    while (obj[sum] != 2) {
        sum = 0;
        while (n) {
            sum += (n % 10) * (n % 10);
            n = parseInt(n / 10);
        }
        if (sum == 1) {
            return true;
        } else {
            obj[sum] = obj[sum] ? obj[sum] + 1 : 1;
            n = sum;
        }
    }
    return false;
}
console.log(isHappy(2));

