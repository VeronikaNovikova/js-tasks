(() => {
  let x, y;

  let enterNumbers = () => {
    while (true) {
      x = +prompt('Введите первое число', null);
      if (!Number.isInteger(x)) {
        alert("первый ввод – не число");
        return;
      }

      y = +prompt('Введите второе число', null);
      if (!Number.isInteger(y)) {
        alert("второй ввод – не число");
        return;
      }
      compareNumbers(x, y);
    }
  };

  let compareNumbers = (x, y) => {
    if (x < y) {
      alert("первое число меньше");
    } else if (x > y) {
      alert("второе число меньше");
    } else {
      alert("числа равны");
    }
  };

  enterNumbers();
})();
