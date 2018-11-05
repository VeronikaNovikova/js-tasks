(() => {
  let firstNumber,
      secondNumber;

  let button = document.querySelector('.js-button');

  let isEven = (number) => {
    return number % 2 === 0;
  };

  let getResult = () => {
    firstNumber = parseInt(document.getElementById('first_number').value);
    secondNumber = parseInt(document.getElementById('second_number').value);

    if (isEven(firstNumber) && !isEven(secondNumber)) {
      return alert('Одно нечётное число ' + secondNumber)
    } else if (!isEven(firstNumber) && isEven(secondNumber))
      return alert('Одно нечётное число ' + firstNumber);

    if (isEven(firstNumber) && isEven(secondNumber)) {
      return alert('Оба числа чётные, произведение = ' + (firstNumber * secondNumber));
    }
    return alert('Оба числа нечётные, сумма = ' + (firstNumber + secondNumber));
  };

  button.addEventListener('click', getResult);
})();
