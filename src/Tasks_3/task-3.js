// Создать функцию createMatrix(), принимающую количество строк и количество столбцов матрицы и возвращающее матрицу (массив массивов),
// заполненную случайными числами в диапазоне от 0 до 100. Написать функцию, выполняющую суммирование двух таких «матриц»
(() => {
  let button = document.querySelector('.js-button'),
      resultBox = document.querySelector('.result');

  let createMatrix = (m, n) => {
    let matrix = [],
        i, j;

    for (i = 0; i < m; i++) {
      let row = [];
      for (j = 0; j < n; j++) {
        let value = Math.floor(Math.random()*100);
        row.push(value);
      }
      matrix.push(row);
    }
    return matrix;
  };

  let SumMatrix = (A, B) => {
    let m = A.length,
        n = A[0].length,
        sum = [],
        i, j;

    for (i = 0; i < m; i++) {
      sum[i] = [];
      for (j = 0; j < n; j++) {
        sum[i][j] = A[i][j]+B[i][j];
      }
      document.getElementById('matrix1').innerHTML += `[ `+A[i].join('  ')+` ]<br/>`;
      document.getElementById('matrix2').innerHTML += `[ `+B[i].join('  ')+` ]<br/>`;
      document.getElementById('matrixSum').innerHTML += `[ `+sum[i].join('  ')+` ]<br/>`;
    }
    return sum;
  };

  button.addEventListener('click', (e) => {
    e.preventDefault();

    let m = parseInt(document.getElementById('rows').value),
        n = parseInt(document.getElementById('cols').value);
    resultBox.style.visibility = 'visible';
    SumMatrix(createMatrix(m,n), createMatrix(m,n));
  });

})();