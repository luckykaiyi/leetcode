var isAnagram = function(s, t) {
    if (s.length == t.length) {
        var a =[], b = [];
        for (var i = 0; i < s.length; i++) {
            a.push(s[i]);
            b.push(t[i]);
        }
        a.sort();
        b.sort();
        for (var i = 0; i < a.length; i++) {
            if (a[i] != b[i]) {
                return false;
            }
        }
        return true;
    }
    return false;
}
var s = 'app';
var t = 'cba';
console.log(isAnagram(s,t));
