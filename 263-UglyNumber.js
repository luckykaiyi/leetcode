var isUgly = function(num) {
    if (num <= 0) {
        return false;
    }
    while (num != 1) {
        if (num % 2 == 0) {
            num = parseInt(num / 2);
            continue;
        }
        if (num % 3 == 0) {
            num = parseInt(num / 3);
            continue;
        }
        if (num % 5 == 0) {
            num = parseInt(num / 5);
            continue;
        }
        return false;
    }
    return true;
};
console.log(isUgly(22));
