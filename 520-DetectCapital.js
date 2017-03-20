var detectCapitalUse = function(word) {
   var rule = new RegExp(/^[a-z]+$|^[A-Z]+$|^[A-Z][a-z]+$/);
   return rule.test(word);
}
console.log(detectCapitalUse('apple'))
console.log(detectCapitalUse('Apple'))
console.log(detectCapitalUse('APPLE'))
console.log(detectCapitalUse('AppLe'))


