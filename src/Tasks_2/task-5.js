(function() {
  function sum(a) {
    debugger;

    let currentSum = a;

    function f(b) {
      debugger;
      currentSum += b;
      return f;
    }

    f.toString = function () {
      debugger;
      return currentSum;
    };

    return f;
  }

  alert(sum(1)(2)); // 3
  alert(sum(5)(-1)(2)); // 6
  alert(sum(6)(-1)(-2)(-3)); // 0
  alert(sum(0)(1)(2)(3)(4)(5)); // 15
})();
