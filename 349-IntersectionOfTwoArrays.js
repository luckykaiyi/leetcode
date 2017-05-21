var intersection = function(nums1, nums2) {
  var obj1 = {};
  var obj2 = {};
  var result = [];
  for(var i = 0; i < nums1.length; i++) {
    if(!obj1[nums1[i]]) {
      obj1[nums1[i]] = 1;
    }
  }
  for(var i = 0; i < nums2.length; i++) {
    var k = nums2[i];
    if(obj1[k] && !obj2[k]) {
      obj2[k] = 1;
    }
  }
  for(var i in obj2) {
    result.push(Number(i));
  }
  return result;
};
var nums1 = [1, 2, 2, 1];
var nums2 = [2, 2];
console.log(intersection(nums1, nums2));
