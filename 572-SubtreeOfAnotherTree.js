var isSubtree = function(s, t) {

}
var s = {
  val: 3,
  left: {
    val: 4,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 2,
      left: null,
      right: null
    }
  },
  right: {
    val: 5,
    left: null,
    right: null
  }
}
var t = {
  val: 4,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: {
    val: 2,
    left: null,
    right: null
  }
}
console.log(isSubtree(s, t));
