// ref.
var merge = function(nums1, m, nums2, n) {
  var i = m - 1;
  var j = n - 1;
  var k = m + n - 1;
  while(i >=0 && j >= 0) {
    if(nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
  while(j >= 0) {
    nums1[k--] = nums2[j--];
  }
};
var nums1 = [3, 6, 8];
var nums2 = [1, 9];
var m = 3;
var n = 2;
merge(nums1, m, nums2, n);
console.log(nums1);