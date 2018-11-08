(() => {
  let decorator = (fn) => {
    return checkType;

    function checkType(x) {
      if (isNaN(x)) {
        alert('not a number')
      } else {
        return fn(x)
      }
    }
  };

  function square(x) {
    return alert(Math.pow(x, 2));
  }

  let newSquare = decorator(square);

  let button = document.querySelector('.js-button');

  button.addEventListener("click", () => {
    let value = +document.getElementById("value").value;
    newSquare(value);
  });

})();
