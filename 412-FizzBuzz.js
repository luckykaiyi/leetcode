var fizzBuzz = function(n) {
  var outputs = [];
  for (var i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      outputs.push('FizzBuzz');
    } else if (i % 3 == 0) {
      outputs.push('Fizz');
    } else if (i % 5 == 0) {
      outputs.push('Buzz');
    } else {
      outputs.push(i.toString());
    }
  }
  return outputs;
}
console.log(fizzBuzz(15));
