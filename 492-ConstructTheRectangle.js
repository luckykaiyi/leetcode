var constructRectangle = function(area) {
    var l = area, w = 1;
    var m = Math.floor(Math.sqrt(area));
    for (var i = 1; i <= m; i++) {
        if(area % i == 0) {
            //l = i > (area / i) ? i : area / i;
            //w = i > (area / i) ? area / i : i;
            l = area / i;
            w = i;
        }
    }
    return [l, w]
}
console.log(constructRectangle(1));
console.log(constructRectangle(4));
console.log(constructRectangle(15));
console.log(constructRectangle(19));
console.log(constructRectangle(12));
