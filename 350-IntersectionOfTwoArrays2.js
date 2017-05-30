var intersect = function(nums1, nums2) {
  var obj1 = {};
  var obj2 = {};
  var result = [];
  for(var i = 0; i < nums1.length; i++) {
    if(!obj1[nums1[i]]) {
      obj1[nums1[i]] = 1;
    } else {
      obj1[nums1[i]]++;
    }
  }
  for(var i = 0; i < nums2.length; i++) {
    var k = nums2[i];
    if(obj1[k] && !obj2[k]) {
      obj2[k] = 1;
    } else {
      obj2[k]++;
    }
  }
  for(var i in obj2) {
    var len = Math.min(obj1[i], obj2[i]);
    for(var j = 0; j < len; j++) {
      result.push(Number(i));
    }
  }
  return result;
};
var nums1 = [1, 2, 2, 1];
var nums2 = [2, 2];
console.log(intersect(nums1, nums2));
