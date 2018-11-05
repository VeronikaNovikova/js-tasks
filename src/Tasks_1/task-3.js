(() => {
  let button = document.querySelector('.js-button');

  let fib = (n) => {
    let a = 1,
        b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  };

  let callPrompt = () => {
    let n = prompt("Введите число");
    alert("Число Фибоначчи: " + fib(n));
  };

  button.addEventListener('click', callPrompt);
})();
