var findTheDifference = function(s, t) {
    var obj_s = {}, obj_t = {};
    for(var i = 0; i < s.length; i++) {
        if (!obj_s[s[i]]) {
            obj_s[s[i]] = 1;
        } else {
            obj_s[s[i]]++;
        }
    }
    for(var i = 0; i < t.length; i++) {
        if (!obj_t[t[i]]) {
            obj_t[t[i]] = 1;
        } else {
            obj_t[t[i]]++;
        }
    }
    for (var i in obj_t) {
        if(!obj_s[i] || (obj_t[i] > obj_s[i])) {
            return i;
        }
    }
}
var s = 'abcdecbbbf';
var t = 'abcdecbbbff';
console.log(findTheDifference(s, t));
