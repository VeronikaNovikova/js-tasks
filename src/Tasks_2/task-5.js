(() => {
  function sum(a) {
    let currentSum = a;

    function f(b) {
      currentSum += b;
      return f;
    }

    f.toString = function () {
      return currentSum;
    };

    return f;
  }

  let x = sum(2)(5)(10);

  alert("sum(1)(2): "+sum(1)(2)); // 3
  alert("sum(5)(-1)(2): "+sum(5)(-1)(2)); // 6
  alert("sum(6)(-1)(-2)(-3): "+sum(6)(-1)(-2)(-3)); // 0
  alert(x); // 17
})();
