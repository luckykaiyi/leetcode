var generate = function(numRows) {
  if(numRows == 0) return [];
  if(numRows == 1) return [[1]];
  var triangle = generate(numRows - 1);
  triangle.push([1]);
  for(var i = 1; i < triangle[triangle.length - 2].length; i++) {
       triangle[triangle.length - 1].push(triangle[triangle.length - 2][i] + triangle[triangle.length - 2][i - 1]);
    }
  triangle[triangle.length - 1].push(1);
  return triangle;
};
